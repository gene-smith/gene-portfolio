import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className='p-2 rounded-lg transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700'
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <FaMoon className='w-5 h-5 text-gray-700 dark:text-gray-300' />
      ) : (
        <FaSun className='w-5 h-5 text-yellow-500' />
      )}
    </button>
  )
}
