export interface ProductCardConfig {
  id: string
  translationKey: string
  imagePath: string
  ctaPath: string
  moreDetailsPath: string
  theme: 'blue' | 'indigo'
}

export const PRODUCTS_CONFIG: ProductCardConfig[] = [
  {
    id: 'route-planner',
    translationKey: 'products.routePlanner',
    imagePath: '/assets/images/route-planner-thumb.webp',
    ctaPath: '/try',
    moreDetailsPath: '/sales-route-planner',
    theme: 'blue',
  },
  {
    id: 'territory-planning',
    translationKey: 'products.territoryOptimization',
    imagePath: '/assets/images/territory-optimization-thumb.webp',
    ctaPath: '/territory-planning/demo',
    moreDetailsPath: '/territory-planning',
    theme: 'indigo',
  },
]
