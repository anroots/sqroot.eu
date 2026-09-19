<script setup lang="ts">
definePageMeta({
  validate: (route) => /^\d{4}$/.test(String(route.params.year)),
})

const route = useRoute()
const site = useSite()
const path = route.path.replace(/\/$/, '')

const { data: post } = await useAsyncData(`post-${path}`, () => queryCollection('posts').path(path).first())
if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

const { data: surround } = await useAsyncData(`surround-${path}`, () =>
  queryCollectionItemSurroundings('posts', path, { fields: ['title'] }).order('date', 'ASC').order('stem', 'ASC'),
)
const prev = computed(() => surround.value?.[0] ?? null)
const next = computed(() => surround.value?.[1] ?? null)

const description = computed(() => post.value?.excerpt || post.value?.subtitle || post.value?.description || site.description)
const image = computed(() => absoluteUrl(post.value?.image || site.headerImage))

useSeoMeta({
  title: post.value.title,
  description,
  ogTitle: post.value.title,
  ogDescription: description,
  ogType: 'article',
  ogImage: image,
  ogSiteName: site.title,
  articlePublishedTime: new Date(post.value.date).toISOString(),
  articleSection: post.value.category,
  articleTag: post.value.tags,
})
useHead({
  link: [{ rel: 'canonical', href: absoluteUrl(path) }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.value.title,
      alternativeHeadline: post.value.subtitle || undefined,
      datePublished: new Date(post.value.date).toISOString(),
      image: image.value,
      url: absoluteUrl(path),
      author: { '@type': 'Person', name: site.author, url: site.url },
      keywords: post.value.tags?.join(', ') || undefined,
      articleSection: post.value.category,
      wordCount: post.value.wordCount || undefined,
    }),
  }],
})
</script>

<template>
  <div v-if="post">
    <PostHeader :title="post.title" :subtitle="post.subtitle" :date="post.date" :reading-time="post.readingTime" :image="post.image" />
    <div class="mx-auto max-w-3xl px-4 py-12">
      <article class="article">
        <ContentRenderer :value="post" />
      </article>
      <p v-if="post.tags?.length" class="mt-10 flex flex-wrap items-center gap-2 text-xs">
        <span class="label-caps text-ink-muted">{{ post.category }}</span>
        <span v-for="tag in post.tags" :key="tag" class="rounded-full border border-neutral-300 px-2.5 py-0.5 text-ink-muted dark:border-neutral-700 dark:text-neutral-400">{{ tag }}</span>
      </p>
      <PostComments v-if="post.comments?.length" :comments="post.comments" class="mt-10" />
      <PostPager :prev="prev" :next="next" class="mt-10" />
    </div>
  </div>
</template>
