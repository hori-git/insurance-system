import type { NextApiRequest, NextApiResponse } from 'next'

export type CreateNewContractReq = {
  userId: number
  productId: number
  startDate: Date
}

export type CreateNewContractRes = {
  contractId: number
}

export default function createNewContract(
  req: NextApiRequest,
  res: NextApiResponse<CreateNewContractRes>,
) {
  if (req.method === 'POST') {
    res.status(200).json({
      contractId: 1,
    })
  }
}
