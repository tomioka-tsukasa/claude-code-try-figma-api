# Figma MCP x Claude 自動実装マニュアル

- `/CLAUDE.md` を読んでプロジェクトの要件を把握
- 使用する技術やコマンドは `/CLAUDE.md` に従う

## Figma実装の基本手順

### 1. 実装前の必須把握ステップ

```bash
# 1. プロジェクト要件を把握
cat CLAUDE.md

# 2. Figmaライブラリディレクトリの内容を確認
ls -la src/lib/figma-library/

# 3. 既存のデザインデータを確認
cat src/lib/figma-library/design-data.json
cat src/lib/figma-library/components.json
cat src/lib/figma-library/metadata.json

# 4. 既存UIコンポーネントディレクトリを確認
ls -la src/components/ui/

# 5. Figmaメタデータ取得後、ノード名と既存コンポーネント名の対応を確認
# 例: img_caption ノードがある → ImgCaption コンポーネントを探す
find src/components -name "*[ノード名に対応する名前]*" -type f
```

**重要**:
- まず`CLAUDE.md`でプロジェクトの技術スタックと要件を確認
- `/src/lib/figma-library/` のデザインデータとコンポーネント情報を把握
- Figmaのノード名（snake_case）と既存コンポーネント名（PascalCase）の対応関係を確認してから実装開始
- 既存コンポーネントがある場合は必ずそれを使用する

### 2. デザイン確認
```bash
# まずスクリーンショットで全体を把握
mcp__figma-dev-mode-mcp-server__get_screenshot
```

### 3. 構造解析
```bash
# メタデータでノード構造を確認
mcp__figma-dev-mode-mcp-server__get_metadata
```

### 4. 既存コンポーネント詳細確認
```bash
# Code Connect情報があるかチェック
mcp__figma-dev-mode-mcp-server__get_code_connect_map
```

### 5. コード生成
```bash
# 実装コードを取得（既存コンポーネント確認後）
mcp__figma-dev-mode-mcp-server__get_code
```

**実行順序の理由:**
0. **事前確認** → 既存コンポーネントの把握（重複実装防止）
1. **視覚的理解** → スクリーンショットで全体像把握
2. **構造理解** → メタデータでノード階層確認
3. **既存活用** → Code Connectで再利用可能コンポーネント確認
4. **実装取得** → コード生成で具体的な実装（最後に実行）

## 実装要件

- セマンティックHTML構造で記述
  - FigmaデザインデータのスクショとMCPで返されたXMLデータを見て、適切なHTML要素を選択
  - もしノード名に `head` `heading` `見出し` のような見出しの文字が含まれる場合は `<h*>` などの見出しHTML要素を選択
  - もしノード名に `button` `btn` `ボタン` などのボタンの文字が含まれる場合は `<button>` を選択
- Reactコンポーネントは interface Props で型定義して実装
- HTMLに `data-name: [Figmaのノード名]` `data-node-id: [FigmaのノードID]` をdata属性として付与
- 画像ノードは `/src/components/utils/ImgOpt/ImgOpt.tsx` コンポーネントを使用

```typescript
export default function Page() {
  return (
    <div className="sampleImage">
      <ImgOpt src="/image-path.png" />
    </div>
  )
}
```

## スタイリング実装

- スタイルは **Vanilla Extract** (.css.ts) で実装
- `/src/styles/responsive.config.ts` のブレークポイントを使用
- `/src/lib/figma-library/design-data.json` のデザイントークンを参照
- 既存コンポーネントのスタイルパターンを確認してから実装

### Vanilla Extract重要なルール

**❌ 禁止されているセレクター:**
```typescript
// HTMLタグ名をセレクターにするのはエラーになる
export const container = style({
  // NG: '& p' のような書き方
  '& p': {
    color: 'red'
  }
})
```

**✅ 正しい実装方法:**
```typescript
// 各HTML要素にクラス名を付けて管理
export const container = style({
  display: 'flex',
  flexDirection: 'column'
})

export const paragraph = style({
  color: 'red',
  fontSize: '16px'
})

// コンポーネントで使用
function Component() {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>テキスト</p>
    </div>
  )
}
```

