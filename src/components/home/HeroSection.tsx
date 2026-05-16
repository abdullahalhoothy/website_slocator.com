import React from 'react'
import { useTranslation } from 'react-i18next'
import { Map, Layers, ArrowRight } from 'lucide-react'

export const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation('landing')
  const isRTL = i18n.dir() === 'rtl'

  return (
    <section className="relative bg-white overflow-hidden pt-16 pb-24 border-b border-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-5/12 relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[480px]">
              <img
                src="/assets/images/saudie man.png"
                className="w-full h-auto object-contain relative z-10"
              />

              <div
                className={`absolute top-[20%] ${isRTL ? '-right-8' : '-left-8'} z-20 bg-white rounded-xl shadow-2xl p-4 border border-slate-100 flex items-center gap-3 animate-bounce-slow`}
              >
                <div className="bg-purple-50 p-2 rounded-lg">
                  <Map className="w-5 h-5 text-purple-600" />
                </div>
                <span className="font-bold text-slate-800 text-sm">{t('hero.routePlanner')}</span>
              </div>

              <div
                className={`absolute bottom-[15%] ${isRTL ? '-left-8' : '-right-8'} z-20 bg-white rounded-xl shadow-2xl p-4 border border-slate-100 flex items-center gap-3 animate-bounce-slow-delayed`}
              >
                <div className="bg-[#44E559]/10 p-2 rounded-lg">
                  <Layers className="w-5 h-5 text-[#3bc24d]" />
                </div>
                <span className="font-bold text-slate-800 text-sm">
                  {t('hero.territoryOptimization')}
                </span>
              </div>
            </div>
          </div>

          <div
            className={`w-full lg:w-7/12 flex flex-col gap-6 order-1 lg:order-2 ${isRTL ? 'text-right' : 'text-left'}`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-[#44E559]"></span>
              <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                {t('hero.poweredBy', 'Powered by Northern Analytics')}
              </span>
            </div>

            <h1 className="text-4xl lg:text-[54px] font-extrabold text-slate-900 leading-[1.1] mb-2">
              {t('hero.title1', 'Maximize Field Efficiency.')} <br />
              <span className="text-purple-600">{t('hero.title2', 'Minimize Travel.')}</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl font-light">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="https://s-locator.northernacs.com/"
                className="bg-[#44E559] hover:bg-[#3bc24d] text-slate-900 px-10 py-4 rounded-md font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-[#44E559]/30 w-fit"
              >
                {t('hero.getStarted')}
                <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
