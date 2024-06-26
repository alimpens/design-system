import '@aram-limpens/design-system-tokens/dist/index.css'
import '@aram-limpens/design-system-tokens/dist/compact.theme.css'
import '@aram-limpens/design-system-assets-test/font/index.css'
import '@aram-limpens/design-system-css/dist/index.css'
import './storybook-overrides.css'
import { withThemeByClassName } from '@storybook/addon-themes'
import { viewports } from './viewports'

export const argTypes = {
  children: {
    table: { disable: true },
  },
}

// Set language to Dutch for Canvas and Stories
export const decorators = [
  (Story: any) => (
    <div lang="nl">
      <Story />
    </div>
  ),
  withThemeByClassName({
    themes: {
      Spacious: '',
      Compact: 'ams-theme--compact',
    },
    defaultTheme: 'Spacious',
  }),
]

export const parameters = {
  backgrounds: {
    disable: true,
  },
  controls: {
    sort: 'alpha',
  },
  options: {
    storySort: {
      order: [
        'Docs',
        ['Introduction', 'Assets', 'Design Guidelines'],
        'Components',
        ['Buttons', 'Containers', 'Feedback', 'Forms', 'Layout', 'Media', 'Navigation', 'Text'],
      ],
    },
  },
  viewport: {
    viewports,
  },
  viewMode: 'docs',
}
