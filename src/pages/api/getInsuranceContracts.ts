import type { NextApiRequest, NextApiResponse } from 'next'

export type GetInsuranceContractsReq = {
  userId: number
}

export type InsuranceContracts = {
  contractId: number
  productId: number
  startDate: Date
}[]

export default function getInsuranceContracts(
  req: NextApiRequest,
  res: NextApiResponse<InsuranceContracts>,
) {
  res.status(200).json([
    {
      contractId: 1,
      productId: 1,
      startDate: new Date(2023, 4, 25),
    },
  ])
}
