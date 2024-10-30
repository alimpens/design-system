import{j as e}from"./jsx-runtime-BlAj40OV.js";import{c as b}from"./clsx-B-dksMZM.js";import{r as n}from"./index-Cs7sjTYM.js";import{F as w}from"./FormLabel-CayF0KhU.js";const r=n.forwardRef(({className:t,id:s,...a},c)=>{const i=s||n.useId();return e.jsxs("div",{className:b("ams-switch",t),children:[e.jsx("input",{...a,className:"ams-switch__input",id:i,ref:c,type:"checkbox",role:"switch"}),e.jsx("label",{className:"ams-switch__label",htmlFor:i})]})});r.displayName="Switch";try{r.displayName="Switch",r.__docgenInfo={description:"",displayName:"Switch",props:{}}}catch{}const{useArgs:_}=__STORYBOOK_MODULE_PREVIEW_API__,f={title:"Components/Forms/Switch",component:r,args:{checked:!1,disabled:!1},argTypes:{onChange:{action:"clicked",table:{disable:!0}}},render:t=>{const[,s]=_(),a=c=>{s({checked:c.target.checked})};return e.jsx(r,{onClick:a,...t})}},o={args:{"aria-label":"Default"}},l={decorators:[t=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:"5rem"},children:e.jsx(t,{})})],render:t=>{const[,s]=_(),a=c=>{s({checked:c.target.checked})};return e.jsxs(e.Fragment,{children:[e.jsx(w,{htmlFor:"switch-with-label",children:"Label"}),e.jsx(r,{onClick:a,...t,id:"switch-with-label"})]})}};var d,m,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Default'
  }
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var p,g,u;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '5rem'
  }}>
        <Story />
      </div>],
  render: args => {
    const [, setArgs] = useArgs();
    const handleClick = (event: any) => {
      setArgs({
        checked: event.target.checked
      });
    };
    return <>
        <FormLabel htmlFor="switch-with-label">Label</FormLabel>
        <Switch onClick={handleClick} {...args} id="switch-with-label" />
      </>;
  }
}`,...(u=(g=l.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const x=["Default","WithLabel"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:o,WithLabel:l,__namedExportsOrder:x,default:f},Symbol.toStringTag,{value:"Module"}));export{C as S,l as W};
