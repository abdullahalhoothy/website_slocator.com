import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { FadeIn } from '../animations/FadeIn'

export const ProductOffers: React.FC = () => {
  const { t } = useTranslation('home')

  return (
    <section className="relative py-24 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-4">
        <FadeIn direction="up">
          <h2 className="text-[#38e54d] font-bold tracking-widest text-2xl md:text-3xl uppercase mb-16 text-center">
            {t('home.whatWeOffer')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 flex flex-col items-center border border-gray-100 transition-transform hover:-translate-y-1 h-full">
              <div className="flex items-center gap-4 mb-10 w-full justify-center">
                <img
                  src="/assets/images/icon-10.png"
                  alt="Report"
                  className="w-9 h-9 object-contain drop-shadow-sm"
                />
                <h3 className="text-[#1e293b] text-[22px] md:text-2xl font-extrabold text-center">
                  {t('home.offerTop10Title')}
                </h3>
              </div>

              <div className="relative mx-auto w-full max-w-[320px] mb-10 flex-grow flex items-center justify-center">
                <img
                  src="/assets/images/s-locator-app.png"
                  className="w-full h-auto object-contain drop-shadow-xl"
                  alt="App Desktop"
                />
              </div>

              <p className="text-gray-500 font-medium text-[15px] leading-relaxed mb-10 text-center">
                {t('home.findLoc')}
              </p>

              <a
                href="https://s-locator.northernacs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#9b51e0] hover:bg-[#8645c4] text-white font-bold py-3.5 px-10 rounded-full shadow-md transition-colors w-full sm:w-auto text-center mt-auto"
              >
                {t('home.offerTop10Btn')}
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 flex flex-col items-center border border-gray-100 transition-transform hover:-translate-y-1 h-full">
              <div className="flex items-center gap-4 mb-10 w-full justify-center">
                <img
                  src="/assets/images/icon-02.png"
                  alt="Planning"
                  className="w-9 h-9 object-contain drop-shadow-sm"
                />
                <h3 className="text-[#1e293b] text-[22px] md:text-2xl font-extrabold text-center">
                  {t('home.offerTerrTitle')}
                </h3>
              </div>

              <div className="relative mx-auto w-full max-w-[320px] mb-10 flex-grow flex items-center justify-center">
                <img
                  src="/assets/images/portatour-territory-optimization-en-thumb.webp"
                  className="w-full h-auto object-contain drop-shadow-xl rounded-lg"
                  alt={t('home.offerTerrTitle')}
                />
              </div>

              <p className="text-gray-500 font-medium text-[15px] leading-relaxed mb-10 text-center">
                {t('home.planTerr')}
              </p>

              <Link
                to="/territory-planning"
                className="bg-[#9b51e0] hover:bg-[#8645c4] text-white font-bold py-3.5 px-10 rounded-full shadow-md transition-colors w-full sm:w-auto text-center mt-auto"
              >
                {t('home.offerTerrBtn')}
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
