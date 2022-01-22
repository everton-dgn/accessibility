import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import CardUsersComments from '.'

describe('<CardUsersComments />', () => {
  beforeEach(() => {
    renderWithTheme(
      <CardUsersComments
        userName="Patricia Godoy"
        city="Belo Horizonte"
        state="Minas Gerais"
        urlUserBg="slide-2.jpg"
        urlAvatar="avatar-woman.jpg"
        urlProfile="/comentarios_de_usuarios"
        heigthREM={40}
        comment="Comentário de exemplo"
      />
    )
  })

  it('should render the card with 2 images and 1 height fixe', () => {
    const imgAvatar = screen.getByAltText('Patricia Godoy')
    const imgBgCard = screen.getByAltText(
      'Patricia Godoy - Plano de fundo do card'
    )
    const card = screen.getByRole('article')

    expect(imgAvatar).toBeInTheDocument()
    expect(imgBgCard).toBeInTheDocument()
    expect(card).toHaveStyle({ height: '40rem' })
  })

  it('should render the card with 4 texts and 1 link', () => {
    const textUserName = screen.getByText('Patricia Godoy')
    const textCity = screen.getByText(/belo horizonte/i)
    const textState = screen.getByText(/minas gerais/i)
    const textComment = screen.getByText('Comentário de exemplo')
    const link = screen.getByTitle('/comentarios_de_usuarios')

    expect(textUserName).toBeInTheDocument()
    expect(textCity).toBeInTheDocument()
    expect(textState).toBeInTheDocument()
    expect(textComment).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/comentarios_de_usuarios')
  })
})
