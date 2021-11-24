import { Layout } from '@/components/SiteLayout'

export default function Empty() {
  return (
    <Layout fullTitle='Empty Page'>
      <div className='flex items-center justify-center min-h-screen py-20 lg:py-40'>{/* Do something */}</div>
    </Layout>
  )
}
