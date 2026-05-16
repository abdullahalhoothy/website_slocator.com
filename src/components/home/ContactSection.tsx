import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Phone, Mail, MonitorSmartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FadeIn } from '../animations/FadeIn'

type HexagonData = {
  id: string
  type: 'image' | 'light' | 'dark'
  linkedinHandle?: string
  name?: string
  lang?: string
}

const Hexagon = ({ data }: { data: HexagonData }) => {
  const [imageFailed, setImageFailed] = useState(false)

  if (data.type === 'light' || data.type === 'dark') {
    return (
      <div className="w-[90px] h-[105px] md:w-[110px] md:h-[125px] relative">
        <div
          className={`w-full h-full ${data.type === 'light' ? 'bg-[#bfe0f0]' : 'bg-[#6699b8]'}`}
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        />
      </div>
    )
  }

  const avatarUrl = `https://unavatar.io/linkedin/${data.linkedinHandle}`
  const profileUrl = `https://linkedin.com/in/${data.linkedinHandle}`

  const initials = data.name
    ? data.name
        .split(' ')
        .map(n => n[0])
        .join('')
        .substring(0, 2)
        .toUpperCase()
    : ''

  return (
    <div className="relative group w-[90px] h-[105px] md:w-[110px] md:h-[125px] hover:z-50 cursor-pointer">
      <div
        className="w-full h-full transition-transform duration-300 group-hover:scale-105 bg-slate-200 flex items-center justify-center"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
      >
        {!imageFailed ? (
          <img
            src={avatarUrl}
            alt={data.name}
            onError={() => setImageFailed(true)}
            className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:mix-blend-normal group-hover:opacity-100 transition-all"
          />
        ) : (
          <div className="w-full h-full bg-[#00609c] flex items-center justify-center text-white text-2xl md:text-3xl font-light tracking-widest">
            {initials}
          </div>
        )}
      </div>

      <div className="absolute bottom-[90%] left-1/2 -translate-x-1/2 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.15)] rounded border border-slate-100 px-4 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-max min-w-[180px]">
        <div className="font-medium text-slate-800 text-[15px]">{data.name}</div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-xs text-slate-400 tracking-wider">{data.lang}</span>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0077b5] hover:bg-[#005582] transition-colors p-1.5 rounded flex items-center justify-center"
            title={`View ${data.name}'s LinkedIn profile`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="white"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white" />
      </div>
    </div>
  )
}

export const ContactSection: React.FC = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.dir() === 'rtl'

  const rows = [
    [
      { id: '1', type: 'light' },
      {
        id: '2',
        type: 'image',
        linkedinHandle: 'severin-bolliger',
        name: 'Severin Bolliger',
        lang: 'DE | EN',
      },
      { id: '3', type: 'dark' },
      {
        id: '4',
        type: 'image',
        linkedinHandle: 'pieterniemand',
        name: 'Pieter Niemand',
        lang: 'EN | NL',
      },
    ],
    [
      {
        id: '5',
        type: 'image',
        linkedinHandle: 'mitchellglindemann',
        name: 'Mitchell Glindemann',
        lang: 'DE | EN',
      },
      {
        id: '6',
        type: 'image',
        linkedinHandle: 'marvindarmstaedter',
        name: 'Marvin Darmstädter',
        lang: 'DE',
      },
      {
        id: '7',
        type: 'image',
        linkedinHandle: 'bastianrittgen',
        name: 'Bastian Rittgen',
        lang: 'DE | EN',
      },
      {
        id: '8',
        type: 'image',
        linkedinHandle: 'alexejnowototschin',
        name: 'Alexej Nowototschin',
        lang: 'DE | EN | RU',
      },
      {
        id: '9',
        type: 'image',
        linkedinHandle: 'magdalenajovanovic',
        name: 'Magdalena Jovanovic',
        lang: 'DE | EN',
      },
    ],
    [
      { id: '10', type: 'light' },
      {
        id: '11',
        type: 'image',
        linkedinHandle: 'thomasmueller',
        name: 'Thomas Müller',
        lang: 'DE',
      },
      { id: '12', type: 'dark' },
      {
        id: '13',
        type: 'image',
        linkedinHandle: 'sarahschmidt',
        name: 'Sarah Schmidt',
        lang: 'EN | FR',
      },
    ],
    [
      { id: '14', type: 'image', linkedinHandle: 'davidsmith', name: 'David Smith', lang: 'EN' },
      { id: '15', type: 'image', linkedinHandle: 'johndoe', name: 'John Doe', lang: 'EN | ES' },
      { id: '16', type: 'light' },
      { id: '17', type: 'image', linkedinHandle: 'michaelkoch', name: 'Michael Koch', lang: 'DE' },
      { id: '18', type: 'dark' },
    ],
  ] as HexagonData[][]

  return (
    <section className="bg-slate-50 py-24 border-t border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-slate-800 mb-4">
              {t('contactPage.hero.title', 'Contact')}
            </h2>
            <p className="text-lg text-slate-500 font-light">
              {t('contactPage.hero.subtitle', 'How can we help you?')}
            </p>
            <div className="mt-4 text-sm text-slate-400">
              {t('contactPage.hero.availability', 'Available by phone from Mon-Fri, 9-17h KSA')}
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-32">
          <FadeIn direction={isRTL ? 'left' : 'right'}>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
              <h3 className="text-xl font-light text-slate-500 mb-1">
                {t('contactPage.support.pretitle', 'I am already a user and need')}
              </h3>
              <h4 className="text-3xl font-light text-slate-800 mb-8">
                {t('contactPage.support.title', 'Support')}
              </h4>
              <button className="bg-[#00609c] text-white px-8 py-3 rounded hover:bg-[#004d7d] transition-colors mb-8">
                {t('contactPage.support.btn', 'To the HelpCenter')}
              </button>
              <div
                className={`flex flex-col gap-4 text-slate-600 font-light text-sm w-full max-w-xs mx-auto ${isRTL ? 'items-start text-right' : 'items-start text-left'}`}
              >
                <div className="flex items-center gap-3" dir="ltr">
                  <Phone className="w-5 h-5 text-slate-400" /> KSA: +966 55 818 8632
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-slate-400" /> support@s-locator.com
                </div>
                <div className="flex items-start gap-3 mt-4 pt-4 border-t border-slate-100 w-full">
                  <MonitorSmartphone className="w-5 h-5 text-slate-400 mt-1" />
                  <span className={`leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t(
                      'contactPage.support.teamviewer',
                      'Teamviewer: Remote access for S-Locator Support',
                    )}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction={isRTL ? 'right' : 'left'} delay={200}>
            <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
              <h3 className="text-xl font-light text-slate-500 mb-1">
                {t('contactPage.sales.pretitle', 'I am interested and would like')}
              </h3>
              <h4 className="text-3xl font-light text-slate-800 mb-10">
                {t('contactPage.sales.title', 'Buying advice')}
              </h4>
              <div
                className={`flex flex-col gap-4 text-slate-600 font-light text-sm w-full max-w-xs mx-auto ${isRTL ? 'items-start text-right' : 'items-start text-left'}`}
              >
                <div className="flex items-center gap-3" dir="ltr">
                  <Phone className="w-5 h-5 text-slate-400" /> Canada: +1 514-814-5180
                </div>
                <div className="flex items-center gap-3" dir="ltr">
                  <Phone className="w-5 h-5 text-slate-400" /> KSA: +966 55 818 8632
                </div>
                <Link
                  to="/contact"
                  className={`text-[#00609c] cursor-pointer hover:underline mt-2 mb-4 ${isRTL ? 'mr-8' : 'ml-8'}`}
                >
                  {t('common.showMore', 'show more')}
                </Link>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-slate-400" /> sales@s-locator.com
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl font-light text-slate-800 mb-16">
              {t('contactPage.team.title', 'We look forward to our conversation')}
            </h2>
          </FadeIn>

          <div className="flex flex-col items-center pb-20">
            {rows.map((row, rowIndex) => (
              <FadeIn key={rowIndex} direction="up" delay={rowIndex * 150}>
                <div
                  className={`flex justify-center gap-2 md:gap-3 ${rowIndex !== 0 ? '-mt-6 md:-mt-8' : ''}`}
                >
                  {row.map(item => (
                    <Hexagon key={item.id} data={item} />
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
