import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { FadeIn } from '../animations/FadeIn'

export const ServicesGrid: React.FC = () => {
  const { t } = useTranslation('home')

  const services = [
    { img: '/assets/images/icon-10.png', titleKey: 'srv1Title', descKey: 'srv1Desc', link: '/solutions/point-of-interest-locator' },
    { img: '/assets/images/icon-02.png', titleKey: 'srv2Title', descKey: 'srv2Desc', link: '/solutions/area-population-density-intelligence' },
    { img: '/assets/images/icon-16.png', titleKey: 'srv3Title', descKey: 'srv3Desc', link: '/solutions/real-estate-area-pricing-intelligence' },
    { img: '/assets/images/icon-07.png', titleKey: 'srv4Title', descKey: 'srv4Desc', link: '/solutions/road-traffic-data-intelligence' },
    { img: '/assets/images/S-lOC_USAGES_FF-14.png', titleKey: 'srv5Title', descKey: 'srv5Desc', link: '/solutions/environment-intelligence' },
    { img: '/assets/images/S-lOC_USAGES_FF-24.png', titleKey: 'srv6Title', descKey: 'srv6Desc', link: '/solutions/area-income-intelligence' },
    { img: '/assets/images/S-lOC_USAGES_FF-17.png', titleKey: 'srv7Title', descKey: 'srv7Desc', link: '/solutions/infrastructure-location-intelligence' },
    { img: '/assets/images/S-lOC_USAGES_FF-13.png', titleKey: 'srv8Title', descKey: 'srv8Desc', link: '/solutions/area-internet-usage-intelligence' },
  ]

  return (
    <section className="relative py-24 bg-[#061d10]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <FadeIn direction="up">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-16 uppercase">
            {t('home.ourSolutionsTitle')}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} direction="up" delay={(index % 4) * 100}>
              <div className="bg-[#1f0f38] p-8 rounded-lg shadow-lg flex flex-col items-center border-t border-[#38e54d]/20 hover:-translate-y-2 transition-transform duration-300 group h-full">
                <div className="h-[100px] w-full flex items-center justify-center mb-6">
                  <img src={service.img} alt={t(`home.${service.titleKey}`)} className="max-h-full object-contain" />
                </div>
                <h3 className="text-white font-bold text-lg mb-4 h-14 flex items-center justify-center text-center">
                  {t(`home.${service.titleKey}`)}
                </h3>
                <p className="text-gray-300 text-[13px] mb-8 flex-grow leading-relaxed">
                  {t(`home.${service.descKey}`)}
                </p>
                <Link
                  to={service.link}
                  className="bg-[#8eea9e] hover:bg-[#45c960] text-[#110222] font-bold py-2 px-6 rounded-full text-sm transition-colors mt-auto inline-block text-center w-max"
                >
                  {t('home.clickHere')}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
