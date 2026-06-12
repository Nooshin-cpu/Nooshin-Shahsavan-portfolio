var D4=Object.defineProperty;var S4=(t,e,i)=>e in t?D4(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var Jn=(t,e,i)=>(S4(t,typeof e!="symbol"?e+"":e,i),i);function _4(t,e){for(var i=0;i<e.length;i++){const n=e[i];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(n,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();var C4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xb={exports:{}},kp={},Zb={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd=Symbol.for("react.element"),P4=Symbol.for("react.portal"),T4=Symbol.for("react.fragment"),E4=Symbol.for("react.strict_mode"),I4=Symbol.for("react.profiler"),A4=Symbol.for("react.provider"),M4=Symbol.for("react.context"),z4=Symbol.for("react.forward_ref"),F4=Symbol.for("react.suspense"),R4=Symbol.for("react.memo"),L4=Symbol.for("react.lazy"),gw=Symbol.iterator;function O4(t){return t===null||typeof t!="object"?null:(t=gw&&t[gw]||t["@@iterator"],typeof t=="function"?t:null)}var qb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qb=Object.assign,Kb={};function ul(t,e,i){this.props=t,this.context=e,this.refs=Kb,this.updater=i||qb}ul.prototype.isReactComponent={};ul.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ul.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jb(){}Jb.prototype=ul.prototype;function lx(t,e,i){this.props=t,this.context=e,this.refs=Kb,this.updater=i||qb}var cx=lx.prototype=new Jb;cx.constructor=lx;Qb(cx,ul.prototype);cx.isPureReactComponent=!0;var xw=Array.isArray,ek=Object.prototype.hasOwnProperty,dx={current:null},tk={key:!0,ref:!0,__self:!0,__source:!0};function ik(t,e,i){var n,r={},s=null,o=null;if(e!=null)for(n in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ek.call(e,n)&&!tk.hasOwnProperty(n)&&(r[n]=e[n]);var l=arguments.length-2;if(l===1)r.children=i;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}if(t&&t.defaultProps)for(n in l=t.defaultProps,l)r[n]===void 0&&(r[n]=l[n]);return{$$typeof:hd,type:t,key:s,ref:o,props:r,_owner:dx.current}}function $4(t,e){return{$$typeof:hd,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ux(t){return typeof t=="object"&&t!==null&&t.$$typeof===hd}function B4(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(i){return e[i]})}var ww=/\/+/g;function lf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?B4(""+t.key):e.toString(36)}function Nu(t,e,i,n,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case hd:case P4:o=!0}}if(o)return o=t,r=r(o),t=n===""?"."+lf(o,0):n,xw(r)?(i="",t!=null&&(i=t.replace(ww,"$&/")+"/"),Nu(r,e,i,"",function(d){return d})):r!=null&&(ux(r)&&(r=$4(r,i+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ww,"$&/")+"/")+t)),e.push(r)),1;if(o=0,n=n===""?".":n+":",xw(t))for(var l=0;l<t.length;l++){s=t[l];var c=n+lf(s,l);o+=Nu(s,e,i,c,r)}else if(c=O4(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=n+lf(s,l++),o+=Nu(s,e,i,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ed(t,e,i){if(t==null)return t;var n=[],r=0;return Nu(t,n,"","",function(s){return e.call(i,s,r++)}),n}function N4(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(i){(t._status===0||t._status===-1)&&(t._status=1,t._result=i)},function(i){(t._status===0||t._status===-1)&&(t._status=2,t._result=i)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var li={current:null},Vu={transition:null},V4={ReactCurrentDispatcher:li,ReactCurrentBatchConfig:Vu,ReactCurrentOwner:dx};function nk(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:Ed,forEach:function(t,e,i){Ed(t,function(){e.apply(this,arguments)},i)},count:function(t){var e=0;return Ed(t,function(){e++}),e},toArray:function(t){return Ed(t,function(e){return e})||[]},only:function(t){if(!ux(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=ul;de.Fragment=T4;de.Profiler=I4;de.PureComponent=lx;de.StrictMode=E4;de.Suspense=F4;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V4;de.act=nk;de.cloneElement=function(t,e,i){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=Qb({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=dx.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)ek.call(e,c)&&!tk.hasOwnProperty(c)&&(n[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)n.children=i;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];n.children=l}return{$$typeof:hd,type:t.type,key:r,ref:s,props:n,_owner:o}};de.createContext=function(t){return t={$$typeof:M4,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:A4,_context:t},t.Consumer=t};de.createElement=ik;de.createFactory=function(t){var e=ik.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:z4,render:t}};de.isValidElement=ux;de.lazy=function(t){return{$$typeof:L4,_payload:{_status:-1,_result:t},_init:N4}};de.memo=function(t,e){return{$$typeof:R4,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=Vu.transition;Vu.transition={};try{t()}finally{Vu.transition=e}};de.unstable_act=nk;de.useCallback=function(t,e){return li.current.useCallback(t,e)};de.useContext=function(t){return li.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return li.current.useDeferredValue(t)};de.useEffect=function(t,e){return li.current.useEffect(t,e)};de.useId=function(){return li.current.useId()};de.useImperativeHandle=function(t,e,i){return li.current.useImperativeHandle(t,e,i)};de.useInsertionEffect=function(t,e){return li.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return li.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return li.current.useMemo(t,e)};de.useReducer=function(t,e,i){return li.current.useReducer(t,e,i)};de.useRef=function(t){return li.current.useRef(t)};de.useState=function(t){return li.current.useState(t)};de.useSyncExternalStore=function(t,e,i){return li.current.useSyncExternalStore(t,e,i)};de.useTransition=function(){return li.current.useTransition()};de.version="18.3.1";Zb.exports=de;var T=Zb.exports;const q=bp(T),W4=_4({__proto__:null,default:q},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U4=T,H4=Symbol.for("react.element"),Y4=Symbol.for("react.fragment"),G4=Object.prototype.hasOwnProperty,X4=U4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z4={key:!0,ref:!0,__self:!0,__source:!0};function rk(t,e,i){var n,r={},s=null,o=null;i!==void 0&&(s=""+i),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)G4.call(e,n)&&!Z4.hasOwnProperty(n)&&(r[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)r[n]===void 0&&(r[n]=e[n]);return{$$typeof:H4,type:t,key:s,ref:o,props:r,_owner:X4.current}}kp.Fragment=Y4;kp.jsx=rk;kp.jsxs=rk;Xb.exports=kp;var a=Xb.exports,im={},sk={exports:{}},Wi={},ok={exports:{}},ak={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,M){var P=I.length;I.push(M);e:for(;0<P;){var R=P-1>>>1,U=I[R];if(0<r(U,M))I[R]=M,I[P]=U,P=R;else break e}}function i(I){return I.length===0?null:I[0]}function n(I){if(I.length===0)return null;var M=I[0],P=I.pop();if(P!==M){I[0]=P;e:for(var R=0,U=I.length,ne=U>>>1;R<ne;){var Z=2*(R+1)-1,fe=I[Z],ue=Z+1,me=I[ue];if(0>r(fe,P))ue<U&&0>r(me,fe)?(I[R]=me,I[ue]=P,R=ue):(I[R]=fe,I[Z]=P,R=Z);else if(ue<U&&0>r(me,P))I[R]=me,I[ue]=P,R=ue;else break e}}return M}function r(I,M){var P=I.sortIndex-M.sortIndex;return P!==0?P:I.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var c=[],d=[],u=1,p=null,f=3,g=!1,v=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(I){for(var M=i(d);M!==null;){if(M.callback===null)n(d);else if(M.startTime<=I)n(d),M.sortIndex=M.expirationTime,e(c,M);else break;M=i(d)}}function h(I){if(w=!1,y(I),!v)if(i(c)!==null)v=!0,V(x);else{var M=i(d);M!==null&&B(h,M.startTime-I)}}function x(I,M){v=!1,w&&(w=!1,j(_),_=-1),g=!0;var P=f;try{for(y(M),p=i(c);p!==null&&(!(p.expirationTime>M)||I&&!z());){var R=p.callback;if(typeof R=="function"){p.callback=null,f=p.priorityLevel;var U=R(p.expirationTime<=M);M=t.unstable_now(),typeof U=="function"?p.callback=U:p===i(c)&&n(c),y(M)}else n(c);p=i(c)}if(p!==null)var ne=!0;else{var Z=i(d);Z!==null&&B(h,Z.startTime-M),ne=!1}return ne}finally{p=null,f=P,g=!1}}var k=!1,D=null,_=-1,C=5,E=-1;function z(){return!(t.unstable_now()-E<C)}function A(){if(D!==null){var I=t.unstable_now();E=I;var M=!0;try{M=D(!0,I)}finally{M?L():(k=!1,D=null)}}else k=!1}var L;if(typeof b=="function")L=function(){b(A)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,W=O.port2;O.port1.onmessage=A,L=function(){W.postMessage(null)}}else L=function(){S(A,0)};function V(I){D=I,k||(k=!0,L())}function B(I,M){_=S(function(){I(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,V(x))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return i(c)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var P=f;f=M;try{return I()}finally{f=P}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,M){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var P=f;f=I;try{return M()}finally{f=P}},t.unstable_scheduleCallback=function(I,M,P){var R=t.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?R+P:R):P=R,I){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=P+U,I={id:u++,callback:M,priorityLevel:I,startTime:P,expirationTime:U,sortIndex:-1},P>R?(I.sortIndex=P,e(d,I),i(c)===null&&I===i(d)&&(w?(j(_),_=-1):w=!0,B(h,P-R))):(I.sortIndex=U,e(c,I),v||g||(v=!0,V(x))),I},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(I){var M=f;return function(){var P=f;f=M;try{return I.apply(this,arguments)}finally{f=P}}}})(ak);ok.exports=ak;var q4=ok.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q4=T,$i=q4;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,i=1;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lk=new Set,zc={};function Ao(t,e){Wa(t,e),Wa(t+"Capture",e)}function Wa(t,e){for(zc[t]=e,t=0;t<e.length;t++)lk.add(e[t])}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nm=Object.prototype.hasOwnProperty,K4=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yw={},vw={};function J4(t){return nm.call(vw,t)?!0:nm.call(yw,t)?!1:K4.test(t)?vw[t]=!0:(yw[t]=!0,!1)}function e_(t,e,i,n){if(i!==null&&i.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:i!==null?!i.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function t_(t,e,i,n){if(e===null||typeof e>"u"||e_(t,e,i,n))return!0;if(n)return!1;if(i!==null)switch(i.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ci(t,e,i,n,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=r,this.mustUseProperty=i,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Lt[t]=new ci(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Lt[e]=new ci(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Lt[t]=new ci(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Lt[t]=new ci(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Lt[t]=new ci(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Lt[t]=new ci(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Lt[t]=new ci(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Lt[t]=new ci(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Lt[t]=new ci(t,5,!1,t.toLowerCase(),null,!1,!1)});var hx=/[\-:]([a-z])/g;function px(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(hx,px);Lt[e]=new ci(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(hx,px);Lt[e]=new ci(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(hx,px);Lt[e]=new ci(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Lt[t]=new ci(t,1,!1,t.toLowerCase(),null,!1,!1)});Lt.xlinkHref=new ci("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Lt[t]=new ci(t,1,!1,t.toLowerCase(),null,!0,!0)});function fx(t,e,i,n){var r=Lt.hasOwnProperty(e)?Lt[e]:null;(r!==null?r.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(t_(e,i,r,n)&&(i=null),n||r===null?J4(e)&&(i===null?t.removeAttribute(e):t.setAttribute(e,""+i)):r.mustUseProperty?t[r.propertyName]=i===null?r.type===3?!1:"":i:(e=r.attributeName,n=r.attributeNamespace,i===null?t.removeAttribute(e):(r=r.type,i=r===3||r===4&&i===!0?"":""+i,n?t.setAttributeNS(n,e,i):t.setAttribute(e,i))))}var _r=Q4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Id=Symbol.for("react.element"),aa=Symbol.for("react.portal"),la=Symbol.for("react.fragment"),mx=Symbol.for("react.strict_mode"),rm=Symbol.for("react.profiler"),ck=Symbol.for("react.provider"),dk=Symbol.for("react.context"),gx=Symbol.for("react.forward_ref"),sm=Symbol.for("react.suspense"),om=Symbol.for("react.suspense_list"),xx=Symbol.for("react.memo"),Vr=Symbol.for("react.lazy"),uk=Symbol.for("react.offscreen"),bw=Symbol.iterator;function kl(t){return t===null||typeof t!="object"?null:(t=bw&&t[bw]||t["@@iterator"],typeof t=="function"?t:null)}var Ue=Object.assign,cf;function Wl(t){if(cf===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);cf=e&&e[1]||""}return`
`+cf+t}var df=!1;function uf(t,e){if(!t||df)return"";df=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var n=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){n=d}t.call(e.prototype)}else{try{throw Error()}catch(d){n=d}t()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),s=n.stack.split(`
`),o=r.length-1,l=s.length-1;1<=o&&0<=l&&r[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||r[o]!==s[l]){var c=`
`+r[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=l);break}}}finally{df=!1,Error.prepareStackTrace=i}return(t=t?t.displayName||t.name:"")?Wl(t):""}function i_(t){switch(t.tag){case 5:return Wl(t.type);case 16:return Wl("Lazy");case 13:return Wl("Suspense");case 19:return Wl("SuspenseList");case 0:case 2:case 15:return t=uf(t.type,!1),t;case 11:return t=uf(t.type.render,!1),t;case 1:return t=uf(t.type,!0),t;default:return""}}function am(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case la:return"Fragment";case aa:return"Portal";case rm:return"Profiler";case mx:return"StrictMode";case sm:return"Suspense";case om:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dk:return(t.displayName||"Context")+".Consumer";case ck:return(t._context.displayName||"Context")+".Provider";case gx:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xx:return e=t.displayName||null,e!==null?e:am(t.type)||"Memo";case Vr:e=t._payload,t=t._init;try{return am(t(e))}catch{}}return null}function n_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return am(e);case 8:return e===mx?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ys(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hk(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function r_(t){var e=hk(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){n=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(o){n=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ad(t){t._valueTracker||(t._valueTracker=r_(t))}function pk(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),n="";return t&&(n=hk(t)?t.checked?"true":"false":t.value),t=n,t!==i?(e.setValue(t),!0):!1}function vh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lm(t,e){var i=e.checked;return Ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??t._wrapperState.initialChecked})}function kw(t,e){var i=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;i=ys(e.value!=null?e.value:i),t._wrapperState={initialChecked:n,initialValue:i,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fk(t,e){e=e.checked,e!=null&&fx(t,"checked",e,!1)}function cm(t,e){fk(t,e);var i=ys(e.value),n=e.type;if(i!=null)n==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+i):t.value!==""+i&&(t.value=""+i);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dm(t,e.type,i):e.hasOwnProperty("defaultValue")&&dm(t,e.type,ys(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function jw(t,e,i){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,i||e===t.value||(t.value=e),t.defaultValue=e}i=t.name,i!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,i!==""&&(t.name=i)}function dm(t,e,i){(e!=="number"||vh(t.ownerDocument)!==t)&&(i==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+i&&(t.defaultValue=""+i))}var Ul=Array.isArray;function Pa(t,e,i,n){if(t=t.options,e){e={};for(var r=0;r<i.length;r++)e["$"+i[r]]=!0;for(i=0;i<t.length;i++)r=e.hasOwnProperty("$"+t[i].value),t[i].selected!==r&&(t[i].selected=r),r&&n&&(t[i].defaultSelected=!0)}else{for(i=""+ys(i),e=null,r=0;r<t.length;r++){if(t[r].value===i){t[r].selected=!0,n&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function um(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return Ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dw(t,e){var i=e.value;if(i==null){if(i=e.children,e=e.defaultValue,i!=null){if(e!=null)throw Error(N(92));if(Ul(i)){if(1<i.length)throw Error(N(93));i=i[0]}e=i}e==null&&(e=""),i=e}t._wrapperState={initialValue:ys(i)}}function mk(t,e){var i=ys(e.value),n=ys(e.defaultValue);i!=null&&(i=""+i,i!==t.value&&(t.value=i),e.defaultValue==null&&t.defaultValue!==i&&(t.defaultValue=i)),n!=null&&(t.defaultValue=""+n)}function Sw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gk(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gk(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Md,xk=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,i,n,r){MSApp.execUnsafeLocalFunction(function(){return t(e,i,n,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Md=Md||document.createElement("div"),Md.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Md.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fc(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var nc={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s_=["Webkit","ms","Moz","O"];Object.keys(nc).forEach(function(t){s_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),nc[e]=nc[t]})});function wk(t,e,i){return e==null||typeof e=="boolean"||e===""?"":i||typeof e!="number"||e===0||nc.hasOwnProperty(t)&&nc[t]?(""+e).trim():e+"px"}function yk(t,e){t=t.style;for(var i in e)if(e.hasOwnProperty(i)){var n=i.indexOf("--")===0,r=wk(i,e[i],n);i==="float"&&(i="cssFloat"),n?t.setProperty(i,r):t[i]=r}}var o_=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pm(t,e){if(e){if(o_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function fm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mm=null;function wx(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gm=null,Ta=null,Ea=null;function _w(t){if(t=md(t)){if(typeof gm!="function")throw Error(N(280));var e=t.stateNode;e&&(e=Cp(e),gm(t.stateNode,t.type,e))}}function vk(t){Ta?Ea?Ea.push(t):Ea=[t]:Ta=t}function bk(){if(Ta){var t=Ta,e=Ea;if(Ea=Ta=null,_w(t),e)for(t=0;t<e.length;t++)_w(e[t])}}function kk(t,e){return t(e)}function jk(){}var hf=!1;function Dk(t,e,i){if(hf)return t(e,i);hf=!0;try{return kk(t,e,i)}finally{hf=!1,(Ta!==null||Ea!==null)&&(jk(),bk())}}function Rc(t,e){var i=t.stateNode;if(i===null)return null;var n=Cp(i);if(n===null)return null;i=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(N(231,e,typeof i));return i}var xm=!1;if(vr)try{var jl={};Object.defineProperty(jl,"passive",{get:function(){xm=!0}}),window.addEventListener("test",jl,jl),window.removeEventListener("test",jl,jl)}catch{xm=!1}function a_(t,e,i,n,r,s,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(i,d)}catch(u){this.onError(u)}}var rc=!1,bh=null,kh=!1,wm=null,l_={onError:function(t){rc=!0,bh=t}};function c_(t,e,i,n,r,s,o,l,c){rc=!1,bh=null,a_.apply(l_,arguments)}function d_(t,e,i,n,r,s,o,l,c){if(c_.apply(this,arguments),rc){if(rc){var d=bh;rc=!1,bh=null}else throw Error(N(198));kh||(kh=!0,wm=d)}}function Mo(t){var e=t,i=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(i=e.return),t=e.return;while(t)}return e.tag===3?i:null}function Sk(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cw(t){if(Mo(t)!==t)throw Error(N(188))}function u_(t){var e=t.alternate;if(!e){if(e=Mo(t),e===null)throw Error(N(188));return e!==t?null:t}for(var i=t,n=e;;){var r=i.return;if(r===null)break;var s=r.alternate;if(s===null){if(n=r.return,n!==null){i=n;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===i)return Cw(r),t;if(s===n)return Cw(r),e;s=s.sibling}throw Error(N(188))}if(i.return!==n.return)i=r,n=s;else{for(var o=!1,l=r.child;l;){if(l===i){o=!0,i=r,n=s;break}if(l===n){o=!0,n=r,i=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===i){o=!0,i=s,n=r;break}if(l===n){o=!0,n=s,i=r;break}l=l.sibling}if(!o)throw Error(N(189))}}if(i.alternate!==n)throw Error(N(190))}if(i.tag!==3)throw Error(N(188));return i.stateNode.current===i?t:e}function _k(t){return t=u_(t),t!==null?Ck(t):null}function Ck(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ck(t);if(e!==null)return e;t=t.sibling}return null}var Pk=$i.unstable_scheduleCallback,Pw=$i.unstable_cancelCallback,h_=$i.unstable_shouldYield,p_=$i.unstable_requestPaint,nt=$i.unstable_now,f_=$i.unstable_getCurrentPriorityLevel,yx=$i.unstable_ImmediatePriority,Tk=$i.unstable_UserBlockingPriority,jh=$i.unstable_NormalPriority,m_=$i.unstable_LowPriority,Ek=$i.unstable_IdlePriority,jp=null,Wn=null;function g_(t){if(Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(jp,t,void 0,(t.current.flags&128)===128)}catch{}}var Dn=Math.clz32?Math.clz32:y_,x_=Math.log,w_=Math.LN2;function y_(t){return t>>>=0,t===0?32:31-(x_(t)/w_|0)|0}var zd=64,Fd=4194304;function Hl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Dh(t,e){var i=t.pendingLanes;if(i===0)return 0;var n=0,r=t.suspendedLanes,s=t.pingedLanes,o=i&268435455;if(o!==0){var l=o&~r;l!==0?n=Hl(l):(s&=o,s!==0&&(n=Hl(s)))}else o=i&~r,o!==0?n=Hl(o):s!==0&&(n=Hl(s));if(n===0)return 0;if(e!==0&&e!==n&&!(e&r)&&(r=n&-n,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(n&4&&(n|=i&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)i=31-Dn(e),r=1<<i,n|=t[i],e&=~r;return n}function v_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function b_(t,e){for(var i=t.suspendedLanes,n=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Dn(s),l=1<<o,c=r[o];c===-1?(!(l&i)||l&n)&&(r[o]=v_(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function ym(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ik(){var t=zd;return zd<<=1,!(zd&4194240)&&(zd=64),t}function pf(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function pd(t,e,i){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Dn(e),t[e]=i}function k_(t,e){var i=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<i;){var r=31-Dn(i),s=1<<r;e[r]=0,n[r]=-1,t[r]=-1,i&=~s}}function vx(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var n=31-Dn(i),r=1<<n;r&e|t[n]&e&&(t[n]|=e),i&=~r}}var ke=0;function Ak(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Mk,bx,zk,Fk,Rk,vm=!1,Rd=[],is=null,ns=null,rs=null,Lc=new Map,Oc=new Map,Hr=[],j_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tw(t,e){switch(t){case"focusin":case"focusout":is=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":rs=null;break;case"pointerover":case"pointerout":Lc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oc.delete(e.pointerId)}}function Dl(t,e,i,n,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:i,eventSystemFlags:n,nativeEvent:s,targetContainers:[r]},e!==null&&(e=md(e),e!==null&&bx(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function D_(t,e,i,n,r){switch(e){case"focusin":return is=Dl(is,t,e,i,n,r),!0;case"dragenter":return ns=Dl(ns,t,e,i,n,r),!0;case"mouseover":return rs=Dl(rs,t,e,i,n,r),!0;case"pointerover":var s=r.pointerId;return Lc.set(s,Dl(Lc.get(s)||null,t,e,i,n,r)),!0;case"gotpointercapture":return s=r.pointerId,Oc.set(s,Dl(Oc.get(s)||null,t,e,i,n,r)),!0}return!1}function Lk(t){var e=to(t.target);if(e!==null){var i=Mo(e);if(i!==null){if(e=i.tag,e===13){if(e=Sk(i),e!==null){t.blockedOn=e,Rk(t.priority,function(){zk(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=bm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(i===null){i=t.nativeEvent;var n=new i.constructor(i.type,i);mm=n,i.target.dispatchEvent(n),mm=null}else return e=md(i),e!==null&&bx(e),t.blockedOn=i,!1;e.shift()}return!0}function Ew(t,e,i){Wu(t)&&i.delete(e)}function S_(){vm=!1,is!==null&&Wu(is)&&(is=null),ns!==null&&Wu(ns)&&(ns=null),rs!==null&&Wu(rs)&&(rs=null),Lc.forEach(Ew),Oc.forEach(Ew)}function Sl(t,e){t.blockedOn===e&&(t.blockedOn=null,vm||(vm=!0,$i.unstable_scheduleCallback($i.unstable_NormalPriority,S_)))}function $c(t){function e(r){return Sl(r,t)}if(0<Rd.length){Sl(Rd[0],t);for(var i=1;i<Rd.length;i++){var n=Rd[i];n.blockedOn===t&&(n.blockedOn=null)}}for(is!==null&&Sl(is,t),ns!==null&&Sl(ns,t),rs!==null&&Sl(rs,t),Lc.forEach(e),Oc.forEach(e),i=0;i<Hr.length;i++)n=Hr[i],n.blockedOn===t&&(n.blockedOn=null);for(;0<Hr.length&&(i=Hr[0],i.blockedOn===null);)Lk(i),i.blockedOn===null&&Hr.shift()}var Ia=_r.ReactCurrentBatchConfig,Sh=!0;function __(t,e,i,n){var r=ke,s=Ia.transition;Ia.transition=null;try{ke=1,kx(t,e,i,n)}finally{ke=r,Ia.transition=s}}function C_(t,e,i,n){var r=ke,s=Ia.transition;Ia.transition=null;try{ke=4,kx(t,e,i,n)}finally{ke=r,Ia.transition=s}}function kx(t,e,i,n){if(Sh){var r=bm(t,e,i,n);if(r===null)jf(t,e,n,_h,i),Tw(t,n);else if(D_(r,t,e,i,n))n.stopPropagation();else if(Tw(t,n),e&4&&-1<j_.indexOf(t)){for(;r!==null;){var s=md(r);if(s!==null&&Mk(s),s=bm(t,e,i,n),s===null&&jf(t,e,n,_h,i),s===r)break;r=s}r!==null&&n.stopPropagation()}else jf(t,e,n,null,i)}}var _h=null;function bm(t,e,i,n){if(_h=null,t=wx(n),t=to(t),t!==null)if(e=Mo(t),e===null)t=null;else if(i=e.tag,i===13){if(t=Sk(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _h=t,null}function Ok(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(f_()){case yx:return 1;case Tk:return 4;case jh:case m_:return 16;case Ek:return 536870912;default:return 16}default:return 16}}var Xr=null,jx=null,Uu=null;function $k(){if(Uu)return Uu;var t,e=jx,i=e.length,n,r="value"in Xr?Xr.value:Xr.textContent,s=r.length;for(t=0;t<i&&e[t]===r[t];t++);var o=i-t;for(n=1;n<=o&&e[i-n]===r[s-n];n++);return Uu=r.slice(t,1<n?1-n:void 0)}function Hu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ld(){return!0}function Iw(){return!1}function Ui(t){function e(i,n,r,s,o){this._reactName=i,this._targetInst=r,this.type=n,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(i=t[l],this[l]=i?i(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ld:Iw,this.isPropagationStopped=Iw,this}return Ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Ld)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Ld)},persist:function(){},isPersistent:Ld}),e}var hl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dx=Ui(hl),fd=Ue({},hl,{view:0,detail:0}),P_=Ui(fd),ff,mf,_l,Dp=Ue({},fd,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sx,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_l&&(_l&&t.type==="mousemove"?(ff=t.screenX-_l.screenX,mf=t.screenY-_l.screenY):mf=ff=0,_l=t),ff)},movementY:function(t){return"movementY"in t?t.movementY:mf}}),Aw=Ui(Dp),T_=Ue({},Dp,{dataTransfer:0}),E_=Ui(T_),I_=Ue({},fd,{relatedTarget:0}),gf=Ui(I_),A_=Ue({},hl,{animationName:0,elapsedTime:0,pseudoElement:0}),M_=Ui(A_),z_=Ue({},hl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),F_=Ui(z_),R_=Ue({},hl,{data:0}),Mw=Ui(R_),L_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$_[t])?!!e[t]:!1}function Sx(){return B_}var N_=Ue({},fd,{key:function(t){if(t.key){var e=L_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?O_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sx,charCode:function(t){return t.type==="keypress"?Hu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),V_=Ui(N_),W_=Ue({},Dp,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zw=Ui(W_),U_=Ue({},fd,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sx}),H_=Ui(U_),Y_=Ue({},hl,{propertyName:0,elapsedTime:0,pseudoElement:0}),G_=Ui(Y_),X_=Ue({},Dp,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Z_=Ui(X_),q_=[9,13,27,32],_x=vr&&"CompositionEvent"in window,sc=null;vr&&"documentMode"in document&&(sc=document.documentMode);var Q_=vr&&"TextEvent"in window&&!sc,Bk=vr&&(!_x||sc&&8<sc&&11>=sc),Fw=String.fromCharCode(32),Rw=!1;function Nk(t,e){switch(t){case"keyup":return q_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vk(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ca=!1;function K_(t,e){switch(t){case"compositionend":return Vk(e);case"keypress":return e.which!==32?null:(Rw=!0,Fw);case"textInput":return t=e.data,t===Fw&&Rw?null:t;default:return null}}function J_(t,e){if(ca)return t==="compositionend"||!_x&&Nk(t,e)?(t=$k(),Uu=jx=Xr=null,ca=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bk&&e.locale!=="ko"?null:e.data;default:return null}}var eC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Lw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eC[t.type]:e==="textarea"}function Wk(t,e,i,n){vk(n),e=Ch(e,"onChange"),0<e.length&&(i=new Dx("onChange","change",null,i,n),t.push({event:i,listeners:e}))}var oc=null,Bc=null;function tC(t){ej(t,0)}function Sp(t){var e=ha(t);if(pk(e))return t}function iC(t,e){if(t==="change")return e}var Uk=!1;if(vr){var xf;if(vr){var wf="oninput"in document;if(!wf){var Ow=document.createElement("div");Ow.setAttribute("oninput","return;"),wf=typeof Ow.oninput=="function"}xf=wf}else xf=!1;Uk=xf&&(!document.documentMode||9<document.documentMode)}function $w(){oc&&(oc.detachEvent("onpropertychange",Hk),Bc=oc=null)}function Hk(t){if(t.propertyName==="value"&&Sp(Bc)){var e=[];Wk(e,Bc,t,wx(t)),Dk(tC,e)}}function nC(t,e,i){t==="focusin"?($w(),oc=e,Bc=i,oc.attachEvent("onpropertychange",Hk)):t==="focusout"&&$w()}function rC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sp(Bc)}function sC(t,e){if(t==="click")return Sp(e)}function oC(t,e){if(t==="input"||t==="change")return Sp(e)}function aC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Cn=typeof Object.is=="function"?Object.is:aC;function Nc(t,e){if(Cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),n=Object.keys(e);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var r=i[n];if(!nm.call(e,r)||!Cn(t[r],e[r]))return!1}return!0}function Bw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nw(t,e){var i=Bw(t);t=0;for(var n;i;){if(i.nodeType===3){if(n=t+i.textContent.length,t<=e&&n>=e)return{node:i,offset:e-t};t=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Bw(i)}}function Yk(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yk(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gk(){for(var t=window,e=vh();e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=vh(t.document)}return e}function Cx(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lC(t){var e=Gk(),i=t.focusedElem,n=t.selectionRange;if(e!==i&&i&&i.ownerDocument&&Yk(i.ownerDocument.documentElement,i)){if(n!==null&&Cx(i)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in i)i.selectionStart=e,i.selectionEnd=Math.min(t,i.value.length);else if(t=(e=i.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=i.textContent.length,s=Math.min(n.start,r);n=n.end===void 0?s:Math.min(n.end,r),!t.extend&&s>n&&(r=n,n=s,s=r),r=Nw(i,s);var o=Nw(i,n);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>n?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=i;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<e.length;i++)t=e[i],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cC=vr&&"documentMode"in document&&11>=document.documentMode,da=null,km=null,ac=null,jm=!1;function Vw(t,e,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;jm||da==null||da!==vh(n)||(n=da,"selectionStart"in n&&Cx(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ac&&Nc(ac,n)||(ac=n,n=Ch(km,"onSelect"),0<n.length&&(e=new Dx("onSelect","select",null,e,i),t.push({event:e,listeners:n}),e.target=da)))}function Od(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var ua={animationend:Od("Animation","AnimationEnd"),animationiteration:Od("Animation","AnimationIteration"),animationstart:Od("Animation","AnimationStart"),transitionend:Od("Transition","TransitionEnd")},yf={},Xk={};vr&&(Xk=document.createElement("div").style,"AnimationEvent"in window||(delete ua.animationend.animation,delete ua.animationiteration.animation,delete ua.animationstart.animation),"TransitionEvent"in window||delete ua.transitionend.transition);function _p(t){if(yf[t])return yf[t];if(!ua[t])return t;var e=ua[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in Xk)return yf[t]=e[i];return t}var Zk=_p("animationend"),qk=_p("animationiteration"),Qk=_p("animationstart"),Kk=_p("transitionend"),Jk=new Map,Ww="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _s(t,e){Jk.set(t,e),Ao(e,[t])}for(var vf=0;vf<Ww.length;vf++){var bf=Ww[vf],dC=bf.toLowerCase(),uC=bf[0].toUpperCase()+bf.slice(1);_s(dC,"on"+uC)}_s(Zk,"onAnimationEnd");_s(qk,"onAnimationIteration");_s(Qk,"onAnimationStart");_s("dblclick","onDoubleClick");_s("focusin","onFocus");_s("focusout","onBlur");_s(Kk,"onTransitionEnd");Wa("onMouseEnter",["mouseout","mouseover"]);Wa("onMouseLeave",["mouseout","mouseover"]);Wa("onPointerEnter",["pointerout","pointerover"]);Wa("onPointerLeave",["pointerout","pointerover"]);Ao("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ao("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ao("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ao("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ao("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ao("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yl));function Uw(t,e,i){var n=t.type||"unknown-event";t.currentTarget=i,d_(n,e,void 0,t),t.currentTarget=null}function ej(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var n=t[i],r=n.event;n=n.listeners;e:{var s=void 0;if(e)for(var o=n.length-1;0<=o;o--){var l=n[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==s&&r.isPropagationStopped())break e;Uw(r,l,d),s=c}else for(o=0;o<n.length;o++){if(l=n[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==s&&r.isPropagationStopped())break e;Uw(r,l,d),s=c}}}if(kh)throw t=wm,kh=!1,wm=null,t}function Ee(t,e){var i=e[Pm];i===void 0&&(i=e[Pm]=new Set);var n=t+"__bubble";i.has(n)||(tj(e,t,2,!1),i.add(n))}function kf(t,e,i){var n=0;e&&(n|=4),tj(i,t,n,e)}var $d="_reactListening"+Math.random().toString(36).slice(2);function Vc(t){if(!t[$d]){t[$d]=!0,lk.forEach(function(i){i!=="selectionchange"&&(hC.has(i)||kf(i,!1,t),kf(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$d]||(e[$d]=!0,kf("selectionchange",!1,e))}}function tj(t,e,i,n){switch(Ok(e)){case 1:var r=__;break;case 4:r=C_;break;default:r=kx}i=r.bind(null,e,i,t),r=void 0,!xm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),n?r!==void 0?t.addEventListener(e,i,{capture:!0,passive:r}):t.addEventListener(e,i,!0):r!==void 0?t.addEventListener(e,i,{passive:r}):t.addEventListener(e,i,!1)}function jf(t,e,i,n,r){var s=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var l=n.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(o===4)for(o=n.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;o=o.return}for(;l!==null;){if(o=to(l),o===null)return;if(c=o.tag,c===5||c===6){n=s=o;continue e}l=l.parentNode}}n=n.return}Dk(function(){var d=s,u=wx(i),p=[];e:{var f=Jk.get(t);if(f!==void 0){var g=Dx,v=t;switch(t){case"keypress":if(Hu(i)===0)break e;case"keydown":case"keyup":g=V_;break;case"focusin":v="focus",g=gf;break;case"focusout":v="blur",g=gf;break;case"beforeblur":case"afterblur":g=gf;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Aw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=E_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=H_;break;case Zk:case qk:case Qk:g=M_;break;case Kk:g=G_;break;case"scroll":g=P_;break;case"wheel":g=Z_;break;case"copy":case"cut":case"paste":g=F_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=zw}var w=(e&4)!==0,S=!w&&t==="scroll",j=w?f!==null?f+"Capture":null:f;w=[];for(var b=d,y;b!==null;){y=b;var h=y.stateNode;if(y.tag===5&&h!==null&&(y=h,j!==null&&(h=Rc(b,j),h!=null&&w.push(Wc(b,h,y)))),S)break;b=b.return}0<w.length&&(f=new g(f,v,null,i,u),p.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&i!==mm&&(v=i.relatedTarget||i.fromElement)&&(to(v)||v[br]))break e;if((g||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=i.relatedTarget||i.toElement,g=d,v=v?to(v):null,v!==null&&(S=Mo(v),v!==S||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=d),g!==v)){if(w=Aw,h="onMouseLeave",j="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(w=zw,h="onPointerLeave",j="onPointerEnter",b="pointer"),S=g==null?f:ha(g),y=v==null?f:ha(v),f=new w(h,b+"leave",g,i,u),f.target=S,f.relatedTarget=y,h=null,to(u)===d&&(w=new w(j,b+"enter",v,i,u),w.target=y,w.relatedTarget=S,h=w),S=h,g&&v)t:{for(w=g,j=v,b=0,y=w;y;y=Ho(y))b++;for(y=0,h=j;h;h=Ho(h))y++;for(;0<b-y;)w=Ho(w),b--;for(;0<y-b;)j=Ho(j),y--;for(;b--;){if(w===j||j!==null&&w===j.alternate)break t;w=Ho(w),j=Ho(j)}w=null}else w=null;g!==null&&Hw(p,f,g,w,!1),v!==null&&S!==null&&Hw(p,S,v,w,!0)}}e:{if(f=d?ha(d):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var x=iC;else if(Lw(f))if(Uk)x=oC;else{x=rC;var k=nC}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=sC);if(x&&(x=x(t,d))){Wk(p,x,i,u);break e}k&&k(t,f,d),t==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&dm(f,"number",f.value)}switch(k=d?ha(d):window,t){case"focusin":(Lw(k)||k.contentEditable==="true")&&(da=k,km=d,ac=null);break;case"focusout":ac=km=da=null;break;case"mousedown":jm=!0;break;case"contextmenu":case"mouseup":case"dragend":jm=!1,Vw(p,i,u);break;case"selectionchange":if(cC)break;case"keydown":case"keyup":Vw(p,i,u)}var D;if(_x)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ca?Nk(t,i)&&(_="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(_="onCompositionStart");_&&(Bk&&i.locale!=="ko"&&(ca||_!=="onCompositionStart"?_==="onCompositionEnd"&&ca&&(D=$k()):(Xr=u,jx="value"in Xr?Xr.value:Xr.textContent,ca=!0)),k=Ch(d,_),0<k.length&&(_=new Mw(_,t,null,i,u),p.push({event:_,listeners:k}),D?_.data=D:(D=Vk(i),D!==null&&(_.data=D)))),(D=Q_?K_(t,i):J_(t,i))&&(d=Ch(d,"onBeforeInput"),0<d.length&&(u=new Mw("onBeforeInput","beforeinput",null,i,u),p.push({event:u,listeners:d}),u.data=D))}ej(p,e)})}function Wc(t,e,i){return{instance:t,listener:e,currentTarget:i}}function Ch(t,e){for(var i=e+"Capture",n=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Rc(t,i),s!=null&&n.unshift(Wc(t,s,r)),s=Rc(t,e),s!=null&&n.push(Wc(t,s,r))),t=t.return}return n}function Ho(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Hw(t,e,i,n,r){for(var s=e._reactName,o=[];i!==null&&i!==n;){var l=i,c=l.alternate,d=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&d!==null&&(l=d,r?(c=Rc(i,s),c!=null&&o.unshift(Wc(i,c,l))):r||(c=Rc(i,s),c!=null&&o.push(Wc(i,c,l)))),i=i.return}o.length!==0&&t.push({event:e,listeners:o})}var pC=/\r\n?/g,fC=/\u0000|\uFFFD/g;function Yw(t){return(typeof t=="string"?t:""+t).replace(pC,`
`).replace(fC,"")}function Bd(t,e,i){if(e=Yw(e),Yw(t)!==e&&i)throw Error(N(425))}function Ph(){}var Dm=null,Sm=null;function _m(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cm=typeof setTimeout=="function"?setTimeout:void 0,mC=typeof clearTimeout=="function"?clearTimeout:void 0,Gw=typeof Promise=="function"?Promise:void 0,gC=typeof queueMicrotask=="function"?queueMicrotask:typeof Gw<"u"?function(t){return Gw.resolve(null).then(t).catch(xC)}:Cm;function xC(t){setTimeout(function(){throw t})}function Df(t,e){var i=e,n=0;do{var r=i.nextSibling;if(t.removeChild(i),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(n===0){t.removeChild(r),$c(e);return}n--}else i!=="$"&&i!=="$?"&&i!=="$!"||n++;i=r}while(i);$c(e)}function ss(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Xw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(e===0)return t;e--}else i==="/$"&&e++}t=t.previousSibling}return null}var pl=Math.random().toString(36).slice(2),$n="__reactFiber$"+pl,Uc="__reactProps$"+pl,br="__reactContainer$"+pl,Pm="__reactEvents$"+pl,wC="__reactListeners$"+pl,yC="__reactHandles$"+pl;function to(t){var e=t[$n];if(e)return e;for(var i=t.parentNode;i;){if(e=i[br]||i[$n]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=Xw(t);t!==null;){if(i=t[$n])return i;t=Xw(t)}return e}t=i,i=t.parentNode}return null}function md(t){return t=t[$n]||t[br],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ha(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function Cp(t){return t[Uc]||null}var Tm=[],pa=-1;function Cs(t){return{current:t}}function Ae(t){0>pa||(t.current=Tm[pa],Tm[pa]=null,pa--)}function Te(t,e){pa++,Tm[pa]=t.current,t.current=e}var vs={},Zt=Cs(vs),mi=Cs(!1),bo=vs;function Ua(t,e){var i=t.type.contextTypes;if(!i)return vs;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in i)r[s]=e[s];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function gi(t){return t=t.childContextTypes,t!=null}function Th(){Ae(mi),Ae(Zt)}function Zw(t,e,i){if(Zt.current!==vs)throw Error(N(168));Te(Zt,e),Te(mi,i)}function ij(t,e,i){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return i;n=n.getChildContext();for(var r in n)if(!(r in e))throw Error(N(108,n_(t)||"Unknown",r));return Ue({},i,n)}function Eh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||vs,bo=Zt.current,Te(Zt,t),Te(mi,mi.current),!0}function qw(t,e,i){var n=t.stateNode;if(!n)throw Error(N(169));i?(t=ij(t,e,bo),n.__reactInternalMemoizedMergedChildContext=t,Ae(mi),Ae(Zt),Te(Zt,t)):Ae(mi),Te(mi,i)}var lr=null,Pp=!1,Sf=!1;function nj(t){lr===null?lr=[t]:lr.push(t)}function vC(t){Pp=!0,nj(t)}function Ps(){if(!Sf&&lr!==null){Sf=!0;var t=0,e=ke;try{var i=lr;for(ke=1;t<i.length;t++){var n=i[t];do n=n(!0);while(n!==null)}lr=null,Pp=!1}catch(r){throw lr!==null&&(lr=lr.slice(t+1)),Pk(yx,Ps),r}finally{ke=e,Sf=!1}}return null}var fa=[],ma=0,Ih=null,Ah=0,qi=[],Qi=0,ko=null,hr=1,pr="";function Ys(t,e){fa[ma++]=Ah,fa[ma++]=Ih,Ih=t,Ah=e}function rj(t,e,i){qi[Qi++]=hr,qi[Qi++]=pr,qi[Qi++]=ko,ko=t;var n=hr;t=pr;var r=32-Dn(n)-1;n&=~(1<<r),i+=1;var s=32-Dn(e)+r;if(30<s){var o=r-r%5;s=(n&(1<<o)-1).toString(32),n>>=o,r-=o,hr=1<<32-Dn(e)+r|i<<r|n,pr=s+t}else hr=1<<s|i<<r|n,pr=t}function Px(t){t.return!==null&&(Ys(t,1),rj(t,1,0))}function Tx(t){for(;t===Ih;)Ih=fa[--ma],fa[ma]=null,Ah=fa[--ma],fa[ma]=null;for(;t===ko;)ko=qi[--Qi],qi[Qi]=null,pr=qi[--Qi],qi[Qi]=null,hr=qi[--Qi],qi[Qi]=null}var Li=null,Fi=null,Fe=!1,bn=null;function sj(t,e){var i=tn(5,null,null,0);i.elementType="DELETED",i.stateNode=e,i.return=t,e=t.deletions,e===null?(t.deletions=[i],t.flags|=16):e.push(i)}function Qw(t,e){switch(t.tag){case 5:var i=t.type;return e=e.nodeType!==1||i.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Li=t,Fi=ss(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Li=t,Fi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(i=ko!==null?{id:hr,overflow:pr}:null,t.memoizedState={dehydrated:e,treeContext:i,retryLane:1073741824},i=tn(18,null,null,0),i.stateNode=e,i.return=t,t.child=i,Li=t,Fi=null,!0):!1;default:return!1}}function Em(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Im(t){if(Fe){var e=Fi;if(e){var i=e;if(!Qw(t,e)){if(Em(t))throw Error(N(418));e=ss(i.nextSibling);var n=Li;e&&Qw(t,e)?sj(n,i):(t.flags=t.flags&-4097|2,Fe=!1,Li=t)}}else{if(Em(t))throw Error(N(418));t.flags=t.flags&-4097|2,Fe=!1,Li=t}}}function Kw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Li=t}function Nd(t){if(t!==Li)return!1;if(!Fe)return Kw(t),Fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!_m(t.type,t.memoizedProps)),e&&(e=Fi)){if(Em(t))throw oj(),Error(N(418));for(;e;)sj(t,e),e=ss(e.nextSibling)}if(Kw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"){if(e===0){Fi=ss(t.nextSibling);break e}e--}else i!=="$"&&i!=="$!"&&i!=="$?"||e++}t=t.nextSibling}Fi=null}}else Fi=Li?ss(t.stateNode.nextSibling):null;return!0}function oj(){for(var t=Fi;t;)t=ss(t.nextSibling)}function Ha(){Fi=Li=null,Fe=!1}function Ex(t){bn===null?bn=[t]:bn.push(t)}var bC=_r.ReactCurrentBatchConfig;function Cl(t,e,i){if(t=i.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(N(309));var n=i.stateNode}if(!n)throw Error(N(147,t));var r=n,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=r.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(N(284));if(!i._owner)throw Error(N(290,t))}return t}function Vd(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jw(t){var e=t._init;return e(t._payload)}function aj(t){function e(j,b){if(t){var y=j.deletions;y===null?(j.deletions=[b],j.flags|=16):y.push(b)}}function i(j,b){if(!t)return null;for(;b!==null;)e(j,b),b=b.sibling;return null}function n(j,b){for(j=new Map;b!==null;)b.key!==null?j.set(b.key,b):j.set(b.index,b),b=b.sibling;return j}function r(j,b){return j=cs(j,b),j.index=0,j.sibling=null,j}function s(j,b,y){return j.index=y,t?(y=j.alternate,y!==null?(y=y.index,y<b?(j.flags|=2,b):y):(j.flags|=2,b)):(j.flags|=1048576,b)}function o(j){return t&&j.alternate===null&&(j.flags|=2),j}function l(j,b,y,h){return b===null||b.tag!==6?(b=Af(y,j.mode,h),b.return=j,b):(b=r(b,y),b.return=j,b)}function c(j,b,y,h){var x=y.type;return x===la?u(j,b,y.props.children,h,y.key):b!==null&&(b.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Vr&&Jw(x)===b.type)?(h=r(b,y.props),h.ref=Cl(j,b,y),h.return=j,h):(h=Ku(y.type,y.key,y.props,null,j.mode,h),h.ref=Cl(j,b,y),h.return=j,h)}function d(j,b,y,h){return b===null||b.tag!==4||b.stateNode.containerInfo!==y.containerInfo||b.stateNode.implementation!==y.implementation?(b=Mf(y,j.mode,h),b.return=j,b):(b=r(b,y.children||[]),b.return=j,b)}function u(j,b,y,h,x){return b===null||b.tag!==7?(b=uo(y,j.mode,h,x),b.return=j,b):(b=r(b,y),b.return=j,b)}function p(j,b,y){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Af(""+b,j.mode,y),b.return=j,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Id:return y=Ku(b.type,b.key,b.props,null,j.mode,y),y.ref=Cl(j,null,b),y.return=j,y;case aa:return b=Mf(b,j.mode,y),b.return=j,b;case Vr:var h=b._init;return p(j,h(b._payload),y)}if(Ul(b)||kl(b))return b=uo(b,j.mode,y,null),b.return=j,b;Vd(j,b)}return null}function f(j,b,y,h){var x=b!==null?b.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return x!==null?null:l(j,b,""+y,h);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Id:return y.key===x?c(j,b,y,h):null;case aa:return y.key===x?d(j,b,y,h):null;case Vr:return x=y._init,f(j,b,x(y._payload),h)}if(Ul(y)||kl(y))return x!==null?null:u(j,b,y,h,null);Vd(j,y)}return null}function g(j,b,y,h,x){if(typeof h=="string"&&h!==""||typeof h=="number")return j=j.get(y)||null,l(b,j,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Id:return j=j.get(h.key===null?y:h.key)||null,c(b,j,h,x);case aa:return j=j.get(h.key===null?y:h.key)||null,d(b,j,h,x);case Vr:var k=h._init;return g(j,b,y,k(h._payload),x)}if(Ul(h)||kl(h))return j=j.get(y)||null,u(b,j,h,x,null);Vd(b,h)}return null}function v(j,b,y,h){for(var x=null,k=null,D=b,_=b=0,C=null;D!==null&&_<y.length;_++){D.index>_?(C=D,D=null):C=D.sibling;var E=f(j,D,y[_],h);if(E===null){D===null&&(D=C);break}t&&D&&E.alternate===null&&e(j,D),b=s(E,b,_),k===null?x=E:k.sibling=E,k=E,D=C}if(_===y.length)return i(j,D),Fe&&Ys(j,_),x;if(D===null){for(;_<y.length;_++)D=p(j,y[_],h),D!==null&&(b=s(D,b,_),k===null?x=D:k.sibling=D,k=D);return Fe&&Ys(j,_),x}for(D=n(j,D);_<y.length;_++)C=g(D,j,_,y[_],h),C!==null&&(t&&C.alternate!==null&&D.delete(C.key===null?_:C.key),b=s(C,b,_),k===null?x=C:k.sibling=C,k=C);return t&&D.forEach(function(z){return e(j,z)}),Fe&&Ys(j,_),x}function w(j,b,y,h){var x=kl(y);if(typeof x!="function")throw Error(N(150));if(y=x.call(y),y==null)throw Error(N(151));for(var k=x=null,D=b,_=b=0,C=null,E=y.next();D!==null&&!E.done;_++,E=y.next()){D.index>_?(C=D,D=null):C=D.sibling;var z=f(j,D,E.value,h);if(z===null){D===null&&(D=C);break}t&&D&&z.alternate===null&&e(j,D),b=s(z,b,_),k===null?x=z:k.sibling=z,k=z,D=C}if(E.done)return i(j,D),Fe&&Ys(j,_),x;if(D===null){for(;!E.done;_++,E=y.next())E=p(j,E.value,h),E!==null&&(b=s(E,b,_),k===null?x=E:k.sibling=E,k=E);return Fe&&Ys(j,_),x}for(D=n(j,D);!E.done;_++,E=y.next())E=g(D,j,_,E.value,h),E!==null&&(t&&E.alternate!==null&&D.delete(E.key===null?_:E.key),b=s(E,b,_),k===null?x=E:k.sibling=E,k=E);return t&&D.forEach(function(A){return e(j,A)}),Fe&&Ys(j,_),x}function S(j,b,y,h){if(typeof y=="object"&&y!==null&&y.type===la&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Id:e:{for(var x=y.key,k=b;k!==null;){if(k.key===x){if(x=y.type,x===la){if(k.tag===7){i(j,k.sibling),b=r(k,y.props.children),b.return=j,j=b;break e}}else if(k.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Vr&&Jw(x)===k.type){i(j,k.sibling),b=r(k,y.props),b.ref=Cl(j,k,y),b.return=j,j=b;break e}i(j,k);break}else e(j,k);k=k.sibling}y.type===la?(b=uo(y.props.children,j.mode,h,y.key),b.return=j,j=b):(h=Ku(y.type,y.key,y.props,null,j.mode,h),h.ref=Cl(j,b,y),h.return=j,j=h)}return o(j);case aa:e:{for(k=y.key;b!==null;){if(b.key===k)if(b.tag===4&&b.stateNode.containerInfo===y.containerInfo&&b.stateNode.implementation===y.implementation){i(j,b.sibling),b=r(b,y.children||[]),b.return=j,j=b;break e}else{i(j,b);break}else e(j,b);b=b.sibling}b=Mf(y,j.mode,h),b.return=j,j=b}return o(j);case Vr:return k=y._init,S(j,b,k(y._payload),h)}if(Ul(y))return v(j,b,y,h);if(kl(y))return w(j,b,y,h);Vd(j,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,b!==null&&b.tag===6?(i(j,b.sibling),b=r(b,y),b.return=j,j=b):(i(j,b),b=Af(y,j.mode,h),b.return=j,j=b),o(j)):i(j,b)}return S}var Ya=aj(!0),lj=aj(!1),Mh=Cs(null),zh=null,ga=null,Ix=null;function Ax(){Ix=ga=zh=null}function Mx(t){var e=Mh.current;Ae(Mh),t._currentValue=e}function Am(t,e,i){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===i)break;t=t.return}}function Aa(t,e){zh=t,Ix=ga=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(fi=!0),t.firstContext=null)}function ln(t){var e=t._currentValue;if(Ix!==t)if(t={context:t,memoizedValue:e,next:null},ga===null){if(zh===null)throw Error(N(308));ga=t,zh.dependencies={lanes:0,firstContext:t}}else ga=ga.next=t;return e}var io=null;function zx(t){io===null?io=[t]:io.push(t)}function cj(t,e,i,n){var r=e.interleaved;return r===null?(i.next=i,zx(e)):(i.next=r.next,r.next=i),e.interleaved=i,kr(t,n)}function kr(t,e){t.lanes|=e;var i=t.alternate;for(i!==null&&(i.lanes|=e),i=t,t=t.return;t!==null;)t.childLanes|=e,i=t.alternate,i!==null&&(i.childLanes|=e),i=t,t=t.return;return i.tag===3?i.stateNode:null}var Wr=!1;function Fx(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dj(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function os(t,e,i){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,xe&2){var r=n.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),n.pending=e,kr(t,i)}return r=n.interleaved,r===null?(e.next=e,zx(n)):(e.next=r.next,r.next=e),n.interleaved=e,kr(t,i)}function Yu(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,i|=n,e.lanes=i,vx(t,i)}}function ey(t,e){var i=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var r=null,s=null;if(i=i.firstBaseUpdate,i!==null){do{var o={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};s===null?r=s=o:s=s.next=o,i=i.next}while(i!==null);s===null?r=s=e:s=s.next=e}else r=s=e;i={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:n.shared,effects:n.effects},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}function Fh(t,e,i,n){var r=t.updateQueue;Wr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?s=d:o.next=d,o=c;var u=t.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==o&&(l===null?u.firstBaseUpdate=d:l.next=d,u.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;o=0,u=d=c=null,l=s;do{var f=l.lane,g=l.eventTime;if((n&f)===f){u!==null&&(u=u.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=t,w=l;switch(f=e,g=i,w.tag){case 1:if(v=w.payload,typeof v=="function"){p=v.call(g,p,f);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,f=typeof v=="function"?v.call(g,p,f):v,f==null)break e;p=Ue({},p,f);break e;case 2:Wr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(d=u=g,c=p):u=u.next=g,o|=f;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;f=l,l=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(u===null&&(c=p),r.baseState=c,r.firstBaseUpdate=d,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Do|=o,t.lanes=o,t.memoizedState=p}}function ty(t,e,i){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],r=n.callback;if(r!==null){if(n.callback=null,n=i,typeof r!="function")throw Error(N(191,r));r.call(n)}}}var gd={},Un=Cs(gd),Hc=Cs(gd),Yc=Cs(gd);function no(t){if(t===gd)throw Error(N(174));return t}function Rx(t,e){switch(Te(Yc,e),Te(Hc,t),Te(Un,gd),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hm(e,t)}Ae(Un),Te(Un,e)}function Ga(){Ae(Un),Ae(Hc),Ae(Yc)}function uj(t){no(Yc.current);var e=no(Un.current),i=hm(e,t.type);e!==i&&(Te(Hc,t),Te(Un,i))}function Lx(t){Hc.current===t&&(Ae(Un),Ae(Hc))}var $e=Cs(0);function Rh(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _f=[];function Ox(){for(var t=0;t<_f.length;t++)_f[t]._workInProgressVersionPrimary=null;_f.length=0}var Gu=_r.ReactCurrentDispatcher,Cf=_r.ReactCurrentBatchConfig,jo=0,We=null,xt=null,Dt=null,Lh=!1,lc=!1,Gc=0,kC=0;function Nt(){throw Error(N(321))}function $x(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!Cn(t[i],e[i]))return!1;return!0}function Bx(t,e,i,n,r,s){if(jo=s,We=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Gu.current=t===null||t.memoizedState===null?_C:CC,t=i(n,r),lc){s=0;do{if(lc=!1,Gc=0,25<=s)throw Error(N(301));s+=1,Dt=xt=null,e.updateQueue=null,Gu.current=PC,t=i(n,r)}while(lc)}if(Gu.current=Oh,e=xt!==null&&xt.next!==null,jo=0,Dt=xt=We=null,Lh=!1,e)throw Error(N(300));return t}function Nx(){var t=Gc!==0;return Gc=0,t}function Mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?We.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function cn(){if(xt===null){var t=We.alternate;t=t!==null?t.memoizedState:null}else t=xt.next;var e=Dt===null?We.memoizedState:Dt.next;if(e!==null)Dt=e,xt=t;else{if(t===null)throw Error(N(310));xt=t,t={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},Dt===null?We.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function Xc(t,e){return typeof e=="function"?e(t):e}function Pf(t){var e=cn(),i=e.queue;if(i===null)throw Error(N(311));i.lastRenderedReducer=t;var n=xt,r=n.baseQueue,s=i.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}n.baseQueue=r=s,i.pending=null}if(r!==null){s=r.next,n=n.baseState;var l=o=null,c=null,d=s;do{var u=d.lane;if((jo&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:t(n,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=p,o=n):c=c.next=p,We.lanes|=u,Do|=u}d=d.next}while(d!==null&&d!==s);c===null?o=n:c.next=l,Cn(n,e.memoizedState)||(fi=!0),e.memoizedState=n,e.baseState=o,e.baseQueue=c,i.lastRenderedState=n}if(t=i.interleaved,t!==null){r=t;do s=r.lane,We.lanes|=s,Do|=s,r=r.next;while(r!==t)}else r===null&&(i.lanes=0);return[e.memoizedState,i.dispatch]}function Tf(t){var e=cn(),i=e.queue;if(i===null)throw Error(N(311));i.lastRenderedReducer=t;var n=i.dispatch,r=i.pending,s=e.memoizedState;if(r!==null){i.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Cn(s,e.memoizedState)||(fi=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),i.lastRenderedState=s}return[s,n]}function hj(){}function pj(t,e){var i=We,n=cn(),r=e(),s=!Cn(n.memoizedState,r);if(s&&(n.memoizedState=r,fi=!0),n=n.queue,Vx(gj.bind(null,i,n,t),[t]),n.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(i.flags|=2048,Zc(9,mj.bind(null,i,n,r,e),void 0,null),Ct===null)throw Error(N(349));jo&30||fj(i,e,r)}return r}function fj(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function mj(t,e,i,n){e.value=i,e.getSnapshot=n,xj(e)&&wj(t)}function gj(t,e,i){return i(function(){xj(e)&&wj(t)})}function xj(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!Cn(t,i)}catch{return!0}}function wj(t){var e=kr(t,1);e!==null&&Sn(e,t,1,-1)}function iy(t){var e=Mn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xc,lastRenderedState:t},e.queue=t,t=t.dispatch=SC.bind(null,We,t),[e.memoizedState,t]}function Zc(t,e,i,n){return t={tag:t,create:e,destroy:i,deps:n,next:null},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.lastEffect=t.next=t):(i=e.lastEffect,i===null?e.lastEffect=t.next=t:(n=i.next,i.next=t,t.next=n,e.lastEffect=t)),t}function yj(){return cn().memoizedState}function Xu(t,e,i,n){var r=Mn();We.flags|=t,r.memoizedState=Zc(1|e,i,void 0,n===void 0?null:n)}function Tp(t,e,i,n){var r=cn();n=n===void 0?null:n;var s=void 0;if(xt!==null){var o=xt.memoizedState;if(s=o.destroy,n!==null&&$x(n,o.deps)){r.memoizedState=Zc(e,i,s,n);return}}We.flags|=t,r.memoizedState=Zc(1|e,i,s,n)}function ny(t,e){return Xu(8390656,8,t,e)}function Vx(t,e){return Tp(2048,8,t,e)}function vj(t,e){return Tp(4,2,t,e)}function bj(t,e){return Tp(4,4,t,e)}function kj(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function jj(t,e,i){return i=i!=null?i.concat([t]):null,Tp(4,4,kj.bind(null,e,t),i)}function Wx(){}function Dj(t,e){var i=cn();e=e===void 0?null:e;var n=i.memoizedState;return n!==null&&e!==null&&$x(e,n[1])?n[0]:(i.memoizedState=[t,e],t)}function Sj(t,e){var i=cn();e=e===void 0?null:e;var n=i.memoizedState;return n!==null&&e!==null&&$x(e,n[1])?n[0]:(t=t(),i.memoizedState=[t,e],t)}function _j(t,e,i){return jo&21?(Cn(i,e)||(i=Ik(),We.lanes|=i,Do|=i,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,fi=!0),t.memoizedState=i)}function jC(t,e){var i=ke;ke=i!==0&&4>i?i:4,t(!0);var n=Cf.transition;Cf.transition={};try{t(!1),e()}finally{ke=i,Cf.transition=n}}function Cj(){return cn().memoizedState}function DC(t,e,i){var n=ls(t);if(i={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null},Pj(t))Tj(e,i);else if(i=cj(t,e,i,n),i!==null){var r=ai();Sn(i,t,n,r),Ej(i,e,n)}}function SC(t,e,i){var n=ls(t),r={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null};if(Pj(t))Tj(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,i);if(r.hasEagerState=!0,r.eagerState=l,Cn(l,o)){var c=e.interleaved;c===null?(r.next=r,zx(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}i=cj(t,e,r,n),i!==null&&(r=ai(),Sn(i,t,n,r),Ej(i,e,n))}}function Pj(t){var e=t.alternate;return t===We||e!==null&&e===We}function Tj(t,e){lc=Lh=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function Ej(t,e,i){if(i&4194240){var n=e.lanes;n&=t.pendingLanes,i|=n,e.lanes=i,vx(t,i)}}var Oh={readContext:ln,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},_C={readContext:ln,useCallback:function(t,e){return Mn().memoizedState=[t,e===void 0?null:e],t},useContext:ln,useEffect:ny,useImperativeHandle:function(t,e,i){return i=i!=null?i.concat([t]):null,Xu(4194308,4,kj.bind(null,e,t),i)},useLayoutEffect:function(t,e){return Xu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xu(4,2,t,e)},useMemo:function(t,e){var i=Mn();return e=e===void 0?null:e,t=t(),i.memoizedState=[t,e],t},useReducer:function(t,e,i){var n=Mn();return e=i!==void 0?i(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=DC.bind(null,We,t),[n.memoizedState,t]},useRef:function(t){var e=Mn();return t={current:t},e.memoizedState=t},useState:iy,useDebugValue:Wx,useDeferredValue:function(t){return Mn().memoizedState=t},useTransition:function(){var t=iy(!1),e=t[0];return t=jC.bind(null,t[1]),Mn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,i){var n=We,r=Mn();if(Fe){if(i===void 0)throw Error(N(407));i=i()}else{if(i=e(),Ct===null)throw Error(N(349));jo&30||fj(n,e,i)}r.memoizedState=i;var s={value:i,getSnapshot:e};return r.queue=s,ny(gj.bind(null,n,s,t),[t]),n.flags|=2048,Zc(9,mj.bind(null,n,s,i,e),void 0,null),i},useId:function(){var t=Mn(),e=Ct.identifierPrefix;if(Fe){var i=pr,n=hr;i=(n&~(1<<32-Dn(n)-1)).toString(32)+i,e=":"+e+"R"+i,i=Gc++,0<i&&(e+="H"+i.toString(32)),e+=":"}else i=kC++,e=":"+e+"r"+i.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},CC={readContext:ln,useCallback:Dj,useContext:ln,useEffect:Vx,useImperativeHandle:jj,useInsertionEffect:vj,useLayoutEffect:bj,useMemo:Sj,useReducer:Pf,useRef:yj,useState:function(){return Pf(Xc)},useDebugValue:Wx,useDeferredValue:function(t){var e=cn();return _j(e,xt.memoizedState,t)},useTransition:function(){var t=Pf(Xc)[0],e=cn().memoizedState;return[t,e]},useMutableSource:hj,useSyncExternalStore:pj,useId:Cj,unstable_isNewReconciler:!1},PC={readContext:ln,useCallback:Dj,useContext:ln,useEffect:Vx,useImperativeHandle:jj,useInsertionEffect:vj,useLayoutEffect:bj,useMemo:Sj,useReducer:Tf,useRef:yj,useState:function(){return Tf(Xc)},useDebugValue:Wx,useDeferredValue:function(t){var e=cn();return xt===null?e.memoizedState=t:_j(e,xt.memoizedState,t)},useTransition:function(){var t=Tf(Xc)[0],e=cn().memoizedState;return[t,e]},useMutableSource:hj,useSyncExternalStore:pj,useId:Cj,unstable_isNewReconciler:!1};function yn(t,e){if(t&&t.defaultProps){e=Ue({},e),t=t.defaultProps;for(var i in t)e[i]===void 0&&(e[i]=t[i]);return e}return e}function Mm(t,e,i,n){e=t.memoizedState,i=i(n,e),i=i==null?e:Ue({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Ep={isMounted:function(t){return(t=t._reactInternals)?Mo(t)===t:!1},enqueueSetState:function(t,e,i){t=t._reactInternals;var n=ai(),r=ls(t),s=gr(n,r);s.payload=e,i!=null&&(s.callback=i),e=os(t,s,r),e!==null&&(Sn(e,t,r,n),Yu(e,t,r))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var n=ai(),r=ls(t),s=gr(n,r);s.tag=1,s.payload=e,i!=null&&(s.callback=i),e=os(t,s,r),e!==null&&(Sn(e,t,r,n),Yu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=ai(),n=ls(t),r=gr(i,n);r.tag=2,e!=null&&(r.callback=e),e=os(t,r,n),e!==null&&(Sn(e,t,n,i),Yu(e,t,n))}};function ry(t,e,i,n,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,s,o):e.prototype&&e.prototype.isPureReactComponent?!Nc(i,n)||!Nc(r,s):!0}function Ij(t,e,i){var n=!1,r=vs,s=e.contextType;return typeof s=="object"&&s!==null?s=ln(s):(r=gi(e)?bo:Zt.current,n=e.contextTypes,s=(n=n!=null)?Ua(t,r):vs),e=new e(i,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ep,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function sy(t,e,i,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,n),e.state!==t&&Ep.enqueueReplaceState(e,e.state,null)}function zm(t,e,i,n){var r=t.stateNode;r.props=i,r.state=t.memoizedState,r.refs={},Fx(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ln(s):(s=gi(e)?bo:Zt.current,r.context=Ua(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mm(t,e,s,i),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ep.enqueueReplaceState(r,r.state,null),Fh(t,i,r,n),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Xa(t,e){try{var i="",n=e;do i+=i_(n),n=n.return;while(n);var r=i}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ef(t,e,i){return{value:t,source:null,stack:i??null,digest:e??null}}function Fm(t,e){try{console.error(e.value)}catch(i){setTimeout(function(){throw i})}}var TC=typeof WeakMap=="function"?WeakMap:Map;function Aj(t,e,i){i=gr(-1,i),i.tag=3,i.payload={element:null};var n=e.value;return i.callback=function(){Bh||(Bh=!0,Hm=n),Fm(t,e)},i}function Mj(t,e,i){i=gr(-1,i),i.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var r=e.value;i.payload=function(){return n(r)},i.callback=function(){Fm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(i.callback=function(){Fm(t,e),typeof n!="function"&&(as===null?as=new Set([this]):as.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),i}function oy(t,e,i){var n=t.pingCache;if(n===null){n=t.pingCache=new TC;var r=new Set;n.set(e,r)}else r=n.get(e),r===void 0&&(r=new Set,n.set(e,r));r.has(i)||(r.add(i),t=WC.bind(null,t,e,i),e.then(t,t))}function ay(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ly(t,e,i,n,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(e=gr(-1,1),e.tag=2,os(i,e,1))),i.lanes|=1),t)}var EC=_r.ReactCurrentOwner,fi=!1;function ii(t,e,i,n){e.child=t===null?lj(e,null,i,n):Ya(e,t.child,i,n)}function cy(t,e,i,n,r){i=i.render;var s=e.ref;return Aa(e,r),n=Bx(t,e,i,n,s,r),i=Nx(),t!==null&&!fi?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,jr(t,e,r)):(Fe&&i&&Px(e),e.flags|=1,ii(t,e,n,r),e.child)}function dy(t,e,i,n,r){if(t===null){var s=i.type;return typeof s=="function"&&!Qx(s)&&s.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(e.tag=15,e.type=s,zj(t,e,s,n,r)):(t=Ku(i.type,null,n,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(i=i.compare,i=i!==null?i:Nc,i(o,n)&&t.ref===e.ref)return jr(t,e,r)}return e.flags|=1,t=cs(s,n),t.ref=e.ref,t.return=e,e.child=t}function zj(t,e,i,n,r){if(t!==null){var s=t.memoizedProps;if(Nc(s,n)&&t.ref===e.ref)if(fi=!1,e.pendingProps=n=s,(t.lanes&r)!==0)t.flags&131072&&(fi=!0);else return e.lanes=t.lanes,jr(t,e,r)}return Rm(t,e,i,n,r)}function Fj(t,e,i){var n=e.pendingProps,r=n.children,s=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(wa,Ti),Ti|=i;else{if(!(i&1073741824))return t=s!==null?s.baseLanes|i:i,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(wa,Ti),Ti|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:i,Te(wa,Ti),Ti|=n}else s!==null?(n=s.baseLanes|i,e.memoizedState=null):n=i,Te(wa,Ti),Ti|=n;return ii(t,e,r,i),e.child}function Rj(t,e){var i=e.ref;(t===null&&i!==null||t!==null&&t.ref!==i)&&(e.flags|=512,e.flags|=2097152)}function Rm(t,e,i,n,r){var s=gi(i)?bo:Zt.current;return s=Ua(e,s),Aa(e,r),i=Bx(t,e,i,n,s,r),n=Nx(),t!==null&&!fi?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,jr(t,e,r)):(Fe&&n&&Px(e),e.flags|=1,ii(t,e,i,r),e.child)}function uy(t,e,i,n,r){if(gi(i)){var s=!0;Eh(e)}else s=!1;if(Aa(e,r),e.stateNode===null)Zu(t,e),Ij(e,i,n),zm(e,i,n,r),n=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var c=o.context,d=i.contextType;typeof d=="object"&&d!==null?d=ln(d):(d=gi(i)?bo:Zt.current,d=Ua(e,d));var u=i.getDerivedStateFromProps,p=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==n||c!==d)&&sy(e,o,n,d),Wr=!1;var f=e.memoizedState;o.state=f,Fh(e,n,o,r),c=e.memoizedState,l!==n||f!==c||mi.current||Wr?(typeof u=="function"&&(Mm(e,i,u,n),c=e.memoizedState),(l=Wr||ry(e,i,l,n,f,c,d))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=c),o.props=n,o.state=c,o.context=d,n=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{o=e.stateNode,dj(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:yn(e.type,l),o.props=d,p=e.pendingProps,f=o.context,c=i.contextType,typeof c=="object"&&c!==null?c=ln(c):(c=gi(i)?bo:Zt.current,c=Ua(e,c));var g=i.getDerivedStateFromProps;(u=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||f!==c)&&sy(e,o,n,c),Wr=!1,f=e.memoizedState,o.state=f,Fh(e,n,o,r);var v=e.memoizedState;l!==p||f!==v||mi.current||Wr?(typeof g=="function"&&(Mm(e,i,g,n),v=e.memoizedState),(d=Wr||ry(e,i,d,n,f,v,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(n,v,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(n,v,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=v),o.props=n,o.state=v,o.context=c,n=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),n=!1)}return Lm(t,e,i,n,s,r)}function Lm(t,e,i,n,r,s){Rj(t,e);var o=(e.flags&128)!==0;if(!n&&!o)return r&&qw(e,i,!1),jr(t,e,s);n=e.stateNode,EC.current=e;var l=o&&typeof i.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&o?(e.child=Ya(e,t.child,null,s),e.child=Ya(e,null,l,s)):ii(t,e,l,s),e.memoizedState=n.state,r&&qw(e,i,!0),e.child}function Lj(t){var e=t.stateNode;e.pendingContext?Zw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zw(t,e.context,!1),Rx(t,e.containerInfo)}function hy(t,e,i,n,r){return Ha(),Ex(r),e.flags|=256,ii(t,e,i,n),e.child}var Om={dehydrated:null,treeContext:null,retryLane:0};function $m(t){return{baseLanes:t,cachePool:null,transitions:null}}function Oj(t,e,i){var n=e.pendingProps,r=$e.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Te($e,r&1),t===null)return Im(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=n.children,t=n.fallback,s?(n=e.mode,s=e.child,o={mode:"hidden",children:o},!(n&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mp(o,n,0,null),t=uo(t,n,i,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$m(i),e.memoizedState=Om,t):Ux(e,o));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return IC(t,e,o,n,l,r,i);if(s){s=n.fallback,o=e.mode,r=t.child,l=r.sibling;var c={mode:"hidden",children:n.children};return!(o&1)&&e.child!==r?(n=e.child,n.childLanes=0,n.pendingProps=c,e.deletions=null):(n=cs(r,c),n.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=cs(l,s):(s=uo(s,o,i,null),s.flags|=2),s.return=e,n.return=e,n.sibling=s,e.child=n,n=s,s=e.child,o=t.child.memoizedState,o=o===null?$m(i):{baseLanes:o.baseLanes|i,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~i,e.memoizedState=Om,n}return s=t.child,t=s.sibling,n=cs(s,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=i),n.return=e,n.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=n,e.memoizedState=null,n}function Ux(t,e){return e=Mp({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wd(t,e,i,n){return n!==null&&Ex(n),Ya(e,t.child,null,i),t=Ux(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function IC(t,e,i,n,r,s,o){if(i)return e.flags&256?(e.flags&=-257,n=Ef(Error(N(422))),Wd(t,e,o,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=n.fallback,r=e.mode,n=Mp({mode:"visible",children:n.children},r,0,null),s=uo(s,r,o,null),s.flags|=2,n.return=e,s.return=e,n.sibling=s,e.child=n,e.mode&1&&Ya(e,t.child,null,o),e.child.memoizedState=$m(o),e.memoizedState=Om,s);if(!(e.mode&1))return Wd(t,e,o,null);if(r.data==="$!"){if(n=r.nextSibling&&r.nextSibling.dataset,n)var l=n.dgst;return n=l,s=Error(N(419)),n=Ef(s,n,void 0),Wd(t,e,o,n)}if(l=(o&t.childLanes)!==0,fi||l){if(n=Ct,n!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(n.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,kr(t,r),Sn(n,t,r,-1))}return qx(),n=Ef(Error(N(421))),Wd(t,e,o,n)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=UC.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Fi=ss(r.nextSibling),Li=e,Fe=!0,bn=null,t!==null&&(qi[Qi++]=hr,qi[Qi++]=pr,qi[Qi++]=ko,hr=t.id,pr=t.overflow,ko=e),e=Ux(e,n.children),e.flags|=4096,e)}function py(t,e,i){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Am(t.return,e,i)}function If(t,e,i,n,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=i,s.tailMode=r)}function $j(t,e,i){var n=e.pendingProps,r=n.revealOrder,s=n.tail;if(ii(t,e,n.children,i),n=$e.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&py(t,i,e);else if(t.tag===19)py(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(Te($e,n),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(i=e.child,r=null;i!==null;)t=i.alternate,t!==null&&Rh(t)===null&&(r=i),i=i.sibling;i=r,i===null?(r=e.child,e.child=null):(r=i.sibling,i.sibling=null),If(e,!1,r,i,s);break;case"backwards":for(i=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Rh(t)===null){e.child=r;break}t=r.sibling,r.sibling=i,i=r,r=t}If(e,!0,i,null,s);break;case"together":If(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jr(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),Do|=e.lanes,!(i&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,i=cs(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=cs(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function AC(t,e,i){switch(e.tag){case 3:Lj(e),Ha();break;case 5:uj(e);break;case 1:gi(e.type)&&Eh(e);break;case 4:Rx(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,r=e.memoizedProps.value;Te(Mh,n._currentValue),n._currentValue=r;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(Te($e,$e.current&1),e.flags|=128,null):i&e.child.childLanes?Oj(t,e,i):(Te($e,$e.current&1),t=jr(t,e,i),t!==null?t.sibling:null);Te($e,$e.current&1);break;case 19:if(n=(i&e.childLanes)!==0,t.flags&128){if(n)return $j(t,e,i);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Te($e,$e.current),n)break;return null;case 22:case 23:return e.lanes=0,Fj(t,e,i)}return jr(t,e,i)}var Bj,Bm,Nj,Vj;Bj=function(t,e){for(var i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};Bm=function(){};Nj=function(t,e,i,n){var r=t.memoizedProps;if(r!==n){t=e.stateNode,no(Un.current);var s=null;switch(i){case"input":r=lm(t,r),n=lm(t,n),s=[];break;case"select":r=Ue({},r,{value:void 0}),n=Ue({},n,{value:void 0}),s=[];break;case"textarea":r=um(t,r),n=um(t,n),s=[];break;default:typeof r.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Ph)}pm(i,n);var o;i=null;for(d in r)if(!n.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var l=r[d];for(o in l)l.hasOwnProperty(o)&&(i||(i={}),i[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(zc.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in n){var c=n[d];if(l=r!=null?r[d]:void 0,n.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(i||(i={}),i[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(i||(i={}),i[o]=c[o])}else i||(s||(s=[]),s.push(d,i)),i=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(zc.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Ee("scroll",t),s||l===c||(s=[])):(s=s||[]).push(d,c))}i&&(s=s||[]).push("style",i);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};Vj=function(t,e,i,n){i!==n&&(e.flags|=4)};function Pl(t,e){if(!Fe)switch(t.tailMode){case"hidden":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,n=0;if(e)for(var r=t.child;r!==null;)i|=r.lanes|r.childLanes,n|=r.subtreeFlags&14680064,n|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)i|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=n,t.childLanes=i,e}function MC(t,e,i){var n=e.pendingProps;switch(Tx(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return gi(e.type)&&Th(),Vt(e),null;case 3:return n=e.stateNode,Ga(),Ae(mi),Ae(Zt),Ox(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Nd(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,bn!==null&&(Xm(bn),bn=null))),Bm(t,e),Vt(e),null;case 5:Lx(e);var r=no(Yc.current);if(i=e.type,t!==null&&e.stateNode!=null)Nj(t,e,i,n,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(N(166));return Vt(e),null}if(t=no(Un.current),Nd(e)){n=e.stateNode,i=e.type;var s=e.memoizedProps;switch(n[$n]=e,n[Uc]=s,t=(e.mode&1)!==0,i){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(r=0;r<Yl.length;r++)Ee(Yl[r],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":kw(n,s),Ee("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",n);break;case"textarea":Dw(n,s),Ee("invalid",n)}pm(i,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?n.textContent!==l&&(s.suppressHydrationWarning!==!0&&Bd(n.textContent,l,t),r=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Bd(n.textContent,l,t),r=["children",""+l]):zc.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ee("scroll",n)}switch(i){case"input":Ad(n),jw(n,s,!0);break;case"textarea":Ad(n),Sw(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=Ph)}n=r,e.updateQueue=n,n!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gk(i)),t==="http://www.w3.org/1999/xhtml"?i==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=o.createElement(i,{is:n.is}):(t=o.createElement(i),i==="select"&&(o=t,n.multiple?o.multiple=!0:n.size&&(o.size=n.size))):t=o.createElementNS(t,i),t[$n]=e,t[Uc]=n,Bj(t,e,!1,!1),e.stateNode=t;e:{switch(o=fm(i,n),i){case"dialog":Ee("cancel",t),Ee("close",t),r=n;break;case"iframe":case"object":case"embed":Ee("load",t),r=n;break;case"video":case"audio":for(r=0;r<Yl.length;r++)Ee(Yl[r],t);r=n;break;case"source":Ee("error",t),r=n;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),r=n;break;case"details":Ee("toggle",t),r=n;break;case"input":kw(t,n),r=lm(t,n),Ee("invalid",t);break;case"option":r=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},r=Ue({},n,{value:void 0}),Ee("invalid",t);break;case"textarea":Dw(t,n),r=um(t,n),Ee("invalid",t);break;default:r=n}pm(i,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?yk(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&xk(t,c)):s==="children"?typeof c=="string"?(i!=="textarea"||c!=="")&&Fc(t,c):typeof c=="number"&&Fc(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(zc.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Ee("scroll",t):c!=null&&fx(t,s,c,o))}switch(i){case"input":Ad(t),jw(t,n,!1);break;case"textarea":Ad(t),Sw(t);break;case"option":n.value!=null&&t.setAttribute("value",""+ys(n.value));break;case"select":t.multiple=!!n.multiple,s=n.value,s!=null?Pa(t,!!n.multiple,s,!1):n.defaultValue!=null&&Pa(t,!!n.multiple,n.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ph)}switch(i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)Vj(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(N(166));if(i=no(Yc.current),no(Un.current),Nd(e)){if(n=e.stateNode,i=e.memoizedProps,n[$n]=e,(s=n.nodeValue!==i)&&(t=Li,t!==null))switch(t.tag){case 3:Bd(n.nodeValue,i,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Bd(n.nodeValue,i,(t.mode&1)!==0)}s&&(e.flags|=4)}else n=(i.nodeType===9?i:i.ownerDocument).createTextNode(n),n[$n]=e,e.stateNode=n}return Vt(e),null;case 13:if(Ae($e),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Fe&&Fi!==null&&e.mode&1&&!(e.flags&128))oj(),Ha(),e.flags|=98560,s=!1;else if(s=Nd(e),n!==null&&n.dehydrated!==null){if(t===null){if(!s)throw Error(N(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[$n]=e}else Ha(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else bn!==null&&(Xm(bn),bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=i,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||$e.current&1?yt===0&&(yt=3):qx())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Ga(),Bm(t,e),t===null&&Vc(e.stateNode.containerInfo),Vt(e),null;case 10:return Mx(e.type._context),Vt(e),null;case 17:return gi(e.type)&&Th(),Vt(e),null;case 19:if(Ae($e),s=e.memoizedState,s===null)return Vt(e),null;if(n=(e.flags&128)!==0,o=s.rendering,o===null)if(n)Pl(s,!1);else{if(yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Rh(t),o!==null){for(e.flags|=128,Pl(s,!1),n=o.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=i,i=e.child;i!==null;)s=i,t=n,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i=i.sibling;return Te($e,$e.current&1|2),e.child}t=t.sibling}s.tail!==null&&nt()>Za&&(e.flags|=128,n=!0,Pl(s,!1),e.lanes=4194304)}else{if(!n)if(t=Rh(o),t!==null){if(e.flags|=128,n=!0,i=t.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),Pl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Fe)return Vt(e),null}else 2*nt()-s.renderingStartTime>Za&&i!==1073741824&&(e.flags|=128,n=!0,Pl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(i=s.last,i!==null?i.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=nt(),e.sibling=null,i=$e.current,Te($e,n?i&1|2:i&1),e):(Vt(e),null);case 22:case 23:return Zx(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?Ti&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function zC(t,e){switch(Tx(e),e.tag){case 1:return gi(e.type)&&Th(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ga(),Ae(mi),Ae(Zt),Ox(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lx(e),null;case 13:if(Ae($e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));Ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae($e),null;case 4:return Ga(),null;case 10:return Mx(e.type._context),null;case 22:case 23:return Zx(),null;case 24:return null;default:return null}}var Ud=!1,Ht=!1,FC=typeof WeakSet=="function"?WeakSet:Set,Y=null;function xa(t,e){var i=t.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(n){Xe(t,e,n)}else i.current=null}function Nm(t,e,i){try{i()}catch(n){Xe(t,e,n)}}var fy=!1;function RC(t,e){if(Dm=Sh,t=Gk(),Cx(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var r=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{i.nodeType,s.nodeType}catch{i=null;break e}var o=0,l=-1,c=-1,d=0,u=0,p=t,f=null;t:for(;;){for(var g;p!==i||r!==0&&p.nodeType!==3||(l=o+r),p!==s||n!==0&&p.nodeType!==3||(c=o+n),p.nodeType===3&&(o+=p.nodeValue.length),(g=p.firstChild)!==null;)f=p,p=g;for(;;){if(p===t)break t;if(f===i&&++d===r&&(l=o),f===s&&++u===n&&(c=o),(g=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=g}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Sm={focusedElem:t,selectionRange:i},Sh=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,S=v.memoizedState,j=e.stateNode,b=j.getSnapshotBeforeUpdate(e.elementType===e.type?w:yn(e.type,w),S);j.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(h){Xe(e,e.return,h)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return v=fy,fy=!1,v}function cc(t,e,i){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Nm(e,i,s)}r=r.next}while(r!==n)}}function Ip(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var i=e=e.next;do{if((i.tag&t)===t){var n=i.create;i.destroy=n()}i=i.next}while(i!==e)}}function Vm(t){var e=t.ref;if(e!==null){var i=t.stateNode;switch(t.tag){case 5:t=i;break;default:t=i}typeof e=="function"?e(t):e.current=t}}function Wj(t){var e=t.alternate;e!==null&&(t.alternate=null,Wj(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[Uc],delete e[Pm],delete e[wC],delete e[yC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Uj(t){return t.tag===5||t.tag===3||t.tag===4}function my(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Uj(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wm(t,e,i){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?i.nodeType===8?i.parentNode.insertBefore(t,e):i.insertBefore(t,e):(i.nodeType===8?(e=i.parentNode,e.insertBefore(t,i)):(e=i,e.appendChild(t)),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=Ph));else if(n!==4&&(t=t.child,t!==null))for(Wm(t,e,i),t=t.sibling;t!==null;)Wm(t,e,i),t=t.sibling}function Um(t,e,i){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?i.insertBefore(t,e):i.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(Um(t,e,i),t=t.sibling;t!==null;)Um(t,e,i),t=t.sibling}var At=null,vn=!1;function Mr(t,e,i){for(i=i.child;i!==null;)Hj(t,e,i),i=i.sibling}function Hj(t,e,i){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(jp,i)}catch{}switch(i.tag){case 5:Ht||xa(i,e);case 6:var n=At,r=vn;At=null,Mr(t,e,i),At=n,vn=r,At!==null&&(vn?(t=At,i=i.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)):At.removeChild(i.stateNode));break;case 18:At!==null&&(vn?(t=At,i=i.stateNode,t.nodeType===8?Df(t.parentNode,i):t.nodeType===1&&Df(t,i),$c(t)):Df(At,i.stateNode));break;case 4:n=At,r=vn,At=i.stateNode.containerInfo,vn=!0,Mr(t,e,i),At=n,vn=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(n=i.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){r=n=n.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Nm(i,e,o),r=r.next}while(r!==n)}Mr(t,e,i);break;case 1:if(!Ht&&(xa(i,e),n=i.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=i.memoizedProps,n.state=i.memoizedState,n.componentWillUnmount()}catch(l){Xe(i,e,l)}Mr(t,e,i);break;case 21:Mr(t,e,i);break;case 22:i.mode&1?(Ht=(n=Ht)||i.memoizedState!==null,Mr(t,e,i),Ht=n):Mr(t,e,i);break;default:Mr(t,e,i)}}function gy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var i=t.stateNode;i===null&&(i=t.stateNode=new FC),e.forEach(function(n){var r=HC.bind(null,t,n);i.has(n)||(i.add(n),n.then(r,r))})}}function gn(t,e){var i=e.deletions;if(i!==null)for(var n=0;n<i.length;n++){var r=i[n];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:At=l.stateNode,vn=!1;break e;case 3:At=l.stateNode.containerInfo,vn=!0;break e;case 4:At=l.stateNode.containerInfo,vn=!0;break e}l=l.return}if(At===null)throw Error(N(160));Hj(s,o,r),At=null,vn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(d){Xe(r,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yj(e,t),e=e.sibling}function Yj(t,e){var i=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(gn(e,t),An(t),n&4){try{cc(3,t,t.return),Ip(3,t)}catch(w){Xe(t,t.return,w)}try{cc(5,t,t.return)}catch(w){Xe(t,t.return,w)}}break;case 1:gn(e,t),An(t),n&512&&i!==null&&xa(i,i.return);break;case 5:if(gn(e,t),An(t),n&512&&i!==null&&xa(i,i.return),t.flags&32){var r=t.stateNode;try{Fc(r,"")}catch(w){Xe(t,t.return,w)}}if(n&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=i!==null?i.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&fk(r,s),fm(l,o);var d=fm(l,s);for(o=0;o<c.length;o+=2){var u=c[o],p=c[o+1];u==="style"?yk(r,p):u==="dangerouslySetInnerHTML"?xk(r,p):u==="children"?Fc(r,p):fx(r,u,p,d)}switch(l){case"input":cm(r,s);break;case"textarea":mk(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Pa(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Pa(r,!!s.multiple,s.defaultValue,!0):Pa(r,!!s.multiple,s.multiple?[]:"",!1))}r[Uc]=s}catch(w){Xe(t,t.return,w)}}break;case 6:if(gn(e,t),An(t),n&4){if(t.stateNode===null)throw Error(N(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(w){Xe(t,t.return,w)}}break;case 3:if(gn(e,t),An(t),n&4&&i!==null&&i.memoizedState.isDehydrated)try{$c(e.containerInfo)}catch(w){Xe(t,t.return,w)}break;case 4:gn(e,t),An(t);break;case 13:gn(e,t),An(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Gx=nt())),n&4&&gy(t);break;case 22:if(u=i!==null&&i.memoizedState!==null,t.mode&1?(Ht=(d=Ht)||u,gn(e,t),Ht=d):gn(e,t),An(t),n&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!u&&t.mode&1)for(Y=t,u=t.child;u!==null;){for(p=Y=u;Y!==null;){switch(f=Y,g=f.child,f.tag){case 0:case 11:case 14:case 15:cc(4,f,f.return);break;case 1:xa(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){n=f,i=f.return;try{e=n,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){Xe(n,i,w)}}break;case 5:xa(f,f.return);break;case 22:if(f.memoizedState!==null){wy(p);continue}}g!==null?(g.return=f,Y=g):wy(p)}u=u.sibling}e:for(u=null,p=t;;){if(p.tag===5){if(u===null){u=p;try{r=p.stateNode,d?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=wk("display",o))}catch(w){Xe(t,t.return,w)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(w){Xe(t,t.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:gn(e,t),An(t),n&4&&gy(t);break;case 21:break;default:gn(e,t),An(t)}}function An(t){var e=t.flags;if(e&2){try{e:{for(var i=t.return;i!==null;){if(Uj(i)){var n=i;break e}i=i.return}throw Error(N(160))}switch(n.tag){case 5:var r=n.stateNode;n.flags&32&&(Fc(r,""),n.flags&=-33);var s=my(t);Um(t,s,r);break;case 3:case 4:var o=n.stateNode.containerInfo,l=my(t);Wm(t,l,o);break;default:throw Error(N(161))}}catch(c){Xe(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function LC(t,e,i){Y=t,Gj(t)}function Gj(t,e,i){for(var n=(t.mode&1)!==0;Y!==null;){var r=Y,s=r.child;if(r.tag===22&&n){var o=r.memoizedState!==null||Ud;if(!o){var l=r.alternate,c=l!==null&&l.memoizedState!==null||Ht;l=Ud;var d=Ht;if(Ud=o,(Ht=c)&&!d)for(Y=r;Y!==null;)o=Y,c=o.child,o.tag===22&&o.memoizedState!==null?yy(r):c!==null?(c.return=o,Y=c):yy(r);for(;s!==null;)Y=s,Gj(s),s=s.sibling;Y=r,Ud=l,Ht=d}xy(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Y=s):xy(t)}}function xy(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var i=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||Ip(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!Ht)if(i===null)n.componentDidMount();else{var r=e.elementType===e.type?i.memoizedProps:yn(e.type,i.memoizedProps);n.componentDidUpdate(r,i.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ty(e,s,n);break;case 3:var o=e.updateQueue;if(o!==null){if(i=null,e.child!==null)switch(e.child.tag){case 5:i=e.child.stateNode;break;case 1:i=e.child.stateNode}ty(e,o,i)}break;case 5:var l=e.stateNode;if(i===null&&e.flags&4){i=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&i.focus();break;case"img":c.src&&(i.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&$c(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Ht||e.flags&512&&Vm(e)}catch(f){Xe(e,e.return,f)}}if(e===t){Y=null;break}if(i=e.sibling,i!==null){i.return=e.return,Y=i;break}Y=e.return}}function wy(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var i=e.sibling;if(i!==null){i.return=e.return,Y=i;break}Y=e.return}}function yy(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var i=e.return;try{Ip(4,e)}catch(c){Xe(e,i,c)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var r=e.return;try{n.componentDidMount()}catch(c){Xe(e,r,c)}}var s=e.return;try{Vm(e)}catch(c){Xe(e,s,c)}break;case 5:var o=e.return;try{Vm(e)}catch(c){Xe(e,o,c)}}}catch(c){Xe(e,e.return,c)}if(e===t){Y=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Y=l;break}Y=e.return}}var OC=Math.ceil,$h=_r.ReactCurrentDispatcher,Hx=_r.ReactCurrentOwner,on=_r.ReactCurrentBatchConfig,xe=0,Ct=null,ht=null,Ft=0,Ti=0,wa=Cs(0),yt=0,qc=null,Do=0,Ap=0,Yx=0,dc=null,pi=null,Gx=0,Za=1/0,sr=null,Bh=!1,Hm=null,as=null,Hd=!1,Zr=null,Nh=0,uc=0,Ym=null,qu=-1,Qu=0;function ai(){return xe&6?nt():qu!==-1?qu:qu=nt()}function ls(t){return t.mode&1?xe&2&&Ft!==0?Ft&-Ft:bC.transition!==null?(Qu===0&&(Qu=Ik()),Qu):(t=ke,t!==0||(t=window.event,t=t===void 0?16:Ok(t.type)),t):1}function Sn(t,e,i,n){if(50<uc)throw uc=0,Ym=null,Error(N(185));pd(t,i,n),(!(xe&2)||t!==Ct)&&(t===Ct&&(!(xe&2)&&(Ap|=i),yt===4&&Yr(t,Ft)),xi(t,n),i===1&&xe===0&&!(e.mode&1)&&(Za=nt()+500,Pp&&Ps()))}function xi(t,e){var i=t.callbackNode;b_(t,e);var n=Dh(t,t===Ct?Ft:0);if(n===0)i!==null&&Pw(i),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(i!=null&&Pw(i),e===1)t.tag===0?vC(vy.bind(null,t)):nj(vy.bind(null,t)),gC(function(){!(xe&6)&&Ps()}),i=null;else{switch(Ak(n)){case 1:i=yx;break;case 4:i=Tk;break;case 16:i=jh;break;case 536870912:i=Ek;break;default:i=jh}i=tD(i,Xj.bind(null,t))}t.callbackPriority=e,t.callbackNode=i}}function Xj(t,e){if(qu=-1,Qu=0,xe&6)throw Error(N(327));var i=t.callbackNode;if(Ma()&&t.callbackNode!==i)return null;var n=Dh(t,t===Ct?Ft:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Vh(t,n);else{e=n;var r=xe;xe|=2;var s=qj();(Ct!==t||Ft!==e)&&(sr=null,Za=nt()+500,co(t,e));do try{NC();break}catch(l){Zj(t,l)}while(1);Ax(),$h.current=s,xe=r,ht!==null?e=0:(Ct=null,Ft=0,e=yt)}if(e!==0){if(e===2&&(r=ym(t),r!==0&&(n=r,e=Gm(t,r))),e===1)throw i=qc,co(t,0),Yr(t,n),xi(t,nt()),i;if(e===6)Yr(t,n);else{if(r=t.current.alternate,!(n&30)&&!$C(r)&&(e=Vh(t,n),e===2&&(s=ym(t),s!==0&&(n=s,e=Gm(t,s))),e===1))throw i=qc,co(t,0),Yr(t,n),xi(t,nt()),i;switch(t.finishedWork=r,t.finishedLanes=n,e){case 0:case 1:throw Error(N(345));case 2:Gs(t,pi,sr);break;case 3:if(Yr(t,n),(n&130023424)===n&&(e=Gx+500-nt(),10<e)){if(Dh(t,0)!==0)break;if(r=t.suspendedLanes,(r&n)!==n){ai(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Cm(Gs.bind(null,t,pi,sr),e);break}Gs(t,pi,sr);break;case 4:if(Yr(t,n),(n&4194240)===n)break;for(e=t.eventTimes,r=-1;0<n;){var o=31-Dn(n);s=1<<o,o=e[o],o>r&&(r=o),n&=~s}if(n=r,n=nt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*OC(n/1960))-n,10<n){t.timeoutHandle=Cm(Gs.bind(null,t,pi,sr),n);break}Gs(t,pi,sr);break;case 5:Gs(t,pi,sr);break;default:throw Error(N(329))}}}return xi(t,nt()),t.callbackNode===i?Xj.bind(null,t):null}function Gm(t,e){var i=dc;return t.current.memoizedState.isDehydrated&&(co(t,e).flags|=256),t=Vh(t,e),t!==2&&(e=pi,pi=i,e!==null&&Xm(e)),t}function Xm(t){pi===null?pi=t:pi.push.apply(pi,t)}function $C(t){for(var e=t;;){if(e.flags&16384){var i=e.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var n=0;n<i.length;n++){var r=i[n],s=r.getSnapshot;r=r.value;try{if(!Cn(s(),r))return!1}catch{return!1}}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yr(t,e){for(e&=~Yx,e&=~Ap,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var i=31-Dn(e),n=1<<i;t[i]=-1,e&=~n}}function vy(t){if(xe&6)throw Error(N(327));Ma();var e=Dh(t,0);if(!(e&1))return xi(t,nt()),null;var i=Vh(t,e);if(t.tag!==0&&i===2){var n=ym(t);n!==0&&(e=n,i=Gm(t,n))}if(i===1)throw i=qc,co(t,0),Yr(t,e),xi(t,nt()),i;if(i===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Gs(t,pi,sr),xi(t,nt()),null}function Xx(t,e){var i=xe;xe|=1;try{return t(e)}finally{xe=i,xe===0&&(Za=nt()+500,Pp&&Ps())}}function So(t){Zr!==null&&Zr.tag===0&&!(xe&6)&&Ma();var e=xe;xe|=1;var i=on.transition,n=ke;try{if(on.transition=null,ke=1,t)return t()}finally{ke=n,on.transition=i,xe=e,!(xe&6)&&Ps()}}function Zx(){Ti=wa.current,Ae(wa)}function co(t,e){t.finishedWork=null,t.finishedLanes=0;var i=t.timeoutHandle;if(i!==-1&&(t.timeoutHandle=-1,mC(i)),ht!==null)for(i=ht.return;i!==null;){var n=i;switch(Tx(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Th();break;case 3:Ga(),Ae(mi),Ae(Zt),Ox();break;case 5:Lx(n);break;case 4:Ga();break;case 13:Ae($e);break;case 19:Ae($e);break;case 10:Mx(n.type._context);break;case 22:case 23:Zx()}i=i.return}if(Ct=t,ht=t=cs(t.current,null),Ft=Ti=e,yt=0,qc=null,Yx=Ap=Do=0,pi=dc=null,io!==null){for(e=0;e<io.length;e++)if(i=io[e],n=i.interleaved,n!==null){i.interleaved=null;var r=n.next,s=i.pending;if(s!==null){var o=s.next;s.next=r,n.next=o}i.pending=n}io=null}return t}function Zj(t,e){do{var i=ht;try{if(Ax(),Gu.current=Oh,Lh){for(var n=We.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Lh=!1}if(jo=0,Dt=xt=We=null,lc=!1,Gc=0,Hx.current=null,i===null||i.return===null){yt=1,qc=e,ht=null;break}e:{var s=t,o=i.return,l=i,c=e;if(e=Ft,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=l,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=ay(o);if(g!==null){g.flags&=-257,ly(g,o,l,s,e),g.mode&1&&oy(s,d,e),e=g,c=d;var v=e.updateQueue;if(v===null){var w=new Set;w.add(c),e.updateQueue=w}else v.add(c);break e}else{if(!(e&1)){oy(s,d,e),qx();break e}c=Error(N(426))}}else if(Fe&&l.mode&1){var S=ay(o);if(S!==null){!(S.flags&65536)&&(S.flags|=256),ly(S,o,l,s,e),Ex(Xa(c,l));break e}}s=c=Xa(c,l),yt!==4&&(yt=2),dc===null?dc=[s]:dc.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var j=Aj(s,c,e);ey(s,j);break e;case 1:l=c;var b=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof b.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(as===null||!as.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var h=Mj(s,l,e);ey(s,h);break e}}s=s.return}while(s!==null)}Kj(i)}catch(x){e=x,ht===i&&i!==null&&(ht=i=i.return);continue}break}while(1)}function qj(){var t=$h.current;return $h.current=Oh,t===null?Oh:t}function qx(){(yt===0||yt===3||yt===2)&&(yt=4),Ct===null||!(Do&268435455)&&!(Ap&268435455)||Yr(Ct,Ft)}function Vh(t,e){var i=xe;xe|=2;var n=qj();(Ct!==t||Ft!==e)&&(sr=null,co(t,e));do try{BC();break}catch(r){Zj(t,r)}while(1);if(Ax(),xe=i,$h.current=n,ht!==null)throw Error(N(261));return Ct=null,Ft=0,yt}function BC(){for(;ht!==null;)Qj(ht)}function NC(){for(;ht!==null&&!h_();)Qj(ht)}function Qj(t){var e=eD(t.alternate,t,Ti);t.memoizedProps=t.pendingProps,e===null?Kj(t):ht=e,Hx.current=null}function Kj(t){var e=t;do{var i=e.alternate;if(t=e.return,e.flags&32768){if(i=zC(i,e),i!==null){i.flags&=32767,ht=i;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{yt=6,ht=null;return}}else if(i=MC(i,e,Ti),i!==null){ht=i;return}if(e=e.sibling,e!==null){ht=e;return}ht=e=t}while(e!==null);yt===0&&(yt=5)}function Gs(t,e,i){var n=ke,r=on.transition;try{on.transition=null,ke=1,VC(t,e,i,n)}finally{on.transition=r,ke=n}return null}function VC(t,e,i,n){do Ma();while(Zr!==null);if(xe&6)throw Error(N(327));i=t.finishedWork;var r=t.finishedLanes;if(i===null)return null;if(t.finishedWork=null,t.finishedLanes=0,i===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var s=i.lanes|i.childLanes;if(k_(t,s),t===Ct&&(ht=Ct=null,Ft=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||Hd||(Hd=!0,tD(jh,function(){return Ma(),null})),s=(i.flags&15990)!==0,i.subtreeFlags&15990||s){s=on.transition,on.transition=null;var o=ke;ke=1;var l=xe;xe|=4,Hx.current=null,RC(t,i),Yj(i,t),lC(Sm),Sh=!!Dm,Sm=Dm=null,t.current=i,LC(i),p_(),xe=l,ke=o,on.transition=s}else t.current=i;if(Hd&&(Hd=!1,Zr=t,Nh=r),s=t.pendingLanes,s===0&&(as=null),g_(i.stateNode),xi(t,nt()),e!==null)for(n=t.onRecoverableError,i=0;i<e.length;i++)r=e[i],n(r.value,{componentStack:r.stack,digest:r.digest});if(Bh)throw Bh=!1,t=Hm,Hm=null,t;return Nh&1&&t.tag!==0&&Ma(),s=t.pendingLanes,s&1?t===Ym?uc++:(uc=0,Ym=t):uc=0,Ps(),null}function Ma(){if(Zr!==null){var t=Ak(Nh),e=on.transition,i=ke;try{if(on.transition=null,ke=16>t?16:t,Zr===null)var n=!1;else{if(t=Zr,Zr=null,Nh=0,xe&6)throw Error(N(331));var r=xe;for(xe|=4,Y=t.current;Y!==null;){var s=Y,o=s.child;if(Y.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(Y=d;Y!==null;){var u=Y;switch(u.tag){case 0:case 11:case 15:cc(8,u,s)}var p=u.child;if(p!==null)p.return=u,Y=p;else for(;Y!==null;){u=Y;var f=u.sibling,g=u.return;if(Wj(u),u===d){Y=null;break}if(f!==null){f.return=g,Y=f;break}Y=g}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}Y=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Y=o;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:cc(9,s,s.return)}var j=s.sibling;if(j!==null){j.return=s.return,Y=j;break e}Y=s.return}}var b=t.current;for(Y=b;Y!==null;){o=Y;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Y=y;else e:for(o=b;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ip(9,l)}}catch(x){Xe(l,l.return,x)}if(l===o){Y=null;break e}var h=l.sibling;if(h!==null){h.return=l.return,Y=h;break e}Y=l.return}}if(xe=r,Ps(),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(jp,t)}catch{}n=!0}return n}finally{ke=i,on.transition=e}}return!1}function by(t,e,i){e=Xa(i,e),e=Aj(t,e,1),t=os(t,e,1),e=ai(),t!==null&&(pd(t,1,e),xi(t,e))}function Xe(t,e,i){if(t.tag===3)by(t,t,i);else for(;e!==null;){if(e.tag===3){by(e,t,i);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(as===null||!as.has(n))){t=Xa(i,t),t=Mj(e,t,1),e=os(e,t,1),t=ai(),e!==null&&(pd(e,1,t),xi(e,t));break}}e=e.return}}function WC(t,e,i){var n=t.pingCache;n!==null&&n.delete(e),e=ai(),t.pingedLanes|=t.suspendedLanes&i,Ct===t&&(Ft&i)===i&&(yt===4||yt===3&&(Ft&130023424)===Ft&&500>nt()-Gx?co(t,0):Yx|=i),xi(t,e)}function Jj(t,e){e===0&&(t.mode&1?(e=Fd,Fd<<=1,!(Fd&130023424)&&(Fd=4194304)):e=1);var i=ai();t=kr(t,e),t!==null&&(pd(t,e,i),xi(t,i))}function UC(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),Jj(t,i)}function HC(t,e){var i=0;switch(t.tag){case 13:var n=t.stateNode,r=t.memoizedState;r!==null&&(i=r.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(N(314))}n!==null&&n.delete(e),Jj(t,i)}var eD;eD=function(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps||mi.current)fi=!0;else{if(!(t.lanes&i)&&!(e.flags&128))return fi=!1,AC(t,e,i);fi=!!(t.flags&131072)}else fi=!1,Fe&&e.flags&1048576&&rj(e,Ah,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;Zu(t,e),t=e.pendingProps;var r=Ua(e,Zt.current);Aa(e,i),r=Bx(null,e,n,t,r,i);var s=Nx();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gi(n)?(s=!0,Eh(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Fx(e),r.updater=Ep,e.stateNode=r,r._reactInternals=e,zm(e,n,t,i),e=Lm(null,e,n,!0,s,i)):(e.tag=0,Fe&&s&&Px(e),ii(null,e,r,i),e=e.child),e;case 16:n=e.elementType;e:{switch(Zu(t,e),t=e.pendingProps,r=n._init,n=r(n._payload),e.type=n,r=e.tag=GC(n),t=yn(n,t),r){case 0:e=Rm(null,e,n,t,i);break e;case 1:e=uy(null,e,n,t,i);break e;case 11:e=cy(null,e,n,t,i);break e;case 14:e=dy(null,e,n,yn(n.type,t),i);break e}throw Error(N(306,n,""))}return e;case 0:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:yn(n,r),Rm(t,e,n,r,i);case 1:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:yn(n,r),uy(t,e,n,r,i);case 3:e:{if(Lj(e),t===null)throw Error(N(387));n=e.pendingProps,s=e.memoizedState,r=s.element,dj(t,e),Fh(e,n,null,i);var o=e.memoizedState;if(n=o.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Xa(Error(N(423)),e),e=hy(t,e,n,i,r);break e}else if(n!==r){r=Xa(Error(N(424)),e),e=hy(t,e,n,i,r);break e}else for(Fi=ss(e.stateNode.containerInfo.firstChild),Li=e,Fe=!0,bn=null,i=lj(e,null,n,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Ha(),n===r){e=jr(t,e,i);break e}ii(t,e,n,i)}e=e.child}return e;case 5:return uj(e),t===null&&Im(e),n=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,_m(n,r)?o=null:s!==null&&_m(n,s)&&(e.flags|=32),Rj(t,e),ii(t,e,o,i),e.child;case 6:return t===null&&Im(e),null;case 13:return Oj(t,e,i);case 4:return Rx(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Ya(e,null,n,i):ii(t,e,n,i),e.child;case 11:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:yn(n,r),cy(t,e,n,r,i);case 7:return ii(t,e,e.pendingProps,i),e.child;case 8:return ii(t,e,e.pendingProps.children,i),e.child;case 12:return ii(t,e,e.pendingProps.children,i),e.child;case 10:e:{if(n=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Te(Mh,n._currentValue),n._currentValue=o,s!==null)if(Cn(s.value,o)){if(s.children===r.children&&!mi.current){e=jr(t,e,i);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(s.tag===1){c=gr(-1,i&-i),c.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}s.lanes|=i,c=s.alternate,c!==null&&(c.lanes|=i),Am(s.return,i,e),l.lanes|=i;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=i,l=o.alternate,l!==null&&(l.lanes|=i),Am(o,i,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ii(t,e,r.children,i),e=e.child}return e;case 9:return r=e.type,n=e.pendingProps.children,Aa(e,i),r=ln(r),n=n(r),e.flags|=1,ii(t,e,n,i),e.child;case 14:return n=e.type,r=yn(n,e.pendingProps),r=yn(n.type,r),dy(t,e,n,r,i);case 15:return zj(t,e,e.type,e.pendingProps,i);case 17:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:yn(n,r),Zu(t,e),e.tag=1,gi(n)?(t=!0,Eh(e)):t=!1,Aa(e,i),Ij(e,n,r),zm(e,n,r,i),Lm(null,e,n,!0,t,i);case 19:return $j(t,e,i);case 22:return Fj(t,e,i)}throw Error(N(156,e.tag))};function tD(t,e){return Pk(t,e)}function YC(t,e,i,n){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(t,e,i,n){return new YC(t,e,i,n)}function Qx(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GC(t){if(typeof t=="function")return Qx(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gx)return 11;if(t===xx)return 14}return 2}function cs(t,e){var i=t.alternate;return i===null?(i=tn(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&14680064,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i}function Ku(t,e,i,n,r,s){var o=2;if(n=t,typeof t=="function")Qx(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case la:return uo(i.children,r,s,e);case mx:o=8,r|=8;break;case rm:return t=tn(12,i,e,r|2),t.elementType=rm,t.lanes=s,t;case sm:return t=tn(13,i,e,r),t.elementType=sm,t.lanes=s,t;case om:return t=tn(19,i,e,r),t.elementType=om,t.lanes=s,t;case uk:return Mp(i,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ck:o=10;break e;case dk:o=9;break e;case gx:o=11;break e;case xx:o=14;break e;case Vr:o=16,n=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=tn(o,i,e,r),e.elementType=t,e.type=n,e.lanes=s,e}function uo(t,e,i,n){return t=tn(7,t,n,e),t.lanes=i,t}function Mp(t,e,i,n){return t=tn(22,t,n,e),t.elementType=uk,t.lanes=i,t.stateNode={isHidden:!1},t}function Af(t,e,i){return t=tn(6,t,null,e),t.lanes=i,t}function Mf(t,e,i){return e=tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function XC(t,e,i,n,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pf(0),this.expirationTimes=pf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pf(0),this.identifierPrefix=n,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Kx(t,e,i,n,r,s,o,l,c){return t=new XC(t,e,i,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:n,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fx(s),t}function ZC(t,e,i){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:aa,key:n==null?null:""+n,children:t,containerInfo:e,implementation:i}}function iD(t){if(!t)return vs;t=t._reactInternals;e:{if(Mo(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var i=t.type;if(gi(i))return ij(t,i,e)}return e}function nD(t,e,i,n,r,s,o,l,c){return t=Kx(i,n,!0,t,r,s,o,l,c),t.context=iD(null),i=t.current,n=ai(),r=ls(i),s=gr(n,r),s.callback=e??null,os(i,s,r),t.current.lanes=r,pd(t,r,n),xi(t,n),t}function zp(t,e,i,n){var r=e.current,s=ai(),o=ls(r);return i=iD(i),e.context===null?e.context=i:e.pendingContext=i,e=gr(s,o),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=os(r,e,o),t!==null&&(Sn(t,r,o,s),Yu(t,r,o)),o}function Wh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ky(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Jx(t,e){ky(t,e),(t=t.alternate)&&ky(t,e)}function qC(){return null}var rD=typeof reportError=="function"?reportError:function(t){console.error(t)};function e1(t){this._internalRoot=t}Fp.prototype.render=e1.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));zp(t,e,null,null)};Fp.prototype.unmount=e1.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;So(function(){zp(null,t,null,null)}),e[br]=null}};function Fp(t){this._internalRoot=t}Fp.prototype.unstable_scheduleHydration=function(t){if(t){var e=Fk();t={blockedOn:null,target:t,priority:e};for(var i=0;i<Hr.length&&e!==0&&e<Hr[i].priority;i++);Hr.splice(i,0,t),i===0&&Lk(t)}};function t1(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function jy(){}function QC(t,e,i,n,r){if(r){if(typeof n=="function"){var s=n;n=function(){var d=Wh(o);s.call(d)}}var o=nD(e,n,t,0,null,!1,!1,"",jy);return t._reactRootContainer=o,t[br]=o.current,Vc(t.nodeType===8?t.parentNode:t),So(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof n=="function"){var l=n;n=function(){var d=Wh(c);l.call(d)}}var c=Kx(t,0,!1,null,null,!1,!1,"",jy);return t._reactRootContainer=c,t[br]=c.current,Vc(t.nodeType===8?t.parentNode:t),So(function(){zp(e,c,i,n)}),c}function Lp(t,e,i,n,r){var s=i._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var l=r;r=function(){var c=Wh(o);l.call(c)}}zp(e,o,t,r)}else o=QC(i,e,t,r,n);return Wh(o)}Mk=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var i=Hl(e.pendingLanes);i!==0&&(vx(e,i|1),xi(e,nt()),!(xe&6)&&(Za=nt()+500,Ps()))}break;case 13:So(function(){var n=kr(t,1);if(n!==null){var r=ai();Sn(n,t,1,r)}}),Jx(t,1)}};bx=function(t){if(t.tag===13){var e=kr(t,134217728);if(e!==null){var i=ai();Sn(e,t,134217728,i)}Jx(t,134217728)}};zk=function(t){if(t.tag===13){var e=ls(t),i=kr(t,e);if(i!==null){var n=ai();Sn(i,t,e,n)}Jx(t,e)}};Fk=function(){return ke};Rk=function(t,e){var i=ke;try{return ke=t,e()}finally{ke=i}};gm=function(t,e,i){switch(e){case"input":if(cm(t,i),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<i.length;e++){var n=i[e];if(n!==t&&n.form===t.form){var r=Cp(n);if(!r)throw Error(N(90));pk(n),cm(n,r)}}}break;case"textarea":mk(t,i);break;case"select":e=i.value,e!=null&&Pa(t,!!i.multiple,e,!1)}};kk=Xx;jk=So;var KC={usingClientEntryPoint:!1,Events:[md,ha,Cp,vk,bk,Xx]},Tl={findFiberByHostInstance:to,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JC={bundleType:Tl.bundleType,version:Tl.version,rendererPackageName:Tl.rendererPackageName,rendererConfig:Tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_r.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_k(t),t===null?null:t.stateNode},findFiberByHostInstance:Tl.findFiberByHostInstance||qC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yd.isDisabled&&Yd.supportsFiber)try{jp=Yd.inject(JC),Wn=Yd}catch{}}Wi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KC;Wi.createPortal=function(t,e){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t1(e))throw Error(N(200));return ZC(t,e,null,i)};Wi.createRoot=function(t,e){if(!t1(t))throw Error(N(299));var i=!1,n="",r=rD;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Kx(t,1,!1,null,null,i,!1,n,r),t[br]=e.current,Vc(t.nodeType===8?t.parentNode:t),new e1(e)};Wi.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=_k(e),t=t===null?null:t.stateNode,t};Wi.flushSync=function(t){return So(t)};Wi.hydrate=function(t,e,i){if(!Rp(e))throw Error(N(200));return Lp(null,t,e,!0,i)};Wi.hydrateRoot=function(t,e,i){if(!t1(t))throw Error(N(405));var n=i!=null&&i.hydratedSources||null,r=!1,s="",o=rD;if(i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(s=i.identifierPrefix),i.onRecoverableError!==void 0&&(o=i.onRecoverableError)),e=nD(e,null,t,1,i??null,r,!1,s,o),t[br]=e.current,Vc(t),n)for(t=0;t<n.length;t++)i=n[t],r=i._getVersion,r=r(i._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[i,r]:e.mutableSourceEagerHydrationData.push(i,r);return new Fp(e)};Wi.render=function(t,e,i){if(!Rp(e))throw Error(N(200));return Lp(null,t,e,!1,i)};Wi.unmountComponentAtNode=function(t){if(!Rp(t))throw Error(N(40));return t._reactRootContainer?(So(function(){Lp(null,null,t,!1,function(){t._reactRootContainer=null,t[br]=null})}),!0):!1};Wi.unstable_batchedUpdates=Xx;Wi.unstable_renderSubtreeIntoContainer=function(t,e,i,n){if(!Rp(i))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return Lp(t,e,i,!1,n)};Wi.version="18.3.1-next-f1338f8080-20240426";function sD(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sD)}catch(t){console.error(t)}}sD(),sk.exports=Wi;var e8=sk.exports,Dy=e8;im.createRoot=Dy.createRoot,im.hydrateRoot=Dy.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qc(){return Qc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Qc.apply(this,arguments)}var qr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(qr||(qr={}));const Sy="popstate";function t8(t){t===void 0&&(t={});function e(n,r){let{pathname:s,search:o,hash:l}=n.location;return Zm("",{pathname:s,search:o,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function i(n,r){return typeof r=="string"?r:Uh(r)}return n8(e,i,null,t)}function pt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function oD(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function i8(){return Math.random().toString(36).substr(2,8)}function _y(t,e){return{usr:t.state,key:t.key,idx:e}}function Zm(t,e,i,n){return i===void 0&&(i=null),Qc({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?fl(e):e,{state:i,key:e&&e.key||n||i8()})}function Uh(t){let{pathname:e="/",search:i="",hash:n=""}=t;return i&&i!=="?"&&(e+=i.charAt(0)==="?"?i:"?"+i),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function fl(t){let e={};if(t){let i=t.indexOf("#");i>=0&&(e.hash=t.substr(i),t=t.substr(0,i));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function n8(t,e,i,n){n===void 0&&(n={});let{window:r=document.defaultView,v5Compat:s=!1}=n,o=r.history,l=qr.Pop,c=null,d=u();d==null&&(d=0,o.replaceState(Qc({},o.state,{idx:d}),""));function u(){return(o.state||{idx:null}).idx}function p(){l=qr.Pop;let S=u(),j=S==null?null:S-d;d=S,c&&c({action:l,location:w.location,delta:j})}function f(S,j){l=qr.Push;let b=Zm(w.location,S,j);i&&i(b,S),d=u()+1;let y=_y(b,d),h=w.createHref(b);try{o.pushState(y,"",h)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;r.location.assign(h)}s&&c&&c({action:l,location:w.location,delta:1})}function g(S,j){l=qr.Replace;let b=Zm(w.location,S,j);i&&i(b,S),d=u();let y=_y(b,d),h=w.createHref(b);o.replaceState(y,"",h),s&&c&&c({action:l,location:w.location,delta:0})}function v(S){let j=r.location.origin!=="null"?r.location.origin:r.location.href,b=typeof S=="string"?S:Uh(S);return b=b.replace(/ $/,"%20"),pt(j,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,j)}let w={get action(){return l},get location(){return t(r,o)},listen(S){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(Sy,p),c=S,()=>{r.removeEventListener(Sy,p),c=null}},createHref(S){return e(r,S)},createURL:v,encodeLocation(S){let j=v(S);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:f,replace:g,go(S){return o.go(S)}};return w}var Cy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Cy||(Cy={}));function r8(t,e,i){return i===void 0&&(i="/"),s8(t,e,i,!1)}function s8(t,e,i,n){let r=typeof e=="string"?fl(e):e,s=i1(r.pathname||"/",i);if(s==null)return null;let o=aD(t);o8(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let d=x8(s);l=m8(o[c],d,n)}return l}function aD(t,e,i,n){e===void 0&&(e=[]),i===void 0&&(i=[]),n===void 0&&(n="");let r=(s,o,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(pt(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let d=ds([n,c.relativePath]),u=i.concat(c);s.children&&s.children.length>0&&(pt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),aD(s.children,e,u,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:p8(d,s.index),routesMeta:u})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))r(s,o);else for(let c of lD(s.path))r(s,o,c)}),e}function lD(t){let e=t.split("/");if(e.length===0)return[];let[i,...n]=e,r=i.endsWith("?"),s=i.replace(/\?$/,"");if(n.length===0)return r?[s,""]:[s];let o=lD(n.join("/")),l=[];return l.push(...o.map(c=>c===""?s:[s,c].join("/"))),r&&l.push(...o),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function o8(t){t.sort((e,i)=>e.score!==i.score?i.score-e.score:f8(e.routesMeta.map(n=>n.childrenIndex),i.routesMeta.map(n=>n.childrenIndex)))}const a8=/^:[\w-]+$/,l8=3,c8=2,d8=1,u8=10,h8=-2,Py=t=>t==="*";function p8(t,e){let i=t.split("/"),n=i.length;return i.some(Py)&&(n+=h8),e&&(n+=c8),i.filter(r=>!Py(r)).reduce((r,s)=>r+(a8.test(s)?l8:s===""?d8:u8),n)}function f8(t,e){return t.length===e.length&&t.slice(0,-1).every((n,r)=>n===e[r])?t[t.length-1]-e[e.length-1]:0}function m8(t,e,i){i===void 0&&(i=!1);let{routesMeta:n}=t,r={},s="/",o=[];for(let l=0;l<n.length;++l){let c=n[l],d=l===n.length-1,u=s==="/"?e:e.slice(s.length)||"/",p=Ty({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},u),f=c.route;if(!p&&d&&i&&!n[n.length-1].route.index&&(p=Ty({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},u)),!p)return null;Object.assign(r,p.params),o.push({params:r,pathname:ds([s,p.pathname]),pathnameBase:b8(ds([s,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(s=ds([s,p.pathnameBase]))}return o}function Ty(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,n]=g8(t.path,t.caseSensitive,t.end),r=e.match(i);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:n.reduce((d,u,p)=>{let{paramName:f,isOptional:g}=u;if(f==="*"){let w=l[p]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const v=l[p];return g&&!v?d[f]=void 0:d[f]=(v||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:o,pattern:t}}function g8(t,e,i){e===void 0&&(e=!1),i===void 0&&(i=!0),oD(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let n=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(n.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(n.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),n]}function x8(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return oD(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function i1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,n=t.charAt(i);return n&&n!=="/"?null:t.slice(i)||"/"}function w8(t,e){e===void 0&&(e="/");let{pathname:i,search:n="",hash:r=""}=typeof t=="string"?fl(t):t;return{pathname:i?i.startsWith("/")?i:y8(i,e):e,search:k8(n),hash:j8(r)}}function y8(t,e){let i=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?i.length>1&&i.pop():r!=="."&&i.push(r)}),i.length>1?i.join("/"):"/"}function zf(t,e,i,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function v8(t){return t.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function cD(t,e){let i=v8(t);return e?i.map((n,r)=>r===i.length-1?n.pathname:n.pathnameBase):i.map(n=>n.pathnameBase)}function dD(t,e,i,n){n===void 0&&(n=!1);let r;typeof t=="string"?r=fl(t):(r=Qc({},t),pt(!r.pathname||!r.pathname.includes("?"),zf("?","pathname","search",r)),pt(!r.pathname||!r.pathname.includes("#"),zf("#","pathname","hash",r)),pt(!r.search||!r.search.includes("#"),zf("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,l;if(o==null)l=i;else{let p=e.length-1;if(!n&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),p-=1;r.pathname=f.join("/")}l=p>=0?e[p]:"/"}let c=w8(r,l),d=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&i.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const ds=t=>t.join("/").replace(/\/\/+/g,"/"),b8=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),k8=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,j8=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function D8(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const uD=["post","put","patch","delete"];new Set(uD);const S8=["get",...uD];new Set(S8);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kc(){return Kc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Kc.apply(this,arguments)}const n1=T.createContext(null),_8=T.createContext(null),zo=T.createContext(null),Op=T.createContext(null),Fo=T.createContext({outlet:null,matches:[],isDataRoute:!1}),hD=T.createContext(null);function C8(t,e){let{relative:i}=e===void 0?{}:e;xd()||pt(!1);let{basename:n,navigator:r}=T.useContext(zo),{hash:s,pathname:o,search:l}=mD(t,{relative:i}),c=o;return n!=="/"&&(c=o==="/"?n:ds([n,o])),r.createHref({pathname:c,search:l,hash:s})}function xd(){return T.useContext(Op)!=null}function wd(){return xd()||pt(!1),T.useContext(Op).location}function pD(t){T.useContext(zo).static||T.useLayoutEffect(t)}function fD(){let{isDataRoute:t}=T.useContext(Fo);return t?B8():P8()}function P8(){xd()||pt(!1);let t=T.useContext(n1),{basename:e,future:i,navigator:n}=T.useContext(zo),{matches:r}=T.useContext(Fo),{pathname:s}=wd(),o=JSON.stringify(cD(r,i.v7_relativeSplatPath)),l=T.useRef(!1);return pD(()=>{l.current=!0}),T.useCallback(function(d,u){if(u===void 0&&(u={}),!l.current)return;if(typeof d=="number"){n.go(d);return}let p=dD(d,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:ds([e,p.pathname])),(u.replace?n.replace:n.push)(p,u.state,u)},[e,n,o,s,t])}function mD(t,e){let{relative:i}=e===void 0?{}:e,{future:n}=T.useContext(zo),{matches:r}=T.useContext(Fo),{pathname:s}=wd(),o=JSON.stringify(cD(r,n.v7_relativeSplatPath));return T.useMemo(()=>dD(t,JSON.parse(o),s,i==="path"),[t,o,s,i])}function T8(t,e){return E8(t,e)}function E8(t,e,i,n){xd()||pt(!1);let{navigator:r}=T.useContext(zo),{matches:s}=T.useContext(Fo),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=wd(),u;if(e){var p;let S=typeof e=="string"?fl(e):e;c==="/"||(p=S.pathname)!=null&&p.startsWith(c)||pt(!1),u=S}else u=d;let f=u.pathname||"/",g=f;if(c!=="/"){let S=c.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(S.length).join("/")}let v=r8(t,{pathname:g}),w=F8(v&&v.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:ds([c,r.encodeLocation?r.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:ds([c,r.encodeLocation?r.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,i,n);return e&&w?T.createElement(Op.Provider,{value:{location:Kc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:qr.Pop}},w):w}function I8(){let t=$8(),e=D8(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),i?T.createElement("pre",{style:r},i):null,s)}const A8=T.createElement(I8,null);class M8 extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,i){return i.location!==e.location||i.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:i.error,location:i.location,revalidation:e.revalidation||i.revalidation}}componentDidCatch(e,i){console.error("React Router caught the following error during render",e,i)}render(){return this.state.error!==void 0?T.createElement(Fo.Provider,{value:this.props.routeContext},T.createElement(hD.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function z8(t){let{routeContext:e,match:i,children:n}=t,r=T.useContext(n1);return r&&r.static&&r.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=i.route.id),T.createElement(Fo.Provider,{value:e},n)}function F8(t,e,i,n){var r;if(e===void 0&&(e=[]),i===void 0&&(i=null),n===void 0&&(n=null),t==null){var s;if(!i)return null;if(i.errors)t=i.matches;else if((s=n)!=null&&s.v7_partialHydration&&e.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let o=t,l=(r=i)==null?void 0:r.errors;if(l!=null){let u=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);u>=0||pt(!1),o=o.slice(0,Math.min(o.length,u+1))}let c=!1,d=-1;if(i&&n&&n.v7_partialHydration)for(let u=0;u<o.length;u++){let p=o[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:f,errors:g}=i,v=p.route.loader&&f[p.route.id]===void 0&&(!g||g[p.route.id]===void 0);if(p.route.lazy||v){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((u,p,f)=>{let g,v=!1,w=null,S=null;i&&(g=l&&p.route.id?l[p.route.id]:void 0,w=p.route.errorElement||A8,c&&(d<0&&f===0?(N8("route-fallback",!1),v=!0,S=null):d===f&&(v=!0,S=p.route.hydrateFallbackElement||null)));let j=e.concat(o.slice(0,f+1)),b=()=>{let y;return g?y=w:v?y=S:p.route.Component?y=T.createElement(p.route.Component,null):p.route.element?y=p.route.element:y=u,T.createElement(z8,{match:p,routeContext:{outlet:u,matches:j,isDataRoute:i!=null},children:y})};return i&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?T.createElement(M8,{location:i.location,revalidation:i.revalidation,component:w,error:g,children:b(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):b()},null)}var gD=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(gD||{}),Hh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Hh||{});function R8(t){let e=T.useContext(n1);return e||pt(!1),e}function L8(t){let e=T.useContext(_8);return e||pt(!1),e}function O8(t){let e=T.useContext(Fo);return e||pt(!1),e}function xD(t){let e=O8(),i=e.matches[e.matches.length-1];return i.route.id||pt(!1),i.route.id}function $8(){var t;let e=T.useContext(hD),i=L8(Hh.UseRouteError),n=xD(Hh.UseRouteError);return e!==void 0?e:(t=i.errors)==null?void 0:t[n]}function B8(){let{router:t}=R8(gD.UseNavigateStable),e=xD(Hh.UseNavigateStable),i=T.useRef(!1);return pD(()=>{i.current=!0}),T.useCallback(function(r,s){s===void 0&&(s={}),i.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Kc({fromRouteId:e},s)))},[t,e])}const Ey={};function N8(t,e,i){!e&&!Ey[t]&&(Ey[t]=!0)}function V8(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function Ci(t){pt(!1)}function W8(t){let{basename:e="/",children:i=null,location:n,navigationType:r=qr.Pop,navigator:s,static:o=!1,future:l}=t;xd()&&pt(!1);let c=e.replace(/^\/*/,"/"),d=T.useMemo(()=>({basename:c,navigator:s,static:o,future:Kc({v7_relativeSplatPath:!1},l)}),[c,l,s,o]);typeof n=="string"&&(n=fl(n));let{pathname:u="/",search:p="",hash:f="",state:g=null,key:v="default"}=n,w=T.useMemo(()=>{let S=i1(u,c);return S==null?null:{location:{pathname:S,search:p,hash:f,state:g,key:v},navigationType:r}},[c,u,p,f,g,v,r]);return w==null?null:T.createElement(zo.Provider,{value:d},T.createElement(Op.Provider,{children:i,value:w}))}function U8(t){let{children:e,location:i}=t;return T8(qm(e),i)}new Promise(()=>{});function qm(t,e){e===void 0&&(e=[]);let i=[];return T.Children.forEach(t,(n,r)=>{if(!T.isValidElement(n))return;let s=[...e,r];if(n.type===T.Fragment){i.push.apply(i,qm(n.props.children,s));return}n.type!==Ci&&pt(!1),!n.props.index||!n.props.children||pt(!1);let o={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=qm(n.props.children,s)),i.push(o)}),i}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qm(){return Qm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Qm.apply(this,arguments)}function H8(t,e){if(t==null)return{};var i={},n=Object.keys(t),r,s;for(s=0;s<n.length;s++)r=n[s],!(e.indexOf(r)>=0)&&(i[r]=t[r]);return i}function Y8(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function G8(t,e){return t.button===0&&(!e||e==="_self")&&!Y8(t)}const X8=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Z8="6";try{window.__reactRouterVersion=Z8}catch{}const q8="startTransition",Iy=W4[q8];function Q8(t){let{basename:e,children:i,future:n,window:r}=t,s=T.useRef();s.current==null&&(s.current=t8({window:r,v5Compat:!0}));let o=s.current,[l,c]=T.useState({action:o.action,location:o.location}),{v7_startTransition:d}=n||{},u=T.useCallback(p=>{d&&Iy?Iy(()=>c(p)):c(p)},[c,d]);return T.useLayoutEffect(()=>o.listen(u),[o,u]),T.useEffect(()=>V8(n),[n]),T.createElement(W8,{basename:e,children:i,location:l.location,navigationType:l.action,navigator:o,future:n})}const K8=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",J8=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,en=T.forwardRef(function(e,i){let{onClick:n,relative:r,reloadDocument:s,replace:o,state:l,target:c,to:d,preventScrollReset:u,viewTransition:p}=e,f=H8(e,X8),{basename:g}=T.useContext(zo),v,w=!1;if(typeof d=="string"&&J8.test(d)&&(v=d,K8))try{let y=new URL(window.location.href),h=d.startsWith("//")?new URL(y.protocol+d):new URL(d),x=i1(h.pathname,g);h.origin===y.origin&&x!=null?d=x+h.search+h.hash:w=!0}catch{}let S=C8(d,{relative:r}),j=e6(d,{replace:o,state:l,target:c,preventScrollReset:u,relative:r,viewTransition:p});function b(y){n&&n(y),y.defaultPrevented||j(y)}return T.createElement("a",Qm({},f,{href:v||S,onClick:w||s?n:b,ref:i,target:c}))});var Ay;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ay||(Ay={}));var My;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(My||(My={}));function e6(t,e){let{target:i,replace:n,state:r,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,c=fD(),d=wd(),u=mD(t,{relative:o});return T.useCallback(p=>{if(G8(p,i)){p.preventDefault();let f=n!==void 0?n:Uh(d)===Uh(u);c(t,{replace:f,state:r,preventScrollReset:s,relative:o,viewTransition:l})}},[d,c,u,n,r,i,t,s,o,l])}var t6=typeof Element<"u",i6=typeof Map=="function",n6=typeof Set=="function",r6=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ju(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var i,n,r;if(Array.isArray(t)){if(i=t.length,i!=e.length)return!1;for(n=i;n--!==0;)if(!Ju(t[n],e[n]))return!1;return!0}var s;if(i6&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(s=t.entries();!(n=s.next()).done;)if(!e.has(n.value[0]))return!1;for(s=t.entries();!(n=s.next()).done;)if(!Ju(n.value[1],e.get(n.value[0])))return!1;return!0}if(n6&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(s=t.entries();!(n=s.next()).done;)if(!e.has(n.value[0]))return!1;return!0}if(r6&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(i=t.length,i!=e.length)return!1;for(n=i;n--!==0;)if(t[n]!==e[n])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(r=Object.keys(t),i=r.length,i!==Object.keys(e).length)return!1;for(n=i;n--!==0;)if(!Object.prototype.hasOwnProperty.call(e,r[n]))return!1;if(t6&&t instanceof Element)return!1;for(n=i;n--!==0;)if(!((r[n]==="_owner"||r[n]==="__v"||r[n]==="__o")&&t.$$typeof)&&!Ju(t[r[n]],e[r[n]]))return!1;return!0}return t!==t&&e!==e}var s6=function(e,i){try{return Ju(e,i)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};const o6=bp(s6);var a6=function(t,e,i,n,r,s,o,l){if(!t){var c;if(e===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[i,n,r,s,o,l],u=0;c=new Error(e.replace(/%s/g,function(){return d[u++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},l6=a6;const zy=bp(l6);var c6=function(e,i,n,r){var s=n?n.call(r,e,i):void 0;if(s!==void 0)return!!s;if(e===i)return!0;if(typeof e!="object"||!e||typeof i!="object"||!i)return!1;var o=Object.keys(e),l=Object.keys(i);if(o.length!==l.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(i),d=0;d<o.length;d++){var u=o[d];if(!c(u))return!1;var p=e[u],f=i[u];if(s=n?n.call(r,p,f,u):void 0,s===!1||s===void 0&&p!==f)return!1}return!0};const d6=bp(c6);var wD=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(wD||{}),Ff={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Fy=Object.values(wD),r1={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},u6=Object.entries(r1).reduce((t,[e,i])=>(t[i]=e,t),{}),kn="data-rh",za={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Fa=(t,e)=>{for(let i=t.length-1;i>=0;i-=1){const n=t[i];if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}return null},h6=t=>{let e=Fa(t,"title");const i=Fa(t,za.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),i&&e)return i.replace(/%s/g,()=>e);const n=Fa(t,za.DEFAULT_TITLE);return e||n||void 0},p6=t=>Fa(t,za.ON_CHANGE_CLIENT_STATE)||(()=>{}),Rf=(t,e)=>e.filter(i=>typeof i[t]<"u").map(i=>i[t]).reduce((i,n)=>({...i,...n}),{}),f6=(t,e)=>e.filter(i=>typeof i.base<"u").map(i=>i.base).reverse().reduce((i,n)=>{if(!i.length){const r=Object.keys(n);for(let s=0;s<r.length;s+=1){const l=r[s].toLowerCase();if(t.indexOf(l)!==-1&&n[l])return i.concat(n)}}return i},[]),m6=t=>console&&typeof console.warn=="function"&&console.warn(t),El=(t,e,i)=>{const n={};return i.filter(r=>Array.isArray(r[t])?!0:(typeof r[t]<"u"&&m6(`Helmet: ${t} should be of type "Array". Instead found type "${typeof r[t]}"`),!1)).map(r=>r[t]).reverse().reduce((r,s)=>{const o={};s.filter(c=>{let d;const u=Object.keys(c);for(let f=0;f<u.length;f+=1){const g=u[f],v=g.toLowerCase();e.indexOf(v)!==-1&&!(d==="rel"&&c[d].toLowerCase()==="canonical")&&!(v==="rel"&&c[v].toLowerCase()==="stylesheet")&&(d=v),e.indexOf(g)!==-1&&(g==="innerHTML"||g==="cssText"||g==="itemprop")&&(d=g)}if(!d||!c[d])return!1;const p=c[d].toLowerCase();return n[d]||(n[d]={}),o[d]||(o[d]={}),n[d][p]?!1:(o[d][p]=!0,!0)}).reverse().forEach(c=>r.push(c));const l=Object.keys(o);for(let c=0;c<l.length;c+=1){const d=l[c],u={...n[d],...o[d]};n[d]=u}return r},[]).reverse()},g6=(t,e)=>{if(Array.isArray(t)&&t.length){for(let i=0;i<t.length;i+=1)if(t[i][e])return!0}return!1},x6=t=>({baseTag:f6(["href"],t),bodyAttributes:Rf("bodyAttributes",t),defer:Fa(t,za.DEFER),encode:Fa(t,za.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Rf("htmlAttributes",t),linkTags:El("link",["rel","href"],t),metaTags:El("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:El("noscript",["innerHTML"],t),onChangeClientState:p6(t),scriptTags:El("script",["src","innerHTML"],t),styleTags:El("style",["cssText"],t),title:h6(t),titleAttributes:Rf("titleAttributes",t),prioritizeSeoTags:g6(t,za.PRIORITIZE_SEO_TAGS)}),yD=t=>Array.isArray(t)?t.join(""):t,w6=(t,e)=>{const i=Object.keys(t);for(let n=0;n<i.length;n+=1)if(e[i[n]]&&e[i[n]].includes(t[i[n]]))return!0;return!1},Lf=(t,e)=>Array.isArray(t)?t.reduce((i,n)=>(w6(n,e)?i.priority.push(n):i.default.push(n),i),{priority:[],default:[]}):{default:t,priority:[]},Ry=(t,e)=>({...t,[e]:void 0}),y6=["noscript","script","style"],Km=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),vD=t=>Object.keys(t).reduce((e,i)=>{const n=typeof t[i]<"u"?`${i}="${t[i]}"`:`${i}`;return e?`${e} ${n}`:n},""),v6=(t,e,i,n)=>{const r=vD(i),s=yD(e);return r?`<${t} ${kn}="true" ${r}>${Km(s,n)}</${t}>`:`<${t} ${kn}="true">${Km(s,n)}</${t}>`},b6=(t,e,i=!0)=>e.reduce((n,r)=>{const s=r,o=Object.keys(s).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,u)=>{const p=typeof s[u]>"u"?u:`${u}="${Km(s[u],i)}"`;return d?`${d} ${p}`:p},""),l=s.innerHTML||s.cssText||"",c=y6.indexOf(t)===-1;return`${n}<${t} ${kn}="true" ${o}${c?"/>":`>${l}</${t}>`}`},""),bD=(t,e={})=>Object.keys(t).reduce((i,n)=>{const r=r1[n];return i[r||n]=t[n],i},e),k6=(t,e,i)=>{const n={key:e,[kn]:!0},r=bD(i,n);return[q.createElement("title",r,e)]},eh=(t,e)=>e.map((i,n)=>{const r={key:n,[kn]:!0};return Object.keys(i).forEach(s=>{const l=r1[s]||s;if(l==="innerHTML"||l==="cssText"){const c=i.innerHTML||i.cssText;r.dangerouslySetInnerHTML={__html:c}}else r[l]=i[s]}),q.createElement(t,r)}),Zi=(t,e,i=!0)=>{switch(t){case"title":return{toComponent:()=>k6(t,e.title,e.titleAttributes),toString:()=>v6(t,e.title,e.titleAttributes,i)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>bD(e),toString:()=>vD(e)};default:return{toComponent:()=>eh(t,e),toString:()=>b6(t,e,i)}}},j6=({metaTags:t,linkTags:e,scriptTags:i,encode:n})=>{const r=Lf(t,Ff.meta),s=Lf(e,Ff.link),o=Lf(i,Ff.script);return{priorityMethods:{toComponent:()=>[...eh("meta",r.priority),...eh("link",s.priority),...eh("script",o.priority)],toString:()=>`${Zi("meta",r.priority,n)} ${Zi("link",s.priority,n)} ${Zi("script",o.priority,n)}`},metaTags:r.default,linkTags:s.default,scriptTags:o.default}},D6=t=>{const{baseTag:e,bodyAttributes:i,encode:n=!0,htmlAttributes:r,noscriptTags:s,styleTags:o,title:l="",titleAttributes:c,prioritizeSeoTags:d}=t;let{linkTags:u,metaTags:p,scriptTags:f}=t,g={toComponent:()=>{},toString:()=>""};return d&&({priorityMethods:g,linkTags:u,metaTags:p,scriptTags:f}=j6(t)),{priority:g,base:Zi("base",e,n),bodyAttributes:Zi("bodyAttributes",i,n),htmlAttributes:Zi("htmlAttributes",r,n),link:Zi("link",u,n),meta:Zi("meta",p,n),noscript:Zi("noscript",s,n),script:Zi("script",f,n),style:Zi("style",o,n),title:Zi("title",{title:l,titleAttributes:c},n)}},Jm=D6,Gd=[],kD=!!(typeof window<"u"&&window.document&&window.document.createElement),eg=class{constructor(t,e){Jn(this,"instances",[]);Jn(this,"canUseDOM",kD);Jn(this,"context");Jn(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?Gd:this.instances,add:t=>{(this.canUseDOM?Gd:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?Gd:this.instances).indexOf(t);(this.canUseDOM?Gd:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=Jm({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},S6={},jD=q.createContext(S6),Va,DD=(Va=class extends T.Component{constructor(i){super(i);Jn(this,"helmetData");this.helmetData=new eg(this.props.context||{},Va.canUseDOM)}render(){return q.createElement(jD.Provider,{value:this.helmetData.value},this.props.children)}},Jn(Va,"canUseDOM",kD),Va),Yo=(t,e)=>{const i=document.head||document.querySelector("head"),n=i.querySelectorAll(`${t}[${kn}]`),r=[].slice.call(n),s=[];let o;return e&&e.length&&e.forEach(l=>{const c=document.createElement(t);for(const d in l)if(Object.prototype.hasOwnProperty.call(l,d))if(d==="innerHTML")c.innerHTML=l.innerHTML;else if(d==="cssText")c.styleSheet?c.styleSheet.cssText=l.cssText:c.appendChild(document.createTextNode(l.cssText));else{const u=d,p=typeof l[u]>"u"?"":l[u];c.setAttribute(d,p)}c.setAttribute(kn,"true"),r.some((d,u)=>(o=u,c.isEqualNode(d)))?r.splice(o,1):s.push(c)}),r.forEach(l=>{var c;return(c=l.parentNode)==null?void 0:c.removeChild(l)}),s.forEach(l=>i.appendChild(l)),{oldTags:r,newTags:s}},tg=(t,e)=>{const i=document.getElementsByTagName(t)[0];if(!i)return;const n=i.getAttribute(kn),r=n?n.split(","):[],s=[...r],o=Object.keys(e);for(const l of o){const c=e[l]||"";i.getAttribute(l)!==c&&i.setAttribute(l,c),r.indexOf(l)===-1&&r.push(l);const d=s.indexOf(l);d!==-1&&s.splice(d,1)}for(let l=s.length-1;l>=0;l-=1)i.removeAttribute(s[l]);r.length===s.length?i.removeAttribute(kn):i.getAttribute(kn)!==o.join(",")&&i.setAttribute(kn,o.join(","))},_6=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=yD(t)),tg("title",e)},Ly=(t,e)=>{const{baseTag:i,bodyAttributes:n,htmlAttributes:r,linkTags:s,metaTags:o,noscriptTags:l,onChangeClientState:c,scriptTags:d,styleTags:u,title:p,titleAttributes:f}=t;tg("body",n),tg("html",r),_6(p,f);const g={baseTag:Yo("base",i),linkTags:Yo("link",s),metaTags:Yo("meta",o),noscriptTags:Yo("noscript",l),scriptTags:Yo("script",d),styleTags:Yo("style",u)},v={},w={};Object.keys(g).forEach(S=>{const{newTags:j,oldTags:b}=g[S];j.length&&(v[S]=j),b.length&&(w[S]=g[S].oldTags)}),e&&e(),c(t,v,w)},Il=null,C6=t=>{Il&&cancelAnimationFrame(Il),t.defer?Il=requestAnimationFrame(()=>{Ly(t,()=>{Il=null})}):(Ly(t),Il=null)},P6=C6,Oy=class extends T.Component{constructor(){super(...arguments);Jn(this,"rendered",!1)}shouldComponentUpdate(e){return!d6(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:i}=this.props.context;let n=null;const r=x6(e.get().map(s=>{const o={...s.props};return delete o.context,o}));DD.canUseDOM?P6(r):Jm&&(n=Jm(r)),i(n)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},tm,SD=(tm=class extends T.Component{shouldComponentUpdate(t){return!o6(Ry(this.props,"helmetData"),Ry(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,i,n){return{...e,[t.type]:[...e[t.type]||[],{...i,...this.mapNestedChildrenToProps(t,n)}]}}mapObjectTypeChildren(t,e,i,n){switch(t.type){case"title":return{...e,[t.type]:n,titleAttributes:{...i}};case"body":return{...e,bodyAttributes:{...i}};case"html":return{...e,htmlAttributes:{...i}};default:return{...e,[t.type]:{...i}}}}mapArrayTypeChildrenToProps(t,e){let i={...e};return Object.keys(t).forEach(n=>{i={...i,[n]:t[n]}}),i}warnOnInvalidChildren(t,e){return zy(Fy.some(i=>t.type===i),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Fy.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),zy(!e||typeof e=="string"||Array.isArray(e)&&!e.some(i=>typeof i!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let i={};return q.Children.forEach(t,n=>{if(!n||!n.props)return;const{children:r,...s}=n.props,o=Object.keys(s).reduce((c,d)=>(c[u6[d]||d]=s[d],c),{});let{type:l}=n;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(n,r),l){case"Symbol(react.fragment)":e=this.mapChildrenToProps(r,e);break;case"link":case"meta":case"noscript":case"script":case"style":i=this.flattenArrayTypeChildren(n,i,o,r);break;default:e=this.mapObjectTypeChildren(n,e,o,r);break}}),this.mapArrayTypeChildrenToProps(i,e)}render(){const{children:t,...e}=this.props;let i={...e},{helmetData:n}=e;if(t&&(i=this.mapChildrenToProps(t,i)),n&&!(n instanceof eg)){const r=n;n=new eg(r.context,!0),delete i.helmetData}return n?q.createElement(Oy,{...i,context:n.value}):q.createElement(jD.Consumer,null,r=>q.createElement(Oy,{...i,context:r}))}},Jn(tm,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),tm),_t=function(){return _t=Object.assign||function(e){for(var i,n=1,r=arguments.length;n<r;n++){i=arguments[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},_t.apply(this,arguments)};function qa(t,e,i){if(i||arguments.length===2)for(var n=0,r=e.length,s;n<r;n++)(s||!(n in e))&&(s||(s=Array.prototype.slice.call(e,0,n)),s[n]=e[n]);return t.concat(s||Array.prototype.slice.call(e))}var Ie="-ms-",hc="-moz-",ve="-webkit-",_D="comm",$p="rule",s1="decl",T6="@import",CD="@keyframes",E6="@layer",PD=Math.abs,o1=String.fromCharCode,ig=Object.assign;function I6(t,e){return St(t,0)^45?(((e<<2^St(t,0))<<2^St(t,1))<<2^St(t,2))<<2^St(t,3):0}function TD(t){return t.trim()}function or(t,e){return(t=e.exec(t))?t[0]:t}function re(t,e,i){return t.replace(e,i)}function th(t,e,i){return t.indexOf(e,i)}function St(t,e){return t.charCodeAt(e)|0}function Qa(t,e,i){return t.slice(e,i)}function Ln(t){return t.length}function ED(t){return t.length}function Gl(t,e){return e.push(t),t}function A6(t,e){return t.map(e).join("")}function $y(t,e){return t.filter(function(i){return!or(i,e)})}var Bp=1,Ka=1,ID=0,dn=0,ut=0,ml="";function Np(t,e,i,n,r,s,o,l){return{value:t,root:e,parent:i,type:n,props:r,children:s,line:Bp,column:Ka,length:o,return:"",siblings:l}}function Or(t,e){return ig(Np("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Go(t){for(;t.root;)t=Or(t.root,{children:[t]});Gl(t,t.siblings)}function M6(){return ut}function z6(){return ut=dn>0?St(ml,--dn):0,Ka--,ut===10&&(Ka=1,Bp--),ut}function _n(){return ut=dn<ID?St(ml,dn++):0,Ka++,ut===10&&(Ka=1,Bp++),ut}function ho(){return St(ml,dn)}function ih(){return dn}function Vp(t,e){return Qa(ml,t,e)}function ng(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function F6(t){return Bp=Ka=1,ID=Ln(ml=t),dn=0,[]}function R6(t){return ml="",t}function Of(t){return TD(Vp(dn-1,rg(t===91?t+2:t===40?t+1:t)))}function L6(t){for(;(ut=ho())&&ut<33;)_n();return ng(t)>2||ng(ut)>3?"":" "}function O6(t,e){for(;--e&&_n()&&!(ut<48||ut>102||ut>57&&ut<65||ut>70&&ut<97););return Vp(t,ih()+(e<6&&ho()==32&&_n()==32))}function rg(t){for(;_n();)switch(ut){case t:return dn;case 34:case 39:t!==34&&t!==39&&rg(ut);break;case 40:t===41&&rg(t);break;case 92:_n();break}return dn}function $6(t,e){for(;_n()&&t+ut!==47+10;)if(t+ut===42+42&&ho()===47)break;return"/*"+Vp(e,dn-1)+"*"+o1(t===47?t:_n())}function B6(t){for(;!ng(ho());)_n();return Vp(t,dn)}function N6(t){return R6(nh("",null,null,null,[""],t=F6(t),0,[0],t))}function nh(t,e,i,n,r,s,o,l,c){for(var d=0,u=0,p=o,f=0,g=0,v=0,w=1,S=1,j=1,b=0,y="",h=r,x=s,k=n,D=y;S;)switch(v=b,b=_n()){case 40:if(v!=108&&St(D,p-1)==58){th(D+=re(Of(b),"&","&\f"),"&\f",PD(d?l[d-1]:0))!=-1&&(j=-1);break}case 34:case 39:case 91:D+=Of(b);break;case 9:case 10:case 13:case 32:D+=L6(v);break;case 92:D+=O6(ih()-1,7);continue;case 47:switch(ho()){case 42:case 47:Gl(V6($6(_n(),ih()),e,i,c),c);break;default:D+="/"}break;case 123*w:l[d++]=Ln(D)*j;case 125*w:case 59:case 0:switch(b){case 0:case 125:S=0;case 59+u:j==-1&&(D=re(D,/\f/g,"")),g>0&&Ln(D)-p&&Gl(g>32?Ny(D+";",n,i,p-1,c):Ny(re(D," ","")+";",n,i,p-2,c),c);break;case 59:D+=";";default:if(Gl(k=By(D,e,i,d,u,r,l,y,h=[],x=[],p,s),s),b===123)if(u===0)nh(D,e,k,k,h,s,p,l,x);else switch(f===99&&St(D,3)===110?100:f){case 100:case 108:case 109:case 115:nh(t,k,k,n&&Gl(By(t,k,k,0,0,r,l,y,r,h=[],p,x),x),r,x,p,l,n?h:x);break;default:nh(D,k,k,k,[""],x,0,l,x)}}d=u=g=0,w=j=1,y=D="",p=o;break;case 58:p=1+Ln(D),g=v;default:if(w<1){if(b==123)--w;else if(b==125&&w++==0&&z6()==125)continue}switch(D+=o1(b),b*w){case 38:j=u>0?1:(D+="\f",-1);break;case 44:l[d++]=(Ln(D)-1)*j,j=1;break;case 64:ho()===45&&(D+=Of(_n())),f=ho(),u=p=Ln(y=D+=B6(ih())),b++;break;case 45:v===45&&Ln(D)==2&&(w=0)}}return s}function By(t,e,i,n,r,s,o,l,c,d,u,p){for(var f=r-1,g=r===0?s:[""],v=ED(g),w=0,S=0,j=0;w<n;++w)for(var b=0,y=Qa(t,f+1,f=PD(S=o[w])),h=t;b<v;++b)(h=TD(S>0?g[b]+" "+y:re(y,/&\f/g,g[b])))&&(c[j++]=h);return Np(t,e,i,r===0?$p:l,c,d,u,p)}function V6(t,e,i,n){return Np(t,e,i,_D,o1(M6()),Qa(t,2,-2),0,n)}function Ny(t,e,i,n,r){return Np(t,e,i,s1,Qa(t,0,n),Qa(t,n+1,-1),n,r)}function AD(t,e,i){switch(I6(t,e)){case 5103:return ve+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ve+t+t;case 4789:return hc+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ve+t+hc+t+Ie+t+t;case 5936:switch(St(t,e+11)){case 114:return ve+t+Ie+re(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ve+t+Ie+re(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ve+t+Ie+re(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ve+t+Ie+t+t;case 6165:return ve+t+Ie+"flex-"+t+t;case 5187:return ve+t+re(t,/(\w+).+(:[^]+)/,ve+"box-$1$2"+Ie+"flex-$1$2")+t;case 5443:return ve+t+Ie+"flex-item-"+re(t,/flex-|-self/g,"")+(or(t,/flex-|baseline/)?"":Ie+"grid-row-"+re(t,/flex-|-self/g,""))+t;case 4675:return ve+t+Ie+"flex-line-pack"+re(t,/align-content|flex-|-self/g,"")+t;case 5548:return ve+t+Ie+re(t,"shrink","negative")+t;case 5292:return ve+t+Ie+re(t,"basis","preferred-size")+t;case 6060:return ve+"box-"+re(t,"-grow","")+ve+t+Ie+re(t,"grow","positive")+t;case 4554:return ve+re(t,/([^-])(transform)/g,"$1"+ve+"$2")+t;case 6187:return re(re(re(t,/(zoom-|grab)/,ve+"$1"),/(image-set)/,ve+"$1"),t,"")+t;case 5495:case 3959:return re(t,/(image-set\([^]*)/,ve+"$1$`$1");case 4968:return re(re(t,/(.+:)(flex-)?(.*)/,ve+"box-pack:$3"+Ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ve+t+t;case 4200:if(!or(t,/flex-|baseline/))return Ie+"grid-column-align"+Qa(t,e)+t;break;case 2592:case 3360:return Ie+re(t,"template-","")+t;case 4384:case 3616:return i&&i.some(function(n,r){return e=r,or(n.props,/grid-\w+-end/)})?~th(t+(i=i[e].value),"span",0)?t:Ie+re(t,"-start","")+t+Ie+"grid-row-span:"+(~th(i,"span",0)?or(i,/\d+/):+or(i,/\d+/)-+or(t,/\d+/))+";":Ie+re(t,"-start","")+t;case 4896:case 4128:return i&&i.some(function(n){return or(n.props,/grid-\w+-start/)})?t:Ie+re(re(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return re(t,/(.+)-inline(.+)/,ve+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ln(t)-1-e>6)switch(St(t,e+1)){case 109:if(St(t,e+4)!==45)break;case 102:return re(t,/(.+:)(.+)-([^]+)/,"$1"+ve+"$2-$3$1"+hc+(St(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~th(t,"stretch",0)?AD(re(t,"stretch","fill-available"),e,i)+t:t}break;case 5152:case 5920:return re(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,r,s,o,l,c,d){return Ie+r+":"+s+d+(o?Ie+r+"-span:"+(l?c:+c-+s)+d:"")+t});case 4949:if(St(t,e+6)===121)return re(t,":",":"+ve)+t;break;case 6444:switch(St(t,St(t,14)===45?18:11)){case 120:return re(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ve+(St(t,14)===45?"inline-":"")+"box$3$1"+ve+"$2$3$1"+Ie+"$2box$3")+t;case 100:return re(t,":",":"+Ie)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(t,"scroll-","scroll-snap-")+t}return t}function Yh(t,e){for(var i="",n=0;n<t.length;n++)i+=e(t[n],n,t,e)||"";return i}function W6(t,e,i,n){switch(t.type){case E6:if(t.children.length)break;case T6:case s1:return t.return=t.return||t.value;case _D:return"";case CD:return t.return=t.value+"{"+Yh(t.children,n)+"}";case $p:if(!Ln(t.value=t.props.join(",")))return""}return Ln(i=Yh(t.children,n))?t.return=t.value+"{"+i+"}":""}function U6(t){var e=ED(t);return function(i,n,r,s){for(var o="",l=0;l<e;l++)o+=t[l](i,n,r,s)||"";return o}}function H6(t){return function(e){e.root||(e=e.return)&&t(e)}}function Y6(t,e,i,n){if(t.length>-1&&!t.return)switch(t.type){case s1:t.return=AD(t.value,t.length,i);return;case CD:return Yh([Or(t,{value:re(t.value,"@","@"+ve)})],n);case $p:if(t.length)return A6(i=t.props,function(r){switch(or(r,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Go(Or(t,{props:[re(r,/:(read-\w+)/,":"+hc+"$1")]})),Go(Or(t,{props:[r]})),ig(t,{props:$y(i,n)});break;case"::placeholder":Go(Or(t,{props:[re(r,/:(plac\w+)/,":"+ve+"input-$1")]})),Go(Or(t,{props:[re(r,/:(plac\w+)/,":"+hc+"$1")]})),Go(Or(t,{props:[re(r,/:(plac\w+)/,Ie+"input-$1")]})),Go(Or(t,{props:[r]})),ig(t,{props:$y(i,n)});break}return""})}}var G6={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ja=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",MD="active",zD="data-styled-version",Wp="6.1.19",a1=`/*!sc*/
`,Gh=typeof window<"u"&&typeof document<"u",X6=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Z6={},Up=Object.freeze([]),el=Object.freeze({});function FD(t,e,i){return i===void 0&&(i=el),t.theme!==i.theme&&t.theme||e||i.theme}var RD=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),q6=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Q6=/(^-|-$)/g;function Vy(t){return t.replace(q6,"-").replace(Q6,"")}var K6=/(a)(d)/gi,Xd=52,Wy=function(t){return String.fromCharCode(t+(t>25?39:97))};function sg(t){var e,i="";for(e=Math.abs(t);e>Xd;e=e/Xd|0)i=Wy(e%Xd)+i;return(Wy(e%Xd)+i).replace(K6,"$1-$2")}var $f,LD=5381,ya=function(t,e){for(var i=e.length;i;)t=33*t^e.charCodeAt(--i);return t},OD=function(t){return ya(LD,t)};function l1(t){return sg(OD(t)>>>0)}function J6(t){return t.displayName||t.name||"Component"}function Bf(t){return typeof t=="string"&&!0}var $D=typeof Symbol=="function"&&Symbol.for,BD=$D?Symbol.for("react.memo"):60115,eP=$D?Symbol.for("react.forward_ref"):60112,tP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},iP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ND={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nP=(($f={})[eP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$f[BD]=ND,$f);function Uy(t){return("type"in(e=t)&&e.type.$$typeof)===BD?ND:"$$typeof"in t?nP[t.$$typeof]:tP;var e}var rP=Object.defineProperty,sP=Object.getOwnPropertyNames,Hy=Object.getOwnPropertySymbols,oP=Object.getOwnPropertyDescriptor,aP=Object.getPrototypeOf,Yy=Object.prototype;function VD(t,e,i){if(typeof e!="string"){if(Yy){var n=aP(e);n&&n!==Yy&&VD(t,n,i)}var r=sP(e);Hy&&(r=r.concat(Hy(e)));for(var s=Uy(t),o=Uy(e),l=0;l<r.length;++l){var c=r[l];if(!(c in iP||i&&i[c]||o&&c in o||s&&c in s)){var d=oP(e,c);try{rP(t,c,d)}catch{}}}}return t}function _o(t){return typeof t=="function"}function c1(t){return typeof t=="object"&&"styledComponentId"in t}function ro(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Xh(t,e){if(t.length===0)return"";for(var i=t[0],n=1;n<t.length;n++)i+=e?e+t[n]:t[n];return i}function Jc(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function og(t,e,i){if(i===void 0&&(i=!1),!i&&!Jc(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=og(t[n],e[n]);else if(Jc(e))for(var n in e)t[n]=og(t[n],e[n]);return t}function d1(t,e){Object.defineProperty(t,"toString",{value:e})}function Co(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var lP=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var i=0,n=0;n<e;n++)i+=this.groupSizes[n];return i},t.prototype.insertRules=function(e,i){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,s=r;e>=s;)if((s<<=1)<0)throw Co(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(n),this.length=s;for(var o=r;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(e+1),c=(o=0,i.length);o<c;o++)this.tag.insertRule(l,i[o])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var i=this.groupSizes[e],n=this.indexOfGroup(e),r=n+i;this.groupSizes[e]=0;for(var s=n;s<r;s++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var i="";if(e>=this.length||this.groupSizes[e]===0)return i;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),s=r+n,o=r;o<s;o++)i+="".concat(this.tag.getRule(o)).concat(a1);return i},t}(),rh=new Map,Zh=new Map,sh=1,Zd=function(t){if(rh.has(t))return rh.get(t);for(;Zh.has(sh);)sh++;var e=sh++;return rh.set(t,e),Zh.set(e,t),e},cP=function(t,e){sh=e+1,rh.set(t,e),Zh.set(e,t)},dP="style[".concat(Ja,"][").concat(zD,'="').concat(Wp,'"]'),uP=new RegExp("^".concat(Ja,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),hP=function(t,e,i){for(var n,r=i.split(","),s=0,o=r.length;s<o;s++)(n=r[s])&&t.registerName(e,n)},pP=function(t,e){for(var i,n=((i=e.textContent)!==null&&i!==void 0?i:"").split(a1),r=[],s=0,o=n.length;s<o;s++){var l=n[s].trim();if(l){var c=l.match(uP);if(c){var d=0|parseInt(c[1],10),u=c[2];d!==0&&(cP(u,d),hP(t,u,c[3]),t.getTag().insertRules(d,r)),r.length=0}else r.push(l)}}},Gy=function(t){for(var e=document.querySelectorAll(dP),i=0,n=e.length;i<n;i++){var r=e[i];r&&r.getAttribute(Ja)!==MD&&(pP(t,r),r.parentNode&&r.parentNode.removeChild(r))}};function fP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var WD=function(t){var e=document.head,i=t||e,n=document.createElement("style"),r=function(l){var c=Array.from(l.querySelectorAll("style[".concat(Ja,"]")));return c[c.length-1]}(i),s=r!==void 0?r.nextSibling:null;n.setAttribute(Ja,MD),n.setAttribute(zD,Wp);var o=fP();return o&&n.setAttribute("nonce",o),i.insertBefore(n,s),n},mP=function(){function t(e){this.element=WD(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var n=document.styleSheets,r=0,s=n.length;r<s;r++){var o=n[r];if(o.ownerNode===i)return o}throw Co(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,i){try{return this.sheet.insertRule(i,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var i=this.sheet.cssRules[e];return i&&i.cssText?i.cssText:""},t}(),gP=function(){function t(e){this.element=WD(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,i){if(e<=this.length&&e>=0){var n=document.createTextNode(i);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),xP=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,i){return e<=this.length&&(this.rules.splice(e,0,i),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Xy=Gh,wP={isServer:!Gh,useCSSOMInjection:!X6},qh=function(){function t(e,i,n){e===void 0&&(e=el),i===void 0&&(i={});var r=this;this.options=_t(_t({},wP),e),this.gs=i,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Gh&&Xy&&(Xy=!1,Gy(this)),d1(this,function(){return function(s){for(var o=s.getTag(),l=o.length,c="",d=function(p){var f=function(j){return Zh.get(j)}(p);if(f===void 0)return"continue";var g=s.names.get(f),v=o.getGroup(p);if(g===void 0||!g.size||v.length===0)return"continue";var w="".concat(Ja,".g").concat(p,'[id="').concat(f,'"]'),S="";g!==void 0&&g.forEach(function(j){j.length>0&&(S+="".concat(j,","))}),c+="".concat(v).concat(w,'{content:"').concat(S,'"}').concat(a1)},u=0;u<l;u++)d(u);return c}(r)})}return t.registerId=function(e){return Zd(e)},t.prototype.rehydrate=function(){!this.server&&Gh&&Gy(this)},t.prototype.reconstructWithOptions=function(e,i){return i===void 0&&(i=!0),new t(_t(_t({},this.options),e),this.gs,i&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(i){var n=i.useCSSOMInjection,r=i.target;return i.isServer?new xP(r):n?new mP(r):new gP(r)}(this.options),new lP(e)));var e},t.prototype.hasNameForId=function(e,i){return this.names.has(e)&&this.names.get(e).has(i)},t.prototype.registerName=function(e,i){if(Zd(e),this.names.has(e))this.names.get(e).add(i);else{var n=new Set;n.add(i),this.names.set(e,n)}},t.prototype.insertRules=function(e,i,n){this.registerName(e,i),this.getTag().insertRules(Zd(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Zd(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),yP=/&/g,vP=/^\s*\/\/.*$/gm;function UD(t,e){return t.map(function(i){return i.type==="rule"&&(i.value="".concat(e," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(e," ")),i.props=i.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=UD(i.children,e)),i})}function bP(t){var e,i,n,r=t===void 0?el:t,s=r.options,o=s===void 0?el:s,l=r.plugins,c=l===void 0?Up:l,d=function(f,g,v){return v.startsWith(i)&&v.endsWith(i)&&v.replaceAll(i,"").length>0?".".concat(e):f},u=c.slice();u.push(function(f){f.type===$p&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(yP,i).replace(n,d))}),o.prefix&&u.push(Y6),u.push(W6);var p=function(f,g,v,w){g===void 0&&(g=""),v===void 0&&(v=""),w===void 0&&(w="&"),e=w,i=g,n=new RegExp("\\".concat(i,"\\b"),"g");var S=f.replace(vP,""),j=N6(v||g?"".concat(v," ").concat(g," { ").concat(S," }"):S);o.namespace&&(j=UD(j,o.namespace));var b=[];return Yh(j,U6(u.concat(H6(function(y){return b.push(y)})))),b};return p.hash=c.length?c.reduce(function(f,g){return g.name||Co(15),ya(f,g.name)},LD).toString():"",p}var kP=new qh,ag=bP(),HD=q.createContext({shouldForwardProp:void 0,styleSheet:kP,stylis:ag});HD.Consumer;q.createContext(void 0);function lg(){return T.useContext(HD)}var YD=function(){function t(e,i){var n=this;this.inject=function(r,s){s===void 0&&(s=ag);var o=n.name+s.hash;r.hasNameForId(n.id,o)||r.insertRules(n.id,o,s(n.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=i,d1(this,function(){throw Co(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=ag),this.name+e.hash},t}(),jP=function(t){return t>="A"&&t<="Z"};function Zy(t){for(var e="",i=0;i<t.length;i++){var n=t[i];if(i===1&&n==="-"&&t[0]==="-")return t;jP(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var GD=function(t){return t==null||t===!1||t===""},XD=function(t){var e,i,n=[];for(var r in t){var s=t[r];t.hasOwnProperty(r)&&!GD(s)&&(Array.isArray(s)&&s.isCss||_o(s)?n.push("".concat(Zy(r),":"),s,";"):Jc(s)?n.push.apply(n,qa(qa(["".concat(r," {")],XD(s),!1),["}"],!1)):n.push("".concat(Zy(r),": ").concat((e=r,(i=s)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||e in G6||e.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return n};function us(t,e,i,n){if(GD(t))return[];if(c1(t))return[".".concat(t.styledComponentId)];if(_o(t)){if(!_o(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var r=t(e);return us(r,e,i,n)}var s;return t instanceof YD?i?(t.inject(i,n),[t.getName(n)]):[t]:Jc(t)?XD(t):Array.isArray(t)?Array.prototype.concat.apply(Up,t.map(function(o){return us(o,e,i,n)})):[t.toString()]}function ZD(t){for(var e=0;e<t.length;e+=1){var i=t[e];if(_o(i)&&!c1(i))return!1}return!0}var DP=OD(Wp),SP=function(){function t(e,i,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&ZD(e),this.componentId=i,this.baseHash=ya(DP,i),this.baseStyle=n,qh.registerId(i)}return t.prototype.generateAndInjectStyles=function(e,i,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,i,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))r=ro(r,this.staticRulesId);else{var s=Xh(us(this.rules,e,i,n)),o=sg(ya(this.baseHash,s)>>>0);if(!i.hasNameForId(this.componentId,o)){var l=n(s,".".concat(o),void 0,this.componentId);i.insertRules(this.componentId,o,l)}r=ro(r,o),this.staticRulesId=o}else{for(var c=ya(this.baseHash,n.hash),d="",u=0;u<this.rules.length;u++){var p=this.rules[u];if(typeof p=="string")d+=p;else if(p){var f=Xh(us(p,e,i,n));c=ya(c,f+u),d+=f}}if(d){var g=sg(c>>>0);i.hasNameForId(this.componentId,g)||i.insertRules(this.componentId,g,n(d,".".concat(g),void 0,this.componentId)),r=ro(r,g)}}return r},t}(),tl=q.createContext(void 0);tl.Consumer;function _P(t){var e=q.useContext(tl),i=T.useMemo(function(){return function(n,r){if(!n)throw Co(14);if(_o(n)){var s=n(r);return s}if(Array.isArray(n)||typeof n!="object")throw Co(8);return r?_t(_t({},r),n):n}(t.theme,e)},[t.theme,e]);return t.children?q.createElement(tl.Provider,{value:i},t.children):null}var Nf={};function CP(t,e,i){var n=c1(t),r=t,s=!Bf(t),o=e.attrs,l=o===void 0?Up:o,c=e.componentId,d=c===void 0?function(h,x){var k=typeof h!="string"?"sc":Vy(h);Nf[k]=(Nf[k]||0)+1;var D="".concat(k,"-").concat(l1(Wp+k+Nf[k]));return x?"".concat(x,"-").concat(D):D}(e.displayName,e.parentComponentId):c,u=e.displayName,p=u===void 0?function(h){return Bf(h)?"styled.".concat(h):"Styled(".concat(J6(h),")")}(t):u,f=e.displayName&&e.componentId?"".concat(Vy(e.displayName),"-").concat(e.componentId):e.componentId||d,g=n&&r.attrs?r.attrs.concat(l).filter(Boolean):l,v=e.shouldForwardProp;if(n&&r.shouldForwardProp){var w=r.shouldForwardProp;if(e.shouldForwardProp){var S=e.shouldForwardProp;v=function(h,x){return w(h,x)&&S(h,x)}}else v=w}var j=new SP(i,f,n?r.componentStyle:void 0);function b(h,x){return function(k,D,_){var C=k.attrs,E=k.componentStyle,z=k.defaultProps,A=k.foldedComponentIds,L=k.styledComponentId,O=k.target,W=q.useContext(tl),V=lg(),B=k.shouldForwardProp||V.shouldForwardProp,I=FD(D,W,z)||el,M=function(fe,ue,me){for(var Le,je=_t(_t({},ue),{className:void 0,theme:me}),Tt=0;Tt<fe.length;Tt+=1){var De=_o(Le=fe[Tt])?Le(je):Le;for(var Me in De)je[Me]=Me==="className"?ro(je[Me],De[Me]):Me==="style"?_t(_t({},je[Me]),De[Me]):De[Me]}return ue.className&&(je.className=ro(je.className,ue.className)),je}(C,D,I),P=M.as||O,R={};for(var U in M)M[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&M.theme===I||(U==="forwardedAs"?R.as=M.forwardedAs:B&&!B(U,P)||(R[U]=M[U]));var ne=function(fe,ue){var me=lg(),Le=fe.generateAndInjectStyles(ue,me.styleSheet,me.stylis);return Le}(E,M),Z=ro(A,L);return ne&&(Z+=" "+ne),M.className&&(Z+=" "+M.className),R[Bf(P)&&!RD.has(P)?"class":"className"]=Z,_&&(R.ref=_),T.createElement(P,R)}(y,h,x)}b.displayName=p;var y=q.forwardRef(b);return y.attrs=g,y.componentStyle=j,y.displayName=p,y.shouldForwardProp=v,y.foldedComponentIds=n?ro(r.foldedComponentIds,r.styledComponentId):"",y.styledComponentId=f,y.target=n?r.target:t,Object.defineProperty(y,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=n?function(x){for(var k=[],D=1;D<arguments.length;D++)k[D-1]=arguments[D];for(var _=0,C=k;_<C.length;_++)og(x,C[_],!0);return x}({},r.defaultProps,h):h}}),d1(y,function(){return".".concat(y.styledComponentId)}),s&&VD(y,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),y}function qy(t,e){for(var i=[t[0]],n=0,r=e.length;n<r;n+=1)i.push(e[n],t[n+1]);return i}var Qy=function(t){return Object.assign(t,{isCss:!0})};function u1(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(_o(t)||Jc(t))return Qy(us(qy(Up,qa([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?us(n):Qy(us(qy(n,e)))}function cg(t,e,i){if(i===void 0&&(i=el),!e)throw Co(1,e);var n=function(r){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,i,u1.apply(void 0,qa([r],s,!1)))};return n.attrs=function(r){return cg(t,e,_t(_t({},i),{attrs:Array.prototype.concat(i.attrs,r).filter(Boolean)}))},n.withConfig=function(r){return cg(t,e,_t(_t({},i),r))},n}var qD=function(t){return cg(CP,t)},m=qD;RD.forEach(function(t){m[t]=qD(t)});var PP=function(){function t(e,i){this.rules=e,this.componentId=i,this.isStatic=ZD(e),qh.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,i,n,r){var s=r(Xh(us(this.rules,i,n,r)),""),o=this.componentId+e;n.insertRules(o,o,s)},t.prototype.removeStyles=function(e,i){i.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,i,n,r){e>2&&qh.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,i,n,r)},t}();function Cr(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];var n=u1.apply(void 0,qa([t],e,!1)),r="sc-global-".concat(l1(JSON.stringify(n))),s=new PP(n,r),o=function(c){var d=lg(),u=q.useContext(tl),p=q.useRef(d.styleSheet.allocateGSInstance(r)).current;return d.styleSheet.server&&l(p,c,d.styleSheet,u,d.stylis),q.useLayoutEffect(function(){if(!d.styleSheet.server)return l(p,c,d.styleSheet,u,d.stylis),function(){return s.removeStyles(p,d.styleSheet)}},[p,c,d.styleSheet,u,d.stylis]),null};function l(c,d,u,p,f){if(s.isStatic)s.renderStyles(c,Z6,u,f);else{var g=_t(_t({},d),{theme:FD(d,p,o.defaultProps)});s.renderStyles(c,g,u,f)}}return q.memo(o)}function yd(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];var n=Xh(u1.apply(void 0,qa([t],e,!1))),r=l1(n);return new YD(r,n)}const TP={background:"#191c24",backgroundRgb:"25, 28, 36",text:"#ffffff",textRgb:"255, 255, 255",accent1:"#4CAF50",accent1Rgb:"76, 175, 80",accent2:"#2196F3",accent2Rgb:"33, 150, 243",cardBackground:"#2a2f3a",cardBackgroundRgb:"42, 47, 58",headerBackground:"rgba(25, 28, 36, 0.9)",transition:"all 0.3s ease",border:"#3a3f4a"},EP=T.createContext(void 0),IP=({children:t})=>a.jsx(EP.Provider,{value:{},children:a.jsx(_P,{theme:TP,children:t})});var QD={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ky=q.createContext&&q.createContext(QD),hs=globalThis&&globalThis.__assign||function(){return hs=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++){e=arguments[i];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},hs.apply(this,arguments)},AP=globalThis&&globalThis.__rest||function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(i[n[r]]=t[n[r]]);return i};function KD(t){return t&&t.map(function(e,i){return q.createElement(e.tag,hs({key:i},e.attr),KD(e.child))})}function h1(t){return function(e){return q.createElement(MP,hs({attr:hs({},t.attr)},e),KD(t.child))}}function MP(t){var e=function(i){var n=t.attr,r=t.size,s=t.title,o=AP(t,["attr","size","title"]),l=r||i.size||"1em",c;return i.className&&(c=i.className),t.className&&(c=(c?c+" ":"")+t.className),q.createElement("svg",hs({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,n,o,{className:c,style:hs(hs({color:t.color||i.color},i.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&q.createElement("title",null,s),t.children)};return Ky!==void 0?q.createElement(Ky.Consumer,null,function(i){return e(i)}):e(QD)}function JD(t){return h1({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M1023.46 232a31.629 31.629 0 0 0-2.48-18.271C1012.917 178.288 987.3 160 944.005 160h-832c-38.08 0-79.105 14-99.28 41.472-1.745 1.328-3.409 2.832-4.912 4.576-6.449 7.44-8.705 17.009-7.264 26.033-.288 2.592-.544 5.2-.544 7.92v512c0 53.024 58.992 112 112 112h832c53.024 0 80-58.976 80-112v-512c0-2.832-.368-5.313-.544-8.001zm-911.459-8l832.001-.001h.432L512.002 568.655 81.314 225.407C91.106 223.599 103.154 224 112 224zm832.001 575.999H112.003c-17.648 0-48-30.336-48-48V293.551l427.04 341.648c6.016 5.2 13.487 7.792 20.959 7.792a32.046 32.046 0 0 0 20.976-7.792l427.024-341.632v458.432c0 17.664 1.664 48-16 48z"}}]})(t)}function e5(t){return h1({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511 4c138 0 155 1 209 3 53 2 90 11 123 24 34 13 62 30 90 58s45 56 58 90c13 33 22 70 24 123 2 54 3 71 3 209s-1 155-3 209c-2 53-11 90-24 123-13 34-30 62-58 90s-56 45-90 58c-33 13-70 22-123 24-54 2-71 3-209 3s-155-1-209-3c-53-2-90-11-123-24-34-13-62-30-90-58s-45-56-58-90C18 810 9 773 7 720c-2-54-3-71-3-209s1-155 3-209c2-53 11-90 24-123 13-34 30-62 58-90s56-45 90-58c33-13 70-22 123-24 54-2 71-3 209-3zm0 66c-144 0-161 1-217 3-52 2-81 12-100 19-49 20-82 53-102 102-7 19-17 48-19 100-2 56-3 73-3 217s1 161 3 217c2 52 12 81 19 100 20 49 53 82 102 102 19 7 48 17 100 19 56 2 73 3 217 3s161-1 217-3c52-2 81-12 100-19 49-20 82-53 102-102 7-19 17-48 19-100 2-56 3-73 3-217s-1-161-3-217c-2-52-12-81-19-100-20-49-53-82-102-102-19-7-48-17-100-19-56-2-73-3-217-3zm0 644c112 0 203-91 203-203s-91-203-203-203-203 91-203 203 91 203 203 203zm0-463c144 0 260 116 260 260S655 771 511 771 251 655 251 511s116-260 260-260zm332-10c0 34-28 60-62 60s-60-26-60-60 26-62 60-62 62 28 62 62z"}}]})(t)}function t5(t){return h1({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M997.795 1002.43H789.769c-14.715 0-26.607-11.892-26.607-26.607V640.806c0-114.898-59.263-114.898-78.816-114.898-52.611 0-74.986 41.525-82.243 59.466-3.427 8.064-5.04 21.77-5.04 40.921v349.732c0 14.715-11.892 26.607-26.606 26.607H362.23c-7.055 0-13.909-2.822-18.948-7.86s-7.861-11.895-7.66-18.95c0-5.643 2.822-567.432 0-624.881-.403-7.257 2.217-14.312 7.257-19.553s11.893-8.265 19.35-8.265h208.228c14.714 0 26.607 11.892 26.607 26.607v15.723c35.074-31.244 85.669-57.046 161.058-57.046 166.702 0 266.28 115.3 266.28 308.409v359.005c0 14.715-11.893 26.607-26.607 26.607zm-181.418-53.214l155.012-.004V616.815c0-162.268-77.606-255.193-213.065-255.193-90.507 0-134.45 45.153-162.066 86.476-3.225 10.885-13.506 18.949-25.6 18.949h-1.41c-9.677 0-18.546-5.242-23.181-13.707-3.628-6.653-4.435-14.313-2.016-21.368v-55.835H389.443c1.411 111.068 0 470.477-.403 572.877h154.809V626.09c0-26.809 2.822-46.16 8.869-60.875 23.383-57.852 72.566-92.724 131.427-92.724 83.855 0 132.03 61.28 132.03 168.113v308.611h.204zm-569.246 53.21H38.904c-14.715 0-26.607-11.892-26.607-26.607V349.73c0-14.715 11.892-26.608 26.607-26.608h208.227c14.715 0 26.607 11.893 26.607 26.607V975.82c0 14.715-11.892 26.608-26.607 26.608zM65.513 949.213h155.01V376.336H65.514v572.876zm77.605-658.344l-1.412-.001c-82.041 0-141.707-56.844-141.707-135.055 0-78.009 60.674-134.854 144.529-134.854 82.444 0 141.305 55.231 142.918 134.249 0 78.816-60.674 135.66-144.328 135.66zm1.41-216.492c-54.627 0-91.313 32.857-91.313 81.639 0 47.974 36.284 81.637 88.492 81.637h1.41c54.426 0 91.112-32.857 91.112-81.638-1.008-49.386-36.283-81.638-89.701-81.638z"}}]})(t)}const zP="/assets/logoweb.29eb1c09.png",FP=m.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  padding: 1rem 0;
  box-shadow: none;
`,RP=m.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,LP=m(en)`
  font-size: 1.7rem;
  font-weight: 700;
  color: #181818;
  text-decoration: none;
`,OP=m.img`
  height: 40px;
  width: auto;
  display: block;
`,$P=m.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`,qd=m(en)`
  position: relative;
  font-weight: 500;
  color: #181818;
  text-decoration: none;
  font-size: 1.18rem;
  letter-spacing: 0.01em;
  transition: color 0.2s;
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #4CAF50;
    transition: width 0.3s ease;
  }
  &:hover {
    color: #4CAF50;
  }
  &:hover::after {
    width: 100%;
  }
`,BP=m.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`,Vf=m.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  color: #181818;
  font-size: 1.1rem;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: #181818;
    color: #fff;
    border-color: #181818;
    transform: translateY(-2px);
  }
`,NP=m.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;
  @media (max-width: 768px) {
    display: flex;
  }
`,Wf=m.span`
  width: 28px;
  height: 3px;
  background: #000;
  margin: 3px 0;
  border-radius: 2px;
  transition: 0.4s;
`,VP=m.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(25, 28, 36, 0.85);
  backdrop-filter: blur(18px) saturate(1.5);
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  gap: 2.5rem;
  z-index: 1200;
  transform: ${({open:t})=>t?"translateY(0)":"translateY(-100%)"};
  opacity: ${({open:t})=>t?1:0};
  pointer-events: ${({open:t})=>t?"auto":"none"};
  transition: transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1);
  @media (min-width: 769px) {
    display: none;
  }
`,Qd=m(en)`
  font-size: 2.1rem;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  margin-bottom: 1.2rem;
  letter-spacing: 0.04em;
  opacity: 0;
  transform: translateY(40px);
  animation: fadeInUp 0.6s forwards;
  animation-delay: var(--delay, 0s);
  transition: transform 0.2s, color 0.2s;
  &:hover {
    color: #2ee0ff;
    transform: scale(1.08) translateY(-2px);
  }
  &:last-child { margin-bottom: 0; }

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,WP=m.button`
  position: absolute;
  top: 32px;
  right: 32px;
  background: rgba(46,224,255,0.15);
  border: none;
  color: #fff;
  font-size: 3rem;
  cursor: pointer;
  z-index: 1300;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px #2ee0ff40;
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background: rgba(46,224,255,0.35);
    transform: scale(1.08) rotate(8deg);
  }
  @media (min-width: 769px) {
    display: none;
  }
`,UP=m.div`
  display: ${({open:t})=>t?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.35);
  z-index: 1199;
`,i5=()=>{const[t,e]=T.useState(!1),i=()=>e(r=>!r),n=()=>e(!1);return a.jsx(FP,{children:a.jsxs(RP,{children:[a.jsx(LP,{to:"/",children:a.jsx(OP,{src:zP,alt:"Logo"})}),a.jsxs($P,{children:[a.jsx(qd,{to:"/",children:"Home"}),a.jsx(qd,{to:"/about",children:"About"}),a.jsx(qd,{to:"/work",children:"Work"}),a.jsx(qd,{to:"/resume",children:"Resume"})]}),a.jsxs(BP,{children:[a.jsx(Vf,{href:"https://mail.google.com/mail/?view=cm&to=nooshin.shahsavan.ca@gmail.com&su=Contact%20from%20my%20website",target:"_blank",rel:"noopener noreferrer",title:"Email",children:a.jsx(JD,{})}),a.jsx(Vf,{href:"https://linkedin.com/in/nooshin-shahsavan",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:a.jsx(t5,{})}),a.jsx(Vf,{href:"https://instagram.com/its.nooshin_/",target:"_blank",rel:"noopener noreferrer",title:"Instagram",children:a.jsx(e5,{})})]}),a.jsxs(NP,{"aria-label":"Open menu",onClick:i,children:[a.jsx(Wf,{style:{transform:t?"rotate(45deg) translate(5px, 6px)":"none"}}),a.jsx(Wf,{style:{opacity:t?0:1}}),a.jsx(Wf,{style:{transform:t?"rotate(-45deg) translate(7px, -7px)":"none"}})]}),a.jsx(UP,{open:t,onClick:n}),a.jsxs(VP,{open:t,children:[a.jsx(WP,{"aria-label":"Close menu",onClick:n,children:"×"}),a.jsx(Qd,{to:"/",onClick:n,style:{"--delay":"0.1s"},children:"Home"}),a.jsx(Qd,{to:"/about",onClick:n,style:{"--delay":"0.25s"},children:"About"}),a.jsx(Qd,{to:"/work",onClick:n,style:{"--delay":"0.4s"},children:"Work"}),a.jsx(Qd,{to:"/resume",onClick:n,style:{"--delay":"0.55s"},children:"Resume"})]})]})})},HP=Cr`
  // @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
  // Moved to index.html <head> as a <link> tag for better compatibility.

  :root {
    --background: ${({theme:t})=>t.background};
    --background-rgb: ${({theme:t})=>t.backgroundRgb};
    --text: ${({theme:t})=>t.text};
    --text-rgb: ${({theme:t})=>t.textRgb};
    --accent1: ${({theme:t})=>t.accent1};
    --accent1-rgb: ${({theme:t})=>t.accent1Rgb};
    --accent2: ${({theme:t})=>t.accent2};
    --accent2-rgb: ${({theme:t})=>t.accent2Rgb};
    --cardBackground: ${({theme:t})=>t.cardBackground};
    --cardBackground-rgb: ${({theme:t})=>t.cardBackgroundRgb};
    --headerBackground: ${({theme:t})=>t.headerBackground};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--background);
    color: var(--text);
    transition: ${({theme:t})=>t.transition};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    background-color: var(--background);
  }

  section {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: 'Inter', sans-serif;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Container for consistent width */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* Responsive breakpoints */
  @media (max-width: 768px) {
    .container {
      padding: 0 0.5rem;
    }
  }
`,YP=m.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--background);
`,GP=m.main`
  flex: 1;
  width: 100%;
  padding-top: 80px; // Account for fixed header
  background-color: var(--background);
`,XP=({children:t})=>a.jsxs(YP,{children:[a.jsxs(SD,{children:[a.jsx("link",{rel:"icon",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDQtMTBUMTU6NTY6NDcrMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDQtMTBUMTU6NTY6NDcrMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTA0LTEwVDE1OjU2OjQ3KzA0OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgc3RFdnQ6d2hlbj0iMjAyNC0wNC0xMFQxNTo1Njo0NyswNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FAZTgBw54cr/upn/vCptEQA0xCMxM4ZGxI9cmQcA5sJgCsBJTjiletnMD6MqAFmyI04+Hbo7cQ8A0GYMpgDM2cxJ1cvi+Fuql4X3VAFYmP0xPYL+KKZHUSdDAYAkDKYANMzMadXL4vgTAIZVgPw5NoS+8cOboQBAlhlMAUjulBOrJ46sAGTXjojYHcffCn3SiVAAoB0YTAFoKSeMq8d+rArvrALUyyMxPYLuDiMoAJBTBlMA2trMswAXx/Tp1SVxfGj1NADQ7k68Cv96TA+gL/hIEgDA2RlMAeAUJ4ysl0XEQEy/vzoQngkA0nlh5ofxEwCgwQymAFAnJzwXcGxwXXXCf784YRqQDcdGz2NX3o/9d9feAQAyxGAKABlxwuAaMf2EQMz88ZIwukJqx8bO12P6lGfE9CnPCIMnAEBbMZgCQBs6ZXw99rRAxPTzAhGeGKD97YiIYyPmj2b+czSOj52uswMAcFoGUwBgzsql6okj7JI4eXw9dir2xD/2kS0ijn+E6JjXT/njY1fUIyJiaHjw4QAAgCYzmAIALa9cqq4/y18+21875tSRd66uWsA/e6JHFvDPnjo+nskZR0gDJQAARPz/FWHRF6/F5pIAAAAASUVORK5CYII="}),a.jsx("link",{rel:"icon",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDQtMTBUMTU6NTY6NDcrMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDQtMTBUMTU6NTY6NDcrMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTA0LTEwVDE1OjU2OjQ3KzA0OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgc3RFdnQ6d2hlbj0iMjAyNC0wNC0xMFQxNTo1Njo0NyswNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FAZTgBw54cr/upn/vCptEQA0xCMxM4ZGxI9cmQcA5sJgCsBJTjiletnMD6MqAFmyI04+Hbo7cQ8A0GYMpgDM2cxJ1cvi+Fuql4X3VAFYmP0xPYL+KKZHUSdDAYAkDKYANMzMadXL4vgTAIZVgPw5NoS+8cOboQBAlhlMAUjulBOrJ46sAGTXjojYHcffCn3SiVAAoB0YTAFoKSeMq8d+rArvrALUyyMxPYLuDiMoAJBTBlMA2trMswAXx/Tp1SVxfGj1NADQ7k68Cv96TA+gL/hIEgDA2RlMAeAUJ4ysl0XEQEy/vzoQngkA0nlh5ofxEwCgwQymAFAnJzwXcGxwXXXCf784YRqQDcdGz2NX3o/9d9feAQAyxGAKABlxwuAaMf2EQMz88ZIwukJqx8bO12P6lGfE9CnPCIMnAEBbMZgCQBs6ZXw99rRAxPTzAhGeGKD97YiIYyPmj2b+czSOj52uswMAcFoGUwBgzsql6okj7JI4eXw9dir2xD/2kS0ijn+E6JjXT/njY1fUIyJiaHjw4QAAgCYzmAIALa9cqq4/y18+21875tSRd66uWsA/e6JHFvDPnjo+nskZR0gDJQAARPz/FWHRF6/F5pIAAAAASUVORK5CYII="}),a.jsx("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),a.jsx("link",{rel:"shortcut icon",href:"/favicon.ico"})]}),a.jsx(HP,{}),a.jsx(i5,{}),a.jsx(GP,{children:t})]}),p1=T.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Hp=T.createContext({}),Yp=T.createContext(null),Gp=typeof document<"u",gl=Gp?T.useLayoutEffect:T.useEffect,n5=T.createContext({strict:!1}),f1=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),ZP="framerAppearId",r5="data-"+f1(ZP);function qP(t,e,i,n){const{visualElement:r}=T.useContext(Hp),s=T.useContext(n5),o=T.useContext(Yp),l=T.useContext(p1).reducedMotion,c=T.useRef();n=n||s.renderer,!c.current&&n&&(c.current=n(t,{visualState:e,parent:r,props:i,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:l}));const d=c.current;T.useInsertionEffect(()=>{d&&d.update(i,o)});const u=T.useRef(!!(i[r5]&&!window.HandoffComplete));return gl(()=>{d&&(d.render(),u.current&&d.animationState&&d.animationState.animateChanges())}),T.useEffect(()=>{d&&(d.updateFeatures(),!u.current&&d.animationState&&d.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),d}function va(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function QP(t,e,i){return T.useCallback(n=>{n&&t.mount&&t.mount(n),e&&(n?e.mount(n):e.unmount()),i&&(typeof i=="function"?i(n):va(i)&&(i.current=n))},[e])}function ed(t){return typeof t=="string"||Array.isArray(t)}function Xp(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const m1=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],g1=["initial",...m1];function Zp(t){return Xp(t.animate)||g1.some(e=>ed(t[e]))}function s5(t){return!!(Zp(t)||t.variants)}function KP(t,e){if(Zp(t)){const{initial:i,animate:n}=t;return{initial:i===!1||ed(i)?i:void 0,animate:ed(n)?n:void 0}}return t.inherit!==!1?e:{}}function JP(t){const{initial:e,animate:i}=KP(t,T.useContext(Hp));return T.useMemo(()=>({initial:e,animate:i}),[Jy(e),Jy(i)])}function Jy(t){return Array.isArray(t)?t.join(" "):t}const ev={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},td={};for(const t in ev)td[t]={isEnabled:e=>ev[t].some(i=>!!e[i])};function eT(t){for(const e in t)td[e]={...td[e],...t[e]}}const x1=T.createContext({}),o5=T.createContext({}),tT=Symbol.for("motionComponentSymbol");function iT({preloadedFeatures:t,createVisualElement:e,useRender:i,useVisualState:n,Component:r}){t&&eT(t);function s(l,c){let d;const u={...T.useContext(p1),...l,layoutId:nT(l)},{isStatic:p}=u,f=JP(l),g=n(l,p);if(!p&&Gp){f.visualElement=qP(r,g,u,e);const v=T.useContext(o5),w=T.useContext(n5).strict;f.visualElement&&(d=f.visualElement.loadFeatures(u,w,t,v))}return T.createElement(Hp.Provider,{value:f},d&&f.visualElement?T.createElement(d,{visualElement:f.visualElement,...u}):null,i(r,l,QP(g,f.visualElement,c),g,p,f.visualElement))}const o=T.forwardRef(s);return o[tT]=r,o}function nT({layoutId:t}){const e=T.useContext(x1).id;return e&&t!==void 0?e+"-"+t:t}function rT(t){function e(n,r={}){return iT(t(n,r))}if(typeof Proxy>"u")return e;const i=new Map;return new Proxy(e,{get:(n,r)=>(i.has(r)||i.set(r,e(r)),i.get(r))})}const sT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function w1(t){return typeof t!="string"||t.includes("-")?!1:!!(sT.indexOf(t)>-1||/[A-Z]/.test(t))}const Qh={};function oT(t){Object.assign(Qh,t)}const vd=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ro=new Set(vd);function a5(t,{layout:e,layoutId:i}){return Ro.has(t)||t.startsWith("origin")||(e||i!==void 0)&&(!!Qh[t]||t==="opacity")}const ki=t=>!!(t&&t.getVelocity),aT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},lT=vd.length;function cT(t,{enableHardwareAcceleration:e=!0,allowTransformNone:i=!0},n,r){let s="";for(let o=0;o<lT;o++){const l=vd[o];if(t[l]!==void 0){const c=aT[l]||l;s+=`${c}(${t[l]}) `}}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),r?s=r(t,n?"":s):i&&n&&(s="none"),s}const l5=t=>e=>typeof e=="string"&&e.startsWith(t),c5=l5("--"),dg=l5("var(--"),dT=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,uT=(t,e)=>e&&typeof t=="number"?e.transform(t):t,bs=(t,e,i)=>Math.min(Math.max(i,t),e),Lo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},pc={...Lo,transform:t=>bs(0,1,t)},Kd={...Lo,default:1},fc=t=>Math.round(t*1e5)/1e5,qp=/(-)?([\d]*\.?[\d])+/g,d5=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,hT=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function bd(t){return typeof t=="string"}const kd=t=>({test:e=>bd(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),$r=kd("deg"),Hn=kd("%"),K=kd("px"),pT=kd("vh"),fT=kd("vw"),tv={...Hn,parse:t=>Hn.parse(t)/100,transform:t=>Hn.transform(t*100)},iv={...Lo,transform:Math.round},u5={borderWidth:K,borderTopWidth:K,borderRightWidth:K,borderBottomWidth:K,borderLeftWidth:K,borderRadius:K,radius:K,borderTopLeftRadius:K,borderTopRightRadius:K,borderBottomRightRadius:K,borderBottomLeftRadius:K,width:K,maxWidth:K,height:K,maxHeight:K,size:K,top:K,right:K,bottom:K,left:K,padding:K,paddingTop:K,paddingRight:K,paddingBottom:K,paddingLeft:K,margin:K,marginTop:K,marginRight:K,marginBottom:K,marginLeft:K,rotate:$r,rotateX:$r,rotateY:$r,rotateZ:$r,scale:Kd,scaleX:Kd,scaleY:Kd,scaleZ:Kd,skew:$r,skewX:$r,skewY:$r,distance:K,translateX:K,translateY:K,translateZ:K,x:K,y:K,z:K,perspective:K,transformPerspective:K,opacity:pc,originX:tv,originY:tv,originZ:K,zIndex:iv,fillOpacity:pc,strokeOpacity:pc,numOctaves:iv};function y1(t,e,i,n){const{style:r,vars:s,transform:o,transformOrigin:l}=t;let c=!1,d=!1,u=!0;for(const p in e){const f=e[p];if(c5(p)){s[p]=f;continue}const g=u5[p],v=uT(f,g);if(Ro.has(p)){if(c=!0,o[p]=v,!u)continue;f!==(g.default||0)&&(u=!1)}else p.startsWith("origin")?(d=!0,l[p]=v):r[p]=v}if(e.transform||(c||n?r.transform=cT(t.transform,i,u,n):r.transform&&(r.transform="none")),d){const{originX:p="50%",originY:f="50%",originZ:g=0}=l;r.transformOrigin=`${p} ${f} ${g}`}}const v1=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function h5(t,e,i){for(const n in e)!ki(e[n])&&!a5(n,i)&&(t[n]=e[n])}function mT({transformTemplate:t},e,i){return T.useMemo(()=>{const n=v1();return y1(n,e,{enableHardwareAcceleration:!i},t),Object.assign({},n.vars,n.style)},[e])}function gT(t,e,i){const n=t.style||{},r={};return h5(r,n,t),Object.assign(r,mT(t,e,i)),t.transformValues?t.transformValues(r):r}function xT(t,e,i){const n={},r=gT(t,e,i);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n}const wT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Kh(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||wT.has(t)}let p5=t=>!Kh(t);function yT(t){t&&(p5=e=>e.startsWith("on")?!Kh(e):t(e))}try{yT(require("@emotion/is-prop-valid").default)}catch{}function vT(t,e,i){const n={};for(const r in t)r==="values"&&typeof t.values=="object"||(p5(r)||i===!0&&Kh(r)||!e&&!Kh(r)||t.draggable&&r.startsWith("onDrag"))&&(n[r]=t[r]);return n}function nv(t,e,i){return typeof t=="string"?t:K.transform(e+i*t)}function bT(t,e,i){const n=nv(e,t.x,t.width),r=nv(i,t.y,t.height);return`${n} ${r}`}const kT={offset:"stroke-dashoffset",array:"stroke-dasharray"},jT={offset:"strokeDashoffset",array:"strokeDasharray"};function DT(t,e,i=1,n=0,r=!0){t.pathLength=1;const s=r?kT:jT;t[s.offset]=K.transform(-n);const o=K.transform(e),l=K.transform(i);t[s.array]=`${o} ${l}`}function b1(t,{attrX:e,attrY:i,attrScale:n,originX:r,originY:s,pathLength:o,pathSpacing:l=1,pathOffset:c=0,...d},u,p,f){if(y1(t,d,u,f),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:g,style:v,dimensions:w}=t;g.transform&&(w&&(v.transform=g.transform),delete g.transform),w&&(r!==void 0||s!==void 0||v.transform)&&(v.transformOrigin=bT(w,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(g.x=e),i!==void 0&&(g.y=i),n!==void 0&&(g.scale=n),o!==void 0&&DT(g,o,l,c,!1)}const f5=()=>({...v1(),attrs:{}}),k1=t=>typeof t=="string"&&t.toLowerCase()==="svg";function ST(t,e,i,n){const r=T.useMemo(()=>{const s=f5();return b1(s,e,{enableHardwareAcceleration:!1},k1(n),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};h5(s,t.style,t),r.style={...s,...r.style}}return r}function _T(t=!1){return(i,n,r,{latestValues:s},o)=>{const c=(w1(i)?ST:xT)(n,s,o,i),u={...vT(n,typeof i=="string",t),...c,ref:r},{children:p}=n,f=T.useMemo(()=>ki(p)?p.get():p,[p]);return T.createElement(i,{...u,children:f})}}function m5(t,{style:e,vars:i},n,r){Object.assign(t.style,e,r&&r.getProjectionStyles(n));for(const s in i)t.style.setProperty(s,i[s])}const g5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function x5(t,e,i,n){m5(t,e,void 0,n);for(const r in e.attrs)t.setAttribute(g5.has(r)?r:f1(r),e.attrs[r])}function j1(t,e){const{style:i}=t,n={};for(const r in i)(ki(i[r])||e.style&&ki(e.style[r])||a5(r,t))&&(n[r]=i[r]);return n}function w5(t,e){const i=j1(t,e);for(const n in t)if(ki(t[n])||ki(e[n])){const r=vd.indexOf(n)!==-1?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n;i[r]=t[n]}return i}function D1(t,e,i,n={},r={}){return typeof e=="function"&&(e=e(i!==void 0?i:t.custom,n,r)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(i!==void 0?i:t.custom,n,r)),e}function xl(t){const e=T.useRef(null);return e.current===null&&(e.current=t()),e.current}const Jh=t=>Array.isArray(t),CT=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),PT=t=>Jh(t)?t[t.length-1]||0:t;function oh(t){const e=ki(t)?t.get():t;return CT(e)?e.toValue():e}function TT({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:i},n,r,s){const o={latestValues:ET(n,r,s,t),renderState:e()};return i&&(o.mount=l=>i(n,l,o)),o}const y5=t=>(e,i)=>{const n=T.useContext(Hp),r=T.useContext(Yp),s=()=>TT(t,e,n,r);return i?s():xl(s)};function ET(t,e,i,n){const r={},s=n(t,{});for(const f in s)r[f]=oh(s[f]);let{initial:o,animate:l}=t;const c=Zp(t),d=s5(t);e&&d&&!c&&t.inherit!==!1&&(o===void 0&&(o=e.initial),l===void 0&&(l=e.animate));let u=i?i.initial===!1:!1;u=u||o===!1;const p=u?l:o;return p&&typeof p!="boolean"&&!Xp(p)&&(Array.isArray(p)?p:[p]).forEach(g=>{const v=D1(t,g);if(!v)return;const{transitionEnd:w,transition:S,...j}=v;for(const b in j){let y=j[b];if(Array.isArray(y)){const h=u?y.length-1:0;y=y[h]}y!==null&&(r[b]=y)}for(const b in w)r[b]=w[b]}),r}const Ze=t=>t;class rv{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const i=this.order.indexOf(e);i!==-1&&(this.order.splice(i,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function IT(t){let e=new rv,i=new rv,n=0,r=!1,s=!1;const o=new WeakSet,l={schedule:(c,d=!1,u=!1)=>{const p=u&&r,f=p?e:i;return d&&o.add(c),f.add(c)&&p&&r&&(n=e.order.length),c},cancel:c=>{i.remove(c),o.delete(c)},process:c=>{if(r){s=!0;return}if(r=!0,[e,i]=[i,e],i.clear(),n=e.order.length,n)for(let d=0;d<n;d++){const u=e.order[d];u(c),o.has(u)&&(l.schedule(u),t())}r=!1,s&&(s=!1,l.process(c))}};return l}const Jd=["prepare","read","update","preRender","render","postRender"],AT=40;function MT(t,e){let i=!1,n=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=Jd.reduce((p,f)=>(p[f]=IT(()=>i=!0),p),{}),o=p=>s[p].process(r),l=()=>{const p=performance.now();i=!1,r.delta=n?1e3/60:Math.max(Math.min(p-r.timestamp,AT),1),r.timestamp=p,r.isProcessing=!0,Jd.forEach(o),r.isProcessing=!1,i&&e&&(n=!1,t(l))},c=()=>{i=!0,n=!0,r.isProcessing||t(l)};return{schedule:Jd.reduce((p,f)=>{const g=s[f];return p[f]=(v,w=!1,S=!1)=>(i||c(),g.schedule(v,w,S)),p},{}),cancel:p=>Jd.forEach(f=>s[f].cancel(p)),state:r,steps:s}}const{schedule:ye,cancel:Pn,state:Mt,steps:Uf}=MT(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ze,!0),zT={useVisualState:y5({scrapeMotionValuesFromProps:w5,createRenderState:f5,onMount:(t,e,{renderState:i,latestValues:n})=>{ye.read(()=>{try{i.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{i.dimensions={x:0,y:0,width:0,height:0}}}),ye.render(()=>{b1(i,n,{enableHardwareAcceleration:!1},k1(e.tagName),t.transformTemplate),x5(e,i)})}})},FT={useVisualState:y5({scrapeMotionValuesFromProps:j1,createRenderState:v1})};function RT(t,{forwardMotionProps:e=!1},i,n){return{...w1(t)?zT:FT,preloadedFeatures:i,useRender:_T(e),createVisualElement:n,Component:t}}function fr(t,e,i,n={passive:!0}){return t.addEventListener(e,i,n),()=>t.removeEventListener(e,i)}const v5=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Qp(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const LT=t=>e=>v5(e)&&t(e,Qp(e));function xr(t,e,i,n){return fr(t,e,LT(i),n)}const OT=(t,e)=>i=>e(t(i)),ps=(...t)=>t.reduce(OT);function b5(t){let e=null;return()=>{const i=()=>{e=null};return e===null?(e=t,i):!1}}const sv=b5("dragHorizontal"),ov=b5("dragVertical");function k5(t){let e=!1;if(t==="y")e=ov();else if(t==="x")e=sv();else{const i=sv(),n=ov();i&&n?e=()=>{i(),n()}:(i&&i(),n&&n())}return e}function j5(){const t=k5(!0);return t?(t(),!1):!0}class Ts{constructor(e){this.isMounted=!1,this.node=e}update(){}}function av(t,e){const i="pointer"+(e?"enter":"leave"),n="onHover"+(e?"Start":"End"),r=(s,o)=>{if(s.pointerType==="touch"||j5())return;const l=t.getProps();t.animationState&&l.whileHover&&t.animationState.setActive("whileHover",e),l[n]&&ye.update(()=>l[n](s,o))};return xr(t.current,i,r,{passive:!t.getProps()[n]})}class $T extends Ts{mount(){this.unmount=ps(av(this.node,!0),av(this.node,!1))}unmount(){}}class BT extends Ts{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ps(fr(this.node.current,"focus",()=>this.onFocus()),fr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const D5=(t,e)=>e?t===e?!0:D5(t,e.parentElement):!1;function Hf(t,e){if(!e)return;const i=new PointerEvent("pointer"+t);e(i,Qp(i))}class NT extends Ts{constructor(){super(...arguments),this.removeStartListeners=Ze,this.removeEndListeners=Ze,this.removeAccessibleListeners=Ze,this.startPointerPress=(e,i)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),s=xr(window,"pointerup",(l,c)=>{if(!this.checkPressEnd())return;const{onTap:d,onTapCancel:u,globalTapTarget:p}=this.node.getProps();ye.update(()=>{!p&&!D5(this.node.current,l.target)?u&&u(l,c):d&&d(l,c)})},{passive:!(n.onTap||n.onPointerUp)}),o=xr(window,"pointercancel",(l,c)=>this.cancelPress(l,c),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=ps(s,o),this.startPress(e,i)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=l=>{l.key!=="Enter"||!this.checkPressEnd()||Hf("up",(c,d)=>{const{onTap:u}=this.node.getProps();u&&ye.update(()=>u(c,d))})};this.removeEndListeners(),this.removeEndListeners=fr(this.node.current,"keyup",o),Hf("down",(l,c)=>{this.startPress(l,c)})},i=fr(this.node.current,"keydown",e),n=()=>{this.isPressing&&Hf("cancel",(s,o)=>this.cancelPress(s,o))},r=fr(this.node.current,"blur",n);this.removeAccessibleListeners=ps(i,r)}}startPress(e,i){this.isPressing=!0;const{onTapStart:n,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&ye.update(()=>n(e,i))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!j5()}cancelPress(e,i){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&ye.update(()=>n(e,i))}mount(){const e=this.node.getProps(),i=xr(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=fr(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=ps(i,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const ug=new WeakMap,Yf=new WeakMap,VT=t=>{const e=ug.get(t.target);e&&e(t)},WT=t=>{t.forEach(VT)};function UT({root:t,...e}){const i=t||document;Yf.has(i)||Yf.set(i,{});const n=Yf.get(i),r=JSON.stringify(e);return n[r]||(n[r]=new IntersectionObserver(WT,{root:t,...e})),n[r]}function HT(t,e,i){const n=UT(e);return ug.set(t,i),n.observe(t),()=>{ug.delete(t),n.unobserve(t)}}const YT={some:0,all:1};class GT extends Ts{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:i,margin:n,amount:r="some",once:s}=e,o={root:i?i.current:void 0,rootMargin:n,threshold:typeof r=="number"?r:YT[r]},l=c=>{const{isIntersecting:d}=c;if(this.isInView===d||(this.isInView=d,s&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:u,onViewportLeave:p}=this.node.getProps(),f=d?u:p;f&&f(c)};return HT(this.node.current,o,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:i}=this.node;["amount","margin","root"].some(XT(e,i))&&this.startObserver()}unmount(){}}function XT({viewport:t={}},{viewport:e={}}={}){return i=>t[i]!==e[i]}const ZT={inView:{Feature:GT},tap:{Feature:NT},focus:{Feature:BT},hover:{Feature:$T}};function S5(t,e){if(!Array.isArray(e))return!1;const i=e.length;if(i!==t.length)return!1;for(let n=0;n<i;n++)if(e[n]!==t[n])return!1;return!0}function qT(t){const e={};return t.values.forEach((i,n)=>e[n]=i.get()),e}function QT(t){const e={};return t.values.forEach((i,n)=>e[n]=i.getVelocity()),e}function Kp(t,e,i){const n=t.getProps();return D1(n,e,i!==void 0?i:n.custom,qT(t),QT(t))}let _5=Ze,Jp=Ze;const fs=t=>t*1e3,wr=t=>t/1e3,KT={current:!1},C5=t=>Array.isArray(t)&&typeof t[0]=="number";function P5(t){return!!(!t||typeof t=="string"&&T5[t]||C5(t)||Array.isArray(t)&&t.every(P5))}const Xl=([t,e,i,n])=>`cubic-bezier(${t}, ${e}, ${i}, ${n})`,T5={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Xl([0,.65,.55,1]),circOut:Xl([.55,0,1,.45]),backIn:Xl([.31,.01,.66,-.59]),backOut:Xl([.33,1.53,.69,.99])};function E5(t){if(t)return C5(t)?Xl(t):Array.isArray(t)?t.map(E5):T5[t]}function JT(t,e,i,{delay:n=0,duration:r,repeat:s=0,repeatType:o="loop",ease:l,times:c}={}){const d={[e]:i};c&&(d.offset=c);const u=E5(l);return Array.isArray(u)&&(d.easing=u),t.animate(d,{delay:n,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function eE(t,{repeat:e,repeatType:i="loop"}){const n=e&&i!=="loop"&&e%2===1?0:t.length-1;return t[n]}const I5=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t,tE=1e-7,iE=12;function nE(t,e,i,n,r){let s,o,l=0;do o=e+(i-e)/2,s=I5(o,n,r)-t,s>0?i=o:e=o;while(Math.abs(s)>tE&&++l<iE);return o}function jd(t,e,i,n){if(t===e&&i===n)return Ze;const r=s=>nE(s,0,1,t,i);return s=>s===0||s===1?s:I5(r(s),e,n)}const rE=jd(.42,0,1,1),sE=jd(0,0,.58,1),A5=jd(.42,0,.58,1),oE=t=>Array.isArray(t)&&typeof t[0]!="number",M5=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,z5=t=>e=>1-t(1-e),S1=t=>1-Math.sin(Math.acos(t)),F5=z5(S1),aE=M5(S1),R5=jd(.33,1.53,.69,.99),_1=z5(R5),lE=M5(_1),cE=t=>(t*=2)<1?.5*_1(t):.5*(2-Math.pow(2,-10*(t-1))),dE={linear:Ze,easeIn:rE,easeInOut:A5,easeOut:sE,circIn:S1,circInOut:aE,circOut:F5,backIn:_1,backInOut:lE,backOut:R5,anticipate:cE},lv=t=>{if(Array.isArray(t)){Jp(t.length===4);const[e,i,n,r]=t;return jd(e,i,n,r)}else if(typeof t=="string")return dE[t];return t},C1=(t,e)=>i=>!!(bd(i)&&hT.test(i)&&i.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(i,e)),L5=(t,e,i)=>n=>{if(!bd(n))return n;const[r,s,o,l]=n.match(qp);return{[t]:parseFloat(r),[e]:parseFloat(s),[i]:parseFloat(o),alpha:l!==void 0?parseFloat(l):1}},uE=t=>bs(0,255,t),Gf={...Lo,transform:t=>Math.round(uE(t))},so={test:C1("rgb","red"),parse:L5("red","green","blue"),transform:({red:t,green:e,blue:i,alpha:n=1})=>"rgba("+Gf.transform(t)+", "+Gf.transform(e)+", "+Gf.transform(i)+", "+fc(pc.transform(n))+")"};function hE(t){let e="",i="",n="",r="";return t.length>5?(e=t.substring(1,3),i=t.substring(3,5),n=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),i=t.substring(2,3),n=t.substring(3,4),r=t.substring(4,5),e+=e,i+=i,n+=n,r+=r),{red:parseInt(e,16),green:parseInt(i,16),blue:parseInt(n,16),alpha:r?parseInt(r,16)/255:1}}const hg={test:C1("#"),parse:hE,transform:so.transform},ba={test:C1("hsl","hue"),parse:L5("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:i,alpha:n=1})=>"hsla("+Math.round(t)+", "+Hn.transform(fc(e))+", "+Hn.transform(fc(i))+", "+fc(pc.transform(n))+")"},ei={test:t=>so.test(t)||hg.test(t)||ba.test(t),parse:t=>so.test(t)?so.parse(t):ba.test(t)?ba.parse(t):hg.parse(t),transform:t=>bd(t)?t:t.hasOwnProperty("red")?so.transform(t):ba.transform(t)},Ne=(t,e,i)=>-i*t+i*e+t;function Xf(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function pE({hue:t,saturation:e,lightness:i,alpha:n}){t/=360,e/=100,i/=100;let r=0,s=0,o=0;if(!e)r=s=o=i;else{const l=i<.5?i*(1+e):i+e-i*e,c=2*i-l;r=Xf(c,l,t+1/3),s=Xf(c,l,t),o=Xf(c,l,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:n}}const Zf=(t,e,i)=>{const n=t*t;return Math.sqrt(Math.max(0,i*(e*e-n)+n))},fE=[hg,so,ba],mE=t=>fE.find(e=>e.test(t));function cv(t){const e=mE(t);let i=e.parse(t);return e===ba&&(i=pE(i)),i}const O5=(t,e)=>{const i=cv(t),n=cv(e),r={...i};return s=>(r.red=Zf(i.red,n.red,s),r.green=Zf(i.green,n.green,s),r.blue=Zf(i.blue,n.blue,s),r.alpha=Ne(i.alpha,n.alpha,s),so.transform(r))};function gE(t){var e,i;return isNaN(t)&&bd(t)&&(((e=t.match(qp))===null||e===void 0?void 0:e.length)||0)+(((i=t.match(d5))===null||i===void 0?void 0:i.length)||0)>0}const $5={regex:dT,countKey:"Vars",token:"${v}",parse:Ze},B5={regex:d5,countKey:"Colors",token:"${c}",parse:ei.parse},N5={regex:qp,countKey:"Numbers",token:"${n}",parse:Lo.parse};function qf(t,{regex:e,countKey:i,token:n,parse:r}){const s=t.tokenised.match(e);s&&(t["num"+i]=s.length,t.tokenised=t.tokenised.replace(e,n),t.values.push(...s.map(r)))}function ep(t){const e=t.toString(),i={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return i.value.includes("var(--")&&qf(i,$5),qf(i,B5),qf(i,N5),i}function V5(t){return ep(t).values}function W5(t){const{values:e,numColors:i,numVars:n,tokenised:r}=ep(t),s=e.length;return o=>{let l=r;for(let c=0;c<s;c++)c<n?l=l.replace($5.token,o[c]):c<n+i?l=l.replace(B5.token,ei.transform(o[c])):l=l.replace(N5.token,fc(o[c]));return l}}const xE=t=>typeof t=="number"?0:t;function wE(t){const e=V5(t);return W5(t)(e.map(xE))}const ks={test:gE,parse:V5,createTransformer:W5,getAnimatableNone:wE},U5=(t,e)=>i=>`${i>0?e:t}`;function H5(t,e){return typeof t=="number"?i=>Ne(t,e,i):ei.test(t)?O5(t,e):t.startsWith("var(")?U5(t,e):G5(t,e)}const Y5=(t,e)=>{const i=[...t],n=i.length,r=t.map((s,o)=>H5(s,e[o]));return s=>{for(let o=0;o<n;o++)i[o]=r[o](s);return i}},yE=(t,e)=>{const i={...t,...e},n={};for(const r in i)t[r]!==void 0&&e[r]!==void 0&&(n[r]=H5(t[r],e[r]));return r=>{for(const s in n)i[s]=n[s](r);return i}},G5=(t,e)=>{const i=ks.createTransformer(e),n=ep(t),r=ep(e);return n.numVars===r.numVars&&n.numColors===r.numColors&&n.numNumbers>=r.numNumbers?ps(Y5(n.values,r.values),i):U5(t,e)},il=(t,e,i)=>{const n=e-t;return n===0?1:(i-t)/n},dv=(t,e)=>i=>Ne(t,e,i);function vE(t){return typeof t=="number"?dv:typeof t=="string"?ei.test(t)?O5:G5:Array.isArray(t)?Y5:typeof t=="object"?yE:dv}function bE(t,e,i){const n=[],r=i||vE(t[0]),s=t.length-1;for(let o=0;o<s;o++){let l=r(t[o],t[o+1]);if(e){const c=Array.isArray(e)?e[o]||Ze:e;l=ps(c,l)}n.push(l)}return n}function ef(t,e,{clamp:i=!0,ease:n,mixer:r}={}){const s=t.length;if(Jp(s===e.length),s===1)return()=>e[0];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=bE(e,n,r),l=o.length,c=d=>{let u=0;if(l>1)for(;u<t.length-2&&!(d<t[u+1]);u++);const p=il(t[u],t[u+1],d);return o[u](p)};return i?d=>c(bs(t[0],t[s-1],d)):c}function kE(t,e){const i=t[t.length-1];for(let n=1;n<=e;n++){const r=il(0,e,n);t.push(Ne(i,1,r))}}function X5(t){const e=[0];return kE(e,t.length-1),e}function jE(t,e){return t.map(i=>i*e)}function DE(t,e){return t.map(()=>e||A5).splice(0,t.length-1)}function tp({duration:t=300,keyframes:e,times:i,ease:n="easeInOut"}){const r=oE(n)?n.map(lv):lv(n),s={done:!1,value:e[0]},o=jE(i&&i.length===e.length?i:X5(e),t),l=ef(o,e,{ease:Array.isArray(r)?r:DE(e,r)});return{calculatedDuration:t,next:c=>(s.value=l(c),s.done=c>=t,s)}}function P1(t,e){return e?t*(1e3/e):0}const SE=5;function Z5(t,e,i){const n=Math.max(e-SE,0);return P1(i-t(n),e-n)}const Qf=.001,_E=.01,uv=10,CE=.05,PE=1;function TE({duration:t=800,bounce:e=.25,velocity:i=0,mass:n=1}){let r,s;_5(t<=fs(uv));let o=1-e;o=bs(CE,PE,o),t=bs(_E,uv,wr(t)),o<1?(r=d=>{const u=d*o,p=u*t,f=u-i,g=pg(d,o),v=Math.exp(-p);return Qf-f/g*v},s=d=>{const p=d*o*t,f=p*i+i,g=Math.pow(o,2)*Math.pow(d,2)*t,v=Math.exp(-p),w=pg(Math.pow(d,2),o);return(-r(d)+Qf>0?-1:1)*((f-g)*v)/w}):(r=d=>{const u=Math.exp(-d*t),p=(d-i)*t+1;return-Qf+u*p},s=d=>{const u=Math.exp(-d*t),p=(i-d)*(t*t);return u*p});const l=5/t,c=IE(r,s,l);if(t=fs(t),isNaN(c))return{stiffness:100,damping:10,duration:t};{const d=Math.pow(c,2)*n;return{stiffness:d,damping:o*2*Math.sqrt(n*d),duration:t}}}const EE=12;function IE(t,e,i){let n=i;for(let r=1;r<EE;r++)n=n-t(n)/e(n);return n}function pg(t,e){return t*Math.sqrt(1-e*e)}const AE=["duration","bounce"],ME=["stiffness","damping","mass"];function hv(t,e){return e.some(i=>t[i]!==void 0)}function zE(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!hv(t,ME)&&hv(t,AE)){const i=TE(t);e={...e,...i,mass:1},e.isResolvedFromDuration=!0}return e}function q5({keyframes:t,restDelta:e,restSpeed:i,...n}){const r=t[0],s=t[t.length-1],o={done:!1,value:r},{stiffness:l,damping:c,mass:d,duration:u,velocity:p,isResolvedFromDuration:f}=zE({...n,velocity:-wr(n.velocity||0)}),g=p||0,v=c/(2*Math.sqrt(l*d)),w=s-r,S=wr(Math.sqrt(l/d)),j=Math.abs(w)<5;i||(i=j?.01:2),e||(e=j?.005:.5);let b;if(v<1){const y=pg(S,v);b=h=>{const x=Math.exp(-v*S*h);return s-x*((g+v*S*w)/y*Math.sin(y*h)+w*Math.cos(y*h))}}else if(v===1)b=y=>s-Math.exp(-S*y)*(w+(g+S*w)*y);else{const y=S*Math.sqrt(v*v-1);b=h=>{const x=Math.exp(-v*S*h),k=Math.min(y*h,300);return s-x*((g+v*S*w)*Math.sinh(k)+y*w*Math.cosh(k))/y}}return{calculatedDuration:f&&u||null,next:y=>{const h=b(y);if(f)o.done=y>=u;else{let x=g;y!==0&&(v<1?x=Z5(b,y,h):x=0);const k=Math.abs(x)<=i,D=Math.abs(s-h)<=e;o.done=k&&D}return o.value=o.done?s:h,o}}}function pv({keyframes:t,velocity:e=0,power:i=.8,timeConstant:n=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:l,max:c,restDelta:d=.5,restSpeed:u}){const p=t[0],f={done:!1,value:p},g=_=>l!==void 0&&_<l||c!==void 0&&_>c,v=_=>l===void 0?c:c===void 0||Math.abs(l-_)<Math.abs(c-_)?l:c;let w=i*e;const S=p+w,j=o===void 0?S:o(S);j!==S&&(w=j-p);const b=_=>-w*Math.exp(-_/n),y=_=>j+b(_),h=_=>{const C=b(_),E=y(_);f.done=Math.abs(C)<=d,f.value=f.done?j:E};let x,k;const D=_=>{g(f.value)&&(x=_,k=q5({keyframes:[f.value,v(f.value)],velocity:Z5(y,_,f.value),damping:r,stiffness:s,restDelta:d,restSpeed:u}))};return D(0),{calculatedDuration:null,next:_=>{let C=!1;return!k&&x===void 0&&(C=!0,h(_),D(_)),x!==void 0&&_>x?k.next(_-x):(!C&&h(_),f)}}}const FE=t=>{const e=({timestamp:i})=>t(i);return{start:()=>ye.update(e,!0),stop:()=>Pn(e),now:()=>Mt.isProcessing?Mt.timestamp:performance.now()}},fv=2e4;function mv(t){let e=0;const i=50;let n=t.next(e);for(;!n.done&&e<fv;)e+=i,n=t.next(e);return e>=fv?1/0:e}const RE={decay:pv,inertia:pv,tween:tp,keyframes:tp,spring:q5};function ip({autoplay:t=!0,delay:e=0,driver:i=FE,keyframes:n,type:r="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:l="loop",onPlay:c,onStop:d,onComplete:u,onUpdate:p,...f}){let g=1,v=!1,w,S;const j=()=>{S=new Promise(R=>{w=R})};j();let b;const y=RE[r]||tp;let h;y!==tp&&typeof n[0]!="number"&&(h=ef([0,100],n,{clamp:!1}),n=[0,100]);const x=y({...f,keyframes:n});let k;l==="mirror"&&(k=y({...f,keyframes:[...n].reverse(),velocity:-(f.velocity||0)}));let D="idle",_=null,C=null,E=null;x.calculatedDuration===null&&s&&(x.calculatedDuration=mv(x));const{calculatedDuration:z}=x;let A=1/0,L=1/0;z!==null&&(A=z+o,L=A*(s+1)-o);let O=0;const W=R=>{if(C===null)return;g>0&&(C=Math.min(C,R)),g<0&&(C=Math.min(R-L/g,C)),_!==null?O=_:O=Math.round(R-C)*g;const U=O-e*(g>=0?1:-1),ne=g>=0?U<0:U>L;O=Math.max(U,0),D==="finished"&&_===null&&(O=L);let Z=O,fe=x;if(s){const je=Math.min(O,L)/A;let Tt=Math.floor(je),De=je%1;!De&&je>=1&&(De=1),De===1&&Tt--,Tt=Math.min(Tt,s+1),!!(Tt%2)&&(l==="reverse"?(De=1-De,o&&(De-=o/A)):l==="mirror"&&(fe=k)),Z=bs(0,1,De)*A}const ue=ne?{done:!1,value:n[0]}:fe.next(Z);h&&(ue.value=h(ue.value));let{done:me}=ue;!ne&&z!==null&&(me=g>=0?O>=L:O<=0);const Le=_===null&&(D==="finished"||D==="running"&&me);return p&&p(ue.value),Le&&I(),ue},V=()=>{b&&b.stop(),b=void 0},B=()=>{D="idle",V(),w(),j(),C=E=null},I=()=>{D="finished",u&&u(),V(),w()},M=()=>{if(v)return;b||(b=i(W));const R=b.now();c&&c(),_!==null?C=R-_:(!C||D==="finished")&&(C=R),D==="finished"&&j(),E=C,_=null,D="running",b.start()};t&&M();const P={then(R,U){return S.then(R,U)},get time(){return wr(O)},set time(R){R=fs(R),O=R,_!==null||!b||g===0?_=R:C=b.now()-R/g},get duration(){const R=x.calculatedDuration===null?mv(x):x.calculatedDuration;return wr(R)},get speed(){return g},set speed(R){R===g||!b||(g=R,P.time=wr(O))},get state(){return D},play:M,pause:()=>{D="paused",_=O},stop:()=>{v=!0,D!=="idle"&&(D="idle",d&&d(),B())},cancel:()=>{E!==null&&W(E),B()},complete:()=>{D="finished"},sample:R=>(C=0,W(R))};return P}function LE(t){let e;return()=>(e===void 0&&(e=t()),e)}const OE=LE(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),$E=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),eu=10,BE=2e4,NE=(t,e)=>e.type==="spring"||t==="backgroundColor"||!P5(e.ease);function VE(t,e,{onUpdate:i,onComplete:n,...r}){if(!(OE()&&$E.has(e)&&!r.repeatDelay&&r.repeatType!=="mirror"&&r.damping!==0&&r.type!=="inertia"))return!1;let o=!1,l,c,d=!1;const u=()=>{c=new Promise(y=>{l=y})};u();let{keyframes:p,duration:f=300,ease:g,times:v}=r;if(NE(e,r)){const y=ip({...r,repeat:0,delay:0});let h={done:!1,value:p[0]};const x=[];let k=0;for(;!h.done&&k<BE;)h=y.sample(k),x.push(h.value),k+=eu;v=void 0,p=x,f=k-eu,g="linear"}const w=JT(t.owner.current,e,p,{...r,duration:f,ease:g,times:v}),S=()=>{d=!1,w.cancel()},j=()=>{d=!0,ye.update(S),l(),u()};return w.onfinish=()=>{d||(t.set(eE(p,r)),n&&n(),j())},{then(y,h){return c.then(y,h)},attachTimeline(y){return w.timeline=y,w.onfinish=null,Ze},get time(){return wr(w.currentTime||0)},set time(y){w.currentTime=fs(y)},get speed(){return w.playbackRate},set speed(y){w.playbackRate=y},get duration(){return wr(f)},play:()=>{o||(w.play(),Pn(S))},pause:()=>w.pause(),stop:()=>{if(o=!0,w.playState==="idle")return;const{currentTime:y}=w;if(y){const h=ip({...r,autoplay:!1});t.setWithVelocity(h.sample(y-eu).value,h.sample(y).value,eu)}j()},complete:()=>{d||w.finish()},cancel:j}}function WE({keyframes:t,delay:e,onUpdate:i,onComplete:n}){const r=()=>(i&&i(t[t.length-1]),n&&n(),{time:0,speed:1,duration:0,play:Ze,pause:Ze,stop:Ze,then:s=>(s(),Promise.resolve()),cancel:Ze,complete:Ze});return e?ip({keyframes:[0,1],duration:0,delay:e,onComplete:r}):r()}const UE={type:"spring",stiffness:500,damping:25,restSpeed:10},HE=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),YE={type:"keyframes",duration:.8},GE={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},XE=(t,{keyframes:e})=>e.length>2?YE:Ro.has(t)?t.startsWith("scale")?HE(e[1]):UE:GE,fg=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ks.test(e)||e==="0")&&!e.startsWith("url(")),ZE=new Set(["brightness","contrast","saturate","opacity"]);function qE(t){const[e,i]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[n]=i.match(qp)||[];if(!n)return t;const r=i.replace(n,"");let s=ZE.has(e)?1:0;return n!==i&&(s*=100),e+"("+s+r+")"}const QE=/([a-z-]*)\(.*?\)/g,mg={...ks,getAnimatableNone:t=>{const e=t.match(QE);return e?e.map(qE).join(" "):t}},KE={...u5,color:ei,backgroundColor:ei,outlineColor:ei,fill:ei,stroke:ei,borderColor:ei,borderTopColor:ei,borderRightColor:ei,borderBottomColor:ei,borderLeftColor:ei,filter:mg,WebkitFilter:mg},T1=t=>KE[t];function Q5(t,e){let i=T1(t);return i!==mg&&(i=ks),i.getAnimatableNone?i.getAnimatableNone(e):void 0}const K5=t=>/^0[^.\s]+$/.test(t);function JE(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||K5(t)}function eI(t,e,i,n){const r=fg(e,i);let s;Array.isArray(i)?s=[...i]:s=[null,i];const o=n.from!==void 0?n.from:t.get();let l;const c=[];for(let d=0;d<s.length;d++)s[d]===null&&(s[d]=d===0?o:s[d-1]),JE(s[d])&&c.push(d),typeof s[d]=="string"&&s[d]!=="none"&&s[d]!=="0"&&(l=s[d]);if(r&&c.length&&l)for(let d=0;d<c.length;d++){const u=c[d];s[u]=Q5(e,l)}return s}function tI({when:t,delay:e,delayChildren:i,staggerChildren:n,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:l,from:c,elapsed:d,...u}){return!!Object.keys(u).length}function E1(t,e){return t[e]||t.default||t}const iI={skipAnimations:!1},I1=(t,e,i,n={})=>r=>{const s=E1(n,t)||{},o=s.delay||n.delay||0;let{elapsed:l=0}=n;l=l-fs(o);const c=eI(e,t,i,s),d=c[0],u=c[c.length-1],p=fg(t,d),f=fg(t,u);let g={keyframes:c,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-l,onUpdate:v=>{e.set(v),s.onUpdate&&s.onUpdate(v)},onComplete:()=>{r(),s.onComplete&&s.onComplete()}};if(tI(s)||(g={...g,...XE(t,g)}),g.duration&&(g.duration=fs(g.duration)),g.repeatDelay&&(g.repeatDelay=fs(g.repeatDelay)),!p||!f||KT.current||s.type===!1||iI.skipAnimations)return WE(g);if(!n.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const v=VE(e,t,g);if(v)return v}return ip(g)};function np(t){return!!(ki(t)&&t.add)}const J5=t=>/^\-?\d*\.?\d+$/.test(t);function A1(t,e){t.indexOf(e)===-1&&t.push(e)}function M1(t,e){const i=t.indexOf(e);i>-1&&t.splice(i,1)}class z1{constructor(){this.subscriptions=[]}add(e){return A1(this.subscriptions,e),()=>M1(this.subscriptions,e)}notify(e,i,n){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,i,n);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,i,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const nI=t=>!isNaN(parseFloat(t)),mc={current:void 0};class rI{constructor(e,i={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(n,r=!0)=>{this.prev=this.current,this.current=n;const{delta:s,timestamp:o}=Mt;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,ye.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ye.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{n!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=nI(this.current),this.owner=i.owner}onChange(e){return this.on("change",e)}on(e,i){this.events[e]||(this.events[e]=new z1);const n=this.events[e].add(i);return e==="change"?()=>{n(),ye.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,i){this.passiveEffect=e,this.stopPassiveEffect=i}set(e,i=!0){!i||!this.passiveEffect?this.updateAndNotify(e,i):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,i,n){this.set(i),this.prev=e,this.timeDelta=n}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return mc.current&&mc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?P1(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=e(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function jn(t,e){return new rI(t,e)}const e3=t=>e=>e.test(t),sI={test:t=>t==="auto",parse:t=>t},t3=[Lo,K,Hn,$r,fT,pT,sI],Al=t=>t3.find(e3(t)),oI=[...t3,ei,ks],aI=t=>oI.find(e3(t));function lI(t,e,i){t.hasValue(e)?t.getValue(e).set(i):t.addValue(e,jn(i))}function F1(t,e){const i=Kp(t,e);let{transitionEnd:n={},transition:r={},...s}=i?t.makeTargetAnimatable(i,!1):{};s={...s,...n};for(const o in s){const l=PT(s[o]);lI(t,o,l)}}function gg(t,e){[...e].reverse().forEach(n=>{const r=t.getVariant(n);r&&F1(t,r),t.variantChildren&&t.variantChildren.forEach(s=>{gg(s,e)})})}function cI(t,e){if(Array.isArray(e))return gg(t,e);if(typeof e=="string")return gg(t,[e]);F1(t,e)}function dI(t,e,i){var n,r;const s=Object.keys(e).filter(l=>!t.hasValue(l)),o=s.length;if(o)for(let l=0;l<o;l++){const c=s[l],d=e[c];let u=null;Array.isArray(d)&&(u=d[0]),u===null&&(u=(r=(n=i[c])!==null&&n!==void 0?n:t.readValue(c))!==null&&r!==void 0?r:e[c]),u!=null&&(typeof u=="string"&&(J5(u)||K5(u))?u=parseFloat(u):!aI(u)&&ks.test(d)&&(u=Q5(c,d)),t.addValue(c,jn(u,{owner:t})),i[c]===void 0&&(i[c]=u),u!==null&&t.setBaseTarget(c,u))}}function uI(t,e){return e?(e[t]||e.default||e).from:void 0}function hI(t,e,i){const n={};for(const r in t){const s=uI(r,e);if(s!==void 0)n[r]=s;else{const o=i.getValue(r);o&&(n[r]=o.get())}}return n}function pI({protectedKeys:t,needsAnimating:e},i){const n=t.hasOwnProperty(i)&&e[i]!==!0;return e[i]=!1,n}function fI(t,e){const i=t.get();if(Array.isArray(e)){for(let n=0;n<e.length;n++)if(e[n]!==i)return!0}else return i!==e}function i3(t,e,{delay:i=0,transitionOverride:n,type:r}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:o,...l}=t.makeTargetAnimatable(e);const c=t.getValue("willChange");n&&(s=n);const d=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const p in l){const f=t.getValue(p),g=l[p];if(!f||g===void 0||u&&pI(u,p))continue;const v={delay:i,elapsed:0,...E1(s||{},p)};if(window.HandoffAppearAnimations){const j=t.getProps()[r5];if(j){const b=window.HandoffAppearAnimations(j,p,f,ye);b!==null&&(v.elapsed=b,v.isHandoff=!0)}}let w=!v.isHandoff&&!fI(f,g);if(v.type==="spring"&&(f.getVelocity()||v.velocity)&&(w=!1),f.animation&&(w=!1),w)continue;f.start(I1(p,f,g,t.shouldReduceMotion&&Ro.has(p)?{type:!1}:v));const S=f.animation;np(c)&&(c.add(p),S.then(()=>c.remove(p))),d.push(S)}return o&&Promise.all(d).then(()=>{o&&F1(t,o)}),d}function xg(t,e,i={}){const n=Kp(t,e,i.custom);let{transition:r=t.getDefaultTransition()||{}}=n||{};i.transitionOverride&&(r=i.transitionOverride);const s=n?()=>Promise.all(i3(t,n,i)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:u,staggerDirection:p}=r;return mI(t,e,d+c,u,p,i)}:()=>Promise.resolve(),{when:l}=r;if(l){const[c,d]=l==="beforeChildren"?[s,o]:[o,s];return c().then(()=>d())}else return Promise.all([s(),o(i.delay)])}function mI(t,e,i=0,n=0,r=1,s){const o=[],l=(t.variantChildren.size-1)*n,c=r===1?(d=0)=>d*n:(d=0)=>l-d*n;return Array.from(t.variantChildren).sort(gI).forEach((d,u)=>{d.notify("AnimationStart",e),o.push(xg(d,e,{...s,delay:i+c(u)}).then(()=>d.notify("AnimationComplete",e)))}),Promise.all(o)}function gI(t,e){return t.sortNodePosition(e)}function n3(t,e,i={}){t.notify("AnimationStart",e);let n;if(Array.isArray(e)){const r=e.map(s=>xg(t,s,i));n=Promise.all(r)}else if(typeof e=="string")n=xg(t,e,i);else{const r=typeof e=="function"?Kp(t,e,i.custom):e;n=Promise.all(i3(t,r,i))}return n.then(()=>t.notify("AnimationComplete",e))}const xI=[...m1].reverse(),wI=m1.length;function yI(t){return e=>Promise.all(e.map(({animation:i,options:n})=>n3(t,i,n)))}function vI(t){let e=yI(t);const i=kI();let n=!0;const r=(c,d)=>{const u=Kp(t,d);if(u){const{transition:p,transitionEnd:f,...g}=u;c={...c,...g,...f}}return c};function s(c){e=c(t)}function o(c,d){const u=t.getProps(),p=t.getVariantContext(!0)||{},f=[],g=new Set;let v={},w=1/0;for(let j=0;j<wI;j++){const b=xI[j],y=i[b],h=u[b]!==void 0?u[b]:p[b],x=ed(h),k=b===d?y.isActive:null;k===!1&&(w=j);let D=h===p[b]&&h!==u[b]&&x;if(D&&n&&t.manuallyAnimateOnMount&&(D=!1),y.protectedKeys={...v},!y.isActive&&k===null||!h&&!y.prevProp||Xp(h)||typeof h=="boolean")continue;let C=bI(y.prevProp,h)||b===d&&y.isActive&&!D&&x||j>w&&x,E=!1;const z=Array.isArray(h)?h:[h];let A=z.reduce(r,{});k===!1&&(A={});const{prevResolvedValues:L={}}=y,O={...L,...A},W=V=>{C=!0,g.has(V)&&(E=!0,g.delete(V)),y.needsAnimating[V]=!0};for(const V in O){const B=A[V],I=L[V];if(v.hasOwnProperty(V))continue;let M=!1;Jh(B)&&Jh(I)?M=!S5(B,I):M=B!==I,M?B!==void 0?W(V):g.add(V):B!==void 0&&g.has(V)?W(V):y.protectedKeys[V]=!0}y.prevProp=h,y.prevResolvedValues=A,y.isActive&&(v={...v,...A}),n&&t.blockInitialAnimation&&(C=!1),C&&(!D||E)&&f.push(...z.map(V=>({animation:V,options:{type:b,...c}})))}if(g.size){const j={};g.forEach(b=>{const y=t.getBaseTarget(b);y!==void 0&&(j[b]=y)}),f.push({animation:j})}let S=!!f.length;return n&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(S=!1),n=!1,S?e(f):Promise.resolve()}function l(c,d,u){var p;if(i[c].isActive===d)return Promise.resolve();(p=t.variantChildren)===null||p===void 0||p.forEach(g=>{var v;return(v=g.animationState)===null||v===void 0?void 0:v.setActive(c,d)}),i[c].isActive=d;const f=o(u,c);for(const g in i)i[g].protectedKeys={};return f}return{animateChanges:o,setActive:l,setAnimateFunction:s,getState:()=>i}}function bI(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!S5(e,t):!1}function Os(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function kI(){return{animate:Os(!0),whileInView:Os(),whileHover:Os(),whileTap:Os(),whileDrag:Os(),whileFocus:Os(),exit:Os()}}class jI extends Ts{constructor(e){super(e),e.animationState||(e.animationState=vI(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Xp(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:i}=this.node.prevProps||{};e!==i&&this.updateAnimationControlsSubscription()}unmount(){}}let DI=0;class SI extends Ts{constructor(){super(...arguments),this.id=DI++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:i,custom:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const s=this.node.animationState.setActive("exit",!e,{custom:n??this.node.getProps().custom});i&&!e&&s.then(()=>i(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const _I={animation:{Feature:jI},exit:{Feature:SI}},gv=(t,e)=>Math.abs(t-e);function CI(t,e){const i=gv(t.x,e.x),n=gv(t.y,e.y);return Math.sqrt(i**2+n**2)}class r3{constructor(e,i,{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=Jf(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,g=CI(p.offset,{x:0,y:0})>=3;if(!f&&!g)return;const{point:v}=p,{timestamp:w}=Mt;this.history.push({...v,timestamp:w});const{onStart:S,onMove:j}=this.handlers;f||(S&&S(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),j&&j(this.lastMoveEvent,p)},this.handlePointerMove=(p,f)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=Kf(f,this.transformPagePoint),ye.update(this.updatePoint,!0)},this.handlePointerUp=(p,f)=>{this.end();const{onEnd:g,onSessionEnd:v,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Jf(p.type==="pointercancel"?this.lastMoveEventInfo:Kf(f,this.transformPagePoint),this.history);this.startEvent&&g&&g(p,S),v&&v(p,S)},!v5(e))return;this.dragSnapToOrigin=s,this.handlers=i,this.transformPagePoint=n,this.contextWindow=r||window;const o=Qp(e),l=Kf(o,this.transformPagePoint),{point:c}=l,{timestamp:d}=Mt;this.history=[{...c,timestamp:d}];const{onSessionStart:u}=i;u&&u(e,Jf(l,this.history)),this.removeListeners=ps(xr(this.contextWindow,"pointermove",this.handlePointerMove),xr(this.contextWindow,"pointerup",this.handlePointerUp),xr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Pn(this.updatePoint)}}function Kf(t,e){return e?{point:e(t.point)}:t}function xv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Jf({point:t},e){return{point:t,delta:xv(t,s3(e)),offset:xv(t,PI(e)),velocity:TI(e,.1)}}function PI(t){return t[0]}function s3(t){return t[t.length-1]}function TI(t,e){if(t.length<2)return{x:0,y:0};let i=t.length-1,n=null;const r=s3(t);for(;i>=0&&(n=t[i],!(r.timestamp-n.timestamp>fs(e)));)i--;if(!n)return{x:0,y:0};const s=wr(r.timestamp-n.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-n.x)/s,y:(r.y-n.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Bi(t){return t.max-t.min}function wg(t,e=0,i=.01){return Math.abs(t-e)<=i}function wv(t,e,i,n=.5){t.origin=n,t.originPoint=Ne(e.min,e.max,t.origin),t.scale=Bi(i)/Bi(e),(wg(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=Ne(i.min,i.max,t.origin)-t.originPoint,(wg(t.translate)||isNaN(t.translate))&&(t.translate=0)}function gc(t,e,i,n){wv(t.x,e.x,i.x,n?n.originX:void 0),wv(t.y,e.y,i.y,n?n.originY:void 0)}function yv(t,e,i){t.min=i.min+e.min,t.max=t.min+Bi(e)}function EI(t,e,i){yv(t.x,e.x,i.x),yv(t.y,e.y,i.y)}function vv(t,e,i){t.min=e.min-i.min,t.max=t.min+Bi(e)}function xc(t,e,i){vv(t.x,e.x,i.x),vv(t.y,e.y,i.y)}function II(t,{min:e,max:i},n){return e!==void 0&&t<e?t=n?Ne(e,t,n.min):Math.max(t,e):i!==void 0&&t>i&&(t=n?Ne(i,t,n.max):Math.min(t,i)),t}function bv(t,e,i){return{min:e!==void 0?t.min+e:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function AI(t,{top:e,left:i,bottom:n,right:r}){return{x:bv(t.x,i,r),y:bv(t.y,e,n)}}function kv(t,e){let i=e.min-t.min,n=e.max-t.max;return e.max-e.min<t.max-t.min&&([i,n]=[n,i]),{min:i,max:n}}function MI(t,e){return{x:kv(t.x,e.x),y:kv(t.y,e.y)}}function zI(t,e){let i=.5;const n=Bi(t),r=Bi(e);return r>n?i=il(e.min,e.max-n,t.min):n>r&&(i=il(t.min,t.max-r,e.min)),bs(0,1,i)}function FI(t,e){const i={};return e.min!==void 0&&(i.min=e.min-t.min),e.max!==void 0&&(i.max=e.max-t.min),i}const yg=.35;function RI(t=yg){return t===!1?t=0:t===!0&&(t=yg),{x:jv(t,"left","right"),y:jv(t,"top","bottom")}}function jv(t,e,i){return{min:Dv(t,e),max:Dv(t,i)}}function Dv(t,e){return typeof t=="number"?t:t[e]||0}const Sv=()=>({translate:0,scale:1,origin:0,originPoint:0}),ka=()=>({x:Sv(),y:Sv()}),_v=()=>({min:0,max:0}),at=()=>({x:_v(),y:_v()});function Gi(t){return[t("x"),t("y")]}function o3({top:t,left:e,right:i,bottom:n}){return{x:{min:e,max:i},y:{min:t,max:n}}}function LI({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function OI(t,e){if(!e)return t;const i=e({x:t.left,y:t.top}),n=e({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:n.y,right:n.x}}function e0(t){return t===void 0||t===1}function vg({scale:t,scaleX:e,scaleY:i}){return!e0(t)||!e0(e)||!e0(i)}function Xs(t){return vg(t)||a3(t)||t.z||t.rotate||t.rotateX||t.rotateY}function a3(t){return Cv(t.x)||Cv(t.y)}function Cv(t){return t&&t!=="0%"}function rp(t,e,i){const n=t-i,r=e*n;return i+r}function Pv(t,e,i,n,r){return r!==void 0&&(t=rp(t,r,n)),rp(t,i,n)+e}function bg(t,e=0,i=1,n,r){t.min=Pv(t.min,e,i,n,r),t.max=Pv(t.max,e,i,n,r)}function l3(t,{x:e,y:i}){bg(t.x,e.translate,e.scale,e.originPoint),bg(t.y,i.translate,i.scale,i.originPoint)}function $I(t,e,i,n=!1){const r=i.length;if(!r)return;e.x=e.y=1;let s,o;for(let l=0;l<r;l++){s=i[l],o=s.projectionDelta;const c=s.instance;c&&c.style&&c.style.display==="contents"||(n&&s.options.layoutScroll&&s.scroll&&s!==s.root&&ja(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,l3(t,o)),n&&Xs(s.latestValues)&&ja(t,s.latestValues))}e.x=Tv(e.x),e.y=Tv(e.y)}function Tv(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function Ur(t,e){t.min=t.min+e,t.max=t.max+e}function Ev(t,e,[i,n,r]){const s=e[r]!==void 0?e[r]:.5,o=Ne(t.min,t.max,s);bg(t,e[i],e[n],o,e.scale)}const BI=["x","scaleX","originX"],NI=["y","scaleY","originY"];function ja(t,e){Ev(t.x,e,BI),Ev(t.y,e,NI)}function c3(t,e){return o3(OI(t.getBoundingClientRect(),e))}function VI(t,e,i){const n=c3(t,i),{scroll:r}=e;return r&&(Ur(n.x,r.offset.x),Ur(n.y,r.offset.y)),n}const d3=({current:t})=>t?t.ownerDocument.defaultView:null,WI=new WeakMap;class UI{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=at(),this.visualElement=e}start(e,{snapToCursor:i=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:p}=this.getProps();p?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(Qp(u,"page").point)},s=(u,p)=>{const{drag:f,dragPropagation:g,onDragStart:v}=this.getProps();if(f&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=k5(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Gi(S=>{let j=this.getAxisMotionValue(S).get()||0;if(Hn.test(j)){const{projection:b}=this.visualElement;if(b&&b.layout){const y=b.layout.layoutBox[S];y&&(j=Bi(y)*(parseFloat(j)/100))}}this.originPoint[S]=j}),v&&ye.update(()=>v(u,p),!1,!0);const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},o=(u,p)=>{const{dragPropagation:f,dragDirectionLock:g,onDirectionLock:v,onDrag:w}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:S}=p;if(g&&this.currentDirection===null){this.currentDirection=HI(S),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",p.point,S),this.updateAxis("y",p.point,S),this.visualElement.render(),w&&w(u,p)},l=(u,p)=>this.stop(u,p),c=()=>Gi(u=>{var p;return this.getAnimationState(u)==="paused"&&((p=this.getAxisMotionValue(u).animation)===null||p===void 0?void 0:p.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new r3(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,contextWindow:d3(this.visualElement)})}stop(e,i){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=i;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&ye.update(()=>s(e,i))}cancel(){this.isDragging=!1;const{projection:e,animationState:i}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(e,i,n){const{drag:r}=this.getProps();if(!n||!tu(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(o=II(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:i,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;i&&va(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&r?this.constraints=AI(r.layoutBox,i):this.constraints=!1,this.elastic=RI(n),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Gi(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=FI(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:i}=this.getProps();if(!e||!va(e))return!1;const n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=VI(n,r.root,this.visualElement.getTransformPagePoint());let o=MI(r.layout.layoutBox,s);if(i){const l=i(LI(o));this.hasMutatedConstraints=!!l,l&&(o=o3(l))}return o}startAnimation(e){const{drag:i,dragMomentum:n,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},d=Gi(u=>{if(!tu(u,i,this.currentDirection))return;let p=c&&c[u]||{};o&&(p={min:0,max:0});const f=r?200:1e6,g=r?40:1e7,v={type:"inertia",velocity:n?e[u]:0,bounceStiffness:f,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...s,...p};return this.startAxisValueAnimation(u,v)});return Promise.all(d).then(l)}startAxisValueAnimation(e,i){const n=this.getAxisMotionValue(e);return n.start(I1(e,n,0,i))}stopAnimation(){Gi(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Gi(e=>{var i;return(i=this.getAxisMotionValue(e).animation)===null||i===void 0?void 0:i.pause()})}getAnimationState(e){var i;return(i=this.getAxisMotionValue(e).animation)===null||i===void 0?void 0:i.state}getAxisMotionValue(e){const i="_drag"+e.toUpperCase(),n=this.visualElement.getProps(),r=n[i];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Gi(i=>{const{drag:n}=this.getProps();if(!tu(i,n,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(i);if(r&&r.layout){const{min:o,max:l}=r.layout.layoutBox[i];s.set(e[i]-Ne(o,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:i}=this.getProps(),{projection:n}=this.visualElement;if(!va(i)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Gi(o=>{const l=this.getAxisMotionValue(o);if(l){const c=l.get();r[o]=zI({min:c,max:c},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Gi(o=>{if(!tu(o,e,null))return;const l=this.getAxisMotionValue(o),{min:c,max:d}=this.constraints[o];l.set(Ne(c,d,r[o]))})}addListeners(){if(!this.visualElement.current)return;WI.set(this.visualElement,this);const e=this.visualElement.current,i=xr(e,"pointerdown",c=>{const{drag:d,dragListener:u=!0}=this.getProps();d&&u&&this.start(c)}),n=()=>{const{dragConstraints:c}=this.getProps();va(c)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),n();const o=fr(window,"resize",()=>this.scalePositionWithinConstraints()),l=r.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d})=>{this.isDragging&&d&&(Gi(u=>{const p=this.getAxisMotionValue(u);p&&(this.originPoint[u]+=c[u].translate,p.set(p.get()+c[u].translate))}),this.visualElement.render())});return()=>{o(),i(),s(),l&&l()}}getProps(){const e=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=yg,dragMomentum:l=!0}=e;return{...e,drag:i,dragDirectionLock:n,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:l}}}function tu(t,e,i){return(e===!0||e===t)&&(i===null||i===t)}function HI(t,e=10){let i=null;return Math.abs(t.y)>e?i="y":Math.abs(t.x)>e&&(i="x"),i}class YI extends Ts{constructor(e){super(e),this.removeGroupControls=Ze,this.removeListeners=Ze,this.controls=new UI(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ze}unmount(){this.removeGroupControls(),this.removeListeners()}}const Iv=t=>(e,i)=>{t&&ye.update(()=>t(e,i))};class GI extends Ts{constructor(){super(...arguments),this.removePointerDownListener=Ze}onPointerDown(e){this.session=new r3(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:d3(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:i,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Iv(e),onStart:Iv(i),onMove:n,onEnd:(s,o)=>{delete this.session,r&&ye.update(()=>r(s,o))}}}mount(){this.removePointerDownListener=xr(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function XI(){const t=T.useContext(Yp);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:i,register:n}=t,r=T.useId();return T.useEffect(()=>n(r),[]),!e&&i?[!1,()=>i&&i(r)]:[!0]}const ah={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Av(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ml={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(K.test(t))t=parseFloat(t);else return t;const i=Av(t,e.target.x),n=Av(t,e.target.y);return`${i}% ${n}%`}},ZI={correct:(t,{treeScale:e,projectionDelta:i})=>{const n=t,r=ks.parse(t);if(r.length>5)return n;const s=ks.createTransformer(t),o=typeof r[0]!="number"?1:0,l=i.x.scale*e.x,c=i.y.scale*e.y;r[0+o]/=l,r[1+o]/=c;const d=Ne(l,c,.5);return typeof r[2+o]=="number"&&(r[2+o]/=d),typeof r[3+o]=="number"&&(r[3+o]/=d),s(r)}};class qI extends q.Component{componentDidMount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:n,layoutId:r}=this.props,{projection:s}=e;oT(QI),s&&(i.group&&i.group.add(s),n&&n.register&&r&&n.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),ah.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:i,visualElement:n,drag:r,isPresent:s}=this.props,o=n.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==i||i===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ye.postRender(()=>{const l=o.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function u3(t){const[e,i]=XI(),n=T.useContext(x1);return q.createElement(qI,{...t,layoutGroup:n,switchLayoutGroup:T.useContext(o5),isPresent:e,safeToRemove:i})}const QI={borderRadius:{...Ml,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ml,borderTopRightRadius:Ml,borderBottomLeftRadius:Ml,borderBottomRightRadius:Ml,boxShadow:ZI},h3=["TopLeft","TopRight","BottomLeft","BottomRight"],KI=h3.length,Mv=t=>typeof t=="string"?parseFloat(t):t,zv=t=>typeof t=="number"||K.test(t);function JI(t,e,i,n,r,s){r?(t.opacity=Ne(0,i.opacity!==void 0?i.opacity:1,e9(n)),t.opacityExit=Ne(e.opacity!==void 0?e.opacity:1,0,t9(n))):s&&(t.opacity=Ne(e.opacity!==void 0?e.opacity:1,i.opacity!==void 0?i.opacity:1,n));for(let o=0;o<KI;o++){const l=`border${h3[o]}Radius`;let c=Fv(e,l),d=Fv(i,l);if(c===void 0&&d===void 0)continue;c||(c=0),d||(d=0),c===0||d===0||zv(c)===zv(d)?(t[l]=Math.max(Ne(Mv(c),Mv(d),n),0),(Hn.test(d)||Hn.test(c))&&(t[l]+="%")):t[l]=d}(e.rotate||i.rotate)&&(t.rotate=Ne(e.rotate||0,i.rotate||0,n))}function Fv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const e9=p3(0,.5,F5),t9=p3(.5,.95,Ze);function p3(t,e,i){return n=>n<t?0:n>e?1:i(il(t,e,n))}function Rv(t,e){t.min=e.min,t.max=e.max}function Yi(t,e){Rv(t.x,e.x),Rv(t.y,e.y)}function Lv(t,e,i,n,r){return t-=e,t=rp(t,1/i,n),r!==void 0&&(t=rp(t,1/r,n)),t}function i9(t,e=0,i=1,n=.5,r,s=t,o=t){if(Hn.test(e)&&(e=parseFloat(e),e=Ne(o.min,o.max,e/100)-o.min),typeof e!="number")return;let l=Ne(s.min,s.max,n);t===s&&(l-=e),t.min=Lv(t.min,e,i,l,r),t.max=Lv(t.max,e,i,l,r)}function Ov(t,e,[i,n,r],s,o){i9(t,e[i],e[n],e[r],e.scale,s,o)}const n9=["x","scaleX","originX"],r9=["y","scaleY","originY"];function $v(t,e,i,n){Ov(t.x,e,n9,i?i.x:void 0,n?n.x:void 0),Ov(t.y,e,r9,i?i.y:void 0,n?n.y:void 0)}function Bv(t){return t.translate===0&&t.scale===1}function f3(t){return Bv(t.x)&&Bv(t.y)}function s9(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function m3(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function Nv(t){return Bi(t.x)/Bi(t.y)}class o9{constructor(){this.members=[]}add(e){A1(this.members,e),e.scheduleRender()}remove(e){if(M1(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(e){const i=this.members.findIndex(r=>e===r);if(i===0)return!1;let n;for(let r=i;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){n=s;break}}return n?(this.promote(n),!0):!1}promote(e,i){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,i&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:i,resumingFrom:n}=e;i.onExitComplete&&i.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Vv(t,e,i){let n="";const r=t.x.translate/e.x,s=t.y.translate/e.y;if((r||s)&&(n=`translate3d(${r}px, ${s}px, 0) `),(e.x!==1||e.y!==1)&&(n+=`scale(${1/e.x}, ${1/e.y}) `),i){const{rotate:c,rotateX:d,rotateY:u}=i;c&&(n+=`rotate(${c}deg) `),d&&(n+=`rotateX(${d}deg) `),u&&(n+=`rotateY(${u}deg) `)}const o=t.x.scale*e.x,l=t.y.scale*e.y;return(o!==1||l!==1)&&(n+=`scale(${o}, ${l})`),n||"none"}const a9=(t,e)=>t.depth-e.depth;class l9{constructor(){this.children=[],this.isDirty=!1}add(e){A1(this.children,e),this.isDirty=!0}remove(e){M1(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(a9),this.isDirty=!1,this.children.forEach(e)}}function c9(t,e){const i=performance.now(),n=({timestamp:r})=>{const s=r-i;s>=e&&(Pn(n),t(s-e))};return ye.read(n,!0),()=>Pn(n)}function d9(t){window.MotionDebug&&window.MotionDebug.record(t)}function u9(t){return t instanceof SVGElement&&t.tagName!=="svg"}function h9(t,e,i){const n=ki(t)?t:jn(t);return n.start(I1("",n,e,i)),n.animation}const Wv=["","X","Y","Z"],p9={visibility:"hidden"},Uv=1e3;let f9=0;const Zs={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function g3({attachResizeListener:t,defaultParent:e,measureScroll:i,checkIsScrollRoot:n,resetTransform:r}){return class{constructor(o={},l=e==null?void 0:e()){this.id=f9++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Zs.totalNodes=Zs.resolvedTargetDeltas=Zs.recalculatedProjection=0,this.nodes.forEach(x9),this.nodes.forEach(k9),this.nodes.forEach(j9),this.nodes.forEach(w9),d9(Zs)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new l9)}addEventListener(o,l){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new z1),this.eventHandlers.get(o).add(l)}notifyListeners(o,...l){const c=this.eventHandlers.get(o);c&&c.notify(...l)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=u9(o),this.instance=o;const{layoutId:c,layout:d,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(d||c)&&(this.isLayoutDirty=!0),t){let p;const f=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=c9(f,250),ah.hasAnimatedSinceResize&&(ah.hasAnimatedSinceResize=!1,this.nodes.forEach(Yv))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&u&&(c||d)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:f,hasRelativeTargetChanged:g,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||u.getDefaultTransition()||P9,{onLayoutAnimationStart:S,onLayoutAnimationComplete:j}=u.getProps(),b=!this.targetLayout||!m3(this.targetLayout,v)||g,y=!f&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||f&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(p,y);const h={...E1(w,"layout"),onPlay:S,onComplete:j};(u.shouldReduceMotion||this.options.layoutRoot)&&(h.delay=0,h.type=!1),this.startAnimation(h)}else f||Yv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Pn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(D9),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const p=this.path[u];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Hv);return}this.isUpdating||this.nodes.forEach(v9),this.isUpdating=!1,this.nodes.forEach(b9),this.nodes.forEach(m9),this.nodes.forEach(g9),this.clearAllSnapshots();const l=performance.now();Mt.delta=bs(0,1e3/60,l-Mt.timestamp),Mt.timestamp=l,Mt.isProcessing=!0,Uf.update.process(Mt),Uf.preRender.process(Mt),Uf.render.process(Mt),Mt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(y9),this.sharedNodes.forEach(S9)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ye.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ye.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=at(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let l=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(l=!1),l&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:n(this.instance),offset:i(this.instance)})}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!f3(this.projectionDelta),c=this.getTransformTemplate(),d=c?c(this.latestValues,""):void 0,u=d!==this.prevTransformTemplateValue;o&&(l||Xs(this.latestValues)||u)&&(r(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return o&&(c=this.removeTransform(c)),T9(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return at();const l=o.measureViewportBox(),{scroll:c}=this.root;return c&&(Ur(l.x,c.offset.x),Ur(l.y,c.offset.y)),l}removeElementScroll(o){const l=at();Yi(l,o);for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:u,options:p}=d;if(d!==this.root&&u&&p.layoutScroll){if(u.isRoot){Yi(l,o);const{scroll:f}=this.root;f&&(Ur(l.x,-f.offset.x),Ur(l.y,-f.offset.y))}Ur(l.x,u.offset.x),Ur(l.y,u.offset.y)}}return l}applyTransform(o,l=!1){const c=at();Yi(c,o);for(let d=0;d<this.path.length;d++){const u=this.path[d];!l&&u.options.layoutScroll&&u.scroll&&u!==u.root&&ja(c,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Xs(u.latestValues)&&ja(c,u.latestValues)}return Xs(this.latestValues)&&ja(c,this.latestValues),c}removeTransform(o){const l=at();Yi(l,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];if(!d.instance||!Xs(d.latestValues))continue;vg(d.latestValues)&&d.updateSnapshot();const u=at(),p=d.measurePageBox();Yi(u,p),$v(l,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,u)}return Xs(this.latestValues)&&$v(l,this.latestValues),l}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Mt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==c;if(!(o||d&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:p,layoutId:f}=this.options;if(!(!this.layout||!(p||f))){if(this.resolvedRelativeTargetAt=Mt.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=at(),this.relativeTargetOrigin=at(),xc(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),Yi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=at(),this.targetWithTransforms=at()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),EI(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Yi(this.target,this.layout.layoutBox),l3(this.target,this.targetDelta)):Yi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=at(),this.relativeTargetOrigin=at(),xc(this.relativeTargetOrigin,this.target,g.target),Yi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Zs.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||vg(this.parent.latestValues)||a3(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let d=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(d=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Mt.timestamp&&(d=!1),d)return;const{layout:u,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||p))return;Yi(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,g=this.treeScale.y;$I(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox);const{target:v}=l;if(!v){this.projectionTransform&&(this.projectionDelta=ka(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=ka(),this.projectionDeltaWithTransform=ka());const w=this.projectionTransform;gc(this.projectionDelta,this.layoutCorrected,v,this.latestValues),this.projectionTransform=Vv(this.projectionDelta,this.treeScale),(this.projectionTransform!==w||this.treeScale.x!==f||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",v)),Zs.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,l=!1){const c=this.snapshot,d=c?c.latestValues:{},u={...this.latestValues},p=ka();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const f=at(),g=c?c.source:void 0,v=this.layout?this.layout.source:void 0,w=g!==v,S=this.getStack(),j=!S||S.members.length<=1,b=!!(w&&!j&&this.options.crossfade===!0&&!this.path.some(C9));this.animationProgress=0;let y;this.mixTargetDelta=h=>{const x=h/1e3;Gv(p.x,o.x,x),Gv(p.y,o.y,x),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(xc(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),_9(this.relativeTarget,this.relativeTargetOrigin,f,x),y&&s9(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=at()),Yi(y,this.relativeTarget)),w&&(this.animationValues=u,JI(u,d,this.latestValues,x,b,j)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=x},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Pn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ye.update(()=>{ah.hasAnimatedSinceResize=!0,this.currentAnimation=h9(0,Uv,{...o,onUpdate:l=>{this.mixTargetDelta(l),o.onUpdate&&o.onUpdate(l)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Uv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:l,target:c,layout:d,latestValues:u}=o;if(!(!l||!c||!d)){if(this!==o&&this.layout&&d&&x3(this.options.animationType,this.layout.layoutBox,d.layoutBox)){c=this.target||at();const p=Bi(this.layout.layoutBox.x);c.x.min=o.target.x.min,c.x.max=c.x.min+p;const f=Bi(this.layout.layoutBox.y);c.y.min=o.target.y.min,c.y.max=c.y.min+f}Yi(l,c),ja(l,u),gc(this.projectionDeltaWithTransform,this.layoutCorrected,l,u)}}registerSharedNode(o,l){this.sharedNodes.has(o)||this.sharedNodes.set(o,new o9),this.sharedNodes.get(o).add(l);const d=l.options.initialPromotionConfig;l.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(l):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:l}=this.options;return l?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:l}=this.options;return l?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:l,preserveFollowOpacity:c}={}){const d=this.getStack();d&&d.promote(this,c),o&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let l=!1;const{latestValues:c}=o;if((c.rotate||c.rotateX||c.rotateY||c.rotateZ)&&(l=!0),!l)return;const d={};for(let u=0;u<Wv.length;u++){const p="rotate"+Wv[u];c[p]&&(d[p]=c[p],o.setStaticValue(p,0))}o.render();for(const u in d)o.setStaticValue(u,d[u]);o.scheduleRender()}getProjectionStyles(o){var l,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return p9;const d={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,d.opacity="",d.pointerEvents=oh(o==null?void 0:o.pointerEvents)||"",d.transform=u?u(this.latestValues,""):"none",d;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=oh(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Xs(this.latestValues)&&(w.transform=u?u({},""):"none",this.hasProjected=!1),w}const f=p.animationValues||p.latestValues;this.applyTransformsToTarget(),d.transform=Vv(this.projectionDeltaWithTransform,this.treeScale,f),u&&(d.transform=u(f,d.transform));const{x:g,y:v}=this.projectionDelta;d.transformOrigin=`${g.origin*100}% ${v.origin*100}% 0`,p.animationValues?d.opacity=p===this?(c=(l=f.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:d.opacity=p===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const w in Qh){if(f[w]===void 0)continue;const{correct:S,applyTo:j}=Qh[w],b=d.transform==="none"?f[w]:S(f[w],p);if(j){const y=j.length;for(let h=0;h<y;h++)d[j[h]]=b}else d[w]=b}return this.options.layoutId&&(d.pointerEvents=p===this?oh(o==null?void 0:o.pointerEvents)||"":"none"),d}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var l;return(l=o.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(Hv),this.root.sharedNodes.clear()}}}function m9(t){t.updateLayout()}function g9(t){var e;const i=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&i&&t.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:r}=t.layout,{animationType:s}=t.options,o=i.source!==t.layout.source;s==="size"?Gi(p=>{const f=o?i.measuredBox[p]:i.layoutBox[p],g=Bi(f);f.min=n[p].min,f.max=f.min+g}):x3(s,i.layoutBox,n)&&Gi(p=>{const f=o?i.measuredBox[p]:i.layoutBox[p],g=Bi(n[p]);f.max=f.min+g,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[p].max=t.relativeTarget[p].min+g)});const l=ka();gc(l,n,i.layoutBox);const c=ka();o?gc(c,t.applyTransform(r,!0),i.measuredBox):gc(c,n,i.layoutBox);const d=!f3(l);let u=!1;if(!t.resumeFrom){const p=t.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:f,layout:g}=p;if(f&&g){const v=at();xc(v,i.layoutBox,f.layoutBox);const w=at();xc(w,n,g.layoutBox),m3(v,w)||(u=!0),p.options.layoutRoot&&(t.relativeTarget=w,t.relativeTargetOrigin=v,t.relativeParent=p)}}}t.notifyListeners("didUpdate",{layout:n,snapshot:i,delta:c,layoutDelta:l,hasLayoutChanged:d,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:n}=t.options;n&&n()}t.options.transition=void 0}function x9(t){Zs.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function w9(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function y9(t){t.clearSnapshot()}function Hv(t){t.clearMeasurements()}function v9(t){t.isLayoutDirty=!1}function b9(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Yv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function k9(t){t.resolveTargetDelta()}function j9(t){t.calcProjection()}function D9(t){t.resetRotation()}function S9(t){t.removeLeadSnapshot()}function Gv(t,e,i){t.translate=Ne(e.translate,0,i),t.scale=Ne(e.scale,1,i),t.origin=e.origin,t.originPoint=e.originPoint}function Xv(t,e,i,n){t.min=Ne(e.min,i.min,n),t.max=Ne(e.max,i.max,n)}function _9(t,e,i,n){Xv(t.x,e.x,i.x,n),Xv(t.y,e.y,i.y,n)}function C9(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const P9={duration:.45,ease:[.4,0,.1,1]},Zv=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),qv=Zv("applewebkit/")&&!Zv("chrome/")?Math.round:Ze;function Qv(t){t.min=qv(t.min),t.max=qv(t.max)}function T9(t){Qv(t.x),Qv(t.y)}function x3(t,e,i){return t==="position"||t==="preserve-aspect"&&!wg(Nv(e),Nv(i),.2)}const E9=g3({attachResizeListener:(t,e)=>fr(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),t0={current:void 0},w3=g3({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!t0.current){const t=new E9({});t.mount(window),t.setOptions({layoutScroll:!0}),t0.current=t}return t0.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),I9={pan:{Feature:GI},drag:{Feature:YI,ProjectionNode:w3,MeasureLayout:u3}},A9=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function M9(t){const e=A9.exec(t);if(!e)return[,];const[,i,n]=e;return[i,n]}function kg(t,e,i=1){const[n,r]=M9(t);if(!n)return;const s=window.getComputedStyle(e).getPropertyValue(n);if(s){const o=s.trim();return J5(o)?parseFloat(o):o}else return dg(r)?kg(r,e,i+1):r}function z9(t,{...e},i){const n=t.current;if(!(n instanceof Element))return{target:e,transitionEnd:i};i&&(i={...i}),t.values.forEach(r=>{const s=r.get();if(!dg(s))return;const o=kg(s,n);o&&r.set(o)});for(const r in e){const s=e[r];if(!dg(s))continue;const o=kg(s,n);o&&(e[r]=o,i||(i={}),i[r]===void 0&&(i[r]=s))}return{target:e,transitionEnd:i}}const F9=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),y3=t=>F9.has(t),R9=t=>Object.keys(t).some(y3),Kv=t=>t===Lo||t===K,Jv=(t,e)=>parseFloat(t.split(", ")[e]),e2=(t,e)=>(i,{transform:n})=>{if(n==="none"||!n)return 0;const r=n.match(/^matrix3d\((.+)\)$/);if(r)return Jv(r[1],e);{const s=n.match(/^matrix\((.+)\)$/);return s?Jv(s[1],t):0}},L9=new Set(["x","y","z"]),O9=vd.filter(t=>!L9.has(t));function $9(t){const e=[];return O9.forEach(i=>{const n=t.getValue(i);n!==void 0&&(e.push([i,n.get()]),n.set(i.startsWith("scale")?1:0))}),e.length&&t.render(),e}const nl={width:({x:t},{paddingLeft:e="0",paddingRight:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),height:({y:t},{paddingTop:e="0",paddingBottom:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:e2(4,13),y:e2(5,14)};nl.translateX=nl.x;nl.translateY=nl.y;const B9=(t,e,i)=>{const n=e.measureViewportBox(),r=e.current,s=getComputedStyle(r),{display:o}=s,l={};o==="none"&&e.setStaticValue("display",t.display||"block"),i.forEach(d=>{l[d]=nl[d](n,s)}),e.render();const c=e.measureViewportBox();return i.forEach(d=>{const u=e.getValue(d);u&&u.jump(l[d]),t[d]=nl[d](c,s)}),t},N9=(t,e,i={},n={})=>{e={...e},n={...n};const r=Object.keys(e).filter(y3);let s=[],o=!1;const l=[];if(r.forEach(c=>{const d=t.getValue(c);if(!t.hasValue(c))return;let u=i[c],p=Al(u);const f=e[c];let g;if(Jh(f)){const v=f.length,w=f[0]===null?1:0;u=f[w],p=Al(u);for(let S=w;S<v&&f[S]!==null;S++)g?Jp(Al(f[S])===g):g=Al(f[S])}else g=Al(f);if(p!==g)if(Kv(p)&&Kv(g)){const v=d.get();typeof v=="string"&&d.set(parseFloat(v)),typeof f=="string"?e[c]=parseFloat(f):Array.isArray(f)&&g===K&&(e[c]=f.map(parseFloat))}else p!=null&&p.transform&&(g!=null&&g.transform)&&(u===0||f===0)?u===0?d.set(g.transform(u)):e[c]=p.transform(f):(o||(s=$9(t),o=!0),l.push(c),n[c]=n[c]!==void 0?n[c]:e[c],d.jump(f))}),l.length){const c=l.indexOf("height")>=0?window.pageYOffset:null,d=B9(e,t,l);return s.length&&s.forEach(([u,p])=>{t.getValue(u).set(p)}),t.render(),Gp&&c!==null&&window.scrollTo({top:c}),{target:d,transitionEnd:n}}else return{target:e,transitionEnd:n}};function V9(t,e,i,n){return R9(e)?N9(t,e,i,n):{target:e,transitionEnd:n}}const W9=(t,e,i,n)=>{const r=z9(t,e,n);return e=r.target,n=r.transitionEnd,V9(t,e,i,n)},jg={current:null},v3={current:!1};function U9(){if(v3.current=!0,!!Gp)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>jg.current=t.matches;t.addListener(e),e()}else jg.current=!1}function H9(t,e,i){const{willChange:n}=e;for(const r in e){const s=e[r],o=i[r];if(ki(s))t.addValue(r,s),np(n)&&n.add(r);else if(ki(o))t.addValue(r,jn(s,{owner:t})),np(n)&&n.remove(r);else if(o!==s)if(t.hasValue(r)){const l=t.getValue(r);!l.hasAnimated&&l.set(s)}else{const l=t.getStaticValue(r);t.addValue(r,jn(l!==void 0?l:s,{owner:t}))}}for(const r in i)e[r]===void 0&&t.removeValue(r);return e}const t2=new WeakMap,b3=Object.keys(td),Y9=b3.length,i2=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],G9=g1.length;class X9{constructor({parent:e,props:i,presenceContext:n,reducedMotionConfig:r,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ye.render(this.render,!1,!0);const{latestValues:l,renderState:c}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=i.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=i,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.isControllingVariants=Zp(i),this.isVariantNode=s5(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...u}=this.scrapeMotionValuesFromProps(i,{});for(const p in u){const f=u[p];l[p]!==void 0&&ki(f)&&(f.set(l[p],!1),np(d)&&d.add(p))}}scrapeMotionValuesFromProps(e,i){return{}}mount(e){this.current=e,t2.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,n)=>this.bindToMotionValue(n,i)),v3.current||U9(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:jg.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){t2.delete(this.current),this.projection&&this.projection.unmount(),Pn(this.notifyUpdate),Pn(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,i){const n=Ro.has(e),r=i.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&ye.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)}),s=i.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),s()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...i},n,r,s){let o,l;for(let c=0;c<Y9;c++){const d=b3[c],{isEnabled:u,Feature:p,ProjectionNode:f,MeasureLayout:g}=td[d];f&&(o=f),u(i)&&(!this.features[d]&&p&&(this.features[d]=new p(this)),g&&(l=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:c,layout:d,drag:u,dragConstraints:p,layoutScroll:f,layoutRoot:g}=i;this.projection.setOptions({layoutId:c,layout:d,alwaysMeasureLayout:!!u||p&&va(p),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof d=="string"?d:"both",initialPromotionConfig:s,layoutScroll:f,layoutRoot:g})}return l}updateFeatures(){for(const e in this.features){const i=this.features[e];i.isMounted?i.update():(i.mount(),i.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):at()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,i){this.latestValues[e]=i}makeTargetAnimatable(e,i=!0){return this.makeTargetAnimatableFromInstance(e,this.props,i)}update(e,i){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let n=0;n<i2.length;n++){const r=i2[n];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s=e["on"+r];s&&(this.propEventSubscriptions[r]=this.on(r,s))}this.prevMotionValues=H9(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const n=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(n.initial=this.props.initial),n}const i={};for(let n=0;n<G9;n++){const r=g1[n],s=this.props[r];(ed(s)||s===!1)&&(i[r]=s)}return i}addVariantChild(e){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(e),()=>i.variantChildren.delete(e)}addValue(e,i){i!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,i)),this.values.set(e,i),this.latestValues[e]=i.get()}removeValue(e){this.values.delete(e);const i=this.valueSubscriptions.get(e);i&&(i(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,i){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&i!==void 0&&(n=jn(i,{owner:this}),this.addValue(e,n)),n}readValue(e){var i;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,i){this.baseTarget[e]=i}getBaseTarget(e){var i;const{initial:n}=this.props,r=typeof n=="string"||typeof n=="object"?(i=D1(this.props,n))===null||i===void 0?void 0:i[e]:void 0;if(n&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!ki(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,i){return this.events[e]||(this.events[e]=new z1),this.events[e].add(i)}notify(e,...i){this.events[e]&&this.events[e].notify(...i)}}class k3 extends X9{sortInstanceNodePosition(e,i){return e.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(e,i){return e.style?e.style[i]:void 0}removeValueFromRenderState(e,{vars:i,style:n}){delete i[e],delete n[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:i,...n},{transformValues:r},s){let o=hI(n,e||{},this);if(r&&(i&&(i=r(i)),n&&(n=r(n)),o&&(o=r(o))),s){dI(this,n,o);const l=W9(this,n,o,i);i=l.transitionEnd,n=l.target}return{transition:e,transitionEnd:i,...n}}}function Z9(t){return window.getComputedStyle(t)}class q9 extends k3{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,i){if(Ro.has(i)){const n=T1(i);return n&&n.default||0}else{const n=Z9(e),r=(c5(i)?n.getPropertyValue(i):n[i])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:i}){return c3(e,i)}build(e,i,n,r){y1(e,i,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,i){return j1(e,i)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;ki(e)&&(this.childSubscription=e.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}renderInstance(e,i,n,r){m5(e,i,n,r)}}class Q9 extends k3{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,i){return e[i]}readValueFromInstance(e,i){if(Ro.has(i)){const n=T1(i);return n&&n.default||0}return i=g5.has(i)?i:f1(i),e.getAttribute(i)}measureInstanceViewportBox(){return at()}scrapeMotionValuesFromProps(e,i){return w5(e,i)}build(e,i,n,r){b1(e,i,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,i,n,r){x5(e,i,n,r)}mount(e){this.isSVGTag=k1(e.tagName),super.mount(e)}}const K9=(t,e)=>w1(t)?new Q9(e,{enableHardwareAcceleration:!1}):new q9(e,{enableHardwareAcceleration:!0}),J9={layout:{ProjectionNode:w3,MeasureLayout:u3}},eA={..._I,...ZT,...I9,...J9},$=rT((t,e)=>RT(t,e,eA,K9));function j3(){const t=T.useRef(!1);return gl(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function tA(){const t=j3(),[e,i]=T.useState(0),n=T.useCallback(()=>{t.current&&i(e+1)},[e]);return[T.useCallback(()=>ye.postRender(n),[n]),e]}class iA extends T.Component{getSnapshotBeforeUpdate(e){const i=this.props.childRef.current;if(i&&e.isPresent&&!this.props.isPresent){const n=this.props.sizeRef.current;n.height=i.offsetHeight||0,n.width=i.offsetWidth||0,n.top=i.offsetTop,n.left=i.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function nA({children:t,isPresent:e}){const i=T.useId(),n=T.useRef(null),r=T.useRef({width:0,height:0,top:0,left:0});return T.useInsertionEffect(()=>{const{width:s,height:o,top:l,left:c}=r.current;if(e||!n.current||!s||!o)return;n.current.dataset.motionPopId=i;const d=document.createElement("style");return document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[e]),T.createElement(iA,{isPresent:e,childRef:n,sizeRef:r},T.cloneElement(t,{ref:n}))}const i0=({children:t,initial:e,isPresent:i,onExitComplete:n,custom:r,presenceAffectsLayout:s,mode:o})=>{const l=xl(rA),c=T.useId(),d=T.useMemo(()=>({id:c,initial:e,isPresent:i,custom:r,onExitComplete:u=>{l.set(u,!0);for(const p of l.values())if(!p)return;n&&n()},register:u=>(l.set(u,!1),()=>l.delete(u))}),s?void 0:[i]);return T.useMemo(()=>{l.forEach((u,p)=>l.set(p,!1))},[i]),T.useEffect(()=>{!i&&!l.size&&n&&n()},[i]),o==="popLayout"&&(t=T.createElement(nA,{isPresent:i},t)),T.createElement(Yp.Provider,{value:d},t)};function rA(){return new Map}function sA(t){return T.useEffect(()=>()=>t(),[])}const qs=t=>t.key||"";function oA(t,e){t.forEach(i=>{const n=qs(i);e.set(n,i)})}function aA(t){const e=[];return T.Children.forEach(t,i=>{T.isValidElement(i)&&e.push(i)}),e}const lA=({children:t,custom:e,initial:i=!0,onExitComplete:n,exitBeforeEnter:r,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const l=T.useContext(x1).forceRender||tA()[0],c=j3(),d=aA(t);let u=d;const p=T.useRef(new Map).current,f=T.useRef(u),g=T.useRef(new Map).current,v=T.useRef(!0);if(gl(()=>{v.current=!1,oA(d,g),f.current=u}),sA(()=>{v.current=!0,g.clear(),p.clear()}),v.current)return T.createElement(T.Fragment,null,u.map(b=>T.createElement(i0,{key:qs(b),isPresent:!0,initial:i?void 0:!1,presenceAffectsLayout:s,mode:o},b)));u=[...u];const w=f.current.map(qs),S=d.map(qs),j=w.length;for(let b=0;b<j;b++){const y=w[b];S.indexOf(y)===-1&&!p.has(y)&&p.set(y,void 0)}return o==="wait"&&p.size&&(u=[]),p.forEach((b,y)=>{if(S.indexOf(y)!==-1)return;const h=g.get(y);if(!h)return;const x=w.indexOf(y);let k=b;if(!k){const D=()=>{p.delete(y);const _=Array.from(g.keys()).filter(C=>!S.includes(C));if(_.forEach(C=>g.delete(C)),f.current=d.filter(C=>{const E=qs(C);return E===y||_.includes(E)}),!p.size){if(c.current===!1)return;l(),n&&n()}};k=T.createElement(i0,{key:qs(h),isPresent:!1,onExitComplete:D,custom:e,presenceAffectsLayout:s,mode:o},h),p.set(y,k)}u.splice(x,0,k)}),u=u.map(b=>{const y=b.key;return p.has(y)?b:T.createElement(i0,{key:qs(b),isPresent:!0,presenceAffectsLayout:s,mode:o},b)}),T.createElement(T.Fragment,null,p.size?u:u.map(b=>T.cloneElement(b)))};function D3(t){const e=xl(()=>jn(t)),{isStatic:i}=T.useContext(p1);if(i){const[,n]=T.useState(t);T.useEffect(()=>e.on("change",n),[])}return e}const cA=t=>t&&typeof t=="object"&&t.mix,dA=t=>cA(t)?t.mix:void 0;function uA(...t){const e=!Array.isArray(t[0]),i=e?0:-1,n=t[0+i],r=t[1+i],s=t[2+i],o=t[3+i],l=ef(r,s,{mixer:dA(s[0]),...o});return e?l(n):l}function S3(t,e){const i=D3(e()),n=()=>i.set(e());return n(),gl(()=>{const r=()=>ye.update(n,!1,!0),s=t.map(o=>o.on("change",r));return()=>{s.forEach(o=>o()),Pn(n)}}),i}function hA(t){mc.current=[],t();const e=S3(mc.current,t);return mc.current=void 0,e}function zl(t,e,i,n){if(typeof t=="function")return hA(t);const r=typeof e=="function"?e:uA(e,i,n);return Array.isArray(t)?n2(t,r):n2([t],([s])=>r(s))}function n2(t,e){const i=xl(()=>[]);return S3(t,()=>{i.length=0;const n=t.length;for(let r=0;r<n;r++)i[r]=t[r].get();return e(i)})}function _3(t,e,i){var n;if(typeof t=="string"){let r=document;e&&(Jp(!!e.current),r=e.current),i?((n=i[t])!==null&&n!==void 0||(i[t]=r.querySelectorAll(t)),t=i[t]):t=r.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}const lh=new WeakMap;let Br;function pA(t,e){if(e){const{inlineSize:i,blockSize:n}=e[0];return{width:i,height:n}}else return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}function fA({target:t,contentRect:e,borderBoxSize:i}){var n;(n=lh.get(t))===null||n===void 0||n.forEach(r=>{r({target:t,contentSize:e,get size(){return pA(t,i)}})})}function mA(t){t.forEach(fA)}function gA(){typeof ResizeObserver>"u"||(Br=new ResizeObserver(mA))}function xA(t,e){Br||gA();const i=_3(t);return i.forEach(n=>{let r=lh.get(n);r||(r=new Set,lh.set(n,r)),r.add(e),Br==null||Br.observe(n)}),()=>{i.forEach(n=>{const r=lh.get(n);r==null||r.delete(e),r!=null&&r.size||Br==null||Br.unobserve(n)})}}const ch=new Set;let wc;function wA(){wc=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};ch.forEach(i=>i(e))},window.addEventListener("resize",wc)}function yA(t){return ch.add(t),wc||wA(),()=>{ch.delete(t),!ch.size&&wc&&(wc=void 0)}}function vA(t,e){return typeof t=="function"?yA(t):xA(t,e)}const bA=50,r2=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),kA=()=>({time:0,x:r2(),y:r2()}),jA={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function s2(t,e,i,n){const r=i[e],{length:s,position:o}=jA[e],l=r.current,c=i.time;r.current=t["scroll"+o],r.scrollLength=t["scroll"+s]-t["client"+s],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=il(0,r.scrollLength,r.current);const d=n-c;r.velocity=d>bA?0:P1(r.current-l,d)}function DA(t,e,i){s2(t,"x",e,i),s2(t,"y",e,i),e.time=i}function SA(t,e){const i={x:0,y:0};let n=t;for(;n&&n!==e;)if(n instanceof HTMLElement)i.x+=n.offsetLeft,i.y+=n.offsetTop,n=n.offsetParent;else if(n.tagName==="svg"){const r=n.getBoundingClientRect();n=n.parentElement;const s=n.getBoundingClientRect();i.x+=r.left-s.left,i.y+=r.top-s.top}else if(n instanceof SVGGraphicsElement){const{x:r,y:s}=n.getBBox();i.x+=r,i.y+=s;let o=null,l=n.parentNode;for(;!o;)l.tagName==="svg"&&(o=l),l=n.parentNode;n=o}else break;return i}const _A={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Dg={start:0,center:.5,end:1};function o2(t,e,i=0){let n=0;if(Dg[t]!==void 0&&(t=Dg[t]),typeof t=="string"){const r=parseFloat(t);t.endsWith("px")?n=r:t.endsWith("%")?t=r/100:t.endsWith("vw")?n=r/100*document.documentElement.clientWidth:t.endsWith("vh")?n=r/100*document.documentElement.clientHeight:t=r}return typeof t=="number"&&(n=e*t),i+n}const CA=[0,0];function PA(t,e,i,n){let r=Array.isArray(t)?t:CA,s=0,o=0;return typeof t=="number"?r=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?r=t.split(" "):r=[t,Dg[t]?t:"0"]),s=o2(r[0],i,n),o=o2(r[1],e),s-o}const TA={x:0,y:0};function EA(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function IA(t,e,i){let{offset:n=_A.All}=i;const{target:r=t,axis:s="y"}=i,o=s==="y"?"height":"width",l=r!==t?SA(r,t):TA,c=r===t?{width:t.scrollWidth,height:t.scrollHeight}:EA(r),d={width:t.clientWidth,height:t.clientHeight};e[s].offset.length=0;let u=!e[s].interpolate;const p=n.length;for(let f=0;f<p;f++){const g=PA(n[f],d[o],c[o],l[s]);!u&&g!==e[s].interpolatorOffsets[f]&&(u=!0),e[s].offset[f]=g}u&&(e[s].interpolate=ef(e[s].offset,X5(n)),e[s].interpolatorOffsets=[...e[s].offset]),e[s].progress=e[s].interpolate(e[s].current)}function AA(t,e=t,i){if(i.x.targetOffset=0,i.y.targetOffset=0,e!==t){let n=e;for(;n&&n!==t;)i.x.targetOffset+=n.offsetLeft,i.y.targetOffset+=n.offsetTop,n=n.offsetParent}i.x.targetLength=e===t?e.scrollWidth:e.clientWidth,i.y.targetLength=e===t?e.scrollHeight:e.clientHeight,i.x.containerLength=t.clientWidth,i.y.containerLength=t.clientHeight}function MA(t,e,i,n={}){return{measure:()=>AA(t,n.target,i),update:r=>{DA(t,i,r),(n.offset||n.target)&&IA(t,i,n)},notify:()=>e(i)}}const Fl=new WeakMap,a2=new WeakMap,n0=new WeakMap,l2=t=>t===document.documentElement?window:t;function zA(t,{container:e=document.documentElement,...i}={}){let n=n0.get(e);n||(n=new Set,n0.set(e,n));const r=kA(),s=MA(e,t,r,i);if(n.add(s),!Fl.has(e)){const l=()=>{for(const f of n)f.measure()},c=()=>{for(const f of n)f.update(Mt.timestamp)},d=()=>{for(const f of n)f.notify()},u=()=>{ye.read(l,!1,!0),ye.read(c,!1,!0),ye.update(d,!1,!0)};Fl.set(e,u);const p=l2(e);window.addEventListener("resize",u,{passive:!0}),e!==document.documentElement&&a2.set(e,vA(e,u)),p.addEventListener("scroll",u,{passive:!0})}const o=Fl.get(e);return ye.read(o,!1,!0),()=>{var l;Pn(o);const c=n0.get(e);if(!c||(c.delete(s),c.size))return;const d=Fl.get(e);Fl.delete(e),d&&(l2(e).removeEventListener("scroll",d),(l=a2.get(e))===null||l===void 0||l(),window.removeEventListener("resize",d))}}function c2(t,e){_5(!!(!e||e.current))}const FA=()=>({scrollX:jn(0),scrollY:jn(0),scrollXProgress:jn(0),scrollYProgress:jn(0)});function RA({container:t,target:e,layoutEffect:i=!0,...n}={}){const r=xl(FA);return(i?gl:T.useEffect)(()=>(c2("target",e),c2("container",t),zA(({x:o,y:l})=>{r.scrollX.set(o.current),r.scrollXProgress.set(o.progress),r.scrollY.set(l.current),r.scrollYProgress.set(l.progress)},{...n,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0})),[t,e,JSON.stringify(n.offset)]),r}function LA(t){t.values.forEach(e=>e.stop())}function OA(){const t=new Set,e={subscribe(i){return t.add(i),()=>void t.delete(i)},start(i,n){const r=[];return t.forEach(s=>{r.push(n3(s,i,{transitionOverride:n}))}),Promise.all(r)},set(i){return t.forEach(n=>{cI(n,i)})},stop(){t.forEach(i=>{LA(i)})},mount(){return()=>{e.stop()}}};return e}function $A(){const t=xl(OA);return gl(t.mount,[]),t}const BA=$A,NA={some:0,all:1};function VA(t,e,{root:i,margin:n,amount:r="some"}={}){const s=_3(t),o=new WeakMap,l=d=>{d.forEach(u=>{const p=o.get(u.target);if(u.isIntersecting!==!!p)if(u.isIntersecting){const f=e(u);typeof f=="function"?o.set(u.target,f):c.unobserve(u.target)}else p&&(p(u),o.delete(u.target))})},c=new IntersectionObserver(l,{root:i,rootMargin:n,threshold:typeof r=="number"?r:NA[r]});return s.forEach(d=>c.observe(d)),()=>c.disconnect()}function WA(t,{root:e,margin:i,amount:n,once:r=!1}={}){const[s,o]=T.useState(!1);return T.useEffect(()=>{if(!t.current||r&&s)return;const l=()=>(o(!0),r?void 0:()=>o(!1)),c={root:e&&e.current||void 0,margin:i,amount:n};return VA(t.current,l,c)},[e,t,i,r,n]),s}const st=({title:t,description:e,keywords:i="graphic design, brand design, UX/UI design, portfolio, Nooshin Shahsavan",image:n="/src/assets/logoweb.png",url:r=window.location.href,type:s="website"})=>a.jsxs(SD,{children:[a.jsx("title",{children:t}),a.jsx("meta",{name:"description",content:e}),a.jsx("meta",{name:"keywords",content:i}),a.jsx("meta",{property:"og:title",content:t}),a.jsx("meta",{property:"og:description",content:e}),a.jsx("meta",{property:"og:image",content:n}),a.jsx("meta",{property:"og:url",content:r}),a.jsx("meta",{property:"og:type",content:s}),a.jsx("meta",{property:"og:site_name",content:"Nooshin Shahsavan Portfolio"}),a.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),a.jsx("meta",{name:"twitter:title",content:t}),a.jsx("meta",{name:"twitter:description",content:e}),a.jsx("meta",{name:"twitter:image",content:n}),a.jsx("meta",{name:"author",content:"Nooshin Shahsavan"}),a.jsx("meta",{name:"robots",content:"index, follow"}),a.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a.jsx("link",{rel:"canonical",href:r})]});function ar(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function C3(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Oi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},rl={duration:.5,overwrite:!1,delay:0},R1,Rt,Re,nn=1e8,Ce=1/nn,Sg=Math.PI*2,UA=Sg/4,HA=0,P3=Math.sqrt,YA=Math.cos,GA=Math.sin,Pt=function(e){return typeof e=="string"},qe=function(e){return typeof e=="function"},Dr=function(e){return typeof e=="number"},L1=function(e){return typeof e>"u"},Gn=function(e){return typeof e=="object"},wi=function(e){return e!==!1},O1=function(){return typeof window<"u"},iu=function(e){return qe(e)||Pt(e)},T3=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Xt=Array.isArray,_g=/(?:-?\.?\d|\.)+/gi,E3=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Da=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,r0=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,I3=/[+-]=-?[.\d]+/,A3=/[^,'"\[\]\s]+/gi,XA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Be,Fn,Cg,$1,Ni={},sp={},M3,z3=function(e){return(sp=sl(e,Ni))&&ji},B1=function(e,i){return console.warn("Invalid property",e,"set to",i,"Missing plugin? gsap.registerPlugin()")},id=function(e,i){return!i&&console.warn(e)},F3=function(e,i){return e&&(Ni[e]=i)&&sp&&(sp[e]=i)||Ni},nd=function(){return 0},ZA={suppressEvents:!0,isStart:!0,kill:!1},dh={suppressEvents:!0,kill:!1},qA={suppressEvents:!0},N1={},ms=[],Pg={},R3,Ii={},s0={},d2=30,uh=[],V1="",W1=function(e){var i=e[0],n,r;if(Gn(i)||qe(i)||(e=[e]),!(n=(i._gsap||{}).harness)){for(r=uh.length;r--&&!uh[r].targetTest(i););n=uh[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new oS(e[r],n)))||e.splice(r,1);return e},po=function(e){return e._gsap||W1(rn(e))[0]._gsap},L3=function(e,i,n){return(n=e[i])&&qe(n)?e[i]():L1(n)&&e.getAttribute&&e.getAttribute(i)||n},yi=function(e,i){return(e=e.split(",")).forEach(i)||e},it=function(e){return Math.round(e*1e5)/1e5||0},dt=function(e){return Math.round(e*1e7)/1e7||0},Ra=function(e,i){var n=i.charAt(0),r=parseFloat(i.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},QA=function(e,i){for(var n=i.length,r=0;e.indexOf(i[r])<0&&++r<n;);return r<n},op=function(){var e=ms.length,i=ms.slice(0),n,r;for(Pg={},ms.length=0,n=0;n<e;n++)r=i[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},U1=function(e){return!!(e._initted||e._startAt||e.add)},O3=function(e,i,n,r){ms.length&&!Rt&&op(),e.render(i,n,r||!!(Rt&&i<0&&U1(e))),ms.length&&!Rt&&op()},$3=function(e){var i=parseFloat(e);return(i||i===0)&&(e+"").match(A3).length<2?i:Pt(e)?e.trim():e},B3=function(e){return e},Vi=function(e,i){for(var n in i)n in e||(e[n]=i[n]);return e},KA=function(e){return function(i,n){for(var r in n)r in i||r==="duration"&&e||r==="ease"||(i[r]=n[r])}},sl=function(e,i){for(var n in i)e[n]=i[n];return e},u2=function t(e,i){for(var n in i)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Gn(i[n])?t(e[n]||(e[n]={}),i[n]):i[n]);return e},ap=function(e,i){var n={},r;for(r in e)r in i||(n[r]=e[r]);return n},yc=function(e){var i=e.parent||Be,n=e.keyframes?KA(Xt(e.keyframes)):Vi;if(wi(e.inherit))for(;i;)n(e,i.vars.defaults),i=i.parent||i._dp;return e},JA=function(e,i){for(var n=e.length,r=n===i.length;r&&n--&&e[n]===i[n];);return n<0},N3=function(e,i,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],l;if(s)for(l=i[s];o&&o[s]>l;)o=o._prev;return o?(i._next=o._next,o._next=i):(i._next=e[n],e[n]=i),i._next?i._next._prev=i:e[r]=i,i._prev=o,i.parent=i._dp=e,i},tf=function(e,i,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=i._prev,o=i._next;s?s._next=o:e[n]===i&&(e[n]=o),o?o._prev=s:e[r]===i&&(e[r]=s),i._next=i._prev=i.parent=null},js=function(e,i){e.parent&&(!i||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},fo=function(e,i){if(e&&(!i||i._end>e._dur||i._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},eM=function(e){for(var i=e.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return e},Tg=function(e,i,n,r){return e._startAt&&(Rt?e._startAt.revert(dh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(i,!0,r))},tM=function t(e){return!e||e._ts&&t(e.parent)},h2=function(e){return e._repeat?ol(e._tTime,e=e.duration()+e._rDelay)*e:0},ol=function(e,i){var n=Math.floor(e=dt(e/i));return e&&n===e?n-1:n},lp=function(e,i){return(e-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},nf=function(e){return e._end=dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ce)||0))},rf=function(e,i){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=dt(n._time-(e._ts>0?i/e._ts:((e._dirty?e.totalDuration():e._tDur)-i)/-e._ts)),nf(e),n._dirty||fo(n,e)),e},V3=function(e,i){var n;if((i._time||!i._dur&&i._initted||i._start<e._time&&(i._dur||!i.add))&&(n=lp(e.rawTime(),i),(!i._dur||Dd(0,i.totalDuration(),n)-i._tTime>Ce)&&i.render(n,!0)),fo(e,i)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ce}},Bn=function(e,i,n,r){return i.parent&&js(i),i._start=dt((Dr(n)?n:n||e!==Be?Xi(e,n,i):e._time)+i._delay),i._end=dt(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),N3(e,i,"_first","_last",e._sort?"_start":0),Eg(i)||(e._recent=i),r||V3(e,i),e._ts<0&&rf(e,e._tTime),e},W3=function(e,i){return(Ni.ScrollTrigger||B1("scrollTrigger",i))&&Ni.ScrollTrigger.create(i,e)},U3=function(e,i,n,r,s){if(Y1(e,i,s),!e._initted)return 1;if(!n&&e._pt&&!Rt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&R3!==Mi.frame)return ms.push(e),e._lazy=[s,r],1},iM=function t(e){var i=e.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||t(i))},Eg=function(e){var i=e.data;return i==="isFromStart"||i==="isStart"},nM=function(e,i,n,r){var s=e.ratio,o=i<0||!i&&(!e._start&&iM(e)&&!(!e._initted&&Eg(e))||(e._ts<0||e._dp._ts<0)&&!Eg(e))?0:1,l=e._rDelay,c=0,d,u,p;if(l&&e._repeat&&(c=Dd(0,e._tDur,i),u=ol(c,l),e._yoyo&&u&1&&(o=1-o),u!==ol(e._tTime,l)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Rt||r||e._zTime===Ce||!i&&e._zTime){if(!e._initted&&U3(e,i,r,n,c))return;for(p=e._zTime,e._zTime=i||(n?Ce:0),n||(n=i&&!p),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,d=e._pt;d;)d.r(o,d.d),d=d._next;i<0&&Tg(e,i,n,!0),e._onUpdate&&!n&&Ri(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Ri(e,"onRepeat"),(i>=e._tDur||i<0)&&e.ratio===o&&(o&&js(e,1),!n&&!Rt&&(Ri(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=i)},rM=function(e,i,n){var r;if(n>i)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>i)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<i)return r;r=r._prev}},al=function(e,i,n,r){var s=e._repeat,o=dt(i)||0,l=e._tTime/e._tDur;return l&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:dt(o*(s+1)+e._rDelay*s):o,l>0&&!r&&rf(e,e._tTime=e._tDur*l),e.parent&&nf(e),n||fo(e.parent,e),e},p2=function(e){return e instanceof si?fo(e):al(e,e._dur)},sM={_start:0,endTime:nd,totalDuration:nd},Xi=function t(e,i,n){var r=e.labels,s=e._recent||sM,o=e.duration()>=nn?s.endTime(!1):e._dur,l,c,d;return Pt(i)&&(isNaN(i)||i in r)?(c=i.charAt(0),d=i.substr(-1)==="%",l=i.indexOf("="),c==="<"||c===">"?(l>=0&&(i=i.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(i.substr(1))||0)*(d?(l<0?s:n).totalDuration()/100:1)):l<0?(i in r||(r[i]=o),r[i]):(c=parseFloat(i.charAt(l-1)+i.substr(l+1)),d&&n&&(c=c/100*(Xt(n)?n[0]:n).totalDuration()),l>1?t(e,i.substr(0,l-1),n)+c:o+c)):i==null?o:+i},vc=function(e,i,n){var r=Dr(i[1]),s=(r?2:1)+(e<2?0:1),o=i[s],l,c;if(r&&(o.duration=i[1]),o.parent=n,e){for(l=o,c=n;c&&!("immediateRender"in l);)l=c.vars.defaults||{},c=wi(c.vars.inherit)&&c.parent;o.immediateRender=wi(l.immediateRender),e<2?o.runBackwards=1:o.startAt=i[s-1]}return new ct(i[0],o,i[s+1])},Es=function(e,i){return e||e===0?i(e):i},Dd=function(e,i,n){return n<e?e:n>i?i:n},Yt=function(e,i){return!Pt(e)||!(i=XA.exec(e))?"":i[1]},oM=function(e,i,n){return Es(n,function(r){return Dd(e,i,r)})},Ig=[].slice,H3=function(e,i){return e&&Gn(e)&&"length"in e&&(!i&&!e.length||e.length-1 in e&&Gn(e[0]))&&!e.nodeType&&e!==Fn},aM=function(e,i,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Pt(r)&&!i||H3(r,1)?(s=n).push.apply(s,rn(r)):n.push(r)})||n},rn=function(e,i,n){return Re&&!i&&Re.selector?Re.selector(e):Pt(e)&&!n&&(Cg||!ll())?Ig.call((i||$1).querySelectorAll(e),0):Xt(e)?aM(e,n):H3(e)?Ig.call(e,0):e?[e]:[]},Ag=function(e){return e=rn(e)[0]||id("Invalid scope")||{},function(i){var n=e.current||e.nativeElement||e;return rn(i,n.querySelectorAll?n:n===e?id("Invalid scope")||$1.createElement("div"):e)}},Y3=function(e){return e.sort(function(){return .5-Math.random()})},G3=function(e){if(qe(e))return e;var i=Gn(e)?e:{each:e},n=mo(i.ease),r=i.from||0,s=parseFloat(i.base)||0,o={},l=r>0&&r<1,c=isNaN(r)||l,d=i.axis,u=r,p=r;return Pt(r)?u=p={center:.5,edges:.5,end:1}[r]||0:!l&&c&&(u=r[0],p=r[1]),function(f,g,v){var w=(v||i).length,S=o[w],j,b,y,h,x,k,D,_,C;if(!S){if(C=i.grid==="auto"?0:(i.grid||[1,nn])[1],!C){for(D=-nn;D<(D=v[C++].getBoundingClientRect().left)&&C<w;);C<w&&C--}for(S=o[w]=[],j=c?Math.min(C,w)*u-.5:r%C,b=C===nn?0:c?w*p/C-.5:r/C|0,D=0,_=nn,k=0;k<w;k++)y=k%C-j,h=b-(k/C|0),S[k]=x=d?Math.abs(d==="y"?h:y):P3(y*y+h*h),x>D&&(D=x),x<_&&(_=x);r==="random"&&Y3(S),S.max=D-_,S.min=_,S.v=w=(parseFloat(i.amount)||parseFloat(i.each)*(C>w?w-1:d?d==="y"?w/C:C:Math.max(C,w/C))||0)*(r==="edges"?-1:1),S.b=w<0?s-w:s,S.u=Yt(i.amount||i.each)||0,n=n&&w<0?nS(n):n}return w=(S[f]-S.min)/S.max||0,dt(S.b+(n?n(w):w)*S.v)+S.u}},Mg=function(e){var i=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=dt(Math.round(parseFloat(n)/e)*e*i);return(r-r%1)/i+(Dr(n)?0:Yt(n))}},X3=function(e,i){var n=Xt(e),r,s;return!n&&Gn(e)&&(r=n=e.radius||nn,e.values?(e=rn(e.values),(s=!Dr(e[0]))&&(r*=r)):e=Mg(e.increment)),Es(i,n?qe(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var l=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),d=nn,u=0,p=e.length,f,g;p--;)s?(f=e[p].x-l,g=e[p].y-c,f=f*f+g*g):f=Math.abs(e[p]-l),f<d&&(d=f,u=p);return u=!r||d<=r?e[u]:o,s||u===o||Dr(o)?u:u+Yt(o)}:Mg(e))},Z3=function(e,i,n,r){return Es(Xt(e)?!i:n===!0?!!(n=0):!r,function(){return Xt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(i-e+n*.99))/n)*n*r)/r})},lM=function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return function(r){return i.reduce(function(s,o){return o(s)},r)}},cM=function(e,i){return function(n){return e(parseFloat(n))+(i||Yt(n))}},dM=function(e,i,n){return Q3(e,i,0,1,n)},q3=function(e,i,n){return Es(n,function(r){return e[~~i(r)]})},uM=function t(e,i,n){var r=i-e;return Xt(e)?q3(e,t(0,e.length),i):Es(n,function(s){return(r+(s-e)%r)%r+e})},hM=function t(e,i,n){var r=i-e,s=r*2;return Xt(e)?q3(e,t(0,e.length-1),i):Es(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},rd=function(e){for(var i=0,n="",r,s,o,l;~(r=e.indexOf("random(",i));)o=e.indexOf(")",r),l=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(l?A3:_g),n+=e.substr(i,r-i)+Z3(l?s:+s[0],l?0:+s[1],+s[2]||1e-5),i=o+1;return n+e.substr(i,e.length-i)},Q3=function(e,i,n,r,s){var o=i-e,l=r-n;return Es(s,function(c){return n+((c-e)/o*l||0)})},pM=function t(e,i,n,r){var s=isNaN(e+i)?0:function(g){return(1-g)*e+g*i};if(!s){var o=Pt(e),l={},c,d,u,p,f;if(n===!0&&(r=1)&&(n=null),o)e={p:e},i={p:i};else if(Xt(e)&&!Xt(i)){for(u=[],p=e.length,f=p-2,d=1;d<p;d++)u.push(t(e[d-1],e[d]));p--,s=function(v){v*=p;var w=Math.min(f,~~v);return u[w](v-w)},n=i}else r||(e=sl(Xt(e)?[]:{},e));if(!u){for(c in i)H1.call(l,e,c,"get",i[c]);s=function(v){return Z1(v,l)||(o?e.p:e)}}}return Es(n,s)},f2=function(e,i,n){var r=e.labels,s=nn,o,l,c;for(o in r)l=r[o]-i,l<0==!!n&&l&&s>(l=Math.abs(l))&&(c=o,s=l);return c},Ri=function(e,i,n){var r=e.vars,s=r[i],o=Re,l=e._ctx,c,d,u;if(s)return c=r[i+"Params"],d=r.callbackScope||e,n&&ms.length&&op(),l&&(Re=l),u=c?s.apply(d,c):s.call(d),Re=o,u},Zl=function(e){return js(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Rt),e.progress()<1&&Ri(e,"onInterrupt"),e},Sa,K3=[],J3=function(e){if(e)if(e=!e.name&&e.default||e,O1()||e.headless){var i=e.name,n=qe(e),r=i&&!n&&e.init?function(){this._props=[]}:e,s={init:nd,render:Z1,add:H1,kill:TM,modifier:PM,rawVars:0},o={targetTest:0,get:0,getSetter:X1,aliases:{},register:0};if(ll(),e!==r){if(Ii[i])return;Vi(r,Vi(ap(e,s),o)),sl(r.prototype,sl(s,ap(e,o))),Ii[r.prop=i]=r,e.targetTest&&(uh.push(r),N1[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}F3(i,r),e.register&&e.register(ji,r,vi)}else K3.push(e)},_e=255,ql={aqua:[0,_e,_e],lime:[0,_e,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_e],navy:[0,0,128],white:[_e,_e,_e],olive:[128,128,0],yellow:[_e,_e,0],orange:[_e,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_e,0,0],pink:[_e,192,203],cyan:[0,_e,_e],transparent:[_e,_e,_e,0]},o0=function(e,i,n){return e+=e<0?1:e>1?-1:0,(e*6<1?i+(n-i)*e*6:e<.5?n:e*3<2?i+(n-i)*(2/3-e)*6:i)*_e+.5|0},eS=function(e,i,n){var r=e?Dr(e)?[e>>16,e>>8&_e,e&_e]:0:ql.black,s,o,l,c,d,u,p,f,g,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ql[e])r=ql[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),l=e.charAt(3),e="#"+s+s+o+o+l+l+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&_e,r&_e,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&_e,e&_e]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(_g),!i)c=+r[0]%360/360,d=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(d+1):u+d-u*d,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=o0(c+1/3,s,o),r[1]=o0(c,s,o),r[2]=o0(c-1/3,s,o);else if(~e.indexOf("="))return r=e.match(E3),n&&r.length<4&&(r[3]=1),r}else r=e.match(_g)||ql.transparent;r=r.map(Number)}return i&&!v&&(s=r[0]/_e,o=r[1]/_e,l=r[2]/_e,p=Math.max(s,o,l),f=Math.min(s,o,l),u=(p+f)/2,p===f?c=d=0:(g=p-f,d=u>.5?g/(2-p-f):g/(p+f),c=p===s?(o-l)/g+(o<l?6:0):p===o?(l-s)/g+2:(s-o)/g+4,c*=60),r[0]=~~(c+.5),r[1]=~~(d*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},tS=function(e){var i=[],n=[],r=-1;return e.split(gs).forEach(function(s){var o=s.match(Da)||[];i.push.apply(i,o),n.push(r+=o.length+1)}),i.c=n,i},m2=function(e,i,n){var r="",s=(e+r).match(gs),o=i?"hsla(":"rgba(",l=0,c,d,u,p;if(!s)return e;if(s=s.map(function(f){return(f=eS(f,i,1))&&o+(i?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=tS(e),c=n.c,c.join(r)!==u.c.join(r)))for(d=e.replace(gs,"1").split(Da),p=d.length-1;l<p;l++)r+=d[l]+(~c.indexOf(l)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!d)for(d=e.split(gs),p=d.length-1;l<p;l++)r+=d[l]+s[l];return r+d[p]},gs=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ql)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),fM=/hsl[a]?\(/,iS=function(e){var i=e.join(" "),n;if(gs.lastIndex=0,gs.test(i))return n=fM.test(i),e[1]=m2(e[1],n),e[0]=m2(e[0],n,tS(e[1])),!0},sd,Mi=function(){var t=Date.now,e=500,i=33,n=t(),r=n,s=1e3/240,o=s,l=[],c,d,u,p,f,g,v=function w(S){var j=t()-r,b=S===!0,y,h,x,k;if((j>e||j<0)&&(n+=j-i),r+=j,x=r-n,y=x-o,(y>0||b)&&(k=++p.frame,f=x-p.time*1e3,p.time=x=x/1e3,o+=y+(y>=s?4:s-y),h=1),b||(c=d(w)),h)for(g=0;g<l.length;g++)l[g](x,f,k,S)};return p={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(S){return f/(1e3/(S||60))},wake:function(){M3&&(!Cg&&O1()&&(Fn=Cg=window,$1=Fn.document||{},Ni.gsap=ji,(Fn.gsapVersions||(Fn.gsapVersions=[])).push(ji.version),z3(sp||Fn.GreenSockGlobals||!Fn.gsap&&Fn||{}),K3.forEach(J3)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&p.sleep(),d=u||function(S){return setTimeout(S,o-p.time*1e3+1|0)},sd=1,v(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),sd=0,d=nd},lagSmoothing:function(S,j){e=S||1/0,i=Math.min(j||33,e)},fps:function(S){s=1e3/(S||240),o=p.time*1e3+s},add:function(S,j,b){var y=j?function(h,x,k,D){S(h,x,k,D),p.remove(y)}:S;return p.remove(S),l[b?"unshift":"push"](y),ll(),y},remove:function(S,j){~(j=l.indexOf(S))&&l.splice(j,1)&&g>=j&&g--},_listeners:l},p}(),ll=function(){return!sd&&Mi.wake()},pe={},mM=/^[\d.\-M][\d.\-,\s]/,gM=/["']/g,xM=function(e){for(var i={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,l,c,d;s<o;s++)c=n[s],l=s!==o-1?c.lastIndexOf(","):c.length,d=c.substr(0,l),i[r]=isNaN(d)?d.replace(gM,"").trim():+d,r=c.substr(l+1).trim();return i},wM=function(e){var i=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",i);return e.substring(i,~r&&r<n?e.indexOf(")",n+1):n)},yM=function(e){var i=(e+"").split("("),n=pe[i[0]];return n&&i.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[xM(i[1])]:wM(e).split(",").map($3)):pe._CE&&mM.test(e)?pe._CE("",e):n},nS=function(e){return function(i){return 1-e(1-i)}},rS=function t(e,i){for(var n=e._first,r;n;)n instanceof si?t(n,i):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==i&&(n.timeline?t(n.timeline,i):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=i)),n=n._next},mo=function(e,i){return e&&(qe(e)?e:pe[e]||yM(e))||i},Oo=function(e,i,n,r){n===void 0&&(n=function(c){return 1-i(1-c)}),r===void 0&&(r=function(c){return c<.5?i(c*2)/2:1-i((1-c)*2)/2});var s={easeIn:i,easeOut:n,easeInOut:r},o;return yi(e,function(l){pe[l]=Ni[l]=s,pe[o=l.toLowerCase()]=n;for(var c in s)pe[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=pe[l+"."+c]=s[c]}),s},sS=function(e){return function(i){return i<.5?(1-e(1-i*2))/2:.5+e((i-.5)*2)/2}},a0=function t(e,i,n){var r=i>=1?i:1,s=(n||(e?.3:.45))/(i<1?i:1),o=s/Sg*(Math.asin(1/r)||0),l=function(u){return u===1?1:r*Math.pow(2,-10*u)*GA((u-o)*s)+1},c=e==="out"?l:e==="in"?function(d){return 1-l(1-d)}:sS(l);return s=Sg/s,c.config=function(d,u){return t(e,d,u)},c},l0=function t(e,i){i===void 0&&(i=1.70158);var n=function(o){return o?--o*o*((i+1)*o+i)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:sS(n);return r.config=function(s){return t(e,s)},r};yi("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var i=e<5?e+1:e;Oo(t+",Power"+(i-1),e?function(n){return Math.pow(n,i)}:function(n){return n},function(n){return 1-Math.pow(1-n,i)},function(n){return n<.5?Math.pow(n*2,i)/2:1-Math.pow((1-n)*2,i)/2})});pe.Linear.easeNone=pe.none=pe.Linear.easeIn;Oo("Elastic",a0("in"),a0("out"),a0());(function(t,e){var i=1/e,n=2*i,r=2.5*i,s=function(l){return l<i?t*l*l:l<n?t*Math.pow(l-1.5/e,2)+.75:l<r?t*(l-=2.25/e)*l+.9375:t*Math.pow(l-2.625/e,2)+.984375};Oo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Oo("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});Oo("Circ",function(t){return-(P3(1-t*t)-1)});Oo("Sine",function(t){return t===1?1:-YA(t*UA)+1});Oo("Back",l0("in"),l0("out"),l0());pe.SteppedEase=pe.steps=Ni.SteppedEase={config:function(e,i){e===void 0&&(e=1);var n=1/e,r=e+(i?0:1),s=i?1:0,o=1-Ce;return function(l){return((r*Dd(0,o,l)|0)+s)*n}}};rl.ease=pe["quad.out"];yi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return V1+=t+","+t+"Params,"});var oS=function(e,i){this.id=HA++,e._gsap=this,this.target=e,this.harness=i,this.get=i?i.get:L3,this.set=i?i.getSetter:X1},od=function(){function t(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,al(this,+i.duration,1,1),this.data=i.data,Re&&(this._ctx=Re,Re.data.push(this)),sd||Mi.wake()}var e=t.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,al(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(ll(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(rf(this,n),!s._dp||s.parent||V3(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Bn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ce||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),O3(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+h2(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+h2(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?ol(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Ce?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?lp(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ce?0:this._rts,this.totalTime(Dd(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),nf(this),eM(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ll(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ce&&(this._tTime-=Ce)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Bn(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(wi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?lp(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=qA);var r=Rt;return Rt=n,U1(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Rt=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,p2(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,p2(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Xi(this,n),wi(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,wi(r)),this._dur||(this._zTime=-Ce),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ce:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ce,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Ce)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=qe(n)?n:B3,l=function(){var d=r.then;r.then=null,qe(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=d),s(o),r.then=d};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Zl(this)},t}();Vi(od.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ce,_prom:0,_ps:!1,_rts:1});var si=function(t){C3(e,t);function e(n,r){var s;return n===void 0&&(n={}),s=t.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=wi(n.sortChildren),Be&&Bn(n.parent||Be,ar(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&W3(ar(s),n.scrollTrigger),s}var i=e.prototype;return i.to=function(r,s,o){return vc(0,arguments,this),this},i.from=function(r,s,o){return vc(1,arguments,this),this},i.fromTo=function(r,s,o,l){return vc(2,arguments,this),this},i.set=function(r,s,o){return s.duration=0,s.parent=this,yc(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ct(r,s,Xi(this,o),1),this},i.call=function(r,s,o){return Bn(this,ct.delayedCall(0,r,s),o)},i.staggerTo=function(r,s,o,l,c,d,u){return o.duration=s,o.stagger=o.stagger||l,o.onComplete=d,o.onCompleteParams=u,o.parent=this,new ct(r,o,Xi(this,c)),this},i.staggerFrom=function(r,s,o,l,c,d,u){return o.runBackwards=1,yc(o).immediateRender=wi(o.immediateRender),this.staggerTo(r,s,o,l,c,d,u)},i.staggerFromTo=function(r,s,o,l,c,d,u,p){return l.startAt=o,yc(l).immediateRender=wi(l.immediateRender),this.staggerTo(r,s,l,c,d,u,p)},i.render=function(r,s,o){var l=this._time,c=this._dirty?this.totalDuration():this._tDur,d=this._dur,u=r<=0?0:dt(r),p=this._zTime<0!=r<0&&(this._initted||!d),f,g,v,w,S,j,b,y,h,x,k,D;if(this!==Be&&u>c&&r>=0&&(u=c),u!==this._tTime||o||p){if(l!==this._time&&d&&(u+=this._time-l,r+=this._time-l),f=u,h=this._start,y=this._ts,j=!y,p&&(d||(l=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(k=this._yoyo,S=d+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(S*100+r,s,o);if(f=dt(u%S),u===c?(w=this._repeat,f=d):(x=dt(u/S),w=~~x,w&&w===x&&(f=d,w--),f>d&&(f=d)),x=ol(this._tTime,S),!l&&this._tTime&&x!==w&&this._tTime-x*S-this._dur<=0&&(x=w),k&&w&1&&(f=d-f,D=1),w!==x&&!this._lock){var _=k&&x&1,C=_===(k&&w&1);if(w<x&&(_=!_),l=_?0:u%d?d:u,this._lock=1,this.render(l||(D?0:dt(w*S)),s,!d)._lock=0,this._tTime=u,!s&&this.parent&&Ri(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1),l&&l!==this._time||j!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,c=this._tDur,C&&(this._lock=2,l=_?d:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!j)return this;rS(this,D)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=rM(this,dt(l),dt(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,l=0),!l&&u&&!s&&!x&&(Ri(this,"onStart"),this._tTime!==u))return this;if(f>=l&&r>=0)for(g=this._first;g;){if(v=g._next,(g._act||f>=g._start)&&g._ts&&b!==g){if(g.parent!==this)return this.render(r,s,o);if(g.render(g._ts>0?(f-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(f-g._start)*g._ts,s,o),f!==this._time||!this._ts&&!j){b=0,v&&(u+=this._zTime=-Ce);break}}g=v}else{g=this._last;for(var E=r<0?r:f;g;){if(v=g._prev,(g._act||E<=g._end)&&g._ts&&b!==g){if(g.parent!==this)return this.render(r,s,o);if(g.render(g._ts>0?(E-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(E-g._start)*g._ts,s,o||Rt&&U1(g)),f!==this._time||!this._ts&&!j){b=0,v&&(u+=this._zTime=E?-Ce:Ce);break}}g=v}}if(b&&!s&&(this.pause(),b.render(f>=l?0:-Ce)._zTime=f>=l?1:-1,this._ts))return this._start=h,nf(this),this.render(r,s,o);this._onUpdate&&!s&&Ri(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&l)&&(h===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!d)&&(u===c&&this._ts>0||!u&&this._ts<0)&&js(this,1),!s&&!(r<0&&!l)&&(u||l||!c)&&(Ri(this,u===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(r,s){var o=this;if(Dr(s)||(s=Xi(this,s,r)),!(r instanceof od)){if(Xt(r))return r.forEach(function(l){return o.add(l,s)}),this;if(Pt(r))return this.addLabel(r,s);if(qe(r))r=ct.delayedCall(0,r);else return this}return this!==r?Bn(this,r,s):this},i.getChildren=function(r,s,o,l){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),l===void 0&&(l=-nn);for(var c=[],d=this._first;d;)d._start>=l&&(d instanceof ct?s&&c.push(d):(o&&c.push(d),r&&c.push.apply(c,d.getChildren(!0,s,o)))),d=d._next;return c},i.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},i.remove=function(r){return Pt(r)?this.removeLabel(r):qe(r)?this.killTweensOf(r):(r.parent===this&&tf(this,r),r===this._recent&&(this._recent=this._last),fo(this))},i.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=dt(Mi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),t.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},i.addLabel=function(r,s){return this.labels[r]=Xi(this,s),this},i.removeLabel=function(r){return delete this.labels[r],this},i.addPause=function(r,s,o){var l=ct.delayedCall(0,s||nd,o);return l.data="isPause",this._hasPause=1,Bn(this,l,Xi(this,r))},i.removePause=function(r){var s=this._first;for(r=Xi(this,r);s;)s._start===r&&s.data==="isPause"&&js(s),s=s._next},i.killTweensOf=function(r,s,o){for(var l=this.getTweensOf(r,o),c=l.length;c--;)Qr!==l[c]&&l[c].kill(r,s);return this},i.getTweensOf=function(r,s){for(var o=[],l=rn(r),c=this._first,d=Dr(s),u;c;)c instanceof ct?QA(c._targets,l)&&(d?(!Qr||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(u=c.getTweensOf(l,s)).length&&o.push.apply(o,u),c=c._next;return o},i.tweenTo=function(r,s){s=s||{};var o=this,l=Xi(o,r),c=s,d=c.startAt,u=c.onStart,p=c.onStartParams,f=c.immediateRender,g,v=ct.to(o,Vi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:s.duration||Math.abs((l-(d&&"time"in d?d.time:o._time))/o.timeScale())||Ce,onStart:function(){if(o.pause(),!g){var S=s.duration||Math.abs((l-(d&&"time"in d?d.time:o._time))/o.timeScale());v._dur!==S&&al(v,S,0,1).render(v._time,!0,!0),g=1}u&&u.apply(v,p||[])}},s));return f?v.render(0):v},i.tweenFromTo=function(r,s,o){return this.tweenTo(s,Vi({startAt:{time:Xi(this,r)}},o))},i.recent=function(){return this._recent},i.nextLabel=function(r){return r===void 0&&(r=this._time),f2(this,Xi(this,r))},i.previousLabel=function(r){return r===void 0&&(r=this._time),f2(this,Xi(this,r),1)},i.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ce)},i.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var l=this._first,c=this.labels,d;l;)l._start>=o&&(l._start+=r,l._end+=r),l=l._next;if(s)for(d in c)c[d]>=o&&(c[d]+=r);return fo(this)},i.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return t.prototype.invalidate.call(this,r)},i.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),fo(this)},i.totalDuration=function(r){var s=0,o=this,l=o._last,c=nn,d,u,p;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(p=o.parent;l;)d=l._prev,l._dirty&&l.totalDuration(),u=l._start,u>c&&o._sort&&l._ts&&!o._lock?(o._lock=1,Bn(o,l,u-l._delay,1)._lock=0):c=u,u<0&&l._ts&&(s-=u,(!p&&!o._dp||p&&p.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),l._end>s&&l._ts&&(s=l._end),l=d;al(o,o===Be&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Be._ts&&(O3(Be,lp(r,Be)),R3=Mi.frame),Mi.frame>=d2){d2+=Oi.autoSleep||120;var s=Be._first;if((!s||!s._ts)&&Oi.autoSleep&&Mi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Mi.sleep()}}},e}(od);Vi(si.prototype,{_lock:0,_hasPause:0,_forcing:0});var vM=function(e,i,n,r,s,o,l){var c=new vi(this._pt,e,i,0,1,hS,null,s),d=0,u=0,p,f,g,v,w,S,j,b;for(c.b=n,c.e=r,n+="",r+="",(j=~r.indexOf("random("))&&(r=rd(r)),o&&(b=[n,r],o(b,e,i),n=b[0],r=b[1]),f=n.match(r0)||[];p=r0.exec(r);)v=p[0],w=r.substring(d,p.index),g?g=(g+1)%5:w.substr(-5)==="rgba("&&(g=1),v!==f[u++]&&(S=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:w||u===1?w:",",s:S,c:v.charAt(1)==="="?Ra(S,v)-S:parseFloat(v)-S,m:g&&g<4?Math.round:0},d=r0.lastIndex);return c.c=d<r.length?r.substring(d,r.length):"",c.fp=l,(I3.test(r)||j)&&(c.e=0),this._pt=c,c},H1=function(e,i,n,r,s,o,l,c,d,u){qe(r)&&(r=r(s||0,e,o));var p=e[i],f=n!=="get"?n:qe(p)?d?e[i.indexOf("set")||!qe(e["get"+i.substr(3)])?i:"get"+i.substr(3)](d):e[i]():p,g=qe(p)?d?SM:dS:G1,v;if(Pt(r)&&(~r.indexOf("random(")&&(r=rd(r)),r.charAt(1)==="="&&(v=Ra(f,r)+(Yt(f)||0),(v||v===0)&&(r=v))),!u||f!==r||zg)return!isNaN(f*r)&&r!==""?(v=new vi(this._pt,e,i,+f||0,r-(f||0),typeof p=="boolean"?CM:uS,0,g),d&&(v.fp=d),l&&v.modifier(l,this,e),this._pt=v):(!p&&!(i in e)&&B1(i,r),vM.call(this,e,i,f,r,g,c||Oi.stringFilter,d))},bM=function(e,i,n,r,s){if(qe(e)&&(e=bc(e,s,i,n,r)),!Gn(e)||e.style&&e.nodeType||Xt(e)||T3(e))return Pt(e)?bc(e,s,i,n,r):e;var o={},l;for(l in e)o[l]=bc(e[l],s,i,n,r);return o},aS=function(e,i,n,r,s,o){var l,c,d,u;if(Ii[e]&&(l=new Ii[e]).init(s,l.rawVars?i[e]:bM(i[e],r,s,o,n),n,r,o)!==!1&&(n._pt=c=new vi(n._pt,s,e,0,1,l.render,l,0,l.priority),n!==Sa))for(d=n._ptLookup[n._targets.indexOf(s)],u=l._props.length;u--;)d[l._props[u]]=c;return l},Qr,zg,Y1=function t(e,i,n){var r=e.vars,s=r.ease,o=r.startAt,l=r.immediateRender,c=r.lazy,d=r.onUpdate,u=r.runBackwards,p=r.yoyoEase,f=r.keyframes,g=r.autoRevert,v=e._dur,w=e._startAt,S=e._targets,j=e.parent,b=j&&j.data==="nested"?j.vars.targets:S,y=e._overwrite==="auto"&&!R1,h=e.timeline,x,k,D,_,C,E,z,A,L,O,W,V,B;if(h&&(!f||!s)&&(s="none"),e._ease=mo(s,rl.ease),e._yEase=p?nS(mo(p===!0?s:p,rl.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!h&&!!r.runBackwards,!h||f&&!r.stagger){if(A=S[0]?po(S[0]).harness:0,V=A&&r[A.prop],x=ap(r,N1),w&&(w._zTime<0&&w.progress(1),i<0&&u&&l&&!g?w.render(-1,!0):w.revert(u&&v?dh:ZA),w._lazy=0),o){if(js(e._startAt=ct.set(S,Vi({data:"isStart",overwrite:!1,parent:j,immediateRender:!0,lazy:!w&&wi(c),startAt:null,delay:0,onUpdate:d&&function(){return Ri(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,i<0&&(Rt||!l&&!g)&&e._startAt.revert(dh),l&&v&&i<=0&&n<=0){i&&(e._zTime=i);return}}else if(u&&v&&!w){if(i&&(l=!1),D=Vi({overwrite:!1,data:"isFromStart",lazy:l&&!w&&wi(c),immediateRender:l,stagger:0,parent:j},x),V&&(D[A.prop]=V),js(e._startAt=ct.set(S,D)),e._startAt._dp=0,e._startAt._sat=e,i<0&&(Rt?e._startAt.revert(dh):e._startAt.render(-1,!0)),e._zTime=i,!l)t(e._startAt,Ce,Ce);else if(!i)return}for(e._pt=e._ptCache=0,c=v&&wi(c)||c&&!v,k=0;k<S.length;k++){if(C=S[k],z=C._gsap||W1(S)[k]._gsap,e._ptLookup[k]=O={},Pg[z.id]&&ms.length&&op(),W=b===S?k:b.indexOf(C),A&&(L=new A).init(C,V||x,e,W,b)!==!1&&(e._pt=_=new vi(e._pt,C,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(I){O[I]=_}),L.priority&&(E=1)),!A||V)for(D in x)Ii[D]&&(L=aS(D,x,e,W,C,b))?L.priority&&(E=1):O[D]=_=H1.call(e,C,D,"get",x[D],W,b,0,r.stringFilter);e._op&&e._op[k]&&e.kill(C,e._op[k]),y&&e._pt&&(Qr=e,Be.killTweensOf(C,O,e.globalTime(i)),B=!e.parent,Qr=0),e._pt&&c&&(Pg[z.id]=1)}E&&pS(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!B,f&&i<=0&&h.render(nn,!0,!0)},kM=function(e,i,n,r,s,o,l,c){var d=(e._pt&&e._ptCache||(e._ptCache={}))[i],u,p,f,g;if(!d)for(d=e._ptCache[i]=[],f=e._ptLookup,g=e._targets.length;g--;){if(u=f[g][i],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==i&&u.fp!==i;)u=u._next;if(!u)return zg=1,e.vars[i]="+=0",Y1(e,l),zg=0,c?id(i+" not eligible for reset"):1;d.push(u)}for(g=d.length;g--;)p=d[g],u=p._pt||p,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,p.e&&(p.e=it(n)+Yt(p.e)),p.b&&(p.b=u.s+Yt(p.b))},jM=function(e,i){var n=e[0]?po(e[0]).harness:0,r=n&&n.aliases,s,o,l,c;if(!r)return i;s=sl({},i);for(o in r)if(o in s)for(c=r[o].split(","),l=c.length;l--;)s[c[l]]=s[o];return s},DM=function(e,i,n,r){var s=i.ease||r||"power1.inOut",o,l;if(Xt(i))l=n[e]||(n[e]=[]),i.forEach(function(c,d){return l.push({t:d/(i.length-1)*100,v:c,e:s})});else for(o in i)l=n[o]||(n[o]=[]),o==="ease"||l.push({t:parseFloat(e),v:i[o],e:s})},bc=function(e,i,n,r,s){return qe(e)?e.call(i,n,r,s):Pt(e)&&~e.indexOf("random(")?rd(e):e},lS=V1+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",cS={};yi(lS+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return cS[t]=1});var ct=function(t){C3(e,t);function e(n,r,s,o){var l;typeof r=="number"&&(s.duration=r,r=s,s=null),l=t.call(this,o?r:yc(r))||this;var c=l.vars,d=c.duration,u=c.delay,p=c.immediateRender,f=c.stagger,g=c.overwrite,v=c.keyframes,w=c.defaults,S=c.scrollTrigger,j=c.yoyoEase,b=r.parent||Be,y=(Xt(n)||T3(n)?Dr(n[0]):"length"in r)?[n]:rn(n),h,x,k,D,_,C,E,z;if(l._targets=y.length?W1(y):id("GSAP target "+n+" not found. https://gsap.com",!Oi.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=g,v||f||iu(d)||iu(u)){if(r=l.vars,h=l.timeline=new si({data:"nested",defaults:w||{},targets:b&&b.data==="nested"?b.vars.targets:y}),h.kill(),h.parent=h._dp=ar(l),h._start=0,f||iu(d)||iu(u)){if(D=y.length,E=f&&G3(f),Gn(f))for(_ in f)~lS.indexOf(_)&&(z||(z={}),z[_]=f[_]);for(x=0;x<D;x++)k=ap(r,cS),k.stagger=0,j&&(k.yoyoEase=j),z&&sl(k,z),C=y[x],k.duration=+bc(d,ar(l),x,C,y),k.delay=(+bc(u,ar(l),x,C,y)||0)-l._delay,!f&&D===1&&k.delay&&(l._delay=u=k.delay,l._start+=u,k.delay=0),h.to(C,k,E?E(x,C,y):0),h._ease=pe.none;h.duration()?d=u=0:l.timeline=0}else if(v){yc(Vi(h.vars.defaults,{ease:"none"})),h._ease=mo(v.ease||r.ease||"none");var A=0,L,O,W;if(Xt(v))v.forEach(function(V){return h.to(y,V,">")}),h.duration();else{k={};for(_ in v)_==="ease"||_==="easeEach"||DM(_,v[_],k,v.easeEach);for(_ in k)for(L=k[_].sort(function(V,B){return V.t-B.t}),A=0,x=0;x<L.length;x++)O=L[x],W={ease:O.e,duration:(O.t-(x?L[x-1].t:0))/100*d},W[_]=O.v,h.to(y,W,A),A+=W.duration;h.duration()<d&&h.to({},{duration:d-h.duration()})}}d||l.duration(d=h.duration())}else l.timeline=0;return g===!0&&!R1&&(Qr=ar(l),Be.killTweensOf(y),Qr=0),Bn(b,ar(l),s),r.reversed&&l.reverse(),r.paused&&l.paused(!0),(p||!d&&!v&&l._start===dt(b._time)&&wi(p)&&tM(ar(l))&&b.data!=="nested")&&(l._tTime=-Ce,l.render(Math.max(0,-u)||0)),S&&W3(ar(l),S),l}var i=e.prototype;return i.render=function(r,s,o){var l=this._time,c=this._tDur,d=this._dur,u=r<0,p=r>c-Ce&&!u?c:r<Ce?0:r,f,g,v,w,S,j,b,y,h;if(!d)nM(this,r,s,o);else if(p!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=p,y=this.timeline,this._repeat){if(w=d+this._rDelay,this._repeat<-1&&u)return this.totalTime(w*100+r,s,o);if(f=dt(p%w),p===c?(v=this._repeat,f=d):(S=dt(p/w),v=~~S,v&&v===S?(f=d,v--):f>d&&(f=d)),j=this._yoyo&&v&1,j&&(h=this._yEase,f=d-f),S=ol(this._tTime,w),f===l&&!o&&this._initted&&v===S)return this._tTime=p,this;v!==S&&(y&&this._yEase&&rS(y,j),this.vars.repeatRefresh&&!j&&!this._lock&&f!==w&&this._initted&&(this._lock=o=1,this.render(dt(w*v),!0).invalidate()._lock=0))}if(!this._initted){if(U3(this,u?r:f,o,s,p))return this._tTime=0,this;if(l!==this._time&&!(o&&this.vars.repeatRefresh&&v!==S))return this;if(d!==this._dur)return this.render(r,s,o)}if(this._tTime=p,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(h||this._ease)(f/d),this._from&&(this.ratio=b=1-b),!l&&p&&!s&&!S&&(Ri(this,"onStart"),this._tTime!==p))return this;for(g=this._pt;g;)g.r(b,g.d),g=g._next;y&&y.render(r<0?r:y._dur*y._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Tg(this,r,s,o),Ri(this,"onUpdate")),this._repeat&&v!==S&&this.vars.onRepeat&&!s&&this.parent&&Ri(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(u&&!this._onUpdate&&Tg(this,r,!0,!0),(r||!d)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&js(this,1),!s&&!(u&&!l)&&(p||l||j)&&(Ri(this,p===c?"onComplete":"onReverseComplete",!0),this._prom&&!(p<c&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),t.prototype.invalidate.call(this,r)},i.resetTo=function(r,s,o,l,c){sd||Mi.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Y1(this,d),u=this._ease(d/this._dur),kM(this,r,s,o,l,u,d,c)?this.resetTo(r,s,o,l,1):(rf(this,0),this.parent||N3(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Zl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Rt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Qr&&Qr.vars.overwrite!==!0)._first||Zl(this),this.parent&&o!==this.timeline.totalDuration()&&al(this,this._dur*this.timeline._tDur/o,0,1),this}var l=this._targets,c=r?rn(r):l,d=this._ptLookup,u=this._pt,p,f,g,v,w,S,j;if((!s||s==="all")&&JA(l,c))return s==="all"&&(this._pt=0),Zl(this);for(p=this._op=this._op||[],s!=="all"&&(Pt(s)&&(w={},yi(s,function(b){return w[b]=1}),s=w),s=jM(l,s)),j=l.length;j--;)if(~c.indexOf(l[j])){f=d[j],s==="all"?(p[j]=s,v=f,g={}):(g=p[j]=p[j]||{},v=s);for(w in v)S=f&&f[w],S&&((!("kill"in S.d)||S.d.kill(w)===!0)&&tf(this,S,"_pt"),delete f[w]),g!=="all"&&(g[w]=1)}return this._initted&&!this._pt&&u&&Zl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return vc(1,arguments)},e.delayedCall=function(r,s,o,l){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:l})},e.fromTo=function(r,s,o){return vc(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Be.killTweensOf(r,s,o)},e}(od);Vi(ct.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});yi("staggerTo,staggerFrom,staggerFromTo",function(t){ct[t]=function(){var e=new si,i=Ig.call(arguments,0);return i.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,i)}});var G1=function(e,i,n){return e[i]=n},dS=function(e,i,n){return e[i](n)},SM=function(e,i,n,r){return e[i](r.fp,n)},_M=function(e,i,n){return e.setAttribute(i,n)},X1=function(e,i){return qe(e[i])?dS:L1(e[i])&&e.setAttribute?_M:G1},uS=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e6)/1e6,i)},CM=function(e,i){return i.set(i.t,i.p,!!(i.s+i.c*e),i)},hS=function(e,i){var n=i._pt,r="";if(!e&&i.b)r=i.b;else if(e===1&&i.e)r=i.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=i.c}i.set(i.t,i.p,r,i)},Z1=function(e,i){for(var n=i._pt;n;)n.r(e,n.d),n=n._next},PM=function(e,i,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,i,n),s=o},TM=function(e){for(var i=this._pt,n,r;i;)r=i._next,i.p===e&&!i.op||i.op===e?tf(this,i,"_pt"):i.dep||(n=1),i=r;return!n},EM=function(e,i,n,r){r.mSet(e,i,r.m.call(r.tween,n,r.mt),r)},pS=function(e){for(var i=e._pt,n,r,s,o;i;){for(n=i._next,r=s;r&&r.pr>i.pr;)r=r._next;(i._prev=r?r._prev:o)?i._prev._next=i:s=i,(i._next=r)?r._prev=i:o=i,i=n}e._pt=s},vi=function(){function t(i,n,r,s,o,l,c,d,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=l||uS,this.d=c||this,this.set=d||G1,this.pr=u||0,this._next=i,i&&(i._prev=this)}var e=t.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=EM,this.m=n,this.mt=s,this.tween=r},t}();yi(V1+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return N1[t]=1});Ni.TweenMax=Ni.TweenLite=ct;Ni.TimelineLite=Ni.TimelineMax=si;Be=new si({sortChildren:!1,defaults:rl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Oi.stringFilter=iS;var go=[],hh={},IM=[],g2=0,AM=0,c0=function(e){return(hh[e]||IM).map(function(i){return i()})},Fg=function(){var e=Date.now(),i=[];e-g2>2&&(c0("matchMediaInit"),go.forEach(function(n){var r=n.queries,s=n.conditions,o,l,c,d;for(l in r)o=Fn.matchMedia(r[l]).matches,o&&(c=1),o!==s[l]&&(s[l]=o,d=1);d&&(n.revert(),c&&i.push(n))}),c0("matchMediaRevert"),i.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),g2=e,c0("matchMedia"))},fS=function(){function t(i,n){this.selector=n&&Ag(n),this.data=[],this._r=[],this.isReverted=!1,this.id=AM++,i&&this.add(i)}var e=t.prototype;return e.add=function(n,r,s){qe(n)&&(s=r,r=n,n=qe);var o=this,l=function(){var d=Re,u=o.selector,p;return d&&d!==o&&d.data.push(o),s&&(o.selector=Ag(s)),Re=o,p=r.apply(o,arguments),qe(p)&&o._r.push(p),Re=d,o.selector=u,o.isReverted=!1,p};return o.last=l,n===qe?l(o,function(c){return o.add(null,c)}):n?o[n]=l:l},e.ignore=function(n){var r=Re;Re=null,n(this),Re=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof t?n.push.apply(n,r.getTweens()):r instanceof ct&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var l=s.getTweens(),c=s.data.length,d;c--;)d=s.data[c],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(u){return l.splice(l.indexOf(u),1)}));for(l.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,p){return p.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)d=s.data[c],d instanceof si?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof ct)&&d.revert&&d.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),r)for(var o=go.length;o--;)go[o].id===this.id&&go.splice(o,1)},e.revert=function(n){this.kill(n||{})},t}(),MM=function(){function t(i){this.contexts=[],this.scope=i,Re&&Re.data.push(this)}var e=t.prototype;return e.add=function(n,r,s){Gn(n)||(n={matches:n});var o=new fS(0,s||this.scope),l=o.conditions={},c,d,u;Re&&!o.selector&&(o.selector=Re.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(d in n)d==="all"?u=1:(c=Fn.matchMedia(n[d]),c&&(go.indexOf(o)<0&&go.push(o),(l[d]=c.matches)&&(u=1),c.addListener?c.addListener(Fg):c.addEventListener("change",Fg)));return u&&r(o,function(p){return o.add(null,p)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},t}(),cp={registerPlugin:function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];i.forEach(function(r){return J3(r)})},timeline:function(e){return new si(e)},getTweensOf:function(e,i){return Be.getTweensOf(e,i)},getProperty:function(e,i,n,r){Pt(e)&&(e=rn(e)[0]);var s=po(e||{}).get,o=n?B3:$3;return n==="native"&&(n=""),e&&(i?o((Ii[i]&&Ii[i].get||s)(e,i,n,r)):function(l,c,d){return o((Ii[l]&&Ii[l].get||s)(e,l,c,d))})},quickSetter:function(e,i,n){if(e=rn(e),e.length>1){var r=e.map(function(u){return ji.quickSetter(u,i,n)}),s=r.length;return function(u){for(var p=s;p--;)r[p](u)}}e=e[0]||{};var o=Ii[i],l=po(e),c=l.harness&&(l.harness.aliases||{})[i]||i,d=o?function(u){var p=new o;Sa._pt=0,p.init(e,n?u+n:u,Sa,0,[e]),p.render(1,p),Sa._pt&&Z1(1,Sa)}:l.set(e,c);return o?d:function(u){return d(e,c,n?u+n:u,l,1)}},quickTo:function(e,i,n){var r,s=ji.to(e,Vi((r={},r[i]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(c,d,u){return s.resetTo(i,c,d,u)};return o.tween=s,o},isTweening:function(e){return Be.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=mo(e.ease,rl.ease)),u2(rl,e||{})},config:function(e){return u2(Oi,e||{})},registerEffect:function(e){var i=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(l){return l&&!Ii[l]&&!Ni[l]&&id(i+" effect requires "+l+" plugin.")}),s0[i]=function(l,c,d){return n(rn(l),Vi(c||{},s),d)},o&&(si.prototype[i]=function(l,c,d){return this.add(s0[i](l,Gn(c)?c:(d=c)&&{},this),d)})},registerEase:function(e,i){pe[e]=mo(i)},parseEase:function(e,i){return arguments.length?mo(e,i):pe},getById:function(e){return Be.getById(e)},exportRoot:function(e,i){e===void 0&&(e={});var n=new si(e),r,s;for(n.smoothChildTiming=wi(e.smoothChildTiming),Be.remove(n),n._dp=0,n._time=n._tTime=Be._time,r=Be._first;r;)s=r._next,(i||!(!r._dur&&r instanceof ct&&r.vars.onComplete===r._targets[0]))&&Bn(n,r,r._start-r._delay),r=s;return Bn(Be,n,0),n},context:function(e,i){return e?new fS(e,i):Re},matchMedia:function(e){return new MM(e)},matchMediaRefresh:function(){return go.forEach(function(e){var i=e.conditions,n,r;for(r in i)i[r]&&(i[r]=!1,n=1);n&&e.revert()})||Fg()},addEventListener:function(e,i){var n=hh[e]||(hh[e]=[]);~n.indexOf(i)||n.push(i)},removeEventListener:function(e,i){var n=hh[e],r=n&&n.indexOf(i);r>=0&&n.splice(r,1)},utils:{wrap:uM,wrapYoyo:hM,distribute:G3,random:Z3,snap:X3,normalize:dM,getUnit:Yt,clamp:oM,splitColor:eS,toArray:rn,selector:Ag,mapRange:Q3,pipe:lM,unitize:cM,interpolate:pM,shuffle:Y3},install:z3,effects:s0,ticker:Mi,updateRoot:si.updateRoot,plugins:Ii,globalTimeline:Be,core:{PropTween:vi,globals:F3,Tween:ct,Timeline:si,Animation:od,getCache:po,_removeLinkedListItem:tf,reverting:function(){return Rt},context:function(e){return e&&Re&&(Re.data.push(e),e._ctx=Re),Re},suppressOverwrites:function(e){return R1=e}}};yi("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return cp[t]=ct[t]});Mi.add(si.updateRoot);Sa=cp.to({},{duration:0});var zM=function(e,i){for(var n=e._pt;n&&n.p!==i&&n.op!==i&&n.fp!==i;)n=n._next;return n},FM=function(e,i){var n=e._targets,r,s,o;for(r in i)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=zM(o,r)),o&&o.modifier&&o.modifier(i[r],e,n[s],r))},d0=function(e,i){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(l){var c,d;if(Pt(s)&&(c={},yi(s,function(u){return c[u]=1}),s=c),i){c={};for(d in s)c[d]=i(s[d]);s=c}FM(l,s)}}}},ji=cp.registerPlugin({name:"attr",init:function(e,i,n,r,s){var o,l,c;this.tween=n;for(o in i)c=e.getAttribute(o)||"",l=this.add(e,"setAttribute",(c||0)+"",i[o],r,s,0,0,o),l.op=o,l.b=c,this._props.push(o)},render:function(e,i){for(var n=i._pt;n;)Rt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,i){for(var n=i.length;n--;)this.add(e,n,e[n]||0,i[n],0,0,0,0,0,1)}},d0("roundProps",Mg),d0("modifiers"),d0("snap",X3))||cp;ct.version=si.version=ji.version="3.13.0";M3=1;O1()&&ll();pe.Power0;pe.Power1;pe.Power2;pe.Power3;pe.Power4;pe.Linear;pe.Quad;pe.Cubic;pe.Quart;pe.Quint;pe.Strong;pe.Elastic;pe.Back;pe.SteppedEase;pe.Bounce;pe.Sine;pe.Expo;pe.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var x2,Kr,La,q1,oo,w2,Q1,RM=function(){return typeof window<"u"},Sr={},Qs=180/Math.PI,Oa=Math.PI/180,Xo=Math.atan2,y2=1e8,K1=/([A-Z])/g,LM=/(left|right|width|margin|padding|x)/i,OM=/[\s,\(]\S/,Nn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Rg=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},$M=function(e,i){return i.set(i.t,i.p,e===1?i.e:Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},BM=function(e,i){return i.set(i.t,i.p,e?Math.round((i.s+i.c*e)*1e4)/1e4+i.u:i.b,i)},NM=function(e,i){var n=i.s+i.c*e;i.set(i.t,i.p,~~(n+(n<0?-.5:.5))+i.u,i)},mS=function(e,i){return i.set(i.t,i.p,e?i.e:i.b,i)},gS=function(e,i){return i.set(i.t,i.p,e!==1?i.b:i.e,i)},VM=function(e,i,n){return e.style[i]=n},WM=function(e,i,n){return e.style.setProperty(i,n)},UM=function(e,i,n){return e._gsap[i]=n},HM=function(e,i,n){return e._gsap.scaleX=e._gsap.scaleY=n},YM=function(e,i,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},GM=function(e,i,n,r,s){var o=e._gsap;o[i]=n,o.renderTransform(s,o)},Ve="transform",bi=Ve+"Origin",XM=function t(e,i){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Sr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Nn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(l){return n.tfm[l]=cr(r,l)}):this.tfm[e]=o.x?o[e]:cr(r,e),e===bi&&(this.tfm.zOrigin=o.zOrigin);else return Nn.transform.split(",").forEach(function(l){return t.call(n,l,i)});if(this.props.indexOf(Ve)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(bi,i,"")),e=Ve}(s||i)&&this.props.push(e,i,s[e])},xS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ZM=function(){var e=this.props,i=this.target,n=i.style,r=i._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?i[e[s]](e[s+2]):i[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(K1,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),s=Q1(),(!s||!s.isStart)&&!n[Ve]&&(xS(n),r.zOrigin&&n[bi]&&(n[bi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},wS=function(e,i){var n={target:e,props:[],revert:ZM,save:XM};return e._gsap||ji.core.getCache(e),i&&e.style&&e.nodeType&&i.split(",").forEach(function(r){return n.save(r)}),n},yS,Lg=function(e,i){var n=Kr.createElementNS?Kr.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Kr.createElement(e);return n&&n.style?n:Kr.createElement(e)},sn=function t(e,i,n){var r=getComputedStyle(e);return r[i]||r.getPropertyValue(i.replace(K1,"-$1").toLowerCase())||r.getPropertyValue(i)||!n&&t(e,cl(i)||i,1)||""},v2="O,Moz,ms,Ms,Webkit".split(","),cl=function(e,i,n){var r=i||oo,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(v2[o]+e in s););return o<0?null:(o===3?"ms":o>=0?v2[o]:"")+e},Og=function(){RM()&&window.document&&(x2=window,Kr=x2.document,La=Kr.documentElement,oo=Lg("div")||{style:{}},Lg("div"),Ve=cl(Ve),bi=Ve+"Origin",oo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yS=!!cl("perspective"),Q1=ji.core.reverting,q1=1)},b2=function(e){var i=e.ownerSVGElement,n=Lg("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),La.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),La.removeChild(n),s},k2=function(e,i){for(var n=i.length;n--;)if(e.hasAttribute(i[n]))return e.getAttribute(i[n])},vS=function(e){var i,n;try{i=e.getBBox()}catch{i=b2(e),n=1}return i&&(i.width||i.height)||n||(i=b2(e)),i&&!i.width&&!i.x&&!i.y?{x:+k2(e,["x","cx","x1"])||0,y:+k2(e,["y","cy","y1"])||0,width:0,height:0}:i},bS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&vS(e))},Po=function(e,i){if(i){var n=e.style,r;i in Sr&&i!==bi&&(i=Ve),n.removeProperty?(r=i.substr(0,2),(r==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),n.removeProperty(r==="--"?i:i.replace(K1,"-$1").toLowerCase())):n.removeAttribute(i)}},Jr=function(e,i,n,r,s,o){var l=new vi(e._pt,i,n,0,1,o?gS:mS);return e._pt=l,l.b=r,l.e=s,e._props.push(n),l},j2={deg:1,rad:1,turn:1},qM={grid:1,flex:1},Ds=function t(e,i,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",l=oo.style,c=LM.test(i),d=e.tagName.toLowerCase()==="svg",u=(d?"client":"offset")+(c?"Width":"Height"),p=100,f=r==="px",g=r==="%",v,w,S,j;if(r===o||!s||j2[r]||j2[o])return s;if(o!=="px"&&!f&&(s=t(e,i,n,"px")),j=e.getCTM&&bS(e),(g||o==="%")&&(Sr[i]||~i.indexOf("adius")))return v=j?e.getBBox()[c?"width":"height"]:e[u],it(g?s/v*p:s/100*v);if(l[c?"width":"height"]=p+(f?o:r),w=r!=="rem"&&~i.indexOf("adius")||r==="em"&&e.appendChild&&!d?e:e.parentNode,j&&(w=(e.ownerSVGElement||{}).parentNode),(!w||w===Kr||!w.appendChild)&&(w=Kr.body),S=w._gsap,S&&g&&S.width&&c&&S.time===Mi.time&&!S.uncache)return it(s/S.width*p);if(g&&(i==="height"||i==="width")){var b=e.style[i];e.style[i]=p+r,v=e[u],b?e.style[i]=b:Po(e,i)}else(g||o==="%")&&!qM[sn(w,"display")]&&(l.position=sn(e,"position")),w===e&&(l.position="static"),w.appendChild(oo),v=oo[u],w.removeChild(oo),l.position="absolute";return c&&g&&(S=po(w),S.time=Mi.time,S.width=w[u]),it(f?v*s/p:v&&s?p/v*s:0)},cr=function(e,i,n,r){var s;return q1||Og(),i in Nn&&i!=="transform"&&(i=Nn[i],~i.indexOf(",")&&(i=i.split(",")[0])),Sr[i]&&i!=="transform"?(s=ld(e,r),s=i!=="transformOrigin"?s[i]:s.svg?s.origin:up(sn(e,bi))+" "+s.zOrigin+"px"):(s=e.style[i],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=dp[i]&&dp[i](e,i,n)||sn(e,i)||L3(e,i)||(i==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ds(e,i,s,n)+n:s},QM=function(e,i,n,r){if(!n||n==="none"){var s=cl(i,e,1),o=s&&sn(e,s,1);o&&o!==n?(i=s,n=o):i==="borderColor"&&(n=sn(e,"borderTopColor"))}var l=new vi(this._pt,e.style,i,0,1,hS),c=0,d=0,u,p,f,g,v,w,S,j,b,y,h,x;if(l.b=n,l.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=sn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(w=e.style[i],e.style[i]=r,r=sn(e,i)||r,w?e.style[i]=w:Po(e,i)),u=[n,r],iS(u),n=u[0],r=u[1],f=n.match(Da)||[],x=r.match(Da)||[],x.length){for(;p=Da.exec(r);)S=p[0],b=r.substring(c,p.index),v?v=(v+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(v=1),S!==(w=f[d++]||"")&&(g=parseFloat(w)||0,h=w.substr((g+"").length),S.charAt(1)==="="&&(S=Ra(g,S)+h),j=parseFloat(S),y=S.substr((j+"").length),c=Da.lastIndex-y.length,y||(y=y||Oi.units[i]||h,c===r.length&&(r+=y,l.e+=y)),h!==y&&(g=Ds(e,i,w,y)||0),l._pt={_next:l._pt,p:b||d===1?b:",",s:g,c:j-g,m:v&&v<4||i==="zIndex"?Math.round:0});l.c=c<r.length?r.substring(c,r.length):""}else l.r=i==="display"&&r==="none"?gS:mS;return I3.test(r)&&(l.e=0),this._pt=l,l},D2={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},KM=function(e){var i=e.split(" "),n=i[0],r=i[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),i[0]=D2[n]||n,i[1]=D2[r]||r,i.join(" ")},JM=function(e,i){if(i.tween&&i.tween._time===i.tween._dur){var n=i.t,r=n.style,s=i.u,o=n._gsap,l,c,d;if(s==="all"||s===!0)r.cssText="",c=1;else for(s=s.split(","),d=s.length;--d>-1;)l=s[d],Sr[l]&&(c=1,l=l==="transformOrigin"?bi:Ve),Po(n,l);c&&(Po(n,Ve),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ld(n,1),o.uncache=1,xS(r)))}},dp={clearProps:function(e,i,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new vi(e._pt,i,n,0,0,JM);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},ad=[1,0,0,1,0,0],kS={},jS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},S2=function(e){var i=sn(e,Ve);return jS(i)?ad:i.substr(7).match(E3).map(it)},J1=function(e,i){var n=e._gsap||po(e),r=e.style,s=S2(e),o,l,c,d;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?ad:s):(s===ad&&!e.offsetParent&&e!==La&&!n.svg&&(c=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,l=e.nextElementSibling,La.appendChild(e)),s=S2(e),c?r.display=c:Po(e,"display"),d&&(l?o.insertBefore(e,l):o?o.appendChild(e):La.removeChild(e))),i&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},$g=function(e,i,n,r,s,o){var l=e._gsap,c=s||J1(e,!0),d=l.xOrigin||0,u=l.yOrigin||0,p=l.xOffset||0,f=l.yOffset||0,g=c[0],v=c[1],w=c[2],S=c[3],j=c[4],b=c[5],y=i.split(" "),h=parseFloat(y[0])||0,x=parseFloat(y[1])||0,k,D,_,C;n?c!==ad&&(D=g*S-v*w)&&(_=h*(S/D)+x*(-w/D)+(w*b-S*j)/D,C=h*(-v/D)+x*(g/D)-(g*b-v*j)/D,h=_,x=C):(k=vS(e),h=k.x+(~y[0].indexOf("%")?h/100*k.width:h),x=k.y+(~(y[1]||y[0]).indexOf("%")?x/100*k.height:x)),r||r!==!1&&l.smooth?(j=h-d,b=x-u,l.xOffset=p+(j*g+b*w)-j,l.yOffset=f+(j*v+b*S)-b):l.xOffset=l.yOffset=0,l.xOrigin=h,l.yOrigin=x,l.smooth=!!r,l.origin=i,l.originIsAbsolute=!!n,e.style[bi]="0px 0px",o&&(Jr(o,l,"xOrigin",d,h),Jr(o,l,"yOrigin",u,x),Jr(o,l,"xOffset",p,l.xOffset),Jr(o,l,"yOffset",f,l.yOffset)),e.setAttribute("data-svg-origin",h+" "+x)},ld=function(e,i){var n=e._gsap||new oS(e);if("x"in n&&!i&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",l="deg",c=getComputedStyle(e),d=sn(e,bi)||"0",u,p,f,g,v,w,S,j,b,y,h,x,k,D,_,C,E,z,A,L,O,W,V,B,I,M,P,R,U,ne,Z,fe;return u=p=f=w=S=j=b=y=h=0,g=v=1,n.svg=!!(e.getCTM&&bS(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[Ve]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Ve]!=="none"?c[Ve]:"")),r.scale=r.rotate=r.translate="none"),D=J1(e,n.svg),n.svg&&(n.uncache?(I=e.getBBox(),d=n.xOrigin-I.x+"px "+(n.yOrigin-I.y)+"px",B=""):B=!i&&e.getAttribute("data-svg-origin"),$g(e,B||d,!!B||n.originIsAbsolute,n.smooth!==!1,D)),x=n.xOrigin||0,k=n.yOrigin||0,D!==ad&&(z=D[0],A=D[1],L=D[2],O=D[3],u=W=D[4],p=V=D[5],D.length===6?(g=Math.sqrt(z*z+A*A),v=Math.sqrt(O*O+L*L),w=z||A?Xo(A,z)*Qs:0,b=L||O?Xo(L,O)*Qs+w:0,b&&(v*=Math.abs(Math.cos(b*Oa))),n.svg&&(u-=x-(x*z+k*L),p-=k-(x*A+k*O))):(fe=D[6],ne=D[7],P=D[8],R=D[9],U=D[10],Z=D[11],u=D[12],p=D[13],f=D[14],_=Xo(fe,U),S=_*Qs,_&&(C=Math.cos(-_),E=Math.sin(-_),B=W*C+P*E,I=V*C+R*E,M=fe*C+U*E,P=W*-E+P*C,R=V*-E+R*C,U=fe*-E+U*C,Z=ne*-E+Z*C,W=B,V=I,fe=M),_=Xo(-L,U),j=_*Qs,_&&(C=Math.cos(-_),E=Math.sin(-_),B=z*C-P*E,I=A*C-R*E,M=L*C-U*E,Z=O*E+Z*C,z=B,A=I,L=M),_=Xo(A,z),w=_*Qs,_&&(C=Math.cos(_),E=Math.sin(_),B=z*C+A*E,I=W*C+V*E,A=A*C-z*E,V=V*C-W*E,z=B,W=I),S&&Math.abs(S)+Math.abs(w)>359.9&&(S=w=0,j=180-j),g=it(Math.sqrt(z*z+A*A+L*L)),v=it(Math.sqrt(V*V+fe*fe)),_=Xo(W,V),b=Math.abs(_)>2e-4?_*Qs:0,h=Z?1/(Z<0?-Z:Z):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!jS(sn(e,Ve)),B&&e.setAttribute("transform",B))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(g*=-1,b+=w<=0?180:-180,w+=w<=0?180:-180):(v*=-1,b+=b<=0?180:-180)),i=i||n.uncache,n.x=u-((n.xPercent=u&&(!i&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=p-((n.yPercent=p&&(!i&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=it(g),n.scaleY=it(v),n.rotation=it(w)+l,n.rotationX=it(S)+l,n.rotationY=it(j)+l,n.skewX=b+l,n.skewY=y+l,n.transformPerspective=h+o,(n.zOrigin=parseFloat(d.split(" ")[2])||!i&&n.zOrigin||0)&&(r[bi]=up(d)),n.xOffset=n.yOffset=0,n.force3D=Oi.force3D,n.renderTransform=n.svg?tz:yS?DS:ez,n.uncache=0,n},up=function(e){return(e=e.split(" "))[0]+" "+e[1]},u0=function(e,i,n){var r=Yt(i);return it(parseFloat(i)+parseFloat(Ds(e,"x",n+"px",r)))+r},ez=function(e,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,DS(e,i)},$s="0deg",Rl="0px",Bs=") ",DS=function(e,i){var n=i||this,r=n.xPercent,s=n.yPercent,o=n.x,l=n.y,c=n.z,d=n.rotation,u=n.rotationY,p=n.rotationX,f=n.skewX,g=n.skewY,v=n.scaleX,w=n.scaleY,S=n.transformPerspective,j=n.force3D,b=n.target,y=n.zOrigin,h="",x=j==="auto"&&e&&e!==1||j===!0;if(y&&(p!==$s||u!==$s)){var k=parseFloat(u)*Oa,D=Math.sin(k),_=Math.cos(k),C;k=parseFloat(p)*Oa,C=Math.cos(k),o=u0(b,o,D*C*-y),l=u0(b,l,-Math.sin(k)*-y),c=u0(b,c,_*C*-y+y)}S!==Rl&&(h+="perspective("+S+Bs),(r||s)&&(h+="translate("+r+"%, "+s+"%) "),(x||o!==Rl||l!==Rl||c!==Rl)&&(h+=c!==Rl||x?"translate3d("+o+", "+l+", "+c+") ":"translate("+o+", "+l+Bs),d!==$s&&(h+="rotate("+d+Bs),u!==$s&&(h+="rotateY("+u+Bs),p!==$s&&(h+="rotateX("+p+Bs),(f!==$s||g!==$s)&&(h+="skew("+f+", "+g+Bs),(v!==1||w!==1)&&(h+="scale("+v+", "+w+Bs),b.style[Ve]=h||"translate(0, 0)"},tz=function(e,i){var n=i||this,r=n.xPercent,s=n.yPercent,o=n.x,l=n.y,c=n.rotation,d=n.skewX,u=n.skewY,p=n.scaleX,f=n.scaleY,g=n.target,v=n.xOrigin,w=n.yOrigin,S=n.xOffset,j=n.yOffset,b=n.forceCSS,y=parseFloat(o),h=parseFloat(l),x,k,D,_,C;c=parseFloat(c),d=parseFloat(d),u=parseFloat(u),u&&(u=parseFloat(u),d+=u,c+=u),c||d?(c*=Oa,d*=Oa,x=Math.cos(c)*p,k=Math.sin(c)*p,D=Math.sin(c-d)*-f,_=Math.cos(c-d)*f,d&&(u*=Oa,C=Math.tan(d-u),C=Math.sqrt(1+C*C),D*=C,_*=C,u&&(C=Math.tan(u),C=Math.sqrt(1+C*C),x*=C,k*=C)),x=it(x),k=it(k),D=it(D),_=it(_)):(x=p,_=f,k=D=0),(y&&!~(o+"").indexOf("px")||h&&!~(l+"").indexOf("px"))&&(y=Ds(g,"x",o,"px"),h=Ds(g,"y",l,"px")),(v||w||S||j)&&(y=it(y+v-(v*x+w*D)+S),h=it(h+w-(v*k+w*_)+j)),(r||s)&&(C=g.getBBox(),y=it(y+r/100*C.width),h=it(h+s/100*C.height)),C="matrix("+x+","+k+","+D+","+_+","+y+","+h+")",g.setAttribute("transform",C),b&&(g.style[Ve]=C)},iz=function(e,i,n,r,s){var o=360,l=Pt(s),c=parseFloat(s)*(l&&~s.indexOf("rad")?Qs:1),d=c-r,u=r+d+"deg",p,f;return l&&(p=s.split("_")[1],p==="short"&&(d%=o,d!==d%(o/2)&&(d+=d<0?o:-o)),p==="cw"&&d<0?d=(d+o*y2)%o-~~(d/o)*o:p==="ccw"&&d>0&&(d=(d-o*y2)%o-~~(d/o)*o)),e._pt=f=new vi(e._pt,i,n,r,d,$M),f.e=u,f.u="deg",e._props.push(n),f},_2=function(e,i){for(var n in i)e[n]=i[n];return e},nz=function(e,i,n){var r=_2({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,l,c,d,u,p,f,g,v;r.svg?(d=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ve]=i,l=ld(n,1),Po(n,Ve),n.setAttribute("transform",d)):(d=getComputedStyle(n)[Ve],o[Ve]=i,l=ld(n,1),o[Ve]=d);for(c in Sr)d=r[c],u=l[c],d!==u&&s.indexOf(c)<0&&(g=Yt(d),v=Yt(u),p=g!==v?Ds(n,c,d,v):parseFloat(d),f=parseFloat(u),e._pt=new vi(e._pt,l,c,p,f-p,Rg),e._pt.u=v||0,e._props.push(c));_2(l,r)};yi("padding,margin,Width,Radius",function(t,e){var i="Top",n="Right",r="Bottom",s="Left",o=(e<3?[i,n,r,s]:[i+s,i+n,r+n,r+s]).map(function(l){return e<2?t+l:"border"+l+t});dp[e>1?"border"+t:t]=function(l,c,d,u,p){var f,g;if(arguments.length<4)return f=o.map(function(v){return cr(l,v,d)}),g=f.join(" "),g.split(f[0]).length===5?f[0]:g;f=(u+"").split(" "),g={},o.forEach(function(v,w){return g[v]=f[w]=f[w]||f[(w-1)/2|0]}),l.init(c,g,p)}});var SS={name:"css",register:Og,targetTest:function(e){return e.style&&e.nodeType},init:function(e,i,n,r,s){var o=this._props,l=e.style,c=n.vars.startAt,d,u,p,f,g,v,w,S,j,b,y,h,x,k,D,_;q1||Og(),this.styles=this.styles||wS(e),_=this.styles.props,this.tween=n;for(w in i)if(w!=="autoRound"&&(u=i[w],!(Ii[w]&&aS(w,i,n,r,e,s)))){if(g=typeof u,v=dp[w],g==="function"&&(u=u.call(n,r,e,s),g=typeof u),g==="string"&&~u.indexOf("random(")&&(u=rd(u)),v)v(this,e,w,u,n)&&(D=1);else if(w.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(w)+"").trim(),u+="",gs.lastIndex=0,gs.test(d)||(S=Yt(d),j=Yt(u)),j?S!==j&&(d=Ds(e,w,d,j)+j):S&&(u+=S),this.add(l,"setProperty",d,u,r,s,0,0,w),o.push(w),_.push(w,0,l[w]);else if(g!=="undefined"){if(c&&w in c?(d=typeof c[w]=="function"?c[w].call(n,r,e,s):c[w],Pt(d)&&~d.indexOf("random(")&&(d=rd(d)),Yt(d+"")||d==="auto"||(d+=Oi.units[w]||Yt(cr(e,w))||""),(d+"").charAt(1)==="="&&(d=cr(e,w))):d=cr(e,w),f=parseFloat(d),b=g==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),p=parseFloat(u),w in Nn&&(w==="autoAlpha"&&(f===1&&cr(e,"visibility")==="hidden"&&p&&(f=0),_.push("visibility",0,l.visibility),Jr(this,l,"visibility",f?"inherit":"hidden",p?"inherit":"hidden",!p)),w!=="scale"&&w!=="transform"&&(w=Nn[w],~w.indexOf(",")&&(w=w.split(",")[0]))),y=w in Sr,y){if(this.styles.save(w),g==="string"&&u.substring(0,6)==="var(--"&&(u=sn(e,u.substring(4,u.indexOf(")"))),p=parseFloat(u)),h||(x=e._gsap,x.renderTransform&&!i.parseTransform||ld(e,i.parseTransform),k=i.smoothOrigin!==!1&&x.smooth,h=this._pt=new vi(this._pt,l,Ve,0,1,x.renderTransform,x,0,-1),h.dep=1),w==="scale")this._pt=new vi(this._pt,x,"scaleY",x.scaleY,(b?Ra(x.scaleY,b+p):p)-x.scaleY||0,Rg),this._pt.u=0,o.push("scaleY",w),w+="X";else if(w==="transformOrigin"){_.push(bi,0,l[bi]),u=KM(u),x.svg?$g(e,u,0,k,0,this):(j=parseFloat(u.split(" ")[2])||0,j!==x.zOrigin&&Jr(this,x,"zOrigin",x.zOrigin,j),Jr(this,l,w,up(d),up(u)));continue}else if(w==="svgOrigin"){$g(e,u,1,k,0,this);continue}else if(w in kS){iz(this,x,w,f,b?Ra(f,b+u):u);continue}else if(w==="smoothOrigin"){Jr(this,x,"smooth",x.smooth,u);continue}else if(w==="force3D"){x[w]=u;continue}else if(w==="transform"){nz(this,u,e);continue}}else w in l||(w=cl(w)||w);if(y||(p||p===0)&&(f||f===0)&&!OM.test(u)&&w in l)S=(d+"").substr((f+"").length),p||(p=0),j=Yt(u)||(w in Oi.units?Oi.units[w]:S),S!==j&&(f=Ds(e,w,d,j)),this._pt=new vi(this._pt,y?x:l,w,f,(b?Ra(f,b+p):p)-f,!y&&(j==="px"||w==="zIndex")&&i.autoRound!==!1?NM:Rg),this._pt.u=j||0,S!==j&&j!=="%"&&(this._pt.b=d,this._pt.r=BM);else if(w in l)QM.call(this,e,w,d,b?b+u:u);else if(w in e)this.add(e,w,d||e[w],b?b+u:u,r,s);else if(w!=="parseTransform"){B1(w,u);continue}y||(w in l?_.push(w,0,l[w]):typeof e[w]=="function"?_.push(w,2,e[w]()):_.push(w,1,d||e[w])),o.push(w)}}D&&pS(this)},render:function(e,i){if(i.tween._time||!Q1())for(var n=i._pt;n;)n.r(e,n.d),n=n._next;else i.styles.revert()},get:cr,aliases:Nn,getSetter:function(e,i,n){var r=Nn[i];return r&&r.indexOf(",")<0&&(i=r),i in Sr&&i!==bi&&(e._gsap.x||cr(e,"x"))?n&&w2===n?i==="scale"?HM:UM:(w2=n||{})&&(i==="scale"?YM:GM):e.style&&!L1(e.style[i])?VM:~i.indexOf("-")?WM:X1(e,i)},core:{_removeProperty:Po,_getMatrix:J1}};ji.utils.checkPrefix=cl;ji.core.getStyleSaver=wS;(function(t,e,i,n){var r=yi(t+","+e+","+i,function(s){Sr[s]=1});yi(e,function(s){Oi.units[s]="deg",kS[s]=1}),Nn[r[13]]=t+","+e,yi(n,function(s){var o=s.split(":");Nn[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");yi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Oi.units[t]="px"});ji.registerPlugin(SS);var J=ji.registerPlugin(SS)||ji;J.core.Tween;/*!
 * VelocityTracker: 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var On,Bg,kc,_S,ra,_a,Ng,CS,PS=function(){return On||typeof window<"u"&&(On=window.gsap)},Vg={},rz=function(e){return Math.round(e*1e4)/1e4},Wg=function(e){return CS(e).id},Ql=function(e){return Vg[Wg(typeof e=="string"?kc(e)[0]:e)]},C2=function(e){var i=ra,n;if(e-Ng>=.05)for(Ng=e;i;)n=i.g(i.t,i.p),(n!==i.v1||e-i.t1>.2)&&(i.v2=i.v1,i.v1=n,i.t2=i.t1,i.t1=e),i=i._next},sz={deg:360,rad:Math.PI*2},h0=function(){On=PS(),On&&(kc=On.utils.toArray,_S=On.utils.getUnit,CS=On.core.getCache,_a=On.ticker,Bg=1)},oz=function(e,i,n,r){this.t=e,this.p=i,this.g=e._gsap.get,this.rCap=sz[n||_S(this.g(e,i))],this.v1=this.v2=0,this.t1=this.t2=_a.time,r&&(this._next=r,r._prev=this)},Sd=function(){function t(i,n){Bg||h0(),this.target=kc(i)[0],Vg[Wg(this.target)]=this,this._props={},n&&this.add(n)}t.register=function(n){On=n,h0()};var e=t.prototype;return e.get=function(n,r){var s=this._props[n]||console.warn("Not tracking "+n+" velocity."),o,l,c;return o=parseFloat(r?s.v1:s.g(s.t,s.p)),l=o-parseFloat(s.v2),c=s.rCap,c&&(l=l%c,l!==l%(c/2)&&(l=l<0?l+c:l-c)),rz(l/((r?s.t1:_a.time)-s.t2))},e.getAll=function(){var n={},r=this._props,s;for(s in r)n[s]=this.get(s);return n},e.isTracking=function(n){return n in this._props},e.add=function(n,r){n in this._props||(ra||(_a.add(C2),Ng=_a.time),ra=this._props[n]=new oz(this.target,n,r,ra))},e.remove=function(n){var r=this._props[n],s,o;r&&(s=r._prev,o=r._next,s&&(s._next=o),o?o._prev=s:ra===r&&(_a.remove(C2),ra=0),delete this._props[n])},e.kill=function(n){for(var r in this._props)this.remove(r);n||delete Vg[Wg(this.target)]},t.track=function(n,r,s){Bg||h0();for(var o=[],l=kc(n),c=r.split(","),d=(s||"").split(","),u=l.length,p,f;u--;){for(p=Ql(l[u])||new t(l[u]),f=c.length;f--;)p.add(c[f],d[f]||d[0]);o.push(p)}return o},t.untrack=function(n,r){var s=(r||"").split(",");kc(n).forEach(function(o){var l=Ql(o);l&&(s.length?s.forEach(function(c){return l.remove(c)}):l.kill(1))})},t.isTracking=function(n,r){var s=Ql(n);return s&&s.isTracking(r)},t.getVelocity=function(n,r){var s=Ql(n);return!s||!s.isTracking(r)?console.warn("Not tracking velocity of "+r):s.get(r)},t}();Sd.getByTarget=Ql;PS()&&On.registerPlugin(Sd);/*!
 * InertiaPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var gt,TS,P2,ES,Ug,jc,IS,AS,MS,ew,zS,Dc,Hg,FS,hp=Sd.getByTarget,RS=function(){return gt||typeof window<"u"&&(gt=window.gsap)&&gt.registerPlugin&&gt},az=function(e){return typeof e=="string"},cd=function(e){return typeof e=="number"},xs=function(e){return typeof e=="object"},Yg=function(e){return typeof e=="function"},lz=1,LS=Array.isArray,cz=function(e){return e},xo=1e10,T2=1/xo,OS=.05,dz=function(e){return Math.round(e*1e4)/1e4},uz=function(e,i,n){for(var r in i)!(r in e)&&r!==n&&(e[r]=i[r]);return e},hz=function t(e){var i={},n,r;for(n in e)i[n]=xs(r=e[n])&&!LS(r)?t(r):r;return i},E2=function(e,i,n,r,s){var o=i.length,l=0,c=xo,d,u,p,f;if(xs(e)){for(;o--;){d=i[o],u=0;for(p in e)f=d[p]-e[p],u+=f*f;u<c&&(l=o,c=u)}if((s||xo)<xo&&s<Math.sqrt(c))return e}else for(;o--;)d=i[o],u=d-e,u<0&&(u=-u),u<c&&d>=r&&d<=n&&(l=o,c=u);return i[l]},$S=function(e,i,n,r,s,o,l){if(e.end==="auto")return e;var c=e.end,d,u;if(n=isNaN(n)?xo:n,r=isNaN(r)?-xo:r,xs(i)){if(d=i.calculated?i:(Yg(c)?c(i,l):E2(i,c,n,r,o))||i,!i.calculated){for(u in d)i[u]=d[u];i.calculated=!0}d=d[s]}else d=Yg(c)?c(i,l):LS(c)?E2(i,c,n,r,o):parseFloat(c);return d>n?d=n:d<r&&(d=r),{max:d,min:d,unitFactor:e.unitFactor}},pp=function(e,i,n){return isNaN(e[i])?n:+e[i]},tw=function(e,i){return i*OS*e/ew},I2=function(e,i,n){return Math.abs((i-e)*ew/n/OS)},BS={resistance:1,checkpoint:1,preventOvershoot:1,linkedProps:1,radius:1,duration:1},NS=function(e,i,n,r){if(i.linkedProps){var s=i.linkedProps.split(","),o={},l,c,d,u,p,f;for(l=0;l<s.length;l++)c=s[l],d=i[c],d&&(cd(d.velocity)?u=d.velocity:(p=p||hp(e),u=p&&p.isTracking(c)?p.get(c):0),f=Math.abs(u/pp(d,"resistance",r)),o[c]=parseFloat(n(e,c))+tw(u,f));return o}},pz=function(e,i,n,r,s,o){if(n===void 0&&(n=10),r===void 0&&(r=.2),s===void 0&&(s=1),o===void 0&&(o=0),az(e)&&(e=ES(e)[0]),!e)return 0;var l=0,c=xo,d=i.inertia||i,u=MS(e).get,p=pp(d,"resistance",jc.resistance),f,g,v,w,S,j,b,y,h,x;x=NS(e,d,u,p);for(f in d)BS[f]||(g=d[f],xs(g)||(y=y||hp(e),y&&y.isTracking(f)?g=cd(g)?{velocity:g}:{velocity:y.get(f)}:(w=+g||0,v=Math.abs(w/p))),xs(g)&&(cd(g.velocity)?w=g.velocity:(y=y||hp(e),w=y&&y.isTracking(f)?y.get(f):0),v=zS(r,n,Math.abs(w/pp(g,"resistance",p))),S=parseFloat(u(e,f))||0,j=S+tw(w,v),"end"in g&&(g=$S(g,x&&f in x?x:j,g.max,g.min,f,d.radius,w),o&&(Dc===i&&(Dc=d=hz(i)),d[f]=uz(g,d[f],"end"))),"max"in g&&j>+g.max+T2?(h=g.unitFactor||jc.unitFactors[f]||1,b=S>g.max&&g.min!==g.max||w*h>-15&&w*h<45?r+(n-r)*.1:I2(S,g.max,w),b+s<c&&(c=b+s)):"min"in g&&j<+g.min-T2&&(h=g.unitFactor||jc.unitFactors[f]||1,b=S<g.min&&g.min!==g.max||w*h>-45&&w*h<15?r+(n-r)*.1:I2(S,g.min,w),b+s<c&&(c=b+s)),b>l&&(l=b)),v>l&&(l=v));return l>c&&(l=c),l>n?n:l<r?r:l},A2=function(){gt=RS(),gt&&(P2=gt.parseEase,ES=gt.utils.toArray,IS=gt.utils.getUnit,MS=gt.core.getCache,zS=gt.utils.clamp,Hg=gt.core.getStyleSaver,FS=gt.core.reverting||function(){},Ug=P2("power3"),ew=Ug(.05),AS=gt.core.PropTween,gt.config({resistance:100,unitFactors:{time:1e3,totalTime:1e3,progress:1e3,totalProgress:1e3}}),jc=gt.config(),gt.registerPlugin(Sd),TS=1)},iw={version:"3.13.0",name:"inertia",register:function(e){gt=e,A2()},init:function(e,i,n,r,s){TS||A2();var o=hp(e);if(i==="auto"){if(!o){console.warn("No inertia tracking on "+e+". InertiaPlugin.track(target) first.");return}i=o.getAll()}this.styles=Hg&&typeof e.style=="object"&&Hg(e),this.target=e,this.tween=n,Dc=i;var l=e._gsap,c=l.get,d=i.duration,u=xs(d),p=i.preventOvershoot||u&&d.overshoot===0,f=pp(i,"resistance",jc.resistance),g=cd(d)?d:pz(e,i,u&&d.max||10,u&&d.min||.2,u&&"overshoot"in d?+d.overshoot:p?0:1,!0),v,w,S,j,b,y,h,x,k;i=Dc,Dc=0,k=NS(e,i,c,f);for(v in i)BS[v]||(w=i[v],Yg(w)&&(w=w(r,e,s)),cd(w)?b=w:xs(w)&&!isNaN(w.velocity)?b=+w.velocity:o&&o.isTracking(v)?b=o.get(v):console.warn("ERROR: No velocity was defined for "+e+" property: "+v),y=tw(b,g),x=0,S=c(e,v),j=IS(S),S=parseFloat(S),xs(w)&&(h=S+y,"end"in w&&(w=$S(w,k&&v in k?k:h,w.max,w.min,v,i.radius,b)),"max"in w&&+w.max<h?p||w.preventOvershoot?y=w.max-S:x=w.max-S-y:"min"in w&&+w.min>h&&(p||w.preventOvershoot?y=w.min-S:x=w.min-S-y)),this._props.push(v),this.styles&&this.styles.save(v),this._pt=new AS(this._pt,e,v,S,0,cz,0,l.set(e,v,this)),this._pt.u=j||0,this._pt.c1=y,this._pt.c2=x);return n.duration(g),lz},render:function(e,i){var n=i._pt;if(e=Ug(i.tween._time/i.tween._dur),e||!FS())for(;n;)n.set(n.t,n.p,dz(n.s+n.c1*e+n.c2*e*e)+n.u,n.d,e),n=n._next;else i.styles.revert()}};"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(t){return iw[t]=Sd[t]});RS()&&gt.registerPlugin(iw);J.registerPlugin(iw);function fz(t,e){let i;return(...n)=>{clearTimeout(i),i=setTimeout(()=>t(...n),e)}}const mz=T.forwardRef(({dotSize:t=16,gap:e=32,baseColor:i="#00d8ff",activeColor:n="#00ff00",proximity:r=150,speedTrigger:s=100,shockRadius:o=250,shockStrength:l=8,maxSpeed:c=5e3,resistance:d=750,returnDuration:u=1.5,className:p="",style:f},g)=>{const v=T.useRef(null),w=T.useRef([]),S=T.useRef([]),j=T.useCallback(()=>{const y=v.current;if(!y)return;y.innerHTML="",w.current=[],S.current=[];const{clientWidth:h,clientHeight:x}=y,k=h/2,D=x/2,_=Math.min(h,x)*.5*.95,C=e,E=t,z=Math.floor(_/C),A=[];for(let V=0;V<z;V++){const B=V/z*_,I=C+B/_*C*1.5,M=2*Math.PI*(B||1),P=Math.max(6,Math.floor(M/I));for(let R=0;R<P;R++){const U=R/P*2*Math.PI,ne=k+B*Math.cos(U),Z=D+B*Math.sin(U);ne<0||ne>h||Z<0||Z>x||A.push({x:ne,y:Z})}}const L=40;let O=0;function W(){if(!y)return;const V=Math.min(O+L,A.length);for(;O<V;O++){const{x:B,y:I}=A[O],M=document.createElement("div");M.classList.add("dot-grid__dot"),M._inertiaApplied=!1,J.set(M,{x:0,y:0,backgroundColor:i,width:E,height:E,left:B-E/2,top:I-E/2,position:"absolute"}),y.appendChild(M),w.current.push({x:B,y:I,element:M,originalX:B,originalY:I,currentX:B,currentY:I,velocityX:0,velocityY:0})}O<A.length?requestAnimationFrame(W):requestAnimationFrame(()=>{S.current=w.current.map(({element:B,x:I,y:M})=>({el:B,x:I,y:M}))})}W()},[t,e,i]);T.useEffect(()=>{const y=fz(j,250);j();const h=new ResizeObserver(y);return v.current&&h.observe(v.current),()=>h.disconnect()},[j]);const b=(y,h)=>{S.current.forEach(({el:x,x:k,y:D})=>{const _=Math.hypot(k-y,D-h);if(w.current.find(E=>E.element===x)&&_<o&&!x._inertiaApplied){x._inertiaApplied=!0;const E=Math.max(0,1-_/o),z=(k-y)*l*E,A=(D-h)*l*E;J.to(x,{backgroundColor:n,duration:.2,onComplete:()=>{J.to(x,{backgroundColor:i,duration:.5,delay:.3})}}),J.to(x,{inertia:{x:z,y:A,resistance:d},onComplete:()=>{J.to(x,{x:0,y:0,duration:u,ease:"elastic.out(1,0.75)"}),x._inertiaApplied=!1}})}})};return T.useEffect(()=>{let y=0,h=0,x=0,k=null;const D=E=>{const z=performance.now(),A=z-(y||z),L=E.pageX-h,O=E.pageY-x;let W=L/A*1e3,V=O/A*1e3,B=Math.hypot(W,V);if(B>c){const I=c/B;W*=I,V*=I,B=c}y=z,h=E.pageX,x=E.pageY,requestAnimationFrame(()=>{S.current.forEach(({el:I,x:M,y:P})=>{const R=Math.hypot(M-E.pageX,P-E.pageY),U=Math.max(0,1-R/r);if(J.set(I,{backgroundColor:J.utils.interpolate(i,n,U)}),w.current.find(Z=>Z.element===I)&&B>s&&R<r&&!I._inertiaApplied){I._inertiaApplied=!0;const Z=M-E.pageX+W*.005,fe=P-E.pageY+V*.005;J.to(I,{inertia:{x:Z,y:fe,resistance:d},onComplete:()=>{J.to(I,{x:0,y:0,duration:u,ease:"elastic.out(1,0.75)"}),I._inertiaApplied=!1}})}})})},_=E=>{k||(k=setTimeout(()=>{D(E),k=null},60))},C=E=>{b(E.pageX,E.pageY)};return window.addEventListener("mousemove",_),window.addEventListener("click",C),()=>{window.removeEventListener("mousemove",_),window.removeEventListener("click",C),k&&clearTimeout(k)}},[i,n,r,s,o,l,c,d,u]),T.useImperativeHandle(g,()=>({triggerShockwave:(y,h)=>{b(y,h)}}),[i,n,o,l,d,u]),a.jsx("section",{className:`dot-grid ${p}`,style:{...f,"--dot-size":`${t}px`,"--dot-gap":`${e}px`},children:a.jsx("div",{className:"dot-grid__wrap",children:a.jsx("div",{ref:v,className:"dot-grid__container"})})})}),M2=(t,e,i,n)=>{t.style.transition=`${e} ${i}ms ${n}`},dr=(t,e,i)=>Math.min(Math.max(t,e),i);class gz{constructor(e,i){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=o=>{const{width:l,height:c}=o,d=Math.sqrt(l**2+c**2);return{width:d,height:d}},this.setSize=o=>{const l=this.calculateGlareSize(o);this.glareEl.style.width=`${l.width}px`,this.glareEl.style.height=`${l.height}px`},this.update=(o,l,c,d)=>{this.updateAngle(o,l.glareReverse),this.updateOpacity(o,l,c,d)},this.updateAngle=(o,l)=>{const{xPercentage:c,yPercentage:d}=o,u=180/Math.PI,p=c?Math.atan2(d,-c)*u:0;this.glareAngle=p-(l?180:0)},this.updateOpacity=(o,l,c,d)=>{const{xPercentage:u,yPercentage:p}=o,{glarePosition:f,glareReverse:g,glareMaxOpacity:v}=l,w=c?-1:1,S=d?-1:1,j=g?-1:1;let b=0;switch(f){case"top":b=-u*w*j;break;case"right":b=p*S*j;break;case"bottom":case void 0:b=u*w*j;break;case"left":b=-p*S*j;break;case"all":b=Math.hypot(u,p)}const y=dr(b,0,100);this.glareOpacity=y*v/100},this.render=o=>{const{glareColor:l}=o;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${l} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const n={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:i,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},r=this.calculateGlareSize(e),s={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${r.width}px`,height:`${r.height}px`};Object.assign(this.glareWrapperEl.style,n),Object.assign(this.glareEl.style,s)}}class xz{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,i)=>{this.updateTilt(e,i),this.updateTiltManualInput(e,i),this.updateTiltReverse(i),this.updateTiltLimits(i)},this.updateTilt=(e,i)=>{const{xPercentage:n,yPercentage:r}=e,{tiltMaxAngleX:s,tiltMaxAngleY:o}=i;this.tiltAngleX=n*s/100,this.tiltAngleY=r*o/100*-1},this.updateTiltManualInput=(e,i)=>{const{tiltAngleXManual:n,tiltAngleYManual:r,tiltMaxAngleX:s,tiltMaxAngleY:o}=i;(n!==null||r!==null)&&(this.tiltAngleX=n!==null?n:0,this.tiltAngleY=r!==null?r:0,e.xPercentage=100*this.tiltAngleX/s,e.yPercentage=100*this.tiltAngleY/o)},this.updateTiltReverse=e=>{const i=e.tiltReverse?-1:1;this.tiltAngleX=i*this.tiltAngleX,this.tiltAngleY=i*this.tiltAngleY},this.updateTiltLimits=e=>{const{tiltAxis:i}=e;this.tiltAngleX=dr(this.tiltAngleX,-90,90),this.tiltAngleY=dr(this.tiltAngleY,-90,90),i&&(this.tiltAngleX=i==="x"?this.tiltAngleX:0,this.tiltAngleY=i==="y"?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{const{tiltMaxAngleX:i,tiltMaxAngleY:n}=e;this.tiltAngleXPercentage=this.tiltAngleX/i*100,this.tiltAngleYPercentage=this.tiltAngleY/n*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const wz={scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1,tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null,glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"};class Gr extends T.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=async()=>{if(!window.DeviceOrientationEvent)return;const e=DeviceOrientationEvent.requestPermission;typeof e=="function"?await e()==="granted"&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{const{onEnter:i}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),i&&i({event:e})},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{const{onLeave:i}=this.props;if(this.setTransitions(),i&&i({event:e}),this.props.reset){const n=new CustomEvent("autoreset");this.onMove(n)}},this.processInput=e=>{const{scale:i}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=i;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=i;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=i;break;case"autoreset":{const{tiltAngleXInitial:n,tiltAngleYInitial:r,tiltMaxAngleX:s,tiltMaxAngleY:o}=this.props,l=r/o*100;this.wrapperEl.clientPosition.xPercentage=dr(n/s*100,-100,100),this.wrapperEl.clientPosition.yPercentage=dr(l,-100,100),this.wrapperEl.scale=1;break}}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:i,tiltMaxAngleY:n}=this.props,r=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/i*100,this.wrapperEl.clientPosition.yPercentage=r/n*100,this.wrapperEl.clientPosition.xPercentage=dr(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=dr(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{const{tiltEnable:i,flipVertically:n,flipHorizontally:r}=this.props;e!=="autoreset"&&e!=="deviceorientation"&&e!=="propChange"&&this.updateClientInput(),i&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,n,r)},this.updateClientInput=()=>{const{trackOnWindow:e}=this.props;let i,n;if(e){const{x:r,y:s}=this.wrapperEl.clientPosition;i=s/window.innerHeight*200-100,n=r/window.innerWidth*200-100}else{const{size:{width:r,height:s,left:o,top:l},clientPosition:{x:c,y:d}}=this.wrapperEl;i=(d-l)/s*200-100,n=(c-o)/r*200-100}this.wrapperEl.clientPosition.xPercentage=dr(i,-100,100),this.wrapperEl.clientPosition.yPercentage=dr(n,-100,100)},this.updateFlip=()=>{const{flipVertically:e,flipHorizontally:i}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),i&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new xz,this.initGlare(),this.setSize(),this.addEventListeners(),typeof CustomEvent>"u")return;const e=new CustomEvent("autoreset");this.mainLoop(e);const i=new CustomEvent("initial");this.emitOnMove(i)}componentWillUnmount(){this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){const{trackOnWindow:e,gyroscope:i}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),i&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:e,gyroscope:i}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),i&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){const{glareEnable:e,glareBorderRadius:i}=this.props;e&&(this.glare=new gz(this.wrapperEl.size,i),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){const{onMove:i}=this.props;if(!i)return;let n=0,r=0;this.glare&&(n=this.glare.glareAngle,r=this.glare.glareOpacity),i({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:n,glareOpacity:r,event:e})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){const{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){const{transitionSpeed:e,transitionEasing:i}=this.props;M2(this.wrapperEl.node,"all",e,i),this.glare&&M2(this.glare.glareEl,"opacity",e,i)}render(){const{children:e,className:i,style:n}=this.props;return a.jsx("div",{ref:r=>{this.wrapperEl.node=r},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:i,style:n,children:e})}}Gr.defaultProps=wz;const yz="/assets/sbs-home.5deffb37.mp4",vz="/assets/deli12.2549fd93.jpg",bz="/assets/veen-home.4b7d7433.mp4",nw="/assets/box-2.09b2c2b0.jpg",kz="/assets/sticker-bcit2.b3132fca.png",Ge=[{type:"video",src:yz,label:"Branding/Print",details:[{label:"Project Title:",value:"S.B.S"},{label:"Description:",value:" S.B.S is a clothing brand based in Vancouver. Their goal is to design affordable fashion for partygoers. I designed their logo, print materials, and social media visuals. "},{label:"Timeline",value:"3 weeks"},{label:"Year",value:"2023"}]},{type:"image",src:vz,label:"Branding",details:[{label:"Project Title:",value:"Delicato"},{label:"Description:",value:"Delicato is a small interior design company from Italy that relies on classical architecture in its designs. "},{label:"Timeline",value:"2 weeks"},{label:"Year",value:"2024"}]},{type:"image",src:nw,label:"Branding",details:[{label:"Project Title:",value:"Zar"},{label:"Description:",value:"Zar is an Iranian saffron product that started its activity in 1988. I worked on their branding and packaging design."},{label:"Timeline",value:"2 weeks"},{label:"Year",value:"2024"}]},{type:"video",src:bz,label:"Branding",details:[{label:"Project Title",value:"Veen "},{label:"Description:",value:"Veen is a photography studio based in Vancouver, targeting families and children. I handled their social media and branding."},{label:"Timeline",value:"2 weeks"},{label:"Year",value:"2024"}]}],jz=`
.recent-works-title {
  font-size: 2.8rem;
  color: #ffffff;
  margin-top: 4rem;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.04em;
  font-family: 'Montserrat', 'Arial', sans-serif;
}
.recent-works-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 0;
}
@media (max-width: 900px) {
  .recent-works-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    gap: 24px;
    padding: 24px 0;
  }
  .recent-works-title {
    font-size: 2rem;
    margin-top: 2.5rem;
    margin-bottom: 2rem;
  }
}
@media (max-width: 600px) {
  .recent-works-grid {
    gap: 16px;
    padding: 12px 0;
  }
  .work-item {
    min-width: 0;
    border-radius: 6px;
  }
  .recent-works-title {
    font-size: 1.3rem;
    margin-top: 1.5rem;
    margin-bottom: 1.2rem;
  }
  .work-label {
    font-size: 0.85rem;
    top: 10px;
    left: 10px;
  }
  .work-info-box {
    font-size: 0.85rem;
    padding: 10px 10px;
    left: 8px;
    right: 8px;
    bottom: 8px;
  }
}
.work-item {
  position: relative;
  background: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 200px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease;
}
.work-item:hover {
  box-shadow: 0 12px 60px rgba(0,0,0,0.3);
}
.work-label {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
  font-size: 1rem;
  font-weight: 400;
  color: #222;
  letter-spacing: 0.04em;
  background: transparent;
  pointer-events: none;
}
.work-media-container {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.work-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}
.work-item:hover .work-media {
  transform: scale(1.15);
}
.center-main-text {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 2.5rem;
  transform: translate(-50%, -50%);
  color: #222;
  opacity: 1;
  z-index: 1;
  font-weight: 400;
  pointer-events: none;
  letter-spacing: 0.01em;
}
.work-info-box {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 16px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 8px 12px;
  font-size: 0.75rem;
  z-index: 2;
  pointer-events: auto;
  opacity: 1;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: row;
  gap: 12px;
  color: #ffffff;
  text-align: left;
  align-items: center;
  justify-content: flex-start;
  letter-spacing: 0.01em;
}
@media (max-width: 600px) {
  .work-info-box {
    font-size: 0.7rem;
    padding: 6px 10px;
    gap: 8px;
    left: 12px;
    right: 12px;
    bottom: 12px;
  }
  .work-info-line {
    font-size: 0.7rem;
    gap: 3px;
  }
}
.work-info-box span {
  display: block;
  margin-bottom: 2px;
  font-size: 1rem;
}
.work-info-box span b {
  font-weight: 700;
}
.work-info-line {
  background: none;
  border-radius: 0;
  border: none;
  box-shadow: none;
  padding: 0;
  margin-bottom: 0;
  font-size: 0.75rem;
  font-weight: 400;
  color: #ffffff;
  line-height: 1.2;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}
@media (max-width: 600px) {
  .work-info-line {
    font-size: clamp(0.65rem, 3vw, 0.78rem);
    padding: 1.5px 7px;
    border-radius: 4px;
  }
}
.work-info-meta {
  display: flex;
  flex-direction: row;
  gap: 0.7em;
  margin-top: 2px;
}
@media (max-width: 600px) {
  .work-info-meta {
    flex-direction: column;
    gap: 2px;
  }
}
.work-media.workday-fit {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  background: #fff;
  padding: 10%;
  box-sizing: border-box;
  transition: transform 0.3s ease;
}
.work-item:hover .work-media.workday-fit {
  transform: scale(1.15);
}
.work-media.cover-fit {
  object-fit: cover !important;
  width: 100%;
  height: 100%;
  background: #fff;
}
`,Dz=()=>{const t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},e={hidden:{opacity:0,y:50,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:jz}),a.jsxs($.div,{className:"recent-works-grid",variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx($.div,{variants:e,children:a.jsx(Gr,{tiltMaxAngleX:20,tiltMaxAngleY:20,scale:1.08,glareEnable:!0,glareMaxOpacity:.4,glareColor:"#ffffff",glarePosition:"all",glareBorderRadius:"8px",children:a.jsxs(en,{to:"/work/savefood",className:"work-item",tabIndex:0,children:[a.jsx("div",{className:"work-label",children:"Campaign"}),a.jsx("div",{className:"work-media-container",children:a.jsx("img",{src:kz,alt:"BCIT Energy Awareness",className:"work-media"})}),a.jsxs("div",{className:"work-info-box",children:[a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Project:"})," BCIT Energy Awareness"]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Timeline:"})," 4 weeks"]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Year:"})," 2025"]})]})]})})}),a.jsx($.div,{variants:e,children:a.jsx(Gr,{tiltMaxAngleX:20,tiltMaxAngleY:20,scale:1.08,glareEnable:!0,glareMaxOpacity:.4,glareColor:"#ffffff",glarePosition:"all",glareBorderRadius:"8px",children:a.jsxs(en,{to:"/work/sbs",className:"work-item",tabIndex:0,children:[a.jsx("div",{className:"work-label",children:Ge[0].label}),a.jsx("div",{className:"work-media-container",children:a.jsx("video",{src:Ge[0].src,className:"work-media",controls:!1,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),a.jsxs("div",{className:"work-info-box",children:[a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Project:"})," ",Ge[0].details[0].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Timeline:"})," ",Ge[0].details[2].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Year:"})," ",Ge[0].details[3].value]})]})]})})}),a.jsx($.div,{variants:e,children:a.jsx(Gr,{tiltMaxAngleX:20,tiltMaxAngleY:20,scale:1.08,glareEnable:!0,glareMaxOpacity:.4,glareColor:"#ffffff",glarePosition:"all",glareBorderRadius:"8px",children:a.jsxs(en,{to:"/work/delicato",className:"work-item",tabIndex:0,children:[a.jsx("div",{className:"work-label",children:Ge[1].label}),a.jsx("div",{className:"work-media-container",children:a.jsx("img",{src:Ge[1].src,alt:Ge[1].label,className:"work-media"})}),a.jsxs("div",{className:"work-info-box",children:[a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Project :"})," ",Ge[1].details[0].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Timeline:"})," ",Ge[1].details[2].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Year:"})," ",Ge[1].details[3].value]})]})]})})}),a.jsx($.div,{variants:e,children:a.jsx(Gr,{tiltMaxAngleX:20,tiltMaxAngleY:20,scale:1.08,glareEnable:!0,glareMaxOpacity:.4,glareColor:"#ffffff",glarePosition:"all",glareBorderRadius:"8px",children:a.jsxs(en,{to:"/work/zar",className:"work-item",tabIndex:0,children:[a.jsx("div",{className:"work-label",children:Ge[2].label}),a.jsx("div",{className:"work-media-container",children:a.jsx("img",{src:Ge[2].src,alt:Ge[2].label,className:"work-media cover-fit"})}),a.jsxs("div",{className:"work-info-box",children:[a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Project:"})," ",Ge[2].details[0].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Timeline:"})," ",Ge[2].details[2].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Year:"})," ",Ge[2].details[3].value]})]})]})})}),a.jsx($.div,{variants:e,children:a.jsx(Gr,{tiltMaxAngleX:20,tiltMaxAngleY:20,scale:1.08,glareEnable:!0,glareMaxOpacity:.4,glareColor:"#ffffff",glarePosition:"all",glareBorderRadius:"8px",children:a.jsxs(en,{to:"/work/veen",className:"work-item",tabIndex:0,children:[a.jsx("div",{className:"work-label",children:Ge[3].label}),a.jsx("div",{className:"work-media-container",children:a.jsx("video",{src:Ge[3].src,className:"work-media",controls:!1,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),a.jsxs("div",{className:"work-info-box",children:[a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Project :"})," ",Ge[3].details[0].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Timeline:"})," ",Ge[3].details[2].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Year:"})," ",Ge[3].details[3].value]})]})]})})})]})]})};const Sz=()=>{const t=T.useRef(null),e=T.useRef(null);T.useState(!1);const i=()=>{if(console.log("Starting Say Hi animation..."),!e.current){console.error("Say Hi text element not found");return}J.set(e.current,{opacity:1,scale:.5,x:535,y:250}),J.timeline({repeat:-1,repeatDelay:2}).to(e.current,{opacity:1,scale:1.2,y:230,duration:.5,ease:"back.out(1.7)"}).to(e.current,{opacity:0,scale:.8,y:210,duration:.5,delay:.5}),console.log("Say Hi animation timeline created")};T.useEffect(()=>{const r=setTimeout(()=>{i()},1e3);return()=>clearTimeout(r)},[]),T.useEffect(()=>{const r=async()=>{if(window.spirit)s();else{const o=document.createElement("script");o.src="https://unpkg.com/spiritjs/dist/spirit.min.js",o.onload=()=>{s()},document.head.appendChild(o)}},s=()=>{const o=()=>{window.spirit&&window.spirit.loadAnimation?window.spirit.loadAnimation({loop:!0,path:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/cactus.json"}).then(()=>{console.log("Spirit animation loaded successfully")}).catch(l=>{console.error("Failed to load Spirit animation:",l)}):setTimeout(o,100)};o()};return r(),()=>{t.current&&J.killTweensOf(t.current),e.current&&J.killTweensOf(e.current)}},[]);const n=()=>{navigator.clipboard.writeText("nooshin-shahsavan.ca@gmail.com").then(()=>{const r=document.querySelector(".cactus2-email");r&&(r.classList.add("email-copied"),setTimeout(()=>{r.classList.remove("email-copied")},2e3))})};return a.jsxs("div",{className:"cactus2-container",children:[a.jsx("h2",{className:"cactus2-title",children:"Say Hi!"}),a.jsx("p",{className:"cactus2-email",onClick:n,title:"Click to copy email",children:"nooshin-shahsavan.ca@gmail.com"}),a.jsxs("svg",{ref:t,width:"833px",height:"637px",viewBox:"0 0 833 637",className:"cactus2-svg",children:[a.jsxs("g",{"data-spirit-id":"right-cactus",children:[a.jsxs("g",{"data-spirit-id":"right-body",children:[a.jsx("path",{fill:"#29EA90",d:"M565.5,459.5c0,0,13-112,13-136s-27-37-44-37s-44,13-44,37s13,136,13,136H565.5z"}),a.jsx("path",{fill:"#22B562",d:"M546,288c0,0,14,14,19,29s-11,142-11,142h11c0,0,19-126.3,12-145S546,288,546,288z"}),a.jsx("path",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeMiterlimit:"10",d:`M565.5,459.5c0,0,13-112,13-136s-27-37-44-37
              s-44,13-44,37s13,136,13,136H565.5z`}),a.jsx("line",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"535",y1:"285",x2:"535",y2:"276"}),a.jsx("line",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"572",y1:"303",x2:"579",y2:"297"}),a.jsx("line",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"579",y1:"331",x2:"589",y2:"331"}),a.jsx("line",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"569.3",y1:"407",x2:"576.9",y2:"407"}),a.jsx("line",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"497",y1:"303",x2:"490",y2:"297"}),a.jsx("line",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"490",y1:"331",x2:"480",y2:"331"}),a.jsx("line",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"499.7",y1:"407",x2:"492.1",y2:"407"}),a.jsx("line",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"573.5",y1:"369",x2:"582.1",y2:"369"}),a.jsx("line",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"495.5",y1:"369",x2:"486.9",y2:"369"}),a.jsxs("g",{"data-spirit-id":"right-eyes",children:[a.jsx("circle",{cx:"516",cy:"348",r:"4"}),a.jsx("circle",{cx:"556",cy:"348",r:"4"})]})]}),a.jsxs("g",{"data-spirit-id":"right-pot",children:[a.jsx("g",{display:"none",children:a.jsx("polygon",{display:"inline",fill:"#FFFFFF",points:"494.7,497 505,537 565,537 576.3,497 			"})}),a.jsx("polygon",{fill:"#FFDF54",points:"555,497 546,534 567,534 577,497 		"}),a.jsx("polygon",{fill:"#FFDF54",points:"574,505 496,505 494,497 575.5,497 		"}),a.jsx("polygon",{fill:"#E2AF13",points:"554.5,500.1 553.1,505 574,505 576,497 		"}),a.jsx("g",{children:a.jsx("path",{d:"M574.1,497l-9.6,34h-57.9l-9.6-34H574.1 M582,491h-93l13,46h67L582,491L582,491z"})}),a.jsx("path",{fill:"#FFFFFF",d:`M582.3,497h-93c-2.1,0-3.7-1.7-3.7-3.7v-32c0-2.1,1.7-3.7,3.7-3.7h93c2.1,0,3.7,1.7,3.7,3.7v32
              C586,495.3,584.3,497,582.3,497z`}),a.jsx("path",{fill:"#FFDF54",d:"M582.3,497h-27.8v-39.5h27.8c2.1,0,3.7,1.7,3.7,3.7v32C586,495.3,584.3,497,582.3,497z"}),a.jsx("path",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeMiterlimit:"10",d:`M582.3,497h-93c-2.1,0-3.7-1.7-3.7-3.7v-32
              c0-2.1,1.7-3.7,3.7-3.7h93c2.1,0,3.7,1.7,3.7,3.7v32C586,495.3,584.3,497,582.3,497z`})]})]}),a.jsxs("g",{"data-spirit-id":"left-cactus",children:[a.jsxs("g",{"data-spirit-id":"left-body",children:[a.jsx("path",{fill:"#29EA90",d:"M305.5,459.5c0,0,13-42,13-66s-27-37-44-37s-44,13-44,37s13,66,13,66H305.5z"}),a.jsx("path",{fill:"#22B562",d:"M286,360c0,0,15,10,20,25s-12,74-12,74h11c0,0,19-57.7,12-76.3C310,364,286,360,286,360z"}),a.jsx("path",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeMiterlimit:"10",d:`M305.5,459.5c0,0,13-42,13-66s-27-37-44-37
              s-44,13-44,37s13,66,13,66H305.5z`}),a.jsx("line",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"275",y1:"356",x2:"275",y2:"347"}),a.jsx("line",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"312",y1:"374",x2:"319",y2:"368"}),a.jsx("line",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"319",y1:"402",x2:"329",y2:"402"}),a.jsx("line",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"311",y1:"440",x2:"319",y2:"440"}),a.jsx("line",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"237",y1:"374",x2:"230",y2:"368"}),a.jsx("line",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"230",y1:"402",x2:"220",y2:"402"}),a.jsx("line",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",x1:"238",y1:"440",x2:"230",y2:"440"}),a.jsxs("g",{"data-spirit-id":"left-eyes",children:[a.jsx("circle",{cx:"256",cy:"408",r:"4"}),a.jsx("circle",{cx:"296",cy:"408",r:"4"})]}),a.jsx("circle",{"data-spirit-id":"left-mouth",cx:"275",cy:"438",r:"7"})]}),a.jsxs("g",{"data-spirit-id":"left-pot",children:[a.jsx("g",{display:"none",children:a.jsx("polygon",{display:"inline",fill:"#FFFFFF",points:"234.7,497 245,537 305,537 316.3,497 			"})}),a.jsx("polygon",{fill:"#FFDF54",points:"295,497 286,534 307,534 317,497 		"}),a.jsx("polygon",{fill:"#FFDF54",points:"314,505 236,505 234,497 315.5,497 		"}),a.jsx("polygon",{fill:"#E2AF13",points:"294.5,500.1 293.1,505 314,505 316,497 		"}),a.jsx("g",{children:a.jsx("path",{d:"M314.1,497l-9.6,34h-57.9l-9.6-34H314.1 M322,491h-93l13,46h67L322,491L322,491z"})}),a.jsx("path",{fill:"#FFFFFF",d:`M322.3,497h-93c-2.1,0-3.7-1.7-3.7-3.7v-32c0-2.1,1.7-3.7,3.7-3.7h93c2.1,0,3.7,1.7,3.7,3.7v32
              C326,495.3,324.3,497,322.3,497z`}),a.jsx("path",{fill:"#FFDF54",d:"M322.3,497h-27.8v-39.5h27.8c2.1,0,3.7,1.7,3.7,3.7v32C326,495.3,324.3,497,322.3,497z"}),a.jsx("path",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeMiterlimit:"10",d:`M322.3,497h-93c-2.1,0-3.7-1.7-3.7-3.7v-32
              c0-2.1,1.7-3.7,3.7-3.7h93c2.1,0,3.7,1.7,3.7,3.7v32C326,495.3,324.3,497,322.3,497z`})]})]}),a.jsx("line",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",x1:"159",y1:"534",x2:"651",y2:"534"}),a.jsxs("g",{"data-spirit-id":"bubble",children:[a.jsx("circle",{fill:"#D1FFFF",cx:"198",cy:"235",r:"62"}),a.jsx("g",{children:a.jsxs("g",{children:[a.jsx("path",{fill:"none",stroke:"#FFFFFF",strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",d:`M155.3,237.4
                c0-2.5,0.2-5,0.6-7.5`}),a.jsx("path",{fill:"none",stroke:"#FFFFFF",strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",strokeDasharray:"0,4.0691,18.718,0",d:`
                M162.5,212.6c4.1-6.4,9.7-11.8,16.4-15.5`}),a.jsx("path",{fill:"none",stroke:"#FFFFFF",strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",d:`M178.9,197.1
                c2.2-1.2,4.4-2.3,6.8-3.1`})]})}),a.jsx("path",{fill:"#7FF4FF",d:`M228.2,180.3c8,10.4,12.8,23.5,12.8,37.7c0,34.2-27.8,62-62,62c-10.6,0-20.5-2.6-29.2-7.3
            c11.3,14.8,29.2,24.3,49.2,24.3c34.2,0,62-27.8,62-62C261,211.3,247.7,190.8,228.2,180.3z`}),a.jsx("path",{fill:"#7FF4FF",d:`M226.8,183.8c7.5,9.8,12,22.1,12,35.4c0,32.2-26.1,58.3-58.3,58.3c-9.9,0-19.3-2.5-27.5-6.9
            c10.7,13.9,27.4,22.9,46.3,22.9c32.2,0,58.3-26.1,58.3-58.3C257.7,213,245.2,193.6,226.8,183.8z`}),a.jsx("g",{children:a.jsx("path",{d:`M198,179c30.9,0,56,25.1,56,56s-25.1,56-56,56s-56-25.1-56-56S167.1,179,198,179 M198,173c-34.2,0-62,27.8-62,62
              s27.8,62,62,62s62-27.8,62-62S232.2,173,198,173L198,173z`})})]}),a.jsxs("g",{"data-spirit-id":"burst",children:[a.jsxs("g",{"data-spirit-id":"burst-strokes",children:[a.jsx("line",{"data-spirit-id":"bust-stroke-4",fill:"none",stroke:"#000000",strokeWidth:"5",strokeLinecap:"round",strokeMiterlimit:"10",x1:"437",y1:"192",x2:"437",y2:"110"}),a.jsx("line",{"data-spirit-id":"bust-stroke-3",fill:"none",stroke:"#000000",strokeWidth:"5",strokeLinecap:"round",strokeMiterlimit:"10",x1:"437.5",y1:"360",x2:"437.5",y2:"278"}),a.jsx("line",{"data-spirit-id":"bust-stroke-2",fill:"none",stroke:"#000000",strokeWidth:"5",strokeLinecap:"round",strokeMiterlimit:"10",x1:"480.2",y1:"234.8",x2:"562.2",y2:"234.8"}),a.jsx("line",{"data-spirit-id":"bust-stroke-1",fill:"none",stroke:"#000000",strokeWidth:"5",strokeLinecap:"round",strokeMiterlimit:"10",x1:"312.2",y1:"235.2",x2:"394.2",y2:"235.2"})]}),a.jsxs("g",{"data-spirit-id":"burst-bubbles",children:[a.jsx("circle",{"data-spirit-id":"burst-bubble-3",fill:"#36EA96",cx:"455.5",cy:"215.5",r:"9"}),a.jsx("circle",{"data-spirit-id":"burst-bubble-2",fill:"#5BD0FB",cx:"394.5",cy:"206.5",r:"6"}),a.jsx("circle",{"data-spirit-id":"burst-bubble-1",fill:"#5BD0FB",cx:"394.5",cy:"266.5",r:"6"})]})]}),a.jsx("text",{ref:e,x:"535",y:"250",fontSize:"24",fontWeight:"bold",fill:"white",textAnchor:"middle",style:{pointerEvents:"none",userSelect:"none",filter:"drop-shadow(2px 2px 4px rgba(0,0,0,0.8))"},children:"Say Hi!"})]})]})};function z2(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _z(t,e,i){return e&&z2(t.prototype,e),i&&z2(t,i),t}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var zt,ph,zi,es,ts,$a,VS,Ks,Sc,WS,mr,wn,US,HS=function(){return zt||typeof window<"u"&&(zt=window.gsap)&&zt.registerPlugin&&zt},YS=1,Ca=[],ae=[],Yn=[],_c=Date.now,Gg=function(e,i){return i},Cz=function(){var e=Sc.core,i=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,ae),r.push.apply(r,Yn),ae=n,Yn=r,Gg=function(o,l){return i[o](l)}},ws=function(e,i){return~Yn.indexOf(e)&&Yn[Yn.indexOf(e)+1][i]},Cc=function(e){return!!~WS.indexOf(e)},Jt=function(e,i,n,r,s){return e.addEventListener(i,n,{passive:r!==!1,capture:!!s})},Kt=function(e,i,n,r){return e.removeEventListener(i,n,!!r)},nu="scrollLeft",ru="scrollTop",Xg=function(){return mr&&mr.isPressed||ae.cache++},fp=function(e,i){var n=function r(s){if(s||s===0){YS&&(zi.history.scrollRestoration="manual");var o=mr&&mr.isPressed;s=r.v=Math.round(s)||(mr&&mr.iOS?1:0),e(s),r.cacheID=ae.cache,o&&Gg("ss",s)}else(i||ae.cache!==r.cacheID||Gg("ref"))&&(r.cacheID=ae.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},oi={s:nu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:fp(function(t){return arguments.length?zi.scrollTo(t,wt.sc()):zi.pageXOffset||es[nu]||ts[nu]||$a[nu]||0})},wt={s:ru,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:oi,sc:fp(function(t){return arguments.length?zi.scrollTo(oi.sc(),t):zi.pageYOffset||es[ru]||ts[ru]||$a[ru]||0})},hi=function(e,i){return(i&&i._ctx&&i._ctx.selector||zt.utils.toArray)(e)[0]||(typeof e=="string"&&zt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Pz=function(e,i){for(var n=i.length;n--;)if(i[n]===e||i[n].contains(e))return!0;return!1},Ss=function(e,i){var n=i.s,r=i.sc;Cc(e)&&(e=es.scrollingElement||ts);var s=ae.indexOf(e),o=r===wt.sc?1:2;!~s&&(s=ae.push(e)-1),ae[s+o]||Jt(e,"scroll",Xg);var l=ae[s+o],c=l||(ae[s+o]=fp(ws(e,n),!0)||(Cc(e)?r:fp(function(d){return arguments.length?e[n]=d:e[n]})));return c.target=e,l||(c.smooth=zt.getProperty(e,"scrollBehavior")==="smooth"),c},Zg=function(e,i,n){var r=e,s=e,o=_c(),l=o,c=i||50,d=Math.max(500,c*3),u=function(v,w){var S=_c();w||S-o>c?(s=r,r=v,l=o,o=S):n?r+=v:r=s+(v-s)/(S-l)*(o-l)},p=function(){s=r=n?0:r,l=o=0},f=function(v){var w=l,S=s,j=_c();return(v||v===0)&&v!==r&&u(v),o===l||j-l>d?0:(r+(n?S:-S))/((n?j:o)-w)*1e3};return{update:u,reset:p,getVelocity:f}},Ll=function(e,i){return i&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},F2=function(e){var i=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(i)>=Math.abs(n)?i:n},GS=function(){Sc=zt.core.globals().ScrollTrigger,Sc&&Sc.core&&Cz()},XS=function(e){return zt=e||HS(),!ph&&zt&&typeof document<"u"&&document.body&&(zi=window,es=document,ts=es.documentElement,$a=es.body,WS=[zi,es,ts,$a],zt.utils.clamp,US=zt.core.context||function(){},Ks="onpointerenter"in $a?"pointer":"mouse",VS=rt.isTouch=zi.matchMedia&&zi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in zi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,wn=rt.eventTypes=("ontouchstart"in ts?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ts?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return YS=0},500),GS(),ph=1),ph};oi.op=wt;ae.cache=0;var rt=function(){function t(i){this.init(i)}var e=t.prototype;return e.init=function(n){ph||XS(zt)||console.warn("Please gsap.registerPlugin(Observer)"),Sc||GS();var r=n.tolerance,s=n.dragMinimum,o=n.type,l=n.target,c=n.lineHeight,d=n.debounce,u=n.preventDefault,p=n.onStop,f=n.onStopDelay,g=n.ignore,v=n.wheelSpeed,w=n.event,S=n.onDragStart,j=n.onDragEnd,b=n.onDrag,y=n.onPress,h=n.onRelease,x=n.onRight,k=n.onLeft,D=n.onUp,_=n.onDown,C=n.onChangeX,E=n.onChangeY,z=n.onChange,A=n.onToggleX,L=n.onToggleY,O=n.onHover,W=n.onHoverEnd,V=n.onMove,B=n.ignoreCheck,I=n.isNormalizer,M=n.onGestureStart,P=n.onGestureEnd,R=n.onWheel,U=n.onEnable,ne=n.onDisable,Z=n.onClick,fe=n.scrollSpeed,ue=n.capture,me=n.allowClicks,Le=n.lockAxis,je=n.onLockAxis;this.target=l=hi(l)||ts,this.vars=n,g&&(g=zt.utils.toArray(g)),r=r||1e-9,s=s||0,v=v||1,fe=fe||1,o=o||"wheel,touch,pointer",d=d!==!1,c||(c=parseFloat(zi.getComputedStyle($a).lineHeight)||22);var Tt,De,Me,ge,Qe,di,Di,F=this,Si=0,Xn=0,Pr=n.passive||!u&&n.passive!==!1,He=Ss(l,oi),Zn=Ss(l,wt),Tr=He(),Ms=Zn(),vt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&wn[0]==="pointerdown",Er=Cc(l),Ke=l.ownerDocument||es,un=[0,0,0],Hi=[0,0,0],qn=0,wl=function(){return qn=_c()},ot=function(Q,we){return(F.event=Q)&&g&&Pz(Q.target,g)||we&&vt&&Q.pointerType!=="touch"||B&&B(Q,we)},Cd=function(){F._vx.reset(),F._vy.reset(),De.pause(),p&&p(F)},Qn=function(){var Q=F.deltaX=F2(un),we=F.deltaY=F2(Hi),H=Math.abs(Q)>=r,ee=Math.abs(we)>=r;z&&(H||ee)&&z(F,Q,we,un,Hi),H&&(x&&F.deltaX>0&&x(F),k&&F.deltaX<0&&k(F),C&&C(F),A&&F.deltaX<0!=Si<0&&A(F),Si=F.deltaX,un[0]=un[1]=un[2]=0),ee&&(_&&F.deltaY>0&&_(F),D&&F.deltaY<0&&D(F),E&&E(F),L&&F.deltaY<0!=Xn<0&&L(F),Xn=F.deltaY,Hi[0]=Hi[1]=Hi[2]=0),(ge||Me)&&(V&&V(F),Me&&(S&&Me===1&&S(F),b&&b(F),Me=0),ge=!1),di&&!(di=!1)&&je&&je(F),Qe&&(R(F),Qe=!1),Tt=0},Vo=function(Q,we,H){un[H]+=Q,Hi[H]+=we,F._vx.update(Q),F._vy.update(we),d?Tt||(Tt=requestAnimationFrame(Qn)):Qn()},Wo=function(Q,we){Le&&!Di&&(F.axis=Di=Math.abs(Q)>Math.abs(we)?"x":"y",di=!0),Di!=="y"&&(un[2]+=Q,F._vx.update(Q,!0)),Di!=="x"&&(Hi[2]+=we,F._vy.update(we,!0)),d?Tt||(Tt=requestAnimationFrame(Qn)):Qn()},Ir=function(Q){if(!ot(Q,1)){Q=Ll(Q,u);var we=Q.clientX,H=Q.clientY,ee=we-F.x,X=H-F.y,te=F.isDragging;F.x=we,F.y=H,(te||(ee||X)&&(Math.abs(F.startX-we)>=s||Math.abs(F.startY-H)>=s))&&(Me=te?2:1,te||(F.isDragging=!0),Wo(ee,X))}},zs=F.onPress=function(ie){ot(ie,1)||ie&&ie.button||(F.axis=Di=null,De.pause(),F.isPressed=!0,ie=Ll(ie),Si=Xn=0,F.startX=F.x=ie.clientX,F.startY=F.y=ie.clientY,F._vx.reset(),F._vy.reset(),Jt(I?l:Ke,wn[1],Ir,Pr,!0),F.deltaX=F.deltaY=0,y&&y(F))},ce=F.onRelease=function(ie){if(!ot(ie,1)){Kt(I?l:Ke,wn[1],Ir,!0);var Q=!isNaN(F.y-F.startY),we=F.isDragging,H=we&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),ee=Ll(ie);!H&&Q&&(F._vx.reset(),F._vy.reset(),u&&me&&zt.delayedCall(.08,function(){if(_c()-qn>300&&!ie.defaultPrevented){if(ie.target.click)ie.target.click();else if(Ke.createEvent){var X=Ke.createEvent("MouseEvents");X.initMouseEvent("click",!0,!0,zi,1,ee.screenX,ee.screenY,ee.clientX,ee.clientY,!1,!1,!1,!1,0,null),ie.target.dispatchEvent(X)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,p&&we&&!I&&De.restart(!0),Me&&Qn(),j&&we&&j(F),h&&h(F,H)}},Fs=function(Q){return Q.touches&&Q.touches.length>1&&(F.isGesturing=!0)&&M(Q,F.isDragging)},hn=function(){return(F.isGesturing=!1)||P(F)},pn=function(Q){if(!ot(Q)){var we=He(),H=Zn();Vo((we-Tr)*fe,(H-Ms)*fe,1),Tr=we,Ms=H,p&&De.restart(!0)}},fn=function(Q){if(!ot(Q)){Q=Ll(Q,u),R&&(Qe=!0);var we=(Q.deltaMode===1?c:Q.deltaMode===2?zi.innerHeight:1)*v;Vo(Q.deltaX*we,Q.deltaY*we,0),p&&!I&&De.restart(!0)}},Rs=function(Q){if(!ot(Q)){var we=Q.clientX,H=Q.clientY,ee=we-F.x,X=H-F.y;F.x=we,F.y=H,ge=!0,p&&De.restart(!0),(ee||X)&&Wo(ee,X)}},Uo=function(Q){F.event=Q,O(F)},Kn=function(Q){F.event=Q,W(F)},yl=function(Q){return ot(Q)||Ll(Q,u)&&Z(F)};De=F._dc=zt.delayedCall(f||.25,Cd).pause(),F.deltaX=F.deltaY=0,F._vx=Zg(0,50,!0),F._vy=Zg(0,50,!0),F.scrollX=He,F.scrollY=Zn,F.isDragging=F.isGesturing=F.isPressed=!1,US(this),F.enable=function(ie){return F.isEnabled||(Jt(Er?Ke:l,"scroll",Xg),o.indexOf("scroll")>=0&&Jt(Er?Ke:l,"scroll",pn,Pr,ue),o.indexOf("wheel")>=0&&Jt(l,"wheel",fn,Pr,ue),(o.indexOf("touch")>=0&&VS||o.indexOf("pointer")>=0)&&(Jt(l,wn[0],zs,Pr,ue),Jt(Ke,wn[2],ce),Jt(Ke,wn[3],ce),me&&Jt(l,"click",wl,!0,!0),Z&&Jt(l,"click",yl),M&&Jt(Ke,"gesturestart",Fs),P&&Jt(Ke,"gestureend",hn),O&&Jt(l,Ks+"enter",Uo),W&&Jt(l,Ks+"leave",Kn),V&&Jt(l,Ks+"move",Rs)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=ge=Me=!1,F._vx.reset(),F._vy.reset(),Tr=He(),Ms=Zn(),ie&&ie.type&&zs(ie),U&&U(F)),F},F.disable=function(){F.isEnabled&&(Ca.filter(function(ie){return ie!==F&&Cc(ie.target)}).length||Kt(Er?Ke:l,"scroll",Xg),F.isPressed&&(F._vx.reset(),F._vy.reset(),Kt(I?l:Ke,wn[1],Ir,!0)),Kt(Er?Ke:l,"scroll",pn,ue),Kt(l,"wheel",fn,ue),Kt(l,wn[0],zs,ue),Kt(Ke,wn[2],ce),Kt(Ke,wn[3],ce),Kt(l,"click",wl,!0),Kt(l,"click",yl),Kt(Ke,"gesturestart",Fs),Kt(Ke,"gestureend",hn),Kt(l,Ks+"enter",Uo),Kt(l,Ks+"leave",Kn),Kt(l,Ks+"move",Rs),F.isEnabled=F.isPressed=F.isDragging=!1,ne&&ne(F))},F.kill=F.revert=function(){F.disable();var ie=Ca.indexOf(F);ie>=0&&Ca.splice(ie,1),mr===F&&(mr=0)},Ca.push(F),I&&Cc(l)&&(mr=F),F.enable(w)},_z(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();rt.version="3.13.0";rt.create=function(t){return new rt(t)};rt.register=XS;rt.getAll=function(){return Ca.slice()};rt.getById=function(t){return Ca.filter(function(e){return e.vars.id===t})[0]};HS()&&zt.registerPlugin(rt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var G,sa,oe,Pe,Ai,be,rw,mp,dd,Pc,Kl,su,Wt,sf,qg,ni,R2,L2,oa,ZS,p0,qS,ti,Qg,QS,KS,Nr,Kg,sw,Ba,ow,gp,Jg,f0,ou=1,Ut=Date.now,m0=Ut(),an=0,Jl=0,O2=function(e,i,n){var r=Ei(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+i+"Clamp"]=r,r?e.substr(6,e.length-7):e},$2=function(e,i){return i&&(!Ei(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Tz=function t(){return Jl&&requestAnimationFrame(t)},B2=function(){return sf=1},N2=function(){return sf=0},Rn=function(e){return e},ec=function(e){return Math.round(e*1e5)/1e5||0},JS=function(){return typeof window<"u"},e4=function(){return G||JS()&&(G=window.gsap)&&G.registerPlugin&&G},To=function(e){return!!~rw.indexOf(e)},t4=function(e){return(e==="Height"?ow:oe["inner"+e])||Ai["client"+e]||be["client"+e]},i4=function(e){return ws(e,"getBoundingClientRect")||(To(e)?function(){return wh.width=oe.innerWidth,wh.height=ow,wh}:function(){return ur(e)})},Ez=function(e,i,n){var r=n.d,s=n.d2,o=n.a;return(o=ws(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(i?t4(s):e["client"+s])||0}},Iz=function(e,i){return!i||~Yn.indexOf(e)?i4(e):function(){return wh}},Vn=function(e,i){var n=i.s,r=i.d2,s=i.d,o=i.a;return Math.max(0,(n="scroll"+r)&&(o=ws(e,n))?o()-i4(e)()[s]:To(e)?(Ai[n]||be[n])-t4(r):e[n]-e["offset"+r])},au=function(e,i){for(var n=0;n<oa.length;n+=3)(!i||~i.indexOf(oa[n+1]))&&e(oa[n],oa[n+1],oa[n+2])},Ei=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},tc=function(e){return typeof e=="number"},Js=function(e){return typeof e=="object"},Ol=function(e,i,n){return e&&e.progress(i?0:1)&&n&&e.pause()},g0=function(e,i){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return i(e)}):i(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Zo=Math.abs,n4="left",r4="top",aw="right",lw="bottom",wo="width",yo="height",Tc="Right",Ec="Left",Ic="Top",Ac="Bottom",lt="padding",Ki="margin",dl="Width",cw="Height",mt="px",Ji=function(e){return oe.getComputedStyle(e)},Az=function(e){var i=Ji(e).position;e.style.position=i==="absolute"||i==="fixed"?i:"relative"},V2=function(e,i){for(var n in i)n in e||(e[n]=i[n]);return e},ur=function(e,i){var n=i&&Ji(e)[qg]!=="matrix(1, 0, 0, 1, 0, 0)"&&G.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},xp=function(e,i){var n=i.d2;return e["offset"+n]||e["client"+n]||0},s4=function(e){var i=[],n=e.labels,r=e.duration(),s;for(s in n)i.push(n[s]/r);return i},Mz=function(e){return function(i){return G.utils.snap(s4(e),i)}},dw=function(e){var i=G.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var l;if(!s)return i(r);if(s>0){for(r-=o,l=0;l<n.length;l++)if(n[l]>=r)return n[l];return n[l-1]}else for(l=n.length,r+=o;l--;)if(n[l]<=r)return n[l];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var l=i(r);return!s||Math.abs(l-r)<o||l-r<0==s<0?l:i(s<0?r-e:r+e)}},zz=function(e){return function(i,n){return dw(s4(e))(i,n.direction)}},lu=function(e,i,n,r){return n.split(",").forEach(function(s){return e(i,s,r)})},jt=function(e,i,n,r,s){return e.addEventListener(i,n,{passive:!r,capture:!!s})},kt=function(e,i,n,r){return e.removeEventListener(i,n,!!r)},cu=function(e,i,n){n=n&&n.wheelHandler,n&&(e(i,"wheel",n),e(i,"touchmove",n))},W2={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},du={toggleActions:"play",anticipatePin:0},wp={top:0,left:0,center:.5,bottom:1,right:1},fh=function(e,i){if(Ei(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=i/100),e=e.substr(0,n-1)),e=r+(e in wp?wp[e]*i:~e.indexOf("%")?parseFloat(e)*i/100:parseFloat(e)||0)}return e},uu=function(e,i,n,r,s,o,l,c){var d=s.startColor,u=s.endColor,p=s.fontSize,f=s.indent,g=s.fontWeight,v=Pe.createElement("div"),w=To(n)||ws(n,"pinType")==="fixed",S=e.indexOf("scroller")!==-1,j=w?be:n,b=e.indexOf("start")!==-1,y=b?d:u,h="border-color:"+y+";font-size:"+p+";color:"+y+";font-weight:"+g+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return h+="position:"+((S||c)&&w?"fixed;":"absolute;"),(S||c||!w)&&(h+=(r===wt?aw:lw)+":"+(o+parseFloat(f))+"px;"),l&&(h+="box-sizing:border-box;text-align:left;width:"+l.offsetWidth+"px;"),v._isStart=b,v.setAttribute("class","gsap-marker-"+e+(i?" marker-"+i:"")),v.style.cssText=h,v.innerText=i||i===0?e+"-"+i:e,j.children[0]?j.insertBefore(v,j.children[0]):j.appendChild(v),v._offset=v["offset"+r.op.d2],mh(v,0,r,b),v},mh=function(e,i,n,r){var s={display:"block"},o=n[r?"os2":"p2"],l=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+dl]=1,s["border"+l+dl]=0,s[n.p]=i+"px",G.set(e,s)},se=[],ex={},ud,U2=function(){return Ut()-an>34&&(ud||(ud=requestAnimationFrame(yr)))},qo=function(){(!ti||!ti.isPressed||ti.startX>be.clientWidth)&&(ae.cache++,ti?ud||(ud=requestAnimationFrame(yr)):yr(),an||Io("scrollStart"),an=Ut())},x0=function(){KS=oe.innerWidth,QS=oe.innerHeight},ic=function(e){ae.cache++,(e===!0||!Wt&&!qS&&!Pe.fullscreenElement&&!Pe.webkitFullscreenElement&&(!Qg||KS!==oe.innerWidth||Math.abs(oe.innerHeight-QS)>oe.innerHeight*.25))&&mp.restart(!0)},Eo={},Fz=[],o4=function t(){return kt(le,"scrollEnd",t)||ao(!0)},Io=function(e){return Eo[e]&&Eo[e].map(function(i){return i()})||Fz},Pi=[],a4=function(e){for(var i=0;i<Pi.length;i+=5)(!e||Pi[i+4]&&Pi[i+4].query===e)&&(Pi[i].style.cssText=Pi[i+1],Pi[i].getBBox&&Pi[i].setAttribute("transform",Pi[i+2]||""),Pi[i+3].uncache=1)},uw=function(e,i){var n;for(ni=0;ni<se.length;ni++)n=se[ni],n&&(!i||n._ctx===i)&&(e?n.kill(1):n.revert(!0,!0));gp=!0,i&&a4(i),i||Io("revert")},l4=function(e,i){ae.cache++,(i||!ri)&&ae.forEach(function(n){return Gt(n)&&n.cacheID++&&(n.rec=0)}),Ei(e)&&(oe.history.scrollRestoration=sw=e)},ri,vo=0,H2,Rz=function(){if(H2!==vo){var e=H2=vo;requestAnimationFrame(function(){return e===vo&&ao(!0)})}},c4=function(){be.appendChild(Ba),ow=!ti&&Ba.offsetHeight||oe.innerHeight,be.removeChild(Ba)},Y2=function(e){return dd(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i){return i.style.display=e?"none":"block"})},ao=function(e,i){if(Ai=Pe.documentElement,be=Pe.body,rw=[oe,Pe,Ai,be],an&&!e&&!gp){jt(le,"scrollEnd",o4);return}c4(),ri=le.isRefreshing=!0,ae.forEach(function(r){return Gt(r)&&++r.cacheID&&(r.rec=r())});var n=Io("refreshInit");ZS&&le.sort(),i||uw(),ae.forEach(function(r){Gt(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),se.slice(0).forEach(function(r){return r.refresh()}),gp=!1,se.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Jg=1,Y2(!0),se.forEach(function(r){var s=Vn(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,l=r._startClamp&&r.start>=s;(o||l)&&r.setPositions(l?s-1:r.start,o?Math.max(l?s:r.start+1,s):r.end,!0)}),Y2(!1),Jg=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),ae.forEach(function(r){Gt(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),l4(sw,1),mp.pause(),vo++,ri=2,yr(2),se.forEach(function(r){return Gt(r.vars.onRefresh)&&r.vars.onRefresh(r)}),ri=le.isRefreshing=!1,Io("refresh")},tx=0,gh=1,Mc,yr=function(e){if(e===2||!ri&&!gp){le.isUpdating=!0,Mc&&Mc.update(0);var i=se.length,n=Ut(),r=n-m0>=50,s=i&&se[0].scroll();if(gh=tx>s?-1:1,ri||(tx=s),r&&(an&&!sf&&n-an>200&&(an=0,Io("scrollEnd")),Kl=m0,m0=n),gh<0){for(ni=i;ni-- >0;)se[ni]&&se[ni].update(0,r);gh=1}else for(ni=0;ni<i;ni++)se[ni]&&se[ni].update(0,r);le.isUpdating=!1}ud=0},ix=[n4,r4,lw,aw,Ki+Ac,Ki+Tc,Ki+Ic,Ki+Ec,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],xh=ix.concat([wo,yo,"boxSizing","max"+dl,"max"+cw,"position",Ki,lt,lt+Ic,lt+Tc,lt+Ac,lt+Ec]),Lz=function(e,i,n){Na(n);var r=e._gsap;if(r.spacerIsNative)Na(r.spacerState);else if(e._gsap.swappedIn){var s=i.parentNode;s&&(s.insertBefore(e,i),s.removeChild(i))}e._gsap.swappedIn=!1},w0=function(e,i,n,r){if(!e._gsap.swappedIn){for(var s=ix.length,o=i.style,l=e.style,c;s--;)c=ix[s],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),l[lw]=l[aw]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[wo]=xp(e,oi)+mt,o[yo]=xp(e,wt)+mt,o[lt]=l[Ki]=l[r4]=l[n4]="0",Na(r),l[wo]=l["max"+dl]=n[wo],l[yo]=l["max"+cw]=n[yo],l[lt]=n[lt],e.parentNode!==i&&(e.parentNode.insertBefore(i,e),i.appendChild(e)),e._gsap.swappedIn=!0}},Oz=/([A-Z])/g,Na=function(e){if(e){var i=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||G.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?i[s]=o:i[s]&&i.removeProperty(s.replace(Oz,"-$1").toLowerCase())}},hu=function(e){for(var i=xh.length,n=e.style,r=[],s=0;s<i;s++)r.push(xh[s],n[xh[s]]);return r.t=e,r},$z=function(e,i,n){for(var r=[],s=e.length,o=n?8:0,l;o<s;o+=2)l=e[o],r.push(l,l in i?i[l]:e[o+1]);return r.t=e.t,r},wh={left:0,top:0},G2=function(e,i,n,r,s,o,l,c,d,u,p,f,g,v){Gt(e)&&(e=e(c)),Ei(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?fh("0"+e.substr(3),n):0));var w=g?g.time():0,S,j,b;if(g&&g.seek(0),isNaN(e)||(e=+e),tc(e))g&&(e=G.utils.mapRange(g.scrollTrigger.start,g.scrollTrigger.end,0,f,e)),l&&mh(l,n,r,!0);else{Gt(i)&&(i=i(c));var y=(e||"0").split(" "),h,x,k,D;b=hi(i,c)||be,h=ur(b)||{},(!h||!h.left&&!h.top)&&Ji(b).display==="none"&&(D=b.style.display,b.style.display="block",h=ur(b),D?b.style.display=D:b.style.removeProperty("display")),x=fh(y[0],h[r.d]),k=fh(y[1]||"0",n),e=h[r.p]-d[r.p]-u+x+s-k,l&&mh(l,k,r,n-k<20||l._isStart&&k>20),n-=n-k}if(v&&(c[v]=e||-.001,e<0&&(e=0)),o){var _=e+n,C=o._isStart;S="scroll"+r.d2,mh(o,_,r,C&&_>20||!C&&(p?Math.max(be[S],Ai[S]):o.parentNode[S])<=_+1),p&&(d=ur(l),p&&(o.style[r.op.p]=d[r.op.p]-r.op.m-o._offset+mt))}return g&&b&&(S=ur(b),g.seek(f),j=ur(b),g._caScrollDist=S[r.p]-j[r.p],e=e/g._caScrollDist*f),g&&g.seek(w),g?e:Math.round(e)},Bz=/(webkit|moz|length|cssText|inset)/i,X2=function(e,i,n,r){if(e.parentNode!==i){var s=e.style,o,l;if(i===be){e._stOrig=s.cssText,l=Ji(e);for(o in l)!+o&&!Bz.test(o)&&l[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=l[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;G.core.getCache(e).uncache=1,i.appendChild(e)}},d4=function(e,i,n){var r=i,s=r;return function(o){var l=Math.round(e());return l!==r&&l!==s&&Math.abs(l-r)>3&&Math.abs(l-s)>3&&(o=l,n&&n()),s=r,r=Math.round(o),r}},pu=function(e,i,n){var r={};r[i.p]="+="+n,G.set(e,r)},Z2=function(e,i){var n=Ss(e,i),r="_scroll"+i.p2,s=function o(l,c,d,u,p){var f=o.tween,g=c.onComplete,v={};d=d||n();var w=d4(n,d,function(){f.kill(),o.tween=0});return p=u&&p||0,u=u||l-d,f&&f.kill(),c[r]=l,c.inherit=!1,c.modifiers=v,v[r]=function(){return w(d+u*f.ratio+p*f.ratio*f.ratio)},c.onUpdate=function(){ae.cache++,o.tween&&yr()},c.onComplete=function(){o.tween=0,g&&g.call(f)},f=o.tween=G.to(e,c),f};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},jt(e,"wheel",n.wheelHandler),le.isTouch&&jt(e,"touchmove",n.wheelHandler),s},le=function(){function t(i,n){sa||t.register(G)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Kg(this),this.init(i,n)}var e=t.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Jl){this.update=this.refresh=this.kill=Rn;return}n=V2(Ei(n)||tc(n)||n.nodeType?{trigger:n}:n,du);var s=n,o=s.onUpdate,l=s.toggleClass,c=s.id,d=s.onToggle,u=s.onRefresh,p=s.scrub,f=s.trigger,g=s.pin,v=s.pinSpacing,w=s.invalidateOnRefresh,S=s.anticipatePin,j=s.onScrubComplete,b=s.onSnapComplete,y=s.once,h=s.snap,x=s.pinReparent,k=s.pinSpacer,D=s.containerAnimation,_=s.fastScrollEnd,C=s.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?oi:wt,z=!p&&p!==0,A=hi(n.scroller||oe),L=G.core.getCache(A),O=To(A),W=("pinType"in n?n.pinType:ws(A,"pinType")||O&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=z&&n.toggleActions.split(" "),I="markers"in n?n.markers:du.markers,M=O?0:parseFloat(Ji(A)["border"+E.p2+dl])||0,P=this,R=n.onRefreshInit&&function(){return n.onRefreshInit(P)},U=Ez(A,O,E),ne=Iz(A,O),Z=0,fe=0,ue=0,me=Ss(A,E),Le,je,Tt,De,Me,ge,Qe,di,Di,F,Si,Xn,Pr,He,Zn,Tr,Ms,vt,Er,Ke,un,Hi,qn,wl,ot,Cd,Qn,Vo,Wo,Ir,zs,ce,Fs,hn,pn,fn,Rs,Uo,Kn;if(P._startClamp=P._endClamp=!1,P._dir=E,S*=45,P.scroller=A,P.scroll=D?D.time.bind(D):me,De=me(),P.vars=n,r=r||n.animation,"refreshPriority"in n&&(ZS=1,n.refreshPriority===-9999&&(Mc=P)),L.tweenScroll=L.tweenScroll||{top:Z2(A,wt),left:Z2(A,oi)},P.tweenTo=Le=L.tweenScroll[E.p],P.scrubDuration=function(H){Fs=tc(H)&&H,Fs?ce?ce.duration(H):ce=G.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Fs,paused:!0,onComplete:function(){return j&&j(P)}}):(ce&&ce.progress(1).kill(),ce=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(p),Ir=0,c||(c=r.vars.id)),h&&((!Js(h)||h.push)&&(h={snapTo:h}),"scrollBehavior"in be.style&&G.set(O?[be,Ai]:A,{scrollBehavior:"auto"}),ae.forEach(function(H){return Gt(H)&&H.target===(O?Pe.scrollingElement||Ai:A)&&(H.smooth=!1)}),Tt=Gt(h.snapTo)?h.snapTo:h.snapTo==="labels"?Mz(r):h.snapTo==="labelsDirectional"?zz(r):h.directional!==!1?function(H,ee){return dw(h.snapTo)(H,Ut()-fe<500?0:ee.direction)}:G.utils.snap(h.snapTo),hn=h.duration||{min:.1,max:2},hn=Js(hn)?Pc(hn.min,hn.max):Pc(hn,hn),pn=G.delayedCall(h.delay||Fs/2||.1,function(){var H=me(),ee=Ut()-fe<500,X=Le.tween;if((ee||Math.abs(P.getVelocity())<10)&&!X&&!sf&&Z!==H){var te=(H-ge)/He,bt=r&&!z?r.totalProgress():te,he=ee?0:(bt-zs)/(Ut()-Kl)*1e3||0,Je=G.utils.clamp(-te,1-te,Zo(he/2)*he/.185),Ot=te+(h.inertia===!1?0:Je),Ye,ze,Se=h,mn=Se.onStart,Oe=Se.onInterrupt,_i=Se.onComplete;if(Ye=Tt(Ot,P),tc(Ye)||(Ye=Ot),ze=Math.max(0,Math.round(ge+Ye*He)),H<=Qe&&H>=ge&&ze!==H){if(X&&!X._initted&&X.data<=Zo(ze-H))return;h.inertia===!1&&(Je=Ye-te),Le(ze,{duration:hn(Zo(Math.max(Zo(Ot-bt),Zo(Ye-bt))*.185/he/.05||0)),ease:h.ease||"power3",data:Zo(ze-H),onInterrupt:function(){return pn.restart(!0)&&Oe&&Oe(P)},onComplete:function(){P.update(),Z=me(),r&&!z&&(ce?ce.resetTo("totalProgress",Ye,r._tTime/r._tDur):r.progress(Ye)),Ir=zs=r&&!z?r.totalProgress():P.progress,b&&b(P),_i&&_i(P)}},H,Je*He,ze-H-Je*He),mn&&mn(P,Le.tween)}}else P.isActive&&Z!==H&&pn.restart(!0)}).pause()),c&&(ex[c]=P),f=P.trigger=hi(f||g!==!0&&g),Kn=f&&f._gsap&&f._gsap.stRevert,Kn&&(Kn=Kn(P)),g=g===!0?f:hi(g),Ei(l)&&(l={targets:f,className:l}),g&&(v===!1||v===Ki||(v=!v&&g.parentNode&&g.parentNode.style&&Ji(g.parentNode).display==="flex"?!1:lt),P.pin=g,je=G.core.getCache(g),je.spacer?Zn=je.pinState:(k&&(k=hi(k),k&&!k.nodeType&&(k=k.current||k.nativeElement),je.spacerIsNative=!!k,k&&(je.spacerState=hu(k))),je.spacer=vt=k||Pe.createElement("div"),vt.classList.add("pin-spacer"),c&&vt.classList.add("pin-spacer-"+c),je.pinState=Zn=hu(g)),n.force3D!==!1&&G.set(g,{force3D:!0}),P.spacer=vt=je.spacer,Wo=Ji(g),wl=Wo[v+E.os2],Ke=G.getProperty(g),un=G.quickSetter(g,E.a,mt),w0(g,vt,Wo),Ms=hu(g)),I){Xn=Js(I)?V2(I,W2):W2,F=uu("scroller-start",c,A,E,Xn,0),Si=uu("scroller-end",c,A,E,Xn,0,F),Er=F["offset"+E.op.d2];var yl=hi(ws(A,"content")||A);di=this.markerStart=uu("start",c,yl,E,Xn,Er,0,D),Di=this.markerEnd=uu("end",c,yl,E,Xn,Er,0,D),D&&(Uo=G.quickSetter([di,Di],E.a,mt)),!W&&!(Yn.length&&ws(A,"fixedMarkers")===!0)&&(Az(O?be:A),G.set([F,Si],{force3D:!0}),Cd=G.quickSetter(F,E.a,mt),Vo=G.quickSetter(Si,E.a,mt))}if(D){var ie=D.vars.onUpdate,Q=D.vars.onUpdateParams;D.eventCallback("onUpdate",function(){P.update(0,0,1),ie&&ie.apply(D,Q||[])})}if(P.previous=function(){return se[se.indexOf(P)-1]},P.next=function(){return se[se.indexOf(P)+1]},P.revert=function(H,ee){if(!ee)return P.kill(!0);var X=H!==!1||!P.enabled,te=Wt;X!==P.isReverted&&(X&&(fn=Math.max(me(),P.scroll.rec||0),ue=P.progress,Rs=r&&r.progress()),di&&[di,Di,F,Si].forEach(function(bt){return bt.style.display=X?"none":"block"}),X&&(Wt=P,P.update(X)),g&&(!x||!P.isActive)&&(X?Lz(g,vt,Zn):w0(g,vt,Ji(g),ot)),X||P.update(X),Wt=te,P.isReverted=X)},P.refresh=function(H,ee,X,te){if(!((Wt||!P.enabled)&&!ee)){if(g&&H&&an){jt(t,"scrollEnd",o4);return}!ri&&R&&R(P),Wt=P,Le.tween&&!X&&(Le.tween.kill(),Le.tween=0),ce&&ce.pause(),w&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren&&r.getChildren(!0,!0,!1).forEach(function(Ar){return Ar.vars.immediateRender&&Ar.render(0,!0,!0)})),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var bt=U(),he=ne(),Je=D?D.duration():Vn(A,E),Ot=He<=.01||!He,Ye=0,ze=te||0,Se=Js(X)?X.end:n.end,mn=n.endTrigger||f,Oe=Js(X)?X.start:n.start||(n.start===0||!f?0:g?"0 0":"0 100%"),_i=P.pinnedContainer=n.pinnedContainer&&hi(n.pinnedContainer,P),Tn=f&&Math.max(0,se.indexOf(P))||0,Et=Tn,It,$t,Ls,Pd,Bt,ft,En,af,mw,vl,In,bl,Td;for(I&&Js(X)&&(bl=G.getProperty(F,E.p),Td=G.getProperty(Si,E.p));Et-- >0;)ft=se[Et],ft.end||ft.refresh(0,1)||(Wt=P),En=ft.pin,En&&(En===f||En===g||En===_i)&&!ft.isReverted&&(vl||(vl=[]),vl.unshift(ft),ft.revert(!0,!0)),ft!==se[Et]&&(Tn--,Et--);for(Gt(Oe)&&(Oe=Oe(P)),Oe=O2(Oe,"start",P),ge=G2(Oe,f,bt,E,me(),di,F,P,he,M,W,Je,D,P._startClamp&&"_startClamp")||(g?-.001:0),Gt(Se)&&(Se=Se(P)),Ei(Se)&&!Se.indexOf("+=")&&(~Se.indexOf(" ")?Se=(Ei(Oe)?Oe.split(" ")[0]:"")+Se:(Ye=fh(Se.substr(2),bt),Se=Ei(Oe)?Oe:(D?G.utils.mapRange(0,D.duration(),D.scrollTrigger.start,D.scrollTrigger.end,ge):ge)+Ye,mn=f)),Se=O2(Se,"end",P),Qe=Math.max(ge,G2(Se||(mn?"100% 0":Je),mn,bt,E,me()+Ye,Di,Si,P,he,M,W,Je,D,P._endClamp&&"_endClamp"))||-.001,Ye=0,Et=Tn;Et--;)ft=se[Et],En=ft.pin,En&&ft.start-ft._pinPush<=ge&&!D&&ft.end>0&&(It=ft.end-(P._startClamp?Math.max(0,ft.start):ft.start),(En===f&&ft.start-ft._pinPush<ge||En===_i)&&isNaN(Oe)&&(Ye+=It*(1-ft.progress)),En===g&&(ze+=It));if(ge+=Ye,Qe+=Ye,P._startClamp&&(P._startClamp+=Ye),P._endClamp&&!ri&&(P._endClamp=Qe||-.001,Qe=Math.min(Qe,Vn(A,E))),He=Qe-ge||(ge-=.01)&&.001,Ot&&(ue=G.utils.clamp(0,1,G.utils.normalize(ge,Qe,fn))),P._pinPush=ze,di&&Ye&&(It={},It[E.a]="+="+Ye,_i&&(It[E.p]="-="+me()),G.set([di,Di],It)),g&&!(Jg&&P.end>=Vn(A,E)))It=Ji(g),Pd=E===wt,Ls=me(),Hi=parseFloat(Ke(E.a))+ze,!Je&&Qe>1&&(In=(O?Pe.scrollingElement||Ai:A).style,In={style:In,value:In["overflow"+E.a.toUpperCase()]},O&&Ji(be)["overflow"+E.a.toUpperCase()]!=="scroll"&&(In.style["overflow"+E.a.toUpperCase()]="scroll")),w0(g,vt,It),Ms=hu(g),$t=ur(g,!0),af=W&&Ss(A,Pd?oi:wt)(),v?(ot=[v+E.os2,He+ze+mt],ot.t=vt,Et=v===lt?xp(g,E)+He+ze:0,Et&&(ot.push(E.d,Et+mt),vt.style.flexBasis!=="auto"&&(vt.style.flexBasis=Et+mt)),Na(ot),_i&&se.forEach(function(Ar){Ar.pin===_i&&Ar.vars.pinSpacing!==!1&&(Ar._subPinOffset=!0)}),W&&me(fn)):(Et=xp(g,E),Et&&vt.style.flexBasis!=="auto"&&(vt.style.flexBasis=Et+mt)),W&&(Bt={top:$t.top+(Pd?Ls-ge:af)+mt,left:$t.left+(Pd?af:Ls-ge)+mt,boxSizing:"border-box",position:"fixed"},Bt[wo]=Bt["max"+dl]=Math.ceil($t.width)+mt,Bt[yo]=Bt["max"+cw]=Math.ceil($t.height)+mt,Bt[Ki]=Bt[Ki+Ic]=Bt[Ki+Tc]=Bt[Ki+Ac]=Bt[Ki+Ec]="0",Bt[lt]=It[lt],Bt[lt+Ic]=It[lt+Ic],Bt[lt+Tc]=It[lt+Tc],Bt[lt+Ac]=It[lt+Ac],Bt[lt+Ec]=It[lt+Ec],Tr=$z(Zn,Bt,x),ri&&me(0)),r?(mw=r._initted,p0(1),r.render(r.duration(),!0,!0),qn=Ke(E.a)-Hi+He+ze,Qn=Math.abs(He-qn)>1,W&&Qn&&Tr.splice(Tr.length-2,2),r.render(0,!0,!0),mw||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),p0(0)):qn=He,In&&(In.value?In.style["overflow"+E.a.toUpperCase()]=In.value:In.style.removeProperty("overflow-"+E.a));else if(f&&me()&&!D)for($t=f.parentNode;$t&&$t!==be;)$t._pinOffset&&(ge-=$t._pinOffset,Qe-=$t._pinOffset),$t=$t.parentNode;vl&&vl.forEach(function(Ar){return Ar.revert(!1,!0)}),P.start=ge,P.end=Qe,De=Me=ri?fn:me(),!D&&!ri&&(De<fn&&me(fn),P.scroll.rec=0),P.revert(!1,!0),fe=Ut(),pn&&(Z=-1,pn.restart(!0)),Wt=0,r&&z&&(r._initted||Rs)&&r.progress()!==Rs&&r.progress(Rs||0,!0).render(r.time(),!0,!0),(Ot||ue!==P.progress||D||w||r&&!r._initted)&&(r&&!z&&(r._initted||ue||r.vars.immediateRender!==!1)&&r.totalProgress(D&&ge<-.001&&!ue?G.utils.normalize(ge,Qe,0):ue,!0),P.progress=Ot||(De-ge)/He===ue?0:ue),g&&v&&(vt._pinOffset=Math.round(P.progress*qn)),ce&&ce.invalidate(),isNaN(bl)||(bl-=G.getProperty(F,E.p),Td-=G.getProperty(Si,E.p),pu(F,E,bl),pu(di,E,bl-(te||0)),pu(Si,E,Td),pu(Di,E,Td-(te||0))),Ot&&!ri&&P.update(),u&&!ri&&!Pr&&(Pr=!0,u(P),Pr=!1)}},P.getVelocity=function(){return(me()-Me)/(Ut()-Kl)*1e3||0},P.endAnimation=function(){Ol(P.callbackAnimation),r&&(ce?ce.progress(1):r.paused()?z||Ol(r,P.direction<0,1):Ol(r,r.reversed()))},P.labelToScroll=function(H){return r&&r.labels&&(ge||P.refresh()||ge)+r.labels[H]/r.duration()*He||0},P.getTrailing=function(H){var ee=se.indexOf(P),X=P.direction>0?se.slice(0,ee).reverse():se.slice(ee+1);return(Ei(H)?X.filter(function(te){return te.vars.preventOverlaps===H}):X).filter(function(te){return P.direction>0?te.end<=ge:te.start>=Qe})},P.update=function(H,ee,X){if(!(D&&!X&&!H)){var te=ri===!0?fn:P.scroll(),bt=H?0:(te-ge)/He,he=bt<0?0:bt>1?1:bt||0,Je=P.progress,Ot,Ye,ze,Se,mn,Oe,_i,Tn;if(ee&&(Me=De,De=D?me():te,h&&(zs=Ir,Ir=r&&!z?r.totalProgress():he)),S&&g&&!Wt&&!ou&&an&&(!he&&ge<te+(te-Me)/(Ut()-Kl)*S?he=1e-4:he===1&&Qe>te+(te-Me)/(Ut()-Kl)*S&&(he=.9999)),he!==Je&&P.enabled){if(Ot=P.isActive=!!he&&he<1,Ye=!!Je&&Je<1,Oe=Ot!==Ye,mn=Oe||!!he!=!!Je,P.direction=he>Je?1:-1,P.progress=he,mn&&!Wt&&(ze=he&&!Je?0:he===1?1:Je===1?2:3,z&&(Se=!Oe&&B[ze+1]!=="none"&&B[ze+1]||B[ze],Tn=r&&(Se==="complete"||Se==="reset"||Se in r))),C&&(Oe||Tn)&&(Tn||p||!r)&&(Gt(C)?C(P):P.getTrailing(C).forEach(function(Ls){return Ls.endAnimation()})),z||(ce&&!Wt&&!ou?(ce._dp._time-ce._start!==ce._time&&ce.render(ce._dp._time-ce._start),ce.resetTo?ce.resetTo("totalProgress",he,r._tTime/r._tDur):(ce.vars.totalProgress=he,ce.invalidate().restart())):r&&r.totalProgress(he,!!(Wt&&(fe||H)))),g){if(H&&v&&(vt.style[v+E.os2]=wl),!W)un(ec(Hi+qn*he));else if(mn){if(_i=!H&&he>Je&&Qe+1>te&&te+1>=Vn(A,E),x)if(!H&&(Ot||_i)){var Et=ur(g,!0),It=te-ge;X2(g,be,Et.top+(E===wt?It:0)+mt,Et.left+(E===wt?0:It)+mt)}else X2(g,vt);Na(Ot||_i?Tr:Ms),Qn&&he<1&&Ot||un(Hi+(he===1&&!_i?qn:0))}}h&&!Le.tween&&!Wt&&!ou&&pn.restart(!0),l&&(Oe||y&&he&&(he<1||!f0))&&dd(l.targets).forEach(function(Ls){return Ls.classList[Ot||y?"add":"remove"](l.className)}),o&&!z&&!H&&o(P),mn&&!Wt?(z&&(Tn&&(Se==="complete"?r.pause().totalProgress(1):Se==="reset"?r.restart(!0).pause():Se==="restart"?r.restart(!0):r[Se]()),o&&o(P)),(Oe||!f0)&&(d&&Oe&&g0(P,d),V[ze]&&g0(P,V[ze]),y&&(he===1?P.kill(!1,1):V[ze]=0),Oe||(ze=he===1?1:3,V[ze]&&g0(P,V[ze]))),_&&!Ot&&Math.abs(P.getVelocity())>(tc(_)?_:2500)&&(Ol(P.callbackAnimation),ce?ce.progress(1):Ol(r,Se==="reverse"?1:!he,1))):z&&o&&!Wt&&o(P)}if(Vo){var $t=D?te/D.duration()*(D._caScrollDist||0):te;Cd($t+(F._isFlipped?1:0)),Vo($t)}Uo&&Uo(-te/D.duration()*(D._caScrollDist||0))}},P.enable=function(H,ee){P.enabled||(P.enabled=!0,jt(A,"resize",ic),O||jt(A,"scroll",qo),R&&jt(t,"refreshInit",R),H!==!1&&(P.progress=ue=0,De=Me=Z=me()),ee!==!1&&P.refresh())},P.getTween=function(H){return H&&Le?Le.tween:ce},P.setPositions=function(H,ee,X,te){if(D){var bt=D.scrollTrigger,he=D.duration(),Je=bt.end-bt.start;H=bt.start+Je*H/he,ee=bt.start+Je*ee/he}P.refresh(!1,!1,{start:$2(H,X&&!!P._startClamp),end:$2(ee,X&&!!P._endClamp)},te),P.update()},P.adjustPinSpacing=function(H){if(ot&&H){var ee=ot.indexOf(E.d)+1;ot[ee]=parseFloat(ot[ee])+H+mt,ot[1]=parseFloat(ot[1])+H+mt,Na(ot)}},P.disable=function(H,ee){if(P.enabled&&(H!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,ee||ce&&ce.pause(),fn=0,je&&(je.uncache=1),R&&kt(t,"refreshInit",R),pn&&(pn.pause(),Le.tween&&Le.tween.kill()&&(Le.tween=0)),!O)){for(var X=se.length;X--;)if(se[X].scroller===A&&se[X]!==P)return;kt(A,"resize",ic),O||kt(A,"scroll",qo)}},P.kill=function(H,ee){P.disable(H,ee),ce&&!ee&&ce.kill(),c&&delete ex[c];var X=se.indexOf(P);X>=0&&se.splice(X,1),X===ni&&gh>0&&ni--,X=0,se.forEach(function(te){return te.scroller===P.scroller&&(X=1)}),X||ri||(P.scroll.rec=0),r&&(r.scrollTrigger=null,H&&r.revert({kill:!1}),ee||r.kill()),di&&[di,Di,F,Si].forEach(function(te){return te.parentNode&&te.parentNode.removeChild(te)}),Mc===P&&(Mc=0),g&&(je&&(je.uncache=1),X=0,se.forEach(function(te){return te.pin===g&&X++}),X||(je.spacer=0)),n.onKill&&n.onKill(P)},se.push(P),P.enable(!1,!1),Kn&&Kn(P),r&&r.add&&!He){var we=P.update;P.update=function(){P.update=we,ae.cache++,ge||Qe||P.refresh()},G.delayedCall(.01,P.update),He=.01,ge=Qe=0}else P.refresh();g&&Rz()},t.register=function(n){return sa||(G=n||e4(),JS()&&window.document&&t.enable(),sa=Jl),sa},t.defaults=function(n){if(n)for(var r in n)du[r]=n[r];return du},t.disable=function(n,r){Jl=0,se.forEach(function(o){return o[r?"kill":"disable"](n)}),kt(oe,"wheel",qo),kt(Pe,"scroll",qo),clearInterval(su),kt(Pe,"touchcancel",Rn),kt(be,"touchstart",Rn),lu(kt,Pe,"pointerdown,touchstart,mousedown",B2),lu(kt,Pe,"pointerup,touchend,mouseup",N2),mp.kill(),au(kt);for(var s=0;s<ae.length;s+=3)cu(kt,ae[s],ae[s+1]),cu(kt,ae[s],ae[s+2])},t.enable=function(){if(oe=window,Pe=document,Ai=Pe.documentElement,be=Pe.body,G&&(dd=G.utils.toArray,Pc=G.utils.clamp,Kg=G.core.context||Rn,p0=G.core.suppressOverwrites||Rn,sw=oe.history.scrollRestoration||"auto",tx=oe.pageYOffset||0,G.core.globals("ScrollTrigger",t),be)){Jl=1,Ba=document.createElement("div"),Ba.style.height="100vh",Ba.style.position="absolute",c4(),Tz(),rt.register(G),t.isTouch=rt.isTouch,Nr=rt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Qg=rt.isTouch===1,jt(oe,"wheel",qo),rw=[oe,Pe,Ai,be],G.matchMedia?(t.matchMedia=function(d){var u=G.matchMedia(),p;for(p in d)u.add(p,d[p]);return u},G.addEventListener("matchMediaInit",function(){return uw()}),G.addEventListener("matchMediaRevert",function(){return a4()}),G.addEventListener("matchMedia",function(){ao(0,1),Io("matchMedia")}),G.matchMedia().add("(orientation: portrait)",function(){return x0(),x0})):console.warn("Requires GSAP 3.11.0 or later"),x0(),jt(Pe,"scroll",qo);var n=be.hasAttribute("style"),r=be.style,s=r.borderTopStyle,o=G.core.Animation.prototype,l,c;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",l=ur(be),wt.m=Math.round(l.top+wt.sc())||0,oi.m=Math.round(l.left+oi.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(be.setAttribute("style",""),be.removeAttribute("style")),su=setInterval(U2,250),G.delayedCall(.5,function(){return ou=0}),jt(Pe,"touchcancel",Rn),jt(be,"touchstart",Rn),lu(jt,Pe,"pointerdown,touchstart,mousedown",B2),lu(jt,Pe,"pointerup,touchend,mouseup",N2),qg=G.utils.checkPrefix("transform"),xh.push(qg),sa=Ut(),mp=G.delayedCall(.2,ao).pause(),oa=[Pe,"visibilitychange",function(){var d=oe.innerWidth,u=oe.innerHeight;Pe.hidden?(R2=d,L2=u):(R2!==d||L2!==u)&&ic()},Pe,"DOMContentLoaded",ao,oe,"load",ao,oe,"resize",ic],au(jt),se.forEach(function(d){return d.enable(0,1)}),c=0;c<ae.length;c+=3)cu(kt,ae[c],ae[c+1]),cu(kt,ae[c],ae[c+2])}},t.config=function(n){"limitCallbacks"in n&&(f0=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(su)||(su=r)&&setInterval(U2,r),"ignoreMobileResize"in n&&(Qg=t.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(au(kt)||au(jt,n.autoRefreshEvents||"none"),qS=(n.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(n,r){var s=hi(n),o=ae.indexOf(s),l=To(s);~o&&ae.splice(o,l?6:2),r&&(l?Yn.unshift(oe,r,be,r,Ai,r):Yn.unshift(s,r))},t.clearMatchMedia=function(n){se.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},t.isInViewport=function(n,r,s){var o=(Ei(n)?hi(n):n).getBoundingClientRect(),l=o[s?wo:yo]*r||0;return s?o.right-l>0&&o.left+l<oe.innerWidth:o.bottom-l>0&&o.top+l<oe.innerHeight},t.positionInViewport=function(n,r,s){Ei(n)&&(n=hi(n));var o=n.getBoundingClientRect(),l=o[s?wo:yo],c=r==null?l/2:r in wp?wp[r]*l:~r.indexOf("%")?parseFloat(r)*l/100:parseFloat(r)||0;return s?(o.left+c)/oe.innerWidth:(o.top+c)/oe.innerHeight},t.killAll=function(n){if(se.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Eo.killAll||[];Eo={},r.forEach(function(s){return s()})}},t}();le.version="3.13.0";le.saveStyles=function(t){return t?dd(t).forEach(function(e){if(e&&e.style){var i=Pi.indexOf(e);i>=0&&Pi.splice(i,5),Pi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),G.core.getCache(e),Kg())}}):Pi};le.revert=function(t,e){return uw(!t,e)};le.create=function(t,e){return new le(t,e)};le.refresh=function(t){return t?ic(!0):(sa||le.register())&&ao(!0)};le.update=function(t){return++ae.cache&&yr(t===!0?2:0)};le.clearScrollMemory=l4;le.maxScroll=function(t,e){return Vn(t,e?oi:wt)};le.getScrollFunc=function(t,e){return Ss(hi(t),e?oi:wt)};le.getById=function(t){return ex[t]};le.getAll=function(){return se.filter(function(t){return t.vars.id!=="ScrollSmoother"})};le.isScrolling=function(){return!!an};le.snapDirectional=dw;le.addEventListener=function(t,e){var i=Eo[t]||(Eo[t]=[]);~i.indexOf(e)||i.push(e)};le.removeEventListener=function(t,e){var i=Eo[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)};le.batch=function(t,e){var i=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(d,u){var p=[],f=[],g=G.delayedCall(r,function(){u(p,f),p=[],f=[]}).pause();return function(v){p.length||g.restart(!0),p.push(v.trigger),f.push(v),s<=p.length&&g.progress(1)}},l;for(l in e)n[l]=l.substr(0,2)==="on"&&Gt(e[l])&&l!=="onRefreshInit"?o(l,e[l]):e[l];return Gt(s)&&(s=s(),jt(le,"refresh",function(){return s=e.batchMax()})),dd(t).forEach(function(c){var d={};for(l in n)d[l]=n[l];d.trigger=c,i.push(le.create(d))}),i};var q2=function(e,i,n,r){return i>r?e(r):i<0&&e(0),n>r?(r-i)/(n-i):n<0?i/(i-n):1},y0=function t(e,i){i===!0?e.style.removeProperty("touch-action"):e.style.touchAction=i===!0?"auto":i?"pan-"+i+(rt.isTouch?" pinch-zoom":""):"none",e===Ai&&t(be,i)},fu={auto:1,scroll:1},Nz=function(e){var i=e.event,n=e.target,r=e.axis,s=(i.changedTouches?i.changedTouches[0]:i).target,o=s._gsap||G.core.getCache(s),l=Ut(),c;if(!o._isScrollT||l-o._isScrollT>2e3){for(;s&&s!==be&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(fu[(c=Ji(s)).overflowY]||fu[c.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!To(s)&&(fu[(c=Ji(s)).overflowY]||fu[c.overflowX]),o._isScrollT=l}(o._isScroll||r==="x")&&(i.stopPropagation(),i._gsapAllow=!0)},u4=function(e,i,n,r){return rt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:i,onWheel:r=r&&Nz,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&jt(Pe,rt.eventTypes[0],K2,!1,!0)},onDisable:function(){return kt(Pe,rt.eventTypes[0],K2,!0)}})},Vz=/(input|label|select|textarea)/i,Q2,K2=function(e){var i=Vz.test(e.target.tagName);(i||Q2)&&(e._gsapAllow=!0,Q2=i)},Wz=function(e){Js(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var i=e,n=i.normalizeScrollX,r=i.momentum,s=i.allowNestedScroll,o=i.onRelease,l,c,d=hi(e.target)||Ai,u=G.core.globals().ScrollSmoother,p=u&&u.get(),f=Nr&&(e.content&&hi(e.content)||p&&e.content!==!1&&!p.smooth()&&p.content()),g=Ss(d,wt),v=Ss(d,oi),w=1,S=(rt.isTouch&&oe.visualViewport?oe.visualViewport.scale*oe.visualViewport.width:oe.outerWidth)/oe.innerWidth,j=0,b=Gt(r)?function(){return r(l)}:function(){return r||2.8},y,h,x=u4(d,e.type,!0,s),k=function(){return h=!1},D=Rn,_=Rn,C=function(){c=Vn(d,wt),_=Pc(Nr?1:0,c),n&&(D=Pc(0,Vn(d,oi))),y=vo},E=function(){f._gsap.y=ec(parseFloat(f._gsap.y)+g.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",g.offset=g.cacheID=0},z=function(){if(h){requestAnimationFrame(k);var I=ec(l.deltaY/2),M=_(g.v-I);if(f&&M!==g.v+g.offset){g.offset=M-g.v;var P=ec((parseFloat(f&&f._gsap.y)||0)-g.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",g.cacheID=ae.cache,yr()}return!0}g.offset&&E(),h=!0},A,L,O,W,V=function(){C(),A.isActive()&&A.vars.scrollY>c&&(g()>c?A.progress(1)&&g(c):A.resetTo("scrollY",c))};return f&&G.set(f,{y:"+=0"}),e.ignoreCheck=function(B){return Nr&&B.type==="touchmove"&&z()||w>1.05&&B.type!=="touchstart"||l.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){h=!1;var B=w;w=ec((oe.visualViewport&&oe.visualViewport.scale||1)/S),A.pause(),B!==w&&y0(d,w>1.01?!0:n?!1:"x"),L=v(),O=g(),C(),y=vo},e.onRelease=e.onGestureStart=function(B,I){if(g.offset&&E(),!I)W.restart(!0);else{ae.cache++;var M=b(),P,R;n&&(P=v(),R=P+M*.05*-B.velocityX/.227,M*=q2(v,P,R,Vn(d,oi)),A.vars.scrollX=D(R)),P=g(),R=P+M*.05*-B.velocityY/.227,M*=q2(g,P,R,Vn(d,wt)),A.vars.scrollY=_(R),A.invalidate().duration(M).play(.01),(Nr&&A.vars.scrollY>=c||P>=c-1)&&G.to({},{onUpdate:V,duration:M})}o&&o(B)},e.onWheel=function(){A._ts&&A.pause(),Ut()-j>1e3&&(y=0,j=Ut())},e.onChange=function(B,I,M,P,R){if(vo!==y&&C(),I&&n&&v(D(P[2]===I?L+(B.startX-B.x):v()+I-P[1])),M){g.offset&&E();var U=R[2]===M,ne=U?O+B.startY-B.y:g()+M-R[1],Z=_(ne);U&&ne!==Z&&(O+=Z-ne),g(Z)}(M||I)&&yr()},e.onEnable=function(){y0(d,n?!1:"x"),le.addEventListener("refresh",V),jt(oe,"resize",V),g.smooth&&(g.target.style.scrollBehavior="auto",g.smooth=v.smooth=!1),x.enable()},e.onDisable=function(){y0(d,!0),kt(oe,"resize",V),le.removeEventListener("refresh",V),x.kill()},e.lockAxis=e.lockAxis!==!1,l=new rt(e),l.iOS=Nr,Nr&&!g()&&g(1),Nr&&G.ticker.add(Rn),W=l._dc,A=G.to(l,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:d4(g,g(),function(){return A.pause()})},onUpdate:yr,onComplete:W.vars.onComplete}),l};le.sort=function(t){if(Gt(t))return se.sort(t);var e=oe.pageYOffset||0;return le.getAll().forEach(function(i){return i._sortY=i.trigger?e+i.trigger.getBoundingClientRect().top:i.start+oe.innerHeight}),se.sort(t||function(i,n){return(i.vars.refreshPriority||0)*-1e6+(i.vars.containerAnimation?1e6:i._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};le.observe=function(t){return new rt(t)};le.normalizeScroll=function(t){if(typeof t>"u")return ti;if(t===!0&&ti)return ti.enable();if(t===!1){ti&&ti.kill(),ti=t;return}var e=t instanceof rt?t:Wz(t);return ti&&ti.target===e.target&&ti.kill(),To(e.target)&&(ti=e),e};le.core={_getVelocityProp:Zg,_inputObserver:u4,_scrollers:ae,_proxies:Yn,bridge:{ss:function(){an||Io("scrollStart"),an=Ut()},ref:function(){return Wt}}};e4()&&G.registerPlugin(le);/*!
 * SplitText 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */let $l,Qo,nx,Uz=()=>nx||_d.register(window.gsap),J2=typeof Intl<"u"?new Intl.Segmenter:0,yp=t=>typeof t=="string"?yp(document.querySelectorAll(t)):"length"in t?Array.from(t):[t],eb=t=>yp(t).filter(e=>e instanceof HTMLElement),rx=[],v0=function(){},Hz=/\s+/g,tb=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),ib={left:0,top:0,width:0,height:0},nb=(t,e)=>{if(e){let i=new Set(t.join("").match(e)||rx),n=t.length,r,s,o,l;if(i.size)for(;--n>-1;){s=t[n];for(o of i)if(o.startsWith(s)&&o.length>s.length){for(r=0,l=s;o.startsWith(l+=t[n+ ++r])&&l.length<o.length;);if(r&&l.length===o.length){t[n]=o,t.splice(n+1,r);break}}}}return t},rb=t=>window.getComputedStyle(t).display==="inline"&&(t.style.display="inline-block"),Ko=(t,e,i)=>e.insertBefore(typeof t=="string"?document.createTextNode(t):t,i),sx=(t,e,i)=>{let n=e[t+"sClass"]||"",{tag:r="div",aria:s="auto",propIndex:o=!1}=e,l=t==="line"?"block":"inline-block",c=n.indexOf("++")>-1,d=u=>{let p=document.createElement(r),f=i.length+1;return n&&(p.className=n+(c?" "+n+f:"")),o&&p.style.setProperty("--"+t,f+""),s!=="none"&&p.setAttribute("aria-hidden","true"),r!=="span"&&(p.style.position="relative",p.style.display=l),p.textContent=u,i.push(p),p};return c&&(n=n.replace("++","")),d.collection=i,d},Yz=(t,e,i,n)=>{let r=sx("line",i,n),s=window.getComputedStyle(t).textAlign||"left";return(o,l)=>{let c=r("");for(c.style.textAlign=s,t.insertBefore(c,e[o]);o<l;o++)c.appendChild(e[o]);c.normalize()}},h4=(t,e,i,n,r,s,o,l,c,d)=>{var u;let p=Array.from(t.childNodes),f=0,{wordDelimiter:g,reduceWhiteSpace:v=!0,prepareText:w}=e,S=t.getBoundingClientRect(),j=S,b=!v&&window.getComputedStyle(t).whiteSpace.substring(0,3)==="pre",y=0,h=i.collection,x,k,D,_,C,E,z,A,L,O,W,V,B,I,M,P,R,U;for(typeof g=="object"?(D=g.delimiter||g,k=g.replaceWith||""):k=g===""?"":g||" ",x=k!==" ";f<p.length;f++)if(_=p[f],_.nodeType===3){for(M=_.textContent||"",v?M=M.replace(Hz," "):b&&(M=M.replace(/\n/g,k+`
`)),w&&(M=w(M,t)),_.textContent=M,C=k||D?M.split(D||k):M.match(l)||rx,R=C[C.length-1],A=x?R.slice(-1)===" ":!R,R||C.pop(),j=S,z=x?C[0].charAt(0)===" ":!C[0],z&&Ko(" ",t,_),C[0]||C.shift(),nb(C,c),s&&d||(_.textContent=""),L=1;L<=C.length;L++)if(P=C[L-1],!v&&b&&P.charAt(0)===`
`&&((u=_.previousSibling)==null||u.remove(),Ko(document.createElement("br"),t,_),P=P.slice(1)),!v&&P==="")Ko(k,t,_);else if(P===" ")t.insertBefore(document.createTextNode(" "),_);else{if(x&&P.charAt(0)===" "&&Ko(" ",t,_),y&&L===1&&!z&&h.indexOf(y.parentNode)>-1?(E=h[h.length-1],E.appendChild(document.createTextNode(n?"":P))):(E=i(n?"":P),Ko(E,t,_),y&&L===1&&!z&&E.insertBefore(y,E.firstChild)),n)for(W=J2?nb([...J2.segment(P)].map(ne=>ne.segment),c):P.match(l)||rx,U=0;U<W.length;U++)E.appendChild(W[U]===" "?document.createTextNode(" "):n(W[U]));if(s&&d){if(M=_.textContent=M.substring(P.length+1,M.length),O=E.getBoundingClientRect(),O.top>j.top&&O.left<=j.left){for(V=t.cloneNode(),B=t.childNodes[0];B&&B!==E;)I=B,B=B.nextSibling,V.appendChild(I);t.parentNode.insertBefore(V,t),r&&rb(V)}j=O}(L<C.length||A)&&Ko(L>=C.length?" ":x&&P.slice(-1)===" "?" "+k:k,t,_)}t.removeChild(_),y=0}else _.nodeType===1&&(o&&o.indexOf(_)>-1?(h.indexOf(_.previousSibling)>-1&&h[h.length-1].appendChild(_),y=_):(h4(_,e,i,n,r,s,o,l,c,!0),y=0),r&&rb(_))};const p4=class f4{constructor(e,i){this.isSplit=!1,Uz(),this.elements=eb(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=i,this._split=()=>this.isSplit&&this.split(this.vars);let n=[],r,s=()=>{let o=n.length,l;for(;o--;){l=n[o];let c=l.element.offsetWidth;if(c!==l.width){l.width=c,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(r),r=setTimeout(s,200)})},v0(this),this.split(i)}split(e){this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:i="chars,words,lines",aria:n="auto",deepSlice:r=!0,smartWrap:s,onSplit:o,autoSplit:l=!1,specialChars:c,mask:d}=this.vars,u=i.indexOf("lines")>-1,p=i.indexOf("chars")>-1,f=i.indexOf("words")>-1,g=p&&!f&&!u,v=c&&("push"in c?new RegExp("(?:"+c.join("|")+")","gu"):c),w=v?new RegExp(v.source+"|"+tb.source,"gu"):tb,S=!!e.ignore&&eb(e.ignore),{orig:j,animTime:b,obs:y}=this._data,h;return(p||f||u)&&(this.elements.forEach((x,k)=>{j[k]={element:x,html:x.innerHTML,ariaL:x.getAttribute("aria-label"),ariaH:x.getAttribute("aria-hidden")},n==="auto"?x.setAttribute("aria-label",(x.textContent||"").trim()):n==="hidden"&&x.setAttribute("aria-hidden","true");let D=[],_=[],C=[],E=p?sx("char",e,D):null,z=sx("word",e,_),A,L,O,W;if(h4(x,e,z,E,g,r&&(u||g),S,w,v,!1),u){let V=yp(x.childNodes),B=Yz(x,V,e,C),I,M=[],P=0,R=V.map(ne=>ne.nodeType===1?ne.getBoundingClientRect():ib),U=ib;for(A=0;A<V.length;A++)I=V[A],I.nodeType===1&&(I.nodeName==="BR"?(M.push(I),B(P,A+1),P=A+1,U=R[P]):(A&&R[A].top>U.top&&R[A].left<=U.left&&(B(P,A),P=A),U=R[A]));P<A&&B(P,A),M.forEach(ne=>{var Z;return(Z=ne.parentNode)==null?void 0:Z.removeChild(ne)})}if(!f){for(A=0;A<_.length;A++)if(L=_[A],p||!L.nextSibling||L.nextSibling.nodeType!==3)if(s&&!u){for(O=document.createElement("span"),O.style.whiteSpace="nowrap";L.firstChild;)O.appendChild(L.firstChild);L.replaceWith(O)}else L.replaceWith(...L.childNodes);else W=L.nextSibling,W&&W.nodeType===3&&(W.textContent=(L.textContent||"")+(W.textContent||""),L.remove());_.length=0,x.normalize()}this.lines.push(...C),this.words.push(..._),this.chars.push(...D)}),d&&this[d]&&this.masks.push(...this[d].map(x=>{let k=x.cloneNode();return x.replaceWith(k),k.appendChild(x),x.className&&(k.className=x.className.replace(/(\b\w+\b)/g,"$1-mask")),k.style.overflow="clip",k}))),this.isSplit=!0,Qo&&(l?Qo.addEventListener("loadingdone",this._split):Qo.status==="loading"&&console.warn("SplitText called before fonts loaded")),(h=o&&o(this))&&h.totalTime&&(this._data.anim=b?h.totalTime(b):h),u&&l&&this.elements.forEach((x,k)=>{j[k].width=x.offsetWidth,y&&y.observe(x)}),this}revert(){var e,i;let{orig:n,anim:r,obs:s}=this._data;return s&&s.disconnect(),n.forEach(({element:o,html:l,ariaL:c,ariaH:d})=>{o.innerHTML=l,c?o.setAttribute("aria-label",c):o.removeAttribute("aria-label"),d?o.setAttribute("aria-hidden",d):o.removeAttribute("aria-hidden")}),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,Qo==null||Qo.removeEventListener("loadingdone",this._split),r&&(this._data.animTime=r.totalTime(),r.revert()),(i=(e=this.vars).onRevert)==null||i.call(e,this),this}static create(e,i){return new f4(e,i)}static register(e){$l=$l||e||window.gsap,$l&&(yp=$l.utils.toArray,v0=$l.core.context||v0),!nx&&window.innerWidth>0&&(Qo=document.fonts,nx=!0)}};p4.version="3.13.0";let _d=p4;J.registerPlugin(le,_d);const Gz=({text:t="",className:e="",delay:i=100,duration:n=.6,ease:r="power3.out",splitType:s="chars",from:o={opacity:0,y:40},to:l={opacity:1,y:0},threshold:c=.1,rootMargin:d="-100px",textAlign:u="center",onLetterAnimationComplete:p})=>{const f=T.useRef(null),g=T.useRef(!1);return T.useEffect(()=>{const v=f.current;!v||g.current||document.fonts.ready.then(()=>{const w=s==="lines";w&&(v.style.position="relative");const S=new _d(v,{type:s,absolute:w,linesClass:"split-line"});let j=[];switch(s){case"lines":j=S.lines;break;case"words":j=S.words;break;case"words, chars":j=[...S.words,...S.chars];break;default:j=S.chars}j.forEach(_=>{_.style.willChange="transform, opacity"});const b=(1-c)*100,y=/^(-?\d+)px$/.exec(d),h=y?parseInt(y[1],10):0,x=h<0?`-=${Math.abs(h)}px`:`+=${h}px`,k=`top ${b}%${x}`,D=J.timeline({scrollTrigger:{trigger:v,start:k,toggleActions:"play none none none",once:!0},smoothChildTiming:!0,onComplete:()=>{g.current=!0,J.set(j,{...l,clearProps:"willChange",immediateRender:!0}),p==null||p()}});return D.set(j,{...o,immediateRender:!1,force3D:!0}),D.to(j,{...l,duration:n,ease:r,stagger:i/1e3,force3D:!0}),()=>{D.kill(),le.getAll().forEach(_=>_.kill()),J.killTweensOf(j),S.revert()}})},[t,i,n,r,s,o,l,c,d,p]),a.jsx("p",{ref:f,className:`split-parent ${e}`,style:{textAlign:u,overflow:"hidden",display:"inline-block",whiteSpace:"normal",wordWrap:"break-word"},children:t})},Xz=m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0 32px 0;
  gap: 18px;
  
  /* Responsive styles */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    margin: 30px 0 24px 0;
  }
  
  @media (max-width: 480px) {
    gap: 10px;
    margin: 20px 0 16px 0;
  }
`,b0=m.button`
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: ${({$selected:t})=>t?"2px solid #4CAF50":"1px solid rgba(255, 255, 255, 0.2)"};
  border-radius: 16px;
  min-width: 140px;
  padding: 16px 28px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: ${({$selected:t})=>t?"0 4px 12px rgba(76, 175, 80, 0.3), 0 0 0 1px rgba(76, 175, 80, 0.2)":"0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  position: relative;
  z-index: 1;
  letter-spacing: 0.02em;
  
  &:hover, &:focus {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: ${({$selected:t})=>t?"0 6px 16px rgba(76, 175, 80, 0.4), 0 0 0 1px rgba(76, 175, 80, 0.3)":"0 8px 24px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.2)"};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    min-width: 160px;
    padding: 14px 24px;
    font-size: 0.95rem;
    width: 100%;
    max-width: 260px;
  }
  
  @media (max-width: 480px) {
    min-width: 140px;
    padding: 12px 20px;
    font-size: 0.9rem;
    max-width: 220px;
  }
`,Zz=m.h2`
  font-size: 2.8rem;
  color: #ffffff;
  margin-top: 4rem;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.04em;
  font-family: 'Montserrat', 'Arial', sans-serif;
  
  @media (max-width: 900px) {
    font-size: 2rem;
    margin-top: 2.5rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin-top: 1.5rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-top: 1.2rem;
    margin-bottom: 1rem;
  }
`,qz=({onSelect:t,selected:e})=>{const i=document.querySelector("main");return i&&i.scrollTo({top:0,behavior:"smooth"}),a.jsxs("div",{children:[a.jsx(Zz,{children:"Recent Works"}),a.jsxs(Xz,{children:[a.jsx(b0,{$selected:e==="branding",onClick:()=>t("branding"),children:"Branding"}),a.jsx(b0,{$selected:e==="uxui",onClick:()=>t("uxui"),children:"UX-UI"}),a.jsx(b0,{$selected:e==="funproj",onClick:()=>t("funproj"),children:"School Proj"})]})]})},m4="/assets/workhome.04db0779.png",Qz=[{type:"image",src:m4,label:"UX-UI",link:"/work/workday",details:[{label:"Project :",value:"Workday App"},{label:"Description:",value:"Workday is a self - service portal , and Workday mobile app , designed to make it easy for employees to ac..."},{label:"Timeline",value:"4 weeks"},{label:"Year",value:"2024"}]}],Kz=`
.recent-works-title {
  font-size: 2.8rem;
  color: #ffffff;
  margin-top: 4rem;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.04em;
  font-family: 'Montserrat', 'Arial', sans-serif;
}
.recent-works-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 32px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 0;
}
@media (max-width: 900px) {
  .recent-works-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    gap: 24px;
    padding: 24px 0;
  }
  .recent-works-title {
    font-size: 2rem;
    margin-top: 2.5rem;
    margin-bottom: 2rem;
  }
}
@media (max-width: 600px) {
  .recent-works-grid {
    gap: 16px;
    padding: 12px 0;
  }
  .work-item {
    min-width: 0;
    border-radius: 6px;
  }
  .recent-works-title {
    font-size: 1.3rem;
    margin-top: 1.5rem;
    margin-bottom: 1.2rem;
  }
  .overlay-content {
    font-size: 0.72rem;
    padding: 12px 8px;
  }
  .work-label {
    font-size: 0.85rem;
    top: 10px;
    left: 10px;
  }
  .work-info-box {
    font-size: 0.78rem;
    padding: 4px 4px;
    gap: 0.3em;
  }
  .work-info-line {
    font-size: clamp(0.65rem, 3vw, 0.78rem);
    padding: 1.5px 7px;
    border-radius: 4px;
    width: 80px;
    max-width: 80px;
  }
}
.work-item {
  position: relative;
  background: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 200px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease;
}
.work-item:hover {
  box-shadow: 0 12px 60px rgba(0,0,0,0.3);
}
.work-label {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
  font-size: 1rem;
  font-weight: 400;
  color: #222;
  letter-spacing: 0.04em;
  background: transparent;
  pointer-events: none;
}
.work-media-container {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.work-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}
.work-item:hover .work-media {
  transform: scale(1.15);
}
.center-main-text {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 2.5rem;
  transform: translate(-50%, -50%);
  color: #222;
  opacity: 1;
  z-index: 1;
  font-weight: 400;
  pointer-events: none;
  letter-spacing: 0.01em;
}
.work-info-box {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 16px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 8px 12px;
  font-size: 0.75rem;
  z-index: 2;
  pointer-events: auto;
  opacity: 1;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: row;
  gap: 12px;
  color: #ffffff;
  text-align: left;
  align-items: center;
  justify-content: flex-start;
  letter-spacing: 0.01em;
}
@media (max-width: 600px) {
  .work-info-box {
    font-size: 0.7rem;
    padding: 6px 10px;
    gap: 8px;
    left: 12px;
    right: 12px;
    bottom: 12px;
  }
  .work-info-line {
    font-size: 0.7rem;
    gap: 3px;
  }
}
.work-info-line {
  background: none;
  border-radius: 0;
  border: none;
  box-shadow: none;
  padding: 0;
  margin-bottom: 0;
  font-size: 0.75rem;
  font-weight: 400;
  color: #ffffff;
  line-height: 1.2;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}
@media (max-width: 600px) {
  .work-info-line {
    font-size: 0.7rem;
    gap: 3px;
  }
}
.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  z-index: 10;
}
.overlay-content {
  opacity: 0;
  transition: opacity 0.5s 0.25s;
  color: #222;
  font-size: 0.80rem;
  font-weight: 500;
  text-align: left;
  padding: 22px 22px;
  border-radius: 12px;
  background: rgba(255,255,255,0.08);
}
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  margin-top: 1.1em;
  padding: 0.45em 1.1em;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s;
}
.cta-button:hover, .cta-button:focus {
  background: #444;
  color: #fff;
}
.cta-arrow {
  display: inline-block;
  width: 1.1em;
  height: 1.1em;
  vertical-align: middle;
}
.work-item:hover .overlay,
.work-item:focus-within .overlay {
  opacity: 1;
  pointer-events: auto;
}
.work-item:hover .overlay-content,
.work-item:focus-within .overlay-content {
  opacity: 1;
}
.work-item:hover .work-info-box,
.work-item:focus-within .work-info-box {
  display: none;
}
.work-media.workday-fit {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  background: #fff;
  padding: 10%;
  box-sizing: border-box;
  transition: transform 0.3s ease;
}
.work-item:hover .work-media.workday-fit {
  transform: scale(1.15);
}
`,Jz=({setSelectedProject:t})=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},i={hidden:{opacity:0,y:50,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Kz}),a.jsx($.div,{className:"recent-works-grid",variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:Qz.map((n,r)=>a.jsx($.div,{variants:i,children:a.jsx(Gr,{tiltMaxAngleX:20,tiltMaxAngleY:20,scale:1.08,glareEnable:!0,glareMaxOpacity:.4,glareColor:"#ffffff",glarePosition:"all",glareBorderRadius:"8px",children:a.jsxs(en,{to:n.link,className:"work-item",tabIndex:0,children:[a.jsx("div",{className:"work-label",children:n.label}),a.jsx("div",{className:"work-media-container",children:n.type==="image"?a.jsx("img",{src:n.src,alt:n.label,className:"work-media"}):a.jsx("video",{src:n.src,className:"work-media",controls:!1,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),a.jsxs("div",{className:"work-info-box",children:[a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Project:"})," ",n.details[0].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Timeline:"})," ",n.details[2].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Year:"})," ",n.details[3].value]})]})]})})},r))})]})},vp="/assets/funhome.36e209bb.jpg",eF=[{type:"image",src:vp,label:"Fun Projects",details:[{label:"Project :",value:"Fun Projects"},{label:"Timeline",value:"No Idea"},{label:"Year",value:"..."}]}],tF=`
.recent-works-title {
  font-size: 2.8rem;
  color: #ffffff;
  margin-top: 4rem;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.04em;
  font-family: 'Montserrat', 'Arial', sans-serif;
}
.recent-works-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 32px;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 32px 0;
}
@media (max-width: 900px) {
  .recent-works-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    gap: 24px;
    padding: 24px 0;
  }
  .recent-works-title {
    font-size: 2rem;
    margin-top: 2.5rem;
    margin-bottom: 2rem;
  }
}
@media (max-width: 600px) {
  .recent-works-grid {
    gap: 16px;
    padding: 12px 0;
  }
  .work-item {
    min-width: 0;
    border-radius: 6px;
  }
  .recent-works-title {
    font-size: 1.3rem;
    margin-top: 1.5rem;
    margin-bottom: 1.2rem;
  }
  .overlay-content {
    font-size: 0.72rem;
    padding: 12px 8px;
  }
  .work-label {
    font-size: 0.85rem;
    top: 10px;
    left: 10px;
  }
  .work-info-box {
    font-size: 0.78rem;
    padding: 4px 4px;
    gap: 0.3em;
  }
  .work-info-line {
    font-size: clamp(0.65rem, 3vw, 0.78rem);
    padding: 1.5px 7px;
    border-radius: 4px;
  }
}
.work-item {
  position: relative;
  background: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 200px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease;
}
.work-item:hover {
  box-shadow: 0 12px 60px rgba(0,0,0,0.3);
}
.work-label {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 2;
  font-size: 1rem;
  font-weight: 400;
  color: #222;
  letter-spacing: 0.04em;
  background: transparent;
  pointer-events: none;
}
.work-media-container {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.work-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}
.work-item:hover .work-media {
  transform: scale(1.15);
}
.center-main-text {
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 2.5rem;
  transform: translate(-50%, -50%);
  color: #222;
  opacity: 1;
  z-index: 1;
  font-weight: 400;
  pointer-events: none;
  letter-spacing: 0.01em;
}
.work-info-box {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 16px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  padding: 8px 12px;
  font-size: 0.75rem;
  z-index: 2;
  pointer-events: auto;
  opacity: 1;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: row;
  gap: 12px;
  color: #ffffff;
  text-align: left;
  align-items: center;
  justify-content: flex-start;
  letter-spacing: 0.01em;
}
.work-info-line {
  background: none;
  border-radius: 0;
  border: none;
  box-shadow: none;
  padding: 0;
  margin-bottom: 0;
  font-size: 0.75rem;
  font-weight: 400;
  color: #ffffff;
  line-height: 1.2;
  display: flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;
}
@media (max-width: 600px) {
  .work-info-box {
    font-size: 0.7rem;
    padding: 6px 10px;
    gap: 8px;
    left: 12px;
    right: 12px;
    bottom: 12px;
  }
  .work-info-line {
    font-size: 0.7rem;
    gap: 3px;
  }
}
.overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  z-index: 10;
}
.overlay-content {
  opacity: 0;
  transition: opacity 0.5s 0.25s;
  color: #222;
  font-size: 0.80rem;
  font-weight: 500;
  text-align: left;
  padding: 22px 22px;
  border-radius: 12px;
  background: rgba(255,255,255,0.08);
}
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  margin-top: 1.1em;
  padding: 0.45em 1.1em;
  background: #222;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.2s;
}
.cta-button:hover, .cta-button:focus {
  background: #444;
  color: #fff;
}
.cta-arrow {
  display: inline-block;
  width: 1.1em;
  height: 1.1em;
  vertical-align: middle;
}
.work-item:hover .overlay,
.work-item:focus-within .overlay {
  opacity: 1;
  pointer-events: auto;
}
.work-item:hover .overlay-content,
.work-item:focus-within .overlay-content {
  opacity: 1;
}
.work-item:hover .work-info-box,
.work-item:focus-within .work-info-box {
  display: none;
}
.work-media.workday-fit {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  background: #fff;
  padding: 10%;
  box-sizing: border-box;
  transition: transform 0.3s ease;
}
.work-item:hover .work-media.workday-fit {
  transform: scale(1.15);
}
`,iF=({setSelectedProject:t=()=>{}})=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},i={hidden:{opacity:0,y:50,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:tF}),a.jsx($.div,{className:"recent-works-grid",variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:eF.map((n,r)=>a.jsx($.div,{variants:i,children:a.jsx(Gr,{tiltMaxAngleX:20,tiltMaxAngleY:20,scale:1.08,glareEnable:!0,glareMaxOpacity:.4,glareColor:"#ffffff",glarePosition:"all",glareBorderRadius:"8px",children:a.jsxs(en,{to:"/work/fun",className:"work-item",tabIndex:0,children:[a.jsx("div",{className:"work-label",children:n.label}),a.jsx("div",{className:"work-media-container",children:n.type==="image"?a.jsx("img",{src:n.src,alt:n.label,className:"work-media"}):a.jsx("video",{src:new URL("/assets/straw1.d023f398.MP4",self.location).href,className:"work-media",controls:!1,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),a.jsxs("div",{className:"work-info-box",children:[a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Project :"})," ",n.details[0].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Timeline:"})," ",n.details[1].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Year:"})," ",n.details[2].value]})]})]})})},r))})]})},nF=m.footer`
  width: 100vw;
  padding: 2rem 0 1.5rem 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eee;
  margin-top: 2rem;
  
  /* Responsive styles */
  @media (max-width: 768px) {
    padding: 1.5rem 1rem 1rem 1rem;
    margin-top: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0.8rem 0.8rem 0.8rem;
    margin-top: 1rem;
  }
`,rF=m.a`
  color: #222;
  font-size: 1.08rem;
  text-decoration: none;
  font-weight: 400;
  letter-spacing: 0.01em;
  transition: color 0.18s;
  
  &:hover {
    color: #b48a3b;
    text-decoration: underline;
  }
  
  /* Responsive styles */
  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`,sF=m.footer`
  width: 100vw;
  padding: 2rem 0 1.5rem 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eee;
  margin-top: 2rem;
  
  /* Responsive styles */
  @media (max-width: 768px) {
    padding: 1.5rem 1rem 1rem 1rem;
    margin-top: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0.8rem 0.8rem 0.8rem;
    margin-top: 1rem;
  }
`,oF=m.p`
  color: #222;
  font-size: 0.9rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.5;
  text-align: center;
  
  /* Responsive styles */
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`,g4=()=>a.jsx(sF,{children:a.jsx(oF,{children:"© 2025 NOOSHIN SHAHSAVN | Designed & developed by me using React 🤍"})}),$o=()=>a.jsx(nF,{children:a.jsx(rF,{href:"mailto:nooshin-shahsavan.ca@gmail.com",children:"nooshin-shahsavan.ca@gmail.com"})});function mu(...t){return t.filter(Boolean).join(" ")}const aF=m($.div)`
  display: inline-block;
  position: relative;
`,lF=m($.span)`
  display: inline-block;
  white-space: nowrap;
`,hw=T.forwardRef(({texts:t,transition:e={type:"spring",damping:25,stiffness:300},initial:i={y:"100%",opacity:0},animate:n={y:0,opacity:1},exit:r={y:"-120%",opacity:0},animatePresenceMode:s="wait",animatePresenceInitial:o=!1,rotationInterval:l=2e3,staggerDuration:c=0,staggerFrom:d="first",loop:u=!0,auto:p=!0,splitBy:f="characters",onTextChange:g,mainClassName:v,splitLevelClassName:w,elementLevelClassName:S,...j},b)=>{const[y,h]=T.useState(0),[x,k]=T.useState(!1),D=I=>{if(typeof Intl<"u"&&Intl.Segmenter){const M=new Intl.Segmenter("en",{granularity:"grapheme"});return Array.from(M.segment(I),P=>P.segment)}return Array.from(I)},_=T.useMemo(()=>{const I=t[y];if(f==="characters"){const M=I.split(" ");return M.map((P,R)=>({characters:D(P),needsSpace:R!==M.length-1}))}return f==="words"?I.split(" ").map((M,P,R)=>({characters:[M],needsSpace:P!==R.length-1})):f==="lines"?I.split(`
`).map((M,P,R)=>({characters:[M],needsSpace:P!==R.length-1})):I.split(f).map((M,P,R)=>({characters:[M],needsSpace:P!==R.length-1}))},[t,y,f]),C=T.useCallback((I,M)=>{const P=M;if(d==="first")return I*c;if(d==="last")return(P-1-I)*c;if(d==="center"){const R=Math.floor(P/2);return Math.abs(R-I)*c}if(d==="random"){const R=Math.floor(Math.random()*P);return Math.abs(R-I)*c}return Math.abs(d-I)*c},[d,c]),E=T.useCallback(I=>{h(I),g&&g(t[I])},[g,t]),z=T.useCallback(()=>{const I=y===t.length-1?u?0:y:y+1;I!==y&&E(I)},[y,t.length,u,E]),A=T.useCallback(()=>{const I=y===0?u?t.length-1:y:y-1;I!==y&&E(I)},[y,t.length,u,E]),L=T.useCallback(I=>{const M=Math.max(0,Math.min(I,t.length-1));M!==y&&E(M)},[t.length,y,E]),O=T.useCallback(()=>{y!==0&&E(0)},[y,E]);T.useImperativeHandle(b,()=>({next:z,previous:A,jumpTo:L,reset:O}),[z,A,L,O]),T.useEffect(()=>{if(!p)return;const I=setInterval(z,l);return()=>clearInterval(I)},[z,l,p]);const W=()=>{k(!0)},V=()=>{k(!1)},B=()=>{switch(d){case"first":return 1;case"last":return-1;case"center":return 0;default:return 0}};return a.jsx(aF,{children:a.jsxs(lF,{className:mu("text-rotate",v),...j,layout:!0,transition:e,onAnimationStart:W,onAnimationComplete:V,children:[a.jsx("span",{className:"text-rotate-sr-only",children:t[y]}),a.jsx(lA,{mode:s,initial:o,children:a.jsx($.div,{className:mu(f==="lines"?"text-rotate-lines":"text-rotate-word"),layout:!0,"aria-hidden":"true",transition:{duration:.5,ease:[.4,0,.2,1],staggerChildren:c,staggerDirection:B()},children:_.map((I,M,P)=>{const R=P.slice(0,M).reduce((U,ne)=>U+ne.characters.length,0);return a.jsxs("span",{className:mu("text-rotate-word",w),children:[I.characters.map((U,ne)=>a.jsx($.span,{initial:i,animate:n,exit:r,transition:{...e,delay:C(R+ne,P.reduce((Z,fe)=>Z+fe.characters.length,0))},className:mu("text-rotate-element",S),children:U},ne)),I.needsSpace&&a.jsx("span",{className:"text-rotate-space",children:" "})]},M)})},y)})]})})});hw.displayName="RotatingText";const cF=m.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background: #191c24;
  position: relative;
`;m.div`
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  
  @media (max-width: 768px) {
    left: 1rem;
    top: auto;
    bottom: 2rem;
    transform: none;
  }
`;const dF=m.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: #191c24;
  position: relative;
  padding-top: 80px;
`,uF=m.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  z-index: 1;
  pointer-events: none;
  backdrop-filter: ${({$isBlurred:t})=>t?"blur(4px)":"none"};
  transition: backdrop-filter 0.3s ease;
`,hF=m($.div)`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  width: 100%;
  padding: 2rem;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    gap: 0.5rem;
  }
`,pF=m.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  cursor: pointer;
  z-index: 3;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`,fF=m.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  z-index: 3;
`,mF=m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  z-index: 3;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`,gF=m.div`
  position: relative;
  display: inline-block;
  z-index: 3;
`;m($.div)`
  position: fixed;
  top: ${({$y:t})=>t}px;
  left: ${({$x:t})=>t}px;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
  z-index: 9999;
  pointer-events: none;
  background: transparent;
`;const xF=m.div`
  font-weight: 600;
  font-size: clamp(0.8rem, 2vw, 1rem);
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.2;
  position: relative;
  z-index: 3;
  margin-bottom: 0.3em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: 'Inter', sans-serif;
  text-align: left;
  width: 100%;

  /* Responsive styles */
  @media (max-width: 768px) {
    font-size: clamp(0.7rem, 1.8vw, 0.9rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(0.6rem, 1.5vw, 0.8rem);
  }
`,wF=m(hw)`
  font-weight: 900;
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  color: #ffffff;
  line-height: 1.1;
  position: relative;
  z-index: 3;
  cursor: pointer;
  margin-bottom: 0.5em;

  /* Responsive styles */
  @media (max-width: 768px) {
    font-size: clamp(2rem, 6vw, 3.5rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.8rem, 5vw, 3rem);
  }
`,yF=m($.div)`
  position: relative;
  display: inline-block;
  padding: 1.2rem 2.2rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.32);
  transition: all 0.3s ease;
  min-width: 220px;
  text-align: left;
  z-index: 3;
  margin-top: 1.2rem;

  & > * {
    font-size: 2rem !important;
    line-height: 1.2;
    font-weight: 600;
    text-align: center;
    color: #e0e0e0;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.38);
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    min-width: 180px;
    margin-top: 1rem;

    & > * {
      font-size: 1.5rem !important;
    }
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.2rem;
    min-width: 160px;

    & > * {
      font-size: 1.3rem !important;
    }
  }
`;m.section`
  width: 100%;
  min-height: 100vh;
  padding: 6rem 0;
  background: #191c24;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;
`;m.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #191c24;
  position: relative;
  z-index: 5;
  padding: 4rem 0;
`;m.div`
  width: 100%;
  max-width: 1200px;
  height: 400px;
  margin: 0 auto;
  position: relative;
  z-index: 6;
`;m.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 11;
`;m.h2`
  font-size: 2.5rem;
  color: #4CAF50;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  z-index: 12;
`;const vF=m.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #191c24;
  position: relative;
  z-index: 5;
  padding: 4rem 0;
`,bF=()=>{T.useContext(tl);const t=T.useRef(null),e=T.useRef(null),[i,n]=T.useState(!1),[r,s]=T.useState(!1),[o,l]=T.useState({x:0,y:0}),[c,d]=T.useState({x:0,y:0}),[u,p]=T.useState("branding"),f=T.useRef(null),g=["Graphic designer","Brand designer","UX/UI designer"],v=["NOOSHIN SHAHSAVAN!"],w=h=>{l({x:h.clientX,y:h.clientY})},S=h=>{r&&d({x:h.clientX,y:h.clientY})},j=h=>{f.current&&clearTimeout(f.current),s(!0),d({x:h.clientX,y:h.clientY})},b=()=>{f.current=window.setTimeout(()=>s(!1),100)},y=T.useCallback(()=>{if(t.current&&e.current){const h=e.current.getBoundingClientRect(),x=h.left+h.width/2+window.scrollX,k=h.top+h.height/2+window.scrollY;t.current.triggerShockwave(x,k)}},[]);return a.jsxs(cF,{children:[a.jsx(st,{title:"Nooshin Shahsavan | Graphic Designer & UX/UI Designer Portfolio",description:"Professional portfolio of Nooshin Shahsavan, a talented graphic designer, brand designer, and UX/UI designer. Explore creative projects and innovative design solutions.",keywords:"graphic design, brand design, UX/UI design, portfolio, Nooshin Shahsavan, creative designer, visual design",image:"/src/assets/logoweb.png"}),a.jsxs(dF,{onMouseMove:w,children:[a.jsx(mz,{ref:t,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0},dotSize:5,gap:15,baseColor:"#ffffff",activeColor:"#4CAF50",proximity:120,shockRadius:250,shockStrength:5,resistance:750,returnDuration:1.5,maxSpeed:5e3,speedTrigger:100}),a.jsx(uF,{$isBlurred:i}),a.jsxs(hF,{children:[a.jsx(pF,{children:a.jsxs(mF,{children:[a.jsxs(gF,{onMouseEnter:j,onMouseLeave:b,onMouseMove:S,children:[a.jsx(xF,{children:"My name is"}),a.jsx(wF,{texts:v,onTextChange:y})]}),a.jsx(yF,{ref:e,children:a.jsx(hw,{texts:g,onTextChange:y,auto:!0,rotationInterval:3e3,staggerDuration:.1,staggerFrom:"center"})})]})}),a.jsx(fF,{})]})]}),a.jsx(qz,{selected:u,onSelect:p}),a.jsx(Gz,{text:"Recent Projects"}),u==="branding"&&a.jsx(Dz,{}),u==="uxui"&&a.jsx(Jz,{setSelectedProject:p}),u==="funproj"&&a.jsx(iF,{setSelectedProject:p}),a.jsx(vF,{children:a.jsx(Sz,{})}),a.jsx(g4,{})]})};/*!
 * strings: 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var kF=/(?:^\s+|\s+$)/g,jF=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function pw(t){var e=t.nodeType,i="";if(e===1||e===9||e===11){if(typeof t.textContent=="string")return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=pw(t)}else if(e===3||e===4)return t.nodeValue;return i}function zn(t,e,i,n,r){if(t+="",i&&(t=t.trim?t.trim():t.replace(kF,"")),e&&e!=="")return t.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(e);for(var s=[],o=t.length,l=0,c,d;l<o;l++)d=t.charAt(l),(d.charCodeAt(0)>=55296&&d.charCodeAt(0)<=56319||t.charCodeAt(l+1)>=65024&&t.charCodeAt(l+1)<=65039)&&(c=((t.substr(l,12).split(jF)||[])[1]||"").length||2,d=t.substr(l,c),s.emoji=1,l+=c-1),s.push(r?d:d===">"?"&gt;":d==="<"?"&lt;":n&&d===" "&&(t.charAt(l-1)===" "||t.charAt(l+1)===" ")?"&nbsp;":d);return s}/*!
 * ScrambleTextPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yh=function(){function t(i){this.chars=zn(i),this.sets=[],this.length=50;for(var n=0;n<20;n++)this.sets[n]=ob(80,this.chars)}var e=t.prototype;return e.grow=function(n){for(var r=0;r<20;r++)this.sets[r]+=ob(n-this.length,this.chars);this.length=n},t}(),lo,x4,w4=function(){return lo||typeof window<"u"&&(lo=window.gsap)&&lo.registerPlugin&&lo},DF=1,sb=/\s+/g,ob=function(e,i){for(var n=i.length,r="";--e>-1;)r+=i[~~(Math.random()*n)];return r},ox="ABCDEFGHIJKLMNOPQRSTUVWXYZ",ab=ox.toLowerCase(),SF={upperCase:new yh(ox),lowerCase:new yh(ab),upperAndLowerCase:new yh(ox+ab)},lb=function(){x4=lo=w4()},of={version:"3.13.0",name:"scrambleText",register:function(e,i,n){lo=e,lb()},init:function(e,i,n,r,s){if(x4||lb(),this.prop="innerHTML"in e?"innerHTML":"textContent"in e?"textContent":0,!!this.prop){this.target=e,typeof i!="object"&&(i={text:i});var o=i.text||i.value||"",l=i.trim!==!1,c=this,d,u,p,f;return c.delimiter=d=i.delimiter||"",c.original=zn(pw(e).replace(sb," ").split("&nbsp;").join(""),d,l),(o==="{original}"||o===!0||o==null)&&(o=c.original.join(d)),c.text=zn((o||"").replace(sb," "),d,l),c.hasClass=!!(i.newClass||i.oldClass),c.newClass=i.newClass,c.oldClass=i.oldClass,f=d==="",c.textHasEmoji=f&&!!c.text.emoji,c.charsHaveEmoji=!!i.chars&&!!zn(i.chars).emoji,c.length=f?c.original.length:c.original.join(d).length,c.lengthDif=(f?c.text.length:c.text.join(d).length)-c.length,c.fillChar=i.fillChar||i.chars&&~i.chars.indexOf(" ")?"&nbsp;":"",c.charSet=p=SF[i.chars||"upperCase"]||new yh(i.chars),c.speed=.05/(i.speed||1),c.prevScrambleTime=0,c.setIndex=Math.random()*20|0,u=c.length+Math.max(c.lengthDif,0),u>p.length&&p.grow(u),c.chars=p.sets[c.setIndex],c.revealDelay=i.revealDelay||0,c.tweenLength=i.tweenLength!==!1,c.tween=n,c.rightToLeft=!!i.rightToLeft,c._props.push("scrambleText","text"),DF}},render:function(e,i){var n=i.target,r=i.prop,s=i.text,o=i.delimiter,l=i.tween,c=i.prevScrambleTime,d=i.revealDelay,u=i.setIndex,p=i.chars,f=i.charSet,g=i.length,v=i.textHasEmoji,w=i.charsHaveEmoji,S=i.lengthDif,j=i.tweenLength,b=i.oldClass,y=i.newClass,h=i.rightToLeft,x=i.fillChar,k=i.speed,D=i.original,_=i.hasClass,C=s.length,E=l._time,z=E-c,A,L,O,W,V,B,I,M,P,R,U;d&&(l._from&&(E=l._dur-E),e=E===0?0:E<d?1e-6:E===l._dur?1:l._ease((E-d)/(l._dur-d))),e<0?e=0:e>1&&(e=1),h&&(e=1-e),A=~~(e*C+.5),e?((z>k||z<-k)&&(i.setIndex=u=(u+(Math.random()*19|0))%20,i.chars=f.sets[u],i.prevScrambleTime+=z),W=p):W=D.join(o),U=l._from?e:1-e,R=g+(j?l._from?U*U*U:1-U*U*U:1)*S,h?e===1&&(l._from||l.data==="isFromStart")?(O="",W=D.join(o)):(I=s.slice(A).join(o),w?O=zn(W).slice(0,R-(v?zn(I):I).length+.5|0).join(""):O=W.substr(0,R-(v?zn(I):I).length+.5|0),W=I):(O=s.slice(0,A).join(o),L=(v?zn(O):O).length,w?W=zn(W).slice(L,R+.5|0).join(""):W=W.substr(L,R-L+.5|0)),_?(M=h?b:y,P=h?y:b,V=M&&A!==0,B=P&&A!==C,I=(V?"<span class='"+M+"'>":"")+O+(V?"</span>":"")+(B?"<span class='"+P+"'>":"")+o+W+(B?"</span>":"")):I=O+o+W,n[r]=x==="&nbsp;"&&~I.indexOf("  ")?I.split("  ").join("&nbsp;&nbsp;"):I}};of.emojiSafeSplit=zn;of.getText=pw;w4()&&lo.registerPlugin(of);J.registerPlugin(_d,of);const _F=({radius:t=100,duration:e=1.2,speed:i=.5,scrambleChars:n=".:",className:r="",style:s={},children:o})=>{const l=T.useRef(null),c=T.useRef([]);return T.useEffect(()=>{var d,u;l.current&&((u=(d=document.fonts)==null?void 0:d.ready)==null||u.then(()=>{if(!l.current)return;const p=_d.create(l.current.querySelector("p"),{type:"chars",charsClass:"char"});c.current=p.chars,c.current.forEach(v=>{J.set(v,{display:"inline-block",attr:{"data-content":v.innerHTML}})});const f=v=>{c.current.forEach(w=>{const{left:S,top:j,width:b,height:y}=w.getBoundingClientRect(),h=v.clientX-(S+b/2),x=v.clientY-(j+y/2),k=Math.hypot(h,x);k<t&&J.to(w,{overwrite:!0,duration:e*(1-k/t),scrambleText:{text:w.dataset.content||"",chars:n,speed:i},ease:"none"})})},g=l.current;if(g)return g.addEventListener("pointermove",f),()=>{g&&(g.removeEventListener("pointermove",f),p.revert())}}))},[t,e,i,n]),a.jsx("div",{ref:l,className:`text-block ${r}`,style:s,children:a.jsx("p",{children:o})})};function qt(t,e,i){return(1-i)*t+i*e}function Qt(t,e){let i=0,n=0;return"touches"in t&&t.touches.length>0?(i=t.touches[0].clientX,n=t.touches[0].clientY):"clientX"in t&&(i=t.clientX,n=t.clientY),{x:i-e.left,y:n-e.top}}function Is(t,e){const i=t.x-e.x,n=t.y-e.y;return Math.hypot(i,n)}class As{constructor(e){this.DOM={el:null,inner:null},this.defaultStyle={scale:1,x:0,y:0,opacity:0},this.rect=null,this.DOM.el=e,this.DOM.inner=this.DOM.el.querySelector(".content__img-inner"),this.getRect(),this.initEvents()}initEvents(){this.resize=()=>{J.set(this.DOM.el,this.defaultStyle),this.getRect()},window.addEventListener("resize",this.resize)}getRect(){this.rect=this.DOM.el.getBoundingClientRect()}}class CF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new As(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0};const i=r=>{const s=this.container.getBoundingClientRect();this.mousePos=Qt(r,s)};this.container.addEventListener("mousemove",i),this.container.addEventListener("touchmove",i);const n=r=>{const s=this.container.getBoundingClientRect();this.mousePos=Qt(r,s),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),this.container.removeEventListener("mousemove",n),this.container.removeEventListener("touchmove",n)};this.container.addEventListener("mousemove",n),this.container.addEventListener("touchmove",n)}render(){const e=Is(this.mousePos,this.lastMousePos);this.cacheMousePos.x=qt(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=qt(this.cacheMousePos.y,this.mousePos.y,.1),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var i,n,r,s;++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const e=this.images[this.imgPosition];J.killTweensOf(e.DOM.el),J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(e.DOM.el,{opacity:1,scale:1,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((i=e.rect)==null?void 0:i.width)??0)/2,y:this.cacheMousePos.y-(((n=e.rect)==null?void 0:n.height)??0)/2},{duration:.4,ease:"power1",x:this.mousePos.x-(((r=e.rect)==null?void 0:r.width)??0)/2,y:this.mousePos.y-(((s=e.rect)==null?void 0:s.height)??0)/2},0).to(e.DOM.el,{duration:.4,ease:"power3",opacity:0,scale:.2},.4)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}class PF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new As(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0};const i=r=>{const s=e.getBoundingClientRect();this.mousePos=Qt(r,s)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const s=e.getBoundingClientRect();this.mousePos=Qt(r,s),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){const e=Is(this.mousePos,this.lastMousePos);this.cacheMousePos.x=qt(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=qt(this.cacheMousePos.y,this.mousePos.y,.1),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var i,n,r,s;++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const e=this.images[this.imgPosition];J.killTweensOf(e.DOM.el),J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(e.DOM.el,{opacity:1,scale:0,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((i=e.rect)==null?void 0:i.width)??0)/2,y:this.cacheMousePos.y-(((n=e.rect)==null?void 0:n.height)??0)/2},{duration:.4,ease:"power1",scale:1,x:this.mousePos.x-(((r=e.rect)==null?void 0:r.width)??0)/2,y:this.mousePos.y-(((s=e.rect)==null?void 0:s.height)??0)/2},0).to(e.DOM.el,{duration:.4,ease:"power2",opacity:0,scale:.2},.45)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}class TF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new As(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0};const i=r=>{const s=e.getBoundingClientRect();this.mousePos=Qt(r,s)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const s=e.getBoundingClientRect();this.mousePos=Qt(r,s),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){const e=Is(this.mousePos,this.lastMousePos);this.cacheMousePos.x=qt(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=qt(this.cacheMousePos.y,this.mousePos.y,.1),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var i,n,r,s;++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const e=this.images[this.imgPosition];J.killTweensOf(e.DOM.el),J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(e.DOM.el,{opacity:1,scale:0,zIndex:this.zIndexVal,xPercent:0,yPercent:0,x:this.cacheMousePos.x-(((i=e.rect)==null?void 0:i.width)??0)/2,y:this.cacheMousePos.y-(((n=e.rect)==null?void 0:n.height)??0)/2},{duration:.4,ease:"power1",scale:1,x:this.mousePos.x-(((r=e.rect)==null?void 0:r.width)??0)/2,y:this.mousePos.y-(((s=e.rect)==null?void 0:s.height)??0)/2},0).to(e.DOM.el,{duration:.6,ease:"power2",opacity:0,scale:.2,xPercent:()=>J.utils.random(-30,30),yPercent:-200},.6)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}class EF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new As(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0};const i=r=>{const s=e.getBoundingClientRect();this.mousePos=Qt(r,s)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const s=e.getBoundingClientRect();this.mousePos=Qt(r,s),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){Is(this.mousePos,this.lastMousePos)>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.cacheMousePos.x=qt(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=qt(this.cacheMousePos.y,this.mousePos.y,.1),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var s,o,l,c;++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const e=this.images[this.imgPosition];J.killTweensOf(e.DOM.el);let i=this.mousePos.x-this.cacheMousePos.x,n=this.mousePos.y-this.cacheMousePos.y,r=Math.sqrt(i*i+n*n);r!==0&&(i/=r,n/=r),i*=r/100,n*=r/100,J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(e.DOM.el,{opacity:1,scale:0,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((s=e.rect)==null?void 0:s.width)??0)/2,y:this.cacheMousePos.y-(((o=e.rect)==null?void 0:o.height)??0)/2},{duration:.4,ease:"power1",scale:1,x:this.mousePos.x-(((l=e.rect)==null?void 0:l.width)??0)/2,y:this.mousePos.y-(((c=e.rect)==null?void 0:c.height)??0)/2},0).fromTo(e.DOM.inner,{scale:2,filter:`brightness(${Math.max(400*r/100,100)}%) contrast(${Math.max(400*r/100,100)}%)`},{duration:.4,ease:"power1",scale:1,filter:"brightness(100%) contrast(100%)"},0).to(e.DOM.el,{duration:.4,ease:"power3",opacity:0},.4).to(e.DOM.el,{duration:1.5,ease:"power4",x:`+=${i*110}`,y:`+=${n*110}`},.05)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}class IF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new As(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0},this.lastAngle=0;const i=r=>{const s=e.getBoundingClientRect();this.mousePos=Qt(r,s)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const s=e.getBoundingClientRect();this.mousePos=Qt(r,s),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){Is(this.mousePos,this.lastMousePos)>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.cacheMousePos.x=qt(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=qt(this.cacheMousePos.y,this.mousePos.y,.1),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var c,d,u,p;let e=this.mousePos.x-this.cacheMousePos.x,i=this.mousePos.y-this.cacheMousePos.y,n=Math.atan2(i,e)*(180/Math.PI);n<0&&(n+=360),n>90&&n<=270&&(n+=180);const r=n>=this.lastAngle;this.lastAngle=n;let s=r?n-10:n+10;const o=Math.sqrt(e*e+i*i);o!==0&&(e/=o,i/=o),e*=o/150,i*=o/150,++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const l=this.images[this.imgPosition];J.killTweensOf(l.DOM.el),J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(l.DOM.el,{opacity:1,filter:"brightness(80%)",scale:.1,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((c=l.rect)==null?void 0:c.width)??0)/2,y:this.cacheMousePos.y-(((d=l.rect)==null?void 0:d.height)??0)/2,rotation:s},{duration:1,ease:"power2",scale:1,filter:"brightness(100%)",x:this.mousePos.x-(((u=l.rect)==null?void 0:u.width)??0)/2+e*70,y:this.mousePos.y-(((p=l.rect)==null?void 0:p.height)??0)/2+i*70,rotation:this.lastAngle},0).to(l.DOM.el,{duration:.4,ease:"expo",opacity:0},.5).to(l.DOM.el,{duration:1.5,ease:"power4",x:`+=${e*120}`,y:`+=${i*120}`},.05)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}class AF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new As(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0};const i=r=>{const s=e.getBoundingClientRect();this.mousePos=Qt(r,s)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const s=e.getBoundingClientRect();this.mousePos=Qt(r,s),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){const e=Is(this.mousePos,this.lastMousePos);this.cacheMousePos.x=qt(this.cacheMousePos.x,this.mousePos.x,.3),this.cacheMousePos.y=qt(this.cacheMousePos.y,this.mousePos.y,.3),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}mapSpeedToSize(e,i,n){return i+(n-i)*Math.min(e/200,1)}mapSpeedToBrightness(e,i,n){return i+(n-i)*Math.min(e/70,1)}mapSpeedToBlur(e,i,n){return i+(n-i)*Math.min(e/90,1)}mapSpeedToGrayscale(e,i,n){return i+(n-i)*Math.min(e/90,1)}showNextImage(){var d,u,p,f;const e=this.mousePos.x-this.cacheMousePos.x,i=this.mousePos.y-this.cacheMousePos.y,n=Math.sqrt(e*e+i*i);++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const r=this.images[this.imgPosition],s=this.mapSpeedToSize(n,.3,2),o=this.mapSpeedToBrightness(n,0,1.3),l=this.mapSpeedToBlur(n,20,0),c=this.mapSpeedToGrayscale(n,600,0);J.killTweensOf(r.DOM.el),J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(r.DOM.el,{opacity:1,scale:0,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((d=r.rect)==null?void 0:d.width)??0)/2,y:this.cacheMousePos.y-(((u=r.rect)==null?void 0:u.height)??0)/2},{duration:.8,ease:"power3",scale:s,filter:`grayscale(${c*100}%) brightness(${o*100}%) blur(${l}px)`,x:this.mousePos.x-(((p=r.rect)==null?void 0:p.width)??0)/2,y:this.mousePos.y-(((f=r.rect)==null?void 0:f.height)??0)/2},0).fromTo(r.DOM.inner,{scale:2},{duration:.8,ease:"power3",scale:1},0).to(r.DOM.el,{duration:.4,ease:"power3.in",opacity:0,scale:.2},.45)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}function MF(t,e,i){const n=Math.abs(e)%i.length;return t-n>=0?t-n:i.length-(n-t)}class zF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new As(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0},this.visibleImagesCount=0,this.visibleImagesTotal=9,this.visibleImagesTotal=Math.min(this.visibleImagesTotal,this.imagesTotal-1);const i=r=>{const s=e.getBoundingClientRect();this.mousePos=Qt(r,s)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const s=e.getBoundingClientRect();this.mousePos=Qt(r,s),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){const e=Is(this.mousePos,this.lastMousePos);this.cacheMousePos.x=qt(this.cacheMousePos.x,this.mousePos.x,.3),this.cacheMousePos.y=qt(this.cacheMousePos.y,this.mousePos.y,.3),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var n,r,s,o;++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const e=this.images[this.imgPosition];++this.visibleImagesCount,J.killTweensOf(e.DOM.el);const i=J.utils.random(.5,1.6);if(J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(e.DOM.el,{scale:i-Math.max(J.utils.random(.2,.6),0),rotationZ:J.utils.random(-3,3),opacity:1,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((n=e.rect)==null?void 0:n.width)??0)/2,y:this.cacheMousePos.y-(((r=e.rect)==null?void 0:r.height)??0)/2},{duration:.4,ease:"power3",scale:i,rotationZ:J.utils.random(-3,3),x:this.mousePos.x-(((s=e.rect)==null?void 0:s.width)??0)/2,y:this.mousePos.y-(((o=e.rect)==null?void 0:o.height)??0)/2},0),this.visibleImagesCount>=this.visibleImagesTotal){const l=MF(this.imgPosition,this.visibleImagesTotal,this.images),c=this.images[l];J.to(c.DOM.el,{duration:.4,ease:"power4",opacity:0,scale:1.3,onComplete:()=>{this.activeImagesCount===0&&(this.isIdle=!0)}})}}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--}}class FF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new As(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0},this.rotation={x:0,y:0},this.cachedRotation={x:0,y:0},this.zValue=0,this.cachedZValue=0;const i=r=>{const s=e.getBoundingClientRect();this.mousePos=Qt(r,s)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const s=e.getBoundingClientRect();this.mousePos=Qt(r,s),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){const e=Is(this.mousePos,this.lastMousePos);this.cacheMousePos.x=qt(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=qt(this.cacheMousePos.y,this.mousePos.y,.1),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var f,g,v,w;const e=this.container.getBoundingClientRect(),i=e.width/2,n=e.height/2,r=this.mousePos.x-i,s=this.mousePos.y-n;this.rotation.x=-(s/n)*30,this.rotation.y=r/i*30,this.cachedRotation={...this.rotation};const o=Math.sqrt(r*r+s*s),l=Math.sqrt(i*i+n*n),c=o/l;this.zValue=c*1200-600,this.cachedZValue=this.zValue;const u=.2+(this.zValue+600)/1200*2.3;++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const p=this.images[this.imgPosition];J.killTweensOf(p.DOM.el),J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).set(this.DOM.el,{perspective:1e3},0).fromTo(p.DOM.el,{opacity:1,z:0,scale:1+this.cachedZValue/1e3,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((f=p.rect)==null?void 0:f.width)??0)/2,y:this.cacheMousePos.y-(((g=p.rect)==null?void 0:g.height)??0)/2,rotationX:this.cachedRotation.x,rotationY:this.cachedRotation.y,filter:`brightness(${u})`},{duration:1,ease:"expo",scale:1+this.zValue/1e3,x:this.mousePos.x-(((v=p.rect)==null?void 0:v.width)??0)/2,y:this.mousePos.y-(((w=p.rect)==null?void 0:w.height)??0)/2,rotationX:this.rotation.x,rotationY:this.rotation.y},0).to(p.DOM.el,{duration:.4,ease:"power2",opacity:0,z:-800},.3)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}const cb={1:CF,2:PF,3:TF,4:EF,5:IF,6:AF,7:zF,8:FF};function RF({items:t=[],variant:e=1}){const i=q.useRef(null);return q.useEffect(()=>{if(!i.current)return;const n=cb[e]||cb[1];new n(i.current)},[e,t]),a.jsx("div",{className:"content",ref:i,children:t.map((n,r)=>a.jsx("div",{className:"content__img",children:a.jsx("div",{className:"content__img-inner",style:{backgroundImage:`url(${n})`}})},r))})}const LF="/assets/man-8.dfac0a8a.JPG",OF="/assets/after.17bba519.png",$F="/assets/indesign.b58223e6.png",BF="/assets/illustrator.ba50f230.png",NF="/assets/photoshop.d6232244.png",VF="/assets/pre.272b49ca.png",WF="/assets/figma.0a1384c5.png",UF="/assets/react.63bbbe78.png",HF="/assets/html.f61f5ecc.png",YF="/assets/css.fd98993d.png",GF="/assets/excel.0cfcc5e8.png",XF="/assets/word.ff1a3fc2.png",ZF="/assets/power.6e31dae5.png",er=[{src:OF,alt:"After Effects"},{src:$F,alt:"InDesign"},{src:BF,alt:"Illustrator"},{src:NF,alt:"Photoshop"},{src:VF,alt:"Premiere"},{src:WF,alt:"Figma"},{src:UF,alt:"React"},{src:HF,alt:"HTML"},{src:YF,alt:"CSS"},{src:GF,alt:"Excel"},{src:XF,alt:"Word"},{src:ZF,alt:"PowerPoint"}],db=[0,1,2,3,4,5],ub=[10,9,11],hb=[7,8,6],qF=240,QF=160,KF=80;function k0(t,e=0){return Array(t).fill(0).map((i,n)=>360/t*n+e)}const JF=()=>{const t=k0(db.length,-90),e=k0(ub.length,0),i=k0(hb.length,0);return a.jsxs("div",{className:"skill-bubbles-outer",children:[a.jsx("h2",{className:"skills-title",children:"My Skills"}),a.jsx("div",{className:"orbit orbit-outer"}),a.jsx("div",{className:"orbit orbit-middle"}),a.jsx("div",{className:"orbit orbit-inner"}),db.map((n,r)=>a.jsx("div",{className:"orbit-parent orbit-parent-outer",style:{"--orbit-radius":`${qF}px`,"--orbit-rotate":`${t[r]}deg`,"--orbit-dur":"38s",zIndex:3},children:a.jsx("div",{className:"bubble",children:a.jsx("img",{src:er[n].src,alt:er[n].alt,className:"bubble-img",draggable:!1})})},er[n].src)),ub.map((n,r)=>a.jsx("div",{className:"orbit-parent orbit-parent-middle",style:{"--orbit-radius":`${QF}px`,"--orbit-rotate":`${e[r]}deg`,"--orbit-dur":"48s",zIndex:3},children:a.jsx("div",{className:"bubble",children:a.jsx("img",{src:er[n].src,alt:er[n].alt,className:"bubble-img",draggable:!1})})},er[n].src)),hb.map((n,r)=>a.jsx("div",{className:"orbit-parent orbit-parent-inner",style:{"--orbit-radius":`${KF}px`,"--orbit-rotate":`${i[r]}deg`,"--orbit-dur":"60s",zIndex:3},children:a.jsx("div",{className:"bubble",children:a.jsx("img",{src:er[n].src,alt:er[n].alt,className:"bubble-img",draggable:!1})})},er[n].src)),a.jsx("style",{children:`
.skill-bubbles-outer {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 900px;
  overflow: hidden;
  overflow-x: hidden;
  background: #191c24;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10%;
  z-index: 1;
}
@media (max-width: 900px) {
  .skill-bubbles-outer {
    height: 80vh;
    min-height: 600px;
  }
}
@media (max-width: 600px) {
  .skill-bubbles-outer {
    height: 70vh;
    min-height: 500px;
  }
}
.skills-title {
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
  color: #ffffff;
  font-size: 3rem;
  letter-spacing: 0.08em;
  z-index: 10;
  font-family: 'Montserrat', 'Arial', sans-serif;
  font-weight: 700;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.8);
  pointer-events: none;
  margin-bottom: 2rem;
}
@media (max-width: 900px) {
  .skills-title {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    top: 10%;
  }
}
@media (max-width: 600px) {
  .skills-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    top: 12%;
  }
}
.orbit {
  position: absolute;
  left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.3);
  opacity: 0.9;
  background: none;
  box-sizing: border-box;
}
.orbit-outer {
  width: 480px; height: 480px;
  border-width: 2.4px;
  max-width: 80vw;
  max-height: 80vw;
}
.orbit-middle {
  width: 320px; height: 320px;
  border-width: 1.8px;
  max-width: 60vw;
  max-height: 60vw;
}
.orbit-inner {
  width: 160px; height: 160px;
  border-width: 1.2px;
  max-width: 40vw;
  max-height: 40vw;
}
@media (max-width: 900px) {
  .orbit-outer { width: 300px; height: 300px; }
  .orbit-middle { width: 200px; height: 200px; }
  .orbit-inner { width: 100px; height: 100px; }
}
@media (max-width: 600px) {
  .orbit-outer { width: 160px; height: 160px; }
  .orbit-middle { width: 100px; height: 100px; }
  .orbit-inner { width: 50px; height: 50px; }
}
.orbit-parent {
  position: absolute;
  left: 50%; top: 50%;
  width: 0; height: 0;
  /* Animate orbit */
  transform: translate(-50%, -50%) rotate(var(--orbit-rotate, 0deg));
  /* Animate: rotate around center */
  animation: orbit-rotate-parent var(--orbit-dur, 60s) linear infinite;
  transform-origin: center center;
  z-index: 2;
}
.orbit-parent-outer { animation-direction: normal;}
.orbit-parent-middle { animation-direction: reverse;}
.orbit-parent-inner { animation-direction: normal;}
@keyframes orbit-rotate-parent {
  100% { transform: translate(-50%, -50%) rotate(360deg);}
}
/* Place icon at edge of orbit */
.bubble {
  position: absolute;
  left: 0; top: 0;
  width: 80px; height: 80px;
  border-radius: 50%;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
  display: flex; align-items: center; justify-content: center;
  background: rgba(40, 40, 40, 0.9);
  /* Move to orbit radius */
  transform: translateX(var(--orbit-radius, 0px));
  /* Bubble float effect */
  animation: bubble-float 3.8s ease-in-out infinite alternate;
  transition: box-shadow 0.25s, background 0.3s;
  cursor: pointer;
  will-change: transform, box-shadow, background;
  z-index: 3;
}
@media (max-width: 900px) {
  .bubble { width: 48px; height: 48px; }
}
@media (max-width: 600px) {
  .bubble { width: 28px; height: 28px; }
}
.bubble-img {
  width: 70%;
  height: 70%;
  object-fit: contain;
  pointer-events: none;
}
@keyframes bubble-float {
  0% { scale: 1; }
  30% { scale: 1.08; }
  60% { scale: 0.96;}
  100% { scale: 1;}
}
.bubble:hover {
  box-shadow: 0 16px 48px 0 rgba(255, 255, 255, 0.2), 0 2px 16px 0 rgba(255, 255, 255, 0.1);
  background: linear-gradient(135deg,rgb(54, 230, 236) 0%,rgb(69, 158, 160) 100%);
  transition: background 0.6s, box-shadow 0.3s;
}
      `})]})},eR=yd`
  from { 
    transform: translate3d(0, 0, 0);
  }
  to { 
    transform: translate3d(0, 200px, 0);
  }
`,tR=m.div`
  width: 180%;
  height: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: transparent;
  margin: 0 auto;
  transform: scale(0.6);
  transform-origin: center center;
`,iR=m.div`
  animation: ${eR} 0.5s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(.5,0.05,1,.5);
  animation-iteration-count: infinite;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,nR=m.svg`
  width: 100%;
  height: auto;
  max-height: 100%;
`,rR=()=>a.jsx(tR,{children:a.jsx(iR,{children:a.jsxs(nR,{version:"1.1",viewBox:"0 0 833 637",children:[a.jsx("style",{type:"text/css",children:`
              .st0{fill:#1ABC9C;}
              .st1{fill:#16A085;}
              .st2{fill:none;stroke:#000000;stroke-width:6;stroke-miterlimit:10;}
              .st3{fill:none;stroke:#000000;stroke-width:6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
              .st4{display:none;}
              .st5{display:inline;fill:#FFFFFF;}
              .st6{fill:#E2AF13;}
              .st7{fill:#F1C40F;}
            `}),a.jsxs("g",{id:"left-cactus",children:[a.jsxs("g",{id:"left-body_1_",children:[a.jsx("path",{className:"st0",d:"M305.5,459.5c0,0,13-42,13-66s-27-37-44-37s-44,13-44,37s13,66,13,66H305.5z"}),a.jsx("path",{className:"st1",d:"M286,360c0,0,15,10,20,25s-12,74-12,74h11c0,0,19-57.7,12-76.3C310,364,286,360,286,360z"}),a.jsx("path",{className:"st2",d:"M305.5,459.5c0,0,13-42,13-66s-27-37-44-37s-44,13-44,37s13,66,13,66H305.5z"}),a.jsx("line",{className:"st3",x1:"275",y1:"356",x2:"275",y2:"347"}),a.jsx("line",{className:"st3",x1:"312",y1:"374",x2:"319",y2:"368"}),a.jsx("line",{className:"st3",x1:"319",y1:"402",x2:"329",y2:"402"}),a.jsx("line",{className:"st3",x1:"311",y1:"440",x2:"319",y2:"440"}),a.jsx("line",{className:"st3",x1:"237",y1:"374",x2:"230",y2:"368"}),a.jsx("line",{className:"st3",x1:"230",y1:"402",x2:"220",y2:"402"}),a.jsx("line",{className:"st3",x1:"238",y1:"440",x2:"230",y2:"440"}),a.jsxs("g",{id:"left-eyes",children:[a.jsx("circle",{cx:"256",cy:"408",r:"4"}),a.jsx("circle",{cx:"296",cy:"408",r:"4"})]}),a.jsx("circle",{id:"left-mouth",cx:"275",cy:"438",r:"7"})]}),a.jsxs("g",{id:"left-pot_1_",children:[a.jsx("g",{className:"st4",children:a.jsx("polygon",{className:"st5",points:"234.7,497 245,537 305,537 316.3,497"})}),a.jsx("polygon",{className:"st6",points:"295,497 286,534 307,534 317,497"}),a.jsx("polygon",{className:"st7",points:"314,505 236,505 234,497 315.5,497"}),a.jsx("polygon",{className:"st6",points:"294.5,500.1 293.1,505 314,505 316,497"}),a.jsx("g",{children:a.jsx("path",{d:"M314.1,497l-9.6,34h-57.9l-9.6-34H314.1 M322,491h-93l13,46h67L322,491L322,491z"})}),a.jsx("path",{className:"st7",d:`M322.3,497h-93c-2.1,0-3.7-1.7-3.7-3.7v-32c0-2.1,1.7-3.7,3.7-3.7h93c2.1,0,3.7,1.7,3.7,3.7v32
                C326,495.3,324.3,497,322.3,497z`}),a.jsx("path",{className:"st6",d:"M322.3,497h-27.8v-39.5h27.8c2.1,0,3.7,1.7,3.7,3.7v32C326,495.3,324.3,497,322.3,497z"}),a.jsx("path",{className:"st2",d:`M322.3,497h-93c-2.1,0-3.7-1.7-3.7-3.7v-32c0-2.1,1.7-3.7,3.7-3.7h93c2.1,0,3.7,1.7,3.7,3.7v32
                C326,495.3,324.3,497,322.3,497z`})]})]})]})})}),sR=m.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background: #191c24;
  color: #ffffff;
  position: relative;
  z-index: 1;
`,oR=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 500px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`,aR=m($.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`,lR=m.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 1rem 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 4;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,Bl=m.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-weight: 400;
  position: relative;
  z-index: 4;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,cR=m($.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  padding: 2rem;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    min-height: 300px;
    padding: 1rem;
  }
`,dR=m.div`
  width: 250%;
  height: 100%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: transparent;
  margin: 0 auto;
  transform: scale(2.5);
  transform-origin: center center;
  z-index: 4;
`,uR=()=>a.jsx(sR,{children:a.jsxs(oR,{children:[a.jsxs(aR,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:[a.jsx(lR,{children:"Why a Cactus? 🌵"}),a.jsx(Bl,{children:"You might be wondering why my logo is a cactus!"}),a.jsx(Bl,{children:"Well, I'm not a cactus 😄 — but I chose the shape of a cactus for my logo because I truly see parts of myself in it."}),a.jsx(Bl,{children:"I'm someone who keeps going and stays strong no matter the circumstances. I'm patient and resilient."}),a.jsx(Bl,{children:'I always try to adapt to my surroundings and stay "green" — full of life and growth.'}),a.jsx(Bl,{children:"That's exactly why I chose the cactus as my personal symbol 🌵✨"})]}),a.jsx(cR,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut",delay:.2},children:a.jsx(dR,{children:a.jsx(rR,{})})})]})}),hR=m.div`
  position: fixed;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;

  @media (max-width: 1024px) {
    left: 0;
    right: 0;
    top: auto;
    bottom: 0;
    width: 100vw;
    transform: none;
    display: flex;
    justify-content: center;
    background: none;
    pointer-events: auto;
  }
`,pR=m.div`
  background: transparent;
  border-radius: 14px;
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 48px;
  gap: 10px;

  @media (max-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-width: unset;
    padding: 10px 0 18px 0;
    gap: 18px;
    background: rgba(25,28,36,0.98);
    border-radius: 0;
  }
`,fR=m.a`
  position: relative;
  background: ${({$hovered:t})=>t?"rgba(255, 255, 255, 0.95)":"rgba(255, 255, 255, 0.1)"};
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: ${({$hovered:t})=>t?"#000000":"#ffffff"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;
  cursor: pointer;
  font-size: 1.45rem;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: ${({$hovered:t})=>t?"0 8px 32px rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)":"0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)"};

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    margin: 0 0.5rem;
    width: 44px;
    height: 44px;
    font-size: 1.25rem;
  }
`,mR=m.div`
  display: ${({$visible:t})=>t?"block":"none"};
  position: absolute;
  left: 55px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  padding: 10px 18px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0.96;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`,gR=[{icon:a.jsx(JD,{}),label:"Email Contact",link:"https://mail.google.com/mail/?view=cm&to=nooshin.shahsavan.ca@gmail.com&su=Contact%20from%20my%20website",title:"Email Contact"},{icon:a.jsx(t5,{}),label:"LinkedIn",link:"https://linkedin.com/in/nooshin-shahsavan",title:"LinkedIn"},{icon:a.jsx(e5,{}),label:"Instagram",link:"https://instagram.com/its.nooshin_/",title:"Instagram"}],xR=()=>{const[t,e]=T.useState(null);return a.jsx(hR,{children:a.jsx(pR,{children:gR.map((i,n)=>a.jsxs(fR,{href:i.link,title:i.title,target:"_blank",rel:"noopener noreferrer",$hovered:t===n,onMouseEnter:()=>e(n),onMouseLeave:()=>e(null),children:[i.icon,a.jsx(mR,{$visible:t===n,children:i.label})]},i.label))})})},wR=m($.button)`
  position: relative;
  background: ${({$isPlaying:t})=>t?"rgba(255, 255, 255, 0.95)":"rgba(255, 255, 255, 0.1)"};
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: ${({$isPlaying:t})=>t?"#000000":"#ffffff"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;
  cursor: pointer;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: ${({$isPlaying:t})=>t?"0 8px 32px rgba(255, 255, 255, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)":"0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.1)"};
  margin-bottom: 1rem;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
  }
`,yR=m.div`
  font-size: 1.45rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${t=>t.$isPlaying&&`
    animation: pulse 1s ease-in-out infinite;
  `}

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
`,vR=({text:t,title:e="About Me"})=>{const[i,n]=T.useState(!1),[r,s]=T.useState(!1),[o,l]=T.useState(null),c=T.useRef(null);T.useEffect(()=>{if("speechSynthesis"in window){s(!0);const u=()=>{const p=window.speechSynthesis.getVoices(),f=p.find(w=>w.name.includes("Microsoft Zira - English (United States)")),g=p.find(w=>w.name.includes("Zira")),v=p.find(w=>w.name.includes("female")||w.name.includes("Female")||w.name.includes("Samantha")||w.name.includes("Victoria")||w.name.includes("Karen")||w.name.includes("Tessa")||w.name.includes("Alice"));f?l(f):g?l(g):v?l(v):p.length>0&&l(p[0])};u(),window.speechSynthesis.onvoiceschanged=u}},[]),T.useEffect(()=>()=>{c.current&&window.speechSynthesis.cancel()},[]);const d=()=>{if(r)if(i)window.speechSynthesis.cancel(),n(!1);else{const u=new SpeechSynthesisUtterance(t);u.rate=1,u.pitch=1,u.volume=1,o&&(u.voice=o),u.onstart=()=>{n(!0)},u.onend=()=>{n(!1)},u.onerror=()=>{n(!1)},c.current=u,window.speechSynthesis.speak(u)}};return a.jsx(wR,{$isPlaying:i,onClick:d,disabled:!r,whileHover:{scale:1.05},whileTap:{scale:.95},title:i?"Stop audio":"Play audio",children:a.jsx(yR,{$isPlaying:i,children:i?"❚❚":"▶"})})},bR="/assets/man-1.7e49cf66.jpg",kR="/assets/man-2.b67702f5.jpg",jR="/assets/man-3.c8b0d5a8.jpg",DR="/assets/man-5.2ad51805.jpg",SR="/assets/man-6.6d44b2d6.jpg",_R="/assets/man-7.8e334f50.jpg",CR=Cr`
  html, body {
    overflow-x: hidden !important;
    margin: 0;
    padding: 0;
    background: #191c24;
  }
`,PR=m.div`
  width: 100%;
  min-height: 100vh;
  background: #191c24;
  position: relative;
  z-index: 0;
  box-sizing: border-box;
  overflow-x: hidden;
`,pb=m.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: #191c24;
  z-index: 1;
`,TR=m.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: #191c24;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    height: 70vh;
    min-height: 400px;
    padding: 0 8px;
  }
`,ER=m.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 2rem;
  text-align: center;
  z-index: 2;
  position: relative;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
  }
`,IR=m.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-size: 1.5rem;
  opacity: 0.5;
  z-index: 1;
  pointer-events: none;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,AR=m.div`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 550px 1fr;
  gap: 64px;
  position: relative;
  align-items: start;
  padding: 32px 0;
  box-sizing: border-box;
  color: #ffffff;
  font-family: Montserrat, sans-serif;
  line-height: 25.6px;
  opacity: 1;
  z-index: 2;

  @media (max-width: 1200px) {
    width: 95%;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 16px 0;
  }
`,MR=m.div`
  position: sticky;
  top: 80px;
  width: 100%;
  max-width: 500px;
  height: 700px;
  overflow: hidden;
  opacity: 1;
  visibility: visible;
  grid-column: 2;
  grid-row: 1;
  z-index: 3;

  @media (max-width: 1200px) {
    max-width: 100%;
    height: 600px;
    grid-column: 2;
    grid-row: 1;
    position: relative;
    top: 0;
  }
  @media (max-width: 900px) {
    width: 100%;
    height: 400px;
    grid-column: 1;
    grid-row: 2;
    position: relative;
    top: 0;
  }
  @media (max-width: 480px) {
    height: 220px;
  }
`,zR=m.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  opacity: 1;
  visibility: visible;
  z-index: 3;
`,FR=m($.div)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  z-index: 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.6s ease, filter 0.6s ease;
  }
  &:hover img {
    transform: scale(1.05);
    filter: brightness(1.1);
  }
`,RR=m.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  z-index: 3;

  @media (max-width: 900px) {
    grid-column: 1;
    grid-row: 1;
    padding: 1rem 0;
  }
  @media (max-width: 480px) {
    padding: 0.5rem 0;
  }
`,LR=m($.div)`
  max-width: 600px;
  z-index: 4;

  h2 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 2rem;
    color: #ffffff;
    z-index: 5;

    @media (max-width: 768px) {
      font-size: 2.2rem;
      margin-bottom: 1rem;
    }
  }
  h3 {
    font-size: 2.2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    margin-top: 2.5rem;
    color: #ffffff;
    z-index: 5;

    @media (max-width: 768px) {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      margin-top: 2rem;
    }
  }
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #ffffff;
    opacity: 0.9;
    z-index: 5;
    margin-bottom: 1.5rem;
  }
`,OR=()=>{const{scrollYProgress:t}=RA();zl(t,[.1,.2],[0,1]),zl(t,[.1,.2],[50,0]),zl(t,[.15,.25],[0,1]),zl(t,[.15,.25],[50,0]),zl(t,[.15,.25],[5,0]);const e=[{title:"Who I am",content:"Hey! my name is Nooshin. I'm a Graphic and UI/UX Designer with a strong background in visual communication and branding. My journey began with studying graphic design in high school, followed by a degree in Visual Communication and Art Research in my home country. After moving to Canada, I continued to expand my skills by training at BCIT, with a focus on usability and front-end development tools. I strive to combine creativity with functionality—designing user-centered experiences that are not only visually engaging but also fast-paced, organized, and intuitive."},{title:"What I've Done",content:"I've worked with trade companies like G_Art Brand and freelanced for small businesses such as S.B.S and VEEN. My projects have covered everything from brand identity and packaging to social campaigns and digital content. I also taught graphic design software for 10 years. These experiences taught me how to adapt designs to real world constraints, communicate clearly across different formats, and balance creativity with purpose."},{title:"How I Work",content:"My design process starts with understanding the client's mission, values, target audience, and any visual preferences. I then organize tasks in Trello to plan the project efficiently. Using research and insights, I develop a mind map in Miro or FigJam to shape the creative direction. I build a consistent visual identity by choosing colors based on color psychology, selecting typography, and designing a logo that reflects the brand's personality. Finally, I create mockups using Photoshop, Illustrator, InDesign, and After Effects, present design options to the client, and refine them based on feedback for the final delivery."},{title:"Why I Design",content:"I design to solve problems and tell stories—visually and meaningfully. Design lets me combine creativity with strategy to create experiences that not only look good but also connect with people and serve a purpose. Whether it's building a brand, improving a user's journey, or crafting visual content, I enjoy turning ideas into organized, impactful visuals that make communication clearer and more engaging."}],i=e.map(r=>`${r.title}. ${r.content}`).join(" "),n=[bR,kR,jR,DR,SR,_R];return a.jsxs(PR,{children:[a.jsx(st,{title:"About Nooshin Shahsavan | Creative Designer & Developer",description:"Learn more about Nooshin Shahsavan, a passionate graphic designer and UX/UI designer with expertise in brand design, creative solutions, and innovative design thinking.",keywords:"about Nooshin Shahsavan, graphic designer, UX/UI designer, brand designer, creative portfolio, design skills",image:"/src/assets/about/man-8.jpg"}),a.jsx(CR,{}),a.jsx(xR,{}),a.jsx(pb,{style:{background:"#191c24",display:"flex",justifyContent:"center",alignItems:"center"},children:a.jsxs(AR,{children:[a.jsx(MR,{children:a.jsx(zR,{children:a.jsx(FR,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:a.jsx("img",{src:LF,alt:"About me image"})})})}),a.jsx(RR,{children:a.jsxs(LR,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut",delay:.2},children:[a.jsx(vR,{text:i,title:"About Me"}),e.map((r,s)=>a.jsxs("div",{children:[s===0?a.jsx("h2",{children:r.title}):a.jsx("h3",{children:r.title}),a.jsx(_F,{radius:100,duration:1.2,speed:.5,scrambleChars:".:",children:a.jsx("p",{children:r.content})})]},s))]})})]})}),a.jsx(JF,{}),a.jsx(uR,{}),a.jsx(pb,{children:a.jsxs(TR,{children:[a.jsx(ER,{children:"My interests and I"}),a.jsx(IR,{children:"Drag the mouse to see me 🥰"}),a.jsx(RF,{items:n,variant:1})]})}),a.jsx(g4,{})]})},$R=yd`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`,BR=m.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`,NR=m.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
`,VR=m.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 -1px #fff;
`,y4=m(en)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  font-weight: 600;
  color: #fff;
  font-size: 4vh;

  &:hover {
    color: #060606;
  }

  &:focus:not(:focus-visible) {
    color: #fff;
  }
`,WR=m.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: #fff;
  transform: translate3d(0, 101%, 0);
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  ${y4}:hover + & {
    transform: translate3d(0, 0%, 0);
  }
`,UR=m.div`
  height: 100%;
  width: 200%;
  display: flex;
  transform: translateX(0);
`,HR=m.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  width: 200%;
  will-change: transform;
  animation: ${$R} 15s linear infinite;
`,YR=m.span`
  color: #060606;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 4vh;
  line-height: 1.2;
  padding: 1vh 1vw 0;
`,GR=m.div`
  width: 200px;
  height: 7vh;
  margin: 2em 2vw;
  padding: 1em 0;
  border-radius: 50px;
  background-image: url(${t=>t.imageUrl});
  background-size: cover;
  background-position: 50% 50%;
`;function XR({link:t,text:e,image:i}){const n=q.useRef(null),r=q.useRef(null),s=q.useRef(null),o={duration:.6,ease:"expo"},l=(f,g,v,w)=>{const S=c(f,g,v/2,0),j=c(f,g,v/2,w);return S<j?"top":"bottom"},c=(f,g,v,w)=>{const S=f-v,j=g-w;return S*S+j*j},d=f=>{if(!n.current||!r.current||!s.current)return;const g=n.current.getBoundingClientRect(),v=f.clientX-g.left,w=f.clientY-g.top,S=l(v,w,g.width,g.height);J.timeline({defaults:o}).set(r.current,{y:S==="top"?"-101%":"101%"},0).set(s.current,{y:S==="top"?"101%":"-101%"},0).to([r.current,s.current],{y:"0%"},0)},u=f=>{if(!n.current||!r.current||!s.current)return;const g=n.current.getBoundingClientRect(),v=f.clientX-g.left,w=f.clientY-g.top,S=l(v,w,g.width,g.height);J.timeline({defaults:o}).to(r.current,{y:S==="top"?"-101%":"101%"},0).to(s.current,{y:S==="top"?"101%":"-101%"},0)},p=Array.from({length:4}).map((f,g)=>a.jsxs(q.Fragment,{children:[a.jsx(YR,{children:e}),a.jsx(GR,{imageUrl:i})]},g));return a.jsxs(VR,{ref:n,children:[a.jsx(y4,{to:t,onMouseEnter:d,onMouseLeave:u,children:e}),a.jsx(WR,{ref:r,children:a.jsx(UR,{ref:s,children:a.jsx(HR,{"aria-hidden":"true",children:p})})})]})}function ZR({items:t=[]}){return a.jsx(BR,{children:a.jsx(NR,{children:t.map((e,i)=>a.jsx(XR,{...e},i))})})}const Bo=()=>{const t=()=>{const e=document.querySelector("#sbs-overview, #overview, #veen-first, #deli-first, #zar-first");e?e.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})};return a.jsx("button",{onClick:t,style:{position:"fixed",bottom:"24px",right:"24px",width:"48px",height:"48px",backgroundColor:"rgba(255, 255, 255, 0.9)",borderRadius:"50%",cursor:"pointer",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",color:"#333",backdropFilter:"blur(10px)",boxShadow:"0 2px 8px rgba(0,0,0,0.1)",transition:"all 0.2s ease",border:"1px solid rgba(0, 0, 0, 0.1)"},"aria-label":"Scroll to top",onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-2px)",e.currentTarget.style.boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.1)"},children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M12 4L12 20M12 4L6 10M12 4L18 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})},qR="/assets/work1.f00d3214.png",QR="/assets/work3.4049715c.png",KR="/assets/work6.bb17f127.png",JR="/assets/work4.64f58ae6.png",e7=m.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #060606;
  position: relative;
  padding: 0;
`,t7=m.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  text-align: center;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;m.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: ${({theme:t})=>t.text};
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;m.p`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  color: ${({theme:t})=>t.text};
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;m.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;m($.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;m($(en))`
  background: ${({theme:t})=>t.cardBackground};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: ${({theme:t})=>t.text};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;m.div`
  width: 100%;
  height: 200px;
  background: ${({theme:t})=>t.accent1};
  position: relative;
  overflow: hidden;
`;m.div`
  padding: 1.5rem;

  h3 {
    color: ${({theme:t})=>t.accent2};
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

  p {
    color: ${({theme:t})=>t.text};
    font-size: 1rem;
    line-height: 1.6;
  }
`;m($.div)`
  width: 100%;
  height: 400px;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  position: relative;
  background: transparent;
  overflow: visible;
  transform: scale(0.8);
  transform-origin: center center;

  @media (max-width: 768px) {
    transform: scale(0.6);
  }
`;const i7=()=>{const t=[{link:"/work/sbs",text:"SBS Project",image:qR},{link:"/work/veen",text:"Veen Project",image:QR},{link:"/work/delicato",text:"Delicato Project",image:KR},{link:"/work/zar",text:"Zar Project",image:JR},{link:"/work/workday",text:"workday-UX/UI",image:m4},{link:"/work/project6",text:"UX-UI-2",image:"https://picsum.photos/600/400?random=6"},{link:"/work/fun",text:"School Projects",image:"funproject"}];return a.jsxs(a.Fragment,{children:[a.jsx(st,{title:"Work Portfolio | Nooshin Shahsavan - Creative Projects",description:"Explore Nooshin Shahsavan's creative work portfolio featuring graphic design, brand design, UX/UI projects, and innovative design solutions.",keywords:"work portfolio, graphic design projects, brand design, UX/UI design, creative projects, Nooshin Shahsavan",image:"/src/assets/home/workhome.png"}),a.jsx(i5,{}),a.jsx(e7,{children:a.jsxs(t7,{children:[a.jsx(ZR,{items:t}),a.jsx(Bo,{})]})})]})},n7=m.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`,r7=m($.div)`
  background: ${({theme:t})=>t.cardBackground};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,s7=m($.a)`
  display: inline-block;
  background: ${({theme:t})=>t.accent1};
  color: ${({theme:t})=>t.background};
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`,o7=m.div`
  color: var(--text);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`,a7=()=>a.jsxs(n7,{children:[a.jsx(st,{title:"Resume | Nooshin Shahsavan - Professional Experience",description:"View Nooshin Shahsavan's professional resume and experience in graphic design, brand design, and UX/UI design. Download CV and view qualifications.",keywords:"resume, CV, Nooshin Shahsavan, graphic designer, professional experience, qualifications, skills",image:"/src/assets/logoweb.png"}),a.jsxs(r7,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[a.jsx($.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},style:{color:"var(--accent1)",fontSize:"2.5rem",marginBottom:"2rem"},children:"Resume"}),a.jsx(o7,{children:a.jsxs($.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[a.jsx("h3",{style:{color:"var(--accent1)",marginBottom:"0.5rem",fontSize:"2rem"},children:"Nooshin Shahsavan"}),a.jsxs("p",{style:{marginBottom:"1rem",color:"var(--text)",fontSize:"1rem"},children:[a.jsx("strong",{children:"Graphic Designer – Creative | Detail Oriented | Marketing-social media"}),a.jsx("br",{}),"Vancouver, BC | 604.500.5515 | Nooshin.shahsavan.ca@.com"]}),a.jsx("h4",{style:{color:"var(--accent1)",marginBottom:"0.5rem",marginTop:"2rem"},children:"PROFILE SUMMARY"}),a.jsx("p",{style:{marginBottom:"1.5rem",lineHeight:"1.6"},children:"Creative and detail-oriented Graphic Designer with over 3 years of experience producing high-quality print and digital assets. Skilled in layout production, file preparation, proofing, and managing multi-version (zoning) marketing materials to ensure accuracy and brand consistency. Proficient in Adobe Creative Suite (InDesign, Illustrator, Photoshop, Acrobat) and Figma, with a strong eye for typography and visual consistency. Experienced collaborating with cross-functional teams—including marketing, photography, merchandising, and external vendors—to deliver final print- and digital-ready files on time."}),a.jsx("h4",{style:{color:"var(--accent1)",marginBottom:"0.5rem"},children:"SKILLS"}),a.jsxs("ul",{style:{marginBottom:"1.5rem",lineHeight:"1.6"},children:[a.jsx("li",{children:"Adobe InDesign, Illustrator, Photoshop, Acrobat"}),a.jsx("li",{children:"Print Production & File Preparation"}),a.jsx("li",{children:"Layout Design & Typography"}),a.jsx("li",{children:"Proofing & Versioning (Zoning)"}),a.jsx("li",{children:"Digital Media & Branding"}),a.jsx("li",{children:"Motion Graphics (Adobe After Effects)"}),a.jsx("li",{children:"Time Management & Multitasking"}),a.jsx("li",{children:"Collaboration & Communication"}),a.jsx("li",{children:"Attention to Detail & Accuracy"})]}),a.jsx("h4",{style:{color:"var(--accent1)",marginBottom:"0.5rem"},children:"RELEVANT WORK EXPERIENCE"}),a.jsxs("div",{style:{marginBottom:"1.5rem"},children:[a.jsxs("p",{style:{marginBottom:"0.5rem"},children:[a.jsx("strong",{children:"Freelance Graphic Designer"})," | Self-employed | Apr 2023 - Present"]}),a.jsxs("ul",{style:{marginLeft:"1rem",lineHeight:"1.6"},children:[a.jsx("li",{children:"Produced digital and print-ready layouts for marketing materials, including social media ads, banners, and branded assets."}),a.jsx("li",{children:"Designed infographics, motion graphics (Adobe After Effects), and promotional visuals, contributing to a 50% increase in engagement for clients."}),a.jsx("li",{children:"Ensured accuracy and visual consistency across multiple versions and formats of deliverables."})]})]}),a.jsxs("div",{style:{marginBottom:"1.5rem"},children:[a.jsxs("p",{style:{marginBottom:"0.5rem"},children:[a.jsx("strong",{children:"Graphic Designer"})," | GART brand | Apr 2018 – Jun 2022"]}),a.jsxs("ul",{style:{marginLeft:"1rem",lineHeight:"1.6"},children:[a.jsx("li",{children:"Designed brochures, catalogs, and promotional print materials aligned with brand guidelines using Adobe InDesign, Illustrator, and Photoshop."}),a.jsx("li",{children:"Managed layout production and final file preparation for international exhibitions and digital marketing campaigns."}),a.jsx("li",{children:"Served as a final checkpoint for creative outputs, proofing marketing materials and verifying accuracy of zoning (multi-version) documents."}),a.jsx("li",{children:"Liaised closely with marketing, photography, merchandising teams, and external vendors to produce print- and digital-ready files on time."})]})]}),a.jsxs("div",{style:{marginBottom:"1.5rem"},children:[a.jsxs("p",{style:{marginBottom:"0.5rem"},children:[a.jsx("strong",{children:"Computer Graphic Teacher"})," | Parvin Etesami Art School | Sep 2012 – Jun 2022"]}),a.jsxs("ul",{style:{marginLeft:"1rem",lineHeight:"1.6"},children:[a.jsx("li",{children:"Instructed students on Adobe Photoshop, Illustrator, After Effects, and Figma with emphasis on practical design and production skills."}),a.jsx("li",{children:"Developed lesson plans, provided individual mentorship, and assessed student projects to support creative growth."})]})]}),a.jsx("h4",{style:{color:"var(--accent1)",marginBottom:"0.5rem"},children:"EDUCATION"}),a.jsxs("ul",{style:{marginBottom:"1.5rem",lineHeight:"1.6"},children:[a.jsxs("li",{children:[a.jsx("strong",{children:"New Media Design Diploma"})," | BCIT, Downtown, BC | May 2025"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Master's degree in art research"})," | Azad University, Tehran, Iran | Feb 2014"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Bachelor's degree in visual communication"})," | Kamalolmolk, Noshahr, Iran | Feb 2011"]})]})]})}),a.jsx(s7,{href:"/resume.pdf",download:!0,whileHover:{scale:1.05},whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:"Download Full Resume (PDF)"})]})]}),l7="/assets/pinki.89ab7c2e.mp4",c7=m.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,d7=m.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`,u7=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`,h7=m.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 900px) {
    width: 350px;
    max-width: 95vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    margin-bottom: 1.2rem;
  }
`,p7=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,f7=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.2rem;
  @media (max-width: 900px) {
    gap: 1.2rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }
`,gu=m.div`
  min-width: 120px;
  text-align: center;
`,xu=m.div`
  font-size: 0.92rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 0.2em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,wu=m.div`
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
`,m7=()=>a.jsxs(c7,{children:[a.jsx(d7,{children:"S.B.S —  Overview"}),a.jsx(u7,{children:"For this project, I developed a complete visual identity system for S.B.S (Set by Sei) a carefree clothing brand based in Vancouver. The brand aims to provide affordable fashion that reflects Gen Z values: expressive, relaxed, fun, and effortlessly wearable."}),a.jsx(h7,{children:a.jsx(p7,{src:l7,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"S.B.S project video"})}),a.jsxs(f7,{children:[a.jsxs(gu,{children:[a.jsx(xu,{children:"Role"}),a.jsx(wu,{children:"Brand Designer"})]}),a.jsxs(gu,{children:[a.jsx(xu,{children:"Tools"}),a.jsx(wu,{children:"Illustrator, After Effects, Photoshop"})]}),a.jsxs(gu,{children:[a.jsx(xu,{children:"Timeline"}),a.jsx(wu,{children:"3 weeks"})]}),a.jsxs(gu,{children:[a.jsx(xu,{children:"Year"}),a.jsx(wu,{children:"2023"})]})]})]}),g7=m.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0 16px 0;
  @media (max-width: 900px) {
    padding: 16px 0 8px 0;
  }
  @media (max-width: 600px) {
    padding: 8px 0 4px 0;
  }
`,x7=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`,w7=m.div`
  font-size: 1.08rem;
  color: #fabfb7;
  font-weight: 400;
  margin-top: 1.2rem;
  text-align: center;
  letter-spacing: 0.01em;
  @media (max-width: 900px) {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
  }
`,y7=()=>a.jsxs(g7,{children:[a.jsx(x7,{children:"My role involved designing the brand identity (logo, color palette, typeface), crafting a cohesive set of custom illustrations for print and Black Friday social media campaigns. The result is a bold, playful, and youthful brand identity that captures the vibrant energy of its audience."}),a.jsx(w7,{children:"Aim → Create a bold identity → Capture Gen Z spirit → Make fashion fun and affordable"})]}),Ns=m.span`
  color: #fabfb7;
  font-weight: 400;
`,v7=[{title:"Logo",description:a.jsxs(a.Fragment,{children:["Design a flexible logo that reflects ",a.jsx(Ns,{children:"freedom"}),", ",a.jsx(Ns,{children:"dance"}),", and ",a.jsx(Ns,{children:"carefreeness"}),", and can be used in every graphic."]})},{title:"Color Palette",description:a.jsxs(a.Fragment,{children:["Choose ",a.jsx(Ns,{children:"soft"}),", ",a.jsx(Ns,{children:"transparent"})," colors to support line-based graphics and reflect party lights."]})},{title:"Typography",description:"Find a typeface that matches the logo's form and works well on digital and print."},{title:"Illustration",description:a.jsxs(a.Fragment,{children:["Create graphics that show ",a.jsx(Ns,{children:"movement"})," and ",a.jsx(Ns,{children:"Gen Z mood"}),", blending with the logo's curves."]})}],b7=m.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,k7=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`,j7=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`,D7=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.2rem;
  @media (max-width: 900px) {
    gap: 1.2rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }
`,S7=m.div`
  min-width: 180px;
  max-width: 240px;
  background: #fff;
  border-radius: 1.2rem;
  border: 2px solid #fabfb7;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.18s, box-shadow 0.18s;
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(80, 79, 81, 0.13);
  }
  @media (max-width: 900px) {
    min-width: 140px;
    max-width: 180px;
    padding: 1rem 0.8rem;
  }
  @media (max-width: 600px) {
    min-width: 90vw;
    max-width: 98vw;
    padding: 0.8rem 0.4rem;
  }
`,_7=m.div`  font-size: 1.01rem;
  font-weight: 600;
  color: #888;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-align: center;
`,C7=m.div`
  font-weight: 400;
  font-size: 1.08rem;
  color: #222;
  line-height: 1.5;
  letter-spacing: -0.1px;
  text-align: center;
`;function P7(){return a.jsxs(b7,{children:[a.jsx(k7,{children:"Key Challenges"}),a.jsx(j7,{children:"The project required solving four main creative challenges to build a cohesive, expressive brand identity."}),a.jsx(D7,{children:v7.map(t=>a.jsxs(S7,{children:[a.jsx(_7,{children:t.title}),a.jsx(C7,{children:t.description})]},t.title))})]})}const T7="/assets/s-logo1.3846184d.png",E7="/assets/s-logo2.d5ba2dd5.mp4",I7="/assets/s-logo3.0b24d28b.png",A7=m.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,M7=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`,z7=m.div`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`,fb=m.div`
    font-size: 0.98rem;
  color: #888;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 1.2em;
  margin-bottom: 0.3em;
`,F7=m.div`
  display: flex;
  flex-direction: column;
    align-items: center;
  gap: 2.5rem;
  margin: 2.2rem 0 1.2rem 0;
  @media (max-width: 900px) {
    gap: 1.2rem;
    margin: 1.2rem 0 0.8rem 0;
  }
  @media (max-width: 600px) {
    gap: 0.8rem;
    margin: 0.8rem 0 0.4rem 0;
  }
`,R7=m.video`
  width: 320px;
  height: 320px;
  max-width: 90vw;
  max-height: 60vw;
  object-fit: contain;
  border-radius: 1.5rem;
  background: #f7f7f7;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
    display: block;
  @media (max-width: 900px) {
    width: 220px;
    height: 220px;
  }
  @media (max-width: 600px) {
    width: 98vw;
    height: 180px;
    max-width: 98vw;
    max-height: 40vw;
  }
`,L7=m.div`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  @media (max-width: 900px) {
    gap: 1.2rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }
`,mb=m.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
  border-radius: 1rem;
  background: #f7f7f7;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  @media (max-width: 900px) {
    width: 120px;
    height: 120px;
  }
  @media (max-width: 600px) {
    width: 90vw;
    height: 90vw;
    max-width: 98vw;
    max-height: 98vw;
  }
`,j0=m.div`
  font-size: 0.95rem;
  color: #888;
  text-align: center;
  margin-top: 0.5em;
`,Vs=m.span`
  color: #e4572e;
  font-weight: 400;
`,O7=()=>a.jsxs(A7,{children:[a.jsx(M7,{children:"Logo Design"}),a.jsxs(z7,{children:[a.jsx(fb,{children:"I should"}),"Design a logo that reflects the values of ",a.jsx(Vs,{children:"freedom"}),", ",a.jsx(Vs,{children:"movement"}),", and ",a.jsx(Vs,{children:"carefreeness"}),", and also functions as part of every clothing graphic.",a.jsx(fb,{children:"So"}),"To design a logo that reflects the brand's core values of ",a.jsx(Vs,{children:"freedom"}),", ",a.jsx(Vs,{children:"movement"}),", and ",a.jsx(Vs,{children:"carefreeness"}),", I began with an image of a carefree person jumping  a moment that perfectly captures the brand's vibe. ",a.jsx(Vs,{children:"Inspired by this expressive pose"}),", I first sketched the figure and then simplified it into flowing line work."]}),a.jsxs(F7,{children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(R7,{src:E7,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"S.B.S Main Logo Animation"}),a.jsx(j0,{children:"Main Logo (Animated)"})]}),a.jsxs(L7,{children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(mb,{src:T7,alt:"S.B.S Logo Static"}),a.jsx(j0,{children:"Static Logo"})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(mb,{src:I7,alt:"S.B.S Logo Variation"}),a.jsx(j0,{children:"Logo Variation"})]})]})]})]}),$7="/assets/sbs-type.f385c001.mp4",B7=m.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,N7=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`,V7=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`,W7=m.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 900px) {
    width: 350px;
    max-width: 95vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    margin-bottom: 1.2rem;
  }
`,U7=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,H7=()=>a.jsxs(B7,{children:[a.jsx(N7,{children:"Typography"}),a.jsx(V7,{children:"The primary typeface, Gyst Variable, visually connects with the logo's curves and is used for headers and expressive brand moments. Noto Sans is used for body text, ensuring clarity and legibility across all platforms."}),a.jsx(W7,{children:a.jsx(U7,{src:$7,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Typography video"})})]}),Y7="/assets/color-sbs.03773038.mp4",G7=m.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,X7=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`,Z7=m.div`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`;m.div`
  font-size: 0.98rem;
  color: #888;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 1.2em;
  margin-bottom: 0.3em;
`;const q7=m.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 900px) {
    width: 350px;
    max-width: 95vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    margin-bottom: 1.2rem;
  }
`,Q7=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,K7=()=>{const t=T.useRef(null),[e,i]=T.useState(!1);return T.useEffect(()=>{const n=()=>{if(!e&&t.current){const r=t.current.getBoundingClientRect();r.top<window.innerHeight&&r.bottom>0&&(t.current.play(),i(!0))}};return window.addEventListener("scroll",n),n(),()=>window.removeEventListener("scroll",n)},[e]),a.jsxs(G7,{children:[a.jsx(X7,{children:"Color Palette"}),a.jsx(Z7,{children:"The graphics are based on lines to show movement and flow, so I selected nude and soft colors that are not too bold. This allows the lines to stay visually dominant and visible. The palette also includes transparent tones, symbolizing party lights and ambiance, supporting the illustrations without distraction."}),a.jsx(q7,{children:a.jsx(Q7,{ref:t,src:Y7,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Color palette video"})})]})},J7="/assets/cap-intro2.1af16ea2.mp4",eL="/assets/print2.17cf24de.mp4",tL=m.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,iL=m.div`
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1400px;
  margin-bottom: 2.5rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 600px) {
    gap: 0.8rem;
    margin-bottom: 1rem;
  }
`,gb=m.div`
  flex: 1 1 0;
  display: flex;
  justify-content: center;
`,xb=m.video`
  width: 35vw;
  max-width: 500px;
  height: 400px;
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  object-fit: contain;
  background: transparent;
  border: none;
  display: block;
  @media (max-width: 900px) {
    width: 70vw;
    max-width: 90vw;
    height: 300px;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    height: 180px;
  }
`;m.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
`;const nL=()=>a.jsx(tL,{children:a.jsxs(iL,{children:[a.jsx(gb,{children:a.jsx(xb,{src:J7,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Cap Intro2 Video"})}),a.jsx(gb,{children:a.jsx(xb,{src:eL,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Print2 Video"})})]})}),rL="/assets/sbs-bag1.13c78bde.jpg",sL=m.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 32px 0;
  
  @media (max-width: 1200px) {
    padding: 40px 0 28px 0;
  }
  
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  
  @media (max-width: 600px) {
    padding: 24px 0 16px 0;
  }
  
  @media (max-width: 480px) {
    padding: 20px 0 12px 0;
  }
`,oL=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 2.2rem;
  letter-spacing: -1px;
  text-align: center;
  
  @media (max-width: 900px) {
    font-size: 1.8rem;
    margin-bottom: 1.8rem;
  }
  
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`,aL=m.img`
  width: 100%;
  max-width: 1200px;
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  object-fit: contain;
  
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 1.2rem;
  }
  
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
    border-radius: 1rem;
  }
  
  @media (max-width: 600px) {
    width: 95vw;
    max-width: 95vw;
    border-radius: 0.8rem;
  }
  
  @media (max-width: 480px) {
    width: 98vw;
    max-width: 98vw;
    border-radius: 0.6rem;
  }
`,lL=()=>a.jsxs(sL,{children:[a.jsx(oL,{children:"Mockups"}),a.jsx(aL,{src:rL,alt:"SBS Tote Bag Mockup"})]}),cL="/assets/sbs-tag.68232c39.jpg",dL="/assets/sbs-box.e26aaf9d.jpg",uL=m.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 32px 0;
  
  @media (max-width: 1200px) {
    padding: 40px 0 28px 0;
  }
  
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  
  @media (max-width: 600px) {
    padding: 24px 0 16px 0;
  }
  
  @media (max-width: 480px) {
    padding: 20px 0 12px 0;
  }
`,hL=m.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  
  @media (max-width: 1200px) {
    max-width: 95vw;
    gap: 1.5rem;
  }
  
  @media (max-width: 900px) {
    gap: 1rem;
    width: 90vw;
    max-width: 90vw;
  }
  
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
    width: 95vw;
    max-width: 95vw;
    align-items: center;
  }
  
  @media (max-width: 480px) {
    width: 98vw;
    max-width: 98vw;
    gap: 0.6rem;
  }
`,wb=m.img`
  width: calc(50% - 1rem);
  max-width: calc(50% - 1rem);
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  object-fit: contain;
  
  @media (max-width: 1200px) {
    width: calc(50% - 0.75rem);
    max-width: calc(50% - 0.75rem);
    border-radius: 1.2rem;
  }
  
  @media (max-width: 900px) {
    width: 44vw;
    max-width: 44vw;
    border-radius: 1rem;
  }
  
  @media (max-width: 600px) {
    width: 95vw;
    max-width: 95vw;
    border-radius: 0.8rem;
  }
  
  @media (max-width: 480px) {
    width: 98vw;
    max-width: 98vw;
    border-radius: 0.6rem;
  }
`,pL=()=>a.jsx(uL,{children:a.jsxs(hL,{children:[a.jsx(wb,{src:cL,alt:"SBS Tote Bag Mockup 2"}),a.jsx(wb,{src:dL,alt:"SBS Box Mockup"})]})}),fL="/assets/allin1.fa7d6a25.mp4",mL=m.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 32px 0;
  
  @media (max-width: 1200px) {
    padding: 40px 0 28px 0;
  }
  
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  
  @media (max-width: 600px) {
    padding: 24px 0 16px 0;
  }
  
  @media (max-width: 480px) {
    padding: 20px 0 12px 0;
  }
`;m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 2.2rem;
  letter-spacing: -1px;
  text-align: center;
  
  @media (max-width: 900px) {
    font-size: 1.8rem;
    margin-bottom: 1.8rem;
  }
  
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;const gL=m.div`
  width: 100%;
  max-width: 1200px;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 1.2rem;
  }
  
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
    border-radius: 1rem;
  }
  
  @media (max-width: 600px) {
    width: 95vw;
    max-width: 95vw;
    border-radius: 0.8rem;
  }
  
  @media (max-width: 480px) {
    width: 98vw;
    max-width: 98vw;
    border-radius: 0.6rem;
  }
`,xL=m.video`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
`,wL=()=>a.jsx(mL,{children:a.jsx(gL,{children:a.jsx(xL,{src:fL,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,"aria-label":"SBS All-in-One Video",preload:"metadata"})})}),yL="/assets/storyAll.989950ea.mp4",vL=m.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 32px 0;
  
  @media (max-width: 1200px) {
    padding: 40px 0 28px 0;
  }
  
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  
  @media (max-width: 600px) {
    padding: 24px 0 16px 0;
  }
  
  @media (max-width: 480px) {
    padding: 20px 0 12px 0;
  }
`,bL=m.video`
  width: 100%;
  max-width: 1200px;
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  object-fit: contain;
  background: transparent;
  border: none;
  display: block;
  
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 1.2rem;
  }
  
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
    border-radius: 1rem;
  }
  
  @media (max-width: 600px) {
    width: 95vw;
    max-width: 95vw;
    border-radius: 0.8rem;
  }
  
  @media (max-width: 480px) {
    width: 98vw;
    max-width: 98vw;
    border-radius: 0.6rem;
  }
`,kL=()=>a.jsx(vL,{children:a.jsx(bL,{src:yL,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Story Video",preload:"metadata"})}),jL="/assets/story5.e9f81e75.mp4",DL=m.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 32px 0;
  
  @media (max-width: 1200px) {
    padding: 40px 0 28px 0;
  }
  
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  
  @media (max-width: 600px) {
    padding: 24px 0 16px 0;
  }
  
  @media (max-width: 480px) {
    padding: 20px 0 12px 0;
  }
`,SL=m.video`
  width: 100%;
  max-width: 1200px;
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  object-fit: contain;
  background: transparent;
  border: none;
  display: block;
  
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 1.2rem;
  }
  
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
    border-radius: 1rem;
  }
  
  @media (max-width: 600px) {
    width: 95vw;
    max-width: 95vw;
    border-radius: 0.8rem;
  }
  
  @media (max-width: 480px) {
    width: 98vw;
    max-width: 98vw;
    border-radius: 0.6rem;
  }
`,_L=()=>a.jsx(DL,{children:a.jsx(SL,{src:jL,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Story Video",preload:"metadata"})}),CL="/assets/s1.2fe16319.png",PL="/assets/s2.606ae332.png",TL="/assets/s3.2e5423d9.png",EL="/assets/s4.691552ab.png",IL="/assets/8s.efb2d643.png",AL=[CL,PL,TL,EL,IL],ML=m.section`
  width: 100vw;
  min-height: 60vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,zL=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`,D0=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`,FL=m.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    gap: 1rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }
`,RL=m.div`
  width: 280px;
  height: 280px;
  background: #fff;
  border-radius: 1.2rem;
  border: 2px solid #e4572e;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  flex: 0 0 auto;
  transition: transform 0.18s, box-shadow 0.18s;
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(80, 79, 81, 0.13);
  }
  @media (max-width: 900px) {
    width: 180px;
    height: 180px;
  }
  @media (max-width: 600px) {
    width: 90vw;
    height: 90vw;
    max-width: 98vw;
    max-height: 98vw;
  }
`,LL=m.img`  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`,Jo=m.span`
  color: #e4572e;
  font-weight: 400;
`;function OL(){return a.jsxs(ML,{children:[a.jsx(zL,{children:"Logo Design Process"}),a.jsx(D0,{children:"Exploring logo concepts and refinements."}),a.jsxs(D0,{children:["I noticed a natural ",a.jsx(Jo,{children:"connection"})," between the shape of the body and the ",a.jsx(Jo,{children:"curves"})," of the letter ",a.jsx(Jo,{children:'"S"'}),", which led me to explore how movement could be integrated into the typography. Using the motion and energy from the image, I stylized the letters ",a.jsx(Jo,{children:"S.B.S"})," into a unified, dynamic form. The final logo features curved lines that suggest motion and emotional freedom, making the mark feel alive and expressive."]}),a.jsxs(D0,{children:["The result is a logo that combines all three ",a.jsx(Jo,{children:"brand initials"})," (",a.jsx(Jo,{children:"S.B.S"}),") into a single, fluid design that works seamlessly across clothing graphics and brand applications."]}),a.jsx(FL,{children:AL.map((t,e)=>a.jsx(RL,{children:a.jsx(LL,{src:t,alt:`logo-process-${e}`,loading:"lazy"})},t+e))})]})}const $L="/assets/s-88.0805e3b5.png",v4="/assets/deli9.875dc27d.jpg",BL="/assets/mveen5.edb6dd91.png",b4="/assets/workday-phone.bd948a42.png",NL="/assets/foodhome.8a385cf5.png",yu=[{image:$L,link:"/work/sbs",description:"SBS",alt:"SBS Work"},{image:v4,link:"/work/delicato",description:"Delicato",alt:"Deli Project"},{image:BL,link:"/work/veen",description:"Veen",alt:"Veen Shop"},{image:nw,link:"/work/zar",description:"Zar",alt:"Zar Gallery"},{image:b4,link:"/work/workday",description:"Workday App",alt:"Workday App"},{image:NL,link:"/work/UX-UI-2",description:"SaveFood App",alt:"saveFood App"},{image:vp,link:"/work/fun",description:"School Projects",alt:"School Projects"}],No=({titleColor:t="#000000"})=>{const e=wd(),i=fD(),[n,r]=T.useState(!1),s=yu.findIndex(c=>e.pathname.startsWith(c.link)),o=s>-1?[yu[s],...yu.filter((c,d)=>d!==s)]:yu,l=c=>{i(c),r(!1),window.scrollTo(0,0)};return a.jsxs("div",{className:"menu-work-container",children:[a.jsx("h2",{className:"menu-work-title",style:{color:t},children:"Next Project"}),a.jsx("div",{className:"menu-work-grid",children:o.map((c,d)=>a.jsx("div",{className:`menu-work-cube${d===0?" active":""}`,onClick:()=>l(c.link),tabIndex:0,role:"button","aria-label":`Go to ${c.alt}`,children:a.jsxs("div",{className:"menu-work-img-wrapper",children:[a.jsx("img",{src:c.image,alt:c.alt,className:"menu-work-img"}),a.jsx("div",{className:"menu-work-desc",children:a.jsx("span",{children:c.description})})]})},c.link))})]})},VL="/assets/sbsintro.d8bee55b.mp4",WL=m.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 32px 0;
  
  @media (max-width: 1200px) {
    padding: 40px 0 28px 0;
  }
  
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  
  @media (max-width: 600px) {
    padding: 24px 0 16px 0;
  }
  
  @media (max-width: 480px) {
    padding: 20px 0 12px 0;
  }
`,UL=m.video`
  width: 100%;
  max-width: 1200px;
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  object-fit: contain;
  background: transparent;
  border: none;
  display: block;
  
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 1.2rem;
  }
  
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
    border-radius: 1rem;
  }
  
  @media (max-width: 600px) {
    width: 95vw;
    max-width: 95vw;
    border-radius: 0.8rem;
  }
  
  @media (max-width: 480px) {
    width: 98vw;
    max-width: 98vw;
    border-radius: 0.6rem;
  }
`,HL=()=>a.jsx(WL,{children:a.jsx(UL,{src:VL,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Intro Video",preload:"metadata"})}),YL="/assets/story3.bd853697.mp4",GL=m.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 32px 0;
  
  @media (max-width: 1200px) {
    padding: 40px 0 28px 0;
  }
  
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  
  @media (max-width: 600px) {
    padding: 24px 0 16px 0;
  }
  
  @media (max-width: 480px) {
    padding: 20px 0 12px 0;
  }
`,XL=m.video`
  width: 100%;
  max-width: 1200px;
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  object-fit: contain;
  background: transparent;
  border: none;
  display: block;
  
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 1.2rem;
  }
  
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
    border-radius: 1rem;
  }
  
  @media (max-width: 600px) {
    width: 95vw;
    max-width: 95vw;
    border-radius: 0.8rem;
  }
  
  @media (max-width: 480px) {
    width: 98vw;
    max-width: 98vw;
    border-radius: 0.6rem;
  }
`,ZL=()=>a.jsx(GL,{children:a.jsx(XL,{src:YL,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Social Media Story 3",preload:"metadata"})}),qL="/assets/story-1.e26e9252.mp4",QL=m.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 32px 0;
  
  @media (max-width: 1200px) {
    padding: 40px 0 28px 0;
  }
  
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  
  @media (max-width: 600px) {
    padding: 24px 0 16px 0;
  }
  
  @media (max-width: 480px) {
    padding: 20px 0 12px 0;
  }
`,KL=m.video`
  width: 100%;
  max-width: 1200px;
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  object-fit: contain;
  background: transparent;
  border: none;
  display: block;
  
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 1.2rem;
  }
  
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
    border-radius: 1rem;
  }
  
  @media (max-width: 600px) {
    width: 95vw;
    max-width: 95vw;
    border-radius: 0.8rem;
  }
  
  @media (max-width: 480px) {
    width: 98vw;
    max-width: 98vw;
    border-radius: 0.6rem;
  }
`,JL=()=>a.jsx(QL,{children:a.jsx(KL,{src:qL,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Social Media Story 1",preload:"metadata"})}),eO=m.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  @media (max-width: 900px) {
    padding: 1.5rem;
  }
`,tO=m($.div)`
  border-radius: 50%;
  width: 400px;
  height: 400px;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-weight: 800;
  color: #000;
  text-align: center;
  cursor: pointer;
  transform-origin: 50% 50%;
  -webkit-transform-origin: 50% 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 900px) {
    width: 300px;
    height: 300px;
  }
`,iO=m.span`
  position: absolute;
  display: inline-block;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 1.5rem;
  transition: all 0.5s cubic-bezier(0, 0, 0, 1);
  color: #000;
  
  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`,nO=(t,e,i=!0)=>({from:e,to:e+360,ease:"linear",duration:t,type:"tween",repeat:i?1/0:0}),ea=(t,e)=>({rotate:nO(t,e),scale:{type:"spring",damping:20,stiffness:300}}),rO=({text:t,spinDuration:e=20,onHover:i="speedUp",className:n=""})=>{const r=Array.from(t),s=BA(),o=D3(0);T.useEffect(()=>{const d=o.get();s.start({rotate:d+360,scale:1,transition:ea(e,d)})},[e,t,i,s]);const l=()=>{const d=o.get();if(!i)return;let u,p=1;switch(i){case"slowDown":u=ea(e*2,d);break;case"speedUp":u=ea(e/4,d);break;case"pause":u={rotate:{type:"spring",damping:20,stiffness:300},scale:{type:"spring",damping:20,stiffness:300}};break;case"goBonkers":u=ea(e/20,d),p=.8;break;default:u=ea(e,d)}s.start({rotate:d+360,scale:p,transition:u})},c=()=>{const d=o.get();s.start({rotate:d+360,scale:1,transition:ea(e,d)})};return a.jsx(eO,{children:a.jsx(tO,{className:n,style:{rotate:o},initial:{rotate:0},animate:s,onMouseEnter:l,onMouseLeave:c,children:r.map((d,u)=>{const p=360/r.length*u,f=Math.PI/r.length,g=f*u,v=f*u,w=`rotateZ(${p}deg) translate3d(${g}px, ${v}px, 0)`;return a.jsx(iO,{style:{transform:w,WebkitTransform:w},children:d},u)})})})},sO=m.div`
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  padding: 1.5rem 1rem;
  max-width: 200px;
  min-width: 160px;
  
  /* Hide on mobile and tablet */
  @media (max-width: 1024px) {
    display: none;
  }
`,oO=m.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: left;
`,aO=m.button`
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.75rem 0.5rem;
  margin: 0.25rem 0;
  font-size: 0.9rem;
  font-weight: ${t=>t.isClicked?"700":t.isActive?"600":"400"};
  color: ${t=>t.isClicked||t.isActive?"#000000":"#888888"};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  border-radius: 4px;

  &:hover {
    color: #000000;
    background: rgba(0, 0, 0, 0.05);
  }
`,S0=[{id:"overview",label:"Overview",targetId:"sbs-overview"},{id:"challenges",label:"Key Challenges",targetId:"sbs-challenges"},{id:"logo",label:"Logo Design",targetId:"sbs-logo"},{id:"color",label:"Color Palette",targetId:"sbs-color"},{id:"typography",label:"Typography",targetId:"sbs-typography"},{id:"illustration",label:"Illustration",targetId:"sbs-illustration"},{id:"mockups",label:"Mockups",targetId:"sbs-mockups"},{id:"social-media",label:"Social Media",targetId:"sbs-social-media"}],lO=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("overview");q.useEffect(()=>{const s={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},o=new IntersectionObserver(l=>{l.forEach(c=>{if(c.isIntersecting){const d=c.target.id,u=S0.find(p=>p.targetId===d);u&&n(u.id)}})},s);return S0.forEach(l=>{const c=document.getElementById(l.targetId);c&&o.observe(c)}),()=>{o.disconnect()}},[]);const r=(s,o)=>{const l=document.getElementById(s);l&&(l.scrollIntoView({behavior:"smooth",block:"center"}),e(o))};return a.jsxs(sO,{children:[a.jsx(oO,{children:"Menu"}),S0.map(s=>a.jsx(aO,{isActive:i===s.id,isClicked:t===s.id,onClick:()=>r(s.targetId,s.id),children:s.label},s.id))]})},cO=m.div`
  min-height: 100vh;
  width: 100vw;
  background: #fff;
  transition: background 0.2s;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  position: fixed;
  inset: 0;
  z-index: 0;
  padding-top: 80px;
  @media (max-width: 600px) {
    padding-top: 60px;
  }
`,dO=Cr`
  body {
    background: #fff;
    margin: 0;
    padding: 0;
    overflow-y: auto;
  }

  /* Optional: Prevent horizontal scroll on html element */
  html {
    overflow-x: hidden;
  }
`,yb=m.h2`
  width: 100vw;
  text-align: center;
  font-size: 2.1rem;
  font-weight: 700;
  color: #181818;
  margin: 2.5rem 0 1.5rem 0;
  letter-spacing: -1px;
`,uO=()=>a.jsxs(a.Fragment,{children:[a.jsxs(cO,{children:[a.jsx(st,{title:"SBS Project | Nooshin Shahsavan - Brand Design & Identity",description:"Explore the SBS project - a comprehensive branding and design project by Nooshin Shahsavan featuring modern visual identity, logo design, and brand strategy.",keywords:"SBS project, brand design, logo design, visual identity, branding, Nooshin Shahsavan, design portfolio",image:"/src/assets/sbsimg/banner.png"}),a.jsx(dO,{}),a.jsx(lO,{}),a.jsxs("div",{id:"sbs-overview",children:[a.jsx(m7,{}),a.jsx(HL,{}),a.jsx(y7,{})]}),a.jsx("div",{id:"sbs-challenges",children:a.jsx(P7,{})}),a.jsx("div",{id:"sbs-logo",children:a.jsx(O7,{})}),a.jsx("div",{id:"sbs-logo-process",children:a.jsx(OL,{})}),a.jsx("div",{id:"sbs-color",children:a.jsx(K7,{})}),a.jsx("div",{id:"sbs-typography",children:a.jsx(H7,{})}),a.jsxs("div",{id:"sbs-illustration",children:[a.jsx(yb,{children:"Illustration"}),a.jsx("p",{style:{fontSize:"1.08rem",color:"#444",fontWeight:"400",lineHeight:"1.5",maxWidth:"480px",margin:"0 auto 2.2rem auto",textAlign:"center"},children:"The illustration style uses curved lines and neutral, emotionless characters to reflect Gen Z's mood and the brand's sense of movement and freedom. The logo's form is echoed in every graphic, creating a cohesive and culturally relevant visual identity."}),a.jsx(nL,{})]}),a.jsx("div",{id:"sbs-video",children:a.jsx(wL,{})}),a.jsx("div",{id:"sbs-brand-identity",children:a.jsx(rO,{text:"Set by Setti Brand Identity",spinDuration:18})}),a.jsxs("div",{id:"sbs-mockups",children:[a.jsx(lL,{}),a.jsx(pL,{})]}),a.jsxs("div",{id:"sbs-social-media",children:[a.jsx(yb,{children:"Social Media/Black Friday"}),a.jsx(ZL,{}),a.jsx(JL,{})]}),a.jsxs("div",{id:"sbs-additional-mockups",children:[a.jsx(kL,{}),a.jsx(_L,{})]}),a.jsx(No,{}),a.jsx($o,{})]}),a.jsx(Bo,{})]}),hO="/assets/story.ab3b6178.mp4",pO=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`,fO=m.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`,mO=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`,gO=m.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
`,xO=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,wO=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.2rem;
`,vu=m.div`
  min-width: 120px;
  text-align: center;
`,bu=m.div`
  font-size: 0.92rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 0.2em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,ku=m.div`
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
`,yO=()=>a.jsxs(pO,{id:"veen-overview",children:[a.jsx(fO,{children:"VEEN — Overview"}),a.jsx(mO,{children:"VEEN Studio is a newly established photography brand based in Vancouver, specializing in family and child photography. The goal of this project was to create a professional, heartfelt brand identity that reflects warmth, trust, creativity, and joy."}),a.jsx(gO,{children:a.jsx(xO,{src:hO,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Veen project video"})}),a.jsxs(wO,{children:[a.jsxs(vu,{children:[a.jsx(bu,{children:"Role"}),a.jsx(ku,{children:"Brand Designer"})]}),a.jsxs(vu,{children:[a.jsx(bu,{children:"Tools"}),a.jsx(ku,{children:"Illustrator, After Effects, Photoshop"})]}),a.jsxs(vu,{children:[a.jsx(bu,{children:"Timeline"}),a.jsx(ku,{children:"2 weeks"})]}),a.jsxs(vu,{children:[a.jsx(bu,{children:"Year"}),a.jsx(ku,{children:"2024"})]})]})]}),vO="/assets/brand-strategy.42b2bd80.png",bO=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`,kO=m.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`,jO=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`,DO=m.div`
  width: 340px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
`,SO=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,_O=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
  font-size: 1.13rem;
  font-weight: 600;
`,Nl=m.span`
  color: #9ed4d1;
`,ju=m.span`
  color: #bdbdbd;
`;m.span`
  color: #f7b267;
`;m.span`
  color: #e07a5f;
`;m.span`
  color: #3d405b;
`;m.span`
  color: #81b29a;
`;const CO=()=>a.jsxs(bO,{children:[a.jsx(kO,{children:"What I did ..."}),a.jsx(jO,{children:"I was responsible for designing a logo system, selecting a color palette, choosing typography, and creating social media content to establish a strong and cohesive brand presence."}),a.jsx(DO,{children:a.jsx(SO,{src:vO,alt:"Brand Strategy Visual"})}),a.jsxs(_O,{children:[a.jsx(Nl,{children:"Aim"}),a.jsx(ju,{children:"➝"}),a.jsx(Nl,{children:"Create warm brand identity"}),a.jsx(ju,{children:"➝"}),a.jsx(Nl,{children:"Reflect Family + joy and trust"}),a.jsx(ju,{children:"➝"}),a.jsx(Nl,{children:"Design visuals"}),a.jsx(ju,{children:"➝"}),a.jsx(Nl,{children:"Build strong online presence"})]})]}),PO="/assets/scatch.016cf010.jpg",TO=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`,EO=m.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`,IO=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`,AO=m.div`
  width: 340px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
`,MO=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,vb=m.span`
  display: block;
  font-size: 1rem;
  color:rgb(160, 160, 160);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.35em;
  text-align: center;
`,bb=m.p`
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`,ui=m.span`
  color: #9ed4d1;
  font-weight: 600;
`,zO=()=>a.jsxs(TO,{id:"veen-logo",children:[a.jsx(EO,{children:"Logo Design"}),a.jsxs(IO,{children:["Based on the brand’s values and target audience families and children, with an emphasis on conveying warm and comforting vibes I considered several key points. The client preferred a ",a.jsx(ui,{children:"wordmark"})," combined with a ",a.jsx(ui,{children:"photography-related symbol"}),". On the other hand, I also needed to visually reflect the brand’s core values: ",a.jsx(ui,{children:"family"})," and ",a.jsx(ui,{children:"warmth"}),"."]}),a.jsx(AO,{children:a.jsx(MO,{src:PO,alt:"Logo Sketch"})}),a.jsx(vb,{children:"To achieve this..."}),a.jsxs(bb,{children:["I simplified the shape of a camera into a clean, graphic form and placed it at the center of the word “VEEN,” replacing the two ",a.jsx(ui,{children:"“E”"}),"s with the camera shape. This created a strong visual connection between the brand name and photography."]}),a.jsx(vb,{children:"To reinforce the concept of family,"}),a.jsxs(bb,{children:["I used a ",a.jsx(ui,{children:"square"})," shape(",a.jsx(ui,{children:"camera body"}),") to represent ",a.jsx(ui,{children:"home"})," and security , and added a ",a.jsx(ui,{children:"circle"})," inside the square, symbolizing ",a.jsx(ui,{children:"family"}),", ",a.jsx(ui,{children:"love"})," , and ",a.jsx(ui,{children:"the flow of life"})," also resembling the camera ",a.jsx(ui,{children:"lens"})," .",a.jsx("br",{}),a.jsx("br",{}),"Secondary Logo: A minimal ",a.jsx(ui,{children:"V+N"})," monogram, derived from the main logo, designed for versatile use in stickers, watermarks, and small-scale branding."]})]}),FO="/assets/veenlogo1.d6c63d8c.jpg",RO="/assets/veenlogo-2.5fe5cb90.jpg",LO="/assets/veenlogo-3.fa1007ca.jpg",OO=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`,$O=m.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 48px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 24px;
  }
`,_0=m.img`
  width: 260px;
  height: 260px;
  object-fit: cover;
  background: #dadada;
  border-radius: 1.2rem;
  display: block;
  transition: transform 0.18s, box-shadow 0.18s;
  box-shadow: 0 2px 16px rgba(80, 79, 81, 0.08);
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(80, 79, 81, 0.13);
  }
  @media (max-width: 900px) {
    width: 70vw;
    height: 70vw;
    max-width: 320px;
    max-height: 320px;
    min-width: 120px;
    min-height: 120px;
    border-radius: 0.7rem;
  }
`,BO=()=>a.jsx(OO,{id:"veen-color",children:a.jsxs($O,{children:[a.jsx(_0,{src:FO,alt:"Veen Logo 1"}),a.jsx(_0,{src:RO,alt:"Veen Logo 2"}),a.jsx(_0,{src:LO,alt:"Veen Logo 3"})]})}),NO="/assets/final.0e6cb83e.mp4",VO=m.section`
  width: 100%;
  height: auto;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem auto;
  padding: 2rem 0;
  
  @media (max-width: 1200px) {
    margin: 2rem auto;
    padding: 1.5rem 0;
  }
  
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    min-height: 60vw;
    padding: 1rem 0;
    margin: 1.5rem auto;
  }
  
  @media (max-width: 600px) {
    margin: 1.2rem auto;
    padding: 0.8rem 0;
    min-height: 50vw;
  }
  
  @media (max-width: 480px) {
    margin: 1rem auto;
    padding: 0.5rem 0;
    min-height: 45vw;
  }
`,WO=m.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 12px;
  
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 10px;
  }
  
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    max-width: 100vw;
    min-height: 40vw;
    padding: 0;
    margin: 0;
    border-radius: 8px;
  }
  
  @media (max-width: 600px) {
    max-width: 98vw;
    min-height: 35vw;
    border-radius: 6px;
  }
  
  @media (max-width: 480px) {
    max-width: 100vw;
    min-height: 30vw;
    border-radius: 4px;
  }
`,UO=m.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  border-radius: 12px;
  
  @media (max-width: 1200px) {
    border-radius: 10px;
  }
  
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    max-width: 100vw;
    max-height: 70vh;
    object-fit: contain;
    margin: 0;
    padding: 0;
    border-radius: 8px;
  }
  
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    max-height: 60vh;
    border-radius: 6px;
  }
  
  @media (max-width: 480px) {
    width: 100vw;
    max-width: 100vw;
    max-height: 50vh;
    border-radius: 4px;
  }
`,HO=()=>a.jsx(VO,{children:a.jsx(WO,{children:a.jsx(UO,{src:NO,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Final video"})})}),YO="/assets/socialveen1.9b39d379.jpg",GO=m.section`
  width: 100%;
  height: auto;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem auto;
  padding: 2rem 0;
  
  @media (max-width: 1200px) {
    margin: 2rem auto;
    padding: 1.5rem 0;
  }
  
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    min-height: 60vw;
    padding: 1rem 0;
    margin: 1.5rem auto;
  }
  
  @media (max-width: 600px) {
    margin: 1.2rem auto;
    padding: 0.8rem 0;
    min-height: 50vw;
  }
  
  @media (max-width: 480px) {
    margin: 1rem auto;
    padding: 0.5rem 0;
    min-height: 45vw;
  }
`,XO=m.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 12px;
  
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 10px;
  }
  
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    max-width: 100vw;
    min-height: 40vw;
    padding: 0;
    margin: 0;
    border-radius: 8px;
  }
  
  @media (max-width: 600px) {
    max-width: 98vw;
    min-height: 35vw;
    border-radius: 6px;
  }
  
  @media (max-width: 480px) {
    max-width: 100vw;
    min-height: 30vw;
    border-radius: 4px;
  }
`,ZO=m.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  border-radius: 12px;
  
  @media (max-width: 1200px) {
    border-radius: 10px;
  }
  
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    max-width: 100vw;
    max-height: 70vh;
    object-fit: contain;
    margin: 0;
    padding: 0;
    border-radius: 8px;
  }
  
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    max-height: 60vh;
    border-radius: 6px;
  }
  
  @media (max-width: 480px) {
    width: 100vw;
    max-width: 100vw;
    max-height: 50vh;
    border-radius: 4px;
  }
`,qO=()=>a.jsx(GO,{children:a.jsx(XO,{children:a.jsx(ZO,{src:YO,alt:"Veen social media design"})})}),QO="/assets/veencolor.c62c0ec6.mp4",KO=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`,JO=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`,e$=m.div`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`,t$=m.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
`,i$=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,n$=()=>{const t=T.useRef(null),[e,i]=T.useState(!1);return T.useEffect(()=>{const n=()=>{if(!e&&t.current){const r=t.current.getBoundingClientRect();r.top<window.innerHeight&&r.bottom>0&&(t.current.play(),i(!0))}};return window.addEventListener("scroll",n),n(),()=>window.removeEventListener("scroll",n)},[e]),a.jsxs(KO,{children:[a.jsx(JO,{children:"Color Palette"}),a.jsx(e$,{children:"A soft, modern color system designed to evoke warmth, trust, and joy perfect for family photography. Calming teals symbolize connection, balanced with peach, cream, and coral for a gentle yet vibrant emotional tone."}),a.jsx(t$,{children:a.jsx(i$,{ref:t,src:QO,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Color palette video"})})]})},r$="/assets/vv.596f8411.mp4",s$=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`,o$=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`,a$=m.div`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`,l$=m.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
`,c$=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,d$=()=>{const t=T.useRef(null),[e,i]=T.useState(!1);return T.useEffect(()=>{const n=()=>{if(!e&&t.current){const r=t.current.getBoundingClientRect();r.top<window.innerHeight&&r.bottom>0&&(t.current.play(),i(!0))}};return window.addEventListener("scroll",n),n(),()=>window.removeEventListener("scroll",n)},[e]),a.jsxs(s$,{children:[a.jsx(o$,{children:"Typography"}),a.jsx(a$,{children:"The typography system was carefully chosen to reflect warmth and professionalism, ensuring excellent readability across all applications."}),a.jsx(l$,{children:a.jsx(c$,{ref:t,src:r$,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Typography video"})})]})},u$="/assets/mveen1.0759dcdb.jpg",h$=m.section`
  width: 100%;
  height: auto;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem auto;
  padding: 2rem 0;
  
  @media (max-width: 1200px) {
    margin: 2rem auto;
    padding: 1.5rem 0;
  }
  
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    min-height: 60vw;
    padding: 1rem 0;
    margin: 1.5rem auto;
  }
  
  @media (max-width: 600px) {
    margin: 1.2rem auto;
    padding: 0.8rem 0;
    min-height: 50vw;
  }
  
  @media (max-width: 480px) {
    margin: 1rem auto;
    padding: 0.5rem 0;
    min-height: 45vw;
  }
`,p$=m.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 12px;
  
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 10px;
  }
  
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    max-width: 100vw;
    min-height: 40vw;
    padding: 0;
    margin: 0;
    border-radius: 8px;
  }
  
  @media (max-width: 600px) {
    max-width: 98vw;
    min-height: 35vw;
    border-radius: 6px;
  }
  
  @media (max-width: 480px) {
    max-width: 100vw;
    min-height: 30vw;
    border-radius: 4px;
  }
`,f$=m.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  border-radius: 12px;
  
  @media (max-width: 1200px) {
    border-radius: 10px;
  }
  
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    max-width: 100vw;
    max-height: 70vh;
    object-fit: contain;
    margin: 0;
    padding: 0;
    border-radius: 8px;
  }
  
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    max-height: 60vh;
    border-radius: 6px;
  }
  
  @media (max-width: 480px) {
    width: 100vw;
    max-width: 100vw;
    max-height: 50vh;
    border-radius: 4px;
  }
`,m$=()=>a.jsx(h$,{children:a.jsx(p$,{children:a.jsx(f$,{src:u$,alt:"Veen design mockup"})})}),g$="/assets/envelop.58d96898.png",x$=m.div`
  width: 100%;
  height: auto;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem auto;
  padding: 2rem 0;
  
  @media (max-width: 1200px) {
    margin: 2rem auto;
    padding: 1.5rem 0;
  }
  
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    min-height: 60vw;
    padding: 1rem 0;
    margin: 1.5rem auto;
  }
  
  @media (max-width: 600px) {
    margin: 1.2rem auto;
    padding: 0.8rem 0;
    min-height: 50vw;
  }
  
  @media (max-width: 480px) {
    margin: 1rem auto;
    padding: 0.5rem 0;
    min-height: 45vw;
  }
`,w$=m.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 12px;
  
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 10px;
  }
  
  @media (max-width: 900px) {
    width: 100%;
    height: auto;
    max-width: 100vw;
    min-height: 40vw;
    padding: 0;
    margin: 0;
    border-radius: 8px;
  }
  
  @media (max-width: 600px) {
    max-width: 98vw;
    min-height: 35vw;
    border-radius: 6px;
  }
  
  @media (max-width: 480px) {
    max-width: 100vw;
    min-height: 30vw;
    border-radius: 4px;
  }
`,y$=m.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  border-radius: 12px;
  
  @media (max-width: 1200px) {
    border-radius: 10px;
  }
  
  @media (max-width: 900px) {
    width: 100vw;
    height: auto;
    max-width: 100vw;
    max-height: 70vh;
    object-fit: contain;
    margin: 0;
    padding: 0;
    border-radius: 8px;
  }
  
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    max-height: 60vh;
    border-radius: 6px;
  }
  
  @media (max-width: 480px) {
    width: 100vw;
    max-width: 100vw;
    max-height: 50vh;
    border-radius: 4px;
  }
`,v$=()=>a.jsx(x$,{children:a.jsx(w$,{children:a.jsx(y$,{src:g$,alt:"Veen Envelope Design"})})}),b$="/assets/v1.7dc01232.png",k$="/assets/v2.afacf3bc.jpeg",j$="/assets/v3.5034fa44.png",D$="/assets/v4.c9d7c2c6.jpg",S$=[b$,k$,j$,D$],_$=m.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-sizing: border-box;
`,C$=m.h2`
  width: 100%;
  text-align: center;
  color: #181818;
  font-size: 2.2rem;
  font-weight: 700;
  margin: 2.5rem 0 2rem 0;
  letter-spacing: 0.04em;
`,P$=m.div`
  width: 70vw;
  max-width: 1200px;
  min-height: 320px;
  background: #fff;
  border-radius: 0;
  box-shadow: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 2rem;
  position: relative;
  transition: min-height .2s;
  @media (max-width: 700px) {
    min-height: 180px;
    padding: 1.2rem 0.5rem;
  }
`,T$=m.div`
  display: flex;
  gap: 2.2vw;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    gap: 10px;
  }
`,E$=m.div`
  width: 260px;
  height: 260px;
  background: #fff;
  border-radius: 1.2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 16px rgba(80, 79, 81, 0.08);
  border: 1.5px solid #9ed4d1;
  transition: transform 0.18s, box-shadow 0.18s;
  flex: 0 0 auto;
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(80, 79, 81, 0.13);
  }
  @media (max-width: 700px) {
    width: 100px;
    height: 100px;
    border-radius: 0.7rem;
  }
`,I$=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`,A$=m.p`
  font-size: 1rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 2.2rem auto 0 auto;
  text-align: center;
`;function M$(){return a.jsxs(_$,{id:"veen-logo-explorations",children:[a.jsx(C$,{children:"Logo Explorations"}),a.jsx(P$,{children:a.jsx(T$,{children:S$.map((t,e)=>a.jsx(E$,{children:a.jsx(I$,{src:t,alt:`logo-${e+1}`,loading:"lazy"})},t+e))})}),a.jsx(A$,{children:"Through this approach, I successfully addressed both sides of the design: incorporating a recognizable camera shape and embedding symbolic elements that reflect the concept of family. None of these choices were accidental; they are all grounded in semiotics."})]})}var ax={exports:{}};(function(t,e){(function(i,n){n(e)})(C4,function(i){class n{constructor(h,x){this.state={angle:0,area:[],position:{x:0,y:0},hardAngle:0,hardDrawingAngle:0},this.createdDensity=x,this.nowDrawingDensity=this.createdDensity,this.render=h}setDensity(h){this.createdDensity=h,this.nowDrawingDensity=h}setDrawingDensity(h){this.nowDrawingDensity=h}setPosition(h){this.state.position=h}setAngle(h){this.state.angle=h}setArea(h){this.state.area=h}setHardDrawingAngle(h){this.state.hardDrawingAngle=h}setHardAngle(h){this.state.hardAngle=h,this.state.hardDrawingAngle=h}setOrientation(h){this.orientation=h}getDrawingDensity(){return this.nowDrawingDensity}getDensity(){return this.createdDensity}getHardAngle(){return this.state.hardAngle}}class r extends n{constructor(h,x,k){super(h,k),this.image=null,this.isLoad=!1,this.loadingAngle=0,this.image=new Image,this.image.src=x}draw(h){const x=this.render.getContext(),k=this.render.convertToGlobal(this.state.position),D=this.render.getRect().pageWidth,_=this.render.getRect().height;x.save(),x.translate(k.x,k.y),x.beginPath();for(let C of this.state.area)C!==null&&(C=this.render.convertToGlobal(C),x.lineTo(C.x-k.x,C.y-k.y));x.rotate(this.state.angle),x.clip(),this.isLoad?x.drawImage(this.image,0,0,D,_):this.drawLoader(x,{x:0,y:0},D,_),x.restore()}simpleDraw(h){const x=this.render.getRect(),k=this.render.getContext(),D=x.pageWidth,_=x.height,C=h===1?x.left+x.pageWidth:x.left,E=x.top;this.isLoad?k.drawImage(this.image,C,E,D,_):this.drawLoader(k,{x:C,y:E},D,_)}drawLoader(h,x,k,D){h.beginPath(),h.strokeStyle="rgb(200, 200, 200)",h.fillStyle="rgb(255, 255, 255)",h.lineWidth=1,h.rect(x.x+1,x.y+1,k-1,D-1),h.stroke(),h.fill();const _={x:x.x+k/2,y:x.y+D/2};h.beginPath(),h.lineWidth=10,h.arc(_.x,_.y,20,this.loadingAngle,3*Math.PI/2+this.loadingAngle),h.stroke(),h.closePath(),this.loadingAngle+=.07,this.loadingAngle>=2*Math.PI&&(this.loadingAngle=0)}load(){this.isLoad||(this.image.onload=()=>{this.isLoad=!0})}newTemporaryCopy(){return this}getTemporaryCopy(){return this}hideTemporaryCopy(){}}class s{constructor(h,x){this.pages=[],this.currentPageIndex=0,this.currentSpreadIndex=0,this.landscapeSpread=[],this.portraitSpread=[],this.render=x,this.app=h,this.currentPageIndex=0,this.isShowCover=this.app.getSettings().showCover}destroy(){this.pages=[]}createSpread(){this.landscapeSpread=[],this.portraitSpread=[];for(let x=0;x<this.pages.length;x++)this.portraitSpread.push([x]);let h=0;this.isShowCover&&(this.pages[0].setDensity("hard"),this.landscapeSpread.push([h]),h++);for(let x=h;x<this.pages.length;x+=2)x<this.pages.length-1?this.landscapeSpread.push([x,x+1]):(this.landscapeSpread.push([x]),this.pages[x].setDensity("hard"))}getSpread(){return this.render.getOrientation()==="landscape"?this.landscapeSpread:this.portraitSpread}getSpreadIndexByPage(h){const x=this.getSpread();for(let k=0;k<x.length;k++)if(h===x[k][0]||h===x[k][1])return k;return null}getPageCount(){return this.pages.length}getPages(){return this.pages}getPage(h){if(h>=0&&h<this.pages.length)return this.pages[h];throw new Error("Invalid page number")}nextBy(h){const x=this.pages.indexOf(h);return x<this.pages.length-1?this.pages[x+1]:null}prevBy(h){const x=this.pages.indexOf(h);return x>0?this.pages[x-1]:null}getFlippingPage(h){const x=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return h===0?this.pages[x].newTemporaryCopy():this.pages[x-1];{const k=h===0?this.getSpread()[x+1]:this.getSpread()[x-1];return k.length===1||h===0?this.pages[k[0]]:this.pages[k[1]]}}getBottomPage(h){const x=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return h===0?this.pages[x+1]:this.pages[x-1];{const k=h===0?this.getSpread()[x+1]:this.getSpread()[x-1];return k.length===1?this.pages[k[0]]:h===0?this.pages[k[1]]:this.pages[k[0]]}}showNext(){this.currentSpreadIndex<this.getSpread().length&&(this.currentSpreadIndex++,this.showSpread())}showPrev(){this.currentSpreadIndex>0&&(this.currentSpreadIndex--,this.showSpread())}getCurrentPageIndex(){return this.currentPageIndex}show(h=null){if(h===null&&(h=this.currentPageIndex),h<0||h>=this.pages.length)return;const x=this.getSpreadIndexByPage(h);x!==null&&(this.currentSpreadIndex=x,this.showSpread())}getCurrentSpreadIndex(){return this.currentSpreadIndex}setCurrentSpreadIndex(h){if(!(h>=0&&h<this.getSpread().length))throw new Error("Invalid page");this.currentSpreadIndex=h}showSpread(){const h=this.getSpread()[this.currentSpreadIndex];h.length===2?(this.render.setLeftPage(this.pages[h[0]]),this.render.setRightPage(this.pages[h[1]])):this.render.getOrientation()==="landscape"&&h[0]===this.pages.length-1?(this.render.setLeftPage(this.pages[h[0]]),this.render.setRightPage(null)):(this.render.setLeftPage(null),this.render.setRightPage(this.pages[h[0]])),this.currentPageIndex=h[0],this.app.updatePageIndex(this.currentPageIndex)}}class o extends s{constructor(h,x,k){super(h,x),this.imagesHref=k}load(){for(const h of this.imagesHref){const x=new r(this.render,h,"soft");x.load(),this.pages.push(x)}this.createSpread()}}class l{static GetDistanceBetweenTwoPoint(h,x){return h===null||x===null?1/0:Math.sqrt(Math.pow(x.x-h.x,2)+Math.pow(x.y-h.y,2))}static GetSegmentLength(h){return l.GetDistanceBetweenTwoPoint(h[0],h[1])}static GetAngleBetweenTwoLine(h,x){const k=h[0].y-h[1].y,D=x[0].y-x[1].y,_=h[1].x-h[0].x,C=x[1].x-x[0].x;return Math.acos((k*D+_*C)/(Math.sqrt(k*k+_*_)*Math.sqrt(D*D+C*C)))}static PointInRect(h,x){return x===null?null:x.x>=h.left&&x.x<=h.width+h.left&&x.y>=h.top&&x.y<=h.top+h.height?x:null}static GetRotatedPoint(h,x,k){return{x:h.x*Math.cos(k)+h.y*Math.sin(k)+x.x,y:h.y*Math.cos(k)-h.x*Math.sin(k)+x.y}}static LimitPointToCircle(h,x,k){if(l.GetDistanceBetweenTwoPoint(h,k)<=x)return k;const D=h.x,_=h.y,C=k.x,E=k.y;let z=Math.sqrt(Math.pow(x,2)*Math.pow(D-C,2)/(Math.pow(D-C,2)+Math.pow(_-E,2)))+D;k.x<0&&(z*=-1);let A=(z-D)*(_-E)/(D-C)+_;return D-C+_===0&&(A=x),{x:z,y:A}}static GetIntersectBetweenTwoSegment(h,x,k){return l.PointInRect(h,l.GetIntersectBeetwenTwoLine(x,k))}static GetIntersectBeetwenTwoLine(h,x){const k=h[0].y-h[1].y,D=x[0].y-x[1].y,_=h[1].x-h[0].x,C=x[1].x-x[0].x,E=h[0].x*h[1].y-h[1].x*h[0].y,z=x[0].x*x[1].y-x[1].x*x[0].y,A=k*z-D*E,L=_*z-C*E,O=-(E*C-z*_)/(k*C-D*_),W=-(k*z-D*E)/(k*C-D*_);if(isFinite(O)&&isFinite(W))return{x:O,y:W};if(Math.abs(A-L)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(h,x){const k=Math.abs(h.x-x.x),D=Math.abs(h.y-x.y),_=Math.max(k,D),C=[h];function E(z,A,L,O,W){return A>z?z+W*(L/O):A<z?z-W*(L/O):z}for(let z=1;z<=_;z+=1)C.push({x:E(h.x,x.x,k,_,z),y:E(h.y,x.y,D,_,z)});return C}}class c extends n{constructor(h,x,k){super(h,k),this.copiedElement=null,this.temporaryCopy=null,this.isLoad=!1,this.element=x,this.element.classList.add("stf__item"),this.element.classList.add("--"+k)}newTemporaryCopy(){return this.nowDrawingDensity==="hard"?this:(this.temporaryCopy===null&&(this.copiedElement=this.element.cloneNode(!0),this.element.parentElement.appendChild(this.copiedElement),this.temporaryCopy=new c(this.render,this.copiedElement,this.nowDrawingDensity)),this.getTemporaryCopy())}getTemporaryCopy(){return this.temporaryCopy}hideTemporaryCopy(){this.temporaryCopy!==null&&(this.copiedElement.remove(),this.copiedElement=null,this.temporaryCopy=null)}draw(h){const x=h||this.nowDrawingDensity,k=this.render.convertToGlobal(this.state.position),D=this.render.getRect().pageWidth,_=this.render.getRect().height;this.element.classList.remove("--simple");const C=`
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${D}px;
            height: ${_}px;
        `;x==="hard"?this.drawHard(C):this.drawSoft(k,C)}drawHard(h=""){const x=this.render.getRect().left+this.render.getRect().width/2,k=this.state.hardDrawingAngle,D=h+`
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            `+(this.orientation===0?`transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${k}deg);`:`transform-origin: 0 0; 
                   transform: translate3d(${x}px, 0, 0) rotateY(${k}deg);`);this.element.style.cssText=D}drawSoft(h,x=""){let k="polygon( ";for(const _ of this.state.area)if(_!==null){let C=this.render.getDirection()===1?{x:-_.x+this.state.position.x,y:_.y-this.state.position.y}:{x:_.x-this.state.position.x,y:_.y-this.state.position.y};C=l.GetRotatedPoint(C,{x:0,y:0},this.state.angle),k+=C.x+"px "+C.y+"px, "}k=k.slice(0,-2),k+=")";const D=x+`transform-origin: 0 0; clip-path: ${k}; -webkit-clip-path: ${k};`+(this.render.isSafari()&&this.state.angle===0?`transform: translate(${h.x}px, ${h.y}px);`:`transform: translate3d(${h.x}px, ${h.y}px, 0) rotate(${this.state.angle}rad);`);this.element.style.cssText=D}simpleDraw(h){const x=this.render.getRect(),k=x.pageWidth,D=x.height,_=h===1?x.left+x.pageWidth:x.left,C=x.top;this.element.classList.add("--simple"),this.element.style.cssText=`
            position: absolute; 
            display: block; 
            height: ${D}px; 
            left: ${_}px; 
            top: ${C}px; 
            width: ${k}px; 
            z-index: ${this.render.getSettings().startZIndex+1};`}getElement(){return this.element}load(){this.isLoad=!0}setOrientation(h){super.setOrientation(h),this.element.classList.remove("--left","--right"),this.element.classList.add(h===1?"--right":"--left")}setDrawingDensity(h){this.element.classList.remove("--soft","--hard"),this.element.classList.add("--"+h),super.setDrawingDensity(h)}}class d extends s{constructor(h,x,k,D){super(h,x),this.element=k,this.pagesElement=D}load(){for(const h of this.pagesElement){const x=new c(this.render,h,h.dataset.density==="hard"?"hard":"soft");x.load(),this.pages.push(x)}this.createSpread()}}class u{constructor(h,x,k,D){this.direction=h,this.corner=x,this.topIntersectPoint=null,this.sideIntersectPoint=null,this.bottomIntersectPoint=null,this.pageWidth=parseInt(k,10),this.pageHeight=parseInt(D,10)}calc(h){try{return this.position=this.calcAngleAndPosition(h),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){const h=[];let x=!1;return h.push(this.rect.topLeft),h.push(this.topIntersectPoint),this.sideIntersectPoint===null?x=!0:(h.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(x=!1)),h.push(this.bottomIntersectPoint),(x||this.corner==="bottom")&&h.push(this.rect.bottomLeft),h}getBottomClipArea(){const h=[];return h.push(this.topIntersectPoint),this.corner==="top"?h.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&h.push({x:this.pageWidth,y:0}),h.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?l.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&h.push(this.sideIntersectPoint):this.corner==="top"&&h.push({x:this.pageWidth,y:this.pageHeight}),h.push(this.bottomIntersectPoint),h.push(this.topIntersectPoint),h}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){const h=l.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?h:Math.PI-h}calcAngleAndPosition(h){let x=h;if(this.updateAngleAndGeometry(x),x=this.corner==="top"?this.checkPositionAtCenterLine(x,{x:0,y:0},{x:0,y:this.pageHeight}):this.checkPositionAtCenterLine(x,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(x.x-this.pageWidth)<1&&Math.abs(x.y)<1)throw new Error("Point is too small");return x}updateAngleAndGeometry(h){this.angle=this.calculateAngle(h),this.rect=this.getPageRect(h)}calculateAngle(h){const x=this.pageWidth-h.x+1,k=this.corner==="bottom"?this.pageHeight-h.y:h.y;let D=2*Math.acos(x/Math.sqrt(k*k+x*x));k<0&&(D=-D);const _=Math.PI-D;if(!isFinite(D)||_>=0&&_<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(D=-D),D}getPageRect(h){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],h):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],h)}getRectFromBasePoint(h,x){return{topLeft:this.getRotatedPoint(h[0],x),topRight:this.getRotatedPoint(h[1],x),bottomLeft:this.getRotatedPoint(h[2],x),bottomRight:this.getRotatedPoint(h[3],x)}}getRotatedPoint(h,x){return{x:h.x*Math.cos(this.angle)+h.y*Math.sin(this.angle)+x.x,y:h.y*Math.cos(this.angle)-h.x*Math.sin(this.angle)+x.y}}calculateIntersectPoint(h){const x={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=l.GetIntersectBetweenTwoSegment(x,[h,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=l.GetIntersectBetweenTwoSegment(x,[h,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=l.GetIntersectBetweenTwoSegment(x,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=l.GetIntersectBetweenTwoSegment(x,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=l.GetIntersectBetweenTwoSegment(x,[h,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=l.GetIntersectBetweenTwoSegment(x,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(h,x,k){let D=h;const _=l.LimitPointToCircle(x,this.pageWidth,D);D!==_&&(D=_,this.updateAngleAndGeometry(D));const C=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2));let E=this.rect.bottomRight,z=this.rect.topLeft;if(this.corner==="bottom"&&(E=this.rect.topRight,z=this.rect.bottomLeft),E.x<=0){const A=l.LimitPointToCircle(k,C,z);A!==D&&(D=A,this.updateAngleAndGeometry(D))}return D}getSegmentToShadowLine(){const h=this.getShadowStartPoint();return[h,h!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint]}}class p{constructor(h,x){this.flippingPage=null,this.bottomPage=null,this.calc=null,this.state="read",this.render=h,this.app=x}fold(h){this.setState("user_fold"),this.calc===null&&this.start(h),this.do(this.render.convertToPage(h))}flip(h){if(this.app.getSettings().disableFlipByClick&&!this.isPointOnCorners(h)||(this.calc!==null&&this.render.finishAnimation(),!this.start(h)))return;const x=this.getBoundsRect();this.setState("flipping");const k=x.height/10,D=this.calc.getCorner()==="bottom"?x.height-k:k,_=this.calc.getCorner()==="bottom"?x.height:0;this.calc.calc({x:x.pageWidth-k,y:D}),this.animateFlippingTo({x:x.pageWidth-k,y:D},{x:-x.pageWidth,y:_},!0)}start(h){this.reset();const x=this.render.convertToBook(h),k=this.getBoundsRect(),D=this.getDirectionByPoint(x),_=x.y>=k.height/2?"bottom":"top";if(!this.checkDirection(D))return!1;try{if(this.flippingPage=this.app.getPageCollection().getFlippingPage(D),this.bottomPage=this.app.getPageCollection().getBottomPage(D),this.render.getOrientation()==="landscape")if(D===1){const C=this.app.getPageCollection().nextBy(this.flippingPage);C!==null&&this.flippingPage.getDensity()!==C.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),C.setDrawingDensity("hard"))}else{const C=this.app.getPageCollection().prevBy(this.flippingPage);C!==null&&this.flippingPage.getDensity()!==C.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),C.setDrawingDensity("hard"))}return this.render.setDirection(D),this.calc=new u(D,_,k.pageWidth.toString(10),k.height.toString(10)),!0}catch{return!1}}do(h){if(this.calc!==null&&this.calc.calc(h)){const x=this.calc.getFlippingProgress();this.bottomPage.setArea(this.calc.getBottomClipArea()),this.bottomPage.setPosition(this.calc.getBottomPagePosition()),this.bottomPage.setAngle(0),this.bottomPage.setHardAngle(0),this.flippingPage.setArea(this.calc.getFlippingClipArea()),this.flippingPage.setPosition(this.calc.getActiveCorner()),this.flippingPage.setAngle(this.calc.getAngle()),this.calc.getDirection()===0?this.flippingPage.setHardAngle(90*(200-2*x)/100):this.flippingPage.setHardAngle(-90*(200-2*x)/100),this.render.setPageRect(this.calc.getRect()),this.render.setBottomPage(this.bottomPage),this.render.setFlippingPage(this.flippingPage),this.render.setShadowData(this.calc.getShadowStartPoint(),this.calc.getShadowAngle(),x,this.calc.getDirection())}}flipToPage(h,x){const k=this.app.getPageCollection().getCurrentSpreadIndex(),D=this.app.getPageCollection().getSpreadIndexByPage(h);try{D>k&&(this.app.getPageCollection().setCurrentSpreadIndex(D-1),this.flipNext(x)),D<k&&(this.app.getPageCollection().setCurrentSpreadIndex(D+1),this.flipPrev(x))}catch{}}flipNext(h){this.flip({x:this.render.getRect().left+2*this.render.getRect().pageWidth-10,y:h==="top"?1:this.render.getRect().height-2})}flipPrev(h){this.flip({x:10,y:h==="top"?1:this.render.getRect().height-2})}stopMove(){if(this.calc===null)return;const h=this.calc.getPosition(),x=this.getBoundsRect(),k=this.calc.getCorner()==="bottom"?x.height:0;h.x<=0?this.animateFlippingTo(h,{x:-x.pageWidth,y:k},!0):this.animateFlippingTo(h,{x:x.pageWidth,y:k},!1)}showCorner(h){if(!this.checkState("read","fold_corner"))return;const x=this.getBoundsRect(),k=x.pageWidth;if(this.isPointOnCorners(h))if(this.calc===null){if(!this.start(h))return;this.setState("fold_corner"),this.calc.calc({x:k-1,y:1});const D=50,_=this.calc.getCorner()==="bottom"?x.height-1:1,C=this.calc.getCorner()==="bottom"?x.height-D:D;this.animateFlippingTo({x:k-1,y:_},{x:k-D,y:C},!1,!1)}else this.do(this.render.convertToPage(h));else this.setState("read"),this.render.finishAnimation(),this.stopMove()}animateFlippingTo(h,x,k,D=!0){const _=l.GetCordsFromTwoPoint(h,x),C=[];for(const z of _)C.push(()=>this.do(z));const E=this.getAnimationDuration(_.length);this.render.startAnimation(C,E,()=>{this.calc&&(k&&(this.calc.getDirection()===1?this.app.turnToPrevPage():this.app.turnToNextPage()),D&&(this.render.setBottomPage(null),this.render.setFlippingPage(null),this.render.clearShadow(),this.setState("read"),this.reset()))})}getCalculation(){return this.calc}getState(){return this.state}setState(h){this.state!==h&&(this.app.updateState(h),this.state=h)}getDirectionByPoint(h){const x=this.getBoundsRect();if(this.render.getOrientation()==="portrait"){if(h.x-x.pageWidth<=x.width/5)return 1}else if(h.x<x.width/2)return 1;return 0}getAnimationDuration(h){const x=this.app.getSettings().flippingTime;return h>=1e3?x:h/1e3*x}checkDirection(h){return h===0?this.app.getCurrentPageIndex()<this.app.getPageCount()-1:this.app.getCurrentPageIndex()>=1}reset(){this.calc=null,this.flippingPage=null,this.bottomPage=null}getBoundsRect(){return this.render.getRect()}checkState(...h){for(const x of h)if(this.state===x)return!0;return!1}isPointOnCorners(h){const x=this.getBoundsRect(),k=x.pageWidth,D=Math.sqrt(Math.pow(k,2)+Math.pow(x.height,2))/5,_=this.render.convertToBook(h);return _.x>0&&_.y>0&&_.x<x.width&&_.y<x.height&&(_.x<D||_.x>x.width-D)&&(_.y<D||_.y>x.height-D)}}class f{constructor(h,x){this.leftPage=null,this.rightPage=null,this.flippingPage=null,this.bottomPage=null,this.direction=null,this.orientation=null,this.shadow=null,this.animation=null,this.pageRect=null,this.boundsRect=null,this.timer=0,this.safari=!1,this.setting=x,this.app=h;const k=new RegExp("Version\\/[\\d\\.]+.*Safari/");this.safari=k.exec(window.navigator.userAgent)!==null}render(h){if(this.animation!==null){const x=Math.round((h-this.animation.startedAt)/this.animation.durationFrame);x<this.animation.frames.length?this.animation.frames[x]():(this.animation.onAnimateEnd(),this.animation=null)}this.timer=h,this.drawFrame()}start(){this.update();const h=x=>{this.render(x),requestAnimationFrame(h)};requestAnimationFrame(h)}startAnimation(h,x,k){this.finishAnimation(),this.animation={frames:h,duration:x,durationFrame:x/h.length,onAnimateEnd:k,startedAt:this.timer}}finishAnimation(){this.animation!==null&&(this.animation.frames[this.animation.frames.length-1](),this.animation.onAnimateEnd!==null&&this.animation.onAnimateEnd()),this.animation=null}update(){this.boundsRect=null;const h=this.calculateBoundsRect();this.orientation!==h&&(this.orientation=h,this.app.updateOrientation(h))}calculateBoundsRect(){let h="landscape";const x=this.getBlockWidth(),k=x/2,D=this.getBlockHeight()/2,_=this.setting.width/this.setting.height;let C=this.setting.width,E=this.setting.height,z=k-C;return this.setting.size==="stretch"?(x<2*this.setting.minWidth&&this.app.getSettings().usePortrait&&(h="portrait"),C=h==="portrait"?this.getBlockWidth():this.getBlockWidth()/2,C>this.setting.maxWidth&&(C=this.setting.maxWidth),E=C/_,E>this.getBlockHeight()&&(E=this.getBlockHeight(),C=E*_),z=h==="portrait"?k-C/2-C:k-C):x<2*C&&this.app.getSettings().usePortrait&&(h="portrait",z=k-C/2-C),this.boundsRect={left:z,top:D-E/2,width:2*C,height:E,pageWidth:C},h}setShadowData(h,x,k,D){if(!this.app.getSettings().drawShadow)return;const _=100*this.getSettings().maxShadowOpacity;this.shadow={pos:h,angle:x,width:3*this.getRect().pageWidth/4*k/100,opacity:(100-k)*_/100/100,direction:D,progress:2*k}}clearShadow(){this.shadow=null}getBlockWidth(){return this.app.getUI().getDistElement().offsetWidth}getBlockHeight(){return this.app.getUI().getDistElement().offsetHeight}getDirection(){return this.direction}getRect(){return this.boundsRect===null&&this.calculateBoundsRect(),this.boundsRect}getSettings(){return this.app.getSettings()}getOrientation(){return this.orientation}setPageRect(h){this.pageRect=h}setDirection(h){this.direction=h}setRightPage(h){h!==null&&h.setOrientation(1),this.rightPage=h}setLeftPage(h){h!==null&&h.setOrientation(0),this.leftPage=h}setBottomPage(h){h!==null&&h.setOrientation(this.direction===1?0:1),this.bottomPage=h}setFlippingPage(h){h!==null&&h.setOrientation(this.direction===0&&this.orientation!=="portrait"?0:1),this.flippingPage=h}convertToBook(h){const x=this.getRect();return{x:h.x-x.left,y:h.y-x.top}}isSafari(){return this.safari}convertToPage(h,x){x||(x=this.direction);const k=this.getRect();return{x:x===0?h.x-k.left-k.width/2:k.width/2-h.x+k.left,y:h.y-k.top}}convertToGlobal(h,x){if(x||(x=this.direction),h==null)return null;const k=this.getRect();return{x:x===0?h.x+k.left+k.width/2:k.width/2-h.x+k.left,y:h.y+k.top}}convertRectToGlobal(h,x){return x||(x=this.direction),{topLeft:this.convertToGlobal(h.topLeft,x),topRight:this.convertToGlobal(h.topRight,x),bottomLeft:this.convertToGlobal(h.bottomLeft,x),bottomRight:this.convertToGlobal(h.bottomRight,x)}}}class g extends f{constructor(h,x,k){super(h,x),this.canvas=k,this.ctx=k.getContext("2d")}getContext(){return this.ctx}reload(){}drawFrame(){this.clear(),this.orientation!=="portrait"&&this.leftPage!=null&&this.leftPage.simpleDraw(0),this.rightPage!=null&&this.rightPage.simpleDraw(1),this.bottomPage!=null&&this.bottomPage.draw(),this.drawBookShadow(),this.flippingPage!=null&&this.flippingPage.draw(),this.shadow!=null&&(this.drawOuterShadow(),this.drawInnerShadow());const h=this.getRect();this.orientation==="portrait"&&(this.ctx.beginPath(),this.ctx.rect(h.left+h.pageWidth,h.top,h.width,h.height),this.ctx.clip())}drawBookShadow(){const h=this.getRect();this.ctx.save(),this.ctx.beginPath();const x=h.width/20;this.ctx.rect(h.left,h.top,h.width,h.height);const k={x:h.left+h.width/2-x/2,y:0};this.ctx.translate(k.x,k.y);const D=this.ctx.createLinearGradient(0,0,x,0);D.addColorStop(0,"rgba(0, 0, 0, 0)"),D.addColorStop(.4,"rgba(0, 0, 0, 0.2)"),D.addColorStop(.49,"rgba(0, 0, 0, 0.1)"),D.addColorStop(.5,"rgba(0, 0, 0, 0.5)"),D.addColorStop(.51,"rgba(0, 0, 0, 0.4)"),D.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.clip(),this.ctx.fillStyle=D,this.ctx.fillRect(0,0,x,2*h.height),this.ctx.restore()}drawOuterShadow(){const h=this.getRect();this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(h.left,h.top,h.width,h.height);const x=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y});this.ctx.translate(x.x,x.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const k=this.ctx.createLinearGradient(0,0,this.shadow.width,0);this.shadow.direction===0?(this.ctx.translate(0,-100),k.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),k.addColorStop(1,"rgba(0, 0, 0, 0)")):(this.ctx.translate(-this.shadow.width,-100),k.addColorStop(0,"rgba(0, 0, 0, 0)"),k.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")")),this.ctx.clip(),this.ctx.fillStyle=k,this.ctx.fillRect(0,0,this.shadow.width,2*h.height),this.ctx.restore()}drawInnerShadow(){const h=this.getRect();this.ctx.save(),this.ctx.beginPath();const x=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),k=this.convertRectToGlobal(this.pageRect);this.ctx.moveTo(k.topLeft.x,k.topLeft.y),this.ctx.lineTo(k.topRight.x,k.topRight.y),this.ctx.lineTo(k.bottomRight.x,k.bottomRight.y),this.ctx.lineTo(k.bottomLeft.x,k.bottomLeft.y),this.ctx.translate(x.x,x.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const D=3*this.shadow.width/4,_=this.ctx.createLinearGradient(0,0,D,0);this.shadow.direction===0?(this.ctx.translate(-D,-100),_.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")"),_.addColorStop(.9,"rgba(0, 0, 0, 0.05)"),_.addColorStop(.7,"rgba(0, 0, 0, "+this.shadow.opacity+")"),_.addColorStop(0,"rgba(0, 0, 0, 0)")):(this.ctx.translate(0,-100),_.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),_.addColorStop(.1,"rgba(0, 0, 0, 0.05)"),_.addColorStop(.3,"rgba(0, 0, 0, "+this.shadow.opacity+")"),_.addColorStop(1,"rgba(0, 0, 0, 0)")),this.ctx.clip(),this.ctx.fillStyle=_,this.ctx.fillRect(0,0,D,2*h.height),this.ctx.restore()}clear(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}}class v{constructor(h,x,k){this.touchPoint=null,this.swipeTimeout=250,this.onResize=()=>{this.update()},this.onMouseDown=_=>{if(this.checkTarget(_.target)){const C=this.getMousePos(_.clientX,_.clientY);this.app.startUserTouch(C),_.preventDefault()}},this.onTouchStart=_=>{if(this.checkTarget(_.target)&&_.changedTouches.length>0){const C=_.changedTouches[0],E=this.getMousePos(C.clientX,C.clientY);this.touchPoint={point:E,time:Date.now()},setTimeout(()=>{this.touchPoint!==null&&this.app.startUserTouch(E)},this.swipeTimeout),this.app.getSettings().mobileScrollSupport||_.preventDefault()}},this.onMouseUp=_=>{const C=this.getMousePos(_.clientX,_.clientY);this.app.userStop(C)},this.onMouseMove=_=>{const C=this.getMousePos(_.clientX,_.clientY);this.app.userMove(C,!1)},this.onTouchMove=_=>{if(_.changedTouches.length>0){const C=_.changedTouches[0],E=this.getMousePos(C.clientX,C.clientY);this.app.getSettings().mobileScrollSupport?(this.touchPoint!==null&&(Math.abs(this.touchPoint.point.x-E.x)>10||this.app.getState()!=="read")&&_.cancelable&&this.app.userMove(E,!0),this.app.getState()!=="read"&&_.preventDefault()):this.app.userMove(E,!0)}},this.onTouchEnd=_=>{if(_.changedTouches.length>0){const C=_.changedTouches[0],E=this.getMousePos(C.clientX,C.clientY);let z=!1;if(this.touchPoint!==null){const A=E.x-this.touchPoint.point.x,L=Math.abs(E.y-this.touchPoint.point.y);Math.abs(A)>this.swipeDistance&&L<2*this.swipeDistance&&Date.now()-this.touchPoint.time<this.swipeTimeout&&(A>0?this.app.flipPrev(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"):this.app.flipNext(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"),z=!0),this.touchPoint=null}this.app.userStop(E,z)}},this.parentElement=h,h.classList.add("stf__parent"),h.insertAdjacentHTML("afterbegin",'<div class="stf__wrapper"></div>'),this.wrapper=h.querySelector(".stf__wrapper"),this.app=x;const D=this.app.getSettings().usePortrait?1:2;h.style.minWidth=k.minWidth*D+"px",h.style.minHeight=k.minHeight+"px",k.size==="fixed"&&(h.style.minWidth=k.width*D+"px",h.style.minHeight=k.height+"px"),k.autoSize&&(h.style.width="100%",h.style.maxWidth=2*k.maxWidth+"px"),h.style.display="block",window.addEventListener("resize",this.onResize,!1),this.swipeDistance=k.swipeDistance}destroy(){this.app.getSettings().useMouseEvents&&this.removeHandlers(),this.distElement.remove(),this.wrapper.remove()}getDistElement(){return this.distElement}getWrapper(){return this.wrapper}setOrientationStyle(h){this.wrapper.classList.remove("--portrait","--landscape"),h==="portrait"?(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/this.app.getSettings().width*100+"%"),this.wrapper.classList.add("--portrait")):(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/(2*this.app.getSettings().width)*100+"%"),this.wrapper.classList.add("--landscape")),this.update()}removeHandlers(){window.removeEventListener("resize",this.onResize),this.distElement.removeEventListener("mousedown",this.onMouseDown),this.distElement.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("touchend",this.onTouchEnd)}setHandlers(){window.addEventListener("resize",this.onResize,!1),this.app.getSettings().useMouseEvents&&(this.distElement.addEventListener("mousedown",this.onMouseDown),this.distElement.addEventListener("touchstart",this.onTouchStart),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!this.app.getSettings().mobileScrollSupport}),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("touchend",this.onTouchEnd))}getMousePos(h,x){const k=this.distElement.getBoundingClientRect();return{x:h-k.left,y:x-k.top}}checkTarget(h){return!this.app.getSettings().clickEventForward||!["a","button"].includes(h.tagName.toLowerCase())}}class w extends v{constructor(h,x,k,D){super(h,x,k),this.wrapper.insertAdjacentHTML("afterbegin",'<div class="stf__block"></div>'),this.distElement=h.querySelector(".stf__block"),this.items=D;for(const _ of D)this.distElement.appendChild(_);this.setHandlers()}clear(){for(const h of this.items)this.parentElement.appendChild(h)}updateItems(h){this.removeHandlers(),this.distElement.innerHTML="";for(const x of h)this.distElement.appendChild(x);this.items=h,this.setHandlers()}update(){this.app.getRender().update()}}class S extends v{constructor(h,x,k){super(h,x,k),this.wrapper.innerHTML='<canvas class="stf__canvas"></canvas>',this.canvas=h.querySelectorAll("canvas")[0],this.distElement=this.canvas,this.resizeCanvas(),this.setHandlers()}resizeCanvas(){const h=getComputedStyle(this.canvas),x=parseInt(h.getPropertyValue("width"),10),k=parseInt(h.getPropertyValue("height"),10);this.canvas.width=x,this.canvas.height=k}getCanvas(){return this.canvas}update(){this.resizeCanvas(),this.app.getRender().update()}}class j extends f{constructor(h,x,k){super(h,x),this.outerShadow=null,this.innerShadow=null,this.hardShadow=null,this.hardInnerShadow=null,this.element=k,this.createShadows()}createShadows(){this.element.insertAdjacentHTML("beforeend",`<div class="stf__outerShadow"></div>
             <div class="stf__innerShadow"></div>
             <div class="stf__hardShadow"></div>
             <div class="stf__hardInnerShadow"></div>`),this.outerShadow=this.element.querySelector(".stf__outerShadow"),this.innerShadow=this.element.querySelector(".stf__innerShadow"),this.hardShadow=this.element.querySelector(".stf__hardShadow"),this.hardInnerShadow=this.element.querySelector(".stf__hardInnerShadow")}clearShadow(){super.clearShadow(),this.outerShadow.style.cssText="display: none",this.innerShadow.style.cssText="display: none",this.hardShadow.style.cssText="display: none",this.hardInnerShadow.style.cssText="display: none"}reload(){this.element.querySelector(".stf__outerShadow")||this.createShadows()}drawHardInnerShadow(){const h=this.getRect(),x=this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress;let k=(100-x)*(2.5*h.pageWidth)/100+20;k>h.pageWidth&&(k=h.pageWidth);let D=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+5).toString(10)};
            width: ${k}px;
            height: ${h.height}px;
            background: linear-gradient(to right,
                rgba(0, 0, 0, ${this.shadow.opacity*x/100}) 5%,
                rgba(0, 0, 0, 0) 100%);
            left: ${h.left+h.width/2}px;
            transform-origin: 0 0;
        `;D+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0);":"transform: translate3d(0, 0, 0) rotateY(180deg);",this.hardInnerShadow.style.cssText=D}drawHardOuterShadow(){const h=this.getRect();let x=(100-(this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress))*(2.5*h.pageWidth)/100+20;x>h.pageWidth&&(x=h.pageWidth);let k=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+4).toString(10)};
            width: ${x}px;
            height: ${h.height}px;
            background: linear-gradient(to left, rgba(0, 0, 0, ${this.shadow.opacity}) 5%, rgba(0, 0, 0, 0) 100%);
            left: ${h.left+h.width/2}px;
            transform-origin: 0 0;
        `;k+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0) rotateY(180deg);":"transform: translate3d(0, 0, 0);",this.hardShadow.style.cssText=k}drawInnerShadow(){const h=this.getRect(),x=3*this.shadow.width/4,k=this.getDirection()===0?x:0,D=this.getDirection()===0?"to left":"to right",_=this.convertToGlobal(this.shadow.pos),C=this.shadow.angle+3*Math.PI/2,E=[this.pageRect.topLeft,this.pageRect.topRight,this.pageRect.bottomRight,this.pageRect.bottomLeft];let z="polygon( ";for(const L of E){let O=this.getDirection()===1?{x:-L.x+this.shadow.pos.x,y:L.y-this.shadow.pos.y}:{x:L.x-this.shadow.pos.x,y:L.y-this.shadow.pos.y};O=l.GetRotatedPoint(O,{x:k,y:100},C),z+=O.x+"px "+O.y+"px, "}z=z.slice(0,-2),z+=")";const A=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${x}px;
            height: ${2*h.height}px;
            background: linear-gradient(${D},
                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,
                rgba(0, 0, 0, 0.05) 15%,
                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,
                rgba(0, 0, 0, 0) 100%);
            transform-origin: ${k}px 100px;
            transform: translate3d(${_.x-k}px, ${_.y-100}px, 0) rotate(${C}rad);
            clip-path: ${z};
            -webkit-clip-path: ${z};
        `;this.innerShadow.style.cssText=A}drawOuterShadow(){const h=this.getRect(),x=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),k=this.shadow.angle+3*Math.PI/2,D=this.getDirection()===1?this.shadow.width:0,_=this.getDirection()===0?"to right":"to left",C=[{x:0,y:0},{x:h.pageWidth,y:0},{x:h.pageWidth,y:h.height},{x:0,y:h.height}];let E="polygon( ";for(const A of C)if(A!==null){let L=this.getDirection()===1?{x:-A.x+this.shadow.pos.x,y:A.y-this.shadow.pos.y}:{x:A.x-this.shadow.pos.x,y:A.y-this.shadow.pos.y};L=l.GetRotatedPoint(L,{x:D,y:100},k),E+=L.x+"px "+L.y+"px, "}E=E.slice(0,-2),E+=")";const z=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2*h.height}px;
            background: linear-gradient(${_}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${D}px 100px;
            transform: translate3d(${x.x-D}px, ${x.y-100}px, 0) rotate(${k}rad);
            clip-path: ${E};
            -webkit-clip-path: ${E};
        `;this.outerShadow.style.cssText=z}drawLeftPage(){this.orientation!=="portrait"&&this.leftPage!==null&&(this.direction===1&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.leftPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.leftPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.leftPage.draw(this.flippingPage.getDrawingDensity())):this.leftPage.simpleDraw(0))}drawRightPage(){this.rightPage!==null&&(this.direction===0&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.rightPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.rightPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.rightPage.draw(this.flippingPage.getDrawingDensity())):this.rightPage.simpleDraw(1))}drawBottomPage(){if(this.bottomPage===null)return;const h=this.flippingPage!=null?this.flippingPage.getDrawingDensity():null;this.orientation==="portrait"&&this.direction===1||(this.bottomPage.getElement().style.zIndex=(this.getSettings().startZIndex+3).toString(10),this.bottomPage.draw(h))}drawFrame(){this.clear(),this.drawLeftPage(),this.drawRightPage(),this.drawBottomPage(),this.flippingPage!=null&&(this.flippingPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.flippingPage.draw()),this.shadow!=null&&this.flippingPage!==null&&(this.flippingPage.getDrawingDensity()==="soft"?(this.drawOuterShadow(),this.drawInnerShadow()):(this.drawHardOuterShadow(),this.drawHardInnerShadow()))}clear(){for(const h of this.app.getPageCollection().getPages())h!==this.leftPage&&h!==this.rightPage&&h!==this.flippingPage&&h!==this.bottomPage&&(h.getElement().style.cssText="display: none"),h.getTemporaryCopy()!==this.flippingPage&&h.hideTemporaryCopy()}update(){super.update(),this.rightPage!==null&&this.rightPage.setOrientation(1),this.leftPage!==null&&this.leftPage.setOrientation(0)}}class b{constructor(){this._default={startPage:0,size:"fixed",width:0,height:0,minWidth:0,maxWidth:0,minHeight:0,maxHeight:0,drawShadow:!0,flippingTime:1e3,usePortrait:!0,startZIndex:0,autoSize:!0,maxShadowOpacity:1,showCover:!1,mobileScrollSupport:!0,swipeDistance:30,clickEventForward:!0,useMouseEvents:!0,showPageCorners:!0,disableFlipByClick:!1}}getSettings(h){const x=this._default;if(Object.assign(x,h),x.size!=="stretch"&&x.size!=="fixed")throw new Error('Invalid size type. Available only "fixed" and "stretch" value');if(x.width<=0||x.height<=0)throw new Error("Invalid width or height");if(x.flippingTime<=0)throw new Error("Invalid flipping time");return x.size==="stretch"?(x.minWidth<=0&&(x.minWidth=100),x.maxWidth<x.minWidth&&(x.maxWidth=2e3),x.minHeight<=0&&(x.minHeight=100),x.maxHeight<x.minHeight&&(x.maxHeight=2e3)):(x.minWidth=x.width,x.maxWidth=x.width,x.minHeight=x.height,x.maxHeight=x.height),x}}(function(y,h){h===void 0&&(h={});var x=h.insertAt;if(y&&typeof document<"u"){var k=document.head||document.getElementsByTagName("head")[0],D=document.createElement("style");D.type="text/css",x==="top"&&k.firstChild?k.insertBefore(D,k.firstChild):k.appendChild(D),D.styleSheet?D.styleSheet.cssText=y:D.appendChild(document.createTextNode(y))}})(`.stf__parent {
  position: relative;
  display: block;
  box-sizing: border-box;
  transform: translateZ(0);

  -ms-touch-action: pan-y;
  touch-action: pan-y;
}

.sft__wrapper {
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.stf__parent canvas {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.stf__block {
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  perspective: 2000px;
}

.stf__item {
  display: none;
  position: absolute;
  transform-style: preserve-3d;
}

.stf__outerShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__innerShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__hardShadow {
  position: absolute;
  left: 0;
  top: 0;
}

.stf__hardInnerShadow {
  position: absolute;
  left: 0;
  top: 0;
}`),i.PageFlip=class extends class{constructor(){this.events=new Map}on(y,h){return this.events.has(y)?this.events.get(y).push(h):this.events.set(y,[h]),this}off(y){this.events.delete(y)}trigger(y,h,x=null){if(this.events.has(y))for(const k of this.events.get(y))k({data:x,object:h})}}{constructor(y,h){super(),this.isUserTouch=!1,this.isUserMove=!1,this.setting=null,this.pages=null,this.setting=new b().getSettings(h),this.block=y}destroy(){this.ui.destroy(),this.block.remove()}update(){this.render.update(),this.pages.show()}loadFromImages(y){this.ui=new S(this.block,this,this.setting);const h=this.ui.getCanvas();this.render=new g(this,this.setting,h),this.flipController=new p(this.render,this),this.pages=new o(this,this.render,y),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}loadFromHTML(y){this.ui=new w(this.block,this,this.setting,y),this.render=new j(this,this.setting,this.ui.getDistElement()),this.flipController=new p(this.render,this),this.pages=new d(this,this.render,this.ui.getDistElement(),y),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}updateFromImages(y){const h=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new o(this,this.render,y),this.pages.load(),this.pages.show(h),this.trigger("update",this,{page:h,mode:this.render.getOrientation()})}updateFromHtml(y){const h=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new d(this,this.render,this.ui.getDistElement(),y),this.pages.load(),this.ui.updateItems(y),this.render.reload(),this.pages.show(h),this.trigger("update",this,{page:h,mode:this.render.getOrientation()})}clear(){this.pages.destroy(),this.ui.clear()}turnToPrevPage(){this.pages.showPrev()}turnToNextPage(){this.pages.showNext()}turnToPage(y){this.pages.show(y)}flipNext(y="top"){this.flipController.flipNext(y)}flipPrev(y="top"){this.flipController.flipPrev(y)}flip(y,h="top"){this.flipController.flipToPage(y,h)}updateState(y){this.trigger("changeState",this,y)}updatePageIndex(y){this.trigger("flip",this,y)}updateOrientation(y){this.ui.setOrientationStyle(y),this.update(),this.trigger("changeOrientation",this,y)}getPageCount(){return this.pages.getPageCount()}getCurrentPageIndex(){return this.pages.getCurrentPageIndex()}getPage(y){return this.pages.getPage(y)}getRender(){return this.render}getFlipController(){return this.flipController}getOrientation(){return this.render.getOrientation()}getBoundsRect(){return this.render.getRect()}getSettings(){return this.setting}getUI(){return this.ui}getState(){return this.flipController.getState()}getPageCollection(){return this.pages}startUserTouch(y){this.mousePosition=y,this.isUserTouch=!0,this.isUserMove=!1}userMove(y,h){this.isUserTouch||h||!this.setting.showPageCorners?this.isUserTouch&&l.GetDistanceBetweenTwoPoint(this.mousePosition,y)>5&&(this.isUserMove=!0,this.flipController.fold(y)):this.flipController.showCorner(y)}userStop(y,h=!1){this.isUserTouch&&(this.isUserTouch=!1,h||(this.isUserMove?this.flipController.stopMove():this.flipController.flip(y)))}},Object.defineProperty(i,"__esModule",{value:!0})})})(ax,ax.exports);var z$=ax.exports;const F$=q.forwardRef((t,e)=>{const i=T.useRef(null),n=T.useRef([]),r=T.useRef(),[s,o]=T.useState([]);T.useImperativeHandle(e,()=>({pageFlip:()=>r.current}));const l=T.useCallback(()=>{r.current&&r.current.clear()},[]),c=T.useCallback(()=>{const d=r.current;d&&(d.off("flip"),d.off("changeOrientation"),d.off("changeState"),d.off("init"),d.off("update"))},[]);return T.useEffect(()=>{if(n.current=[],t.children){const d=q.Children.map(t.children,u=>q.cloneElement(u,{ref:p=>{p&&n.current.push(p)}}));(!t.renderOnlyPageLengthChange||s.length!==d.length)&&(d.length<s.length&&l(),o(d))}},[t.children]),T.useEffect(()=>{const d=()=>{const u=r.current;u&&(t.onFlip&&u.on("flip",p=>t.onFlip(p)),t.onChangeOrientation&&u.on("changeOrientation",p=>t.onChangeOrientation(p)),t.onChangeState&&u.on("changeState",p=>t.onChangeState(p)),t.onInit&&u.on("init",p=>t.onInit(p)),t.onUpdate&&u.on("update",p=>t.onUpdate(p)))};s.length>0&&n.current.length>0&&(c(),i.current&&!r.current&&(r.current=new z$.PageFlip(i.current,t)),r.current.getFlipController()?r.current.updateFromHtml(n.current):r.current.loadFromHTML(n.current),d())},[s]),q.createElement("div",{ref:i,className:t.className,style:t.style},s)}),R$=q.memo(F$),L$="/assets/Brand-Book-1.aed8b9cd.png",O$="/assets/Brand-Book-2.7731f876.png",$$="/assets/Brand-Book-3.38331a08.png",B$="/assets/Brand-Book-4.61d5cc73.png",N$="/assets/Brand-Book-5.da16f760.png",V$="/assets/Brand-Book-6.1768ad61.png",W$="/assets/Brand-Book-7.f9b41058.png",U$="/assets/Brand-Book-8.3ec2252f.png",H$="/assets/Brand-Book-9.245203a3.png",Y$="/assets/Brand-Book-10.c644188d.png",G$="/assets/Brand-Book-11.fe776231.png",X$="/assets/Brand-Book-12.c5ba26ce.png",Z$="/assets/Brand-Book-13.2d4ec13b.png",q$="/assets/Brand-Book-14.b7fe6d1a.png",Q$="/assets/Brand-Book-15.4a94aa2b.png",K$="/assets/Brand-Book-16.16bdb77b.png",J$="/assets/Brand-Book-17.d47c2494.png",eB="/assets/Brand-Book-18.005ef503.png",tB="/assets/Brand-Book-19.2b0aceb0.png",iB="/assets/Brand-Book-20.03ab72dc.png",nB="/assets/Brand-Book-21.72d8daf3.png",rB="/assets/Brand-Book-22.e37eb36d.png",sB="/assets/Brand-Book-23.5a5dcf39.png",oB="/assets/Brand-Book-24.2d6a2bac.png",aB="/assets/Brand-Book-25.a612f85b.png",lB="/assets/Brand-Book-26.69a075d6.png",cB="/assets/Brand-Book-27.a9cc178b.png",dB="/assets/Brand-Book-28.d4b813b5.png",uB="/assets/Brand-Book-29.3a458449.png",hB="/assets/Brand-Book-30.9ed29b6f.png",pB="/assets/Brand-Book-31.0082231b.png",fB="/assets/Brand-Book-32.b86f8071.png",mB="/assets/Brand-Book-33.114f0b9b.png",gB="/assets/Brand-Book-34.59db362b.png",xB="/assets/Brand-Book-35.4190176b.png",wB="/assets/Brand-Book-36.cb7ba05f.png",yB="/assets/Brand-Book-37.e76ac7b7.png",vB=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: #fff;
  /* border: 2px solid red; */
`,bB=m.div`
  margin-bottom: 2rem;
  padding: 2rem 0;
  width: 600px;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: 98vw;
    max-width: 98vw;
    padding: 0.5rem 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
  @media (max-width: 600px) {
    width: 99vw;
    max-width: 99vw;
    padding: 0.25rem 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`,kB=m.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
`,kb=m.button`
  padding: 0.75rem 1.5rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
  
  &:hover {
    background: #555;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`,jB=m.span`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,DB=m.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid #ddd;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
`;m.h1`
  color: #333;
  font-size: 2rem;
  text-align: center;
`;const SB=()=>{const t=T.useRef(null),[e,i]=T.useState(2);console.log("FlipBook component rendering");const n=[L$,O$,$$,B$,N$,V$,W$,U$,H$,Y$,G$,X$,Z$,q$,Q$,K$,J$,eB,tB,iB,nB,rB,sB,oB,aB,lB,cB,dB,uB,hB,pB,fB,mB,gB,xB,wB,yB];console.log("Pages array length:",n.length);const r=()=>{t.current&&t.current.pageFlip().flipNext()},s=()=>{t.current&&t.current.pageFlip().flipPrev()},o=l=>{i(l.data+1)};return a.jsxs(vB,{id:"veen-brand-book",children:[a.jsx("h2",{style:{marginBottom:"1rem",fontWeight:700,fontSize:"2.2rem",color:"#222",letterSpacing:"-1px"},children:"Brand Book"}),a.jsxs(bB,{children:[a.jsxs("p",{style:{display:"none"},children:["Total pages: ",n.length]}),a.jsxs("p",{style:{display:"none"},children:["Current page: ",e]}),a.jsx(R$,{ref:t,width:window.innerWidth<600?320:window.innerWidth<900?400:580,height:window.innerWidth<600?320:window.innerWidth<900?400:580,size:"stretch",minWidth:200,maxWidth:700,minHeight:200,maxHeight:700,showCover:!0,flippingTime:1e3,usePortrait:!1,startPage:1,drawShadow:!0,className:"demo-book",style:{margin:"0 auto",display:"block",width:"100%",maxWidth:"100vw",boxSizing:"border-box",overflowX:"hidden"},onFlip:o,onInit:()=>{i(2)},children:n.map((l,c)=>a.jsx(DB,{className:"demoPage",children:a.jsx("img",{src:l,alt:`Page ${c+1}`})},c))})]}),a.jsxs(kB,{children:[a.jsx(kb,{onClick:s,disabled:e<=1,children:"Previous"}),a.jsxs(jB,{children:["Page ",e," of ",n.length]}),a.jsx(kb,{onClick:r,disabled:e>=n.length,children:"Next"})]})]})},tr=m.span`
  color: #9ed4d1;
  font-weight: 600;
`,_B=[{title:"Logo",description:a.jsxs(a.Fragment,{children:["Create a logo that is personal, soft, and ",a.jsx(tr,{children:"memorable"})," with a ",a.jsx(tr,{children:"hidden meaning"})," that connects to ",a.jsx(tr,{children:"photography"})," and ",a.jsx(tr,{children:"family"}),"."]})},{title:"Color Palette",description:a.jsxs(a.Fragment,{children:["Find colors that express ",a.jsx(tr,{children:"warmth"}),", ",a.jsx(tr,{children:"trust"}),", and ",a.jsx(tr,{children:"joy"}),", while keeping the tone modern and soft not too bold or cold."]})},{title:"Typography",description:a.jsxs(a.Fragment,{children:["Choose fonts that feel ",a.jsx(tr,{children:"friendly"}),", ",a.jsx(tr,{children:"clean"}),", and professional readable for both digital and print use."]})},{title:"Social Media",description:a.jsx(a.Fragment,{children:"Design social visuals that align with the brand values and look cohesive, warm, and creative across platforms."})}],CB=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`,PB=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`,TB=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`,EB=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.2rem;
`,IB=m.div`
  min-width: 180px;
  max-width: 240px;
  background: #fff;
  border-radius: 1.2rem;
  border: 2px solid #9ed4d1;
  box-shadow: none;
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.18s, box-shadow 0.18s;
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(80, 79, 81, 0.13);
  }
`,AB=m.div`
  font-size: 1.01rem;
  font-weight: 600;
  color: #888;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-align: center;
`,MB=m.div`
  font-weight: 400;
  font-size: 1.08rem;
  color: #222;
  line-height: 1.5;
  letter-spacing: -0.1px;
  text-align: center;
`;function zB(){return a.jsxs(CB,{id:"veen-challenges",children:[a.jsx(PB,{children:"Key Challenges"}),a.jsx(TB,{children:"The project required solving four main creative challenges to build a cohesive, expressive brand identity for Veen."}),a.jsx(EB,{children:_B.map(t=>a.jsxs(IB,{children:[a.jsx(AB,{children:t.title}),a.jsx(MB,{children:t.description})]},t.title))})]})}const FB=m.div`
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  padding: 1.5rem 1rem;
  max-width: 200px;
  min-width: 160px;
  
  /* Hide on mobile and tablet */
  @media (max-width: 1024px) {
    display: none;
  }
`,RB=m.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: left;
`,LB=m.button`
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.75rem 0.5rem;
  margin: 0.25rem 0;
  font-size: 0.9rem;
  font-weight: ${t=>t.isClicked?"700":t.isActive?"600":"400"};
  color: ${t=>t.isClicked||t.isActive?"#000000":"#888888"};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  border-radius: 4px;

  &:hover {
    color: #000000;
    background: rgba(0, 0, 0, 0.05);
  }
`,C0=[{id:"overview",label:"Overview",targetId:"veen-first"},{id:"challenges",label:"Key Challenges",targetId:"veen-problem"},{id:"logo",label:"Logo Design",targetId:"veen-logo"},{id:"color",label:"Color Palette",targetId:"veen-color"},{id:"typography",label:"Typography",targetId:"veen-typography"},{id:"brand-book",label:"Brand Book",targetId:"veen-brand-book"},{id:"mockups",label:"Mockups",targetId:"veen-mockups"}],OB=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("overview");q.useEffect(()=>{const s={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},o=new IntersectionObserver(l=>{l.forEach(c=>{if(c.isIntersecting){const d=c.target.id,u=C0.find(p=>p.targetId===d);u&&n(u.id)}})},s);return C0.forEach(l=>{const c=document.getElementById(l.targetId);c&&o.observe(c)}),()=>{o.disconnect()}},[]);const r=(s,o)=>{const l=document.getElementById(s);l&&(l.scrollIntoView({behavior:"smooth",block:"center"}),e(o))};return a.jsxs(FB,{children:[a.jsx(RB,{children:"Menu"}),C0.map(s=>a.jsx(LB,{isActive:i===s.id,isClicked:t===s.id,onClick:()=>r(s.targetId,s.id),children:s.label},s.id))]})},$B=()=>{const t=()=>{const e=document.querySelector("#veen-first");e&&e.scrollIntoView({behavior:"smooth",block:"start"})};return a.jsx("div",{style:{position:"fixed",bottom:"24px",right:"24px",zIndex:9999,pointerEvents:"auto"},children:a.jsx("button",{onClick:t,style:{width:"48px",height:"48px",backgroundColor:"rgba(255, 255, 255, 0.9)",borderRadius:"50%",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",color:"#333",backdropFilter:"blur(10px)",boxShadow:"0 2px 8px rgba(0,0,0,0.1)",transition:"all 0.2s ease",border:"none"},"aria-label":"Scroll to top",onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-2px)",e.currentTarget.style.boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.1)"},children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M12 4L12 20M12 4L6 10M12 4L18 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})},BB=m.div`
  min-height: 100vh;
  width: 100vw;
  background: #fff;
  transition: background 0.2s;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  position: fixed;
  inset: 0;
  z-index: 0;
  padding-top: 80px;
  @media (max-width: 600px) {
    padding-top: 60px;
    padding-left: 8px;
    padding-right: 8px;
    width: 100%;
  }
`;Cr`
  body {
    background: #fff;
    margin: 0;
    padding: 0;
    overflow-y: auto;
  }
  html {
    overflow-x: hidden;
  }
`;const NB=()=>a.jsxs(a.Fragment,{children:[a.jsxs(BB,{children:[a.jsx(st,{title:"Veen Project | Nooshin Shahsavan - Brand Identity & Design",description:"Explore the Veen project - a sophisticated branding project by Nooshin Shahsavan creating an elegant and timeless visual identity with premium aesthetics.",keywords:"Veen project, brand identity, logo design, visual design, branding, Nooshin Shahsavan, design portfolio",image:"/src/assets/veen/brand-strategy.png"}),a.jsx(OB,{}),a.jsx("div",{id:"veen-first",children:a.jsx(yO,{})}),a.jsx("div",{id:"veen-second",children:a.jsx(CO,{})}),a.jsx("div",{id:"veen-problem",children:a.jsx(zB,{})}),a.jsxs("div",{id:"veen-logo",children:[a.jsx(zO,{}),a.jsx(M$,{})]}),a.jsx("div",{id:"veen-color",children:a.jsx(BO,{})}),a.jsx("div",{id:"veen-typography",children:a.jsx(n$,{})}),a.jsxs("div",{id:"veen-brand-book",children:[a.jsx(d$,{}),a.jsx(SB,{})]}),a.jsxs("div",{id:"veen-mockups",children:[a.jsx("h2",{style:{width:"70vw",margin:"2.5rem auto 1.5rem auto",textAlign:"center",fontSize:"2.5rem",fontWeight:700,letterSpacing:"0.04em",color:"#222",background:"transparent",border:"none"},children:"Mockups"}),a.jsx(HO,{}),a.jsx(qO,{}),a.jsx(m$,{}),a.jsx(v$,{})]}),a.jsx(No,{}),a.jsx($o,{})]}),a.jsx($B,{})]}),VB="/assets/deli1.87111f97.mp4",WB=m.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,UB=m.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`,HB=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`,YB=m.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 900px) {
    width: 350px;
    max-width: 95vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    margin-bottom: 1.2rem;
  }
`,GB=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,XB=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.2rem;
  @media (max-width: 900px) {
    gap: 1.2rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }
`,Du=m.div`
  min-width: 120px;
  text-align: center;
`,Su=m.div`
  font-size: 0.92rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 0.2em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,_u=m.div`
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
`,ZB=()=>a.jsxs(WB,{id:"deli-overview",children:[a.jsx(UB,{children:"Delicato — Overview"}),a.jsx(HB,{children:"Delicato is a small interior design company from Italy, inspired by the classical architecture of ancient Rome. The brand’s core value is to create spaces that blend the richness of historical elements with modern aesthetics, bringing timeless elegance into contemporary living."}),a.jsx(YB,{children:a.jsx(GB,{src:VB,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Delicato project video"})}),a.jsxs(XB,{children:[a.jsxs(Du,{children:[a.jsx(Su,{children:"Role"}),a.jsx(_u,{children:"Brand Designer"})]}),a.jsxs(Du,{children:[a.jsx(Su,{children:"Tools"}),a.jsx(_u,{children:"Illustrator, Photoshop, After Effects"})]}),a.jsxs(Du,{children:[a.jsx(Su,{children:"Timeline"}),a.jsx(_u,{children:"4 weeks"})]}),a.jsxs(Du,{children:[a.jsx(Su,{children:"Year"}),a.jsx(_u,{children:"2024"})]})]})]}),qB="/assets/deli2.41d6e489.mp4",QB=m.section`
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 900px) {
    height: auto;
    padding: 18px 0 12px 0;
    margin: 0;
  }
  @media (max-width: 600px) {
    height: auto;
    padding: 8px 0 4px 0;
    margin: 0;
  }
`,KB=m.div`
  width: 70vw;
  max-width: 1100px;
  aspect-ratio: 16/9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 95vw;
    max-width: 95vw;
    aspect-ratio: 16/9;
    padding: 0;
    margin: 0;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    aspect-ratio: 16/9;
    margin-bottom: 1.2rem;
  }
`,JB=m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  display: block;
  box-sizing: border-box;
  @media (max-width: 900px) {
    border-radius: 1rem;
  }
  @media (max-width: 600px) {
    border-radius: 0.7rem;
  }
`,eN=m.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    height: auto;
    padding: 0;
  }
  @media (max-width: 600px) {
    height: auto;
    padding: 0;
  }
`,tN=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 2.2rem auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
    margin: 1.2rem auto 1.2rem auto;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin: 0.8rem auto 1rem auto;
  }
`,iN=m.div`
  color: #b48a3b;
  font-size: 1.08rem;
  font-weight: 400;
  margin: 1.5rem auto 0 auto;
  text-align: center;
  letter-spacing: 0.01em;
  width: auto;
  /* No background, no border-radius, no extra padding */
  box-shadow: none;
  @media (max-width: 900px) {
    font-size: 1rem;
    margin-top: 1rem;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-top: 0.7rem;
  }
`,nN=()=>a.jsx(QB,{children:a.jsxs(eN,{children:[a.jsx(KB,{children:a.jsx(JB,{src:qB,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Delicato video"})}),a.jsx(tN,{children:"This project was a rewarding opportunity to combine my passion for art history with design. It allowed me to revisit favorite references like Art Through the Ages by Helen Gardner and The Story of Art by Ernst Gombrich.For this project, I was responsible for developing the entire brand identity from logo, color palette, and typography to final mockups."}),a.jsx(iN,{children:"Aim➝ Inspiration from classical Roman architecture ➝ Timeless brand identity ➝ Blend of historical elegance and modern design"})]})}),rN=m.section`
  width: 100vw;
  min-height: 60vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,sN=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`,oN=m.div`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`,jb=m.div`
  font-size: 0.98rem;
  color: #888;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 1.2em;
  margin-bottom: 0.3em;
`,Ws=m.span`
  color: #b48a3b;
  font-weight: 400;
`,aN=()=>a.jsxs(rN,{children:[a.jsx(sN,{children:"Logo Design"}),a.jsxs(oN,{children:[a.jsx(jb,{children:"I drew inspiration"}),"From the ",a.jsx(Ws,{children:"iconic classical columns"}),", which are widely recognized ",a.jsx(Ws,{children:"symbols"})," of that era. I developed a ",a.jsx(Ws,{children:"minimal"}),", ",a.jsx(Ws,{children:"elegant"}),' symbol that merges with the letter "D" in "Delicato".',a.jsx(jb,{children:"The column is"}),"Abstracted into a balance of ",a.jsx(Ws,{children:"positive and negative"})," space, evoking both strength and delicacy. A subtle ",a.jsx(Ws,{children:"break"})," in the lower curved line represents the passage of time, the ",a.jsx(Ws,{children:"separation and connection"})," between classical and modern eras. The overall form is clean and memorable, encapsulating the brand's concept of timeless elegance."]})]}),lN="/assets/deli4.497079d2.mp4",cN="/assets/deli5.60fb829b.mp4",dN=m.section`
  width: 100vw;
  height:100vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  box-sizing: border-box;
  @media (max-width: 900px) {
    height: auto;
    padding: 1rem 0;
  }
  @media (max-width: 600px) {
    height: auto;
    padding: 0.5rem 0;
  }
`,uN=m.div`
  width: 100vw;
  height: 100vh;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 0 2rem;
  box-sizing: border-box;
  place-items: center;
  justify-items: center;
  align-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 0.5rem;
    height: auto;
  }
  @media (max-width: 600px) {
    gap: 1rem;
    padding: 0 0.2rem;
    height: auto;
  }
`,Db=m.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`,Sb=m.div`
  width: 100%;
  max-width: 600px;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 900px) {
    max-width: 100vw;
    aspect-ratio: 1 / 1;
  }
`,_b=m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 16px;
  box-sizing: border-box;
`,hN=()=>a.jsx(dN,{children:a.jsxs(uN,{children:[a.jsx(Db,{children:a.jsx(Sb,{children:a.jsx(_b,{src:lN,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Deli video 4"})})}),a.jsx(Db,{children:a.jsx(Sb,{children:a.jsx(_b,{src:cN,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Deli video 5"})})})]})}),pN="/assets/deli6.d0af3bb2.mp4",fN=m.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,mN=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`,gN=m.div`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`,xN=m.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 900px) {
    width: 350px;
    max-width: 95vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    margin-bottom: 1.2rem;
  }
`,wN=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,yN=()=>{const t=T.useRef(null),[e,i]=T.useState(!1);return T.useEffect(()=>{const n=()=>{if(!e&&t.current){const r=t.current.getBoundingClientRect();r.top<window.innerHeight&&r.bottom>0&&(t.current.play(),i(!0))}};return window.addEventListener("scroll",n),n(),()=>window.removeEventListener("scroll",n)},[e]),a.jsxs(fN,{children:[a.jsx(mN,{children:"Color Palette"}),a.jsx(gN,{children:"I chose colors that, in every era, evoke memories of architecture, interior design, and architectural materials, such as the colors of brick, stone, and earth."}),a.jsx(xN,{children:a.jsx(wN,{ref:t,src:pN,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Color palette video"})})]})},vN="/assets/deli7.5c1f49b2.mp4",bN=m.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,kN=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`,jN=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`,DN=m.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 900px) {
    width: 350px;
    max-width: 95vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    margin-bottom: 1.2rem;
  }
`,SN=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,_N=()=>a.jsxs(bN,{id:"deli-typography",children:[a.jsx(kN,{children:"Typography"}),a.jsx(jN,{children:"I chose Gyst Variable for its contemporary yet classic feel, and paired it with Roc Grotesk a clean, highly legible sans-serif ideal for web use."}),a.jsx(DN,{children:a.jsx(SN,{src:vN,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Typography video"})})]}),CN=m.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 2.5rem 0;
  @media (max-width: 900px) {
    width: 100vw;
    padding: 0;
    margin: 1.5rem 0;
  }
  @media (max-width: 600px) {
    margin: 1rem 0;
  }
`,PN=m.h2`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  letter-spacing: 0.04em;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`,TN=m.img`
  width: 70vw;
  max-width: 1100px;
  height: auto;
  object-fit: cover;
  display: block;
  margin: 0 auto;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
  }
`,EN=()=>{const[t,e]=q.useState(!1);return a.jsxs(CN,{children:[a.jsx(PN,{children:"Mockups"}),t?a.jsx("div",{style:{color:"white",fontSize:24},children:"Image failed to load"}):a.jsx(TN,{src:v4,alt:"Deli 8",onError:()=>e(!0)})]})},IN="/assets/deli12.00fb3c37.jpg",AN=m.section`
  width: 100vw;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
  margin: 2.5rem 0;
  @media (max-width: 900px) {
    width: 100vw;
    padding: 0;
    margin: 1.5rem 0;
  }
  @media (max-width: 600px) {
    margin: 1rem 0;
  }
`,MN=m.div`
  width: 70vw;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
  }
`,zN=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,FN=()=>a.jsx(AN,{children:a.jsx(MN,{children:a.jsx(zN,{src:IN,alt:"Deli 12"})})}),RN="/assets/delistory.8abf3468.mp4",LN=m.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0;
  
  @media (max-width: 900px) {
    margin: 1.5rem 0;
  }
  @media (max-width: 600px) {
    margin: 1rem 0;
  }
`,ON=m.div`
  width: 70vw;
  max-width: 1100px;
  aspect-ratio: 16/9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: #000;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
  }
`,$N=m.video`
  width: 40%;
  height: auto;
  display: block;
  background: transparent;
`,BN=()=>a.jsx(LN,{children:a.jsx(ON,{children:a.jsx($N,{src:RN,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!0})})}),NN="/assets/delistory2.6f7abd8c.png",VN=m.section`
  width: 100vw;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
  margin: 2.5rem 0;
  @media (max-width: 900px) {
    width: 100vw;
    padding: 0;
    margin: 1.5rem 0;
  }
  @media (max-width: 600px) {
    margin: 1rem 0;
  }
`,WN=m.div`
  width: 70vw;
  max-width: 1100px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
  }
`,UN=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,HN=()=>a.jsx(VN,{children:a.jsx(WN,{children:a.jsx(UN,{src:NN,alt:"Deli Story 2"})})}),YN="/assets/deliweb.60e10190.mp4",GN=m.section`
  width: 100vw;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
  margin: 2.5rem 0;
  @media (max-width: 900px) {
    width: 100vw;
    padding: 0;
    margin: 1.5rem 0;
  }
  @media (max-width: 600px) {
    margin: 1rem 0;
  }
`,XN=m.div`
  width: 70vw;
  max-width: 1100px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
  }
`,ZN=m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,qN=()=>a.jsx(GN,{children:a.jsx(XN,{children:a.jsx(ZN,{src:YN,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1})})}),QN="/assets/deli11.8ce54a26.png",KN=m.section`
  width: 100vw;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
  margin: 2.5rem 0;
  @media (max-width: 900px) {
    width: 100vw;
    padding: 0;
    margin: 1.5rem 0;
  }
  @media (max-width: 600px) {
    margin: 1rem 0;
  }
`,JN=m.div`
  width: 70vw;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
  }
`,eV=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,tV=()=>a.jsx(KN,{children:a.jsx(JN,{children:a.jsx(eV,{src:QN,alt:"Deli 11"})})}),iV="/assets/deli13.83ec81c5.jpg",nV=m.section`
  width: 100vw;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
  margin: 2.5rem 0;
  @media (max-width: 900px) {
    width: 100vw;
    padding: 0;
    margin: 1.5rem 0;
  }
  @media (max-width: 600px) {
    margin: 1rem 0;
  }
`,rV=m.div`
  width: 70vw;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
  }
`,sV=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,oV=()=>a.jsx(nV,{children:a.jsx(rV,{children:a.jsx(sV,{src:iV,alt:"Deli 13"})})}),aV="/assets/carrd.238e693c.png",lV=m.section`
  width: 100vw;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 2.5rem 0;
  @media (max-width: 900px) {
    margin: 1.5rem 0;
  }
  @media (max-width: 600px) {
    margin: 1rem 0;
  }
`,cV=m.div`
  width: 70vw;
  max-width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
  }
`,dV=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,uV=()=>a.jsx(lV,{children:a.jsx(cV,{children:a.jsx(dV,{src:aV,alt:"Card Mockup"})})}),hV=[new URL("/assets/d1.7971c3a9.png",self.location).href,new URL("/assets/d2.094353a7.jpg",self.location).href,new URL("/assets/d3.54dad30d.png",self.location).href,new URL("/assets/d4.db60ea51.png",self.location).href],pV=m.section`
  width: 100vw;
  min-height: 60vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,fV=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`,mV=m.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    gap: 1rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }
`,gV=m.div`
  width: 260px;
  height: 260px;
  background: #f7f7f7;
  border-radius: 1.2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  flex: 0 0 auto;
  border: 2px solid #b48a3b;
  transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s;
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(80, 79, 81, 0.13);
    border-color: #b48a3b;
  }
  @media (max-width: 900px) {
    width: 180px;
    height: 180px;
  }
  @media (max-width: 600px) {
    width: 90vw;
    height: 90vw;
    max-width: 98vw;
    max-height: 98vw;
  }
`,xV=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;function wV(){return a.jsxs(pV,{id:"deli-logo",children:[a.jsx(fV,{children:"Logo Explorations"}),a.jsx(mV,{children:hV.map((t,e)=>a.jsx(gV,{children:a.jsx(xV,{src:t,alt:`logo-exploration-${e}`,loading:"lazy"})},t+e))})]})}const ta=m.span`
  color: #b48a3b;
  font-weight: 400;
`,yV=[{title:"Logo",description:a.jsxs(a.Fragment,{children:["Design a logo that blends ",a.jsx(ta,{children:"classical Roman"})," inspiration with a ",a.jsx(ta,{children:"modern minimalist"})," identity."]})},{title:"Color Palette",description:a.jsxs(a.Fragment,{children:["Choose colors that reflect ",a.jsx(ta,{children:"historical elegance"}),", while also feeling warm, safe, and approachable for ",a.jsx(ta,{children:"modern"})," families."]})},{title:"Typography",description:a.jsxs(a.Fragment,{children:["Use typography that combines a sense of ",a.jsx(ta,{children:"classical luxury"})," with ",a.jsx(ta,{children:"modern readability"})," for both print and digital platforms."]})},{title:"Visual Tone",description:a.jsx(a.Fragment,{children:"Design social visuals that align with the brand values and look cohesive, warm, and creative across platforms."})}],vV=m.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,bV=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`,kV=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`,jV=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.2rem;
  @media (max-width: 900px) {
    gap: 1.2rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }
`,DV=m.div`
  min-width: 180px;
  max-width: 240px;
  background: #fff;
  border-radius: 1.2rem;
  border: 2px solid #b48a3b;
  box-shadow: none;
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s;
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(80, 79, 81, 0.13);
    border-color: #b48a3b;
  }
  @media (max-width: 900px) {
    min-width: 140px;
    max-width: 180px;
    padding: 1rem 0.8rem;
  }
  @media (max-width: 600px) {
    min-width: 90vw;
    max-width: 98vw;
    padding: 0.8rem 0.4rem;
  }
`,SV=m.div`
  font-size: 1.01rem;
  font-weight: 600;
  color: #888;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-align: center;
`,_V=m.div`
  font-weight: 400;
  font-size: 1.08rem;
  color: #222;
  line-height: 1.5;
  letter-spacing: -0.1px;
  text-align: center;
`;function CV(){return a.jsxs(vV,{id:"deli-challenges",children:[a.jsx(bV,{children:"Key Challenges"}),a.jsx(kV,{children:"The project required solving four main creative challenges to build a cohesive, expressive brand identity for Delicato."}),a.jsx(jV,{children:yV.map(t=>a.jsxs(DV,{children:[a.jsx(SV,{children:t.title}),a.jsx(_V,{children:t.description})]},t.title))})]})}const PV="/assets/story-1-deli.21d47079.mp4",TV=m.section`
  width: 100vw;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
  margin: 2.5rem 0;
  @media (max-width: 900px) {
    margin: 1.5rem 0;
  }
  @media (max-width: 600px) {
    margin: 1rem 0;
  }
`,EV=m.div`
  width: 70vw;
  max-width: 1100px;
  aspect-ratio: 16/9;
  overflow: hidden;
  box-sizing: border-box;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
  }
`,IV=m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`;m.div`
  width: 100%;
  height: 100vh;
  // ... existing styles ...
`;const AV=()=>a.jsx(TV,{children:a.jsx(EV,{children:a.jsx(IV,{src:PV,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Delicato video"})})}),MV="/assets/delin.6105b982.jpg",zV=m.section`
  width: 100vw;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem 0;
  @media (max-width: 900px) {
    margin: 1.5rem 0;
  }
  @media (max-width: 600px) {
    margin: 1rem 0;
  }
`,FV=m.div`
  width: 70vw;
  max-width: 1100px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 900px) {
    width: 90vw;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
  }
`,RV=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,LV=()=>a.jsx(zV,{children:a.jsx(FV,{children:a.jsx(RV,{src:MV,alt:"Deli 14"})})}),OV=m.div`
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  padding: 1.5rem 1rem;
  max-width: 200px;
  min-width: 160px;
  
  /* Hide on mobile and tablet */
  @media (max-width: 1024px) {
    display: none;
  }
`,$V=m.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: left;
`,BV=m.button`
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.75rem 0.5rem;
  margin: 0.25rem 0;
  font-size: 0.9rem;
  font-weight: ${t=>t.isClicked?"700":t.isActive?"600":"400"};
  color: ${t=>t.isClicked||t.isActive?"#000000":"#888888"};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  border-radius: 4px;

  &:hover {
    color: #000000;
    background: rgba(0, 0, 0, 0.05);
  }
`,P0=[{id:"overview",label:"Overview",targetId:"deli-first"},{id:"challenges",label:"Key Challenges",targetId:"deli-problem"},{id:"logo",label:"Logo Design",targetId:"deli-logo"},{id:"typography",label:"Typography",targetId:"deli-typography"},{id:"mockups",label:"Mockups",targetId:"deli-mockups"}],NV=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("overview");q.useEffect(()=>{const s={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},o=new IntersectionObserver(l=>{l.forEach(c=>{if(c.isIntersecting){const d=c.target.id,u=P0.find(p=>p.targetId===d);u&&n(u.id)}})},s);return P0.forEach(l=>{const c=document.getElementById(l.targetId);c&&o.observe(c)}),()=>{o.disconnect()}},[]);const r=(s,o)=>{const l=document.getElementById(s);l&&(l.scrollIntoView({behavior:"smooth",block:"center"}),e(o))};return a.jsxs(OV,{children:[a.jsx($V,{children:"Menu"}),P0.map(s=>a.jsx(BV,{isActive:i===s.id,isClicked:t===s.id,onClick:()=>r(s.targetId,s.id),children:s.label},s.id))]})},VV=m.div`
  min-height: 100vh;
  width: 100vw;
  background: #fff;
  transition: background 0.2s;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  position: fixed;
  inset: 0;
  z-index: 0;
  padding-top: 80px;
  @media (max-width: 600px) {
    padding-top: 60px;
  }
`;Cr`
  body {
    background: #fff;
    overflow-x: hidden;
  }
`;const WV=m.h2`
  width: 100vw;
  text-align: center;
  color: #111;
  font-size: 2.4rem;
  font-weight: 700;
  margin: 4rem 0 2rem 0;
  letter-spacing: 0.04em;
`,UV=()=>a.jsxs(a.Fragment,{children:[a.jsxs(VV,{children:[a.jsx(st,{title:"Delicato Project | Nooshin Shahsavan - Brand Design & Packaging",description:"Explore the Delicato project - a creative branding and packaging design project by Nooshin Shahsavan emphasizing artisanal craftsmanship and premium quality.",keywords:"Delicato project, brand design, packaging design, logo design, visual identity, Nooshin Shahsavan, design portfolio",image:"/src/assets/deli/deli-home.png"}),a.jsx(NV,{}),a.jsx("div",{id:"deli-first",children:a.jsx(ZB,{})}),a.jsx("div",{id:"deli-second",children:a.jsx(nN,{})}),a.jsx("div",{id:"deli-problem",children:a.jsx(CV,{})}),a.jsxs("div",{id:"deli-logo",children:[a.jsx(aN,{}),a.jsx(wV,{})]}),a.jsxs("div",{id:"deli-typography",children:[a.jsx(hN,{}),a.jsx(yN,{}),a.jsx(_N,{})]}),a.jsxs("div",{id:"deli-mockups",children:[a.jsx(WV,{children:"Mockups"}),a.jsx(EN,{}),a.jsx(LV,{}),a.jsx(uV,{}),a.jsx(FN,{}),a.jsx(tV,{}),a.jsx(oV,{}),a.jsx(AV,{}),a.jsx(BN,{}),a.jsx(HN,{}),a.jsx(qN,{})]}),a.jsx(No,{}),a.jsx($o,{})]}),a.jsx(Bo,{})]}),HV="/assets/zar-logoline.159d8655.mp4",YV=m.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,GV=m.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`,XV=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`,ZV=m.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 900px) {
    width: 350px;
    max-width: 95vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    margin-bottom: 1.2rem;
  }
`,qV=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,QV=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.2rem;
  @media (max-width: 900px) {
    gap: 1.2rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }
`,Cu=m.div`
  min-width: 120px;
  text-align: center;
`,Pu=m.div`
  font-size: 0.92rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 0.2em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,Tu=m.div`
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
`,KV=()=>a.jsxs(YV,{children:[a.jsx(GV,{children:"Zar — Overview"}),a.jsx(XV,{children:"I was responsible for designing the brand identity and packaging system for ZAR, a premium saffron brand. The project focused on merging Persian cultural elements with a modern, minimalist aesthetic. My work included developing the logo, typography, color palette, and packaging design to reflect the brand's aim of positioning saffron as a luxury product rooted in heritage."}),a.jsx(ZV,{children:a.jsx(qV,{src:HV,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Zar project video"})}),a.jsxs(QV,{children:[a.jsxs(Cu,{children:[a.jsx(Pu,{children:"Role"}),a.jsx(Tu,{children:"Brand Designer"})]}),a.jsxs(Cu,{children:[a.jsx(Pu,{children:"Tools"}),a.jsx(Tu,{children:"Illustrator, After Effects, Photoshop"})]}),a.jsxs(Cu,{children:[a.jsx(Pu,{children:"Timeline"}),a.jsx(Tu,{children:"4 weeks"})]}),a.jsxs(Cu,{children:[a.jsx(Pu,{children:"Year"}),a.jsx(Tu,{children:"2023"})]})]})]}),JV="/assets/moodboard-zar.486cf3b1.png",eW=m.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,tW=m.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`,iW=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`,nW=m.div`
  width: 340px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 900px) {
    width: 250px;
    max-width: 95vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    margin-bottom: 1.2rem;
  }
`,rW=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,sW=m.div`
  color: rgb(177, 67, 220);
  font-size: 1.02rem;
  margin: 2.2rem auto 0 auto;
  text-align: center;
  letter-spacing: 0.01em;
  width: auto;
  white-space: nowrap;
  overflow-x: auto;
  @media (max-width: 900px) {
    font-size: 0.98rem;
  }
  @media (max-width: 600px) {
    font-size: 0.92rem;
  }
`,oW=()=>a.jsxs(eW,{children:[a.jsx(tW,{children:"About Zar"}),a.jsx(iW,{children:'ZAR is a premium saffron brand rooted in Persian culture. The name means "gold" in Persian, reflecting the value and heritage of saffron. The brand combines traditional elements with modern design to present saffron as a high-end, culturally rich product for a global audience.'}),a.jsx(nW,{children:a.jsx(rW,{src:JV,alt:"Brand Strategy Visual"})}),a.jsx(sW,{children:"Aim → Persian Heritage → Cultural Authenticity → Modern Design → Unforgettable Experience"})]}),aW="/assets/logo-zar-1.7784827d.png",lW="/assets/zar-logo.e384c156.mp4",cW="/assets/logo-zar-2.a449b6ed.png",dW=m.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,uW=m.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`,Cb=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`,T0=m.span`
  color: rgb(163, 73, 198);
  font-weight: 400;
`,hW=m.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: transparent;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  @media (max-width: 900px) {
    width: 350px;
  }
  @media (max-width: 600px) {
    width: 98vw;
    gap: 0.5rem;
  }
`,pW=m.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`,fW=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  border-radius: 8px;
`,Pb=m.img`
  width: 50%;
  height: auto;
  display: block;
  background: transparent;
  border-radius: 8px;
  @media (max-width: 600px) {
    width: 100%;
  }
`,mW=()=>a.jsxs(dW,{children:[a.jsx(uW,{children:"Logo Design"}),a.jsxs(Cb,{children:["For the pictorial logo, my goal was to ",a.jsx(T0,{children:"represent a symbol of the saffron flower"}),". Therefore, based on the images provided below, you can see the steps of analyzing a real saffron flower, simplifying its form, and finally creating the resulting logo design."]}),a.jsxs(hW,{children:[a.jsx(fW,{src:lW,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"ZAR logo animation"}),a.jsxs(pW,{children:[a.jsx(Pb,{src:aW,alt:"ZAR logo design"}),a.jsx(Pb,{src:cW,alt:"ZAR logo variations"})]})]}),a.jsxs(Cb,{children:["In the wordmark logo, I tried to design something that reflects the ",a.jsx(T0,{children:"delicacy"})," and ",a.jsx(T0,{children:"fragility of saffron"}),". That's why I chose a fine and elegant typeface."]})]}),gW="/assets/zar-color.c2162f1e.mp4",xW=m.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,wW=m.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`,yW=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`,vW=m.div`
  width: 340px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 900px) {
    width: 250px;
    max-width: 95vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    margin-bottom: 1.2rem;
  }
`,bW=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,kW=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.2rem;
  @media (max-width: 900px) {
    gap: 1.2rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }
`,E0=m.div`
  min-width: 120px;
  text-align: center;
`,I0=m.div`
  font-size: 0.92rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 0.2em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,A0=m.div`
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
`,jW=()=>a.jsxs(xW,{children:[a.jsx(wW,{children:"Color Palette"}),a.jsx(yW,{children:`I chose these colors based on several goals: The brand name Zar means "gold" in Persian, symbolizing both the value of the product and its preciousness. Purple represents the color of the saffron flower and is also associated with loyalty. Red reflects the color of the flower's stamen.`}),a.jsx(vW,{children:a.jsx(bW,{src:gW,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Color palette video"})}),a.jsxs(kW,{children:[a.jsxs(E0,{children:[a.jsx(I0,{children:"Primary"}),a.jsx(A0,{children:"Royal Purple"})]}),a.jsxs(E0,{children:[a.jsx(I0,{children:"Secondary"}),a.jsx(A0,{children:"Metallic Gold"})]}),a.jsxs(E0,{children:[a.jsx(I0,{children:"Accent"}),a.jsx(A0,{children:"Deep Black"})]})]})]}),DW="/assets/zar-type.3a8d8e25.mp4",SW=m.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,_W=m.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`,CW=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`,PW=m.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 900px) {
    width: 350px;
    max-width: 95vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    margin-bottom: 1.2rem;
  }
`,TW=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,EW=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.2rem;
  @media (max-width: 900px) {
    gap: 1.2rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }
`,M0=m.div`
  min-width: 120px;
  text-align: center;
`,z0=m.div`
  font-size: 0.92rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 0.2em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,F0=m.div`
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
`,IW=()=>a.jsxs(SW,{children:[a.jsx(_W,{children:"Typography"}),a.jsx(CW,{children:"Primary Typeface: Amandine Elegant and finely curved, perfect for headlines and packaging. Secondary Typeface: Housechks A handwritten script that brings warmth and human feeling to the brand."}),a.jsx(PW,{children:a.jsx(TW,{src:DW,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Typography video"})}),a.jsxs(EW,{children:[a.jsxs(M0,{children:[a.jsx(z0,{children:"Primary"}),a.jsx(F0,{children:"Amandine"})]}),a.jsxs(M0,{children:[a.jsx(z0,{children:"Secondary"}),a.jsx(F0,{children:"Housechks"})]}),a.jsxs(M0,{children:[a.jsx(z0,{children:"Style"}),a.jsx(F0,{children:"Elegant & Warm"})]})]})]}),AW="/assets/box-1.2cee20a2.jpg",MW=m.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,zW=m.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`,FW=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`,RW=m.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 900px) {
    width: 350px;
    max-width: 95vw;
  }
  @media (max-width: 600px) {
    width: 98vw;
    max-width: 98vw;
    margin-bottom: 1.2rem;
  }
`,LW=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,OW=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.2rem;
  @media (max-width: 900px) {
    gap: 1.2rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }
`,R0=m.div`
  min-width: 120px;
  text-align: center;
`,L0=m.div`
  font-size: 0.92rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 0.2em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,O0=m.div`
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
`,$W=()=>a.jsxs(MW,{children:[a.jsx(zW,{children:"Packaging"}),a.jsx(FW,{children:"Design packaging that is luxurious, functional, and deeply rooted in Persian culture, while appealing to global consumers. I designed a sliding drawer box with an inner wrapping layer to both protect the saffron and enhance the unboxing experience. The graphics feature an abstract saffron flower illustration, blending organic lines with Eastern motifs to reflect ZAR's Persian origin."}),a.jsx(RW,{children:a.jsx(LW,{src:AW,alt:"Zar Packaging Design"})}),a.jsxs(OW,{children:[a.jsxs(R0,{children:[a.jsx(L0,{children:"Style"}),a.jsx(O0,{children:"Luxurious & Cultural"})]}),a.jsxs(R0,{children:[a.jsx(L0,{children:"Material"}),a.jsx(O0,{children:"Premium Cardboard"})]}),a.jsxs(R0,{children:[a.jsx(L0,{children:"Colors"}),a.jsx(O0,{children:"Gold, Purple, Black"})]})]})]}),BW="/assets/zarbscard.18ade34e.jpg",NW=m.section`
  width: 100vw;
  min-height: 60vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,VW=m.div`
  width: 70%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 900px) {
    width: 90%;
    border-radius: 12px;
  }
  @media (max-width: 600px) {
    width: 98vw;
    border-radius: 10px;
  }
`,WW=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,UW=()=>a.jsx(NW,{children:a.jsx(VW,{children:a.jsx(WW,{src:BW,alt:"Zar Mockup 1"})})}),HW=m.section`
  width: 100vw;
  min-height: 60vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,YW=m.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 12px;
  }
  @media (max-width: 900px) {
    width: 90%;
    border-radius: 10px;
  }
  @media (max-width: 600px) {
    width: 95vw;
    border-radius: 8px;
  }
  @media (max-width: 480px) {
    width: 98vw;
    border-radius: 6px;
  }
`,GW=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  object-fit: contain;
`,XW=()=>a.jsx(HW,{children:a.jsx(YW,{children:a.jsx(GW,{src:nw,alt:"Zar Mockup 2"})})}),ZW="/assets/buttle.45644225.jpg",qW=m.section`
  width: 100vw;
  min-height: 60vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,QW=m.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 12px;
  }
  @media (max-width: 900px) {
    width: 90%;
    border-radius: 10px;
  }
  @media (max-width: 600px) {
    width: 95vw;
    border-radius: 8px;
  }
  @media (max-width: 480px) {
    width: 98vw;
    border-radius: 6px;
  }
`,KW=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  object-fit: contain;
`,JW=()=>a.jsx(qW,{children:a.jsx(QW,{children:a.jsx(KW,{src:ZW,alt:"Zar Mockup 3"})})}),eU="/assets/webzar.8382f801.png",tU=m.section`
  width: 100vw;
  min-height: 60vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,iU=m.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 12px;
  }
  @media (max-width: 900px) {
    width: 90%;
    border-radius: 10px;
  }
  @media (max-width: 600px) {
    width: 95vw;
    border-radius: 8px;
  }
  @media (max-width: 480px) {
    width: 98vw;
    border-radius: 6px;
  }
`,nU=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  object-fit: contain;
`,rU=()=>a.jsx(tU,{children:a.jsx(iU,{children:a.jsx(nU,{src:eU,alt:"Zar Mockup 5"})})}),sU="/assets/story-zar-1.66d234e7.mp4",oU=m.section`
  width: 100vw;
  min-height: 60vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,aU=m.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  background: #460863;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  border: none;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 12px;
  }
  @media (max-width: 900px) {
    width: 90%;
    border-radius: 10px;
  }
  @media (max-width: 600px) {
    width: 95vw;
    border-radius: 8px;
    aspect-ratio: 1/1;
  }
  @media (max-width: 480px) {
    width: 98vw;
    border-radius: 6px;
  }
`,lU=m.video`
  width: 30%;
  height: auto;
  display: block;
  background: transparent;
  @media (max-width: 600px) {
    width: 100%;
  }
`,cU=()=>a.jsx(oU,{children:a.jsx(aU,{children:a.jsx(lU,{src:sU,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Zar Story Video",preload:"metadata"})})}),dU="/assets/zarbrushor.d4748513.jpg",uU=m.section`
  width: 100vw;
  min-height: 60vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,hU=m.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 12px;
  }
  @media (max-width: 900px) {
    width: 90%;
    border-radius: 10px;
  }
  @media (max-width: 600px) {
    width: 95vw;
    border-radius: 8px;
  }
  @media (max-width: 480px) {
    width: 98vw;
    border-radius: 6px;
  }
`,pU=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  object-fit: contain;
`,fU=()=>a.jsx(uU,{children:a.jsx(hU,{children:a.jsx(pU,{src:dU,alt:"Zar Mockup 6"})})}),mU="/assets/work4.64f58ae6.png",gU=m.section`
  width: 100vw;
  min-height: 60vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,xU=m.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  @media (max-width: 1200px) {
    max-width: 95vw;
    border-radius: 12px;
  }
  @media (max-width: 900px) {
    width: 90%;
    border-radius: 10px;
  }
  @media (max-width: 600px) {
    width: 95vw;
    border-radius: 8px;
  }
  @media (max-width: 480px) {
    width: 98vw;
    border-radius: 6px;
  }
`,wU=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  object-fit: contain;
`,yU=()=>a.jsx(gU,{children:a.jsx(xU,{children:a.jsx(wU,{src:mU,alt:"Zar Mockup 8"})})}),vU="/assets/logo1.a7815c6d.jpeg",bU="/assets/logo2.d758f483.jpg",kU="/assets/logo3.8042f420.jpg",jU="/assets/logo4.681124c6.png",DU="/assets/logo5.00fd6488.png",SU=[vU,bU,kU,jU,DU],_U=m.section`
  width: 100vw;
  min-height: 60vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,CU=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`,PU=m.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    gap: 1rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.7rem;
    margin-bottom: 1rem;
  }
`,TU=m.div`
  width: 260px;
  height: 260px;
  background: #fff;
  border-radius: 1.2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  border: 2px solid rgb(163, 73, 198);
  flex: 0 0 auto;
  transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s;
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(80, 79, 81, 0.13);
    border-color: rgb(163, 73, 198);
  }
  @media (max-width: 900px) {
    width: 180px;
    height: 180px;
  }
  @media (max-width: 600px) {
    width: 90vw;
    height: 90vw;
    max-width: 320px;
    max-height: 320px;
  }
`,EU=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: transparent;
`,IU=()=>a.jsxs(_U,{children:[a.jsx(CU,{children:"Logo Process"}),a.jsx(PU,{children:SU.map((t,e)=>a.jsx(TU,{children:a.jsx(EU,{src:t,alt:`Zar logo process ${e+1}`})},e))})]}),zr=m.span`
  color: rgb(163, 73, 198);
  font-weight: 400;
`,AU=[{title:"Logo",description:a.jsxs(a.Fragment,{children:["Design a logo that reflects ",a.jsx(zr,{children:"Persian luxury"})," and ",a.jsx(zr,{children:"modern sophistication"}),", blending cultural heritage with contemporary appeal."]})},{title:"Color Palette",description:a.jsxs(a.Fragment,{children:["Choose colors that express ",a.jsx(zr,{children:"premium quality"})," and ",a.jsx(zr,{children:"cultural richness"})," while feeling modern and visually striking."]})},{title:"Typography",description:a.jsxs(a.Fragment,{children:["Use typography that balances ",a.jsx(zr,{children:"luxury"})," and ",a.jsx(zr,{children:"approachability"}),", expressing both refinement and human warmth."]})},{title:"Visual Tone",description:a.jsxs(a.Fragment,{children:["Design packaging that feels ",a.jsx(zr,{children:"elevated"})," and ",a.jsx(zr,{children:"culturally rooted"}),", while being functional and experience-driven."]})}],MU=m.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,zU=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`,FU=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`,RU=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.2rem;
  @media (max-width: 900px) {
    gap: 1.5rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`,LU=m.div`
  min-width: 180px;
  max-width: 240px;
  background: #fff;
  border-radius: 1.2rem;
  border: 2px solid rgb(163, 73, 198);
  box-shadow: none;
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s;
  &:hover {
    transform: scale(1.04) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(80, 79, 81, 0.13);
    border-color: rgb(163, 73, 198);
  }
  @media (max-width: 900px) {
    min-width: 140px;
    max-width: 180px;
    padding: 1rem 0.8rem;
  }
  @media (max-width: 600px) {
    min-width: 90vw;
    max-width: 98vw;
    padding: 0.8rem 0.4rem;
  }
`,OU=m.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #a349c6;
  margin-bottom: 0.7rem;
  text-align: center;
`,$U=m.div`
  color: #444;
  font-size: 0.9rem;
  line-height: 1.4;
  text-align: center;
`,BU=()=>a.jsxs(MU,{children:[a.jsx(zU,{children:"Branding Challenges"}),a.jsx(FU,{children:"The main design challenges for the ZAR brand were:"}),a.jsx(RU,{children:AU.map((t,e)=>a.jsxs(LU,{children:[a.jsx(OU,{children:t.title}),a.jsx($U,{children:t.description})]},t.title))})]}),NU="/assets/pzar1.66695dc5.jpeg",VU="/assets/pzar2.45f48d83.png",WU="/assets/pzar3.e9055e0a.png",UU="/assets/pzar4.b47681e2.jpg",HU=m.section`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
  @media (max-width: 900px) {
    padding: 32px 0 24px 0;
  }
  @media (max-width: 600px) {
    padding: 18px 0 12px 0;
  }
`,YU=m.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`,GU=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
  }
`,XU=m.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 0 1rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.5rem;
  }
`,k4=m.div`
  background: none;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  border: 1px solid #e0e0e0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
  @media (max-width: 900px) {
    border-radius: 12px;
  }
  @media (max-width: 600px) {
    border-radius: 10px;
  }
`,ZU=m.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f3f3f3;
`,qU=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  ${k4}:hover & {
    transform: scale(1.02);
  }
`,QU=m.div`
  padding: 1.5rem;
  background: none;
`,KU=m.h3`
  font-size: 0.95rem;
  font-weight: 500;
  color: #444;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`,JU=m.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(76, 16, 129, 0.9);
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`,eH=()=>{const t=[{src:NU,alt:"Pack Zar 1",title:"Selecting a traditional Iranian motif"},{src:VU,alt:"Pack Zar 2",title:"Getting inspiration from a detail of it"},{src:WU,alt:"Pack Zar 3",title:"Designed a saffron flower inspired by traditional motifs, using purple and gold to reflect its value and cultural roots."},{src:UU,alt:"Pack Zar 4",title:"Applying the design to the package"}];return a.jsxs(HU,{children:[a.jsx(YU,{children:"Packaging Design Process"}),a.jsx(GU,{children:"The packaging design process involved researching traditional Iranian motifs, extracting key elements, and creating a modern saffron flower illustration that reflects ZAR's Persian heritage while appealing to contemporary consumers."}),a.jsx(XU,{children:t.map((e,i)=>a.jsxs(k4,{children:[a.jsxs(ZU,{children:[a.jsx(qU,{src:e.src,alt:e.alt}),a.jsx(JU,{children:"ZAR"})]}),a.jsx(QU,{children:a.jsx(KU,{children:e.title})})]},e.alt))})]})},tH=m.div`
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  padding: 1.5rem 1rem;
  max-width: 200px;
  min-width: 160px;
  
  /* Hide on mobile and tablet */
  @media (max-width: 1024px) {
    display: none;
  }
`,iH=m.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: left;
`,nH=m.button`
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.75rem 0.5rem;
  margin: 0.25rem 0;
  font-size: 0.9rem;
  font-weight: ${t=>t.isClicked?"700":t.isActive?"600":"400"};
  color: ${t=>t.isClicked||t.isActive?"#000000":"#888888"};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  border-radius: 4px;

  &:hover {
    color: #000000;
    background: rgba(0, 0, 0, 0.05);
  }
`,$0=[{id:"overview",label:"Overview",targetId:"zar-first"},{id:"challenges",label:"Key Challenges",targetId:"zar-problem"},{id:"logo",label:"Logo Design",targetId:"zar-logo"},{id:"color",label:"Color Palette",targetId:"zar-color"},{id:"typography",label:"Typography",targetId:"zar-typography"},{id:"packaging",label:"Packaging",targetId:"zar-packaging"},{id:"mockups",label:"Mockups",targetId:"zar-mockups"}],rH=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("overview");q.useEffect(()=>{const s={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},o=new IntersectionObserver(l=>{l.forEach(c=>{if(c.isIntersecting){const d=c.target.id,u=$0.find(p=>p.targetId===d);u&&n(u.id)}})},s);return $0.forEach(l=>{const c=document.getElementById(l.targetId);c&&o.observe(c)}),()=>{o.disconnect()}},[]);const r=(s,o)=>{const l=document.getElementById(s);l&&(l.scrollIntoView({behavior:"smooth",block:"center"}),e(o))};return a.jsxs(tH,{children:[a.jsx(iH,{children:"Menu"}),$0.map(s=>a.jsx(nH,{isActive:i===s.id,isClicked:t===s.id,onClick:()=>r(s.targetId,s.id),children:s.label},s.id))]})},sH=m.div`
  min-height: 100vh;
  width: 100vw;
  background: #fff;
  transition: background 0.2s;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  position: fixed;
  inset: 0;
  z-index: 0;
  padding-top: 80px;
  @media (max-width: 600px) {
    padding-top: 60px;
  }
`,oH=Cr`
  body {
    background: #fff;
    margin: 0;
    padding: 0;
    overflow-y: auto;
  }

  /* Optional: Prevent horizontal scroll on html element */
  html {
    overflow-x: hidden;
  }
`,Tb=m.h2`
  width: 100vw;
  text-align: center;
  font-size: 2.1rem;
  font-weight: 700;
  color: #181818;
  margin: 2.5rem 0 1.5rem 0;
  letter-spacing: -1px;
`,aH=()=>a.jsxs(a.Fragment,{children:[a.jsxs(sH,{children:[a.jsx(st,{title:"Zar Project | Nooshin Shahsavan - Creative Design & Branding",description:"Explore the Zar project - an innovative branding and digital design project by Nooshin Shahsavan combining contemporary aesthetics with cultural elements.",keywords:"Zar project, creative design, brand design, digital design, visual identity, Nooshin Shahsavan, design portfolio",image:"/src/assets/zar/banner-zar.png"}),a.jsx(oH,{}),a.jsx(rH,{}),a.jsx("div",{id:"zar-overview",children:a.jsx(KV,{})}),a.jsx("div",{id:"zar-second",children:a.jsx(oW,{})}),a.jsx("div",{id:"zar-problem",children:a.jsx(BU,{})}),a.jsx("div",{id:"zar-logo",children:a.jsx(mW,{})}),a.jsx("div",{id:"zar-logo-process",children:a.jsx(IU,{})}),a.jsx("div",{id:"zar-color",children:a.jsx(jW,{})}),a.jsx("div",{id:"zar-typography",children:a.jsx(IW,{})}),a.jsxs("div",{id:"zar-packaging",children:[a.jsx(Tb,{children:"Packaging"}),a.jsx($W,{}),a.jsx(eH,{})]}),a.jsxs("div",{id:"zar-mockups",children:[a.jsx(Tb,{children:"Mockups"}),a.jsx(cU,{}),a.jsx(yU,{}),a.jsx(XW,{}),a.jsx(JW,{}),a.jsx(UW,{}),a.jsx(fU,{}),a.jsx(rU,{})]}),a.jsx(No,{}),a.jsx($o,{})]}),a.jsx(Bo,{})]}),lH="/assets/schedule.eab9ba48.png",cH="/assets/time-out.1cb75783.png",dH="/assets/notification.e385d5e5.png",uH="/assets/pro1.69a05912.mp4",hH=m.section`
  width: 100%;
  padding: 2rem 0;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem 0;
    min-height: auto;
  }
`,pH=m($.section)`
  background: transparent;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-family: 'Inter', sans-serif;
  position: relative;
  min-height: 400px;

  @media (max-width: 1024px) {
    width: 95%;
  }

  @media (max-width: 900px) {
    width: 95%;
    flex-direction: column;
    min-height: auto;
  }

  @media (max-width: 480px) {
    width: 98%;
  }
`,fH=m.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 0 4rem 4rem;
  min-width: 340px;

  @media (max-width: 1024px) {
    padding: 3rem 0 3rem 3rem;
  }

  @media (max-width: 900px) {
    padding: 2.5rem 1.5rem 2rem 1.5rem;
    align-items: center;
    width: 100%;
    min-width: 0;
    flex: none;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem 1.5rem 1rem;
  }
`,mH=m.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 280px;
  padding: 0 3rem 0 0;

  @media (max-width: 1024px) {
    padding: 0 2rem 0 0;
  }

  @media (max-width: 900px) {
    padding: 0 0 2rem 0;
    width: 100%;
    min-width: 0;
    justify-content: center;
    flex: none;
  }

  @media (max-width: 480px) {
    padding: 0 0 1.5rem 0;
  }
`,gH=m($.div)`
  color: #3e2ffc;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`,xH=m($.h2)`
  color: #181818;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 0.65rem 0;
  font-family: 'Inter', sans-serif;
  text-align: left;
  line-height: 1.1;

  @media (max-width: 900px) {
    text-align: center;
    width: 100%;
    font-size: 1.6rem;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`,wH=m($.p)`
  color: #444;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
  max-width: 420px;
  text-align: left;
  opacity: 0.9;

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    text-align: center;
    font-size: 0.95rem;
    max-width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`,yH=m.div`
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  width: 260px;
  height: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 900px) {
    width: 200px;
    height: 420px;
  }

  @media (max-width: 600px) {
    width: 170px;
    height: 350px;
    border-radius: 12px;
  }
`,vH=m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;

  @media (max-width: 600px) {
    border-radius: 12px;
  }
`,bH=()=>a.jsxs(hH,{children:[a.jsx(st,{title:"Workday Problem 1 - Schedule View Issues | Nooshin Shahsavan",description:"Explore the first problem identified in the Workday UX/UI project - schedule view cluttering and readability issues.",keywords:"Workday problem, schedule view, UX issues, mobile app design, Nooshin Shahsavan",image:"/src/assets/work/workday-phone.png"}),a.jsxs(pH,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:[a.jsxs(fH,{children:[a.jsx(gH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.2},children:"Problem 01"}),a.jsx(xH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.4},children:"Schedule View is Cluttered and Hard to Read"}),a.jsx(wH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.6},children:"The current schedule interface presents information in a dense, overwhelming format. Users struggle to quickly identify their upcoming shifts, making it difficult to plan their week effectively. The lack of visual hierarchy and poor information organization creates unnecessary cognitive load."})]}),a.jsx(mH,{children:a.jsx(yH,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut",delay:.8},children:a.jsx(vH,{src:uH,controls:!0,controlsList:"nodownload",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})})})]})]}),kH="/assets/pro-2.1d80f820.mp4",jH=m.section`
  width: 100%;
  padding: 2rem 0;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem 0;
    min-height: auto;
  }
`,DH=m($.section)`
  background: transparent;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-family: 'Inter', sans-serif;
  position: relative;
  min-height: 400px;

  @media (max-width: 1024px) {
    width: 95%;
  }

  @media (max-width: 900px) {
    width: 95%;
    flex-direction: column;
    min-height: auto;
  }

  @media (max-width: 480px) {
    width: 98%;
  }
`,SH=m.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 0 4rem 4rem;
  min-width: 340px;

  @media (max-width: 1024px) {
    padding: 3rem 0 3rem 3rem;
  }

  @media (max-width: 900px) {
    padding: 2.5rem 1.5rem 2rem 1.5rem;
    align-items: center;
    width: 100%;
    min-width: 0;
    flex: none;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem 1.5rem 1rem;
  }
`,_H=m.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 280px;
  padding: 0 3rem 0 0;

  @media (max-width: 1024px) {
    padding: 0 2rem 0 0;
  }

  @media (max-width: 900px) {
    padding: 0 0 2rem 0;
    width: 100%;
    min-width: 0;
    justify-content: center;
    flex: none;
  }

  @media (max-width: 480px) {
    padding: 0 0 1.5rem 0;
  }
`,CH=m($.div)`
  color: #3e2ffc;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`,PH=m($.h2)`
  color: #181818;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 0.65rem 0;
  font-family: 'Inter', sans-serif;
  text-align: left;
  line-height: 1.1;

  @media (max-width: 900px) {
    text-align: center;
    width: 100%;
    font-size: 1.6rem;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`,TH=m($.p)`
  color: #444;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
  max-width: 420px;
  text-align: left;
  opacity: 0.9;

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    text-align: center;
    font-size: 0.95rem;
    max-width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`,EH=m($.div)`
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  width: 260px;
  height: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 900px) {
    width: 200px;
    height: 420px;
  }

  @media (max-width: 600px) {
    width: 170px;
    height: 350px;
    border-radius: 12px;
  }
`,IH=m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;

  @media (max-width: 600px) {
    border-radius: 12px;
  }
`,AH=()=>a.jsxs(jH,{children:[a.jsx(st,{title:"Workday Problem 2 - Time Off Request Process | Nooshin Shahsavan",description:"Explore the second problem identified in the Workday UX/UI project - complex time off request process.",keywords:"Workday problem, time off request, UX issues, mobile app design, Nooshin Shahsavan",image:"/src/assets/work/workday-phone.png"}),a.jsxs(DH,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:[a.jsxs(SH,{children:[a.jsx(CH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.2},children:"Problem 02"}),a.jsx(PH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.4},children:"Complex Time Off Request Process"}),a.jsx(TH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.6},children:"Requesting time off requires navigating through multiple screens and forms. The process is not intuitive and lacks clear guidance, making it frustrating for users who need to quickly submit requests. The multi-step workflow creates unnecessary friction."})]}),a.jsx(_H,{children:a.jsx(EH,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut",delay:.8},children:a.jsx(IH,{src:kH,controls:!0,controlsList:"nodownload",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})})})]})]}),MH="/assets/error.d6ceb0da.png",zH=m.section`
  width: 100%;
  padding: 2rem 0;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem 0;
    min-height: auto;
  }
`,FH=m($.section)`
  background: transparent;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-family: 'Inter', sans-serif;
  position: relative;
  min-height: 400px;

  @media (max-width: 1024px) {
    width: 95%;
  }

  @media (max-width: 900px) {
    width: 95%;
    flex-direction: column;
    min-height: auto;
  }

  @media (max-width: 480px) {
    width: 98%;
  }
`,RH=m.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4rem 0 4rem 4rem;
  min-width: 340px;

  @media (max-width: 1024px) {
    padding: 3rem 0 3rem 3rem;
  }

  @media (max-width: 900px) {
    padding: 2.5rem 1.5rem 2rem 1.5rem;
    align-items: center;
    width: 100%;
    min-width: 0;
    flex: none;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem 1.5rem 1rem;
  }
`,LH=m.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 280px;
  padding: 0 3rem 0 0;

  @media (max-width: 1024px) {
    padding: 0 2rem 0 0;
  }

  @media (max-width: 900px) {
    padding: 0 0 2rem 0;
    width: 100%;
    min-width: 0;
    justify-content: center;
    flex: none;
  }

  @media (max-width: 480px) {
    padding: 0 0 1.5rem 0;
  }
`,OH=m($.div)`
  color: #3e2ffc;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`,$H=m($.h2)`
  color: #181818;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0 0 0.65rem 0;
  font-family: 'Inter', sans-serif;
  text-align: left;
  line-height: 1.1;

  @media (max-width: 900px) {
    text-align: center;
    width: 100%;
    font-size: 1.6rem;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`,BH=m($.p)`
  color: #444;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
  max-width: 420px;
  text-align: left;
  opacity: 0.9;

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    text-align: center;
    font-size: 0.95rem;
    max-width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`,NH=m($.div)`
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  width: 400px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 900px) {
    width: 300px;
  }

  @media (max-width: 600px) {
    width: 250px;
    border-radius: 12px;
  }
`,VH=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 18px;
  display: block;

  @media (max-width: 600px) {
    border-radius: 12px;
  }
`,WH=()=>a.jsxs(zH,{children:[a.jsx(st,{title:"Workday Problem 3 - Lack of Feedback | Nooshin Shahsavan",description:"Explore the third problem identified in the Workday UX/UI project - lack of feedback after time off requests.",keywords:"Workday problem, feedback, UX issues, mobile app design, Nooshin Shahsavan",image:"/src/assets/work/workday-phone.png"}),a.jsxs(FH,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:[a.jsxs(RH,{children:[a.jsx(OH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.2},children:"Problem 03"}),a.jsx($H,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.4},children:"No Feedback After Time Off Requests"}),a.jsx(BH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.6},children:"After submitting a time off request, users receive no confirmation or status updates. This creates uncertainty and anxiety about whether their request was received and approved. The lack of transparency in the process leaves users feeling disconnected from their requests."})]}),a.jsx(LH,{children:a.jsx(NH,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut",delay:.8},children:a.jsx(VH,{src:MH,alt:"No Feedback After Time Off Requests",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})})})]})]}),UH="/assets/persona.52dcd889.jpeg",HH="/assets/user-journey map.a58c2a96.png",YH="/assets/persona-workday.d5695c79.png",GH="/assets/empathy-map.46c045ff.png",XH=m.section`
  width: 100%;
  padding: 2rem 0;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem 0;
    min-height: auto;
  }
`,ZH=m($.section)`
  background: transparent;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 5rem;
  font-family: 'Inter', sans-serif;
  position: relative;
  min-height: 400px;

  @media (max-width: 1024px) {
    width: 95%;
    padding: 3rem 3rem;
  }

  @media (max-width: 900px) {
    width: 95%;
    min-height: auto;
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    width: 98%;
    padding: 1.5rem 1rem;
  }
`,qH=m.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  max-width: 1080px;
  min-height: 380px;
  margin-top: 1.5vw;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    min-height: 0;
    margin-top: 1rem;
  }

  @media (max-width: 600px) {
    margin-top: 0.5rem;
  }
`,QH=m.img`
  width: 340px;
  height: 370px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 2vw;
  margin-left: 20px;
  background: var(--cardBackground);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 10px rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
  border: 1px solid var(--border);

  @media (max-width: 900px) {
    width: 80vw;
    max-width: 400px;
    height: auto;
    aspect-ratio: 340/370;
    margin-bottom: 2vw;
    margin-right: 0;
    margin-left: 0;
  }

  @media (max-width: 600px) {
    width: 90vw;
    max-width: 350px;
  }
`,KH=m.div`
  flex: 1;
  min-width: 270px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 900px) {
    min-width: 0;
    width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: 600px) {
    padding: 0 0.8rem;
  }
`,JH=m($.div)`
  color: var(--accent1);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 600px) {
    font-size: 0.9rem;
    margin-bottom: 12px;
  }
`,eY=m($.h2)`
  color: #181818;
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0 0 1.6rem 0;
  line-height: 1.1;

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 900px) {
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
`,tY=m($.p)`
  color: #444;
  font-size: 1.1rem;
  font-weight: 400;
  margin: 0 0 2.5rem 0;
  line-height: 1.7;
  max-width: 500px;
  opacity: 0.9;

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    font-size: 0.98rem;
    margin-bottom: 1.2rem;
    text-align: center;
    max-width: 100%;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`,iY=m($.div)`
  margin-top: 1.4rem;
  background: rgba(248, 248, 248, 0.8);
  color: #444;
  font-size: 0.9rem;
  padding: 1rem 1.4rem;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  max-width: 510px;
  font-style: italic;
  border: 1px solid #f0f0f0;
  opacity: 0.8;

  @media (max-width: 900px) {
    max-width: 100%;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
    padding: 0.8rem 1rem;
    margin-top: 1rem;
  }
`,nY=m.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2.5vw;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  background: transparent;
  box-shadow: none;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 600px) {
    gap: 1rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
`,B0=m($.button)`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.8rem 1.5rem;
  background: #3e2ffc;
  color: #ffffff;
  border: 2px solid #3e2ffc;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(62, 47, 252, 0.2);
  cursor: pointer;
  transition: all 0.2s ease;
  outline: none;
  min-height: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  &:nth-child(2) {
    background: #2196f3;
    border-color: #2196f3;
    box-shadow: 0 2px 8px rgba(33, 150, 243, 0.2);
  }
  
  &:nth-child(3) {
    background: #3e2ffc;
    border-color: #3e2ffc;
    box-shadow: 0 2px 8px rgba(62, 47, 252, 0.2);
  }
  
  &:hover, &:focus {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(62, 47, 252, 0.3);
    background: #3e2ffc;
    border-color: #3e2ffc;
  }
  
  &:nth-child(2):hover, &:nth-child(2):focus {
    background: #2196f3;
    border-color: #2196f3;
    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
  }
  
  &:nth-child(3):hover, &:nth-child(3):focus {
    background: #3e2ffc;
    border-color: #3e2ffc;
    box-shadow: 0 4px 12px rgba(62, 47, 252, 0.3);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 4px rgba(62, 47, 252, 0.2);
  }
  
  @media (max-width: 900px) {
    width: auto;
    max-width: none;
    margin: 0 0.5rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 0.7rem 1.2rem;
    margin: 0 0.3rem;
  }
`,rY=m.div`
  position: fixed;
  z-index: 10;
  inset: 0;
  background: rgba(40, 40, 60, 0.53);
  backdrop-filter: blur(5px);
  animation: fadeIn 0.18s;

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`,sY=m.div`
  position: fixed;
  z-index: 12;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 22px;
  box-shadow: 0 16px 60px rgba(0, 0, 0, 0.15), 0 2px 12px rgba(0, 0, 0, 0.08);
  max-width: 92vw;
  max-height: 90vh;
  padding: 2vw 2vw 1vw 2vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: 1px solid var(--border);

  @media (max-width: 800px) {
    padding: 1vw 3vw 2vw 3vw;
    border-radius: 16px;
  }

  @media (max-width: 600px) {
    padding: 1vw 2vw 1.5vw 2vw;
    border-radius: 12px;
  }
`,oY=m.img`
  max-width: 80vw;
  max-height: 70vh;
  border-radius: 18px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  margin-bottom: 12px;
  background: var(--cardBackground);
  border: 1px solid var(--border);

  @media (max-width: 600px) {
    border-radius: 12px;
    margin-bottom: 8px;
  }
`,Eb=m.button`
  background: var(--accent1);
  color: var(--text);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1vw;
  margin-left: auto;
  margin-right: 0;
  cursor: pointer;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    width: 36px;
    height: 36px;
    font-size: 1.5rem;
  }

  &:hover {
    background: var(--accent2);
  }
`,aY={journey:HH,persona:YH,empathy:GH},lY=()=>{const[t,e]=T.useState(null);q.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]);const i={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx(st,{title:"User Persona & Research | Workday UX Project",description:"Meet Sara, our user persona for the Workday app redesign. Explore her journey, pain points, and the research insights that guided our design decisions.",keywords:"user persona, UX research, user journey, empathy map, Workday app, user experience",image:"/src/assets/work/persona.jpg"}),a.jsxs(XH,{children:[a.jsxs(ZH,{variants:i,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsxs(qH,{children:[a.jsx(QH,{src:UH,alt:"User Persona"}),a.jsxs(KH,{children:[a.jsx(JH,{variants:n,children:"Sara 18 years old"}),a.jsx(eY,{variants:n,children:"User Scenario"}),a.jsx(tY,{variants:n,children:`Sara, a first-year psychology student and part-time cashier, struggles to check her weekly schedule in the Workday app. She needs to see all her shifts at once to plan her schoolwork but can only view one day at a time. Requesting time off is also frustrating — the tiny fonts make it hard to use, and she has to constantly check the app for approval updates. She often thinks, "I just want to see my week at a glance" and "Why can't I get a simple notification?"`}),a.jsx(iY,{variants:n,children:`She often thinks, "I just want to see my week at a glance" and "Why can't I get a simple notification?"`})]})]}),a.jsxs(nY,{children:[a.jsx(B0,{onClick:()=>e("journey"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"Journey Map"}),a.jsx(B0,{onClick:()=>e("persona"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"User Persona"}),a.jsx(B0,{onClick:()=>e("empathy"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"Empathy Map"})]})]}),t&&a.jsxs(a.Fragment,{children:[a.jsx(rY,{onClick:()=>e(null)}),a.jsxs(sY,{children:[a.jsx(Eb,{title:"Close",onClick:()=>e(null),children:"×"}),a.jsx(oY,{src:aY[t],alt:`${t} image`}),a.jsx(Eb,{title:"Close",onClick:()=>e(null),children:"×"})]})]})]})]})},cY=m.section`
  width: 100%;
  padding: 2rem 0;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem 0;
    min-height: auto;
  }
`,dY=m($.section)`
  background: transparent;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  padding: 4rem 5rem;
  position: relative;

  @media (max-width: 1024px) {
    width: 95%;
    padding: 3rem 3rem;
  }

  @media (max-width: 900px) {
    width: 95%;
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    width: 98%;
    padding: 1.5rem 1rem;
  }
`,uY=m($.h1)`
  color: #181818;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1.6rem 0;
  line-height: 1.1;

  @media (max-width: 900px) {
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
`,hY=m($.p)`
  color: #444;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  opacity: 0.9;
  max-width: 950px;

  a {
    color: #3e2ffc;
    font-weight: 700;
    text-decoration: underline;
  }

  strong, b {
    font-weight: 700;
    color: #2196f3;
  }

  .em {
    font-weight: 700;
    color: #3e2ffc;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`,pY=m($.hr)`
  border: none;
  border-top: 2px solid var(--border);
  margin: 2.1rem 0 2.1rem 0;
  width: 100%;
  opacity: 0.6;
`,fY=m.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  margin-bottom: 2.2rem;
  flex-wrap: wrap;
  background: transparent;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,Eu=m.div`
  flex: 1;
  min-width: 160px;
`,Iu=m.div`
  font-size: 1rem;
  font-weight: 700;
  color: #3e2ffc;
  margin-bottom: 0.3rem;
  letter-spacing: 0.01em;
  text-transform: uppercase;
`,Au=m.ul`
  padding-left: 1.1em;
  margin: 0.1em 0 0.7em 0;
  font-size: 1rem;
  color: #444;
  line-height: 1.5;
  opacity: 0.9;

  li {
    margin-bottom: 2px;
  }
`,mY=m($.h2)`
  color: #181818;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 1.1rem 0 1rem 0;
  letter-spacing: 0.02em;
  opacity: 0.8;
`,gY=m.div`
  display: flex;
  gap: 0.7rem;
  margin: 0.5rem 0 0 0;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`,N0=m($.div)`
  background: ${t=>t.bg};
  color: white;
  border-radius: 12px;
  flex: 1;
  min-width: 150px;
  padding: 1.1rem;
  display: flex;
  flex-direction: column;
  min-height: 90px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    min-width: 0;
    padding: 0.9rem 0.8rem;
  }
`,V0=m.div`
  font-size: 1.7rem;
  font-weight: 900;
  margin-bottom: 0.15rem;
  line-height: 1;
`,W0=m.span`
  font-size: 0.98rem;
  font-weight: 700;
  margin-left: 0.3rem;
`,U0=m.div`
  margin-top: 0.2rem;
  font-size: 0.98rem;
  font-weight: 400;
  color: #fff;
  line-height: 1.35;
`,xY=()=>{const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},e={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx(st,{title:"User Insight & Research Findings | Workday UX Project",description:"Discover the key insights from user research and usability testing that revealed critical pain points in the Workday app experience.",keywords:"user insight, UX research, usability testing, user feedback, Workday app, design research",image:"/src/assets/work/user-insight.jpg"}),a.jsx(cY,{children:a.jsxs(dY,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx(uY,{variants:e,children:"User Insight"}),a.jsxs(hY,{variants:e,children:["To gain a better understanding of real user frustrations, I started with an ",a.jsx("a",{href:"#",children:"open-ended Google Form survey"}),". From the responses, I intentionally selected five ",a.jsx("strong",{children:"part-time workers"}),", as their lifestyle closely matched the app's target audience. During the usability sessions, participants frequently expressed ",a.jsx("span",{className:"em",children:"frustration"})," due to the long and ",a.jsx("span",{className:"em",children:"confusing steps, lack of clear guidance, and unclear instructions"}),". These issues caused confusion and made the overall experience feel frustrating and mentally exhausting for them."]}),a.jsx(pY,{variants:e}),a.jsxs(fY,{children:[a.jsxs(Eu,{children:[a.jsx(Iu,{children:"METHOD"}),a.jsxs(Au,{children:[a.jsx("li",{children:"In-person moderated usability testing"}),a.jsx("li",{children:"Mostly observation with occasional guidance"})]})]}),a.jsxs(Eu,{children:[a.jsx(Iu,{children:"PARTICIPANTS"}),a.jsx(Au,{children:a.jsx("li",{children:"5 part-time workers aligned with target audience"})})]}),a.jsxs(Eu,{children:[a.jsx(Iu,{children:"TASKS"}),a.jsxs(Au,{children:[a.jsx("li",{children:"Find the current week's schedule"}),a.jsx("li",{children:'Locate the "Day Off" option'}),a.jsx("li",{children:"Request and track a day off for two days in the upcoming week via mobile app"})]})]}),a.jsxs(Eu,{children:[a.jsx(Iu,{children:"DATA COLLECTION"}),a.jsx(Au,{children:a.jsx("li",{children:"Varied per participant, depending on their pace and task complexity"})})]})]}),a.jsx(mY,{variants:e,children:"What I found!"}),a.jsxs(gY,{children:[a.jsxs(N0,{bg:"#ff7c1d",variants:e,whileHover:{scale:1.02},transition:{duration:.2},children:[a.jsxs(V0,{children:["60% ",a.jsx(W0,{children:"3/5"})]}),a.jsxs(U0,{children:["Viewing weekly schedule was tiring",a.jsx("br",{}),"3 users had to check days one by one",a.jsx("br",{}),"and write them down on paper"]})]}),a.jsxs(N0,{bg:"#ff9528",variants:e,whileHover:{scale:1.02},transition:{duration:.2},children:[a.jsxs(V0,{children:["80% ",a.jsx(W0,{children:"4/5"})]}),a.jsxs(U0,{children:['Hard to find "Day Off" option',a.jsx("br",{}),"Most users struggled to locate it"]})]}),a.jsxs(N0,{bg:"#ffb531",variants:e,whileHover:{scale:1.02},transition:{duration:.2},children:[a.jsxs(V0,{children:["50% ",a.jsx(W0,{children:"2.5/5"})]}),a.jsxs(U0,{children:["Unclear how to track time-off request",a.jsx("br",{}),"Users didn't know what happens after submitting"]})]})]})]})})]})},wY=m.section`
  width: 100%;
  padding: 2rem 0;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem 0;
    min-height: auto;
  }
`,yY=m($.section)`
  background: transparent;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  padding: 4rem 5rem;
  position: relative;

  @media (max-width: 1024px) {
    width: 95%;
    padding: 3rem 3rem;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    width: 98%;
    padding: 1.5rem 1rem;
  }
`,vY=m($.h1)`
  color: #181818;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1.6rem 0;
  line-height: 1.1;

  @media (max-width: 900px) {
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
`,bY=m($.p)`
  color: #444;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  margin-top: 0;
  text-align: left;
  opacity: 0.9;

  b {
    color: #3e2ffc;
    font-weight: 700;
  }

  .highlight {
    color: #2196f3;
    font-weight: 700;
  }

  @media (max-width: 900px) {
    font-size: 1rem;
    text-align: center;
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }
`,kY=m($.hr)`
  border: none;
  border-top: 2px solid #e0e0e0;
  margin: 3.3rem 0 2.7rem 0;
  width: 100%;
  opacity: 0.6;

  @media (max-width: 768px) {
    margin: 2.5rem 0 2rem 0;
  }

  @media (max-width: 480px) {
    margin: 2rem 0 1.5rem 0;
  }
`,jY=m($.h2)`
  color: #181818;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.65rem;
  margin-top: 0;
  text-align: left;

  @media (max-width: 900px) {
    font-size: 1.6rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`,DY=m($.ol)`
  padding-left: 1.1em;
  margin: 0.1em 0 0.7em 0;
  font-size: 1.1rem;
  color: #444;
  line-height: 1.6;
  opacity: 0.9;

  li {
    margin-bottom: 2px;
    position: relative;
    
    &::marker {
      color: #3e2ffc;
      font-weight: 700;
    }

    b, .goal-num {
      color: #2196f3;
      font-weight: 700;
      margin-right: 0.3em;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`,SY=m($.div)`
  background: rgba(248, 248, 248, 0.8);
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    border-color: #3e2ffc;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`,_Y=m.span`
  color: #3e2ffc;
  font-weight: 700;
  font-size: 1rem;
  margin-right: 0.5rem;
`,CY=m.span`
  color: #444;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.9;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`,PY=()=>{const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},e={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},i=["Make the weekly schedule easily viewable at a glance on a single screen.","Simplify the time-off request process with fewer, clearer steps.","Provide clear, immediate feedback after submitting a time-off request."];return a.jsxs(a.Fragment,{children:[a.jsx(st,{title:"Challenge & Goals | UX Design Process",description:"Explore the design challenges and UX goals for creating intuitive user experiences that prioritize simplicity and efficiency.",keywords:"UX challenges, design goals, user experience, design process, UX objectives",image:"/src/assets/work/challenge-goals.jpg"}),a.jsx(wY,{children:a.jsxs(yY,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx(vY,{variants:e,children:"Challenge"}),a.jsxs(bY,{variants:e,children:[a.jsx("b",{children:"How might I"})," make it easier for users to access their full weekly schedule at a glance, all on one screen?",a.jsx("br",{}),"And how can I simplify the time-off request process so it's clear, fast, and takes only a few clicks?"]}),a.jsx(kY,{variants:e}),a.jsx(jY,{variants:e,children:"UX Goals"}),a.jsx(DY,{variants:e,children:i.map((n,r)=>a.jsxs(SY,{variants:e,whileHover:{scale:1.02},transition:{duration:.2},children:[a.jsxs(_Y,{children:[r+1,"."]}),a.jsx(CY,{children:n})]},r))})]})})]})},TY=m.section`
  width: 100%;
  padding: 2rem 0;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem 0;
    min-height: auto;
  }
`,EY=m($.section)`
  background: transparent;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  padding: 4rem 5rem;
  position: relative;

  @media (max-width: 1024px) {
    width: 95%;
    padding: 3rem 3rem;
  }

  @media (max-width: 900px) {
    width: 95%;
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    width: 98%;
    padding: 1.5rem 1rem;
  }
`,IY=m($.div)`
  color: #3e2ffc;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`,AY=m($.h1)`
  color: #181818;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1.6rem 0;
  line-height: 1.1;

  @media (max-width: 900px) {
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
`,MY=m($.p)`
  color: #444;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  margin-top: 0;
  text-align: left;
  opacity: 0.9;

  @media (max-width: 900px) {
    font-size: 1rem;
    text-align: center;
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }
`,zY=m($.h2)`
  color: #3e2ffc;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.65rem;
  margin-top: 0;
  text-align: left;

  @media (max-width: 900px) {
    font-size: 1.6rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`,FY=m.div`
  width: 100%;
  margin: 0 auto;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    overflow-x: hidden;
  }
`,RY=m.iframe`
  width: 1000px;
  height: 560px;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);

  @media (max-width: 1100px) {
    width: 98vw;
    min-width: 320px;
    height: 52vw;
    min-height: 300px;
    max-width: 100vw;
  }

  @media (max-width: 600px) {
    width: 95vw;
    height: 50vw;
    min-height: 250px;
    border-radius: 8px;
  }
`,LY=()=>{const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},e={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx(st,{title:"Solution 1: Making a Schedule | Workday UX Project",description:"Explore the first solution for the Workday app - an improved schedule viewing experience that allows users to see their entire week at a glance.",keywords:"schedule solution, UX design, mobile app, user experience, Workday app, design solution",image:"/src/assets/work/solution1-schedule.jpg"}),a.jsx(TY,{children:a.jsxs(EY,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx(IY,{variants:e,children:"Solution1"}),a.jsx(AY,{variants:e,children:"Making a Schedule"}),a.jsx(MY,{variants:e,children:`It's super easy to view your schedule—just tap the "Schedule" button right on the home page. By default, it shows the current week with all the daily details. You can scroll down to see your whole month or even the entire year, all on the same page. And if you're looking for a specific date, there's a quick option to type it in and jump right to it.`}),a.jsx(zY,{variants:e,children:"Flow 1"}),a.jsx(FY,{children:a.jsx(RY,{src:"https://embed.figma.com/design/PItVAtjB7EYlwC1YSejOQD/WORKday-App?node-id=138-103&embed-host=share",allowFullScreen:!0})})]})})]})},OY=m.section`
  width: 100%;
  padding: 2rem 0;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem 0;
    min-height: auto;
  }
`,$Y=m($.section)`
  background: transparent;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  padding: 4rem 5rem;
  position: relative;

  @media (max-width: 1024px) {
    width: 95%;
    padding: 3rem 3rem;
  }

  @media (max-width: 900px) {
    width: 95%;
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    width: 98%;
    padding: 1.5rem 1rem;
  }
`,BY=m($.div)`
  color: #3e2ffc;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`,NY=m($.h1)`
  color: #181818;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1.6rem 0;
  line-height: 1.1;

  @media (max-width: 900px) {
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
`,VY=m($.p)`
  color: #444;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  margin-top: 0;
  text-align: left;
  opacity: 0.9;

  @media (max-width: 900px) {
    font-size: 1rem;
    text-align: center;
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }
`,WY=m($.h2)`
  color: #3e2ffc;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.65rem;
  margin-top: 0;
  text-align: left;

  @media (max-width: 900px) {
    font-size: 1.6rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`,UY=m.div`
  width: 100%;
  margin: 0 auto;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    overflow-x: hidden;
  }
`,HY=m.iframe`
  width: 1000px;
  height: 560px;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);

  @media (max-width: 1100px) {
    width: 98vw;
    min-width: 320px;
    height: 52vw;
    min-height: 300px;
    max-width: 100vw;
  }

  @media (max-width: 600px) {
    width: 95vw;
    height: 50vw;
    min-height: 250px;
    border-radius: 8px;
  }
`,YY=()=>{const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},e={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx(st,{title:"Solution 2: Taking a Day Off & Getting Notified | Workday UX Project",description:"Explore the second solution for the Workday app - a streamlined time-off request process with instant notifications and clear feedback.",keywords:"time off solution, notifications, UX design, mobile app, user experience, Workday app, design solution",image:"/src/assets/work/solution2-timeoff.jpg"}),a.jsx(OY,{children:a.jsxs($Y,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx(BY,{variants:e,children:"Solution 2"}),a.jsx(NY,{variants:e,children:"Taking a Day Off & Getting Notified"}),a.jsx(VY,{variants:e,children:`Since taking time off and receiving updates are closely connected, they're combined into one simple flow. Users just tap the "Time Off" button on the home page, select their start and end dates, and quickly double-check everything on the calendar. After hitting submit, they'll instantly get a confirmation message. Once the manager reviews the request, users receive a notification with the result—either approved or declined—so they're always kept in the loop.`}),a.jsx(WY,{variants:e,children:"Flow 2"}),a.jsx(UY,{children:a.jsx(HY,{src:"https://embed.figma.com/design/PItVAtjB7EYlwC1YSejOQD/WORKday-App?node-id=165-670&embed-host=share",allowFullScreen:!0})})]})})]})},GY="/assets/1sol.74afc9a9.mp4",XY="/assets/2sol.5120d106.mp4",ZY=m.section`
  width: 100%;
  padding: 2rem 0;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem 0;
    min-height: auto;
  }
`,qY=m($.section)`
  background: transparent;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  padding: 4rem 5rem;
  position: relative;
  min-height: 500px;

  @media (max-width: 1024px) {
    width: 95%;
    padding: 3rem 3rem;
  }

  @media (max-width: 900px) {
    width: 95%;
    padding: 2rem 1.5rem;
    min-height: auto;
  }

  @media (max-width: 480px) {
    width: 98%;
    padding: 1.5rem 1rem;
  }
`,QY=m($.div)`
  color: #3e2ffc;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`,KY=m($.h1)`
  color: #181818;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1.6rem 0;
  line-height: 1.1;

  @media (max-width: 900px) {
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
`,JY=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 500px;
  }

  @media (max-width: 600px) {
    gap: 1rem;
    max-width: 400px;
  }
`,Ib=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ab=m($.h2)`
  color: #3e2ffc;
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 1.3rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`,Mb=m.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,zb=m.video`
  width: 100%;
  height: auto;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  display: block;
  border: 1px solid #f0f0f0;
  max-width: 300px;

  @media (max-width: 900px) {
    max-width: 250px;
  }

  @media (max-width: 600px) {
    max-width: 200px;
  }
`,Fb=m.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 8px;
  gap: 12px;
  user-select: none;
  max-width: 300px;

  @media (max-width: 900px) {
    max-width: 250px;
  }

  @media (max-width: 600px) {
    gap: 8px;
    margin-top: 6px;
    max-width: 200px;
  }
`,Rb=m.button`
  background: #3e2ffc;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: background 0.2s;

  @media (max-width: 600px) {
    width: 28px;
    height: 28px;
    font-size: 1rem;
  }

  &:hover {
    background: #2196f3;
  }
`,Lb=m.input.attrs({type:"range"})`
  flex: 1 1 0;
  width: 100%;
  margin: 0 8px;
  accent-color: #3e2ffc;
  height: 4px;

  @media (max-width: 600px) {
    margin: 0 4px;
  }
`,Ob=m.span`
  font-size: 0.85rem;
  color: #444;
  min-width: 40px;
  text-align: right;
  opacity: 0.8;

  @media (max-width: 600px) {
    font-size: 0.8rem;
    min-width: 32px;
  }
`;function Mu(t){const e=Math.floor(t/60).toString().padStart(2,"0"),i=Math.floor(t%60).toString().padStart(2,"0");return`${e}:${i}`}const eG=()=>{const t=T.useRef(null),e=T.useRef(null),[i,n]=T.useState(!1),[r,s]=T.useState(!1),[o,l]=T.useState(0),[c,d]=T.useState(0),[u,p]=T.useState(0),[f,g]=T.useState(0),v=()=>{t.current&&(t.current.paused?(t.current.play(),n(!0)):(t.current.pause(),n(!1)))},w=()=>{t.current&&l(t.current.currentTime)},S=()=>{t.current&&p(t.current.duration)},j=E=>{const z=parseFloat(E.target.value);t.current&&(t.current.currentTime=z,l(z))},b=()=>{n(!1),l(u)},y=()=>{e.current&&(e.current.paused?(e.current.play(),s(!0)):(e.current.pause(),s(!1)))},h=()=>{e.current&&d(e.current.currentTime)},x=()=>{e.current&&g(e.current.duration)},k=E=>{const z=parseFloat(E.target.value);e.current&&(e.current.currentTime=z,d(z))},D=()=>{s(!1),d(f)},_={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},C={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx(st,{title:"Final Look: Making a Schedule | Workday UX Project",description:"See the final implementation of the improved schedule viewing experience in the Workday app with interactive video demonstration.",keywords:"final UI, schedule design, UX implementation, mobile app, Workday app, design showcase",image:"/src/assets/work/final-schedule.jpg"}),a.jsx(ZY,{children:a.jsxs(qY,{variants:_,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx(QY,{variants:C,children:"Final look of Making a Schedule"}),a.jsx(KY,{variants:C,children:"Flow 1"}),a.jsxs(JY,{children:[a.jsxs(Ib,{children:[a.jsx(Ab,{variants:C,children:"Schedule Flow"}),a.jsxs(Mb,{children:[a.jsx(zb,{ref:t,src:GY,onTimeUpdate:w,onLoadedMetadata:S,onEnded:b,playsInline:!0}),a.jsxs(Fb,{children:[a.jsx(Rb,{onClick:v,"aria-label":i?"Pause":"Play",children:i?"❚❚":"►"}),a.jsx(Lb,{min:0,max:u,step:.1,value:o,onChange:j,"aria-label":"Video 1 progress"}),a.jsxs(Ob,{children:[Mu(o)," / ",Mu(u)]})]})]})]}),a.jsxs(Ib,{children:[a.jsx(Ab,{variants:C,children:"Time Off Flow"}),a.jsxs(Mb,{children:[a.jsx(zb,{ref:e,src:XY,onTimeUpdate:h,onLoadedMetadata:x,onEnded:D,playsInline:!0}),a.jsxs(Fb,{children:[a.jsx(Rb,{onClick:y,"aria-label":r?"Pause":"Play",children:r?"❚❚":"►"}),a.jsx(Lb,{min:0,max:f,step:.1,value:c,onChange:k,"aria-label":"Video 2 progress"}),a.jsxs(Ob,{children:[Mu(c)," / ",Mu(f)]})]})]})]})]})]})})]})},tG=m.section`
  width: 100%;
  padding: 2rem 0;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 1rem 0;
    min-height: auto;
  }
`,iG=m($.section)`
  background: transparent;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  padding: 4rem 5rem;
  position: relative;

  @media (max-width: 1024px) {
    width: 95%;
    padding: 3rem 3rem;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    width: 98%;
    padding: 1.5rem 1rem;
  }
`,nG=m($.div)`
  color: #3e2ffc;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }
`,rG=m($.h1)`
  color: #181818;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1.6rem 0;
  line-height: 1.1;

  @media (max-width: 900px) {
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
`,sG=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`,$b=m($.p)`
  color: #444;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  opacity: 0.9;
  max-width: 100%;

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 0.7rem;
  }
`,oG=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
  }
`,aG=m($.div)`
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    border-color: #3e2ffc;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`,lG=m.h3`
  color: #3e2ffc;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`,cG=m.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`,dG=()=>{const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},e={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},i=[{title:"User-Centered Design",text:"Focus on user needs and behaviors rather than just aesthetics. Speed and simplicity are paramount for busy users."},{title:"Clear Structure",text:"Use intuitive navigation, proper button placement, and readable typography to guide users efficiently."},{title:"Visual Balance",text:"A well-designed app should look good while feeling effortless to use - this balance is key to success."}];return a.jsxs(a.Fragment,{children:[a.jsx(st,{title:"Key Takeaways | Design Insights & Learnings",description:"Discover the key insights and learnings from our design projects, focusing on user-centered design principles and effective UX strategies.",keywords:"key takeaways, design insights, UX learnings, user-centered design, design principles",image:"/src/assets/work/key-takeaways.jpg"}),a.jsx(tG,{children:a.jsxs(iG,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx(nG,{variants:e,children:"Finally"}),a.jsx(rG,{variants:e,children:"Key Takeaways"}),a.jsxs(sG,{children:[a.jsx($b,{variants:e,children:"Redesigning this app taught me that today's users — especially busy people like part-time workers — value speed and simplicity above all. As a designer, it's easy to get caught up in visuals and aesthetics (which do matter!), but what matters more is how easily someone can use the product."}),a.jsx($b,{variants:e,children:"I learned the importance of using clear structure, proper button placement, readable fonts, and intuitive color choices to guide users quickly and confidently through their tasks. A well-designed app should not only look good, but feel effortless to use — and that balance is what I aim for in every project."})]}),a.jsx(oG,{children:i.map((n,r)=>a.jsxs(aG,{variants:e,whileHover:{scale:1.02},transition:{duration:.2},children:[a.jsx(lG,{children:n.title}),a.jsx(cG,{children:n.text})]},r))})]})})]})},uG=m.div`
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  padding: 1.5rem 1rem;
  max-width: 200px;
  min-width: 160px;
  
  /* Hide on mobile and tablet */
  @media (max-width: 1024px) {
    display: none;
  }
`,hG=m.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #181818;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: left;
`,pG=m.button`
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.75rem 0.5rem;
  margin: 0.25rem 0;
  font-size: 0.9rem;
  font-weight: ${t=>t.isClicked?"700":t.isActive?"600":"400"};
  color: ${t=>t.isClicked||t.isActive?"#3e2ffc":"#444"};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  border-radius: 4px;

  &:hover {
    color: #3e2ffc;
    background: rgba(62, 47, 252, 0.05);
  }
`,H0=[{id:"overview",label:"Overview",targetId:"overview"},{id:"problems",label:"Problems",targetId:"problems"},{id:"user-insight",label:"User Insight",targetId:"user-insight"},{id:"challenge",label:"Challenge",targetId:"challenge"},{id:"solutions",label:"Solutions",targetId:"solutions"},{id:"final-ui",label:"Final UI",targetId:"final-ui"},{id:"takeaway",label:"Takeaway",targetId:"takeaway"}],fG=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("overview");q.useEffect(()=>{const s={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},o=new IntersectionObserver(l=>{l.forEach(c=>{if(c.isIntersecting){const d=c.target.id,u=H0.find(p=>p.targetId===d);u&&n(u.id)}})},s);return H0.forEach(l=>{const c=document.getElementById(l.targetId);c&&o.observe(c)}),()=>{o.disconnect()}},[]);const r=(s,o)=>{const l=document.getElementById(s);l&&(l.scrollIntoView({behavior:"smooth",block:"center"}),e(o))};return a.jsxs(uG,{children:[a.jsx(hG,{children:"Menu"}),H0.map(s=>a.jsx(pG,{isActive:i===s.id,isClicked:t===s.id,onClick:()=>r(s.targetId,s.id),children:s.label},s.id))]})},mG=Cr`
  body {
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    font-weight: 400;
    background: #ffffff;
    transition: background 0.6s;
  }
`,gG=m.div`
  min-height: 100vh;
  width: 100vw;
  background: #ffffff;
  transition: background 0.2s;
  overflow-x: hidden;
  overflow-y: auto;
`,fw=m($.section)`
  background: transparent;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  position: relative;

  @media (max-width: 1024px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    width: 95%;
  }

  @media (max-width: 480px) {
    width: 98%;
  }
`,xG=m(fw)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 4rem 5rem;
  gap: 4rem;
  min-height: 400px;

  @media (max-width: 1024px) {
    padding: 3rem 3rem;
    gap: 3rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem 1.5rem;
    gap: 2rem;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    gap: 1.5rem;
  }
`,wG=m.img`
  width: 340px;
  min-width: 220px;
  max-width: 38vw;
  height: auto;
  border-radius: 32px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08);
  background: #ffffff;
  flex-shrink: 0;

  @media (max-width: 900px) {
    width: 60vw;
    max-width: 300px;
    min-width: 200px;
    margin: 0 auto;
  }

  @media (max-width: 600px) {
    width: 70vw;
    max-width: 250px;
    min-width: 180px;
  }
`,yG=m.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 280px;

  @media (max-width: 900px) {
    min-width: 0;
    width: 100%;
  }
`,vG=m.h1`
  color: #3e2ffc;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0 0 1.6rem 0;

  @media (max-width: 900px) {
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
`,bG=m.h2`
  color: #181818;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.65rem;
  margin-top: 0;

  @media (max-width: 900px) {
    font-size: 1.6rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`,kG=m.div`
  max-width: 520px;
  width: 100%;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`,jG=m.p`
  color: #444;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 2.2rem;
  margin-top: 0;
  text-align: left;
  opacity: 0.9;

  @media (max-width: 900px) {
    font-size: 15px;
    text-align: center;
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    font-size: 14px;
    margin-bottom: 1.8rem;
  }
`,DG=m.hr`
  border: none;
  border-top: 2px solid #e0e0e0;
  margin-bottom: 1.3rem;
  margin-top: 0;
  width: 100%;
  opacity: 0.6;
`,SG=m.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  width: 100%;
  max-width: 520px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0.75rem;
    max-width: 100%;
  }
`,Y0=m.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;

  @media (max-width: 900px) {
    text-align: center;
  }
`,G0=m.span`
  font-size: 1rem;
  font-weight: 700;
  color: #3e2ffc;
  letter-spacing: 0.5px;
  margin-bottom: 0.16rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`,X0=m.span`
  color: #444;
  font-size: 14px;
  font-weight: 400;
  white-space: pre-line;
  opacity: 0.9;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`,_G=m(fw)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 5rem;
  margin-top: 0;
  gap: 0;
  min-height: 400px;

  @media (max-width: 1024px) {
    padding: 3rem 3rem;
  }

  @media (max-width: 900px) {
    padding: 2rem 1.5rem;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`,CG=m.h2`
  color: #181818;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  margin-top: 0;
  text-align: center;

  @media (max-width: 900px) {
    font-size: 1.8rem;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`,PG=m.h3`
  color: #666;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 2.2rem;
  margin-top: 0;
  text-align: center;
  opacity: 0.7;

  @media (max-width: 600px) {
    font-size: 0.9rem;
    margin-bottom: 1.8rem;
  }
`,TG=m.hr`
  border: none;
  border-top: 2px solid #3e2ffc;
  width: 60%;
  margin: 0 auto 2rem auto;
  opacity: 0.6;

  @media (max-width: 600px) {
    width: 80%;
    margin-bottom: 1.5rem;
  }
`,EG=m.div`
  display: flex;
  gap: 2vw;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  @media (max-width: 600px) {
    gap: 1rem;
    margin-top: 1.5rem;
  }
`,Z0=m.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
  padding: 2.2rem 1.3rem 1.5rem 1.3rem;
  width: 29%;
  min-width: 220px;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-sizing: border-box;
  color: #444;
  min-height: 90px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    border-color: #3e2ffc;
  }
  
  @media (max-width: 1000px) {
    width: 90%;
    max-width: 340px;
  }

  @media (max-width: 600px) {
    width: 95%;
    padding: 1.8rem 1rem 1.2rem 1rem;
    border-radius: 12px;
  }
`,q0=m.img`
  width: 54px;
  height: 54px;
  object-fit: contain;
  margin-bottom: 1.4rem;
  margin-top: 0.1rem;
  display: block;

  @media (max-width: 600px) {
    width: 48px;
    height: 48px;
    margin-bottom: 1.2rem;
  }
`,Q0=m.div`
  color: #444;
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
  margin-top: 0.2rem;
  line-height: 1.4;
  opacity: 0.9;

  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`;m(fw)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  min-height: 400px;
  @media (max-width: 900px) {
    flex-direction: column;
    min-height: auto;
  }
`;m.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4vw 0 4vw 4vw;
  min-width: 340px;
  @media (max-width: 900px) {
    padding: 2.5rem 1.2rem 2rem 1.2rem;
    align-items: center;
    width: 100%;
    min-width: 0;
    flex: none;
  }
  @media (max-width: 600px) {
    padding: 2rem 1rem 1.5rem 1rem;
  }
`;m.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 280px;
  padding: 0 3vw 0 0;
  @media (max-width: 900px) {
    padding: 0 0 2rem 0;
    width: 100%;
    min-width: 0;
    justify-content: center;
    flex: none;
  }
  @media (max-width: 600px) {
    padding: 0 0 1.5rem 0;
  }
`;m.div`
  color: #888;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 0.8rem;
  font-family: 'Inter', sans-serif;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;m.h2`
  color: #3e2ffc;
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 1.2rem 0;
  font-family: 'Inter', sans-serif;
  text-align: left;
  @media (max-width: 900px) {
    text-align: center;
    width: 100%;
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
    margin-bottom: 1rem;
  }
`;m.p`
  color: #444;
  font-size: 1.05rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.6;
  font-family: 'Inter', sans-serif;
  max-width: 420px;
  text-align: left;
  @media (max-width: 900px) {
    text-align: center;
    font-size: 0.98rem;
    max-width: 100%;
  }
  @media (max-width: 600px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;m.div`
  background: #ffffff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  width: 260px;
  height: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1.5px solid #f0f0f0;
  @media (max-width: 900px) {
    width: 200px;
    height: 420px;
  }
  @media (max-width: 600px) {
    width: 170px;
    height: 350px;
    border-radius: 12px;
  }
`;m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;
  @media (max-width: 600px) {
    border-radius: 12px;
  }
`;const IG=m.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  position: relative;
`,AG=m.div`
  position: sticky;
  top: 0;
  align-self: flex-start;
  z-index: 101;

  @media (max-width: 900px) {
    display: none;
  }
`,MG=m.div`
  flex: 1;
  padding: 2rem;

  @media (max-width: 900px) {
    padding: 1rem;
  }

  @media (max-width: 600px) {
    padding: 0.5rem;
  }

  /* Consistent spacing between all components */
  & > div {
    margin-bottom: 4rem;
  }

  & > div:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    & > div {
      margin-bottom: 2rem;
    }
  }
`,zG=()=>a.jsxs(a.Fragment,{children:[a.jsxs(gG,{children:[a.jsx(st,{title:"Workday UX/UI Project | Nooshin Shahsavan - Mobile App Design",description:"Explore the Workday UX/UI project - a comprehensive mobile app design by Nooshin Shahsavan focusing on employee scheduling, time-off management, and workplace communication.",keywords:"Workday project, UX/UI design, mobile app design, user experience, interface design, Nooshin Shahsavan, design portfolio",image:"/src/assets/work/workday-phone.png"}),a.jsx(mG,{}),a.jsxs(IG,{children:[a.jsx(AG,{children:a.jsx(fG,{})}),a.jsxs(MG,{id:"content-wrapper",children:[a.jsx("div",{id:"overview",children:a.jsxs(xG,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:[a.jsx(wG,{src:b4,alt:"Workday App Mockup"}),a.jsxs(yG,{children:[a.jsx(vG,{children:"WORKDAY APP"}),a.jsx(bG,{children:"Overview"}),a.jsxs(kG,{children:[a.jsx(jG,{children:"Workday is a self - service portal , and Workday mobile app , designed to make it easy for employees to access essential information about their work and manage various tasks . employees check the schedule for the upcoming week , view their recent paycheck , ensuring all hours worked are accounted for . If they need time off , they can quickly submit a request and track its status ."}),a.jsx(DG,{}),a.jsxs(SG,{children:[a.jsxs(Y0,{children:[a.jsx(G0,{children:"MY ROLE"}),a.jsx(X0,{children:"UX-UI designer"})]}),a.jsxs(Y0,{children:[a.jsx(G0,{children:"DURATION"}),a.jsx(X0,{children:"4 weeks"})]}),a.jsxs(Y0,{children:[a.jsx(G0,{children:"TOOLS"}),a.jsxs(X0,{children:["Figma",`
`,"FigJam",`
`,"Photoshop"]})]})]})]})]})]})}),a.jsxs("div",{id:"problems",children:[a.jsxs(_G,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:[a.jsx(CG,{children:"Problem at a Glance"}),a.jsx(PG,{children:"Key Issues Identified"}),a.jsx(TG,{}),a.jsxs(EG,{children:[a.jsxs(Z0,{children:[a.jsx(q0,{src:lH,alt:"Schedule Icon"}),a.jsx(Q0,{children:"The schedule view is cluttered and hard to read, making it difficult for users to quickly understand their upcoming shifts."})]}),a.jsxs(Z0,{children:[a.jsx(q0,{src:cH,alt:"Time Off Icon"}),a.jsx(Q0,{children:"Requesting time off is a multi-step process that requires navigating through multiple screens."})]}),a.jsxs(Z0,{children:[a.jsx(q0,{src:dH,alt:"Notification Icon"}),a.jsx(Q0,{children:"Users receive no feedback after submitting time off requests, leaving them uncertain about the status."})]})]})]}),a.jsx(bH,{}),a.jsx(AH,{}),a.jsx(WH,{})]}),a.jsxs("div",{id:"user-insight",children:[a.jsx(lY,{}),a.jsx(xY,{})]}),a.jsx("div",{id:"challenge",children:a.jsx(PY,{})}),a.jsxs("div",{id:"solutions",children:[a.jsx(LY,{}),a.jsx(YY,{})]}),a.jsx("div",{id:"final-ui",children:a.jsx(eG,{})}),a.jsx("div",{id:"takeaway",children:a.jsx(dG,{})})]})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"center",width:"100%",background:"#ffffff"},children:[a.jsx("style",{children:`
            .menu-work-container {
              background: #ffffff !important;
            }
            .menu-work-title {
              color: #181818 !important;
            }
          `}),a.jsx(No,{})]}),a.jsx($o,{})]}),a.jsx(Bo,{})]}),FG=m.div`
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  padding: 1.5rem 1rem;
  max-width: 200px;
  min-width: 160px;
  
  /* Hide on mobile and tablet */
  @media (max-width: 1024px) {
    display: none;
  }
`,RG=m.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: left;
`,LG=m.button`
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.75rem 0.5rem;
  margin: 0.25rem 0;
  font-size: 0.9rem;
  font-weight: ${t=>t.isClicked?"700":t.isActive?"600":"400"};
  color: ${t=>t.isClicked||t.isActive?"#000000":"#888888"};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  border-radius: 4px;

  &:hover {
    color: #000000;
    background: rgba(0, 0, 0, 0.05);
  }
`,K0=[{id:"photography",label:"Photography",targetId:"fun-photography"},{id:"illustrations",label:"Illustrations & Graphics",targetId:"fun-illustrations"},{id:"ar-vr",label:"AR/VR Experience",targetId:"fun-ar-vr"},{id:"animation",label:"2D Animation",targetId:"fun-animation"}],OG=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("photography");q.useEffect(()=>{const s={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},o=new IntersectionObserver(l=>{l.forEach(c=>{if(c.isIntersecting){const d=c.target.id,u=K0.find(p=>p.targetId===d);u&&n(u.id)}})},s);return K0.forEach(l=>{const c=document.getElementById(l.targetId);c&&o.observe(c)}),()=>{o.disconnect()}},[]);const r=(s,o)=>{const l=document.getElementById(s);l&&(l.scrollIntoView({behavior:"smooth",block:"center"}),e(o))};return a.jsxs(FG,{children:[a.jsx(RG,{children:"Menu"}),K0.map(s=>a.jsx(LG,{isActive:i===s.id,isClicked:t===s.id,onClick:()=>r(s.targetId,s.id),children:s.label},s.id))]})},$G="/assets/straw1.d023f398.MP4",BG="/assets/straw3.a8624565.png",NG="/assets/straw4.8dc90d25.jpg",VG="/assets/straw5.00eb7c35.png",WG="/assets/g4.30fc4dab.jpg",UG="/assets/g2.55ac7e77.jpg",HG="/assets/g1.12d671ca.png",YG="/assets/p1.7b415a4d.png",GG="/assets/p2.bd8d0138.jpg",XG="/assets/g3.b54ed427.png",ZG="/assets/vr.8bf5a7e9.mp4",qG="/assets/2D.bd827e54.mp4",QG=({src:t,className:e,style:i})=>{const n=T.useRef(null),[r,s]=T.useState(!1),[o,l]=T.useState(0),[c,d]=T.useState(0);T.useEffect(()=>{const v=n.current;if(!v)return;const w=()=>l(v.currentTime),S=()=>d(v.duration),j=()=>s(!0),b=()=>s(!1);return v.addEventListener("timeupdate",w),v.addEventListener("loadedmetadata",S),v.addEventListener("play",j),v.addEventListener("pause",b),()=>{v.removeEventListener("timeupdate",w),v.removeEventListener("loadedmetadata",S),v.removeEventListener("play",j),v.removeEventListener("pause",b)}},[]);const u=()=>{n.current&&(r?n.current.pause():n.current.play())},p=v=>{if(n.current){const w=parseFloat(v.target.value)/100*c;n.current.currentTime=w}},f=v=>{const w=Math.floor(v/60),S=Math.floor(v%60);return`${w}:${S.toString().padStart(2,"0")}`},g=c>0?o/c*100:0;return a.jsxs("div",{className:`custom-video-player ${e||""}`,style:i,children:[a.jsx("video",{ref:n,src:t,playsInline:!0,muted:!0,style:{width:"100%",height:"100%",objectFit:"cover"}}),a.jsxs("div",{className:"video-controls",children:[a.jsx("button",{className:"play-pause-btn",onClick:u,"aria-label":r?"Pause":"Play",children:r?"⏸️":"▶️"}),a.jsx("div",{className:"progress-container",children:a.jsx("input",{type:"range",min:"0",max:"100",value:g,onChange:p,className:"progress-bar"})}),a.jsxs("div",{className:"time-display",children:[f(o)," / ",f(c)]})]}),a.jsx("style",{children:`
        .custom-video-player {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
        }
        .video-controls {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          padding: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          opacity: 1;
          transition: opacity 0.3s ease;
        }
        .play-pause-btn {
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
          padding: 5px;
          border-radius: 4px;
          transition: background-color 0.2s ease;
        }
        .play-pause-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .progress-container {
          flex: 1;
          position: relative;
        }
        .progress-bar {
          width: 100%;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 2px;
          outline: none;
          cursor: pointer;
          -webkit-appearance: none;
        }
        .progress-bar::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
        }
        .progress-bar::-moz-range-thumb {
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
        .time-display {
          color: white;
          font-size: 12px;
          font-family: monospace;
          min-width: 80px;
          text-align: right;
        }
      `})]})},j4=yd`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`,KG=yd`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,JG=yd`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,eX=m.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
  transition: background 0.2s;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  position: fixed;
  inset: 0;
  z-index: 0;
  padding-top: 80px;
  @media (max-width: 600px) {
    padding-top: 60px;
  }
`,tX=Cr`
  body {
    background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
    margin: 0;
    padding: 0;
    overflow-y: auto;
  }
  html {
    overflow-x: hidden;
  }
`,zu=m.h2`
  width: 100vw;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: #181818;
  margin: 3rem 0 2rem 0;
  letter-spacing: -1.5px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    border-radius: 2px;
  }
`,Vl=m.section`
  width: 100vw;
  min-height: auto;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0 40px 0;
  animation: ${KG} 0.8s ease-out;
  
  @media (max-width: 900px) {
    padding: 40px 0 30px 0;
  }
  @media (max-width: 600px) {
    padding: 30px 0 20px 0;
  }
`,iX=m.h1`
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(135deg, #181818 0%, #374151 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  letter-spacing: -2px;
  text-align: center;
  animation: ${JG} 1s ease-out;
  
  @media (max-width: 900px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`,nX=m.p`
  font-size: 1.2rem;
  color: #6b7280;
  margin-bottom: 4rem;
  text-align: center;
  line-height: 1.7;
  max-width: 700px;
  font-weight: 400;
  
  @media (max-width: 900px) {
    font-size: 1.1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    margin-bottom: 3rem;
  }
`,Fu=m.p`
  font-size: 1.1rem;
  color: #6b7280;
  font-weight: 500;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 3rem auto;
  text-align: center;
  
  @media (max-width: 900px) {
    font-size: 1rem;
    max-width: 90vw;
  }
  @media (max-width: 600px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`,rX=m.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto auto;
  gap: 2rem;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 1.5rem;
    padding: 0 1rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding: 0 0.8rem;
  }
`,eo=m.div`
  grid-area: ${t=>t.gridArea};
  aspect-ratio: ${t=>t.aspectRatio||"1/1"};
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  animation: ${j4} 6s ease-in-out infinite;
  animation-delay: ${t=>{const e=["0s","1s","2s","3s","4s","5s"];return e[Math.floor(Math.random()*e.length)]}};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${t=>({photography:"rgba(239, 68, 68, 0.1)",illustrations:"rgba(59, 130, 246, 0.1)",arvr:"rgba(139, 92, 246, 0.1)",animation:"rgba(16, 185, 129, 0.1)"})[t.category]||"rgba(0, 0, 0, 0.05)"}
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-12px) scale(1.03);
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.2);
    
    &::before {
      opacity: 1;
    }
    
    img, video {
      transform: scale(1.08);
    }
  }
  
  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }
  
  @media (max-width: 600px) {
    border-radius: 20px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    
    &:hover {
      transform: translateY(-6px) scale(1.02);
    }
  }
`,sX=m(eo)`
  &::after {
    content: '▶';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
`,oX=m.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 0 1rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 0.8rem;
  }
`,ia=m(eo)`
  aspect-ratio: 1/1.3;
  position: relative;
  z-index: 10;
  
  &::after {
    content: '${t=>t.category==="before"?"Before":t.category==="after"?"After":""}';
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 0.6rem 1.2rem;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: 600;
    z-index: 2;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
    border-radius: 0;
    transform: none;
    box-shadow: none;
    
    &::before {
      opacity: 0;
    }
    
    &::after {
      opacity: 1;
      top: 30px;
    }
    
    img {
      object-fit: contain;
      transform: none;
    }
  }
`,Bb=m.div`
  width: 100%;
  max-width: 1200px;
  aspect-ratio: 16/9;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  animation: ${j4} 6s ease-in-out infinite;
  
  @media (max-width: 900px) {
    max-width: 98vw;
    border-radius: 20px;
  }
  @media (max-width: 600px) {
    border-radius: 16px;
  }
`,aX=()=>a.jsxs(a.Fragment,{children:[a.jsxs(eX,{children:[a.jsx(st,{title:"School Projects | Nooshin Shahsavan - Creative Portfolio",description:"Explore Nooshin Shahsavan's school projects featuring photography, illustrations, AR/VR experiences, and 2D animations showcasing creative skills and innovative design thinking.",keywords:"school projects, photography, illustrations, AR/VR, 2D animation, creative portfolio, Nooshin Shahsavan, design projects",image:"/src/assets/fun/funhome.jpg"}),a.jsx(tX,{}),a.jsx(OG,{}),a.jsxs(Vl,{children:[a.jsx(iX,{children:"School Projects"}),a.jsx(nX,{children:"These are all school projects that showcase my interests and creative work. I'm excited to share some of my favorite pieces with you."})]}),a.jsxs(Vl,{id:"fun-photography",children:[a.jsx(zu,{children:"Photography"}),a.jsx(Fu,{children:"Exploring the art of visual storytelling through photography, capturing moments and creating compelling narratives."}),a.jsxs(rX,{children:[a.jsx(sX,{gridArea:"1 / 2 / 3 / 5",aspectRatio:"1/1.4",category:"photography",children:a.jsx("video",{src:$G,controls:!0,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"},controlsList:"nodownload"})}),a.jsx(eo,{gridArea:"1 / 5 / 3 / 8",aspectRatio:"1/1.4",category:"photography",children:a.jsx("img",{src:vp,alt:"Photography 1"})}),a.jsx(eo,{gridArea:"3 / 1 / 4 / 3",aspectRatio:"2/1",category:"photography",children:a.jsx("img",{src:vp,alt:"Photography 2"})}),a.jsx(eo,{gridArea:"3 / 3 / 4 / 5",aspectRatio:"2/1",category:"photography",children:a.jsx("img",{src:BG,alt:"Photography 3"})}),a.jsx(eo,{gridArea:"3 / 5 / 4 / 7",aspectRatio:"2/1",category:"photography",children:a.jsx("img",{src:NG,alt:"Photography 4"})}),a.jsx(eo,{gridArea:"3 / 7 / 4 / 9",aspectRatio:"2/1",category:"photography",children:a.jsx("img",{src:VG,alt:"Photography 5"})})]})]}),a.jsxs(Vl,{id:"fun-illustrations",children:[a.jsx(zu,{children:"Illustrations & Graphics"}),a.jsx(Fu,{children:"Creative illustrations and graphic design work showcasing artistic skills and visual communication."}),a.jsxs(oX,{children:[a.jsx(ia,{gridArea:"1 / 1 / 2 / 2",category:"illustrations",children:a.jsx("img",{src:WG,alt:"Illustration 1"})}),a.jsx(ia,{gridArea:"1 / 2 / 2 / 3",category:"illustrations",children:a.jsx("img",{src:XG,alt:"Illustration 2"})}),a.jsx(ia,{gridArea:"1 / 3 / 2 / 4",category:"illustrations",children:a.jsx("img",{src:HG,alt:"Illustration 3"})}),a.jsx(ia,{gridArea:"1 / 4 / 2 / 5",category:"illustrations",children:a.jsx("img",{src:UG,alt:"Illustration 4"})}),a.jsx(ia,{gridArea:"2 / 2 / 3 / 3",category:"before",children:a.jsx("img",{src:GG,alt:"Before"})}),a.jsx(ia,{gridArea:"2 / 3 / 3 / 4",category:"after",children:a.jsx("img",{src:YG,alt:"After"})})]})]}),a.jsxs(Vl,{id:"fun-ar-vr",children:[a.jsx(zu,{children:"AR/VR Experience"}),a.jsx(Fu,{children:"Immersive technology projects exploring augmented and virtual reality experiences."}),a.jsx(Bb,{children:a.jsx(QG,{src:ZG})})]}),a.jsxs(Vl,{id:"fun-animation",children:[a.jsx(zu,{children:"2D Animation"}),a.jsx(Fu,{children:"Creative animation work demonstrating motion design and storytelling through animated graphics."}),a.jsx(Bb,{children:a.jsx("video",{src:qG,controls:!0,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"},controlsList:"nodownload"})})]}),a.jsx(No,{}),a.jsx($o,{})]}),a.jsx(Bo,{})]}),lX=m.div`
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  padding: 1.5rem 1rem;
  max-width: 200px;
  min-width: 160px;

  @media (max-width: 1024px) {
    display: none;
  }
`,cX=m.div`
  font-size: 0.75rem;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.2rem;
`,dX=m.button`
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.5rem 0.5rem;
  margin: 0.15rem 0;
  font-size: 0.82rem;
  font-weight: ${t=>t.isClicked?"700":t.isActive?"600":"400"};
  color: ${t=>t.isClicked||t.isActive?"#000":"#aaa"};
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 4px;
  line-height: 1.3;

  &:hover {
    color: #000;
    background: rgba(0, 0, 0, 0.04);
  }
`,J0=[{id:"overview",label:"Overview",targetId:"bcit-overview"},{id:"challenge",label:"Challenge",targetId:"bcit-challenge"},{id:"moodboard",label:"Visual Direction",targetId:"bcit-moodboard"},{id:"wordmark",label:"Wordmark",targetId:"bcit-wordmark"},{id:"banners",label:"Banners",targetId:"bcit-banners"},{id:"stickers",label:"Stickers",targetId:"bcit-stickers"},{id:"poster",label:"Poster",targetId:"bcit-poster"},{id:"motion",label:"Motion Graphics",targetId:"bcit-motion"},{id:"reflection",label:"Reflection",targetId:"bcit-reflection"}],uX=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("overview");q.useEffect(()=>{const s=new IntersectionObserver(o=>{o.forEach(l=>{if(l.isIntersecting){const c=J0.find(d=>d.targetId===l.target.id);c&&n(c.id)}})},{root:null,rootMargin:"-20% 0px -70% 0px",threshold:0});return J0.forEach(o=>{const l=document.getElementById(o.targetId);l&&s.observe(l)}),()=>s.disconnect()},[]);const r=(s,o)=>{const l=document.getElementById(s);l&&(l.scrollIntoView({behavior:"smooth",block:"start"}),e(o))};return a.jsxs(lX,{children:[a.jsx(cX,{children:"Contents"}),J0.map(s=>a.jsx(dX,{isActive:i===s.id,isClicked:t===s.id,onClick:()=>r(s.targetId,s.id),children:s.label},s.id))]})},Nb=new URL("/assets/wordmark-bcit.02fea1d6.png",self.location).href,hX=new URL("/assets/moodboard-bcit.8c5ded4b.png",self.location).href,pX=new URL("/assets/banner-bcit1.ea0f6725.png",self.location).href,fX=new URL("/assets/banner-bcit2.17c3c7e7.png",self.location).href,mX=new URL("/assets/stickers-bcit.08cb2bef.jpg",self.location).href,gX=new URL("/assets/sticker-bcit1.ce2a218c.png",self.location).href,xX=new URL("/assets/sticker-bcit2.b3132fca.png",self.location).href,wX=new URL("/assets/sticker-bcit3.0a323983.png",self.location).href,yX=new URL("/assets/poster-bcit.f3cbc3cd.png",self.location).href,vX=new URL("/assets/ig-bcit1.556e562b.mp4",self.location).href,bX=new URL("/assets/ig-bcit2.6b529386.mp4",self.location).href,tt={hidden:{opacity:0,y:36},visible:{opacity:1,y:0,transition:{duration:.7,ease:[.22,1,.36,1]}}},Fr={hidden:{opacity:0,scale:.97},visible:{opacity:1,scale:1,transition:{duration:.8,ease:[.22,1,.36,1]}}},kX={hidden:{opacity:1},visible:{opacity:1,transition:{staggerChildren:.14}}},jX=Cr`
  body { background: #fff; margin: 0; padding: 0; overflow-y: auto; }
  html { overflow-x: hidden; }
`,DX=m.div`
  min-height: 100vh;
  width: 100vw;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  position: fixed;
  inset: 0;
  z-index: 0;
  padding-top: 80px;
  @media (max-width: 600px) { padding-top: 60px; }
`,ir=m.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 2.5rem;
  @media (max-width: 768px) { padding: 0 1.5rem; }
  @media (max-width: 480px) { padding: 0 1.2rem; }
`,nr=m.section`
  width: 100%;
  padding: 100px 0;
  background: ${t=>t.bg||"#fff"};
  @media (max-width: 768px) { padding: 70px 0; }
  @media (max-width: 480px) { padding: 50px 0; }
`,xn=m.span`
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #5a8a3c;
  margin-bottom: 1rem;
`,Rr=m.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: #0d0d0d;
  letter-spacing: -0.025em;
  line-height: 1.15;
  margin: 0 0 1.2rem;
`,na=m.p`
  font-size: clamp(1rem, 1.5vw, 1.12rem);
  color: #555;
  line-height: 1.82;
  max-width: 680px;
  margin: 0 0 1.5rem;
`,Lr=m.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.82;
  margin: 0 0 1.2rem;
`,Us=m.div`
  width: 48px;
  height: 3px;
  background: #5a8a3c;
  border-radius: 2px;
  margin-bottom: 2rem;
`,Hs=m.div`
  margin-bottom: 3.5rem;
`,rr=m.div`
  width: 100%;
  height: 1px;
  background: #ebebeb;
`,SX=m.section`
  width: 100%;
  padding: 80px 0 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #fff;
`,_X=m($.img)`
  width: min(420px, 80vw);
  height: auto;
  display: block;
  margin: 0 auto 3rem;
  object-fit: contain;
`,CX=m($.h1)`
  font-size: clamp(2rem, 4.5vw, 3.6rem);
  font-weight: 900;
  color: #0d0d0d;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 0 0 1rem;
  max-width: 800px;
`,PX=m($.p)`
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  color: #666;
  line-height: 1.75;
  max-width: 580px;
  margin: 0 auto 3.5rem;
`,TX=m($.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid #e8e8e8;
  border-radius: 16px;
  overflow: hidden;
  width: min(860px, 92vw);
  @media (max-width: 640px) { grid-template-columns: repeat(2, 1fr); }
`,Ru=m.div`
  padding: 1.6rem 1.8rem;
  border-right: 1px solid #e8e8e8;
  text-align: left;
  &:last-child { border-right: none; }
  @media (max-width: 640px) {
    border-right: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
    &:nth-child(2n) { border-right: none; }
    &:nth-last-child(-n+2) { border-bottom: none; }
  }
`,Lu=m.p`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #aaa;
  margin: 0 0 0.4rem;
`,Ou=m.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.4;
`,EX=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 2.5rem; }
`,IX=m($.div)`
  background: #0d0d0d;
  border-radius: 24px;
  padding: 3.5rem 4rem;
  @media (max-width: 768px) { padding: 2.5rem 2rem; }
`,AX=m.p`
  font-size: clamp(1.2rem, 2.5vw, 1.7rem);
  font-weight: 700;
  line-height: 1.5;
  color: #fff;
  margin: 0 0 2rem;
`,MX=m.p`
  font-size: 1rem;
  color: rgba(255,255,255,0.68);
  line-height: 1.82;
  margin: 0;
`,zX=m($.div)`
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 24px 64px rgba(0,0,0,0.1);
  img { width: 100%; height: auto; display: block; }
`,FX=m($.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`,em=m($.div)`
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #eee;
  .swatch { height: 80px; background: ${t=>t.$accent}; }
  .body { padding: 1.2rem 1.4rem; }
  h4 { font-size: 0.85rem; font-weight: 700; color: #111; margin: 0 0 0.4rem; text-transform: uppercase; letter-spacing: 0.06em; }
  p  { font-size: 0.85rem; color: #666; margin: 0; line-height: 1.5; }
`,RX=m($.div)`
  background: #f5f5f5;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 3rem;
  margin-bottom: 4rem;
  img { width: min(380px, 70%); height: auto; display: block; }
`,LX=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`,$u=m($.div)`
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 14px;
  padding: 1.6rem 1.8rem;
  h4 { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #5a8a3c; margin: 0 0 0.6rem; }
  p  { font-size: 0.92rem; color: #555; line-height: 1.65; margin: 0; }
`,OX=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`,Vb=m($.div)`
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0,0,0,0.1);
  position: relative;
  img { width: 100%; height: auto; display: block; }
`,Wb=m.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: rgba(0,0,0,0.72);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.35rem 0.8rem;
  border-radius: 6px;
`,$X=m.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 700px;
  margin: 0 auto;
  @media (max-width: 500px) { gap: 1rem; }
`,Bu=m($.div)`
  aspect-ratio: 1 / 1;
  border-radius: 18px;
  overflow: hidden;
  background: #f8f8f8;
  box-shadow: 0 8px 28px rgba(0,0,0,0.07);
  img { width: 100%; height: 100%; object-fit: cover; display: block; }
`,BX=m($.div)`
  width: 100%;
  max-width: 560px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.13);
  img { width: 100%; height: auto; display: block; }
`,NX=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`,Ub=m($.div)`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 56px rgba(0,0,0,0.2);
  background: #000;
  video { width: 100%; height: auto; display: block; }
`,Hb=m.p`
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
  text-align: center;
  margin: 0.9rem 0 0;
`,VX=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 3rem; }
`,WX=m.blockquote`
  font-size: clamp(1.2rem, 2.2vw, 1.6rem);
  font-weight: 700;
  color: #0d0d0d;
  line-height: 1.5;
  margin: 0 0 2rem;
  padding-left: 1.5rem;
  border-left: 4px solid #5a8a3c;
`,UX=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,HX=m.span`
  display: inline-block;
  padding: 0.5rem 1.1rem;
  border-radius: 100px;
  font-size: 0.82rem;
  font-weight: 600;
  background: ${t=>t.$accent?"#5a8a3c":"#f2f2f2"};
  color: ${t=>t.$accent?"#fff":"#333"};
`,YX=[{label:"Graphic Design",accent:!0},{label:"Brand Identity",accent:!0},{label:"Campaign Design",accent:!0},{label:"Environmental Graphics",accent:!1},{label:"Motion Graphics",accent:!0},{label:"Social Media Design",accent:!1},{label:"Adobe Illustrator",accent:!1},{label:"Adobe Photoshop",accent:!1},{label:"Adobe After Effects",accent:!1},{label:"Visual Communication",accent:!1}],et=({children:t,variants:e=tt,delay:i=0,style:n})=>{const r=T.useRef(null),s=WA(r,{once:!0,amount:.1});return a.jsx($.div,{ref:r,variants:e,initial:"hidden",animate:s?"visible":"hidden",transition:i?{delay:i}:void 0,style:n,children:t})},Yb=()=>a.jsxs(a.Fragment,{children:[a.jsxs(DX,{children:[a.jsx(st,{title:"BCIT Energy Awareness Campaign | Nooshin Shahsavan",description:"A full-scope awareness campaign for the BCIT Green Team — branding, posters, banners, stickers, and social media motion graphics.",keywords:"BCIT, energy awareness, green team, campaign design, brand identity, poster design, motion graphics, Nooshin Shahsavan",image:"/src/assets/bcitenergy/wordmark-bcit.png"}),a.jsx(jX,{}),a.jsx(uX,{}),a.jsxs(SX,{children:[a.jsx(_X,{src:Nb,alt:"BCIT Energy Campaign Wordmark",variants:Fr,initial:"hidden",animate:"visible"}),a.jsx($.div,{variants:tt,initial:"hidden",animate:"visible",style:{textAlign:"center"},children:a.jsx(xn,{children:"BCIT Green Team — 2024"})}),a.jsxs(CX,{variants:tt,initial:"hidden",animate:"visible",children:["BCIT Energy",a.jsx("br",{}),"Awareness Campaign"]}),a.jsx(PX,{variants:tt,initial:"hidden",animate:"visible",children:"Encouraging sustainable energy habits through a friendly and engaging visual campaign."}),a.jsxs(TX,{variants:tt,initial:"hidden",animate:"visible",children:[a.jsxs(Ru,{children:[a.jsx(Lu,{children:"Client"}),a.jsx(Ou,{children:"BCIT Green Team"})]}),a.jsxs(Ru,{children:[a.jsx(Lu,{children:"Role"}),a.jsx(Ou,{children:"Graphic Designer"})]}),a.jsxs(Ru,{children:[a.jsx(Lu,{children:"Scope"}),a.jsx(Ou,{children:"Brand Identity, Posters, Stickers, Banners, Motion"})]}),a.jsxs(Ru,{children:[a.jsx(Lu,{children:"Goal"}),a.jsx(Ou,{children:"Reduce energy & heating consumption on campus"})]})]})]}),a.jsx(rr,{}),a.jsx("div",{id:"bcit-overview",children:a.jsx(nr,{children:a.jsx(ir,{children:a.jsxs(EX,{children:[a.jsx(et,{children:a.jsxs(Hs,{children:[a.jsx(xn,{children:"Project Overview"}),a.jsxs(Rr,{children:["A campaign built from",a.jsx("br",{}),"concept to production."]}),a.jsx(Us,{})]})}),a.jsxs(et,{delay:.1,children:[a.jsx(na,{children:"The BCIT Energy Awareness Campaign was created to encourage students, faculty, and staff to adopt energy-saving habits during the colder months."}),a.jsx(Lr,{children:"Working independently from concept to final execution, I developed a cohesive visual system that communicated environmental responsibility in a way that felt friendly, positive, and accessible."}),a.jsx(Lr,{children:"The campaign was deployed across multiple touchpoints including banners, posters, stickers, and social media content, ensuring a consistent message across both physical and digital environments."})]})]})})})}),a.jsx(rr,{}),a.jsx("div",{id:"bcit-challenge",children:a.jsx(nr,{children:a.jsx(ir,{children:a.jsxs(et,{children:[a.jsx("div",{style:{marginBottom:"1.5rem"},children:a.jsx(xn,{children:"The Challenge"})}),a.jsxs(IX,{variants:tt,initial:"hidden",animate:"visible",children:[a.jsx(AX,{children:'"Environmental campaigns often feel technical, dry, and overly serious — how do you make sustainability feel approachable?"'}),a.jsx(MX,{children:"Environmental messaging can easily fall flat when it leans too heavily on obligation and severity. The challenge was to create a visual identity that felt welcoming and engaging while clearly communicating the importance of reducing energy consumption. The visual language needed to appeal to a broad campus audience while maintaining a strong connection to sustainability and energy efficiency."})]})]})})})}),a.jsx(rr,{}),a.jsx("div",{id:"bcit-moodboard",children:a.jsx(nr,{children:a.jsxs(ir,{children:[a.jsx(et,{children:a.jsxs(Hs,{children:[a.jsx(xn,{children:"Moodboard & Visual Direction"}),a.jsxs(Rr,{children:["A visual language rooted",a.jsx("br",{}),"in nature and efficiency."]}),a.jsx(Us,{}),a.jsx(na,{children:"The visual direction was inspired by the relationship between sustainability and energy efficiency. A leaf was chosen as a primary visual element — a simple, universally recognised symbol of nature and environmental responsibility."}),a.jsxs(Lr,{children:["The letter ",a.jsx("strong",{children:'"A"'})," was integrated into the concept because it represents the highest rating within energy efficiency labelling systems. Combining the leaf with the letter A established a direct visual relationship between smart energy use and environmental stewardship."]})]})}),a.jsx(et,{variants:Fr,children:a.jsx(zX,{variants:Fr,initial:"hidden",animate:"visible",children:a.jsx("img",{src:hX,alt:"BCIT Energy Campaign Moodboard"})})}),a.jsx(et,{children:a.jsxs(FX,{variants:kX,initial:"hidden",animate:"visible",children:[a.jsxs(em,{$accent:"#5a8a3c",variants:tt,children:[a.jsx("div",{className:"swatch"}),a.jsxs("div",{className:"body",children:[a.jsx("h4",{children:"Green"}),a.jsx("p",{children:"Represents nature, sustainability, and growth — the core identity colour of the campaign."})]})]}),a.jsxs(em,{$accent:"#2e6fa3",variants:tt,children:[a.jsx("div",{className:"swatch"}),a.jsxs("div",{className:"body",children:[a.jsx("h4",{children:"Blue"}),a.jsx("p",{children:"Represents winter, cold weather, and the seasonal context of heating consumption."})]})]}),a.jsxs(em,{$accent:"#f0b429",variants:tt,children:[a.jsx("div",{className:"swatch"}),a.jsxs("div",{className:"body",children:[a.jsx("h4",{children:"Yellow"}),a.jsx("p",{children:"Represents warmth, energy, and the positive action the campaign encourages."})]})]})]})})]})})}),a.jsx(rr,{}),a.jsx("div",{id:"bcit-wordmark",children:a.jsx(nr,{bg:"#fafafa",children:a.jsxs(ir,{children:[a.jsx(et,{children:a.jsxs(Hs,{children:[a.jsx(xn,{children:"Wordmark Design"}),a.jsxs(Rr,{children:["Where nature meets",a.jsx("br",{}),"energy efficiency."]}),a.jsx(Us,{})]})}),a.jsx(et,{variants:Fr,children:a.jsx(RX,{variants:Fr,initial:"hidden",animate:"visible",children:a.jsx("img",{src:Nb,alt:"BCIT Energy Awareness Campaign Wordmark"})})}),a.jsx(et,{children:a.jsxs(LX,{children:[a.jsxs($u,{variants:tt,initial:"hidden",animate:"visible",children:[a.jsx("h4",{children:"Concept"}),a.jsx("p",{children:"The wordmark combines a leaf motif with the letter A, creating an immediate visual connection between environmental awareness and energy efficiency ratings."})]}),a.jsxs($u,{variants:tt,initial:"hidden",animate:"visible",children:[a.jsx("h4",{children:"Symbolism"}),a.jsx("p",{children:"The letter A references the top tier of energy efficiency labelling systems, linking responsible energy use to the campaign identity through a single recognisable mark."})]}),a.jsxs($u,{variants:tt,initial:"hidden",animate:"visible",children:[a.jsx("h4",{children:"Application"}),a.jsx("p",{children:"The wordmark was applied consistently across all campaign materials — from large-format banners and posters to stickers and digital social media assets."})]}),a.jsxs($u,{variants:tt,initial:"hidden",animate:"visible",children:[a.jsx("h4",{children:"Foundation"}),a.jsx("p",{children:"As the anchor of the visual system, the wordmark established the tone and personality of the entire campaign — approachable, modern, and purposeful."})]})]})})]})})}),a.jsx(rr,{}),a.jsx("div",{id:"bcit-banners",children:a.jsx(nr,{children:a.jsxs(ir,{children:[a.jsx(et,{children:a.jsxs(Hs,{children:[a.jsx(xn,{children:"Campus Banner System"}),a.jsxs(Rr,{children:["Bold, visible, and",a.jsx("br",{}),"impossible to ignore."]}),a.jsx(Us,{}),a.jsx(na,{children:"Large-format banners were designed to maximise visibility in campus environments. Both images represent the same banner design displayed in different mockup environments."}),a.jsx(Lr,{children:"The banner system uses bold typography, recognisable campaign branding, and clear visual hierarchy to quickly communicate energy-saving behaviours."})]})}),a.jsxs(OX,{children:[a.jsx(et,{children:a.jsxs(Vb,{variants:tt,initial:"hidden",animate:"visible",children:[a.jsx("img",{src:pX,alt:"BCIT Energy Campaign Banner – Mockup 1"}),a.jsx(Wb,{children:"Environment 01"})]})}),a.jsx(et,{delay:.12,children:a.jsxs(Vb,{variants:tt,initial:"hidden",animate:"visible",children:[a.jsx("img",{src:fX,alt:"BCIT Energy Campaign Banner – Mockup 2"}),a.jsx(Wb,{children:"Environment 02"})]})})]})]})})}),a.jsx(rr,{}),a.jsx("div",{id:"bcit-stickers",children:a.jsx(nr,{bg:"#fafafa",children:a.jsxs(ir,{children:[a.jsx(et,{children:a.jsxs(Hs,{children:[a.jsx(xn,{children:"Sticker Design"}),a.jsxs(Rr,{children:["Small reminders,",a.jsx("br",{}),"big impact."]}),a.jsx(Us,{}),a.jsx(na,{children:"Stickers were developed as a playful extension of the campaign identity — transforming key messages into small, memorable visual reminders placed throughout campus."}),a.jsx(Lr,{children:"Friendly illustrations and recognisable branding made sustainability feel approachable and engaging rather than instructional or demanding."})]})}),a.jsx(et,{variants:Fr,children:a.jsxs($X,{children:[a.jsx(Bu,{variants:tt,initial:"hidden",animate:"visible",children:a.jsx("img",{src:mX,alt:"BCIT Energy Sticker Collection"})}),a.jsx(Bu,{variants:tt,initial:"hidden",animate:"visible",children:a.jsx("img",{src:gX,alt:"BCIT Energy Sticker 1"})}),a.jsx(Bu,{variants:tt,initial:"hidden",animate:"visible",children:a.jsx("img",{src:xX,alt:"BCIT Energy Sticker 2"})}),a.jsx(Bu,{variants:tt,initial:"hidden",animate:"visible",children:a.jsx("img",{src:wX,alt:"BCIT Energy Sticker 3"})})]})})]})})}),a.jsx(rr,{}),a.jsx("div",{id:"bcit-poster",children:a.jsx(nr,{children:a.jsxs(ir,{children:[a.jsx(et,{children:a.jsxs(Hs,{children:[a.jsx(xn,{children:"Poster Campaign"}),a.jsxs(Rr,{children:["Strong typography.",a.jsx("br",{}),"Clear message."]}),a.jsx(Us,{}),a.jsx(na,{children:"The poster system was designed to capture attention quickly while delivering clear and actionable energy-saving messages across campus."}),a.jsx(Lr,{children:"Strong typography, bold visuals, and consistent branding communicated the campaign message effectively through a direct and confident visual approach."})]})}),a.jsx(et,{variants:Fr,children:a.jsx(BX,{variants:Fr,initial:"hidden",animate:"visible",children:a.jsx("img",{src:yX,alt:"BCIT Energy Awareness Campaign Poster"})})})]})})}),a.jsx(rr,{}),a.jsx("div",{id:"bcit-motion",children:a.jsx(nr,{bg:"#0d0d0d",children:a.jsxs(ir,{children:[a.jsx(et,{children:a.jsxs(Hs,{children:[a.jsx(xn,{style:{color:"#8bc34a"},children:"Social Media Motion Graphics"}),a.jsxs(Rr,{style:{color:"#fff"},children:["Bringing the campaign",a.jsx("br",{}),"to life digitally."]}),a.jsx(Us,{style:{background:"#8bc34a"}}),a.jsx(na,{style:{color:"rgba(255,255,255,0.65)",maxWidth:"620px"},children:"Short-form social media videos were created for Instagram, translating the campaign's visual identity into engaging digital content and reinforcing energy-saving behaviours through dynamic storytelling."})]})}),a.jsxs(NX,{children:[a.jsxs(et,{children:[a.jsx(Ub,{variants:tt,initial:"hidden",animate:"visible",children:a.jsx("video",{src:vX,controls:!0,playsInline:!0,loop:!0,preload:"metadata",controlsList:"nodownload"})}),a.jsx(Hb,{children:"Motion Graphic — 01"})]}),a.jsxs(et,{delay:.12,children:[a.jsx(Ub,{variants:tt,initial:"hidden",animate:"visible",children:a.jsx("video",{src:bX,controls:!0,playsInline:!0,loop:!0,preload:"metadata",controlsList:"nodownload"})}),a.jsx(Hb,{children:"Motion Graphic — 02"})]})]})]})})}),a.jsx(rr,{}),a.jsx("div",{id:"bcit-reflection",children:a.jsx(nr,{children:a.jsx(ir,{children:a.jsxs(VX,{children:[a.jsxs(et,{children:[a.jsx(xn,{children:"Reflection"}),a.jsx(WX,{children:'"A unified visual identity, applied with consistency across every touchpoint, is what turns a campaign into a movement."'}),a.jsx(Lr,{children:"This project provided an opportunity to develop and execute a complete awareness campaign from concept through production. By creating a unified visual identity and applying it consistently across print, environmental graphics, and digital media, the campaign successfully communicated energy-saving messages in a way that felt approachable, positive, and memorable."}),a.jsx(Lr,{children:"The project strengthened skills in branding, campaign design, visual storytelling, and multi-channel communication."})]}),a.jsxs(et,{delay:.1,children:[a.jsx(xn,{children:"Skills & Tools"}),a.jsx(Rr,{style:{marginBottom:"2rem"},children:"Disciplines applied."}),a.jsx(UX,{children:YX.map(t=>a.jsx(HX,{$accent:t.accent,children:t.label},t.label))})]})]})})})}),a.jsx(No,{}),a.jsx($o,{})]}),a.jsx(Bo,{})]}),GX=()=>a.jsx(DD,{children:a.jsx(IP,{children:a.jsx(Q8,{children:a.jsx(XP,{children:a.jsxs(U8,{children:[a.jsx(Ci,{path:"/",element:a.jsx(bF,{})}),a.jsx(Ci,{path:"/about",element:a.jsx(OR,{})}),a.jsx(Ci,{path:"/work",element:a.jsx(i7,{})}),a.jsx(Ci,{path:"/resume",element:a.jsx(a7,{})}),a.jsx(Ci,{path:"/work/sbs",element:a.jsx(uO,{})}),a.jsx(Ci,{path:"/work/veen",element:a.jsx(NB,{})}),a.jsx(Ci,{path:"/work/workday",element:a.jsx(zG,{})}),a.jsx(Ci,{path:"/work/delicato",element:a.jsx(UV,{})}),a.jsx(Ci,{path:"/work/zar",element:a.jsx(aH,{})}),a.jsx(Ci,{path:"/work/fun",element:a.jsx(aX,{})}),a.jsx(Ci,{path:"/work/bcit",element:a.jsx(Yb,{})}),a.jsx(Ci,{path:"/work/savefood",element:a.jsx(Yb,{})})]})})})})}),Gb=document.getElementById("root");Gb&&(Gb.innerHTML="");const XX=im.createRoot(document.getElementById("root"));XX.render(a.jsx(q.StrictMode,{children:a.jsx(GX,{})}));
