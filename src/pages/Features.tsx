import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { CheckCircle2, Check, Download, Phone, Mail, MonitorSmartphone, Info } from 'lucide-react'
import { FadeIn } from '../components/animations/FadeIn' // تم إصلاح المسار هنا

const FeatureBlock: React.FC<{
  title: string
  desc: string
  bullets: string[]
  image: string
  isReversed?: boolean
  grayBg?: boolean
  imgShadow?: boolean
  ctaText?: string
  ctaLink?: string
}> = ({
  title,
  desc,
  bullets,
  image,
  isReversed = false,
  grayBg = false,
  imgShadow = true,
  ctaText,
  ctaLink,
}) => {
  const { i18n } = useTranslation()
  const isRTL = i18n.dir() === 'rtl'
  const imgDirection = isRTL ? (isReversed ? 'left' : 'right') : isReversed ? 'right' : 'left'
  const textDirection = isRTL ? (isReversed ? 'right' : 'left') : isReversed ? 'left' : 'right'

  return (
    <section
      className={`py-20 border-b border-slate-200 overflow-hidden ${grayBg ? 'bg-[#f4f7f9]' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isReversed ? 'lg:flex-row-reverse' : ''}`}
        >
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <FadeIn direction={textDirection}>
              <h2 className="text-3xl lg:text-[34px] font-medium text-slate-800 leading-tight">
                {title}
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mt-2">{desc}</p>
              <ul className="flex flex-col gap-4 mt-4">
                {bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-slate-600 font-light text-[16px]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#00609c] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
              {ctaText && ctaLink && (
                <div className="mt-6">
                  <a
                    href={ctaLink}
                    className="inline-block bg-[#00609c] text-white px-8 py-3 rounded hover:bg-[#004d7d] transition-colors font-medium shadow-sm"
                  >
                    {ctaText}
                  </a>
                </div>
              )}
            </FadeIn>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <FadeIn direction={imgDirection}>
              <img
                src={image}
                alt={title}
                className={`max-w-full h-auto ${imgShadow ? 'drop-shadow-2xl rounded-lg' : ''}`}
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}

const ChecklistCategory: React.FC<{
  title: string
  items: { text: string; val?: string; isSub?: boolean; info?: boolean }[]
}> = ({ title, items }) => (
  <div className="bg-white p-6 rounded shadow-sm border border-slate-100 mb-6">
    <h3 className="text-xl font-medium text-slate-800 mb-5">{title}</h3>
    <ul className="flex flex-col gap-3">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="flex items-start justify-between gap-3 text-slate-600 font-light text-[14.5px]"
        >
          <div className={`flex items-center gap-1.5 ${item.isSub ? 'ltr:pl-4 rtl:pr-4' : ''}`}>
            <span className="leading-snug">{item.isSub ? `... ${item.text}` : item.text}</span>
            {item.info && (
              <Info className="w-4 h-4 text-[#88b3cb] fill-[#eef4f8] shrink-0 cursor-help" />
            )}
          </div>
          <div className="shrink-0 ltr:ml-2 rtl:mr-2" dir="ltr">
            {item.val ? (
              <span className="font-bold text-[#1aa62a] whitespace-nowrap">{item.val}</span>
            ) : (
              <Check className="w-[22px] h-[22px] text-[#1aa62a] stroke-[3.5]" />
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
)

const SimpleFaqAccordion: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left rtl:text-right focus:outline-none group"
      >
        <h3 className="text-[17px] font-medium text-[#00609c] group-hover:underline leading-snug">
          {question}
        </h3>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-slate-600 font-light leading-relaxed text-[15px]">{answer}</div>
      </div>
    </div>
  )
}

export const Features: React.FC = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.dir() === 'rtl'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const leftColumnFeatures = [
    {
      title: t('features_page.checklist.c1.title'),
      items: [
        { text: t('features_page.checklist.c1.i1'), info: true },
        { text: t('features_page.checklist.c1.i2'), info: true },
        { text: t('features_page.checklist.c1.i3'), info: true },
        { text: t('features_page.checklist.c1.i4'), info: true },
        { text: t('features_page.checklist.c1.i5'), info: true },
        { text: t('features_page.checklist.c1.i6'), info: true },
        { text: t('features_page.checklist.c1.i7'), info: true },
        { text: t('features_page.checklist.c1.i8'), info: true, val: '< 10 Sec.' },
        { text: t('features_page.checklist.c1.i9'), info: true, val: '16 weeks' },
        { text: t('features_page.checklist.c1.i10'), info: true, val: '125' },
        { text: t('features_page.checklist.c1.i11'), info: true },
        { text: t('features_page.checklist.c1.i12'), info: true },
        { text: t('features_page.checklist.c1.i13'), info: true },
        { text: t('features_page.checklist.c1.i14'), info: true },
        { text: t('features_page.checklist.c1.i15'), info: true },
        { text: t('features_page.checklist.c1.i16'), info: true },
        { text: t('features_page.checklist.c1.i17'), info: true },
        { text: t('features_page.checklist.c1.i18'), info: true },
        { text: t('features_page.checklist.c1.i19'), info: true },
        { text: t('features_page.checklist.c1.i20'), info: true },
        { text: t('features_page.checklist.c1.i21'), info: true },
        { text: t('features_page.checklist.c1.i22'), info: true },
        { text: t('features_page.checklist.c1.i23'), info: true },
        { text: t('features_page.checklist.c1.i24'), info: true },
        { text: t('features_page.checklist.c1.i25'), info: true },
        { text: t('features_page.checklist.c1.i26'), info: true },
        { text: t('features_page.checklist.c1.i27'), info: true },
        { text: t('features_page.checklist.c1.i28'), info: true },
        { text: t('features_page.checklist.c1.i29'), info: true },
        { text: t('features_page.checklist.c1.i30'), info: true },
        { text: t('features_page.checklist.c1.i31'), info: true },
        { text: t('features_page.checklist.c1.i32'), info: true },
        { text: t('features_page.checklist.c1.i33'), info: true },
        { text: t('features_page.checklist.c1.i34'), info: true },
        { text: t('features_page.checklist.c1.i35'), info: true },
        { text: t('features_page.checklist.c1.i36'), info: true },
      ],
    },
    {
      title: t('features_page.checklist.c2.title'),
      items: [
        { text: t('features_page.checklist.c2.i1'), info: true },
        { text: t('features_page.checklist.c2.i2'), info: true },
        { text: t('features_page.checklist.c2.i3'), info: true },
        { text: t('features_page.checklist.c2.i4'), info: true },
        { text: t('features_page.checklist.c2.i5'), info: true },
        { text: t('features_page.checklist.c2.i6'), info: true },
      ],
    },
    {
      title: t('features_page.checklist.c3.title'),
      items: [
        { text: t('features_page.checklist.c3.i1'), info: true },
        { text: t('features_page.checklist.c3.i2'), info: true },
        { text: t('features_page.checklist.c3.i3'), info: true },
        { text: t('features_page.checklist.c3.i4'), info: true },
        { text: t('features_page.checklist.c3.i5'), info: true },
        { text: t('features_page.checklist.c3.i6'), info: true },
        { text: t('features_page.checklist.c3.i7'), info: true },
        { text: t('features_page.checklist.c3.i8'), info: true },
        { text: t('features_page.checklist.c3.i9'), info: true },
        { text: t('features_page.checklist.c3.i10'), info: true },
        { text: t('features_page.checklist.c3.i11'), info: true },
        { text: t('features_page.checklist.c3.i12'), info: true },
      ],
    },
    {
      title: t('features_page.checklist.c4.title'),
      items: [
        { text: t('features_page.checklist.c4.i1'), info: true, val: '3000' },
        { text: t('features_page.checklist.c4.i2'), info: true },
        { text: t('features_page.checklist.c4.i3'), isSub: true },
        { text: t('features_page.checklist.c4.i4'), isSub: true },
        { text: t('features_page.checklist.c4.i5'), isSub: true },
        { text: t('features_page.checklist.c4.i6'), info: true },
        { text: t('features_page.checklist.c4.i7'), info: true },
        { text: t('features_page.checklist.c4.i8'), info: true },
        { text: t('features_page.checklist.c4.i9'), info: true },
        { text: t('features_page.checklist.c4.i10'), info: true },
        { text: t('features_page.checklist.c4.i11'), info: true },
        { text: t('features_page.checklist.c4.i12'), info: true },
        { text: t('features_page.checklist.c4.i13'), info: true },
        { text: t('features_page.checklist.c4.i14'), info: true },
        { text: t('features_page.checklist.c4.i15'), info: true },
        { text: t('features_page.checklist.c4.i16'), info: true },
        { text: t('features_page.checklist.c4.i17'), info: true },
        { text: t('features_page.checklist.c4.i18'), info: true },
        { text: t('features_page.checklist.c4.i19'), info: true },
        { text: t('features_page.checklist.c4.i20'), info: true },
        { text: t('features_page.checklist.c4.i21'), info: true },
        { text: t('features_page.checklist.c4.i22'), info: true },
        { text: t('features_page.checklist.c4.i23'), info: true },
        { text: t('features_page.checklist.c4.i24'), info: true },
      ],
    },
  ]

  const rightColumnFeatures = [
    {
      title: t('features_page.checklist.c5.title'),
      items: [
        { text: t('features_page.checklist.c5.i1') },
        { text: t('features_page.checklist.c5.i2'), isSub: true },
        { text: t('features_page.checklist.c5.i3'), isSub: true },
        { text: t('features_page.checklist.c5.i4') },
        { text: t('features_page.checklist.c5.i5') },
        { text: t('features_page.checklist.c5.i6') },
        { text: t('features_page.checklist.c5.i7'), info: true },
        { text: t('features_page.checklist.c5.i8') },
        { text: t('features_page.checklist.c5.i9') },
        { text: t('features_page.checklist.c5.i10'), info: true },
        { text: t('features_page.checklist.c5.i11') },
        { text: t('features_page.checklist.c5.i12') },
        { text: t('features_page.checklist.c5.i13') },
      ],
    },
    {
      title: t('features_page.checklist.c6.title'),
      items: [
        { text: t('features_page.checklist.c6.i1'), info: true },
        { text: t('features_page.checklist.c6.i2'), isSub: true },
        { text: t('features_page.checklist.c6.i3'), isSub: true },
        { text: t('features_page.checklist.c6.i4'), isSub: true },
        { text: t('features_page.checklist.c6.i5'), isSub: true },
        { text: t('features_page.checklist.c6.i6'), isSub: true },
        { text: t('features_page.checklist.c6.i7'), isSub: true },
        { text: t('features_page.checklist.c6.i8'), info: true },
        { text: t('features_page.checklist.c6.i9'), isSub: true },
        { text: t('features_page.checklist.c6.i10'), isSub: true },
        { text: t('features_page.checklist.c6.i11'), isSub: true },
        { text: t('features_page.checklist.c6.i12'), isSub: true },
        { text: t('features_page.checklist.c6.i13'), isSub: true },
        { text: t('features_page.checklist.c6.i14'), isSub: true },
      ],
    },
    {
      title: t('features_page.checklist.c7.title'),
      items: [
        { text: t('features_page.checklist.c7.i1'), info: true, val: '30 Days' },
        { text: t('features_page.checklist.c7.i2'), info: true },
        { text: t('features_page.checklist.c7.i3'), info: true },
        { text: t('features_page.checklist.c7.i4'), info: true },
        { text: t('features_page.checklist.c7.i5'), info: true },
        { text: t('features_page.checklist.c7.i6'), info: true },
      ],
    },
    {
      title: t('features_page.checklist.c8.title'),
      items: [
        { text: t('features_page.checklist.c8.i1'), info: true },
        { text: t('features_page.checklist.c8.i2'), info: true },
        { text: t('features_page.checklist.c8.i3'), info: true },
        { text: t('features_page.checklist.c8.i4'), info: true },
        { text: t('features_page.checklist.c8.i5'), info: true },
        { text: t('features_page.checklist.c8.i6'), info: true },
        { text: t('features_page.checklist.c8.i7'), info: true },
        { text: t('features_page.checklist.c8.i8'), info: true },
        { text: t('features_page.checklist.c8.i9'), info: true },
        { text: t('features_page.checklist.c8.i10'), info: true },
      ],
    },
    {
      title: t('features_page.checklist.c9.title'),
      items: [
        { text: t('features_page.checklist.c9.i1'), info: true },
        { text: t('features_page.checklist.c9.i2') },
        { text: t('features_page.checklist.c9.i3'), isSub: true },
        { text: t('features_page.checklist.c9.i4'), isSub: true },
        { text: t('features_page.checklist.c9.i5'), isSub: true },
        { text: t('features_page.checklist.c9.i6'), isSub: true },
        { text: t('features_page.checklist.c9.i7'), info: true },
        { text: t('features_page.checklist.c9.i8'), info: true },
        { text: t('features_page.checklist.c9.i9'), info: true },
        { text: t('features_page.checklist.c9.i10'), info: true },
        { text: t('features_page.checklist.c9.i11'), info: true },
        { text: t('features_page.checklist.c9.i12'), info: true },
      ],
    },
    {
      title: t('features_page.checklist.c10.title'),
      items: [
        { text: t('features_page.checklist.c10.i1'), info: true },
        { text: t('features_page.checklist.c10.i2'), info: true },
        { text: t('features_page.checklist.c10.i3'), isSub: true, info: true },
        { text: t('features_page.checklist.c10.i4'), isSub: true, info: true },
        { text: t('features_page.checklist.c10.i5'), isSub: true, info: true },
        { text: t('features_page.checklist.c10.i6'), isSub: true },
        { text: t('features_page.checklist.c10.i7'), isSub: true },
        { text: t('features_page.checklist.c10.i8'), info: true },
        { text: t('features_page.checklist.c10.i9') },
        { text: t('features_page.checklist.c10.i10'), isSub: true },
        { text: t('features_page.checklist.c10.i11'), isSub: true },
        { text: t('features_page.checklist.c10.i12'), isSub: true },
        { text: t('features_page.checklist.c10.i13'), isSub: true },
      ],
    },
  ]

  return (
    <div
      className={`min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-[#00609c] ${isRTL ? 'text-right' : 'text-left'}`}
    >
      <section className="bg-white py-16 lg:py-24 border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex flex-col gap-6 order-2 lg:order-1">
              <FadeIn direction={isRTL ? 'right' : 'left'}>
                <h1 className="text-4xl lg:text-[44px] font-medium text-slate-900 leading-[1.2]">
                  {t('features_page.hero.title')}
                </h1>
                <p className="text-lg text-slate-600 font-light leading-relaxed mt-4">
                  {t('features_page.hero.desc')}
                </p>
                <ul className="flex flex-col gap-4 mt-6">
                  <li className="flex items-start gap-3 text-slate-600 font-light text-[16px]">
                    <CheckCircle2 className="w-5 h-5 text-[#00609c] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{t('features_page.hero.b1')}</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 font-light text-[16px]">
                    <CheckCircle2 className="w-5 h-5 text-[#00609c] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{t('features_page.hero.b2')}</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 font-light text-[16px]">
                    <CheckCircle2 className="w-5 h-5 text-[#00609c] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{t('features_page.hero.b3')}</span>
                  </li>
                </ul>
              </FadeIn>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
              <FadeIn direction={isRTL ? 'left' : 'right'}>
                <img
                  src="/assets/images/img-integrations-feature-01.webp"
                  alt="Route Planning"
                  className="max-w-md w-full drop-shadow-xl"
                />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <FeatureBlock
        grayBg={true}
        isReversed={false}
        title={t('features_page.blocks.b1.title')}
        desc={t('features_page.blocks.b1.desc')}
        bullets={t('features_page.blocks.b1.bullets', { returnObjects: true }) as string[]}
        image="/assets/images/1a-iPad-EinTagesRouteMitPin-en-260x360.webp"
      />

      <FeatureBlock
        grayBg={false}
        isReversed={true}
        title={t('features_page.blocks.b2.title')}
        desc={t('features_page.blocks.b2.desc')}
        bullets={t('features_page.blocks.b2.bullets', { returnObjects: true }) as string[]}
        image="/assets/images/img-crms-md-xl.webp"
        imgShadow={false}
        ctaText={t('srp.integrations.cta')}
        ctaLink="/integrations"
      />

      <section className="py-24 bg-[#f4f7f9] border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[40px] font-medium text-slate-800 mb-16">
              {t('features_page.infographic.title')}
            </h2>
            <img
              src="/assets/images/infographic-ultimate-sales-route-planning-en-lg-xl.webp"
              alt="How route planning works"
              className="w-full max-w-4xl mx-auto drop-shadow-sm"
            />
          </FadeIn>
        </div>
      </section>

      <FeatureBlock
        grayBg={false}
        isReversed={false}
        imgShadow={false}
        title={t('features_page.blocks.b3.title')}
        desc={t('features_page.blocks.b3.desc')}
        bullets={t('features_page.blocks.b3.bullets', { returnObjects: true }) as string[]}
        image="/assets/images/img-ideal-user.svg"
      />

      <FeatureBlock
        grayBg={true}
        isReversed={true}
        title={t('features_page.blocks.b4.title')}
        desc={t('features_page.blocks.b4.desc')}
        bullets={t('features_page.blocks.b4.bullets', { returnObjects: true }) as string[]}
        image="/assets/images/6a-Galaxy-Arbeitszeit-en-166x359.webp"
      />

      <FeatureBlock
        grayBg={false}
        isReversed={false}
        title={t('features_page.blocks.b5.title')}
        desc={t('features_page.blocks.b5.desc')}
        bullets={t('features_page.blocks.b5.bullets', { returnObjects: true }) as string[]}
        image="/assets/images/7a-Galaxy-Besuchsplan-durcharbeiten-en-166x359.webp"
      />

      <FeatureBlock
        grayBg={true}
        isReversed={true}
        title={t('features_page.blocks.b6.title')}
        desc={t('features_page.blocks.b6.desc')}
        bullets={t('features_page.blocks.b6.bullets', { returnObjects: true }) as string[]}
        image="/assets/images/2a-Mac-Landkarte-Faelligkeiten-en-351x239.webp"
      />

      <FeatureBlock
        grayBg={false}
        isReversed={false}
        title={t('features_page.blocks.b7.title')}
        desc={t('features_page.blocks.b7.desc')}
        bullets={t('features_page.blocks.b7.bullets', { returnObjects: true }) as string[]}
        image="/assets/images/9b-Responsive-Kundenblatt-en-344x259.webp"
      />

      <FeatureBlock
        grayBg={true}
        isReversed={true}
        title={t('features_page.blocks.b8.title')}
        desc={t('features_page.blocks.b8.desc')}
        bullets={t('features_page.blocks.b8.bullets', { returnObjects: true }) as string[]}
        image="/assets/images/10a-iPad-Besuchsbericht-en-260x360.webp"
      />

      <FeatureBlock
        grayBg={false}
        isReversed={false}
        imgShadow={false}
        title={t('features_page.blocks.b9.title')}
        desc={t('features_page.blocks.b9.desc')}
        bullets={t('features_page.blocks.b9.bullets', { returnObjects: true }) as string[]}
        image="/assets/images/img-technical-requirements.svg"
      />

      <section className="py-20 bg-[#f4f7f9] border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <FadeIn direction={isRTL ? 'right' : 'left'}>
                <h2 className="text-3xl lg:text-[34px] font-medium text-slate-800 leading-tight">
                  {t('features_page.blocks.b10.title')}
                </h2>
                <ul className="flex flex-col gap-4 mt-6">
                  {(t('features_page.blocks.b10.bullets', { returnObjects: true }) as string[]).map(
                    (bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-600 font-light text-[16px]"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#00609c] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ),
                  )}
                </ul>
              </FadeIn>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <FadeIn direction={isRTL ? 'left' : 'right'}>
                <img
                  src="/assets/images/img-download.svg"
                  alt="PDF Download"
                  className="max-w-xs mb-8"
                />
                <a
                  href="#"
                  className="bg-white border-2 border-[#00609c] text-[#00609c] px-8 py-3.5 rounded font-medium hover:bg-[#00609c] hover:text-white transition-colors shadow-sm flex items-center gap-3"
                >
                  <Download className="w-5 h-5" /> {t('features_page.downloadBtn')}
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#00609c] py-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[40px] font-medium text-white mb-6 leading-tight">
              {t('features_page.cta.title')}
            </h2>
            <p className="text-blue-100 text-lg font-light mb-10">{t('features_page.cta.desc')}</p>
            <button className="bg-[#f0ad4e] hover:bg-[#e09e3e] text-white px-10 py-4 rounded font-medium transition-colors shadow-lg text-lg">
              {t('features_page.cta.btn')}
            </button>
            <p className="text-blue-200 text-sm font-light mt-6">{t('features_page.cta.note')}</p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-[#eef4f8] border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[44px] font-medium text-slate-800 text-center mb-16">
              {t('features_page.listTitle')}
            </h2>
          </FadeIn>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-1/2 flex flex-col">
              {leftColumnFeatures.map((cat, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 50}>
                  <ChecklistCategory title={cat.title} items={cat.items} />
                </FadeIn>
              ))}
            </div>

            <div className="w-full lg:w-1/2 flex flex-col">
              {rightColumnFeatures.map((cat, idx) => (
                <FadeIn key={idx} direction="up" delay={idx * 50}>
                  <ChecklistCategory title={cat.title} items={cat.items} />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[40px] font-medium text-slate-800 text-center mb-16">
              {t('features_page.faq.title')}
            </h2>
          </FadeIn>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
            <div className="w-full md:w-1/2 flex flex-col">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num, idx) => (
                <FadeIn key={num} direction="up" delay={idx * 30}>
                  <SimpleFaqAccordion
                    question={t(`srp.faq.q${num}.q`)}
                    answer={t(`srp.faq.q${num}.a`)}
                  />
                </FadeIn>
              ))}
            </div>

            <div className="w-full md:w-1/2 flex flex-col">
              {[11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map((num, idx) => (
                <FadeIn key={num} direction="up" delay={idx * 30}>
                  <SimpleFaqAccordion
                    question={t(`srp.faq.q${num}.q`)}
                    answer={t(`srp.faq.q${num}.a`)}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-medium text-slate-800 mb-4">
                {t('contactPage.hero.title')}
              </h2>
              <div className="mt-4 text-[15px] text-slate-500 font-light flex items-center justify-center gap-2">
                <MonitorSmartphone className="w-4 h-4 text-[#6699b8]" />{' '}
                {t('contactPage.hero.availability')}
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn direction={isRTL ? 'left' : 'right'}>
              <div className="bg-white p-10 rounded shadow-sm border border-slate-100 text-center flex flex-col items-center">
                <h3 className="text-[17px] font-light text-slate-600 mb-2">
                  {t('contactPage.support.pretitle')}
                </h3>
                <h4 className="text-[32px] font-light text-slate-800 mb-8">
                  {t('contactPage.support.title')}
                </h4>
                <button className="bg-[#00609c] text-white px-8 py-3.5 rounded hover:bg-[#004d7d] transition-colors mb-10 text-[15px]">
                  {t('contactPage.support.btn')}
                </button>
                <div className="flex flex-col gap-4 text-[#00609c] font-light text-[15px] items-start w-full max-w-xs mx-auto">
                  <div className="flex items-center gap-3" dir="ltr">
                    <Phone className="w-5 h-5 text-[#6699b8]" /> KSA: +966 55 818 8632
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <Mail className="w-5 h-5 text-[#6699b8]" /> support@s-locator.com
                  </div>
                  <div className="flex items-center gap-3 mt-2 text-slate-600">
                    <MonitorSmartphone className="w-5 h-5 text-[#6699b8]" />{' '}
                    {t(
                      'contactPage.support.teamviewer',
                      'Teamviewer: Remote access for S-Locator Support',
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction={isRTL ? 'right' : 'left'} delay={200}>
              <div className="bg-white p-10 rounded shadow-sm border border-slate-100 text-center flex flex-col items-center">
                <h3 className="text-[17px] font-light text-slate-600 mb-2">
                  {t('contactPage.sales.pretitle')}
                </h3>
                <h4 className="text-[32px] font-light text-slate-800 mb-8">
                  {t('contactPage.sales.title')}
                </h4>
                <div className="flex flex-col gap-4 text-[#00609c] font-light text-[15px] items-start w-full max-w-xs mx-auto mt-2">
                  <div className="flex items-center gap-3" dir="ltr">
                    <Phone className="w-5 h-5 text-[#6699b8]" /> Canada: +1 514-814-5180
                  </div>
                  <div className="flex items-center gap-3" dir="ltr">
                    <Phone className="w-5 h-5 text-[#6699b8]" /> KSA: +966 55 818 8632
                  </div>
                  <a
                    href="/contact"
                    className="text-[#a0a0a0] cursor-pointer hover:text-[#00609c] ml-8 mb-2 transition-colors"
                  >
                    {t('common.showMore', 'show more')}
                  </a>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#6699b8]" /> sales@s-locator.com
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
