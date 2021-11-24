import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon
} from '@heroicons/react/outline'
import { ChevronDownIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { GithubLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react'
import { Fragment } from 'react'

import imgSiteLogo from '@/assets/images/red-w-512.png'

import { BasicLink } from '@/components/Essentials'
import { Layout } from '@/components/SiteLayout'

import { siteMeta } from '@/config/site'
import { classNames } from '@/utils/helper'

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon
  }
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon }
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon }
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' }
]
const features = [
  'Vitae in pulvinar odio id utobortis in inter.',
  'Sed sed id viverra viverra augue eget massa.',
  'Urna, gravida amet, a, integer venenatis.',
  'Lobortis sed pharetra amet vitae eleifend.',
  'Ullamcorper blandit a consequat donec elit aoreet.',
  'Dolor quo assumenda.',
  'Esse rerum distinctio maiores maiores.',
  'Eos enim officiis ratione.',
  'Tempore molestiae aliquid excepturi.',
  'Perspiciatis eveniet inventore eum et aliquam.'
]
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  },
  {
    id: 2,
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  },
  {
    id: 3,
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
  },
  {
    id: 4,
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      'Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
  },
  {
    id: 5,
    question: 'What do you call someone with no body and no nose?',
    answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.'
  },
  {
    id: 6,
    question: 'Why did the invisible man turn down the job offer?',
    answer:
      "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  }
]

const footerNavigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
    { name: 'Support', href: '/support' }
  ],
  social: [
    {
      name: 'GitHub',
      href: '#',
      icon: GithubLogo
    },
    {
      name: 'Twitter',
      href: '#',
      icon: TwitterLogo
    },
    {
      name: 'Instagram',
      href: '#',
      icon: InstagramLogo
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: LinkedinLogo
    }
  ]
}

