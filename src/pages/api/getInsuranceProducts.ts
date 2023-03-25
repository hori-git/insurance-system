import type { NextApiRequest, NextApiResponse } from 'next'

export type InsuranceProducts = {
  productId: number
  categoryId: number
  productName: string
  claim: number // 保険金
  detail: string // 保証内容
  premium: number // 保険料
}[]

export default function getInsuranceProducts(
  req: NextApiRequest,
  res: NextApiResponse<InsuranceProducts>,
) {
  res.status(200).json([
    {
      productId: 1,
      categoryId: 1,
      productName: 'ＴＨＥ クルマの保険',
      claim: 1000000,
      detail: '個人用自動車保険',
      premium: 1000,
    },
    {
      productId: 2,
      categoryId: 1,
      productName: '自賠責保険（自動車・バイク）',
      claim: 1100000,
      detail: '法律によって加入が義務づけられている保険',
      premium: 1100,
    },
    {
      productId: 3,
      categoryId: 1,
      productName: 'バイク保険',
      claim: 900000,
      detail: '自賠責保険ではカバーしきれないリスクを補償',
      premium: 900,
    },
    {
      productId: 4,
      categoryId: 1,
      productName: '乗るピタ！',
      claim: 2000000,
      detail: '時間単位型自動車保険',
      premium: 200,
    },
    {
      productId: 5,
      categoryId: 2,
      productName: 'ＴＨＥ すまいの保険',
      claim: 3000000,
      detail: '個人用火災総合保険',
      premium: 3000,
    },
    {
      productId: 6,
      categoryId: 2,
      productName: '地震保険',
      claim: 400000,
      detail:
        '火災保険だけでは補償されない地震・噴火またはこれらによる津波を原因とする損害を補償します。',
      premium: 400,
    },
    {
      productId: 7,
      categoryId: 2,
      productName: 'ＴＨＥ 家財の保険',
      claim: 500000,
      detail: '賃貸住宅入居者専用火災保険',
      premium: 500,
    },
    {
      productId: 8,
      categoryId: 2,
      productName: '特約火災保険',
      claim: 6000000,
      detail:
        '住宅金融支援機構、沖縄振興開発金融公庫、勤労者退職金共済機構、福祉医療機構いずれかの融資をご利用された方の火災保険です。',
      premium: 6000,
    },
    {
      productId: 9,
      categoryId: 3,
      productName: 'off!（オフ）',
      claim: 700000,
      detail: '新・海外旅行保険',
      premium: 700,
    },
    {
      productId: 10,
      categoryId: 3,
      productName: '国内旅行総合保険',
      claim: 800000,
      detail:
        '国内旅行中の思いがけない事故によるケガや損害からしっかりとガードします。',
      premium: 800,
    },
    {
      productId: 11,
      categoryId: 4,
      productName: 'ＴＨＥ カラダの保険',
      claim: 900000,
      detail: '個人用傷害所得総合保険',
      premium: 900,
    },
  ])
}
