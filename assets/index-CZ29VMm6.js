import{F as d,t as n}from"./Typography-u1033W3R.js";import{h as a,b as l}from"./index-B-KJ_PcS.js";import{p as s}from"./palette-CESXTxp7.js";import{c}from"./createTheme-CxQfeomc.js";const u={styleOverrides:{root:({theme:o,ownerState:r})=>{var e,p;const i=(e=r==null?void 0:r.InputProps)==null?void 0:e.startAdornment,t=(p=r==null?void 0:r.InputProps)==null?void 0:p.endAdornment;return{"input::placeholder":{color:o.palette.text.placeholder,opacity:1},"input::-webkit-outer-spin-button":{margin:0},"input::-webkit-inner-spin-button":{webkitAppearance:"none",margin:0},"input[type=number]":{mozAppearance:"textfield"},".MuiInputBase-root":{padding:0,backgroundColor:"white"},".MuiInputBase-adornedEnd":{paddingRight:"8px"},width:"100%",fieldset:{borderWidth:`${o.shape.borderWidth} !important`,borderColor:o.palette.border.main},input:{...o.typography.bodyR,fontWeight:d.regular,paddingTop:o.typography.pxToRem(6.5),paddingBottom:o.typography.pxToRem(6.5),paddingLeft:i?o.typography.pxToRem(0):o.typography.pxToRem(8),paddingRight:t?o.typography.pxToRem(0):o.typography.pxToRem(8)},textarea:{paddingTop:o.typography.pxToRem(8),paddingBottom:o.typography.pxToRem(8),paddingLeft:o.typography.pxToRem(8),paddingRight:o.typography.pxToRem(8)}}}}},g={styleOverrides:{root:({theme:o,ownerState:r})=>{const{variant:i}=r,t={...o.typography.button,width:"fit-content",boxShadow:"none !important",textTransform:"none","&.Mui-disabled":{opacity:.4},".icon-wrapper":{color:"white"}};return i==="outlined"?{...t,"&:hover":{backgroundColor:a(o.palette[r.color].main,.1)},"&:active":{backgroundColor:a(o.palette[r.color].main,.2)},".icon-wrapper":{color:o.palette[r.color].main}}:i==="link"?{...t,color:o.palette[r.color].main,"&:hover":{color:o.palette[r.color].light,backgroundColor:"transparent"},"&:active":{color:o.palette[r.color].dark},"&:disabled":{opacity:.4},".icon-wrapper":{color:o.palette[r.color].main}}:{...t,"&:hover":{backgroundColor:o.palette[r.color].light},"&:active":{backgroundColor:o.palette[r.color].dark}}}}},b={styleOverrides:{root:({theme:o})=>({".MuiSvgIcon-root":{width:"20px",height:"20px"},"& svg":{color:"transparent !important"},"&:after":{content:'""',height:"16px",width:"16px",position:"absolute",border:"1px solid",borderRadius:"2px",borderColor:o.palette.charcoal.main,zIndex:-1,backgroundColor:"white"},"&:hover":{"& svg":{color:o.palette.primary.main},"&:after":{content:'""',height:"16px",width:"16px",position:"absolute",border:"1px solid",borderRadius:"2px",borderColor:o.palette.primary.main,backgroundColor:a(o.palette.primary.main,.1),zIndex:-1}},"&.Mui-checked":{"& svg":{color:`${o.palette.primary.main} !important`},"&:after":{content:'""',height:"16px",width:"16px",position:"absolute",border:"1px solid",borderRadius:"2px",borderColor:o.palette.primary.main,zIndex:-1}},"&.Mui-disabled":{cursor:"not-allowed"},"&.Mui-disabled:not(.Mui-checked)":{"& svg":{color:"transparent !important"},"&:after":{content:'""',height:"16px",width:"16px",position:"absolute",border:"1px solid",borderRadius:"2px",borderColor:o.palette.charcoal[30],zIndex:-1}},"&.Mui-disabled.Mui-checked":{"& svg":{color:`${o.palette.charcoal[30]} !important`},"&:after":{content:'""',height:"16px",width:"16px",position:"absolute",border:"1px solid",borderRadius:"2px",borderColor:o.palette.charcoal[30],zIndex:-1}}})}},h={defaultProps:{className:"Select__list","data-testid":"SelectList"},styleOverrides:{root:({theme:o})=>({borderRadius:o.shape.borderRadius,...o.typography.bodyS,"&[aria-current='true']":{background:o.palette.secondary.main,color:o.palette.secondary.contrastText},"&.Mui-selected:hover":{background:o.palette.secondary.main,color:o.palette.primary.contrastText}})}},x={styleOverrides:{root:()=>({})}},y={styleOverrides:{root:({theme:o,ownerState:r})=>{var i,t,e,p;return{".MuiSlider-rail":{height:"2px",backgroundColor:(t=(i=o.palette)==null?void 0:i.charcoal)==null?void 0:t[10]},".MuiSlider-track":{height:"2px",border:"none"},".MuiSlider-thumb":{"&.Mui-focusVisible, &.Mui-active, &:hover":{boxShadow:`0 0 0 3px ${a((p=(e=o.palette)==null?void 0:e[r==null?void 0:r.color])==null?void 0:p.main,.2)} !important`},height:"10px",width:"10px"}}}}},m={defaultProps:{className:"Select__list","data-testid":"SelectList"},styleOverrides:{root:({theme:o})=>({"& .MuiPaper-root":{marginTop:"3px"},"& .MuiList-root":{padding:0},"& .MuiMenuItem-root":{"&:focus":{backgroundColor:a(o.palette.primary[10],.07)},padding:"5.5px 8px",borderBottomWidth:o.shape.borderWidth,borderBottomStyle:"solid",borderBottomColor:o.palette.border.main,"&:last-child":{borderBottom:"none"},"&:hover":{backgroundColor:a(o.palette.primary[10],.07)}}})}},T={styleOverrides:{root:({theme:o,ownerState:r})=>({"&.MuiInputBase-root":{background:"white"},"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderWidth:`${o.shape.borderWidth} !important`},minHeight:"36px",width:"100%",".MuiSelect-select":{display:"flex",alignItems:"center",borderColor:o.palette.primary.main,borderWidth:`${o.shape.borderWidth} !important`,height:"36px",paddingTop:0,paddingBottom:0},fieldset:{borderWidth:`${o.shape.borderWidth} !important`},"& .MuiSelect-multiple":{display:"flex",flexWrap:"wrap",alignItems:"center",height:"unset",gap:o.spacing(.5),...(r==null?void 0:r.value)&&(r==null?void 0:r.value.length)>0&&{paddingTop:o.spacing(.5),paddingBottom:o.spacing(.5)}},"&.dropdown--open":{"&.MuiInputBase-root .MuiOutlinedInput-notchedOutline":{borderColor:`${o.palette.primary.main} !important`,borderWidth:`${o.shape.borderWidth} !important`}}})}},M={styleOverrides:{root:()=>({width:"100%",minHeight:"unset","& .MuiTab-root":{padding:"0px",paddingLeft:"2px",paddingRight:"2px",minWidth:"unset",minHeight:"unset",marginBottom:"4px"},"& .MuiTabs-flexContainer":{gap:"16px",display:"flex"},"& .MuiTabs-indicator":{borderRadius:"4px"},"& .Tab__label":{marginBottom:"6px"}})}},f={styleOverrides:{tooltip:({theme:o,ownerState:r})=>{const i="0px 0px 9px rgba(0, 0, 0, 0.4)";let t=o.palette.text.primary,e="white";return(r==null?void 0:r.variant)==="dark"&&(t="white",e=o.palette.charcoal[90]),{padding:o.spacing(2),filter:`drop-shadow(${i})`,".MuiTypography-root":{color:t},".Tooltip__close-icon":{color:t},background:e,"& .MuiTooltip-arrow":{color:e}}}}},I=c({typography:n,palette:s,components:{MuiButton:g,MuiCheckbox:b,MuiTextField:u,MuiRadio:x,MuiSelect:T,MuiTabs:M,MuiMenu:m,MuiPaginationItem:h,MuiSlider:y,MuiTooltip:f},shape:{borderRadius:2,borderWidth:"1px"}}),B=()=>l(),W={RangePicker:"400px",DateRangeField:"360px",Input:"240px"};export{W as D,I as t,B as u};