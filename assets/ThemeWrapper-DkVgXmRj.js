import{j as c}from"./jsx-runtime-Du8NFWEI.js";import{t as y}from"./Icon.types-ZLDmiTIS.js";import{l as b,m as v,T as p,b as S,S as T}from"./styled-BHqtc5H1.js";import{_ as i}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import{_}from"./createTheme-B78KyuB4.js";import{r as a}from"./index-Dl6G-zuu.js";import{R as j}from"./index-CxDPfwJT.js";import{G as E}from"./GlobalStyles-Cw5gJnzH.js";const C=a.createContext(null),g=C;function x(){return a.useContext(g)}const P=typeof Symbol=="function"&&Symbol.for,M=P?Symbol.for("mui.nested"):"__THEME_NESTED__";function k(e,o){return typeof o=="function"?o(e):i({},e,o)}function W(e){const{children:o,theme:t}=e,r=x(),n=a.useMemo(()=>{const s=r===null?t:k(r,t);return s!=null&&(s[M]=r!==null),s},[t,r]);return c.jsx(g.Provider,{value:n,children:o})}const f={};function h(e,o,t,r=!1){return a.useMemo(()=>{const n=e&&o[e]||o;if(typeof t=="function"){const s=t(n),l=e?i({},o,{[e]:s}):s;return r?()=>l:l}return e?i({},o,{[e]:t}):i({},o,t)},[e,o,t,r])}function $(e){const{children:o,theme:t,themeId:r}=e,n=b(f),s=x()||f,l=h(r,n,t),m=h(r,s,t,!0),u=l.direction==="rtl";return c.jsx(W,{theme:m,children:c.jsx(v.Provider,{value:l,children:c.jsx(j,{value:u,children:o})})})}const O=["theme"];function z(e){let{theme:o}=e,t=_(e,O);const r=o[p];return c.jsx($,i({},t,{themeId:r?p:void 0,theme:r||o}))}const B=(e,o)=>i({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},o&&!e.vars&&{colorScheme:e.palette.mode}),F=e=>i({color:(e.vars||e).palette.text.primary},e.typography.body1,{backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),H=(e,o=!1)=>{var t;const r={};o&&e.colorSchemes&&Object.entries(e.colorSchemes).forEach(([l,m])=>{var u;r[e.getColorSchemeSelector(l).replace(/\s*&/,"")]={colorScheme:(u=m.palette)==null?void 0:u.mode}});let n=i({html:B(e,o),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:i({margin:0},F(e),{"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}})},r);const s=(t=e.components)==null||(t=t.MuiCssBaseline)==null?void 0:t.styleOverrides;return s&&(n=[n,s]),n};function N(e){const o=S({props:e,name:"MuiCssBaseline"}),{children:t,enableColorScheme:r=!1}=o;return c.jsxs(a.Fragment,{children:[c.jsx(E,{styles:n=>H(n,r)}),t]})}const d=({children:e})=>c.jsx(T,{injectFirst:!0,children:c.jsxs(z,{theme:y,children:[c.jsx(N,{}),e]})});d.defaultProps={};try{d.displayName="ThemeWrapper",d.__docgenInfo={description:"",displayName:"ThemeWrapper",props:{}}}catch{}export{d as T};
