import{r as k,a as At,R as L}from"./vendor-DghaKJPf.js";import{A as W,m as y,u as Mt,a as Nt}from"./motion-DHZvFut0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();var Qr={exports:{}},Le={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ot=k,_t=Symbol.for("react.element"),Ft=Symbol.for("react.fragment"),Dt=Object.prototype.hasOwnProperty,Bt=Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lt={key:!0,ref:!0,__self:!0,__source:!0};function Kr(e,r,t){var i,n={},a=null,s=null;t!==void 0&&(a=""+t),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(s=r.ref);for(i in r)Dt.call(r,i)&&!Lt.hasOwnProperty(i)&&(n[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps,r)n[i]===void 0&&(n[i]=r[i]);return{$$typeof:_t,type:e,key:a,ref:s,props:n,_owner:Bt.current}}Le.Fragment=Ft;Le.jsx=Kr;Le.jsxs=Kr;Qr.exports=Le;var o=Qr.exports,cr={},Er=At;cr.createRoot=Er.createRoot,cr.hydrateRoot=Er.hydrateRoot;var F=function(){return F=Object.assign||function(r){for(var t,i=1,n=arguments.length;i<n;i++){t=arguments[i];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(r[a]=t[a])}return r},F.apply(this,arguments)};function ve(e,r,t){if(t||arguments.length===2)for(var i=0,n=r.length,a;i<n;i++)(a||!(i in r))&&(a||(a=Array.prototype.slice.call(r,0,i)),a[i]=r[i]);return e.concat(a||Array.prototype.slice.call(r))}var T="-ms-",xe="-moz-",$="-webkit-",Zr="comm",He="rule",kr="decl",Ht="@import",et="@keyframes",Wt="@layer",rt=Math.abs,Sr=String.fromCharCode,lr=Object.assign;function Yt(e,r){return _(e,0)^45?(((r<<2^_(e,0))<<2^_(e,1))<<2^_(e,2))<<2^_(e,3):0}function tt(e){return e.trim()}function q(e,r){return(e=r.exec(e))?e[0]:e}function v(e,r,t){return e.replace(r,t)}function Ee(e,r,t){return e.indexOf(r,t)}function _(e,r){return e.charCodeAt(r)|0}function ce(e,r,t){return e.slice(r,t)}function V(e){return e.length}function it(e){return e.length}function be(e,r){return r.push(e),e}function Gt(e,r){return e.map(r).join("")}function Pr(e,r){return e.filter(function(t){return!q(t,r)})}var We=1,le=1,ot=0,Y=0,A=0,pe="";function Ye(e,r,t,i,n,a,s,d){return{value:e,root:r,parent:t,type:i,props:n,children:a,line:We,column:le,length:s,return:"",siblings:d}}function K(e,r){return lr(Ye("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},r)}function ae(e){for(;e.root;)e=K(e.root,{children:[e]});be(e,e.siblings)}function Ut(){return A}function Vt(){return A=Y>0?_(pe,--Y):0,le--,A===10&&(le=1,We--),A}function G(){return A=Y<ot?_(pe,Y++):0,le++,A===10&&(le=1,We++),A}function te(){return _(pe,Y)}function Pe(){return Y}function Ge(e,r){return ce(pe,e,r)}function dr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Xt(e){return We=le=1,ot=V(pe=e),Y=0,[]}function qt(e){return pe="",e}function Ke(e){return tt(Ge(Y-1,mr(e===91?e+2:e===40?e+1:e)))}function Jt(e){for(;(A=te())&&A<33;)G();return dr(e)>2||dr(A)>3?"":" "}function Qt(e,r){for(;--r&&G()&&!(A<48||A>102||A>57&&A<65||A>70&&A<97););return Ge(e,Pe()+(r<6&&te()==32&&G()==32))}function mr(e){for(;G();)switch(A){case e:return Y;case 34:case 39:e!==34&&e!==39&&mr(A);break;case 40:e===41&&mr(e);break;case 92:G();break}return Y}function Kt(e,r){for(;G()&&e+A!==57;)if(e+A===84&&te()===47)break;return"/*"+Ge(r,Y-1)+"*"+Sr(e===47?e:G())}function Zt(e){for(;!dr(te());)G();return Ge(e,Y)}function ei(e){return qt(Ae("",null,null,null,[""],e=Xt(e),0,[0],e))}function Ae(e,r,t,i,n,a,s,d,l){for(var m=0,u=0,p=s,g=0,h=0,b=0,x=1,E=1,z=1,j=0,S="",C=n,R=a,I=i,w=S;E;)switch(b=j,j=G()){case 40:if(b!=108&&_(w,p-1)==58){Ee(w+=v(Ke(j),"&","&\f"),"&\f",rt(m?d[m-1]:0))!=-1&&(z=-1);break}case 34:case 39:case 91:w+=Ke(j);break;case 9:case 10:case 13:case 32:w+=Jt(b);break;case 92:w+=Qt(Pe()-1,7);continue;case 47:switch(te()){case 42:case 47:be(ri(Kt(G(),Pe()),r,t,l),l);break;default:w+="/"}break;case 123*x:d[m++]=V(w)*z;case 125*x:case 59:case 0:switch(j){case 0:case 125:E=0;case 59+u:z==-1&&(w=v(w,/\f/g,"")),h>0&&V(w)-p&&be(h>32?Mr(w+";",i,t,p-1,l):Mr(v(w," ","")+";",i,t,p-2,l),l);break;case 59:w+=";";default:if(be(I=Ar(w,r,t,m,u,n,d,S,C=[],R=[],p,a),a),j===123)if(u===0)Ae(w,r,I,I,C,a,p,d,R);else switch(g===99&&_(w,3)===110?100:g){case 100:case 108:case 109:case 115:Ae(e,I,I,i&&be(Ar(e,I,I,0,0,n,d,S,n,C=[],p,R),R),n,R,p,d,i?C:R);break;default:Ae(w,I,I,I,[""],R,0,d,R)}}m=u=h=0,x=z=1,S=w="",p=s;break;case 58:p=1+V(w),h=b;default:if(x<1){if(j==123)--x;else if(j==125&&x++==0&&Vt()==125)continue}switch(w+=Sr(j),j*x){case 38:z=u>0?1:(w+="\f",-1);break;case 44:d[m++]=(V(w)-1)*z,z=1;break;case 64:te()===45&&(w+=Ke(G())),g=te(),u=p=V(S=w+=Zt(Pe())),j++;break;case 45:b===45&&V(w)==2&&(x=0)}}return a}function Ar(e,r,t,i,n,a,s,d,l,m,u,p){for(var g=n-1,h=n===0?a:[""],b=it(h),x=0,E=0,z=0;x<i;++x)for(var j=0,S=ce(e,g+1,g=rt(E=s[x])),C=e;j<b;++j)(C=tt(E>0?h[j]+" "+S:v(S,/&\f/g,h[j])))&&(l[z++]=C);return Ye(e,r,t,n===0?He:d,l,m,u,p)}function ri(e,r,t,i){return Ye(e,r,t,Zr,Sr(Ut()),ce(e,2,-2),0,i)}function Mr(e,r,t,i,n){return Ye(e,r,t,kr,ce(e,0,i),ce(e,i+1,-1),i,n)}function nt(e,r,t){switch(Yt(e,r)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 4789:return xe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+xe+e+T+e+e;case 5936:switch(_(e,r+11)){case 114:return $+e+T+v(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+T+v(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+T+v(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return $+e+T+e+e;case 6165:return $+e+T+"flex-"+e+e;case 5187:return $+e+v(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+T+"flex-$1$2")+e;case 5443:return $+e+T+"flex-item-"+v(e,/flex-|-self/g,"")+(q(e,/flex-|baseline/)?"":T+"grid-row-"+v(e,/flex-|-self/g,""))+e;case 4675:return $+e+T+"flex-line-pack"+v(e,/align-content|flex-|-self/g,"")+e;case 5548:return $+e+T+v(e,"shrink","negative")+e;case 5292:return $+e+T+v(e,"basis","preferred-size")+e;case 6060:return $+"box-"+v(e,"-grow","")+$+e+T+v(e,"grow","positive")+e;case 4554:return $+v(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return v(v(v(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return v(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return v(v(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+T+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4200:if(!q(e,/flex-|baseline/))return T+"grid-column-align"+ce(e,r)+e;break;case 2592:case 3360:return T+v(e,"template-","")+e;case 4384:case 3616:return t&&t.some(function(i,n){return r=n,q(i.props,/grid-\w+-end/)})?~Ee(e+(t=t[r].value),"span",0)?e:T+v(e,"-start","")+e+T+"grid-row-span:"+(~Ee(t,"span",0)?q(t,/\d+/):+q(t,/\d+/)-+q(e,/\d+/))+";":T+v(e,"-start","")+e;case 4896:case 4128:return t&&t.some(function(i){return q(i.props,/grid-\w+-start/)})?e:T+v(v(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return v(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(V(e)-1-r>6)switch(_(e,r+1)){case 109:if(_(e,r+4)!==45)break;case 102:return v(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+xe+(_(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~Ee(e,"stretch",0)?nt(v(e,"stretch","fill-available"),r,t)+e:e}break;case 5152:case 5920:return v(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,n,a,s,d,l,m){return T+n+":"+a+m+(s?T+n+"-span:"+(d?l:+l-+a)+m:"")+e});case 4949:if(_(e,r+6)===121)return v(e,":",":"+$)+e;break;case 6444:switch(_(e,_(e,14)===45?18:11)){case 120:return v(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$+(_(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+T+"$2box$3")+e;case 100:return v(e,":",":"+T)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return v(e,"scroll-","scroll-snap-")+e}return e}function Oe(e,r){for(var t="",i=0;i<e.length;i++)t+=r(e[i],i,e,r)||"";return t}function ti(e,r,t,i){switch(e.type){case Wt:if(e.children.length)break;case Ht:case kr:return e.return=e.return||e.value;case Zr:return"";case et:return e.return=e.value+"{"+Oe(e.children,i)+"}";case He:if(!V(e.value=e.props.join(",")))return""}return V(t=Oe(e.children,i))?e.return=e.value+"{"+t+"}":""}function ii(e){var r=it(e);return function(t,i,n,a){for(var s="",d=0;d<r;d++)s+=e[d](t,i,n,a)||"";return s}}function oi(e){return function(r){r.root||(r=r.return)&&e(r)}}function ni(e,r,t,i){if(e.length>-1&&!e.return)switch(e.type){case kr:e.return=nt(e.value,e.length,t);return;case et:return Oe([K(e,{value:v(e.value,"@","@"+$)})],i);case He:if(e.length)return Gt(t=e.props,function(n){switch(q(n,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ae(K(e,{props:[v(n,/:(read-\w+)/,":"+xe+"$1")]})),ae(K(e,{props:[n]})),lr(e,{props:Pr(t,i)});break;case"::placeholder":ae(K(e,{props:[v(n,/:(plac\w+)/,":"+$+"input-$1")]})),ae(K(e,{props:[v(n,/:(plac\w+)/,":"+xe+"$1")]})),ae(K(e,{props:[v(n,/:(plac\w+)/,T+"input-$1")]})),ae(K(e,{props:[n]})),lr(e,{props:Pr(t,i)});break}return""})}}var ai={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},B={},de=typeof process<"u"&&B!==void 0&&(B.REACT_APP_SC_ATTR||B.SC_ATTR)||"data-styled",at="active",st="data-styled-version",Ue="6.1.19",jr=`/*!sc*/
`,_e=typeof window<"u"&&typeof document<"u",si=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&B!==void 0&&B.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&B.REACT_APP_SC_DISABLE_SPEEDY!==""?B.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&B.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&B!==void 0&&B.SC_DISABLE_SPEEDY!==void 0&&B.SC_DISABLE_SPEEDY!==""&&B.SC_DISABLE_SPEEDY!=="false"&&B.SC_DISABLE_SPEEDY),ci={},Ve=Object.freeze([]),me=Object.freeze({});function ct(e,r,t){return t===void 0&&(t=me),e.theme!==t.theme&&e.theme||r||t.theme}var lt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),li=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,di=/(^-|-$)/g;function Nr(e){return e.replace(li,"-").replace(di,"")}var mi=/(a)(d)/gi,Ce=52,Or=function(e){return String.fromCharCode(e+(e>25?39:97))};function pr(e){var r,t="";for(r=Math.abs(e);r>Ce;r=r/Ce|0)t=Or(r%Ce)+t;return(Or(r%Ce)+t).replace(mi,"$1-$2")}var Ze,dt=5381,se=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},mt=function(e){return se(dt,e)};function pt(e){return pr(mt(e)>>>0)}function pi(e){return e.displayName||e.name||"Component"}function er(e){return typeof e=="string"&&!0}var ut=typeof Symbol=="function"&&Symbol.for,ht=ut?Symbol.for("react.memo"):60115,ui=ut?Symbol.for("react.forward_ref"):60112,hi={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gi={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},gt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fi=((Ze={})[ui]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ze[ht]=gt,Ze);function _r(e){return("type"in(r=e)&&r.type.$$typeof)===ht?gt:"$$typeof"in e?fi[e.$$typeof]:hi;var r}var bi=Object.defineProperty,xi=Object.getOwnPropertyNames,Fr=Object.getOwnPropertySymbols,vi=Object.getOwnPropertyDescriptor,yi=Object.getPrototypeOf,Dr=Object.prototype;function ft(e,r,t){if(typeof r!="string"){if(Dr){var i=yi(r);i&&i!==Dr&&ft(e,i,t)}var n=xi(r);Fr&&(n=n.concat(Fr(r)));for(var a=_r(e),s=_r(r),d=0;d<n.length;++d){var l=n[d];if(!(l in gi||t&&t[l]||s&&l in s||a&&l in a)){var m=vi(r,l);try{bi(e,l,m)}catch{}}}}return e}function ie(e){return typeof e=="function"}function $r(e){return typeof e=="object"&&"styledComponentId"in e}function re(e,r){return e&&r?"".concat(e," ").concat(r):e||r||""}function ur(e,r){if(e.length===0)return"";for(var t=e[0],i=1;i<e.length;i++)t+=e[i];return t}function ye(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function hr(e,r,t){if(t===void 0&&(t=!1),!t&&!ye(e)&&!Array.isArray(e))return r;if(Array.isArray(r))for(var i=0;i<r.length;i++)e[i]=hr(e[i],r[i]);else if(ye(r))for(var i in r)e[i]=hr(e[i],r[i]);return e}function zr(e,r){Object.defineProperty(e,"toString",{value:r})}function oe(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var wi=function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return e.prototype.indexOfGroup=function(r){for(var t=0,i=0;i<r;i++)t+=this.groupSizes[i];return t},e.prototype.insertRules=function(r,t){if(r>=this.groupSizes.length){for(var i=this.groupSizes,n=i.length,a=n;r>=a;)if((a<<=1)<0)throw oe(16,"".concat(r));this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var s=n;s<a;s++)this.groupSizes[s]=0}for(var d=this.indexOfGroup(r+1),l=(s=0,t.length);s<l;s++)this.tag.insertRule(d,t[s])&&(this.groupSizes[r]++,d++)},e.prototype.clearGroup=function(r){if(r<this.length){var t=this.groupSizes[r],i=this.indexOfGroup(r),n=i+t;this.groupSizes[r]=0;for(var a=i;a<n;a++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(r){var t="";if(r>=this.length||this.groupSizes[r]===0)return t;for(var i=this.groupSizes[r],n=this.indexOfGroup(r),a=n+i,s=n;s<a;s++)t+="".concat(this.tag.getRule(s)).concat(jr);return t},e}(),Me=new Map,Fe=new Map,Ne=1,Ie=function(e){if(Me.has(e))return Me.get(e);for(;Fe.has(Ne);)Ne++;var r=Ne++;return Me.set(e,r),Fe.set(r,e),r},ki=function(e,r){Ne=r+1,Me.set(e,r),Fe.set(r,e)},Si="style[".concat(de,"][").concat(st,'="').concat(Ue,'"]'),ji=new RegExp("^".concat(de,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$i=function(e,r,t){for(var i,n=t.split(","),a=0,s=n.length;a<s;a++)(i=n[a])&&e.registerName(r,i)},zi=function(e,r){for(var t,i=((t=r.textContent)!==null&&t!==void 0?t:"").split(jr),n=[],a=0,s=i.length;a<s;a++){var d=i[a].trim();if(d){var l=d.match(ji);if(l){var m=0|parseInt(l[1],10),u=l[2];m!==0&&(ki(u,m),$i(e,u,l[3]),e.getTag().insertRules(m,n)),n.length=0}else n.push(d)}}},Br=function(e){for(var r=document.querySelectorAll(Si),t=0,i=r.length;t<i;t++){var n=r[t];n&&n.getAttribute(de)!==at&&(zi(e,n),n.parentNode&&n.parentNode.removeChild(n))}};function Ci(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var bt=function(e){var r=document.head,t=e||r,i=document.createElement("style"),n=function(d){var l=Array.from(d.querySelectorAll("style[".concat(de,"]")));return l[l.length-1]}(t),a=n!==void 0?n.nextSibling:null;i.setAttribute(de,at),i.setAttribute(st,Ue);var s=Ci();return s&&i.setAttribute("nonce",s),t.insertBefore(i,a),i},Ii=function(){function e(r){this.element=bt(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,n=0,a=i.length;n<a;n++){var s=i[n];if(s.ownerNode===t)return s}throw oe(17)}(this.element),this.length=0}return e.prototype.insertRule=function(r,t){try{return this.sheet.insertRule(t,r),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},e.prototype.getRule=function(r){var t=this.sheet.cssRules[r];return t&&t.cssText?t.cssText:""},e}(),Ri=function(){function e(r){this.element=bt(r),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(r,t){if(r<=this.length&&r>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[r]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},e.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e}(),Ti=function(){function e(r){this.rules=[],this.length=0}return e.prototype.insertRule=function(r,t){return r<=this.length&&(this.rules.splice(r,0,t),this.length++,!0)},e.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},e.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},e}(),Lr=_e,Ei={isServer:!_e,useCSSOMInjection:!si},De=function(){function e(r,t,i){r===void 0&&(r=me),t===void 0&&(t={});var n=this;this.options=F(F({},Ei),r),this.gs=t,this.names=new Map(i),this.server=!!r.isServer,!this.server&&_e&&Lr&&(Lr=!1,Br(this)),zr(this,function(){return function(a){for(var s=a.getTag(),d=s.length,l="",m=function(p){var g=function(z){return Fe.get(z)}(p);if(g===void 0)return"continue";var h=a.names.get(g),b=s.getGroup(p);if(h===void 0||!h.size||b.length===0)return"continue";var x="".concat(de,".g").concat(p,'[id="').concat(g,'"]'),E="";h!==void 0&&h.forEach(function(z){z.length>0&&(E+="".concat(z,","))}),l+="".concat(b).concat(x,'{content:"').concat(E,'"}').concat(jr)},u=0;u<d;u++)m(u);return l}(n)})}return e.registerId=function(r){return Ie(r)},e.prototype.rehydrate=function(){!this.server&&_e&&Br(this)},e.prototype.reconstructWithOptions=function(r,t){return t===void 0&&(t=!0),new e(F(F({},this.options),r),this.gs,t&&this.names||void 0)},e.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(r=function(t){var i=t.useCSSOMInjection,n=t.target;return t.isServer?new Ti(n):i?new Ii(n):new Ri(n)}(this.options),new wi(r)));var r},e.prototype.hasNameForId=function(r,t){return this.names.has(r)&&this.names.get(r).has(t)},e.prototype.registerName=function(r,t){if(Ie(r),this.names.has(r))this.names.get(r).add(t);else{var i=new Set;i.add(t),this.names.set(r,i)}},e.prototype.insertRules=function(r,t,i){this.registerName(r,t),this.getTag().insertRules(Ie(r),i)},e.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},e.prototype.clearRules=function(r){this.getTag().clearGroup(Ie(r)),this.clearNames(r)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Pi=/&/g,Ai=/^\s*\/\/.*$/gm;function xt(e,r){return e.map(function(t){return t.type==="rule"&&(t.value="".concat(r," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(r," ")),t.props=t.props.map(function(i){return"".concat(r," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=xt(t.children,r)),t})}function Mi(e){var r,t,i,n=me,a=n.options,s=a===void 0?me:a,d=n.plugins,l=d===void 0?Ve:d,m=function(g,h,b){return b.startsWith(t)&&b.endsWith(t)&&b.replaceAll(t,"").length>0?".".concat(r):g},u=l.slice();u.push(function(g){g.type===He&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Pi,t).replace(i,m))}),s.prefix&&u.push(ni),u.push(ti);var p=function(g,h,b,x){h===void 0&&(h=""),b===void 0&&(b=""),x===void 0&&(x="&"),r=x,t=h,i=new RegExp("\\".concat(t,"\\b"),"g");var E=g.replace(Ai,""),z=ei(b||h?"".concat(b," ").concat(h," { ").concat(E," }"):E);s.namespace&&(z=xt(z,s.namespace));var j=[];return Oe(z,ii(u.concat(oi(function(S){return j.push(S)})))),j};return p.hash=l.length?l.reduce(function(g,h){return h.name||oe(15),se(g,h.name)},dt).toString():"",p}var Ni=new De,gr=Mi(),vt=L.createContext({shouldForwardProp:void 0,styleSheet:Ni,stylis:gr});vt.Consumer;L.createContext(void 0);function fr(){return k.useContext(vt)}var Oi=function(){function e(r,t){var i=this;this.inject=function(n,a){a===void 0&&(a=gr);var s=i.name+a.hash;n.hasNameForId(i.id,s)||n.insertRules(i.id,s,a(i.rules,s,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=t,zr(this,function(){throw oe(12,String(i.name))})}return e.prototype.getName=function(r){return r===void 0&&(r=gr),this.name+r.hash},e}(),_i=function(e){return e>="A"&&e<="Z"};function Hr(e){for(var r="",t=0;t<e.length;t++){var i=e[t];if(t===1&&i==="-"&&e[0]==="-")return e;_i(i)?r+="-"+i.toLowerCase():r+=i}return r.startsWith("ms-")?"-"+r:r}var yt=function(e){return e==null||e===!1||e===""},wt=function(e){var r,t,i=[];for(var n in e){var a=e[n];e.hasOwnProperty(n)&&!yt(a)&&(Array.isArray(a)&&a.isCss||ie(a)?i.push("".concat(Hr(n),":"),a,";"):ye(a)?i.push.apply(i,ve(ve(["".concat(n," {")],wt(a),!1),["}"],!1)):i.push("".concat(Hr(n),": ").concat((r=n,(t=a)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||r in ai||r.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function Z(e,r,t,i){if(yt(e))return[];if($r(e))return[".".concat(e.styledComponentId)];if(ie(e)){if(!ie(a=e)||a.prototype&&a.prototype.isReactComponent||!r)return[e];var n=e(r);return Z(n,r,t,i)}var a;return e instanceof Oi?t?(e.inject(t,i),[e.getName(i)]):[e]:ye(e)?wt(e):Array.isArray(e)?Array.prototype.concat.apply(Ve,e.map(function(s){return Z(s,r,t,i)})):[e.toString()]}function kt(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(ie(t)&&!$r(t))return!1}return!0}var Fi=mt(Ue),Di=function(){function e(r,t,i){this.rules=r,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&kt(r),this.componentId=t,this.baseHash=se(Fi,t),this.baseStyle=i,De.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,i){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=re(n,this.staticRulesId);else{var a=ur(Z(this.rules,r,t,i)),s=pr(se(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,s)){var d=i(a,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,d)}n=re(n,s),this.staticRulesId=s}else{for(var l=se(this.baseHash,i.hash),m="",u=0;u<this.rules.length;u++){var p=this.rules[u];if(typeof p=="string")m+=p;else if(p){var g=ur(Z(p,r,t,i));l=se(l,g+u),m+=g}}if(m){var h=pr(l>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,i(m,".".concat(h),void 0,this.componentId)),n=re(n,h)}}return n},e}(),we=L.createContext(void 0);we.Consumer;function St(e){var r=L.useContext(we),t=k.useMemo(function(){return function(i,n){if(!i)throw oe(14);if(ie(i)){var a=i(n);return a}if(Array.isArray(i)||typeof i!="object")throw oe(8);return n?F(F({},n),i):i}(e.theme,r)},[e.theme,r]);return e.children?L.createElement(we.Provider,{value:t},e.children):null}var rr={};function Bi(e,r,t){var i=$r(e),n=e,a=!er(e),s=r.attrs,d=s===void 0?Ve:s,l=r.componentId,m=l===void 0?function(C,R){var I=typeof C!="string"?"sc":Nr(C);rr[I]=(rr[I]||0)+1;var w="".concat(I,"-").concat(pt(Ue+I+rr[I]));return R?"".concat(R,"-").concat(w):w}(r.displayName,r.parentComponentId):l,u=r.displayName,p=u===void 0?function(C){return er(C)?"styled.".concat(C):"Styled(".concat(pi(C),")")}(e):u,g=r.displayName&&r.componentId?"".concat(Nr(r.displayName),"-").concat(r.componentId):r.componentId||m,h=i&&n.attrs?n.attrs.concat(d).filter(Boolean):d,b=r.shouldForwardProp;if(i&&n.shouldForwardProp){var x=n.shouldForwardProp;if(r.shouldForwardProp){var E=r.shouldForwardProp;b=function(C,R){return x(C,R)&&E(C,R)}}else b=x}var z=new Di(t,g,i?n.componentStyle:void 0);function j(C,R){return function(I,w,ne){var ke=I.attrs,zt=I.componentStyle,Ct=I.defaultProps,It=I.foldedComponentIds,Rt=I.styledComponentId,Tt=I.target,Et=L.useContext(we),Pt=fr(),qe=I.shouldForwardProp||Pt.shouldForwardProp,Rr=ct(w,Et,Ct)||me,X=function(je,ge,$e){for(var fe,ee=F(F({},ge),{className:void 0,theme:$e}),Qe=0;Qe<je.length;Qe+=1){var ze=ie(fe=je[Qe])?fe(ee):fe;for(var Q in ze)ee[Q]=Q==="className"?re(ee[Q],ze[Q]):Q==="style"?F(F({},ee[Q]),ze[Q]):ze[Q]}return ge.className&&(ee.className=re(ee.className,ge.className)),ee}(ke,w,Rr),Se=X.as||Tt,he={};for(var J in X)X[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&X.theme===Rr||(J==="forwardedAs"?he.as=X.forwardedAs:qe&&!qe(J,Se)||(he[J]=X[J]));var Tr=function(je,ge){var $e=fr(),fe=je.generateAndInjectStyles(ge,$e.styleSheet,$e.stylis);return fe}(zt,X),Je=re(It,Rt);return Tr&&(Je+=" "+Tr),X.className&&(Je+=" "+X.className),he[er(Se)&&!lt.has(Se)?"class":"className"]=Je,ne&&(he.ref=ne),k.createElement(Se,he)}(S,C,R)}j.displayName=p;var S=L.forwardRef(j);return S.attrs=h,S.componentStyle=z,S.displayName=p,S.shouldForwardProp=b,S.foldedComponentIds=i?re(n.foldedComponentIds,n.styledComponentId):"",S.styledComponentId=g,S.target=i?n.target:e,Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=i?function(R){for(var I=[],w=1;w<arguments.length;w++)I[w-1]=arguments[w];for(var ne=0,ke=I;ne<ke.length;ne++)hr(R,ke[ne],!0);return R}({},n.defaultProps,C):C}}),zr(S,function(){return".".concat(S.styledComponentId)}),a&&ft(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}function Wr(e,r){for(var t=[e[0]],i=0,n=r.length;i<n;i+=1)t.push(r[i],e[i+1]);return t}var Yr=function(e){return Object.assign(e,{isCss:!0})};function N(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];if(ie(e)||ye(e))return Yr(Z(Wr(Ve,ve([e],r,!0))));var i=e;return r.length===0&&i.length===1&&typeof i[0]=="string"?Z(i):Yr(Z(Wr(i,r)))}function br(e,r,t){if(t===void 0&&(t=me),!r)throw oe(1,r);var i=function(n){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(r,t,N.apply(void 0,ve([n],a,!1)))};return i.attrs=function(n){return br(e,r,F(F({},t),{attrs:Array.prototype.concat(t.attrs,n).filter(Boolean)}))},i.withConfig=function(n){return br(e,r,F(F({},t),n))},i}var jt=function(e){return br(Bi,e)},c=jt;lt.forEach(function(e){c[e]=jt(e)});var Li=function(){function e(r,t){this.rules=r,this.componentId=t,this.isStatic=kt(r),De.registerId(this.componentId+1)}return e.prototype.createStyles=function(r,t,i,n){var a=n(ur(Z(this.rules,t,i,n)),""),s=this.componentId+r;i.insertRules(s,s,a)},e.prototype.removeStyles=function(r,t){t.clearRules(this.componentId+r)},e.prototype.renderStyles=function(r,t,i,n){r>2&&De.registerId(this.componentId+r),this.removeStyles(r,i),this.createStyles(r,t,i,n)},e}();function Hi(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];var i=N.apply(void 0,ve([e],r,!1)),n="sc-global-".concat(pt(JSON.stringify(i))),a=new Li(i,n),s=function(l){var m=fr(),u=L.useContext(we),p=L.useRef(m.styleSheet.allocateGSInstance(n)).current;return m.styleSheet.server&&d(p,l,m.styleSheet,u,m.stylis),L.useLayoutEffect(function(){if(!m.styleSheet.server)return d(p,l,m.styleSheet,u,m.stylis),function(){return a.removeStyles(p,m.styleSheet)}},[p,l,m.styleSheet,u,m.stylis]),null};function d(l,m,u,p,g){if(a.isStatic)a.renderStyles(l,ci,u,g);else{var h=F(F({},m),{theme:ct(m,p,s.defaultProps)});a.renderStyles(l,h,u,g)}}return L.memo(s)}var xr=new Map,Re=new WeakMap,Gr=0,Wi=void 0;function Yi(e){return e?(Re.has(e)||(Gr+=1,Re.set(e,Gr.toString())),Re.get(e)):"0"}function Gi(e){return Object.keys(e).sort().filter(r=>e[r]!==void 0).map(r=>`${r}_${r==="root"?Yi(e.root):e[r]}`).toString()}function Ui(e){const r=Gi(e);let t=xr.get(r);if(!t){const i=new Map;let n;const a=new IntersectionObserver(s=>{s.forEach(d=>{var l;const m=d.isIntersecting&&n.some(u=>d.intersectionRatio>=u);e.trackVisibility&&typeof d.isVisible>"u"&&(d.isVisible=m),(l=i.get(d.target))==null||l.forEach(u=>{u(m,d)})})},e);n=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),t={id:r,observer:a,elements:i},xr.set(r,t)}return t}function Vi(e,r,t={},i=Wi){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const l=e.getBoundingClientRect();return r(i,{isIntersecting:i,target:e,intersectionRatio:typeof t.threshold=="number"?t.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:n,observer:a,elements:s}=Ui(t),d=s.get(e)||[];return s.has(e)||s.set(e,d),d.push(r),a.observe(e),function(){d.splice(d.indexOf(r),1),d.length===0&&(s.delete(e),a.unobserve(e)),s.size===0&&(a.disconnect(),xr.delete(n))}}function ue({threshold:e,delay:r,trackVisibility:t,rootMargin:i,root:n,triggerOnce:a,skip:s,initialInView:d,fallbackInView:l,onChange:m}={}){var u;const[p,g]=k.useState(null),h=k.useRef(m),[b,x]=k.useState({inView:!!d,entry:void 0});h.current=m,k.useEffect(()=>{if(s||!p)return;let S;return S=Vi(p,(C,R)=>{x({inView:C,entry:R}),h.current&&h.current(C,R),R.isIntersecting&&a&&S&&(S(),S=void 0)},{root:n,rootMargin:i,threshold:e,trackVisibility:t,delay:r},l),()=>{S&&S()}},[Array.isArray(e)?e.toString():e,p,n,i,a,s,t,l,r]);const E=(u=b.entry)==null?void 0:u.target,z=k.useRef(void 0);!p&&E&&!a&&!s&&z.current!==E&&(z.current=E,x({inView:!!d,entry:void 0}));const j=[g,b.inView,b.entry];return j.ref=j[0],j.inView=j[1],j.entry=j[2],j}const P={name:"Your Name",title:"Full Stack Developer",email:"hello@example.com",phone:"+1 (555) 123-4567",location:"San Francisco, CA",social:{github:"https://github.com/yourusername",linkedin:"https://linkedin.com/in/yourusername",twitter:"https://twitter.com/yourusername"},about:{paragraphs:[`Hello! I'm a Full Stack Developer with a passion for creating innovative web solutions that make a difference.
      My journey in web development began 4 years ago, and since then, I've had the opportunity to work on diverse projects
      ranging from e-commerce platforms to real-time collaborative applications.`,`I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have extensive experience with modern JavaScript,
      TypeScript, and responsive design. I believe in writing clean, maintainable code and following best practices in software development.`,`When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge
      through technical blog posts. I'm always eager to take on new challenges and work with teams that are passionate about building
      impactful products.`,`I'm currently open to full-time opportunities where I can contribute my skills and continue growing as a developer.
      If you're looking for someone who combines technical expertise with a creative mindset, I'd love to connect!`]},hero:{greeting:"Hello, I'm",name:"Your Name",title:"Full Stack Developer",subtitle:"Turning Ideas into Interactive Digital Experiences",cta:{primary:{text:"View My Projects"},secondary:{text:"Contact Me"}}},skillsHighlight:["React & Next.js","Node.js & Express","MongoDB & PostgreSQL","TypeScript & JavaScript","REST APIs & GraphQL","Responsive Design"]},O={hidden:{opacity:0,y:50,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{duration:.6,ease:[.25,.1,.25,1]}}},Cr={hidden:{opacity:0,x:-50,scale:.95},visible:{opacity:1,x:0,scale:1,transition:{duration:.8,ease:[.25,.1,.25,1]}}},Ir={hidden:{opacity:0,x:50,scale:.95},visible:{opacity:1,x:0,scale:1,transition:{duration:.8,ease:[.25,.1,.25,1]}}},$t={hidden:{opacity:0,y:100},visible:{opacity:1,y:0,transition:{duration:.7,ease:[.25,.1,.25,1]}}},Xi={hidden:{opacity:0,y:-100},visible:{opacity:1,y:0,transition:{duration:.7,ease:[.25,.1,.25,1]}}},Be={hidden:{},visible:{transition:{staggerChildren:.1}}},Ur={whileHover:{scale:1.05,y:-2,transition:{duration:.2,ease:[.25,.1,.25,1]}},whileTap:{scale:.95,transition:{duration:.1}}},qi=()=>{if(typeof window<"u"){const e=localStorage.getItem("theme");if(e)return e;if(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return"light"},tr=e=>{typeof document<"u"&&(document.body.setAttribute("data-theme",e),localStorage.setItem("theme",e))},vr=(e,r=0)=>{if(typeof document<"u"){const t=document.getElementById(e);if(t){const n=t.getBoundingClientRect().top+window.pageYOffset-r;window.scrollTo({top:n,behavior:"smooth"})}}},Ji=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),ir=(e,r,t=!1)=>{const i={};if(t&&!r.trim())return i[e]=`${e} is required`,i;switch(e){case"email":r&&!Ji(r)&&(i[e]="Please enter a valid email address");break;case"name":r&&r.trim().length<2&&(i[e]="Name must be at least 2 characters long");break;case"message":r&&r.trim().length<10&&(i[e]="Message must be at least 10 characters long");break}return i},Qi=()=>typeof window>"u"?!1:"ontouchstart"in window||navigator.maxTouchPoints>0,Vr={light:{hero:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",background:"linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",card:"linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",accent:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",skills:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",about:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",contact:"linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",overlay:"linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)"},dark:{hero:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",background:"linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",card:"linear-gradient(135deg, #2d3748 0%, #1a202c 100%)",accent:"linear-gradient(135deg, #9f7aea 0%, #b794f4 100%)",skills:"linear-gradient(135deg, #805ad5 0%, #d53f8c 100%)",about:"linear-gradient(135deg, #3182ce 0%, #38b2ac 100%)",contact:"linear-gradient(135deg, #38a169 0%, #48bb78 100%)",overlay:"linear-gradient(135deg, rgba(159, 122, 234, 0.1) 0%, rgba(183, 148, 244, 0.1) 100%)"}},M=(e,r)=>Vr[e]?.[r]||Vr.light[r],or={subtleShift:`
    @keyframes gradientShift {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
  `,waveMove:`
    @keyframes waveMove {
      0% { background-position: 0% 0%; }
      100% { background-position: 100% 100%; }
    }
  `,pulse:`
    @keyframes gradientPulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.8; }
    }
  `},f={mobile:"768px",tablet:"1024px"},H={fast:"0.2s ease",medium:"0.3s ease"},D={small:"0 2px 8px rgba(0, 0, 0, 0.1)",medium:"0 4px 16px rgba(0, 0, 0, 0.15)",large:"0 8px 32px rgba(0, 0, 0, 0.2)",card:"0 8px 32px rgba(0, 0, 0, 0.1)",cardHover:"0 16px 48px rgba(0, 0, 0, 0.2)"},Xe={medium:"12px",large:"16px",full:"50%"},Ki=c.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
  background: ${({theme:e})=>M(e.mode,"hero")};
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({theme:e})=>M(e.mode,"overlay")};
    z-index: 1;
  }

  @media (max-width: ${f.mobile}) {
    padding: 1rem;
  }
`,Zi=c.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`,eo=c(motion.p)`
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: ${({theme:e})=>e.mode==="dark"?"rgba(247, 250, 252, 0.9)":"rgba(255, 255, 255, 0.9)"};
  margin-bottom: 0.5rem;
  font-weight: 300;
  letter-spacing: 0.05em;
`,ro=c(motion.h1)`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  margin: 0.5rem 0;
  background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  line-height: 1.1;

  @media (max-width: ${f.mobile}) {
    font-size: clamp(2.5rem, 10vw, 3.5rem);
  }
`,to=c(motion.h2)`
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: 600;
  margin: 1rem 0;
  color: ${({theme:e})=>e.mode==="dark"?"rgba(159, 122, 234, 0.9)":"rgba(255, 255, 255, 0.9)"};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: ${f.mobile}) {
    font-size: clamp(1.25rem, 6vw, 1.75rem);
  }
`,io=c(motion.p)`
  font-size: clamp(1rem, 3vw, 1.25rem);
  color: ${({theme:e})=>e.mode==="dark"?"rgba(226, 232, 240, 0.9)":"rgba(255, 255, 255, 0.85)"};
  margin: 1.5rem auto;
  max-width: 600px;
  line-height: 1.6;
  font-weight: 400;

  @media (max-width: ${f.mobile}) {
    font-size: clamp(0.95rem, 4vw, 1.1rem);
    margin: 1rem auto;
  }
`,oo=c(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  flex-wrap: wrap;

  @media (max-width: ${f.mobile}) {
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 2rem;
  }
`,Xr=c(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: ${H.medium};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;

  ${e=>e.primary?N`
    background: rgba(255, 255, 255, 0.95);
    color: #667eea;
    box-shadow: ${D.card};

    &:hover {
      background: rgba(255, 255, 255, 1);
      transform: translateY(-2px);
      box-shadow: ${D.cardHover};
    }
  `:N`
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 1);
      transform: translateY(-2px);
    }
  `}

  &:active {
    transform: translateY(0);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover::before {
    width: 300px;
    height: 300px;
  }

  @media (max-width: ${f.mobile}) {
    width: 100%;
    max-width: 280px;
    padding: 0.9rem 1.5rem;
    font-size: 1rem;
  }
`,no=c.span`
  display: inline-block;
  border-right: 3px solid currentColor;
  animation: blink 1s infinite;

  @keyframes blink {
    0%, 50% { border-color: currentColor; }
    51%, 100% { border-color: transparent; }
  }
`,ao=c(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2.5rem;
  max-width: 800px;

  @media (max-width: ${f.mobile}) {
    margin-top: 2rem;
    gap: 0.4rem;
  }
`,so=c(motion.span)`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;

  @media (max-width: ${f.mobile}) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`,co=c(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  cursor: pointer;
  z-index: 2;

  @media (max-width: ${f.mobile}) {
    bottom: 1rem;
    font-size: 0.8rem;
  }
`,lo=c(motion.div)`
  width: 30px;
  height: 50px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 25px;
  position: relative;
  display: flex;
  justify-content: center;

  &::before {
    content: '';
    width: 4px;
    height: 10px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 2px;
    position: absolute;
    top: 8px;
    animation: scroll 2s infinite;
  }

  @keyframes scroll {
    0% { top: 8px; opacity: 1; }
    100% { top: 20px; opacity: 0; }
  }
`,mo=c(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`,po=c(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  ${e=>e.size==="large"&&N`
    width: 200px;
    height: 200px;
  `}

  ${e=>e.size==="medium"&&N`
    width: 100px;
    height: 100px;
  `}

  ${e=>e.size==="small"&&N`
    width: 50px;
    height: 50px;
  `}

  ${e=>e.position==="top-left"&&N`
    top: 10%;
    left: 10%;
  `}

  ${e=>e.position==="top-right"&&N`
    top: 20%;
    right: 15%;
  `}

  ${e=>e.position==="bottom-left"&&N`
    bottom: 20%;
    left: 5%;
  `}

  ${e=>e.position==="bottom-right"&&N`
    bottom: 30%;
    right: 10%;
  `}

  @media (max-width: ${f.mobile}) {
    ${e=>e.size==="large"&&N`
      width: 100px;
      height: 100px;
    `}

    ${e=>e.size==="medium"&&N`
      width: 60px;
      height: 60px;
    `}

    ${e=>e.size==="small"&&N`
      width: 30px;
      height: 30px;
    `}
  }
`,uo=({text:e,speed:r=100})=>{const[t,i]=k.useState(""),[n,a]=k.useState(0);return k.useEffect(()=>{if(n<e.length){const s=setTimeout(()=>{i(d=>d+e[n]),a(d=>d+1)},r);return()=>clearTimeout(s)}},[n,e,r]),o.jsx(no,{children:t})},ho=()=>{const e=[{size:"large",position:"top-left"},{size:"medium",position:"top-right"},{size:"small",position:"bottom-left"},{size:"medium",position:"bottom-right"},{size:"small",position:"top-left"}];return o.jsx(mo,{children:e.map((r,t)=>o.jsx(po,{size:r.size,position:r.position,initial:{opacity:0,scale:0},animate:{opacity:[0,.6,.6,.6],scale:[0,1,1,.8],y:[0,-20,0,-10],x:[0,10,0,-5]},transition:{duration:8+t*2,ease:"easeInOut",repeat:1/0,delay:t*.5}},t))})},go=()=>{const[e,r]=ue({triggerOnce:!0,threshold:.1}),[t,i]=k.useState(!1);k.useEffect(()=>{const s=setTimeout(()=>{i(!0)},1200);return()=>clearTimeout(s)},[]);const n=()=>{vr("projects",80)},a=()=>{vr("contact",80)};return o.jsxs(Ki,{id:"hero",ref:e,children:[o.jsx(ho,{}),o.jsx(Zi,{children:o.jsx(W,{children:r&&o.jsxs(o.Fragment,{children:[o.jsx(eo,{initial:"hidden",animate:"visible",variants:Cr,transition:{duration:.8},children:P.hero.greeting}),o.jsx(ro,{initial:"hidden",animate:"visible",variants:Xi,transition:{duration:1,delay:.2},children:P.hero.name}),o.jsx(to,{initial:"hidden",animate:"visible",variants:Ir,transition:{duration:.8,delay:.4},children:P.hero.title}),t&&o.jsx(io,{initial:"hidden",animate:"visible",variants:O,transition:{duration:.6,delay:.2},children:o.jsx(uo,{text:P.hero.subtitle,speed:50})}),o.jsxs(oo,{initial:"hidden",animate:"visible",variants:Be,transition:{delay:1.5},children:[o.jsxs(Xr,{variants:Ur,primary:!0,onClick:n,whileHover:{scale:1.05},whileTap:{scale:.95},children:[P.hero.cta.primary.text,o.jsx("span",{children:"→"})]}),o.jsxs(Xr,{variants:Ur,onClick:a,whileHover:{scale:1.05},whileTap:{scale:.95},children:[P.hero.cta.secondary.text,o.jsx("span",{children:"✉️"})]})]}),o.jsx(ao,{initial:"hidden",animate:"visible",variants:Be,transition:{delay:2},children:P.skillsHighlight.map((s,d)=>o.jsx(so,{variants:{hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.4,delay:d*.1}}},whileHover:{scale:1.1,y:-2},whileTap:{scale:.95},children:s},d))})]})})}),o.jsxs(co,{initial:"hidden",animate:"visible",variants:O,transition:{duration:.8,delay:2.5},onClick:n,children:[o.jsx("span",{children:"Scroll to explore"}),o.jsx(lo,{animate:{y:[0,10,0]},transition:{duration:2,repeat:1/0,ease:"easeInOut"}})]})]})},yr=[{id:"ecommerce-platform",title:"E-Commerce Platform",description:"Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",techStack:["React","Node.js","MongoDB","Express","Stripe API","JWT"],demoUrl:"https://demo-ecommerce.example.com",githubUrl:"https://github.com/username/ecommerce-platform",category:"full-stack",featured:!0,image:"/images/ecommerce-screenshot.jpg",achievements:["Built responsive design achieving 95+ Lighthouse score","Implemented real-time inventory updates","Integrated secure payment processing with Stripe"]},{id:"task-management-app",title:"Task Management Application",description:"Collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.",techStack:["React","TypeScript","Firebase","Material-UI","Redux"],demoUrl:"https://task-manager.example.com",githubUrl:"https://github.com/username/task-management",category:"frontend",featured:!0,image:"/images/task-manager-screenshot.jpg",achievements:["Real-time collaboration using WebSockets","Drag-and-drop interface for task organization","Offline functionality with data synchronization"]},{id:"weather-dashboard",title:"Weather Analytics Dashboard",description:"Interactive weather dashboard with data visualization, forecasting, and location-based weather alerts.",techStack:["Vue.js","Chart.js","OpenWeather API","Express","PostgreSQL"],demoUrl:"https://weather-dashboard.example.com",githubUrl:"https://github.com/username/weather-dashboard",category:"frontend",featured:!1,image:"/images/weather-dashboard-screenshot.jpg",achievements:["Interactive charts and weather maps","Location-based notifications","Historical weather data analysis"]},{id:"social-media-api",title:"Social Media Backend API",description:"RESTful API for social media platform with authentication, real-time messaging, and data analytics.",techStack:["Node.js","Express","MongoDB","Socket.io","Redis","JWT"],demoUrl:"https://api-docs.example.com",githubUrl:"https://github.com/username/social-media-api",category:"backend",featured:!1,image:"/images/api-documentation.jpg",achievements:["Built scalable REST API architecture","Implemented real-time messaging system","Added comprehensive API documentation"]},{id:"portfolio-website",title:"Portfolio Website",description:"Modern, animated portfolio website showcasing projects and skills with interactive 3D effects and smooth animations.",techStack:["React","Framer Motion","Styled Components","Vite"],demoUrl:"https://portfolio.example.com",githubUrl:"https://github.com/username/portfolio",category:"frontend",featured:!0,image:"/images/portfolio-screenshot.jpg",achievements:["60fps animations optimized for performance","Responsive design with mobile-first approach","Accessibility features and keyboard navigation"]},{id:"blog-cms",title:"Headless Blog CMS",description:"Content management system for blogs with markdown support, SEO optimization, and RESTful API.",techStack:["Next.js","TypeScript","Prisma","PostgreSQL","Tailwind CSS"],demoUrl:"https://blog-cms.example.com",githubUrl:"https://github.com/username/blog-cms",category:"full-stack",featured:!1,image:"/images/blog-cms-screenshot.jpg",achievements:["Markdown-based content creation","SEO-optimized pages and meta tags","Admin dashboard with rich text editor"]}],fo=[{id:"all",name:"All Projects",icon:"🎯"},{id:"frontend",name:"Frontend",icon:"🎨"},{id:"backend",name:"Backend",icon:"⚙️"},{id:"full-stack",name:"Full Stack",icon:"🚀"}];yr.filter(e=>e.featured);c.button`
  padding: ${e=>e.size==="large"?"1rem 2rem":e.size==="small"?"0.5rem 1rem":"0.75rem 1.5rem"};
  font-size: ${e=>e.size==="large"?"1.1rem":e.size==="small"?"0.9rem":"1rem"};
  font-weight: 600;
  border: none;
  border-radius: ${e=>e.round?"50px":Xe.medium};
  cursor: pointer;
  transition: ${H.medium};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  background: ${e=>e.variant==="primary"?"var(--color-primary)":e.variant==="secondary"?"var(--color-secondary)":e.variant==="outline"||e.variant==="ghost"?"transparent":"var(--color-primary)"};
  color: ${e=>e.variant==="outline"||e.variant==="ghost"?"var(--color-primary)":"white"};
  border: ${e=>e.variant==="outline"?"2px solid var(--color-primary)":"none"};
  box-shadow: ${e=>e.elevated?D.medium:"none"};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${e=>e.elevated?D.large:e.variant==="primary"||e.variant==="secondary"?D.cardHover:D.small};
    background: ${e=>e.variant==="primary"?"var(--color-secondary)":e.variant==="ghost"||e.variant==="outline"?"var(--color-primary)":"var(--color-secondary)"};
    color: ${e=>e.variant==="outline"?"white":"inherit"};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover::before {
    width: 300px;
    height: 300px;
  }

  @media (max-width: ${f.mobile}) {
    padding: ${e=>e.size==="large"?"0.9rem 1.5rem":e.size==="small"?"0.4rem 0.8rem":"0.6rem 1.2rem"};
    font-size: ${e=>e.size==="large"?"1rem":e.size==="small"?"0.8rem":"0.9rem"};
  }
`;c.div`
  max-width: ${e=>e.maxWidth||"1200px"};
  margin: 0 auto;
  padding: 0 ${e=>e.padding||"2rem"};
  width: 100%;

  @media (max-width: ${f.mobile}) {
    padding: 0 ${e=>e.mobilePadding||"1rem"};
  }
`;c.section`
  padding: ${e=>e.padding||"4rem 2rem"};
  min-height: ${e=>e.fullHeight?"100vh":"auto"};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${e=>e.gradient?M(e.theme.mode,e.gradient):"transparent"};

  @media (max-width: ${f.mobile}) {
    padding: ${e=>e.mobilePadding||"3rem 1rem"};
    min-height: ${e=>e.fullHeight?"80vh":"auto"};
  }
`;c.div`
  display: grid;
  gap: ${e=>e.gap||"2rem"};
  grid-template-columns: ${e=>e.columns===1?"1fr":e.columns===2?"repeat(2, 1fr)":e.columns===3?"repeat(3, 1fr)":e.columns===4?"repeat(4, 1fr)":e.columns||"repeat(auto-fit, minmax(300px, 1fr))"};

  @media (max-width: ${f.mobile}) {
    grid-template-columns: 1fr;
    gap: ${e=>e.mobileGap||"1rem"};
  }

  @media (max-width: ${f.tablet}) and (min-width: 769px) {
    grid-template-columns: ${e=>e.columns===3||e.columns===4?"repeat(2, 1fr)":e.columns||"repeat(auto-fit, minmax(250px, 1fr))"};
  }
`;c.div`
  background: ${({theme:e})=>M(e.mode,"card")};
  border-radius: ${Xe.large};
  padding: ${e=>e.padding||"2rem"};
  box-shadow: ${D.card};
  transition: ${H.medium};
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${D.cardHover};
  }

  ${e=>e.hover&&N`
    &:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: ${D.large};
    }
  `}

  ${e=>e.glass&&N`
    background: ${({theme:r})=>r.mode==="dark"?"rgba(45, 55, 72, 0.8)":"rgba(255, 255, 255, 0.8)"};
    backdrop-filter: blur(10px);
    border: 1px solid ${({theme:r})=>r.mode==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
  `}

  @media (max-width: ${f.mobile}) {
    padding: ${e=>e.mobilePadding||"1.5rem"};
  }
`;c.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-align: ${e=>e.center?"center":"left"};
  margin-bottom: ${e=>e.marginBottom||"1rem"};
  color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-dark)":"var(--color-text)"};
  position: relative;

  ${e=>e.accent&&N`
    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: ${r=>r.center?"50%":"0"};
      transform: ${r=>r.center?"translateX(-50%)":"none"};
      width: ${r=>r.accentWidth||"60px"};
      height: 4px;
      background: var(--color-primary);
      border-radius: 2px;
    }
  `}

  @media (max-width: ${f.mobile}) {
    font-size: clamp(1.5rem, 6vw, 2.5rem);
    margin-bottom: ${e=>e.mobileMarginBottom||"1rem"};
  }
`;c.p`
  font-size: ${e=>e.size==="large"?"1.1rem":e.size==="small"?"0.9rem":"1rem"};
  line-height: 1.6;
  color: ${({theme:e})=>e.mode==="dark"?r=>r.light?"var(--color-text-lighter-dark)":"var(--color-text-light-dark)":r=>r.light?"var(--color-text-lighter)":"var(--color-text-light)"};
  text-align: ${e=>e.center?"center":"left"};
  margin-bottom: ${e=>e.marginBottom||"1rem"};
  max-width: ${e=>e.maxWidth||"none"};

  @media (max-width: ${f.mobile}) {
    font-size: ${e=>e.size==="large"?"1rem":e.size==="small"?"0.85rem":"0.95rem"};
  }
`;const wr=c.span`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: ${e=>e.size==="large"?"0.6rem 1.2rem":e.size==="small"?"0.3rem 0.6rem":"0.4rem 0.8rem"};
  border-radius: ${Xe.full};
  font-size: ${e=>e.size==="large"?"0.9rem":e.size==="small"?"0.75rem":"0.8rem"};
  font-weight: 500;
  background: ${e=>e.variant==="primary"?"var(--color-primary)":e.variant==="secondary"?"var(--color-secondary)":e.variant==="success"?"var(--color-success)":e.variant==="warning"?"var(--color-warning)":e.variant==="error"?"var(--color-error)":e.variant==="info"?"var(--color-info)":"var(--color-primary)"};
  color: white;
  border: ${e=>e.outline?`2px solid ${e.variant==="primary"?"var(--color-primary)":"var(--color-secondary)"}`:"none"};
  background: ${e=>e.outline?"transparent":e.variant==="primary"?"var(--color-primary)":"var(--color-secondary)"};
  color: ${e=>e.outline?e.variant==="primary"?"var(--color-primary)":"var(--color-secondary)":"white"};

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${D.small};
  }
`;c.div`
  width: ${e=>e.width||"100%"};
  height: ${e=>e.thickness||"1px"};
  background: ${e=>e.gradient?M(e.theme.mode,e.gradient):"var(--color-border)"};
  margin: ${e=>e.margin||"2rem 0"};
  border-radius: ${e=>e.rounded?"10px":"0"};

  ${e=>e.accent&&N`
    height: 3px;
    background: var(--color-primary);
    width: 60px;
    margin: 1.5rem auto;
  `}

  @media (max-width: ${f.mobile}) {
    margin: ${e=>e.mobileMargin||"1.5rem 0"};
  }
`;c.div`
  width: ${e=>e.size||"40px"};
  height: ${e=>e.size||"40px"};
  border: ${e=>e.thickness||"3px"} solid ${e=>e.color||"var(--color-primary)"};
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;c.div`
  padding: 2rem;
  text-align: center;
  background: var(--color-error);
  color: white;
  border-radius: ${Xe.medium};
  margin: 1rem 0;
`;const bo=({project:e,index:r,filter:t="all"})=>{const[i,n]=k.useState({x:0,y:0}),[a,s]=k.useState(!1),d=k.useRef(null),l=Qi(),m=h=>{if(l)return;const b=d.current;if(!b)return;const x=b.getBoundingClientRect(),E=x.left+x.width/2,z=x.top+x.height/2,j=(h.clientY-z)/20,S=(h.clientX-E)/-20,C=Math.max(-15,Math.min(15,j)),R=Math.max(-15,Math.min(15,S));n({rotateX:C,rotateY:R})},u=()=>{s(!0)},p=()=>{s(!1),n({x:0,y:0})};return t==="all"||e.category===t?o.jsx(y.div,{ref:d,initial:{opacity:0,y:50,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-50,scale:.9},transition:{duration:.5,delay:r*.1,ease:[.25,.1,.25,1]},layout:!0,style:{perspective:"1000px",transformStyle:"preserve-3d"},children:o.jsxs(y.div,{className:"project-card",onMouseMove:m,onMouseEnter:u,onMouseLeave:p,style:{background:"var(--color-surface)",borderRadius:"16px",padding:"2rem",height:"100%",display:"flex",flexDirection:"column",border:"1px solid var(--color-border)",boxShadow:"var(--shadow-card)",transform:a&&!l?`rotateX(${i.rotateX}deg) rotateY(${i.rotateY}deg) translateZ(20px)`:"rotateX(0) rotateY(0) translateZ(0)",transition:"transform 0.3s ease-out, box-shadow 0.3s ease-out",cursor:l?"pointer":"default"},whileHover:l?{scale:1.02}:{scale:1.05,z:50,boxShadow:"0 20px 40px rgba(0, 0, 0, 0.3)"},whileTap:{scale:.98},children:[o.jsxs("div",{className:"project-image",style:{width:"100%",height:"200px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"12px",marginBottom:"1.5rem",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",position:"relative"},children:[e.image?o.jsx("img",{src:e.image,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover"},loading:"lazy"}):o.jsx("div",{style:{color:"white",fontSize:"3rem",opacity:.8},children:"🚀"}),e.featured&&o.jsx("div",{style:{position:"absolute",top:"1rem",right:"1rem",background:"var(--color-success)",color:"white",padding:"0.25rem 0.75rem",borderRadius:"20px",fontSize:"0.75rem",fontWeight:"600",display:"flex",alignItems:"center",gap:"0.25rem"},children:"⭐ Featured"})]}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[o.jsx("h3",{style:{fontSize:"1.5rem",fontWeight:"700",marginBottom:"0.75rem",color:"var(--color-text)",lineHeight:"1.3"},children:e.title}),o.jsx("p",{style:{color:"var(--color-text-light)",fontSize:"1rem",lineHeight:"1.6",marginBottom:"1.5rem",flex:1},children:e.description}),o.jsx("div",{style:{marginBottom:"1.5rem"},children:o.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",marginBottom:"1rem"},children:[e.techStack.slice(0,4).map((h,b)=>o.jsx(wr,{size:"small",variant:"primary",style:{fontSize:"0.75rem",background:"var(--color-primary)",border:"none"},children:h},b)),e.techStack.length>4&&o.jsxs(wr,{size:"small",variant:"secondary",style:{fontSize:"0.75rem",background:"var(--color-secondary)",border:"none"},children:["+",e.techStack.length-4]})]})}),o.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[o.jsx(y.button,{style:{flex:1,padding:"0.75rem 1.5rem",background:"var(--color-primary)",color:"white",border:"none",borderRadius:"8px",cursor:"pointer",fontSize:"0.9rem",fontWeight:"600",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem"},whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},onClick:()=>window.open(e.demoUrl,"_blank"),children:"🚀 Live Demo"}),o.jsx(y.button,{style:{padding:"0.75rem",minWidth:"45px",background:"transparent",color:"var(--color-primary)",border:"2px solid var(--color-primary)",borderRadius:"8px",cursor:"pointer",fontSize:"1rem",display:"flex",alignItems:"center",justifyContent:"center"},whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},onClick:()=>window.open(e.githubUrl,"_blank"),children:"📁"})]})]})]})}):null},xo=({activeFilter:e,onFilterChange:r})=>o.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:"0.75rem",marginBottom:"3rem"},children:fo.map(t=>o.jsx(y.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:o.jsxs(wr,{variant:e===t.id?"primary":"outline",size:"large",onClick:()=>r(t.id),style:{cursor:"pointer",padding:"0.75rem 1.5rem",fontSize:"1rem",fontWeight:"600",background:e===t.id?"var(--color-primary)":"transparent",color:e===t.id?"white":"var(--color-primary)",border:"2px solid var(--color-primary)",borderRadius:"25px",display:"flex",alignItems:"center",gap:"0.5rem",transition:"all 0.3s ease"},children:[o.jsx("span",{style:{fontSize:"1.2rem"},children:t.icon}),t.name]})},t.id))}),vo=c.section`
  padding: 4rem 2rem;
  min-height: 100vh;
  background: ${({theme:e})=>M(e.mode,"background")};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({theme:e})=>M(e.mode,"overlay")};
    z-index: 1;
  }

  @media (max-width: ${f.mobile}) {
    padding: 3rem 1rem;
  }
`,yo=c.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,wo=c.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: ${f.mobile}) {
    margin-bottom: 3rem;
  }
`,ko=c.h2`
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 700;
  color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-dark)":"var(--color-text)"};
  margin-bottom: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--color-primary);
    border-radius: 2px;
  }
`,So=c.p`
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-light-dark)":"var(--color-text-light)"};
  max-width: 600px;
  margin: 2rem auto 0;
  line-height: 1.6;
`,jo=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: ${f.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  @media (min-width: 769px) and (max-width: ${f.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`,$o=c(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
`,zo=c.div`
  text-align: center;
  padding: 4rem 2rem;
  background: ${({theme:e})=>M(e.mode,"card")};
  border-radius: 16px;
  margin-top: 2rem;

  h3 {
    font-size: 1.5rem;
    color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-dark)":"var(--color-text)"};
    margin-bottom: 1rem;
  }

  p {
    color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-light-dark)":"var(--color-text-light)"};
    margin-bottom: 1.5rem;
  }
`,Co=()=>{const[e,r]=ue({triggerOnce:!0,threshold:.1}),[t,i]=k.useState("all"),n=k.useMemo(()=>t==="all"?yr:yr.filter(s=>s.category===t),[t]),a=s=>{i(s)};return o.jsx(vo,{id:"projects",ref:e,children:o.jsx(yo,{children:o.jsx(W,{children:r&&o.jsxs(o.Fragment,{children:[o.jsxs(wo,{initial:"hidden",animate:"visible",variants:O,transition:{duration:.8},children:[o.jsx(ko,{children:"Projects"}),o.jsx(So,{children:"Explore my recent work and see how I've helped bring ideas to life through code"})]}),o.jsx(y.div,{initial:"hidden",animate:"visible",variants:$t,transition:{duration:.6,delay:.2},children:o.jsx(xo,{activeFilter:t,onFilterChange:a})}),o.jsx(jo,{children:o.jsx(W,{mode:"wait",children:n.length>0?n.map((s,d)=>o.jsx($o,{initial:"hidden",animate:"visible",exit:"hidden",variants:Be,transition:{duration:.5,delay:d*.1,ease:[.25,.1,.25,1]},layout:!0,children:o.jsx(bo,{project:s,index:d,filter:t})},s.id)):o.jsx(y.div,{initial:"hidden",animate:"visible",variants:O,style:{gridColumn:"1 / -1"},children:o.jsxs(zo,{children:[o.jsx("h3",{children:"No projects found"}),o.jsx("p",{children:"Try selecting a different filter category to see more projects."})]})})})})]})})})})},qr=[{name:"React",level:90,category:"frontend",years:3,icon:"⚛️",description:"Expert in React ecosystem including hooks, context, and performance optimization"},{name:"JavaScript",level:95,category:"frontend",years:4,icon:"📜",description:"Advanced ES6+, async programming, and modern JavaScript patterns"},{name:"TypeScript",level:80,category:"frontend",years:2,icon:"📘",description:"Strong typing, interfaces, and advanced TypeScript features"},{name:"HTML/CSS",level:92,category:"frontend",years:4,icon:"🎨",description:"Semantic HTML, modern CSS, Flexbox, Grid, and animations"},{name:"Vue.js",level:75,category:"frontend",years:1,icon:"💚",description:"Vue 3, Composition API, and Vue ecosystem"},{name:"Styled Components",level:85,category:"frontend",years:2,icon:"🎭",description:"CSS-in-JS, theme system, and component styling"},{name:"Node.js",level:88,category:"backend",years:3,icon:"🟢",description:"Express.js, REST APIs, middleware, and server-side JavaScript"},{name:"Python",level:82,category:"backend",years:2,icon:"🐍",description:"Django, Flask, data processing, and automation scripts"},{name:"MongoDB",level:80,category:"backend",years:2,icon:"🍃",description:"NoSQL database design, aggregation pipelines, and indexing"},{name:"PostgreSQL",level:75,category:"backend",years:1.5,icon:"🐘",description:"Relational database design, queries, and optimization"},{name:"Redis",level:70,category:"backend",years:1,icon:"🔴",description:"Caching, session management, and real-time data"},{name:"Git",level:90,category:"tools",years:4,icon:"📦",description:"Version control, branching strategies, and collaborative workflows"},{name:"Docker",level:75,category:"tools",years:1.5,icon:"🐳",description:"Containerization, Docker Compose, and deployment"},{name:"AWS",level:70,category:"tools",years:1,icon:"☁️",description:"EC2, S3, Lambda, and cloud infrastructure"},{name:"Figma",level:80,category:"tools",years:2,icon:"🎨",description:"UI/UX design, prototyping, and design systems"},{name:"Webpack",level:75,category:"tools",years:2,icon:"📦",description:"Build optimization, bundling, and development workflow"},{name:"Jest",level:82,category:"testing",years:2,icon:"🃏",description:"Unit testing, integration testing, and test coverage"},{name:"Cypress",level:78,category:"testing",years:1.5,icon:"🌲",description:"End-to-end testing, component testing, and CI integration"}],Jr=[{id:"all",name:"All Skills",icon:"🎯",color:"#667eea"},{id:"frontend",name:"Frontend",icon:"🎨",color:"#f093fb"},{id:"backend",name:"Backend",icon:"⚙️",color:"#4facfe"},{id:"tools",name:"Tools",icon:"🔧",color:"#43e97b"},{id:"testing",name:"Testing",icon:"🧪",color:"#fa709a"}],U={beginner:{color:"#e53e3e"},intermediate:{min:31,color:"#d69e2e"},advanced:{min:61,color:"#3182ce"},expert:{min:81,color:"#38a169"}},Io=e=>e>=U.expert.min?"Expert":e>=U.advanced.min?"Advanced":e>=U.intermediate.min?"Intermediate":"Beginner",Ro=e=>e>=U.expert.min?U.expert.color:e>=U.advanced.min?U.advanced.color:e>=U.intermediate.min?U.intermediate.color:U.beginner.color,To=({skill:e,index:r})=>{const[t,i]=ue({triggerOnce:!0,threshold:.5,rootMargin:"-100px 0px"}),[n,a]=k.useState(!1);k.useEffect(()=>{if(i){const l=setTimeout(()=>a(!0),r*100);return()=>clearTimeout(l)}},[i,r]);const s=Ro(e.level),d=Io(e.level);return o.jsxs(y.div,{ref:t,initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6,delay:r*.1,ease:[.25,.1,.25,1]},style:{marginBottom:"2rem"},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[o.jsx("span",{style:{fontSize:"1.5rem",lineHeight:1},children:e.icon}),o.jsxs("div",{children:[o.jsx("h4",{style:{fontSize:"1.1rem",fontWeight:"600",color:"var(--color-text)",margin:0,lineHeight:1.3},children:e.name}),e.years&&o.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--color-text-lighter)",margin:0,marginTop:"0.25rem"},children:[e.years," ",e.years===1?"year":"years"," experience"]})]})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[o.jsxs("span",{style:{fontSize:"0.9rem",fontWeight:"500",color:s,minWidth:"60px",textAlign:"right"},children:[e.level,"%"]}),o.jsx("div",{style:{background:s,color:"white",padding:"0.25rem 0.75rem",borderRadius:"20px",fontSize:"0.75rem",fontWeight:"600",minWidth:"fit-content"},children:d})]})]}),o.jsx("div",{style:{width:"100%",height:"12px",background:"var(--color-background)",borderRadius:"6px",overflow:"hidden",position:"relative",border:"1px solid var(--color-border)"},children:o.jsx(y.div,{style:{height:"100%",background:`linear-gradient(90deg, ${s}dd, ${s})`,borderRadius:"6px",position:"relative",overflow:"hidden"},initial:{width:0},animate:{width:n?`${e.level}%`:0},transition:{duration:1.5,ease:[.25,.1,.25,1],delay:.2},children:o.jsx(y.div,{style:{position:"absolute",top:0,left:"-100%",width:"100%",height:"100%",background:"linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)"},animate:{left:n?"100%":"-100%"},transition:{duration:2,ease:"easeInOut",delay:1.5,repeat:1/0,repeatDelay:1}})})}),e.description&&o.jsx(y.p,{style:{fontSize:"0.9rem",color:"var(--color-text-light)",marginTop:"0.5rem",lineHeight:1.5},initial:{opacity:0},animate:{opacity:1},transition:{duration:.4,delay:1.8+r*.1},children:e.description})]})},Eo=c.section`
  padding: 4rem 2rem;
  min-height: 100vh;
  background: ${({theme:e})=>M(e.mode,"skills")};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({theme:e})=>M(e.mode,"overlay")};
    z-index: 1;
  }

  @media (max-width: ${f.mobile}) {
    padding: 3rem 1rem;
  }
`,Po=c.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,Ao=c.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: ${f.mobile}) {
    margin-bottom: 3rem;
  }
`,Mo=c.h2`
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 700;
  color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-dark)":"var(--color-text)"};
  margin-bottom: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--color-primary);
    border-radius: 2px;
  }
`,No=c.p`
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-light-dark)":"var(--color-text-light)"};
  max-width: 600px;
  margin: 2rem auto 0;
  line-height: 1.6;
`,Oo=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3rem;

  @media (max-width: ${f.mobile}) {
    margin-bottom: 2rem;
    gap: 0.5rem;
  }
`,_o=c.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({active:e,color:r})=>e?r:"transparent"};
  color: ${({active:e,color:r})=>e?"white":"var(--color-text)"};
  border: 2px solid ${({color:e})=>e};
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: ${f.mobile}) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`,Fo=c.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;

  @media (max-width: ${f.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media (min-width: 769px) and (max-width: ${f.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
`,Do=c.div`
  background: ${({theme:e})=>M(e.mode,"card")};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${f.mobile}) {
    padding: 1.5rem;
  }
`,Bo=c.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-dark)":"var(--color-text)"};
    margin: 0;
  }
`,Lo=c.div`
  font-size: 1.8rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({color:e})=>e};
  border-radius: 10px;
  color: white;
`,Ho=c.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Wo=c.div`
  text-align: center;
  padding: 3rem 2rem;
  background: ${({theme:e})=>M(e.mode,"card")};
  border-radius: 16px;
  margin-top: 2rem;

  h3 {
    font-size: 1.5rem;
    color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-dark)":"var(--color-text)"};
    margin-bottom: 1rem;
  }

  p {
    color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-light-dark)":"var(--color-text-light)"};
  }
`,Yo=()=>{const[e,r]=ue({triggerOnce:!0,threshold:.1}),[t,i]=k.useState("all"),n=k.useMemo(()=>(t==="all"?qr:qr.filter(l=>l.category===t)).reduce((l,m)=>(l[m.category]||(l[m.category]=[]),l[m.category].push(m),l),{}),[t]),a=s=>{i(s)};return o.jsx(Eo,{id:"skills",ref:e,children:o.jsx(Po,{children:o.jsx(W,{children:r&&o.jsxs(o.Fragment,{children:[o.jsxs(Ao,{initial:"hidden",animate:"visible",variants:O,transition:{duration:.8},children:[o.jsx(Mo,{children:"Skills & Expertise"}),o.jsx(No,{children:"A comprehensive overview of my technical skills and experience levels"})]}),o.jsx(y.div,{initial:"hidden",animate:"visible",variants:$t,transition:{duration:.6,delay:.2},children:o.jsx(Oo,{children:Jr.map(s=>o.jsxs(_o,{active:t===s.id,color:s.color,onClick:()=>a(s.id),children:[o.jsx("span",{children:s.icon}),s.name]},s.id))})}),o.jsx(Fo,{children:o.jsx(W,{mode:"wait",children:Object.keys(n).length>0?Object.entries(n).map(([s,d],l)=>{const m=Jr.find(u=>u.id===s);return o.jsxs(Do,{initial:"hidden",animate:"visible",exit:"hidden",variants:Be,transition:{duration:.6,delay:l*.1},children:[o.jsxs(Bo,{initial:"hidden",animate:"visible",variants:O,transition:{delay:l*.1},children:[o.jsx(Lo,{color:m?.color||"var(--color-primary)",children:m?.icon||"💻"}),o.jsx("h3",{children:m?.name||s.charAt(0).toUpperCase()+s.slice(1)})]}),o.jsx(Ho,{children:d.map((u,p)=>o.jsx(To,{skill:u,index:p},u.name))})]},s)}):o.jsx(y.div,{initial:"hidden",animate:"visible",variants:O,style:{gridColumn:"1 / -1"},children:o.jsxs(Wo,{children:[o.jsx("h3",{children:"No skills found"}),o.jsx("p",{children:"Try selecting a different category to see more skills."})]})})})})]})})})})},Go=c.section`
  padding: 4rem 2rem;
  min-height: 100vh;
  background: ${({theme:e})=>M(e.mode,"about")};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({theme:e})=>M(e.mode,"overlay")};
    z-index: 1;
  }

  @media (max-width: ${f.mobile}) {
    padding: 3rem 1rem;
  }
`,Uo=c.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,Vo=c.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: ${f.mobile}) {
    margin-bottom: 3rem;
  }
`,Xo=c.h2`
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 700;
  color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-dark)":"var(--color-text)"};
  margin-bottom: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--color-primary);
    border-radius: 2px;
  }
`,qo=c.p`
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-light-dark)":"var(--color-text-light)"};
  max-width: 600px;
  margin: 2rem auto 0;
  line-height: 1.6;
`,Jo=c.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: ${f.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,Qo=c.div`
  background: ${({theme:e})=>M(e.mode,"card")};
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: ${D.large};
  border: 1px solid ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
  position: sticky;
  top: 2rem;

  @media (max-width: ${f.tablet}) {
    position: relative;
    top: 0;
  }
`,Ko=c.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 2rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transform: rotate(45deg);
    animation: shimmer 3s infinite;
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
    100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
  }

  @media (max-width: ${f.mobile}) {
    width: 150px;
    height: 150px;
    font-size: 3rem;
  }
`,Zo=c.div`
  margin-top: 1.5rem;
`,en=c.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-dark)":"var(--color-text)"};
  margin-bottom: 0.5rem;
`,rn=c.p`
  font-size: 1.1rem;
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 1rem;
`,tn=c.p`
  font-size: 0.9rem;
  color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-light-dark)":"var(--color-text-light)"};
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`,on=c.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`,Te=c.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: ${H.medium};
  font-size: 1.2rem;

  &:hover {
    background: var(--color-secondary);
    transform: translateY(-2px);
    box-shadow: ${D.medium};
  }
`,nn=c.div`
  background: ${({theme:e})=>M(e.mode,"card")};
  border-radius: 20px;
  padding: 3rem;
  box-shadow: ${D.medium};
  border: 1px solid ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};

  @media (max-width: ${f.mobile}) {
    padding: 2rem;
  }
`,an=c.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-light-dark)":"var(--color-text-light)"};
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${f.mobile}) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`,sn=c.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: ${f.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,nr=c.div`
  background: ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.02)"};
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
`,ar=c.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`,sr=c.div`
  font-size: 0.9rem;
  color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-light-dark)":"var(--color-text-light)"};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,cn=()=>{const[e,r]=ue({triggerOnce:!0,threshold:.1}),t={years:new Date().getFullYear()-2019,projects:15,technologies:20};return o.jsx(Go,{id:"about",ref:e,children:o.jsx(Uo,{children:o.jsx(W,{children:r&&o.jsxs(o.Fragment,{children:[o.jsxs(Vo,{initial:"hidden",animate:"visible",variants:O,transition:{duration:.8},children:[o.jsx(Xo,{children:"About Me"}),o.jsx(qo,{children:"Get to know me better - my journey, skills, and what drives me as a developer"})]}),o.jsxs(Jo,{children:[o.jsx(y.div,{initial:"hidden",animate:"visible",variants:Cr,transition:{duration:.8,delay:.2},children:o.jsxs(Qo,{children:[o.jsx(Ko,{children:"🧑‍💻"}),o.jsxs(Zo,{children:[o.jsx(en,{children:P.name}),o.jsx(rn,{children:P.title}),o.jsxs(tn,{children:["📍 ",P.location]})]}),o.jsxs(sn,{children:[o.jsx(y.div,{variants:O,transition:{delay:.4},children:o.jsxs(nr,{children:[o.jsxs(ar,{children:[t.years,"+"]}),o.jsx(sr,{children:"Years Experience"})]})}),o.jsx(y.div,{variants:O,transition:{delay:.5},children:o.jsxs(nr,{children:[o.jsx(ar,{children:t.projects}),o.jsx(sr,{children:"Projects Completed"})]})}),o.jsx(y.div,{variants:O,transition:{delay:.6},children:o.jsxs(nr,{children:[o.jsx(ar,{children:t.technologies}),o.jsx(sr,{children:"Technologies"})]})})]}),o.jsxs(on,{children:[o.jsx(y.div,{variants:O,transition:{delay:.7},children:o.jsx(Te,{href:P.social.github,target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub Profile",children:"📁"})}),o.jsx(y.div,{variants:O,transition:{delay:.8},children:o.jsx(Te,{href:P.social.linkedin,target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn Profile",children:"💼"})}),o.jsx(y.div,{variants:O,transition:{delay:.9},children:o.jsx(Te,{href:P.social.twitter,target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter Profile",children:"🐦"})}),o.jsx(y.div,{variants:O,transition:{delay:1},children:o.jsx(Te,{href:`mailto:${P.email}`,"aria-label":"Email Contact",children:"✉️"})})]})]})}),o.jsx(y.div,{initial:"hidden",animate:"visible",variants:Ir,transition:{duration:.8,delay:.3},children:o.jsx(nn,{children:o.jsx(W,{children:P.about.paragraphs.map((i,n)=>o.jsx(an,{initial:"hidden",animate:"visible",variants:O,transition:{duration:.6,delay:.4+n*.2},children:i},n))})})})]})]})})})})},ln=()=>{const[e,r]=k.useState({name:"",email:"",subject:"",message:""}),[t,i]=k.useState({}),[n,a]=k.useState(!1),[s,d]=k.useState(!1),l=g=>{const{name:h,value:b}=g.target;r(x=>({...x,[h]:b})),t[h]&&i(x=>({...x,[h]:""}))},m=()=>{const g={},h=ir("name",e.name,!0);h.name&&(g.name=h.name);const b=ir("email",e.email,!0);b.email&&(g.email=b.email);const x=ir("message",e.message,!0);return x.message&&(g.message=x.message),i(g),Object.keys(g).length===0},u=async g=>{if(g.preventDefault(),!!m()){a(!0);try{await new Promise(h=>setTimeout(h,2e3)),console.log("Form submitted:",e),d(!0),r({name:"",email:"",subject:"",message:""})}catch(h){console.error("Error submitting form:",h),i({submit:"An error occurred. Please try again later."})}finally{a(!1)}}},p=()=>{d(!1),i({})};return s?o.jsxs(y.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5},style:{background:"var(--color-success)",color:"white",padding:"3rem",borderRadius:"20px",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"},children:[o.jsx("div",{style:{fontSize:"3rem"},children:"✅"}),o.jsx("h3",{style:{fontSize:"1.5rem",margin:0},children:"Message Sent Successfully!"}),o.jsx("p",{style:{fontSize:"1.1rem",opacity:.9,margin:0},children:"Thank you for reaching out. I'll get back to you as soon as possible."}),o.jsx("button",{onClick:p,style:{background:"white",color:"var(--color-success)",border:"none",padding:"0.75rem 1.5rem",borderRadius:"8px",fontSize:"1rem",fontWeight:"600",cursor:"pointer",marginTop:"1rem"},children:"Send Another Message"})]}):o.jsxs(y.form,{onSubmit:u,initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.8,delay:.4},children:[o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem",marginBottom:"1.5rem"},children:[o.jsxs("div",{children:[o.jsx("label",{htmlFor:"name",style:{display:"block",fontSize:"1rem",fontWeight:"600",color:"var(--color-text)",marginBottom:"0.5rem"},children:"Name *"}),o.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:l,placeholder:"Your name",required:!0,style:{width:"100%",padding:"1rem",fontSize:"1rem",border:`2px solid ${t.name?"var(--color-error)":"var(--color-border)"}`,borderRadius:"12px",background:"var(--color-surface)",color:"var(--color-text)",transition:"all 0.3s ease"}}),t.name&&o.jsxs("div",{style:{color:"var(--color-error)",fontSize:"0.9rem",marginTop:"0.25rem",display:"flex",alignItems:"center",gap:"0.25rem"},children:["⚠️ ",t.name]})]}),o.jsxs("div",{children:[o.jsx("label",{htmlFor:"email",style:{display:"block",fontSize:"1rem",fontWeight:"600",color:"var(--color-text)",marginBottom:"0.5rem"},children:"Email *"}),o.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:l,placeholder:"your.email@example.com",required:!0,style:{width:"100%",padding:"1rem",fontSize:"1rem",border:`2px solid ${t.email?"var(--color-error)":"var(--color-border)"}`,borderRadius:"12px",background:"var(--color-surface)",color:"var(--color-text)",transition:"all 0.3s ease"}}),t.email&&o.jsxs("div",{style:{color:"var(--color-error)",fontSize:"0.9rem",marginTop:"0.25rem",display:"flex",alignItems:"center",gap:"0.25rem"},children:["⚠️ ",t.email]})]})]}),o.jsxs("div",{style:{marginBottom:"1.5rem"},children:[o.jsx("label",{htmlFor:"subject",style:{display:"block",fontSize:"1rem",fontWeight:"600",color:"var(--color-text)",marginBottom:"0.5rem"},children:"Subject"}),o.jsx("input",{type:"text",id:"subject",name:"subject",value:e.subject,onChange:l,placeholder:"What's this about?",style:{width:"100%",padding:"1rem",fontSize:"1rem",border:"2px solid var(--color-border)",borderRadius:"12px",background:"var(--color-surface)",color:"var(--color-text)",transition:"all 0.3s ease"}})]}),o.jsxs("div",{style:{marginBottom:"1.5rem"},children:[o.jsx("label",{htmlFor:"message",style:{display:"block",fontSize:"1rem",fontWeight:"600",color:"var(--color-text)",marginBottom:"0.5rem"},children:"Message *"}),o.jsx("textarea",{id:"message",name:"message",value:e.message,onChange:l,placeholder:"Your message here...",required:!0,rows:5,style:{width:"100%",padding:"1rem",fontSize:"1rem",border:`2px solid ${t.message?"var(--color-error)":"var(--color-border)"}`,borderRadius:"12px",background:"var(--color-surface)",color:"var(--color-text)",transition:"all 0.3s ease",resize:"vertical",fontFamily:"inherit",lineHeight:"1.5"}}),t.message&&o.jsxs("div",{style:{color:"var(--color-error)",fontSize:"0.9rem",marginTop:"0.25rem",display:"flex",alignItems:"center",gap:"0.25rem"},children:["⚠️ ",t.message]})]}),t.submit&&o.jsxs("div",{style:{background:"var(--color-error)",color:"white",padding:"1rem",borderRadius:"12px",marginBottom:"1rem",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem"},children:["❌ ",t.submit]}),o.jsx(y.button,{type:"submit",disabled:n,style:{width:"100%",padding:"1rem 2rem",fontSize:"1.1rem",fontWeight:"600",background:"var(--color-primary)",color:"white",border:"none",borderRadius:"12px",cursor:n?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",position:"relative",overflow:"hidden",opacity:n?.7:1},whileHover:n?{}:{scale:1.02},whileTap:n?{}:{scale:.98},children:n?o.jsxs(o.Fragment,{children:[o.jsx(y.div,{style:{width:"20px",height:"20px",border:"2px solid rgba(255, 255, 255, 0.3)",borderTop:"2px solid white",borderRadius:"50%"},animate:{rotate:360},transition:{duration:1,ease:"linear",repeat:1/0}}),"Sending..."]}):o.jsxs(o.Fragment,{children:["Send Message",o.jsx("span",{style:{fontSize:"1.2rem"},children:"📤"})]})})]})},dn=c.section`
  padding: 4rem 2rem;
  min-height: 100vh;
  background: ${({theme:e})=>M(e.mode,"contact")};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({theme:e})=>M(e.mode,"overlay")};
    z-index: 1;
  }

  @media (max-width: ${f.mobile}) {
    padding: 3rem 1rem;
  }
`,mn=c.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`,pn=c.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: ${f.mobile}) {
    margin-bottom: 3rem;
  }
`,un=c.h2`
  font-size: clamp(2.5rem, 6vw, 3.5rem);
  font-weight: 700;
  color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-dark)":"var(--color-text)"};
  margin-bottom: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--color-primary);
    border-radius: 2px;
  }
