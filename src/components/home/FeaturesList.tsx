import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, Quote } from 'lucide-react';
import { FadeIn } from '../animations/FadeIn';

export const FeaturesList: React.FC = () => {
  const { t, i18n } = useTranslation('landing');
  const isRTL = i18n.dir() === 'rtl';

  const FEATURES_DATA = [
    {
      id: 1,
      title: t('features.betterService', 'Better customer service'),
      bullets: [
        t('features.betterService1', 'Your customers are optimally distributed to your field sales territories.'),
        t('features.betterService2', 'All customers are scheduled with AI support according to their ABC priorities.'),
        t('features.betterService3', 'No customer is forgotten.'),
        t('features.betterService4', 'Call times and vacations of your customers are taken into account.')
      ],
      image: '/assets/images/portatour-customer-service.webp',
      testimonial: {
        text: t('features.test1.text', 'A colleague got to know his territory in a completely new way through S-Locator. He also rediscovered forgotten customers.'),
        author: "Mitchell Glindemann",
        role: "Müpro",
        image: '/assets/images/portrait-muepro.webp'
      },
      reversed: false,
    },
    {
      id: 2,
      title: t('features.quickStart', 'Quick start'),
      bullets: [
        t('features.quickStart1', 'Simply open the S-Locator web app on your smartphone, tablet or desktop.'),
        t('features.quickStart2', 'You use the ready-to-go S-Locator SaaS solution.'),
        t('features.quickStart3', 'Get started after a short training session, we are happy to help.')
      ],
      image: '/assets/images/portatour-schedule.webp',
      testimonial: {
        text: t('features.test2.text', 'We chose S-Locator, among others, because it was the most intuitive and easiest to set up.'),
        author: "Bastian Rittgen",
        role: "Wild Beauty",
        image: '/assets/images/portrait-wb-rittgen.webp'
      },
      reversed: true,
    },
    {
      id: 3,
      title: t('features.simpleConnection', 'Simple connection'),
      bullets: [
        t('features.simpleConnection1', 'Import your customers and appointments at the push of a button.'),
        t('features.simpleConnection2', 'Works with Microsoft Dynamics CRM, Salesforce and other CRM/ERP systems.'),
        t('features.simpleConnection3', 'Become part of a strong network: Support companies with integration as a trusted partner and system integrator.')
      ],
      image: '/assets/images/portatour-integrations.webp',
      testimonial: {
        text: t('features.test3.text', 'Integrating S-Locator into our CRM was a crucial step that simplified our processes and boosted efficiency even further.'),
        author: "Marvin Darmstädter",
        role: "MainTea",
        image: '/assets/images/portrait-maintea.webp'
      },
      reversed: false,
    }
  ];

  return (
    <section className={`py-12 bg-white overflow-hidden ${isRTL ? 'text-right' : 'text-left'}`}>
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {FEATURES_DATA.map((feature, index) => (
          <div key={feature.id} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 py-16 ${index !== 0 ? 'border-t border-slate-100' : ''} ${feature.reversed ? 'lg:flex-row-reverse' : ''}`}>
            
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <FadeIn direction={feature.reversed ? (isRTL ? "left" : "right") : (isRTL ? "right" : "left")}>
                <h2 className="text-3xl font-light text-slate-800">{feature.title}</h2>
                <ul className="flex flex-col gap-4 mt-6">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 font-light">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {feature.testimonial && (
                  <div className="mt-6 bg-slate-50 border border-slate-100 p-6 rounded-2xl flex gap-5 shadow-sm">
                    <div className="flex flex-col items-center shrink-0">
                      <img src={feature.testimonial.image} alt={feature.testimonial.author} className="w-14 h-14 rounded-full object-cover shadow-sm mb-2 bg-white" />
                      <Quote className={`w-6 h-6 text-purple-300 fill-purple-100 ${isRTL ? '' : 'rotate-180'}`} />
                    </div>
                    <div>
                      <p className="text-slate-700 italic font-light mb-3 text-[15px] leading-relaxed">"{feature.testimonial.text}"</p>
                      <div className="text-sm font-medium text-slate-900">{feature.testimonial.author}</div>
                      <div className="text-xs text-slate-500">{feature.testimonial.role}</div>
                    </div>
                  </div>
                )}
              </FadeIn>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <FadeIn direction={feature.reversed ? (isRTL ? "right" : "left") : (isRTL ? "left" : "right")}>
                <img src={feature.image} alt={feature.title} className="max-w-full h-auto drop-shadow-xl rounded-lg" loading="lazy" />
              </FadeIn>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};