import { useEffect } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { Calendar, User, ArrowLeft, ArrowRight, Share2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { articlesData } from '../data/pagesData'

export default function Article() {
  const { slug } = useParams()
  const { t, i18n } = useTranslation()
  const articleData = slug ? articlesData[slug] : null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!articleData) {
    return <Navigate to="/blog" replace />
  }

  const isAr = i18n.language === 'ar'
  const content = articleData[isAr ? 'ar' : 'en']
  const image = articleData.image
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <div className="w-full bg-[#fafbfc] font-sans overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end pb-16 bg-[#100324]">
        <div className="absolute inset-0 z-0">
          <img src={image} alt={content.title} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#100324] via-[#100324]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 w-full">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#38e54d] font-bold text-sm hover:text-white transition-colors mb-8 group bg-white/5 px-4 py-2 rounded-full border border-[#38e54d]/30 backdrop-blur-sm"
          >
            {isAr ? (
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            ) : (
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            )}
            {t('backToBlog')}
          </Link>
          <span className="block w-max px-4 py-1.5 rounded-full bg-[#38e54d] text-[#110222] text-[11px] font-extrabold tracking-wider uppercase mb-6 shadow-lg">
            {content.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 drop-shadow-lg">
            {content.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-gray-300">
            <span className="flex items-center gap-1.5">
              <Calendar size={16} className="text-[#9b51e0]" /> {content.date}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500 hidden sm:block"></span>
            <span className="flex items-center gap-1.5">
              <User size={16} className="text-[#9b51e0]" /> {content.author}
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-20">
        <p
          className={`text-2xl text-gray-600 font-medium italic leading-relaxed mb-12 bg-white p-6 shadow-sm ${isAr ? 'border-r-4 border-[#38e54d] pr-6 rounded-l-xl' : 'border-l-4 border-[#38e54d] pl-6 rounded-r-xl'}`}
        >
          {content.excerpt}
        </p>

        <div className={`text-gray-700 leading-loose text-lg ${isAr ? 'text-right' : 'text-left'}`}>
          {content.content}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <h4
              className={`font-bold text-[#110222] uppercase tracking-wider text-sm flex items-center gap-2 ${isAr ? 'ml-2' : ''}`}
            >
              <Share2 size={16} className="text-[#38e54d]" /> {t('shareArticle')}
            </h4>
            <div className="flex gap-2">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(content.title)}`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center hover:bg-blue-800 hover:text-white transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            {content.tags?.map((tag: string, idx: number) => (
              <span
                key={idx}
                className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-md uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}