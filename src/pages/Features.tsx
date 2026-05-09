import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2, Check, Download, Phone, Mail, MonitorSmartphone, Info } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';

const FeatureBlock: React.FC<{ 
  title: string; desc: string; bullets: string[]; image: string; isReversed?: boolean; grayBg?: boolean; imgShadow?: boolean; ctaText?: string; ctaLink?: string 
}> = ({ title, desc, bullets, image, isReversed = false, grayBg = false, imgShadow = true, ctaText, ctaLink }) => {
  const { i18n } = useTranslation('landing');
  const isRTL = i18n.dir() === 'rtl';
  const imgDirection = isRTL ? (isReversed ? 'left' : 'right') : (isReversed ? 'right' : 'left');
  const textDirection = isRTL ? (isReversed ? 'right' : 'left') : (isReversed ? 'left' : 'right');

  return (
    <section className={`py-20 border-b border-slate-200 overflow-hidden ${grayBg ? 'bg-[#f4f7f9]' : 'bg-white'}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <FadeIn direction={textDirection}>
              <h2 className="text-3xl lg:text-[34px] font-medium text-slate-800 leading-tight">{title}</h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mt-2">{desc}</p>
              <ul className="flex flex-col gap-4 mt-4">
                {bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 font-light text-[16px]">
                    <CheckCircle2 className="w-5 h-5 text-[#00609c] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
              {ctaText && ctaLink && (
                <div className="mt-6">
                  <a href={ctaLink} className="inline-block bg-[#00609c] text-white px-8 py-3 rounded hover:bg-[#004d7d] transition-colors font-medium shadow-sm">
                    {ctaText}
                  </a>
                </div>
              )}
            </FadeIn>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <FadeIn direction={imgDirection}>
              <img src={image} alt={title} className={`max-w-full h-auto ${imgShadow ? 'drop-shadow-2xl rounded-lg' : ''}`} />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChecklistCategory: React.FC<{ title: string; items: {text: string; val?: string; isSub?: boolean; info?: boolean}[] }> = ({ title, items }) => (
  <div className="bg-white p-6 rounded shadow-sm border border-slate-100 mb-6">
    <h3 className="text-xl font-medium text-slate-800 mb-5">{title}</h3>
    <ul className="flex flex-col gap-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start justify-between gap-3 text-slate-600 font-light text-[14.5px]">
          <div className={`flex items-center gap-1.5 ${item.isSub ? 'pl-4' : ''}`}>
            <span className="leading-snug">{item.isSub ? `... ${item.text}` : item.text}</span>
            {item.info && (
              <Info className="w-4 h-4 text-[#88b3cb] fill-[#eef4f8] shrink-0 cursor-help" />
            )}
          </div>
          <div className="shrink-0 ml-2">
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
);

const SimpleFaqAccordion: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-6">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full text-left focus:outline-none group"
      >
        <h3 className="text-[17px] font-medium text-[#00609c] group-hover:underline leading-snug">
          {question}
        </h3>
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
        <div className="text-slate-600 font-light leading-relaxed text-[15px]">
          {answer}
        </div>
      </div>
    </div>
  );
};


export const Features: React.FC = () => {
  const { t, i18n } = useTranslation('landing');
  const isRTL = i18n.dir() === 'rtl';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // بيانات الميزات مقسمة إلى عمودين
  const leftColumnFeatures = [
    {
      title: "Route Optimization",
      items: [
        {text: "Intelligent multi-optimization", info: true}, {text: "Minimized driving distance", info: true},
        {text: "Maximized calls/visits", info: true}, {text: "Automatic customer selection", info: true},
        {text: "Manual customer selection", info: true}, {text: "Optimized call/visit schedule", info: true},
        {text: "Optimized call/visit frequency", info: true}, {text: "Fast calculation", info: true, val: "< 10 Sec."},
        {text: "Long-term planning", info: true, val: "up to 16 weeks"}, {text: "Multiple stops per week", info: true, val: "up to 125"},
        {text: "Optimize anytime", info: true}, {text: "Live traffic", info: true}, {text: "Overnight routes", info: true},
        {text: "Daily view", info: true}, {text: "Weekly view", info: true}, {text: "Drag-and-drop in the calendar", info: true},
        {text: "Monthly view", info: true}, {text: "Map view", info: true}, {text: "Driving time and distance", info: true},
        {text: "Include new leads", info: true}, {text: "Reminders", info: true}, {text: "Scheduled appointments", info: true},
        {text: "Flexible appointments", info: true}, {text: "Full- and multi-day-appointments", info: true},
        {text: "Overnight appointments", info: true}, {text: "Recurring appointments", info: true},
        {text: "Appointment suggestions", info: true}, {text: "Telephone calls", info: true},
        {text: "Special locations", info: true}, {text: "Business hours", info: true},
        {text: "Preferred call times", info: true}, {text: "Accounts on vacation", info: true},
        {text: "Call duration", info: true}, {text: "Launch navigation software", info: true},
        {text: "Route export", info: true}, {text: "iCal sharing", info: true}
      ]
    },
    {
      title: "Personal Settings",
      items: [
        {text: "Home location", info: true}, {text: "Working hours", info: true}, {text: "Lunch break", info: true},
        {text: "Driving speed", info: true}, {text: "Days off", info: true}, {text: "Preferred hotels", info: true}
      ]
    },
    {
      title: "Maps with Overview",
      items: [
        {text: "Route view", info: true}, {text: "Current traffic", info: true}, {text: "All customers on a map", info: true},
        {text: "Lasso-selection", info: true}, {text: "Filter", info: true}, {text: "Different Coloring", info: true},
        {text: "Individual symbols for customers", info: true}, {text: "Current location", info: true},
        {text: "Surrounding customers", info: true}, {text: "Automatic geocoding", info: true},
        {text: "Map license included", info: true}, {text: "Map updates included", info: true}
      ]
    },
    {
      title: "Rich Customer Management",
      items: [
        {text: "Customers max.", info: true, val: "3000"}, {text: "Import assistant", info: true},
        {text: "from Excel (XLS, XLSX)", isSub: true}, {text: "from OpenDocument (ODS)", isSub: true},
        {text: "from text-files (CSV, TXT)", isSub: true}, {text: "Update assistant", info: true},
        {text: "Quick search", info: true}, {text: "Alphabetical index", info: true},
        {text: "Extended search", info: true}, {text: "Sort & filter", info: true},
        {text: "Mass editing", info: true}, {text: "Map view", info: true},
        {text: "Create new customers", info: true}, {text: "Automatic geocoding", info: true},
        {text: "Standard fields", info: true}, {text: "Call interval/frequency", info: true},
        {text: "Call duration", info: true}, {text: "Last call/visit date", info: true},
        {text: "Call/visit history", info: true}, {text: "Upcoming appointments", info: true},
        {text: "Call/visit notes", info: true}, {text: "Custom fields", info: true},
        {text: "Export", info: true}, {text: "Transfer to other users", info: true}
      ]
    }
  ];

  const rightColumnFeatures = [
    {
      title: "Intelligent Territory Optimization",
      items: [
        {text: "Reduction of"}, {text: "driving time and mileage", isSub: true}, {text: "CO2 emissions", isSub: true},
        {text: "Fast calculation"}, {text: "Analysis of initial situation"}, {text: "Manual restrictions"},
        {text: "7-level prioritization model", info: true}, {text: "Balanced workload sales team"},
        {text: "Impact evaluation before implementation"}, {text: "Clear visualization", info: true},
        {text: "Optimization results applicable right away"}, {text: "Optimization results exportable"},
        {text: "Post-optimization adjustment options"}
      ]
    },
    {
      title: "Availability",
      items: [
        {text: "Languages", info: true}, {text: "English", isSub: true}, {text: "German", isSub: true},
        {text: "French", isSub: true}, {text: "Spanish", isSub: true}, {text: "Portuguese", isSub: true}, {text: "Italian", isSub: true},
        {text: "Regions", info: true}, {text: "Europe", isSub: true}, {text: "North America", isSub: true},
        {text: "Central America", isSub: true}, {text: "South America", isSub: true},
        {text: "Australia & New Zealand", isSub: true}, {text: "South Africa", isSub: true}
      ]
    },
    {
      title: "Start quickly",
      items: [
        {text: "Free trial", info: true, val: "30 days"}, {text: "Account in 5 minutes", info: true},
        {text: "No credit card required", info: true}, {text: "Quick data import", info: true},
        {text: "Try with demo-data", info: true}, {text: "Easy to use", info: true}
      ]
    },
    {
      title: "Quality & Security",
      items: [
        {text: "Offline capability", info: true}, {text: "High performance servers", info: true},
        {text: "High availability", info: true}, {text: "SSL-encrypted communication", info: true},
        {text: "Encrypted data storage", info: true}, {text: "Server location Vienna/Europe", info: true},
        {text: "Secure data center", info: true}, {text: "Own servers", info: true},
        {text: "No installation needed", info: true}, {text: "Automatic updates", info: true}
      ]
    },
    {
      title: "portatour® for Microsoft Dynamics CRM",
      items: [
        {text: "Installation in 15 minutes", info: true}, {text: "Supported Versions"},
        {text: "Dynamics CRM 2016", isSub: true}, {text: "Dynamics CRM 365", isSub: true},
        {text: "On Premise", isSub: true}, {text: "On Demand", isSub: true},
        {text: "Integration with Accounts", info: true}, {text: "Integration with Contacts", info: true},
        {text: "Integration with Leads", info: true}, {text: "Integration with Appointments", info: true},
        {text: "Uses existing data", info: true}, {text: "Synchronize with Anywhere", info: true}
      ]
    },
    {
      title: "portatour® API",
      items: [
        {text: "Synchronize your CRM/ERP", info: true}, {text: "HTTPS interface", info: true},
        {text: "Calling from the command line", isSub: true, info: true}, {text: "Calling from batch scripts", isSub: true, info: true},
        {text: "Calling from program code", isSub: true, info: true}, {text: "Calling directly in the browser", isSub: true},
        {text: "SSL encrypted data transfer", isSub: true}, {text: "Ready to go", info: true},
        {text: "Import and export of"}, {text: "Users", isSub: true}, {text: "Customers", isSub: true},
        {text: "Appointments", isSub: true}, {text: "Call reports", isSub: true}
      ]
    }
  ];

  return (
    <div className={`min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-[#00609c] ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* 1. Hero Section */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex flex-col gap-6 order-2 lg:order-1">
              <FadeIn direction={isRTL ? 'right' : 'left'}>
                <h1 className="text-4xl lg:text-[44px] font-medium text-slate-900 leading-[1.2]">
                  The gold standard in automated route planning
                </h1>
                <p className="text-lg text-slate-600 font-light leading-relaxed mt-4">
                  Highest quality automatic route planning calculated in mere seconds for top performance in the field.
                </p>
                <ul className="flex flex-col gap-4 mt-6">
                  <li className="flex items-start gap-3 text-slate-600 font-light text-[16px]">
                    <CheckCircle2 className="w-5 h-5 text-[#00609c] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Get optimized routes calculated within seconds by high-performance servers</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 font-light text-[16px]">
                    <CheckCircle2 className="w-5 h-5 text-[#00609c] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Per user, up to 1,000 customers can be automatically scheduled on routes with up to 125 stops per week</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 font-light text-[16px]">
                    <CheckCircle2 className="w-5 h-5 text-[#00609c] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">Update your schedule whenever necessary to ensure maximum efficiency</span>
                  </li>
                </ul>
              </FadeIn>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
              <FadeIn direction={isRTL ? 'left' : 'right'}>
                <img src="/assets/images/img-integrations-feature-01.webp" alt="Route Planning" className="max-w-md w-full drop-shadow-xl" />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Feature Blocks */}
      <FeatureBlock 
        grayBg={true} isReversed={false}
        title="The right customer at the right time"
        desc="It's a huge challenge to successfully put your sales strategy into action..."
        bullets={['High priority customers are scheduled more often and no one is forgotten', 'Automatic suggestions of surrounding customers fill gaps in your calendar', 'Specific business hours, holidays, and customers’ priorities are used in the calculations']}
        image="/assets/images/1a-iPad-EinTagesRouteMitPin-en-260x360.webp"
      />

      <FeatureBlock 
        grayBg={false} isReversed={true}
        title="Integrations"
        desc="Up-to-date data is essential for sales route planning..."
        bullets={['Fast and easy manual data import of Excel or CSV files', 'Out-of-the-box integrations with Salesforce, Microsoft Dynamics CRM, and Veeva CRM', 'Automated data synchronisation with the CRM/ERP of your choice']}
        image="/assets/images/img-crms-md-xl.webp" imgShadow={false}
        ctaText="Learn more about integrations" ctaLink="/integrations"
      />

      {/* 3. Infographic Section */}
      <section className="py-24 bg-[#f4f7f9] border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[40px] font-medium text-slate-800 mb-16">
              How route planning with S-Locator works
            </h2>
            <img 
              src="/assets/images/infographic-ultimate-sales-route-planning-en-lg-xl.webp" 
              alt="How route planning works" 
              className="w-full max-w-4xl mx-auto drop-shadow-sm" 
            />
          </FadeIn>
        </div>
      </section>

      {/* 4. More Feature Blocks */}
      <FeatureBlock 
        grayBg={false} isReversed={false} imgShadow={false}
        title="You are the ideal S-Locator user"
        desc="If..."
        bullets={['You are active in the field and serve more than 100 customers in your territory', 'You plan your own routes and visit at least four customers per day', 'You drive more than two hours per day']}
        image="/assets/images/img-ideal-user.svg"
      />

      <FeatureBlock 
        grayBg={true} isReversed={true}
        title="Work, your way"
        desc="S-Locator makes your working life easier, all while ensuring your freedom and flexibility to work the way you want."
        bullets={['Set your working hours, breaks and driving speed', 'Take advantage of automatic overnight stay suggestions at your favorite hotels', 'Include private appointments and other errands seamlessly into your calendar']}
        image="/assets/images/6a-Galaxy-Arbeitszeit-en-166x359.webp"
      />

      <FeatureBlock 
        grayBg={false} isReversed={false}
        title="The personal assistant for schedule updates on the fly"
        desc="Unanticipated changes can occur at any time throughout the day and can throw a monkey-wrench into the best-laid plans. S-Locator instantly solves this problem for you:"
        bullets={['Stood up? S-Locator automatically suggests customers who are open, nearby, and ready for a visit', 'A customer has no time for you today? No problem with automatic rescheduling at the push of a button', 'S-Locator ensures you leave enough time between appointments to be on time for your visits']}
        image="/assets/images/7a-Galaxy-Besuchsplan-durcharbeiten-en-166x359.webp"
      />

      <FeatureBlock 
        grayBg={true} isReversed={true}
        title="Customer insights on a map"
        desc="Do you want to know where your ABC customers are to understand the territory's full dimensions? Get an overview with the S-Locator route planning map:"
        bullets={['See all your customers on a map', 'Color-code your customer maps according to priority, ABC classification, or other predefined categories', 'Display surrounding customers that are open to drop-in when you have some spare time']}
        image="/assets/images/2a-Mac-Landkarte-Faelligkeiten-en-351x239.webp"
      />

      <FeatureBlock 
        grayBg={false} isReversed={false}
        title="Perfectly connected on the go"
        desc="Do you need to have the latest customer information at hand? But you are tired of bringing your laptop along?"
        bullets={['S-Locator is available on all mobile devices', 'Your gadget will be your personal sales-route planner', 'Automatic data synchronization with CRM/ERP possible']}
        image="/assets/images/9b-Responsive-Kundenblatt-en-344x259.webp"
      />

      <FeatureBlock 
        grayBg={true} isReversed={true}
        title="Simple reports, intelligent analysis"
        desc="Are you unable to see the bigger picture because you are lacking structure in your reports? S-Locator will make things easier:"
        bullets={['Document customer visits on your mobile device right after each stop', 'Gather concise information with customized reports', 'Analyze your work with automatic daily and weekly statistics']}
        image="/assets/images/10a-iPad-Besuchsbericht-en-260x360.webp"
      />

      <FeatureBlock 
        grayBg={false} isReversed={false} imgShadow={false}
        title="Technical requirements"
        desc="S-Locator is a web application with minimal technical requirements and easy usage:"
        bullets={['No installation', 'Works on iOS, Android, Windows, macOS, Linux', 'Current browsers are supported', 'Offline-mode available']}
        image="/assets/images/img-technical-requirements.svg"
      />

      {/* 5. PDF Download */}
      <section className="py-20 bg-[#f4f7f9] border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <FadeIn direction={isRTL ? 'right' : 'left'}>
                <h2 className="text-3xl lg:text-[34px] font-medium text-slate-800 leading-tight">
                  Get the summary as PDF for your boss
                </h2>
                <ul className="flex flex-col gap-4 mt-6">
                  {['One single document', 'All important facts about route planning with S-Locator', 'Perfect to circulate to executives'].map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 font-light text-[16px]">
                      <CheckCircle2 className="w-5 h-5 text-[#00609c] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
              <FadeIn direction={isRTL ? 'left' : 'right'}>
                <img src="/assets/images/img-download.svg" alt="PDF Download" className="max-w-xs mb-8" />
                <a href="#" className="bg-white border-2 border-[#00609c] text-[#00609c] px-8 py-3.5 rounded font-medium hover:bg-[#00609c] hover:text-white transition-colors shadow-sm flex items-center gap-3">
                  <Download className="w-5 h-5" /> Download brochure
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Giant Blue CTA */}
      <section className="bg-[#00609c] py-20 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[40px] font-medium text-white mb-6 leading-tight">
              Start exploring the features of automatic route optimization today
            </h2>
            <p className="text-blue-100 text-lg font-light mb-10">Upload your addresses, calculate your first schedule and start driving on your optimized sales-routes.</p>
            <button className="bg-[#f0ad4e] hover:bg-[#e09e3e] text-white px-10 py-4 rounded font-medium transition-colors shadow-lg text-lg">
              Start 30-day free trial
            </button>
            <p className="text-blue-200 text-sm font-light mt-6">Full version. No credit card required. Automatic termination.</p>
          </FadeIn>
        </div>
      </section>

      {/* 7. Huge Checklist Section  */}
      <section className="py-24 bg-[#eef4f8] border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[44px] font-medium text-slate-800 text-center mb-16">List of features</h2>
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

      {/* 8. Frequently Asked Questions  */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-[40px] font-medium text-slate-800 text-center mb-16">
              {t('features_page.faq.title', 'Frequently asked questions')}
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

            {/* العمود الأيمن (الأسئلة 11 إلى 21) */}
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

      {/* 9. Contact Section */}
      <section className="bg-slate-50 py-24 overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-medium text-slate-800 mb-4">{t('contact.title', 'Contact us!')}</h2>
              <div className="mt-4 text-[15px] text-slate-500 font-light flex items-center justify-center gap-2">
                 <MonitorSmartphone className="w-4 h-4 text-[#6699b8]" /> Available by phone from Mon-Fri, 9-17h CET
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeIn direction={isRTL ? 'left' : 'right'}>
              <div className="bg-white p-10 rounded shadow-sm border border-slate-100 text-center flex flex-col items-center">
                <h3 className="text-[17px] font-light text-slate-600 mb-2">I am already a user and need</h3>
                <h4 className="text-[32px] font-light text-slate-800 mb-8">Support</h4>
                <button className="bg-[#00609c] text-white px-8 py-3.5 rounded hover:bg-[#004d7d] transition-colors mb-10 text-[15px]">
                  To the HelpCenter
                </button>
                <div className="flex flex-col gap-4 text-[#00609c] font-light text-[15px] items-start w-full max-w-xs mx-auto">
                  <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#6699b8]" /> US: +1 646-974-60-50</div>
                  <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#6699b8]" /> EU: +43 1 2531516-50</div>
                  <div className="flex items-center gap-3 mt-2"><Mail className="w-5 h-5 text-[#6699b8]" /> support@s-locator.com</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction={isRTL ? 'right' : 'left'} delay={200}>
              <div className="bg-white p-10 rounded shadow-sm border border-slate-100 text-center flex flex-col items-center">
                <h3 className="text-[17px] font-light text-slate-600 mb-2">I am interested and would like</h3>
                <h4 className="text-[32px] font-light text-slate-800 mb-8">Buying advice</h4>
                <div className="flex flex-col gap-4 text-[#00609c] font-light text-[15px] items-start w-full max-w-xs mx-auto mt-2">
                  <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#6699b8]" /> US: +1 646-974-6040</div>
                  <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#6699b8]" /> EU: +43 1 2531516-40</div>
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

export default Features;