import React, { useState, useEffect, useRef } from 'react'

// =========================================
// Helper Component: Scroll Reveal Animation Wrapper
// =========================================
const FadeInSection = ({
  children,
  delay = 0,
  direction = 'up',
}: {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
}) => {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          observer.unobserve(domRef.current!)
        }
      },
      { threshold: 0.1 },
    )

    if (domRef.current) observer.observe(domRef.current)
    return () => observer.disconnect()
  }, [])

  const getTransform = () => {
    if (isVisible) return 'translate-x-0 translate-y-0'
    if (direction === 'up') return 'translate-y-16'
    if (direction === 'left') return '-translate-x-16'
    if (direction === 'right') return 'translate-x-16'
    return 'translate-y-16'
  }

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'} ${getTransform()}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// =========================================
// 1. Custom Navbar for Landing Page
// =========================================
const LandingNavbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/">
            {/* تم تكبير اللوغو وتصحيح المسار (إزالة كلمة public) */}
            <img
              src="/assets/images/logo s-loc-01.png"
              alt="S-Locator Logo"
              className="h-14 md:h-16 w-auto max-w-[250px] object-contain"
            />
          </a>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors"
          >
            Features
          </a>
          <a
            href="#use-cases"
            className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors"
          >
            Use Cases
          </a>
          <a
            href="#benefits"
            className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors"
          >
            Benefits
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="https://s-locator.northernacs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-sm"
          >
            Start Planning
          </a>
        </div>
      </div>
    </nav>
  )
}

// =========================================
// 2. Hero Section
// =========================================
const Hero: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden pt-20 pb-24 border-b border-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <FadeInSection direction="left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6">
                <span className="flex h-2 w-2 rounded-full bg-[#44E559]"></span>
                <span className="text-xs font-semibold tracking-wide text-slate-600 uppercase">
                  Powered by{' '}
                  <a
                    href="https://northernacs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline"
                  >
                    Northern Analytics
                  </a>
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
                Maximize Field Efficiency. <span className="text-purple-600">Minimize Travel.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Design perfectly balanced sales territories and generate mathematically optimized
                daily routes for your field teams across Saudi Arabia. Stop guessing, start
                executing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://s-locator.northernacs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#44E559] hover:bg-[#3bc24d] text-slate-900 px-8 py-3.5 rounded-md font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#44E559]/20 w-fit"
                >
                  Start planning your territories
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#how-it-works"
                  className="bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-3.5 rounded-md font-semibold flex items-center justify-center transition-all w-fit"
                >
                  View how it works
                </a>
              </div>
            </FadeInSection>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <FadeInSection direction="right" delay={200}>
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-100 to-[#44E559]/20 rounded-2xl transform rotate-3 scale-105 opacity-50"></div>
              <div className="relative bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 overflow-hidden">
                <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-50 p-2 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-purple-600"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Riyadh Territory: Team A</div>
                      <div className="text-xs text-slate-500">Route Optimized • 12 Stops</div>
                    </div>
                  </div>
                  <div className="bg-[#44E559]/20 text-purple-900 text-sm font-bold px-3 py-1 rounded-full">
                    -30% Travel Time
                  </div>
                </div>

                <div className="relative bg-slate-50 rounded-lg h-48 border border-slate-200 mb-4 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-50"></div>
                  <svg
                    width="100%"
                    height="100%"
                    className="absolute inset-0 z-10 p-4"
                    style={{ overflow: 'visible' }}
                  >
                    <path
                      d="M 40 120 C 80 120, 100 60, 150 50 S 200 130, 260 140 S 300 80, 340 70"
                      fill="none"
                      stroke="#9333ea"
                      strokeWidth="3"
                      strokeDasharray="6,6"
                      className="animate-pulse"
                    />
                    <circle cx="40" cy="120" r="6" fill="#10b981" stroke="#fff" strokeWidth="2" />
                    <circle cx="150" cy="50" r="6" fill="#9333ea" stroke="#fff" strokeWidth="2" />
                    <circle cx="260" cy="140" r="6" fill="#9333ea" stroke="#fff" strokeWidth="2" />
                    <circle cx="340" cy="70" r="6" fill="#ef4444" stroke="#fff" strokeWidth="2" />
                  </svg>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div className="text-xs text-slate-500 mb-1">Est. Time Saved</div>
                    <div className="text-xl font-bold text-[#44E559]">2h 15m</div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div className="text-xs text-slate-500 mb-1">Fuel Efficiency</div>
                    <div className="text-xl font-bold text-purple-600">+18%</div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  )
}

