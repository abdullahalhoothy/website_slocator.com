import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Database,
  Map,
  TrendingUp,
  Route as RouteIcon,
  CheckCircle2,
  ChevronUp,
} from 'lucide-react'

import { FadeIn } from '../animations/FadeIn'

const scrollToDiagram = () => {
  const element = document.getElementById('main-diagram')
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

export const CoreDetailCards: React.FC = () => {
  const { t, i18n } = useTranslation('home')
  const isAr = i18n.language === 'ar'
  const backBtnPos = isAr ? 'left-6' : 'right-6'

  return (
    <section
      id="diagram-details"
      className="py-24 bg-gradient-to-b from-[#f8fafc] to-white border-b border-gray-100 scroll-mt-20 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#cbd5e1] to-transparent"></div>
      <div className="absolute -left-40 top-20 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>
      <div className="absolute -right-40 bottom-20 w-96 h-96 bg-green-50 rounded-full blur-[100px] opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-20">
            <h6 className="text-[#38e54d] font-extrabold tracking-widest text-sm mb-4 uppercase">
              {t('home.coreFeaturesTitle')}
            </h6>
            <h2 className="text-[36px] md:text-[46px] font-black text-[#110222] mb-6 leading-tight">
              {t('home.coreFeaturesMainHeading')}
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
              {t('home.coreFeaturesDesc')}
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <div
              id="card-data"
              className="bg-white scroll-mt-24 rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,98,142,0.12)] transition-all duration-300 flex flex-col lg:flex-row items-center gap-10 w-full relative"
            >
              <button
                type="button"
                onClick={scrollToDiagram}
                aria-label="Back to diagram"
                className={`absolute top-6 ${backBtnPos} w-10 h-10 flex items-center justify-center bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-500 hover:text-[#00628e] rounded-full transition-all duration-300 z-20 shadow-sm hover:shadow`}
              >
                <ChevronUp size={24} />
              </button>
              <div className="flex-1 flex flex-col text-start items-start w-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-50 text-[#00628e] p-4 rounded-2xl border border-blue-100 shadow-sm shrink-0">
                    <Database size={28} />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-[#1e293b] pr-10">
                    {t('home.trustedDataBank')}
                  </h3>
                </div>
                <p className="text-gray-500 leading-relaxed font-medium mb-8 text-[15px] max-w-2xl">
                  {t('home.trustedDataBankDesc')}
                </p>
                <ul className="space-y-4 w-full flex flex-col items-start">
                  {[
                    t('home.trustedDataFeat1'),
                    t('home.trustedDataFeat2'),
                    t('home.trustedDataFeat3'),
                  ].map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[#334155] font-semibold text-[15px] text-start w-full"
                    >
                      <CheckCircle2 className="text-[#00628e] w-5 h-5 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-[35%] flex items-center justify-center bg-gray-50 rounded-2xl p-6 border border-gray-100 shrink-0 h-full min-h-[220px]">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center justify-items-center opacity-80 mix-blend-multiply w-full">
                  <img
                    src="/assets/images/general_authority_logo.svg"
                    alt="GASTAT"
                    className="max-h-8 w-full object-contain"
                  />
                  <img
                    src="/assets/images/REGA_LOGO.svg"
                    alt="REGA"
                    className="max-h-7 w-full object-contain"
                  />
                  <img
                    src="/assets/images/hrdf_logo.svg"
                    alt="HRDF"
                    className="max-h-8 w-full object-contain"
                  />
                  <img
                    src="/assets/images/sakany_logo.svg"
                    alt="Sakany"
                    className="max-h-7 w-full object-contain"
                  />
                  <img
                    src="/assets/images/Ministry_of_Justice_Logo.svg"
                    alt="MOJ"
                    className="max-h-8 w-full object-contain"
                  />
                  <img
                    src="/assets/images/google.png"
                    alt="Google"
                    className="max-h-7 w-full object-contain"
                  />
                </div>
              </div>
              <div className="w-full lg:w-auto flex items-center justify-center border-t lg:border-t-0 lg:border-s border-gray-100 pt-8 lg:pt-0 lg:ps-10 shrink-0">
                <a
                  href="https://s-locator.northernacs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button
                    type="button"
                    className="w-full lg:w-max px-10 py-4 rounded-xl font-bold transition-colors bg-[#00628e] text-white hover:bg-[#004e70] shadow-md whitespace-nowrap"
                  >
                    {t('home.btnStartNow')}
                  </button>
                </a>
              </div>
            </div>

            <div
              id="card-platform"
              className="bg-white scroll-mt-24 rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(56,229,77,0.15)] transition-all duration-300 flex flex-col lg:flex-row-reverse items-center gap-10 w-full relative"
            >
              <button
                type="button"
                onClick={scrollToDiagram}
                aria-label="Back to diagram"
                className={`absolute top-6 ${backBtnPos} w-10 h-10 flex items-center justify-center bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-500 hover:text-[#2eaa3f] rounded-full transition-all duration-300 z-20 shadow-sm hover:shadow`}
              >
                <ChevronUp size={24} />
              </button>
              <div className="flex-1 flex flex-col text-start items-start w-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-green-50 text-[#2eaa3f] p-4 rounded-2xl border border-green-100 shadow-sm shrink-0">
                    <Map size={28} />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-[#1e293b] pr-10">
                    {t('home.nodePlatform')}
                  </h3>
                </div>
                <p className="text-gray-500 leading-relaxed font-medium mb-8 text-[15px] max-w-2xl">
                  {t('home.platformDesc')}
                </p>
                <ul className="space-y-4 w-full flex flex-col items-start">
                  {[t('home.platformFeat1'), t('home.platformFeat2'), t('home.platformFeat3')].map(
                    (feat, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[#334155] font-semibold text-[15px] text-start w-full"
                      >
                        <CheckCircle2 className="text-[#2eaa3f] w-5 h-5 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="w-full lg:w-[35%] flex items-center justify-center bg-green-50/50 rounded-2xl p-6 border border-green-100/50 shrink-0 min-h-[220px] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#38e54d] to-transparent"></div>
                <Map
                  size={100}
                  className="text-[#2eaa3f] opacity-80 drop-shadow-sm relative z-10"
                  strokeWidth={1}
                />
              </div>
              <div className="w-full lg:w-auto flex items-center justify-center border-t lg:border-t-0 lg:border-e border-gray-100 pt-8 lg:pt-0 lg:pe-10 shrink-0">
                <a
                  href="https://s-locator.northernacs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button
                    type="button"
                    className="w-full lg:w-max px-10 py-4 rounded-xl font-bold transition-colors bg-[#38e54d] text-[#110222] hover:bg-[#2eaa3f] shadow-md whitespace-nowrap"
                  >
                    {t('home.btnStartNow')}
                  </button>
                </a>
              </div>
            </div>

            <div
              id="card-report"
              className="bg-white scroll-mt-24 rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(155,81,224,0.15)] transition-all duration-300 flex flex-col lg:flex-row items-center gap-10 w-full relative"
            >
              <button
                type="button"
                onClick={scrollToDiagram}
                aria-label="Back to diagram"
                className={`absolute top-6 ${backBtnPos} w-10 h-10 flex items-center justify-center bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-500 hover:text-[#9b51e0] rounded-full transition-all duration-300 z-20 shadow-sm hover:shadow`}
              >
                <ChevronUp size={24} />
              </button>
              <div className="flex-1 flex flex-col text-start items-start w-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-purple-50 text-[#9b51e0] p-4 rounded-2xl border border-purple-100 shadow-sm shrink-0">
                    <TrendingUp size={28} />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-[#1e293b] pr-10">
                    {t('home.nodeExpReport')}
                  </h3>
                </div>
                <p className="text-gray-500 leading-relaxed font-medium mb-8 text-[15px] max-w-2xl">
                  {t('home.expReportDesc')}
                </p>
                <ul className="space-y-4 w-full flex flex-col items-start">
                  {[
                    t('home.expReportFeat1'),
                    t('home.expReportFeat2'),
                    t('home.expReportFeat3'),
                  ].map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[#334155] font-semibold text-[15px] text-start w-full"
                    >
                      <CheckCircle2 className="text-[#9b51e0] w-5 h-5 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-[35%] flex items-center justify-center bg-purple-50/50 rounded-2xl p-6 border border-purple-100/50 shrink-0 min-h-[220px] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#9b51e0] to-transparent"></div>
                <TrendingUp
                  size={100}
                  className="text-[#9b51e0] opacity-80 drop-shadow-sm relative z-10"
                  strokeWidth={1}
                />
              </div>
              <div className="w-full lg:w-auto flex items-center justify-center border-t lg:border-t-0 lg:border-s border-gray-100 pt-8 lg:pt-0 lg:ps-10 shrink-0">
                <a
                  href="https://s-locator.northernacs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button
                    type="button"
                    className="w-full lg:w-max px-10 py-4 rounded-xl font-bold transition-colors bg-[#9b51e0] text-white hover:bg-[#8645c4] shadow-md whitespace-nowrap"
                  >
                    {t('home.btnStartNow')}
                  </button>
                </a>
              </div>
            </div>

            <div
              id="card-route"
              className="bg-white scroll-mt-24 rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(249,115,22,0.12)] transition-all duration-300 flex flex-col lg:flex-row-reverse items-center gap-10 w-full relative"
            >
              <button
                type="button"
                onClick={scrollToDiagram}
                aria-label="Back to diagram"
                className={`absolute top-6 ${backBtnPos} w-10 h-10 flex items-center justify-center bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-500 hover:text-[#f97316] rounded-full transition-all duration-300 z-20 shadow-sm hover:shadow`}
              >
                <ChevronUp size={24} />
              </button>
              <div className="flex-1 flex flex-col text-start items-start w-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-orange-50 text-[#f97316] p-4 rounded-2xl border border-orange-100 shadow-sm shrink-0">
                    <RouteIcon size={28} />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black text-[#1e293b] pr-10">
                    {t('home.nodeRoute')}
                  </h3>
                </div>
                <p className="text-gray-500 leading-relaxed font-medium mb-8 text-[15px] max-w-2xl">
                  {t('home.routePlanningDesc')}
                </p>
                <ul className="space-y-4 w-full flex flex-col items-start">
                  {[
                    t('home.routePlanningFeat1'),
                    t('home.routePlanningFeat2'),
                    t('home.routePlanningFeat3'),
                  ].map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[#334155] font-semibold text-[15px] text-start w-full"
                    >
                      <CheckCircle2 className="text-[#f97316] w-5 h-5 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-[35%] flex items-center justify-center bg-orange-50/50 rounded-2xl p-6 border border-orange-100/50 shrink-0 min-h-[220px] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#f97316] to-transparent"></div>
                <RouteIcon
                  size={100}
                  className="text-[#f97316] opacity-80 drop-shadow-sm relative z-10"
                  strokeWidth={1}
                />
              </div>
              <div className="w-full lg:w-auto flex items-center justify-center border-t lg:border-t-0 lg:border-e border-gray-100 pt-8 lg:pt-0 lg:pe-10 shrink-0">
                <a
                  href="https://s-locator.northernacs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button
                    type="button"
                    className="w-full lg:w-max px-10 py-4 rounded-xl font-bold transition-colors bg-[#f97316] text-white hover:bg-[#ea580c] shadow-md whitespace-nowrap"
                  >
                    {t('home.btnStartNow')}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
