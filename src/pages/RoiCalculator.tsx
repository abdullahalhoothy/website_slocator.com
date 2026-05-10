import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp, RefreshCw, Car, Building, Phone, Mail, MonitorSmartphone } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';

interface NumberInputProps {
  value: number;
  setter: (val: number) => void;
  min?: number;
  max?: number;
}

const NumberInput: React.FC<NumberInputProps> = ({ value, setter, min = 0, max = 100 }) => (
  <div className="flex flex-col border border-slate-300 rounded overflow-hidden w-16">
    <button onClick={() => setter(Math.min(max, value + 1))} className="bg-slate-100 hover:bg-slate-200 h-5 flex items-center justify-center border-b border-slate-300">
      <ChevronUp className="w-3 h-3 text-slate-600" />
    </button>
    <input type="text" value={value} readOnly className="w-full text-center h-8 font-bold text-[#8A2BE2] outline-none" dir="ltr" />
    <button onClick={() => setter(Math.max(min, value - 1))} className="bg-slate-100 hover:bg-slate-200 h-5 flex items-center justify-center border-t border-slate-300">
      <ChevronDown className="w-3 h-3 text-slate-600" />
    </button>
  </div>
);

export const RoiCalculator: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State Variables
  const [persons, setPersons] = useState<number>(1);
  const [distance, setDistance] = useState<number>(40000);
  const [planningHours, setPlanningHours] = useState<number>(4);
  const [salary, setSalary] = useState<number>(83000);
  const [turnover, setTurnover] = useState<number>(500000);
  const [workHours, setWorkHours] = useState<number>(1600);
  
  const [vehCostPerKm] = useState<number>(0.42);
  const [empFactor] = useState<number>(1.5);
  
  const [carSavePct, setCarSavePct] = useState<number>(15);
  const [planSavePct, setPlanSavePct] = useState<number>(75);
  const [revBoostPct, setRevBoostPct] = useState<number>(10);

  const [expandedRow, setExpandedRow] = useState<string | null>(null);
  const [hoveredChartPoint, setHoveredChartPoint] = useState<number | null>(null);

  // Calculations
  const initialVehCost = persons * distance * vehCostPerKm;
  const vehSaved = initialVehCost * (carSavePct / 100);
  const finalVehCost = initialVehCost - vehSaved;
  const kmSaved = distance * (carSavePct / 100) * persons;

  const hourlyRate = (salary * empFactor) / workHours;
  const annualPlanHours = planningHours * 52;
  const initialPlanCost = persons * annualPlanHours * hourlyRate;
  const planSaved = initialPlanCost * (planSavePct / 100);
  const finalPlanCost = initialPlanCost - planSaved;

  const initialRev = persons * turnover;
  const revAdded = initialRev * (revBoostPct / 100);
  const finalRev = initialRev + revAdded;

  const breakEvenMonths = 6; 

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val).replace('€', '€ ');
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setPersons(1); setDistance(40000); setPlanningHours(4); setSalary(83000); setTurnover(500000); setWorkHours(1600);
    setCarSavePct(15); setPlanSavePct(75); setRevBoostPct(10);
  };

  const toggleRow = (row: string) => {
    setExpandedRow(expandedRow === row ? null : row);
  };

  const chartPointsData = [
    { id: 0, x: 25, y: 80, label: 'Q1', months: 3, rev: 0, veh: 981, lic: -2878, oneOff: -190, total: -2087 },
    { id: 1, x: 50, y: 50, label: 'Q2', months: 6, rev: 12500, veh: 2943, lic: -2878, oneOff: -190, total: 7718 },
    { id: 2, x: 75, y: 25, label: 'Q3', months: 9, rev: 25000, veh: 4905, lic: -2878, oneOff: -190, total: 21689 },
    { id: 3, x: 100, y: 5, label: 'Q4', months: 12, rev: 50000, veh: 5886, lic: -2878, oneOff: -190, total: 35661 }
  ];

  const teamMembers = [
    { name: "Severin Bolliger", lang: "DE | EN", li: "https://linkedin.com/in/severin-bolliger", img: "https://unavatar.io/linkedin/severin-bolliger" },
    { name: "Pieter Niemand", lang: "EN | NL", li: "https://linkedin.com/in/pieterniemand", img: "https://unavatar.io/linkedin/pieterniemand" },
    { name: "Mitchell Glindemann", lang: "DE | EN", li: "https://linkedin.com/in/mitchellglindemann", img: "https://unavatar.io/linkedin/mitchellglindemann" },
    { name: "Marvin Darmstädter", lang: "DE", li: "https://linkedin.com/in/marvindarmstaedter", img: "https://unavatar.io/linkedin/marvindarmstaedter" },
    { name: "Bastian Rittgen", lang: "DE | EN", li: "https://linkedin.com/in/bastianrittgen", img: "https://unavatar.io/linkedin/bastianrittgen" },
    { name: "Alexej Nowototschin", lang: "DE | EN | RU", li: "https://linkedin.com/in/alexejnowototschin", img: "https://unavatar.io/linkedin/alexejnowototschin" },
    { name: "Magdalena Jovanovic", lang: "DE | EN", li: "https://linkedin.com/in/magdalenajovanovic", img: "https://unavatar.io/linkedin/magdalenajovanovic" },
    { name: "Thomas Müller", lang: "DE", li: "https://linkedin.com/in/thomasmueller", img: "https://unavatar.io/linkedin/thomasmueller" },
    { name: "Sarah Schmidt", lang: "EN | FR", li: "https://linkedin.com/in/sarahschmidt", img: "https://unavatar.io/linkedin/sarahschmidt" },
    { name: "David Smith", lang: "EN", li: "https://linkedin.com/in/davidsmith", img: "https://unavatar.io/linkedin/davidsmith" }
  ];

  const faqs = [
    t('roiCalculator.faqs.q1', 'هل يمكنني العمل بقيم الصناعة؟'),
    t('roiCalculator.faqs.q2', 'متى يؤتي S-Locator ثماره وكيف يظهر ذلك؟'),
    t('roiCalculator.faqs.q3', 'ما الفرق بين تحسين المناطق وتخطيط المسارات؟'),
    t('roiCalculator.faqs.q4', 'ماذا يمكنني أن أفعل بالنتائج وماذا يحدث بعد ذلك؟'),
    t('roiCalculator.faqs.q5', 'ماذا تفعل حاسبة العائد على الاستثمار ولمن هي مخصصة؟'),
    t('roiCalculator.faqs.q6', 'ما هي النتائج التي تقدمها الحاسبة؟'),
    t('roiCalculator.faqs.q7', 'ما هي التكاليف التي تؤخذ في الاعتبار؟'),
    t('roiCalculator.faqs.q8', 'ما مقدار البيانات التي أحتاج لإدخالها؟')
  ];

  return (
    <div className={`min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#f5f3ff] selection:text-[#8A2BE2] pb-0 ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* 1. Hero Section */}
      <section className="pt-24 pb-12 text-center bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn direction="up">
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8 tracking-tight">
              {t('roiCalculator.hero.title', 'حاسبة العائد على الاستثمار (ROI) لخدمات المبيعات الميدانية')}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-8 text-lg text-slate-600 font-medium">
               <span>{t('roiCalculator.form.calcFor', 'الحساب لـ:')}</span>
               <label className="flex items-center gap-2 cursor-pointer hover:text-[#8A2BE2] transition-colors">
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#8A2BE2] rounded cursor-pointer" />
                  {t('roiCalculator.form.rp', 'مخطط المسارات')}
               </label>
               <label className="flex items-center gap-2 cursor-pointer hover:text-[#8A2BE2] transition-colors">
                  <input type="checkbox" className="w-5 h-5 accent-[#8A2BE2] rounded cursor-pointer" />
                  {t('roiCalculator.form.to', 'تحسين المناطق')}
               </label>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. Form Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <FadeIn direction="up">
             
             {/* Industry */}
             <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-10 border-b border-slate-100 pb-8">
                <div className="w-8 flex justify-center"><Building className="w-6 h-6 text-[#8A2BE2]" /></div>
                <div className="flex-1 w-full">
                   <h4 className="font-bold text-slate-800 mb-4">{t('roiCalculator.form.industry', 'الصناعة')}</h4>
                   <select className={`w-full md:w-1/3 p-3 border border-slate-300 rounded-lg outline-none focus:border-[#8A2BE2] bg-slate-50 focus:bg-white transition-colors cursor-pointer ${isRTL ? 'text-right' : 'text-left'}`}>
                      <option value="" disabled selected>{t('roiCalculator.form.selectIndustry', 'اختر الصناعة')}</option>
                      <option value="consumer">{t('roiCalculator.form.indConsumer', 'السلع الاستهلاكية')}</option>
                      <option value="industry">{t('roiCalculator.form.indIndustry', 'الصناعة والبناء')}</option>
                      <option value="pharma">{t('roiCalculator.form.indPharma', 'الأدوية')}</option>
                   </select>
                </div>
             </div>

             {/* Field Sales Force */}
             <div className="flex items-start gap-4 mb-8">
                <div className="w-8 flex justify-center pt-1"><Car className="w-6 h-6 text-[#8A2BE2]" /></div>
                <div className="flex-1">
                   <h4 className="font-bold text-slate-800 mb-6">{t('roiCalculator.form.fieldSales', 'قوة المبيعات الميدانية')}</h4>
                   
                   {/* Row 1 inputs */}
                   <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-slate-500 mb-1 border-b-2 border-dotted border-slate-300 pb-1">{t('roiCalculator.form.persons', 'الأشخاص')}</label>
                        <input type="number" value={persons} onChange={(e) => setPersons(Number(e.target.value))} dir="ltr" className="p-2.5 border border-slate-300 rounded outline-none focus:border-[#8A2BE2] focus:ring-1 focus:ring-[#8A2BE2]/30 transition-all font-medium text-center" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-slate-500 mb-1 border-b-2 border-dotted border-slate-300 pb-1">{t('roiCalculator.form.distance', 'المسافة (كم)')}</label>
                        <div className="flex items-center border border-slate-300 rounded overflow-hidden focus-within:border-[#8A2BE2] focus-within:ring-1 focus-within:ring-[#8A2BE2]/30 transition-all bg-white" dir="ltr">
                           <input type="number" value={distance} onChange={(e) => setDistance(Number(e.target.value))} className="p-2.5 w-full outline-none font-medium text-center" />
                           <span className="bg-slate-50 px-3 text-xs text-slate-500 whitespace-nowrap border-l border-slate-300 h-full flex items-center font-medium">{t('roiCalculator.form.perYear', 'سنوياً')}</span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-slate-500 mb-1 border-b-2 border-dotted border-slate-300 pb-1">{t('roiCalculator.form.planningHours', 'ساعات التخطيط')}</label>
                        <div className="flex items-center border border-slate-300 rounded overflow-hidden focus-within:border-[#8A2BE2] focus-within:ring-1 focus-within:ring-[#8A2BE2]/30 transition-all bg-white" dir="ltr">
                           <input type="number" value={planningHours} onChange={(e) => setPlanningHours(Number(e.target.value))} className="p-2.5 w-full outline-none font-medium text-center" />
                           <span className="bg-slate-50 px-3 text-xs text-slate-500 whitespace-nowrap border-l border-slate-300 h-full flex items-center font-medium">{t('roiCalculator.form.perWeek', 'أسبوعياً')}</span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-slate-500 mb-1 border-b-2 border-dotted border-slate-300 pb-1">{t('roiCalculator.form.salary', 'الراتب الإجمالي')}</label>
                        <div className="flex items-center border border-slate-300 rounded overflow-hidden focus-within:border-[#8A2BE2] focus-within:ring-1 focus-within:ring-[#8A2BE2]/30 transition-all bg-white" dir="ltr">
                           <input type="number" value={salary} onChange={(e) => setSalary(Number(e.target.value))} className="p-2.5 w-full outline-none font-medium text-center" />
                           <span className="bg-slate-50 px-3 text-xs text-slate-500 whitespace-nowrap border-l border-slate-300 h-full flex items-center font-medium">{t('roiCalculator.form.perYear', 'سنوياً')}</span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-slate-500 mb-1 border-b-2 border-dotted border-slate-300 pb-1">{t('roiCalculator.form.turnover', 'حجم المبيعات')}</label>
                        <div className="flex items-center border border-slate-300 rounded overflow-hidden focus-within:border-[#8A2BE2] focus-within:ring-1 focus-within:ring-[#8A2BE2]/30 transition-all bg-white" dir="ltr">
                           <input type="number" value={turnover} onChange={(e) => setTurnover(Number(e.target.value))} className="p-2.5 w-full outline-none font-medium text-center" />
                           <span className="bg-slate-50 px-3 text-xs text-slate-500 whitespace-nowrap border-l border-slate-300 h-full flex items-center font-medium">{t('roiCalculator.form.perYear', 'سنوياً')}</span>
                        </div>
                      </div>
                   </div>

                   {/* Row 2 inputs */}
                   <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-6">
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-slate-500 mb-1 border-b-2 border-dotted border-slate-300 pb-1">{t('roiCalculator.form.workHours', 'ساعات العمل')}</label>
                        <div className="flex items-center border border-slate-300 rounded overflow-hidden focus-within:border-[#8A2BE2] focus-within:ring-1 focus-within:ring-[#8A2BE2]/30 transition-all bg-white" dir="ltr">
                           <input type="number" value={workHours} onChange={(e) => setWorkHours(Number(e.target.value))} className="p-2.5 w-full outline-none font-medium text-center" />
                           <span className="bg-slate-50 px-3 text-xs text-slate-500 whitespace-nowrap border-l border-slate-300 h-full flex items-center font-medium">{t('roiCalculator.form.perYear', 'سنوياً')}</span>
                        </div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Advanced Settings */}
             <div className="md:ml-12 md:mr-12 mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col md:flex-row flex-wrap items-start md:items-center gap-6 text-sm">
                <div className="flex flex-col">
                   <label className="text-slate-500 mb-1 font-medium">{t('roiCalculator.form.advanced.vehCost', 'تكاليف المركبة')}</label>
                   <div className="flex gap-2 items-center text-slate-500" dir="ltr"><span className="text-slate-800 font-bold">{vehCostPerKm}</span> {t('roiCalculator.form.advanced.perKm', 'لكل كم')}</div>
                </div>
                <div className="flex flex-col">
                   <label className="text-slate-500 mb-1 font-medium">{t('roiCalculator.form.advanced.empFactor', 'عامل تكلفة صاحب العمل')}</label>
                   <div className="flex gap-2 items-center text-slate-500" dir="ltr"><span className="text-slate-800 font-bold">{empFactor}</span></div>
                </div>
                <div className={`${isRTL ? 'md:mr-auto' : 'md:ml-auto'} flex items-center gap-6 mt-4 md:mt-0 w-full md:w-auto justify-between md:justify-end`}>
                   <button className="text-[#8A2BE2] hover:text-[#6b21a8] font-bold underline transition-colors">{t('roiCalculator.form.advanced.edit', 'تعديل')}</button>
                   <button onClick={handleReset} className="text-slate-500 hover:text-slate-800 font-bold flex items-center gap-2 bg-white px-4 py-2 rounded shadow-sm border border-slate-200 transition-all"><RefreshCw className="w-4 h-4" /> {t('roiCalculator.form.advanced.reset', 'إعادة ضبط')}</button>
                </div>
             </div>

           </FadeIn>
        </div>
      </section>

      {/* 3. Results Section */}
      <section className="py-16 bg-[#f8fafc] border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl">
           
           <div className="flex font-bold text-lg text-slate-800 mb-6 px-6">
              <div className="w-1/3"></div>
              <div className="w-[22%] text-center text-slate-500 font-normal hidden md:block">{t('roiCalculator.results.initial', 'وضعك الأولي')}</div>
              <div className="w-auto flex-1 text-center text-[#8A2BE2]">{t('roiCalculator.results.advantage', 'ميزتك مع S-Locator')}</div>
              <div className="w-[15%] hidden md:block"></div>
           </div>

           {/* Row 1: Vehicle Costs */}
           <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-6 overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row items-center p-6 gap-6 md:gap-0">
                 <div className="w-full md:w-1/3 font-bold text-xl text-slate-800">{t('roiCalculator.results.vehCosts', 'تكاليف المركبة')}</div>
                 <div className="w-full md:w-[22%] text-center text-3xl font-light text-slate-600" dir="ltr">{formatCurrency(initialVehCost)}</div>
                 <div className="w-full md:w-auto flex-1 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="flex items-center gap-2 text-[#8A2BE2] font-bold text-xl bg-[#f5f3ff] px-4 py-2 rounded-lg border border-purple-100 shadow-inner" dir="ltr">
                       <span className="text-[#489E46]">-</span>
                       <NumberInput value={carSavePct} setter={setCarSavePct} />
                       <span className="text-[#489E46]">%</span>
                    </div>
                    <span className="text-slate-400 font-bold text-2xl hidden sm:block">=</span>
                    <span className="text-3xl font-bold text-[#489E46]" dir="ltr">-{formatCurrency(vehSaved)}</span>
                 </div>
                 <div className={`w-full md:w-[15%] flex justify-center ${isRTL ? 'md:justify-start' : 'md:justify-end'}`}>
                    <button onClick={() => toggleRow('veh')} className="text-[#8A2BE2] flex items-center gap-1 font-bold hover:text-[#6b21a8] transition-colors bg-purple-50 px-3 py-1.5 rounded-lg">
                       <span>{expandedRow === 'veh' ? t('roiCalculator.results.fewerDetails', 'تفاصيل أقل') : t('roiCalculator.results.moreDetails', 'تفاصيل أكثر')}</span>
                       {expandedRow === 'veh' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                 </div>
              </div>
              {expandedRow === 'veh' && (
                 <div className={`bg-slate-50 p-6 md:p-8 border-t border-slate-100 flex flex-col md:flex-row ${isRTL ? 'justify-start' : 'justify-end'}`}>
                    <div className="w-full md:w-3/4 flex flex-col md:flex-row gap-8 items-start">
                       <div className="flex-1 flex flex-col gap-3 w-full">
                          <div className="flex justify-between font-bold text-slate-800 border-b border-slate-200 pb-3 text-lg">
                             <span>{t('roiCalculator.results.annualVeh', 'تكاليف المركبة السنوية')}</span>
                             <span dir="ltr">{formatCurrency(finalVehCost)}</span>
                          </div>
                          <div className="flex justify-between text-slate-600 pt-2 font-medium">
                             <span>{t('roiCalculator.results.kmSaved', 'الكيلومترات الموفرة')}</span>
                             <span className="font-bold text-lg" dir="ltr">{new Intl.NumberFormat('en-US').format(kmSaved)}</span>
                          </div>
                       </div>
                    </div>
                 </div>
              )}
           </div>

           {/* Row 2: Planning Costs */}
           <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-6 overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row items-center p-6 gap-6 md:gap-0">
                 <div className="w-full md:w-1/3 font-bold text-xl text-slate-800">{t('roiCalculator.results.planCosts', 'تكاليف التخطيط')}</div>
                 <div className="w-full md:w-[22%] text-center text-3xl font-light text-slate-600" dir="ltr">{formatCurrency(initialPlanCost)}</div>
                 <div className="w-full md:w-auto flex-1 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="flex items-center gap-2 text-[#8A2BE2] font-bold text-xl bg-[#f5f3ff] px-4 py-2 rounded-lg border border-purple-100 shadow-inner" dir="ltr">
                       <span className="text-[#489E46]">-</span>
                       <NumberInput value={planSavePct} setter={setPlanSavePct} />
                       <span className="text-[#489E46]">%</span>
                    </div>
                    <span className="text-slate-400 font-bold text-2xl hidden sm:block">=</span>
                    <span className="text-3xl font-bold text-[#489E46]" dir="ltr">-{formatCurrency(planSaved)}</span>
                 </div>
                 <div className={`w-full md:w-[15%] flex justify-center ${isRTL ? 'md:justify-start' : 'md:justify-end'}`}>
                    <button onClick={() => toggleRow('plan')} className="text-[#8A2BE2] flex items-center gap-1 font-bold hover:text-[#6b21a8] transition-colors bg-purple-50 px-3 py-1.5 rounded-lg">
                       <span>{expandedRow === 'plan' ? t('roiCalculator.results.fewerDetails', 'تفاصيل أقل') : t('roiCalculator.results.moreDetails', 'تفاصيل أكثر')}</span>
                       {expandedRow === 'plan' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                 </div>
              </div>
              {expandedRow === 'plan' && (
                 <div className={`bg-slate-50 p-6 md:p-8 border-t border-slate-100 flex flex-col md:flex-row ${isRTL ? 'justify-start' : 'justify-end'}`}>
                    <div className="w-full md:w-3/4 flex flex-col md:flex-row gap-8 items-start">
                       <div className="flex-1 flex flex-col gap-3 w-full">
                          <div className="flex justify-between font-bold text-slate-800 border-b border-slate-200 pb-3 text-lg">
                             <span>{t('roiCalculator.results.annualPlan', 'تكاليف التخطيط السنوية')}</span>
                             <span dir="ltr">{formatCurrency(finalPlanCost)}</span>
                          </div>
                       </div>
                    </div>
                 </div>
              )}
           </div>

           {/* Row 3: Sales Potential */}
           <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row items-center p-6 gap-6 md:gap-0">
                 <div className="w-full md:w-1/3 font-bold text-xl text-slate-800">{t('roiCalculator.results.salesPot', 'إمكانات المبيعات')}</div>
                 <div className="w-full md:w-[22%] text-center text-3xl font-light text-slate-600" dir="ltr">{formatCurrency(initialRev)}</div>
                 <div className="w-full md:w-auto flex-1 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="flex items-center gap-2 text-[#8A2BE2] font-bold text-xl bg-[#f5f3ff] px-4 py-2 rounded-lg border border-purple-100 shadow-inner" dir="ltr">
                       <span className="text-[#489E46]">+</span>
                       <NumberInput value={revBoostPct} setter={setRevBoostPct} />
                       <span className="text-[#489E46]">%</span>
                    </div>
                    <span className="text-slate-400 font-bold text-2xl hidden sm:block">=</span>
                    <span className="text-3xl font-bold text-[#8A2BE2]" dir="ltr">+{formatCurrency(revAdded)}</span>
                 </div>
                 <div className={`w-full md:w-[15%] flex justify-center ${isRTL ? 'md:justify-start' : 'md:justify-end'}`}>
                    <button onClick={() => toggleRow('rev')} className="text-[#8A2BE2] flex items-center gap-1 font-bold hover:text-[#6b21a8] transition-colors bg-purple-50 px-3 py-1.5 rounded-lg">
                       <span>{expandedRow === 'rev' ? t('roiCalculator.results.fewerDetails', 'تفاصيل أقل') : t('roiCalculator.results.moreDetails', 'تفاصيل أكثر')}</span>
                       {expandedRow === 'rev' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                 </div>
              </div>
              {expandedRow === 'rev' && (
                 <div className={`bg-slate-50 p-6 md:p-8 border-t border-slate-100 flex flex-col md:flex-row ${isRTL ? 'justify-start' : 'justify-end'}`}>
                    <div className="w-full md:w-3/4 flex flex-col md:flex-row gap-8 items-start">
                       <div className="flex-1 flex flex-col gap-3 w-full">
                          <div className="flex justify-between font-bold text-slate-800 border-b border-slate-200 pb-3 text-lg">
                             <span>{t('roiCalculator.results.annualSales', 'إمكانات المبيعات السنوية')}</span>
                             <span dir="ltr">{formatCurrency(finalRev)}</span>
                          </div>
                       </div>
                    </div>
                 </div>
              )}
           </div>

        </div>
      </section>

      {/* 4. Interactive Chart & Summary Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
           <FadeIn direction="up">
             
             {/* === INTERACTIVE SVG CHART AREA === */}
             <div className={`w-full h-[300px] mb-16 relative border-b-2 border-slate-200 mt-12 mx-4 sm:mx-0 ${isRTL ? 'border-r-2' : 'border-l-2'}`}>
                
                {/* Grid Lines */}
                <div className="absolute top-1/4 w-full h-[1px] bg-slate-100 pointer-events-none"></div>
                <div className="absolute top-2/4 w-full h-[1px] bg-slate-300 border-dashed border-t border-slate-400 pointer-events-none"></div>
                <div className="absolute top-3/4 w-full h-[1px] bg-slate-100 pointer-events-none"></div>
                
                {/* SVG Line */}
                <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100" style={{ transform: isRTL ? 'scaleX(-1)' : 'none' }}>
                   <polyline points="0,95 25,80 50,50 75,25 100,5" fill="none" stroke="#8A2BE2" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                </svg>

                {/* X-Axis Labels */}
                {chartPointsData.map(pt => (
                  <div key={pt.id} className="absolute -bottom-10 text-sm text-slate-500 font-bold bg-white px-2 transform -translate-x-1/2" style={{ [isRTL ? 'right' : 'left']: `${pt.x}%` }}>
                     {pt.label}
                  </div>
                ))}

                {/* Static Break-even Label */}
                <div className={`absolute bottom-[160px] transform -translate-x-1/2 bg-slate-500 text-white text-xs font-bold px-3 py-1.5 rounded shadow-md pointer-events-none z-0 hidden sm:block ${isRTL ? 'right-[40%]' : 'left-[40%]'}`}>
                  {t('roiCalculator.chart.breakEven', 'نقطة التعادل')}
                </div>

                {/* Interactive Data Points (Circles) & Tooltips */}
                {chartPointsData.map((pt) => (
                  <div
                    key={pt.id}
                    className="absolute w-5 h-5 bg-[#8A2BE2] border-4 border-white rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform z-10 shadow-sm"
                    style={{ [isRTL ? 'right' : 'left']: `${pt.x}%`, top: `${pt.y}%` }}
                    onMouseEnter={() => setHoveredChartPoint(pt.id)}
                    onMouseLeave={() => setHoveredChartPoint(null)}
                  >
                     {/* Tooltip Card */}
                     {hoveredChartPoint === pt.id && (
                       <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-[280px] bg-white border border-slate-200 shadow-xl rounded-xl p-5 z-50 pointer-events-none">
                          <h4 className="font-bold text-slate-800 mb-4 text-[15px] border-b border-slate-100 pb-2">
                            {t('roiCalculator.chart.afterMonths', 'بعد')} {pt.months} {t('roiCalculator.chart.months', 'أشهر:')}
                          </h4>
                          
                          <div className="flex justify-between text-xs text-slate-600 mb-2.5">
                             <span>{t('roiCalculator.chart.addRev', 'الإيرادات الإضافية:')}</span>
                             <span className="font-bold text-slate-800" dir="ltr">{formatCurrency(pt.rev)}</span>
                          </div>
                          <div className="flex justify-between text-xs text-slate-600 mb-2.5">
                             <span>{t('roiCalculator.chart.vehSave', 'توفير تكاليف المركبة:')}</span>
                             <span className="font-bold text-slate-800" dir="ltr">{formatCurrency(pt.veh)}</span>
                          </div>
                          <div className="flex justify-between text-xs text-slate-600 mb-2.5">
                             <span>{t('roiCalculator.chart.licCost', 'تكاليف التراخيص:')}</span>
                             <span className="font-bold text-slate-800" dir="ltr">{formatCurrency(pt.lic)}</span>
                          </div>
                          <div className="flex justify-between text-xs text-slate-600 mb-4">
                             <span>{t('roiCalculator.chart.oneOff', 'خدمات لمرة واحدة:')}</span>
                             <span className="font-bold text-slate-800" dir="ltr">{formatCurrency(pt.oneOff)}</span>
                          </div>
                          
                          <div className="flex justify-between text-sm font-bold border-t border-slate-200 pt-3">
                             <span className="text-slate-800">{t('roiCalculator.chart.total', 'الإجمالي:')}</span>
                             <span className={pt.total < 0 ? 'text-red-500' : 'text-[#489E46]'} dir="ltr">{formatCurrency(pt.total)}</span>
                          </div>

                          {/* Tooltip Triangle Arrow */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-3.5 h-3.5 bg-white border-b border-r border-slate-200 rotate-45"></div>
                       </div>
                     )}

                     {/* Default small value badges */}
                     {hoveredChartPoint !== pt.id && (
                        <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white border ${pt.total < 0 ? 'border-slate-300 text-slate-500' : 'border-[#489E46] text-[#489E46]'} text-xs font-bold px-2 py-1 rounded shadow-sm whitespace-nowrap pointer-events-none`} dir="ltr">
                          {formatCurrency(pt.total)}
                        </div>
                     )}
                  </div>
                ))}
             </div>
             {/* === END CHART AREA === */}

             {/* Summary Text */}
             <div className="mt-20 max-w-4xl mx-auto text-center md:text-left">
                <h2 className={`text-3xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight ${isRTL ? 'text-center md:text-right' : 'text-center md:text-left'}`}>
                   <span dir="ltr">{formatCurrency(revAdded)}</span> <span className="font-light text-slate-600">{t('roiCalculator.summary.additionalSales', 'إمكانات مبيعات إضافية')}</span>
                </h2>
                <p className={`text-slate-600 text-lg md:text-xl leading-relaxed mb-6 font-light ${isRTL ? 'text-center md:text-right' : 'text-center md:text-left'}`}>
                   {t('roiCalculator.summary.desc1', 'المصاريف السنوية لـ S-Locator بالإضافة إلى تكاليف بدء المشروع لمرة واحدة يتم تغطيتها من خلال توفير تكاليف المركبة وحدها.')}
                </p>
                <p className={`text-slate-600 text-lg md:text-xl leading-relaxed mb-10 font-light ${isRTL ? 'text-center md:text-right' : 'text-center md:text-left'}`}>
                   {t('roiCalculator.summary.desc2', 'في معظم الحالات، يمكن إعادة توزيع المناطق الشاغرة وتحسينها من خلال تحسين المناطق وتخطيط المسارات. الاستبدال ليس ضرورياً دائماً، ولكن يتم الحفاظ على جودة الزيارات أو زيادتها.')}
                </p>
                <div className="bg-[#f5f3ff] p-6 rounded-xl border border-purple-100 inline-block mb-10 w-full text-center">
                   <p className="text-xl font-bold text-slate-800">
                      {t('roiCalculator.summary.breakEven', 'أنت ترى عائداً إيجابياً على الاستثمار. يمكنك الوصول لنقطة التعادل خلال')} <span className="text-[#489E46] text-2xl mx-1">{breakEvenMonths}</span> {t('roiCalculator.summary.months', 'أشهر.')}
                   </p>
                </div>
                
                <div className={`flex justify-center ${isRTL ? 'md:justify-end' : 'md:justify-start'}`}>
                   <a href="/contact" className="inline-block bg-[#8A2BE2] text-white px-12 py-4 rounded font-bold hover:bg-[#6b21a8] transition-colors shadow-xl text-lg">
                      {t('roiCalculator.summary.schedule', 'حدد موعداً الآن')}
                   </a>
                </div>

                <p className={`text-xs text-slate-400 font-light border-t border-slate-100 pt-8 mt-12 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
                   {t('roiCalculator.summary.disclaimer', '* الأرقام المقدمة هي قيم متوسطة من مشاريع عملاء متعددة ومتنوعة. قد تختلف مسافاتك.')}
                </p>
             </div>

           </FadeIn>
        </div>
      </section>

      {/* 5. CTA Banner */}
      <section className="bg-gradient-to-r from-[#489E46] to-[#336E2E] py-24 text-center relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <FadeIn direction="up">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-sm">
              {t('roiCalculator.cta.title', 'نجاحك يبدأ من هنا.')}
            </h2>
            <p className="text-green-50 text-xl font-light mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('roiCalculator.cta.desc', 'اتخذ الخطوة الأولى نحو مسارات أكثر كفاءة، ومناطق محسنة، والمزيد من مكالمات العملاء، وعائد استثمار قابل للقياس مع S-Locator.')}
            </p>
            <button className="bg-white text-[#336E2E] px-12 py-4 rounded-lg font-bold hover:bg-slate-50 transition-colors shadow-2xl text-lg uppercase tracking-wide">
              {t('roiCalculator.cta.btn', 'ابدأ الآن')}
            </button>
          </FadeIn>
        </div>
      </section>

      {/* 6. FAQs Summary */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <FadeIn direction="up">
             <h2 className="text-3xl lg:text-[40px] font-bold text-slate-800 mb-16">{t('roiCalculator.faqs.title', 'الأسئلة الشائعة')}</h2>
             <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 max-w-5xl mx-auto">
                {faqs.map((q, i) => (
                  <a key={i} href="/faq" className={`text-[17px] font-medium text-[#8A2BE2] hover:text-[#489E46] transition-colors py-3 border-b border-slate-200 leading-snug block ${isRTL ? 'text-right' : 'text-left'}`}>
                    {q}
                  </a>
                ))}
             </div>
          </FadeIn>
        </div>
      </section>

      {/* 7. Contact Section */}
      <section className="bg-white py-24 text-center">
         <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">{t('contact.title', 'اتصل بنا!')}</h2>
            <div className="mt-6 text-[15px] text-slate-500 font-light flex items-center justify-center gap-2">
               <MonitorSmartphone className="w-4 h-4 text-[#8A2BE2]" /> {t('contactPage.hero.availability', 'متاحون عبر الهاتف من الاثنين إلى الجمعة')}
            </div>

            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mt-16 mb-20">
               <div className="flex-1 bg-[#f8fafc] p-10 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
                  <h3 className="text-[17px] font-medium text-slate-500 mb-2">{t('contactPage.support.pretitle', 'أنا مستخدم بالفعل وأحتاج إلى')}</h3>
                  <h4 className="text-[32px] font-bold text-slate-800 mb-8">{t('contactPage.support.title', 'الدعم الفني')}</h4>
                  <button className="bg-[#8A2BE2] text-white px-8 py-3.5 rounded hover:bg-[#6b21a8] transition-colors mb-10 text-[15px] font-bold shadow-md">
                    {t('contactPage.support.btn', 'إلى مركز المساعدة')}
                  </button>
                  <div className="text-left flex flex-col gap-4 text-slate-700 font-medium text-[15px] items-start w-full max-w-xs mx-auto">
                     <div className="flex items-center gap-3" dir="ltr"><Phone className="w-5 h-5 text-[#8A2BE2]"/> KSA: +966 55 818 8632</div>
                     <div className="flex items-center gap-3 mt-2"><Mail className="w-5 h-5 text-[#8A2BE2]"/> support@s-locator.com</div>
                  </div>
               </div>
               <div className="flex-1 bg-[#f8fafc] p-10 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
                  <h3 className="text-[17px] font-medium text-slate-500 mb-2">{t('contactPage.sales.pretitle', 'أنا مهتم وأرغب في')}</h3>
                  <h4 className="text-[32px] font-bold text-slate-800 mb-8">{t('contactPage.sales.title', 'استشارة للشراء')}</h4>
                  <div className="text-left flex flex-col gap-4 text-slate-700 font-medium text-[15px] items-start w-full max-w-xs mx-auto mt-2">
                     <div className="flex items-center gap-3" dir="ltr"><Phone className="w-5 h-5 text-[#8A2BE2]"/> Canada: +1 514-814-5180</div>
                     <div className="flex items-center gap-3" dir="ltr"><Phone className="w-5 h-5 text-[#8A2BE2]"/> KSA: +966 55 818 8632</div>
                     <a href="/contact" className="text-[#a0a0a0] cursor-pointer hover:text-[#8A2BE2] ml-8 mb-2 transition-colors">{t('common.showMore', 'عرض المزيد')}</a>
                     <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-[#8A2BE2]"/> sales@s-locator.com</div>
                  </div>
               </div>
            </div>

            {/* Hexagon Team Section */}
            <div className="pt-16 border-t border-slate-200">
              <h3 className="text-3xl font-bold text-[#8A2BE2] mb-16">{t('contactPage.team.title', 'نتطلع إلى محادثتك')}</h3>
              <div className="flex flex-wrap justify-center max-w-5xl mx-auto px-4 gap-y-2 md:gap-y-0 pb-16" dir="ltr">
                {teamMembers.map((member, idx) => (
                  <div key={idx} className="relative w-[110px] h-[125px] md:w-[130px] md:h-[150px] mx-1 md:mx-2 mb-[-20px] md:mb-[-30px] group">
                    <div 
                      className="w-full h-full bg-[#f5f3ff] transition-transform duration-300 group-hover:-translate-y-2 flex items-center justify-center overflow-hidden border-[3px] border-white shadow-sm"
                      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    >
                      <img 
                        src={member.img || 'https://via.placeholder.com/150/f5f3ff/8A2BE2?text=S-Loc'} 
                        alt={member.name} 
                        className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:mix-blend-normal group-hover:opacity-100 transition-all" 
                        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/150/f5f3ff/8A2BE2?text=User' }} 
                      />
                    </div>

                    <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-white text-slate-800 px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-[100] flex flex-col items-center border border-slate-100 pointer-events-none group-hover:pointer-events-auto">
                       <span className="font-bold text-[14px] text-slate-700">{member.name}</span>
                       <div className="flex items-center gap-3 mt-1">
                          <span className="text-[11px] text-slate-400 font-medium tracking-wide">{member.lang}</span>
                          <a href={member.li || '#'} target="_blank" rel="noopener noreferrer" className="text-[#0a66c2] hover:text-[#004182]">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                       </div>
                       <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white transform rotate-45 border-b border-r border-slate-100"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

         </div>
      </section>

    </div>
  );
};

export default RoiCalculator;