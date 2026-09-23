<script setup lang="ts">
/**
 * Server-rendered 404 page. Nuxt only emits a client-rendered SPA shell as 404.html, so the
 * post-build step (scripts/postbuild.mjs) copies this prerendered page over .output/public/404.html,
 * which Cloudflare Pages serves for unknown URLs.
 */
useSeoMeta({ title: 'Page Not Found', robots: 'noindex' })
</script>

<template>
  <div>
    <PageHeader title="Page Not Found" description="Sorry - no such page here." />
    <div class="mx-auto max-w-3xl px-4 py-16 text-center">
      <p class="mb-8 text-lg">Sorry - no such page here.</p>
      <NuxtLink to="/" class="btn">Back to the front page</NuxtLink>
    </div>
  </div>
</template>
