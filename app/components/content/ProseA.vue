<script setup lang="ts">
const props = defineProps<{ href?: string; target?: string }>()
const external = computed(() => /^https?:\/\//.test(props.href || ''))
</script>

<template>
  <NuxtLink :href="href" :target="target || (external ? '_blank' : undefined)" :rel="external ? 'noopener' : undefined">
    <slot />
  </NuxtLink>
</template>
