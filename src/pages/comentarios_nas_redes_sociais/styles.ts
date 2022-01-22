import Layouts from 'layouts'
import styled, { css } from 'styled-components'

export const Container = styled(Layouts.Container).attrs({ as: 'section' })`
  margin: 2rem auto;

  ${({ theme }) => theme.breakPoint(800)} {
    margin: 12rem auto;
  }
`

export const GridSocialComments = styled.div`
  break-inside: avoid;
  column-count: 1;
  width: 100%;

  ${({ theme }) => css`
    animation: ${theme.animations.fadeInMove('0', '40px', '0')} 1s ease;
    gap: ${theme.spacings.large};
    margin-top: 0;

    ${theme.breakPoint(644)} {
      column-count: 2;
      gap: ${theme.grid.gutter};
    }

    ${theme.breakPoint(800)} {
      column-count: 3;
      margin-top: ${theme.spacings.large};
    }
  `}
`
