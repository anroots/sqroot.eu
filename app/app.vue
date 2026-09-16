<script setup lang="ts">
const site = useSite()

useHead({
  script: [
    { key: 'theme-init', src: '/theme-init.js', tagPosition: 'head' },
    {
      key: 'ld-person',
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: site.author,
        url: site.url,
        sameAs: site.socials.filter((s) => s.url.startsWith('http')).map((s) => s.url),
      }),
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
