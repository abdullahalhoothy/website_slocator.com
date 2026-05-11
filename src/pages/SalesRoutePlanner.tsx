import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  CheckCircle2, Play, ChevronDown, Quote, Phone, Mail, MonitorSmartphone, ChevronLeft, ChevronRight 
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

export const SalesRoutePlanner: React.FC = () => {
  const { t, i18n } = useTranslation('landing');
  const isRTL = i18n.dir() === 'rtl';
  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const FEATURES_DATA = [
    {
      id: 1,
      title: t('srp.features.f1.title', 'Keep track of cash cows and hot leads on your customer map'),
      description: t('srp.features.f1.desc', 'As a sales rep, is it a challenge to get an accurate overview of your territory? And to know where to focus your energy? S-Locator is the best sales route planner software for you to:'),
      bullets: [
        t('srp.features.f1.b1', 'Identify current opportunities by using color-coded maps and filters (like ABC categories)'), 
        t('srp.features.f1.b2', 'Visually differentiate accounts with eye-catching symbols'), 
        t('srp.features.f1.b3', 'Know which areas you will concentrate on with the Priority Map')
      ],
      image: '/assets/images/2b-iPad-Landkarte-ABC-en-260x360.webp',
      reversed: false,
    },
    {
      id: 2,
      title: t('srp.features.f2.title', '(Re)schedule any time and achieve up to 25% more customer visits'),
      description: t('srp.features.f2.desc', 'Outside sales are dynamic - it stands to reason that a dynamic sales route planner app is the tool you need to get a leg up. S-Locator brings order to the chaos of inevitable rescheduling of stops.'),
      bullets: [
        t('srp.features.f2.b1', 'Appointment cancelled? Generate an updated schedule in seconds to accommodate your current circumstances'), 
        t('srp.features.f2.b2', 'Update your schedule whenever necessary to ensure maximum efficiency'), 
        t('srp.features.f2.b3', 'A visit\'s urgency, specific business hours, and a host of other factors can all be taken into account')
      ],
      image: '/assets/images/7a-Galaxy-Besuchsplan-durcharbeiten-en-166x359.webp',
      reversed: true,
    },
    {
      id: 3,
      title: t('srp.features.f3.title', 'Visit accounts at the right moment to close the deal'),
      description: t('srp.features.f3.desc', 'Do you find prioritizing your customers tricky? Are you tired of constantly having to put out fires? The S-Locator sales route planner app will ensure you get a grip on all the moving parts in your territory.'),
      bullets: [
        t('srp.features.f3.b1', 'Be free of worry and stress over when to plan the next visit - let S-Locator keep track and act on your behalf'), 
        t('srp.features.f3.b2', 'Accounts due for a visit automatically appear in your schedule'), 
        t('srp.features.f3.b3', 'Adapt clients\' intervals at any time so you can follow up at the right moment')
      ],
      image: '/assets/images/1a-iPad-EinTagesRouteMitPin-en-260x360.webp',
      reversed: false,
    }
  ];

  const TESTIMONIALS = [
    { text: t('srp.testimonials.t1.text'), author: t('srp.testimonials.t1.author'), role: t('srp.testimonials.t1.role'), logo: "/assets/images/logo-sonax.webp", image: "/assets/images/florianbehmer-rund.webp" },
    { text: t('srp.testimonials.t2.text'), author: t('srp.testimonials.t2.author'), role: t('srp.testimonials.t2.role'), logo: "/assets/images/samsung.webp", image: "/assets/images/bolliger.webp" },
    { text: t('srp.testimonials.t3.text'), author: t('srp.testimonials.t3.author'), role: t('srp.testimonials.t3.role'), logo: "/assets/images/trupanion.webp", image: "/assets/images/trupanion.webp" },
    { text: t('srp.testimonials.t4.text'), author: t('srp.testimonials.t4.author'), role: t('srp.testimonials.t4.role'), logo: "/assets/images/wuerth-group.webp", image: "/assets/images/florianbehmer-rund.webp" }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));

  const allFaqs = Array.from({ length: 21 }, (_, i) => ({
    q: t(`srp.faq.q${i + 1}.q`),
    a: t(`srp.faq.q${i + 1}.a`)
  }));
  const leftFaqs = allFaqs.slice(0, 11);
  const rightFaqs = allFaqs.slice(11, 21);

  return (
    <div className={`min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-[#00609c] ${isRTL ? 'text-right' : 'text-left'}`}>
      
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
                  <span className="text-[11px] font-bold text-[#00609c] uppercase tracking-widest">{t('srp.hero.badge', 'Route Planner')}</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-medium text-slate-900 leading-[1.2] mt-4">
                  {t('srp.hero.title', 'Sales route planner –')} <br/>
                  <span className="font-light text-slate-600">{t('srp.hero.subtitle', 'capture more time to generate sales')}</span>
                </h1>
                <p className="text-lg text-slate-500 font-light leading-relaxed max-w-xl mt-6">
                  {t('srp.hero.desc', 'Get an optimized route scheduled at the push of a button.')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a href="/get-started" className="bg-[#44E559] hover:bg-[#3bc24d] text-slate-900 px-8 py-4 rounded font-medium flex items-center justify-center gap-2 transition-all shadow-md">
                    {t('srp.hero.cta', 'Start 30-day free trial*')}
                  </a>
                  <a href="#video" className="bg-white border border-slate-300 text-slate-700 px-8 py-4 rounded font-medium flex items-center justify-center gap-2 hover:border-[#00609c] hover:text-[#00609c] transition-all">
                    <Play className="w-5 h-5" /> {t('srp.hero.video', 'Watch video')}
                  </a>
                </div>
                <p className="text-xs text-slate-400 mt-3 font-light">{t('srp.hero.footnote', '*Full version. No credit card required.')}</p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

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
            <a href="/customers" className="text-[#00609c] hover:underline font-light text-sm">{t('srp.customers.learnMore', 'Learn more about our customers')}</a>
          </FadeIn>
        </div>
      </section>

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
                        {t('srp.features.cta', 'Learn more about our Route Planner')}
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

      <section className="py-20 bg-[#6dd5ed]/20 text-center border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-4xl font-medium text-slate-800 mb-6">{t('srp.guide.title', 'The ultimate route planning guide for sales reps')}</h2>
            <p className="text-lg text-slate-600 font-light mb-8">{t('srp.guide.desc', 'An automatic sales route planner app is the smart way to manage your visits. Learn how to get started with our ultimate sales route planning guide.')}</p>
            <a href="/blog/guide" className="bg-[#f0ad4e] hover:bg-[#e09e3e] text-white px-8 py-3 rounded font-medium transition-colors shadow-md">{t('srp.guide.btn', 'Read our sales route planning guide')}</a>
          </FadeIn>
        </div>
      </section>

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
                <h2 className="text-4xl font-medium text-slate-800">{t('srp.integrations.title', 'Integrations')}</h2>
                <p className="text-lg text-slate-500 font-light leading-relaxed mt-4">{t('srp.integrations.desc', 'Up-to-date data is essential for sales route planning.')}</p>
                <ul className="flex flex-col gap-4 mt-6 mb-8">
                  {[t('srp.integrations.b1', 'Fast and easy manual data import'), t('srp.integrations.b2', 'Out-of-the-box integrations'), t('srp.integrations.b3', 'Automated data synchronisation')].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 font-light">
                      <CheckCircle2 className="w-5 h-5 text-[#00609c] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="/integrations" className="bg-[#00609c] text-white px-8 py-3 rounded font-medium hover:bg-[#004d7d] transition-colors w-fit shadow-sm">
                  {t('srp.integrations.cta', 'Learn more about integrations')}
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-4xl font-medium text-slate-800 text-center mb-16">{t('srp.testimonials.title', 'Customer stories')}</h2>
          </FadeIn>
          
          <FadeIn direction="up" delay={100}>
            <div className="bg-white border border-slate-200 p-8 lg:p-12 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start min-h-[220px]">
                
                <div className="flex flex-col items-center shrink-0 md:w-1/3 md:border-r border-slate-100 md:pr-8">
                  <img 
                    src={TESTIMONIALS[currentSlide].image} 
                    alt={TESTIMONIALS[currentSlide].author} 
                    className="w-24 h-24 rounded-full object-cover shadow-sm mb-6" 
                  />
                  <Quote className={`w-10 h-10 text-[#00609c] opacity-80 ${isRTL ? '' : 'rotate-180'}`} />
                </div>
                
                <div className="md:w-2/3 flex flex-col justify-center text-center md:text-left">
                  <img src={TESTIMONIALS[currentSlide].logo} alt="Logo" className={`h-8 mb-6 object-contain ${isRTL ? 'mx-auto md:mr-0 md:ml-auto' : 'mx-auto md:ml-0 md:mr-auto'}`} />
                  <p className="text-slate-600 font-light mb-8 leading-relaxed text-[17px]">
                    {TESTIMONIALS[currentSlide].text}
                  </p>
                  <div className="mt-auto">
                    <div className="text-[#a0a0a0] font-light text-[15px]">{TESTIMONIALS[currentSlide].author}</div>
                    <div className="text-[#a0a0a0] font-light text-[15px]">{TESTIMONIALS[currentSlide].role}</div>
                    <div className="mt-4"><a href="#" className="text-[#00609c] hover:underline font-light text-sm">{t('advantages.readMore', 'read more...')}</a></div>
                  </div>
                </div>

              </div>
            </div>

            <div className="flex items-center justify-center gap-6 mt-10">
              <button onClick={isRTL ? nextSlide : prevSlide} className="text-slate-400 hover:text-[#00609c] transition-colors focus:outline-none">
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

              <button onClick={isRTL ? prevSlide : nextSlide} className="text-slate-400 hover:text-[#00609c] transition-colors focus:outline-none">
                <ChevronRight className="w-8 h-8 font-light" strokeWidth={1} />
              </button>
            </div>

            <div className="text-center mt-12">
               <a href="/customers" className="bg-[#00609c] text-white px-6 py-2.5 rounded hover:bg-[#004d7d] transition-colors inline-block text-[15px]">
                 {t('srp.customers.learnMore', 'Learn more about our customers')}
               </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#00609c] py-24 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[44px] font-medium text-white mb-10 leading-tight">
              {t('srp.cta.title', 'Increase your customer visits by up to')} <em className="text-[#f0ad4e] not-italic font-bold">{t('srp.cta.highlight', '25%')}</em> {t('srp.cta.rest', 'with S-Locator')}
            </h2>
            <button className="bg-[#f0ad4e] hover:bg-[#e09e3e] text-white px-10 py-4 rounded font-medium transition-colors shadow-lg text-lg">
              {t('srp.cta.btn', 'Start 30-day free trial*')}
            </button>
            <p className="text-blue-200 text-sm font-light mt-6">{t('srp.hero.footnote', '*Full version. No credit card required.')}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-[#e8f1f5]">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[40px] font-medium text-slate-800 text-center mb-16">{t('srp.faq.title', 'Frequently asked questions')}</h2>
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

      <section className="bg-white py-24 border-t border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-medium text-slate-800 mb-4">{t('contactPage.hero.title', 'Contact us!')}</h2>
              <div className="mt-4 text-[15px] text-slate-500 font-light flex items-center justify-center gap-2">
                 <MonitorSmartphone className="w-4 h-4 text-[#6699b8]" /> {t('contactPage.hero.availability', 'Available by phone from Mon-Fri, 9-17h CET')}
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn direction={isRTL ? 'left' : 'right'}>
              <div className="bg-white p-10 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-slate-100 text-center flex flex-col items-center h-full">
                <h3 className="text-[17px] font-light text-slate-600 mb-2">{t('contactPage.support.pretitle', 'I am already a user and need')}</h3>
                <h4 className="text-[32px] font-light text-slate-800 mb-8">{t('contactPage.support.title', 'Support')}</h4>
                <button className="bg-[#00609c] text-white px-8 py-3.5 rounded hover:bg-[#004d7d] transition-colors mb-10 text-[15px]">
                  {t('contactPage.support.btn', 'To the HelpCenter')}
                </button>
                <div className="flex flex-col gap-4 text-[#00609c] font-light text-[15px] items-start w-full max-w-xs mx-auto">
                  <div className="flex items-center gap-3" dir="ltr"><Phone className="w-5 h-5 text-[#6699b8]" /> KSA: +966 55 818 8632</div>
                  <div className="flex items-center gap-3 mt-2"><Mail className="w-5 h-5 text-[#6699b8]" /> support@s-locator.com</div>
                  <div className="flex items-start gap-3 mt-4 pt-4 border-t border-slate-100 w-full text-slate-600">
                    <MonitorSmartphone className="w-5 h-5 text-[#6699b8] mt-1 shrink-0" />
                    <span className={`leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>{t('contactPage.support.teamviewer', 'Teamviewer: Remote access for S-Locator Support')}</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction={isRTL ? 'right' : 'left'} delay={200}>
              <div className="bg-white p-10 rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-slate-100 text-center flex flex-col items-center h-full">
                <h3 className="text-[17px] font-light text-slate-600 mb-2">{t('contactPage.sales.pretitle', 'I am interested and would like')}</h3>
                <h4 className="text-[32px] font-light text-slate-800 mb-8">{t('contactPage.sales.title', 'Buying advice')}</h4>
                <div className="flex flex-col gap-4 text-[#00609c] font-light text-[15px] items-start w-full max-w-xs mx-auto mt-2">
                  <div className="flex items-center gap-3" dir="ltr"><Phone className="w-5 h-5 text-[#6699b8]" /> Canada: +1 514-814-5180</div>
                  <div className="flex items-center gap-3" dir="ltr"><Phone className="w-5 h-5 text-[#6699b8]" /> KSA: +966 55 818 8632</div>
                  <div className={`w-full ${isRTL ? 'text-right pr-8' : 'text-left pl-8'}`}>
                     <a href="/contact" className="text-sm text-[#a0a0a0] hover:text-[#00609c] transition-colors">{t('common.showMore', 'Show more')}</a>
                  </div>
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