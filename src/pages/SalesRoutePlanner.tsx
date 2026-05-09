import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  CheckCircle2, Play, ArrowRight, ChevronDown, Quote, Phone, Mail, MonitorSmartphone, ChevronLeft, ChevronRight 
} from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';


const FaqAccordion: React.FC<{ question: string; answer: React.ReactNode }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 bg-white first:rounded-t-sm last:rounded-b-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between py-5 px-6 text-left focus:outline-none hover:bg-slate-50 transition-colors"
      >
        <span className="font-medium text-[#00609c] text-[16px] pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pt-1 text-slate-600 font-light leading-relaxed text-[15px]">
          {answer}
        </div>
      </div>
    </div>
  );
};

// =========================================
// 2. المكون الرئيسي للصفحة
// =========================================

export const SalesRoutePlanner: React.FC = () => {
  const { t, i18n } = useTranslation('landing');
  const isRTL = i18n.dir() === 'rtl';
  
  // حالة الـ Slider
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // بيانات المميزات
  const FEATURES_DATA = [
    {
      id: 1,
      title: t('srp.features.f1.title'),
      description: t('srp.features.f1.desc'),
      bullets: [t('srp.features.f1.b1'), t('srp.features.f1.b2'), t('srp.features.f1.b3')],
      image: '/assets/images/2b-iPad-Landkarte-ABC-en-260x360.webp',
      reversed: false,
    },
    {
      id: 2,
      title: t('srp.features.f2.title'),
      description: t('srp.features.f2.desc'),
      bullets: [t('srp.features.f2.b1'), t('srp.features.f2.b2'), t('srp.features.f2.b3')],
      image: '/assets/images/7a-Galaxy-Besuchsplan-durcharbeiten-en-166x359.webp',
      reversed: true,
    },
    {
      id: 3,
      title: t('srp.features.f3.title'),
      description: t('srp.features.f3.desc'),
      bullets: [t('srp.features.f3.b1'), t('srp.features.f3.b2'), t('srp.features.f3.b3')],
      image: '/assets/images/1a-iPad-EinTagesRouteMitPin-en-260x360.webp',
      reversed: false,
    }
  ];

  // بيانات قصص العملاء للـ Slider
  const TESTIMONIALS = [
    { text: t('srp.testimonials.t1.text'), author: t('srp.testimonials.t1.author'), role: t('srp.testimonials.t1.role'), logo: "/assets/images/logo-sonax.webp", image: "/assets/images/florianbehmer-rund.webp" },
    { text: t('srp.testimonials.t2.text'), author: t('srp.testimonials.t2.author'), role: t('srp.testimonials.t2.role'), logo: "/assets/images/samsung.webp", image: "/assets/images/bolliger.webp" },
    { text: t('srp.testimonials.t3.text'), author: t('srp.testimonials.t3.author'), role: t('srp.testimonials.t3.role'), logo: "/assets/images/trupanion.webp", image: "/assets/images/trupanion.webp" }, // تأكد من وجود صورة trupanion
    { text: t('srp.testimonials.t4.text'), author: t('srp.testimonials.t4.author'), role: t('srp.testimonials.t4.role'), logo: "/assets/images/wuerth-group.webp", image: "/assets/images/florianbehmer-rund.webp" } // صورة تقريبية
  ];

  // وظائف التنقل للـ Slider
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));

  // بيانات الأسئلة الشائعة الـ 21 (مقسمة لعمودين)
  const allFaqs = Array.from({ length: 21 }, (_, i) => ({
    q: t(`srp.faq.q${i + 1}.q`),
    a: t(`srp.faq.q${i + 1}.a`)
  }));
  const leftFaqs = allFaqs.slice(0, 11);
  const rightFaqs = allFaqs.slice(11, 21);

  return (
    <div className={`min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-[#00609c] ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* 1. Hero Section */}
      <section className="bg-white py-20 lg:py-24 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
              <FadeIn direction={isRTL ? 'right' : 'left'}>
                <img src="/assets/images/ill-sales-route-planner-md-xl-en.webp" alt="Sales Route Planner" className="w-full max-w-lg drop-shadow-xl" />
              </FadeIn>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6 order-1 lg:order-2">
              <FadeIn direction="up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 w-fit">
                  <span className="flex h-2 w-2 rounded-full bg-[#00609c]"></span>
                  <span className="text-[11px] font-bold text-[#00609c] uppercase tracking-widest">{t('srp.hero.badge')}</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-medium text-slate-900 leading-[1.2] mt-4">
                  {t('srp.hero.title')} <br/>
                  <span className="font-light text-slate-600">{t('srp.hero.subtitle')}</span>
                </h1>
                <p className="text-lg text-slate-500 font-light leading-relaxed max-w-xl mt-6">
                  {t('srp.hero.desc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a href="/get-started" className="bg-[#44E559] hover:bg-[#3bc24d] text-slate-900 px-8 py-4 rounded font-medium flex items-center justify-center gap-2 transition-all shadow-md">
                    {t('srp.hero.cta')}
                  </a>
                  <a href="#video" className="bg-white border border-slate-300 text-slate-700 px-8 py-4 rounded font-medium flex items-center justify-center gap-2 hover:border-[#00609c] hover:text-[#00609c] transition-all">
                    <Play className="w-5 h-5" /> {t('srp.hero.video')}
                  </a>
                </div>
                <p className="text-xs text-slate-400 mt-3 font-light">{t('srp.hero.footnote')}</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Customers Logos */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <FadeIn direction="up">
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 mb-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <img src="/assets/images/wuerth-group.webp" alt="Wurth" className="h-10" />
              <img src="/assets/images/haleon.webp" alt="Haleon" className="h-8" />
              <img src="/assets/images/samsung.webp" alt="Samsung" className="h-6" />
              <img src="/assets/images/trupanion.webp" alt="Trupanion" className="h-8" />
              <img src="/assets/images/wd40.webp" alt="WD-40" className="h-12" />
            </div>
            <a href="/customers" className="text-[#00609c] hover:underline font-light text-sm">{t('srp.customers.learnMore')}</a>
          </FadeIn>
        </div>
      </section>

      {/* 3. Alternating Features */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          {FEATURES_DATA.map((feature) => (
            <div key={feature.id} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 py-16 ${feature.reversed ? 'lg:flex-row-reverse' : ''} ${feature.id !== 1 ? 'border-t border-slate-200' : ''}`}>
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <FadeIn direction={isRTL ? (feature.reversed ? 'right' : 'left') : (feature.reversed ? 'left' : 'right')}>
                  <h2 className="text-3xl font-medium text-slate-800 leading-tight">{feature.title}</h2>
                  <p className="text-lg text-slate-500 font-light leading-relaxed mt-4">{feature.description}</p>
                  <ul className="flex flex-col gap-4 mt-6">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600 font-light">
                        <CheckCircle2 className="w-5 h-5 text-[#00609c] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  {feature.id === 3 && (
                    <div className="mt-8">
                      <a href="/features" className="bg-[#00609c] text-white px-8 py-3 rounded font-medium hover:bg-[#004d7d] transition-colors shadow-sm inline-block">
                        {t('srp.features.cta')}
                      </a>
                    </div>
                  )}
                </FadeIn>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <FadeIn direction={isRTL ? (feature.reversed ? 'left' : 'right') : (feature.reversed ? 'right' : 'left')}>
                  <img src={feature.image} alt="Feature" className="max-w-full h-auto drop-shadow-2xl rounded-lg" />
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Guide / Blog CTA Section */}
      <section className="py-20 bg-[#6dd5ed]/20 text-center border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-4xl font-medium text-slate-800 mb-6">The ultimate route planning guide for sales reps</h2>
            <p className="text-lg text-slate-600 font-light mb-8">An automatic sales route planner app is the smart way to manage your visits. Learn how to get started with our ultimate sales route planning guide.</p>
            <a href="/blog/guide" className="bg-[#f0ad4e] hover:bg-[#e09e3e] text-white px-8 py-3 rounded font-medium transition-colors shadow-md">Read our sales route planning guide</a>
          </FadeIn>
        </div>
      </section>

      {/* 5. Integrations Section */}
      <section className="py-24 bg-white border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex justify-center">
              <FadeIn direction={isRTL ? 'right' : 'left'}>
                <img src="/assets/images/portatour-integrations.webp" alt="Integrations" className="max-w-full h-auto drop-shadow-xl" />
              </FadeIn>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <FadeIn direction="up">
                <h2 className="text-4xl font-medium text-slate-800">{t('srp.integrations.title')}</h2>
                <p className="text-lg text-slate-500 font-light leading-relaxed mt-4">{t('srp.integrations.desc')}</p>
                <ul className="flex flex-col gap-4 mt-6 mb-8">
                  {[t('srp.integrations.b1'), t('srp.integrations.b2'), t('srp.integrations.b3')].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 font-light">
                      <CheckCircle2 className="w-5 h-5 text-[#00609c] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="/integrations" className="bg-[#00609c] text-white px-8 py-3 rounded font-medium hover:bg-[#004d7d] transition-colors w-fit shadow-sm">
                  {t('srp.integrations.cta')}
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Success Stories (Slider Component) */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-4xl font-medium text-slate-800 text-center mb-16">{t('srp.testimonials.title')}</h2>
          </FadeIn>
          
          {/* Slider Container */}
          <FadeIn direction="up" delay={100}>
            <div className="bg-white border border-slate-200 p-8 lg:p-12 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start min-h-[220px]">
                
                {/* Left Side: Image & Quote */}
                <div className="flex flex-col items-center shrink-0 md:w-1/3 md:border-r border-slate-100 md:pr-8">
                  <img 
                    src={TESTIMONIALS[currentSlide].image} 
                    alt={TESTIMONIALS[currentSlide].author} 
                    className="w-24 h-24 rounded-full object-cover shadow-sm mb-6" 
                  />
                  <Quote className={`w-10 h-10 text-[#00609c] opacity-80 ${isRTL ? '' : 'rotate-180'}`} />
                </div>
                
                {/* Right Side: Text & Logo */}
                <div className="md:w-2/3 flex flex-col justify-center text-center md:text-left">
                  <img src={TESTIMONIALS[currentSlide].logo} alt="Logo" className={`h-8 mb-6 object-contain ${isRTL ? 'mx-auto md:mr-0 md:ml-auto' : 'mx-auto md:ml-0 md:mr-auto'}`} />
                  <p className="text-slate-600 font-light mb-8 leading-relaxed text-[17px]">
                    {TESTIMONIALS[currentSlide].text}
                  </p>
                  <div className="mt-auto">
                    <div className="text-[#a0a0a0] font-light text-[15px]">{TESTIMONIALS[currentSlide].author}</div>
                    <div className="text-[#a0a0a0] font-light text-[15px]">{TESTIMONIALS[currentSlide].role}</div>
                    <div className="mt-4"><a href="#" className="text-[#00609c] hover:underline font-light text-sm">read more...</a></div>
                  </div>
                </div>

              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button onClick={prevSlide} className="text-slate-400 hover:text-[#00609c] transition-colors focus:outline-none">
                <ChevronLeft className="w-8 h-8 font-light" strokeWidth={1} />
              </button>
              
              <div className="flex gap-3">
                {TESTIMONIALS.map((_, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-3 h-3 rounded-full border border-slate-300 transition-all ${currentSlide === idx ? 'bg-[#6699b8] border-[#6699b8]' : 'bg-transparent hover:bg-slate-200'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button onClick={nextSlide} className="text-slate-400 hover:text-[#00609c] transition-colors focus:outline-none">
                <ChevronRight className="w-8 h-8 font-light" strokeWidth={1} />
              </button>
            </div>

            <div className="text-center mt-12">
               <a href="/customers" className="bg-[#00609c] text-white px-6 py-2.5 rounded hover:bg-[#004d7d] transition-colors inline-block text-[15px]">
                 {t('srp.customers.learnMore')}
               </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. Huge Blue CTA */}
      <section className="bg-[#00609c] py-24 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[44px] font-medium text-white mb-10 leading-tight">
              {t('srp.cta.title')} <em className="text-[#f0ad4e] not-italic font-bold">{t('srp.cta.highlight')}</em> {t('srp.cta.rest')}
            </h2>
            <button className="bg-[#f0ad4e] hover:bg-[#e09e3e] text-white px-10 py-4 rounded font-medium transition-colors shadow-lg text-lg">
              {t('srp.cta.btn')}
            </button>
            <p className="text-blue-200 text-sm font-light mt-6">{t('srp.hero.footnote')}</p>
          </FadeIn>
        </div>
      </section>

      {/* 8. Full FAQ Section (21 Questions in 2 Columns) */}
      <section className="py-24 bg-[#e8f1f5]">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[40px] font-medium text-slate-800 text-center mb-16">{t('srp.faq.title')}</h2>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-0">
            <div className="flex flex-col">
              {leftFaqs.map((faq, index) => (
                <FadeIn key={index} direction="up" delay={index * 50}>
                  <FaqAccordion question={faq.q} answer={<p>{faq.a}</p>} />
                </FadeIn>
              ))}
            </div>
            <div className="flex flex-col">
              {rightFaqs.map((faq, index) => (
                <FadeIn key={index} direction="up" delay={index * 50}>
                  <FaqAccordion question={faq.q} answer={<p>{faq.a}</p>} />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. Contact Section (Without Team Honeycomb) */}
      <section className="bg-white py-24 border-t border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-medium text-slate-800 mb-4">Contact us!</h2>
              <div className="mt-4 text-[15px] text-slate-500 font-light flex items-center justify-center gap-2">
                 <MonitorSmartphone className="w-4 h-4 text-[#6699b8]" /> Available by phone from Mon-Fri, 9-17h CET
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn direction={isRTL ? 'left' : 'right'}>
              <div className="bg-white p-10 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-slate-100 text-center flex flex-col items-center">
                <h3 className="text-[17px] font-light text-slate-600 mb-2">I am already a user and need</h3>
                <h4 className="text-[32px] font-light text-slate-800 mb-8">Support</h4>
                <button className="bg-[#00609c] text-white px-8 py-3.5 rounded hover:bg-[#004d7d] transition-colors mb-10 text-[15px]">
                  To the HelpCenter
                </button>
                <div className="flex flex-col gap-4 text-[#00609c] font-light text-[15px] items-start w-full max-w-xs mx-auto">
                  <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#6699b8]" /> US: +1 646-974-60-50</div>
                  <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#6699b8]" /> EU: +43 1 2531516-50</div>
                  <div className="flex items-center gap-3 mt-2"><Mail className="w-5 h-5 text-[#6699b8]" /> support@s-locator.com</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction={isRTL ? 'right' : 'left'} delay={200}>
              <div className="bg-white p-10 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-slate-100 text-center flex flex-col items-center">
                <h3 className="text-[17px] font-light text-slate-600 mb-2">I am interested and would like</h3>
                <h4 className="text-[32px] font-light text-slate-800 mb-8">Buying advice</h4>
                <div className="flex flex-col gap-4 text-[#00609c] font-light text-[15px] items-start w-full max-w-xs mx-auto mt-2">
                  <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#6699b8]" /> US: +1 646-974-6040</div>
                  <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#6699b8]" /> GB: +44 20 3519 2135</div>
                  <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#6699b8]" /> AU: +61 3 8592 0520</div>
                  <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#6699b8]" /> EU: +43 1 2531516-40</div>
                  <div className="text-[#a0a0a0] cursor-pointer hover:text-[#00609c] ml-8 mb-2">show more</div>
                  <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-[#6699b8]" /> sales@s-locator.com</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SalesRoutePlanner;