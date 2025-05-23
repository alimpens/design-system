/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { ErrorMessage, Field, Label, Paragraph } from '@aram-limpens/design-system-react'
import { DateInput } from '@aram-limpens/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Forms/Date Input',
  component: DateInput,
  args: {
    disabled: false,
    invalid: false,
  },
  argTypes: {
    disabled: {
      description: 'Prevents interaction. Avoid if possible.',
    },
  },
} satisfies Meta<typeof DateInput>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DateTime: Story = {
  args: {
    type: 'datetime-local',
  },
}

export const Invalid: Story = {
  args: {
    invalid: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const InAField: Story = {
  render: (args) => (
    <Field invalid={args.invalid}>
      <Label htmlFor="input1">Label</Label>
      <Paragraph id="description1" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error1">Foutmelding.</ErrorMessage>}
      <DateInput aria-describedby={`description1${args.invalid ? ' error1' : ''}`} id="input1" {...args} />
    </Field>
  ),
}

export const InAFieldWithValidation: Story = {
  args: {
    invalid: true,
  },
  render: (args) => (
    <Field invalid={args.invalid}>
      <Label htmlFor="input2">Label</Label>
      <Paragraph id="description2" size="small">
        Omschrijving.
      </Paragraph>
      {args.invalid && <ErrorMessage id="error2">Foutmelding.</ErrorMessage>}
      <DateInput aria-describedby={`description2${args.invalid ? ' error2' : ''}`} id="input2" {...args} />
    </Field>
  ),
}
