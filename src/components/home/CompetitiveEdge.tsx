import React from 'react'
import { useTranslation } from 'react-i18next'

import { FadeIn } from '../animations/FadeIn'
import { AnimatedCounter } from '../animations/AnimatedCounter'

export const CompetitiveEdge: React.FC = () => {
  const { t, i18n } = useTranslation('home')
  const isAr = i18n.language === 'ar'

  return (
    <section className="bg-gradient-to-b from-[#061d10] to-[#13072e] py-20 overflow-hidden">
      <FadeIn direction="up">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 relative w-full flex justify-center">
            <div
              className={`bg-[#56a8fb] w-[90%] md:w-[80%] rounded-[40px] ${
                isAr ? 'rounded-tr-[80px]' : 'rounded-tl-[80px]'
              } p-8 md:p-12 relative shadow-2xl`}
            >
              <div
                className={`absolute -top-6 ${
                  isAr ? '-left-6 md:-left-10' : '-right-6 md:-right-10'
                } md:top-8 bg-[#e0fbc9] text-[#110222] w-[110px] h-[110px] rounded-full flex flex-col justify-center items-center shadow-xl border-[6px] border-white z-20 hover:scale-105 transition-transform`}
              >
                <span className="text-3xl font-extrabold">
                  <AnimatedCounter end={30} />+
                </span>
                <span
                  className="text-[10px] text-center leading-tight font-bold mt-1"
                  dangerouslySetInnerHTML={{ __html: t('home.yearsExpHtml') }}
                />
              </div>
              <img
                src="/assets/images/exhibition-stand-isometric-composition_1284-23588.jpg"
                alt="Exhibition"
                className="w-full relative z-10 rounded-xl shadow-lg border-4 border-white/20"
              />
            </div>
          </div>
          <div className={`lg:w-1/2 py-8 ${isAr ? 'text-right' : 'text-left'}`}>
            <h2 className="text-[#38e54d] text-4xl md:text-[54px] font-bold mb-6 leading-[1.1]">
              {t('home.compEdgeTitle')}
            </h2>
            <p className="text-white mb-6 font-semibold text-lg leading-snug">{t('home.compEdgeSub')}</p>
            <p className="text-gray-300 text-[15px] leading-relaxed mb-10 max-w-lg">{t('home.compEdgeDesc')}</p>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