// =========================================
// 3. Problem Section
// =========================================
const Problem: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            The High Cost of Inefficient Routing
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Without data-driven territory design, companies leak margin every single day. Decisions
            based on guesswork lead to burnt-out teams and wasted operational budgets.
          </p>
        </FadeInSection>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <FadeInSection delay={100}>
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 h-full">
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-4 border border-red-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-red-400"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Wasted Drive Time</h3>
              <p className="text-slate-400 text-sm">
                Field teams spend up to 40% of their day stuck in traffic crossing paths with other
                reps due to overlapping territories.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={200}>
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 h-full">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 border border-orange-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-orange-400"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Unbalanced Workloads</h3>
              <p className="text-slate-400 text-sm">
                Some reps are overwhelmed with stops, while others finish early. Unfair territories
                kill morale and cause high turnover.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={300}>
            <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 h-full">
              <div className="w-12 h-12 bg-[#44E559]/10 rounded-lg flex items-center justify-center mb-4 border border-[#44E559]/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-[#44E559]"
                >
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Lost Revenue & ROI</h3>
              <p className="text-slate-400 text-sm">
                Every extra mile driven translates directly into wasted fuel, vehicle wear-and-tear,
                and fewer customer visits per day.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

// =========================================
// 4. Features Section
// =========================================
const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-purple-600 font-semibold tracking-wide uppercase text-sm mb-3">
              Enterprise Optimization Tool
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Built for Saudi Operations
            </h3>
            <p className="text-lg text-slate-600">
              S-Locator transforms raw customer addresses into strategically balanced regions and
              automated, turn-by-turn daily routes.
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <FadeInSection direction="left">
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-purple-600"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  Data-Driven Territory Balancing
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  Automatically divide your client base into fair, equitable territories based on
                  geographic density, expected revenue, or required visit frequency.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="right" delay={100}>
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-[#44E559]/10 border border-[#44E559]/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-[#3bc24d]"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Smart Route Optimization</h4>
                <p className="text-slate-600 leading-relaxed">
                  Our algorithm sequences multi-stop routes to minimize driving time. We account for
                  Saudi traffic patterns and physical distance to generate the perfect path.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="left" delay={200}>
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-purple-600"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Google Maps Integration</h4>
                <p className="text-slate-600 leading-relaxed">
                  Once routes are optimized, dispatch them directly. Your field reps receive a
                  seamless Google Maps navigation link containing their perfectly sequenced daily
                  stops.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="right" delay={300}>
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-amber-600"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Performance Tracking</h4>
                <p className="text-slate-600 leading-relaxed">
                  Monitor operational KPIs. Measure planned versus actual driving times to
                  continuously refine your territory mapping and boost total fleet productivity.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

// =========================================
// 5. Use Cases Section
// =========================================
const UseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Empowering Every Field Operation
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Designed for complex multi-city operations, S-Locator scales from a dozen sales reps
              to a fleet of hundreds of delivery vehicles.
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-4 gap-6">
          <FadeInSection delay={100}>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-purple-600 mb-4"
              >
                <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <h3 className="font-bold text-lg mb-2 text-slate-900">B2B Sales Teams</h3>
              <p className="text-sm text-slate-600">
                Ensure account managers spend their time talking to clients instead of navigating
                traffic.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-[#44E559] mb-4"
              >
                <rect width="16" height="16" x="4" y="4" rx="2" ry="2" />
                <rect width="6" height="6" x="9" y="9" rx="1" ry="1" />
                <path d="M9 15v2" />
                <path d="M9 7v2" />
                <path d="M15 9h2" />
                <path d="M7 9h2" />
              </svg>
              <h3 className="font-bold text-lg mb-2 text-slate-900">Logistics & Delivery</h3>
              <p className="text-sm text-slate-600">
                Generate dense, efficient daily drop-off routes for fleet drivers to lower fuel
                costs.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={300}>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-purple-600 mb-4"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              <h3 className="font-bold text-lg mb-2 text-slate-900">Maintenance Crews</h3>
              <p className="text-sm text-slate-600">
                Dispatch field engineers and service technicians logically based on geographic
                zones.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={400}>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-amber-600 mb-4"
              >
                <path d="M10 2v7.31" />
                <path d="M14 9.3V1.99" />
                <path d="M8.5 2h7" />
                <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
                <path d="M5.52 16h10.96" />
              </svg>
              <h3 className="font-bold text-lg mb-2 text-slate-900">Pharma & FMCG</h3>
              <p className="text-sm text-slate-600">
                Structure medical representative boundaries to maximize daily pharmacy and clinic
                visits.
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}

// =========================================
// 6. How It Works Section
// =========================================
const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Plan Your Fleet in 3 Simple Steps
            </h2>
          </div>
        </FadeInSection>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            <FadeInSection delay={100}>
              <div className="bg-white text-center">
                <div className="w-16 h-16 mx-auto bg-purple-50 border-2 border-purple-200 text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-sm">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Define Locations</h3>
                <p className="text-slate-600">
                  Import your customer addresses, clinic locations, or delivery stops into the
                  S-Locator system.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <div className="bg-white text-center">
                <div className="w-16 h-16 mx-auto bg-purple-50 border-2 border-purple-200 text-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-sm">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Generate Territories</h3>
                <p className="text-slate-600">
                  Specify your number of reps or vehicles. Our engine draws optimal, non-overlapping
                  borders instantly.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="bg-white text-center">
                <div className="w-16 h-16 mx-auto bg-[#44E559]/10 border-2 border-[#44E559]/30 text-[#3bc24d] rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-sm">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Dispatch Routes</h3>
                <p className="text-slate-600">
                  Export the perfectly sequenced driving directions straight to your team's
                  smartphones via Google Maps.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  )
}

