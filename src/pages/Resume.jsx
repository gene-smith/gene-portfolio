import { useState, useEffect } from 'react'
import Appbar from '../components/Appbar'
import ResumeSection from '../components/ResumeSection'
import { loadYamlData } from '../utils/yamlLoader'

export default function Resume() {
  const [resumeData, setResumeData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadResumeData = async () => {
      try {
        const data = await loadYamlData('resume.yaml')
        setResumeData(data)
      } catch (err) {
        console.error('Error loading resume data:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadResumeData()
  }, [])

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className='max-w-7xl mx-auto px-4'>
          <div className='my-12'></div>
          <div className='text-6xl font-bold text-brand mb-8'>Resume</div>
          <div className='text-gray-600 dark:text-gray-400 text-xl'>
            <p>Loading resume data...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <Appbar />
        <div className='max-w-7xl mx-auto px-4'>
          <div className='my-12'></div>
          <div className='text-6xl font-bold text-brand mb-8'>Resume</div>
          <div className='text-red-600 dark:text-red-400 text-xl'>
            <p>Error loading resume data: {error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen'>
      <Appbar />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Responsive vertical spacing */}
        <div className='my-8 sm:my-12 lg:my-16'></div>

        {/* Header */}
        <div className='mb-8 sm:mb-12 lg:mb-16'>
          <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand'>
            Resume
          </div>
        </div>

        <ResumeSection resumeData={resumeData} />
      </div>
    </div>
  )
}
