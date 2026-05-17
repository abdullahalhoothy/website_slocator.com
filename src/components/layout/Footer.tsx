import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const Footer: React.FC = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300 mt-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-12 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="inline-flex items-center mb-4">
            <img
              src="/assets/images/logo s-loc-01.png"
              alt={t('footer.logoAlt', 'S-Locator')}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-md">
            {t(
              'footer.tagline',
              'Smart route planning and territory optimization for field sales teams.',
            )}
          </p>
        </div>
        <nav aria-label={t('footer.productsNav', 'Products')}>
          <h3 className="text-white text-sm font-semibold mb-3">
            {t('footer.products', 'Products')}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/sales-route-planner" className="hover:text-white">
                {t('header.nav.salesRoutePlanner', 'Sales Route Planner')}
              </Link>
            </li>
            <li>
              <Link to="/territory-planning" className="hover:text-white">
                {t('header.nav.territoryOptimization', 'Territory Optimization')}
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-white">
                {t('header.nav.pricing', 'Pricing')}
              </Link>
            </li>
          </ul>
        </nav>
        <nav aria-label={t('footer.companyNav', 'Company')}>
          <h3 className="text-white text-sm font-semibold mb-3">
            {t('footer.company', 'Company')}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/customers" className="hover:text-white">
                {t('header.nav.customers', 'Customers')}
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white">
                {t('header.nav.blog', 'Blog')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                {t('header.nav.contact', 'Contact')}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl py-4 text-xs text-slate-500 text-center">
          © {year} S-Locator. {t('footer.rights', 'All rights reserved.')}
        </div>
      </div>
    </footer>
  )
}
