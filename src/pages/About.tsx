import React, { useState, useEffect, useRef } from 'react'
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'

// --- Interfaces ---
interface FadeInSectionProps {
  children: React.ReactNode
  delay?: number
}

interface AnimatedCounterProps {
  end: number
  duration?: number
}

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  isAr: boolean
}

// --- Helper Components ---
const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          observer.unobserve(domRef.current!)
        }
      },
      { threshold: 0.1 },
    )
    if (domRef.current) observer.observe(domRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTimestamp: number | null = null
          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)
            setCount(Math.floor(progress * end))
            if (progress < 1) window.requestAnimationFrame(step)
          }
          window.requestAnimationFrame(step)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return <span ref={ref}>{count}</span>
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isAr }) => {
  const [isOpen, setIsOpen] = useState(false)

  // Determine chevron direction based on language and open state
  const getArrowClass = () => {
    if (isOpen) return 'rotate-90 text-[#38e54d]'
    return isAr ? 'rotate-180' : ''
  }

  return (
    <div className="bg-[#1f0f38] border border-[#38e54d]/20 mb-4 shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:border-[#38e54d]/60 group">
      <button
        className="w-full px-6 py-6 flex justify-between items-center transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-5">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
              isOpen ? 'bg-[#38e54d] text-[#110222]' : 'bg-white/5 text-[#38e54d] group-hover:bg-[#38e54d]/20'
            }`}
          >
            <span className="text-2xl font-black leading-none pb-1">{isOpen ? '-' : '+'}</span>
          </div>
          <span
            className={`text-[16px] font-bold text-${isAr ? 'right' : 'left'} transition-colors duration-300 ${
              isOpen ? 'text-[#38e54d]' : 'text-white group-hover:text-[#38e54d]'
            }`}
          >
            {title}
          </span>
        </div>
        <span
          className={`text-gray-400 font-bold text-xl transition-transform duration-300 ${getArrowClass()}`}
        >
          ›
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div
          className={`px-6 pb-8 pt-0 text-gray-300 text-[15px] leading-relaxed space-y-3 ${
            isAr ? 'sm:pr-[84px]' : 'sm:pl-[84px]'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

// --- Main About Component ---
export default function About() {
  const { t, i18n } = useTranslation()
  const isAr = i18n.language === 'ar'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="w-full bg-white font-sans overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#100324] to-[#0a2e16] py-20 lg:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className={`lg:w-1/2 ${isAr ? 'text-right' : 'text-left'}`}>
            <FadeInSection>
              <h6 className="text-[#38e54d] font-bold tracking-[0.2em] mb-4 text-sm uppercase">
                {t('aboutUs')}
              </h6>
              <h2 className="text-white text-4xl md:text-[50px] font-extrabold mb-6 leading-[1.1]">
                {t('aboutHeroTitle')}
              </h2>
              <p className="text-[#8492a6] text-lg mb-8 leading-relaxed max-w-lg">
                {t('aboutHeroDesc')}
              </p>
            </FadeInSection>

            <FadeInSection delay={200}>
              <ul className="space-y-4 mb-10 max-w-lg">
                {[0, 1, 2, 3].map(idx => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="text-[#38e54d] mt-1 shrink-0" size={20} />
                    <span className="text-white font-medium leading-relaxed text-[15px]">
                      {t(`aboutBullets_${idx}`)}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`bg-[#38e54d] hover:bg-[#2ebf40] text-[#110222] font-bold py-3.5 px-8 rounded-full shadow-[0_4px_15px_rgba(56,229,77,0.3)] hover:-translate-y-1 transition-transform flex items-center gap-2 ${
                  isAr ? 'flex-row-reverse' : ''
                } w-max`}
              >
                {t('getStarted')} {isAr ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
              </button>
            </FadeInSection>
          </div>

          <div className="lg:w-1/2 relative w-full flex justify-center mt-12 lg:mt-0">
            <FadeInSection delay={400}>
              <div className="relative w-full max-w-[500px]">
                {/* 30+ Years Experience Animated Badge */}
                <div
                  className={`absolute -top-6 ${
                    isAr ? '-left-6 md:-left-10' : '-right-6 md:-right-10'
                  } bg-[#38e54d] text-[#110222] w-[120px] h-[120px] rounded-full flex flex-col justify-center items-center shadow-2xl border-[6px] border-[#0a2e16] z-20 hover:scale-105 transition-transform`}
                >
                  <span className="text-3xl font-extrabold">
                    <AnimatedCounter end={30} />+
                  </span>
                  <span className="text-[10px] text-center leading-tight font-bold mt-1 uppercase">
                    {t('yearsExp1')}
                    <br />
                    {t('yearsExp2')}
                  </span>
                </div>
                <img
                  src="/assets/images/saudi-people-office-composition_1284-21889-1.jpg"
                  alt="Team Office"
                  className={`w-full h-auto rounded-[30px] ${
                    isAr ? 'rounded-bl-none' : 'rounded-br-none'
                  } shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-cover`}
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 2. TEAM MEMBERS */}
      <section className="py-24 bg-[#fafbfc]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* Left Text Block */}
          <div className={`lg:w-1/3 ${isAr ? 'text-right' : 'text-left'}`}>
            <FadeInSection>
              <h2 className="text-[#110222] text-3xl md:text-[38px] font-black mb-6 uppercase leading-tight tracking-tight whitespace-pre-line">
                {t('teamSection')}
              </h2>
              <p className="text-gray-500 mb-8 text-[14px] leading-relaxed font-medium">
                {t('teamDesc')}
              </p>
              <button
                className={`bg-[#4ade80] hover:bg-[#38c966] text-[#110222] font-bold py-3 px-6 rounded-full shadow-[0_4px_15px_rgba(74,222,128,0.3)] hover:-translate-y-1 transition-transform flex items-center gap-2 text-sm w-max ${
                  isAr ? 'flex-row-reverse' : ''
                }`}
              >
                {t('getStarted')} {isAr ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              </button>
            </FadeInSection>
          </div>

          {/* Right Cards Block */}
          <div className="lg:w-2/3 w-full">
            {/* Top Row: 2 Cards */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
              <FadeInSection delay={100}>
                <div className="bg-white rounded-xl shadow-lg shadow-gray-200/50 overflow-hidden group hover:-translate-y-2 transition-transform duration-300 w-full sm:w-[260px] flex flex-col h-[340px]">
                  <div className="h-[240px] w-full overflow-hidden bg-gray-100">
                    <img
                      src="/assets/images/Untitled-design7.png"
                      alt="Abdullah Abbas"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="bg-[#4ade80] p-4 text-center flex-grow flex flex-col justify-center">
                    <h4 className="text-[18px] font-extrabold text-white mb-1">Abdullah Abbas</h4>
                    <p className="text-[#110222]/80 font-medium text-[13px]">{t('coFounder')}</p>
                  </div>
                </div>
              </FadeInSection>

              <FadeInSection delay={200}>
                <div className="bg-white rounded-xl shadow-lg shadow-gray-200/50 overflow-hidden group hover:-translate-y-2 transition-transform duration-300 w-full sm:w-[260px] flex flex-col h-[340px]">
                  <div className="h-[240px] w-full overflow-hidden bg-gray-100">
                    <img
                      src="/assets/images/WhatsApp-Image-2025-01-14-at-4.59.48-AM.jpeg"
                      alt="Al Hussain Abbas"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="bg-[#4ade80] p-4 text-center flex-grow flex flex-col justify-center">
                    <h4 className="text-[18px] font-extrabold text-white mb-1">Al Hussain Abbas</h4>
                    <p className="text-[#110222]/80 font-medium text-[13px]">{t('coFounder')}</p>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Bottom Row: 1 Centered Card */}
            <div className="flex justify-center">
              <FadeInSection delay={300}>
                <div className="bg-white rounded-xl shadow-lg shadow-gray-200/50 overflow-hidden group hover:-translate-y-2 transition-transform duration-300 w-full sm:w-[260px] flex flex-col h-[340px]">
                  <div className="h-[240px] w-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img
                      src="/assets/images/Design-sans-titre-2025-04-16T182133.711.png"
                      alt="Omar Trkzi"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={e =>
                        (e.currentTarget.src =
                          'https://placehold.co/400x400/f0f4f8/2b1055?text=Omar+Trkzi')
                      }
                    />
                  </div>
                  <div className="bg-[#4ade80] p-4 text-center flex-grow flex flex-col justify-center">
                    <h4 className="text-[18px] font-extrabold text-white mb-1">Omar Trkzi</h4>
                    <p className="text-[#110222]/80 font-medium text-[13px] leading-tight">
                      {t('engTitle1')}
                      <br />
                      {t('engTitle2')}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS & FAQs */}
      <section className="py-24 bg-gradient-to-b from-[#100324] to-[#1e0a3c]">
        {/* Testimonials */}
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-center mb-24">
          <FadeInSection>
            <div className="flex flex-col gap-6 relative w-full md:w-[350px] items-center justify-center min-h-[350px]">
              {/* Subtle background glow circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-white/5 rounded-full -z-10 blur-xl"></div>

              <img
                src="/assets/images/City-baby-90×50-1-e1741524807594-300x154.png"
                alt="City Baby"
                className={`w-48 bg-white shadow-2xl rounded-[40px] p-4 hover:-translate-y-2 transition-transform ${
                  isAr ? 'md:-mr-24' : 'md:-ml-24'
                }`}
              />
              <div
                className={`w-36 h-36 bg-white shadow-2xl rounded-full flex items-center justify-center font-serif text-4xl text-[#2b1055] italic hover:-translate-y-2 transition-transform ${
                  isAr ? 'md:mr-24' : 'md:ml-24'
                }`}
              >
                Touch
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className={`pt-4 ${isAr ? 'text-right md:pr-10' : 'text-left md:pl-10'}`}>
              <h2 className="text-[32px] md:text-[38px] font-medium text-white mb-6 leading-tight whitespace-pre-line">
                {t('testSection')}
              </h2>
              <p className="text-gray-300 mb-8 text-[15px] leading-relaxed max-w-lg">
                {t('testDesc')}
              </p>
              <div>
                <p className="font-bold text-[#38e54d] text-sm">John Doe</p>
                <p className="font-bold text-white text-sm">{t('clientLabel')}</p>
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto px-4 mt-20">
          <FadeInSection delay={100}>
            <AccordionItem title={t('faq1Title')} isAr={isAr}>
              <p>
                <b className="text-[#38e54d]">{t('faqState')}</b> {t('faq1StateText')}
              </p>
              <p>
                <b className="text-[#38e54d]">{t('faqExpl')}</b> {t('faq1ExplText')}
              </p>
              <p>
                <b className="text-[#38e54d]">{t('faqEvid')}</b> {t('faq1EvidText')}
              </p>
              <p>
                <b className="text-[#38e54d]">{t('faqAct')}</b>{' '}
                <b className="text-white">{t('faq1ActLink')}</b> {t('faq1ActText')}
              </p>
            </AccordionItem>
          </FadeInSection>

          <FadeInSection delay={200}>
            <AccordionItem title={t('faq2Title')} isAr={isAr}>
              <p>
                <b className="text-[#38e54d]">{t('faqState')}</b> {t('faq2StateText')}
              </p>
              <p>
                <b className="text-[#38e54d]">{t('faqExpl')}</b> {t('faq2ExplText')}
              </p>
              <p>
                <b className="text-[#38e54d]">{t('faqEvid')}</b> {t('faq2EvidText')}
              </p>
              <p>
                <b className="text-[#38e54d]">{t('faqAct')}</b>{' '}
                <b className="text-white">{t('faq2ActLink')}</b> {t('faq2ActText')}
              </p>
            </AccordionItem>
          </FadeInSection>

          <FadeInSection delay={300}>
            <AccordionItem title={t('faq3Title')} isAr={isAr}>
              <p>
                <b className="text-[#38e54d]">{t('faqState')}</b> {t('faq3StateText')}
              </p>
              <p>
                <b className="text-[#38e54d]">{t('faqExpl')}</b> {t('faq3ExplText')}
              </p>
              <p>
                <b className="text-[#38e54d]">{t('faqEvid')}</b> {t('faq3EvidText')}
              </p>
              <p>
                <b className="text-[#38e54d]">{t('faqAct')}</b>{' '}
                <b className="text-white">{t('faq3ActLink')}</b> {t('faq3ActText')}
              </p>
            </AccordionItem>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}