/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Screen } from '@aram-limpens/design-system-react'
import { Grid } from '@aram-limpens/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Layout/Grid Cell',
  component: Grid.Cell,
} satisfies Meta<typeof Grid.Cell>

export default meta

type Story = StoryObj<typeof meta>

const StoryTemplate: Story = {
  decorators: [
    (Story) => (
      <Screen>
        <Grid>
          <Story />
        </Grid>
      </Screen>
    ),
  ],
}

export const Default: Story = {
  ...StoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel beslaat 4 kolommen.</p>,
    span: 4,
  },
}

export const MultipleSizes: Story = {
  ...StoryTemplate,
  args: {
    children: (
      <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel heeft 3 instellingen voor de breedte.</p>
    ),
    span: { narrow: 4, medium: 6, wide: 8 },
  },
}

export const FullWidth: Story = {
  ...StoryTemplate,
  args: {
    children: (
      <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">
        Deze cel beslaat de volledige breedte van het grid.
      </p>
    ),
    fullWidth: true,
  },
}

export const StartPosition: Story = {
  ...StoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel start in kolom 2.</p>,
    span: 2,
    start: 2,
  },
}
