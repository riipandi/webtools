import FooterCTA from '@/components/partials/FooterCTA'

const Footer = () => {
  return (
    <footer className='w-full'>
      <div className='max-w-5xl px-4 lg:px-0 py-8 mx-auto'>
        <FooterCTA />
        <hr className='my-10 border-gray-300 dark:border-gray-700' />
        <div className='flex flex-col mb-4 items-center sm:flex-row sm:justify-between'>
          <p className='text-sm text-gray-500'>&copy; Copyright 2021. All Rights Reserved.</p>
          <div className='flex mt-8 sm:mt-0 space-x-6'>
            <a
              href='#'
              className='text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              aria-label='Reddit'
            >
              About
            </a>
            <a
              href='#'
              className='text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              aria-label='Reddit'
            >
              {' '}
              Privacy{' '}
            </a>
            <a
              href='#'
              className='text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              aria-label='Reddit'
            >
              {' '}
              Cookies{' '}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
