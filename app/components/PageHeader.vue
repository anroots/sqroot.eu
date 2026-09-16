<script setup lang="ts">
/**
 * Header for non-post pages: matrix rain by default, or a full-bleed image when given one.
 */
defineProps<{
  title: string
  description?: string
  image?: string
}>()
</script>

<template>
  <header>
    <div v-if="image" class="relative overflow-hidden bg-black text-white">
      <NuxtImg :src="image" alt="" class="absolute inset-0 h-full w-full object-cover opacity-70" sizes="768px md:1200px lg:1600px" densities="x1" format="webp" preload />
      <div class="relative mx-auto max-w-4xl px-4 py-24 text-center sm:py-32">
        <h1 class="text-4xl font-extrabold tracking-tight drop-shadow-md sm:text-6xl">{{ title }}</h1>
        <hr v-if="description" class="mx-auto my-5 w-24 border-2 border-white/80">
        <p v-if="description" class="text-lg font-light sm:text-2xl">{{ description }}</p>
      </div>
    </div>
    <MatrixHeader v-else>
      <div>
        <h1 class="text-4xl font-extrabold tracking-tight drop-shadow-md sm:text-6xl">{{ title }}</h1>
        <hr v-if="description" class="mx-auto my-5 w-24 border-2 border-white/80">
        <p v-if="description" class="text-lg font-light sm:text-2xl">{{ description }}</p>
      </div>
    </MatrixHeader>
  </header>
</template>
