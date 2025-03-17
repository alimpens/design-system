import{j as e}from"./jsx-runtime-BlAj40OV.js";import{c as M}from"./clsx-B-dksMZM.js";import{r as $}from"./index-Cs7sjTYM.js";import{H as J}from"./Heading-gp4xEVu7.js";import{I as Q}from"./IconButton-BLqsP1k0.js";import{U as u}from"./UnorderedList-BmAgLxSd.js";import{L as X}from"./Link-CuLJR_P1.js";import{P as r}from"./Paragraph-uZfWSMvY.js";const g=$.forwardRef(({children:m,className:q,headingLevel:H=2,title:c,severity:h="warning",closeable:C,onClose:K,...G},R)=>{const B=c?"level-4":"level-5",F=c?"section":"div";return e.jsxs(F,{...G,ref:R,className:M("ams-alert",h&&`ams-alert--${h}`,q),children:[e.jsx("div",{className:"ams-alert__icon"}),e.jsxs("div",{className:"ams-alert__content",children:[c&&e.jsx(J,{level:H,size:"level-4",children:c}),m]}),C&&e.jsx(Q,{label:"Sluiten",size:B,onClick:K})]})});g.displayName="Alert";try{g.displayName="Alert",g.__docgenInfo={description:"",displayName:"Alert",props:{closeable:{defaultValue:null,description:"Whether the alert can be dismissed by the user. Adds a button to the top right.",name:"closeable",required:!1,type:{name:"boolean"}},headingLevel:{defaultValue:{value:"2"},description:"The hierarchical level of the alert title within the document.",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},onClose:{defaultValue:null,description:"Allows a callback when dismissing the alert.",name:"onClose",required:!1,type:{name:"(() => void)"}},severity:{defaultValue:{value:"warning"},description:"Highlights the meaning or tone of the message.",name:"severity",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},title:{defaultValue:null,description:"The title for the alert.",name:"title",required:!1,type:{name:"string"}}}}}catch{}const Y={title:"Components/Feedback/Alert",component:g,args:{title:"Let op",closeable:!1}},n={args:{children:e.jsx(r,{children:"Tijdens Koningsdag zijn alle Stadsloketten gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar."})}},a={args:{children:e.jsx(r,{children:"U bent vergeten verplichte velden in te vullen."}),title:"Vul de gegevens aan"}},t={args:{children:e.jsx(r,{children:"Wegens een technische fout kon het formulier niet worden verzonden. We hebben uw gegevens niet ontvangen. Probeer het over een paar minuten opnieuw."}),severity:"error",title:"Niet gelukt"}},s={args:{children:e.jsx(r,{children:"Het formulier is verzonden. We hebben uw gegevens goed ontvangen."}),closeable:!0,severity:"success",title:"Gelukt"}},o={args:{children:e.jsx(r,{children:"Tijdens de hijswerkzaamheden geldt er een korte verkeersstop. We zetten verkeersregelaars in, volg hun aanwijzingen op. De verkeersstop duurt ongeveer 10 minuten."}),closeable:!0,severity:"info"}},i={args:{title:"Vul de gegevens aan",children:[e.jsx(r,{children:"U bent vergeten de volgende verplichte velden in te vullen:"},1),e.jsxs(u,{children:[e.jsx(u.Item,{children:"Naam"}),e.jsx(u.Item,{children:"Telefoonnummer"})]},2)]}},l={args:{children:e.jsxs(r,{children:["Tijdens Koningsdag zijn"," ",e.jsx(X,{variant:"inline",href:"#",children:"alle Stadsloketten"})," ","gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar."]}),severity:"info"}},d={args:{children:e.jsx(r,{children:"De geschatte wachttijd in de adreszoeker klopt momenteel niet altijd. We werken aan een oplossing."}),title:void 0}};var p,v,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Tijdens Koningsdag zijn alle Stadsloketten gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente
        zijn niet bereikbaar.
      </Paragraph>
  }
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var k,j,b;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>U bent vergeten verplichte velden in te vullen.</Paragraph>,
    title: 'Vul de gegevens aan'
  }
}`,...(b=(j=a.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var y,z,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Wegens een technische fout kon het formulier niet worden verzonden. We hebben uw gegevens niet ontvangen.
        Probeer het over een paar minuten opnieuw.
      </Paragraph>,
    severity: 'error',
    title: 'Niet gelukt'
  }
}`,...(w=(z=t.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var x,P,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>Het formulier is verzonden. We hebben uw gegevens goed ontvangen.</Paragraph>,
    closeable: true,
    severity: 'success',
    title: 'Gelukt'
  }
}`,...(S=(P=s.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var W,L,_;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Tijdens de hijswerkzaamheden geldt er een korte verkeersstop. We zetten verkeersregelaars in, volg hun
        aanwijzingen op. De verkeersstop duurt ongeveer 10 minuten.
      </Paragraph>,
    closeable: true,
    severity: 'info'
  }
}`,...(_=(L=o.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var I,T,U;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Vul de gegevens aan',
    children: [<Paragraph key={1}>U bent vergeten de volgende verplichte velden in te vullen:</Paragraph>, <UnorderedList key={2}>
        <UnorderedList.Item>Naam</UnorderedList.Item>
        <UnorderedList.Item>Telefoonnummer</UnorderedList.Item>
      </UnorderedList>]
  }
}`,...(U=(T=i.parameters)==null?void 0:T.docs)==null?void 0:U.source}}};var N,A,V;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        Tijdens Koningsdag zijn{' '}
        <Link variant="inline" href="#">
          alle Stadsloketten
        </Link>{' '}
        gesloten. Ook 14 020 en alle andere telefoonnummers van de gemeente zijn niet bereikbaar.
      </Paragraph>,
    severity: 'info'
  }
}`,...(V=(A=l.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var O,D,E;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: <Paragraph>
        De geschatte wachttijd in de adreszoeker klopt momenteel niet altijd. We werken aan een oplossing.
      </Paragraph>,
    title: undefined
  }
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};const Z=["Default","Warning","Error","Success","Info","WithList","WithInlineLink","WithoutTitle"],le=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Error:t,Info:o,Success:s,Warning:a,WithInlineLink:l,WithList:i,WithoutTitle:d,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{le as A,t as E,o as I,s as S,a as W,l as a,i as b,d as c};
