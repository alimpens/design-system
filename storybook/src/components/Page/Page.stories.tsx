/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Page } from '@aram-limpens/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Containers/Page',
  component: Page,
  args: {
    className: 'ams-docs-page',
  },
  argTypes: {
    className: {
      table: { disable: true },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { children: <div className="ams-docs-item" /> },
}
