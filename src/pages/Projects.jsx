import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Appbar from '../components/Appbar'
import Card from '../components/Card'

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

// Import the projects data as a static JSON for now
const projectsData = [
  {
    id: 1,
    title: 'Qr-Code-Application',
    subtitle: 'A new Flutter project',
    link: 'https://github.com/Mr404Found/Qr-Code-Application',
  },
  {
    id: 2,
    title: 'Basic Music',
    subtitle: 'Basic Music Player That lets you to play music',
    link: 'https://github.com/Mr404Found/Basic-Music-Player',
  },
  {
    id: 3,
    title: 'Age Calculator',
    subtitle: 'Get Your Age',
    link: 'https://github.com/Mr404Found/AgeCalculator',
  },
]

function Projects() {
  const prefersReducedMotion = usePrefersReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0.2 : 0.5 },
    },
  }

  return (
    <div className='min-h-screen'>
      <Appbar />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Responsive vertical spacing */}
        <div className='my-8 sm:my-12 lg:my-16'></div>

        <motion.h1
          className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand mb-8 sm:mb-12 lg:mb-16'
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.2 : 0.5 }}
        >
          Projects
        </motion.h1>

        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          {projectsData.map(project => {
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className='w-full'
              >
                <Card
                  cardTitle={project.title}
                  cardSubtitle={project.subtitle}
                  link={project.link}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default Projects
