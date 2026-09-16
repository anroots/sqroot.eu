export interface SocialLink {
  name: string
  url: string
  icon: string
}

const site = {
  title: 'SQroot.eu',
  url: 'https://sqroot.eu',
  description: 'A personal engineering blog',
  author: 'Ando Roots',
  authorFull: 'Ando David Roots',
  tagline: 'Security Engineer, Maker, Soldier, Improviser',
  email: 'ando@sqroot.eu',
  avatar: '/content/site/avatar.jpg',
  headerImage: '/content/site/home-bg.jpg',
  postsPerPage: 15,
  socials: [
    { name: 'RSS feed', url: '/feed.xml', icon: 'lucide:rss' },
    { name: 'Twitter', url: 'https://twitter.com/SQrooted', icon: 'simple-icons:x' },
    { name: 'GitHub', url: 'https://github.com/anroots', icon: 'simple-icons:github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/anroots', icon: 'simple-icons:linkedin' },
  ] as SocialLink[],
  nav: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Workshops', to: '/workshops' },
    { label: 'Sitemap', to: '/sitemap' },
    { label: 'LinkedIn', to: 'https://linkedin.com/in/anroots', external: true },
  ],
} as const

export function useSite() {
  return site
}

export function absoluteUrl(path?: string | null): string | undefined {
  if (!path) return undefined
  if (/^https?:\/\//.test(path)) return path
  return site.url + (path.startsWith('/') ? path : `/${path}`)
}

export function formatDate(input: string | Date): string {
  const d = typeof input === 'string' ? new Date(input) : input
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
}
