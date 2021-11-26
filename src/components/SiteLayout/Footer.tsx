import { FacebookLogo, GithubLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'

const footerNavigation = {
  main: [
    { name: 'About', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Support', href: '#' }
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: FacebookLogo
    },
    {
      name: 'Instagram',
      href: '#',
      icon: InstagramLogo
    },
    {
      name: 'Twitter',
      href: '#',
      icon: TwitterLogo
    },
    {
      name: 'GitHub',
      href: '#',
      icon: GithubLogo
    }
  ]
}

const Footer = ({ ...props }) => {
  return (
    <footer className='bg-gray-900' {...props}>
      <div className='px-4 py-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8'>
        <nav className='flex flex-wrap justify-center -mx-5 -my-2' aria-label='Footer'>
          {footerNavigation.main.map((item) => (
            <div key={item.name} className='px-5 py-2'>
              <a href={item.href} className='text-base text-gray-300 hover:text-brand-50'>
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className='flex justify-center mt-8 space-x-6'>
          {footerNavigation.social.map((item) => (
            <a key={item.name} href={item.href} className='text-gray-300 hover:text-brand-50'>
              <span className='sr-only'>{item.name}</span>
              <item.icon className='w-6 h-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <p className='mt-8 text-base tracking-wide text-center text-gray-400'>
          &copy; 2021 Aris Ripandi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
