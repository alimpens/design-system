/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Icon, Paragraph, UnorderedList } from '@aram-limpens/design-system-react'
import {
  AlertIcon,
  AnnouncementIcon,
  CarIcon,
  DocumentEuroSignIcon,
  HousingIcon,
  LocationIcon,
  PassportIcon,
  TrashBinIcon,
} from '@aram-limpens/design-system-react-icons'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Text/Unordered List',
  component: UnorderedList,
  argTypes: {
    markers: { control: 'boolean' },
  },
} satisfies Meta<typeof UnorderedList>

export default meta

type Story = StoryObj<typeof meta>

export const Basis: Story = {
  args: {
    children: [
      <UnorderedList.Item key="contract">
        Kopie van de pagina’s van het huur- of koopcontract waarop uw naam, adres en handtekeningen staan.
      </UnorderedList.Item>,
      <UnorderedList.Item key="toestemmingsverklaring">
        Als u bij iemand woont: een toestemmingsverklaring van de bewoner en een kopie van het paspoort, rijbewijs of
        ID-kaart van de bewoner.
      </UnorderedList.Item>,
      <UnorderedList.Item key="gebruikersovereenkomst">
        Bij antikraak: kopie gebruikersovereenkomst.
      </UnorderedList.Item>,
    ],
  },
}

export const TweeNiveaus: Story = {
  args: {
    children: [
      <UnorderedList.Item key={1}>
        Stadsdeel West
        <UnorderedList>
          <UnorderedList.Item key={1.1}>Bos en Lommer</UnorderedList.Item>
          <UnorderedList.Item key={1.2}>Oud West / De Baarsjes</UnorderedList.Item>
          <UnorderedList.Item key={1.3}>Westerpark</UnorderedList.Item>
        </UnorderedList>
      </UnorderedList.Item>,
      <UnorderedList.Item key={2}>
        Stadsdeel Nieuw-West
        <UnorderedList>
          <UnorderedList.Item key={2.1}>De Aker, Sloten en Nieuw Sloten</UnorderedList.Item>
          <UnorderedList.Item key={2.2}>Geuzenveld, Slotermeer en Sloterdijken</UnorderedList.Item>
          <UnorderedList.Item key={2.3}>Osdorp</UnorderedList.Item>
          <UnorderedList.Item key={2.4}>Slotervaart</UnorderedList.Item>
        </UnorderedList>
      </UnorderedList.Item>,
    ],
  },
}

export const ZonderOpsommingstekens: Story = {
  args: {
    children: [
      <UnorderedList.Item key={1}>
        <div className="amsterdam-docs-card">
          <Icon svg={LocationIcon} size="level-6" />
          <Paragraph>Stadsloket: locaties en openingstijden</Paragraph>
        </div>
      </UnorderedList.Item>,
      <UnorderedList.Item key={2}>
        <div className="amsterdam-docs-card">
          <Icon svg={CarIcon} size="level-6" />
          <Paragraph>Parkeren + Reizen (P+R)</Paragraph>
        </div>
      </UnorderedList.Item>,
      <UnorderedList.Item key={3}>
        <div className="amsterdam-docs-card">
          <Icon svg={PassportIcon} size="level-6" />
          <Paragraph>Paspoort, ID-kaart en Rijbewijs</Paragraph>
        </div>
      </UnorderedList.Item>,
      <UnorderedList.Item key={4}>
        <div className="amsterdam-docs-card">
          <Icon svg={DocumentEuroSignIcon} size="level-6" />
          <Paragraph>Gemeentebelastingen</Paragraph>
        </div>
      </UnorderedList.Item>,
      <UnorderedList.Item key={5}>
        <div className="amsterdam-docs-card">
          <Icon svg={AlertIcon} size="level-6" />
          <Paragraph>Melding openbare ruimte en overlast</Paragraph>
        </div>
      </UnorderedList.Item>,
      <UnorderedList.Item key={6}>
        <div className="amsterdam-docs-card">
          <Icon svg={HousingIcon} size="level-6" />
          <Paragraph>Verhuizing doorgeven</Paragraph>
        </div>
      </UnorderedList.Item>,
      <UnorderedList.Item key={7}>
        <div className="amsterdam-docs-card">
          <Icon svg={TrashBinIcon} size="level-6" />
          <Paragraph>Grof afval</Paragraph>
        </div>
      </UnorderedList.Item>,
      <UnorderedList.Item key={8}>
        <div className="amsterdam-docs-card">
          <Icon svg={AnnouncementIcon} size="level-6" />
          <Paragraph>Kennisgevingen en bekendmakingen</Paragraph>
        </div>
      </UnorderedList.Item>,
    ],
    markers: false,
  },
}
