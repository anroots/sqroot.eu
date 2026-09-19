#!/usr/bin/env node
/**
 * Vendor every GitHub gist embedded in posts into content/gists/<id>.md so the <Gist> component
 * can render them through the normal Nuxt Content pipeline (build-time Shiki highlighting, no
 * gist.github.com JavaScript, no network at build time).
 *
 *   node scripts/fetch-gists.mjs            # fetch gists that are not vendored yet
 *   node scripts/fetch-gists.mjs --refresh  # re-fetch everything
 *
 * Set GITHUB_TOKEN to avoid the unauthenticated API rate limit.
 */
import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const OUT = 'content/gists'
const REFRESH = process.argv.includes('--refresh')
const ids = new Set()

function walk(dir) {
  if (!existsSync(dir)) return []
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n)
    return statSync(p).isDirectory() ? walk(p) : [p]
  })
}
for (const f of walk('content/posts')) {
  const s = readFileSync(f, 'utf8')
  for (const m of s.matchAll(/::gist\{id="([A-Za-z0-9]+)"/g)) ids.add(m[1])
}
console.log(`${ids.size} gist(s) referenced`)

// Map GitHub's language names / file extensions to the Shiki languages enabled in nuxt.config.ts
const LANG = {
  python: 'python', java: 'java', shell: 'bash', javascript: 'js', php: 'php', ruby: 'ruby', json: 'json',
  html: 'html', css: 'css', c: 'c', yaml: 'yaml', xml: 'xml', sql: 'sql', markdown: 'md', typescript: 'ts',
}
const lang = (f) => {
  const ext = f.filename.split('.').pop()?.toLowerCase() || ''
  if (/^(rules|conf|ini|cfg|txt)$/.test(ext)) return 'text'
  return LANG[(f.language || '').toLowerCase()] || LANG[ext] || ext || 'text'
}
// Keep the author's address out of the generated site in a form address harvesters recognise
const obfuscateEmail = (s) => s.replace(/\bando@sqroot\.eu\b/g, 'ando [at] sqroot [dot] eu')
const yamlStr = (s) => JSON.stringify(String(s ?? ''))

mkdirSync(OUT, { recursive: true })
const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'sqroot.eu-build' }
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`

let failed = 0
for (const id of ids) {
  const dest = join(OUT, `${id}.md`)
  if (!REFRESH && existsSync(dest)) { console.log(`  = ${id} (cached)`); continue }
  const res = await fetch(`https://api.github.com/gists/${id}`, { headers })
  if (!res.ok) { console.error(`  ! ${id}: HTTP ${res.status}`); failed++; continue }
  const g = await res.json()
  const files = Object.values(g.files)
  const fence = '`'.repeat(Math.max(3, ...files.map((f) => (f.content.match(/`+/g) || ['']).reduce((a, b) => Math.max(a, b.length), 0) + 1)))
  const body = files
    .map((f) => `${fence}${lang(f)} [${f.filename}]\n${obfuscateEmail(f.content.replace(/\r\n/g, '\n').replace(/\n+$/, ''))}\n${fence}`)
    .join('\n\n')
  const md = `---
title: ${yamlStr(g.description || files[0]?.filename || id)}
gistId: ${yamlStr(g.id)}
owner: ${yamlStr(g.owner?.login ?? '')}
url: ${yamlStr(g.html_url)}
createdAt: ${yamlStr(g.created_at)}
files:
${files.map((f) => `  - ${yamlStr(f.filename)}`).join('\n')}
---

${body}
`
  writeFileSync(dest, md)
  console.log(`  + ${id}: ${files.map((f) => f.filename).join(', ')}`)
}
if (failed) process.exitCode = 1
