import { Story } from '@storybook/react'
import styled from 'styled-components'
import SocialComments, { SocialCommentsProps } from '.'

const Wrapper = styled.div`
  display: flex;
  max-width: 40rem;
  width: 100%;
`

const Template: Story<SocialCommentsProps> = args => (
  <Wrapper>
    <SocialComments {...args} />
  </Wrapper>
)

export const Default = Template.bind({})

Default.args = {
  userName: '@paolaC',
  img: 'avatar-woman.jpg',
  comment:
    '”Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet dictum sit amet justo donec enim diam vulputate. Enim sed faucibus turpis in eu mi. Nibh cras pulvinar mattis nunc sed blandit libero. Cras tincidunt lobortis feugiat vivamus at augue eget arcu.”',
  urlProfile: '/comentarios_nas_redes_sociais'
}
