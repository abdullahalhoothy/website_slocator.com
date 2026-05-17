import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Phone, Mail, MonitorSmartphone, MonitorUp } from 'lucide-react'
import { FadeIn } from '../components/animations/FadeIn'

export const Contact: React.FC = () => {
  const { t, i18n } = useTranslation('landing')
  const isRTL = i18n.dir() === 'rtl'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const teamMembers = [
    {
      name: 'Severin Bolliger',
      lang: 'DE | EN',
      li: 'https://linkedin.com/in/severin-bolliger',
      img: 'https://unavatar.io/linkedin/severin-bolliger',
    },
    {
      name: 'Pieter Niemand',
      lang: 'EN | NL',
      li: 'https://linkedin.com/in/pieterniemand',
      img: 'https://unavatar.io/linkedin/pieterniemand',
    },
    {
      name: 'Mitchell Glindemann',
      lang: 'DE | EN',
      li: 'https://linkedin.com/in/mitchellglindemann',
      img: 'https://unavatar.io/linkedin/mitchellglindemann',
    },
    {
      name: 'Marvin Darmstädter',
      lang: 'DE',
      li: 'https://linkedin.com/in/marvindarmstaedter',
      img: 'https://unavatar.io/linkedin/marvindarmstaedter',
    },
    {
      name: 'Bastian Rittgen',
      lang: 'DE | EN',
      li: 'https://linkedin.com/in/bastianrittgen',
      img: 'https://unavatar.io/linkedin/bastianrittgen',
    },
    {
      name: 'Alexej Nowototschin',
      lang: 'DE | EN | RU',
      li: 'https://linkedin.com/in/alexejnowototschin',
      img: 'https://unavatar.io/linkedin/alexejnowototschin',
    },
    {
      name: 'Magdalena Jovanovic',
      lang: 'DE | EN',
      li: 'https://linkedin.com/in/magdalenajovanovic',
      img: 'https://unavatar.io/linkedin/magdalenajovanovic',
    },
    {
      name: 'Thomas Müller',
      lang: 'DE',
      li: 'https://linkedin.com/in/thomasmueller',
      img: 'https://unavatar.io/linkedin/thomasmueller',
    },
    {
      name: 'Sarah Schmidt',
      lang: 'EN | FR',
      li: 'https://linkedin.com/in/sarahschmidt',
      img: 'https://unavatar.io/linkedin/sarahschmidt',
    },
    {
      name: 'David Smith',
      lang: 'EN',
      li: 'https://linkedin.com/in/davidsmith',
      img: 'https://unavatar.io/linkedin/davidsmith',
    },
    {
      name: 'Michael Koch',
      lang: 'DE',
      li: 'https://linkedin.com/in/michaelkoch',
      img: 'https://unavatar.io/linkedin/michaelkoch',
    },
    {
      name: 'John Doe',
      lang: 'EN | ES',
      li: 'https://linkedin.com/in/johndoe',
      img: 'https://unavatar.io/linkedin/johndoe',
    },
    {
      name: 'Abdullah',
      lang: 'AR | EN',
      li: 'https://linkedin.com/',
      img: 'https://unavatar.io/linkedin/abdullah',
    },
    {
      name: 'Jane Smith',
      lang: 'EN',
      li: 'https://linkedin.com/in/janesmith',
      img: 'https://unavatar.io/linkedin/janesmith',
    },
    {
      name: 'Omar K.',
      lang: 'AR | EN',
      li: 'https://linkedin.com/in/omark',
      img: 'https://unavatar.io/linkedin/omark',
    },
    {
      name: 'Sara M.',
      lang: 'AR | EN',
      li: 'https://linkedin.com/in/saram',
      img: 'https://unavatar.io/linkedin/saram',
    },
    {
      name: 'Youssef T.',
      lang: 'AR | FR',
      li: 'https://linkedin.com/in/yousseft',
      img: 'https://unavatar.io/linkedin/yousseft',
    },
  ]

  return (
    <div
      className={`min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#f5f3ff] selection:text-[#8A2BE2] pb-0 ${isRTL ? 'text-right' : 'text-left'}`}
    >
      {/* 1. Header Section */}
      <section className="bg-white pt-24 pb-12 text-center border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn direction="up">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
              {t('contactPage.hero.title', 'Contact')}
            </h1>
            <h2 className="text-2xl font-light text-slate-500 mb-6">
              {t('contactPage.hero.subtitle', 'How can we help you?')}
            </h2>
            <div className="text-[15px] text-slate-500 font-medium flex items-center justify-center gap-2">
              <MonitorSmartphone className="w-5 h-5 text-[#8A2BE2]" />{' '}
              {t('contactPage.hero.availability', 'Available by phone from Mon-Fri, 9-17h CET')}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Contact Boxes Section */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
              {/* Support Box */}
              <div className="flex-1 bg-white p-10 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center hover:shadow-md transition-shadow">
                <h3 className="text-[17px] font-medium text-slate-500 mb-2">
                  {t('contactPage.support.pretitle', 'I am already a user and need')}
                </h3>
                <h4 className="text-[32px] font-bold text-slate-800 mb-8">
                  {t('contactPage.support.title', 'Support')}
                </h4>
                <button className="bg-[#8A2BE2] text-white px-10 py-3.5 rounded-lg hover:bg-[#6b21a8] transition-colors mb-12 text-[15px] font-bold shadow-md w-full max-w-[250px]">
                  {t('contactPage.support.btn', 'To the HelpCenter')}
                </button>

                <div className="text-left flex flex-col gap-5 text-slate-700 font-medium text-[15px] items-start w-full max-w-xs mx-auto flex-grow">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-[#8A2BE2] shrink-0" />
                    <div className="flex flex-col" dir="ltr">
                      <span>KSA: +966 55 818 8632</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-[#8A2BE2] shrink-0" />
                    <a
                      href="mailto:support@s-locator.com"
                      className="hover:text-[#8A2BE2] transition-colors"
                    >
                      support@s-locator.com
                    </a>
                  </div>
                  <div className="flex items-start gap-4 mt-4 pt-4 border-t border-slate-100 w-full text-slate-600">
                    <MonitorUp className="w-5 h-5 text-[#8A2BE2] shrink-0 mt-0.5" />
                    <a
                      href="#"
                      className={`text-sm hover:text-[#8A2BE2] transition-colors leading-snug ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                      {t(
                        'contactPage.support.teamviewer',
                        'Teamviewer: Remote access for S-Locator Support',
                      )}
                    </a>
                  </div>
                </div>
              </div>

              {/* Sales Box */}
              <div className="flex-1 bg-white p-10 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center hover:shadow-md transition-shadow">
                <h3 className="text-[17px] font-medium text-slate-500 mb-2">
                  {t('contactPage.sales.pretitle', 'I am interested and would like')}
                </h3>
                <h4 className="text-[32px] font-bold text-slate-800 mb-8">
                  {t('contactPage.sales.title', 'Buying advice')}
                </h4>

                <div className="text-left flex flex-col gap-5 text-slate-700 font-medium text-[15px] items-start w-full max-w-xs mx-auto flex-grow mt-4">
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[#489E46] shrink-0 mt-1" />
                    <div className="flex flex-col gap-2" dir="ltr">
                      <span>Canada: +1 514-814-5180</span>
                      <span>KSA: +966 55 818 8632</span>
                    </div>
                  </div>

                  <div className={`w-full ${isRTL ? 'text-right pr-9' : 'text-left pl-9'}`}>
                    <a
                      href="/contact"
                      className="text-sm text-[#00609c] hover:underline cursor-pointer"
                    >
                      {t('common.showMore', 'Show more')}
                    </a>
                  </div>

                  <div className="flex items-center gap-4 mt-2">
                    <Mail className="w-5 h-5 text-[#489E46] shrink-0" />
                    <a
                      href="mailto:sales@s-locator.com"
                      className="hover:text-[#489E46] transition-colors"
                    >
                      sales@s-locator.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. Hexagon Team Section */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <FadeIn direction="up">
            <h3 className="text-3xl font-bold text-slate-800 mb-16">
              {t('contactPage.team.title', 'We look forward to our conversation')}
            </h3>

            <div
              className="flex flex-wrap justify-center max-w-5xl mx-auto px-4 gap-y-2 md:gap-y-0 pb-16"
              dir="ltr"
            >
              {teamMembers.map((member, idx) => {
                const fallbackUrl = `https://ui-avatars.com/api/?name=${member.name || 'User'}&background=f5f3ff&color=8A2BE2`

                return (
                  <div
                    key={idx}
                    className="relative w-[110px] h-[125px] md:w-[130px] md:h-[150px] mx-1 md:mx-2 mb-[-20px] md:mb-[-30px] group"
                  >
                    <div
                      className="w-full h-full bg-[#f5f3ff] transition-transform duration-300 group-hover:-translate-y-2 flex items-center justify-center overflow-hidden border-[3px] border-white shadow-sm"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      }}
                    >
                      <img
                        src={member.img || fallbackUrl}
                        alt={member.name}
                        className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:mix-blend-normal group-hover:opacity-100 transition-all"
                        onError={e => {
                          e.currentTarget.onerror = null
                          e.currentTarget.src = fallbackUrl
                        }}
                      />
                    </div>

                    {member.name && (
                      <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white text-slate-800 px-4 py-2.5 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-[100] flex flex-col items-center border border-slate-100 pointer-events-none group-hover:pointer-events-auto">
                        <span className="font-bold text-[14px] text-slate-700">{member.name}</span>
                        <div className="flex items-center gap-3 mt-1.5">
                          <span className="text-[11px] text-slate-400 font-bold tracking-wide">
                            {member.lang}
                          </span>
                          <a
                            href={member.li || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0a66c2] hover:text-[#004182] transition-colors"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                        </div>
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white transform rotate-45 border-b border-r border-slate-100"></div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

export default Contact
