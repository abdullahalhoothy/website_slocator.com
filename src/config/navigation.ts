export interface NavItem {
  id: string
  translationKey: string
  path?: string
  hasSubmenu?: boolean
  isHeading?: boolean
  icon?: string
  submenu?: NavItem[]
}

export const MAIN_NAVIGATION: NavItem[] = [
  {
    id: 'products',
    translationKey: 'header.nav.products',
    hasSubmenu: true,
    submenu: [
      {
        id: 'heading-route-planner',
        translationKey: 'header.nav.headingRoutePlanner',
        isHeading: true,
        icon: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238A2BE2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21'/%3E%3Cline x1='9' y1='3' x2='9' y2='18'/%3E%3Cline x1='15' y1='6' x2='15' y2='21'/%3E%3C/svg%3E",
      },
      {
        id: 'sales-route-planner',
        translationKey: 'header.nav.salesRoutePlanner',
        path: '/sales-route-planner',
      },
      {
        id: 'features',
        translationKey: 'header.nav.features',
        path: '/features',
      },
      {
        id: 'faq-route-planner',
        translationKey: 'header.nav.faq',
        path: '/route-planner/faq',
      },

      {
        id: 'heading-territory-planning',
        translationKey: 'header.nav.headingTerritoryOpt',
        isHeading: true,
        icon: "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23489E46' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolygon points='12 2 2 7 12 12 22 7 12 2'/%3E%3Cpolyline points='2 17 12 22 22 17'/%3E%3Cpolyline points='2 12 12 17 22 12'/%3E%3C/svg%3E",
      },
      {
        id: 'territory-planning',
        translationKey: 'header.nav.territoryOptimization',
        path: '/territory-planning',
      },
      {
        id: 'to-advantages',
        translationKey: 'header.nav.toAdvantages',
        path: '/territory-planning/comparison',
      },
      {
        id: 'to-cost-savings',
        translationKey: 'header.nav.toCostSavings',
        path: '/territory-planning/cost-savings',
      },
      {
        id: 'faq-territory-planning',
        translationKey: 'header.nav.faqTerritoryOpt',
        path: '/territory-planning/faq',
      },
    ],
  },

  {
    id: 'pricing',
    translationKey: 'header.nav.pricing',
    hasSubmenu: true,
    submenu: [
      {
        id: 'pricing-overview',
        translationKey: 'header.nav.pricing',
        path: '/pricing',
      },
      {
        id: 'roi-calculator',
        translationKey: 'header.nav.roiCalculator',
        path: '/roi',
      },
    ],
  },

  {
    id: 'integrations',
    translationKey: 'header.nav.integrations',
    path: '/integrations',
    hasSubmenu: false,
  },
  { id: 'blog', translationKey: 'header.nav.blog', path: '/blog', hasSubmenu: false },
  { id: 'customers', translationKey: 'header.nav.customers', path: '/customers' },
  { id: 'contact', translationKey: 'header.nav.contact', path: '/contact' },
]
