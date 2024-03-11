import{s as c,j as s}from"./styled-E6V2dxkg.js";import{r as d}from"./index-CBqU2yxZ.js";import{F as y}from"./Typography-DMu__NgM.js";import{h as m}from"./index-DkvFToXR.js";import{B as f}from"./Box-CW5E8zBp.js";import{F as h}from"./FormControlLabel-Cyz3Rmf_.js";const R=c(f,{shouldForwardProp:e=>e!=="checked",slot:"root"})(({theme:e,checked:a,disabled:o})=>({width:"fit-content",...!a&&!o&&{"&:hover":{".RadioButton":{borderColor:e.palette.primary.main,backgroundColor:m(e.palette.primary.main,.1)}}}})),C=c(f,{shouldForwardProp:e=>e!=="checked",slot:"root"})(({theme:e,checked:a,disabled:o})=>({height:16,width:16,borderRadius:"50%",marginRight:e.spacing(1),border:`${a?4:1}px solid ${e.palette.charcoal.main}`,...!a&&!o&&{"&:hover":{borderColor:e.palette.primary.main,backgroundColor:m(e.palette.primary.main,.1)}},...a&&{borderColor:e.palette.primary.main},...o&&{borderColor:e.palette.charcoal[30]}})),B=c(h,{slot:"root"})(({theme:e})=>({margin:0,webkitUserSelect:"none",msUserSelect:"none",userSelect:"none","&.MuiFormControlLabel":{"&-labelPlacementStart":{".RadioButton":{marginLeft:e.spacing(1),marginRight:0}},"&-labelPlacementEnd":{".RadioButton":{marginRight:e.spacing(1),marginLeft:0}}},".MuiFormControlLabel-label":{fontFamily:y.NUNITO,fontWeight:400,fontSize:e.typography.pxToRem(16)}})),v={left:"start",right:"end"},u=({checked:e,disabled:a,label:o,value:r,onChange:l,allowDeselect:p,labelPosition:b})=>{const[n,t]=d.useState(e||!1);d.useEffect(()=>{t(e||!1)},[e,t]);const g=d.useCallback(i=>{a||(i||p)&&(t(i),l&&l(r,i))},[t,l,a,r,p]);return s.jsx(R,{className:"RadioButtonWrapper",checked:n,disabled:a,children:s.jsx(B,{label:o,value:r,onClick:()=>g(!n),labelPlacement:v[b]||"end",control:s.jsx(C,{className:"RadioButton",checked:n,disabled:a})})})};u.defaultProps={checked:!1,disabled:!1,allowDeselect:!1,labelPosition:"right"};try{u.displayName="RadioButton",u.__docgenInfo={description:"",displayName:"RadioButton",props:{checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: any, checked: boolean) => void"}},allowDeselect:{defaultValue:{value:"false"},description:"",name:"allowDeselect",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:{value:"right"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}export{u as R};