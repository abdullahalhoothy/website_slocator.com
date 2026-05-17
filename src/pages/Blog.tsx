/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Search, Rss, ChevronRight, ChevronsRight, ChevronLeft } from 'lucide-react'
import { FadeIn } from '../components/animations/FadeIn'
import { Link } from 'react-router-dom'

export const BLOG_POSTS = [
  {
    id: '1',
    img: 'https://cdn.portatour.com/blog/wp-content/uploads/vertriebsreporting.jpg',
    category: 'Field Sales',
    categoryKey: 'blogPage.posts.post1.category',
    title: 'Successful sales reporting in the field with S-Locator®',
    titleKey: 'blogPage.posts.post1.title',
    image: 'https://cdn.portatour.com/blog/wp-content/uploads/vertriebsreporting.jpg',
  },
  {
    id: '2',
    img: 'https://cdn.portatour.com/blog/wp-content/uploads/change-management-624x478.jpg',
    category: 'Field Sales',
    categoryKey: 'blogPage.posts.post2.category',
    title: 'The 5 best sales apps for your field sales team in 2026',
    titleKey: 'blogPage.posts.post2.title',
    image: 'https://cdn.portatour.com/blog/wp-content/uploads/change-management-624x478.jpg',
  },
  {
    id: '3',
    img: 'https://cdn.portatour.com/blog/wp-content/uploads/crm-blog.jpg',
    category: 'Field Sales',
    categoryKey: 'blogPage.posts.post3.category',
    title: 'S-Locator® – The mobile route planner with CRM system for large and small companies',
    titleKey: 'blogPage.posts.post3.title',
    image: 'https://cdn.portatour.com/blog/wp-content/uploads/crm-blog.jpg',
  },
  {
    id: '4',
    img: 'https://cdn.portatour.com/blog/wp-content/uploads/vertriebsoptimierung-tipps-624x416.jpg',
    category: 'Management Best Practices',
    categoryKey: 'blogPage.posts.post4.category',
    title: '7 tips to optimize sales in the field',
    titleKey: 'blogPage.posts.post4.title',
    image:
      'https://cdn.portatour.com/blog/wp-content/uploads/vertriebsoptimierung-tipps-624x416.jpg',
  },
]

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export const Blog: React.FC = () => {
  const { t, i18n } = useTranslation('landing')
  const isRTL = i18n.dir() === 'rtl'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: t('blogPage.nav.all', 'S-Locator blog'), count: 56 },
    { id: 'fieldSales', name: t('blogPage.nav.fieldSales', 'Field Sales'), count: 9 },
    { id: 'integrations', name: t('blogPage.nav.integrations', 'Integrations'), count: 3 },
    {
      id: 'management',
      name: t('blogPage.nav.management', 'Management Best Practices'),
      count: 14,
    },
    { id: 'news', name: t('blogPage.nav.news', 'S-Locator News'), count: 5 },
    { id: 'routePlanning', name: t('blogPage.nav.routePlanning', 'Route Planning'), count: 19 },
    { id: 'territory', name: t('blogPage.nav.territory', 'Territory optimization'), count: 6 },
  ]

  const featuredPost = BLOG_POSTS[0]
  const topPosts = BLOG_POSTS.slice(1, 4)
  const morePosts = BLOG_POSTS.slice(4)

  return (
    <div
      className={`min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#f5f3ff] selection:text-[#8A2BE2] pb-0 ${isRTL ? 'text-right' : 'text-left'}`}
    >
      {/* 1. Category Navigation & Search */}
      <section className="bg-white pt-24 pb-8 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-8 text-[15px] font-medium text-slate-500">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`transition-colors hover:text-[#8A2BE2] ${activeCategory === cat.id ? 'text-[#8A2BE2] font-bold' : ''}`}
              >
                <span className={activeCategory === cat.id ? 'text-[#8A2BE2]' : 'text-slate-600'}>
                  {cat.name}
                </span>
                <span className="text-slate-300 mx-1">|</span>
                <span className="text-slate-400">{cat.count}</span>
              </button>
            ))}
          </div>

          <div className="max-w-xl mx-auto mb-10">
            <div className="relative flex items-center w-full">
              <input
                type="text"
                placeholder={t('blogPage.search.placeholder', 'Search...')}
                className="w-full py-3 px-6 pr-12 border border-slate-300 rounded-full outline-none focus:border-[#8A2BE2] focus:ring-1 focus:ring-[#8A2BE2]/30 transition-all text-slate-700"
              />
              <button
                className={`absolute ${isRTL ? 'left-4' : 'right-4'} text-[#8A2BE2] hover:text-[#6b21a8]`}
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
              {t('blogPage.hero.title', 'S-Locator blog')}
            </h1>
            <h2 className="text-2xl font-light text-slate-500">
              {t('blogPage.hero.subtitle', 'Route planning insights and tips for your team')}
            </h2>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn direction="up">
            <Link
              to="/blog/article"
              className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-200 group"
            >
              <div className="w-full md:w-1/2 h-[300px] md:h-[400px] overflow-hidden">
                <img
                  src={featuredPost.img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#00609c]">
                <span className="inline-block bg-white/20 text-white border border-white/30 px-3 py-1 text-sm font-medium rounded w-max mb-6">
                  {t(featuredPost.categoryKey, featuredPost.category)}
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {t(featuredPost.titleKey, featuredPost.title)}
                </h3>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="pb-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {topPosts.map((post, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 100}>
                <Link
                  to="/blog/article"
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-200 flex flex-col h-full group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={post.img}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="inline-block bg-[#8A2BE2]/10 text-[#8A2BE2] px-2.5 py-1 text-xs font-bold rounded w-max mb-4">
                      {t(post.categoryKey, post.category)}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 leading-snug group-hover:text-[#8A2BE2] transition-colors">
                      {t(post.titleKey, post.title)}
                    </h3>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Subscribe Banner */}
      <section className="bg-slate-100 py-16 border-y border-slate-200 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn direction="up">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              {t('blogPage.subscribe.title', 'Never miss a single post')}
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[#8A2BE2] font-medium">
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#6b21a8] transition-colors"
              >
                <LinkedinIcon className="w-5 h-5" />
                {t('blogPage.subscribe.linkedin', 'Follow us on LinkedIn')}
              </a>
              <span className="hidden sm:block text-slate-300">|</span>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-[#6b21a8] transition-colors"
              >
                <Rss className="w-5 h-5" />
                {t('blogPage.subscribe.rss', 'Entries RSS')}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {morePosts.map((post, idx) => (
              <FadeIn key={idx} direction="up" delay={idx * 50}>
                <Link
                  to="/blog/article"
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-200 flex flex-col h-full group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={post.img}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="inline-block bg-[#8A2BE2]/10 text-[#8A2BE2] px-2.5 py-1 text-xs font-bold rounded w-max mb-4">
                      {t(post.categoryKey, post.category)}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 leading-snug group-hover:text-[#8A2BE2] transition-colors">
                      {t(post.titleKey, post.title)}
                    </h3>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-20 gap-1.5 text-slate-600 font-bold">
            <button className="w-8 h-8 rounded flex items-center justify-center text-slate-300 cursor-not-allowed">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-8 h-8 rounded flex items-center justify-center bg-[#8A2BE2] text-white">
              1
            </button>
            {[2, 3, 4, 5, 6, 7].map(page => (
              <button
                key={page}
                className="w-8 h-8 rounded flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                {page}
              </button>
            ))}
            <button className="w-8 h-8 rounded flex items-center justify-center hover:text-[#8A2BE2] transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="w-8 h-8 rounded flex items-center justify-center hover:text-[#8A2BE2] transition-colors">
              <ChevronsRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <section className="bg-[#00609c] py-24 text-center relative overflow-hidden">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#f8fafc] transform rotate-45"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-10 leading-tight drop-shadow-sm">
              {t(
                'blogPage.cta.title',
                'Stop wasting time and money, increase your sales opportunities.',
              )}
            </h2>
            <a
              href="https://s-locator.northernacs.com/"
              className="inline-block bg-[#f0ad4e] hover:bg-[#e09e3e] text-white px-12 py-4 rounded font-bold transition-colors shadow-xl text-lg mb-6"
            >
              {t('blogPage.cta.btn', 'Start 30-day free trial*')}
            </a>
            <p className="text-blue-200 text-sm font-light">
              {t(
                'blogPage.cta.note',
                '*Full version. No credit card required. Automatic termination.',
              )}
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

export default Blog
