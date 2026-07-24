import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from './Link'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Resume', href: '/resume' },
]

export default function Appbar() {
  return (
    <Disclosure
      as='header'
      className='max-w-7xl mx-auto my-4 px-4 sm:px-6 lg:px-8'
    >
      {({ open }) => (
        <>
          <div className='flex justify-center items-center h-16'>
            {/* Desktop Navigation */}
            <div className='hidden md:block'>
              <div className='flex items-baseline space-x-8'>
                {navigation.map(item => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className='text-base lg:text-lg hover:text-brand focus:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-50 rounded px-3 py-2'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className='flex items-center'>
              {/* Mobile menu button */}
              <div className='md:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-brand hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Panel */}
          <Disclosure.Panel className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg mt-2'>
              {navigation.map(item => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:text-brand focus:bg-gray-100 dark:focus:bg-gray-700 transition-colors'
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
