import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

// --- Interfaces ---
interface FadeInSectionProps {
  children: React.ReactNode
  delay?: number
}

// --- Helper Component: Fade In Animation on Scroll ---
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

// --- Main Contact Page Component ---
export default function Contact() {
  const { t, i18n } = useTranslation()
  const isAr = i18n.language === 'ar'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Handle form submission and redirect to default mail client
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')

    const subject = encodeURIComponent(`${t('newContactMsg')} ${name}`)
    const body = encodeURIComponent(
      `${t('namePrefix')} ${name}\n${t('emailPrefix')} ${email}\n\n${t('msgPrefix')}\n${message}`
    )

    window.location.href = `mailto:admin@s-locator.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="w-full bg-white font-sans overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      {/* 1. HERO BANNER SECTION */}
      <section className="relative h-[400px] md:h-[450px] flex items-center justify-center bg-[#100324] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/banner-1.jpg"
            alt="Contact Banner"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#100324]/90 to-[#0a2e16]/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 mt-10">
          <FadeInSection>
            <h1 className="text-5xl md:text-[64px] font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
              {t('contactHeroTitle')}
            </h1>
            <div className="flex items-center justify-center gap-3 text-gray-300 font-bold text-[13px] uppercase tracking-widest">
              <a href="/" className="hover:text-[#38e54d] transition-colors">
                {t('Home')}
              </a>
              <span className="text-gray-500">/</span>
              <span className="text-[#38e54d]">{t('Contact')}</span>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 2. CONTACT INFO & FORM SECTION */}
      <section className="py-24 bg-[#fafbfc]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Side: Green Contact Info Cards */}
          <div
            className={`w-full lg:w-[40%] flex flex-col justify-center ${
              isAr ? 'text-right' : 'text-left'
            }`}
          >
            <FadeInSection>
              <h6 className="text-[13px] font-extrabold text-[#38e54d] mb-2 uppercase tracking-[0.2em]">
                {t('contactInfo')}
              </h6>
              <h2 className="text-[42px] font-black text-[#2b1055] mb-10 leading-none tracking-tight">
                {t('getInTouch')}
              </h2>

              <div className="space-y-5 w-full">
                {/* Green Box 1 - Location */}
                <div className="bg-[#44e460] p-6 rounded-xl flex items-center gap-6 shadow-[0_10px_30px_rgba(68,228,96,0.2)] hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                  <div className="w-[60px] h-[60px] rounded-full border border-[#2b1055]/20 flex items-center justify-center shrink-0 bg-transparent">
                    <img
                      src="/assets/images/location-icon.png"
                      alt="Location"
                      className="w-8 h-8 opacity-90 mix-blend-multiply"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#110222] text-[18px] mb-1">{t('location')}</h4>
                    <p className="text-[#110222]/80 text-[15px] font-semibold">{t('locationVal')}</p>
                  </div>
                </div>

                {/* Green Box 2 - Email */}
                <div className="bg-[#44e460] p-6 rounded-xl flex items-center gap-6 shadow-[0_10px_30px_rgba(68,228,96,0.2)] hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                  <div className="w-[60px] h-[60px] rounded-full border border-[#2b1055]/20 flex items-center justify-center shrink-0 bg-transparent">
                    <img
                      src="/assets/images/email-icon.png"
                      alt="Email"
                      className="w-8 h-8 opacity-90 mix-blend-multiply"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#110222] text-[18px] mb-1">{t('email')}</h4>
                    <p
                      className="text-[#110222]/80 text-[15px] font-semibold leading-relaxed"
                      dir="ltr"
                    >
                      support@s-locator.com
                      <br />
                      info@s-locator.com
                    </p>
                  </div>
                </div>

                {/* Green Box 3 - Phone */}
                <div className="bg-[#44e460] p-6 rounded-xl flex items-center gap-6 shadow-[0_10px_30px_rgba(68,228,96,0.2)] hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                  <div className="w-[60px] h-[60px] rounded-full border border-[#2b1055]/20 flex items-center justify-center shrink-0 bg-transparent">
                    <img
                      src="/assets/images/phone-icon.png"
                      alt="Phone"
                      className="w-8 h-8 opacity-90 mix-blend-multiply"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#110222] text-[18px] mb-1">{t('phone')}</h4>
                    <p
                      className="text-[#110222]/80 text-[15px] font-semibold leading-relaxed"
                      dir="ltr"
                    >
                      +966 56738077
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* Right Side: Gradient Form Box */}
          <div className="w-full lg:w-[60%]">
            <FadeInSection delay={200}>
              <div className="bg-gradient-to-br from-[#44e460] to-[#8d42e0] p-10 md:p-14 rounded-2xl shadow-[0_20px_50px_rgba(141,66,224,0.25)] flex flex-col justify-center w-full min-h-[550px]">
                <h6
                  className={`text-[#110222]/50 text-[12px] font-extrabold mb-2 uppercase tracking-[0.2em] ${
                    isAr ? 'text-right' : 'text-left'
                  }`}
                >
                  {t('writeToUs')}
                </h6>
                <h3
                  className={`text-[#38e54d] text-[40px] font-black mb-10 uppercase tracking-tight drop-shadow-md leading-none ${
                    isAr ? 'text-right' : 'text-left'
                  }`}
                >
                  {t('sendMsg')}
                </h3>

                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t('placeholderName')}
                    className={`w-full p-4 rounded-lg bg-white text-gray-800 text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-[#f06e28] shadow-sm transition-all ${
                      isAr ? 'text-right' : 'text-left'
                    }`}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t('placeholderEmail')}
                    className={`w-full p-4 rounded-lg bg-white text-gray-800 text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-[#f06e28] shadow-sm transition-all ${
                      isAr ? 'text-right' : 'text-left'
                    }`}
                  />
                  <textarea
                    name="message"
                    rows={6}
                    required
                    placeholder={t('placeholderMsg')}
                    className={`w-full p-4 rounded-lg bg-white text-gray-800 text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-[#f06e28] resize-none shadow-sm transition-all ${
                      isAr ? 'text-right' : 'text-left'
                    }`}
                  ></textarea>

                  <div className={isAr ? 'text-right' : 'text-left'}>
                    <button
                      type="submit"
                      className="bg-[#f06e28] hover:bg-[#d55e1f] text-white font-extrabold py-4 px-10 rounded-lg text-[16px] transition-transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(240,110,40,0.3)] mt-2 inline-block"
                    >
                      {t('sendNow')}
                    </button>
                  </div>
                </form>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 3. GOOGLE MAPS SECTION */}
      <section className="w-full h-[450px] bg-gray-200">
        <iframe
          src="https://maps.google.com/maps?q=saudi%20arabia&t=m&z=6&output=embed&iwloc=near"
          title="saudi arabia"
          aria-label="saudi arabia"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  )
}