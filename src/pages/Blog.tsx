<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Rss, ChevronRight, ChevronsRight, ChevronLeft } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';
import { Link } from 'react-router-dom'; 

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export const Blog: React.FC = () => {
  const { t, i18n } = useTranslation('landing');
  const isRTL = i18n.dir() === 'rtl';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: t('blogPage.nav.all', 'S-Locator blog'), count: 56 },
    { id: 'fieldSales', name: t('blogPage.nav.fieldSales', 'Field Sales'), count: 9 },
    { id: 'integrations', name: t('blogPage.nav.integrations', 'Integrations'), count: 3 },
    { id: 'management', name: t('blogPage.nav.management', 'Management Best Practices'), count: 14 },
    { id: 'news', name: t('blogPage.nav.news', 'S-Locator News'), count: 5 },
    { id: 'routePlanning', name: t('blogPage.nav.routePlanning', 'Route Planning'), count: 19 },
    { id: 'territory', name: t('blogPage.nav.territory', 'Territory optimization'), count: 6 }
  ];

  const featuredPost = {
    img: 'https://cdn.portatour.com/blog/wp-content/uploads/vertriebsreporting.jpg',
    category: 'Field Sales',
    title: "Successful sales reporting in the field with S-Locator®"
  };

  const topPosts = [
    {
      img: 'https://cdn.portatour.com/blog/wp-content/uploads/change-management-624x478.jpg',
      category: 'Field Sales',
      title: "The 5 best sales apps for your field sales team in 2026"
    },
    {
      img: 'https://cdn.portatour.com/blog/wp-content/uploads/crm-blog.jpg',
      category: 'Field Sales',
      title: "S-Locator® – The mobile route planner with CRM system for large and small companies"
    },
    {
      img: 'https://cdn.portatour.com/blog/wp-content/uploads/vertriebsoptimierung-tipps-624x416.jpg',
      category: 'Management Best Practices',
      title: "7 tips for optimizing sales in the field sales force"
    }
  ];

  const morePosts = [
    {
      img: 'https://cdn.portatour.com/blog/wp-content/uploads/effizienz-statt-fachkraeftemangel.jpg',
      category: 'Territory optimization',
      title: "Thanks to S-Locator®, you can compensate for staff changes with your existing team"
    },
    {
      img: 'https://cdn.portatour.com/blog/wp-content/uploads/tourenplanung-im-wandel-der-zeit.jpg',
      category: 'Field Sales',
      title: "Field sales force, territory planning and route planning through the ages"
    },
    {
      img: 'https://cdn.portatour.com/blog/wp-content/uploads/to-im-vergleich.jpg',
      category: 'Territory optimization',
      title: "Innovative territory planning by S-Locator® in direct comparison with alternatives"
    },
    {
      img: 'https://cdn.portatour.com/blog/wp-content/uploads/benutzerdefinierte-felder.jpg',
      category: 'Route Planning',
      title: "Custom fields are a real game changer in route planning"
    },
    {
      img: 'https://cdn.portatour.com/blog/wp-content/uploads/zeitersparnis.jpg',
      category: 'Territory optimization',
      title: "S-Locator® Territory Optimization saves time when planning your territories"
    },
    {
      img: 'https://cdn.portatour.com/blog/wp-content/uploads/abc-kunden-header-624x482.jpg',
      category: 'Route Planning',
      title: "How to Prioritize Your ABC Customers When Route Planning"
    }
  ];

  return (
    <div className={`min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#f5f3ff] selection:text-[#8A2BE2] pb-0 ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* 1. Category Navigation & Search */}
      <section className="bg-white pt-24 pb-8 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
           <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-8 text-[15px] font-medium text-slate-500">
              {categories.map((cat) => (
                 <button 
                   key={cat.id} 
                   onClick={() => setActiveCategory(cat.id)}
                   className={`transition-colors hover:text-[#8A2BE2] ${activeCategory === cat.id ? 'text-[#8A2BE2] font-bold' : ''}`}
                 >
                   <span className={activeCategory === cat.id ? 'text-[#8A2BE2]' : 'text-slate-600'}>{cat.name}</span> 
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
                 <button className={`absolute ${isRTL ? 'left-4' : 'right-4'} text-[#8A2BE2] hover:text-[#6b21a8]`}>
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
               <Link to="/blog/article" className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-200 group">
                  <div className="w-full md:w-1/2 h-[300px] md:h-[400px] overflow-hidden">
                     <img src={featuredPost.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#00609c]">
                     <span className="inline-block bg-white/20 text-white border border-white/30 px-3 py-1 text-sm font-medium rounded w-max mb-6">
                        {featuredPost.category}
                     </span>
                     <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                        {featuredPost.title}
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
                     <Link to="/blog/article" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-200 flex flex-col h-full group">
                        <div className="h-48 overflow-hidden relative">
                           <img src={post.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                           <span className="inline-block bg-[#8A2BE2]/10 text-[#8A2BE2] px-2.5 py-1 text-xs font-bold rounded w-max mb-4">
                              {post.category}
                           </span>
                           <h3 className="text-lg font-bold text-slate-800 leading-snug group-hover:text-[#8A2BE2] transition-colors">
                              {post.title}
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
               <h3 className="text-2xl font-bold text-slate-800 mb-6">{t('blogPage.subscribe.title', 'Never miss a single post')}</h3>
               <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[#8A2BE2] font-medium">
                  <a href="#" className="flex items-center gap-2 hover:text-[#6b21a8] transition-colors">
                     <LinkedinIcon className="w-5 h-5" />
                     {t('blogPage.subscribe.linkedin', 'Follow us on LinkedIn')}
                  </a>
                  <span className="hidden sm:block text-slate-300">|</span>
                  <a href="#" className="flex items-center gap-2 hover:text-[#6b21a8] transition-colors">
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
                     <Link to="/blog/article" className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-200 flex flex-col h-full group">
                        <div className="h-48 overflow-hidden relative">
                           <img src={post.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                           <span className="inline-block bg-[#8A2BE2]/10 text-[#8A2BE2] px-2.5 py-1 text-xs font-bold rounded w-max mb-4">
                              {post.category}
                           </span>
                           <h3 className="text-lg font-bold text-slate-800 leading-snug group-hover:text-[#8A2BE2] transition-colors">
                              {post.title}
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
               <button className="w-8 h-8 rounded flex items-center justify-center bg-[#8A2BE2] text-white">1</button>
               {[2, 3, 4, 5, 6, 7].map((page) => (
                  <button key={page} className="w-8 h-8 rounded flex items-center justify-center hover:bg-slate-200 transition-colors">
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
              {t('blogPage.cta.title', 'Stop wasting time and money, increase your sales opportunities.')}
            </h2>
            <a href="https://s-locator.northernacs.com/" className="inline-block bg-[#f0ad4e] hover:bg-[#e09e3e] text-white px-12 py-4 rounded font-bold transition-colors shadow-xl text-lg mb-6">
              {t('blogPage.cta.btn', 'Start 30-day free trial*')}
            </a>
            <p className="text-blue-200 text-sm font-light">
              {t('blogPage.cta.note', '*Full version. No credit card required. Automatic termination.')}
            </p>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};

export default Blog;
=======
import React, { useState, useEffect, useRef } from 'react'
import {
  Calendar,
  User,
  ArrowUpRight,
  ArrowUpLeft,
  ArrowRight,
  ArrowLeft,
  Search,
} from 'lucide-react'
import { Link } from 'react-router-dom'

// =========================================
// Helper Component: Fade In Animation
// =========================================
const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          observer.unobserve(domRef.current!)
        }
      },
      { threshold: 0.1 },
    )

    if (domRef.current) observer.observe(domRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function Blog() {
  const [lang] = useState(() => localStorage.getItem('site_lang') || 'en')
  const [randomCounts] = useState<number[]>(() =>
    Array.from({ length: 5 }, () => Math.floor(Math.random() * 20) + 1),
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const isAr = lang === 'ar'

  const t = {
    heroBadge: isAr ? 'مركز المعرفة' : 'Knowledge Hub',
    heroTitle1: isAr ? 'رؤى و' : 'Insights & ',
    heroTitle2: isAr ? 'استخبارات' : 'Intelligence',
    heroDesc: isAr
      ? 'ابق في المقدمة مع أحدث مقالاتنا حول ذكاء المواقع، اتجاهات السوق، والتوسع في التجزئة المدعوم بالبيانات.'
      : 'Stay ahead of the curve with our latest articles on location intelligence, market trends, and data-driven retail expansion.',

    readFull: isAr ? 'اقرأ المقال كاملاً' : 'Read Full Article',
    readMore: isAr ? 'اقرأ المزيد' : 'Read More',

    searchTitle: isAr ? 'بحث' : 'Search',
    searchPlaceholder: isAr ? 'اكتب كلمات البحث...' : 'Type keywords...',

    categoriesTitle: isAr ? 'التصنيفات' : 'Categories',
    categories: isAr
      ? ['اتجاهات التجزئة', 'ذكاء الرعاية الصحية', 'علم البيانات', 'تحليل السوق', 'دراسات الجدوى']
      : [
          'Retail Trends',
          'Healthcare Intelligence',
          'Data Science',
          'Market Analysis',
          'Feasibility Studies',
        ],

    tagsTitle: isAr ? 'الوسوم الشائعة' : 'Popular Tags',
    tags: isAr
      ? ['S-LOC', 'الرياض', 'جدة', 'صيدليات', 'ديموغرافيا', 'توسع', 'SaaS', 'عائد_الاستثمار']
      : ['S-LOC', 'Riyadh', 'Jeddah', 'Pharmacies', 'Demographics', 'Expansion', 'SaaS', 'ROI'],
  }

  const featuredPost = {
    title: isAr
      ? 'أفضل طريقة لإجراء دراسة جدوى في الرياض (الدليل الشامل 2026)'
      : 'Best Way to Do a Feasibility Study in Riyadh (2026 Complete Guide)',
    excerpt: isAr
      ? 'اكتشف أفضل طريقة لإجراء دراسة جدوى في الرياض عام 2026 باستخدام تحليل الموقع المدعوم بالبيانات، والرؤى الديموغرافية، ورسم خرائط المنافسين.'
      : 'Discover the best way to conduct a feasibility study in Riyadh in 2026 using data-driven location analysis, demographic insights, and competitor mapping to reduce risk and increase success.',
    category: isAr ? 'دراسات الجدوى' : 'Feasibility Studies',
    date: isAr ? '17 فبراير 2026' : 'Feb 17, 2026',
    author: isAr ? 'فريق البحث' : 'Research Team',
    image: '/assets/images/Feasibility-Study-in-Riyadh-768x419.jpg',
    link: '/article/feasibility-study-riyadh-guide',
  }

  const regularPosts = [
    {
      id: 2,
      title: isAr
        ? 'العثور على "المناطق الذهبية" في الرياض: كيف تحدد المواقع عالية الربح'
        : "Finding 'Golden Zones' in Riyadh: How to Spot High-Profit Locations",
      excerpt: isAr
        ? "هل تبدأ مطبخاً سحابياً؟ لا تدفع الإيجار مقابل حركة المشاة. استخدم S-LOC للعثور على 'المناطق المثالية' في الرياض—مستودعات بإيجار منخفض وكثافة عالية."
        : "Starting a Cloud Kitchen? Don't pay for footfall. Use S-LOC to find 'Sweet Spots' in Riyadh—low rent warehouses with high delivery density.",
      category: isAr ? 'تحليل السوق' : 'Market Analysis',
      date: isAr ? '16 فبراير 2026' : 'Feb 16, 2026',
      author: isAr ? 'فريق البحث' : 'Research Team',
      image: '/assets/images/Cloud-kitchen-feasibility-Saudi-Arabia-768x429.jpg',
      link: '/article/golden-zones-riyadh',
    },
    {
      id: 3,
      title: isAr
        ? 'دراسة جدوى في جدة: لماذا S-LOC أفضل من الشركات الاستشارية التقليدية'
        : 'Feasibility Study in Jeddah: Why S-LOC Is Better Than Traditional Consulting Firms',
      excerpt: isAr
        ? 'تبحث عن شركة لدراسة الجدوى في جدة؟ لا تنتظر لأسابيع. استخدم S-LOC للحصول على تحليل فوري مدعوم بالبيانات لفرعك الجديد.'
        : "Looking for a feasibility study company in Jeddah? Don't wait weeks. Use S-LOC for instant, data-driven analysis for opening your new branch.",
      category: isAr ? 'استشارات' : 'Consulting',
      date: isAr ? '15 فبراير 2026' : 'Feb 15, 2026',
      author: isAr ? 'فريق البحث' : 'Research Team',
      image: '/assets/images/Feasibility-study-company-Jeddah-768x429.jpg',
      link: '/article/feasibility-study-jeddah',
    },
    {
      id: 4,
      title: isAr
        ? 'تحليل موقع لصيدلية في الرياض: كيف تتجنب تشبع السوق'
        : 'Site Analysis for a Pharmacy in Riyadh: How to Avoid Market Saturation',
      excerpt: isAr
        ? "تفتتح صيدلية في الرياض؟ تجنب التشبع. استخدم تحليل المواقع من S-LOC للعثور على 'المناطق الذهبية' المربحة."
        : "Opening a pharmacy in Riyadh? Avoid saturation and cannibalization. Use S-LOC's instant site analysis to find profitable 'Golden Zones' today.",
      category: isAr ? 'تحليل الموقع' : 'Site Analysis',
      date: isAr ? '15 فبراير 2026' : 'Feb 15, 2026',
      author: isAr ? 'فريق البحث' : 'Research Team',
      image: '/assets/images/Site-analysis-for-pharmacy-in-Riyadh-768x429.jpg',
      link: '/article/pharmacy-site-analysis-riyadh',
    },
  ]

  return (
    <div className="w-full bg-[#fafbfc] font-sans overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      {/* 1. CREATIVE BLOG HERO */}
      <section className="relative h-[50vh] min-h-[450px] flex items-center justify-center bg-[#100324] overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#38e54d]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#9b51e0]/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
          <FadeInSection>
            <span className="px-5 py-2 rounded-full bg-white/5 border border-[#38e54d]/30 text-[#38e54d] text-[11px] font-extrabold tracking-[0.2em] uppercase mb-8 inline-block backdrop-blur-md">
              {t.heroBadge}
            </span>
            <h1 className="text-5xl md:text-[72px] font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-lg">
              {t.heroTitle1}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38e54d] to-[#8eea9e]">
                {t.heroTitle2}
              </span>
            </h1>
            <p className="text-gray-300 text-[16px] md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              {t.heroDesc}
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* 2. MAIN BLOG CONTENT */}
      <section className="py-20 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative -mt-16 z-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* LEFT: Articles Area */}
          <div className="lg:w-[65%]">
            {/* Featured Post */}
            <FadeInSection>
              <Link to={featuredPost.link} className="block mb-16 group cursor-pointer">
                <div className="relative overflow-hidden rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] mb-8 h-[350px] md:h-[450px]">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#100324]/80 via-transparent to-transparent"></div>
                  <div
                    className={`absolute top-6 ${isAr ? 'right-6' : 'left-6'} bg-[#38e54d] text-[#110222] text-[11px] font-extrabold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg`}
                  >
                    {featuredPost.category}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 md:hidden">
                    <h2 className="text-2xl font-black text-white leading-tight drop-shadow-md group-hover:text-[#38e54d] transition-colors">
                      {featuredPost.title}
                    </h2>
                  </div>
                </div>

                <div className={`hidden md:block ${isAr ? 'pl-6' : 'pr-6'}`}>
                  <div className="flex items-center gap-4 text-[13px] font-bold text-gray-400 mb-4 uppercase tracking-wide">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={16} className="text-[#9b51e0]" /> {featuredPost.date}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38e54d]"></span>
                    <span className="flex items-center gap-1.5">
                      <User size={16} className="text-[#9b51e0]" /> {featuredPost.author}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-[38px] font-black text-[#2b1055] leading-tight mb-5 group-hover:text-[#046bd2] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p
                    className={`text-gray-600 text-[16px] leading-relaxed mb-6 font-medium ${isAr ? 'border-r-4 pr-5' : 'border-l-4 pl-5'} border-[#38e54d]`}
                  >
                    {featuredPost.excerpt}
                  </p>
                  <span className="flex items-center gap-2 text-[#046bd2] font-extrabold group-hover:text-[#110222] transition-colors uppercase tracking-wider text-sm">
                    {t.readFull}
                    {isAr ? (
                      <ArrowUpLeft
                        size={20}
                        className="group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform"
                      />
                    ) : (
                      <ArrowUpRight
                        size={20}
                        className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                      />
                    )}
                  </span>
                </div>
              </Link>
            </FadeInSection>

            {/* Grid of Regular Posts */}
            <div className="grid sm:grid-cols-2 gap-8">
              {regularPosts.map((post, idx) => (
                <FadeInSection key={post.id} delay={idx * 150}>
                  <Link
                    to={post.link}
                    className="bg-white rounded-[20px] shadow-sm border border-gray-100 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 overflow-hidden group flex flex-col h-full cursor-pointer"
                  >
                    <div className="h-[220px] overflow-hidden relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div
                        className={`absolute top-4 ${isAr ? 'right-4' : 'left-4'} bg-white/95 backdrop-blur-sm text-[#2b1055] text-[10px] font-extrabold px-3 py-1.5 rounded uppercase tracking-wider shadow-sm`}
                      >
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 text-[12px] font-bold text-gray-400 mb-3 uppercase tracking-wide">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} /> {post.date}
                        </span>
                      </div>
                      <h3 className="text-[20px] font-black text-[#2b1055] leading-snug mb-3 group-hover:text-[#046bd2] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-[14px] leading-relaxed mb-6 flex-grow line-clamp-3 font-medium">
                        {post.excerpt}
                      </p>
                      <span
                        className={`mt-auto self-start flex items-center gap-2 text-[#9b51e0] font-extrabold text-[13px] group-hover:text-[#2b1055] transition-colors uppercase tracking-wide`}
                      >
                        {t.readMore}
                        {isAr ? (
                          <ArrowLeft
                            size={16}
                            className="group-hover:-translate-x-1 transition-transform"
                          />
                        ) : (
                          <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        )}
                      </span>
                    </div>
                  </Link>
                </FadeInSection>
              ))}
            </div>
          </div>

          {/* RIGHT: Sidebar */}
          <div className="lg:w-[35%]">
            <div className="sticky top-28 space-y-10">
              <FadeInSection delay={100}>
                <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
                  <h4 className="text-[18px] font-black text-[#2b1055] mb-6 flex items-center gap-2 uppercase tracking-wide">
                    <Search size={20} className="text-[#38e54d]" /> {t.searchTitle}
                  </h4>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t.searchPlaceholder}
                      className={`w-full bg-[#fafbfc] border border-gray-200 text-gray-800 text-[15px] font-medium rounded-lg focus:ring-2 focus:ring-[#38e54d] focus:border-transparent outline-none py-4 ${isAr ? 'pr-5 pl-14' : 'pl-5 pr-14'} transition-all`}
                    />
                    <button
                      className={`absolute ${isAr ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 bg-[#100324] text-[#38e54d] p-2 rounded-md hover:bg-[#38e54d] hover:text-[#100324] transition-colors shadow-md`}
                    >
                      {isAr ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                    </button>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={200}>
                <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
                  <h4 className="text-[18px] font-black text-[#2b1055] mb-6 uppercase tracking-wide">
                    {t.categoriesTitle}
                  </h4>
                  <ul className="space-y-2">
                    {t.categories.map((cat, idx) => (
                      <li key={idx}>
                        <a
                          href="#!"
                          className="flex justify-between items-center text-gray-600 font-bold text-[14px] hover:text-[#100324] transition-colors p-3 hover:bg-[#38e54d]/10 rounded-lg group"
                        >
                          <span>{cat}</span>
                          <span className="bg-gray-100 text-gray-500 group-hover:bg-[#38e54d] group-hover:text-[#100324] px-2.5 py-1 rounded text-[11px] transition-colors">
                            {randomCounts.length > 0 ? randomCounts[idx] : 0}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>

              <FadeInSection delay={300}>
                <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
                  <h4 className="text-[18px] font-black text-[#2b1055] mb-6 uppercase tracking-wide">
                    {t.tagsTitle}
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {t.tags.map((tag, idx) => (
                      <a
                        key={idx}
                        href="#!"
                        className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-600 font-bold text-[12px] uppercase tracking-wider rounded-md hover:bg-[#100324] hover:text-[#38e54d] hover:border-[#100324] transition-all"
                      >
                        #{tag}
                      </a>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
>>>>>>> upstream/main
