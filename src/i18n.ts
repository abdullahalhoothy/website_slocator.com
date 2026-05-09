import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// استيراد ملفات الترجمة
import enLanding from './locales/en/landing.json';
import arLanding from './locales/ar/landing.json';

const resources = {
  en: { landing: enLanding },
  ar: { landing: arLanding }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // اللغة الافتراضية
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React يحمي من XSS تلقائياً
    }
  });

export default i18n;