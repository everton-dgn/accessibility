import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'
import Banner from '.'
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<Banner />', () => {
  beforeEach(() => {
    renderWithTheme(
      <Banner
        title="Bem-vindo Marcio,"
        description="Descrição de exemplo."
        question="O que você prefere?"
        img="/imgs/persons.jpg"
        btn={[
          { textBtn: 'Criar um grupo', route: '/criar-grupo' },
          { textBtn: 'Entrar em um grupo', route: '/boas-vindas' }
        ]}
      />
    )
  })

  it('should render the banner', () => {
    const banner = screen.getByRole('banner')

    expect(banner).toBeInTheDocument()
    expect(banner).toMatchSnapshot()
  })

  it('should render 3 texts and 1 image', () => {
    const textTitle = screen.getByText('Bem-vindo Marcio,')
    const textDescription = screen.getByText('Descrição de exemplo.')
    const textQuestion = screen.getByText('O que você prefere?')
    const img = screen.getByAltText('Banner Principal')

    expect(textTitle).toBeInTheDocument()
    expect(textDescription).toBeInTheDocument()
    expect(textQuestion).toBeInTheDocument()
    expect(img).toBeInTheDocument()
  })

  it('should render 2 botões', () => {
    const btn1 = screen.getByRole('button', { name: 'Criar um grupo' })
    const btn2 = screen.getByRole('button', { name: 'Entrar em um grupo' })

    expect(btn1).toBeInTheDocument()
    expect(btn2).toBeInTheDocument()
  })

  it('should call a route by clicking the button', async () => {
    userEvent.click(
      await screen.getByRole('button', { name: 'Criar um grupo' })
    )

    expect(push).toHaveBeenCalledWith('/criar-grupo')

    userEvent.click(
      await screen.getByRole('button', { name: 'Entrar em um grupo' })
    )

    expect(push).toHaveBeenCalledWith('/boas-vindas')
  })
})
