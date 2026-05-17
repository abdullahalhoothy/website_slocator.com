import React from 'react'
import { useTranslation } from 'react-i18next'

import { FadeIn } from '../animations/FadeIn'

export const IndustriesGrid: React.FC = () => {
  const { t } = useTranslation('home')

  const industries = [
    { img: '/assets/images/icon-small-1-1.png', titleKey: 'ind1Title', descKey: 'ind1Desc' },
    { img: '/assets/images/icon-small-1-3.png', titleKey: 'ind2Title', descKey: 'ind2Desc' },
    { img: '/assets/images/icon-small-1-2.png', titleKey: 'ind3Title', descKey: 'ind3Desc' },
    { img: '/assets/images/icon-small-1-5.png', titleKey: 'ind4Title', descKey: 'ind4Desc' },
    { img: '/assets/images/icon-small-1-7.png', titleKey: 'ind5Title', descKey: 'ind5Desc' },
  ]

  return (
    <section className="py-24 bg-[#110222]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <FadeIn direction="up">
          <h2 className="text-white text-[42px] font-bold mb-4">{t('home.tailoredTitle')}</h2>
          <p className="text-gray-300 mb-16 text-base">{t('home.tailoredDesc')}</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <FadeIn key={index} direction="up" delay={index * 150}>
              <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:bg-[#38e54d] group shadow-xl h-full">
                <div className="h-[90px] w-[90px] rounded-full bg-[#fff4ef] flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                  <img src={industry.img} alt={t(`home.${industry.titleKey}`)} className="w-[45px] h-[45px] object-contain" />
                </div>
                <h4 className="text-[#2b1055] font-extrabold text-[17px] mb-3">{t(`home.${industry.titleKey}`)}</h4>
                <p className="text-gray-600 text-xs leading-relaxed group-hover:text-[#110222] font-semibold transition-colors">
                  {t(`home.${industry.descKey}`)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
