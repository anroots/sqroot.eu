<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()
const is404 = computed(() => props.error?.statusCode === 404)

useSeoMeta({
  title: is404.value ? 'Page Not Found' : 'Error',
  robots: 'noindex',
})
</script>

<template>
  <NuxtLayout>
    <PageHeader :title="is404 ? 'Page Not Found' : 'Something broke'" :description="is404 ? 'Sorry - no such page here.' : String(error?.message || '')" />
    <div class="mx-auto max-w-3xl px-4 py-16 text-center">
      <p class="mb-8 text-lg">
        <template v-if="is404">Sorry - no such page here.</template>
        <template v-else>{{ error?.statusCode }} – {{ error?.statusMessage }}</template>
      </p>
      <a href="/" class="btn" @click.prevent="clearError({ redirect: '/' })">Back to the front page</a>
    </div>
  </NuxtLayout>
</template>
