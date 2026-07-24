const ResumeSection = ({ resumeData }) => {
  if (!resumeData) return null

  const { experience, education, skills, certifications } = resumeData

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8'>
      {/* Mobile-first responsive grid layout */}
      <div className='grid gap-8 sm:gap-10 lg:gap-12 xl:gap-16 lg:grid-cols-2'>
        {/* Left Column */}
        <div className='space-y-8 sm:space-y-10 lg:space-y-12'>
          {/* Experience Section */}
          {experience && experience.length > 0 && (
            <section>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-brand mb-4 sm:mb-6 lg:mb-8'>
                Experience
              </h2>
              <div className='space-y-6 sm:space-y-8'>
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className='border-l-4 border-brand pl-4 sm:pl-6'
                  >
                    <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-1'>
                      {exp.position}
                    </h3>
                    <h4 className='text-base sm:text-lg lg:text-xl text-brand font-medium mb-2'>
                      {exp.company}
                    </h4>
                    <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3'>
                      {exp.duration}
                    </p>
                    {exp.details && (
                      <p className='text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
                        {exp.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Right Column */}
        <div className='space-y-8 sm:space-y-10 lg:space-y-12'>
          {/* Skills Section */}
          {skills && skills.length > 0 && (
            <section>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-brand mb-4 sm:mb-6 lg:mb-8'>
                Skills
              </h2>
              <div className='flex flex-wrap gap-2 sm:gap-3'>
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className='px-3 py-2 sm:px-4 sm:py-3 bg-brand text-white rounded-lg text-sm sm:text-base font-medium transition-transform hover:scale-105'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Certifications Section */}
          {certifications && certifications.length > 0 && (
            <section>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-brand mb-4 sm:mb-6 lg:mb-8'>
                Certifications
              </h2>
              <div className='space-y-4 sm:space-y-6'>
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className='border-l-4 border-brand pl-4 sm:pl-6'
                  >
                    <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-2'>
                      {cert.title}
                    </h3>
                    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2'>
                      <p className='text-base sm:text-lg text-brand font-medium'>
                        {cert.issuer}
                      </p>
                      <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400'>
                        {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education Section */}
          {education && education.length > 0 && (
            <section>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-brand mb-4 sm:mb-6 lg:mb-8'>
                Education
              </h2>
              <div className='space-y-4 sm:space-y-6'>
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className='border-l-4 border-brand pl-4 sm:pl-6'
                  >
                    <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-1'>
                      {edu.degree}
                    </h3>
                    <h4 className='text-base sm:text-lg lg:text-xl text-brand font-medium mb-2'>
                      {edu.institution}
                    </h4>
                    <p className='text-sm sm:text-base text-gray-600 dark:text-gray-400'>
                      {edu.duration}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default ResumeSection
