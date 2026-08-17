# 学生コミュニティConnect 公式サイト

React + Vite + Tailwind CSS で構築した「学生コミュニティConnect」の公式サイトです。

## 技術スタック
- React 18 + React Router
- Vite
- Tailwind CSS
- lucide-react（アイコン）

## セットアップ

```bash
npm install
npm run dev
```

`http://localhost:5173` で確認できます。

## ビルド

```bash
npm run build
```

`dist/` フォルダに静的ファイルが出力されます。Vercel / Netlify / GitHub Pages などにそのままデプロイできます。

## GitHubへの登録手順

```bash
git init
git add .
git commit -m "Initial commit: Student Community Connect site"
git branch -M main
git remote add origin https://github.com/【あなたのユーザー名】/【リポジトリ名】.git
git push -u origin main
```

## ディレクトリ構成

```
src/
  components/   共通UIコンポーネント（Header, Footer, カード, モーダル等）
  pages/        各ページ（Home, About, Interviews, Projects, JoinUs, Contact...）
  data/         インタビュー記事・案件・サイト設定のデータ（配列で管理）
```

## コンテンツの追加方法（拡張性）

- **インタビュー記事を追加する** → `src/data/interviews.js` の `interviews` 配列にオブジェクトを1件追加するだけで、一覧・フィルター・トップページのピックアップに自動反映されます。`comingSoon: true` にすると「近日公開」のプレースホルダーカードになります。
- **案件・インターンを追加する** → `src/data/projects.js` の `projects` 配列にオブジェクトを1件追加するだけで、一覧・検索フィルターに自動反映されます。

## Googleフォームについて

「コミュニティに参加」ページ（`/join`）に、指定のGoogleフォームを `<iframe>` で埋め込んでいます。フォームURLは `src/data/site.js` の `SITE.googleFormUrl` / `SITE.googleFormUrlDirect` で一元管理しています。フォームを変更する場合はここを書き換えてください。