`,hn=c.p`
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-light-dark)":"var(--color-text-light)"};
  max-width: 600px;
  margin: 2rem auto 0;
  line-height: 1.6;
`,gn=c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: ${f.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`,fn=c.div`
  background: ${({theme:e})=>M(e.mode,"card")};
  border-radius: 20px;
  padding: 3rem;
  box-shadow: ${D.large};
  border: 1px solid ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};

  @media (max-width: ${f.mobile}) {
    padding: 2rem;
  }
`,bn=c.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-dark)":"var(--color-text)"};
  margin-bottom: 1.5rem;
`,xn=c.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-light-dark)":"var(--color-text-light)"};
  margin-bottom: 2rem;
`,vn=c.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,yn=c.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.02)"};
  border-radius: 12px;
  border: 1px solid ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};
  transition: ${H.medium};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${D.medium};
  }
`,wn=c.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
`,kn=c.div`
  flex: 1;
`,Sn=c.div`
  font-size: 0.9rem;
  color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-lighter-dark)":"var(--color-text-lighter)"};
  margin-bottom: 0.25rem;
`,jn=c.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-dark)":"var(--color-text)"};

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: ${H.fast};

    &:hover {
      color: var(--color-secondary);
    }
  }
`;c.form`
  background: ${({theme:e})=>M(e.mode,"card")};
  border-radius: 20px;
  padding: 3rem;
  box-shadow: ${D.large};
  border: 1px solid ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)"};

  @media (max-width: ${f.mobile}) {
    padding: 2rem;
  }
