import{a as u,_ as T}from"./createTheme-B78KyuB4.js";import{_ as s}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import{r as B}from"./index-Dl6G-zuu.js";import{g as W,a as C,s as M,b as R,e as P,c as _,f as j}from"./styled-BHqtc5H1.js";import{j as U}from"./jsx-runtime-Du8NFWEI.js";function N(a){return W("MuiTypography",a)}C("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const $=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],E=a=>{const{align:t,gutterBottom:r,noWrap:n,paragraph:i,variant:o,classes:p}=a,e={root:["root",o,a.align!=="inherit"&&`align${u(t)}`,r&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return j(e,N,p)},L=M("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:r}=a;return[t.root,r.variant&&t[r.variant],r.align!=="inherit"&&t[`align${u(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:a,ownerState:t})=>s({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&a.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},A=a=>z[a]||a,D=B.forwardRef(function(t,r){const n=R({props:t,name:"MuiTypography"}),i=A(n.color),o=P(s({},n,{color:i})),{align:p="inherit",className:e,component:g,gutterBottom:f=!1,noWrap:d=!1,paragraph:l=!1,variant:h="body1",variantMapping:m=y}=o,x=T(o,$),c=s({},o,{align:p,color:i,className:e,component:g,gutterBottom:f,noWrap:d,paragraph:l,variant:h,variantMapping:m}),v=g||(l?"p":m[h]||y[h])||"span",b=E(c);return U.jsx(L,s({as:v,ref:r,ownerState:c,className:_(b.root,e)},x))}),F=D;export{F as T};