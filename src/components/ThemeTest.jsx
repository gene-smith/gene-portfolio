import { useTheme } from '../hooks/useTheme'

export default function ThemeTest() {
  const { theme, isDark, toggleTheme } = useTheme()

  return (
    <div className='p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 m-4'>
      <h3 className='text-lg font-bold mb-2'>Theme Test Component</h3>
      <p className='mb-2'>
        Current theme: <strong>{theme}</strong>
      </p>
      <p className='mb-2'>
        Is dark mode: <strong>{isDark ? 'Yes' : 'No'}</strong>
      </p>
      <button
        onClick={toggleTheme}
        className='px-4 py-2 bg-brand text-white rounded hover:bg-opacity-90 transition-colors'
      >
        Toggle Theme
      </button>
    </div>
  )
}
