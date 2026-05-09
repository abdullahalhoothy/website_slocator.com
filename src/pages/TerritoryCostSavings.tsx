import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight, Phone, Mail, MonitorSmartphone, DollarSign, FileText, Car, Users, Droplet, Building, GraduationCap, Laptop, Search, TrendingUp, PiggyBank, Map } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';

// =========================================
// 1. المكونات الفرعية (Sub-components)
// =========================================

const CostItem: React.FC<{ icon: React.ReactNode; amount: string; label: string }> = ({ icon, amount, label }) => (
  <div className="flex flex-col items-center text-center p-4">
    <div className="w-16 h-16 bg-[#f5f3ff] rounded-2xl flex items-center justify-center text-[#8A2BE2] mb-4 shadow-sm border border-purple-100">
      {icon}
    </div>
    <span className="font-bold text-slate-800 text-lg">{amount}</span>
    <span className="text-slate-500 font-light text-sm">{label}</span>
  </div>
);

// سلايدر العملاء
const TestimonialSlider: React.FC<{ t: any; isRTL: boolean }> = ({ t, isRTL }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      logo: "/assets/images/logo-reyher.webp", img: "/assets/images/reyher-von-bastian.webp",
      quote: t('territoryAdvantages.testimonials.items.t2.quote', "Through S-Locator Territory Optimization we have recognized that we can leverage further potential by shifting the boundaries of our sales territories."),
      name: "Johannes von Bastian", role: "Manager Sales Controlling"
    },
    {
      logo: "/assets/images/logo-fritz.webp", img: "/assets/images/fritz-portrait.webp",
      quote: t('territoryAdvantages.testimonials.items.t1.quote', "Being able to control the workload of individual employees during territory planning and knowing that I still have free resources is a very valuable function."),
      name: "Erik Kuschke", role: "Channel Sales Manager"
    },
    {
      logo: "/assets/images/logo-hela.webp", img: "/assets/images/portrait-hela.webp",
      quote: t('territoryAdvantages.testimonials.items.t3.quote', "For me, S-Locator Territory Optimization is the ideal tool. Within a very short time, target sales territories can be defined, customers identified and measures implemented."),
      name: "Jan Markus Eichert", role: "Field sales manager"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <div className="bg-white rounded-md shadow-sm border border-slate-100 p-8 md:p-12 mb-8 min-h-[250px] flex items-center relative overflow-hidden">
        {testimonials.map((testim, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row w-full gap-8 transition-opacity duration-500 absolute left-0 px-8 md:px-12 ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mb-2 shadow-sm bg-[#f5f3ff]">
                <img src={testim.img} alt={testim.name} className="w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
              </div>
              <span className="text-[#8A2BE2] text-6xl leading-none font-serif font-bold">“</span>
            </div>
            <div className="w-full md:w-2/3 flex flex-col border-l border-slate-200 pl-8 text-left">
              <img src={testim.logo} alt="Company Logo" className="h-6 object-contain self-start mb-6 opacity-80 grayscale" onError={(e) => e.currentTarget.style.display = 'none'} />
              <p className="text-slate-600 font-light text-[16px] leading-relaxed mb-8">{testim.quote}</p>
              <div className="mt-auto flex justify-between items-end">
                <div>
                  <div className="text-[#8A2BE2] font-medium text-[15px]">{testim.name}</div>
                  <div className="text-slate-400 font-light text-[14px]">{testim.role}</div>
                </div>
                <button className="text-[#489E46] hover:text-[#336E2E] text-[14px] transition-colors font-medium">
                  {t('territoryAdvantages.testimonials.readMore', 'read more...')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-6">
        <button onClick={() => setCurrentSlide((p) => (p === 0 ? 2 : p - 1))} className="text-[#489E46] hover:text-[#8A2BE2] transition-colors focus:outline-none">
          <ChevronRight className={`w-8 h-8 ${isRTL ? '' : 'rotate-180'}`} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none ${idx === currentSlide ? 'bg-[#8A2BE2]' : 'bg-transparent border border-[#8A2BE2]'}`} />
          ))}
        </div>
        <button onClick={() => setCurrentSlide((p) => (p === 2 ? 0 : p + 1))} className="text-[#489E46] hover:text-[#8A2BE2] transition-colors focus:outline-none">
          <ChevronRight className={`w-8 h-8 ${isRTL ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
};

export const TerritoryCostSavings: React.FC = () => {
  const { t, i18n } = useTranslation('landing');
  const isRTL = i18n.dir() === 'rtl';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    { name: "اسم الموظف 1", lang: "AR | EN", li: "", img: "" },
    { name: "اسم الموظف 2", lang: "AR | EN", li: "", img: "" },
    { name: "اسم الموظف 3", lang: "AR | EN", li: "", img: "" },
    { name: "اسم الموظف 4", lang: "AR | EN", li: "", img: "" },
    { name: "اسم الموظف 5", lang: "AR | EN", li: "", img: "" },
    { name: "اسم الموظف 6", lang: "AR | EN", li: "", img: "" },
    { name: "اسم الموظف 7", lang: "AR | EN", li: "", img: "" },
    { name: "اسم الموظف 8", lang: "AR | EN", li: "", img: "" },
    { name: "اسم الموظف 9", lang: "AR | EN", li: "", img: "" },
    { name: "اسم الموظف 10", lang: "AR | EN", li: "", img: "" }
  ];

  return (
    <div className={`min-h-screen bg-white font-sans text-slate-900 selection:bg-[#f5f3ff] selection:text-[#8A2BE2] ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* 1. Hero Section */}
      <section className="bg-white pt-24 pb-16 border-b border-slate-200 relative overflow-hidden min-h-[550px] flex items-center">
        
        <div 
          className="absolute left-0 bottom-0 w-[35%] h-[85%] hidden lg:block z-0 pointer-events-none bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/saudi-reps.png')",
            backgroundSize: "200% auto",
            backgroundPosition: "left bottom"
          }}
        />
        
        <div 
          className="absolute right-0 bottom-0 w-[35%] h-[85%] hidden lg:block z-0 pointer-events-none bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/saudi-reps.png')",
            backgroundSize: "200% auto",
            backgroundPosition: "right bottom"
          }}
        />

        <div className="container mx-auto px-4 max-w-6xl text-center relative z-10">
          <FadeIn direction="up">
            <h1 className="text-4xl lg:text-[46px] font-bold text-[#8A2BE2] leading-[1.2] mb-12 drop-shadow-sm">
              {t('costSavings.hero.title', 'Save money with S-Locator Territory Optimization')}
            </h1>
            
            <div className="max-w-2xl mx-auto flex flex-col gap-6 text-slate-700 font-light text-[17px] leading-relaxed text-center bg-white/70 backdrop-blur-md p-8 rounded-3xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <p>{t('costSavings.hero.p1')}</p>
              <p>{t('costSavings.hero.p2')}</p>
              
              <div className="py-5 border-y border-purple-100 my-2">
                <p className="text-xl text-slate-500 mb-2">
                  {t('costSavings.hero.scenarioText')} <span className="font-bold text-[#489E46]">{t('costSavings.hero.reps')}</span>
                </p>
                <p className="text-xl text-slate-500 mb-3">{t('costSavings.hero.achieveText')}</p>
                <p className="text-5xl font-extrabold text-[#8A2BE2] tracking-tight drop-shadow-sm">
                  €88,600
                </p>
                <p className="text-[#489E46] font-bold mt-2 uppercase tracking-wide text-sm">
                  {t('costSavings.hero.savings')}
                </p>
              </div>

              <p className="font-medium text-slate-800">{t('costSavings.hero.p3')}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Breakdown Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn direction="up">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">{t('costSavings.breakdown.title')}</h2>
              <p className="text-slate-600 font-light leading-relaxed text-[17px]">
                {t('costSavings.breakdown.desc')}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 lg:gap-8 max-w-5xl mx-auto">
              <CostItem icon={<DollarSign size={32} strokeWidth={1.5} />} amount="€51,480" label={t('costSavings.breakdown.salary')} />
              <CostItem icon={<FileText size={32} strokeWidth={1.5} />} amount="€14,400" label={t('costSavings.breakdown.taxes')} />
              <CostItem icon={<Car size={32} strokeWidth={1.5} />} amount="€11,520" label={t('costSavings.breakdown.car')} />
              <CostItem icon={<Users size={32} strokeWidth={1.5} />} amount="€6,600" label={t('costSavings.breakdown.team')} />
              <CostItem icon={<Droplet size={32} strokeWidth={1.5} />} amount="€4,320" label={t('costSavings.breakdown.fuel')} />
              <CostItem icon={<Building size={32} strokeWidth={1.5} />} amount="€3,840" label={t('costSavings.breakdown.hotel')} />
              <CostItem icon={<GraduationCap size={32} strokeWidth={1.5} />} amount="€3,840" label={t('costSavings.breakdown.training')} />
              <CostItem icon={<Laptop size={32} strokeWidth={1.5} />} amount="€2,280" label={t('costSavings.breakdown.it')} />
              <CostItem icon={<Search size={32} strokeWidth={1.5} />} amount="€2,040" label={t('costSavings.breakdown.hr')} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. Comparison Table */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn direction="up">
            <div className="hidden md:flex w-full mb-6 font-bold text-slate-500 text-lg">
              <div className="w-[40%] text-center">{t('costSavings.comparison.convTitle')}</div>
              <div className="w-[20%]"></div>
              <div className="w-[40%] text-center text-[#8A2BE2]">{t('costSavings.comparison.slocTitle')}</div>
            </div>

            <div className="flex flex-col md:flex-row w-full mb-4">
              <div className="w-full md:w-[40%] bg-slate-200/50 p-6 rounded-l-lg border border-slate-200 flex flex-col items-center justify-center text-center mb-2 md:mb-0">
                <span className="text-3xl font-light text-slate-700 mb-1">€3,000,000</span>
                <span className="text-sm font-light text-slate-500">{t('costSavings.comparison.convTotal')}</span>
              </div>
              <div className="w-full md:w-[20%] bg-[#8A2BE2] text-white p-6 border-y md:border-y-0 md:border-x border-white flex flex-col items-center justify-center text-center shadow-lg z-10 relative md:-mx-2">
                <span className="text-2xl font-bold mb-1">€100,000</span>
                <span className="text-sm font-light text-purple-200">{t('costSavings.comparison.savingsBox')}</span>
              </div>
              <div className="w-full md:w-[40%] bg-white p-6 rounded-r-lg border border-[#8A2BE2]/20 flex flex-col items-center justify-center text-center shadow-sm">
                <span className="text-3xl font-light text-[#8A2BE2] mb-1">€2,900,000</span>
                <span className="text-sm font-light text-[#489E46]">{t('costSavings.comparison.slocTotal')}</span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full mb-16">
              <div className="w-full md:w-[40%] bg-slate-100 p-6 rounded-l-lg border border-slate-200 flex flex-col items-center justify-center text-center mb-2 md:mb-0">
                <span className="text-xl font-light text-slate-700 mb-1">€3,000</span>
                <span className="text-xs font-light text-slate-500">{t('costSavings.comparison.convSoft')}</span>
              </div>
              <div className="w-full md:w-[20%] bg-slate-400 text-white p-6 border-y md:border-y-0 md:border-x border-white flex flex-col items-center justify-center text-center z-10 relative md:-mx-2">
                <span className="text-lg font-bold mb-1">€11,400</span>
                <span className="text-xs font-light text-slate-100">{t('costSavings.comparison.addCostBox')}</span>
              </div>
              <div className="w-full md:w-[40%] bg-white p-6 rounded-r-lg border border-slate-200 flex flex-col items-center justify-center text-center shadow-sm">
                <span className="text-xl font-light text-slate-700 mb-1">€14,400</span>
                <span className="text-xs font-light text-slate-500">{t('costSavings.comparison.slocSoft')}</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-2xl text-slate-600 font-light mb-4">{t('costSavings.comparison.totalSavingsTitle')}</p>
              <p className="text-[64px] font-bold text-[#8A2BE2] leading-none drop-shadow-sm">€88,600</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Advantages */}
      <section className="py-24 bg-[#f5f3ff]/60 border-b border-purple-100">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#8A2BE2] mb-16">{t('costSavings.advantages.title')}</h2>
            
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 mb-6">
                  <TrendingUp className="w-10 h-10 text-[#489E46]" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">{t('costSavings.advantages.effTitle')}</h4>
                <p className="text-slate-600 font-light leading-relaxed">{t('costSavings.advantages.effDesc')}</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 mb-6">
                  <PiggyBank className="w-10 h-10 text-[#489E46]" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">{t('costSavings.advantages.costTitle')}</h4>
                <p className="text-slate-600 font-light leading-relaxed">{t('costSavings.advantages.costDesc')}</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100 mb-6">
                  <Map className="w-10 h-10 text-[#489E46]" strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">{t('costSavings.advantages.compactTitle')}</h4>
                <p className="text-slate-600 font-light leading-relaxed">{t('costSavings.advantages.compactDesc')}</p>
              </div>
            </div>

            <p className="text-lg font-bold text-[#8A2BE2] max-w-2xl mx-auto">
              {t('costSavings.advantages.footer')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 5. Success Stories */}
      <section className="py-24 bg-white border-b border-slate-200 text-center">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[36px] font-bold text-[#8A2BE2] mb-12">Success stories of our customers</h2>
            <TestimonialSlider t={t} isRTL={isRTL} />
          </FadeIn>
        </div>
      </section>

      {/* 6. Arrange Demo (Dark Purple) */}
      <section className="bg-[#8A2BE2] py-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[40px] font-bold text-white mb-6 leading-tight">
              {t('territoryAdvantages.demoCta.title', 'Arrange individual demo')}
            </h2>
            <p className="text-purple-100 text-lg font-light mb-10 max-w-2xl mx-auto">
              {t('territoryAdvantages.demoCta.desc', 'Our team will be happy to show you the features of S-Locator Territory Optimization.')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <span className="text-[#489E46] bg-white px-4 py-1.5 rounded-full text-sm uppercase tracking-wider font-bold">Free</span>
              <span className="text-[#489E46] bg-white px-4 py-1.5 rounded-full text-sm uppercase tracking-wider font-bold">30-60 min</span>
              <span className="text-[#489E46] bg-white px-4 py-1.5 rounded-full text-sm uppercase tracking-wider font-bold">Online</span>
            </div>

            <button className="bg-[#489E46] hover:bg-[#336E2E] text-white px-10 py-4 rounded font-bold transition-colors shadow-lg text-lg">
              {t('territoryAdvantages.demoCta.btn', 'Arrange demo')}
            </button>
          </FadeIn>
        </div>
      </section>

      {/* 7. License Models / Pricing */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#8A2BE2] mb-6">{t('territoryAdvantages.pricing.title', 'S-Locator Territory Optimization license models')}</h2>
            <p className="text-lg text-[#489E46] font-medium max-w-2xl mx-auto mb-16">
              {t('territoryAdvantages.pricing.desc', 'If you have a team of at least 2 field reps...')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-[#f5f3ff] p-10 rounded-xl shadow-sm border border-purple-100 flex flex-col items-center">
                <div className="text-6xl font-light text-[#8A2BE2] mb-2">3</div>
                <div className="text-2xl font-bold text-slate-800 mb-6">{t('territoryAdvantages.pricing.m3', 'Months')}</div>
                <hr className="w-16 border-t-2 border-[#489E46] mb-6" />
                <p className="text-[#8A2BE2] font-light mb-8 flex-grow">{t('territoryAdvantages.pricing.m3Desc', 'Ideal for short-term projects.')}</p>
                <button className="w-full bg-white border-2 border-[#8A2BE2] text-[#8A2BE2] hover:bg-[#8A2BE2] hover:text-white py-3 rounded font-bold transition-colors">
                  {t('territoryAdvantages.pricing.btn', 'To the shop')}
                </button>
              </div>

              <div className="bg-[#8A2BE2] p-10 rounded-xl shadow-md border border-[#8A2BE2] flex flex-col items-center relative">
                <div className={`absolute top-0 ${isRTL ? 'left-0 rounded-br-lg rounded-tl-xl' : 'right-0 rounded-bl-lg rounded-tr-xl'} bg-[#489E46] text-white text-xs font-bold px-3 py-1`}>
                  {t('territoryAdvantages.pricing.popular', 'POPULAR')}
                </div>
                <div className="text-6xl font-light text-white mb-2">12</div>
                <div className="text-2xl font-bold text-white mb-6">{t('territoryAdvantages.pricing.m12', 'Months')}</div>
                <hr className="w-16 border-t-2 border-[#489E46] mb-6" />
                <p className="text-purple-100 font-light mb-8 flex-grow">{t('territoryAdvantages.pricing.m12Desc', 'Ideal for continuous optimization.')}</p>
                <button className="w-full bg-white text-[#8A2BE2] hover:bg-slate-100 py-3 rounded font-bold transition-colors">
                  {t('territoryAdvantages.pricing.btn', 'To the shop')}
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. Contact Section & Hexagon Team */}
      <section className="bg-[#f8fafc] py-24 text-center">
         <div className="container mx-auto px-4 max-w-7xl">
            {/* Header */}
            <h2 className="text-4xl font-bold text-[#8A2BE2] mb-4">{t('contact.title', 'Contact us!')}</h2>
            <h3 className="text-xl text-[#489E46] font-medium">How can we help you?</h3>
            <div className="mt-8 text-[15px] text-slate-500 font-light flex items-center justify-center gap-2">
               <MonitorSmartphone className="w-4 h-4 text-[#489E46]" /> Available by phone from Mon-Fri, 9-17h CET
            </div>

            {/* Contact Blocks */}
            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mt-16 mb-20">
               <div className="flex-1 bg-[#f5f3ff]/50 p-10 rounded-xl shadow-sm border border-purple-100 text-center flex flex-col items-center">
                  <h3 className="text-[17px] font-medium text-[#489E46] mb-2">I am already a user and need</h3>
                  <h4 className="text-[32px] font-bold text-[#8A2BE2] mb-8">Support</h4>
                  <button className="bg-[#8A2BE2] text-white px-8 py-3.5 rounded hover:bg-[#6b21a8] transition-colors mb-10 text-[15px] font-medium">
                    To the HelpCenter
                  </button>
                  <div className="text-left flex flex-col gap-4 text-[#8A2BE2] font-medium text-[15px] items-start w-full max-w-xs mx-auto">
                     <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#489E46]"/> US: +1 646-974-60-50</div>
                     <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#489E46]"/> EU: +43 1 2531516-50</div>
                     <div className="flex items-center gap-3 mt-2"><Mail className="w-5 h-5 text-[#489E46]"/> support@s-locator.com</div>
                  </div>
               </div>
               <div className="flex-1 bg-[#f5f3ff]/50 p-10 rounded-xl shadow-sm border border-purple-100 text-center flex flex-col items-center">
                  <h3 className="text-[17px] font-medium text-[#489E46] mb-2">I am interested and would like</h3>
                  <h4 className="text-[32px] font-bold text-[#8A2BE2] mb-8">Buying advice</h4>
                  <div className="text-left flex flex-col gap-4 text-[#8A2BE2] font-medium text-[15px] items-start w-full max-w-xs mx-auto mt-2">
                     <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#489E46]"/> US: +1 646-974-6040</div>
                     <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#489E46]"/> EU: +43 1 2531516-40</div>
                     <div className="flex items-center gap-3 mt-2"><Mail className="w-5 h-5 text-[#489E46]"/> sales@s-locator.com</div>
                  </div>
               </div>
            </div>

        
            <div className="pt-16 border-t border-slate-200">
              <h3 className="text-3xl font-bold text-[#8A2BE2] mb-16">We look forward to our conversation</h3>
              <div className="flex flex-wrap justify-center max-w-5xl mx-auto px-4 gap-y-2 md:gap-y-0 pb-16">
                {teamMembers.map((member, idx) => (
                  <div key={idx} className="relative w-[110px] h-[125px] md:w-[130px] md:h-[150px] mx-1 md:mx-2 mb-[-20px] md:mb-[-30px] group">
                    
                    <div 
                      className="w-full h-full bg-[#f5f3ff] transition-transform duration-300 group-hover:-translate-y-2 flex items-center justify-center overflow-hidden border-[3px] border-white shadow-sm"
                      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    >
                      <img 
                        src={member.img || 'https://via.placeholder.com/150?text=LinkedIn+Image'} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/150?text=LinkedIn+Image' }} 
                      />
                    </div>

                    <div className={`absolute -top-16 left-1/2 -translate-x-1/2 bg-white text-slate-800 px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-[100] flex flex-col items-center border border-slate-100 pointer-events-none group-hover:pointer-events-auto ${isRTL ? 'text-right' : 'text-left'}`}>
                       <span className="font-bold text-[14px] text-slate-700">{member.name}</span>
                       <div className="flex items-center gap-3 mt-1">
                          <span className="text-[11px] text-slate-400 font-medium tracking-wide">{member.lang}</span>
                          <a href={member.li || '#'} target="_blank" rel="noopener noreferrer" className="text-[#0a66c2] hover:text-[#004182]">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                       </div>
                       <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white transform rotate-45 border-b border-r border-slate-100"></div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

         </div>
      </section>

    </div>
  );
};

export default TerritoryCostSavings;