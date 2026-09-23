<script setup lang="ts">
const site = useSite()
</script>

<template>
  <ul class="flex items-center justify-center gap-3">
    <li v-for="s in site.socials" :key="s.url">
      <a
        :href="s.url"
        :title="s.name"
        :aria-label="s.name"
        :target="s.url.startsWith('http') ? '_blank' : undefined"
        :rel="s.url.startsWith('http') ? 'me' : undefined"
        class="inline-flex size-11 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-brand dark:bg-neutral-200 dark:text-night dark:hover:bg-brand dark:hover:text-white"
      >
        <Icon :name="s.icon" class="size-5" aria-hidden="true" />
      </a>
    </li>
  </ul>
</template>
