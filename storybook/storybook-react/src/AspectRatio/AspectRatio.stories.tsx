/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { AspectRatio } from '@aram-limpens/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Layout/Aspect Ratio',
  component: AspectRatio,
  args: {
    ratio: 'square',
  },
  argTypes: {
    ratio: {
      control: 'radio',
      options: ['extra-wide', 'wide', 'square', 'tall', 'extra-tall'],
    },
  },
} satisfies Meta<typeof AspectRatio>

export default meta

type Story = StoryObj<typeof meta>

const storyConfig = {
  'extra-wide': {
    image: 'https://picsum.photos/1600/900',
    maxWidth: '888px',
  },
  wide: {
    image: 'https://picsum.photos/1000/800',
    maxWidth: '625px',
  },
  square: {
    image: 'https://picsum.photos/800/800',
    maxWidth: '500px',
  },
  tall: {
    image: 'https://picsum.photos/800/1000',
    maxWidth: '400px',
  },
  'extra-tall': {
    image: 'https://picsum.photos/900/1600',
    maxWidth: '300px',
  },
}

const StoryTemplate: Story = {
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  render: ({ ratio }) => (
    <AspectRatio ratio={ratio} style={{ maxWidth: ratio ? storyConfig[ratio].maxWidth : '500px' }}>
      <img alt="" src={ratio ? storyConfig[ratio].image : 'https://picsum.photos/800/800'} style={{ width: '100%' }} />
    </AspectRatio>
  ),
}

export const Default: Story = {
  ...StoryTemplate,
}

export const ExtraWide: Story = {
  ...StoryTemplate,
  args: {
    ratio: 'extra-wide',
  },
}

export const Wide: Story = {
  ...StoryTemplate,
  args: {
    ratio: 'wide',
  },
}

export const Square: Story = {
  ...StoryTemplate,
  args: {
    ratio: 'square',
  },
}

export const Tall: Story = {
  ...StoryTemplate,
  args: {
    ratio: 'tall',
  },
}

export const ExtraTall: Story = {
  ...StoryTemplate,
  args: {
    ratio: 'extra-tall',
  },
}
