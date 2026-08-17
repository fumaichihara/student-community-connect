// 掲載案件・インターンデータ
// 新しい案件を追加する場合は、この配列にオブジェクトを1件追加するだけでOK。
// 一覧ページ・検索フィルター・トップページのピックアップに自動反映されます。

export const JOB_TYPES = ['すべて', '営業', 'SNS運用', 'マーケティング', '企画・広報', 'その他']
export const WORK_STYLES = ['すべて', 'フルリモート', 'ハイブリッド', '対面']
export const DURATIONS = ['すべて', '短期（〜3ヶ月）', '中期（3〜6ヶ月）', '長期（6ヶ月〜）']

export const projects = [
  {
    id: 'prj-001',
    title: '【営業代行PJ】あかひげ薬局 男性機能改善商品の新規開拓・店舗提案プロジェクト',
    company: 'あかひげ薬局',
    jobType: '営業',
    workStyle: 'ハイブリッド',
    duration: '中期（3〜6ヶ月）',
    location: '全国（訪問エリア応相談）',
    summary:
      '男性機能改善商品の新規販路開拓に向けて、ドラッグストアや薬局への商談・提案を行う営業代行プロジェクトです。実際の商談に同席しながら、法人営業の基礎を実践的に学べます。',
    details: {
      tasks: [
        '新規開拓対象店舗のリストアップ・アプローチ',
        '店舗担当者への商品提案・商談',
        '商談内容の記録とチームへの共有',
        '提案資料のブラッシュアップ',
      ],
      idealCandidate: [
        '人と話すこと・関係構築が好きな方',
        '法人営業やBtoBビジネスに興味がある方',
        '週1回以上のミーティングに参加できる方',
      ],
      flow: ['フォーム入力', 'オンライン面談', 'キックオフ'],
    },
    tags: ['営業', 'ハイブリッド', '中期'],
  },
  {
    id: 'prj-002',
    title: '【SNS運用PJ】株式会社POTEN 広島発のSNSアカウントバズらせプロジェクト',
    company: '株式会社POTEN',
    jobType: 'SNS運用',
    workStyle: 'フルリモート',
    duration: '短期（〜3ヶ月）',
    location: 'フルリモート（広島拠点）',
    summary:
      '広島発のSNSアカウントを対象に、台本作成・動画編集・撮影までを一貫して担当し、アカウントの成長を目指すプロジェクトです。企画から数字分析まで、SNSマーケティングの一連の流れを経験できます。',
    details: {
      tasks: [
        'ショート動画の企画・台本作成',
        '撮影ディレクション・簡易撮影',
        '動画編集（CapCut等の編集ツール使用）',
        '投稿後の伸び率分析と改善提案',
      ],
      idealCandidate: [
        'SNSトレンドやショート動画が好きな方',
        '動画編集の経験がある、または学びたい方',
        '企画から実行までスピード感を持って動ける方',
      ],
      flow: ['フォーム入力', 'オンライン面談', 'キックオフ'],
    },
    tags: ['SNS運用', 'フルリモート', '短期'],
  },
]

export function filterProjects({ jobType, workStyle, duration, keyword } = {}) {
  return projects.filter((p) => {
    if (jobType && jobType !== 'すべて' && p.jobType !== jobType) return false
    if (workStyle && workStyle !== 'すべて' && p.workStyle !== workStyle) return false
    if (duration && duration !== 'すべて' && p.duration !== duration) return false
    if (keyword) {
      const q = keyword.trim().toLowerCase()
      if (q && !`${p.title} ${p.company} ${p.summary}`.toLowerCase().includes(q)) return false
    }
    return true
  })
}
