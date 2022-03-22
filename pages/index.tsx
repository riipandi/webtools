import { Switch, Text, useTheme } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'

import { PageLayout } from '@/components/layouts'

export default function Home() {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()

  return (
    <PageLayout fullTitle='Online Tools for Developer'>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $blue500 -20%, $pink500 50%'
        }}
        weight='bold'
      >
        Let&rsquo;s
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $purple500 -20%, $pink500 100%'
        }}
        weight='bold'
      >
        Make the Web
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: '45deg, $yellow500 -20%, $red500 100%'
        }}
        weight='bold'
      >
        Prettier
      </Text>

      <div>
        The current theme is: {type}
        <Switch checked={isDark} onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')} />
      </div>
    </PageLayout>
  )
}
