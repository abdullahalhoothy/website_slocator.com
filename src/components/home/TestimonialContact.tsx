import React from 'react'
import { useTranslation } from 'react-i18next'

import { FadeIn } from '../animations/FadeIn'

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

export const TestimonialContact: React.FC = () => {
  const { t, i18n } = useTranslation('home')
  const isAr = i18n.language === 'ar'
  const inputAlign = isAr ? 'text-right' : 'text-left'

  return (
    <section className="py-24 bg-[#fafbfc] border-t border-gray-100">
      <FadeIn direction="up">
        <div
          className={`max-w-7xl mx-auto px-4 flex flex-col gap-16 items-center mb-32 ${isAr ? 'md:flex-row-reverse' : 'md:flex-row'}`}
        >
          <div className="hidden md:flex flex-col gap-6 relative w-1/3 items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-[#fff8f5] rounded-full -z-10"></div>
            <img
              src="/assets/images/City-baby-90×50-1-e1741524807594-300x154.png"
              alt="City Baby"
              className="w-44 h-44 object-contain bg-white shadow-xl rounded-full p-4 hover:-translate-y-2 transition-transform"
            />
            <div className="w-32 h-32 bg-white shadow-xl rounded-full flex items-center justify-center overflow-hidden hover:-translate-y-2 transition-transform p-3">
              <span className="font-serif text-3xl text-[#2b1055] italic">Touch</span>
            </div>
          </div>

          <div className="md:w-2/3 pt-4 text-center">
            <h2 className="text-[32px] md:text-[36px] font-bold text-[#2b1055] mb-6 leading-tight">
              {t('home.testTitle')}
            </h2>
            <p className="text-gray-700 mb-8 text-[15px] md:text-[16px] leading-relaxed font-medium max-w-2xl mx-auto">
              {t('home.testDesc')}
            </p>
            <div>
              <p className="font-bold text-[#2b1055] text-sm">{t('home.clientName')}</p>
              <p className="text-gray-500 text-xs mt-1 font-medium">{t('home.clientRole')}</p>
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn direction="up">
        <div className="max-w-5xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
          <div
            className={`w-full lg:w-[40%] flex flex-col justify-center ${isAr ? 'text-right' : 'text-left'}`}
          >
            <h6 className="text-[13px] font-extrabold text-[#38e54d] mb-1 uppercase tracking-[0.2em]">
              {t('home.contactInfo')}
            </h6>
            <h2 className="text-[40px] font-black text-[#2b1055] mb-10 leading-none">
              {t('home.getInTouch')}
            </h2>

            <div className="space-y-4 w-full">
              <div className="bg-[#44e460] p-6 rounded-lg flex items-center gap-5 shadow-[0_4px_15px_rgba(68,228,96,0.3)] hover:-translate-y-1 transition-transform">
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
                    {t('home.location')}
                  </h4>
                  <p className="text-[#110222]/80 text-[15px] font-medium">
                    {t('home.locationVal')}
                  </p>
                </div>
              </div>

              <div className="bg-[#44e460] p-6 rounded-lg flex items-center gap-5 shadow-[0_4px_15px_rgba(68,228,96,0.3)] hover:-translate-y-1 transition-transform">
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
                  <h4 className="font-extrabold text-[#110222] text-[18px] mb-0.5">
                    {t('home.email')}
                  </h4>
                  <p className="text-[#110222]/80 text-[15px] font-medium break-all" dir="ltr">
                    marketing@northernacs.com
                  </p>
                </div>
              </div>

              <div className="bg-[#44e460] p-6 rounded-lg flex items-center gap-5 shadow-[0_4px_15px_rgba(68,228,96,0.3)] hover:-translate-y-1 transition-transform">
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
                  <h4 className="font-extrabold text-[#110222] text-[18px] mb-0.5">
                    {t('home.phone')}
                  </h4>
                  <p className="text-[#110222]/80 text-[15px] font-medium" dir="ltr">
                    +966 56738077
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[60%]">
            <div className="bg-gradient-to-br from-[#9b51e0] to-[#2b1055] p-10 md:p-12 rounded-xl shadow-2xl flex flex-col justify-center w-full min-h-[500px]">
              <h6 className="text-[#ffffff]/60 text-[13px] font-extrabold mb-1 uppercase tracking-[0.15em]">
                {t('home.writeToUs')}
              </h6>
              <h3 className="text-[#38e54d] text-[38px] font-black mb-8 uppercase tracking-wide drop-shadow-md leading-none">
                {t('home.sendMsg')}
              </h3>

              <form onSubmit={handleContactSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t('home.placeholderName')}
                  className={`w-full p-4 rounded bg-white text-gray-800 text-[15px] font-medium focus:outline-none shadow-sm ${inputAlign}`}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t('home.placeholderEmail')}
                  className={`w-full p-4 rounded bg-white text-gray-800 text-[15px] font-medium focus:outline-none shadow-sm ${inputAlign}`}
                />
                <textarea
                  name="message"
                  rows={6}
                  required
                  placeholder={t('home.placeholderMsg')}
                  className={`w-full p-4 rounded bg-white text-gray-800 text-[15px] font-medium focus:outline-none resize-none shadow-sm mb-2 ${inputAlign}`}
                ></textarea>

                <button
                  type="submit"
                  className="bg-[#38e54d] hover:bg-[#2eaa3f] text-[#2b1055] font-bold py-3.5 px-8 rounded-md text-[16px] transition-colors shadow-lg"
                >
                  {t('home.sendNow')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
