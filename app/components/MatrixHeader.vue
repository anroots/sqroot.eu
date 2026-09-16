<script setup lang="ts">
/**
 * The green "matrix rain" canvas from the original site (_assets/js/matrix.js), as a component.
 * Renders a static dark block on the server; animates on the client unless the visitor prefers
 * reduced motion, in which case a single frame is drawn.
 */
const canvas = ref<HTMLCanvasElement | null>(null)
let timer: ReturnType<typeof setInterval> | null = null
let drops: number[] = []
const FONT_SIZE = 24
const CHARS = '0123456789abcdef'.split('')

function draw(c: HTMLCanvasElement) {
  const ctx = c.getContext('2d')
  if (!ctx) return
  ctx.fillStyle = 'rgba(0,0,0,0.2)'
  ctx.fillRect(0, 0, c.width, c.height)
  ctx.fillStyle = '#0F0'
  ctx.font = `${FONT_SIZE}px monospace`
  for (let i = 0; i < drops.length; i++) {
    const text = CHARS[Math.floor(Math.random() * CHARS.length)]
    ctx.fillText(text, i * FONT_SIZE, drops[i] * FONT_SIZE)
    if (drops[i] * FONT_SIZE > c.height && Math.random() > 0.975) drops[i] = 0
    drops[i]++
  }
}

function init() {
  const c = canvas.value
  if (!c) return
  if (timer) clearInterval(timer)
  c.width = c.parentElement?.offsetWidth || window.innerWidth
  c.height = c.offsetHeight
  const columns = Math.ceil(c.width / FONT_SIZE)
  drops = Array.from({ length: columns }, () => 1)
  const ctx = c.getContext('2d')
  if (ctx) { ctx.fillStyle = '#000'; ctx.fillRect(0, 0, c.width, c.height) }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    for (let i = 0; i < 25; i++) draw(c)
    return
  }
  timer = setInterval(() => draw(c), 100)
}

onMounted(() => {
  init()
  window.addEventListener('resize', init)
})
onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
  window.removeEventListener('resize', init)
})
</script>

<template>
  <div class="relative bg-black">
    <canvas ref="canvas" class="block h-[260px] w-full sm:h-[350px]" aria-hidden="true" />
    <div v-if="$slots.default" class="absolute inset-0 flex items-center justify-center px-4 text-center text-white">
      <slot />
    </div>
  </div>
</template>
