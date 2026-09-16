<script setup lang="ts">
const site = useSite()
const { data: page } = await useAsyncData('page-about', () => queryCollection('pages').path('/about').first())
if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

useSeoMeta({
  title: page.value.title,
  description: page.value.description || site.description,
  ogTitle: page.value.title,
  ogDescription: page.value.description,
  ogType: 'website',
  ogImage: absoluteUrl(site.headerImage),
})
useHead({ link: [{ rel: 'canonical', href: absoluteUrl('/about') }] })
</script>

<template>
  <div v-if="page">
    <PageHeader :title="page.title" :description="page.description" />
    <div class="mx-auto max-w-3xl px-4 py-12">
      <article class="article">
        <ContentRenderer :value="page" />
      </article>
    </div>
  </div>
</template>