`;c.div`
  margin-bottom: 1.5rem;

  @media (max-width: ${f.mobile}) {
    margin-bottom: 1.25rem;
  }
`;c.label`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-dark)":"var(--color-text)"};
  margin-bottom: 0.5rem;
`;c.input`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
  border-radius: 12px;
  background: ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.05)":"rgba(255, 255, 255, 0.8)"};
  color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-dark)":"var(--color-text)"};
  transition: ${H.fast};

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.4)":"rgba(0, 0, 0, 0.4)"};
  }

  ${e=>e.error&&css`
    border-color: var(--color-error);
    box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);
  `}
`;c.textarea`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
  border-radius: 12px;
  background: ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.05)":"rgba(255, 255, 255, 0.8)"};
  color: ${({theme:e})=>e.mode==="dark"?"var(--color-text-dark)":"var(--color-text)"};
  transition: ${H.fast};
  resize: vertical;
  min-height: 120px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: ${({theme:e})=>e.mode==="dark"?"rgba(255, 255, 255, 0.4)":"rgba(0, 0, 0, 0.4)"};
  }

  ${e=>e.error&&css`
    border-color: var(--color-error);
    box-shadow: 0 0 0 3px rgba(229, 62, 62, 0.1);
  `}
`;c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: ${f.mobile}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;c.div`
  color: var(--color-error);
  font-size: 0.9rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;c.button`
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: ${H.medium};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;

  &:hover {
    background: var(--color-secondary);
    transform: translateY(-2px);
    box-shadow: ${D.medium};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;c.div`
  background: var(--color-success);
  color: white;
  padding: 1rem;
  border-radius: 12px;
  margin-top: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  animation: slideInUp 0.5s ease;
