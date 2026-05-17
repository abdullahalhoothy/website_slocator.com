import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Database, Map, Network, MapPin, Route as RouteIcon, TrendingUp, FileText } from 'lucide-react'

const BASE_DIAGRAM_WIDTH = 1100
const BASE_DIAGRAM_HEIGHT = 520

const scrollToDetails = (targetId: string) => {
  const element = document.getElementById(targetId)
  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

export const HeroDiagram: React.FC = () => {
  const { t, i18n } = useTranslation('home')
  const isAr = i18n.language === 'ar'

  const diagramContainerRef = useRef<HTMLDivElement>(null)
  const [diagramScale, setDiagramScale] = useState(1)

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        const containerWidth = entry.contentRect.width
        const padding = 40
        if (containerWidth < BASE_DIAGRAM_WIDTH + padding) {
          setDiagramScale((containerWidth - padding) / BASE_DIAGRAM_WIDTH)
        } else {
          setDiagramScale(1)
        }
      }
    })
    if (diagramContainerRef.current) observer.observe(diagramContainerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative pt-24 pb-24 lg:pt-32 lg:pb-32 lg:min-h-[100vh] flex items-center bg-[#f8fafc] overflow-hidden border-b border-gray-100">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-[#e0f2fe] to-[#eff6ff] blur-[100px] opacity-80 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#dcfce7] to-[#f0fdf4] blur-[100px] opacity-80 pointer-events-none"></div>

      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-stretch">
          <div
            className={`flex flex-col justify-center items-start text-start mt-4 lg:mt-0 py-10 w-full lg:w-[35%] shrink-0 ${
              isAr ? 'lg:pl-8' : 'lg:pr-8'
            }`}
          >
            <div className="mb-8">
              <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-2.5 md:px-10 md:py-4 flex items-center justify-center gap-4 md:gap-8 shadow-lg w-max">
                <span className="text-[#475569] font-black tracking-widest text-[9px] md:text-[11px] uppercase mt-0.5">
                  {t('home.poweredBy')}
                </span>
                <div className="w-[2px] h-6 md:h-10 bg-gray-300"></div>
                <img
                  src="/assets/images/cropd_V1.png"
                  alt="Northern Analytics"
                  className="h-10 md:h-14 w-auto object-contain"
                />
              </div>
            </div>

            <h1 className="text-[#0f172a] text-[40px] md:text-[50px] lg:text-[65px] font-black tracking-tight mb-4 drop-shadow-sm leading-none">
              <span dir="ltr" className="inline-flex items-start">
                S-Locator
                <sup className="text-xl md:text-2xl lg:text-3xl text-[#38e54d] ml-1 mt-3">
                  &reg;
                </sup>
              </span>
            </h1>

            <h2 className="text-[#334155] text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-snug">
              {t('home.heroNewSub')}
            </h2>

            <p className="text-[#475569] text-base md:text-lg leading-relaxed mb-10 max-w-xl font-medium">
              {t('home.heroNewDesc')}
            </p>

            <a
              href="https://s-locator.northernacs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#9b51e0] hover:bg-[#8645c4] text-white text-base md:text-lg font-bold py-4 px-10 rounded-full shadow-[0_8px_20px_rgba(155,81,224,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(155,81,224,0.35)] w-full sm:w-auto"
            >
              {t('home.btnGetStartedNow')}
            </a>
          </div>

          <div
            id="main-diagram"
            ref={diagramContainerRef}
            className="relative w-full lg:w-[65%] h-full min-h-[500px] lg:min-h-[600px] flex justify-center items-center scroll-mt-24 overflow-hidden"
          >
            <div
              className="relative transition-all duration-100 ease-out flex justify-center"
              style={{ height: `${BASE_DIAGRAM_HEIGHT * diagramScale}px`, width: '100%' }}
            >
              <div
                className="absolute top-0 flex flex-col items-center origin-top transition-transform duration-100 ease-out"
                style={{
                  width: `${BASE_DIAGRAM_WIDTH}px`,
                  transform: `scale(${diagramScale})`,
                }}
              >
                <div className="bg-white border-2 border-[#2b1055] text-[#2b1055] text-2xl font-extrabold py-4 px-12 rounded-full shadow-md flex items-center gap-3 relative z-20">
                  <Network size={28} />
                  S-Locator Core
                </div>

                <div className="w-[2px] h-10 bg-[#cbd5e1] z-0"></div>

                <div className="relative w-full h-[2px] z-0">
                  <div className="absolute top-0 left-[165px] right-[165px] h-[2px] bg-[#cbd5e1]"></div>
                </div>

                <div className="flex justify-between items-start w-full relative z-20 mt-0">
                  <div className="w-[330px] shrink-0 flex flex-col items-center relative">
                    <div className="w-[2px] h-10 bg-[#cbd5e1] z-0"></div>
                    <button
                      type="button"
                      onClick={() => scrollToDetails('card-data')}
                      className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm flex flex-col items-center justify-center text-center border-t-4 border-t-[#00628e] w-[310px] h-[140px] cursor-pointer hover:-translate-y-2 transition-transform"
                    >
                      <div className="bg-blue-50 text-[#00628e] p-3 rounded-full mb-3">
                        <Database size={30} />
                      </div>
                      <h3 className="font-bold text-gray-800 text-[16px] leading-tight px-1">
                        Trust Data &amp; Intelligence Service
                      </h3>
                    </button>

                    <div className="w-[2px] h-[72px] bg-[#cbd5e1] z-0"></div>
                    <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm w-[310px] flex justify-center items-center h-[120px]">
                      <div className="grid grid-cols-3 gap-5 opacity-80 mix-blend-multiply w-full justify-items-center items-center">
                        <img src="/assets/images/general_authority_logo.svg" className="max-h-7" alt="GASTAT" />
                        <img src="/assets/images/REGA_LOGO.svg" className="max-h-6" alt="REGA" />
                        <img src="/assets/images/hrdf_logo.svg" className="max-h-7" alt="HRDF" />
                        <img src="/assets/images/sakany_logo.svg" className="max-h-6" alt="Sakany" />
                        <img src="/assets/images/Ministry_of_Justice_Logo.svg" className="max-h-7" alt="MOJ" />
                        <img src="/assets/images/google.png" className="max-h-6" alt="Google" />
                      </div>
                    </div>
                  </div>

                  <div className="w-[330px] shrink-0 flex flex-col items-center relative">
                    <div className="w-[2px] h-10 bg-[#cbd5e1] z-0"></div>
                    <button
                      type="button"
                      onClick={() => scrollToDetails('card-platform')}
                      className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm flex flex-col items-center justify-center text-center border-t-4 border-t-[#38e54d] w-[310px] h-[140px] cursor-pointer hover:-translate-y-2 transition-transform"
                    >
                      <div className="bg-green-50 text-[#2eaa3f] p-3 rounded-full mb-3">
                        <Map size={30} />
                      </div>
                      <h3 className="font-bold text-gray-800 text-[16px] leading-tight px-1">
                        Territory Optimization &amp; Routing
                      </h3>
                    </button>

                    <div className="w-[2px] h-[30px] bg-[#cbd5e1] z-0"></div>
                    <div className="relative w-[165px] h-[2px] z-0 bg-[#cbd5e1]"></div>

                    <div className="flex justify-between w-[310px] mt-0">
                      <div className="w-[145px] shrink-0 flex flex-col items-center">
                        <div className="w-[2px] h-[40px] bg-[#cbd5e1] z-0"></div>
                        <div className="bg-white border border-gray-100 p-3 rounded-xl shadow-sm flex flex-col items-center justify-center text-center w-full h-[120px] transition-transform hover:-translate-y-2">
                          <MapPin size={28} className="text-[#2eaa3f] mb-3" />
                          <span className="text-[14px] font-bold text-gray-700 leading-tight">
                            Territory
                            <br />
                            Optimization
                          </span>
                        </div>
                      </div>
                      <div className="w-[145px] shrink-0 flex flex-col items-center">
                        <div className="w-[2px] h-[40px] bg-[#cbd5e1] z-0"></div>
                        <div className="bg-white border border-gray-100 p-3 rounded-xl shadow-sm flex flex-col items-center justify-center text-center w-full h-[120px] transition-transform hover:-translate-y-2">
                          <RouteIcon size={28} className="text-[#2eaa3f] mb-3" />
                          <span className="text-[14px] font-bold text-gray-700 leading-tight">
                            Route
                            <br />
                            Planning
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[330px] shrink-0 flex flex-col items-center relative">
                    <div className="w-[2px] h-10 bg-[#cbd5e1] z-0"></div>
                    <button
                      type="button"
                      onClick={() => scrollToDetails('card-report')}
                      className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm flex flex-col items-center justify-center text-center border-t-4 border-t-[#9b51e0] w-[310px] h-[140px] cursor-pointer hover:-translate-y-2 transition-transform"
                    >
                      <div className="bg-purple-50 text-[#9b51e0] p-3 rounded-full mb-3">
                        <FileText size={30} />
                      </div>
                      <h3 className="font-bold text-gray-800 text-[16px] leading-tight px-1">
                        Physical Expansion Report
                      </h3>
                    </button>

                    <div className="w-[2px] h-[30px] bg-[#cbd5e1] z-0"></div>
                    <div className="relative w-[165px] h-[2px] z-0 bg-[#cbd5e1]"></div>

                    <div className="flex justify-between w-[310px] mt-0">
                      <div className="w-[145px] shrink-0 flex flex-col items-center">
                        <div className="w-[2px] h-[40px] bg-[#cbd5e1] z-0"></div>
                        <div className="bg-white border border-gray-100 p-3 rounded-xl shadow-sm flex flex-col items-center justify-center text-center w-full h-[120px] transition-transform hover:-translate-y-2">
                          <TrendingUp size={28} className="text-[#9b51e0] mb-3" />
                          <span className="text-[14px] font-bold text-gray-700 leading-tight">
                            Evaluate
                            <br />
                            Current Location
                          </span>
                        </div>
                      </div>
                      <div className="w-[145px] shrink-0 flex flex-col items-center">
                        <div className="w-[2px] h-[40px] bg-[#cbd5e1] z-0"></div>
                        <div className="bg-white border border-gray-100 p-3 rounded-xl shadow-sm flex flex-col items-center justify-center text-center w-full h-[120px] transition-transform hover:-translate-y-2">
                          <FileText size={28} className="text-[#9b51e0] mb-3" />
                          <span className="text-[14px] font-bold text-gray-700 leading-tight">
                            Full City
                            <br />
                            Expansion Report
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
