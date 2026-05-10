import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Minus, Phone, Mail, MonitorSmartphone } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';

const FaqItem: React.FC<{ question: string; answer: string; isRTL: boolean }> = ({ question, answer, isRTL }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-6 last:border-0 bg-white">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`w-full flex items-start justify-between focus:outline-none group ${isRTL ? 'text-right' : 'text-left'}`}
      >
        <h3 className={`text-[17px] font-medium text-[#8A2BE2] group-hover:text-[#489E46] leading-relaxed transition-colors ${isRTL ? 'pl-6' : 'pr-6'}`}>
          {question}
        </h3>
        <div className="text-[#489E46] shrink-0 mt-1 transition-transform duration-300">
          {isOpen ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </div>
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[800px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <div 
          className={`text-slate-600 font-light leading-relaxed text-[16px] ${isRTL ? 'pl-8' : 'pr-8'}`}
          dangerouslySetInnerHTML={{ __html: answer }} 
        />
      </div>
    </div>
  );
};

export const TerritoryFaq: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqCategories = [
    {
      id: 'general',
      title: t('territoryFaq.categories.general.title'),
      faqs: [
        { q: t('territoryFaq.categories.general.q1'), a: t('territoryFaq.categories.general.a1') },
        { q: t('territoryFaq.categories.general.q2'), a: t('territoryFaq.categories.general.a2') },
        { q: t('territoryFaq.categories.general.q3'), a: t('territoryFaq.categories.general.a3') },
        { q: t('territoryFaq.categories.general.q4'), a: t('territoryFaq.categories.general.a4') }
      ]
    },
    {
      id: 'industries',
      title: t('territoryFaq.categories.industries.title'),
      faqs: [
        { q: t('territoryFaq.categories.industries.q1'), a: t('territoryFaq.categories.industries.a1') },
        { q: t('territoryFaq.categories.industries.q2'), a: t('territoryFaq.categories.industries.a2') }
      ]
    },
    {
      id: 'security',
      title: t('territoryFaq.categories.security.title'),
      faqs: [
        { q: t('territoryFaq.categories.security.q1'), a: t('territoryFaq.categories.security.a1') },
        { q: t('territoryFaq.categories.security.q2'), a: t('territoryFaq.categories.security.a2') }
      ]
    },
    {
      id: 'access',
      title: t('territoryFaq.categories.access.title'),
      faqs: [
        { q: t('territoryFaq.categories.access.q1'), a: t('territoryFaq.categories.access.a1') },
        { q: t('territoryFaq.categories.access.q2'), a: t('territoryFaq.categories.access.a2') }
      ]
    },
    {
      id: 'test',
      title: t('territoryFaq.categories.test.title'),
      faqs: [
        { q: t('territoryFaq.categories.test.q1'), a: t('territoryFaq.categories.test.a1') },
        { q: t('territoryFaq.categories.test.q2'), a: t('territoryFaq.categories.test.a2') },
        { q: t('territoryFaq.categories.test.q3'), a: t('territoryFaq.categories.test.a3') }
      ]
    },
    {
      id: 'purchase',
      title: t('territoryFaq.categories.purchase.title'),
      faqs: [
        { q: t('territoryFaq.categories.purchase.q1'), a: t('territoryFaq.categories.purchase.a1') }
      ]
    },
    {
      id: 'integrations',
      title: t('territoryFaq.categories.integrations.title'),
      faqs: [
        { q: t('territoryFaq.categories.integrations.q1'), a: t('territoryFaq.categories.integrations.a1') }
      ]
    }
  ];

  return (
    <div className={`min-h-screen bg-white font-sans text-slate-900 selection:bg-[#f5f3ff] selection:text-[#8A2BE2] ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* 1. Hero Section */}
      <section className="bg-white pt-24 pb-16 text-center border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn direction="up">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#8A2BE2] leading-tight mb-4">
              {t('territoryFaq.hero.title')}
            </h1>
            <h2 className="text-2xl font-light text-slate-500">
              {t('territoryFaq.hero.subtitle')}
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* 2. FAQ Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqCategories.map((category, index) => (
            <FadeIn key={category.id} direction="up" delay={index * 100}>
              <div className="mb-20">
                <h2 className="text-3xl font-bold text-[#8A2BE2] text-center mb-8">
                  {category.title}
                </h2>
                <div className="flex flex-col">
                  {category.faqs.map((faq, idx) => (
                    <FaqItem key={idx} question={faq.q} answer={faq.a} isRTL={isRTL} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="bg-[#8A2BE2] py-24 text-center relative">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#8A2BE2] transform rotate-45"></div>
        
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[42px] font-bold text-white mb-10 leading-tight">
              {t('territoryFaq.cta.title')}
            </h2>
            
            <a 
              href="/get-started" 
              className="inline-block bg-[#489E46] text-white px-10 py-4 rounded font-bold hover:bg-[#336E2E] transition-colors shadow-lg text-lg mb-6"
            >
              {t('territoryFaq.cta.btn')}
            </a>
            
            <p className="text-purple-200 text-sm font-light">
              {t('territoryFaq.cta.note')}
            </p>
          </FadeIn>
        </div>

        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#8A2BE2] transform rotate-45"></div>
      </section>

      {/* 4. Contact Section */}
      <section className="bg-[#f8fafc] py-24 text-center">
         <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl font-bold text-[#8A2BE2] mb-4">{t('contact.title', 'Contact us!')}</h2>
            <div className="mt-6 text-[15px] text-slate-500 font-light flex items-center justify-center gap-2">
               <MonitorSmartphone className="w-4 h-4 text-[#489E46]" /> {t('contactPage.hero.availability')}
            </div>

            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mt-16 mb-8">
               {/* Support Block */}
               <div className="flex-1 bg-white p-10 rounded-xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
                  <h3 className="text-[17px] font-medium text-[#489E46] mb-2">{t('contactPage.support.pretitle')}</h3>
                  <h4 className="text-[32px] font-bold text-[#8A2BE2] mb-8">{t('contactPage.support.title')}</h4>
                  <button className="bg-[#8A2BE2] text-white px-8 py-3.5 rounded hover:bg-[#6b21a8] transition-colors mb-10 text-[15px] font-medium">
                    {t('contactPage.support.btn')}
                  </button>
                  <div className={`flex flex-col gap-4 text-[#8A2BE2] font-medium text-[15px] w-full max-w-xs mx-auto ${isRTL ? 'items-start text-right' : 'items-start text-left'}`}>
                     <div className="flex items-center gap-3" dir="ltr"><Phone className="w-5 h-5 text-[#489E46]"/> KSA: +966 55 818 8632</div>
                     <div className="flex items-center gap-3 mt-2"><Mail className="w-5 h-5 text-[#489E46]"/> support@s-locator.com</div>
                  </div>
               </div>
               
               {/* Sales Block */}
               <div className="flex-1 bg-white p-10 rounded-xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
                  <h3 className="text-[17px] font-medium text-[#489E46] mb-2">{t('contactPage.sales.pretitle')}</h3>
                  <h4 className="text-[32px] font-bold text-[#8A2BE2] mb-8">{t('contactPage.sales.title')}</h4>
                  <div className={`flex flex-col gap-4 text-[#8A2BE2] font-medium text-[15px] w-full max-w-xs mx-auto mt-2 ${isRTL ? 'items-start text-right' : 'items-start text-left'}`}>
                     <div className="flex items-center gap-3" dir="ltr"><Phone className="w-5 h-5 text-[#489E46]"/> Canada: +1 514-814-5180</div>
                     <div className="flex items-center gap-3" dir="ltr"><Phone className="w-5 h-5 text-[#489E46]"/> KSA: +966 55 818 8632</div>
                     <a href="/contact" className="text-[#a0a0a0] cursor-pointer hover:text-[#8A2BE2] ml-8 mb-2 transition-colors">{t('common.showMore')}</a>
                     <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-[#489E46]"/> sales@s-locator.com</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default TerritoryFaq;