/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import {
  Footer,
  Grid,
  Heading,
  Link,
  PageMenu,
  Paragraph,
  UnorderedList,
  VisuallyHidden,
} from '@aram-limpens/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Containers/Footer',
  component: Footer,
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <Footer.Top key="footer-top">
        <VisuallyHidden>
          <Heading>Colofon</Heading>
        </VisuallyHidden>
        <Grid>
          <Grid.Cell span={3}>
            <div style={{ display: 'grid', gap: '2.5rem' }}>
              <Heading level={2} size="level-4" inverseColor>
                Contact
              </Heading>
              <Paragraph size="small" inverseColor>
                Heeft u een vraag en kunt u het antwoord niet vinden op deze site? Neem dan contact met ons op.
              </Paragraph>
              <UnorderedList markers={false}>
                <li>
                  <Link href="mailto:redactie.os@aram-limpens.nl" variant="inList" onBackground="dark">
                    E-mail
                  </Link>
                </li>
                <li>
                  <Link href="tel:+31202510333" variant="inList" onBackground="dark">
                    020 251 0333
                  </Link>
                </li>
              </UnorderedList>
            </div>
          </Grid.Cell>
          <Grid.Cell span={3} start={{ narrow: 1, medium: 5, wide: 5 }}>
            <div style={{ display: 'grid', gap: '2.5rem' }}>
              <Heading level={2} size="level-4" inverseColor>
                Panels en enquêtes
              </Heading>
              <Paragraph size="small" inverseColor>
                Bent u uitgenodigd om mee te doen aan onderzoek of heeft u vragen over het panel of stadspaspanel?
              </Paragraph>
              <UnorderedList markers={false}>
                <li>
                  <Link href="/" variant="inList" onBackground="dark" rel="external">
                    Meedoen aan onderzoek
                  </Link>
                </li>
                <li>
                  <Link href="/" variant="inList" onBackground="dark" rel="external">
                    Panel Amsterdam
                  </Link>
                </li>
                <li>
                  <Link href="/" variant="inList" onBackground="dark" rel="external">
                    Stadspaspanel Amsterdam
                  </Link>
                </li>
              </UnorderedList>
            </div>
          </Grid.Cell>
          <Grid.Cell span={3} start={{ narrow: 1, medium: 1, wide: 9 }}>
            <div style={{ display: 'grid', gap: '2.5rem' }}>
              <Heading level={2} size="level-4" inverseColor>
                Onderzoek en Statistiek
              </Heading>
              <UnorderedList markers={false}>
                <li>
                  <Link href="/" variant="inList" onBackground="dark">
                    Over Onderzoek en Statistiek
                  </Link>
                </li>
                <li>
                  <Link href="/" variant="inList" onBackground="dark">
                    Veelgestelde vragen
                  </Link>
                </li>
                <li>
                  <Link href="/" variant="inList" onBackground="dark" rel="external">
                    Nieuwsbrief
                  </Link>
                </li>
                <li>
                  <Link href="/" variant="inList" onBackground="dark">
                    Vacatures
                  </Link>
                </li>
              </UnorderedList>
            </div>
          </Grid.Cell>
        </Grid>
      </Footer.Top>,
      <Footer.Bottom key="footer-bottom">
        <VisuallyHidden>
          <Heading level={2}>Over deze website</Heading>
        </VisuallyHidden>
        <Grid>
          <Grid.Cell fullWidth>
            <PageMenu>
              <PageMenu.Link href="/">Privacy</PageMenu.Link>
              <PageMenu.Link href="/">Toegankelijkheid</PageMenu.Link>
            </PageMenu>
          </Grid.Cell>
        </Grid>
      </Footer.Bottom>,
    ],
  },
}
