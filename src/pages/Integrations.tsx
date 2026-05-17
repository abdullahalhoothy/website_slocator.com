import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  FileSpreadsheet,
  Cloud,
  LayoutDashboard,
  Database,
  AppWindow,
  Code,
  Network,
  CheckCircle2,
  Phone,
  Mail,
  MonitorSmartphone,
  ChevronRight,
} from 'lucide-react'
import { FadeIn } from '../components/animations/FadeIn'

export const Integrations: React.FC = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.dir() === 'rtl'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const TABS_DATA = [
    { id: 'manual', icon: <FileSpreadsheet className="w-5 h-5" />, key: 'manual' },
    { id: 'salesforce', icon: <Cloud className="w-5 h-5" />, key: 'salesforce' },
    { id: 'dynamics', icon: <LayoutDashboard className="w-5 h-5" />, key: 'dynamics' },
    { id: 'veeva', icon: <Database className="w-5 h-5" />, key: 'veeva' },
    { id: 'other', icon: <AppWindow className="w-5 h-5" />, key: 'other' },
    { id: 'api', icon: <Code className="w-5 h-5" />, key: 'api' },
    { id: 'isv', icon: <Network className="w-5 h-5" />, key: 'isv' },
  ]

  const [activeTab, setActiveTab] = useState(TABS_DATA[0].id)

  const activeTabData = {
    title: t(`integrationsPage.tabs.${activeTab}.title`),
    items: t(`integrationsPage.tabs.${activeTab}.items`, { returnObjects: true }) as string[],
    btn: t(`integrationsPage.tabs.${activeTab}.btn`),
  }

  return (
    <div
      className={`min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#f5f3ff] selection:text-[#8A2BE2] pb-0 ${isRTL ? 'text-right' : 'text-left'}`}
    >
      {/* 1. Hero Section */}
      <section className="bg-[#f8fafc] pt-24 pb-16 text-center border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn direction="up">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
              {t('integrationsPage.hero.title')}
            </h1>
            <h2 className="text-2xl font-light text-slate-500 mb-6">
              {t('integrationsPage.hero.subtitle')}
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
              {t('integrationsPage.hero.desc')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Tabs Section */}
      <section className="py-20 bg-[#f5f3ff]/40 border-b border-purple-100">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-8">
          {/* Sidebar Tabs Menu */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {TABS_DATA.map(tab => {
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all font-bold text-[15px] border ${
                    isActive
                      ? 'bg-white border-[#8A2BE2] text-[#8A2BE2] shadow-md'
                      : 'bg-white/60 border-slate-200 text-slate-600 hover:bg-white hover:border-[#8A2BE2]/40'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-2 rounded-lg ${isActive ? 'bg-[#f5f3ff]' : 'bg-slate-100 text-slate-400'}`}
                    >
                      {tab.icon}
                    </div>
                    {t(`integrationsPage.tabs.${tab.key}.title`)}
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''} ${isActive ? 'text-[#8A2BE2]' : 'text-slate-300'}`}
                  />
                </button>
              )
            })}
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3">
            <FadeIn key={activeTab} direction="up" duration={0.4}>
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-200 h-full flex flex-col">
                <h2 className="text-3xl font-bold text-slate-800 mb-8 border-b border-slate-100 pb-6">
                  {activeTabData.title}
                </h2>

                <ul className="flex flex-col gap-5 flex-grow mb-10">
                  {Array.isArray(activeTabData.items) &&
                    activeTabData.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <CheckCircle2
                          className="w-6 h-6 text-[#489E46] shrink-0 mt-0.5"
                          strokeWidth={2}
                        />
                        <span className="text-slate-600 leading-relaxed text-[16px]">{item}</span>
                      </li>
                    ))}
                </ul>

                <div className="mt-auto pt-8 border-t border-slate-100">
                  <button className="bg-[#8A2BE2] hover:bg-[#6b21a8] text-white px-8 py-3.5 rounded font-bold transition-colors shadow-md text-lg">
                    {activeTabData.btn}
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[40px] font-bold text-slate-800 text-center mb-16">
              {t('integrationsPage.blog.title')}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Blog Card 1 */}
              <a
                href="#"
                className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all group flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden bg-slate-200 relative flex items-center justify-center">
                  <img
                    src="/assets/images/integrations-blog-1.webp"
                    alt="Data preparation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={e => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
                <div className="p-6 flex-grow flex items-start">
                  <p className="text-slate-700 font-medium leading-relaxed group-hover:text-[#8A2BE2] transition-colors">
                    {t('integrationsPage.blog.p1')}
                  </p>
                </div>
              </a>

              {/* Blog Card 2 */}
              <a
                href="#"
                className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all group flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden bg-slate-200 relative flex items-center justify-center">
                  <img
                    src="/assets/images/integrations-blog-2.webp"
                    alt="Synchronize your data"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={e => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
                <div className="p-6 flex-grow flex items-start">
                  <p className="text-slate-700 font-medium leading-relaxed group-hover:text-[#8A2BE2] transition-colors">
                    {t('integrationsPage.blog.p2')}
                  </p>
                </div>
              </a>

              {/* Blog Card 3 */}
              <a
                href="#"
                className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg transition-all group flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden bg-slate-200 relative flex items-center justify-center p-2 bg-white">
                  <img
                    src="/assets/images/integrations-blog-3.webp"
                    alt="Microsoft Dynamics CRM"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={e => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
                <div className="p-6 flex-grow flex items-start border-t border-slate-100">
                  <p className="text-slate-700 font-medium leading-relaxed group-hover:text-[#8A2BE2] transition-colors">
                    {t('integrationsPage.blog.p3')}
                  </p>
                </div>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. CTA Banner */}
      <section className="bg-[#8A2BE2] py-24 text-center relative overflow-hidden">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white transform rotate-45"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <FadeIn direction="up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-10 leading-tight drop-shadow-sm">
              {t('integrationsPage.cta.title')}
            </h2>
            <button className="bg-[#489E46] hover:bg-[#336E2E] text-white px-12 py-4 rounded font-bold transition-colors shadow-xl text-lg mb-6">
              {t('integrationsPage.cta.btn')}
            </button>
            <p className="text-purple-200 text-sm font-light">{t('integrationsPage.cta.note')}</p>
          </FadeIn>
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#f8fafc] transform rotate-45"></div>
      </section>

      {/* 5. Contact Section */}
      <section className="bg-[#f8fafc] py-24 text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">{t('contactPage.hero.title')}</h2>
          <div className="mt-6 text-[15px] text-slate-500 font-light flex items-center justify-center gap-2">
            <MonitorSmartphone className="w-4 h-4 text-[#8A2BE2]" />{' '}
            {t('contactPage.hero.availability')}
          </div>

          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mt-16 mb-8">
            <div className="flex-1 bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
              <h3 className="text-[17px] font-medium text-slate-500 mb-2">
                {t('contactPage.support.pretitle')}
              </h3>
              <h4 className="text-[32px] font-bold text-slate-800 mb-8">
                {t('contactPage.support.title')}
              </h4>
              <button className="bg-[#8A2BE2] text-white px-8 py-3.5 rounded hover:bg-[#6b21a8] transition-colors mb-10 text-[15px] font-bold shadow-sm">
                {t('contactPage.support.btn')}
              </button>
              <div className="flex flex-col gap-4 text-slate-700 font-medium text-[15px] items-start w-full max-w-xs mx-auto">
                <div className="flex items-center gap-3" dir="ltr">
                  <Phone className="w-5 h-5 text-[#8A2BE2]" /> KSA: +966 55 818 8632
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <Mail className="w-5 h-5 text-[#8A2BE2]" /> support@s-locator.com
                </div>
              </div>
            </div>
            <div className="flex-1 bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
              <h3 className="text-[17px] font-medium text-slate-500 mb-2">
                {t('contactPage.sales.pretitle')}
              </h3>
              <h4 className="text-[32px] font-bold text-slate-800 mb-8">
                {t('contactPage.sales.title')}
              </h4>
              <div className="flex flex-col gap-4 text-slate-700 font-medium text-[15px] items-start w-full max-w-xs mx-auto mt-2">
                <div className="flex items-center gap-3" dir="ltr">
                  <Phone className="w-5 h-5 text-[#8A2BE2]" /> Canada: +1 514-814-5180
                </div>
                <div className="flex items-center gap-3" dir="ltr">
                  <Phone className="w-5 h-5 text-[#8A2BE2]" /> KSA: +966 55 818 8632
                </div>
                <a
                  href="/contact"
                  className="text-[#a0a0a0] cursor-pointer hover:text-[#8A2BE2] ml-8 mb-2 transition-colors"
                >
                  {t('common.showMore')}
                </a>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#8A2BE2]" /> sales@s-locator.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Integrations
