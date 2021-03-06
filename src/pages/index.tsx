import { useRouter } from 'next/router'
import * as S from 'styles'
import * as C from 'components'

export default function Home() {
  const router = useRouter()

  const hrefs = [
    'pagina_exemplo_1',
    'pagina_exemplo_2',
    'pagina_exemplo_3',
    'pagina_exemplo_4'
  ]

  const handleClickBtnRedirectToPage = (href: string) => {
    router?.push(href)
  }

  return (
    <S.Container>
      <C.HeadPage title="Página Inicial" />

      <C.TitleSection title="Acessibilidade Web" />

      <S.BtnGroup>
        {hrefs.map((href, i) => (
          <C.Button
            key={href}
            fullWidth={true}
            color="blue"
            size="large"
            text={`Página Exemplo ${i + 1}`}
            aria-label={`Página Exemplo ${i + 1}`}
            className={`btn${i + 1}`}
            onClick={() => handleClickBtnRedirectToPage(href)}
            onMouseEnter={() => router?.prefetch(href)}
          />
        ))}
      </S.BtnGroup>
    </S.Container>
  )
}
