import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Play, MonitorSmartphone, Clock, Zap, ArrowRight, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';

const ImageSwitcher: React.FC<{
  title: string;
  desc: string;
  tabs: { label: string; image: string }[];
  imagePosition: 'left' | 'right';
}> = ({ title, desc, tabs, imagePosition }) => {
  const [activeTab, setActiveTab] = useState(0);
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const textCol = (
    <div className="w-full lg:w-5/12 flex flex-col gap-6">
      <h3 className="text-[28px] font-medium text-slate-800">{title}</h3>
      <p className="text-[16px] text-slate-600 font-light leading-relaxed mb-4">{desc}</p>
      <div className={`flex flex-col gap-1 border-slate-100 ${isRTL ? 'border-r-2 pr-4' : 'border-l-2 pl-4'}`}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`text-[16px] py-2 px-3 rounded transition-all focus:outline-none ${isRTL ? 'text-right' : 'text-left'} ${
              activeTab === idx 
                ? `text-[#00609c] font-medium bg-blue-50/50 ${isRTL ? '-mr-[18px] border-r-4 border-[#00609c]' : '-ml-[18px] border-l-4 border-[#00609c]'}` 
                : 'text-slate-500 font-light hover:text-[#00609c] hover:bg-slate-50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );

  const imgCol = (
    <div className="w-full lg:w-7/12 flex justify-center">
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg border border-slate-100 bg-white">
        <img 
          src={tabs[activeTab].image} 
          alt={title} 
          className="w-full h-auto object-cover transition-opacity duration-500 ease-in-out" 
        />
      </div>
    </div>
  );

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-20 border-b border-slate-200 ${imagePosition === 'left' && !isRTL ? 'lg:flex-row-reverse' : ''} ${imagePosition === 'right' && isRTL ? 'lg:flex-row-reverse' : ''}`}>
      {imagePosition === 'right' ? (
        <>{textCol}{imgCol}</>
      ) : (
        <>{imgCol}{textCol}</>
      )}
    </div>
  );
};

const TestimonialSlider: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 0,
      companyLogo: "/assets/images/logo-reyher.webp",
      personImage: "/assets/images/reyher-von-bastian.webp",
      quote: t('territoryAdvantages.testimonials.items.t2.quote', "Through S-Locator Territory Optimization we have recognized that we can leverage further potential by shifting the boundaries of our sales territories."),
      name: "Johannes von Bastian",
      title: "Manager Sales Controlling"
    },
    {
      id: 1,
      companyLogo: "/assets/images/logo-fritz.webp",
      personImage: "/assets/images/fritz-portrait.webp",
      quote: t('territoryAdvantages.testimonials.items.t1.quote', "Being able to control the workload of individual employees during territory planning and knowing that I still have free resources is a very valuable function."),
      name: "Erik Kuschke",
      title: "Channel Sales Manager"
    },
    {
      id: 2,
      companyLogo: "/assets/images/logo-hela.webp",
      personImage: "/assets/images/portrait-hela.webp",
      quote: t('territoryAdvantages.testimonials.items.t3.quote', "For me, S-Locator Territory Optimization is the ideal tool. Within a very short time, target sales territories can be defined, customers identified and measures implemented."),
      name: "Jan Markus Eichert",
      title: "Field sales manager"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-md shadow-[0_0_20px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12 mb-8 min-h-[300px] flex items-center relative overflow-hidden">
        
        {testimonials.map((testimonial, idx) => (
          <div 
            key={testimonial.id} 
            className={`flex flex-col md:flex-row w-full gap-8 transition-all duration-500 absolute left-0 px-8 md:px-12 ${idx === currentSlide ? 'opacity-100 translate-x-0' : `opacity-0 ${isRTL ? '-translate-x-10' : 'translate-x-10'} pointer-events-none`}`}
          >
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-50 mb-4 bg-slate-200">
                <img src={testimonial.personImage} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>
              <span className="text-[#6699b8] text-6xl leading-none font-serif">“</span>
            </div>

            <div className={`w-full md:w-2/3 flex flex-col border-slate-200 ${isRTL ? 'border-r pr-8 text-right' : 'border-l pl-8 text-left'}`}>
              <img src={testimonial.companyLogo} alt="Company Logo" className="h-8 object-contain self-start mb-6" />
              <p className="text-slate-600 font-light text-[17px] leading-relaxed mb-8">
                {testimonial.quote}
              </p>
              <div className="mt-auto flex justify-between items-end">
                <div>
                  <div className="text-slate-500 font-medium text-[15px]">{testimonial.name}</div>
                  <div className="text-slate-400 font-light text-[14px]">{testimonial.title}</div>
                </div>
                <a href="#" className="text-[#6699b8] hover:text-[#00609c] text-[14px] transition-colors">
                  {t('territoryAdvantages.testimonials.readMore', 'read more...')}
                </a>
              </div>
            </div>
          </div>
        ))}

      </div>

      <div className="flex items-center justify-center gap-6">
        <button onClick={isRTL ? nextSlide : prevSlide} className="text-slate-300 hover:text-[#00609c] transition-colors focus:outline-none">
          <ChevronLeft className="w-8 h-8 stroke-1" />
        </button>
        <div className="flex gap-2.5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all focus:outline-none ${idx === currentSlide ? 'bg-[#6699b8]' : 'bg-transparent border border-[#6699b8]'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button onClick={isRTL ? prevSlide : nextSlide} className="text-slate-300 hover:text-[#00609c] transition-colors focus:outline-none">
          <ChevronRight className="w-8 h-8 stroke-1" />
        </button>
      </div>
    </div>
  );
};

export const TerritoryOptimization: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  const [activeUseCase, setActiveUseCase] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const USE_CASES = [
    { id: 0, icon: "/assets/images/img-quit-job.svg", label: t('territoryOpt.useCases.tabs.t1'), content: t('territoryOpt.useCases.content.t1') },
    { id: 1, icon: "/assets/images/img-working-hours.svg", label: t('territoryOpt.useCases.tabs.t2'), content: t('territoryOpt.useCases.content.t2') },
    { id: 2, icon: "/assets/images/img-traveling.svg", label: t('territoryOpt.useCases.tabs.t3'), content: t('territoryOpt.useCases.content.t3') },
    { id: 3, icon: "/assets/images/img-seasonal-optimization.svg", label: t('territoryOpt.useCases.tabs.t4'), content: t('territoryOpt.useCases.content.t4') },
    { id: 4, icon: "/assets/images/img-customer-univers.svg", label: t('territoryOpt.useCases.tabs.t5'), content: t('territoryOpt.useCases.content.t5') },
    { id: 5, icon: "/assets/images/img-new-market.svg", label: t('territoryOpt.useCases.tabs.t6'), content: t('territoryOpt.useCases.content.t6') },
  ];

  return (
    <div className={`min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-[#00609c] ${isRTL ? 'text-right' : 'text-left'}`}>
      
      <section className="bg-white py-16 lg:py-24 border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-1">
              <FadeIn direction={isRTL ? 'right' : 'left'}>
                <video autoPlay loop muted playsInline className="w-full max-w-lg rounded-xl shadow-xl border border-slate-100">
                  <source src="https://cdn.portatour.com/2013/img/to-landing/to-ausgangslage-ergebnis-en.mp4" type="video/mp4" />
                </video>
              </FadeIn>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-6 order-1 lg:order-2">
              <FadeIn direction="up">
                <h1 className="text-4xl lg:text-[44px] font-medium text-slate-900 leading-[1.2]">
                  {t('territoryOpt.hero.title')}
                </h1>
                <h3 className="text-xl font-medium text-[#00609c] mt-2">
                  {t('territoryOpt.hero.subtitle')}
                </h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed mt-4">
                  {t('territoryOpt.hero.desc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a href="/territory-optimization/demo" className="bg-[#00609c] text-white px-8 py-4 rounded font-medium flex items-center justify-center gap-2 hover:bg-[#004d7d] transition-all shadow-md">
                    {t('territoryOpt.hero.demo')}
                  </a>
                  <a href="#video" className="bg-white border border-slate-300 text-slate-700 px-8 py-4 rounded font-medium flex items-center justify-center gap-2 hover:border-[#00609c] hover:text-[#00609c] transition-all">
                    <Play className="w-5 h-5" /> {t('territoryOpt.hero.video')}
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[36px] font-medium text-slate-800 text-center mb-6">
              {t('territoryOpt.useCases.title')}
            </h2>
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-slate-100 mb-16">
              <h3 className="text-[17px] font-medium text-[#00609c] mb-2">{t('territoryOpt.useCases.faqQ')}</h3>
              <p className="text-[15px] text-slate-600 font-light leading-relaxed">{t('territoryOpt.useCases.faqA')}</p>
            </div>
          </FadeIn>

          <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
            <div className="w-full md:w-1/3 flex flex-col gap-2">
              {USE_CASES.map((useCase) => (
                <button
                  key={useCase.id}
                  onClick={() => setActiveUseCase(useCase.id)}
                  className={`px-5 py-3.5 rounded-md transition-all focus:outline-none border-slate-300 ${isRTL ? 'text-right border-r-4' : 'text-left border-l-4'} ${
                    activeUseCase === useCase.id 
                      ? `bg-white text-[#00609c] font-medium shadow-sm ${isRTL ? 'border-r-[#00609c]' : 'border-l-[#00609c]'}` 
                      : 'bg-transparent text-slate-600 font-light hover:bg-white/50 border-transparent hover:border-slate-300'
                  }`}
                >
                  {useCase.label}
                </button>
              ))}
            </div>
            <div className="w-full md:w-2/3 bg-white p-10 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <img src={USE_CASES[activeUseCase].icon} alt="" className="h-24 mb-6" />
              <h3 className="text-2xl font-medium text-slate-800 mb-4">{USE_CASES[activeUseCase].label}</h3>
              <p className="text-[16px] text-slate-600 font-light leading-relaxed max-w-lg mb-8">
                {USE_CASES[activeUseCase].content}
              </p>
              <button className="flex items-center gap-2 text-[#00609c] font-medium hover:underline bg-blue-50 px-6 py-2.5 rounded-full">
                <Play className="w-4 h-4" /> {t('territoryOpt.hero.video')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-[36px] font-medium text-slate-800 mb-4">
              {t('territoryOpt.switcher.mainTitle')}
            </h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              {t('territoryOpt.switcher.mainDesc')}
            </p>
          </div>

          <ImageSwitcher 
            title={t('territoryOpt.switcher.s1.title')}
            desc={t('territoryOpt.switcher.s1.desc')}
            imagePosition="right"
            tabs={[
              { label: t('territoryOpt.switcher.s1.tab1'), image: "/assets/images/img-ausgangslage-landkarte-1920x1140-en.webp" },
              { label: t('territoryOpt.switcher.s1.tab2'), image: "/assets/images/img-ausgangslage-detailansicht-1920x1140-en.webp" },
              { label: t('territoryOpt.switcher.s1.tab3'), image: "/assets/images/img-ausgangslage-jaehrlicher-zeitaufwand-1920x1140-en.webp" }
            ]}
          />

          <ImageSwitcher 
            title={t('territoryOpt.switcher.s2.title')}
            desc={t('territoryOpt.switcher.s2.desc')}
            imagePosition="left"
            tabs={[
              { label: t('territoryOpt.switcher.s2.tab1'), image: "/assets/images/img-optimierungsvorgaben-manuelle-anpassung-1920x1140-en.webp" },
              { label: t('territoryOpt.switcher.s2.tab2'), image: "/assets/images/img-optimierungsvorgaben-optimierung-1920x1140-en.webp" }
            ]}
          />

          <ImageSwitcher 
            title={t('territoryOpt.switcher.s3.title')}
            desc={t('territoryOpt.switcher.s3.desc')}
            imagePosition="right"
            tabs={[
              { label: t('territoryOpt.switcher.s3.tab1'), image: "/assets/images/img-optimierungsergebnis-landkarte-1920x1140-en.webp" },
              { label: t('territoryOpt.switcher.s3.tab2'), image: "/assets/images/img-optimierungsergebnis-detailansicht-1920x1140-en.webp" }
            ]}
          />

          <ImageSwitcher 
            title={t('territoryOpt.switcher.s4.title')}
            desc={t('territoryOpt.switcher.s4.desc')}
            imagePosition="left"
            tabs={[
              { label: t('territoryOpt.switcher.s4.tab1'), image: "/assets/images/img-optimierungsergebnis-schritt-01-1920x1140-en.webp" },
              { label: t('territoryOpt.switcher.s4.tab2'), image: "/assets/images/img-optimierungsergebnis-schritt-07-1920x1140-en.webp" }
            ]}
          />
        </div>
      </section>

      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            <div className="w-full lg:w-5/12">
              <FadeIn direction={isRTL ? 'right' : 'left'}>
                <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 border-t-4 border-t-[#00609c]">
                  <h4 className="text-xl font-medium text-[#00609c] mb-6">{t('territoryOpt.saas.boxTitle')}</h4>
                  <ul className="flex flex-col gap-5">
                    <li className="flex items-center gap-3 text-slate-700 font-light">
                      <Zap className="w-5 h-5 text-[#f0ad4e]" /> {t('territoryOpt.saas.b1')}
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-light">
                      <MonitorSmartphone className="w-5 h-5 text-[#00609c]" /> {t('territoryOpt.saas.b2')}
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-light">
                      <Clock className="w-5 h-5 text-[#44E559]" /> {t('territoryOpt.saas.b3')}
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            <div className="w-full lg:w-7/12 flex flex-col gap-5">
              <FadeIn direction={isRTL ? 'left' : 'right'}>
                <h2 className="text-3xl lg:text-[34px] font-medium text-slate-800 leading-tight mb-2">
                  {t('territoryOpt.saas.title')}
                </h2>
                <p className="text-[16px] text-slate-600 font-light leading-relaxed">
                  {t('territoryOpt.saas.p1')}
                </p>
                <p className="text-[16px] text-slate-600 font-light leading-relaxed">
                  {t('territoryOpt.saas.p2')}
                </p>
                <div className="bg-green-50 p-5 rounded-lg border border-green-100 text-green-800 font-medium leading-relaxed mt-2">
                  {t('territoryOpt.saas.p3')}
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#00609c] py-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[40px] font-medium text-white mb-6 leading-tight">
              {t('territoryOpt.demoCta.title')}
            </h2>
            <p className="text-blue-100 text-lg font-light mb-10 max-w-2xl mx-auto">
              {t('territoryOpt.demoCta.desc')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <span className="bg-[#004d7d] text-white px-5 py-2 rounded-full font-light border border-blue-400/30">
                ✨ {t('territoryOpt.demoCta.f1')}
              </span>
              <span className="bg-[#004d7d] text-white px-5 py-2 rounded-full font-light border border-blue-400/30">
                ⏱️ {t('territoryOpt.demoCta.f2')}
              </span>
              <span className="bg-[#004d7d] text-white px-5 py-2 rounded-full font-light border border-blue-400/30">
                🌐 {t('territoryOpt.demoCta.f3')}
              </span>
            </div>

            <button className="bg-[#f0ad4e] hover:bg-[#e09e3e] text-white px-10 py-4 rounded font-medium transition-colors shadow-lg text-lg">
              {t('territoryOpt.demoCta.btn')}
            </button>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-4xl font-medium text-slate-800 text-center mb-16">
              {t('territoryAdvantages.testimonials.title')}
            </h2>
            <TestimonialSlider />
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-4xl font-medium text-slate-800 mb-6">{t('territoryOpt.pricing.title')}</h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto mb-16">
              {t('territoryOpt.pricing.desc')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center hover:shadow-md transition-shadow">
                <div className="text-6xl font-light text-[#00609c] mb-2">3</div>
                <div className="text-2xl font-medium text-slate-800 mb-6">{t('territoryOpt.pricing.m3')}</div>
                <hr className="w-16 border-t-2 border-[#f0ad4e] mb-6" />
                <p className="text-slate-500 font-light leading-relaxed mb-8 flex-grow">
                  {t('territoryOpt.pricing.m3Desc')}
                </p>
                <button className="w-full bg-white border border-[#00609c] text-[#00609c] hover:bg-[#00609c] hover:text-white transition-colors py-3 rounded font-medium">
                  {t('territoryOpt.pricing.btn')}
                </button>
              </div>

              <div className="bg-white p-10 rounded-xl shadow-sm border border-[#00609c]/20 relative flex flex-col items-center hover:shadow-md transition-shadow">
                <div className={`absolute top-0 ${isRTL ? 'left-0 rounded-bl-lg rounded-tr-xl' : 'right-0 rounded-bl-lg rounded-tr-xl'} bg-[#44E559] text-white text-xs font-bold px-3 py-1`}>
                  {t('territoryAdvantages.pricing.popular')}
                </div>
                <div className="text-6xl font-light text-[#00609c] mb-2">12</div>
                <div className="text-2xl font-medium text-slate-800 mb-6">{t('territoryOpt.pricing.m12')}</div>
                <hr className="w-16 border-t-2 border-[#f0ad4e] mb-6" />
                <p className="text-slate-500 font-light leading-relaxed mb-8 flex-grow">
                  {t('territoryOpt.pricing.m12Desc')}
                </p>
                <button className="w-full bg-[#00609c] text-white hover:bg-[#004d7d] transition-colors py-3 rounded font-medium">
                  {t('territoryOpt.pricing.btn')}
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn direction="up">
            <h3 className="text-2xl font-medium text-slate-800 mb-6">{t('territoryOpt.footerCta.title')}</h3>
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
              {t('territoryOpt.footerCta.desc')}
            </p>
            <a href="/sales-route-planner" className={`inline-flex items-center gap-2 bg-white border-2 border-[#00609c] text-[#00609c] hover:bg-[#00609c] hover:text-white transition-colors px-8 py-3.5 rounded font-medium ${isRTL ? 'flex-row-reverse' : ''}`}>
              {t('territoryOpt.footerCta.btn')} <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="bg-slate-50 py-24 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-medium text-slate-800 mb-4">{t('contact.title', 'Contact us!')}</h2>
              <div className="mt-4 text-[15px] text-slate-500 font-light flex items-center justify-center gap-2">
                 <MonitorSmartphone className="w-4 h-4 text-[#6699b8]" /> {t('contactPage.hero.availability')}
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn direction={isRTL ? 'left' : 'right'}>
              <div className="bg-white p-10 rounded shadow-sm border border-slate-100 text-center flex flex-col items-center">
                <h3 className="text-[17px] font-light text-slate-600 mb-2">{t('contactPage.support.pretitle')}</h3>
                <h4 className="text-[32px] font-light text-slate-800 mb-8">{t('contactPage.support.title')}</h4>
                <button className="bg-[#00609c] text-white px-8 py-3.5 rounded hover:bg-[#004d7d] transition-colors mb-10 text-[15px]">
                  {t('contactPage.support.btn')}
                </button>
                <div className={`flex flex-col gap-4 text-[#00609c] font-light text-[15px] w-full max-w-xs mx-auto ${isRTL ? 'items-start text-right' : 'items-start text-left'}`}>
                  <div className="flex items-center gap-3" dir="ltr"><Phone className="w-5 h-5 text-[#6699b8]" /> KSA: +966 55 818 8632</div>
                  <div className="flex items-center gap-3 mt-2"><Mail className="w-5 h-5 text-[#6699b8]" /> support@s-locator.com</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction={isRTL ? 'right' : 'left'} delay={200}>
              <div className="bg-white p-10 rounded shadow-sm border border-slate-100 text-center flex flex-col items-center">
                <h3 className="text-[17px] font-light text-slate-600 mb-2">{t('contactPage.sales.pretitle')}</h3>
                <h4 className="text-[32px] font-light text-slate-800 mb-8">{t('contactPage.sales.title')}</h4>
                <div className={`flex flex-col gap-4 text-[#00609c] font-light text-[15px] w-full max-w-xs mx-auto mt-2 ${isRTL ? 'items-start text-right' : 'items-start text-left'}`}>
                  <div className="flex items-center gap-3" dir="ltr"><Phone className="w-5 h-5 text-[#6699b8]" /> Canada: +1 514-814-5180</div>
                  <div className="flex items-center gap-3" dir="ltr"><Phone className="w-5 h-5 text-[#6699b8]" /> KSA: +966 55 818 8632</div>
                  <a href="/contact" className="text-[#a0a0a0] cursor-pointer hover:text-[#00609c] ml-8 mb-2 transition-colors">{t('common.showMore')}</a>
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

export default TerritoryOptimization;