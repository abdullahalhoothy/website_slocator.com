import React from 'react'
import { useTranslation } from 'react-i18next'

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lng
    localStorage.setItem('site_lang', lng)
  }
  return (
    <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-full border border-slate-200">
      <button
        onClick={() => changeLanguage('ar')}
        className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all ${
          i18n.language === 'ar'
            ? 'bg-white shadow-sm text-[#489E46] font-bold'
            : 'text-slate-500 hover:text-slate-700'
        }`}
      >
        <img src="https://flagcdn.com/w40/sa.png" alt="Arabic" className="w-5 h-auto rounded-sm" />
        <span className="text-xs">العربية</span>
      </button>

      <button
        onClick={() => changeLanguage('en')}
        className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all ${
          i18n.language === 'en'
            ? 'bg-white shadow-sm text-[#00609c] font-bold'
            : 'text-slate-500 hover:text-slate-700'
        }`}
      >
        <img src="https://flagcdn.com/w40/gb.png" alt="English" className="w-5 h-auto rounded-sm" />
        <span className="text-xs">English</span>
      </button>
    </div>
  )
}
