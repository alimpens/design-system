import{j as o}from"./jsx-runtime-j_jdvEMj.js";import{useMDXComponents as s}from"./index-BSj771as.js";import{ae as a,aq as r,ar as i,as as l,at as c}from"./index-o1z_OlHB.js";import{R as m,a as d}from"./Radio.stories-CT6Zne4H.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-A0icFmjD.js";import"../sb-preview/runtime.js";import"./index-DolzVqEf.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./Fieldset-BvbOHDYZ.js";const p=`<!-- @license CC0-1.0 -->

# Radio

Allows users to select one option from a list.

## Guidelines

- Do not assume that users will know how many options they can select based on the visual difference between radios and checkboxes alone.
  If needed, add a hint explaining this, for example, ‘Select one option’.
- Order radio options alphabetically by default.
  In some cases, it can be helpful to order them from most-to-least common options.
  For example, you could order options for ‘Where do you live?’ based on population size.
  However you should do this with extreme caution as it can reinforce bias.
  If in doubt, order alphabetically.
- Labels should be concise. Try to keep labels shorter than 4 words.

Use a [Checkbox](/docs/components-forms-checkbox--docs) when a user can select more than 1 option from a list.
`;function t(e){const n={a:"a",p:"p",...s(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(a,{of:m}),`
`,o.jsx(r,{children:p}),`
`,o.jsx(i,{}),`
`,o.jsx(l,{}),`
`,o.jsxs(n.p,{children:["Group radios together with a ",o.jsx(n.a,{href:"/docs/components-forms-fieldset--docs",children:"Fieldset"}),` that describes them.
This is usually a question, like ‘Where do you live?’.`]}),`
`,o.jsx(c,{of:d})]})}function g(e={}){const{wrapper:n}={...s(),...e.components};return n?o.jsx(n,{...e,children:o.jsx(t,{...e})}):t(e)}export{g as default};
