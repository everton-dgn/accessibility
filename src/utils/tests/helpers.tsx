import { ReactNode } from 'react'
import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { T } from 'theme'

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ThemeProvider theme={T}>{children}</ThemeProvider>)
