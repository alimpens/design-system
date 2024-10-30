import{j as e}from"./jsx-runtime-BlAj40OV.js";import{useMDXComponents as i}from"./index-BI1Biiay.js";import{ae as a,ak as r,al as l,am as p,an as s}from"./index-D203z5p_.js";import{T as d,P as h,I as c,D as m}from"./TextInput.stories-CLGYuEyw.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./iframe-CEes6EgT.js";import"../sb-preview/runtime.js";import"./index-DJFdew98.js";import"./index-D-8MO0q_.js";import"./index-DF3CPj03.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";const u=`<!-- @license CC0-1.0 -->

# Text Input

A form field in which a user can enter text.

## Guidelines

- Use a Text Input when users need to enter a single line of text, such as their name or phone number.
- Do not use a Text Input when users could provide more than 1 sentence of text.
- The width of the Text Input should be appropriate for the information to be entered.
- A Text Input must have a label, and in most cases, this label should be visible.
- Use \`spellcheck="false"\` for fields that may contain sensitive information, such as passwords and personal data.
  Some browser extensions for spell-checking send this information to external servers.
- Apply automatic assistance where possible.
  For example, in logged-in systems, pre-filling input can prevent errors and save time.
`;function o(t){const n={h2:"h2",h3:"h3",p:"p",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:d}),`
`,e.jsx(r,{children:u}),`
`,e.jsx(l,{}),`
`,e.jsx(p,{}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"placeholder",children:"Placeholder"}),`
`,e.jsx(n.p,{children:`It is possible to place placeholder text in the text input.
A placeholder should not contain crucial information.
Using a suggestion or example can help clarify something for the user.
Suggestions are not a substitute for an explanation or instruction provided in an error message or description.
Placeholder text disappears as soon as the user starts entering data.`}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"invalid",children:"Invalid"}),`
`,e.jsx(n.p,{children:`Whenever possible, use real-time validation of data when filling out forms.
Incorrectly filled input fields become visible immediately.`}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(n.h3,{id:"disabled",children:"Disabled"}),`
`,e.jsx(s,{of:m})]})}function A(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{A as default};
