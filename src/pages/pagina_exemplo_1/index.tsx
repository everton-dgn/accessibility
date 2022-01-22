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
          description="Para você aproveitar nossas oportunidades primeiro você precisa estar dentro de um grupo, estamos aqui para lhe ajudar."
          question="O que você prefere?"
          img="/imgs/persons.jpg"
          btn={[
            { textBtn: 'Criar um grupo', route: '/pagina_exemplo_1' },
            { textBtn: 'Entrar em um grupo', route: '/pagina_exemplo_1' }
          ]}
        >
          <S.Paragraph>
            Qualquer dúvida que você tiver é só nos chamar no nosso número de
            <Link href="/pagina_exemplo_1" passHref>
              <S.LinkZap>WhatsApp</S.LinkZap>
            </Link>
            .
          </S.Paragraph>
        </C.Banner>
      </S.Container>
    </S.WrapperBanner>
  )
}