export default function Home() {
  return (
    <Layout fullTitle={siteMeta.defaultTitle} withHeader withFooter animate>
      <div className='bg-white'>
        <Popover className='sticky top-0 z-40 bg-transparent border-b border-transparent shadow-md backdrop-filter bg-opacity-40 backdrop-blur-lg'>
          <div className='max-w-6xl px-4 mx-auto sm:px-6'>
            <div className='flex items-center justify-between py-2 md:justify-start md:space-x-10'>
              <div className='flex justify-start lg:w-0 lg:flex-1'>
                <BasicLink href='/'>
                  <span className='sr-only'>WebTools</span>
                  <Image src={imgSiteLogo} alt='WebTools' className='w-auto h-8 sm:h-10' width={48} height={48} />
                  {/* <img
                    className='w-auto h-8 sm:h-10'
                    src='https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=600'
                    alt=''
                  /> */}
                </BasicLink>
              </div>
              <div className='-my-2 -mr-2 md:hidden'>
                <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none'>
                  <span className='sr-only'>Open menu</span>
                  <MenuIcon className='w-6 h-6' aria-hidden='true' />
                </Popover.Button>
              </div>
              <Popover.Group as='nav' className='hidden space-x-10 md:flex'>
                <Popover className='relative'>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-700',
                          'group bg-transparent rounded-md inline-flex items-center text-sm font-medium hover:text-gray-900 focus:outline-none'
                        )}
                      >
                        <span>Solutions</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-800' : 'text-gray-600',
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
                        <Popover.Panel className='absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'>
                          <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                            <div className='relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8'>
                              {solutions.map((item) => (
                                <BasicLink
                                  key={item.name}
                                  href={item.href}
                                  className='flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50'
                                >
                                  <item.icon className='flex-shrink-0 w-6 h-6 text-rose-600' aria-hidden='true' />
                                  <div className='ml-4'>
                                    <p className='text-sm font-medium text-gray-900'>{item.name}</p>
                                    <p className='mt-1 text-sm text-gray-500'>{item.description}</p>
                                  </div>
                                </BasicLink>
                              ))}
                            </div>
                            <div className='px-5 py-5 space-y-6 bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
                              {callsToAction.map((item) => (
                                <div key={item.name} className='flow-root'>
                                  <BasicLink
                                    href={item.href}
                                    className='flex items-center p-3 -m-3 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100'
                                  >
                                    <item.icon className='flex-shrink-0 w-6 h-6 text-gray-400' aria-hidden='true' />
                                    <span className='ml-3'>{item.name}</span>
                                  </BasicLink>
                                </div>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <BasicLink
                  href='#'
                  className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900'
                >
                  Pricing
                </BasicLink>
                <BasicLink
                  href='#'
                  className='inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900'
                >
                  Docs
                </BasicLink>

                <Popover className='relative z-40'>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-700',
                          'group bg-transparent rounded-md inline-flex items-center text-sm font-medium hover:text-gray-900 focus:outline-none'
                        )}
                      >
                        <span>More</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-800' : 'text-gray-600',
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
                        <Popover.Panel className='absolute w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0'>
                          <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                            <div className='relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8'>
                              {resources.map((item) => (
                                <BasicLink
                                  key={item.name}
                                  href={item.href}
                                  className='flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50'
                                >
                                  <item.icon className='flex-shrink-0 w-6 h-6 text-rose-600' aria-hidden='true' />
                                  <div className='ml-4'>
                                    <p className='text-sm font-medium text-gray-900'>{item.name}</p>
                                    <p className='mt-1 text-sm text-gray-500'>{item.description}</p>
                                  </div>
                                </BasicLink>
                              ))}
                            </div>
                            <div className='px-5 py-5 bg-gray-50 sm:px-8 sm:py-8'>
                              <div>
                                <h3 className='text-sm font-medium tracking-wide text-gray-500 uppercase'>Recent Posts</h3>
                                <ul role='list' className='mt-4 space-y-4'>
                                  {recentPosts.map((post) => (
                                    <li key={post.id} className='text-sm truncate'>
                                      <BasicLink href={post.href} className='font-medium text-gray-900 hover:text-gray-700'>
                                        {post.name}
                                      </BasicLink>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className='mt-5 text-sm'>
                                <BasicLink href='#' className='font-medium text-rose-600 hover:text-rose-500'>
                                  {' '}
                                  View all posts <span aria-hidden='true'>&rarr;</span>
                                </BasicLink>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
              <div className='items-center justify-end hidden space-x-8 md:flex md:flex-1 lg:w-0'>
                <BasicLink href='#' className='text-sm font-medium text-gray-700 whitespace-nowrap hover:text-gray-900'>
                  Premium
                </BasicLink>
                <BasicLink
                  href='#'
                  className='inline-flex items-center justify-center px-4 py-2 text-sm font-medium border border-transparent rounded-md shadow-md text-rose-500 hover:text-rose-600 bg-rose-100 whitespace-nowrap hover:bg-rose-200'
                >
                  Create Account
                </BasicLink>
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
              <div className='bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50'>
                <div className='px-5 pt-5 pb-6'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <Image src={imgSiteLogo} alt='WebTools' className='w-auto h-8 sm:h-10' width={48} height={48} />
                      {/* <img
                        className='w-auto h-8'
                        src='https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=600'
                        alt='Workflow'
                      /> */}
                    </div>
                    <div className='-mr-2'>
                      <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none'>
                        <span className='sr-only'>Close menu</span>
                        <XIcon className='w-6 h-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <nav className='grid gap-y-8'>
                      {solutions.map((item) => (
                        <BasicLink
                          key={item.name}
                          href={item.href}
                          className='flex items-center p-3 -m-3 rounded-md hover:bg-gray-50'
                        >
                          <item.icon className='flex-shrink-0 w-6 h-6 text-rose-600' aria-hidden='true' />
                          <span className='ml-3 text-sm font-medium text-gray-900'>{item.name}</span>
                        </BasicLink>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className='px-5 py-6 space-y-6'>
                  <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                    <BasicLink href='#' className='text-sm font-medium text-gray-900 hover:text-gray-700'>
                      Pricing
                    </BasicLink>

                    <BasicLink href='#' className='text-sm font-medium text-gray-900 hover:text-gray-700'>
                      Docs
                    </BasicLink>

                    <BasicLink href='#' className='text-sm font-medium text-gray-900 hover:text-gray-700'>
                      Blog
                    </BasicLink>

                    <BasicLink href='#' className='text-sm font-medium text-gray-900 hover:text-gray-700'>
                      Contact Sales
                    </BasicLink>
                    {resources.map((item) => (
                      <BasicLink
                        key={item.name}
                        href={item.href}
                        className='text-sm font-medium text-gray-900 hover:text-gray-700'
                      >
                        {item.name}
                      </BasicLink>
                    ))}
                  </div>
                  <div>
                    <BasicLink
                      href='#'
                      className='flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-rose-600 hover:bg-rose-700'
                    >
                      Sign up
                    </BasicLink>
                    <p className='mt-6 text-sm font-medium text-center text-gray-500'>
                      Existing customer?{' '}
                      <BasicLink href='#' className='text-rose-600 hover:text-rose-500'>
                        Sign in
                      </BasicLink>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        {/* Hero section */}
        <div className='pb-8 -mt-8 bg-white sm:pb-12 lg:pb-12'>
          <div className='pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-40'>
            <div className='max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-6xl lg:grid lg:grid-cols-2 lg:gap-24'>
              <div>
                <div className='mt-12'>
                  <div>
                    <BasicLink href='#' className='inline-flex space-x-4'>
                      <span className='rounded bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-600 tracking-wide uppercase'>
                        What&apos;s new
                      </span>
                      <span className='inline-flex items-center space-x-1 text-sm font-medium text-rose-600'>
                        <span>Just shipped version 0.1.0</span>
                        <ChevronRightIcon className='w-5 h-5' aria-hidden='true' />
                      </span>
                    </BasicLink>
                  </div>
                  <div className='mt-6 sm:max-w-xl'>
                    <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl'>
                      The online web tools you&apos;ll love.
                    </h1>
                    <p className='mt-6 text-xl font-medium text-gray-500'>{siteMeta.description}</p>
                  </div>
                  <form action='#' className='mt-12 sm:max-w-lg sm:w-full sm:flex'>
                    <div className='flex-1 min-w-0'>
                      <label htmlFor='hero-email' className='sr-only'>
                        Email address
                      </label>
                      <input
                        id='hero-email'
                        type='email'
                        className='block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:border-rose-500 focus:ring-rose-500'
                        placeholder='Get more tools, enter your email'
                      />
                    </div>
                    <div className='mt-4 sm:mt-0 sm:ml-3'>
                      <button
                        type='submit'
                        className='block w-full px-5 py-3 text-base font-medium text-white border border-transparent rounded-md shadow bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:px-10'
                      >
                        Notify me
                      </button>
                    </div>
                  </form>
                  <div className='mt-6 hide-temporary'>
                    <div className='inline-flex items-center divide-x divide-gray-300'>
                      <div className='flex flex-shrink-0 pr-5'>
                        <StarIcon className='w-5 h-5 text-yellow-400' aria-hidden='true' />
                        <StarIcon className='w-5 h-5 text-yellow-400' aria-hidden='true' />
                        <StarIcon className='w-5 h-5 text-yellow-400' aria-hidden='true' />
                        <StarIcon className='w-5 h-5 text-yellow-400' aria-hidden='true' />
                        <StarIcon className='w-5 h-5 text-yellow-400' aria-hidden='true' />
                      </div>
                      <div className='flex-1 min-w-0 py-1 pl-5 text-sm text-gray-500 sm:py-3'>
                        <span className='font-medium text-gray-900'>Rated 5 stars</span> by over{' '}
                        <span className='font-medium text-rose-600'>500 beta users</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='sm:mx-auto sm:max-w-3xl sm:px-6'>
              <div className='py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
                <div className='hidden sm:block'>
                  <div className='absolute inset-y-0 w-screen left-1/2 bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full' />
                  <svg
                    className='absolute -mr-3 top-8 right-1/2 lg:m-0 lg:left-0'
                    width={404}
                    height={392}
                    fill='none'
                    viewBox='0 0 404 392'
                  >
                    <defs>
                      <pattern
                        id='837c3e70-6c3a-44e6-8854-cc48c737b659'
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits='userSpaceOnUse'
                      >
                        <rect x={0} y={0} width={4} height={4} className='text-gray-200' fill='currentColor' />
                      </pattern>
                    </defs>
                    <rect width={404} height={392} fill='url(#837c3e70-6c3a-44e6-8854-cc48c737b659)' />
                  </svg>
                </div>
                <div className='relative pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12'>
                  <img
                    className='w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none'
                    src='https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero section */}

        <div className='bg-gradient-to-b from-rose-50 via-white to-white'>
          {/* Pricing section with single price and feature list */}
          <div className='max-w-6xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:px-8'>
            <div className='pb-16 xl:flex xl:items-center xl:justify-between'>
              <div>
                <h1 className='text-3xl font-extrabold sm:text-4xl sm:tracking-tight'>
                  <span className='text-gray-900'>Everything you need for </span>
                  <span className='text-rose-600'>$99 a month</span>
                </h1>
                <p className='mt-5 text-lg text-gray-500'>
                  Includes every feature we offer plus unlimited projects and unlimited users.
                </p>
              </div>
              <BasicLink
                href='#'
                className='inline-flex items-center justify-center w-full px-5 py-3 mt-8 text-sm font-medium text-white border border-transparent rounded-md bg-rose-600 hover:bg-rose-700 sm:mt-10 sm:w-auto xl:mt-0'
              >
                Get started today
              </BasicLink>
            </div>
            <div className='pt-16 border-t border-gray-200 xl:grid xl:grid-cols-3 xl:gap-x-8'>
              <div>
                <h2 className='text-sm font-semibold tracking-wide uppercase text-rose-600'>Everything you need</h2>
                <p className='mt-2 text-3xl font-extrabold text-gray-900'>All-in-one platform</p>
                <p className='mt-4 text-lg text-gray-500'>
                  Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla
                  nec. Urna, sed a lectus elementum blandit et.
                </p>
              </div>
              <div className='mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2'>
                <ul role='list' className='divide-y divide-gray-200'>
                  {features.slice(0, 5).map((feature, featureIdx) => (
                    <li key={feature} className={classNames(featureIdx === 0 ? 'md:py-0 md:pb-4' : '', 'py-4 flex')}>
                      <CheckIcon className='flex-shrink-0 w-6 h-6 text-green-500' aria-hidden='true' />
                      <span className='ml-3 text-sm text-gray-500'>{feature}</span>
                    </li>
                  ))}
                </ul>
                <ul role='list' className='border-t border-gray-200 divide-y divide-gray-200 md:border-t-0'>
                  {features.slice(5).map((feature, featureIdx) => (
                    <li
                      key={feature}
                      className={classNames(featureIdx === 0 ? 'md:border-t-0 md:py-0 md:pb-4' : '', 'py-4 flex')}
                    >
                      <CheckIcon className='flex-shrink-0 w-6 h-6 text-green-500' aria-hidden='true' />
                      <span className='ml-3 text-sm text-gray-500'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Branded FAQ */}
        <div className='bg-rose-900'>
          <div className='max-w-6xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:px-8'>
            <h2 className='text-3xl font-extrabold text-white'>Frequently asked questions</h2>
            <div className='pt-10 mt-6 border-t border-opacity-25 border-rose-400'>
              <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12'>
                {faqs.map((item) => (
                  <div key={item.id}>
                    <dt className='text-lg font-medium leading-6 text-white'>{item.question}</dt>
                    <dd className='mt-2 text-sm text-rose-200'>{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className='bg-rose-50 hide-temporary'>
          <div className='max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between'>
            <h2 className='text-3xl font-extrabold tracking-tight text-rose-900 sm:text-4xl'>
              <span className='block'>Ready to dive in?</span>
              <span className='block text-rose-600'>Start your free trial today.</span>
            </h2>
            <div className='flex mt-8 lg:flex-shrink-0 lg:mt-0'>
              <div className='inline-flex rounded-md shadow'>
                <BasicLink
                  href='#'
                  className='inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white border border-transparent rounded-md bg-rose-600 hover:bg-rose-700'
                >
                  Get started
                </BasicLink>
              </div>
            </div>
          </div>
        </div>

        {/* Simple footer */}
        <footer className='bg-gray-900'>
          <div className='max-w-md px-4 py-12 mx-auto overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-6xl lg:px-8'>
            <nav className='flex flex-wrap justify-center -mx-5 -my-2' aria-label='Footer'>
              {footerNavigation.main.map((item) => (
                <div key={item.name} className='px-5 py-2'>
                  <BasicLink href={item.href} className='text-sm text-gray-300 hover:text-gray-200'>
                    {item.name}
                  </BasicLink>
                </div>
              ))}
            </nav>
            <div className='flex justify-center mt-8 space-x-6'>
              {footerNavigation.social.map((item) => (
                <BasicLink key={item.name} href={item.href} className='text-gray-300 hover:text-gray-200'>
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='w-6 h-6' aria-hidden='true' />
                </BasicLink>
              ))}
            </div>
            <p className='mt-8 text-sm tracking-wide text-center text-gray-300'>
              &copy; 2021 Aris Ripandi. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Layout>
  )
}
