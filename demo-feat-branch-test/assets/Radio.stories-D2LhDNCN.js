import{j as e}from"./jsx-runtime-BlAj40OV.js";import{c as h}from"./clsx-B-dksMZM.js";import{r as n}from"./index-Cs7sjTYM.js";import{F as v}from"./Fieldset-BI2-QI69.js";const a=n.forwardRef(({children:o,className:d,invalid:t,...i},f)=>{const l=n.useId();return e.jsxs("div",{className:h("ams-radio",d),children:[e.jsx("input",{...i,type:"radio",className:"ams-radio__input",ref:f,id:l,"aria-invalid":t||void 0}),e.jsxs("label",{className:"ams-radio__label",htmlFor:l,children:[e.jsx("span",{className:"ams-radio__circle"}),o]})]})});a.displayName="Radio";try{a.displayName="Radio",a.__docgenInfo={description:"",displayName:"Radio",props:{invalid:{defaultValue:null,description:"",name:"invalid",required:!1,type:{name:"boolean"}}}}}catch{}const{useArgs:g}=__STORYBOOK_MODULE_PREVIEW_API__,j={title:"Components/Forms/Radio",component:a,args:{checked:!1,children:"Radio label",disabled:!1,invalid:!1},argTypes:{children:{table:{disable:!1}},onChange:{action:"clicked",table:{disable:!0}}},render:o=>{const[,d]=g(),t=i=>{d({checked:i.target.checked})};return e.jsx(a,{onClick:t,...o})}},r={},s={argTypes:{checked:{table:{disable:!0}},children:{table:{disable:!0}},disabled:{table:{disable:!0}},invalid:{table:{disable:!0}},onChange:{action:"clicked",table:{disable:!0}}},render:()=>e.jsxs(v,{legend:"Waar gaat uw melding over?",children:[e.jsx(a,{name:"soort",value:"horecabedrijf",children:"Horecabedrijf"}),e.jsx(a,{name:"soort",value:"ander_soort_bedrijf",children:"Ander soort bedrijf"}),e.jsx(a,{name:"soort",value:"evenement",children:"Evenement"}),e.jsx(a,{name:"soort",value:"iets_anders",children:"Iets anders"})]}),parameters:{docs:{source:{type:"dynamic"}}}};var c,m,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,b,_;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  argTypes: {
    checked: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    },
    disabled: {
      table: {
        disable: true
      }
    },
    invalid: {
      table: {
        disable: true
      }
    },
    onChange: {
      action: 'clicked',
      table: {
        disable: true
      }
    }
  },
  render: () => <Fieldset legend="Waar gaat uw melding over?">
      <Radio name="soort" value="horecabedrijf">
        Horecabedrijf
      </Radio>
      <Radio name="soort" value="ander_soort_bedrijf">
        Ander soort bedrijf
      </Radio>
      <Radio name="soort" value="evenement">
        Evenement
      </Radio>
      <Radio name="soort" value="iets_anders">
        Iets anders
      </Radio>
    </Fieldset>,
  parameters: {
    docs: {
      source: {
        type: 'dynamic'
      }
    }
  }
}`,...(_=(b=s.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};const R=["Default","RadioGroup"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:r,RadioGroup:s,__namedExportsOrder:R,default:j},Symbol.toStringTag,{value:"Module"}));export{N as R,s as a};
