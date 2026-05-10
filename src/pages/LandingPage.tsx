import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { HeroSection } from '../components/home/HeroSection';
import { ProductChooser } from '../components/home/ProductChooser';
import { Customers } from '../components/home/Customers';
import { Efficiency } from '../components/home/Efficiency';
import { FeaturesList } from '../components/home/FeaturesList';
import { MoreFeatures } from '../components/home/MoreFeatures';
import { RoiCalculator } from '../components/home/RoiCalculator';
import { CompanyInfo } from '../components/home/CompanyInfo';
import { ContactSection } from '../components/home/ContactSection';

export const LandingPage: React.FC = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-[#00609c] ${isRTL ? 'text-right' : 'text-left'}`}>
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
  );
};

export default LandingPage;