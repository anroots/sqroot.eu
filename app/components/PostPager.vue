<script setup lang="ts">
defineProps<{
  prev?: { path: string; title: string } | null
  next?: { path: string; title: string } | null
}>()
</script>

<template>
  <nav v-if="prev || next" class="flex flex-col justify-between gap-4 border-t border-neutral-200 py-8 sm:flex-row dark:border-neutral-800" aria-label="Adjacent posts">
    <NuxtLink v-if="prev" :to="prev.path" class="btn" :title="prev.title" rel="prev">
      <Icon name="lucide:arrow-left" class="size-4" aria-hidden="true" /> Previous post
    </NuxtLink>
    <span v-else />
    <NuxtLink v-if="next" :to="next.path" class="btn" :title="next.title" rel="next">
      Next post <Icon name="lucide:arrow-right" class="size-4" aria-hidden="true" />
    </NuxtLink>
  </nav>
</template>
