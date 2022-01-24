import { Story } from '@storybook/react'
import Modal, { ModalProps } from '.'

export const Template: Story<ModalProps> = args => <Modal {...args} />

export const Default = Template.bind({})

Default.args = {
  type: 'warn',
  title: 'Informações',
  isVisible: true,
  changeVisibility: () => true,
  msg: 'Isto é apenas um conteúdo informativo de exemplo para visualização do componente Modal!'
}

Default.parameters = {
  controls: {
    exclude: [
      'changeVisibility',
      'lastFocusedElement',
      'btnFirst',
      'btnLast',
      'onClick'
    ],
    sort: 'requiredFirst'
  }
}

export const Advanced = Template.bind({})

Advanced.args = {
  type: 'info',
  title: 'Informações',
  isVisible: true,
  changeVisibility: () => true,
  btnInfo: [
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
  msg: 'Isto é apenas um conteúdo informativo de exemplo para visualização do componente Modal!'
}
