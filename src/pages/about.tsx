import { IconArrowBigLeftLine } from '@tabler/icons'

import { PageLayout } from '@/layouts/site-layout'
import { Anchor } from '@/components/elements'

export default function AboutPage() {
  return (
    <PageLayout title='About' className='content-wrapper'>
      <section className='py-16 mx-auto'>
        <h1 className='text-2xl font-bold lg:text-3xl text-primary-500'>This page are coming soon</h1>
        <p className='mt-4 text-lg'>
          This page is currently a draft. Look back later to see what&rsquo;s changed.
        </p>
        <div className='mt-8'>
          <Anchor
            href='/'
            className='px-5 py-3 text-sm inline-flex items-center font-medium leading-5 text-center text-white bg-primary-600 rounded-sm hover:bg-primary-500 md:mx-0 md:w-auto focus:outline-none'
          >
            <IconArrowBigLeftLine strokeWidth={2} className='w-5 h-5 -ml-1 mr-2' />
            <span>Back to homepage</span>
          </Anchor>
        </div>
      </section>
    </PageLayout>
  )
}
