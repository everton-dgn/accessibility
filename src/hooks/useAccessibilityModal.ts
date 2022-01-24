import { useCallback, useEffect, useRef } from 'react'

type EventKey = {
  key: string
}

interface EventKeyShiftTab extends EventKey {
  shiftKey: boolean
  preventDefault: () => void
}

type AccessibilityModalProps = {
  timeMilSecApplyFocusAfterAnimation: number
}

export const useAccessibilityModal = ({
  timeMilSecApplyFocusAfterAnimation
}: AccessibilityModalProps) => {
  const btnCloseModalRef = useRef<HTMLButtonElement>(null)
  const refModal = useRef<HTMLDivElement>(null)

  const lastFocusedElement = document.activeElement as HTMLElement

  useEffect(() => {
    setTimeout(
      () => btnCloseModalRef.current?.focus(),
      timeMilSecApplyFocusAfterAnimation
    )
  }, [btnCloseModalRef, timeMilSecApplyFocusAfterAnimation])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])

  useEffect(() => {
    if (refModal.current) {
      const modal = refModal.current

      const selectAllElements =
        'a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), select, textarea, [tabindex], [contenteditable]'
      const allElements = Array.from(modal.querySelectorAll(selectAllElements))

      const elementsTabindexNegative = Array.from(
        modal.querySelectorAll('[tabindex^="-"]')
      )
      const allFocusableElementsOfModal = allElements.filter(el => {
        return !elementsTabindexNegative.includes(el)
      })

      setTimeout(() => {
        const lastFocusedElementModal = document.activeElement as HTMLElement

        let index = allFocusableElementsOfModal.indexOf(lastFocusedElementModal)

        const lastElementFocusableArray = allFocusableElementsOfModal.at(
          -1
        ) as HTMLElement

        const firstElementFocusableArray =
          allFocusableElementsOfModal[0] as HTMLElement

        const controlTabFocus = (e: EventKeyShiftTab) => {
          e.key === 'Tab' && e.preventDefault()
          const isPressShiftAndTab = e.shiftKey && e.key === 'Tab'

          if (isPressShiftAndTab) {
            if (index === 0) {
              index = allFocusableElementsOfModal.length - 1
              lastElementFocusableArray.focus()
            } else {
              index--
              const penultimateElementFocusable = allFocusableElementsOfModal[
                index
              ] as HTMLElement
              penultimateElementFocusable.focus()
            }
          } else if (e.key === 'Tab') {
            if (index === allFocusableElementsOfModal.length - 1) {
              index = 0
              firstElementFocusableArray.focus()
            } else {
              index++
              const afterTheLastElementFocusable = allFocusableElementsOfModal[
                index
              ] as HTMLElement
              afterTheLastElementFocusable.focus()
            }
          }
        }

        modal.addEventListener('keydown', controlTabFocus)
      }, timeMilSecApplyFocusAfterAnimation)
    }
  }, [timeMilSecApplyFocusAfterAnimation])

  const forwardFocus = useCallback(() => {
    lastFocusedElement?.focus()
    document.body.style.overflow = 'visible'
  }, [lastFocusedElement])

  const closePressKeyEsc = useCallback(
    (e: EventKey) => {
      const isPressEsc = e.key === 'Escape'

      if (isPressEsc) forwardFocus()

      return isPressEsc
    },
    [forwardFocus]
  )

  return {
    forwardFocus,
    closePressKeyEsc,
    refModal,
    btnCloseModalRef
  }
}
