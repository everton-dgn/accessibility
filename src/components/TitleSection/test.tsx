import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import TitleSection from '.'

describe('<TitleSection />', () => {
  it('should render the heading', () => {
    renderWithTheme(<TitleSection title="Título de Exemplo" />)

    const h1 = screen.getByRole('heading', { name: 'Título de Exemplo' })

    expect(h1).toBeInTheDocument()
  })
})
