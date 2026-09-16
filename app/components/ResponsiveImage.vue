<script setup lang="ts">
/**
 * Replacement for jekyll-responsive-image / jekyll-assets image tags: a lazy-loaded <img> with a
 * webp srcset at the old breakpoints (576/768/992/1200), linking to the original file (the old
 * site opened the full image on click). Remote images are passed through untouched.
 */
const props = defineProps<{
  src: string
  alt?: string
  width?: string | number
  height?: string | number
  link?: boolean
}>()
const isRemote = computed(() => /^https?:\/\//.test(props.src))
</script>

<template>
  <img v-if="isRemote" :src="src" :alt="alt || ''" :width="width" :height="height" loading="lazy" decoding="async" />
  <a v-else-if="link !== false" :href="src" target="_blank" rel="noopener" class="block cursor-zoom-in" :title="alt || 'Open full size image'">
    <NuxtImg :src="src" :alt="alt || ''" sizes="576px sm:768px md:992px lg:1200px" densities="x1" format="webp" loading="lazy" decoding="async" class="h-auto w-full" />
  </a>
  <NuxtImg v-else :src="src" :alt="alt || ''" sizes="576px sm:768px md:992px lg:1200px" densities="x1" format="webp" loading="lazy" decoding="async" class="h-auto w-full" />
</template>
