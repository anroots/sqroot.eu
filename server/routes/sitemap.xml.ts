import { queryCollection } from '@nuxt/content/server'

const SITE_URL = 'https://sqroot.eu'
const PER_PAGE = 15

export default defineEventHandler(async (event) => {
  const posts = await queryCollection(event, 'posts').select('path', 'date').order('date', 'DESC').all()
  const pages = await queryCollection(event, 'pages').select('path').all()

  const urls: Array<{ loc: string; lastmod?: string }> = [
    { loc: '/' },
    ...pages.map((p: any) => ({ loc: p.path })),
    { loc: '/projects' },
    { loc: '/sitemap' },
  ]
  const totalPages = Math.ceil(posts.length / PER_PAGE)
  for (let i = 2; i <= totalPages; i++) urls.push({ loc: `/page${i}` })
  for (const p of posts as any[]) urls.push({ loc: p.path, lastmod: new Date(p.date).toISOString().slice(0, 10) })

  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${esc(SITE_URL + u.loc)}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`).join('\n')}
</urlset>
`
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return xml
})
