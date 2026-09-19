import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-01',
  devtools: { enabled: false },
  ssr: true,

  experimental: {
    // Keep the HTML free of inline scripts so the CSP can stay at script-src 'self'
    entryImportMap: false,
  },

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
  ],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },


  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      titleTemplate: '%s - SQroot.eu',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' },
        { name: 'theme-color', content: '#0f1418', media: '(prefers-color-scheme: dark)' },
      ],
      link: [
        { rel: 'icon', href: '/content/site/favicon/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/content/site/favicon/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/content/site/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/content/site/favicon/android-chrome-192x192.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/content/site/favicon/apple-touch-icon-180x180.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'alternate', type: 'application/rss+xml', title: 'SQroot.eu', href: '/feed.xml' },
      ],
    },
  },

  content: {
    build: {
      markdown: {
        toc: { depth: 2, searchDepth: 2 },
        highlight: {
          theme: { default: 'github-light', dark: 'github-dark' },
          langs: ['bash', 'shell', 'python', 'js', 'javascript', 'ts', 'php', 'ruby', 'json', 'html', 'css', 'c', 'java', 'yaml', 'xml', 'sql'],
        },
      },
    },
    renderer: {
      anchorLinks: false,
    },
    experimental: {
      sqliteConnector: 'native',
    },
  },

  image: {
    // Match the old jekyll-responsive-image breakpoints
    screens: { xs: 576, sm: 768, md: 992, lg: 1200, xl: 1600 },
    format: ['webp'],
    quality: 82,
  },

  fonts: {
    families: [
      { name: 'Montserrat', provider: 'google', weights: [400, 800], styles: ['normal', 'italic'] },
    ],
  },

  icon: {
    // Every icon is inlined at build time: no runtime requests to api.iconify.design (CSP connect-src 'self')
    serverBundle: { collections: ['lucide', 'simple-icons'] },
    clientBundle: { scan: true, sizeLimitKb: 256 },
    mode: 'svg',
  },


  nitro: {
    prerender: {
      crawlLinks: true,
      autoSubfolderIndex: false,
      routes: ['/', '/feed.xml', '/sitemap.xml', '/not-found'],
    },
  },

  routeRules: {
    '/feed.xml': { prerender: true },
  },
})
