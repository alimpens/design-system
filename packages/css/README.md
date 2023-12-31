<!-- @license CC0-1.0 -->

# CSS Components

TESTULA 23

CSS components are developed using BEM class names and the stylesheets can be included in your page side-effect free. Apply the class names to your elements to make them stylable using design tokens.

`npm install @aram-limpens/design-system-css`

Theoretically you can include the components in your HTML page like so, but this is not the typical use case of this library:

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Example page</title>
    <link rel="stylesheet" href="node_modules/@aram-limpens/design-system-css" />
  </head>
  <body>
    <p class="amsterdam-paragraph">Hello, world!</p>
  </body>
</html>
```

The BEM class names can be particularly useful to include only the CSS you need using [CSS modules](https://css-tricks.com/css-modules-part-1-need/) ([in React](https://css-tricks.com/css-modules-part-3-react/)).

```js
import React from "react";
import style from "@aram-limpens/design-system-css";

export default class ExamplePage extends React.Component {
  render() {
    return (
      <>
        <p className={btn["amsterdam-paragraph"]}>Hello, world!</p>
      </>
    );
  }
}
```
