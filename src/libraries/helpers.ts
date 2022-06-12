import type { NextApiResponse } from 'next'
import axios from 'axios'

export const fetcher = (url: string) => axios.get(url).then((res) => res.data)

export function throwError(res: NextApiResponse, code: number, message: string) {
  const state = JSON.stringify({ error: true, message: message, code: code })
  return res.status(code).json(JSON.parse(state))
}

export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}
