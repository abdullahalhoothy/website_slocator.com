import React, { useEffect } from 'react';
// تم حذف سطر استيراد Header من هنا
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-[#00609c]">
      {/* تم حذف <Header /> من هنا لكي لا يظهر مرتين */}
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