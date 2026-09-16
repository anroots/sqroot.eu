import { defineNuxtModule } from '@nuxt/kit'
// @ts-expect-error plain ESM helper shared with the scripts/ tooling
import { makeCompatible } from '../scripts/lib/markdown-compat.mjs'

/**
 * Build-time hooks for the Nuxt Content collections.
 *
 *  - beforeParse: Kramdown → CommonMark/MDC compatibility shims (see scripts/lib/markdown-compat.mjs).
 *    The source files stay untouched; only the parsed output changes.
 *  - afterParse: reading time (same formula as the old Jekyll reading_time filter), word count
 *    and a default category for posts.
 */
export default defineNuxtModule({
  meta: { name: 'sqroot-content-hooks' },
  setup(_options, nuxt) {
    nuxt.hook('content:file:beforeParse' as any, (ctx: any) => {
      const { file } = ctx
      if (!file.id.startsWith('posts/') || typeof file.body !== 'string') return
      file.body = makeCompatible(file.body, (msg: string) => console.info(`[content-hooks] ${file.id}: ${msg}`))
    })

    nuxt.hook('content:file:afterParse' as any, (ctx: any) => {
      const { file, content } = ctx
      if (!file.id.startsWith('posts/')) return
      const body = String(file.body || '').replace(/^---[\s\S]*?\n---\n?/, '')
      const words = body.split(/\s+/).filter(Boolean).length
      const minutes = Math.floor(words / 180)
      const label = minutes === 1 ? 'minute' : 'minutes'
      content.wordCount = words
      content.readingTime = minutes > 0 ? `about ${minutes} ${label}` : 'less than 1 minute'
      if (!content.category) content.category = 'Misc'
    })
  },
})
