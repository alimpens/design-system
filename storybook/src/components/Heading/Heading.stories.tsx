/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading } from '@aram-limpens/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { exampleHeading } from '../shared/exampleContent'

const heading = exampleHeading()

const meta = {
  title: 'Components/Text/Heading',
  component: Heading,
  args: {
    children: heading,
    inverseColor: false,
  },
  argTypes: {
    children: {
      table: { disable: false },
    },
  },
} satisfies Meta<typeof Heading>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    (Story, context) => (
      <div className={context.args.inverseColor ? 'ams-docs-dark-background' : undefined}>
        <Story />
      </div>
    ),
  ],
}

export const Heading1: Story = {}

export const Heading2: Story = {
  args: {
    level: 2,
  },
}

export const Heading3: Story = {
  args: {
    level: 3,
  },
}

export const Heading4: Story = {
  args: {
    level: 4,
  },
}

export const InvertedColor: Story = {
  args: {
    inverseColor: true,
  },
  decorators: [
    (Story, context) => (
      <div className={context.args.inverseColor ? 'ams-docs-dark-background' : undefined}>
        <Story />
      </div>
    ),
  ],
}
