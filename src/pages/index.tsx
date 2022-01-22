import Link from 'next/link'
import * as S from 'styles'
import * as C from 'components'

export default function Home() {
  return (
    <S.Container>
      <C.HeadPage title="Página Inicial" />

      <C.TitleSection title="Acessibilidade Web" />

      <S.BtnGroup>
        <Link href="/pagina_exemplo_1" passHref>
          <S.LinkBtn>
            <C.Button
              fullWidth={true}
              color="blue"
              size="large"
              text="Página Exemplo 1"
              className="btn1"
            />
          </S.LinkBtn>
        </Link>

        <Link href="/pagina_exemplo_2" passHref>
          <S.LinkBtn>
            <C.Button
              fullWidth={true}
              color="blue"
              size="large"
              text="Página Exemplo 2"
              className="btn2"
            />
          </S.LinkBtn>
        </Link>

        <Link href="/pagina_exemplo_3" passHref>
          <S.LinkBtn>
            <C.Button
              fullWidth={true}
              color="blue"
              size="large"
              text="Página Exemplo 3"
              className="btn3"
            />
          </S.LinkBtn>
        </Link>
      </S.BtnGroup>
    </S.Container>
  )
}
