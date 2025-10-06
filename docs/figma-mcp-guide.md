# Figma MCP x Claude 自動実装マニュアル

## Figma実装の基本手順

### 1. 事前確認（プロジェクト要件把握）
- `/CLAUDE.md` を読んでプロジェクトの要件を把握
- 使用する技術やコマンドは `/CLAUDE.md` に従う
```bash
# プロジェクト要件を把握
cat CLAUDE.md
```

### 2. 既存リソース確認

#### 2-1. Figmaライブラリディレクトリ確認
```bash
ls -la src/lib/figma-library/
```

#### 2-2. 既存デザインデータ確認
```bash
cat src/lib/figma-library/design-data.json
cat src/lib/figma-library/components.json
cat src/lib/figma-library/metadata.json
```

#### 2-3. 既存UIコンポーネント確認
```bash
ls -la src/components/ui/
```

### 3. Figmaデザイン取得・分析

#### 3-1. スクリーンショットで全体把握
```bash
mcp__figma-dev-mode-mcp-server__get_screenshot
```

#### 3-2. メタデータでノード構造確認
```bash
mcp__figma-dev-mode-mcp-server__get_metadata
```

#### 3-3. Code Connect情報確認（失敗しても続行）
```bash
mcp__figma-dev-mode-mcp-server__get_code_connect_map
```

### 4. 実装方針決定

#### 4-1. Figmaノード名と既存コンポーネント名の対応確認
```bash
# 例: img_caption ノードがある → ImgCaption コンポーネントを探す
find src/components -name "*[ノード名に対応する名前]*" -type f
```

#### 4-2. 新規コンポーネント作成の必要性判断
以下を検討：
- 既存コンポーネントで対応可能か
- 新規作成が必要なコンポーネントは何か
- どこに配置するか（/src/components/ui/ or ページ内）

### 5. コード生成・実装

#### 5-1. Figmaからコード生成
```bash
# 実装コードを取得（既存コンポーネント確認後）
mcp__figma-dev-mode-mcp-server__get_code
```

#### 5-2. 既存コンポーネントとの整合性確認
- 生成されたコンポーネント（Button, Input, Card等）が既存の `/src/components/ui/` にないか確認
- 既存コンポーネントがある場合は、生成コードから削除し、importで使用

#### 5-3. 新規コンポーネントの分離・配置
- 再利用性の高いコンポーネントは `/src/components/ui/` に別ファイルとして作成
- ページ固有のコンポーネントはページディレクトリ内の`components`フォルダに別ファイルとして作成
- 各コンポーネントに適切な Props インターフェースを定義

#### 5-4. スタイリング実装
- Vanilla Extract (.css.ts) でスタイル作成
- `design-data.json` のデザイントークンを参照
- 既存パターンに準拠した実装

#### 5-5. 画像アセットの最適化
- 生成された画像パスを ImgOpt コンポーネントに置き換え
- 適切なalt属性の設定

#### 5-6. 検証・調整
- 実装結果の確認
- レスポンシブ対応の確認
- アクセシビリティの確認

**実行順序の理由:**
1. **事前確認** → プロジェクト要件の把握
2. **既存リソース確認** → 重複実装防止、既存パターン把握
3. **視覚的・構造理解** → デザインとノード構造の把握
4. **実装方針決定** → 新規作成 vs 既存活用の判断
5. **段階的実装** → コード生成→整合性確認→分離→スタイリング→検証

## 実装要件

### HTML構造
- セマンティックHTML構造で記述
- FigmaデザインデータとMCPのXMLデータから適切なHTML要素を選択
- ノード名から要素を推測：
  - `head` `heading` `見出し` → `<h1>` `<h2>` など
  - `button` `btn` `ボタン` → `<button>`
  - `nav` `navigation` → `<nav>`
  - `list` `ul` `ol` → `<ul>` `<ol>`

### React/TypeScript
- すべてのコンポーネントで `interface Props` による型定義
- HTMLに `data-name="[Figmaノード名]"` `data-node-id="[FigmaノードID]"` を付与
- 画像は `/src/components/utils/ImgOpt/ImgOpt.tsx` を使用

```typescript
interface ComponentProps {
  title: string;
  description?: string;
}

export default function Component({ title, description }: ComponentProps) {
  return (
    <div data-name="component" data-node-id="123:456">
      <h2>{title}</h2>
      <ImgOpt src="/path/to/image.png" alt={title} />
    </div>
  )
}
```

### スタイリング
- Vanilla Extract (.css.ts) でスタイル実装
- `/src/lib/figma-library/design-data.json` のデザイントークン優先使用
- `/src/styles/responsive.config.ts` のブレークポイント使用
- 既存コンポーネントのスタイルパターンに準拠

## 詳細実装ガイド

### 既存コンポーネント確認の詳細
**重要なポイント:**
- Figmaのノード名（snake_case）と既存コンポーネント名（PascalCase）の対応関係を確認
- 既存コンポーネントがある場合は必ず再利用
- 類似機能コンポーネントの拡張可能性を検討

### コンポーネント配置の判断基準

**`/src/components/ui/` に配置する場合:**
- 複数ページで再利用される可能性が高い
- 独立した機能を持つUI要素（Button、Input、Card、Modal等）
- デザインシステムの一部として管理すべき要素

**ページディレクトリの`components`フォルダに配置する場合:**
- そのページでのみ使用される固有のコンポーネント
- ページの構造に強く依存する要素

### Vanilla Extract実装ルール

**禁止パターン:**
```typescript
// HTMLタグセレクターは使用禁止
export const container = style({
  '& p': { color: 'red' } // NG
})
```

**推奨パターン:**
```typescript
// 個別クラスで管理
export const container = style({
  display: 'flex',
  flexDirection: 'column'
})

export const text = style({
  color: 'red',
  fontSize: '16px'
})

// デザイントークン参照
import designData from '@/lib/figma-library/design-data.json'

export const button = style({
  backgroundColor: designData.design_tokens.colors.Basic_Dark,
  color: designData.design_tokens.colors.Basic_White
})
```

### Figmaライブラリデータ活用

**デザイントークン参照パターン:**
```typescript
import designData from '@/lib/figma-library/design-data.json'

// カラー参照
backgroundColor: designData.design_tokens.colors.Basic_White
border: `1px solid ${designData.design_tokens.colors.Basic_Medium}`
```

**データ不足時の対処:**
- `design-data.json` にカラー情報がない場合：
  1. Figmaでライブラリカラー一覧セクションを選択
  2. `mcp__figma-dev-mode-mcp-server__get_variable_defs` 実行
  3. 取得データを `design_tokens.colors` に追加

### エラーハンドリング

**`get_variable_defs` エラー対処:**
- 「使用されている変数がない」→ ライブラリ変数を使用しているコンポーネントを選択

**`get_code` エラー対処:**
- 生成失敗 → ノードを小さな単位に分けて再実行
- ノードID無効 → `get_metadata` で有効ID確認

**`get_screenshot` エラー対処:**
- 画像取得失敗 → ノードの表示状態・サイズを確認
