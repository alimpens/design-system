import '@aram-limpens/design-system-tokens/dist/root.css'
import '@aram-limpens/design-system-assets/font/index.css'
import '@aram-limpens/design-system-css/dist/index.css'
import { viewports } from './viewports'

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Buttons', 'Containers', 'Feedback', 'Forms', 'Layout', 'Media', 'Navigation', 'Text'],
    },
  },
  viewport: {
    defaultViewport: 'responsive',
    viewports,
  },
  viewMode: 'docs',
}
