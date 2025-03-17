import{j as e}from"./jsx-runtime-BlAj40OV.js";import{a as I}from"./index.esm-D5VCod9n.js";import{c as M}from"./clsx-B-dksMZM.js";import{r as D}from"./index-Cs7sjTYM.js";import{V as L}from"./VisuallyHidden-hiyECSa5.js";import{I as H}from"./Image-BtUtQZwO.js";import{H as C}from"./Header-uaOG9PCz.js";import{P as i}from"./PageMenu-CrqflJAz.js";const V=({imageSrc:a,initials:r})=>a?e.jsx(H,{src:a,alt:""}):r.length?e.jsx("span",{"aria-hidden":!0,children:r}):e.jsx("span",{}),l=D.forwardRef(({label:a,imageSrc:r,className:j,color:_="dark-blue",...y},P)=>{const c=a.slice(0,2).toUpperCase(),A=c.length===0?"Gebruiker":`Initialen gebruiker: ${c}`;return e.jsxs("span",{...y,ref:P,className:M("ams-avatar",`ams-avatar--${_}`,r&&"ams-avatar--has-image",j),children:[e.jsx(L,{children:A}),e.jsx(V,{imageSrc:r,initials:c})]})});l.displayName="Avatar";try{l.displayName="Avatar",l.__docgenInfo={description:"",displayName:"Avatar",props:{color:{defaultValue:{value:"dark-blue"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"blue"'},{value:'"dark-blue"'},{value:'"dark-green"'},{value:'"green"'},{value:'"magenta"'},{value:'"orange"'},{value:'"purple"'},{value:'"red"'},{value:'"yellow"'}]}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}}}}}catch{}const F={title:"Components/Feedback/Avatar",component:l,args:{label:"DS",imageSrc:""}},s={},t={args:{label:"PS",imageSrc:"https://i.pravatar.cc/128"}},n={args:{imageSrc:void 0,label:""}},o={args:{label:"DS"},render:a=>e.jsx(C,{links:e.jsxs(i,{children:[e.jsx(i.Link,{href:"#",children:"Contact"}),e.jsx(i.Link,{href:"#",icon:I,children:"Zoeken"}),e.jsx("li",{children:e.jsx(l,{...a})})]}),title:"Dashboard"})};var u,d,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,g,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'PS',
    imageSrc: 'https://i.pravatar.cc/128'
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,b,h;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    imageSrc: undefined,
    label: ''
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var S,k,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'DS'
  },
  render: args => <Header links={<PageMenu>
          <PageMenu.Link href="#">Contact</PageMenu.Link>
          <PageMenu.Link href="#" icon={SearchIcon}>
            Zoeken
          </PageMenu.Link>
          <li>
            <Avatar {...args} />
          </li>
        </PageMenu>} title="Dashboard" />
}`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const N=["Default","WithPicture","FallbackIcon","InAHeader"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:s,FallbackIcon:n,InAHeader:o,WithPicture:t,__namedExportsOrder:N,default:F},Symbol.toStringTag,{value:"Module"}));export{z as A,n as F,o as I,t as W};
