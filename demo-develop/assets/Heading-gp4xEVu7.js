import{j as u}from"./jsx-runtime-BlAj40OV.js";import{c as v}from"./clsx-B-dksMZM.js";import{r as m}from"./index-Cs7sjTYM.js";import{g as p}from"./getHeadingElement-DiRwFEz7.js";const e=m.forwardRef(({children:a,className:t,inverseColor:n,level:l=1,size:r,...i},o)=>{const s=p(l),d=r?r.split("-")[1]:l;return u.jsx(s,{ref:o,className:v("ams-heading",`ams-heading--${d}`,n&&"ams-heading--inverse-color",t),...i,children:a})});e.displayName="Heading";try{e.displayName="Heading",e.__docgenInfo={description:"",displayName:"Heading",props:{level:{defaultValue:{value:"1"},description:"Het hiërarchische niveau van de titel.",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"},{value:"4"}]}},size:{defaultValue:null,description:`De visuele grootte van de titel.
Voeg dit toe om de titel groter of kleiner weer te geven zonder de semantische betekenis te veranderen.`,name:"size",required:!1,type:{name:"enum",value:[{value:'"level-3"'},{value:'"level-4"'},{value:'"level-5"'},{value:'"level-6"'},{value:'"level-1"'},{value:'"level-2"'}]}},inverseColor:{defaultValue:null,description:`De kleur van de titel
Gebruik deze property om de titel in tegenovergestelde kleur te tonen.`,name:"inverseColor",required:!1,type:{name:"boolean"}}}}}catch{}export{e as H};