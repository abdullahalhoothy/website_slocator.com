import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { HeroDiagram } from '../components/home/HeroDiagram'
import { CoreDetailCards } from '../components/home/CoreDetailCards'
import { ProductOffers } from '../components/home/ProductOffers'
import { ServicesGrid } from '../components/home/ServicesGrid'
import { AchievementsCounters } from '../components/home/AchievementsCounters'
import { CompetitiveEdge } from '../components/home/CompetitiveEdge'
import { IndustriesGrid } from '../components/home/IndustriesGrid'
import { ProjectMarquee } from '../components/home/ProjectMarquee'
import { TestimonialContact } from '../components/home/TestimonialContact'

export const Home: React.FC = () => {
  const { t, i18n } = useTranslation('home')
  const isAr = i18n.language === 'ar'

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = t('home.pageTitleHome')
  }, [t])

  return (
    <div className="w-full overflow-hidden bg-white" dir={isAr ? 'rtl' : 'ltr'}>
      <HeroDiagram />
      <CoreDetailCards />
      <ProductOffers />
      <ServicesGrid />
      <AchievementsCounters />
      <CompetitiveEdge />
      <IndustriesGrid />
      <ProjectMarquee />
      <TestimonialContact />
    </div>
  )
}

export default Home
