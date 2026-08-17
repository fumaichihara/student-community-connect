// インタビュー記事データ
// 新しい記事を追加する場合は、この配列にオブジェクトを1件追加するだけでOK。
// 一覧ページ・フィルター・トップページのピックアップに自動反映されます。
//
// category は以下のいずれかを指定:
// "商社" | "運送・物流" | "IT・テクノロジー" | "メーカー" | "サービス・その他"
//
// comingSoon: true の場合は「近日公開」のプレースホルダーカードとして表示されます。

export const CATEGORIES = ['すべて', '商社', '運送・物流', 'IT・テクノロジー', 'メーカー', 'サービス・その他']

export const interviews = [
  {
    id: 'int-001',
    comingSoon: true,
    category: '商社',
    company: '準備中',
    role: '代表取締役',
    title: '商社業界のトップが語る、若手に求める「越境力」とは',
    excerpt: '近日公開：商社業界のリーダーインタビューを順次公開予定です。',
    date: null,
    tags: ['商社', 'Coming Soon'],
  },
  {
    id: 'int-002',
    comingSoon: true,
    category: '運送・物流',
    company: '準備中',
    role: '取締役',
    title: '物流の最前線から見る、これからの日本を支える仕事',
    excerpt: '近日公開：運送・物流業界のキーパーソンへのインタビューを準備しています。',
    date: null,
    tags: ['物流', 'Coming Soon'],
  },
  {
    id: 'int-003',
    comingSoon: true,
    category: 'IT・テクノロジー',
    company: '準備中',
    role: 'CEO',
    title: 'テクノロジーで社会課題を解く、経営者たちの視点',
    excerpt: '近日公開：IT・テクノロジー業界の経営者インタビューを準備しています。',
    date: null,
    tags: ['IT', 'Coming Soon'],
  },
]

export function getInterviewsByCategory(category) {
  if (!category || category === 'すべて') return interviews
  return interviews.filter((i) => i.category === category)
}
