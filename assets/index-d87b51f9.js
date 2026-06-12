var b4=Object.defineProperty;var k4=(t,e,i)=>e in t?b4(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var Jn=(t,e,i)=>(k4(t,typeof e!="symbol"?e+"":e,i),i);function j4(t,e){for(var i=0;i<e.length;i++){const n=e[i];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(n,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();var S4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function bp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Yb={exports:{}},kp={},Gb={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd=Symbol.for("react.element"),D4=Symbol.for("react.portal"),_4=Symbol.for("react.fragment"),C4=Symbol.for("react.strict_mode"),P4=Symbol.for("react.profiler"),T4=Symbol.for("react.provider"),E4=Symbol.for("react.context"),I4=Symbol.for("react.forward_ref"),A4=Symbol.for("react.suspense"),M4=Symbol.for("react.memo"),z4=Symbol.for("react.lazy"),mw=Symbol.iterator;function F4(t){return t===null||typeof t!="object"?null:(t=mw&&t[mw]||t["@@iterator"],typeof t=="function"?t:null)}var Xb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zb=Object.assign,qb={};function ul(t,e,i){this.props=t,this.context=e,this.refs=qb,this.updater=i||Xb}ul.prototype.isReactComponent={};ul.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ul.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Qb(){}Qb.prototype=ul.prototype;function ax(t,e,i){this.props=t,this.context=e,this.refs=qb,this.updater=i||Xb}var lx=ax.prototype=new Qb;lx.constructor=ax;Zb(lx,ul.prototype);lx.isPureReactComponent=!0;var gw=Array.isArray,Kb=Object.prototype.hasOwnProperty,cx={current:null},Jb={key:!0,ref:!0,__self:!0,__source:!0};function ek(t,e,i){var n,r={},o=null,s=null;if(e!=null)for(n in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Kb.call(e,n)&&!Jb.hasOwnProperty(n)&&(r[n]=e[n]);var l=arguments.length-2;if(l===1)r.children=i;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}if(t&&t.defaultProps)for(n in l=t.defaultProps,l)r[n]===void 0&&(r[n]=l[n]);return{$$typeof:hd,type:t,key:o,ref:s,props:r,_owner:cx.current}}function R4(t,e){return{$$typeof:hd,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function dx(t){return typeof t=="object"&&t!==null&&t.$$typeof===hd}function L4(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(i){return e[i]})}var xw=/\/+/g;function lf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?L4(""+t.key):e.toString(36)}function Bu(t,e,i,n,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case hd:case D4:s=!0}}if(s)return s=t,r=r(s),t=n===""?"."+lf(s,0):n,gw(r)?(i="",t!=null&&(i=t.replace(xw,"$&/")+"/"),Bu(r,e,i,"",function(d){return d})):r!=null&&(dx(r)&&(r=R4(r,i+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(xw,"$&/")+"/")+t)),e.push(r)),1;if(s=0,n=n===""?".":n+":",gw(t))for(var l=0;l<t.length;l++){o=t[l];var c=n+lf(o,l);s+=Bu(o,e,i,c,r)}else if(c=F4(t),typeof c=="function")for(t=c.call(t),l=0;!(o=t.next()).done;)o=o.value,c=n+lf(o,l++),s+=Bu(o,e,i,c,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ed(t,e,i){if(t==null)return t;var n=[],r=0;return Bu(t,n,"","",function(o){return e.call(i,o,r++)}),n}function N4(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(i){(t._status===0||t._status===-1)&&(t._status=1,t._result=i)},function(i){(t._status===0||t._status===-1)&&(t._status=2,t._result=i)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var li={current:null},Vu={transition:null},O4={ReactCurrentDispatcher:li,ReactCurrentBatchConfig:Vu,ReactCurrentOwner:cx};function tk(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:Ed,forEach:function(t,e,i){Ed(t,function(){e.apply(this,arguments)},i)},count:function(t){var e=0;return Ed(t,function(){e++}),e},toArray:function(t){return Ed(t,function(e){return e})||[]},only:function(t){if(!dx(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=ul;de.Fragment=_4;de.Profiler=P4;de.PureComponent=ax;de.StrictMode=C4;de.Suspense=A4;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O4;de.act=tk;de.cloneElement=function(t,e,i){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=Zb({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=cx.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)Kb.call(e,c)&&!Jb.hasOwnProperty(c)&&(n[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)n.children=i;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];n.children=l}return{$$typeof:hd,type:t.type,key:r,ref:o,props:n,_owner:s}};de.createContext=function(t){return t={$$typeof:E4,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:T4,_context:t},t.Consumer=t};de.createElement=ek;de.createFactory=function(t){var e=ek.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:I4,render:t}};de.isValidElement=dx;de.lazy=function(t){return{$$typeof:z4,_payload:{_status:-1,_result:t},_init:N4}};de.memo=function(t,e){return{$$typeof:M4,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=Vu.transition;Vu.transition={};try{t()}finally{Vu.transition=e}};de.unstable_act=tk;de.useCallback=function(t,e){return li.current.useCallback(t,e)};de.useContext=function(t){return li.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return li.current.useDeferredValue(t)};de.useEffect=function(t,e){return li.current.useEffect(t,e)};de.useId=function(){return li.current.useId()};de.useImperativeHandle=function(t,e,i){return li.current.useImperativeHandle(t,e,i)};de.useInsertionEffect=function(t,e){return li.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return li.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return li.current.useMemo(t,e)};de.useReducer=function(t,e,i){return li.current.useReducer(t,e,i)};de.useRef=function(t){return li.current.useRef(t)};de.useState=function(t){return li.current.useState(t)};de.useSyncExternalStore=function(t,e,i){return li.current.useSyncExternalStore(t,e,i)};de.useTransition=function(){return li.current.useTransition()};de.version="18.3.1";Gb.exports=de;var T=Gb.exports;const q=bp(T),$4=j4({__proto__:null,default:q},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B4=T,V4=Symbol.for("react.element"),W4=Symbol.for("react.fragment"),U4=Object.prototype.hasOwnProperty,H4=B4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y4={key:!0,ref:!0,__self:!0,__source:!0};function ik(t,e,i){var n,r={},o=null,s=null;i!==void 0&&(o=""+i),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)U4.call(e,n)&&!Y4.hasOwnProperty(n)&&(r[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)r[n]===void 0&&(r[n]=e[n]);return{$$typeof:V4,type:t,key:o,ref:s,props:r,_owner:H4.current}}kp.Fragment=W4;kp.jsx=ik;kp.jsxs=ik;Yb.exports=kp;var a=Yb.exports,tm={},nk={exports:{}},Vi={},rk={exports:{}},ok={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,M){var P=I.length;I.push(M);e:for(;0<P;){var R=P-1>>>1,U=I[R];if(0<r(U,M))I[R]=M,I[P]=U,P=R;else break e}}function i(I){return I.length===0?null:I[0]}function n(I){if(I.length===0)return null;var M=I[0],P=I.pop();if(P!==M){I[0]=P;e:for(var R=0,U=I.length,ne=U>>>1;R<ne;){var Z=2*(R+1)-1,fe=I[Z],ue=Z+1,me=I[ue];if(0>r(fe,P))ue<U&&0>r(me,fe)?(I[R]=me,I[ue]=P,R=ue):(I[R]=fe,I[Z]=P,R=Z);else if(ue<U&&0>r(me,P))I[R]=me,I[ue]=P,R=ue;else break e}}return M}function r(I,M){var P=I.sortIndex-M.sortIndex;return P!==0?P:I.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],d=[],u=1,p=null,f=3,g=!1,y=!1,w=!1,D=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var M=i(d);M!==null;){if(M.callback===null)n(d);else if(M.startTime<=I)n(d),M.sortIndex=M.expirationTime,e(c,M);else break;M=i(d)}}function h(I){if(w=!1,v(I),!y)if(i(c)!==null)y=!0,V(x);else{var M=i(d);M!==null&&$(h,M.startTime-I)}}function x(I,M){y=!1,w&&(w=!1,j(_),_=-1),g=!0;var P=f;try{for(v(M),p=i(c);p!==null&&(!(p.expirationTime>M)||I&&!z());){var R=p.callback;if(typeof R=="function"){p.callback=null,f=p.priorityLevel;var U=R(p.expirationTime<=M);M=t.unstable_now(),typeof U=="function"?p.callback=U:p===i(c)&&n(c),v(M)}else n(c);p=i(c)}if(p!==null)var ne=!0;else{var Z=i(d);Z!==null&&$(h,Z.startTime-M),ne=!1}return ne}finally{p=null,f=P,g=!1}}var k=!1,S=null,_=-1,C=5,E=-1;function z(){return!(t.unstable_now()-E<C)}function A(){if(S!==null){var I=t.unstable_now();E=I;var M=!0;try{M=S(!0,I)}finally{M?L():(k=!1,S=null)}}else k=!1}var L;if(typeof b=="function")L=function(){b(A)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,W=N.port2;N.port1.onmessage=A,L=function(){W.postMessage(null)}}else L=function(){D(A,0)};function V(I){S=I,k||(k=!0,L())}function $(I,M){_=D(function(){I(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,V(x))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return i(c)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var P=f;f=M;try{return I()}finally{f=P}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,M){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var P=f;f=I;try{return M()}finally{f=P}},t.unstable_scheduleCallback=function(I,M,P){var R=t.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?R+P:R):P=R,I){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=P+U,I={id:u++,callback:M,priorityLevel:I,startTime:P,expirationTime:U,sortIndex:-1},P>R?(I.sortIndex=P,e(d,I),i(c)===null&&I===i(d)&&(w?(j(_),_=-1):w=!0,$(h,P-R))):(I.sortIndex=U,e(c,I),y||g||(y=!0,V(x))),I},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(I){var M=f;return function(){var P=f;f=M;try{return I.apply(this,arguments)}finally{f=P}}}})(ok);rk.exports=ok;var G4=rk.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X4=T,Ni=G4;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,i=1;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var sk=new Set,zc={};function As(t,e){Wa(t,e),Wa(t+"Capture",e)}function Wa(t,e){for(zc[t]=e,t=0;t<e.length;t++)sk.add(e[t])}var br=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),im=Object.prototype.hasOwnProperty,Z4=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ww={},vw={};function q4(t){return im.call(vw,t)?!0:im.call(ww,t)?!1:Z4.test(t)?vw[t]=!0:(ww[t]=!0,!1)}function Q4(t,e,i,n){if(i!==null&&i.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:i!==null?!i.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function K4(t,e,i,n){if(e===null||typeof e>"u"||Q4(t,e,i,n))return!0;if(n)return!1;if(i!==null)switch(i.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ci(t,e,i,n,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=r,this.mustUseProperty=i,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Lt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Lt[t]=new ci(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Lt[e]=new ci(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Lt[t]=new ci(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Lt[t]=new ci(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Lt[t]=new ci(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Lt[t]=new ci(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Lt[t]=new ci(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Lt[t]=new ci(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Lt[t]=new ci(t,5,!1,t.toLowerCase(),null,!1,!1)});var ux=/[\-:]([a-z])/g;function hx(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ux,hx);Lt[e]=new ci(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ux,hx);Lt[e]=new ci(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ux,hx);Lt[e]=new ci(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Lt[t]=new ci(t,1,!1,t.toLowerCase(),null,!1,!1)});Lt.xlinkHref=new ci("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Lt[t]=new ci(t,1,!1,t.toLowerCase(),null,!0,!0)});function px(t,e,i,n){var r=Lt.hasOwnProperty(e)?Lt[e]:null;(r!==null?r.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(K4(e,i,r,n)&&(i=null),n||r===null?q4(e)&&(i===null?t.removeAttribute(e):t.setAttribute(e,""+i)):r.mustUseProperty?t[r.propertyName]=i===null?r.type===3?!1:"":i:(e=r.attributeName,n=r.attributeNamespace,i===null?t.removeAttribute(e):(r=r.type,i=r===3||r===4&&i===!0?"":""+i,n?t.setAttributeNS(n,e,i):t.setAttribute(e,i))))}var Cr=X4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Id=Symbol.for("react.element"),aa=Symbol.for("react.portal"),la=Symbol.for("react.fragment"),fx=Symbol.for("react.strict_mode"),nm=Symbol.for("react.profiler"),ak=Symbol.for("react.provider"),lk=Symbol.for("react.context"),mx=Symbol.for("react.forward_ref"),rm=Symbol.for("react.suspense"),om=Symbol.for("react.suspense_list"),gx=Symbol.for("react.memo"),Vr=Symbol.for("react.lazy"),ck=Symbol.for("react.offscreen"),yw=Symbol.iterator;function kl(t){return t===null||typeof t!="object"?null:(t=yw&&t[yw]||t["@@iterator"],typeof t=="function"?t:null)}var Ue=Object.assign,cf;function Wl(t){if(cf===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);cf=e&&e[1]||""}return`
`+cf+t}var df=!1;function uf(t,e){if(!t||df)return"";df=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var n=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){n=d}t.call(e.prototype)}else{try{throw Error()}catch(d){n=d}t()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),o=n.stack.split(`
`),s=r.length-1,l=o.length-1;1<=s&&0<=l&&r[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(r[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||r[s]!==o[l]){var c=`
`+r[s].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=s&&0<=l);break}}}finally{df=!1,Error.prepareStackTrace=i}return(t=t?t.displayName||t.name:"")?Wl(t):""}function J4(t){switch(t.tag){case 5:return Wl(t.type);case 16:return Wl("Lazy");case 13:return Wl("Suspense");case 19:return Wl("SuspenseList");case 0:case 2:case 15:return t=uf(t.type,!1),t;case 11:return t=uf(t.type.render,!1),t;case 1:return t=uf(t.type,!0),t;default:return""}}function sm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case la:return"Fragment";case aa:return"Portal";case nm:return"Profiler";case fx:return"StrictMode";case rm:return"Suspense";case om:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lk:return(t.displayName||"Context")+".Consumer";case ak:return(t._context.displayName||"Context")+".Provider";case mx:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gx:return e=t.displayName||null,e!==null?e:sm(t.type)||"Memo";case Vr:e=t._payload,t=t._init;try{return sm(t(e))}catch{}}return null}function e_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sm(e);case 8:return e===fx?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vo(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dk(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function t_(t){var e=dk(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,o=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ad(t){t._valueTracker||(t._valueTracker=t_(t))}function uk(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),n="";return t&&(n=dk(t)?t.checked?"true":"false":t.value),t=n,t!==i?(e.setValue(t),!0):!1}function yh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function am(t,e){var i=e.checked;return Ue({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??t._wrapperState.initialChecked})}function bw(t,e){var i=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;i=vo(e.value!=null?e.value:i),t._wrapperState={initialChecked:n,initialValue:i,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hk(t,e){e=e.checked,e!=null&&px(t,"checked",e,!1)}function lm(t,e){hk(t,e);var i=vo(e.value),n=e.type;if(i!=null)n==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+i):t.value!==""+i&&(t.value=""+i);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cm(t,e.type,i):e.hasOwnProperty("defaultValue")&&cm(t,e.type,vo(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kw(t,e,i){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,i||e===t.value||(t.value=e),t.defaultValue=e}i=t.name,i!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,i!==""&&(t.name=i)}function cm(t,e,i){(e!=="number"||yh(t.ownerDocument)!==t)&&(i==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+i&&(t.defaultValue=""+i))}var Ul=Array.isArray;function Pa(t,e,i,n){if(t=t.options,e){e={};for(var r=0;r<i.length;r++)e["$"+i[r]]=!0;for(i=0;i<t.length;i++)r=e.hasOwnProperty("$"+t[i].value),t[i].selected!==r&&(t[i].selected=r),r&&n&&(t[i].defaultSelected=!0)}else{for(i=""+vo(i),e=null,r=0;r<t.length;r++){if(t[r].value===i){t[r].selected=!0,n&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function dm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ue({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jw(t,e){var i=e.value;if(i==null){if(i=e.children,e=e.defaultValue,i!=null){if(e!=null)throw Error(B(92));if(Ul(i)){if(1<i.length)throw Error(B(93));i=i[0]}e=i}e==null&&(e=""),i=e}t._wrapperState={initialValue:vo(i)}}function pk(t,e){var i=vo(e.value),n=vo(e.defaultValue);i!=null&&(i=""+i,i!==t.value&&(t.value=i),e.defaultValue==null&&t.defaultValue!==i&&(t.defaultValue=i)),n!=null&&(t.defaultValue=""+n)}function Sw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function fk(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function um(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?fk(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Md,mk=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,i,n,r){MSApp.execUnsafeLocalFunction(function(){return t(e,i,n,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Md=Md||document.createElement("div"),Md.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Md.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fc(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var nc={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i_=["Webkit","ms","Moz","O"];Object.keys(nc).forEach(function(t){i_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),nc[e]=nc[t]})});function gk(t,e,i){return e==null||typeof e=="boolean"||e===""?"":i||typeof e!="number"||e===0||nc.hasOwnProperty(t)&&nc[t]?(""+e).trim():e+"px"}function xk(t,e){t=t.style;for(var i in e)if(e.hasOwnProperty(i)){var n=i.indexOf("--")===0,r=gk(i,e[i],n);i==="float"&&(i="cssFloat"),n?t.setProperty(i,r):t[i]=r}}var n_=Ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hm(t,e){if(e){if(n_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function pm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fm=null;function xx(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mm=null,Ta=null,Ea=null;function Dw(t){if(t=md(t)){if(typeof mm!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Cp(e),mm(t.stateNode,t.type,e))}}function wk(t){Ta?Ea?Ea.push(t):Ea=[t]:Ta=t}function vk(){if(Ta){var t=Ta,e=Ea;if(Ea=Ta=null,Dw(t),e)for(t=0;t<e.length;t++)Dw(e[t])}}function yk(t,e){return t(e)}function bk(){}var hf=!1;function kk(t,e,i){if(hf)return t(e,i);hf=!0;try{return yk(t,e,i)}finally{hf=!1,(Ta!==null||Ea!==null)&&(bk(),vk())}}function Rc(t,e){var i=t.stateNode;if(i===null)return null;var n=Cp(i);if(n===null)return null;i=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(B(231,e,typeof i));return i}var gm=!1;if(br)try{var jl={};Object.defineProperty(jl,"passive",{get:function(){gm=!0}}),window.addEventListener("test",jl,jl),window.removeEventListener("test",jl,jl)}catch{gm=!1}function r_(t,e,i,n,r,o,s,l,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(i,d)}catch(u){this.onError(u)}}var rc=!1,bh=null,kh=!1,xm=null,o_={onError:function(t){rc=!0,bh=t}};function s_(t,e,i,n,r,o,s,l,c){rc=!1,bh=null,r_.apply(o_,arguments)}function a_(t,e,i,n,r,o,s,l,c){if(s_.apply(this,arguments),rc){if(rc){var d=bh;rc=!1,bh=null}else throw Error(B(198));kh||(kh=!0,xm=d)}}function Ms(t){var e=t,i=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(i=e.return),t=e.return;while(t)}return e.tag===3?i:null}function jk(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _w(t){if(Ms(t)!==t)throw Error(B(188))}function l_(t){var e=t.alternate;if(!e){if(e=Ms(t),e===null)throw Error(B(188));return e!==t?null:t}for(var i=t,n=e;;){var r=i.return;if(r===null)break;var o=r.alternate;if(o===null){if(n=r.return,n!==null){i=n;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===i)return _w(r),t;if(o===n)return _w(r),e;o=o.sibling}throw Error(B(188))}if(i.return!==n.return)i=r,n=o;else{for(var s=!1,l=r.child;l;){if(l===i){s=!0,i=r,n=o;break}if(l===n){s=!0,n=r,i=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===i){s=!0,i=o,n=r;break}if(l===n){s=!0,n=o,i=r;break}l=l.sibling}if(!s)throw Error(B(189))}}if(i.alternate!==n)throw Error(B(190))}if(i.tag!==3)throw Error(B(188));return i.stateNode.current===i?t:e}function Sk(t){return t=l_(t),t!==null?Dk(t):null}function Dk(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Dk(t);if(e!==null)return e;t=t.sibling}return null}var _k=Ni.unstable_scheduleCallback,Cw=Ni.unstable_cancelCallback,c_=Ni.unstable_shouldYield,d_=Ni.unstable_requestPaint,it=Ni.unstable_now,u_=Ni.unstable_getCurrentPriorityLevel,wx=Ni.unstable_ImmediatePriority,Ck=Ni.unstable_UserBlockingPriority,jh=Ni.unstable_NormalPriority,h_=Ni.unstable_LowPriority,Pk=Ni.unstable_IdlePriority,jp=null,Wn=null;function p_(t){if(Wn&&typeof Wn.onCommitFiberRoot=="function")try{Wn.onCommitFiberRoot(jp,t,void 0,(t.current.flags&128)===128)}catch{}}var Sn=Math.clz32?Math.clz32:g_,f_=Math.log,m_=Math.LN2;function g_(t){return t>>>=0,t===0?32:31-(f_(t)/m_|0)|0}var zd=64,Fd=4194304;function Hl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sh(t,e){var i=t.pendingLanes;if(i===0)return 0;var n=0,r=t.suspendedLanes,o=t.pingedLanes,s=i&268435455;if(s!==0){var l=s&~r;l!==0?n=Hl(l):(o&=s,o!==0&&(n=Hl(o)))}else s=i&~r,s!==0?n=Hl(s):o!==0&&(n=Hl(o));if(n===0)return 0;if(e!==0&&e!==n&&!(e&r)&&(r=n&-n,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(n&4&&(n|=i&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)i=31-Sn(e),r=1<<i,n|=t[i],e&=~r;return n}function x_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function w_(t,e){for(var i=t.suspendedLanes,n=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-Sn(o),l=1<<s,c=r[s];c===-1?(!(l&i)||l&n)&&(r[s]=x_(l,e)):c<=e&&(t.expiredLanes|=l),o&=~l}}function wm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Tk(){var t=zd;return zd<<=1,!(zd&4194240)&&(zd=64),t}function pf(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function pd(t,e,i){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Sn(e),t[e]=i}function v_(t,e){var i=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<i;){var r=31-Sn(i),o=1<<r;e[r]=0,n[r]=-1,t[r]=-1,i&=~o}}function vx(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var n=31-Sn(i),r=1<<n;r&e|t[n]&e&&(t[n]|=e),i&=~r}}var ke=0;function Ek(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ik,yx,Ak,Mk,zk,vm=!1,Rd=[],to=null,io=null,no=null,Lc=new Map,Nc=new Map,Hr=[],y_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pw(t,e){switch(t){case"focusin":case"focusout":to=null;break;case"dragenter":case"dragleave":io=null;break;case"mouseover":case"mouseout":no=null;break;case"pointerover":case"pointerout":Lc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nc.delete(e.pointerId)}}function Sl(t,e,i,n,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:i,eventSystemFlags:n,nativeEvent:o,targetContainers:[r]},e!==null&&(e=md(e),e!==null&&yx(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function b_(t,e,i,n,r){switch(e){case"focusin":return to=Sl(to,t,e,i,n,r),!0;case"dragenter":return io=Sl(io,t,e,i,n,r),!0;case"mouseover":return no=Sl(no,t,e,i,n,r),!0;case"pointerover":var o=r.pointerId;return Lc.set(o,Sl(Lc.get(o)||null,t,e,i,n,r)),!0;case"gotpointercapture":return o=r.pointerId,Nc.set(o,Sl(Nc.get(o)||null,t,e,i,n,r)),!0}return!1}function Fk(t){var e=ts(t.target);if(e!==null){var i=Ms(e);if(i!==null){if(e=i.tag,e===13){if(e=jk(i),e!==null){t.blockedOn=e,zk(t.priority,function(){Ak(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=ym(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(i===null){i=t.nativeEvent;var n=new i.constructor(i.type,i);fm=n,i.target.dispatchEvent(n),fm=null}else return e=md(i),e!==null&&yx(e),t.blockedOn=i,!1;e.shift()}return!0}function Tw(t,e,i){Wu(t)&&i.delete(e)}function k_(){vm=!1,to!==null&&Wu(to)&&(to=null),io!==null&&Wu(io)&&(io=null),no!==null&&Wu(no)&&(no=null),Lc.forEach(Tw),Nc.forEach(Tw)}function Dl(t,e){t.blockedOn===e&&(t.blockedOn=null,vm||(vm=!0,Ni.unstable_scheduleCallback(Ni.unstable_NormalPriority,k_)))}function Oc(t){function e(r){return Dl(r,t)}if(0<Rd.length){Dl(Rd[0],t);for(var i=1;i<Rd.length;i++){var n=Rd[i];n.blockedOn===t&&(n.blockedOn=null)}}for(to!==null&&Dl(to,t),io!==null&&Dl(io,t),no!==null&&Dl(no,t),Lc.forEach(e),Nc.forEach(e),i=0;i<Hr.length;i++)n=Hr[i],n.blockedOn===t&&(n.blockedOn=null);for(;0<Hr.length&&(i=Hr[0],i.blockedOn===null);)Fk(i),i.blockedOn===null&&Hr.shift()}var Ia=Cr.ReactCurrentBatchConfig,Dh=!0;function j_(t,e,i,n){var r=ke,o=Ia.transition;Ia.transition=null;try{ke=1,bx(t,e,i,n)}finally{ke=r,Ia.transition=o}}function S_(t,e,i,n){var r=ke,o=Ia.transition;Ia.transition=null;try{ke=4,bx(t,e,i,n)}finally{ke=r,Ia.transition=o}}function bx(t,e,i,n){if(Dh){var r=ym(t,e,i,n);if(r===null)jf(t,e,n,_h,i),Pw(t,n);else if(b_(r,t,e,i,n))n.stopPropagation();else if(Pw(t,n),e&4&&-1<y_.indexOf(t)){for(;r!==null;){var o=md(r);if(o!==null&&Ik(o),o=ym(t,e,i,n),o===null&&jf(t,e,n,_h,i),o===r)break;r=o}r!==null&&n.stopPropagation()}else jf(t,e,n,null,i)}}var _h=null;function ym(t,e,i,n){if(_h=null,t=xx(n),t=ts(t),t!==null)if(e=Ms(t),e===null)t=null;else if(i=e.tag,i===13){if(t=jk(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _h=t,null}function Rk(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(u_()){case wx:return 1;case Ck:return 4;case jh:case h_:return 16;case Pk:return 536870912;default:return 16}default:return 16}}var Gr=null,kx=null,Uu=null;function Lk(){if(Uu)return Uu;var t,e=kx,i=e.length,n,r="value"in Gr?Gr.value:Gr.textContent,o=r.length;for(t=0;t<i&&e[t]===r[t];t++);var s=i-t;for(n=1;n<=s&&e[i-n]===r[o-n];n++);return Uu=r.slice(t,1<n?1-n:void 0)}function Hu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ld(){return!0}function Ew(){return!1}function Wi(t){function e(i,n,r,o,s){this._reactName=i,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(i=t[l],this[l]=i?i(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ld:Ew,this.isPropagationStopped=Ew,this}return Ue(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Ld)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Ld)},persist:function(){},isPersistent:Ld}),e}var hl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jx=Wi(hl),fd=Ue({},hl,{view:0,detail:0}),D_=Wi(fd),ff,mf,_l,Sp=Ue({},fd,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sx,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_l&&(_l&&t.type==="mousemove"?(ff=t.screenX-_l.screenX,mf=t.screenY-_l.screenY):mf=ff=0,_l=t),ff)},movementY:function(t){return"movementY"in t?t.movementY:mf}}),Iw=Wi(Sp),__=Ue({},Sp,{dataTransfer:0}),C_=Wi(__),P_=Ue({},fd,{relatedTarget:0}),gf=Wi(P_),T_=Ue({},hl,{animationName:0,elapsedTime:0,pseudoElement:0}),E_=Wi(T_),I_=Ue({},hl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),A_=Wi(I_),M_=Ue({},hl,{data:0}),Aw=Wi(M_),z_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},R_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=R_[t])?!!e[t]:!1}function Sx(){return L_}var N_=Ue({},fd,{key:function(t){if(t.key){var e=z_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Hu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?F_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sx,charCode:function(t){return t.type==="keypress"?Hu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Hu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),O_=Wi(N_),$_=Ue({},Sp,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mw=Wi($_),B_=Ue({},fd,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sx}),V_=Wi(B_),W_=Ue({},hl,{propertyName:0,elapsedTime:0,pseudoElement:0}),U_=Wi(W_),H_=Ue({},Sp,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Y_=Wi(H_),G_=[9,13,27,32],Dx=br&&"CompositionEvent"in window,oc=null;br&&"documentMode"in document&&(oc=document.documentMode);var X_=br&&"TextEvent"in window&&!oc,Nk=br&&(!Dx||oc&&8<oc&&11>=oc),zw=String.fromCharCode(32),Fw=!1;function Ok(t,e){switch(t){case"keyup":return G_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $k(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ca=!1;function Z_(t,e){switch(t){case"compositionend":return $k(e);case"keypress":return e.which!==32?null:(Fw=!0,zw);case"textInput":return t=e.data,t===zw&&Fw?null:t;default:return null}}function q_(t,e){if(ca)return t==="compositionend"||!Dx&&Ok(t,e)?(t=Lk(),Uu=kx=Gr=null,ca=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nk&&e.locale!=="ko"?null:e.data;default:return null}}var Q_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Q_[t.type]:e==="textarea"}function Bk(t,e,i,n){wk(n),e=Ch(e,"onChange"),0<e.length&&(i=new jx("onChange","change",null,i,n),t.push({event:i,listeners:e}))}var sc=null,$c=null;function K_(t){Kk(t,0)}function Dp(t){var e=ha(t);if(uk(e))return t}function J_(t,e){if(t==="change")return e}var Vk=!1;if(br){var xf;if(br){var wf="oninput"in document;if(!wf){var Lw=document.createElement("div");Lw.setAttribute("oninput","return;"),wf=typeof Lw.oninput=="function"}xf=wf}else xf=!1;Vk=xf&&(!document.documentMode||9<document.documentMode)}function Nw(){sc&&(sc.detachEvent("onpropertychange",Wk),$c=sc=null)}function Wk(t){if(t.propertyName==="value"&&Dp($c)){var e=[];Bk(e,$c,t,xx(t)),kk(K_,e)}}function eC(t,e,i){t==="focusin"?(Nw(),sc=e,$c=i,sc.attachEvent("onpropertychange",Wk)):t==="focusout"&&Nw()}function tC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dp($c)}function iC(t,e){if(t==="click")return Dp(e)}function nC(t,e){if(t==="input"||t==="change")return Dp(e)}function rC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Cn=typeof Object.is=="function"?Object.is:rC;function Bc(t,e){if(Cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),n=Object.keys(e);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var r=i[n];if(!im.call(e,r)||!Cn(t[r],e[r]))return!1}return!0}function Ow(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $w(t,e){var i=Ow(t);t=0;for(var n;i;){if(i.nodeType===3){if(n=t+i.textContent.length,t<=e&&n>=e)return{node:i,offset:e-t};t=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Ow(i)}}function Uk(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Uk(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hk(){for(var t=window,e=yh();e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=yh(t.document)}return e}function _x(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function oC(t){var e=Hk(),i=t.focusedElem,n=t.selectionRange;if(e!==i&&i&&i.ownerDocument&&Uk(i.ownerDocument.documentElement,i)){if(n!==null&&_x(i)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in i)i.selectionStart=e,i.selectionEnd=Math.min(t,i.value.length);else if(t=(e=i.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=i.textContent.length,o=Math.min(n.start,r);n=n.end===void 0?o:Math.min(n.end,r),!t.extend&&o>n&&(r=n,n=o,o=r),r=$w(i,o);var s=$w(i,n);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>n?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=i;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<e.length;i++)t=e[i],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sC=br&&"documentMode"in document&&11>=document.documentMode,da=null,bm=null,ac=null,km=!1;function Bw(t,e,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;km||da==null||da!==yh(n)||(n=da,"selectionStart"in n&&_x(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ac&&Bc(ac,n)||(ac=n,n=Ch(bm,"onSelect"),0<n.length&&(e=new jx("onSelect","select",null,e,i),t.push({event:e,listeners:n}),e.target=da)))}function Nd(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var ua={animationend:Nd("Animation","AnimationEnd"),animationiteration:Nd("Animation","AnimationIteration"),animationstart:Nd("Animation","AnimationStart"),transitionend:Nd("Transition","TransitionEnd")},vf={},Yk={};br&&(Yk=document.createElement("div").style,"AnimationEvent"in window||(delete ua.animationend.animation,delete ua.animationiteration.animation,delete ua.animationstart.animation),"TransitionEvent"in window||delete ua.transitionend.transition);function _p(t){if(vf[t])return vf[t];if(!ua[t])return t;var e=ua[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in Yk)return vf[t]=e[i];return t}var Gk=_p("animationend"),Xk=_p("animationiteration"),Zk=_p("animationstart"),qk=_p("transitionend"),Qk=new Map,Vw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _o(t,e){Qk.set(t,e),As(e,[t])}for(var yf=0;yf<Vw.length;yf++){var bf=Vw[yf],aC=bf.toLowerCase(),lC=bf[0].toUpperCase()+bf.slice(1);_o(aC,"on"+lC)}_o(Gk,"onAnimationEnd");_o(Xk,"onAnimationIteration");_o(Zk,"onAnimationStart");_o("dblclick","onDoubleClick");_o("focusin","onFocus");_o("focusout","onBlur");_o(qk,"onTransitionEnd");Wa("onMouseEnter",["mouseout","mouseover"]);Wa("onMouseLeave",["mouseout","mouseover"]);Wa("onPointerEnter",["pointerout","pointerover"]);Wa("onPointerLeave",["pointerout","pointerover"]);As("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));As("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));As("onBeforeInput",["compositionend","keypress","textInput","paste"]);As("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));As("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));As("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yl));function Ww(t,e,i){var n=t.type||"unknown-event";t.currentTarget=i,a_(n,e,void 0,t),t.currentTarget=null}function Kk(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var n=t[i],r=n.event;n=n.listeners;e:{var o=void 0;if(e)for(var s=n.length-1;0<=s;s--){var l=n[s],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==o&&r.isPropagationStopped())break e;Ww(r,l,d),o=c}else for(s=0;s<n.length;s++){if(l=n[s],c=l.instance,d=l.currentTarget,l=l.listener,c!==o&&r.isPropagationStopped())break e;Ww(r,l,d),o=c}}}if(kh)throw t=xm,kh=!1,xm=null,t}function Ee(t,e){var i=e[Cm];i===void 0&&(i=e[Cm]=new Set);var n=t+"__bubble";i.has(n)||(Jk(e,t,2,!1),i.add(n))}function kf(t,e,i){var n=0;e&&(n|=4),Jk(i,t,n,e)}var Od="_reactListening"+Math.random().toString(36).slice(2);function Vc(t){if(!t[Od]){t[Od]=!0,sk.forEach(function(i){i!=="selectionchange"&&(cC.has(i)||kf(i,!1,t),kf(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Od]||(e[Od]=!0,kf("selectionchange",!1,e))}}function Jk(t,e,i,n){switch(Rk(e)){case 1:var r=j_;break;case 4:r=S_;break;default:r=bx}i=r.bind(null,e,i,t),r=void 0,!gm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),n?r!==void 0?t.addEventListener(e,i,{capture:!0,passive:r}):t.addEventListener(e,i,!0):r!==void 0?t.addEventListener(e,i,{passive:r}):t.addEventListener(e,i,!1)}function jf(t,e,i,n,r){var o=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;s=s.return}for(;l!==null;){if(s=ts(l),s===null)return;if(c=s.tag,c===5||c===6){n=o=s;continue e}l=l.parentNode}}n=n.return}kk(function(){var d=o,u=xx(i),p=[];e:{var f=Qk.get(t);if(f!==void 0){var g=jx,y=t;switch(t){case"keypress":if(Hu(i)===0)break e;case"keydown":case"keyup":g=O_;break;case"focusin":y="focus",g=gf;break;case"focusout":y="blur",g=gf;break;case"beforeblur":case"afterblur":g=gf;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Iw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=C_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=V_;break;case Gk:case Xk:case Zk:g=E_;break;case qk:g=U_;break;case"scroll":g=D_;break;case"wheel":g=Y_;break;case"copy":case"cut":case"paste":g=A_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Mw}var w=(e&4)!==0,D=!w&&t==="scroll",j=w?f!==null?f+"Capture":null:f;w=[];for(var b=d,v;b!==null;){v=b;var h=v.stateNode;if(v.tag===5&&h!==null&&(v=h,j!==null&&(h=Rc(b,j),h!=null&&w.push(Wc(b,h,v)))),D)break;b=b.return}0<w.length&&(f=new g(f,y,null,i,u),p.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&i!==fm&&(y=i.relatedTarget||i.fromElement)&&(ts(y)||y[kr]))break e;if((g||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=i.relatedTarget||i.toElement,g=d,y=y?ts(y):null,y!==null&&(D=Ms(y),y!==D||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=d),g!==y)){if(w=Iw,h="onMouseLeave",j="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(w=Mw,h="onPointerLeave",j="onPointerEnter",b="pointer"),D=g==null?f:ha(g),v=y==null?f:ha(y),f=new w(h,b+"leave",g,i,u),f.target=D,f.relatedTarget=v,h=null,ts(u)===d&&(w=new w(j,b+"enter",y,i,u),w.target=v,w.relatedTarget=D,h=w),D=h,g&&y)t:{for(w=g,j=y,b=0,v=w;v;v=Hs(v))b++;for(v=0,h=j;h;h=Hs(h))v++;for(;0<b-v;)w=Hs(w),b--;for(;0<v-b;)j=Hs(j),v--;for(;b--;){if(w===j||j!==null&&w===j.alternate)break t;w=Hs(w),j=Hs(j)}w=null}else w=null;g!==null&&Uw(p,f,g,w,!1),y!==null&&D!==null&&Uw(p,D,y,w,!0)}}e:{if(f=d?ha(d):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var x=J_;else if(Rw(f))if(Vk)x=nC;else{x=tC;var k=eC}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=iC);if(x&&(x=x(t,d))){Bk(p,x,i,u);break e}k&&k(t,f,d),t==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&cm(f,"number",f.value)}switch(k=d?ha(d):window,t){case"focusin":(Rw(k)||k.contentEditable==="true")&&(da=k,bm=d,ac=null);break;case"focusout":ac=bm=da=null;break;case"mousedown":km=!0;break;case"contextmenu":case"mouseup":case"dragend":km=!1,Bw(p,i,u);break;case"selectionchange":if(sC)break;case"keydown":case"keyup":Bw(p,i,u)}var S;if(Dx)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ca?Ok(t,i)&&(_="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(_="onCompositionStart");_&&(Nk&&i.locale!=="ko"&&(ca||_!=="onCompositionStart"?_==="onCompositionEnd"&&ca&&(S=Lk()):(Gr=u,kx="value"in Gr?Gr.value:Gr.textContent,ca=!0)),k=Ch(d,_),0<k.length&&(_=new Aw(_,t,null,i,u),p.push({event:_,listeners:k}),S?_.data=S:(S=$k(i),S!==null&&(_.data=S)))),(S=X_?Z_(t,i):q_(t,i))&&(d=Ch(d,"onBeforeInput"),0<d.length&&(u=new Aw("onBeforeInput","beforeinput",null,i,u),p.push({event:u,listeners:d}),u.data=S))}Kk(p,e)})}function Wc(t,e,i){return{instance:t,listener:e,currentTarget:i}}function Ch(t,e){for(var i=e+"Capture",n=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Rc(t,i),o!=null&&n.unshift(Wc(t,o,r)),o=Rc(t,e),o!=null&&n.push(Wc(t,o,r))),t=t.return}return n}function Hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Uw(t,e,i,n,r){for(var o=e._reactName,s=[];i!==null&&i!==n;){var l=i,c=l.alternate,d=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&d!==null&&(l=d,r?(c=Rc(i,o),c!=null&&s.unshift(Wc(i,c,l))):r||(c=Rc(i,o),c!=null&&s.push(Wc(i,c,l)))),i=i.return}s.length!==0&&t.push({event:e,listeners:s})}var dC=/\r\n?/g,uC=/\u0000|\uFFFD/g;function Hw(t){return(typeof t=="string"?t:""+t).replace(dC,`
`).replace(uC,"")}function $d(t,e,i){if(e=Hw(e),Hw(t)!==e&&i)throw Error(B(425))}function Ph(){}var jm=null,Sm=null;function Dm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _m=typeof setTimeout=="function"?setTimeout:void 0,hC=typeof clearTimeout=="function"?clearTimeout:void 0,Yw=typeof Promise=="function"?Promise:void 0,pC=typeof queueMicrotask=="function"?queueMicrotask:typeof Yw<"u"?function(t){return Yw.resolve(null).then(t).catch(fC)}:_m;function fC(t){setTimeout(function(){throw t})}function Sf(t,e){var i=e,n=0;do{var r=i.nextSibling;if(t.removeChild(i),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(n===0){t.removeChild(r),Oc(e);return}n--}else i!=="$"&&i!=="$?"&&i!=="$!"||n++;i=r}while(i);Oc(e)}function ro(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Gw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(e===0)return t;e--}else i==="/$"&&e++}t=t.previousSibling}return null}var pl=Math.random().toString(36).slice(2),On="__reactFiber$"+pl,Uc="__reactProps$"+pl,kr="__reactContainer$"+pl,Cm="__reactEvents$"+pl,mC="__reactListeners$"+pl,gC="__reactHandles$"+pl;function ts(t){var e=t[On];if(e)return e;for(var i=t.parentNode;i;){if(e=i[kr]||i[On]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=Gw(t);t!==null;){if(i=t[On])return i;t=Gw(t)}return e}t=i,i=t.parentNode}return null}function md(t){return t=t[On]||t[kr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ha(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Cp(t){return t[Uc]||null}var Pm=[],pa=-1;function Co(t){return{current:t}}function Ae(t){0>pa||(t.current=Pm[pa],Pm[pa]=null,pa--)}function Te(t,e){pa++,Pm[pa]=t.current,t.current=e}var yo={},Zt=Co(yo),mi=Co(!1),bs=yo;function Ua(t,e){var i=t.type.contextTypes;if(!i)return yo;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in i)r[o]=e[o];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function gi(t){return t=t.childContextTypes,t!=null}function Th(){Ae(mi),Ae(Zt)}function Xw(t,e,i){if(Zt.current!==yo)throw Error(B(168));Te(Zt,e),Te(mi,i)}function ej(t,e,i){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return i;n=n.getChildContext();for(var r in n)if(!(r in e))throw Error(B(108,e_(t)||"Unknown",r));return Ue({},i,n)}function Eh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yo,bs=Zt.current,Te(Zt,t),Te(mi,mi.current),!0}function Zw(t,e,i){var n=t.stateNode;if(!n)throw Error(B(169));i?(t=ej(t,e,bs),n.__reactInternalMemoizedMergedChildContext=t,Ae(mi),Ae(Zt),Te(Zt,t)):Ae(mi),Te(mi,i)}var cr=null,Pp=!1,Df=!1;function tj(t){cr===null?cr=[t]:cr.push(t)}function xC(t){Pp=!0,tj(t)}function Po(){if(!Df&&cr!==null){Df=!0;var t=0,e=ke;try{var i=cr;for(ke=1;t<i.length;t++){var n=i[t];do n=n(!0);while(n!==null)}cr=null,Pp=!1}catch(r){throw cr!==null&&(cr=cr.slice(t+1)),_k(wx,Po),r}finally{ke=e,Df=!1}}return null}var fa=[],ma=0,Ih=null,Ah=0,qi=[],Qi=0,ks=null,pr=1,fr="";function Yo(t,e){fa[ma++]=Ah,fa[ma++]=Ih,Ih=t,Ah=e}function ij(t,e,i){qi[Qi++]=pr,qi[Qi++]=fr,qi[Qi++]=ks,ks=t;var n=pr;t=fr;var r=32-Sn(n)-1;n&=~(1<<r),i+=1;var o=32-Sn(e)+r;if(30<o){var s=r-r%5;o=(n&(1<<s)-1).toString(32),n>>=s,r-=s,pr=1<<32-Sn(e)+r|i<<r|n,fr=o+t}else pr=1<<o|i<<r|n,fr=t}function Cx(t){t.return!==null&&(Yo(t,1),ij(t,1,0))}function Px(t){for(;t===Ih;)Ih=fa[--ma],fa[ma]=null,Ah=fa[--ma],fa[ma]=null;for(;t===ks;)ks=qi[--Qi],qi[Qi]=null,fr=qi[--Qi],qi[Qi]=null,pr=qi[--Qi],qi[Qi]=null}var Ri=null,zi=null,Fe=!1,yn=null;function nj(t,e){var i=en(5,null,null,0);i.elementType="DELETED",i.stateNode=e,i.return=t,e=t.deletions,e===null?(t.deletions=[i],t.flags|=16):e.push(i)}function qw(t,e){switch(t.tag){case 5:var i=t.type;return e=e.nodeType!==1||i.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ri=t,zi=ro(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ri=t,zi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(i=ks!==null?{id:pr,overflow:fr}:null,t.memoizedState={dehydrated:e,treeContext:i,retryLane:1073741824},i=en(18,null,null,0),i.stateNode=e,i.return=t,t.child=i,Ri=t,zi=null,!0):!1;default:return!1}}function Tm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Em(t){if(Fe){var e=zi;if(e){var i=e;if(!qw(t,e)){if(Tm(t))throw Error(B(418));e=ro(i.nextSibling);var n=Ri;e&&qw(t,e)?nj(n,i):(t.flags=t.flags&-4097|2,Fe=!1,Ri=t)}}else{if(Tm(t))throw Error(B(418));t.flags=t.flags&-4097|2,Fe=!1,Ri=t}}}function Qw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ri=t}function Bd(t){if(t!==Ri)return!1;if(!Fe)return Qw(t),Fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Dm(t.type,t.memoizedProps)),e&&(e=zi)){if(Tm(t))throw rj(),Error(B(418));for(;e;)nj(t,e),e=ro(e.nextSibling)}if(Qw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"){if(e===0){zi=ro(t.nextSibling);break e}e--}else i!=="$"&&i!=="$!"&&i!=="$?"||e++}t=t.nextSibling}zi=null}}else zi=Ri?ro(t.stateNode.nextSibling):null;return!0}function rj(){for(var t=zi;t;)t=ro(t.nextSibling)}function Ha(){zi=Ri=null,Fe=!1}function Tx(t){yn===null?yn=[t]:yn.push(t)}var wC=Cr.ReactCurrentBatchConfig;function Cl(t,e,i){if(t=i.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(B(309));var n=i.stateNode}if(!n)throw Error(B(147,t));var r=n,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=r.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(B(284));if(!i._owner)throw Error(B(290,t))}return t}function Vd(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kw(t){var e=t._init;return e(t._payload)}function oj(t){function e(j,b){if(t){var v=j.deletions;v===null?(j.deletions=[b],j.flags|=16):v.push(b)}}function i(j,b){if(!t)return null;for(;b!==null;)e(j,b),b=b.sibling;return null}function n(j,b){for(j=new Map;b!==null;)b.key!==null?j.set(b.key,b):j.set(b.index,b),b=b.sibling;return j}function r(j,b){return j=lo(j,b),j.index=0,j.sibling=null,j}function o(j,b,v){return j.index=v,t?(v=j.alternate,v!==null?(v=v.index,v<b?(j.flags|=2,b):v):(j.flags|=2,b)):(j.flags|=1048576,b)}function s(j){return t&&j.alternate===null&&(j.flags|=2),j}function l(j,b,v,h){return b===null||b.tag!==6?(b=Af(v,j.mode,h),b.return=j,b):(b=r(b,v),b.return=j,b)}function c(j,b,v,h){var x=v.type;return x===la?u(j,b,v.props.children,h,v.key):b!==null&&(b.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Vr&&Kw(x)===b.type)?(h=r(b,v.props),h.ref=Cl(j,b,v),h.return=j,h):(h=Ku(v.type,v.key,v.props,null,j.mode,h),h.ref=Cl(j,b,v),h.return=j,h)}function d(j,b,v,h){return b===null||b.tag!==4||b.stateNode.containerInfo!==v.containerInfo||b.stateNode.implementation!==v.implementation?(b=Mf(v,j.mode,h),b.return=j,b):(b=r(b,v.children||[]),b.return=j,b)}function u(j,b,v,h,x){return b===null||b.tag!==7?(b=us(v,j.mode,h,x),b.return=j,b):(b=r(b,v),b.return=j,b)}function p(j,b,v){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Af(""+b,j.mode,v),b.return=j,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Id:return v=Ku(b.type,b.key,b.props,null,j.mode,v),v.ref=Cl(j,null,b),v.return=j,v;case aa:return b=Mf(b,j.mode,v),b.return=j,b;case Vr:var h=b._init;return p(j,h(b._payload),v)}if(Ul(b)||kl(b))return b=us(b,j.mode,v,null),b.return=j,b;Vd(j,b)}return null}function f(j,b,v,h){var x=b!==null?b.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return x!==null?null:l(j,b,""+v,h);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Id:return v.key===x?c(j,b,v,h):null;case aa:return v.key===x?d(j,b,v,h):null;case Vr:return x=v._init,f(j,b,x(v._payload),h)}if(Ul(v)||kl(v))return x!==null?null:u(j,b,v,h,null);Vd(j,v)}return null}function g(j,b,v,h,x){if(typeof h=="string"&&h!==""||typeof h=="number")return j=j.get(v)||null,l(b,j,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Id:return j=j.get(h.key===null?v:h.key)||null,c(b,j,h,x);case aa:return j=j.get(h.key===null?v:h.key)||null,d(b,j,h,x);case Vr:var k=h._init;return g(j,b,v,k(h._payload),x)}if(Ul(h)||kl(h))return j=j.get(v)||null,u(b,j,h,x,null);Vd(b,h)}return null}function y(j,b,v,h){for(var x=null,k=null,S=b,_=b=0,C=null;S!==null&&_<v.length;_++){S.index>_?(C=S,S=null):C=S.sibling;var E=f(j,S,v[_],h);if(E===null){S===null&&(S=C);break}t&&S&&E.alternate===null&&e(j,S),b=o(E,b,_),k===null?x=E:k.sibling=E,k=E,S=C}if(_===v.length)return i(j,S),Fe&&Yo(j,_),x;if(S===null){for(;_<v.length;_++)S=p(j,v[_],h),S!==null&&(b=o(S,b,_),k===null?x=S:k.sibling=S,k=S);return Fe&&Yo(j,_),x}for(S=n(j,S);_<v.length;_++)C=g(S,j,_,v[_],h),C!==null&&(t&&C.alternate!==null&&S.delete(C.key===null?_:C.key),b=o(C,b,_),k===null?x=C:k.sibling=C,k=C);return t&&S.forEach(function(z){return e(j,z)}),Fe&&Yo(j,_),x}function w(j,b,v,h){var x=kl(v);if(typeof x!="function")throw Error(B(150));if(v=x.call(v),v==null)throw Error(B(151));for(var k=x=null,S=b,_=b=0,C=null,E=v.next();S!==null&&!E.done;_++,E=v.next()){S.index>_?(C=S,S=null):C=S.sibling;var z=f(j,S,E.value,h);if(z===null){S===null&&(S=C);break}t&&S&&z.alternate===null&&e(j,S),b=o(z,b,_),k===null?x=z:k.sibling=z,k=z,S=C}if(E.done)return i(j,S),Fe&&Yo(j,_),x;if(S===null){for(;!E.done;_++,E=v.next())E=p(j,E.value,h),E!==null&&(b=o(E,b,_),k===null?x=E:k.sibling=E,k=E);return Fe&&Yo(j,_),x}for(S=n(j,S);!E.done;_++,E=v.next())E=g(S,j,_,E.value,h),E!==null&&(t&&E.alternate!==null&&S.delete(E.key===null?_:E.key),b=o(E,b,_),k===null?x=E:k.sibling=E,k=E);return t&&S.forEach(function(A){return e(j,A)}),Fe&&Yo(j,_),x}function D(j,b,v,h){if(typeof v=="object"&&v!==null&&v.type===la&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Id:e:{for(var x=v.key,k=b;k!==null;){if(k.key===x){if(x=v.type,x===la){if(k.tag===7){i(j,k.sibling),b=r(k,v.props.children),b.return=j,j=b;break e}}else if(k.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Vr&&Kw(x)===k.type){i(j,k.sibling),b=r(k,v.props),b.ref=Cl(j,k,v),b.return=j,j=b;break e}i(j,k);break}else e(j,k);k=k.sibling}v.type===la?(b=us(v.props.children,j.mode,h,v.key),b.return=j,j=b):(h=Ku(v.type,v.key,v.props,null,j.mode,h),h.ref=Cl(j,b,v),h.return=j,j=h)}return s(j);case aa:e:{for(k=v.key;b!==null;){if(b.key===k)if(b.tag===4&&b.stateNode.containerInfo===v.containerInfo&&b.stateNode.implementation===v.implementation){i(j,b.sibling),b=r(b,v.children||[]),b.return=j,j=b;break e}else{i(j,b);break}else e(j,b);b=b.sibling}b=Mf(v,j.mode,h),b.return=j,j=b}return s(j);case Vr:return k=v._init,D(j,b,k(v._payload),h)}if(Ul(v))return y(j,b,v,h);if(kl(v))return w(j,b,v,h);Vd(j,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,b!==null&&b.tag===6?(i(j,b.sibling),b=r(b,v),b.return=j,j=b):(i(j,b),b=Af(v,j.mode,h),b.return=j,j=b),s(j)):i(j,b)}return D}var Ya=oj(!0),sj=oj(!1),Mh=Co(null),zh=null,ga=null,Ex=null;function Ix(){Ex=ga=zh=null}function Ax(t){var e=Mh.current;Ae(Mh),t._currentValue=e}function Im(t,e,i){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===i)break;t=t.return}}function Aa(t,e){zh=t,Ex=ga=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(fi=!0),t.firstContext=null)}function an(t){var e=t._currentValue;if(Ex!==t)if(t={context:t,memoizedValue:e,next:null},ga===null){if(zh===null)throw Error(B(308));ga=t,zh.dependencies={lanes:0,firstContext:t}}else ga=ga.next=t;return e}var is=null;function Mx(t){is===null?is=[t]:is.push(t)}function aj(t,e,i,n){var r=e.interleaved;return r===null?(i.next=i,Mx(e)):(i.next=r.next,r.next=i),e.interleaved=i,jr(t,n)}function jr(t,e){t.lanes|=e;var i=t.alternate;for(i!==null&&(i.lanes|=e),i=t,t=t.return;t!==null;)t.childLanes|=e,i=t.alternate,i!==null&&(i.childLanes|=e),i=t,t=t.return;return i.tag===3?i.stateNode:null}var Wr=!1;function zx(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lj(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function oo(t,e,i){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,xe&2){var r=n.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),n.pending=e,jr(t,i)}return r=n.interleaved,r===null?(e.next=e,Mx(n)):(e.next=r.next,r.next=e),n.interleaved=e,jr(t,i)}function Yu(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,i|=n,e.lanes=i,vx(t,i)}}function Jw(t,e){var i=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var r=null,o=null;if(i=i.firstBaseUpdate,i!==null){do{var s={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};o===null?r=o=s:o=o.next=s,i=i.next}while(i!==null);o===null?r=o=e:o=o.next=e}else r=o=e;i={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:n.shared,effects:n.effects},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}function Fh(t,e,i,n){var r=t.updateQueue;Wr=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,d=c.next;c.next=null,s===null?o=d:s.next=d,s=c;var u=t.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==s&&(l===null?u.firstBaseUpdate=d:l.next=d,u.lastBaseUpdate=c))}if(o!==null){var p=r.baseState;s=0,u=d=c=null,l=o;do{var f=l.lane,g=l.eventTime;if((n&f)===f){u!==null&&(u=u.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,w=l;switch(f=e,g=i,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(g,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,f=typeof y=="function"?y.call(g,p,f):y,f==null)break e;p=Ue({},p,f);break e;case 2:Wr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(d=u=g,c=p):u=u.next=g,s|=f;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;f=l,l=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(u===null&&(c=p),r.baseState=c,r.firstBaseUpdate=d,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Ss|=s,t.lanes=s,t.memoizedState=p}}function ev(t,e,i){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],r=n.callback;if(r!==null){if(n.callback=null,n=i,typeof r!="function")throw Error(B(191,r));r.call(n)}}}var gd={},Un=Co(gd),Hc=Co(gd),Yc=Co(gd);function ns(t){if(t===gd)throw Error(B(174));return t}function Fx(t,e){switch(Te(Yc,e),Te(Hc,t),Te(Un,gd),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:um(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=um(e,t)}Ae(Un),Te(Un,e)}function Ga(){Ae(Un),Ae(Hc),Ae(Yc)}function cj(t){ns(Yc.current);var e=ns(Un.current),i=um(e,t.type);e!==i&&(Te(Hc,t),Te(Un,i))}function Rx(t){Hc.current===t&&(Ae(Un),Ae(Hc))}var Oe=Co(0);function Rh(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _f=[];function Lx(){for(var t=0;t<_f.length;t++)_f[t]._workInProgressVersionPrimary=null;_f.length=0}var Gu=Cr.ReactCurrentDispatcher,Cf=Cr.ReactCurrentBatchConfig,js=0,We=null,xt=null,St=null,Lh=!1,lc=!1,Gc=0,vC=0;function Bt(){throw Error(B(321))}function Nx(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!Cn(t[i],e[i]))return!1;return!0}function Ox(t,e,i,n,r,o){if(js=o,We=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Gu.current=t===null||t.memoizedState===null?jC:SC,t=i(n,r),lc){o=0;do{if(lc=!1,Gc=0,25<=o)throw Error(B(301));o+=1,St=xt=null,e.updateQueue=null,Gu.current=DC,t=i(n,r)}while(lc)}if(Gu.current=Nh,e=xt!==null&&xt.next!==null,js=0,St=xt=We=null,Lh=!1,e)throw Error(B(300));return t}function $x(){var t=Gc!==0;return Gc=0,t}function Mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?We.memoizedState=St=t:St=St.next=t,St}function ln(){if(xt===null){var t=We.alternate;t=t!==null?t.memoizedState:null}else t=xt.next;var e=St===null?We.memoizedState:St.next;if(e!==null)St=e,xt=t;else{if(t===null)throw Error(B(310));xt=t,t={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},St===null?We.memoizedState=St=t:St=St.next=t}return St}function Xc(t,e){return typeof e=="function"?e(t):e}function Pf(t){var e=ln(),i=e.queue;if(i===null)throw Error(B(311));i.lastRenderedReducer=t;var n=xt,r=n.baseQueue,o=i.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}n.baseQueue=r=o,i.pending=null}if(r!==null){o=r.next,n=n.baseState;var l=s=null,c=null,d=o;do{var u=d.lane;if((js&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:t(n,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=p,s=n):c=c.next=p,We.lanes|=u,Ss|=u}d=d.next}while(d!==null&&d!==o);c===null?s=n:c.next=l,Cn(n,e.memoizedState)||(fi=!0),e.memoizedState=n,e.baseState=s,e.baseQueue=c,i.lastRenderedState=n}if(t=i.interleaved,t!==null){r=t;do o=r.lane,We.lanes|=o,Ss|=o,r=r.next;while(r!==t)}else r===null&&(i.lanes=0);return[e.memoizedState,i.dispatch]}function Tf(t){var e=ln(),i=e.queue;if(i===null)throw Error(B(311));i.lastRenderedReducer=t;var n=i.dispatch,r=i.pending,o=e.memoizedState;if(r!==null){i.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Cn(o,e.memoizedState)||(fi=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),i.lastRenderedState=o}return[o,n]}function dj(){}function uj(t,e){var i=We,n=ln(),r=e(),o=!Cn(n.memoizedState,r);if(o&&(n.memoizedState=r,fi=!0),n=n.queue,Bx(fj.bind(null,i,n,t),[t]),n.getSnapshot!==e||o||St!==null&&St.memoizedState.tag&1){if(i.flags|=2048,Zc(9,pj.bind(null,i,n,r,e),void 0,null),Ct===null)throw Error(B(349));js&30||hj(i,e,r)}return r}function hj(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function pj(t,e,i,n){e.value=i,e.getSnapshot=n,mj(e)&&gj(t)}function fj(t,e,i){return i(function(){mj(e)&&gj(t)})}function mj(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!Cn(t,i)}catch{return!0}}function gj(t){var e=jr(t,1);e!==null&&Dn(e,t,1,-1)}function tv(t){var e=Mn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xc,lastRenderedState:t},e.queue=t,t=t.dispatch=kC.bind(null,We,t),[e.memoizedState,t]}function Zc(t,e,i,n){return t={tag:t,create:e,destroy:i,deps:n,next:null},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.lastEffect=t.next=t):(i=e.lastEffect,i===null?e.lastEffect=t.next=t:(n=i.next,i.next=t,t.next=n,e.lastEffect=t)),t}function xj(){return ln().memoizedState}function Xu(t,e,i,n){var r=Mn();We.flags|=t,r.memoizedState=Zc(1|e,i,void 0,n===void 0?null:n)}function Tp(t,e,i,n){var r=ln();n=n===void 0?null:n;var o=void 0;if(xt!==null){var s=xt.memoizedState;if(o=s.destroy,n!==null&&Nx(n,s.deps)){r.memoizedState=Zc(e,i,o,n);return}}We.flags|=t,r.memoizedState=Zc(1|e,i,o,n)}function iv(t,e){return Xu(8390656,8,t,e)}function Bx(t,e){return Tp(2048,8,t,e)}function wj(t,e){return Tp(4,2,t,e)}function vj(t,e){return Tp(4,4,t,e)}function yj(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bj(t,e,i){return i=i!=null?i.concat([t]):null,Tp(4,4,yj.bind(null,e,t),i)}function Vx(){}function kj(t,e){var i=ln();e=e===void 0?null:e;var n=i.memoizedState;return n!==null&&e!==null&&Nx(e,n[1])?n[0]:(i.memoizedState=[t,e],t)}function jj(t,e){var i=ln();e=e===void 0?null:e;var n=i.memoizedState;return n!==null&&e!==null&&Nx(e,n[1])?n[0]:(t=t(),i.memoizedState=[t,e],t)}function Sj(t,e,i){return js&21?(Cn(i,e)||(i=Tk(),We.lanes|=i,Ss|=i,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,fi=!0),t.memoizedState=i)}function yC(t,e){var i=ke;ke=i!==0&&4>i?i:4,t(!0);var n=Cf.transition;Cf.transition={};try{t(!1),e()}finally{ke=i,Cf.transition=n}}function Dj(){return ln().memoizedState}function bC(t,e,i){var n=ao(t);if(i={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null},_j(t))Cj(e,i);else if(i=aj(t,e,i,n),i!==null){var r=ai();Dn(i,t,n,r),Pj(i,e,n)}}function kC(t,e,i){var n=ao(t),r={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null};if(_j(t))Cj(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,i);if(r.hasEagerState=!0,r.eagerState=l,Cn(l,s)){var c=e.interleaved;c===null?(r.next=r,Mx(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}i=aj(t,e,r,n),i!==null&&(r=ai(),Dn(i,t,n,r),Pj(i,e,n))}}function _j(t){var e=t.alternate;return t===We||e!==null&&e===We}function Cj(t,e){lc=Lh=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function Pj(t,e,i){if(i&4194240){var n=e.lanes;n&=t.pendingLanes,i|=n,e.lanes=i,vx(t,i)}}var Nh={readContext:an,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},jC={readContext:an,useCallback:function(t,e){return Mn().memoizedState=[t,e===void 0?null:e],t},useContext:an,useEffect:iv,useImperativeHandle:function(t,e,i){return i=i!=null?i.concat([t]):null,Xu(4194308,4,yj.bind(null,e,t),i)},useLayoutEffect:function(t,e){return Xu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xu(4,2,t,e)},useMemo:function(t,e){var i=Mn();return e=e===void 0?null:e,t=t(),i.memoizedState=[t,e],t},useReducer:function(t,e,i){var n=Mn();return e=i!==void 0?i(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=bC.bind(null,We,t),[n.memoizedState,t]},useRef:function(t){var e=Mn();return t={current:t},e.memoizedState=t},useState:tv,useDebugValue:Vx,useDeferredValue:function(t){return Mn().memoizedState=t},useTransition:function(){var t=tv(!1),e=t[0];return t=yC.bind(null,t[1]),Mn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,i){var n=We,r=Mn();if(Fe){if(i===void 0)throw Error(B(407));i=i()}else{if(i=e(),Ct===null)throw Error(B(349));js&30||hj(n,e,i)}r.memoizedState=i;var o={value:i,getSnapshot:e};return r.queue=o,iv(fj.bind(null,n,o,t),[t]),n.flags|=2048,Zc(9,pj.bind(null,n,o,i,e),void 0,null),i},useId:function(){var t=Mn(),e=Ct.identifierPrefix;if(Fe){var i=fr,n=pr;i=(n&~(1<<32-Sn(n)-1)).toString(32)+i,e=":"+e+"R"+i,i=Gc++,0<i&&(e+="H"+i.toString(32)),e+=":"}else i=vC++,e=":"+e+"r"+i.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SC={readContext:an,useCallback:kj,useContext:an,useEffect:Bx,useImperativeHandle:bj,useInsertionEffect:wj,useLayoutEffect:vj,useMemo:jj,useReducer:Pf,useRef:xj,useState:function(){return Pf(Xc)},useDebugValue:Vx,useDeferredValue:function(t){var e=ln();return Sj(e,xt.memoizedState,t)},useTransition:function(){var t=Pf(Xc)[0],e=ln().memoizedState;return[t,e]},useMutableSource:dj,useSyncExternalStore:uj,useId:Dj,unstable_isNewReconciler:!1},DC={readContext:an,useCallback:kj,useContext:an,useEffect:Bx,useImperativeHandle:bj,useInsertionEffect:wj,useLayoutEffect:vj,useMemo:jj,useReducer:Tf,useRef:xj,useState:function(){return Tf(Xc)},useDebugValue:Vx,useDeferredValue:function(t){var e=ln();return xt===null?e.memoizedState=t:Sj(e,xt.memoizedState,t)},useTransition:function(){var t=Tf(Xc)[0],e=ln().memoizedState;return[t,e]},useMutableSource:dj,useSyncExternalStore:uj,useId:Dj,unstable_isNewReconciler:!1};function wn(t,e){if(t&&t.defaultProps){e=Ue({},e),t=t.defaultProps;for(var i in t)e[i]===void 0&&(e[i]=t[i]);return e}return e}function Am(t,e,i,n){e=t.memoizedState,i=i(n,e),i=i==null?e:Ue({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Ep={isMounted:function(t){return(t=t._reactInternals)?Ms(t)===t:!1},enqueueSetState:function(t,e,i){t=t._reactInternals;var n=ai(),r=ao(t),o=xr(n,r);o.payload=e,i!=null&&(o.callback=i),e=oo(t,o,r),e!==null&&(Dn(e,t,r,n),Yu(e,t,r))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var n=ai(),r=ao(t),o=xr(n,r);o.tag=1,o.payload=e,i!=null&&(o.callback=i),e=oo(t,o,r),e!==null&&(Dn(e,t,r,n),Yu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=ai(),n=ao(t),r=xr(i,n);r.tag=2,e!=null&&(r.callback=e),e=oo(t,r,n),e!==null&&(Dn(e,t,n,i),Yu(e,t,n))}};function nv(t,e,i,n,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,o,s):e.prototype&&e.prototype.isPureReactComponent?!Bc(i,n)||!Bc(r,o):!0}function Tj(t,e,i){var n=!1,r=yo,o=e.contextType;return typeof o=="object"&&o!==null?o=an(o):(r=gi(e)?bs:Zt.current,n=e.contextTypes,o=(n=n!=null)?Ua(t,r):yo),e=new e(i,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ep,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function rv(t,e,i,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,n),e.state!==t&&Ep.enqueueReplaceState(e,e.state,null)}function Mm(t,e,i,n){var r=t.stateNode;r.props=i,r.state=t.memoizedState,r.refs={},zx(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=an(o):(o=gi(e)?bs:Zt.current,r.context=Ua(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Am(t,e,o,i),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ep.enqueueReplaceState(r,r.state,null),Fh(t,i,r,n),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Xa(t,e){try{var i="",n=e;do i+=J4(n),n=n.return;while(n);var r=i}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Ef(t,e,i){return{value:t,source:null,stack:i??null,digest:e??null}}function zm(t,e){try{console.error(e.value)}catch(i){setTimeout(function(){throw i})}}var _C=typeof WeakMap=="function"?WeakMap:Map;function Ej(t,e,i){i=xr(-1,i),i.tag=3,i.payload={element:null};var n=e.value;return i.callback=function(){$h||($h=!0,Um=n),zm(t,e)},i}function Ij(t,e,i){i=xr(-1,i),i.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var r=e.value;i.payload=function(){return n(r)},i.callback=function(){zm(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(i.callback=function(){zm(t,e),typeof n!="function"&&(so===null?so=new Set([this]):so.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),i}function ov(t,e,i){var n=t.pingCache;if(n===null){n=t.pingCache=new _C;var r=new Set;n.set(e,r)}else r=n.get(e),r===void 0&&(r=new Set,n.set(e,r));r.has(i)||(r.add(i),t=$C.bind(null,t,e,i),e.then(t,t))}function sv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function av(t,e,i,n,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(e=xr(-1,1),e.tag=2,oo(i,e,1))),i.lanes|=1),t)}var CC=Cr.ReactCurrentOwner,fi=!1;function ii(t,e,i,n){e.child=t===null?sj(e,null,i,n):Ya(e,t.child,i,n)}function lv(t,e,i,n,r){i=i.render;var o=e.ref;return Aa(e,r),n=Ox(t,e,i,n,o,r),i=$x(),t!==null&&!fi?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Sr(t,e,r)):(Fe&&i&&Cx(e),e.flags|=1,ii(t,e,n,r),e.child)}function cv(t,e,i,n,r){if(t===null){var o=i.type;return typeof o=="function"&&!qx(o)&&o.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(e.tag=15,e.type=o,Aj(t,e,o,n,r)):(t=Ku(i.type,null,n,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(i=i.compare,i=i!==null?i:Bc,i(s,n)&&t.ref===e.ref)return Sr(t,e,r)}return e.flags|=1,t=lo(o,n),t.ref=e.ref,t.return=e,e.child=t}function Aj(t,e,i,n,r){if(t!==null){var o=t.memoizedProps;if(Bc(o,n)&&t.ref===e.ref)if(fi=!1,e.pendingProps=n=o,(t.lanes&r)!==0)t.flags&131072&&(fi=!0);else return e.lanes=t.lanes,Sr(t,e,r)}return Fm(t,e,i,n,r)}function Mj(t,e,i){var n=e.pendingProps,r=n.children,o=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(wa,Pi),Pi|=i;else{if(!(i&1073741824))return t=o!==null?o.baseLanes|i:i,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(wa,Pi),Pi|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:i,Te(wa,Pi),Pi|=n}else o!==null?(n=o.baseLanes|i,e.memoizedState=null):n=i,Te(wa,Pi),Pi|=n;return ii(t,e,r,i),e.child}function zj(t,e){var i=e.ref;(t===null&&i!==null||t!==null&&t.ref!==i)&&(e.flags|=512,e.flags|=2097152)}function Fm(t,e,i,n,r){var o=gi(i)?bs:Zt.current;return o=Ua(e,o),Aa(e,r),i=Ox(t,e,i,n,o,r),n=$x(),t!==null&&!fi?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Sr(t,e,r)):(Fe&&n&&Cx(e),e.flags|=1,ii(t,e,i,r),e.child)}function dv(t,e,i,n,r){if(gi(i)){var o=!0;Eh(e)}else o=!1;if(Aa(e,r),e.stateNode===null)Zu(t,e),Tj(e,i,n),Mm(e,i,n,r),n=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var c=s.context,d=i.contextType;typeof d=="object"&&d!==null?d=an(d):(d=gi(i)?bs:Zt.current,d=Ua(e,d));var u=i.getDerivedStateFromProps,p=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==n||c!==d)&&rv(e,s,n,d),Wr=!1;var f=e.memoizedState;s.state=f,Fh(e,n,s,r),c=e.memoizedState,l!==n||f!==c||mi.current||Wr?(typeof u=="function"&&(Am(e,i,u,n),c=e.memoizedState),(l=Wr||nv(e,i,l,n,f,c,d))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=c),s.props=n,s.state=c,s.context=d,n=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{s=e.stateNode,lj(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:wn(e.type,l),s.props=d,p=e.pendingProps,f=s.context,c=i.contextType,typeof c=="object"&&c!==null?c=an(c):(c=gi(i)?bs:Zt.current,c=Ua(e,c));var g=i.getDerivedStateFromProps;(u=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||f!==c)&&rv(e,s,n,c),Wr=!1,f=e.memoizedState,s.state=f,Fh(e,n,s,r);var y=e.memoizedState;l!==p||f!==y||mi.current||Wr?(typeof g=="function"&&(Am(e,i,g,n),y=e.memoizedState),(d=Wr||nv(e,i,d,n,f,y,c)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,y,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,y,c)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=y),s.props=n,s.state=y,s.context=c,n=d):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),n=!1)}return Rm(t,e,i,n,o,r)}function Rm(t,e,i,n,r,o){zj(t,e);var s=(e.flags&128)!==0;if(!n&&!s)return r&&Zw(e,i,!1),Sr(t,e,o);n=e.stateNode,CC.current=e;var l=s&&typeof i.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&s?(e.child=Ya(e,t.child,null,o),e.child=Ya(e,null,l,o)):ii(t,e,l,o),e.memoizedState=n.state,r&&Zw(e,i,!0),e.child}function Fj(t){var e=t.stateNode;e.pendingContext?Xw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Xw(t,e.context,!1),Fx(t,e.containerInfo)}function uv(t,e,i,n,r){return Ha(),Tx(r),e.flags|=256,ii(t,e,i,n),e.child}var Lm={dehydrated:null,treeContext:null,retryLane:0};function Nm(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rj(t,e,i){var n=e.pendingProps,r=Oe.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Te(Oe,r&1),t===null)return Em(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=n.children,t=n.fallback,o?(n=e.mode,o=e.child,s={mode:"hidden",children:s},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Mp(s,n,0,null),t=us(t,n,i,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Nm(i),e.memoizedState=Lm,t):Wx(e,s));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return PC(t,e,s,n,l,r,i);if(o){o=n.fallback,s=e.mode,r=t.child,l=r.sibling;var c={mode:"hidden",children:n.children};return!(s&1)&&e.child!==r?(n=e.child,n.childLanes=0,n.pendingProps=c,e.deletions=null):(n=lo(r,c),n.subtreeFlags=r.subtreeFlags&14680064),l!==null?o=lo(l,o):(o=us(o,s,i,null),o.flags|=2),o.return=e,n.return=e,n.sibling=o,e.child=n,n=o,o=e.child,s=t.child.memoizedState,s=s===null?Nm(i):{baseLanes:s.baseLanes|i,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~i,e.memoizedState=Lm,n}return o=t.child,t=o.sibling,n=lo(o,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=i),n.return=e,n.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=n,e.memoizedState=null,n}function Wx(t,e){return e=Mp({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Wd(t,e,i,n){return n!==null&&Tx(n),Ya(e,t.child,null,i),t=Wx(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function PC(t,e,i,n,r,o,s){if(i)return e.flags&256?(e.flags&=-257,n=Ef(Error(B(422))),Wd(t,e,s,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=n.fallback,r=e.mode,n=Mp({mode:"visible",children:n.children},r,0,null),o=us(o,r,s,null),o.flags|=2,n.return=e,o.return=e,n.sibling=o,e.child=n,e.mode&1&&Ya(e,t.child,null,s),e.child.memoizedState=Nm(s),e.memoizedState=Lm,o);if(!(e.mode&1))return Wd(t,e,s,null);if(r.data==="$!"){if(n=r.nextSibling&&r.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(B(419)),n=Ef(o,n,void 0),Wd(t,e,s,n)}if(l=(s&t.childLanes)!==0,fi||l){if(n=Ct,n!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(n.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,jr(t,r),Dn(n,t,r,-1))}return Zx(),n=Ef(Error(B(421))),Wd(t,e,s,n)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=BC.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,zi=ro(r.nextSibling),Ri=e,Fe=!0,yn=null,t!==null&&(qi[Qi++]=pr,qi[Qi++]=fr,qi[Qi++]=ks,pr=t.id,fr=t.overflow,ks=e),e=Wx(e,n.children),e.flags|=4096,e)}function hv(t,e,i){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Im(t.return,e,i)}function If(t,e,i,n,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=i,o.tailMode=r)}function Lj(t,e,i){var n=e.pendingProps,r=n.revealOrder,o=n.tail;if(ii(t,e,n.children,i),n=Oe.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hv(t,i,e);else if(t.tag===19)hv(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(Te(Oe,n),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(i=e.child,r=null;i!==null;)t=i.alternate,t!==null&&Rh(t)===null&&(r=i),i=i.sibling;i=r,i===null?(r=e.child,e.child=null):(r=i.sibling,i.sibling=null),If(e,!1,r,i,o);break;case"backwards":for(i=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Rh(t)===null){e.child=r;break}t=r.sibling,r.sibling=i,i=r,r=t}If(e,!0,i,null,o);break;case"together":If(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Sr(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),Ss|=e.lanes,!(i&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,i=lo(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=lo(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function TC(t,e,i){switch(e.tag){case 3:Fj(e),Ha();break;case 5:cj(e);break;case 1:gi(e.type)&&Eh(e);break;case 4:Fx(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,r=e.memoizedProps.value;Te(Mh,n._currentValue),n._currentValue=r;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(Te(Oe,Oe.current&1),e.flags|=128,null):i&e.child.childLanes?Rj(t,e,i):(Te(Oe,Oe.current&1),t=Sr(t,e,i),t!==null?t.sibling:null);Te(Oe,Oe.current&1);break;case 19:if(n=(i&e.childLanes)!==0,t.flags&128){if(n)return Lj(t,e,i);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Te(Oe,Oe.current),n)break;return null;case 22:case 23:return e.lanes=0,Mj(t,e,i)}return Sr(t,e,i)}var Nj,Om,Oj,$j;Nj=function(t,e){for(var i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};Om=function(){};Oj=function(t,e,i,n){var r=t.memoizedProps;if(r!==n){t=e.stateNode,ns(Un.current);var o=null;switch(i){case"input":r=am(t,r),n=am(t,n),o=[];break;case"select":r=Ue({},r,{value:void 0}),n=Ue({},n,{value:void 0}),o=[];break;case"textarea":r=dm(t,r),n=dm(t,n),o=[];break;default:typeof r.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Ph)}hm(i,n);var s;i=null;for(d in r)if(!n.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var l=r[d];for(s in l)l.hasOwnProperty(s)&&(i||(i={}),i[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(zc.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in n){var c=n[d];if(l=r!=null?r[d]:void 0,n.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(i||(i={}),i[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(i||(i={}),i[s]=c[s])}else i||(o||(o=[]),o.push(d,i)),i=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(zc.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Ee("scroll",t),o||l===c||(o=[])):(o=o||[]).push(d,c))}i&&(o=o||[]).push("style",i);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};$j=function(t,e,i,n){i!==n&&(e.flags|=4)};function Pl(t,e){if(!Fe)switch(t.tailMode){case"hidden":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,n=0;if(e)for(var r=t.child;r!==null;)i|=r.lanes|r.childLanes,n|=r.subtreeFlags&14680064,n|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)i|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=n,t.childLanes=i,e}function EC(t,e,i){var n=e.pendingProps;switch(Px(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return gi(e.type)&&Th(),Vt(e),null;case 3:return n=e.stateNode,Ga(),Ae(mi),Ae(Zt),Lx(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(Bd(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yn!==null&&(Gm(yn),yn=null))),Om(t,e),Vt(e),null;case 5:Rx(e);var r=ns(Yc.current);if(i=e.type,t!==null&&e.stateNode!=null)Oj(t,e,i,n,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(B(166));return Vt(e),null}if(t=ns(Un.current),Bd(e)){n=e.stateNode,i=e.type;var o=e.memoizedProps;switch(n[On]=e,n[Uc]=o,t=(e.mode&1)!==0,i){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(r=0;r<Yl.length;r++)Ee(Yl[r],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":bw(n,o),Ee("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Ee("invalid",n);break;case"textarea":jw(n,o),Ee("invalid",n)}hm(i,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&$d(n.textContent,l,t),r=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&$d(n.textContent,l,t),r=["children",""+l]):zc.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Ee("scroll",n)}switch(i){case"input":Ad(n),kw(n,o,!0);break;case"textarea":Ad(n),Sw(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Ph)}n=r,e.updateQueue=n,n!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=fk(i)),t==="http://www.w3.org/1999/xhtml"?i==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=s.createElement(i,{is:n.is}):(t=s.createElement(i),i==="select"&&(s=t,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):t=s.createElementNS(t,i),t[On]=e,t[Uc]=n,Nj(t,e,!1,!1),e.stateNode=t;e:{switch(s=pm(i,n),i){case"dialog":Ee("cancel",t),Ee("close",t),r=n;break;case"iframe":case"object":case"embed":Ee("load",t),r=n;break;case"video":case"audio":for(r=0;r<Yl.length;r++)Ee(Yl[r],t);r=n;break;case"source":Ee("error",t),r=n;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),r=n;break;case"details":Ee("toggle",t),r=n;break;case"input":bw(t,n),r=am(t,n),Ee("invalid",t);break;case"option":r=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},r=Ue({},n,{value:void 0}),Ee("invalid",t);break;case"textarea":jw(t,n),r=dm(t,n),Ee("invalid",t);break;default:r=n}hm(i,r),l=r;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?xk(t,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&mk(t,c)):o==="children"?typeof c=="string"?(i!=="textarea"||c!=="")&&Fc(t,c):typeof c=="number"&&Fc(t,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zc.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Ee("scroll",t):c!=null&&px(t,o,c,s))}switch(i){case"input":Ad(t),kw(t,n,!1);break;case"textarea":Ad(t),Sw(t);break;case"option":n.value!=null&&t.setAttribute("value",""+vo(n.value));break;case"select":t.multiple=!!n.multiple,o=n.value,o!=null?Pa(t,!!n.multiple,o,!1):n.defaultValue!=null&&Pa(t,!!n.multiple,n.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ph)}switch(i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)$j(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(B(166));if(i=ns(Yc.current),ns(Un.current),Bd(e)){if(n=e.stateNode,i=e.memoizedProps,n[On]=e,(o=n.nodeValue!==i)&&(t=Ri,t!==null))switch(t.tag){case 3:$d(n.nodeValue,i,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$d(n.nodeValue,i,(t.mode&1)!==0)}o&&(e.flags|=4)}else n=(i.nodeType===9?i:i.ownerDocument).createTextNode(n),n[On]=e,e.stateNode=n}return Vt(e),null;case 13:if(Ae(Oe),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Fe&&zi!==null&&e.mode&1&&!(e.flags&128))rj(),Ha(),e.flags|=98560,o=!1;else if(o=Bd(e),n!==null&&n.dehydrated!==null){if(t===null){if(!o)throw Error(B(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[On]=e}else Ha(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),o=!1}else yn!==null&&(Gm(yn),yn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=i,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||Oe.current&1?vt===0&&(vt=3):Zx())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Ga(),Om(t,e),t===null&&Vc(e.stateNode.containerInfo),Vt(e),null;case 10:return Ax(e.type._context),Vt(e),null;case 17:return gi(e.type)&&Th(),Vt(e),null;case 19:if(Ae(Oe),o=e.memoizedState,o===null)return Vt(e),null;if(n=(e.flags&128)!==0,s=o.rendering,s===null)if(n)Pl(o,!1);else{if(vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Rh(t),s!==null){for(e.flags|=128,Pl(o,!1),n=s.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=i,i=e.child;i!==null;)o=i,t=n,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i=i.sibling;return Te(Oe,Oe.current&1|2),e.child}t=t.sibling}o.tail!==null&&it()>Za&&(e.flags|=128,n=!0,Pl(o,!1),e.lanes=4194304)}else{if(!n)if(t=Rh(s),t!==null){if(e.flags|=128,n=!0,i=t.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),Pl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Fe)return Vt(e),null}else 2*it()-o.renderingStartTime>Za&&i!==1073741824&&(e.flags|=128,n=!0,Pl(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(i=o.last,i!==null?i.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=it(),e.sibling=null,i=Oe.current,Te(Oe,n?i&1|2:i&1),e):(Vt(e),null);case 22:case 23:return Xx(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?Pi&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function IC(t,e){switch(Px(e),e.tag){case 1:return gi(e.type)&&Th(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ga(),Ae(mi),Ae(Zt),Lx(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rx(e),null;case 13:if(Ae(Oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ae(Oe),null;case 4:return Ga(),null;case 10:return Ax(e.type._context),null;case 22:case 23:return Xx(),null;case 24:return null;default:return null}}var Ud=!1,Ht=!1,AC=typeof WeakSet=="function"?WeakSet:Set,Y=null;function xa(t,e){var i=t.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(n){Xe(t,e,n)}else i.current=null}function $m(t,e,i){try{i()}catch(n){Xe(t,e,n)}}var pv=!1;function MC(t,e){if(jm=Dh,t=Hk(),_x(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var r=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{i.nodeType,o.nodeType}catch{i=null;break e}var s=0,l=-1,c=-1,d=0,u=0,p=t,f=null;t:for(;;){for(var g;p!==i||r!==0&&p.nodeType!==3||(l=s+r),p!==o||n!==0&&p.nodeType!==3||(c=s+n),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)f=p,p=g;for(;;){if(p===t)break t;if(f===i&&++d===r&&(l=s),f===o&&++u===n&&(c=s),(g=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=g}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(Sm={focusedElem:t,selectionRange:i},Dh=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,D=y.memoizedState,j=e.stateNode,b=j.getSnapshotBeforeUpdate(e.elementType===e.type?w:wn(e.type,w),D);j.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(h){Xe(e,e.return,h)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return y=pv,pv=!1,y}function cc(t,e,i){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&$m(e,i,o)}r=r.next}while(r!==n)}}function Ip(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var i=e=e.next;do{if((i.tag&t)===t){var n=i.create;i.destroy=n()}i=i.next}while(i!==e)}}function Bm(t){var e=t.ref;if(e!==null){var i=t.stateNode;switch(t.tag){case 5:t=i;break;default:t=i}typeof e=="function"?e(t):e.current=t}}function Bj(t){var e=t.alternate;e!==null&&(t.alternate=null,Bj(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[On],delete e[Uc],delete e[Cm],delete e[mC],delete e[gC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vj(t){return t.tag===5||t.tag===3||t.tag===4}function fv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vj(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vm(t,e,i){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?i.nodeType===8?i.parentNode.insertBefore(t,e):i.insertBefore(t,e):(i.nodeType===8?(e=i.parentNode,e.insertBefore(t,i)):(e=i,e.appendChild(t)),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=Ph));else if(n!==4&&(t=t.child,t!==null))for(Vm(t,e,i),t=t.sibling;t!==null;)Vm(t,e,i),t=t.sibling}function Wm(t,e,i){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?i.insertBefore(t,e):i.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(Wm(t,e,i),t=t.sibling;t!==null;)Wm(t,e,i),t=t.sibling}var At=null,vn=!1;function zr(t,e,i){for(i=i.child;i!==null;)Wj(t,e,i),i=i.sibling}function Wj(t,e,i){if(Wn&&typeof Wn.onCommitFiberUnmount=="function")try{Wn.onCommitFiberUnmount(jp,i)}catch{}switch(i.tag){case 5:Ht||xa(i,e);case 6:var n=At,r=vn;At=null,zr(t,e,i),At=n,vn=r,At!==null&&(vn?(t=At,i=i.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)):At.removeChild(i.stateNode));break;case 18:At!==null&&(vn?(t=At,i=i.stateNode,t.nodeType===8?Sf(t.parentNode,i):t.nodeType===1&&Sf(t,i),Oc(t)):Sf(At,i.stateNode));break;case 4:n=At,r=vn,At=i.stateNode.containerInfo,vn=!0,zr(t,e,i),At=n,vn=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(n=i.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){r=n=n.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&$m(i,e,s),r=r.next}while(r!==n)}zr(t,e,i);break;case 1:if(!Ht&&(xa(i,e),n=i.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=i.memoizedProps,n.state=i.memoizedState,n.componentWillUnmount()}catch(l){Xe(i,e,l)}zr(t,e,i);break;case 21:zr(t,e,i);break;case 22:i.mode&1?(Ht=(n=Ht)||i.memoizedState!==null,zr(t,e,i),Ht=n):zr(t,e,i);break;default:zr(t,e,i)}}function mv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var i=t.stateNode;i===null&&(i=t.stateNode=new AC),e.forEach(function(n){var r=VC.bind(null,t,n);i.has(n)||(i.add(n),n.then(r,r))})}}function mn(t,e){var i=e.deletions;if(i!==null)for(var n=0;n<i.length;n++){var r=i[n];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:At=l.stateNode,vn=!1;break e;case 3:At=l.stateNode.containerInfo,vn=!0;break e;case 4:At=l.stateNode.containerInfo,vn=!0;break e}l=l.return}if(At===null)throw Error(B(160));Wj(o,s,r),At=null,vn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(d){Xe(r,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Uj(e,t),e=e.sibling}function Uj(t,e){var i=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mn(e,t),An(t),n&4){try{cc(3,t,t.return),Ip(3,t)}catch(w){Xe(t,t.return,w)}try{cc(5,t,t.return)}catch(w){Xe(t,t.return,w)}}break;case 1:mn(e,t),An(t),n&512&&i!==null&&xa(i,i.return);break;case 5:if(mn(e,t),An(t),n&512&&i!==null&&xa(i,i.return),t.flags&32){var r=t.stateNode;try{Fc(r,"")}catch(w){Xe(t,t.return,w)}}if(n&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=i!==null?i.memoizedProps:o,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&hk(r,o),pm(l,s);var d=pm(l,o);for(s=0;s<c.length;s+=2){var u=c[s],p=c[s+1];u==="style"?xk(r,p):u==="dangerouslySetInnerHTML"?mk(r,p):u==="children"?Fc(r,p):px(r,u,p,d)}switch(l){case"input":lm(r,o);break;case"textarea":pk(r,o);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Pa(r,!!o.multiple,g,!1):f!==!!o.multiple&&(o.defaultValue!=null?Pa(r,!!o.multiple,o.defaultValue,!0):Pa(r,!!o.multiple,o.multiple?[]:"",!1))}r[Uc]=o}catch(w){Xe(t,t.return,w)}}break;case 6:if(mn(e,t),An(t),n&4){if(t.stateNode===null)throw Error(B(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(w){Xe(t,t.return,w)}}break;case 3:if(mn(e,t),An(t),n&4&&i!==null&&i.memoizedState.isDehydrated)try{Oc(e.containerInfo)}catch(w){Xe(t,t.return,w)}break;case 4:mn(e,t),An(t);break;case 13:mn(e,t),An(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Yx=it())),n&4&&mv(t);break;case 22:if(u=i!==null&&i.memoizedState!==null,t.mode&1?(Ht=(d=Ht)||u,mn(e,t),Ht=d):mn(e,t),An(t),n&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!u&&t.mode&1)for(Y=t,u=t.child;u!==null;){for(p=Y=u;Y!==null;){switch(f=Y,g=f.child,f.tag){case 0:case 11:case 14:case 15:cc(4,f,f.return);break;case 1:xa(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){n=f,i=f.return;try{e=n,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){Xe(n,i,w)}}break;case 5:xa(f,f.return);break;case 22:if(f.memoizedState!==null){xv(p);continue}}g!==null?(g.return=f,Y=g):xv(p)}u=u.sibling}e:for(u=null,p=t;;){if(p.tag===5){if(u===null){u=p;try{r=p.stateNode,d?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=gk("display",s))}catch(w){Xe(t,t.return,w)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(w){Xe(t,t.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:mn(e,t),An(t),n&4&&mv(t);break;case 21:break;default:mn(e,t),An(t)}}function An(t){var e=t.flags;if(e&2){try{e:{for(var i=t.return;i!==null;){if(Vj(i)){var n=i;break e}i=i.return}throw Error(B(160))}switch(n.tag){case 5:var r=n.stateNode;n.flags&32&&(Fc(r,""),n.flags&=-33);var o=fv(t);Wm(t,o,r);break;case 3:case 4:var s=n.stateNode.containerInfo,l=fv(t);Vm(t,l,s);break;default:throw Error(B(161))}}catch(c){Xe(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function zC(t,e,i){Y=t,Hj(t)}function Hj(t,e,i){for(var n=(t.mode&1)!==0;Y!==null;){var r=Y,o=r.child;if(r.tag===22&&n){var s=r.memoizedState!==null||Ud;if(!s){var l=r.alternate,c=l!==null&&l.memoizedState!==null||Ht;l=Ud;var d=Ht;if(Ud=s,(Ht=c)&&!d)for(Y=r;Y!==null;)s=Y,c=s.child,s.tag===22&&s.memoizedState!==null?wv(r):c!==null?(c.return=s,Y=c):wv(r);for(;o!==null;)Y=o,Hj(o),o=o.sibling;Y=r,Ud=l,Ht=d}gv(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Y=o):gv(t)}}function gv(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var i=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||Ip(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!Ht)if(i===null)n.componentDidMount();else{var r=e.elementType===e.type?i.memoizedProps:wn(e.type,i.memoizedProps);n.componentDidUpdate(r,i.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&ev(e,o,n);break;case 3:var s=e.updateQueue;if(s!==null){if(i=null,e.child!==null)switch(e.child.tag){case 5:i=e.child.stateNode;break;case 1:i=e.child.stateNode}ev(e,s,i)}break;case 5:var l=e.stateNode;if(i===null&&e.flags&4){i=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&i.focus();break;case"img":c.src&&(i.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&Oc(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Ht||e.flags&512&&Bm(e)}catch(f){Xe(e,e.return,f)}}if(e===t){Y=null;break}if(i=e.sibling,i!==null){i.return=e.return,Y=i;break}Y=e.return}}function xv(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var i=e.sibling;if(i!==null){i.return=e.return,Y=i;break}Y=e.return}}function wv(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var i=e.return;try{Ip(4,e)}catch(c){Xe(e,i,c)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var r=e.return;try{n.componentDidMount()}catch(c){Xe(e,r,c)}}var o=e.return;try{Bm(e)}catch(c){Xe(e,o,c)}break;case 5:var s=e.return;try{Bm(e)}catch(c){Xe(e,s,c)}}}catch(c){Xe(e,e.return,c)}if(e===t){Y=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Y=l;break}Y=e.return}}var FC=Math.ceil,Oh=Cr.ReactCurrentDispatcher,Ux=Cr.ReactCurrentOwner,on=Cr.ReactCurrentBatchConfig,xe=0,Ct=null,ht=null,Ft=0,Pi=0,wa=Co(0),vt=0,qc=null,Ss=0,Ap=0,Hx=0,dc=null,pi=null,Yx=0,Za=1/0,sr=null,$h=!1,Um=null,so=null,Hd=!1,Xr=null,Bh=0,uc=0,Hm=null,qu=-1,Qu=0;function ai(){return xe&6?it():qu!==-1?qu:qu=it()}function ao(t){return t.mode&1?xe&2&&Ft!==0?Ft&-Ft:wC.transition!==null?(Qu===0&&(Qu=Tk()),Qu):(t=ke,t!==0||(t=window.event,t=t===void 0?16:Rk(t.type)),t):1}function Dn(t,e,i,n){if(50<uc)throw uc=0,Hm=null,Error(B(185));pd(t,i,n),(!(xe&2)||t!==Ct)&&(t===Ct&&(!(xe&2)&&(Ap|=i),vt===4&&Yr(t,Ft)),xi(t,n),i===1&&xe===0&&!(e.mode&1)&&(Za=it()+500,Pp&&Po()))}function xi(t,e){var i=t.callbackNode;w_(t,e);var n=Sh(t,t===Ct?Ft:0);if(n===0)i!==null&&Cw(i),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(i!=null&&Cw(i),e===1)t.tag===0?xC(vv.bind(null,t)):tj(vv.bind(null,t)),pC(function(){!(xe&6)&&Po()}),i=null;else{switch(Ek(n)){case 1:i=wx;break;case 4:i=Ck;break;case 16:i=jh;break;case 536870912:i=Pk;break;default:i=jh}i=Jj(i,Yj.bind(null,t))}t.callbackPriority=e,t.callbackNode=i}}function Yj(t,e){if(qu=-1,Qu=0,xe&6)throw Error(B(327));var i=t.callbackNode;if(Ma()&&t.callbackNode!==i)return null;var n=Sh(t,t===Ct?Ft:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Vh(t,n);else{e=n;var r=xe;xe|=2;var o=Xj();(Ct!==t||Ft!==e)&&(sr=null,Za=it()+500,ds(t,e));do try{NC();break}catch(l){Gj(t,l)}while(1);Ix(),Oh.current=o,xe=r,ht!==null?e=0:(Ct=null,Ft=0,e=vt)}if(e!==0){if(e===2&&(r=wm(t),r!==0&&(n=r,e=Ym(t,r))),e===1)throw i=qc,ds(t,0),Yr(t,n),xi(t,it()),i;if(e===6)Yr(t,n);else{if(r=t.current.alternate,!(n&30)&&!RC(r)&&(e=Vh(t,n),e===2&&(o=wm(t),o!==0&&(n=o,e=Ym(t,o))),e===1))throw i=qc,ds(t,0),Yr(t,n),xi(t,it()),i;switch(t.finishedWork=r,t.finishedLanes=n,e){case 0:case 1:throw Error(B(345));case 2:Go(t,pi,sr);break;case 3:if(Yr(t,n),(n&130023424)===n&&(e=Yx+500-it(),10<e)){if(Sh(t,0)!==0)break;if(r=t.suspendedLanes,(r&n)!==n){ai(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=_m(Go.bind(null,t,pi,sr),e);break}Go(t,pi,sr);break;case 4:if(Yr(t,n),(n&4194240)===n)break;for(e=t.eventTimes,r=-1;0<n;){var s=31-Sn(n);o=1<<s,s=e[s],s>r&&(r=s),n&=~o}if(n=r,n=it()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*FC(n/1960))-n,10<n){t.timeoutHandle=_m(Go.bind(null,t,pi,sr),n);break}Go(t,pi,sr);break;case 5:Go(t,pi,sr);break;default:throw Error(B(329))}}}return xi(t,it()),t.callbackNode===i?Yj.bind(null,t):null}function Ym(t,e){var i=dc;return t.current.memoizedState.isDehydrated&&(ds(t,e).flags|=256),t=Vh(t,e),t!==2&&(e=pi,pi=i,e!==null&&Gm(e)),t}function Gm(t){pi===null?pi=t:pi.push.apply(pi,t)}function RC(t){for(var e=t;;){if(e.flags&16384){var i=e.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var n=0;n<i.length;n++){var r=i[n],o=r.getSnapshot;r=r.value;try{if(!Cn(o(),r))return!1}catch{return!1}}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yr(t,e){for(e&=~Hx,e&=~Ap,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var i=31-Sn(e),n=1<<i;t[i]=-1,e&=~n}}function vv(t){if(xe&6)throw Error(B(327));Ma();var e=Sh(t,0);if(!(e&1))return xi(t,it()),null;var i=Vh(t,e);if(t.tag!==0&&i===2){var n=wm(t);n!==0&&(e=n,i=Ym(t,n))}if(i===1)throw i=qc,ds(t,0),Yr(t,e),xi(t,it()),i;if(i===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Go(t,pi,sr),xi(t,it()),null}function Gx(t,e){var i=xe;xe|=1;try{return t(e)}finally{xe=i,xe===0&&(Za=it()+500,Pp&&Po())}}function Ds(t){Xr!==null&&Xr.tag===0&&!(xe&6)&&Ma();var e=xe;xe|=1;var i=on.transition,n=ke;try{if(on.transition=null,ke=1,t)return t()}finally{ke=n,on.transition=i,xe=e,!(xe&6)&&Po()}}function Xx(){Pi=wa.current,Ae(wa)}function ds(t,e){t.finishedWork=null,t.finishedLanes=0;var i=t.timeoutHandle;if(i!==-1&&(t.timeoutHandle=-1,hC(i)),ht!==null)for(i=ht.return;i!==null;){var n=i;switch(Px(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Th();break;case 3:Ga(),Ae(mi),Ae(Zt),Lx();break;case 5:Rx(n);break;case 4:Ga();break;case 13:Ae(Oe);break;case 19:Ae(Oe);break;case 10:Ax(n.type._context);break;case 22:case 23:Xx()}i=i.return}if(Ct=t,ht=t=lo(t.current,null),Ft=Pi=e,vt=0,qc=null,Hx=Ap=Ss=0,pi=dc=null,is!==null){for(e=0;e<is.length;e++)if(i=is[e],n=i.interleaved,n!==null){i.interleaved=null;var r=n.next,o=i.pending;if(o!==null){var s=o.next;o.next=r,n.next=s}i.pending=n}is=null}return t}function Gj(t,e){do{var i=ht;try{if(Ix(),Gu.current=Nh,Lh){for(var n=We.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Lh=!1}if(js=0,St=xt=We=null,lc=!1,Gc=0,Ux.current=null,i===null||i.return===null){vt=1,qc=e,ht=null;break}e:{var o=t,s=i.return,l=i,c=e;if(e=Ft,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=l,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=sv(s);if(g!==null){g.flags&=-257,av(g,s,l,o,e),g.mode&1&&ov(o,d,e),e=g,c=d;var y=e.updateQueue;if(y===null){var w=new Set;w.add(c),e.updateQueue=w}else y.add(c);break e}else{if(!(e&1)){ov(o,d,e),Zx();break e}c=Error(B(426))}}else if(Fe&&l.mode&1){var D=sv(s);if(D!==null){!(D.flags&65536)&&(D.flags|=256),av(D,s,l,o,e),Tx(Xa(c,l));break e}}o=c=Xa(c,l),vt!==4&&(vt=2),dc===null?dc=[o]:dc.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var j=Ej(o,c,e);Jw(o,j);break e;case 1:l=c;var b=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof b.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(so===null||!so.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var h=Ij(o,l,e);Jw(o,h);break e}}o=o.return}while(o!==null)}qj(i)}catch(x){e=x,ht===i&&i!==null&&(ht=i=i.return);continue}break}while(1)}function Xj(){var t=Oh.current;return Oh.current=Nh,t===null?Nh:t}function Zx(){(vt===0||vt===3||vt===2)&&(vt=4),Ct===null||!(Ss&268435455)&&!(Ap&268435455)||Yr(Ct,Ft)}function Vh(t,e){var i=xe;xe|=2;var n=Xj();(Ct!==t||Ft!==e)&&(sr=null,ds(t,e));do try{LC();break}catch(r){Gj(t,r)}while(1);if(Ix(),xe=i,Oh.current=n,ht!==null)throw Error(B(261));return Ct=null,Ft=0,vt}function LC(){for(;ht!==null;)Zj(ht)}function NC(){for(;ht!==null&&!c_();)Zj(ht)}function Zj(t){var e=Kj(t.alternate,t,Pi);t.memoizedProps=t.pendingProps,e===null?qj(t):ht=e,Ux.current=null}function qj(t){var e=t;do{var i=e.alternate;if(t=e.return,e.flags&32768){if(i=IC(i,e),i!==null){i.flags&=32767,ht=i;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{vt=6,ht=null;return}}else if(i=EC(i,e,Pi),i!==null){ht=i;return}if(e=e.sibling,e!==null){ht=e;return}ht=e=t}while(e!==null);vt===0&&(vt=5)}function Go(t,e,i){var n=ke,r=on.transition;try{on.transition=null,ke=1,OC(t,e,i,n)}finally{on.transition=r,ke=n}return null}function OC(t,e,i,n){do Ma();while(Xr!==null);if(xe&6)throw Error(B(327));i=t.finishedWork;var r=t.finishedLanes;if(i===null)return null;if(t.finishedWork=null,t.finishedLanes=0,i===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var o=i.lanes|i.childLanes;if(v_(t,o),t===Ct&&(ht=Ct=null,Ft=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||Hd||(Hd=!0,Jj(jh,function(){return Ma(),null})),o=(i.flags&15990)!==0,i.subtreeFlags&15990||o){o=on.transition,on.transition=null;var s=ke;ke=1;var l=xe;xe|=4,Ux.current=null,MC(t,i),Uj(i,t),oC(Sm),Dh=!!jm,Sm=jm=null,t.current=i,zC(i),d_(),xe=l,ke=s,on.transition=o}else t.current=i;if(Hd&&(Hd=!1,Xr=t,Bh=r),o=t.pendingLanes,o===0&&(so=null),p_(i.stateNode),xi(t,it()),e!==null)for(n=t.onRecoverableError,i=0;i<e.length;i++)r=e[i],n(r.value,{componentStack:r.stack,digest:r.digest});if($h)throw $h=!1,t=Um,Um=null,t;return Bh&1&&t.tag!==0&&Ma(),o=t.pendingLanes,o&1?t===Hm?uc++:(uc=0,Hm=t):uc=0,Po(),null}function Ma(){if(Xr!==null){var t=Ek(Bh),e=on.transition,i=ke;try{if(on.transition=null,ke=16>t?16:t,Xr===null)var n=!1;else{if(t=Xr,Xr=null,Bh=0,xe&6)throw Error(B(331));var r=xe;for(xe|=4,Y=t.current;Y!==null;){var o=Y,s=o.child;if(Y.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(Y=d;Y!==null;){var u=Y;switch(u.tag){case 0:case 11:case 15:cc(8,u,o)}var p=u.child;if(p!==null)p.return=u,Y=p;else for(;Y!==null;){u=Y;var f=u.sibling,g=u.return;if(Bj(u),u===d){Y=null;break}if(f!==null){f.return=g,Y=f;break}Y=g}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var D=w.sibling;w.sibling=null,w=D}while(w!==null)}}Y=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Y=s;else e:for(;Y!==null;){if(o=Y,o.flags&2048)switch(o.tag){case 0:case 11:case 15:cc(9,o,o.return)}var j=o.sibling;if(j!==null){j.return=o.return,Y=j;break e}Y=o.return}}var b=t.current;for(Y=b;Y!==null;){s=Y;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,Y=v;else e:for(s=b;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ip(9,l)}}catch(x){Xe(l,l.return,x)}if(l===s){Y=null;break e}var h=l.sibling;if(h!==null){h.return=l.return,Y=h;break e}Y=l.return}}if(xe=r,Po(),Wn&&typeof Wn.onPostCommitFiberRoot=="function")try{Wn.onPostCommitFiberRoot(jp,t)}catch{}n=!0}return n}finally{ke=i,on.transition=e}}return!1}function yv(t,e,i){e=Xa(i,e),e=Ej(t,e,1),t=oo(t,e,1),e=ai(),t!==null&&(pd(t,1,e),xi(t,e))}function Xe(t,e,i){if(t.tag===3)yv(t,t,i);else for(;e!==null;){if(e.tag===3){yv(e,t,i);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(so===null||!so.has(n))){t=Xa(i,t),t=Ij(e,t,1),e=oo(e,t,1),t=ai(),e!==null&&(pd(e,1,t),xi(e,t));break}}e=e.return}}function $C(t,e,i){var n=t.pingCache;n!==null&&n.delete(e),e=ai(),t.pingedLanes|=t.suspendedLanes&i,Ct===t&&(Ft&i)===i&&(vt===4||vt===3&&(Ft&130023424)===Ft&&500>it()-Yx?ds(t,0):Hx|=i),xi(t,e)}function Qj(t,e){e===0&&(t.mode&1?(e=Fd,Fd<<=1,!(Fd&130023424)&&(Fd=4194304)):e=1);var i=ai();t=jr(t,e),t!==null&&(pd(t,e,i),xi(t,i))}function BC(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),Qj(t,i)}function VC(t,e){var i=0;switch(t.tag){case 13:var n=t.stateNode,r=t.memoizedState;r!==null&&(i=r.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(B(314))}n!==null&&n.delete(e),Qj(t,i)}var Kj;Kj=function(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps||mi.current)fi=!0;else{if(!(t.lanes&i)&&!(e.flags&128))return fi=!1,TC(t,e,i);fi=!!(t.flags&131072)}else fi=!1,Fe&&e.flags&1048576&&ij(e,Ah,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;Zu(t,e),t=e.pendingProps;var r=Ua(e,Zt.current);Aa(e,i),r=Ox(null,e,n,t,r,i);var o=$x();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gi(n)?(o=!0,Eh(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,zx(e),r.updater=Ep,e.stateNode=r,r._reactInternals=e,Mm(e,n,t,i),e=Rm(null,e,n,!0,o,i)):(e.tag=0,Fe&&o&&Cx(e),ii(null,e,r,i),e=e.child),e;case 16:n=e.elementType;e:{switch(Zu(t,e),t=e.pendingProps,r=n._init,n=r(n._payload),e.type=n,r=e.tag=UC(n),t=wn(n,t),r){case 0:e=Fm(null,e,n,t,i);break e;case 1:e=dv(null,e,n,t,i);break e;case 11:e=lv(null,e,n,t,i);break e;case 14:e=cv(null,e,n,wn(n.type,t),i);break e}throw Error(B(306,n,""))}return e;case 0:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:wn(n,r),Fm(t,e,n,r,i);case 1:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:wn(n,r),dv(t,e,n,r,i);case 3:e:{if(Fj(e),t===null)throw Error(B(387));n=e.pendingProps,o=e.memoizedState,r=o.element,lj(t,e),Fh(e,n,null,i);var s=e.memoizedState;if(n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Xa(Error(B(423)),e),e=uv(t,e,n,i,r);break e}else if(n!==r){r=Xa(Error(B(424)),e),e=uv(t,e,n,i,r);break e}else for(zi=ro(e.stateNode.containerInfo.firstChild),Ri=e,Fe=!0,yn=null,i=sj(e,null,n,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Ha(),n===r){e=Sr(t,e,i);break e}ii(t,e,n,i)}e=e.child}return e;case 5:return cj(e),t===null&&Em(e),n=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Dm(n,r)?s=null:o!==null&&Dm(n,o)&&(e.flags|=32),zj(t,e),ii(t,e,s,i),e.child;case 6:return t===null&&Em(e),null;case 13:return Rj(t,e,i);case 4:return Fx(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Ya(e,null,n,i):ii(t,e,n,i),e.child;case 11:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:wn(n,r),lv(t,e,n,r,i);case 7:return ii(t,e,e.pendingProps,i),e.child;case 8:return ii(t,e,e.pendingProps.children,i),e.child;case 12:return ii(t,e,e.pendingProps.children,i),e.child;case 10:e:{if(n=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,Te(Mh,n._currentValue),n._currentValue=s,o!==null)if(Cn(o.value,s)){if(o.children===r.children&&!mi.current){e=Sr(t,e,i);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=xr(-1,i&-i),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}o.lanes|=i,c=o.alternate,c!==null&&(c.lanes|=i),Im(o.return,i,e),l.lanes|=i;break}c=c.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(B(341));s.lanes|=i,l=s.alternate,l!==null&&(l.lanes|=i),Im(s,i,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ii(t,e,r.children,i),e=e.child}return e;case 9:return r=e.type,n=e.pendingProps.children,Aa(e,i),r=an(r),n=n(r),e.flags|=1,ii(t,e,n,i),e.child;case 14:return n=e.type,r=wn(n,e.pendingProps),r=wn(n.type,r),cv(t,e,n,r,i);case 15:return Aj(t,e,e.type,e.pendingProps,i);case 17:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:wn(n,r),Zu(t,e),e.tag=1,gi(n)?(t=!0,Eh(e)):t=!1,Aa(e,i),Tj(e,n,r),Mm(e,n,r,i),Rm(null,e,n,!0,t,i);case 19:return Lj(t,e,i);case 22:return Mj(t,e,i)}throw Error(B(156,e.tag))};function Jj(t,e){return _k(t,e)}function WC(t,e,i,n){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,i,n){return new WC(t,e,i,n)}function qx(t){return t=t.prototype,!(!t||!t.isReactComponent)}function UC(t){if(typeof t=="function")return qx(t)?1:0;if(t!=null){if(t=t.$$typeof,t===mx)return 11;if(t===gx)return 14}return 2}function lo(t,e){var i=t.alternate;return i===null?(i=en(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&14680064,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i}function Ku(t,e,i,n,r,o){var s=2;if(n=t,typeof t=="function")qx(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case la:return us(i.children,r,o,e);case fx:s=8,r|=8;break;case nm:return t=en(12,i,e,r|2),t.elementType=nm,t.lanes=o,t;case rm:return t=en(13,i,e,r),t.elementType=rm,t.lanes=o,t;case om:return t=en(19,i,e,r),t.elementType=om,t.lanes=o,t;case ck:return Mp(i,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ak:s=10;break e;case lk:s=9;break e;case mx:s=11;break e;case gx:s=14;break e;case Vr:s=16,n=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=en(s,i,e,r),e.elementType=t,e.type=n,e.lanes=o,e}function us(t,e,i,n){return t=en(7,t,n,e),t.lanes=i,t}function Mp(t,e,i,n){return t=en(22,t,n,e),t.elementType=ck,t.lanes=i,t.stateNode={isHidden:!1},t}function Af(t,e,i){return t=en(6,t,null,e),t.lanes=i,t}function Mf(t,e,i){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HC(t,e,i,n,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pf(0),this.expirationTimes=pf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pf(0),this.identifierPrefix=n,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Qx(t,e,i,n,r,o,s,l,c){return t=new HC(t,e,i,l,c),e===1?(e=1,o===!0&&(e|=8)):e=0,o=en(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:n,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},zx(o),t}function YC(t,e,i){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:aa,key:n==null?null:""+n,children:t,containerInfo:e,implementation:i}}function eS(t){if(!t)return yo;t=t._reactInternals;e:{if(Ms(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var i=t.type;if(gi(i))return ej(t,i,e)}return e}function tS(t,e,i,n,r,o,s,l,c){return t=Qx(i,n,!0,t,r,o,s,l,c),t.context=eS(null),i=t.current,n=ai(),r=ao(i),o=xr(n,r),o.callback=e??null,oo(i,o,r),t.current.lanes=r,pd(t,r,n),xi(t,n),t}function zp(t,e,i,n){var r=e.current,o=ai(),s=ao(r);return i=eS(i),e.context===null?e.context=i:e.pendingContext=i,e=xr(o,s),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=oo(r,e,s),t!==null&&(Dn(t,r,s,o),Yu(t,r,s)),s}function Wh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Kx(t,e){bv(t,e),(t=t.alternate)&&bv(t,e)}function GC(){return null}var iS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jx(t){this._internalRoot=t}Fp.prototype.render=Jx.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));zp(t,e,null,null)};Fp.prototype.unmount=Jx.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ds(function(){zp(null,t,null,null)}),e[kr]=null}};function Fp(t){this._internalRoot=t}Fp.prototype.unstable_scheduleHydration=function(t){if(t){var e=Mk();t={blockedOn:null,target:t,priority:e};for(var i=0;i<Hr.length&&e!==0&&e<Hr[i].priority;i++);Hr.splice(i,0,t),i===0&&Fk(t)}};function e1(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Rp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kv(){}function XC(t,e,i,n,r){if(r){if(typeof n=="function"){var o=n;n=function(){var d=Wh(s);o.call(d)}}var s=tS(e,n,t,0,null,!1,!1,"",kv);return t._reactRootContainer=s,t[kr]=s.current,Vc(t.nodeType===8?t.parentNode:t),Ds(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof n=="function"){var l=n;n=function(){var d=Wh(c);l.call(d)}}var c=Qx(t,0,!1,null,null,!1,!1,"",kv);return t._reactRootContainer=c,t[kr]=c.current,Vc(t.nodeType===8?t.parentNode:t),Ds(function(){zp(e,c,i,n)}),c}function Lp(t,e,i,n,r){var o=i._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var l=r;r=function(){var c=Wh(s);l.call(c)}}zp(e,s,t,r)}else s=XC(i,e,t,r,n);return Wh(s)}Ik=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var i=Hl(e.pendingLanes);i!==0&&(vx(e,i|1),xi(e,it()),!(xe&6)&&(Za=it()+500,Po()))}break;case 13:Ds(function(){var n=jr(t,1);if(n!==null){var r=ai();Dn(n,t,1,r)}}),Kx(t,1)}};yx=function(t){if(t.tag===13){var e=jr(t,134217728);if(e!==null){var i=ai();Dn(e,t,134217728,i)}Kx(t,134217728)}};Ak=function(t){if(t.tag===13){var e=ao(t),i=jr(t,e);if(i!==null){var n=ai();Dn(i,t,e,n)}Kx(t,e)}};Mk=function(){return ke};zk=function(t,e){var i=ke;try{return ke=t,e()}finally{ke=i}};mm=function(t,e,i){switch(e){case"input":if(lm(t,i),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<i.length;e++){var n=i[e];if(n!==t&&n.form===t.form){var r=Cp(n);if(!r)throw Error(B(90));uk(n),lm(n,r)}}}break;case"textarea":pk(t,i);break;case"select":e=i.value,e!=null&&Pa(t,!!i.multiple,e,!1)}};yk=Gx;bk=Ds;var ZC={usingClientEntryPoint:!1,Events:[md,ha,Cp,wk,vk,Gx]},Tl={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qC={bundleType:Tl.bundleType,version:Tl.version,rendererPackageName:Tl.rendererPackageName,rendererConfig:Tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Cr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sk(t),t===null?null:t.stateNode},findFiberByHostInstance:Tl.findFiberByHostInstance||GC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yd.isDisabled&&Yd.supportsFiber)try{jp=Yd.inject(qC),Wn=Yd}catch{}}Vi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZC;Vi.createPortal=function(t,e){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e1(e))throw Error(B(200));return YC(t,e,null,i)};Vi.createRoot=function(t,e){if(!e1(t))throw Error(B(299));var i=!1,n="",r=iS;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Qx(t,1,!1,null,null,i,!1,n,r),t[kr]=e.current,Vc(t.nodeType===8?t.parentNode:t),new Jx(e)};Vi.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=Sk(e),t=t===null?null:t.stateNode,t};Vi.flushSync=function(t){return Ds(t)};Vi.hydrate=function(t,e,i){if(!Rp(e))throw Error(B(200));return Lp(null,t,e,!0,i)};Vi.hydrateRoot=function(t,e,i){if(!e1(t))throw Error(B(405));var n=i!=null&&i.hydratedSources||null,r=!1,o="",s=iS;if(i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onRecoverableError!==void 0&&(s=i.onRecoverableError)),e=tS(e,null,t,1,i??null,r,!1,o,s),t[kr]=e.current,Vc(t),n)for(t=0;t<n.length;t++)i=n[t],r=i._getVersion,r=r(i._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[i,r]:e.mutableSourceEagerHydrationData.push(i,r);return new Fp(e)};Vi.render=function(t,e,i){if(!Rp(e))throw Error(B(200));return Lp(null,t,e,!1,i)};Vi.unmountComponentAtNode=function(t){if(!Rp(t))throw Error(B(40));return t._reactRootContainer?(Ds(function(){Lp(null,null,t,!1,function(){t._reactRootContainer=null,t[kr]=null})}),!0):!1};Vi.unstable_batchedUpdates=Gx;Vi.unstable_renderSubtreeIntoContainer=function(t,e,i,n){if(!Rp(i))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Lp(t,e,i,!1,n)};Vi.version="18.3.1-next-f1338f8080-20240426";function nS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nS)}catch(t){console.error(t)}}nS(),nk.exports=Vi;var QC=nk.exports,jv=QC;tm.createRoot=jv.createRoot,tm.hydrateRoot=jv.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qc(){return Qc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Qc.apply(this,arguments)}var Zr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Zr||(Zr={}));const Sv="popstate";function KC(t){t===void 0&&(t={});function e(n,r){let{pathname:o,search:s,hash:l}=n.location;return Xm("",{pathname:o,search:s,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function i(n,r){return typeof r=="string"?r:Uh(r)}return e8(e,i,null,t)}function pt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function rS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function JC(){return Math.random().toString(36).substr(2,8)}function Dv(t,e){return{usr:t.state,key:t.key,idx:e}}function Xm(t,e,i,n){return i===void 0&&(i=null),Qc({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?fl(e):e,{state:i,key:e&&e.key||n||JC()})}function Uh(t){let{pathname:e="/",search:i="",hash:n=""}=t;return i&&i!=="?"&&(e+=i.charAt(0)==="?"?i:"?"+i),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function fl(t){let e={};if(t){let i=t.indexOf("#");i>=0&&(e.hash=t.substr(i),t=t.substr(0,i));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function e8(t,e,i,n){n===void 0&&(n={});let{window:r=document.defaultView,v5Compat:o=!1}=n,s=r.history,l=Zr.Pop,c=null,d=u();d==null&&(d=0,s.replaceState(Qc({},s.state,{idx:d}),""));function u(){return(s.state||{idx:null}).idx}function p(){l=Zr.Pop;let D=u(),j=D==null?null:D-d;d=D,c&&c({action:l,location:w.location,delta:j})}function f(D,j){l=Zr.Push;let b=Xm(w.location,D,j);i&&i(b,D),d=u()+1;let v=Dv(b,d),h=w.createHref(b);try{s.pushState(v,"",h)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;r.location.assign(h)}o&&c&&c({action:l,location:w.location,delta:1})}function g(D,j){l=Zr.Replace;let b=Xm(w.location,D,j);i&&i(b,D),d=u();let v=Dv(b,d),h=w.createHref(b);s.replaceState(v,"",h),o&&c&&c({action:l,location:w.location,delta:0})}function y(D){let j=r.location.origin!=="null"?r.location.origin:r.location.href,b=typeof D=="string"?D:Uh(D);return b=b.replace(/ $/,"%20"),pt(j,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,j)}let w={get action(){return l},get location(){return t(r,s)},listen(D){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(Sv,p),c=D,()=>{r.removeEventListener(Sv,p),c=null}},createHref(D){return e(r,D)},createURL:y,encodeLocation(D){let j=y(D);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:f,replace:g,go(D){return s.go(D)}};return w}var _v;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_v||(_v={}));function t8(t,e,i){return i===void 0&&(i="/"),i8(t,e,i,!1)}function i8(t,e,i,n){let r=typeof e=="string"?fl(e):e,o=t1(r.pathname||"/",i);if(o==null)return null;let s=oS(t);n8(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let d=f8(o);l=h8(s[c],d,n)}return l}function oS(t,e,i,n){e===void 0&&(e=[]),i===void 0&&(i=[]),n===void 0&&(n="");let r=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(pt(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let d=co([n,c.relativePath]),u=i.concat(c);o.children&&o.children.length>0&&(pt(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),oS(o.children,e,u,d)),!(o.path==null&&!o.index)&&e.push({path:d,score:d8(d,o.index),routesMeta:u})};return t.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))r(o,s);else for(let c of sS(o.path))r(o,s,c)}),e}function sS(t){let e=t.split("/");if(e.length===0)return[];let[i,...n]=e,r=i.endsWith("?"),o=i.replace(/\?$/,"");if(n.length===0)return r?[o,""]:[o];let s=sS(n.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),r&&l.push(...s),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function n8(t){t.sort((e,i)=>e.score!==i.score?i.score-e.score:u8(e.routesMeta.map(n=>n.childrenIndex),i.routesMeta.map(n=>n.childrenIndex)))}const r8=/^:[\w-]+$/,o8=3,s8=2,a8=1,l8=10,c8=-2,Cv=t=>t==="*";function d8(t,e){let i=t.split("/"),n=i.length;return i.some(Cv)&&(n+=c8),e&&(n+=s8),i.filter(r=>!Cv(r)).reduce((r,o)=>r+(r8.test(o)?o8:o===""?a8:l8),n)}function u8(t,e){return t.length===e.length&&t.slice(0,-1).every((n,r)=>n===e[r])?t[t.length-1]-e[e.length-1]:0}function h8(t,e,i){i===void 0&&(i=!1);let{routesMeta:n}=t,r={},o="/",s=[];for(let l=0;l<n.length;++l){let c=n[l],d=l===n.length-1,u=o==="/"?e:e.slice(o.length)||"/",p=Pv({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},u),f=c.route;if(!p&&d&&i&&!n[n.length-1].route.index&&(p=Pv({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},u)),!p)return null;Object.assign(r,p.params),s.push({params:r,pathname:co([o,p.pathname]),pathnameBase:w8(co([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=co([o,p.pathnameBase]))}return s}function Pv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,n]=p8(t.path,t.caseSensitive,t.end),r=e.match(i);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:n.reduce((d,u,p)=>{let{paramName:f,isOptional:g}=u;if(f==="*"){let w=l[p]||"";s=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=l[p];return g&&!y?d[f]=void 0:d[f]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:t}}function p8(t,e,i){e===void 0&&(e=!1),i===void 0&&(i=!0),rS(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let n=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(n.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(n.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),n]}function f8(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return rS(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function t1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,n=t.charAt(i);return n&&n!=="/"?null:t.slice(i)||"/"}function m8(t,e){e===void 0&&(e="/");let{pathname:i,search:n="",hash:r=""}=typeof t=="string"?fl(t):t;return{pathname:i?i.startsWith("/")?i:g8(i,e):e,search:v8(n),hash:y8(r)}}function g8(t,e){let i=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?i.length>1&&i.pop():r!=="."&&i.push(r)}),i.length>1?i.join("/"):"/"}function zf(t,e,i,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function x8(t){return t.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function aS(t,e){let i=x8(t);return e?i.map((n,r)=>r===i.length-1?n.pathname:n.pathnameBase):i.map(n=>n.pathnameBase)}function lS(t,e,i,n){n===void 0&&(n=!1);let r;typeof t=="string"?r=fl(t):(r=Qc({},t),pt(!r.pathname||!r.pathname.includes("?"),zf("?","pathname","search",r)),pt(!r.pathname||!r.pathname.includes("#"),zf("#","pathname","hash",r)),pt(!r.search||!r.search.includes("#"),zf("#","search","hash",r)));let o=t===""||r.pathname==="",s=o?"/":r.pathname,l;if(s==null)l=i;else{let p=e.length-1;if(!n&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),p-=1;r.pathname=f.join("/")}l=p>=0?e[p]:"/"}let c=m8(r,l),d=s&&s!=="/"&&s.endsWith("/"),u=(o||s===".")&&i.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const co=t=>t.join("/").replace(/\/\/+/g,"/"),w8=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),v8=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,y8=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function b8(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const cS=["post","put","patch","delete"];new Set(cS);const k8=["get",...cS];new Set(k8);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kc(){return Kc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Kc.apply(this,arguments)}const i1=T.createContext(null),j8=T.createContext(null),zs=T.createContext(null),Np=T.createContext(null),Fs=T.createContext({outlet:null,matches:[],isDataRoute:!1}),dS=T.createContext(null);function S8(t,e){let{relative:i}=e===void 0?{}:e;xd()||pt(!1);let{basename:n,navigator:r}=T.useContext(zs),{hash:o,pathname:s,search:l}=pS(t,{relative:i}),c=s;return n!=="/"&&(c=s==="/"?n:co([n,s])),r.createHref({pathname:c,search:l,hash:o})}function xd(){return T.useContext(Np)!=null}function wd(){return xd()||pt(!1),T.useContext(Np).location}function uS(t){T.useContext(zs).static||T.useLayoutEffect(t)}function hS(){let{isDataRoute:t}=T.useContext(Fs);return t?L8():D8()}function D8(){xd()||pt(!1);let t=T.useContext(i1),{basename:e,future:i,navigator:n}=T.useContext(zs),{matches:r}=T.useContext(Fs),{pathname:o}=wd(),s=JSON.stringify(aS(r,i.v7_relativeSplatPath)),l=T.useRef(!1);return uS(()=>{l.current=!0}),T.useCallback(function(d,u){if(u===void 0&&(u={}),!l.current)return;if(typeof d=="number"){n.go(d);return}let p=lS(d,JSON.parse(s),o,u.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:co([e,p.pathname])),(u.replace?n.replace:n.push)(p,u.state,u)},[e,n,s,o,t])}function pS(t,e){let{relative:i}=e===void 0?{}:e,{future:n}=T.useContext(zs),{matches:r}=T.useContext(Fs),{pathname:o}=wd(),s=JSON.stringify(aS(r,n.v7_relativeSplatPath));return T.useMemo(()=>lS(t,JSON.parse(s),o,i==="path"),[t,s,o,i])}function _8(t,e){return C8(t,e)}function C8(t,e,i,n){xd()||pt(!1);let{navigator:r}=T.useContext(zs),{matches:o}=T.useContext(Fs),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=wd(),u;if(e){var p;let D=typeof e=="string"?fl(e):e;c==="/"||(p=D.pathname)!=null&&p.startsWith(c)||pt(!1),u=D}else u=d;let f=u.pathname||"/",g=f;if(c!=="/"){let D=c.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(D.length).join("/")}let y=t8(t,{pathname:g}),w=A8(y&&y.map(D=>Object.assign({},D,{params:Object.assign({},l,D.params),pathname:co([c,r.encodeLocation?r.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?c:co([c,r.encodeLocation?r.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),o,i,n);return e&&w?T.createElement(Np.Provider,{value:{location:Kc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Zr.Pop}},w):w}function P8(){let t=R8(),e=b8(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),i?T.createElement("pre",{style:r},i):null,o)}const T8=T.createElement(P8,null);class E8 extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,i){return i.location!==e.location||i.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:i.error,location:i.location,revalidation:e.revalidation||i.revalidation}}componentDidCatch(e,i){console.error("React Router caught the following error during render",e,i)}render(){return this.state.error!==void 0?T.createElement(Fs.Provider,{value:this.props.routeContext},T.createElement(dS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function I8(t){let{routeContext:e,match:i,children:n}=t,r=T.useContext(i1);return r&&r.static&&r.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=i.route.id),T.createElement(Fs.Provider,{value:e},n)}function A8(t,e,i,n){var r;if(e===void 0&&(e=[]),i===void 0&&(i=null),n===void 0&&(n=null),t==null){var o;if(!i)return null;if(i.errors)t=i.matches;else if((o=n)!=null&&o.v7_partialHydration&&e.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let s=t,l=(r=i)==null?void 0:r.errors;if(l!=null){let u=s.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);u>=0||pt(!1),s=s.slice(0,Math.min(s.length,u+1))}let c=!1,d=-1;if(i&&n&&n.v7_partialHydration)for(let u=0;u<s.length;u++){let p=s[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:f,errors:g}=i,y=p.route.loader&&f[p.route.id]===void 0&&(!g||g[p.route.id]===void 0);if(p.route.lazy||y){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((u,p,f)=>{let g,y=!1,w=null,D=null;i&&(g=l&&p.route.id?l[p.route.id]:void 0,w=p.route.errorElement||T8,c&&(d<0&&f===0?(N8("route-fallback",!1),y=!0,D=null):d===f&&(y=!0,D=p.route.hydrateFallbackElement||null)));let j=e.concat(s.slice(0,f+1)),b=()=>{let v;return g?v=w:y?v=D:p.route.Component?v=T.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=u,T.createElement(I8,{match:p,routeContext:{outlet:u,matches:j,isDataRoute:i!=null},children:v})};return i&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?T.createElement(E8,{location:i.location,revalidation:i.revalidation,component:w,error:g,children:b(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):b()},null)}var fS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(fS||{}),Hh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Hh||{});function M8(t){let e=T.useContext(i1);return e||pt(!1),e}function z8(t){let e=T.useContext(j8);return e||pt(!1),e}function F8(t){let e=T.useContext(Fs);return e||pt(!1),e}function mS(t){let e=F8(),i=e.matches[e.matches.length-1];return i.route.id||pt(!1),i.route.id}function R8(){var t;let e=T.useContext(dS),i=z8(Hh.UseRouteError),n=mS(Hh.UseRouteError);return e!==void 0?e:(t=i.errors)==null?void 0:t[n]}function L8(){let{router:t}=M8(fS.UseNavigateStable),e=mS(Hh.UseNavigateStable),i=T.useRef(!1);return uS(()=>{i.current=!0}),T.useCallback(function(r,o){o===void 0&&(o={}),i.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Kc({fromRouteId:e},o)))},[t,e])}const Tv={};function N8(t,e,i){!e&&!Tv[t]&&(Tv[t]=!0)}function O8(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function Yi(t){pt(!1)}function $8(t){let{basename:e="/",children:i=null,location:n,navigationType:r=Zr.Pop,navigator:o,static:s=!1,future:l}=t;xd()&&pt(!1);let c=e.replace(/^\/*/,"/"),d=T.useMemo(()=>({basename:c,navigator:o,static:s,future:Kc({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof n=="string"&&(n=fl(n));let{pathname:u="/",search:p="",hash:f="",state:g=null,key:y="default"}=n,w=T.useMemo(()=>{let D=t1(u,c);return D==null?null:{location:{pathname:D,search:p,hash:f,state:g,key:y},navigationType:r}},[c,u,p,f,g,y,r]);return w==null?null:T.createElement(zs.Provider,{value:d},T.createElement(Np.Provider,{children:i,value:w}))}function B8(t){let{children:e,location:i}=t;return _8(Zm(e),i)}new Promise(()=>{});function Zm(t,e){e===void 0&&(e=[]);let i=[];return T.Children.forEach(t,(n,r)=>{if(!T.isValidElement(n))return;let o=[...e,r];if(n.type===T.Fragment){i.push.apply(i,Zm(n.props.children,o));return}n.type!==Yi&&pt(!1),!n.props.index||!n.props.children||pt(!1);let s={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=Zm(n.props.children,o)),i.push(s)}),i}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qm(){return qm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},qm.apply(this,arguments)}function V8(t,e){if(t==null)return{};var i={},n=Object.keys(t),r,o;for(o=0;o<n.length;o++)r=n[o],!(e.indexOf(r)>=0)&&(i[r]=t[r]);return i}function W8(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function U8(t,e){return t.button===0&&(!e||e==="_self")&&!W8(t)}const H8=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Y8="6";try{window.__reactRouterVersion=Y8}catch{}const G8="startTransition",Ev=$4[G8];function X8(t){let{basename:e,children:i,future:n,window:r}=t,o=T.useRef();o.current==null&&(o.current=KC({window:r,v5Compat:!0}));let s=o.current,[l,c]=T.useState({action:s.action,location:s.location}),{v7_startTransition:d}=n||{},u=T.useCallback(p=>{d&&Ev?Ev(()=>c(p)):c(p)},[c,d]);return T.useLayoutEffect(()=>s.listen(u),[s,u]),T.useEffect(()=>O8(n),[n]),T.createElement($8,{basename:e,children:i,location:l.location,navigationType:l.action,navigator:s,future:n})}const Z8=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",q8=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bn=T.forwardRef(function(e,i){let{onClick:n,relative:r,reloadDocument:o,replace:s,state:l,target:c,to:d,preventScrollReset:u,viewTransition:p}=e,f=V8(e,H8),{basename:g}=T.useContext(zs),y,w=!1;if(typeof d=="string"&&q8.test(d)&&(y=d,Z8))try{let v=new URL(window.location.href),h=d.startsWith("//")?new URL(v.protocol+d):new URL(d),x=t1(h.pathname,g);h.origin===v.origin&&x!=null?d=x+h.search+h.hash:w=!0}catch{}let D=S8(d,{relative:r}),j=Q8(d,{replace:s,state:l,target:c,preventScrollReset:u,relative:r,viewTransition:p});function b(v){n&&n(v),v.defaultPrevented||j(v)}return T.createElement("a",qm({},f,{href:y||D,onClick:w||o?n:b,ref:i,target:c}))});var Iv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Iv||(Iv={}));var Av;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Av||(Av={}));function Q8(t,e){let{target:i,replace:n,state:r,preventScrollReset:o,relative:s,viewTransition:l}=e===void 0?{}:e,c=hS(),d=wd(),u=pS(t,{relative:s});return T.useCallback(p=>{if(U8(p,i)){p.preventDefault();let f=n!==void 0?n:Uh(d)===Uh(u);c(t,{replace:f,state:r,preventScrollReset:o,relative:s,viewTransition:l})}},[d,c,u,n,r,i,t,o,s,l])}var K8=typeof Element<"u",J8=typeof Map=="function",e6=typeof Set=="function",t6=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ju(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var i,n,r;if(Array.isArray(t)){if(i=t.length,i!=e.length)return!1;for(n=i;n--!==0;)if(!Ju(t[n],e[n]))return!1;return!0}var o;if(J8&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(o=t.entries();!(n=o.next()).done;)if(!e.has(n.value[0]))return!1;for(o=t.entries();!(n=o.next()).done;)if(!Ju(n.value[1],e.get(n.value[0])))return!1;return!0}if(e6&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(o=t.entries();!(n=o.next()).done;)if(!e.has(n.value[0]))return!1;return!0}if(t6&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(i=t.length,i!=e.length)return!1;for(n=i;n--!==0;)if(t[n]!==e[n])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(r=Object.keys(t),i=r.length,i!==Object.keys(e).length)return!1;for(n=i;n--!==0;)if(!Object.prototype.hasOwnProperty.call(e,r[n]))return!1;if(K8&&t instanceof Element)return!1;for(n=i;n--!==0;)if(!((r[n]==="_owner"||r[n]==="__v"||r[n]==="__o")&&t.$$typeof)&&!Ju(t[r[n]],e[r[n]]))return!1;return!0}return t!==t&&e!==e}var i6=function(e,i){try{return Ju(e,i)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};const n6=bp(i6);var r6=function(t,e,i,n,r,o,s,l){if(!t){var c;if(e===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[i,n,r,o,s,l],u=0;c=new Error(e.replace(/%s/g,function(){return d[u++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},o6=r6;const Mv=bp(o6);var s6=function(e,i,n,r){var o=n?n.call(r,e,i):void 0;if(o!==void 0)return!!o;if(e===i)return!0;if(typeof e!="object"||!e||typeof i!="object"||!i)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(i),d=0;d<s.length;d++){var u=s[d];if(!c(u))return!1;var p=e[u],f=i[u];if(o=n?n.call(r,p,f,u):void 0,o===!1||o===void 0&&p!==f)return!1}return!0};const a6=bp(s6);var gS=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(gS||{}),Ff={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},zv=Object.values(gS),n1={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},l6=Object.entries(n1).reduce((t,[e,i])=>(t[i]=e,t),{}),kn="data-rh",za={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Fa=(t,e)=>{for(let i=t.length-1;i>=0;i-=1){const n=t[i];if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}return null},c6=t=>{let e=Fa(t,"title");const i=Fa(t,za.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),i&&e)return i.replace(/%s/g,()=>e);const n=Fa(t,za.DEFAULT_TITLE);return e||n||void 0},d6=t=>Fa(t,za.ON_CHANGE_CLIENT_STATE)||(()=>{}),Rf=(t,e)=>e.filter(i=>typeof i[t]<"u").map(i=>i[t]).reduce((i,n)=>({...i,...n}),{}),u6=(t,e)=>e.filter(i=>typeof i.base<"u").map(i=>i.base).reverse().reduce((i,n)=>{if(!i.length){const r=Object.keys(n);for(let o=0;o<r.length;o+=1){const l=r[o].toLowerCase();if(t.indexOf(l)!==-1&&n[l])return i.concat(n)}}return i},[]),h6=t=>console&&typeof console.warn=="function"&&console.warn(t),El=(t,e,i)=>{const n={};return i.filter(r=>Array.isArray(r[t])?!0:(typeof r[t]<"u"&&h6(`Helmet: ${t} should be of type "Array". Instead found type "${typeof r[t]}"`),!1)).map(r=>r[t]).reverse().reduce((r,o)=>{const s={};o.filter(c=>{let d;const u=Object.keys(c);for(let f=0;f<u.length;f+=1){const g=u[f],y=g.toLowerCase();e.indexOf(y)!==-1&&!(d==="rel"&&c[d].toLowerCase()==="canonical")&&!(y==="rel"&&c[y].toLowerCase()==="stylesheet")&&(d=y),e.indexOf(g)!==-1&&(g==="innerHTML"||g==="cssText"||g==="itemprop")&&(d=g)}if(!d||!c[d])return!1;const p=c[d].toLowerCase();return n[d]||(n[d]={}),s[d]||(s[d]={}),n[d][p]?!1:(s[d][p]=!0,!0)}).reverse().forEach(c=>r.push(c));const l=Object.keys(s);for(let c=0;c<l.length;c+=1){const d=l[c],u={...n[d],...s[d]};n[d]=u}return r},[]).reverse()},p6=(t,e)=>{if(Array.isArray(t)&&t.length){for(let i=0;i<t.length;i+=1)if(t[i][e])return!0}return!1},f6=t=>({baseTag:u6(["href"],t),bodyAttributes:Rf("bodyAttributes",t),defer:Fa(t,za.DEFER),encode:Fa(t,za.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Rf("htmlAttributes",t),linkTags:El("link",["rel","href"],t),metaTags:El("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:El("noscript",["innerHTML"],t),onChangeClientState:d6(t),scriptTags:El("script",["src","innerHTML"],t),styleTags:El("style",["cssText"],t),title:c6(t),titleAttributes:Rf("titleAttributes",t),prioritizeSeoTags:p6(t,za.PRIORITIZE_SEO_TAGS)}),xS=t=>Array.isArray(t)?t.join(""):t,m6=(t,e)=>{const i=Object.keys(t);for(let n=0;n<i.length;n+=1)if(e[i[n]]&&e[i[n]].includes(t[i[n]]))return!0;return!1},Lf=(t,e)=>Array.isArray(t)?t.reduce((i,n)=>(m6(n,e)?i.priority.push(n):i.default.push(n),i),{priority:[],default:[]}):{default:t,priority:[]},Fv=(t,e)=>({...t,[e]:void 0}),g6=["noscript","script","style"],Qm=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),wS=t=>Object.keys(t).reduce((e,i)=>{const n=typeof t[i]<"u"?`${i}="${t[i]}"`:`${i}`;return e?`${e} ${n}`:n},""),x6=(t,e,i,n)=>{const r=wS(i),o=xS(e);return r?`<${t} ${kn}="true" ${r}>${Qm(o,n)}</${t}>`:`<${t} ${kn}="true">${Qm(o,n)}</${t}>`},w6=(t,e,i=!0)=>e.reduce((n,r)=>{const o=r,s=Object.keys(o).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,u)=>{const p=typeof o[u]>"u"?u:`${u}="${Qm(o[u],i)}"`;return d?`${d} ${p}`:p},""),l=o.innerHTML||o.cssText||"",c=g6.indexOf(t)===-1;return`${n}<${t} ${kn}="true" ${s}${c?"/>":`>${l}</${t}>`}`},""),vS=(t,e={})=>Object.keys(t).reduce((i,n)=>{const r=n1[n];return i[r||n]=t[n],i},e),v6=(t,e,i)=>{const n={key:e,[kn]:!0},r=vS(i,n);return[q.createElement("title",r,e)]},eh=(t,e)=>e.map((i,n)=>{const r={key:n,[kn]:!0};return Object.keys(i).forEach(o=>{const l=n1[o]||o;if(l==="innerHTML"||l==="cssText"){const c=i.innerHTML||i.cssText;r.dangerouslySetInnerHTML={__html:c}}else r[l]=i[o]}),q.createElement(t,r)}),Zi=(t,e,i=!0)=>{switch(t){case"title":return{toComponent:()=>v6(t,e.title,e.titleAttributes),toString:()=>x6(t,e.title,e.titleAttributes,i)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>vS(e),toString:()=>wS(e)};default:return{toComponent:()=>eh(t,e),toString:()=>w6(t,e,i)}}},y6=({metaTags:t,linkTags:e,scriptTags:i,encode:n})=>{const r=Lf(t,Ff.meta),o=Lf(e,Ff.link),s=Lf(i,Ff.script);return{priorityMethods:{toComponent:()=>[...eh("meta",r.priority),...eh("link",o.priority),...eh("script",s.priority)],toString:()=>`${Zi("meta",r.priority,n)} ${Zi("link",o.priority,n)} ${Zi("script",s.priority,n)}`},metaTags:r.default,linkTags:o.default,scriptTags:s.default}},b6=t=>{const{baseTag:e,bodyAttributes:i,encode:n=!0,htmlAttributes:r,noscriptTags:o,styleTags:s,title:l="",titleAttributes:c,prioritizeSeoTags:d}=t;let{linkTags:u,metaTags:p,scriptTags:f}=t,g={toComponent:()=>{},toString:()=>""};return d&&({priorityMethods:g,linkTags:u,metaTags:p,scriptTags:f}=y6(t)),{priority:g,base:Zi("base",e,n),bodyAttributes:Zi("bodyAttributes",i,n),htmlAttributes:Zi("htmlAttributes",r,n),link:Zi("link",u,n),meta:Zi("meta",p,n),noscript:Zi("noscript",o,n),script:Zi("script",f,n),style:Zi("style",s,n),title:Zi("title",{title:l,titleAttributes:c},n)}},Km=b6,Gd=[],yS=!!(typeof window<"u"&&window.document&&window.document.createElement),Jm=class{constructor(t,e){Jn(this,"instances",[]);Jn(this,"canUseDOM",yS);Jn(this,"context");Jn(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?Gd:this.instances,add:t=>{(this.canUseDOM?Gd:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?Gd:this.instances).indexOf(t);(this.canUseDOM?Gd:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=Km({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},k6={},bS=q.createContext(k6),Va,kS=(Va=class extends T.Component{constructor(i){super(i);Jn(this,"helmetData");this.helmetData=new Jm(this.props.context||{},Va.canUseDOM)}render(){return q.createElement(bS.Provider,{value:this.helmetData.value},this.props.children)}},Jn(Va,"canUseDOM",yS),Va),Ys=(t,e)=>{const i=document.head||document.querySelector("head"),n=i.querySelectorAll(`${t}[${kn}]`),r=[].slice.call(n),o=[];let s;return e&&e.length&&e.forEach(l=>{const c=document.createElement(t);for(const d in l)if(Object.prototype.hasOwnProperty.call(l,d))if(d==="innerHTML")c.innerHTML=l.innerHTML;else if(d==="cssText")c.styleSheet?c.styleSheet.cssText=l.cssText:c.appendChild(document.createTextNode(l.cssText));else{const u=d,p=typeof l[u]>"u"?"":l[u];c.setAttribute(d,p)}c.setAttribute(kn,"true"),r.some((d,u)=>(s=u,c.isEqualNode(d)))?r.splice(s,1):o.push(c)}),r.forEach(l=>{var c;return(c=l.parentNode)==null?void 0:c.removeChild(l)}),o.forEach(l=>i.appendChild(l)),{oldTags:r,newTags:o}},eg=(t,e)=>{const i=document.getElementsByTagName(t)[0];if(!i)return;const n=i.getAttribute(kn),r=n?n.split(","):[],o=[...r],s=Object.keys(e);for(const l of s){const c=e[l]||"";i.getAttribute(l)!==c&&i.setAttribute(l,c),r.indexOf(l)===-1&&r.push(l);const d=o.indexOf(l);d!==-1&&o.splice(d,1)}for(let l=o.length-1;l>=0;l-=1)i.removeAttribute(o[l]);r.length===o.length?i.removeAttribute(kn):i.getAttribute(kn)!==s.join(",")&&i.setAttribute(kn,s.join(","))},j6=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=xS(t)),eg("title",e)},Rv=(t,e)=>{const{baseTag:i,bodyAttributes:n,htmlAttributes:r,linkTags:o,metaTags:s,noscriptTags:l,onChangeClientState:c,scriptTags:d,styleTags:u,title:p,titleAttributes:f}=t;eg("body",n),eg("html",r),j6(p,f);const g={baseTag:Ys("base",i),linkTags:Ys("link",o),metaTags:Ys("meta",s),noscriptTags:Ys("noscript",l),scriptTags:Ys("script",d),styleTags:Ys("style",u)},y={},w={};Object.keys(g).forEach(D=>{const{newTags:j,oldTags:b}=g[D];j.length&&(y[D]=j),b.length&&(w[D]=g[D].oldTags)}),e&&e(),c(t,y,w)},Il=null,S6=t=>{Il&&cancelAnimationFrame(Il),t.defer?Il=requestAnimationFrame(()=>{Rv(t,()=>{Il=null})}):(Rv(t),Il=null)},D6=S6,Lv=class extends T.Component{constructor(){super(...arguments);Jn(this,"rendered",!1)}shouldComponentUpdate(e){return!a6(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:i}=this.props.context;let n=null;const r=f6(e.get().map(o=>{const s={...o.props};return delete s.context,s}));kS.canUseDOM?D6(r):Km&&(n=Km(r)),i(n)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},em,jS=(em=class extends T.Component{shouldComponentUpdate(t){return!n6(Fv(this.props,"helmetData"),Fv(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,i,n){return{...e,[t.type]:[...e[t.type]||[],{...i,...this.mapNestedChildrenToProps(t,n)}]}}mapObjectTypeChildren(t,e,i,n){switch(t.type){case"title":return{...e,[t.type]:n,titleAttributes:{...i}};case"body":return{...e,bodyAttributes:{...i}};case"html":return{...e,htmlAttributes:{...i}};default:return{...e,[t.type]:{...i}}}}mapArrayTypeChildrenToProps(t,e){let i={...e};return Object.keys(t).forEach(n=>{i={...i,[n]:t[n]}}),i}warnOnInvalidChildren(t,e){return Mv(zv.some(i=>t.type===i),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${zv.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),Mv(!e||typeof e=="string"||Array.isArray(e)&&!e.some(i=>typeof i!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let i={};return q.Children.forEach(t,n=>{if(!n||!n.props)return;const{children:r,...o}=n.props,s=Object.keys(o).reduce((c,d)=>(c[l6[d]||d]=o[d],c),{});let{type:l}=n;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(n,r),l){case"Symbol(react.fragment)":e=this.mapChildrenToProps(r,e);break;case"link":case"meta":case"noscript":case"script":case"style":i=this.flattenArrayTypeChildren(n,i,s,r);break;default:e=this.mapObjectTypeChildren(n,e,s,r);break}}),this.mapArrayTypeChildrenToProps(i,e)}render(){const{children:t,...e}=this.props;let i={...e},{helmetData:n}=e;if(t&&(i=this.mapChildrenToProps(t,i)),n&&!(n instanceof Jm)){const r=n;n=new Jm(r.context,!0),delete i.helmetData}return n?q.createElement(Lv,{...i,context:n.value}):q.createElement(bS.Consumer,null,r=>q.createElement(Lv,{...i,context:r}))}},Jn(em,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),em),_t=function(){return _t=Object.assign||function(e){for(var i,n=1,r=arguments.length;n<r;n++){i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},_t.apply(this,arguments)};function qa(t,e,i){if(i||arguments.length===2)for(var n=0,r=e.length,o;n<r;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))}var Ie="-ms-",hc="-moz-",ye="-webkit-",SS="comm",Op="rule",r1="decl",_6="@import",DS="@keyframes",C6="@layer",_S=Math.abs,o1=String.fromCharCode,tg=Object.assign;function P6(t,e){return Dt(t,0)^45?(((e<<2^Dt(t,0))<<2^Dt(t,1))<<2^Dt(t,2))<<2^Dt(t,3):0}function CS(t){return t.trim()}function ar(t,e){return(t=e.exec(t))?t[0]:t}function re(t,e,i){return t.replace(e,i)}function th(t,e,i){return t.indexOf(e,i)}function Dt(t,e){return t.charCodeAt(e)|0}function Qa(t,e,i){return t.slice(e,i)}function Ln(t){return t.length}function PS(t){return t.length}function Gl(t,e){return e.push(t),t}function T6(t,e){return t.map(e).join("")}function Nv(t,e){return t.filter(function(i){return!ar(i,e)})}var $p=1,Ka=1,TS=0,cn=0,ut=0,ml="";function Bp(t,e,i,n,r,o,s,l){return{value:t,root:e,parent:i,type:n,props:r,children:o,line:$p,column:Ka,length:s,return:"",siblings:l}}function Nr(t,e){return tg(Bp("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Gs(t){for(;t.root;)t=Nr(t.root,{children:[t]});Gl(t,t.siblings)}function E6(){return ut}function I6(){return ut=cn>0?Dt(ml,--cn):0,Ka--,ut===10&&(Ka=1,$p--),ut}function _n(){return ut=cn<TS?Dt(ml,cn++):0,Ka++,ut===10&&(Ka=1,$p++),ut}function hs(){return Dt(ml,cn)}function ih(){return cn}function Vp(t,e){return Qa(ml,t,e)}function ig(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function A6(t){return $p=Ka=1,TS=Ln(ml=t),cn=0,[]}function M6(t){return ml="",t}function Nf(t){return CS(Vp(cn-1,ng(t===91?t+2:t===40?t+1:t)))}function z6(t){for(;(ut=hs())&&ut<33;)_n();return ig(t)>2||ig(ut)>3?"":" "}function F6(t,e){for(;--e&&_n()&&!(ut<48||ut>102||ut>57&&ut<65||ut>70&&ut<97););return Vp(t,ih()+(e<6&&hs()==32&&_n()==32))}function ng(t){for(;_n();)switch(ut){case t:return cn;case 34:case 39:t!==34&&t!==39&&ng(ut);break;case 40:t===41&&ng(t);break;case 92:_n();break}return cn}function R6(t,e){for(;_n()&&t+ut!==47+10;)if(t+ut===42+42&&hs()===47)break;return"/*"+Vp(e,cn-1)+"*"+o1(t===47?t:_n())}function L6(t){for(;!ig(hs());)_n();return Vp(t,cn)}function N6(t){return M6(nh("",null,null,null,[""],t=A6(t),0,[0],t))}function nh(t,e,i,n,r,o,s,l,c){for(var d=0,u=0,p=s,f=0,g=0,y=0,w=1,D=1,j=1,b=0,v="",h=r,x=o,k=n,S=v;D;)switch(y=b,b=_n()){case 40:if(y!=108&&Dt(S,p-1)==58){th(S+=re(Nf(b),"&","&\f"),"&\f",_S(d?l[d-1]:0))!=-1&&(j=-1);break}case 34:case 39:case 91:S+=Nf(b);break;case 9:case 10:case 13:case 32:S+=z6(y);break;case 92:S+=F6(ih()-1,7);continue;case 47:switch(hs()){case 42:case 47:Gl(O6(R6(_n(),ih()),e,i,c),c);break;default:S+="/"}break;case 123*w:l[d++]=Ln(S)*j;case 125*w:case 59:case 0:switch(b){case 0:case 125:D=0;case 59+u:j==-1&&(S=re(S,/\f/g,"")),g>0&&Ln(S)-p&&Gl(g>32?$v(S+";",n,i,p-1,c):$v(re(S," ","")+";",n,i,p-2,c),c);break;case 59:S+=";";default:if(Gl(k=Ov(S,e,i,d,u,r,l,v,h=[],x=[],p,o),o),b===123)if(u===0)nh(S,e,k,k,h,o,p,l,x);else switch(f===99&&Dt(S,3)===110?100:f){case 100:case 108:case 109:case 115:nh(t,k,k,n&&Gl(Ov(t,k,k,0,0,r,l,v,r,h=[],p,x),x),r,x,p,l,n?h:x);break;default:nh(S,k,k,k,[""],x,0,l,x)}}d=u=g=0,w=j=1,v=S="",p=s;break;case 58:p=1+Ln(S),g=y;default:if(w<1){if(b==123)--w;else if(b==125&&w++==0&&I6()==125)continue}switch(S+=o1(b),b*w){case 38:j=u>0?1:(S+="\f",-1);break;case 44:l[d++]=(Ln(S)-1)*j,j=1;break;case 64:hs()===45&&(S+=Nf(_n())),f=hs(),u=p=Ln(v=S+=L6(ih())),b++;break;case 45:y===45&&Ln(S)==2&&(w=0)}}return o}function Ov(t,e,i,n,r,o,s,l,c,d,u,p){for(var f=r-1,g=r===0?o:[""],y=PS(g),w=0,D=0,j=0;w<n;++w)for(var b=0,v=Qa(t,f+1,f=_S(D=s[w])),h=t;b<y;++b)(h=CS(D>0?g[b]+" "+v:re(v,/&\f/g,g[b])))&&(c[j++]=h);return Bp(t,e,i,r===0?Op:l,c,d,u,p)}function O6(t,e,i,n){return Bp(t,e,i,SS,o1(E6()),Qa(t,2,-2),0,n)}function $v(t,e,i,n,r){return Bp(t,e,i,r1,Qa(t,0,n),Qa(t,n+1,-1),n,r)}function ES(t,e,i){switch(P6(t,e)){case 5103:return ye+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+t+t;case 4789:return hc+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+t+hc+t+Ie+t+t;case 5936:switch(Dt(t,e+11)){case 114:return ye+t+Ie+re(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ye+t+Ie+re(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ye+t+Ie+re(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ye+t+Ie+t+t;case 6165:return ye+t+Ie+"flex-"+t+t;case 5187:return ye+t+re(t,/(\w+).+(:[^]+)/,ye+"box-$1$2"+Ie+"flex-$1$2")+t;case 5443:return ye+t+Ie+"flex-item-"+re(t,/flex-|-self/g,"")+(ar(t,/flex-|baseline/)?"":Ie+"grid-row-"+re(t,/flex-|-self/g,""))+t;case 4675:return ye+t+Ie+"flex-line-pack"+re(t,/align-content|flex-|-self/g,"")+t;case 5548:return ye+t+Ie+re(t,"shrink","negative")+t;case 5292:return ye+t+Ie+re(t,"basis","preferred-size")+t;case 6060:return ye+"box-"+re(t,"-grow","")+ye+t+Ie+re(t,"grow","positive")+t;case 4554:return ye+re(t,/([^-])(transform)/g,"$1"+ye+"$2")+t;case 6187:return re(re(re(t,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),t,"")+t;case 5495:case 3959:return re(t,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return re(re(t,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+Ie+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+t+t;case 4200:if(!ar(t,/flex-|baseline/))return Ie+"grid-column-align"+Qa(t,e)+t;break;case 2592:case 3360:return Ie+re(t,"template-","")+t;case 4384:case 3616:return i&&i.some(function(n,r){return e=r,ar(n.props,/grid-\w+-end/)})?~th(t+(i=i[e].value),"span",0)?t:Ie+re(t,"-start","")+t+Ie+"grid-row-span:"+(~th(i,"span",0)?ar(i,/\d+/):+ar(i,/\d+/)-+ar(t,/\d+/))+";":Ie+re(t,"-start","")+t;case 4896:case 4128:return i&&i.some(function(n){return ar(n.props,/grid-\w+-start/)})?t:Ie+re(re(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return re(t,/(.+)-inline(.+)/,ye+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ln(t)-1-e>6)switch(Dt(t,e+1)){case 109:if(Dt(t,e+4)!==45)break;case 102:return re(t,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+hc+(Dt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~th(t,"stretch",0)?ES(re(t,"stretch","fill-available"),e,i)+t:t}break;case 5152:case 5920:return re(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,r,o,s,l,c,d){return Ie+r+":"+o+d+(s?Ie+r+"-span:"+(l?c:+c-+o)+d:"")+t});case 4949:if(Dt(t,e+6)===121)return re(t,":",":"+ye)+t;break;case 6444:switch(Dt(t,Dt(t,14)===45?18:11)){case 120:return re(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ye+(Dt(t,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+Ie+"$2box$3")+t;case 100:return re(t,":",":"+Ie)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(t,"scroll-","scroll-snap-")+t}return t}function Yh(t,e){for(var i="",n=0;n<t.length;n++)i+=e(t[n],n,t,e)||"";return i}function $6(t,e,i,n){switch(t.type){case C6:if(t.children.length)break;case _6:case r1:return t.return=t.return||t.value;case SS:return"";case DS:return t.return=t.value+"{"+Yh(t.children,n)+"}";case Op:if(!Ln(t.value=t.props.join(",")))return""}return Ln(i=Yh(t.children,n))?t.return=t.value+"{"+i+"}":""}function B6(t){var e=PS(t);return function(i,n,r,o){for(var s="",l=0;l<e;l++)s+=t[l](i,n,r,o)||"";return s}}function V6(t){return function(e){e.root||(e=e.return)&&t(e)}}function W6(t,e,i,n){if(t.length>-1&&!t.return)switch(t.type){case r1:t.return=ES(t.value,t.length,i);return;case DS:return Yh([Nr(t,{value:re(t.value,"@","@"+ye)})],n);case Op:if(t.length)return T6(i=t.props,function(r){switch(ar(r,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Gs(Nr(t,{props:[re(r,/:(read-\w+)/,":"+hc+"$1")]})),Gs(Nr(t,{props:[r]})),tg(t,{props:Nv(i,n)});break;case"::placeholder":Gs(Nr(t,{props:[re(r,/:(plac\w+)/,":"+ye+"input-$1")]})),Gs(Nr(t,{props:[re(r,/:(plac\w+)/,":"+hc+"$1")]})),Gs(Nr(t,{props:[re(r,/:(plac\w+)/,Ie+"input-$1")]})),Gs(Nr(t,{props:[r]})),tg(t,{props:Nv(i,n)});break}return""})}}var U6={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ja=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",IS="active",AS="data-styled-version",Wp="6.1.19",s1=`/*!sc*/
`,Gh=typeof window<"u"&&typeof document<"u",H6=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),Y6={},Up=Object.freeze([]),el=Object.freeze({});function MS(t,e,i){return i===void 0&&(i=el),t.theme!==i.theme&&t.theme||e||i.theme}var zS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),G6=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,X6=/(^-|-$)/g;function Bv(t){return t.replace(G6,"-").replace(X6,"")}var Z6=/(a)(d)/gi,Xd=52,Vv=function(t){return String.fromCharCode(t+(t>25?39:97))};function rg(t){var e,i="";for(e=Math.abs(t);e>Xd;e=e/Xd|0)i=Vv(e%Xd)+i;return(Vv(e%Xd)+i).replace(Z6,"$1-$2")}var Of,FS=5381,va=function(t,e){for(var i=e.length;i;)t=33*t^e.charCodeAt(--i);return t},RS=function(t){return va(FS,t)};function a1(t){return rg(RS(t)>>>0)}function q6(t){return t.displayName||t.name||"Component"}function $f(t){return typeof t=="string"&&!0}var LS=typeof Symbol=="function"&&Symbol.for,NS=LS?Symbol.for("react.memo"):60115,Q6=LS?Symbol.for("react.forward_ref"):60112,K6={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},J6={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},OS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},eP=((Of={})[Q6]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Of[NS]=OS,Of);function Wv(t){return("type"in(e=t)&&e.type.$$typeof)===NS?OS:"$$typeof"in t?eP[t.$$typeof]:K6;var e}var tP=Object.defineProperty,iP=Object.getOwnPropertyNames,Uv=Object.getOwnPropertySymbols,nP=Object.getOwnPropertyDescriptor,rP=Object.getPrototypeOf,Hv=Object.prototype;function $S(t,e,i){if(typeof e!="string"){if(Hv){var n=rP(e);n&&n!==Hv&&$S(t,n,i)}var r=iP(e);Uv&&(r=r.concat(Uv(e)));for(var o=Wv(t),s=Wv(e),l=0;l<r.length;++l){var c=r[l];if(!(c in J6||i&&i[c]||s&&c in s||o&&c in o)){var d=nP(e,c);try{tP(t,c,d)}catch{}}}}return t}function _s(t){return typeof t=="function"}function l1(t){return typeof t=="object"&&"styledComponentId"in t}function rs(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Xh(t,e){if(t.length===0)return"";for(var i=t[0],n=1;n<t.length;n++)i+=e?e+t[n]:t[n];return i}function Jc(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function og(t,e,i){if(i===void 0&&(i=!1),!i&&!Jc(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=og(t[n],e[n]);else if(Jc(e))for(var n in e)t[n]=og(t[n],e[n]);return t}function c1(t,e){Object.defineProperty(t,"toString",{value:e})}function Cs(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var oP=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var i=0,n=0;n<e;n++)i+=this.groupSizes[n];return i},t.prototype.insertRules=function(e,i){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw Cs(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(e+1),c=(s=0,i.length);s<c;s++)this.tag.insertRule(l,i[s])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var i=this.groupSizes[e],n=this.indexOfGroup(e),r=n+i;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var i="";if(e>=this.length||this.groupSizes[e]===0)return i;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)i+="".concat(this.tag.getRule(s)).concat(s1);return i},t}(),rh=new Map,Zh=new Map,oh=1,Zd=function(t){if(rh.has(t))return rh.get(t);for(;Zh.has(oh);)oh++;var e=oh++;return rh.set(t,e),Zh.set(e,t),e},sP=function(t,e){oh=e+1,rh.set(t,e),Zh.set(e,t)},aP="style[".concat(Ja,"][").concat(AS,'="').concat(Wp,'"]'),lP=new RegExp("^".concat(Ja,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),cP=function(t,e,i){for(var n,r=i.split(","),o=0,s=r.length;o<s;o++)(n=r[o])&&t.registerName(e,n)},dP=function(t,e){for(var i,n=((i=e.textContent)!==null&&i!==void 0?i:"").split(s1),r=[],o=0,s=n.length;o<s;o++){var l=n[o].trim();if(l){var c=l.match(lP);if(c){var d=0|parseInt(c[1],10),u=c[2];d!==0&&(sP(u,d),cP(t,u,c[3]),t.getTag().insertRules(d,r)),r.length=0}else r.push(l)}}},Yv=function(t){for(var e=document.querySelectorAll(aP),i=0,n=e.length;i<n;i++){var r=e[i];r&&r.getAttribute(Ja)!==IS&&(dP(t,r),r.parentNode&&r.parentNode.removeChild(r))}};function uP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var BS=function(t){var e=document.head,i=t||e,n=document.createElement("style"),r=function(l){var c=Array.from(l.querySelectorAll("style[".concat(Ja,"]")));return c[c.length-1]}(i),o=r!==void 0?r.nextSibling:null;n.setAttribute(Ja,IS),n.setAttribute(AS,Wp);var s=uP();return s&&n.setAttribute("nonce",s),i.insertBefore(n,o),n},hP=function(){function t(e){this.element=BS(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var n=document.styleSheets,r=0,o=n.length;r<o;r++){var s=n[r];if(s.ownerNode===i)return s}throw Cs(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,i){try{return this.sheet.insertRule(i,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var i=this.sheet.cssRules[e];return i&&i.cssText?i.cssText:""},t}(),pP=function(){function t(e){this.element=BS(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,i){if(e<=this.length&&e>=0){var n=document.createTextNode(i);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),fP=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,i){return e<=this.length&&(this.rules.splice(e,0,i),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Gv=Gh,mP={isServer:!Gh,useCSSOMInjection:!H6},qh=function(){function t(e,i,n){e===void 0&&(e=el),i===void 0&&(i={});var r=this;this.options=_t(_t({},mP),e),this.gs=i,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Gh&&Gv&&(Gv=!1,Yv(this)),c1(this,function(){return function(o){for(var s=o.getTag(),l=s.length,c="",d=function(p){var f=function(j){return Zh.get(j)}(p);if(f===void 0)return"continue";var g=o.names.get(f),y=s.getGroup(p);if(g===void 0||!g.size||y.length===0)return"continue";var w="".concat(Ja,".g").concat(p,'[id="').concat(f,'"]'),D="";g!==void 0&&g.forEach(function(j){j.length>0&&(D+="".concat(j,","))}),c+="".concat(y).concat(w,'{content:"').concat(D,'"}').concat(s1)},u=0;u<l;u++)d(u);return c}(r)})}return t.registerId=function(e){return Zd(e)},t.prototype.rehydrate=function(){!this.server&&Gh&&Yv(this)},t.prototype.reconstructWithOptions=function(e,i){return i===void 0&&(i=!0),new t(_t(_t({},this.options),e),this.gs,i&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(i){var n=i.useCSSOMInjection,r=i.target;return i.isServer?new fP(r):n?new hP(r):new pP(r)}(this.options),new oP(e)));var e},t.prototype.hasNameForId=function(e,i){return this.names.has(e)&&this.names.get(e).has(i)},t.prototype.registerName=function(e,i){if(Zd(e),this.names.has(e))this.names.get(e).add(i);else{var n=new Set;n.add(i),this.names.set(e,n)}},t.prototype.insertRules=function(e,i,n){this.registerName(e,i),this.getTag().insertRules(Zd(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Zd(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),gP=/&/g,xP=/^\s*\/\/.*$/gm;function VS(t,e){return t.map(function(i){return i.type==="rule"&&(i.value="".concat(e," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(e," ")),i.props=i.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=VS(i.children,e)),i})}function wP(t){var e,i,n,r=t===void 0?el:t,o=r.options,s=o===void 0?el:o,l=r.plugins,c=l===void 0?Up:l,d=function(f,g,y){return y.startsWith(i)&&y.endsWith(i)&&y.replaceAll(i,"").length>0?".".concat(e):f},u=c.slice();u.push(function(f){f.type===Op&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(gP,i).replace(n,d))}),s.prefix&&u.push(W6),u.push($6);var p=function(f,g,y,w){g===void 0&&(g=""),y===void 0&&(y=""),w===void 0&&(w="&"),e=w,i=g,n=new RegExp("\\".concat(i,"\\b"),"g");var D=f.replace(xP,""),j=N6(y||g?"".concat(y," ").concat(g," { ").concat(D," }"):D);s.namespace&&(j=VS(j,s.namespace));var b=[];return Yh(j,B6(u.concat(V6(function(v){return b.push(v)})))),b};return p.hash=c.length?c.reduce(function(f,g){return g.name||Cs(15),va(f,g.name)},FS).toString():"",p}var vP=new qh,sg=wP(),WS=q.createContext({shouldForwardProp:void 0,styleSheet:vP,stylis:sg});WS.Consumer;q.createContext(void 0);function ag(){return T.useContext(WS)}var US=function(){function t(e,i){var n=this;this.inject=function(r,o){o===void 0&&(o=sg);var s=n.name+o.hash;r.hasNameForId(n.id,s)||r.insertRules(n.id,s,o(n.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=i,c1(this,function(){throw Cs(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=sg),this.name+e.hash},t}(),yP=function(t){return t>="A"&&t<="Z"};function Xv(t){for(var e="",i=0;i<t.length;i++){var n=t[i];if(i===1&&n==="-"&&t[0]==="-")return t;yP(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var HS=function(t){return t==null||t===!1||t===""},YS=function(t){var e,i,n=[];for(var r in t){var o=t[r];t.hasOwnProperty(r)&&!HS(o)&&(Array.isArray(o)&&o.isCss||_s(o)?n.push("".concat(Xv(r),":"),o,";"):Jc(o)?n.push.apply(n,qa(qa(["".concat(r," {")],YS(o),!1),["}"],!1)):n.push("".concat(Xv(r),": ").concat((e=r,(i=o)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||e in U6||e.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return n};function uo(t,e,i,n){if(HS(t))return[];if(l1(t))return[".".concat(t.styledComponentId)];if(_s(t)){if(!_s(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var r=t(e);return uo(r,e,i,n)}var o;return t instanceof US?i?(t.inject(i,n),[t.getName(n)]):[t]:Jc(t)?YS(t):Array.isArray(t)?Array.prototype.concat.apply(Up,t.map(function(s){return uo(s,e,i,n)})):[t.toString()]}function GS(t){for(var e=0;e<t.length;e+=1){var i=t[e];if(_s(i)&&!l1(i))return!1}return!0}var bP=RS(Wp),kP=function(){function t(e,i,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&GS(e),this.componentId=i,this.baseHash=va(bP,i),this.baseStyle=n,qh.registerId(i)}return t.prototype.generateAndInjectStyles=function(e,i,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,i,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))r=rs(r,this.staticRulesId);else{var o=Xh(uo(this.rules,e,i,n)),s=rg(va(this.baseHash,o)>>>0);if(!i.hasNameForId(this.componentId,s)){var l=n(o,".".concat(s),void 0,this.componentId);i.insertRules(this.componentId,s,l)}r=rs(r,s),this.staticRulesId=s}else{for(var c=va(this.baseHash,n.hash),d="",u=0;u<this.rules.length;u++){var p=this.rules[u];if(typeof p=="string")d+=p;else if(p){var f=Xh(uo(p,e,i,n));c=va(c,f+u),d+=f}}if(d){var g=rg(c>>>0);i.hasNameForId(this.componentId,g)||i.insertRules(this.componentId,g,n(d,".".concat(g),void 0,this.componentId)),r=rs(r,g)}}return r},t}(),tl=q.createContext(void 0);tl.Consumer;function jP(t){var e=q.useContext(tl),i=T.useMemo(function(){return function(n,r){if(!n)throw Cs(14);if(_s(n)){var o=n(r);return o}if(Array.isArray(n)||typeof n!="object")throw Cs(8);return r?_t(_t({},r),n):n}(t.theme,e)},[t.theme,e]);return t.children?q.createElement(tl.Provider,{value:i},t.children):null}var Bf={};function SP(t,e,i){var n=l1(t),r=t,o=!$f(t),s=e.attrs,l=s===void 0?Up:s,c=e.componentId,d=c===void 0?function(h,x){var k=typeof h!="string"?"sc":Bv(h);Bf[k]=(Bf[k]||0)+1;var S="".concat(k,"-").concat(a1(Wp+k+Bf[k]));return x?"".concat(x,"-").concat(S):S}(e.displayName,e.parentComponentId):c,u=e.displayName,p=u===void 0?function(h){return $f(h)?"styled.".concat(h):"Styled(".concat(q6(h),")")}(t):u,f=e.displayName&&e.componentId?"".concat(Bv(e.displayName),"-").concat(e.componentId):e.componentId||d,g=n&&r.attrs?r.attrs.concat(l).filter(Boolean):l,y=e.shouldForwardProp;if(n&&r.shouldForwardProp){var w=r.shouldForwardProp;if(e.shouldForwardProp){var D=e.shouldForwardProp;y=function(h,x){return w(h,x)&&D(h,x)}}else y=w}var j=new kP(i,f,n?r.componentStyle:void 0);function b(h,x){return function(k,S,_){var C=k.attrs,E=k.componentStyle,z=k.defaultProps,A=k.foldedComponentIds,L=k.styledComponentId,N=k.target,W=q.useContext(tl),V=ag(),$=k.shouldForwardProp||V.shouldForwardProp,I=MS(S,W,z)||el,M=function(fe,ue,me){for(var Le,je=_t(_t({},ue),{className:void 0,theme:me}),Tt=0;Tt<fe.length;Tt+=1){var Se=_s(Le=fe[Tt])?Le(je):Le;for(var Me in Se)je[Me]=Me==="className"?rs(je[Me],Se[Me]):Me==="style"?_t(_t({},je[Me]),Se[Me]):Se[Me]}return ue.className&&(je.className=rs(je.className,ue.className)),je}(C,S,I),P=M.as||N,R={};for(var U in M)M[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&M.theme===I||(U==="forwardedAs"?R.as=M.forwardedAs:$&&!$(U,P)||(R[U]=M[U]));var ne=function(fe,ue){var me=ag(),Le=fe.generateAndInjectStyles(ue,me.styleSheet,me.stylis);return Le}(E,M),Z=rs(A,L);return ne&&(Z+=" "+ne),M.className&&(Z+=" "+M.className),R[$f(P)&&!zS.has(P)?"class":"className"]=Z,_&&(R.ref=_),T.createElement(P,R)}(v,h,x)}b.displayName=p;var v=q.forwardRef(b);return v.attrs=g,v.componentStyle=j,v.displayName=p,v.shouldForwardProp=y,v.foldedComponentIds=n?rs(r.foldedComponentIds,r.styledComponentId):"",v.styledComponentId=f,v.target=n?r.target:t,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=n?function(x){for(var k=[],S=1;S<arguments.length;S++)k[S-1]=arguments[S];for(var _=0,C=k;_<C.length;_++)og(x,C[_],!0);return x}({},r.defaultProps,h):h}}),c1(v,function(){return".".concat(v.styledComponentId)}),o&&$S(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Zv(t,e){for(var i=[t[0]],n=0,r=e.length;n<r;n+=1)i.push(e[n],t[n+1]);return i}var qv=function(t){return Object.assign(t,{isCss:!0})};function d1(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(_s(t)||Jc(t))return qv(uo(Zv(Up,qa([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?uo(n):qv(uo(Zv(n,e)))}function lg(t,e,i){if(i===void 0&&(i=el),!e)throw Cs(1,e);var n=function(r){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,i,d1.apply(void 0,qa([r],o,!1)))};return n.attrs=function(r){return lg(t,e,_t(_t({},i),{attrs:Array.prototype.concat(i.attrs,r).filter(Boolean)}))},n.withConfig=function(r){return lg(t,e,_t(_t({},i),r))},n}var XS=function(t){return lg(SP,t)},m=XS;zS.forEach(function(t){m[t]=XS(t)});var DP=function(){function t(e,i){this.rules=e,this.componentId=i,this.isStatic=GS(e),qh.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,i,n,r){var o=r(Xh(uo(this.rules,i,n,r)),""),s=this.componentId+e;n.insertRules(s,s,o)},t.prototype.removeStyles=function(e,i){i.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,i,n,r){e>2&&qh.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,i,n,r)},t}();function Pr(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];var n=d1.apply(void 0,qa([t],e,!1)),r="sc-global-".concat(a1(JSON.stringify(n))),o=new DP(n,r),s=function(c){var d=ag(),u=q.useContext(tl),p=q.useRef(d.styleSheet.allocateGSInstance(r)).current;return d.styleSheet.server&&l(p,c,d.styleSheet,u,d.stylis),q.useLayoutEffect(function(){if(!d.styleSheet.server)return l(p,c,d.styleSheet,u,d.stylis),function(){return o.removeStyles(p,d.styleSheet)}},[p,c,d.styleSheet,u,d.stylis]),null};function l(c,d,u,p,f){if(o.isStatic)o.renderStyles(c,Y6,u,f);else{var g=_t(_t({},d),{theme:MS(d,p,s.defaultProps)});o.renderStyles(c,g,u,f)}}return q.memo(s)}function vd(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];var n=Xh(d1.apply(void 0,qa([t],e,!1))),r=a1(n);return new US(r,n)}const _P={background:"#191c24",backgroundRgb:"25, 28, 36",text:"#ffffff",textRgb:"255, 255, 255",accent1:"#4CAF50",accent1Rgb:"76, 175, 80",accent2:"#2196F3",accent2Rgb:"33, 150, 243",cardBackground:"#2a2f3a",cardBackgroundRgb:"42, 47, 58",headerBackground:"rgba(25, 28, 36, 0.9)",transition:"all 0.3s ease",border:"#3a3f4a"},CP=T.createContext(void 0),PP=({children:t})=>a.jsx(CP.Provider,{value:{},children:a.jsx(jP,{theme:_P,children:t})}),TP="/Nooshin-Shahsavan-portfolio/assets/logoweb.29eb1c09.png",EP=m.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  padding: 1rem 0;
  box-shadow: none;
`,IP=m.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,AP=m(bn)`
  font-size: 1.7rem;
  font-weight: 700;
  color: #181818;
  text-decoration: none;
`,MP=m.img`
  height: 40px;
  width: auto;
  display: block;
`,zP=m.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`,qd=m(bn)`
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
`,FP=m.button`
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
`,Vf=m.span`
  width: 28px;
  height: 3px;
  background: #000;
  margin: 3px 0;
  border-radius: 2px;
  transition: 0.4s;
`,RP=m.div`
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
`,Qd=m(bn)`
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
`,LP=m.button`
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
`,NP=m.div`
  display: ${({open:t})=>t?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.35);
  z-index: 1199;
`,ZS=()=>{const[t,e]=T.useState(!1),i=()=>e(r=>!r),n=()=>e(!1);return a.jsx(EP,{children:a.jsxs(IP,{children:[a.jsx(AP,{to:"/",children:a.jsx(MP,{src:TP,alt:"Logo"})}),a.jsxs(zP,{children:[a.jsx(qd,{to:"/",children:"Home"}),a.jsx(qd,{to:"/about",children:"About"}),a.jsx(qd,{to:"/work",children:"Work"}),a.jsx(qd,{to:"/resume",children:"Resume"})]}),a.jsxs(FP,{"aria-label":"Open menu",onClick:i,children:[a.jsx(Vf,{style:{transform:t?"rotate(45deg) translate(5px, 6px)":"none"}}),a.jsx(Vf,{style:{opacity:t?0:1}}),a.jsx(Vf,{style:{transform:t?"rotate(-45deg) translate(7px, -7px)":"none"}})]}),a.jsx(NP,{open:t,onClick:n}),a.jsxs(RP,{open:t,children:[a.jsx(LP,{"aria-label":"Close menu",onClick:n,children:"×"}),a.jsx(Qd,{to:"/",onClick:n,style:{"--delay":"0.1s"},children:"Home"}),a.jsx(Qd,{to:"/about",onClick:n,style:{"--delay":"0.25s"},children:"About"}),a.jsx(Qd,{to:"/work",onClick:n,style:{"--delay":"0.4s"},children:"Work"}),a.jsx(Qd,{to:"/resume",onClick:n,style:{"--delay":"0.55s"},children:"Resume"})]})]})})},OP=Pr`
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
`,$P=m.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--background);
`,BP=m.main`
  flex: 1;
  width: 100%;
  padding-top: 80px; // Account for fixed header
  background-color: var(--background);
`,VP=({children:t})=>a.jsxs($P,{children:[a.jsxs(jS,{children:[a.jsx("link",{rel:"icon",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDQtMTBUMTU6NTY6NDcrMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDQtMTBUMTU6NTY6NDcrMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTA0LTEwVDE1OjU2OjQ3KzA0OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgc3RFdnQ6d2hlbj0iMjAyNC0wNC0xMFQxNTo1Njo0NyswNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FAZTgBw54cr/upn/vCptEQA0xCMxM4ZGxI9cmQcA5sJgCsBJTjiletnMD6MqAFmyI04+Hbo7cQ8A0GYMpgDM2cxJ1cvi+Fuql4X3VAFYmP0xPYL+KKZHUSdDAYAkDKYANMzMadXL4vgTAIZVgPw5NoS+8cOboQBAlhlMAUjulBOrJ46sAGTXjojYHcffCn3SiVAAoB0YTAFoKSeMq8d+rArvrALUyyMxPYLuDiMoAJBTBlMA2trMswAXx/Tp1SVxfGj1NADQ7k68Cv96TA+gL/hIEgDA2RlMAeAUJ4ysl0XEQEy/vzoQngkA0nlh5ofxEwCgwQymAFAnJzwXcGxwXXXCf784YRqQDcdGz2NX3o/9d9feAQAyxGAKABlxwuAaMf2EQMz88ZIwukJqx8bO12P6lGfE9CnPCIMnAEBbMZgCQBs6ZXw99rRAxPTzAhGeGKD97YiIYyPmj2b+czSOj52uswMAcFoGUwBgzsql6okj7JI4eXw9dir2xD/2kS0ijn+E6JjXT/njY1fUIyJiaHjw4QAAgCYzmAIALa9cqq4/y18+21875tSRd66uWsA/e6JHFvDPnjo+nskZR0gDJQAARPz/FWHRF6/F5pIAAAAASUVORK5CYII="}),a.jsx("link",{rel:"icon",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDQtMTBUMTU6NTY6NDcrMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDQtMTBUMTU6NTY6NDcrMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTA0LTEwVDE1OjU2OjQ3KzA0OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgc3RFdnQ6d2hlbj0iMjAyNC0wNC0xMFQxNTo1Njo0NyswNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FAZTgBw54cr/upn/vCptEQA0xCMxM4ZGxI9cmQcA5sJgCsBJTjiletnMD6MqAFmyI04+Hbo7cQ8A0GYMpgDM2cxJ1cvi+Fuql4X3VAFYmP0xPYL+KKZHUSdDAYAkDKYANMzMadXL4vgTAIZVgPw5NoS+8cOboQBAlhlMAUjulBOrJ46sAGTXjojYHcffCn3SiVAAoB0YTAFoKSeMq8d+rArvrALUyyMxPYLuDiMoAJBTBlMA2trMswAXx/Tp1SVxfGj1NADQ7k68Cv96TA+gL/hIEgDA2RlMAeAUJ4ysl0XEQEy/vzoQngkA0nlh5ofxEwCgwQymAFAnJzwXcGxwXXXCf784YRqQDcdGz2NX3o/9d9feAQAyxGAKABlxwuAaMf2EQMz88ZIwukJqx8bO12P6lGfE9CnPCIMnAEBbMZgCQBs6ZXw99rRAxPTzAhGeGKD97YiIYyPmj2b+czSOj52uswMAcFoGUwBgzsql6okj7JI4eXw9dir2xD/2kS0ijn+E6JjXT/njY1fUIyJiaHjw4QAAgCYzmAIALa9cqq4/y18+21875tSRd66uWsA/e6JHFvDPnjo+nskZR0gDJQAARPz/FWHRF6/F5pIAAAAASUVORK5CYII="}),a.jsx("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),a.jsx("link",{rel:"shortcut icon",href:"/favicon.ico"})]}),a.jsx(OP,{}),a.jsx(ZS,{}),a.jsx(BP,{children:t})]}),u1=T.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Hp=T.createContext({}),Yp=T.createContext(null),Gp=typeof document<"u",gl=Gp?T.useLayoutEffect:T.useEffect,qS=T.createContext({strict:!1}),h1=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),WP="framerAppearId",QS="data-"+h1(WP);function UP(t,e,i,n){const{visualElement:r}=T.useContext(Hp),o=T.useContext(qS),s=T.useContext(Yp),l=T.useContext(u1).reducedMotion,c=T.useRef();n=n||o.renderer,!c.current&&n&&(c.current=n(t,{visualState:e,parent:r,props:i,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:l}));const d=c.current;T.useInsertionEffect(()=>{d&&d.update(i,s)});const u=T.useRef(!!(i[QS]&&!window.HandoffComplete));return gl(()=>{d&&(d.render(),u.current&&d.animationState&&d.animationState.animateChanges())}),T.useEffect(()=>{d&&(d.updateFeatures(),!u.current&&d.animationState&&d.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),d}function ya(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function HP(t,e,i){return T.useCallback(n=>{n&&t.mount&&t.mount(n),e&&(n?e.mount(n):e.unmount()),i&&(typeof i=="function"?i(n):ya(i)&&(i.current=n))},[e])}function ed(t){return typeof t=="string"||Array.isArray(t)}function Xp(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const p1=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],f1=["initial",...p1];function Zp(t){return Xp(t.animate)||f1.some(e=>ed(t[e]))}function KS(t){return!!(Zp(t)||t.variants)}function YP(t,e){if(Zp(t)){const{initial:i,animate:n}=t;return{initial:i===!1||ed(i)?i:void 0,animate:ed(n)?n:void 0}}return t.inherit!==!1?e:{}}function GP(t){const{initial:e,animate:i}=YP(t,T.useContext(Hp));return T.useMemo(()=>({initial:e,animate:i}),[Qv(e),Qv(i)])}function Qv(t){return Array.isArray(t)?t.join(" "):t}const Kv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},td={};for(const t in Kv)td[t]={isEnabled:e=>Kv[t].some(i=>!!e[i])};function XP(t){for(const e in t)td[e]={...td[e],...t[e]}}const m1=T.createContext({}),JS=T.createContext({}),ZP=Symbol.for("motionComponentSymbol");function qP({preloadedFeatures:t,createVisualElement:e,useRender:i,useVisualState:n,Component:r}){t&&XP(t);function o(l,c){let d;const u={...T.useContext(u1),...l,layoutId:QP(l)},{isStatic:p}=u,f=GP(l),g=n(l,p);if(!p&&Gp){f.visualElement=UP(r,g,u,e);const y=T.useContext(JS),w=T.useContext(qS).strict;f.visualElement&&(d=f.visualElement.loadFeatures(u,w,t,y))}return T.createElement(Hp.Provider,{value:f},d&&f.visualElement?T.createElement(d,{visualElement:f.visualElement,...u}):null,i(r,l,HP(g,f.visualElement,c),g,p,f.visualElement))}const s=T.forwardRef(o);return s[ZP]=r,s}function QP({layoutId:t}){const e=T.useContext(m1).id;return e&&t!==void 0?e+"-"+t:t}function KP(t){function e(n,r={}){return qP(t(n,r))}if(typeof Proxy>"u")return e;const i=new Map;return new Proxy(e,{get:(n,r)=>(i.has(r)||i.set(r,e(r)),i.get(r))})}const JP=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function g1(t){return typeof t!="string"||t.includes("-")?!1:!!(JP.indexOf(t)>-1||/[A-Z]/.test(t))}const Qh={};function eT(t){Object.assign(Qh,t)}const yd=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Rs=new Set(yd);function eD(t,{layout:e,layoutId:i}){return Rs.has(t)||t.startsWith("origin")||(e||i!==void 0)&&(!!Qh[t]||t==="opacity")}const ki=t=>!!(t&&t.getVelocity),tT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},iT=yd.length;function nT(t,{enableHardwareAcceleration:e=!0,allowTransformNone:i=!0},n,r){let o="";for(let s=0;s<iT;s++){const l=yd[s];if(t[l]!==void 0){const c=tT[l]||l;o+=`${c}(${t[l]}) `}}return e&&!t.z&&(o+="translateZ(0)"),o=o.trim(),r?o=r(t,n?"":o):i&&n&&(o="none"),o}const tD=t=>e=>typeof e=="string"&&e.startsWith(t),iD=tD("--"),cg=tD("var(--"),rT=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,oT=(t,e)=>e&&typeof t=="number"?e.transform(t):t,bo=(t,e,i)=>Math.min(Math.max(i,t),e),Ls={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},pc={...Ls,transform:t=>bo(0,1,t)},Kd={...Ls,default:1},fc=t=>Math.round(t*1e5)/1e5,qp=/(-)?([\d]*\.?[\d])+/g,nD=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,sT=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function bd(t){return typeof t=="string"}const kd=t=>({test:e=>bd(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Or=kd("deg"),Hn=kd("%"),K=kd("px"),aT=kd("vh"),lT=kd("vw"),Jv={...Hn,parse:t=>Hn.parse(t)/100,transform:t=>Hn.transform(t*100)},ey={...Ls,transform:Math.round},rD={borderWidth:K,borderTopWidth:K,borderRightWidth:K,borderBottomWidth:K,borderLeftWidth:K,borderRadius:K,radius:K,borderTopLeftRadius:K,borderTopRightRadius:K,borderBottomRightRadius:K,borderBottomLeftRadius:K,width:K,maxWidth:K,height:K,maxHeight:K,size:K,top:K,right:K,bottom:K,left:K,padding:K,paddingTop:K,paddingRight:K,paddingBottom:K,paddingLeft:K,margin:K,marginTop:K,marginRight:K,marginBottom:K,marginLeft:K,rotate:Or,rotateX:Or,rotateY:Or,rotateZ:Or,scale:Kd,scaleX:Kd,scaleY:Kd,scaleZ:Kd,skew:Or,skewX:Or,skewY:Or,distance:K,translateX:K,translateY:K,translateZ:K,x:K,y:K,z:K,perspective:K,transformPerspective:K,opacity:pc,originX:Jv,originY:Jv,originZ:K,zIndex:ey,fillOpacity:pc,strokeOpacity:pc,numOctaves:ey};function x1(t,e,i,n){const{style:r,vars:o,transform:s,transformOrigin:l}=t;let c=!1,d=!1,u=!0;for(const p in e){const f=e[p];if(iD(p)){o[p]=f;continue}const g=rD[p],y=oT(f,g);if(Rs.has(p)){if(c=!0,s[p]=y,!u)continue;f!==(g.default||0)&&(u=!1)}else p.startsWith("origin")?(d=!0,l[p]=y):r[p]=y}if(e.transform||(c||n?r.transform=nT(t.transform,i,u,n):r.transform&&(r.transform="none")),d){const{originX:p="50%",originY:f="50%",originZ:g=0}=l;r.transformOrigin=`${p} ${f} ${g}`}}const w1=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function oD(t,e,i){for(const n in e)!ki(e[n])&&!eD(n,i)&&(t[n]=e[n])}function cT({transformTemplate:t},e,i){return T.useMemo(()=>{const n=w1();return x1(n,e,{enableHardwareAcceleration:!i},t),Object.assign({},n.vars,n.style)},[e])}function dT(t,e,i){const n=t.style||{},r={};return oD(r,n,t),Object.assign(r,cT(t,e,i)),t.transformValues?t.transformValues(r):r}function uT(t,e,i){const n={},r=dT(t,e,i);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n}const hT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Kh(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||hT.has(t)}let sD=t=>!Kh(t);function pT(t){t&&(sD=e=>e.startsWith("on")?!Kh(e):t(e))}try{pT(require("@emotion/is-prop-valid").default)}catch{}function fT(t,e,i){const n={};for(const r in t)r==="values"&&typeof t.values=="object"||(sD(r)||i===!0&&Kh(r)||!e&&!Kh(r)||t.draggable&&r.startsWith("onDrag"))&&(n[r]=t[r]);return n}function ty(t,e,i){return typeof t=="string"?t:K.transform(e+i*t)}function mT(t,e,i){const n=ty(e,t.x,t.width),r=ty(i,t.y,t.height);return`${n} ${r}`}const gT={offset:"stroke-dashoffset",array:"stroke-dasharray"},xT={offset:"strokeDashoffset",array:"strokeDasharray"};function wT(t,e,i=1,n=0,r=!0){t.pathLength=1;const o=r?gT:xT;t[o.offset]=K.transform(-n);const s=K.transform(e),l=K.transform(i);t[o.array]=`${s} ${l}`}function v1(t,{attrX:e,attrY:i,attrScale:n,originX:r,originY:o,pathLength:s,pathSpacing:l=1,pathOffset:c=0,...d},u,p,f){if(x1(t,d,u,f),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:g,style:y,dimensions:w}=t;g.transform&&(w&&(y.transform=g.transform),delete g.transform),w&&(r!==void 0||o!==void 0||y.transform)&&(y.transformOrigin=mT(w,r!==void 0?r:.5,o!==void 0?o:.5)),e!==void 0&&(g.x=e),i!==void 0&&(g.y=i),n!==void 0&&(g.scale=n),s!==void 0&&wT(g,s,l,c,!1)}const aD=()=>({...w1(),attrs:{}}),y1=t=>typeof t=="string"&&t.toLowerCase()==="svg";function vT(t,e,i,n){const r=T.useMemo(()=>{const o=aD();return v1(o,e,{enableHardwareAcceleration:!1},y1(n),t.transformTemplate),{...o.attrs,style:{...o.style}}},[e]);if(t.style){const o={};oD(o,t.style,t),r.style={...o,...r.style}}return r}function yT(t=!1){return(i,n,r,{latestValues:o},s)=>{const c=(g1(i)?vT:uT)(n,o,s,i),u={...fT(n,typeof i=="string",t),...c,ref:r},{children:p}=n,f=T.useMemo(()=>ki(p)?p.get():p,[p]);return T.createElement(i,{...u,children:f})}}function lD(t,{style:e,vars:i},n,r){Object.assign(t.style,e,r&&r.getProjectionStyles(n));for(const o in i)t.style.setProperty(o,i[o])}const cD=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function dD(t,e,i,n){lD(t,e,void 0,n);for(const r in e.attrs)t.setAttribute(cD.has(r)?r:h1(r),e.attrs[r])}function b1(t,e){const{style:i}=t,n={};for(const r in i)(ki(i[r])||e.style&&ki(e.style[r])||eD(r,t))&&(n[r]=i[r]);return n}function uD(t,e){const i=b1(t,e);for(const n in t)if(ki(t[n])||ki(e[n])){const r=yd.indexOf(n)!==-1?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n;i[r]=t[n]}return i}function k1(t,e,i,n={},r={}){return typeof e=="function"&&(e=e(i!==void 0?i:t.custom,n,r)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(i!==void 0?i:t.custom,n,r)),e}function xl(t){const e=T.useRef(null);return e.current===null&&(e.current=t()),e.current}const Jh=t=>Array.isArray(t),bT=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),kT=t=>Jh(t)?t[t.length-1]||0:t;function sh(t){const e=ki(t)?t.get():t;return bT(e)?e.toValue():e}function jT({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:i},n,r,o){const s={latestValues:ST(n,r,o,t),renderState:e()};return i&&(s.mount=l=>i(n,l,s)),s}const hD=t=>(e,i)=>{const n=T.useContext(Hp),r=T.useContext(Yp),o=()=>jT(t,e,n,r);return i?o():xl(o)};function ST(t,e,i,n){const r={},o=n(t,{});for(const f in o)r[f]=sh(o[f]);let{initial:s,animate:l}=t;const c=Zp(t),d=KS(t);e&&d&&!c&&t.inherit!==!1&&(s===void 0&&(s=e.initial),l===void 0&&(l=e.animate));let u=i?i.initial===!1:!1;u=u||s===!1;const p=u?l:s;return p&&typeof p!="boolean"&&!Xp(p)&&(Array.isArray(p)?p:[p]).forEach(g=>{const y=k1(t,g);if(!y)return;const{transitionEnd:w,transition:D,...j}=y;for(const b in j){let v=j[b];if(Array.isArray(v)){const h=u?v.length-1:0;v=v[h]}v!==null&&(r[b]=v)}for(const b in w)r[b]=w[b]}),r}const Ze=t=>t;class iy{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const i=this.order.indexOf(e);i!==-1&&(this.order.splice(i,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function DT(t){let e=new iy,i=new iy,n=0,r=!1,o=!1;const s=new WeakSet,l={schedule:(c,d=!1,u=!1)=>{const p=u&&r,f=p?e:i;return d&&s.add(c),f.add(c)&&p&&r&&(n=e.order.length),c},cancel:c=>{i.remove(c),s.delete(c)},process:c=>{if(r){o=!0;return}if(r=!0,[e,i]=[i,e],i.clear(),n=e.order.length,n)for(let d=0;d<n;d++){const u=e.order[d];u(c),s.has(u)&&(l.schedule(u),t())}r=!1,o&&(o=!1,l.process(c))}};return l}const Jd=["prepare","read","update","preRender","render","postRender"],_T=40;function CT(t,e){let i=!1,n=!0;const r={delta:0,timestamp:0,isProcessing:!1},o=Jd.reduce((p,f)=>(p[f]=DT(()=>i=!0),p),{}),s=p=>o[p].process(r),l=()=>{const p=performance.now();i=!1,r.delta=n?1e3/60:Math.max(Math.min(p-r.timestamp,_T),1),r.timestamp=p,r.isProcessing=!0,Jd.forEach(s),r.isProcessing=!1,i&&e&&(n=!1,t(l))},c=()=>{i=!0,n=!0,r.isProcessing||t(l)};return{schedule:Jd.reduce((p,f)=>{const g=o[f];return p[f]=(y,w=!1,D=!1)=>(i||c(),g.schedule(y,w,D)),p},{}),cancel:p=>Jd.forEach(f=>o[f].cancel(p)),state:r,steps:o}}const{schedule:ve,cancel:Pn,state:Mt,steps:Wf}=CT(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ze,!0),PT={useVisualState:hD({scrapeMotionValuesFromProps:uD,createRenderState:aD,onMount:(t,e,{renderState:i,latestValues:n})=>{ve.read(()=>{try{i.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{i.dimensions={x:0,y:0,width:0,height:0}}}),ve.render(()=>{v1(i,n,{enableHardwareAcceleration:!1},y1(e.tagName),t.transformTemplate),dD(e,i)})}})},TT={useVisualState:hD({scrapeMotionValuesFromProps:b1,createRenderState:w1})};function ET(t,{forwardMotionProps:e=!1},i,n){return{...g1(t)?PT:TT,preloadedFeatures:i,useRender:yT(e),createVisualElement:n,Component:t}}function mr(t,e,i,n={passive:!0}){return t.addEventListener(e,i,n),()=>t.removeEventListener(e,i)}const pD=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Qp(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const IT=t=>e=>pD(e)&&t(e,Qp(e));function wr(t,e,i,n){return mr(t,e,IT(i),n)}const AT=(t,e)=>i=>e(t(i)),ho=(...t)=>t.reduce(AT);function fD(t){let e=null;return()=>{const i=()=>{e=null};return e===null?(e=t,i):!1}}const ny=fD("dragHorizontal"),ry=fD("dragVertical");function mD(t){let e=!1;if(t==="y")e=ry();else if(t==="x")e=ny();else{const i=ny(),n=ry();i&&n?e=()=>{i(),n()}:(i&&i(),n&&n())}return e}function gD(){const t=mD(!0);return t?(t(),!1):!0}class To{constructor(e){this.isMounted=!1,this.node=e}update(){}}function oy(t,e){const i="pointer"+(e?"enter":"leave"),n="onHover"+(e?"Start":"End"),r=(o,s)=>{if(o.pointerType==="touch"||gD())return;const l=t.getProps();t.animationState&&l.whileHover&&t.animationState.setActive("whileHover",e),l[n]&&ve.update(()=>l[n](o,s))};return wr(t.current,i,r,{passive:!t.getProps()[n]})}class MT extends To{mount(){this.unmount=ho(oy(this.node,!0),oy(this.node,!1))}unmount(){}}class zT extends To{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ho(mr(this.node.current,"focus",()=>this.onFocus()),mr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const xD=(t,e)=>e?t===e?!0:xD(t,e.parentElement):!1;function Uf(t,e){if(!e)return;const i=new PointerEvent("pointer"+t);e(i,Qp(i))}class FT extends To{constructor(){super(...arguments),this.removeStartListeners=Ze,this.removeEndListeners=Ze,this.removeAccessibleListeners=Ze,this.startPointerPress=(e,i)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),o=wr(window,"pointerup",(l,c)=>{if(!this.checkPressEnd())return;const{onTap:d,onTapCancel:u,globalTapTarget:p}=this.node.getProps();ve.update(()=>{!p&&!xD(this.node.current,l.target)?u&&u(l,c):d&&d(l,c)})},{passive:!(n.onTap||n.onPointerUp)}),s=wr(window,"pointercancel",(l,c)=>this.cancelPress(l,c),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=ho(o,s),this.startPress(e,i)},this.startAccessiblePress=()=>{const e=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=l=>{l.key!=="Enter"||!this.checkPressEnd()||Uf("up",(c,d)=>{const{onTap:u}=this.node.getProps();u&&ve.update(()=>u(c,d))})};this.removeEndListeners(),this.removeEndListeners=mr(this.node.current,"keyup",s),Uf("down",(l,c)=>{this.startPress(l,c)})},i=mr(this.node.current,"keydown",e),n=()=>{this.isPressing&&Uf("cancel",(o,s)=>this.cancelPress(o,s))},r=mr(this.node.current,"blur",n);this.removeAccessibleListeners=ho(i,r)}}startPress(e,i){this.isPressing=!0;const{onTapStart:n,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&ve.update(()=>n(e,i))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!gD()}cancelPress(e,i){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&ve.update(()=>n(e,i))}mount(){const e=this.node.getProps(),i=wr(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=mr(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=ho(i,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const dg=new WeakMap,Hf=new WeakMap,RT=t=>{const e=dg.get(t.target);e&&e(t)},LT=t=>{t.forEach(RT)};function NT({root:t,...e}){const i=t||document;Hf.has(i)||Hf.set(i,{});const n=Hf.get(i),r=JSON.stringify(e);return n[r]||(n[r]=new IntersectionObserver(LT,{root:t,...e})),n[r]}function OT(t,e,i){const n=NT(e);return dg.set(t,i),n.observe(t),()=>{dg.delete(t),n.unobserve(t)}}const $T={some:0,all:1};class BT extends To{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:i,margin:n,amount:r="some",once:o}=e,s={root:i?i.current:void 0,rootMargin:n,threshold:typeof r=="number"?r:$T[r]},l=c=>{const{isIntersecting:d}=c;if(this.isInView===d||(this.isInView=d,o&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:u,onViewportLeave:p}=this.node.getProps(),f=d?u:p;f&&f(c)};return OT(this.node.current,s,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:i}=this.node;["amount","margin","root"].some(VT(e,i))&&this.startObserver()}unmount(){}}function VT({viewport:t={}},{viewport:e={}}={}){return i=>t[i]!==e[i]}const WT={inView:{Feature:BT},tap:{Feature:FT},focus:{Feature:zT},hover:{Feature:MT}};function wD(t,e){if(!Array.isArray(e))return!1;const i=e.length;if(i!==t.length)return!1;for(let n=0;n<i;n++)if(e[n]!==t[n])return!1;return!0}function UT(t){const e={};return t.values.forEach((i,n)=>e[n]=i.get()),e}function HT(t){const e={};return t.values.forEach((i,n)=>e[n]=i.getVelocity()),e}function Kp(t,e,i){const n=t.getProps();return k1(n,e,i!==void 0?i:n.custom,UT(t),HT(t))}let vD=Ze,Jp=Ze;const po=t=>t*1e3,vr=t=>t/1e3,YT={current:!1},yD=t=>Array.isArray(t)&&typeof t[0]=="number";function bD(t){return!!(!t||typeof t=="string"&&kD[t]||yD(t)||Array.isArray(t)&&t.every(bD))}const Xl=([t,e,i,n])=>`cubic-bezier(${t}, ${e}, ${i}, ${n})`,kD={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Xl([0,.65,.55,1]),circOut:Xl([.55,0,1,.45]),backIn:Xl([.31,.01,.66,-.59]),backOut:Xl([.33,1.53,.69,.99])};function jD(t){if(t)return yD(t)?Xl(t):Array.isArray(t)?t.map(jD):kD[t]}function GT(t,e,i,{delay:n=0,duration:r,repeat:o=0,repeatType:s="loop",ease:l,times:c}={}){const d={[e]:i};c&&(d.offset=c);const u=jD(l);return Array.isArray(u)&&(d.easing=u),t.animate(d,{delay:n,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function XT(t,{repeat:e,repeatType:i="loop"}){const n=e&&i!=="loop"&&e%2===1?0:t.length-1;return t[n]}const SD=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t,ZT=1e-7,qT=12;function QT(t,e,i,n,r){let o,s,l=0;do s=e+(i-e)/2,o=SD(s,n,r)-t,o>0?i=s:e=s;while(Math.abs(o)>ZT&&++l<qT);return s}function jd(t,e,i,n){if(t===e&&i===n)return Ze;const r=o=>QT(o,0,1,t,i);return o=>o===0||o===1?o:SD(r(o),e,n)}const KT=jd(.42,0,1,1),JT=jd(0,0,.58,1),DD=jd(.42,0,.58,1),eE=t=>Array.isArray(t)&&typeof t[0]!="number",_D=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,CD=t=>e=>1-t(1-e),j1=t=>1-Math.sin(Math.acos(t)),PD=CD(j1),tE=_D(j1),TD=jd(.33,1.53,.69,.99),S1=CD(TD),iE=_D(S1),nE=t=>(t*=2)<1?.5*S1(t):.5*(2-Math.pow(2,-10*(t-1))),rE={linear:Ze,easeIn:KT,easeInOut:DD,easeOut:JT,circIn:j1,circInOut:tE,circOut:PD,backIn:S1,backInOut:iE,backOut:TD,anticipate:nE},sy=t=>{if(Array.isArray(t)){Jp(t.length===4);const[e,i,n,r]=t;return jd(e,i,n,r)}else if(typeof t=="string")return rE[t];return t},D1=(t,e)=>i=>!!(bd(i)&&sT.test(i)&&i.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(i,e)),ED=(t,e,i)=>n=>{if(!bd(n))return n;const[r,o,s,l]=n.match(qp);return{[t]:parseFloat(r),[e]:parseFloat(o),[i]:parseFloat(s),alpha:l!==void 0?parseFloat(l):1}},oE=t=>bo(0,255,t),Yf={...Ls,transform:t=>Math.round(oE(t))},os={test:D1("rgb","red"),parse:ED("red","green","blue"),transform:({red:t,green:e,blue:i,alpha:n=1})=>"rgba("+Yf.transform(t)+", "+Yf.transform(e)+", "+Yf.transform(i)+", "+fc(pc.transform(n))+")"};function sE(t){let e="",i="",n="",r="";return t.length>5?(e=t.substring(1,3),i=t.substring(3,5),n=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),i=t.substring(2,3),n=t.substring(3,4),r=t.substring(4,5),e+=e,i+=i,n+=n,r+=r),{red:parseInt(e,16),green:parseInt(i,16),blue:parseInt(n,16),alpha:r?parseInt(r,16)/255:1}}const ug={test:D1("#"),parse:sE,transform:os.transform},ba={test:D1("hsl","hue"),parse:ED("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:i,alpha:n=1})=>"hsla("+Math.round(t)+", "+Hn.transform(fc(e))+", "+Hn.transform(fc(i))+", "+fc(pc.transform(n))+")"},ei={test:t=>os.test(t)||ug.test(t)||ba.test(t),parse:t=>os.test(t)?os.parse(t):ba.test(t)?ba.parse(t):ug.parse(t),transform:t=>bd(t)?t:t.hasOwnProperty("red")?os.transform(t):ba.transform(t)},Be=(t,e,i)=>-i*t+i*e+t;function Gf(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function aE({hue:t,saturation:e,lightness:i,alpha:n}){t/=360,e/=100,i/=100;let r=0,o=0,s=0;if(!e)r=o=s=i;else{const l=i<.5?i*(1+e):i+e-i*e,c=2*i-l;r=Gf(c,l,t+1/3),o=Gf(c,l,t),s=Gf(c,l,t-1/3)}return{red:Math.round(r*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:n}}const Xf=(t,e,i)=>{const n=t*t;return Math.sqrt(Math.max(0,i*(e*e-n)+n))},lE=[ug,os,ba],cE=t=>lE.find(e=>e.test(t));function ay(t){const e=cE(t);let i=e.parse(t);return e===ba&&(i=aE(i)),i}const ID=(t,e)=>{const i=ay(t),n=ay(e),r={...i};return o=>(r.red=Xf(i.red,n.red,o),r.green=Xf(i.green,n.green,o),r.blue=Xf(i.blue,n.blue,o),r.alpha=Be(i.alpha,n.alpha,o),os.transform(r))};function dE(t){var e,i;return isNaN(t)&&bd(t)&&(((e=t.match(qp))===null||e===void 0?void 0:e.length)||0)+(((i=t.match(nD))===null||i===void 0?void 0:i.length)||0)>0}const AD={regex:rT,countKey:"Vars",token:"${v}",parse:Ze},MD={regex:nD,countKey:"Colors",token:"${c}",parse:ei.parse},zD={regex:qp,countKey:"Numbers",token:"${n}",parse:Ls.parse};function Zf(t,{regex:e,countKey:i,token:n,parse:r}){const o=t.tokenised.match(e);o&&(t["num"+i]=o.length,t.tokenised=t.tokenised.replace(e,n),t.values.push(...o.map(r)))}function ep(t){const e=t.toString(),i={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return i.value.includes("var(--")&&Zf(i,AD),Zf(i,MD),Zf(i,zD),i}function FD(t){return ep(t).values}function RD(t){const{values:e,numColors:i,numVars:n,tokenised:r}=ep(t),o=e.length;return s=>{let l=r;for(let c=0;c<o;c++)c<n?l=l.replace(AD.token,s[c]):c<n+i?l=l.replace(MD.token,ei.transform(s[c])):l=l.replace(zD.token,fc(s[c]));return l}}const uE=t=>typeof t=="number"?0:t;function hE(t){const e=FD(t);return RD(t)(e.map(uE))}const ko={test:dE,parse:FD,createTransformer:RD,getAnimatableNone:hE},LD=(t,e)=>i=>`${i>0?e:t}`;function ND(t,e){return typeof t=="number"?i=>Be(t,e,i):ei.test(t)?ID(t,e):t.startsWith("var(")?LD(t,e):$D(t,e)}const OD=(t,e)=>{const i=[...t],n=i.length,r=t.map((o,s)=>ND(o,e[s]));return o=>{for(let s=0;s<n;s++)i[s]=r[s](o);return i}},pE=(t,e)=>{const i={...t,...e},n={};for(const r in i)t[r]!==void 0&&e[r]!==void 0&&(n[r]=ND(t[r],e[r]));return r=>{for(const o in n)i[o]=n[o](r);return i}},$D=(t,e)=>{const i=ko.createTransformer(e),n=ep(t),r=ep(e);return n.numVars===r.numVars&&n.numColors===r.numColors&&n.numNumbers>=r.numNumbers?ho(OD(n.values,r.values),i):LD(t,e)},il=(t,e,i)=>{const n=e-t;return n===0?1:(i-t)/n},ly=(t,e)=>i=>Be(t,e,i);function fE(t){return typeof t=="number"?ly:typeof t=="string"?ei.test(t)?ID:$D:Array.isArray(t)?OD:typeof t=="object"?pE:ly}function mE(t,e,i){const n=[],r=i||fE(t[0]),o=t.length-1;for(let s=0;s<o;s++){let l=r(t[s],t[s+1]);if(e){const c=Array.isArray(e)?e[s]||Ze:e;l=ho(c,l)}n.push(l)}return n}function ef(t,e,{clamp:i=!0,ease:n,mixer:r}={}){const o=t.length;if(Jp(o===e.length),o===1)return()=>e[0];t[0]>t[o-1]&&(t=[...t].reverse(),e=[...e].reverse());const s=mE(e,n,r),l=s.length,c=d=>{let u=0;if(l>1)for(;u<t.length-2&&!(d<t[u+1]);u++);const p=il(t[u],t[u+1],d);return s[u](p)};return i?d=>c(bo(t[0],t[o-1],d)):c}function gE(t,e){const i=t[t.length-1];for(let n=1;n<=e;n++){const r=il(0,e,n);t.push(Be(i,1,r))}}function BD(t){const e=[0];return gE(e,t.length-1),e}function xE(t,e){return t.map(i=>i*e)}function wE(t,e){return t.map(()=>e||DD).splice(0,t.length-1)}function tp({duration:t=300,keyframes:e,times:i,ease:n="easeInOut"}){const r=eE(n)?n.map(sy):sy(n),o={done:!1,value:e[0]},s=xE(i&&i.length===e.length?i:BD(e),t),l=ef(s,e,{ease:Array.isArray(r)?r:wE(e,r)});return{calculatedDuration:t,next:c=>(o.value=l(c),o.done=c>=t,o)}}function _1(t,e){return e?t*(1e3/e):0}const vE=5;function VD(t,e,i){const n=Math.max(e-vE,0);return _1(i-t(n),e-n)}const qf=.001,yE=.01,cy=10,bE=.05,kE=1;function jE({duration:t=800,bounce:e=.25,velocity:i=0,mass:n=1}){let r,o;vD(t<=po(cy));let s=1-e;s=bo(bE,kE,s),t=bo(yE,cy,vr(t)),s<1?(r=d=>{const u=d*s,p=u*t,f=u-i,g=hg(d,s),y=Math.exp(-p);return qf-f/g*y},o=d=>{const p=d*s*t,f=p*i+i,g=Math.pow(s,2)*Math.pow(d,2)*t,y=Math.exp(-p),w=hg(Math.pow(d,2),s);return(-r(d)+qf>0?-1:1)*((f-g)*y)/w}):(r=d=>{const u=Math.exp(-d*t),p=(d-i)*t+1;return-qf+u*p},o=d=>{const u=Math.exp(-d*t),p=(i-d)*(t*t);return u*p});const l=5/t,c=DE(r,o,l);if(t=po(t),isNaN(c))return{stiffness:100,damping:10,duration:t};{const d=Math.pow(c,2)*n;return{stiffness:d,damping:s*2*Math.sqrt(n*d),duration:t}}}const SE=12;function DE(t,e,i){let n=i;for(let r=1;r<SE;r++)n=n-t(n)/e(n);return n}function hg(t,e){return t*Math.sqrt(1-e*e)}const _E=["duration","bounce"],CE=["stiffness","damping","mass"];function dy(t,e){return e.some(i=>t[i]!==void 0)}function PE(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!dy(t,CE)&&dy(t,_E)){const i=jE(t);e={...e,...i,mass:1},e.isResolvedFromDuration=!0}return e}function WD({keyframes:t,restDelta:e,restSpeed:i,...n}){const r=t[0],o=t[t.length-1],s={done:!1,value:r},{stiffness:l,damping:c,mass:d,duration:u,velocity:p,isResolvedFromDuration:f}=PE({...n,velocity:-vr(n.velocity||0)}),g=p||0,y=c/(2*Math.sqrt(l*d)),w=o-r,D=vr(Math.sqrt(l/d)),j=Math.abs(w)<5;i||(i=j?.01:2),e||(e=j?.005:.5);let b;if(y<1){const v=hg(D,y);b=h=>{const x=Math.exp(-y*D*h);return o-x*((g+y*D*w)/v*Math.sin(v*h)+w*Math.cos(v*h))}}else if(y===1)b=v=>o-Math.exp(-D*v)*(w+(g+D*w)*v);else{const v=D*Math.sqrt(y*y-1);b=h=>{const x=Math.exp(-y*D*h),k=Math.min(v*h,300);return o-x*((g+y*D*w)*Math.sinh(k)+v*w*Math.cosh(k))/v}}return{calculatedDuration:f&&u||null,next:v=>{const h=b(v);if(f)s.done=v>=u;else{let x=g;v!==0&&(y<1?x=VD(b,v,h):x=0);const k=Math.abs(x)<=i,S=Math.abs(o-h)<=e;s.done=k&&S}return s.value=s.done?o:h,s}}}function uy({keyframes:t,velocity:e=0,power:i=.8,timeConstant:n=325,bounceDamping:r=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:d=.5,restSpeed:u}){const p=t[0],f={done:!1,value:p},g=_=>l!==void 0&&_<l||c!==void 0&&_>c,y=_=>l===void 0?c:c===void 0||Math.abs(l-_)<Math.abs(c-_)?l:c;let w=i*e;const D=p+w,j=s===void 0?D:s(D);j!==D&&(w=j-p);const b=_=>-w*Math.exp(-_/n),v=_=>j+b(_),h=_=>{const C=b(_),E=v(_);f.done=Math.abs(C)<=d,f.value=f.done?j:E};let x,k;const S=_=>{g(f.value)&&(x=_,k=WD({keyframes:[f.value,y(f.value)],velocity:VD(v,_,f.value),damping:r,stiffness:o,restDelta:d,restSpeed:u}))};return S(0),{calculatedDuration:null,next:_=>{let C=!1;return!k&&x===void 0&&(C=!0,h(_),S(_)),x!==void 0&&_>x?k.next(_-x):(!C&&h(_),f)}}}const TE=t=>{const e=({timestamp:i})=>t(i);return{start:()=>ve.update(e,!0),stop:()=>Pn(e),now:()=>Mt.isProcessing?Mt.timestamp:performance.now()}},hy=2e4;function py(t){let e=0;const i=50;let n=t.next(e);for(;!n.done&&e<hy;)e+=i,n=t.next(e);return e>=hy?1/0:e}const EE={decay:uy,inertia:uy,tween:tp,keyframes:tp,spring:WD};function ip({autoplay:t=!0,delay:e=0,driver:i=TE,keyframes:n,type:r="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:l="loop",onPlay:c,onStop:d,onComplete:u,onUpdate:p,...f}){let g=1,y=!1,w,D;const j=()=>{D=new Promise(R=>{w=R})};j();let b;const v=EE[r]||tp;let h;v!==tp&&typeof n[0]!="number"&&(h=ef([0,100],n,{clamp:!1}),n=[0,100]);const x=v({...f,keyframes:n});let k;l==="mirror"&&(k=v({...f,keyframes:[...n].reverse(),velocity:-(f.velocity||0)}));let S="idle",_=null,C=null,E=null;x.calculatedDuration===null&&o&&(x.calculatedDuration=py(x));const{calculatedDuration:z}=x;let A=1/0,L=1/0;z!==null&&(A=z+s,L=A*(o+1)-s);let N=0;const W=R=>{if(C===null)return;g>0&&(C=Math.min(C,R)),g<0&&(C=Math.min(R-L/g,C)),_!==null?N=_:N=Math.round(R-C)*g;const U=N-e*(g>=0?1:-1),ne=g>=0?U<0:U>L;N=Math.max(U,0),S==="finished"&&_===null&&(N=L);let Z=N,fe=x;if(o){const je=Math.min(N,L)/A;let Tt=Math.floor(je),Se=je%1;!Se&&je>=1&&(Se=1),Se===1&&Tt--,Tt=Math.min(Tt,o+1),!!(Tt%2)&&(l==="reverse"?(Se=1-Se,s&&(Se-=s/A)):l==="mirror"&&(fe=k)),Z=bo(0,1,Se)*A}const ue=ne?{done:!1,value:n[0]}:fe.next(Z);h&&(ue.value=h(ue.value));let{done:me}=ue;!ne&&z!==null&&(me=g>=0?N>=L:N<=0);const Le=_===null&&(S==="finished"||S==="running"&&me);return p&&p(ue.value),Le&&I(),ue},V=()=>{b&&b.stop(),b=void 0},$=()=>{S="idle",V(),w(),j(),C=E=null},I=()=>{S="finished",u&&u(),V(),w()},M=()=>{if(y)return;b||(b=i(W));const R=b.now();c&&c(),_!==null?C=R-_:(!C||S==="finished")&&(C=R),S==="finished"&&j(),E=C,_=null,S="running",b.start()};t&&M();const P={then(R,U){return D.then(R,U)},get time(){return vr(N)},set time(R){R=po(R),N=R,_!==null||!b||g===0?_=R:C=b.now()-R/g},get duration(){const R=x.calculatedDuration===null?py(x):x.calculatedDuration;return vr(R)},get speed(){return g},set speed(R){R===g||!b||(g=R,P.time=vr(N))},get state(){return S},play:M,pause:()=>{S="paused",_=N},stop:()=>{y=!0,S!=="idle"&&(S="idle",d&&d(),$())},cancel:()=>{E!==null&&W(E),$()},complete:()=>{S="finished"},sample:R=>(C=0,W(R))};return P}function IE(t){let e;return()=>(e===void 0&&(e=t()),e)}const AE=IE(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),ME=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),eu=10,zE=2e4,FE=(t,e)=>e.type==="spring"||t==="backgroundColor"||!bD(e.ease);function RE(t,e,{onUpdate:i,onComplete:n,...r}){if(!(AE()&&ME.has(e)&&!r.repeatDelay&&r.repeatType!=="mirror"&&r.damping!==0&&r.type!=="inertia"))return!1;let s=!1,l,c,d=!1;const u=()=>{c=new Promise(v=>{l=v})};u();let{keyframes:p,duration:f=300,ease:g,times:y}=r;if(FE(e,r)){const v=ip({...r,repeat:0,delay:0});let h={done:!1,value:p[0]};const x=[];let k=0;for(;!h.done&&k<zE;)h=v.sample(k),x.push(h.value),k+=eu;y=void 0,p=x,f=k-eu,g="linear"}const w=GT(t.owner.current,e,p,{...r,duration:f,ease:g,times:y}),D=()=>{d=!1,w.cancel()},j=()=>{d=!0,ve.update(D),l(),u()};return w.onfinish=()=>{d||(t.set(XT(p,r)),n&&n(),j())},{then(v,h){return c.then(v,h)},attachTimeline(v){return w.timeline=v,w.onfinish=null,Ze},get time(){return vr(w.currentTime||0)},set time(v){w.currentTime=po(v)},get speed(){return w.playbackRate},set speed(v){w.playbackRate=v},get duration(){return vr(f)},play:()=>{s||(w.play(),Pn(D))},pause:()=>w.pause(),stop:()=>{if(s=!0,w.playState==="idle")return;const{currentTime:v}=w;if(v){const h=ip({...r,autoplay:!1});t.setWithVelocity(h.sample(v-eu).value,h.sample(v).value,eu)}j()},complete:()=>{d||w.finish()},cancel:j}}function LE({keyframes:t,delay:e,onUpdate:i,onComplete:n}){const r=()=>(i&&i(t[t.length-1]),n&&n(),{time:0,speed:1,duration:0,play:Ze,pause:Ze,stop:Ze,then:o=>(o(),Promise.resolve()),cancel:Ze,complete:Ze});return e?ip({keyframes:[0,1],duration:0,delay:e,onComplete:r}):r()}const NE={type:"spring",stiffness:500,damping:25,restSpeed:10},OE=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),$E={type:"keyframes",duration:.8},BE={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},VE=(t,{keyframes:e})=>e.length>2?$E:Rs.has(t)?t.startsWith("scale")?OE(e[1]):NE:BE,pg=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ko.test(e)||e==="0")&&!e.startsWith("url(")),WE=new Set(["brightness","contrast","saturate","opacity"]);function UE(t){const[e,i]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[n]=i.match(qp)||[];if(!n)return t;const r=i.replace(n,"");let o=WE.has(e)?1:0;return n!==i&&(o*=100),e+"("+o+r+")"}const HE=/([a-z-]*)\(.*?\)/g,fg={...ko,getAnimatableNone:t=>{const e=t.match(HE);return e?e.map(UE).join(" "):t}},YE={...rD,color:ei,backgroundColor:ei,outlineColor:ei,fill:ei,stroke:ei,borderColor:ei,borderTopColor:ei,borderRightColor:ei,borderBottomColor:ei,borderLeftColor:ei,filter:fg,WebkitFilter:fg},C1=t=>YE[t];function UD(t,e){let i=C1(t);return i!==fg&&(i=ko),i.getAnimatableNone?i.getAnimatableNone(e):void 0}const HD=t=>/^0[^.\s]+$/.test(t);function GE(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||HD(t)}function XE(t,e,i,n){const r=pg(e,i);let o;Array.isArray(i)?o=[...i]:o=[null,i];const s=n.from!==void 0?n.from:t.get();let l;const c=[];for(let d=0;d<o.length;d++)o[d]===null&&(o[d]=d===0?s:o[d-1]),GE(o[d])&&c.push(d),typeof o[d]=="string"&&o[d]!=="none"&&o[d]!=="0"&&(l=o[d]);if(r&&c.length&&l)for(let d=0;d<c.length;d++){const u=c[d];o[u]=UD(e,l)}return o}function ZE({when:t,delay:e,delayChildren:i,staggerChildren:n,staggerDirection:r,repeat:o,repeatType:s,repeatDelay:l,from:c,elapsed:d,...u}){return!!Object.keys(u).length}function P1(t,e){return t[e]||t.default||t}const qE={skipAnimations:!1},T1=(t,e,i,n={})=>r=>{const o=P1(n,t)||{},s=o.delay||n.delay||0;let{elapsed:l=0}=n;l=l-po(s);const c=XE(e,t,i,o),d=c[0],u=c[c.length-1],p=pg(t,d),f=pg(t,u);let g={keyframes:c,velocity:e.getVelocity(),ease:"easeOut",...o,delay:-l,onUpdate:y=>{e.set(y),o.onUpdate&&o.onUpdate(y)},onComplete:()=>{r(),o.onComplete&&o.onComplete()}};if(ZE(o)||(g={...g,...VE(t,g)}),g.duration&&(g.duration=po(g.duration)),g.repeatDelay&&(g.repeatDelay=po(g.repeatDelay)),!p||!f||YT.current||o.type===!1||qE.skipAnimations)return LE(g);if(!n.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const y=RE(e,t,g);if(y)return y}return ip(g)};function np(t){return!!(ki(t)&&t.add)}const YD=t=>/^\-?\d*\.?\d+$/.test(t);function E1(t,e){t.indexOf(e)===-1&&t.push(e)}function I1(t,e){const i=t.indexOf(e);i>-1&&t.splice(i,1)}class A1{constructor(){this.subscriptions=[]}add(e){return E1(this.subscriptions,e),()=>I1(this.subscriptions,e)}notify(e,i,n){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,i,n);else for(let o=0;o<r;o++){const s=this.subscriptions[o];s&&s(e,i,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const QE=t=>!isNaN(parseFloat(t)),mc={current:void 0};class KE{constructor(e,i={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(n,r=!0)=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:s}=Mt;this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s,ve.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ve.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{n!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=QE(this.current),this.owner=i.owner}onChange(e){return this.on("change",e)}on(e,i){this.events[e]||(this.events[e]=new A1);const n=this.events[e].add(i);return e==="change"?()=>{n(),ve.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,i){this.passiveEffect=e,this.stopPassiveEffect=i}set(e,i=!0){!i||!this.passiveEffect?this.updateAndNotify(e,i):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,i,n){this.set(i),this.prev=e,this.timeDelta=n}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return mc.current&&mc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?_1(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=e(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function jn(t,e){return new KE(t,e)}const GD=t=>e=>e.test(t),JE={test:t=>t==="auto",parse:t=>t},XD=[Ls,K,Hn,Or,lT,aT,JE],Al=t=>XD.find(GD(t)),eI=[...XD,ei,ko],tI=t=>eI.find(GD(t));function iI(t,e,i){t.hasValue(e)?t.getValue(e).set(i):t.addValue(e,jn(i))}function M1(t,e){const i=Kp(t,e);let{transitionEnd:n={},transition:r={},...o}=i?t.makeTargetAnimatable(i,!1):{};o={...o,...n};for(const s in o){const l=kT(o[s]);iI(t,s,l)}}function mg(t,e){[...e].reverse().forEach(n=>{const r=t.getVariant(n);r&&M1(t,r),t.variantChildren&&t.variantChildren.forEach(o=>{mg(o,e)})})}function nI(t,e){if(Array.isArray(e))return mg(t,e);if(typeof e=="string")return mg(t,[e]);M1(t,e)}function rI(t,e,i){var n,r;const o=Object.keys(e).filter(l=>!t.hasValue(l)),s=o.length;if(s)for(let l=0;l<s;l++){const c=o[l],d=e[c];let u=null;Array.isArray(d)&&(u=d[0]),u===null&&(u=(r=(n=i[c])!==null&&n!==void 0?n:t.readValue(c))!==null&&r!==void 0?r:e[c]),u!=null&&(typeof u=="string"&&(YD(u)||HD(u))?u=parseFloat(u):!tI(u)&&ko.test(d)&&(u=UD(c,d)),t.addValue(c,jn(u,{owner:t})),i[c]===void 0&&(i[c]=u),u!==null&&t.setBaseTarget(c,u))}}function oI(t,e){return e?(e[t]||e.default||e).from:void 0}function sI(t,e,i){const n={};for(const r in t){const o=oI(r,e);if(o!==void 0)n[r]=o;else{const s=i.getValue(r);s&&(n[r]=s.get())}}return n}function aI({protectedKeys:t,needsAnimating:e},i){const n=t.hasOwnProperty(i)&&e[i]!==!0;return e[i]=!1,n}function lI(t,e){const i=t.get();if(Array.isArray(e)){for(let n=0;n<e.length;n++)if(e[n]!==i)return!0}else return i!==e}function ZD(t,e,{delay:i=0,transitionOverride:n,type:r}={}){let{transition:o=t.getDefaultTransition(),transitionEnd:s,...l}=t.makeTargetAnimatable(e);const c=t.getValue("willChange");n&&(o=n);const d=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const p in l){const f=t.getValue(p),g=l[p];if(!f||g===void 0||u&&aI(u,p))continue;const y={delay:i,elapsed:0,...P1(o||{},p)};if(window.HandoffAppearAnimations){const j=t.getProps()[QS];if(j){const b=window.HandoffAppearAnimations(j,p,f,ve);b!==null&&(y.elapsed=b,y.isHandoff=!0)}}let w=!y.isHandoff&&!lI(f,g);if(y.type==="spring"&&(f.getVelocity()||y.velocity)&&(w=!1),f.animation&&(w=!1),w)continue;f.start(T1(p,f,g,t.shouldReduceMotion&&Rs.has(p)?{type:!1}:y));const D=f.animation;np(c)&&(c.add(p),D.then(()=>c.remove(p))),d.push(D)}return s&&Promise.all(d).then(()=>{s&&M1(t,s)}),d}function gg(t,e,i={}){const n=Kp(t,e,i.custom);let{transition:r=t.getDefaultTransition()||{}}=n||{};i.transitionOverride&&(r=i.transitionOverride);const o=n?()=>Promise.all(ZD(t,n,i)):()=>Promise.resolve(),s=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:u,staggerDirection:p}=r;return cI(t,e,d+c,u,p,i)}:()=>Promise.resolve(),{when:l}=r;if(l){const[c,d]=l==="beforeChildren"?[o,s]:[s,o];return c().then(()=>d())}else return Promise.all([o(),s(i.delay)])}function cI(t,e,i=0,n=0,r=1,o){const s=[],l=(t.variantChildren.size-1)*n,c=r===1?(d=0)=>d*n:(d=0)=>l-d*n;return Array.from(t.variantChildren).sort(dI).forEach((d,u)=>{d.notify("AnimationStart",e),s.push(gg(d,e,{...o,delay:i+c(u)}).then(()=>d.notify("AnimationComplete",e)))}),Promise.all(s)}function dI(t,e){return t.sortNodePosition(e)}function qD(t,e,i={}){t.notify("AnimationStart",e);let n;if(Array.isArray(e)){const r=e.map(o=>gg(t,o,i));n=Promise.all(r)}else if(typeof e=="string")n=gg(t,e,i);else{const r=typeof e=="function"?Kp(t,e,i.custom):e;n=Promise.all(ZD(t,r,i))}return n.then(()=>t.notify("AnimationComplete",e))}const uI=[...p1].reverse(),hI=p1.length;function pI(t){return e=>Promise.all(e.map(({animation:i,options:n})=>qD(t,i,n)))}function fI(t){let e=pI(t);const i=gI();let n=!0;const r=(c,d)=>{const u=Kp(t,d);if(u){const{transition:p,transitionEnd:f,...g}=u;c={...c,...g,...f}}return c};function o(c){e=c(t)}function s(c,d){const u=t.getProps(),p=t.getVariantContext(!0)||{},f=[],g=new Set;let y={},w=1/0;for(let j=0;j<hI;j++){const b=uI[j],v=i[b],h=u[b]!==void 0?u[b]:p[b],x=ed(h),k=b===d?v.isActive:null;k===!1&&(w=j);let S=h===p[b]&&h!==u[b]&&x;if(S&&n&&t.manuallyAnimateOnMount&&(S=!1),v.protectedKeys={...y},!v.isActive&&k===null||!h&&!v.prevProp||Xp(h)||typeof h=="boolean")continue;let C=mI(v.prevProp,h)||b===d&&v.isActive&&!S&&x||j>w&&x,E=!1;const z=Array.isArray(h)?h:[h];let A=z.reduce(r,{});k===!1&&(A={});const{prevResolvedValues:L={}}=v,N={...L,...A},W=V=>{C=!0,g.has(V)&&(E=!0,g.delete(V)),v.needsAnimating[V]=!0};for(const V in N){const $=A[V],I=L[V];if(y.hasOwnProperty(V))continue;let M=!1;Jh($)&&Jh(I)?M=!wD($,I):M=$!==I,M?$!==void 0?W(V):g.add(V):$!==void 0&&g.has(V)?W(V):v.protectedKeys[V]=!0}v.prevProp=h,v.prevResolvedValues=A,v.isActive&&(y={...y,...A}),n&&t.blockInitialAnimation&&(C=!1),C&&(!S||E)&&f.push(...z.map(V=>({animation:V,options:{type:b,...c}})))}if(g.size){const j={};g.forEach(b=>{const v=t.getBaseTarget(b);v!==void 0&&(j[b]=v)}),f.push({animation:j})}let D=!!f.length;return n&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(D=!1),n=!1,D?e(f):Promise.resolve()}function l(c,d,u){var p;if(i[c].isActive===d)return Promise.resolve();(p=t.variantChildren)===null||p===void 0||p.forEach(g=>{var y;return(y=g.animationState)===null||y===void 0?void 0:y.setActive(c,d)}),i[c].isActive=d;const f=s(u,c);for(const g in i)i[g].protectedKeys={};return f}return{animateChanges:s,setActive:l,setAnimateFunction:o,getState:()=>i}}function mI(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!wD(e,t):!1}function No(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function gI(){return{animate:No(!0),whileInView:No(),whileHover:No(),whileTap:No(),whileDrag:No(),whileFocus:No(),exit:No()}}class xI extends To{constructor(e){super(e),e.animationState||(e.animationState=fI(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Xp(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:i}=this.node.prevProps||{};e!==i&&this.updateAnimationControlsSubscription()}unmount(){}}let wI=0;class vI extends To{constructor(){super(...arguments),this.id=wI++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:i,custom:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e,{custom:n??this.node.getProps().custom});i&&!e&&o.then(()=>i(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const yI={animation:{Feature:xI},exit:{Feature:vI}},fy=(t,e)=>Math.abs(t-e);function bI(t,e){const i=fy(t.x,e.x),n=fy(t.y,e.y);return Math.sqrt(i**2+n**2)}class QD{constructor(e,i,{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=Kf(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,g=bI(p.offset,{x:0,y:0})>=3;if(!f&&!g)return;const{point:y}=p,{timestamp:w}=Mt;this.history.push({...y,timestamp:w});const{onStart:D,onMove:j}=this.handlers;f||(D&&D(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),j&&j(this.lastMoveEvent,p)},this.handlePointerMove=(p,f)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=Qf(f,this.transformPagePoint),ve.update(this.updatePoint,!0)},this.handlePointerUp=(p,f)=>{this.end();const{onEnd:g,onSessionEnd:y,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const D=Kf(p.type==="pointercancel"?this.lastMoveEventInfo:Qf(f,this.transformPagePoint),this.history);this.startEvent&&g&&g(p,D),y&&y(p,D)},!pD(e))return;this.dragSnapToOrigin=o,this.handlers=i,this.transformPagePoint=n,this.contextWindow=r||window;const s=Qp(e),l=Qf(s,this.transformPagePoint),{point:c}=l,{timestamp:d}=Mt;this.history=[{...c,timestamp:d}];const{onSessionStart:u}=i;u&&u(e,Kf(l,this.history)),this.removeListeners=ho(wr(this.contextWindow,"pointermove",this.handlePointerMove),wr(this.contextWindow,"pointerup",this.handlePointerUp),wr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Pn(this.updatePoint)}}function Qf(t,e){return e?{point:e(t.point)}:t}function my(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Kf({point:t},e){return{point:t,delta:my(t,KD(e)),offset:my(t,kI(e)),velocity:jI(e,.1)}}function kI(t){return t[0]}function KD(t){return t[t.length-1]}function jI(t,e){if(t.length<2)return{x:0,y:0};let i=t.length-1,n=null;const r=KD(t);for(;i>=0&&(n=t[i],!(r.timestamp-n.timestamp>po(e)));)i--;if(!n)return{x:0,y:0};const o=vr(r.timestamp-n.timestamp);if(o===0)return{x:0,y:0};const s={x:(r.x-n.x)/o,y:(r.y-n.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function Oi(t){return t.max-t.min}function xg(t,e=0,i=.01){return Math.abs(t-e)<=i}function gy(t,e,i,n=.5){t.origin=n,t.originPoint=Be(e.min,e.max,t.origin),t.scale=Oi(i)/Oi(e),(xg(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=Be(i.min,i.max,t.origin)-t.originPoint,(xg(t.translate)||isNaN(t.translate))&&(t.translate=0)}function gc(t,e,i,n){gy(t.x,e.x,i.x,n?n.originX:void 0),gy(t.y,e.y,i.y,n?n.originY:void 0)}function xy(t,e,i){t.min=i.min+e.min,t.max=t.min+Oi(e)}function SI(t,e,i){xy(t.x,e.x,i.x),xy(t.y,e.y,i.y)}function wy(t,e,i){t.min=e.min-i.min,t.max=t.min+Oi(e)}function xc(t,e,i){wy(t.x,e.x,i.x),wy(t.y,e.y,i.y)}function DI(t,{min:e,max:i},n){return e!==void 0&&t<e?t=n?Be(e,t,n.min):Math.max(t,e):i!==void 0&&t>i&&(t=n?Be(i,t,n.max):Math.min(t,i)),t}function vy(t,e,i){return{min:e!==void 0?t.min+e:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function _I(t,{top:e,left:i,bottom:n,right:r}){return{x:vy(t.x,i,r),y:vy(t.y,e,n)}}function yy(t,e){let i=e.min-t.min,n=e.max-t.max;return e.max-e.min<t.max-t.min&&([i,n]=[n,i]),{min:i,max:n}}function CI(t,e){return{x:yy(t.x,e.x),y:yy(t.y,e.y)}}function PI(t,e){let i=.5;const n=Oi(t),r=Oi(e);return r>n?i=il(e.min,e.max-n,t.min):n>r&&(i=il(t.min,t.max-r,e.min)),bo(0,1,i)}function TI(t,e){const i={};return e.min!==void 0&&(i.min=e.min-t.min),e.max!==void 0&&(i.max=e.max-t.min),i}const wg=.35;function EI(t=wg){return t===!1?t=0:t===!0&&(t=wg),{x:by(t,"left","right"),y:by(t,"top","bottom")}}function by(t,e,i){return{min:ky(t,e),max:ky(t,i)}}function ky(t,e){return typeof t=="number"?t:t[e]||0}const jy=()=>({translate:0,scale:1,origin:0,originPoint:0}),ka=()=>({x:jy(),y:jy()}),Sy=()=>({min:0,max:0}),at=()=>({x:Sy(),y:Sy()});function Gi(t){return[t("x"),t("y")]}function JD({top:t,left:e,right:i,bottom:n}){return{x:{min:e,max:i},y:{min:t,max:n}}}function II({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function AI(t,e){if(!e)return t;const i=e({x:t.left,y:t.top}),n=e({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:n.y,right:n.x}}function Jf(t){return t===void 0||t===1}function vg({scale:t,scaleX:e,scaleY:i}){return!Jf(t)||!Jf(e)||!Jf(i)}function Xo(t){return vg(t)||e5(t)||t.z||t.rotate||t.rotateX||t.rotateY}function e5(t){return Dy(t.x)||Dy(t.y)}function Dy(t){return t&&t!=="0%"}function rp(t,e,i){const n=t-i,r=e*n;return i+r}function _y(t,e,i,n,r){return r!==void 0&&(t=rp(t,r,n)),rp(t,i,n)+e}function yg(t,e=0,i=1,n,r){t.min=_y(t.min,e,i,n,r),t.max=_y(t.max,e,i,n,r)}function t5(t,{x:e,y:i}){yg(t.x,e.translate,e.scale,e.originPoint),yg(t.y,i.translate,i.scale,i.originPoint)}function MI(t,e,i,n=!1){const r=i.length;if(!r)return;e.x=e.y=1;let o,s;for(let l=0;l<r;l++){o=i[l],s=o.projectionDelta;const c=o.instance;c&&c.style&&c.style.display==="contents"||(n&&o.options.layoutScroll&&o.scroll&&o!==o.root&&ja(t,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(e.x*=s.x.scale,e.y*=s.y.scale,t5(t,s)),n&&Xo(o.latestValues)&&ja(t,o.latestValues))}e.x=Cy(e.x),e.y=Cy(e.y)}function Cy(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function Ur(t,e){t.min=t.min+e,t.max=t.max+e}function Py(t,e,[i,n,r]){const o=e[r]!==void 0?e[r]:.5,s=Be(t.min,t.max,o);yg(t,e[i],e[n],s,e.scale)}const zI=["x","scaleX","originX"],FI=["y","scaleY","originY"];function ja(t,e){Py(t.x,e,zI),Py(t.y,e,FI)}function i5(t,e){return JD(AI(t.getBoundingClientRect(),e))}function RI(t,e,i){const n=i5(t,i),{scroll:r}=e;return r&&(Ur(n.x,r.offset.x),Ur(n.y,r.offset.y)),n}const n5=({current:t})=>t?t.ownerDocument.defaultView:null,LI=new WeakMap;class NI{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=at(),this.visualElement=e}start(e,{snapToCursor:i=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:p}=this.getProps();p?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(Qp(u,"page").point)},o=(u,p)=>{const{drag:f,dragPropagation:g,onDragStart:y}=this.getProps();if(f&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=mD(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Gi(D=>{let j=this.getAxisMotionValue(D).get()||0;if(Hn.test(j)){const{projection:b}=this.visualElement;if(b&&b.layout){const v=b.layout.layoutBox[D];v&&(j=Oi(v)*(parseFloat(j)/100))}}this.originPoint[D]=j}),y&&ve.update(()=>y(u,p),!1,!0);const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},s=(u,p)=>{const{dragPropagation:f,dragDirectionLock:g,onDirectionLock:y,onDrag:w}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:D}=p;if(g&&this.currentDirection===null){this.currentDirection=OI(D),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",p.point,D),this.updateAxis("y",p.point,D),this.visualElement.render(),w&&w(u,p)},l=(u,p)=>this.stop(u,p),c=()=>Gi(u=>{var p;return this.getAnimationState(u)==="paused"&&((p=this.getAxisMotionValue(u).animation)===null||p===void 0?void 0:p.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new QD(e,{onSessionStart:r,onStart:o,onMove:s,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,contextWindow:n5(this.visualElement)})}stop(e,i){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=i;this.startAnimation(r);const{onDragEnd:o}=this.getProps();o&&ve.update(()=>o(e,i))}cancel(){this.isDragging=!1;const{projection:e,animationState:i}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(e,i,n){const{drag:r}=this.getProps();if(!n||!tu(e,r,this.currentDirection))return;const o=this.getAxisMotionValue(e);let s=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(s=DI(s,this.constraints[e],this.elastic[e])),o.set(s)}resolveConstraints(){var e;const{dragConstraints:i,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,o=this.constraints;i&&ya(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&r?this.constraints=_I(r.layoutBox,i):this.constraints=!1,this.elastic=EI(n),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Gi(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=TI(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:i}=this.getProps();if(!e||!ya(e))return!1;const n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const o=RI(n,r.root,this.visualElement.getTransformPagePoint());let s=CI(r.layout.layoutBox,o);if(i){const l=i(II(s));this.hasMutatedConstraints=!!l,l&&(s=JD(l))}return s}startAnimation(e){const{drag:i,dragMomentum:n,dragElastic:r,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},d=Gi(u=>{if(!tu(u,i,this.currentDirection))return;let p=c&&c[u]||{};s&&(p={min:0,max:0});const f=r?200:1e6,g=r?40:1e7,y={type:"inertia",velocity:n?e[u]:0,bounceStiffness:f,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...o,...p};return this.startAxisValueAnimation(u,y)});return Promise.all(d).then(l)}startAxisValueAnimation(e,i){const n=this.getAxisMotionValue(e);return n.start(T1(e,n,0,i))}stopAnimation(){Gi(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Gi(e=>{var i;return(i=this.getAxisMotionValue(e).animation)===null||i===void 0?void 0:i.pause()})}getAnimationState(e){var i;return(i=this.getAxisMotionValue(e).animation)===null||i===void 0?void 0:i.state}getAxisMotionValue(e){const i="_drag"+e.toUpperCase(),n=this.visualElement.getProps(),r=n[i];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Gi(i=>{const{drag:n}=this.getProps();if(!tu(i,n,this.currentDirection))return;const{projection:r}=this.visualElement,o=this.getAxisMotionValue(i);if(r&&r.layout){const{min:s,max:l}=r.layout.layoutBox[i];o.set(e[i]-Be(s,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:i}=this.getProps(),{projection:n}=this.visualElement;if(!ya(i)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Gi(s=>{const l=this.getAxisMotionValue(s);if(l){const c=l.get();r[s]=PI({min:c,max:c},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Gi(s=>{if(!tu(s,e,null))return;const l=this.getAxisMotionValue(s),{min:c,max:d}=this.constraints[s];l.set(Be(c,d,r[s]))})}addListeners(){if(!this.visualElement.current)return;LI.set(this.visualElement,this);const e=this.visualElement.current,i=wr(e,"pointerdown",c=>{const{drag:d,dragListener:u=!0}=this.getProps();d&&u&&this.start(c)}),n=()=>{const{dragConstraints:c}=this.getProps();ya(c)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,o=r.addEventListener("measure",n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),n();const s=mr(window,"resize",()=>this.scalePositionWithinConstraints()),l=r.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d})=>{this.isDragging&&d&&(Gi(u=>{const p=this.getAxisMotionValue(u);p&&(this.originPoint[u]+=c[u].translate,p.set(p.get()+c[u].translate))}),this.visualElement.render())});return()=>{s(),i(),o(),l&&l()}}getProps(){const e=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:o=!1,dragElastic:s=wg,dragMomentum:l=!0}=e;return{...e,drag:i,dragDirectionLock:n,dragPropagation:r,dragConstraints:o,dragElastic:s,dragMomentum:l}}}function tu(t,e,i){return(e===!0||e===t)&&(i===null||i===t)}function OI(t,e=10){let i=null;return Math.abs(t.y)>e?i="y":Math.abs(t.x)>e&&(i="x"),i}class $I extends To{constructor(e){super(e),this.removeGroupControls=Ze,this.removeListeners=Ze,this.controls=new NI(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ze}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ty=t=>(e,i)=>{t&&ve.update(()=>t(e,i))};class BI extends To{constructor(){super(...arguments),this.removePointerDownListener=Ze}onPointerDown(e){this.session=new QD(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:n5(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:i,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Ty(e),onStart:Ty(i),onMove:n,onEnd:(o,s)=>{delete this.session,r&&ve.update(()=>r(o,s))}}}mount(){this.removePointerDownListener=wr(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function VI(){const t=T.useContext(Yp);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:i,register:n}=t,r=T.useId();return T.useEffect(()=>n(r),[]),!e&&i?[!1,()=>i&&i(r)]:[!0]}const ah={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ey(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ml={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(K.test(t))t=parseFloat(t);else return t;const i=Ey(t,e.target.x),n=Ey(t,e.target.y);return`${i}% ${n}%`}},WI={correct:(t,{treeScale:e,projectionDelta:i})=>{const n=t,r=ko.parse(t);if(r.length>5)return n;const o=ko.createTransformer(t),s=typeof r[0]!="number"?1:0,l=i.x.scale*e.x,c=i.y.scale*e.y;r[0+s]/=l,r[1+s]/=c;const d=Be(l,c,.5);return typeof r[2+s]=="number"&&(r[2+s]/=d),typeof r[3+s]=="number"&&(r[3+s]/=d),o(r)}};class UI extends q.Component{componentDidMount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:n,layoutId:r}=this.props,{projection:o}=e;eT(HI),o&&(i.group&&i.group.add(o),n&&n.register&&r&&n.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),ah.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:i,visualElement:n,drag:r,isPresent:o}=this.props,s=n.projection;return s&&(s.isPresent=o,r||e.layoutDependency!==i||i===void 0?s.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?s.promote():s.relegate()||ve.postRender(()=>{const l=s.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function r5(t){const[e,i]=VI(),n=T.useContext(m1);return q.createElement(UI,{...t,layoutGroup:n,switchLayoutGroup:T.useContext(JS),isPresent:e,safeToRemove:i})}const HI={borderRadius:{...Ml,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ml,borderTopRightRadius:Ml,borderBottomLeftRadius:Ml,borderBottomRightRadius:Ml,boxShadow:WI},o5=["TopLeft","TopRight","BottomLeft","BottomRight"],YI=o5.length,Iy=t=>typeof t=="string"?parseFloat(t):t,Ay=t=>typeof t=="number"||K.test(t);function GI(t,e,i,n,r,o){r?(t.opacity=Be(0,i.opacity!==void 0?i.opacity:1,XI(n)),t.opacityExit=Be(e.opacity!==void 0?e.opacity:1,0,ZI(n))):o&&(t.opacity=Be(e.opacity!==void 0?e.opacity:1,i.opacity!==void 0?i.opacity:1,n));for(let s=0;s<YI;s++){const l=`border${o5[s]}Radius`;let c=My(e,l),d=My(i,l);if(c===void 0&&d===void 0)continue;c||(c=0),d||(d=0),c===0||d===0||Ay(c)===Ay(d)?(t[l]=Math.max(Be(Iy(c),Iy(d),n),0),(Hn.test(d)||Hn.test(c))&&(t[l]+="%")):t[l]=d}(e.rotate||i.rotate)&&(t.rotate=Be(e.rotate||0,i.rotate||0,n))}function My(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const XI=s5(0,.5,PD),ZI=s5(.5,.95,Ze);function s5(t,e,i){return n=>n<t?0:n>e?1:i(il(t,e,n))}function zy(t,e){t.min=e.min,t.max=e.max}function Hi(t,e){zy(t.x,e.x),zy(t.y,e.y)}function Fy(t,e,i,n,r){return t-=e,t=rp(t,1/i,n),r!==void 0&&(t=rp(t,1/r,n)),t}function qI(t,e=0,i=1,n=.5,r,o=t,s=t){if(Hn.test(e)&&(e=parseFloat(e),e=Be(s.min,s.max,e/100)-s.min),typeof e!="number")return;let l=Be(o.min,o.max,n);t===o&&(l-=e),t.min=Fy(t.min,e,i,l,r),t.max=Fy(t.max,e,i,l,r)}function Ry(t,e,[i,n,r],o,s){qI(t,e[i],e[n],e[r],e.scale,o,s)}const QI=["x","scaleX","originX"],KI=["y","scaleY","originY"];function Ly(t,e,i,n){Ry(t.x,e,QI,i?i.x:void 0,n?n.x:void 0),Ry(t.y,e,KI,i?i.y:void 0,n?n.y:void 0)}function Ny(t){return t.translate===0&&t.scale===1}function a5(t){return Ny(t.x)&&Ny(t.y)}function JI(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function l5(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function Oy(t){return Oi(t.x)/Oi(t.y)}class e9{constructor(){this.members=[]}add(e){E1(this.members,e),e.scheduleRender()}remove(e){if(I1(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(e){const i=this.members.findIndex(r=>e===r);if(i===0)return!1;let n;for(let r=i;r>=0;r--){const o=this.members[r];if(o.isPresent!==!1){n=o;break}}return n?(this.promote(n),!0):!1}promote(e,i){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,i&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:i,resumingFrom:n}=e;i.onExitComplete&&i.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function $y(t,e,i){let n="";const r=t.x.translate/e.x,o=t.y.translate/e.y;if((r||o)&&(n=`translate3d(${r}px, ${o}px, 0) `),(e.x!==1||e.y!==1)&&(n+=`scale(${1/e.x}, ${1/e.y}) `),i){const{rotate:c,rotateX:d,rotateY:u}=i;c&&(n+=`rotate(${c}deg) `),d&&(n+=`rotateX(${d}deg) `),u&&(n+=`rotateY(${u}deg) `)}const s=t.x.scale*e.x,l=t.y.scale*e.y;return(s!==1||l!==1)&&(n+=`scale(${s}, ${l})`),n||"none"}const t9=(t,e)=>t.depth-e.depth;class i9{constructor(){this.children=[],this.isDirty=!1}add(e){E1(this.children,e),this.isDirty=!0}remove(e){I1(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(t9),this.isDirty=!1,this.children.forEach(e)}}function n9(t,e){const i=performance.now(),n=({timestamp:r})=>{const o=r-i;o>=e&&(Pn(n),t(o-e))};return ve.read(n,!0),()=>Pn(n)}function r9(t){window.MotionDebug&&window.MotionDebug.record(t)}function o9(t){return t instanceof SVGElement&&t.tagName!=="svg"}function s9(t,e,i){const n=ki(t)?t:jn(t);return n.start(T1("",n,e,i)),n.animation}const By=["","X","Y","Z"],a9={visibility:"hidden"},Vy=1e3;let l9=0;const Zo={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function c5({attachResizeListener:t,defaultParent:e,measureScroll:i,checkIsScrollRoot:n,resetTransform:r}){return class{constructor(s={},l=e==null?void 0:e()){this.id=l9++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Zo.totalNodes=Zo.resolvedTargetDeltas=Zo.recalculatedProjection=0,this.nodes.forEach(u9),this.nodes.forEach(g9),this.nodes.forEach(x9),this.nodes.forEach(h9),r9(Zo)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new i9)}addEventListener(s,l){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new A1),this.eventHandlers.get(s).add(l)}notifyListeners(s,...l){const c=this.eventHandlers.get(s);c&&c.notify(...l)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=o9(s),this.instance=s;const{layoutId:c,layout:d,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(d||c)&&(this.isLayoutDirty=!0),t){let p;const f=()=>this.root.updateBlockedByResize=!1;t(s,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=n9(f,250),ah.hasAnimatedSinceResize&&(ah.hasAnimatedSinceResize=!1,this.nodes.forEach(Uy))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&u&&(c||d)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:f,hasRelativeTargetChanged:g,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||u.getDefaultTransition()||k9,{onLayoutAnimationStart:D,onLayoutAnimationComplete:j}=u.getProps(),b=!this.targetLayout||!l5(this.targetLayout,y)||g,v=!f&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||f&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(p,v);const h={...P1(w,"layout"),onPlay:D,onComplete:j};(u.shouldReduceMotion||this.options.layoutRoot)&&(h.delay=0,h.type=!1),this.startAnimation(h)}else f||Uy(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Pn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(w9),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const p=this.path[u];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Wy);return}this.isUpdating||this.nodes.forEach(f9),this.isUpdating=!1,this.nodes.forEach(m9),this.nodes.forEach(c9),this.nodes.forEach(d9),this.clearAllSnapshots();const l=performance.now();Mt.delta=bo(0,1e3/60,l-Mt.timestamp),Mt.timestamp=l,Mt.isProcessing=!0,Wf.update.process(Mt),Wf.preRender.process(Mt),Wf.render.process(Mt),Mt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(p9),this.sharedNodes.forEach(v9)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ve.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ve.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=at(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let l=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(l=!1),l&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:n(this.instance),offset:i(this.instance)})}resetTransform(){if(!r)return;const s=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!a5(this.projectionDelta),c=this.getTransformTemplate(),d=c?c(this.latestValues,""):void 0,u=d!==this.prevTransformTemplateValue;s&&(l||Xo(this.latestValues)||u)&&(r(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return s&&(c=this.removeTransform(c)),j9(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return at();const l=s.measureViewportBox(),{scroll:c}=this.root;return c&&(Ur(l.x,c.offset.x),Ur(l.y,c.offset.y)),l}removeElementScroll(s){const l=at();Hi(l,s);for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:u,options:p}=d;if(d!==this.root&&u&&p.layoutScroll){if(u.isRoot){Hi(l,s);const{scroll:f}=this.root;f&&(Ur(l.x,-f.offset.x),Ur(l.y,-f.offset.y))}Ur(l.x,u.offset.x),Ur(l.y,u.offset.y)}}return l}applyTransform(s,l=!1){const c=at();Hi(c,s);for(let d=0;d<this.path.length;d++){const u=this.path[d];!l&&u.options.layoutScroll&&u.scroll&&u!==u.root&&ja(c,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Xo(u.latestValues)&&ja(c,u.latestValues)}return Xo(this.latestValues)&&ja(c,this.latestValues),c}removeTransform(s){const l=at();Hi(l,s);for(let c=0;c<this.path.length;c++){const d=this.path[c];if(!d.instance||!Xo(d.latestValues))continue;vg(d.latestValues)&&d.updateSnapshot();const u=at(),p=d.measurePageBox();Hi(u,p),Ly(l,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,u)}return Xo(this.latestValues)&&Ly(l,this.latestValues),l}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Mt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==c;if(!(s||d&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:p,layoutId:f}=this.options;if(!(!this.layout||!(p||f))){if(this.resolvedRelativeTargetAt=Mt.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=at(),this.relativeTargetOrigin=at(),xc(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),Hi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=at(),this.targetWithTransforms=at()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),SI(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Hi(this.target,this.layout.layoutBox),t5(this.target,this.targetDelta)):Hi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=at(),this.relativeTargetOrigin=at(),xc(this.relativeTargetOrigin,this.target,g.target),Hi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Zo.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||vg(this.parent.latestValues)||e5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let d=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(d=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Mt.timestamp&&(d=!1),d)return;const{layout:u,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||p))return;Hi(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,g=this.treeScale.y;MI(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox);const{target:y}=l;if(!y){this.projectionTransform&&(this.projectionDelta=ka(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=ka(),this.projectionDeltaWithTransform=ka());const w=this.projectionTransform;gc(this.projectionDelta,this.layoutCorrected,y,this.latestValues),this.projectionTransform=$y(this.projectionDelta,this.treeScale),(this.projectionTransform!==w||this.treeScale.x!==f||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),Zo.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,l=!1){const c=this.snapshot,d=c?c.latestValues:{},u={...this.latestValues},p=ka();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const f=at(),g=c?c.source:void 0,y=this.layout?this.layout.source:void 0,w=g!==y,D=this.getStack(),j=!D||D.members.length<=1,b=!!(w&&!j&&this.options.crossfade===!0&&!this.path.some(b9));this.animationProgress=0;let v;this.mixTargetDelta=h=>{const x=h/1e3;Hy(p.x,s.x,x),Hy(p.y,s.y,x),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(xc(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),y9(this.relativeTarget,this.relativeTargetOrigin,f,x),v&&JI(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=at()),Hi(v,this.relativeTarget)),w&&(this.animationValues=u,GI(u,d,this.latestValues,x,b,j)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=x},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Pn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ve.update(()=>{ah.hasAnimatedSinceResize=!0,this.currentAnimation=s9(0,Vy,{...s,onUpdate:l=>{this.mixTargetDelta(l),s.onUpdate&&s.onUpdate(l)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Vy),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:l,target:c,layout:d,latestValues:u}=s;if(!(!l||!c||!d)){if(this!==s&&this.layout&&d&&d5(this.options.animationType,this.layout.layoutBox,d.layoutBox)){c=this.target||at();const p=Oi(this.layout.layoutBox.x);c.x.min=s.target.x.min,c.x.max=c.x.min+p;const f=Oi(this.layout.layoutBox.y);c.y.min=s.target.y.min,c.y.max=c.y.min+f}Hi(l,c),ja(l,u),gc(this.projectionDeltaWithTransform,this.layoutCorrected,l,u)}}registerSharedNode(s,l){this.sharedNodes.has(s)||this.sharedNodes.set(s,new e9),this.sharedNodes.get(s).add(l);const d=l.options.initialPromotionConfig;l.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(l):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:l}=this.options;return l?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:l}=this.options;return l?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:l,preserveFollowOpacity:c}={}){const d=this.getStack();d&&d.promote(this,c),s&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let l=!1;const{latestValues:c}=s;if((c.rotate||c.rotateX||c.rotateY||c.rotateZ)&&(l=!0),!l)return;const d={};for(let u=0;u<By.length;u++){const p="rotate"+By[u];c[p]&&(d[p]=c[p],s.setStaticValue(p,0))}s.render();for(const u in d)s.setStaticValue(u,d[u]);s.scheduleRender()}getProjectionStyles(s){var l,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return a9;const d={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,d.opacity="",d.pointerEvents=sh(s==null?void 0:s.pointerEvents)||"",d.transform=u?u(this.latestValues,""):"none",d;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=sh(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Xo(this.latestValues)&&(w.transform=u?u({},""):"none",this.hasProjected=!1),w}const f=p.animationValues||p.latestValues;this.applyTransformsToTarget(),d.transform=$y(this.projectionDeltaWithTransform,this.treeScale,f),u&&(d.transform=u(f,d.transform));const{x:g,y}=this.projectionDelta;d.transformOrigin=`${g.origin*100}% ${y.origin*100}% 0`,p.animationValues?d.opacity=p===this?(c=(l=f.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:d.opacity=p===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const w in Qh){if(f[w]===void 0)continue;const{correct:D,applyTo:j}=Qh[w],b=d.transform==="none"?f[w]:D(f[w],p);if(j){const v=j.length;for(let h=0;h<v;h++)d[j[h]]=b}else d[w]=b}return this.options.layoutId&&(d.pointerEvents=p===this?sh(s==null?void 0:s.pointerEvents)||"":"none"),d}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var l;return(l=s.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(Wy),this.root.sharedNodes.clear()}}}function c9(t){t.updateLayout()}function d9(t){var e;const i=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&i&&t.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:r}=t.layout,{animationType:o}=t.options,s=i.source!==t.layout.source;o==="size"?Gi(p=>{const f=s?i.measuredBox[p]:i.layoutBox[p],g=Oi(f);f.min=n[p].min,f.max=f.min+g}):d5(o,i.layoutBox,n)&&Gi(p=>{const f=s?i.measuredBox[p]:i.layoutBox[p],g=Oi(n[p]);f.max=f.min+g,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[p].max=t.relativeTarget[p].min+g)});const l=ka();gc(l,n,i.layoutBox);const c=ka();s?gc(c,t.applyTransform(r,!0),i.measuredBox):gc(c,n,i.layoutBox);const d=!a5(l);let u=!1;if(!t.resumeFrom){const p=t.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:f,layout:g}=p;if(f&&g){const y=at();xc(y,i.layoutBox,f.layoutBox);const w=at();xc(w,n,g.layoutBox),l5(y,w)||(u=!0),p.options.layoutRoot&&(t.relativeTarget=w,t.relativeTargetOrigin=y,t.relativeParent=p)}}}t.notifyListeners("didUpdate",{layout:n,snapshot:i,delta:c,layoutDelta:l,hasLayoutChanged:d,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:n}=t.options;n&&n()}t.options.transition=void 0}function u9(t){Zo.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function h9(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function p9(t){t.clearSnapshot()}function Wy(t){t.clearMeasurements()}function f9(t){t.isLayoutDirty=!1}function m9(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Uy(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function g9(t){t.resolveTargetDelta()}function x9(t){t.calcProjection()}function w9(t){t.resetRotation()}function v9(t){t.removeLeadSnapshot()}function Hy(t,e,i){t.translate=Be(e.translate,0,i),t.scale=Be(e.scale,1,i),t.origin=e.origin,t.originPoint=e.originPoint}function Yy(t,e,i,n){t.min=Be(e.min,i.min,n),t.max=Be(e.max,i.max,n)}function y9(t,e,i,n){Yy(t.x,e.x,i.x,n),Yy(t.y,e.y,i.y,n)}function b9(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const k9={duration:.45,ease:[.4,0,.1,1]},Gy=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),Xy=Gy("applewebkit/")&&!Gy("chrome/")?Math.round:Ze;function Zy(t){t.min=Xy(t.min),t.max=Xy(t.max)}function j9(t){Zy(t.x),Zy(t.y)}function d5(t,e,i){return t==="position"||t==="preserve-aspect"&&!xg(Oy(e),Oy(i),.2)}const S9=c5({attachResizeListener:(t,e)=>mr(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),e0={current:void 0},u5=c5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!e0.current){const t=new S9({});t.mount(window),t.setOptions({layoutScroll:!0}),e0.current=t}return e0.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),D9={pan:{Feature:BI},drag:{Feature:$I,ProjectionNode:u5,MeasureLayout:r5}},_9=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function C9(t){const e=_9.exec(t);if(!e)return[,];const[,i,n]=e;return[i,n]}function bg(t,e,i=1){const[n,r]=C9(t);if(!n)return;const o=window.getComputedStyle(e).getPropertyValue(n);if(o){const s=o.trim();return YD(s)?parseFloat(s):s}else return cg(r)?bg(r,e,i+1):r}function P9(t,{...e},i){const n=t.current;if(!(n instanceof Element))return{target:e,transitionEnd:i};i&&(i={...i}),t.values.forEach(r=>{const o=r.get();if(!cg(o))return;const s=bg(o,n);s&&r.set(s)});for(const r in e){const o=e[r];if(!cg(o))continue;const s=bg(o,n);s&&(e[r]=s,i||(i={}),i[r]===void 0&&(i[r]=o))}return{target:e,transitionEnd:i}}const T9=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),h5=t=>T9.has(t),E9=t=>Object.keys(t).some(h5),qy=t=>t===Ls||t===K,Qy=(t,e)=>parseFloat(t.split(", ")[e]),Ky=(t,e)=>(i,{transform:n})=>{if(n==="none"||!n)return 0;const r=n.match(/^matrix3d\((.+)\)$/);if(r)return Qy(r[1],e);{const o=n.match(/^matrix\((.+)\)$/);return o?Qy(o[1],t):0}},I9=new Set(["x","y","z"]),A9=yd.filter(t=>!I9.has(t));function M9(t){const e=[];return A9.forEach(i=>{const n=t.getValue(i);n!==void 0&&(e.push([i,n.get()]),n.set(i.startsWith("scale")?1:0))}),e.length&&t.render(),e}const nl={width:({x:t},{paddingLeft:e="0",paddingRight:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),height:({y:t},{paddingTop:e="0",paddingBottom:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Ky(4,13),y:Ky(5,14)};nl.translateX=nl.x;nl.translateY=nl.y;const z9=(t,e,i)=>{const n=e.measureViewportBox(),r=e.current,o=getComputedStyle(r),{display:s}=o,l={};s==="none"&&e.setStaticValue("display",t.display||"block"),i.forEach(d=>{l[d]=nl[d](n,o)}),e.render();const c=e.measureViewportBox();return i.forEach(d=>{const u=e.getValue(d);u&&u.jump(l[d]),t[d]=nl[d](c,o)}),t},F9=(t,e,i={},n={})=>{e={...e},n={...n};const r=Object.keys(e).filter(h5);let o=[],s=!1;const l=[];if(r.forEach(c=>{const d=t.getValue(c);if(!t.hasValue(c))return;let u=i[c],p=Al(u);const f=e[c];let g;if(Jh(f)){const y=f.length,w=f[0]===null?1:0;u=f[w],p=Al(u);for(let D=w;D<y&&f[D]!==null;D++)g?Jp(Al(f[D])===g):g=Al(f[D])}else g=Al(f);if(p!==g)if(qy(p)&&qy(g)){const y=d.get();typeof y=="string"&&d.set(parseFloat(y)),typeof f=="string"?e[c]=parseFloat(f):Array.isArray(f)&&g===K&&(e[c]=f.map(parseFloat))}else p!=null&&p.transform&&(g!=null&&g.transform)&&(u===0||f===0)?u===0?d.set(g.transform(u)):e[c]=p.transform(f):(s||(o=M9(t),s=!0),l.push(c),n[c]=n[c]!==void 0?n[c]:e[c],d.jump(f))}),l.length){const c=l.indexOf("height")>=0?window.pageYOffset:null,d=z9(e,t,l);return o.length&&o.forEach(([u,p])=>{t.getValue(u).set(p)}),t.render(),Gp&&c!==null&&window.scrollTo({top:c}),{target:d,transitionEnd:n}}else return{target:e,transitionEnd:n}};function R9(t,e,i,n){return E9(e)?F9(t,e,i,n):{target:e,transitionEnd:n}}const L9=(t,e,i,n)=>{const r=P9(t,e,n);return e=r.target,n=r.transitionEnd,R9(t,e,i,n)},kg={current:null},p5={current:!1};function N9(){if(p5.current=!0,!!Gp)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>kg.current=t.matches;t.addListener(e),e()}else kg.current=!1}function O9(t,e,i){const{willChange:n}=e;for(const r in e){const o=e[r],s=i[r];if(ki(o))t.addValue(r,o),np(n)&&n.add(r);else if(ki(s))t.addValue(r,jn(o,{owner:t})),np(n)&&n.remove(r);else if(s!==o)if(t.hasValue(r)){const l=t.getValue(r);!l.hasAnimated&&l.set(o)}else{const l=t.getStaticValue(r);t.addValue(r,jn(l!==void 0?l:o,{owner:t}))}}for(const r in i)e[r]===void 0&&t.removeValue(r);return e}const Jy=new WeakMap,f5=Object.keys(td),$9=f5.length,e2=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],B9=f1.length;class V9{constructor({parent:e,props:i,presenceContext:n,reducedMotionConfig:r,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ve.render(this.render,!1,!0);const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=i.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=i,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=s,this.isControllingVariants=Zp(i),this.isVariantNode=KS(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...u}=this.scrapeMotionValuesFromProps(i,{});for(const p in u){const f=u[p];l[p]!==void 0&&ki(f)&&(f.set(l[p],!1),np(d)&&d.add(p))}}scrapeMotionValuesFromProps(e,i){return{}}mount(e){this.current=e,Jy.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,n)=>this.bindToMotionValue(n,i)),p5.current||N9(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:kg.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Jy.delete(this.current),this.projection&&this.projection.unmount(),Pn(this.notifyUpdate),Pn(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,i){const n=Rs.has(e),r=i.on("change",s=>{this.latestValues[e]=s,this.props.onUpdate&&ve.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)}),o=i.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),o()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...i},n,r,o){let s,l;for(let c=0;c<$9;c++){const d=f5[c],{isEnabled:u,Feature:p,ProjectionNode:f,MeasureLayout:g}=td[d];f&&(s=f),u(i)&&(!this.features[d]&&p&&(this.features[d]=new p(this)),g&&(l=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:c,layout:d,drag:u,dragConstraints:p,layoutScroll:f,layoutRoot:g}=i;this.projection.setOptions({layoutId:c,layout:d,alwaysMeasureLayout:!!u||p&&ya(p),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof d=="string"?d:"both",initialPromotionConfig:o,layoutScroll:f,layoutRoot:g})}return l}updateFeatures(){for(const e in this.features){const i=this.features[e];i.isMounted?i.update():(i.mount(),i.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):at()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,i){this.latestValues[e]=i}makeTargetAnimatable(e,i=!0){return this.makeTargetAnimatableFromInstance(e,this.props,i)}update(e,i){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let n=0;n<e2.length;n++){const r=e2[n];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const o=e["on"+r];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=O9(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const n=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(n.initial=this.props.initial),n}const i={};for(let n=0;n<B9;n++){const r=f1[n],o=this.props[r];(ed(o)||o===!1)&&(i[r]=o)}return i}addVariantChild(e){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(e),()=>i.variantChildren.delete(e)}addValue(e,i){i!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,i)),this.values.set(e,i),this.latestValues[e]=i.get()}removeValue(e){this.values.delete(e);const i=this.valueSubscriptions.get(e);i&&(i(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,i){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&i!==void 0&&(n=jn(i,{owner:this}),this.addValue(e,n)),n}readValue(e){var i;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,i){this.baseTarget[e]=i}getBaseTarget(e){var i;const{initial:n}=this.props,r=typeof n=="string"||typeof n=="object"?(i=k1(this.props,n))===null||i===void 0?void 0:i[e]:void 0;if(n&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!ki(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,i){return this.events[e]||(this.events[e]=new A1),this.events[e].add(i)}notify(e,...i){this.events[e]&&this.events[e].notify(...i)}}class m5 extends V9{sortInstanceNodePosition(e,i){return e.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(e,i){return e.style?e.style[i]:void 0}removeValueFromRenderState(e,{vars:i,style:n}){delete i[e],delete n[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:i,...n},{transformValues:r},o){let s=sI(n,e||{},this);if(r&&(i&&(i=r(i)),n&&(n=r(n)),s&&(s=r(s))),o){rI(this,n,s);const l=L9(this,n,s,i);i=l.transitionEnd,n=l.target}return{transition:e,transitionEnd:i,...n}}}function W9(t){return window.getComputedStyle(t)}class U9 extends m5{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,i){if(Rs.has(i)){const n=C1(i);return n&&n.default||0}else{const n=W9(e),r=(iD(i)?n.getPropertyValue(i):n[i])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:i}){return i5(e,i)}build(e,i,n,r){x1(e,i,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,i){return b1(e,i)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;ki(e)&&(this.childSubscription=e.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}renderInstance(e,i,n,r){lD(e,i,n,r)}}class H9 extends m5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,i){return e[i]}readValueFromInstance(e,i){if(Rs.has(i)){const n=C1(i);return n&&n.default||0}return i=cD.has(i)?i:h1(i),e.getAttribute(i)}measureInstanceViewportBox(){return at()}scrapeMotionValuesFromProps(e,i){return uD(e,i)}build(e,i,n,r){v1(e,i,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,i,n,r){dD(e,i,n,r)}mount(e){this.isSVGTag=y1(e.tagName),super.mount(e)}}const Y9=(t,e)=>g1(t)?new H9(e,{enableHardwareAcceleration:!1}):new U9(e,{enableHardwareAcceleration:!0}),G9={layout:{ProjectionNode:u5,MeasureLayout:r5}},X9={...yI,...WT,...D9,...G9},O=KP((t,e)=>ET(t,e,X9,Y9));function g5(){const t=T.useRef(!1);return gl(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function Z9(){const t=g5(),[e,i]=T.useState(0),n=T.useCallback(()=>{t.current&&i(e+1)},[e]);return[T.useCallback(()=>ve.postRender(n),[n]),e]}class q9 extends T.Component{getSnapshotBeforeUpdate(e){const i=this.props.childRef.current;if(i&&e.isPresent&&!this.props.isPresent){const n=this.props.sizeRef.current;n.height=i.offsetHeight||0,n.width=i.offsetWidth||0,n.top=i.offsetTop,n.left=i.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Q9({children:t,isPresent:e}){const i=T.useId(),n=T.useRef(null),r=T.useRef({width:0,height:0,top:0,left:0});return T.useInsertionEffect(()=>{const{width:o,height:s,top:l,left:c}=r.current;if(e||!n.current||!o||!s)return;n.current.dataset.motionPopId=i;const d=document.createElement("style");return document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[e]),T.createElement(q9,{isPresent:e,childRef:n,sizeRef:r},T.cloneElement(t,{ref:n}))}const t0=({children:t,initial:e,isPresent:i,onExitComplete:n,custom:r,presenceAffectsLayout:o,mode:s})=>{const l=xl(K9),c=T.useId(),d=T.useMemo(()=>({id:c,initial:e,isPresent:i,custom:r,onExitComplete:u=>{l.set(u,!0);for(const p of l.values())if(!p)return;n&&n()},register:u=>(l.set(u,!1),()=>l.delete(u))}),o?void 0:[i]);return T.useMemo(()=>{l.forEach((u,p)=>l.set(p,!1))},[i]),T.useEffect(()=>{!i&&!l.size&&n&&n()},[i]),s==="popLayout"&&(t=T.createElement(Q9,{isPresent:i},t)),T.createElement(Yp.Provider,{value:d},t)};function K9(){return new Map}function J9(t){return T.useEffect(()=>()=>t(),[])}const qo=t=>t.key||"";function eA(t,e){t.forEach(i=>{const n=qo(i);e.set(n,i)})}function tA(t){const e=[];return T.Children.forEach(t,i=>{T.isValidElement(i)&&e.push(i)}),e}const iA=({children:t,custom:e,initial:i=!0,onExitComplete:n,exitBeforeEnter:r,presenceAffectsLayout:o=!0,mode:s="sync"})=>{const l=T.useContext(m1).forceRender||Z9()[0],c=g5(),d=tA(t);let u=d;const p=T.useRef(new Map).current,f=T.useRef(u),g=T.useRef(new Map).current,y=T.useRef(!0);if(gl(()=>{y.current=!1,eA(d,g),f.current=u}),J9(()=>{y.current=!0,g.clear(),p.clear()}),y.current)return T.createElement(T.Fragment,null,u.map(b=>T.createElement(t0,{key:qo(b),isPresent:!0,initial:i?void 0:!1,presenceAffectsLayout:o,mode:s},b)));u=[...u];const w=f.current.map(qo),D=d.map(qo),j=w.length;for(let b=0;b<j;b++){const v=w[b];D.indexOf(v)===-1&&!p.has(v)&&p.set(v,void 0)}return s==="wait"&&p.size&&(u=[]),p.forEach((b,v)=>{if(D.indexOf(v)!==-1)return;const h=g.get(v);if(!h)return;const x=w.indexOf(v);let k=b;if(!k){const S=()=>{p.delete(v);const _=Array.from(g.keys()).filter(C=>!D.includes(C));if(_.forEach(C=>g.delete(C)),f.current=d.filter(C=>{const E=qo(C);return E===v||_.includes(E)}),!p.size){if(c.current===!1)return;l(),n&&n()}};k=T.createElement(t0,{key:qo(h),isPresent:!1,onExitComplete:S,custom:e,presenceAffectsLayout:o,mode:s},h),p.set(v,k)}u.splice(x,0,k)}),u=u.map(b=>{const v=b.key;return p.has(v)?b:T.createElement(t0,{key:qo(b),isPresent:!0,presenceAffectsLayout:o,mode:s},b)}),T.createElement(T.Fragment,null,p.size?u:u.map(b=>T.cloneElement(b)))};function x5(t){const e=xl(()=>jn(t)),{isStatic:i}=T.useContext(u1);if(i){const[,n]=T.useState(t);T.useEffect(()=>e.on("change",n),[])}return e}const nA=t=>t&&typeof t=="object"&&t.mix,rA=t=>nA(t)?t.mix:void 0;function oA(...t){const e=!Array.isArray(t[0]),i=e?0:-1,n=t[0+i],r=t[1+i],o=t[2+i],s=t[3+i],l=ef(r,o,{mixer:rA(o[0]),...s});return e?l(n):l}function w5(t,e){const i=x5(e()),n=()=>i.set(e());return n(),gl(()=>{const r=()=>ve.update(n,!1,!0),o=t.map(s=>s.on("change",r));return()=>{o.forEach(s=>s()),Pn(n)}}),i}function sA(t){mc.current=[],t();const e=w5(mc.current,t);return mc.current=void 0,e}function zl(t,e,i,n){if(typeof t=="function")return sA(t);const r=typeof e=="function"?e:oA(e,i,n);return Array.isArray(t)?t2(t,r):t2([t],([o])=>r(o))}function t2(t,e){const i=xl(()=>[]);return w5(t,()=>{i.length=0;const n=t.length;for(let r=0;r<n;r++)i[r]=t[r].get();return e(i)})}function v5(t,e,i){var n;if(typeof t=="string"){let r=document;e&&(Jp(!!e.current),r=e.current),i?((n=i[t])!==null&&n!==void 0||(i[t]=r.querySelectorAll(t)),t=i[t]):t=r.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}const lh=new WeakMap;let $r;function aA(t,e){if(e){const{inlineSize:i,blockSize:n}=e[0];return{width:i,height:n}}else return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}function lA({target:t,contentRect:e,borderBoxSize:i}){var n;(n=lh.get(t))===null||n===void 0||n.forEach(r=>{r({target:t,contentSize:e,get size(){return aA(t,i)}})})}function cA(t){t.forEach(lA)}function dA(){typeof ResizeObserver>"u"||($r=new ResizeObserver(cA))}function uA(t,e){$r||dA();const i=v5(t);return i.forEach(n=>{let r=lh.get(n);r||(r=new Set,lh.set(n,r)),r.add(e),$r==null||$r.observe(n)}),()=>{i.forEach(n=>{const r=lh.get(n);r==null||r.delete(e),r!=null&&r.size||$r==null||$r.unobserve(n)})}}const ch=new Set;let wc;function hA(){wc=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};ch.forEach(i=>i(e))},window.addEventListener("resize",wc)}function pA(t){return ch.add(t),wc||hA(),()=>{ch.delete(t),!ch.size&&wc&&(wc=void 0)}}function fA(t,e){return typeof t=="function"?pA(t):uA(t,e)}const mA=50,i2=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),gA=()=>({time:0,x:i2(),y:i2()}),xA={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function n2(t,e,i,n){const r=i[e],{length:o,position:s}=xA[e],l=r.current,c=i.time;r.current=t["scroll"+s],r.scrollLength=t["scroll"+o]-t["client"+o],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=il(0,r.scrollLength,r.current);const d=n-c;r.velocity=d>mA?0:_1(r.current-l,d)}function wA(t,e,i){n2(t,"x",e,i),n2(t,"y",e,i),e.time=i}function vA(t,e){const i={x:0,y:0};let n=t;for(;n&&n!==e;)if(n instanceof HTMLElement)i.x+=n.offsetLeft,i.y+=n.offsetTop,n=n.offsetParent;else if(n.tagName==="svg"){const r=n.getBoundingClientRect();n=n.parentElement;const o=n.getBoundingClientRect();i.x+=r.left-o.left,i.y+=r.top-o.top}else if(n instanceof SVGGraphicsElement){const{x:r,y:o}=n.getBBox();i.x+=r,i.y+=o;let s=null,l=n.parentNode;for(;!s;)l.tagName==="svg"&&(s=l),l=n.parentNode;n=s}else break;return i}const yA={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},jg={start:0,center:.5,end:1};function r2(t,e,i=0){let n=0;if(jg[t]!==void 0&&(t=jg[t]),typeof t=="string"){const r=parseFloat(t);t.endsWith("px")?n=r:t.endsWith("%")?t=r/100:t.endsWith("vw")?n=r/100*document.documentElement.clientWidth:t.endsWith("vh")?n=r/100*document.documentElement.clientHeight:t=r}return typeof t=="number"&&(n=e*t),i+n}const bA=[0,0];function kA(t,e,i,n){let r=Array.isArray(t)?t:bA,o=0,s=0;return typeof t=="number"?r=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?r=t.split(" "):r=[t,jg[t]?t:"0"]),o=r2(r[0],i,n),s=r2(r[1],e),o-s}const jA={x:0,y:0};function SA(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function DA(t,e,i){let{offset:n=yA.All}=i;const{target:r=t,axis:o="y"}=i,s=o==="y"?"height":"width",l=r!==t?vA(r,t):jA,c=r===t?{width:t.scrollWidth,height:t.scrollHeight}:SA(r),d={width:t.clientWidth,height:t.clientHeight};e[o].offset.length=0;let u=!e[o].interpolate;const p=n.length;for(let f=0;f<p;f++){const g=kA(n[f],d[s],c[s],l[o]);!u&&g!==e[o].interpolatorOffsets[f]&&(u=!0),e[o].offset[f]=g}u&&(e[o].interpolate=ef(e[o].offset,BD(n)),e[o].interpolatorOffsets=[...e[o].offset]),e[o].progress=e[o].interpolate(e[o].current)}function _A(t,e=t,i){if(i.x.targetOffset=0,i.y.targetOffset=0,e!==t){let n=e;for(;n&&n!==t;)i.x.targetOffset+=n.offsetLeft,i.y.targetOffset+=n.offsetTop,n=n.offsetParent}i.x.targetLength=e===t?e.scrollWidth:e.clientWidth,i.y.targetLength=e===t?e.scrollHeight:e.clientHeight,i.x.containerLength=t.clientWidth,i.y.containerLength=t.clientHeight}function CA(t,e,i,n={}){return{measure:()=>_A(t,n.target,i),update:r=>{wA(t,i,r),(n.offset||n.target)&&DA(t,i,n)},notify:()=>e(i)}}const Fl=new WeakMap,o2=new WeakMap,i0=new WeakMap,s2=t=>t===document.documentElement?window:t;function PA(t,{container:e=document.documentElement,...i}={}){let n=i0.get(e);n||(n=new Set,i0.set(e,n));const r=gA(),o=CA(e,t,r,i);if(n.add(o),!Fl.has(e)){const l=()=>{for(const f of n)f.measure()},c=()=>{for(const f of n)f.update(Mt.timestamp)},d=()=>{for(const f of n)f.notify()},u=()=>{ve.read(l,!1,!0),ve.read(c,!1,!0),ve.update(d,!1,!0)};Fl.set(e,u);const p=s2(e);window.addEventListener("resize",u,{passive:!0}),e!==document.documentElement&&o2.set(e,fA(e,u)),p.addEventListener("scroll",u,{passive:!0})}const s=Fl.get(e);return ve.read(s,!1,!0),()=>{var l;Pn(s);const c=i0.get(e);if(!c||(c.delete(o),c.size))return;const d=Fl.get(e);Fl.delete(e),d&&(s2(e).removeEventListener("scroll",d),(l=o2.get(e))===null||l===void 0||l(),window.removeEventListener("resize",d))}}function a2(t,e){vD(!!(!e||e.current))}const TA=()=>({scrollX:jn(0),scrollY:jn(0),scrollXProgress:jn(0),scrollYProgress:jn(0)});function EA({container:t,target:e,layoutEffect:i=!0,...n}={}){const r=xl(TA);return(i?gl:T.useEffect)(()=>(a2("target",e),a2("container",t),PA(({x:s,y:l})=>{r.scrollX.set(s.current),r.scrollXProgress.set(s.progress),r.scrollY.set(l.current),r.scrollYProgress.set(l.progress)},{...n,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0})),[t,e,JSON.stringify(n.offset)]),r}function IA(t){t.values.forEach(e=>e.stop())}function AA(){const t=new Set,e={subscribe(i){return t.add(i),()=>void t.delete(i)},start(i,n){const r=[];return t.forEach(o=>{r.push(qD(o,i,{transitionOverride:n}))}),Promise.all(r)},set(i){return t.forEach(n=>{nI(n,i)})},stop(){t.forEach(i=>{IA(i)})},mount(){return()=>{e.stop()}}};return e}function MA(){const t=xl(AA);return gl(t.mount,[]),t}const zA=MA,FA={some:0,all:1};function RA(t,e,{root:i,margin:n,amount:r="some"}={}){const o=v5(t),s=new WeakMap,l=d=>{d.forEach(u=>{const p=s.get(u.target);if(u.isIntersecting!==!!p)if(u.isIntersecting){const f=e(u);typeof f=="function"?s.set(u.target,f):c.unobserve(u.target)}else p&&(p(u),s.delete(u.target))})},c=new IntersectionObserver(l,{root:i,rootMargin:n,threshold:typeof r=="number"?r:FA[r]});return o.forEach(d=>c.observe(d)),()=>c.disconnect()}function LA(t,{root:e,margin:i,amount:n,once:r=!1}={}){const[o,s]=T.useState(!1);return T.useEffect(()=>{if(!t.current||r&&o)return;const l=()=>(s(!0),r?void 0:()=>s(!1)),c={root:e&&e.current||void 0,margin:i,amount:n};return RA(t.current,l,c)},[e,t,i,r,n]),o}const rt=({title:t,description:e,keywords:i="graphic design, brand design, UX/UI design, portfolio, Nooshin Shahsavan",image:n="/src/assets/logoweb.png",url:r=window.location.href,type:o="website"})=>a.jsxs(jS,{children:[a.jsx("title",{children:t}),a.jsx("meta",{name:"description",content:e}),a.jsx("meta",{name:"keywords",content:i}),a.jsx("meta",{property:"og:title",content:t}),a.jsx("meta",{property:"og:description",content:e}),a.jsx("meta",{property:"og:image",content:n}),a.jsx("meta",{property:"og:url",content:r}),a.jsx("meta",{property:"og:type",content:o}),a.jsx("meta",{property:"og:site_name",content:"Nooshin Shahsavan Portfolio"}),a.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),a.jsx("meta",{name:"twitter:title",content:t}),a.jsx("meta",{name:"twitter:description",content:e}),a.jsx("meta",{name:"twitter:image",content:n}),a.jsx("meta",{name:"author",content:"Nooshin Shahsavan"}),a.jsx("meta",{name:"robots",content:"index, follow"}),a.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a.jsx("link",{rel:"canonical",href:r})]});function lr(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y5(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Li={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},rl={duration:.5,overwrite:!1,delay:0},z1,Rt,Re,tn=1e8,Ce=1/tn,Sg=Math.PI*2,NA=Sg/4,OA=0,b5=Math.sqrt,$A=Math.cos,BA=Math.sin,Pt=function(e){return typeof e=="string"},qe=function(e){return typeof e=="function"},Dr=function(e){return typeof e=="number"},F1=function(e){return typeof e>"u"},Gn=function(e){return typeof e=="object"},wi=function(e){return e!==!1},R1=function(){return typeof window<"u"},iu=function(e){return qe(e)||Pt(e)},k5=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Xt=Array.isArray,Dg=/(?:-?\.?\d|\.)+/gi,j5=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Sa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,n0=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,S5=/[+-]=-?[.\d]+/,D5=/[^,'"\[\]\s]+/gi,VA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,$e,Fn,_g,L1,$i={},op={},_5,C5=function(e){return(op=ol(e,$i))&&ji},N1=function(e,i){return console.warn("Invalid property",e,"set to",i,"Missing plugin? gsap.registerPlugin()")},id=function(e,i){return!i&&console.warn(e)},P5=function(e,i){return e&&($i[e]=i)&&op&&(op[e]=i)||$i},nd=function(){return 0},WA={suppressEvents:!0,isStart:!0,kill:!1},dh={suppressEvents:!0,kill:!1},UA={suppressEvents:!0},O1={},fo=[],Cg={},T5,Ei={},r0={},l2=30,uh=[],$1="",B1=function(e){var i=e[0],n,r;if(Gn(i)||qe(i)||(e=[e]),!(n=(i._gsap||{}).harness)){for(r=uh.length;r--&&!uh[r].targetTest(i););n=uh[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new J5(e[r],n)))||e.splice(r,1);return e},ps=function(e){return e._gsap||B1(nn(e))[0]._gsap},E5=function(e,i,n){return(n=e[i])&&qe(n)?e[i]():F1(n)&&e.getAttribute&&e.getAttribute(i)||n},vi=function(e,i){return(e=e.split(",")).forEach(i)||e},tt=function(e){return Math.round(e*1e5)/1e5||0},dt=function(e){return Math.round(e*1e7)/1e7||0},Ra=function(e,i){var n=i.charAt(0),r=parseFloat(i.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},HA=function(e,i){for(var n=i.length,r=0;e.indexOf(i[r])<0&&++r<n;);return r<n},sp=function(){var e=fo.length,i=fo.slice(0),n,r;for(Cg={},fo.length=0,n=0;n<e;n++)r=i[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},V1=function(e){return!!(e._initted||e._startAt||e.add)},I5=function(e,i,n,r){fo.length&&!Rt&&sp(),e.render(i,n,r||!!(Rt&&i<0&&V1(e))),fo.length&&!Rt&&sp()},A5=function(e){var i=parseFloat(e);return(i||i===0)&&(e+"").match(D5).length<2?i:Pt(e)?e.trim():e},M5=function(e){return e},Bi=function(e,i){for(var n in i)n in e||(e[n]=i[n]);return e},YA=function(e){return function(i,n){for(var r in n)r in i||r==="duration"&&e||r==="ease"||(i[r]=n[r])}},ol=function(e,i){for(var n in i)e[n]=i[n];return e},c2=function t(e,i){for(var n in i)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Gn(i[n])?t(e[n]||(e[n]={}),i[n]):i[n]);return e},ap=function(e,i){var n={},r;for(r in e)r in i||(n[r]=e[r]);return n},vc=function(e){var i=e.parent||$e,n=e.keyframes?YA(Xt(e.keyframes)):Bi;if(wi(e.inherit))for(;i;)n(e,i.vars.defaults),i=i.parent||i._dp;return e},GA=function(e,i){for(var n=e.length,r=n===i.length;r&&n--&&e[n]===i[n];);return n<0},z5=function(e,i,n,r,o){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e[r],l;if(o)for(l=i[o];s&&s[o]>l;)s=s._prev;return s?(i._next=s._next,s._next=i):(i._next=e[n],e[n]=i),i._next?i._next._prev=i:e[r]=i,i._prev=s,i.parent=i._dp=e,i},tf=function(e,i,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=i._prev,s=i._next;o?o._next=s:e[n]===i&&(e[n]=s),s?s._prev=o:e[r]===i&&(e[r]=o),i._next=i._prev=i.parent=null},jo=function(e,i){e.parent&&(!i||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},fs=function(e,i){if(e&&(!i||i._end>e._dur||i._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},XA=function(e){for(var i=e.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return e},Pg=function(e,i,n,r){return e._startAt&&(Rt?e._startAt.revert(dh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(i,!0,r))},ZA=function t(e){return!e||e._ts&&t(e.parent)},d2=function(e){return e._repeat?sl(e._tTime,e=e.duration()+e._rDelay)*e:0},sl=function(e,i){var n=Math.floor(e=dt(e/i));return e&&n===e?n-1:n},lp=function(e,i){return(e-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},nf=function(e){return e._end=dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ce)||0))},rf=function(e,i){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=dt(n._time-(e._ts>0?i/e._ts:((e._dirty?e.totalDuration():e._tDur)-i)/-e._ts)),nf(e),n._dirty||fs(n,e)),e},F5=function(e,i){var n;if((i._time||!i._dur&&i._initted||i._start<e._time&&(i._dur||!i.add))&&(n=lp(e.rawTime(),i),(!i._dur||Sd(0,i.totalDuration(),n)-i._tTime>Ce)&&i.render(n,!0)),fs(e,i)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ce}},$n=function(e,i,n,r){return i.parent&&jo(i),i._start=dt((Dr(n)?n:n||e!==$e?Xi(e,n,i):e._time)+i._delay),i._end=dt(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),z5(e,i,"_first","_last",e._sort?"_start":0),Tg(i)||(e._recent=i),r||F5(e,i),e._ts<0&&rf(e,e._tTime),e},R5=function(e,i){return($i.ScrollTrigger||N1("scrollTrigger",i))&&$i.ScrollTrigger.create(i,e)},L5=function(e,i,n,r,o){if(U1(e,i,o),!e._initted)return 1;if(!n&&e._pt&&!Rt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&T5!==Ai.frame)return fo.push(e),e._lazy=[o,r],1},qA=function t(e){var i=e.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||t(i))},Tg=function(e){var i=e.data;return i==="isFromStart"||i==="isStart"},QA=function(e,i,n,r){var o=e.ratio,s=i<0||!i&&(!e._start&&qA(e)&&!(!e._initted&&Tg(e))||(e._ts<0||e._dp._ts<0)&&!Tg(e))?0:1,l=e._rDelay,c=0,d,u,p;if(l&&e._repeat&&(c=Sd(0,e._tDur,i),u=sl(c,l),e._yoyo&&u&1&&(s=1-s),u!==sl(e._tTime,l)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||Rt||r||e._zTime===Ce||!i&&e._zTime){if(!e._initted&&L5(e,i,r,n,c))return;for(p=e._zTime,e._zTime=i||(n?Ce:0),n||(n=i&&!p),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=c,d=e._pt;d;)d.r(s,d.d),d=d._next;i<0&&Pg(e,i,n,!0),e._onUpdate&&!n&&Fi(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Fi(e,"onRepeat"),(i>=e._tDur||i<0)&&e.ratio===s&&(s&&jo(e,1),!n&&!Rt&&(Fi(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=i)},KA=function(e,i,n){var r;if(n>i)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>i)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<i)return r;r=r._prev}},al=function(e,i,n,r){var o=e._repeat,s=dt(i)||0,l=e._tTime/e._tDur;return l&&!r&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:dt(s*(o+1)+e._rDelay*o):s,l>0&&!r&&rf(e,e._tTime=e._tDur*l),e.parent&&nf(e),n||fs(e.parent,e),e},u2=function(e){return e instanceof oi?fs(e):al(e,e._dur)},JA={_start:0,endTime:nd,totalDuration:nd},Xi=function t(e,i,n){var r=e.labels,o=e._recent||JA,s=e.duration()>=tn?o.endTime(!1):e._dur,l,c,d;return Pt(i)&&(isNaN(i)||i in r)?(c=i.charAt(0),d=i.substr(-1)==="%",l=i.indexOf("="),c==="<"||c===">"?(l>=0&&(i=i.replace(/=/,"")),(c==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(i.substr(1))||0)*(d?(l<0?o:n).totalDuration()/100:1)):l<0?(i in r||(r[i]=s),r[i]):(c=parseFloat(i.charAt(l-1)+i.substr(l+1)),d&&n&&(c=c/100*(Xt(n)?n[0]:n).totalDuration()),l>1?t(e,i.substr(0,l-1),n)+c:s+c)):i==null?s:+i},yc=function(e,i,n){var r=Dr(i[1]),o=(r?2:1)+(e<2?0:1),s=i[o],l,c;if(r&&(s.duration=i[1]),s.parent=n,e){for(l=s,c=n;c&&!("immediateRender"in l);)l=c.vars.defaults||{},c=wi(c.vars.inherit)&&c.parent;s.immediateRender=wi(l.immediateRender),e<2?s.runBackwards=1:s.startAt=i[o-1]}return new ct(i[0],s,i[o+1])},Eo=function(e,i){return e||e===0?i(e):i},Sd=function(e,i,n){return n<e?e:n>i?i:n},Yt=function(e,i){return!Pt(e)||!(i=VA.exec(e))?"":i[1]},eM=function(e,i,n){return Eo(n,function(r){return Sd(e,i,r)})},Eg=[].slice,N5=function(e,i){return e&&Gn(e)&&"length"in e&&(!i&&!e.length||e.length-1 in e&&Gn(e[0]))&&!e.nodeType&&e!==Fn},tM=function(e,i,n){return n===void 0&&(n=[]),e.forEach(function(r){var o;return Pt(r)&&!i||N5(r,1)?(o=n).push.apply(o,nn(r)):n.push(r)})||n},nn=function(e,i,n){return Re&&!i&&Re.selector?Re.selector(e):Pt(e)&&!n&&(_g||!ll())?Eg.call((i||L1).querySelectorAll(e),0):Xt(e)?tM(e,n):N5(e)?Eg.call(e,0):e?[e]:[]},Ig=function(e){return e=nn(e)[0]||id("Invalid scope")||{},function(i){var n=e.current||e.nativeElement||e;return nn(i,n.querySelectorAll?n:n===e?id("Invalid scope")||L1.createElement("div"):e)}},O5=function(e){return e.sort(function(){return .5-Math.random()})},$5=function(e){if(qe(e))return e;var i=Gn(e)?e:{each:e},n=ms(i.ease),r=i.from||0,o=parseFloat(i.base)||0,s={},l=r>0&&r<1,c=isNaN(r)||l,d=i.axis,u=r,p=r;return Pt(r)?u=p={center:.5,edges:.5,end:1}[r]||0:!l&&c&&(u=r[0],p=r[1]),function(f,g,y){var w=(y||i).length,D=s[w],j,b,v,h,x,k,S,_,C;if(!D){if(C=i.grid==="auto"?0:(i.grid||[1,tn])[1],!C){for(S=-tn;S<(S=y[C++].getBoundingClientRect().left)&&C<w;);C<w&&C--}for(D=s[w]=[],j=c?Math.min(C,w)*u-.5:r%C,b=C===tn?0:c?w*p/C-.5:r/C|0,S=0,_=tn,k=0;k<w;k++)v=k%C-j,h=b-(k/C|0),D[k]=x=d?Math.abs(d==="y"?h:v):b5(v*v+h*h),x>S&&(S=x),x<_&&(_=x);r==="random"&&O5(D),D.max=S-_,D.min=_,D.v=w=(parseFloat(i.amount)||parseFloat(i.each)*(C>w?w-1:d?d==="y"?w/C:C:Math.max(C,w/C))||0)*(r==="edges"?-1:1),D.b=w<0?o-w:o,D.u=Yt(i.amount||i.each)||0,n=n&&w<0?q5(n):n}return w=(D[f]-D.min)/D.max||0,dt(D.b+(n?n(w):w)*D.v)+D.u}},Ag=function(e){var i=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=dt(Math.round(parseFloat(n)/e)*e*i);return(r-r%1)/i+(Dr(n)?0:Yt(n))}},B5=function(e,i){var n=Xt(e),r,o;return!n&&Gn(e)&&(r=n=e.radius||tn,e.values?(e=nn(e.values),(o=!Dr(e[0]))&&(r*=r)):e=Ag(e.increment)),Eo(i,n?qe(e)?function(s){return o=e(s),Math.abs(o-s)<=r?o:s}:function(s){for(var l=parseFloat(o?s.x:s),c=parseFloat(o?s.y:0),d=tn,u=0,p=e.length,f,g;p--;)o?(f=e[p].x-l,g=e[p].y-c,f=f*f+g*g):f=Math.abs(e[p]-l),f<d&&(d=f,u=p);return u=!r||d<=r?e[u]:s,o||u===s||Dr(s)?u:u+Yt(s)}:Ag(e))},V5=function(e,i,n,r){return Eo(Xt(e)?!i:n===!0?!!(n=0):!r,function(){return Xt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(i-e+n*.99))/n)*n*r)/r})},iM=function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return function(r){return i.reduce(function(o,s){return s(o)},r)}},nM=function(e,i){return function(n){return e(parseFloat(n))+(i||Yt(n))}},rM=function(e,i,n){return U5(e,i,0,1,n)},W5=function(e,i,n){return Eo(n,function(r){return e[~~i(r)]})},oM=function t(e,i,n){var r=i-e;return Xt(e)?W5(e,t(0,e.length),i):Eo(n,function(o){return(r+(o-e)%r)%r+e})},sM=function t(e,i,n){var r=i-e,o=r*2;return Xt(e)?W5(e,t(0,e.length-1),i):Eo(n,function(s){return s=(o+(s-e)%o)%o||0,e+(s>r?o-s:s)})},rd=function(e){for(var i=0,n="",r,o,s,l;~(r=e.indexOf("random(",i));)s=e.indexOf(")",r),l=e.charAt(r+7)==="[",o=e.substr(r+7,s-r-7).match(l?D5:Dg),n+=e.substr(i,r-i)+V5(l?o:+o[0],l?0:+o[1],+o[2]||1e-5),i=s+1;return n+e.substr(i,e.length-i)},U5=function(e,i,n,r,o){var s=i-e,l=r-n;return Eo(o,function(c){return n+((c-e)/s*l||0)})},aM=function t(e,i,n,r){var o=isNaN(e+i)?0:function(g){return(1-g)*e+g*i};if(!o){var s=Pt(e),l={},c,d,u,p,f;if(n===!0&&(r=1)&&(n=null),s)e={p:e},i={p:i};else if(Xt(e)&&!Xt(i)){for(u=[],p=e.length,f=p-2,d=1;d<p;d++)u.push(t(e[d-1],e[d]));p--,o=function(y){y*=p;var w=Math.min(f,~~y);return u[w](y-w)},n=i}else r||(e=ol(Xt(e)?[]:{},e));if(!u){for(c in i)W1.call(l,e,c,"get",i[c]);o=function(y){return G1(y,l)||(s?e.p:e)}}}return Eo(n,o)},h2=function(e,i,n){var r=e.labels,o=tn,s,l,c;for(s in r)l=r[s]-i,l<0==!!n&&l&&o>(l=Math.abs(l))&&(c=s,o=l);return c},Fi=function(e,i,n){var r=e.vars,o=r[i],s=Re,l=e._ctx,c,d,u;if(o)return c=r[i+"Params"],d=r.callbackScope||e,n&&fo.length&&sp(),l&&(Re=l),u=c?o.apply(d,c):o.call(d),Re=s,u},Zl=function(e){return jo(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Rt),e.progress()<1&&Fi(e,"onInterrupt"),e},Da,H5=[],Y5=function(e){if(e)if(e=!e.name&&e.default||e,R1()||e.headless){var i=e.name,n=qe(e),r=i&&!n&&e.init?function(){this._props=[]}:e,o={init:nd,render:G1,add:W1,kill:jM,modifier:kM,rawVars:0},s={targetTest:0,get:0,getSetter:Y1,aliases:{},register:0};if(ll(),e!==r){if(Ei[i])return;Bi(r,Bi(ap(e,o),s)),ol(r.prototype,ol(o,ap(e,s))),Ei[r.prop=i]=r,e.targetTest&&(uh.push(r),O1[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}P5(i,r),e.register&&e.register(ji,r,yi)}else H5.push(e)},_e=255,ql={aqua:[0,_e,_e],lime:[0,_e,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_e],navy:[0,0,128],white:[_e,_e,_e],olive:[128,128,0],yellow:[_e,_e,0],orange:[_e,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_e,0,0],pink:[_e,192,203],cyan:[0,_e,_e],transparent:[_e,_e,_e,0]},o0=function(e,i,n){return e+=e<0?1:e>1?-1:0,(e*6<1?i+(n-i)*e*6:e<.5?n:e*3<2?i+(n-i)*(2/3-e)*6:i)*_e+.5|0},G5=function(e,i,n){var r=e?Dr(e)?[e>>16,e>>8&_e,e&_e]:0:ql.black,o,s,l,c,d,u,p,f,g,y;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ql[e])r=ql[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),l=e.charAt(3),e="#"+o+o+s+s+l+l+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&_e,r&_e,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&_e,e&_e]}else if(e.substr(0,3)==="hsl"){if(r=y=e.match(Dg),!i)c=+r[0]%360/360,d=+r[1]/100,u=+r[2]/100,s=u<=.5?u*(d+1):u+d-u*d,o=u*2-s,r.length>3&&(r[3]*=1),r[0]=o0(c+1/3,o,s),r[1]=o0(c,o,s),r[2]=o0(c-1/3,o,s);else if(~e.indexOf("="))return r=e.match(j5),n&&r.length<4&&(r[3]=1),r}else r=e.match(Dg)||ql.transparent;r=r.map(Number)}return i&&!y&&(o=r[0]/_e,s=r[1]/_e,l=r[2]/_e,p=Math.max(o,s,l),f=Math.min(o,s,l),u=(p+f)/2,p===f?c=d=0:(g=p-f,d=u>.5?g/(2-p-f):g/(p+f),c=p===o?(s-l)/g+(s<l?6:0):p===s?(l-o)/g+2:(o-s)/g+4,c*=60),r[0]=~~(c+.5),r[1]=~~(d*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},X5=function(e){var i=[],n=[],r=-1;return e.split(mo).forEach(function(o){var s=o.match(Sa)||[];i.push.apply(i,s),n.push(r+=s.length+1)}),i.c=n,i},p2=function(e,i,n){var r="",o=(e+r).match(mo),s=i?"hsla(":"rgba(",l=0,c,d,u,p;if(!o)return e;if(o=o.map(function(f){return(f=G5(f,i,1))&&s+(i?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=X5(e),c=n.c,c.join(r)!==u.c.join(r)))for(d=e.replace(mo,"1").split(Sa),p=d.length-1;l<p;l++)r+=d[l]+(~c.indexOf(l)?o.shift()||s+"0,0,0,0)":(u.length?u:o.length?o:n).shift());if(!d)for(d=e.split(mo),p=d.length-1;l<p;l++)r+=d[l]+o[l];return r+d[p]},mo=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ql)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),lM=/hsl[a]?\(/,Z5=function(e){var i=e.join(" "),n;if(mo.lastIndex=0,mo.test(i))return n=lM.test(i),e[1]=p2(e[1],n),e[0]=p2(e[0],n,X5(e[1])),!0},od,Ai=function(){var t=Date.now,e=500,i=33,n=t(),r=n,o=1e3/240,s=o,l=[],c,d,u,p,f,g,y=function w(D){var j=t()-r,b=D===!0,v,h,x,k;if((j>e||j<0)&&(n+=j-i),r+=j,x=r-n,v=x-s,(v>0||b)&&(k=++p.frame,f=x-p.time*1e3,p.time=x=x/1e3,s+=v+(v>=o?4:o-v),h=1),b||(c=d(w)),h)for(g=0;g<l.length;g++)l[g](x,f,k,D)};return p={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(D){return f/(1e3/(D||60))},wake:function(){_5&&(!_g&&R1()&&(Fn=_g=window,L1=Fn.document||{},$i.gsap=ji,(Fn.gsapVersions||(Fn.gsapVersions=[])).push(ji.version),C5(op||Fn.GreenSockGlobals||!Fn.gsap&&Fn||{}),H5.forEach(Y5)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&p.sleep(),d=u||function(D){return setTimeout(D,s-p.time*1e3+1|0)},od=1,y(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),od=0,d=nd},lagSmoothing:function(D,j){e=D||1/0,i=Math.min(j||33,e)},fps:function(D){o=1e3/(D||240),s=p.time*1e3+o},add:function(D,j,b){var v=j?function(h,x,k,S){D(h,x,k,S),p.remove(v)}:D;return p.remove(D),l[b?"unshift":"push"](v),ll(),v},remove:function(D,j){~(j=l.indexOf(D))&&l.splice(j,1)&&g>=j&&g--},_listeners:l},p}(),ll=function(){return!od&&Ai.wake()},pe={},cM=/^[\d.\-M][\d.\-,\s]/,dM=/["']/g,uM=function(e){for(var i={},n=e.substr(1,e.length-3).split(":"),r=n[0],o=1,s=n.length,l,c,d;o<s;o++)c=n[o],l=o!==s-1?c.lastIndexOf(","):c.length,d=c.substr(0,l),i[r]=isNaN(d)?d.replace(dM,"").trim():+d,r=c.substr(l+1).trim();return i},hM=function(e){var i=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",i);return e.substring(i,~r&&r<n?e.indexOf(")",n+1):n)},pM=function(e){var i=(e+"").split("("),n=pe[i[0]];return n&&i.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[uM(i[1])]:hM(e).split(",").map(A5)):pe._CE&&cM.test(e)?pe._CE("",e):n},q5=function(e){return function(i){return 1-e(1-i)}},Q5=function t(e,i){for(var n=e._first,r;n;)n instanceof oi?t(n,i):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==i&&(n.timeline?t(n.timeline,i):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=i)),n=n._next},ms=function(e,i){return e&&(qe(e)?e:pe[e]||pM(e))||i},Ns=function(e,i,n,r){n===void 0&&(n=function(c){return 1-i(1-c)}),r===void 0&&(r=function(c){return c<.5?i(c*2)/2:1-i((1-c)*2)/2});var o={easeIn:i,easeOut:n,easeInOut:r},s;return vi(e,function(l){pe[l]=$i[l]=o,pe[s=l.toLowerCase()]=n;for(var c in o)pe[s+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=pe[l+"."+c]=o[c]}),o},K5=function(e){return function(i){return i<.5?(1-e(1-i*2))/2:.5+e((i-.5)*2)/2}},s0=function t(e,i,n){var r=i>=1?i:1,o=(n||(e?.3:.45))/(i<1?i:1),s=o/Sg*(Math.asin(1/r)||0),l=function(u){return u===1?1:r*Math.pow(2,-10*u)*BA((u-s)*o)+1},c=e==="out"?l:e==="in"?function(d){return 1-l(1-d)}:K5(l);return o=Sg/o,c.config=function(d,u){return t(e,d,u)},c},a0=function t(e,i){i===void 0&&(i=1.70158);var n=function(s){return s?--s*s*((i+1)*s+i)+1:0},r=e==="out"?n:e==="in"?function(o){return 1-n(1-o)}:K5(n);return r.config=function(o){return t(e,o)},r};vi("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var i=e<5?e+1:e;Ns(t+",Power"+(i-1),e?function(n){return Math.pow(n,i)}:function(n){return n},function(n){return 1-Math.pow(1-n,i)},function(n){return n<.5?Math.pow(n*2,i)/2:1-Math.pow((1-n)*2,i)/2})});pe.Linear.easeNone=pe.none=pe.Linear.easeIn;Ns("Elastic",s0("in"),s0("out"),s0());(function(t,e){var i=1/e,n=2*i,r=2.5*i,o=function(l){return l<i?t*l*l:l<n?t*Math.pow(l-1.5/e,2)+.75:l<r?t*(l-=2.25/e)*l+.9375:t*Math.pow(l-2.625/e,2)+.984375};Ns("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);Ns("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});Ns("Circ",function(t){return-(b5(1-t*t)-1)});Ns("Sine",function(t){return t===1?1:-$A(t*NA)+1});Ns("Back",a0("in"),a0("out"),a0());pe.SteppedEase=pe.steps=$i.SteppedEase={config:function(e,i){e===void 0&&(e=1);var n=1/e,r=e+(i?0:1),o=i?1:0,s=1-Ce;return function(l){return((r*Sd(0,s,l)|0)+o)*n}}};rl.ease=pe["quad.out"];vi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return $1+=t+","+t+"Params,"});var J5=function(e,i){this.id=OA++,e._gsap=this,this.target=e,this.harness=i,this.get=i?i.get:E5,this.set=i?i.getSetter:Y1},sd=function(){function t(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,al(this,+i.duration,1,1),this.data=i.data,Re&&(this._ctx=Re,Re.data.push(this)),od||Ai.wake()}var e=t.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,al(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(ll(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(rf(this,n),!o._dp||o.parent||F5(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$n(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Ce||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),I5(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+d2(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+d2(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,r):this._repeat?sl(this._tTime,o)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Ce?0:this._rts;if(this._rts===n)return this;var o=this.parent&&this._ts?lp(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ce?0:this._rts,this.totalTime(Sd(-Math.abs(this._delay),this.totalDuration(),o),r!==!1),nf(this),XA(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ll(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ce&&(this._tTime-=Ce)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&$n(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(wi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?lp(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=UA);var r=Rt;return Rt=n,V1(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Rt=r,this},e.globalTime=function(n){for(var r=this,o=arguments.length?n:r.rawTime();r;)o=r._start+o/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):o},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,u2(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,u2(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Xi(this,n),wi(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,wi(r)),this._dur||(this._zTime=-Ce),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ce:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ce,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=r&&o<this.endTime(!0)-Ce)},e.eventCallback=function(n,r,o){var s=this.vars;return arguments.length>1?(r?(s[n]=r,o&&(s[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=r)):delete s[n],this):s[n]},e.then=function(n){var r=this;return new Promise(function(o){var s=qe(n)?n:M5,l=function(){var d=r.then;r.then=null,qe(s)&&(s=s(r))&&(s.then||s===r)&&(r.then=d),o(s),r.then=d};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Zl(this)},t}();Bi(sd.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ce,_prom:0,_ps:!1,_rts:1});var oi=function(t){y5(e,t);function e(n,r){var o;return n===void 0&&(n={}),o=t.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=wi(n.sortChildren),$e&&$n(n.parent||$e,lr(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&R5(lr(o),n.scrollTrigger),o}var i=e.prototype;return i.to=function(r,o,s){return yc(0,arguments,this),this},i.from=function(r,o,s){return yc(1,arguments,this),this},i.fromTo=function(r,o,s,l){return yc(2,arguments,this),this},i.set=function(r,o,s){return o.duration=0,o.parent=this,vc(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new ct(r,o,Xi(this,s),1),this},i.call=function(r,o,s){return $n(this,ct.delayedCall(0,r,o),s)},i.staggerTo=function(r,o,s,l,c,d,u){return s.duration=o,s.stagger=s.stagger||l,s.onComplete=d,s.onCompleteParams=u,s.parent=this,new ct(r,s,Xi(this,c)),this},i.staggerFrom=function(r,o,s,l,c,d,u){return s.runBackwards=1,vc(s).immediateRender=wi(s.immediateRender),this.staggerTo(r,o,s,l,c,d,u)},i.staggerFromTo=function(r,o,s,l,c,d,u,p){return l.startAt=s,vc(l).immediateRender=wi(l.immediateRender),this.staggerTo(r,o,l,c,d,u,p)},i.render=function(r,o,s){var l=this._time,c=this._dirty?this.totalDuration():this._tDur,d=this._dur,u=r<=0?0:dt(r),p=this._zTime<0!=r<0&&(this._initted||!d),f,g,y,w,D,j,b,v,h,x,k,S;if(this!==$e&&u>c&&r>=0&&(u=c),u!==this._tTime||s||p){if(l!==this._time&&d&&(u+=this._time-l,r+=this._time-l),f=u,h=this._start,v=this._ts,j=!v,p&&(d||(l=this._zTime),(r||!o)&&(this._zTime=r)),this._repeat){if(k=this._yoyo,D=d+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(D*100+r,o,s);if(f=dt(u%D),u===c?(w=this._repeat,f=d):(x=dt(u/D),w=~~x,w&&w===x&&(f=d,w--),f>d&&(f=d)),x=sl(this._tTime,D),!l&&this._tTime&&x!==w&&this._tTime-x*D-this._dur<=0&&(x=w),k&&w&1&&(f=d-f,S=1),w!==x&&!this._lock){var _=k&&x&1,C=_===(k&&w&1);if(w<x&&(_=!_),l=_?0:u%d?d:u,this._lock=1,this.render(l||(S?0:dt(w*D)),o,!d)._lock=0,this._tTime=u,!o&&this.parent&&Fi(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),l&&l!==this._time||j!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,c=this._tDur,C&&(this._lock=2,l=_?d:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!j)return this;Q5(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=KA(this,dt(l),dt(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,l=0),!l&&u&&!o&&!x&&(Fi(this,"onStart"),this._tTime!==u))return this;if(f>=l&&r>=0)for(g=this._first;g;){if(y=g._next,(g._act||f>=g._start)&&g._ts&&b!==g){if(g.parent!==this)return this.render(r,o,s);if(g.render(g._ts>0?(f-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(f-g._start)*g._ts,o,s),f!==this._time||!this._ts&&!j){b=0,y&&(u+=this._zTime=-Ce);break}}g=y}else{g=this._last;for(var E=r<0?r:f;g;){if(y=g._prev,(g._act||E<=g._end)&&g._ts&&b!==g){if(g.parent!==this)return this.render(r,o,s);if(g.render(g._ts>0?(E-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(E-g._start)*g._ts,o,s||Rt&&V1(g)),f!==this._time||!this._ts&&!j){b=0,y&&(u+=this._zTime=E?-Ce:Ce);break}}g=y}}if(b&&!o&&(this.pause(),b.render(f>=l?0:-Ce)._zTime=f>=l?1:-1,this._ts))return this._start=h,nf(this),this.render(r,o,s);this._onUpdate&&!o&&Fi(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&l)&&(h===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!d)&&(u===c&&this._ts>0||!u&&this._ts<0)&&jo(this,1),!o&&!(r<0&&!l)&&(u||l||!c)&&(Fi(this,u===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(r,o){var s=this;if(Dr(o)||(o=Xi(this,o,r)),!(r instanceof sd)){if(Xt(r))return r.forEach(function(l){return s.add(l,o)}),this;if(Pt(r))return this.addLabel(r,o);if(qe(r))r=ct.delayedCall(0,r);else return this}return this!==r?$n(this,r,o):this},i.getChildren=function(r,o,s,l){r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),l===void 0&&(l=-tn);for(var c=[],d=this._first;d;)d._start>=l&&(d instanceof ct?o&&c.push(d):(s&&c.push(d),r&&c.push.apply(c,d.getChildren(!0,o,s)))),d=d._next;return c},i.getById=function(r){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===r)return o[s]},i.remove=function(r){return Pt(r)?this.removeLabel(r):qe(r)?this.killTweensOf(r):(r.parent===this&&tf(this,r),r===this._recent&&(this._recent=this._last),fs(this))},i.totalTime=function(r,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=dt(Ai.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),t.prototype.totalTime.call(this,r,o),this._forcing=0,this):this._tTime},i.addLabel=function(r,o){return this.labels[r]=Xi(this,o),this},i.removeLabel=function(r){return delete this.labels[r],this},i.addPause=function(r,o,s){var l=ct.delayedCall(0,o||nd,s);return l.data="isPause",this._hasPause=1,$n(this,l,Xi(this,r))},i.removePause=function(r){var o=this._first;for(r=Xi(this,r);o;)o._start===r&&o.data==="isPause"&&jo(o),o=o._next},i.killTweensOf=function(r,o,s){for(var l=this.getTweensOf(r,s),c=l.length;c--;)qr!==l[c]&&l[c].kill(r,o);return this},i.getTweensOf=function(r,o){for(var s=[],l=nn(r),c=this._first,d=Dr(o),u;c;)c instanceof ct?HA(c._targets,l)&&(d?(!qr||c._initted&&c._ts)&&c.globalTime(0)<=o&&c.globalTime(c.totalDuration())>o:!o||c.isActive())&&s.push(c):(u=c.getTweensOf(l,o)).length&&s.push.apply(s,u),c=c._next;return s},i.tweenTo=function(r,o){o=o||{};var s=this,l=Xi(s,r),c=o,d=c.startAt,u=c.onStart,p=c.onStartParams,f=c.immediateRender,g,y=ct.to(s,Bi({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:o.duration||Math.abs((l-(d&&"time"in d?d.time:s._time))/s.timeScale())||Ce,onStart:function(){if(s.pause(),!g){var D=o.duration||Math.abs((l-(d&&"time"in d?d.time:s._time))/s.timeScale());y._dur!==D&&al(y,D,0,1).render(y._time,!0,!0),g=1}u&&u.apply(y,p||[])}},o));return f?y.render(0):y},i.tweenFromTo=function(r,o,s){return this.tweenTo(o,Bi({startAt:{time:Xi(this,r)}},s))},i.recent=function(){return this._recent},i.nextLabel=function(r){return r===void 0&&(r=this._time),h2(this,Xi(this,r))},i.previousLabel=function(r){return r===void 0&&(r=this._time),h2(this,Xi(this,r),1)},i.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Ce)},i.shiftChildren=function(r,o,s){s===void 0&&(s=0);for(var l=this._first,c=this.labels,d;l;)l._start>=s&&(l._start+=r,l._end+=r),l=l._next;if(o)for(d in c)c[d]>=s&&(c[d]+=r);return fs(this)},i.invalidate=function(r){var o=this._first;for(this._lock=0;o;)o.invalidate(r),o=o._next;return t.prototype.invalidate.call(this,r)},i.clear=function(r){r===void 0&&(r=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),fs(this)},i.totalDuration=function(r){var o=0,s=this,l=s._last,c=tn,d,u,p;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(p=s.parent;l;)d=l._prev,l._dirty&&l.totalDuration(),u=l._start,u>c&&s._sort&&l._ts&&!s._lock?(s._lock=1,$n(s,l,u-l._delay,1)._lock=0):c=u,u<0&&l._ts&&(o-=u,(!p&&!s._dp||p&&p.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),c=0),l._end>o&&l._ts&&(o=l._end),l=d;al(s,s===$e&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(r){if($e._ts&&(I5($e,lp(r,$e)),T5=Ai.frame),Ai.frame>=l2){l2+=Li.autoSleep||120;var o=$e._first;if((!o||!o._ts)&&Li.autoSleep&&Ai._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||Ai.sleep()}}},e}(sd);Bi(oi.prototype,{_lock:0,_hasPause:0,_forcing:0});var fM=function(e,i,n,r,o,s,l){var c=new yi(this._pt,e,i,0,1,o3,null,o),d=0,u=0,p,f,g,y,w,D,j,b;for(c.b=n,c.e=r,n+="",r+="",(j=~r.indexOf("random("))&&(r=rd(r)),s&&(b=[n,r],s(b,e,i),n=b[0],r=b[1]),f=n.match(n0)||[];p=n0.exec(r);)y=p[0],w=r.substring(d,p.index),g?g=(g+1)%5:w.substr(-5)==="rgba("&&(g=1),y!==f[u++]&&(D=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:w||u===1?w:",",s:D,c:y.charAt(1)==="="?Ra(D,y)-D:parseFloat(y)-D,m:g&&g<4?Math.round:0},d=n0.lastIndex);return c.c=d<r.length?r.substring(d,r.length):"",c.fp=l,(S5.test(r)||j)&&(c.e=0),this._pt=c,c},W1=function(e,i,n,r,o,s,l,c,d,u){qe(r)&&(r=r(o||0,e,s));var p=e[i],f=n!=="get"?n:qe(p)?d?e[i.indexOf("set")||!qe(e["get"+i.substr(3)])?i:"get"+i.substr(3)](d):e[i]():p,g=qe(p)?d?vM:n3:H1,y;if(Pt(r)&&(~r.indexOf("random(")&&(r=rd(r)),r.charAt(1)==="="&&(y=Ra(f,r)+(Yt(f)||0),(y||y===0)&&(r=y))),!u||f!==r||Mg)return!isNaN(f*r)&&r!==""?(y=new yi(this._pt,e,i,+f||0,r-(f||0),typeof p=="boolean"?bM:r3,0,g),d&&(y.fp=d),l&&y.modifier(l,this,e),this._pt=y):(!p&&!(i in e)&&N1(i,r),fM.call(this,e,i,f,r,g,c||Li.stringFilter,d))},mM=function(e,i,n,r,o){if(qe(e)&&(e=bc(e,o,i,n,r)),!Gn(e)||e.style&&e.nodeType||Xt(e)||k5(e))return Pt(e)?bc(e,o,i,n,r):e;var s={},l;for(l in e)s[l]=bc(e[l],o,i,n,r);return s},e3=function(e,i,n,r,o,s){var l,c,d,u;if(Ei[e]&&(l=new Ei[e]).init(o,l.rawVars?i[e]:mM(i[e],r,o,s,n),n,r,s)!==!1&&(n._pt=c=new yi(n._pt,o,e,0,1,l.render,l,0,l.priority),n!==Da))for(d=n._ptLookup[n._targets.indexOf(o)],u=l._props.length;u--;)d[l._props[u]]=c;return l},qr,Mg,U1=function t(e,i,n){var r=e.vars,o=r.ease,s=r.startAt,l=r.immediateRender,c=r.lazy,d=r.onUpdate,u=r.runBackwards,p=r.yoyoEase,f=r.keyframes,g=r.autoRevert,y=e._dur,w=e._startAt,D=e._targets,j=e.parent,b=j&&j.data==="nested"?j.vars.targets:D,v=e._overwrite==="auto"&&!z1,h=e.timeline,x,k,S,_,C,E,z,A,L,N,W,V,$;if(h&&(!f||!o)&&(o="none"),e._ease=ms(o,rl.ease),e._yEase=p?q5(ms(p===!0?o:p,rl.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!h&&!!r.runBackwards,!h||f&&!r.stagger){if(A=D[0]?ps(D[0]).harness:0,V=A&&r[A.prop],x=ap(r,O1),w&&(w._zTime<0&&w.progress(1),i<0&&u&&l&&!g?w.render(-1,!0):w.revert(u&&y?dh:WA),w._lazy=0),s){if(jo(e._startAt=ct.set(D,Bi({data:"isStart",overwrite:!1,parent:j,immediateRender:!0,lazy:!w&&wi(c),startAt:null,delay:0,onUpdate:d&&function(){return Fi(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,i<0&&(Rt||!l&&!g)&&e._startAt.revert(dh),l&&y&&i<=0&&n<=0){i&&(e._zTime=i);return}}else if(u&&y&&!w){if(i&&(l=!1),S=Bi({overwrite:!1,data:"isFromStart",lazy:l&&!w&&wi(c),immediateRender:l,stagger:0,parent:j},x),V&&(S[A.prop]=V),jo(e._startAt=ct.set(D,S)),e._startAt._dp=0,e._startAt._sat=e,i<0&&(Rt?e._startAt.revert(dh):e._startAt.render(-1,!0)),e._zTime=i,!l)t(e._startAt,Ce,Ce);else if(!i)return}for(e._pt=e._ptCache=0,c=y&&wi(c)||c&&!y,k=0;k<D.length;k++){if(C=D[k],z=C._gsap||B1(D)[k]._gsap,e._ptLookup[k]=N={},Cg[z.id]&&fo.length&&sp(),W=b===D?k:b.indexOf(C),A&&(L=new A).init(C,V||x,e,W,b)!==!1&&(e._pt=_=new yi(e._pt,C,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(I){N[I]=_}),L.priority&&(E=1)),!A||V)for(S in x)Ei[S]&&(L=e3(S,x,e,W,C,b))?L.priority&&(E=1):N[S]=_=W1.call(e,C,S,"get",x[S],W,b,0,r.stringFilter);e._op&&e._op[k]&&e.kill(C,e._op[k]),v&&e._pt&&(qr=e,$e.killTweensOf(C,N,e.globalTime(i)),$=!e.parent,qr=0),e._pt&&c&&(Cg[z.id]=1)}E&&s3(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!$,f&&i<=0&&h.render(tn,!0,!0)},gM=function(e,i,n,r,o,s,l,c){var d=(e._pt&&e._ptCache||(e._ptCache={}))[i],u,p,f,g;if(!d)for(d=e._ptCache[i]=[],f=e._ptLookup,g=e._targets.length;g--;){if(u=f[g][i],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==i&&u.fp!==i;)u=u._next;if(!u)return Mg=1,e.vars[i]="+=0",U1(e,l),Mg=0,c?id(i+" not eligible for reset"):1;d.push(u)}for(g=d.length;g--;)p=d[g],u=p._pt||p,u.s=(r||r===0)&&!o?r:u.s+(r||0)+s*u.c,u.c=n-u.s,p.e&&(p.e=tt(n)+Yt(p.e)),p.b&&(p.b=u.s+Yt(p.b))},xM=function(e,i){var n=e[0]?ps(e[0]).harness:0,r=n&&n.aliases,o,s,l,c;if(!r)return i;o=ol({},i);for(s in r)if(s in o)for(c=r[s].split(","),l=c.length;l--;)o[c[l]]=o[s];return o},wM=function(e,i,n,r){var o=i.ease||r||"power1.inOut",s,l;if(Xt(i))l=n[e]||(n[e]=[]),i.forEach(function(c,d){return l.push({t:d/(i.length-1)*100,v:c,e:o})});else for(s in i)l=n[s]||(n[s]=[]),s==="ease"||l.push({t:parseFloat(e),v:i[s],e:o})},bc=function(e,i,n,r,o){return qe(e)?e.call(i,n,r,o):Pt(e)&&~e.indexOf("random(")?rd(e):e},t3=$1+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",i3={};vi(t3+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return i3[t]=1});var ct=function(t){y5(e,t);function e(n,r,o,s){var l;typeof r=="number"&&(o.duration=r,r=o,o=null),l=t.call(this,s?r:vc(r))||this;var c=l.vars,d=c.duration,u=c.delay,p=c.immediateRender,f=c.stagger,g=c.overwrite,y=c.keyframes,w=c.defaults,D=c.scrollTrigger,j=c.yoyoEase,b=r.parent||$e,v=(Xt(n)||k5(n)?Dr(n[0]):"length"in r)?[n]:nn(n),h,x,k,S,_,C,E,z;if(l._targets=v.length?B1(v):id("GSAP target "+n+" not found. https://gsap.com",!Li.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=g,y||f||iu(d)||iu(u)){if(r=l.vars,h=l.timeline=new oi({data:"nested",defaults:w||{},targets:b&&b.data==="nested"?b.vars.targets:v}),h.kill(),h.parent=h._dp=lr(l),h._start=0,f||iu(d)||iu(u)){if(S=v.length,E=f&&$5(f),Gn(f))for(_ in f)~t3.indexOf(_)&&(z||(z={}),z[_]=f[_]);for(x=0;x<S;x++)k=ap(r,i3),k.stagger=0,j&&(k.yoyoEase=j),z&&ol(k,z),C=v[x],k.duration=+bc(d,lr(l),x,C,v),k.delay=(+bc(u,lr(l),x,C,v)||0)-l._delay,!f&&S===1&&k.delay&&(l._delay=u=k.delay,l._start+=u,k.delay=0),h.to(C,k,E?E(x,C,v):0),h._ease=pe.none;h.duration()?d=u=0:l.timeline=0}else if(y){vc(Bi(h.vars.defaults,{ease:"none"})),h._ease=ms(y.ease||r.ease||"none");var A=0,L,N,W;if(Xt(y))y.forEach(function(V){return h.to(v,V,">")}),h.duration();else{k={};for(_ in y)_==="ease"||_==="easeEach"||wM(_,y[_],k,y.easeEach);for(_ in k)for(L=k[_].sort(function(V,$){return V.t-$.t}),A=0,x=0;x<L.length;x++)N=L[x],W={ease:N.e,duration:(N.t-(x?L[x-1].t:0))/100*d},W[_]=N.v,h.to(v,W,A),A+=W.duration;h.duration()<d&&h.to({},{duration:d-h.duration()})}}d||l.duration(d=h.duration())}else l.timeline=0;return g===!0&&!z1&&(qr=lr(l),$e.killTweensOf(v),qr=0),$n(b,lr(l),o),r.reversed&&l.reverse(),r.paused&&l.paused(!0),(p||!d&&!y&&l._start===dt(b._time)&&wi(p)&&ZA(lr(l))&&b.data!=="nested")&&(l._tTime=-Ce,l.render(Math.max(0,-u)||0)),D&&R5(lr(l),D),l}var i=e.prototype;return i.render=function(r,o,s){var l=this._time,c=this._tDur,d=this._dur,u=r<0,p=r>c-Ce&&!u?c:r<Ce?0:r,f,g,y,w,D,j,b,v,h;if(!d)QA(this,r,o,s);else if(p!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=p,v=this.timeline,this._repeat){if(w=d+this._rDelay,this._repeat<-1&&u)return this.totalTime(w*100+r,o,s);if(f=dt(p%w),p===c?(y=this._repeat,f=d):(D=dt(p/w),y=~~D,y&&y===D?(f=d,y--):f>d&&(f=d)),j=this._yoyo&&y&1,j&&(h=this._yEase,f=d-f),D=sl(this._tTime,w),f===l&&!s&&this._initted&&y===D)return this._tTime=p,this;y!==D&&(v&&this._yEase&&Q5(v,j),this.vars.repeatRefresh&&!j&&!this._lock&&f!==w&&this._initted&&(this._lock=s=1,this.render(dt(w*y),!0).invalidate()._lock=0))}if(!this._initted){if(L5(this,u?r:f,s,o,p))return this._tTime=0,this;if(l!==this._time&&!(s&&this.vars.repeatRefresh&&y!==D))return this;if(d!==this._dur)return this.render(r,o,s)}if(this._tTime=p,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(h||this._ease)(f/d),this._from&&(this.ratio=b=1-b),!l&&p&&!o&&!D&&(Fi(this,"onStart"),this._tTime!==p))return this;for(g=this._pt;g;)g.r(b,g.d),g=g._next;v&&v.render(r<0?r:v._dur*v._ease(f/this._dur),o,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!o&&(u&&Pg(this,r,o,s),Fi(this,"onUpdate")),this._repeat&&y!==D&&this.vars.onRepeat&&!o&&this.parent&&Fi(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(u&&!this._onUpdate&&Pg(this,r,!0,!0),(r||!d)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&jo(this,1),!o&&!(u&&!l)&&(p||l||j)&&(Fi(this,p===c?"onComplete":"onReverseComplete",!0),this._prom&&!(p<c&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),t.prototype.invalidate.call(this,r)},i.resetTo=function(r,o,s,l,c){od||Ai.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||U1(this,d),u=this._ease(d/this._dur),gM(this,r,o,s,l,u,d,c)?this.resetTo(r,o,s,l,1):(rf(this,0),this.parent||z5(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(r,o){if(o===void 0&&(o="all"),!r&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?Zl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Rt),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,o,qr&&qr.vars.overwrite!==!0)._first||Zl(this),this.parent&&s!==this.timeline.totalDuration()&&al(this,this._dur*this.timeline._tDur/s,0,1),this}var l=this._targets,c=r?nn(r):l,d=this._ptLookup,u=this._pt,p,f,g,y,w,D,j;if((!o||o==="all")&&GA(l,c))return o==="all"&&(this._pt=0),Zl(this);for(p=this._op=this._op||[],o!=="all"&&(Pt(o)&&(w={},vi(o,function(b){return w[b]=1}),o=w),o=xM(l,o)),j=l.length;j--;)if(~c.indexOf(l[j])){f=d[j],o==="all"?(p[j]=o,y=f,g={}):(g=p[j]=p[j]||{},y=o);for(w in y)D=f&&f[w],D&&((!("kill"in D.d)||D.d.kill(w)===!0)&&tf(this,D,"_pt"),delete f[w]),g!=="all"&&(g[w]=1)}return this._initted&&!this._pt&&u&&Zl(this),this},e.to=function(r,o){return new e(r,o,arguments[2])},e.from=function(r,o){return yc(1,arguments)},e.delayedCall=function(r,o,s,l){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:l})},e.fromTo=function(r,o,s){return yc(2,arguments)},e.set=function(r,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(r,o)},e.killTweensOf=function(r,o,s){return $e.killTweensOf(r,o,s)},e}(sd);Bi(ct.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});vi("staggerTo,staggerFrom,staggerFromTo",function(t){ct[t]=function(){var e=new oi,i=Eg.call(arguments,0);return i.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,i)}});var H1=function(e,i,n){return e[i]=n},n3=function(e,i,n){return e[i](n)},vM=function(e,i,n,r){return e[i](r.fp,n)},yM=function(e,i,n){return e.setAttribute(i,n)},Y1=function(e,i){return qe(e[i])?n3:F1(e[i])&&e.setAttribute?yM:H1},r3=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e6)/1e6,i)},bM=function(e,i){return i.set(i.t,i.p,!!(i.s+i.c*e),i)},o3=function(e,i){var n=i._pt,r="";if(!e&&i.b)r=i.b;else if(e===1&&i.e)r=i.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=i.c}i.set(i.t,i.p,r,i)},G1=function(e,i){for(var n=i._pt;n;)n.r(e,n.d),n=n._next},kM=function(e,i,n,r){for(var o=this._pt,s;o;)s=o._next,o.p===r&&o.modifier(e,i,n),o=s},jM=function(e){for(var i=this._pt,n,r;i;)r=i._next,i.p===e&&!i.op||i.op===e?tf(this,i,"_pt"):i.dep||(n=1),i=r;return!n},SM=function(e,i,n,r){r.mSet(e,i,r.m.call(r.tween,n,r.mt),r)},s3=function(e){for(var i=e._pt,n,r,o,s;i;){for(n=i._next,r=o;r&&r.pr>i.pr;)r=r._next;(i._prev=r?r._prev:s)?i._prev._next=i:o=i,(i._next=r)?r._prev=i:s=i,i=n}e._pt=o},yi=function(){function t(i,n,r,o,s,l,c,d,u){this.t=n,this.s=o,this.c=s,this.p=r,this.r=l||r3,this.d=c||this,this.set=d||H1,this.pr=u||0,this._next=i,i&&(i._prev=this)}var e=t.prototype;return e.modifier=function(n,r,o){this.mSet=this.mSet||this.set,this.set=SM,this.m=n,this.mt=o,this.tween=r},t}();vi($1+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return O1[t]=1});$i.TweenMax=$i.TweenLite=ct;$i.TimelineLite=$i.TimelineMax=oi;$e=new oi({sortChildren:!1,defaults:rl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Li.stringFilter=Z5;var gs=[],hh={},DM=[],f2=0,_M=0,l0=function(e){return(hh[e]||DM).map(function(i){return i()})},zg=function(){var e=Date.now(),i=[];e-f2>2&&(l0("matchMediaInit"),gs.forEach(function(n){var r=n.queries,o=n.conditions,s,l,c,d;for(l in r)s=Fn.matchMedia(r[l]).matches,s&&(c=1),s!==o[l]&&(o[l]=s,d=1);d&&(n.revert(),c&&i.push(n))}),l0("matchMediaRevert"),i.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),f2=e,l0("matchMedia"))},a3=function(){function t(i,n){this.selector=n&&Ig(n),this.data=[],this._r=[],this.isReverted=!1,this.id=_M++,i&&this.add(i)}var e=t.prototype;return e.add=function(n,r,o){qe(n)&&(o=r,r=n,n=qe);var s=this,l=function(){var d=Re,u=s.selector,p;return d&&d!==s&&d.data.push(s),o&&(s.selector=Ig(o)),Re=s,p=r.apply(s,arguments),qe(p)&&s._r.push(p),Re=d,s.selector=u,s.isReverted=!1,p};return s.last=l,n===qe?l(s,function(c){return s.add(null,c)}):n?s[n]=l:l},e.ignore=function(n){var r=Re;Re=null,n(this),Re=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof t?n.push.apply(n,r.getTweens()):r instanceof ct&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var o=this;if(n?function(){for(var l=o.getTweens(),c=o.data.length,d;c--;)d=o.data[c],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(u){return l.splice(l.indexOf(u),1)}));for(l.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,p){return p.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=o.data.length;c--;)d=o.data[c],d instanceof oi?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof ct)&&d.revert&&d.revert(n);o._r.forEach(function(u){return u(n,o)}),o.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),r)for(var s=gs.length;s--;)gs[s].id===this.id&&gs.splice(s,1)},e.revert=function(n){this.kill(n||{})},t}(),CM=function(){function t(i){this.contexts=[],this.scope=i,Re&&Re.data.push(this)}var e=t.prototype;return e.add=function(n,r,o){Gn(n)||(n={matches:n});var s=new a3(0,o||this.scope),l=s.conditions={},c,d,u;Re&&!s.selector&&(s.selector=Re.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=n;for(d in n)d==="all"?u=1:(c=Fn.matchMedia(n[d]),c&&(gs.indexOf(s)<0&&gs.push(s),(l[d]=c.matches)&&(u=1),c.addListener?c.addListener(zg):c.addEventListener("change",zg)));return u&&r(s,function(p){return s.add(null,p)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},t}(),cp={registerPlugin:function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];i.forEach(function(r){return Y5(r)})},timeline:function(e){return new oi(e)},getTweensOf:function(e,i){return $e.getTweensOf(e,i)},getProperty:function(e,i,n,r){Pt(e)&&(e=nn(e)[0]);var o=ps(e||{}).get,s=n?M5:A5;return n==="native"&&(n=""),e&&(i?s((Ei[i]&&Ei[i].get||o)(e,i,n,r)):function(l,c,d){return s((Ei[l]&&Ei[l].get||o)(e,l,c,d))})},quickSetter:function(e,i,n){if(e=nn(e),e.length>1){var r=e.map(function(u){return ji.quickSetter(u,i,n)}),o=r.length;return function(u){for(var p=o;p--;)r[p](u)}}e=e[0]||{};var s=Ei[i],l=ps(e),c=l.harness&&(l.harness.aliases||{})[i]||i,d=s?function(u){var p=new s;Da._pt=0,p.init(e,n?u+n:u,Da,0,[e]),p.render(1,p),Da._pt&&G1(1,Da)}:l.set(e,c);return s?d:function(u){return d(e,c,n?u+n:u,l,1)}},quickTo:function(e,i,n){var r,o=ji.to(e,Bi((r={},r[i]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),s=function(c,d,u){return o.resetTo(i,c,d,u)};return s.tween=o,s},isTweening:function(e){return $e.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ms(e.ease,rl.ease)),c2(rl,e||{})},config:function(e){return c2(Li,e||{})},registerEffect:function(e){var i=e.name,n=e.effect,r=e.plugins,o=e.defaults,s=e.extendTimeline;(r||"").split(",").forEach(function(l){return l&&!Ei[l]&&!$i[l]&&id(i+" effect requires "+l+" plugin.")}),r0[i]=function(l,c,d){return n(nn(l),Bi(c||{},o),d)},s&&(oi.prototype[i]=function(l,c,d){return this.add(r0[i](l,Gn(c)?c:(d=c)&&{},this),d)})},registerEase:function(e,i){pe[e]=ms(i)},parseEase:function(e,i){return arguments.length?ms(e,i):pe},getById:function(e){return $e.getById(e)},exportRoot:function(e,i){e===void 0&&(e={});var n=new oi(e),r,o;for(n.smoothChildTiming=wi(e.smoothChildTiming),$e.remove(n),n._dp=0,n._time=n._tTime=$e._time,r=$e._first;r;)o=r._next,(i||!(!r._dur&&r instanceof ct&&r.vars.onComplete===r._targets[0]))&&$n(n,r,r._start-r._delay),r=o;return $n($e,n,0),n},context:function(e,i){return e?new a3(e,i):Re},matchMedia:function(e){return new CM(e)},matchMediaRefresh:function(){return gs.forEach(function(e){var i=e.conditions,n,r;for(r in i)i[r]&&(i[r]=!1,n=1);n&&e.revert()})||zg()},addEventListener:function(e,i){var n=hh[e]||(hh[e]=[]);~n.indexOf(i)||n.push(i)},removeEventListener:function(e,i){var n=hh[e],r=n&&n.indexOf(i);r>=0&&n.splice(r,1)},utils:{wrap:oM,wrapYoyo:sM,distribute:$5,random:V5,snap:B5,normalize:rM,getUnit:Yt,clamp:eM,splitColor:G5,toArray:nn,selector:Ig,mapRange:U5,pipe:iM,unitize:nM,interpolate:aM,shuffle:O5},install:C5,effects:r0,ticker:Ai,updateRoot:oi.updateRoot,plugins:Ei,globalTimeline:$e,core:{PropTween:yi,globals:P5,Tween:ct,Timeline:oi,Animation:sd,getCache:ps,_removeLinkedListItem:tf,reverting:function(){return Rt},context:function(e){return e&&Re&&(Re.data.push(e),e._ctx=Re),Re},suppressOverwrites:function(e){return z1=e}}};vi("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return cp[t]=ct[t]});Ai.add(oi.updateRoot);Da=cp.to({},{duration:0});var PM=function(e,i){for(var n=e._pt;n&&n.p!==i&&n.op!==i&&n.fp!==i;)n=n._next;return n},TM=function(e,i){var n=e._targets,r,o,s;for(r in i)for(o=n.length;o--;)s=e._ptLookup[o][r],s&&(s=s.d)&&(s._pt&&(s=PM(s,r)),s&&s.modifier&&s.modifier(i[r],e,n[o],r))},c0=function(e,i){return{name:e,headless:1,rawVars:1,init:function(r,o,s){s._onInit=function(l){var c,d;if(Pt(o)&&(c={},vi(o,function(u){return c[u]=1}),o=c),i){c={};for(d in o)c[d]=i(o[d]);o=c}TM(l,o)}}}},ji=cp.registerPlugin({name:"attr",init:function(e,i,n,r,o){var s,l,c;this.tween=n;for(s in i)c=e.getAttribute(s)||"",l=this.add(e,"setAttribute",(c||0)+"",i[s],r,o,0,0,s),l.op=s,l.b=c,this._props.push(s)},render:function(e,i){for(var n=i._pt;n;)Rt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,i){for(var n=i.length;n--;)this.add(e,n,e[n]||0,i[n],0,0,0,0,0,1)}},c0("roundProps",Ag),c0("modifiers"),c0("snap",B5))||cp;ct.version=oi.version=ji.version="3.13.0";_5=1;R1()&&ll();pe.Power0;pe.Power1;pe.Power2;pe.Power3;pe.Power4;pe.Linear;pe.Quad;pe.Cubic;pe.Quart;pe.Quint;pe.Strong;pe.Elastic;pe.Back;pe.SteppedEase;pe.Bounce;pe.Sine;pe.Expo;pe.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var m2,Qr,La,X1,ss,g2,Z1,EM=function(){return typeof window<"u"},_r={},Qo=180/Math.PI,Na=Math.PI/180,Xs=Math.atan2,x2=1e8,q1=/([A-Z])/g,IM=/(left|right|width|margin|padding|x)/i,AM=/[\s,\(]\S/,Bn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fg=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},MM=function(e,i){return i.set(i.t,i.p,e===1?i.e:Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},zM=function(e,i){return i.set(i.t,i.p,e?Math.round((i.s+i.c*e)*1e4)/1e4+i.u:i.b,i)},FM=function(e,i){var n=i.s+i.c*e;i.set(i.t,i.p,~~(n+(n<0?-.5:.5))+i.u,i)},l3=function(e,i){return i.set(i.t,i.p,e?i.e:i.b,i)},c3=function(e,i){return i.set(i.t,i.p,e!==1?i.b:i.e,i)},RM=function(e,i,n){return e.style[i]=n},LM=function(e,i,n){return e.style.setProperty(i,n)},NM=function(e,i,n){return e._gsap[i]=n},OM=function(e,i,n){return e._gsap.scaleX=e._gsap.scaleY=n},$M=function(e,i,n,r,o){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(o,s)},BM=function(e,i,n,r,o){var s=e._gsap;s[i]=n,s.renderTransform(o,s)},Ve="transform",bi=Ve+"Origin",VM=function t(e,i){var n=this,r=this.target,o=r.style,s=r._gsap;if(e in _r&&o){if(this.tfm=this.tfm||{},e!=="transform")e=Bn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(l){return n.tfm[l]=dr(r,l)}):this.tfm[e]=s.x?s[e]:dr(r,e),e===bi&&(this.tfm.zOrigin=s.zOrigin);else return Bn.transform.split(",").forEach(function(l){return t.call(n,l,i)});if(this.props.indexOf(Ve)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(bi,i,"")),e=Ve}(o||i)&&this.props.push(e,i,o[e])},d3=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},WM=function(){var e=this.props,i=this.target,n=i.style,r=i._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?i[e[o]](e[o+2]):i[e[o]]=e[o+2]:e[o+2]?n[e[o]]=e[o+2]:n.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(q1,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),o=Z1(),(!o||!o.isStart)&&!n[Ve]&&(d3(n),r.zOrigin&&n[bi]&&(n[bi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},u3=function(e,i){var n={target:e,props:[],revert:WM,save:VM};return e._gsap||ji.core.getCache(e),i&&e.style&&e.nodeType&&i.split(",").forEach(function(r){return n.save(r)}),n},h3,Rg=function(e,i){var n=Qr.createElementNS?Qr.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qr.createElement(e);return n&&n.style?n:Qr.createElement(e)},rn=function t(e,i,n){var r=getComputedStyle(e);return r[i]||r.getPropertyValue(i.replace(q1,"-$1").toLowerCase())||r.getPropertyValue(i)||!n&&t(e,cl(i)||i,1)||""},w2="O,Moz,ms,Ms,Webkit".split(","),cl=function(e,i,n){var r=i||ss,o=r.style,s=5;if(e in o&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(w2[s]+e in o););return s<0?null:(s===3?"ms":s>=0?w2[s]:"")+e},Lg=function(){EM()&&window.document&&(m2=window,Qr=m2.document,La=Qr.documentElement,ss=Rg("div")||{style:{}},Rg("div"),Ve=cl(Ve),bi=Ve+"Origin",ss.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",h3=!!cl("perspective"),Z1=ji.core.reverting,X1=1)},v2=function(e){var i=e.ownerSVGElement,n=Rg("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),o;r.style.display="block",n.appendChild(r),La.appendChild(n);try{o=r.getBBox()}catch{}return n.removeChild(r),La.removeChild(n),o},y2=function(e,i){for(var n=i.length;n--;)if(e.hasAttribute(i[n]))return e.getAttribute(i[n])},p3=function(e){var i,n;try{i=e.getBBox()}catch{i=v2(e),n=1}return i&&(i.width||i.height)||n||(i=v2(e)),i&&!i.width&&!i.x&&!i.y?{x:+y2(e,["x","cx","x1"])||0,y:+y2(e,["y","cy","y1"])||0,width:0,height:0}:i},f3=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&p3(e))},Ps=function(e,i){if(i){var n=e.style,r;i in _r&&i!==bi&&(i=Ve),n.removeProperty?(r=i.substr(0,2),(r==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),n.removeProperty(r==="--"?i:i.replace(q1,"-$1").toLowerCase())):n.removeAttribute(i)}},Kr=function(e,i,n,r,o,s){var l=new yi(e._pt,i,n,0,1,s?c3:l3);return e._pt=l,l.b=r,l.e=o,e._props.push(n),l},b2={deg:1,rad:1,turn:1},UM={grid:1,flex:1},So=function t(e,i,n,r){var o=parseFloat(n)||0,s=(n+"").trim().substr((o+"").length)||"px",l=ss.style,c=IM.test(i),d=e.tagName.toLowerCase()==="svg",u=(d?"client":"offset")+(c?"Width":"Height"),p=100,f=r==="px",g=r==="%",y,w,D,j;if(r===s||!o||b2[r]||b2[s])return o;if(s!=="px"&&!f&&(o=t(e,i,n,"px")),j=e.getCTM&&f3(e),(g||s==="%")&&(_r[i]||~i.indexOf("adius")))return y=j?e.getBBox()[c?"width":"height"]:e[u],tt(g?o/y*p:o/100*y);if(l[c?"width":"height"]=p+(f?s:r),w=r!=="rem"&&~i.indexOf("adius")||r==="em"&&e.appendChild&&!d?e:e.parentNode,j&&(w=(e.ownerSVGElement||{}).parentNode),(!w||w===Qr||!w.appendChild)&&(w=Qr.body),D=w._gsap,D&&g&&D.width&&c&&D.time===Ai.time&&!D.uncache)return tt(o/D.width*p);if(g&&(i==="height"||i==="width")){var b=e.style[i];e.style[i]=p+r,y=e[u],b?e.style[i]=b:Ps(e,i)}else(g||s==="%")&&!UM[rn(w,"display")]&&(l.position=rn(e,"position")),w===e&&(l.position="static"),w.appendChild(ss),y=ss[u],w.removeChild(ss),l.position="absolute";return c&&g&&(D=ps(w),D.time=Ai.time,D.width=w[u]),tt(f?y*o/p:y&&o?p/y*o:0)},dr=function(e,i,n,r){var o;return X1||Lg(),i in Bn&&i!=="transform"&&(i=Bn[i],~i.indexOf(",")&&(i=i.split(",")[0])),_r[i]&&i!=="transform"?(o=ld(e,r),o=i!=="transformOrigin"?o[i]:o.svg?o.origin:up(rn(e,bi))+" "+o.zOrigin+"px"):(o=e.style[i],(!o||o==="auto"||r||~(o+"").indexOf("calc("))&&(o=dp[i]&&dp[i](e,i,n)||rn(e,i)||E5(e,i)||(i==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?So(e,i,o,n)+n:o},HM=function(e,i,n,r){if(!n||n==="none"){var o=cl(i,e,1),s=o&&rn(e,o,1);s&&s!==n?(i=o,n=s):i==="borderColor"&&(n=rn(e,"borderTopColor"))}var l=new yi(this._pt,e.style,i,0,1,o3),c=0,d=0,u,p,f,g,y,w,D,j,b,v,h,x;if(l.b=n,l.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=rn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(w=e.style[i],e.style[i]=r,r=rn(e,i)||r,w?e.style[i]=w:Ps(e,i)),u=[n,r],Z5(u),n=u[0],r=u[1],f=n.match(Sa)||[],x=r.match(Sa)||[],x.length){for(;p=Sa.exec(r);)D=p[0],b=r.substring(c,p.index),y?y=(y+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(y=1),D!==(w=f[d++]||"")&&(g=parseFloat(w)||0,h=w.substr((g+"").length),D.charAt(1)==="="&&(D=Ra(g,D)+h),j=parseFloat(D),v=D.substr((j+"").length),c=Sa.lastIndex-v.length,v||(v=v||Li.units[i]||h,c===r.length&&(r+=v,l.e+=v)),h!==v&&(g=So(e,i,w,v)||0),l._pt={_next:l._pt,p:b||d===1?b:",",s:g,c:j-g,m:y&&y<4||i==="zIndex"?Math.round:0});l.c=c<r.length?r.substring(c,r.length):""}else l.r=i==="display"&&r==="none"?c3:l3;return S5.test(r)&&(l.e=0),this._pt=l,l},k2={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},YM=function(e){var i=e.split(" "),n=i[0],r=i[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),i[0]=k2[n]||n,i[1]=k2[r]||r,i.join(" ")},GM=function(e,i){if(i.tween&&i.tween._time===i.tween._dur){var n=i.t,r=n.style,o=i.u,s=n._gsap,l,c,d;if(o==="all"||o===!0)r.cssText="",c=1;else for(o=o.split(","),d=o.length;--d>-1;)l=o[d],_r[l]&&(c=1,l=l==="transformOrigin"?bi:Ve),Ps(n,l);c&&(Ps(n,Ve),s&&(s.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ld(n,1),s.uncache=1,d3(r)))}},dp={clearProps:function(e,i,n,r,o){if(o.data!=="isFromStart"){var s=e._pt=new yi(e._pt,i,n,0,0,GM);return s.u=r,s.pr=-10,s.tween=o,e._props.push(n),1}}},ad=[1,0,0,1,0,0],m3={},g3=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},j2=function(e){var i=rn(e,Ve);return g3(i)?ad:i.substr(7).match(j5).map(tt)},Q1=function(e,i){var n=e._gsap||ps(e),r=e.style,o=j2(e),s,l,c,d;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,o=[c.a,c.b,c.c,c.d,c.e,c.f],o.join(",")==="1,0,0,1,0,0"?ad:o):(o===ad&&!e.offsetParent&&e!==La&&!n.svg&&(c=r.display,r.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,l=e.nextElementSibling,La.appendChild(e)),o=j2(e),c?r.display=c:Ps(e,"display"),d&&(l?s.insertBefore(e,l):s?s.appendChild(e):La.removeChild(e))),i&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},Ng=function(e,i,n,r,o,s){var l=e._gsap,c=o||Q1(e,!0),d=l.xOrigin||0,u=l.yOrigin||0,p=l.xOffset||0,f=l.yOffset||0,g=c[0],y=c[1],w=c[2],D=c[3],j=c[4],b=c[5],v=i.split(" "),h=parseFloat(v[0])||0,x=parseFloat(v[1])||0,k,S,_,C;n?c!==ad&&(S=g*D-y*w)&&(_=h*(D/S)+x*(-w/S)+(w*b-D*j)/S,C=h*(-y/S)+x*(g/S)-(g*b-y*j)/S,h=_,x=C):(k=p3(e),h=k.x+(~v[0].indexOf("%")?h/100*k.width:h),x=k.y+(~(v[1]||v[0]).indexOf("%")?x/100*k.height:x)),r||r!==!1&&l.smooth?(j=h-d,b=x-u,l.xOffset=p+(j*g+b*w)-j,l.yOffset=f+(j*y+b*D)-b):l.xOffset=l.yOffset=0,l.xOrigin=h,l.yOrigin=x,l.smooth=!!r,l.origin=i,l.originIsAbsolute=!!n,e.style[bi]="0px 0px",s&&(Kr(s,l,"xOrigin",d,h),Kr(s,l,"yOrigin",u,x),Kr(s,l,"xOffset",p,l.xOffset),Kr(s,l,"yOffset",f,l.yOffset)),e.setAttribute("data-svg-origin",h+" "+x)},ld=function(e,i){var n=e._gsap||new J5(e);if("x"in n&&!i&&!n.uncache)return n;var r=e.style,o=n.scaleX<0,s="px",l="deg",c=getComputedStyle(e),d=rn(e,bi)||"0",u,p,f,g,y,w,D,j,b,v,h,x,k,S,_,C,E,z,A,L,N,W,V,$,I,M,P,R,U,ne,Z,fe;return u=p=f=w=D=j=b=v=h=0,g=y=1,n.svg=!!(e.getCTM&&f3(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[Ve]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Ve]!=="none"?c[Ve]:"")),r.scale=r.rotate=r.translate="none"),S=Q1(e,n.svg),n.svg&&(n.uncache?(I=e.getBBox(),d=n.xOrigin-I.x+"px "+(n.yOrigin-I.y)+"px",$=""):$=!i&&e.getAttribute("data-svg-origin"),Ng(e,$||d,!!$||n.originIsAbsolute,n.smooth!==!1,S)),x=n.xOrigin||0,k=n.yOrigin||0,S!==ad&&(z=S[0],A=S[1],L=S[2],N=S[3],u=W=S[4],p=V=S[5],S.length===6?(g=Math.sqrt(z*z+A*A),y=Math.sqrt(N*N+L*L),w=z||A?Xs(A,z)*Qo:0,b=L||N?Xs(L,N)*Qo+w:0,b&&(y*=Math.abs(Math.cos(b*Na))),n.svg&&(u-=x-(x*z+k*L),p-=k-(x*A+k*N))):(fe=S[6],ne=S[7],P=S[8],R=S[9],U=S[10],Z=S[11],u=S[12],p=S[13],f=S[14],_=Xs(fe,U),D=_*Qo,_&&(C=Math.cos(-_),E=Math.sin(-_),$=W*C+P*E,I=V*C+R*E,M=fe*C+U*E,P=W*-E+P*C,R=V*-E+R*C,U=fe*-E+U*C,Z=ne*-E+Z*C,W=$,V=I,fe=M),_=Xs(-L,U),j=_*Qo,_&&(C=Math.cos(-_),E=Math.sin(-_),$=z*C-P*E,I=A*C-R*E,M=L*C-U*E,Z=N*E+Z*C,z=$,A=I,L=M),_=Xs(A,z),w=_*Qo,_&&(C=Math.cos(_),E=Math.sin(_),$=z*C+A*E,I=W*C+V*E,A=A*C-z*E,V=V*C-W*E,z=$,W=I),D&&Math.abs(D)+Math.abs(w)>359.9&&(D=w=0,j=180-j),g=tt(Math.sqrt(z*z+A*A+L*L)),y=tt(Math.sqrt(V*V+fe*fe)),_=Xs(W,V),b=Math.abs(_)>2e-4?_*Qo:0,h=Z?1/(Z<0?-Z:Z):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!g3(rn(e,Ve)),$&&e.setAttribute("transform",$))),Math.abs(b)>90&&Math.abs(b)<270&&(o?(g*=-1,b+=w<=0?180:-180,w+=w<=0?180:-180):(y*=-1,b+=b<=0?180:-180)),i=i||n.uncache,n.x=u-((n.xPercent=u&&(!i&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=p-((n.yPercent=p&&(!i&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=tt(g),n.scaleY=tt(y),n.rotation=tt(w)+l,n.rotationX=tt(D)+l,n.rotationY=tt(j)+l,n.skewX=b+l,n.skewY=v+l,n.transformPerspective=h+s,(n.zOrigin=parseFloat(d.split(" ")[2])||!i&&n.zOrigin||0)&&(r[bi]=up(d)),n.xOffset=n.yOffset=0,n.force3D=Li.force3D,n.renderTransform=n.svg?ZM:h3?x3:XM,n.uncache=0,n},up=function(e){return(e=e.split(" "))[0]+" "+e[1]},d0=function(e,i,n){var r=Yt(i);return tt(parseFloat(i)+parseFloat(So(e,"x",n+"px",r)))+r},XM=function(e,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,x3(e,i)},Oo="0deg",Rl="0px",$o=") ",x3=function(e,i){var n=i||this,r=n.xPercent,o=n.yPercent,s=n.x,l=n.y,c=n.z,d=n.rotation,u=n.rotationY,p=n.rotationX,f=n.skewX,g=n.skewY,y=n.scaleX,w=n.scaleY,D=n.transformPerspective,j=n.force3D,b=n.target,v=n.zOrigin,h="",x=j==="auto"&&e&&e!==1||j===!0;if(v&&(p!==Oo||u!==Oo)){var k=parseFloat(u)*Na,S=Math.sin(k),_=Math.cos(k),C;k=parseFloat(p)*Na,C=Math.cos(k),s=d0(b,s,S*C*-v),l=d0(b,l,-Math.sin(k)*-v),c=d0(b,c,_*C*-v+v)}D!==Rl&&(h+="perspective("+D+$o),(r||o)&&(h+="translate("+r+"%, "+o+"%) "),(x||s!==Rl||l!==Rl||c!==Rl)&&(h+=c!==Rl||x?"translate3d("+s+", "+l+", "+c+") ":"translate("+s+", "+l+$o),d!==Oo&&(h+="rotate("+d+$o),u!==Oo&&(h+="rotateY("+u+$o),p!==Oo&&(h+="rotateX("+p+$o),(f!==Oo||g!==Oo)&&(h+="skew("+f+", "+g+$o),(y!==1||w!==1)&&(h+="scale("+y+", "+w+$o),b.style[Ve]=h||"translate(0, 0)"},ZM=function(e,i){var n=i||this,r=n.xPercent,o=n.yPercent,s=n.x,l=n.y,c=n.rotation,d=n.skewX,u=n.skewY,p=n.scaleX,f=n.scaleY,g=n.target,y=n.xOrigin,w=n.yOrigin,D=n.xOffset,j=n.yOffset,b=n.forceCSS,v=parseFloat(s),h=parseFloat(l),x,k,S,_,C;c=parseFloat(c),d=parseFloat(d),u=parseFloat(u),u&&(u=parseFloat(u),d+=u,c+=u),c||d?(c*=Na,d*=Na,x=Math.cos(c)*p,k=Math.sin(c)*p,S=Math.sin(c-d)*-f,_=Math.cos(c-d)*f,d&&(u*=Na,C=Math.tan(d-u),C=Math.sqrt(1+C*C),S*=C,_*=C,u&&(C=Math.tan(u),C=Math.sqrt(1+C*C),x*=C,k*=C)),x=tt(x),k=tt(k),S=tt(S),_=tt(_)):(x=p,_=f,k=S=0),(v&&!~(s+"").indexOf("px")||h&&!~(l+"").indexOf("px"))&&(v=So(g,"x",s,"px"),h=So(g,"y",l,"px")),(y||w||D||j)&&(v=tt(v+y-(y*x+w*S)+D),h=tt(h+w-(y*k+w*_)+j)),(r||o)&&(C=g.getBBox(),v=tt(v+r/100*C.width),h=tt(h+o/100*C.height)),C="matrix("+x+","+k+","+S+","+_+","+v+","+h+")",g.setAttribute("transform",C),b&&(g.style[Ve]=C)},qM=function(e,i,n,r,o){var s=360,l=Pt(o),c=parseFloat(o)*(l&&~o.indexOf("rad")?Qo:1),d=c-r,u=r+d+"deg",p,f;return l&&(p=o.split("_")[1],p==="short"&&(d%=s,d!==d%(s/2)&&(d+=d<0?s:-s)),p==="cw"&&d<0?d=(d+s*x2)%s-~~(d/s)*s:p==="ccw"&&d>0&&(d=(d-s*x2)%s-~~(d/s)*s)),e._pt=f=new yi(e._pt,i,n,r,d,MM),f.e=u,f.u="deg",e._props.push(n),f},S2=function(e,i){for(var n in i)e[n]=i[n];return e},QM=function(e,i,n){var r=S2({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=n.style,l,c,d,u,p,f,g,y;r.svg?(d=n.getAttribute("transform"),n.setAttribute("transform",""),s[Ve]=i,l=ld(n,1),Ps(n,Ve),n.setAttribute("transform",d)):(d=getComputedStyle(n)[Ve],s[Ve]=i,l=ld(n,1),s[Ve]=d);for(c in _r)d=r[c],u=l[c],d!==u&&o.indexOf(c)<0&&(g=Yt(d),y=Yt(u),p=g!==y?So(n,c,d,y):parseFloat(d),f=parseFloat(u),e._pt=new yi(e._pt,l,c,p,f-p,Fg),e._pt.u=y||0,e._props.push(c));S2(l,r)};vi("padding,margin,Width,Radius",function(t,e){var i="Top",n="Right",r="Bottom",o="Left",s=(e<3?[i,n,r,o]:[i+o,i+n,r+n,r+o]).map(function(l){return e<2?t+l:"border"+l+t});dp[e>1?"border"+t:t]=function(l,c,d,u,p){var f,g;if(arguments.length<4)return f=s.map(function(y){return dr(l,y,d)}),g=f.join(" "),g.split(f[0]).length===5?f[0]:g;f=(u+"").split(" "),g={},s.forEach(function(y,w){return g[y]=f[w]=f[w]||f[(w-1)/2|0]}),l.init(c,g,p)}});var w3={name:"css",register:Lg,targetTest:function(e){return e.style&&e.nodeType},init:function(e,i,n,r,o){var s=this._props,l=e.style,c=n.vars.startAt,d,u,p,f,g,y,w,D,j,b,v,h,x,k,S,_;X1||Lg(),this.styles=this.styles||u3(e),_=this.styles.props,this.tween=n;for(w in i)if(w!=="autoRound"&&(u=i[w],!(Ei[w]&&e3(w,i,n,r,e,o)))){if(g=typeof u,y=dp[w],g==="function"&&(u=u.call(n,r,e,o),g=typeof u),g==="string"&&~u.indexOf("random(")&&(u=rd(u)),y)y(this,e,w,u,n)&&(S=1);else if(w.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(w)+"").trim(),u+="",mo.lastIndex=0,mo.test(d)||(D=Yt(d),j=Yt(u)),j?D!==j&&(d=So(e,w,d,j)+j):D&&(u+=D),this.add(l,"setProperty",d,u,r,o,0,0,w),s.push(w),_.push(w,0,l[w]);else if(g!=="undefined"){if(c&&w in c?(d=typeof c[w]=="function"?c[w].call(n,r,e,o):c[w],Pt(d)&&~d.indexOf("random(")&&(d=rd(d)),Yt(d+"")||d==="auto"||(d+=Li.units[w]||Yt(dr(e,w))||""),(d+"").charAt(1)==="="&&(d=dr(e,w))):d=dr(e,w),f=parseFloat(d),b=g==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),p=parseFloat(u),w in Bn&&(w==="autoAlpha"&&(f===1&&dr(e,"visibility")==="hidden"&&p&&(f=0),_.push("visibility",0,l.visibility),Kr(this,l,"visibility",f?"inherit":"hidden",p?"inherit":"hidden",!p)),w!=="scale"&&w!=="transform"&&(w=Bn[w],~w.indexOf(",")&&(w=w.split(",")[0]))),v=w in _r,v){if(this.styles.save(w),g==="string"&&u.substring(0,6)==="var(--"&&(u=rn(e,u.substring(4,u.indexOf(")"))),p=parseFloat(u)),h||(x=e._gsap,x.renderTransform&&!i.parseTransform||ld(e,i.parseTransform),k=i.smoothOrigin!==!1&&x.smooth,h=this._pt=new yi(this._pt,l,Ve,0,1,x.renderTransform,x,0,-1),h.dep=1),w==="scale")this._pt=new yi(this._pt,x,"scaleY",x.scaleY,(b?Ra(x.scaleY,b+p):p)-x.scaleY||0,Fg),this._pt.u=0,s.push("scaleY",w),w+="X";else if(w==="transformOrigin"){_.push(bi,0,l[bi]),u=YM(u),x.svg?Ng(e,u,0,k,0,this):(j=parseFloat(u.split(" ")[2])||0,j!==x.zOrigin&&Kr(this,x,"zOrigin",x.zOrigin,j),Kr(this,l,w,up(d),up(u)));continue}else if(w==="svgOrigin"){Ng(e,u,1,k,0,this);continue}else if(w in m3){qM(this,x,w,f,b?Ra(f,b+u):u);continue}else if(w==="smoothOrigin"){Kr(this,x,"smooth",x.smooth,u);continue}else if(w==="force3D"){x[w]=u;continue}else if(w==="transform"){QM(this,u,e);continue}}else w in l||(w=cl(w)||w);if(v||(p||p===0)&&(f||f===0)&&!AM.test(u)&&w in l)D=(d+"").substr((f+"").length),p||(p=0),j=Yt(u)||(w in Li.units?Li.units[w]:D),D!==j&&(f=So(e,w,d,j)),this._pt=new yi(this._pt,v?x:l,w,f,(b?Ra(f,b+p):p)-f,!v&&(j==="px"||w==="zIndex")&&i.autoRound!==!1?FM:Fg),this._pt.u=j||0,D!==j&&j!=="%"&&(this._pt.b=d,this._pt.r=zM);else if(w in l)HM.call(this,e,w,d,b?b+u:u);else if(w in e)this.add(e,w,d||e[w],b?b+u:u,r,o);else if(w!=="parseTransform"){N1(w,u);continue}v||(w in l?_.push(w,0,l[w]):typeof e[w]=="function"?_.push(w,2,e[w]()):_.push(w,1,d||e[w])),s.push(w)}}S&&s3(this)},render:function(e,i){if(i.tween._time||!Z1())for(var n=i._pt;n;)n.r(e,n.d),n=n._next;else i.styles.revert()},get:dr,aliases:Bn,getSetter:function(e,i,n){var r=Bn[i];return r&&r.indexOf(",")<0&&(i=r),i in _r&&i!==bi&&(e._gsap.x||dr(e,"x"))?n&&g2===n?i==="scale"?OM:NM:(g2=n||{})&&(i==="scale"?$M:BM):e.style&&!F1(e.style[i])?RM:~i.indexOf("-")?LM:Y1(e,i)},core:{_removeProperty:Ps,_getMatrix:Q1}};ji.utils.checkPrefix=cl;ji.core.getStyleSaver=u3;(function(t,e,i,n){var r=vi(t+","+e+","+i,function(o){_r[o]=1});vi(e,function(o){Li.units[o]="deg",m3[o]=1}),Bn[r[13]]=t+","+e,vi(n,function(o){var s=o.split(":");Bn[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");vi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Li.units[t]="px"});ji.registerPlugin(w3);var J=ji.registerPlugin(w3)||ji;J.core.Tween;/*!
 * VelocityTracker: 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Nn,Og,kc,v3,ra,_a,$g,y3,b3=function(){return Nn||typeof window<"u"&&(Nn=window.gsap)},Bg={},KM=function(e){return Math.round(e*1e4)/1e4},Vg=function(e){return y3(e).id},Ql=function(e){return Bg[Vg(typeof e=="string"?kc(e)[0]:e)]},D2=function(e){var i=ra,n;if(e-$g>=.05)for($g=e;i;)n=i.g(i.t,i.p),(n!==i.v1||e-i.t1>.2)&&(i.v2=i.v1,i.v1=n,i.t2=i.t1,i.t1=e),i=i._next},JM={deg:360,rad:Math.PI*2},u0=function(){Nn=b3(),Nn&&(kc=Nn.utils.toArray,v3=Nn.utils.getUnit,y3=Nn.core.getCache,_a=Nn.ticker,Og=1)},ez=function(e,i,n,r){this.t=e,this.p=i,this.g=e._gsap.get,this.rCap=JM[n||v3(this.g(e,i))],this.v1=this.v2=0,this.t1=this.t2=_a.time,r&&(this._next=r,r._prev=this)},Dd=function(){function t(i,n){Og||u0(),this.target=kc(i)[0],Bg[Vg(this.target)]=this,this._props={},n&&this.add(n)}t.register=function(n){Nn=n,u0()};var e=t.prototype;return e.get=function(n,r){var o=this._props[n]||console.warn("Not tracking "+n+" velocity."),s,l,c;return s=parseFloat(r?o.v1:o.g(o.t,o.p)),l=s-parseFloat(o.v2),c=o.rCap,c&&(l=l%c,l!==l%(c/2)&&(l=l<0?l+c:l-c)),KM(l/((r?o.t1:_a.time)-o.t2))},e.getAll=function(){var n={},r=this._props,o;for(o in r)n[o]=this.get(o);return n},e.isTracking=function(n){return n in this._props},e.add=function(n,r){n in this._props||(ra||(_a.add(D2),$g=_a.time),ra=this._props[n]=new ez(this.target,n,r,ra))},e.remove=function(n){var r=this._props[n],o,s;r&&(o=r._prev,s=r._next,o&&(o._next=s),s?s._prev=o:ra===r&&(_a.remove(D2),ra=0),delete this._props[n])},e.kill=function(n){for(var r in this._props)this.remove(r);n||delete Bg[Vg(this.target)]},t.track=function(n,r,o){Og||u0();for(var s=[],l=kc(n),c=r.split(","),d=(o||"").split(","),u=l.length,p,f;u--;){for(p=Ql(l[u])||new t(l[u]),f=c.length;f--;)p.add(c[f],d[f]||d[0]);s.push(p)}return s},t.untrack=function(n,r){var o=(r||"").split(",");kc(n).forEach(function(s){var l=Ql(s);l&&(o.length?o.forEach(function(c){return l.remove(c)}):l.kill(1))})},t.isTracking=function(n,r){var o=Ql(n);return o&&o.isTracking(r)},t.getVelocity=function(n,r){var o=Ql(n);return!o||!o.isTracking(r)?console.warn("Not tracking velocity of "+r):o.get(r)},t}();Dd.getByTarget=Ql;b3()&&Nn.registerPlugin(Dd);/*!
 * InertiaPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var gt,k3,_2,j3,Wg,jc,S3,D3,_3,K1,C3,Sc,Ug,P3,hp=Dd.getByTarget,T3=function(){return gt||typeof window<"u"&&(gt=window.gsap)&&gt.registerPlugin&&gt},tz=function(e){return typeof e=="string"},cd=function(e){return typeof e=="number"},go=function(e){return typeof e=="object"},Hg=function(e){return typeof e=="function"},iz=1,E3=Array.isArray,nz=function(e){return e},xs=1e10,C2=1/xs,I3=.05,rz=function(e){return Math.round(e*1e4)/1e4},oz=function(e,i,n){for(var r in i)!(r in e)&&r!==n&&(e[r]=i[r]);return e},sz=function t(e){var i={},n,r;for(n in e)i[n]=go(r=e[n])&&!E3(r)?t(r):r;return i},P2=function(e,i,n,r,o){var s=i.length,l=0,c=xs,d,u,p,f;if(go(e)){for(;s--;){d=i[s],u=0;for(p in e)f=d[p]-e[p],u+=f*f;u<c&&(l=s,c=u)}if((o||xs)<xs&&o<Math.sqrt(c))return e}else for(;s--;)d=i[s],u=d-e,u<0&&(u=-u),u<c&&d>=r&&d<=n&&(l=s,c=u);return i[l]},A3=function(e,i,n,r,o,s,l){if(e.end==="auto")return e;var c=e.end,d,u;if(n=isNaN(n)?xs:n,r=isNaN(r)?-xs:r,go(i)){if(d=i.calculated?i:(Hg(c)?c(i,l):P2(i,c,n,r,s))||i,!i.calculated){for(u in d)i[u]=d[u];i.calculated=!0}d=d[o]}else d=Hg(c)?c(i,l):E3(c)?P2(i,c,n,r,s):parseFloat(c);return d>n?d=n:d<r&&(d=r),{max:d,min:d,unitFactor:e.unitFactor}},pp=function(e,i,n){return isNaN(e[i])?n:+e[i]},J1=function(e,i){return i*I3*e/K1},T2=function(e,i,n){return Math.abs((i-e)*K1/n/I3)},M3={resistance:1,checkpoint:1,preventOvershoot:1,linkedProps:1,radius:1,duration:1},z3=function(e,i,n,r){if(i.linkedProps){var o=i.linkedProps.split(","),s={},l,c,d,u,p,f;for(l=0;l<o.length;l++)c=o[l],d=i[c],d&&(cd(d.velocity)?u=d.velocity:(p=p||hp(e),u=p&&p.isTracking(c)?p.get(c):0),f=Math.abs(u/pp(d,"resistance",r)),s[c]=parseFloat(n(e,c))+J1(u,f));return s}},az=function(e,i,n,r,o,s){if(n===void 0&&(n=10),r===void 0&&(r=.2),o===void 0&&(o=1),s===void 0&&(s=0),tz(e)&&(e=j3(e)[0]),!e)return 0;var l=0,c=xs,d=i.inertia||i,u=_3(e).get,p=pp(d,"resistance",jc.resistance),f,g,y,w,D,j,b,v,h,x;x=z3(e,d,u,p);for(f in d)M3[f]||(g=d[f],go(g)||(v=v||hp(e),v&&v.isTracking(f)?g=cd(g)?{velocity:g}:{velocity:v.get(f)}:(w=+g||0,y=Math.abs(w/p))),go(g)&&(cd(g.velocity)?w=g.velocity:(v=v||hp(e),w=v&&v.isTracking(f)?v.get(f):0),y=C3(r,n,Math.abs(w/pp(g,"resistance",p))),D=parseFloat(u(e,f))||0,j=D+J1(w,y),"end"in g&&(g=A3(g,x&&f in x?x:j,g.max,g.min,f,d.radius,w),s&&(Sc===i&&(Sc=d=sz(i)),d[f]=oz(g,d[f],"end"))),"max"in g&&j>+g.max+C2?(h=g.unitFactor||jc.unitFactors[f]||1,b=D>g.max&&g.min!==g.max||w*h>-15&&w*h<45?r+(n-r)*.1:T2(D,g.max,w),b+o<c&&(c=b+o)):"min"in g&&j<+g.min-C2&&(h=g.unitFactor||jc.unitFactors[f]||1,b=D<g.min&&g.min!==g.max||w*h>-45&&w*h<15?r+(n-r)*.1:T2(D,g.min,w),b+o<c&&(c=b+o)),b>l&&(l=b)),y>l&&(l=y));return l>c&&(l=c),l>n?n:l<r?r:l},E2=function(){gt=T3(),gt&&(_2=gt.parseEase,j3=gt.utils.toArray,S3=gt.utils.getUnit,_3=gt.core.getCache,C3=gt.utils.clamp,Ug=gt.core.getStyleSaver,P3=gt.core.reverting||function(){},Wg=_2("power3"),K1=Wg(.05),D3=gt.core.PropTween,gt.config({resistance:100,unitFactors:{time:1e3,totalTime:1e3,progress:1e3,totalProgress:1e3}}),jc=gt.config(),gt.registerPlugin(Dd),k3=1)},ew={version:"3.13.0",name:"inertia",register:function(e){gt=e,E2()},init:function(e,i,n,r,o){k3||E2();var s=hp(e);if(i==="auto"){if(!s){console.warn("No inertia tracking on "+e+". InertiaPlugin.track(target) first.");return}i=s.getAll()}this.styles=Ug&&typeof e.style=="object"&&Ug(e),this.target=e,this.tween=n,Sc=i;var l=e._gsap,c=l.get,d=i.duration,u=go(d),p=i.preventOvershoot||u&&d.overshoot===0,f=pp(i,"resistance",jc.resistance),g=cd(d)?d:az(e,i,u&&d.max||10,u&&d.min||.2,u&&"overshoot"in d?+d.overshoot:p?0:1,!0),y,w,D,j,b,v,h,x,k;i=Sc,Sc=0,k=z3(e,i,c,f);for(y in i)M3[y]||(w=i[y],Hg(w)&&(w=w(r,e,o)),cd(w)?b=w:go(w)&&!isNaN(w.velocity)?b=+w.velocity:s&&s.isTracking(y)?b=s.get(y):console.warn("ERROR: No velocity was defined for "+e+" property: "+y),v=J1(b,g),x=0,D=c(e,y),j=S3(D),D=parseFloat(D),go(w)&&(h=D+v,"end"in w&&(w=A3(w,k&&y in k?k:h,w.max,w.min,y,i.radius,b)),"max"in w&&+w.max<h?p||w.preventOvershoot?v=w.max-D:x=w.max-D-v:"min"in w&&+w.min>h&&(p||w.preventOvershoot?v=w.min-D:x=w.min-D-v)),this._props.push(y),this.styles&&this.styles.save(y),this._pt=new D3(this._pt,e,y,D,0,nz,0,l.set(e,y,this)),this._pt.u=j||0,this._pt.c1=v,this._pt.c2=x);return n.duration(g),iz},render:function(e,i){var n=i._pt;if(e=Wg(i.tween._time/i.tween._dur),e||!P3())for(;n;)n.set(n.t,n.p,rz(n.s+n.c1*e+n.c2*e*e)+n.u,n.d,e),n=n._next;else i.styles.revert()}};"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(t){return ew[t]=Dd[t]});T3()&&gt.registerPlugin(ew);J.registerPlugin(ew);function lz(t,e){let i;return(...n)=>{clearTimeout(i),i=setTimeout(()=>t(...n),e)}}const cz=T.forwardRef(({dotSize:t=16,gap:e=32,baseColor:i="#00d8ff",activeColor:n="#00ff00",proximity:r=150,speedTrigger:o=100,shockRadius:s=250,shockStrength:l=8,maxSpeed:c=5e3,resistance:d=750,returnDuration:u=1.5,className:p="",style:f},g)=>{const y=T.useRef(null),w=T.useRef([]),D=T.useRef([]),j=T.useCallback(()=>{const v=y.current;if(!v)return;v.innerHTML="",w.current=[],D.current=[];const{clientWidth:h,clientHeight:x}=v,k=h/2,S=x/2,_=Math.min(h,x)*.5*.95,C=e,E=t,z=Math.floor(_/C),A=[];for(let V=0;V<z;V++){const $=V/z*_,I=C+$/_*C*1.5,M=2*Math.PI*($||1),P=Math.max(6,Math.floor(M/I));for(let R=0;R<P;R++){const U=R/P*2*Math.PI,ne=k+$*Math.cos(U),Z=S+$*Math.sin(U);ne<0||ne>h||Z<0||Z>x||A.push({x:ne,y:Z})}}const L=40;let N=0;function W(){if(!v)return;const V=Math.min(N+L,A.length);for(;N<V;N++){const{x:$,y:I}=A[N],M=document.createElement("div");M.classList.add("dot-grid__dot"),M._inertiaApplied=!1,J.set(M,{x:0,y:0,backgroundColor:i,width:E,height:E,left:$-E/2,top:I-E/2,position:"absolute"}),v.appendChild(M),w.current.push({x:$,y:I,element:M,originalX:$,originalY:I,currentX:$,currentY:I,velocityX:0,velocityY:0})}N<A.length?requestAnimationFrame(W):requestAnimationFrame(()=>{D.current=w.current.map(({element:$,x:I,y:M})=>({el:$,x:I,y:M}))})}W()},[t,e,i]);T.useEffect(()=>{const v=lz(j,250);j();const h=new ResizeObserver(v);return y.current&&h.observe(y.current),()=>h.disconnect()},[j]);const b=(v,h)=>{D.current.forEach(({el:x,x:k,y:S})=>{const _=Math.hypot(k-v,S-h);if(w.current.find(E=>E.element===x)&&_<s&&!x._inertiaApplied){x._inertiaApplied=!0;const E=Math.max(0,1-_/s),z=(k-v)*l*E,A=(S-h)*l*E;J.to(x,{backgroundColor:n,duration:.2,onComplete:()=>{J.to(x,{backgroundColor:i,duration:.5,delay:.3})}}),J.to(x,{inertia:{x:z,y:A,resistance:d},onComplete:()=>{J.to(x,{x:0,y:0,duration:u,ease:"elastic.out(1,0.75)"}),x._inertiaApplied=!1}})}})};return T.useEffect(()=>{let v=0,h=0,x=0,k=null;const S=E=>{const z=performance.now(),A=z-(v||z),L=E.pageX-h,N=E.pageY-x;let W=L/A*1e3,V=N/A*1e3,$=Math.hypot(W,V);if($>c){const I=c/$;W*=I,V*=I,$=c}v=z,h=E.pageX,x=E.pageY,requestAnimationFrame(()=>{D.current.forEach(({el:I,x:M,y:P})=>{const R=Math.hypot(M-E.pageX,P-E.pageY),U=Math.max(0,1-R/r);if(J.set(I,{backgroundColor:J.utils.interpolate(i,n,U)}),w.current.find(Z=>Z.element===I)&&$>o&&R<r&&!I._inertiaApplied){I._inertiaApplied=!0;const Z=M-E.pageX+W*.005,fe=P-E.pageY+V*.005;J.to(I,{inertia:{x:Z,y:fe,resistance:d},onComplete:()=>{J.to(I,{x:0,y:0,duration:u,ease:"elastic.out(1,0.75)"}),I._inertiaApplied=!1}})}})})},_=E=>{k||(k=setTimeout(()=>{S(E),k=null},60))},C=E=>{b(E.pageX,E.pageY)};return window.addEventListener("mousemove",_),window.addEventListener("click",C),()=>{window.removeEventListener("mousemove",_),window.removeEventListener("click",C),k&&clearTimeout(k)}},[i,n,r,o,s,l,c,d,u]),T.useImperativeHandle(g,()=>({triggerShockwave:(v,h)=>{b(v,h)}}),[i,n,s,l,d,u]),a.jsx("section",{className:`dot-grid ${p}`,style:{...f,"--dot-size":`${t}px`,"--dot-gap":`${e}px`},children:a.jsx("div",{className:"dot-grid__wrap",children:a.jsx("div",{ref:y,className:"dot-grid__container"})})})}),I2=(t,e,i,n)=>{t.style.transition=`${e} ${i}ms ${n}`},ur=(t,e,i)=>Math.min(Math.max(t,e),i);class dz{constructor(e,i){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=s=>{const{width:l,height:c}=s,d=Math.sqrt(l**2+c**2);return{width:d,height:d}},this.setSize=s=>{const l=this.calculateGlareSize(s);this.glareEl.style.width=`${l.width}px`,this.glareEl.style.height=`${l.height}px`},this.update=(s,l,c,d)=>{this.updateAngle(s,l.glareReverse),this.updateOpacity(s,l,c,d)},this.updateAngle=(s,l)=>{const{xPercentage:c,yPercentage:d}=s,u=180/Math.PI,p=c?Math.atan2(d,-c)*u:0;this.glareAngle=p-(l?180:0)},this.updateOpacity=(s,l,c,d)=>{const{xPercentage:u,yPercentage:p}=s,{glarePosition:f,glareReverse:g,glareMaxOpacity:y}=l,w=c?-1:1,D=d?-1:1,j=g?-1:1;let b=0;switch(f){case"top":b=-u*w*j;break;case"right":b=p*D*j;break;case"bottom":case void 0:b=u*w*j;break;case"left":b=-p*D*j;break;case"all":b=Math.hypot(u,p)}const v=ur(b,0,100);this.glareOpacity=v*y/100},this.render=s=>{const{glareColor:l}=s;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${l} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const n={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:i,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},r=this.calculateGlareSize(e),o={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${r.width}px`,height:`${r.height}px`};Object.assign(this.glareWrapperEl.style,n),Object.assign(this.glareEl.style,o)}}class uz{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,i)=>{this.updateTilt(e,i),this.updateTiltManualInput(e,i),this.updateTiltReverse(i),this.updateTiltLimits(i)},this.updateTilt=(e,i)=>{const{xPercentage:n,yPercentage:r}=e,{tiltMaxAngleX:o,tiltMaxAngleY:s}=i;this.tiltAngleX=n*o/100,this.tiltAngleY=r*s/100*-1},this.updateTiltManualInput=(e,i)=>{const{tiltAngleXManual:n,tiltAngleYManual:r,tiltMaxAngleX:o,tiltMaxAngleY:s}=i;(n!==null||r!==null)&&(this.tiltAngleX=n!==null?n:0,this.tiltAngleY=r!==null?r:0,e.xPercentage=100*this.tiltAngleX/o,e.yPercentage=100*this.tiltAngleY/s)},this.updateTiltReverse=e=>{const i=e.tiltReverse?-1:1;this.tiltAngleX=i*this.tiltAngleX,this.tiltAngleY=i*this.tiltAngleY},this.updateTiltLimits=e=>{const{tiltAxis:i}=e;this.tiltAngleX=ur(this.tiltAngleX,-90,90),this.tiltAngleY=ur(this.tiltAngleY,-90,90),i&&(this.tiltAngleX=i==="x"?this.tiltAngleX:0,this.tiltAngleY=i==="y"?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{const{tiltMaxAngleX:i,tiltMaxAngleY:n}=e;this.tiltAngleXPercentage=this.tiltAngleX/i*100,this.tiltAngleYPercentage=this.tiltAngleY/n*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const hz={scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1,tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null,glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"};class as extends T.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=async()=>{if(!window.DeviceOrientationEvent)return;const e=DeviceOrientationEvent.requestPermission;typeof e=="function"?await e()==="granted"&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{const{onEnter:i}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),i&&i({event:e})},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{const{onLeave:i}=this.props;if(this.setTransitions(),i&&i({event:e}),this.props.reset){const n=new CustomEvent("autoreset");this.onMove(n)}},this.processInput=e=>{const{scale:i}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=i;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=i;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=i;break;case"autoreset":{const{tiltAngleXInitial:n,tiltAngleYInitial:r,tiltMaxAngleX:o,tiltMaxAngleY:s}=this.props,l=r/s*100;this.wrapperEl.clientPosition.xPercentage=ur(n/o*100,-100,100),this.wrapperEl.clientPosition.yPercentage=ur(l,-100,100),this.wrapperEl.scale=1;break}}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:i,tiltMaxAngleY:n}=this.props,r=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/i*100,this.wrapperEl.clientPosition.yPercentage=r/n*100,this.wrapperEl.clientPosition.xPercentage=ur(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=ur(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{const{tiltEnable:i,flipVertically:n,flipHorizontally:r}=this.props;e!=="autoreset"&&e!=="deviceorientation"&&e!=="propChange"&&this.updateClientInput(),i&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,n,r)},this.updateClientInput=()=>{const{trackOnWindow:e}=this.props;let i,n;if(e){const{x:r,y:o}=this.wrapperEl.clientPosition;i=o/window.innerHeight*200-100,n=r/window.innerWidth*200-100}else{const{size:{width:r,height:o,left:s,top:l},clientPosition:{x:c,y:d}}=this.wrapperEl;i=(d-l)/o*200-100,n=(c-s)/r*200-100}this.wrapperEl.clientPosition.xPercentage=ur(i,-100,100),this.wrapperEl.clientPosition.yPercentage=ur(n,-100,100)},this.updateFlip=()=>{const{flipVertically:e,flipHorizontally:i}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),i&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new uz,this.initGlare(),this.setSize(),this.addEventListeners(),typeof CustomEvent>"u")return;const e=new CustomEvent("autoreset");this.mainLoop(e);const i=new CustomEvent("initial");this.emitOnMove(i)}componentWillUnmount(){this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){const{trackOnWindow:e,gyroscope:i}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),i&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:e,gyroscope:i}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),i&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){const{glareEnable:e,glareBorderRadius:i}=this.props;e&&(this.glare=new dz(this.wrapperEl.size,i),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){const{onMove:i}=this.props;if(!i)return;let n=0,r=0;this.glare&&(n=this.glare.glareAngle,r=this.glare.glareOpacity),i({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:n,glareOpacity:r,event:e})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){const{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){const{transitionSpeed:e,transitionEasing:i}=this.props;I2(this.wrapperEl.node,"all",e,i),this.glare&&I2(this.glare.glareEl,"opacity",e,i)}render(){const{children:e,className:i,style:n}=this.props;return a.jsx("div",{ref:r=>{this.wrapperEl.node=r},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:i,style:n,children:e})}}as.defaultProps=hz;const pz="/Nooshin-Shahsavan-portfolio/assets/sbs-home.5deffb37.mp4",fz="/Nooshin-Shahsavan-portfolio/assets/deli12.2549fd93.jpg",mz="/Nooshin-Shahsavan-portfolio/assets/veen-home.4b7d7433.mp4",tw="/Nooshin-Shahsavan-portfolio/assets/box-2.09b2c2b0.jpg",Ge=[{type:"video",src:pz,label:"Branding/Print",details:[{label:"Project Title:",value:"S.B.S"},{label:"Description:",value:" S.B.S is a clothing brand based in Vancouver. Their goal is to design affordable fashion for partygoers. I designed their logo, print materials, and social media visuals. "},{label:"Timeline",value:"3 weeks"},{label:"Year",value:"2023"}]},{type:"image",src:fz,label:"Branding",details:[{label:"Project Title:",value:"Delicato"},{label:"Description:",value:"Delicato is a small interior design company from Italy that relies on classical architecture in its designs. "},{label:"Timeline",value:"2 weeks"},{label:"Year",value:"2024"}]},{type:"image",src:tw,label:"Branding",details:[{label:"Project Title:",value:"Zar"},{label:"Description:",value:"Zar is an Iranian saffron product that started its activity in 1988. I worked on their branding and packaging design."},{label:"Timeline",value:"2 weeks"},{label:"Year",value:"2024"}]},{type:"video",src:mz,label:"Branding",details:[{label:"Project Title",value:"Veen "},{label:"Description:",value:"Veen is a photography studio based in Vancouver, targeting families and children. I handled their social media and branding."},{label:"Timeline",value:"2 weeks"},{label:"Year",value:"2024"}]}],gz=`
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
`,xz=()=>{const t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},e={hidden:{opacity:0,y:50,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:gz}),a.jsxs(O.div,{className:"recent-works-grid",variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx(O.div,{variants:e,children:a.jsx(as,{tiltMaxAngleX:20,tiltMaxAngleY:20,scale:1.08,glareEnable:!0,glareMaxOpacity:.4,glareColor:"#ffffff",glarePosition:"all",glareBorderRadius:"8px",children:a.jsxs(bn,{to:"/work/sbs",className:"work-item",tabIndex:0,children:[a.jsx("div",{className:"work-label",children:Ge[0].label}),a.jsx("div",{className:"work-media-container",children:a.jsx("video",{src:Ge[0].src,className:"work-media",controls:!1,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),a.jsxs("div",{className:"work-info-box",children:[a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Project:"})," ",Ge[0].details[0].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Timeline:"})," ",Ge[0].details[2].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Year:"})," ",Ge[0].details[3].value]})]})]})})}),a.jsx(O.div,{variants:e,children:a.jsx(as,{tiltMaxAngleX:20,tiltMaxAngleY:20,scale:1.08,glareEnable:!0,glareMaxOpacity:.4,glareColor:"#ffffff",glarePosition:"all",glareBorderRadius:"8px",children:a.jsxs(bn,{to:"/work/delicato",className:"work-item",tabIndex:0,children:[a.jsx("div",{className:"work-label",children:Ge[1].label}),a.jsx("div",{className:"work-media-container",children:a.jsx("img",{src:Ge[1].src,alt:Ge[1].label,className:"work-media"})}),a.jsxs("div",{className:"work-info-box",children:[a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Project :"})," ",Ge[1].details[0].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Timeline:"})," ",Ge[1].details[2].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Year:"})," ",Ge[1].details[3].value]})]})]})})}),a.jsx(O.div,{variants:e,children:a.jsx(as,{tiltMaxAngleX:20,tiltMaxAngleY:20,scale:1.08,glareEnable:!0,glareMaxOpacity:.4,glareColor:"#ffffff",glarePosition:"all",glareBorderRadius:"8px",children:a.jsxs(bn,{to:"/work/zar",className:"work-item",tabIndex:0,children:[a.jsx("div",{className:"work-label",children:Ge[2].label}),a.jsx("div",{className:"work-media-container",children:a.jsx("img",{src:Ge[2].src,alt:Ge[2].label,className:"work-media cover-fit"})}),a.jsxs("div",{className:"work-info-box",children:[a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Project:"})," ",Ge[2].details[0].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Timeline:"})," ",Ge[2].details[2].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Year:"})," ",Ge[2].details[3].value]})]})]})})}),a.jsx(O.div,{variants:e,children:a.jsx(as,{tiltMaxAngleX:20,tiltMaxAngleY:20,scale:1.08,glareEnable:!0,glareMaxOpacity:.4,glareColor:"#ffffff",glarePosition:"all",glareBorderRadius:"8px",children:a.jsxs(bn,{to:"/work/veen",className:"work-item",tabIndex:0,children:[a.jsx("div",{className:"work-label",children:Ge[3].label}),a.jsx("div",{className:"work-media-container",children:a.jsx("video",{src:Ge[3].src,className:"work-media",controls:!1,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),a.jsxs("div",{className:"work-info-box",children:[a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Project :"})," ",Ge[3].details[0].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Timeline:"})," ",Ge[3].details[2].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Year:"})," ",Ge[3].details[3].value]})]})]})})})]})]})};var F3={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},A2=q.createContext&&q.createContext(F3),xo=globalThis&&globalThis.__assign||function(){return xo=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++){e=arguments[i];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},xo.apply(this,arguments)},wz=globalThis&&globalThis.__rest||function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(i[n[r]]=t[n[r]]);return i};function R3(t){return t&&t.map(function(e,i){return q.createElement(e.tag,xo({key:i},e.attr),R3(e.child))})}function iw(t){return function(e){return q.createElement(vz,xo({attr:xo({},t.attr)},e),R3(t.child))}}function vz(t){var e=function(i){var n=t.attr,r=t.size,o=t.title,s=wz(t,["attr","size","title"]),l=r||i.size||"1em",c;return i.className&&(c=i.className),t.className&&(c=(c?c+" ":"")+t.className),q.createElement("svg",xo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,n,s,{className:c,style:xo(xo({color:t.color||i.color},i.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&q.createElement("title",null,o),t.children)};return A2!==void 0?q.createElement(A2.Consumer,null,function(i){return e(i)}):e(F3)}function yz(t){return iw({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M1023.46 232a31.629 31.629 0 0 0-2.48-18.271C1012.917 178.288 987.3 160 944.005 160h-832c-38.08 0-79.105 14-99.28 41.472-1.745 1.328-3.409 2.832-4.912 4.576-6.449 7.44-8.705 17.009-7.264 26.033-.288 2.592-.544 5.2-.544 7.92v512c0 53.024 58.992 112 112 112h832c53.024 0 80-58.976 80-112v-512c0-2.832-.368-5.313-.544-8.001zm-911.459-8l832.001-.001h.432L512.002 568.655 81.314 225.407C91.106 223.599 103.154 224 112 224zm832.001 575.999H112.003c-17.648 0-48-30.336-48-48V293.551l427.04 341.648c6.016 5.2 13.487 7.792 20.959 7.792a32.046 32.046 0 0 0 20.976-7.792l427.024-341.632v458.432c0 17.664 1.664 48-16 48z"}}]})(t)}function bz(t){return iw({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511 4c138 0 155 1 209 3 53 2 90 11 123 24 34 13 62 30 90 58s45 56 58 90c13 33 22 70 24 123 2 54 3 71 3 209s-1 155-3 209c-2 53-11 90-24 123-13 34-30 62-58 90s-56 45-90 58c-33 13-70 22-123 24-54 2-71 3-209 3s-155-1-209-3c-53-2-90-11-123-24-34-13-62-30-90-58s-45-56-58-90C18 810 9 773 7 720c-2-54-3-71-3-209s1-155 3-209c2-53 11-90 24-123 13-34 30-62 58-90s56-45 90-58c33-13 70-22 123-24 54-2 71-3 209-3zm0 66c-144 0-161 1-217 3-52 2-81 12-100 19-49 20-82 53-102 102-7 19-17 48-19 100-2 56-3 73-3 217s1 161 3 217c2 52 12 81 19 100 20 49 53 82 102 102 19 7 48 17 100 19 56 2 73 3 217 3s161-1 217-3c52-2 81-12 100-19 49-20 82-53 102-102 7-19 17-48 19-100 2-56 3-73 3-217s-1-161-3-217c-2-52-12-81-19-100-20-49-53-82-102-102-19-7-48-17-100-19-56-2-73-3-217-3zm0 644c112 0 203-91 203-203s-91-203-203-203-203 91-203 203 91 203 203 203zm0-463c144 0 260 116 260 260S655 771 511 771 251 655 251 511s116-260 260-260zm332-10c0 34-28 60-62 60s-60-26-60-60 26-62 60-62 62 28 62 62z"}}]})(t)}function kz(t){return iw({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M997.795 1002.43H789.769c-14.715 0-26.607-11.892-26.607-26.607V640.806c0-114.898-59.263-114.898-78.816-114.898-52.611 0-74.986 41.525-82.243 59.466-3.427 8.064-5.04 21.77-5.04 40.921v349.732c0 14.715-11.892 26.607-26.606 26.607H362.23c-7.055 0-13.909-2.822-18.948-7.86s-7.861-11.895-7.66-18.95c0-5.643 2.822-567.432 0-624.881-.403-7.257 2.217-14.312 7.257-19.553s11.893-8.265 19.35-8.265h208.228c14.714 0 26.607 11.892 26.607 26.607v15.723c35.074-31.244 85.669-57.046 161.058-57.046 166.702 0 266.28 115.3 266.28 308.409v359.005c0 14.715-11.893 26.607-26.607 26.607zm-181.418-53.214l155.012-.004V616.815c0-162.268-77.606-255.193-213.065-255.193-90.507 0-134.45 45.153-162.066 86.476-3.225 10.885-13.506 18.949-25.6 18.949h-1.41c-9.677 0-18.546-5.242-23.181-13.707-3.628-6.653-4.435-14.313-2.016-21.368v-55.835H389.443c1.411 111.068 0 470.477-.403 572.877h154.809V626.09c0-26.809 2.822-46.16 8.869-60.875 23.383-57.852 72.566-92.724 131.427-92.724 83.855 0 132.03 61.28 132.03 168.113v308.611h.204zm-569.246 53.21H38.904c-14.715 0-26.607-11.892-26.607-26.607V349.73c0-14.715 11.892-26.608 26.607-26.608h208.227c14.715 0 26.607 11.893 26.607 26.607V975.82c0 14.715-11.892 26.608-26.607 26.608zM65.513 949.213h155.01V376.336H65.514v572.876zm77.605-658.344l-1.412-.001c-82.041 0-141.707-56.844-141.707-135.055 0-78.009 60.674-134.854 144.529-134.854 82.444 0 141.305 55.231 142.918 134.249 0 78.816-60.674 135.66-144.328 135.66zm1.41-216.492c-54.627 0-91.313 32.857-91.313 81.639 0 47.974 36.284 81.637 88.492 81.637h1.41c54.426 0 91.112-32.857 91.112-81.638-1.008-49.386-36.283-81.638-89.701-81.638z"}}]})(t)}const jz=m.div`
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
`,Sz=m.div`
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
`,Dz=m.a`
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
`,_z=m.div`
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
`,Cz=[{icon:a.jsx(yz,{}),label:"Email Contact",link:"https://mail.google.com/mail/?view=cm&to=nooshin.shahsavan.ca@gmail.com&su=Contact%20from%20my%20website",title:"Email Contact"},{icon:a.jsx(kz,{}),label:"LinkedIn",link:"https://linkedin.com/in/nooshin-shahsavan",title:"LinkedIn"},{icon:a.jsx(bz,{}),label:"Instagram",link:"https://instagram.com/its.nooshin_/",title:"Instagram"}],L3=()=>{const[t,e]=T.useState(null);return a.jsx(jz,{children:a.jsx(Sz,{children:Cz.map((i,n)=>a.jsxs(Dz,{href:i.link,title:i.title,target:"_blank",rel:"noopener noreferrer",$hovered:t===n,onMouseEnter:()=>e(n),onMouseLeave:()=>e(null),children:[i.icon,a.jsx(_z,{$visible:t===n,children:i.label})]},i.label))})})};const Pz=()=>{const t=T.useRef(null),e=T.useRef(null);T.useState(!1);const i=()=>{if(console.log("Starting Say Hi animation..."),!e.current){console.error("Say Hi text element not found");return}J.set(e.current,{opacity:1,scale:.5,x:535,y:250}),J.timeline({repeat:-1,repeatDelay:2}).to(e.current,{opacity:1,scale:1.2,y:230,duration:.5,ease:"back.out(1.7)"}).to(e.current,{opacity:0,scale:.8,y:210,duration:.5,delay:.5}),console.log("Say Hi animation timeline created")};T.useEffect(()=>{const r=setTimeout(()=>{i()},1e3);return()=>clearTimeout(r)},[]),T.useEffect(()=>{const r=async()=>{if(window.spirit)o();else{const s=document.createElement("script");s.src="https://unpkg.com/spiritjs/dist/spirit.min.js",s.onload=()=>{o()},document.head.appendChild(s)}},o=()=>{const s=()=>{window.spirit&&window.spirit.loadAnimation?window.spirit.loadAnimation({loop:!0,path:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/cactus.json"}).then(()=>{console.log("Spirit animation loaded successfully")}).catch(l=>{console.error("Failed to load Spirit animation:",l)}):setTimeout(s,100)};s()};return r(),()=>{t.current&&J.killTweensOf(t.current),e.current&&J.killTweensOf(e.current)}},[]);const n=()=>{navigator.clipboard.writeText("nooshin-shahsavan.ca@gmail.com").then(()=>{const r=document.querySelector(".cactus2-email");r&&(r.classList.add("email-copied"),setTimeout(()=>{r.classList.remove("email-copied")},2e3))})};return a.jsxs("div",{className:"cactus2-container",children:[a.jsx("h2",{className:"cactus2-title",children:"Say Hi!"}),a.jsx("p",{className:"cactus2-email",onClick:n,title:"Click to copy email",children:"nooshin-shahsavan.ca@gmail.com"}),a.jsxs("svg",{ref:t,width:"833px",height:"637px",viewBox:"0 0 833 637",className:"cactus2-svg",children:[a.jsxs("g",{"data-spirit-id":"right-cactus",children:[a.jsxs("g",{"data-spirit-id":"right-body",children:[a.jsx("path",{fill:"#29EA90",d:"M565.5,459.5c0,0,13-112,13-136s-27-37-44-37s-44,13-44,37s13,136,13,136H565.5z"}),a.jsx("path",{fill:"#22B562",d:"M546,288c0,0,14,14,19,29s-11,142-11,142h11c0,0,19-126.3,12-145S546,288,546,288z"}),a.jsx("path",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeMiterlimit:"10",d:`M565.5,459.5c0,0,13-112,13-136s-27-37-44-37
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
              s27.8,62,62,62s62-27.8,62-62S232.2,173,198,173L198,173z`})})]}),a.jsxs("g",{"data-spirit-id":"burst",children:[a.jsxs("g",{"data-spirit-id":"burst-strokes",children:[a.jsx("line",{"data-spirit-id":"bust-stroke-4",fill:"none",stroke:"#000000",strokeWidth:"5",strokeLinecap:"round",strokeMiterlimit:"10",x1:"437",y1:"192",x2:"437",y2:"110"}),a.jsx("line",{"data-spirit-id":"bust-stroke-3",fill:"none",stroke:"#000000",strokeWidth:"5",strokeLinecap:"round",strokeMiterlimit:"10",x1:"437.5",y1:"360",x2:"437.5",y2:"278"}),a.jsx("line",{"data-spirit-id":"bust-stroke-2",fill:"none",stroke:"#000000",strokeWidth:"5",strokeLinecap:"round",strokeMiterlimit:"10",x1:"480.2",y1:"234.8",x2:"562.2",y2:"234.8"}),a.jsx("line",{"data-spirit-id":"bust-stroke-1",fill:"none",stroke:"#000000",strokeWidth:"5",strokeLinecap:"round",strokeMiterlimit:"10",x1:"312.2",y1:"235.2",x2:"394.2",y2:"235.2"})]}),a.jsxs("g",{"data-spirit-id":"burst-bubbles",children:[a.jsx("circle",{"data-spirit-id":"burst-bubble-3",fill:"#36EA96",cx:"455.5",cy:"215.5",r:"9"}),a.jsx("circle",{"data-spirit-id":"burst-bubble-2",fill:"#5BD0FB",cx:"394.5",cy:"206.5",r:"6"}),a.jsx("circle",{"data-spirit-id":"burst-bubble-1",fill:"#5BD0FB",cx:"394.5",cy:"266.5",r:"6"})]})]}),a.jsx("text",{ref:e,x:"535",y:"250",fontSize:"24",fontWeight:"bold",fill:"white",textAnchor:"middle",style:{pointerEvents:"none",userSelect:"none",filter:"drop-shadow(2px 2px 4px rgba(0,0,0,0.8))"},children:"Say Hi!"})]})]})};function M2(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Tz(t,e,i){return e&&M2(t.prototype,e),i&&M2(t,i),t}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var zt,ph,Mi,Jr,eo,Oa,N3,Ko,Dc,O3,gr,xn,$3,B3=function(){return zt||typeof window<"u"&&(zt=window.gsap)&&zt.registerPlugin&&zt},V3=1,Ca=[],ae=[],Yn=[],_c=Date.now,Yg=function(e,i){return i},Ez=function(){var e=Dc.core,i=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,ae),r.push.apply(r,Yn),ae=n,Yn=r,Yg=function(s,l){return i[s](l)}},wo=function(e,i){return~Yn.indexOf(e)&&Yn[Yn.indexOf(e)+1][i]},Cc=function(e){return!!~O3.indexOf(e)},Jt=function(e,i,n,r,o){return e.addEventListener(i,n,{passive:r!==!1,capture:!!o})},Kt=function(e,i,n,r){return e.removeEventListener(i,n,!!r)},nu="scrollLeft",ru="scrollTop",Gg=function(){return gr&&gr.isPressed||ae.cache++},fp=function(e,i){var n=function r(o){if(o||o===0){V3&&(Mi.history.scrollRestoration="manual");var s=gr&&gr.isPressed;o=r.v=Math.round(o)||(gr&&gr.iOS?1:0),e(o),r.cacheID=ae.cache,s&&Yg("ss",o)}else(i||ae.cache!==r.cacheID||Yg("ref"))&&(r.cacheID=ae.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},si={s:nu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:fp(function(t){return arguments.length?Mi.scrollTo(t,wt.sc()):Mi.pageXOffset||Jr[nu]||eo[nu]||Oa[nu]||0})},wt={s:ru,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:si,sc:fp(function(t){return arguments.length?Mi.scrollTo(si.sc(),t):Mi.pageYOffset||Jr[ru]||eo[ru]||Oa[ru]||0})},hi=function(e,i){return(i&&i._ctx&&i._ctx.selector||zt.utils.toArray)(e)[0]||(typeof e=="string"&&zt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Iz=function(e,i){for(var n=i.length;n--;)if(i[n]===e||i[n].contains(e))return!0;return!1},Do=function(e,i){var n=i.s,r=i.sc;Cc(e)&&(e=Jr.scrollingElement||eo);var o=ae.indexOf(e),s=r===wt.sc?1:2;!~o&&(o=ae.push(e)-1),ae[o+s]||Jt(e,"scroll",Gg);var l=ae[o+s],c=l||(ae[o+s]=fp(wo(e,n),!0)||(Cc(e)?r:fp(function(d){return arguments.length?e[n]=d:e[n]})));return c.target=e,l||(c.smooth=zt.getProperty(e,"scrollBehavior")==="smooth"),c},Xg=function(e,i,n){var r=e,o=e,s=_c(),l=s,c=i||50,d=Math.max(500,c*3),u=function(y,w){var D=_c();w||D-s>c?(o=r,r=y,l=s,s=D):n?r+=y:r=o+(y-o)/(D-l)*(s-l)},p=function(){o=r=n?0:r,l=s=0},f=function(y){var w=l,D=o,j=_c();return(y||y===0)&&y!==r&&u(y),s===l||j-l>d?0:(r+(n?D:-D))/((n?j:s)-w)*1e3};return{update:u,reset:p,getVelocity:f}},Ll=function(e,i){return i&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},z2=function(e){var i=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(i)>=Math.abs(n)?i:n},W3=function(){Dc=zt.core.globals().ScrollTrigger,Dc&&Dc.core&&Ez()},U3=function(e){return zt=e||B3(),!ph&&zt&&typeof document<"u"&&document.body&&(Mi=window,Jr=document,eo=Jr.documentElement,Oa=Jr.body,O3=[Mi,Jr,eo,Oa],zt.utils.clamp,$3=zt.core.context||function(){},Ko="onpointerenter"in Oa?"pointer":"mouse",N3=nt.isTouch=Mi.matchMedia&&Mi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Mi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,xn=nt.eventTypes=("ontouchstart"in eo?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in eo?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return V3=0},500),W3(),ph=1),ph};si.op=wt;ae.cache=0;var nt=function(){function t(i){this.init(i)}var e=t.prototype;return e.init=function(n){ph||U3(zt)||console.warn("Please gsap.registerPlugin(Observer)"),Dc||W3();var r=n.tolerance,o=n.dragMinimum,s=n.type,l=n.target,c=n.lineHeight,d=n.debounce,u=n.preventDefault,p=n.onStop,f=n.onStopDelay,g=n.ignore,y=n.wheelSpeed,w=n.event,D=n.onDragStart,j=n.onDragEnd,b=n.onDrag,v=n.onPress,h=n.onRelease,x=n.onRight,k=n.onLeft,S=n.onUp,_=n.onDown,C=n.onChangeX,E=n.onChangeY,z=n.onChange,A=n.onToggleX,L=n.onToggleY,N=n.onHover,W=n.onHoverEnd,V=n.onMove,$=n.ignoreCheck,I=n.isNormalizer,M=n.onGestureStart,P=n.onGestureEnd,R=n.onWheel,U=n.onEnable,ne=n.onDisable,Z=n.onClick,fe=n.scrollSpeed,ue=n.capture,me=n.allowClicks,Le=n.lockAxis,je=n.onLockAxis;this.target=l=hi(l)||eo,this.vars=n,g&&(g=zt.utils.toArray(g)),r=r||1e-9,o=o||0,y=y||1,fe=fe||1,s=s||"wheel,touch,pointer",d=d!==!1,c||(c=parseFloat(Mi.getComputedStyle(Oa).lineHeight)||22);var Tt,Se,Me,ge,Qe,di,Si,F=this,Di=0,Xn=0,Tr=n.passive||!u&&n.passive!==!1,He=Do(l,si),Zn=Do(l,wt),Er=He(),Mo=Zn(),yt=~s.indexOf("touch")&&!~s.indexOf("pointer")&&xn[0]==="pointerdown",Ir=Cc(l),Ke=l.ownerDocument||Jr,dn=[0,0,0],Ui=[0,0,0],qn=0,wl=function(){return qn=_c()},ot=function(Q,we){return(F.event=Q)&&g&&Iz(Q.target,g)||we&&yt&&Q.pointerType!=="touch"||$&&$(Q,we)},Cd=function(){F._vx.reset(),F._vy.reset(),Se.pause(),p&&p(F)},Qn=function(){var Q=F.deltaX=z2(dn),we=F.deltaY=z2(Ui),H=Math.abs(Q)>=r,ee=Math.abs(we)>=r;z&&(H||ee)&&z(F,Q,we,dn,Ui),H&&(x&&F.deltaX>0&&x(F),k&&F.deltaX<0&&k(F),C&&C(F),A&&F.deltaX<0!=Di<0&&A(F),Di=F.deltaX,dn[0]=dn[1]=dn[2]=0),ee&&(_&&F.deltaY>0&&_(F),S&&F.deltaY<0&&S(F),E&&E(F),L&&F.deltaY<0!=Xn<0&&L(F),Xn=F.deltaY,Ui[0]=Ui[1]=Ui[2]=0),(ge||Me)&&(V&&V(F),Me&&(D&&Me===1&&D(F),b&&b(F),Me=0),ge=!1),di&&!(di=!1)&&je&&je(F),Qe&&(R(F),Qe=!1),Tt=0},Vs=function(Q,we,H){dn[H]+=Q,Ui[H]+=we,F._vx.update(Q),F._vy.update(we),d?Tt||(Tt=requestAnimationFrame(Qn)):Qn()},Ws=function(Q,we){Le&&!Si&&(F.axis=Si=Math.abs(Q)>Math.abs(we)?"x":"y",di=!0),Si!=="y"&&(dn[2]+=Q,F._vx.update(Q,!0)),Si!=="x"&&(Ui[2]+=we,F._vy.update(we,!0)),d?Tt||(Tt=requestAnimationFrame(Qn)):Qn()},Ar=function(Q){if(!ot(Q,1)){Q=Ll(Q,u);var we=Q.clientX,H=Q.clientY,ee=we-F.x,X=H-F.y,te=F.isDragging;F.x=we,F.y=H,(te||(ee||X)&&(Math.abs(F.startX-we)>=o||Math.abs(F.startY-H)>=o))&&(Me=te?2:1,te||(F.isDragging=!0),Ws(ee,X))}},zo=F.onPress=function(ie){ot(ie,1)||ie&&ie.button||(F.axis=Si=null,Se.pause(),F.isPressed=!0,ie=Ll(ie),Di=Xn=0,F.startX=F.x=ie.clientX,F.startY=F.y=ie.clientY,F._vx.reset(),F._vy.reset(),Jt(I?l:Ke,xn[1],Ar,Tr,!0),F.deltaX=F.deltaY=0,v&&v(F))},ce=F.onRelease=function(ie){if(!ot(ie,1)){Kt(I?l:Ke,xn[1],Ar,!0);var Q=!isNaN(F.y-F.startY),we=F.isDragging,H=we&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),ee=Ll(ie);!H&&Q&&(F._vx.reset(),F._vy.reset(),u&&me&&zt.delayedCall(.08,function(){if(_c()-qn>300&&!ie.defaultPrevented){if(ie.target.click)ie.target.click();else if(Ke.createEvent){var X=Ke.createEvent("MouseEvents");X.initMouseEvent("click",!0,!0,Mi,1,ee.screenX,ee.screenY,ee.clientX,ee.clientY,!1,!1,!1,!1,0,null),ie.target.dispatchEvent(X)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,p&&we&&!I&&Se.restart(!0),Me&&Qn(),j&&we&&j(F),h&&h(F,H)}},Fo=function(Q){return Q.touches&&Q.touches.length>1&&(F.isGesturing=!0)&&M(Q,F.isDragging)},un=function(){return(F.isGesturing=!1)||P(F)},hn=function(Q){if(!ot(Q)){var we=He(),H=Zn();Vs((we-Er)*fe,(H-Mo)*fe,1),Er=we,Mo=H,p&&Se.restart(!0)}},pn=function(Q){if(!ot(Q)){Q=Ll(Q,u),R&&(Qe=!0);var we=(Q.deltaMode===1?c:Q.deltaMode===2?Mi.innerHeight:1)*y;Vs(Q.deltaX*we,Q.deltaY*we,0),p&&!I&&Se.restart(!0)}},Ro=function(Q){if(!ot(Q)){var we=Q.clientX,H=Q.clientY,ee=we-F.x,X=H-F.y;F.x=we,F.y=H,ge=!0,p&&Se.restart(!0),(ee||X)&&Ws(ee,X)}},Us=function(Q){F.event=Q,N(F)},Kn=function(Q){F.event=Q,W(F)},vl=function(Q){return ot(Q)||Ll(Q,u)&&Z(F)};Se=F._dc=zt.delayedCall(f||.25,Cd).pause(),F.deltaX=F.deltaY=0,F._vx=Xg(0,50,!0),F._vy=Xg(0,50,!0),F.scrollX=He,F.scrollY=Zn,F.isDragging=F.isGesturing=F.isPressed=!1,$3(this),F.enable=function(ie){return F.isEnabled||(Jt(Ir?Ke:l,"scroll",Gg),s.indexOf("scroll")>=0&&Jt(Ir?Ke:l,"scroll",hn,Tr,ue),s.indexOf("wheel")>=0&&Jt(l,"wheel",pn,Tr,ue),(s.indexOf("touch")>=0&&N3||s.indexOf("pointer")>=0)&&(Jt(l,xn[0],zo,Tr,ue),Jt(Ke,xn[2],ce),Jt(Ke,xn[3],ce),me&&Jt(l,"click",wl,!0,!0),Z&&Jt(l,"click",vl),M&&Jt(Ke,"gesturestart",Fo),P&&Jt(Ke,"gestureend",un),N&&Jt(l,Ko+"enter",Us),W&&Jt(l,Ko+"leave",Kn),V&&Jt(l,Ko+"move",Ro)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=ge=Me=!1,F._vx.reset(),F._vy.reset(),Er=He(),Mo=Zn(),ie&&ie.type&&zo(ie),U&&U(F)),F},F.disable=function(){F.isEnabled&&(Ca.filter(function(ie){return ie!==F&&Cc(ie.target)}).length||Kt(Ir?Ke:l,"scroll",Gg),F.isPressed&&(F._vx.reset(),F._vy.reset(),Kt(I?l:Ke,xn[1],Ar,!0)),Kt(Ir?Ke:l,"scroll",hn,ue),Kt(l,"wheel",pn,ue),Kt(l,xn[0],zo,ue),Kt(Ke,xn[2],ce),Kt(Ke,xn[3],ce),Kt(l,"click",wl,!0),Kt(l,"click",vl),Kt(Ke,"gesturestart",Fo),Kt(Ke,"gestureend",un),Kt(l,Ko+"enter",Us),Kt(l,Ko+"leave",Kn),Kt(l,Ko+"move",Ro),F.isEnabled=F.isPressed=F.isDragging=!1,ne&&ne(F))},F.kill=F.revert=function(){F.disable();var ie=Ca.indexOf(F);ie>=0&&Ca.splice(ie,1),gr===F&&(gr=0)},Ca.push(F),I&&Cc(l)&&(gr=F),F.enable(w)},Tz(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();nt.version="3.13.0";nt.create=function(t){return new nt(t)};nt.register=U3;nt.getAll=function(){return Ca.slice()};nt.getById=function(t){return Ca.filter(function(e){return e.vars.id===t})[0]};B3()&&zt.registerPlugin(nt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var G,oa,se,Pe,Ii,be,nw,mp,dd,Pc,Kl,ou,Wt,of,Zg,ni,F2,R2,sa,H3,h0,Y3,ti,qg,G3,X3,Br,Qg,rw,$a,ow,gp,Kg,p0,su=1,Ut=Date.now,f0=Ut(),sn=0,Jl=0,L2=function(e,i,n){var r=Ti(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+i+"Clamp"]=r,r?e.substr(6,e.length-7):e},N2=function(e,i){return i&&(!Ti(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Az=function t(){return Jl&&requestAnimationFrame(t)},O2=function(){return of=1},$2=function(){return of=0},Rn=function(e){return e},ec=function(e){return Math.round(e*1e5)/1e5||0},Z3=function(){return typeof window<"u"},q3=function(){return G||Z3()&&(G=window.gsap)&&G.registerPlugin&&G},Ts=function(e){return!!~nw.indexOf(e)},Q3=function(e){return(e==="Height"?ow:se["inner"+e])||Ii["client"+e]||be["client"+e]},K3=function(e){return wo(e,"getBoundingClientRect")||(Ts(e)?function(){return wh.width=se.innerWidth,wh.height=ow,wh}:function(){return hr(e)})},Mz=function(e,i,n){var r=n.d,o=n.d2,s=n.a;return(s=wo(e,"getBoundingClientRect"))?function(){return s()[r]}:function(){return(i?Q3(o):e["client"+o])||0}},zz=function(e,i){return!i||~Yn.indexOf(e)?K3(e):function(){return wh}},Vn=function(e,i){var n=i.s,r=i.d2,o=i.d,s=i.a;return Math.max(0,(n="scroll"+r)&&(s=wo(e,n))?s()-K3(e)()[o]:Ts(e)?(Ii[n]||be[n])-Q3(r):e[n]-e["offset"+r])},au=function(e,i){for(var n=0;n<sa.length;n+=3)(!i||~i.indexOf(sa[n+1]))&&e(sa[n],sa[n+1],sa[n+2])},Ti=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},tc=function(e){return typeof e=="number"},Jo=function(e){return typeof e=="object"},Nl=function(e,i,n){return e&&e.progress(i?0:1)&&n&&e.pause()},m0=function(e,i){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return i(e)}):i(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Zs=Math.abs,J3="left",e4="top",sw="right",aw="bottom",ws="width",vs="height",Tc="Right",Ec="Left",Ic="Top",Ac="Bottom",lt="padding",Ki="margin",dl="Width",lw="Height",mt="px",Ji=function(e){return se.getComputedStyle(e)},Fz=function(e){var i=Ji(e).position;e.style.position=i==="absolute"||i==="fixed"?i:"relative"},B2=function(e,i){for(var n in i)n in e||(e[n]=i[n]);return e},hr=function(e,i){var n=i&&Ji(e)[Zg]!=="matrix(1, 0, 0, 1, 0, 0)"&&G.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},xp=function(e,i){var n=i.d2;return e["offset"+n]||e["client"+n]||0},t4=function(e){var i=[],n=e.labels,r=e.duration(),o;for(o in n)i.push(n[o]/r);return i},Rz=function(e){return function(i){return G.utils.snap(t4(e),i)}},cw=function(e){var i=G.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,o){return r-o});return n?function(r,o,s){s===void 0&&(s=.001);var l;if(!o)return i(r);if(o>0){for(r-=s,l=0;l<n.length;l++)if(n[l]>=r)return n[l];return n[l-1]}else for(l=n.length,r+=s;l--;)if(n[l]<=r)return n[l];return n[0]}:function(r,o,s){s===void 0&&(s=.001);var l=i(r);return!o||Math.abs(l-r)<s||l-r<0==o<0?l:i(o<0?r-e:r+e)}},Lz=function(e){return function(i,n){return cw(t4(e))(i,n.direction)}},lu=function(e,i,n,r){return n.split(",").forEach(function(o){return e(i,o,r)})},jt=function(e,i,n,r,o){return e.addEventListener(i,n,{passive:!r,capture:!!o})},kt=function(e,i,n,r){return e.removeEventListener(i,n,!!r)},cu=function(e,i,n){n=n&&n.wheelHandler,n&&(e(i,"wheel",n),e(i,"touchmove",n))},V2={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},du={toggleActions:"play",anticipatePin:0},wp={top:0,left:0,center:.5,bottom:1,right:1},fh=function(e,i){if(Ti(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=i/100),e=e.substr(0,n-1)),e=r+(e in wp?wp[e]*i:~e.indexOf("%")?parseFloat(e)*i/100:parseFloat(e)||0)}return e},uu=function(e,i,n,r,o,s,l,c){var d=o.startColor,u=o.endColor,p=o.fontSize,f=o.indent,g=o.fontWeight,y=Pe.createElement("div"),w=Ts(n)||wo(n,"pinType")==="fixed",D=e.indexOf("scroller")!==-1,j=w?be:n,b=e.indexOf("start")!==-1,v=b?d:u,h="border-color:"+v+";font-size:"+p+";color:"+v+";font-weight:"+g+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return h+="position:"+((D||c)&&w?"fixed;":"absolute;"),(D||c||!w)&&(h+=(r===wt?sw:aw)+":"+(s+parseFloat(f))+"px;"),l&&(h+="box-sizing:border-box;text-align:left;width:"+l.offsetWidth+"px;"),y._isStart=b,y.setAttribute("class","gsap-marker-"+e+(i?" marker-"+i:"")),y.style.cssText=h,y.innerText=i||i===0?e+"-"+i:e,j.children[0]?j.insertBefore(y,j.children[0]):j.appendChild(y),y._offset=y["offset"+r.op.d2],mh(y,0,r,b),y},mh=function(e,i,n,r){var o={display:"block"},s=n[r?"os2":"p2"],l=n[r?"p2":"os2"];e._isFlipped=r,o[n.a+"Percent"]=r?-100:0,o[n.a]=r?"1px":0,o["border"+s+dl]=1,o["border"+l+dl]=0,o[n.p]=i+"px",G.set(e,o)},oe=[],Jg={},ud,W2=function(){return Ut()-sn>34&&(ud||(ud=requestAnimationFrame(yr)))},qs=function(){(!ti||!ti.isPressed||ti.startX>be.clientWidth)&&(ae.cache++,ti?ud||(ud=requestAnimationFrame(yr)):yr(),sn||Is("scrollStart"),sn=Ut())},g0=function(){X3=se.innerWidth,G3=se.innerHeight},ic=function(e){ae.cache++,(e===!0||!Wt&&!Y3&&!Pe.fullscreenElement&&!Pe.webkitFullscreenElement&&(!qg||X3!==se.innerWidth||Math.abs(se.innerHeight-G3)>se.innerHeight*.25))&&mp.restart(!0)},Es={},Nz=[],i4=function t(){return kt(le,"scrollEnd",t)||ls(!0)},Is=function(e){return Es[e]&&Es[e].map(function(i){return i()})||Nz},Ci=[],n4=function(e){for(var i=0;i<Ci.length;i+=5)(!e||Ci[i+4]&&Ci[i+4].query===e)&&(Ci[i].style.cssText=Ci[i+1],Ci[i].getBBox&&Ci[i].setAttribute("transform",Ci[i+2]||""),Ci[i+3].uncache=1)},dw=function(e,i){var n;for(ni=0;ni<oe.length;ni++)n=oe[ni],n&&(!i||n._ctx===i)&&(e?n.kill(1):n.revert(!0,!0));gp=!0,i&&n4(i),i||Is("revert")},r4=function(e,i){ae.cache++,(i||!ri)&&ae.forEach(function(n){return Gt(n)&&n.cacheID++&&(n.rec=0)}),Ti(e)&&(se.history.scrollRestoration=rw=e)},ri,ys=0,U2,Oz=function(){if(U2!==ys){var e=U2=ys;requestAnimationFrame(function(){return e===ys&&ls(!0)})}},o4=function(){be.appendChild($a),ow=!ti&&$a.offsetHeight||se.innerHeight,be.removeChild($a)},H2=function(e){return dd(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i){return i.style.display=e?"none":"block"})},ls=function(e,i){if(Ii=Pe.documentElement,be=Pe.body,nw=[se,Pe,Ii,be],sn&&!e&&!gp){jt(le,"scrollEnd",i4);return}o4(),ri=le.isRefreshing=!0,ae.forEach(function(r){return Gt(r)&&++r.cacheID&&(r.rec=r())});var n=Is("refreshInit");H3&&le.sort(),i||dw(),ae.forEach(function(r){Gt(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),oe.slice(0).forEach(function(r){return r.refresh()}),gp=!1,oe.forEach(function(r){if(r._subPinOffset&&r.pin){var o=r.vars.horizontal?"offsetWidth":"offsetHeight",s=r.pin[o];r.revert(!0,1),r.adjustPinSpacing(r.pin[o]-s),r.refresh()}}),Kg=1,H2(!0),oe.forEach(function(r){var o=Vn(r.scroller,r._dir),s=r.vars.end==="max"||r._endClamp&&r.end>o,l=r._startClamp&&r.start>=o;(s||l)&&r.setPositions(l?o-1:r.start,s?Math.max(l?o:r.start+1,o):r.end,!0)}),H2(!1),Kg=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),ae.forEach(function(r){Gt(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),r4(rw,1),mp.pause(),ys++,ri=2,yr(2),oe.forEach(function(r){return Gt(r.vars.onRefresh)&&r.vars.onRefresh(r)}),ri=le.isRefreshing=!1,Is("refresh")},ex=0,gh=1,Mc,yr=function(e){if(e===2||!ri&&!gp){le.isUpdating=!0,Mc&&Mc.update(0);var i=oe.length,n=Ut(),r=n-f0>=50,o=i&&oe[0].scroll();if(gh=ex>o?-1:1,ri||(ex=o),r&&(sn&&!of&&n-sn>200&&(sn=0,Is("scrollEnd")),Kl=f0,f0=n),gh<0){for(ni=i;ni-- >0;)oe[ni]&&oe[ni].update(0,r);gh=1}else for(ni=0;ni<i;ni++)oe[ni]&&oe[ni].update(0,r);le.isUpdating=!1}ud=0},tx=[J3,e4,aw,sw,Ki+Ac,Ki+Tc,Ki+Ic,Ki+Ec,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],xh=tx.concat([ws,vs,"boxSizing","max"+dl,"max"+lw,"position",Ki,lt,lt+Ic,lt+Tc,lt+Ac,lt+Ec]),$z=function(e,i,n){Ba(n);var r=e._gsap;if(r.spacerIsNative)Ba(r.spacerState);else if(e._gsap.swappedIn){var o=i.parentNode;o&&(o.insertBefore(e,i),o.removeChild(i))}e._gsap.swappedIn=!1},x0=function(e,i,n,r){if(!e._gsap.swappedIn){for(var o=tx.length,s=i.style,l=e.style,c;o--;)c=tx[o],s[c]=n[c];s.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(s.display="inline-block"),l[aw]=l[sw]="auto",s.flexBasis=n.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[ws]=xp(e,si)+mt,s[vs]=xp(e,wt)+mt,s[lt]=l[Ki]=l[e4]=l[J3]="0",Ba(r),l[ws]=l["max"+dl]=n[ws],l[vs]=l["max"+lw]=n[vs],l[lt]=n[lt],e.parentNode!==i&&(e.parentNode.insertBefore(i,e),i.appendChild(e)),e._gsap.swappedIn=!0}},Bz=/([A-Z])/g,Ba=function(e){if(e){var i=e.t.style,n=e.length,r=0,o,s;for((e.t._gsap||G.core.getCache(e.t)).uncache=1;r<n;r+=2)s=e[r+1],o=e[r],s?i[o]=s:i[o]&&i.removeProperty(o.replace(Bz,"-$1").toLowerCase())}},hu=function(e){for(var i=xh.length,n=e.style,r=[],o=0;o<i;o++)r.push(xh[o],n[xh[o]]);return r.t=e,r},Vz=function(e,i,n){for(var r=[],o=e.length,s=n?8:0,l;s<o;s+=2)l=e[s],r.push(l,l in i?i[l]:e[s+1]);return r.t=e.t,r},wh={left:0,top:0},Y2=function(e,i,n,r,o,s,l,c,d,u,p,f,g,y){Gt(e)&&(e=e(c)),Ti(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?fh("0"+e.substr(3),n):0));var w=g?g.time():0,D,j,b;if(g&&g.seek(0),isNaN(e)||(e=+e),tc(e))g&&(e=G.utils.mapRange(g.scrollTrigger.start,g.scrollTrigger.end,0,f,e)),l&&mh(l,n,r,!0);else{Gt(i)&&(i=i(c));var v=(e||"0").split(" "),h,x,k,S;b=hi(i,c)||be,h=hr(b)||{},(!h||!h.left&&!h.top)&&Ji(b).display==="none"&&(S=b.style.display,b.style.display="block",h=hr(b),S?b.style.display=S:b.style.removeProperty("display")),x=fh(v[0],h[r.d]),k=fh(v[1]||"0",n),e=h[r.p]-d[r.p]-u+x+o-k,l&&mh(l,k,r,n-k<20||l._isStart&&k>20),n-=n-k}if(y&&(c[y]=e||-.001,e<0&&(e=0)),s){var _=e+n,C=s._isStart;D="scroll"+r.d2,mh(s,_,r,C&&_>20||!C&&(p?Math.max(be[D],Ii[D]):s.parentNode[D])<=_+1),p&&(d=hr(l),p&&(s.style[r.op.p]=d[r.op.p]-r.op.m-s._offset+mt))}return g&&b&&(D=hr(b),g.seek(f),j=hr(b),g._caScrollDist=D[r.p]-j[r.p],e=e/g._caScrollDist*f),g&&g.seek(w),g?e:Math.round(e)},Wz=/(webkit|moz|length|cssText|inset)/i,G2=function(e,i,n,r){if(e.parentNode!==i){var o=e.style,s,l;if(i===be){e._stOrig=o.cssText,l=Ji(e);for(s in l)!+s&&!Wz.test(s)&&l[s]&&typeof o[s]=="string"&&s!=="0"&&(o[s]=l[s]);o.top=n,o.left=r}else o.cssText=e._stOrig;G.core.getCache(e).uncache=1,i.appendChild(e)}},s4=function(e,i,n){var r=i,o=r;return function(s){var l=Math.round(e());return l!==r&&l!==o&&Math.abs(l-r)>3&&Math.abs(l-o)>3&&(s=l,n&&n()),o=r,r=Math.round(s),r}},pu=function(e,i,n){var r={};r[i.p]="+="+n,G.set(e,r)},X2=function(e,i){var n=Do(e,i),r="_scroll"+i.p2,o=function s(l,c,d,u,p){var f=s.tween,g=c.onComplete,y={};d=d||n();var w=s4(n,d,function(){f.kill(),s.tween=0});return p=u&&p||0,u=u||l-d,f&&f.kill(),c[r]=l,c.inherit=!1,c.modifiers=y,y[r]=function(){return w(d+u*f.ratio+p*f.ratio*f.ratio)},c.onUpdate=function(){ae.cache++,s.tween&&yr()},c.onComplete=function(){s.tween=0,g&&g.call(f)},f=s.tween=G.to(e,c),f};return e[r]=n,n.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},jt(e,"wheel",n.wheelHandler),le.isTouch&&jt(e,"touchmove",n.wheelHandler),o},le=function(){function t(i,n){oa||t.register(G)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Qg(this),this.init(i,n)}var e=t.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Jl){this.update=this.refresh=this.kill=Rn;return}n=B2(Ti(n)||tc(n)||n.nodeType?{trigger:n}:n,du);var o=n,s=o.onUpdate,l=o.toggleClass,c=o.id,d=o.onToggle,u=o.onRefresh,p=o.scrub,f=o.trigger,g=o.pin,y=o.pinSpacing,w=o.invalidateOnRefresh,D=o.anticipatePin,j=o.onScrubComplete,b=o.onSnapComplete,v=o.once,h=o.snap,x=o.pinReparent,k=o.pinSpacer,S=o.containerAnimation,_=o.fastScrollEnd,C=o.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?si:wt,z=!p&&p!==0,A=hi(n.scroller||se),L=G.core.getCache(A),N=Ts(A),W=("pinType"in n?n.pinType:wo(A,"pinType")||N&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=z&&n.toggleActions.split(" "),I="markers"in n?n.markers:du.markers,M=N?0:parseFloat(Ji(A)["border"+E.p2+dl])||0,P=this,R=n.onRefreshInit&&function(){return n.onRefreshInit(P)},U=Mz(A,N,E),ne=zz(A,N),Z=0,fe=0,ue=0,me=Do(A,E),Le,je,Tt,Se,Me,ge,Qe,di,Si,F,Di,Xn,Tr,He,Zn,Er,Mo,yt,Ir,Ke,dn,Ui,qn,wl,ot,Cd,Qn,Vs,Ws,Ar,zo,ce,Fo,un,hn,pn,Ro,Us,Kn;if(P._startClamp=P._endClamp=!1,P._dir=E,D*=45,P.scroller=A,P.scroll=S?S.time.bind(S):me,Se=me(),P.vars=n,r=r||n.animation,"refreshPriority"in n&&(H3=1,n.refreshPriority===-9999&&(Mc=P)),L.tweenScroll=L.tweenScroll||{top:X2(A,wt),left:X2(A,si)},P.tweenTo=Le=L.tweenScroll[E.p],P.scrubDuration=function(H){Fo=tc(H)&&H,Fo?ce?ce.duration(H):ce=G.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Fo,paused:!0,onComplete:function(){return j&&j(P)}}):(ce&&ce.progress(1).kill(),ce=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(p),Ar=0,c||(c=r.vars.id)),h&&((!Jo(h)||h.push)&&(h={snapTo:h}),"scrollBehavior"in be.style&&G.set(N?[be,Ii]:A,{scrollBehavior:"auto"}),ae.forEach(function(H){return Gt(H)&&H.target===(N?Pe.scrollingElement||Ii:A)&&(H.smooth=!1)}),Tt=Gt(h.snapTo)?h.snapTo:h.snapTo==="labels"?Rz(r):h.snapTo==="labelsDirectional"?Lz(r):h.directional!==!1?function(H,ee){return cw(h.snapTo)(H,Ut()-fe<500?0:ee.direction)}:G.utils.snap(h.snapTo),un=h.duration||{min:.1,max:2},un=Jo(un)?Pc(un.min,un.max):Pc(un,un),hn=G.delayedCall(h.delay||Fo/2||.1,function(){var H=me(),ee=Ut()-fe<500,X=Le.tween;if((ee||Math.abs(P.getVelocity())<10)&&!X&&!of&&Z!==H){var te=(H-ge)/He,bt=r&&!z?r.totalProgress():te,he=ee?0:(bt-zo)/(Ut()-Kl)*1e3||0,Je=G.utils.clamp(-te,1-te,Zs(he/2)*he/.185),Nt=te+(h.inertia===!1?0:Je),Ye,ze,De=h,fn=De.onStart,Ne=De.onInterrupt,_i=De.onComplete;if(Ye=Tt(Nt,P),tc(Ye)||(Ye=Nt),ze=Math.max(0,Math.round(ge+Ye*He)),H<=Qe&&H>=ge&&ze!==H){if(X&&!X._initted&&X.data<=Zs(ze-H))return;h.inertia===!1&&(Je=Ye-te),Le(ze,{duration:un(Zs(Math.max(Zs(Nt-bt),Zs(Ye-bt))*.185/he/.05||0)),ease:h.ease||"power3",data:Zs(ze-H),onInterrupt:function(){return hn.restart(!0)&&Ne&&Ne(P)},onComplete:function(){P.update(),Z=me(),r&&!z&&(ce?ce.resetTo("totalProgress",Ye,r._tTime/r._tDur):r.progress(Ye)),Ar=zo=r&&!z?r.totalProgress():P.progress,b&&b(P),_i&&_i(P)}},H,Je*He,ze-H-Je*He),fn&&fn(P,Le.tween)}}else P.isActive&&Z!==H&&hn.restart(!0)}).pause()),c&&(Jg[c]=P),f=P.trigger=hi(f||g!==!0&&g),Kn=f&&f._gsap&&f._gsap.stRevert,Kn&&(Kn=Kn(P)),g=g===!0?f:hi(g),Ti(l)&&(l={targets:f,className:l}),g&&(y===!1||y===Ki||(y=!y&&g.parentNode&&g.parentNode.style&&Ji(g.parentNode).display==="flex"?!1:lt),P.pin=g,je=G.core.getCache(g),je.spacer?Zn=je.pinState:(k&&(k=hi(k),k&&!k.nodeType&&(k=k.current||k.nativeElement),je.spacerIsNative=!!k,k&&(je.spacerState=hu(k))),je.spacer=yt=k||Pe.createElement("div"),yt.classList.add("pin-spacer"),c&&yt.classList.add("pin-spacer-"+c),je.pinState=Zn=hu(g)),n.force3D!==!1&&G.set(g,{force3D:!0}),P.spacer=yt=je.spacer,Ws=Ji(g),wl=Ws[y+E.os2],Ke=G.getProperty(g),dn=G.quickSetter(g,E.a,mt),x0(g,yt,Ws),Mo=hu(g)),I){Xn=Jo(I)?B2(I,V2):V2,F=uu("scroller-start",c,A,E,Xn,0),Di=uu("scroller-end",c,A,E,Xn,0,F),Ir=F["offset"+E.op.d2];var vl=hi(wo(A,"content")||A);di=this.markerStart=uu("start",c,vl,E,Xn,Ir,0,S),Si=this.markerEnd=uu("end",c,vl,E,Xn,Ir,0,S),S&&(Us=G.quickSetter([di,Si],E.a,mt)),!W&&!(Yn.length&&wo(A,"fixedMarkers")===!0)&&(Fz(N?be:A),G.set([F,Di],{force3D:!0}),Cd=G.quickSetter(F,E.a,mt),Vs=G.quickSetter(Di,E.a,mt))}if(S){var ie=S.vars.onUpdate,Q=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){P.update(0,0,1),ie&&ie.apply(S,Q||[])})}if(P.previous=function(){return oe[oe.indexOf(P)-1]},P.next=function(){return oe[oe.indexOf(P)+1]},P.revert=function(H,ee){if(!ee)return P.kill(!0);var X=H!==!1||!P.enabled,te=Wt;X!==P.isReverted&&(X&&(pn=Math.max(me(),P.scroll.rec||0),ue=P.progress,Ro=r&&r.progress()),di&&[di,Si,F,Di].forEach(function(bt){return bt.style.display=X?"none":"block"}),X&&(Wt=P,P.update(X)),g&&(!x||!P.isActive)&&(X?$z(g,yt,Zn):x0(g,yt,Ji(g),ot)),X||P.update(X),Wt=te,P.isReverted=X)},P.refresh=function(H,ee,X,te){if(!((Wt||!P.enabled)&&!ee)){if(g&&H&&sn){jt(t,"scrollEnd",i4);return}!ri&&R&&R(P),Wt=P,Le.tween&&!X&&(Le.tween.kill(),Le.tween=0),ce&&ce.pause(),w&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren&&r.getChildren(!0,!0,!1).forEach(function(Mr){return Mr.vars.immediateRender&&Mr.render(0,!0,!0)})),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var bt=U(),he=ne(),Je=S?S.duration():Vn(A,E),Nt=He<=.01||!He,Ye=0,ze=te||0,De=Jo(X)?X.end:n.end,fn=n.endTrigger||f,Ne=Jo(X)?X.start:n.start||(n.start===0||!f?0:g?"0 0":"0 100%"),_i=P.pinnedContainer=n.pinnedContainer&&hi(n.pinnedContainer,P),Tn=f&&Math.max(0,oe.indexOf(P))||0,Et=Tn,It,Ot,Lo,Pd,$t,ft,En,af,fw,yl,In,bl,Td;for(I&&Jo(X)&&(bl=G.getProperty(F,E.p),Td=G.getProperty(Di,E.p));Et-- >0;)ft=oe[Et],ft.end||ft.refresh(0,1)||(Wt=P),En=ft.pin,En&&(En===f||En===g||En===_i)&&!ft.isReverted&&(yl||(yl=[]),yl.unshift(ft),ft.revert(!0,!0)),ft!==oe[Et]&&(Tn--,Et--);for(Gt(Ne)&&(Ne=Ne(P)),Ne=L2(Ne,"start",P),ge=Y2(Ne,f,bt,E,me(),di,F,P,he,M,W,Je,S,P._startClamp&&"_startClamp")||(g?-.001:0),Gt(De)&&(De=De(P)),Ti(De)&&!De.indexOf("+=")&&(~De.indexOf(" ")?De=(Ti(Ne)?Ne.split(" ")[0]:"")+De:(Ye=fh(De.substr(2),bt),De=Ti(Ne)?Ne:(S?G.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,ge):ge)+Ye,fn=f)),De=L2(De,"end",P),Qe=Math.max(ge,Y2(De||(fn?"100% 0":Je),fn,bt,E,me()+Ye,Si,Di,P,he,M,W,Je,S,P._endClamp&&"_endClamp"))||-.001,Ye=0,Et=Tn;Et--;)ft=oe[Et],En=ft.pin,En&&ft.start-ft._pinPush<=ge&&!S&&ft.end>0&&(It=ft.end-(P._startClamp?Math.max(0,ft.start):ft.start),(En===f&&ft.start-ft._pinPush<ge||En===_i)&&isNaN(Ne)&&(Ye+=It*(1-ft.progress)),En===g&&(ze+=It));if(ge+=Ye,Qe+=Ye,P._startClamp&&(P._startClamp+=Ye),P._endClamp&&!ri&&(P._endClamp=Qe||-.001,Qe=Math.min(Qe,Vn(A,E))),He=Qe-ge||(ge-=.01)&&.001,Nt&&(ue=G.utils.clamp(0,1,G.utils.normalize(ge,Qe,pn))),P._pinPush=ze,di&&Ye&&(It={},It[E.a]="+="+Ye,_i&&(It[E.p]="-="+me()),G.set([di,Si],It)),g&&!(Kg&&P.end>=Vn(A,E)))It=Ji(g),Pd=E===wt,Lo=me(),Ui=parseFloat(Ke(E.a))+ze,!Je&&Qe>1&&(In=(N?Pe.scrollingElement||Ii:A).style,In={style:In,value:In["overflow"+E.a.toUpperCase()]},N&&Ji(be)["overflow"+E.a.toUpperCase()]!=="scroll"&&(In.style["overflow"+E.a.toUpperCase()]="scroll")),x0(g,yt,It),Mo=hu(g),Ot=hr(g,!0),af=W&&Do(A,Pd?si:wt)(),y?(ot=[y+E.os2,He+ze+mt],ot.t=yt,Et=y===lt?xp(g,E)+He+ze:0,Et&&(ot.push(E.d,Et+mt),yt.style.flexBasis!=="auto"&&(yt.style.flexBasis=Et+mt)),Ba(ot),_i&&oe.forEach(function(Mr){Mr.pin===_i&&Mr.vars.pinSpacing!==!1&&(Mr._subPinOffset=!0)}),W&&me(pn)):(Et=xp(g,E),Et&&yt.style.flexBasis!=="auto"&&(yt.style.flexBasis=Et+mt)),W&&($t={top:Ot.top+(Pd?Lo-ge:af)+mt,left:Ot.left+(Pd?af:Lo-ge)+mt,boxSizing:"border-box",position:"fixed"},$t[ws]=$t["max"+dl]=Math.ceil(Ot.width)+mt,$t[vs]=$t["max"+lw]=Math.ceil(Ot.height)+mt,$t[Ki]=$t[Ki+Ic]=$t[Ki+Tc]=$t[Ki+Ac]=$t[Ki+Ec]="0",$t[lt]=It[lt],$t[lt+Ic]=It[lt+Ic],$t[lt+Tc]=It[lt+Tc],$t[lt+Ac]=It[lt+Ac],$t[lt+Ec]=It[lt+Ec],Er=Vz(Zn,$t,x),ri&&me(0)),r?(fw=r._initted,h0(1),r.render(r.duration(),!0,!0),qn=Ke(E.a)-Ui+He+ze,Qn=Math.abs(He-qn)>1,W&&Qn&&Er.splice(Er.length-2,2),r.render(0,!0,!0),fw||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),h0(0)):qn=He,In&&(In.value?In.style["overflow"+E.a.toUpperCase()]=In.value:In.style.removeProperty("overflow-"+E.a));else if(f&&me()&&!S)for(Ot=f.parentNode;Ot&&Ot!==be;)Ot._pinOffset&&(ge-=Ot._pinOffset,Qe-=Ot._pinOffset),Ot=Ot.parentNode;yl&&yl.forEach(function(Mr){return Mr.revert(!1,!0)}),P.start=ge,P.end=Qe,Se=Me=ri?pn:me(),!S&&!ri&&(Se<pn&&me(pn),P.scroll.rec=0),P.revert(!1,!0),fe=Ut(),hn&&(Z=-1,hn.restart(!0)),Wt=0,r&&z&&(r._initted||Ro)&&r.progress()!==Ro&&r.progress(Ro||0,!0).render(r.time(),!0,!0),(Nt||ue!==P.progress||S||w||r&&!r._initted)&&(r&&!z&&(r._initted||ue||r.vars.immediateRender!==!1)&&r.totalProgress(S&&ge<-.001&&!ue?G.utils.normalize(ge,Qe,0):ue,!0),P.progress=Nt||(Se-ge)/He===ue?0:ue),g&&y&&(yt._pinOffset=Math.round(P.progress*qn)),ce&&ce.invalidate(),isNaN(bl)||(bl-=G.getProperty(F,E.p),Td-=G.getProperty(Di,E.p),pu(F,E,bl),pu(di,E,bl-(te||0)),pu(Di,E,Td),pu(Si,E,Td-(te||0))),Nt&&!ri&&P.update(),u&&!ri&&!Tr&&(Tr=!0,u(P),Tr=!1)}},P.getVelocity=function(){return(me()-Me)/(Ut()-Kl)*1e3||0},P.endAnimation=function(){Nl(P.callbackAnimation),r&&(ce?ce.progress(1):r.paused()?z||Nl(r,P.direction<0,1):Nl(r,r.reversed()))},P.labelToScroll=function(H){return r&&r.labels&&(ge||P.refresh()||ge)+r.labels[H]/r.duration()*He||0},P.getTrailing=function(H){var ee=oe.indexOf(P),X=P.direction>0?oe.slice(0,ee).reverse():oe.slice(ee+1);return(Ti(H)?X.filter(function(te){return te.vars.preventOverlaps===H}):X).filter(function(te){return P.direction>0?te.end<=ge:te.start>=Qe})},P.update=function(H,ee,X){if(!(S&&!X&&!H)){var te=ri===!0?pn:P.scroll(),bt=H?0:(te-ge)/He,he=bt<0?0:bt>1?1:bt||0,Je=P.progress,Nt,Ye,ze,De,fn,Ne,_i,Tn;if(ee&&(Me=Se,Se=S?me():te,h&&(zo=Ar,Ar=r&&!z?r.totalProgress():he)),D&&g&&!Wt&&!su&&sn&&(!he&&ge<te+(te-Me)/(Ut()-Kl)*D?he=1e-4:he===1&&Qe>te+(te-Me)/(Ut()-Kl)*D&&(he=.9999)),he!==Je&&P.enabled){if(Nt=P.isActive=!!he&&he<1,Ye=!!Je&&Je<1,Ne=Nt!==Ye,fn=Ne||!!he!=!!Je,P.direction=he>Je?1:-1,P.progress=he,fn&&!Wt&&(ze=he&&!Je?0:he===1?1:Je===1?2:3,z&&(De=!Ne&&$[ze+1]!=="none"&&$[ze+1]||$[ze],Tn=r&&(De==="complete"||De==="reset"||De in r))),C&&(Ne||Tn)&&(Tn||p||!r)&&(Gt(C)?C(P):P.getTrailing(C).forEach(function(Lo){return Lo.endAnimation()})),z||(ce&&!Wt&&!su?(ce._dp._time-ce._start!==ce._time&&ce.render(ce._dp._time-ce._start),ce.resetTo?ce.resetTo("totalProgress",he,r._tTime/r._tDur):(ce.vars.totalProgress=he,ce.invalidate().restart())):r&&r.totalProgress(he,!!(Wt&&(fe||H)))),g){if(H&&y&&(yt.style[y+E.os2]=wl),!W)dn(ec(Ui+qn*he));else if(fn){if(_i=!H&&he>Je&&Qe+1>te&&te+1>=Vn(A,E),x)if(!H&&(Nt||_i)){var Et=hr(g,!0),It=te-ge;G2(g,be,Et.top+(E===wt?It:0)+mt,Et.left+(E===wt?0:It)+mt)}else G2(g,yt);Ba(Nt||_i?Er:Mo),Qn&&he<1&&Nt||dn(Ui+(he===1&&!_i?qn:0))}}h&&!Le.tween&&!Wt&&!su&&hn.restart(!0),l&&(Ne||v&&he&&(he<1||!p0))&&dd(l.targets).forEach(function(Lo){return Lo.classList[Nt||v?"add":"remove"](l.className)}),s&&!z&&!H&&s(P),fn&&!Wt?(z&&(Tn&&(De==="complete"?r.pause().totalProgress(1):De==="reset"?r.restart(!0).pause():De==="restart"?r.restart(!0):r[De]()),s&&s(P)),(Ne||!p0)&&(d&&Ne&&m0(P,d),V[ze]&&m0(P,V[ze]),v&&(he===1?P.kill(!1,1):V[ze]=0),Ne||(ze=he===1?1:3,V[ze]&&m0(P,V[ze]))),_&&!Nt&&Math.abs(P.getVelocity())>(tc(_)?_:2500)&&(Nl(P.callbackAnimation),ce?ce.progress(1):Nl(r,De==="reverse"?1:!he,1))):z&&s&&!Wt&&s(P)}if(Vs){var Ot=S?te/S.duration()*(S._caScrollDist||0):te;Cd(Ot+(F._isFlipped?1:0)),Vs(Ot)}Us&&Us(-te/S.duration()*(S._caScrollDist||0))}},P.enable=function(H,ee){P.enabled||(P.enabled=!0,jt(A,"resize",ic),N||jt(A,"scroll",qs),R&&jt(t,"refreshInit",R),H!==!1&&(P.progress=ue=0,Se=Me=Z=me()),ee!==!1&&P.refresh())},P.getTween=function(H){return H&&Le?Le.tween:ce},P.setPositions=function(H,ee,X,te){if(S){var bt=S.scrollTrigger,he=S.duration(),Je=bt.end-bt.start;H=bt.start+Je*H/he,ee=bt.start+Je*ee/he}P.refresh(!1,!1,{start:N2(H,X&&!!P._startClamp),end:N2(ee,X&&!!P._endClamp)},te),P.update()},P.adjustPinSpacing=function(H){if(ot&&H){var ee=ot.indexOf(E.d)+1;ot[ee]=parseFloat(ot[ee])+H+mt,ot[1]=parseFloat(ot[1])+H+mt,Ba(ot)}},P.disable=function(H,ee){if(P.enabled&&(H!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,ee||ce&&ce.pause(),pn=0,je&&(je.uncache=1),R&&kt(t,"refreshInit",R),hn&&(hn.pause(),Le.tween&&Le.tween.kill()&&(Le.tween=0)),!N)){for(var X=oe.length;X--;)if(oe[X].scroller===A&&oe[X]!==P)return;kt(A,"resize",ic),N||kt(A,"scroll",qs)}},P.kill=function(H,ee){P.disable(H,ee),ce&&!ee&&ce.kill(),c&&delete Jg[c];var X=oe.indexOf(P);X>=0&&oe.splice(X,1),X===ni&&gh>0&&ni--,X=0,oe.forEach(function(te){return te.scroller===P.scroller&&(X=1)}),X||ri||(P.scroll.rec=0),r&&(r.scrollTrigger=null,H&&r.revert({kill:!1}),ee||r.kill()),di&&[di,Si,F,Di].forEach(function(te){return te.parentNode&&te.parentNode.removeChild(te)}),Mc===P&&(Mc=0),g&&(je&&(je.uncache=1),X=0,oe.forEach(function(te){return te.pin===g&&X++}),X||(je.spacer=0)),n.onKill&&n.onKill(P)},oe.push(P),P.enable(!1,!1),Kn&&Kn(P),r&&r.add&&!He){var we=P.update;P.update=function(){P.update=we,ae.cache++,ge||Qe||P.refresh()},G.delayedCall(.01,P.update),He=.01,ge=Qe=0}else P.refresh();g&&Oz()},t.register=function(n){return oa||(G=n||q3(),Z3()&&window.document&&t.enable(),oa=Jl),oa},t.defaults=function(n){if(n)for(var r in n)du[r]=n[r];return du},t.disable=function(n,r){Jl=0,oe.forEach(function(s){return s[r?"kill":"disable"](n)}),kt(se,"wheel",qs),kt(Pe,"scroll",qs),clearInterval(ou),kt(Pe,"touchcancel",Rn),kt(be,"touchstart",Rn),lu(kt,Pe,"pointerdown,touchstart,mousedown",O2),lu(kt,Pe,"pointerup,touchend,mouseup",$2),mp.kill(),au(kt);for(var o=0;o<ae.length;o+=3)cu(kt,ae[o],ae[o+1]),cu(kt,ae[o],ae[o+2])},t.enable=function(){if(se=window,Pe=document,Ii=Pe.documentElement,be=Pe.body,G&&(dd=G.utils.toArray,Pc=G.utils.clamp,Qg=G.core.context||Rn,h0=G.core.suppressOverwrites||Rn,rw=se.history.scrollRestoration||"auto",ex=se.pageYOffset||0,G.core.globals("ScrollTrigger",t),be)){Jl=1,$a=document.createElement("div"),$a.style.height="100vh",$a.style.position="absolute",o4(),Az(),nt.register(G),t.isTouch=nt.isTouch,Br=nt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),qg=nt.isTouch===1,jt(se,"wheel",qs),nw=[se,Pe,Ii,be],G.matchMedia?(t.matchMedia=function(d){var u=G.matchMedia(),p;for(p in d)u.add(p,d[p]);return u},G.addEventListener("matchMediaInit",function(){return dw()}),G.addEventListener("matchMediaRevert",function(){return n4()}),G.addEventListener("matchMedia",function(){ls(0,1),Is("matchMedia")}),G.matchMedia().add("(orientation: portrait)",function(){return g0(),g0})):console.warn("Requires GSAP 3.11.0 or later"),g0(),jt(Pe,"scroll",qs);var n=be.hasAttribute("style"),r=be.style,o=r.borderTopStyle,s=G.core.Animation.prototype,l,c;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",l=hr(be),wt.m=Math.round(l.top+wt.sc())||0,si.m=Math.round(l.left+si.sc())||0,o?r.borderTopStyle=o:r.removeProperty("border-top-style"),n||(be.setAttribute("style",""),be.removeAttribute("style")),ou=setInterval(W2,250),G.delayedCall(.5,function(){return su=0}),jt(Pe,"touchcancel",Rn),jt(be,"touchstart",Rn),lu(jt,Pe,"pointerdown,touchstart,mousedown",O2),lu(jt,Pe,"pointerup,touchend,mouseup",$2),Zg=G.utils.checkPrefix("transform"),xh.push(Zg),oa=Ut(),mp=G.delayedCall(.2,ls).pause(),sa=[Pe,"visibilitychange",function(){var d=se.innerWidth,u=se.innerHeight;Pe.hidden?(F2=d,R2=u):(F2!==d||R2!==u)&&ic()},Pe,"DOMContentLoaded",ls,se,"load",ls,se,"resize",ic],au(jt),oe.forEach(function(d){return d.enable(0,1)}),c=0;c<ae.length;c+=3)cu(kt,ae[c],ae[c+1]),cu(kt,ae[c],ae[c+2])}},t.config=function(n){"limitCallbacks"in n&&(p0=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(ou)||(ou=r)&&setInterval(W2,r),"ignoreMobileResize"in n&&(qg=t.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(au(kt)||au(jt,n.autoRefreshEvents||"none"),Y3=(n.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(n,r){var o=hi(n),s=ae.indexOf(o),l=Ts(o);~s&&ae.splice(s,l?6:2),r&&(l?Yn.unshift(se,r,be,r,Ii,r):Yn.unshift(o,r))},t.clearMatchMedia=function(n){oe.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},t.isInViewport=function(n,r,o){var s=(Ti(n)?hi(n):n).getBoundingClientRect(),l=s[o?ws:vs]*r||0;return o?s.right-l>0&&s.left+l<se.innerWidth:s.bottom-l>0&&s.top+l<se.innerHeight},t.positionInViewport=function(n,r,o){Ti(n)&&(n=hi(n));var s=n.getBoundingClientRect(),l=s[o?ws:vs],c=r==null?l/2:r in wp?wp[r]*l:~r.indexOf("%")?parseFloat(r)*l/100:parseFloat(r)||0;return o?(s.left+c)/se.innerWidth:(s.top+c)/se.innerHeight},t.killAll=function(n){if(oe.slice(0).forEach(function(o){return o.vars.id!=="ScrollSmoother"&&o.kill()}),n!==!0){var r=Es.killAll||[];Es={},r.forEach(function(o){return o()})}},t}();le.version="3.13.0";le.saveStyles=function(t){return t?dd(t).forEach(function(e){if(e&&e.style){var i=Ci.indexOf(e);i>=0&&Ci.splice(i,5),Ci.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),G.core.getCache(e),Qg())}}):Ci};le.revert=function(t,e){return dw(!t,e)};le.create=function(t,e){return new le(t,e)};le.refresh=function(t){return t?ic(!0):(oa||le.register())&&ls(!0)};le.update=function(t){return++ae.cache&&yr(t===!0?2:0)};le.clearScrollMemory=r4;le.maxScroll=function(t,e){return Vn(t,e?si:wt)};le.getScrollFunc=function(t,e){return Do(hi(t),e?si:wt)};le.getById=function(t){return Jg[t]};le.getAll=function(){return oe.filter(function(t){return t.vars.id!=="ScrollSmoother"})};le.isScrolling=function(){return!!sn};le.snapDirectional=cw;le.addEventListener=function(t,e){var i=Es[t]||(Es[t]=[]);~i.indexOf(e)||i.push(e)};le.removeEventListener=function(t,e){var i=Es[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)};le.batch=function(t,e){var i=[],n={},r=e.interval||.016,o=e.batchMax||1e9,s=function(d,u){var p=[],f=[],g=G.delayedCall(r,function(){u(p,f),p=[],f=[]}).pause();return function(y){p.length||g.restart(!0),p.push(y.trigger),f.push(y),o<=p.length&&g.progress(1)}},l;for(l in e)n[l]=l.substr(0,2)==="on"&&Gt(e[l])&&l!=="onRefreshInit"?s(l,e[l]):e[l];return Gt(o)&&(o=o(),jt(le,"refresh",function(){return o=e.batchMax()})),dd(t).forEach(function(c){var d={};for(l in n)d[l]=n[l];d.trigger=c,i.push(le.create(d))}),i};var Z2=function(e,i,n,r){return i>r?e(r):i<0&&e(0),n>r?(r-i)/(n-i):n<0?i/(i-n):1},w0=function t(e,i){i===!0?e.style.removeProperty("touch-action"):e.style.touchAction=i===!0?"auto":i?"pan-"+i+(nt.isTouch?" pinch-zoom":""):"none",e===Ii&&t(be,i)},fu={auto:1,scroll:1},Uz=function(e){var i=e.event,n=e.target,r=e.axis,o=(i.changedTouches?i.changedTouches[0]:i).target,s=o._gsap||G.core.getCache(o),l=Ut(),c;if(!s._isScrollT||l-s._isScrollT>2e3){for(;o&&o!==be&&(o.scrollHeight<=o.clientHeight&&o.scrollWidth<=o.clientWidth||!(fu[(c=Ji(o)).overflowY]||fu[c.overflowX]));)o=o.parentNode;s._isScroll=o&&o!==n&&!Ts(o)&&(fu[(c=Ji(o)).overflowY]||fu[c.overflowX]),s._isScrollT=l}(s._isScroll||r==="x")&&(i.stopPropagation(),i._gsapAllow=!0)},a4=function(e,i,n,r){return nt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:i,onWheel:r=r&&Uz,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&jt(Pe,nt.eventTypes[0],Q2,!1,!0)},onDisable:function(){return kt(Pe,nt.eventTypes[0],Q2,!0)}})},Hz=/(input|label|select|textarea)/i,q2,Q2=function(e){var i=Hz.test(e.target.tagName);(i||q2)&&(e._gsapAllow=!0,q2=i)},Yz=function(e){Jo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var i=e,n=i.normalizeScrollX,r=i.momentum,o=i.allowNestedScroll,s=i.onRelease,l,c,d=hi(e.target)||Ii,u=G.core.globals().ScrollSmoother,p=u&&u.get(),f=Br&&(e.content&&hi(e.content)||p&&e.content!==!1&&!p.smooth()&&p.content()),g=Do(d,wt),y=Do(d,si),w=1,D=(nt.isTouch&&se.visualViewport?se.visualViewport.scale*se.visualViewport.width:se.outerWidth)/se.innerWidth,j=0,b=Gt(r)?function(){return r(l)}:function(){return r||2.8},v,h,x=a4(d,e.type,!0,o),k=function(){return h=!1},S=Rn,_=Rn,C=function(){c=Vn(d,wt),_=Pc(Br?1:0,c),n&&(S=Pc(0,Vn(d,si))),v=ys},E=function(){f._gsap.y=ec(parseFloat(f._gsap.y)+g.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",g.offset=g.cacheID=0},z=function(){if(h){requestAnimationFrame(k);var I=ec(l.deltaY/2),M=_(g.v-I);if(f&&M!==g.v+g.offset){g.offset=M-g.v;var P=ec((parseFloat(f&&f._gsap.y)||0)-g.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",g.cacheID=ae.cache,yr()}return!0}g.offset&&E(),h=!0},A,L,N,W,V=function(){C(),A.isActive()&&A.vars.scrollY>c&&(g()>c?A.progress(1)&&g(c):A.resetTo("scrollY",c))};return f&&G.set(f,{y:"+=0"}),e.ignoreCheck=function($){return Br&&$.type==="touchmove"&&z()||w>1.05&&$.type!=="touchstart"||l.isGesturing||$.touches&&$.touches.length>1},e.onPress=function(){h=!1;var $=w;w=ec((se.visualViewport&&se.visualViewport.scale||1)/D),A.pause(),$!==w&&w0(d,w>1.01?!0:n?!1:"x"),L=y(),N=g(),C(),v=ys},e.onRelease=e.onGestureStart=function($,I){if(g.offset&&E(),!I)W.restart(!0);else{ae.cache++;var M=b(),P,R;n&&(P=y(),R=P+M*.05*-$.velocityX/.227,M*=Z2(y,P,R,Vn(d,si)),A.vars.scrollX=S(R)),P=g(),R=P+M*.05*-$.velocityY/.227,M*=Z2(g,P,R,Vn(d,wt)),A.vars.scrollY=_(R),A.invalidate().duration(M).play(.01),(Br&&A.vars.scrollY>=c||P>=c-1)&&G.to({},{onUpdate:V,duration:M})}s&&s($)},e.onWheel=function(){A._ts&&A.pause(),Ut()-j>1e3&&(v=0,j=Ut())},e.onChange=function($,I,M,P,R){if(ys!==v&&C(),I&&n&&y(S(P[2]===I?L+($.startX-$.x):y()+I-P[1])),M){g.offset&&E();var U=R[2]===M,ne=U?N+$.startY-$.y:g()+M-R[1],Z=_(ne);U&&ne!==Z&&(N+=Z-ne),g(Z)}(M||I)&&yr()},e.onEnable=function(){w0(d,n?!1:"x"),le.addEventListener("refresh",V),jt(se,"resize",V),g.smooth&&(g.target.style.scrollBehavior="auto",g.smooth=y.smooth=!1),x.enable()},e.onDisable=function(){w0(d,!0),kt(se,"resize",V),le.removeEventListener("refresh",V),x.kill()},e.lockAxis=e.lockAxis!==!1,l=new nt(e),l.iOS=Br,Br&&!g()&&g(1),Br&&G.ticker.add(Rn),W=l._dc,A=G.to(l,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:s4(g,g(),function(){return A.pause()})},onUpdate:yr,onComplete:W.vars.onComplete}),l};le.sort=function(t){if(Gt(t))return oe.sort(t);var e=se.pageYOffset||0;return le.getAll().forEach(function(i){return i._sortY=i.trigger?e+i.trigger.getBoundingClientRect().top:i.start+se.innerHeight}),oe.sort(t||function(i,n){return(i.vars.refreshPriority||0)*-1e6+(i.vars.containerAnimation?1e6:i._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};le.observe=function(t){return new nt(t)};le.normalizeScroll=function(t){if(typeof t>"u")return ti;if(t===!0&&ti)return ti.enable();if(t===!1){ti&&ti.kill(),ti=t;return}var e=t instanceof nt?t:Yz(t);return ti&&ti.target===e.target&&ti.kill(),Ts(e.target)&&(ti=e),e};le.core={_getVelocityProp:Xg,_inputObserver:a4,_scrollers:ae,_proxies:Yn,bridge:{ss:function(){sn||Is("scrollStart"),sn=Ut()},ref:function(){return Wt}}};q3()&&G.registerPlugin(le);/*!
 * SplitText 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */let Ol,Qs,ix,Gz=()=>ix||_d.register(window.gsap),K2=typeof Intl<"u"?new Intl.Segmenter:0,vp=t=>typeof t=="string"?vp(document.querySelectorAll(t)):"length"in t?Array.from(t):[t],J2=t=>vp(t).filter(e=>e instanceof HTMLElement),nx=[],v0=function(){},Xz=/\s+/g,eb=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),tb={left:0,top:0,width:0,height:0},ib=(t,e)=>{if(e){let i=new Set(t.join("").match(e)||nx),n=t.length,r,o,s,l;if(i.size)for(;--n>-1;){o=t[n];for(s of i)if(s.startsWith(o)&&s.length>o.length){for(r=0,l=o;s.startsWith(l+=t[n+ ++r])&&l.length<s.length;);if(r&&l.length===s.length){t[n]=s,t.splice(n+1,r);break}}}}return t},nb=t=>window.getComputedStyle(t).display==="inline"&&(t.style.display="inline-block"),Ks=(t,e,i)=>e.insertBefore(typeof t=="string"?document.createTextNode(t):t,i),rx=(t,e,i)=>{let n=e[t+"sClass"]||"",{tag:r="div",aria:o="auto",propIndex:s=!1}=e,l=t==="line"?"block":"inline-block",c=n.indexOf("++")>-1,d=u=>{let p=document.createElement(r),f=i.length+1;return n&&(p.className=n+(c?" "+n+f:"")),s&&p.style.setProperty("--"+t,f+""),o!=="none"&&p.setAttribute("aria-hidden","true"),r!=="span"&&(p.style.position="relative",p.style.display=l),p.textContent=u,i.push(p),p};return c&&(n=n.replace("++","")),d.collection=i,d},Zz=(t,e,i,n)=>{let r=rx("line",i,n),o=window.getComputedStyle(t).textAlign||"left";return(s,l)=>{let c=r("");for(c.style.textAlign=o,t.insertBefore(c,e[s]);s<l;s++)c.appendChild(e[s]);c.normalize()}},l4=(t,e,i,n,r,o,s,l,c,d)=>{var u;let p=Array.from(t.childNodes),f=0,{wordDelimiter:g,reduceWhiteSpace:y=!0,prepareText:w}=e,D=t.getBoundingClientRect(),j=D,b=!y&&window.getComputedStyle(t).whiteSpace.substring(0,3)==="pre",v=0,h=i.collection,x,k,S,_,C,E,z,A,L,N,W,V,$,I,M,P,R,U;for(typeof g=="object"?(S=g.delimiter||g,k=g.replaceWith||""):k=g===""?"":g||" ",x=k!==" ";f<p.length;f++)if(_=p[f],_.nodeType===3){for(M=_.textContent||"",y?M=M.replace(Xz," "):b&&(M=M.replace(/\n/g,k+`
`)),w&&(M=w(M,t)),_.textContent=M,C=k||S?M.split(S||k):M.match(l)||nx,R=C[C.length-1],A=x?R.slice(-1)===" ":!R,R||C.pop(),j=D,z=x?C[0].charAt(0)===" ":!C[0],z&&Ks(" ",t,_),C[0]||C.shift(),ib(C,c),o&&d||(_.textContent=""),L=1;L<=C.length;L++)if(P=C[L-1],!y&&b&&P.charAt(0)===`
`&&((u=_.previousSibling)==null||u.remove(),Ks(document.createElement("br"),t,_),P=P.slice(1)),!y&&P==="")Ks(k,t,_);else if(P===" ")t.insertBefore(document.createTextNode(" "),_);else{if(x&&P.charAt(0)===" "&&Ks(" ",t,_),v&&L===1&&!z&&h.indexOf(v.parentNode)>-1?(E=h[h.length-1],E.appendChild(document.createTextNode(n?"":P))):(E=i(n?"":P),Ks(E,t,_),v&&L===1&&!z&&E.insertBefore(v,E.firstChild)),n)for(W=K2?ib([...K2.segment(P)].map(ne=>ne.segment),c):P.match(l)||nx,U=0;U<W.length;U++)E.appendChild(W[U]===" "?document.createTextNode(" "):n(W[U]));if(o&&d){if(M=_.textContent=M.substring(P.length+1,M.length),N=E.getBoundingClientRect(),N.top>j.top&&N.left<=j.left){for(V=t.cloneNode(),$=t.childNodes[0];$&&$!==E;)I=$,$=$.nextSibling,V.appendChild(I);t.parentNode.insertBefore(V,t),r&&nb(V)}j=N}(L<C.length||A)&&Ks(L>=C.length?" ":x&&P.slice(-1)===" "?" "+k:k,t,_)}t.removeChild(_),v=0}else _.nodeType===1&&(s&&s.indexOf(_)>-1?(h.indexOf(_.previousSibling)>-1&&h[h.length-1].appendChild(_),v=_):(l4(_,e,i,n,r,o,s,l,c,!0),v=0),r&&nb(_))};const c4=class d4{constructor(e,i){this.isSplit=!1,Gz(),this.elements=J2(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=i,this._split=()=>this.isSplit&&this.split(this.vars);let n=[],r,o=()=>{let s=n.length,l;for(;s--;){l=n[s];let c=l.element.offsetWidth;if(c!==l.width){l.width=c,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(r),r=setTimeout(o,200)})},v0(this),this.split(i)}split(e){this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:i="chars,words,lines",aria:n="auto",deepSlice:r=!0,smartWrap:o,onSplit:s,autoSplit:l=!1,specialChars:c,mask:d}=this.vars,u=i.indexOf("lines")>-1,p=i.indexOf("chars")>-1,f=i.indexOf("words")>-1,g=p&&!f&&!u,y=c&&("push"in c?new RegExp("(?:"+c.join("|")+")","gu"):c),w=y?new RegExp(y.source+"|"+eb.source,"gu"):eb,D=!!e.ignore&&J2(e.ignore),{orig:j,animTime:b,obs:v}=this._data,h;return(p||f||u)&&(this.elements.forEach((x,k)=>{j[k]={element:x,html:x.innerHTML,ariaL:x.getAttribute("aria-label"),ariaH:x.getAttribute("aria-hidden")},n==="auto"?x.setAttribute("aria-label",(x.textContent||"").trim()):n==="hidden"&&x.setAttribute("aria-hidden","true");let S=[],_=[],C=[],E=p?rx("char",e,S):null,z=rx("word",e,_),A,L,N,W;if(l4(x,e,z,E,g,r&&(u||g),D,w,y,!1),u){let V=vp(x.childNodes),$=Zz(x,V,e,C),I,M=[],P=0,R=V.map(ne=>ne.nodeType===1?ne.getBoundingClientRect():tb),U=tb;for(A=0;A<V.length;A++)I=V[A],I.nodeType===1&&(I.nodeName==="BR"?(M.push(I),$(P,A+1),P=A+1,U=R[P]):(A&&R[A].top>U.top&&R[A].left<=U.left&&($(P,A),P=A),U=R[A]));P<A&&$(P,A),M.forEach(ne=>{var Z;return(Z=ne.parentNode)==null?void 0:Z.removeChild(ne)})}if(!f){for(A=0;A<_.length;A++)if(L=_[A],p||!L.nextSibling||L.nextSibling.nodeType!==3)if(o&&!u){for(N=document.createElement("span"),N.style.whiteSpace="nowrap";L.firstChild;)N.appendChild(L.firstChild);L.replaceWith(N)}else L.replaceWith(...L.childNodes);else W=L.nextSibling,W&&W.nodeType===3&&(W.textContent=(L.textContent||"")+(W.textContent||""),L.remove());_.length=0,x.normalize()}this.lines.push(...C),this.words.push(..._),this.chars.push(...S)}),d&&this[d]&&this.masks.push(...this[d].map(x=>{let k=x.cloneNode();return x.replaceWith(k),k.appendChild(x),x.className&&(k.className=x.className.replace(/(\b\w+\b)/g,"$1-mask")),k.style.overflow="clip",k}))),this.isSplit=!0,Qs&&(l?Qs.addEventListener("loadingdone",this._split):Qs.status==="loading"&&console.warn("SplitText called before fonts loaded")),(h=s&&s(this))&&h.totalTime&&(this._data.anim=b?h.totalTime(b):h),u&&l&&this.elements.forEach((x,k)=>{j[k].width=x.offsetWidth,v&&v.observe(x)}),this}revert(){var e,i;let{orig:n,anim:r,obs:o}=this._data;return o&&o.disconnect(),n.forEach(({element:s,html:l,ariaL:c,ariaH:d})=>{s.innerHTML=l,c?s.setAttribute("aria-label",c):s.removeAttribute("aria-label"),d?s.setAttribute("aria-hidden",d):s.removeAttribute("aria-hidden")}),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,Qs==null||Qs.removeEventListener("loadingdone",this._split),r&&(this._data.animTime=r.totalTime(),r.revert()),(i=(e=this.vars).onRevert)==null||i.call(e,this),this}static create(e,i){return new d4(e,i)}static register(e){Ol=Ol||e||window.gsap,Ol&&(vp=Ol.utils.toArray,v0=Ol.core.context||v0),!ix&&window.innerWidth>0&&(Qs=document.fonts,ix=!0)}};c4.version="3.13.0";let _d=c4;J.registerPlugin(le,_d);const qz=({text:t="",className:e="",delay:i=100,duration:n=.6,ease:r="power3.out",splitType:o="chars",from:s={opacity:0,y:40},to:l={opacity:1,y:0},threshold:c=.1,rootMargin:d="-100px",textAlign:u="center",onLetterAnimationComplete:p})=>{const f=T.useRef(null),g=T.useRef(!1);return T.useEffect(()=>{const y=f.current;!y||g.current||document.fonts.ready.then(()=>{const w=o==="lines";w&&(y.style.position="relative");const D=new _d(y,{type:o,absolute:w,linesClass:"split-line"});let j=[];switch(o){case"lines":j=D.lines;break;case"words":j=D.words;break;case"words, chars":j=[...D.words,...D.chars];break;default:j=D.chars}j.forEach(_=>{_.style.willChange="transform, opacity"});const b=(1-c)*100,v=/^(-?\d+)px$/.exec(d),h=v?parseInt(v[1],10):0,x=h<0?`-=${Math.abs(h)}px`:`+=${h}px`,k=`top ${b}%${x}`,S=J.timeline({scrollTrigger:{trigger:y,start:k,toggleActions:"play none none none",once:!0},smoothChildTiming:!0,onComplete:()=>{g.current=!0,J.set(j,{...l,clearProps:"willChange",immediateRender:!0}),p==null||p()}});return S.set(j,{...s,immediateRender:!1,force3D:!0}),S.to(j,{...l,duration:n,ease:r,stagger:i/1e3,force3D:!0}),()=>{S.kill(),le.getAll().forEach(_=>_.kill()),J.killTweensOf(j),D.revert()}})},[t,i,n,r,o,s,l,c,d,p]),a.jsx("p",{ref:f,className:`split-parent ${e}`,style:{textAlign:u,overflow:"hidden",display:"inline-block",whiteSpace:"normal",wordWrap:"break-word"},children:t})},Qz=m.div`
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
`,y0=m.button`
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
`,Kz=m.h2`
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
`,Jz=({onSelect:t,selected:e})=>{const i=document.querySelector("main");return i&&i.scrollTo({top:0,behavior:"smooth"}),a.jsxs("div",{children:[a.jsx(Kz,{children:"Recent Works"}),a.jsxs(Qz,{children:[a.jsx(y0,{$selected:e==="branding",onClick:()=>t("branding"),children:"Branding"}),a.jsx(y0,{$selected:e==="uxui",onClick:()=>t("uxui"),children:"UX-UI"}),a.jsx(y0,{$selected:e==="funproj",onClick:()=>t("funproj"),children:"School Proj"})]})]})},u4="/Nooshin-Shahsavan-portfolio/assets/foodhome.8a385cf5.png",h4="/Nooshin-Shahsavan-portfolio/assets/workhome.04db0779.png",eF=[{type:"image",src:u4,label:"UX-UI",link:"/work/savefood",details:[{label:"Project:",value:"SaveFood App"},{label:"Description:",value:"SaveFood App a mobile app that helps users track food expiration dates, find recipes for their ingredients... "},{label:"Timeline",value:"Coming soon!"},{label:"Year",value:"2025"}]},{type:"image",src:h4,label:"UX-UI",link:"/work/workday",details:[{label:"Project :",value:"Workday App"},{label:"Description:",value:"Workday is a self - service portal , and Workday mobile app , designed to make it easy for employees to ac..."},{label:"Timeline",value:"4 weeks"},{label:"Year",value:"2024"}]}],tF=`
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
`,iF=({setSelectedProject:t})=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},i={hidden:{opacity:0,y:50,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:tF}),a.jsx(O.div,{className:"recent-works-grid",variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:eF.map((n,r)=>a.jsx(O.div,{variants:i,children:a.jsx(as,{tiltMaxAngleX:20,tiltMaxAngleY:20,scale:1.08,glareEnable:!0,glareMaxOpacity:.4,glareColor:"#ffffff",glarePosition:"all",glareBorderRadius:"8px",children:a.jsxs(bn,{to:n.link,className:"work-item",tabIndex:0,children:[a.jsx("div",{className:"work-label",children:n.label}),a.jsx("div",{className:"work-media-container",children:n.type==="image"?a.jsx("img",{src:n.src,alt:n.label,className:"work-media"}):a.jsx("video",{src:n.src,className:"work-media",controls:!1,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),a.jsxs("div",{className:"work-info-box",children:[a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Project:"})," ",n.details[0].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Timeline:"})," ",n.details[2].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Year:"})," ",n.details[3].value]})]})]})})},r))})]})},yp="/Nooshin-Shahsavan-portfolio/assets/funhome.36e209bb.jpg",nF=[{type:"image",src:yp,label:"Fun Projects",details:[{label:"Project :",value:"Fun Projects"},{label:"Timeline",value:"No Idea"},{label:"Year",value:"..."}]}],rF=`
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
`,oF=({setSelectedProject:t=()=>{}})=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},i={hidden:{opacity:0,y:50,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:rF}),a.jsx(O.div,{className:"recent-works-grid",variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:nF.map((n,r)=>a.jsx(O.div,{variants:i,children:a.jsx(as,{tiltMaxAngleX:20,tiltMaxAngleY:20,scale:1.08,glareEnable:!0,glareMaxOpacity:.4,glareColor:"#ffffff",glarePosition:"all",glareBorderRadius:"8px",children:a.jsxs(bn,{to:"/work/fun",className:"work-item",tabIndex:0,children:[a.jsx("div",{className:"work-label",children:n.label}),a.jsx("div",{className:"work-media-container",children:n.type==="image"?a.jsx("img",{src:n.src,alt:n.label,className:"work-media"}):a.jsx("video",{src:new URL("/Nooshin-Shahsavan-portfolio/assets/straw1.d023f398.MP4",self.location).href,className:"work-media",controls:!1,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),a.jsxs("div",{className:"work-info-box",children:[a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Project :"})," ",n.details[0].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Timeline:"})," ",n.details[1].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Year:"})," ",n.details[2].value]})]})]})})},r))})]})},sF=m.footer`
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
`,aF=m.a`
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
`,lF=m.footer`
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
`,cF=m.p`
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
`,p4=()=>a.jsx(lF,{children:a.jsx(cF,{children:"© 2025 NOOSHIN SHAHSAVN | Designed & developed by me using React 🤍"})}),Os=()=>a.jsx(sF,{children:a.jsx(aF,{href:"mailto:nooshin-shahsavan.ca@gmail.com",children:"nooshin-shahsavan.ca@gmail.com"})});function mu(...t){return t.filter(Boolean).join(" ")}const dF=m(O.div)`
  display: inline-block;
  position: relative;
`,uF=m(O.span)`
  display: inline-block;
  white-space: nowrap;
`,uw=T.forwardRef(({texts:t,transition:e={type:"spring",damping:25,stiffness:300},initial:i={y:"100%",opacity:0},animate:n={y:0,opacity:1},exit:r={y:"-120%",opacity:0},animatePresenceMode:o="wait",animatePresenceInitial:s=!1,rotationInterval:l=2e3,staggerDuration:c=0,staggerFrom:d="first",loop:u=!0,auto:p=!0,splitBy:f="characters",onTextChange:g,mainClassName:y,splitLevelClassName:w,elementLevelClassName:D,...j},b)=>{const[v,h]=T.useState(0),[x,k]=T.useState(!1),S=I=>{if(typeof Intl<"u"&&Intl.Segmenter){const M=new Intl.Segmenter("en",{granularity:"grapheme"});return Array.from(M.segment(I),P=>P.segment)}return Array.from(I)},_=T.useMemo(()=>{const I=t[v];if(f==="characters"){const M=I.split(" ");return M.map((P,R)=>({characters:S(P),needsSpace:R!==M.length-1}))}return f==="words"?I.split(" ").map((M,P,R)=>({characters:[M],needsSpace:P!==R.length-1})):f==="lines"?I.split(`
`).map((M,P,R)=>({characters:[M],needsSpace:P!==R.length-1})):I.split(f).map((M,P,R)=>({characters:[M],needsSpace:P!==R.length-1}))},[t,v,f]),C=T.useCallback((I,M)=>{const P=M;if(d==="first")return I*c;if(d==="last")return(P-1-I)*c;if(d==="center"){const R=Math.floor(P/2);return Math.abs(R-I)*c}if(d==="random"){const R=Math.floor(Math.random()*P);return Math.abs(R-I)*c}return Math.abs(d-I)*c},[d,c]),E=T.useCallback(I=>{h(I),g&&g(t[I])},[g,t]),z=T.useCallback(()=>{const I=v===t.length-1?u?0:v:v+1;I!==v&&E(I)},[v,t.length,u,E]),A=T.useCallback(()=>{const I=v===0?u?t.length-1:v:v-1;I!==v&&E(I)},[v,t.length,u,E]),L=T.useCallback(I=>{const M=Math.max(0,Math.min(I,t.length-1));M!==v&&E(M)},[t.length,v,E]),N=T.useCallback(()=>{v!==0&&E(0)},[v,E]);T.useImperativeHandle(b,()=>({next:z,previous:A,jumpTo:L,reset:N}),[z,A,L,N]),T.useEffect(()=>{if(!p)return;const I=setInterval(z,l);return()=>clearInterval(I)},[z,l,p]);const W=()=>{k(!0)},V=()=>{k(!1)},$=()=>{switch(d){case"first":return 1;case"last":return-1;case"center":return 0;default:return 0}};return a.jsx(dF,{children:a.jsxs(uF,{className:mu("text-rotate",y),...j,layout:!0,transition:e,onAnimationStart:W,onAnimationComplete:V,children:[a.jsx("span",{className:"text-rotate-sr-only",children:t[v]}),a.jsx(iA,{mode:o,initial:s,children:a.jsx(O.div,{className:mu(f==="lines"?"text-rotate-lines":"text-rotate-word"),layout:!0,"aria-hidden":"true",transition:{duration:.5,ease:[.4,0,.2,1],staggerChildren:c,staggerDirection:$()},children:_.map((I,M,P)=>{const R=P.slice(0,M).reduce((U,ne)=>U+ne.characters.length,0);return a.jsxs("span",{className:mu("text-rotate-word",w),children:[I.characters.map((U,ne)=>a.jsx(O.span,{initial:i,animate:n,exit:r,transition:{...e,delay:C(R+ne,P.reduce((Z,fe)=>Z+fe.characters.length,0))},className:mu("text-rotate-element",D),children:U},ne)),I.needsSpace&&a.jsx("span",{className:"text-rotate-space",children:" "})]},M)})},v)})]})})});uw.displayName="RotatingText";const hF=m.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background: #191c24;
  position: relative;
`,pF=m.div`
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
`,fF=m.section`
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
`,mF=m.div`
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
`,gF=m(O.div)`
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
`,xF=m.div`
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
`,wF=m.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  z-index: 3;
`,vF=m.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  z-index: 3;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
  }
`,yF=m.div`
  position: relative;
  display: inline-block;
  z-index: 3;
`;m(O.div)`
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
`;const bF=m.div`
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
`,kF=m(uw)`
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
`,jF=m(O.div)`
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
`;const SF=m.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #191c24;
  position: relative;
  z-index: 5;
  padding: 4rem 0;
`,DF=()=>{T.useContext(tl);const t=T.useRef(null),e=T.useRef(null),[i,n]=T.useState(!1),[r,o]=T.useState(!1),[s,l]=T.useState({x:0,y:0}),[c,d]=T.useState({x:0,y:0}),[u,p]=T.useState("branding"),f=T.useRef(null),g=["Graphic designer","Brand designer","UX/UI designer"],y=["NOOSHIN SHAHSAVAN!"],w=h=>{l({x:h.clientX,y:h.clientY})},D=h=>{r&&d({x:h.clientX,y:h.clientY})},j=h=>{f.current&&clearTimeout(f.current),o(!0),d({x:h.clientX,y:h.clientY})},b=()=>{f.current=window.setTimeout(()=>o(!1),100)},v=T.useCallback(()=>{if(t.current&&e.current){const h=e.current.getBoundingClientRect(),x=h.left+h.width/2+window.scrollX,k=h.top+h.height/2+window.scrollY;t.current.triggerShockwave(x,k)}},[]);return a.jsxs(hF,{children:[a.jsx(rt,{title:"Nooshin Shahsavan | Graphic Designer & UX/UI Designer Portfolio",description:"Professional portfolio of Nooshin Shahsavan, a talented graphic designer, brand designer, and UX/UI designer. Explore creative projects and innovative design solutions.",keywords:"graphic design, brand design, UX/UI design, portfolio, Nooshin Shahsavan, creative designer, visual design",image:"/src/assets/logoweb.png"}),a.jsx(pF,{children:a.jsx(L3,{})}),a.jsxs(fF,{onMouseMove:w,children:[a.jsx(cz,{ref:t,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0},dotSize:5,gap:15,baseColor:"#ffffff",activeColor:"#4CAF50",proximity:120,shockRadius:250,shockStrength:5,resistance:750,returnDuration:1.5,maxSpeed:5e3,speedTrigger:100}),a.jsx(mF,{$isBlurred:i}),a.jsxs(gF,{children:[a.jsx(xF,{children:a.jsxs(vF,{children:[a.jsxs(yF,{onMouseEnter:j,onMouseLeave:b,onMouseMove:D,children:[a.jsx(bF,{children:"My name is"}),a.jsx(kF,{texts:y,onTextChange:v})]}),a.jsx(jF,{ref:e,children:a.jsx(uw,{texts:g,onTextChange:v,auto:!0,rotationInterval:3e3,staggerDuration:.1,staggerFrom:"center"})})]})}),a.jsx(wF,{})]})]}),a.jsx(Jz,{selected:u,onSelect:p}),a.jsx(qz,{text:"Recent Projects"}),u==="branding"&&a.jsx(xz,{}),u==="uxui"&&a.jsx(iF,{setSelectedProject:p}),u==="funproj"&&a.jsx(oF,{setSelectedProject:p}),a.jsx(SF,{children:a.jsx(Pz,{})}),a.jsx(p4,{})]})};/*!
 * strings: 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _F=/(?:^\s+|\s+$)/g,CF=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function hw(t){var e=t.nodeType,i="";if(e===1||e===9||e===11){if(typeof t.textContent=="string")return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=hw(t)}else if(e===3||e===4)return t.nodeValue;return i}function zn(t,e,i,n,r){if(t+="",i&&(t=t.trim?t.trim():t.replace(_F,"")),e&&e!=="")return t.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(e);for(var o=[],s=t.length,l=0,c,d;l<s;l++)d=t.charAt(l),(d.charCodeAt(0)>=55296&&d.charCodeAt(0)<=56319||t.charCodeAt(l+1)>=65024&&t.charCodeAt(l+1)<=65039)&&(c=((t.substr(l,12).split(CF)||[])[1]||"").length||2,d=t.substr(l,c),o.emoji=1,l+=c-1),o.push(r?d:d===">"?"&gt;":d==="<"?"&lt;":n&&d===" "&&(t.charAt(l-1)===" "||t.charAt(l+1)===" ")?"&nbsp;":d);return o}/*!
 * ScrambleTextPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vh=function(){function t(i){this.chars=zn(i),this.sets=[],this.length=50;for(var n=0;n<20;n++)this.sets[n]=ob(80,this.chars)}var e=t.prototype;return e.grow=function(n){for(var r=0;r<20;r++)this.sets[r]+=ob(n-this.length,this.chars);this.length=n},t}(),cs,f4,m4=function(){return cs||typeof window<"u"&&(cs=window.gsap)&&cs.registerPlugin&&cs},PF=1,rb=/\s+/g,ob=function(e,i){for(var n=i.length,r="";--e>-1;)r+=i[~~(Math.random()*n)];return r},ox="ABCDEFGHIJKLMNOPQRSTUVWXYZ",sb=ox.toLowerCase(),TF={upperCase:new vh(ox),lowerCase:new vh(sb),upperAndLowerCase:new vh(ox+sb)},ab=function(){f4=cs=m4()},sf={version:"3.13.0",name:"scrambleText",register:function(e,i,n){cs=e,ab()},init:function(e,i,n,r,o){if(f4||ab(),this.prop="innerHTML"in e?"innerHTML":"textContent"in e?"textContent":0,!!this.prop){this.target=e,typeof i!="object"&&(i={text:i});var s=i.text||i.value||"",l=i.trim!==!1,c=this,d,u,p,f;return c.delimiter=d=i.delimiter||"",c.original=zn(hw(e).replace(rb," ").split("&nbsp;").join(""),d,l),(s==="{original}"||s===!0||s==null)&&(s=c.original.join(d)),c.text=zn((s||"").replace(rb," "),d,l),c.hasClass=!!(i.newClass||i.oldClass),c.newClass=i.newClass,c.oldClass=i.oldClass,f=d==="",c.textHasEmoji=f&&!!c.text.emoji,c.charsHaveEmoji=!!i.chars&&!!zn(i.chars).emoji,c.length=f?c.original.length:c.original.join(d).length,c.lengthDif=(f?c.text.length:c.text.join(d).length)-c.length,c.fillChar=i.fillChar||i.chars&&~i.chars.indexOf(" ")?"&nbsp;":"",c.charSet=p=TF[i.chars||"upperCase"]||new vh(i.chars),c.speed=.05/(i.speed||1),c.prevScrambleTime=0,c.setIndex=Math.random()*20|0,u=c.length+Math.max(c.lengthDif,0),u>p.length&&p.grow(u),c.chars=p.sets[c.setIndex],c.revealDelay=i.revealDelay||0,c.tweenLength=i.tweenLength!==!1,c.tween=n,c.rightToLeft=!!i.rightToLeft,c._props.push("scrambleText","text"),PF}},render:function(e,i){var n=i.target,r=i.prop,o=i.text,s=i.delimiter,l=i.tween,c=i.prevScrambleTime,d=i.revealDelay,u=i.setIndex,p=i.chars,f=i.charSet,g=i.length,y=i.textHasEmoji,w=i.charsHaveEmoji,D=i.lengthDif,j=i.tweenLength,b=i.oldClass,v=i.newClass,h=i.rightToLeft,x=i.fillChar,k=i.speed,S=i.original,_=i.hasClass,C=o.length,E=l._time,z=E-c,A,L,N,W,V,$,I,M,P,R,U;d&&(l._from&&(E=l._dur-E),e=E===0?0:E<d?1e-6:E===l._dur?1:l._ease((E-d)/(l._dur-d))),e<0?e=0:e>1&&(e=1),h&&(e=1-e),A=~~(e*C+.5),e?((z>k||z<-k)&&(i.setIndex=u=(u+(Math.random()*19|0))%20,i.chars=f.sets[u],i.prevScrambleTime+=z),W=p):W=S.join(s),U=l._from?e:1-e,R=g+(j?l._from?U*U*U:1-U*U*U:1)*D,h?e===1&&(l._from||l.data==="isFromStart")?(N="",W=S.join(s)):(I=o.slice(A).join(s),w?N=zn(W).slice(0,R-(y?zn(I):I).length+.5|0).join(""):N=W.substr(0,R-(y?zn(I):I).length+.5|0),W=I):(N=o.slice(0,A).join(s),L=(y?zn(N):N).length,w?W=zn(W).slice(L,R+.5|0).join(""):W=W.substr(L,R-L+.5|0)),_?(M=h?b:v,P=h?v:b,V=M&&A!==0,$=P&&A!==C,I=(V?"<span class='"+M+"'>":"")+N+(V?"</span>":"")+($?"<span class='"+P+"'>":"")+s+W+($?"</span>":"")):I=N+s+W,n[r]=x==="&nbsp;"&&~I.indexOf("  ")?I.split("  ").join("&nbsp;&nbsp;"):I}};sf.emojiSafeSplit=zn;sf.getText=hw;m4()&&cs.registerPlugin(sf);J.registerPlugin(_d,sf);const EF=({radius:t=100,duration:e=1.2,speed:i=.5,scrambleChars:n=".:",className:r="",style:o={},children:s})=>{const l=T.useRef(null),c=T.useRef([]);return T.useEffect(()=>{var d,u;l.current&&((u=(d=document.fonts)==null?void 0:d.ready)==null||u.then(()=>{if(!l.current)return;const p=_d.create(l.current.querySelector("p"),{type:"chars",charsClass:"char"});c.current=p.chars,c.current.forEach(y=>{J.set(y,{display:"inline-block",attr:{"data-content":y.innerHTML}})});const f=y=>{c.current.forEach(w=>{const{left:D,top:j,width:b,height:v}=w.getBoundingClientRect(),h=y.clientX-(D+b/2),x=y.clientY-(j+v/2),k=Math.hypot(h,x);k<t&&J.to(w,{overwrite:!0,duration:e*(1-k/t),scrambleText:{text:w.dataset.content||"",chars:n,speed:i},ease:"none"})})},g=l.current;if(g)return g.addEventListener("pointermove",f),()=>{g&&(g.removeEventListener("pointermove",f),p.revert())}}))},[t,e,i,n]),a.jsx("div",{ref:l,className:`text-block ${r}`,style:o,children:a.jsx("p",{children:s})})};function qt(t,e,i){return(1-i)*t+i*e}function Qt(t,e){let i=0,n=0;return"touches"in t&&t.touches.length>0?(i=t.touches[0].clientX,n=t.touches[0].clientY):"clientX"in t&&(i=t.clientX,n=t.clientY),{x:i-e.left,y:n-e.top}}function Io(t,e){const i=t.x-e.x,n=t.y-e.y;return Math.hypot(i,n)}class Ao{constructor(e){this.DOM={el:null,inner:null},this.defaultStyle={scale:1,x:0,y:0,opacity:0},this.rect=null,this.DOM.el=e,this.DOM.inner=this.DOM.el.querySelector(".content__img-inner"),this.getRect(),this.initEvents()}initEvents(){this.resize=()=>{J.set(this.DOM.el,this.defaultStyle),this.getRect()},window.addEventListener("resize",this.resize)}getRect(){this.rect=this.DOM.el.getBoundingClientRect()}}class IF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new Ao(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0};const i=r=>{const o=this.container.getBoundingClientRect();this.mousePos=Qt(r,o)};this.container.addEventListener("mousemove",i),this.container.addEventListener("touchmove",i);const n=r=>{const o=this.container.getBoundingClientRect();this.mousePos=Qt(r,o),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),this.container.removeEventListener("mousemove",n),this.container.removeEventListener("touchmove",n)};this.container.addEventListener("mousemove",n),this.container.addEventListener("touchmove",n)}render(){const e=Io(this.mousePos,this.lastMousePos);this.cacheMousePos.x=qt(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=qt(this.cacheMousePos.y,this.mousePos.y,.1),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var i,n,r,o;++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const e=this.images[this.imgPosition];J.killTweensOf(e.DOM.el),J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(e.DOM.el,{opacity:1,scale:1,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((i=e.rect)==null?void 0:i.width)??0)/2,y:this.cacheMousePos.y-(((n=e.rect)==null?void 0:n.height)??0)/2},{duration:.4,ease:"power1",x:this.mousePos.x-(((r=e.rect)==null?void 0:r.width)??0)/2,y:this.mousePos.y-(((o=e.rect)==null?void 0:o.height)??0)/2},0).to(e.DOM.el,{duration:.4,ease:"power3",opacity:0,scale:.2},.4)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}class AF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new Ao(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0};const i=r=>{const o=e.getBoundingClientRect();this.mousePos=Qt(r,o)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const o=e.getBoundingClientRect();this.mousePos=Qt(r,o),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){const e=Io(this.mousePos,this.lastMousePos);this.cacheMousePos.x=qt(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=qt(this.cacheMousePos.y,this.mousePos.y,.1),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var i,n,r,o;++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const e=this.images[this.imgPosition];J.killTweensOf(e.DOM.el),J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(e.DOM.el,{opacity:1,scale:0,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((i=e.rect)==null?void 0:i.width)??0)/2,y:this.cacheMousePos.y-(((n=e.rect)==null?void 0:n.height)??0)/2},{duration:.4,ease:"power1",scale:1,x:this.mousePos.x-(((r=e.rect)==null?void 0:r.width)??0)/2,y:this.mousePos.y-(((o=e.rect)==null?void 0:o.height)??0)/2},0).to(e.DOM.el,{duration:.4,ease:"power2",opacity:0,scale:.2},.45)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}class MF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new Ao(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0};const i=r=>{const o=e.getBoundingClientRect();this.mousePos=Qt(r,o)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const o=e.getBoundingClientRect();this.mousePos=Qt(r,o),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){const e=Io(this.mousePos,this.lastMousePos);this.cacheMousePos.x=qt(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=qt(this.cacheMousePos.y,this.mousePos.y,.1),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var i,n,r,o;++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const e=this.images[this.imgPosition];J.killTweensOf(e.DOM.el),J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(e.DOM.el,{opacity:1,scale:0,zIndex:this.zIndexVal,xPercent:0,yPercent:0,x:this.cacheMousePos.x-(((i=e.rect)==null?void 0:i.width)??0)/2,y:this.cacheMousePos.y-(((n=e.rect)==null?void 0:n.height)??0)/2},{duration:.4,ease:"power1",scale:1,x:this.mousePos.x-(((r=e.rect)==null?void 0:r.width)??0)/2,y:this.mousePos.y-(((o=e.rect)==null?void 0:o.height)??0)/2},0).to(e.DOM.el,{duration:.6,ease:"power2",opacity:0,scale:.2,xPercent:()=>J.utils.random(-30,30),yPercent:-200},.6)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}class zF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new Ao(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0};const i=r=>{const o=e.getBoundingClientRect();this.mousePos=Qt(r,o)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const o=e.getBoundingClientRect();this.mousePos=Qt(r,o),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){Io(this.mousePos,this.lastMousePos)>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.cacheMousePos.x=qt(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=qt(this.cacheMousePos.y,this.mousePos.y,.1),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var o,s,l,c;++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const e=this.images[this.imgPosition];J.killTweensOf(e.DOM.el);let i=this.mousePos.x-this.cacheMousePos.x,n=this.mousePos.y-this.cacheMousePos.y,r=Math.sqrt(i*i+n*n);r!==0&&(i/=r,n/=r),i*=r/100,n*=r/100,J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(e.DOM.el,{opacity:1,scale:0,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((o=e.rect)==null?void 0:o.width)??0)/2,y:this.cacheMousePos.y-(((s=e.rect)==null?void 0:s.height)??0)/2},{duration:.4,ease:"power1",scale:1,x:this.mousePos.x-(((l=e.rect)==null?void 0:l.width)??0)/2,y:this.mousePos.y-(((c=e.rect)==null?void 0:c.height)??0)/2},0).fromTo(e.DOM.inner,{scale:2,filter:`brightness(${Math.max(400*r/100,100)}%) contrast(${Math.max(400*r/100,100)}%)`},{duration:.4,ease:"power1",scale:1,filter:"brightness(100%) contrast(100%)"},0).to(e.DOM.el,{duration:.4,ease:"power3",opacity:0},.4).to(e.DOM.el,{duration:1.5,ease:"power4",x:`+=${i*110}`,y:`+=${n*110}`},.05)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}class FF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new Ao(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0},this.lastAngle=0;const i=r=>{const o=e.getBoundingClientRect();this.mousePos=Qt(r,o)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const o=e.getBoundingClientRect();this.mousePos=Qt(r,o),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){Io(this.mousePos,this.lastMousePos)>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.cacheMousePos.x=qt(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=qt(this.cacheMousePos.y,this.mousePos.y,.1),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var c,d,u,p;let e=this.mousePos.x-this.cacheMousePos.x,i=this.mousePos.y-this.cacheMousePos.y,n=Math.atan2(i,e)*(180/Math.PI);n<0&&(n+=360),n>90&&n<=270&&(n+=180);const r=n>=this.lastAngle;this.lastAngle=n;let o=r?n-10:n+10;const s=Math.sqrt(e*e+i*i);s!==0&&(e/=s,i/=s),e*=s/150,i*=s/150,++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const l=this.images[this.imgPosition];J.killTweensOf(l.DOM.el),J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(l.DOM.el,{opacity:1,filter:"brightness(80%)",scale:.1,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((c=l.rect)==null?void 0:c.width)??0)/2,y:this.cacheMousePos.y-(((d=l.rect)==null?void 0:d.height)??0)/2,rotation:o},{duration:1,ease:"power2",scale:1,filter:"brightness(100%)",x:this.mousePos.x-(((u=l.rect)==null?void 0:u.width)??0)/2+e*70,y:this.mousePos.y-(((p=l.rect)==null?void 0:p.height)??0)/2+i*70,rotation:this.lastAngle},0).to(l.DOM.el,{duration:.4,ease:"expo",opacity:0},.5).to(l.DOM.el,{duration:1.5,ease:"power4",x:`+=${e*120}`,y:`+=${i*120}`},.05)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}class RF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new Ao(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0};const i=r=>{const o=e.getBoundingClientRect();this.mousePos=Qt(r,o)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const o=e.getBoundingClientRect();this.mousePos=Qt(r,o),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){const e=Io(this.mousePos,this.lastMousePos);this.cacheMousePos.x=qt(this.cacheMousePos.x,this.mousePos.x,.3),this.cacheMousePos.y=qt(this.cacheMousePos.y,this.mousePos.y,.3),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}mapSpeedToSize(e,i,n){return i+(n-i)*Math.min(e/200,1)}mapSpeedToBrightness(e,i,n){return i+(n-i)*Math.min(e/70,1)}mapSpeedToBlur(e,i,n){return i+(n-i)*Math.min(e/90,1)}mapSpeedToGrayscale(e,i,n){return i+(n-i)*Math.min(e/90,1)}showNextImage(){var d,u,p,f;const e=this.mousePos.x-this.cacheMousePos.x,i=this.mousePos.y-this.cacheMousePos.y,n=Math.sqrt(e*e+i*i);++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const r=this.images[this.imgPosition],o=this.mapSpeedToSize(n,.3,2),s=this.mapSpeedToBrightness(n,0,1.3),l=this.mapSpeedToBlur(n,20,0),c=this.mapSpeedToGrayscale(n,600,0);J.killTweensOf(r.DOM.el),J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(r.DOM.el,{opacity:1,scale:0,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((d=r.rect)==null?void 0:d.width)??0)/2,y:this.cacheMousePos.y-(((u=r.rect)==null?void 0:u.height)??0)/2},{duration:.8,ease:"power3",scale:o,filter:`grayscale(${c*100}%) brightness(${s*100}%) blur(${l}px)`,x:this.mousePos.x-(((p=r.rect)==null?void 0:p.width)??0)/2,y:this.mousePos.y-(((f=r.rect)==null?void 0:f.height)??0)/2},0).fromTo(r.DOM.inner,{scale:2},{duration:.8,ease:"power3",scale:1},0).to(r.DOM.el,{duration:.4,ease:"power3.in",opacity:0,scale:.2},.45)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}function LF(t,e,i){const n=Math.abs(e)%i.length;return t-n>=0?t-n:i.length-(n-t)}class NF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new Ao(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0},this.visibleImagesCount=0,this.visibleImagesTotal=9,this.visibleImagesTotal=Math.min(this.visibleImagesTotal,this.imagesTotal-1);const i=r=>{const o=e.getBoundingClientRect();this.mousePos=Qt(r,o)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const o=e.getBoundingClientRect();this.mousePos=Qt(r,o),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){const e=Io(this.mousePos,this.lastMousePos);this.cacheMousePos.x=qt(this.cacheMousePos.x,this.mousePos.x,.3),this.cacheMousePos.y=qt(this.cacheMousePos.y,this.mousePos.y,.3),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var n,r,o,s;++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const e=this.images[this.imgPosition];++this.visibleImagesCount,J.killTweensOf(e.DOM.el);const i=J.utils.random(.5,1.6);if(J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(e.DOM.el,{scale:i-Math.max(J.utils.random(.2,.6),0),rotationZ:J.utils.random(-3,3),opacity:1,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((n=e.rect)==null?void 0:n.width)??0)/2,y:this.cacheMousePos.y-(((r=e.rect)==null?void 0:r.height)??0)/2},{duration:.4,ease:"power3",scale:i,rotationZ:J.utils.random(-3,3),x:this.mousePos.x-(((o=e.rect)==null?void 0:o.width)??0)/2,y:this.mousePos.y-(((s=e.rect)==null?void 0:s.height)??0)/2},0),this.visibleImagesCount>=this.visibleImagesTotal){const l=LF(this.imgPosition,this.visibleImagesTotal,this.images),c=this.images[l];J.to(c.DOM.el,{duration:.4,ease:"power4",opacity:0,scale:1.3,onComplete:()=>{this.activeImagesCount===0&&(this.isIdle=!0)}})}}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--}}class OF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new Ao(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0},this.rotation={x:0,y:0},this.cachedRotation={x:0,y:0},this.zValue=0,this.cachedZValue=0;const i=r=>{const o=e.getBoundingClientRect();this.mousePos=Qt(r,o)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const o=e.getBoundingClientRect();this.mousePos=Qt(r,o),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){const e=Io(this.mousePos,this.lastMousePos);this.cacheMousePos.x=qt(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=qt(this.cacheMousePos.y,this.mousePos.y,.1),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var f,g,y,w;const e=this.container.getBoundingClientRect(),i=e.width/2,n=e.height/2,r=this.mousePos.x-i,o=this.mousePos.y-n;this.rotation.x=-(o/n)*30,this.rotation.y=r/i*30,this.cachedRotation={...this.rotation};const s=Math.sqrt(r*r+o*o),l=Math.sqrt(i*i+n*n),c=s/l;this.zValue=c*1200-600,this.cachedZValue=this.zValue;const u=.2+(this.zValue+600)/1200*2.3;++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const p=this.images[this.imgPosition];J.killTweensOf(p.DOM.el),J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).set(this.DOM.el,{perspective:1e3},0).fromTo(p.DOM.el,{opacity:1,z:0,scale:1+this.cachedZValue/1e3,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((f=p.rect)==null?void 0:f.width)??0)/2,y:this.cacheMousePos.y-(((g=p.rect)==null?void 0:g.height)??0)/2,rotationX:this.cachedRotation.x,rotationY:this.cachedRotation.y,filter:`brightness(${u})`},{duration:1,ease:"expo",scale:1+this.zValue/1e3,x:this.mousePos.x-(((y=p.rect)==null?void 0:y.width)??0)/2,y:this.mousePos.y-(((w=p.rect)==null?void 0:w.height)??0)/2,rotationX:this.rotation.x,rotationY:this.rotation.y},0).to(p.DOM.el,{duration:.4,ease:"power2",opacity:0,z:-800},.3)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}const lb={1:IF,2:AF,3:MF,4:zF,5:FF,6:RF,7:NF,8:OF};function $F({items:t=[],variant:e=1}){const i=q.useRef(null);return q.useEffect(()=>{if(!i.current)return;const n=lb[e]||lb[1];new n(i.current)},[e,t]),a.jsx("div",{className:"content",ref:i,children:t.map((n,r)=>a.jsx("div",{className:"content__img",children:a.jsx("div",{className:"content__img-inner",style:{backgroundImage:`url(${n})`}})},r))})}const BF="/Nooshin-Shahsavan-portfolio/assets/man-8.dfac0a8a.JPG",VF="/Nooshin-Shahsavan-portfolio/assets/after.17bba519.png",WF="/Nooshin-Shahsavan-portfolio/assets/indesign.b58223e6.png",UF="/Nooshin-Shahsavan-portfolio/assets/illustrator.ba50f230.png",HF="/Nooshin-Shahsavan-portfolio/assets/photoshop.d6232244.png",YF="/Nooshin-Shahsavan-portfolio/assets/pre.272b49ca.png",GF="/Nooshin-Shahsavan-portfolio/assets/figma.0a1384c5.png",XF="/Nooshin-Shahsavan-portfolio/assets/react.63bbbe78.png",ZF="/Nooshin-Shahsavan-portfolio/assets/html.f61f5ecc.png",qF="/Nooshin-Shahsavan-portfolio/assets/css.fd98993d.png",QF="/Nooshin-Shahsavan-portfolio/assets/excel.0cfcc5e8.png",KF="/Nooshin-Shahsavan-portfolio/assets/word.ff1a3fc2.png",JF="/Nooshin-Shahsavan-portfolio/assets/power.6e31dae5.png",er=[{src:VF,alt:"After Effects"},{src:WF,alt:"InDesign"},{src:UF,alt:"Illustrator"},{src:HF,alt:"Photoshop"},{src:YF,alt:"Premiere"},{src:GF,alt:"Figma"},{src:XF,alt:"React"},{src:ZF,alt:"HTML"},{src:qF,alt:"CSS"},{src:QF,alt:"Excel"},{src:KF,alt:"Word"},{src:JF,alt:"PowerPoint"}],cb=[0,1,2,3,4,5],db=[10,9,11],ub=[7,8,6],eR=240,tR=160,iR=80;function b0(t,e=0){return Array(t).fill(0).map((i,n)=>360/t*n+e)}const nR=()=>{const t=b0(cb.length,-90),e=b0(db.length,0),i=b0(ub.length,0);return a.jsxs("div",{className:"skill-bubbles-outer",children:[a.jsx("h2",{className:"skills-title",children:"My Skills"}),a.jsx("div",{className:"orbit orbit-outer"}),a.jsx("div",{className:"orbit orbit-middle"}),a.jsx("div",{className:"orbit orbit-inner"}),cb.map((n,r)=>a.jsx("div",{className:"orbit-parent orbit-parent-outer",style:{"--orbit-radius":`${eR}px`,"--orbit-rotate":`${t[r]}deg`,"--orbit-dur":"38s",zIndex:3},children:a.jsx("div",{className:"bubble",children:a.jsx("img",{src:er[n].src,alt:er[n].alt,className:"bubble-img",draggable:!1})})},er[n].src)),db.map((n,r)=>a.jsx("div",{className:"orbit-parent orbit-parent-middle",style:{"--orbit-radius":`${tR}px`,"--orbit-rotate":`${e[r]}deg`,"--orbit-dur":"48s",zIndex:3},children:a.jsx("div",{className:"bubble",children:a.jsx("img",{src:er[n].src,alt:er[n].alt,className:"bubble-img",draggable:!1})})},er[n].src)),ub.map((n,r)=>a.jsx("div",{className:"orbit-parent orbit-parent-inner",style:{"--orbit-radius":`${iR}px`,"--orbit-rotate":`${i[r]}deg`,"--orbit-dur":"60s",zIndex:3},children:a.jsx("div",{className:"bubble",children:a.jsx("img",{src:er[n].src,alt:er[n].alt,className:"bubble-img",draggable:!1})})},er[n].src)),a.jsx("style",{children:`
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
      `})]})},rR=vd`
  from { 
    transform: translate3d(0, 0, 0);
  }
  to { 
    transform: translate3d(0, 200px, 0);
  }
`,oR=m.div`
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
`,sR=m.div`
  animation: ${rR} 0.5s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(.5,0.05,1,.5);
  animation-iteration-count: infinite;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,aR=m.svg`
  width: 100%;
  height: auto;
  max-height: 100%;
`,lR=()=>a.jsx(oR,{children:a.jsx(sR,{children:a.jsxs(aR,{version:"1.1",viewBox:"0 0 833 637",children:[a.jsx("style",{type:"text/css",children:`
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
                C326,495.3,324.3,497,322.3,497z`})]})]})]})})}),cR=m.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background: #191c24;
  color: #ffffff;
  position: relative;
  z-index: 1;
`,dR=m.div`
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
`,uR=m(O.div)`
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
`,hR=m.h2`
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
`,$l=m.p`
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
`,pR=m(O.div)`
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
`,fR=m.div`
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
`,mR=()=>a.jsx(cR,{children:a.jsxs(dR,{children:[a.jsxs(uR,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:[a.jsx(hR,{children:"Why a Cactus? 🌵"}),a.jsx($l,{children:"You might be wondering why my logo is a cactus!"}),a.jsx($l,{children:"Well, I'm not a cactus 😄 — but I chose the shape of a cactus for my logo because I truly see parts of myself in it."}),a.jsx($l,{children:"I'm someone who keeps going and stays strong no matter the circumstances. I'm patient and resilient."}),a.jsx($l,{children:'I always try to adapt to my surroundings and stay "green" — full of life and growth.'}),a.jsx($l,{children:"That's exactly why I chose the cactus as my personal symbol 🌵✨"})]}),a.jsx(pR,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut",delay:.2},children:a.jsx(fR,{children:a.jsx(lR,{})})})]})}),gR=m(O.button)`
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
`,xR=m.div`
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
`,wR=({text:t,title:e="About Me"})=>{const[i,n]=T.useState(!1),[r,o]=T.useState(!1),[s,l]=T.useState(null),c=T.useRef(null);T.useEffect(()=>{if("speechSynthesis"in window){o(!0);const u=()=>{const p=window.speechSynthesis.getVoices(),f=p.find(w=>w.name.includes("Microsoft Zira - English (United States)")),g=p.find(w=>w.name.includes("Zira")),y=p.find(w=>w.name.includes("female")||w.name.includes("Female")||w.name.includes("Samantha")||w.name.includes("Victoria")||w.name.includes("Karen")||w.name.includes("Tessa")||w.name.includes("Alice"));f?l(f):g?l(g):y?l(y):p.length>0&&l(p[0])};u(),window.speechSynthesis.onvoiceschanged=u}},[]),T.useEffect(()=>()=>{c.current&&window.speechSynthesis.cancel()},[]);const d=()=>{if(r)if(i)window.speechSynthesis.cancel(),n(!1);else{const u=new SpeechSynthesisUtterance(t);u.rate=1,u.pitch=1,u.volume=1,s&&(u.voice=s),u.onstart=()=>{n(!0)},u.onend=()=>{n(!1)},u.onerror=()=>{n(!1)},c.current=u,window.speechSynthesis.speak(u)}};return a.jsx(gR,{$isPlaying:i,onClick:d,disabled:!r,whileHover:{scale:1.05},whileTap:{scale:.95},title:i?"Stop audio":"Play audio",children:a.jsx(xR,{$isPlaying:i,children:i?"❚❚":"▶"})})},vR="/Nooshin-Shahsavan-portfolio/assets/man-1.7e49cf66.jpg",yR="/Nooshin-Shahsavan-portfolio/assets/man-2.b67702f5.jpg",bR="/Nooshin-Shahsavan-portfolio/assets/man-3.c8b0d5a8.jpg",kR="/Nooshin-Shahsavan-portfolio/assets/man-5.2ad51805.jpg",jR="/Nooshin-Shahsavan-portfolio/assets/man-6.6d44b2d6.jpg",SR="/Nooshin-Shahsavan-portfolio/assets/man-7.8e334f50.jpg",DR=Pr`
  html, body {
    overflow-x: hidden !important;
    margin: 0;
    padding: 0;
    background: #191c24;
  }
`,_R=m.div`
  width: 100%;
  min-height: 100vh;
  background: #191c24;
  position: relative;
  z-index: 0;
  box-sizing: border-box;
  overflow-x: hidden;
`,hb=m.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: #191c24;
  z-index: 1;
`,CR=m.div`
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
`,PR=m.h2`
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
`,TR=m.div`
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
`,ER=m.div`
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
`,IR=m.div`
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
`,AR=m.div`
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
`,MR=m(O.div)`
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
`,zR=m.div`
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
`,FR=m(O.div)`
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
`,RR=()=>{const{scrollYProgress:t}=EA();zl(t,[.1,.2],[0,1]),zl(t,[.1,.2],[50,0]),zl(t,[.15,.25],[0,1]),zl(t,[.15,.25],[50,0]),zl(t,[.15,.25],[5,0]);const e=[{title:"Who I am",content:"Hey! my name is Nooshin. I'm a Graphic and UI/UX Designer with a strong background in visual communication and branding. My journey began with studying graphic design in high school, followed by a degree in Visual Communication and Art Research in my home country. After moving to Canada, I continued to expand my skills by training at BCIT, with a focus on usability and front-end development tools. I strive to combine creativity with functionality—designing user-centered experiences that are not only visually engaging but also fast-paced, organized, and intuitive."},{title:"What I've Done",content:"I've worked with trade companies like G_Art Brand and freelanced for small businesses such as S.B.S and VEEN. My projects have covered everything from brand identity and packaging to social campaigns and digital content. I also taught graphic design software for 10 years. These experiences taught me how to adapt designs to real world constraints, communicate clearly across different formats, and balance creativity with purpose."},{title:"How I Work",content:"My design process starts with understanding the client's mission, values, target audience, and any visual preferences. I then organize tasks in Trello to plan the project efficiently. Using research and insights, I develop a mind map in Miro or FigJam to shape the creative direction. I build a consistent visual identity by choosing colors based on color psychology, selecting typography, and designing a logo that reflects the brand's personality. Finally, I create mockups using Photoshop, Illustrator, InDesign, and After Effects, present design options to the client, and refine them based on feedback for the final delivery."},{title:"Why I Design",content:"I design to solve problems and tell stories—visually and meaningfully. Design lets me combine creativity with strategy to create experiences that not only look good but also connect with people and serve a purpose. Whether it's building a brand, improving a user's journey, or crafting visual content, I enjoy turning ideas into organized, impactful visuals that make communication clearer and more engaging."}],i=e.map(r=>`${r.title}. ${r.content}`).join(" "),n=[vR,yR,bR,kR,jR,SR];return a.jsxs(_R,{children:[a.jsx(rt,{title:"About Nooshin Shahsavan | Creative Designer & Developer",description:"Learn more about Nooshin Shahsavan, a passionate graphic designer and UX/UI designer with expertise in brand design, creative solutions, and innovative design thinking.",keywords:"about Nooshin Shahsavan, graphic designer, UX/UI designer, brand designer, creative portfolio, design skills",image:"/src/assets/about/man-8.jpg"}),a.jsx(DR,{}),a.jsx(L3,{}),a.jsx(hb,{style:{background:"#191c24",display:"flex",justifyContent:"center",alignItems:"center"},children:a.jsxs(ER,{children:[a.jsx(IR,{children:a.jsx(AR,{children:a.jsx(MR,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:a.jsx("img",{src:BF,alt:"About me image"})})})}),a.jsx(zR,{children:a.jsxs(FR,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut",delay:.2},children:[a.jsx(wR,{text:i,title:"About Me"}),e.map((r,o)=>a.jsxs("div",{children:[o===0?a.jsx("h2",{children:r.title}):a.jsx("h3",{children:r.title}),a.jsx(EF,{radius:100,duration:1.2,speed:.5,scrambleChars:".:",children:a.jsx("p",{children:r.content})})]},o))]})})]})}),a.jsx(nR,{}),a.jsx(mR,{}),a.jsx(hb,{children:a.jsxs(CR,{children:[a.jsx(PR,{children:"My interests and I"}),a.jsx(TR,{children:"Drag the mouse to see me 🥰"}),a.jsx($F,{items:n,variant:1})]})}),a.jsx(p4,{})]})},LR=vd`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`,NR=m.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`,OR=m.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
`,$R=m.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 -1px #fff;
`,g4=m(bn)`
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
`,BR=m.div`
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

  ${g4}:hover + & {
    transform: translate3d(0, 0%, 0);
  }
`,VR=m.div`
  height: 100%;
  width: 200%;
  display: flex;
  transform: translateX(0);
`,WR=m.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  width: 200%;
  will-change: transform;
  animation: ${LR} 15s linear infinite;
`,UR=m.span`
  color: #060606;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 4vh;
  line-height: 1.2;
  padding: 1vh 1vw 0;
`,HR=m.div`
  width: 200px;
  height: 7vh;
  margin: 2em 2vw;
  padding: 1em 0;
  border-radius: 50px;
  background-image: url(${t=>t.imageUrl});
  background-size: cover;
  background-position: 50% 50%;
`;function YR({link:t,text:e,image:i}){const n=q.useRef(null),r=q.useRef(null),o=q.useRef(null),s={duration:.6,ease:"expo"},l=(f,g,y,w)=>{const D=c(f,g,y/2,0),j=c(f,g,y/2,w);return D<j?"top":"bottom"},c=(f,g,y,w)=>{const D=f-y,j=g-w;return D*D+j*j},d=f=>{if(!n.current||!r.current||!o.current)return;const g=n.current.getBoundingClientRect(),y=f.clientX-g.left,w=f.clientY-g.top,D=l(y,w,g.width,g.height);J.timeline({defaults:s}).set(r.current,{y:D==="top"?"-101%":"101%"},0).set(o.current,{y:D==="top"?"101%":"-101%"},0).to([r.current,o.current],{y:"0%"},0)},u=f=>{if(!n.current||!r.current||!o.current)return;const g=n.current.getBoundingClientRect(),y=f.clientX-g.left,w=f.clientY-g.top,D=l(y,w,g.width,g.height);J.timeline({defaults:s}).to(r.current,{y:D==="top"?"-101%":"101%"},0).to(o.current,{y:D==="top"?"101%":"-101%"},0)},p=Array.from({length:4}).map((f,g)=>a.jsxs(q.Fragment,{children:[a.jsx(UR,{children:e}),a.jsx(HR,{imageUrl:i})]},g));return a.jsxs($R,{ref:n,children:[a.jsx(g4,{to:t,onMouseEnter:d,onMouseLeave:u,children:e}),a.jsx(BR,{ref:r,children:a.jsx(VR,{ref:o,children:a.jsx(WR,{"aria-hidden":"true",children:p})})})]})}function GR({items:t=[]}){return a.jsx(NR,{children:a.jsx(OR,{children:t.map((e,i)=>a.jsx(YR,{...e},i))})})}const $s=()=>{const t=()=>{const e=document.querySelector("#sbs-overview, #overview, #veen-first, #deli-first, #zar-first");e?e.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})};return a.jsx("button",{onClick:t,style:{position:"fixed",bottom:"24px",right:"24px",width:"48px",height:"48px",backgroundColor:"rgba(255, 255, 255, 0.9)",borderRadius:"50%",cursor:"pointer",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",color:"#333",backdropFilter:"blur(10px)",boxShadow:"0 2px 8px rgba(0,0,0,0.1)",transition:"all 0.2s ease",border:"1px solid rgba(0, 0, 0, 0.1)"},"aria-label":"Scroll to top",onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-2px)",e.currentTarget.style.boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.1)"},children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M12 4L12 20M12 4L6 10M12 4L18 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})},XR="/Nooshin-Shahsavan-portfolio/assets/work1.f00d3214.png",ZR="/Nooshin-Shahsavan-portfolio/assets/work3.4049715c.png",qR="/Nooshin-Shahsavan-portfolio/assets/work6.bb17f127.png",QR="/Nooshin-Shahsavan-portfolio/assets/work4.64f58ae6.png",KR=m.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #060606;
  position: relative;
  padding: 0;
`,JR=m.div`
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
`;m(O.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;m(O(bn))`
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
`;m(O.div)`
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
`;const e7=()=>{const t=[{link:"/work/sbs",text:"SBS Project",image:XR},{link:"/work/veen",text:"Veen Project",image:ZR},{link:"/work/delicato",text:"Delicato Project",image:qR},{link:"/work/zar",text:"Zar Project",image:QR},{link:"/work/workday",text:"workday-UX/UI",image:h4},{link:"/work/project6",text:"UX-UI-2",image:"https://picsum.photos/600/400?random=6"},{link:"/work/fun",text:"School Projects",image:"funproject"}];return a.jsxs(a.Fragment,{children:[a.jsx(rt,{title:"Work Portfolio | Nooshin Shahsavan - Creative Projects",description:"Explore Nooshin Shahsavan's creative work portfolio featuring graphic design, brand design, UX/UI projects, and innovative design solutions.",keywords:"work portfolio, graphic design projects, brand design, UX/UI design, creative projects, Nooshin Shahsavan",image:"/src/assets/home/workhome.png"}),a.jsx(ZS,{}),a.jsx(KR,{children:a.jsxs(JR,{children:[a.jsx(GR,{items:t}),a.jsx($s,{})]})})]})},t7=m.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`,i7=m(O.div)`
  background: ${({theme:t})=>t.cardBackground};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,n7=m(O.a)`
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
`,r7=m.div`
  color: var(--text);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`,o7=()=>a.jsxs(t7,{children:[a.jsx(rt,{title:"Resume | Nooshin Shahsavan - Professional Experience",description:"View Nooshin Shahsavan's professional resume and experience in graphic design, brand design, and UX/UI design. Download CV and view qualifications.",keywords:"resume, CV, Nooshin Shahsavan, graphic designer, professional experience, qualifications, skills",image:"/src/assets/logoweb.png"}),a.jsxs(i7,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[a.jsx(O.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},style:{color:"var(--accent1)",fontSize:"2.5rem",marginBottom:"2rem"},children:"Resume"}),a.jsx(r7,{children:a.jsxs(O.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[a.jsx("h3",{style:{color:"var(--accent1)",marginBottom:"0.5rem",fontSize:"2rem"},children:"Nooshin Shahsavan"}),a.jsxs("p",{style:{marginBottom:"1rem",color:"var(--text)",fontSize:"1rem"},children:[a.jsx("strong",{children:"Graphic Designer – Creative | Detail Oriented | Marketing-social media"}),a.jsx("br",{}),"Vancouver, BC | 604.500.5515 | Nooshin.shahsavan.ca@.com"]}),a.jsx("h4",{style:{color:"var(--accent1)",marginBottom:"0.5rem",marginTop:"2rem"},children:"PROFILE SUMMARY"}),a.jsx("p",{style:{marginBottom:"1.5rem",lineHeight:"1.6"},children:"Creative and detail-oriented Graphic Designer with over 3 years of experience producing high-quality print and digital assets. Skilled in layout production, file preparation, proofing, and managing multi-version (zoning) marketing materials to ensure accuracy and brand consistency. Proficient in Adobe Creative Suite (InDesign, Illustrator, Photoshop, Acrobat) and Figma, with a strong eye for typography and visual consistency. Experienced collaborating with cross-functional teams—including marketing, photography, merchandising, and external vendors—to deliver final print- and digital-ready files on time."}),a.jsx("h4",{style:{color:"var(--accent1)",marginBottom:"0.5rem"},children:"SKILLS"}),a.jsxs("ul",{style:{marginBottom:"1.5rem",lineHeight:"1.6"},children:[a.jsx("li",{children:"Adobe InDesign, Illustrator, Photoshop, Acrobat"}),a.jsx("li",{children:"Print Production & File Preparation"}),a.jsx("li",{children:"Layout Design & Typography"}),a.jsx("li",{children:"Proofing & Versioning (Zoning)"}),a.jsx("li",{children:"Digital Media & Branding"}),a.jsx("li",{children:"Motion Graphics (Adobe After Effects)"}),a.jsx("li",{children:"Time Management & Multitasking"}),a.jsx("li",{children:"Collaboration & Communication"}),a.jsx("li",{children:"Attention to Detail & Accuracy"})]}),a.jsx("h4",{style:{color:"var(--accent1)",marginBottom:"0.5rem"},children:"RELEVANT WORK EXPERIENCE"}),a.jsxs("div",{style:{marginBottom:"1.5rem"},children:[a.jsxs("p",{style:{marginBottom:"0.5rem"},children:[a.jsx("strong",{children:"Freelance Graphic Designer"})," | Self-employed | Apr 2023 - Present"]}),a.jsxs("ul",{style:{marginLeft:"1rem",lineHeight:"1.6"},children:[a.jsx("li",{children:"Produced digital and print-ready layouts for marketing materials, including social media ads, banners, and branded assets."}),a.jsx("li",{children:"Designed infographics, motion graphics (Adobe After Effects), and promotional visuals, contributing to a 50% increase in engagement for clients."}),a.jsx("li",{children:"Ensured accuracy and visual consistency across multiple versions and formats of deliverables."})]})]}),a.jsxs("div",{style:{marginBottom:"1.5rem"},children:[a.jsxs("p",{style:{marginBottom:"0.5rem"},children:[a.jsx("strong",{children:"Graphic Designer"})," | GART brand | Apr 2018 – Jun 2022"]}),a.jsxs("ul",{style:{marginLeft:"1rem",lineHeight:"1.6"},children:[a.jsx("li",{children:"Designed brochures, catalogs, and promotional print materials aligned with brand guidelines using Adobe InDesign, Illustrator, and Photoshop."}),a.jsx("li",{children:"Managed layout production and final file preparation for international exhibitions and digital marketing campaigns."}),a.jsx("li",{children:"Served as a final checkpoint for creative outputs, proofing marketing materials and verifying accuracy of zoning (multi-version) documents."}),a.jsx("li",{children:"Liaised closely with marketing, photography, merchandising teams, and external vendors to produce print- and digital-ready files on time."})]})]}),a.jsxs("div",{style:{marginBottom:"1.5rem"},children:[a.jsxs("p",{style:{marginBottom:"0.5rem"},children:[a.jsx("strong",{children:"Computer Graphic Teacher"})," | Parvin Etesami Art School | Sep 2012 – Jun 2022"]}),a.jsxs("ul",{style:{marginLeft:"1rem",lineHeight:"1.6"},children:[a.jsx("li",{children:"Instructed students on Adobe Photoshop, Illustrator, After Effects, and Figma with emphasis on practical design and production skills."}),a.jsx("li",{children:"Developed lesson plans, provided individual mentorship, and assessed student projects to support creative growth."})]})]}),a.jsx("h4",{style:{color:"var(--accent1)",marginBottom:"0.5rem"},children:"EDUCATION"}),a.jsxs("ul",{style:{marginBottom:"1.5rem",lineHeight:"1.6"},children:[a.jsxs("li",{children:[a.jsx("strong",{children:"New Media Design Diploma"})," | BCIT, Downtown, BC | May 2025"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Master's degree in art research"})," | Azad University, Tehran, Iran | Feb 2014"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Bachelor's degree in visual communication"})," | Kamalolmolk, Noshahr, Iran | Feb 2011"]})]})]})}),a.jsx(n7,{href:"/resume.pdf",download:!0,whileHover:{scale:1.05},whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:"Download Full Resume (PDF)"})]})]}),s7="/Nooshin-Shahsavan-portfolio/assets/pinki.89ab7c2e.mp4",a7=m.section`
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
`,l7=m.h1`
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
`,c7=m.p`
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
`,d7=m.div`
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
`,u7=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,h7=m.div`
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
`,p7=()=>a.jsxs(a7,{children:[a.jsx(l7,{children:"S.B.S —  Overview"}),a.jsx(c7,{children:"For this project, I developed a complete visual identity system for S.B.S (Set by Sei) a carefree clothing brand based in Vancouver. The brand aims to provide affordable fashion that reflects Gen Z values: expressive, relaxed, fun, and effortlessly wearable."}),a.jsx(d7,{children:a.jsx(u7,{src:s7,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"S.B.S project video"})}),a.jsxs(h7,{children:[a.jsxs(gu,{children:[a.jsx(xu,{children:"Role"}),a.jsx(wu,{children:"Brand Designer"})]}),a.jsxs(gu,{children:[a.jsx(xu,{children:"Tools"}),a.jsx(wu,{children:"Illustrator, After Effects, Photoshop"})]}),a.jsxs(gu,{children:[a.jsx(xu,{children:"Timeline"}),a.jsx(wu,{children:"3 weeks"})]}),a.jsxs(gu,{children:[a.jsx(xu,{children:"Year"}),a.jsx(wu,{children:"2023"})]})]})]}),f7=m.section`
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
`,m7=m.p`
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
`,g7=m.div`
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
`,x7=()=>a.jsxs(f7,{children:[a.jsx(m7,{children:"My role involved designing the brand identity (logo, color palette, typeface), crafting a cohesive set of custom illustrations for print and Black Friday social media campaigns. The result is a bold, playful, and youthful brand identity that captures the vibrant energy of its audience."}),a.jsx(g7,{children:"Aim → Create a bold identity → Capture Gen Z spirit → Make fashion fun and affordable"})]}),Bo=m.span`
  color: #fabfb7;
  font-weight: 400;
`,w7=[{title:"Logo",description:a.jsxs(a.Fragment,{children:["Design a flexible logo that reflects ",a.jsx(Bo,{children:"freedom"}),", ",a.jsx(Bo,{children:"dance"}),", and ",a.jsx(Bo,{children:"carefreeness"}),", and can be used in every graphic."]})},{title:"Color Palette",description:a.jsxs(a.Fragment,{children:["Choose ",a.jsx(Bo,{children:"soft"}),", ",a.jsx(Bo,{children:"transparent"})," colors to support line-based graphics and reflect party lights."]})},{title:"Typography",description:"Find a typeface that matches the logo's form and works well on digital and print."},{title:"Illustration",description:a.jsxs(a.Fragment,{children:["Create graphics that show ",a.jsx(Bo,{children:"movement"})," and ",a.jsx(Bo,{children:"Gen Z mood"}),", blending with the logo's curves."]})}],v7=m.section`
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
`,y7=m.h2`
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
`,b7=m.p`
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
`,k7=m.div`
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
`,j7=m.div`
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
`,S7=m.div`  font-size: 1.01rem;
  font-weight: 600;
  color: #888;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-align: center;
`,D7=m.div`
  font-weight: 400;
  font-size: 1.08rem;
  color: #222;
  line-height: 1.5;
  letter-spacing: -0.1px;
  text-align: center;
`;function _7(){return a.jsxs(v7,{children:[a.jsx(y7,{children:"Key Challenges"}),a.jsx(b7,{children:"The project required solving four main creative challenges to build a cohesive, expressive brand identity."}),a.jsx(k7,{children:w7.map(t=>a.jsxs(j7,{children:[a.jsx(S7,{children:t.title}),a.jsx(D7,{children:t.description})]},t.title))})]})}const C7="/Nooshin-Shahsavan-portfolio/assets/s-logo1.3846184d.png",P7="/Nooshin-Shahsavan-portfolio/assets/s-logo2.d5ba2dd5.mp4",T7="/Nooshin-Shahsavan-portfolio/assets/s-logo3.0b24d28b.png",E7=m.section`
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
`,I7=m.h2`
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
`,A7=m.div`
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
`,pb=m.div`
    font-size: 0.98rem;
  color: #888;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 1.2em;
  margin-bottom: 0.3em;
`,M7=m.div`
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
`,z7=m.video`
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
`,F7=m.div`
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
`,fb=m.img`
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
`,k0=m.div`
  font-size: 0.95rem;
  color: #888;
  text-align: center;
  margin-top: 0.5em;
`,Vo=m.span`
  color: #e4572e;
  font-weight: 400;
`,R7=()=>a.jsxs(E7,{children:[a.jsx(I7,{children:"Logo Design"}),a.jsxs(A7,{children:[a.jsx(pb,{children:"I should"}),"Design a logo that reflects the values of ",a.jsx(Vo,{children:"freedom"}),", ",a.jsx(Vo,{children:"movement"}),", and ",a.jsx(Vo,{children:"carefreeness"}),", and also functions as part of every clothing graphic.",a.jsx(pb,{children:"So"}),"To design a logo that reflects the brand's core values of ",a.jsx(Vo,{children:"freedom"}),", ",a.jsx(Vo,{children:"movement"}),", and ",a.jsx(Vo,{children:"carefreeness"}),", I began with an image of a carefree person jumping  a moment that perfectly captures the brand's vibe. ",a.jsx(Vo,{children:"Inspired by this expressive pose"}),", I first sketched the figure and then simplified it into flowing line work."]}),a.jsxs(M7,{children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(z7,{src:P7,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"S.B.S Main Logo Animation"}),a.jsx(k0,{children:"Main Logo (Animated)"})]}),a.jsxs(F7,{children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(fb,{src:C7,alt:"S.B.S Logo Static"}),a.jsx(k0,{children:"Static Logo"})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(fb,{src:T7,alt:"S.B.S Logo Variation"}),a.jsx(k0,{children:"Logo Variation"})]})]})]})]}),L7="/Nooshin-Shahsavan-portfolio/assets/sbs-type.f385c001.mp4",N7=m.section`
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
`,O7=m.h2`
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
`,$7=m.p`
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
`,B7=m.div`
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
`,V7=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,W7=()=>a.jsxs(N7,{children:[a.jsx(O7,{children:"Typography"}),a.jsx($7,{children:"The primary typeface, Gyst Variable, visually connects with the logo's curves and is used for headers and expressive brand moments. Noto Sans is used for body text, ensuring clarity and legibility across all platforms."}),a.jsx(B7,{children:a.jsx(V7,{src:L7,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Typography video"})})]}),U7="/Nooshin-Shahsavan-portfolio/assets/color-sbs.03773038.mp4",H7=m.section`
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
`,Y7=m.h2`
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
`,G7=m.div`
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
`;const X7=m.div`
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
`,Z7=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,q7=()=>{const t=T.useRef(null),[e,i]=T.useState(!1);return T.useEffect(()=>{const n=()=>{if(!e&&t.current){const r=t.current.getBoundingClientRect();r.top<window.innerHeight&&r.bottom>0&&(t.current.play(),i(!0))}};return window.addEventListener("scroll",n),n(),()=>window.removeEventListener("scroll",n)},[e]),a.jsxs(H7,{children:[a.jsx(Y7,{children:"Color Palette"}),a.jsx(G7,{children:"The graphics are based on lines to show movement and flow, so I selected nude and soft colors that are not too bold. This allows the lines to stay visually dominant and visible. The palette also includes transparent tones, symbolizing party lights and ambiance, supporting the illustrations without distraction."}),a.jsx(X7,{children:a.jsx(Z7,{ref:t,src:U7,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Color palette video"})})]})},Q7="/Nooshin-Shahsavan-portfolio/assets/cap-intro2.1af16ea2.mp4",K7="/Nooshin-Shahsavan-portfolio/assets/print2.17cf24de.mp4",J7=m.section`
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
`,eL=m.div`
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
`,mb=m.div`
  flex: 1 1 0;
  display: flex;
  justify-content: center;
`,gb=m.video`
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
`;const tL=()=>a.jsx(J7,{children:a.jsxs(eL,{children:[a.jsx(mb,{children:a.jsx(gb,{src:Q7,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Cap Intro2 Video"})}),a.jsx(mb,{children:a.jsx(gb,{src:K7,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Print2 Video"})})]})}),iL="/Nooshin-Shahsavan-portfolio/assets/sbs-bag1.13c78bde.jpg",nL=m.section`
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
`,rL=m.h2`
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
`,oL=m.img`
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
`,sL=()=>a.jsxs(nL,{children:[a.jsx(rL,{children:"Mockups"}),a.jsx(oL,{src:iL,alt:"SBS Tote Bag Mockup"})]}),aL="/Nooshin-Shahsavan-portfolio/assets/sbs-tag.68232c39.jpg",lL="/Nooshin-Shahsavan-portfolio/assets/sbs-box.e26aaf9d.jpg",cL=m.section`
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
`,dL=m.div`
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
`,xb=m.img`
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
`,uL=()=>a.jsx(cL,{children:a.jsxs(dL,{children:[a.jsx(xb,{src:aL,alt:"SBS Tote Bag Mockup 2"}),a.jsx(xb,{src:lL,alt:"SBS Box Mockup"})]})}),hL="/Nooshin-Shahsavan-portfolio/assets/allin1.fa7d6a25.mp4",pL=m.section`
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
`;const fL=m.div`
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
`,mL=m.video`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
`,gL=()=>a.jsx(pL,{children:a.jsx(fL,{children:a.jsx(mL,{src:hL,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,"aria-label":"SBS All-in-One Video",preload:"metadata"})})}),xL="/Nooshin-Shahsavan-portfolio/assets/storyAll.989950ea.mp4",wL=m.section`
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
`,vL=m.video`
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
`,yL=()=>a.jsx(wL,{children:a.jsx(vL,{src:xL,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Story Video",preload:"metadata"})}),bL="/Nooshin-Shahsavan-portfolio/assets/story5.e9f81e75.mp4",kL=m.section`
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
`,jL=m.video`
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
`,SL=()=>a.jsx(kL,{children:a.jsx(jL,{src:bL,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Story Video",preload:"metadata"})}),DL="/Nooshin-Shahsavan-portfolio/assets/s1.2fe16319.png",_L="/Nooshin-Shahsavan-portfolio/assets/s2.606ae332.png",CL="/Nooshin-Shahsavan-portfolio/assets/s3.2e5423d9.png",PL="/Nooshin-Shahsavan-portfolio/assets/s4.691552ab.png",TL="/Nooshin-Shahsavan-portfolio/assets/8s.efb2d643.png",EL=[DL,_L,CL,PL,TL],IL=m.section`
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
`,AL=m.h2`
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
`,j0=m.p`
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
`,ML=m.div`
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
`,zL=m.div`
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
`,FL=m.img`  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`,Js=m.span`
  color: #e4572e;
  font-weight: 400;
`;function RL(){return a.jsxs(IL,{children:[a.jsx(AL,{children:"Logo Design Process"}),a.jsx(j0,{children:"Exploring logo concepts and refinements."}),a.jsxs(j0,{children:["I noticed a natural ",a.jsx(Js,{children:"connection"})," between the shape of the body and the ",a.jsx(Js,{children:"curves"})," of the letter ",a.jsx(Js,{children:'"S"'}),", which led me to explore how movement could be integrated into the typography. Using the motion and energy from the image, I stylized the letters ",a.jsx(Js,{children:"S.B.S"})," into a unified, dynamic form. The final logo features curved lines that suggest motion and emotional freedom, making the mark feel alive and expressive."]}),a.jsxs(j0,{children:["The result is a logo that combines all three ",a.jsx(Js,{children:"brand initials"})," (",a.jsx(Js,{children:"S.B.S"}),") into a single, fluid design that works seamlessly across clothing graphics and brand applications."]}),a.jsx(ML,{children:EL.map((t,e)=>a.jsx(zL,{children:a.jsx(FL,{src:t,alt:`logo-process-${e}`,loading:"lazy"})},t+e))})]})}const LL="/Nooshin-Shahsavan-portfolio/assets/s-88.0805e3b5.png",x4="/Nooshin-Shahsavan-portfolio/assets/deli9.875dc27d.jpg",NL="/Nooshin-Shahsavan-portfolio/assets/mveen5.edb6dd91.png",w4="/Nooshin-Shahsavan-portfolio/assets/workday-phone.bd948a42.png",vu=[{image:LL,link:"/work/sbs",description:"SBS",alt:"SBS Work"},{image:x4,link:"/work/delicato",description:"Delicato",alt:"Deli Project"},{image:NL,link:"/work/veen",description:"Veen",alt:"Veen Shop"},{image:tw,link:"/work/zar",description:"Zar",alt:"Zar Gallery"},{image:w4,link:"/work/workday",description:"Workday App",alt:"Workday App"},{image:u4,link:"/work/UX-UI-2",description:"SaveFood App",alt:"saveFood App"},{image:yp,link:"/work/fun",description:"School Projects",alt:"School Projects"}],Bs=({titleColor:t="#000000"})=>{const e=wd(),i=hS(),[n,r]=T.useState(!1),o=vu.findIndex(c=>e.pathname.startsWith(c.link)),s=o>-1?[vu[o],...vu.filter((c,d)=>d!==o)]:vu,l=c=>{i(c),r(!1),window.scrollTo(0,0)};return a.jsxs("div",{className:"menu-work-container",children:[a.jsx("h2",{className:"menu-work-title",style:{color:t},children:"Next Project"}),a.jsx("div",{className:"menu-work-grid",children:s.map((c,d)=>a.jsx("div",{className:`menu-work-cube${d===0?" active":""}`,onClick:()=>l(c.link),tabIndex:0,role:"button","aria-label":`Go to ${c.alt}`,children:a.jsxs("div",{className:"menu-work-img-wrapper",children:[a.jsx("img",{src:c.image,alt:c.alt,className:"menu-work-img"}),a.jsx("div",{className:"menu-work-desc",children:a.jsx("span",{children:c.description})})]})},c.link))})]})},OL="/Nooshin-Shahsavan-portfolio/assets/sbsintro.d8bee55b.mp4",$L=m.section`
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
`,BL=m.video`
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
`,VL=()=>a.jsx($L,{children:a.jsx(BL,{src:OL,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Intro Video",preload:"metadata"})}),WL="/Nooshin-Shahsavan-portfolio/assets/story3.bd853697.mp4",UL=m.section`
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
`,HL=m.video`
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
`,YL=()=>a.jsx(UL,{children:a.jsx(HL,{src:WL,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Social Media Story 3",preload:"metadata"})}),GL="/Nooshin-Shahsavan-portfolio/assets/story-1.e26e9252.mp4",XL=m.section`
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
`,ZL=m.video`
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
`,qL=()=>a.jsx(XL,{children:a.jsx(ZL,{src:GL,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Social Media Story 1",preload:"metadata"})}),QL=m.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  @media (max-width: 900px) {
    padding: 1.5rem;
  }
`,KL=m(O.div)`
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
`,JL=m.span`
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
`,eN=(t,e,i=!0)=>({from:e,to:e+360,ease:"linear",duration:t,type:"tween",repeat:i?1/0:0}),ea=(t,e)=>({rotate:eN(t,e),scale:{type:"spring",damping:20,stiffness:300}}),tN=({text:t,spinDuration:e=20,onHover:i="speedUp",className:n=""})=>{const r=Array.from(t),o=zA(),s=x5(0);T.useEffect(()=>{const d=s.get();o.start({rotate:d+360,scale:1,transition:ea(e,d)})},[e,t,i,o]);const l=()=>{const d=s.get();if(!i)return;let u,p=1;switch(i){case"slowDown":u=ea(e*2,d);break;case"speedUp":u=ea(e/4,d);break;case"pause":u={rotate:{type:"spring",damping:20,stiffness:300},scale:{type:"spring",damping:20,stiffness:300}};break;case"goBonkers":u=ea(e/20,d),p=.8;break;default:u=ea(e,d)}o.start({rotate:d+360,scale:p,transition:u})},c=()=>{const d=s.get();o.start({rotate:d+360,scale:1,transition:ea(e,d)})};return a.jsx(QL,{children:a.jsx(KL,{className:n,style:{rotate:s},initial:{rotate:0},animate:o,onMouseEnter:l,onMouseLeave:c,children:r.map((d,u)=>{const p=360/r.length*u,f=Math.PI/r.length,g=f*u,y=f*u,w=`rotateZ(${p}deg) translate3d(${g}px, ${y}px, 0)`;return a.jsx(JL,{style:{transform:w,WebkitTransform:w},children:d},u)})})})},iN=m.div`
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
`,nN=m.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: left;
`,rN=m.button`
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
`,S0=[{id:"overview",label:"Overview",targetId:"sbs-overview"},{id:"challenges",label:"Key Challenges",targetId:"sbs-challenges"},{id:"logo",label:"Logo Design",targetId:"sbs-logo"},{id:"color",label:"Color Palette",targetId:"sbs-color"},{id:"typography",label:"Typography",targetId:"sbs-typography"},{id:"illustration",label:"Illustration",targetId:"sbs-illustration"},{id:"mockups",label:"Mockups",targetId:"sbs-mockups"},{id:"social-media",label:"Social Media",targetId:"sbs-social-media"}],oN=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("overview");q.useEffect(()=>{const o={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},s=new IntersectionObserver(l=>{l.forEach(c=>{if(c.isIntersecting){const d=c.target.id,u=S0.find(p=>p.targetId===d);u&&n(u.id)}})},o);return S0.forEach(l=>{const c=document.getElementById(l.targetId);c&&s.observe(c)}),()=>{s.disconnect()}},[]);const r=(o,s)=>{const l=document.getElementById(o);l&&(l.scrollIntoView({behavior:"smooth",block:"center"}),e(s))};return a.jsxs(iN,{children:[a.jsx(nN,{children:"Menu"}),S0.map(o=>a.jsx(rN,{isActive:i===o.id,isClicked:t===o.id,onClick:()=>r(o.targetId,o.id),children:o.label},o.id))]})},sN=m.div`
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
`,aN=Pr`
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
`,wb=m.h2`
  width: 100vw;
  text-align: center;
  font-size: 2.1rem;
  font-weight: 700;
  color: #181818;
  margin: 2.5rem 0 1.5rem 0;
  letter-spacing: -1px;
`,lN=()=>a.jsxs(a.Fragment,{children:[a.jsxs(sN,{children:[a.jsx(rt,{title:"SBS Project | Nooshin Shahsavan - Brand Design & Identity",description:"Explore the SBS project - a comprehensive branding and design project by Nooshin Shahsavan featuring modern visual identity, logo design, and brand strategy.",keywords:"SBS project, brand design, logo design, visual identity, branding, Nooshin Shahsavan, design portfolio",image:"/src/assets/sbsimg/banner.png"}),a.jsx(aN,{}),a.jsx(oN,{}),a.jsxs("div",{id:"sbs-overview",children:[a.jsx(p7,{}),a.jsx(VL,{}),a.jsx(x7,{})]}),a.jsx("div",{id:"sbs-challenges",children:a.jsx(_7,{})}),a.jsx("div",{id:"sbs-logo",children:a.jsx(R7,{})}),a.jsx("div",{id:"sbs-logo-process",children:a.jsx(RL,{})}),a.jsx("div",{id:"sbs-color",children:a.jsx(q7,{})}),a.jsx("div",{id:"sbs-typography",children:a.jsx(W7,{})}),a.jsxs("div",{id:"sbs-illustration",children:[a.jsx(wb,{children:"Illustration"}),a.jsx("p",{style:{fontSize:"1.08rem",color:"#444",fontWeight:"400",lineHeight:"1.5",maxWidth:"480px",margin:"0 auto 2.2rem auto",textAlign:"center"},children:"The illustration style uses curved lines and neutral, emotionless characters to reflect Gen Z's mood and the brand's sense of movement and freedom. The logo's form is echoed in every graphic, creating a cohesive and culturally relevant visual identity."}),a.jsx(tL,{})]}),a.jsx("div",{id:"sbs-video",children:a.jsx(gL,{})}),a.jsx("div",{id:"sbs-brand-identity",children:a.jsx(tN,{text:"Set by Setti Brand Identity",spinDuration:18})}),a.jsxs("div",{id:"sbs-mockups",children:[a.jsx(sL,{}),a.jsx(uL,{})]}),a.jsxs("div",{id:"sbs-social-media",children:[a.jsx(wb,{children:"Social Media/Black Friday"}),a.jsx(YL,{}),a.jsx(qL,{})]}),a.jsxs("div",{id:"sbs-additional-mockups",children:[a.jsx(yL,{}),a.jsx(SL,{})]}),a.jsx(Bs,{}),a.jsx(Os,{})]}),a.jsx($s,{})]}),cN="/Nooshin-Shahsavan-portfolio/assets/story.ab3b6178.mp4",dN=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`,uN=m.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`,hN=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`,pN=m.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
`,fN=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,mN=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.2rem;
`,yu=m.div`
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
`,gN=()=>a.jsxs(dN,{id:"veen-overview",children:[a.jsx(uN,{children:"VEEN — Overview"}),a.jsx(hN,{children:"VEEN Studio is a newly established photography brand based in Vancouver, specializing in family and child photography. The goal of this project was to create a professional, heartfelt brand identity that reflects warmth, trust, creativity, and joy."}),a.jsx(pN,{children:a.jsx(fN,{src:cN,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Veen project video"})}),a.jsxs(mN,{children:[a.jsxs(yu,{children:[a.jsx(bu,{children:"Role"}),a.jsx(ku,{children:"Brand Designer"})]}),a.jsxs(yu,{children:[a.jsx(bu,{children:"Tools"}),a.jsx(ku,{children:"Illustrator, After Effects, Photoshop"})]}),a.jsxs(yu,{children:[a.jsx(bu,{children:"Timeline"}),a.jsx(ku,{children:"2 weeks"})]}),a.jsxs(yu,{children:[a.jsx(bu,{children:"Year"}),a.jsx(ku,{children:"2024"})]})]})]}),xN="/Nooshin-Shahsavan-portfolio/assets/brand-strategy.42b2bd80.png",wN=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`,vN=m.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`,yN=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`,bN=m.div`
  width: 340px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
`,kN=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,jN=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
  font-size: 1.13rem;
  font-weight: 600;
`,Bl=m.span`
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
`;const SN=()=>a.jsxs(wN,{children:[a.jsx(vN,{children:"What I did ..."}),a.jsx(yN,{children:"I was responsible for designing a logo system, selecting a color palette, choosing typography, and creating social media content to establish a strong and cohesive brand presence."}),a.jsx(bN,{children:a.jsx(kN,{src:xN,alt:"Brand Strategy Visual"})}),a.jsxs(jN,{children:[a.jsx(Bl,{children:"Aim"}),a.jsx(ju,{children:"➝"}),a.jsx(Bl,{children:"Create warm brand identity"}),a.jsx(ju,{children:"➝"}),a.jsx(Bl,{children:"Reflect Family + joy and trust"}),a.jsx(ju,{children:"➝"}),a.jsx(Bl,{children:"Design visuals"}),a.jsx(ju,{children:"➝"}),a.jsx(Bl,{children:"Build strong online presence"})]})]}),DN="/Nooshin-Shahsavan-portfolio/assets/scatch.016cf010.jpg",_N=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`,CN=m.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`,PN=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`,TN=m.div`
  width: 340px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
`,EN=m.img`
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
`,yb=m.p`
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
`,IN=()=>a.jsxs(_N,{id:"veen-logo",children:[a.jsx(CN,{children:"Logo Design"}),a.jsxs(PN,{children:["Based on the brand’s values and target audience families and children, with an emphasis on conveying warm and comforting vibes I considered several key points. The client preferred a ",a.jsx(ui,{children:"wordmark"})," combined with a ",a.jsx(ui,{children:"photography-related symbol"}),". On the other hand, I also needed to visually reflect the brand’s core values: ",a.jsx(ui,{children:"family"})," and ",a.jsx(ui,{children:"warmth"}),"."]}),a.jsx(TN,{children:a.jsx(EN,{src:DN,alt:"Logo Sketch"})}),a.jsx(vb,{children:"To achieve this..."}),a.jsxs(yb,{children:["I simplified the shape of a camera into a clean, graphic form and placed it at the center of the word “VEEN,” replacing the two ",a.jsx(ui,{children:"“E”"}),"s with the camera shape. This created a strong visual connection between the brand name and photography."]}),a.jsx(vb,{children:"To reinforce the concept of family,"}),a.jsxs(yb,{children:["I used a ",a.jsx(ui,{children:"square"})," shape(",a.jsx(ui,{children:"camera body"}),") to represent ",a.jsx(ui,{children:"home"})," and security , and added a ",a.jsx(ui,{children:"circle"})," inside the square, symbolizing ",a.jsx(ui,{children:"family"}),", ",a.jsx(ui,{children:"love"})," , and ",a.jsx(ui,{children:"the flow of life"})," also resembling the camera ",a.jsx(ui,{children:"lens"})," .",a.jsx("br",{}),a.jsx("br",{}),"Secondary Logo: A minimal ",a.jsx(ui,{children:"V+N"})," monogram, derived from the main logo, designed for versatile use in stickers, watermarks, and small-scale branding."]})]}),AN="/Nooshin-Shahsavan-portfolio/assets/veenlogo1.d6c63d8c.jpg",MN="/Nooshin-Shahsavan-portfolio/assets/veenlogo-2.5fe5cb90.jpg",zN="/Nooshin-Shahsavan-portfolio/assets/veenlogo-3.fa1007ca.jpg",FN=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`,RN=m.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 48px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 24px;
  }
`,D0=m.img`
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
`,LN=()=>a.jsx(FN,{id:"veen-color",children:a.jsxs(RN,{children:[a.jsx(D0,{src:AN,alt:"Veen Logo 1"}),a.jsx(D0,{src:MN,alt:"Veen Logo 2"}),a.jsx(D0,{src:zN,alt:"Veen Logo 3"})]})}),NN="/Nooshin-Shahsavan-portfolio/assets/final.0e6cb83e.mp4",ON=m.section`
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
`,$N=m.div`
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
`,BN=m.video`
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
`,VN=()=>a.jsx(ON,{children:a.jsx($N,{children:a.jsx(BN,{src:NN,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Final video"})})}),WN="/Nooshin-Shahsavan-portfolio/assets/socialveen1.9b39d379.jpg",UN=m.section`
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
`,HN=m.div`
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
`,YN=m.img`
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
`,GN=()=>a.jsx(UN,{children:a.jsx(HN,{children:a.jsx(YN,{src:WN,alt:"Veen social media design"})})}),XN="/Nooshin-Shahsavan-portfolio/assets/veencolor.c62c0ec6.mp4",ZN=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`,qN=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`,QN=m.div`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`,KN=m.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
`,JN=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,eO=()=>{const t=T.useRef(null),[e,i]=T.useState(!1);return T.useEffect(()=>{const n=()=>{if(!e&&t.current){const r=t.current.getBoundingClientRect();r.top<window.innerHeight&&r.bottom>0&&(t.current.play(),i(!0))}};return window.addEventListener("scroll",n),n(),()=>window.removeEventListener("scroll",n)},[e]),a.jsxs(ZN,{children:[a.jsx(qN,{children:"Color Palette"}),a.jsx(QN,{children:"A soft, modern color system designed to evoke warmth, trust, and joy perfect for family photography. Calming teals symbolize connection, balanced with peach, cream, and coral for a gentle yet vibrant emotional tone."}),a.jsx(KN,{children:a.jsx(JN,{ref:t,src:XN,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Color palette video"})})]})},tO="/Nooshin-Shahsavan-portfolio/assets/vv.596f8411.mp4",iO=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`,nO=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`,rO=m.div`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`,oO=m.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
`,sO=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,aO=()=>{const t=T.useRef(null),[e,i]=T.useState(!1);return T.useEffect(()=>{const n=()=>{if(!e&&t.current){const r=t.current.getBoundingClientRect();r.top<window.innerHeight&&r.bottom>0&&(t.current.play(),i(!0))}};return window.addEventListener("scroll",n),n(),()=>window.removeEventListener("scroll",n)},[e]),a.jsxs(iO,{children:[a.jsx(nO,{children:"Typography"}),a.jsx(rO,{children:"The typography system was carefully chosen to reflect warmth and professionalism, ensuring excellent readability across all applications."}),a.jsx(oO,{children:a.jsx(sO,{ref:t,src:tO,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Typography video"})})]})},lO="/Nooshin-Shahsavan-portfolio/assets/mveen1.0759dcdb.jpg",cO=m.section`
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
`,dO=m.div`
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
`,uO=m.img`
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
`,hO=()=>a.jsx(cO,{children:a.jsx(dO,{children:a.jsx(uO,{src:lO,alt:"Veen design mockup"})})}),pO="/Nooshin-Shahsavan-portfolio/assets/envelop.58d96898.png",fO=m.div`
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
`,mO=m.div`
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
`,gO=m.img`
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
`,xO=()=>a.jsx(fO,{children:a.jsx(mO,{children:a.jsx(gO,{src:pO,alt:"Veen Envelope Design"})})}),wO="/Nooshin-Shahsavan-portfolio/assets/v1.7dc01232.png",vO="/Nooshin-Shahsavan-portfolio/assets/v2.afacf3bc.jpeg",yO="/Nooshin-Shahsavan-portfolio/assets/v3.5034fa44.png",bO="/Nooshin-Shahsavan-portfolio/assets/v4.c9d7c2c6.jpg",kO=[wO,vO,yO,bO],jO=m.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-sizing: border-box;
`,SO=m.h2`
  width: 100%;
  text-align: center;
  color: #181818;
  font-size: 2.2rem;
  font-weight: 700;
  margin: 2.5rem 0 2rem 0;
  letter-spacing: 0.04em;
`,DO=m.div`
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
`,_O=m.div`
  display: flex;
  gap: 2.2vw;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    gap: 10px;
  }
`,CO=m.div`
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
`,PO=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`,TO=m.p`
  font-size: 1rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 2.2rem auto 0 auto;
  text-align: center;
`;function EO(){return a.jsxs(jO,{id:"veen-logo-explorations",children:[a.jsx(SO,{children:"Logo Explorations"}),a.jsx(DO,{children:a.jsx(_O,{children:kO.map((t,e)=>a.jsx(CO,{children:a.jsx(PO,{src:t,alt:`logo-${e+1}`,loading:"lazy"})},t+e))})}),a.jsx(TO,{children:"Through this approach, I successfully addressed both sides of the design: incorporating a recognizable camera shape and embedding symbolic elements that reflect the concept of family. None of these choices were accidental; they are all grounded in semiotics."})]})}var sx={exports:{}};(function(t,e){(function(i,n){n(e)})(S4,function(i){class n{constructor(h,x){this.state={angle:0,area:[],position:{x:0,y:0},hardAngle:0,hardDrawingAngle:0},this.createdDensity=x,this.nowDrawingDensity=this.createdDensity,this.render=h}setDensity(h){this.createdDensity=h,this.nowDrawingDensity=h}setDrawingDensity(h){this.nowDrawingDensity=h}setPosition(h){this.state.position=h}setAngle(h){this.state.angle=h}setArea(h){this.state.area=h}setHardDrawingAngle(h){this.state.hardDrawingAngle=h}setHardAngle(h){this.state.hardAngle=h,this.state.hardDrawingAngle=h}setOrientation(h){this.orientation=h}getDrawingDensity(){return this.nowDrawingDensity}getDensity(){return this.createdDensity}getHardAngle(){return this.state.hardAngle}}class r extends n{constructor(h,x,k){super(h,k),this.image=null,this.isLoad=!1,this.loadingAngle=0,this.image=new Image,this.image.src=x}draw(h){const x=this.render.getContext(),k=this.render.convertToGlobal(this.state.position),S=this.render.getRect().pageWidth,_=this.render.getRect().height;x.save(),x.translate(k.x,k.y),x.beginPath();for(let C of this.state.area)C!==null&&(C=this.render.convertToGlobal(C),x.lineTo(C.x-k.x,C.y-k.y));x.rotate(this.state.angle),x.clip(),this.isLoad?x.drawImage(this.image,0,0,S,_):this.drawLoader(x,{x:0,y:0},S,_),x.restore()}simpleDraw(h){const x=this.render.getRect(),k=this.render.getContext(),S=x.pageWidth,_=x.height,C=h===1?x.left+x.pageWidth:x.left,E=x.top;this.isLoad?k.drawImage(this.image,C,E,S,_):this.drawLoader(k,{x:C,y:E},S,_)}drawLoader(h,x,k,S){h.beginPath(),h.strokeStyle="rgb(200, 200, 200)",h.fillStyle="rgb(255, 255, 255)",h.lineWidth=1,h.rect(x.x+1,x.y+1,k-1,S-1),h.stroke(),h.fill();const _={x:x.x+k/2,y:x.y+S/2};h.beginPath(),h.lineWidth=10,h.arc(_.x,_.y,20,this.loadingAngle,3*Math.PI/2+this.loadingAngle),h.stroke(),h.closePath(),this.loadingAngle+=.07,this.loadingAngle>=2*Math.PI&&(this.loadingAngle=0)}load(){this.isLoad||(this.image.onload=()=>{this.isLoad=!0})}newTemporaryCopy(){return this}getTemporaryCopy(){return this}hideTemporaryCopy(){}}class o{constructor(h,x){this.pages=[],this.currentPageIndex=0,this.currentSpreadIndex=0,this.landscapeSpread=[],this.portraitSpread=[],this.render=x,this.app=h,this.currentPageIndex=0,this.isShowCover=this.app.getSettings().showCover}destroy(){this.pages=[]}createSpread(){this.landscapeSpread=[],this.portraitSpread=[];for(let x=0;x<this.pages.length;x++)this.portraitSpread.push([x]);let h=0;this.isShowCover&&(this.pages[0].setDensity("hard"),this.landscapeSpread.push([h]),h++);for(let x=h;x<this.pages.length;x+=2)x<this.pages.length-1?this.landscapeSpread.push([x,x+1]):(this.landscapeSpread.push([x]),this.pages[x].setDensity("hard"))}getSpread(){return this.render.getOrientation()==="landscape"?this.landscapeSpread:this.portraitSpread}getSpreadIndexByPage(h){const x=this.getSpread();for(let k=0;k<x.length;k++)if(h===x[k][0]||h===x[k][1])return k;return null}getPageCount(){return this.pages.length}getPages(){return this.pages}getPage(h){if(h>=0&&h<this.pages.length)return this.pages[h];throw new Error("Invalid page number")}nextBy(h){const x=this.pages.indexOf(h);return x<this.pages.length-1?this.pages[x+1]:null}prevBy(h){const x=this.pages.indexOf(h);return x>0?this.pages[x-1]:null}getFlippingPage(h){const x=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return h===0?this.pages[x].newTemporaryCopy():this.pages[x-1];{const k=h===0?this.getSpread()[x+1]:this.getSpread()[x-1];return k.length===1||h===0?this.pages[k[0]]:this.pages[k[1]]}}getBottomPage(h){const x=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return h===0?this.pages[x+1]:this.pages[x-1];{const k=h===0?this.getSpread()[x+1]:this.getSpread()[x-1];return k.length===1?this.pages[k[0]]:h===0?this.pages[k[1]]:this.pages[k[0]]}}showNext(){this.currentSpreadIndex<this.getSpread().length&&(this.currentSpreadIndex++,this.showSpread())}showPrev(){this.currentSpreadIndex>0&&(this.currentSpreadIndex--,this.showSpread())}getCurrentPageIndex(){return this.currentPageIndex}show(h=null){if(h===null&&(h=this.currentPageIndex),h<0||h>=this.pages.length)return;const x=this.getSpreadIndexByPage(h);x!==null&&(this.currentSpreadIndex=x,this.showSpread())}getCurrentSpreadIndex(){return this.currentSpreadIndex}setCurrentSpreadIndex(h){if(!(h>=0&&h<this.getSpread().length))throw new Error("Invalid page");this.currentSpreadIndex=h}showSpread(){const h=this.getSpread()[this.currentSpreadIndex];h.length===2?(this.render.setLeftPage(this.pages[h[0]]),this.render.setRightPage(this.pages[h[1]])):this.render.getOrientation()==="landscape"&&h[0]===this.pages.length-1?(this.render.setLeftPage(this.pages[h[0]]),this.render.setRightPage(null)):(this.render.setLeftPage(null),this.render.setRightPage(this.pages[h[0]])),this.currentPageIndex=h[0],this.app.updatePageIndex(this.currentPageIndex)}}class s extends o{constructor(h,x,k){super(h,x),this.imagesHref=k}load(){for(const h of this.imagesHref){const x=new r(this.render,h,"soft");x.load(),this.pages.push(x)}this.createSpread()}}class l{static GetDistanceBetweenTwoPoint(h,x){return h===null||x===null?1/0:Math.sqrt(Math.pow(x.x-h.x,2)+Math.pow(x.y-h.y,2))}static GetSegmentLength(h){return l.GetDistanceBetweenTwoPoint(h[0],h[1])}static GetAngleBetweenTwoLine(h,x){const k=h[0].y-h[1].y,S=x[0].y-x[1].y,_=h[1].x-h[0].x,C=x[1].x-x[0].x;return Math.acos((k*S+_*C)/(Math.sqrt(k*k+_*_)*Math.sqrt(S*S+C*C)))}static PointInRect(h,x){return x===null?null:x.x>=h.left&&x.x<=h.width+h.left&&x.y>=h.top&&x.y<=h.top+h.height?x:null}static GetRotatedPoint(h,x,k){return{x:h.x*Math.cos(k)+h.y*Math.sin(k)+x.x,y:h.y*Math.cos(k)-h.x*Math.sin(k)+x.y}}static LimitPointToCircle(h,x,k){if(l.GetDistanceBetweenTwoPoint(h,k)<=x)return k;const S=h.x,_=h.y,C=k.x,E=k.y;let z=Math.sqrt(Math.pow(x,2)*Math.pow(S-C,2)/(Math.pow(S-C,2)+Math.pow(_-E,2)))+S;k.x<0&&(z*=-1);let A=(z-S)*(_-E)/(S-C)+_;return S-C+_===0&&(A=x),{x:z,y:A}}static GetIntersectBetweenTwoSegment(h,x,k){return l.PointInRect(h,l.GetIntersectBeetwenTwoLine(x,k))}static GetIntersectBeetwenTwoLine(h,x){const k=h[0].y-h[1].y,S=x[0].y-x[1].y,_=h[1].x-h[0].x,C=x[1].x-x[0].x,E=h[0].x*h[1].y-h[1].x*h[0].y,z=x[0].x*x[1].y-x[1].x*x[0].y,A=k*z-S*E,L=_*z-C*E,N=-(E*C-z*_)/(k*C-S*_),W=-(k*z-S*E)/(k*C-S*_);if(isFinite(N)&&isFinite(W))return{x:N,y:W};if(Math.abs(A-L)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(h,x){const k=Math.abs(h.x-x.x),S=Math.abs(h.y-x.y),_=Math.max(k,S),C=[h];function E(z,A,L,N,W){return A>z?z+W*(L/N):A<z?z-W*(L/N):z}for(let z=1;z<=_;z+=1)C.push({x:E(h.x,x.x,k,_,z),y:E(h.y,x.y,S,_,z)});return C}}class c extends n{constructor(h,x,k){super(h,k),this.copiedElement=null,this.temporaryCopy=null,this.isLoad=!1,this.element=x,this.element.classList.add("stf__item"),this.element.classList.add("--"+k)}newTemporaryCopy(){return this.nowDrawingDensity==="hard"?this:(this.temporaryCopy===null&&(this.copiedElement=this.element.cloneNode(!0),this.element.parentElement.appendChild(this.copiedElement),this.temporaryCopy=new c(this.render,this.copiedElement,this.nowDrawingDensity)),this.getTemporaryCopy())}getTemporaryCopy(){return this.temporaryCopy}hideTemporaryCopy(){this.temporaryCopy!==null&&(this.copiedElement.remove(),this.copiedElement=null,this.temporaryCopy=null)}draw(h){const x=h||this.nowDrawingDensity,k=this.render.convertToGlobal(this.state.position),S=this.render.getRect().pageWidth,_=this.render.getRect().height;this.element.classList.remove("--simple");const C=`
            display: block;
            z-index: ${this.element.style.zIndex};
            left: 0;
            top: 0;
            width: ${S}px;
            height: ${_}px;
        `;x==="hard"?this.drawHard(C):this.drawSoft(k,C)}drawHard(h=""){const x=this.render.getRect().left+this.render.getRect().width/2,k=this.state.hardDrawingAngle,S=h+`
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                clip-path: none;
                -webkit-clip-path: none;
            `+(this.orientation===0?`transform-origin: ${this.render.getRect().pageWidth}px 0; 
                   transform: translate3d(0, 0, 0) rotateY(${k}deg);`:`transform-origin: 0 0; 
                   transform: translate3d(${x}px, 0, 0) rotateY(${k}deg);`);this.element.style.cssText=S}drawSoft(h,x=""){let k="polygon( ";for(const _ of this.state.area)if(_!==null){let C=this.render.getDirection()===1?{x:-_.x+this.state.position.x,y:_.y-this.state.position.y}:{x:_.x-this.state.position.x,y:_.y-this.state.position.y};C=l.GetRotatedPoint(C,{x:0,y:0},this.state.angle),k+=C.x+"px "+C.y+"px, "}k=k.slice(0,-2),k+=")";const S=x+`transform-origin: 0 0; clip-path: ${k}; -webkit-clip-path: ${k};`+(this.render.isSafari()&&this.state.angle===0?`transform: translate(${h.x}px, ${h.y}px);`:`transform: translate3d(${h.x}px, ${h.y}px, 0) rotate(${this.state.angle}rad);`);this.element.style.cssText=S}simpleDraw(h){const x=this.render.getRect(),k=x.pageWidth,S=x.height,_=h===1?x.left+x.pageWidth:x.left,C=x.top;this.element.classList.add("--simple"),this.element.style.cssText=`
            position: absolute; 
            display: block; 
            height: ${S}px; 
            left: ${_}px; 
            top: ${C}px; 
            width: ${k}px; 
            z-index: ${this.render.getSettings().startZIndex+1};`}getElement(){return this.element}load(){this.isLoad=!0}setOrientation(h){super.setOrientation(h),this.element.classList.remove("--left","--right"),this.element.classList.add(h===1?"--right":"--left")}setDrawingDensity(h){this.element.classList.remove("--soft","--hard"),this.element.classList.add("--"+h),super.setDrawingDensity(h)}}class d extends o{constructor(h,x,k,S){super(h,x),this.element=k,this.pagesElement=S}load(){for(const h of this.pagesElement){const x=new c(this.render,h,h.dataset.density==="hard"?"hard":"soft");x.load(),this.pages.push(x)}this.createSpread()}}class u{constructor(h,x,k,S){this.direction=h,this.corner=x,this.topIntersectPoint=null,this.sideIntersectPoint=null,this.bottomIntersectPoint=null,this.pageWidth=parseInt(k,10),this.pageHeight=parseInt(S,10)}calc(h){try{return this.position=this.calcAngleAndPosition(h),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){const h=[];let x=!1;return h.push(this.rect.topLeft),h.push(this.topIntersectPoint),this.sideIntersectPoint===null?x=!0:(h.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(x=!1)),h.push(this.bottomIntersectPoint),(x||this.corner==="bottom")&&h.push(this.rect.bottomLeft),h}getBottomClipArea(){const h=[];return h.push(this.topIntersectPoint),this.corner==="top"?h.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&h.push({x:this.pageWidth,y:0}),h.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?l.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&h.push(this.sideIntersectPoint):this.corner==="top"&&h.push({x:this.pageWidth,y:this.pageHeight}),h.push(this.bottomIntersectPoint),h.push(this.topIntersectPoint),h}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){const h=l.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?h:Math.PI-h}calcAngleAndPosition(h){let x=h;if(this.updateAngleAndGeometry(x),x=this.corner==="top"?this.checkPositionAtCenterLine(x,{x:0,y:0},{x:0,y:this.pageHeight}):this.checkPositionAtCenterLine(x,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(x.x-this.pageWidth)<1&&Math.abs(x.y)<1)throw new Error("Point is too small");return x}updateAngleAndGeometry(h){this.angle=this.calculateAngle(h),this.rect=this.getPageRect(h)}calculateAngle(h){const x=this.pageWidth-h.x+1,k=this.corner==="bottom"?this.pageHeight-h.y:h.y;let S=2*Math.acos(x/Math.sqrt(k*k+x*x));k<0&&(S=-S);const _=Math.PI-S;if(!isFinite(S)||_>=0&&_<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(S=-S),S}getPageRect(h){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],h):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],h)}getRectFromBasePoint(h,x){return{topLeft:this.getRotatedPoint(h[0],x),topRight:this.getRotatedPoint(h[1],x),bottomLeft:this.getRotatedPoint(h[2],x),bottomRight:this.getRotatedPoint(h[3],x)}}getRotatedPoint(h,x){return{x:h.x*Math.cos(this.angle)+h.y*Math.sin(this.angle)+x.x,y:h.y*Math.cos(this.angle)-h.x*Math.sin(this.angle)+x.y}}calculateIntersectPoint(h){const x={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=l.GetIntersectBetweenTwoSegment(x,[h,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=l.GetIntersectBetweenTwoSegment(x,[h,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=l.GetIntersectBetweenTwoSegment(x,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=l.GetIntersectBetweenTwoSegment(x,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=l.GetIntersectBetweenTwoSegment(x,[h,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=l.GetIntersectBetweenTwoSegment(x,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(h,x,k){let S=h;const _=l.LimitPointToCircle(x,this.pageWidth,S);S!==_&&(S=_,this.updateAngleAndGeometry(S));const C=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2));let E=this.rect.bottomRight,z=this.rect.topLeft;if(this.corner==="bottom"&&(E=this.rect.topRight,z=this.rect.bottomLeft),E.x<=0){const A=l.LimitPointToCircle(k,C,z);A!==S&&(S=A,this.updateAngleAndGeometry(S))}return S}getSegmentToShadowLine(){const h=this.getShadowStartPoint();return[h,h!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint]}}class p{constructor(h,x){this.flippingPage=null,this.bottomPage=null,this.calc=null,this.state="read",this.render=h,this.app=x}fold(h){this.setState("user_fold"),this.calc===null&&this.start(h),this.do(this.render.convertToPage(h))}flip(h){if(this.app.getSettings().disableFlipByClick&&!this.isPointOnCorners(h)||(this.calc!==null&&this.render.finishAnimation(),!this.start(h)))return;const x=this.getBoundsRect();this.setState("flipping");const k=x.height/10,S=this.calc.getCorner()==="bottom"?x.height-k:k,_=this.calc.getCorner()==="bottom"?x.height:0;this.calc.calc({x:x.pageWidth-k,y:S}),this.animateFlippingTo({x:x.pageWidth-k,y:S},{x:-x.pageWidth,y:_},!0)}start(h){this.reset();const x=this.render.convertToBook(h),k=this.getBoundsRect(),S=this.getDirectionByPoint(x),_=x.y>=k.height/2?"bottom":"top";if(!this.checkDirection(S))return!1;try{if(this.flippingPage=this.app.getPageCollection().getFlippingPage(S),this.bottomPage=this.app.getPageCollection().getBottomPage(S),this.render.getOrientation()==="landscape")if(S===1){const C=this.app.getPageCollection().nextBy(this.flippingPage);C!==null&&this.flippingPage.getDensity()!==C.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),C.setDrawingDensity("hard"))}else{const C=this.app.getPageCollection().prevBy(this.flippingPage);C!==null&&this.flippingPage.getDensity()!==C.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),C.setDrawingDensity("hard"))}return this.render.setDirection(S),this.calc=new u(S,_,k.pageWidth.toString(10),k.height.toString(10)),!0}catch{return!1}}do(h){if(this.calc!==null&&this.calc.calc(h)){const x=this.calc.getFlippingProgress();this.bottomPage.setArea(this.calc.getBottomClipArea()),this.bottomPage.setPosition(this.calc.getBottomPagePosition()),this.bottomPage.setAngle(0),this.bottomPage.setHardAngle(0),this.flippingPage.setArea(this.calc.getFlippingClipArea()),this.flippingPage.setPosition(this.calc.getActiveCorner()),this.flippingPage.setAngle(this.calc.getAngle()),this.calc.getDirection()===0?this.flippingPage.setHardAngle(90*(200-2*x)/100):this.flippingPage.setHardAngle(-90*(200-2*x)/100),this.render.setPageRect(this.calc.getRect()),this.render.setBottomPage(this.bottomPage),this.render.setFlippingPage(this.flippingPage),this.render.setShadowData(this.calc.getShadowStartPoint(),this.calc.getShadowAngle(),x,this.calc.getDirection())}}flipToPage(h,x){const k=this.app.getPageCollection().getCurrentSpreadIndex(),S=this.app.getPageCollection().getSpreadIndexByPage(h);try{S>k&&(this.app.getPageCollection().setCurrentSpreadIndex(S-1),this.flipNext(x)),S<k&&(this.app.getPageCollection().setCurrentSpreadIndex(S+1),this.flipPrev(x))}catch{}}flipNext(h){this.flip({x:this.render.getRect().left+2*this.render.getRect().pageWidth-10,y:h==="top"?1:this.render.getRect().height-2})}flipPrev(h){this.flip({x:10,y:h==="top"?1:this.render.getRect().height-2})}stopMove(){if(this.calc===null)return;const h=this.calc.getPosition(),x=this.getBoundsRect(),k=this.calc.getCorner()==="bottom"?x.height:0;h.x<=0?this.animateFlippingTo(h,{x:-x.pageWidth,y:k},!0):this.animateFlippingTo(h,{x:x.pageWidth,y:k},!1)}showCorner(h){if(!this.checkState("read","fold_corner"))return;const x=this.getBoundsRect(),k=x.pageWidth;if(this.isPointOnCorners(h))if(this.calc===null){if(!this.start(h))return;this.setState("fold_corner"),this.calc.calc({x:k-1,y:1});const S=50,_=this.calc.getCorner()==="bottom"?x.height-1:1,C=this.calc.getCorner()==="bottom"?x.height-S:S;this.animateFlippingTo({x:k-1,y:_},{x:k-S,y:C},!1,!1)}else this.do(this.render.convertToPage(h));else this.setState("read"),this.render.finishAnimation(),this.stopMove()}animateFlippingTo(h,x,k,S=!0){const _=l.GetCordsFromTwoPoint(h,x),C=[];for(const z of _)C.push(()=>this.do(z));const E=this.getAnimationDuration(_.length);this.render.startAnimation(C,E,()=>{this.calc&&(k&&(this.calc.getDirection()===1?this.app.turnToPrevPage():this.app.turnToNextPage()),S&&(this.render.setBottomPage(null),this.render.setFlippingPage(null),this.render.clearShadow(),this.setState("read"),this.reset()))})}getCalculation(){return this.calc}getState(){return this.state}setState(h){this.state!==h&&(this.app.updateState(h),this.state=h)}getDirectionByPoint(h){const x=this.getBoundsRect();if(this.render.getOrientation()==="portrait"){if(h.x-x.pageWidth<=x.width/5)return 1}else if(h.x<x.width/2)return 1;return 0}getAnimationDuration(h){const x=this.app.getSettings().flippingTime;return h>=1e3?x:h/1e3*x}checkDirection(h){return h===0?this.app.getCurrentPageIndex()<this.app.getPageCount()-1:this.app.getCurrentPageIndex()>=1}reset(){this.calc=null,this.flippingPage=null,this.bottomPage=null}getBoundsRect(){return this.render.getRect()}checkState(...h){for(const x of h)if(this.state===x)return!0;return!1}isPointOnCorners(h){const x=this.getBoundsRect(),k=x.pageWidth,S=Math.sqrt(Math.pow(k,2)+Math.pow(x.height,2))/5,_=this.render.convertToBook(h);return _.x>0&&_.y>0&&_.x<x.width&&_.y<x.height&&(_.x<S||_.x>x.width-S)&&(_.y<S||_.y>x.height-S)}}class f{constructor(h,x){this.leftPage=null,this.rightPage=null,this.flippingPage=null,this.bottomPage=null,this.direction=null,this.orientation=null,this.shadow=null,this.animation=null,this.pageRect=null,this.boundsRect=null,this.timer=0,this.safari=!1,this.setting=x,this.app=h;const k=new RegExp("Version\\/[\\d\\.]+.*Safari/");this.safari=k.exec(window.navigator.userAgent)!==null}render(h){if(this.animation!==null){const x=Math.round((h-this.animation.startedAt)/this.animation.durationFrame);x<this.animation.frames.length?this.animation.frames[x]():(this.animation.onAnimateEnd(),this.animation=null)}this.timer=h,this.drawFrame()}start(){this.update();const h=x=>{this.render(x),requestAnimationFrame(h)};requestAnimationFrame(h)}startAnimation(h,x,k){this.finishAnimation(),this.animation={frames:h,duration:x,durationFrame:x/h.length,onAnimateEnd:k,startedAt:this.timer}}finishAnimation(){this.animation!==null&&(this.animation.frames[this.animation.frames.length-1](),this.animation.onAnimateEnd!==null&&this.animation.onAnimateEnd()),this.animation=null}update(){this.boundsRect=null;const h=this.calculateBoundsRect();this.orientation!==h&&(this.orientation=h,this.app.updateOrientation(h))}calculateBoundsRect(){let h="landscape";const x=this.getBlockWidth(),k=x/2,S=this.getBlockHeight()/2,_=this.setting.width/this.setting.height;let C=this.setting.width,E=this.setting.height,z=k-C;return this.setting.size==="stretch"?(x<2*this.setting.minWidth&&this.app.getSettings().usePortrait&&(h="portrait"),C=h==="portrait"?this.getBlockWidth():this.getBlockWidth()/2,C>this.setting.maxWidth&&(C=this.setting.maxWidth),E=C/_,E>this.getBlockHeight()&&(E=this.getBlockHeight(),C=E*_),z=h==="portrait"?k-C/2-C:k-C):x<2*C&&this.app.getSettings().usePortrait&&(h="portrait",z=k-C/2-C),this.boundsRect={left:z,top:S-E/2,width:2*C,height:E,pageWidth:C},h}setShadowData(h,x,k,S){if(!this.app.getSettings().drawShadow)return;const _=100*this.getSettings().maxShadowOpacity;this.shadow={pos:h,angle:x,width:3*this.getRect().pageWidth/4*k/100,opacity:(100-k)*_/100/100,direction:S,progress:2*k}}clearShadow(){this.shadow=null}getBlockWidth(){return this.app.getUI().getDistElement().offsetWidth}getBlockHeight(){return this.app.getUI().getDistElement().offsetHeight}getDirection(){return this.direction}getRect(){return this.boundsRect===null&&this.calculateBoundsRect(),this.boundsRect}getSettings(){return this.app.getSettings()}getOrientation(){return this.orientation}setPageRect(h){this.pageRect=h}setDirection(h){this.direction=h}setRightPage(h){h!==null&&h.setOrientation(1),this.rightPage=h}setLeftPage(h){h!==null&&h.setOrientation(0),this.leftPage=h}setBottomPage(h){h!==null&&h.setOrientation(this.direction===1?0:1),this.bottomPage=h}setFlippingPage(h){h!==null&&h.setOrientation(this.direction===0&&this.orientation!=="portrait"?0:1),this.flippingPage=h}convertToBook(h){const x=this.getRect();return{x:h.x-x.left,y:h.y-x.top}}isSafari(){return this.safari}convertToPage(h,x){x||(x=this.direction);const k=this.getRect();return{x:x===0?h.x-k.left-k.width/2:k.width/2-h.x+k.left,y:h.y-k.top}}convertToGlobal(h,x){if(x||(x=this.direction),h==null)return null;const k=this.getRect();return{x:x===0?h.x+k.left+k.width/2:k.width/2-h.x+k.left,y:h.y+k.top}}convertRectToGlobal(h,x){return x||(x=this.direction),{topLeft:this.convertToGlobal(h.topLeft,x),topRight:this.convertToGlobal(h.topRight,x),bottomLeft:this.convertToGlobal(h.bottomLeft,x),bottomRight:this.convertToGlobal(h.bottomRight,x)}}}class g extends f{constructor(h,x,k){super(h,x),this.canvas=k,this.ctx=k.getContext("2d")}getContext(){return this.ctx}reload(){}drawFrame(){this.clear(),this.orientation!=="portrait"&&this.leftPage!=null&&this.leftPage.simpleDraw(0),this.rightPage!=null&&this.rightPage.simpleDraw(1),this.bottomPage!=null&&this.bottomPage.draw(),this.drawBookShadow(),this.flippingPage!=null&&this.flippingPage.draw(),this.shadow!=null&&(this.drawOuterShadow(),this.drawInnerShadow());const h=this.getRect();this.orientation==="portrait"&&(this.ctx.beginPath(),this.ctx.rect(h.left+h.pageWidth,h.top,h.width,h.height),this.ctx.clip())}drawBookShadow(){const h=this.getRect();this.ctx.save(),this.ctx.beginPath();const x=h.width/20;this.ctx.rect(h.left,h.top,h.width,h.height);const k={x:h.left+h.width/2-x/2,y:0};this.ctx.translate(k.x,k.y);const S=this.ctx.createLinearGradient(0,0,x,0);S.addColorStop(0,"rgba(0, 0, 0, 0)"),S.addColorStop(.4,"rgba(0, 0, 0, 0.2)"),S.addColorStop(.49,"rgba(0, 0, 0, 0.1)"),S.addColorStop(.5,"rgba(0, 0, 0, 0.5)"),S.addColorStop(.51,"rgba(0, 0, 0, 0.4)"),S.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.clip(),this.ctx.fillStyle=S,this.ctx.fillRect(0,0,x,2*h.height),this.ctx.restore()}drawOuterShadow(){const h=this.getRect();this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(h.left,h.top,h.width,h.height);const x=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y});this.ctx.translate(x.x,x.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const k=this.ctx.createLinearGradient(0,0,this.shadow.width,0);this.shadow.direction===0?(this.ctx.translate(0,-100),k.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),k.addColorStop(1,"rgba(0, 0, 0, 0)")):(this.ctx.translate(-this.shadow.width,-100),k.addColorStop(0,"rgba(0, 0, 0, 0)"),k.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")")),this.ctx.clip(),this.ctx.fillStyle=k,this.ctx.fillRect(0,0,this.shadow.width,2*h.height),this.ctx.restore()}drawInnerShadow(){const h=this.getRect();this.ctx.save(),this.ctx.beginPath();const x=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),k=this.convertRectToGlobal(this.pageRect);this.ctx.moveTo(k.topLeft.x,k.topLeft.y),this.ctx.lineTo(k.topRight.x,k.topRight.y),this.ctx.lineTo(k.bottomRight.x,k.bottomRight.y),this.ctx.lineTo(k.bottomLeft.x,k.bottomLeft.y),this.ctx.translate(x.x,x.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const S=3*this.shadow.width/4,_=this.ctx.createLinearGradient(0,0,S,0);this.shadow.direction===0?(this.ctx.translate(-S,-100),_.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")"),_.addColorStop(.9,"rgba(0, 0, 0, 0.05)"),_.addColorStop(.7,"rgba(0, 0, 0, "+this.shadow.opacity+")"),_.addColorStop(0,"rgba(0, 0, 0, 0)")):(this.ctx.translate(0,-100),_.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),_.addColorStop(.1,"rgba(0, 0, 0, 0.05)"),_.addColorStop(.3,"rgba(0, 0, 0, "+this.shadow.opacity+")"),_.addColorStop(1,"rgba(0, 0, 0, 0)")),this.ctx.clip(),this.ctx.fillStyle=_,this.ctx.fillRect(0,0,S,2*h.height),this.ctx.restore()}clear(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}}class y{constructor(h,x,k){this.touchPoint=null,this.swipeTimeout=250,this.onResize=()=>{this.update()},this.onMouseDown=_=>{if(this.checkTarget(_.target)){const C=this.getMousePos(_.clientX,_.clientY);this.app.startUserTouch(C),_.preventDefault()}},this.onTouchStart=_=>{if(this.checkTarget(_.target)&&_.changedTouches.length>0){const C=_.changedTouches[0],E=this.getMousePos(C.clientX,C.clientY);this.touchPoint={point:E,time:Date.now()},setTimeout(()=>{this.touchPoint!==null&&this.app.startUserTouch(E)},this.swipeTimeout),this.app.getSettings().mobileScrollSupport||_.preventDefault()}},this.onMouseUp=_=>{const C=this.getMousePos(_.clientX,_.clientY);this.app.userStop(C)},this.onMouseMove=_=>{const C=this.getMousePos(_.clientX,_.clientY);this.app.userMove(C,!1)},this.onTouchMove=_=>{if(_.changedTouches.length>0){const C=_.changedTouches[0],E=this.getMousePos(C.clientX,C.clientY);this.app.getSettings().mobileScrollSupport?(this.touchPoint!==null&&(Math.abs(this.touchPoint.point.x-E.x)>10||this.app.getState()!=="read")&&_.cancelable&&this.app.userMove(E,!0),this.app.getState()!=="read"&&_.preventDefault()):this.app.userMove(E,!0)}},this.onTouchEnd=_=>{if(_.changedTouches.length>0){const C=_.changedTouches[0],E=this.getMousePos(C.clientX,C.clientY);let z=!1;if(this.touchPoint!==null){const A=E.x-this.touchPoint.point.x,L=Math.abs(E.y-this.touchPoint.point.y);Math.abs(A)>this.swipeDistance&&L<2*this.swipeDistance&&Date.now()-this.touchPoint.time<this.swipeTimeout&&(A>0?this.app.flipPrev(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"):this.app.flipNext(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"),z=!0),this.touchPoint=null}this.app.userStop(E,z)}},this.parentElement=h,h.classList.add("stf__parent"),h.insertAdjacentHTML("afterbegin",'<div class="stf__wrapper"></div>'),this.wrapper=h.querySelector(".stf__wrapper"),this.app=x;const S=this.app.getSettings().usePortrait?1:2;h.style.minWidth=k.minWidth*S+"px",h.style.minHeight=k.minHeight+"px",k.size==="fixed"&&(h.style.minWidth=k.width*S+"px",h.style.minHeight=k.height+"px"),k.autoSize&&(h.style.width="100%",h.style.maxWidth=2*k.maxWidth+"px"),h.style.display="block",window.addEventListener("resize",this.onResize,!1),this.swipeDistance=k.swipeDistance}destroy(){this.app.getSettings().useMouseEvents&&this.removeHandlers(),this.distElement.remove(),this.wrapper.remove()}getDistElement(){return this.distElement}getWrapper(){return this.wrapper}setOrientationStyle(h){this.wrapper.classList.remove("--portrait","--landscape"),h==="portrait"?(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/this.app.getSettings().width*100+"%"),this.wrapper.classList.add("--portrait")):(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/(2*this.app.getSettings().width)*100+"%"),this.wrapper.classList.add("--landscape")),this.update()}removeHandlers(){window.removeEventListener("resize",this.onResize),this.distElement.removeEventListener("mousedown",this.onMouseDown),this.distElement.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("touchend",this.onTouchEnd)}setHandlers(){window.addEventListener("resize",this.onResize,!1),this.app.getSettings().useMouseEvents&&(this.distElement.addEventListener("mousedown",this.onMouseDown),this.distElement.addEventListener("touchstart",this.onTouchStart),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!this.app.getSettings().mobileScrollSupport}),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("touchend",this.onTouchEnd))}getMousePos(h,x){const k=this.distElement.getBoundingClientRect();return{x:h-k.left,y:x-k.top}}checkTarget(h){return!this.app.getSettings().clickEventForward||!["a","button"].includes(h.tagName.toLowerCase())}}class w extends y{constructor(h,x,k,S){super(h,x,k),this.wrapper.insertAdjacentHTML("afterbegin",'<div class="stf__block"></div>'),this.distElement=h.querySelector(".stf__block"),this.items=S;for(const _ of S)this.distElement.appendChild(_);this.setHandlers()}clear(){for(const h of this.items)this.parentElement.appendChild(h)}updateItems(h){this.removeHandlers(),this.distElement.innerHTML="";for(const x of h)this.distElement.appendChild(x);this.items=h,this.setHandlers()}update(){this.app.getRender().update()}}class D extends y{constructor(h,x,k){super(h,x,k),this.wrapper.innerHTML='<canvas class="stf__canvas"></canvas>',this.canvas=h.querySelectorAll("canvas")[0],this.distElement=this.canvas,this.resizeCanvas(),this.setHandlers()}resizeCanvas(){const h=getComputedStyle(this.canvas),x=parseInt(h.getPropertyValue("width"),10),k=parseInt(h.getPropertyValue("height"),10);this.canvas.width=x,this.canvas.height=k}getCanvas(){return this.canvas}update(){this.resizeCanvas(),this.app.getRender().update()}}class j extends f{constructor(h,x,k){super(h,x),this.outerShadow=null,this.innerShadow=null,this.hardShadow=null,this.hardInnerShadow=null,this.element=k,this.createShadows()}createShadows(){this.element.insertAdjacentHTML("beforeend",`<div class="stf__outerShadow"></div>
             <div class="stf__innerShadow"></div>
             <div class="stf__hardShadow"></div>
             <div class="stf__hardInnerShadow"></div>`),this.outerShadow=this.element.querySelector(".stf__outerShadow"),this.innerShadow=this.element.querySelector(".stf__innerShadow"),this.hardShadow=this.element.querySelector(".stf__hardShadow"),this.hardInnerShadow=this.element.querySelector(".stf__hardInnerShadow")}clearShadow(){super.clearShadow(),this.outerShadow.style.cssText="display: none",this.innerShadow.style.cssText="display: none",this.hardShadow.style.cssText="display: none",this.hardInnerShadow.style.cssText="display: none"}reload(){this.element.querySelector(".stf__outerShadow")||this.createShadows()}drawHardInnerShadow(){const h=this.getRect(),x=this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress;let k=(100-x)*(2.5*h.pageWidth)/100+20;k>h.pageWidth&&(k=h.pageWidth);let S=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+5).toString(10)};
            width: ${k}px;
            height: ${h.height}px;
            background: linear-gradient(to right,
                rgba(0, 0, 0, ${this.shadow.opacity*x/100}) 5%,
                rgba(0, 0, 0, 0) 100%);
            left: ${h.left+h.width/2}px;
            transform-origin: 0 0;
        `;S+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0);":"transform: translate3d(0, 0, 0) rotateY(180deg);",this.hardInnerShadow.style.cssText=S}drawHardOuterShadow(){const h=this.getRect();let x=(100-(this.shadow.progress>100?200-this.shadow.progress:this.shadow.progress))*(2.5*h.pageWidth)/100+20;x>h.pageWidth&&(x=h.pageWidth);let k=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+4).toString(10)};
            width: ${x}px;
            height: ${h.height}px;
            background: linear-gradient(to left, rgba(0, 0, 0, ${this.shadow.opacity}) 5%, rgba(0, 0, 0, 0) 100%);
            left: ${h.left+h.width/2}px;
            transform-origin: 0 0;
        `;k+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0) rotateY(180deg);":"transform: translate3d(0, 0, 0);",this.hardShadow.style.cssText=k}drawInnerShadow(){const h=this.getRect(),x=3*this.shadow.width/4,k=this.getDirection()===0?x:0,S=this.getDirection()===0?"to left":"to right",_=this.convertToGlobal(this.shadow.pos),C=this.shadow.angle+3*Math.PI/2,E=[this.pageRect.topLeft,this.pageRect.topRight,this.pageRect.bottomRight,this.pageRect.bottomLeft];let z="polygon( ";for(const L of E){let N=this.getDirection()===1?{x:-L.x+this.shadow.pos.x,y:L.y-this.shadow.pos.y}:{x:L.x-this.shadow.pos.x,y:L.y-this.shadow.pos.y};N=l.GetRotatedPoint(N,{x:k,y:100},C),z+=N.x+"px "+N.y+"px, "}z=z.slice(0,-2),z+=")";const A=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${x}px;
            height: ${2*h.height}px;
            background: linear-gradient(${S},
                rgba(0, 0, 0, ${this.shadow.opacity}) 5%,
                rgba(0, 0, 0, 0.05) 15%,
                rgba(0, 0, 0, ${this.shadow.opacity}) 35%,
                rgba(0, 0, 0, 0) 100%);
            transform-origin: ${k}px 100px;
            transform: translate3d(${_.x-k}px, ${_.y-100}px, 0) rotate(${C}rad);
            clip-path: ${z};
            -webkit-clip-path: ${z};
        `;this.innerShadow.style.cssText=A}drawOuterShadow(){const h=this.getRect(),x=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),k=this.shadow.angle+3*Math.PI/2,S=this.getDirection()===1?this.shadow.width:0,_=this.getDirection()===0?"to right":"to left",C=[{x:0,y:0},{x:h.pageWidth,y:0},{x:h.pageWidth,y:h.height},{x:0,y:h.height}];let E="polygon( ";for(const A of C)if(A!==null){let L=this.getDirection()===1?{x:-A.x+this.shadow.pos.x,y:A.y-this.shadow.pos.y}:{x:A.x-this.shadow.pos.x,y:A.y-this.shadow.pos.y};L=l.GetRotatedPoint(L,{x:S,y:100},k),E+=L.x+"px "+L.y+"px, "}E=E.slice(0,-2),E+=")";const z=`
            display: block;
            z-index: ${(this.getSettings().startZIndex+10).toString(10)};
            width: ${this.shadow.width}px;
            height: ${2*h.height}px;
            background: linear-gradient(${_}, rgba(0, 0, 0, ${this.shadow.opacity}), rgba(0, 0, 0, 0));
            transform-origin: ${S}px 100px;
            transform: translate3d(${x.x-S}px, ${x.y-100}px, 0) rotate(${k}rad);
            clip-path: ${E};
            -webkit-clip-path: ${E};
        `;this.outerShadow.style.cssText=z}drawLeftPage(){this.orientation!=="portrait"&&this.leftPage!==null&&(this.direction===1&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.leftPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.leftPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.leftPage.draw(this.flippingPage.getDrawingDensity())):this.leftPage.simpleDraw(0))}drawRightPage(){this.rightPage!==null&&(this.direction===0&&this.flippingPage!==null&&this.flippingPage.getDrawingDensity()==="hard"?(this.rightPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.rightPage.setHardDrawingAngle(180+this.flippingPage.getHardAngle()),this.rightPage.draw(this.flippingPage.getDrawingDensity())):this.rightPage.simpleDraw(1))}drawBottomPage(){if(this.bottomPage===null)return;const h=this.flippingPage!=null?this.flippingPage.getDrawingDensity():null;this.orientation==="portrait"&&this.direction===1||(this.bottomPage.getElement().style.zIndex=(this.getSettings().startZIndex+3).toString(10),this.bottomPage.draw(h))}drawFrame(){this.clear(),this.drawLeftPage(),this.drawRightPage(),this.drawBottomPage(),this.flippingPage!=null&&(this.flippingPage.getElement().style.zIndex=(this.getSettings().startZIndex+5).toString(10),this.flippingPage.draw()),this.shadow!=null&&this.flippingPage!==null&&(this.flippingPage.getDrawingDensity()==="soft"?(this.drawOuterShadow(),this.drawInnerShadow()):(this.drawHardOuterShadow(),this.drawHardInnerShadow()))}clear(){for(const h of this.app.getPageCollection().getPages())h!==this.leftPage&&h!==this.rightPage&&h!==this.flippingPage&&h!==this.bottomPage&&(h.getElement().style.cssText="display: none"),h.getTemporaryCopy()!==this.flippingPage&&h.hideTemporaryCopy()}update(){super.update(),this.rightPage!==null&&this.rightPage.setOrientation(1),this.leftPage!==null&&this.leftPage.setOrientation(0)}}class b{constructor(){this._default={startPage:0,size:"fixed",width:0,height:0,minWidth:0,maxWidth:0,minHeight:0,maxHeight:0,drawShadow:!0,flippingTime:1e3,usePortrait:!0,startZIndex:0,autoSize:!0,maxShadowOpacity:1,showCover:!1,mobileScrollSupport:!0,swipeDistance:30,clickEventForward:!0,useMouseEvents:!0,showPageCorners:!0,disableFlipByClick:!1}}getSettings(h){const x=this._default;if(Object.assign(x,h),x.size!=="stretch"&&x.size!=="fixed")throw new Error('Invalid size type. Available only "fixed" and "stretch" value');if(x.width<=0||x.height<=0)throw new Error("Invalid width or height");if(x.flippingTime<=0)throw new Error("Invalid flipping time");return x.size==="stretch"?(x.minWidth<=0&&(x.minWidth=100),x.maxWidth<x.minWidth&&(x.maxWidth=2e3),x.minHeight<=0&&(x.minHeight=100),x.maxHeight<x.minHeight&&(x.maxHeight=2e3)):(x.minWidth=x.width,x.maxWidth=x.width,x.minHeight=x.height,x.maxHeight=x.height),x}}(function(v,h){h===void 0&&(h={});var x=h.insertAt;if(v&&typeof document<"u"){var k=document.head||document.getElementsByTagName("head")[0],S=document.createElement("style");S.type="text/css",x==="top"&&k.firstChild?k.insertBefore(S,k.firstChild):k.appendChild(S),S.styleSheet?S.styleSheet.cssText=v:S.appendChild(document.createTextNode(v))}})(`.stf__parent {
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
}`),i.PageFlip=class extends class{constructor(){this.events=new Map}on(v,h){return this.events.has(v)?this.events.get(v).push(h):this.events.set(v,[h]),this}off(v){this.events.delete(v)}trigger(v,h,x=null){if(this.events.has(v))for(const k of this.events.get(v))k({data:x,object:h})}}{constructor(v,h){super(),this.isUserTouch=!1,this.isUserMove=!1,this.setting=null,this.pages=null,this.setting=new b().getSettings(h),this.block=v}destroy(){this.ui.destroy(),this.block.remove()}update(){this.render.update(),this.pages.show()}loadFromImages(v){this.ui=new D(this.block,this,this.setting);const h=this.ui.getCanvas();this.render=new g(this,this.setting,h),this.flipController=new p(this.render,this),this.pages=new s(this,this.render,v),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}loadFromHTML(v){this.ui=new w(this.block,this,this.setting,v),this.render=new j(this,this.setting,this.ui.getDistElement()),this.flipController=new p(this.render,this),this.pages=new d(this,this.render,this.ui.getDistElement(),v),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}updateFromImages(v){const h=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new s(this,this.render,v),this.pages.load(),this.pages.show(h),this.trigger("update",this,{page:h,mode:this.render.getOrientation()})}updateFromHtml(v){const h=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new d(this,this.render,this.ui.getDistElement(),v),this.pages.load(),this.ui.updateItems(v),this.render.reload(),this.pages.show(h),this.trigger("update",this,{page:h,mode:this.render.getOrientation()})}clear(){this.pages.destroy(),this.ui.clear()}turnToPrevPage(){this.pages.showPrev()}turnToNextPage(){this.pages.showNext()}turnToPage(v){this.pages.show(v)}flipNext(v="top"){this.flipController.flipNext(v)}flipPrev(v="top"){this.flipController.flipPrev(v)}flip(v,h="top"){this.flipController.flipToPage(v,h)}updateState(v){this.trigger("changeState",this,v)}updatePageIndex(v){this.trigger("flip",this,v)}updateOrientation(v){this.ui.setOrientationStyle(v),this.update(),this.trigger("changeOrientation",this,v)}getPageCount(){return this.pages.getPageCount()}getCurrentPageIndex(){return this.pages.getCurrentPageIndex()}getPage(v){return this.pages.getPage(v)}getRender(){return this.render}getFlipController(){return this.flipController}getOrientation(){return this.render.getOrientation()}getBoundsRect(){return this.render.getRect()}getSettings(){return this.setting}getUI(){return this.ui}getState(){return this.flipController.getState()}getPageCollection(){return this.pages}startUserTouch(v){this.mousePosition=v,this.isUserTouch=!0,this.isUserMove=!1}userMove(v,h){this.isUserTouch||h||!this.setting.showPageCorners?this.isUserTouch&&l.GetDistanceBetweenTwoPoint(this.mousePosition,v)>5&&(this.isUserMove=!0,this.flipController.fold(v)):this.flipController.showCorner(v)}userStop(v,h=!1){this.isUserTouch&&(this.isUserTouch=!1,h||(this.isUserMove?this.flipController.stopMove():this.flipController.flip(v)))}},Object.defineProperty(i,"__esModule",{value:!0})})})(sx,sx.exports);var IO=sx.exports;const AO=q.forwardRef((t,e)=>{const i=T.useRef(null),n=T.useRef([]),r=T.useRef(),[o,s]=T.useState([]);T.useImperativeHandle(e,()=>({pageFlip:()=>r.current}));const l=T.useCallback(()=>{r.current&&r.current.clear()},[]),c=T.useCallback(()=>{const d=r.current;d&&(d.off("flip"),d.off("changeOrientation"),d.off("changeState"),d.off("init"),d.off("update"))},[]);return T.useEffect(()=>{if(n.current=[],t.children){const d=q.Children.map(t.children,u=>q.cloneElement(u,{ref:p=>{p&&n.current.push(p)}}));(!t.renderOnlyPageLengthChange||o.length!==d.length)&&(d.length<o.length&&l(),s(d))}},[t.children]),T.useEffect(()=>{const d=()=>{const u=r.current;u&&(t.onFlip&&u.on("flip",p=>t.onFlip(p)),t.onChangeOrientation&&u.on("changeOrientation",p=>t.onChangeOrientation(p)),t.onChangeState&&u.on("changeState",p=>t.onChangeState(p)),t.onInit&&u.on("init",p=>t.onInit(p)),t.onUpdate&&u.on("update",p=>t.onUpdate(p)))};o.length>0&&n.current.length>0&&(c(),i.current&&!r.current&&(r.current=new IO.PageFlip(i.current,t)),r.current.getFlipController()?r.current.updateFromHtml(n.current):r.current.loadFromHTML(n.current),d())},[o]),q.createElement("div",{ref:i,className:t.className,style:t.style},o)}),MO=q.memo(AO),zO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-1.aed8b9cd.png",FO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-2.7731f876.png",RO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-3.38331a08.png",LO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-4.61d5cc73.png",NO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-5.da16f760.png",OO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-6.1768ad61.png",$O="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-7.f9b41058.png",BO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-8.3ec2252f.png",VO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-9.245203a3.png",WO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-10.c644188d.png",UO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-11.fe776231.png",HO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-12.c5ba26ce.png",YO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-13.2d4ec13b.png",GO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-14.b7fe6d1a.png",XO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-15.4a94aa2b.png",ZO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-16.16bdb77b.png",qO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-17.d47c2494.png",QO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-18.005ef503.png",KO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-19.2b0aceb0.png",JO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-20.03ab72dc.png",e$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-21.72d8daf3.png",t$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-22.e37eb36d.png",i$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-23.5a5dcf39.png",n$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-24.2d6a2bac.png",r$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-25.a612f85b.png",o$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-26.69a075d6.png",s$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-27.a9cc178b.png",a$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-28.d4b813b5.png",l$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-29.3a458449.png",c$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-30.9ed29b6f.png",d$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-31.0082231b.png",u$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-32.b86f8071.png",h$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-33.114f0b9b.png",p$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-34.59db362b.png",f$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-35.4190176b.png",m$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-36.cb7ba05f.png",g$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-37.e76ac7b7.png",x$=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: #fff;
  /* border: 2px solid red; */
`,w$=m.div`
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
`,v$=m.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
`,bb=m.button`
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
`,y$=m.span`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,b$=m.div`
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
`;const k$=()=>{const t=T.useRef(null),[e,i]=T.useState(2);console.log("FlipBook component rendering");const n=[zO,FO,RO,LO,NO,OO,$O,BO,VO,WO,UO,HO,YO,GO,XO,ZO,qO,QO,KO,JO,e$,t$,i$,n$,r$,o$,s$,a$,l$,c$,d$,u$,h$,p$,f$,m$,g$];console.log("Pages array length:",n.length);const r=()=>{t.current&&t.current.pageFlip().flipNext()},o=()=>{t.current&&t.current.pageFlip().flipPrev()},s=l=>{i(l.data+1)};return a.jsxs(x$,{id:"veen-brand-book",children:[a.jsx("h2",{style:{marginBottom:"1rem",fontWeight:700,fontSize:"2.2rem",color:"#222",letterSpacing:"-1px"},children:"Brand Book"}),a.jsxs(w$,{children:[a.jsxs("p",{style:{display:"none"},children:["Total pages: ",n.length]}),a.jsxs("p",{style:{display:"none"},children:["Current page: ",e]}),a.jsx(MO,{ref:t,width:window.innerWidth<600?320:window.innerWidth<900?400:580,height:window.innerWidth<600?320:window.innerWidth<900?400:580,size:"stretch",minWidth:200,maxWidth:700,minHeight:200,maxHeight:700,showCover:!0,flippingTime:1e3,usePortrait:!1,startPage:1,drawShadow:!0,className:"demo-book",style:{margin:"0 auto",display:"block",width:"100%",maxWidth:"100vw",boxSizing:"border-box",overflowX:"hidden"},onFlip:s,onInit:()=>{i(2)},children:n.map((l,c)=>a.jsx(b$,{className:"demoPage",children:a.jsx("img",{src:l,alt:`Page ${c+1}`})},c))})]}),a.jsxs(v$,{children:[a.jsx(bb,{onClick:o,disabled:e<=1,children:"Previous"}),a.jsxs(y$,{children:["Page ",e," of ",n.length]}),a.jsx(bb,{onClick:r,disabled:e>=n.length,children:"Next"})]})]})},tr=m.span`
  color: #9ed4d1;
  font-weight: 600;
`,j$=[{title:"Logo",description:a.jsxs(a.Fragment,{children:["Create a logo that is personal, soft, and ",a.jsx(tr,{children:"memorable"})," with a ",a.jsx(tr,{children:"hidden meaning"})," that connects to ",a.jsx(tr,{children:"photography"})," and ",a.jsx(tr,{children:"family"}),"."]})},{title:"Color Palette",description:a.jsxs(a.Fragment,{children:["Find colors that express ",a.jsx(tr,{children:"warmth"}),", ",a.jsx(tr,{children:"trust"}),", and ",a.jsx(tr,{children:"joy"}),", while keeping the tone modern and soft not too bold or cold."]})},{title:"Typography",description:a.jsxs(a.Fragment,{children:["Choose fonts that feel ",a.jsx(tr,{children:"friendly"}),", ",a.jsx(tr,{children:"clean"}),", and professional readable for both digital and print use."]})},{title:"Social Media",description:a.jsx(a.Fragment,{children:"Design social visuals that align with the brand values and look cohesive, warm, and creative across platforms."})}],S$=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`,D$=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`,_$=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`,C$=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.2rem;
`,P$=m.div`
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
`,T$=m.div`
  font-size: 1.01rem;
  font-weight: 600;
  color: #888;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-align: center;
`,E$=m.div`
  font-weight: 400;
  font-size: 1.08rem;
  color: #222;
  line-height: 1.5;
  letter-spacing: -0.1px;
  text-align: center;
`;function I$(){return a.jsxs(S$,{id:"veen-challenges",children:[a.jsx(D$,{children:"Key Challenges"}),a.jsx(_$,{children:"The project required solving four main creative challenges to build a cohesive, expressive brand identity for Veen."}),a.jsx(C$,{children:j$.map(t=>a.jsxs(P$,{children:[a.jsx(T$,{children:t.title}),a.jsx(E$,{children:t.description})]},t.title))})]})}const A$=m.div`
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
`,M$=m.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: left;
`,z$=m.button`
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
`,_0=[{id:"overview",label:"Overview",targetId:"veen-first"},{id:"challenges",label:"Key Challenges",targetId:"veen-problem"},{id:"logo",label:"Logo Design",targetId:"veen-logo"},{id:"color",label:"Color Palette",targetId:"veen-color"},{id:"typography",label:"Typography",targetId:"veen-typography"},{id:"brand-book",label:"Brand Book",targetId:"veen-brand-book"},{id:"mockups",label:"Mockups",targetId:"veen-mockups"}],F$=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("overview");q.useEffect(()=>{const o={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},s=new IntersectionObserver(l=>{l.forEach(c=>{if(c.isIntersecting){const d=c.target.id,u=_0.find(p=>p.targetId===d);u&&n(u.id)}})},o);return _0.forEach(l=>{const c=document.getElementById(l.targetId);c&&s.observe(c)}),()=>{s.disconnect()}},[]);const r=(o,s)=>{const l=document.getElementById(o);l&&(l.scrollIntoView({behavior:"smooth",block:"center"}),e(s))};return a.jsxs(A$,{children:[a.jsx(M$,{children:"Menu"}),_0.map(o=>a.jsx(z$,{isActive:i===o.id,isClicked:t===o.id,onClick:()=>r(o.targetId,o.id),children:o.label},o.id))]})},R$=()=>{const t=()=>{const e=document.querySelector("#veen-first");e&&e.scrollIntoView({behavior:"smooth",block:"start"})};return a.jsx("div",{style:{position:"fixed",bottom:"24px",right:"24px",zIndex:9999,pointerEvents:"auto"},children:a.jsx("button",{onClick:t,style:{width:"48px",height:"48px",backgroundColor:"rgba(255, 255, 255, 0.9)",borderRadius:"50%",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",color:"#333",backdropFilter:"blur(10px)",boxShadow:"0 2px 8px rgba(0,0,0,0.1)",transition:"all 0.2s ease",border:"none"},"aria-label":"Scroll to top",onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-2px)",e.currentTarget.style.boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.1)"},children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M12 4L12 20M12 4L6 10M12 4L18 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})},L$=m.div`
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
`;Pr`
  body {
    background: #fff;
    margin: 0;
    padding: 0;
    overflow-y: auto;
  }
  html {
    overflow-x: hidden;
  }
`;const N$=()=>a.jsxs(a.Fragment,{children:[a.jsxs(L$,{children:[a.jsx(rt,{title:"Veen Project | Nooshin Shahsavan - Brand Identity & Design",description:"Explore the Veen project - a sophisticated branding project by Nooshin Shahsavan creating an elegant and timeless visual identity with premium aesthetics.",keywords:"Veen project, brand identity, logo design, visual design, branding, Nooshin Shahsavan, design portfolio",image:"/src/assets/veen/brand-strategy.png"}),a.jsx(F$,{}),a.jsx("div",{id:"veen-first",children:a.jsx(gN,{})}),a.jsx("div",{id:"veen-second",children:a.jsx(SN,{})}),a.jsx("div",{id:"veen-problem",children:a.jsx(I$,{})}),a.jsxs("div",{id:"veen-logo",children:[a.jsx(IN,{}),a.jsx(EO,{})]}),a.jsx("div",{id:"veen-color",children:a.jsx(LN,{})}),a.jsx("div",{id:"veen-typography",children:a.jsx(eO,{})}),a.jsxs("div",{id:"veen-brand-book",children:[a.jsx(aO,{}),a.jsx(k$,{})]}),a.jsxs("div",{id:"veen-mockups",children:[a.jsx("h2",{style:{width:"70vw",margin:"2.5rem auto 1.5rem auto",textAlign:"center",fontSize:"2.5rem",fontWeight:700,letterSpacing:"0.04em",color:"#222",background:"transparent",border:"none"},children:"Mockups"}),a.jsx(VN,{}),a.jsx(GN,{}),a.jsx(hO,{}),a.jsx(xO,{})]}),a.jsx(Bs,{}),a.jsx(Os,{})]}),a.jsx(R$,{})]}),O$="/Nooshin-Shahsavan-portfolio/assets/deli1.87111f97.mp4",$$=m.section`
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
`,B$=m.h1`
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
`,V$=m.p`
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
`,W$=m.div`
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
`,U$=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,H$=m.div`
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
`,Su=m.div`
  min-width: 120px;
  text-align: center;
`,Du=m.div`
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
`,Y$=()=>a.jsxs($$,{id:"deli-overview",children:[a.jsx(B$,{children:"Delicato — Overview"}),a.jsx(V$,{children:"Delicato is a small interior design company from Italy, inspired by the classical architecture of ancient Rome. The brand’s core value is to create spaces that blend the richness of historical elements with modern aesthetics, bringing timeless elegance into contemporary living."}),a.jsx(W$,{children:a.jsx(U$,{src:O$,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Delicato project video"})}),a.jsxs(H$,{children:[a.jsxs(Su,{children:[a.jsx(Du,{children:"Role"}),a.jsx(_u,{children:"Brand Designer"})]}),a.jsxs(Su,{children:[a.jsx(Du,{children:"Tools"}),a.jsx(_u,{children:"Illustrator, Photoshop, After Effects"})]}),a.jsxs(Su,{children:[a.jsx(Du,{children:"Timeline"}),a.jsx(_u,{children:"4 weeks"})]}),a.jsxs(Su,{children:[a.jsx(Du,{children:"Year"}),a.jsx(_u,{children:"2024"})]})]})]}),G$="/Nooshin-Shahsavan-portfolio/assets/deli2.41d6e489.mp4",X$=m.section`
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
`,Z$=m.div`
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
`,q$=m.video`
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
`,Q$=m.div`
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
`,K$=m.p`
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
`,J$=m.div`
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
`,eB=()=>a.jsx(X$,{children:a.jsxs(Q$,{children:[a.jsx(Z$,{children:a.jsx(q$,{src:G$,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Delicato video"})}),a.jsx(K$,{children:"This project was a rewarding opportunity to combine my passion for art history with design. It allowed me to revisit favorite references like Art Through the Ages by Helen Gardner and The Story of Art by Ernst Gombrich.For this project, I was responsible for developing the entire brand identity from logo, color palette, and typography to final mockups."}),a.jsx(J$,{children:"Aim➝ Inspiration from classical Roman architecture ➝ Timeless brand identity ➝ Blend of historical elegance and modern design"})]})}),tB=m.section`
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
`,iB=m.h2`
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
`,nB=m.div`
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
`,kb=m.div`
  font-size: 0.98rem;
  color: #888;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 1.2em;
  margin-bottom: 0.3em;
`,Wo=m.span`
  color: #b48a3b;
  font-weight: 400;
`,rB=()=>a.jsxs(tB,{children:[a.jsx(iB,{children:"Logo Design"}),a.jsxs(nB,{children:[a.jsx(kb,{children:"I drew inspiration"}),"From the ",a.jsx(Wo,{children:"iconic classical columns"}),", which are widely recognized ",a.jsx(Wo,{children:"symbols"})," of that era. I developed a ",a.jsx(Wo,{children:"minimal"}),", ",a.jsx(Wo,{children:"elegant"}),' symbol that merges with the letter "D" in "Delicato".',a.jsx(kb,{children:"The column is"}),"Abstracted into a balance of ",a.jsx(Wo,{children:"positive and negative"})," space, evoking both strength and delicacy. A subtle ",a.jsx(Wo,{children:"break"})," in the lower curved line represents the passage of time, the ",a.jsx(Wo,{children:"separation and connection"})," between classical and modern eras. The overall form is clean and memorable, encapsulating the brand's concept of timeless elegance."]})]}),oB="/Nooshin-Shahsavan-portfolio/assets/deli4.497079d2.mp4",sB="/Nooshin-Shahsavan-portfolio/assets/deli5.60fb829b.mp4",aB=m.section`
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
`,lB=m.div`
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
`,jb=m.div`
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
`,Db=m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 16px;
  box-sizing: border-box;
`,cB=()=>a.jsx(aB,{children:a.jsxs(lB,{children:[a.jsx(jb,{children:a.jsx(Sb,{children:a.jsx(Db,{src:oB,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Deli video 4"})})}),a.jsx(jb,{children:a.jsx(Sb,{children:a.jsx(Db,{src:sB,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Deli video 5"})})})]})}),dB="/Nooshin-Shahsavan-portfolio/assets/deli6.d0af3bb2.mp4",uB=m.section`
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
`,hB=m.h2`
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
`,pB=m.div`
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
`,fB=m.div`
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
`,mB=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,gB=()=>{const t=T.useRef(null),[e,i]=T.useState(!1);return T.useEffect(()=>{const n=()=>{if(!e&&t.current){const r=t.current.getBoundingClientRect();r.top<window.innerHeight&&r.bottom>0&&(t.current.play(),i(!0))}};return window.addEventListener("scroll",n),n(),()=>window.removeEventListener("scroll",n)},[e]),a.jsxs(uB,{children:[a.jsx(hB,{children:"Color Palette"}),a.jsx(pB,{children:"I chose colors that, in every era, evoke memories of architecture, interior design, and architectural materials, such as the colors of brick, stone, and earth."}),a.jsx(fB,{children:a.jsx(mB,{ref:t,src:dB,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Color palette video"})})]})},xB="/Nooshin-Shahsavan-portfolio/assets/deli7.5c1f49b2.mp4",wB=m.section`
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
`,vB=m.h2`
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
`,yB=m.p`
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
`,bB=m.div`
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
`,kB=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,jB=()=>a.jsxs(wB,{id:"deli-typography",children:[a.jsx(vB,{children:"Typography"}),a.jsx(yB,{children:"I chose Gyst Variable for its contemporary yet classic feel, and paired it with Roc Grotesk a clean, highly legible sans-serif ideal for web use."}),a.jsx(bB,{children:a.jsx(kB,{src:xB,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Typography video"})})]}),SB=m.section`
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
`,DB=m.h2`
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
`,_B=m.img`
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
`,CB=()=>{const[t,e]=q.useState(!1);return a.jsxs(SB,{children:[a.jsx(DB,{children:"Mockups"}),t?a.jsx("div",{style:{color:"white",fontSize:24},children:"Image failed to load"}):a.jsx(_B,{src:x4,alt:"Deli 8",onError:()=>e(!0)})]})},PB="/Nooshin-Shahsavan-portfolio/assets/deli12.00fb3c37.jpg",TB=m.section`
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
`,EB=m.div`
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
`,IB=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,AB=()=>a.jsx(TB,{children:a.jsx(EB,{children:a.jsx(IB,{src:PB,alt:"Deli 12"})})}),MB="/Nooshin-Shahsavan-portfolio/assets/delistory.8abf3468.mp4",zB=m.section`
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
`,FB=m.div`
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
`,RB=m.video`
  width: 40%;
  height: auto;
  display: block;
  background: transparent;
`,LB=()=>a.jsx(zB,{children:a.jsx(FB,{children:a.jsx(RB,{src:MB,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!0})})}),NB="/Nooshin-Shahsavan-portfolio/assets/delistory2.6f7abd8c.png",OB=m.section`
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
`,$B=m.div`
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
`,BB=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,VB=()=>a.jsx(OB,{children:a.jsx($B,{children:a.jsx(BB,{src:NB,alt:"Deli Story 2"})})}),WB="/Nooshin-Shahsavan-portfolio/assets/deliweb.60e10190.mp4",UB=m.section`
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
`,HB=m.div`
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
`,YB=m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,GB=()=>a.jsx(UB,{children:a.jsx(HB,{children:a.jsx(YB,{src:WB,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1})})}),XB="/Nooshin-Shahsavan-portfolio/assets/deli11.8ce54a26.png",ZB=m.section`
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
`,qB=m.div`
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
`,QB=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,KB=()=>a.jsx(ZB,{children:a.jsx(qB,{children:a.jsx(QB,{src:XB,alt:"Deli 11"})})}),JB="/Nooshin-Shahsavan-portfolio/assets/deli13.83ec81c5.jpg",eV=m.section`
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
`,tV=m.div`
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
`,iV=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,nV=()=>a.jsx(eV,{children:a.jsx(tV,{children:a.jsx(iV,{src:JB,alt:"Deli 13"})})}),rV="/Nooshin-Shahsavan-portfolio/assets/carrd.238e693c.png",oV=m.section`
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
`,sV=m.div`
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
`,aV=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,lV=()=>a.jsx(oV,{children:a.jsx(sV,{children:a.jsx(aV,{src:rV,alt:"Card Mockup"})})}),cV=[new URL("/Nooshin-Shahsavan-portfolio/assets/d1.7971c3a9.png",self.location).href,new URL("/Nooshin-Shahsavan-portfolio/assets/d2.094353a7.jpg",self.location).href,new URL("/Nooshin-Shahsavan-portfolio/assets/d3.54dad30d.png",self.location).href,new URL("/Nooshin-Shahsavan-portfolio/assets/d4.db60ea51.png",self.location).href],dV=m.section`
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
`,uV=m.h2`
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
`,hV=m.div`
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
`,pV=m.div`
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
`,fV=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;function mV(){return a.jsxs(dV,{id:"deli-logo",children:[a.jsx(uV,{children:"Logo Explorations"}),a.jsx(hV,{children:cV.map((t,e)=>a.jsx(pV,{children:a.jsx(fV,{src:t,alt:`logo-exploration-${e}`,loading:"lazy"})},t+e))})]})}const ta=m.span`
  color: #b48a3b;
  font-weight: 400;
`,gV=[{title:"Logo",description:a.jsxs(a.Fragment,{children:["Design a logo that blends ",a.jsx(ta,{children:"classical Roman"})," inspiration with a ",a.jsx(ta,{children:"modern minimalist"})," identity."]})},{title:"Color Palette",description:a.jsxs(a.Fragment,{children:["Choose colors that reflect ",a.jsx(ta,{children:"historical elegance"}),", while also feeling warm, safe, and approachable for ",a.jsx(ta,{children:"modern"})," families."]})},{title:"Typography",description:a.jsxs(a.Fragment,{children:["Use typography that combines a sense of ",a.jsx(ta,{children:"classical luxury"})," with ",a.jsx(ta,{children:"modern readability"})," for both print and digital platforms."]})},{title:"Visual Tone",description:a.jsx(a.Fragment,{children:"Design social visuals that align with the brand values and look cohesive, warm, and creative across platforms."})}],xV=m.section`
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
`,wV=m.h2`
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
`,vV=m.p`
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
`,yV=m.div`
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
`,bV=m.div`
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
`,kV=m.div`
  font-size: 1.01rem;
  font-weight: 600;
  color: #888;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-align: center;
`,jV=m.div`
  font-weight: 400;
  font-size: 1.08rem;
  color: #222;
  line-height: 1.5;
  letter-spacing: -0.1px;
  text-align: center;
`;function SV(){return a.jsxs(xV,{id:"deli-challenges",children:[a.jsx(wV,{children:"Key Challenges"}),a.jsx(vV,{children:"The project required solving four main creative challenges to build a cohesive, expressive brand identity for Delicato."}),a.jsx(yV,{children:gV.map(t=>a.jsxs(bV,{children:[a.jsx(kV,{children:t.title}),a.jsx(jV,{children:t.description})]},t.title))})]})}const DV="/Nooshin-Shahsavan-portfolio/assets/story-1-deli.21d47079.mp4",_V=m.section`
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
`,CV=m.div`
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
`,PV=m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`;m.div`
  width: 100%;
  height: 100vh;
  // ... existing styles ...
`;const TV=()=>a.jsx(_V,{children:a.jsx(CV,{children:a.jsx(PV,{src:DV,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Delicato video"})})}),EV="/Nooshin-Shahsavan-portfolio/assets/delin.6105b982.jpg",IV=m.section`
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
`,AV=m.div`
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
`,MV=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,zV=()=>a.jsx(IV,{children:a.jsx(AV,{children:a.jsx(MV,{src:EV,alt:"Deli 14"})})}),FV=m.div`
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
`,RV=m.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: left;
`,LV=m.button`
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
`,C0=[{id:"overview",label:"Overview",targetId:"deli-first"},{id:"challenges",label:"Key Challenges",targetId:"deli-problem"},{id:"logo",label:"Logo Design",targetId:"deli-logo"},{id:"typography",label:"Typography",targetId:"deli-typography"},{id:"mockups",label:"Mockups",targetId:"deli-mockups"}],NV=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("overview");q.useEffect(()=>{const o={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},s=new IntersectionObserver(l=>{l.forEach(c=>{if(c.isIntersecting){const d=c.target.id,u=C0.find(p=>p.targetId===d);u&&n(u.id)}})},o);return C0.forEach(l=>{const c=document.getElementById(l.targetId);c&&s.observe(c)}),()=>{s.disconnect()}},[]);const r=(o,s)=>{const l=document.getElementById(o);l&&(l.scrollIntoView({behavior:"smooth",block:"center"}),e(s))};return a.jsxs(FV,{children:[a.jsx(RV,{children:"Menu"}),C0.map(o=>a.jsx(LV,{isActive:i===o.id,isClicked:t===o.id,onClick:()=>r(o.targetId,o.id),children:o.label},o.id))]})},OV=m.div`
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
`;Pr`
  body {
    background: #fff;
    overflow-x: hidden;
  }
`;const $V=m.h2`
  width: 100vw;
  text-align: center;
  color: #111;
  font-size: 2.4rem;
  font-weight: 700;
  margin: 4rem 0 2rem 0;
  letter-spacing: 0.04em;
`,BV=()=>a.jsxs(a.Fragment,{children:[a.jsxs(OV,{children:[a.jsx(rt,{title:"Delicato Project | Nooshin Shahsavan - Brand Design & Packaging",description:"Explore the Delicato project - a creative branding and packaging design project by Nooshin Shahsavan emphasizing artisanal craftsmanship and premium quality.",keywords:"Delicato project, brand design, packaging design, logo design, visual identity, Nooshin Shahsavan, design portfolio",image:"/src/assets/deli/deli-home.png"}),a.jsx(NV,{}),a.jsx("div",{id:"deli-first",children:a.jsx(Y$,{})}),a.jsx("div",{id:"deli-second",children:a.jsx(eB,{})}),a.jsx("div",{id:"deli-problem",children:a.jsx(SV,{})}),a.jsxs("div",{id:"deli-logo",children:[a.jsx(rB,{}),a.jsx(mV,{})]}),a.jsxs("div",{id:"deli-typography",children:[a.jsx(cB,{}),a.jsx(gB,{}),a.jsx(jB,{})]}),a.jsxs("div",{id:"deli-mockups",children:[a.jsx($V,{children:"Mockups"}),a.jsx(CB,{}),a.jsx(zV,{}),a.jsx(lV,{}),a.jsx(AB,{}),a.jsx(KB,{}),a.jsx(nV,{}),a.jsx(TV,{}),a.jsx(LB,{}),a.jsx(VB,{}),a.jsx(GB,{})]}),a.jsx(Bs,{}),a.jsx(Os,{})]}),a.jsx($s,{})]}),VV="/Nooshin-Shahsavan-portfolio/assets/zar-logoline.159d8655.mp4",WV=m.section`
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
`,UV=m.h1`
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
`,HV=m.p`
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
`,YV=m.div`
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
`,GV=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,XV=m.div`
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
`,ZV=()=>a.jsxs(WV,{children:[a.jsx(UV,{children:"Zar — Overview"}),a.jsx(HV,{children:"I was responsible for designing the brand identity and packaging system for ZAR, a premium saffron brand. The project focused on merging Persian cultural elements with a modern, minimalist aesthetic. My work included developing the logo, typography, color palette, and packaging design to reflect the brand's aim of positioning saffron as a luxury product rooted in heritage."}),a.jsx(YV,{children:a.jsx(GV,{src:VV,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Zar project video"})}),a.jsxs(XV,{children:[a.jsxs(Cu,{children:[a.jsx(Pu,{children:"Role"}),a.jsx(Tu,{children:"Brand Designer"})]}),a.jsxs(Cu,{children:[a.jsx(Pu,{children:"Tools"}),a.jsx(Tu,{children:"Illustrator, After Effects, Photoshop"})]}),a.jsxs(Cu,{children:[a.jsx(Pu,{children:"Timeline"}),a.jsx(Tu,{children:"4 weeks"})]}),a.jsxs(Cu,{children:[a.jsx(Pu,{children:"Year"}),a.jsx(Tu,{children:"2023"})]})]})]}),qV="/Nooshin-Shahsavan-portfolio/assets/moodboard-zar.486cf3b1.png",QV=m.section`
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
`,KV=m.h1`
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
`,JV=m.p`
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
`,eW=m.div`
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
`,tW=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,iW=m.div`
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
`,nW=()=>a.jsxs(QV,{children:[a.jsx(KV,{children:"About Zar"}),a.jsx(JV,{children:'ZAR is a premium saffron brand rooted in Persian culture. The name means "gold" in Persian, reflecting the value and heritage of saffron. The brand combines traditional elements with modern design to present saffron as a high-end, culturally rich product for a global audience.'}),a.jsx(eW,{children:a.jsx(tW,{src:qV,alt:"Brand Strategy Visual"})}),a.jsx(iW,{children:"Aim → Persian Heritage → Cultural Authenticity → Modern Design → Unforgettable Experience"})]}),rW="/Nooshin-Shahsavan-portfolio/assets/logo-zar-1.7784827d.png",oW="/Nooshin-Shahsavan-portfolio/assets/zar-logo.e384c156.mp4",sW="/Nooshin-Shahsavan-portfolio/assets/logo-zar-2.a449b6ed.png",aW=m.section`
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
`,lW=m.h1`
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
`,_b=m.p`
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
`,P0=m.span`
  color: rgb(163, 73, 198);
  font-weight: 400;
`,cW=m.div`
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
`,dW=m.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`,uW=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  border-radius: 8px;
`,Cb=m.img`
  width: 50%;
  height: auto;
  display: block;
  background: transparent;
  border-radius: 8px;
  @media (max-width: 600px) {
    width: 100%;
  }
`,hW=()=>a.jsxs(aW,{children:[a.jsx(lW,{children:"Logo Design"}),a.jsxs(_b,{children:["For the pictorial logo, my goal was to ",a.jsx(P0,{children:"represent a symbol of the saffron flower"}),". Therefore, based on the images provided below, you can see the steps of analyzing a real saffron flower, simplifying its form, and finally creating the resulting logo design."]}),a.jsxs(cW,{children:[a.jsx(uW,{src:oW,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"ZAR logo animation"}),a.jsxs(dW,{children:[a.jsx(Cb,{src:rW,alt:"ZAR logo design"}),a.jsx(Cb,{src:sW,alt:"ZAR logo variations"})]})]}),a.jsxs(_b,{children:["In the wordmark logo, I tried to design something that reflects the ",a.jsx(P0,{children:"delicacy"})," and ",a.jsx(P0,{children:"fragility of saffron"}),". That's why I chose a fine and elegant typeface."]})]}),pW="/Nooshin-Shahsavan-portfolio/assets/zar-color.c2162f1e.mp4",fW=m.section`
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
`,mW=m.h1`
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
`,gW=m.p`
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
`,xW=m.div`
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
`,wW=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,vW=m.div`
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
`,T0=m.div`
  min-width: 120px;
  text-align: center;
`,E0=m.div`
  font-size: 0.92rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 0.2em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,I0=m.div`
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
`,yW=()=>a.jsxs(fW,{children:[a.jsx(mW,{children:"Color Palette"}),a.jsx(gW,{children:`I chose these colors based on several goals: The brand name Zar means "gold" in Persian, symbolizing both the value of the product and its preciousness. Purple represents the color of the saffron flower and is also associated with loyalty. Red reflects the color of the flower's stamen.`}),a.jsx(xW,{children:a.jsx(wW,{src:pW,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Color palette video"})}),a.jsxs(vW,{children:[a.jsxs(T0,{children:[a.jsx(E0,{children:"Primary"}),a.jsx(I0,{children:"Royal Purple"})]}),a.jsxs(T0,{children:[a.jsx(E0,{children:"Secondary"}),a.jsx(I0,{children:"Metallic Gold"})]}),a.jsxs(T0,{children:[a.jsx(E0,{children:"Accent"}),a.jsx(I0,{children:"Deep Black"})]})]})]}),bW="/Nooshin-Shahsavan-portfolio/assets/zar-type.3a8d8e25.mp4",kW=m.section`
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
`,jW=m.h1`
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
`,SW=m.p`
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
`,DW=m.div`
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
`,_W=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,CW=m.div`
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
`,A0=m.div`
  min-width: 120px;
  text-align: center;
`,M0=m.div`
  font-size: 0.92rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 0.2em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,z0=m.div`
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
`,PW=()=>a.jsxs(kW,{children:[a.jsx(jW,{children:"Typography"}),a.jsx(SW,{children:"Primary Typeface: Amandine Elegant and finely curved, perfect for headlines and packaging. Secondary Typeface: Housechks A handwritten script that brings warmth and human feeling to the brand."}),a.jsx(DW,{children:a.jsx(_W,{src:bW,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Typography video"})}),a.jsxs(CW,{children:[a.jsxs(A0,{children:[a.jsx(M0,{children:"Primary"}),a.jsx(z0,{children:"Amandine"})]}),a.jsxs(A0,{children:[a.jsx(M0,{children:"Secondary"}),a.jsx(z0,{children:"Housechks"})]}),a.jsxs(A0,{children:[a.jsx(M0,{children:"Style"}),a.jsx(z0,{children:"Elegant & Warm"})]})]})]}),TW="/Nooshin-Shahsavan-portfolio/assets/box-1.2cee20a2.jpg",EW=m.section`
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
`,IW=m.h1`
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
`,AW=m.p`
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
`,MW=m.div`
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
`,zW=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,FW=m.div`
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
`,F0=m.div`
  min-width: 120px;
  text-align: center;
`,R0=m.div`
  font-size: 0.92rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 0.2em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,L0=m.div`
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
`,RW=()=>a.jsxs(EW,{children:[a.jsx(IW,{children:"Packaging"}),a.jsx(AW,{children:"Design packaging that is luxurious, functional, and deeply rooted in Persian culture, while appealing to global consumers. I designed a sliding drawer box with an inner wrapping layer to both protect the saffron and enhance the unboxing experience. The graphics feature an abstract saffron flower illustration, blending organic lines with Eastern motifs to reflect ZAR's Persian origin."}),a.jsx(MW,{children:a.jsx(zW,{src:TW,alt:"Zar Packaging Design"})}),a.jsxs(FW,{children:[a.jsxs(F0,{children:[a.jsx(R0,{children:"Style"}),a.jsx(L0,{children:"Luxurious & Cultural"})]}),a.jsxs(F0,{children:[a.jsx(R0,{children:"Material"}),a.jsx(L0,{children:"Premium Cardboard"})]}),a.jsxs(F0,{children:[a.jsx(R0,{children:"Colors"}),a.jsx(L0,{children:"Gold, Purple, Black"})]})]})]}),LW="/Nooshin-Shahsavan-portfolio/assets/zarbscard.18ade34e.jpg",NW=m.section`
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
`,OW=m.div`
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
`,$W=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,BW=()=>a.jsx(NW,{children:a.jsx(OW,{children:a.jsx($W,{src:LW,alt:"Zar Mockup 1"})})}),VW=m.section`
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
`,WW=m.div`
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
`,UW=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  object-fit: contain;
`,HW=()=>a.jsx(VW,{children:a.jsx(WW,{children:a.jsx(UW,{src:tw,alt:"Zar Mockup 2"})})}),YW="/Nooshin-Shahsavan-portfolio/assets/buttle.45644225.jpg",GW=m.section`
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
`,XW=m.div`
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
`,ZW=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  object-fit: contain;
`,qW=()=>a.jsx(GW,{children:a.jsx(XW,{children:a.jsx(ZW,{src:YW,alt:"Zar Mockup 3"})})}),QW="/Nooshin-Shahsavan-portfolio/assets/webzar.8382f801.png",KW=m.section`
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
`,JW=m.div`
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
`,eU=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  object-fit: contain;
`,tU=()=>a.jsx(KW,{children:a.jsx(JW,{children:a.jsx(eU,{src:QW,alt:"Zar Mockup 5"})})}),iU="/Nooshin-Shahsavan-portfolio/assets/story-zar-1.66d234e7.mp4",nU=m.section`
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
`,rU=m.div`
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
`,oU=m.video`
  width: 30%;
  height: auto;
  display: block;
  background: transparent;
  @media (max-width: 600px) {
    width: 100%;
  }
`,sU=()=>a.jsx(nU,{children:a.jsx(rU,{children:a.jsx(oU,{src:iU,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Zar Story Video",preload:"metadata"})})}),aU="/Nooshin-Shahsavan-portfolio/assets/zarbrushor.d4748513.jpg",lU=m.section`
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
`,cU=m.div`
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
`,dU=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  object-fit: contain;
`,uU=()=>a.jsx(lU,{children:a.jsx(cU,{children:a.jsx(dU,{src:aU,alt:"Zar Mockup 6"})})}),hU="/Nooshin-Shahsavan-portfolio/assets/work4.64f58ae6.png",pU=m.section`
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
`,fU=m.div`
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
`,mU=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  object-fit: contain;
`,gU=()=>a.jsx(pU,{children:a.jsx(fU,{children:a.jsx(mU,{src:hU,alt:"Zar Mockup 8"})})}),xU="/Nooshin-Shahsavan-portfolio/assets/logo1.a7815c6d.jpeg",wU="/Nooshin-Shahsavan-portfolio/assets/logo2.d758f483.jpg",vU="/Nooshin-Shahsavan-portfolio/assets/logo3.8042f420.jpg",yU="/Nooshin-Shahsavan-portfolio/assets/logo4.681124c6.png",bU="/Nooshin-Shahsavan-portfolio/assets/logo5.00fd6488.png",kU=[xU,wU,vU,yU,bU],jU=m.section`
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
`,SU=m.h2`
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
`,DU=m.div`
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
`,_U=m.div`
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
`,CU=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: transparent;
`,PU=()=>a.jsxs(jU,{children:[a.jsx(SU,{children:"Logo Process"}),a.jsx(DU,{children:kU.map((t,e)=>a.jsx(_U,{children:a.jsx(CU,{src:t,alt:`Zar logo process ${e+1}`})},e))})]}),Fr=m.span`
  color: rgb(163, 73, 198);
  font-weight: 400;
`,TU=[{title:"Logo",description:a.jsxs(a.Fragment,{children:["Design a logo that reflects ",a.jsx(Fr,{children:"Persian luxury"})," and ",a.jsx(Fr,{children:"modern sophistication"}),", blending cultural heritage with contemporary appeal."]})},{title:"Color Palette",description:a.jsxs(a.Fragment,{children:["Choose colors that express ",a.jsx(Fr,{children:"premium quality"})," and ",a.jsx(Fr,{children:"cultural richness"})," while feeling modern and visually striking."]})},{title:"Typography",description:a.jsxs(a.Fragment,{children:["Use typography that balances ",a.jsx(Fr,{children:"luxury"})," and ",a.jsx(Fr,{children:"approachability"}),", expressing both refinement and human warmth."]})},{title:"Visual Tone",description:a.jsxs(a.Fragment,{children:["Design packaging that feels ",a.jsx(Fr,{children:"elevated"})," and ",a.jsx(Fr,{children:"culturally rooted"}),", while being functional and experience-driven."]})}],EU=m.section`
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
`,IU=m.h2`
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
`,AU=m.p`
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
`,MU=m.div`
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
`,zU=m.div`
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
`,FU=m.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #a349c6;
  margin-bottom: 0.7rem;
  text-align: center;
`,RU=m.div`
  color: #444;
  font-size: 0.9rem;
  line-height: 1.4;
  text-align: center;
`,LU=()=>a.jsxs(EU,{children:[a.jsx(IU,{children:"Branding Challenges"}),a.jsx(AU,{children:"The main design challenges for the ZAR brand were:"}),a.jsx(MU,{children:TU.map((t,e)=>a.jsxs(zU,{children:[a.jsx(FU,{children:t.title}),a.jsx(RU,{children:t.description})]},t.title))})]}),NU="/Nooshin-Shahsavan-portfolio/assets/pzar1.66695dc5.jpeg",OU="/Nooshin-Shahsavan-portfolio/assets/pzar2.45f48d83.png",$U="/Nooshin-Shahsavan-portfolio/assets/pzar3.e9055e0a.png",BU="/Nooshin-Shahsavan-portfolio/assets/pzar4.b47681e2.jpg",VU=m.section`
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
`,WU=m.h1`
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
`,UU=m.p`
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
`,HU=m.div`
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
`,v4=m.div`
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
`,YU=m.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f3f3f3;
`,GU=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  ${v4}:hover & {
    transform: scale(1.02);
  }
`,XU=m.div`
  padding: 1.5rem;
  background: none;
`,ZU=m.h3`
  font-size: 0.95rem;
  font-weight: 500;
  color: #444;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`,qU=m.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(76, 16, 129, 0.9);
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`,QU=()=>{const t=[{src:NU,alt:"Pack Zar 1",title:"Selecting a traditional Iranian motif"},{src:OU,alt:"Pack Zar 2",title:"Getting inspiration from a detail of it"},{src:$U,alt:"Pack Zar 3",title:"Designed a saffron flower inspired by traditional motifs, using purple and gold to reflect its value and cultural roots."},{src:BU,alt:"Pack Zar 4",title:"Applying the design to the package"}];return a.jsxs(VU,{children:[a.jsx(WU,{children:"Packaging Design Process"}),a.jsx(UU,{children:"The packaging design process involved researching traditional Iranian motifs, extracting key elements, and creating a modern saffron flower illustration that reflects ZAR's Persian heritage while appealing to contemporary consumers."}),a.jsx(HU,{children:t.map((e,i)=>a.jsxs(v4,{children:[a.jsxs(YU,{children:[a.jsx(GU,{src:e.src,alt:e.alt}),a.jsx(qU,{children:"ZAR"})]}),a.jsx(XU,{children:a.jsx(ZU,{children:e.title})})]},e.alt))})]})},KU=m.div`
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
`,JU=m.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: left;
`,eH=m.button`
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
`,N0=[{id:"overview",label:"Overview",targetId:"zar-first"},{id:"challenges",label:"Key Challenges",targetId:"zar-problem"},{id:"logo",label:"Logo Design",targetId:"zar-logo"},{id:"color",label:"Color Palette",targetId:"zar-color"},{id:"typography",label:"Typography",targetId:"zar-typography"},{id:"packaging",label:"Packaging",targetId:"zar-packaging"},{id:"mockups",label:"Mockups",targetId:"zar-mockups"}],tH=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("overview");q.useEffect(()=>{const o={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},s=new IntersectionObserver(l=>{l.forEach(c=>{if(c.isIntersecting){const d=c.target.id,u=N0.find(p=>p.targetId===d);u&&n(u.id)}})},o);return N0.forEach(l=>{const c=document.getElementById(l.targetId);c&&s.observe(c)}),()=>{s.disconnect()}},[]);const r=(o,s)=>{const l=document.getElementById(o);l&&(l.scrollIntoView({behavior:"smooth",block:"center"}),e(s))};return a.jsxs(KU,{children:[a.jsx(JU,{children:"Menu"}),N0.map(o=>a.jsx(eH,{isActive:i===o.id,isClicked:t===o.id,onClick:()=>r(o.targetId,o.id),children:o.label},o.id))]})},iH=m.div`
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
`,nH=Pr`
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
`,Pb=m.h2`
  width: 100vw;
  text-align: center;
  font-size: 2.1rem;
  font-weight: 700;
  color: #181818;
  margin: 2.5rem 0 1.5rem 0;
  letter-spacing: -1px;
`,rH=()=>a.jsxs(a.Fragment,{children:[a.jsxs(iH,{children:[a.jsx(rt,{title:"Zar Project | Nooshin Shahsavan - Creative Design & Branding",description:"Explore the Zar project - an innovative branding and digital design project by Nooshin Shahsavan combining contemporary aesthetics with cultural elements.",keywords:"Zar project, creative design, brand design, digital design, visual identity, Nooshin Shahsavan, design portfolio",image:"/src/assets/zar/banner-zar.png"}),a.jsx(nH,{}),a.jsx(tH,{}),a.jsx("div",{id:"zar-overview",children:a.jsx(ZV,{})}),a.jsx("div",{id:"zar-second",children:a.jsx(nW,{})}),a.jsx("div",{id:"zar-problem",children:a.jsx(LU,{})}),a.jsx("div",{id:"zar-logo",children:a.jsx(hW,{})}),a.jsx("div",{id:"zar-logo-process",children:a.jsx(PU,{})}),a.jsx("div",{id:"zar-color",children:a.jsx(yW,{})}),a.jsx("div",{id:"zar-typography",children:a.jsx(PW,{})}),a.jsxs("div",{id:"zar-packaging",children:[a.jsx(Pb,{children:"Packaging"}),a.jsx(RW,{}),a.jsx(QU,{})]}),a.jsxs("div",{id:"zar-mockups",children:[a.jsx(Pb,{children:"Mockups"}),a.jsx(sU,{}),a.jsx(gU,{}),a.jsx(HW,{}),a.jsx(qW,{}),a.jsx(BW,{}),a.jsx(uU,{}),a.jsx(tU,{})]}),a.jsx(Bs,{}),a.jsx(Os,{})]}),a.jsx($s,{})]}),oH="/Nooshin-Shahsavan-portfolio/assets/schedule.eab9ba48.png",sH="/Nooshin-Shahsavan-portfolio/assets/time-out.1cb75783.png",aH="/Nooshin-Shahsavan-portfolio/assets/notification.e385d5e5.png",lH="/Nooshin-Shahsavan-portfolio/assets/pro1.69a05912.mp4",cH=m.section`
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
`,dH=m(O.section)`
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
`,uH=m.div`
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
`,hH=m.div`
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
`,pH=m(O.div)`
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
`,fH=m(O.h2)`
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
`,mH=m(O.p)`
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
`,gH=m.div`
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
`,xH=m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;

  @media (max-width: 600px) {
    border-radius: 12px;
  }
`,wH=()=>a.jsxs(cH,{children:[a.jsx(rt,{title:"Workday Problem 1 - Schedule View Issues | Nooshin Shahsavan",description:"Explore the first problem identified in the Workday UX/UI project - schedule view cluttering and readability issues.",keywords:"Workday problem, schedule view, UX issues, mobile app design, Nooshin Shahsavan",image:"/src/assets/work/workday-phone.png"}),a.jsxs(dH,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:[a.jsxs(uH,{children:[a.jsx(pH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.2},children:"Problem 01"}),a.jsx(fH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.4},children:"Schedule View is Cluttered and Hard to Read"}),a.jsx(mH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.6},children:"The current schedule interface presents information in a dense, overwhelming format. Users struggle to quickly identify their upcoming shifts, making it difficult to plan their week effectively. The lack of visual hierarchy and poor information organization creates unnecessary cognitive load."})]}),a.jsx(hH,{children:a.jsx(gH,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut",delay:.8},children:a.jsx(xH,{src:lH,controls:!0,controlsList:"nodownload",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})})})]})]}),vH="/Nooshin-Shahsavan-portfolio/assets/pro-2.1d80f820.mp4",yH=m.section`
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
`,bH=m(O.section)`
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
`,kH=m.div`
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
`,jH=m.div`
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
`,SH=m(O.div)`
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
`,DH=m(O.h2)`
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
`,_H=m(O.p)`
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
`,CH=m(O.div)`
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
`,PH=m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;

  @media (max-width: 600px) {
    border-radius: 12px;
  }
`,TH=()=>a.jsxs(yH,{children:[a.jsx(rt,{title:"Workday Problem 2 - Time Off Request Process | Nooshin Shahsavan",description:"Explore the second problem identified in the Workday UX/UI project - complex time off request process.",keywords:"Workday problem, time off request, UX issues, mobile app design, Nooshin Shahsavan",image:"/src/assets/work/workday-phone.png"}),a.jsxs(bH,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:[a.jsxs(kH,{children:[a.jsx(SH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.2},children:"Problem 02"}),a.jsx(DH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.4},children:"Complex Time Off Request Process"}),a.jsx(_H,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.6},children:"Requesting time off requires navigating through multiple screens and forms. The process is not intuitive and lacks clear guidance, making it frustrating for users who need to quickly submit requests. The multi-step workflow creates unnecessary friction."})]}),a.jsx(jH,{children:a.jsx(CH,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut",delay:.8},children:a.jsx(PH,{src:vH,controls:!0,controlsList:"nodownload",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})})})]})]}),EH="/Nooshin-Shahsavan-portfolio/assets/error.d6ceb0da.png",IH=m.section`
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
`,AH=m(O.section)`
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
`,MH=m.div`
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
`,zH=m.div`
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
`,FH=m(O.div)`
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
`,RH=m(O.h2)`
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
`,LH=m(O.p)`
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
`,NH=m(O.div)`
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
`,OH=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 18px;
  display: block;

  @media (max-width: 600px) {
    border-radius: 12px;
  }
`,$H=()=>a.jsxs(IH,{children:[a.jsx(rt,{title:"Workday Problem 3 - Lack of Feedback | Nooshin Shahsavan",description:"Explore the third problem identified in the Workday UX/UI project - lack of feedback after time off requests.",keywords:"Workday problem, feedback, UX issues, mobile app design, Nooshin Shahsavan",image:"/src/assets/work/workday-phone.png"}),a.jsxs(AH,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:[a.jsxs(MH,{children:[a.jsx(FH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.2},children:"Problem 03"}),a.jsx(RH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.4},children:"No Feedback After Time Off Requests"}),a.jsx(LH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.6},children:"After submitting a time off request, users receive no confirmation or status updates. This creates uncertainty and anxiety about whether their request was received and approved. The lack of transparency in the process leaves users feeling disconnected from their requests."})]}),a.jsx(zH,{children:a.jsx(NH,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut",delay:.8},children:a.jsx(OH,{src:EH,alt:"No Feedback After Time Off Requests",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})})})]})]}),BH="/Nooshin-Shahsavan-portfolio/assets/persona.52dcd889.jpeg",VH="/Nooshin-Shahsavan-portfolio/assets/user-journey map.a58c2a96.png",WH="/Nooshin-Shahsavan-portfolio/assets/persona-workday.d5695c79.png",UH="/Nooshin-Shahsavan-portfolio/assets/empathy-map.46c045ff.png",HH=m.section`
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
`,YH=m(O.section)`
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
`,GH=m.div`
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
`,XH=m.img`
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
`,ZH=m.div`
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
`,qH=m(O.div)`
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
`,QH=m(O.h2)`
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
`,KH=m(O.p)`
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
`,JH=m(O.div)`
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
`,eY=m.div`
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
`,O0=m(O.button)`
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
`,tY=m.div`
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
`,iY=m.div`
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
`,nY=m.img`
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
`,Tb=m.button`
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
`,rY={journey:VH,persona:WH,empathy:UH},oY=()=>{const[t,e]=T.useState(null);q.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]);const i={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx(rt,{title:"User Persona & Research | Workday UX Project",description:"Meet Sara, our user persona for the Workday app redesign. Explore her journey, pain points, and the research insights that guided our design decisions.",keywords:"user persona, UX research, user journey, empathy map, Workday app, user experience",image:"/src/assets/work/persona.jpg"}),a.jsxs(HH,{children:[a.jsxs(YH,{variants:i,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsxs(GH,{children:[a.jsx(XH,{src:BH,alt:"User Persona"}),a.jsxs(ZH,{children:[a.jsx(qH,{variants:n,children:"Sara 18 years old"}),a.jsx(QH,{variants:n,children:"User Scenario"}),a.jsx(KH,{variants:n,children:`Sara, a first-year psychology student and part-time cashier, struggles to check her weekly schedule in the Workday app. She needs to see all her shifts at once to plan her schoolwork but can only view one day at a time. Requesting time off is also frustrating — the tiny fonts make it hard to use, and she has to constantly check the app for approval updates. She often thinks, "I just want to see my week at a glance" and "Why can't I get a simple notification?"`}),a.jsx(JH,{variants:n,children:`She often thinks, "I just want to see my week at a glance" and "Why can't I get a simple notification?"`})]})]}),a.jsxs(eY,{children:[a.jsx(O0,{onClick:()=>e("journey"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"Journey Map"}),a.jsx(O0,{onClick:()=>e("persona"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"User Persona"}),a.jsx(O0,{onClick:()=>e("empathy"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"Empathy Map"})]})]}),t&&a.jsxs(a.Fragment,{children:[a.jsx(tY,{onClick:()=>e(null)}),a.jsxs(iY,{children:[a.jsx(Tb,{title:"Close",onClick:()=>e(null),children:"×"}),a.jsx(nY,{src:rY[t],alt:`${t} image`}),a.jsx(Tb,{title:"Close",onClick:()=>e(null),children:"×"})]})]})]})]})},sY=m.section`
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
`,aY=m(O.section)`
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
`,lY=m(O.h1)`
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
`,cY=m(O.p)`
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
`,dY=m(O.hr)`
  border: none;
  border-top: 2px solid var(--border);
  margin: 2.1rem 0 2.1rem 0;
  width: 100%;
  opacity: 0.6;
`,uY=m.div`
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
`,hY=m(O.h2)`
  color: #181818;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 1.1rem 0 1rem 0;
  letter-spacing: 0.02em;
  opacity: 0.8;
`,pY=m.div`
  display: flex;
  gap: 0.7rem;
  margin: 0.5rem 0 0 0;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`,$0=m(O.div)`
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
`,B0=m.div`
  font-size: 1.7rem;
  font-weight: 900;
  margin-bottom: 0.15rem;
  line-height: 1;
`,V0=m.span`
  font-size: 0.98rem;
  font-weight: 700;
  margin-left: 0.3rem;
`,W0=m.div`
  margin-top: 0.2rem;
  font-size: 0.98rem;
  font-weight: 400;
  color: #fff;
  line-height: 1.35;
`,fY=()=>{const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},e={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx(rt,{title:"User Insight & Research Findings | Workday UX Project",description:"Discover the key insights from user research and usability testing that revealed critical pain points in the Workday app experience.",keywords:"user insight, UX research, usability testing, user feedback, Workday app, design research",image:"/src/assets/work/user-insight.jpg"}),a.jsx(sY,{children:a.jsxs(aY,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx(lY,{variants:e,children:"User Insight"}),a.jsxs(cY,{variants:e,children:["To gain a better understanding of real user frustrations, I started with an ",a.jsx("a",{href:"#",children:"open-ended Google Form survey"}),". From the responses, I intentionally selected five ",a.jsx("strong",{children:"part-time workers"}),", as their lifestyle closely matched the app's target audience. During the usability sessions, participants frequently expressed ",a.jsx("span",{className:"em",children:"frustration"})," due to the long and ",a.jsx("span",{className:"em",children:"confusing steps, lack of clear guidance, and unclear instructions"}),". These issues caused confusion and made the overall experience feel frustrating and mentally exhausting for them."]}),a.jsx(dY,{variants:e}),a.jsxs(uY,{children:[a.jsxs(Eu,{children:[a.jsx(Iu,{children:"METHOD"}),a.jsxs(Au,{children:[a.jsx("li",{children:"In-person moderated usability testing"}),a.jsx("li",{children:"Mostly observation with occasional guidance"})]})]}),a.jsxs(Eu,{children:[a.jsx(Iu,{children:"PARTICIPANTS"}),a.jsx(Au,{children:a.jsx("li",{children:"5 part-time workers aligned with target audience"})})]}),a.jsxs(Eu,{children:[a.jsx(Iu,{children:"TASKS"}),a.jsxs(Au,{children:[a.jsx("li",{children:"Find the current week's schedule"}),a.jsx("li",{children:'Locate the "Day Off" option'}),a.jsx("li",{children:"Request and track a day off for two days in the upcoming week via mobile app"})]})]}),a.jsxs(Eu,{children:[a.jsx(Iu,{children:"DATA COLLECTION"}),a.jsx(Au,{children:a.jsx("li",{children:"Varied per participant, depending on their pace and task complexity"})})]})]}),a.jsx(hY,{variants:e,children:"What I found!"}),a.jsxs(pY,{children:[a.jsxs($0,{bg:"#ff7c1d",variants:e,whileHover:{scale:1.02},transition:{duration:.2},children:[a.jsxs(B0,{children:["60% ",a.jsx(V0,{children:"3/5"})]}),a.jsxs(W0,{children:["Viewing weekly schedule was tiring",a.jsx("br",{}),"3 users had to check days one by one",a.jsx("br",{}),"and write them down on paper"]})]}),a.jsxs($0,{bg:"#ff9528",variants:e,whileHover:{scale:1.02},transition:{duration:.2},children:[a.jsxs(B0,{children:["80% ",a.jsx(V0,{children:"4/5"})]}),a.jsxs(W0,{children:['Hard to find "Day Off" option',a.jsx("br",{}),"Most users struggled to locate it"]})]}),a.jsxs($0,{bg:"#ffb531",variants:e,whileHover:{scale:1.02},transition:{duration:.2},children:[a.jsxs(B0,{children:["50% ",a.jsx(V0,{children:"2.5/5"})]}),a.jsxs(W0,{children:["Unclear how to track time-off request",a.jsx("br",{}),"Users didn't know what happens after submitting"]})]})]})]})})]})},mY=m.section`
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
`,gY=m(O.section)`
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
`,xY=m(O.h1)`
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
`,wY=m(O.p)`
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
`,vY=m(O.hr)`
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
`,yY=m(O.h2)`
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
`,bY=m(O.ol)`
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
`,kY=m(O.div)`
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
`,jY=m.span`
  color: #3e2ffc;
  font-weight: 700;
  font-size: 1rem;
  margin-right: 0.5rem;
`,SY=m.span`
  color: #444;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.9;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`,DY=()=>{const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},e={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},i=["Make the weekly schedule easily viewable at a glance on a single screen.","Simplify the time-off request process with fewer, clearer steps.","Provide clear, immediate feedback after submitting a time-off request."];return a.jsxs(a.Fragment,{children:[a.jsx(rt,{title:"Challenge & Goals | UX Design Process",description:"Explore the design challenges and UX goals for creating intuitive user experiences that prioritize simplicity and efficiency.",keywords:"UX challenges, design goals, user experience, design process, UX objectives",image:"/src/assets/work/challenge-goals.jpg"}),a.jsx(mY,{children:a.jsxs(gY,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx(xY,{variants:e,children:"Challenge"}),a.jsxs(wY,{variants:e,children:[a.jsx("b",{children:"How might I"})," make it easier for users to access their full weekly schedule at a glance, all on one screen?",a.jsx("br",{}),"And how can I simplify the time-off request process so it's clear, fast, and takes only a few clicks?"]}),a.jsx(vY,{variants:e}),a.jsx(yY,{variants:e,children:"UX Goals"}),a.jsx(bY,{variants:e,children:i.map((n,r)=>a.jsxs(kY,{variants:e,whileHover:{scale:1.02},transition:{duration:.2},children:[a.jsxs(jY,{children:[r+1,"."]}),a.jsx(SY,{children:n})]},r))})]})})]})},_Y=m.section`
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
`,CY=m(O.section)`
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
`,PY=m(O.div)`
  color: #3e2ffc;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`,TY=m(O.h1)`
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
`,EY=m(O.p)`
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
`,IY=m(O.h2)`
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
`,AY=m.div`
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
`,MY=m.iframe`
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
`,zY=()=>{const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},e={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx(rt,{title:"Solution 1: Making a Schedule | Workday UX Project",description:"Explore the first solution for the Workday app - an improved schedule viewing experience that allows users to see their entire week at a glance.",keywords:"schedule solution, UX design, mobile app, user experience, Workday app, design solution",image:"/src/assets/work/solution1-schedule.jpg"}),a.jsx(_Y,{children:a.jsxs(CY,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx(PY,{variants:e,children:"Solution1"}),a.jsx(TY,{variants:e,children:"Making a Schedule"}),a.jsx(EY,{variants:e,children:`It's super easy to view your schedule—just tap the "Schedule" button right on the home page. By default, it shows the current week with all the daily details. You can scroll down to see your whole month or even the entire year, all on the same page. And if you're looking for a specific date, there's a quick option to type it in and jump right to it.`}),a.jsx(IY,{variants:e,children:"Flow 1"}),a.jsx(AY,{children:a.jsx(MY,{src:"https://embed.figma.com/design/PItVAtjB7EYlwC1YSejOQD/WORKday-App?node-id=138-103&embed-host=share",allowFullScreen:!0})})]})})]})},FY=m.section`
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
`,RY=m(O.section)`
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
`,LY=m(O.div)`
  color: #3e2ffc;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`,NY=m(O.h1)`
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
`,OY=m(O.p)`
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
`,$Y=m(O.h2)`
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
`,BY=m.div`
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
`,VY=m.iframe`
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
`,WY=()=>{const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},e={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx(rt,{title:"Solution 2: Taking a Day Off & Getting Notified | Workday UX Project",description:"Explore the second solution for the Workday app - a streamlined time-off request process with instant notifications and clear feedback.",keywords:"time off solution, notifications, UX design, mobile app, user experience, Workday app, design solution",image:"/src/assets/work/solution2-timeoff.jpg"}),a.jsx(FY,{children:a.jsxs(RY,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx(LY,{variants:e,children:"Solution 2"}),a.jsx(NY,{variants:e,children:"Taking a Day Off & Getting Notified"}),a.jsx(OY,{variants:e,children:`Since taking time off and receiving updates are closely connected, they're combined into one simple flow. Users just tap the "Time Off" button on the home page, select their start and end dates, and quickly double-check everything on the calendar. After hitting submit, they'll instantly get a confirmation message. Once the manager reviews the request, users receive a notification with the result—either approved or declined—so they're always kept in the loop.`}),a.jsx($Y,{variants:e,children:"Flow 2"}),a.jsx(BY,{children:a.jsx(VY,{src:"https://embed.figma.com/design/PItVAtjB7EYlwC1YSejOQD/WORKday-App?node-id=165-670&embed-host=share",allowFullScreen:!0})})]})})]})},UY="/Nooshin-Shahsavan-portfolio/assets/1sol.74afc9a9.mp4",HY="/Nooshin-Shahsavan-portfolio/assets/2sol.5120d106.mp4",YY=m.section`
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
`,GY=m(O.section)`
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
`,XY=m(O.div)`
  color: #3e2ffc;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`,ZY=m(O.h1)`
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
`,qY=m.div`
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
`,Eb=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ib=m(O.h2)`
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
`,Ab=m.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Mb=m.video`
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
`,zb=m.div`
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
`,Fb=m.button`
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
`,Rb=m.input.attrs({type:"range"})`
  flex: 1 1 0;
  width: 100%;
  margin: 0 8px;
  accent-color: #3e2ffc;
  height: 4px;

  @media (max-width: 600px) {
    margin: 0 4px;
  }
`,Lb=m.span`
  font-size: 0.85rem;
  color: #444;
  min-width: 40px;
  text-align: right;
  opacity: 0.8;

  @media (max-width: 600px) {
    font-size: 0.8rem;
    min-width: 32px;
  }
`;function Mu(t){const e=Math.floor(t/60).toString().padStart(2,"0"),i=Math.floor(t%60).toString().padStart(2,"0");return`${e}:${i}`}const QY=()=>{const t=T.useRef(null),e=T.useRef(null),[i,n]=T.useState(!1),[r,o]=T.useState(!1),[s,l]=T.useState(0),[c,d]=T.useState(0),[u,p]=T.useState(0),[f,g]=T.useState(0),y=()=>{t.current&&(t.current.paused?(t.current.play(),n(!0)):(t.current.pause(),n(!1)))},w=()=>{t.current&&l(t.current.currentTime)},D=()=>{t.current&&p(t.current.duration)},j=E=>{const z=parseFloat(E.target.value);t.current&&(t.current.currentTime=z,l(z))},b=()=>{n(!1),l(u)},v=()=>{e.current&&(e.current.paused?(e.current.play(),o(!0)):(e.current.pause(),o(!1)))},h=()=>{e.current&&d(e.current.currentTime)},x=()=>{e.current&&g(e.current.duration)},k=E=>{const z=parseFloat(E.target.value);e.current&&(e.current.currentTime=z,d(z))},S=()=>{o(!1),d(f)},_={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},C={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx(rt,{title:"Final Look: Making a Schedule | Workday UX Project",description:"See the final implementation of the improved schedule viewing experience in the Workday app with interactive video demonstration.",keywords:"final UI, schedule design, UX implementation, mobile app, Workday app, design showcase",image:"/src/assets/work/final-schedule.jpg"}),a.jsx(YY,{children:a.jsxs(GY,{variants:_,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx(XY,{variants:C,children:"Final look of Making a Schedule"}),a.jsx(ZY,{variants:C,children:"Flow 1"}),a.jsxs(qY,{children:[a.jsxs(Eb,{children:[a.jsx(Ib,{variants:C,children:"Schedule Flow"}),a.jsxs(Ab,{children:[a.jsx(Mb,{ref:t,src:UY,onTimeUpdate:w,onLoadedMetadata:D,onEnded:b,playsInline:!0}),a.jsxs(zb,{children:[a.jsx(Fb,{onClick:y,"aria-label":i?"Pause":"Play",children:i?"❚❚":"►"}),a.jsx(Rb,{min:0,max:u,step:.1,value:s,onChange:j,"aria-label":"Video 1 progress"}),a.jsxs(Lb,{children:[Mu(s)," / ",Mu(u)]})]})]})]}),a.jsxs(Eb,{children:[a.jsx(Ib,{variants:C,children:"Time Off Flow"}),a.jsxs(Ab,{children:[a.jsx(Mb,{ref:e,src:HY,onTimeUpdate:h,onLoadedMetadata:x,onEnded:S,playsInline:!0}),a.jsxs(zb,{children:[a.jsx(Fb,{onClick:v,"aria-label":r?"Pause":"Play",children:r?"❚❚":"►"}),a.jsx(Rb,{min:0,max:f,step:.1,value:c,onChange:k,"aria-label":"Video 2 progress"}),a.jsxs(Lb,{children:[Mu(c)," / ",Mu(f)]})]})]})]})]})]})})]})},KY=m.section`
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
`,JY=m(O.section)`
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
`,eG=m(O.div)`
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
`,tG=m(O.h1)`
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
`,iG=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`,Nb=m(O.p)`
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
`,nG=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
  }
`,rG=m(O.div)`
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
`,oG=m.h3`
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
`,sG=m.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`,aG=()=>{const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},e={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},i=[{title:"User-Centered Design",text:"Focus on user needs and behaviors rather than just aesthetics. Speed and simplicity are paramount for busy users."},{title:"Clear Structure",text:"Use intuitive navigation, proper button placement, and readable typography to guide users efficiently."},{title:"Visual Balance",text:"A well-designed app should look good while feeling effortless to use - this balance is key to success."}];return a.jsxs(a.Fragment,{children:[a.jsx(rt,{title:"Key Takeaways | Design Insights & Learnings",description:"Discover the key insights and learnings from our design projects, focusing on user-centered design principles and effective UX strategies.",keywords:"key takeaways, design insights, UX learnings, user-centered design, design principles",image:"/src/assets/work/key-takeaways.jpg"}),a.jsx(KY,{children:a.jsxs(JY,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx(eG,{variants:e,children:"Finally"}),a.jsx(tG,{variants:e,children:"Key Takeaways"}),a.jsxs(iG,{children:[a.jsx(Nb,{variants:e,children:"Redesigning this app taught me that today's users — especially busy people like part-time workers — value speed and simplicity above all. As a designer, it's easy to get caught up in visuals and aesthetics (which do matter!), but what matters more is how easily someone can use the product."}),a.jsx(Nb,{variants:e,children:"I learned the importance of using clear structure, proper button placement, readable fonts, and intuitive color choices to guide users quickly and confidently through their tasks. A well-designed app should not only look good, but feel effortless to use — and that balance is what I aim for in every project."})]}),a.jsx(nG,{children:i.map((n,r)=>a.jsxs(rG,{variants:e,whileHover:{scale:1.02},transition:{duration:.2},children:[a.jsx(oG,{children:n.title}),a.jsx(sG,{children:n.text})]},r))})]})})]})},lG=m.div`
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
`,cG=m.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #181818;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: left;
`,dG=m.button`
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
`,U0=[{id:"overview",label:"Overview",targetId:"overview"},{id:"problems",label:"Problems",targetId:"problems"},{id:"user-insight",label:"User Insight",targetId:"user-insight"},{id:"challenge",label:"Challenge",targetId:"challenge"},{id:"solutions",label:"Solutions",targetId:"solutions"},{id:"final-ui",label:"Final UI",targetId:"final-ui"},{id:"takeaway",label:"Takeaway",targetId:"takeaway"}],uG=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("overview");q.useEffect(()=>{const o={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},s=new IntersectionObserver(l=>{l.forEach(c=>{if(c.isIntersecting){const d=c.target.id,u=U0.find(p=>p.targetId===d);u&&n(u.id)}})},o);return U0.forEach(l=>{const c=document.getElementById(l.targetId);c&&s.observe(c)}),()=>{s.disconnect()}},[]);const r=(o,s)=>{const l=document.getElementById(o);l&&(l.scrollIntoView({behavior:"smooth",block:"center"}),e(s))};return a.jsxs(lG,{children:[a.jsx(cG,{children:"Menu"}),U0.map(o=>a.jsx(dG,{isActive:i===o.id,isClicked:t===o.id,onClick:()=>r(o.targetId,o.id),children:o.label},o.id))]})},hG=Pr`
  body {
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    font-weight: 400;
    background: #ffffff;
    transition: background 0.6s;
  }
`,pG=m.div`
  min-height: 100vh;
  width: 100vw;
  background: #ffffff;
  transition: background 0.2s;
  overflow-x: hidden;
  overflow-y: auto;
`,pw=m(O.section)`
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
`,fG=m(pw)`
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
`,mG=m.img`
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
`,gG=m.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 280px;

  @media (max-width: 900px) {
    min-width: 0;
    width: 100%;
  }
`,xG=m.h1`
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
`,wG=m.h2`
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
`,vG=m.div`
  max-width: 520px;
  width: 100%;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`,yG=m.p`
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
`,bG=m.hr`
  border: none;
  border-top: 2px solid #e0e0e0;
  margin-bottom: 1.3rem;
  margin-top: 0;
  width: 100%;
  opacity: 0.6;
`,kG=m.div`
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
`,H0=m.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;

  @media (max-width: 900px) {
    text-align: center;
  }
`,Y0=m.span`
  font-size: 1rem;
  font-weight: 700;
  color: #3e2ffc;
  letter-spacing: 0.5px;
  margin-bottom: 0.16rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`,G0=m.span`
  color: #444;
  font-size: 14px;
  font-weight: 400;
  white-space: pre-line;
  opacity: 0.9;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`,jG=m(pw)`
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
`,SG=m.h2`
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
`,DG=m.h3`
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
`,_G=m.hr`
  border: none;
  border-top: 2px solid #3e2ffc;
  width: 60%;
  margin: 0 auto 2rem auto;
  opacity: 0.6;

  @media (max-width: 600px) {
    width: 80%;
    margin-bottom: 1.5rem;
  }
`,CG=m.div`
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
`,X0=m.div`
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
`,Z0=m.img`
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
`,q0=m.div`
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
`;m(pw)`
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
`;const PG=m.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  position: relative;
`,TG=m.div`
  position: sticky;
  top: 0;
  align-self: flex-start;
  z-index: 101;

  @media (max-width: 900px) {
    display: none;
  }
`,EG=m.div`
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
`,IG=()=>a.jsxs(a.Fragment,{children:[a.jsxs(pG,{children:[a.jsx(rt,{title:"Workday UX/UI Project | Nooshin Shahsavan - Mobile App Design",description:"Explore the Workday UX/UI project - a comprehensive mobile app design by Nooshin Shahsavan focusing on employee scheduling, time-off management, and workplace communication.",keywords:"Workday project, UX/UI design, mobile app design, user experience, interface design, Nooshin Shahsavan, design portfolio",image:"/src/assets/work/workday-phone.png"}),a.jsx(hG,{}),a.jsxs(PG,{children:[a.jsx(TG,{children:a.jsx(uG,{})}),a.jsxs(EG,{id:"content-wrapper",children:[a.jsx("div",{id:"overview",children:a.jsxs(fG,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:[a.jsx(mG,{src:w4,alt:"Workday App Mockup"}),a.jsxs(gG,{children:[a.jsx(xG,{children:"WORKDAY APP"}),a.jsx(wG,{children:"Overview"}),a.jsxs(vG,{children:[a.jsx(yG,{children:"Workday is a self - service portal , and Workday mobile app , designed to make it easy for employees to access essential information about their work and manage various tasks . employees check the schedule for the upcoming week , view their recent paycheck , ensuring all hours worked are accounted for . If they need time off , they can quickly submit a request and track its status ."}),a.jsx(bG,{}),a.jsxs(kG,{children:[a.jsxs(H0,{children:[a.jsx(Y0,{children:"MY ROLE"}),a.jsx(G0,{children:"UX-UI designer"})]}),a.jsxs(H0,{children:[a.jsx(Y0,{children:"DURATION"}),a.jsx(G0,{children:"4 weeks"})]}),a.jsxs(H0,{children:[a.jsx(Y0,{children:"TOOLS"}),a.jsxs(G0,{children:["Figma",`
`,"FigJam",`
`,"Photoshop"]})]})]})]})]})]})}),a.jsxs("div",{id:"problems",children:[a.jsxs(jG,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:[a.jsx(SG,{children:"Problem at a Glance"}),a.jsx(DG,{children:"Key Issues Identified"}),a.jsx(_G,{}),a.jsxs(CG,{children:[a.jsxs(X0,{children:[a.jsx(Z0,{src:oH,alt:"Schedule Icon"}),a.jsx(q0,{children:"The schedule view is cluttered and hard to read, making it difficult for users to quickly understand their upcoming shifts."})]}),a.jsxs(X0,{children:[a.jsx(Z0,{src:sH,alt:"Time Off Icon"}),a.jsx(q0,{children:"Requesting time off is a multi-step process that requires navigating through multiple screens."})]}),a.jsxs(X0,{children:[a.jsx(Z0,{src:aH,alt:"Notification Icon"}),a.jsx(q0,{children:"Users receive no feedback after submitting time off requests, leaving them uncertain about the status."})]})]})]}),a.jsx(wH,{}),a.jsx(TH,{}),a.jsx($H,{})]}),a.jsxs("div",{id:"user-insight",children:[a.jsx(oY,{}),a.jsx(fY,{})]}),a.jsx("div",{id:"challenge",children:a.jsx(DY,{})}),a.jsxs("div",{id:"solutions",children:[a.jsx(zY,{}),a.jsx(WY,{})]}),a.jsx("div",{id:"final-ui",children:a.jsx(QY,{})}),a.jsx("div",{id:"takeaway",children:a.jsx(aG,{})})]})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"center",width:"100%",background:"#ffffff"},children:[a.jsx("style",{children:`
            .menu-work-container {
              background: #ffffff !important;
            }
            .menu-work-title {
              color: #181818 !important;
            }
          `}),a.jsx(Bs,{})]}),a.jsx(Os,{})]}),a.jsx($s,{})]}),AG=m.div`
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
`,MG=m.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: left;
`,zG=m.button`
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
`,Q0=[{id:"photography",label:"Photography",targetId:"fun-photography"},{id:"illustrations",label:"Illustrations & Graphics",targetId:"fun-illustrations"},{id:"ar-vr",label:"AR/VR Experience",targetId:"fun-ar-vr"},{id:"animation",label:"2D Animation",targetId:"fun-animation"}],FG=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("photography");q.useEffect(()=>{const o={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},s=new IntersectionObserver(l=>{l.forEach(c=>{if(c.isIntersecting){const d=c.target.id,u=Q0.find(p=>p.targetId===d);u&&n(u.id)}})},o);return Q0.forEach(l=>{const c=document.getElementById(l.targetId);c&&s.observe(c)}),()=>{s.disconnect()}},[]);const r=(o,s)=>{const l=document.getElementById(o);l&&(l.scrollIntoView({behavior:"smooth",block:"center"}),e(s))};return a.jsxs(AG,{children:[a.jsx(MG,{children:"Menu"}),Q0.map(o=>a.jsx(zG,{isActive:i===o.id,isClicked:t===o.id,onClick:()=>r(o.targetId,o.id),children:o.label},o.id))]})},RG="/Nooshin-Shahsavan-portfolio/assets/straw1.d023f398.MP4",LG="/Nooshin-Shahsavan-portfolio/assets/straw3.a8624565.png",NG="/Nooshin-Shahsavan-portfolio/assets/straw4.8dc90d25.jpg",OG="/Nooshin-Shahsavan-portfolio/assets/straw5.00eb7c35.png",$G="/Nooshin-Shahsavan-portfolio/assets/g4.30fc4dab.jpg",BG="/Nooshin-Shahsavan-portfolio/assets/g2.55ac7e77.jpg",VG="/Nooshin-Shahsavan-portfolio/assets/g1.12d671ca.png",WG="/Nooshin-Shahsavan-portfolio/assets/p1.7b415a4d.png",UG="/Nooshin-Shahsavan-portfolio/assets/p2.bd8d0138.jpg",HG="/Nooshin-Shahsavan-portfolio/assets/g3.b54ed427.png",YG="/Nooshin-Shahsavan-portfolio/assets/vr.8bf5a7e9.mp4",GG="/Nooshin-Shahsavan-portfolio/assets/2D.bd827e54.mp4",XG=({src:t,className:e,style:i})=>{const n=T.useRef(null),[r,o]=T.useState(!1),[s,l]=T.useState(0),[c,d]=T.useState(0);T.useEffect(()=>{const y=n.current;if(!y)return;const w=()=>l(y.currentTime),D=()=>d(y.duration),j=()=>o(!0),b=()=>o(!1);return y.addEventListener("timeupdate",w),y.addEventListener("loadedmetadata",D),y.addEventListener("play",j),y.addEventListener("pause",b),()=>{y.removeEventListener("timeupdate",w),y.removeEventListener("loadedmetadata",D),y.removeEventListener("play",j),y.removeEventListener("pause",b)}},[]);const u=()=>{n.current&&(r?n.current.pause():n.current.play())},p=y=>{if(n.current){const w=parseFloat(y.target.value)/100*c;n.current.currentTime=w}},f=y=>{const w=Math.floor(y/60),D=Math.floor(y%60);return`${w}:${D.toString().padStart(2,"0")}`},g=c>0?s/c*100:0;return a.jsxs("div",{className:`custom-video-player ${e||""}`,style:i,children:[a.jsx("video",{ref:n,src:t,playsInline:!0,muted:!0,style:{width:"100%",height:"100%",objectFit:"cover"}}),a.jsxs("div",{className:"video-controls",children:[a.jsx("button",{className:"play-pause-btn",onClick:u,"aria-label":r?"Pause":"Play",children:r?"⏸️":"▶️"}),a.jsx("div",{className:"progress-container",children:a.jsx("input",{type:"range",min:"0",max:"100",value:g,onChange:p,className:"progress-bar"})}),a.jsxs("div",{className:"time-display",children:[f(s)," / ",f(c)]})]}),a.jsx("style",{children:`
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
      `})]})},y4=vd`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`,ZG=vd`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,qG=vd`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,QG=m.div`
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
`,KG=Pr`
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
  animation: ${ZG} 0.8s ease-out;
  
  @media (max-width: 900px) {
    padding: 40px 0 30px 0;
  }
  @media (max-width: 600px) {
    padding: 30px 0 20px 0;
  }
`,JG=m.h1`
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(135deg, #181818 0%, #374151 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  letter-spacing: -2px;
  text-align: center;
  animation: ${qG} 1s ease-out;
  
  @media (max-width: 900px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`,eX=m.p`
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
`,tX=m.div`
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
`,es=m.div`
  grid-area: ${t=>t.gridArea};
  aspect-ratio: ${t=>t.aspectRatio||"1/1"};
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  animation: ${y4} 6s ease-in-out infinite;
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
`,iX=m(es)`
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
`,nX=m.div`
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
`,ia=m(es)`
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
`,Ob=m.div`
  width: 100%;
  max-width: 1200px;
  aspect-ratio: 16/9;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  animation: ${y4} 6s ease-in-out infinite;
  
  @media (max-width: 900px) {
    max-width: 98vw;
    border-radius: 20px;
  }
  @media (max-width: 600px) {
    border-radius: 16px;
  }
`,rX=()=>a.jsxs(a.Fragment,{children:[a.jsxs(QG,{children:[a.jsx(rt,{title:"School Projects | Nooshin Shahsavan - Creative Portfolio",description:"Explore Nooshin Shahsavan's school projects featuring photography, illustrations, AR/VR experiences, and 2D animations showcasing creative skills and innovative design thinking.",keywords:"school projects, photography, illustrations, AR/VR, 2D animation, creative portfolio, Nooshin Shahsavan, design projects",image:"/src/assets/fun/funhome.jpg"}),a.jsx(KG,{}),a.jsx(FG,{}),a.jsxs(Vl,{children:[a.jsx(JG,{children:"School Projects"}),a.jsx(eX,{children:"These are all school projects that showcase my interests and creative work. I'm excited to share some of my favorite pieces with you."})]}),a.jsxs(Vl,{id:"fun-photography",children:[a.jsx(zu,{children:"Photography"}),a.jsx(Fu,{children:"Exploring the art of visual storytelling through photography, capturing moments and creating compelling narratives."}),a.jsxs(tX,{children:[a.jsx(iX,{gridArea:"1 / 2 / 3 / 5",aspectRatio:"1/1.4",category:"photography",children:a.jsx("video",{src:RG,controls:!0,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"},controlsList:"nodownload"})}),a.jsx(es,{gridArea:"1 / 5 / 3 / 8",aspectRatio:"1/1.4",category:"photography",children:a.jsx("img",{src:yp,alt:"Photography 1"})}),a.jsx(es,{gridArea:"3 / 1 / 4 / 3",aspectRatio:"2/1",category:"photography",children:a.jsx("img",{src:yp,alt:"Photography 2"})}),a.jsx(es,{gridArea:"3 / 3 / 4 / 5",aspectRatio:"2/1",category:"photography",children:a.jsx("img",{src:LG,alt:"Photography 3"})}),a.jsx(es,{gridArea:"3 / 5 / 4 / 7",aspectRatio:"2/1",category:"photography",children:a.jsx("img",{src:NG,alt:"Photography 4"})}),a.jsx(es,{gridArea:"3 / 7 / 4 / 9",aspectRatio:"2/1",category:"photography",children:a.jsx("img",{src:OG,alt:"Photography 5"})})]})]}),a.jsxs(Vl,{id:"fun-illustrations",children:[a.jsx(zu,{children:"Illustrations & Graphics"}),a.jsx(Fu,{children:"Creative illustrations and graphic design work showcasing artistic skills and visual communication."}),a.jsxs(nX,{children:[a.jsx(ia,{gridArea:"1 / 1 / 2 / 2",category:"illustrations",children:a.jsx("img",{src:$G,alt:"Illustration 1"})}),a.jsx(ia,{gridArea:"1 / 2 / 2 / 3",category:"illustrations",children:a.jsx("img",{src:HG,alt:"Illustration 2"})}),a.jsx(ia,{gridArea:"1 / 3 / 2 / 4",category:"illustrations",children:a.jsx("img",{src:VG,alt:"Illustration 3"})}),a.jsx(ia,{gridArea:"1 / 4 / 2 / 5",category:"illustrations",children:a.jsx("img",{src:BG,alt:"Illustration 4"})}),a.jsx(ia,{gridArea:"2 / 2 / 3 / 3",category:"before",children:a.jsx("img",{src:UG,alt:"Before"})}),a.jsx(ia,{gridArea:"2 / 3 / 3 / 4",category:"after",children:a.jsx("img",{src:WG,alt:"After"})})]})]}),a.jsxs(Vl,{id:"fun-ar-vr",children:[a.jsx(zu,{children:"AR/VR Experience"}),a.jsx(Fu,{children:"Immersive technology projects exploring augmented and virtual reality experiences."}),a.jsx(Ob,{children:a.jsx(XG,{src:YG})})]}),a.jsxs(Vl,{id:"fun-animation",children:[a.jsx(zu,{children:"2D Animation"}),a.jsx(Fu,{children:"Creative animation work demonstrating motion design and storytelling through animated graphics."}),a.jsx(Ob,{children:a.jsx("video",{src:GG,controls:!0,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"},controlsList:"nodownload"})})]}),a.jsx(Bs,{}),a.jsx(Os,{})]}),a.jsx($s,{})]}),oX=m.div`
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
`,sX=m.div`
  font-size: 0.75rem;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.2rem;
`,aX=m.button`
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
`,K0=[{id:"overview",label:"Overview",targetId:"bcit-overview"},{id:"challenge",label:"Challenge",targetId:"bcit-challenge"},{id:"moodboard",label:"Visual Direction",targetId:"bcit-moodboard"},{id:"wordmark",label:"Wordmark",targetId:"bcit-wordmark"},{id:"banners",label:"Banners",targetId:"bcit-banners"},{id:"stickers",label:"Stickers",targetId:"bcit-stickers"},{id:"poster",label:"Poster",targetId:"bcit-poster"},{id:"motion",label:"Motion Graphics",targetId:"bcit-motion"},{id:"reflection",label:"Reflection",targetId:"bcit-reflection"}],lX=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("overview");q.useEffect(()=>{const o=new IntersectionObserver(s=>{s.forEach(l=>{if(l.isIntersecting){const c=K0.find(d=>d.targetId===l.target.id);c&&n(c.id)}})},{root:null,rootMargin:"-20% 0px -70% 0px",threshold:0});return K0.forEach(s=>{const l=document.getElementById(s.targetId);l&&o.observe(l)}),()=>o.disconnect()},[]);const r=(o,s)=>{const l=document.getElementById(o);l&&(l.scrollIntoView({behavior:"smooth",block:"start"}),e(s))};return a.jsxs(oX,{children:[a.jsx(sX,{children:"Contents"}),K0.map(o=>a.jsx(aX,{isActive:i===o.id,isClicked:t===o.id,onClick:()=>r(o.targetId,o.id),children:o.label},o.id))]})},$b=new URL("/Nooshin-Shahsavan-portfolio/assets/wordmark-bcit.02fea1d6.png",self.location).href,cX=new URL("/Nooshin-Shahsavan-portfolio/assets/moodboard-bcit.8c5ded4b.png",self.location).href,dX=new URL("/Nooshin-Shahsavan-portfolio/assets/banner-bcit1.ea0f6725.png",self.location).href,uX=new URL("/Nooshin-Shahsavan-portfolio/assets/banner-bcit2.17c3c7e7.png",self.location).href,hX=new URL("/Nooshin-Shahsavan-portfolio/assets/stickers-bcit.08cb2bef.jpg",self.location).href,pX=new URL("/Nooshin-Shahsavan-portfolio/assets/sticker-bcit1.ce2a218c.png",self.location).href,fX=new URL("/Nooshin-Shahsavan-portfolio/assets/sticker-bcit2.d189dbfc.png",self.location).href,mX=new URL("/Nooshin-Shahsavan-portfolio/assets/sticker-bcit3.0a323983.png",self.location).href,gX=new URL("/Nooshin-Shahsavan-portfolio/assets/poster-bcit.f3cbc3cd.png",self.location).href,xX=new URL("/Nooshin-Shahsavan-portfolio/assets/ig-bcit1.556e562b.mp4",self.location).href,wX=new URL("/Nooshin-Shahsavan-portfolio/assets/ig-bcit2.6b529386.mp4",self.location).href,st={hidden:{opacity:0,y:36},visible:{opacity:1,y:0,transition:{duration:.7,ease:[.22,1,.36,1]}}},ir={hidden:{opacity:0,scale:.97},visible:{opacity:1,scale:1,transition:{duration:.8,ease:[.22,1,.36,1]}}},vX={hidden:{opacity:1},visible:{opacity:1,transition:{staggerChildren:.14}}},yX=Pr`
  body { background: #fff; margin: 0; padding: 0; overflow-y: auto; }
  html { overflow-x: hidden; }
`,bX=m.div`
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
`,nr=m.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 2.5rem;
  @media (max-width: 768px) { padding: 0 1.5rem; }
  @media (max-width: 480px) { padding: 0 1.2rem; }
`,rr=m.section`
  width: 100%;
  padding: 100px 0;
  background: ${t=>t.bg||"#fff"};
  @media (max-width: 768px) { padding: 70px 0; }
  @media (max-width: 480px) { padding: 50px 0; }
`,gn=m.span`
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
`,Uo=m.div`
  width: 48px;
  height: 3px;
  background: #5a8a3c;
  border-radius: 2px;
  margin-bottom: 2rem;
`,Ho=m.div`
  margin-bottom: 3.5rem;
`,or=m.div`
  width: 100%;
  height: 1px;
  background: #ebebeb;
`,kX=m.section`
  width: 100%;
  padding: 80px 0 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #fff;
`,jX=m(O.img)`
  width: min(420px, 80vw);
  height: auto;
  display: block;
  margin: 0 auto 3rem;
  object-fit: contain;
`,SX=m(O.h1)`
  font-size: clamp(2rem, 4.5vw, 3.6rem);
  font-weight: 900;
  color: #0d0d0d;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 0 0 1rem;
  max-width: 800px;
`,DX=m(O.p)`
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  color: #666;
  line-height: 1.75;
  max-width: 580px;
  margin: 0 auto 3.5rem;
`,_X=m(O.div)`
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
`,Nu=m.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.4;
`,CX=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 2.5rem; }
`,PX=m(O.div)`
  background: #0d0d0d;
  border-radius: 24px;
  padding: 3.5rem 4rem;
  @media (max-width: 768px) { padding: 2.5rem 2rem; }
`,TX=m.p`
  font-size: clamp(1.2rem, 2.5vw, 1.7rem);
  font-weight: 700;
  line-height: 1.5;
  color: #fff;
  margin: 0 0 2rem;
`,EX=m.p`
  font-size: 1rem;
  color: rgba(255,255,255,0.68);
  line-height: 1.82;
  margin: 0;
`,IX=m(O.div)`
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 24px 64px rgba(0,0,0,0.1);
  img { width: 100%; height: auto; display: block; }
`,AX=m(O.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`,J0=m(O.div)`
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #eee;
  .swatch { height: 80px; background: ${t=>t.$accent}; }
  .body { padding: 1.2rem 1.4rem; }
  h4 { font-size: 0.85rem; font-weight: 700; color: #111; margin: 0 0 0.4rem; text-transform: uppercase; letter-spacing: 0.06em; }
  p  { font-size: 0.85rem; color: #666; margin: 0; line-height: 1.5; }
`,MX=m(O.div)`
  background: #f5f5f5;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 3rem;
  margin-bottom: 4rem;
  img { width: min(380px, 70%); height: auto; display: block; }
`,zX=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`,Ou=m(O.div)`
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 14px;
  padding: 1.6rem 1.8rem;
  h4 { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #5a8a3c; margin: 0 0 0.6rem; }
  p  { font-size: 0.92rem; color: #555; line-height: 1.65; margin: 0; }
`,FX=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`,Bb=m(O.div)`
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0,0,0,0.1);
  position: relative;
  img { width: 100%; height: auto; display: block; }
`,Vb=m.div`
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
`,RX=m.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 1.5rem;
  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 500px)  { grid-template-columns: 1fr; }
`,$u=m(O.div)`
  grid-column: ${t=>t.$wide?"1 / 2":"auto"};
  border-radius: 18px;
  overflow: hidden;
  background: #f8f8f8;
  box-shadow: 0 8px 28px rgba(0,0,0,0.07);
  img { width: 100%; height: 100%; object-fit: cover; display: block; }
  @media (max-width: 900px) { grid-column: auto; }
`,LX=m(O.div)`
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 32px 80px rgba(0,0,0,0.13);
  img { width: 100%; height: auto; display: block; }
`,NX=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`,Wb=m(O.div)`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 56px rgba(0,0,0,0.2);
  background: #000;
  video { width: 100%; height: auto; display: block; }
`,Ub=m.p`
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
  text-align: center;
  margin: 0.9rem 0 0;
`,OX=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 3rem; }
`,$X=m.blockquote`
  font-size: clamp(1.2rem, 2.2vw, 1.6rem);
  font-weight: 700;
  color: #0d0d0d;
  line-height: 1.5;
  margin: 0 0 2rem;
  padding-left: 1.5rem;
  border-left: 4px solid #5a8a3c;
`,BX=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,VX=m.span`
  display: inline-block;
  padding: 0.5rem 1.1rem;
  border-radius: 100px;
  font-size: 0.82rem;
  font-weight: 600;
  background: ${t=>t.$accent?"#5a8a3c":"#f2f2f2"};
  color: ${t=>t.$accent?"#fff":"#333"};
`,WX=[{label:"Graphic Design",accent:!0},{label:"Brand Identity",accent:!0},{label:"Campaign Design",accent:!0},{label:"Environmental Graphics",accent:!1},{label:"Motion Graphics",accent:!0},{label:"Social Media Design",accent:!1},{label:"Adobe Illustrator",accent:!1},{label:"Adobe Photoshop",accent:!1},{label:"Adobe After Effects",accent:!1},{label:"Visual Communication",accent:!1}],et=({children:t,variants:e=st,delay:i=0,style:n})=>{const r=T.useRef(null),o=LA(r,{once:!0,amount:.1});return a.jsx(O.div,{ref:r,variants:e,initial:"hidden",animate:o?"visible":"hidden",transition:i?{delay:i}:void 0,style:n,children:t})},UX=()=>a.jsxs(a.Fragment,{children:[a.jsxs(bX,{children:[a.jsx(rt,{title:"BCIT Energy Awareness Campaign | Nooshin Shahsavan",description:"A full-scope awareness campaign for the BCIT Green Team — branding, posters, banners, stickers, and social media motion graphics.",keywords:"BCIT, energy awareness, green team, campaign design, brand identity, poster design, motion graphics, Nooshin Shahsavan",image:"/src/assets/bcitenergy/wordmark-bcit.png"}),a.jsx(yX,{}),a.jsx(lX,{}),a.jsxs(kX,{children:[a.jsx(jX,{src:$b,alt:"BCIT Energy Campaign Wordmark",variants:ir,initial:"hidden",animate:"visible"}),a.jsx(O.div,{variants:st,initial:"hidden",animate:"visible",style:{textAlign:"center"},children:a.jsx(gn,{children:"BCIT Green Team — 2024"})}),a.jsxs(SX,{variants:st,initial:"hidden",animate:"visible",children:["BCIT Energy",a.jsx("br",{}),"Awareness Campaign"]}),a.jsx(DX,{variants:st,initial:"hidden",animate:"visible",children:"Encouraging sustainable energy habits through a friendly and engaging visual campaign."}),a.jsxs(_X,{variants:st,initial:"hidden",animate:"visible",children:[a.jsxs(Ru,{children:[a.jsx(Lu,{children:"Client"}),a.jsx(Nu,{children:"BCIT Green Team"})]}),a.jsxs(Ru,{children:[a.jsx(Lu,{children:"Role"}),a.jsx(Nu,{children:"Graphic Designer"})]}),a.jsxs(Ru,{children:[a.jsx(Lu,{children:"Scope"}),a.jsx(Nu,{children:"Brand Identity, Posters, Stickers, Banners, Motion"})]}),a.jsxs(Ru,{children:[a.jsx(Lu,{children:"Goal"}),a.jsx(Nu,{children:"Reduce energy & heating consumption on campus"})]})]})]}),a.jsx(or,{}),a.jsx("div",{id:"bcit-overview",children:a.jsx(rr,{children:a.jsx(nr,{children:a.jsxs(CX,{children:[a.jsx(et,{children:a.jsxs(Ho,{children:[a.jsx(gn,{children:"Project Overview"}),a.jsxs(Rr,{children:["A campaign built from",a.jsx("br",{}),"concept to production."]}),a.jsx(Uo,{})]})}),a.jsxs(et,{delay:.1,children:[a.jsx(na,{children:"The BCIT Energy Awareness Campaign was created to encourage students, faculty, and staff to adopt energy-saving habits during the colder months."}),a.jsx(Lr,{children:"Working independently from concept to final execution, I developed a cohesive visual system that communicated environmental responsibility in a way that felt friendly, positive, and accessible."}),a.jsx(Lr,{children:"The campaign was deployed across multiple touchpoints including banners, posters, stickers, and social media content, ensuring a consistent message across both physical and digital environments."})]})]})})})}),a.jsx(or,{}),a.jsx("div",{id:"bcit-challenge",children:a.jsx(rr,{children:a.jsx(nr,{children:a.jsxs(et,{children:[a.jsx("div",{style:{marginBottom:"1.5rem"},children:a.jsx(gn,{children:"The Challenge"})}),a.jsxs(PX,{variants:st,initial:"hidden",animate:"visible",children:[a.jsx(TX,{children:'"Environmental campaigns often feel technical, dry, and overly serious — how do you make sustainability feel approachable?"'}),a.jsx(EX,{children:"Environmental messaging can easily fall flat when it leans too heavily on obligation and severity. The challenge was to create a visual identity that felt welcoming and engaging while clearly communicating the importance of reducing energy consumption. The visual language needed to appeal to a broad campus audience while maintaining a strong connection to sustainability and energy efficiency."})]})]})})})}),a.jsx(or,{}),a.jsx("div",{id:"bcit-moodboard",children:a.jsx(rr,{children:a.jsxs(nr,{children:[a.jsx(et,{children:a.jsxs(Ho,{children:[a.jsx(gn,{children:"Moodboard & Visual Direction"}),a.jsxs(Rr,{children:["A visual language rooted",a.jsx("br",{}),"in nature and efficiency."]}),a.jsx(Uo,{}),a.jsx(na,{children:"The visual direction was inspired by the relationship between sustainability and energy efficiency. A leaf was chosen as a primary visual element — a simple, universally recognised symbol of nature and environmental responsibility."}),a.jsxs(Lr,{children:["The letter ",a.jsx("strong",{children:'"A"'})," was integrated into the concept because it represents the highest rating within energy efficiency labelling systems. Combining the leaf with the letter A established a direct visual relationship between smart energy use and environmental stewardship."]})]})}),a.jsx(et,{variants:ir,children:a.jsx(IX,{variants:ir,initial:"hidden",animate:"visible",children:a.jsx("img",{src:cX,alt:"BCIT Energy Campaign Moodboard"})})}),a.jsx(et,{children:a.jsxs(AX,{variants:vX,initial:"hidden",animate:"visible",children:[a.jsxs(J0,{$accent:"#5a8a3c",variants:st,children:[a.jsx("div",{className:"swatch"}),a.jsxs("div",{className:"body",children:[a.jsx("h4",{children:"Green"}),a.jsx("p",{children:"Represents nature, sustainability, and growth — the core identity colour of the campaign."})]})]}),a.jsxs(J0,{$accent:"#2e6fa3",variants:st,children:[a.jsx("div",{className:"swatch"}),a.jsxs("div",{className:"body",children:[a.jsx("h4",{children:"Blue"}),a.jsx("p",{children:"Represents winter, cold weather, and the seasonal context of heating consumption."})]})]}),a.jsxs(J0,{$accent:"#f0b429",variants:st,children:[a.jsx("div",{className:"swatch"}),a.jsxs("div",{className:"body",children:[a.jsx("h4",{children:"Yellow"}),a.jsx("p",{children:"Represents warmth, energy, and the positive action the campaign encourages."})]})]})]})})]})})}),a.jsx(or,{}),a.jsx("div",{id:"bcit-wordmark",children:a.jsx(rr,{bg:"#fafafa",children:a.jsxs(nr,{children:[a.jsx(et,{children:a.jsxs(Ho,{children:[a.jsx(gn,{children:"Wordmark Design"}),a.jsxs(Rr,{children:["Where nature meets",a.jsx("br",{}),"energy efficiency."]}),a.jsx(Uo,{})]})}),a.jsx(et,{variants:ir,children:a.jsx(MX,{variants:ir,initial:"hidden",animate:"visible",children:a.jsx("img",{src:$b,alt:"BCIT Energy Awareness Campaign Wordmark"})})}),a.jsx(et,{children:a.jsxs(zX,{children:[a.jsxs(Ou,{variants:st,initial:"hidden",animate:"visible",children:[a.jsx("h4",{children:"Concept"}),a.jsx("p",{children:"The wordmark combines a leaf motif with the letter A, creating an immediate visual connection between environmental awareness and energy efficiency ratings."})]}),a.jsxs(Ou,{variants:st,initial:"hidden",animate:"visible",children:[a.jsx("h4",{children:"Symbolism"}),a.jsx("p",{children:"The letter A references the top tier of energy efficiency labelling systems, linking responsible energy use to the campaign identity through a single recognisable mark."})]}),a.jsxs(Ou,{variants:st,initial:"hidden",animate:"visible",children:[a.jsx("h4",{children:"Application"}),a.jsx("p",{children:"The wordmark was applied consistently across all campaign materials — from large-format banners and posters to stickers and digital social media assets."})]}),a.jsxs(Ou,{variants:st,initial:"hidden",animate:"visible",children:[a.jsx("h4",{children:"Foundation"}),a.jsx("p",{children:"As the anchor of the visual system, the wordmark established the tone and personality of the entire campaign — approachable, modern, and purposeful."})]})]})})]})})}),a.jsx(or,{}),a.jsx("div",{id:"bcit-banners",children:a.jsx(rr,{children:a.jsxs(nr,{children:[a.jsx(et,{children:a.jsxs(Ho,{children:[a.jsx(gn,{children:"Campus Banner System"}),a.jsxs(Rr,{children:["Bold, visible, and",a.jsx("br",{}),"impossible to ignore."]}),a.jsx(Uo,{}),a.jsx(na,{children:"Large-format banners were designed to maximise visibility in campus environments. Both images represent the same banner design displayed in different mockup environments."}),a.jsx(Lr,{children:"The banner system uses bold typography, recognisable campaign branding, and clear visual hierarchy to quickly communicate energy-saving behaviours."})]})}),a.jsxs(FX,{children:[a.jsx(et,{children:a.jsxs(Bb,{variants:st,initial:"hidden",animate:"visible",children:[a.jsx("img",{src:dX,alt:"BCIT Energy Campaign Banner – Mockup 1"}),a.jsx(Vb,{children:"Environment 01"})]})}),a.jsx(et,{delay:.12,children:a.jsxs(Bb,{variants:st,initial:"hidden",animate:"visible",children:[a.jsx("img",{src:uX,alt:"BCIT Energy Campaign Banner – Mockup 2"}),a.jsx(Vb,{children:"Environment 02"})]})})]})]})})}),a.jsx(or,{}),a.jsx("div",{id:"bcit-stickers",children:a.jsx(rr,{bg:"#fafafa",children:a.jsxs(nr,{children:[a.jsx(et,{children:a.jsxs(Ho,{children:[a.jsx(gn,{children:"Sticker Design"}),a.jsxs(Rr,{children:["Small reminders,",a.jsx("br",{}),"big impact."]}),a.jsx(Uo,{}),a.jsx(na,{children:"Stickers were developed as a playful extension of the campaign identity — transforming key messages into small, memorable visual reminders placed throughout campus."}),a.jsx(Lr,{children:"Friendly illustrations and recognisable branding made sustainability feel approachable and engaging rather than instructional or demanding."})]})}),a.jsx(et,{variants:ir,children:a.jsxs(RX,{children:[a.jsx($u,{$wide:!0,variants:ir,initial:"hidden",animate:"visible",children:a.jsx("img",{src:hX,alt:"BCIT Energy Sticker Collection"})}),a.jsx($u,{variants:st,initial:"hidden",animate:"visible",children:a.jsx("img",{src:pX,alt:"BCIT Energy Sticker 1"})}),a.jsx($u,{variants:st,initial:"hidden",animate:"visible",children:a.jsx("img",{src:fX,alt:"BCIT Energy Sticker 2"})}),a.jsx($u,{variants:st,initial:"hidden",animate:"visible",children:a.jsx("img",{src:mX,alt:"BCIT Energy Sticker 3"})})]})})]})})}),a.jsx(or,{}),a.jsx("div",{id:"bcit-poster",children:a.jsx(rr,{children:a.jsxs(nr,{children:[a.jsx(et,{children:a.jsxs(Ho,{children:[a.jsx(gn,{children:"Poster Campaign"}),a.jsxs(Rr,{children:["Strong typography.",a.jsx("br",{}),"Clear message."]}),a.jsx(Uo,{}),a.jsx(na,{children:"The poster system was designed to capture attention quickly while delivering clear and actionable energy-saving messages across campus."}),a.jsx(Lr,{children:"Strong typography, bold visuals, and consistent branding communicated the campaign message effectively through a direct and confident visual approach."})]})}),a.jsx(et,{variants:ir,children:a.jsx(LX,{variants:ir,initial:"hidden",animate:"visible",children:a.jsx("img",{src:gX,alt:"BCIT Energy Awareness Campaign Poster"})})})]})})}),a.jsx(or,{}),a.jsx("div",{id:"bcit-motion",children:a.jsx(rr,{bg:"#0d0d0d",children:a.jsxs(nr,{children:[a.jsx(et,{children:a.jsxs(Ho,{children:[a.jsx(gn,{style:{color:"#8bc34a"},children:"Social Media Motion Graphics"}),a.jsxs(Rr,{style:{color:"#fff"},children:["Bringing the campaign",a.jsx("br",{}),"to life digitally."]}),a.jsx(Uo,{style:{background:"#8bc34a"}}),a.jsx(na,{style:{color:"rgba(255,255,255,0.65)",maxWidth:"620px"},children:"Short-form social media videos were created for Instagram, translating the campaign's visual identity into engaging digital content and reinforcing energy-saving behaviours through dynamic storytelling."})]})}),a.jsxs(NX,{children:[a.jsxs(et,{children:[a.jsx(Wb,{variants:st,initial:"hidden",animate:"visible",children:a.jsx("video",{src:xX,controls:!0,playsInline:!0,loop:!0,preload:"metadata",controlsList:"nodownload"})}),a.jsx(Ub,{children:"Motion Graphic — 01"})]}),a.jsxs(et,{delay:.12,children:[a.jsx(Wb,{variants:st,initial:"hidden",animate:"visible",children:a.jsx("video",{src:wX,controls:!0,playsInline:!0,loop:!0,preload:"metadata",controlsList:"nodownload"})}),a.jsx(Ub,{children:"Motion Graphic — 02"})]})]})]})})}),a.jsx(or,{}),a.jsx("div",{id:"bcit-reflection",children:a.jsx(rr,{children:a.jsx(nr,{children:a.jsxs(OX,{children:[a.jsxs(et,{children:[a.jsx(gn,{children:"Reflection"}),a.jsx($X,{children:'"A unified visual identity, applied with consistency across every touchpoint, is what turns a campaign into a movement."'}),a.jsx(Lr,{children:"This project provided an opportunity to develop and execute a complete awareness campaign from concept through production. By creating a unified visual identity and applying it consistently across print, environmental graphics, and digital media, the campaign successfully communicated energy-saving messages in a way that felt approachable, positive, and memorable."}),a.jsx(Lr,{children:"The project strengthened skills in branding, campaign design, visual storytelling, and multi-channel communication."})]}),a.jsxs(et,{delay:.1,children:[a.jsx(gn,{children:"Skills & Tools"}),a.jsx(Rr,{style:{marginBottom:"2rem"},children:"Disciplines applied."}),a.jsx(BX,{children:WX.map(t=>a.jsx(VX,{$accent:t.accent,children:t.label},t.label))})]})]})})})}),a.jsx(Bs,{}),a.jsx(Os,{})]}),a.jsx($s,{})]}),HX=()=>a.jsx(kS,{children:a.jsx(PP,{children:a.jsx(X8,{basename:"/Nooshin-Shahsavan-portfolio/",children:a.jsx(VP,{children:a.jsxs(B8,{children:[a.jsx(Yi,{path:"/",element:a.jsx(DF,{})}),a.jsx(Yi,{path:"/about",element:a.jsx(RR,{})}),a.jsx(Yi,{path:"/work",element:a.jsx(e7,{})}),a.jsx(Yi,{path:"/resume",element:a.jsx(o7,{})}),a.jsx(Yi,{path:"/work/sbs",element:a.jsx(lN,{})}),a.jsx(Yi,{path:"/work/veen",element:a.jsx(N$,{})}),a.jsx(Yi,{path:"/work/workday",element:a.jsx(IG,{})}),a.jsx(Yi,{path:"/work/delicato",element:a.jsx(BV,{})}),a.jsx(Yi,{path:"/work/zar",element:a.jsx(rH,{})}),a.jsx(Yi,{path:"/work/fun",element:a.jsx(rX,{})}),a.jsx(Yi,{path:"/work/bcit",element:a.jsx(UX,{})})]})})})})}),Hb=document.getElementById("root");Hb&&(Hb.innerHTML="");const YX=tm.createRoot(document.getElementById("root"));YX.render(a.jsx(q.StrictMode,{children:a.jsx(HX,{})}));
