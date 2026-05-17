import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { HeroSection } from '../components/territory/HeroSection'
import { ProductChooser } from '../components/territory/ProductChooser'
import { Customers } from '../components/territory/Customers'
import { Efficiency } from '../components/territory/Efficiency'
import { FeaturesList } from '../components/territory/FeaturesList'
import { MoreFeatures } from '../components/territory/MoreFeatures'
import { RoiCalculator } from '../components/territory/RoiCalculator'
import { CompanyInfo } from '../components/territory/CompanyInfo'
import { ContactSection } from '../components/territory/ContactSection'

export const TerritoryPlanning: React.FC = () => {
  const { i18n } = useTranslation()
  const isRTL = i18n.dir() === 'rtl'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div
      className={`min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-[#00609c] ${isRTL ? 'text-right' : 'text-left'}`}
    >
      <main>
        <HeroSection />
        <ProductChooser />
        <Customers />
        <Efficiency />
        <FeaturesList />
        <MoreFeatures />
        <RoiCalculator />
        <CompanyInfo />
        <ContactSection />
      </main>
    </div>
  )
}

export default TerritoryPlanning
