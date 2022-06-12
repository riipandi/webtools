import type { NextApiRequest, NextApiResponse } from 'next'
import geoip from 'fast-geoip'

import { throwError } from '@/libraries/helpers'
import axios from 'axios'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') return throwError(res, 500, `Method not allowed!`)

  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  const forwarded = req.headers['x-forwarded-for'] || req.headers['x-real-ip']
  const remoteIP = typeof forwarded === 'string' ? forwarded.split(/, /)[0] : req.socket.remoteAddress
  // const isLocalhost = remoteIP === '::1' || remoteIP === '127.0.0.1'

  const { data: resp } = await axios.get(`https://ifconfig.co/json`)
  const ip = process.env.VERCEL !== '1' ? resp.ip : remoteIP
  const geo = await geoip.lookup(ip)

  return res.status(200).json({
    ipAddress: ip,
    userAgent,
    geo,
  })
}

export default handler
