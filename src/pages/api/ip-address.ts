import type { NextApiRequest, NextApiResponse } from 'next'
import geoip from 'fast-geoip'
import publicIp from 'public-ip'
import os from 'os'

import { throwError } from '@/libraries/helpers'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') return throwError(res, 500, `Method not allowed!`)

  const forwarded = req.headers['x-forwarded-for']
  const remoteIP = typeof forwarded === 'string' ? forwarded.split(/, /)[0] : req.socket.remoteAddress
  const isLocalhost = remoteIP === '::1' || remoteIP === '127.0.0.1'

  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  const ip = isLocalhost ? await publicIp.v4() : remoteIP
  const geo = await geoip.lookup(ip)

  return res.status(200).json({
    ipAddress: ip,
    userAgent,
    geo,
  })
}

export default handler
