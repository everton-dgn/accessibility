import { Story } from '@storybook/react'
import Button, { BtnProps } from '.'

export const Template: Story<BtnProps> = args => <Button {...args} />

export const Default = Template.bind({})
