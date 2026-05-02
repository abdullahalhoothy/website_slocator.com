import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  // جلب اللغة الحالية عند تحميل الصفحة بشكل مباشر ونظيف
  const lang = localStorage.getItem('site_lang') || 'en'
  const isAr = lang === 'ar'

  // دالة تغيير اللغة
  const changeLanguage = (newLang: string) => {
    localStorage.setItem('site_lang', newLang)
    window.location.reload() // تحديث الصفحة لتطبيق اللغة الجديدة
  }

  const navLinks = [
    {
      name: isAr ? 'احصل على التقرير' : 'Get Report',
      href: 'https://s-locator.northernacs.com/landing?',
    },
    { name: isAr ? 'تسجيل' : 'Signup', href: 'https://s-locator.northernacs.com/sign-up' },
    { name: isAr ? 'الرئيسية' : 'Home', href: '/', active: true },
    { name: isAr ? 'من نحن' : 'About', href: '/about' },
  ]

  const solutionsLinks = [
    {
      name: isAr ? 'محدد نقاط الاهتمام (POI)' : 'Point of Interest (POI) Locator',
      href: '/solutions/point-of-interest-locator',
    },
    {
      name: isAr ? 'ذكاء الكثافة السكانية' : 'Area Population Density',
      href: '/solutions/area-population-density-intelligence',
    },
    {
      name: isAr ? 'ذكاء تسعير العقارات' : 'Real Estate Pricing Intelligence',
      href: '/solutions/real-estate-area-pricing-intelligence',
    },
    {
      name: isAr ? 'ذكاء بيانات الحركة المرورية' : 'Road Traffic Data Intelligence',
      href: '/solutions/road-traffic-data-intelligence',
    },
    {
      name: isAr ? 'الذكاء البيئي' : 'Environment Intelligence',
      href: '/solutions/environment-intelligence',
    },
    {
      name: isAr ? 'ذكاء مستوى الدخل' : 'Area Income Intelligence',
      href: '/solutions/area-income-intelligence',
    },
    {
      name: isAr ? 'ذكاء مواقع البنية التحتية' : 'Infrastructure Location Intelligence',
      href: '/solutions/infrastructure-location-intelligence',
    },
    {
      name: isAr ? 'ذكاء استخدام الإنترنت' : 'Area Internet Usage Intelligence',
      href: '/solutions/area-internet-usage-intelligence',
    },
  ]

  return (
    <nav
      className="bg-[#0a0f1c] text-white border-b border-white/5 sticky top-0 z-50"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="hover:opacity-80 transition-opacity">
              <img
                src="https://www.s-locator.com/wp-content/uploads/2024/10/cropped-S-LOC-FF-02-2-scaled-208x74.png"
                alt="S-LOC Logo"
                className="h-10 w-auto object-contain"
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
                {isAr ? 'الحلول' : 'Solutions'}{' '}
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
              {isAr ? 'تواصل معنا' : 'Contact'}
            </a>
            <a
              href="/blog"
              className="text-[15px] font-medium text-white hover:text-[#9b51e0] transition-colors"
            >
              {isAr ? 'المدونة' : 'Blog'}
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
            {isAr ? 'الحلول' : 'Solutions'}
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
            {isAr ? 'تواصل معنا' : 'Contact'}
          </a>
          <a
            href="/blog"
            className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
          >
            {isAr ? 'المدونة' : 'Blog'}
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
