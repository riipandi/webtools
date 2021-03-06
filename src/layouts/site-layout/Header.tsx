import { isMacOs } from 'react-device-detect'
import Link from 'next/link'
import { ThemeSwitcher } from '@/components/elements'

const Header = () => {
  return (
    <header className='z-30 bg-white shadow dark:bg-gray-900 absolute top-0 w-full'>
      <nav className='max-w-5xl px-4 lg:px-0 py-4 mx-auto lg:flex lg:justify-between lg:items-center'>
        <div className='lg:flex lg:items-center w-full mr-4'>
          <div className='flex items-center justify-between'>
            <div>
              <Link href='/'>
                <a className='text-xl uppercase font-bold text-primary-600 transition-colors duration-200 transform dark:text-white lg:text-2xl hover:text-primary-700 dark:hover:text-gray-300'>
                  Webtools
                </a>
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className='flex lg:hidden'>
              <button
                type='button'
                className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
                aria-label='toggle menu'
              >
                <svg viewBox='0 0 24 24' className='w-6 h-6 fill-current'>
                  <path
                    fillRule='evenodd'
                    d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className='hidden flex-col text-gray-600 capitalize dark:text-gray-300 lg:flex lg:px-12 lg:flex-row lg:items-center'>
            <div>
              <Link href='/about'>
                <a className='mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200'>
                  About
                </a>
              </Link>
              <Link href='/explore'>
                <a className='mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200'>
                  Explore
                </a>
              </Link>
              <Link href='/extensions'>
                <a className='mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200'>
                  Browser Extension
                </a>
              </Link>
            </div>
            <div className='relative mt-4 lg:mt-0 lg:mx-4'>
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                <svg className='w-4 h-4 text-gray-600 dark:text-gray-300' viewBox='0 0 24 24' fill='none'>
                  <path
                    d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                    stroke='currentColor'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
              <input
                type='text'
                className='w-full py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 dark:placeholder-gray-300 dark:focus:border-gray-300 lg:w-56 lg:border-transparent dark:bg-gray-900 dark:text-gray-300 focus:outline-none focus:border-gray-600'
                placeholder={`Search (${isMacOs ? 'cmd+k' : 'ctrl+k'})`}
                aria-label={`Search (${isMacOs ? 'cmd+k' : 'ctrl+k'})`}
              />
            </div>
          </div>
        </div>
        <div className='hidden items-center justify-center mt-6 space-x-5 lg:flex lg:mt-0'>
          <Link href='https://github.com/riipandi/webtools'>
            <a
              className='text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300'
              aria-label='Github'
            >
              <svg
                className='w-6 h-6 fill-current'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z'></path>
              </svg>
            </a>
          </Link>
          <ThemeSwitcher iconSize={6} />
        </div>
      </nav>
    </header>
  )
}

export default Header
