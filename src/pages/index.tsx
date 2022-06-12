import { siteMeta } from '@/config/general'

import { PageLayout } from '@/layouts/site-layout'

export default function Home() {
  return (
    <PageLayout title={`>${siteMeta.siteTitle}`} className='content-wrapper'>
      <div className='flex flex-col items-center justify-center'>
        <iframe width='100%' height='650px' frameBorder='0' src='https://fltr.speedtestcustom.com'></iframe>
      </div>
    </PageLayout>
  )
}
