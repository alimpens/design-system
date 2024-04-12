<!-- @license CC0-1.0 -->

# DEPLOY TEST REACT 3

The `@aram-limpens/design-system-react` package contains React implementations of various components.
You can use this package in React apps.

The design tokens and css used in these components are published in separate npm packages, so don’t forget to install and include `@aram-limpens/design-system-tokens` and `@aram-limpens/design-system-css` too.

<!-- TODO: make this easier? -->

## Stability of the components

The React components are released as _alpha_ version, which means the components are still work in progress and it is likely that some APIs will change between releases.

Make sure you specify the exact version as dependency, so you can schedule to upgrade to the latest version when you have time to test for regression bugs.

<!-- TODO: add alpha, beta and production statuses to components. Also show in Storybook -->

## Getting started

Install the packages you need, for instance:

`npm install @aram-limpens/design-system-react @aram-limpens/design-system-tokens @aram-limpens/design-system-assets-test @aram-limpens/design-system-css`

Import the packages you need.

```javascript
import { Paragraph } from "@aram-limpens/design-system-react";

import "@aram-limpens/design-system-tokens/dist/index.css";
import "@aram-limpens/design-system-assets-test/font/index.css";
import "@aram-limpens/design-system-css/dist/index.css";

function App() {
  return <Paragraph>Hello world</Paragraph>;
}

export default App;
```

## Compact mode

For applications, the large text and ample white space of the theme can be counterproductive.
That’s why there is a compact mode.
To use the compact mode, import the compact css **after** theme css, like so:

```javascript
import "@aram-limpens/design-system-tokens/dist/index.css";
import "@aram-limpens/design-system-tokens/dist/compact.css";
```
