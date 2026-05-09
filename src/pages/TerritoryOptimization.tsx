import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Play, MonitorSmartphone, Clock, Zap, ArrowRight, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';

// =========================================
// 1. مكون مبدل الصور التفاعلي (Image Switcher)
// =========================================
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
      <div className="flex flex-col gap-1 border-l-2 border-slate-100 pl-4">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`text-left text-[16px] py-2 px-3 rounded transition-all focus:outline-none ${
              activeTab === idx 
                ? 'text-[#00609c] font-medium bg-blue-50/50 -ml-[18px] border-l-4 border-[#00609c]' 
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
    <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-20 border-b border-slate-200 ${imagePosition === 'left' && !isRTL ? 'lg:flex-row-reverse' : ''}`}>
      {imagePosition === 'right' ? (
        <>{textCol}{imgCol}</>
      ) : (
        <>{imgCol}{textCol}</>
      )}
    </div>
  );
};

// =========================================
// 2. مكون سلايدر آراء العملاء (Testimonials Slider) - الجديد
// =========================================
const TestimonialSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 0,
      companyLogo: "/assets/images/logo-reyher.webp",
      personImage: "/assets/images/reyher-von-bastian.webp", // ضع صورة الشخص هنا
      quote: "Through S-Locator Territory Optimization we have recognized that we can leverage further potential by shifting the boundaries of our sales territories.",
      name: "Johannes von Bastian",
      title: "Manager Sales Controlling"
    },
    {
      id: 1,
      companyLogo: "/assets/images/logo-fritz.webp",
      personImage: "/assets/images/fritz-portrait.webp",
      quote: "Being able to control the workload of individual employees during territory planning and knowing that I still have free resources is a very valuable function.",
      name: "Erik Kuschke",
      title: "Channel Sales Manager"
    },
    {
      id: 2,
      companyLogo: "/assets/images/logo-hela.webp",
      personImage: "/assets/images/portrait-hela.webp",
      quote: "For me, S-Locator Territory Optimization is the ideal tool. Within a very short time, target sales territories can be defined, customers identified and measures implemented.",
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
      {/* حاوية السلايدر البيضاء */}
      <div className="bg-white rounded-md shadow-[0_0_20px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12 mb-8 min-h-[300px] flex items-center relative overflow-hidden">
        
        {testimonials.map((testimonial, idx) => (
          <div 
            key={testimonial.id} 
            className={`flex flex-col md:flex-row w-full gap-8 transition-all duration-500 absolute left-0 px-8 md:px-12 ${idx === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}
          >
            {/* الجزء الأيسر (صورة الشخص وعلامة الاقتباس) */}
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-50 mb-4 bg-slate-200">
                {/* إذا لم تتوفر الصورة سيعرض خلفية رمادية */}
                <img src={testimonial.personImage} alt={testimonial.name} className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <span className="text-[#6699b8] text-6xl leading-none font-serif">“</span>
            </div>

            {/* الجزء الأيمن (اللوجو، النص، ومعلومات الشخص) */}
            <div className="w-full md:w-2/3 flex flex-col border-l border-slate-200 pl-8">
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
                  read more...
                </a>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* أزرار التحكم (الأسهم والنقاط) */}
      <div className="flex items-center justify-center gap-6">
        <button onClick={prevSlide} className="text-slate-300 hover:text-[#00609c] transition-colors focus:outline-none">
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
        <button onClick={nextSlide} className="text-slate-300 hover:text-[#00609c] transition-colors focus:outline-none">
          <ChevronRight className="w-8 h-8 stroke-1" />
        </button>
      </div>
    </div>
  );
};


// =========================================
// 3. الصفحة الرئيسية (Main Page)
// =========================================
export const TerritoryOptimization: React.FC = () => {
  const { t, i18n } = useTranslation('landing');
  const isRTL = i18n.dir() === 'rtl';
  const [activeUseCase, setActiveUseCase] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // بيانات التبويبات (Use Cases)
  const USE_CASES = [
    { id: 0, icon: "/assets/images/img-quit-job.svg", label: t('territoryOpt.useCases.tabs.t1', 'Employee resigns'), content: t('territoryOpt.useCases.content.t1', 'At the touch of a button, you can distribute the customers of the departing employee to the territories of the other employees.') },
    { id: 1, icon: "/assets/images/img-working-hours.svg", label: t('territoryOpt.useCases.tabs.t2', 'Changed working hours'), content: t('territoryOpt.useCases.content.t2', 'Employee A would like to work 20 instead of 30 hours per week in the future: You decide as a team and with S-Locator where routes can be reduced and which employee can take up customers.') },
    { id: 2, icon: "/assets/images/img-traveling.svg", label: t('territoryOpt.useCases.tabs.t3', 'Prolonged absence'), content: t('territoryOpt.useCases.content.t3', 'You cushion parental leave, longer vacation or absences due to illness in the remaining team in the best possible way and share customers fairly.') },
    { id: 3, icon: "/assets/images/img-seasonal-optimization.svg", label: t('territoryOpt.useCases.tabs.t4', 'Seasonal need for optimization'), content: t('territoryOpt.useCases.content.t4', 'How should our customers be distributed across the team so that all A-customers are visited at least once in the 4th quarter? Visualize your planning ideas in no time at all.') },
    { id: 4, icon: "/assets/images/img-customer-univers.svg", label: t('territoryOpt.useCases.tabs.t5', 'Changed customer universe'), content: t('territoryOpt.useCases.content.t5', 'Integrate your new customers efficiently and optimize your territories in a matter of seconds when your existing customers\' priorities shift.') },
    { id: 5, icon: "/assets/images/img-new-market.svg", label: t('territoryOpt.useCases.tabs.t6', 'Entry into new markets'), content: t('territoryOpt.useCases.content.t6', 'Are you planning to enter a new market and need to expand your field sales team? S-Locator automatically determines the number and suitable home locations for new employees.') },
  ];

  return (
    <div className={`min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-[#00609c] ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* 1. Hero Section */}
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
                  {t('territoryOpt.hero.title', 'Innovative territory optimization for your field sales force')}
                </h1>
                <h3 className="text-xl font-medium text-[#00609c] mt-2">
                  {t('territoryOpt.hero.subtitle', 'The future of sales force optimization is dynamic')}
                </h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed mt-4">
                  {t('territoryOpt.hero.desc', 'User friendly, powerful in the implementation, impressive results. Convince yourself today of S-Locator Territory Optimization.')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a href="/territory-optimization/demo" className="bg-[#00609c] text-white px-8 py-4 rounded font-medium flex items-center justify-center gap-2 hover:bg-[#004d7d] transition-all shadow-md">
                    {t('territoryOpt.hero.demo', 'Arrange demo')}
                  </a>
                  <a href="#video" className="bg-white border border-slate-300 text-slate-700 px-8 py-4 rounded font-medium flex items-center justify-center gap-2 hover:border-[#00609c] hover:text-[#00609c] transition-all">
                    <Play className="w-5 h-5" /> {t('territoryOpt.hero.video', 'Watch video')}
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Use Cases (Tabs) Section */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[36px] font-medium text-slate-800 text-center mb-6">
              {t('territoryOpt.useCases.title', 'Use cases of dynamic territory optimization')}
            </h2>
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-slate-100 mb-16">
              <h3 className="text-[17px] font-medium text-[#00609c] mb-2">{t('territoryOpt.useCases.faqQ', 'What is territory optimization in field sales?')}</h3>
              <p className="text-[15px] text-slate-600 font-light leading-relaxed">{t('territoryOpt.useCases.faqA', 'Territory optimization in field sales refers to the process of revising and adjusting existing sales territories based on predefined parameters.')}</p>
            </div>
          </FadeIn>

          <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
            <div className="w-full md:w-1/3 flex flex-col gap-2">
              {USE_CASES.map((useCase) => (
                <button
                  key={useCase.id}
                  onClick={() => setActiveUseCase(useCase.id)}
                  className={`text-left px-5 py-3.5 rounded-md transition-all focus:outline-none border-l-4 ${
                    activeUseCase === useCase.id 
                      ? 'bg-white text-[#00609c] font-medium shadow-sm border-[#00609c]' 
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
                <Play className="w-4 h-4" /> {t('territoryOpt.hero.video', 'Watch video')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4 Image Switchers Section */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-[36px] font-medium text-slate-800 mb-4">
              {t('territoryOpt.switcher.mainTitle', 'That’s how easy territory optimization is with S-Locator')}
            </h2>
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              {t('territoryOpt.switcher.mainDesc', 'You start with your current initial situation and S-Locator guides you step by step...')}
            </p>
          </div>

          <ImageSwitcher 
            title={t('territoryOpt.switcher.s1.title', 'Your initial situation')}
            desc={t('territoryOpt.switcher.s1.desc', 'Visualize the customers of your field reps on the map and view all relevant information in the detailed view.')}
            imagePosition="right"
            tabs={[
              { label: t('territoryOpt.switcher.s1.tab1', 'Map'), image: "/assets/images/img-ausgangslage-landkarte-1920x1140-en.webp" },
              { label: t('territoryOpt.switcher.s1.tab2', 'Detailed view'), image: "/assets/images/img-ausgangslage-detailansicht-1920x1140-en.webp" },
              { label: t('territoryOpt.switcher.s1.tab3', 'Required time per customer'), image: "/assets/images/img-ausgangslage-jaehrlicher-zeitaufwand-1920x1140-en.webp" }
            ]}
          />

          <ImageSwitcher 
            title={t('territoryOpt.switcher.s2.title', 'Your optimization settings')}
            desc={t('territoryOpt.switcher.s2.desc', 'In the next steps, you can optionally carry out manual adjustments or optimization settings per field rep.')}
            imagePosition="left"
            tabs={[
              { label: t('territoryOpt.switcher.s2.tab1', 'Manual adjustments'), image: "/assets/images/img-optimierungsvorgaben-manuelle-anpassung-1920x1140-en.webp" },
              { label: t('territoryOpt.switcher.s2.tab2', 'Optimization settings'), image: "/assets/images/img-optimierungsvorgaben-optimierung-1920x1140-en.webp" }
            ]}
          />

          <ImageSwitcher 
            title={t('territoryOpt.switcher.s3.title', 'Your optimization result')}
            desc={t('territoryOpt.switcher.s3.desc', 'In just a few moments S-Locator Territory Optimization calculates your optimization result. Visualize it on the map, in the detailed view.')}
            imagePosition="right"
            tabs={[
              { label: t('territoryOpt.switcher.s3.tab1', 'Map'), image: "/assets/images/img-optimierungsergebnis-landkarte-1920x1140-en.webp" },
              { label: t('territoryOpt.switcher.s3.tab2', 'Detailed view'), image: "/assets/images/img-optimierungsergebnis-detailansicht-1920x1140-en.webp" }
            ]}
          />

          <ImageSwitcher 
            title={t('territoryOpt.switcher.s4.title', '7 prioritization levels')}
            desc={t('territoryOpt.switcher.s4.desc', 'With the help of several prioritization levels, you can choose between the lowest total travel time or a balanced workload.')}
            imagePosition="left"
            tabs={[
              { label: t('territoryOpt.switcher.s4.tab1', 'Low total travel time'), image: "/assets/images/img-optimierungsergebnis-schritt-01-1920x1140-en.webp" },
              { label: t('territoryOpt.switcher.s4.tab2', 'Balanced workload'), image: "/assets/images/img-optimierungsergebnis-schritt-07-1920x1140-en.webp" }
            ]}
          />
        </div>
      </section>

      {/* 4. SaaS Benefits Section */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            <div className="w-full lg:w-5/12">
              <FadeIn direction={isRTL ? 'right' : 'left'}>
                <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 border-t-4 border-t-[#00609c]">
                  <h4 className="text-xl font-medium text-[#00609c] mb-6">{t('territoryOpt.saas.boxTitle', 'SaaS benefits')}</h4>
                  <ul className="flex flex-col gap-5">
                    <li className="flex items-center gap-3 text-slate-700 font-light">
                      <Zap className="w-5 h-5 text-[#f0ad4e]" /> {t('territoryOpt.saas.b1', 'ready to start immediately')}
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-light">
                      <MonitorSmartphone className="w-5 h-5 text-[#00609c]" /> {t('territoryOpt.saas.b2', 'on any device with a web browser')}
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-light">
                      <Clock className="w-5 h-5 text-[#44E559]" /> {t('territoryOpt.saas.b3', 'internal time saving')}
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>

            <div className="w-full lg:w-7/12 flex flex-col gap-5">
              <FadeIn direction={isRTL ? 'left' : 'right'}>
                <h2 className="text-3xl lg:text-[34px] font-medium text-slate-800 leading-tight mb-2">
                  {t('territoryOpt.saas.title', 'Test different scenarios in a matter of seconds')}
                </h2>
                <p className="text-[16px] text-slate-600 font-light leading-relaxed">
                  {t('territoryOpt.saas.p1', 'With the SaaS power of S-Locator you can test different scenarios within seconds...')}
                </p>
                <p className="text-[16px] text-slate-600 font-light leading-relaxed">
                  {t('territoryOpt.saas.p2', 'In the results, we point out how much different areas deteriorate or improve...')}
                </p>
                <div className="bg-green-50 p-5 rounded-lg border border-green-100 text-green-800 font-medium leading-relaxed mt-2">
                  {t('territoryOpt.saas.p3', 'With sales force costs of around $10 million per year a 1% improvement...')}
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Arrange Demo (Dark Blue Section) */}
      <section className="bg-[#00609c] py-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[40px] font-medium text-white mb-6 leading-tight">
              {t('territoryOpt.demoCta.title', 'Arrange individual demo')}
            </h2>
            <p className="text-blue-100 text-lg font-light mb-10 max-w-2xl mx-auto">
              {t('territoryOpt.demoCta.desc', 'Our team will be happy to show you the features of S-Locator Territory Optimization – specifically tailored to your requirements.')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <span className="bg-[#004d7d] text-white px-5 py-2 rounded-full font-light border border-blue-400/30">
                ✨ {t('territoryOpt.demoCta.f1', 'free')}
              </span>
              <span className="bg-[#004d7d] text-white px-5 py-2 rounded-full font-light border border-blue-400/30">
                ⏱️ {t('territoryOpt.demoCta.f2', '30-60 min')}
              </span>
              <span className="bg-[#004d7d] text-white px-5 py-2 rounded-full font-light border border-blue-400/30">
                🌐 {t('territoryOpt.demoCta.f3', 'online')}
              </span>
            </div>

            <button className="bg-[#f0ad4e] hover:bg-[#e09e3e] text-white px-10 py-4 rounded font-medium transition-colors shadow-lg text-lg">
              {t('territoryOpt.demoCta.btn', 'Arrange demo')}
            </button>
          </FadeIn>
        </div>
      </section>

      {/* 6. Success Stories / Testimonials (السلايدر التفاعلي الجديد) */}
      <section className="py-24 bg-white border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-4xl font-medium text-slate-800 text-center mb-16">
              Why do our customers choose territory optimization with S-Locator?
            </h2>
            <TestimonialSlider />
          </FadeIn>
        </div>
      </section>

      {/* 7. License Models / Pricing */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-4xl font-medium text-slate-800 mb-6">{t('territoryOpt.pricing.title', 'S-Locator Territory Optimization license models')}</h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto mb-16">
              {t('territoryOpt.pricing.desc', 'If you have a team of at least 2 field reps, S-Locator Territory Optimization is for you. Choose from 2 different billing intervals tailored to your needs.')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {/* 3 Months */}
              <div className="bg-white p-10 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center hover:shadow-md transition-shadow">
                <div className="text-6xl font-light text-[#00609c] mb-2">3</div>
                <div className="text-2xl font-medium text-slate-800 mb-6">{t('territoryOpt.pricing.m3', 'Months')}</div>
                <hr className="w-16 border-t-2 border-[#f0ad4e] mb-6" />
                <p className="text-slate-500 font-light leading-relaxed mb-8 flex-grow">
                  {t('territoryOpt.pricing.m3Desc', 'Ideal for short-term projects or rapid responses to unexpected changes.')}
                </p>
                <button className="w-full bg-white border border-[#00609c] text-[#00609c] hover:bg-[#00609c] hover:text-white transition-colors py-3 rounded font-medium">
                  {t('territoryOpt.pricing.btn', 'To the shop')}
                </button>
              </div>

              {/* 12 Months */}
              <div className="bg-white p-10 rounded-xl shadow-sm border border-[#00609c]/20 relative flex flex-col items-center hover:shadow-md transition-shadow">
                <div className="absolute top-0 right-0 bg-[#44E559] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">POPULAR</div>
                <div className="text-6xl font-light text-[#00609c] mb-2">12</div>
                <div className="text-2xl font-medium text-slate-800 mb-6">{t('territoryOpt.pricing.m12', 'Months')}</div>
                <hr className="w-16 border-t-2 border-[#f0ad4e] mb-6" />
                <p className="text-slate-500 font-light leading-relaxed mb-8 flex-grow">
                  {t('territoryOpt.pricing.m12Desc', 'Ideal for continuous optimization and sales growth, and responding flexibly to market changes.')}
                </p>
                <button className="w-full bg-[#00609c] text-white hover:bg-[#004d7d] transition-colors py-3 rounded font-medium">
                  {t('territoryOpt.pricing.btn', 'To the shop')}
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. Bottom CTA text */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn direction="up">
            <h3 className="text-2xl font-medium text-slate-800 mb-6">{t('territoryOpt.footerCta.title', 'Territory optimization and route planning from a single source')}</h3>
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8 max-w-3xl mx-auto">
              {t('territoryOpt.footerCta.desc', 'The future of sales optimization is dynamic territory planning combined with state-of-the-art route planning.')}
            </p>
            <a href="/sales-route-planner" className="inline-flex items-center gap-2 bg-white border-2 border-[#00609c] text-[#00609c] hover:bg-[#00609c] hover:text-white transition-colors px-8 py-3.5 rounded font-medium">
              {t('territoryOpt.footerCta.btn', 'To the S-Locator Route Planner')} <ArrowRight className="w-5 h-5" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* 9. Contact Section */}
      <section className="bg-slate-50 py-24 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-medium text-slate-800 mb-4">{t('contact.title', 'Contact us!')}</h2>
              <div className="mt-4 text-[15px] text-slate-500 font-light flex items-center justify-center gap-2">
                 <MonitorSmartphone className="w-4 h-4 text-[#6699b8]" /> Available by phone from Mon-Fri, 9-17h CET
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn direction={isRTL ? 'left' : 'right'}>
              <div className="bg-white p-10 rounded shadow-sm border border-slate-100 text-center flex flex-col items-center">
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
              <div className="bg-white p-10 rounded shadow-sm border border-slate-100 text-center flex flex-col items-center">
                <h3 className="text-[17px] font-light text-slate-600 mb-2">I am interested and would like</h3>
                <h4 className="text-[32px] font-light text-slate-800 mb-8">Buying advice</h4>
                <div className="flex flex-col gap-4 text-[#00609c] font-light text-[15px] items-start w-full max-w-xs mx-auto mt-2">
                  <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#6699b8]" /> US: +1 646-974-6040</div>
                  <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#6699b8]" /> EU: +43 1 2531516-40</div>
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