import styled, { css } from 'styled-components'
import { T } from 'theme'
import { BtnProps } from '.'

const SizesBtn = {
  small: css`
    ${({ theme }) => css`
      height: min-content;
      font-size: ${theme.font.sizes.xSmall};
      padding: ${theme.spacings.xSmall} ${theme.spacings.small};
    `}
  `,
  medium: css`
    ${({ theme }) => css`
      height: min-content;
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.small} ${theme.spacings.xLarge};
    `}
  `,
  large: css`
    ${({ theme }) => css`
      height: min-content;
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.medium} ${theme.spacings.xxxLarge};
    `}
  `,
  xLarge: css`
    ${({ theme }) => css`
      height: min-content;
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.medium} ${theme.spacings.xtreme};
    `}
  `
}

const ColorsBtn = {
  gray: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.gray};

      &:hover {
        background-color: ${theme.colors.grayHover};
      }
    `}
  `,
  blue: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.primary};

      &:hover {
        background-color: ${theme.colors.primaryHover};
      }
    `}
  `,
  red: css`
    ${({ theme }) => css`
      background-color: ${theme.colors.red};

      &:hover {
        background-color: ${theme.colors.redHover};
      }
    `}
  `
}

export const Container = styled.button<BtnProps>`
  ${({ theme, fullWidth, color, size }) => css`
    cursor: pointer;
    border-radius: ${theme.border.radius};
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    border: 2px solid transparent;
    text-shadow: 0 0 0.3rem rgb(0 0 0 / 60%);
    transition: background-color 0.15s ease-in-out;
    width: 100%;
    ${!!color && ColorsBtn[color]};
    ${!!size && SizesBtn[size]}

    ${T.breakPoint(480)} {
      width: ${fullWidth ? '100%' : 'fit-content'};
    }

    &:disabled,
    &:disabled:hover {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: ${theme.colors.disabled};
    }

    &:focus {
      border: 2px solid #fff;
      box-shadow: 0 0 0 2px #222;
    }

    span {
      color: ${theme.colors.white};
    }

    svg + span {
      margin-left: 1rem;
    }

    svg {
      width: 2rem;
      min-width: 2rem;
      height: 2rem;
      min-height: 2rem;
      color: ${theme.colors.white};
    }
  `}
`
