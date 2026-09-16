<script setup lang="ts">
const site = useSite()
const open = ref(false)
const route = useRoute()
watch(() => route.path, () => { open.value = false })
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-neutral-200/70 bg-paper/90 backdrop-blur dark:border-neutral-800 dark:bg-night/90">
    <nav class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3" aria-label="Main">
      <NuxtLink to="/" class="text-lg font-extrabold tracking-tight no-underline hover:text-brand">{{ site.title }}</NuxtLink>

      <button
        type="button"
        class="label-caps inline-flex items-center gap-2 border-2 border-current px-3 py-2 md:hidden"
        :aria-expanded="open"
        aria-controls="site-menu"
        @click="open = !open"
      >
        <Icon :name="open ? 'lucide:x' : 'lucide:menu'" class="size-4" aria-hidden="true" />
        Menu
      </button>

      <ul id="site-menu" class="hidden items-center gap-1 md:flex">
        <li v-for="item in site.nav" :key="item.to">
          <NuxtLink
            :to="item.to"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener' : undefined"
            class="label-caps block border-2 border-transparent px-3 py-2 no-underline transition-colors hover:border-current"
            active-class="text-brand"
          >
            {{ item.label }}<Icon v-if="item.external" name="lucide:arrow-up-right" class="ml-0.5 inline size-3 align-top" aria-hidden="true" />
          </NuxtLink>
        </li>
        <li><ThemeToggle /></li>
      </ul>
    </nav>

    <ul v-if="open" class="border-t border-neutral-200 px-4 pb-4 md:hidden dark:border-neutral-800">
      <li v-for="item in site.nav" :key="item.to">
        <NuxtLink
          :to="item.to"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noopener' : undefined"
          class="label-caps block py-3 no-underline"
          active-class="text-brand"
        >
          {{ item.label }}
        </NuxtLink>
      </li>
      <li class="pt-2"><ThemeToggle /></li>
    </ul>
  </header>
</template>
