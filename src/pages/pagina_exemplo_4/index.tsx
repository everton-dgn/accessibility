import { useMemo } from 'react'
import { useAnimationRender } from 'hooks'
import * as S from 'pages/pagina_exemplo_4/styles'
import * as C from 'components'

export default function Notifications() {
  const { renderComponent, setRenderComponent, isVisible, changeVisibility } =
    useAnimationRender({ timeMilSecToRemoveComponent: 200 })

  const btnInfo = useMemo(
    () => [
      {
        text: 'Confirmar',
        size: 'xLarge',
        color: 'blue',
        ariaLabel: 'Confirmar'
      },
      {
        text: 'Cancelar',
        size: 'xLarge',
        color: 'red',
        ariaLabel: 'Cancelar'
      }
    ],
    []
  )

  return (
    <S.Container as="section">
      <C.HeadPage title="Página Exemplo 4" />

      <C.TitleSection title="Página Exemplo 4" />

      <S.Column>
        <C.Button
          fullWidth={true}
          color="blue"
          size="large"
          text="Abrir Modal de Exemplo"
          className="btn"
          onClick={() => setRenderComponent(true)}
          aria-label="Abir o modal"
        />
      </S.Column>

      {renderComponent && (
        <C.Modal
          type="info"
          title="Informações"
          isVisible={isVisible}
          changeVisibility={changeVisibility}
          btnInfo={btnInfo as []}
          msg="Isto é apenas um conteúdo informativo de exemplo para visualização
            do componente Modal!"
        />
      )}
    </S.Container>
  )
}
