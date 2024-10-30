import{j as e}from"./jsx-runtime-BlAj40OV.js";import{c as j}from"./clsx-B-dksMZM.js";import{r as C}from"./index-Cs7sjTYM.js";import{P as n}from"./Paragraph-uZfWSMvY.js";import{C as a}from"./Card-DdOzVEoD.js";import{H as o}from"./Heading-gp4xEVu7.js";const s=C.forwardRef(({as:r="div",children:h,className:g,gap:f="medium",...v},x)=>e.jsx(r,{...v,ref:x,className:j("ams-column",`ams-column--${f}`,g),children:h}));s.displayName="Column";try{s.displayName="Column",s.__docgenInfo={description:"",displayName:"Column",props:{as:{defaultValue:null,description:"The element to render the column with.",name:"as",required:!1,type:{name:"enum",value:[{value:'"article"'},{value:'"div"'},{value:'"section"'}]}},gap:{defaultValue:{value:"medium"},description:"The amount of vertical space between the column’s children.",name:"gap",required:!1,type:{name:"string"}}}}}catch{}const k=Array.from(Array(3).keys()).map(r=>e.jsx(n,{className:"ams-docs-pink-box",children:r+1},r)),b={title:"Components/Layout/Column",component:s,args:{children:k},argTypes:{gap:{control:"radio",options:["extra-small","small","medium","large","extra-large"]}}},l={},i={args:{as:"section",children:[e.jsxs(a,{children:[e.jsx(a.HeadingGroup,{tagline:"Nieuws",children:e.jsx(o,{level:2,size:"level-3",children:e.jsx(a.Link,{href:"#",children:"Nieuwe manieren om afval op te halen"})})}),e.jsx(n,{children:"Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te halen in het centrum."}),e.jsx(n,{size:"small",children:"Gepubliceerd: 1 juli 2023"})]},1),e.jsxs(a,{children:[e.jsx(a.HeadingGroup,{tagline:"Nieuws",children:e.jsx(o,{level:2,size:"level-3",children:e.jsx(a.Link,{href:"#",children:"Verlenging proef ophalen afval per boot"})})}),e.jsx(n,{children:"Een proef met het anders ophalen van afval. We halen vuilniszakken hier op met kleine wagentjes, kleine vuilniswagens en een afvalboot."}),e.jsx(n,{size:"small",children:"Gepubliceerd: 15 juni 2023"})]},2)]}};var t,m,d;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,c,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    as: 'section',
    children: [<Card key={1}>
        <Card.HeadingGroup tagline="Nieuws">
          <Heading level={2} size="level-3">
            <Card.Link href="#">Nieuwe manieren om afval op te halen</Card.Link>
          </Heading>
        </Card.HeadingGroup>
        <Paragraph>
          Afvalboten, bakfietsen en ondergrondse containers. We experimenteren met nieuwe manieren om afval op te halen
          in het centrum.
        </Paragraph>
        <Paragraph size="small">Gepubliceerd: 1 juli 2023</Paragraph>
      </Card>, <Card key={2}>
        <Card.HeadingGroup tagline="Nieuws">
          <Heading level={2} size="level-3">
            <Card.Link href="#">Verlenging proef ophalen afval per boot</Card.Link>
          </Heading>
        </Card.HeadingGroup>
        <Paragraph>
          Een proef met het anders ophalen van afval. We halen vuilniszakken hier op met kleine wagentjes, kleine
          vuilniswagens en een afvalboot.
        </Paragraph>
        <Paragraph size="small">Gepubliceerd: 15 juni 2023</Paragraph>
      </Card>]
  }
}`,...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const y=["Default","CustomTagName"],G=Object.freeze(Object.defineProperty({__proto__:null,CustomTagName:i,Default:l,__namedExportsOrder:y,default:b},Symbol.toStringTag,{value:"Module"}));export{G as C,i as a};