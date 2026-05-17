import React from 'react'
import { useTranslation } from 'react-i18next'
import { Map, Layers } from 'lucide-react'
import { FadeIn } from '../animations/FadeIn'

export const ProductChooser: React.FC = () => {
  const { t, i18n } = useTranslation('landing')
  const isRTL = i18n.dir() === 'rtl'

  return (
    <section
      className={`py-24 bg-white border-b border-slate-100 overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100 rtl:divide-x-reverse">
          <FadeIn direction="up">
            <div className="flex flex-col items-center text-center px-4 lg:px-12">
              <div className="flex items-center gap-3 mb-8">
                <Map className="w-8 h-8 text-purple-600" />
                <h2 className="text-3xl font-medium text-slate-900">
                  {t('products.routePlanner.title', 'Top 10 locations report')}
                </h2>
              </div>
              <img
                src="/assets/images/portatour-route-planner-en-thumb.webp"
                alt={t('products.routePlanner.title', 'Top 10 locations report')}
                className="w-full max-w-sm mb-8 drop-shadow-xl rounded-lg"
              />
              <p className="text-slate-500 font-light leading-relaxed mb-8 min-h-[80px]">
                {t(
                  'products.routePlanner.description',
                  'Discover the future of location planning with the AI-supported S-Locator. More customer calls thanks to optimized drive routes and time savings thanks to an efficient schedule.',
                )}
              </p>
              <a
                href="https://s-locator.northernacs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-8 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors mb-4"
              >
                {t('products.routePlanner.cta', 'Top 10 locations report')}
              </a>
              <a href="#" className="text-sm text-purple-600 hover:underline font-light">
                {t('products.routePlanner.moreDetails', 'More details about the location report')}
              </a>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={200}>
            <div className="flex flex-col items-center text-center px-4 lg:px-12 pt-12 md:pt-0">
              <div className="flex items-center gap-3 mb-8">
                <Layers className="w-8 h-8 text-[#3bc24d]" />
                <h2 className="text-3xl font-medium text-slate-900">
                  {t('products.territoryOptimization.title', 'Start Planning')}
                </h2>
              </div>
              <img
                src="/assets/images/portatour-territory-optimization-en-thumb.webp"
                alt={t('products.territoryOptimization.title', 'Start Planning')}
                className="w-full max-w-sm mb-8 drop-shadow-xl rounded-lg"
              />
              <p className="text-slate-500 font-light leading-relaxed mb-8 min-h-[80px]">
                {t(
                  'products.territoryOptimization.description',
                  'Optimize your sales territory based on AI and distribute your customers efficiently to your field reps. With S-Locator you get possible scenarios at the touch of a button.',
                )}
              </p>
              <a
                href="https://s-locator.northernacs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#44E559] text-slate-900 px-8 py-3 rounded-md font-medium hover:bg-[#3bc24d] transition-colors mb-4"
              >
                {t('products.territoryOptimization.cta', 'Start Planning')}
              </a>
              <a href="#" className="text-sm text-[#3bc24d] hover:underline font-light">
                {t(
                  'products.territoryOptimization.moreDetails',
                  'More details on territory optimization',
                )}
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
