import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as LinkIcon, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';
import { Link } from 'react-router-dom';

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
  </svg>
);

export const BlogPost1: React.FC = () => {
  const { t, i18n } = useTranslation('landing');
  const isRTL = i18n.dir() === 'rtl';
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const relatedArticles = [
    {
      img: 'https://cdn.portatour.com/blog/wp-content/uploads/change-management-624x478.jpg',
      category: 'Field Sales',
      title: "The 5 best sales apps for your field sales team in 2026"
    },
    {
      img: 'https://cdn.portatour.com/blog/wp-content/uploads/crm-blog.jpg',
      category: 'Field Sales',
      title: "S-Locator® – The mobile route planner with CRM system for large and small companies"
    },
    {
      img: 'https://cdn.portatour.com/blog/wp-content/uploads/tourenplanung-im-wandel-der-zeit.jpg',
      category: 'Field Sales',
      title: "Field sales force, territory planning and route planning through the ages"
    }
  ];

  return (
    <div className={`min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#f5f3ff] selection:text-[#8A2BE2] pb-0 ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* 1. Article Header */}
      <section className="bg-white pt-24 pb-12 border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <FadeIn direction="up">
            <Link to="/blog" className="inline-block bg-[#f5f3ff] text-[#8A2BE2] px-4 py-1.5 text-sm font-bold rounded-full mb-6 hover:bg-[#8A2BE2] hover:text-white transition-colors">
               Field Sales
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-8 leading-tight tracking-tight">
              Successful sales reporting in the field with S-Locator®
            </h1>
            <div className="text-slate-500 font-medium flex items-center justify-center gap-4 text-sm">
               <span>Published: Jan 22, 2026</span>
               <span>•</span>
               <span>5 min read</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Featured Image */}
      <section className="bg-white pb-12">
         <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn direction="up" delay={100}>
               <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <img 
                    src="https://cdn.portatour.com/blog/wp-content/uploads/vertriebsreporting.jpg" 
                    alt="Sales Reporting" 
                    className="w-full h-full object-cover" 
                  />
               </div>
            </FadeIn>
         </div>
      </section>

      {/* 3. Article Content */}
      <section className="bg-white pb-20">
         <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn direction="up" delay={200}>
               <div className="prose prose-lg md:prose-xl prose-slate max-w-none text-slate-600 leading-relaxed font-light">
                  <p className="mb-6">
                    In field sales, customer contact is not the only factor that determines success. Meaningful sales reporting is just as important, because systematically recording and evaluating your activities, results, and potential allows you to manage sales processes in a targeted manner, make optimal use of resources, and make better decisions.
                  </p>
                  <p className="mb-12">
                    Unfortunately, reporting often fails in practice due to a lack of transparency, time-consuming recording methods, and scattered data sources. In this article, we show you how modern sales reporting works and how <strong className="text-slate-800 font-bold">S-Locator®</strong> supports the field sales force in this process.
                  </p>

                  <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Why sales reporting is so crucial in field sales</h2>
                  <p className="mb-6">
                    Professional sales reporting provides insight into the performance of teams, individual employees, and entire regions within your sales territory at the touch of a button. A well-managed reporting system answers questions such as:
                  </p>
                  <ul className="list-none space-y-3 mb-10">
                     <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-[#489E46] shrink-0" /> <span className="pt-0.5">Which customers were visited and when?</span></li>
                     <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-[#489E46] shrink-0" /> <span className="pt-0.5">What deals and sales were achieved?</span></li>
                     <li className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-[#489E46] shrink-0" /> <span className="pt-0.5">What was discussed?</span></li>
                  </ul>
                  <p className="mb-12">
                    Without structured sales reporting, this transparency is lacking. This often leads to inaccurate forecasting, inefficient use of resources, and missed opportunities. Field staff, on the other hand, need a reporting tool that doesn't slow them down but supports them, and that is fast, mobile, and automated.
                  </p>

                  <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">What are typical challenges in sales reporting?</h2>
                  <p className="mb-6">Sales reporting is often an unpopular duty, especially in the field. The reasons for this are:</p>
                  <ul className="list-disc list-inside space-y-4 mb-12 pl-4 marker:text-[#8A2BE2]">
                     <li><strong className="text-slate-800 font-bold">Manual data entry:</strong> Call reports are manually transferred to a CRM system after appointments. This work takes time and motivation.</li>
                     <li><strong className="text-slate-800 font-bold">Isolated solutions:</strong> Data is scattered across Excel spreadsheets, notes, or various tools. There is no overall picture or complete solution.</li>
                     <li><strong className="text-slate-800 font-bold">Lack of real-time information:</strong> Decisions are based on outdated figures.</li>
                     <li><strong className="text-slate-800 font-bold">Confusing reports:</strong> Data is collected but not translated into meaningful key figures.</li>
                  </ul>

                  {/* Mid-Article Image */}
                  <div className="my-16 rounded-2xl overflow-hidden shadow-md border border-slate-100 flex justify-center bg-slate-50 p-6">
                     <img 
                       src="https://cdn.portatour.com/blog/wp-content/uploads/Besuchsbericht-iPad-portrait-en.png" 
                       alt="S-Locator Reporting App" 
                       className="max-h-[600px] object-contain rounded-xl shadow-lg border border-slate-200" 
                     />
                  </div>

                  <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">How does sales reporting with S-Locator® reduce the workload?</h2>
                  <p className="mb-6">
                    S-Locator® is much more than just intelligent route planning. The route planning software provides field teams with integrated sales reporting that takes place on the mobile device immediately after each customer visit.
                  </p>
                  <p className="mb-6 font-bold text-slate-800">The most important advantages at a glance:</p>
                  <ul className="list-disc list-inside space-y-4 mb-12 pl-4 marker:text-[#489E46]">
                     <li><strong className="text-slate-800 font-bold">Timely recording:</strong> Every customer interaction is documented in full immediately after the sales appointment.</li>
                     <li><strong className="text-slate-800 font-bold">Clear dashboards:</strong> S-Locator® prepares data in such a way that managers can immediately identify trends.</li>
                     <li><strong className="text-slate-800 font-bold">Integration:</strong> S-Locator® integrates seamlessly with Salesforce, Microsoft Dynamics, and other systems.</li>
                     <li><strong className="text-slate-800 font-bold">Real-time information:</strong> Sales management and field staff have up-to-date figures at their fingertips at all times.</li>
                  </ul>

                  <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Practical example: Transparency and efficiency in one step</h2>
                  <p className="mb-8">
                    A medium-sized pharmaceutical company uses S-Locator® for the automatic route planning of its 30 sales representatives. Previously, visit reports were maintained in Excel and only evaluated at the end of the month, which meant a lot of manual work with outdated data. Today, field staff use S-Locator® to log every appointment immediately.
                  </p>

                  {/* Mid-Article CTA Box */}
                  <div className="bg-[#f5f3ff] border border-[#8A2BE2]/20 rounded-2xl p-8 my-12 text-center shadow-sm">
                     <h3 className="text-2xl font-bold text-slate-800 mb-4">Smart sales reporting with S-Locator®</h3>
                     <a href="https://s-locator.northernacs.com/" className="inline-block bg-[#8A2BE2] hover:bg-[#6b21a8] text-white px-8 py-3.5 rounded-lg font-bold transition-colors shadow-md text-lg">
                        Try it now!
                     </a>
                  </div>

                  <h2 className="text-3xl font-bold text-slate-800 mt-12 mb-6">Conclusion: Professional reporting made easy</h2>
                  <p className="mb-6">
                    Sales reporting in the field doesn't have to be complicated. By focusing on automation, integration, and user-friendly evaluations, you can save time and gain valuable insights. S-Locator® takes most of the administrative work off your team's hands and delivers reporting that managers love.
                  </p>
               </div>
            </FadeIn>
         </div>
      </section>

      {/* 4. Social Share */}
      <section className="bg-slate-100 py-12 border-y border-slate-200 text-center">
         <div className="container mx-auto px-4 max-w-4xl">
            <h4 className="text-xl font-bold text-slate-800 mb-6">{t('blogPost.share.title')}</h4>
            <div className="flex flex-wrap items-center justify-center gap-4">
               <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white border border-slate-300 text-slate-700 px-6 py-2.5 rounded-full hover:border-[#0a66c2] hover:text-[#0a66c2] transition-colors font-medium shadow-sm">
                  {/* ✅ استخدام الأيقونة الجديدة للينكدإن هنا */}
                  <LinkedinIcon className="w-4 h-4" /> {t('blogPost.share.linkedin')}
               </a>
               <a href={`http://www.facebook.com/sharer.php?u=${window.location.href}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white border border-slate-300 text-slate-700 px-6 py-2.5 rounded-full hover:border-[#1877f2] hover:text-[#1877f2] transition-colors font-medium shadow-sm">
                  {/* ✅ استخدام الأيقونة الجديدة لفيسبوك هنا */}
                  <FacebookIcon className="w-4 h-4" /> {t('blogPost.share.facebook')}
               </a>
               <button onClick={handleCopy} className="flex items-center gap-2 bg-white border border-slate-300 text-slate-700 px-6 py-2.5 rounded-full hover:border-[#8A2BE2] hover:text-[#8A2BE2] transition-colors font-medium shadow-sm relative">
                  <LinkIcon className="w-4 h-4" /> {t('blogPost.share.copy')}
                  {copied && <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-3 rounded shadow-lg whitespace-nowrap">{t('blogPost.share.copied')}</span>}
               </button>
            </div>
         </div>
      </section>

      {/* 5. Related Articles */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">{t('blogPost.related.title')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {relatedArticles.map((post, idx) => (
                  <FadeIn key={idx} direction="up" delay={idx * 100}>
                     <Link to="/blog/article" className="bg-slate-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-slate-200 flex flex-col h-full group">
                        <div className="h-48 overflow-hidden relative">
                           <img src={post.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                           <span className="inline-block bg-[#8A2BE2]/10 text-[#8A2BE2] px-2.5 py-1 text-xs font-bold rounded w-max mb-4">
                              {post.category}
                           </span>
                           <h3 className="text-lg font-bold text-slate-800 leading-snug group-hover:text-[#8A2BE2] transition-colors">
                              {post.title}
                           </h3>
                        </div>
                     </Link>
                  </FadeIn>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="bg-[#00609c] py-24 text-center relative overflow-hidden">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white transform rotate-45"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-10 leading-tight drop-shadow-sm">
              {t('blogPost.cta.title')}
            </h2>
            <a href="https://s-locator.northernacs.com/" className="inline-block bg-[#f0ad4e] hover:bg-[#e09e3e] text-white px-12 py-4 rounded font-bold transition-colors shadow-xl text-lg mb-6">
              {t('blogPost.cta.btn')}
            </a>
            <p className="text-blue-200 text-sm font-light">
              {t('blogPost.cta.note')}
            </p>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};

export default BlogPost1;