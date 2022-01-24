import { ReactNode } from 'react'
import Slider from 'react-slick'
import * as S from 'components/Carousel/styles'

export type CarouselUsersCommentsProps = {
  children: ReactNode
}

const CarouselUsersComments = ({ children }: CarouselUsersCommentsProps) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    accessibility: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  }

  return (
    <S.Wrapper as="section" aria-labelledby="Carrossel">
      <Slider {...settings}>{children}</Slider>
    </S.Wrapper>
  )
}

export default CarouselUsersComments
