import type { NextApiRequest, NextApiResponse } from 'next'

type InsuranceCategories = {
  categoryId: number
  categoryName: string
}[]

export default function getInsuranceCategories(
  req: NextApiRequest,
  res: NextApiResponse<InsuranceCategories>,
) {
  res.status(200).json([
    {
      categoryId: 1,
      categoryName: '自動車・バイクの保険、自転車・歩行中の保険',
    },
    {
      categoryId: 2,
      categoryName: '火災・地震の保険',
    },
    {
      categoryId: 3,
      categoryName: '旅行・レジャーの保険',
    },
    {
      categoryId: 4,
      categoryName: 'ケガ・病気の保険',
    },
  ])
}
