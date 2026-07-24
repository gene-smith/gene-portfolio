import Appbar from '../components/Appbar'

function ErrorPage() {
  return (
    <div>
      <Appbar />
      <div className='max-w-7xl mx-auto px-4'>
        <div className='text-center mt-12'>
          <h1 className='text-4xl font-bold mb-4'>404 Page Not Found</h1>
          <p className='text-xl text-gray-600 dark:text-gray-400'>
            The page you're looking for doesn't exist.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
