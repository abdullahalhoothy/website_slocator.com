<<<<<<< HEAD
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
=======
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enTranslations from './locales/en.json'
import arTranslations from './locales/ar.json'

const savedLanguage = localStorage.getItem('site_lang') || 'ar'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    ar: { translation: arTranslations },
  },
  lng: savedLanguage,
  fallbackLng: 'ar',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
>>>>>>> upstream/main
