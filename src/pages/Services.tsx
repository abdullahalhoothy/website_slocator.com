import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Database,
  Settings,
  Users,
  MessageCircleQuestion,
  Rocket,
  ArrowRightLeft,
  Code,
  Map,
} from 'lucide-react'

export const Services: React.FC = () => {
  const { t, i18n } = useTranslation()
  const isRTL = i18n.dir() === 'rtl'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const SERVICES_DATA = [
    {
      id: 'datacheck',
      icon: Database,
      title: t('services.grid.datacheck', 'Data Check'),
      shortDesc: t('services.grid.datacheckDesc', 'Ensure your data is compatible'),
      fullDesc: t(
        'services.desc.datacheck',
        'In this online workshop, we analyze together the data you export from your CRM/ERP system. We provide hints and suggestions for improvement to ensure compatibility with S-Locator and overall completeness for efficient route planning.',
      ),
      leftCol: [
        {
          label: t('services.labels.target', 'Target Audience'),
          text: t(
            'services.datacheck.target',
            'IT/CRM management and field service sales management',
          ),
        },
        {
          label: t('services.labels.topics', 'Topics'),
          text: t(
            'services.datacheck.topics',
            'Analyzing exported files, reviewing and editing your workflow definitions, answering your questions about S-Locator data formats.',
          ),
        },
        {
          label: t('services.grid.datacheck', 'Data Check'),
          text: t(
            'services.datacheck.list',
            'Availability of required fields, availability of recommended fields, unique field names, address quality, record count, encoding and escaping, ranges and values, unnecessary data fragments',
          ),
        },
        {
          label: t('services.labels.participation', 'Participation method'),
          text: t('services.datacheck.participation', 'Via online meeting'),
        },
        {
          label: t('services.labels.duration', 'Duration'),
          text: t('services.datacheck.duration', 'Approximately one hour'),
        },
      ],
      rightCol: [
        {
          label: t('services.labels.prepare', 'Preparation / Preliminary work'),
          text: t(
            'services.datacheck.prepare',
            'Set up a repeatable export workflow in your CRM/ERP system. It should export all relevant customer and user data to CSV or Excel files. Send us this data in advance.',
          ),
        },
        {
          label: t('services.labels.exclusive', 'Exclusive'),
          text: t(
            'services.datacheck.exclusive',
            'The workshop is held exclusively and individually for you.',
          ),
        },
        {
          label: t('services.labels.procedure', 'Procedure'),
          text: t(
            'services.datacheck.procedure',
            'After ordering and scheduling, you will receive a link to the online meeting. During the workshop we call you, or you join via group call if participants are at more than one location.',
          ),
        },
      ],
    },
    {
      id: 'setupworkshop',
      icon: Settings,
      title: t('services.grid.setup', 'Setup Workshop'),
      shortDesc: t('services.grid.setupDesc', 'Get ready and start working with S-Locator'),
      fullDesc: t(
        'services.desc.setup',
        'In this two-part online workshop, you will first prepare your CRM/ERP data for import and set general parameters, then we will help you configure S-Locator and populate it with your customer data.',
      ),
      leftCol: [
        {
          label: t('services.labels.target', 'Target Audience'),
          text: t('services.setup.target', 'Outside sales managers and IT administrators'),
        },
        {
          label: t('services.setup.topics1Label', 'Topics Part 1 — Preparation'),
          text: t(
            'services.setup.topics1',
            'Analyzing the exported data, reviewing and editing your workflow definition, Q&A session, and a preliminary discussion of Part 2 — approximately one hour.',
          ),
        },
        {
          label: t('services.setup.topics2Label', 'Topics Part 2 — Implementation'),
          text: t(
            'services.setup.topics2',
            'User management, setup and quality check of customer data, defining your visit strategy, setting route-planning parameters, software configuration, additional customer and visit-report fields — approximately two hours.',
          ),
        },
        {
          label: t('services.labels.participation', 'Participation method'),
          text: t('services.setup.participation', 'Via online meeting'),
        },
        {
          label: t('services.labels.prerequisite', 'Prerequisites'),
          text: t(
            'services.setup.prerequisite',
            'S-Locator user licenses purchased from the online store.',
          ),
        },
        {
          label: t('services.labels.duration', 'Duration'),
          text: t('services.setup.duration', 'Approximately 3 hours'),
        },
      ],
      rightCol: [
        {
          label: t('services.labels.prepare', 'Preparation / Preliminary work'),
          text: t(
            'services.setup.prepare',
            'Prepare all relevant customer and user data as an Excel or CSV file. Required: customer name, full address and unique reference number, as well as a unique reference number for each employee.',
          ),
        },
        {
          label: t('services.labels.exclusive', 'Exclusive'),
          text: t(
            'services.setup.exclusive',
            'The workshop is held exclusively and individually for you.',
          ),
        },
        {
          label: t('services.labels.procedure', 'Procedure'),
          text: t(
            'services.setup.procedure',
            'After ordering and scheduling, you will receive a link to the online meeting. During the workshop we call you, or you join via group call.',
          ),
        },
        {
          label: t('services.setup.optionalLabel', 'Optional Topics'),
          text: t(
            'services.setup.optional',
            'Import/export API, Dynamics CRM setup, Salesforce setup',
          ),
        },
      ],
    },
    {
      id: 'usertraining',
      icon: Users,
      title: t('services.grid.training', 'User Training'),
      shortDesc: t('services.grid.trainingDesc', 'Learn daily use of the system'),
      fullDesc: t(
        'services.desc.training',
        'During the online user training, your field reps learn how to use S-Locator effectively every day for route planning, appointments, and call reporting.',
      ),
      leftCol: [
        {
          label: t('services.labels.target', 'Target Audience'),
          text: t(
            'services.training.target',
            'Field reps, IT support team, field management and sales management',
          ),
        },
        {
          label: t('services.labels.topics', 'Topics'),
          text: t(
            'services.training.topics',
            'Login, user interface, route planning, planning parameters, appointments, working through the day’s route, call reporting, customer management, statistics, data synchronization.',
          ),
        },
        {
          label: t('services.labels.participation', 'Participation method'),
          text: t(
            'services.training.participation',
            'Via online meeting. Connection possible from multiple locations, up to 25 participants.',
          ),
        },
        {
          label: t('services.labels.duration', 'Duration'),
          text: t('services.training.duration', 'Approximately two hours'),
        },
        {
          label: t('services.training.optionalLabel', 'Optional'),
          text: t('services.training.optional', 'Video recording for internal use'),
        },
      ],
      rightCol: [
        {
          label: t('services.labels.prerequisite', 'Prerequisites'),
          text: t(
            'services.training.prerequisite',
            'S-Locator user licenses, with users created and customer data already imported. We recommend prior participation in the Setup Workshop.',
          ),
        },
        {
          label: t('services.labels.exclusive', 'Exclusive'),
          text: t(
            'services.training.exclusive',
            'User training is delivered exclusively and individually for you.',
          ),
        },
        {
          label: t('services.labels.procedure', 'Procedure'),
          text: t(
            'services.training.procedure',
            'After ordering and scheduling, you will receive a link to the online meeting.',
          ),
        },
      ],
    },
    {
      id: 'qasession',
      icon: MessageCircleQuestion,
      title: t('services.grid.qa', 'Q&A Session'),
      shortDesc: t('services.grid.qaDesc', 'Answering your open questions'),
      fullDesc: t(
        'services.desc.qa',
        'In one or more sessions, field reps get answers to their questions. Additional tips on the ease of use of S-Locator are provided.',
      ),
      leftCol: [
        {
          label: t('services.qa.timeLabel', 'Timing'),
          text: t(
            'services.qa.time',
            'The first session takes place about one to two weeks after the S-Locator project begins.',
          ),
        },
        {
          label: t('services.labels.target', 'Target Audience'),
          text: t(
            'services.qa.target',
            'Field reps, IT support team, field management and sales management',
          ),
        },
        {
          label: t('services.labels.participation', 'Participation method'),
          text: t('services.qa.participation', 'Via group call'),
        },
        {
          label: t('services.labels.duration', 'Duration'),
          text: t('services.qa.duration', 'Approximately 1–2 hours per session'),
        },
      ],
      rightCol: [
        {
          label: t('services.labels.topics', 'Topics'),
          text: t(
            'services.qa.topics',
            'Any problems and questions will be discussed and resolved. Based on the feedback, the configuration is continuously improved. Positive feedback will also be discussed to share tips.',
          ),
        },
      ],
    },
    {
      id: 'starterpack',
      icon: Rocket,
      title: t('services.grid.starter', 'Starter Pack'),
      shortDesc: t('services.grid.starterDesc', 'Quick start for up to 9 users'),
      fullDesc: t(
        'services.desc.starter',
        'This three-part workshop, designed for 2–9 people, will get your field sales team up and running quickly and effectively.',
      ),
      leftCol: [
        {
          label: t('services.starter.target12Label', 'Target audience, Parts 1+2'),
          text: t('services.starter.target12', 'Field sales management and IT/CRM management'),
        },
        {
          label: t('services.starter.topics1Label', 'Part 1 topics — Preparation'),
          text: t(
            'services.starter.topics1',
            'Analyzing the exported data, reviewing and editing your workflow definition, Q&A session — approximately one hour.',
          ),
        },
        {
          label: t('services.starter.topics2Label', 'Part 2 topics — Implementation'),
          text: t(
            'services.starter.topics2',
            'User management, customer data setup, defining the visit strategy, route-planning parameters, software configuration — approximately one hour.',
          ),
        },
        {
          label: t('services.starter.target3Label', 'Target audience, Part 3'),
          text: t('services.starter.target3', 'Sales reps, IT support team, sales managers'),
        },
        {
          label: t('services.starter.topics3Label', 'Part 3 topics'),
          text: t(
            'services.starter.topics3',
            'Login, user interface, route planning, appointments, call reporting, customer management — approximately one hour.',
          ),
        },
        {
          label: t('services.labels.participation', 'Participation method'),
          text: t('services.starter.participation', 'Via online meeting'),
        },
        {
          label: t('services.labels.prerequisite', 'Prerequisites'),
          text: t(
            'services.starter.prerequisite',
            'S-Locator user licenses purchased from the online store.',
          ),
        },
        {
          label: t('services.labels.duration', 'Duration'),
          text: t('services.starter.duration', 'Approximately 3 hours in total'),
        },
      ],
      rightCol: [
        {
          label: t('services.labels.prepare', 'Preparation / Preliminary work'),
          text: t(
            'services.starter.prepare',
            'Prepare all relevant customer and user data as an Excel or CSV file.',
          ),
        },
        {
          label: t('services.labels.exclusive', 'Exclusive'),
          text: t('services.starter.exclusive', 'Exclusive workshops tailored to your needs.'),
        },
        {
          label: t('services.labels.procedure', 'Procedure'),
          text: t(
            'services.starter.procedure',
            'After placing your order and agreeing on the date, you will receive a link to the online meetings.',
          ),
        },
        {
          label: t('services.starter.optionalLabel', 'Optional'),
          text: t('services.starter.optional', 'Video recording for internal use'),
        },
      ],
    },
    {
      id: 'dataexchange',
      icon: ArrowRightLeft,
      title: t('services.grid.data', 'Data Import & Export Workshop'),
      shortDesc: t('services.grid.dataDesc', 'Automate data import/export'),
      fullDesc: t(
        'services.desc.data',
        'In this online workshop, we work with you to configure scripts that import and export data automatically. You also get tips on automation.',
      ),
      leftCol: [
        {
          label: t('services.labels.target', 'Target Audience'),
          text: t('services.data.target', 'IT/CRM administrators'),
        },
        {
          label: t('services.labels.topics', 'Topics'),
          text: t(
            'services.data.topics',
            'Downloading data-exchange scripts, checking permissions, completing S-Locator configuration, setting up the scripts, first-time execution, automation tips',
          ),
        },
        {
          label: t('services.labels.participation', 'Participation method'),
          text: t('services.data.participation', 'Via online meeting'),
        },
        {
          label: t('services.labels.prerequisite', 'Prerequisites'),
          text: t(
            'services.data.prerequisite',
            'S-Locator user licenses. We recommend prior participation in the Data Check and Setup workshops.',
          ),
        },
        {
          label: t('services.labels.duration', 'Duration'),
          text: t('services.data.duration', 'Approximately two hours'),
        },
      ],
      rightCol: [
        {
          label: t('services.labels.prepare', 'Preparation / Preliminary work'),
          text: t(
            'services.data.prepare',
            'Log in as administrator on the computer or server where the data-exchange scripts should be executed.',
          ),
        },
        {
          label: t('services.labels.exclusive', 'Exclusive'),
          text: t(
            'services.data.exclusive',
            'The workshop is held exclusively and individually for you.',
          ),
        },
        {
          label: t('services.labels.procedure', 'Procedure'),
          text: t(
            'services.data.procedure',
            'After ordering and scheduling, you will receive a link to the online meeting.',
          ),
        },
      ],
    },
    {
      id: 'apidev',
      icon: Code,
      title: t('services.grid.api', 'API Developer Workshop'),
      shortDesc: t('services.grid.apiDesc', 'Fundamentals of the S-Locator API'),
      fullDesc: t(
        'services.desc.api',
        'In this online workshop we explain the core concepts of the S-Locator Anywhere API and answer your questions.',
      ),
      leftCol: [
        {
          label: t('services.labels.target', 'Target Audience'),
          text: t('services.api.target', 'Developers, IT engineers'),
        },
        {
          label: t('services.labels.topics', 'Topics'),
          text: t(
            'services.api.topics',
            'Explanation of core concepts, usage tips, walkthrough of the required API functions, notes on error handling',
          ),
        },
        {
          label: t('services.labels.participation', 'Participation method'),
          text: t('services.api.participation', 'Via online meeting'),
        },
        {
          label: t('services.api.languagesLabel', 'Languages'),
          text: t('services.api.languages', 'German, English, Arabic'),
        },
        {
          label: t('services.labels.prerequisite', 'Prerequisites'),
          text: t(
            'services.api.prerequisite',
            'An active trial account, a partner license, or a purchased license',
          ),
        },
        {
          label: t('services.labels.duration', 'Duration'),
          text: t('services.api.duration', 'At least one hour'),
        },
      ],
      rightCol: [
        {
          label: t('services.labels.prepare', 'Preparation / Preliminary work'),
          text: t(
            'services.api.prepare',
            'Provide a brief description of your use case and the technology used so that we can prepare',
          ),
        },
        {
          label: t('services.labels.exclusive', 'Exclusive'),
          text: t(
            'services.api.exclusive',
            'The workshop is held exclusively and individually for you.',
          ),
        },
        {
          label: t('services.labels.procedure', 'Procedure'),
          text: t(
            'services.api.procedure',
            'After ordering and scheduling, you will receive a link to the online meeting.',
          ),
        },
      ],
    },
    {
      id: 'territory',
      icon: Map,
      title: t('services.grid.territory', 'Introduction to Territory Planning'),
      shortDesc: t(
        'services.grid.territoryDesc',
        'Get started with the territory optimization add-on',
      ),
      fullDesc: t(
        'services.desc.territory',
        'In this online workshop, we guide you through your first territory optimization and give you tips and guidelines on how to get the most out of S-Locator territory optimization.',
      ),
      leftCol: [
        {
          label: t('services.labels.target', 'Target Audience'),
          text: t('services.territory.target', 'Outside sales managers and IT administrators'),
        },
        {
          label: t('services.territory.contentsLabel', 'Contents'),
          text: t(
            'services.territory.contents',
            'Analyzing the current situation; manually assigning specific customers; automatic optimization settings; interpreting the results; using the reassignment feature',
          ),
        },
        {
          label: t('services.labels.participation', 'Participation method'),
          text: t('services.territory.participation', 'Via online meeting'),
        },
        {
          label: t('services.labels.prerequisite', 'Prerequisites'),
          text: t(
            'services.territory.prerequisite',
            'An active Territory Optimization license. We recommend prior participation in the Setup Workshop.',
          ),
        },
        {
          label: t('services.labels.duration', 'Duration'),
          text: t('services.territory.duration', 'Approximately two hours'),
        },
      ],
      rightCol: [
        {
          label: t('services.labels.prepare', 'Preparation / Preliminary work'),
          text: t(
            'services.territory.prepare',
            'Spend a little time thinking about the goal of your territory optimization. Do you need to add or remove any field reps? Which of your customers cannot be rescheduled?',
          ),
        },
        {
          label: t('services.labels.exclusive', 'Exclusive'),
          text: t(
            'services.territory.exclusive',
            'The workshop is held exclusively and individually for you.',
          ),
        },
        {
          label: t('services.labels.procedure', 'Procedure'),
          text: t(
            'services.territory.procedure',
            'After ordering and scheduling, you will receive a link to the online meeting.',
          ),
        },
      ],
    },
  ]

  return (
    <div
      className={`min-h-screen bg-white font-sans text-slate-800 ${isRTL ? 'text-right' : 'text-left'}`}
    >
      <section className="pt-20 pb-10 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl lg:text-[44px] font-medium text-slate-800 mb-6">
            {t('services.hero.title', 'Our Services')}
          </h1>
          <h3 className="text-xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
            {t(
              'services.hero.subtitle',
              'A fast, successful S-Locator launch — we help you get there. Benefit from our experience gained through more than 100 successful rollouts every year.',
            )}
          </h3>
        </div>
      </section>

      <section className="pb-16 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {SERVICES_DATA.map(service => (
              <div key={service.id} className="flex flex-col items-center group">
                <a
                  href={`#${service.id}`}
                  onClick={e => scrollToSection(e, service.id)}
                  className="flex flex-col items-center outline-none"
                >
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
            {t(
              'services.footerText',
              'In addition, read 12 tips for rolling out S-Locator successfully in your company.',
            )}
          </p>
        </div>
      </section>

      <section className="bg-white pb-24">
        {SERVICES_DATA.map((service, index) => (
          <div key={service.id} id={service.id}>
            <hr
              className={`border-t border-slate-200 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
            />

            <div className={`py-16 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
              <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-3xl font-medium text-slate-800 mb-6 flex items-center gap-4">
                  <service.icon className="w-9 h-9 text-[#6699b8]" strokeWidth={1.5} />
                  {service.title}
                </h2>

                <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
                  {service.fullDesc}
                </p>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                  <ul className="flex flex-col gap-4">
                    {service.leftCol.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-slate-600 font-light leading-relaxed text-[16px]"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#6699b8] shrink-0 mt-2"></span>
                        <div>
                          <strong className="font-medium text-slate-800">{item.label}</strong>:{' '}
                          {item.text}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <ul className="flex flex-col gap-4">
                    {service.rightCol.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-slate-600 font-light leading-relaxed text-[16px]"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#6699b8] shrink-0 mt-2"></span>
                        <div>
                          <strong className="font-medium text-slate-800">{item.label}</strong>:{' '}
                          {item.text}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12 text-center">
                  <p className="text-[17px] text-slate-600 font-light leading-relaxed">
                    {t('services.ctaOrder', 'Order')} {service.title}{' '}
                    {t('services.ctaEmail', 'by sending an email to')}{' '}
                    <a
                      href="mailto:sales@s-locator.com"
                      className="text-[#00609c] hover:underline font-medium"
                    >
                      sales@s-locator.com
                    </a>{' '}
                    {t(
                      'services.ctaWeek',
                      'specifying the week(s) you would like. We will then offer you the available dates to choose from.',
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Services
