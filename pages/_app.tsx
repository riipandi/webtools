import { NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import { initSplitBee } from '@/libraries/splitbee'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    process.env.NODE_ENV !== 'development' && initSplitBee()
  }, [])

  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
