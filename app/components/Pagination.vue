<script setup lang="ts">
const props = defineProps<{ page: number; totalPages: number }>()
const newer = computed(() => (props.page <= 1 ? null : props.page === 2 ? '/' : `/page${props.page - 1}`))
const older = computed(() => (props.page >= props.totalPages ? null : `/page${props.page + 1}`))
</script>

<template>
  <nav v-if="totalPages > 1" class="flex items-center justify-between gap-4 py-8" aria-label="Pagination">
    <NuxtLink v-if="newer" :to="newer" class="btn" rel="prev">
      <Icon name="lucide:arrow-left" class="size-4" aria-hidden="true" /> Newer posts
    </NuxtLink>
    <span v-else />
    <span class="label-caps text-ink-muted">Page {{ page }} of {{ totalPages }}</span>
    <NuxtLink v-if="older" :to="older" class="btn" rel="next">
      Older posts <Icon name="lucide:arrow-right" class="size-4" aria-hidden="true" />
    </NuxtLink>
    <span v-else />
  </nav>
</template>
