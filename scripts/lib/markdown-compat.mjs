/**
 * Kramdown → CommonMark/MDC compatibility shims, applied to post bodies at build time
 * (content:file:beforeParse). The markdown files themselves are never modified.
 *
 * 1. Legacy URLs percent-encoded as Latin-1 (%D6) make decodeURIComponent throw inside MDC;
 *    they are re-encoded as UTF-8.
 * 2. Kramdown ended an HTML block at the closing tag, CommonMark only at a blank line. Markdown
 *    text written directly after a closing tag (common in WordPress-era posts) would otherwise be
 *    swallowed into the raw HTML block and dropped by the renderer. A blank line is inserted.
 * 3. MDC treats `[text]` as an inline span and drops the brackets. Brackets that are not part of
 *    a link/image/reference are escaped so they render literally, as Kramdown did.
 */

const VOID_TAGS = new Set(['br', 'hr', 'img', 'input', 'meta', 'link', 'source', 'embed', 'param', 'area', 'col', 'wbr', 'track'])

/** Number of HTML elements left open at the end of a line (negative if more were closed). */
function openTagBalance(line) {
  let balance = 0
  for (const m of line.matchAll(/<(\/?)([a-zA-Z][a-zA-Z0-9-]*)[^>]*?(\/?)>/g)) {
    const [, closing, name, selfClosing] = m
    if (closing) balance--
    else if (!selfClosing && !VOID_TAGS.has(name.toLowerCase())) balance++
  }
  return balance
}

const isFence = (line) => /^\s{0,3}(`{3,}|~{3,})/.test(line)
const isBlank = (line) => /^\s*$/.test(line)
// CommonMark HTML block starts (types 1, 2, 6 and 7). A line such as `<strong>x</strong> text` is a
// paragraph with inline HTML, not a block, and must keep markdown processing.
const BLOCK_TAGS = 'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'
const RE_TYPE6 = new RegExp(`^\\s{0,3}</?(?:${BLOCK_TAGS})(?:\\s|/?>|$)`, 'i')
const RE_TYPE7 = /^\s{0,3}(?:<[a-zA-Z][a-zA-Z0-9-]*(?:\s+[a-zA-Z_:][a-zA-Z0-9_.:-]*(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?)*\s*\/?>|<\/[a-zA-Z][a-zA-Z0-9-]*\s*>)\s*$/
const RE_TYPE1_2 = /^\s{0,3}<(?:script|pre|style|textarea)(?:\s|>|$)|^\s{0,3}<!--/i
const startsHtml = (line) => RE_TYPE6.test(line) || RE_TYPE7.test(line) || RE_TYPE1_2.test(line)

/** Split a file into [frontMatter, body]; frontMatter includes both --- fences. */
export function splitFrontMatter(text) {
  const m = text.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/)
  return m ? [m[0], text.slice(m[0].length)] : ['', text]
}

export function fixLegacyUrls(body, log = () => {}) {
  return body.replace(/(href|src)="([^"]*%[0-9A-Fa-f]{2}[^"]*)"|\]\(([^)\s]*%[0-9A-Fa-f]{2}[^)\s]*)\)/g, (m, attr, attrUrl, mdUrl) => {
    const url = attrUrl ?? mdUrl
    try {
      decodeURIComponent(url)
      return m
    } catch {
      const fixed = url.replace(/(?:%[0-9A-Fa-f]{2})+/g, (seq) => {
        const bytes = seq.split('%').filter(Boolean).map((h) => parseInt(h, 16))
        return encodeURIComponent(String.fromCharCode(...bytes))
      })
      log(`re-encoded legacy URL ${url} → ${fixed}`)
      return attrUrl !== undefined ? `${attr}="${fixed}"` : `](${fixed})`
    }
  })
}

/** Insert a blank line between a "closed" HTML line and markdown text that directly follows it. */
export function separateHtmlBlocks(body, log = () => {}) {
  const lines = body.split('\n')
  const out = []
  let inFence = false
  let inserted = 0
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    out.push(line)
    if (isFence(line)) { inFence = !inFence; continue }
    if (inFence) continue
    const next = lines[i + 1]
    if (next === undefined || isBlank(next) || startsHtml(next)) continue
    if (!startsHtml(line) || openTagBalance(line) > 0) continue
    if (/^(\s{4}|\t)/.test(next)) continue // indented code, leave alone
    out.push('')
    inserted++
  }
  if (inserted) log(`inserted ${inserted} blank line(s) after HTML blocks`)
  return out.join('\n')
}

/**
 * Escape `[text]` that is not a link, image, footnote or reference so MDC keeps the brackets, and
 * convert markdown images that sit inside raw HTML blocks into <img> tags.
 */
export function escapeBareBrackets(body, log = () => {}) {
  const lines = body.split('\n')
  let inFence = false
  let inHtml = false
  let escaped = 0
  let converted = 0
  const escapeSegment = (seg) => seg.replace(/(^|[^!\]\\])\[([^\[\]\n^]+)\](?![\(\[:])/g, (m, pre, inner) => {
    escaped++
    return `${pre}\\[${inner}\\]`
  })
  const result = lines.map((line) => {
    if (isFence(line)) { inFence = !inFence; return line }
    if (inFence) return line
    if (isBlank(line)) { inHtml = false; return line }
    if (startsHtml(line)) inHtml = true
    if (inHtml) {
      // Markdown image syntax inside a raw HTML block is not processed by CommonMark (Jekyll's
      // Liquid image tags were). Turn it into an <img> so it still renders.
      return line.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (m, alt, src) => {
        converted++
        return `<img src="${src}" alt="${alt.replace(/"/g, '&quot;')}">`
      })
    }
    if (!line.includes('[')) return line
    // leave inline code spans untouched
    return line.split(/(`+[^`]*`+)/).map((seg, i) => (i % 2 ? seg : escapeSegment(seg))).join('')
  })
  if (escaped) log(`escaped ${escaped} bracket group(s)`)
  if (converted) log(`converted ${converted} markdown image(s) inside HTML to <img>`)
  return result.join('\n')
}

/** Apply every shim to a full markdown file (front matter is passed through untouched). */
export function makeCompatible(text, log = () => {}) {
  const [fm, body] = splitFrontMatter(text)
  let out = body
  out = fixLegacyUrls(out, log)
  out = separateHtmlBlocks(out, log)
  out = escapeBareBrackets(out, log)
  return fm + out
}
