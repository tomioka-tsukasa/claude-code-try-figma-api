import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import { BASE_ROOT } from './src/store/directory/directory'
import Unfonts from 'unplugin-fonts/vite'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// デリバリービルドかどうかを判定（デバッグページを除外するかどうか）
const isDeliveryBuild = process.env.BUILD_TARGET === 'delivery'

// 基本のルート
const baseRoutes = [
  '', // ルートディレクトリ (/)
]

// // ルートキーとルートパスのマッピング
// const ROUTE_KEY_MAPPING = {
//   '': 'TOP',
// } as const

// // メタタグを生成する関数
// const generateMetaTags = (route: string) => {
//   const routeKey = ROUTE_KEY_MAPPING[route as keyof typeof ROUTE_KEY_MAPPING]
//   if (!routeKey || !ROUTES_META[routeKey as keyof typeof ROUTES_META]) {
//     return ''
//   }

//   const meta = ROUTES_META[routeKey as keyof typeof ROUTES_META].meta

//   return `
//     <meta name="description" content="${meta.description}" />
//     <meta property="og:type" content="${meta.ogType}" />
//     <meta property="og:url" content="${meta.canonicalUrl}" />
//     <meta property="og:title" content="${meta.ogTitle}" />
//     <meta property="og:site_name" content="${meta.ogSiteName}" />
//     <meta property="og:description" content="${meta.ogDescription}" />
//     <meta property="og:image" content="${meta.ogImage}" />
//     <meta name="twitter:card" content="${meta.twitterCard}" />
//     <meta name="twitter:url" content="${meta.canonicalUrl}" />
//     <meta name="twitter:title" content="${meta.ogTitle}" />
//     <meta name="twitter:description" content="${meta.ogDescription}" />
//     <meta name="twitter:image" content="${meta.ogImage}" />
//     <link rel="canonical" href="${meta.canonicalUrl}" />`
// }

// ビルド設定
const BUILD_CONFIG = {
  OUT_DIR: 'dist/',
  ASSETS_DIR: 'assets',
  ROUTES: isDeliveryBuild ? baseRoutes : [...baseRoutes]
} as const

// https://vite.dev/config/
export default defineConfig({
  base: BASE_ROOT,
  plugins: [
    react(),
    Unfonts({
      google: {
        families: [
          {
            name: 'Noto Sans JP',
            styles: 'wght@400..900',
            defer: false,
          }
        ],
        display: 'swap',
        preconnect: true,
      }
    }),
    vanillaExtractPlugin({
      identifiers: 'debug',
    }),
    // {
    //   name: 'copy-index-html',
    //   closeBundle: () => {
    //     const distDir = path.resolve(__dirname, BUILD_CONFIG.OUT_DIR)
    //     const originalIndexPath = path.resolve(distDir, 'index.html')
    //     const originalHtml = fs.readFileSync(originalIndexPath, 'utf-8')

    //     // 各ルートディレクトリにindex.htmlをコピー
    //     BUILD_CONFIG.ROUTES.forEach(route => {
    //       let targetDir: string
    //       let targetHtml = originalHtml

    //       if (route === '') {
    //         // ルートディレクトリの場合は dist/ ディレクトリ自体
    //         targetDir = distDir
    //       } else {
    //         targetDir = path.resolve(distDir, route)
    //         if (!fs.existsSync(targetDir)) {
    //           fs.mkdirSync(targetDir, { recursive: true })
    //         }
    //       }

    //       // メタタグを<head>内に挿入
    //       const metaTags = generateMetaTags(route)
    //       if (metaTags) {
    //         // </head>タグの直前にメタタグを挿入
    //         targetHtml = targetHtml.replace('</head>', `${metaTags}\n  </head>`)
    //       }

    //       // タイトルタグを更新
    //       const routeKey = ROUTE_KEY_MAPPING[route as keyof typeof ROUTE_KEY_MAPPING]
    //       if (routeKey && ROUTES_META[routeKey as keyof typeof ROUTES_META]) {
    //         const meta = ROUTES_META[routeKey as keyof typeof ROUTES_META].meta
    //         targetHtml = targetHtml.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`)
    //       }

    //       // 対応するコンバージョンタグがある場合は挿入
    //       const conversionTag = CONVERSION_TAGS[route as keyof typeof CONVERSION_TAGS]
    //       if (conversionTag) {
    //         // </body>タグの直前にコンバージョンタグを挿入
    //         targetHtml = targetHtml.replace('</body>', `${conversionTag}\n</body>`)
    //       }

    //       // 修正されたHTMLを保存
    //       fs.writeFileSync(path.resolve(targetDir, 'index.html'), targetHtml)
    //     })
    //   }
    // },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: true,
    port: 5173
  },
  build: {
    minify: 'terser',
    terserOptions: {
      mangle: true,
      compress: {
        evaluate: false,
        inline: false,
        drop_console: true
      },
      format: {
        comments: false
      }
    },
    cssCodeSplit: true,
    assetsInlineLimit: 0,
    outDir: BUILD_CONFIG.OUT_DIR,
    assetsDir: BUILD_CONFIG.ASSETS_DIR
  }
})
