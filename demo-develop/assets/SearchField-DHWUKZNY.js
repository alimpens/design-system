import{j as r}from"./jsx-runtime-BlAj40OV.js";import{c as o}from"./clsx-B-dksMZM.js";import{r as s}from"./index-Cs7sjTYM.js";import{V as d}from"./VisuallyHidden-hiyECSa5.js";const n=s.forwardRef(({className:e,...a},t)=>r.jsx("button",{...a,ref:t,className:o("ams-search-field__button",e),children:r.jsx(d,{children:"Zoeken"})}));n.displayName="SearchField.Button";try{SearchField.Button.displayName="SearchField.Button",SearchField.Button.__docgenInfo={description:"",displayName:"SearchField.Button",props:{}}}catch{}const p=s.forwardRef(({className:e,label:a="Zoeken",...t},c)=>{const i=s.useId();return r.jsxs(r.Fragment,{children:[r.jsx("label",{htmlFor:i,children:r.jsx(d,{children:a})}),r.jsx("input",{...t,autoComplete:"off",className:o("ams-search-field__input",e),enterKeyHint:"search",id:i,ref:c,spellCheck:"false",type:"search"})]})});p.displayName="SearchField.Input";try{SearchField.Input.displayName="SearchField.Input",SearchField.Input.__docgenInfo={description:"",displayName:"SearchField.Input",props:{label:{defaultValue:{value:"Zoeken"},description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}const h=s.forwardRef(({children:e,className:a,...t},c)=>r.jsx("form",{role:"search",...t,ref:c,className:o("ams-search-field",a),children:e}));h.displayName="SearchField";const l=Object.assign(h,{Button:n,Input:p});try{l.displayName="SearchField",l.__docgenInfo={description:"",displayName:"SearchField",props:{}}}catch{}export{l as S};
