import PlausibleProvider from 'next-plausible'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'

import '@/libraries/fontloader'

import '@/styles/global.css'

const isProduction = process.env.NODE_ENV === 'production'

export default function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider enabled={isProduction} domain='webtools.id' trackOutboundLinks selfHosted>
      <ThemeProvider attribute='class' defaultTheme='light' enableSystem={false}>
        <Toaster position='top-center' reverseOrder={false} />
        <Component {...pageProps} />
      </ThemeProvider>
    </PlausibleProvider>
  )
}
