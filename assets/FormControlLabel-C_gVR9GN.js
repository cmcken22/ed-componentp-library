import{_ as N,b as W,s as Y,i as Z,h as U,r as M,d as ee,e as oe,m as re,g as G,a as z}from"./createTheme-B78KyuB4.js";import{_ as c}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import{r as w}from"./index-Dl6G-zuu.js";import{i as te,h as se,e as ne,c as E,j as le,b as H,g as J,s as q,u as K,a as ae}from"./styled-w1uBJNCI.js";import{u as ie,f as ce}from"./useFormControl-EHw8eS4L.js";import{j as T}from"./jsx-runtime-Du8NFWEI.js";import{T as I}from"./Typography-BmzuiwxG.js";const ue=["ownerState"],pe=["variants"],me=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function de(e){return Object.keys(e).length===0}function fe(e){return typeof e=="string"&&e.charCodeAt(0)>96}function D(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const he=W(),ye=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function O({defaultTheme:e,theme:o,themeId:r}){return de(o)?e:o[r]||o}function be(e){return e?(o,r)=>r[e]:null}function V(e,o){let{ownerState:r}=o,l=N(o,ue);const a=typeof e=="function"?e(c({ownerState:r},l)):e;if(Array.isArray(a))return a.flatMap(s=>V(s,c({ownerState:r},l)));if(a&&typeof a=="object"&&Array.isArray(a.variants)){const{variants:s=[]}=a;let p=N(a,pe);return s.forEach(t=>{let n=!0;typeof t.props=="function"?n=t.props(c({ownerState:r},l,r)):Object.keys(t.props).forEach(m=>{(r==null?void 0:r[m])!==t.props[m]&&l[m]!==t.props[m]&&(n=!1)}),n&&(Array.isArray(p)||(p=[p]),p.push(typeof t.style=="function"?t.style(c({ownerState:r},l,r)):t.style))}),p}return a}function ve(e={}){const{themeId:o,defaultTheme:r=he,rootShouldForwardProp:l=D,slotShouldForwardProp:a=D}=e,s=u=>Y(c({},u,{theme:O(c({},u,{defaultTheme:r,themeId:o}))}));return s.__mui_systemSx=!0,(u,p={})=>{te(u,i=>i.filter(d=>!(d!=null&&d.__mui_systemSx)));const{name:t,slot:n,skipVariantsResolver:m,skipSx:P,overridesResolver:g=be(ye(n))}=p,R=N(p,me),j=m!==void 0?m:n&&n!=="Root"&&n!=="root"||!1,F=P||!1;let C,y=D;n==="Root"||n==="root"?y=l:n?y=a:fe(u)&&(y=void 0);const b=se(u,c({shouldForwardProp:y,label:C},R)),S=i=>typeof i=="function"&&i.__emotion_real!==i||Z(i)?d=>V(i,c({},d,{theme:O({theme:d.theme,defaultTheme:r,themeId:o})})):i,_=(i,...d)=>{let x=S(i);const f=d?d.map(S):[];t&&g&&f.push(v=>{const h=O(c({},v,{defaultTheme:r,themeId:o}));if(!h.components||!h.components[t]||!h.components[t].styleOverrides)return null;const L=h.components[t].styleOverrides,A={};return Object.entries(L).forEach(([Q,X])=>{A[Q]=V(X,c({},v,{theme:h}))}),g(v,A)}),t&&!j&&f.push(v=>{var h;const L=O(c({},v,{defaultTheme:r,themeId:o})),A=L==null||(h=L.components)==null||(h=h[t])==null?void 0:h.variants;return V({variants:A},c({},v,{theme:L}))}),F||f.push(s);const k=f.length-d.length;if(Array.isArray(i)&&k>0){const v=new Array(k).fill("");x=[...i,...v],x.raw=[...i.raw,...v]}const B=b(x,...f);return u.muiName&&(B.muiName=u.muiName),B};return b.withConfig&&(_.withConfig=b.withConfig),_}}const ge=ve(),Ce=["component","direction","spacing","divider","children","className","useFlexGap"],Pe=W(),Se=ge("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function xe(e){return le({props:e,name:"MuiStack",defaultTheme:Pe})}function ke(e,o){const r=w.Children.toArray(e).filter(Boolean);return r.reduce((l,a,s)=>(l.push(a),s<r.length-1&&l.push(w.cloneElement(o,{key:`separator-${s}`})),l),[])}const Re=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Fe=({ownerState:e,theme:o})=>{let r=c({display:"flex",flexDirection:"column"},U({theme:o},M({values:e.direction,breakpoints:o.breakpoints.values}),l=>({flexDirection:l})));if(e.spacing){const l=ee(o),a=Object.keys(o.breakpoints.values).reduce((t,n)=>((typeof e.spacing=="object"&&e.spacing[n]!=null||typeof e.direction=="object"&&e.direction[n]!=null)&&(t[n]=!0),t),{}),s=M({values:e.direction,base:a}),u=M({values:e.spacing,base:a});typeof s=="object"&&Object.keys(s).forEach((t,n,m)=>{if(!s[t]){const g=n>0?s[m[n-1]]:"column";s[t]=g}}),r=oe(r,U({theme:o},u,(t,n)=>e.useFlexGap?{gap:G(l,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Re(n?s[n]:e.direction)}`]:G(l,t)}}))}return r=re(o.breakpoints,r),r};function _e(e={}){const{createStyledComponent:o=Se,useThemeProps:r=xe,componentName:l="MuiStack"}=e,a=()=>H({root:["root"]},t=>J(l,t),{}),s=o(Fe);return w.forwardRef(function(t,n){const m=r(t),P=ne(m),{component:g="div",direction:R="column",spacing:j=0,divider:F,children:C,className:y,useFlexGap:b=!1}=P,S=N(P,Ce),_={direction:R,spacing:j,useFlexGap:b},i=a();return T.jsx(s,c({as:g,ownerState:_,ref:n,className:E(i.root,y)},S,{children:F?ke(C,F):C}))})}const je=_e({createStyledComponent:q("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>K({props:e,name:"MuiStack"})}),Le=je;function Te(e){return J("MuiFormControlLabel",e)}const $e=ae("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),$=$e,Ne=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],we=e=>{const{classes:o,disabled:r,labelPlacement:l,error:a,required:s}=e,u={root:["root",r&&"disabled",`labelPlacement${z(l)}`,a&&"error",s&&"required"],label:["label",r&&"disabled"],asterisk:["asterisk",a&&"error"]};return H(u,Te,o)},Ae=q("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[{[`& .${$.label}`]:o.label},o.root,o[`labelPlacement${z(r.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>c({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${$.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${$.label}`]:{[`&.${$.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),Oe=q("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${$.error}`]:{color:(e.vars||e).palette.error.main}})),Ve=w.forwardRef(function(o,r){var l,a;const s=K({props:o,name:"MuiFormControlLabel"}),{className:u,componentsProps:p={},control:t,disabled:n,disableTypography:m,label:P,labelPlacement:g="end",required:R,slotProps:j={}}=s,F=N(s,Ne),C=ie(),y=(l=n??t.props.disabled)!=null?l:C==null?void 0:C.disabled,b=R??t.props.required,S={disabled:y,required:b};["checked","name","onChange","value","inputRef"].forEach(k=>{typeof t.props[k]>"u"&&typeof s[k]<"u"&&(S[k]=s[k])});const _=ce({props:s,muiFormControl:C,states:["error"]}),i=c({},s,{disabled:y,labelPlacement:g,required:b,error:_.error}),d=we(i),x=(a=j.typography)!=null?a:p.typography;let f=P;return f!=null&&f.type!==I&&!m&&(f=T.jsx(I,c({component:"span"},x,{className:E(d.label,x==null?void 0:x.className),children:f}))),T.jsxs(Ae,c({className:E(d.root,u),ownerState:i,ref:r},F,{children:[w.cloneElement(t,S),b?T.jsxs(Le,{display:"block",children:[f,T.jsxs(Oe,{ownerState:i,"aria-hidden":!0,className:d.asterisk,children:[" ","*"]})]}):f]}))}),Ie=Ve;export{Ie as F};