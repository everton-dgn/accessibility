import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import * as S from 'components/Button/styles'

export type SizeProps = 'small' | 'medium' | 'large' | 'xLarge'

export type ColorProps = 'gray' | 'blue' | 'red'

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  text?: string
  size: SizeProps
  color: ColorProps
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, BtnProps>(
  ({ icon, text, ...props }, ref) => (
    <S.Container {...props} ref={ref}>
      {icon}
      {!!text && <span>{text}</span>}
    </S.Container>
  )
)

export default Button
