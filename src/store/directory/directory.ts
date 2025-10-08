export const ROOT = '/'

export const BASE_ROOT = '/'

export const SLUGS = {
  TOP: 'top',
  MORI_CORP_TEST_01: 'mori-corp-test-01',
  MORI_CORP_TEST_02: 'mori-corp-test-02',
  MORI_CORP_TEST_03: 'mori-corp-test-03',
  MORI_CORP_TEST_04: 'mori-corp-test-04',
} as const

export const DM = {
  TOP: ROOT,
  MORI_CORP_TEST_01: `${ROOT}${SLUGS.MORI_CORP_TEST_01}`,
  MORI_CORP_TEST_02: `${ROOT}${SLUGS.MORI_CORP_TEST_02}`,
  MORI_CORP_TEST_03: `${ROOT}${SLUGS.MORI_CORP_TEST_03}`,
  MORI_CORP_TEST_04: `${ROOT}${SLUGS.MORI_CORP_TEST_04}`,
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
  }
} as const
