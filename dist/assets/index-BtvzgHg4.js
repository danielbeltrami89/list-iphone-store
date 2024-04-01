(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Kg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Pf={exports:{}},ao={},Af={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ri=Symbol.for("react.element"),Yg=Symbol.for("react.portal"),qg=Symbol.for("react.fragment"),Xg=Symbol.for("react.strict_mode"),Jg=Symbol.for("react.profiler"),Zg=Symbol.for("react.provider"),e_=Symbol.for("react.context"),t_=Symbol.for("react.forward_ref"),n_=Symbol.for("react.suspense"),r_=Symbol.for("react.memo"),i_=Symbol.for("react.lazy"),yc=Symbol.iterator;function s_(t){return t===null||typeof t!="object"?null:(t=yc&&t[yc]||t["@@iterator"],typeof t=="function"?t:null)}var Df={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Of=Object.assign,Mf={};function gr(t,e,n){this.props=t,this.context=e,this.refs=Mf,this.updater=n||Df}gr.prototype.isReactComponent={};gr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};gr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Lf(){}Lf.prototype=gr.prototype;function ba(t,e,n){this.props=t,this.context=e,this.refs=Mf,this.updater=n||Df}var Ua=ba.prototype=new Lf;Ua.constructor=ba;Of(Ua,gr.prototype);Ua.isPureReactComponent=!0;var vc=Array.isArray,Ff=Object.prototype.hasOwnProperty,Ba={current:null},zf={key:!0,ref:!0,__self:!0,__source:!0};function bf(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ff.call(e,r)&&!zf.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ri,type:t,key:s,ref:o,props:i,_owner:Ba.current}}function o_(t,e){return{$$typeof:Ri,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ja(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ri}function l_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wc=/\/+/g;function Uo(t,e){return typeof t=="object"&&t!==null&&t.key!=null?l_(""+t.key):e.toString(36)}function ls(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ri:case Yg:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Uo(o,0):r,vc(i)?(n="",t!=null&&(n=t.replace(wc,"$&/")+"/"),ls(i,e,n,"",function(u){return u})):i!=null&&(ja(i)&&(i=o_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(wc,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",vc(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+Uo(s,l);o+=ls(s,e,n,a,i)}else if(a=s_(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+Uo(s,l++),o+=ls(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $i(t,e,n){if(t==null)return t;var r=[],i=0;return ls(t,r,"","",function(s){return e.call(n,s,i++)}),r}function a_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ie={current:null},as={transition:null},u_={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:as,ReactCurrentOwner:Ba};L.Children={map:$i,forEach:function(t,e,n){$i(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $i(t,function(){e++}),e},toArray:function(t){return $i(t,function(e){return e})||[]},only:function(t){if(!ja(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};L.Component=gr;L.Fragment=qg;L.Profiler=Jg;L.PureComponent=ba;L.StrictMode=Xg;L.Suspense=n_;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u_;L.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Of({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ba.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)Ff.call(e,a)&&!zf.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ri,type:t.type,key:i,ref:s,props:r,_owner:o}};L.createContext=function(t){return t={$$typeof:e_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Zg,_context:t},t.Consumer=t};L.createElement=bf;L.createFactory=function(t){var e=bf.bind(null,t);return e.type=t,e};L.createRef=function(){return{current:null}};L.forwardRef=function(t){return{$$typeof:t_,render:t}};L.isValidElement=ja;L.lazy=function(t){return{$$typeof:i_,_payload:{_status:-1,_result:t},_init:a_}};L.memo=function(t,e){return{$$typeof:r_,type:t,compare:e===void 0?null:e}};L.startTransition=function(t){var e=as.transition;as.transition={};try{t()}finally{as.transition=e}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(t,e){return Ie.current.useCallback(t,e)};L.useContext=function(t){return Ie.current.useContext(t)};L.useDebugValue=function(){};L.useDeferredValue=function(t){return Ie.current.useDeferredValue(t)};L.useEffect=function(t,e){return Ie.current.useEffect(t,e)};L.useId=function(){return Ie.current.useId()};L.useImperativeHandle=function(t,e,n){return Ie.current.useImperativeHandle(t,e,n)};L.useInsertionEffect=function(t,e){return Ie.current.useInsertionEffect(t,e)};L.useLayoutEffect=function(t,e){return Ie.current.useLayoutEffect(t,e)};L.useMemo=function(t,e){return Ie.current.useMemo(t,e)};L.useReducer=function(t,e,n){return Ie.current.useReducer(t,e,n)};L.useRef=function(t){return Ie.current.useRef(t)};L.useState=function(t){return Ie.current.useState(t)};L.useSyncExternalStore=function(t,e,n){return Ie.current.useSyncExternalStore(t,e,n)};L.useTransition=function(){return Ie.current.useTransition()};L.version="18.2.0";Af.exports=L;var ti=Af.exports;const c_=Kg(ti);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d_=ti,f_=Symbol.for("react.element"),h_=Symbol.for("react.fragment"),p_=Object.prototype.hasOwnProperty,m_=d_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g_={key:!0,ref:!0,__self:!0,__source:!0};function Uf(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)p_.call(e,r)&&!g_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:f_,type:t,key:s,ref:o,props:i,_owner:m_.current}}ao.Fragment=h_;ao.jsx=Uf;ao.jsxs=Uf;Pf.exports=ao;var B=Pf.exports,kl={},Bf={exports:{}},je={},jf={exports:{}},$f={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,P){var A=I.length;I.push(P);e:for(;0<A;){var te=A-1>>>1,le=I[te];if(0<i(le,P))I[te]=P,I[A]=le,A=te;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var P=I[0],A=I.pop();if(A!==P){I[0]=A;e:for(var te=0,le=I.length,Bi=le>>>1;te<Bi;){var tn=2*(te+1)-1,bo=I[tn],nn=tn+1,ji=I[nn];if(0>i(bo,A))nn<le&&0>i(ji,bo)?(I[te]=ji,I[nn]=A,te=nn):(I[te]=bo,I[tn]=A,te=tn);else if(nn<le&&0>i(ji,A))I[te]=ji,I[nn]=A,te=nn;else break e}}return P}function i(I,P){var A=I.sortIndex-P.sortIndex;return A!==0?A:I.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,f=3,g=!1,_=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(I){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=I)r(u),P.sortIndex=P.expirationTime,e(a,P);else break;P=n(u)}}function y(I){if(v=!1,m(I),!_)if(n(a)!==null)_=!0,Fo(S);else{var P=n(u);P!==null&&zo(y,P.startTime-I)}}function S(I,P){_=!1,v&&(v=!1,p(N),N=-1),g=!0;var A=f;try{for(m(P),c=n(a);c!==null&&(!(c.expirationTime>P)||I&&!Ye());){var te=c.callback;if(typeof te=="function"){c.callback=null,f=c.priorityLevel;var le=te(c.expirationTime<=P);P=t.unstable_now(),typeof le=="function"?c.callback=le:c===n(a)&&r(a),m(P)}else r(a);c=n(a)}if(c!==null)var Bi=!0;else{var tn=n(u);tn!==null&&zo(y,tn.startTime-P),Bi=!1}return Bi}finally{c=null,f=A,g=!1}}var k=!1,T=null,N=-1,ee=5,F=-1;function Ye(){return!(t.unstable_now()-F<ee)}function Sr(){if(T!==null){var I=t.unstable_now();F=I;var P=!0;try{P=T(!0,I)}finally{P?Ir():(k=!1,T=null)}}else k=!1}var Ir;if(typeof h=="function")Ir=function(){h(Sr)};else if(typeof MessageChannel<"u"){var _c=new MessageChannel,Qg=_c.port2;_c.port1.onmessage=Sr,Ir=function(){Qg.postMessage(null)}}else Ir=function(){x(Sr,0)};function Fo(I){T=I,k||(k=!0,Ir())}function zo(I,P){N=x(function(){I(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,Fo(S))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var A=f;f=P;try{return I()}finally{f=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,P){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var A=f;f=I;try{return P()}finally{f=A}},t.unstable_scheduleCallback=function(I,P,A){var te=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?te+A:te):A=te,I){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=A+le,I={id:d++,callback:P,priorityLevel:I,startTime:A,expirationTime:le,sortIndex:-1},A>te?(I.sortIndex=A,e(u,I),n(a)===null&&I===n(u)&&(v?(p(N),N=-1):v=!0,zo(y,A-te))):(I.sortIndex=le,e(a,I),_||g||(_=!0,Fo(S))),I},t.unstable_shouldYield=Ye,t.unstable_wrapCallback=function(I){var P=f;return function(){var A=f;f=P;try{return I.apply(this,arguments)}finally{f=A}}}})($f);jf.exports=$f;var __=jf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf=ti,Be=__;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vf=new Set,ni={};function Rn(t,e){sr(t,e),sr(t+"Capture",e)}function sr(t,e){for(ni[t]=e,t=0;t<e.length;t++)Vf.add(e[t])}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tl=Object.prototype.hasOwnProperty,y_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ec={},Cc={};function v_(t){return Tl.call(Cc,t)?!0:Tl.call(Ec,t)?!1:y_.test(t)?Cc[t]=!0:(Ec[t]=!0,!1)}function w_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E_(t,e,n,r){if(e===null||typeof e>"u"||w_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ke(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){me[t]=new ke(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];me[e]=new ke(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){me[t]=new ke(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){me[t]=new ke(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){me[t]=new ke(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){me[t]=new ke(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){me[t]=new ke(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){me[t]=new ke(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){me[t]=new ke(t,5,!1,t.toLowerCase(),null,!1,!1)});var $a=/[\-:]([a-z])/g;function Wa(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($a,Wa);me[e]=new ke(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($a,Wa);me[e]=new ke(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($a,Wa);me[e]=new ke(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){me[t]=new ke(t,1,!1,t.toLowerCase(),null,!1,!1)});me.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){me[t]=new ke(t,1,!1,t.toLowerCase(),null,!0,!0)});function Va(t,e,n,r){var i=me.hasOwnProperty(e)?me[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(E_(e,n,i,r)&&(n=null),r||i===null?v_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Tt=Wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wi=Symbol.for("react.element"),Ln=Symbol.for("react.portal"),Fn=Symbol.for("react.fragment"),Ha=Symbol.for("react.strict_mode"),Nl=Symbol.for("react.profiler"),Hf=Symbol.for("react.provider"),Gf=Symbol.for("react.context"),Ga=Symbol.for("react.forward_ref"),Rl=Symbol.for("react.suspense"),xl=Symbol.for("react.suspense_list"),Qa=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),Qf=Symbol.for("react.offscreen"),Sc=Symbol.iterator;function kr(t){return t===null||typeof t!="object"?null:(t=Sc&&t[Sc]||t["@@iterator"],typeof t=="function"?t:null)}var X=Object.assign,Bo;function zr(t){if(Bo===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bo=e&&e[1]||""}return`
`+Bo+t}var jo=!1;function $o(t,e){if(!t||jo)return"";jo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{jo=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zr(t):""}function C_(t){switch(t.tag){case 5:return zr(t.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 2:case 15:return t=$o(t.type,!1),t;case 11:return t=$o(t.type.render,!1),t;case 1:return t=$o(t.type,!0),t;default:return""}}function Pl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Fn:return"Fragment";case Ln:return"Portal";case Nl:return"Profiler";case Ha:return"StrictMode";case Rl:return"Suspense";case xl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Gf:return(t.displayName||"Context")+".Consumer";case Hf:return(t._context.displayName||"Context")+".Provider";case Ga:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qa:return e=t.displayName||null,e!==null?e:Pl(t.type)||"Memo";case Pt:e=t._payload,t=t._init;try{return Pl(t(e))}catch{}}return null}function S_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pl(e);case 8:return e===Ha?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function I_(t){var e=Kf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Vi(t){t._valueTracker||(t._valueTracker=I_(t))}function Yf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Kf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vs(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Al(t,e){var n=e.checked;return X({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ic(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qf(t,e){e=e.checked,e!=null&&Va(t,"checked",e,!1)}function Dl(t,e){qf(t,e);var n=Qt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ol(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ol(t,e.type,Qt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ol(t,e,n){(e!=="number"||vs(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var br=Array.isArray;function Yn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ml(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return X({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(br(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qt(n)}}function Xf(t,e){var n=Qt(e.value),r=Qt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Nc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ll(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Hi,Zf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Hi=Hi||document.createElement("div"),Hi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Hi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ri(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k_=["Webkit","ms","Moz","O"];Object.keys(jr).forEach(function(t){k_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),jr[e]=jr[t]})});function eh(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||jr.hasOwnProperty(t)&&jr[t]?(""+e).trim():e+"px"}function th(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=eh(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var T_=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fl(t,e){if(e){if(T_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function zl(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bl=null;function Ka(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ul=null,qn=null,Xn=null;function Rc(t){if(t=Ai(t)){if(typeof Ul!="function")throw Error(w(280));var e=t.stateNode;e&&(e=po(e),Ul(t.stateNode,t.type,e))}}function nh(t){qn?Xn?Xn.push(t):Xn=[t]:qn=t}function rh(){if(qn){var t=qn,e=Xn;if(Xn=qn=null,Rc(t),e)for(t=0;t<e.length;t++)Rc(e[t])}}function ih(t,e){return t(e)}function sh(){}var Wo=!1;function oh(t,e,n){if(Wo)return t(e,n);Wo=!0;try{return ih(t,e,n)}finally{Wo=!1,(qn!==null||Xn!==null)&&(sh(),rh())}}function ii(t,e){var n=t.stateNode;if(n===null)return null;var r=po(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var Bl=!1;if(wt)try{var Tr={};Object.defineProperty(Tr,"passive",{get:function(){Bl=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{Bl=!1}function N_(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var $r=!1,ws=null,Es=!1,jl=null,R_={onError:function(t){$r=!0,ws=t}};function x_(t,e,n,r,i,s,o,l,a){$r=!1,ws=null,N_.apply(R_,arguments)}function P_(t,e,n,r,i,s,o,l,a){if(x_.apply(this,arguments),$r){if($r){var u=ws;$r=!1,ws=null}else throw Error(w(198));Es||(Es=!0,jl=u)}}function xn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function lh(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xc(t){if(xn(t)!==t)throw Error(w(188))}function A_(t){var e=t.alternate;if(!e){if(e=xn(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return xc(i),t;if(s===r)return xc(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function ah(t){return t=A_(t),t!==null?uh(t):null}function uh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=uh(t);if(e!==null)return e;t=t.sibling}return null}var ch=Be.unstable_scheduleCallback,Pc=Be.unstable_cancelCallback,D_=Be.unstable_shouldYield,O_=Be.unstable_requestPaint,ne=Be.unstable_now,M_=Be.unstable_getCurrentPriorityLevel,Ya=Be.unstable_ImmediatePriority,dh=Be.unstable_UserBlockingPriority,Cs=Be.unstable_NormalPriority,L_=Be.unstable_LowPriority,fh=Be.unstable_IdlePriority,uo=null,ct=null;function F_(t){if(ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(uo,t,void 0,(t.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:U_,z_=Math.log,b_=Math.LN2;function U_(t){return t>>>=0,t===0?32:31-(z_(t)/b_|0)|0}var Gi=64,Qi=4194304;function Ur(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ss(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ur(l):(s&=o,s!==0&&(r=Ur(s)))}else o=n&~i,o!==0?r=Ur(o):s!==0&&(r=Ur(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rt(e),i=1<<n,r|=t[n],e&=~i;return r}function B_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-rt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=B_(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function $l(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hh(){var t=Gi;return Gi<<=1,!(Gi&4194240)&&(Gi=64),t}function Vo(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function xi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rt(e),t[e]=n}function $_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function qa(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var U=0;function ph(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mh,Xa,gh,_h,yh,Wl=!1,Ki=[],Ft=null,zt=null,bt=null,si=new Map,oi=new Map,Dt=[],W_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ac(t,e){switch(t){case"focusin":case"focusout":Ft=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":bt=null;break;case"pointerover":case"pointerout":si.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":oi.delete(e.pointerId)}}function Nr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ai(e),e!==null&&Xa(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function V_(t,e,n,r,i){switch(e){case"focusin":return Ft=Nr(Ft,t,e,n,r,i),!0;case"dragenter":return zt=Nr(zt,t,e,n,r,i),!0;case"mouseover":return bt=Nr(bt,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return si.set(s,Nr(si.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,oi.set(s,Nr(oi.get(s)||null,t,e,n,r,i)),!0}return!1}function vh(t){var e=an(t.target);if(e!==null){var n=xn(e);if(n!==null){if(e=n.tag,e===13){if(e=lh(n),e!==null){t.blockedOn=e,yh(t.priority,function(){gh(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function us(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);bl=r,n.target.dispatchEvent(r),bl=null}else return e=Ai(n),e!==null&&Xa(e),t.blockedOn=n,!1;e.shift()}return!0}function Dc(t,e,n){us(t)&&n.delete(e)}function H_(){Wl=!1,Ft!==null&&us(Ft)&&(Ft=null),zt!==null&&us(zt)&&(zt=null),bt!==null&&us(bt)&&(bt=null),si.forEach(Dc),oi.forEach(Dc)}function Rr(t,e){t.blockedOn===e&&(t.blockedOn=null,Wl||(Wl=!0,Be.unstable_scheduleCallback(Be.unstable_NormalPriority,H_)))}function li(t){function e(i){return Rr(i,t)}if(0<Ki.length){Rr(Ki[0],t);for(var n=1;n<Ki.length;n++){var r=Ki[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ft!==null&&Rr(Ft,t),zt!==null&&Rr(zt,t),bt!==null&&Rr(bt,t),si.forEach(e),oi.forEach(e),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)vh(n),n.blockedOn===null&&Dt.shift()}var Jn=Tt.ReactCurrentBatchConfig,Is=!0;function G_(t,e,n,r){var i=U,s=Jn.transition;Jn.transition=null;try{U=1,Ja(t,e,n,r)}finally{U=i,Jn.transition=s}}function Q_(t,e,n,r){var i=U,s=Jn.transition;Jn.transition=null;try{U=4,Ja(t,e,n,r)}finally{U=i,Jn.transition=s}}function Ja(t,e,n,r){if(Is){var i=Vl(t,e,n,r);if(i===null)el(t,e,r,ks,n),Ac(t,r);else if(V_(i,t,e,n,r))r.stopPropagation();else if(Ac(t,r),e&4&&-1<W_.indexOf(t)){for(;i!==null;){var s=Ai(i);if(s!==null&&mh(s),s=Vl(t,e,n,r),s===null&&el(t,e,r,ks,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else el(t,e,r,null,n)}}var ks=null;function Vl(t,e,n,r){if(ks=null,t=Ka(r),t=an(t),t!==null)if(e=xn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=lh(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ks=t,null}function wh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(M_()){case Ya:return 1;case dh:return 4;case Cs:case L_:return 16;case fh:return 536870912;default:return 16}default:return 16}}var Mt=null,Za=null,cs=null;function Eh(){if(cs)return cs;var t,e=Za,n=e.length,r,i="value"in Mt?Mt.value:Mt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return cs=i.slice(t,1<r?1-r:void 0)}function ds(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Yi(){return!0}function Oc(){return!1}function $e(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Yi:Oc,this.isPropagationStopped=Oc,this}return X(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yi)},persist:function(){},isPersistent:Yi}),e}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=$e(_r),Pi=X({},_r,{view:0,detail:0}),K_=$e(Pi),Ho,Go,xr,co=X({},Pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xr&&(xr&&t.type==="mousemove"?(Ho=t.screenX-xr.screenX,Go=t.screenY-xr.screenY):Go=Ho=0,xr=t),Ho)},movementY:function(t){return"movementY"in t?t.movementY:Go}}),Mc=$e(co),Y_=X({},co,{dataTransfer:0}),q_=$e(Y_),X_=X({},Pi,{relatedTarget:0}),Qo=$e(X_),J_=X({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),Z_=$e(J_),ey=X({},_r,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ty=$e(ey),ny=X({},_r,{data:0}),Lc=$e(ny),ry={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sy[t])?!!e[t]:!1}function tu(){return oy}var ly=X({},Pi,{key:function(t){if(t.key){var e=ry[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ds(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(t){return t.type==="keypress"?ds(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ds(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ay=$e(ly),uy=X({},co,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fc=$e(uy),cy=X({},Pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),dy=$e(cy),fy=X({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),hy=$e(fy),py=X({},co,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),my=$e(py),gy=[9,13,27,32],nu=wt&&"CompositionEvent"in window,Wr=null;wt&&"documentMode"in document&&(Wr=document.documentMode);var _y=wt&&"TextEvent"in window&&!Wr,Ch=wt&&(!nu||Wr&&8<Wr&&11>=Wr),zc=" ",bc=!1;function Sh(t,e){switch(t){case"keyup":return gy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ih(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var zn=!1;function yy(t,e){switch(t){case"compositionend":return Ih(e);case"keypress":return e.which!==32?null:(bc=!0,zc);case"textInput":return t=e.data,t===zc&&bc?null:t;default:return null}}function vy(t,e){if(zn)return t==="compositionend"||!nu&&Sh(t,e)?(t=Eh(),cs=Za=Mt=null,zn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ch&&e.locale!=="ko"?null:e.data;default:return null}}var wy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wy[t.type]:e==="textarea"}function kh(t,e,n,r){nh(r),e=Ts(e,"onChange"),0<e.length&&(n=new eu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Vr=null,ai=null;function Ey(t){Fh(t,0)}function fo(t){var e=Bn(t);if(Yf(e))return t}function Cy(t,e){if(t==="change")return e}var Th=!1;if(wt){var Ko;if(wt){var Yo="oninput"in document;if(!Yo){var Bc=document.createElement("div");Bc.setAttribute("oninput","return;"),Yo=typeof Bc.oninput=="function"}Ko=Yo}else Ko=!1;Th=Ko&&(!document.documentMode||9<document.documentMode)}function jc(){Vr&&(Vr.detachEvent("onpropertychange",Nh),ai=Vr=null)}function Nh(t){if(t.propertyName==="value"&&fo(ai)){var e=[];kh(e,ai,t,Ka(t)),oh(Ey,e)}}function Sy(t,e,n){t==="focusin"?(jc(),Vr=e,ai=n,Vr.attachEvent("onpropertychange",Nh)):t==="focusout"&&jc()}function Iy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fo(ai)}function ky(t,e){if(t==="click")return fo(e)}function Ty(t,e){if(t==="input"||t==="change")return fo(e)}function Ny(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ot=typeof Object.is=="function"?Object.is:Ny;function ui(t,e){if(ot(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Tl.call(e,i)||!ot(t[i],e[i]))return!1}return!0}function $c(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wc(t,e){var n=$c(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=$c(n)}}function Rh(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rh(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xh(){for(var t=window,e=vs();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vs(t.document)}return e}function ru(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Ry(t){var e=xh(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Rh(n.ownerDocument.documentElement,n)){if(r!==null&&ru(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Wc(n,s);var o=Wc(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xy=wt&&"documentMode"in document&&11>=document.documentMode,bn=null,Hl=null,Hr=null,Gl=!1;function Vc(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gl||bn==null||bn!==vs(r)||(r=bn,"selectionStart"in r&&ru(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&ui(Hr,r)||(Hr=r,r=Ts(Hl,"onSelect"),0<r.length&&(e=new eu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=bn)))}function qi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Un={animationend:qi("Animation","AnimationEnd"),animationiteration:qi("Animation","AnimationIteration"),animationstart:qi("Animation","AnimationStart"),transitionend:qi("Transition","TransitionEnd")},qo={},Ph={};wt&&(Ph=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function ho(t){if(qo[t])return qo[t];if(!Un[t])return t;var e=Un[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ph)return qo[t]=e[n];return t}var Ah=ho("animationend"),Dh=ho("animationiteration"),Oh=ho("animationstart"),Mh=ho("transitionend"),Lh=new Map,Hc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(t,e){Lh.set(t,e),Rn(e,[t])}for(var Xo=0;Xo<Hc.length;Xo++){var Jo=Hc[Xo],Py=Jo.toLowerCase(),Ay=Jo[0].toUpperCase()+Jo.slice(1);Jt(Py,"on"+Ay)}Jt(Ah,"onAnimationEnd");Jt(Dh,"onAnimationIteration");Jt(Oh,"onAnimationStart");Jt("dblclick","onDoubleClick");Jt("focusin","onFocus");Jt("focusout","onBlur");Jt(Mh,"onTransitionEnd");sr("onMouseEnter",["mouseout","mouseover"]);sr("onMouseLeave",["mouseout","mouseover"]);sr("onPointerEnter",["pointerout","pointerover"]);sr("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function Gc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,P_(r,e,void 0,t),t.currentTarget=null}function Fh(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Gc(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Gc(i,l,u),s=a}}}if(Es)throw t=jl,Es=!1,jl=null,t}function H(t,e){var n=e[Xl];n===void 0&&(n=e[Xl]=new Set);var r=t+"__bubble";n.has(r)||(zh(e,t,2,!1),n.add(r))}function Zo(t,e,n){var r=0;e&&(r|=4),zh(n,t,r,e)}var Xi="_reactListening"+Math.random().toString(36).slice(2);function ci(t){if(!t[Xi]){t[Xi]=!0,Vf.forEach(function(n){n!=="selectionchange"&&(Dy.has(n)||Zo(n,!1,t),Zo(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xi]||(e[Xi]=!0,Zo("selectionchange",!1,e))}}function zh(t,e,n,r){switch(wh(e)){case 1:var i=G_;break;case 4:i=Q_;break;default:i=Ja}n=i.bind(null,e,n,t),i=void 0,!Bl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function el(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=an(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}oh(function(){var u=s,d=Ka(n),c=[];e:{var f=Lh.get(t);if(f!==void 0){var g=eu,_=t;switch(t){case"keypress":if(ds(n)===0)break e;case"keydown":case"keyup":g=ay;break;case"focusin":_="focus",g=Qo;break;case"focusout":_="blur",g=Qo;break;case"beforeblur":case"afterblur":g=Qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Mc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=q_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=dy;break;case Ah:case Dh:case Oh:g=Z_;break;case Mh:g=hy;break;case"scroll":g=K_;break;case"wheel":g=my;break;case"copy":case"cut":case"paste":g=ty;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Fc}var v=(e&4)!==0,x=!v&&t==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var h=u,m;h!==null;){m=h;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=ii(h,p),y!=null&&v.push(di(h,y,m)))),x)break;h=h.return}0<v.length&&(f=new g(f,_,null,n,d),c.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==bl&&(_=n.relatedTarget||n.fromElement)&&(an(_)||_[Et]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?an(_):null,_!==null&&(x=xn(_),_!==x||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=Mc,y="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(v=Fc,y="onPointerLeave",p="onPointerEnter",h="pointer"),x=g==null?f:Bn(g),m=_==null?f:Bn(_),f=new v(y,h+"leave",g,n,d),f.target=x,f.relatedTarget=m,y=null,an(d)===u&&(v=new v(p,h+"enter",_,n,d),v.target=m,v.relatedTarget=x,y=v),x=y,g&&_)t:{for(v=g,p=_,h=0,m=v;m;m=On(m))h++;for(m=0,y=p;y;y=On(y))m++;for(;0<h-m;)v=On(v),h--;for(;0<m-h;)p=On(p),m--;for(;h--;){if(v===p||p!==null&&v===p.alternate)break t;v=On(v),p=On(p)}v=null}else v=null;g!==null&&Qc(c,f,g,v,!1),_!==null&&x!==null&&Qc(c,x,_,v,!0)}}e:{if(f=u?Bn(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=Cy;else if(Uc(f))if(Th)S=Ty;else{S=Iy;var k=Sy}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=ky);if(S&&(S=S(t,u))){kh(c,S,n,d);break e}k&&k(t,f,u),t==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&Ol(f,"number",f.value)}switch(k=u?Bn(u):window,t){case"focusin":(Uc(k)||k.contentEditable==="true")&&(bn=k,Hl=u,Hr=null);break;case"focusout":Hr=Hl=bn=null;break;case"mousedown":Gl=!0;break;case"contextmenu":case"mouseup":case"dragend":Gl=!1,Vc(c,n,d);break;case"selectionchange":if(xy)break;case"keydown":case"keyup":Vc(c,n,d)}var T;if(nu)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else zn?Sh(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Ch&&n.locale!=="ko"&&(zn||N!=="onCompositionStart"?N==="onCompositionEnd"&&zn&&(T=Eh()):(Mt=d,Za="value"in Mt?Mt.value:Mt.textContent,zn=!0)),k=Ts(u,N),0<k.length&&(N=new Lc(N,t,null,n,d),c.push({event:N,listeners:k}),T?N.data=T:(T=Ih(n),T!==null&&(N.data=T)))),(T=_y?yy(t,n):vy(t,n))&&(u=Ts(u,"onBeforeInput"),0<u.length&&(d=new Lc("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=T))}Fh(c,e)})}function di(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ts(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ii(t,n),s!=null&&r.unshift(di(t,s,i)),s=ii(t,e),s!=null&&r.push(di(t,s,i))),t=t.return}return r}function On(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qc(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=ii(n,s),a!=null&&o.unshift(di(n,a,l))):i||(a=ii(n,s),a!=null&&o.push(di(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Oy=/\r\n?/g,My=/\u0000|\uFFFD/g;function Kc(t){return(typeof t=="string"?t:""+t).replace(Oy,`
`).replace(My,"")}function Ji(t,e,n){if(e=Kc(e),Kc(t)!==e&&n)throw Error(w(425))}function Ns(){}var Ql=null,Kl=null;function Yl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ql=typeof setTimeout=="function"?setTimeout:void 0,Ly=typeof clearTimeout=="function"?clearTimeout:void 0,Yc=typeof Promise=="function"?Promise:void 0,Fy=typeof queueMicrotask=="function"?queueMicrotask:typeof Yc<"u"?function(t){return Yc.resolve(null).then(t).catch(zy)}:ql;function zy(t){setTimeout(function(){throw t})}function tl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),li(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);li(e)}function Ut(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var yr=Math.random().toString(36).slice(2),ut="__reactFiber$"+yr,fi="__reactProps$"+yr,Et="__reactContainer$"+yr,Xl="__reactEvents$"+yr,by="__reactListeners$"+yr,Uy="__reactHandles$"+yr;function an(t){var e=t[ut];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Et]||n[ut]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qc(t);t!==null;){if(n=t[ut])return n;t=qc(t)}return e}t=n,n=t.parentNode}return null}function Ai(t){return t=t[ut]||t[Et],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function po(t){return t[fi]||null}var Jl=[],jn=-1;function Zt(t){return{current:t}}function Q(t){0>jn||(t.current=Jl[jn],Jl[jn]=null,jn--)}function V(t,e){jn++,Jl[jn]=t.current,t.current=e}var Kt={},Ee=Zt(Kt),Pe=Zt(!1),gn=Kt;function or(t,e){var n=t.type.contextTypes;if(!n)return Kt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(t){return t=t.childContextTypes,t!=null}function Rs(){Q(Pe),Q(Ee)}function Xc(t,e,n){if(Ee.current!==Kt)throw Error(w(168));V(Ee,e),V(Pe,n)}function bh(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,S_(t)||"Unknown",i));return X({},n,r)}function xs(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kt,gn=Ee.current,V(Ee,t),V(Pe,Pe.current),!0}function Jc(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=bh(t,e,gn),r.__reactInternalMemoizedMergedChildContext=t,Q(Pe),Q(Ee),V(Ee,t)):Q(Pe),V(Pe,n)}var pt=null,mo=!1,nl=!1;function Uh(t){pt===null?pt=[t]:pt.push(t)}function By(t){mo=!0,Uh(t)}function en(){if(!nl&&pt!==null){nl=!0;var t=0,e=U;try{var n=pt;for(U=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}pt=null,mo=!1}catch(i){throw pt!==null&&(pt=pt.slice(t+1)),ch(Ya,en),i}finally{U=e,nl=!1}}return null}var $n=[],Wn=0,Ps=null,As=0,We=[],Ve=0,_n=null,mt=1,gt="";function rn(t,e){$n[Wn++]=As,$n[Wn++]=Ps,Ps=t,As=e}function Bh(t,e,n){We[Ve++]=mt,We[Ve++]=gt,We[Ve++]=_n,_n=t;var r=mt;t=gt;var i=32-rt(r)-1;r&=~(1<<i),n+=1;var s=32-rt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mt=1<<32-rt(e)+i|n<<i|r,gt=s+t}else mt=1<<s|n<<i|r,gt=t}function iu(t){t.return!==null&&(rn(t,1),Bh(t,1,0))}function su(t){for(;t===Ps;)Ps=$n[--Wn],$n[Wn]=null,As=$n[--Wn],$n[Wn]=null;for(;t===_n;)_n=We[--Ve],We[Ve]=null,gt=We[--Ve],We[Ve]=null,mt=We[--Ve],We[Ve]=null}var ze=null,Fe=null,K=!1,Ze=null;function jh(t,e){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ze=t,Fe=Ut(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ze=t,Fe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_n!==null?{id:mt,overflow:gt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ze=t,Fe=null,!0):!1;default:return!1}}function Zl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ea(t){if(K){var e=Fe;if(e){var n=e;if(!Zc(t,e)){if(Zl(t))throw Error(w(418));e=Ut(n.nextSibling);var r=ze;e&&Zc(t,e)?jh(r,n):(t.flags=t.flags&-4097|2,K=!1,ze=t)}}else{if(Zl(t))throw Error(w(418));t.flags=t.flags&-4097|2,K=!1,ze=t}}}function ed(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ze=t}function Zi(t){if(t!==ze)return!1;if(!K)return ed(t),K=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yl(t.type,t.memoizedProps)),e&&(e=Fe)){if(Zl(t))throw $h(),Error(w(418));for(;e;)jh(t,e),e=Ut(e.nextSibling)}if(ed(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Fe=Ut(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Fe=null}}else Fe=ze?Ut(t.stateNode.nextSibling):null;return!0}function $h(){for(var t=Fe;t;)t=Ut(t.nextSibling)}function lr(){Fe=ze=null,K=!1}function ou(t){Ze===null?Ze=[t]:Ze.push(t)}var jy=Tt.ReactCurrentBatchConfig;function Xe(t,e){if(t&&t.defaultProps){e=X({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ds=Zt(null),Os=null,Vn=null,lu=null;function au(){lu=Vn=Os=null}function uu(t){var e=Ds.current;Q(Ds),t._currentValue=e}function ta(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Zn(t,e){Os=t,lu=Vn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ne=!0),t.firstContext=null)}function Qe(t){var e=t._currentValue;if(lu!==t)if(t={context:t,memoizedValue:e,next:null},Vn===null){if(Os===null)throw Error(w(308));Vn=t,Os.dependencies={lanes:0,firstContext:t}}else Vn=Vn.next=t;return e}var un=null;function cu(t){un===null?un=[t]:un.push(t)}function Wh(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,cu(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ct(t,r)}function Ct(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var At=!1;function du(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ct(t,n)}return i=r.interleaved,i===null?(e.next=e,cu(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ct(t,n)}function fs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qa(t,n)}}function td(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ms(t,e,n,r){var i=t.updateQueue;At=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var f=l.lane,g=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(f=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){c=_.call(g,c,f);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,f=typeof _=="function"?_.call(g,c,f):_,f==null)break e;c=X({},c,f);break e;case 2:At=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,a=c):d=d.next=g,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);vn|=o,t.lanes=o,t.memoizedState=c}}function nd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var Hh=new Wf.Component().refs;function na(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:X({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var go={isMounted:function(t){return(t=t._reactInternals)?xn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Se(),i=$t(t),s=yt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Bt(t,s,i),e!==null&&(it(e,t,i,r),fs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Se(),i=$t(t),s=yt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bt(t,s,i),e!==null&&(it(e,t,i,r),fs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Se(),r=$t(t),i=yt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Bt(t,i,r),e!==null&&(it(e,t,r,n),fs(e,t,r))}};function rd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ui(n,r)||!ui(i,s):!0}function Gh(t,e,n){var r=!1,i=Kt,s=e.contextType;return typeof s=="object"&&s!==null?s=Qe(s):(i=Ae(e)?gn:Ee.current,r=e.contextTypes,s=(r=r!=null)?or(t,i):Kt),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=go,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function id(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&go.enqueueReplaceState(e,e.state,null)}function ra(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Hh,du(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Qe(s):(s=Ae(e)?gn:Ee.current,i.context=or(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(na(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&go.enqueueReplaceState(i,i.state,null),Ms(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Pr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Hh&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function es(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sd(t){var e=t._init;return e(t._payload)}function Qh(t){function e(p,h){if(t){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Wt(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,h,m,y){return h===null||h.tag!==6?(h=ul(m,p.mode,y),h.return=p,h):(h=i(h,m),h.return=p,h)}function a(p,h,m,y){var S=m.type;return S===Fn?d(p,h,m.props.children,y,m.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Pt&&sd(S)===h.type)?(y=i(h,m.props),y.ref=Pr(p,h,m),y.return=p,y):(y=ys(m.type,m.key,m.props,null,p.mode,y),y.ref=Pr(p,h,m),y.return=p,y)}function u(p,h,m,y){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=cl(m,p.mode,y),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function d(p,h,m,y,S){return h===null||h.tag!==7?(h=pn(m,p.mode,y,S),h.return=p,h):(h=i(h,m),h.return=p,h)}function c(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ul(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Wi:return m=ys(h.type,h.key,h.props,null,p.mode,m),m.ref=Pr(p,null,h),m.return=p,m;case Ln:return h=cl(h,p.mode,m),h.return=p,h;case Pt:var y=h._init;return c(p,y(h._payload),m)}if(br(h)||kr(h))return h=pn(h,p.mode,m,null),h.return=p,h;es(p,h)}return null}function f(p,h,m,y){var S=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:l(p,h,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Wi:return m.key===S?a(p,h,m,y):null;case Ln:return m.key===S?u(p,h,m,y):null;case Pt:return S=m._init,f(p,h,S(m._payload),y)}if(br(m)||kr(m))return S!==null?null:d(p,h,m,y,null);es(p,m)}return null}function g(p,h,m,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,l(h,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Wi:return p=p.get(y.key===null?m:y.key)||null,a(h,p,y,S);case Ln:return p=p.get(y.key===null?m:y.key)||null,u(h,p,y,S);case Pt:var k=y._init;return g(p,h,m,k(y._payload),S)}if(br(y)||kr(y))return p=p.get(m)||null,d(h,p,y,S,null);es(h,y)}return null}function _(p,h,m,y){for(var S=null,k=null,T=h,N=h=0,ee=null;T!==null&&N<m.length;N++){T.index>N?(ee=T,T=null):ee=T.sibling;var F=f(p,T,m[N],y);if(F===null){T===null&&(T=ee);break}t&&T&&F.alternate===null&&e(p,T),h=s(F,h,N),k===null?S=F:k.sibling=F,k=F,T=ee}if(N===m.length)return n(p,T),K&&rn(p,N),S;if(T===null){for(;N<m.length;N++)T=c(p,m[N],y),T!==null&&(h=s(T,h,N),k===null?S=T:k.sibling=T,k=T);return K&&rn(p,N),S}for(T=r(p,T);N<m.length;N++)ee=g(T,p,N,m[N],y),ee!==null&&(t&&ee.alternate!==null&&T.delete(ee.key===null?N:ee.key),h=s(ee,h,N),k===null?S=ee:k.sibling=ee,k=ee);return t&&T.forEach(function(Ye){return e(p,Ye)}),K&&rn(p,N),S}function v(p,h,m,y){var S=kr(m);if(typeof S!="function")throw Error(w(150));if(m=S.call(m),m==null)throw Error(w(151));for(var k=S=null,T=h,N=h=0,ee=null,F=m.next();T!==null&&!F.done;N++,F=m.next()){T.index>N?(ee=T,T=null):ee=T.sibling;var Ye=f(p,T,F.value,y);if(Ye===null){T===null&&(T=ee);break}t&&T&&Ye.alternate===null&&e(p,T),h=s(Ye,h,N),k===null?S=Ye:k.sibling=Ye,k=Ye,T=ee}if(F.done)return n(p,T),K&&rn(p,N),S;if(T===null){for(;!F.done;N++,F=m.next())F=c(p,F.value,y),F!==null&&(h=s(F,h,N),k===null?S=F:k.sibling=F,k=F);return K&&rn(p,N),S}for(T=r(p,T);!F.done;N++,F=m.next())F=g(T,p,N,F.value,y),F!==null&&(t&&F.alternate!==null&&T.delete(F.key===null?N:F.key),h=s(F,h,N),k===null?S=F:k.sibling=F,k=F);return t&&T.forEach(function(Sr){return e(p,Sr)}),K&&rn(p,N),S}function x(p,h,m,y){if(typeof m=="object"&&m!==null&&m.type===Fn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Wi:e:{for(var S=m.key,k=h;k!==null;){if(k.key===S){if(S=m.type,S===Fn){if(k.tag===7){n(p,k.sibling),h=i(k,m.props.children),h.return=p,p=h;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Pt&&sd(S)===k.type){n(p,k.sibling),h=i(k,m.props),h.ref=Pr(p,k,m),h.return=p,p=h;break e}n(p,k);break}else e(p,k);k=k.sibling}m.type===Fn?(h=pn(m.props.children,p.mode,y,m.key),h.return=p,p=h):(y=ys(m.type,m.key,m.props,null,p.mode,y),y.ref=Pr(p,h,m),y.return=p,p=y)}return o(p);case Ln:e:{for(k=m.key;h!==null;){if(h.key===k)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=cl(m,p.mode,y),h.return=p,p=h}return o(p);case Pt:return k=m._init,x(p,h,k(m._payload),y)}if(br(m))return _(p,h,m,y);if(kr(m))return v(p,h,m,y);es(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=ul(m,p.mode,y),h.return=p,p=h),o(p)):n(p,h)}return x}var ar=Qh(!0),Kh=Qh(!1),Di={},dt=Zt(Di),hi=Zt(Di),pi=Zt(Di);function cn(t){if(t===Di)throw Error(w(174));return t}function fu(t,e){switch(V(pi,e),V(hi,t),V(dt,Di),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ll(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ll(e,t)}Q(dt),V(dt,e)}function ur(){Q(dt),Q(hi),Q(pi)}function Yh(t){cn(pi.current);var e=cn(dt.current),n=Ll(e,t.type);e!==n&&(V(hi,t),V(dt,n))}function hu(t){hi.current===t&&(Q(dt),Q(hi))}var Y=Zt(0);function Ls(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rl=[];function pu(){for(var t=0;t<rl.length;t++)rl[t]._workInProgressVersionPrimary=null;rl.length=0}var hs=Tt.ReactCurrentDispatcher,il=Tt.ReactCurrentBatchConfig,yn=0,q=null,ie=null,ue=null,Fs=!1,Gr=!1,mi=0,$y=0;function ge(){throw Error(w(321))}function mu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ot(t[n],e[n]))return!1;return!0}function gu(t,e,n,r,i,s){if(yn=s,q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hs.current=t===null||t.memoizedState===null?Gy:Qy,t=n(r,i),Gr){s=0;do{if(Gr=!1,mi=0,25<=s)throw Error(w(301));s+=1,ue=ie=null,e.updateQueue=null,hs.current=Ky,t=n(r,i)}while(Gr)}if(hs.current=zs,e=ie!==null&&ie.next!==null,yn=0,ue=ie=q=null,Fs=!1,e)throw Error(w(300));return t}function _u(){var t=mi!==0;return mi=0,t}function at(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?q.memoizedState=ue=t:ue=ue.next=t,ue}function Ke(){if(ie===null){var t=q.alternate;t=t!==null?t.memoizedState:null}else t=ie.next;var e=ue===null?q.memoizedState:ue.next;if(e!==null)ue=e,ie=t;else{if(t===null)throw Error(w(310));ie=t,t={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ue===null?q.memoizedState=ue=t:ue=ue.next=t}return ue}function gi(t,e){return typeof e=="function"?e(t):e}function sl(t){var e=Ke(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((yn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,q.lanes|=d,vn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ot(r,e.memoizedState)||(Ne=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,q.lanes|=s,vn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ol(t){var e=Ke(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ot(s,e.memoizedState)||(Ne=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function qh(){}function Xh(t,e){var n=q,r=Ke(),i=e(),s=!ot(r.memoizedState,i);if(s&&(r.memoizedState=i,Ne=!0),r=r.queue,yu(ep.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,_i(9,Zh.bind(null,n,r,i,e),void 0,null),fe===null)throw Error(w(349));yn&30||Jh(n,e,i)}return i}function Jh(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=q.updateQueue,e===null?(e={lastEffect:null,stores:null},q.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Zh(t,e,n,r){e.value=n,e.getSnapshot=r,tp(e)&&np(t)}function ep(t,e,n){return n(function(){tp(e)&&np(t)})}function tp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ot(t,n)}catch{return!0}}function np(t){var e=Ct(t,1);e!==null&&it(e,t,1,-1)}function od(t){var e=at();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gi,lastRenderedState:t},e.queue=t,t=t.dispatch=Hy.bind(null,q,t),[e.memoizedState,t]}function _i(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=q.updateQueue,e===null?(e={lastEffect:null,stores:null},q.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rp(){return Ke().memoizedState}function ps(t,e,n,r){var i=at();q.flags|=t,i.memoizedState=_i(1|e,n,void 0,r===void 0?null:r)}function _o(t,e,n,r){var i=Ke();r=r===void 0?null:r;var s=void 0;if(ie!==null){var o=ie.memoizedState;if(s=o.destroy,r!==null&&mu(r,o.deps)){i.memoizedState=_i(e,n,s,r);return}}q.flags|=t,i.memoizedState=_i(1|e,n,s,r)}function ld(t,e){return ps(8390656,8,t,e)}function yu(t,e){return _o(2048,8,t,e)}function ip(t,e){return _o(4,2,t,e)}function sp(t,e){return _o(4,4,t,e)}function op(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lp(t,e,n){return n=n!=null?n.concat([t]):null,_o(4,4,op.bind(null,e,t),n)}function vu(){}function ap(t,e){var n=Ke();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function up(t,e){var n=Ke();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cp(t,e,n){return yn&21?(ot(n,e)||(n=hh(),q.lanes|=n,vn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ne=!0),t.memoizedState=n)}function Wy(t,e){var n=U;U=n!==0&&4>n?n:4,t(!0);var r=il.transition;il.transition={};try{t(!1),e()}finally{U=n,il.transition=r}}function dp(){return Ke().memoizedState}function Vy(t,e,n){var r=$t(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fp(t))hp(e,n);else if(n=Wh(t,e,n,r),n!==null){var i=Se();it(n,t,r,i),pp(n,e,r)}}function Hy(t,e,n){var r=$t(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fp(t))hp(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ot(l,o)){var a=e.interleaved;a===null?(i.next=i,cu(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Wh(t,e,i,r),n!==null&&(i=Se(),it(n,t,r,i),pp(n,e,r))}}function fp(t){var e=t.alternate;return t===q||e!==null&&e===q}function hp(t,e){Gr=Fs=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pp(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qa(t,n)}}var zs={readContext:Qe,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Gy={readContext:Qe,useCallback:function(t,e){return at().memoizedState=[t,e===void 0?null:e],t},useContext:Qe,useEffect:ld,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ps(4194308,4,op.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ps(4194308,4,t,e)},useInsertionEffect:function(t,e){return ps(4,2,t,e)},useMemo:function(t,e){var n=at();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=at();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Vy.bind(null,q,t),[r.memoizedState,t]},useRef:function(t){var e=at();return t={current:t},e.memoizedState=t},useState:od,useDebugValue:vu,useDeferredValue:function(t){return at().memoizedState=t},useTransition:function(){var t=od(!1),e=t[0];return t=Wy.bind(null,t[1]),at().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=q,i=at();if(K){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),fe===null)throw Error(w(349));yn&30||Jh(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ld(ep.bind(null,r,s,t),[t]),r.flags|=2048,_i(9,Zh.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=at(),e=fe.identifierPrefix;if(K){var n=gt,r=mt;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=mi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$y++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Qy={readContext:Qe,useCallback:ap,useContext:Qe,useEffect:yu,useImperativeHandle:lp,useInsertionEffect:ip,useLayoutEffect:sp,useMemo:up,useReducer:sl,useRef:rp,useState:function(){return sl(gi)},useDebugValue:vu,useDeferredValue:function(t){var e=Ke();return cp(e,ie.memoizedState,t)},useTransition:function(){var t=sl(gi)[0],e=Ke().memoizedState;return[t,e]},useMutableSource:qh,useSyncExternalStore:Xh,useId:dp,unstable_isNewReconciler:!1},Ky={readContext:Qe,useCallback:ap,useContext:Qe,useEffect:yu,useImperativeHandle:lp,useInsertionEffect:ip,useLayoutEffect:sp,useMemo:up,useReducer:ol,useRef:rp,useState:function(){return ol(gi)},useDebugValue:vu,useDeferredValue:function(t){var e=Ke();return ie===null?e.memoizedState=t:cp(e,ie.memoizedState,t)},useTransition:function(){var t=ol(gi)[0],e=Ke().memoizedState;return[t,e]},useMutableSource:qh,useSyncExternalStore:Xh,useId:dp,unstable_isNewReconciler:!1};function cr(t,e){try{var n="",r=e;do n+=C_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ll(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ia(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Yy=typeof WeakMap=="function"?WeakMap:Map;function mp(t,e,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Us||(Us=!0,pa=r),ia(t,e)},n}function gp(t,e,n){n=yt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ia(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ia(t,e),typeof r!="function"&&(jt===null?jt=new Set([this]):jt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ad(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Yy;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=uv.bind(null,t,e,n),e.then(t,t))}function ud(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function cd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yt(-1,1),e.tag=2,Bt(n,e,1))),n.lanes|=1),t)}var qy=Tt.ReactCurrentOwner,Ne=!1;function Ce(t,e,n,r){e.child=t===null?Kh(e,null,n,r):ar(e,t.child,n,r)}function dd(t,e,n,r,i){n=n.render;var s=e.ref;return Zn(e,i),r=gu(t,e,n,r,s,i),n=_u(),t!==null&&!Ne?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,St(t,e,i)):(K&&n&&iu(e),e.flags|=1,Ce(t,e,r,i),e.child)}function fd(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Nu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_p(t,e,s,r,i)):(t=ys(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ui,n(o,r)&&t.ref===e.ref)return St(t,e,i)}return e.flags|=1,t=Wt(s,r),t.ref=e.ref,t.return=e,e.child=t}function _p(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ui(s,r)&&t.ref===e.ref)if(Ne=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ne=!0);else return e.lanes=t.lanes,St(t,e,i)}return sa(t,e,n,r,i)}function yp(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Gn,Le),Le|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,V(Gn,Le),Le|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,V(Gn,Le),Le|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,V(Gn,Le),Le|=r;return Ce(t,e,i,n),e.child}function vp(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sa(t,e,n,r,i){var s=Ae(n)?gn:Ee.current;return s=or(e,s),Zn(e,i),n=gu(t,e,n,r,s,i),r=_u(),t!==null&&!Ne?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,St(t,e,i)):(K&&r&&iu(e),e.flags|=1,Ce(t,e,n,i),e.child)}function hd(t,e,n,r,i){if(Ae(n)){var s=!0;xs(e)}else s=!1;if(Zn(e,i),e.stateNode===null)ms(t,e),Gh(e,n,r),ra(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qe(u):(u=Ae(n)?gn:Ee.current,u=or(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&id(e,o,r,u),At=!1;var f=e.memoizedState;o.state=f,Ms(e,r,o,i),a=e.memoizedState,l!==r||f!==a||Pe.current||At?(typeof d=="function"&&(na(e,n,d,r),a=e.memoizedState),(l=At||rd(e,n,l,r,f,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Vh(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Xe(e.type,l),o.props=u,c=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Qe(a):(a=Ae(n)?gn:Ee.current,a=or(e,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||f!==a)&&id(e,o,r,a),At=!1,f=e.memoizedState,o.state=f,Ms(e,r,o,i);var _=e.memoizedState;l!==c||f!==_||Pe.current||At?(typeof g=="function"&&(na(e,n,g,r),_=e.memoizedState),(u=At||rd(e,n,u,r,f,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return oa(t,e,n,r,s,i)}function oa(t,e,n,r,i,s){vp(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Jc(e,n,!1),St(t,e,s);r=e.stateNode,qy.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ar(e,t.child,null,s),e.child=ar(e,null,l,s)):Ce(t,e,l,s),e.memoizedState=r.state,i&&Jc(e,n,!0),e.child}function wp(t){var e=t.stateNode;e.pendingContext?Xc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xc(t,e.context,!1),fu(t,e.containerInfo)}function pd(t,e,n,r,i){return lr(),ou(i),e.flags|=256,Ce(t,e,n,r),e.child}var la={dehydrated:null,treeContext:null,retryLane:0};function aa(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ep(t,e,n){var r=e.pendingProps,i=Y.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),V(Y,i&1),t===null)return ea(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wo(o,r,0,null),t=pn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=aa(n),e.memoizedState=la,t):wu(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Xy(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Wt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Wt(l,s):(s=pn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?aa(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=la,r}return s=t.child,t=s.sibling,r=Wt(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function wu(t,e){return e=wo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ts(t,e,n,r){return r!==null&&ou(r),ar(e,t.child,null,n),t=wu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xy(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ll(Error(w(422))),ts(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=wo({mode:"visible",children:r.children},i,0,null),s=pn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ar(e,t.child,null,o),e.child.memoizedState=aa(o),e.memoizedState=la,s);if(!(e.mode&1))return ts(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(w(419)),r=ll(s,r,void 0),ts(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ne||l){if(r=fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ct(t,i),it(r,t,i,-1))}return Tu(),r=ll(Error(w(421))),ts(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=cv.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Fe=Ut(i.nextSibling),ze=e,K=!0,Ze=null,t!==null&&(We[Ve++]=mt,We[Ve++]=gt,We[Ve++]=_n,mt=t.id,gt=t.overflow,_n=e),e=wu(e,r.children),e.flags|=4096,e)}function md(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ta(t.return,e,n)}function al(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Cp(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ce(t,e,r.children,n),r=Y.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&md(t,n,e);else if(t.tag===19)md(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(V(Y,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ls(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),al(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ls(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}al(e,!0,n,null,s);break;case"together":al(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ms(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function St(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=Wt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Jy(t,e,n){switch(e.tag){case 3:wp(e),lr();break;case 5:Yh(e);break;case 1:Ae(e.type)&&xs(e);break;case 4:fu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;V(Ds,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(V(Y,Y.current&1),e.flags|=128,null):n&e.child.childLanes?Ep(t,e,n):(V(Y,Y.current&1),t=St(t,e,n),t!==null?t.sibling:null);V(Y,Y.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Cp(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Y,Y.current),r)break;return null;case 22:case 23:return e.lanes=0,yp(t,e,n)}return St(t,e,n)}var Sp,ua,Ip,kp;Sp=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ua=function(){};Ip=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,cn(dt.current);var s=null;switch(n){case"input":i=Al(t,i),r=Al(t,r),s=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),s=[];break;case"textarea":i=Ml(t,i),r=Ml(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ns)}Fl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ni.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ni.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&H("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};kp=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ar(t,e){if(!K)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Zy(t,e,n){var r=e.pendingProps;switch(su(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(e),null;case 1:return Ae(e.type)&&Rs(),_e(e),null;case 3:return r=e.stateNode,ur(),Q(Pe),Q(Ee),pu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ze!==null&&(_a(Ze),Ze=null))),ua(t,e),_e(e),null;case 5:hu(e);var i=cn(pi.current);if(n=e.type,t!==null&&e.stateNode!=null)Ip(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return _e(e),null}if(t=cn(dt.current),Zi(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ut]=e,r[fi]=s,t=(e.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Br.length;i++)H(Br[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Ic(r,s),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},H("invalid",r);break;case"textarea":Tc(r,s),H("invalid",r)}Fl(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ji(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ji(r.textContent,l,t),i=["children",""+l]):ni.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":Vi(r),kc(r,s,!0);break;case"textarea":Vi(r),Nc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ns)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ut]=e,t[fi]=r,Sp(t,e,!1,!1),e.stateNode=t;e:{switch(o=zl(n,r),n){case"dialog":H("cancel",t),H("close",t),i=r;break;case"iframe":case"object":case"embed":H("load",t),i=r;break;case"video":case"audio":for(i=0;i<Br.length;i++)H(Br[i],t);i=r;break;case"source":H("error",t),i=r;break;case"img":case"image":case"link":H("error",t),H("load",t),i=r;break;case"details":H("toggle",t),i=r;break;case"input":Ic(t,r),i=Al(t,r),H("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),H("invalid",t);break;case"textarea":Tc(t,r),i=Ml(t,r),H("invalid",t);break;default:i=r}Fl(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?th(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Zf(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ri(t,a):typeof a=="number"&&ri(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ni.hasOwnProperty(s)?a!=null&&s==="onScroll"&&H("scroll",t):a!=null&&Va(t,s,a,o))}switch(n){case"input":Vi(t),kc(t,r,!1);break;case"textarea":Vi(t),Nc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qt(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Yn(t,!!r.multiple,s,!1):r.defaultValue!=null&&Yn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ns)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _e(e),null;case 6:if(t&&e.stateNode!=null)kp(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=cn(pi.current),cn(dt.current),Zi(e)){if(r=e.stateNode,n=e.memoizedProps,r[ut]=e,(s=r.nodeValue!==n)&&(t=ze,t!==null))switch(t.tag){case 3:Ji(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ji(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ut]=e,e.stateNode=r}return _e(e),null;case 13:if(Q(Y),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(K&&Fe!==null&&e.mode&1&&!(e.flags&128))$h(),lr(),e.flags|=98560,s=!1;else if(s=Zi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[ut]=e}else lr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_e(e),s=!1}else Ze!==null&&(_a(Ze),Ze=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Y.current&1?oe===0&&(oe=3):Tu())),e.updateQueue!==null&&(e.flags|=4),_e(e),null);case 4:return ur(),ua(t,e),t===null&&ci(e.stateNode.containerInfo),_e(e),null;case 10:return uu(e.type._context),_e(e),null;case 17:return Ae(e.type)&&Rs(),_e(e),null;case 19:if(Q(Y),s=e.memoizedState,s===null)return _e(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ar(s,!1);else{if(oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ls(t),o!==null){for(e.flags|=128,Ar(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return V(Y,Y.current&1|2),e.child}t=t.sibling}s.tail!==null&&ne()>dr&&(e.flags|=128,r=!0,Ar(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ls(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ar(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!K)return _e(e),null}else 2*ne()-s.renderingStartTime>dr&&n!==1073741824&&(e.flags|=128,r=!0,Ar(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ne(),e.sibling=null,n=Y.current,V(Y,r?n&1|2:n&1),e):(_e(e),null);case 22:case 23:return ku(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Le&1073741824&&(_e(e),e.subtreeFlags&6&&(e.flags|=8192)):_e(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function ev(t,e){switch(su(e),e.tag){case 1:return Ae(e.type)&&Rs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ur(),Q(Pe),Q(Ee),pu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return hu(e),null;case 13:if(Q(Y),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));lr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(Y),null;case 4:return ur(),null;case 10:return uu(e.type._context),null;case 22:case 23:return ku(),null;case 24:return null;default:return null}}var ns=!1,ye=!1,tv=typeof WeakSet=="function"?WeakSet:Set,C=null;function Hn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(t,e,r)}else n.current=null}function ca(t,e,n){try{n()}catch(r){J(t,e,r)}}var gd=!1;function nv(t,e){if(Ql=Is,t=xh(),ru(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,f=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)f=c,c=g;for(;;){if(c===t)break t;if(f===n&&++u===i&&(l=o),f===s&&++d===r&&(a=o),(g=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kl={focusedElem:t,selectionRange:n},Is=!1,C=e;C!==null;)if(e=C,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,C=t;else for(;C!==null;){e=C;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,x=_.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Xe(e.type,v),x);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){J(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,C=t;break}C=e.return}return _=gd,gd=!1,_}function Qr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ca(e,n,s)}i=i.next}while(i!==r)}}function yo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function da(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Tp(t){var e=t.alternate;e!==null&&(t.alternate=null,Tp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ut],delete e[fi],delete e[Xl],delete e[by],delete e[Uy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Np(t){return t.tag===5||t.tag===3||t.tag===4}function _d(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Np(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ns));else if(r!==4&&(t=t.child,t!==null))for(fa(t,e,n),t=t.sibling;t!==null;)fa(t,e,n),t=t.sibling}function ha(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ha(t,e,n),t=t.sibling;t!==null;)ha(t,e,n),t=t.sibling}var he=null,Je=!1;function xt(t,e,n){for(n=n.child;n!==null;)Rp(t,e,n),n=n.sibling}function Rp(t,e,n){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(uo,n)}catch{}switch(n.tag){case 5:ye||Hn(n,e);case 6:var r=he,i=Je;he=null,xt(t,e,n),he=r,Je=i,he!==null&&(Je?(t=he,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Je?(t=he,n=n.stateNode,t.nodeType===8?tl(t.parentNode,n):t.nodeType===1&&tl(t,n),li(t)):tl(he,n.stateNode));break;case 4:r=he,i=Je,he=n.stateNode.containerInfo,Je=!0,xt(t,e,n),he=r,Je=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ca(n,e,o),i=i.next}while(i!==r)}xt(t,e,n);break;case 1:if(!ye&&(Hn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){J(n,e,l)}xt(t,e,n);break;case 21:xt(t,e,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,xt(t,e,n),ye=r):xt(t,e,n);break;default:xt(t,e,n)}}function yd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tv),e.forEach(function(r){var i=dv.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qe(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:he=l.stateNode,Je=!1;break e;case 3:he=l.stateNode.containerInfo,Je=!0;break e;case 4:he=l.stateNode.containerInfo,Je=!0;break e}l=l.return}if(he===null)throw Error(w(160));Rp(s,o,i),he=null,Je=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){J(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xp(e,t),e=e.sibling}function xp(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qe(e,t),lt(t),r&4){try{Qr(3,t,t.return),yo(3,t)}catch(v){J(t,t.return,v)}try{Qr(5,t,t.return)}catch(v){J(t,t.return,v)}}break;case 1:qe(e,t),lt(t),r&512&&n!==null&&Hn(n,n.return);break;case 5:if(qe(e,t),lt(t),r&512&&n!==null&&Hn(n,n.return),t.flags&32){var i=t.stateNode;try{ri(i,"")}catch(v){J(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&qf(i,s),zl(l,o);var u=zl(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?th(i,c):d==="dangerouslySetInnerHTML"?Zf(i,c):d==="children"?ri(i,c):Va(i,d,c,u)}switch(l){case"input":Dl(i,s);break;case"textarea":Xf(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Yn(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Yn(i,!!s.multiple,s.defaultValue,!0):Yn(i,!!s.multiple,s.multiple?[]:"",!1))}i[fi]=s}catch(v){J(t,t.return,v)}}break;case 6:if(qe(e,t),lt(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){J(t,t.return,v)}}break;case 3:if(qe(e,t),lt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{li(e.containerInfo)}catch(v){J(t,t.return,v)}break;case 4:qe(e,t),lt(t);break;case 13:qe(e,t),lt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Su=ne())),r&4&&yd(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ye=(u=ye)||d,qe(e,t),ye=u):qe(e,t),lt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(C=t,d=t.child;d!==null;){for(c=C=d;C!==null;){switch(f=C,g=f.child,f.tag){case 0:case 11:case 14:case 15:Qr(4,f,f.return);break;case 1:Hn(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){J(r,n,v)}}break;case 5:Hn(f,f.return);break;case 22:if(f.memoizedState!==null){wd(c);continue}}g!==null?(g.return=f,C=g):wd(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=eh("display",o))}catch(v){J(t,t.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){J(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:qe(e,t),lt(t),r&4&&yd(t);break;case 21:break;default:qe(e,t),lt(t)}}function lt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Np(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ri(i,""),r.flags&=-33);var s=_d(t);ha(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=_d(t);fa(t,l,o);break;default:throw Error(w(161))}}catch(a){J(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rv(t,e,n){C=t,Pp(t)}function Pp(t,e,n){for(var r=(t.mode&1)!==0;C!==null;){var i=C,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ns;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ye;l=ns;var u=ye;if(ns=o,(ye=a)&&!u)for(C=i;C!==null;)o=C,a=o.child,o.tag===22&&o.memoizedState!==null?Ed(i):a!==null?(a.return=o,C=a):Ed(i);for(;s!==null;)C=s,Pp(s),s=s.sibling;C=i,ns=l,ye=u}vd(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,C=s):vd(t)}}function vd(t){for(;C!==null;){var e=C;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ye||yo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Xe(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&nd(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}nd(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&li(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ye||e.flags&512&&da(e)}catch(f){J(e,e.return,f)}}if(e===t){C=null;break}if(n=e.sibling,n!==null){n.return=e.return,C=n;break}C=e.return}}function wd(t){for(;C!==null;){var e=C;if(e===t){C=null;break}var n=e.sibling;if(n!==null){n.return=e.return,C=n;break}C=e.return}}function Ed(t){for(;C!==null;){var e=C;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yo(4,e)}catch(a){J(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){J(e,i,a)}}var s=e.return;try{da(e)}catch(a){J(e,s,a)}break;case 5:var o=e.return;try{da(e)}catch(a){J(e,o,a)}}}catch(a){J(e,e.return,a)}if(e===t){C=null;break}var l=e.sibling;if(l!==null){l.return=e.return,C=l;break}C=e.return}}var iv=Math.ceil,bs=Tt.ReactCurrentDispatcher,Eu=Tt.ReactCurrentOwner,Ge=Tt.ReactCurrentBatchConfig,z=0,fe=null,re=null,pe=0,Le=0,Gn=Zt(0),oe=0,yi=null,vn=0,vo=0,Cu=0,Kr=null,Te=null,Su=0,dr=1/0,ht=null,Us=!1,pa=null,jt=null,rs=!1,Lt=null,Bs=0,Yr=0,ma=null,gs=-1,_s=0;function Se(){return z&6?ne():gs!==-1?gs:gs=ne()}function $t(t){return t.mode&1?z&2&&pe!==0?pe&-pe:jy.transition!==null?(_s===0&&(_s=hh()),_s):(t=U,t!==0||(t=window.event,t=t===void 0?16:wh(t.type)),t):1}function it(t,e,n,r){if(50<Yr)throw Yr=0,ma=null,Error(w(185));xi(t,n,r),(!(z&2)||t!==fe)&&(t===fe&&(!(z&2)&&(vo|=n),oe===4&&Ot(t,pe)),De(t,r),n===1&&z===0&&!(e.mode&1)&&(dr=ne()+500,mo&&en()))}function De(t,e){var n=t.callbackNode;j_(t,e);var r=Ss(t,t===fe?pe:0);if(r===0)n!==null&&Pc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Pc(n),e===1)t.tag===0?By(Cd.bind(null,t)):Uh(Cd.bind(null,t)),Fy(function(){!(z&6)&&en()}),n=null;else{switch(ph(r)){case 1:n=Ya;break;case 4:n=dh;break;case 16:n=Cs;break;case 536870912:n=fh;break;default:n=Cs}n=bp(n,Ap.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ap(t,e){if(gs=-1,_s=0,z&6)throw Error(w(327));var n=t.callbackNode;if(er()&&t.callbackNode!==n)return null;var r=Ss(t,t===fe?pe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=js(t,r);else{e=r;var i=z;z|=2;var s=Op();(fe!==t||pe!==e)&&(ht=null,dr=ne()+500,hn(t,e));do try{lv();break}catch(l){Dp(t,l)}while(!0);au(),bs.current=s,z=i,re!==null?e=0:(fe=null,pe=0,e=oe)}if(e!==0){if(e===2&&(i=$l(t),i!==0&&(r=i,e=ga(t,i))),e===1)throw n=yi,hn(t,0),Ot(t,r),De(t,ne()),n;if(e===6)Ot(t,r);else{if(i=t.current.alternate,!(r&30)&&!sv(i)&&(e=js(t,r),e===2&&(s=$l(t),s!==0&&(r=s,e=ga(t,s))),e===1))throw n=yi,hn(t,0),Ot(t,r),De(t,ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:sn(t,Te,ht);break;case 3:if(Ot(t,r),(r&130023424)===r&&(e=Su+500-ne(),10<e)){if(Ss(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Se(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ql(sn.bind(null,t,Te,ht),e);break}sn(t,Te,ht);break;case 4:if(Ot(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-rt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iv(r/1960))-r,10<r){t.timeoutHandle=ql(sn.bind(null,t,Te,ht),r);break}sn(t,Te,ht);break;case 5:sn(t,Te,ht);break;default:throw Error(w(329))}}}return De(t,ne()),t.callbackNode===n?Ap.bind(null,t):null}function ga(t,e){var n=Kr;return t.current.memoizedState.isDehydrated&&(hn(t,e).flags|=256),t=js(t,e),t!==2&&(e=Te,Te=n,e!==null&&_a(e)),t}function _a(t){Te===null?Te=t:Te.push.apply(Te,t)}function sv(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ot(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ot(t,e){for(e&=~Cu,e&=~vo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rt(e),r=1<<n;t[n]=-1,e&=~r}}function Cd(t){if(z&6)throw Error(w(327));er();var e=Ss(t,0);if(!(e&1))return De(t,ne()),null;var n=js(t,e);if(t.tag!==0&&n===2){var r=$l(t);r!==0&&(e=r,n=ga(t,r))}if(n===1)throw n=yi,hn(t,0),Ot(t,e),De(t,ne()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,sn(t,Te,ht),De(t,ne()),null}function Iu(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(dr=ne()+500,mo&&en())}}function wn(t){Lt!==null&&Lt.tag===0&&!(z&6)&&er();var e=z;z|=1;var n=Ge.transition,r=U;try{if(Ge.transition=null,U=1,t)return t()}finally{U=r,Ge.transition=n,z=e,!(z&6)&&en()}}function ku(){Le=Gn.current,Q(Gn)}function hn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ly(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(su(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Rs();break;case 3:ur(),Q(Pe),Q(Ee),pu();break;case 5:hu(r);break;case 4:ur();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:uu(r.type._context);break;case 22:case 23:ku()}n=n.return}if(fe=t,re=t=Wt(t.current,null),pe=Le=e,oe=0,yi=null,Cu=vo=vn=0,Te=Kr=null,un!==null){for(e=0;e<un.length;e++)if(n=un[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}un=null}return t}function Dp(t,e){do{var n=re;try{if(au(),hs.current=zs,Fs){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fs=!1}if(yn=0,ue=ie=q=null,Gr=!1,mi=0,Eu.current=null,n===null||n.return===null){oe=1,yi=e,re=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=pe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=ud(o);if(g!==null){g.flags&=-257,cd(g,o,l,s,e),g.mode&1&&ad(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if(!(e&1)){ad(s,u,e),Tu();break e}a=Error(w(426))}}else if(K&&l.mode&1){var x=ud(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),cd(x,o,l,s,e),ou(cr(a,l));break e}}s=a=cr(a,l),oe!==4&&(oe=2),Kr===null?Kr=[s]:Kr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=mp(s,a,e);td(s,p);break e;case 1:l=a;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(jt===null||!jt.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=gp(s,l,e);td(s,y);break e}}s=s.return}while(s!==null)}Lp(n)}catch(S){e=S,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Op(){var t=bs.current;return bs.current=zs,t===null?zs:t}function Tu(){(oe===0||oe===3||oe===2)&&(oe=4),fe===null||!(vn&268435455)&&!(vo&268435455)||Ot(fe,pe)}function js(t,e){var n=z;z|=2;var r=Op();(fe!==t||pe!==e)&&(ht=null,hn(t,e));do try{ov();break}catch(i){Dp(t,i)}while(!0);if(au(),z=n,bs.current=r,re!==null)throw Error(w(261));return fe=null,pe=0,oe}function ov(){for(;re!==null;)Mp(re)}function lv(){for(;re!==null&&!D_();)Mp(re)}function Mp(t){var e=zp(t.alternate,t,Le);t.memoizedProps=t.pendingProps,e===null?Lp(t):re=e,Eu.current=null}function Lp(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ev(n,e),n!==null){n.flags&=32767,re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{oe=6,re=null;return}}else if(n=Zy(n,e,Le),n!==null){re=n;return}if(e=e.sibling,e!==null){re=e;return}re=e=t}while(e!==null);oe===0&&(oe=5)}function sn(t,e,n){var r=U,i=Ge.transition;try{Ge.transition=null,U=1,av(t,e,n,r)}finally{Ge.transition=i,U=r}return null}function av(t,e,n,r){do er();while(Lt!==null);if(z&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($_(t,s),t===fe&&(re=fe=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rs||(rs=!0,bp(Cs,function(){return er(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ge.transition,Ge.transition=null;var o=U;U=1;var l=z;z|=4,Eu.current=null,nv(t,n),xp(n,t),Ry(Kl),Is=!!Ql,Kl=Ql=null,t.current=n,rv(n),O_(),z=l,U=o,Ge.transition=s}else t.current=n;if(rs&&(rs=!1,Lt=t,Bs=i),s=t.pendingLanes,s===0&&(jt=null),F_(n.stateNode),De(t,ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Us)throw Us=!1,t=pa,pa=null,t;return Bs&1&&t.tag!==0&&er(),s=t.pendingLanes,s&1?t===ma?Yr++:(Yr=0,ma=t):Yr=0,en(),null}function er(){if(Lt!==null){var t=ph(Bs),e=Ge.transition,n=U;try{if(Ge.transition=null,U=16>t?16:t,Lt===null)var r=!1;else{if(t=Lt,Lt=null,Bs=0,z&6)throw Error(w(331));var i=z;for(z|=4,C=t.current;C!==null;){var s=C,o=s.child;if(C.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(C=u;C!==null;){var d=C;switch(d.tag){case 0:case 11:case 15:Qr(8,d,s)}var c=d.child;if(c!==null)c.return=d,C=c;else for(;C!==null;){d=C;var f=d.sibling,g=d.return;if(Tp(d),d===u){C=null;break}if(f!==null){f.return=g,C=f;break}C=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}C=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,C=o;else e:for(;C!==null;){if(s=C,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qr(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,C=p;break e}C=s.return}}var h=t.current;for(C=h;C!==null;){o=C;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,C=m;else e:for(o=h;C!==null;){if(l=C,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:yo(9,l)}}catch(S){J(l,l.return,S)}if(l===o){C=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,C=y;break e}C=l.return}}if(z=i,en(),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(uo,t)}catch{}r=!0}return r}finally{U=n,Ge.transition=e}}return!1}function Sd(t,e,n){e=cr(n,e),e=mp(t,e,1),t=Bt(t,e,1),e=Se(),t!==null&&(xi(t,1,e),De(t,e))}function J(t,e,n){if(t.tag===3)Sd(t,t,n);else for(;e!==null;){if(e.tag===3){Sd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jt===null||!jt.has(r))){t=cr(n,t),t=gp(e,t,1),e=Bt(e,t,1),t=Se(),e!==null&&(xi(e,1,t),De(e,t));break}}e=e.return}}function uv(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Se(),t.pingedLanes|=t.suspendedLanes&n,fe===t&&(pe&n)===n&&(oe===4||oe===3&&(pe&130023424)===pe&&500>ne()-Su?hn(t,0):Cu|=n),De(t,e)}function Fp(t,e){e===0&&(t.mode&1?(e=Qi,Qi<<=1,!(Qi&130023424)&&(Qi=4194304)):e=1);var n=Se();t=Ct(t,e),t!==null&&(xi(t,e,n),De(t,n))}function cv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fp(t,n)}function dv(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),Fp(t,n)}var zp;zp=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pe.current)Ne=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ne=!1,Jy(t,e,n);Ne=!!(t.flags&131072)}else Ne=!1,K&&e.flags&1048576&&Bh(e,As,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ms(t,e),t=e.pendingProps;var i=or(e,Ee.current);Zn(e,n),i=gu(null,e,r,t,i,n);var s=_u();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ae(r)?(s=!0,xs(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,du(e),i.updater=go,e.stateNode=i,i._reactInternals=e,ra(e,r,t,n),e=oa(null,e,r,!0,s,n)):(e.tag=0,K&&s&&iu(e),Ce(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ms(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=hv(r),t=Xe(r,t),i){case 0:e=sa(null,e,r,t,n);break e;case 1:e=hd(null,e,r,t,n);break e;case 11:e=dd(null,e,r,t,n);break e;case 14:e=fd(null,e,r,Xe(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xe(r,i),sa(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xe(r,i),hd(t,e,r,i,n);case 3:e:{if(wp(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Vh(t,e),Ms(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=cr(Error(w(423)),e),e=pd(t,e,r,n,i);break e}else if(r!==i){i=cr(Error(w(424)),e),e=pd(t,e,r,n,i);break e}else for(Fe=Ut(e.stateNode.containerInfo.firstChild),ze=e,K=!0,Ze=null,n=Kh(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(lr(),r===i){e=St(t,e,n);break e}Ce(t,e,r,n)}e=e.child}return e;case 5:return Yh(e),t===null&&ea(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Yl(r,i)?o=null:s!==null&&Yl(r,s)&&(e.flags|=32),vp(t,e),Ce(t,e,o,n),e.child;case 6:return t===null&&ea(e),null;case 13:return Ep(t,e,n);case 4:return fu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ar(e,null,r,n):Ce(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xe(r,i),dd(t,e,r,i,n);case 7:return Ce(t,e,e.pendingProps,n),e.child;case 8:return Ce(t,e,e.pendingProps.children,n),e.child;case 12:return Ce(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,V(Ds,r._currentValue),r._currentValue=o,s!==null)if(ot(s.value,o)){if(s.children===i.children&&!Pe.current){e=St(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=yt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ta(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ta(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ce(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Zn(e,n),i=Qe(i),r=r(i),e.flags|=1,Ce(t,e,r,n),e.child;case 14:return r=e.type,i=Xe(r,e.pendingProps),i=Xe(r.type,i),fd(t,e,r,i,n);case 15:return _p(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xe(r,i),ms(t,e),e.tag=1,Ae(r)?(t=!0,xs(e)):t=!1,Zn(e,n),Gh(e,r,i),ra(e,r,i,n),oa(null,e,r,!0,t,n);case 19:return Cp(t,e,n);case 22:return yp(t,e,n)}throw Error(w(156,e.tag))};function bp(t,e){return ch(t,e)}function fv(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(t,e,n,r){return new fv(t,e,n,r)}function Nu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function hv(t){if(typeof t=="function")return Nu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ga)return 11;if(t===Qa)return 14}return 2}function Wt(t,e){var n=t.alternate;return n===null?(n=He(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ys(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Nu(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Fn:return pn(n.children,i,s,e);case Ha:o=8,i|=8;break;case Nl:return t=He(12,n,e,i|2),t.elementType=Nl,t.lanes=s,t;case Rl:return t=He(13,n,e,i),t.elementType=Rl,t.lanes=s,t;case xl:return t=He(19,n,e,i),t.elementType=xl,t.lanes=s,t;case Qf:return wo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hf:o=10;break e;case Gf:o=9;break e;case Ga:o=11;break e;case Qa:o=14;break e;case Pt:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=He(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function pn(t,e,n,r){return t=He(7,t,r,e),t.lanes=n,t}function wo(t,e,n,r){return t=He(22,t,r,e),t.elementType=Qf,t.lanes=n,t.stateNode={isHidden:!1},t}function ul(t,e,n){return t=He(6,t,null,e),t.lanes=n,t}function cl(t,e,n){return e=He(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pv(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vo(0),this.expirationTimes=Vo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ru(t,e,n,r,i,s,o,l,a){return t=new pv(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=He(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},du(s),t}function mv(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ln,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Up(t){if(!t)return Kt;t=t._reactInternals;e:{if(xn(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ae(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Ae(n))return bh(t,n,e)}return e}function Bp(t,e,n,r,i,s,o,l,a){return t=Ru(n,r,!0,t,i,s,o,l,a),t.context=Up(null),n=t.current,r=Se(),i=$t(n),s=yt(r,i),s.callback=e??null,Bt(n,s,i),t.current.lanes=i,xi(t,i,r),De(t,r),t}function Eo(t,e,n,r){var i=e.current,s=Se(),o=$t(i);return n=Up(n),e.context===null?e.context=n:e.pendingContext=n,e=yt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Bt(i,e,o),t!==null&&(it(t,i,o,s),fs(t,i,o)),o}function $s(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Id(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xu(t,e){Id(t,e),(t=t.alternate)&&Id(t,e)}function gv(){return null}var jp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Pu(t){this._internalRoot=t}Co.prototype.render=Pu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));Eo(t,e,null,null)};Co.prototype.unmount=Pu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wn(function(){Eo(null,t,null,null)}),e[Et]=null}};function Co(t){this._internalRoot=t}Co.prototype.unstable_scheduleHydration=function(t){if(t){var e=_h();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Dt.length&&e!==0&&e<Dt[n].priority;n++);Dt.splice(n,0,t),n===0&&vh(t)}};function Au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function So(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kd(){}function _v(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=$s(o);s.call(u)}}var o=Bp(e,r,t,0,null,!1,!1,"",kd);return t._reactRootContainer=o,t[Et]=o.current,ci(t.nodeType===8?t.parentNode:t),wn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=$s(a);l.call(u)}}var a=Ru(t,0,!1,null,null,!1,!1,"",kd);return t._reactRootContainer=a,t[Et]=a.current,ci(t.nodeType===8?t.parentNode:t),wn(function(){Eo(e,a,n,r)}),a}function Io(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=$s(o);l.call(a)}}Eo(e,o,t,i)}else o=_v(n,e,t,i,r);return $s(o)}mh=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ur(e.pendingLanes);n!==0&&(qa(e,n|1),De(e,ne()),!(z&6)&&(dr=ne()+500,en()))}break;case 13:wn(function(){var r=Ct(t,1);if(r!==null){var i=Se();it(r,t,1,i)}}),xu(t,1)}};Xa=function(t){if(t.tag===13){var e=Ct(t,134217728);if(e!==null){var n=Se();it(e,t,134217728,n)}xu(t,134217728)}};gh=function(t){if(t.tag===13){var e=$t(t),n=Ct(t,e);if(n!==null){var r=Se();it(n,t,e,r)}xu(t,e)}};_h=function(){return U};yh=function(t,e){var n=U;try{return U=t,e()}finally{U=n}};Ul=function(t,e,n){switch(e){case"input":if(Dl(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=po(r);if(!i)throw Error(w(90));Yf(r),Dl(r,i)}}}break;case"textarea":Xf(t,n);break;case"select":e=n.value,e!=null&&Yn(t,!!n.multiple,e,!1)}};ih=Iu;sh=wn;var yv={usingClientEntryPoint:!1,Events:[Ai,Bn,po,nh,rh,Iu]},Dr={findFiberByHostInstance:an,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vv={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ah(t),t===null?null:t.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||gv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var is=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!is.isDisabled&&is.supportsFiber)try{uo=is.inject(vv),ct=is}catch{}}je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yv;je.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Au(e))throw Error(w(200));return mv(t,e,null,n)};je.createRoot=function(t,e){if(!Au(t))throw Error(w(299));var n=!1,r="",i=jp;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ru(t,1,!1,null,null,n,!1,r,i),t[Et]=e.current,ci(t.nodeType===8?t.parentNode:t),new Pu(e)};je.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=ah(e),t=t===null?null:t.stateNode,t};je.flushSync=function(t){return wn(t)};je.hydrate=function(t,e,n){if(!So(e))throw Error(w(200));return Io(null,t,e,!0,n)};je.hydrateRoot=function(t,e,n){if(!Au(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=jp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Bp(e,null,t,1,n??null,i,!1,s,o),t[Et]=e.current,ci(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Co(e)};je.render=function(t,e,n){if(!So(e))throw Error(w(200));return Io(null,t,e,!1,n)};je.unmountComponentAtNode=function(t){if(!So(t))throw Error(w(40));return t._reactRootContainer?(wn(function(){Io(null,null,t,!1,function(){t._reactRootContainer=null,t[Et]=null})}),!0):!1};je.unstable_batchedUpdates=Iu;je.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!So(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return Io(t,e,n,!1,r)};je.version="18.2.0-next-9e3b772b8-20220608";function $p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($p)}catch(t){console.error(t)}}$p(),Bf.exports=je;var wv=Bf.exports,Td=wv;kl.createRoot=Td.createRoot,kl.hydrateRoot=Td.hydrateRoot;function Ev(t){return B.jsxs("div",{className:"card",children:[B.jsx("img",{className:"card-image",src:t.image}),B.jsx("h2",{children:t.name}),B.jsxs("div",{children:[B.jsx("h4",{className:"texto-h4",children:t.capacity}),B.jsx("h4",{className:"texto-h4",children:t.color})]}),B.jsx("h3",{children:t.price}),B.jsx("p",{children:t.status}),B.jsx("a",{href:"https://api.whatsapp.com/send?phone=+5511982214215&text=Olá,%20tudo%20bem?",target:"_blank",children:B.jsx("button",{children:"Comprar"})})]})}var Nd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw vr(e)},vr=function(t){return new Error("Firebase Database ("+Wp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Cv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Du={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let f=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(f=64)),r.push(n[d],n[c],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Vp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Cv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new Sv;const f=s<<2|l>>4;if(r.push(f),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Sv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hp=function(t){const e=Vp(t);return Du.encodeByteArray(e,!0)},Ws=function(t){return Hp(t).replace(/\./g,"")},ya=function(t){try{return Du.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t){return Gp(void 0,t)}function Gp(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!kv(n)||(t[n]=Gp(t[n],e[n]));return t}function kv(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=()=>Tv().__FIREBASE_DEFAULTS__,Rv=()=>{if(typeof process>"u"||typeof Nd>"u")return;const t=Nd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ya(t[1]);return e&&JSON.parse(e)},Qp=()=>{try{return Nv()||Rv()||xv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pv=t=>{var e,n;return(n=(e=Qp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Av=t=>{const e=Pv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Kp=()=>{var t;return(t=Qp())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ws(JSON.stringify(n)),Ws(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ov())}function Mv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Lv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qp(){return Wp.NODE_ADMIN===!0}function Xp(){try{return typeof indexedDB=="object"}catch{return!1}}function Jp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Fv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zv,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ko.prototype.create)}}class ko{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?bv(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Pn(i,l,r)}}function bv(t,e){return t.replace(Uv,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Uv=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(t){return JSON.parse(t)}function de(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=vi(ya(s[0])||""),n=vi(ya(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Bv=function(t){const e=Zp(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},jv=function(t){const e=Zp(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function fr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Rd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vs(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Hs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(xd(s)&&xd(o)){if(!Hs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const f=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function em(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,E(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},To=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=1e3,Gv=2,Qv=4*60*60*1e3,Kv=.5;function Pd(t,e=Hv,n=Gv){const r=e*Math.pow(n,t),i=Math.round(Kv*r*(Math.random()-.5)*2);return Math.min(Qv,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wr(t){return t&&t._delegate?t._delegate:t}class It{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ou;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xv(e))try{this.getOrInitializeService({instanceIdentifier:on})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=on){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=on){return this.instances.has(e)}getOptions(e=on){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=on){return this.component?this.component.multipleInstances?e:on:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qv(t){return t===on?void 0:t}function Xv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Yv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const Zv={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},e0=$.INFO,t0={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},n0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=t0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mu{constructor(e){this.name=e,this._logLevel=e0,this._logHandler=n0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const r0=(t,e)=>e.some(n=>t instanceof n);let Ad,Dd;function i0(){return Ad||(Ad=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function s0(){return Dd||(Dd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tm=new WeakMap,va=new WeakMap,nm=new WeakMap,dl=new WeakMap,Lu=new WeakMap;function o0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Vt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tm.set(n,t)}).catch(()=>{}),Lu.set(e,t),e}function l0(t){if(va.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});va.set(t,e)}let wa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return va.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function a0(t){wa=t(wa)}function u0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fl(this),e,...n);return nm.set(r,e.sort?e.sort():[e]),Vt(r)}:s0().includes(t)?function(...e){return t.apply(fl(this),e),Vt(tm.get(this))}:function(...e){return Vt(t.apply(fl(this),e))}}function c0(t){return typeof t=="function"?u0(t):(t instanceof IDBTransaction&&l0(t),r0(t,i0())?new Proxy(t,wa):t)}function Vt(t){if(t instanceof IDBRequest)return o0(t);if(dl.has(t))return dl.get(t);const e=c0(t);return e!==t&&(dl.set(t,e),Lu.set(e,t)),e}const fl=t=>Lu.get(t);function rm(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Vt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Vt(o.result),a.oldVersion,a.newVersion,Vt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const d0=["get","getKey","getAll","getAllKeys","count"],f0=["put","add","delete","clear"],hl=new Map;function Od(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hl.get(e))return hl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=f0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||d0.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return hl.set(e,s),s}a0(t=>({...t,get:(e,n,r)=>Od(e,n)||t.get(e,n,r),has:(e,n)=>!!Od(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(p0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function p0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ea="@firebase/app",Md="0.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new Mu("@firebase/app"),m0="@firebase/app-compat",g0="@firebase/analytics-compat",_0="@firebase/analytics",y0="@firebase/app-check-compat",v0="@firebase/app-check",w0="@firebase/auth",E0="@firebase/auth-compat",C0="@firebase/database",S0="@firebase/database-compat",I0="@firebase/functions",k0="@firebase/functions-compat",T0="@firebase/installations",N0="@firebase/installations-compat",R0="@firebase/messaging",x0="@firebase/messaging-compat",P0="@firebase/performance",A0="@firebase/performance-compat",D0="@firebase/remote-config",O0="@firebase/remote-config-compat",M0="@firebase/storage",L0="@firebase/storage-compat",F0="@firebase/firestore",z0="@firebase/firestore-compat",b0="firebase",U0="10.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="[DEFAULT]",B0={[Ea]:"fire-core",[m0]:"fire-core-compat",[_0]:"fire-analytics",[g0]:"fire-analytics-compat",[v0]:"fire-app-check",[y0]:"fire-app-check-compat",[w0]:"fire-auth",[E0]:"fire-auth-compat",[C0]:"fire-rtdb",[S0]:"fire-rtdb-compat",[I0]:"fire-fn",[k0]:"fire-fn-compat",[T0]:"fire-iid",[N0]:"fire-iid-compat",[R0]:"fire-fcm",[x0]:"fire-fcm-compat",[P0]:"fire-perf",[A0]:"fire-perf-compat",[D0]:"fire-rc",[O0]:"fire-rc-compat",[M0]:"fire-gcs",[L0]:"fire-gcs-compat",[F0]:"fire-fst",[z0]:"fire-fst-compat","fire-js":"fire-js",[b0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=new Map,j0=new Map,Sa=new Map;function Ld(t,e){try{t.container.addComponent(e)}catch(n){En.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yt(t){const e=t.name;if(Sa.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;Sa.set(e,t);for(const n of Gs.values())Ld(n,t);for(const n of j0.values())Ld(n,t);return!0}function Oi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new ko("app","Firebase",$0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new It("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=U0;function im(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ca,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ht.create("bad-app-name",{appName:String(i)});if(n||(n=Kp()),!n)throw Ht.create("no-options");const s=Gs.get(i);if(s){if(Hs(n,s.options)&&Hs(r,s.config))return s;throw Ht.create("duplicate-app",{appName:i})}const o=new Jv(i);for(const a of Sa.values())o.addComponent(a);const l=new W0(n,r,o);return Gs.set(i,l),l}function sm(t=Ca){const e=Gs.get(t);if(!e&&t===Ca&&Kp())return im();if(!e)throw Ht.create("no-app",{appName:t});return e}function ft(t,e,n){var r;let i=(r=B0[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(l.join(" "));return}Yt(new It(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0="firebase-heartbeat-database",G0=1,wi="firebase-heartbeat-store";let pl=null;function om(){return pl||(pl=rm(H0,G0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ht.create("idb-open",{originalErrorMessage:t.message})})),pl}async function Q0(t){try{const n=(await om()).transaction(wi),r=await n.objectStore(wi).get(lm(t));return await n.done,r}catch(e){if(e instanceof Pn)En.warn(e.message);else{const n=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(n.message)}}}async function Fd(t,e){try{const r=(await om()).transaction(wi,"readwrite");await r.objectStore(wi).put(e,lm(t)),await r.done}catch(n){if(n instanceof Pn)En.warn(n.message);else{const r=Ht.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});En.warn(r.message)}}}function lm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=1024,Y0=30*24*60*60*1e3;class q0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new J0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Y0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zd(),{heartbeatsToSend:r,unsentEntries:i}=X0(this._heartbeatsCache.heartbeats),s=Ws(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function zd(){return new Date().toISOString().substring(0,10)}function X0(t,e=K0){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),bd(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class J0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xp()?Jp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Q0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function bd(t){return Ws(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(t){Yt(new It("platform-logger",e=>new h0(e),"PRIVATE")),Yt(new It("heartbeat",e=>new q0(e),"PRIVATE")),ft(Ea,Md,t),ft(Ea,Md,"esm2017"),ft("fire-js","")}Z0("");var Ud={};const Bd="@firebase/database",jd="1.0.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let am="";function ew(t){am=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),de(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:vi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Nt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new tw(e)}}catch{}return new nw},dn=um("localStorage"),Ia=um("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=new Mu("@firebase/database"),rw=function(){let t=1;return function(){return t++}}(),cm=function(t){const e=Vv(t),n=new Wv;n.update(e);const r=n.digest();return Du.encodeByteArray(r)},Mi=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Mi.apply(null,r):typeof r=="object"?e+=de(r):e+=r,e+=" "}return e};let mn=null,$d=!0;const iw=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(tr.logLevel=$.VERBOSE,mn=tr.log.bind(tr),e&&Ia.set("logging_enabled",!0)):typeof t=="function"?mn=t:(mn=null,Ia.remove("logging_enabled"))},ve=function(...t){if($d===!0&&($d=!1,mn===null&&Ia.get("logging_enabled")===!0&&iw(!0)),mn){const e=Mi.apply(null,t);mn(e)}},Li=function(t){return function(...e){ve(t,...e)}},ka=function(...t){const e="FIREBASE INTERNAL ERROR: "+Mi(...t);tr.error(e)},kt=function(...t){const e=`FIREBASE FATAL ERROR: ${Mi(...t)}`;throw tr.error(e),new Error(e)},be=function(...t){const e="FIREBASE WARNING: "+Mi(...t);tr.warn(e)},sw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},dm=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ow=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},hr="[MIN_NAME]",Cn="[MAX_NAME]",Er=function(t,e){if(t===e)return 0;if(t===hr||e===Cn)return-1;if(e===hr||t===Cn)return 1;{const n=Wd(t),r=Wd(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},lw=function(t,e){return t===e?0:t<e?-1:1},Or=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+de(e))},Fu=function(t){if(typeof t!="object"||t===null)return de(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=de(e[r]),n+=":",n+=Fu(t[e[r]]);return n+="}",n},fm=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const hm=function(t){E(!dm(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let f=parseInt(d.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},aw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function cw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const dw=new RegExp("^-?(0*)\\d{1,10}$"),fw=-2147483648,hw=2147483647,Wd=function(t){if(dw.test(t)){const e=Number(t);if(e>=fw&&e<=hw)return e}return null},Fi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw be("Exception was thrown by user callback.",n),e},Math.floor(0))}},pw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},qr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ve("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',be(e)}}class nr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}nr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu="5",pm="v",mm="s",gm="r",_m="f",ym=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,vm="ls",wm="p",Ta="ac",Em="websocket",Cm="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=dn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&dn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function _w(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Im(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let r;if(e===Em)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Cm)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);_w(t)&&(n.ns=t.namespace);const i=[];return Me(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(){this.counters_={}}incrementCounter(e,n=1){Nt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Iv(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml={},gl={};function bu(t){const e=t.toString();return ml[e]||(ml[e]=new yw),ml[e]}function vw(t,e){const n=t.toString();return gl[n]||(gl[n]=e()),gl[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Fi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="start",Ew="close",Cw="pLPCommand",Sw="pRTLPCB",km="id",Tm="pw",Nm="ser",Iw="cb",kw="seg",Tw="ts",Nw="d",Rw="dframe",Rm=1870,xm=30,xw=Rm-xm,Pw=25e3,Aw=3e4;class Qn{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Li(e),this.stats_=bu(n),this.urlFn=a=>(this.appCheckToken&&(a[Ta]=this.appCheckToken),Im(n,Cm,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new ww(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Aw)),ow(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Uu((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Vd)this.id=l,this.password=a;else if(o===Ew)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Vd]="t",r[Nm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Iw]=this.scriptTagHolder.uniqueCallbackIdentifier),r[pm]=zu,this.transportSessionId&&(r[mm]=this.transportSessionId),this.lastSessionId&&(r[vm]=this.lastSessionId),this.applicationId&&(r[wm]=this.applicationId),this.appCheckToken&&(r[Ta]=this.appCheckToken),typeof location<"u"&&location.hostname&&ym.test(location.hostname)&&(r[gm]=_m);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Qn.forceAllow_=!0}static forceDisallow(){Qn.forceDisallow_=!0}static isAvailable(){return Qn.forceAllow_?!0:!Qn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!aw()&&!uw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Hp(n),i=fm(r,xw);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Rw]="t",r[km]=e,r[Tm]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=de(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Uu{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rw(),window[Cw+this.uniqueCallbackIdentifier]=e,window[Sw+this.uniqueCallbackIdentifier]=n,this.myIFrame=Uu.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ve("frame writing exception"),l.stack&&ve(l.stack),ve(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ve("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[km]=this.myID,e[Tm]=this.myPW,e[Nm]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xm+r.length<=Rm;){const o=this.pendingSegs.shift();r=r+"&"+kw+i+"="+o.seg+"&"+Tw+i+"="+o.ts+"&"+Nw+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Pw)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ve("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=16384,Ow=45e3;let Qs=null;typeof MozWebSocket<"u"?Qs=MozWebSocket:typeof WebSocket<"u"&&(Qs=WebSocket);class et{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Li(this.connId),this.stats_=bu(n),this.connURL=et.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[pm]=zu,typeof location<"u"&&location.hostname&&ym.test(location.hostname)&&(o[gm]=_m),n&&(o[mm]=n),r&&(o[vm]=r),i&&(o[Ta]=i),s&&(o[wm]=s),Im(e,Em,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,dn.set("previous_websocket_failure",!0);try{let r;qp(),this.mySock=new Qs(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Qs!==null&&!et.forceDisallow_}static previouslyFailed(){return dn.isInMemoryStorage||dn.get("previous_websocket_failure")===!0}markConnectionHealthy(){dn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=vi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=fm(n,Dw);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ow))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}et.responsesRequiredToBeHealthy=2;et.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Qn,et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=et&&et.isAvailable();let r=n&&!et.previouslyFailed();if(e.webSocketOnly&&(n||be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[et];else{const i=this.transports_=[];for(const s of Ei.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ei.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ei.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=6e4,Lw=5e3,Fw=10*1024,zw=100*1024,_l="t",Hd="d",bw="s",Gd="r",Uw="e",Qd="o",Kd="a",Yd="n",qd="p",Bw="h";class jw{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Li("c:"+this.id+":"),this.transportManager_=new Ei(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=qr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>zw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Fw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_l in e){const n=e[_l];n===Kd?this.upgradeIfSecondaryHealthy_():n===Gd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Qd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Or("t",e),r=Or("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Kd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Yd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Or("t",e),r=Or("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Or(_l,e);if(Hd in e){const r=e[Hd];if(n===Bw){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Yd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===bw?this.onConnectionShutdown_(r):n===Gd?this.onReset_(r):n===Uw?ka("Server Error: "+r):n===Qd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ka("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),zu!==r&&be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),qr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Mw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):qr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Lw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(dn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks extends Am{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Yp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ks}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=32,Jd=768;class j{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function b(){return new j("")}function O(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function qt(t){return t.pieces_.length-t.pieceNum_}function W(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new j(t.pieces_,e)}function Dm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function $w(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Om(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Mm(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new j(e,0)}function se(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof j)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new j(n,0)}function M(t){return t.pieceNum_>=t.pieces_.length}function Re(t,e){const n=O(t),r=O(e);if(n===null)return e;if(n===r)return Re(W(t),W(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Bu(t,e){if(qt(t)!==qt(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function tt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(qt(t)>qt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Ww{constructor(e,n){this.errorPrefix_=n,this.parts_=Om(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=To(this.parts_[r]);Lm(this)}}function Vw(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=To(e),Lm(t)}function Hw(t){const e=t.parts_.pop();t.byteLength_-=To(e),t.parts_.length>0&&(t.byteLength_-=1)}function Lm(t){if(t.byteLength_>Jd)throw new Error(t.errorPrefix_+"has a key path longer than "+Jd+" bytes ("+t.byteLength_+").");if(t.parts_.length>Xd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Xd+") or object contains a cycle "+ln(t))}function ln(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju extends Am{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ju}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=1e3,Gw=60*5*1e3,Zd=30*1e3,Qw=1.3,Kw=3e4,Yw="server_kill",ef=3;class vt extends Pm{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=vt.nextPersistentConnectionId_++,this.log_=Li("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Mr,this.maxReconnectDelay_=Gw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!qp())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ju.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ks.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(de(s)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ou,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;vt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Nt(e,"w")){const r=fr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Zd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Bv(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+de(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ka("Unrecognized action received from server: "+de(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Mr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Mr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Kw&&(this.reconnectDelay_=Mr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Qw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+vt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ve("getToken() completed but was canceled"):(ve("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,l=new jw(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{be(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Yw)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&be(c),a())}}}interrupt(e){ve("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ve("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Rd(this.interruptReasons_)&&(this.reconnectDelay_=Mr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Fu(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new j(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ve("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ef&&(this.reconnectDelay_=Zd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ve("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ef&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+am.replace(/\./g,"-")]=1,Yp()?e["framework.cordova"]=1:Lv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ks.getInstance().currentlyOnline();return Rd(this.interruptReasons_)&&e}}vt.nextPersistentConnectionId_=0;vt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new D(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new D(hr,e),i=new D(hr,n);return this.compare(r,i)!==0}minPost(){return D.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss;class Fm extends No{static get __EMPTY_NODE(){return ss}static set __EMPTY_NODE(e){ss=e}compare(e,n){return Er(e.name,n.name)}isDefinedOn(e){throw vr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return D.MIN}maxPost(){return new D(Cn,ss)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new D(e,ss)}toString(){return".key"}}const rr=new Fm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ce{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ce.RED,this.left=i??xe.EMPTY_NODE,this.right=s??xe.EMPTY_NODE}copy(e,n,r,i,s){return new ce(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return xe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return xe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ce.RED=!0;ce.BLACK=!1;class qw{copy(e,n,r,i,s){return this}insert(e,n,r){return new ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class xe{constructor(e,n=xe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new xe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ce.BLACK,null,null))}remove(e){return new xe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ce.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new os(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new os(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new os(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new os(this.root_,null,this.comparator_,!0,e)}}xe.EMPTY_NODE=new qw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t,e){return Er(t.name,e.name)}function $u(t,e){return Er(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Na;function Jw(t){Na=t}const zm=function(t){return typeof t=="number"?"number:"+hm(t):"string:"+t},bm=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Nt(e,".sv"),"Priority must be a string or number.")}else E(t===Na||t.isEmpty(),"priority of unexpected type.");E(t===Na||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tf;class ae{constructor(e,n=ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),bm(this.priorityNode_)}static set __childrenNodeConstructor(e){tf=e}static get __childrenNodeConstructor(){return tf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return M(e)?this:O(e)===".priority"?this.priorityNode_:ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=O(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(E(r!==".priority"||qt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(W(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zm(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=hm(this.value_):e+=this.value_,this.lazyHash_=cm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ae.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ae.VALUE_TYPE_ORDER.indexOf(n),s=ae.VALUE_TYPE_ORDER.indexOf(r);return E(i>=0,"Unknown leaf type: "+n),E(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Um,Bm;function Zw(t){Um=t}function eE(t){Bm=t}class tE extends No{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Er(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return D.MIN}maxPost(){return new D(Cn,new ae("[PRIORITY-POST]",Bm))}makePost(e,n){const r=Um(e);return new D(n,new ae("[PRIORITY-POST]",r))}toString(){return".priority"}}const Z=new tE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=Math.log(2);class rE{constructor(e){const n=s=>parseInt(Math.log(s)/nE,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ys=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,f;if(d===0)return null;if(d===1)return c=t[a],f=n?n(c):c,new ce(f,c.node,ce.BLACK,null,null);{const g=parseInt(d/2,10)+a,_=i(a,g),v=i(g+1,u);return c=t[g],f=n?n(c):c,new ce(f,c.node,ce.BLACK,_,v)}},s=function(a){let u=null,d=null,c=t.length;const f=function(_,v){const x=c-_,p=c;c-=_;const h=i(x+1,p),m=t[x],y=n?n(m):m;g(new ce(y,m.node,v,null,h))},g=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),x=Math.pow(2,a.count-(_+1));v?f(x,ce.BLACK):(f(x,ce.BLACK),f(x,ce.RED))}return d},o=new rE(t.length),l=s(o);return new xe(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl;const Mn={};class _t{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(Mn&&Z,"ChildrenNode.ts has not been loaded"),yl=yl||new _t({".priority":Mn},{".priority":Z}),yl}get(e){const n=fr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof xe?n:null}hasIndex(e){return Nt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==rr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(D.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Ys(r,e.getCompare()):l=Mn;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new _t(d,u)}addToIndexes(e,n){const r=Vs(this.indexes_,(i,s)=>{const o=fr(this.indexSet_,s);if(E(o,"Missing index implementation for "+s),i===Mn)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(D.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),Ys(l,o.getCompare())}else return Mn;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new D(e.name,l))),a.insert(e,e.node)}});return new _t(r,this.indexSet_)}removeFromIndexes(e,n){const r=Vs(this.indexes_,i=>{if(i===Mn)return i;{const s=n.get(e.name);return s?i.remove(new D(e.name,s)):i}});return new _t(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr;class R{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&bm(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Lr||(Lr=new R(new xe($u),null,_t.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Lr}updatePriority(e){return this.children_.isEmpty()?this:new R(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Lr:n}}getChild(e){const n=O(e);return n===null?this:this.getImmediateChild(n).getChild(W(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new D(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Lr:this.priorityNode_;return new R(i,o,s)}}updateChild(e,n){const r=O(e);if(r===null)return n;{E(O(e)!==".priority"||qt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(W(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Z,(o,l)=>{n[o]=l.val(e),r++,s&&R.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zm(this.getPriority().val())+":"),this.forEachChild(Z,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":cm(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new D(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new D(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new D(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,D.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,D.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zi?-1:0}withIndex(e){if(e===rr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new R(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===rr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Z),i=n.getIterator(Z);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===rr?null:this.indexMap_.get(e.toString())}}R.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class iE extends R{constructor(){super(new xe($u),R.EMPTY_NODE,_t.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return R.EMPTY_NODE}isEmpty(){return!1}}const zi=new iE;Object.defineProperties(D,{MIN:{value:new D(hr,R.EMPTY_NODE)},MAX:{value:new D(Cn,zi)}});Fm.__EMPTY_NODE=R.EMPTY_NODE;ae.__childrenNodeConstructor=R;Jw(zi);eE(zi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=!0;function we(t,e=null){if(t===null)return R.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ae(n,we(e))}if(!(t instanceof Array)&&sE){const n=[];let r=!1;if(Me(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=we(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new D(o,a)))}}),n.length===0)return R.EMPTY_NODE;const s=Ys(n,Xw,o=>o.name,$u);if(r){const o=Ys(n,Z.getCompare());return new R(s,we(e),new _t({".priority":o},{".priority":Z}))}else return new R(s,we(e),_t.Default)}else{let n=R.EMPTY_NODE;return Me(t,(r,i)=>{if(Nt(t,r)&&r.substring(0,1)!=="."){const s=we(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(we(e))}}Zw(we);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE extends No{constructor(e){super(),this.indexPath_=e,E(!M(e)&&O(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Er(e.name,n.name):s}makePost(e,n){const r=we(e),i=R.EMPTY_NODE.updateChild(this.indexPath_,r);return new D(n,i)}maxPost(){const e=R.EMPTY_NODE.updateChild(this.indexPath_,zi);return new D(Cn,e)}toString(){return Om(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE extends No{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Er(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return D.MIN}maxPost(){return D.MAX}makePost(e,n){const r=we(e);return new D(n,r)}toString(){return".value"}}const aE=new lE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t){return{type:"value",snapshotNode:t}}function pr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ci(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Si(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function uE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ci(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(pr(n,r)):o.trackChildChange(Si(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Z,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ci(i,s))}),n.isLeafNode()||n.forEachChild(Z,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Si(i,s,o))}else r.trackChildChange(pr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?R.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.indexedFilter_=new Wu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ii.getStartPost_(e),this.endPost_=Ii.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new D(n,r))||(r=R.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=R.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(R.EMPTY_NODE);const s=this;return n.forEachChild(Z,(o,l)=>{s.matches(new D(o,l))||(i=i.updateImmediateChild(o,R.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ii(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new D(n,r))||(r=R.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=R.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=R.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(R.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,R.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,g)=>c(g,f)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new D(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,a);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Si(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ci(n,c));const v=l.updateImmediateChild(n,R.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(pr(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Ci(u.name,u.node)),s.trackChildChange(pr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,R.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hr}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Z}copy(){const e=new Vu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function dE(t){return t.loadsAllData()?new Wu(t.getIndex()):t.hasLimit()?new cE(t):new Ii(t)}function nf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Z?n="$priority":t.index_===aE?n="$value":t.index_===rr?n="$key":(E(t.index_ instanceof oE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=de(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=de(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+de(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=de(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+de(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function rf(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Z&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs extends Pm{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Li("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=qs.getListenId_(e,r),l={};this.listens_[o]=l;const a=nf(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),fr(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=qs.getListenId_(e,n);delete this.listens_[r]}get(e){const n=nf(e._queryParams),r=e._path.toString(),i=new Ou;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$v(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=vi(l.responseText)}catch{be("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&be("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(){this.rootNode_=R.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(){return{value:null,children:new Map}}function $m(t,e,n){if(M(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=O(e);t.children.has(r)||t.children.set(r,Xs());const i=t.children.get(r);e=W(e),$m(i,e,n)}}function Ra(t,e,n){t.value!==null?n(e,t.value):hE(t,(r,i)=>{const s=new j(e.toString()+"/"+r);Ra(i,s,n)})}function hE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Me(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf=10*1e3,mE=30*1e3,gE=5*60*1e3;class _E{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new pE(e);const r=sf+(mE-sf)*Math.random();qr(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Me(e,(i,s)=>{s>0&&Nt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),qr(this.reportStats_.bind(this),Math.floor(Math.random()*2*gE))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nt||(nt={}));function Wm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gu(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=nt.ACK_USER_WRITE,this.source=Wm()}operationForChild(e){if(M(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new j(e));return new Js(b(),n,this.revert)}}else return E(O(this.path)===e,"operationForChild called for unrelated child."),new Js(W(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.source=e,this.path=n,this.type=nt.LISTEN_COMPLETE}operationForChild(e){return M(this.path)?new ki(this.source,b()):new ki(this.source,W(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=nt.OVERWRITE}operationForChild(e){return M(this.path)?new Sn(this.source,b(),this.snap.getImmediateChild(e)):new Sn(this.source,W(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=nt.MERGE}operationForChild(e){if(M(this.path)){const n=this.children.subtree(new j(e));return n.isEmpty()?null:n.value?new Sn(this.source,b(),n.value):new Ti(this.source,b(),n)}else return E(O(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ti(this.source,W(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(M(e))return this.isFullyInitialized()&&!this.filtered_;const n=O(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function vE(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(uE(o.childName,o.snapshotNode))}),Fr(t,i,"child_removed",e,r,n),Fr(t,i,"child_added",e,r,n),Fr(t,i,"child_moved",s,r,n),Fr(t,i,"child_changed",e,r,n),Fr(t,i,"value",e,r,n),i}function Fr(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>EE(t,l,a)),o.forEach(l=>{const a=wE(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function wE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function EE(t,e,n){if(e.childName==null||n.childName==null)throw vr("Should only compare child_ events.");const r=new D(e.childName,e.snapshotNode),i=new D(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t,e){return{eventCache:t,serverCache:e}}function Xr(t,e,n,r){return Ro(new In(e,n,r),t.serverCache)}function Vm(t,e,n,r){return Ro(t.eventCache,new In(e,n,r))}function xa(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function kn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vl;const CE=()=>(vl||(vl=new xe(lw)),vl);class G{constructor(e,n=CE()){this.value=e,this.children=n}static fromObject(e){let n=new G(null);return Me(e,(r,i)=>{n=n.set(new j(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:b(),value:this.value};if(M(e))return null;{const r=O(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(W(e),n);return s!=null?{path:se(new j(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(M(e))return this;{const n=O(e),r=this.children.get(n);return r!==null?r.subtree(W(e)):new G(null)}}set(e,n){if(M(e))return new G(n,this.children);{const r=O(e),s=(this.children.get(r)||new G(null)).set(W(e),n),o=this.children.insert(r,s);return new G(this.value,o)}}remove(e){if(M(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const n=O(e),r=this.children.get(n);if(r){const i=r.remove(W(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new G(null):new G(this.value,s)}else return this}}get(e){if(M(e))return this.value;{const n=O(e),r=this.children.get(n);return r?r.get(W(e)):null}}setTree(e,n){if(M(e))return n;{const r=O(e),s=(this.children.get(r)||new G(null)).setTree(W(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new G(this.value,o)}}fold(e){return this.fold_(b(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(se(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,b(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(M(e))return null;{const s=O(e),o=this.children.get(s);return o?o.findOnPath_(W(e),se(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,b(),n)}foreachOnPath_(e,n,r){if(M(e))return this;{this.value&&r(n,this.value);const i=O(e),s=this.children.get(i);return s?s.foreachOnPath_(W(e),se(n,i),r):new G(null)}}foreach(e){this.foreach_(b(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(se(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.writeTree_=e}static empty(){return new st(new G(null))}}function Jr(t,e,n){if(M(e))return new st(new G(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Re(i,e);return s=s.updateChild(o,n),new st(t.writeTree_.set(i,s))}else{const i=new G(n),s=t.writeTree_.setTree(e,i);return new st(s)}}}function of(t,e,n){let r=t;return Me(n,(i,s)=>{r=Jr(r,se(e,i),s)}),r}function lf(t,e){if(M(e))return st.empty();{const n=t.writeTree_.setTree(e,new G(null));return new st(n)}}function Pa(t,e){return An(t,e)!=null}function An(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Re(n.path,e)):null}function af(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Z,(r,i)=>{e.push(new D(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new D(r,i.value))}),e}function Gt(t,e){if(M(e))return t;{const n=An(t,e);return n!=null?new st(new G(n)):new st(t.writeTree_.subtree(e))}}function Aa(t){return t.writeTree_.isEmpty()}function mr(t,e){return Hm(b(),t.writeTree_,e)}function Hm(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(E(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Hm(se(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(se(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t,e){return Ym(e,t)}function SE(t,e,n,r,i){E(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Jr(t.visibleWrites,e,n)),t.lastWriteId=r}function IE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function kE(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&TE(l,r.path)?i=!1:tt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return NE(t),!0;if(r.snap)t.visibleWrites=lf(t.visibleWrites,r.path);else{const l=r.children;Me(l,a=>{t.visibleWrites=lf(t.visibleWrites,se(r.path,a))})}return!0}else return!1}function TE(t,e){if(t.snap)return tt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&tt(se(t.path,n),e))return!0;return!1}function NE(t){t.visibleWrites=Gm(t.allWrites,RE,b()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function RE(t){return t.visible}function Gm(t,e,n){let r=st.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)tt(n,o)?(l=Re(n,o),r=Jr(r,l,s.snap)):tt(o,n)&&(l=Re(o,n),r=Jr(r,b(),s.snap.getChild(l)));else if(s.children){if(tt(n,o))l=Re(n,o),r=of(r,l,s.children);else if(tt(o,n))if(l=Re(o,n),M(l))r=of(r,b(),s.children);else{const a=fr(s.children,O(l));if(a){const u=a.getChild(W(l));r=Jr(r,b(),u)}}}else throw vr("WriteRecord should have .snap or .children")}}return r}function Qm(t,e,n,r,i){if(!r&&!i){const s=An(t.visibleWrites,e);if(s!=null)return s;{const o=Gt(t.visibleWrites,e);if(Aa(o))return n;if(n==null&&!Pa(o,b()))return null;{const l=n||R.EMPTY_NODE;return mr(o,l)}}}else{const s=Gt(t.visibleWrites,e);if(!i&&Aa(s))return n;if(!i&&n==null&&!Pa(s,b()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(tt(u.path,e)||tt(e,u.path))},l=Gm(t.allWrites,o,e),a=n||R.EMPTY_NODE;return mr(l,a)}}}function xE(t,e,n){let r=R.EMPTY_NODE;const i=An(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Z,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Gt(t.visibleWrites,e);return n.forEachChild(Z,(o,l)=>{const a=mr(Gt(s,new j(o)),l);r=r.updateImmediateChild(o,a)}),af(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Gt(t.visibleWrites,e);return af(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function PE(t,e,n,r,i){E(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=se(e,n);if(Pa(t.visibleWrites,s))return null;{const o=Gt(t.visibleWrites,s);return Aa(o)?i.getChild(n):mr(o,i.getChild(n))}}function AE(t,e,n,r){const i=se(e,n),s=An(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Gt(t.visibleWrites,i);return mr(o,r.getNode().getImmediateChild(n))}else return null}function DE(t,e){return An(t.visibleWrites,e)}function OE(t,e,n,r,i,s,o){let l;const a=Gt(t.visibleWrites,e),u=An(a,b());if(u!=null)l=u;else if(n!=null)l=mr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=f.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=f.getNext();return d}else return[]}function ME(){return{visibleWrites:st.empty(),allWrites:[],lastWriteId:-1}}function Zs(t,e,n,r){return Qm(t.writeTree,t.treePath,e,n,r)}function Ku(t,e){return xE(t.writeTree,t.treePath,e)}function uf(t,e,n,r){return PE(t.writeTree,t.treePath,e,n,r)}function eo(t,e){return DE(t.writeTree,se(t.treePath,e))}function LE(t,e,n,r,i,s){return OE(t.writeTree,t.treePath,e,n,r,i,s)}function Yu(t,e,n){return AE(t.writeTree,t.treePath,e,n)}function Km(t,e){return Ym(se(t.treePath,e),t.writeTree)}function Ym(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Si(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ci(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,pr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Si(r,e.snapshotNode,i.oldSnap));else throw vr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const qm=new zE;class qu{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new In(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yu(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kn(this.viewCache_),s=LE(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(t){return{filter:t}}function UE(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function BE(t,e,n,r,i){const s=new FE;let o,l;if(n.type===nt.OVERWRITE){const u=n;u.source.fromUser?o=Da(t,e,u.path,u.snap,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!M(u.path),o=to(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===nt.MERGE){const u=n;u.source.fromUser?o=$E(t,e,u.path,u.children,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Oa(t,e,u.path,u.children,r,i,l,s))}else if(n.type===nt.ACK_USER_WRITE){const u=n;u.revert?o=HE(t,e,u.path,r,i,s):o=WE(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===nt.LISTEN_COMPLETE)o=VE(t,e,n.path,r,s);else throw vr("Unknown operation type: "+n.type);const a=s.getChanges();return jE(e,o,a),{viewCache:o,changes:a}}function jE(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=xa(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(jm(xa(e)))}}function Xm(t,e,n,r,i,s){const o=e.eventCache;if(eo(r,n)!=null)return e;{let l,a;if(M(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=kn(e),d=u instanceof R?u:R.EMPTY_NODE,c=Ku(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Zs(r,kn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=O(n);if(u===".priority"){E(qt(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=uf(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=W(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=uf(r,n,o.getNode(),a);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=Yu(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Xr(e,l,o.isFullyInitialized()||M(n),t.filter.filtersNodes())}}function to(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(M(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),g,null)}else{const g=O(n);if(!a.isCompleteForPath(n)&&qt(n)>1)return e;const _=W(n),x=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=d.updatePriority(a.getNode(),x):u=d.updateChild(a.getNode(),g,x,_,qm,null)}const c=Vm(e,u,a.isFullyInitialized()||M(n),d.filtersNodes()),f=new qu(i,c,s);return Xm(t,c,n,i,f,l)}function Da(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new qu(i,e,s);if(M(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Xr(e,u,!0,t.filter.filtersNodes());else{const c=O(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Xr(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=W(n),g=l.getNode().getImmediateChild(c);let _;if(M(f))_=r;else{const v=d.getCompleteChild(c);v!=null?Dm(f)===".priority"&&v.getChild(Mm(f)).isEmpty()?_=v:_=v.updateChild(f,r):_=R.EMPTY_NODE}if(g.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),c,_,f,d,o);a=Xr(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function cf(t,e){return t.eventCache.isCompleteForChild(e)}function $E(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=se(n,a);cf(e,O(d))&&(l=Da(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=se(n,a);cf(e,O(d))||(l=Da(t,l,d,u,i,s,o))}),l}function df(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Oa(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;M(n)?u=r:u=new G(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),_=df(t,g,f);a=to(t,a,new j(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,f)=>{const g=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!g){const _=e.serverCache.getNode().getImmediateChild(c),v=df(t,_,f);a=to(t,a,new j(c),v,i,s,o,l)}}),a}function WE(t,e,n,r,i,s,o){if(eo(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(M(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return to(t,e,n,a.getNode().getChild(n),i,s,l,o);if(M(n)){let u=new G(null);return a.getNode().forEachChild(rr,(d,c)=>{u=u.set(new j(d),c)}),Oa(t,e,n,u,i,s,l,o)}else return e}else{let u=new G(null);return r.foreach((d,c)=>{const f=se(n,d);a.isCompleteForPath(f)&&(u=u.set(d,a.getNode().getChild(f)))}),Oa(t,e,n,u,i,s,l,o)}}function VE(t,e,n,r,i){const s=e.serverCache,o=Vm(e,s.getNode(),s.isFullyInitialized()||M(n),s.isFiltered());return Xm(t,o,n,r,qm,i)}function HE(t,e,n,r,i,s){let o;if(eo(r,n)!=null)return e;{const l=new qu(r,e,i),a=e.eventCache.getNode();let u;if(M(n)||O(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Zs(r,kn(e));else{const c=e.serverCache.getNode();E(c instanceof R,"serverChildren would be complete if leaf node"),d=Ku(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=O(n);let c=Yu(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,W(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,R.EMPTY_NODE,W(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zs(r,kn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||eo(r,b())!=null,Xr(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Wu(r.getIndex()),s=dE(r);this.processor_=bE(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(R.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(R.EMPTY_NODE,l.getNode(),null),d=new In(a,o.isFullyInitialized(),i.filtersNodes()),c=new In(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ro(c,d),this.eventGenerator_=new yE(this.query_)}get query(){return this.query_}}function QE(t){return t.viewCache_.serverCache.getNode()}function KE(t,e){const n=kn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!M(e)&&!n.getImmediateChild(O(e)).isEmpty())?n.getChild(e):null}function ff(t){return t.eventRegistrations_.length===0}function YE(t,e){t.eventRegistrations_.push(e)}function hf(t,e,n){const r=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function pf(t,e,n,r){e.type===nt.MERGE&&e.source.queryId!==null&&(E(kn(t.viewCache_),"We should always have a full cache before handling merges"),E(xa(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=BE(t.processor_,i,e,n,r);return UE(t.processor_,s.viewCache),E(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Jm(t,s.changes,s.viewCache.eventCache.getNode(),null)}function qE(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Z,(s,o)=>{r.push(pr(s,o))}),n.isFullyInitialized()&&r.push(jm(n.getNode())),Jm(t,r,n.getNode(),e)}function Jm(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return vE(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no;class XE{constructor(){this.views=new Map}}function JE(t){E(!no,"__referenceConstructor has already been defined"),no=t}function ZE(){return E(no,"Reference.ts has not been loaded"),no}function eC(t){return t.views.size===0}function Xu(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return E(s!=null,"SyncTree gave us an op for an invalid query."),pf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(pf(o,e,n,r));return s}}function tC(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=Zs(n,i?r:null),a=!1;l?a=!0:r instanceof R?(l=Ku(n,r),a=!1):(l=R.EMPTY_NODE,a=!1);const u=Ro(new In(l,a,!1),new In(r,i,!1));return new GE(e,u)}return o}function nC(t,e,n,r,i,s){const o=tC(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),YE(o,n),qE(o,n)}function rC(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Xt(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(hf(u,n,r)),ff(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(hf(a,n,r)),ff(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Xt(t)&&s.push(new(ZE())(e._repo,e._path)),{removed:s,events:o}}function Zm(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ir(t,e){let n=null;for(const r of t.views.values())n=n||KE(r,e);return n}function eg(t,e){if(e._queryParams.loadsAllData())return xo(t);{const r=e._queryIdentifier;return t.views.get(r)}}function tg(t,e){return eg(t,e)!=null}function Xt(t){return xo(t)!=null}function xo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro;function iC(t){E(!ro,"__referenceConstructor has already been defined"),ro=t}function sC(){return E(ro,"Reference.ts has not been loaded"),ro}let oC=1;class mf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=ME(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function lC(t,e,n,r,i){return SE(t.pendingWriteTree_,e,n,r,i),i?bi(t,new Sn(Wm(),e,n)):[]}function Kn(t,e,n=!1){const r=IE(t.pendingWriteTree_,e);if(kE(t.pendingWriteTree_,e)){let s=new G(null);return r.snap!=null?s=s.set(b(),!0):Me(r.children,o=>{s=s.set(new j(o),!0)}),bi(t,new Js(r.path,s,n))}else return[]}function Po(t,e,n){return bi(t,new Sn(Hu(),e,n))}function aC(t,e,n){const r=G.fromObject(n);return bi(t,new Ti(Hu(),e,r))}function uC(t,e){return bi(t,new ki(Hu(),e))}function cC(t,e,n){const r=Ju(t,n);if(r){const i=Zu(r),s=i.path,o=i.queryId,l=Re(s,e),a=new ki(Gu(o),l);return ec(t,s,a)}else return[]}function Ma(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||tg(o,e))){const a=rC(o,e,n,r);eC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(f,g)=>Xt(g));if(d&&!c){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=hC(f);for(let _=0;_<g.length;++_){const v=g[_],x=v.query,p=sg(t,v);t.listenProvider_.startListening(Zr(x),io(t,x),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Zr(e),null):u.forEach(f=>{const g=t.queryToTagMap.get(Ao(f));t.listenProvider_.stopListening(Zr(f),g)}))}pC(t,u)}return l}function dC(t,e,n,r){const i=Ju(t,r);if(i!=null){const s=Zu(i),o=s.path,l=s.queryId,a=Re(o,e),u=new Sn(Gu(l),a,n);return ec(t,o,u)}else return[]}function fC(t,e,n,r){const i=Ju(t,r);if(i){const s=Zu(i),o=s.path,l=s.queryId,a=Re(o,e),u=G.fromObject(n),d=new Ti(Gu(l),a,u);return ec(t,o,d)}else return[]}function gf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const _=Re(f,i);s=s||ir(g,_),o=o||Xt(g)});let l=t.syncPointTree_.get(i);l?(o=o||Xt(l),s=s||ir(l,b())):(l=new XE,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=R.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=ir(_,b());v&&(s=s.updateImmediateChild(g,v))}));const u=tg(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=Ao(e);E(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=mC();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const d=Qu(t.pendingWriteTree_,i);let c=nC(l,e,n,d,s,a);if(!u&&!o&&!r){const f=eg(l,e);c=c.concat(gC(t,e,f))}return c}function ng(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Re(o,e),u=ir(l,a);if(u)return u});return Qm(i,e,s,n,!0)}function bi(t,e){return rg(e,t.syncPointTree_,null,Qu(t.pendingWriteTree_,b()))}function rg(t,e,n,r){if(M(t.path))return ig(t,e,n,r);{const i=e.get(b());n==null&&i!=null&&(n=ir(i,b()));let s=[];const o=O(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=Km(r,o);s=s.concat(rg(l,a,u,d))}return i&&(s=s.concat(Xu(i,t,r,n))),s}}function ig(t,e,n,r){const i=e.get(b());n==null&&i!=null&&(n=ir(i,b()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Km(r,o),d=t.operationForChild(o);d&&(s=s.concat(ig(d,l,a,u)))}),i&&(s=s.concat(Xu(i,t,r,n))),s}function sg(t,e){const n=e.query,r=io(t,n);return{hashFn:()=>(QE(e)||R.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?cC(t,n._path,r):uC(t,n._path);{const s=cw(i,n);return Ma(t,n,null,s)}}}}function io(t,e){const n=Ao(e);return t.queryToTagMap.get(n)}function Ao(t){return t._path.toString()+"$"+t._queryIdentifier}function Ju(t,e){return t.tagToQueryMap.get(e)}function Zu(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new j(t.substr(0,e))}}function ec(t,e,n){const r=t.syncPointTree_.get(e);E(r,"Missing sync point for query tag that we're tracking");const i=Qu(t.pendingWriteTree_,e);return Xu(r,n,i,null)}function hC(t){return t.fold((e,n,r)=>{if(n&&Xt(n))return[xo(n)];{let i=[];return n&&(i=Zm(n)),Me(r,(s,o)=>{i=i.concat(o)}),i}})}function Zr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(sC())(t._repo,t._path):t}function pC(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ao(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function mC(){return oC++}function gC(t,e,n){const r=e._path,i=io(t,e),s=sg(t,n),o=t.listenProvider_.startListening(Zr(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)E(!Xt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!M(u)&&d&&Xt(d))return[xo(d).query];{let f=[];return d&&(f=f.concat(Zm(d).map(g=>g.query))),Me(c,(g,_)=>{f=f.concat(_)}),f}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(Zr(d),io(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new tc(n)}node(){return this.node_}}class nc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=se(this.path_,e);return new nc(this.syncTree_,n)}node(){return ng(this.syncTree_,this.path_)}}const _C=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},_f=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return yC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return vC(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},yC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},vC=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&E(!1,"Unexpected increment value: "+r);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},wC=function(t,e,n,r){return rc(e,new nc(n,t),r)},EC=function(t,e,n){return rc(t,new tc(e),n)};function rc(t,e,n){const r=t.getPriority().val(),i=_f(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=_f(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ae(l,we(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ae(i))),o.forEachChild(Z,(l,a)=>{const u=rc(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function sc(t,e){let n=e instanceof j?e:new j(e),r=t,i=O(n);for(;i!==null;){const s=fr(r.node.children,i)||{children:{},childCount:0};r=new ic(i,r,s),n=W(n),i=O(n)}return r}function Cr(t){return t.node.value}function og(t,e){t.node.value=e,La(t)}function lg(t){return t.node.childCount>0}function CC(t){return Cr(t)===void 0&&!lg(t)}function Do(t,e){Me(t.node.children,(n,r)=>{e(new ic(n,t,r))})}function ag(t,e,n,r){n&&!r&&e(t),Do(t,i=>{ag(i,e,!0,r)}),n&&r&&e(t)}function SC(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ui(t){return new j(t.parent===null?t.name:Ui(t.parent)+"/"+t.name)}function La(t){t.parent!==null&&IC(t.parent,t.name,t)}function IC(t,e,n){const r=CC(n),i=Nt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,La(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,La(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=/[\[\].#$\/\u0000-\u001F\u007F]/,TC=/[\[\].#$\u0000-\u001F\u007F]/,wl=10*1024*1024,ug=function(t){return typeof t=="string"&&t.length!==0&&!kC.test(t)},cg=function(t){return typeof t=="string"&&t.length!==0&&!TC.test(t)},NC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),cg(t)},dg=function(t,e,n){const r=n instanceof j?new Ww(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ln(r));if(typeof e=="function")throw new Error(t+"contains a function "+ln(r)+" with contents = "+e.toString());if(dm(e))throw new Error(t+"contains "+e.toString()+" "+ln(r));if(typeof e=="string"&&e.length>wl/3&&To(e)>wl)throw new Error(t+"contains a string greater than "+wl+" utf8 bytes "+ln(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Me(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!ug(o)))throw new Error(t+" contains an invalid key ("+o+") "+ln(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Vw(r,o),dg(t,l,r),Hw(r)}),i&&s)throw new Error(t+' contains ".value" child '+ln(r)+" in addition to actual children.")}},fg=function(t,e,n,r){if(!(r&&n===void 0)&&!cg(n))throw new Error(em(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},RC=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),fg(t,e,n,r)},xC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ug(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!NC(n))throw new Error(em(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function hg(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Bu(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function pg(t,e,n){hg(t,n),mg(t,r=>Bu(r,e))}function Dn(t,e,n){hg(t,n),mg(t,r=>tt(r,e)||tt(e,r))}function mg(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(AC(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function AC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();mn&&ve("event: "+n.toString()),Fi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC="repo_interrupt",OC=25;class MC{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new PC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xs(),this.transactionQueueTree_=new ic,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function LC(t,e,n){if(t.stats_=bu(t.repoInfo_),t.forceRestClient_||pw())t.server_=new qs(t.repoInfo_,(r,i,s,o)=>{yf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>vf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{de(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new vt(t.repoInfo_,e,(r,i,s,o)=>{yf(t,r,i,s,o)},r=>{vf(t,r)},r=>{zC(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=vw(t.repoInfo_,()=>new _E(t.stats_,t.server_)),t.infoData_=new fE,t.infoSyncTree_=new mf({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Po(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),oc(t,"connected",!1),t.serverSyncTree_=new mf({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Dn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function FC(t){const n=t.infoData_.getNode(new j(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function gg(t){return _C({timestamp:FC(t)})}function yf(t,e,n,r,i){t.dataUpdateCount++;const s=new j(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Vs(n,u=>we(u));o=fC(t.serverSyncTree_,s,a,i)}else{const a=we(n);o=dC(t.serverSyncTree_,s,a,i)}else if(r){const a=Vs(n,u=>we(u));o=aC(t.serverSyncTree_,s,a)}else{const a=we(n);o=Po(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ac(t,s)),Dn(t.eventQueue_,l,o)}function vf(t,e){oc(t,"connected",e),e===!1&&UC(t)}function zC(t,e){Me(e,(n,r)=>{oc(t,n,r)})}function oc(t,e,n){const r=new j("/.info/"+e),i=we(n);t.infoData_.updateSnapshot(r,i);const s=Po(t.infoSyncTree_,r,i);Dn(t.eventQueue_,r,s)}function bC(t){return t.nextWriteId_++}function UC(t){_g(t,"onDisconnectEvents");const e=gg(t),n=Xs();Ra(t.onDisconnect_,b(),(i,s)=>{const o=wC(i,s,t.serverSyncTree_,e);$m(n,i,o)});let r=[];Ra(n,b(),(i,s)=>{r=r.concat(Po(t.serverSyncTree_,i,s));const o=VC(t,i);ac(t,o)}),t.onDisconnect_=Xs(),Dn(t.eventQueue_,b(),r)}function BC(t,e,n){let r;O(e._path)===".info"?r=gf(t.infoSyncTree_,e,n):r=gf(t.serverSyncTree_,e,n),pg(t.eventQueue_,e._path,r)}function wf(t,e,n){let r;O(e._path)===".info"?r=Ma(t.infoSyncTree_,e,n):r=Ma(t.serverSyncTree_,e,n),pg(t.eventQueue_,e._path,r)}function jC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(DC)}function _g(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ve(n,...e)}function yg(t,e,n){return ng(t.serverSyncTree_,e,n)||R.EMPTY_NODE}function lc(t,e=t.transactionQueueTree_){if(e||Oo(t,e),Cr(e)){const n=wg(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&$C(t,Ui(e),n)}else lg(e)&&Do(e,n=>{lc(t,n)})}function $C(t,e,n){const r=n.map(u=>u.currentWriteId),i=yg(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];E(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Re(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{_g(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(Kn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Oo(t,sc(t.transactionQueueTree_,e)),lc(t,t.transactionQueueTree_),Dn(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)Fi(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{be("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}ac(t,e)}},o)}function ac(t,e){const n=vg(t,e),r=Ui(n),i=wg(t,n);return WC(t,i,r),r}function WC(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Re(n,a.path);let d=!1,c;if(E(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(Kn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=OC)d=!0,c="maxretry",i=i.concat(Kn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=yg(t,a.path,o);a.currentInputSnapshot=f;const g=e[l].update(f.val());if(g!==void 0){dg("transaction failed: Data returned ",g,a.path);let _=we(g);typeof g=="object"&&g!=null&&Nt(g,".priority")||(_=_.updatePriority(f.getPriority()));const x=a.currentWriteId,p=gg(t),h=EC(_,f,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=h,a.currentWriteId=bC(t),o.splice(o.indexOf(x),1),i=i.concat(lC(t.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally)),i=i.concat(Kn(t.serverSyncTree_,x,!0))}else d=!0,c="nodata",i=i.concat(Kn(t.serverSyncTree_,a.currentWriteId,!0))}Dn(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Oo(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)Fi(r[l]);lc(t,t.transactionQueueTree_)}function vg(t,e){let n,r=t.transactionQueueTree_;for(n=O(e);n!==null&&Cr(r)===void 0;)r=sc(r,n),e=W(e),n=O(e);return r}function wg(t,e){const n=[];return Eg(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Eg(t,e,n){const r=Cr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Do(e,i=>{Eg(t,i,n)})}function Oo(t,e){const n=Cr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,og(e,n.length>0?n:void 0)}Do(e,r=>{Oo(t,r)})}function VC(t,e){const n=Ui(vg(t,e)),r=sc(t.transactionQueueTree_,e);return SC(r,i=>{El(t,i)}),El(t,r),ag(r,i=>{El(t,i)}),n}function El(t,e){const n=Cr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Kn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?og(e,void 0):n.length=s+1,Dn(t.eventQueue_,Ui(e),i);for(let o=0;o<r.length;o++)Fi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HC(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function GC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):be(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ef=function(t,e){const n=QC(t),r=n.namespace;n.domain==="firebase.com"&&kt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&kt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||sw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Sm(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new j(n.pathString)}},QC=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=HC(t.substring(d,c)));const f=GC(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+de(this.snapshot.exportVal())}}class Sg{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return M(this._path)?null:Dm(this._path)}get ref(){return new Rt(this._repo,this._path)}get _queryIdentifier(){const e=rf(this._queryParams),n=Fu(e);return n==="{}"?"default":n}get _queryObject(){return rf(this._queryParams)}isEqual(e){if(e=wr(e),!(e instanceof uc))return!1;const n=this._repo===e._repo,r=Bu(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+$w(this._path)}}class Rt extends uc{constructor(e,n){super(e,n,new Vu,!1)}get parent(){const e=Mm(this._path);return e===null?null:new Rt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ni{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new j(e),r=so(this.ref,e);return new Ni(this._node.getChild(n),r,Z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ni(i,so(this.ref,r),Z)))}hasChild(e){const n=new j(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function YC(t,e){return t=wr(t),t._checkNotDeleted("ref"),e!==void 0?so(t._root,e):t._root}function so(t,e){return t=wr(t),O(t._path)===null?RC("child","path",e,!1):fg("child","path",e,!1),new Rt(t._repo,se(t._path,e))}class cc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Cg("value",this,new Ni(e.snapshotNode,new Rt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Sg(this,e,n):null}matches(e){return e instanceof cc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class dc{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Sg(this,e,n):null}createEvent(e,n){E(e.childName!=null,"Child events should have a childName.");const r=so(new Rt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Cg(e.type,this,new Ni(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof dc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function qC(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{wf(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new KC(n,s||void 0),l=e==="value"?new cc(o):new dc(e,o);return BC(t._repo,t,l),()=>wf(t._repo,t,l)}function XC(t,e,n,r){return qC(t,"value",e,n,r)}JE(Rt);iC(Rt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC="FIREBASE_DATABASE_EMULATOR_HOST",Fa={};let ZC=!1;function e1(t,e,n,r){t.repoInfo_=new Sm(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function t1(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||kt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ve("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ef(s,i),l=o.repoInfo,a,u;typeof process<"u"&&Ud&&(u=Ud[JC]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Ef(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new nr(nr.OWNER):new gw(t.name,t.options,e);xC("Invalid Firebase Database URL",o),M(o.path)||kt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=r1(l,t,d,new mw(t.name,n));return new i1(c,t)}function n1(t,e){const n=Fa[e];(!n||n[t.key]!==t)&&kt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jC(t),delete n[t.key]}function r1(t,e,n,r){let i=Fa[e.name];i||(i={},Fa[e.name]=i);let s=i[t.toURLString()];return s&&kt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new MC(t,ZC,n,r),i[t.toURLString()]=s,s}class i1{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(LC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rt(this._repo,b())),this._rootInternal}_delete(){return this._rootInternal!==null&&(n1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&kt("Cannot call "+e+" on a deleted database.")}}function s1(t=sm(),e){const n=Oi(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Av("database");r&&o1(n,...r)}return n}function o1(t,e,n,r={}){t=wr(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&kt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&kt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new nr(nr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Dv(r.mockUserToken,t.app.options.projectId);s=new nr(o)}e1(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(t){ew(V0),Yt(new It("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return t1(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),ft(Bd,jd,t),ft(Bd,jd,"esm2017")}vt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};vt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};l1();var a1="firebase",u1="10.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ft(a1,u1,"app");const Ig="@firebase/installations",fc="0.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=1e4,Tg=`w:${fc}`,Ng="FIS_v2",c1="https://firebaseinstallations.googleapis.com/v1",d1=60*60*1e3,f1="installations",h1="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Tn=new ko(f1,h1,p1);function Rg(t){return t instanceof Pn&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg({projectId:t}){return`${c1}/projects/${t}/installations`}function Pg(t){return{token:t.token,requestStatus:2,expiresIn:g1(t.expiresIn),creationTime:Date.now()}}async function Ag(t,e){const r=(await e.json()).error;return Tn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Dg({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function m1(t,{refreshToken:e}){const n=Dg(t);return n.append("Authorization",_1(e)),n}async function Og(t){const e=await t();return e.status>=500&&e.status<600?t():e}function g1(t){return Number(t.replace("s","000"))}function _1(t){return`${Ng} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y1({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=xg(t),i=Dg(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Ng,appId:t.appId,sdkVersion:Tg},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Og(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Pg(u.authToken)}}else throw await Ag("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=/^[cdef][\w-]{21}$/,za="";function E1(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=C1(t);return w1.test(n)?n:za}catch{return za}}function C1(t){return v1(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=new Map;function Fg(t,e){const n=Mo(t);zg(n,e),S1(n,e)}function zg(t,e){const n=Lg.get(t);if(n)for(const r of n)r(e)}function S1(t,e){const n=I1();n&&n.postMessage({key:t,fid:e}),k1()}let fn=null;function I1(){return!fn&&"BroadcastChannel"in self&&(fn=new BroadcastChannel("[Firebase] FID Change"),fn.onmessage=t=>{zg(t.data.key,t.data.fid)}),fn}function k1(){Lg.size===0&&fn&&(fn.close(),fn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1="firebase-installations-database",N1=1,Nn="firebase-installations-store";let Cl=null;function hc(){return Cl||(Cl=rm(T1,N1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Nn)}}})),Cl}async function oo(t,e){const n=Mo(t),i=(await hc()).transaction(Nn,"readwrite"),s=i.objectStore(Nn),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Fg(t,e.fid),e}async function bg(t){const e=Mo(t),r=(await hc()).transaction(Nn,"readwrite");await r.objectStore(Nn).delete(e),await r.done}async function Lo(t,e){const n=Mo(t),i=(await hc()).transaction(Nn,"readwrite"),s=i.objectStore(Nn),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Fg(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pc(t){let e;const n=await Lo(t.appConfig,r=>{const i=R1(r),s=x1(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===za?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function R1(t){const e=t||{fid:E1(),registrationStatus:0};return Ug(e)}function x1(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Tn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=P1(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:A1(t)}:{installationEntry:e}}async function P1(t,e){try{const n=await y1(t,e);return oo(t.appConfig,n)}catch(n){throw Rg(n)&&n.customData.serverCode===409?await bg(t.appConfig):await oo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function A1(t){let e=await Cf(t.appConfig);for(;e.registrationStatus===1;)await Mg(100),e=await Cf(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await pc(t);return r||n}return e}function Cf(t){return Lo(t,e=>{if(!e)throw Tn.create("installation-not-found");return Ug(e)})}function Ug(t){return D1(t)?{fid:t.fid,registrationStatus:0}:t}function D1(t){return t.registrationStatus===1&&t.registrationTime+kg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1({appConfig:t,heartbeatServiceProvider:e},n){const r=M1(t,n),i=m1(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Tg,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Og(()=>fetch(r,l));if(a.ok){const u=await a.json();return Pg(u)}else throw await Ag("Generate Auth Token",a)}function M1(t,{fid:e}){return`${xg(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mc(t,e=!1){let n;const r=await Lo(t.appConfig,s=>{if(!Bg(s))throw Tn.create("not-registered");const o=s.authToken;if(!e&&z1(o))return s;if(o.requestStatus===1)return n=L1(t,e),s;{if(!navigator.onLine)throw Tn.create("app-offline");const l=U1(s);return n=F1(t,l),l}});return n?await n:r.authToken}async function L1(t,e){let n=await Sf(t.appConfig);for(;n.authToken.requestStatus===1;)await Mg(100),n=await Sf(t.appConfig);const r=n.authToken;return r.requestStatus===0?mc(t,e):r}function Sf(t){return Lo(t,e=>{if(!Bg(e))throw Tn.create("not-registered");const n=e.authToken;return B1(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function F1(t,e){try{const n=await O1(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await oo(t.appConfig,r),n}catch(n){if(Rg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await bg(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await oo(t.appConfig,r)}throw n}}function Bg(t){return t!==void 0&&t.registrationStatus===2}function z1(t){return t.requestStatus===2&&!b1(t)}function b1(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+d1}function U1(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function B1(t){return t.requestStatus===1&&t.requestTime+kg<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j1(t){const e=t,{installationEntry:n,registrationPromise:r}=await pc(e);return r?r.catch(console.error):mc(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $1(t,e=!1){const n=t;return await W1(n),(await mc(n,e)).token}async function W1(t){const{registrationPromise:e}=await pc(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(t){if(!t||!t.options)throw Sl("App Configuration");if(!t.name)throw Sl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Sl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Sl(t){return Tn.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg="installations",H1="installations-internal",G1=t=>{const e=t.getProvider("app").getImmediate(),n=V1(e),r=Oi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Q1=t=>{const e=t.getProvider("app").getImmediate(),n=Oi(e,jg).getImmediate();return{getId:()=>j1(n),getToken:i=>$1(n,i)}};function K1(){Yt(new It(jg,G1,"PUBLIC")),Yt(new It(H1,Q1,"PRIVATE"))}K1();ft(Ig,fc);ft(Ig,fc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="analytics",Y1="firebase_id",q1="origin",X1=60*1e3,J1="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",gc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=new Mu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ue=new ko("analytics","Analytics",Z1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(t){if(!t.startsWith(gc)){const e=Ue.create("invalid-gtag-resource",{gtagURL:t});return Oe.warn(e.message),""}return t}function $g(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function tS(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function nS(t,e){const n=tS("firebase-js-sdk-policy",{createScriptURL:eS}),r=document.createElement("script"),i=`${gc}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function rS(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function iS(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const a=(await $g(n)).find(u=>u.measurementId===i);a&&await e[a.appId]}}catch(l){Oe.error(l)}t("config",i,s)}async function sS(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await $g(n);for(const a of o){const u=l.find(c=>c.measurementId===a),d=u&&e[u.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Oe.error(s)}}function oS(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,a]=o;await sS(t,e,n,l,a)}else if(s==="config"){const[l,a]=o;await iS(t,e,n,r,l,a)}else if(s==="consent"){const[l]=o;t("consent","update",l)}else if(s==="get"){const[l,a,u]=o;t("get",l,a,u)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Oe.error(l)}}return i}function lS(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=oS(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function aS(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(gc)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=30,cS=1e3;class dS{constructor(e={},n=cS){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Wg=new dS;function fS(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function hS(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:fS(r)},s=J1.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(l=a.error.message)}catch{}throw Ue.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function pS(t,e=Wg,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ue.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ue.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new _S;return setTimeout(async()=>{l.abort()},n!==void 0?n:X1),Vg({appId:r,apiKey:i,measurementId:s},o,l,e)}async function Vg(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Wg){var s;const{appId:o,measurementId:l}=t;try{await mS(r,e)}catch(a){if(l)return Oe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await hS(t);return i.deleteThrottleMetadata(o),a}catch(a){const u=a;if(!gS(u)){if(i.deleteThrottleMetadata(o),l)return Oe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw a}const d=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Pd(n,i.intervalMillis,uS):Pd(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,c),Oe.debug(`Calling attemptFetch again in ${d} millis`),Vg(t,c,r,i)}}function mS(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ue.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function gS(t){if(!(t instanceof Pn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class _S{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function yS(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(){if(Xp())try{await Jp()}catch(t){return Oe.warn(Ue.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Oe.warn(Ue.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function wS(t,e,n,r,i,s,o){var l;const a=pS(t);a.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Oe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Oe.error(g)),e.push(a);const u=vS().then(g=>{if(g)return r.getId()}),[d,c]=await Promise.all([a,u]);aS(s)||nS(s,d.measurementId),i("js",new Date);const f=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return f[q1]="firebase",f.update=!0,c!=null&&(f[Y1]=c),i("config",d.measurementId,f),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e){this.app=e}_delete(){return delete ei[this.app.options.appId],Promise.resolve()}}let ei={},If=[];const kf={};let Il="dataLayer",CS="gtag",Tf,Hg,Nf=!1;function SS(){const t=[];if(Mv()&&t.push("This is a browser extension environment."),Fv()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ue.create("invalid-analytics-context",{errorInfo:e});Oe.warn(n.message)}}function IS(t,e,n){SS();const r=t.options.appId;if(!r)throw Ue.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Oe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ue.create("no-api-key");if(ei[r]!=null)throw Ue.create("already-exists",{id:r});if(!Nf){rS(Il);const{wrappedGtag:s,gtagCore:o}=lS(ei,If,kf,Il,CS);Hg=s,Tf=o,Nf=!0}return ei[r]=wS(t,If,kf,e,Tf,Il,n),new ES(t)}function kS(t=sm()){t=wr(t);const e=Oi(t,lo);return e.isInitialized()?e.getImmediate():TS(t)}function TS(t,e={}){const n=Oi(t,lo);if(n.isInitialized()){const i=n.getImmediate();if(Hs(e,n.getOptions()))return i;throw Ue.create("already-initialized")}return n.initialize({options:e})}function NS(t,e,n,r){t=wr(t),yS(Hg,ei[t.app.options.appId],e,n,r).catch(i=>Oe.error(i))}const Rf="@firebase/analytics",xf="0.10.2";function RS(){Yt(new It(lo,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return IS(r,i,n)},"PUBLIC")),Yt(new It("analytics-internal",t,"PRIVATE")),ft(Rf,xf),ft(Rf,xf,"esm2017");function t(e){try{const n=e.getProvider(lo).getImmediate();return{logEvent:(r,i,s)=>NS(n,r,i,s)}}catch(n){throw Ue.create("interop-component-reg-failed",{reason:n})}}}RS();const xS={apiKey:"AIzaSyAWXzE1xdVa7XQruWlQHLK9JtgW-uqkv_4",authDomain:"list-iphone-store.firebaseapp.com",projectId:"list-iphone-store",storageBucket:"list-iphone-store.appspot.com",messagingSenderId:"98895176605",appId:"1:98895176605:web:dda51bbe9524d406d00574",measurementId:"G-314BSY59BL"},Gg=im(xS);kS(Gg);const PS=s1(Gg);function AS(){const[t,e]=ti.useState([]);ti.useEffect(()=>{const r=YC(PS,"iphones/");return XC(r,i=>{const s=i.val();s&&e(Object.values(s))}),()=>{}},[]);const n=t.map((r,i)=>B.jsx(Ev,{image:r.image,name:r.name,price:r.price,capacity:r.capacity,color:r.color,status:r.status},i));return B.jsx("div",{className:"cards",children:n})}function DS(){return B.jsx("footer",{children:B.jsxs("p",{children:["© ",new Date().getFullYear()," Guk Store Import"]})})}function OS(){return B.jsx("header",{class:"header-top dropshadow",children:B.jsx("div",{class:"header-wrap",children:B.jsxs("div",{class:"header-content align-bottom",children:[B.jsx("img",{className:"logo-img",src:"/images/logo.png",align:"left"}),B.jsx("h1",{children:B.jsx("span",{class:"nobr",children:"Guk Store Imports"})})]})})})}function MS(){return B.jsxs(B.Fragment,{children:[B.jsx(OS,{}),B.jsx(AS,{}),B.jsx(DS,{})]})}kl.createRoot(document.getElementById("root")).render(B.jsx(c_.StrictMode,{children:B.jsx(MS,{})}));
