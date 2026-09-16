<script setup lang="ts">
/** Markdown images inside posts/pages → responsive <picture> (local) or plain <img> (remote). */
defineProps<{
  src: string
  alt?: string
  width?: string | number
  height?: string | number
}>()
</script>

<template>
  <ResponsiveImage :src="src" :alt="alt" :width="width" :height="height" />
</template>
