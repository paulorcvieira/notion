import { useContext } from 'react'

import { IThemeHook, ThemeContext } from 'contexts/Theme'

export const useTheme = () => {
  const context = useContext<IThemeHook>(ThemeContext)
  if (!context) throw new Error('useThemes must be use within a ThemeProvider')
  return context
}
