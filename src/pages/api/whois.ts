import type { NextApiRequest, NextApiResponse } from 'next'
import WhoisLight from 'whois-light'

import { throwError } from '@/libraries/helpers'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') return throwError(res, 500, `Method not allowed!`)
  // if (!req.query.domain) return throwError(res, 500, `Domain is required!`)

  await WhoisLight.lookup(req.query.domain.toString())
    .then(function (whois) {
      res.setHeader('Content-Type', 'text/plain')
      return res.status(200).send(whois)
    })
    .catch((err) => throwError(res, 500, err.message))
}

export default handler
