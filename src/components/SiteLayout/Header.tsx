import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { Fragment } from 'react'

import imgSiteLogo from '@/assets/images/red-w-512.png'

import { classNames } from '@/utils/helper'

const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#'
  },
  { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' }
]

const Header = ({ ...props }) => {
  return (
    <Popover
      className='sticky top-0 z-40 bg-white border-b-2 border-transparent shadow dark:border-gray-800 dark:bg-gray-900'
      {...props}
    >
      <div className='flex items-center justify-between px-4 py-4 mx-auto max-w-7xl sm:px-6 md:justify-start md:space-x-10'>
        <div>
          <a href='#' className='flex'>
            <span className='sr-only'>Workflow</span>
            <Image src={imgSiteLogo} alt='WebTools' className='w-auto h-8 sm:h-10' width={48} height={48} />
          </a>
        </div>
        <div className='-my-2 -mr-2 md:hidden'>
          <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none'>
            <span className='sr-only'>Open menu</span>
            <MenuIcon className='w-6 h-6' aria-hidden='true' />
          </Popover.Button>
        </div>
        <div className='hidden md:flex-1 md:flex md:items-center md:justify-end'>
          <Popover.Group as='nav' className='flex space-x-10'>
            <a
              href='#'
              className='text-base font-medium text-gray-500 dark:text-gray-300 dark:hover:text-brand-50 hover:text-gray-900'
            >
              Pricing
            </a>
            <a
              href='#'
              className='text-base font-medium text-gray-500 dark:text-gray-300 dark:hover:text-brand-50 hover:text-gray-900'
            >
              Docs
            </a>

            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900 dark:text-brand-50' : 'text-gray-500 dark:text-gray-300',
                      'group bg-transparent rounded-md inline-flex items-center text-base font-medium dark:hover:text-brand-50 hover:text-gray-900 focus:outline-none'
                    )}
                  >
                    <span>More</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden='true'
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='absolute z-10 w-screen max-w-xs px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0'>
                      <div className='overflow-hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5'>
                        <div className='relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8'>
                          {resources.map((item) => (
                            <a key={item.name} href={item.href} className='block p-3 -m-3 rounded-md hover:bg-gray-50'>
                              <p className='text-base font-medium text-gray-900'>{item.name}</p>
                              <p className='mt-1 text-sm text-gray-500'>{item.description}</p>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className='flex items-center md:ml-12'>
            <a
              href='#'
              className='text-base font-medium text-gray-500 dark:text-gray-300 dark:hover:text-brand-50 hover:text-gray-900'
            >
              Sign in
            </a>
            <a
              href='#'
              className='inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-brand-600 hover:bg-brand-700'
            >
              Premium
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel focus className='absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden'>
          <div className='bg-white divide-y-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50'>
            <div className='px-5 pt-4 pb-5'>
              <div className='flex items-center justify-between'>
                <div>
                  <Image src={imgSiteLogo} alt='WebTools' className='w-auto h-8 sm:h-10' width={48} height={48} />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='w-6 h-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className='px-5 py-6'>
              <div className='grid grid-cols-2 gap-4'>
                <a href='#' className='text-base font-medium text-gray-900 hover:text-gray-700'>
                  Pricing
                </a>

                <a href='#' className='text-base font-medium text-gray-900 hover:text-gray-700'>
                  Docs
                </a>

                <a href='#' className='text-base font-medium text-gray-900 hover:text-gray-700'>
                  Enterprise
                </a>
                {resources.map((item) => (
                  <a key={item.name} href={item.href} className='text-base font-medium text-gray-900 hover:text-gray-700'>
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='mt-6'>
                <a
                  href='#'
                  className='flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-brand-600 hover:bg-brand-700'
                >
                  Sign up
                </a>
                <p className='mt-6 text-base font-medium text-center text-gray-500'>
                  Existing customer?{' '}
                  <a href='#' className='text-brand-600 hover:text-brand-500'>
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Header
