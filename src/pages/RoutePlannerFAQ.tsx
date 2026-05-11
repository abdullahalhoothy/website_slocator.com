import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Plus, Minus, Phone, Mail, MonitorSmartphone } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';

const FaqItem: React.FC<{ question: string; answer: React.ReactNode; isLast: boolean }> = ({ question, answer, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`border-slate-200 transition-all ${isLast ? '' : 'border-b'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
      >
        <span className="font-medium text-[#6699b8] text-[17px] pr-4 leading-snug group-hover:text-[#00609c] transition-colors">
          {question}
        </span>
        <div className="shrink-0 text-[#88b3cb] group-hover:text-[#00609c] transition-colors">
          {isOpen ? <Minus className="w-6 h-6 stroke-[1.5]" /> : <Plus className="w-6 h-6 stroke-[1.5]" />}
        </div>
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 mb-5' : 'max-h-0 opacity-0'}`}>
        <div className="text-slate-600 font-light leading-relaxed text-[15px]">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const RoutePlannerFAQ: React.FC = () => {
  const { t, i18n } = useTranslation('landing');
  const isRTL = i18n.dir() === 'rtl';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const FAQ_DATA = [
    {
      categoryId: 'general',
      title: t('routePlannerFaq.categories.general', 'General'),
      questions: [
        {
          q: t('routePlannerFaq.questions.general.q1.q', 'Is S-Locator for centralized or decentralized route planning?'),
          a: t('routePlannerFaq.questions.general.q1.a', 'S-Locator can be used for centralized, decentralized and combined route planning. Decentralized planning means that the field reps plan their routes themselves using S-Locator. Centralized planning is when back-office staff uses S-Locator to plan routes for the field rep team.')
        },
        {
          q: t('routePlannerFaq.questions.general.q2.q', 'Can S-Locator help me avoid traffic jams?'),
          a: t('routePlannerFaq.questions.general.q2.a', 'Yes, if desired, S-Locator takes the current traffic situation into account when planning the route. For the next trip, priority is then given to those customers who can be reached on roads free of traffic jams.')
        },
        {
          q: t('routePlannerFaq.questions.general.q3.q', 'Does S-Locator Route Planner also support me in integrating new customers?'),
          a: t('routePlannerFaq.questions.general.q3.a', 'Yes – import your new customers into the CRM system of your choice and S-Locator will calculate optimized route plans to visit new customers in addition to your existing customers in a mileage-efficient manner.')
        },
        {
          q: t('routePlannerFaq.questions.general.q4.q', 'What are the benefits of territory optimization and route planning from a single source?'),
          a: t('routePlannerFaq.questions.general.q4.a', 'With S-Locator Territory Optimization + Route Planner, you will experience a level of field sales efficiency you never thought possible. We combine the power of the best route-planning solution on the market with next-generation dynamic territory optimization.')
        },
        {
          q: t('routePlannerFaq.questions.general.q5.q', 'Will S-Locator Route Planner record the routes I drive?'),
          a: t('routePlannerFaq.questions.general.q5.a', 'No; S-Locator Route Planner does not store GPS records of drives. S-Locator is not a surveillance tool. Instead, it is a great help for field reps to visit more customers and drive fewer miles.')
        }
      ]
    },
    {
      categoryId: 'industries',
      title: t('routePlannerFaq.categories.industries', 'Industries'),
      questions: [
        {
          q: t('routePlannerFaq.questions.industries.q1.q', 'For which industries is route planning suitable?'),
          a: t('routePlannerFaq.questions.industries.q1.a', 'S-Locator Route Planner is suitable for any size of business: From a one-person company to large corporations with 1,000+ field staff across all varied industries (Pharmaceutical, medical, FMCG, etc).')
        },
        {
          q: t('routePlannerFaq.questions.industries.q2.q', 'Which use cases is S-Locator suitable for?'),
          a: t('routePlannerFaq.questions.industries.q2.a', 'S-Locator is used for route planning in field sales with regular client calls, one-time visits as part of a product launch, pricing and inventory control in outlets, mystery shopping, new customer acquisition, and recurring service activities.')
        }
      ]
    },
    {
      categoryId: 'security',
      title: t('routePlannerFaq.categories.security', 'Information Security'),
      questions: [
        {
          q: t('routePlannerFaq.questions.security.q1.q', 'Is there an offline version of S-Locator?'),
          a: t('routePlannerFaq.questions.security.q1.a', 'S-Locator is an online-web-application with support for offline data storage. In situations without internet connection, your most important data is readily available offline in your browser.')
        },
        {
          q: t('routePlannerFaq.questions.security.q2.q', 'Is S-Locator available 24/7?'),
          a: t('routePlannerFaq.questions.security.q2.a', 'S-Locator is designed for high availability: Multiple redundant high performance servers with automatic load balancing, 24/7-Monitoring with automatic alarm, and redundant fiber connectivity.')
        },
        {
          q: t('routePlannerFaq.questions.security.q3.q', 'Where is the login? How do I get my access link?'),
          a: t('routePlannerFaq.questions.security.q3.a', 'If you already have a trial or a paid account, you can use the login button in the top right corner. If you are an employee, you receive your access link from your administrator.')
        }
      ]
    },
    {
      categoryId: 'access',
      title: t('routePlannerFaq.categories.access', 'Access'),
      questions: [
        {
          q: t('routePlannerFaq.questions.access.q1.q', 'Is there an offline version of S-Locator?'),
          a: t('routePlannerFaq.questions.access.q1.a', 'S-Locator is an online-web-application with support for offline data storage. In situations without internet connection, your most important data is readily available offline in your browser.')
        },
        {
          q: t('routePlannerFaq.questions.access.q2.q', 'Is S-Locator available 24/7?'),
          a: t('routePlannerFaq.questions.access.q2.a', 'S-Locator is designed for high availability: Multiple redundant high performance servers with automatic load balancing, 24/7-Monitoring with automatic alarm, and redundant fiber connectivity.')
        },
        {
          q: t('routePlannerFaq.questions.access.q3.q', 'Where is the login? How do I get my access link?'),
          a: t('routePlannerFaq.questions.access.q3.a', 'If you already have a trial or a paid account, you can use the login button in the top right corner. If you are an employee, you receive your access link from your administrator.')
        }
      ]
    },
    {
      categoryId: 'test',
      title: t('routePlannerFaq.categories.test', 'Test and demo'),
      questions: [
        {
          q: t('routePlannerFaq.questions.test.q1.q', "I'd like to get a demonstration of S-Locator Route Planner."),
          a: t('routePlannerFaq.questions.test.q1.a', "Would you like to present the sales route planning software S-Locator to your company? We are happy to prepare an online presentation for your management, sales management, and IT management.")
        },
        {
          q: t('routePlannerFaq.questions.test.q2.q', "Is S-Locator the best route planning software for me?"),
          a: t('routePlannerFaq.questions.test.q2.a', "S-Locator is the best route planning software for you, if you are visiting your customers on a regular basis and spending most of your week on the road.")
        },
        {
          q: t('routePlannerFaq.questions.test.q3.q', "How do I get help and support for S-Locator?"),
          a: t('routePlannerFaq.questions.test.q3.a', "When receiving your account data you also get access to tutorial videos and PDF manuals. Within the application you will find online help. Additionally, our support team is happy to help you via email.")
        },
        {
          q: t('routePlannerFaq.questions.test.q4.q', "Can I try S-Locator without obligation or cost?"),
          a: t('routePlannerFaq.questions.test.q4.a', "Yes. Sign up for a free trial of S-Locator Anywhere, a web-version without further requirements. The trial license will automatically expire after 30 days and is limited to one user.")
        }
      ]
    },
    {
      categoryId: 'purchase',
      title: t('routePlannerFaq.categories.purchase', 'Purchase'),
      questions: [
        {
          q: t('routePlannerFaq.questions.purchase.q1.q', "Can I buy a perpetual S-Locator license?"),
          a: t('routePlannerFaq.questions.purchase.q1.a', "No – S-Locator is a “software as a service” application. You subscribe to S-Locator as a service and save yourself costs for server hardware, software, installation, maintenance and operation.")
        },
        {
          q: t('routePlannerFaq.questions.purchase.q2.q', "How much do I save with S-Locator? How soon does it pay off?"),
          a: t('routePlannerFaq.questions.purchase.q2.a', "You currently spend an average of 50€ per customer visit, all expenses considered. With S-Locator, one additional visit per day is possible, meaning 20 additional visits per month. This generates added value equivalent to 1000€ per field rep and per month.")
        }
      ]
    },
    {
      categoryId: 'integrations',
      title: t('routePlannerFaq.categories.integrations', 'Integrations'),
      questions: [
        {
          q: t('routePlannerFaq.questions.integrations.q1.q', "Can I integrate the S-Locator route planning algorithm into my own field rep app?"),
          a: t('routePlannerFaq.questions.integrations.q1.a', "Yes, you can! Check out our RESTful JSON S-Locator ISV API.")
        },
        {
          q: t('routePlannerFaq.questions.integrations.q2.q', "Can I use S-Locator Route Planner with Salesforce, Dynamics CRM or other CRM/ERP systems?"),
          a: t('routePlannerFaq.questions.integrations.q2.a', "Yes, S-Locator Route Planner works with Salesforce, Microsoft Dynamics CRM, Siebel CRM, Sugar CRM and other CRM/ERP systems.")
        },
        {
          q: t('routePlannerFaq.questions.integrations.q3.q', "Can S-Locator be connected to my CRM?"),
          a: t('routePlannerFaq.questions.integrations.q3.a', "Yes! S-Locator integrates with popular CRM systems like Salesforce or Microsoft Dynamics or imports data via CSV/Excel. This means that customer master data, visit histories and sales targets are always up-to-date.")
        }
      ]
    }
  ];

  return (
    <div className={`min-h-screen bg-[#f8fafc] font-sans text-slate-900 selection:bg-blue-100 selection:text-[#00609c] ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* 1. Header Section */}
      <section className="pt-20 pb-16 text-center bg-[#f8fafc]">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn direction="up">
            <h1 className="text-4xl lg:text-[44px] font-medium text-slate-800 mb-4 leading-tight">
              {t('routePlannerFaq.hero.title', 'FAQs about the S-Locator Route Planner')}
            </h1>
            <h2 className="text-xl text-slate-600 font-light">
              {t('routePlannerFaq.hero.subtitle', 'Find the answer to your question')}
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* 2. FAQs Categories */}
      <section className="pb-24 bg-[#f8fafc]">
        <div className="container mx-auto px-4 max-w-4xl">
          {FAQ_DATA.map((category) => (
            <div key={category.categoryId} className="mb-16">
              <FadeIn direction="up">
                <h3 className="text-3xl font-medium text-slate-800 text-center mb-8">{category.title}</h3>
                <div className="border-t border-b border-slate-200">
                  {category.questions.map((item, qIdx) => (
                    <FaqItem 
                      key={qIdx} 
                      question={item.q} 
                      answer={item.a} 
                      isLast={qIdx === category.questions.length - 1} 
                    />
                  ))}
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Giant Blue CTA */}
      <section className="bg-[#00609c] py-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[36px] font-medium text-white mb-10 leading-tight">
              {t('routePlannerFaq.cta.title', 'Many questions are answered in practice – try S-Locator free for 30 days.')}
            </h2>
            <a href="/get-started" className="inline-block bg-[#f0ad4e] hover:bg-[#e09e3e] text-white px-10 py-4 rounded font-medium transition-colors shadow-lg text-lg">
              {t('routePlannerFaq.cta.btn', 'Test now 30 days for free*')}
            </a>
            <p className="text-blue-200 text-sm font-light mt-6">
              {t('routePlannerFaq.cta.note', '*Full version. No credit card required. Automatic termination.')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 4. Contact Section */}
      <section className="bg-white py-24 border-t border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-medium text-slate-800 mb-4">{t('contactPage.hero.title', 'Contact us!')}</h2>
              <div className="mt-4 text-[15px] text-slate-500 font-light flex items-center justify-center gap-2">
                 <MonitorSmartphone className="w-4 h-4 text-[#6699b8]" /> {t('contactPage.hero.availability', 'Available by phone from Mon-Fri, 9-17h CET')}
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn direction={isRTL ? 'left' : 'right'}>
              <div className="bg-white p-10 rounded shadow-sm border border-slate-100 text-center flex flex-col items-center">
                <h3 className="text-[17px] font-light text-slate-600 mb-2">{t('contactPage.support.pretitle', 'I am already a user and need')}</h3>
                <h4 className="text-[32px] font-light text-slate-800 mb-8">{t('contactPage.support.title', 'Support')}</h4>
                <button className="bg-[#00609c] text-white px-8 py-3.5 rounded hover:bg-[#004d7d] transition-colors mb-10 text-[15px]">
                  {t('contactPage.support.btn', 'To the HelpCenter')}
                </button>
                <div className="flex flex-col gap-4 text-[#00609c] font-light text-[15px] items-start w-full max-w-xs mx-auto">
                  <div className="flex items-center gap-3" dir="ltr"><Phone className="w-5 h-5 text-[#6699b8]" /> KSA: +966 55 818 8632</div>
                  <div className="flex items-center gap-3 mt-2"><Mail className="w-5 h-5 text-[#6699b8]" /> support@s-locator.com</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction={isRTL ? 'right' : 'left'} delay={200}>
              <div className="bg-white p-10 rounded shadow-sm border border-slate-100 text-center flex flex-col items-center">
                <h3 className="text-[17px] font-light text-slate-600 mb-2">{t('contactPage.sales.pretitle', 'I am interested and would like')}</h3>
                <h4 className="text-[32px] font-light text-slate-800 mb-8">{t('contactPage.sales.title', 'Buying advice')}</h4>
                <div className="flex flex-col gap-4 text-[#00609c] font-light text-[15px] items-start w-full max-w-xs mx-auto mt-2">
                  <div className="flex items-center gap-3" dir="ltr"><Phone className="w-5 h-5 text-[#6699b8]" /> Canada: +1 514-814-5180</div>
                  <div className="flex items-center gap-3" dir="ltr"><Phone className="w-5 h-5 text-[#6699b8]" /> KSA: +966 55 818 8632</div>
                  <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-[#6699b8]" /> sales@s-locator.com</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RoutePlannerFAQ;