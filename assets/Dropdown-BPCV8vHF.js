import{j as n}from"./jsx-runtime-Du8NFWEI.js";import{c as J}from"./Typography-CwlVby8-.js";import{r}from"./index-Dl6G-zuu.js";import{u as K}from"./useOnHover-B5yjJnBG.js";import{L as P,w as Q,B as X,a as F,S as Y}from"./withBaseInput-B9YXMaqF.js";import{C as Z}from"./Checkbox-D2EBMsl3.js";import{T as B}from"./Typography-DjBYimSR.js";import{a as ee,I as ae}from"./Icon.types-Ccc-q3e1.js";import{B as te}from"./Box-BMhSVWv5.js";import{f as q,_ as ne}from"./createTheme-B78KyuB4.js";import{_ as h}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import{c as _,b as re,s as se,r as oe,e as ie,h as E,i as le}from"./styled-CW7PKROT.js";import{B as de}from"./ButtonBase-DA04KGtb.js";import{u as ce}from"./useEnhancedEffect-DZnfS5Iy.js";import{u as ue}from"./TransitionGroupContext-CXyXHDm3.js";const pe=_("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),L=pe,me=_("MuiListItemIcon",["root","alignItemsFlexStart"]),A=me,fe=_("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),G=fe;function ye(e){return re("MuiMenuItem",e)}const ve=_("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),C=ve,ge=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],be=(e,t)=>{const{ownerState:l}=e;return[t.root,l.dense&&t.dense,l.divider&&t.divider,!l.disableGutters&&t.gutters]},xe=e=>{const{disabled:t,dense:l,divider:c,disableGutters:u,selected:y,classes:v}=e,p=le({root:["root",l&&"dense",t&&"disabled",!u&&"gutters",c&&"divider",y&&"selected"]},ye,v);return h({},v,p)},Ce=se(de,{shouldForwardProp:e=>oe(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:be})(({theme:e,ownerState:t})=>h({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${C.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:q(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${C.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:q(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${C.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:q(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:q(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${C.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${C.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${L.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${L.inset}`]:{marginLeft:52},[`& .${G.root}`]:{marginTop:0,marginBottom:0},[`& .${G.inset}`]:{paddingLeft:36},[`& .${A.root}`]:{minWidth:36}},!t.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},t.dense&&h({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${A.root} svg`]:{fontSize:"1.25rem"}}))),he=r.forwardRef(function(t,l){const c=ie({props:t,name:"MuiMenuItem"}),{autoFocus:u=!1,component:y="li",dense:v=!1,divider:I=!1,disableGutters:p=!1,focusVisibleClassName:o,role:m="menuitem",tabIndex:d,className:V}=c,D=ne(c,ge),g=r.useContext(P),w=r.useMemo(()=>({dense:v||g.dense||!1,disableGutters:p}),[g.dense,v,p]),f=r.useRef(null);ce(()=>{u&&f.current&&f.current.focus()},[u]);const k=h({},c,{dense:w.dense,divider:I,disableGutters:p}),i=xe(c),b=ue(f,l);let x;return c.disabled||(x=d!==void 0?d:-1),n.jsx(P.Provider,{value:w,children:n.jsx(Ce,h({ref:b,role:m,tabIndex:x,component:y,focusVisibleClassName:E(i.focusVisible,o),className:E(i.root,V)},D,{ownerState:k,classes:i}))})}),Ie=he,N=({endAdornment:e,...t})=>e?n.jsx(te,{...t,sx:{top:"8px !important",margin:"0",height:"20px",width:"20px",display:"flex",alignItems:"center",transform:"rotate(0deg) !important",".MuiInputAdornment-root":{margin:"0"}},children:e}):n.jsx(ee,{className:t==null?void 0:t.className,icon:ae.NavArrowDown,height:"20px",width:"20px",color:"charcoal.dark",sx:{top:"calc(50% - 10px) !important"}});try{N.displayName="DropdownIcon",N.__docgenInfo={description:"",displayName:"DropdownIcon",props:{}}}catch{}const Ve=({label:e,placeholder:t,open:l,helperText:c,disabled:u,value:y,required:v,labelPosition:I="top",onChange:p,options:o,getOptionLabel:m,getOptionValue:d,getOptionDisabled:V,onHover:D,defaultActiveFirstOption:g,checkBoxSelection:w,MenuProps:f})=>{const{endAdornment:k}=r.useContext(X),[i,b]=r.useState(y||""),[x,M]=r.useState(l||!1),W=K(D),R=r.useRef(!1);r.useEffect(()=>{b(y||"")},[y]),r.useEffect(()=>{M(l||!1)},[l]);const j=r.useCallback(a=>{let s=a.target.value;i===s&&(s=""),b(s),p&&p(s)},[i,b,p]),U=r.useMemo(()=>o.find(a=>(d?d(a):a.value)===i),[o,d,i]),z=r.useCallback((a,s)=>!a&&t?n.jsx(B,{variant:"bodyR",color:"charcoal.light",children:t}):n.jsx(B,{variant:"bodyR",color:"text.primary",children:m?m(s):s==null?void 0:s.label}),[m,t]),T=r.useCallback(()=>{if(o.length===0)return;const a=o[0],s=d?d(a):a.value;j({target:{value:s}})},[o,d,j]);return r.useEffect(()=>{g&&!i&&o.length>0&&(R.current||(R.current=!0,T()))},[o,g,T,i]),n.jsxs(n.Fragment,{children:[n.jsx(F.Label,{required:v,position:I,children:e}),n.jsx(Y,{className:J("dropdown",{"dropdown--open":x}),"data-testid":"Dropdown",open:x,...W,onOpen:()=>M(!0),onClose:()=>M(!1),displayEmpty:!0,placeholder:t,value:i,renderValue:a=>z(a,U),disabled:u,IconComponent:a=>n.jsx(N,{endAdornment:k,...a}),MenuProps:{...f,sx:{".MuiPaper-root":{maxHeight:(f==null?void 0:f.maxHeight)||"144px"}}},children:o==null?void 0:o.map((a,s)=>{const $=d?d(a):a==null?void 0:a.value,S=V?V(a):a==null?void 0:a.disabled;return n.jsx(Ie,{value:$,disabled:S||u,"data-dropdown-option":s,onClick:H=>{S||u||(H.stopPropagation(),H.preventDefault(),j({target:{value:$}}))},children:w?n.jsx(Z,{label:m?m(a):a==null?void 0:a.label,checked:$===i,disabled:S||u,typographyVariant:"bodyS"}):n.jsx(B,{variant:"bodyS",color:"text.primary",children:m?m(a):a==null?void 0:a.label})},$)})}),n.jsx(F.HelperText,{children:c})]})},O=Q(Ve,"Dropdown");O.defaultProps={labelPosition:"top",options:[],MenuProps:{maxHeight:"144px"}};try{O.displayName="Dropdown",O.__docgenInfo={description:"",displayName:"Dropdown",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},labelPosition:{defaultValue:{value:"top"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'}]}},options:{defaultValue:null,description:`StandardDropdownOption accepts label, value, and disabled,
or you can provide a custom list of options and utilize the getOptionLabel, getOptionValue, and getOptionDisabled methods.`,name:"options",required:!0,type:{name:"any[] | StandardDropdownOption[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: string) => void"}},getOptionLabel:{defaultValue:null,description:"",name:"getOptionLabel",required:!1,type:{name:"(option: any) => string"}},getOptionValue:{defaultValue:null,description:"",name:"getOptionValue",required:!1,type:{name:"(option: any) => string"}},getOptionDisabled:{defaultValue:null,description:"",name:"getOptionDisabled",required:!1,type:{name:"(option: any) => boolean"}},onHover:{defaultValue:null,description:"",name:"onHover",required:!1,type:{name:"(hovered: boolean) => void"}},defaultActiveFirstOption:{defaultValue:null,description:"",name:"defaultActiveFirstOption",required:!1,type:{name:"boolean"}},checkBoxSelection:{defaultValue:null,description:"",name:"checkBoxSelection",required:!1,type:{name:"boolean"}},MenuProps:{defaultValue:null,description:"",name:"MenuProps",required:!1,type:{name:"{ maxHeight?: string | number; }"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"Style props for the container",name:"sx",required:!1,type:{name:"SxProps"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"error"'},{value:'"success"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}}}}}catch{}export{O as D};
