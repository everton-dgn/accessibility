import { renderWithTheme } from 'utils/tests/helpers'
import HeadPage from '.'

describe('<HeadPage />', () => {
  it('should render a snapshot', () => {
    const { container } = renderWithTheme(<HeadPage title="Acessibilidade" />)

    expect(container).toMatchSnapshot()
  })
})
