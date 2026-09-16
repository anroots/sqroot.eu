<script setup lang="ts">
const site = useSite()
const title = 'Sitemap'
const description = 'Index of all posts'

const { data: posts } = await useAsyncData('sitemap-posts', () =>
  queryCollection('posts').order('date', 'DESC').order('stem', 'DESC').select('path', 'title', 'date', 'category').all(),
)

const groups = computed(() => {
  const map = new Map<string, typeof posts.value>()
  for (const p of posts.value ?? []) {
    const cat = p.category || 'Misc'
    if (!map.has(cat)) map.set(cat, [])
    map.get(cat)!.push(p)
  }
  return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0]))
})

useSeoMeta({ title, description, ogTitle: title, ogDescription: description, ogType: 'website', ogImage: absoluteUrl(site.headerImage) })
useHead({ link: [{ rel: 'canonical', href: absoluteUrl('/sitemap') }] })
</script>

<template>
  <div>
    <PageHeader :title="title" :description="description" />
    <div class="mx-auto max-w-3xl px-4 py-12">
      <p class="mb-8 text-ink-muted dark:text-neutral-400">{{ posts?.length ?? 0 }} posts in {{ groups.length }} categories.</p>
      <section v-for="[category, items] in groups" :key="category" class="mb-12">
        <h2 class="mb-4 text-2xl font-extrabold tracking-tight">{{ category }} <span class="text-base font-normal text-ink-muted">({{ items?.length }})</span></h2>
        <ul class="space-y-2">
          <li v-for="p in items" :key="p.path" class="leading-snug">
            <NuxtLink :to="p.path" class="hover:text-brand">
              <time :datetime="p.date" class="mr-2 font-mono text-xs text-ink-muted dark:text-neutral-500">{{ String(p.date).slice(0, 10) }}</time>{{ p.title }}
            </NuxtLink>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
