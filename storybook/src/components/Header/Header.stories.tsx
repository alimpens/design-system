/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Header, PageMenu } from '@aram-limpens/design-system-react/src'
import { SearchIcon } from '@aram-limpens/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Containers/Header',
  component: Header,
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithLogoVariant: Story = {
  args: {
    logoBrand: 'ggd-amsterdam',
    logoLink: 'https://www.ggd.amsterdam.nl/',
    logoLinkTitle: 'Naar de homepage van de GGD Amsterdam',
  },
}

export const WithTitle: Story = {
  args: {
    title: 'Aan de Amsterdamse grachten',
  },
}

export const WithLinks: Story = {
  args: {
    links: (
      <PageMenu alignEnd wrap={false}>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
      </PageMenu>
    ),
  },
}

export const WithMenu: Story = {
  args: {
    menu: <button className="ams-header__menu-button">Menu</button>,
  },
}

export const WithLinksAndMenu: Story = {
  args: {
    menu: <button className="ams-header__menu-button">Menu</button>,
    links: (
      <PageMenu alignEnd wrap={false}>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
      </PageMenu>
    ),
  },
}

export const WithTitleAndMenu: Story = {
  args: {
    title: 'Aan de Amsterdamse grachten',
    menu: <button className="ams-header__menu-button">Menu</button>,
  },
}

export const WithTitleLinksAndMenu: Story = {
  args: {
    title: 'Aan de Amsterdamse grachten',
    links: (
      <PageMenu alignEnd wrap={false}>
        <PageMenu.Link href="#">Contact</PageMenu.Link>
        <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
        <PageMenu.Link href="#" icon={SearchIcon}>
          Zoeken
        </PageMenu.Link>
      </PageMenu>
    ),
    menu: <button className="ams-header__menu-button">Menu</button>,
  },
}
