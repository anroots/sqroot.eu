import tailwindcss from '@tailwindcss/vite'

const SITE_URL = 'https://sqroot.eu'

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
        { name: 'robots', content: 'all' },
        { name: 'keywords', content: 'Ando Roots, SQrooted, Ando David Roots, anroots' },
        { name: 'theme-color', content: '#ffffff' },
        { name: 'msapplication-TileColor', content: '#2b5797' },
        { name: 'msapplication-TileImage', content: `${SITE_URL}/content/site/favicon/mstile-144x144.png` },
        { name: 'msapplication-config', content: `${SITE_URL}/browserconfig.xml` },
      ],
      link: [
        { rel: 'shortcut icon', href: '/content/site/favicon/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/content/site/favicon/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/content/site/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/content/site/favicon/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/content/site/favicon/android-chrome-192x192.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/content/site/favicon/apple-touch-icon-180x180.png' },
        { rel: 'manifest', href: '/manifest.json' },
        { rel: 'author', type: 'text/plain', href: '/humans.txt' },
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
