import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{d as E,c as z,L as G,A as U,D as K}from"./DatePicker-CvSs2x_p.js";import{i as O}from"./index-B-KJ_PcS.js";import{r as u}from"./index-Dl6G-zuu.js";import{w as Q,B as X,u as Z,I as N,a as x,V as $,g as ee,C as te}from"./useCommonOnChangeHandler-N2AHL1FM.js";import{a as ae,I as ne}from"./Icon.types-Cts1U0M4.js";import{T as le}from"./testIds-BFSb8VRo.js";const me=e=>e!==null&&f(e),he=(e,t)=>e.getTime()-t.getTime(),ye=(e,t=1)=>{const l=new Date(e),n=l.getMonth();return l.setDate(1),l.setMonth(n-t),l},f=e=>{try{return e instanceof Date&&!isNaN(e.getTime())}catch{return!1}},De=e=>{const t={0:"January",1:"February",2:"March",3:"April",4:"May",5:"June",6:"July",7:"August",8:"September",9:"October",10:"November",11:"December"};return t==null?void 0:t[e]},ge=e=>{const t=re(e);return new Date(t).getMonth()},re=e=>{for(let t=0;t<e.length;t++){const l=e[t];for(let n=0;n<l.length;n++){const r=l[n];if(new Date(r).getDate()===1)return r}}},h=e=>{if(e&&f(e)){const t=new Date(e);return t.setHours(0,0,0,0),t}return null},be=(e,t,l=!1)=>{if(!f(t)||!f(e))return NaN;let n;return n=(e.getFullYear()-t.getFullYear())*12,n-=t.getMonth(),n+=e.getMonth(),l?Math.abs(n):n},Ve=e=>!e||!Array.isArray(e)||Array.isArray(e)&&e.length===0?null:e==null?void 0:e.map(t=>h(t)),qe=(e,t)=>{const l=Math.max(e==null?void 0:e.length,t==null?void 0:t.length);if(isNaN(l))return-1;for(let n=0;n<l;n++)if(!O(e==null?void 0:e[n],t==null?void 0:t[n]))return n;return-1},Ce=e=>{const t=h(e),l=t.getDay(),n=l,r=6-l,d=new Date(t);d.setDate(t.getDate()-n);const p=new Date(t);return p.setDate(t.getDate()+r),[d,p]},Me=e=>{const t=h(e),l=t.getFullYear(),n=t.getMonth(),r=new Date(l,n,1),d=new Date(l,n+1,0);return[r,d]},xe=e=>{const l=h(e).getFullYear(),n=new Date(l,0,1),r=new Date(l,11,31);return[n,r]};E.extend(z);const se=({label:e,required:t,labelPosition:l="top",helperText:n,disabled:r,variant:d,placeholder:p,color:_,format:S,value:y,onClick:B,onChange:R,hideCalendarIcon:T,readOnly:D,inputRef:W,debounce:H,currentDate:w=new Date,disablePast:A,disableFuture:v,disableCurrent:I,dateDisabled:g,onValidation:b,allowClear:V,endAdornment:c,persistEndAdornment:k})=>{const{endAdornment:m}=u.useContext(X),[i,q]=u.useState(y),P=Z({onChange:R,debounce:H});u.useEffect(()=>{q(y)},[y]);const L=u.useCallback(()=>T?null:o.jsx(N,{position:"start",sx:{ml:"8px"},children:o.jsx(ae,{icon:ne.Calendar,height:"20px",width:"20px"})}),[T]),j=u.useCallback(a=>{const s=new Date(w);return s.setHours(0,0,0,0),I&&O(a,s)||v&&a>s||A&&a<s?!0:g?g(a):!1},[I,w,v,A,g]),C=u.useCallback(a=>{let s=!0;return f(a)||(s=!1),j(a)&&(s=!1),b&&b(s),s},[j,b]);u.useEffect(()=>{i&&C(i)},[]);const M=u.useCallback(a=>{q(a),P(a),C(a)},[q,P,C]),Y=u.useCallback(a=>{a==null||a.preventDefault(),a==null||a.stopPropagation(),M(null)},[M]),J=u.useCallback(()=>{const a=[];return!c&&!m&&!V||(V&&i&&!r&&a.push(o.jsx(te,{onClear:Y},"clear")),m&&a.push(m),(!c||c&&k)&&a.push(c),!a.length)?null:o.jsx(N,{position:"end",sx:{ml:"8px",display:"flex",alignItems:"center",gap:"4px",".status-adornment":{ml:0}},children:a})},[m,c,k,V,r,i,Y]);return o.jsxs(x,{children:[o.jsx(x.Label,{required:t,position:l,children:e}),o.jsx(G,{dateAdapter:U,children:o.jsx(K,{ref:W,format:S,disableOpenPicker:!0,value:i?E(i):null,disabled:r,readOnly:D,slotProps:{textField:{variant:$[d],onFocus:D?a=>{var s;return(s=a==null?void 0:a.target)==null?void 0:s.blur()}:null,onClick:B,InputProps:{"data-testid":le.DATE_FIELD_INPUT,sx:{"& input":{color:ee(_,i)}},placeholder:p,startAdornment:L(),endAdornment:J()}}},localeText:{fieldMonthPlaceholder:()=>"MMM"},onChange:a=>{D||r||M(a?a.toDate():null)}})}),o.jsx(x.HelperText,{children:n})]})},F=Q(se,"DateField");F.defaultProps={format:"MMM DD, YYYY",placeholder:"MMM DD, YYYY",disableFuture:!1,disableCurrent:!1,disablePast:!1,allowClear:!1};try{F.displayName="DateField",F.__docgenInfo={description:"",displayName:"DateField",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},sx:{defaultValue:null,description:"Style props for the container",name:"sx",required:!1,type:{name:"SxProps"}},format:{defaultValue:null,description:"",name:"format",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"Date"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: Date) => void"}},hideCalendarIcon:{defaultValue:null,description:"",name:"hideCalendarIcon",required:!1,type:{name:"boolean"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},disableFuture:{defaultValue:{value:"false"},description:"",name:"disableFuture",required:!1,type:{name:"boolean"}},disableCurrent:{defaultValue:{value:"false"},description:"",name:"disableCurrent",required:!1,type:{name:"boolean"}},disablePast:{defaultValue:{value:"false"},description:"",name:"disablePast",required:!1,type:{name:"boolean"}},dateDisabled:{defaultValue:null,description:"Function to disable specific dates",name:"dateDisabled",required:!1,type:{name:"(date: Date) => boolean"}},currentDate:{defaultValue:{value:"new Date()"},description:"Current Date, used for validating the date",name:"currentDate",required:!1,type:{name:"Date"}},onValidation:{defaultValue:null,description:"",name:"onValidation",required:!1,type:{name:"(isValid: boolean) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(e: any) => void"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"standard"'},{value:'"table"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelPosition:{defaultValue:{value:"top"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'}]}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"error"'},{value:'"success"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!1,type:{name:"string"}},TooltipProps:{defaultValue:null,description:"",name:"TooltipProps",required:!1,type:{name:"TooltipProps"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},helperText:{defaultValue:null,description:"",name:"helperText",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},startAdornment:{defaultValue:null,description:"",name:"startAdornment",required:!1,type:{name:"ReactNode"}},endAdornment:{defaultValue:null,description:"",name:"endAdornment",required:!1,type:{name:"ReactNode"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(e: any) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(e: any) => void"}},debounce:{defaultValue:null,description:"",name:"debounce",required:!1,type:{name:"number"}},persistEndAdornment:{defaultValue:null,description:"In the case that a staus is provided, the endAdornment will be hidden.\nSetting `persistEndAdornment` to true will keep the endAdornment visible beside the status icon.",name:"persistEndAdornment",required:!1,type:{name:"boolean"}},allowClear:{defaultValue:null,description:"",name:"allowClear",required:!1,type:{name:"boolean"}}}}}catch{}export{F as D,De as a,be as b,ye as c,ge as d,Ve as e,qe as f,re as g,h,f as i,Ce as j,Me as k,xe as l,me as n,he as s};