import Layouts from 'layouts'
import styled from 'styled-components'

export const Container = styled(Layouts.Container)`
  margin: 2rem auto;
  height: 4000px;

  ${({ theme }) => theme.breakPoint(800)} {
    margin: 12rem auto;
  }
`

export const Column = styled(Layouts.Col)`
  max-width: 35rem;
  margin: 5rem auto;

  .btn {
    opacity: 0;
    animation: ${({ theme }) => theme.animations.fadeInMove('0', '30px', '0')}
      0.3s linear forwards 0.2s;
  }
`
