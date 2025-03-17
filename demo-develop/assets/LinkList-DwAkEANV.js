import{j as a}from"./jsx-runtime-BlAj40OV.js";import{c as r}from"./clsx-B-dksMZM.js";import{r as o}from"./index-Cs7sjTYM.js";const c=o.forwardRef(({children:e,className:n,href:t,onBackground:i,size:s,...u},k)=>a.jsx("li",{children:a.jsx("a",{className:r("ams-link-list__link",i&&`ams-link-list__link--on-background-${i}`,s&&`ams-link-list__link--${s}`,n),href:t,ref:k,...u,children:e})}));c.displayName="LinkList.Link";try{LinkList.Link.displayName="LinkList.Link",LinkList.Link.__docgenInfo={description:"One link with a Link List.",displayName:"LinkList.Link",props:{href:{defaultValue:null,description:"The target url for the link.",name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:`An icon to display instead of the default chevron.
Don’t mix custom icons with chevrons in one list.`,name:"icon",required:!1,type:{name:"Function"}},onBackground:{defaultValue:null,description:"Whether the link sits on a dark background.",name:"onBackground",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"light"'},{value:'"dark"'}]}},size:{defaultValue:null,description:`The text size for the link.
Use the same size for all items in the list.`,name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}}}}}catch{}const d=o.forwardRef(({children:e,className:n,...t},i)=>a.jsx("ul",{ref:i,className:r("ams-link-list",n),...t,children:e}));d.displayName="LinkList";const l=Object.assign(d,{Link:c});try{l.displayName="LinkList",l.__docgenInfo={description:"",displayName:"LinkList",props:{}}}catch{}export{l as L};
