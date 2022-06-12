import Link from 'next/link'
import useSWR from 'swr'

import catalogue from '@/config/catalogue'
import { siteMeta } from '@/config/general'
import { swrFetcher } from '@/libraries/helpers'
import { PageLayout } from '@/layouts/site-layout'
import { IconNetwork } from '@tabler/icons'

export default function HomePage() {
  const { data, error } = useSWR('/api/userinfo', swrFetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return null

  return (
    <PageLayout title={`>${siteMeta.siteTitle}`} className='content-wrapper'>
      <section className='flex flex-col py-14 mx-auto lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center'>
        <div className='w-full lg:w-1/2'>
          <div className='lg:max-w-lg'>
            <h1 className='text-4xl text-center lg:text-left font-extrabold tracking-tight text-gray-800 dark:text-white lg:text-4xl'>
              {siteMeta.siteTitle}
            </h1>
            <div className='mt-8 space-y-5'>
              <p className='mt-6 text-center lg:text-left text-gray-500 text-xl dark:text-gray-300'>
                More than a webmaster tools.
                {siteMeta.description}
              </p>
            </div>
          </div>
          <div className='w-full mt-4 bg-transparent max-w-sm'>
            <p className='mt-8 text-sm text-gray-400'>
              This service provided free, if you want to support us, please consider donating to our project.
            </p>
          </div>
        </div>
        <div className='flex items-center justify-center w-full h-96 lg:w-1/2 lg:pl-8 lg-mt-0 mt-14'>
          <div className='p-8 space-y-3 border-2 border-primary-400 w-full dark:border-primary-300 rounded-sm bg-white dark:bg-gray-800'>
            <span className='inline-block text-primary-500 dark:text-primary-400'>
              <IconNetwork className='w-8 h-8' />
            </span>
            <h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>
              <span>Your IP Addres: {data.ipAddress}</span>
              <span className={`fi fi-${data.geo.country.toLowerCase()} h-4`}></span>
            </h1>
            <p className='text-gray-500 dark:text-gray-300'>{data.userAgent}</p>
            <div>
              <button className='px-6 py-3 mt-6 text-base font-medium leading-5 text-center text-white bg-primary-600 rounded-sm hover:bg-primary-500 md:mx-0 md:w-auto focus:outline-none'>
                See more details
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container py-10 mx-auto'>
          <h1 className='text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white'>
            Popular <span className='underline decoration-primary-500'>tools</span>
          </h1>
          <p className='mt-4 text-gray-500 xl:mt-6 dark:text-gray-300'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
          </p>
          <div className='grid grid-cols-1 gap-6 mt-8 xl:mt-12 xl:gap-8 md:grid-cols-2 xl:grid-cols-3'>
            {catalogue.slice(0, 6).map((item) => (
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
        </div>

        <div className='flex justify-center mt-8 lg:mt-10'>
          <Link href='/explore'>
            <a className='px-20 py-5 text-base w-full block font-medium leading-5 text-center text-white bg-primary-600 rounded-sm hover:bg-primary-500 md:mx-0 md:w-auto focus:outline-none'>
              Explore more tools
            </a>
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
