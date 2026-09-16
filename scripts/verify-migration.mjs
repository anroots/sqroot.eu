#!/usr/bin/env node
/**
 * Verifies the generated static site (.output/public) against the migration guarantees.
 *
 *   node scripts/verify-migration.mjs            # everything, incl. comparison with the live site
 *   node scripts/verify-migration.mjs --offline  # only checks that need no network (used in CI)
 *
 * Checks
 *   1. URL parity: every URL in the live sitemap.xml has a generated file
 *   2. Assets: every local /content/... reference in generated HTML exists
 *   3. Internal links: every root-relative <a href> resolves to a generated file
 *   4. Text fidelity (online only): article text of each post matches the live site
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const OUT = '.output/public'
const LIVE = 'https://sqroot.eu'
const OFFLINE = process.argv.includes('--offline')
const ONLY = process.argv.find((a) => a.startsWith('--only='))?.slice(7)

let failures = 0
const fail = (msg) => { failures++; console.error('  ✗ ' + msg) }
const ok = (msg) => console.log('  ✓ ' + msg)

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n)
    return statSync(p).isDirectory() ? walk(p) : [p]
  })
}
const htmlFiles = walk(OUT).filter((f) => f.endsWith('.html'))
const existsAt = (path) => {
  const clean = decodeURIComponent(path.replace(/[?#].*$/, '').replace(/\/$/, ''))
  return existsSync(join(OUT, clean)) || existsSync(join(OUT, clean + '.html')) || existsSync(join(OUT, clean, 'index.html'))
}
const ENTITIES = { auml: 'ä', ouml: 'ö', uuml: 'ü', otilde: 'õ', Auml: 'Ä', Ouml: 'Ö', Uuml: 'Ü', Otilde: 'Õ', mdash: '—', ndash: '–', hellip: '…', laquo: '«', raquo: '»', lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”', copy: '©', deg: '°', euro: '€' }
const textOf = (html) => html
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<noscript>[\s\S]*?<\/noscript>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;|&#160;/g, ' ').replace(/&amp;/g, '&')
  .replace(/&([a-zA-Z]+);/g, (m, n) => ENTITIES[n] ?? m).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'")
  .replace(/\s+/g, ' ').trim()

console.log(`Generated HTML files: ${htmlFiles.length}`)

// 2. assets
if (!ONLY || ONLY === 'assets') {
  console.log('\nAssets referenced from generated HTML')
  const missing = new Set()
  let refs = 0
  for (const f of htmlFiles) {
    const html = readFileSync(f, 'utf8')
    for (const m of html.matchAll(/(?:src|href|srcset|content)="(\/content\/[^"\s]+)/g)) {
      refs++
      if (!existsAt(m[1])) missing.add(`${m[1]}  (in ${f.replace(OUT, '')})`)
    }
  }
  if (missing.size) for (const m of missing) fail(m)
  else ok(`${refs} /content/ references all resolve`)
}

// 3. internal links
if (!ONLY || ONLY === 'links') {
  console.log('\nInternal links')
  const broken = new Set()
  let links = 0
  for (const f of htmlFiles) {
    const html = readFileSync(f, 'utf8')
    for (const m of html.matchAll(/<a[^>]+href="(\/[^"\s#?]*)/g)) {
      const href = m[1]
      if (href.startsWith('/_') || href.startsWith('//')) continue
      links++
      if (!existsAt(href)) broken.add(`${href}  (in ${f.replace(OUT, '')})`)
    }
  }
  if (broken.size) for (const b of broken) fail(b)
  else ok(`${links} internal links all resolve`)
}

if (OFFLINE) {
  console.log(failures ? `\n${failures} failure(s)` : '\nAll offline checks passed')
  process.exit(failures ? 1 : 0)
}

// 1. URL parity with the live sitemap
if (!ONLY || ONLY === 'urls') {
  console.log('\nURL parity with live sitemap.xml')
  const xml = await (await fetch(`${LIVE}/sitemap.xml`)).text()
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname)
  const missing = urls.filter((u) => !existsAt(u))
  if (missing.length) for (const m of missing) fail(`missing: ${m}`)
  else ok(`${urls.length} live URLs all have a generated page`)
}

// 4. text fidelity
if (!ONLY || ONLY === 'text') {
  console.log('\nPost text fidelity vs live site (article body, whitespace-normalised)')
  const posts = htmlFiles.filter((f) => /\/\d{4}\/[^/]+\.html$/.test(f))
  let same = 0
  const diffs = []
  // Normalise typography the old Kramdown renderer applied (smart quotes, ellipsis, dashes) and
  // entity quirks, so only genuine wording differences are reported
  const norm = (s) => s
    .replace(/https?:\/\/sqroot\.eu\//g, '/')
    .replace(/\bView gist on GitHub\b/g, '')
    .replace(/[\u2018\u2019\u201A\u2032]/g, "'").replace(/[\u201C\u201D\u201E\u2033]/g, '"')
    .replace(/\u2026/g, '...').replace(/[\u2013\u2014]/g, '-')
    .replace(/&laquo;|\u00AB/g, '<<').replace(/&raquo;|\u00BB/g, '>>')
    .replace(/&#(\d+);/g, (m, n) => String.fromCharCode(Number(n)))           // old site double-escaped some entities
    .replace(/<\/?(em|span|strong|br)\s*\/?>/g, '')                          // stray literal tags the old site displayed
    .replace(/\[email protected\]|[\w.+-]+@[\w-]+\.[\w.-]+/g, 'EMAIL')     // Cloudflare e-mail obfuscation on the live site
    .replace(/\(\s+/g, '(').replace(/\s+\)/g, ')')                          // autolink markup adds spaces around URLs
    .replace(/\s+/g, ' ').trim()
  let i = 0
  for (const f of posts) {
    const path = f.replace(OUT, '').replace(/\.html$/, '')
    i++
    let live
    try {
      const res = await fetch(LIVE + path)
      if (!res.ok) { fail(`${path}: live HTTP ${res.status}`); continue }
      live = await res.text()
    } catch (e) { fail(`${path}: ${e.message}`); continue }
    const liveBody = live.match(/<div itemprop="articleBody">([\s\S]*?)<\/div>\s*<hr>/)?.[1] ?? ''
    const newBody = readFileSync(f, 'utf8').match(/<article itemprop="articleBody"[^>]*>([\s\S]*?)<\/article>/)?.[1] ?? ''
    // Compare only prose: drop code blocks + gists on both sides (highlighting markup differs)
    const strip = (h) => h
      .replace(/<div class="gist[\s\S]*?View gist on GitHub<\/a>\s*<\/p>\s*<\/div>/gi, ' ')
      .replace(/<pre[\s\S]*?<\/pre>/gi, ' ')
    const a = norm(textOf(strip(liveBody)))
    const b = norm(textOf(strip(newBody)))
    if (a === b) { same++; continue }
    // Tolerate pure whitespace/entity differences by comparing letters only
    const letters = (s) => s.replace(/[^\p{L}\p{N}]/gu, '')
    if (letters(a) === letters(b)) { same++; continue }
    // find first divergence for the report
    let k = 0
    while (k < a.length && k < b.length && a[k] === b[k]) k++
    diffs.push(`${path}\n      live: …${a.slice(Math.max(0, k - 60), k + 100)}\n      new:  …${b.slice(Math.max(0, k - 60), k + 100)}`)
    if (i % 25 === 0) process.stdout.write(`    …${i}/${posts.length}\n`)
  }
  ok(`${same}/${posts.length} posts have identical article text`)
  for (const d of diffs) fail(d)
}

console.log(failures ? `\n${failures} failure(s)` : '\nAll checks passed')
process.exit(failures ? 1 : 0)
