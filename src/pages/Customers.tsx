import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Car, Hammer, ShoppingCart, Sparkles, Monitor, Wrench, Coffee, Factory, Stethoscope, Pill, Package, Plus, Star, Phone, Mail, MonitorSmartphone } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';

export const Customers: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { icon: <Car className="w-4 h-4" />, label: t('customersPage.categories.auto') },
    { icon: <Hammer className="w-4 h-4" />, label: t('customersPage.categories.building') },
    { icon: <ShoppingCart className="w-4 h-4" />, label: t('customersPage.categories.consumer') },
    { icon: <Sparkles className="w-4 h-4" />, label: t('customersPage.categories.cosmetics') },
    { icon: <Monitor className="w-4 h-4" />, label: t('customersPage.categories.electronics') },
    { icon: <Wrench className="w-4 h-4" />, label: t('customersPage.categories.services') },
    { icon: <Coffee className="w-4 h-4" />, label: t('customersPage.categories.food') },
    { icon: <Factory className="w-4 h-4" />, label: t('customersPage.categories.industrial') },
    { icon: <Stethoscope className="w-4 h-4" />, label: t('customersPage.categories.medical') },
    { icon: <Pill className="w-4 h-4" />, label: t('customersPage.categories.pharma') },
    { icon: <Package className="w-4 h-4" />, label: t('customersPage.categories.wholesale') },
    { icon: <Plus className="w-4 h-4" />, label: t('customersPage.categories.more') },
  ];

  const stories = [
    {
      img: 'https://www.portatour.com/media/pages/success/hofmeister-meincke/121dad5d05-1776258227/hm-philip-wilms.webp',
      logo: 'https://www.portatour.com/media/pages/contenthub/customer-references/hofmeister-meincke/83fab633aa-1776673225/hm-logo.webp',
      quote: t('customersPage.stories.s1.quote', "S-Locator not only helps us with planning, but above all with bringing transparency to our field sales operations."),
      author: "Philip Wilms",
      role: t('customersPage.stories.s1.role', "Head of Controlling"),
      company: "HOFMEISTER & MEINCKE"
    },
    {
      img: 'https://www.portatour.com/media/pages/success/karndean/561a315339-1775044277/portrait-oscar.webp',
      logo: 'https://www.portatour.com/media/pages/contenthub/customer-references/karndean/49c27a47a2-1775049367/karndean_logo.webp',
      quote: t('customersPage.stories.s2.quote', "With S-Locator, scheduling is no longer part of the job. It simply happens automatically."),
      author: "Oscar George",
      role: t('customersPage.stories.s2.role', "Business Intelligence Manager"),
      company: "Karndean"
    },
    {
      img: 'https://www.portatour.com/media/pages/success/giesinger/bafe4dc199-1773330285/portrait-giesinger.webp',
      logo: 'https://www.portatour.com/media/pages/contenthub/customer-references/giesinger-braeu/f587118ac7-1773334358/logo-giesinger.webp',
      quote: t('customersPage.stories.s3.quote', "With S-Locator, our field reps save 30 to 45 minutes per day in route planning and preparation."),
      author: "Jonas Seidl",
      role: t('customersPage.stories.s3.role', "Managing Director"),
      company: "Giesinger"
    },
    {
      img: 'https://www.portatour.com/media/pages/success/samsung/1d00794acf-1770890536/bolliger.webp',
      logo: 'https://www.portatour.com/media/pages/contenthub/customer-references/samsung/f40ba8a409-1770643832/logo-samsung.webp',
      quote: t('customersPage.stories.s4.quote', "A dynamic company such as Samsung requires a dynamic route planner! Call frequencies are now in firm control thanks to S-Locator."),
      author: "Severin Bolliger",
      role: t('customersPage.stories.s4.role', "Data Analyst"),
      company: "SAMSUNG"
    },
    {
      img: 'https://www.portatour.com/media/pages/success/sonax/f0b483120f-1770890536/florianbehmer-rund.webp',
      logo: 'https://www.portatour.com/media/pages/contenthub/customer-references/sonax/f675d59005-1770715240/logo-sonax.webp',
      quote: t('customersPage.stories.s5.quote', "SONAX sales representatives like working with S-Locator because they can reschedule flexibly on the road and the software is very user-friendly."),
      author: "Florian Behmer",
      role: t('customersPage.stories.s5.role', "Sales Management Assistant"),
      company: "SONAX"
    },
    {
      img: 'https://www.portatour.com/media/pages/success/trupanion/92150fb456-1770890536/trupanion_portrait.webp',
      logo: 'https://www.portatour.com/media/pages/contenthub/customer-references/trupanion/f779aba7c3-1770643064/trupanion_logo.webp',
      quote: t('customersPage.stories.s6.quote', "With S-Locator we get an extra 20% visits to accounts in any given week. S-Locator is a huge time-saver for us."),
      author: "Ian Henry",
      role: t('customersPage.stories.s6.role', "VP Field Sales"),
      company: "trupanion"
    },
    {
      img: 'https://www.portatour.com/media/pages/success/brandmates/981f4bf173-1763626769/portrait-brandmates.webp',
      logo: 'https://www.portatour.com/media/pages/contenthub/customer-references/brandmates/276a5ac134-1764684135/logo-brandmates.svg',
      quote: t('customersPage.stories.s7.quote', "I wouldn't want to be without S-Locator now. The software is worth the money because when you factor in the labor costs of manual processing, it pays for itself."),
      author: "Matthias Meyer",
      role: t('customersPage.stories.s7.role', "Head of Operations"),
      company: "brandmates"
    },
    {
      img: 'https://www.portatour.com/media/pages/success/holy-energy/4cf70ce970-1762940858/portrait-holy.webp',
      logo: 'https://www.portatour.com/media/pages/contenthub/customer-references/holy/4f88f2713c-1764684135/logo-holy.webp',
      quote: t('customersPage.stories.s8.quote', "Thanks to S-Locator, we can quickly turn our field sales requirements into reality and get optimized results at the touch of a button."),
      author: "Jonas Gronau",
      role: t('customersPage.stories.s8.role', "Sr. Sales Operations Manager"),
      company: "HOLY"
    },
    {
      img: 'https://www.portatour.com/media/pages/success/planted/75217c2021-1754075577/portrait-m-weiss-planted.webp',
      logo: 'https://www.portatour.com/media/pages/contenthub/customer-references/planted/9447af6b1f-1764684135/logo-planted.webp',
      quote: t('customersPage.stories.s9.quote', "For us, S-Locator is the ultimate solution because it simply works and adapts perfectly to our everyday working life."),
      author: "Moritz Weiss",
      role: t('customersPage.stories.s9.role', "Teamlead Sales Field Manager"),
      company: "planted."
    }
  ];

  const heroLogos = [
    'https://cdn.portatour.com/2013/img/clientlogos2/wuerth-group.webp',
    'https://cdn.portatour.com/2013/img/clientlogos2/haleon.webp',
    'https://cdn.portatour.com/2013/img/clientlogos2/samsung.webp',
    'https://cdn.portatour.com/2013/img/clientlogos2/trupanion.webp',
    'https://cdn.portatour.com/2013/img/clientlogos2/wd40.webp'
  ];

  const moreLogos = [
    'https://cdn.portatour.com/2013/img/clientlogos2/fedrigoni.webp',
    'https://cdn.portatour.com/2013/img/clientlogos2/astrak.webp',
    'https://cdn.portatour.com/2013/img/clientlogos2/frontierfoods.webp',
    'https://cdn.portatour.com/2013/img/clientlogos2/theretailmotorindustry.webp',
    'https://cdn.portatour.com/2013/img/clientlogos2/stensspecialty.webp',
    'https://cdn.portatour.com/2013/img/clientlogos2/riversidegreetings.webp',
    'https://cdn.portatour.com/2013/img/clientlogos2/precisionappliance.webp',
    'https://cdn.portatour.com/2013/img/clientlogos2/karndean.webp',
    'https://cdn.portatour.com/2013/img/clientlogos2/midwestequipment.webp',
    'https://cdn.portatour.com/2013/img/clientlogos2/mocofood.webp',
    'https://cdn.portatour.com/2013/img/clientlogos2/lindt.webp',
    'https://cdn.portatour.com/2013/img/clientlogos2/sonova.webp',
    'https://cdn.portatour.com/2013/img/clientlogos2/huel.webp',
    'https://cdn.portatour.com/2013/img/clientlogos2/pepsico.webp',
    'https://cdn.portatour.com/2013/img/clientlogos2/tonys-chocolonely.webp'
  ];

  const reviews = [
    { author: "Murray Godden", text: t('customersPage.reviews.r1', "The best system Sales and Marketing could ever purchase for hitting those execution goals, been using it for over 6yrs.") },
    { author: "Clint Mallum", text: t('customersPage.reviews.r2', "This is an amazing application. It helps us save a lot of time on the road and focus on our customers.") },
    { author: "Beren Brechtel", text: t('customersPage.reviews.r3', "Pretty great. The product is excellent and helps our team hit their monthly execution targets efficiently.") },
    { author: "Philippe SAUNIER", text: t('customersPage.reviews.r4', "Just awesome! Time saving, optimization, efficiency, performance... No hassle. Totally recommended.") },
    { author: "Alberto Bertamino", text: t('customersPage.reviews.r5', "Unique tool. It adapts perfectly to our specific needs and the support team is always available.") },
    { author: "Frank Burek", text: t('customersPage.reviews.r6', "Relaxed route planning! It takes the stress out of my daily routine.") },
  ];

  // استخدام الأسئلة الشائعة من الترجمة الموجودة
  const faqQuestions = [
    t('srp.faq.q1.q'),
    t('srp.faq.q2.q'),
    t('srp.faq.q3.q'),
    t('srp.faq.q4.q'),
    t('srp.faq.q5.q'),
    t('srp.faq.q6.q'),
    t('srp.faq.q7.q'),
    t('srp.faq.q8.q')
  ];

  return (
    <div className={`min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#f5f3ff] selection:text-[#8A2BE2] pb-0 ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* 1. Hero Section */}
      <section className="bg-white pt-24 pb-16 text-center border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn direction="up">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
              {t('customersPage.hero.title')}
            </h1>
            <h2 className="text-2xl font-light text-slate-500 mb-8">
              {t('customersPage.hero.subtitle')}
            </h2>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-4xl mx-auto mb-12">
               {t('customersPage.hero.desc')}
            </p>
            
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-16">
               {categories.map((cat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-[#8A2BE2] font-medium bg-[#f5f3ff] px-3 py-1.5 rounded-full">
                     {cat.icon}
                     <span>{cat.label}</span>
                  </div>
               ))}
            </div>

            {/* Top 5 Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               {heroLogos.map((logoUrl, idx) => (
                  <img key={idx} src={logoUrl} alt="Hero Logo" className="h-10 md:h-12 object-contain" onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/150x50?text=Logo' }} />
               ))}
            </div>
            
            <div className="mt-12">
               <a href="#more-customers" className="text-[#8A2BE2] font-bold hover:underline">
                  {t('customersPage.hero.showMore')}
               </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Success Stories Grid */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
         <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-8">
               {stories.map((story, idx) => (
                  <FadeIn key={idx} direction="up" delay={idx * 50}>
                     <div className="relative bg-white rounded-2xl shadow-sm border border-slate-200 p-8 pt-16 hover:shadow-xl transition-all duration-300 h-full flex flex-col group">
                        
                        {/* Overlapping Avatar */}
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                           <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-slate-100 group-hover:scale-105 transition-transform duration-300">
                              <img src={story.img} alt={story.author} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/100?text=User' }} />
                           </div>
                        </div>

                        {/* Company Logo */}
                        <div className="h-12 flex justify-center items-center mb-6 mt-2">
                           <img src={story.logo} alt={story.company} className="max-h-full max-w-[150px] object-contain" onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/150x40?text=Logo' }} />
                        </div>

                        {/* Quote */}
                        <p className="text-slate-600 leading-relaxed text-[15px] mb-8 flex-grow text-center">
                           "{story.quote}"
                        </p>

                        {/* Author Info */}
                        <div className="text-center border-t border-slate-100 pt-6">
                           <p className="font-bold text-[#8A2BE2]">{story.author}</p>
                           <p className="text-sm text-slate-400">{story.role}</p>
                        </div>
                     </div>
                  </FadeIn>
               ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-16 gap-2" dir="ltr">
               {[1, 2, 3, 4].map((page) => (
                  <button key={page} className={`w-10 h-10 rounded-full font-bold flex items-center justify-center transition-colors ${page === 1 ? 'bg-[#8A2BE2] text-white shadow-md' : 'bg-white border border-slate-200 text-slate-600 hover:bg-[#f5f3ff] hover:text-[#8A2BE2]'}`}>
                     {page}
                  </button>
               ))}
            </div>
         </div>
      </section>

      {/* 3. More Logos Grid */}
      <section id="more-customers" className="py-20 bg-white border-b border-slate-200">
         <div className="container mx-auto px-4 max-w-6xl">
            <FadeIn direction="up">
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center opacity-60">
                  {moreLogos.map((logoUrl, idx) => (
                     <div key={idx} className="flex justify-center items-center h-16 grayscale hover:grayscale-0 transition-all duration-300">
                        <img src={logoUrl} alt="Customer Logo" className="max-h-full max-w-full object-contain" onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/120x40?text=Logo' }} />
                     </div>
                  ))}
               </div>
            </FadeIn>
         </div>
      </section>

      {/* 4. Google Play Reviews */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-200 overflow-hidden">
         <div className="container mx-auto px-4 max-w-7xl">
            <FadeIn direction="up">
               <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
                  {reviews.map((review, idx) => (
                     <div key={idx} className="min-w-[300px] md:min-w-[350px] bg-white p-8 rounded-2xl shadow-sm border border-slate-100 snap-center shrink-0 flex flex-col">
                        <p className="font-bold text-slate-800 mb-2">{review.author}</p>
                        <div className={`flex text-[#f0ad4e] mb-4 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                           {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                           {review.text}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                           <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" className="w-4 h-4" alt="Google Play" />
                           Google Play
                        </div>
                     </div>
                  ))}
               </div>
            </FadeIn>
         </div>
      </section>

      {/* 5. CTA Banner */}
      <section className="bg-[#8A2BE2] py-24 text-center relative overflow-hidden">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#f8fafc] transform rotate-45"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-10 leading-tight drop-shadow-sm">
              {t('customersPage.cta.title')}
            </h2>
            <button className="bg-[#489E46] hover:bg-[#336E2E] text-white px-12 py-4 rounded font-bold transition-colors shadow-xl text-lg mb-6">
              {t('customersPage.cta.btn')}
            </button>
            <p className="text-purple-200 text-sm font-light">
              {t('customersPage.cta.note')}
            </p>
          </FadeIn>
        </div>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white transform rotate-45"></div>
      </section>

      {/* 6. FAQs Summary */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <FadeIn direction="up">
             <h2 className="text-3xl lg:text-[40px] font-bold text-slate-800 mb-16">{t('customersPage.faqs.title')}</h2>
             <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 text-left max-w-5xl mx-auto">
                {faqQuestions.map((q, i) => (
                  <a key={i} href="/faq" className={`text-[17px] font-medium text-[#8A2BE2] hover:text-[#489E46] transition-colors py-3 border-b border-slate-100 leading-snug block ${isRTL ? 'text-right' : 'text-left'}`}>
                    {q}
                  </a>
                ))}
             </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. Contact Section */}
      <section className="bg-[#f8fafc] py-24 text-center">
         <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">{t('contactPage.hero.title')}</h2>
            <div className="mt-6 text-[15px] text-slate-500 font-light flex items-center justify-center gap-2">
               <MonitorSmartphone className="w-4 h-4 text-[#8A2BE2]" /> {t('contactPage.hero.availability')}
            </div>

            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mt-16 mb-8">
               <div className="flex-1 bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
                  <h3 className="text-[17px] font-medium text-slate-500 mb-2">{t('contactPage.support.pretitle')}</h3>
                  <h4 className="text-[32px] font-bold text-slate-800 mb-8">{t('contactPage.support.title')}</h4>
                  <button className="bg-[#8A2BE2] text-white px-8 py-3.5 rounded hover:bg-[#6b21a8] transition-colors mb-10 text-[15px] font-bold shadow-md">
                    {t('contactPage.support.btn')}
                  </button>
                  <div className="flex flex-col gap-4 text-slate-700 font-medium text-[15px] items-start w-full max-w-xs mx-auto">
                     <div className="flex items-center gap-3" dir="ltr"><Phone className="w-5 h-5 text-[#8A2BE2]"/> KSA: +966 55 818 8632</div>
                     <div className="flex items-center gap-3 mt-2"><Mail className="w-5 h-5 text-[#8A2BE2]"/> support@s-locator.com</div>
                     <div className="flex items-center gap-3 mt-2 text-slate-600">
                        <MonitorSmartphone className="w-5 h-5 text-[#8A2BE2]" /> {t('contactPage.support.teamviewer', 'Teamviewer: Remote access')}
                     </div>
                  </div>
               </div>
               <div className="flex-1 bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
                  <h3 className="text-[17px] font-medium text-slate-500 mb-2">{t('contactPage.sales.pretitle')}</h3>
                  <h4 className="text-[32px] font-bold text-slate-800 mb-8">{t('contactPage.sales.title')}</h4>
                  <div className="flex flex-col gap-4 text-slate-700 font-medium text-[15px] items-start w-full max-w-xs mx-auto mt-2">
                     <div className="flex items-center gap-3" dir="ltr"><Phone className="w-5 h-5 text-[#8A2BE2]"/> Canada: +1 514-814-5180</div>
                     <div className="flex items-center gap-3" dir="ltr"><Phone className="w-5 h-5 text-[#8A2BE2]"/> KSA: +966 55 818 8632</div>
                     <a href="/contact" className="text-[#a0a0a0] cursor-pointer hover:text-[#8A2BE2] ml-8 mb-2 transition-colors">{t('common.showMore', 'show more')}</a>
                     <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-[#8A2BE2]"/> sales@s-locator.com</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default Customers;