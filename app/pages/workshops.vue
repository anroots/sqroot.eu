<script setup lang="ts">
const site = useSite()
const { data: page } = await useAsyncData('page-workshops', () => queryCollection('pages').path('/workshops').first())
if (!page.value) throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })

useSeoMeta({
  title: page.value.title,
  description: page.value.excerpt || page.value.description || site.description,
  ogTitle: page.value.title,
  ogDescription: page.value.excerpt || page.value.description,
  ogType: 'website',
  ogImage: absoluteUrl(page.value.image || site.headerImage),
})
useHead({ link: [{ rel: 'canonical', href: absoluteUrl('/workshops') }] })
</script>

<template>
  <div v-if="page">
    <PageHeader :title="page.title" :description="page.description" :image="page.image" />
    <div class="mx-auto max-w-3xl px-4 py-12">
      <article class="article">
        <ContentRenderer :value="page" />
      </article>
    </div>
  </div>
</template>
