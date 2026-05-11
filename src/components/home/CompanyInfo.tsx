import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; 
import { FadeIn } from '../animations/FadeIn';
import { CountUp } from '../animations/CountUp';

import { BLOG_POSTS } from '../../pages/Blog'; 

export const CompanyInfo: React.FC = () => {
  const { t, i18n } = useTranslation('landing');
  const isRTL = i18n.dir() === 'rtl';
  
  const recentArticles = BLOG_POSTS ? BLOG_POSTS.slice(0, 3) : [];

  return (
    <section className={`bg-white pt-24 pb-16 overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="text-center mb-24">
          <FadeIn direction="up">
            <h2 className="text-4xl font-medium text-slate-800 mb-4">{t('about.title', 'About Us')}</h2>
            <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto mb-12">{t('about.subtitle', 'Our journey in numbers')}</p>
          </FadeIn>
          
          <div className="flex flex-wrap justify-center gap-6">
            <FadeIn delay={100} direction="up">
              <div className="bg-white border border-slate-100 shadow-sm rounded-lg p-8 min-w-[250px] flex flex-col items-center">
                <div className="text-4xl font-bold text-[#8A2BE2] mb-2">
                  <CountUp end={2024} duration={2500} />
                </div>
                <div className="text-slate-500 font-light text-sm uppercase tracking-wider">{t('about.founded', 'founded')}</div>
              </div>
            </FadeIn>

            <FadeIn delay={300} direction="up">
              <div className="bg-white border border-slate-100 shadow-sm rounded-lg p-8 min-w-[250px] flex flex-col items-center">
                <div className="text-4xl font-bold text-[#8A2BE2] mb-2">
                  <CountUp end={1500} suffix="+" duration={2000} />
                </div>
                <div className="text-slate-500 font-light text-sm uppercase tracking-wider">{t('about.customers', 'Customers')}</div>
              </div>
            </FadeIn>

            <FadeIn delay={500} direction="up">
              <div className="bg-white border border-slate-100 shadow-sm rounded-lg p-8 min-w-[250px] flex flex-col items-center">
                <div className="text-4xl font-bold text-[#8A2BE2] mb-2">
                  <CountUp end={20} suffix="+" duration={1500} />
                </div>
                <div className="text-slate-500 font-light text-sm uppercase tracking-wider">{t('about.countries', 'Countries')}</div>
              </div>
            </FadeIn>
          </div>
        </div>

        <hr className="border-slate-100 mb-20" />

        <div className="text-center mb-12">
          <FadeIn direction="up">
            <h2 className="text-4xl font-medium text-slate-800 mb-4">{t('blog.title', 'Latest from our Blog')}</h2>
            <p className="text-lg text-slate-500 font-light">{t('blog.subtitle', 'News, insights, and updates')}</p>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={200}>
          <div className="min-h-[200px] flex items-center justify-center">
            {recentArticles.length === 0 ? (
              <div className="bg-slate-50 border border-dashed border-slate-200 rounded-xl p-12 text-center w-full max-w-2xl">
                 <p className="text-slate-500 italic text-lg">{t('blog.emptyMessage', 'No articles available yet.')}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recentArticles.map(article => (
                  <div key={article.id} className="border border-slate-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                     <img src={article.image} alt={t(article.titleKey, article.title)} className="w-full h-48 object-cover" />
                     <div className="p-6 flex flex-col items-start h-full flex-grow">
                       <span className="bg-[#f5f3ff] text-[#8A2BE2] text-xs font-bold px-2.5 py-1 rounded mb-4 inline-block">
                         {t(article.categoryKey, article.category)}
                       </span>
                       <h3 className="font-medium text-slate-900 mb-4 leading-snug">
                         {t(article.titleKey, article.title)}
                       </h3>
                       <Link to="/blog/article" className="text-sm text-[#8A2BE2] font-medium hover:underline mt-auto">
                         {t('blog.readMore', 'Read more')}
                       </Link>
                     </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </FadeIn>

      </div>
    </section>
  );
};