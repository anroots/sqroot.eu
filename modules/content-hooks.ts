import { defineNuxtModule } from '@nuxt/kit'

/**
 * Build-time hook for the posts collection: reading time (same formula as the old Jekyll
 * reading_time filter), word count and a default category.
 */
export default defineNuxtModule({
  meta: { name: 'sqroot-content-hooks' },
  setup(_options, nuxt) {
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
