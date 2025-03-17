import{j as e}from"./jsx-runtime-j_jdvEMj.js";import{useMDXComponents as r}from"./index-BSj771as.js";import{ae as i,aq as a,ar as l,as as m,at as o}from"./index-CLd6F-7y.js";import{D as c,M as p,I as d}from"./DescriptionList.stories-DCpVUcYR.js";import"./index-B-o1Wr-g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-D3biVMP-.js";import"../sb-preview/runtime.js";import"./index-DolzVqEf.js";import"./index-D-8MO0q_.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./clsx-B-dksMZM.js";import"./exampleContent-DcLVbCjv.js";const h=`<!-- @license CC0-1.0 -->

# Description List

A collection of terms and their details.

## Design

On a narrow screen, details appear indented below their term.
From the medium breakpoint, terms and details appear next to each other.
The column for the details is twice as wide as the one for the term.

Details are set in bold text.

## References

- [MDN: \`<dl>\`: The Description List element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
- [WCAG: Using description lists](https://www.w3.org/WAI/WCAG22/Techniques/html/H40)
`;function s(n){const t={code:"code",h2:"h2",h3:"h3",p:"p",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:c}),`
`,e.jsx(a,{children:h}),`
`,e.jsx(l,{}),`
`,e.jsx(m,{}),`
`,e.jsx(t.h2,{id:"multiple-details",children:"Multiple details"}),`
`,e.jsx(t.p,{children:"A term may have multiple details."}),`
`,e.jsx(o,{of:p}),`
`,e.jsx(t.h3,{id:"inverse-colour",children:"Inverse colour"}),`
`,e.jsxs(t.p,{children:["Set the ",e.jsx(t.code,{children:"inverseColor"}),` prop if the Description List sits on a dark background.
This ensures the colour of the text provides enough contrast.`]}),`
`,e.jsx(o,{of:d})]})}function k(n={}){const{wrapper:t}={...r(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s(n)}export{k as default};
