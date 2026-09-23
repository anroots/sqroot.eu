import { Feed } from 'feed'
import { queryCollection } from '@nuxt/content/server'

const SITE = { title: 'SQroot.eu', url: 'https://sqroot.eu', description: 'A personal engineering blog', author: 'Ando Roots' }

/** First paragraph of a minimark body as plain text (used as the item description). */
function firstParagraph(body: any): string {
  const nodes: any[] = Array.isArray(body?.value) ? body.value : []
  const text = (n: any): string => (typeof n === 'string' ? n : Array.isArray(n) ? n.slice(2).map(text).join('') : '')
  for (const n of nodes) {
    if (Array.isArray(n) && n[0] === 'p') {
      const t = text(n).replace(/\s+/g, ' ').trim()
      if (t.length > 40) return t
    }
  }
  return ''
}

export default defineEventHandler(async (event) => {
  const posts = await queryCollection(event, 'posts')
    .order('date', 'DESC')
    .order('stem', 'DESC')
    .limit(10)
    .all()

  const feed = new Feed({
    title: SITE.title,
    description: SITE.description,
    id: `${SITE.url}/`,
    link: `${SITE.url}/`,
    language: 'en',
    image: `${SITE.url}/content/site/avatar.jpg`,
    favicon: `${SITE.url}/content/site/favicon/favicon.ico`,
    copyright: `© ${SITE.author}`,
    generator: 'Nuxt',
    feedLinks: { rss: `${SITE.url}/feed.xml` },
    author: { name: SITE.author, link: SITE.url },
  })

  for (const post of posts as any[]) {
    const url = `${SITE.url}${post.path}`
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.excerpt || post.subtitle || firstParagraph(post.body),
      date: new Date(post.date),
      image: post.image ? `${SITE.url}${post.image}` : undefined,
      category: [post.category, ...(post.tags || [])].filter(Boolean).map((name: string) => ({ name })),
      author: [{ name: SITE.author, link: SITE.url }],
    })
  }

  setHeader(event, 'Content-Type', 'application/rss+xml; charset=utf-8')
  return feed.rss2()
})
