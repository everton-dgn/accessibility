import { memo, ReactNode, useCallback } from 'react'
import { useAccessibilityModal } from 'hooks'
import * as S from './styles'
import * as C from 'components'
import { ColorProps, SizeProps } from 'components/Button'

type BtnModalProps = {
  icon?: ReactNode
  text?: string
  size: SizeProps
  color: ColorProps
  ariaLabel: string
}

export type ModalProps = {
  type: 'warn' | 'info'
  title: string
  isVisible: boolean
  changeVisibility: () => void
  btnInfo?: BtnModalProps[]
  msg: string
}

type Event = {
  target: EventTarget
  currentTarget: EventTarget
}

const Modal = ({
  type,
  isVisible,
  changeVisibility,
  title,
  btnInfo,
  msg
}: ModalProps) => {
  const { forwardFocus, closePressKeyEsc, refModal, btnCloseModalRef } =
    useAccessibilityModal({
      timeMilSecApplyFocusAfterAnimation: 200
    })

  const outsideClick = useCallback(
    (e: Event) => {
      e.target === e.currentTarget && changeVisibility()
      forwardFocus()
    },
    [changeVisibility, forwardFocus]
  )

  const closeModalAndActionLastFocusedElement = useCallback(() => {
    changeVisibility()
    forwardFocus()
  }, [changeVisibility, forwardFocus])

  return (
    <S.Overlay
      onClick={(e: Event) => outsideClick(e)}
      show={isVisible}
      onKeyDown={(e: { key: string }) =>
        closePressKeyEsc(e) && changeVisibility()
      }
      ref={refModal}
    >
      <S.ContainerPopup
        show={isVisible}
        onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="Modal"
        aria-modal={isVisible}
      >
        <S.TitleModal>
          {type === 'info' ? <S.IconInfo /> : <S.IconWarn />}

          <span>{title}</span>
          <S.WrapperBtnClose onClick={changeVisibility}>
            <C.Button
              icon={<S.IconClose />}
              onClick={forwardFocus}
              color="red"
              size="small"
              aria-label="Fechar Modal"
              ref={btnCloseModalRef}
            />
          </S.WrapperBtnClose>
        </S.TitleModal>

        <S.Content>{msg}</S.Content>

        <S.FooterModal>
          {!!btnInfo &&
            btnInfo.map(({ text, size, color, icon, ariaLabel }) => (
              <C.Button
                key={text}
                icon={icon}
                text={text}
                size={size}
                color={color}
                aria-label={ariaLabel}
                onClick={closeModalAndActionLastFocusedElement}
              />
            ))}
        </S.FooterModal>
      </S.ContainerPopup>
    </S.Overlay>
  )
}

export default memo(Modal)
