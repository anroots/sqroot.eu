<script setup lang="ts">
const site = useSite()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-neutral-200 py-12 dark:border-neutral-800">
    <div class="mx-auto max-w-3xl px-4 text-center">
      <SocialLinks />
      <p class="mt-6 text-sm text-ink-muted">
        <NuxtLink to="/about" title="About me" class="hover:text-brand">{{ site.author }}</NuxtLink> {{ year }}
      </p>
    </div>
  </footer>
</template>
