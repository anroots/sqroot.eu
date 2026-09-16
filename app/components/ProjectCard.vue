<script setup lang="ts">
defineProps<{
  project: { name: string; description: string; image?: string | null; video?: string | null; website?: string | null; github?: string | null }
}>()
</script>

<template>
  <article class="flex flex-col overflow-hidden rounded-sm border border-neutral-200 bg-paper dark:border-neutral-800 dark:bg-night-muted">
    <a v-if="project.image" :href="project.website || project.github || '#'" target="_blank" rel="noopener" class="block">
      <NuxtImg :src="project.image" :alt="project.name" class="aspect-video w-full object-cover" sizes="576px" densities="x1" format="webp" loading="lazy" />
    </a>
    <div v-else-if="project.video" class="aspect-video">
      <iframe :src="project.video" :title="project.name" class="h-full w-full" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen loading="lazy" />
    </div>
    <div class="flex flex-1 flex-col p-5">
      <h2 class="text-xl font-extrabold tracking-tight">{{ project.name }}</h2>
      <!-- eslint-disable-next-line vue/no-v-html -- project descriptions are trusted repo content -->
      <p class="mt-2 flex-1 text-base leading-relaxed text-ink-muted dark:text-neutral-400" v-html="project.description" />
      <ul class="mt-4 flex gap-3">
        <li v-if="project.website">
          <a :href="project.website" title="Project website" target="_blank" rel="noopener" class="inline-flex size-10 items-center justify-center rounded-full bg-ink text-white hover:bg-brand dark:bg-neutral-200 dark:text-night dark:hover:bg-brand dark:hover:text-white">
            <Icon name="lucide:link" class="size-4" aria-hidden="true" /><span class="sr-only">Website</span>
          </a>
        </li>
        <li v-if="project.github">
          <a :href="project.github" title="Project source code" target="_blank" rel="noopener" class="inline-flex size-10 items-center justify-center rounded-full bg-ink text-white hover:bg-brand dark:bg-neutral-200 dark:text-night dark:hover:bg-brand dark:hover:text-white">
            <Icon name="simple-icons:github" class="size-4" aria-hidden="true" /><span class="sr-only">Source code</span>
          </a>
        </li>
      </ul>
    </div>
  </article>
</template>
