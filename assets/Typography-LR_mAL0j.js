import{c as u,e as T,_ as B,j as M}from"./Typography-B9kEj_1_.js";import{_ as s}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-DZp7yd2Y.js";import{r as W}from"./index-CBqU2yxZ.js";import{g as C,a as R,s as P,e as _,c as j,b as U}from"./styled-rwD5gtOs.js";function N(a){return C("MuiTypography",a)}R("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const E=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],L=a=>{const{align:t,gutterBottom:r,noWrap:n,paragraph:i,variant:o,classes:p}=a,e={root:["root",o,a.align!=="inherit"&&`align${u(t)}`,r&&"gutterBottom",n&&"noWrap",i&&"paragraph"]};return U(e,N,p)},$=P("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:r}=a;return[t.root,r.variant&&t[r.variant],r.align!=="inherit"&&t[`align${u(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:a,ownerState:t})=>s({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&a.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},A=a=>z[a]||a,D=W.forwardRef(function(t,r){const n=T({props:t,name:"MuiTypography"}),i=A(n.color),o=_(s({},n,{color:i})),{align:p="inherit",className:e,component:g,gutterBottom:d=!1,noWrap:f=!1,paragraph:l=!1,variant:h="body1",variantMapping:c=y}=o,x=B(o,E),m=s({},o,{align:p,color:i,className:e,component:g,gutterBottom:d,noWrap:f,paragraph:l,variant:h,variantMapping:c}),v=g||(l?"p":c[h]||y[h])||"span",b=L(m);return M.jsx($,s({as:v,ref:r,ownerState:m,className:j(b.root,e)},x))}),q=D;export{q as M};
