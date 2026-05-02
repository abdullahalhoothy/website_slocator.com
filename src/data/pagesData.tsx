import React from 'react'
import {
  Store,
  Truck,
  ShieldAlert,
  Users,
  Signal,
  Building2,
  TrendingUp,
  Home,
  Building,
  MapPin,
  HeartPulse,
  Leaf,
  ShoppingBag,
  Landmark,
  Radio,
  MonitorSmartphone,
} from 'lucide-react'

export interface LocalizedArticle {
  category: string
  title: string
  date: string
  author: string
  excerpt: string
  tags?: string[]
  content: React.ReactNode
}

export interface ArticleData {
  image: string
  en: LocalizedArticle
  ar: LocalizedArticle
}

export const articlesData: Record<string, ArticleData> = {
  'feasibility-study-riyadh-guide': {
    image: '/assets/images/Feasibility-Study-in-Riyadh-768x419.jpg',
    en: {
      category: 'Feasibility Studies',
      title: 'Best Way to Do a Feasibility Study in Riyadh (2026 Complete Guide)',
      date: 'Feb 17, 2026',
      author: 'By Research Team',
      excerpt:
        'Discover the best way to conduct a feasibility study in Riyadh in 2026 using data-driven location analysis, demographic insights, and competitor mapping to reduce risk and increase success.',
      tags: ['#Riyadh', '#Feasibility'],
      content: (
        <>
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">Introduction</h2>
          <p className="mb-6">
            If you are planning to start a business in Riyadh, the most important step before signing
            a lease is not branding or interior design.
          </p>
          <p className="mb-6">
            It is conducting a{' '}
            <strong className="text-[#2b1055] font-black">
              proper feasibility study — especially location analysis.
            </strong>
          </p>
          <p className="mb-6">
            In 2026, choosing a “busy street” is no longer enough. The market is more competitive,
            rents are higher, and wrong decisions are expensive. This guide explains the modern way
            to conduct a feasibility study in Riyadh using real data instead of assumptions.
          </p>
          <hr className="my-10 border-gray-200" />
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">
            What Is the Best Way to Do a Feasibility Study in Riyadh?
          </h2>
          <p className="mb-4">The best way to conduct a feasibility study in Riyadh is by combining:</p>
          <ul className="list-disc mb-8 space-y-2 font-medium text-gray-600 marker:text-[#38e54d] pl-6">
            <li>Financial analysis</li>
            <li>Market research</li>
            <li>Data-driven location intelligence</li>
          </ul>
          <p className="mb-6">
            The biggest mistake investors make is relying on intuition or a real estate broker’s
            opinion without validating the data.
          </p>
          <hr className="my-10 border-gray-200" />
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">
            Why Do Businesses Fail Because of Location?
          </h2>
          <p className="mb-4">
            Riyadh is one of the fastest-growing cities in the region. However, many businesses close
            within their first two years. Common reasons include:
          </p>
          <ul className="list-disc mb-8 space-y-2 font-medium text-gray-600 marker:text-[#38e54d] pl-6">
            <li>Choosing a location that does not match the target audience</li>
            <li>High rent in an area with weak purchasing power</li>
            <li>Market saturation from strong competitors</li>
            <li>Ignoring income demographics</li>
          </ul>
          <p className="mb-6 font-bold text-[#2b1055]">
            A crowded street does not guarantee profit.
          </p>
          <hr className="my-10 border-gray-200" />
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">
            What Should a Modern Feasibility Study in Riyadh Include?
          </h2>
          <h3 className="text-xl font-bold text-[#046bd2] mt-8 mb-4">
            1. Population Density Analysis
          </h3>
          <ul className="list-disc mb-6 space-y-2 font-medium text-gray-600 marker:text-[#38e54d] pl-6">
            <li>How many residents live within a 1–3 km radius?</li>
            <li>Are they families, students, or office workers?</li>
            <li>Does the demographic match your concept?</li>
          </ul>
          <h3 className="text-xl font-bold text-[#046bd2] mt-8 mb-4">2. Income Level Analysis</h3>
          <p className="mb-6">
            A specialty coffee shop requires a different income segment than a discount grocery store.
            Understanding neighborhood income levels is essential before investing.
          </p>
          <h3 className="text-xl font-bold text-[#046bd2] mt-8 mb-4">3. Competitor Analysis</h3>
          <ul className="list-disc mb-6 space-y-2 font-medium text-gray-600 marker:text-[#38e54d] pl-6">
            <li>How many direct competitors exist nearby?</li>
            <li>Are they strong brands?</li>
            <li>Is the market oversaturated?</li>
          </ul>
          <h3 className="text-xl font-bold text-[#046bd2] mt-8 mb-4">
            4. Traffic & Accessibility Analysis
          </h3>
          <ul className="list-disc mb-6 space-y-2 font-medium text-gray-600 marker:text-[#38e54d] pl-6">
            <li>Is there pedestrian traffic or only vehicles?</li>
            <li>Does the location serve residents or just passing traffic?</li>
            <li>Is parking accessible?</li>
          </ul>
          <hr className="my-10 border-gray-200" />
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-8">
            Traditional Feasibility Study vs Data-Driven Location Analysis
          </h2>
          <div className="overflow-x-auto mb-10 shadow-lg rounded-xl border border-gray-100">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#110222] text-white">
                  <th className="p-5 font-bold uppercase tracking-wider text-sm border-r border-white/10">
                    Traditional Study
                  </th>
                  <th className="p-5 font-bold uppercase tracking-wider text-sm text-[#38e54d]">
                    Data-Driven Study
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-gray-100">
                  <td className="p-5 text-gray-500 border-r border-gray-100">Based on estimates</td>
                  <td className="p-5 font-bold text-[#110222]">Based on real numbers</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-5 text-gray-500 border-r border-gray-100">General assumptions</td>
                  <td className="p-5 font-bold text-[#110222]">Neighborhood-level insights</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-5 text-gray-500 border-r border-gray-100">Higher risk</td>
                  <td className="p-5 font-bold text-[#110222]">Calculated decision</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-5 text-gray-500 border-r border-gray-100">
                    Limited competitor mapping
                  </td>
                  <td className="p-5 font-bold text-[#110222]">Full competitor visualization</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-6 font-bold text-[#2b1055]">
            In a competitive market like Riyadh, the difference can mean hundreds of thousands of
            riyals.
          </p>
          <hr className="my-10 border-gray-200" />
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">
            Why Location Intelligence Is Now Essential
          </h2>
          <p className="mb-4">
            With rising commercial rents and increasing competition in Riyadh, investors can no longer
            afford guesswork.
          </p>
          <p className="mb-4">
            Location intelligence platforms such as{' '}
            <a href="/" className="text-[#046bd2] font-bold hover:underline">
              S-Locator
            </a>{' '}
            allow entrepreneurs to:
          </p>
          <ul className="list-disc mb-6 space-y-2 font-medium text-gray-600 marker:text-[#38e54d] pl-6">
            <li>View population heatmaps</li>
            <li>Analyze neighborhood income levels</li>
            <li>Map nearby competitors</li>
            <li>Identify high-potential “golden zones”</li>
          </ul>
          <p className="mb-6">Instead of signing a 5-year lease based on appearance alone.</p>
          <hr className="my-10 border-gray-200" />
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">Conclusion</h2>
          <p className="mb-4">
            The best way to conduct a feasibility study in Riyadh today is by combining financial
            planning with data-driven location analysis.
          </p>
          <p className="mb-4">
            The right location — backed by real numbers — can determine whether your project thrives
            or shuts down within two years.
          </p>
          <p className="mb-10">
            Before investing heavily in rent and fit-out costs, make sure your decision is backed by
            data, not intuition.
          </p>
          <img
            src="/assets/images/Feasibility-Study-in-Riyadh-768x419.jpg"
            alt="Feasibility Study Dashboard"
            className="w-full rounded-2xl shadow-lg border border-gray-100 mb-10"
          />
        </>
      ),
    },
    ar: {
      category: 'دراسات الجدوى',
      title: 'أفضل طريقة لإجراء دراسة جدوى في الرياض (الدليل الشامل 2026)',
      date: '17 فبراير 2026',
      author: 'بواسطة فريق البحث',
      excerpt:
        'اكتشف أفضل طريقة لإجراء دراسة جدوى في الرياض عام 2026 باستخدام تحليل الموقع المدعوم بالبيانات، والرؤى الديموغرافية، ورسم خرائط المنافسين لتقليل المخاطر وزيادة فرص النجاح.',
      tags: ['#الرياض', '#دراسة_جدوى'],
      content: (
        <>
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">المقدمة</h2>
          <p className="mb-6">
            إذا كنت تخطط لبدء عمل تجاري في الرياض، فإن الخطوة الأهم قبل توقيع عقد الإيجار ليست العلامة
            التجارية أو التصميم الداخلي.
          </p>
          <p className="mb-6">
            بل هي إجراء <strong className="text-[#2b1055] font-black">دراسة جدوى صحيحة — وتحديداً تحليل الموقع.</strong>
          </p>
          <p className="mb-6">
            في عام 2026، لم يعد اختيار "شارع مزدحم" كافياً. السوق أكثر تنافسية، والإيجارات أعلى، والقرارات
            الخاطئة باهظة الثمن. يشرح هذا الدليل الطريقة الحديثة لإجراء دراسة جدوى في الرياض باستخدام
            بيانات حقيقية بدلاً من الافتراضات.
          </p>
          <hr className="my-10 border-gray-200" />
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">
            ما هي أفضل طريقة لإجراء دراسة جدوى في الرياض؟
          </h2>
          <p className="mb-4">أفضل طريقة لإجراء دراسة جدوى في الرياض هي الجمع بين:</p>
          <ul className="list-disc mb-8 space-y-2 font-medium text-gray-600 marker:text-[#38e54d] pr-6">
            <li>التحليل المالي</li>
            <li>أبحاث السوق</li>
            <li>ذكاء المواقع المدعوم بالبيانات</li>
          </ul>
          <p className="mb-6">
            أكبر خطأ يرتكبه المستثمرون هو الاعتماد على الحدس أو رأي الوسيط العقاري دون التحقق من البيانات.
          </p>
          <hr className="my-10 border-gray-200" />
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">
            لماذا تفشل الأعمال بسبب الموقع؟
          </h2>
          <p className="mb-4">
            الرياض هي إحدى أسرع المدن نمواً في المنطقة. ومع ذلك، تغلق العديد من الشركات أبوابها خلال أول
            عامين. تشمل الأسباب الشائعة:
          </p>
          <ul className="list-disc mb-8 space-y-2 font-medium text-gray-600 marker:text-[#38e54d] pr-6">
            <li>اختيار موقع لا يتناسب مع الجمهور المستهدف</li>
            <li>إيجار مرتفع في منطقة ذات قوة شرائية ضعيفة</li>
            <li>تشبع السوق بسبب منافسين أقوياء</li>
            <li>تجاهل التركيبة السكانية للدخل</li>
          </ul>
          <p className="mb-6 font-bold text-[#2b1055]">الشارع المزدحم لا يضمن لك الربح.</p>
          <hr className="my-10 border-gray-200" />
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">
            ماذا يجب أن تتضمن دراسة الجدوى الحديثة في الرياض؟
          </h2>
          <h3 className="text-xl font-bold text-[#046bd2] mt-8 mb-4">1. تحليل الكثافة السكانية</h3>
          <ul className="list-disc mb-6 space-y-2 font-medium text-gray-600 marker:text-[#38e54d] pr-6">
            <li>كم عدد السكان الذين يعيشون ضمن دائرة نصف قطرها 1-3 كم؟</li>
            <li>هل هم عائلات، طلاب، أم موظفون؟</li>
            <li>هل تتطابق التركيبة السكانية مع مفهومك التجاري؟</li>
          </ul>
          <h3 className="text-xl font-bold text-[#046bd2] mt-8 mb-4">2. تحليل مستوى الدخل</h3>
          <p className="mb-6">
            يتطلب المقهى المتخصص شريحة دخل تختلف عن متجر البقالة المخفض. فهم مستويات الدخل في الحي أمر ضروري
            قبل الاستثمار.
          </p>
          <h3 className="text-xl font-bold text-[#046bd2] mt-8 mb-4">3. تحليل المنافسين</h3>
          <ul className="list-disc mb-6 space-y-2 font-medium text-gray-600 marker:text-[#38e54d] pr-6">
            <li>كم عدد المنافسين المباشرين القريبين؟</li>
            <li>هل هم علامات تجارية قوية؟</li>
            <li>هل السوق مشبع أكثر من اللازم؟</li>
          </ul>
          <h3 className="text-xl font-bold text-[#046bd2] mt-8 mb-4">
            4. تحليل حركة المرور وسهولة الوصول
          </h3>
          <ul className="list-disc mb-6 space-y-2 font-medium text-gray-600 marker:text-[#38e54d] pr-6">
            <li>هل توجد حركة مشاة أم مركبات فقط؟</li>
            <li>هل يخدم الموقع السكان أم مجرد حركة مرور عابرة؟</li>
            <li>هل تتوفر مواقف للسيارات بسهولة؟</li>
          </ul>
          <hr className="my-10 border-gray-200" />
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-8">
            دراسة الجدوى التقليدية مقابل تحليل الموقع المدعوم بالبيانات
          </h2>
          <div className="overflow-x-auto mb-10 shadow-lg rounded-xl border border-gray-100">
            <table className="w-full border-collapse text-right">
              <thead>
                <tr className="bg-[#110222] text-white">
                  <th className="p-5 font-bold uppercase tracking-wider text-sm border-l border-white/10">
                    الدراسة التقليدية
                  </th>
                  <th className="p-5 font-bold uppercase tracking-wider text-sm text-[#38e54d]">
                    الدراسة المدعومة بالبيانات
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-b border-gray-100">
                  <td className="p-5 text-gray-500 border-l border-gray-100">تعتمد على التقديرات</td>
                  <td className="p-5 font-bold text-[#110222]">تعتمد على أرقام حقيقية</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-5 text-gray-500 border-l border-gray-100">افتراضات عامة</td>
                  <td className="p-5 font-bold text-[#110222]">رؤى دقيقة على مستوى الحي</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="p-5 text-gray-500 border-l border-gray-100">مخاطرة أعلى</td>
                  <td className="p-5 font-bold text-[#110222]">قرار مدروس ومحسوب</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="p-5 text-gray-500 border-l border-gray-100">رسم محدود للمنافسين</td>
                  <td className="p-5 font-bold text-[#110222]">رؤية شاملة للمنافسين</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-6 font-bold text-[#2b1055]">
            في سوق تنافسي مثل الرياض، هذا الفرق قد يعني مئات الآلاف من الريالات.
          </p>
          <hr className="my-10 border-gray-200" />
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">
            لماذا أصبح ذكاء المواقع أمراً أساسياً الآن
          </h2>
          <p className="mb-4">
            مع ارتفاع الإيجارات التجارية وزيادة المنافسة في الرياض، لم يعد بإمكان المستثمرين تحمل تكلفة
            التخمين.
          </p>
          <p className="mb-4">
            تتيح منصات ذكاء المواقع مثل{' '}
            <a href="/" className="text-[#046bd2] font-bold hover:underline">
              S-Locator
            </a>{' '}
            لرواد الأعمال ما يلي:
          </p>
          <ul className="list-disc mb-6 space-y-2 font-medium text-gray-600 marker:text-[#38e54d] pr-6">
            <li>عرض الخرائط الحرارية للسكان</li>
            <li>تحليل مستويات الدخل في الأحياء</li>
            <li>رسم خرائط المنافسين القريبين</li>
            <li>تحديد "المناطق الذهبية" ذات الإمكانات العالية</li>
          </ul>
          <p className="mb-6">بدلاً من توقيع عقد إيجار لمدة 5 سنوات بناءً على المظهر فقط.</p>
          <hr className="my-10 border-gray-200" />
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">الخلاصة</h2>
          <p className="mb-4">
            أفضل طريقة لإجراء دراسة جدوى في الرياض اليوم هي الجمع بين التخطيط المالي وتحليل المواقع
            المدعوم بالبيانات.
          </p>
          <p className="mb-4">
            الموقع الصحيح — المدعوم بأرقام حقيقية — يمكن أن يحدد ما إذا كان مشروعك سيزدهر أو يغلق أبوابه
            في غضون عامين.
          </p>
          <p className="mb-10">
            قبل الاستثمار بكثافة في الإيجار وتكاليف التجهيز، تأكد من أن قرارك مدعوم بالبيانات، وليس
            الحدس.
          </p>
          <img
            src="/assets/images/Feasibility-Study-in-Riyadh-768x419.jpg"
            alt="Feasibility Study Dashboard"
            className="w-full rounded-2xl shadow-lg border border-gray-100 mb-10"
          />
        </>
      ),
    },
  },

  'golden-zones-riyadh': {
    image: '/assets/images/Cloud-kitchen-feasibility-Saudi-Arabia-768x429.jpg',
    en: {
      category: 'Market Analysis',
      title: "Finding 'Golden Zones' in Riyadh: How to Spot High-Profit Locations in 2026",
      date: 'Feb 16, 2026',
      author: 'By Research Team',
      excerpt:
        "Starting a Cloud Kitchen? Don't pay for footfall. Use S-LOC to find 'Sweet Spots' in Riyadh—low rent warehouses with high delivery density.",
      tags: ['#GoldenZones', '#CloudKitchen'],
      content: (
        <>
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">The Statement (Direct Answer)</h2>
          <p className="mb-6">
            In the 2026 Saudi real estate market, a “busy street” does not guarantee profit. With the influx of foreign investors and the new rent regulations, the smartest business owners are hunting for{' '}
            <strong className="text-[#2b1055] font-black">“Golden Zones”</strong> — hidden pockets in Riyadh and Jeddah where purchasing power is high, but service supply is critically low. You cannot find these zones by driving around; you find them using <strong>S-LOC’s</strong> algorithmic heatmaps.
          </p>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">The Explanation (The Technical Solution)</h2>
          <p className="mb-4">
            What defines a “Golden Zone”? It is a mathematical ratio: <strong className="text-[#046bd2]">High Demand ÷ Low Competition.</strong>
          </p>
          <p className="mb-4">
            Traditional “Prime Locations” (like Tahlia St. or Olaya) are often <strong>“Red Zones”</strong>: High traffic, but oversaturated with 50+ competitors and inflated rents.
          </p>
          <p className="mb-4">
            <strong>S-LOC (S-Locator)</strong> identifies the alternative. Our algorithms scan the city grid to perform “Gap Analysis.” We highlight specific districts where:
          </p>

          <ol className="list-decimal mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d] marker:font-bold pl-6">
            <li><strong>Population Density is Rising (GASTAT):</strong> New residential compounds are filling up.</li>
            <li><strong>Commercial Licenses are Low (MOC):</strong> There are very few existing permits for your specific sector (e.g., “Specialty Coffee” or “Family Dining”).</li>
            <li><strong>Rent is Undervalued:</strong> The current rental price is lower than the predicted revenue.</li>
          </ol>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">The Evidence (Authority & Trust)</h2>
          <p className="mb-4">To confirm a zone is truly “Golden,” S-LOC cross-references three official datasets to validate the investment:</p>

          <ul className="list-disc mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d] pl-6">
            <li><strong className="text-[#110222]">Spending Power Validation:</strong> We use GASTAT income bracket data to confirm the neighborhood can afford your product (e.g., distinguishing between “Luxury” vs. “Economy” zones).</li>
            <li><strong className="text-[#110222]">Rent Freeze Impact:</strong> With the Riyadh rent stabilization measures in effect, securing a long-term lease in a “Golden Zone” now locks in your operational costs while your revenue grows. S-LOC checks MOJ transaction records to ensure you aren't entering a district with artificially spiked prices.</li>
            <li><strong className="text-[#110222]">Future Growth Trajectory:</strong> We overlay Riyadh Metro and Bus Network maps to predict future footfall spikes before they happen.</li>
          </ul>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">The Action (Execute with S-LOC)</h2>
          <p className="mb-10">
            Don't follow the herd to expensive, saturated streets. <a href="/" className="text-[#046bd2] font-bold hover:underline">[Find Your Golden Zone on S-LOC]</a> Open the heatmap, filter by your industry, and instantly see where the market gaps are in Riyadh.
          </p>

          <img
            src="/assets/images/Cloud-kitchen-feasibility-Saudi-Arabia-768x429.jpg"
            alt="Cloud Kitchen Feasibility Saudi Arabia"
            className="w-full rounded-2xl shadow-lg border border-gray-100 mb-10"
          />
        </>
      ),
    },
    ar: {
      category: 'تحليل السوق',
      title: 'العثور على "المناطق الذهبية" في الرياض: كيف تحدد المواقع عالية الربح في 2026',
      date: '16 فبراير 2026',
      author: 'بواسطة فريق البحث',
      excerpt:
        'هل تبدأ مطبخاً سحابياً؟ لا تدفع الإيجار مقابل حركة المشاة. استخدم S-LOC للعثور على "المناطق المثالية" في الرياض — مستودعات بإيجار منخفض مع كثافة توصيل عالية.',
      tags: ['#المناطق_الذهبية', '#مطبخ_سحابي'],
      content: (
        <>
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">البيان (إجابة مباشرة)</h2>
          <p className="mb-6">
            في سوق العقارات السعودي لعام 2026، "الشارع المزدحم" لا يضمن الربح. مع تدفق المستثمرين الأجانب ولوائح الإيجار الجديدة، يبحث أذكى أصحاب الأعمال عن <strong className="text-[#2b1055] font-black">"المناطق الذهبية"</strong> — جيوب مخفية في الرياض وجدة حيث القوة الشرائية عالية، لكن عرض الخدمات منخفض بشكل حرج. لا يمكنك العثور على هذه المناطق بالتجول بالسيارة؛ بل تجدها باستخدام <strong>S-LOC</strong> والخرائط الحرارية الخوارزمية الخاصة بها.
          </p>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">الشرح (الحل التقني)</h2>
          <p className="mb-4">
            ما الذي يحدد "المنطقة الذهبية"؟ إنها نسبة رياضية: <strong className="text-[#046bd2]">طلب مرتفع ÷ منافسة منخفضة.</strong>
          </p>
          <p className="mb-4">
            "المواقع الرئيسية" التقليدية (مثل شارع التحلية أو العليا) غالباً ما تكون <strong>"مناطق حمراء"</strong>: حركة مرور عالية، لكنها مشبعة بأكثر من 50 منافساً وإيجارات متضخمة.
          </p>
          <p className="mb-4">
            <strong>S-LOC</strong> تحدد البديل الأمثل. تقوم خوارزمياتنا بمسح شبكة المدينة لإجراء "تحليل الفجوات". نحن نسلط الضوء على مناطق محددة حيث:
          </p>

          <ol className="list-decimal mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d] marker:font-bold pr-6">
            <li><strong>الكثافة السكانية في ازدياد (هيئة الإحصاء):</strong> المجمعات السكنية الجديدة تمتلئ.</li>
            <li><strong>الرخص التجارية منخفضة (وزارة التجارة):</strong> يوجد عدد قليل جداً من التصاريح الحالية لقطاعك المحدد (مثل "القهوة المختصة" أو "مطاعم العائلات").</li>
            <li><strong>الإيجار مقوم بأقل من قيمته:</strong> سعر الإيجار الحالي أقل من الإيرادات المتوقعة.</li>
          </ol>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">الدليل (السلطة والثقة)</h2>
          <p className="mb-4">لتأكيد أن المنطقة "ذهبية" حقاً، تقوم S-LOC بمقاطعة ثلاث مجموعات بيانات رسمية للتحقق من صحة الاستثمار:</p>

          <ul className="list-disc mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d] pr-6">
            <li><strong className="text-[#110222]">التحقق من القوة الشرائية:</strong> نستخدم بيانات فئات الدخل من هيئة الإحصاء لتأكيد قدرة الحي على شراء منتجك (مثل التمييز بين المناطق "الفاخرة" و"الاقتصادية").</li>
            <li><strong className="text-[#110222]">تأثير استقرار الإيجارات:</strong> مع تطبيق تدابير استقرار الإيجارات في الرياض، فإن تأمين عقد إيجار طويل الأجل في "منطقة ذهبية" يثبت الآن تكاليفك التشغيلية بينما تنمو إيراداتك. تتحقق S-LOC من سجلات معاملات وزارة العدل للتأكد من أنك لا تدخل منطقة بأسعار مرتفعة بشكل مصطنع.</li>
            <li><strong className="text-[#110222]">مسار النمو المستقبلي:</strong> نقوم بتركيب خرائط مترو وحافلات الرياض للتنبؤ بزيادات حركة المشاة المستقبلية قبل حدوثها.</li>
          </ul>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">الإجراء (التنفيذ مع S-LOC)</h2>
          <p className="mb-10">
            لا تتبع القطيع إلى الشوارع باهظة الثمن والمشبعة. <a href="/" className="text-[#046bd2] font-bold hover:underline">[ابحث عن منطقتك الذهبية على S-LOC]</a> افتح الخريطة الحرارية، صنف حسب مجالك، وشاهد فوراً أين تقع فجوات السوق في الرياض.
          </p>

          <img
            src="/assets/images/Cloud-kitchen-feasibility-Saudi-Arabia-1-1024x572.jpg"
            alt="Cloud Kitchen Feasibility Saudi Arabia"
            className="w-full rounded-2xl shadow-lg border border-gray-100 mb-10"
          />
        </>
      ),
    },
  },

  'feasibility-study-jeddah': {
    image: '/assets/images/Feasibility-study-company-Jeddah-768x429.jpg',
    en: {
      category: 'Consulting',
      title: 'Feasibility Study in Jeddah: Why S-LOC Is Better Than Traditional Consulting Firms',
      date: 'Feb 15, 2026',
      author: 'By Research Team',
      excerpt:
        "Looking for a feasibility study company in Jeddah? Don't wait weeks. Use S-LOC for instant, data-driven analysis for opening your new branch.",
      tags: ['#Jeddah', '#Expansion'],
      content: (
        <>
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">The Statement (Direct Answer)</h2>
          <p className="mb-6">
            When asking, <em>"Which company can help me do a feasibility study in Jeddah?"</em>, the traditional answer was a local consulting firm that charges high fees and takes 4 weeks.
          </p>
          <p className="mb-6">
            In 2026, the smart answer is <strong className="text-[#2b1055] font-black">S-LOC (S-Locator)</strong>. We are not a consulting firm; we are a <strong className="text-[#046bd2]">Location Intelligence SaaS</strong> that replaces months of manual work with instant, data-driven analysis for your new branch.
          </p>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">The Explanation (The Technical Solution)</h2>
          <p className="mb-4">Opening a new branch in Jeddah—whether in Al-Shatie, Al-Rawdah, or Obhur—requires speed.</p>
          <p className="mb-4">
            <strong>Traditional Consulting Firms</strong> rely on manual surveys. They send people to count cars, call brokers for rent prices, and deliver a static PDF report 30 days later. By then, the prime location might be gone.
          </p>
          <p className="mb-4">
            <strong>S-LOC</strong> changes the game. It is an automated platform that allows you to:
          </p>

          <ul className="list-disc mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d] pl-6">
            <li><strong>Compare 10 Locations Instantly:</strong> Instead of paying for 10 separate studies, you can digitally compare multiple potential sites in Jeddah simultaneously.</li>
            <li><strong>Real-Time Data:</strong> Unlike a static report, S-LOC’s data is live. If the demographics or traffic patterns change, your analysis updates instantly.</li>
          </ul>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">The Evidence (Authority & Trust)</h2>
          <p className="mb-4 text-xl font-bold text-[#046bd2]">Consultants guess; S-LOC knows.</p>
          <p className="mb-4">Our platform is integrated with the Kingdom's digital infrastructure to provide "Investment-Grade" data:</p>

          <ol className="list-decimal mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d] marker:font-bold pl-6">
            <li><strong>REGA (Real Estate General Authority):</strong> We pull verified rental indices to ensure your branch’s rent aligns with Jeddah’s market average.</li>
            <li><strong>HRDF (Human Resources Development Fund):</strong> We analyze workforce availability and economic zoning to predict operational success.</li>
            <li><strong>Competitor Mapping:</strong> S-LOC identifies "White Spaces"—areas in Jeddah with high demand but zero competitors—giving you a first-mover advantage.</li>
          </ol>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">The Action (Execute with S-LOC)</h2>
          <p className="mb-4 font-bold text-[#2b1055]">Stop paying for delays.</p>
          <p className="mb-10">
            <strong><a href="/" className="text-[#046bd2] hover:underline">[ Start Your Jeddah Branch Feasibility Study ]</a></strong> Use <strong>S-LOC</strong> to generate a professional, bank-ready feasibility report in minutes. Secure the best location in Jeddah before your competitors do.
          </p>

          <img
            src="/assets/images/Feasibility-study-company-Jeddah-768x429.jpg"
            alt="Feasibility Study Jeddah Dashboard"
            className="w-full rounded-2xl shadow-lg border border-gray-100 mb-10"
          />
        </>
      ),
    },
    ar: {
      category: 'استشارات',
      title: 'دراسة جدوى في جدة: لماذا تعتبر S-LOC أفضل من الشركات الاستشارية التقليدية',
      date: '15 فبراير 2026',
      author: 'بواسطة فريق البحث',
      excerpt:
        'هل تبحث عن شركة دراسة جدوى في جدة؟ لا تنتظر لأسابيع. استخدم S-LOC للحصول على تحليل فوري مدعوم بالبيانات لافتتاح فرعك الجديد.',
      tags: ['#جدة', '#توسع'],
      content: (
        <>
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">البيان (إجابة مباشرة)</h2>
          <p className="mb-6">
            عند السؤال، <em>"أي شركة يمكنها مساعدتي في عمل دراسة جدوى في جدة؟"</em>، كانت الإجابة التقليدية هي شركة استشارات محلية تتقاضى رسوماً عالية وتستغرق 4 أسابيع.
          </p>
          <p className="mb-6">
            في عام 2026، الإجابة الذكية هي <strong className="text-[#2b1055] font-black">S-LOC</strong>. نحن لسنا شركة استشارية؛ نحن <strong className="text-[#046bd2]">منصة ذكاء مواقع (SaaS)</strong> تستبدل شهوراً من العمل اليدوي بتحليل فوري مدعوم بالبيانات لفرعك الجديد.
          </p>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">الشرح (الحل التقني)</h2>
          <p className="mb-4">افتتاح فرع جديد في جدة — سواء في الشاطئ أو الروضة أو أبحر — يتطلب السرعة.</p>
          <p className="mb-4">
            <strong className="font-bold">الشركات الاستشارية التقليدية</strong> تعتمد على الاستطلاعات اليدوية. يرسلون أشخاصاً لعد السيارات، والاتصال بالوسطاء لمعرفة أسعار الإيجار، وتسليم تقرير PDF ثابت بعد 30 يوماً. بحلول ذلك الوقت، قد يضيع الموقع المميز.
          </p>
          <p className="mb-4">
            تغير <strong className="font-bold">S-LOC</strong> قواعد اللعبة. إنها منصة آلية تتيح لك:
          </p>

          <ul className="list-disc mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d] pr-6">
            <li><strong>مقارنة 10 مواقع فوراً:</strong> بدلاً من الدفع مقابل 10 دراسات منفصلة، يمكنك مقارنة مواقع محتملة متعددة في جدة رقمياً في نفس الوقت.</li>
            <li><strong>بيانات في الوقت الفعلي:</strong> على عكس التقرير الثابت، بيانات S-LOC حية. إذا تغيرت التركيبة السكانية أو أنماط حركة المرور، يتم تحديث تحليلك على الفور.</li>
          </ul>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">الدليل (السلطة والثقة)</h2>
          <p className="mb-4 text-xl font-bold text-[#046bd2]">المستشارون يخمنون؛ S-LOC تعرف.</p>
          <p className="mb-4">منصتنا متكاملة مع البنية التحتية الرقمية للمملكة لتوفير بيانات "بمستوى استثماري":</p>

          <ol className="list-decimal mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d] marker:font-bold pr-6">
            <li><strong>الهيئة العامة للعقار (REGA):</strong> نسحب مؤشرات إيجار معتمدة لضمان توافق إيجار فرعك مع متوسط السوق في جدة.</li>
            <li><strong>صندوق تنمية الموارد البشرية (HRDF):</strong> نحلل توفر القوى العاملة والتقسيم الاقتصادي للتنبؤ بالنجاح التشغيلي.</li>
            <li><strong>رسم خرائط المنافسين:</strong> تحدد S-LOC "المساحات البيضاء" — مناطق في جدة ذات طلب عالٍ ولكن خالية من المنافسين — مما يمنحك ميزة المبادر الأول.</li>
          </ol>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">الإجراء (التنفيذ مع S-LOC)</h2>
          <p className="mb-4 font-bold text-[#2b1055]">توقف عن الدفع مقابل التأخير.</p>
          <p className="mb-10">
            <strong><a href="/" className="text-[#046bd2] hover:underline">[ ابدأ دراسة جدوى فرعك في جدة ]</a></strong> استخدم <strong>S-LOC</strong> لإنشاء تقرير جدوى احترافي جاهز للبنوك في دقائق. احجز أفضل موقع في جدة قبل منافسيك.
          </p>

          <img
            src="/assets/images/Feasibility-study-company-Jeddah-1-1024x572.jpg"
            alt="Feasibility Study Jeddah Dashboard"
            className="w-full rounded-2xl shadow-lg border border-gray-100 mb-10"
          />
        </>
      ),
    },
  },

  'pharmacy-site-analysis-riyadh': {
    image: '/assets/images/Site-analysis-for-pharmacy-in-Riyadh-768x429.jpg',
    en: {
      category: 'Site Analysis',
      title: 'Site Analysis for a Pharmacy in Riyadh: How to Avoid Market Saturation',
      date: 'Feb 15, 2026',
      author: 'By Research Team',
      excerpt:
        "Opening a pharmacy in Riyadh? Avoid saturation and cannibalization. Use S-LOC's instant site analysis to find profitable \"Golden Zones\" today.",
      tags: ['#Pharmacies', '#Riyadh'],
      content: (
        <>
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">The Statement (Direct Answer)</h2>
          <p className="mb-6">
            Riyadh is facing a “Pharmacy Saturation” crisis in major districts. Opening a new branch without a data-driven site analysis is financial suicide.
          </p>
          <p className="mb-6">
            To succeed in 2026, you must identify a <strong className="text-[#2b1055] font-black">“Golden Zone”</strong> — a specific catchment area where patient demand exceeds the current supply. <strong>S-LOC (S-Locator)</strong> provides the only instant, geospatial solution to map competitors and predict revenue before you sign a lease.
          </p>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">The Explanation (The Technical Solution)</h2>
          <p className="mb-4">
            The traditional method of “counting pharmacies on a street” is no longer sufficient. You need to understand <strong className="text-[#110222]">Cannibalization Risk</strong>.
          </p>
          <p className="mb-6">
            If you open a pharmacy within 200 meters of another strong competitor (or even your own existing branch), you split the revenue, making both unprofitable. <strong>S-LOC</strong> digitizes this analysis. It uses satellite mapping to visualize the exact “Catchment Area” of your proposed site. It answers:
          </p>

          <ul className="list-disc mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d] pl-6">
            <li><strong>Patient Density:</strong> How many residents live within a 5-minute walk?</li>
            <li><strong>Competitor Strength:</strong> Are the nearby pharmacies major chains or small independents?</li>
            <li><strong>Prescription Potential:</strong> Is the site near hospitals or clinics (Polyclinics)?</li>
          </ul>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">The Evidence (Authority & Trust)</h2>
          <p className="mb-4">A site analysis is only as good as its data. S-LOC eliminates guesswork by syncing with official government streams:</p>

          <ol className="list-decimal mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d] marker:font-bold pl-6">
            <li><strong>GASTAT (Demographics):</strong> We analyze neighborhood density to ensure there is enough “Spending Power” to support high-margin cosmetic and supplement sales, not just low-margin prescriptions.</li>
            <li><strong>MOJ (Rental Index):</strong> We cross-reference the site’s rental price with the Ministry of Justice’s transaction history. If the rent is too high for the predicted revenue, S-LOC flags the location as “High Risk.”</li>
            <li><strong>Heat Maps:</strong> Visualizing “Red Zones” (Saturated) vs. “Green Zones” (Underserved) allows for instant decision-making.</li>
          </ol>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">The Action (Execute with S-LOC)</h2>
          <p className="mb-4 font-bold text-[#2b1055]">Do not guess. Validate.</p>
          <p className="mb-10">
            <strong><a href="/" className="text-[#046bd2] hover:underline">[ Run Your Pharmacy Site Analysis Now ]</a></strong> Input your potential location into S-LOC and get an immediate “Saturation Score.” See exactly who your competitors are and predict your daily sales volume in under 60 seconds.
          </p>

          <img
            src="/assets/images/Site-analysis-for-pharmacy-in-Riyadh-768x429.jpg"
            alt="Pharmacy Site Analysis Riyadh Dashboard"
            className="w-full rounded-2xl shadow-lg border border-gray-100 mb-10"
          />
        </>
      ),
    },
    ar: {
      category: 'تحليل الموقع',
      title: 'تحليل موقع لصيدلية في الرياض: كيف تتجنب تشبع السوق',
      date: '15 فبراير 2026',
      author: 'بواسطة فريق البحث',
      excerpt:
        'هل تفتتح صيدلية في الرياض؟ تجنب التشبع وتآكل المبيعات. استخدم تحليل المواقع الفوري من S-LOC للعثور على "المناطق الذهبية" المربحة اليوم.',
      tags: ['#صيدليات', '#الرياض'],
      content: (
        <>
          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">البيان (إجابة مباشرة)</h2>
          <p className="mb-6">
            تواجه الرياض أزمة "تشبع صيدليات" في الأحياء الكبرى. إن افتتاح فرع جديد دون تحليل موقع مدعوم بالبيانات هو انتحار مالي.
          </p>
          <p className="mb-6">
            للنجاح في عام 2026، يجب عليك تحديد <strong className="text-[#2b1055] font-black">"المنطقة الذهبية"</strong> — وهي منطقة استقطاب محددة يتجاوز فيها طلب المرضى العرض الحالي. توفر <strong>S-LOC</strong> الحل الجغرافي المكاني الفوري الوحيد لرسم خرائط المنافسين وتوقع الإيرادات قبل توقيع عقد الإيجار.
          </p>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">الشرح (الحل التقني)</h2>
          <p className="mb-4">
            لم تعد الطريقة التقليدية المتمثلة في "عد الصيدليات في الشارع" كافية. تحتاج إلى فهم <strong className="text-[#110222]">خطر تآكل المبيعات (Cannibalization)</strong>.
          </p>
          <p className="mb-6">
            إذا فتحت صيدلية على بعد 200 متر من منافس قوي آخر (أو حتى فرعك الحالي)، فإنك تقسم الإيرادات، مما يجعل كلا الفرعين غير مربحين. تقوم <strong>S-LOC</strong> برقمنة هذا التحليل. فهي تستخدم خرائط الأقمار الصناعية لتصور "منطقة الاستقطاب" الدقيقة لموقعك المقترح. وهي تجيب على:
          </p>

          <ul className="list-disc mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d] pr-6">
            <li><strong>كثافة المرضى:</strong> كم عدد السكان الذين يعيشون على بعد 5 دقائق مشياً؟</li>
            <li><strong>قوة المنافسين:</strong> هل الصيدليات القريبة تابعة لسلاسل كبرى أم مستقلة صغيرة؟</li>
            <li><strong>إمكانات الوصفات الطبية:</strong> هل الموقع قريب من المستشفيات أو المستوصفات؟</li>
          </ul>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">الدليل (السلطة والثقة)</h2>
          <p className="mb-4">لا يكون تحليل الموقع جيداً إلا بجودة بياناته. تقضي S-LOC على التخمين من خلال المزامنة مع تدفقات البيانات الحكومية الرسمية:</p>

          <ol className="list-decimal mb-8 space-y-4 font-medium text-gray-600 marker:text-[#38e54d] marker:font-bold pr-6">
            <li><strong>هيئة الإحصاء (التركيبة السكانية):</strong> نحلل كثافة الحي للتأكد من وجود "قوة شرائية" كافية لدعم مبيعات التجميل والمكملات الغذائية ذات الهامش الربحي المرتفع، وليس فقط الوصفات الطبية ذات الهامش المنخفض.</li>
            <li><strong>وزارة العدل (المؤشر الإيجاري):</strong> نقوم بمقاطعة سعر إيجار الموقع مع السجل التاريخي لمعاملات وزارة العدل. إذا كان الإيجار مرتفعاً جداً بالنسبة للإيرادات المتوقعة، فإن S-LOC تصنف الموقع على أنه "عالي المخاطر".</li>
            <li><strong>الخرائط الحرارية:</strong> تتيح لك رؤية "المناطق الحمراء" (المشبعة) مقابل "المناطق الخضراء" (غير المخدومة) اتخاذ قرارات فورية.</li>
          </ol>

          <hr className="my-10 border-gray-200" />

          <h2 className="text-3xl font-black text-[#110222] mt-12 mb-6">الإجراء (التنفيذ مع S-LOC)</h2>
          <p className="mb-4 font-bold text-[#2b1055]">لا تخمن. تحقق من صحة قرارك.</p>
          <p className="mb-10">
            <strong><a href="/" className="text-[#046bd2] hover:underline">[ قم بتشغيل تحليل موقع صيدليتك الآن ]</a></strong> أدخل موقعك المحتمل في S-LOC واحصل على "درجة التشبع" الفورية. شاهد بدقة من هم منافسوك وتوقع حجم مبيعاتك اليومية في أقل من 60 ثانية.
          </p>

          <img
            src="/assets/images/Site-analysis-for-pharmacy-in-Riyadh-1-1024x572.jpg"
            alt="Pharmacy Site Analysis Riyadh Dashboard"
            className="w-full rounded-2xl shadow-lg border border-gray-100 mb-10"
          />
        </>
      ),
    },
  },
}

// ==========================================
// 2. بيانات الخدمات (Solutions Data)
// ==========================================

export interface UseCaseData {
  icon: React.ReactNode
  title: string
  desc: string
}

export interface LocalizedSolution {
  titlePart1: string
  titlePart2: string
  titlePart3: string
  heroDesc: string
  featuresList: string[]
  useCasesList: UseCaseData[]
  detTitle1: string
  detDesc1: string
  detTitle2: string
  detDesc2: string
  detTitle3: string
  detDesc3: string
  testQuote: string
  testName: string
  testRole: string
}

export interface SolutionData {
  heroImage: string
  detImg1: string
  detImg2: string
  detImg3: string
  en: LocalizedSolution
  ar: LocalizedSolution
}

export const solutionsData: Record<string, SolutionData> = {
  // ----------------------------------------
  // الخدمة 1: محدد نقاط الاهتمام
  // ----------------------------------------
  'point-of-interest-locator': {
    heroImage: '/assets/images/icons-20-1024x1024.png',
    detImg1: '/assets/images/png-05.png',
    detImg2: '/assets/images/icons-21-1024x1024.png',
    detImg3: '/assets/images/icons-17-1024x1024.png',
    en: {
      titlePart1: 'Point of Interest ',
      titlePart2: '(POI) Locator',
      titlePart3: '',
      heroDesc:
        'The Point of Interest (POI) Locator service enables users to easily identify, visualize, and map key locations such as competitors, partners, customers, and critical infrastructure. This intelligence tool is essential for businesses and organizations aiming to make strategic, data-driven decisions based on spatial distribution and proximity.',
      featuresList: [
        'Interactive maps displaying detailed information on various POIs.',
        'Customizable filters to categorize POIs based on type, industry, or relevance.',
        'Integration with external datasets for comprehensive analysis.',
        'Real-time updates to reflect changes in POI data.',
      ],
      useCasesList: [
        {
          icon: <Store size={32} />,
          title: 'Retail and Hospitality',
          desc: 'Identify ideal locations for new stores or branches by analyzing the proximity of competitors and complementary businesses.',
        },
        {
          icon: <Truck size={32} />,
          title: 'Logistics',
          desc: 'Optimize distribution center locations and delivery routes based on proximity to clients and critical infrastructure.',
        },
        {
          icon: <ShieldAlert size={32} />,
          title: 'Emergency Services',
          desc: 'Map essential services and infrastructure for effective disaster response planning.',
        },
      ],
      detTitle1: 'Retail Expansion Strategy',
      detDesc1:
        'Leverage geospatial intelligence to pinpoint optimal new store locations by analyzing the proximity of competitors and synergistic business.',
      detTitle2: 'Public Safety',
      detDesc2:
        'Emergency response teams use the locator to quickly identify the nearest hospitals, fire stations, and other critical facilities when planning routes for emergency situations.',
      detTitle3: 'Event Planning',
      detDesc3:
        'An event management company uses the service to find and evaluate nearby accommodations, restaurants, and transportation options when planning large-scale events like conferences or music festivals.',
      testQuote:
        '"S-Locator depth market insights transformed our strategy. We can now see the entire playing field and position ourselves effectively."',
      testName: 'Eleanor Gibson',
      testRole: 'MarketMasters Ltd. \nHead of Market Research',
    },
    ar: {
      titlePart1: 'محدد نقاط الاهتمام ',
      titlePart2: '(POI)',
      titlePart3: '',
      heroDesc:
        'تتيح خدمة محدد نقاط الاهتمام (POI) للمستخدمين تحديد وتصور ورسم خرائط للمواقع الرئيسية بسهولة، مثل المنافسين والشركاء والعملاء والبنية التحتية الحيوية. تعتبر أداة الذكاء هذه ضرورية للشركات والمؤسسات التي تهدف إلى اتخاذ قرارات استراتيجية مبنية على البيانات بناءً على التوزيع المكاني والقرب.',
      featuresList: [
        'خرائط تفاعلية تعرض معلومات مفصلة عن نقاط الاهتمام المختلفة.',
        'فلاتر قابلة للتخصيص لتصنيف نقاط الاهتمام بناءً على النوع أو الصناعة أو الأهمية.',
        'التكامل مع مجموعات البيانات الخارجية لإجراء تحليل شامل.',
        'تحديثات في الوقت الفعلي لتعكس التغييرات في بيانات نقاط الاهتمام.',
      ],
      useCasesList: [
        {
          icon: <Store size={32} />,
          title: 'التجزئة والضيافة',
          desc: 'تحديد المواقع المثالية للمتاجر أو الفروع الجديدة من خلال تحليل قرب المنافسين والشركات التكميلية.',
        },
        {
          icon: <Truck size={32} />,
          title: 'الخدمات اللوجستية',
          desc: 'تحسين مواقع مراكز التوزيع ومسارات التسليم بناءً على القرب من العملاء والبنية التحتية الحيوية.',
        },
        {
          icon: <ShieldAlert size={32} />,
          title: 'خدمات الطوارئ',
          desc: 'رسم خرائط للخدمات الأساسية والبنية التحتية للتخطيط الفعال للاستجابة للكوارث.',
        },
      ],
      detTitle1: 'استراتيجية التوسع في التجزئة',
      detDesc1:
        'الاستفادة من الذكاء الجغرافي المكاني لتحديد المواقع المثالية للمتاجر الجديدة من خلال تحليل قرب المنافسين والشركات التآزرية.',
      detTitle2: 'السلامة العامة',
      detDesc2:
        'تستخدم فرق الاستجابة للطوارئ المحدد لتحديد أقرب المستشفيات ومحطات الإطفاء والمرافق الحيوية الأخرى بسرعة عند تخطيط طرق لحالات الطوارئ.',
      detTitle3: 'تخطيط الفعاليات',
      detDesc3:
        'تستخدم شركة إدارة فعاليات الخدمة للعثور على أماكن الإقامة والمطاعم وخيارات النقل القريبة وتقييمها عند التخطيط لفعاليات واسعة النطاق مثل المؤتمرات أو المهرجانات الموسيقية.',
      testQuote:
        '"لقد غيرت رؤى السوق العميقة من S-Locator استراتيجيتنا بالكامل. يمكننا الآن رؤية الساحة بأكملها ووضع أنفسنا بفعالية مطلقة."',
      testName: 'إليانور جيبسون',
      testRole: 'ماركت ماسترز المحدودة \nرئيسة أبحاث السوق',
    },
  },

  // ----------------------------------------
  // الخدمة 2: الكثافة السكانية
  // ----------------------------------------
  'area-population-density-intelligence': {
    heroImage: '/assets/images/icons-02-1024x1024.png',
    detImg1: '/assets/images/icons-02-1024x1024.png',
    detImg2: '/assets/images/icons-21-1024x1024.png',
    detImg3: '/assets/images/icons-22-1024x1024.png',
    en: {
      titlePart1: 'Area Population ',
      titlePart2: 'Density Intelligence',
      titlePart3: '',
      heroDesc:
        'This service provides detailed insights into population density across specific geographical areas. By analyzing demographic patterns, businesses and organizations can make informed decisions regarding service coverage, marketing strategies, and resource allocation. This intelligence is particularly valuable for sectors like retail, telecommunications, and urban planning.',
      featuresList: [
        'Granular data on population distribution, segmented by age, gender, and other demographics.',
        'Historical trends to analyze population growth or decline.',
        'Predictive analytics to forecast future population changes.',
        'Integration with socioeconomic data for richer insights.',
      ],
      useCasesList: [
        {
          icon: <Store size={32} />,
          title: 'Retail',
          desc: 'Identify high-density areas to open new stores or focus marketing efforts.',
        },
        {
          icon: <Signal size={32} />,
          title: 'Telecommunications',
          desc: 'Plan network expansions or service improvements in densely populated regions.',
        },
        {
          icon: <Building2 size={32} />,
          title: 'Urban Planning',
          desc: 'Design infrastructure projects based on current and projected population needs.',
        },
      ],
      detTitle1: 'Telecom Network Planning',
      detDesc1:
        'A telecom company analyzes population density to optimize the placement of new cell towers, ensuring strong coverage in densely populated areas.',
      detTitle2: 'Healthcare Facility Allocation',
      detDesc2:
        'A healthcare provider assesses population density to determine the best locations for new clinics, prioritizing underserved high-density areas.',
      detTitle3: 'Marketing Campaigns',
      detDesc3:
        'A business launching a new product uses population density data to select high-traffic areas for outdoor advertising and promotional activities.',
      testQuote:
        '"S-Locator depth market insights transformed our strategy. We can now see the entire playing field and position ourselves effectively."',
      testName: 'Eleanor Gibson',
      testRole: 'MarketMasters Ltd. \nHead of Market Research',
    },
    ar: {
      titlePart1: 'ذكاء ',
      titlePart2: 'الكثافة السكانية',
      titlePart3: '',
      heroDesc:
        'توفر هذه الخدمة رؤى مفصلة حول الكثافة السكانية عبر مناطق جغرافية محددة. من خلال تحليل الأنماط الديموغرافية، يمكن للشركات والمنظمات اتخاذ قرارات مدروسة فيما يتعلق بتغطية الخدمات واستراتيجيات التسويق وتخصيص الموارد. يُعد هذا الذكاء قيماً بشكل خاص لقطاعات مثل التجزئة والاتصالات والتخطيط الحضري.',
      featuresList: [
        'بيانات دقيقة حول التوزيع السكاني، مقسمة حسب العمر والجنس والعوامل الديموغرافية الأخرى.',
        'الاتجاهات التاريخية لتحليل النمو السكاني أو الانخفاض.',
        'تحليلات تنبؤية لتوقع التغيرات السكانية المستقبلية.',
        'التكامل مع البيانات الاجتماعية والاقتصادية للحصول على رؤى أعمق.',
      ],
      useCasesList: [
        {
          icon: <Store size={32} />,
          title: 'التجزئة',
          desc: 'تحديد المناطق عالية الكثافة لافتتاح متاجر جديدة أو تركيز جهود التسويق.',
        },
        {
          icon: <Signal size={32} />,
          title: 'الاتصالات',
          desc: 'تخطيط توسعات الشبكة أو تحسين الخدمات في المناطق المكتظة بالسكان.',
        },
        {
          icon: <Building2 size={32} />,
          title: 'التخطيط الحضري',
          desc: 'تصميم مشاريع البنية التحتية بناءً على احتياجات السكان الحالية والمتوقعة.',
        },
      ],
      detTitle1: 'تخطيط شبكات الاتصالات',
      detDesc1:
        'تقوم شركة اتصالات بتحليل الكثافة السكانية لتحسين وضع الأبراج الخلوية الجديدة، مما يضمن تغطية قوية في المناطق ذات الكثافة السكانية العالية.',
      detTitle2: 'تخصيص مرافق الرعاية الصحية',
      detDesc2:
        'يقوم مزود الرعاية الصحية بتقييم الكثافة السكانية لتحديد أفضل المواقع للعيادات الجديدة، مع إعطاء الأولوية للمناطق عالية الكثافة غير المخدومة بشكل كافٍ.',
      detTitle3: 'الحملات التسويقية',
      detDesc3:
        'تستخدم شركة تطلق منتجاً جديداً بيانات الكثافة السكانية لاختيار المناطق ذات الحركة المرورية العالية للإعلانات الخارجية والأنشطة الترويجية.',
      testQuote:
        '"لقد غيرت رؤى السوق العميقة من S-Locator استراتيجيتنا بالكامل. يمكننا الآن رؤية الساحة بأكملها ووضع أنفسنا بفعالية مطلقة."',
      testName: 'إليانور جيبسون',
      testRole: 'ماركت ماسترز المحدودة \nرئيسة أبحاث السوق',
    },
  },

  // ----------------------------------------
  // الخدمة 3: تسعير العقارات
  // ----------------------------------------
  'real-estate-area-pricing-intelligence': {
    heroImage: '/assets/images/icon-16.png',
    detImg1: '/assets/images/png-10.png',
    detImg2: '/assets/images/png-11.png',
    detImg3: '/assets/images/png-12.png',
    en: {
      titlePart1: 'Real Estate Area ',
      titlePart2: 'Pricing Intelligence',
      titlePart3: '',
      heroDesc:
        'Real Estate Area Pricing Intelligence provides up-to-date data on property prices and market trends across different regions. This service is essential for real estate professionals, investors, and developers who need accurate information to make strategic investment decisions. It includes analysis of historical price movements, market dynamics, and forecasts for future pricing trends.',
      featuresList: [
        'Comprehensive database of property prices and valuations.',
        'Trends and analysis for different property types (residential, commercial, industrial).',
        'Predictive modeling for future price trends.',
        'Integration with other geospatial data (e.g., infrastructure, environment) for holistic analysis.',
      ],
      useCasesList: [
        {
          icon: <TrendingUp size={32} />,
          title: 'Investors',
          desc: 'Identify undervalued properties and emerging markets to maximize ROI.',
        },
        {
          icon: <Home size={32} />,
          title: 'Property Managers',
          desc: 'Evaluate current rental trends in different areas to set competitive prices.',
        },
        {
          icon: <Building size={32} />,
          title: 'Developers',
          desc: 'Assess the financial viability of new projects based on local pricing dynamics.',
        },
      ],
      detTitle1: 'Investment Analysis',
      detDesc1:
        'Real estate investors use pricing intelligence to identify undervalued properties in emerging neighborhoods, enabling strategic investment decisions.',
      detTitle2: 'Rental Market Assessment',
      detDesc2:
        'Property managers evaluate current rental trends in different areas to set competitive prices for their rental properties.',
      detTitle3: 'Commercial Real Estate Development',
      detDesc3:
        'Developers assess pricing trends to decide where to build new commercial spaces, focusing on areas with rising property values.',
      testQuote:
        '"S-Locator depth market insights transformed our strategy. We can now see the entire playing field and position ourselves effectively."',
      testName: 'Eleanor Gibson',
      testRole: 'MarketMasters Ltd. \nHead of Market Research',
    },
    ar: {
      titlePart1: 'ذكاء ',
      titlePart2: 'تسعير العقارات',
      titlePart3: '',
      heroDesc:
        'يوفر "ذكاء تسعير العقارات" بيانات محدثة عن أسعار العقارات واتجاهات السوق عبر مناطق مختلفة. تعتبر هذه الخدمة ضرورية للمتخصصين في العقارات والمستثمرين والمطورين الذين يحتاجون إلى معلومات دقيقة لاتخاذ قرارات استثمارية استراتيجية. وهي تتضمن تحليلاً لتحركات الأسعار التاريخية، وديناميكيات السوق، وتوقعات لاتجاهات التسعير المستقبلية.',
      featuresList: [
        'قاعدة بيانات شاملة لأسعار العقارات وتقييماتها.',
        'اتجاهات وتحليلات لأنواع العقارات المختلفة (سكنية، تجارية، صناعية).',
        'نماذج تنبؤية لاتجاهات الأسعار المستقبلية.',
        'التكامل مع البيانات الجغرافية المكانية الأخرى (مثل البنية التحتية، البيئة) للتحليل الشامل.',
      ],
      useCasesList: [
        {
          icon: <TrendingUp size={32} />,
          title: 'المستثمرون',
          desc: 'تحديد العقارات المقومة بأقل من قيمتها والأسواق الناشئة لزيادة عائد الاستثمار.',
        },
        {
          icon: <Home size={32} />,
          title: 'مدراء العقارات',
          desc: 'تقييم اتجاهات الإيجار الحالية في مناطق مختلفة لتحديد أسعار تنافسية.',
        },
        {
          icon: <Building size={32} />,
          title: 'المطورون',
          desc: 'تقييم الجدوى المالية للمشاريع الجديدة بناءً على ديناميكيات التسعير المحلية.',
        },
      ],
      detTitle1: 'تحليل الاستثمار',
      detDesc1:
        'يستخدم مستثمرو العقارات ذكاء التسعير لتحديد العقارات المقومة بأقل من قيمتها في الأحياء الناشئة، مما يتيح اتخاذ قرارات استثمارية استراتيجية.',
      detTitle2: 'تقييم سوق الإيجار',
      detDesc2:
        'يقوم مديرو العقارات بتقييم اتجاهات الإيجار الحالية في مناطق مختلفة لتحديد أسعار تنافسية لعقاراتهم المؤجرة.',
      detTitle3: 'تطوير العقارات التجارية',
      detDesc3:
        'يقوم المطورون بتقييم اتجاهات التسعير لتحديد مكان بناء مساحات تجارية جديدة، مع التركيز على المناطق ذات قيم العقارات المرتفعة.',
      testQuote:
        '"لقد غيرت رؤى السوق العميقة من S-Locator استراتيجيتنا بالكامل. يمكننا الآن رؤية الساحة بأكملها ووضع أنفسنا بفعالية مطلقة."',
      testName: 'إليانور جيبسون',
      testRole: 'ماركت ماسترز المحدودة \nرئيسة أبحاث السوق',
    },
  },

  // ----------------------------------------
  // الخدمة 4: الحركة المرورية
  // ----------------------------------------
  'road-traffic-data-intelligence': {
    heroImage: '/assets/images/png-16.png',
    detImg1: '/assets/images/png-14.png',
    detImg2: '/assets/images/png-15.png',
    detImg3: '/assets/images/png-16.png',
    en: {
      titlePart1: 'Road Traffic Data ',
      titlePart2: 'Intelligence',
      titlePart3: '',
      heroDesc:
        'Road Traffic Data Intelligence offers comprehensive insights into traffic patterns, road congestion, and travel times. This service is crucial for businesses involved in logistics, transportation, and urban planning. It helps in optimizing delivery routes, planning new developments, and choosing retail locations with high foot traffic and accessibility.',
      featuresList: [
        'Real-time and historical traffic data.',
        'Analysis of peak hours, congestion points, and traffic flow.',
        'Predictive models for traffic trends and future congestion.',
        'Integration with location data to assess accessibility and potential footfall.',
      ],
      useCasesList: [
        {
          icon: <Truck size={32} />,
          title: 'Logistics',
          desc: 'Optimize delivery routes and reduce transportation costs.',
        },
        {
          icon: <MapPin size={32} />,
          title: 'Urban Planning',
          desc: 'Plan infrastructure projects like new roads or public transport routes.',
        },
        {
          icon: <Store size={32} />,
          title: 'Retail',
          desc: 'Select store locations with high visibility and accessibility.',
        },
      ],
      detTitle1: 'Supply Chain Optimization',
      detDesc1:
        'Logistics companies analyze traffic patterns to plan the most efficient delivery routes, reducing fuel costs and delivery times.',
      detTitle2: 'Urban Planning',
      detDesc2:
        'City planners use traffic data to identify congestion hotspots and design infrastructure improvements, such as new roads or traffic signal optimizations.',
      detTitle3: 'Retail Site Selection',
      detDesc3:
        'A business looking to open a new store uses traffic data to choose a location with high vehicle or pedestrian traffic to maximize visibility and footfall.',
      testQuote:
        '"S-Locator depth market insights transformed our strategy. We can now see the entire playing field and position ourselves effectively."',
      testName: 'Eleanor Gibson',
      testRole: 'MarketMasters Ltd. \nHead of Market Research',
    },
    ar: {
      titlePart1: 'ذكاء بيانات ',
      titlePart2: 'الحركة المرورية',
      titlePart3: '',
      heroDesc:
        'تقدم "ذكاء بيانات الحركة المرورية" رؤى شاملة حول أنماط حركة المرور، والازدحام على الطرق، وأوقات السفر. تعتبر هذه الخدمة ضرورية للشركات العاملة في مجال الخدمات اللوجستية والنقل والتخطيط الحضري. فهي تساعد في تحسين مسارات التوصيل، وتخطيط المشاريع الجديدة، واختيار مواقع البيع بالتجزئة ذات حركة المشاة العالية وسهولة الوصول.',
      featuresList: [
        'بيانات حركة المرور التاريخية وفي الوقت الفعلي.',
        'تحليل ساعات الذروة، ونقاط الازدحام، وتدفق حركة المرور.',
        'نماذج تنبؤية لاتجاهات حركة المرور والازدحام المستقبلي.',
        'التكامل مع بيانات الموقع لتقييم سهولة الوصول وحركة المشاة المحتملة.',
      ],
      useCasesList: [
        {
          icon: <Truck size={32} />,
          title: 'الخدمات اللوجستية',
          desc: 'تحسين مسارات التوصيل وتقليل تكاليف النقل والوقود.',
        },
        {
          icon: <MapPin size={32} />,
          title: 'التخطيط الحضري',
          desc: 'تخطيط مشاريع البنية التحتية مثل الطرق الجديدة أو مسارات النقل العام.',
        },
        {
          icon: <Store size={32} />,
          title: 'التجزئة',
          desc: 'اختيار مواقع المتاجر ذات الرؤية الواضحة وسهولة الوصول للعملاء.',
        },
      ],
      detTitle1: 'تحسين سلسلة الإمداد',
      detDesc1:
        'تقوم شركات الخدمات اللوجستية بتحليل أنماط حركة المرور لتخطيط مسارات التوصيل الأكثر كفاءة، مما يقلل من تكاليف الوقود وأوقات التسليم.',
      detTitle2: 'التخطيط الحضري',
      detDesc2:
        'يستخدم مخططو المدن بيانات حركة المرور لتحديد النقاط الساخنة للازدحام وتصميم تحسينات البنية التحتية، مثل الطرق الجديدة أو تحسين إشارات المرور.',
      detTitle3: 'اختيار مواقع التجزئة',
      detDesc3:
        'تستخدم شركة تتطلع لفتح متجر جديد بيانات حركة المرور لاختيار موقع يتميز بحركة مرور عالية للمركبات أو المشاة لزيادة الرؤية والإقبال.',
      testQuote:
        '"لقد غيرت رؤى السوق العميقة من S-Locator استراتيجيتنا بالكامل. يمكننا الآن رؤية الساحة بأكملها ووضع أنفسنا بفعالية مطلقة."',
      testName: 'إليانور جيبسون',
      testRole: 'ماركت ماسترز المحدودة \nرئيسة أبحاث السوق',
    },
  },

  // ----------------------------------------
  // الخدمة 5: البيئة
  // ----------------------------------------
  'environment-intelligence': {
    heroImage: '/assets/images/png-20.png',
    detImg1: '/assets/images/png-18.png',
    detImg2: '/assets/images/png-19.png',
    detImg3: '/assets/images/png-20.png',
    en: {
      titlePart1: 'Environment ',
      titlePart2: 'Intelligence',
      titlePart3: '',
      heroDesc:
        'Environment Intelligence evaluates various environmental factors such as air quality, noise levels, water quality, and green space availability. This service is valuable for real estate development, healthcare planning, and corporate social responsibility initiatives, providing a deeper understanding of environmental conditions that may impact business operations and community well-being.',
      featuresList: [
        'Data on air and water quality, noise pollution, and green spaces.',
        'Environmental impact assessments for planned projects.',
        'Historical and real-time environmental data.',
        'Integration with health and demographic data for comprehensive analysis.',
      ],
      useCasesList: [
        {
          icon: <Building size={32} />,
          title: 'Real Estate Development',
          desc: 'Select sites that offer a healthy environment for residents.',
        },
        {
          icon: <HeartPulse size={32} />,
          title: 'Healthcare',
          desc: 'Plan facilities in areas with low pollution for better patient outcomes.',
        },
        {
          icon: <Leaf size={32} />,
          title: 'Corporate Responsibility',
          desc: 'Develop sustainability initiatives based on environmental data.',
        },
      ],
      detTitle1: 'Real Estate Development',
      detDesc1:
        'Developers assess air quality and noise levels to ensure new housing projects are located in healthy, quiet environments.',
      detTitle2: 'Public Health Planning',
      detDesc2:
        'Health authorities use environmental data to identify areas with poor air quality, planning targeted health campaigns or interventions.',
      detTitle3: 'Corporate Sustainability',
      detDesc3:
        'Companies use environmental intelligence to monitor the impact of their operations on local ecosystems and to plan green initiatives, like tree planting or renewable energy projects.',
      testQuote:
        '"S-Locator depth market insights transformed our strategy. We can now see the entire playing field and position ourselves effectively."',
      testName: 'Eleanor Gibson',
      testRole: 'MarketMasters Ltd. \nHead of Market Research',
    },
    ar: {
      titlePart1: 'الذكاء ',
      titlePart2: 'البيئي',
      titlePart3: '',
      heroDesc:
        'يُقيّم "الذكاء البيئي" العوامل البيئية المختلفة مثل جودة الهواء، ومستويات الضوضاء، وجودة المياه، وتوافر المساحات الخضراء. تعد هذه الخدمة ذات قيمة كبيرة للتطوير العقاري، وتخطيط الرعاية الصحية، ومبادرات المسؤولية الاجتماعية للشركات، حيث توفر فهماً أعمق للظروف البيئية التي قد تؤثر على العمليات التجارية ورفاهية المجتمع.',
      featuresList: [
        'بيانات حول جودة الهواء والمياه، والتلوث الضوضائي، والمساحات الخضراء.',
        'تقييمات الأثر البيئي للمشاريع المخطط لها.',
        'بيانات بيئية تاريخية ولحظية وفي الوقت الفعلي.',
        'التكامل مع البيانات الصحية والديموغرافية لإجراء تحليل شامل.',
      ],
      useCasesList: [
        {
          icon: <Building size={32} />,
          title: 'التطوير العقاري',
          desc: 'اختيار المواقع التي توفر بيئة صحية وهادئة للسكان.',
        },
        {
          icon: <HeartPulse size={32} />,
          title: 'الرعاية الصحية',
          desc: 'تخطيط المرافق في مناطق ذات تلوث منخفض لتحسين نتائج المرضى.',
        },
        {
          icon: <Leaf size={32} />,
          title: 'المسؤولية الاجتماعية للشركات',
          desc: 'تطوير مبادرات الاستدامة والمشاريع الخضراء بناءً على البيانات البيئية.',
        },
      ],
      detTitle1: 'التطوير العقاري',
      detDesc1:
        'يقوم المطورون بتقييم جودة الهواء ومستويات الضوضاء لضمان إنشاء مشاريع سكنية جديدة في بيئات صحية وهادئة تناسب السكان.',
      detTitle2: 'تخطيط الصحة العامة',
      detDesc2:
        'تستخدم السلطات الصحية البيانات البيئية لتحديد المناطق ذات جودة الهواء الرديئة، وتخطيط حملات أو تدخلات صحية وتوعوية مستهدفة.',
      detTitle3: 'استدامة الشركات',
      detDesc3:
        'تستخدم الشركات الذكاء البيئي لمراقبة تأثير عملياتها على النظم البيئية المحلية وتخطيط المبادرات الخضراء، مثل زراعة الأشجار أو مشاريع الطاقة المتجددة.',
      testQuote:
        '"لقد غيرت رؤى السوق العميقة من S-Locator استراتيجيتنا بالكامل. يمكننا الآن رؤية الساحة بأكملها ووضع أنفسنا بفعالية مطلقة."',
      testName: 'إليانور جيبسون',
      testRole: 'ماركت ماسترز المحدودة \nرئيسة أبحاث السوق',
    },
  },

  // ----------------------------------------
  // الخدمة 6: مستوى الدخل
  // ----------------------------------------
  'area-income-intelligence': {
    heroImage: '/assets/images/png-24.png',
    detImg1: '/assets/images/png-22.png',
    detImg2: '/assets/images/png-23.png',
    detImg3: '/assets/images/png-24.png',
    en: {
      titlePart1: 'Area Income ',
      titlePart2: 'Intelligence',
      titlePart3: '',
      heroDesc:
        'Area Income Intelligence provides detailed information on income distribution across specific regions. This service helps businesses tailor their products, services, and marketing strategies to the financial characteristics of their target audience. It is especially beneficial for retail, financial services, and real estate sectors looking to optimize their offerings based on economic demographics.',
      featuresList: [
        'Income distribution data segmented by household and individual levels.',
        'Analysis of spending power and economic status.',
        'Correlation with demographic and social data for targeted insights.',
        'Predictive analytics for income trends and economic shifts.',
      ],
      useCasesList: [
        {
          icon: <ShoppingBag size={32} />,
          title: 'Retail',
          desc: 'Develop pricing strategies and product offerings based on local income levels.',
        },
        {
          icon: <Landmark size={32} />,
          title: 'Financial Services',
          desc: 'Tailor loan, mortgage, and investment products to specific income brackets.',
        },
        {
          icon: <Building2 size={32} />,
          title: 'Real Estate',
          desc: 'Identify areas with high purchasing power for premium property development.',
        },
      ],
      detTitle1: 'Retail Targeting',
      detDesc1:
        'A luxury brand uses income data to identify affluent areas for new store locations and marketing campaigns.',
      detTitle2: 'Banking and Financial Services',
      detDesc2:
        'A bank assesses income distribution to decide where to open new branches, focusing on high-income areas for wealth management services.',
      detTitle3: 'Product Pricing Strategy',
      detDesc3:
        'A company launching a new product line uses income intelligence to set pricing tiers and product availability based on the economic profile of different regions.',
      testQuote:
        '"S-Locator depth market insights transformed our strategy. We can now see the entire playing field and position ourselves effectively."',
      testName: 'Eleanor Gibson',
      testRole: 'MarketMasters Ltd. \nHead of Market Research',
    },
    ar: {
      titlePart1: 'ذكاء ',
      titlePart2: 'مستوى الدخل',
      titlePart3: '',
      heroDesc:
        'يوفر "ذكاء مستوى الدخل" معلومات مفصلة حول توزيع الدخل عبر مناطق محددة. تساعد هذه الخدمة الشركات على تكييف منتجاتها وخدماتها واستراتيجياتها التسويقية مع الخصائص المالية لجمهورها المستهدف. وهي مفيدة بشكل خاص لقطاعات التجزئة، الخدمات المالية، والعقارات التي تتطلع إلى تحسين عروضها بناءً على التركيبة السكانية الاقتصادية.',
      featuresList: [
        'بيانات توزيع الدخل مقسمة على مستوى الأسرة والأفراد.',
        'تحليل القوة الشرائية والوضع الاقتصادي.',
        'الربط مع البيانات الديموغرافية والاجتماعية للحصول على رؤى مستهدفة.',
        'تحليلات تنبؤية لاتجاهات الدخل والتحولات الاقتصادية.',
      ],
      useCasesList: [
        {
          icon: <ShoppingBag size={32} />,
          title: 'قطاع التجزئة',
          desc: 'تطوير استراتيجيات التسعير وعروض المنتجات بناءً على مستويات الدخل المحلية.',
        },
        {
          icon: <Landmark size={32} />,
          title: 'الخدمات المالية',
          desc: 'تصميم منتجات القروض والرهن العقاري والاستثمار لتناسب فئات الدخل المحددة.',
        },
        {
          icon: <Building2 size={32} />,
          title: 'العقارات',
          desc: 'تحديد المناطق ذات القوة الشرائية العالية لتطوير المشاريع العقارية الفاخرة.',
        },
      ],
      detTitle1: 'استهداف قطاع التجزئة',
      detDesc1:
        'تستخدم علامة تجارية فاخرة بيانات الدخل لتحديد المناطق الثرية لافتتاح مواقع متاجر جديدة وتوجيه حملاتها التسويقية.',
      detTitle2: 'الخدمات المصرفية والمالية',
      detDesc2:
        'يقوم أحد البنوك بتقييم توزيع الدخل لتحديد مكان افتتاح فروع جديدة، مع التركيز على المناطق ذات الدخل المرتفع لتقديم خدمات إدارة الثروات.',
      detTitle3: 'استراتيجية تسعير المنتجات',
      detDesc3:
        'تستخدم شركة تطلق خط إنتاج جديد ذكاء الدخل لتحديد مستويات التسعير وتوافر المنتجات بناءً على الملف الاقتصادي للمناطق المختلفة.',
      testQuote:
        '"لقد غيرت رؤى السوق العميقة من S-Locator استراتيجيتنا بالكامل. يمكننا الآن رؤية الساحة بأكملها ووضع أنفسنا بفعالية مطلقة."',
      testName: 'إليانور جيبسون',
      testRole: 'ماركت ماسترز المحدودة \nرئيسة أبحاث السوق',
    },
  },

  // ----------------------------------------
  // الخدمة 7: مواقع البنية التحتية
  // ----------------------------------------
  'infrastructure-location-intelligence': {
    heroImage: '/assets/images/png-28.png',
    detImg1: '/assets/images/png-26.png',
    detImg2: '/assets/images/png-27.png',
    detImg3: '/assets/images/png-28.png',
    en: {
      titlePart1: 'Infrastructure Location ',
      titlePart2: 'Intelligence',
      titlePart3: '',
      heroDesc:
        'Infrastructure Location Intelligence assesses the availability and quality of key infrastructure, including transportation networks, utilities, and public services. This service supports informed planning and development for industries such as real estate, logistics, and government, helping to evaluate the suitability of areas for various projects and investments.',
      featuresList: [
        'Data on transportation, utilities, and public services availability.',
        'Analysis of infrastructure quality and capacity.',
        'Impact assessments for new developments on existing infrastructure.',
        'Integration with demographic and economic data for comprehensive planning.',
      ],
      useCasesList: [
        {
          icon: <Building2 size={32} />,
          title: 'Real Estate',
          desc: 'Choose development sites with robust infrastructure support.',
        },
        {
          icon: <Truck size={32} />,
          title: 'Logistics',
          desc: 'Plan distribution centers and supply chains based on transportation networks.',
        },
        {
          icon: <Landmark size={32} />,
          title: 'Government',
          desc: 'Develop policies and projects to enhance public service accessibility.',
        },
      ],
      detTitle1: 'Utility Service Planning',
      detDesc1:
        'An energy company evaluates the availability of existing utilities, such as electricity and water, to plan new service deployments or upgrades.',
      detTitle2: 'Transportation Network Design',
      detDesc2:
        'Transportation agencies use infrastructure data to plan new public transit routes, ensuring coverage in underserved areas with limited transportation options.',
      detTitle3: 'Real Estate Site Assessment',
      detDesc3:
        'Developers use infrastructure intelligence to evaluate potential sites for new developments, considering factors like proximity to roads, public transport, and utilities.',
      testQuote:
        '"S-Locator depth market insights transformed our strategy. We can now see the entire playing field and position ourselves effectively."',
      testName: 'Eleanor Gibson',
      testRole: 'MarketMasters Ltd. \nHead of Market Research',
    },
    ar: {
      titlePart1: 'ذكاء ',
      titlePart2: 'مواقع البنية التحتية',
      titlePart3: '',
      heroDesc:
        'يُقيّم "ذكاء مواقع البنية التحتية" مدى توفر وجودة البنية التحتية الرئيسية، بما في ذلك شبكات النقل والمرافق والخدمات العامة. تدعم هذه الخدمة التخطيط والتطوير المستنير لصناعات مثل العقارات والخدمات اللوجستية والحكومة، مما يساعد على تقييم مدى ملاءمة المناطق للمشاريع والاستثمارات المختلفة.',
      featuresList: [
        'بيانات حول توفر وسائل النقل والمرافق والخدمات العامة.',
        'تحليل جودة البنية التحتية وقدرتها الاستيعابية.',
        'تقييمات الأثر للتطورات والمشاريع الجديدة على البنية التحتية الحالية.',
        'التكامل مع البيانات الديموغرافية والاقتصادية للتخطيط الشامل.',
      ],
      useCasesList: [
        {
          icon: <Building2 size={32} />,
          title: 'العقارات',
          desc: 'اختيار مواقع التطوير التي تتمتع بدعم قوي للبنية التحتية.',
        },
        {
          icon: <Truck size={32} />,
          title: 'الخدمات اللوجستية',
          desc: 'تخطيط مراكز التوزيع وسلاسل الإمداد بناءً على شبكات النقل.',
        },
        {
          icon: <Landmark size={32} />,
          title: 'الحكومة والقطاع العام',
          desc: 'تطوير السياسات والمشاريع لتعزيز إمكانية الوصول إلى الخدمات العامة.',
        },
      ],
      detTitle1: 'تخطيط خدمات المرافق',
      detDesc1:
        'تقوم شركة طاقة بتقييم مدى توفر المرافق الحالية، مثل الكهرباء والمياه، لتخطيط عمليات نشر أو ترقية خدمات جديدة وتطوير الشبكات.',
      detTitle2: 'تصميم شبكات النقل',
      detDesc2:
        'تستخدم وكالات النقل بيانات البنية التحتية لتخطيط مسارات نقل عام جديدة، مما يضمن التغطية في المناطق غير المخدومة بشكل كافٍ والتي لديها خيارات نقل محدودة.',
      detTitle3: 'تقييم المواقع العقارية',
      detDesc3:
        'يستخدم المطورون ذكاء البنية التحتية لتقييم المواقع المحتملة للمشاريع الجديدة، مع مراعاة عوامل مثل القرب من الطرق الرئيسية، ووسائل النقل العام، والمرافق الحيوية.',
      testQuote:
        '"لقد غيرت رؤى السوق العميقة من S-Locator استراتيجيتنا بالكامل. يمكننا الآن رؤية الساحة بأكملها ووضع أنفسنا بفعالية مطلقة."',
      testName: 'إليانور جيبسون',
      testRole: 'ماركت ماسترز المحدودة \nرئيسة أبحاث السوق',
    },
  },

  // ----------------------------------------
  // الخدمة 8: استخدام الإنترنت
  // ----------------------------------------
  'area-internet-usage-intelligence': {
    heroImage: '/assets/images/png-32.png',
    detImg1: '/assets/images/png-30.png',
    detImg2: '/assets/images/png-31.png',
    detImg3: '/assets/images/png-32.png',
    en: {
      titlePart1: 'Area Internet Usage ',
      titlePart2: 'Intelligence',
      titlePart3: '',
      heroDesc:
        'Area Internet Usage Intelligence offers insights into digital connectivity and internet usage patterns across different regions. This service is crucial for telecommunications companies, tech businesses, and public service providers aiming to identify connectivity opportunities, plan digital projects, and enhance service delivery based on regional internet usage data.',
      featuresList: [
        'Data on internet penetration, usage patterns, and digital device adoption.',
        'Analysis of infrastructure quality and capacity.',
        'Identification of digital divides and underserved areas.',
        'Integration with demographic and economic data for targeted interventions.',
      ],
      useCasesList: [
        {
          icon: <Radio size={32} />,
          title: 'Telecommunications',
          desc: 'Plan network expansions and service upgrades in high-demand areas.',
        },
        {
          icon: <Users size={32} />,
          title: 'Public Services',
          desc: 'Develop digital literacy programs and e-services in low-connectivity regions.',
        },
        {
          icon: <MonitorSmartphone size={32} />,
          title: 'Tech Companies',
          desc: 'Identify markets for digital products and services based on usage patterns.',
        },
      ],
      detTitle1: 'Telecom Expansion',
      detDesc1:
        'A telecom provider analyzes internet usage patterns to identify areas with low connectivity, planning new broadband or mobile network rollouts to meet demand.',
      detTitle2: 'E-commerce Strategy',
      detDesc2:
        'An online retailer uses internet usage data to target marketing efforts in areas with high digital engagement, optimizing ad spend and sales efforts.',
      detTitle3: 'Public Policy Planning',
      detDesc3:
        'Government agencies use internet usage intelligence to identify digital divide issues, planning initiatives to improve digital literacy and access in underserved communities.',
      testQuote:
        '"S-Locator depth market insights transformed our strategy. We can now see the entire playing field and position ourselves effectively."',
      testName: 'Eleanor Gibson',
      testRole: 'MarketMasters Ltd. \nHead of Market Research',
    },
    ar: {
      titlePart1: 'ذكاء ',
      titlePart2: 'استخدام الإنترنت',
      titlePart3: '',
      heroDesc:
        'يقدم "ذكاء استخدام الإنترنت" رؤى حول الاتصال الرقمي وأنماط استخدام الإنترنت عبر مناطق مختلفة. تُعد هذه الخدمة بالغة الأهمية لشركات الاتصالات وشركات التكنولوجيا ومقدمي الخدمات العامة الذين يهدفون إلى تحديد فرص الاتصال، وتخطيط المشاريع الرقمية، وتعزيز تقديم الخدمات بناءً على بيانات استخدام الإنترنت الإقليمية.',
      featuresList: [
        'بيانات حول انتشار الإنترنت وأنماط الاستخدام واعتماد الأجهزة الرقمية.',
        'تحليل جودة البنية التحتية وقدرتها الاستيعابية.',
        'تحديد الفجوات الرقمية والمناطق غير المخدومة بشكل كافٍ.',
        'التكامل مع البيانات الديموغرافية والاقتصادية للتدخلات المستهدفة.',
      ],
      useCasesList: [
        {
          icon: <Radio size={32} />,
          title: 'الاتصالات',
          desc: 'تخطيط توسعات الشبكة وترقيات الخدمة في المناطق ذات الطلب المرتفع.',
        },
        {
          icon: <Users size={32} />,
          title: 'الخدمات العامة',
          desc: 'تطوير برامج محو الأمية الرقمية والخدمات الإلكترونية في المناطق منخفضة الاتصال.',
        },
        {
          icon: <MonitorSmartphone size={32} />,
          title: 'شركات التكنولوجيا',
          desc: 'تحديد الأسواق للمنتجات والخدمات الرقمية بناءً على أنماط الاستخدام.',
        },
      ],
      detTitle1: 'توسيع شبكات الاتصالات',
      detDesc1:
        'يحلل مزود الاتصالات أنماط استخدام الإنترنت لتحديد المناطق ذات الاتصال المنخفض، ويخطط لطرح شبكات النطاق العريض أو الهاتف المحمول الجديدة لتلبية الطلب.',
      detTitle2: 'استراتيجية التجارة الإلكترونية',
      detDesc2:
        'يستخدم بائع تجزئة عبر الإنترنت بيانات استخدام الإنترنت لتوجيه جهود التسويق في المناطق ذات المشاركة الرقمية العالية، وتحسين الإنفاق الإعلاني والمبيعات.',
      detTitle3: 'تخطيط السياسات العامة',
      detDesc3:
        'تستخدم الوكالات الحكومية ذكاء استخدام الإنترنت لتحديد مشكلات الفجوة الرقمية، وتخطيط مبادرات لتحسين محو الأمية الرقمية والوصول في المجتمعات غير المخدومة.',
      testQuote:
        '"لقد غيرت رؤى السوق العميقة من S-Locator استراتيجيتنا بالكامل. يمكننا الآن رؤية الساحة بأكملها ووضع أنفسنا بفعالية مطلقة."',
      testName: 'إليانور جيبسون',
      testRole: 'ماركت ماسترز المحدودة \nرئيسة أبحاث السوق',
    },
  },
}