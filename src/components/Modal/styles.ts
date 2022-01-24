import { ExclamationTriangle, InfoCircle, X } from '@styled-icons/bootstrap'
import Layouts from 'layouts'
import styled, { css } from 'styled-components'

export const Overlay = styled(Layouts.Col)<{
  show?: boolean
}>`
  display: flex;
  height: 100vh;
  position: fixed;
  padding: 1rem;
  left: 0;
  top: 0;
  z-index: 100;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(0);
  -webkit-backdrop-filter: blur(0);
  animation: ${({ theme }) => theme.animations.glass} 0.1s linear forwards;
  transition: background-color 0.2s linear;

  ${({ show }) =>
    show
      ? css`
          visibility: visible;
          opacity: 1;
          background-color: ${({ theme }) => theme.colors.overlay};
          backdrop-filter: blur(0.7rem);
          -webkit-backdrop-filter: blur(0.7rem);
        `
      : css`
          visibility: hidden;
          opacity: 0.6;
          background-color: transparent;
          backdrop-filter: blur(0);
          -webkit-backdrop-filter: blur(0);
        `}
  transition: all 0.2s cubic-bezier(.4,0,.2,1);
`

export const ContainerPopup = styled(Layouts.Col)<{ show?: boolean }>`
  border: 0.1rem solid ${({ theme }) => theme.colors.blueLight};
  max-width: 43rem;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.8rem;
  box-shadow: 0 0.2rem 2rem 0.4rem #0000007f;
  overflow: hidden;
  ${({ show }) =>
    show
      ? css`
          visibility: visible;
          opacity: 1;
          transform: scale(1);
        `
      : css`
          visibility: hidden;
          opacity: 0.6;
          transform: scale(0.3);
        `}
  transition: all 0.2s cubic-bezier(.4,0,.2,1);
`

export const TitleModal = styled(Layouts.Row)`
  background: ${({ theme }) => theme.colors.bullet};
  align-items: center;
  border-radius: 0.8rem 0.8rem 0 0 !important;
  padding: 1rem 2rem !important;

  span {
    font-size: ${({ theme }) => theme.font.sizes.Large};
    padding-right: 1rem;
    display: flex;
    flex-wrap: wrap;
    margin-left: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black};
  }
`

export const WrapperBtnClose = styled(Layouts.Col)`
  width: fit-content;
  z-index: 1;
  margin-left: auto;

  button {
    padding: 0;
  }

  svg {
    width: 3rem;
    min-width: 3rem;
    height: 3rem;
    min-height: 3rem;
  }
`

export const IconClose = styled(X)``

export const IconInfo = styled(InfoCircle)`
  color: ${({ theme }) => theme.colors.black};
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
`

export const IconWarn = styled(ExclamationTriangle)`
  color: ${({ theme }) => theme.colors.white};
  width: 2rem;
  min-width: 2rem;
  height: 2rem;
`

export const Content = styled(Layouts.Col)`
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.blueDark};
  padding: 2rem;
`

export const FooterModal = styled(Layouts.Row)`
  justify-content: space-evenly;
  border-radius: 0 0 0.8rem 0.8rem;
  padding: 1.2rem 1rem 1rem 1rem;
  flex-wrap: wrap;

  button {
    margin: 0 0.5rem 1rem 0.5rem;
  }
`
