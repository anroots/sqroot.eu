<script setup lang="ts">
const site = useSite()
</script>

<template>
  <div class="relative mx-auto -mt-16 max-w-2xl px-4 text-center sm:-mt-20">
    <NuxtLink to="/about" title="Who is Ando?" class="inline-block">
      <NuxtImg
        :src="site.avatar"
        :alt="site.author"
        width="160"
        height="160"
        format="webp"
        densities="x1"
        class="size-28 rounded-full border-4 border-paper bg-paper object-cover shadow-md sm:size-40 dark:border-night"
      />
    </NuxtLink>
    <h1 class="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">{{ site.author }}</h1>
    <p class="mt-3 text-lg text-ink-muted dark:text-neutral-400">
      {{ site.tagline }}
      (<a href="https://estonia.ee/" target="_blank" title="Estonian" class="inline-block align-baseline">
        <svg class="inline size-[1em] align-[-0.1em]" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg" aria-label="Estonian flag" role="img">
          <rect width="640" height="480" fill="#000" />
          <rect width="640" height="160" y="320" fill="#fff" />
          <rect width="640" height="160" fill="#1291ff" />
        </svg>
      </a>)
    </p>
    <div class="mt-6">
      <SocialLinks />
    </div>
  </div>
</template>
