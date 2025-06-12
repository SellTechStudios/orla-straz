import { AuthProvider } from './Auth'
import { HeaderThemeProvider } from './HeaderTheme'
import React from 'react'
import { ThemeProvider } from './Theme'

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <HeaderThemeProvider>{children}</HeaderThemeProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}
