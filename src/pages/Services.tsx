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
      title: t('services.grid.datacheck', 'فحص البيانات'),
      shortDesc: t('services.grid.datacheckDesc', 'ضمان توافق بياناتك'),
      fullDesc: t(
        'services.desc.datacheck',
        'في ورشة العمل هذه عبر الإنترنت، نقوم معًا بتحليل البيانات التي تقوم بتصديرها من نظام CRM/ERP الخاص بك. نقدم تلميحات واقتراحات للتحسين لضمان التوافق مع S-Locator والاكتمال العام لتخطيط مسار فعال.',
      ),
      leftCol: [
        {
          label: t('services.labels.target', 'الجمهور المستهدف'),
          text: t('services.datacheck.target', 'إدارة IT/CRM وإدارة مبيعات الخدمة الميدانية'),
        },
        {
          label: t('services.labels.topics', 'المواضيع'),
          text: t(
            'services.datacheck.topics',
            'تحليل الملفات المصدرة، مراجعة وتحرير تعريفات سير العمل الخاصة بك، الإجابة على أسئلتك حول تنسيقات بيانات S-Locator.',
          ),
        },
        {
          label: t('services.grid.datacheck', 'فحص البيانات'),
          text: t(
            'services.datacheck.list',
            'توفر الحقول الضرورية، توفر الحقول الموصى بها، أسماء الحقول الفريدة، جودة العنوان، عدد السجلات، التشفير والهروب، النطاقات والقيم، أجزاء البيانات غير الضرورية',
          ),
        },
        {
          label: t('services.labels.participation', 'طريقة المشاركة'),
          text: t('services.datacheck.participation', 'عبر اجتماع عبر الإنترنت'),
        },
        {
          label: t('services.labels.duration', 'المدة الزمنية'),
          text: t('services.datacheck.duration', 'حوالي ساعة واحدة'),
        },
      ],
      rightCol: [
        {
          label: t('services.labels.prepare', 'التحضير / العمل التمهيدي'),
          text: t(
            'services.datacheck.prepare',
            'قم بتكوين سير عمل تصدير قابل للتكرار في نظام CRM/ERP الخاص بك. يجب أن يصدر هذا جميع بيانات العملاء والمستخدمين ذات الصلة إلى ملفات CSV أو Excel. أرسل لنا هذه البيانات مسبقًا.',
          ),
        },
        {
          label: t('services.labels.exclusive', 'حصرية'),
          text: t('services.datacheck.exclusive', 'تُعقد ورشة العمل حصريًا وبشكل فردي لك.'),
        },
        {
          label: t('services.labels.procedure', 'الإجراءات'),
          text: t(
            'services.datacheck.procedure',
            'بعد الطلب وتحديد الموعد، ستتلقى رابطًا للاجتماع عبر الإنترنت. خلال ورشة العمل، نتصل بك أو تتصل بمكالمة جماعية إذا كان المشاركون في أكثر من موقع.',
          ),
        },
      ],
    },
    {
      id: 'setupworkshop',
      icon: Settings,
      title: t('services.grid.setup', 'ورشة الإعداد'),
      shortDesc: t('services.grid.setupDesc', 'تجهيز وبدء العمل مع S-Locator'),
      fullDesc: t(
        'services.desc.setup',
        'في ورشة العمل هذه المكونة من جزأين عبر الإنترنت، ستقوم أولاً بإعداد بيانات CRM/ERP الخاصة بك للاستيراد وتحديد المعلمات العامة، ثم سنساعدك في تكوين S-Locator وملئه ببيانات عملائك.',
      ),
      leftCol: [
        {
          label: t('services.labels.target', 'الجمهور المستهدف'),
          text: t('services.setup.target', 'مدير المبيعات الخارجية ومسؤولو تكنولوجيا المعلومات'),
        },
        {
          label: t('services.setup.topics1Label', 'المواضيع الجزء 1 - التحضير'),
          text: t(
            'services.setup.topics1',
            'تحليل البيانات المصدرة، مراجعة وتحرير تعريف سير العمل الخاص بك، جلسة أسئلة وأجوبة، ومناقشة أولية للجزء 2 - حوالي ساعة واحدة.',
          ),
        },
        {
          label: t('services.setup.topics2Label', 'المواضيع الجزء 2 - التنفيذ'),
          text: t(
            'services.setup.topics2',
            'إدارة المستخدمين، إعداد والتحقق من جودة بيانات العملاء، تحديد استراتيجية الزيارة الخاصة بك، تعيين معلمات تخطيط المسار، تكوين البرنامج، حقول إضافية للعملاء وتقارير الزيارة - حوالي ساعتين.',
          ),
        },
        {
          label: t('services.labels.participation', 'طريقة المشاركة'),
          text: t('services.setup.participation', 'عبر اجتماع عبر الإنترنت'),
        },
        {
          label: t('services.labels.prerequisite', 'المتطلبات الأساسية'),
          text: t(
            'services.setup.prerequisite',
            'تراخيص مستخدم S-Locator المشتراة من المتجر عبر الإنترنت.',
          ),
        },
        {
          label: t('services.labels.duration', 'المدة الزمنية'),
          text: t('services.setup.duration', 'حوالي 3 ساعات'),
        },
      ],
      rightCol: [
        {
          label: t('services.labels.prepare', 'التحضير / العمل التمهيدي'),
          text: t(
            'services.setup.prepare',
            'قم بإعداد جميع بيانات العملاء والمستخدمين ذات الصلة كملف Excel أو CSV. مطلوب: اسم العميل، العنوان الكامل ورقم المرجع الفريد، بالإضافة إلى رقم المرجع الفريد للموظف.',
          ),
        },
        {
          label: t('services.labels.exclusive', 'حصرية'),
          text: t('services.setup.exclusive', 'تُعقد ورشة العمل حصريًا وبشكل فردي لك.'),
        },
        {
          label: t('services.labels.procedure', 'الإجراءات'),
          text: t(
            'services.setup.procedure',
            'بعد الطلب وتحديد الموعد، ستتلقى رابطًا للاجتماع عبر الإنترنت. خلال ورشة العمل، نتصل بك أو تتصل بمكالمة جماعية.',
          ),
        },
        {
          label: t('services.setup.optionalLabel', 'مواضيع اختيارية'),
          text: t(
            'services.setup.optional',
            'واجهة برمجة التطبيقات للاستيراد/التصدير، إعداد Dynamics CRM، إعداد Salesforce',
          ),
        },
      ],
    },
    {
      id: 'usertraining',
      icon: Users,
      title: t('services.grid.training', 'تدريب المستخدمين'),
      shortDesc: t('services.grid.trainingDesc', 'تعلم الاستخدام اليومي للنظام'),
      fullDesc: t(
        'services.desc.training',
        'خلال تدريب المستخدمين عبر الإنترنت، يتعلم مندوبوك الميدانيون كيفية استخدام S-Locator بفعالية كل يوم لتخطيط المسارات والمواعيد والإبلاغ عن المكالمات.',
      ),
      leftCol: [
        {
          label: t('services.labels.target', 'الجمهور المستهدف'),
          text: t(
            'services.training.target',
            'المندوبون الميدانيون، فريق دعم تكنولوجيا المعلومات، الإدارة الميدانية وإدارة المبيعات',
          ),
        },
        {
          label: t('services.labels.topics', 'المواضيع'),
          text: t(
            'services.training.topics',
            'تسجيل الدخول، واجهة المستخدم، تخطيط المسار، معلمات التخطيط، المواعيد، العمل من خلال مسار اليوم، الإبلاغ عن المكالمات، إدارة العملاء، الإحصائيات، مزامنة البيانات.',
          ),
        },
        {
          label: t('services.labels.participation', 'طريقة المشاركة'),
          text: t(
            'services.training.participation',
            'عبر اجتماع عبر الإنترنت. الاتصال ممكن من مواقع متعددة، بحد أقصى 25 مشاركًا.',
          ),
        },
        {
          label: t('services.labels.duration', 'المدة الزمنية'),
          text: t('services.training.duration', 'حوالي ساعتين'),
        },
        {
          label: t('services.training.optionalLabel', 'اختياري'),
          text: t('services.training.optional', 'تسجيل فيديو للاستخدام الداخلي'),
        },
      ],
      rightCol: [
        {
          label: t('services.labels.prerequisite', 'المتطلبات الأساسية'),
          text: t(
            'services.training.prerequisite',
            'تراخيص مستخدم S-Locator، وإنشاء المستخدمين وبيانات العملاء المستوردة بالفعل. نوصي بالمشاركة السابقة في ورشة عمل الإعداد.',
          ),
        },
        {
          label: t('services.labels.exclusive', 'حصرية'),
          text: t(
            'services.training.exclusive',
            'يتم تقديم تدريب المستخدمين حصريًا وبشكل فردي لك.',
          ),
        },
        {
          label: t('services.labels.procedure', 'الإجراءات'),
          text: t(
            'services.training.procedure',
            'بعد الطلب وتحديد الموعد، ستتلقى رابطًا للاجتماع عبر الإنترنت.',
          ),
        },
      ],
    },
    {
      id: 'qasession',
      icon: MessageCircleQuestion,
      title: t('services.grid.qa', 'جلسة الأسئلة والأجوبة'),
      shortDesc: t('services.grid.qaDesc', 'الإجابة على أسئلتك المفتوحة'),
      fullDesc: t(
        'services.desc.qa',
        'في جلسة واحدة أو أكثر، يحصل المندوبون الميدانيون على إجابات لأسئلتهم. يتم توفير نصائح إضافية حول سهولة استخدام S-Locator.',
      ),
      leftCol: [
        {
          label: t('services.qa.timeLabel', 'الوقت'),
          text: t(
            'services.qa.time',
            'الجلسة الأولى حوالي أسبوع إلى أسبوعين بعد بدء مشروع S-Locator.',
          ),
        },
        {
          label: t('services.labels.target', 'الجمهور المستهدف'),
          text: t(
            'services.qa.target',
            'المندوبون الميدانيون، فريق دعم تكنولوجيا المعلومات، الإدارة الميدانية وإدارة المبيعات',
          ),
        },
        {
          label: t('services.labels.participation', 'طريقة المشاركة'),
          text: t('services.qa.participation', 'عن طريق مكالمة جماعية'),
        },
        {
          label: t('services.labels.duration', 'المدة الزمنية'),
          text: t('services.qa.duration', 'حوالي 1-2 ساعة لكل جلسة'),
        },
      ],
      rightCol: [
        {
          label: t('services.labels.topics', 'المواضيع'),
          text: t(
            'services.qa.topics',
            'سيتم مناقشة وحل أي مشاكل وأسئلة. بناءً على الملاحظات، يتم تحسين التكوين باستمرار. سيتم مناقشة الملاحظات الإيجابية أيضًا لتبادل النصائح.',
          ),
        },
      ],
    },
    {
      id: 'starterpack',
      icon: Rocket,
      title: t('services.grid.starter', 'الباقة الابتدائية'),
      shortDesc: t('services.grid.starterDesc', 'بداية سريعة لما يصل إلى 9 مستخدمين'),
      fullDesc: t(
        'services.desc.starter',
        'ورشة العمل هذه المكونة من ثلاثة أجزاء والمصممة لـ 2-9 أشخاص ستجعل فريق المبيعات الميداني الخاص بك يعمل بسرعة وفعالية.',
      ),
      leftCol: [
        {
          label: t('services.starter.target12Label', 'الجمهور المستهدف، الأجزاء 1+2'),
          text: t('services.starter.target12', 'إدارة المبيعات الميدانية وإدارة IT/CRM'),
        },
        {
          label: t('services.starter.topics1Label', 'مواضيع الجزء 1 - التحضير'),
          text: t(
            'services.starter.topics1',
            'تحليل البيانات المصدرة، مراجعة وتحرير تعريف سير العمل الخاص بك، جلسة أسئلة وأجوبة - حوالي ساعة واحدة.',
          ),
        },
        {
          label: t('services.starter.topics2Label', 'مواضيع الجزء 2 - التنفيذ'),
          text: t(
            'services.starter.topics2',
            'إدارة المستخدمين، إعداد بيانات العملاء، تحديد استراتيجية الزيارة، معلمات تخطيط المسار، تكوين البرنامج - حوالي ساعة واحدة.',
          ),
        },
        {
          label: t('services.starter.target3Label', 'الجمهور المستهدف، الجزء 3'),
          text: t(
            'services.starter.target3',
            'مندوبو المبيعات، فريق دعم تكنولوجيا المعلومات، مديرو المبيعات',
          ),
        },
        {
          label: t('services.starter.topics3Label', 'مواضيع الجزء 3'),
          text: t(
            'services.starter.topics3',
            'تسجيل الدخول، واجهة المستخدم، تخطيط المسار، المواعيد، الإبلاغ عن المكالمات، إدارة العملاء - حوالي ساعة واحدة.',
          ),
        },
        {
          label: t('services.labels.participation', 'طريقة المشاركة'),
          text: t('services.starter.participation', 'عبر اجتماع عبر الإنترنت'),
        },
        {
          label: t('services.labels.prerequisite', 'المتطلبات الأساسية'),
          text: t(
            'services.starter.prerequisite',
            'تراخيص مستخدم S-Locator المشتراة من المتجر عبر الإنترنت.',
          ),
        },
        {
          label: t('services.labels.duration', 'المدة الزمنية'),
          text: t('services.starter.duration', 'حوالي 3 ساعات في المجموع'),
        },
      ],
      rightCol: [
        {
          label: t('services.labels.prepare', 'التحضير / العمل التمهيدي'),
          text: t(
            'services.starter.prepare',
            'قم بإعداد جميع بيانات العملاء والمستخدمين ذات الصلة كملف Excel أو CSV.',
          ),
        },
        {
          label: t('services.labels.exclusive', 'حصرية'),
          text: t('services.starter.exclusive', 'ورش عمل حصرية مصممة خصيصًا لتلبية احتياجاتك.'),
        },
        {
          label: t('services.labels.procedure', 'الإجراءات'),
          text: t(
            'services.starter.procedure',
            'بعد تقديم طلبك والاتفاق على الموعد، ستتلقى رابطًا للاجتماعات عبر الإنترنت.',
          ),
        },
        {
          label: t('services.starter.optionalLabel', 'اختياري'),
          text: t('services.starter.optional', 'تسجيل فيديو للاستخدام الداخلي'),
        },
      ],
    },
    {
      id: 'dataexchange',
      icon: ArrowRightLeft,
      title: t('services.grid.data', 'ورشة استيراد وتصدير البيانات'),
      shortDesc: t('services.grid.dataDesc', 'أتمتة استيراد/تصدير البيانات'),
      fullDesc: t(
        'services.desc.data',
        'في ورشة العمل هذه عبر الإنترنت، نعمل معك لتكوين نصوص لاستيراد وتصدير البيانات تلقائيًا. ستتلقى أيضًا نصائح حول الأتمتة.',
      ),
      leftCol: [
        {
          label: t('services.labels.target', 'الجمهور المستهدف'),
          text: t('services.data.target', 'مسؤولو IT/CRM'),
        },
        {
          label: t('services.labels.topics', 'المواضيع'),
          text: t(
            'services.data.topics',
            'تنزيل نصوص تبادل البيانات، التحقق من الأذونات، إكمال تكوين S-Locator، إعداد النصوص، التنفيذ لأول مرة، نصائح للأتمتة',
          ),
        },
        {
          label: t('services.labels.participation', 'طريقة المشاركة'),
          text: t('services.data.participation', 'عبر اجتماع عبر الإنترنت'),
        },
        {
          label: t('services.labels.prerequisite', 'المتطلبات الأساسية'),
          text: t(
            'services.data.prerequisite',
            'تراخيص مستخدم S-Locator. نوصي بالمشاركة السابقة في فحص البيانات وورشة عمل الإعداد.',
          ),
        },
        {
          label: t('services.labels.duration', 'المدة الزمنية'),
          text: t('services.data.duration', 'حوالي ساعتين'),
        },
      ],
      rightCol: [
        {
          label: t('services.labels.prepare', 'التحضير / العمل التمهيدي'),
          text: t(
            'services.data.prepare',
            'قم بتسجيل الدخول كمسؤول على الكمبيوتر أو الخادم الذي يجب أن تُنفذ عليه نصوص تبادل البيانات.',
          ),
        },
        {
          label: t('services.labels.exclusive', 'حصرية'),
          text: t('services.data.exclusive', 'تُعقد ورشة العمل حصريًا وبشكل فردي لك.'),
        },
        {
          label: t('services.labels.procedure', 'الإجراءات'),
          text: t(
            'services.data.procedure',
            'بعد الطلب وتحديد الموعد، ستتلقى رابطًا للاجتماع عبر الإنترنت.',
          ),
        },
      ],
    },
    {
      id: 'apidev',
      icon: Code,
      title: t('services.grid.api', 'ورشة عمل مطوري API'),
      shortDesc: t('services.grid.apiDesc', 'المبادئ الأساسية لواجهة S-Locator API'),
      fullDesc: t(
        'services.desc.api',
        'في ورشة العمل هذه عبر الإنترنت نشرح المفاهيم الأساسية لواجهة برمجة تطبيقات S-Locator Anywhere ونجيب على أسئلتك.',
      ),
      leftCol: [
        {
          label: t('services.labels.target', 'الجمهور المستهدف'),
          text: t('services.api.target', 'المطورون، مهندسو تكنولوجيا المعلومات'),
        },
        {
          label: t('services.labels.topics', 'المواضيع'),
          text: t(
            'services.api.topics',
            'شرح المفاهيم الأساسية، نصائح للاستخدام، عرض وظائف API المطلوبة، ملاحظات حول معالجة الأخطاء',
          ),
        },
        {
          label: t('services.labels.participation', 'طريقة المشاركة'),
          text: t('services.api.participation', 'عبر اجتماع عبر الإنترنت'),
        },
        {
          label: t('services.api.languagesLabel', 'اللغات'),
          text: t('services.api.languages', 'الألمانية، الإنجليزية، العربية'),
        },
        {
          label: t('services.labels.prerequisite', 'المتطلبات الأساسية'),
          text: t('services.api.prerequisite', 'حساب تجريبي نشط، أو ترخيص شريك أو ترخيص مشترى'),
        },
        {
          label: t('services.labels.duration', 'المدة الزمنية'),
          text: t('services.api.duration', 'ساعة واحدة على الأقل'),
        },
      ],
      rightCol: [
        {
          label: t('services.labels.prepare', 'التحضير / العمل التمهيدي'),
          text: t(
            'services.api.prepare',
            'توفير وصف موجز لحالة الاستخدام والتكنولوجيا المستخدمة لتمكيننا من التحضير',
          ),
        },
        {
          label: t('services.labels.exclusive', 'حصرية'),
          text: t('services.api.exclusive', 'تُعقد ورشة العمل حصريًا وبشكل فردي لك.'),
        },
        {
          label: t('services.labels.procedure', 'الإجراءات'),
          text: t(
            'services.api.procedure',
            'بعد الطلب وتحديد الموعد، ستتلقى رابطًا للاجتماع عبر الإنترنت.',
          ),
        },
      ],
    },
    {
      id: 'territory',
      icon: Map,
      title: t('services.grid.territory', 'مقدمة في تخطيط المناطق'),
      shortDesc: t('services.grid.territoryDesc', 'البدء مع إضافة تحسين المناطق'),
      fullDesc: t(
        'services.desc.territory',
        'في ورشة العمل هذه عبر الإنترنت، سنرشدك خلال أول تحسين لمنطقتك ونعطيك نصائح وإرشادات حول كيفية تحقيق أقصى استفادة من تحسين مناطق S-Locator.',
      ),
      leftCol: [
        {
          label: t('services.labels.target', 'الجمهور المستهدف'),
          text: t(
            'services.territory.target',
            'مدير المبيعات الخارجية ومسؤولو تكنولوجيا المعلومات',
          ),
        },
        {
          label: t('services.territory.contentsLabel', 'المحتويات'),
          text: t(
            'services.territory.contents',
            'تحليل الوضع الحالي؛ تعيين عملاء محددين يدويًا؛ إعدادات التحسين التلقائي؛ تفسير النتائج؛ استخدام ميزة إعادة التخصيص',
          ),
        },
        {
          label: t('services.labels.participation', 'طريقة المشاركة'),
          text: t('services.territory.participation', 'عبر اجتماع عبر الإنترنت'),
        },
        {
          label: t('services.labels.prerequisite', 'المتطلبات الأساسية'),
          text: t(
            'services.territory.prerequisite',
            'ترخيص تحسين المناطق نشط. نوصي بالمشاركة السابقة في ورشة عمل الإعداد.',
          ),
        },
        {
          label: t('services.labels.duration', 'المدة الزمنية'),
          text: t('services.territory.duration', 'حوالي ساعتين'),
        },
      ],
      rightCol: [
        {
          label: t('services.labels.prepare', 'التحضير / العمل التمهيدي'),
          text: t(
            'services.territory.prepare',
            'فكر قليلاً في هدف تحسين منطقتك. هل تحتاج إلى إضافة أو إزالة أي مندوبين ميدانيين؟ أي من عملائك لا يمكن إعادة جدولته؟',
          ),
        },
        {
          label: t('services.labels.exclusive', 'حصرية'),
          text: t('services.territory.exclusive', 'تُعقد ورشة العمل حصريًا وبشكل فردي لك.'),
        },
        {
          label: t('services.labels.procedure', 'الإجراءات'),
          text: t(
            'services.territory.procedure',
            'بعد الطلب وتحديد الموعد، ستتلقى رابطًا للاجتماع عبر الإنترنت.',
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
            {t('services.hero.title', 'خدماتنا')}
          </h1>
          <h3 className="text-xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto">
            {t(
              'services.hero.subtitle',
              'إطلاق سريع وناجح لنظام S-Locator – نحن نساعدك للوصول إلى هناك. استفد من خبرتنا التي اكتسبناها من خلال أكثر من 100 عملية إطلاق ناجحة كل عام.',
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
              'بالإضافة إلى ذلك، اقرأ 12 نصيحة لنشر S-Locator بنجاح في شركتك.',
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
                    {t('services.ctaOrder', 'اطلب')} {service.title}{' '}
                    {t('services.ctaEmail', 'عبر إرسال بريد إلكتروني إلى')}{' '}
                    <a
                      href="mailto:sales@s-locator.com"
                      className="text-[#00609c] hover:underline font-medium"
                    >
                      sales@s-locator.com
                    </a>{' '}
                    {t(
                      'services.ctaWeek',
                      'مع تحديد الأسبوع (الأسابيع) المطلوبة. سنقوم بعدها بعرض المواعيد المتاحة لتختار منها.',
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
