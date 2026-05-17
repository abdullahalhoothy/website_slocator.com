import React from 'react'
import { useTranslation } from 'react-i18next'
import { CheckCircle2, Quote } from 'lucide-react'
import { FadeIn } from '../animations/FadeIn'

export const MoreFeatures: React.FC = () => {
  const { t, i18n } = useTranslation('landing')
  const isRTL = i18n.dir() === 'rtl'

  return (
    <section className={`py-16 bg-white overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl flex flex-col gap-20">
        {/* AI Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 flex justify-center">
            <FadeIn direction={isRTL ? 'left' : 'right'}>
              <img
                src="/assets/images/icon-sparkles.svg"
                alt="AI"
                className="w-64 h-auto drop-shadow-sm"
              />
            </FadeIn>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <FadeIn direction={isRTL ? 'right' : 'left'}>
              <h2 className="text-3xl font-light text-slate-800">{t('moreFeatures.aiTitle')}</h2>
              <ul className="flex flex-col gap-4 mt-4">
                {[
                  t(
                    'features.ai1',
                    'S-Locator only uses AI developed in-house and does not use external AI or LLM providers.',
                  ),
                  t(
                    'features.ai2',
                    'A heuristic algorithm with swarm intelligence iteratively creates hundreds of thousands of possible routes and then selects the best one in real-time.',
                  ),
                  t(
                    'features.ai3',
                    'Robust recommendations with full control: The algorithm adheres to the rules you specify.',
                  ),
                  t(
                    'features.ai4',
                    'Maximum data security through in-house hosting of the optimization algorithms.',
                  ),
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 font-light">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>

        {/* API Section */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-24 border-t border-slate-100 pt-20">
          <div className="w-full lg:w-1/2 flex justify-center">
            <FadeIn direction={isRTL ? 'right' : 'left'}>
              <img
                src="/assets/images/portatour-isv-api.webp"
                alt="ISV API"
                className="max-w-full h-auto drop-shadow-xl rounded-lg"
              />
            </FadeIn>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <FadeIn direction={isRTL ? 'left' : 'right'}>
              <h2 className="text-3xl font-light text-slate-800">{t('moreFeatures.apiTitle')}</h2>
              <ul className="flex flex-col gap-4 mt-4">
                {[
                  t(
                    'features.api1',
                    'Do you have an app for field force in sales, marketing or service?',
                  ),
                  t(
                    'features.api2',
                    'Expand your app with the dynamic route planning of S-Locator and open up a new source of income.',
                  ),
                  t(
                    'features.api3',
                    'Simply integrate our ISV API via REST+HTTP in your preferred programming language.',
                  ),
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 font-light">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/isv-api"
                className="text-purple-600 hover:underline font-medium text-sm mt-4"
              >
                {t('moreFeatures.apiLink', 'More about the ISV API')}
              </a>
            </FadeIn>
          </div>
        </div>

        {/* Security Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 border-t border-slate-100 pt-20">
          <div className="w-full lg:w-1/2 flex justify-center">
            <FadeIn direction={isRTL ? 'left' : 'right'}>
              <img
                src="/assets/images/portatour-privacy-policy.webp"
                alt="Security"
                className="max-w-full h-auto drop-shadow-xl rounded-lg"
              />
            </FadeIn>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <FadeIn direction={isRTL ? 'right' : 'left'}>
              <h2 className="text-3xl font-light text-slate-800">
                {t('moreFeatures.securityTitle')}
              </h2>
              <ul className="flex flex-col gap-4 mt-4">
                {[
                  t(
                    'features.security1',
                    'Data protection in accordance with the highest European and international standards',
                  ),
                  t('features.security2', 'Certified ISO 27018 and 27001 company'),
                  t('features.security3', 'Secure data center with real-time AI processing'),
                ].map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 font-light">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 bg-slate-50 border border-slate-100 p-6 rounded-2xl flex gap-5 shadow-sm">
                <div className="flex flex-col items-center shrink-0">
                  <img
                    src="/assets/images/bolliger.webp"
                    alt="Severin Bolliger"
                    className="w-14 h-14 rounded-full object-cover shadow-sm mb-2 bg-white"
                  />
                  <Quote
                    className={`w-6 h-6 text-purple-300 fill-purple-100 ${isRTL ? '' : 'rotate-180'}`}
                  />
                </div>
                <div>
                  <p className="text-slate-700 italic font-light mb-3 text-[15px] leading-relaxed">
                    {t(
                      'moreFeatures.testimonialText',
                      '"We definitely recommend S-Locator as an optimal planning tool!"',
                    )}
                  </p>
                  <div className="text-sm font-medium text-slate-900">Severin Bolliger</div>
                  <div className="text-xs text-slate-500">Samsung Electronics</div>
                </div>
              </div>
              <a
                href="/security"
                className="text-purple-600 hover:underline font-medium text-sm mt-4"
              >
                {t('moreFeatures.securityLink', 'More on data protection and information security')}
              </a>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
