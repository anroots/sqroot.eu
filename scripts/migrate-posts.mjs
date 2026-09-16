#!/usr/bin/env node
/**
 * One-off codemod: migrate Jekyll posts from _posts/ into Nuxt Content collection content/posts/.
 *
 * Only front matter and Jekyll/Liquid plugin injects are rewritten. Prose is never touched.
 *
 *   node scripts/migrate-posts.mjs --dry-run   # report only
 *   node scripts/migrate-posts.mjs             # git mv + rewrite
 */
import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, existsSync } from 'node:fs'
import { join, basename, dirname } from 'node:path'
import { execFileSync } from 'node:child_process'

const DRY = process.argv.includes('--dry-run')
const SRC = '_posts'
const DEST = 'content/posts'

const stats = {}
const bump = (k, n = 1) => { stats[k] = (stats[k] || 0) + n }
const problems = []

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    return statSync(p).isDirectory() ? walk(p) : [p]
  })
}

function count(re, s) {
  return (s.match(re) || []).length
}

function rewriteFrontMatter(fm, date, file) {
  let out = fm
  // 1. inject date after the title line (fallback: prepend)
  if (/^date:/m.test(out)) {
    bump('date-already-present')
  } else if (/^title:.*$/m.test(out)) {
    out = out.replace(/^(title:.*)$/m, `$1\ndate: ${date}`)
    bump('date-injected')
  } else {
    out = `date: ${date}\n` + out
    bump('date-injected-prepend')
    problems.push(`${file}: no title line in front matter`)
  }
  // 2. header-img → image (root-relative)
  out = out.replace(/^header-img:\s*["']?\/?(content\/[^"'\s]+)["']?\s*$/m, (_, p) => {
    bump('header-img→image')
    return `image: /${p}`
  })
  if (/^header-img:/m.test(out)) problems.push(`${file}: header-img not converted`)
  // 3. PII scrub in comments
  const before = out
  out = out.replace(/^\s+author_email:.*\n/gm, () => { bump('author_email-removed'); return '' })
  out = out.replace(/^\s+date_gmt:.*\n/gm, () => { bump('date_gmt-removed'); return '' })
  if (before !== out && /author_email|date_gmt/.test(out)) problems.push(`${file}: PII scrub incomplete`)
  return out
}

function rewriteBody(body, file) {
  let out = body

  // {{ site.url }} / {{site.url }} / {{ site_url }} → '' (paths become root-relative)
  out = out.replace(/\{\{\s*site[._]url\s*\}\}/g, () => { bump('site.url-removed'); return '' })

  // {% asset PATH [@pic] [alt="X"] %} → ![X](/content/PATH)
  out = out.replace(/\{%\s*asset\s+"?([^"\s%]+)"?((?:\s+@\w+)*)(?:\s+alt="([^"]*)")?\s*%\}/g, (_, p, mods, alt = '') => {
    bump('asset→markdown-image')
    if (/[\[\]]/.test(alt)) problems.push(`${file}: alt text contains brackets: ${alt}`)
    return `![${alt}](/content/${p})`
  })

  // {% responsive_image path: P alt="X" %} → ![X](/P)
  out = out.replace(/\{%\s*responsive_image\s+path:\s*([^\s%]+)\s+alt="([^"]*)"\s*%\}/g, (_, p, alt) => {
    bump('responsive_image→markdown-image')
    if (/[\[\]]/.test(alt)) problems.push(`${file}: alt text contains brackets: ${alt}`)
    return `![${alt}](/${p.replace(/^\//, '')})`
  })

  // {% post_url 2011/2011-09-06-slug %} → /2011/slug
  out = out.replace(/\{%\s*post_url\s+(\d{4})\/\d{4}-\d{2}-\d{2}-([^\s%]+?)\s*%\}/g, (_, y, slug) => {
    bump('post_url→path')
    return `/${y}/${slug}`
  })

  // <script src="https://gist.github.com/[USER/]ID.js[?file=NAME]"></script> → ::gist{id="ID" [file="NAME"]}
  out = out.replace(/<script[^>]*src="(?:https?:)?\/\/gist\.github\.com\/(?:[^/"?]+\/)?([A-Za-z0-9]+)\.js(?:\?file=([^"&]+))?"[^>]*>\s*<\/script>/g, (_, id, file) => {
    bump('gist→component')
    return file ? `::gist{id="${id}" file="${file}"}\n::` : `::gist{id="${id}"}\n::`
  })

  // asciinema <script ... src="https://asciinema.org/a/ID.js" ...></script> → ::asciinema{id="ID"}
  out = out.replace(/<script[^>]*src="(?:https?:)?\/\/asciinema\.org\/a\/(\d+)\.js"[^>]*>\s*<\/script>/g, (_, id) => {
    bump('asciinema→component')
    return `::asciinema{id="${id}"}\n::`
  })

  // twitter widgets.js loader: drop the script tag only (the blockquote stays byte-identical)
  out = out.replace(/[ \t]*<script[^>]*platform\.twitter\.com\/widgets\.js[^>]*>\s*<\/script>[ \t]*\n?/g, () => {
    bump('twitter-script-removed')
    return ''
  })

  // YouTube iframes over plain http → https (scheme only)
  out = out.replace(/(<iframe[^>]*src=")http:\/\/(www\.youtube\.com\/)/g, (_, a, b) => {
    bump('youtube-http→https')
    return `${a}https://${b}`
  })

  // Anything Liquid left over is a bug
  const leftover = out.match(/\{%[^%]*%\}|\{\{[^}]*\}\}/g)
  if (leftover) problems.push(`${file}: leftover Liquid: ${leftover.join(' | ')}`)
  const scripts = out.match(/<script[^>]*>/g)
  if (scripts) problems.push(`${file}: leftover <script>: ${scripts.join(' | ')}`)

  return out
}

function migrateFile(src) {
  const m = basename(src).match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.(md|markdown)$/)
  if (!m) { problems.push(`${src}: unexpected filename`); return }
  const [, y, mo, d, slug] = m
  const dest = join(DEST, y, `${slug}.md`)
  const raw = readFileSync(src, 'utf8')
  const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/)
  if (!fmMatch) { problems.push(`${src}: no front matter`); return }
  const fm = rewriteFrontMatter(fmMatch[1], `${y}-${mo}-${d}`, src)
  const body = rewriteBody(raw.slice(fmMatch[0].length), src)
  const result = `---\n${fm}\n---\n${body}`
  bump('posts')
  if (DRY) return
  mkdirSync(dirname(dest), { recursive: true })
  execFileSync('git', ['mv', src, dest])
  writeFileSync(dest, result)
}

if (!existsSync(SRC)) {
  console.log(`${SRC} does not exist – nothing to migrate.`)
  process.exit(0)
}
const files = walk(SRC).filter((f) => /\.(md|markdown)$/.test(f)).sort()
for (const f of files) migrateFile(f)

console.log(DRY ? '[dry-run] ' : '', JSON.stringify(stats, null, 2))
if (problems.length) {
  console.error(`\n${problems.length} problem(s):`)
  for (const p of problems) console.error(' - ' + p)
  process.exitCode = 1
}
