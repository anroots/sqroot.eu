<script setup lang="ts">
/**
 * Light/dark switch. Both icons are server-rendered and swapped with CSS, so the button needs no
 * client-only rendering and no runtime icon fetch. The choice is stored in localStorage and
 * applied before first paint by public/theme-init.js.
 */
function toggle() {
  const dark = document.documentElement.classList.toggle('dark')
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  } catch {}
}
</script>

<template>
  <button
    type="button"
    class="inline-flex size-9 items-center justify-center rounded-full border-2 border-transparent hover:border-current"
    title="Toggle dark mode"
    aria-label="Toggle dark mode"
    @click="toggle"
  >
    <Icon name="lucide:moon" class="size-4 dark:hidden" aria-hidden="true" />
    <Icon name="lucide:sun" class="hidden size-4 dark:inline-block" aria-hidden="true" />
  </button>
</template>
