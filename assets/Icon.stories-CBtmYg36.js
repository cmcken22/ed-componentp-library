import{j as S}from"./jsx-runtime-Du8NFWEI.js";import{r as Z}from"./index-Dl6G-zuu.js";import{s as ye}from"./index-YfFXUiEp.js";import"./DatePicker-hLPxx9bP.js";import"./Avatar-BLAdS9CV.js";import{B as Ie}from"./Button-BXStEUTk.js";import"./Checkbox-D7Z_91RO.js";import"./Chip-DWAGt5_W.js";import"./Dropdown-DJ30yDWD.js";import{a as ce,I as ae}from"./Icon.types-ZLDmiTIS.js";import{I as Ee}from"./Input-n6DbCxjg.js";import"./enqueueSnackbar-Cr06R9t6.js";import"./ThemeWrapper-DkVgXmRj.js";import{T as Se}from"./Typography-CWG-RrY2.js";import{B as N}from"./Box-Cx2AHcqC.js";import"./withBaseInput-BsgnoZo0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bpxk95mn.js";import"./createTheme-B78KyuB4.js";import"./styled-BHqtc5H1.js";import"./index-CxDPfwJT.js";import"./useOnHover-B2KCCg7l.js";import"./Tooltip-BGGbFmQz.js";import"./index-D1_ZHIBm.js";import"./TransitionGroupContext-D0h4fVK4.js";import"./useControlled-1Y2rT-1r.js";import"./inheritsLoose-B7h9gheN.js";import"./useFormControl-EHw8eS4L.js";import"./createSvgIcon-wuQRGJaD.js";import"./GlobalStyles-Cw5gJnzH.js";import"./Typography-CwlVby8-.js";import"./index-BV_mmP2Q.js";import"./Typography-D13k7nS0.js";import"./index-Beu9b4Vr.js";import"./ButtonBase-DwooOwGJ.js";import"./assertThisInitialized-B9jnkVVz.js";import"./TextField-BvZ0tNBD.js";import"./FormControlLabel-BwAZN5ZN.js";import"./lodash-BR7ZO34U.js";import"./palette-DffXsAfV.js";import"./TextArea-Cu2FXdOG.js";import"./Currency-DBCdWNOt.js";function _(t){return Array.isArray?Array.isArray(t):ue(t)==="[object Array]"}const _e=1/0;function we(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-_e?"-0":e}function be(t){return t==null?"":we(t)}function I(t){return typeof t=="string"}function he(t){return typeof t=="number"}function Ae(t){return t===!0||t===!1||Le(t)&&ue(t)=="[object Boolean]"}function le(t){return typeof t=="object"}function Le(t){return le(t)&&t!==null}function m(t){return t!=null}function V(t){return!t.trim().length}function ue(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const ke="Incorrect 'index' type",Re=t=>`Invalid value for key ${t}`,Ce=t=>`Pattern length exceeds max of ${t}.`,ve=t=>`Missing ${t} property in key`,Oe=t=>`Property 'weight' in key '${t}' must be a positive integer`,q=Object.prototype.hasOwnProperty;class Ne{constructor(e){this._keys=[],this._keyMap={};let s=0;e.forEach(n=>{let r=fe(n);this._keys.push(r),this._keyMap[r.id]=r,s+=r.weight}),this._keys.forEach(n=>{n.weight/=s})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function fe(t){let e=null,s=null,n=null,r=1,i=null;if(I(t)||_(t))n=t,e=ee(t),s=D(t);else{if(!q.call(t,"name"))throw new Error(ve("name"));const o=t.name;if(n=o,q.call(t,"weight")&&(r=t.weight,r<=0))throw new Error(Oe(o));e=ee(o),s=D(o),i=t.getFn}return{path:e,id:s,weight:r,src:n,getFn:i}}function ee(t){return _(t)?t:t.split(".")}function D(t){return _(t)?t.join("."):t}function je(t,e){let s=[],n=!1;const r=(i,o,c)=>{if(m(i))if(!o[c])s.push(i);else{let a=o[c];const h=i[a];if(!m(h))return;if(c===o.length-1&&(I(h)||he(h)||Ae(h)))s.push(be(h));else if(_(h)){n=!0;for(let l=0,f=h.length;l<f;l+=1)r(h[l],o,c+1)}else o.length&&r(h,o,c+1)}};return r(t,I(e)?e.split("."):e,0),n?s:s[0]}const $e={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},Te={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Fe={location:0,threshold:.6,distance:100},Be={useExtendedSearch:!1,getFn:je,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var u={...Te,...$e,...Fe,...Be};const Pe=/[^ ]+/g;function We(t=1,e=3){const s=new Map,n=Math.pow(10,e);return{get(r){const i=r.match(Pe).length;if(s.has(i))return s.get(i);const o=1/Math.pow(i,.5*t),c=parseFloat(Math.round(o*n)/n);return s.set(i,c),c},clear(){s.clear()}}}class Q{constructor({getFn:e=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){this.norm=We(s,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((s,n)=>{this._keysMap[s.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,I(this.docs[0])?this.docs.forEach((e,s)=>{this._addString(e,s)}):this.docs.forEach((e,s)=>{this._addObject(e,s)}),this.norm.clear())}add(e){const s=this.size();I(e)?this._addString(e,s):this._addObject(e,s)}removeAt(e){this.records.splice(e,1);for(let s=e,n=this.size();s<n;s+=1)this.records[s].i-=1}getValueForItemAtKeyId(e,s){return e[this._keysMap[s]]}size(){return this.records.length}_addString(e,s){if(!m(e)||V(e))return;let n={v:e,i:s,n:this.norm.get(e)};this.records.push(n)}_addObject(e,s){let n={i:s,$:{}};this.keys.forEach((r,i)=>{let o=r.getFn?r.getFn(e):this.getFn(e,r.path);if(m(o)){if(_(o)){let c=[];const a=[{nestedArrIndex:-1,value:o}];for(;a.length;){const{nestedArrIndex:h,value:l}=a.pop();if(m(l))if(I(l)&&!V(l)){let f={v:l,i:h,n:this.norm.get(l)};c.push(f)}else _(l)&&l.forEach((f,d)=>{a.push({nestedArrIndex:d,value:f})})}n.$[i]=c}else if(I(o)&&!V(o)){let c={v:o,n:this.norm.get(o)};n.$[i]=c}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function de(t,e,{getFn:s=u.getFn,fieldNormWeight:n=u.fieldNormWeight}={}){const r=new Q({getFn:s,fieldNormWeight:n});return r.setKeys(t.map(fe)),r.setSources(e),r.create(),r}function Ve(t,{getFn:e=u.getFn,fieldNormWeight:s=u.fieldNormWeight}={}){const{keys:n,records:r}=t,i=new Q({getFn:e,fieldNormWeight:s});return i.setKeys(n),i.setIndexRecords(r),i}function T(t,{errors:e=0,currentLocation:s=0,expectedLocation:n=0,distance:r=u.distance,ignoreLocation:i=u.ignoreLocation}={}){const o=e/t.length;if(i)return o;const c=Math.abs(n-s);return r?o+c/r:c?1:o}function Ke(t=[],e=u.minMatchCharLength){let s=[],n=-1,r=-1,i=0;for(let o=t.length;i<o;i+=1){let c=t[i];c&&n===-1?n=i:!c&&n!==-1&&(r=i-1,r-n+1>=e&&s.push([n,r]),n=-1)}return t[i-1]&&i-n>=e&&s.push([n,i-1]),s}const R=32;function De(t,e,s,{location:n=u.location,distance:r=u.distance,threshold:i=u.threshold,findAllMatches:o=u.findAllMatches,minMatchCharLength:c=u.minMatchCharLength,includeMatches:a=u.includeMatches,ignoreLocation:h=u.ignoreLocation}={}){if(e.length>R)throw new Error(Ce(R));const l=e.length,f=t.length,d=Math.max(0,Math.min(n,f));let p=i,g=d;const x=c>1||a,L=x?Array(f):[];let E;for(;(E=t.indexOf(e,g))>-1;){let M=T(e,{currentLocation:E,expectedLocation:d,distance:r,ignoreLocation:h});if(p=Math.min(M,p),g=E+l,x){let w=0;for(;w<l;)L[E+w]=1,w+=1}}g=-1;let C=[],k=1,j=l+f;const Me=1<<l-1;for(let M=0;M<l;M+=1){let w=0,b=j;for(;w<b;)T(e,{errors:M,currentLocation:d+b,expectedLocation:d,distance:r,ignoreLocation:h})<=p?w=b:j=b,b=Math.floor((j-w)/2+w);j=b;let X=Math.max(1,d-b+1),W=o?f:Math.min(d+b,f)+l,v=Array(W+2);v[W+1]=(1<<M)-1;for(let y=W;y>=X;y-=1){let $=y-1,J=s[t.charAt($)];if(x&&(L[$]=+!!J),v[y]=(v[y+1]<<1|1)&J,M&&(v[y]|=(C[y+1]|C[y])<<1|1|C[y+1]),v[y]&Me&&(k=T(e,{errors:M,currentLocation:$,expectedLocation:d,distance:r,ignoreLocation:h}),k<=p)){if(p=k,g=$,g<=d)break;X=Math.max(1,2*d-g)}}if(T(e,{errors:M+1,currentLocation:d,expectedLocation:d,distance:r,ignoreLocation:h})>p)break;C=v}const P={isMatch:g>=0,score:Math.max(.001,k)};if(x){const M=Ke(L,c);M.length?a&&(P.indices=M):P.isMatch=!1}return P}function ze(t){let e={};for(let s=0,n=t.length;s<n;s+=1){const r=t.charAt(s);e[r]=(e[r]||0)|1<<n-s-1}return e}class pe{constructor(e,{location:s=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:o=u.findAllMatches,minMatchCharLength:c=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:h=u.ignoreLocation}={}){if(this.options={location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:h},this.pattern=a?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(d,p)=>{this.chunks.push({pattern:d,alphabet:ze(d),startIndex:p})},f=this.pattern.length;if(f>R){let d=0;const p=f%R,g=f-p;for(;d<g;)l(this.pattern.substr(d,R),d),d+=R;if(p){const x=f-R;l(this.pattern.substr(x),x)}}else l(this.pattern,0)}searchIn(e){const{isCaseSensitive:s,includeMatches:n}=this.options;if(s||(e=e.toLowerCase()),this.pattern===e){let g={isMatch:!0,score:0};return n&&(g.indices=[[0,e.length-1]]),g}const{location:r,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,ignoreLocation:h}=this.options;let l=[],f=0,d=!1;this.chunks.forEach(({pattern:g,alphabet:x,startIndex:L})=>{const{isMatch:E,score:C,indices:k}=De(e,g,x,{location:r+L,distance:i,threshold:o,findAllMatches:c,minMatchCharLength:a,includeMatches:n,ignoreLocation:h});E&&(d=!0),f+=C,E&&k&&(l=[...l,...k])});let p={isMatch:d,score:d?f/this.chunks.length:1};return d&&n&&(p.indices=l),p}}class A{constructor(e){this.pattern=e}static isMultiMatch(e){return te(e,this.multiRegex)}static isSingleMatch(e){return te(e,this.singleRegex)}search(){}}function te(t,e){const s=t.match(e);return s?s[1]:null}class He extends A{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const s=e===this.pattern;return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Ye extends A{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const n=e.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Ge extends A{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const s=e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,this.pattern.length-1]}}}class Ue extends A{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const s=!e.startsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class Qe extends A{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const s=e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class Xe extends A{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const s=!e.endsWith(this.pattern);return{isMatch:s,score:s?0:1,indices:[0,e.length-1]}}}class ge extends A{constructor(e,{location:s=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:o=u.findAllMatches,minMatchCharLength:c=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:h=u.ignoreLocation}={}){super(e),this._bitapSearch=new pe(e,{location:s,threshold:n,distance:r,includeMatches:i,findAllMatches:o,minMatchCharLength:c,isCaseSensitive:a,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class me extends A{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let s=0,n;const r=[],i=this.pattern.length;for(;(n=e.indexOf(this.pattern,s))>-1;)s=n+i,r.push([n,s-1]);const o=!!r.length;return{isMatch:o,score:o?0:1,indices:r}}}const z=[He,me,Ge,Ue,Xe,Qe,Ye,ge],se=z.length,Je=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Ze="|";function qe(t,e={}){return t.split(Ze).map(s=>{let n=s.trim().split(Je).filter(i=>i&&!!i.trim()),r=[];for(let i=0,o=n.length;i<o;i+=1){const c=n[i];let a=!1,h=-1;for(;!a&&++h<se;){const l=z[h];let f=l.isMultiMatch(c);f&&(r.push(new l(f,e)),a=!0)}if(!a)for(h=-1;++h<se;){const l=z[h];let f=l.isSingleMatch(c);if(f){r.push(new l(f,e));break}}}return r})}const et=new Set([ge.type,me.type]);class tt{constructor(e,{isCaseSensitive:s=u.isCaseSensitive,includeMatches:n=u.includeMatches,minMatchCharLength:r=u.minMatchCharLength,ignoreLocation:i=u.ignoreLocation,findAllMatches:o=u.findAllMatches,location:c=u.location,threshold:a=u.threshold,distance:h=u.distance}={}){this.query=null,this.options={isCaseSensitive:s,includeMatches:n,minMatchCharLength:r,findAllMatches:o,ignoreLocation:i,location:c,threshold:a,distance:h},this.pattern=s?e:e.toLowerCase(),this.query=qe(this.pattern,this.options)}static condition(e,s){return s.useExtendedSearch}searchIn(e){const s=this.query;if(!s)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;e=r?e:e.toLowerCase();let i=0,o=[],c=0;for(let a=0,h=s.length;a<h;a+=1){const l=s[a];o.length=0,i=0;for(let f=0,d=l.length;f<d;f+=1){const p=l[f],{isMatch:g,indices:x,score:L}=p.search(e);if(g){if(i+=1,c+=L,n){const E=p.constructor.type;et.has(E)?o=[...o,...x]:o.push(x)}}else{c=0,i=0,o.length=0;break}}if(i){let f={isMatch:!0,score:c/i};return n&&(f.indices=o),f}}return{isMatch:!1,score:1}}}const H=[];function st(...t){H.push(...t)}function Y(t,e){for(let s=0,n=H.length;s<n;s+=1){let r=H[s];if(r.condition(t,e))return new r(t,e)}return new pe(t,e)}const B={AND:"$and",OR:"$or"},G={PATH:"$path",PATTERN:"$val"},U=t=>!!(t[B.AND]||t[B.OR]),nt=t=>!!t[G.PATH],rt=t=>!_(t)&&le(t)&&!U(t),ne=t=>({[B.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function xe(t,e,{auto:s=!0}={}){const n=r=>{let i=Object.keys(r);const o=nt(r);if(!o&&i.length>1&&!U(r))return n(ne(r));if(rt(r)){const a=o?r[G.PATH]:i[0],h=o?r[G.PATTERN]:r[a];if(!I(h))throw new Error(Re(a));const l={keyId:D(a),pattern:h};return s&&(l.searcher=Y(h,e)),l}let c={children:[],operator:i[0]};return i.forEach(a=>{const h=r[a];_(h)&&h.forEach(l=>{c.children.push(n(l))})}),c};return U(t)||(t=ne(t)),n(t)}function it(t,{ignoreFieldNorm:e=u.ignoreFieldNorm}){t.forEach(s=>{let n=1;s.matches.forEach(({key:r,norm:i,score:o})=>{const c=r?r.weight:null;n*=Math.pow(o===0&&c?Number.EPSILON:o,(c||1)*(e?1:i))}),s.score=n})}function ot(t,e){const s=t.matches;e.matches=[],m(s)&&s.forEach(n=>{if(!m(n.indices)||!n.indices.length)return;const{indices:r,value:i}=n;let o={indices:r,value:i};n.key&&(o.key=n.key.src),n.idx>-1&&(o.refIndex=n.idx),e.matches.push(o)})}function ct(t,e){e.score=t.score}function at(t,e,{includeMatches:s=u.includeMatches,includeScore:n=u.includeScore}={}){const r=[];return s&&r.push(ot),n&&r.push(ct),t.map(i=>{const{idx:o}=i,c={item:e[o],refIndex:o};return r.length&&r.forEach(a=>{a(i,c)}),c})}class O{constructor(e,s={},n){this.options={...u,...s},this.options.useExtendedSearch,this._keyStore=new Ne(this.options.keys),this.setCollection(e,n)}setCollection(e,s){if(this._docs=e,s&&!(s instanceof Q))throw new Error(ke);this._myIndex=s||de(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){m(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const s=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];e(i,n)&&(this.removeAt(n),n-=1,r-=1,s.push(i))}return s}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:s=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:o,ignoreFieldNorm:c}=this.options;let a=I(e)?I(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return it(a,{ignoreFieldNorm:c}),i&&a.sort(o),he(s)&&s>-1&&(a=a.slice(0,s)),at(a,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(e){const s=Y(e,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:o,n:c})=>{if(!m(i))return;const{isMatch:a,score:h,indices:l}=s.searchIn(i);a&&r.push({item:i,idx:o,matches:[{score:h,value:i,norm:c,indices:l}]})}),r}_searchLogical(e){const s=xe(e,this.options),n=(c,a,h)=>{if(!c.children){const{keyId:f,searcher:d}=c,p=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(a,f),searcher:d});return p&&p.length?[{idx:h,item:a,matches:p}]:[]}const l=[];for(let f=0,d=c.children.length;f<d;f+=1){const p=c.children[f],g=n(p,a,h);if(g.length)l.push(...g);else if(c.operator===B.AND)return[]}return l},r=this._myIndex.records,i={},o=[];return r.forEach(({$:c,i:a})=>{if(m(c)){let h=n(s,c,a);h.length&&(i[a]||(i[a]={idx:a,item:c,matches:[]},o.push(i[a])),h.forEach(({matches:l})=>{i[a].matches.push(...l)}))}}),o}_searchObjectList(e){const s=Y(e,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:o,i:c})=>{if(!m(o))return;let a=[];n.forEach((h,l)=>{a.push(...this._findMatches({key:h,value:o[l],searcher:s}))}),a.length&&i.push({idx:c,item:o,matches:a})}),i}_findMatches({key:e,value:s,searcher:n}){if(!m(s))return[];let r=[];if(_(s))s.forEach(({v:i,i:o,n:c})=>{if(!m(i))return;const{isMatch:a,score:h,indices:l}=n.searchIn(i);a&&r.push({score:h,key:e,value:i,idx:o,norm:c,indices:l})});else{const{v:i,n:o}=s,{isMatch:c,score:a,indices:h}=n.searchIn(i);c&&r.push({score:a,key:e,value:i,norm:o,indices:h})}return r}}O.version="7.0.0";O.createIndex=de;O.parseIndex=Ve;O.config=u;O.parseQuery=xe;st(tt);const Jt={title:"Example/Icon",component:ce,parameters:{layout:"fullscreen",docs:{source:{transform:ye("Icon")}}},argTypes:{onClick:{action:"clicked"},onHover:{action:"hovered"},icon:{options:Object.keys(ae),control:{type:"select"}},size:{control:{type:"text"}},height:{control:{type:"text"}},width:{control:{type:"text"}}},tags:["autodocs"]},K=Object.keys(ae).map(t=>({name:t,icon:t})),F={render:t=>{const[e,s]=Z.useState(""),n=Z.useMemo(()=>{var o;if(!e)return K;const r={keys:["name"]};return((o=new O(K,r).search(e))==null?void 0:o.map(c=>c.item))??[]},[K,e]);return S.jsxs(N,{p:3,children:[S.jsxs(N,{display:"flex",alignItems:"center",mb:2,gap:1,children:[S.jsx(Ee,{placeholder:"Search Icons...",value:e,onChange:s}),e&&S.jsx(Ie,{onClick:()=>s(""),children:"Clear Search"})]}),S.jsx(N,{sx:{maxWidth:"800px",display:"flex",flexWrap:"wrap",gap:2},children:n==null?void 0:n.map(r=>r.icon?S.jsxs(N,{onClick:()=>console.log(r.name),sx:{width:"60px",mb:1,overflow:"hidden"},children:[S.jsx(N,{sx:{p:1,borderWidth:"1px",borderStyle:"solid",borderColor:"charcoal.10",borderRadius:"4px",minWidth:"60px",width:"fit-content",display:"flex",justifyContent:"center",alignItems:"center",mb:.5},children:S.jsx(ce,{...t,icon:r.icon})}),S.jsx(Se,{variant:"errorMessage",sx:{textAlign:"center",width:"100%",display:"block",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:r.name})]},r.name):null)})]})}};var re,ie,oe;F.parameters={...F.parameters,docs:{...(re=F.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => {
    const [searchValue, setSearchValue] = useState("");
    const filteredList = useMemo(() => {
      if (!searchValue) return iconList;
      const options = {
        keys: ["name"]
      };
      const fuse = new Fuse(iconList, options);
      return fuse.search(searchValue)?.map(result => result.item) ?? [];
    }, [iconList, searchValue]);
    return <Box p={3}>
        <Box display="flex" alignItems="center" mb={2} gap={1}>
          <Input placeholder="Search Icons..." value={searchValue} onChange={setSearchValue} />
          {searchValue && <Button onClick={() => setSearchValue("")}>Clear Search</Button>}
        </Box>
        <Box sx={{
        maxWidth: "800px",
        display: "flex",
        flexWrap: "wrap",
        gap: 2
      }}>
          {filteredList?.map(icon => {
          if (!icon.icon) return null;
          return <Box key={icon.name} onClick={() => console.log(icon.name)} sx={{
            width: "60px",
            mb: 1,
            overflow: "hidden"
          }}>
                <Box sx={{
              p: 1,
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "charcoal.10",
              borderRadius: "4px",
              minWidth: "60px",
              width: "fit-content",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 0.5
            }}>
                  <Icon {...args} icon={icon.icon} />
                </Box>
                <Typography variant="errorMessage" sx={{
              textAlign: "center",
              width: "100%",
              display: "block",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap"
            }}>
                  {icon.name}
                </Typography>
              </Box>;
        })}
        </Box>
      </Box>;
  }
}`,...(oe=(ie=F.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};const Zt=["Sample"];export{F as Sample,Zt as __namedExportsOrder,Jt as default};
