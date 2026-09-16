<script setup lang="ts">
/**
 * asciinema.org terminal recording. The embed script inserts its player iframe right after
 * itself, so it is appended inside this component's container on the client.
 *
 * Usage in markdown:  ::asciinema{id="18935"}
 */
const props = defineProps<{ id: string }>()
const host = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!host.value) return
  const s = document.createElement('script')
  s.src = `https://asciinema.org/a/${props.id}.js`
  s.id = `asciicast-${props.id}`
  s.async = true
  host.value.appendChild(s)
})
</script>

<template>
  <div ref="host" class="asciinema not-prose my-6 min-h-24">
    <noscript>
      <a :href="`https://asciinema.org/a/${id}`" target="_blank" rel="noopener">Watch the terminal recording on asciinema.org</a>
    </noscript>
  </div>
</template>