// =========================================
// 7. Benefits Section
// =========================================
const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <div className="text-center px-4">
                <div className="text-4xl font-extrabold text-[#44E559] mb-2">30%</div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Less Travel Time</h4>
                <p className="text-sm text-slate-500">Average reduction in daily driving hours.</p>
              </div>

              <div className="text-center px-4 pt-8 md:pt-0">
                <div className="text-4xl font-extrabold text-purple-600 mb-2">+15%</div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">More Stops</h4>
                <p className="text-sm text-slate-500">
                  Increase in daily client visits and deliveries.
                </p>
              </div>

              <div className="text-center px-4 pt-8 md:pt-0">
                <div className="text-4xl font-extrabold text-amber-500 mb-2">$$$</div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Lower Fuel Costs</h4>
                <p className="text-sm text-slate-500">Direct operational savings per vehicle.</p>
              </div>

              <div className="text-center px-4 pt-8 md:pt-0">
                <div className="text-4xl font-extrabold text-purple-600 mb-2">100%</div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Fair Distribution</h4>
                <p className="text-sm text-slate-500">Equitable workload balancing for reps.</p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}

// =========================================
// 8. CTA Section
// =========================================
const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-purple-700 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-purple-600 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-purple-800 blur-3xl opacity-50"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeInSection>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Stop Wasting Time on the Road
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">
            Take control of your field operations. Start planning smarter, fairer, and faster
            territories today.
          </p>
          <a
            href="https://s-locator.northernacs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-[#44E559] text-slate-900 hover:bg-[#3bc24d] px-10 py-4 rounded-md font-bold text-lg items-center justify-center gap-2 mx-auto transition-all shadow-xl shadow-slate-900/10 hover:-translate-y-1"
          >
            Start Planning Smarter Today
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </FadeInSection>
      </div>
    </section>
  )
}

// =========================================
// 9. Custom Footer for Landing Page
// =========================================
const LandingFooter: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            {/* تم تكبير اللوغو هنا أيضاً وتصحيح المسار */}
            <img
              src="/assets/images/logo s-loc-01.png"
              alt="S-Locator Logo"
              className="h-14 md:h-16 w-auto grayscale brightness-200 opacity-80 object-contain"
            />
          </div>

          <div className="text-sm">
            &copy; {currentYear} S-Locator | by{' '}
            <a
              href="https://northernacs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-400 transition-colors font-medium"
            >
              Northern Analytics
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// =========================================
// MAIN EXPORT (The Landing Page)
// =========================================
const SLocatorPage: React.FC = () => {
  // التمرير لأعلى الصفحة عند فتحها
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-200">
      <LandingNavbar />
      <Hero />
      <Problem />
      <Features />
      <UseCases />
      <HowItWorks />
      <Benefits />
      <CTA />
      <LandingFooter />
    </div>
  )
}

export default SLocatorPage
