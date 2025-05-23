/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading, Paragraph } from '@aram-limpens/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import type { MarginProps } from './Margin'
import { Margin } from './Margin'

const render = ({ size }: MarginProps) => (
  <>
    <Heading className={`ams-mb-${size}`} level={2}>
      This heading has a bottom margin
    </Heading>
    <Paragraph>It introduces white space between itself and this paragraph.</Paragraph>
  </>
)

const meta = {
  title: 'Utilities/CSS/Margin',
  component: Margin,
  args: {
    size: 'xs',
  },
  argTypes: {
    size: {
      control: {
        labels: { xs: 'x-small', s: 'small', m: 'medium', l: 'large', xl: 'x-large' },
        type: 'radio',
      },
    },
  },
} satisfies Meta<typeof Margin>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render,
}
