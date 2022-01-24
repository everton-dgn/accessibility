import { useCallback, useEffect, useState } from 'react'

export const useAnimationRender = ({ timeMilSecToRemoveComponent = 0 }) => {
  const [renderComponent, setRenderComponent] = useState(false)

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    renderComponent && setIsVisible(true)
  }, [renderComponent])

  const changeVisibility = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => setRenderComponent(false), timeMilSecToRemoveComponent)
  }, [timeMilSecToRemoveComponent])

  return { renderComponent, setRenderComponent, isVisible, changeVisibility }
}
