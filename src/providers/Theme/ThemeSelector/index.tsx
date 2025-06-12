'use client'

import React from 'react'
import type { Theme } from './types'
import { useTheme } from '..'

export const ThemeSelector: React.FC = () => {
  const { setTheme } = useTheme()

  const onThemeChange = (themeToSet: Theme | 'auto') => {
    if (themeToSet === 'auto') {
      setTheme(null)
    } else {
      setTheme(themeToSet)
    }
  }

  return (
    <div>
      <a onClick={() => onThemeChange('auto')}>Auto</a>
      <a onClick={() => onThemeChange('dark')}>Dark</a>
      <a onClick={() => onThemeChange('light')}>Light</a>
    </div>
  )
}
