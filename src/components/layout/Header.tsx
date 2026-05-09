import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { MAIN_NAVIGATION } from '../../config/navigation';

const SubMenuItem = ({ subItem, t }: { subItem: any; t: any }) => (
  <li className={subItem.isHeading ? "mb-2 mt-1 first:mt-0" : ""}>
    {subItem.isHeading ? (
      <div className="flex items-center gap-2 pb-3 mb-1 border-b border-slate-100">
        {subItem.icon && <img src={subItem.icon} alt="" className="w-5 h-5 object-contain" />}
        <span className="text-[15px] font-semibold text-slate-800">{t(subItem.translationKey)}</span>
      </div>
    ) : (
      <Link 
        to={subItem.path} 
        className="block py-2.5 text-[14.5px] text-[#74a1bb] hover:text-[#00609c] hover:font-medium transition-colors"
      >
        {t(subItem.translationKey)}
      </Link>
    )}
  </li>
);

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation('landing');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isRTL = i18n.dir() === 'rtl';

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between py-4">
          
          <Link to="/" className="flex items-center shrink-0">
            <img 
              src="/assets/images/logo s-loc-01.png"
              alt="S-Locator" 
              className="h-20 md:h-28 w-auto object-contain" 
            />
          </Link>

          <div className="hidden lg:flex flex-col items-end gap-2">
            {/* Top mini-nav */}
            <div className="flex items-center gap-5 text-[13px] font-medium text-slate-500 mb-1">
              <Link to="/services" className="hover:text-[#00609c] transition-colors">
                {t('header.nav.services', 'Services')}
              </Link>
              

              <div className={`flex items-center gap-3 border-slate-200 ${isRTL ? 'mr-2 pr-4 border-r' : 'ml-2 pl-4 border-l'}`}>
                <a href="https://s-locator.northernacs.com/" className="flex items-center gap-1.5 text-slate-600 border border-slate-300 px-3 py-1 rounded hover:border-[#00609c] hover:text-[#00609c] transition-all">
                  <User className="w-3.5 h-3.5" /> {t('header.login', 'Login')}
                </a>
                <a href="https://s-locator.northernacs.com/" className="bg-[#00609c] text-white px-5 py-1.5 rounded font-medium hover:bg-[#004d7d] transition-all shadow-sm">
                  {t('header.startNow', 'Start now')}
                </a>
              </div>
            </div>

            {/* Main Navigation */}
            <nav>
              <ul className="flex items-center gap-8">
                {MAIN_NAVIGATION.map((item) => (
                  <li key={item.id} className="group relative">
                    <Link to={item.path} className="flex items-center gap-1 text-[15px] font-medium text-slate-600 group-hover:text-[#00609c] transition-colors py-2">
                      {t(item.translationKey)}
                      {item.hasSubmenu && <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00609c] transition-transform duration-300 group-hover:rotate-180" />}
                    </Link>

                    {/* Mega Menu Dropdown */}
                    {item.hasSubmenu && item.submenu && (
                      <div className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 translate-y-2 group-hover:translate-y-0`}>
                        <div className="bg-white border border-slate-100 shadow-xl rounded-xl p-5 flex">
                          
                          {item.id === 'products' ? (
                            <div className="flex gap-8">
                              <ul className="flex flex-col w-[260px]">
                                {item.submenu.slice(0, 4).map((subItem: any) => (
                                  <SubMenuItem key={subItem.id} subItem={subItem} t={t} />
                                ))}
                              </ul>
                              <ul className={`flex flex-col w-[260px] border-slate-100 ${isRTL ? 'border-r pr-8' : 'border-l pl-8'}`}>
                                {item.submenu.slice(4).map((subItem: any) => (
                                  <SubMenuItem key={subItem.id} subItem={subItem} t={t} />
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <ul className="flex flex-col w-[240px]">
                              {item.submenu.map((subItem: any) => (
                                <SubMenuItem key={subItem.id} subItem={subItem} t={t} />
                              ))}
                            </ul>
                          )}
                          
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <button className="lg:hidden p-2 text-slate-600 hover:text-[#00609c]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
};