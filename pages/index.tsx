import { Text } from '@nextui-org/react'

import { PageLayout } from '@/components/layouts'

export default function Home() {
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
    </PageLayout>
  )
}
