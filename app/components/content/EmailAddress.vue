<script setup lang="ts">
/**
 * The author's e-mail address, hidden from address-harvesting scanners. Neither the generated
 * HTML, the payload nor the JS bundle contain the address in a user@domain form: it is stored
 * reversed and base64-encoded and only assembled into a mailto: link in the browser. Without
 * JavaScript a human-readable "user [at] domain [dot] tld" form is shown instead.
 *
 * Usage in markdown:  Write to :email-address to ...
 */
const ENCODED = 'dWUudG9vcnFzQG9kbmE='

const decode = () => atob(ENCODED).split('').reverse().join('')
const [user, domain] = decode().split('@')
const readable = `${user} [at] ${domain!.replace(/\./g, ' [dot] ')}`

const address = ref<string | null>(null)
onMounted(() => { address.value = decode() })
</script>

<template>
  <a v-if="address" :href="`mailto:${address}`">{{ address }}</a>
  <span v-else>{{ readable }}</span>
</template>
