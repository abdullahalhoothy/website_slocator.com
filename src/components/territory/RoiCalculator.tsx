import React from 'react'
import { useTranslation } from 'react-i18next'
import { FadeIn } from '../animations/FadeIn'

export const RoiCalculator: React.FC = () => {
  const { t, i18n } = useTranslation('landing')
  const isRTL = i18n.dir() === 'rtl'

  return (
    <section
      className={`bg-slate-50 flex flex-col overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}
    >
      <div className="bg-[#00609c] text-white py-20 text-center relative">
        <FadeIn direction="down">
          <div className="relative z-10 container mx-auto px-4">
            <h2 className="text-4xl lg:text-5xl font-medium mb-4">
              {t('roi.title', 'Start now!')}
            </h2>
            <p className="text-xl font-light text-blue-100 mb-8">
              {t(
                'roi.subtitle',
                'Convince yourself of our software solutions for your field force.',
              )}
            </p>
            <a
              href="https://s-locator.northernacs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#44E559] hover:bg-[#3bc24d] text-slate-900 px-8 py-3.5 rounded font-medium transition-colors shadow-lg"
            >
              {t('cta.getStartedNow', 'Get started now')}
            </a>
          </div>
        </FadeIn>
      </div>

      <div className="bg-sky-100/50 py-20 border-b border-slate-200">
        <FadeIn direction="up">
          <div className="container mx-auto px-4 max-w-4xl bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-slate-100">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-light text-slate-800 mb-2">
                {t('roi.calcTitle', 'Calculate your benefits too')}
              </h3>
              <p className="text-slate-500 font-light">
                {t(
                  'roi.calcDesc',
                  'with the S-Locator return on investment calculator for the field sales force:',
                )}
              </p>
            </div>

            <div className="mb-6 font-medium text-slate-800">
              {t('calculator.detailsPerEmployee', 'Details per employee:')}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="flex flex-col">
                <label className="text-sm text-slate-500 mb-1">
                  {t('calculator.kilometers', 'Kilometers (km)')}
                </label>
                <input
                  type="text"
                  defaultValue="40.000"
                  dir="ltr"
                  className={`w-full border border-slate-200 p-2.5 rounded focus:outline-none focus:border-purple-500 mb-1 ${isRTL ? 'text-right' : 'text-left'}`}
                />
                <span className="text-xs text-slate-400">
                  {t('calculator.perYear', 'per year')}
                </span>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-slate-500 mb-1">
                  {t('calculator.planningEffort', 'Planning effort (hours)')}
                </label>
                <input
                  type="text"
                  defaultValue="4"
                  dir="ltr"
                  className={`w-full border border-slate-200 p-2.5 rounded focus:outline-none focus:border-purple-500 mb-1 ${isRTL ? 'text-right' : 'text-left'}`}
                />
                <span className="text-xs text-slate-400">
                  {t('calculator.perWeek', 'per week')}
                </span>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-slate-500 mb-1">
                  {t('calculator.visits', 'Visits')}
                </label>
                <input
                  type="text"
                  defaultValue="8"
                  dir="ltr"
                  className={`w-full border border-slate-200 p-2.5 rounded focus:outline-none focus:border-purple-500 mb-1 ${isRTL ? 'text-right' : 'text-left'}`}
                />
                <span className="text-xs text-slate-400">{t('calculator.perDay', 'per day')}</span>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-slate-500 mb-1">
                  {t('calculator.grossSalary', 'Gross salary')}
                </label>
                <input
                  type="text"
                  defaultValue="3.000"
                  dir="ltr"
                  className={`w-full border border-slate-200 p-2.5 rounded focus:outline-none focus:border-purple-500 mb-1 ${isRTL ? 'text-right' : 'text-left'}`}
                />
                <span className="text-xs text-slate-400">
                  {t('calculator.perMonth', 'per month')}
                </span>
              </div>
            </div>

            <div className="mb-6 font-medium text-slate-800">
              {t('calculator.calculationFor', 'Calculation for:')}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex-1 w-full">
                <label className="block text-sm text-slate-500 mb-1">
                  {t('calculator.numberOfEmployees', 'Number of employees')}
                </label>
                <input
                  type="text"
                  defaultValue="1"
                  dir="ltr"
                  className={`w-full border border-slate-200 p-2.5 rounded focus:outline-none focus:border-purple-500 ${isRTL ? 'text-right' : 'text-left'}`}
                />
              </div>
              <div className="flex-1 flex gap-4 pt-5 w-full">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="period"
                    defaultChecked
                    className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-slate-600 text-sm">
                    {t('calculator.perYear', 'per year')}
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="period"
                    className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-slate-600 text-sm">
                    {t('calculator.perMonth', 'per month')}
                  </span>
                </label>
              </div>
              <div className="flex-1 pt-5 w-full">
                <button className="w-full border-2 border-[#00609c] text-[#00609c] hover:bg-slate-50 px-6 py-2.5 rounded font-medium transition-colors">
                  {t('calculator.calculateNow', 'Calculate benefits now')}
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
