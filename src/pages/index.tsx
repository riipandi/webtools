import Link from 'next/link'

import { siteMeta } from '@/config/general'

import { PageLayout } from '@/layouts/site-layout'

export default function Home() {
  return (
    <PageLayout title={`>${siteMeta.siteTitle}`} className='content-wrapper'>
      <section className='flex flex-col py-10 mx-auto lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center'>
        <div className='w-full lg:w-1/2'>
          <div className='lg:max-w-lg'>
            <h1 className='text-3xl font-extrabold tracking-tight text-gray-800 dark:text-white lg:text-4xl'>
              {siteMeta.siteTitle}
            </h1>
            <div className='mt-8 space-y-5'>
              <p className='mt-6 text-gray-500 text-xl dark:text-gray-300'>
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
        <div className='flex items-center justify-center w-full h-96 lg:w-1/2 pl-8'>
          <div className='p-8 space-y-3 border-2 border-primary-400 w-full dark:border-primary-300 rounded-sm bg-white dark:bg-gray-800'>
            <span className='inline-block text-primary-500 dark:text-primary-400'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-8 h-8'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                />
              </svg>
            </span>
            <h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>
              Your IP Addres: 192.2.0.1
            </h1>
            <p className='text-gray-500 dark:text-gray-300'>
              Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)
              Chrome/102.0.5005.115 Safari/537.36
            </p>
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
            <div className='cursor-pointer hover:bg-primary-50 p-8 space-y-3 border-2 border-primary-400 dark:border-primary-300 rounded-sm bg-white dark:bg-gray-800'>
              <span className='inline-block text-primary-500 dark:text-primary-400'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-8 h-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z'
                  />
                </svg>
              </span>
              <h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>Bcrypt</h1>
              <p className='text-gray-500 dark:text-gray-300 line-clamp-3'>
                Hash and compare text string using bcrypt. Bcrypt is a password-hashing function based on the
                Blowfish cipher.
              </p>
            </div>
            <div className='cursor-pointer hover:bg-primary-50 p-8 space-y-3 border-2 border-primary-400 dark:border-primary-300 rounded-sm bg-white  dark:bg-gray-800'>
              <span className='inline-block text-primary-500 dark:text-primary-400'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-8 h-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
                  />
                </svg>
              </span>
              <h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>
                Token Generator
              </h1>
              <p className='text-gray-500 dark:text-gray-300 line-clamp-3'>
                Generate random string with the chars you want: uppercase or lowercase letters, numbers and/or
                symbols.
              </p>
            </div>
            <div className='cursor-pointer hover:bg-primary-50 p-8 space-y-3 border-2 border-primary-400 dark:border-primary-300 rounded-sm bg-white  dark:bg-gray-800'>
              <span className='inline-block text-primary-500 dark:text-primary-400'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-8 h-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                  />
                </svg>
              </span>
              <h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>
                Base64 converter
              </h1>
              <p className='text-gray-500 dark:text-gray-300 line-clamp-3'>
                Convert string, files or images into a it&rsquo; base64 representation.
              </p>
            </div>
            <div className='cursor-pointer hover:bg-primary-50 p-8 space-y-3 border-2 border-primary-400 dark:border-primary-300 rounded-sm bg-white  dark:bg-gray-800'>
              <span className='inline-block text-primary-500 dark:text-primary-400'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-8 h-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                  />
                </svg>
              </span>
              <h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>
                Base64 converter
              </h1>
              <p className='text-gray-500 dark:text-gray-300 line-clamp-3'>
                Convert string, files or images into a it&rsquo; base64 representation.
              </p>
            </div>
            <div className='cursor-pointer hover:bg-primary-50 p-8 space-y-3 border-2 border-primary-400 dark:border-primary-300 rounded-sm bg-white  dark:bg-gray-800'>
              <span className='inline-block text-primary-500 dark:text-primary-400'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-8 h-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                  />
                </svg>
              </span>
              <h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>
                Base64 converter
              </h1>
              <p className='text-gray-500 dark:text-gray-300 line-clamp-3'>
                Convert string, files or images into a it&rsquo; base64 representation.
              </p>
            </div>
            <div className='cursor-pointer hover:bg-primary-50 p-8 space-y-3 border-2 border-primary-400 dark:border-primary-300 rounded-sm bg-white  dark:bg-gray-800'>
              <span className='inline-block text-primary-500 dark:text-primary-400'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-8 h-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                  />
                </svg>
              </span>
              <h1 className='text-2xl font-semibold text-gray-700 capitalize dark:text-white'>
                Base64 converter
              </h1>
              <p className='text-gray-500 dark:text-gray-300 line-clamp-3'>
                Convert string, files or images into a it&rsquo; base64 representation.
              </p>
            </div>
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
