import React, { useState, useEffect, useRef } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, CheckCircle2, Quote } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { solutionsData } from '../data/pagesData'

// --- Interfaces ---
interface FadeInSectionProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
  isAr?: boolean
}

interface UseCase {
  icon: React.ReactNode
  title: string
  desc: string
}

// --- Helper Components ---
const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  delay = 0,
  direction = 'up',
  isAr = false,
}) => {
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

  const getTransform = () => {
    if (isVisible) return 'translate-x-0 translate-y-0'
    if (direction === 'up') return 'translate-y-16'
    if (direction === 'left') return isAr ? 'translate-x-16' : '-translate-x-16'
    if (direction === 'right') return isAr ? '-translate-x-16' : 'translate-x-16'
    return 'translate-y-16'
  }

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getTransform()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// --- Main Solution Page Component ---
export default function Solution() {
  const { slug } = useParams()
  const { t, i18n } = useTranslation()
  const solutionData = slug ? solutionsData[slug] : null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!solutionData) {
    return <Navigate to="/" replace />
  }

  const isAr = i18n.language === 'ar'
  const content = solutionData[isAr ? 'ar' : 'en']
  const images = solutionData

  return (
    <div className="w-full font-sans text-gray-800 bg-white overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-[#100324] via-[#1a0535] to-[#100324] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className={`lg:w-1/2 text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}>
              <FadeInSection direction="left" isAr={isAr}>
                <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-[#38e54d] text-sm font-bold uppercase mb-6">
                  {t('ourSolutions')}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-black leading-tight mb-6">
                  {content.titlePart1}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38e54d] to-[#8eea9e]">
                    {content.titlePart2}
                  </span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                  {content.heroDesc}
                </p>
                <div
                  className={`flex flex-col sm:flex-row items-center gap-4 ${
                    isAr ? 'lg:justify-end' : 'lg:justify-start'
                  }`}
                >
                  <a
                    href="/contact"
                    className={`bg-[#38e54d] text-[#110222] font-bold py-3.5 px-8 rounded-full flex items-center gap-2 ${
                      isAr ? 'flex-row-reverse' : ''
                    }`}
                  >
                    {t('contactUs')} {isAr ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                  </a>
                </div>
              </FadeInSection>
            </div>
            <div className="lg:w-1/2 relative w-full max-w-lg mx-auto">
              <FadeInSection direction="right" delay={200} isAr={isAr}>
                <img
                  src={images.heroImage}
                  alt="Hero"
                  className="relative z-10 w-full h-auto drop-shadow-2xl animate-float"
                />
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES SECTION */}
      <section className="py-24 bg-[#fafbfc]">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInSection>
            <h2 className="text-[#2b1055] text-4xl md:text-[42px] font-black mb-16 text-center">
              {t('keyFeatures')}
            </h2>
          </FadeInSection>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
            {content.featuresList?.map((feature: string, idx: number) => (
              <FadeInSection key={idx} delay={idx * 150} direction="up" isAr={isAr}>
                <div className="bg-white p-8 rounded-2xl flex items-start gap-4">
                  <div
                    className={`bg-[#e0fbc9] p-3 rounded-full text-[#2db83e] mt-1 ${
                      isAr ? 'ml-2' : 'mr-2'
                    }`}
                  >
                    <CheckCircle2 size={24} />
                  </div>
                  <p className="text-gray-700 font-medium text-lg leading-relaxed">{feature}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. USE CASES SECTION */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h6 className="text-[#38e54d] font-bold tracking-widest text-sm mb-3 uppercase">
                {t('applications')}
              </h6>
              <h2 className="text-[#2b1055] text-4xl md:text-[42px] font-black mb-4">
                {t('useCases')}
              </h2>
            </div>
          </FadeInSection>
          <div className="grid md:grid-cols-3 gap-8">
            {content.useCasesList?.map((useCase: UseCase, idx: number) => (
              <FadeInSection key={idx} delay={idx * 200}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-10 rounded-[30px] text-center border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                  <div className="w-20 h-20 mx-auto bg-[#100324] text-[#38e54d] rounded-2xl flex items-center justify-center mb-8">
                    {useCase.icon}
                  </div>
                  <h3 className="text-[#2b1055] text-2xl font-bold mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">{useCase.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DETAILS SECTION */}
      <section className="py-20 bg-[#fafbfc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 space-y-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 w-full">
              <FadeInSection direction="left" isAr={isAr}>
                <img src={images.detImg1} alt="" className="w-full max-w-[500px] mx-auto" />
              </FadeInSection>
            </div>
            <div
              className={`lg:w-1/2 w-full text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}
            >
              <FadeInSection direction="right" isAr={isAr}>
                <h2 className="text-[#2b1055] text-3xl font-black mb-6">{content.detTitle1}</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{content.detDesc1}</p>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIAL SECTION */}
      <section className="py-24 bg-[#100324] relative text-center">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <FadeInSection>
            <h2 className="text-white text-3xl font-black mb-16">{t('testTitle')}</h2>
            <div className="bg-white/5 p-10 rounded-[40px] relative">
              <Quote className="absolute top-8 left-8 text-[#38e54d]/20 w-16 h-16" />
              <p className="text-xl text-gray-300 italic mb-10 relative z-10">
                {content.testQuote}
              </p>
              <h4 className="text-white font-bold">{content.testName}</h4>
              <p className="text-[#38e54d] whitespace-pre-line">{content.testRole}</p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}