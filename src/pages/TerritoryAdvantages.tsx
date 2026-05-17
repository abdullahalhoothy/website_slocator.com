import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Check,
  X as XIcon,
  ChevronDown,
  ChevronRight,
  MonitorSmartphone,
  Phone,
  Mail,
  Zap,
  Plus,
  Minus,
} from 'lucide-react'
import { FadeIn } from '../components/animations/FadeIn'
import type { TFunction } from 'i18next'

interface CompItem {
  feature: string
  bad: string
  good: string
  desc: string
}

interface CompCategory {
  id: string
  title: string
  items: CompItem[]
}

const ComparisonRow: React.FC<{ item: CompItem; forceOpen: boolean; t: TFunction }> = ({
  item,
  forceOpen,
  t,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const isExpanded = forceOpen || isOpen

  return (
    <div className="border-b border-slate-200 last:border-0 flex flex-col bg-white">
      <div className="flex flex-col md:flex-row w-full min-h-[80px]">
        <div className="w-full md:w-[40%] flex items-center gap-4 p-5 bg-[#f8fafc] border-r border-slate-100">
          <XIcon className="w-5 h-5 text-red-500 shrink-0" strokeWidth={3} />
          <span className="text-slate-600 font-light text-[15px] leading-snug">{item.bad}</span>
        </div>

        <div className="w-full md:w-[25%] flex flex-col justify-center text-center p-5 bg-white">
          <span className="font-bold text-[#6b21a8] text-[16px] mb-1 leading-snug">
            {item.feature}
          </span>
          {item.desc && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#10b981] hover:text-[#059669] text-[13px] font-medium focus:outline-none flex items-center justify-center gap-1 mx-auto transition-colors"
            >
              {isExpanded
                ? t('territoryAdvantages.table.hideDetails')
                : t('territoryAdvantages.table.whyImportant')}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              />
            </button>
          )}
        </div>

        <div className="w-full md:w-[35%] flex items-center gap-4 p-5 bg-white border-l border-slate-100">
          <Check className="w-6 h-6 text-[#10b981] shrink-0" strokeWidth={3} />
          <span className="text-slate-800 font-medium text-[15px] leading-snug">{item.good}</span>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden bg-slate-50/50 ${isExpanded ? 'max-h-[500px] opacity-100 border-t border-slate-200' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-8 md:px-12 text-slate-600 font-light text-[15px] leading-relaxed italic border-l-4 border-[#6b21a8] m-4 bg-white shadow-sm">
          {item.desc}
        </div>
      </div>
    </div>
  )
}

const ComparisonSection: React.FC<{ category: CompCategory; t: TFunction }> = ({ category, t }) => {
  const [showAll, setShowAll] = useState(false)

  return (
    <div id={category.id} className="scroll-mt-28 mb-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 max-w-4xl mx-auto px-4">
        <div className="w-full md:w-[45%] flex justify-center opacity-60">
          <img
            src={`/assets/images/img-${category.id}-grey.svg`}
            alt="Conventional"
            className="w-full max-w-[250px] object-contain"
            onError={e => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
        <div className="w-full md:w-[45%] flex justify-center">
          <img
            src={`/assets/images/img-${category.id}-to.svg`}
            alt="S-Locator"
            className="w-full max-w-[250px] object-contain drop-shadow-md"
            onError={e => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
      </div>

      <div className="flex flex-col items-center mb-8">
        <h3 className="text-3xl font-medium text-[#6b21a8] mb-6">{category.title}</h3>
        <div className="flex items-center gap-4 bg-[#f3e8ff] p-1.5 rounded-full px-4 border border-purple-100 shadow-inner">
          <span
            className={`text-[13px] font-bold transition-colors ${!showAll ? 'text-[#6b21a8]' : 'text-slate-400'}`}
          >
            {t('territoryAdvantages.table.hideDetails')}
          </span>
          <button
            onClick={() => setShowAll(!showAll)}
            className={`w-12 h-6 rounded-full relative transition-colors focus:outline-none ${showAll ? 'bg-[#6b21a8]' : 'bg-[#d8b4fe]'}`}
          >
            <span
              className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${showAll ? 'left-7' : 'left-1'}`}
            />
          </button>
          <span
            className={`text-[13px] font-bold transition-colors ${showAll ? 'text-[#6b21a8]' : 'text-slate-400'}`}
          >
            {t('territoryAdvantages.table.showDetails')}
          </span>
        </div>
      </div>

      <div className="hidden md:flex w-full mb-4 px-5 text-[14px] uppercase tracking-wider font-bold text-slate-400">
        <div className="w-[40%]">{t('territoryAdvantages.table.conventional')}</div>
        <div className="w-[25%] text-center text-transparent">Feature</div>
        <div className="w-[35%] text-[#6b21a8]">{t('territoryAdvantages.table.slocator')}</div>
      </div>

      <div className="border border-slate-200 shadow-xl rounded-xl overflow-hidden bg-white">
        {category.items.map((item, idx) => (
          <ComparisonRow key={idx} item={item} forceOpen={showAll} t={t} />
        ))}
      </div>
    </div>
  )
}

const TestimonialSlider: React.FC<{ t: TFunction; isRTL: boolean }> = ({ t, isRTL }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const testimonials = [
    {
      logo: '/assets/images/logo-fritz.webp',
      img: '/assets/images/fritz-portrait.webp',
      quote: t(
        'territoryAdvantages.testimonials.items.t1.quote',
        'Being able to control the workload of individual employees during territory planning and knowing that I still have free resources is a very valuable function.',
      ),
      name: 'Erik Kuschke',
      role: 'Channel Sales Manager',
    },
    {
      logo: '/assets/images/logo-reyher.webp',
      img: '/assets/images/reyher-von-bastian.webp',
      quote: t(
        'territoryAdvantages.testimonials.items.t2.quote',
        'Through S-Locator Territory Optimization we have recognized that we can leverage further potential by shifting the boundaries of our sales territories.',
      ),
      name: 'Johannes von Bastian',
      role: 'Manager Sales Controlling',
    },
    {
      logo: '/assets/images/logo-hela.webp',
      img: '/assets/images/portrait-hela.webp',
      quote: t(
        'territoryAdvantages.testimonials.items.t3.quote',
        'For me, S-Locator Territory Optimization is the ideal tool. Within a very short time, target sales territories can be defined, customers identified and measures implemented.',
      ),
      name: 'Jan Markus Eichert',
      role: 'Field sales manager',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto mt-16">
      <div className="bg-white rounded-md shadow-sm border border-slate-100 p-8 md:p-12 mb-8 min-h-[250px] flex items-center relative overflow-hidden">
        {testimonials.map((testim, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row w-full gap-8 transition-opacity duration-500 absolute left-0 px-8 md:px-12 ${idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div className="w-full md:w-1/3 flex flex-col items-center justify-center shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white mb-2 shadow-sm bg-[#f3e8ff]">
                <img
                  src={testim.img}
                  alt={testim.name}
                  className="w-full h-full object-cover"
                  onError={e => (e.currentTarget.style.display = 'none')}
                />
              </div>
              <span className="text-[#6b21a8] text-6xl leading-none font-serif font-bold">“</span>
            </div>
            <div
              className={`w-full md:w-2/3 flex flex-col border-slate-200 ${isRTL ? 'border-r pr-8 text-right' : 'border-l pl-8 text-left'}`}
            >
              <img
                src={testim.logo}
                alt="Company Logo"
                className={`h-6 object-contain self-start mb-6 opacity-80 grayscale ${isRTL ? 'ml-auto mr-0' : ''}`}
                onError={e => (e.currentTarget.style.display = 'none')}
              />
              <p className="text-slate-600 font-light text-[16px] leading-relaxed mb-8">
                {testim.quote}
              </p>
              <div className="mt-auto flex justify-between items-end">
                <div>
                  <div className="text-[#6b21a8] font-medium text-[15px]">{testim.name}</div>
                  <div className="text-slate-400 font-light text-[14px]">{testim.role}</div>
                </div>
                <button className="text-[#10b981] hover:text-[#059669] text-[14px] transition-colors font-medium">
                  {t('territoryAdvantages.testimonials.readMore', 'read more...')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={() => setCurrentSlide(p => (p === 0 ? 2 : p - 1))}
          className="text-[#10b981] hover:text-[#6b21a8] transition-colors focus:outline-none"
        >
          <ChevronRight className={`w-8 h-8 ${isRTL ? '' : 'rotate-180'}`} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none ${idx === currentSlide ? 'bg-[#6b21a8]' : 'bg-transparent border border-[#6b21a8]'}`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrentSlide(p => (p === 2 ? 0 : p + 1))}
          className="text-[#10b981] hover:text-[#6b21a8] transition-colors focus:outline-none"
        >
          <ChevronRight className={`w-8 h-8 ${isRTL ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  )
}

const SimpleFaqAccordion: React.FC<{
  question: string
  answer: React.ReactNode
  isRTL: boolean
}> = ({ question, answer, isRTL }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border-b border-slate-200 last:border-0 py-4 bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between focus:outline-none group px-4 ${isRTL ? 'text-right' : 'text-left'}`}
      >
        <h3
          className={`text-[16px] font-medium text-[#6b21a8] group-hover:text-[#581c87] leading-snug transition-colors ${isRTL ? 'pl-4' : 'pr-4'}`}
        >
          {question}
        </h3>
        <div className="text-[#10b981] shrink-0 transition-colors">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden px-4 ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-slate-600 font-light leading-relaxed text-[15px] pb-2">{answer}</div>
      </div>
    </div>
  )
}

export const TerritoryAdvantages: React.FC = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.dir() === 'rtl'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const COMPARISON_DATA: CompCategory[] = [
    {
      id: 'quality',
      title: t('territoryAdvantages.comparison.quality.title', 'Accuracy & quality'),
      items: [
        {
          feature: t('territoryAdvantages.comparison.quality.items.i1.feature'),
          bad: t('territoryAdvantages.comparison.quality.items.i1.bad'),
          good: t('territoryAdvantages.comparison.quality.items.i1.good'),
          desc: t('territoryAdvantages.comparison.quality.items.i1.desc'),
        },
        {
          feature: t('territoryAdvantages.comparison.quality.items.i2.feature'),
          bad: t('territoryAdvantages.comparison.quality.items.i2.bad'),
          good: t('territoryAdvantages.comparison.quality.items.i2.good'),
          desc: t('territoryAdvantages.comparison.quality.items.i2.desc'),
        },
        {
          feature: t('territoryAdvantages.comparison.quality.items.i3.feature'),
          bad: t('territoryAdvantages.comparison.quality.items.i3.bad'),
          good: t('territoryAdvantages.comparison.quality.items.i3.good'),
          desc: t('territoryAdvantages.comparison.quality.items.i3.desc'),
        },
        {
          feature: t('territoryAdvantages.comparison.quality.items.i4.feature'),
          bad: t('territoryAdvantages.comparison.quality.items.i4.bad'),
          good: t('territoryAdvantages.comparison.quality.items.i4.good'),
          desc: t('territoryAdvantages.comparison.quality.items.i4.desc'),
        },
        {
          feature: t('territoryAdvantages.comparison.quality.items.i5.feature'),
          bad: t('territoryAdvantages.comparison.quality.items.i5.bad'),
          good: t('territoryAdvantages.comparison.quality.items.i5.good'),
          desc: t('territoryAdvantages.comparison.quality.items.i5.desc'),
        },
        {
          feature: t('territoryAdvantages.comparison.quality.items.i6.feature'),
          bad: t('territoryAdvantages.comparison.quality.items.i6.bad'),
          good: t('territoryAdvantages.comparison.quality.items.i6.good'),
          desc: t('territoryAdvantages.comparison.quality.items.i6.desc'),
        },
        {
          feature: t('territoryAdvantages.comparison.quality.items.i7.feature'),
          bad: t('territoryAdvantages.comparison.quality.items.i7.bad'),
          good: t('territoryAdvantages.comparison.quality.items.i7.good'),
          desc: t('territoryAdvantages.comparison.quality.items.i7.desc'),
        },
        {
          feature: t('territoryAdvantages.comparison.quality.items.i8.feature'),
          bad: t('territoryAdvantages.comparison.quality.items.i8.bad'),
          good: t('territoryAdvantages.comparison.quality.items.i8.good'),
          desc: t('territoryAdvantages.comparison.quality.items.i8.desc'),
        },
        {
          feature: t('territoryAdvantages.comparison.quality.items.i9.feature'),
          bad: t('territoryAdvantages.comparison.quality.items.i9.bad'),
          good: t('territoryAdvantages.comparison.quality.items.i9.good'),
          desc: t('territoryAdvantages.comparison.quality.items.i9.desc'),
        },
        {
          feature: t('territoryAdvantages.comparison.quality.items.i10.feature'),
          bad: t('territoryAdvantages.comparison.quality.items.i10.bad'),
          good: t('territoryAdvantages.comparison.quality.items.i10.good'),
          desc: t('territoryAdvantages.comparison.quality.items.i10.desc'),
        },
      ],
    },
    {
      id: 'bereitstellung',
      title: t('territoryAdvantages.comparison.provision.title', 'Provision for users'),
      items: [
        {
          feature: t('territoryAdvantages.comparison.provision.items.i1.feature'),
          bad: t('territoryAdvantages.comparison.provision.items.i1.bad'),
          good: t('territoryAdvantages.comparison.provision.items.i1.good'),
          desc: t('territoryAdvantages.comparison.provision.items.i1.desc'),
        },
        {
          feature: t('territoryAdvantages.comparison.provision.items.i2.feature'),
          bad: t('territoryAdvantages.comparison.provision.items.i2.bad'),
          good: t('territoryAdvantages.comparison.provision.items.i2.good'),
          desc: t('territoryAdvantages.comparison.provision.items.i2.desc'),
        },
        {
          feature: t('territoryAdvantages.comparison.provision.items.i3.feature'),
          bad: t('territoryAdvantages.comparison.provision.items.i3.bad'),
          good: t('territoryAdvantages.comparison.provision.items.i3.good'),
          desc: t('territoryAdvantages.comparison.provision.items.i3.desc'),
        },
        {
          feature: t('territoryAdvantages.comparison.provision.items.i4.feature'),
          bad: t('territoryAdvantages.comparison.provision.items.i4.bad'),
          good: t('territoryAdvantages.comparison.provision.items.i4.good'),
          desc: t('territoryAdvantages.comparison.provision.items.i4.desc'),
        },
        {
          feature: t('territoryAdvantages.comparison.provision.items.i5.feature'),
          bad: t('territoryAdvantages.comparison.provision.items.i5.bad'),
          good: t('territoryAdvantages.comparison.provision.items.i5.good'),
          desc: t('territoryAdvantages.comparison.provision.items.i5.desc'),
        },
      ],
    },
    {
      id: 'benutzerfreundlich',
      title: t('territoryAdvantages.comparison.userFriendliness.title', 'User friendliness'),
      items: [
        {
          feature: t('territoryAdvantages.comparison.userFriendliness.items.i1.feature'),
          bad: t('territoryAdvantages.comparison.userFriendliness.items.i1.bad'),
          good: t('territoryAdvantages.comparison.userFriendliness.items.i1.good'),
          desc: t('territoryAdvantages.comparison.userFriendliness.items.i1.desc'),
        },
        {
          feature: t('territoryAdvantages.comparison.userFriendliness.items.i2.feature'),
          bad: t('territoryAdvantages.comparison.userFriendliness.items.i2.bad'),
          good: t('territoryAdvantages.comparison.userFriendliness.items.i2.good'),
          desc: t('territoryAdvantages.comparison.userFriendliness.items.i2.desc'),
        },
        {
          feature: t('territoryAdvantages.comparison.userFriendliness.items.i3.feature'),
          bad: t('territoryAdvantages.comparison.userFriendliness.items.i3.bad'),
          good: t('territoryAdvantages.comparison.userFriendliness.items.i3.good'),
          desc: t('territoryAdvantages.comparison.userFriendliness.items.i3.desc'),
        },
        {
          feature: t('territoryAdvantages.comparison.userFriendliness.items.i4.feature'),
          bad: t('territoryAdvantages.comparison.userFriendliness.items.i4.bad'),
          good: t('territoryAdvantages.comparison.userFriendliness.items.i4.good'),
          desc: t('territoryAdvantages.comparison.userFriendliness.items.i4.desc'),
        },
        {
          feature: t('territoryAdvantages.comparison.userFriendliness.items.i5.feature'),
          bad: t('territoryAdvantages.comparison.userFriendliness.items.i5.bad'),
          good: t('territoryAdvantages.comparison.userFriendliness.items.i5.good'),
          desc: t('territoryAdvantages.comparison.userFriendliness.items.i5.desc'),
        },
      ],
    },
    {
      id: 'optimierung',
      title: t('territoryAdvantages.comparison.optimization.title', 'Optimization capabilities'),
      items: [
        {
          feature: t('territoryAdvantages.comparison.optimization.items.i1.feature'),
          bad: t('territoryAdvantages.comparison.optimization.items.i1.bad'),
          good: t('territoryAdvantages.comparison.optimization.items.i1.good'),
          desc: t('territoryAdvantages.comparison.optimization.items.i1.desc'),
        },
        {
          feature: t('territoryAdvantages.comparison.optimization.items.i2.feature'),
          bad: t('territoryAdvantages.comparison.optimization.items.i2.bad'),
          good: t('territoryAdvantages.comparison.optimization.items.i2.good'),
          desc: t('territoryAdvantages.comparison.optimization.items.i2.desc'),
        },
        {
          feature: t('territoryAdvantages.comparison.optimization.items.i3.feature'),
          bad: t('territoryAdvantages.comparison.optimization.items.i3.bad'),
          good: t('territoryAdvantages.comparison.optimization.items.i3.good'),
          desc: t('territoryAdvantages.comparison.optimization.items.i3.desc'),
        },
      ],
    },
  ]

  return (
    <div
      className={`min-h-screen bg-white font-sans text-slate-900 selection:bg-[#f3e8ff] selection:text-[#6b21a8] ${isRTL ? 'text-right' : 'text-left'}`}
    >
      <section className="bg-white pt-24 pb-20 text-center border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn direction="up">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#6b21a8] mb-6">
              {t('territoryAdvantages.hero.title')}
            </h1>
            <h2 className="text-xl font-medium text-slate-800 mb-10">
              {t('territoryAdvantages.hero.subtitle')}
            </h2>
            <a
              href="/demo"
              className="inline-block bg-[#6b21a8] text-white px-10 py-4 rounded font-medium hover:bg-[#581c87] transition-all shadow-md"
            >
              {t('territoryAdvantages.hero.demo')}
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 bg-[#f8fafc]">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/4 hidden lg:block">
            <div className="sticky top-28 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h4 className="text-[#6b21a8] font-bold text-sm uppercase mb-4 tracking-widest border-b border-[#f3e8ff] pb-4">
                {t('territoryAdvantages.sidebar.title')}
              </h4>
              <ul className="flex flex-col gap-4">
                {COMPARISON_DATA.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => scrollToSection(cat.id)}
                      className={`w-full text-[15px] text-[#10b981] hover:text-[#6b21a8] hover:underline font-medium transition-colors border-b border-slate-50 pb-2 ${isRTL ? 'text-right' : 'text-left'}`}
                    >
                      {cat.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-3/4 flex flex-col gap-24">
            {COMPARISON_DATA.map(cat => (
              <ComparisonSection key={cat.id} category={cat} t={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-slate-200 bg-white relative">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="w-16 h-16 mx-auto bg-[#ecfdf5] rounded-full flex items-center justify-center mb-6">
            <Zap className="w-8 h-8 text-[#10b981]" />
          </div>
          <p className="text-slate-600 font-light text-[18px] leading-relaxed max-w-4xl mx-auto">
            {t('territoryAdvantages.infoBox.p1')}
            <strong className="text-[#6b21a8]">{t('territoryAdvantages.infoBox.s1')}</strong>
            {t('territoryAdvantages.infoBox.p2')}
            <strong className="text-[#6b21a8]"> {t('territoryAdvantages.infoBox.s2')} </strong>
            {t('territoryAdvantages.infoBox.p3')}
            <a
              href="/territory-optimization/cost-savings"
              className="text-[#10b981] hover:text-[#6b21a8] hover:underline font-medium transition-colors"
            >
              {t('territoryAdvantages.infoBox.link')}
            </a>
          </p>
        </div>
      </section>

      <section className="bg-[#f3e8ff] py-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn direction="up">
            <h3 className="text-3xl font-bold text-[#6b21a8] mb-4">
              {t('territoryAdvantages.resultsCta.title')}
            </h3>
            <p className="text-lg text-[#10b981] font-medium mb-8">
              {t('territoryAdvantages.resultsCta.desc')}
            </p>
            <a
              href="/territory-optimization"
              className="inline-block bg-[#6b21a8] text-white px-8 py-3.5 rounded font-medium hover:bg-[#581c87] transition-all shadow-md"
            >
              {t('territoryAdvantages.resultsCta.btn')}
            </a>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl lg:text-[40px] font-bold text-[#6b21a8] text-center mb-12">
            {t('territoryAdvantages.faqs.title')}
          </h2>
          <div className="flex flex-col border-t border-slate-200">
            {[1, 2, 3, 4, 5].map(num => (
              <SimpleFaqAccordion
                key={num}
                question={t(`territoryAdvantages.faqs.items.q${num}`)}
                answer={t(`territoryAdvantages.faqs.items.a${num}`)}
                isRTL={isRTL}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#f8fafc] border-b border-slate-200 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-[36px] font-bold text-[#6b21a8] mb-4">
            {t('territoryAdvantages.testimonials.title')}
          </h2>
          <p className="text-lg text-[#10b981] font-medium mb-12">
            {t('territoryAdvantages.testimonials.desc')}
          </p>
          <TestimonialSlider t={t} isRTL={isRTL} />
        </div>
      </section>

      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#6b21a8] mb-6">
            {t('territoryAdvantages.pricing.title')}
          </h2>
          <p className="text-lg text-[#10b981] font-medium max-w-2xl mx-auto mb-16">
            {t('territoryAdvantages.pricing.desc')}
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-[#f3e8ff] p-10 rounded-xl shadow-sm border border-purple-100 flex flex-col items-center">
              <div className="text-6xl font-light text-[#6b21a8] mb-2">3</div>
              <div className="text-2xl font-bold text-slate-800 mb-6">
                {t('territoryAdvantages.pricing.m3')}
              </div>
              <hr className="w-16 border-t-2 border-[#10b981] mb-6" />
              <p className="text-[#6b21a8] font-light mb-8 flex-grow">
                {t('territoryAdvantages.pricing.m3Desc')}
              </p>
              <button className="w-full bg-white border-2 border-[#6b21a8] text-[#6b21a8] hover:bg-[#6b21a8] hover:text-white py-3 rounded font-bold transition-colors">
                {t('territoryAdvantages.pricing.btn')}
              </button>
            </div>
            <div className="bg-[#6b21a8] p-10 rounded-xl shadow-md border border-[#6b21a8] flex flex-col items-center relative">
              <div
                className={`absolute top-0 ${isRTL ? 'left-0 rounded-br-lg rounded-tl-xl' : 'right-0 rounded-bl-lg rounded-tr-xl'} bg-[#10b981] text-white text-xs font-bold px-3 py-1`}
              >
                {t('territoryAdvantages.pricing.popular')}
              </div>
              <div className="text-6xl font-light text-white mb-2">12</div>
              <div className="text-2xl font-bold text-white mb-6">
                {t('territoryAdvantages.pricing.m12')}
              </div>
              <hr className="w-16 border-t-2 border-[#10b981] mb-6" />
              <p className="text-purple-100 font-light mb-8 flex-grow">
                {t('territoryAdvantages.pricing.m12Desc')}
              </p>
              <button className="w-full bg-white text-[#6b21a8] hover:bg-slate-100 py-3 rounded font-bold transition-colors">
                {t('territoryAdvantages.pricing.btn')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#6b21a8] py-20 text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl lg:text-[40px] font-bold text-white mb-6">
            {t('territoryAdvantages.demoCta.title')}
          </h2>
          <p className="text-purple-100 text-lg font-light mb-10 max-w-2xl mx-auto">
            {t('territoryAdvantages.demoCta.desc')}
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <span className="text-[#10b981] text-sm uppercase tracking-wider font-bold bg-white px-3 py-1 rounded-full">
              {t('territoryAdvantages.demoCta.f1')}
            </span>
            <span className="text-[#10b981] text-sm uppercase tracking-wider font-bold bg-white px-3 py-1 rounded-full">
              {t('territoryAdvantages.demoCta.f2')}
            </span>
            <span className="text-[#10b981] text-sm uppercase tracking-wider font-bold bg-white px-3 py-1 rounded-full">
              {t('territoryAdvantages.demoCta.f3')}
            </span>
          </div>
          <button className="bg-[#10b981] text-white px-10 py-4 rounded font-bold hover:bg-[#059669] transition-colors shadow-lg">
            {t('territoryAdvantages.demoCta.btn')}
          </button>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-24 text-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold text-[#6b21a8] mb-4">{t('contactPage.hero.title')}</h2>
          <h3 className="text-xl text-[#10b981] font-medium">{t('contactPage.hero.subtitle')}</h3>
          <div className="mt-8 text-[15px] text-slate-500 font-light flex items-center justify-center gap-2">
            <MonitorSmartphone className="w-4 h-4 text-[#10b981]" />{' '}
            {t('contactPage.hero.availability')}
          </div>

          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mt-16">
            <div className="flex-1 bg-[#f3e8ff]/50 p-10 rounded-xl shadow-sm border border-purple-100 text-center flex flex-col items-center">
              <h3 className="text-[17px] font-medium text-[#10b981] mb-2">
                {t('contactPage.support.pretitle')}
              </h3>
              <h4 className="text-[32px] font-bold text-[#6b21a8] mb-8">
                {t('contactPage.support.title')}
              </h4>
              <button className="bg-[#6b21a8] text-white px-8 py-3.5 rounded hover:bg-[#581c87] transition-colors mb-10 text-[15px] font-medium">
                {t('contactPage.support.btn')}
              </button>
              <div
                className={`flex flex-col gap-4 text-[#6b21a8] font-medium text-[15px] w-full max-w-xs mx-auto ${isRTL ? 'items-start text-right' : 'items-start text-left'}`}
              >
                <div className="flex items-center gap-3" dir="ltr">
                  <Phone className="w-5 h-5 text-[#10b981]" /> KSA: +966 55 818 8632
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <Mail className="w-5 h-5 text-[#10b981]" /> support@s-locator.com
                </div>
              </div>
            </div>
            <div className="flex-1 bg-[#f3e8ff]/50 p-10 rounded-xl shadow-sm border border-purple-100 text-center flex flex-col items-center">
              <h3 className="text-[17px] font-medium text-[#10b981] mb-2">
                {t('contactPage.sales.pretitle')}
              </h3>
              <h4 className="text-[32px] font-bold text-[#6b21a8] mb-8">
                {t('contactPage.sales.title')}
              </h4>
              <div
                className={`flex flex-col gap-4 text-[#6b21a8] font-medium text-[15px] w-full max-w-xs mx-auto mt-2 ${isRTL ? 'items-start text-right' : 'items-start text-left'}`}
              >
                <div className="flex items-center gap-3" dir="ltr">
                  <Phone className="w-5 h-5 text-[#10b981]" /> Canada: +1 514-814-5180
                </div>
                <div className="flex items-center gap-3" dir="ltr">
                  <Phone className="w-5 h-5 text-[#10b981]" /> KSA: +966 55 818 8632
                </div>
                <a
                  href="/contact"
                  className="text-[#a0a0a0] cursor-pointer hover:text-[#6b21a8] ml-8 mb-2 transition-colors"
                >
                  {t('common.showMore')}
                </a>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#10b981]" /> sales@s-locator.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TerritoryAdvantages
