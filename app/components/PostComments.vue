<script setup lang="ts">
/**
 * Read-only archive of comments imported from the old WordPress blog (stored in post front matter).
 */
defineProps<{
  comments: Array<{ id: number; author: string; author_url?: string | null; date: string; content: string }>
}>()
</script>

<template>
  <section v-if="comments.length" class="border-t border-neutral-200 py-10 dark:border-neutral-800" aria-labelledby="comments-heading">
    <h2 id="comments-heading" class="text-xl font-extrabold tracking-tight">
      {{ comments.length }} archived {{ comments.length === 1 ? 'comment' : 'comments' }}
    </h2>
    <p class="mt-1 text-sm text-ink-muted dark:text-neutral-500">Comments were imported from the old blog and are closed.</p>
    <ol class="mt-6 space-y-6">
      <li v-for="c in comments" :key="c.id" class="rounded-sm border border-neutral-200 p-5 dark:border-neutral-800">
        <p class="text-sm">
          <a v-if="c.author_url" :href="c.author_url" rel="nofollow ugc" target="_blank" class="font-extrabold hover:text-brand">{{ c.author }}</a>
          <span v-else class="font-extrabold">{{ c.author }}</span>
          <span class="text-ink-muted dark:text-neutral-500"> · <time :datetime="c.date">{{ formatDate(c.date) }}</time></span>
        </p>
        <div class="mt-3 whitespace-pre-line text-base leading-relaxed">{{ c.content }}</div>
      </li>
    </ol>
  </section>
</template>
