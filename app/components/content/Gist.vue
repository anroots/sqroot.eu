<script setup lang="ts">
/**
 * Renders a GitHub gist that was vendored into content/gists/<id>.md by scripts/fetch-gists.mjs.
 * Fully static: highlighted at build time, no gist.github.com JavaScript is loaded.
 *
 * Usage in markdown:  ::gist{id="4647548"}
 */
const props = defineProps<{ id: string }>()

const { data: gist } = await useAsyncData(`gist-${props.id}`, () =>
  queryCollection('gists').path(`/gists/${props.id}`).first(),
)
</script>

<template>
  <div v-if="gist" class="gist not-prose my-6">
    <ContentRenderer :value="gist" class="gist-body" />
    <p class="mt-1 text-right text-xs text-ink-muted dark:text-neutral-500">
      <a :href="gist.url" target="_blank" rel="noopener" class="hover:text-brand">View gist on GitHub</a>
    </p>
  </div>
  <p v-else class="text-sm text-ink-muted">Gist {{ id }} is not available.</p>
</template>
