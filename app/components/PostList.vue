<script setup lang="ts">
defineProps<{
  posts: Array<{ path: string; title: string; subtitle?: string | null; date: string; readingTime?: string | null }>
}>()
</script>

<template>
  <div class="divide-y divide-neutral-200 dark:divide-neutral-800">
    <PostPreview v-for="post in posts" :key="post.path" :post="post" class="py-8" />
  </div>
</template>
