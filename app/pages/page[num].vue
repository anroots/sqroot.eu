<script setup lang="ts">
definePageMeta({
  validate: (route) => /^[1-9]\d*$/.test(String(route.params.num)),
})
const route = useRoute()
const page = Number(route.params.num)
if (page === 1) {
  await navigateTo('/', { redirectCode: 301 })
}
</script>

<template>
  <HomePage :page="page" />
</template>
