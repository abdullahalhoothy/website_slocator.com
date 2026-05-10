import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json';

const savedLanguage = localStorage.getItem('site_lang') || 'ar';

document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = savedLanguage;

i18n.use(initReactI18next).init({
  resources: {
    en: { 
      translation: enTranslations,
      landing: enTranslations 
    },
    ar: { 
      translation: arTranslations,
      landing: arTranslations 
    },
  },
  lng: savedLanguage,
  fallbackLng: 'ar',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;