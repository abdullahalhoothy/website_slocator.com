import React from 'react';
import { useTranslation } from 'react-i18next';
import { FadeIn } from '../animations/FadeIn';

export const RoiCalculator: React.FC = () => {
  const { t } = useTranslation('landing');

  return (
    <section className="bg-slate-50 flex flex-col overflow-hidden">
      <div className="bg-[#00609c] text-white py-20 text-center relative">
         <FadeIn direction="down">
           <div className="relative z-10 container mx-auto px-4">
             <h2 className="text-4xl lg:text-5xl font-medium mb-4">{t('roi.title')}</h2>
             <p className="text-xl font-light text-blue-100 mb-8">{t('roi.subtitle')}</p>
             <button className="bg-[#44E559] hover:bg-[#3bc24d] text-slate-900 px-8 py-3.5 rounded font-medium transition-colors shadow-lg">
               Get started now
             </button>
           </div>
         </FadeIn>
      </div>

      <div className="bg-sky-100/50 py-20 border-b border-slate-200">
        <FadeIn direction="up">
          <div className="container mx-auto px-4 max-w-4xl bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-light text-slate-800 mb-2">{t('roi.calcTitle')}</h3>
              <p className="text-slate-500 font-light">{t('roi.calcDesc')}</p>
            </div>
            
            <div className="mb-6 font-medium text-slate-800">Details per employee:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div>
                <label className="block text-sm text-slate-500 mb-1">Kilometers (km)</label>
                <input type="text" defaultValue="40.000" className="w-full border border-slate-200 p-2.5 rounded focus:outline-none focus:border-purple-500 mb-1" />
                <span className="text-xs text-slate-400">per year</span>
              </div>
              <div>
                <label className="block text-sm text-slate-500 mb-1">Planning effort (hours)</label>
                <input type="text" defaultValue="4" className="w-full border border-slate-200 p-2.5 rounded focus:outline-none focus:border-purple-500 mb-1" />
                <span className="text-xs text-slate-400">per week</span>
              </div>
              <div>
                <label className="block text-sm text-slate-500 mb-1">Visits</label>
                <input type="text" defaultValue="8" className="w-full border border-slate-200 p-2.5 rounded focus:outline-none focus:border-purple-500 mb-1" />
                <span className="text-xs text-slate-400">per day</span>
              </div>
              <div>
                <label className="block text-sm text-slate-500 mb-1">Gross salary</label>
                <input type="text" defaultValue="3.000" className="w-full border border-slate-200 p-2.5 rounded focus:outline-none focus:border-purple-500 mb-1" />
                <span className="text-xs text-slate-400">per month</span>
              </div>
            </div>

            <div className="mb-6 font-medium text-slate-800">Calculation for:</div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1 w-full">
                <label className="block text-sm text-slate-500 mb-1">Number of employees</label>
                <input type="text" defaultValue="1" className="w-full border border-slate-200 p-2.5 rounded focus:outline-none focus:border-purple-500" />
              </div>
              <div className="flex-1 flex gap-4 pt-5 w-full">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="period" defaultChecked className="w-4 h-4 text-purple-600 focus:ring-purple-500" />
                  <span className="text-slate-600 text-sm">per year</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="period" className="w-4 h-4 text-purple-600 focus:ring-purple-500" />
                  <span className="text-slate-600 text-sm">per month</span>
                </label>
              </div>
              <div className="flex-1 pt-5 w-full">
                <button className="w-full border-2 border-[#00609c] text-[#00609c] hover:bg-slate-50 px-6 py-2.5 rounded font-medium transition-colors">
                  Calculate benefits now
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};