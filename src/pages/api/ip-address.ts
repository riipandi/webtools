import type { NextApiRequest, NextApiResponse } from 'next'
import geoip from 'fast-geoip'
import publicIp from 'public-ip'

import { throwError } from '@/libraries/helpers'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') return throwError(res, 500, `Method not allowed!`)

  const ipV4 = req.socket.remoteAddress.replace(/^.*:/, '')
  const isLocalhost = ipV4 === '1' ? true : false

  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  const ip = isLocalhost ? await publicIp.v4() : ipV4
  const geo = await geoip.lookup(ip)

  return res.status(200).json({
    ipAddress: ip,
    userAgent,
    geo,
  })
}

export default handler
