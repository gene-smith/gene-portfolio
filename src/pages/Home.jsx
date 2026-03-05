import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaLinkedinIn as LinkedIn,
  FaFacebookF as Facebook,
  FaSpotify as Spotify,
} from 'react-icons/fa'
import Appbar from '../components/Appbar'

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const onChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', onChange)
    return () => mediaQuery.removeEventListener('change', onChange)
  }, [])

  return prefersReducedMotion
}

export default function Home() {
  const prefersReducedMotion = usePrefersReducedMotion()

  const iconAnimationProps = prefersReducedMotion
    ? {}
    : { whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 } }
  return (
    <div className='min-h-screen'>
      <Appbar />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Responsive vertical spacing */}
        <div className='my-8 sm:my-12 lg:my-16'></div>

        {/* Responsive hero title */}
        <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand leading-tight'>
          <span className='text-gray-900 dark:text-white'>Hello, I'm</span>{' '}
          <br />
          Gene Smith.
        </div>

        {/* Responsive code block */}
        <div className='text-2xl sm:text-3xl lg:text-4xl code mt-6 sm:mt-8 mb-4 sm:mb-6'>
          async {'{'}
        </div>

        {/* Responsive intro text with better mobile spacing */}
        <div className='text-gray-600 dark:text-gray-400 mx-4 sm:mx-8 lg:mx-12 my-6 sm:my-8 text-lg sm:text-xl lg:text-2xl info leading-relaxed'>
          Seasoned marketing executive/technologist, experienced solutions architect, and AI enthusiast. Howard U. Follow me. Contact me. Etc....
        </div>

        {/* Responsive closing code block */}
        <div className='text-2xl sm:text-3xl lg:text-4xl code mt-4 mb-6 sm:mb-8'>
          {'}'}
        </div>

        {/* Responsive social icons grid */}
        <div className='mt-8 sm:mt-12'>
          <div className='flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 max-w-md mx-auto'>
            <motion.a
              className='text-2xl sm:text-3xl lg:text-4xl icon focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-50 rounded p-2 hover:scale-110 transition-transform'
              href='https://www.linkedin.com/in/genesmith1'
              target='_blank'
              rel='noopener noreferrer'
              {...iconAnimationProps}
              aria-label='LinkedIn Profile'
            >
              <LinkedIn />
            </motion.a>
            <motion.a
              className='text-2xl sm:text-3xl lg:text-4xl icon focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-50 rounded p-2 hover:scale-110 transition-transform'
              href='https://www.facebook.com/gene.r.smith'
              target='_blank'
              rel='noopener noreferrer'
              {...iconAnimationProps}
              aria-label='Facebook Profile'
            >
              <Facebook />
            </motion.a>
            <motion.a
              className='text-2xl sm:text-3xl lg:text-4xl icon focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-50 rounded p-2 hover:scale-110 transition-transform'
              href='https://github.com/gene-smith'
              target='_blank'
              rel='noopener noreferrer'
              {...iconAnimationProps}
              aria-label='GitHub Profile'
            >
              <Github />
            </motion.a>
            <motion.a
              className='text-2xl sm:text-3xl lg:text-4xl icon focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-50 rounded p-2 hover:scale-110 transition-transform'
              href='https://twitter.com/gene_r_smith'
              target='_blank'
              rel='noopener noreferrer'
              {...iconAnimationProps}
              aria-label='Twitter Profile'
            >
              <Twitter />
            </motion.a>
            <motion.a
              className='text-2xl sm:text-3xl lg:text-4xl icon focus:outline-none focus:ring-2 focus:ring-brand focus:ring-opacity-50 rounded p-2 hover:scale-110 transition-transform'
              href='https://open.spotify.com/user/genesmith?si=xDf3RF02RFCHuXH5FZB82w'
              target='_blank'
              rel='noopener noreferrer'
              {...iconAnimationProps}
              aria-label='Spotify Profile'
            >
              <Spotify />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}
