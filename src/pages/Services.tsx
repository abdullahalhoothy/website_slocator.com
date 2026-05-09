import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Database, Settings, Users, MessageCircleQuestion, 
  Rocket, ArrowRightLeft, Code, Map 
} from 'lucide-react';

export const Services: React.FC = () => {
  const { t, i18n } = useTranslation('landing');
  const isRTL = i18n.dir() === 'rtl';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // دالة للتمرير السلس للقسم المطلوب
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // مسافة تعويضية للهيدر الثابت
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const SERVICES_DATA = [
    {
      id: 'datacheck',
      icon: Database,
      title: t('services.grid.datacheck', 'Data Check'),
      shortDesc: t('services.grid.datacheckDesc', "Ensuring your data's compatibility"),
      fullDesc: 'In this online workshop, we jointly analyze the data you export from your CRM/ERP system. We provide hints and suggestions for improvement to ensure compatibility with S-Locator and overall completeness for effective route planning.',
      leftCol: [
        { label: t('services.labels.target', 'Target audience'), text: 'IT/CRM management and field service sales management' },
        { label: t('services.labels.topics', 'Topics'), text: 'Analysis of the exported files, review and editing of your workflow definitions (e.g. adapt SQL query), answers to your questions about S-Locator data formats.' },
        { label: 'Data Check', text: 'Availability of necessary fields, availability of recommended fields, unique field names, address quality, number of records, encoding and escaping, format and value ranges, unnecessary data fragments' },
        { label: t('services.labels.participation', 'Participation'), text: 'Via online meeting' },
        { label: t('services.labels.duration', 'Duration'), text: 'Approx. 1 hour' },
      ],
      rightCol: [
        { label: t('services.labels.prepare', 'Preliminary work by you'), text: 'Configure a repeatable export workflow in your CRM/ERP system. This should export all relevant customer and user data to CSV or Excel files. Send us this data in advance.' },
        { label: t('services.labels.exclusive', 'Exclusive'), text: 'The workshop is held exclusively and individually for you.' },
        { label: t('services.labels.procedure', 'Procedure'), text: 'After ordering and setting the appointment, you will receive a link to the online meeting. During the workshop, we call you or you dial into a conference call if participants are in more than one location.' },
      ]
    },
    {
      id: 'setupworkshop',
      icon: Settings,
      title: t('services.grid.setup', 'Setup Workshop'),
      shortDesc: t('services.grid.setupDesc', 'Getting you up and running with S-Locator'),
      fullDesc: 'In this two-part online workshop, you will first prepare your CRM/ERP data for import and define the general parameters, then we\'ll help you configure S-Locator and populate it with your customer data.',
      leftCol: [
        { label: t('services.labels.target', 'Target audience'), text: 'Outside sales director and IT administrators' },
        { label: 'Topics Part 1 - Preparation', text: 'Analysing exported data, reviewing and editing your workflow definition, Q&A session about S-Locator data formats, and preliminary discussion of Part 2 of the Setup workshop - approx. 1 hour.' },
        { label: 'Topics Part 2 - Implementation', text: 'User management, preparing and quality checking customer data, defining your visit strategy, setting your route-planning parameters, software configuration, additional fields for customers and visit reports, data import and export, test, and preliminary discussion of user training - approx. 2 hours.' },
        { label: t('services.labels.participation', 'Participation'), text: 'Via online meeting' },
        { label: t('services.labels.prerequisite', 'Prerequisite'), text: 'S-Locator user licenses purchased in the online shop.' },
        { label: t('services.labels.duration', 'Duration'), text: 'Approx. 3 hours' },
      ],
      rightCol: [
        { label: t('services.labels.prepare', 'How to prepare'), text: 'Prepare all relevant customer and user data as an Excel or CSV file. Required: customer name, full address and unique ID/reference number, plus unique employee (i.e. sales rep) ID/reference number. Export the current data from your CRM/ERP system if you have one.' },
        { label: t('services.labels.exclusive', 'Exclusive'), text: 'The workshop is held exclusively and individually for you.' },
        { label: t('services.labels.procedure', 'Procedure'), text: 'After ordering and setting the appointment, you will receive a link to the online meeting. During the workshop, we call you or you dial into a conference call if participants are in more than one location.' },
        { label: 'Optional topics', text: 'API interface for export/import, Dynamics CRM setup, Salesforce setup' },
      ]
    },
    {
      id: 'usertraining',
      icon: Users,
      title: t('services.grid.training', 'User Training'),
      shortDesc: t('services.grid.trainingDesc', 'Learning daily usage of S-Locator'),
      fullDesc: 'During the online user training, your field reps learn how to use S-Locator effectively every day for route and appointment-planning and call reporting.',
      leftCol: [
        { label: t('services.labels.target', 'Target audience'), text: 'Field reps, IT-support team, field & sales management' },
        { label: t('services.labels.topics', 'Topics'), text: 'Logging in, user interface, route planning, planning parameters, appointments, working through a day\'s route, call reporting, customer management, statistics, data synchronization, options...' },
        { label: t('services.labels.participation', 'Participation'), text: 'Via online meeting. Connection is possible from multiple locations, with a maximum of 25 participants.' },
        { label: t('services.labels.duration', 'Duration'), text: 'Approx. 2 hours' },
        { label: 'Optional', text: 'Video recording for internal use' },
      ],
      rightCol: [
        { label: t('services.labels.prerequisite', 'Prerequisite'), text: 'S-Locator user licenses purchased in the online shop, users created and customer data already imported. We recommend previous participation in a setup workshop.' },
        { label: t('services.labels.exclusive', 'Exclusive'), text: 'The user-training is presented exclusively and individually for you.' },
        { label: t('services.labels.procedure', 'Procedure'), text: 'After ordering and setting the appointment, you will receive a link to the online meeting. For the training session, we call you or you call into a teleconference, if participants are in more than one location.' },
      ]
    },
    {
      id: 'qasession',
      icon: MessageCircleQuestion,
      title: t('services.grid.qa', 'Q&A Session'),
      shortDesc: t('services.grid.qaDesc', 'Answering your open questions'),
      fullDesc: 'In one or more Q&A sessions, the field reps get the answers to their questions. Additional usability tips for S-Locator are also provided.',
      leftCol: [
        { label: 'Time', text: 'First session approx. 1 to 2 weeks after the start of the S-Locator project.' },
        { label: t('services.labels.target', 'Target audience'), text: 'Field reps, IT-support team, field & sales management' },
        { label: t('services.labels.participation', 'Participation'), text: 'By conference call' },
        { label: t('services.labels.duration', 'Duration'), text: 'Approx. 1-2 hours per session' },
      ],
      rightCol: [
        { label: t('services.labels.topics', 'Topics'), text: 'Any issues and questions will be discussed and resolved. Based on the feedback, the configuration is continuously improved and thus refined for other users. In the spirit of "do good and talk about it", positive observations will also be discussed: How has everyday work been made easier? How has planning been simplified? What tips can I give my colleagues?' },
      ]
    },
    {
      id: 'starterpack',
      icon: Rocket,
      title: t('services.grid.starter', 'Starter package'),
      shortDesc: t('services.grid.starterDesc', 'Quick start for up to 9 users'),
      fullDesc: 'This three-part workshop designed for 2–9 people will get your field sales team up and running quickly and effectively.',
      leftCol: [
        { label: 'Target audience, parts 1+2', text: 'Field Sales management and IT/CRM management' },
        { label: 'Topics in part 1 – Setup preparation', text: 'Analysing exported data, reviewing and editing your workflow definition, Q&A session about S-Locator data formats, and preliminary discussion of Part 2 of the Setup workshop – approx. 1 hour.' },
        { label: 'Topics in part 2 – Setup implementation', text: 'User management, preparing and quality checking customer data, defining your visit strategy, setting your route-planning parameters, other aspect of software configuration, additional fields for customers and call reports, data import and export, test, and preliminary discussion of user training – approx. 1 hour.' },
        { label: 'Target audience, part 3', text: 'Sales reps, IT support team, back office sales, sales managers' },
        { label: 'Topics in part 3', text: 'Logging in, user interface, route planning, planning parameters, appointments, working through a day\'s route, call reporting, customer management – approx. 1 hour.' },
        { label: t('services.labels.participation', 'Participation'), text: 'Via online meeting' },
        { label: t('services.labels.prerequisite', 'Prerequisite'), text: 'S-Locator user licenses purchased in the online shop.' },
        { label: t('services.labels.duration', 'Duration'), text: 'Approx. 3 hours in total' },
      ],
      rightCol: [
        { label: t('services.labels.prepare', 'How to prepare'), text: 'Prepare all relevant customer and user data as an Excel or CSV file. Required: customer name, full address and unique ID/reference number, plus unique employee (i.e. sales rep) ID/reference number. Export the current data from your CRM/ERP system if you have one.' },
        { label: t('services.labels.exclusive', 'Exclusive'), text: 'Exclusive workshops tailored to your specific needs.' },
        { label: t('services.labels.procedure', 'Procedure'), text: 'After placing your order and agreeing the date, you will receive a link to the online meetings. On the day, we will call you, or you can dial into a conference call if participants are in more than one location.' },
        { label: 'Optional', text: 'Video recording for internal use' },
      ]
    },
    {
      id: 'dataexchange',
      icon: ArrowRightLeft,
      title: t('services.grid.data', 'Data Import-Export Workshop'),
      shortDesc: t('services.grid.dataDesc', 'Automating data import/export'),
      fullDesc: 'In this online workshop, we work with you to configure scripts for automatic data import and export. Exporting data from your system and importing data into your system is not part of the workshop. You will also receive tips on automation.',
      leftCol: [
        { label: t('services.labels.target', 'Target audience'), text: 'IT/CRM administrators' },
        { label: t('services.labels.topics', 'Topics'), text: 'Download data exchange scripts, check or set permissions, check or completion of S-Locator configuration and import configuration, configuration of scripts according to your requirements, first-time execution of scripts, tips for automating the data exchange process' },
        { label: t('services.labels.participation', 'Participation'), text: 'Via online meeting' },
        { label: t('services.labels.prerequisite', 'Prerequisite'), text: 'S-Locator user licenses purchased in the online shop. We recommend previous participation in a data check and setup workshop.' },
        { label: t('services.labels.duration', 'Duration'), text: 'Approx. 2 hours' },
      ],
      rightCol: [
        { label: t('services.labels.prepare', 'Preliminary work by you'), text: 'Log in as an administrator on the PC or server on which the data exchange scripts provided by us should be executed. The network configuration (firewall, proxy) must allow access to S-Locator API.' },
        { label: t('services.labels.exclusive', 'Exclusive'), text: 'The workshop is held exclusively and individually for you.' },
        { label: t('services.labels.procedure', 'Procedure'), text: 'After ordering and setting the appointment, you will receive a link to the online meeting. During the workshop, we call you or you dial into a conference call if participants are in more than one location.' },
      ]
    },
    {
      id: 'apidev',
      icon: Code,
      title: t('services.grid.api', 'API Developer Workshop'),
      shortDesc: t('services.grid.apiDesc', 'Basic principles of the S-Locator Anywhere API'),
      fullDesc: 'In this online workshop we explain the basic concepts of the S-Locator Anywhere API and answer your questions.',
      leftCol: [
        { label: t('services.labels.target', 'Target Audience'), text: 'Developers, IT architects' },
        { label: t('services.labels.topics', 'Topics'), text: 'Explanation of basic concepts, advice for use in your specific use case, presentation of API functions required for this, notes on error handling' },
        { label: t('services.labels.participation', 'Participation'), text: 'Via online meeting' },
        { label: 'Languages', text: 'German, English, Arabic' },
        { label: t('services.labels.prerequisite', 'Prerequisite'), text: 'Active test, partner or purchased license' },
        { label: t('services.labels.duration', 'Duration'), text: 'Min. 1 hour' },
      ],
      rightCol: [
        { label: t('services.labels.prepare', 'Preliminary work by you'), text: 'Provision of a brief description of the use case and the technology employed to enable us to prepare' },
        { label: t('services.labels.exclusive', 'Exclusive'), text: 'The workshop is held exclusively and individually for you.' },
        { label: t('services.labels.procedure', 'Procedure'), text: 'After ordering and setting the appointment, you will receive a link to the online meeting. During the workshop, we call you or you dial into a conference call if participants are in more than one location.' },
      ]
    },
    {
      id: 'territory',
      icon: Map,
      title: t('services.grid.territory', 'Introduction to territory planning'),
      shortDesc: t('services.grid.territoryDesc', 'Getting started with S-Locator Territory Optimization'),
      fullDesc: 'In this online workshop, we will walk you through your first territory optimization and give you tips and pointers on how to make the most of S-Locator Territory Optimization.',
      leftCol: [
        { label: t('services.labels.target', 'Target audience'), text: 'Outside sales director and IT administrators' },
        { label: 'Contents', text: 'Analyzing the existing situation; manually assigning specific customers; settings for automatic optimization; interpreting the results (including possible adjustments); using the Reallocation feature in S-Locator' },
        { label: t('services.labels.participation', 'Participation'), text: 'Via online meeting' },
        { label: t('services.labels.prerequisite', 'Prerequisite'), text: 'S-Locator Anywhere + Territory Optimization user license activated. We recommend previous participation in a data check and setup workshop.' },
        { label: t('services.labels.duration', 'Duration'), text: 'Approx. 2 hours' },
      ],
      rightCol: [
        { label: t('services.labels.prepare', 'How to prepare'), text: 'Give some thought to your territory optimization objective. Do you need to add or remove any field reps? Which of your customers cannot be rescheduled?' },
        { label: t('services.labels.exclusive', 'Exclusive'), text: 'The workshop is held exclusively and individually for you.' },
        { label: t('services.labels.procedure', 'Procedure'), text: 'After ordering and setting the appointment, you will receive a link to the online meeting. During the workshop, we call you or you dial into a conference call if participants are in more than one location.' },
      ]
    }
  ];

  return (
    <div className={`min-h-screen bg-white font-sans text-slate-800 ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* 1. Header Section */}
      <section className="pt-20 pb-10 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl lg:text-[44px] font-medium text-slate-800 mb-6">
            {t('services.hero.title', 'Our services')}
          </h1>
          <h3 className="text-xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
            {t('services.hero.subtitle', 'A quick and successful S-Locator rollout – we help you get there. Benefit from the experience we have gained in over 100 successful rollouts each year.')}
          </h3>
        </div>
      </section>

      {/* 2. Grid of Services */}
      <section className="pb-16 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {SERVICES_DATA.map((service) => (
              <div key={service.id} className="flex flex-col items-center group">
                <a href={`#${service.id}`} onClick={(e) => scrollToSection(e, service.id)} className="flex flex-col items-center outline-none">
                  <div className="w-20 h-20 bg-[#6699b8] rounded-full flex items-center justify-center mb-4 transition-colors group-hover:bg-[#00609c]">
                    <service.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-medium text-[#00609c] text-lg mb-1 group-hover:underline">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-600 font-light leading-snug max-w-[200px]">
                    {service.shortDesc}
                  </p>
                </a>
              </div>
            ))}
          </div>
          <p className="text-lg text-slate-600 mt-16 font-light">
            Additionally, read our <a href="#" className="text-[#00609c] hover:underline">12 tips for deploying S-Locator successfully</a> in your company.
          </p>
        </div>
      </section>

      {/* 3. Detailed Sections Map */}
      <section className="bg-white pb-24">
        {SERVICES_DATA.map((service, index) => (
          <div key={service.id} id={service.id}>
            {/* فاصل خطي رقيق */}
            <hr className={`border-t border-slate-200 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`} />
            
            <div className={`py-16 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
              <div className="container mx-auto px-4 max-w-5xl">
                
                {/* Section Header */}
                <h2 className="text-3xl font-medium text-slate-800 mb-6 flex items-center gap-4">
                  <service.icon className="w-9 h-9 text-[#6699b8]" strokeWidth={1.5} />
                  {service.title}
                </h2>
                
                <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
                  {service.fullDesc}
                </p>

                {/* Details Columns */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                  {/* Left Column */}
                  <ul className="flex flex-col gap-4">
                    {service.leftCol.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600 font-light leading-relaxed text-[16px]">
                        <span className="w-2 h-2 rounded-full bg-[#6699b8] shrink-0 mt-2"></span>
                        <div>
                          <strong className="font-medium text-slate-800">{item.label}</strong>: {item.text}
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Right Column */}
                  <ul className="flex flex-col gap-4">
                    {service.rightCol.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600 font-light leading-relaxed text-[16px]">
                        <span className="w-2 h-2 rounded-full bg-[#6699b8] shrink-0 mt-2"></span>
                        <div>
                          <strong className="font-medium text-slate-800">{item.label}</strong>: {item.text}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section CTA */}
                <div className="mt-12 text-center">
                  <p className="text-[17px] text-slate-600 font-light leading-relaxed">
                    Order your {service.title} by email to <a href="mailto:sales@s-locator.com" className="text-[#00609c] hover:underline font-medium">sales@s-locator.com</a> containing the desired week(s). We then offer you available appointments to choose from.
                  </p>
                </div>

              </div>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default Services;