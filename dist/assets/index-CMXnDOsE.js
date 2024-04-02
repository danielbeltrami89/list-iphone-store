(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function qg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Df={exports:{}},uo={},Of={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ri=Symbol.for("react.element"),Xg=Symbol.for("react.portal"),Jg=Symbol.for("react.fragment"),Zg=Symbol.for("react.strict_mode"),e_=Symbol.for("react.profiler"),t_=Symbol.for("react.provider"),n_=Symbol.for("react.context"),r_=Symbol.for("react.forward_ref"),i_=Symbol.for("react.suspense"),s_=Symbol.for("react.memo"),o_=Symbol.for("react.lazy"),wc=Symbol.iterator;function l_(t){return t===null||typeof t!="object"?null:(t=wc&&t[wc]||t["@@iterator"],typeof t=="function"?t:null)}var Mf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lf=Object.assign,Ff={};function _r(t,e,n){this.props=t,this.context=e,this.refs=Ff,this.updater=n||Mf}_r.prototype.isReactComponent={};_r.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_r.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zf(){}zf.prototype=_r.prototype;function ja(t,e,n){this.props=t,this.context=e,this.refs=Ff,this.updater=n||Mf}var Ba=ja.prototype=new zf;Ba.constructor=ja;Lf(Ba,_r.prototype);Ba.isPureReactComponent=!0;var Ec=Array.isArray,bf=Object.prototype.hasOwnProperty,Wa={current:null},Uf={key:!0,ref:!0,__self:!0,__source:!0};function jf(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bf.call(e,r)&&!Uf.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ri,type:t,key:s,ref:o,props:i,_owner:Wa.current}}function a_(t,e){return{$$typeof:Ri,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $a(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ri}function u_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cc=/\/+/g;function jo(t,e){return typeof t=="object"&&t!==null&&t.key!=null?u_(""+t.key):e.toString(36)}function as(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ri:case Xg:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+jo(o,0):r,Ec(i)?(n="",t!=null&&(n=t.replace(Cc,"$&/")+"/"),as(i,e,n,"",function(u){return u})):i!=null&&($a(i)&&(i=a_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Cc,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ec(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+jo(s,l);o+=as(s,e,n,a,i)}else if(a=l_(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+jo(s,l++),o+=as(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $i(t,e,n){if(t==null)return t;var r=[],i=0;return as(t,r,"","",function(s){return e.call(n,s,i++)}),r}function c_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ie={current:null},us={transition:null},d_={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:us,ReactCurrentOwner:Wa};L.Children={map:$i,forEach:function(t,e,n){$i(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $i(t,function(){e++}),e},toArray:function(t){return $i(t,function(e){return e})||[]},only:function(t){if(!$a(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};L.Component=_r;L.Fragment=Jg;L.Profiler=e_;L.PureComponent=ja;L.StrictMode=Zg;L.Suspense=i_;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d_;L.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Lf({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wa.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)bf.call(e,a)&&!Uf.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ri,type:t.type,key:i,ref:s,props:r,_owner:o}};L.createContext=function(t){return t={$$typeof:n_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:t_,_context:t},t.Consumer=t};L.createElement=jf;L.createFactory=function(t){var e=jf.bind(null,t);return e.type=t,e};L.createRef=function(){return{current:null}};L.forwardRef=function(t){return{$$typeof:r_,render:t}};L.isValidElement=$a;L.lazy=function(t){return{$$typeof:o_,_payload:{_status:-1,_result:t},_init:c_}};L.memo=function(t,e){return{$$typeof:s_,type:t,compare:e===void 0?null:e}};L.startTransition=function(t){var e=us.transition;us.transition={};try{t()}finally{us.transition=e}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(t,e){return Ie.current.useCallback(t,e)};L.useContext=function(t){return Ie.current.useContext(t)};L.useDebugValue=function(){};L.useDeferredValue=function(t){return Ie.current.useDeferredValue(t)};L.useEffect=function(t,e){return Ie.current.useEffect(t,e)};L.useId=function(){return Ie.current.useId()};L.useImperativeHandle=function(t,e,n){return Ie.current.useImperativeHandle(t,e,n)};L.useInsertionEffect=function(t,e){return Ie.current.useInsertionEffect(t,e)};L.useLayoutEffect=function(t,e){return Ie.current.useLayoutEffect(t,e)};L.useMemo=function(t,e){return Ie.current.useMemo(t,e)};L.useReducer=function(t,e,n){return Ie.current.useReducer(t,e,n)};L.useRef=function(t){return Ie.current.useRef(t)};L.useState=function(t){return Ie.current.useState(t)};L.useSyncExternalStore=function(t,e,n){return Ie.current.useSyncExternalStore(t,e,n)};L.useTransition=function(){return Ie.current.useTransition()};L.version="18.2.0";Of.exports=L;var ni=Of.exports;const f_=qg(ni);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_=ni,p_=Symbol.for("react.element"),m_=Symbol.for("react.fragment"),g_=Object.prototype.hasOwnProperty,__=h_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y_={key:!0,ref:!0,__self:!0,__source:!0};function Bf(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)g_.call(e,r)&&!y_.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:p_,type:t,key:s,ref:o,props:i,_owner:__.current}}uo.Fragment=m_;uo.jsx=Bf;uo.jsxs=Bf;Df.exports=uo;var b=Df.exports,Nl={},Wf={exports:{}},Be={},$f={exports:{}},Vf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,P){var A=I.length;I.push(P);e:for(;0<A;){var te=A-1>>>1,le=I[te];if(0<i(le,P))I[te]=P,I[A]=le,A=te;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var P=I[0],A=I.pop();if(A!==P){I[0]=A;e:for(var te=0,le=I.length,Bi=le>>>1;te<Bi;){var nn=2*(te+1)-1,Uo=I[nn],rn=nn+1,Wi=I[rn];if(0>i(Uo,A))rn<le&&0>i(Wi,Uo)?(I[te]=Wi,I[rn]=A,te=rn):(I[te]=Uo,I[nn]=A,te=nn);else if(rn<le&&0>i(Wi,A))I[te]=Wi,I[rn]=A,te=rn;else break e}}return P}function i(I,P){var A=I.sortIndex-P.sortIndex;return A!==0?A:I.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,f=3,g=!1,_=!1,v=!1,R=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(I){for(var P=n(u);P!==null;){if(P.callback===null)r(u);else if(P.startTime<=I)r(u),P.sortIndex=P.expirationTime,e(a,P);else break;P=n(u)}}function y(I){if(v=!1,m(I),!_)if(n(a)!==null)_=!0,zo(S);else{var P=n(u);P!==null&&bo(y,P.startTime-I)}}function S(I,P){_=!1,v&&(v=!1,p(N),N=-1),g=!0;var A=f;try{for(m(P),c=n(a);c!==null&&(!(c.expirationTime>P)||I&&!Ye());){var te=c.callback;if(typeof te=="function"){c.callback=null,f=c.priorityLevel;var le=te(c.expirationTime<=P);P=t.unstable_now(),typeof le=="function"?c.callback=le:c===n(a)&&r(a),m(P)}else r(a);c=n(a)}if(c!==null)var Bi=!0;else{var nn=n(u);nn!==null&&bo(y,nn.startTime-P),Bi=!1}return Bi}finally{c=null,f=A,g=!1}}var k=!1,T=null,N=-1,ee=5,F=-1;function Ye(){return!(t.unstable_now()-F<ee)}function Ir(){if(T!==null){var I=t.unstable_now();F=I;var P=!0;try{P=T(!0,I)}finally{P?kr():(k=!1,T=null)}}else k=!1}var kr;if(typeof h=="function")kr=function(){h(Ir)};else if(typeof MessageChannel<"u"){var vc=new MessageChannel,Yg=vc.port2;vc.port1.onmessage=Ir,kr=function(){Yg.postMessage(null)}}else kr=function(){R(Ir,0)};function zo(I){T=I,k||(k=!0,kr())}function bo(I,P){N=R(function(){I(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,zo(S))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var A=f;f=P;try{return I()}finally{f=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,P){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var A=f;f=I;try{return P()}finally{f=A}},t.unstable_scheduleCallback=function(I,P,A){var te=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?te+A:te):A=te,I){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=A+le,I={id:d++,callback:P,priorityLevel:I,startTime:A,expirationTime:le,sortIndex:-1},A>te?(I.sortIndex=A,e(u,I),n(a)===null&&I===n(u)&&(v?(p(N),N=-1):v=!0,bo(y,A-te))):(I.sortIndex=le,e(a,I),_||g||(_=!0,zo(S))),I},t.unstable_shouldYield=Ye,t.unstable_wrapCallback=function(I){var P=f;return function(){var A=f;f=P;try{return I.apply(this,arguments)}finally{f=A}}}})(Vf);$f.exports=Vf;var v_=$f.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf=ni,je=v_;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gf=new Set,ri={};function Rn(t,e){or(t,e),or(t+"Capture",e)}function or(t,e){for(ri[t]=e,t=0;t<e.length;t++)Gf.add(e[t])}var Et=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xl=Object.prototype.hasOwnProperty,w_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sc={},Ic={};function E_(t){return xl.call(Ic,t)?!0:xl.call(Sc,t)?!1:w_.test(t)?Ic[t]=!0:(Sc[t]=!0,!1)}function C_(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function S_(t,e,n,r){if(e===null||typeof e>"u"||C_(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ke(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){me[t]=new ke(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];me[e]=new ke(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){me[t]=new ke(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){me[t]=new ke(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){me[t]=new ke(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){me[t]=new ke(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){me[t]=new ke(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){me[t]=new ke(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){me[t]=new ke(t,5,!1,t.toLowerCase(),null,!1,!1)});var Va=/[\-:]([a-z])/g;function Ha(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Va,Ha);me[e]=new ke(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Va,Ha);me[e]=new ke(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Va,Ha);me[e]=new ke(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){me[t]=new ke(t,1,!1,t.toLowerCase(),null,!1,!1)});me.xlinkHref=new ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){me[t]=new ke(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ga(t,e,n,r){var i=me.hasOwnProperty(e)?me[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(S_(e,n,i,r)&&(n=null),r||i===null?E_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Nt=Hf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vi=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),zn=Symbol.for("react.fragment"),Qa=Symbol.for("react.strict_mode"),Rl=Symbol.for("react.profiler"),Qf=Symbol.for("react.provider"),Kf=Symbol.for("react.context"),Ka=Symbol.for("react.forward_ref"),Pl=Symbol.for("react.suspense"),Al=Symbol.for("react.suspense_list"),Ya=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),Yf=Symbol.for("react.offscreen"),kc=Symbol.iterator;function Tr(t){return t===null||typeof t!="object"?null:(t=kc&&t[kc]||t["@@iterator"],typeof t=="function"?t:null)}var X=Object.assign,Bo;function br(t){if(Bo===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bo=e&&e[1]||""}return`
`+Bo+t}var Wo=!1;function $o(t,e){if(!t||Wo)return"";Wo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{Wo=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?br(t):""}function I_(t){switch(t.tag){case 5:return br(t.type);case 16:return br("Lazy");case 13:return br("Suspense");case 19:return br("SuspenseList");case 0:case 2:case 15:return t=$o(t.type,!1),t;case 11:return t=$o(t.type.render,!1),t;case 1:return t=$o(t.type,!0),t;default:return""}}function Dl(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zn:return"Fragment";case Fn:return"Portal";case Rl:return"Profiler";case Qa:return"StrictMode";case Pl:return"Suspense";case Al:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Kf:return(t.displayName||"Context")+".Consumer";case Qf:return(t._context.displayName||"Context")+".Provider";case Ka:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ya:return e=t.displayName||null,e!==null?e:Dl(t.type)||"Memo";case At:e=t._payload,t=t._init;try{return Dl(t(e))}catch{}}return null}function k_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dl(e);case 8:return e===Qa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Kt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function T_(t){var e=qf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Hi(t){t._valueTracker||(t._valueTracker=T_(t))}function Xf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ws(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ol(t,e){var n=e.checked;return X({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Tc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Kt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Jf(t,e){e=e.checked,e!=null&&Ga(t,"checked",e,!1)}function Ml(t,e){Jf(t,e);var n=Kt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ll(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ll(t,e.type,Kt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ll(t,e,n){(e!=="number"||ws(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ur=Array.isArray;function qn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Kt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Fl(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return X({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(Ur(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Kt(n)}}function Zf(t,e){var n=Kt(e.value),r=Kt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Rc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function eh(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zl(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?eh(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Gi,th=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Gi=Gi||document.createElement("div"),Gi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Gi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ii(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},N_=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(t){N_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wr[e]=Wr[t]})});function nh(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wr.hasOwnProperty(t)&&Wr[t]?(""+e).trim():e+"px"}function rh(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=nh(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var x_=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bl(t,e){if(e){if(x_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function Ul(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jl=null;function qa(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bl=null,Xn=null,Jn=null;function Pc(t){if(t=Di(t)){if(typeof Bl!="function")throw Error(w(280));var e=t.stateNode;e&&(e=mo(e),Bl(t.stateNode,t.type,e))}}function ih(t){Xn?Jn?Jn.push(t):Jn=[t]:Xn=t}function sh(){if(Xn){var t=Xn,e=Jn;if(Jn=Xn=null,Pc(t),e)for(t=0;t<e.length;t++)Pc(e[t])}}function oh(t,e){return t(e)}function lh(){}var Vo=!1;function ah(t,e,n){if(Vo)return t(e,n);Vo=!0;try{return oh(t,e,n)}finally{Vo=!1,(Xn!==null||Jn!==null)&&(lh(),sh())}}function si(t,e){var n=t.stateNode;if(n===null)return null;var r=mo(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var Wl=!1;if(Et)try{var Nr={};Object.defineProperty(Nr,"passive",{get:function(){Wl=!0}}),window.addEventListener("test",Nr,Nr),window.removeEventListener("test",Nr,Nr)}catch{Wl=!1}function R_(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var $r=!1,Es=null,Cs=!1,$l=null,P_={onError:function(t){$r=!0,Es=t}};function A_(t,e,n,r,i,s,o,l,a){$r=!1,Es=null,R_.apply(P_,arguments)}function D_(t,e,n,r,i,s,o,l,a){if(A_.apply(this,arguments),$r){if($r){var u=Es;$r=!1,Es=null}else throw Error(w(198));Cs||(Cs=!0,$l=u)}}function Pn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uh(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ac(t){if(Pn(t)!==t)throw Error(w(188))}function O_(t){var e=t.alternate;if(!e){if(e=Pn(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ac(i),t;if(s===r)return Ac(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function ch(t){return t=O_(t),t!==null?dh(t):null}function dh(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dh(t);if(e!==null)return e;t=t.sibling}return null}var fh=je.unstable_scheduleCallback,Dc=je.unstable_cancelCallback,M_=je.unstable_shouldYield,L_=je.unstable_requestPaint,ne=je.unstable_now,F_=je.unstable_getCurrentPriorityLevel,Xa=je.unstable_ImmediatePriority,hh=je.unstable_UserBlockingPriority,Ss=je.unstable_NormalPriority,z_=je.unstable_LowPriority,ph=je.unstable_IdlePriority,co=null,dt=null;function b_(t){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(co,t,void 0,(t.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:B_,U_=Math.log,j_=Math.LN2;function B_(t){return t>>>=0,t===0?32:31-(U_(t)/j_|0)|0}var Qi=64,Ki=4194304;function jr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Is(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=jr(l):(s&=o,s!==0&&(r=jr(s)))}else o=n&~i,o!==0?r=jr(o):s!==0&&(r=jr(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-rt(e),i=1<<n,r|=t[n],e&=~i;return r}function W_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-rt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=W_(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function Vl(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mh(){var t=Qi;return Qi<<=1,!(Qi&4194240)&&(Qi=64),t}function Ho(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Pi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-rt(e),t[e]=n}function V_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-rt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ja(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-rt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var j=0;function gh(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _h,Za,yh,vh,wh,Hl=!1,Yi=[],zt=null,bt=null,Ut=null,oi=new Map,li=new Map,Ot=[],H_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oc(t,e){switch(t){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":oi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":li.delete(e.pointerId)}}function xr(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Di(e),e!==null&&Za(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function G_(t,e,n,r,i){switch(e){case"focusin":return zt=xr(zt,t,e,n,r,i),!0;case"dragenter":return bt=xr(bt,t,e,n,r,i),!0;case"mouseover":return Ut=xr(Ut,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return oi.set(s,xr(oi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,li.set(s,xr(li.get(s)||null,t,e,n,r,i)),!0}return!1}function Eh(t){var e=un(t.target);if(e!==null){var n=Pn(e);if(n!==null){if(e=n.tag,e===13){if(e=uh(n),e!==null){t.blockedOn=e,wh(t.priority,function(){yh(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cs(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gl(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);jl=r,n.target.dispatchEvent(r),jl=null}else return e=Di(n),e!==null&&Za(e),t.blockedOn=n,!1;e.shift()}return!0}function Mc(t,e,n){cs(t)&&n.delete(e)}function Q_(){Hl=!1,zt!==null&&cs(zt)&&(zt=null),bt!==null&&cs(bt)&&(bt=null),Ut!==null&&cs(Ut)&&(Ut=null),oi.forEach(Mc),li.forEach(Mc)}function Rr(t,e){t.blockedOn===e&&(t.blockedOn=null,Hl||(Hl=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,Q_)))}function ai(t){function e(i){return Rr(i,t)}if(0<Yi.length){Rr(Yi[0],t);for(var n=1;n<Yi.length;n++){var r=Yi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(zt!==null&&Rr(zt,t),bt!==null&&Rr(bt,t),Ut!==null&&Rr(Ut,t),oi.forEach(e),li.forEach(e),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)Eh(n),n.blockedOn===null&&Ot.shift()}var Zn=Nt.ReactCurrentBatchConfig,ks=!0;function K_(t,e,n,r){var i=j,s=Zn.transition;Zn.transition=null;try{j=1,eu(t,e,n,r)}finally{j=i,Zn.transition=s}}function Y_(t,e,n,r){var i=j,s=Zn.transition;Zn.transition=null;try{j=4,eu(t,e,n,r)}finally{j=i,Zn.transition=s}}function eu(t,e,n,r){if(ks){var i=Gl(t,e,n,r);if(i===null)tl(t,e,r,Ts,n),Oc(t,r);else if(G_(i,t,e,n,r))r.stopPropagation();else if(Oc(t,r),e&4&&-1<H_.indexOf(t)){for(;i!==null;){var s=Di(i);if(s!==null&&_h(s),s=Gl(t,e,n,r),s===null&&tl(t,e,r,Ts,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else tl(t,e,r,null,n)}}var Ts=null;function Gl(t,e,n,r){if(Ts=null,t=qa(r),t=un(t),t!==null)if(e=Pn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uh(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ts=t,null}function Ch(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(F_()){case Xa:return 1;case hh:return 4;case Ss:case z_:return 16;case ph:return 536870912;default:return 16}default:return 16}}var Lt=null,tu=null,ds=null;function Sh(){if(ds)return ds;var t,e=tu,n=e.length,r,i="value"in Lt?Lt.value:Lt.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ds=i.slice(t,1<r?1-r:void 0)}function fs(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qi(){return!0}function Lc(){return!1}function We(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qi:Lc,this.isPropagationStopped=Lc,this}return X(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),e}var yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nu=We(yr),Ai=X({},yr,{view:0,detail:0}),q_=We(Ai),Go,Qo,Pr,fo=X({},Ai,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Pr&&(Pr&&t.type==="mousemove"?(Go=t.screenX-Pr.screenX,Qo=t.screenY-Pr.screenY):Qo=Go=0,Pr=t),Go)},movementY:function(t){return"movementY"in t?t.movementY:Qo}}),Fc=We(fo),X_=X({},fo,{dataTransfer:0}),J_=We(X_),Z_=X({},Ai,{relatedTarget:0}),Ko=We(Z_),ey=X({},yr,{animationName:0,elapsedTime:0,pseudoElement:0}),ty=We(ey),ny=X({},yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ry=We(ny),iy=X({},yr,{data:0}),zc=We(iy),sy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ay(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ly[t])?!!e[t]:!1}function ru(){return ay}var uy=X({},Ai,{key:function(t){if(t.key){var e=sy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?oy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(t){return t.type==="keypress"?fs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cy=We(uy),dy=X({},fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bc=We(dy),fy=X({},Ai,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),hy=We(fy),py=X({},yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),my=We(py),gy=X({},fo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_y=We(gy),yy=[9,13,27,32],iu=Et&&"CompositionEvent"in window,Vr=null;Et&&"documentMode"in document&&(Vr=document.documentMode);var vy=Et&&"TextEvent"in window&&!Vr,Ih=Et&&(!iu||Vr&&8<Vr&&11>=Vr),Uc=" ",jc=!1;function kh(t,e){switch(t){case"keyup":return yy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Th(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bn=!1;function wy(t,e){switch(t){case"compositionend":return Th(e);case"keypress":return e.which!==32?null:(jc=!0,Uc);case"textInput":return t=e.data,t===Uc&&jc?null:t;default:return null}}function Ey(t,e){if(bn)return t==="compositionend"||!iu&&kh(t,e)?(t=Sh(),ds=tu=Lt=null,bn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ih&&e.locale!=="ko"?null:e.data;default:return null}}var Cy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Cy[t.type]:e==="textarea"}function Nh(t,e,n,r){ih(r),e=Ns(e,"onChange"),0<e.length&&(n=new nu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hr=null,ui=null;function Sy(t){bh(t,0)}function ho(t){var e=Bn(t);if(Xf(e))return t}function Iy(t,e){if(t==="change")return e}var xh=!1;if(Et){var Yo;if(Et){var qo="oninput"in document;if(!qo){var Wc=document.createElement("div");Wc.setAttribute("oninput","return;"),qo=typeof Wc.oninput=="function"}Yo=qo}else Yo=!1;xh=Yo&&(!document.documentMode||9<document.documentMode)}function $c(){Hr&&(Hr.detachEvent("onpropertychange",Rh),ui=Hr=null)}function Rh(t){if(t.propertyName==="value"&&ho(ui)){var e=[];Nh(e,ui,t,qa(t)),ah(Sy,e)}}function ky(t,e,n){t==="focusin"?($c(),Hr=e,ui=n,Hr.attachEvent("onpropertychange",Rh)):t==="focusout"&&$c()}function Ty(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ho(ui)}function Ny(t,e){if(t==="click")return ho(e)}function xy(t,e){if(t==="input"||t==="change")return ho(e)}function Ry(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ot=typeof Object.is=="function"?Object.is:Ry;function ci(t,e){if(ot(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xl.call(e,i)||!ot(t[i],e[i]))return!1}return!0}function Vc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hc(t,e){var n=Vc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vc(n)}}function Ph(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ph(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ah(){for(var t=window,e=ws();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ws(t.document)}return e}function su(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Py(t){var e=Ah(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ph(n.ownerDocument.documentElement,n)){if(r!==null&&su(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Hc(n,s);var o=Hc(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ay=Et&&"documentMode"in document&&11>=document.documentMode,Un=null,Ql=null,Gr=null,Kl=!1;function Gc(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kl||Un==null||Un!==ws(r)||(r=Un,"selectionStart"in r&&su(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&ci(Gr,r)||(Gr=r,r=Ns(Ql,"onSelect"),0<r.length&&(e=new nu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Un)))}function Xi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var jn={animationend:Xi("Animation","AnimationEnd"),animationiteration:Xi("Animation","AnimationIteration"),animationstart:Xi("Animation","AnimationStart"),transitionend:Xi("Transition","TransitionEnd")},Xo={},Dh={};Et&&(Dh=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function po(t){if(Xo[t])return Xo[t];if(!jn[t])return t;var e=jn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Dh)return Xo[t]=e[n];return t}var Oh=po("animationend"),Mh=po("animationiteration"),Lh=po("animationstart"),Fh=po("transitionend"),zh=new Map,Qc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zt(t,e){zh.set(t,e),Rn(e,[t])}for(var Jo=0;Jo<Qc.length;Jo++){var Zo=Qc[Jo],Dy=Zo.toLowerCase(),Oy=Zo[0].toUpperCase()+Zo.slice(1);Zt(Dy,"on"+Oy)}Zt(Oh,"onAnimationEnd");Zt(Mh,"onAnimationIteration");Zt(Lh,"onAnimationStart");Zt("dblclick","onDoubleClick");Zt("focusin","onFocus");Zt("focusout","onBlur");Zt(Fh,"onTransitionEnd");or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),My=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function Kc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,D_(r,e,void 0,t),t.currentTarget=null}function bh(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Kc(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Kc(i,l,u),s=a}}}if(Cs)throw t=$l,Cs=!1,$l=null,t}function H(t,e){var n=e[Zl];n===void 0&&(n=e[Zl]=new Set);var r=t+"__bubble";n.has(r)||(Uh(e,t,2,!1),n.add(r))}function el(t,e,n){var r=0;e&&(r|=4),Uh(n,t,r,e)}var Ji="_reactListening"+Math.random().toString(36).slice(2);function di(t){if(!t[Ji]){t[Ji]=!0,Gf.forEach(function(n){n!=="selectionchange"&&(My.has(n)||el(n,!1,t),el(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ji]||(e[Ji]=!0,el("selectionchange",!1,e))}}function Uh(t,e,n,r){switch(Ch(e)){case 1:var i=K_;break;case 4:i=Y_;break;default:i=eu}n=i.bind(null,e,n,t),i=void 0,!Wl||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function tl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=un(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}ah(function(){var u=s,d=qa(n),c=[];e:{var f=zh.get(t);if(f!==void 0){var g=nu,_=t;switch(t){case"keypress":if(fs(n)===0)break e;case"keydown":case"keyup":g=cy;break;case"focusin":_="focus",g=Ko;break;case"focusout":_="blur",g=Ko;break;case"beforeblur":case"afterblur":g=Ko;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Fc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=J_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=hy;break;case Oh:case Mh:case Lh:g=ty;break;case Fh:g=my;break;case"scroll":g=q_;break;case"wheel":g=_y;break;case"copy":case"cut":case"paste":g=ry;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=bc}var v=(e&4)!==0,R=!v&&t==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var h=u,m;h!==null;){m=h;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=si(h,p),y!=null&&v.push(fi(h,y,m)))),R)break;h=h.return}0<v.length&&(f=new g(f,_,null,n,d),c.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==jl&&(_=n.relatedTarget||n.fromElement)&&(un(_)||_[Ct]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?un(_):null,_!==null&&(R=Pn(_),_!==R||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(v=Fc,y="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(v=bc,y="onPointerLeave",p="onPointerEnter",h="pointer"),R=g==null?f:Bn(g),m=_==null?f:Bn(_),f=new v(y,h+"leave",g,n,d),f.target=R,f.relatedTarget=m,y=null,un(d)===u&&(v=new v(p,h+"enter",_,n,d),v.target=m,v.relatedTarget=R,y=v),R=y,g&&_)t:{for(v=g,p=_,h=0,m=v;m;m=Mn(m))h++;for(m=0,y=p;y;y=Mn(y))m++;for(;0<h-m;)v=Mn(v),h--;for(;0<m-h;)p=Mn(p),m--;for(;h--;){if(v===p||p!==null&&v===p.alternate)break t;v=Mn(v),p=Mn(p)}v=null}else v=null;g!==null&&Yc(c,f,g,v,!1),_!==null&&R!==null&&Yc(c,R,_,v,!0)}}e:{if(f=u?Bn(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=Iy;else if(Bc(f))if(xh)S=xy;else{S=Ty;var k=ky}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=Ny);if(S&&(S=S(t,u))){Nh(c,S,n,d);break e}k&&k(t,f,u),t==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&Ll(f,"number",f.value)}switch(k=u?Bn(u):window,t){case"focusin":(Bc(k)||k.contentEditable==="true")&&(Un=k,Ql=u,Gr=null);break;case"focusout":Gr=Ql=Un=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,Gc(c,n,d);break;case"selectionchange":if(Ay)break;case"keydown":case"keyup":Gc(c,n,d)}var T;if(iu)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else bn?kh(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Ih&&n.locale!=="ko"&&(bn||N!=="onCompositionStart"?N==="onCompositionEnd"&&bn&&(T=Sh()):(Lt=d,tu="value"in Lt?Lt.value:Lt.textContent,bn=!0)),k=Ns(u,N),0<k.length&&(N=new zc(N,t,null,n,d),c.push({event:N,listeners:k}),T?N.data=T:(T=Th(n),T!==null&&(N.data=T)))),(T=vy?wy(t,n):Ey(t,n))&&(u=Ns(u,"onBeforeInput"),0<u.length&&(d=new zc("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=T))}bh(c,e)})}function fi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ns(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=si(t,n),s!=null&&r.unshift(fi(t,s,i)),s=si(t,e),s!=null&&r.push(fi(t,s,i))),t=t.return}return r}function Mn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Yc(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=si(n,s),a!=null&&o.unshift(fi(n,a,l))):i||(a=si(n,s),a!=null&&o.push(fi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ly=/\r\n?/g,Fy=/\u0000|\uFFFD/g;function qc(t){return(typeof t=="string"?t:""+t).replace(Ly,`
`).replace(Fy,"")}function Zi(t,e,n){if(e=qc(e),qc(t)!==e&&n)throw Error(w(425))}function xs(){}var Yl=null,ql=null;function Xl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Jl=typeof setTimeout=="function"?setTimeout:void 0,zy=typeof clearTimeout=="function"?clearTimeout:void 0,Xc=typeof Promise=="function"?Promise:void 0,by=typeof queueMicrotask=="function"?queueMicrotask:typeof Xc<"u"?function(t){return Xc.resolve(null).then(t).catch(Uy)}:Jl;function Uy(t){setTimeout(function(){throw t})}function nl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ai(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ai(e)}function jt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var vr=Math.random().toString(36).slice(2),ct="__reactFiber$"+vr,hi="__reactProps$"+vr,Ct="__reactContainer$"+vr,Zl="__reactEvents$"+vr,jy="__reactListeners$"+vr,By="__reactHandles$"+vr;function un(t){var e=t[ct];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ct]||n[ct]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jc(t);t!==null;){if(n=t[ct])return n;t=Jc(t)}return e}t=n,n=t.parentNode}return null}function Di(t){return t=t[ct]||t[Ct],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Bn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function mo(t){return t[hi]||null}var ea=[],Wn=-1;function en(t){return{current:t}}function Q(t){0>Wn||(t.current=ea[Wn],ea[Wn]=null,Wn--)}function V(t,e){Wn++,ea[Wn]=t.current,t.current=e}var Yt={},Ee=en(Yt),Pe=en(!1),_n=Yt;function lr(t,e){var n=t.type.contextTypes;if(!n)return Yt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ae(t){return t=t.childContextTypes,t!=null}function Rs(){Q(Pe),Q(Ee)}function Zc(t,e,n){if(Ee.current!==Yt)throw Error(w(168));V(Ee,e),V(Pe,n)}function jh(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,k_(t)||"Unknown",i));return X({},n,r)}function Ps(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yt,_n=Ee.current,V(Ee,t),V(Pe,Pe.current),!0}function ed(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=jh(t,e,_n),r.__reactInternalMemoizedMergedChildContext=t,Q(Pe),Q(Ee),V(Ee,t)):Q(Pe),V(Pe,n)}var mt=null,go=!1,rl=!1;function Bh(t){mt===null?mt=[t]:mt.push(t)}function Wy(t){go=!0,Bh(t)}function tn(){if(!rl&&mt!==null){rl=!0;var t=0,e=j;try{var n=mt;for(j=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mt=null,go=!1}catch(i){throw mt!==null&&(mt=mt.slice(t+1)),fh(Xa,tn),i}finally{j=e,rl=!1}}return null}var $n=[],Vn=0,As=null,Ds=0,$e=[],Ve=0,yn=null,gt=1,_t="";function sn(t,e){$n[Vn++]=Ds,$n[Vn++]=As,As=t,Ds=e}function Wh(t,e,n){$e[Ve++]=gt,$e[Ve++]=_t,$e[Ve++]=yn,yn=t;var r=gt;t=_t;var i=32-rt(r)-1;r&=~(1<<i),n+=1;var s=32-rt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gt=1<<32-rt(e)+i|n<<i|r,_t=s+t}else gt=1<<s|n<<i|r,_t=t}function ou(t){t.return!==null&&(sn(t,1),Wh(t,1,0))}function lu(t){for(;t===As;)As=$n[--Vn],$n[Vn]=null,Ds=$n[--Vn],$n[Vn]=null;for(;t===yn;)yn=$e[--Ve],$e[Ve]=null,_t=$e[--Ve],$e[Ve]=null,gt=$e[--Ve],$e[Ve]=null}var ze=null,Fe=null,K=!1,Ze=null;function $h(t,e){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function td(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ze=t,Fe=jt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ze=t,Fe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=yn!==null?{id:gt,overflow:_t}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ze=t,Fe=null,!0):!1;default:return!1}}function ta(t){return(t.mode&1)!==0&&(t.flags&128)===0}function na(t){if(K){var e=Fe;if(e){var n=e;if(!td(t,e)){if(ta(t))throw Error(w(418));e=jt(n.nextSibling);var r=ze;e&&td(t,e)?$h(r,n):(t.flags=t.flags&-4097|2,K=!1,ze=t)}}else{if(ta(t))throw Error(w(418));t.flags=t.flags&-4097|2,K=!1,ze=t}}}function nd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ze=t}function es(t){if(t!==ze)return!1;if(!K)return nd(t),K=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xl(t.type,t.memoizedProps)),e&&(e=Fe)){if(ta(t))throw Vh(),Error(w(418));for(;e;)$h(t,e),e=jt(e.nextSibling)}if(nd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Fe=jt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Fe=null}}else Fe=ze?jt(t.stateNode.nextSibling):null;return!0}function Vh(){for(var t=Fe;t;)t=jt(t.nextSibling)}function ar(){Fe=ze=null,K=!1}function au(t){Ze===null?Ze=[t]:Ze.push(t)}var $y=Nt.ReactCurrentBatchConfig;function Xe(t,e){if(t&&t.defaultProps){e=X({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Os=en(null),Ms=null,Hn=null,uu=null;function cu(){uu=Hn=Ms=null}function du(t){var e=Os.current;Q(Os),t._currentValue=e}function ra(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function er(t,e){Ms=t,uu=Hn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ne=!0),t.firstContext=null)}function Qe(t){var e=t._currentValue;if(uu!==t)if(t={context:t,memoizedValue:e,next:null},Hn===null){if(Ms===null)throw Error(w(308));Hn=t,Ms.dependencies={lanes:0,firstContext:t}}else Hn=Hn.next=t;return e}var cn=null;function fu(t){cn===null?cn=[t]:cn.push(t)}function Hh(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,fu(e)):(n.next=i.next,i.next=n),e.interleaved=n,St(t,r)}function St(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Dt=!1;function hu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Bt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,St(t,n)}return i=r.interleaved,i===null?(e.next=e,fu(r)):(e.next=i.next,i.next=e),r.interleaved=e,St(t,n)}function hs(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ja(t,n)}}function rd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ls(t,e,n,r){var i=t.updateQueue;Dt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var f=l.lane,g=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,v=l;switch(f=e,g=n,v.tag){case 1:if(_=v.payload,typeof _=="function"){c=_.call(g,c,f);break e}c=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=v.payload,f=typeof _=="function"?_.call(g,c,f):_,f==null)break e;c=X({},c,f);break e;case 2:Dt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,a=c):d=d.next=g,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);wn|=o,t.lanes=o,t.memoizedState=c}}function id(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var Qh=new Hf.Component().refs;function ia(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:X({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _o={isMounted:function(t){return(t=t._reactInternals)?Pn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Se(),i=$t(t),s=vt(r,i);s.payload=e,n!=null&&(s.callback=n),e=Bt(t,s,i),e!==null&&(it(e,t,i,r),hs(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Se(),i=$t(t),s=vt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Bt(t,s,i),e!==null&&(it(e,t,i,r),hs(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Se(),r=$t(t),i=vt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Bt(t,i,r),e!==null&&(it(e,t,r,n),hs(e,t,r))}};function sd(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ci(n,r)||!ci(i,s):!0}function Kh(t,e,n){var r=!1,i=Yt,s=e.contextType;return typeof s=="object"&&s!==null?s=Qe(s):(i=Ae(e)?_n:Ee.current,r=e.contextTypes,s=(r=r!=null)?lr(t,i):Yt),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_o,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function od(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_o.enqueueReplaceState(e,e.state,null)}function sa(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Qh,hu(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Qe(s):(s=Ae(e)?_n:Ee.current,i.context=lr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ia(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_o.enqueueReplaceState(i,i.state,null),Ls(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ar(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;l===Qh&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function ts(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ld(t){var e=t._init;return e(t._payload)}function Yh(t){function e(p,h){if(t){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Vt(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,h,m,y){return h===null||h.tag!==6?(h=cl(m,p.mode,y),h.return=p,h):(h=i(h,m),h.return=p,h)}function a(p,h,m,y){var S=m.type;return S===zn?d(p,h,m.props.children,y,m.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===At&&ld(S)===h.type)?(y=i(h,m.props),y.ref=Ar(p,h,m),y.return=p,y):(y=vs(m.type,m.key,m.props,null,p.mode,y),y.ref=Ar(p,h,m),y.return=p,y)}function u(p,h,m,y){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=dl(m,p.mode,y),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function d(p,h,m,y,S){return h===null||h.tag!==7?(h=mn(m,p.mode,y,S),h.return=p,h):(h=i(h,m),h.return=p,h)}function c(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=cl(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Vi:return m=vs(h.type,h.key,h.props,null,p.mode,m),m.ref=Ar(p,null,h),m.return=p,m;case Fn:return h=dl(h,p.mode,m),h.return=p,h;case At:var y=h._init;return c(p,y(h._payload),m)}if(Ur(h)||Tr(h))return h=mn(h,p.mode,m,null),h.return=p,h;ts(p,h)}return null}function f(p,h,m,y){var S=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:l(p,h,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Vi:return m.key===S?a(p,h,m,y):null;case Fn:return m.key===S?u(p,h,m,y):null;case At:return S=m._init,f(p,h,S(m._payload),y)}if(Ur(m)||Tr(m))return S!==null?null:d(p,h,m,y,null);ts(p,m)}return null}function g(p,h,m,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,l(h,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Vi:return p=p.get(y.key===null?m:y.key)||null,a(h,p,y,S);case Fn:return p=p.get(y.key===null?m:y.key)||null,u(h,p,y,S);case At:var k=y._init;return g(p,h,m,k(y._payload),S)}if(Ur(y)||Tr(y))return p=p.get(m)||null,d(h,p,y,S,null);ts(h,y)}return null}function _(p,h,m,y){for(var S=null,k=null,T=h,N=h=0,ee=null;T!==null&&N<m.length;N++){T.index>N?(ee=T,T=null):ee=T.sibling;var F=f(p,T,m[N],y);if(F===null){T===null&&(T=ee);break}t&&T&&F.alternate===null&&e(p,T),h=s(F,h,N),k===null?S=F:k.sibling=F,k=F,T=ee}if(N===m.length)return n(p,T),K&&sn(p,N),S;if(T===null){for(;N<m.length;N++)T=c(p,m[N],y),T!==null&&(h=s(T,h,N),k===null?S=T:k.sibling=T,k=T);return K&&sn(p,N),S}for(T=r(p,T);N<m.length;N++)ee=g(T,p,N,m[N],y),ee!==null&&(t&&ee.alternate!==null&&T.delete(ee.key===null?N:ee.key),h=s(ee,h,N),k===null?S=ee:k.sibling=ee,k=ee);return t&&T.forEach(function(Ye){return e(p,Ye)}),K&&sn(p,N),S}function v(p,h,m,y){var S=Tr(m);if(typeof S!="function")throw Error(w(150));if(m=S.call(m),m==null)throw Error(w(151));for(var k=S=null,T=h,N=h=0,ee=null,F=m.next();T!==null&&!F.done;N++,F=m.next()){T.index>N?(ee=T,T=null):ee=T.sibling;var Ye=f(p,T,F.value,y);if(Ye===null){T===null&&(T=ee);break}t&&T&&Ye.alternate===null&&e(p,T),h=s(Ye,h,N),k===null?S=Ye:k.sibling=Ye,k=Ye,T=ee}if(F.done)return n(p,T),K&&sn(p,N),S;if(T===null){for(;!F.done;N++,F=m.next())F=c(p,F.value,y),F!==null&&(h=s(F,h,N),k===null?S=F:k.sibling=F,k=F);return K&&sn(p,N),S}for(T=r(p,T);!F.done;N++,F=m.next())F=g(T,p,N,F.value,y),F!==null&&(t&&F.alternate!==null&&T.delete(F.key===null?N:F.key),h=s(F,h,N),k===null?S=F:k.sibling=F,k=F);return t&&T.forEach(function(Ir){return e(p,Ir)}),K&&sn(p,N),S}function R(p,h,m,y){if(typeof m=="object"&&m!==null&&m.type===zn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Vi:e:{for(var S=m.key,k=h;k!==null;){if(k.key===S){if(S=m.type,S===zn){if(k.tag===7){n(p,k.sibling),h=i(k,m.props.children),h.return=p,p=h;break e}}else if(k.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===At&&ld(S)===k.type){n(p,k.sibling),h=i(k,m.props),h.ref=Ar(p,k,m),h.return=p,p=h;break e}n(p,k);break}else e(p,k);k=k.sibling}m.type===zn?(h=mn(m.props.children,p.mode,y,m.key),h.return=p,p=h):(y=vs(m.type,m.key,m.props,null,p.mode,y),y.ref=Ar(p,h,m),y.return=p,p=y)}return o(p);case Fn:e:{for(k=m.key;h!==null;){if(h.key===k)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=dl(m,p.mode,y),h.return=p,p=h}return o(p);case At:return k=m._init,R(p,h,k(m._payload),y)}if(Ur(m))return _(p,h,m,y);if(Tr(m))return v(p,h,m,y);ts(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=cl(m,p.mode,y),h.return=p,p=h),o(p)):n(p,h)}return R}var ur=Yh(!0),qh=Yh(!1),Oi={},ft=en(Oi),pi=en(Oi),mi=en(Oi);function dn(t){if(t===Oi)throw Error(w(174));return t}function pu(t,e){switch(V(mi,e),V(pi,t),V(ft,Oi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zl(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zl(e,t)}Q(ft),V(ft,e)}function cr(){Q(ft),Q(pi),Q(mi)}function Xh(t){dn(mi.current);var e=dn(ft.current),n=zl(e,t.type);e!==n&&(V(pi,t),V(ft,n))}function mu(t){pi.current===t&&(Q(ft),Q(pi))}var Y=en(0);function Fs(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var il=[];function gu(){for(var t=0;t<il.length;t++)il[t]._workInProgressVersionPrimary=null;il.length=0}var ps=Nt.ReactCurrentDispatcher,sl=Nt.ReactCurrentBatchConfig,vn=0,q=null,ie=null,ue=null,zs=!1,Qr=!1,gi=0,Vy=0;function ge(){throw Error(w(321))}function _u(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ot(t[n],e[n]))return!1;return!0}function yu(t,e,n,r,i,s){if(vn=s,q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ps.current=t===null||t.memoizedState===null?Ky:Yy,t=n(r,i),Qr){s=0;do{if(Qr=!1,gi=0,25<=s)throw Error(w(301));s+=1,ue=ie=null,e.updateQueue=null,ps.current=qy,t=n(r,i)}while(Qr)}if(ps.current=bs,e=ie!==null&&ie.next!==null,vn=0,ue=ie=q=null,zs=!1,e)throw Error(w(300));return t}function vu(){var t=gi!==0;return gi=0,t}function ut(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?q.memoizedState=ue=t:ue=ue.next=t,ue}function Ke(){if(ie===null){var t=q.alternate;t=t!==null?t.memoizedState:null}else t=ie.next;var e=ue===null?q.memoizedState:ue.next;if(e!==null)ue=e,ie=t;else{if(t===null)throw Error(w(310));ie=t,t={memoizedState:ie.memoizedState,baseState:ie.baseState,baseQueue:ie.baseQueue,queue:ie.queue,next:null},ue===null?q.memoizedState=ue=t:ue=ue.next=t}return ue}function _i(t,e){return typeof e=="function"?e(t):e}function ol(t){var e=Ke(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((vn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,q.lanes|=d,wn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,ot(r,e.memoizedState)||(Ne=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,q.lanes|=s,wn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ll(t){var e=Ke(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ot(s,e.memoizedState)||(Ne=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Jh(){}function Zh(t,e){var n=q,r=Ke(),i=e(),s=!ot(r.memoizedState,i);if(s&&(r.memoizedState=i,Ne=!0),r=r.queue,wu(np.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,yi(9,tp.bind(null,n,r,i,e),void 0,null),fe===null)throw Error(w(349));vn&30||ep(n,e,i)}return i}function ep(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=q.updateQueue,e===null?(e={lastEffect:null,stores:null},q.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function tp(t,e,n,r){e.value=n,e.getSnapshot=r,rp(e)&&ip(t)}function np(t,e,n){return n(function(){rp(e)&&ip(t)})}function rp(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ot(t,n)}catch{return!0}}function ip(t){var e=St(t,1);e!==null&&it(e,t,1,-1)}function ad(t){var e=ut();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:_i,lastRenderedState:t},e.queue=t,t=t.dispatch=Qy.bind(null,q,t),[e.memoizedState,t]}function yi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=q.updateQueue,e===null?(e={lastEffect:null,stores:null},q.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function sp(){return Ke().memoizedState}function ms(t,e,n,r){var i=ut();q.flags|=t,i.memoizedState=yi(1|e,n,void 0,r===void 0?null:r)}function yo(t,e,n,r){var i=Ke();r=r===void 0?null:r;var s=void 0;if(ie!==null){var o=ie.memoizedState;if(s=o.destroy,r!==null&&_u(r,o.deps)){i.memoizedState=yi(e,n,s,r);return}}q.flags|=t,i.memoizedState=yi(1|e,n,s,r)}function ud(t,e){return ms(8390656,8,t,e)}function wu(t,e){return yo(2048,8,t,e)}function op(t,e){return yo(4,2,t,e)}function lp(t,e){return yo(4,4,t,e)}function ap(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function up(t,e,n){return n=n!=null?n.concat([t]):null,yo(4,4,ap.bind(null,e,t),n)}function Eu(){}function cp(t,e){var n=Ke();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_u(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function dp(t,e){var n=Ke();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_u(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function fp(t,e,n){return vn&21?(ot(n,e)||(n=mh(),q.lanes|=n,wn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ne=!0),t.memoizedState=n)}function Hy(t,e){var n=j;j=n!==0&&4>n?n:4,t(!0);var r=sl.transition;sl.transition={};try{t(!1),e()}finally{j=n,sl.transition=r}}function hp(){return Ke().memoizedState}function Gy(t,e,n){var r=$t(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},pp(t))mp(e,n);else if(n=Hh(t,e,n,r),n!==null){var i=Se();it(n,t,r,i),gp(n,e,r)}}function Qy(t,e,n){var r=$t(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(pp(t))mp(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,ot(l,o)){var a=e.interleaved;a===null?(i.next=i,fu(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Hh(t,e,i,r),n!==null&&(i=Se(),it(n,t,r,i),gp(n,e,r))}}function pp(t){var e=t.alternate;return t===q||e!==null&&e===q}function mp(t,e){Qr=zs=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function gp(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ja(t,n)}}var bs={readContext:Qe,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Ky={readContext:Qe,useCallback:function(t,e){return ut().memoizedState=[t,e===void 0?null:e],t},useContext:Qe,useEffect:ud,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ms(4194308,4,ap.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ms(4194308,4,t,e)},useInsertionEffect:function(t,e){return ms(4,2,t,e)},useMemo:function(t,e){var n=ut();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ut();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Gy.bind(null,q,t),[r.memoizedState,t]},useRef:function(t){var e=ut();return t={current:t},e.memoizedState=t},useState:ad,useDebugValue:Eu,useDeferredValue:function(t){return ut().memoizedState=t},useTransition:function(){var t=ad(!1),e=t[0];return t=Hy.bind(null,t[1]),ut().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=q,i=ut();if(K){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),fe===null)throw Error(w(349));vn&30||ep(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ud(np.bind(null,r,s,t),[t]),r.flags|=2048,yi(9,tp.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ut(),e=fe.identifierPrefix;if(K){var n=_t,r=gt;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=gi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Vy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Yy={readContext:Qe,useCallback:cp,useContext:Qe,useEffect:wu,useImperativeHandle:up,useInsertionEffect:op,useLayoutEffect:lp,useMemo:dp,useReducer:ol,useRef:sp,useState:function(){return ol(_i)},useDebugValue:Eu,useDeferredValue:function(t){var e=Ke();return fp(e,ie.memoizedState,t)},useTransition:function(){var t=ol(_i)[0],e=Ke().memoizedState;return[t,e]},useMutableSource:Jh,useSyncExternalStore:Zh,useId:hp,unstable_isNewReconciler:!1},qy={readContext:Qe,useCallback:cp,useContext:Qe,useEffect:wu,useImperativeHandle:up,useInsertionEffect:op,useLayoutEffect:lp,useMemo:dp,useReducer:ll,useRef:sp,useState:function(){return ll(_i)},useDebugValue:Eu,useDeferredValue:function(t){var e=Ke();return ie===null?e.memoizedState=t:fp(e,ie.memoizedState,t)},useTransition:function(){var t=ll(_i)[0],e=Ke().memoizedState;return[t,e]},useMutableSource:Jh,useSyncExternalStore:Zh,useId:hp,unstable_isNewReconciler:!1};function dr(t,e){try{var n="",r=e;do n+=I_(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function al(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function oa(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Xy=typeof WeakMap=="function"?WeakMap:Map;function _p(t,e,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){js||(js=!0,ga=r),oa(t,e)},n}function yp(t,e,n){n=vt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){oa(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){oa(t,e),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function cd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Xy;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=dv.bind(null,t,e,n),e.then(t,t))}function dd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vt(-1,1),e.tag=2,Bt(n,e,1))),n.lanes|=1),t)}var Jy=Nt.ReactCurrentOwner,Ne=!1;function Ce(t,e,n,r){e.child=t===null?qh(e,null,n,r):ur(e,t.child,n,r)}function hd(t,e,n,r,i){n=n.render;var s=e.ref;return er(e,i),r=yu(t,e,n,r,s,i),n=vu(),t!==null&&!Ne?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,It(t,e,i)):(K&&n&&ou(e),e.flags|=1,Ce(t,e,r,i),e.child)}function pd(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ru(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,vp(t,e,s,r,i)):(t=vs(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ci,n(o,r)&&t.ref===e.ref)return It(t,e,i)}return e.flags|=1,t=Vt(s,r),t.ref=e.ref,t.return=e,e.child=t}function vp(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ci(s,r)&&t.ref===e.ref)if(Ne=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ne=!0);else return e.lanes=t.lanes,It(t,e,i)}return la(t,e,n,r,i)}function wp(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Qn,Le),Le|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,V(Qn,Le),Le|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,V(Qn,Le),Le|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,V(Qn,Le),Le|=r;return Ce(t,e,i,n),e.child}function Ep(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function la(t,e,n,r,i){var s=Ae(n)?_n:Ee.current;return s=lr(e,s),er(e,i),n=yu(t,e,n,r,s,i),r=vu(),t!==null&&!Ne?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,It(t,e,i)):(K&&r&&ou(e),e.flags|=1,Ce(t,e,n,i),e.child)}function md(t,e,n,r,i){if(Ae(n)){var s=!0;Ps(e)}else s=!1;if(er(e,i),e.stateNode===null)gs(t,e),Kh(e,n,r),sa(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Qe(u):(u=Ae(n)?_n:Ee.current,u=lr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&od(e,o,r,u),Dt=!1;var f=e.memoizedState;o.state=f,Ls(e,r,o,i),a=e.memoizedState,l!==r||f!==a||Pe.current||Dt?(typeof d=="function"&&(ia(e,n,d,r),a=e.memoizedState),(l=Dt||sd(e,n,l,r,f,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Gh(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Xe(e.type,l),o.props=u,c=e.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Qe(a):(a=Ae(n)?_n:Ee.current,a=lr(e,a));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||f!==a)&&od(e,o,r,a),Dt=!1,f=e.memoizedState,o.state=f,Ls(e,r,o,i);var _=e.memoizedState;l!==c||f!==_||Pe.current||Dt?(typeof g=="function"&&(ia(e,n,g,r),_=e.memoizedState),(u=Dt||sd(e,n,u,r,f,_,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return aa(t,e,n,r,s,i)}function aa(t,e,n,r,i,s){Ep(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ed(e,n,!1),It(t,e,s);r=e.stateNode,Jy.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ur(e,t.child,null,s),e.child=ur(e,null,l,s)):Ce(t,e,l,s),e.memoizedState=r.state,i&&ed(e,n,!0),e.child}function Cp(t){var e=t.stateNode;e.pendingContext?Zc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zc(t,e.context,!1),pu(t,e.containerInfo)}function gd(t,e,n,r,i){return ar(),au(i),e.flags|=256,Ce(t,e,n,r),e.child}var ua={dehydrated:null,treeContext:null,retryLane:0};function ca(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sp(t,e,n){var r=e.pendingProps,i=Y.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),V(Y,i&1),t===null)return na(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Eo(o,r,0,null),t=mn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ca(n),e.memoizedState=ua,t):Cu(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Zy(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Vt(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Vt(l,s):(s=mn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ca(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ua,r}return s=t.child,t=s.sibling,r=Vt(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Cu(t,e){return e=Eo({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ns(t,e,n,r){return r!==null&&au(r),ur(e,t.child,null,n),t=Cu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Zy(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=al(Error(w(422))),ns(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Eo({mode:"visible",children:r.children},i,0,null),s=mn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ur(e,t.child,null,o),e.child.memoizedState=ca(o),e.memoizedState=ua,s);if(!(e.mode&1))return ns(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(w(419)),r=al(s,r,void 0),ns(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ne||l){if(r=fe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,St(t,i),it(r,t,i,-1))}return xu(),r=al(Error(w(421))),ns(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=fv.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Fe=jt(i.nextSibling),ze=e,K=!0,Ze=null,t!==null&&($e[Ve++]=gt,$e[Ve++]=_t,$e[Ve++]=yn,gt=t.id,_t=t.overflow,yn=e),e=Cu(e,r.children),e.flags|=4096,e)}function _d(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ra(t.return,e,n)}function ul(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ip(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ce(t,e,r.children,n),r=Y.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_d(t,n,e);else if(t.tag===19)_d(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(V(Y,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Fs(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ul(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Fs(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ul(e,!0,n,null,s);break;case"together":ul(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gs(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function It(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=Vt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ev(t,e,n){switch(e.tag){case 3:Cp(e),ar();break;case 5:Xh(e);break;case 1:Ae(e.type)&&Ps(e);break;case 4:pu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;V(Os,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(V(Y,Y.current&1),e.flags|=128,null):n&e.child.childLanes?Sp(t,e,n):(V(Y,Y.current&1),t=It(t,e,n),t!==null?t.sibling:null);V(Y,Y.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ip(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Y,Y.current),r)break;return null;case 22:case 23:return e.lanes=0,wp(t,e,n)}return It(t,e,n)}var kp,da,Tp,Np;kp=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};da=function(){};Tp=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,dn(ft.current);var s=null;switch(n){case"input":i=Ol(t,i),r=Ol(t,r),s=[];break;case"select":i=X({},i,{value:void 0}),r=X({},r,{value:void 0}),s=[];break;case"textarea":i=Fl(t,i),r=Fl(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=xs)}bl(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ri.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ri.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&H("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Np=function(t,e,n,r){n!==r&&(e.flags|=4)};function Dr(t,e){if(!K)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function tv(t,e,n){var r=e.pendingProps;switch(lu(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(e),null;case 1:return Ae(e.type)&&Rs(),_e(e),null;case 3:return r=e.stateNode,cr(),Q(Pe),Q(Ee),gu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(es(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ze!==null&&(va(Ze),Ze=null))),da(t,e),_e(e),null;case 5:mu(e);var i=dn(mi.current);if(n=e.type,t!==null&&e.stateNode!=null)Tp(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return _e(e),null}if(t=dn(ft.current),es(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[ct]=e,r[hi]=s,t=(e.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Br.length;i++)H(Br[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Tc(r,s),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},H("invalid",r);break;case"textarea":xc(r,s),H("invalid",r)}bl(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Zi(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Zi(r.textContent,l,t),i=["children",""+l]):ri.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&H("scroll",r)}switch(n){case"input":Hi(r),Nc(r,s,!0);break;case"textarea":Hi(r),Rc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=xs)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=eh(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ct]=e,t[hi]=r,kp(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ul(n,r),n){case"dialog":H("cancel",t),H("close",t),i=r;break;case"iframe":case"object":case"embed":H("load",t),i=r;break;case"video":case"audio":for(i=0;i<Br.length;i++)H(Br[i],t);i=r;break;case"source":H("error",t),i=r;break;case"img":case"image":case"link":H("error",t),H("load",t),i=r;break;case"details":H("toggle",t),i=r;break;case"input":Tc(t,r),i=Ol(t,r),H("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=X({},r,{value:void 0}),H("invalid",t);break;case"textarea":xc(t,r),i=Fl(t,r),H("invalid",t);break;default:i=r}bl(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?rh(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&th(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ii(t,a):typeof a=="number"&&ii(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ri.hasOwnProperty(s)?a!=null&&s==="onScroll"&&H("scroll",t):a!=null&&Ga(t,s,a,o))}switch(n){case"input":Hi(t),Nc(t,r,!1);break;case"textarea":Hi(t),Rc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Kt(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?qn(t,!!r.multiple,s,!1):r.defaultValue!=null&&qn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=xs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _e(e),null;case 6:if(t&&e.stateNode!=null)Np(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=dn(mi.current),dn(ft.current),es(e)){if(r=e.stateNode,n=e.memoizedProps,r[ct]=e,(s=r.nodeValue!==n)&&(t=ze,t!==null))switch(t.tag){case 3:Zi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zi(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ct]=e,e.stateNode=r}return _e(e),null;case 13:if(Q(Y),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(K&&Fe!==null&&e.mode&1&&!(e.flags&128))Vh(),ar(),e.flags|=98560,s=!1;else if(s=es(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[ct]=e}else ar(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_e(e),s=!1}else Ze!==null&&(va(Ze),Ze=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Y.current&1?oe===0&&(oe=3):xu())),e.updateQueue!==null&&(e.flags|=4),_e(e),null);case 4:return cr(),da(t,e),t===null&&di(e.stateNode.containerInfo),_e(e),null;case 10:return du(e.type._context),_e(e),null;case 17:return Ae(e.type)&&Rs(),_e(e),null;case 19:if(Q(Y),s=e.memoizedState,s===null)return _e(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Dr(s,!1);else{if(oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fs(t),o!==null){for(e.flags|=128,Dr(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return V(Y,Y.current&1|2),e.child}t=t.sibling}s.tail!==null&&ne()>fr&&(e.flags|=128,r=!0,Dr(s,!1),e.lanes=4194304)}else{if(!r)if(t=Fs(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Dr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!K)return _e(e),null}else 2*ne()-s.renderingStartTime>fr&&n!==1073741824&&(e.flags|=128,r=!0,Dr(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ne(),e.sibling=null,n=Y.current,V(Y,r?n&1|2:n&1),e):(_e(e),null);case 22:case 23:return Nu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Le&1073741824&&(_e(e),e.subtreeFlags&6&&(e.flags|=8192)):_e(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function nv(t,e){switch(lu(e),e.tag){case 1:return Ae(e.type)&&Rs(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return cr(),Q(Pe),Q(Ee),gu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mu(e),null;case 13:if(Q(Y),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));ar()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(Y),null;case 4:return cr(),null;case 10:return du(e.type._context),null;case 22:case 23:return Nu(),null;case 24:return null;default:return null}}var rs=!1,ye=!1,rv=typeof WeakSet=="function"?WeakSet:Set,C=null;function Gn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(t,e,r)}else n.current=null}function fa(t,e,n){try{n()}catch(r){J(t,e,r)}}var yd=!1;function iv(t,e){if(Yl=ks,t=Ah(),su(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=t,f=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)f=c,c=g;for(;;){if(c===t)break t;if(f===n&&++u===i&&(l=o),f===s&&++d===r&&(a=o),(g=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=g}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(ql={focusedElem:t,selectionRange:n},ks=!1,C=e;C!==null;)if(e=C,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,C=t;else for(;C!==null;){e=C;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var v=_.memoizedProps,R=_.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Xe(e.type,v),R);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){J(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,C=t;break}C=e.return}return _=yd,yd=!1,_}function Kr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&fa(e,n,s)}i=i.next}while(i!==r)}}function vo(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ha(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xp(t){var e=t.alternate;e!==null&&(t.alternate=null,xp(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ct],delete e[hi],delete e[Zl],delete e[jy],delete e[By])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Rp(t){return t.tag===5||t.tag===3||t.tag===4}function vd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Rp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pa(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xs));else if(r!==4&&(t=t.child,t!==null))for(pa(t,e,n),t=t.sibling;t!==null;)pa(t,e,n),t=t.sibling}function ma(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ma(t,e,n),t=t.sibling;t!==null;)ma(t,e,n),t=t.sibling}var he=null,Je=!1;function Pt(t,e,n){for(n=n.child;n!==null;)Pp(t,e,n),n=n.sibling}function Pp(t,e,n){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(co,n)}catch{}switch(n.tag){case 5:ye||Gn(n,e);case 6:var r=he,i=Je;he=null,Pt(t,e,n),he=r,Je=i,he!==null&&(Je?(t=he,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):he.removeChild(n.stateNode));break;case 18:he!==null&&(Je?(t=he,n=n.stateNode,t.nodeType===8?nl(t.parentNode,n):t.nodeType===1&&nl(t,n),ai(t)):nl(he,n.stateNode));break;case 4:r=he,i=Je,he=n.stateNode.containerInfo,Je=!0,Pt(t,e,n),he=r,Je=i;break;case 0:case 11:case 14:case 15:if(!ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&fa(n,e,o),i=i.next}while(i!==r)}Pt(t,e,n);break;case 1:if(!ye&&(Gn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){J(n,e,l)}Pt(t,e,n);break;case 21:Pt(t,e,n);break;case 22:n.mode&1?(ye=(r=ye)||n.memoizedState!==null,Pt(t,e,n),ye=r):Pt(t,e,n);break;default:Pt(t,e,n)}}function wd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new rv),e.forEach(function(r){var i=hv.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qe(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:he=l.stateNode,Je=!1;break e;case 3:he=l.stateNode.containerInfo,Je=!0;break e;case 4:he=l.stateNode.containerInfo,Je=!0;break e}l=l.return}if(he===null)throw Error(w(160));Pp(s,o,i),he=null,Je=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){J(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ap(e,t),e=e.sibling}function Ap(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qe(e,t),lt(t),r&4){try{Kr(3,t,t.return),vo(3,t)}catch(v){J(t,t.return,v)}try{Kr(5,t,t.return)}catch(v){J(t,t.return,v)}}break;case 1:qe(e,t),lt(t),r&512&&n!==null&&Gn(n,n.return);break;case 5:if(qe(e,t),lt(t),r&512&&n!==null&&Gn(n,n.return),t.flags&32){var i=t.stateNode;try{ii(i,"")}catch(v){J(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Jf(i,s),Ul(l,o);var u=Ul(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?rh(i,c):d==="dangerouslySetInnerHTML"?th(i,c):d==="children"?ii(i,c):Ga(i,d,c,u)}switch(l){case"input":Ml(i,s);break;case"textarea":Zf(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?qn(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?qn(i,!!s.multiple,s.defaultValue,!0):qn(i,!!s.multiple,s.multiple?[]:"",!1))}i[hi]=s}catch(v){J(t,t.return,v)}}break;case 6:if(qe(e,t),lt(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){J(t,t.return,v)}}break;case 3:if(qe(e,t),lt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ai(e.containerInfo)}catch(v){J(t,t.return,v)}break;case 4:qe(e,t),lt(t);break;case 13:qe(e,t),lt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ku=ne())),r&4&&wd(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ye=(u=ye)||d,qe(e,t),ye=u):qe(e,t),lt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(C=t,d=t.child;d!==null;){for(c=C=d;C!==null;){switch(f=C,g=f.child,f.tag){case 0:case 11:case 14:case 15:Kr(4,f,f.return);break;case 1:Gn(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(v){J(r,n,v)}}break;case 5:Gn(f,f.return);break;case 22:if(f.memoizedState!==null){Cd(c);continue}}g!==null?(g.return=f,C=g):Cd(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=nh("display",o))}catch(v){J(t,t.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){J(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:qe(e,t),lt(t),r&4&&wd(t);break;case 21:break;default:qe(e,t),lt(t)}}function lt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Rp(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ii(i,""),r.flags&=-33);var s=vd(t);ma(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=vd(t);pa(t,l,o);break;default:throw Error(w(161))}}catch(a){J(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function sv(t,e,n){C=t,Dp(t)}function Dp(t,e,n){for(var r=(t.mode&1)!==0;C!==null;){var i=C,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||rs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ye;l=rs;var u=ye;if(rs=o,(ye=a)&&!u)for(C=i;C!==null;)o=C,a=o.child,o.tag===22&&o.memoizedState!==null?Sd(i):a!==null?(a.return=o,C=a):Sd(i);for(;s!==null;)C=s,Dp(s),s=s.sibling;C=i,rs=l,ye=u}Ed(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,C=s):Ed(t)}}function Ed(t){for(;C!==null;){var e=C;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ye||vo(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ye)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Xe(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&id(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}id(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&ai(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ye||e.flags&512&&ha(e)}catch(f){J(e,e.return,f)}}if(e===t){C=null;break}if(n=e.sibling,n!==null){n.return=e.return,C=n;break}C=e.return}}function Cd(t){for(;C!==null;){var e=C;if(e===t){C=null;break}var n=e.sibling;if(n!==null){n.return=e.return,C=n;break}C=e.return}}function Sd(t){for(;C!==null;){var e=C;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vo(4,e)}catch(a){J(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){J(e,i,a)}}var s=e.return;try{ha(e)}catch(a){J(e,s,a)}break;case 5:var o=e.return;try{ha(e)}catch(a){J(e,o,a)}}}catch(a){J(e,e.return,a)}if(e===t){C=null;break}var l=e.sibling;if(l!==null){l.return=e.return,C=l;break}C=e.return}}var ov=Math.ceil,Us=Nt.ReactCurrentDispatcher,Su=Nt.ReactCurrentOwner,Ge=Nt.ReactCurrentBatchConfig,z=0,fe=null,re=null,pe=0,Le=0,Qn=en(0),oe=0,vi=null,wn=0,wo=0,Iu=0,Yr=null,Te=null,ku=0,fr=1/0,pt=null,js=!1,ga=null,Wt=null,is=!1,Ft=null,Bs=0,qr=0,_a=null,_s=-1,ys=0;function Se(){return z&6?ne():_s!==-1?_s:_s=ne()}function $t(t){return t.mode&1?z&2&&pe!==0?pe&-pe:$y.transition!==null?(ys===0&&(ys=mh()),ys):(t=j,t!==0||(t=window.event,t=t===void 0?16:Ch(t.type)),t):1}function it(t,e,n,r){if(50<qr)throw qr=0,_a=null,Error(w(185));Pi(t,n,r),(!(z&2)||t!==fe)&&(t===fe&&(!(z&2)&&(wo|=n),oe===4&&Mt(t,pe)),De(t,r),n===1&&z===0&&!(e.mode&1)&&(fr=ne()+500,go&&tn()))}function De(t,e){var n=t.callbackNode;$_(t,e);var r=Is(t,t===fe?pe:0);if(r===0)n!==null&&Dc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Dc(n),e===1)t.tag===0?Wy(Id.bind(null,t)):Bh(Id.bind(null,t)),by(function(){!(z&6)&&tn()}),n=null;else{switch(gh(r)){case 1:n=Xa;break;case 4:n=hh;break;case 16:n=Ss;break;case 536870912:n=ph;break;default:n=Ss}n=jp(n,Op.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Op(t,e){if(_s=-1,ys=0,z&6)throw Error(w(327));var n=t.callbackNode;if(tr()&&t.callbackNode!==n)return null;var r=Is(t,t===fe?pe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ws(t,r);else{e=r;var i=z;z|=2;var s=Lp();(fe!==t||pe!==e)&&(pt=null,fr=ne()+500,pn(t,e));do try{uv();break}catch(l){Mp(t,l)}while(!0);cu(),Us.current=s,z=i,re!==null?e=0:(fe=null,pe=0,e=oe)}if(e!==0){if(e===2&&(i=Vl(t),i!==0&&(r=i,e=ya(t,i))),e===1)throw n=vi,pn(t,0),Mt(t,r),De(t,ne()),n;if(e===6)Mt(t,r);else{if(i=t.current.alternate,!(r&30)&&!lv(i)&&(e=Ws(t,r),e===2&&(s=Vl(t),s!==0&&(r=s,e=ya(t,s))),e===1))throw n=vi,pn(t,0),Mt(t,r),De(t,ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:on(t,Te,pt);break;case 3:if(Mt(t,r),(r&130023424)===r&&(e=ku+500-ne(),10<e)){if(Is(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Se(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Jl(on.bind(null,t,Te,pt),e);break}on(t,Te,pt);break;case 4:if(Mt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-rt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ov(r/1960))-r,10<r){t.timeoutHandle=Jl(on.bind(null,t,Te,pt),r);break}on(t,Te,pt);break;case 5:on(t,Te,pt);break;default:throw Error(w(329))}}}return De(t,ne()),t.callbackNode===n?Op.bind(null,t):null}function ya(t,e){var n=Yr;return t.current.memoizedState.isDehydrated&&(pn(t,e).flags|=256),t=Ws(t,e),t!==2&&(e=Te,Te=n,e!==null&&va(e)),t}function va(t){Te===null?Te=t:Te.push.apply(Te,t)}function lv(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ot(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mt(t,e){for(e&=~Iu,e&=~wo,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-rt(e),r=1<<n;t[n]=-1,e&=~r}}function Id(t){if(z&6)throw Error(w(327));tr();var e=Is(t,0);if(!(e&1))return De(t,ne()),null;var n=Ws(t,e);if(t.tag!==0&&n===2){var r=Vl(t);r!==0&&(e=r,n=ya(t,r))}if(n===1)throw n=vi,pn(t,0),Mt(t,e),De(t,ne()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,on(t,Te,pt),De(t,ne()),null}function Tu(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(fr=ne()+500,go&&tn())}}function En(t){Ft!==null&&Ft.tag===0&&!(z&6)&&tr();var e=z;z|=1;var n=Ge.transition,r=j;try{if(Ge.transition=null,j=1,t)return t()}finally{j=r,Ge.transition=n,z=e,!(z&6)&&tn()}}function Nu(){Le=Qn.current,Q(Qn)}function pn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zy(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Rs();break;case 3:cr(),Q(Pe),Q(Ee),gu();break;case 5:mu(r);break;case 4:cr();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:du(r.type._context);break;case 22:case 23:Nu()}n=n.return}if(fe=t,re=t=Vt(t.current,null),pe=Le=e,oe=0,vi=null,Iu=wo=wn=0,Te=Yr=null,cn!==null){for(e=0;e<cn.length;e++)if(n=cn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}cn=null}return t}function Mp(t,e){do{var n=re;try{if(cu(),ps.current=bs,zs){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zs=!1}if(vn=0,ue=ie=q=null,Qr=!1,gi=0,Su.current=null,n===null||n.return===null){oe=1,vi=e,re=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=pe,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=dd(o);if(g!==null){g.flags&=-257,fd(g,o,l,s,e),g.mode&1&&cd(s,u,e),e=g,a=u;var _=e.updateQueue;if(_===null){var v=new Set;v.add(a),e.updateQueue=v}else _.add(a);break e}else{if(!(e&1)){cd(s,u,e),xu();break e}a=Error(w(426))}}else if(K&&l.mode&1){var R=dd(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),fd(R,o,l,s,e),au(dr(a,l));break e}}s=a=dr(a,l),oe!==4&&(oe=2),Yr===null?Yr=[s]:Yr.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=_p(s,a,e);rd(s,p);break e;case 1:l=a;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Wt===null||!Wt.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=yp(s,l,e);rd(s,y);break e}}s=s.return}while(s!==null)}zp(n)}catch(S){e=S,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Lp(){var t=Us.current;return Us.current=bs,t===null?bs:t}function xu(){(oe===0||oe===3||oe===2)&&(oe=4),fe===null||!(wn&268435455)&&!(wo&268435455)||Mt(fe,pe)}function Ws(t,e){var n=z;z|=2;var r=Lp();(fe!==t||pe!==e)&&(pt=null,pn(t,e));do try{av();break}catch(i){Mp(t,i)}while(!0);if(cu(),z=n,Us.current=r,re!==null)throw Error(w(261));return fe=null,pe=0,oe}function av(){for(;re!==null;)Fp(re)}function uv(){for(;re!==null&&!M_();)Fp(re)}function Fp(t){var e=Up(t.alternate,t,Le);t.memoizedProps=t.pendingProps,e===null?zp(t):re=e,Su.current=null}function zp(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=nv(n,e),n!==null){n.flags&=32767,re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{oe=6,re=null;return}}else if(n=tv(n,e,Le),n!==null){re=n;return}if(e=e.sibling,e!==null){re=e;return}re=e=t}while(e!==null);oe===0&&(oe=5)}function on(t,e,n){var r=j,i=Ge.transition;try{Ge.transition=null,j=1,cv(t,e,n,r)}finally{Ge.transition=i,j=r}return null}function cv(t,e,n,r){do tr();while(Ft!==null);if(z&6)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(V_(t,s),t===fe&&(re=fe=null,pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||is||(is=!0,jp(Ss,function(){return tr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ge.transition,Ge.transition=null;var o=j;j=1;var l=z;z|=4,Su.current=null,iv(t,n),Ap(n,t),Py(ql),ks=!!Yl,ql=Yl=null,t.current=n,sv(n),L_(),z=l,j=o,Ge.transition=s}else t.current=n;if(is&&(is=!1,Ft=t,Bs=i),s=t.pendingLanes,s===0&&(Wt=null),b_(n.stateNode),De(t,ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(js)throw js=!1,t=ga,ga=null,t;return Bs&1&&t.tag!==0&&tr(),s=t.pendingLanes,s&1?t===_a?qr++:(qr=0,_a=t):qr=0,tn(),null}function tr(){if(Ft!==null){var t=gh(Bs),e=Ge.transition,n=j;try{if(Ge.transition=null,j=16>t?16:t,Ft===null)var r=!1;else{if(t=Ft,Ft=null,Bs=0,z&6)throw Error(w(331));var i=z;for(z|=4,C=t.current;C!==null;){var s=C,o=s.child;if(C.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(C=u;C!==null;){var d=C;switch(d.tag){case 0:case 11:case 15:Kr(8,d,s)}var c=d.child;if(c!==null)c.return=d,C=c;else for(;C!==null;){d=C;var f=d.sibling,g=d.return;if(xp(d),d===u){C=null;break}if(f!==null){f.return=g,C=f;break}C=g}}}var _=s.alternate;if(_!==null){var v=_.child;if(v!==null){_.child=null;do{var R=v.sibling;v.sibling=null,v=R}while(v!==null)}}C=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,C=o;else e:for(;C!==null;){if(s=C,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Kr(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,C=p;break e}C=s.return}}var h=t.current;for(C=h;C!==null;){o=C;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,C=m;else e:for(o=h;C!==null;){if(l=C,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:vo(9,l)}}catch(S){J(l,l.return,S)}if(l===o){C=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,C=y;break e}C=l.return}}if(z=i,tn(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(co,t)}catch{}r=!0}return r}finally{j=n,Ge.transition=e}}return!1}function kd(t,e,n){e=dr(n,e),e=_p(t,e,1),t=Bt(t,e,1),e=Se(),t!==null&&(Pi(t,1,e),De(t,e))}function J(t,e,n){if(t.tag===3)kd(t,t,n);else for(;e!==null;){if(e.tag===3){kd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){t=dr(n,t),t=yp(e,t,1),e=Bt(e,t,1),t=Se(),e!==null&&(Pi(e,1,t),De(e,t));break}}e=e.return}}function dv(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Se(),t.pingedLanes|=t.suspendedLanes&n,fe===t&&(pe&n)===n&&(oe===4||oe===3&&(pe&130023424)===pe&&500>ne()-ku?pn(t,0):Iu|=n),De(t,e)}function bp(t,e){e===0&&(t.mode&1?(e=Ki,Ki<<=1,!(Ki&130023424)&&(Ki=4194304)):e=1);var n=Se();t=St(t,e),t!==null&&(Pi(t,e,n),De(t,n))}function fv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),bp(t,n)}function hv(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),bp(t,n)}var Up;Up=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Pe.current)Ne=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ne=!1,ev(t,e,n);Ne=!!(t.flags&131072)}else Ne=!1,K&&e.flags&1048576&&Wh(e,Ds,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gs(t,e),t=e.pendingProps;var i=lr(e,Ee.current);er(e,n),i=yu(null,e,r,t,i,n);var s=vu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ae(r)?(s=!0,Ps(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hu(e),i.updater=_o,e.stateNode=i,i._reactInternals=e,sa(e,r,t,n),e=aa(null,e,r,!0,s,n)):(e.tag=0,K&&s&&ou(e),Ce(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gs(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=mv(r),t=Xe(r,t),i){case 0:e=la(null,e,r,t,n);break e;case 1:e=md(null,e,r,t,n);break e;case 11:e=hd(null,e,r,t,n);break e;case 14:e=pd(null,e,r,Xe(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xe(r,i),la(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xe(r,i),md(t,e,r,i,n);case 3:e:{if(Cp(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Gh(t,e),Ls(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=dr(Error(w(423)),e),e=gd(t,e,r,n,i);break e}else if(r!==i){i=dr(Error(w(424)),e),e=gd(t,e,r,n,i);break e}else for(Fe=jt(e.stateNode.containerInfo.firstChild),ze=e,K=!0,Ze=null,n=qh(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===i){e=It(t,e,n);break e}Ce(t,e,r,n)}e=e.child}return e;case 5:return Xh(e),t===null&&na(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Xl(r,i)?o=null:s!==null&&Xl(r,s)&&(e.flags|=32),Ep(t,e),Ce(t,e,o,n),e.child;case 6:return t===null&&na(e),null;case 13:return Sp(t,e,n);case 4:return pu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ur(e,null,r,n):Ce(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xe(r,i),hd(t,e,r,i,n);case 7:return Ce(t,e,e.pendingProps,n),e.child;case 8:return Ce(t,e,e.pendingProps.children,n),e.child;case 12:return Ce(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,V(Os,r._currentValue),r._currentValue=o,s!==null)if(ot(s.value,o)){if(s.children===i.children&&!Pe.current){e=It(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=vt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ra(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ra(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ce(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,er(e,n),i=Qe(i),r=r(i),e.flags|=1,Ce(t,e,r,n),e.child;case 14:return r=e.type,i=Xe(r,e.pendingProps),i=Xe(r.type,i),pd(t,e,r,i,n);case 15:return vp(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xe(r,i),gs(t,e),e.tag=1,Ae(r)?(t=!0,Ps(e)):t=!1,er(e,n),Kh(e,r,i),sa(e,r,i,n),aa(null,e,r,!0,t,n);case 19:return Ip(t,e,n);case 22:return wp(t,e,n)}throw Error(w(156,e.tag))};function jp(t,e){return fh(t,e)}function pv(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(t,e,n,r){return new pv(t,e,n,r)}function Ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function mv(t){if(typeof t=="function")return Ru(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ka)return 11;if(t===Ya)return 14}return 2}function Vt(t,e){var n=t.alternate;return n===null?(n=He(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vs(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ru(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zn:return mn(n.children,i,s,e);case Qa:o=8,i|=8;break;case Rl:return t=He(12,n,e,i|2),t.elementType=Rl,t.lanes=s,t;case Pl:return t=He(13,n,e,i),t.elementType=Pl,t.lanes=s,t;case Al:return t=He(19,n,e,i),t.elementType=Al,t.lanes=s,t;case Yf:return Eo(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qf:o=10;break e;case Kf:o=9;break e;case Ka:o=11;break e;case Ya:o=14;break e;case At:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=He(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function mn(t,e,n,r){return t=He(7,t,r,e),t.lanes=n,t}function Eo(t,e,n,r){return t=He(22,t,r,e),t.elementType=Yf,t.lanes=n,t.stateNode={isHidden:!1},t}function cl(t,e,n){return t=He(6,t,null,e),t.lanes=n,t}function dl(t,e,n){return e=He(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function gv(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ho(0),this.expirationTimes=Ho(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ho(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Pu(t,e,n,r,i,s,o,l,a){return t=new gv(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=He(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hu(s),t}function _v(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Bp(t){if(!t)return Yt;t=t._reactInternals;e:{if(Pn(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ae(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if(Ae(n))return jh(t,n,e)}return e}function Wp(t,e,n,r,i,s,o,l,a){return t=Pu(n,r,!0,t,i,s,o,l,a),t.context=Bp(null),n=t.current,r=Se(),i=$t(n),s=vt(r,i),s.callback=e??null,Bt(n,s,i),t.current.lanes=i,Pi(t,i,r),De(t,r),t}function Co(t,e,n,r){var i=e.current,s=Se(),o=$t(i);return n=Bp(n),e.context===null?e.context=n:e.pendingContext=n,e=vt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Bt(i,e,o),t!==null&&(it(t,i,o,s),hs(t,i,o)),o}function $s(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Td(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Au(t,e){Td(t,e),(t=t.alternate)&&Td(t,e)}function yv(){return null}var $p=typeof reportError=="function"?reportError:function(t){console.error(t)};function Du(t){this._internalRoot=t}So.prototype.render=Du.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));Co(t,e,null,null)};So.prototype.unmount=Du.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;En(function(){Co(null,t,null,null)}),e[Ct]=null}};function So(t){this._internalRoot=t}So.prototype.unstable_scheduleHydration=function(t){if(t){var e=vh();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ot.length&&e!==0&&e<Ot[n].priority;n++);Ot.splice(n,0,t),n===0&&Eh(t)}};function Ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Io(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Nd(){}function vv(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=$s(o);s.call(u)}}var o=Wp(e,r,t,0,null,!1,!1,"",Nd);return t._reactRootContainer=o,t[Ct]=o.current,di(t.nodeType===8?t.parentNode:t),En(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=$s(a);l.call(u)}}var a=Pu(t,0,!1,null,null,!1,!1,"",Nd);return t._reactRootContainer=a,t[Ct]=a.current,di(t.nodeType===8?t.parentNode:t),En(function(){Co(e,a,n,r)}),a}function ko(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=$s(o);l.call(a)}}Co(e,o,t,i)}else o=vv(n,e,t,i,r);return $s(o)}_h=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=jr(e.pendingLanes);n!==0&&(Ja(e,n|1),De(e,ne()),!(z&6)&&(fr=ne()+500,tn()))}break;case 13:En(function(){var r=St(t,1);if(r!==null){var i=Se();it(r,t,1,i)}}),Au(t,1)}};Za=function(t){if(t.tag===13){var e=St(t,134217728);if(e!==null){var n=Se();it(e,t,134217728,n)}Au(t,134217728)}};yh=function(t){if(t.tag===13){var e=$t(t),n=St(t,e);if(n!==null){var r=Se();it(n,t,e,r)}Au(t,e)}};vh=function(){return j};wh=function(t,e){var n=j;try{return j=t,e()}finally{j=n}};Bl=function(t,e,n){switch(e){case"input":if(Ml(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=mo(r);if(!i)throw Error(w(90));Xf(r),Ml(r,i)}}}break;case"textarea":Zf(t,n);break;case"select":e=n.value,e!=null&&qn(t,!!n.multiple,e,!1)}};oh=Tu;lh=En;var wv={usingClientEntryPoint:!1,Events:[Di,Bn,mo,ih,sh,Tu]},Or={findFiberByHostInstance:un,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ev={bundleType:Or.bundleType,version:Or.version,rendererPackageName:Or.rendererPackageName,rendererConfig:Or.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ch(t),t===null?null:t.stateNode},findFiberByHostInstance:Or.findFiberByHostInstance||yv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ss.isDisabled&&ss.supportsFiber)try{co=ss.inject(Ev),dt=ss}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wv;Be.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ou(e))throw Error(w(200));return _v(t,e,null,n)};Be.createRoot=function(t,e){if(!Ou(t))throw Error(w(299));var n=!1,r="",i=$p;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Pu(t,1,!1,null,null,n,!1,r,i),t[Ct]=e.current,di(t.nodeType===8?t.parentNode:t),new Du(e)};Be.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=ch(e),t=t===null?null:t.stateNode,t};Be.flushSync=function(t){return En(t)};Be.hydrate=function(t,e,n){if(!Io(e))throw Error(w(200));return ko(null,t,e,!0,n)};Be.hydrateRoot=function(t,e,n){if(!Ou(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$p;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Wp(e,null,t,1,n??null,i,!1,s,o),t[Ct]=e.current,di(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new So(e)};Be.render=function(t,e,n){if(!Io(e))throw Error(w(200));return ko(null,t,e,!1,n)};Be.unmountComponentAtNode=function(t){if(!Io(t))throw Error(w(40));return t._reactRootContainer?(En(function(){ko(null,null,t,!1,function(){t._reactRootContainer=null,t[Ct]=null})}),!0):!1};Be.unstable_batchedUpdates=Tu;Be.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Io(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return ko(t,e,n,!1,r)};Be.version="18.2.0-next-9e3b772b8-20220608";function Vp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vp)}catch(t){console.error(t)}}Vp(),Wf.exports=Be;var Cv=Wf.exports,xd=Cv;Nl.createRoot=xd.createRoot,Nl.hydrateRoot=xd.hydrateRoot;const fl=({color:t})=>{const e={width:"20px",height:"20px",borderRadius:"50%",backgroundColor:t,margin:"10px"};return b.jsx("div",{style:e})};function Sv(t){return b.jsxs("div",{style:at.card,children:[b.jsx("div",{style:at.container,children:b.jsx("img",{style:at.image,src:t.image})}),b.jsx("h2",{style:at.textH2,children:t.name}),b.jsxs("div",{style:at.container,children:[b.jsx(fl,{color:"red"}),b.jsx(fl,{color:"green"}),b.jsx(fl,{color:"blue"})]}),b.jsxs("div",{style:at.container,children:[b.jsx("p",{style:at.label,children:t.capacity}),b.jsx("p",{style:at.label,children:"Vitrine"})]}),b.jsx("h2",{style:at.textH3,children:t.price}),b.jsx("p",{children:t.status}),b.jsx("a",{href:"https://api.whatsapp.com/send?phone=+5511982214215&text=Olá,%20tudo%20bem?",target:"_blank",children:b.jsx("button",{style:at.button,children:"Comprar"})})]})}const at={container:{display:"flex",justifyContent:"center"},image:{maxWidth:"60%",height:"auto",marginTop:"-80px",filter:"drop-shadow(5px 10px 15px rgba(0, 0, 0, 0.61))",display:"inline-block"},card:{flex:"1 0 calc(33.333% - 20px)",boxSizing:"border-box",margin:"10px",marginTop:"80px",border:"1px solid black",backgroundColor:"#D2C2DA",borderRadius:"10px",boxShadow:"5px 5px 5px rgba(63, 63, 63, 0.1)",padding:"20px"},"@media screen and (max-width: 1024px)":{card:{flex:"1 0 calc(50% - 20px)"}},"@media screen and (max-width: 768px)":{card:{flex:"1 0 calc(100% - 20px)"}},textH2:{fontWeight:"normal",textAlign:"center",marginBlock:"8px"},textH3:{textAlign:"center",marginBlock:"8px"},labelContainer:{display:"flex",justifyContent:"space-between"},label:{color:"#362046",backgroundColor:"white",borderRadius:"40px",textAlign:"center",display:"inline-block",padding:"4px 12px",marginRight:"12px",marginBlock:"4px",fontSize:"0.9rem"},button:{backgroundColor:"#362046",color:"white",minWidth:"90%",display:"block",margin:"0 auto",padding:"10px",borderRadius:"10px"}};var Rd={};/**
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
 */const Hp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const E=function(t,e){if(!t)throw wr(e)},wr=function(t){return new Error("Firebase Database ("+Hp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Gp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Iv=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Mu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let f=(l&15)<<2|u>>6,g=u&63;a||(g=64,o||(f=64)),r.push(n[d],n[c],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Iv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new kv;const f=s<<2|l>>4;if(r.push(f),u!==64){const g=l<<4&240|u>>2;if(r.push(g),c!==64){const _=u<<6&192|c;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qp=function(t){const e=Gp(t);return Mu.encodeByteArray(e,!0)},Vs=function(t){return Qp(t).replace(/\./g,"")},wa=function(t){try{return Mu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Tv(t){return Kp(void 0,t)}function Kp(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Nv(n)||(t[n]=Kp(t[n],e[n]));return t}function Nv(t){return t!=="__proto__"}/**
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
 */function xv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Rv=()=>xv().__FIREBASE_DEFAULTS__,Pv=()=>{if(typeof process>"u"||typeof Rd>"u")return;const t=Rd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Av=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wa(t[1]);return e&&JSON.parse(e)},Yp=()=>{try{return Rv()||Pv()||Av()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Dv=t=>{var e,n;return(n=(e=Yp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ov=t=>{const e=Dv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},qp=()=>{var t;return(t=Yp())===null||t===void 0?void 0:t.config};/**
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
 */class Lu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Mv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vs(JSON.stringify(n)),Vs(JSON.stringify(o)),""].join(".")}/**
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
 */function Lv(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Lv())}function Fv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jp(){return Hp.NODE_ADMIN===!0}function Zp(){try{return typeof indexedDB=="object"}catch{return!1}}function em(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function bv(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Uv="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Uv,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,To.prototype.create)}}class To{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?jv(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new An(i,l,r)}}function jv(t,e){return t.replace(Bv,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Bv=/\{\$([^}]+)}/g;/**
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
 */function wi(t){return JSON.parse(t)}function de(t){return JSON.stringify(t)}/**
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
 */const tm=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=wi(wa(s[0])||""),n=wi(wa(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Wv=function(t){const e=tm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},$v=function(t){const e=tm(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function xt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Pd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hs(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Gs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ad(s)&&Ad(o)){if(!Gs(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ad(t){return t!==null&&typeof t=="object"}/**
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
 */function Vv(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class Hv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const f=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function nm(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Gv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,E(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},No=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Qv=1e3,Kv=2,Yv=4*60*60*1e3,qv=.5;function Dd(t,e=Qv,n=Kv){const r=e*Math.pow(n,t),i=Math.round(qv*r*(Math.random()-.5)*2);return Math.min(Yv,r+i)}/**
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
 */function Er(t){return t&&t._delegate?t._delegate:t}class kt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ln="[DEFAULT]";/**
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
 */class Xv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Lu;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zv(e))try{this.getOrInitializeService({instanceIdentifier:ln})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ln){return this.instances.has(e)}getOptions(e=ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jv(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ln){return this.component?this.component.multipleInstances?e:ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jv(t){return t===ln?void 0:t}function Zv(t){return t.instantiationMode==="EAGER"}/**
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
 */class e0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const t0={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},n0=W.INFO,r0={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},i0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=r0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fu{constructor(e){this.name=e,this._logLevel=n0,this._logHandler=i0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?t0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const s0=(t,e)=>e.some(n=>t instanceof n);let Od,Md;function o0(){return Od||(Od=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l0(){return Md||(Md=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rm=new WeakMap,Ea=new WeakMap,im=new WeakMap,hl=new WeakMap,zu=new WeakMap;function a0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ht(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rm.set(n,t)}).catch(()=>{}),zu.set(e,t),e}function u0(t){if(Ea.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ea.set(t,e)}let Ca={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ea.get(t);if(e==="objectStoreNames")return t.objectStoreNames||im.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ht(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function c0(t){Ca=t(Ca)}function d0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pl(this),e,...n);return im.set(r,e.sort?e.sort():[e]),Ht(r)}:l0().includes(t)?function(...e){return t.apply(pl(this),e),Ht(rm.get(this))}:function(...e){return Ht(t.apply(pl(this),e))}}function f0(t){return typeof t=="function"?d0(t):(t instanceof IDBTransaction&&u0(t),s0(t,o0())?new Proxy(t,Ca):t)}function Ht(t){if(t instanceof IDBRequest)return a0(t);if(hl.has(t))return hl.get(t);const e=f0(t);return e!==t&&(hl.set(t,e),zu.set(e,t)),e}const pl=t=>zu.get(t);function sm(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Ht(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Ht(o.result),a.oldVersion,a.newVersion,Ht(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const h0=["get","getKey","getAll","getAllKeys","count"],p0=["put","add","delete","clear"],ml=new Map;function Ld(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ml.get(e))return ml.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=p0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||h0.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ml.set(e,s),s}c0(t=>({...t,get:(e,n,r)=>Ld(e,n)||t.get(e,n,r),has:(e,n)=>!!Ld(e,n)||t.has(e,n)}));/**
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
 */class m0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(g0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function g0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sa="@firebase/app",Fd="0.10.0";/**
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
 */const Cn=new Fu("@firebase/app"),_0="@firebase/app-compat",y0="@firebase/analytics-compat",v0="@firebase/analytics",w0="@firebase/app-check-compat",E0="@firebase/app-check",C0="@firebase/auth",S0="@firebase/auth-compat",I0="@firebase/database",k0="@firebase/database-compat",T0="@firebase/functions",N0="@firebase/functions-compat",x0="@firebase/installations",R0="@firebase/installations-compat",P0="@firebase/messaging",A0="@firebase/messaging-compat",D0="@firebase/performance",O0="@firebase/performance-compat",M0="@firebase/remote-config",L0="@firebase/remote-config-compat",F0="@firebase/storage",z0="@firebase/storage-compat",b0="@firebase/firestore",U0="@firebase/firestore-compat",j0="firebase",B0="10.10.0";/**
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
 */const Ia="[DEFAULT]",W0={[Sa]:"fire-core",[_0]:"fire-core-compat",[v0]:"fire-analytics",[y0]:"fire-analytics-compat",[E0]:"fire-app-check",[w0]:"fire-app-check-compat",[C0]:"fire-auth",[S0]:"fire-auth-compat",[I0]:"fire-rtdb",[k0]:"fire-rtdb-compat",[T0]:"fire-fn",[N0]:"fire-fn-compat",[x0]:"fire-iid",[R0]:"fire-iid-compat",[P0]:"fire-fcm",[A0]:"fire-fcm-compat",[D0]:"fire-perf",[O0]:"fire-perf-compat",[M0]:"fire-rc",[L0]:"fire-rc-compat",[F0]:"fire-gcs",[z0]:"fire-gcs-compat",[b0]:"fire-fst",[U0]:"fire-fst-compat","fire-js":"fire-js",[j0]:"fire-js-all"};/**
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
 */const Qs=new Map,$0=new Map,ka=new Map;function zd(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qt(t){const e=t.name;if(ka.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;ka.set(e,t);for(const n of Qs.values())zd(n,t);for(const n of $0.values())zd(n,t);return!0}function Mi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const V0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gt=new To("app","Firebase",V0);/**
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
 */class H0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
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
 */const G0=B0;function om(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ia,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Gt.create("bad-app-name",{appName:String(i)});if(n||(n=qp()),!n)throw Gt.create("no-options");const s=Qs.get(i);if(s){if(Gs(n,s.options)&&Gs(r,s.config))return s;throw Gt.create("duplicate-app",{appName:i})}const o=new e0(i);for(const a of ka.values())o.addComponent(a);const l=new H0(n,r,o);return Qs.set(i,l),l}function lm(t=Ia){const e=Qs.get(t);if(!e&&t===Ia&&qp())return om();if(!e)throw Gt.create("no-app",{appName:t});return e}function ht(t,e,n){var r;let i=(r=W0[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(l.join(" "));return}qt(new kt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Q0="firebase-heartbeat-database",K0=1,Ei="firebase-heartbeat-store";let gl=null;function am(){return gl||(gl=sm(Q0,K0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ei)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gt.create("idb-open",{originalErrorMessage:t.message})})),gl}async function Y0(t){try{const n=(await am()).transaction(Ei),r=await n.objectStore(Ei).get(um(t));return await n.done,r}catch(e){if(e instanceof An)Cn.warn(e.message);else{const n=Gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function bd(t,e){try{const r=(await am()).transaction(Ei,"readwrite");await r.objectStore(Ei).put(e,um(t)),await r.done}catch(n){if(n instanceof An)Cn.warn(n.message);else{const r=Gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function um(t){return`${t.name}!${t.options.appId}`}/**
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
 */const q0=1024,X0=30*24*60*60*1e3;class J0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ew(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ud();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=X0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ud(),{heartbeatsToSend:r,unsentEntries:i}=Z0(this._heartbeatsCache.heartbeats),s=Vs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ud(){return new Date().toISOString().substring(0,10)}function Z0(t,e=q0){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),jd(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),jd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ew{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zp()?em().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Y0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function jd(t){return Vs(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tw(t){qt(new kt("platform-logger",e=>new m0(e),"PRIVATE")),qt(new kt("heartbeat",e=>new J0(e),"PRIVATE")),ht(Sa,Fd,t),ht(Sa,Fd,"esm2017"),ht("fire-js","")}tw("");var Bd={};const Wd="@firebase/database",$d="1.0.4";/**
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
 */let cm="";function nw(t){cm=t}/**
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
 */class rw{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),de(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:wi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class iw{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return xt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const dm=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new rw(e)}}catch{}return new iw},fn=dm("localStorage"),Ta=dm("sessionStorage");/**
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
 */const nr=new Fu("@firebase/database"),sw=function(){let t=1;return function(){return t++}}(),fm=function(t){const e=Gv(t),n=new Hv;n.update(e);const r=n.digest();return Mu.encodeByteArray(r)},Li=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Li.apply(null,r):typeof r=="object"?e+=de(r):e+=r,e+=" "}return e};let gn=null,Vd=!0;const ow=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(nr.logLevel=W.VERBOSE,gn=nr.log.bind(nr),e&&Ta.set("logging_enabled",!0)):typeof t=="function"?gn=t:(gn=null,Ta.remove("logging_enabled"))},ve=function(...t){if(Vd===!0&&(Vd=!1,gn===null&&Ta.get("logging_enabled")===!0&&ow(!0)),gn){const e=Li.apply(null,t);gn(e)}},Fi=function(t){return function(...e){ve(t,...e)}},Na=function(...t){const e="FIREBASE INTERNAL ERROR: "+Li(...t);nr.error(e)},Tt=function(...t){const e=`FIREBASE FATAL ERROR: ${Li(...t)}`;throw nr.error(e),new Error(e)},be=function(...t){const e="FIREBASE WARNING: "+Li(...t);nr.warn(e)},lw=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},hm=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},aw=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},pr="[MIN_NAME]",Sn="[MAX_NAME]",Cr=function(t,e){if(t===e)return 0;if(t===pr||e===Sn)return-1;if(e===pr||t===Sn)return 1;{const n=Hd(t),r=Hd(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},uw=function(t,e){return t===e?0:t<e?-1:1},Mr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+de(e))},bu=function(t){if(typeof t!="object"||t===null)return de(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=de(e[r]),n+=":",n+=bu(t[e[r]]);return n+="}",n},pm=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Me(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const mm=function(t){E(!hm(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let f=parseInt(d.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},cw=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},dw=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function fw(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const hw=new RegExp("^-?(0*)\\d{1,10}$"),pw=-2147483648,mw=2147483647,Hd=function(t){if(hw.test(t)){const e=Number(t);if(e>=pw&&e<=mw)return e}return null},zi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw be("Exception was thrown by user callback.",n),e},Math.floor(0))}},gw=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class _w{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class yw{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ve("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',be(e)}}class rr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}rr.OWNER="owner";/**
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
 */const Uu="5",gm="v",_m="s",ym="r",vm="f",wm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Em="ls",Cm="p",xa="ac",Sm="websocket",Im="long_polling";/**
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
 */class km{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=fn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&fn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function vw(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Tm(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let r;if(e===Sm)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Im)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);vw(t)&&(n.ns=t.namespace);const i=[];return Me(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class ww{constructor(){this.counters_={}}incrementCounter(e,n=1){xt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Tv(this.counters_)}}/**
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
 */const _l={},yl={};function ju(t){const e=t.toString();return _l[e]||(_l[e]=new ww),_l[e]}function Ew(t,e){const n=t.toString();return yl[n]||(yl[n]=e()),yl[n]}/**
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
 */class Cw{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&zi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Gd="start",Sw="close",Iw="pLPCommand",kw="pRTLPCB",Nm="id",xm="pw",Rm="ser",Tw="cb",Nw="seg",xw="ts",Rw="d",Pw="dframe",Pm=1870,Am=30,Aw=Pm-Am,Dw=25e3,Ow=3e4;class Kn{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fi(e),this.stats_=ju(n),this.urlFn=a=>(this.appCheckToken&&(a[xa]=this.appCheckToken),Tm(n,Im,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Cw(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ow)),aw(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Bu((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Gd)this.id=l,this.password=a;else if(o===Sw)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Gd]="t",r[Rm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Tw]=this.scriptTagHolder.uniqueCallbackIdentifier),r[gm]=Uu,this.transportSessionId&&(r[_m]=this.transportSessionId),this.lastSessionId&&(r[Em]=this.lastSessionId),this.applicationId&&(r[Cm]=this.applicationId),this.appCheckToken&&(r[xa]=this.appCheckToken),typeof location<"u"&&location.hostname&&wm.test(location.hostname)&&(r[ym]=vm);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Kn.forceAllow_=!0}static forceDisallow(){Kn.forceDisallow_=!0}static isAvailable(){return Kn.forceAllow_?!0:!Kn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!cw()&&!dw()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Qp(n),i=pm(r,Aw);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Pw]="t",r[Nm]=e,r[xm]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=de(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Bu{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=sw(),window[Iw+this.uniqueCallbackIdentifier]=e,window[kw+this.uniqueCallbackIdentifier]=n,this.myIFrame=Bu.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ve("frame writing exception"),l.stack&&ve(l.stack),ve(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ve("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Nm]=this.myID,e[xm]=this.myPW,e[Rm]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Am+r.length<=Pm;){const o=this.pendingSegs.shift();r=r+"&"+Nw+i+"="+o.seg+"&"+xw+i+"="+o.ts+"&"+Rw+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Dw)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ve("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Mw=16384,Lw=45e3;let Ks=null;typeof MozWebSocket<"u"?Ks=MozWebSocket:typeof WebSocket<"u"&&(Ks=WebSocket);class et{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fi(this.connId),this.stats_=ju(n),this.connURL=et.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[gm]=Uu,typeof location<"u"&&location.hostname&&wm.test(location.hostname)&&(o[ym]=vm),n&&(o[_m]=n),r&&(o[Em]=r),i&&(o[xa]=i),s&&(o[Cm]=s),Tm(e,Sm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,fn.set("previous_websocket_failure",!0);try{let r;Jp(),this.mySock=new Ks(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){et.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ks!==null&&!et.forceDisallow_}static previouslyFailed(){return fn.isInMemoryStorage||fn.get("previous_websocket_failure")===!0}markConnectionHealthy(){fn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=wi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=de(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=pm(n,Mw);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Lw))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}et.responsesRequiredToBeHealthy=2;et.healthyTimeout=3e4;/**
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
 */class Ci{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Kn,et]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=et&&et.isAvailable();let r=n&&!et.previouslyFailed();if(e.webSocketOnly&&(n||be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[et];else{const i=this.transports_=[];for(const s of Ci.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ci.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ci.globalTransportInitialized_=!1;/**
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
 */const Fw=6e4,zw=5e3,bw=10*1024,Uw=100*1024,vl="t",Qd="d",jw="s",Kd="r",Bw="e",Yd="o",qd="a",Xd="n",Jd="p",Ww="h";class $w{constructor(e,n,r,i,s,o,l,a,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fi("c:"+this.id+":"),this.transportManager_=new Ci(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Uw?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>bw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(vl in e){const n=e[vl];n===qd?this.upgradeIfSecondaryHealthy_():n===Kd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Yd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Mr("t",e),r=Mr("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:qd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Mr("t",e),r=Mr("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Mr(vl,e);if(Qd in e){const r=e[Qd];if(n===Ww){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Xd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===jw?this.onConnectionShutdown_(r):n===Kd?this.onReset_(r):n===Bw?Na("Server Error: "+r):n===Yd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Na("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Uu!==r&&be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Xr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Fw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(fn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Dm{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Om{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ys extends Om{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ys}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Zd=32,ef=768;class B{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function U(){return new B("")}function O(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Xt(t){return t.pieces_.length-t.pieceNum_}function $(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new B(t.pieces_,e)}function Mm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Vw(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Lm(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Fm(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new B(e,0)}function se(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof B)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new B(n,0)}function M(t){return t.pieceNum_>=t.pieces_.length}function xe(t,e){const n=O(t),r=O(e);if(n===null)return e;if(n===r)return xe($(t),$(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Wu(t,e){if(Xt(t)!==Xt(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function tt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Xt(t)>Xt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class Hw{constructor(e,n){this.errorPrefix_=n,this.parts_=Lm(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=No(this.parts_[r]);zm(this)}}function Gw(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=No(e),zm(t)}function Qw(t){const e=t.parts_.pop();t.byteLength_-=No(e),t.parts_.length>0&&(t.byteLength_-=1)}function zm(t){if(t.byteLength_>ef)throw new Error(t.errorPrefix_+"has a key path longer than "+ef+" bytes ("+t.byteLength_+").");if(t.parts_.length>Zd)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zd+") or object contains a cycle "+an(t))}function an(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class $u extends Om{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new $u}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Lr=1e3,Kw=60*5*1e3,tf=30*1e3,Yw=1.3,qw=3e4,Xw="server_kill",nf=3;class wt extends Dm{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=wt.nextPersistentConnectionId_++,this.log_=Fi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Lr,this.maxReconnectDelay_=Kw,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Jp())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");$u.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ys.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(de(s)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Lu,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;wt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&xt(e,"w")){const r=hr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||$v(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=tf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Wv(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+de(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Na("Unrecognized action received from server: "+de(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Lr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Lr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>qw&&(this.reconnectDelay_=Lr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Yw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+wt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ve("getToken() completed but was canceled"):(ve("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,l=new $w(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{be(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Xw)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&be(c),a())}}}interrupt(e){ve("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ve("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pd(this.interruptReasons_)&&(this.reconnectDelay_=Lr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>bu(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new B(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ve("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=nf&&(this.reconnectDelay_=tf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ve("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=nf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+cm.replace(/\./g,"-")]=1,Xp()?e["framework.cordova"]=1:zv()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ys.getInstance().currentlyOnline();return Pd(this.interruptReasons_)&&e}}wt.nextPersistentConnectionId_=0;wt.nextConnectionId_=0;/**
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
 */class xo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new D(pr,e),i=new D(pr,n);return this.compare(r,i)!==0}minPost(){return D.MIN}}/**
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
 */let os;class bm extends xo{static get __EMPTY_NODE(){return os}static set __EMPTY_NODE(e){os=e}compare(e,n){return Cr(e.name,n.name)}isDefinedOn(e){throw wr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return D.MIN}maxPost(){return new D(Sn,os)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new D(e,os)}toString(){return".key"}}const ir=new bm;/**
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
 */class ls{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ce{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ce.RED,this.left=i??Re.EMPTY_NODE,this.right=s??Re.EMPTY_NODE}copy(e,n,r,i,s){return new ce(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Re.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Re.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ce.RED=!0;ce.BLACK=!1;class Jw{copy(e,n,r,i,s){return this}insert(e,n,r){return new ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Re{constructor(e,n=Re.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Re(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ce.BLACK,null,null))}remove(e){return new Re(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ce.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ls(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ls(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ls(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ls(this.root_,null,this.comparator_,!0,e)}}Re.EMPTY_NODE=new Jw;/**
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
 */function Zw(t,e){return Cr(t.name,e.name)}function Vu(t,e){return Cr(t,e)}/**
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
 */let Ra;function eE(t){Ra=t}const Um=function(t){return typeof t=="number"?"number:"+mm(t):"string:"+t},jm=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&xt(e,".sv"),"Priority must be a string or number.")}else E(t===Ra||t.isEmpty(),"priority of unexpected type.");E(t===Ra||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let rf;class ae{constructor(e,n=ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jm(this.priorityNode_)}static set __childrenNodeConstructor(e){rf=e}static get __childrenNodeConstructor(){return rf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return M(e)?this:O(e)===".priority"?this.priorityNode_:ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=O(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(E(r!==".priority"||Xt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ae.__childrenNodeConstructor.EMPTY_NODE.updateChild($(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Um(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=mm(this.value_):e+=this.value_,this.lazyHash_=fm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ae.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ae.VALUE_TYPE_ORDER.indexOf(n),s=ae.VALUE_TYPE_ORDER.indexOf(r);return E(i>=0,"Unknown leaf type: "+n),E(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Bm,Wm;function tE(t){Bm=t}function nE(t){Wm=t}class rE extends xo{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Cr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return D.MIN}maxPost(){return new D(Sn,new ae("[PRIORITY-POST]",Wm))}makePost(e,n){const r=Bm(e);return new D(n,new ae("[PRIORITY-POST]",r))}toString(){return".priority"}}const Z=new rE;/**
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
 */const iE=Math.log(2);class sE{constructor(e){const n=s=>parseInt(Math.log(s)/iE,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const qs=function(t,e,n,r){t.sort(e);const i=function(a,u){const d=u-a;let c,f;if(d===0)return null;if(d===1)return c=t[a],f=n?n(c):c,new ce(f,c.node,ce.BLACK,null,null);{const g=parseInt(d/2,10)+a,_=i(a,g),v=i(g+1,u);return c=t[g],f=n?n(c):c,new ce(f,c.node,ce.BLACK,_,v)}},s=function(a){let u=null,d=null,c=t.length;const f=function(_,v){const R=c-_,p=c;c-=_;const h=i(R+1,p),m=t[R],y=n?n(m):m;g(new ce(y,m.node,v,null,h))},g=function(_){u?(u.left=_,u=_):(d=_,u=_)};for(let _=0;_<a.count;++_){const v=a.nextBitIsOne(),R=Math.pow(2,a.count-(_+1));v?f(R,ce.BLACK):(f(R,ce.BLACK),f(R,ce.RED))}return d},o=new sE(t.length),l=s(o);return new Re(r||e,l)};/**
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
 */let wl;const Ln={};class yt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(Ln&&Z,"ChildrenNode.ts has not been loaded"),wl=wl||new yt({".priority":Ln},{".priority":Z}),wl}get(e){const n=hr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Re?n:null}hasIndex(e){return xt(this.indexSet_,e.toString())}addIndex(e,n){E(e!==ir,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(D.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=qs(r,e.getCompare()):l=Ln;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const d=Object.assign({},this.indexes_);return d[a]=l,new yt(d,u)}addToIndexes(e,n){const r=Hs(this.indexes_,(i,s)=>{const o=hr(this.indexSet_,s);if(E(o,"Missing index implementation for "+s),i===Ln)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(D.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),qs(l,o.getCompare())}else return Ln;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new D(e.name,l))),a.insert(e,e.node)}});return new yt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Hs(this.indexes_,i=>{if(i===Ln)return i;{const s=n.get(e.name);return s?i.remove(new D(e.name,s)):i}});return new yt(r,this.indexSet_)}}/**
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
 */let Fr;class x{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&jm(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Fr||(Fr=new x(new Re(Vu),null,yt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Fr}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Fr:n}}getChild(e){const n=O(e);return n===null?this:this.getImmediateChild(n).getChild($(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new D(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Fr:this.priorityNode_;return new x(i,o,s)}}updateChild(e,n){const r=O(e);if(r===null)return n;{E(O(e)!==".priority"||Xt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild($(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Z,(o,l)=>{n[o]=l.val(e),r++,s&&x.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Um(this.getPriority().val())+":"),this.forEachChild(Z,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":fm(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new D(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new D(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new D(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,D.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,D.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===bi?-1:0}withIndex(e){if(e===ir||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new x(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ir||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Z),i=n.getIterator(Z);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ir?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class oE extends x{constructor(){super(new Re(Vu),x.EMPTY_NODE,yt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const bi=new oE;Object.defineProperties(D,{MIN:{value:new D(pr,x.EMPTY_NODE)},MAX:{value:new D(Sn,bi)}});bm.__EMPTY_NODE=x.EMPTY_NODE;ae.__childrenNodeConstructor=x;eE(bi);nE(bi);/**
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
 */const lE=!0;function we(t,e=null){if(t===null)return x.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ae(n,we(e))}if(!(t instanceof Array)&&lE){const n=[];let r=!1;if(Me(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=we(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new D(o,a)))}}),n.length===0)return x.EMPTY_NODE;const s=qs(n,Zw,o=>o.name,Vu);if(r){const o=qs(n,Z.getCompare());return new x(s,we(e),new yt({".priority":o},{".priority":Z}))}else return new x(s,we(e),yt.Default)}else{let n=x.EMPTY_NODE;return Me(t,(r,i)=>{if(xt(t,r)&&r.substring(0,1)!=="."){const s=we(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(we(e))}}tE(we);/**
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
 */class aE extends xo{constructor(e){super(),this.indexPath_=e,E(!M(e)&&O(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Cr(e.name,n.name):s}makePost(e,n){const r=we(e),i=x.EMPTY_NODE.updateChild(this.indexPath_,r);return new D(n,i)}maxPost(){const e=x.EMPTY_NODE.updateChild(this.indexPath_,bi);return new D(Sn,e)}toString(){return Lm(this.indexPath_,0).join("/")}}/**
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
 */class uE extends xo{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Cr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return D.MIN}maxPost(){return D.MAX}makePost(e,n){const r=we(e);return new D(n,r)}toString(){return".value"}}const cE=new uE;/**
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
 */function $m(t){return{type:"value",snapshotNode:t}}function mr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Si(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Ii(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function dE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Hu{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Si(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(mr(n,r)):o.trackChildChange(Ii(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Z,(i,s)=>{n.hasChild(i)||r.trackChildChange(Si(i,s))}),n.isLeafNode()||n.forEachChild(Z,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ii(i,s,o))}else r.trackChildChange(mr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?x.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ki{constructor(e){this.indexedFilter_=new Hu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ki.getStartPost_(e),this.endPost_=ki.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new D(n,r))||(r=x.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=x.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(x.EMPTY_NODE);const s=this;return n.forEachChild(Z,(o,l)=>{s.matches(new D(o,l))||(i=i.updateImmediateChild(o,x.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class fE{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ki(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new D(n,r))||(r=x.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=x.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=x.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(x.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,x.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,g)=>c(g,f)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const a=new D(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,a);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Ii(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Si(n,c));const v=l.updateImmediateChild(n,x.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(mr(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return r.isEmpty()?e:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Si(u.name,u.node)),s.trackChildChange(mr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,x.EMPTY_NODE)):e}}/**
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
 */class Gu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Z}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:pr}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Sn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Z}copy(){const e=new Gu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function hE(t){return t.loadsAllData()?new Hu(t.getIndex()):t.hasLimit()?new fE(t):new ki(t)}function sf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Z?n="$priority":t.index_===cE?n="$value":t.index_===ir?n="$key":(E(t.index_ instanceof aE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=de(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=de(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+de(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=de(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+de(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function of(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Z&&(e.i=t.index_.toString()),e}/**
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
 */class Xs extends Dm{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Fi("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Xs.getListenId_(e,r),l={};this.listens_[o]=l;const a=sf(e._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),hr(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Xs.getListenId_(e,n);delete this.listens_[r]}get(e){const n=sf(e._queryParams),r=e._path.toString(),i=new Lu;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vv(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=wi(l.responseText)}catch{be("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&be("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class pE{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Js(){return{value:null,children:new Map}}function Vm(t,e,n){if(M(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=O(e);t.children.has(r)||t.children.set(r,Js());const i=t.children.get(r);e=$(e),Vm(i,e,n)}}function Pa(t,e,n){t.value!==null?n(e,t.value):mE(t,(r,i)=>{const s=new B(e.toString()+"/"+r);Pa(i,s,n)})}function mE(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class gE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Me(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const lf=10*1e3,_E=30*1e3,yE=5*60*1e3;class vE{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new gE(e);const r=lf+(_E-lf)*Math.random();Xr(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Me(e,(i,s)=>{s>0&&xt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Xr(this.reportStats_.bind(this),Math.floor(Math.random()*2*yE))}}/**
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
 */var nt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(nt||(nt={}));function Hm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Qu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ku(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Zs{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=nt.ACK_USER_WRITE,this.source=Hm()}operationForChild(e){if(M(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new B(e));return new Zs(U(),n,this.revert)}}else return E(O(this.path)===e,"operationForChild called for unrelated child."),new Zs($(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ti{constructor(e,n){this.source=e,this.path=n,this.type=nt.LISTEN_COMPLETE}operationForChild(e){return M(this.path)?new Ti(this.source,U()):new Ti(this.source,$(this.path))}}/**
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
 */class In{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=nt.OVERWRITE}operationForChild(e){return M(this.path)?new In(this.source,U(),this.snap.getImmediateChild(e)):new In(this.source,$(this.path),this.snap)}}/**
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
 */class Ni{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=nt.MERGE}operationForChild(e){if(M(this.path)){const n=this.children.subtree(new B(e));return n.isEmpty()?null:n.value?new In(this.source,U(),n.value):new Ni(this.source,U(),n)}else return E(O(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ni(this.source,$(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class kn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(M(e))return this.isFullyInitialized()&&!this.filtered_;const n=O(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class wE{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function EE(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(dE(o.childName,o.snapshotNode))}),zr(t,i,"child_removed",e,r,n),zr(t,i,"child_added",e,r,n),zr(t,i,"child_moved",s,r,n),zr(t,i,"child_changed",e,r,n),zr(t,i,"value",e,r,n),i}function zr(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>SE(t,l,a)),o.forEach(l=>{const a=CE(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function CE(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function SE(t,e,n){if(e.childName==null||n.childName==null)throw wr("Should only compare child_ events.");const r=new D(e.childName,e.snapshotNode),i=new D(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Ro(t,e){return{eventCache:t,serverCache:e}}function Jr(t,e,n,r){return Ro(new kn(e,n,r),t.serverCache)}function Gm(t,e,n,r){return Ro(t.eventCache,new kn(e,n,r))}function Aa(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Tn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let El;const IE=()=>(El||(El=new Re(uw)),El);class G{constructor(e,n=IE()){this.value=e,this.children=n}static fromObject(e){let n=new G(null);return Me(e,(r,i)=>{n=n.set(new B(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:U(),value:this.value};if(M(e))return null;{const r=O(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue($(e),n);return s!=null?{path:se(new B(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(M(e))return this;{const n=O(e),r=this.children.get(n);return r!==null?r.subtree($(e)):new G(null)}}set(e,n){if(M(e))return new G(n,this.children);{const r=O(e),s=(this.children.get(r)||new G(null)).set($(e),n),o=this.children.insert(r,s);return new G(this.value,o)}}remove(e){if(M(e))return this.children.isEmpty()?new G(null):new G(null,this.children);{const n=O(e),r=this.children.get(n);if(r){const i=r.remove($(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new G(null):new G(this.value,s)}else return this}}get(e){if(M(e))return this.value;{const n=O(e),r=this.children.get(n);return r?r.get($(e)):null}}setTree(e,n){if(M(e))return n;{const r=O(e),s=(this.children.get(r)||new G(null)).setTree($(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new G(this.value,o)}}fold(e){return this.fold_(U(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(se(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,U(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(M(e))return null;{const s=O(e),o=this.children.get(s);return o?o.findOnPath_($(e),se(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,U(),n)}foreachOnPath_(e,n,r){if(M(e))return this;{this.value&&r(n,this.value);const i=O(e),s=this.children.get(i);return s?s.foreachOnPath_($(e),se(n,i),r):new G(null)}}foreach(e){this.foreach_(U(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(se(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class st{constructor(e){this.writeTree_=e}static empty(){return new st(new G(null))}}function Zr(t,e,n){if(M(e))return new st(new G(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=xe(i,e);return s=s.updateChild(o,n),new st(t.writeTree_.set(i,s))}else{const i=new G(n),s=t.writeTree_.setTree(e,i);return new st(s)}}}function af(t,e,n){let r=t;return Me(n,(i,s)=>{r=Zr(r,se(e,i),s)}),r}function uf(t,e){if(M(e))return st.empty();{const n=t.writeTree_.setTree(e,new G(null));return new st(n)}}function Da(t,e){return Dn(t,e)!=null}function Dn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xe(n.path,e)):null}function cf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Z,(r,i)=>{e.push(new D(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new D(r,i.value))}),e}function Qt(t,e){if(M(e))return t;{const n=Dn(t,e);return n!=null?new st(new G(n)):new st(t.writeTree_.subtree(e))}}function Oa(t){return t.writeTree_.isEmpty()}function gr(t,e){return Qm(U(),t.writeTree_,e)}function Qm(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(E(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Qm(se(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(se(t,".priority"),r)),n}}/**
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
 */function Yu(t,e){return Xm(e,t)}function kE(t,e,n,r,i){E(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Zr(t.visibleWrites,e,n)),t.lastWriteId=r}function TE(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function NE(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&xE(l,r.path)?i=!1:tt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return RE(t),!0;if(r.snap)t.visibleWrites=uf(t.visibleWrites,r.path);else{const l=r.children;Me(l,a=>{t.visibleWrites=uf(t.visibleWrites,se(r.path,a))})}return!0}else return!1}function xE(t,e){if(t.snap)return tt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&tt(se(t.path,n),e))return!0;return!1}function RE(t){t.visibleWrites=Km(t.allWrites,PE,U()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function PE(t){return t.visible}function Km(t,e,n){let r=st.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)tt(n,o)?(l=xe(n,o),r=Zr(r,l,s.snap)):tt(o,n)&&(l=xe(o,n),r=Zr(r,U(),s.snap.getChild(l)));else if(s.children){if(tt(n,o))l=xe(n,o),r=af(r,l,s.children);else if(tt(o,n))if(l=xe(o,n),M(l))r=af(r,U(),s.children);else{const a=hr(s.children,O(l));if(a){const u=a.getChild($(l));r=Zr(r,U(),u)}}}else throw wr("WriteRecord should have .snap or .children")}}return r}function Ym(t,e,n,r,i){if(!r&&!i){const s=Dn(t.visibleWrites,e);if(s!=null)return s;{const o=Qt(t.visibleWrites,e);if(Oa(o))return n;if(n==null&&!Da(o,U()))return null;{const l=n||x.EMPTY_NODE;return gr(o,l)}}}else{const s=Qt(t.visibleWrites,e);if(!i&&Oa(s))return n;if(!i&&n==null&&!Da(s,U()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(tt(u.path,e)||tt(e,u.path))},l=Km(t.allWrites,o,e),a=n||x.EMPTY_NODE;return gr(l,a)}}}function AE(t,e,n){let r=x.EMPTY_NODE;const i=Dn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Z,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Qt(t.visibleWrites,e);return n.forEachChild(Z,(o,l)=>{const a=gr(Qt(s,new B(o)),l);r=r.updateImmediateChild(o,a)}),cf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Qt(t.visibleWrites,e);return cf(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function DE(t,e,n,r,i){E(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=se(e,n);if(Da(t.visibleWrites,s))return null;{const o=Qt(t.visibleWrites,s);return Oa(o)?i.getChild(n):gr(o,i.getChild(n))}}function OE(t,e,n,r){const i=se(e,n),s=Dn(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Qt(t.visibleWrites,i);return gr(o,r.getNode().getImmediateChild(n))}else return null}function ME(t,e){return Dn(t.visibleWrites,e)}function LE(t,e,n,r,i,s,o){let l;const a=Qt(t.visibleWrites,e),u=Dn(a,U());if(u!=null)l=u;else if(n!=null)l=gr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let g=f.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=f.getNext();return d}else return[]}function FE(){return{visibleWrites:st.empty(),allWrites:[],lastWriteId:-1}}function eo(t,e,n,r){return Ym(t.writeTree,t.treePath,e,n,r)}function qu(t,e){return AE(t.writeTree,t.treePath,e)}function df(t,e,n,r){return DE(t.writeTree,t.treePath,e,n,r)}function to(t,e){return ME(t.writeTree,se(t.treePath,e))}function zE(t,e,n,r,i,s){return LE(t.writeTree,t.treePath,e,n,r,i,s)}function Xu(t,e,n){return OE(t.writeTree,t.treePath,e,n)}function qm(t,e){return Xm(se(t.treePath,e),t.writeTree)}function Xm(t,e){return{treePath:t,writeTree:e}}/**
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
 */class bE{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ii(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Si(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,mr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ii(r,e.snapshotNode,i.oldSnap));else throw wr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class UE{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Jm=new UE;class Ju{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new kn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xu(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Tn(this.viewCache_),s=zE(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function jE(t){return{filter:t}}function BE(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function WE(t,e,n,r,i){const s=new bE;let o,l;if(n.type===nt.OVERWRITE){const u=n;u.source.fromUser?o=Ma(t,e,u.path,u.snap,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!M(u.path),o=no(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===nt.MERGE){const u=n;u.source.fromUser?o=VE(t,e,u.path,u.children,r,i,s):(E(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=La(t,e,u.path,u.children,r,i,l,s))}else if(n.type===nt.ACK_USER_WRITE){const u=n;u.revert?o=QE(t,e,u.path,r,i,s):o=HE(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===nt.LISTEN_COMPLETE)o=GE(t,e,n.path,r,s);else throw wr("Unknown operation type: "+n.type);const a=s.getChanges();return $E(e,o,a),{viewCache:o,changes:a}}function $E(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Aa(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push($m(Aa(e)))}}function Zm(t,e,n,r,i,s){const o=e.eventCache;if(to(r,n)!=null)return e;{let l,a;if(M(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Tn(e),d=u instanceof x?u:x.EMPTY_NODE,c=qu(r,d);l=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=eo(r,Tn(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=O(n);if(u===".priority"){E(Xt(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=e.serverCache.getNode();const c=df(r,n,d,a);c!=null?l=t.filter.updatePriority(d,c):l=o.getNode()}else{const d=$(n);let c;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const f=df(r,n,o.getNode(),a);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=Xu(r,u,e.serverCache);c!=null?l=t.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Jr(e,l,o.isFullyInitialized()||M(n),t.filter.filtersNodes())}}function no(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(M(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),g,null)}else{const g=O(n);if(!a.isCompleteForPath(n)&&Xt(n)>1)return e;const _=$(n),R=a.getNode().getImmediateChild(g).updateChild(_,r);g===".priority"?u=d.updatePriority(a.getNode(),R):u=d.updateChild(a.getNode(),g,R,_,Jm,null)}const c=Gm(e,u,a.isFullyInitialized()||M(n),d.filtersNodes()),f=new Ju(i,c,s);return Zm(t,c,n,i,f,l)}function Ma(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const d=new Ju(i,e,s);if(M(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Jr(e,u,!0,t.filter.filtersNodes());else{const c=O(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Jr(e,u,l.isFullyInitialized(),l.isFiltered());else{const f=$(n),g=l.getNode().getImmediateChild(c);let _;if(M(f))_=r;else{const v=d.getCompleteChild(c);v!=null?Mm(f)===".priority"&&v.getChild(Fm(f)).isEmpty()?_=v:_=v.updateChild(f,r):_=x.EMPTY_NODE}if(g.equals(_))a=e;else{const v=t.filter.updateChild(l.getNode(),c,_,f,d,o);a=Jr(e,v,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function ff(t,e){return t.eventCache.isCompleteForChild(e)}function VE(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const d=se(n,a);ff(e,O(d))&&(l=Ma(t,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=se(n,a);ff(e,O(d))||(l=Ma(t,l,d,u,i,s,o))}),l}function hf(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function La(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;M(n)?u=r:u=new G(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),_=hf(t,g,f);a=no(t,a,new B(c),_,i,s,o,l)}}),u.children.inorderTraversal((c,f)=>{const g=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!g){const _=e.serverCache.getNode().getImmediateChild(c),v=hf(t,_,f);a=no(t,a,new B(c),v,i,s,o,l)}}),a}function HE(t,e,n,r,i,s,o){if(to(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(M(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return no(t,e,n,a.getNode().getChild(n),i,s,l,o);if(M(n)){let u=new G(null);return a.getNode().forEachChild(ir,(d,c)=>{u=u.set(new B(d),c)}),La(t,e,n,u,i,s,l,o)}else return e}else{let u=new G(null);return r.foreach((d,c)=>{const f=se(n,d);a.isCompleteForPath(f)&&(u=u.set(d,a.getNode().getChild(f)))}),La(t,e,n,u,i,s,l,o)}}function GE(t,e,n,r,i){const s=e.serverCache,o=Gm(e,s.getNode(),s.isFullyInitialized()||M(n),s.isFiltered());return Zm(t,o,n,r,Jm,i)}function QE(t,e,n,r,i,s){let o;if(to(r,n)!=null)return e;{const l=new Ju(r,e,i),a=e.eventCache.getNode();let u;if(M(n)||O(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=eo(r,Tn(e));else{const c=e.serverCache.getNode();E(c instanceof x,"serverChildren would be complete if leaf node"),d=qu(r,c)}d=d,u=t.filter.updateFullNode(a,d,s)}else{const d=O(n);let c=Xu(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=t.filter.updateChild(a,d,c,$(n),l,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(a,d,x.EMPTY_NODE,$(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=eo(r,Tn(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||to(r,U())!=null,Jr(e,u,o,t.filter.filtersNodes())}}/**
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
 */class KE{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Hu(r.getIndex()),s=hE(r);this.processor_=jE(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(x.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(x.EMPTY_NODE,l.getNode(),null),d=new kn(a,o.isFullyInitialized(),i.filtersNodes()),c=new kn(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=Ro(c,d),this.eventGenerator_=new wE(this.query_)}get query(){return this.query_}}function YE(t){return t.viewCache_.serverCache.getNode()}function qE(t,e){const n=Tn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!M(e)&&!n.getImmediateChild(O(e)).isEmpty())?n.getChild(e):null}function pf(t){return t.eventRegistrations_.length===0}function XE(t,e){t.eventRegistrations_.push(e)}function mf(t,e,n){const r=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function gf(t,e,n,r){e.type===nt.MERGE&&e.source.queryId!==null&&(E(Tn(t.viewCache_),"We should always have a full cache before handling merges"),E(Aa(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=WE(t.processor_,i,e,n,r);return BE(t.processor_,s.viewCache),E(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,eg(t,s.changes,s.viewCache.eventCache.getNode(),null)}function JE(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Z,(s,o)=>{r.push(mr(s,o))}),n.isFullyInitialized()&&r.push($m(n.getNode())),eg(t,r,n.getNode(),e)}function eg(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return EE(t.eventGenerator_,e,n,i)}/**
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
 */let ro;class ZE{constructor(){this.views=new Map}}function e1(t){E(!ro,"__referenceConstructor has already been defined"),ro=t}function t1(){return E(ro,"Reference.ts has not been loaded"),ro}function n1(t){return t.views.size===0}function Zu(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return E(s!=null,"SyncTree gave us an op for an invalid query."),gf(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(gf(o,e,n,r));return s}}function r1(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=eo(n,i?r:null),a=!1;l?a=!0:r instanceof x?(l=qu(n,r),a=!1):(l=x.EMPTY_NODE,a=!1);const u=Ro(new kn(l,a,!1),new kn(r,i,!1));return new KE(e,u)}return o}function i1(t,e,n,r,i,s){const o=r1(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),XE(o,n),JE(o,n)}function s1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=Jt(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(mf(u,n,r)),pf(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(mf(a,n,r)),pf(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Jt(t)&&s.push(new(t1())(e._repo,e._path)),{removed:s,events:o}}function tg(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function sr(t,e){let n=null;for(const r of t.views.values())n=n||qE(r,e);return n}function ng(t,e){if(e._queryParams.loadsAllData())return Po(t);{const r=e._queryIdentifier;return t.views.get(r)}}function rg(t,e){return ng(t,e)!=null}function Jt(t){return Po(t)!=null}function Po(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let io;function o1(t){E(!io,"__referenceConstructor has already been defined"),io=t}function l1(){return E(io,"Reference.ts has not been loaded"),io}let a1=1;class _f{constructor(e){this.listenProvider_=e,this.syncPointTree_=new G(null),this.pendingWriteTree_=FE(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function u1(t,e,n,r,i){return kE(t.pendingWriteTree_,e,n,r,i),i?Ui(t,new In(Hm(),e,n)):[]}function Yn(t,e,n=!1){const r=TE(t.pendingWriteTree_,e);if(NE(t.pendingWriteTree_,e)){let s=new G(null);return r.snap!=null?s=s.set(U(),!0):Me(r.children,o=>{s=s.set(new B(o),!0)}),Ui(t,new Zs(r.path,s,n))}else return[]}function Ao(t,e,n){return Ui(t,new In(Qu(),e,n))}function c1(t,e,n){const r=G.fromObject(n);return Ui(t,new Ni(Qu(),e,r))}function d1(t,e){return Ui(t,new Ti(Qu(),e))}function f1(t,e,n){const r=ec(t,n);if(r){const i=tc(r),s=i.path,o=i.queryId,l=xe(s,e),a=new Ti(Ku(o),l);return nc(t,s,a)}else return[]}function Fa(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||rg(o,e))){const a=s1(o,e,n,r);n1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(f,g)=>Jt(g));if(d&&!c){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=m1(f);for(let _=0;_<g.length;++_){const v=g[_],R=v.query,p=lg(t,v);t.listenProvider_.startListening(ei(R),so(t,R),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(ei(e),null):u.forEach(f=>{const g=t.queryToTagMap.get(Do(f));t.listenProvider_.stopListening(ei(f),g)}))}g1(t,u)}return l}function h1(t,e,n,r){const i=ec(t,r);if(i!=null){const s=tc(i),o=s.path,l=s.queryId,a=xe(o,e),u=new In(Ku(l),a,n);return nc(t,o,u)}else return[]}function p1(t,e,n,r){const i=ec(t,r);if(i){const s=tc(i),o=s.path,l=s.queryId,a=xe(o,e),u=G.fromObject(n),d=new Ni(Ku(l),a,u);return nc(t,o,d)}else return[]}function yf(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const _=xe(f,i);s=s||sr(g,_),o=o||Jt(g)});let l=t.syncPointTree_.get(i);l?(o=o||Jt(l),s=s||sr(l,U())):(l=new ZE,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=x.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,_)=>{const v=sr(_,U());v&&(s=s.updateImmediateChild(g,v))}));const u=rg(l,e);if(!u&&!e._queryParams.loadsAllData()){const f=Do(e);E(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=_1();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const d=Yu(t.pendingWriteTree_,i);let c=i1(l,e,n,d,s,a);if(!u&&!o&&!r){const f=ng(l,e);c=c.concat(y1(t,e,f))}return c}function ig(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=xe(o,e),u=sr(l,a);if(u)return u});return Ym(i,e,s,n,!0)}function Ui(t,e){return sg(e,t.syncPointTree_,null,Yu(t.pendingWriteTree_,U()))}function sg(t,e,n,r){if(M(t.path))return og(t,e,n,r);{const i=e.get(U());n==null&&i!=null&&(n=sr(i,U()));let s=[];const o=O(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=qm(r,o);s=s.concat(sg(l,a,u,d))}return i&&(s=s.concat(Zu(i,t,r,n))),s}}function og(t,e,n,r){const i=e.get(U());n==null&&i!=null&&(n=sr(i,U()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=qm(r,o),d=t.operationForChild(o);d&&(s=s.concat(og(d,l,a,u)))}),i&&(s=s.concat(Zu(i,t,r,n))),s}function lg(t,e){const n=e.query,r=so(t,n);return{hashFn:()=>(YE(e)||x.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?f1(t,n._path,r):d1(t,n._path);{const s=fw(i,n);return Fa(t,n,null,s)}}}}function so(t,e){const n=Do(e);return t.queryToTagMap.get(n)}function Do(t){return t._path.toString()+"$"+t._queryIdentifier}function ec(t,e){return t.tagToQueryMap.get(e)}function tc(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new B(t.substr(0,e))}}function nc(t,e,n){const r=t.syncPointTree_.get(e);E(r,"Missing sync point for query tag that we're tracking");const i=Yu(t.pendingWriteTree_,e);return Zu(r,n,i,null)}function m1(t){return t.fold((e,n,r)=>{if(n&&Jt(n))return[Po(n)];{let i=[];return n&&(i=tg(n)),Me(r,(s,o)=>{i=i.concat(o)}),i}})}function ei(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(l1())(t._repo,t._path):t}function g1(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Do(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function _1(){return a1++}function y1(t,e,n){const r=e._path,i=so(t,e),s=lg(t,n),o=t.listenProvider_.startListening(ei(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)E(!Jt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!M(u)&&d&&Jt(d))return[Po(d).query];{let f=[];return d&&(f=f.concat(tg(d).map(g=>g.query))),Me(c,(g,_)=>{f=f.concat(_)}),f}});for(let u=0;u<a.length;++u){const d=a[u];t.listenProvider_.stopListening(ei(d),so(t,d))}}return o}/**
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
 */class rc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new rc(n)}node(){return this.node_}}class ic{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=se(this.path_,e);return new ic(this.syncTree_,n)}node(){return ig(this.syncTree_,this.path_)}}const v1=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},vf=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return w1(t[".sv"],e,n);if(typeof t[".sv"]=="object")return E1(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},w1=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},E1=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&E(!1,"Unexpected increment value: "+r);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},C1=function(t,e,n,r){return sc(e,new ic(n,t),r)},S1=function(t,e,n){return sc(t,new rc(e),n)};function sc(t,e,n){const r=t.getPriority().val(),i=vf(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=vf(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new ae(l,we(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ae(i))),o.forEachChild(Z,(l,a)=>{const u=sc(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class oc{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function lc(t,e){let n=e instanceof B?e:new B(e),r=t,i=O(n);for(;i!==null;){const s=hr(r.node.children,i)||{children:{},childCount:0};r=new oc(i,r,s),n=$(n),i=O(n)}return r}function Sr(t){return t.node.value}function ag(t,e){t.node.value=e,za(t)}function ug(t){return t.node.childCount>0}function I1(t){return Sr(t)===void 0&&!ug(t)}function Oo(t,e){Me(t.node.children,(n,r)=>{e(new oc(n,t,r))})}function cg(t,e,n,r){n&&!r&&e(t),Oo(t,i=>{cg(i,e,!0,r)}),n&&r&&e(t)}function k1(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function ji(t){return new B(t.parent===null?t.name:ji(t.parent)+"/"+t.name)}function za(t){t.parent!==null&&T1(t.parent,t.name,t)}function T1(t,e,n){const r=I1(n),i=xt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,za(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,za(t))}/**
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
 */const N1=/[\[\].#$\/\u0000-\u001F\u007F]/,x1=/[\[\].#$\u0000-\u001F\u007F]/,Cl=10*1024*1024,dg=function(t){return typeof t=="string"&&t.length!==0&&!N1.test(t)},fg=function(t){return typeof t=="string"&&t.length!==0&&!x1.test(t)},R1=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),fg(t)},hg=function(t,e,n){const r=n instanceof B?new Hw(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+an(r));if(typeof e=="function")throw new Error(t+"contains a function "+an(r)+" with contents = "+e.toString());if(hm(e))throw new Error(t+"contains "+e.toString()+" "+an(r));if(typeof e=="string"&&e.length>Cl/3&&No(e)>Cl)throw new Error(t+"contains a string greater than "+Cl+" utf8 bytes "+an(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Me(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!dg(o)))throw new Error(t+" contains an invalid key ("+o+") "+an(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Gw(r,o),hg(t,l,r),Qw(r)}),i&&s)throw new Error(t+' contains ".value" child '+an(r)+" in addition to actual children.")}},pg=function(t,e,n,r){if(!(r&&n===void 0)&&!fg(n))throw new Error(nm(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},P1=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),pg(t,e,n,r)},A1=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!dg(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!R1(n))throw new Error(nm(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class D1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function mg(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Wu(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function gg(t,e,n){mg(t,n),_g(t,r=>Wu(r,e))}function On(t,e,n){mg(t,n),_g(t,r=>tt(r,e)||tt(e,r))}function _g(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(O1(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function O1(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();gn&&ve("event: "+n.toString()),zi(r)}}}/**
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
 */const M1="repo_interrupt",L1=25;class F1{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new D1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Js(),this.transactionQueueTree_=new oc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function z1(t,e,n){if(t.stats_=ju(t.repoInfo_),t.forceRestClient_||gw())t.server_=new Xs(t.repoInfo_,(r,i,s,o)=>{wf(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ef(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{de(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new wt(t.repoInfo_,e,(r,i,s,o)=>{wf(t,r,i,s,o)},r=>{Ef(t,r)},r=>{U1(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=Ew(t.repoInfo_,()=>new vE(t.stats_,t.server_)),t.infoData_=new pE,t.infoSyncTree_=new _f({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=Ao(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),ac(t,"connected",!1),t.serverSyncTree_=new _f({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);On(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function b1(t){const n=t.infoData_.getNode(new B(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function yg(t){return v1({timestamp:b1(t)})}function wf(t,e,n,r,i){t.dataUpdateCount++;const s=new B(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=Hs(n,u=>we(u));o=p1(t.serverSyncTree_,s,a,i)}else{const a=we(n);o=h1(t.serverSyncTree_,s,a,i)}else if(r){const a=Hs(n,u=>we(u));o=c1(t.serverSyncTree_,s,a)}else{const a=we(n);o=Ao(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=cc(t,s)),On(t.eventQueue_,l,o)}function Ef(t,e){ac(t,"connected",e),e===!1&&B1(t)}function U1(t,e){Me(e,(n,r)=>{ac(t,n,r)})}function ac(t,e,n){const r=new B("/.info/"+e),i=we(n);t.infoData_.updateSnapshot(r,i);const s=Ao(t.infoSyncTree_,r,i);On(t.eventQueue_,r,s)}function j1(t){return t.nextWriteId_++}function B1(t){vg(t,"onDisconnectEvents");const e=yg(t),n=Js();Pa(t.onDisconnect_,U(),(i,s)=>{const o=C1(i,s,t.serverSyncTree_,e);Vm(n,i,o)});let r=[];Pa(n,U(),(i,s)=>{r=r.concat(Ao(t.serverSyncTree_,i,s));const o=G1(t,i);cc(t,o)}),t.onDisconnect_=Js(),On(t.eventQueue_,U(),r)}function W1(t,e,n){let r;O(e._path)===".info"?r=yf(t.infoSyncTree_,e,n):r=yf(t.serverSyncTree_,e,n),gg(t.eventQueue_,e._path,r)}function Cf(t,e,n){let r;O(e._path)===".info"?r=Fa(t.infoSyncTree_,e,n):r=Fa(t.serverSyncTree_,e,n),gg(t.eventQueue_,e._path,r)}function $1(t){t.persistentConnection_&&t.persistentConnection_.interrupt(M1)}function vg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ve(n,...e)}function wg(t,e,n){return ig(t.serverSyncTree_,e,n)||x.EMPTY_NODE}function uc(t,e=t.transactionQueueTree_){if(e||Mo(t,e),Sr(e)){const n=Cg(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&V1(t,ji(e),n)}else ug(e)&&Oo(e,n=>{uc(t,n)})}function V1(t,e,n){const r=n.map(u=>u.currentWriteId),i=wg(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];E(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=xe(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{vg(t,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(Yn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Mo(t,lc(t.transactionQueueTree_,e)),uc(t,t.transactionQueueTree_),On(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)zi(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{be("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}cc(t,e)}},o)}function cc(t,e){const n=Eg(t,e),r=ji(n),i=Cg(t,n);return H1(t,i,r),r}function H1(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=xe(n,a.path);let d=!1,c;if(E(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(Yn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=L1)d=!0,c="maxretry",i=i.concat(Yn(t.serverSyncTree_,a.currentWriteId,!0));else{const f=wg(t,a.path,o);a.currentInputSnapshot=f;const g=e[l].update(f.val());if(g!==void 0){hg("transaction failed: Data returned ",g,a.path);let _=we(g);typeof g=="object"&&g!=null&&xt(g,".priority")||(_=_.updatePriority(f.getPriority()));const R=a.currentWriteId,p=yg(t),h=S1(_,f,p);a.currentOutputSnapshotRaw=_,a.currentOutputSnapshotResolved=h,a.currentWriteId=j1(t),o.splice(o.indexOf(R),1),i=i.concat(u1(t.serverSyncTree_,a.path,h,a.currentWriteId,a.applyLocally)),i=i.concat(Yn(t.serverSyncTree_,R,!0))}else d=!0,c="nodata",i=i.concat(Yn(t.serverSyncTree_,a.currentWriteId,!0))}On(t.eventQueue_,n,i),i=[],d&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(c==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(c),!1,null))))}Mo(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)zi(r[l]);uc(t,t.transactionQueueTree_)}function Eg(t,e){let n,r=t.transactionQueueTree_;for(n=O(e);n!==null&&Sr(r)===void 0;)r=lc(r,n),e=$(e),n=O(e);return r}function Cg(t,e){const n=[];return Sg(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Sg(t,e,n){const r=Sr(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Oo(e,i=>{Sg(t,i,n)})}function Mo(t,e){const n=Sr(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ag(e,n.length>0?n:void 0)}Oo(e,r=>{Mo(t,r)})}function G1(t,e){const n=ji(Eg(t,e)),r=lc(t.transactionQueueTree_,e);return k1(r,i=>{Sl(t,i)}),Sl(t,r),cg(r,i=>{Sl(t,i)}),n}function Sl(t,e){const n=Sr(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Yn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ag(e,void 0):n.length=s+1,On(t.eventQueue_,ji(e),i);for(let o=0;o<r.length;o++)zi(r[o])}}/**
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
 */function Q1(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function K1(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):be(`Invalid query segment '${n}' in query '${t}'`)}return e}const Sf=function(t,e){const n=Y1(t),r=n.namespace;n.domain==="firebase.com"&&Tt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Tt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||lw();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new km(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new B(n.pathString)}},Y1=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=Q1(t.substring(d,c)));const f=K1(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const _=e.indexOf(".");r=e.substring(0,_).toLowerCase(),n=e.substring(_+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */class Ig{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+de(this.snapshot.exportVal())}}class kg{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class q1{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class dc{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return M(this._path)?null:Mm(this._path)}get ref(){return new Rt(this._repo,this._path)}get _queryIdentifier(){const e=of(this._queryParams),n=bu(e);return n==="{}"?"default":n}get _queryObject(){return of(this._queryParams)}isEqual(e){if(e=Er(e),!(e instanceof dc))return!1;const n=this._repo===e._repo,r=Wu(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Vw(this._path)}}class Rt extends dc{constructor(e,n){super(e,n,new Gu,!1)}get parent(){const e=Fm(this._path);return e===null?null:new Rt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class xi{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new B(e),r=oo(this.ref,e);return new xi(this._node.getChild(n),r,Z)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new xi(i,oo(this.ref,r),Z)))}hasChild(e){const n=new B(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function X1(t,e){return t=Er(t),t._checkNotDeleted("ref"),e!==void 0?oo(t._root,e):t._root}function oo(t,e){return t=Er(t),O(t._path)===null?P1("child","path",e,!1):pg("child","path",e,!1),new Rt(t._repo,se(t._path,e))}class fc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Ig("value",this,new xi(e.snapshotNode,new Rt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new kg(this,e,n):null}matches(e){return e instanceof fc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class hc{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new kg(this,e,n):null}createEvent(e,n){E(e.childName!=null,"Child events should have a childName.");const r=oo(new Rt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Ig(e.type,this,new xi(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof hc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function J1(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{Cf(t._repo,t,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new q1(n,s||void 0),l=e==="value"?new fc(o):new hc(e,o);return W1(t._repo,t,l),()=>Cf(t._repo,t,l)}function Z1(t,e,n,r){return J1(t,"value",e,n,r)}e1(Rt);o1(Rt);/**
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
 */const eC="FIREBASE_DATABASE_EMULATOR_HOST",ba={};let tC=!1;function nC(t,e,n,r){t.repoInfo_=new km(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function rC(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Tt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ve("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Sf(s,i),l=o.repoInfo,a,u;typeof process<"u"&&Bd&&(u=Bd[eC]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=Sf(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new rr(rr.OWNER):new yw(t.name,t.options,e);A1("Invalid Firebase Database URL",o),M(o.path)||Tt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=sC(l,t,d,new _w(t.name,n));return new oC(c,t)}function iC(t,e){const n=ba[e];(!n||n[t.key]!==t)&&Tt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),$1(t),delete n[t.key]}function sC(t,e,n,r){let i=ba[e.name];i||(i={},ba[e.name]=i);let s=i[t.toURLString()];return s&&Tt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new F1(t,tC,n,r),i[t.toURLString()]=s,s}class oC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(z1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Rt(this._repo,U())),this._rootInternal}_delete(){return this._rootInternal!==null&&(iC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Tt("Cannot call "+e+" on a deleted database.")}}function lC(t=lm(),e){const n=Mi(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Ov("database");r&&aC(n,...r)}return n}function aC(t,e,n,r={}){t=Er(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Tt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Tt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new rr(rr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Mv(r.mockUserToken,t.app.options.projectId);s=new rr(o)}nC(i,e,n,s)}/**
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
 */function uC(t){nw(G0),qt(new kt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return rC(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),ht(Wd,$d,t),ht(Wd,$d,"esm2017")}wt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};wt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};uC();var cC="firebase",dC="10.10.0";/**
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
 */ht(cC,dC,"app");const Tg="@firebase/installations",pc="0.6.6";/**
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
 */const Ng=1e4,xg=`w:${pc}`,Rg="FIS_v2",fC="https://firebaseinstallations.googleapis.com/v1",hC=60*60*1e3,pC="installations",mC="Installations";/**
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
 */const gC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Nn=new To(pC,mC,gC);function Pg(t){return t instanceof An&&t.code.includes("request-failed")}/**
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
 */function Ag({projectId:t}){return`${fC}/projects/${t}/installations`}function Dg(t){return{token:t.token,requestStatus:2,expiresIn:yC(t.expiresIn),creationTime:Date.now()}}async function Og(t,e){const r=(await e.json()).error;return Nn.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Mg({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function _C(t,{refreshToken:e}){const n=Mg(t);return n.append("Authorization",vC(e)),n}async function Lg(t){const e=await t();return e.status>=500&&e.status<600?t():e}function yC(t){return Number(t.replace("s","000"))}function vC(t){return`${Rg} ${t}`}/**
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
 */async function wC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Ag(t),i=Mg(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Rg,appId:t.appId,sdkVersion:xg},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Lg(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Dg(u.authToken)}}else throw await Og("Create Installation",a)}/**
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
 */function Fg(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function EC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const CC=/^[cdef][\w-]{21}$/,Ua="";function SC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=IC(t);return CC.test(n)?n:Ua}catch{return Ua}}function IC(t){return EC(t).substr(0,22)}/**
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
 */function Lo(t){return`${t.appName}!${t.appId}`}/**
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
 */const zg=new Map;function bg(t,e){const n=Lo(t);Ug(n,e),kC(n,e)}function Ug(t,e){const n=zg.get(t);if(n)for(const r of n)r(e)}function kC(t,e){const n=TC();n&&n.postMessage({key:t,fid:e}),NC()}let hn=null;function TC(){return!hn&&"BroadcastChannel"in self&&(hn=new BroadcastChannel("[Firebase] FID Change"),hn.onmessage=t=>{Ug(t.data.key,t.data.fid)}),hn}function NC(){zg.size===0&&hn&&(hn.close(),hn=null)}/**
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
 */const xC="firebase-installations-database",RC=1,xn="firebase-installations-store";let Il=null;function mc(){return Il||(Il=sm(xC,RC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xn)}}})),Il}async function lo(t,e){const n=Lo(t),i=(await mc()).transaction(xn,"readwrite"),s=i.objectStore(xn),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&bg(t,e.fid),e}async function jg(t){const e=Lo(t),r=(await mc()).transaction(xn,"readwrite");await r.objectStore(xn).delete(e),await r.done}async function Fo(t,e){const n=Lo(t),i=(await mc()).transaction(xn,"readwrite"),s=i.objectStore(xn),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&bg(t,l.fid),l}/**
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
 */async function gc(t){let e;const n=await Fo(t.appConfig,r=>{const i=PC(r),s=AC(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Ua?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function PC(t){const e=t||{fid:SC(),registrationStatus:0};return Bg(e)}function AC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Nn.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=DC(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:OC(t)}:{installationEntry:e}}async function DC(t,e){try{const n=await wC(t,e);return lo(t.appConfig,n)}catch(n){throw Pg(n)&&n.customData.serverCode===409?await jg(t.appConfig):await lo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function OC(t){let e=await If(t.appConfig);for(;e.registrationStatus===1;)await Fg(100),e=await If(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await gc(t);return r||n}return e}function If(t){return Fo(t,e=>{if(!e)throw Nn.create("installation-not-found");return Bg(e)})}function Bg(t){return MC(t)?{fid:t.fid,registrationStatus:0}:t}function MC(t){return t.registrationStatus===1&&t.registrationTime+Ng<Date.now()}/**
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
 */async function LC({appConfig:t,heartbeatServiceProvider:e},n){const r=FC(t,n),i=_C(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:xg,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Lg(()=>fetch(r,l));if(a.ok){const u=await a.json();return Dg(u)}else throw await Og("Generate Auth Token",a)}function FC(t,{fid:e}){return`${Ag(t)}/${e}/authTokens:generate`}/**
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
 */async function _c(t,e=!1){let n;const r=await Fo(t.appConfig,s=>{if(!Wg(s))throw Nn.create("not-registered");const o=s.authToken;if(!e&&UC(o))return s;if(o.requestStatus===1)return n=zC(t,e),s;{if(!navigator.onLine)throw Nn.create("app-offline");const l=BC(s);return n=bC(t,l),l}});return n?await n:r.authToken}async function zC(t,e){let n=await kf(t.appConfig);for(;n.authToken.requestStatus===1;)await Fg(100),n=await kf(t.appConfig);const r=n.authToken;return r.requestStatus===0?_c(t,e):r}function kf(t){return Fo(t,e=>{if(!Wg(e))throw Nn.create("not-registered");const n=e.authToken;return WC(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function bC(t,e){try{const n=await LC(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await lo(t.appConfig,r),n}catch(n){if(Pg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await jg(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await lo(t.appConfig,r)}throw n}}function Wg(t){return t!==void 0&&t.registrationStatus===2}function UC(t){return t.requestStatus===2&&!jC(t)}function jC(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+hC}function BC(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function WC(t){return t.requestStatus===1&&t.requestTime+Ng<Date.now()}/**
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
 */async function $C(t){const e=t,{installationEntry:n,registrationPromise:r}=await gc(e);return r?r.catch(console.error):_c(e).catch(console.error),n.fid}/**
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
 */async function VC(t,e=!1){const n=t;return await HC(n),(await _c(n,e)).token}async function HC(t){const{registrationPromise:e}=await gc(t);e&&await e}/**
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
 */function GC(t){if(!t||!t.options)throw kl("App Configuration");if(!t.name)throw kl("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw kl(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function kl(t){return Nn.create("missing-app-config-values",{valueName:t})}/**
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
 */const $g="installations",QC="installations-internal",KC=t=>{const e=t.getProvider("app").getImmediate(),n=GC(e),r=Mi(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},YC=t=>{const e=t.getProvider("app").getImmediate(),n=Mi(e,$g).getImmediate();return{getId:()=>$C(n),getToken:i=>VC(n,i)}};function qC(){qt(new kt($g,KC,"PUBLIC")),qt(new kt(QC,YC,"PRIVATE"))}qC();ht(Tg,pc);ht(Tg,pc,"esm2017");/**
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
 */const ao="analytics",XC="firebase_id",JC="origin",ZC=60*1e3,eS="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",yc="https://www.googletagmanager.com/gtag/js";/**
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
 */const Oe=new Fu("@firebase/analytics");/**
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
 */const tS={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ue=new To("analytics","Analytics",tS);/**
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
 */function nS(t){if(!t.startsWith(yc)){const e=Ue.create("invalid-gtag-resource",{gtagURL:t});return Oe.warn(e.message),""}return t}function Vg(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function rS(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function iS(t,e){const n=rS("firebase-js-sdk-policy",{createScriptURL:nS}),r=document.createElement("script"),i=`${yc}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function sS(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function oS(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const a=(await Vg(n)).find(u=>u.measurementId===i);a&&await e[a.appId]}}catch(l){Oe.error(l)}t("config",i,s)}async function lS(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await Vg(n);for(const a of o){const u=l.find(c=>c.measurementId===a),d=u&&e[u.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Oe.error(s)}}function aS(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,a]=o;await lS(t,e,n,l,a)}else if(s==="config"){const[l,a]=o;await oS(t,e,n,r,l,a)}else if(s==="consent"){const[l]=o;t("consent","update",l)}else if(s==="get"){const[l,a,u]=o;t("get",l,a,u)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){Oe.error(l)}}return i}function uS(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=aS(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function cS(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(yc)&&n.src.includes(t))return n;return null}/**
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
 */const dS=30,fS=1e3;class hS{constructor(e={},n=fS){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Hg=new hS;function pS(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function mS(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:pS(r)},s=eS.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(l=a.error.message)}catch{}throw Ue.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function gS(t,e=Hg,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ue.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ue.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new vS;return setTimeout(async()=>{l.abort()},n!==void 0?n:ZC),Gg({appId:r,apiKey:i,measurementId:s},o,l,e)}async function Gg(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Hg){var s;const{appId:o,measurementId:l}=t;try{await _S(r,e)}catch(a){if(l)return Oe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await mS(t);return i.deleteThrottleMetadata(o),a}catch(a){const u=a;if(!yS(u)){if(i.deleteThrottleMetadata(o),l)return Oe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw a}const d=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Dd(n,i.intervalMillis,dS):Dd(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,c),Oe.debug(`Calling attemptFetch again in ${d} millis`),Gg(t,c,r,i)}}function _S(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ue.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function yS(t){if(!(t instanceof An)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class vS{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function wS(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function ES(){if(Zp())try{await em()}catch(t){return Oe.warn(Ue.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Oe.warn(Ue.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function CS(t,e,n,r,i,s,o){var l;const a=gS(t);a.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&Oe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>Oe.error(g)),e.push(a);const u=ES().then(g=>{if(g)return r.getId()}),[d,c]=await Promise.all([a,u]);cS(s)||iS(s,d.measurementId),i("js",new Date);const f=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return f[JC]="firebase",f.update=!0,c!=null&&(f[XC]=c),i("config",d.measurementId,f),d.measurementId}/**
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
 */class SS{constructor(e){this.app=e}_delete(){return delete ti[this.app.options.appId],Promise.resolve()}}let ti={},Tf=[];const Nf={};let Tl="dataLayer",IS="gtag",xf,Qg,Rf=!1;function kS(){const t=[];if(Fv()&&t.push("This is a browser extension environment."),bv()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ue.create("invalid-analytics-context",{errorInfo:e});Oe.warn(n.message)}}function TS(t,e,n){kS();const r=t.options.appId;if(!r)throw Ue.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Oe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ue.create("no-api-key");if(ti[r]!=null)throw Ue.create("already-exists",{id:r});if(!Rf){sS(Tl);const{wrappedGtag:s,gtagCore:o}=uS(ti,Tf,Nf,Tl,IS);Qg=s,xf=o,Rf=!0}return ti[r]=CS(t,Tf,Nf,e,xf,Tl,n),new SS(t)}function NS(t=lm()){t=Er(t);const e=Mi(t,ao);return e.isInitialized()?e.getImmediate():xS(t)}function xS(t,e={}){const n=Mi(t,ao);if(n.isInitialized()){const i=n.getImmediate();if(Gs(e,n.getOptions()))return i;throw Ue.create("already-initialized")}return n.initialize({options:e})}function RS(t,e,n,r){t=Er(t),wS(Qg,ti[t.app.options.appId],e,n,r).catch(i=>Oe.error(i))}const Pf="@firebase/analytics",Af="0.10.2";function PS(){qt(new kt(ao,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return TS(r,i,n)},"PUBLIC")),qt(new kt("analytics-internal",t,"PRIVATE")),ht(Pf,Af),ht(Pf,Af,"esm2017");function t(e){try{const n=e.getProvider(ao).getImmediate();return{logEvent:(r,i,s)=>RS(n,r,i,s)}}catch(n){throw Ue.create("interop-component-reg-failed",{reason:n})}}}PS();const AS={apiKey:"AIzaSyAWXzE1xdVa7XQruWlQHLK9JtgW-uqkv_4",authDomain:"list-iphone-store.firebaseapp.com",projectId:"list-iphone-store",storageBucket:"list-iphone-store.appspot.com",messagingSenderId:"98895176605",appId:"1:98895176605:web:dda51bbe9524d406d00574",measurementId:"G-314BSY59BL"},Kg=om(AS);NS(Kg);const DS=lC(Kg);function OS(){const[t,e]=ni.useState([]);ni.useEffect(()=>{const r=X1(DS,"iphones/");return Z1(r,i=>{const s=i.val();s&&e(Object.values(s))}),()=>{}},[]);const n=t.map((r,i)=>b.jsx(Sv,{image:r.image,name:r.name,price:r.price,capacity:r.capacity,color:r.color},i));return b.jsx("div",{style:MS.cards,children:n})}const MS={cards:{display:"flex",flexWrap:"wrap",margin:"120px 30px",justifyContent:"center"}};function LS(){return b.jsx("footer",{children:b.jsxs("p",{children:["© ",new Date().getFullYear()," Guk Store Import"]})})}function FS(){return b.jsx("header",{style:bS,children:b.jsx("div",{children:b.jsx("div",{style:zS,children:b.jsx("div",{style:jS,children:b.jsx("img",{style:US,src:"/images/logo.png"})})})})})}const zS={position:"absolute",left:"0px",right:"0px",padding:"10px 2em",background:"#D2C2DA",boxShadow:"5px 5px 5px rgba(63, 63, 63, 0.1)"},bS={position:"fixed",zIndex:1,width:"100%"},US={maxWidth:"100%",maxHeight:"100%"},jS={display:"flex",alignItems:"center",justifyContent:"center",width:"70px"};function BS(){return b.jsxs(b.Fragment,{children:[b.jsx(FS,{}),b.jsx(OS,{}),b.jsx(LS,{})]})}Nl.createRoot(document.getElementById("root")).render(b.jsx(f_.StrictMode,{children:b.jsx(BS,{})}));