<script setup lang="ts">
/**
 * Front page + /pageN: matrix header, author card and a page of the post list.
 */
const props = defineProps<{ page: number }>()
const site = useSite()
const perPage = site.postsPerPage

const { data } = await useAsyncData(`home-${props.page}`, async () => {
  const [posts, total] = await Promise.all([
    queryCollection('posts')
      .order('date', 'DESC')
      .order('stem', 'DESC')
      .select('path', 'title', 'subtitle', 'date', 'readingTime')
      .skip((props.page - 1) * perPage)
      .limit(perPage)
      .all(),
    queryCollection('posts').count(),
  ])
  return { posts, total }
})

const totalPages = computed(() => Math.max(1, Math.ceil((data.value?.total ?? 0) / perPage)))

if (!data.value || data.value.posts.length === 0) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useHead({
  title: props.page > 1 ? `Page ${props.page}` : site.title,
  titleTemplate: props.page > 1 ? '%s - SQroot.eu' : '%s',
})
useSeoMeta({
  description: site.description,
  ogTitle: site.title,
  ogDescription: site.description,
  ogType: 'website',
  ogImage: absoluteUrl(site.headerImage),
})
useHead({ link: [{ rel: 'canonical', href: absoluteUrl(props.page > 1 ? `/page${props.page}` : '/') }] })
</script>

<template>
  <div>
    <MatrixHeader />
    <AuthorCard />
    <div class="mx-auto max-w-3xl px-4 pt-12">
      <PostList :posts="data?.posts ?? []" />
      <Pagination :page="page" :total-pages="totalPages" />
    </div>
  </div>
</template>
