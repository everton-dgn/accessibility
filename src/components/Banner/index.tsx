import { ReactNode } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as C from 'components'
import * as S from 'components/Banner/styles'

export type BannerProps = {
  title: string
  description: string
  question?: string
  img: string
  btn?: { textBtn: string; route: string }[]
  children?: ReactNode
}

const Banner = ({
  title,
  description,
  question,
  img,
  btn,
  children
}: BannerProps) => {
  const router = useRouter()

  return (
    <S.Header role="heading">
      <S.Container>
        <S.ImgPinkBalloon
          aria-hidden="true"
          width="62"
          height="62"
          viewBox="0 0 62 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 31C0 13.8792 13.8792 0 31 0C48.1208 0 62 13.8792 62 31C62 48.1208 48.1208 62 31 62H0L0 31Z"
            fill="#FF5B58"
          />
        </S.ImgPinkBalloon>

        <S.Row>
          <S.WrapperInfo>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            {!!question && <S.Question>{question}</S.Question>}

            {!!btn && (
              <S.BtnGroup>
                {btn?.map(({ textBtn, route }, i) => (
                  <C.Button
                    key={textBtn}
                    color="blue"
                    size="large"
                    text={textBtn}
                    onClick={() => router.push(route)}
                    aria-label={textBtn}
                    className={`btn${i}`}
                  />
                ))}
              </S.BtnGroup>
            )}
          </S.WrapperInfo>

          <S.WrapperImg>
            <Image
              src={img}
              alt="Banner Principal"
              width="433"
              height="313"
              priority={true}
            />
            <S.WavesSvg />
          </S.WrapperImg>
        </S.Row>

        <S.ImgPurpleBalloon
          aria-hidden="true"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100H0L0 50Z"
            fill="#334BC8"
          />
        </S.ImgPurpleBalloon>
      </S.Container>

      {!!children && <S.Footer>{children}</S.Footer>}
    </S.Header>
  )
}

export default Banner
