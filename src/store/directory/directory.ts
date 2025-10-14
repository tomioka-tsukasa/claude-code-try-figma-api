export const ROOT = '/'

export const BASE_ROOT = '/'

export const SLUGS = {
  TOP: 'top',
  MORI_CORP_TEST_01: 'mori-corp-test-01',
  MORI_CORP_TEST_02: 'mori-corp-test-02',
  MORI_CORP_TEST_03: 'mori-corp-test-03',
  MORI_CORP_TEST_04: 'mori-corp-test-04',
  MORI_CORP_TEST_05: 'mori-corp-test-05',
  FIGMA_COMPONENTS: 'figma-components',
  MORI_CORP_COMP: 'mori-corp',
  FUJIGOTEMBA_DISTILLERY_COMP: 'fujigotemba-distillery',
  FIGMA_TEMPLATE_01: 'figma-template-01',
} as const

export const DM = {
  TOP: ROOT,
  MORI_CORP_TEST_01: `${ROOT}${SLUGS.MORI_CORP_TEST_01}`,
  MORI_CORP_TEST_02: `${ROOT}${SLUGS.MORI_CORP_TEST_02}`,
  MORI_CORP_TEST_03: `${ROOT}${SLUGS.MORI_CORP_TEST_03}`,
  MORI_CORP_TEST_04: `${ROOT}${SLUGS.MORI_CORP_TEST_04}`,
  MORI_CORP_TEST_05: `${ROOT}${SLUGS.MORI_CORP_TEST_05}`,
  MORI_CORP_COMP: `${ROOT}${SLUGS.FIGMA_COMPONENTS}/${SLUGS.MORI_CORP_COMP}`,
  FUJIGOTEMBA_DISTILLERY_COMP: `${ROOT}${SLUGS.FIGMA_COMPONENTS}/${SLUGS.FUJIGOTEMBA_DISTILLERY_COMP}`,
  FIGMA_TEMPLATE_01: `${ROOT}${SLUGS.FIGMA_COMPONENTS}/${SLUGS.FIGMA_TEMPLATE_01}`,
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
  MORI_CORP_TEST_05: {
    meta: {
      title: '森ビル コンテンツライブラリ - Test 05',
      description: 'ムービー、グラフィック広告、ラジオ、出版物など森ビルの多様なコンテンツを紹介するページ',
      canonicalUrl: '/mori-corp-test-05',
      ogType: 'website',
      ogTitle: '森ビル コンテンツライブラリ - Test 05',
      ogSiteName: '森ビル',
      ogDescription: 'ムービー、グラフィック広告、ラジオ、出版物など森ビルの多様なコンテンツを紹介するページ',
      twitterCard: 'summary_large_image',
      ogImage: '/'
    }
  },
  FIGMA_COMPONENTS_MORI_CORP: {
    meta: {
      title: 'MoriCorp Components - 確認ページ',
      description: 'MoriCorp関連のFigmaコンポーネント確認ページ',
      canonicalUrl: '/figma-components/mori-corp',
      ogType: 'website',
      ogTitle: 'MoriCorp Components - 確認ページ',
      ogSiteName: 'MoriCorp Components',
      ogDescription: 'MoriCorp関連のFigmaコンポーネント確認ページ',
      twitterCard: 'summary_large_image',
      ogImage: '/'
    }
  },
  FIGMA_COMPONENTS_FUJIGOTEMBA_DISTILLERY: {
    meta: {
      title: 'Fujigotemba Distillery Components - 確認ページ',
      description: '富士御殿場蒸溜所関連のFigmaコンポーネント確認ページ',
      canonicalUrl: '/figma-components/fujigotemba-distillery',
      ogType: 'website',
      ogTitle: 'Fujigotemba Distillery Components - 確認ページ',
      ogSiteName: 'Fujigotemba Distillery Components',
      ogDescription: '富士御殿場蒸溜所関連のFigmaコンポーネント確認ページ',
      twitterCard: 'summary_large_image',
      ogImage: '/'
    }
  },
  FIGMA_COMPONENTS_TEST: {
    meta: {
      title: 'Figma Components Test - 確認ページ',
      description: 'Figmaから実装したコンポーネント一覧の確認ページ',
      canonicalUrl: '/figma-components-test',
      ogType: 'website',
      ogTitle: 'Figma Components Test - 確認ページ',
      ogSiteName: 'Figma Components Test',
      ogDescription: 'Figmaから実装したコンポーネント一覧の確認ページ',
      twitterCard: 'summary_large_image',
      ogImage: '/'
    }
  }
} as const
