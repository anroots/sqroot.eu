<script setup lang="ts">
const site = useSite()
const title = 'Projects'
const description = "Here are the projects I've done of my own free will and am most proud of."

const { data: projects } = await useAsyncData('projects', () => queryCollection('projects').order('position', 'ASC').all())

useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogType: 'website', ogImage: absoluteUrl(site.headerImage) })
useHead({ link: [{ rel: 'canonical', href: absoluteUrl('/projects') }] })
</script>

<template>
  <div>
    <PageHeader :title="title" :description="description" />
    <div class="mx-auto max-w-5xl px-4 py-12">
      <div class="grid gap-8 sm:grid-cols-2">
        <ProjectCard v-for="p in projects" :key="p.name" :project="p" />
      </div>
      <p class="mt-12 text-center text-lg">
        More projects: check out my GitHub profile - almost everything I do is
        <a href="https://github.com/anroots" target="_blank" rel="noopener" class="text-brand underline">open-sourced on GitHub</a>.
      </p>
    </div>
  </div>
</template>
