import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@sabino-ds-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/AntonioSabino.png',
    alt: 'Antonio Sabino',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
