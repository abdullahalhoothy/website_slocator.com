import React from 'react';
import { useTranslation } from 'react-i18next';
import { Quote, Map, Users, Clock } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';
import { CountUp } from '../animations/CountUp';

export const Efficiency: React.FC = () => {
  const { t, i18n } = useTranslation('landing');
  const isRTL = i18n.dir() === 'rtl';

  return (
    <section className={`py-24 bg-white overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-[40px] font-medium text-slate-900 mb-4">
              {t('advantages.title', 'Your advantages with S-Locator')}<sup className="text-lg">®</sup>
            </h2>
            <p className="text-lg text-slate-500 font-light">
              {t('advantages.subtitle', 'Field sales force software for automatic route planning and dynamic territory optimization')}
            </p>
          </div>
          <h3 className="text-2xl font-light text-center text-slate-800 mb-12">
            {t('advantages.savingsTitle', 'Savings meet efficiency')}
          </h3>
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-slate-50 p-8 rounded-2xl border border-slate-100">
          
          <div className="w-full lg:w-5/12">
            <FadeIn direction={isRTL ? "right" : "left"}>
              <div className={`flex gap-6 items-start border-b lg:border-b-0 ${isRTL ? 'lg:border-l lg:pl-8' : 'lg:border-r lg:pr-8'} border-slate-200 pb-8 lg:pb-0`}>
                <div className="flex flex-col items-center gap-3">
                   <img src="/assets/images/pieterniemand_rund_web.webp" alt="Pieter Niemand" className="w-20 h-20 rounded-full object-cover shadow-sm" />
                   <Quote className={`w-8 h-8 text-purple-600 fill-purple-100 opacity-50 ${isRTL ? '' : 'rotate-180'}`} />
                </div>
                <div>
                  <img src="/assets/images/miwa-logo.webp" alt="MIWA Logo" className="h-6 mb-4 grayscale opacity-70" />
                  <p className="text-slate-700 italic font-light mb-4 text-lg">
                    {t('advantages.quote', '"We save between 15 and 18% on mileage per year and a lot of time."')}
                  </p>
                  <div className="text-sm font-medium text-slate-900">Pieter Niemand</div>
                  <div className="text-sm text-slate-500 font-light mb-2">MIWA National Director</div>
                  <a href="#" className="text-sm text-purple-600 hover:underline">
                    {t('advantages.readMore', 'read more...')}
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn direction="up" delay={100}>
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center flex flex-col items-center justify-center h-full">
                <Map className="w-10 h-10 text-purple-600 mb-4" />
                <div className="font-medium text-slate-800 flex items-center justify-center gap-1 flex-wrap">
                  <CountUp end={18} suffix="%" /> 
                  <span>{t('advantages.fewerKmLabel', 'fewer kilometers')}</span>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={200}>
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center flex flex-col items-center justify-center h-full">
                <Users className="w-10 h-10 text-[#3bc24d] mb-4" />
                <div className="font-medium text-slate-800 flex items-center justify-center gap-1 flex-wrap">
                  <CountUp end={20} prefix="+" suffix="%" /> 
                  <span>{t('advantages.moreCallsLabel', 'more customer calls')}</span>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={300}>
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center flex flex-col items-center justify-center h-full">
                <Clock className="w-10 h-10 text-sky-500 mb-4" />
                <div className="font-medium text-slate-800 flex items-center justify-center gap-1 flex-wrap">
                  <CountUp end={50} suffix="%" /> 
                  <span>{t('advantages.timeSavedLabel', 'time saved')}</span>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
};