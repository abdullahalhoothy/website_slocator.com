import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp, RefreshCw, Car, Building, Phone, Mail, MonitorSmartphone } from 'lucide-react';
import { FadeIn } from '../components/animations/FadeIn';

// 1. مكون إدخال الأرقام
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
    <input type="text" value={value} readOnly className="w-full text-center h-8 font-bold text-[#8A2BE2] outline-none" />
    <button onClick={() => setter(Math.max(min, value - 1))} className="bg-slate-100 hover:bg-slate-200 h-5 flex items-center justify-center border-t border-slate-300">
      <ChevronDown className="w-3 h-3 text-slate-600" />
    </button>
  </div>
);

// 2. المكون الرئيسي
export const RoiCalculator: React.FC = () => {
  const { t, i18n } = useTranslation('landing');
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
  
  // State للتحكم بظهور بطاقة المعلومات (Tooltip) في الرسم البياني
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
  const totalSavingsAnnual = vehSaved + planSaved + revAdded;

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

  // بيانات الرسم البياني
  const chartPointsData = [
    { id: 0, x: 25, y: 80, label: 'Q1', months: 3, rev: 0, veh: 981, lic: -2878, oneOff: -190, total: -2087 },
    { id: 1, x: 50, y: 50, label: 'Q2', months: 6, rev: 12500, veh: 2943, lic: -2878, oneOff: -190, total: 7718 },
    { id: 2, x: 75, y: 25, label: 'Q3', months: 9, rev: 25000, veh: 4905, lic: -2878, oneOff: -190, total: 21689 },
    { id: 3, x: 100, y: 5, label: 'Q4', months: 12, rev: 50000, veh: 5886, lic: -2878, oneOff: -190, total: 35661 }
  ];

  // بيانات الفريق
  const teamMembers = [
    { name: "اسم الموظف 1", lang: "AR | EN", li: "", img: "" },
    { name: "اسم الموظف 2", lang: "AR | EN", li: "", img: "" },
    { name: "اسم الموظف 3", lang: "AR | EN", li: "", img: "" },
    { name: "اسم الموظف 4", lang: "AR | EN", li: "", img: "" },
    { name: "اسم الموظف 5", lang: "AR | EN", li: "", img: "" },
    { name: "اسم الموظف 6", lang: "AR | EN", li: "", img: "" },
    { name: "اسم الموظف 7", lang: "AR | EN", li: "", img: "" },
    { name: "اسم الموظف 8", lang: "AR | EN", li: "", img: "" },
    { name: "اسم الموظف 9", lang: "AR | EN", li: "", img: "" },
    { name: "اسم الموظف 10", lang: "AR | EN", li: "", img: "" }
  ];

  return (
    <div className={`min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-[#f5f3ff] selection:text-[#8A2BE2] pb-0 ${isRTL ? 'text-right' : 'text-left'}`}>
      
      {/* 1. Hero Section */}
      <section className="pt-24 pb-12 text-center bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn direction="up">
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-8 tracking-tight">
              {t('roiCalculator.hero.title', 'S-Locator Return on Investment calculator')}
            </h1>
            
            <div className="flex items-center justify-center gap-8 text-lg text-slate-600 font-medium">
               <span>{t('roiCalculator.form.calcFor', 'Calculation for:')}</span>
               <label className="flex items-center gap-2 cursor-pointer hover:text-[#8A2BE2] transition-colors">
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#8A2BE2] rounded cursor-pointer" />
                  {t('roiCalculator.form.rp', 'Route Planner')}
               </label>
               <label className="flex items-center gap-2 cursor-pointer hover:text-[#8A2BE2] transition-colors">
                  <input type="checkbox" className="w-5 h-5 accent-[#8A2BE2] rounded cursor-pointer" />
                  {t('roiCalculator.form.to', 'Territory Optimization')}
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
                   <h4 className="font-bold text-slate-800 mb-4">{t('roiCalculator.form.industry', 'Industry')}</h4>
                   <select className="w-full md:w-1/3 p-3 border border-slate-300 rounded-lg outline-none focus:border-[#8A2BE2] bg-slate-50 focus:bg-white transition-colors cursor-pointer">
                      <option value="" disabled selected>{t('roiCalculator.form.selectIndustry', 'Select industry')}</option>
                      <option value="consumer">Consumer goods</option>
                      <option value="industry">Industry and construction</option>
                      <option value="pharma">Pharmaceuticals</option>
                   </select>
                </div>
             </div>

             {/* Field Sales Force */}
             <div className="flex items-start gap-4 mb-8">
                <div className="w-8 flex justify-center pt-1"><Car className="w-6 h-6 text-[#8A2BE2]" /></div>
                <div className="flex-1">
                   <h4 className="font-bold text-slate-800 mb-6">{t('roiCalculator.form.fieldSales', 'Field sales force')}</h4>
                   
                   {/* Row 1 inputs */}
                   <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-slate-500 mb-1 border-b-2 border-dotted border-slate-300 pb-1">{t('roiCalculator.form.persons', 'Persons')}</label>
                        <input type="number" value={persons} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPersons(Number(e.target.value))} className="p-2.5 border border-slate-300 rounded outline-none focus:border-[#8A2BE2] focus:ring-1 focus:ring-[#8A2BE2]/30 transition-all font-medium" />
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-slate-500 mb-1 border-b-2 border-dotted border-slate-300 pb-1">{t('roiCalculator.form.distance', 'Distance')}</label>
                        <div className="flex items-center border border-slate-300 rounded overflow-hidden focus-within:border-[#8A2BE2] focus-within:ring-1 focus-within:ring-[#8A2BE2]/30 transition-all bg-white">
                           <input type="number" value={distance} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDistance(Number(e.target.value))} className="p-2.5 w-full outline-none font-medium" />
                           <span className="bg-slate-50 px-3 text-xs text-slate-500 whitespace-nowrap border-l border-slate-300 h-full flex items-center font-medium">{t('roiCalculator.form.perYear', 'per year')}</span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-slate-500 mb-1 border-b-2 border-dotted border-slate-300 pb-1">{t('roiCalculator.form.planningHours', 'Planning hours')}</label>
                        <div className="flex items-center border border-slate-300 rounded overflow-hidden focus-within:border-[#8A2BE2] focus-within:ring-1 focus-within:ring-[#8A2BE2]/30 transition-all bg-white">
                           <input type="number" value={planningHours} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPlanningHours(Number(e.target.value))} className="p-2.5 w-full outline-none font-medium" />
                           <span className="bg-slate-50 px-3 text-xs text-slate-500 whitespace-nowrap border-l border-slate-300 h-full flex items-center font-medium">{t('roiCalculator.form.perWeek', 'per week')}</span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-slate-500 mb-1 border-b-2 border-dotted border-slate-300 pb-1">{t('roiCalculator.form.salary', 'Gross salary')}</label>
                        <div className="flex items-center border border-slate-300 rounded overflow-hidden focus-within:border-[#8A2BE2] focus-within:ring-1 focus-within:ring-[#8A2BE2]/30 transition-all bg-white">
                           <input type="number" value={salary} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSalary(Number(e.target.value))} className="p-2.5 w-full outline-none font-medium" />
                           <span className="bg-slate-50 px-3 text-xs text-slate-500 whitespace-nowrap border-l border-slate-300 h-full flex items-center font-medium">{t('roiCalculator.form.perYear', 'per year')}</span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-slate-500 mb-1 border-b-2 border-dotted border-slate-300 pb-1">{t('roiCalculator.form.turnover', 'Turnover')}</label>
                        <div className="flex items-center border border-slate-300 rounded overflow-hidden focus-within:border-[#8A2BE2] focus-within:ring-1 focus-within:ring-[#8A2BE2]/30 transition-all bg-white">
                           <input type="number" value={turnover} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTurnover(Number(e.target.value))} className="p-2.5 w-full outline-none font-medium" />
                           <span className="bg-slate-50 px-3 text-xs text-slate-500 whitespace-nowrap border-l border-slate-300 h-full flex items-center font-medium">{t('roiCalculator.form.perYear', 'per year')}</span>
                        </div>
                      </div>
                   </div>

                   {/* Row 2 inputs */}
                   <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-6">
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-slate-500 mb-1 border-b-2 border-dotted border-slate-300 pb-1">{t('roiCalculator.form.workHours', 'Working hours')}</label>
                        <div className="flex items-center border border-slate-300 rounded overflow-hidden focus-within:border-[#8A2BE2] focus-within:ring-1 focus-within:ring-[#8A2BE2]/30 transition-all bg-white">
                           <input type="number" value={workHours} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setWorkHours(Number(e.target.value))} className="p-2.5 w-full outline-none font-medium" />
                           <span className="bg-slate-50 px-3 text-xs text-slate-500 whitespace-nowrap border-l border-slate-300 h-full flex items-center font-medium">{t('roiCalculator.form.perYear', 'per year')}</span>
                        </div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Advanced Settings */}
             <div className="ml-12 mt-8 p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-wrap items-center gap-8 text-sm">
                <div className="flex flex-col">
                   <label className="text-slate-500 mb-1 font-medium">{t('roiCalculator.form.advanced.vehCost', 'Vehicle costs')}</label>
                   <div className="flex gap-2 items-center text-slate-500"><span className="text-slate-800 font-bold">{vehCostPerKm}</span> {t('roiCalculator.form.advanced.perKm', 'per km')}</div>
                </div>
                <div className="flex flex-col">
                   <label className="text-slate-500 mb-1 font-medium">{t('roiCalculator.form.advanced.empFactor', 'Employer factor')}</label>
                   <div className="flex gap-2 items-center text-slate-500"><span className="text-slate-800 font-bold">{empFactor}</span></div>
                </div>
                <div className="ml-auto flex items-center gap-6">
                   <button className="text-[#8A2BE2] hover:text-[#6b21a8] font-bold underline transition-colors">{t('roiCalculator.form.advanced.edit', 'Edit')}</button>
                   <button onClick={handleReset} className="text-slate-500 hover:text-slate-800 font-bold flex items-center gap-2 bg-white px-4 py-2 rounded shadow-sm border border-slate-200 transition-all"><RefreshCw className="w-4 h-4" /> {t('roiCalculator.form.advanced.reset', 'Reset')}</button>
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
              <div className="w-[22%] text-center text-slate-500 font-normal">{t('roiCalculator.results.initial', 'Initial situation')}</div>
              <div className="w-auto flex-1 text-center text-[#8A2BE2]">{t('roiCalculator.results.advantage', 'Advantage')}</div>
              <div className="w-[15%]"></div>
           </div>

           {/* Row 1: Vehicle Costs */}
           <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-6 overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row items-center p-6 gap-6 md:gap-0">
                 <div className="w-full md:w-1/3 font-bold text-xl text-slate-800">{t('roiCalculator.results.vehCosts', 'Vehicle costs')}</div>
                 <div className="w-full md:w-[22%] text-center text-3xl font-light text-slate-600">{formatCurrency(initialVehCost)}</div>
                 <div className="w-full md:w-auto flex-1 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="flex items-center gap-2 text-[#8A2BE2] font-bold text-xl bg-[#f5f3ff] px-4 py-2 rounded-lg border border-purple-100 shadow-inner">
                       <span className="text-[#489E46]">-</span>
                       <NumberInput value={carSavePct} setter={setCarSavePct} />
                       <span className="text-[#489E46]">%</span>
                    </div>
                    <span className="text-slate-400 font-bold text-2xl hidden sm:block">=</span>
                    <span className="text-3xl font-bold text-[#489E46]">-{formatCurrency(vehSaved)}</span>
                 </div>
                 <div className="w-full md:w-[15%] flex justify-center md:justify-end">
                    <button onClick={() => toggleRow('veh')} className="text-[#8A2BE2] flex items-center gap-1 font-bold hover:text-[#6b21a8] transition-colors bg-purple-50 px-3 py-1.5 rounded-lg">
                       <span>{expandedRow === 'veh' ? t('roiCalculator.results.fewerDetails', 'Fewer') : t('roiCalculator.results.moreDetails', 'More')}</span>
                       {expandedRow === 'veh' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                 </div>
              </div>
              {expandedRow === 'veh' && (
                 <div className="bg-slate-50 p-6 md:p-8 border-t border-slate-100 flex flex-col md:flex-row justify-end">
                    <div className="w-full md:w-3/4 flex flex-col md:flex-row gap-8 items-start">
                       <div className="flex-1 flex flex-col gap-3 w-full">
                          <div className="flex justify-between font-bold text-slate-800 border-b border-slate-200 pb-3 text-lg">
                             <span>{t('roiCalculator.results.annualVeh', 'Annual costs')}</span>
                             <span>{formatCurrency(finalVehCost)}</span>
                          </div>
                          <div className="flex justify-between text-slate-600 pt-2 font-medium">
                             <span>{t('roiCalculator.results.kmSaved', 'Km saved')}</span>
                             <span className="font-bold text-lg">{new Intl.NumberFormat('en-US').format(kmSaved)}</span>
                          </div>
                       </div>
                    </div>
                 </div>
              )}
           </div>

           {/* Row 2: Planning Costs */}
           <div className="bg-white rounded-xl shadow-sm border border-slate-200 mb-6 overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row items-center p-6 gap-6 md:gap-0">
                 <div className="w-full md:w-1/3 font-bold text-xl text-slate-800">{t('roiCalculator.results.planCosts', 'Planning costs')}</div>
                 <div className="w-full md:w-[22%] text-center text-3xl font-light text-slate-600">{formatCurrency(initialPlanCost)}</div>
                 <div className="w-full md:w-auto flex-1 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="flex items-center gap-2 text-[#8A2BE2] font-bold text-xl bg-[#f5f3ff] px-4 py-2 rounded-lg border border-purple-100 shadow-inner">
                       <span className="text-[#489E46]">-</span>
                       <NumberInput value={planSavePct} setter={setPlanSavePct} />
                       <span className="text-[#489E46]">%</span>
                    </div>
                    <span className="text-slate-400 font-bold text-2xl hidden sm:block">=</span>
                    <span className="text-3xl font-bold text-[#489E46]">-{formatCurrency(planSaved)}</span>
                 </div>
                 <div className="w-full md:w-[15%] flex justify-center md:justify-end">
                    <button onClick={() => toggleRow('plan')} className="text-[#8A2BE2] flex items-center gap-1 font-bold hover:text-[#6b21a8] transition-colors bg-purple-50 px-3 py-1.5 rounded-lg">
                       <span>{expandedRow === 'plan' ? t('roiCalculator.results.fewerDetails', 'Fewer') : t('roiCalculator.results.moreDetails', 'More')}</span>
                       {expandedRow === 'plan' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                 </div>
              </div>
              {expandedRow === 'plan' && (
                 <div className="bg-slate-50 p-6 md:p-8 border-t border-slate-100 flex flex-col md:flex-row justify-end">
                    <div className="w-full md:w-3/4 flex flex-col md:flex-row gap-8 items-start">
                       <div className="flex-1 flex flex-col gap-3 w-full">
                          <div className="flex justify-between font-bold text-slate-800 border-b border-slate-200 pb-3 text-lg">
                             <span>{t('roiCalculator.results.annualPlan', 'Annual costs')}</span>
                             <span>{formatCurrency(finalPlanCost)}</span>
                          </div>
                       </div>
                    </div>
                 </div>
              )}
           </div>

           {/* Row 3: Sales Potential */}
           <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row items-center p-6 gap-6 md:gap-0">
                 <div className="w-full md:w-1/3 font-bold text-xl text-slate-800">{t('roiCalculator.results.salesPot', 'Sales potential')}</div>
                 <div className="w-full md:w-[22%] text-center text-3xl font-light text-slate-600">{formatCurrency(initialRev)}</div>
                 <div className="w-full md:w-auto flex-1 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <div className="flex items-center gap-2 text-[#8A2BE2] font-bold text-xl bg-[#f5f3ff] px-4 py-2 rounded-lg border border-purple-100 shadow-inner">
                       <span className="text-[#489E46]">+</span>
                       <NumberInput value={revBoostPct} setter={setRevBoostPct} />
                       <span className="text-[#489E46]">%</span>
                    </div>
                    <span className="text-slate-400 font-bold text-2xl hidden sm:block">=</span>
                    <span className="text-3xl font-bold text-[#8A2BE2]">+{formatCurrency(revAdded)}</span>
                 </div>
                 <div className="w-full md:w-[15%] flex justify-center md:justify-end">
                    <button onClick={() => toggleRow('rev')} className="text-[#8A2BE2] flex items-center gap-1 font-bold hover:text-[#6b21a8] transition-colors bg-purple-50 px-3 py-1.5 rounded-lg">
                       <span>{expandedRow === 'rev' ? t('roiCalculator.results.fewerDetails', 'Fewer') : t('roiCalculator.results.moreDetails', 'More')}</span>
                       {expandedRow === 'rev' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                 </div>
              </div>
              {expandedRow === 'rev' && (
                 <div className="bg-slate-50 p-6 md:p-8 border-t border-slate-100 flex flex-col md:flex-row justify-end">
                    <div className="w-full md:w-3/4 flex flex-col md:flex-row gap-8 items-start">
                       <div className="flex-1 flex flex-col gap-3 w-full">
                          <div className="flex justify-between font-bold text-slate-800 border-b border-slate-200 pb-3 text-lg">
                             <span>{t('roiCalculator.results.annualSales', 'Annual sales')}</span>
                             <span>{formatCurrency(finalRev)}</span>
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
              <div className="w-full h-[300px] mb-16 relative border-b-2 border-l-2 border-slate-200 mt-12 mx-4 sm:mx-0">
                 
                 {/* Grid Lines */}
                 <div className="absolute top-1/4 w-full h-[1px] bg-slate-100 pointer-events-none"></div>
                 <div className="absolute top-2/4 w-full h-[1px] bg-slate-300 border-dashed border-t border-slate-400 pointer-events-none"></div>
                 <div className="absolute top-3/4 w-full h-[1px] bg-slate-100 pointer-events-none"></div>
                 
                 {/* SVG Line */}
                 <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <polyline points="0,95 25,80 50,50 75,25 100,5" fill="none" stroke="#8A2BE2" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                 </svg>

                 {/* X-Axis Labels */}
                 {chartPointsData.map(pt => (
                   <div key={pt.id} className="absolute -bottom-10 text-sm text-slate-500 font-bold bg-white px-2 transform -translate-x-1/2" style={{ left: `${pt.x}%` }}>
                     {pt.label}
                   </div>
                 ))}

                 {/* Static Break-even Label */}
                 <div className="absolute left-[40%] bottom-[160px] -translate-x-1/2 bg-slate-500 text-white text-xs font-bold px-3 py-1.5 rounded shadow-md pointer-events-none z-0 hidden sm:block">Break-even point</div>

                 {/* Interactive Data Points (Circles) & Tooltips */}
                 {chartPointsData.map((pt) => (
                   <div
                     key={pt.id}
                     className="absolute w-5 h-5 bg-[#8A2BE2] border-4 border-white rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform z-10 shadow-sm"
                     style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                     onMouseEnter={() => setHoveredChartPoint(pt.id)}
                     onMouseLeave={() => setHoveredChartPoint(null)}
                   >
                      {/* Tooltip Card */}
                      {hoveredChartPoint === pt.id && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-[280px] bg-white border border-slate-200 shadow-xl rounded-xl p-5 z-50 pointer-events-none">
                           <h4 className="font-bold text-slate-800 mb-4 text-[15px] border-b border-slate-100 pb-2">After {pt.months} months:</h4>
                           
                           <div className="flex justify-between text-xs text-slate-600 mb-2.5">
                              <span>Additional Revenue:</span>
                              <span className="font-bold text-slate-800">{formatCurrency(pt.rev)}</span>
                           </div>
                           <div className="flex justify-between text-xs text-slate-600 mb-2.5">
                              <span>Vehicle cost savings:</span>
                              <span className="font-bold text-slate-800">{formatCurrency(pt.veh)}</span>
                           </div>
                           <div className="flex justify-between text-xs text-slate-600 mb-2.5">
                              <span>License costs:</span>
                              <span className="font-bold text-slate-800">{formatCurrency(pt.lic)}</span>
                           </div>
                           <div className="flex justify-between text-xs text-slate-600 mb-4">
                              <span>One-off services:</span>
                              <span className="font-bold text-slate-800">{formatCurrency(pt.oneOff)}</span>
                           </div>
                           
                           <div className="flex justify-between text-sm font-bold border-t border-slate-200 pt-3">
                              <span className="text-slate-800">Total:</span>
                              <span className={pt.total < 0 ? 'text-red-500' : 'text-[#489E46]'}>{formatCurrency(pt.total)}</span>
                           </div>

                           {/* Tooltip Triangle Arrow */}
                           <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 w-3.5 h-3.5 bg-white border-b border-r border-slate-200 rotate-45"></div>
                        </div>
                      )}

                      {/* Default small value badges */}
                      {hoveredChartPoint !== pt.id && (
                         <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white border ${pt.total < 0 ? 'border-slate-300 text-slate-500' : 'border-[#489E46] text-[#489E46]'} text-xs font-bold px-2 py-1 rounded shadow-sm whitespace-nowrap pointer-events-none`}>
                           {formatCurrency(pt.total)}
                         </div>
                      )}
                   </div>
                 ))}
              </div>
              {/* === END CHART AREA === */}

              {/* Summary Text */}
              <div className="mt-20 max-w-4xl mx-auto text-center md:text-left">
                 <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
                    {formatCurrency(revAdded)} <span className="font-light text-slate-600">{t('roiCalculator.summary.additionalSales', 'additional sales potential')}</span>
                 </h2>
                 <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-6 font-light">
                    {t('roiCalculator.summary.desc1', 'The annual expenses for S-Locator as well as the one-time project start costs are covered by the vehicle cost savings alone.')}
                 </p>
                 <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 font-light">
                    {t('roiCalculator.summary.desc2', 'In most cases, vacant territories can be redistributed and optimized through territory optimization and route planning. Replacement is not always necessary, but the quality of visits is maintained/increased.')}
                 </p>
                 <div className="bg-[#f5f3ff] p-6 rounded-xl border border-purple-100 inline-block mb-10 w-full text-center">
                    <p className="text-xl font-bold text-slate-800">
                       {t('roiCalculator.summary.breakEven', 'You see a positive return on investment. You could break even in')} <span className="text-[#489E46] text-2xl mx-1">{breakEvenMonths}</span> {t('roiCalculator.summary.months', 'months.')}
                    </p>
                 </div>
                 
                 <div className="flex justify-center md:justify-start">
                    <a href="/contact" className="inline-block bg-[#8A2BE2] text-white px-12 py-4 rounded font-bold hover:bg-[#6b21a8] transition-colors shadow-xl text-lg">
                       {t('roiCalculator.summary.schedule', 'Schedule an appointment now')}
                    </a>
                 </div>

                 <p className="text-xs text-slate-400 font-light border-t border-slate-100 pt-8 mt-12 text-center md:text-left">
                    {t('roiCalculator.summary.disclaimer', '* The figures provided are average values from numerous and diverse customer projects. Your mileage may vary.')}
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
              {t('roiCalculator.cta.title', 'Your success starts here.')}
            </h2>
            <p className="text-green-50 text-xl font-light mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('roiCalculator.cta.desc', 'Take the first step towards more efficient routes, optimized territories, more customer calls and measurable ROI.')}
            </p>
            <button className="bg-white text-[#336E2E] px-12 py-4 rounded-lg font-bold hover:bg-slate-50 transition-colors shadow-2xl text-lg uppercase tracking-wide">
              {t('roiCalculator.cta.btn', 'Get started now')}
            </button>
          </FadeIn>
        </div>
      </section>

      {/* 6. FAQs Summary */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <FadeIn direction="up">
             <h2 className="text-3xl lg:text-[40px] font-bold text-slate-800 mb-16">{t('roiCalculator.faqs.title', 'Frequently asked questions')}</h2>
             <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 text-left max-w-5xl mx-auto">
                {[
                  "Can I work with industry values?",
                  "When does S-Locator pay off and how is this shown?",
                  "What is the difference between territory optimization and route planning?",
                  "What can I do with the results and what happens next?",
                  "What does the ROI calculator do and who is it intended for?",
                  "What results does the calculator provide?",
                  "Which costs are taken into account?",
                  "How much data do I need to enter?"
                ].map((q, i) => (
                  <a key={i} href="/faq" className="text-[17px] font-medium text-[#8A2BE2] hover:text-[#489E46] transition-colors py-3 border-b border-slate-200 leading-snug block">
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
            <h2 className="text-4xl font-bold text-slate-800 mb-4">{t('contact.title', 'Contact us!')}</h2>
            <div className="mt-6 text-[15px] text-slate-500 font-light flex items-center justify-center gap-2">
               <MonitorSmartphone className="w-4 h-4 text-[#8A2BE2]" /> Available by phone from Mon-Fri, 9-17h CET
            </div>

            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto mt-16 mb-20">
               <div className="flex-1 bg-[#f8fafc] p-10 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
                  <h3 className="text-[17px] font-medium text-slate-500 mb-2">I am already a user and need</h3>
                  <h4 className="text-[32px] font-bold text-slate-800 mb-8">Support</h4>
                  <button className="bg-[#8A2BE2] text-white px-8 py-3.5 rounded hover:bg-[#6b21a8] transition-colors mb-10 text-[15px] font-bold shadow-md">
                    To the HelpCenter
                  </button>
                  <div className="text-left flex flex-col gap-4 text-slate-700 font-medium text-[15px] items-start w-full max-w-xs mx-auto">
                     <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#8A2BE2]"/> US: +1 646-974-60-50</div>
                     <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#8A2BE2]"/> EU: +43 1 2531516-50</div>
                     <div className="flex items-center gap-3 mt-2"><Mail className="w-5 h-5 text-[#8A2BE2]"/> support@s-locator.com</div>
                  </div>
               </div>
               <div className="flex-1 bg-[#f8fafc] p-10 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center">
                  <h3 className="text-[17px] font-medium text-slate-500 mb-2">I am interested and would like</h3>
                  <h4 className="text-[32px] font-bold text-slate-800 mb-8">Buying advice</h4>
                  <div className="text-left flex flex-col gap-4 text-slate-700 font-medium text-[15px] items-start w-full max-w-xs mx-auto mt-2">
                     <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#8A2BE2]"/> US: +1 646-974-6040</div>
                     <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-[#8A2BE2]"/> EU: +43 1 2531516-40</div>
                     <div className="flex items-center gap-3 mt-2"><Mail className="w-5 h-5 text-[#8A2BE2]"/> sales@s-locator.com</div>
                  </div>
               </div>
            </div>

            {/* Hexagon Team Section - الصور والروابط فارغة ليتم جلبها من لينكدإن */}
            <div className="pt-16 border-t border-slate-200">
              <h3 className="text-3xl font-bold text-[#8A2BE2] mb-16">We look forward to our conversation</h3>
              <div className="flex flex-wrap justify-center max-w-5xl mx-auto px-4 gap-y-2 md:gap-y-0 pb-16">
                {teamMembers.map((member, idx) => (
                  <div key={idx} className="relative w-[110px] h-[125px] md:w-[130px] md:h-[150px] mx-1 md:mx-2 mb-[-20px] md:mb-[-30px] group">
                    
                    {/* الشكل السداسي */}
                    <div 
                      className="w-full h-full bg-[#f5f3ff] transition-transform duration-300 group-hover:-translate-y-2 flex items-center justify-center overflow-hidden border-[3px] border-white shadow-sm"
                      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                    >
                      <img 
                        src={member.img || 'https://via.placeholder.com/150?text=LinkedIn+Image'} 
                        alt={member.name} 
                        className="w-full h-full object-cover" 
                        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/150?text=LinkedIn+Image' }} 
                      />
                    </div>

                    {/* بطاقة اللينكدإن */}
                    <div className={`absolute -top-16 left-1/2 -translate-x-1/2 bg-white text-slate-800 px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-[100] flex flex-col items-center border border-slate-100 pointer-events-none group-hover:pointer-events-auto ${isRTL ? 'text-right' : 'text-left'}`}>
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