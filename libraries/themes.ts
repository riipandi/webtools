import { createTheme, Theme } from '@nextui-org/react'

// Font sans-serif:
import '@fontsource/inter/100.css'
import '@fontsource/inter/200.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'
// Font monospace:
import '@fontsource/jetbrains-mono/100.css'
import '@fontsource/jetbrains-mono/200.css'
import '@fontsource/jetbrains-mono/300.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'
import '@fontsource/jetbrains-mono/600.css'
import '@fontsource/jetbrains-mono/700.css'
import '@fontsource/jetbrains-mono/800.css'

const fonts = {
  sans: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Droid Sans', 'Helvetica Neue', sans-serif;",
  mono: "JetBrains Mono, 'Fira Code', 'SF Mono', 'Roboto Mono', 'Droid Sans Mono', 'Consolas', 'Menlo', 'Courier New', monospace;"
}

const sharedTheme: Theme = {
  theme: {
    fonts
  }
}

export const lightTheme = createTheme({
  ...sharedTheme,
  type: 'light',
  theme: {}
})

export const darkTheme = createTheme({
  ...sharedTheme,
  type: 'dark',
  theme: {}
})
