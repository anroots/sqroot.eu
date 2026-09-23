<script setup lang="ts">
defineProps<{
  post: { path: string; title: string; subtitle?: string | null; date: string; readingTime?: string | null }
}>()
</script>

<template>
  <article class="post-preview">
    <NuxtLink :to="post.path" class="group block no-underline">
      <h2 class="text-2xl font-extrabold tracking-tight transition-colors group-hover:text-brand sm:text-3xl">{{ post.title }}</h2>
      <h3 v-if="post.subtitle" class="mt-2 text-lg font-normal text-ink-muted transition-colors group-hover:text-brand sm:text-xl dark:text-neutral-400">{{ post.subtitle }}</h3>
    </NuxtLink>
    <p class="mt-3 text-sm italic text-ink-muted dark:text-neutral-500">
      Written on <time :datetime="post.date">{{ formatDate(post.date) }}</time><template v-if="post.readingTime">. Takes {{ post.readingTime }} to read.</template>
    </p>
  </article>
</template>
