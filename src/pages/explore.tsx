import { siteMeta } from '@/config/general'
import catalogue from '@/config/catalogue'

import { PageLayout } from '@/layouts/site-layout'

export default function ExplorePage() {
  return (
    <PageLayout title={`>${siteMeta.siteTitle}`} className='content-wrapper'>
      <section className='py-8 mx-auto'>
        <div className='grid grid-cols-1 gap-6 mt-8 xl:mt-12 xl:gap-8 md:grid-cols-2 xl:grid-cols-3'>
          {catalogue.map((item) => (
            <div
              key={item.slug}
              className='cursor-pointer hover:bg-primary-50 p-8 space-y-3 border-2 border-primary-400 dark:border-primary-300 rounded-sm bg-white dark:bg-gray-800'
            >
              <span className='inline-block text-primary-500 dark:text-primary-400'>
                <item.icon className='w-8 h-8' />
              </span>
              <h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>
                {item.title}
              </h1>
              <p className='text-gray-500 dark:text-gray-300 line-clamp-3'>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
