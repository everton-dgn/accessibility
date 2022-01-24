import { memo, ReactNode, useCallback } from 'react'
import { useAccessibilityModal } from 'hooks'
import * as S from './styles'
import * as C from 'components'
import { ColorProps, SizeProps } from 'components/Button'

type BtnModalProps = {
  icon?: ReactNode
  text?: string
  size?: SizeProps
  color?: ColorProps
}

export type ModalProps = {
  type: 'warn' | 'info'
  title: string
  isVisible: boolean
  changeVisibility: () => void
  btnFirst?: BtnModalProps
  btnLast?: BtnModalProps
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
  btnFirst,
  btnLast,
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
      tab-index="-1"
      role="dialog"
      aria-labelledby="Modal"
    >
      <S.ContainerPopup
        show={isVisible}
        onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()}
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

        {(btnFirst || btnLast) && (
          <S.FooterModal>
            {!!btnFirst && (
              <C.Button
                icon={btnFirst?.icon}
                text={btnFirst?.text}
                size="xLarge"
                color="blue"
                aria-label={btnFirst?.text}
                onClick={closeModalAndActionLastFocusedElement}
              />
            )}

            {!!btnLast && (
              <C.Button
                icon={btnLast?.icon}
                text={btnLast?.text}
                size="xLarge"
                color="red"
                aria-label={btnLast?.text}
                onClick={closeModalAndActionLastFocusedElement}
              />
            )}
          </S.FooterModal>
        )}
      </S.ContainerPopup>
    </S.Overlay>
  )
}

export default memo(Modal)
