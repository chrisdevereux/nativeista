import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import { Theme } from '../util'

interface NativeistaProps {
  theme: Theme
  children: React.ReactNode
}

export function Nativeista({ theme, children }: NativeistaProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
