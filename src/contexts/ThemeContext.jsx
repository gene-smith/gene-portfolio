import { useEffect } from 'react'
import { ThemeContext } from './theme'

function ThemeProvider({ children }) {
  // Always use dark theme
  const theme = 'dark'

  useEffect(() => {
    // Ensure dark mode is always applied
    document.documentElement.classList.add('dark')
  }, [])

  const value = {
    theme,
    toggleTheme: () => {}, // No-op function for compatibility
    isDark: true,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
