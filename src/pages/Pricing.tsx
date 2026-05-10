import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, ChevronRight, Phone, Mail, MonitorSmartphone, ChevronDown, Handshake } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';

const PRICING_DATA = {
  rp: {
    1: { 3: 89.95, 12: 79.95 },
    2: { 3: 89.95, 12: 79.95 },
    10: { 3: 84.95, 12: 74.95 },
    50: 'request'
  },
  to: {
    2: { 3: 109.95, 12: 54.95 },
    10: { 3: 79.95, 12: 39.95 },
    50: 'request'
  },
  rpto: {
    2: { 3: 189.95, 12: 129.95 },
    10: { 3: 154.95, 12: 109.95 },
    50: 'request'
  }
};

export const Pricing: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  // State Management
  const [product, setProduct] = useState<'rp' | 'to' | 'rpto'>('rp');
  const [usersTier, setUsersTier] = useState<1 | 2 | 10 | 50>(1);
  const [billing, setBilling] = useState<3 | 12>(12);
  const [showIntegrations, setShowIntegrations] = useState(false);
  const [integration, setIntegration] = useState('none');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleProductChange = (newProduct: 'rp' | 'to' | 'rpto') => {
    setProduct(newProduct);
    if ((newProduct === 'to' || newProduct === 'rpto') && usersTier === 1) {
      setUsersTier(2);
    }
  };

  const currentPrice = PRICING_DATA[product][usersTier as keyof typeof PRICING_DATA['rp']];
  const displayPrice = currentPrice === 'request' ? 'request' : currentPrice[billing];
  
  const getSavings = () => {
    if (currentPrice === 'request') return null;
    const price3m = currentPrice[3];
    const price12m = currentPrice[12];
    const diff = price3m - price12m;
    return diff > 0 ? diff.toFixed(2) : null;
  };
  const savings = getSavings();

  const faqQuestions = [
    t('srp.faq.q1.q'),
    t('srp.faq.q2.q'),
    t('srp.faq.q3.q'),
    t('srp.faq.q4.q'),
    t('srp.faq.q11.q'),
    t('srp.faq.q13.q'),
    t('srp.faq.q16.q'),
    t('srp.faq.q17.q')
  ];

  return (
    <div className={`min-h-screen bg-[#f8fafc] font-sans text-slate-900 selection:bg-[#f5f3ff] selection:text-[#8A2BE2] pb-0 ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* 1. Hero Section */}
      <section className="bg-[#f8fafc] pt-24 pb-12 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn direction="up">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
              {t('pricingPage.hero.title')}
            </h1>
            <h2 className="text-2xl font-light text-slate-500">
              {t('pricingPage.hero.subtitle')}
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* 2. Main Configurator Area */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col lg:flex-row gap-8 items-start relative">
          
          {/* LEFT COLUMN: Controls */}
          <div className="w-full lg:w-2/3 flex flex-col gap-6 pb-16">
            
            {/* A. Product Selection */}
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => handleProductChange('rp')}
                className={`p-6 rounded-xl border-2 transition-all flex items-center justify-between ${isRTL ? 'text-right' : 'text-left'} ${product === 'rp' ? 'border-[#8A2BE2] bg-white shadow-md' : 'border-slate-200 bg-white/60 hover:bg-white hover:border-[#8A2BE2]/40'}`}
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#f5f3ff] rounded-full shrink-0">
                     <img src="/assets/images/icon-route-planner.svg" alt="" className={`w-8 h-8 ${product !== 'rp' && 'grayscale opacity-50'}`} onError={(e) => e.currentTarget.style.display = 'none'} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${product === 'rp' ? 'text-[#8A2BE2]' : 'text-slate-700'}`}>{t('pricingPage.configurator.products.rp')}</h3>
                    <p className="text-sm text-slate-400 mt-1">{t('pricingPage.configurator.products.min1')}</p>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${product === 'rp' ? 'border-[#8A2BE2]' : 'border-slate-300'}`}>
                  {product === 'rp' && <div className="w-3 h-3 rounded-full bg-[#8A2BE2]"></div>}
                </div>
              </button>

              <button 
                onClick={() => handleProductChange('to')}
                className={`p-6 rounded-xl border-2 transition-all flex items-center justify-between ${isRTL ? 'text-right' : 'text-left'} ${product === 'to' ? 'border-[#8A2BE2] bg-white shadow-md' : 'border-slate-200 bg-white/60 hover:bg-white hover:border-[#8A2BE2]/40'}`}
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#f5f3ff] rounded-full shrink-0">
                     <img src="/assets/images/icon-territory-optimization.svg" alt="" className={`w-8 h-8 ${product !== 'to' && 'grayscale opacity-50'}`} onError={(e) => e.currentTarget.style.display = 'none'} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${product === 'to' ? 'text-[#8A2BE2]' : 'text-slate-700'}`}>{t('pricingPage.configurator.products.to')}</h3>
                    <p className="text-sm text-slate-400 mt-1">{t('pricingPage.configurator.products.min2')}</p>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${product === 'to' ? 'border-[#8A2BE2]' : 'border-slate-300'}`}>
                  {product === 'to' && <div className="w-3 h-3 rounded-full bg-[#8A2BE2]"></div>}
                </div>
              </button>

              <button 
                onClick={() => handleProductChange('rpto')}
                className={`p-6 rounded-xl border-2 transition-all flex items-center justify-between ${isRTL ? 'text-right' : 'text-left'} ${product === 'rpto' ? 'border-[#8A2BE2] bg-white shadow-md' : 'border-slate-200 bg-white/60 hover:bg-white hover:border-[#8A2BE2]/40'}`}
              >
                <div className="flex items-center gap-6">
                  <div className={`flex items-center ${product !== 'rpto' && 'grayscale opacity-50'}`}>
                     <div className="w-10 h-10 flex items-center justify-center bg-[#f5f3ff] rounded-full shrink-0">
                        <img src="/assets/images/icon-route-planner.svg" alt="" className="w-6 h-6" onError={(e) => e.currentTarget.style.display = 'none'} />
                     </div>
                     <span className="text-xl font-bold text-slate-400 mx-2">+</span>
                     <div className="w-10 h-10 flex items-center justify-center bg-[#f5f3ff] rounded-full shrink-0">
                        <img src="/assets/images/icon-territory-optimization.svg" alt="" className="w-6 h-6" onError={(e) => e.currentTarget.style.display = 'none'} />
                     </div>
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${product === 'rpto' ? 'text-[#8A2BE2]' : 'text-slate-700'}`}>{t('pricingPage.configurator.products.rpto')}</h3>
                    <p className="text-sm text-slate-400 mt-1">{t('pricingPage.configurator.products.min2')}</p>
                  </div>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${product === 'rpto' ? 'border-[#8A2BE2]' : 'border-slate-300'}`}>
                  {product === 'rpto' && <div className="w-3 h-3 rounded-full bg-[#8A2BE2]"></div>}
                </div>
              </button>
            </div>

            {/* B. Users Tier Table */}
            <div className="mt-8 bg-white p-6 rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <h3 className="text-2xl font-light text-slate-800 mb-6">{t('pricingPage.configurator.licenses.title')}</h3>
              
              <div className="flex w-full overflow-x-auto pb-4">
                 <div className={`flex flex-col w-[35%] shrink-0 ${isRTL ? 'pl-4' : 'pr-4'} gap-4 text-sm font-light text-slate-600`}>
                    <div className="h-16 flex items-end pb-2">
                       <div className="flex flex-col w-full">
                          <span className="text-xs">{t('pricingPage.configurator.licenses.persons')} *</span>
                          <input type="text" disabled value={usersTier === 50 ? "50+" : usersTier} className="w-20 border border-slate-300 rounded px-2 py-1 mt-1 bg-slate-50 text-center font-bold text-slate-700" />
                       </div>
                    </div>
                    <div className="h-10 flex flex-col justify-center">
                       <span className="text-[#489E46] font-bold">{t('pricingPage.configurator.licenses.savings')}</span>
                       <span className="text-xs text-slate-400">{t('pricingPage.configurator.licenses.perMonth')}</span>
                    </div>
                    <div className="h-10 flex items-center">{t('pricingPage.configurator.licenses.features.rp')}</div>
                    <div className="h-10 flex items-center">{t('pricingPage.configurator.licenses.features.to')}</div>
                    <div className="h-10 flex items-center">{t('pricingPage.configurator.licenses.features.import')}</div>
                    <div className="h-10 flex items-center">{t('pricingPage.configurator.licenses.features.api')}</div>
                    <div className="h-10 flex items-center leading-tight">{t('pricingPage.configurator.licenses.features.groups')}</div>
                    <div className="h-10 flex items-center">{t('pricingPage.configurator.licenses.features.integrations')}</div>
                 </div>

                 {[
                   { val: 1, label: '1', disabled: product !== 'rp' },
                   { val: 2, label: '2-9', disabled: false },
                   { val: 10, label: '10-49', disabled: false },
                   { val: 50, label: '50+', disabled: false }
                 ].map((tier) => {
                    const isActive = usersTier === tier.val;
                    return (
                      <button 
                        key={tier.val}
                        disabled={tier.disabled}
                        onClick={() => setUsersTier(tier.val as 1 | 2 | 10 | 50)}
                        className={`flex flex-col w-[16%] shrink-0 items-center gap-4 text-sm font-bold relative transition-all rounded-t-xl ${isActive ? 'bg-[#f5f3ff] border-x-2 border-t-2 border-[#8A2BE2] shadow-sm z-10' : 'hover:bg-slate-50 border-x border-t border-transparent'} ${tier.disabled ? 'opacity-30 cursor-not-allowed' : ''}`}
                      >
                         <div className="h-16 flex flex-col items-center justify-end pb-2 gap-2">
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${isActive ? 'border-[#8A2BE2]' : 'border-slate-300'}`}>
                              {isActive && <div className="w-2 h-2 rounded-full bg-[#8A2BE2]"></div>}
                            </div>
                            <span className={isActive ? 'text-[#8A2BE2]' : 'text-slate-600'} dir="ltr">{tier.label}</span>
                         </div>
                         
                         <div className={`h-10 flex items-center justify-center w-full ${isActive ? 'text-[#489E46]' : 'text-slate-400'}`} dir="ltr">
                            {tier.val === 50 ? <Handshake className="w-5 h-5" /> : (tier.val === 10 ? '-$5' : '-')}
                         </div>

                         <div className="h-10 flex items-center justify-center w-full"><Check className={`w-5 h-5 ${isActive ? 'text-[#489E46]' : 'text-slate-300'}`} strokeWidth={3} /></div>
                         <div className="h-10 flex items-center justify-center w-full">{(product === 'to' || product === 'rpto') && tier.val > 1 ? <Check className={`w-5 h-5 ${isActive ? 'text-[#489E46]' : 'text-slate-300'}`} strokeWidth={3} /> : <XIcon className="w-4 h-4 text-slate-300" />}</div>
                         <div className="h-10 flex items-center justify-center w-full"><Check className={`w-5 h-5 ${isActive ? 'text-[#489E46]' : 'text-slate-300'}`} strokeWidth={3} /></div>
                         <div className="h-10 flex items-center justify-center w-full">{tier.val > 1 ? <Check className={`w-5 h-5 ${isActive ? 'text-[#489E46]' : 'text-slate-300'}`} strokeWidth={3} /> : <XIcon className="w-4 h-4 text-slate-300" />}</div>
                         <div className="h-10 flex items-center justify-center w-full">{tier.val > 1 ? <Check className={`w-5 h-5 ${isActive ? 'text-[#489E46]' : 'text-slate-300'}`} strokeWidth={3} /> : <XIcon className="w-4 h-4 text-slate-300" />}</div>
                         <div className="h-10 flex items-center justify-center w-full">{tier.val > 9 ? <Check className={`w-5 h-5 ${isActive ? 'text-[#489E46]' : 'text-slate-300'}`} strokeWidth={3} /> : <XIcon className="w-4 h-4 text-slate-300" />}</div>
                         
                         <div className={`absolute -bottom-[2px] left-0 w-full h-[2px] ${isActive ? 'bg-[#f5f3ff]' : 'bg-slate-200'}`}></div>
                      </button>
                    )
                 })}
              </div>
              <div className="w-full h-[2px] bg-slate-200 mt-[-2px] relative z-0"></div>
            </div>

            {/* C. Integrations Accordion */}
            <div className="mt-4 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
               <button 
                  onClick={() => setShowIntegrations(!showIntegrations)}
                  className="w-full p-5 flex items-center justify-between font-bold text-[#8A2BE2] hover:bg-[#f5f3ff] transition-colors"
               >
                  {t('pricingPage.configurator.integrations.title')}
                  <ChevronDown className={`w-5 h-5 transition-transform ${showIntegrations ? 'rotate-180' : ''}`} />
               </button>
               {showIntegrations && (
                 <div className="p-5 border-t border-slate-100 flex flex-col gap-3">
                    {[
                      { id: 'api', name: t('pricingPage.configurator.integrations.api'), min: t('pricingPage.configurator.integrations.min2'), disabled: usersTier < 2 },
                      { id: 'sf', name: t('pricingPage.configurator.integrations.salesforce'), min: t('pricingPage.configurator.integrations.min10'), disabled: usersTier < 10 },
                      { id: 'dyn', name: t('pricingPage.configurator.integrations.dynamics'), min: t('pricingPage.configurator.integrations.min10'), disabled: usersTier < 10 },
                      { id: 'veeva', name: t('pricingPage.configurator.integrations.veeva'), min: t('pricingPage.configurator.integrations.min50'), disabled: usersTier < 50 },
                      { id: 'none', name: t('pricingPage.configurator.integrations.none'), min: '', disabled: false },
                    ].map(opt => (
                       <label key={opt.id} className={`flex items-center justify-between p-3 rounded-lg border ${integration === opt.id ? 'border-[#8A2BE2] bg-[#f5f3ff]' : 'border-slate-200'} ${opt.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:bg-slate-50'}`}>
                          <div className={`flex flex-col ${isRTL ? 'pl-4' : 'pr-4'}`}>
                             <span className="font-bold text-slate-800">{opt.name}</span>
                             {opt.min && <span className="text-xs text-slate-500">{opt.min}</span>}
                          </div>
                          <input 
                            type="radio" 
                            name="integration" 
                            disabled={opt.disabled} 
                            checked={integration === opt.id} 
                            onChange={() => setIntegration(opt.id)}
                            className="w-5 h-5 accent-[#8A2BE2] shrink-0"
                          />
                       </label>
                    ))}
                    <a href="/integrations" className="text-[#8A2BE2] hover:underline text-sm font-medium mt-2 flex items-center gap-1">
                      {t('pricingPage.configurator.integrations.link')} <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                    </a>
                 </div>
               )}
            </div>

            {/* D. Billing Cycle */}
            <div className="mt-8">
               <h3 className="text-2xl font-light text-slate-800 mb-6">{t('pricingPage.configurator.billing.title')}</h3>
               <div className="flex flex-col sm:flex-row gap-6">
                  <button 
                    onClick={() => setBilling(3)}
                    className={`flex-1 p-6 rounded-xl border-2 transition-all ${isRTL ? 'text-right' : 'text-left'} ${billing === 3 ? 'border-[#8A2BE2] bg-white shadow-md' : 'border-slate-200 bg-white/60 hover:bg-white'}`}
                  >
                     <div className="flex items-center justify-between mb-2">
                        <span className={`text-xl font-bold ${billing === 3 ? 'text-[#8A2BE2]' : 'text-slate-700'}`}>{t('pricingPage.configurator.billing.m3')}</span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${billing === 3 ? 'border-[#8A2BE2]' : 'border-slate-300'}`}>
                           {billing === 3 && <div className="w-2.5 h-2.5 rounded-full bg-[#8A2BE2]"></div>}
                        </div>
                     </div>
                  </button>
                  <button 
                    onClick={() => setBilling(12)}
                    className={`flex-1 p-6 rounded-xl border-2 transition-all relative overflow-hidden ${isRTL ? 'text-right' : 'text-left'} ${billing === 12 ? 'border-[#8A2BE2] bg-white shadow-md' : 'border-slate-200 bg-white/60 hover:bg-white'}`}
                  >
                     <div className="flex items-center justify-between mb-2">
                        <span className={`text-xl font-bold ${billing === 12 ? 'text-[#8A2BE2]' : 'text-slate-700'}`}>{t('pricingPage.configurator.billing.m12')}</span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${billing === 12 ? 'border-[#8A2BE2]' : 'border-slate-300'}`}>
                           {billing === 12 && <div className="w-2.5 h-2.5 rounded-full bg-[#8A2BE2]"></div>}
                        </div>
                     </div>
                     {savings && (
                       <p className="text-[#489E46] font-bold text-sm" dir="ltr">
                         {t('pricingPage.configurator.licenses.save')} €{savings} <span className="font-light text-slate-500 block text-xs mt-0.5">{t('pricingPage.configurator.licenses.perMonth')}</span>
                       </p>
                     )}
                  </button>
               </div>
               <p className="text-sm text-slate-500 mt-4">{t('pricingPage.configurator.billing.note')}</p>
            </div>

          </div>

          <div className="w-full lg:w-1/3 sticky top-28 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col z-20">
             {/* Top Part: Price Display */}
             <div className="p-8 pb-10 flex flex-col items-center text-center">
                <h3 className={`text-2xl font-light text-slate-600 mb-6 w-full ${isRTL ? 'text-right' : 'text-left'}`}>{t('pricingPage.configurator.stickyBox.title')}</h3>
                
                {displayPrice === 'request' ? (
                  <div className="flex flex-col items-center justify-center py-4 text-center">
                     <h4 className="text-3xl font-bold text-[#8A2BE2] mb-4" dir="ltr">50+ licenses</h4>
                     <p className="text-slate-500 mb-8">{t('pricingPage.configurator.stickyBox.contactSales')}</p>
                     <a href="/contact" className="w-full bg-[#8A2BE2] text-white py-3.5 rounded font-bold hover:bg-[#6b21a8] transition-colors tracking-wide">
                       {t('pricingPage.configurator.stickyBox.requestBtn')}
                     </a>
                  </div>
                ) : (
                  <div className={`flex flex-col w-full ${isRTL ? 'text-right items-end' : 'text-left items-start'}`}>
                     <div className="flex items-baseline gap-1 mb-4" dir="ltr">
                       <span className="text-5xl font-bold text-[#8A2BE2]">€</span>
                       <span className="text-7xl font-bold text-[#8A2BE2] tracking-tighter">{Math.floor(displayPrice as number)}</span>
                       <span className="text-3xl font-bold text-[#8A2BE2]">,{(displayPrice as number).toFixed(2).split('.')[1]}</span>
                     </div>
                     <div className="text-sm text-[#6b21a8] font-medium leading-relaxed">
                        <p>{t('pricingPage.configurator.stickyBox.perPerson')}</p>
                        {billing === 12 && <p>{t('pricingPage.configurator.stickyBox.billed')}</p>}
                        <p className="mt-4 text-slate-400">{t('pricingPage.configurator.stickyBox.vat')}</p>
                     </div>
                  </div>
                )}
             </div>
             
             {/* Bottom Part: ROI Section */}
             <div className={`bg-[#8A2BE2] p-8 text-white flex flex-col ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}>
                <h4 className="font-bold text-lg mb-1">{t('pricingPage.configurator.stickyBox.worthTitle')}</h4>
                <p className="text-purple-100 text-sm mb-6 leading-relaxed">{t('pricingPage.configurator.stickyBox.worthDesc')}</p>
                
                <a href="/roi" className="block w-full bg-[#489E46] hover:bg-[#336E2E] text-white text-center py-3.5 rounded font-bold transition-colors">
                  {t('pricingPage.configurator.stickyBox.roiBtn')}
                </a>
             </div>
          </div>

        </div>
      </section>

      {/* 3. CTA Banner */}
      <section className="bg-[#8A2BE2] py-24 text-center relative overflow-hidden mt-16">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#f8fafc] transform rotate-45"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {t('pricingPage.cta.title')}
            </h2>
            <p className="text-purple-100 text-xl font-light mb-12 max-w-3xl mx-auto">
              {t('pricingPage.cta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
               <button className="bg-[#489E46] hover:bg-[#336E2E] text-white px-10 py-4 rounded font-bold transition-colors shadow-lg text-lg">
                 {t('pricingPage.cta.btnTrial')}
               </button>
               <button className="bg-white text-[#8A2BE2] hover:bg-slate-100 px-10 py-4 rounded font-bold transition-colors shadow-lg text-lg">
                 {t('pricingPage.cta.btnBuy')}
               </button>
            </div>
            <p className="text-purple-200 text-sm">{t('pricingPage.cta.note')}</p>
          </FadeIn>
        </div>
      </section>

      {/* 4. FAQs Summary */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <FadeIn direction="up">
             <h2 className="text-3xl lg:text-[40px] font-bold text-slate-800 mb-16">{t('pricingPage.faqs.title')}</h2>
             <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-5xl mx-auto">
                {faqQuestions.map((q, i) => (
                  <a key={i} href="/faq" className={`text-[17px] font-medium text-[#8A2BE2] hover:text-[#489E46] transition-colors py-2 border-b border-slate-100 leading-snug block ${isRTL ? 'text-right' : 'text-left'}`}>
                    {q}
                  </a>
                ))}
             </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section className="bg-[#f8fafc] py-24 text-center">
         <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl font-bold text-[#8A2BE2] mb-4">{t('contact.title', 'Contact us!')}</h2>
            <div className="mt-6 text-[15px] text-slate-500 font-light flex items-center justify-center gap-2">
               <MonitorSmartphone className="w-4 h-4 text-[#489E46]" /> {t('contactPage.hero.availability')}
            </div>

            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mt-16 mb-8">
               <div className="flex-1 bg-white p-10 rounded-xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
                  <h3 className="text-[17px] font-medium text-[#489E46] mb-2">{t('contactPage.support.pretitle')}</h3>
                  <h4 className="text-[32px] font-bold text-[#8A2BE2] mb-8">{t('contactPage.support.title')}</h4>
                  <button className="bg-[#8A2BE2] text-white px-8 py-3.5 rounded hover:bg-[#6b21a8] transition-colors mb-10 text-[15px] font-medium">
                    {t('contactPage.support.btn')}
                  </button>
                  <div className="text-left flex flex-col gap-4 text-[#8A2BE2] font-medium text-[15px] items-start w-full max-w-xs mx-auto">
                     <div className="flex items-center gap-3" dir="ltr"><Phone className="w-5 h-5 text-[#489E46]"/> KSA: +966 55 818 8632</div>
                     <div className="flex items-center gap-3 mt-2"><Mail className="w-5 h-5 text-[#489E46]"/> support@s-locator.com</div>
                  </div>
               </div>
               <div className="flex-1 bg-white p-10 rounded-xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
                  <h3 className="text-[17px] font-medium text-[#489E46] mb-2">{t('contactPage.sales.pretitle')}</h3>
                  <h4 className="text-[32px] font-bold text-[#8A2BE2] mb-8">{t('contactPage.sales.title')}</h4>
                  <div className="text-left flex flex-col gap-4 text-[#8A2BE2] font-medium text-[15px] items-start w-full max-w-xs mx-auto mt-2">
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

const XIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default Pricing;