### 実装例
```typescript
// Page.css.ts
import { style } from '@vanilla-extract/css'

export const container = style({
  // スタイル定義
})

// Page.tsx
import * as styles from './Page.css'
```

## Figmaライブラリデータの管理と取得

### ライブラリデータの確認手順

実装開始前に必ず以下を確認:

1. **既存のデザインデータを確認**
```bash
# デザイントークン（カラー等）の確認
cat src/lib/figma-library/design-data.json

# 既存コンポーネント情報の確認
cat src/lib/figma-library/components.json

# Figmaファイル構造の確認
cat src/lib/figma-library/metadata.json
```

2. **デザイントークンの活用**
- `design-data.json` の `design_tokens.colors` に定義されたカラーを優先使用
- 例: `Basic_Dark: "#000000"`, `Basic_White: "#ffffff"` など

### デザインデータが不足している場合の対処

**design-data.json が存在しない、またはカラー情報が不足している場合:**

1. Figmaでライブラリカラーを一覧化したセクションを確認
2. ユーザーにそのセクションを選択してもらう
3. `mcp__figma-dev-mode-mcp-server__get_variable_defs` を実行
4. 取得した情報を `/src/lib/figma-library/design-data.json` の `design_tokens.colors` に格納

**components.json が存在しない場合:**
- コンポーネント情報を手動で整理し、同ファイルに格納
- 各コンポーネントのID、バリアント、構造情報を記録

### ライブラリデータの活用方法

**実装時の参照パターン:**

```typescript
// design-data.json のカラーを参照
import designData from '@/lib/figma-library/design-data.json'

export const containerStyle = style({
  backgroundColor: designData.design_tokens.colors.Basic_White,
  color: designData.design_tokens.colors.Basic_Dark,
  border: `1px solid ${designData.design_tokens.colors.Basic_Medium}`
})
```

**コンポーネント情報の活用:**
- `components.json` で既存コンポーネントのID、バリアント、構造を確認
- 同じコンポーネントを再実装せず、既存のものを活用

### get_variable_defs について

- 実際に使用されている変数のみを返す仕様
- ライブラリにカラー定義しているだけでは取得できない
- Figmaで何も選択していないと「使用されている変数がない」というレスポンスになる

## コンポーネント実装について

### 新規コンポーネント作成の判断基準

**以下の場合はコンポーネントとして実装**:
1. Figmaでインスタンスノード（コンポーネントのインスタンス）として定義されている
2. 同じデザインパターンが複数箇所で使用されている
3. 独立した機能を持つUI要素（Button、Input、Card等）
4. 再利用性が高いと判断される要素

**以下の場合は非コンポーネントとして実装**:
1. テキストのみの要素
2. 単純なdivコンテナ
3. 一回限りの使用で再利用性が低い要素
4. レイアウト目的のみの要素

### コンポーネント粒度の指針

- **小さすぎる粒度**: 単一のテキストや画像要素
- **適切な粒度**: Button、Card、InputField、NavItem等
- **大きすぎる粒度**: ページ全体やセクション全体

### 既存コンポーネント確認手順

1. `/src/components/ui/` ディレクトリを確認
2. 類似機能のコンポーネントが存在するかチェック
3. 既存コンポーネントで拡張可能かを判断
4. 新規作成が必要な場合のみ実装

## エラーハンドリング

### get_variable_defsのエラー対処

**問題**: 「使用されている変数がない」レスポンス
**原因**:
- Figmaで何も選択していない
- 選択したノードでライブラリ変数が使用されていない

**対処法**:
- Figmaでライブラリ変数を使用しているコンポーネントを選択
- ライブラリカラー一覧ページ/セクションを選択
- 変数が実際に適用されているデザインエリアを選択

### その他のMCPエラー対処

**get_code実行時にコード生成が失敗する場合**:
- ノードが複雑すぎる → 小さな単位に分けて実行
- ノードIDが無効 → get_metadataで有効なIDを確認

**get_screenshot実行時に画像が取得できない場合**:
- ノードが非表示になっている → Figmaで表示状態を確認
- ノードサイズが大きすぎる → 適切なサイズのノードを選択
