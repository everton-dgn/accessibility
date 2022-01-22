import { GetStaticProps } from 'next'
import axios from 'axios'
import * as S from 'pages/pagina_exemplo_2/styles'
import * as C from 'components'

export type dataUsersCommentsProps = {
  dataUsersComments: {
    userName: string
    city: string
    state: string
    urlUserBg: string
    urlAvatar: string
    urlProfile: string
    comment: string
  }[]
}

export default function UsersComments({
  dataUsersComments
}: dataUsersCommentsProps) {
  return (
    <S.Container as="section">
      <C.HeadPage title="Página Exemplo 2" />

      <C.TitleSection title="Página Exemplo 2" />

      <S.ContainerCarousel>
        <C.Carousel>
          {dataUsersComments.map(
            (
              {
                userName,
                city,
                state,
                urlUserBg,
                urlAvatar,
                urlProfile,
                comment
              },
              i
            ) => (
              <C.CardUsersComments
                key={userName + i}
                userName={userName}
                city={city}
                state={state}
                urlUserBg={urlUserBg}
                urlAvatar={urlAvatar}
                urlProfile={urlProfile}
                heigthREM={40}
                comment={comment}
              />
            )
          )}
        </C.Carousel>
      </S.ContainerCarousel>
    </S.Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/everton-dgn/accessibility/main/public/API/card_users_comments.json'
  )
  const dataUsersComments = data

  return {
    props: {
      dataUsersComments
    }
  }
}
