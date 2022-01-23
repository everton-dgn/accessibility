import Link from 'next/link'
import * as S from 'pages/pagina_exemplo_1/styles'
import * as C from 'components'

export default function Welcome() {
  return (
    <S.WrapperBanner>
      <S.Container>
        <C.HeadPage title="Página Exemplo 1" />

        <C.Banner
          title="Página Exemplo 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec."
          question="Nihil numquam reiciendis."
          img="/imgs/persons.jpg"
          btn={[
            { textBtn: 'Botão de Exemplo', route: '/pagina_exemplo_1' },
            { textBtn: 'Clique Aqui!', route: '/pagina_exemplo_1' }
          ]}
        >
          <S.Paragraph>
            Esse quas aut quis praesentium eos aut quis praesentium eos.
            <Link href="/pagina_exemplo_1" passHref>
              <S.LinkZap>Link de Ação</S.LinkZap>
            </Link>
            .
          </S.Paragraph>
        </C.Banner>
      </S.Container>
    </S.WrapperBanner>
  )
}
