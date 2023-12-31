/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { PageMenu } from '@aram-limpens/design-system-react'
import { LoginIcon, MenuIcon } from '@aram-limpens/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Navigation/Page Menu',
  component: PageMenu,
} satisfies Meta<typeof PageMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <PageMenu>
      <PageMenu.Link href="#">English</PageMenu.Link>
      <PageMenu.Link href="#" icon={LoginIcon}>
        Inloggen Mijn Amsterdam
      </PageMenu.Link>
      <PageMenu.Button icon={MenuIcon}>Alle onderwerpen</PageMenu.Button>
    </PageMenu>
  ),
  parameters: {
    docs: {
      source: { type: 'dynamic' },
    },
  },
}