`;const $n=()=>{const[e,r]=ue({triggerOnce:!0,threshold:.1}),t=[{icon:"📧",label:"Email",value:P.email,href:`mailto:${P.email}`},{icon:"📱",label:"Phone",value:P.phone,href:`tel:${P.phone}`},{icon:"📍",label:"Location",value:P.location,href:null}];return o.jsx(dn,{id:"contact",ref:e,children:o.jsx(mn,{children:o.jsx(W,{children:r&&o.jsxs(o.Fragment,{children:[o.jsxs(pn,{initial:"hidden",animate:"visible",variants:O,transition:{duration:.8},children:[o.jsx(un,{children:"Get In Touch"}),o.jsx(hn,{children:"Have a project in mind or want to collaborate? I'd love to hear from you!"})]}),o.jsxs(gn,{children:[o.jsx(y.div,{initial:"hidden",animate:"visible",variants:Cr,transition:{duration:.8,delay:.2},children:o.jsxs(fn,{children:[o.jsx(bn,{children:"Let's Connect"}),o.jsx(xn,{children:"I'm always interested in hearing about new opportunities, exciting projects, or just having a chat about technology and development. Feel free to reach out through any of the following methods:"}),o.jsx(vn,{children:o.jsx(W,{children:t.map((i,n)=>o.jsxs(yn,{initial:"hidden",animate:"visible",variants:O,transition:{duration:.6,delay:.4+n*.1},whileHover:{y:-2},whileTap:{scale:.98},children:[o.jsx(wn,{children:i.icon}),o.jsxs(kn,{children:[o.jsx(Sn,{children:i.label}),o.jsx(jn,{children:i.href?o.jsx("a",{href:i.href,style:{color:"var(--color-primary)",textDecoration:"none"},children:i.value}):i.value})]})]},i.label))})})]})}),o.jsx(y.div,{initial:"hidden",animate:"visible",variants:Ir,transition:{duration:.8,delay:.3},children:o.jsx(ln,{})})]})]})})})})},zn=({theme:e,toggleTheme:r})=>{const[t,i]=k.useState(!1),[n,a]=k.useState(!1),[s,d]=k.useState("hero"),{scrollYProgress:l}=Mt();Nt(l,[0,.1],["rgba(255, 255, 255, 0)","rgba(255, 255, 255, 0.95)"]);const m=[{id:"hero",label:"Home",icon:"🏠"},{id:"projects",label:"Projects",icon:"🚀"},{id:"skills",label:"Skills",icon:"💡"},{id:"about",label:"About",icon:"👤"},{id:"contact",label:"Contact",icon:"📧"}];k.useEffect(()=>{const p=()=>{const g=window.pageYOffset;i(g>100);const b=m.map(x=>x.id).find(x=>{const E=document.getElementById(x);if(E){const z=E.getBoundingClientRect();return z.top<=100&&z.bottom>100}return!1});b&&d(b)};return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]);const u=p=>{vr(p,80),a(!1)};return o.jsxs(o.Fragment,{children:[o.jsx(y.div,{className:"progress-bar",style:{position:"fixed",top:0,left:0,right:0,height:"3px",background:"var(--color-primary)",transformOrigin:"0%",scaleX:l,zIndex:1e3,transform:`scaleX(${l.get()})`}}),o.jsxs(y.header,{className:"header",style:{position:"fixed",top:0,left:0,right:0,zIndex:999,background:e.mode==="dark"?t?"rgba(26, 32, 44, 0.95)":"transparent":t?"rgba(255, 255, 255, 0.95)":"transparent",backdropFilter:t?"blur(10px)":"none",borderBottom:t?`1px solid ${e.mode==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}`:"none",transition:"all 0.3s ease"},children:[o.jsxs("div",{className:"container",style:{maxWidth:"1200px",margin:"0 auto",padding:"0 2rem",display:"flex",justifyContent:"space-between",alignItems:"center",height:"80px"},children:[o.jsx(y.div,{className:"logo",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.6},style:{fontSize:t?"1.2rem":"1.4rem",fontWeight:"700",color:e.mode==="dark"?"var(--color-text-dark)":"var(--color-text)",textDecoration:"none",cursor:"pointer",transition:"all 0.3s ease"},onClick:()=>u("hero"),children:P.name}),o.jsxs("nav",{className:"desktop-nav",style:{display:"none",alignItems:"center",gap:"2rem"},children:[m.map((p,g)=>o.jsxs(y.button,{className:"nav-item",onClick:()=>u(p.id),style:{background:"none",border:"none",fontSize:"1rem",fontWeight:"500",color:s===p.id?"var(--color-primary)":e.mode==="dark"?"var(--color-text-dark)":"var(--color-text)",cursor:"pointer",padding:"0.5rem 1rem",borderRadius:"8px",transition:"all 0.3s ease",position:"relative"},initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.6,delay:g*.1},whileHover:{scale:1.05,y:-2},whileTap:{scale:.95},children:[o.jsx("span",{style:{marginRight:"0.5rem"},children:p.icon}),p.label,s===p.id&&o.jsx(y.div,{style:{position:"absolute",bottom:"-2px",left:"50%",transform:"translateX(-50%)",width:"30px",height:"3px",background:"var(--color-primary)",borderRadius:"2px"},layoutId:"activeTab"})]},p.id)),o.jsx(y.button,{className:"theme-toggle",onClick:r,style:{background:"var(--color-primary)",border:"none",width:"40px",height:"40px",borderRadius:"50%",color:"white",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.2rem",transition:"all 0.3s ease"},initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.5},whileHover:{scale:1.1,rotate:180},whileTap:{scale:.9},children:e.mode==="dark"?"☀️":"🌙"})]}),o.jsx(y.button,{className:"mobile-menu-toggle",onClick:()=>a(!n),style:{background:"none",border:"none",fontSize:"1.5rem",cursor:"pointer",color:e.mode==="dark"?"var(--color-text-dark)":"var(--color-text)",padding:"0.5rem",display:"block"},whileHover:{scale:1.1},whileTap:{scale:.9},children:n?"✕":"☰"})]}),o.jsx(W,{children:n&&o.jsx(y.div,{className:"mobile-menu",initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{duration:.3,ease:"easeInOut"},style:{position:"fixed",top:"80px",right:0,width:"300px",height:"calc(100vh - 80px)",background:e.mode==="dark"?"rgba(26, 32, 44, 0.98)":"rgba(255, 255, 255, 0.98)",backdropFilter:"blur(10px)",borderLeft:`1px solid ${e.mode==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"}`,padding:"2rem",zIndex:998},children:o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[m.map((p,g)=>o.jsxs(y.button,{onClick:()=>u(p.id),style:{background:s===p.id?"var(--color-primary)":e.mode==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.05)",border:"none",padding:"1rem",borderRadius:"12px",color:s===p.id?"white":e.mode==="dark"?"var(--color-text-dark)":"var(--color-text)",cursor:"pointer",fontSize:"1rem",fontWeight:"500",textAlign:"left",display:"flex",alignItems:"center",gap:"0.75rem",transition:"all 0.3s ease"},initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.3,delay:g*.05},whileHover:{scale:1.02,x:-5},whileTap:{scale:.98},children:[o.jsx("span",{style:{fontSize:"1.2rem"},children:p.icon}),p.label]},p.id)),o.jsxs(y.button,{onClick:r,style:{background:"var(--color-primary)",border:"none",padding:"1rem",borderRadius:"12px",color:"white",cursor:"pointer",fontSize:"1rem",fontWeight:"500",textAlign:"left",display:"flex",alignItems:"center",gap:"0.75rem",marginTop:"1rem"},initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.3,delay:.3},whileHover:{scale:1.02},whileTap:{scale:.98},children:[o.jsx("span",{style:{fontSize:"1.2rem"},children:e.mode==="dark"?"☀️":"🌙"}),e.mode==="dark"?"Light Mode":"Dark Mode"]})]})})}),o.jsx(W,{children:n&&o.jsx(y.div,{className:"mobile-menu-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>a(!1),style:{position:"fixed",top:"80px",left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.5)",zIndex:997}})})]}),o.jsx("style",{jsx:!0,children:`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
        }
      `})]})},Cn=()=>{const[e,r]=k.useState(()=>qi());k.useEffect(()=>{tr(e)},[e]);const t=()=>{const n=e==="light"?"dark":"light";r(n),tr(n)};k.useEffect(()=>{const n=window.matchMedia("(prefers-color-scheme: dark)"),a=()=>{if(!localStorage.getItem("theme")){const s=n.matches?"dark":"light";r(s),tr(s)}};return n.addEventListener("change",a),()=>n.removeEventListener("change",a)},[]);const i={mode:e,toggleTheme:t};return o.jsx(St,{theme:i,children:o.jsx("div",{className:"app","data-theme":e,children:o.jsxs(W,{mode:"wait",children:[o.jsx(zn,{theme:i,toggleTheme:t}),o.jsxs(y.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[o.jsx(go,{}),o.jsx(Co,{}),o.jsx(Yo,{}),o.jsx(cn,{}),o.jsx($n,{})]})]})})})},In=Hi`
  ${or.subtleShift}
  ${or.waveMove}
  ${or.pulse}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    --font-mono: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;

    /* Light theme colors */
    --color-primary: #667eea;
    --color-secondary: #764ba2;
    --color-accent: #f093fb;
    --color-text: #2d3748;
    --color-text-light: #4a5568;
    --color-text-lighter: #718096;
    --color-background: #f7fafc;
    --color-surface: #ffffff;
    --color-border: #e2e8f0;
    --color-shadow: rgba(0, 0, 0, 0.1);

    /* Dark theme colors */
    --color-primary-dark: #9f7aea;
    --color-secondary-dark: #b794f4;
    --color-accent-dark: #d53f8c;
    --color-text-dark: #f7fafc;
    --color-text-light-dark: #e2e8f0;
    --color-text-lighter-dark: #a0aec0;
    --color-background-dark: #1a202c;
    --color-surface-dark: #2d3748;
    --color-border-dark: #4a5568;
    --color-shadow-dark: rgba(0, 0, 0, 0.3);

    /* Semantic colors */
    --color-success: #38a169;
    --color-warning: #d69e2e;
    --color-error: #e53e3e;
    --color-info: #3182ce;

    /* Sizes */
    --max-width: 1200px;
    --section-padding: 4rem 2rem;
    --component-gap: 1.5rem;
    --card-gap: 2rem;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-sans);
    line-height: 1.6;
    color: var(--color-text);
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Dark theme body styles */
  body[data-theme="dark"] {
    color: var(--color-text-dark);
    background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: inherit;
  }

  h1 {
    font-size: clamp(2.5rem, 8vw, 4rem);
  }

  h2 {
    font-size: clamp(2rem, 6vw, 3rem);
  }

  h3 {
    font-size: clamp(1.5rem, 4vw, 2rem);
  }

  p {
    margin-bottom: 1rem;
    color: inherit;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: ${H.fast};
  }

  a:hover {
    color: var(--color-secondary);
  }

  /* Form elements */
  button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    border: none;
    border-radius: 8px;
  }

  button {
    cursor: pointer;
    background: var(--color-primary);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    transition: ${H.medium};
  }

  button:hover {
    background: var(--color-secondary);
    transform: translateY(-2px);
  }

  button:active {
    transform: translateY(0);
  }

  input, textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid var(--color-border);
    background: var(--color-surface);
    color: inherit;
    transition: ${H.fast};
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  body[data-theme="dark"] input,
  body[data-theme="dark"] textarea {
    background: var(--color-surface-dark);
    border-color: var(--color-border-dark);
    color: var(--color-text-dark);
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-primary);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-secondary);
  }

  /* Focus styles for accessibility */
  :focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  /* Skip to main content link for accessibility */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--color-primary);
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1000;
    transition: top 0.3s;
  }

  .skip-link:focus {
    top: 6px;
  }

  /* Utility classes */
  .container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section {
    padding: var(--section-padding);
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  /* Responsive text sizes */
  @media (max-width: ${f.mobile}) {
    html {
      font-size: 14px;
    }

    .container {
      padding: 0 1rem;
    }

    .section {
      padding: 3rem 1rem;
    }
  }

  /* Reduce motion for users who prefer it */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }

    html {
      scroll-behavior: auto;
    }
  }

  /* Print styles */
  @media print {
    body {
      background: white !important;
      color: black !important;
    }

    .section {
      min-height: auto;
      padding: 2rem 1rem !important;
    }
  }
`;cr.createRoot(document.getElementById("root")).render(o.jsx(L.StrictMode,{children:o.jsxs(St,{theme:{mode:"light"},children:[o.jsx(In,{}),o.jsx(Cn,{})]})}));
