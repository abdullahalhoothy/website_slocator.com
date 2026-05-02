import React, { useState, useEffect, useRef } from 'react'
import { Maximize2, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

// --- Interfaces for strict TypeScript checking ---
interface TypewriterProps {
  words: string[]
  isAr: boolean
}

interface AnimatedCounterProps {
  end: number
  duration?: number
}

interface FadeInSectionProps {
  children: React.ReactNode
  delay?: number
}

// --- Helper Components ---
// 1. Typewriter Animation Component
const Typewriter: React.FC<TypewriterProps> = ({ words, isAr }) => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[loopNum % words.length]
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1))
        setTypingSpeed(40)
      } else {
        setText(currentWord.substring(0, text.length + 1))
        setTypingSpeed(100)
      }
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setTypingSpeed(500)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed, words])

  const borderClass = isAr ? 'border-l-2 pl-1' : 'border-r-2 pr-1'
  return <span className={`text-[#38e54d] border-[#38e54d] ${borderClass}`}>{text}</span>
}

// 2. Smart Animated Counter
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

  return <span ref={ref}>{count.toLocaleString()}</span>
}

// 3. Scroll Reveal Animation Wrapper
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
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const { t, i18n } = useTranslation()
  const isAr = i18n.language === 'ar'
  const [popupImage, setPopupImage] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // --- Data Definitions ---
  // Note: For full compliance, 'heroWords', 'services', and 'industries' 
  // text should eventually move to locales.json, but they are localized here dynamically for now.
  const heroWords = isAr
    ? [
        'الدفاع والأمن',
        'العقارات',
        'الخدمات اللوجستية',
        'الرعاية الصحية',
        'التسويق',
        'الأغذية والمشروبات',
      ]
    : [
        'Defense & Security',
        'Real Estate',
        'Logistics',
        'Health Care',
        'Marketing',
        'Food & Beverages',
      ]

  const englishProjectImages = [
    '/assets/images/S-lOC-USAGES-R3-08.jpg',
    '/assets/images/S-lOC-USAGES-R3-09.jpg',
    '/assets/images/S-lOC-USAGES-R3-10.jpg',
    '/assets/images/S-lOC-USAGES-R3-11.jpg',
    '/assets/images/S-lOC-USAGES-R3-12.jpg',
    '/assets/images/S-lOC-USAGES-R3-13.jpg',
    '/assets/images/S-lOC-USAGES-R3-14.jpg',
    '/assets/images/S-lOC-USAGES-R3-15.jpg',
    '/assets/images/S-lOC-USAGES-R3-16.jpg',
    '/assets/images/S-lOC-USAGES-R3-17.jpg',
    '/assets/images/S-lOC-USAGES-R3-19.jpg',
    '/assets/images/S-lOC-USAGES-R3-20.jpg',
    '/assets/images/S-lOC-USAGES-R3-21.jpg',
    '/assets/images/S-lOC-USAGES-R3-22.jpg',
    '/assets/images/S-lOC-USAGES-R3-23.jpg',
    '/assets/images/S-lOC-USAGES-R3-24.jpg',
  ]

  const arabicProjectImages = [
    '/assets/images/تحسين-2.png',
    '/assets/images/Votre-texte-de-paragraphe-24.png',
    '/assets/images/Votre-texte-de-paragraphe-25.png',
    '/assets/images/Votre-texte-de-paragraphe-31.png',
    '/assets/images/Votre-texte-de-paragraphe-30.png',
    '/assets/images/Votre-texte-de-paragraphe-28-2.png',
    '/assets/images/Votre-texte-de-paragraphe-27.png',
    '/assets/images/Votre-texte-de-paragraphe-26.png',
    '/assets/images/تحسين-3.png',
    '/assets/images/Votre-texte-de-paragraphe-16.png',
    '/assets/images/Votre-texte-de-paragraphe-12-1.png',
    '/assets/images/Votre-texte-de-paragraphe-14.png',
    '/assets/images/تحسين-1.png',
    '/assets/images/Votre-texte-de-paragraphe-28.png',
    '/assets/images/Votre-texte-de-paragraphe-20-1.png',
  ]

  const projectImages = isAr ? arabicProjectImages : englishProjectImages

  const services = [
    {
      img: '/assets/images/icon-10.png',
      title: isAr ? 'محدد نقاط الاهتمام (POI)' : 'Point of Interest (POI) Locator',
      desc: isAr
        ? 'حدد المواقع الرئيسية مثل المعالم، والشركات، والخدمات في منطقة معينة بدقة، لتمكين اتخاذ قرارات تخطيط أذكى.'
        : 'Identify key locations such as landmarks, businesses, and services in a specific area with precision, enabling smarter decision-making and planning.',
      link: '/solutions/point-of-interest-locator',
    },
    {
      img: '/assets/images/icon-02.png',
      title: isAr ? 'ذكاء الكثافة السكانية' : 'Area Population Density Intelligence',
      desc: isAr
        ? 'احصل على رؤى حول التوزيع السكاني لدعم التخطيط الاستراتيجي، وتخصيص الموارد، والقرارات المستهدفة.'
        : 'Gain insights into population distribution within a specific area to support strategic planning, resource allocation, and targeted decision-making.',
      link: '/solutions/area-population-density-intelligence',
    },
    {
      img: '/assets/images/icon-16.png',
      title: isAr ? 'ذكاء تسعير العقارات' : 'Real Estate Area Pricing Intelligence',
      desc: isAr
        ? 'الوصول إلى بيانات تفصيلية حول قيم العقارات واتجاهات السوق في مواقع محددة لاتخاذ قرارات استثمارية مدروسة.'
        : 'Access detailed data on property values and market trends in specific locations to make informed investment and pricing decisions.',
      link: '/solutions/real-estate-area-pricing-intelligence',
    },
    {
      img: '/assets/images/icon-07.png',
      title: isAr ? 'ذكاء الحركة المرورية' : 'Road Traffic Data Intelligence',
      desc: isAr
        ? 'تحليل أنماط حركة المرور والازدحام لتحسين الخدمات اللوجستية، تطوير التخطيط، وتعزيز كفاءة النقل.'
        : 'Analyze traffic patterns and congestion levels to optimize logistics, improve planning, and enhance transportation efficiency.',
      link: '/solutions/road-traffic-data-intelligence',
    },
    {
      img: '/assets/images/icon-10.png',
      title: isAr ? 'الذكاء البيئي' : 'Environment Intelligence',
      desc: isAr
        ? 'فهم العوامل البيئية مثل جودة الهواء، الظروف المناخية، والتأثير البيئي لدعم القرارات المستدامة.'
        : 'Understand environmental factors like air quality, climate conditions, and ecological impact to support sustainable decision-making and planning.',
      link: '/solutions/environment-intelligence',
    },
    {
      img: '/assets/images/icon-02.png',
      title: isAr ? 'ذكاء مستوى الدخل' : 'Area Income Intelligence',
      desc: isAr
        ? 'اكتشف توزيع الدخل والاتجاهات الاقتصادية لتوجيه الاستهداف السوقي والاستثمار. اتصل بنا للمزيد.'
        : 'Discover income distribution and economic trends in specific regions to guide market targeting, investment, and resource planning. Contact us Now for more info.',
      link: '/solutions/area-income-intelligence',
    },
    {
      img: '/assets/images/icon-16.png',
      title: isAr ? 'ذكاء البنية التحتية' : 'Infrastructure Location Intelligence',
      desc: isAr
        ? 'تحليل توفر وتوزيع البنية التحتية والمرافق الأساسية لتعزيز استراتيجيات التخطيط والتنمية.'
        : 'Analyze the availability and distribution of essential infrastructure, transportation & facilities, to enhance planning and development strategies.',
      link: '/solutions/infrastructure-location-intelligence',
    },
    {
      img: '/assets/images/icon-07.png',
      title: isAr ? 'ذكاء استخدام الإنترنت' : 'Area Internet Usage Intelligence',
      desc: isAr
        ? 'الحصول على رؤى حول إمكانية الوصول للإنترنت وأنماط الاستخدام لتوجيه الاستراتيجيات الرقمية.'
        : 'Gain insights into internet accessibility, usage patterns, and connectivity trends in specific regions to inform digital strategies and infrastructure planning.',
      link: '/solutions/area-internet-usage-intelligence',
    },
  ]

  const industries = [
    {
      img: '/assets/images/icon-small-1-1.png',
      title: isAr ? 'القطاعات الحكومية' : 'Governmental Sectors',
      desc: isAr
        ? 'تمكين القطاعات الحكومية بحلول مبتكرة لتعزيز اتخاذ القرار...'
        : 'Empowering governmental sectors with innovative solutions to enhance decision-making...',
    },
    {
      img: '/assets/images/icon-small-1-3.png',
      title: isAr ? 'الأعمال والخدمات المالية' : 'Business and Financial Services',
      desc: isAr
        ? 'تزويد المؤسسات بحلول ذكية لتبسيط العمليات...'
        : 'Empowering businesses and financial institutions with intelligent solutions to streamline operations...',
    },
    {
      img: '/assets/images/icon-small-1-2.png',
      title: isAr ? 'الرعاية الصحية والتعليم' : 'Healthcare and Education',
      desc: isAr
        ? 'الارتقاء بالخدمات من خلال حلول ذكية لتحسين الوصول...'
        : 'Enhancing healthcare and education with innovative solutions to improve accessibility...',
    },
    {
      img: '/assets/images/icon-small-1-5.png',
      title: isAr ? 'السلامة العامة والطوارئ' : 'Public Safety and Emergency',
      desc: isAr
        ? 'تعزيز السلامة والاستجابة للطوارئ بأدوات تعزز الجاهزية...'
        : 'Strengthening public safety and emergency response with intelligent tools to enhance preparedness...',
    },
    {
      img: '/assets/images/icon-small-1-7.png',
      title: isAr ? 'الشركات الاستشارية' : 'Consulting Firms',
      desc: isAr
        ? 'دعم الشركات بأدوات متقدمة لتقديم رؤى دقيقة...'
        : 'Supporting consulting firms with advanced tools to deliver data-driven insights, optimize strategies...',
    },
  ]

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const subject = encodeURIComponent(`New Contact Message from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)

    window.location.href = `mailto:admin@s-locator.com?subject=${subject}&body=${body}`
  }

  return (
    <div
      className="w-full font-sans text-gray-800 overflow-hidden bg-white"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float-slow 4s ease-in-out infinite; }

        @keyframes scroll-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(${isAr ? '50%' : '-50%'}); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: scroll-marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-[#100324] via-[#100324] to-[#0a2e16] text-white flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 flex justify-center items-center gap-2 flex-wrap">
            {t('heroPre')} <Typewriter words={heroWords} isAr={isAr} /> {t('heroPost')}
          </h2>
          <h1 className="text-4xl md:text-[56px] font-extrabold leading-tight mb-6">
            {t('heroTitle')}
          </h1>
          <p className="text-sm md:text-base text-gray-300 mb-6 max-w-3xl mx-auto">{t('heroDesc')}</p>
          <p className="text-[#38e54d] text-sm italic font-medium mb-12">{t('heroPowered')}</p>

          <div className="flex justify-center mb-10">
            <img
              src="/assets/images/icons-22-1024x1024.png"
              alt="Data Intelligence"
              className="w-full max-w-[400px] h-auto animate-float"
            />
          </div>

          <a
            href="/contact"
            className="bg-[#9b51e0] hover:bg-[#8645c4] text-white font-bold py-3 px-10 rounded-full transition-transform hover:scale-105 shadow-lg shadow-purple-500/30 mb-20 inline-block"
          >
            {t('clickHere')}
          </a>

          <h2 className="text-3xl font-bold mb-10">{t('whatLook')}</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 w-full max-w-4xl mx-auto pb-10">
            <div className="flex flex-col items-center w-full">
              <p className="font-semibold mb-4 text-lg">{t('findLoc')}</p>
              <a
                href="https://s-locator.northernacs.com/landing?"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-[#8eea9e] to-[#45c960] text-[#110222] font-bold py-3.5 px-8 rounded-full shadow-lg hover:scale-105 transition-all w-full md:w-auto text-center inline-block"
              >
                {t('exploreLoc')}
              </a>
            </div>
            <div className="flex flex-col items-center w-full">
              <p className="font-semibold mb-4 text-lg">{t('planTerr')}</p>
              <a
                href="/territory-planning"
                className="bg-gradient-to-r from-[#8eea9e] to-[#45c960] text-[#110222] font-bold py-3.5 px-8 rounded-full shadow-lg hover:scale-105 transition-all w-full md:w-auto text-center inline-block"
              >
                {t('startTerr')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="relative py-20 bg-[#061d10]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeInSection>
            <h6 className="text-[#38e54d] font-semibold tracking-widest mb-2 text-sm uppercase">
              {t('whatWeOffer')}
            </h6>
            <h2 className="text-white text-4xl font-bold mb-6">{t('whyChoose')}</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-16 text-base leading-relaxed">
              {t('chooseDesc')}
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={(index % 4) * 100}>
                <div className="bg-[#1f0f38] p-8 rounded-lg shadow-lg flex flex-col items-center border-t border-[#38e54d]/20 hover:-translate-y-2 transition-transform duration-300 group h-full">
                  <div className="h-[100px] w-full flex items-center justify-center mb-6">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="max-h-full object-contain"
                    />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-4 h-14 flex items-center justify-center text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-[13px] mb-8 flex-grow leading-relaxed">
                    {service.desc}
                  </p>
                  <a
                    href={service.link}
                    className="bg-[#8eea9e] hover:bg-[#45c960] text-[#110222] font-bold py-2 px-6 rounded-full text-sm transition-colors mt-auto inline-block text-center w-max"
                  >
                    {t('clickHere')}
                  </a>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ACHIEVEMENTS */}
      <section className="py-24 bg-[#fafbfc] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <FadeInSection>
            <div className={`lg:w-full z-20 ${isAr ? 'text-right' : 'text-left'}`}>
              <h6 className="text-[#2b1055] uppercase tracking-widest text-sm mb-4 font-semibold">
                {t('achievements')}
              </h6>
              <h2 className="text-[#2b1055] text-4xl lg:text-[52px] font-extrabold mb-6 leading-[1.1]">
                {isAr ? (
                  <>{t('achievementsTitle')}</>
                ) : (
                  <>
                    Automate geospatial
                    <br />
                    insights for
                    <br />
                    businesses and
                    <br />
                    governments
                  </>
                )}
              </h2>
              <p className="text-gray-600 mb-10 text-lg max-w-md">{t('achievementsDesc')}</p>
              <a
                href="/contact"
                className="bg-[#9b51e0] hover:bg-[#8645c4] text-white font-bold py-4 px-10 rounded-full flex items-center justify-center w-max gap-2 transition-transform hover:scale-105 shadow-xl shadow-purple-500/20"
              >
                {t('getStarted')} <span className="mx-1 text-xl font-light">{isAr ? '←' : '→'}</span>
              </a>
            </div>
          </FadeInSection>

          <div className="lg:w-1/2 relative w-full h-[600px] mt-10 lg:mt-0">
            <div
              className={`absolute top-[5%] ${isAr ? 'left-[15%]' : 'right-[15%]'} w-[160px] h-[160px] bg-[#38e54d] rounded-full flex flex-col items-center justify-center text-[#110222] shadow-[0_10px_30px_rgba(56,229,77,0.3)] hover:-translate-y-2 transition-transform z-20`}
            >
              <img src="/assets/images/basic-plan-icon.png" alt="Projects" className="h-8 mb-1" />
              <h3 className="text-2xl font-extrabold">
                <AnimatedCounter end={8550} />
              </h3>
              <p className="text-[10px] font-bold text-[#110222]/80 text-center uppercase mt-1">
                {isAr ? (
                  <>{t('projectsCompleted')}</>
                ) : (
                  <>
                    Projects
                    <br />
                    Completed
                  </>
                )}
              </p>
            </div>

            <div
              className={`absolute top-[35%] ${isAr ? 'left-[-5%]' : 'right-[-5%]'} w-[130px] h-[130px] bg-[#38e54d] rounded-full flex flex-col items-center justify-center text-[#110222] shadow-[0_10px_30px_rgba(56,229,77,0.3)] hover:-translate-y-2 transition-transform z-10`}
            >
              <img src="/assets/images/team-member-icon.png" alt="Team" className="h-7 mb-1" />
              <h3 className="text-xl font-extrabold">
                <AnimatedCounter end={90} />+
              </h3>
              <p className="text-[9px] font-bold text-[#110222]/80 text-center uppercase mt-1">
                {isAr ? (
                  <>{t('teamMembers')}</>
                ) : (
                  <>
                    Team
                    <br />
                    Members
                  </>
                )}
              </p>
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
              <p className="text-[11px] font-bold text-[#110222]/80 text-center uppercase mt-1">
                {isAr ? (
                  <>{t('satisfiedClients')}</>
                ) : (
                  <>
                    Satisfied
                    <br />
                    Clients
                  </>
                )}
              </p>
            </div>

            <div
              className={`absolute bottom-[-5%] ${isAr ? 'left-[35%]' : 'right-[35%]'} w-[140px] h-[140px] bg-[#38e54d] rounded-full flex flex-col items-center justify-center text-[#110222] shadow-[0_10px_30px_rgba(56,229,77,0.3)] hover:-translate-y-2 transition-transform z-10`}
            >
              <img src="/assets/images/awards-win-icon.png" alt="Awards" className="h-7 mb-1" />
              <h3 className="text-2xl font-extrabold">
                <AnimatedCounter end={180} />+
              </h3>
              <p className="text-[9px] font-bold text-[#110222]/80 text-center uppercase mt-1">
                {isAr ? (
                  <>{t('awardsWin')}</>
                ) : (
                  <>
                    Awards
                    <br />
                    Win
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPETITIVE EDGE */}
      <section className="bg-gradient-to-b from-[#061d10] to-[#13072e] py-20 overflow-hidden">
        <FadeInSection>
          <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 relative w-full flex justify-center">
              <div
                className={`bg-[#56a8fb] w-[90%] md:w-[80%] rounded-[40px] ${isAr ? 'rounded-tr-[80px]' : 'rounded-tl-[80px]'} p-8 md:p-12 relative shadow-2xl`}
              >
                <div
                  className={`absolute -top-6 ${isAr ? '-left-6 md:-left-10' : '-right-6 md:-right-10'} md:top-8 bg-[#e0fbc9] text-[#110222] w-[110px] h-[110px] rounded-full flex flex-col justify-center items-center shadow-xl border-[6px] border-white z-20 hover:scale-105 transition-transform`}
                >
                  <span className="text-3xl font-extrabold">
                    <AnimatedCounter end={30} />+
                  </span>
                  <span className="text-[10px] text-center leading-tight font-bold mt-1">
                    {isAr ? (
                      <>{t('yearsExp')}</>
                    ) : (
                      <>
                        Years of
                        <br />
                        Experience
                      </>
                    )}
                  </span>
                </div>
                <img
                  src="/assets/images/exhibition-stand-isometric-composition_1284-23588.jpg"
                  alt="Exhibition"
                  className="w-full relative z-10 rounded-xl shadow-lg border-4 border-white/20"
                />
              </div>
            </div>
            <div className={`lg:w-1/2 py-8 ${isAr ? 'text-right' : 'text-left'}`}>
              <h2 className="text-[#38e54d] text-4xl md:text-[54px] font-bold mb-6 leading-[1.1]">
                {t('compEdgeTitle')}
              </h2>
              <p className="text-white mb-6 font-semibold text-lg leading-snug">{t('compEdgeSub')}</p>
              <p className="text-gray-300 text-[15px] leading-relaxed mb-10 max-w-lg">
                {t('compEdgeDesc')}
              </p>
              <a
                href="/about"
                className="bg-gradient-to-r from-[#8eea9e] to-[#9b51e0] text-white font-bold py-3.5 px-8 rounded-full shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-max"
              >
                {t('readMore')} <span className="font-light text-xl mx-1">{isAr ? '←' : '→'}</span>
              </a>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* 5. TAILORED SOLUTIONS */}
      <section className="py-24 bg-[#110222]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <FadeInSection>
            <h2 className="text-white text-[42px] font-bold mb-4">{t('tailoredTitle')}</h2>
            <p className="text-gray-300 mb-16 text-base">{t('tailoredDesc')}</p>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <FadeInSection key={index} delay={index * 150}>
                <div className="bg-white rounded-xl p-8 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:bg-[#38e54d] group shadow-xl h-full">
                  <div className="h-[90px] w-[90px] rounded-full bg-[#fff4ef] flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                    <img
                      src={industry.img}
                      alt={industry.title}
                      className="w-[45px] h-[45px] object-contain"
                    />
                  </div>
                  <h4 className="text-[#2b1055] font-extrabold text-[17px] mb-3">
                    {industry.title}
                  </h4>
                  <p className="text-gray-600 text-xs leading-relaxed group-hover:text-[#110222] font-semibold transition-colors">
                    {industry.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RECENT PROJECTS */}
      <section className="bg-white">
        <FadeInSection>
          <div className="pt-24 pb-12 text-center max-w-4xl mx-auto px-4">
            <h6 className="text-[#38e54d] font-bold tracking-widest text-[15px] mb-4 uppercase">
              {t('recentProjects')}
            </h6>
            <p className="text-[#2b1055] mb-8 font-medium text-lg">{t('recentDesc1')}</p>
            <h2 className="text-[#2b1055] text-4xl md:text-[46px] font-extrabold">
              {t('recentTitle')}
            </h2>
          </div>
        </FadeInSection>

        <div className="bg-gradient-to-b from-white to-[#1a0535] pt-10 pb-24 overflow-hidden">
          <FadeInSection>
            <div className="text-center max-w-4xl mx-auto px-4 mb-16">
              <h2 className="text-[#2b1055] text-[40px] font-extrabold mb-4">{t('transformTitle')}</h2>
              <p className="text-gray-600 font-medium">{t('transformDesc')}</p>
            </div>
          </FadeInSection>

          {/* Infinite Marquee Slider with Popup Hover */}
          <div className="w-full relative py-4">
            <div className="animate-marquee hover:[animation-play-state:paused] flex gap-2">
              {[...projectImages, ...projectImages].map((img, i) => (
                <div
                  key={i}
                  className="w-[320px] md:w-[400px] shrink-0 mx-3 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/10 cursor-pointer relative group bg-[#110222]"
                >
                  <img
                    src={img}
                    alt={`Project ${i}`}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    onClick={() => setPopupImage(img)}
                    className="absolute inset-0 bg-[#2b1055]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10"
                  >
                    <div className="bg-[#38e54d] p-4 rounded-full text-[#110222] shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-300">
                      <Maximize2 size={30} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIAL & CONTACT */}
      <section className="py-24 bg-[#fafbfc] border-t border-gray-100">
        <FadeInSection>
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-16 items-center mb-32">
            <div className="hidden md:flex flex-col gap-6 relative w-1/3 items-center justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-[#fff8f5] rounded-full -z-10"></div>
              <img
                src="/assets/images/City-baby-90×50-1-e1741524807594-300x154.png"
                alt="City Baby"
                className="w-44 bg-white shadow-xl rounded-full p-6 hover:-translate-y-2 transition-transform"
              />
              <div className="w-32 h-32 bg-white shadow-xl rounded-full flex items-center justify-center font-serif text-3xl text-[#2b1055] italic hover:-translate-y-2 transition-transform">
                Touch
              </div>
            </div>

            <div className={`md:w-2/3 pt-4 ${isAr ? 'text-right' : 'text-left'}`}>
              <h2 className="text-[36px] font-bold text-[#2b1055] mb-6">{t('testTitle')}</h2>
              <p className="text-gray-700 mb-8 text-[16px] leading-relaxed font-medium">
                {t('testDesc')}
              </p>
              <div>
                <p className="font-bold text-[#2b1055] text-sm">{t('clientName')}</p>
                <p className="text-gray-500 text-xs mt-1 font-medium">{t('clientRole')}</p>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="max-w-5xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
            <div
              className={`w-full lg:w-[40%] flex flex-col justify-center ${isAr ? 'text-right' : 'text-left'}`}
            >
              <h6 className="text-[13px] font-extrabold text-[#38e54d] mb-1 uppercase tracking-[0.2em]">
                {t('contactInfo')}
              </h6>
              <h2 className="text-[40px] font-black text-[#2b1055] mb-10 leading-none">
                {t('getInTouch')}
              </h2>

              <div className="space-y-4 w-full">
                <div className="bg-[#44e460] p-6 rounded-lg flex items-center gap-5 shadow-[0_4px_15px_rgba(68,228,96,0.3)] hover:-translate-y-1 transition-transform cursor-pointer">
                  <div
                    className={`w-[54px] h-[54px] rounded-full border border-[#2b1055]/30 flex items-center justify-center shrink-0 bg-transparent ${isAr ? 'ml-4' : 'mr-4'}`}
                  >
                    <img
                      src="/assets/images/location-icon.png"
                      alt="Location"
                      className="w-7 h-7 opacity-80 mix-blend-multiply"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#110222] text-[18px] mb-0.5">
                      {t('location')}
                    </h4>
                    <p className="text-[#110222]/80 text-[15px] font-medium">{t('locationVal')}</p>
                  </div>
                </div>

                <div className="bg-[#44e460] p-6 rounded-lg flex items-center gap-5 shadow-[0_4px_15px_rgba(68,228,96,0.3)] hover:-translate-y-1 transition-transform cursor-pointer">
                  <div
                    className={`w-[54px] h-[54px] rounded-full border border-[#2b1055]/30 flex items-center justify-center shrink-0 bg-transparent ${isAr ? 'ml-4' : 'mr-4'}`}
                  >
                    <img
                      src="/assets/images/email-icon.png"
                      alt="Email"
                      className="w-7 h-7 opacity-80 mix-blend-multiply"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#110222] text-[18px] mb-0.5">{t('email')}</h4>
                    <p className="text-[#110222]/80 text-[15px] font-medium break-all" dir="ltr">
                      marketing@northernacs.com
                    </p>
                  </div>
                </div>

                <div className="bg-[#44e460] p-6 rounded-lg flex items-center gap-5 shadow-[0_4px_15px_rgba(68,228,96,0.3)] hover:-translate-y-1 transition-transform cursor-pointer">
                  <div
                    className={`w-[54px] h-[54px] rounded-full border border-[#2b1055]/30 flex items-center justify-center shrink-0 bg-transparent ${isAr ? 'ml-4' : 'mr-4'}`}
                  >
                    <img
                      src="/assets/images/phone-icon.png"
                      alt="Phone"
                      className="w-7 h-7 opacity-80 mix-blend-multiply"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#110222] text-[18px] mb-0.5">{t('phone')}</h4>
                    <p className="text-[#110222]/80 text-[15px] font-medium" dir="ltr">
                      +966 56738077
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[60%]">
              <div className="bg-gradient-to-br from-[#44e460] to-[#8d42e0] p-10 md:p-12 rounded-xl shadow-2xl flex flex-col justify-center w-full min-h-[500px]">
                <h6 className="text-[#110222]/40 text-[13px] font-extrabold mb-1 uppercase tracking-[0.15em]">
                  {t('writeToUs')}
                </h6>
                <h3 className="text-[#38e54d] text-[38px] font-black mb-8 uppercase tracking-wide drop-shadow-md leading-none">
                  {t('sendMsg')}
                </h3>

                <form onSubmit={handleContactSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t('placeholderName')}
                    className={`w-full p-4 rounded bg-white text-gray-800 text-[15px] font-medium focus:outline-none shadow-sm ${isAr ? 'text-right' : 'text-left'}`}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t('placeholderEmail')}
                    className={`w-full p-4 rounded bg-white text-gray-800 text-[15px] font-medium focus:outline-none shadow-sm ${isAr ? 'text-right' : 'text-left'}`}
                  />
                  <textarea
                    name="message"
                    rows={6}
                    required
                    placeholder={t('placeholderMsg')}
                    className={`w-full p-4 rounded bg-white text-gray-800 text-[15px] font-medium focus:outline-none resize-none shadow-sm mb-2 ${isAr ? 'text-right' : 'text-left'}`}
                  ></textarea>

                  <button
                    type="submit"
                    className="bg-[#f06e28] hover:bg-[#d55e1f] text-[#110222] font-bold py-3.5 px-8 rounded-md text-[16px] transition-colors shadow-lg"
                  >
                    {t('sendNow')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Popup Modal */}
      {popupImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
          dir="ltr"
        >
          <button
            onClick={() => setPopupImage(null)}
            className="absolute top-10 right-10 text-white hover:text-[#38e54d] transition-colors p-2 bg-white/10 rounded-full z-10"
          >
            <X size={40} />
          </button>
          <div className="max-w-6xl w-full flex justify-center items-center animate-zoomIn">
            <img
              src={popupImage}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-[0_0_80px_rgba(56,229,77,0.4)] transition-transform duration-500"
              alt="Project"
            />
          </div>
        </div>
      )}
    </div>
  )
}