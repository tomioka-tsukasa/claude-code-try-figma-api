export const ROOT = '/'

export const BASE_ROOT = '/'

export const SLUGS = {
  TOP: 'top',
  FIGMA_TEST_01: 'figma-test-01',
} as const

export const DM = {
  TOP: ROOT,
  FIGMA_TEST_01: `${ROOT}${SLUGS.FIGMA_TEST_01}`,
} as const

export const ROUTES_META = {
  TOP: {
    meta: {
      title: 'meta title',
      description: 'meta description',
      canonicalUrl: 'meta canonicalUrl',
      ogType: 'website',
      ogTitle: 'meta title',
      ogSiteName: 'meta title',
      ogDescription: 'meta ogDescription',
      twitterCard: 'summary_large_image',
      ogImage: '/'
    }
  },
} as const
