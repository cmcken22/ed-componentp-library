import{R as H,r as M}from"./index-Dl6G-zuu.js";function se(e,r){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(e);t<n.length;t++)r.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(a[n[t]]=e[n[t]]);return a}var Y;(function(e){e.event="event",e.props="prop"})(Y||(Y={}));function W(){}function Ae(e){var r,a=void 0;return function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return r&&n.length===r.length&&n.every(function(i,f){return i===r[f]})||(r=n,a=e.apply(void 0,n)),a}}function ee(e){return!!(e||"").match(/\d/)}function q(e){return e==null}function Re(e){return typeof e=="number"&&isNaN(e)}function de(e){return q(e)||Re(e)||typeof e=="number"&&!isFinite(e)}function ge(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function Te(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function Ee(e,r,a){var n=Te(a),t=e.search(/[1-9]/);return t=t===-1?e.length:t,e.substring(0,t)+e.substring(t,e.length).replace(n,"$1"+r)}function Oe(e){var r=M.useRef(e);r.current=e;var a=M.useRef(function(){for(var n=[],t=arguments.length;t--;)n[t]=arguments[t];return r.current.apply(r,n)});return a.current}function oe(e,r){r===void 0&&(r=!0);var a=e[0]==="-",n=a&&r;e=e.replace("-","");var t=e.split("."),i=t[0],f=t[1]||"";return{beforeDecimal:i,afterDecimal:f,hasNegation:a,addNegation:n}}function Be(e){if(!e)return e;var r=e[0]==="-";r&&(e=e.substring(1,e.length));var a=e.split("."),n=a[0].replace(/^0+/,"")||"0",t=a[1]||"";return(r?"-":"")+n+(t?"."+t:"")}function me(e,r,a){for(var n="",t=a?"0":"",i=0;i<=r-1;i++)n+=e[i]||t;return n}function fe(e,r){return Array(r+1).join(e)}function he(e){var r=e+"",a=r[0]==="-"?"-":"";a&&(r=r.substring(1));var n=r.split(/[eE]/g),t=n[0],i=n[1];if(i=Number(i),!i)return a+t;t=t.replace(".","");var f=1+i,h=t.length;return f<0?t="0."+fe("0",Math.abs(f))+t:f>=h?t=t+fe("0",f-h):t=(t.substring(0,f)||"0")+"."+t.substring(f),a+t}function le(e,r,a){if(["","-"].indexOf(e)!==-1)return e;var n=(e.indexOf(".")!==-1||a)&&r,t=oe(e),i=t.beforeDecimal,f=t.afterDecimal,h=t.hasNegation,y=parseFloat("0."+(f||"0")),b=f.length<=r?"0."+f:y.toFixed(r),S=b.split("."),g=i;i&&Number(S[0])&&(g=i.split("").reverse().reduce(function(w,D,d){return w.length>d?(Number(w[0])+Number(D)).toString()+w.substring(1,w.length):D+w},S[0]));var m=me(S[1]||"",r,a),x=h?"-":"",c=n?".":"";return""+x+g+c+m}function Z(e,r){if(e.value=e.value,e!==null){if(e.createTextRange){var a=e.createTextRange();return a.move("character",r),a.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(r,r),!0):(e.focus(),!1)}}var Se=Ae(function(e,r){for(var a=0,n=0,t=e.length,i=r.length;e[a]===r[a]&&a<t;)a++;for(;e[t-1-n]===r[i-1-n]&&i-n>a&&t-n>a;)n++;return{from:{start:a,end:t-n},to:{start:a,end:i-n}}});function _e(e,r,a){return Math.min(Math.max(e,r),a)}function ie(e){return Math.max(e.selectionStart,e.selectionEnd)}function Fe(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function je(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function Le(e){var r=e.currentValue,a=e.formattedValue,n=e.currentValueIndex,t=e.formattedValueIndex;return r[n]===a[t]}function Me(e,r,a,n,t,i,f){f===void 0&&(f=Le);var h=t.findIndex(function(K){return K}),y=e.slice(0,h);!r&&!a.startsWith(y)&&(r=y,a=y+a,n=n+y.length);for(var b=a.length,S=e.length,g={},m=new Array(b),x=0;x<b;x++){m[x]=-1;for(var c=0,w=S;c<w;c++){var D=f({currentValue:a,lastValue:r,formattedValue:e,currentValueIndex:x,formattedValueIndex:c});if(D&&g[c]!==!0){m[x]=c,g[c]=!0;break}}}for(var d=n;d<b&&(m[d]===-1||!i(a[d]));)d++;var O=d===b||m[d]===-1?S:m[d];for(d=n-1;d>0&&m[d]===-1;)d--;var _=d===-1||m[d]===-1?0:m[d]+1;return _>O?O:n-_<O-n?_:O}function ve(e,r,a,n){var t=e.length;if(r=_e(r,0,t),n==="left"){for(;r>=0&&!a[r];)r--;r===-1&&(r=a.indexOf(!0))}else{for(;r<=t&&!a[r];)r++;r>t&&(r=a.lastIndexOf(!0))}return r===-1&&(r=t),r}function ke(e){for(var r=Array.from({length:e.length+1}).map(function(){return!0}),a=0,n=r.length;a<n;a++)r[a]=!!(ee(e[a])||ee(e[a-1]));return r}function xe(e,r,a,n,t,i){i===void 0&&(i=W);var f=Oe(function(c,w){var D,d;return de(c)?(d="",D=""):typeof c=="number"||w?(d=typeof c=="number"?he(c):c,D=n(d)):(d=t(c,void 0),D=n(d)),{formattedValue:D,numAsString:d}}),h=M.useState(function(){return f(q(e)?r:e,a)}),y=h[0],b=h[1],S=function(c,w){c.formattedValue!==y.formattedValue&&b({formattedValue:c.formattedValue,numAsString:c.value}),i(c,w)},g=e,m=a;q(e)&&(g=y.numAsString,m=!0);var x=f(g,m);return M.useMemo(function(){b(x)},[x.formattedValue]),[y,S]}function Ke(e){return e.replace(/[^0-9]/g,"")}function Pe(e){return e}function Ue(e){var r=e.type;r===void 0&&(r="text");var a=e.displayType;a===void 0&&(a="input");var n=e.customInput,t=e.renderText,i=e.getInputRef,f=e.format;f===void 0&&(f=Pe);var h=e.removeFormatting;h===void 0&&(h=Ke);var y=e.defaultValue,b=e.valueIsNumericString,S=e.onValueChange,g=e.isAllowed,m=e.onChange;m===void 0&&(m=W);var x=e.onKeyDown;x===void 0&&(x=W);var c=e.onMouseUp;c===void 0&&(c=W);var w=e.onFocus;w===void 0&&(w=W);var D=e.onBlur;D===void 0&&(D=W);var d=e.value,O=e.getCaretBoundary;O===void 0&&(O=ke);var _=e.isValidInputCharacter;_===void 0&&(_=ee);var K=e.isCharacterSame,j=se(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),G=xe(d,y,!!b,f,h,S),P=G[0],p=P.formattedValue,L=P.numAsString,U=G[1],k=M.useRef({formattedValue:p,numAsString:L}),z=function(o,u){k.current={formattedValue:o.formattedValue,numAsString:o.value},U(o,u)},$=M.useState(!1),J=$[0],Q=$[1],l=M.useRef(null),v=M.useRef({setCaretTimeout:null,focusTimeout:null});M.useEffect(function(){return Q(!0),function(){clearTimeout(v.current.setCaretTimeout),clearTimeout(v.current.focusTimeout)}},[]);var T=f,I=function(o,u){var s=parseFloat(u);return{formattedValue:o,value:u,floatValue:isNaN(s)?void 0:s}},C=function(o,u,s){o.selectionStart===0&&o.selectionEnd===o.value.length||(Z(o,u),v.current.setCaretTimeout=setTimeout(function(){o.value===s&&o.selectionStart!==u&&Z(o,u)},0))},A=function(o,u,s){return ve(o,u,O(o),s)},B=function(o,u,s){var R=O(u),E=Me(u,p,o,s,R,_,K);return E=ve(u,E,R),E},re=function(o){var u=o.formattedValue;u===void 0&&(u="");var s=o.input,R=o.source,E=o.event,V=o.numAsString,N;if(s){var F=o.inputValue||s.value,X=ie(s);s.value=u,N=B(F,u,X),N!==void 0&&C(s,N,u)}u!==p&&z(I(u,V),{event:E,source:R})};M.useEffect(function(){var o=k.current,u=o.formattedValue,s=o.numAsString;p!==u&&(p!==L||u!==s)&&z(I(p,L),{event:void 0,source:Y.props})},[p,L]);var ne=l.current?ie(l.current):void 0,ae=typeof window<"u"?M.useLayoutEffect:M.useEffect;ae(function(){var o=l.current;if(p!==k.current.formattedValue&&o){var u=B(k.current.formattedValue,p,ne);o.value=p,C(o,u,p)}},[p]);var pe=function(o,u,s){var R=Se(p,o),E=Object.assign(Object.assign({},R),{lastValue:p}),V=h(o,E),N=T(V);if(V=h(N,void 0),g&&!g(I(N,V))){var F=u.target,X=ie(F),Ce=B(o,p,X);return F.value=p,C(F,Ce,p),!1}return re({formattedValue:N,numAsString:V,inputValue:o,event:u,source:s,input:u.target}),!0},Ve=function(o){var u=o.target,s=u.value,R=pe(s,o,Y.event);R&&m(o)},ye=function(o){var u=o.target,s=o.key,R=u.selectionStart,E=u.selectionEnd,V=u.value;V===void 0&&(V="");var N;if(s==="ArrowLeft"||s==="Backspace"?N=Math.max(R-1,0):s==="ArrowRight"?N=Math.min(R+1,V.length):s==="Delete"&&(N=R),N===void 0||R!==E){x(o);return}var F=N;if(s==="ArrowLeft"||s==="ArrowRight"){var X=s==="ArrowLeft"?"left":"right";F=A(V,N,X),F!==N&&o.preventDefault()}else s==="Delete"&&!_(V[N])?F=A(V,N,"right"):s==="Backspace"&&!_(V[N])&&(F=A(V,N,"left"));F!==N&&C(u,F,V),o.isUnitTestRun&&C(u,F,V),x(o)},be=function(o){var u=o.target,s=u.selectionStart,R=u.selectionEnd,E=u.value;if(E===void 0&&(E=""),s===R){var V=A(E,s);V!==s&&C(u,V,E)}c(o)},Ne=function(o){o.persist&&o.persist();var u=o.target,s=o.currentTarget;l.current=u,v.current.focusTimeout=setTimeout(function(){var R=u.selectionStart,E=u.selectionEnd,V=u.value;V===void 0&&(V="");var N=A(V,R);N!==R&&!(R===0&&E===V.length)&&C(u,N,V),w(Object.assign(Object.assign({},o),{currentTarget:s}))},0)},we=function(o){l.current=null,clearTimeout(v.current.focusTimeout),clearTimeout(v.current.setCaretTimeout),D(o)},De=J&&Fe()?"numeric":void 0,ue=Object.assign({inputMode:De},j,{type:r,value:p,onChange:Ve,onKeyDown:ye,onMouseUp:be,onFocus:Ne,onBlur:we});if(a==="text")return t?H.createElement(H.Fragment,null,t(p,j)||null):H.createElement("span",Object.assign({},j,{ref:i}),p);if(n){var Ie=n;return H.createElement(Ie,Object.assign({},ue,{ref:i}))}return H.createElement("input",Object.assign({},ue,{ref:i}))}function ce(e,r){var a=r.decimalScale,n=r.fixedDecimalScale,t=r.prefix;t===void 0&&(t="");var i=r.suffix;i===void 0&&(i="");var f=r.allowNegative,h=r.thousandsGroupStyle;if(h===void 0&&(h="thousand"),e===""||e==="-")return e;var y=te(r),b=y.thousandSeparator,S=y.decimalSeparator,g=a!==0&&e.indexOf(".")!==-1||a&&n,m=oe(e,f),x=m.beforeDecimal,c=m.afterDecimal,w=m.addNegation;return a!==void 0&&(c=me(c,a,!!n)),b&&(x=Ee(x,b,h)),t&&(x=t+x),i&&(c=c+i),w&&(x="-"+x),e=x+(g&&S||"")+c,e}function te(e){var r=e.decimalSeparator;r===void 0&&(r=".");var a=e.thousandSeparator,n=e.allowedDecimalSeparators;return a===!0&&(a=","),n||(n=[r,"."]),{decimalSeparator:r,thousandSeparator:a,allowedDecimalSeparators:n}}function $e(e,r){e===void 0&&(e="");var a=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),t=a.test(e),i=n.test(e);return e=e.replace(/-/g,""),t&&!i&&r&&(e="-"+e),e}function We(e,r){return new RegExp("(^-)|[0-9]|"+ge(e),r?"g":void 0)}function Ge(e,r,a){return e===""?!0:!(r!=null&&r.match(/\d/))&&!(a!=null&&a.match(/\d/))&&typeof e=="string"&&!isNaN(Number(e))}function Ze(e,r,a){var n;r===void 0&&(r=je(e));var t=a.allowNegative,i=a.prefix;i===void 0&&(i="");var f=a.suffix;f===void 0&&(f="");var h=a.decimalScale,y=r.from,b=r.to,S=b.start,g=b.end,m=te(a),x=m.allowedDecimalSeparators,c=m.decimalSeparator,w=e[g]===c;if(ee(e)&&(e===i||e===f)&&r.lastValue==="")return e;if(g-S===1&&x.indexOf(e[S])!==-1){var D=h===0?"":c;e=e.substring(0,S)+D+e.substring(S+1,e.length)}var d=function(v,T,I){var C=!1,A=!1;i.startsWith("-")?C=!1:v.startsWith("--")?(C=!1,A=!0):f.startsWith("-")&&v.length===f.length?C=!1:v[0]==="-"&&(C=!0);var B=C?1:0;return A&&(B=2),B&&(v=v.substring(B),T-=B,I-=B),{value:v,start:T,end:I,hasNegation:C}},O=d(e,S,g),_=O.hasNegation;n=O,e=n.value,S=n.start,g=n.end;var K=d(r.lastValue,y.start,y.end),j=K.start,G=K.end,P=K.value,p=e.substring(S,g);e.length&&P.length&&(j>P.length-f.length||G<i.length)&&!(p&&f.startsWith(p))&&(e=P);var L=0;e.startsWith(i)?L+=i.length:S<i.length&&(L=S),e=e.substring(L),g-=L;var U=e.length,k=e.length-f.length;e.endsWith(f)?U=k:(g>k||g>e.length-f.length)&&(U=g),e=e.substring(0,U),e=$e(_?"-"+e:e,t),e=(e.match(We(c,!0))||[]).join("");var z=e.indexOf(c);e=e.replace(new RegExp(ge(c),"g"),function(v,T){return T===z?".":""});var $=oe(e,t),J=$.beforeDecimal,Q=$.afterDecimal,l=$.addNegation;return b.end-b.start<y.end-y.start&&J===""&&w&&!parseFloat(Q)&&(e=l?"-":""),e}function ze(e,r){var a=r.prefix;a===void 0&&(a="");var n=r.suffix;n===void 0&&(n="");var t=Array.from({length:e.length+1}).map(function(){return!0}),i=e[0]==="-";t.fill(!1,0,a.length+(i?1:0));var f=e.length;return t.fill(!1,f-n.length+1,f+1),t}function He(e){var r=te(e),a=r.thousandSeparator,n=r.decimalSeparator,t=e.prefix;t===void 0&&(t="");var i=e.allowNegative;if(i===void 0&&(i=!0),a===n)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+a+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+n+` (default value for decimalSeparator is .)
     `);return t.startsWith("-")&&i&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+t+`
      allowNegative: `+i+`
    `),i=!1),Object.assign(Object.assign({},e),{allowNegative:i})}function qe(e){e=He(e),e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle;var r=e.suffix,a=e.allowNegative,n=e.allowLeadingZeros,t=e.onKeyDown;t===void 0&&(t=W);var i=e.onBlur;i===void 0&&(i=W);var f=e.thousandSeparator,h=e.decimalScale,y=e.fixedDecimalScale,b=e.prefix;b===void 0&&(b="");var S=e.defaultValue,g=e.value,m=e.valueIsNumericString,x=e.onValueChange,c=se(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),w=te(e),D=w.decimalSeparator,d=w.allowedDecimalSeparators,O=function(l){return ce(l,e)},_=function(l,v){return Ze(l,v,e)},K=q(g)?S:g,j=m??Ge(K,b,r);q(g)?q(S)||(j=j||typeof S=="number"):j=j||typeof g=="number";var G=function(l){return de(l)?l:(typeof l=="number"&&(l=he(l)),j&&typeof h=="number"?le(l,h,!!y):l)},P=xe(G(g),G(S),!!j,O,_,x),p=P[0],L=p.numAsString,U=p.formattedValue,k=P[1],z=function(l){var v=l.target,T=l.key,I=v.selectionStart,C=v.selectionEnd,A=v.value;if(A===void 0&&(A=""),I!==C){t(l);return}T==="Backspace"&&A[0]==="-"&&I===b.length+1&&a&&Z(v,1),h&&y&&(T==="Backspace"&&A[I-1]===D?(Z(v,I-1),l.preventDefault()):T==="Delete"&&A[I]===D&&l.preventDefault()),d!=null&&d.includes(T)&&A[I]===D&&Z(v,I+1);var B=f===!0?",":f;T==="Backspace"&&A[I-1]===B&&Z(v,I-1),T==="Delete"&&A[I]===B&&Z(v,I+1),t(l)},$=function(l){var v=L;if(v.match(/\d/g)||(v=""),n||(v=Be(v)),y&&h&&(v=le(v,h,y)),v!==L){var T=ce(v,e);k({formattedValue:T,value:v,floatValue:parseFloat(v)},{event:l,source:Y.event})}i(l)},J=function(l){return l===D?!0:ee(l)},Q=function(l){var v=l.currentValue,T=l.lastValue,I=l.formattedValue,C=l.currentValueIndex,A=l.formattedValueIndex,B=v[C],re=I[A],ne=Se(T,v),ae=ne.to;return C>=ae.start&&C<ae.end&&d&&d.includes(B)&&re===D?!0:B===re};return Object.assign(Object.assign({},c),{value:U,valueIsNumericString:!1,isValidInputCharacter:J,isCharacterSame:Q,onValueChange:k,format:O,removeFormatting:_,getCaretBoundary:function(l){return ze(l,e)},onKeyDown:z,onBlur:$})}function Qe(e){var r=qe(e);return H.createElement(Ue,Object.assign({},r))}export{Qe as N};
