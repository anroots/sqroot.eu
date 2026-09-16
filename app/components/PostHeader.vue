<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle?: string | null
  date: string
  readingTime?: string | null
  image?: string | null
}>()
const site = useSite()
const src = computed(() => props.image || site.headerImage)
</script>

<template>
  <header class="relative overflow-hidden bg-neutral-900 text-white">
    <NuxtImg :src="src" alt="" class="absolute inset-0 h-full w-full object-cover" sizes="768px md:1200px lg:1600px" densities="x1" format="webp" preload fetchpriority="high" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
    <div class="relative mx-auto max-w-4xl px-4 pb-16 pt-32 sm:pb-24 sm:pt-48">
      <h1 itemprop="headline" class="text-3xl font-extrabold tracking-tight drop-shadow-md sm:text-5xl lg:text-6xl">{{ title }}</h1>
      <h2 v-if="subtitle" itemprop="alternativeHeadline" class="mt-4 text-xl font-semibold drop-shadow sm:text-2xl lg:text-3xl">{{ subtitle }}</h2>
      <p class="mt-6 text-base font-light italic sm:text-lg">
        Published on <time itemprop="datePublished" :datetime="date">{{ formatDate(date) }}</time><template v-if="readingTime">. Takes {{ readingTime }} to read.</template>
      </p>
    </div>
  </header>
</template>
