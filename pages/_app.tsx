import { createTheme, NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useEffect } from 'react'

import { initSplitBee } from '@/libraries/splitbee'

const lightTheme = createTheme({
  type: 'light',
  theme: {}
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {}
})

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    process.env.NODE_ENV !== 'development' && initSplitBee()
  }, [])

  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  )
}
