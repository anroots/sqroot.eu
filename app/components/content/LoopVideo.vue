<script setup lang="ts">
/**
 * Short silent looping clip that behaves like a GIF (autoplays muted, inline on mobile).
 * Use an H.264 MP4 so every browser can play it.
 *
 * Usage in markdown:  ::loop-video{src="/content/2026/feedback.mp4" alt="What the clip shows"}
 */
defineProps<{
  src: string
  alt?: string
  poster?: string
}>()
</script>

<template>
  <video
    :src="src"
    :poster="poster"
    :aria-label="alt"
    autoplay
    loop
    muted
    playsinline
    preload="metadata"
    class="my-6 h-auto w-full"
  />
</template>
