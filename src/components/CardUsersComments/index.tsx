import Image from 'next/image'
import Link from 'next/link'
import * as S from 'components/CardUsersComments/styles'

export type CardUsersCommentsProps = {
  userName: string
  city: string
  state: string
  comment: string
  urlUserBg: string
  urlAvatar: string
  urlProfile: string
  heigthREM: number
}

const CardUsersComments = ({
  userName,
  city,
  state,
  comment,
  urlUserBg,
  urlAvatar,
  urlProfile,
  heigthREM
}: CardUsersCommentsProps) => (
  <S.Container heigthREM={heigthREM} as="article">
    <S.WrapperInfoCard>
      <S.Comment>{comment}</S.Comment>

      <S.WrapperUser>
        <Link href={urlProfile} passHref>
          <S.WrapperLinkUser title={urlProfile}>
            <S.ContainerImgAvatar>
              <S.ImgAvatarUser src={`/imgs/${urlAvatar}`} alt={userName} />
            </S.ContainerImgAvatar>

            <S.UserInfo>
              <S.UserName>{userName}</S.UserName>
              <S.UserLocation>
                {city} • {state}
              </S.UserLocation>
            </S.UserInfo>
          </S.WrapperLinkUser>
        </Link>
      </S.WrapperUser>
    </S.WrapperInfoCard>

    <S.WrapperImgBackground>
      <Image
        src={`/imgs/carousel/${urlUserBg}`}
        layout="fill"
        alt={userName + ' - Plano de fundo do card'}
        priority={true}
      />
    </S.WrapperImgBackground>
  </S.Container>
)

export default CardUsersComments
