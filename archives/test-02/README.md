# Figma to HTML Conversion Project

このプロジェクトは、Figma REST APIを使用してデザインファイルを読み取り、HTMLマークアップを自動生成するものです。

## 実行した操作

### 1. Figma REST API接続

#### 使用した認証情報
- アクセストークン: `***`
- Figma Design URL: `https://www.figma.com/design/M8GHOng4qNMecFUTkRNOY0/Claude-Code-Testor?node-id=0-1&t=gcKz4A8vW5VI850x-1`

#### API呼び出し
```bash
curl -H "X-Figma-Token: ***" \
     "https://api.figma.com/v1/files/M8GHOng4qNMecFUTkRNOY0"
```

### 2. 受け取った情報

Figma APIから以下の構造のデザインデータを取得しました：

#### デザイン構造
- **ドキュメント名**: "Claude Code Testor"
- **キャンバス**: "Page 1" (背景色: ダークグレー `rgb(30, 30, 30)`)
- **フレーム**: "Frame 1"
  - サイズ: 240px × 60px
  - 背景色: 白 `rgb(255, 255, 255)`
  - 角丸: 9px
  - パディング: 上下16px、左右26px
  - レイアウト: 水平中央揃え
- **テキスト要素**: "Hello"
  - フォント: Inter Bold
  - サイズ: 24px
  - 色: 黒 `rgb(0, 0, 0)`
  - 行高: 29px

#### データファイル
取得したJSONデータは `figma-data.json` に整形して保存しました。

### 3. HTML/CSS記述方法

#### HTMLマークアップ
- セマンティックなHTML5構造を使用
- Figmaのフレーム構造に基づいてdiv要素を配置
- テキスト要素は適切にマークアップ

#### CSSスタイリング
Figmaのデザイン仕様を以下のように変換しました：

1. **レイアウト**
   - Flexboxを使用してセンタリング
   - ビューポート全体を使用した配置

2. **色の変換**
   - Figmaの正規化された色値（0-1）をCSS RGB値（0-255）に変換
   - 背景色: `rgb(30, 30, 30)` （Figmaの `r:0.117, g:0.117, b:0.117`）
   - フレーム背景: `white`
   - テキスト色: `black`

3. **フォント**
   - Inter フォントファミリーを指定
   - フォールバックフォントを設定
   - フォントウェイト: 700 (Bold)

4. **サイズとスペーシング**
   - Figmaのピクセル値をそのまま使用
   - パディング: `16px 26px`
   - 角丸: `9px`
   - フォントサイズ: `24px`
   - 行高: `29px`

## ファイル構成

```
.
├── index.html          # 生成されたHTMLマークアップ
├── figma-data.json     # FigmaAPIから取得した整形済みデータ
└── README.md           # このドキュメント
```

## 結果

Figmaデザインを忠実に再現したレスポンシブなHTMLページが生成されました。デザインの寸法、色、フォント、レイアウトがすべて正確に反映されています。