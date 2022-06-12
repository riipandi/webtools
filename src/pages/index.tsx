import NextImage from 'next/image'
import { siteMeta } from '@/config/general'
import { PageLayout } from '@/layouts/site-layout'
import { Anchor } from '@/components/elements'

import Banner from '~/images/banner.svg'

export default function Home() {
  return (
    <PageLayout title={`>${siteMeta.siteTitle}`}>
      <div className='flex flex-col items-center justify-center min-h-screen content-wrapper'>
        <div className='mx-auto mb-6'>
          <NextImage src={Banner} width={400} height={120} alt='Banner' />
        </div>
        <div className='container relative px-4 mx-auto'>
          <div className='max-w-2xl mx-auto text-center'>
            <p className='my-4 text-xl leading-8 text-gray-900 lg:mb-6 dark:text-gray-300'>
              {siteMeta.description}.
            </p>
            <div className='flex justify-center py-8 mx-auto space-x-4'>
              <Anchor href='/empty' className='inline-block px-5 text-sm btn btn--primary btn--md'>
                Empty page
              </Anchor>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
