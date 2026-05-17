import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { FadeIn } from '../animations/FadeIn'
import { AnimatedCounter } from '../animations/AnimatedCounter'

export const AchievementsCounters: React.FC = () => {
  const { t, i18n } = useTranslation('home')
  const isAr = i18n.language === 'ar'

  return (
    <section className="py-24 bg-[#fafbfc] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <FadeIn direction="up">
          <div className={`lg:w-full z-20 ${isAr ? 'text-right' : 'text-left'}`}>
            <h6 className="text-[#2b1055] uppercase tracking-widest text-sm mb-4 font-semibold">
              {t('home.achievements')}
            </h6>
            <h2 className="text-[#2b1055] text-4xl lg:text-[52px] font-extrabold mb-6 leading-[1.1]">
              {t('home.achievementsTitle')}
            </h2>
            <p className="text-gray-600 mb-10 text-lg max-w-md">{t('home.achievementsDesc')}</p>
            <Link
              to="/contact"
              className="bg-[#9b51e0] hover:bg-[#8645c4] text-white font-bold py-4 px-10 rounded-full flex items-center justify-center w-max gap-2 transition-transform hover:scale-105 shadow-xl shadow-purple-500/20"
            >
              {t('home.getStarted')}{' '}
              <span className="mx-1 text-xl font-light">{isAr ? '←' : '→'}</span>
            </Link>
          </div>
        </FadeIn>

        <div className="lg:w-1/2 relative w-full h-[600px] mt-10 lg:mt-0">
          <div
            className={`absolute top-[5%] ${isAr ? 'left-[15%]' : 'right-[15%]'} w-[160px] h-[160px] bg-[#38e54d] rounded-full flex flex-col items-center justify-center text-[#110222] shadow-[0_10px_30px_rgba(56,229,77,0.3)] hover:-translate-y-2 transition-transform z-20`}
          >
            <img src="/assets/images/basic-plan-icon.png" alt="Projects" className="h-8 mb-1" />
            <h3 className="text-2xl font-extrabold">
              <AnimatedCounter end={8550} />
            </h3>
            <p
              className="text-[10px] font-bold text-[#110222]/80 text-center uppercase mt-1"
              dangerouslySetInnerHTML={{ __html: t('home.projectsCompletedHtml') }}
            />
          </div>

          <div
            className={`absolute top-[35%] ${isAr ? 'left-[-5%]' : 'right-[-5%]'} w-[130px] h-[130px] bg-[#38e54d] rounded-full flex flex-col items-center justify-center text-[#110222] shadow-[0_10px_30px_rgba(56,229,77,0.3)] hover:-translate-y-2 transition-transform z-10`}
          >
            <img src="/assets/images/team-member-icon.png" alt="Team" className="h-7 mb-1" />
            <h3 className="text-xl font-extrabold">
              <AnimatedCounter end={90} />+
            </h3>
            <p
              className="text-[9px] font-bold text-[#110222]/80 text-center uppercase mt-1"
              dangerouslySetInnerHTML={{ __html: t('home.teamMembersHtml') }}
            />
          </div>

          <div
            className={`absolute bottom-[20%] ${isAr ? 'right-[5%]' : 'left-[5%]'} w-[180px] h-[180px] bg-[#38e54d] rounded-full flex flex-col items-center justify-center text-[#110222] shadow-[0_10px_30px_rgba(56,229,77,0.3)] hover:-translate-y-2 transition-transform z-20`}
          >
            <img
              src="/assets/images/satisfied-clients-icon.png"
              alt="Clients"
              className="h-10 mb-2"
            />
            <h3 className="text-[30px] font-extrabold">
              <AnimatedCounter end={3860} />
            </h3>
            <p
              className="text-[11px] font-bold text-[#110222]/80 text-center uppercase mt-1"
              dangerouslySetInnerHTML={{ __html: t('home.satisfiedClientsHtml') }}
            />
          </div>

          <div
            className={`absolute bottom-[-5%] ${isAr ? 'left-[35%]' : 'right-[35%]'} w-[140px] h-[140px] bg-[#38e54d] rounded-full flex flex-col items-center justify-center text-[#110222] shadow-[0_10px_30px_rgba(56,229,77,0.3)] hover:-translate-y-2 transition-transform z-10`}
          >
            <img src="/assets/images/awards-win-icon.png" alt="Awards" className="h-7 mb-1" />
            <h3 className="text-2xl font-extrabold">
              <AnimatedCounter end={180} />+
            </h3>
            <p
              className="text-[9px] font-bold text-[#110222]/80 text-center uppercase mt-1"
              dangerouslySetInnerHTML={{ __html: t('home.awardsWinHtml') }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
