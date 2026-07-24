import Appbar from '../components/Appbar'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <Appbar />
      <div className='max-w-7xl mx-auto px-4'>
        <div className='my-12'></div>
        <div className='text-6xl font-bold text-brand mb-8'>404</div>
        <div className='text-gray-600 dark:text-gray-400 text-xl mb-8'>
          <p>Oops! The page you're looking for doesn't exist.</p>
        </div>
        <Link
          to='/'
          className='inline-block px-6 py-3 bg-brand text-white rounded-lg hover:bg-opacity-80 transition-all duration-200'
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}
