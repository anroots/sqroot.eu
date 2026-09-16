<script setup lang="ts">
defineProps<{
  code?: string
  language?: string | null
  filename?: string | null
  highlights?: number[]
  meta?: string | null
  class?: string | null
  style?: string | object | null
}>()
</script>

<template>
  <div class="not-prose group relative my-6 overflow-hidden rounded-sm border border-neutral-200 bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900">
    <div v-if="filename" class="border-b border-neutral-200 px-4 py-1.5 font-mono text-xs text-ink-muted dark:border-neutral-700 dark:text-neutral-400">
      {{ filename }}
    </div>
    <pre :class="[$props.class, 'overflow-x-auto p-4 text-sm leading-relaxed']" :style="style"><slot /></pre>
  </div>
</template>
