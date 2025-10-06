## 指示した時の状況

- Figmaの `test-04` セクションの実装を依頼
- Figmaで使われているコンポーネントは全て存在しない状態で指示

## プロンプト

### 実行指示プロンプト

```
Figma で選択中のセクションを実装してほしい。

- `/Users/tomiokatsukasa/env/claude-code-try-figma-api/docs/figma-mcp-guide.md` を読んで要件を把握
- `/Users/tomiokatsukasa/env/claude-code-try-figma-api/src/pages/figma-test-04/` に実装
```

### 実行結果の報告文

```
⏺ Figmaで選択中のセクションを実装しました。以下を完了しました：

  新規作成したコンポーネント:
  - Button - ボタンコンポーネント（矢印アイコン付き）
  - ImgCaption - 画像とキャプション表示コンポーネント
  - HeadlineMidashi - 見出し表示コンポーネント
  - ImgTitleDesc - 画像・タイトル・説明文表示コンポーネント

  実装内容:
  - ムービーセクション: 4つの動画サムネイル（ImgCaption）と「ムービー 一覧」ボタン
  - ラジオセクション: 大きな画像（ImgTitleDesc）、説明文、「ラジオCM」ボタン
  - Figmaデザインデータ（design-data.json）のカラートークンを使用
  - Vanilla Extractでスタイリング
  - 適切なdata属性（data-name, data-node-id）を付与

  実装は /src/pages/figma-test-04/FigmaTest04.tsx に配置し、既存のプロジェクト要件に従ってコンポーネント分離とスタイリングを行いました。
```

### 分析メモ

- セクション毎に、上下に余計な余白を入れていた
- 前回の、未実装コンポーネントを1つずつ実装させていたプロンプトの方が精度は高かった
