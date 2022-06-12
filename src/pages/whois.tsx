import { PageLayout } from '@/layouts/site-layout'
import { RenderCode } from '@/components/elements'
import { useState } from 'react'

export default function WhoisPage() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const domain = e.target.elements.domain.value

    setData(null)
    setLoading(true)

    fetch(`/api/whois?domain=${domain}`)
      .then((res) => res.text())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }

  return (
    <PageLayout title='WHOIS Domain' className='content-wrapper'>
      <section className='py-16 mx-auto'>
        <div className='inline-flex items-center justify-between w-full'>
          <h1 className='text-2xl font-bold lg:text-3xl text-primary-500'>WHOIS Domain</h1>
          <div className='flex items-center justify-center pb-6 md:py-0'>
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col p-1 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                <input
                  className='px-4 py-2 text-gray-700 border-0 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent'
                  type='text'
                  name='domain'
                  placeholder='Enter domain name'
                  aria-label='Enter domain name'
                  required
                />
                <button
                  type='submit'
                  className='px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'
                >
                  Check
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className='mt-8'>
          {isLoading && <p>Loading...</p>}
          {data && <RenderCode content={data} />}
        </div>
      </section>
    </PageLayout>
  )
}
