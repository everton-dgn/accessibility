import { Story } from '@storybook/react'
import Layouts from 'layouts'
import styled, { css } from 'styled-components'
import Carousel from '.'
import * as C from 'components'
import { dataUsersComments } from 'components/CardUsersComments/mock'

const Container = styled(Layouts.Container).attrs({ as: 'section' })`
  margin: 2rem auto;
  padding: 0;

  ${({ theme }) => theme.breakPoint(800)} {
    margin: 12rem auto;
  }
`

const ContainerCarousel = styled(Layouts.Col)`
  max-width: 93vw;

  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};

    ${theme.breakPoint(800)} {
      margin-top: ${theme.spacings.xtreme};
    }
  `}
`

const Template: Story = args => (
  <Container>
    <ContainerCarousel>
      <Carousel {...args}>
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
              heigthREM={38}
              comment={comment}
            />
          )
        )}
      </Carousel>
    </ContainerCarousel>
  </Container>
)

export const Default = Template.bind({})
