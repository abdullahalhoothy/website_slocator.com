import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  // ربط القائمة بمكتبة الترجمة لإرضاء عمر 😉
  const { t, i18n } = useTranslation()
  const isAr = i18n.language === 'ar'

  const changeLanguage = (newLang: string) => {
    localStorage.setItem('site_lang', newLang)
    i18n.changeLanguage(newLang)
    window.location.reload()
  }

  const navLinks = [
    {
      name: t('Get Report'),
      href: 'https://s-locator.northernacs.com/landing?',
    },
    { name: t('Signup'), href: 'https://s-locator.northernacs.com/sign-up' },
    { name: t('Home'), href: '/', active: true },
    { name: t('About'), href: '/about' },
  ]

  const solutionsLinks = [
    { name: t('srv1Title'), href: '/solutions/point-of-interest-locator' },
    { name: t('srv2Title'), href: '/solutions/area-population-density-intelligence' },
    { name: t('srv3Title'), href: '/solutions/real-estate-area-pricing-intelligence' },
    { name: t('srv4Title'), href: '/solutions/road-traffic-data-intelligence' },
    { name: t('srv5Title'), href: '/solutions/environment-intelligence' },
    { name: t('srv6Title'), href: '/solutions/area-income-intelligence' },
    { name: t('srv7Title'), href: '/solutions/infrastructure-location-intelligence' },
    { name: t('srv8Title'), href: '/solutions/area-internet-usage-intelligence' },
  ]

  return (
    <nav
      className="bg-[#0a0f1c] text-white border-b border-white/5 sticky top-0 z-50"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center h-full">
            <a href="/" className="hover:opacity-80 transition-opacity flex items-center h-full">
              <img
                src="/assets/images/logo.png"
                alt="S-Locator"
                className="w-[130px] sm:w-[160px] md:w-[190px] lg:w-[220px] h-auto max-h-[70px] object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-[15px] font-medium transition-colors hover:text-[#9b51e0] ${link.active ? 'text-[#9b51e0]' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-[15px] font-medium text-white hover:text-[#9b51e0] transition-colors py-8"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                {t('Solutions')}
                <ChevronDown size={16} className={isAr ? 'mr-1' : 'ml-1'} />
              </button>

              <div
                className={`absolute top-full ${isAr ? 'right-0' : 'left-0'} w-80 bg-[#110222] border border-white/10 rounded-lg shadow-xl overflow-hidden transition-all duration-200 ${isSolutionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                {solutionsLinks.map((subLink, idx) => (
                  <a
                    key={idx}
                    href={subLink.href}
                    className={`block px-4 py-3 text-sm text-gray-300 hover:bg-[#9b51e0]/10 hover:text-[#38e54d] transition-colors ${isAr ? 'text-right' : 'text-left'}`}
                  >
                    {subLink.name}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/contact"
              className="text-[15px] font-medium text-white hover:text-[#9b51e0] transition-colors"
            >
              {t('Contact')}
            </a>
            <a
              href="/blog"
              className="text-[15px] font-medium text-white hover:text-[#9b51e0] transition-colors"
            >
              {t('Blog')}
            </a>

            {/* Language Switcher */}
            <div
              className={`relative group px-4 ${isAr ? 'border-r border-white/20' : 'border-l border-white/20'}`}
            >
              <button
                className="flex items-center text-[15px] font-medium text-white hover:text-[#9b51e0] transition-colors py-8"
                onMouseEnter={() => setIsLangOpen(true)}
                onMouseLeave={() => setIsLangOpen(false)}
              >
                {isAr ? (
                  <>
                    <img
                      src="https://www.s-locator.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/sa.svg"
                      alt="AR"
                      className="w-4 h-4 ml-2 rounded-sm"
                    />{' '}
                    العربية
                  </>
                ) : (
                  <>
                    <img
                      src="https://www.s-locator.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.svg"
                      alt="EN"
                      className="w-4 h-4 mr-2 rounded-sm"
                    />{' '}
                    English
                  </>
                )}
                <ChevronDown size={16} className={isAr ? 'mr-1' : 'ml-1'} />
              </button>

              <div
                className={`absolute top-full ${isAr ? 'left-0' : 'right-0'} w-32 bg-[#110222] border border-white/10 rounded-lg shadow-xl overflow-hidden transition-all duration-200 ${isLangOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}
                onMouseEnter={() => setIsLangOpen(true)}
                onMouseLeave={() => setIsLangOpen(false)}
              >
                <button
                  onClick={() => changeLanguage('en')}
                  className="w-full flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-[#9b51e0]/10 hover:text-white transition-colors"
                >
                  <img
                    src="https://www.s-locator.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.svg"
                    alt="EN"
                    className="w-4 h-4 mr-2 rounded-sm"
                  />{' '}
                  English
                </button>
                <button
                  onClick={() => changeLanguage('ar')}
                  className="w-full flex items-center px-4 py-3 text-sm text-gray-300 hover:bg-[#9b51e0]/10 hover:text-white transition-colors"
                >
                  <img
                    src="https://www.s-locator.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/sa.svg"
                    alt="AR"
                    className="w-4 h-4 mr-2 rounded-sm"
                  />{' '}
                  العربية
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#38e54d] focus:outline-none p-2"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[800px] border-b border-white/10' : 'max-h-0 overflow-hidden'}`}
      >
        <div className="px-4 pt-2 pb-6 bg-[#0a0f1c] space-y-1">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`block px-3 py-3 rounded-md text-base font-medium ${link.active ? 'text-[#9b51e0] bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
            >
              {link.name}
            </a>
          ))}

          <div className="px-3 py-3 text-base font-medium text-gray-300">
            {t('Solutions')}
            <div className={`mt-2 space-y-2 px-4 py-2 bg-white/5 rounded-md`}>
              {solutionsLinks.map((subLink, idx) => (
                <a
                  key={idx}
                  href={subLink.href}
                  className="block py-2 text-sm text-gray-400 hover:text-[#38e54d]"
                >
                  {subLink.name}
                </a>
              ))}
            </div>
          </div>

          <a
            href="/contact"
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
          >
            {t('Contact')}
          </a>
          <a
            href="/blog"
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
          >
            {t('Blog')}
          </a>

          <div className="pt-4 mt-2 border-t border-white/10 flex gap-2">
            <button
              onClick={() => changeLanguage('en')}
              className="flex-1 flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white bg-white/5 rounded-md"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('ar')}
              className="flex-1 flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white bg-white/5 rounded-md"
            >
              AR
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
