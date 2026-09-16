#!/usr/bin/env node
/**
 * Post-build step, run after `nuxt generate`:
 *  1. copy the server-rendered /not-found page over 404.html (Nuxt only emits an SPA shell there)
 *  2. collect the inline <script> bodies and inline event handlers that Nuxt emits
 * into the generated HTML, hash them, and substitute the placeholders in .output/public/_headers
 * so the Content-Security-Policy can stay at script-src 'self' + hashes (no 'unsafe-inline').
 */
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync, readdirSync, statSync, copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const OUT = '.output/public'
const walk = (dir) => readdirSync(dir).flatMap((n) => {
  const p = join(dir, n)
  return statSync(p).isDirectory() ? walk(p) : [p]
})
const sha = (s) => `'sha256-${createHash('sha256').update(s, 'utf8').digest('base64')}'`
const decode = (s) => s.replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')

// 1. real 404 page
const notFound = join(OUT, 'not-found.html')
if (existsSync(notFound)) {
  copyFileSync(notFound, join(OUT, '404.html'))
  console.log('404.html ← not-found.html')
} else {
  console.warn('not-found.html missing; keeping the SPA 404 shell')
}

// 2. CSP hashes
const scripts = new Map()
const handlers = new Map()
for (const f of walk(OUT).filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(f, 'utf8')
  for (const m of html.matchAll(/<script(\s[^>]*)?>([\s\S]*?)<\/script>/g)) {
    const attrs = m[1] || ''
    if (/\ssrc=/.test(attrs)) continue
    if (/type="(application\/(ld\+)?json|speculationrules)"/.test(attrs)) continue // not executed
    scripts.set(sha(m[2]), (scripts.get(sha(m[2])) || 0) + 1)
  }
  for (const m of html.matchAll(/\son[a-z]+="([^"]*)"/g)) {
    const code = decode(m[1])
    handlers.set(sha(code), code)
  }
}

console.log(`Inline scripts: ${scripts.size} distinct hash(es)`)
for (const [h, n] of scripts) console.log(`  ${h}  (${n} pages)`)
console.log(`Inline event handlers: ${handlers.size} distinct hash(es)`)
for (const [h, code] of handlers) console.log(`  ${h}  ${code}`)

const headersPath = join(OUT, '_headers')
let headers = readFileSync(headersPath, 'utf8')
headers = headers
  .replace('__INLINE_SCRIPT_HASHES__', [...scripts.keys()].join(' '))
  .replace('__INLINE_HANDLER_HASHES__', handlers.size ? `'unsafe-hashes' ${[...handlers.keys()].join(' ')}` : '')
  .replace(/ {2,}/g, ' ')
writeFileSync(headersPath, headers)
console.log(`Updated ${headersPath}`)
