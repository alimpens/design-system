import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{useMDXComponents as r}from"./index-CxbY7dAs.js";import{M as i}from"./index-BS5g-FLb.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CbQVZvfC.js";import"./index-CJ88nXQk.js";import"./index-Cf9b6H0j.js";import"./index-DrFu-skq.js";/*@license CC0-1.0*/function t(n){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...r(),...n.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{title:"Docs/Developer Guide/Getting Started"}),`
`,e.jsx(s.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(s.h2,{id:"react",children:"React"}),`
`,e.jsx(s.p,{children:"Install the packages you need, for instance:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sh",children:`npm install @aram-limpens/design-system-assets @aram-limpens/design-system-css @aram-limpens/design-system-react @aram-limpens/design-system-react-icons @aram-limpens/design-system-tokens
`})}),`
`,e.jsx(s.p,{children:"Import the components and stylesheets you need, for example:"}),`
`,`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import "@aram-limpens/design-system-assets/font/index.css"
import "@aram-limpens/design-system-css/dist/index.css"
import "@aram-limpens/design-system-tokens/dist/index.css"
import { Paragraph } from "@aram-limpens/design-system-react"

function App() {
  return <Paragraph>Hello, world!</Paragraph>
}

export default App
`})}),`
`,e.jsx(s.h2,{id:"compact-mode",children:"Compact Mode"}),`
`,e.jsxs(s.p,{children:[`For applications, the large text and ample white space of the theme can be counterproductive.
That’s why there is a compact mode.
To use the compact mode, import the compact CSS `,e.jsx(s.strong,{children:"after"})," the theme CSS, like so:"]}),`
`,`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-ts",children:`import "@aram-limpens/design-system-tokens/dist/index.css"
import "@aram-limpens/design-system-tokens/dist/compact.css"
`})}),`
`,e.jsx(s.h2,{id:"contributing",children:"Contributing"}),`
`,e.jsxs(s.p,{children:["Do you want to contribute to this project? Please review ",e.jsx(s.a,{href:"https://github.com/Amsterdam/design-system/blob/develop/CONTRIBUTING.md",rel:"nofollow",children:"our Contributing guidelines"}),"."]})]})}function u(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(t,{...n})}):t(n)}export{u as default};
