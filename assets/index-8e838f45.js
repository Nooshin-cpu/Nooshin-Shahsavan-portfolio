var v4=Object.defineProperty;var y4=(t,e,i)=>e in t?v4(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var Kn=(t,e,i)=>(y4(t,typeof e!="symbol"?e+"":e,i),i);function b4(t,e){for(var i=0;i<e.length;i++){const n=e[i];if(typeof n!="string"&&!Array.isArray(n)){for(const r in n)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(n,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>n[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();var k4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yp(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hb={exports:{}},bp={},Yb={exports:{}},de={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hd=Symbol.for("react.element"),j4=Symbol.for("react.portal"),S4=Symbol.for("react.fragment"),D4=Symbol.for("react.strict_mode"),_4=Symbol.for("react.profiler"),C4=Symbol.for("react.provider"),P4=Symbol.for("react.context"),T4=Symbol.for("react.forward_ref"),E4=Symbol.for("react.suspense"),I4=Symbol.for("react.memo"),A4=Symbol.for("react.lazy"),fw=Symbol.iterator;function M4(t){return t===null||typeof t!="object"?null:(t=fw&&t[fw]||t["@@iterator"],typeof t=="function"?t:null)}var Gb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xb=Object.assign,Zb={};function cl(t,e,i){this.props=t,this.context=e,this.refs=Zb,this.updater=i||Gb}cl.prototype.isReactComponent={};cl.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};cl.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qb(){}qb.prototype=cl.prototype;function sx(t,e,i){this.props=t,this.context=e,this.refs=Zb,this.updater=i||Gb}var ax=sx.prototype=new qb;ax.constructor=sx;Xb(ax,cl.prototype);ax.isPureReactComponent=!0;var mw=Array.isArray,Qb=Object.prototype.hasOwnProperty,lx={current:null},Kb={key:!0,ref:!0,__self:!0,__source:!0};function Jb(t,e,i){var n,r={},o=null,s=null;if(e!=null)for(n in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Qb.call(e,n)&&!Kb.hasOwnProperty(n)&&(r[n]=e[n]);var l=arguments.length-2;if(l===1)r.children=i;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}if(t&&t.defaultProps)for(n in l=t.defaultProps,l)r[n]===void 0&&(r[n]=l[n]);return{$$typeof:hd,type:t,key:o,ref:s,props:r,_owner:lx.current}}function z4(t,e){return{$$typeof:hd,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cx(t){return typeof t=="object"&&t!==null&&t.$$typeof===hd}function F4(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(i){return e[i]})}var gw=/\/+/g;function af(t,e){return typeof t=="object"&&t!==null&&t.key!=null?F4(""+t.key):e.toString(36)}function $u(t,e,i,n,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case hd:case j4:s=!0}}if(s)return s=t,r=r(s),t=n===""?"."+af(s,0):n,mw(r)?(i="",t!=null&&(i=t.replace(gw,"$&/")+"/"),$u(r,e,i,"",function(d){return d})):r!=null&&(cx(r)&&(r=z4(r,i+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(gw,"$&/")+"/")+t)),e.push(r)),1;if(s=0,n=n===""?".":n+":",mw(t))for(var l=0;l<t.length;l++){o=t[l];var c=n+af(o,l);s+=$u(o,e,i,c,r)}else if(c=M4(t),typeof c=="function")for(t=c.call(t),l=0;!(o=t.next()).done;)o=o.value,c=n+af(o,l++),s+=$u(o,e,i,c,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Td(t,e,i){if(t==null)return t;var n=[],r=0;return $u(t,n,"","",function(o){return e.call(i,o,r++)}),n}function R4(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(i){(t._status===0||t._status===-1)&&(t._status=1,t._result=i)},function(i){(t._status===0||t._status===-1)&&(t._status=2,t._result=i)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ai={current:null},Bu={transition:null},L4={ReactCurrentDispatcher:ai,ReactCurrentBatchConfig:Bu,ReactCurrentOwner:lx};function ek(){throw Error("act(...) is not supported in production builds of React.")}de.Children={map:Td,forEach:function(t,e,i){Td(t,function(){e.apply(this,arguments)},i)},count:function(t){var e=0;return Td(t,function(){e++}),e},toArray:function(t){return Td(t,function(e){return e})||[]},only:function(t){if(!cx(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};de.Component=cl;de.Fragment=S4;de.Profiler=_4;de.PureComponent=sx;de.StrictMode=D4;de.Suspense=E4;de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L4;de.act=ek;de.cloneElement=function(t,e,i){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var n=Xb({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=lx.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)Qb.call(e,c)&&!Kb.hasOwnProperty(c)&&(n[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)n.children=i;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];n.children=l}return{$$typeof:hd,type:t.type,key:r,ref:o,props:n,_owner:s}};de.createContext=function(t){return t={$$typeof:P4,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:C4,_context:t},t.Consumer=t};de.createElement=Jb;de.createFactory=function(t){var e=Jb.bind(null,t);return e.type=t,e};de.createRef=function(){return{current:null}};de.forwardRef=function(t){return{$$typeof:T4,render:t}};de.isValidElement=cx;de.lazy=function(t){return{$$typeof:A4,_payload:{_status:-1,_result:t},_init:R4}};de.memo=function(t,e){return{$$typeof:I4,type:t,compare:e===void 0?null:e}};de.startTransition=function(t){var e=Bu.transition;Bu.transition={};try{t()}finally{Bu.transition=e}};de.unstable_act=ek;de.useCallback=function(t,e){return ai.current.useCallback(t,e)};de.useContext=function(t){return ai.current.useContext(t)};de.useDebugValue=function(){};de.useDeferredValue=function(t){return ai.current.useDeferredValue(t)};de.useEffect=function(t,e){return ai.current.useEffect(t,e)};de.useId=function(){return ai.current.useId()};de.useImperativeHandle=function(t,e,i){return ai.current.useImperativeHandle(t,e,i)};de.useInsertionEffect=function(t,e){return ai.current.useInsertionEffect(t,e)};de.useLayoutEffect=function(t,e){return ai.current.useLayoutEffect(t,e)};de.useMemo=function(t,e){return ai.current.useMemo(t,e)};de.useReducer=function(t,e,i){return ai.current.useReducer(t,e,i)};de.useRef=function(t){return ai.current.useRef(t)};de.useState=function(t){return ai.current.useState(t)};de.useSyncExternalStore=function(t,e,i){return ai.current.useSyncExternalStore(t,e,i)};de.useTransition=function(){return ai.current.useTransition()};de.version="18.3.1";Yb.exports=de;var T=Yb.exports;const q=yp(T),N4=b4({__proto__:null,default:q},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O4=T,$4=Symbol.for("react.element"),B4=Symbol.for("react.fragment"),V4=Object.prototype.hasOwnProperty,W4=O4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U4={key:!0,ref:!0,__self:!0,__source:!0};function tk(t,e,i){var n,r={},o=null,s=null;i!==void 0&&(o=""+i),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(n in e)V4.call(e,n)&&!U4.hasOwnProperty(n)&&(r[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)r[n]===void 0&&(r[n]=e[n]);return{$$typeof:$4,type:t,key:o,ref:s,props:r,_owner:W4.current}}bp.Fragment=B4;bp.jsx=tk;bp.jsxs=tk;Hb.exports=bp;var a=Hb.exports,em={},ik={exports:{}},Bi={},nk={exports:{}},rk={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,M){var P=I.length;I.push(M);e:for(;0<P;){var R=P-1>>>1,U=I[R];if(0<r(U,M))I[R]=M,I[P]=U,P=R;else break e}}function i(I){return I.length===0?null:I[0]}function n(I){if(I.length===0)return null;var M=I[0],P=I.pop();if(P!==M){I[0]=P;e:for(var R=0,U=I.length,ne=U>>>1;R<ne;){var Z=2*(R+1)-1,fe=I[Z],ue=Z+1,me=I[ue];if(0>r(fe,P))ue<U&&0>r(me,fe)?(I[R]=me,I[ue]=P,R=ue):(I[R]=fe,I[Z]=P,R=Z);else if(ue<U&&0>r(me,P))I[R]=me,I[ue]=P,R=ue;else break e}}return M}function r(I,M){var P=I.sortIndex-M.sortIndex;return P!==0?P:I.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],d=[],u=1,p=null,f=3,g=!1,y=!1,w=!1,D=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var M=i(d);M!==null;){if(M.callback===null)n(d);else if(M.startTime<=I)n(d),M.sortIndex=M.expirationTime,e(c,M);else break;M=i(d)}}function h(I){if(w=!1,v(I),!y)if(i(c)!==null)y=!0,V(x);else{var M=i(d);M!==null&&$(h,M.startTime-I)}}function x(I,M){y=!1,w&&(w=!1,j(_),_=-1),g=!0;var P=f;try{for(v(M),p=i(c);p!==null&&(!(p.expirationTime>M)||I&&!z());){var R=p.callback;if(typeof R=="function"){p.callback=null,f=p.priorityLevel;var U=R(p.expirationTime<=M);M=t.unstable_now(),typeof U=="function"?p.callback=U:p===i(c)&&n(c),v(M)}else n(c);p=i(c)}if(p!==null)var ne=!0;else{var Z=i(d);Z!==null&&$(h,Z.startTime-M),ne=!1}return ne}finally{p=null,f=P,g=!1}}var k=!1,S=null,_=-1,C=5,E=-1;function z(){return!(t.unstable_now()-E<C)}function A(){if(S!==null){var I=t.unstable_now();E=I;var M=!0;try{M=S(!0,I)}finally{M?N():(k=!1,S=null)}}else k=!1}var N;if(typeof b=="function")N=function(){b(A)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,W=O.port2;O.port1.onmessage=A,N=function(){W.postMessage(null)}}else N=function(){D(A,0)};function V(I){S=I,k||(k=!0,N())}function $(I,M){_=D(function(){I(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,V(x))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return i(c)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var P=f;f=M;try{return I()}finally{f=P}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,M){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var P=f;f=I;try{return M()}finally{f=P}},t.unstable_scheduleCallback=function(I,M,P){var R=t.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?R+P:R):P=R,I){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=P+U,I={id:u++,callback:M,priorityLevel:I,startTime:P,expirationTime:U,sortIndex:-1},P>R?(I.sortIndex=P,e(d,I),i(c)===null&&I===i(d)&&(w?(j(_),_=-1):w=!0,$(h,P-R))):(I.sortIndex=U,e(c,I),y||g||(y=!0,V(x))),I},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(I){var M=f;return function(){var P=f;f=M;try{return I.apply(this,arguments)}finally{f=P}}}})(rk);nk.exports=rk;var H4=nk.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y4=T,Li=H4;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,i=1;i<arguments.length;i++)e+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ok=new Set,zc={};function Es(t,e){Ba(t,e),Ba(t+"Capture",e)}function Ba(t,e){for(zc[t]=e,t=0;t<e.length;t++)ok.add(e[t])}var vr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tm=Object.prototype.hasOwnProperty,G4=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xw={},ww={};function X4(t){return tm.call(ww,t)?!0:tm.call(xw,t)?!1:G4.test(t)?ww[t]=!0:(xw[t]=!0,!1)}function Z4(t,e,i,n){if(i!==null&&i.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return n?!1:i!==null?!i.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function q4(t,e,i,n){if(e===null||typeof e>"u"||Z4(t,e,i,n))return!0;if(n)return!1;if(i!==null)switch(i.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function li(t,e,i,n,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=n,this.attributeNamespace=r,this.mustUseProperty=i,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Rt[t]=new li(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Rt[e]=new li(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Rt[t]=new li(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Rt[t]=new li(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Rt[t]=new li(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Rt[t]=new li(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Rt[t]=new li(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Rt[t]=new li(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Rt[t]=new li(t,5,!1,t.toLowerCase(),null,!1,!1)});var dx=/[\-:]([a-z])/g;function ux(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dx,ux);Rt[e]=new li(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dx,ux);Rt[e]=new li(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dx,ux);Rt[e]=new li(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Rt[t]=new li(t,1,!1,t.toLowerCase(),null,!1,!1)});Rt.xlinkHref=new li("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Rt[t]=new li(t,1,!1,t.toLowerCase(),null,!0,!0)});function hx(t,e,i,n){var r=Rt.hasOwnProperty(e)?Rt[e]:null;(r!==null?r.type!==0:n||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(q4(e,i,r,n)&&(i=null),n||r===null?X4(e)&&(i===null?t.removeAttribute(e):t.setAttribute(e,""+i)):r.mustUseProperty?t[r.propertyName]=i===null?r.type===3?!1:"":i:(e=r.attributeName,n=r.attributeNamespace,i===null?t.removeAttribute(e):(r=r.type,i=r===3||r===4&&i===!0?"":""+i,n?t.setAttributeNS(n,e,i):t.setAttribute(e,i))))}var Dr=Y4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ed=Symbol.for("react.element"),oa=Symbol.for("react.portal"),sa=Symbol.for("react.fragment"),px=Symbol.for("react.strict_mode"),im=Symbol.for("react.profiler"),sk=Symbol.for("react.provider"),ak=Symbol.for("react.context"),fx=Symbol.for("react.forward_ref"),nm=Symbol.for("react.suspense"),rm=Symbol.for("react.suspense_list"),mx=Symbol.for("react.memo"),$r=Symbol.for("react.lazy"),lk=Symbol.for("react.offscreen"),vw=Symbol.iterator;function bl(t){return t===null||typeof t!="object"?null:(t=vw&&t[vw]||t["@@iterator"],typeof t=="function"?t:null)}var He=Object.assign,lf;function Wl(t){if(lf===void 0)try{throw Error()}catch(i){var e=i.stack.trim().match(/\n( *(at )?)/);lf=e&&e[1]||""}return`
`+lf+t}var cf=!1;function df(t,e){if(!t||cf)return"";cf=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var n=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){n=d}t.call(e.prototype)}else{try{throw Error()}catch(d){n=d}t()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var r=d.stack.split(`
`),o=n.stack.split(`
`),s=r.length-1,l=o.length-1;1<=s&&0<=l&&r[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(r[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||r[s]!==o[l]){var c=`
`+r[s].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=s&&0<=l);break}}}finally{cf=!1,Error.prepareStackTrace=i}return(t=t?t.displayName||t.name:"")?Wl(t):""}function Q4(t){switch(t.tag){case 5:return Wl(t.type);case 16:return Wl("Lazy");case 13:return Wl("Suspense");case 19:return Wl("SuspenseList");case 0:case 2:case 15:return t=df(t.type,!1),t;case 11:return t=df(t.type.render,!1),t;case 1:return t=df(t.type,!0),t;default:return""}}function om(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case sa:return"Fragment";case oa:return"Portal";case im:return"Profiler";case px:return"StrictMode";case nm:return"Suspense";case rm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ak:return(t.displayName||"Context")+".Consumer";case sk:return(t._context.displayName||"Context")+".Provider";case fx:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mx:return e=t.displayName||null,e!==null?e:om(t.type)||"Memo";case $r:e=t._payload,t=t._init;try{return om(t(e))}catch{}}return null}function K4(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return om(e);case 8:return e===px?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xo(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ck(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function J4(t){var e=ck(t)?"checked":"value",i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),n=""+t[e];if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,o=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Id(t){t._valueTracker||(t._valueTracker=J4(t))}function dk(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var i=e.getValue(),n="";return t&&(n=ck(t)?t.checked?"true":"false":t.value),t=n,t!==i?(e.setValue(t),!0):!1}function vh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sm(t,e){var i=e.checked;return He({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??t._wrapperState.initialChecked})}function yw(t,e){var i=e.defaultValue==null?"":e.defaultValue,n=e.checked!=null?e.checked:e.defaultChecked;i=xo(e.value!=null?e.value:i),t._wrapperState={initialChecked:n,initialValue:i,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function uk(t,e){e=e.checked,e!=null&&hx(t,"checked",e,!1)}function am(t,e){uk(t,e);var i=xo(e.value),n=e.type;if(i!=null)n==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+i):t.value!==""+i&&(t.value=""+i);else if(n==="submit"||n==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?lm(t,e.type,i):e.hasOwnProperty("defaultValue")&&lm(t,e.type,xo(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bw(t,e,i){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var n=e.type;if(!(n!=="submit"&&n!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,i||e===t.value||(t.value=e),t.defaultValue=e}i=t.name,i!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,i!==""&&(t.name=i)}function lm(t,e,i){(e!=="number"||vh(t.ownerDocument)!==t)&&(i==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+i&&(t.defaultValue=""+i))}var Ul=Array.isArray;function _a(t,e,i,n){if(t=t.options,e){e={};for(var r=0;r<i.length;r++)e["$"+i[r]]=!0;for(i=0;i<t.length;i++)r=e.hasOwnProperty("$"+t[i].value),t[i].selected!==r&&(t[i].selected=r),r&&n&&(t[i].defaultSelected=!0)}else{for(i=""+xo(i),e=null,r=0;r<t.length;r++){if(t[r].value===i){t[r].selected=!0,n&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function cm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return He({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kw(t,e){var i=e.value;if(i==null){if(i=e.children,e=e.defaultValue,i!=null){if(e!=null)throw Error(B(92));if(Ul(i)){if(1<i.length)throw Error(B(93));i=i[0]}e=i}e==null&&(e=""),i=e}t._wrapperState={initialValue:xo(i)}}function hk(t,e){var i=xo(e.value),n=xo(e.defaultValue);i!=null&&(i=""+i,i!==t.value&&(t.value=i),e.defaultValue==null&&t.defaultValue!==i&&(t.defaultValue=i)),n!=null&&(t.defaultValue=""+n)}function jw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function pk(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?pk(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ad,fk=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,i,n,r){MSApp.execUnsafeLocalFunction(function(){return t(e,i,n,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ad=Ad||document.createElement("div"),Ad.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ad.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fc(t,e){if(e){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=e;return}}t.textContent=e}var nc={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},e_=["Webkit","ms","Moz","O"];Object.keys(nc).forEach(function(t){e_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),nc[e]=nc[t]})});function mk(t,e,i){return e==null||typeof e=="boolean"||e===""?"":i||typeof e!="number"||e===0||nc.hasOwnProperty(t)&&nc[t]?(""+e).trim():e+"px"}function gk(t,e){t=t.style;for(var i in e)if(e.hasOwnProperty(i)){var n=i.indexOf("--")===0,r=mk(i,e[i],n);i==="float"&&(i="cssFloat"),n?t.setProperty(i,r):t[i]=r}}var t_=He({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function um(t,e){if(e){if(t_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function hm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pm=null;function gx(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fm=null,Ca=null,Pa=null;function Sw(t){if(t=md(t)){if(typeof fm!="function")throw Error(B(280));var e=t.stateNode;e&&(e=_p(e),fm(t.stateNode,t.type,e))}}function xk(t){Ca?Pa?Pa.push(t):Pa=[t]:Ca=t}function wk(){if(Ca){var t=Ca,e=Pa;if(Pa=Ca=null,Sw(t),e)for(t=0;t<e.length;t++)Sw(e[t])}}function vk(t,e){return t(e)}function yk(){}var uf=!1;function bk(t,e,i){if(uf)return t(e,i);uf=!0;try{return vk(t,e,i)}finally{uf=!1,(Ca!==null||Pa!==null)&&(yk(),wk())}}function Rc(t,e){var i=t.stateNode;if(i===null)return null;var n=_p(i);if(n===null)return null;i=n[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(t=t.type,n=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!n;break e;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(B(231,e,typeof i));return i}var mm=!1;if(vr)try{var kl={};Object.defineProperty(kl,"passive",{get:function(){mm=!0}}),window.addEventListener("test",kl,kl),window.removeEventListener("test",kl,kl)}catch{mm=!1}function i_(t,e,i,n,r,o,s,l,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(i,d)}catch(u){this.onError(u)}}var rc=!1,yh=null,bh=!1,gm=null,n_={onError:function(t){rc=!0,yh=t}};function r_(t,e,i,n,r,o,s,l,c){rc=!1,yh=null,i_.apply(n_,arguments)}function o_(t,e,i,n,r,o,s,l,c){if(r_.apply(this,arguments),rc){if(rc){var d=yh;rc=!1,yh=null}else throw Error(B(198));bh||(bh=!0,gm=d)}}function Is(t){var e=t,i=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(i=e.return),t=e.return;while(t)}return e.tag===3?i:null}function kk(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dw(t){if(Is(t)!==t)throw Error(B(188))}function s_(t){var e=t.alternate;if(!e){if(e=Is(t),e===null)throw Error(B(188));return e!==t?null:t}for(var i=t,n=e;;){var r=i.return;if(r===null)break;var o=r.alternate;if(o===null){if(n=r.return,n!==null){i=n;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===i)return Dw(r),t;if(o===n)return Dw(r),e;o=o.sibling}throw Error(B(188))}if(i.return!==n.return)i=r,n=o;else{for(var s=!1,l=r.child;l;){if(l===i){s=!0,i=r,n=o;break}if(l===n){s=!0,n=r,i=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===i){s=!0,i=o,n=r;break}if(l===n){s=!0,n=o,i=r;break}l=l.sibling}if(!s)throw Error(B(189))}}if(i.alternate!==n)throw Error(B(190))}if(i.tag!==3)throw Error(B(188));return i.stateNode.current===i?t:e}function jk(t){return t=s_(t),t!==null?Sk(t):null}function Sk(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sk(t);if(e!==null)return e;t=t.sibling}return null}var Dk=Li.unstable_scheduleCallback,_w=Li.unstable_cancelCallback,a_=Li.unstable_shouldYield,l_=Li.unstable_requestPaint,it=Li.unstable_now,c_=Li.unstable_getCurrentPriorityLevel,xx=Li.unstable_ImmediatePriority,_k=Li.unstable_UserBlockingPriority,kh=Li.unstable_NormalPriority,d_=Li.unstable_LowPriority,Ck=Li.unstable_IdlePriority,kp=null,Vn=null;function u_(t){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(kp,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:f_,h_=Math.log,p_=Math.LN2;function f_(t){return t>>>=0,t===0?32:31-(h_(t)/p_|0)|0}var Md=64,zd=4194304;function Hl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jh(t,e){var i=t.pendingLanes;if(i===0)return 0;var n=0,r=t.suspendedLanes,o=t.pingedLanes,s=i&268435455;if(s!==0){var l=s&~r;l!==0?n=Hl(l):(o&=s,o!==0&&(n=Hl(o)))}else s=i&~r,s!==0?n=Hl(s):o!==0&&(n=Hl(o));if(n===0)return 0;if(e!==0&&e!==n&&!(e&r)&&(r=n&-n,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(n&4&&(n|=i&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=n;0<e;)i=31-jn(e),r=1<<i,n|=t[i],e&=~r;return n}function m_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function g_(t,e){for(var i=t.suspendedLanes,n=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-jn(o),l=1<<s,c=r[s];c===-1?(!(l&i)||l&n)&&(r[s]=m_(l,e)):c<=e&&(t.expiredLanes|=l),o&=~l}}function xm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Pk(){var t=Md;return Md<<=1,!(Md&4194240)&&(Md=64),t}function hf(t){for(var e=[],i=0;31>i;i++)e.push(t);return e}function pd(t,e,i){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=i}function x_(t,e){var i=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var n=t.eventTimes;for(t=t.expirationTimes;0<i;){var r=31-jn(i),o=1<<r;e[r]=0,n[r]=-1,t[r]=-1,i&=~o}}function wx(t,e){var i=t.entangledLanes|=e;for(t=t.entanglements;i;){var n=31-jn(i),r=1<<n;r&e|t[n]&e&&(t[n]|=e),i&=~r}}var je=0;function Tk(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ek,vx,Ik,Ak,Mk,wm=!1,Fd=[],Jr=null,eo=null,to=null,Lc=new Map,Nc=new Map,Wr=[],w_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cw(t,e){switch(t){case"focusin":case"focusout":Jr=null;break;case"dragenter":case"dragleave":eo=null;break;case"mouseover":case"mouseout":to=null;break;case"pointerover":case"pointerout":Lc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nc.delete(e.pointerId)}}function jl(t,e,i,n,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:i,eventSystemFlags:n,nativeEvent:o,targetContainers:[r]},e!==null&&(e=md(e),e!==null&&vx(e)),t):(t.eventSystemFlags|=n,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function v_(t,e,i,n,r){switch(e){case"focusin":return Jr=jl(Jr,t,e,i,n,r),!0;case"dragenter":return eo=jl(eo,t,e,i,n,r),!0;case"mouseover":return to=jl(to,t,e,i,n,r),!0;case"pointerover":var o=r.pointerId;return Lc.set(o,jl(Lc.get(o)||null,t,e,i,n,r)),!0;case"gotpointercapture":return o=r.pointerId,Nc.set(o,jl(Nc.get(o)||null,t,e,i,n,r)),!0}return!1}function zk(t){var e=Jo(t.target);if(e!==null){var i=Is(e);if(i!==null){if(e=i.tag,e===13){if(e=kk(i),e!==null){t.blockedOn=e,Mk(t.priority,function(){Ik(i)});return}}else if(e===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var i=vm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(i===null){i=t.nativeEvent;var n=new i.constructor(i.type,i);pm=n,i.target.dispatchEvent(n),pm=null}else return e=md(i),e!==null&&vx(e),t.blockedOn=i,!1;e.shift()}return!0}function Pw(t,e,i){Vu(t)&&i.delete(e)}function y_(){wm=!1,Jr!==null&&Vu(Jr)&&(Jr=null),eo!==null&&Vu(eo)&&(eo=null),to!==null&&Vu(to)&&(to=null),Lc.forEach(Pw),Nc.forEach(Pw)}function Sl(t,e){t.blockedOn===e&&(t.blockedOn=null,wm||(wm=!0,Li.unstable_scheduleCallback(Li.unstable_NormalPriority,y_)))}function Oc(t){function e(r){return Sl(r,t)}if(0<Fd.length){Sl(Fd[0],t);for(var i=1;i<Fd.length;i++){var n=Fd[i];n.blockedOn===t&&(n.blockedOn=null)}}for(Jr!==null&&Sl(Jr,t),eo!==null&&Sl(eo,t),to!==null&&Sl(to,t),Lc.forEach(e),Nc.forEach(e),i=0;i<Wr.length;i++)n=Wr[i],n.blockedOn===t&&(n.blockedOn=null);for(;0<Wr.length&&(i=Wr[0],i.blockedOn===null);)zk(i),i.blockedOn===null&&Wr.shift()}var Ta=Dr.ReactCurrentBatchConfig,Sh=!0;function b_(t,e,i,n){var r=je,o=Ta.transition;Ta.transition=null;try{je=1,yx(t,e,i,n)}finally{je=r,Ta.transition=o}}function k_(t,e,i,n){var r=je,o=Ta.transition;Ta.transition=null;try{je=4,yx(t,e,i,n)}finally{je=r,Ta.transition=o}}function yx(t,e,i,n){if(Sh){var r=vm(t,e,i,n);if(r===null)kf(t,e,n,Dh,i),Cw(t,n);else if(v_(r,t,e,i,n))n.stopPropagation();else if(Cw(t,n),e&4&&-1<w_.indexOf(t)){for(;r!==null;){var o=md(r);if(o!==null&&Ek(o),o=vm(t,e,i,n),o===null&&kf(t,e,n,Dh,i),o===r)break;r=o}r!==null&&n.stopPropagation()}else kf(t,e,n,null,i)}}var Dh=null;function vm(t,e,i,n){if(Dh=null,t=gx(n),t=Jo(t),t!==null)if(e=Is(t),e===null)t=null;else if(i=e.tag,i===13){if(t=kk(e),t!==null)return t;t=null}else if(i===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dh=t,null}function Fk(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(c_()){case xx:return 1;case _k:return 4;case kh:case d_:return 16;case Ck:return 536870912;default:return 16}default:return 16}}var Hr=null,bx=null,Wu=null;function Rk(){if(Wu)return Wu;var t,e=bx,i=e.length,n,r="value"in Hr?Hr.value:Hr.textContent,o=r.length;for(t=0;t<i&&e[t]===r[t];t++);var s=i-t;for(n=1;n<=s&&e[i-n]===r[o-n];n++);return Wu=r.slice(t,1<n?1-n:void 0)}function Uu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rd(){return!0}function Tw(){return!1}function Vi(t){function e(i,n,r,o,s){this._reactName=i,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(i=t[l],this[l]=i?i(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Rd:Tw,this.isPropagationStopped=Tw,this}return He(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Rd)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Rd)},persist:function(){},isPersistent:Rd}),e}var dl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kx=Vi(dl),fd=He({},dl,{view:0,detail:0}),j_=Vi(fd),pf,ff,Dl,jp=He({},fd,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jx,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Dl&&(Dl&&t.type==="mousemove"?(pf=t.screenX-Dl.screenX,ff=t.screenY-Dl.screenY):ff=pf=0,Dl=t),pf)},movementY:function(t){return"movementY"in t?t.movementY:ff}}),Ew=Vi(jp),S_=He({},jp,{dataTransfer:0}),D_=Vi(S_),__=He({},fd,{relatedTarget:0}),mf=Vi(__),C_=He({},dl,{animationName:0,elapsedTime:0,pseudoElement:0}),P_=Vi(C_),T_=He({},dl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),E_=Vi(T_),I_=He({},dl,{data:0}),Iw=Vi(I_),A_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},M_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=z_[t])?!!e[t]:!1}function jx(){return F_}var R_=He({},fd,{key:function(t){if(t.key){var e=A_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Uu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?M_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jx,charCode:function(t){return t.type==="keypress"?Uu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Uu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),L_=Vi(R_),N_=He({},jp,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Aw=Vi(N_),O_=He({},fd,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jx}),$_=Vi(O_),B_=He({},dl,{propertyName:0,elapsedTime:0,pseudoElement:0}),V_=Vi(B_),W_=He({},jp,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),U_=Vi(W_),H_=[9,13,27,32],Sx=vr&&"CompositionEvent"in window,oc=null;vr&&"documentMode"in document&&(oc=document.documentMode);var Y_=vr&&"TextEvent"in window&&!oc,Lk=vr&&(!Sx||oc&&8<oc&&11>=oc),Mw=String.fromCharCode(32),zw=!1;function Nk(t,e){switch(t){case"keyup":return H_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ok(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var aa=!1;function G_(t,e){switch(t){case"compositionend":return Ok(e);case"keypress":return e.which!==32?null:(zw=!0,Mw);case"textInput":return t=e.data,t===Mw&&zw?null:t;default:return null}}function X_(t,e){if(aa)return t==="compositionend"||!Sx&&Nk(t,e)?(t=Rk(),Wu=bx=Hr=null,aa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Lk&&e.locale!=="ko"?null:e.data;default:return null}}var Z_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fw(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Z_[t.type]:e==="textarea"}function $k(t,e,i,n){xk(n),e=_h(e,"onChange"),0<e.length&&(i=new kx("onChange","change",null,i,n),t.push({event:i,listeners:e}))}var sc=null,$c=null;function q_(t){Qk(t,0)}function Sp(t){var e=da(t);if(dk(e))return t}function Q_(t,e){if(t==="change")return e}var Bk=!1;if(vr){var gf;if(vr){var xf="oninput"in document;if(!xf){var Rw=document.createElement("div");Rw.setAttribute("oninput","return;"),xf=typeof Rw.oninput=="function"}gf=xf}else gf=!1;Bk=gf&&(!document.documentMode||9<document.documentMode)}function Lw(){sc&&(sc.detachEvent("onpropertychange",Vk),$c=sc=null)}function Vk(t){if(t.propertyName==="value"&&Sp($c)){var e=[];$k(e,$c,t,gx(t)),bk(q_,e)}}function K_(t,e,i){t==="focusin"?(Lw(),sc=e,$c=i,sc.attachEvent("onpropertychange",Vk)):t==="focusout"&&Lw()}function J_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sp($c)}function eC(t,e){if(t==="click")return Sp(e)}function tC(t,e){if(t==="input"||t==="change")return Sp(e)}function iC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _n=typeof Object.is=="function"?Object.is:iC;function Bc(t,e){if(_n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),n=Object.keys(e);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var r=i[n];if(!tm.call(e,r)||!_n(t[r],e[r]))return!1}return!0}function Nw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ow(t,e){var i=Nw(t);t=0;for(var n;i;){if(i.nodeType===3){if(n=t+i.textContent.length,t<=e&&n>=e)return{node:i,offset:e-t};t=n}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Nw(i)}}function Wk(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Wk(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Uk(){for(var t=window,e=vh();e instanceof t.HTMLIFrameElement;){try{var i=typeof e.contentWindow.location.href=="string"}catch{i=!1}if(i)t=e.contentWindow;else break;e=vh(t.document)}return e}function Dx(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nC(t){var e=Uk(),i=t.focusedElem,n=t.selectionRange;if(e!==i&&i&&i.ownerDocument&&Wk(i.ownerDocument.documentElement,i)){if(n!==null&&Dx(i)){if(e=n.start,t=n.end,t===void 0&&(t=e),"selectionStart"in i)i.selectionStart=e,i.selectionEnd=Math.min(t,i.value.length);else if(t=(e=i.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=i.textContent.length,o=Math.min(n.start,r);n=n.end===void 0?o:Math.min(n.end,r),!t.extend&&o>n&&(r=n,n=o,o=r),r=Ow(i,o);var s=Ow(i,n);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>n?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=i;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<e.length;i++)t=e[i],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rC=vr&&"documentMode"in document&&11>=document.documentMode,la=null,ym=null,ac=null,bm=!1;function $w(t,e,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;bm||la==null||la!==vh(n)||(n=la,"selectionStart"in n&&Dx(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ac&&Bc(ac,n)||(ac=n,n=_h(ym,"onSelect"),0<n.length&&(e=new kx("onSelect","select",null,e,i),t.push({event:e,listeners:n}),e.target=la)))}function Ld(t,e){var i={};return i[t.toLowerCase()]=e.toLowerCase(),i["Webkit"+t]="webkit"+e,i["Moz"+t]="moz"+e,i}var ca={animationend:Ld("Animation","AnimationEnd"),animationiteration:Ld("Animation","AnimationIteration"),animationstart:Ld("Animation","AnimationStart"),transitionend:Ld("Transition","TransitionEnd")},wf={},Hk={};vr&&(Hk=document.createElement("div").style,"AnimationEvent"in window||(delete ca.animationend.animation,delete ca.animationiteration.animation,delete ca.animationstart.animation),"TransitionEvent"in window||delete ca.transitionend.transition);function Dp(t){if(wf[t])return wf[t];if(!ca[t])return t;var e=ca[t],i;for(i in e)if(e.hasOwnProperty(i)&&i in Hk)return wf[t]=e[i];return t}var Yk=Dp("animationend"),Gk=Dp("animationiteration"),Xk=Dp("animationstart"),Zk=Dp("transitionend"),qk=new Map,Bw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function So(t,e){qk.set(t,e),Es(e,[t])}for(var vf=0;vf<Bw.length;vf++){var yf=Bw[vf],oC=yf.toLowerCase(),sC=yf[0].toUpperCase()+yf.slice(1);So(oC,"on"+sC)}So(Yk,"onAnimationEnd");So(Gk,"onAnimationIteration");So(Xk,"onAnimationStart");So("dblclick","onDoubleClick");So("focusin","onFocus");So("focusout","onBlur");So(Zk,"onTransitionEnd");Ba("onMouseEnter",["mouseout","mouseover"]);Ba("onMouseLeave",["mouseout","mouseover"]);Ba("onPointerEnter",["pointerout","pointerover"]);Ba("onPointerLeave",["pointerout","pointerover"]);Es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Es("onBeforeInput",["compositionend","keypress","textInput","paste"]);Es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yl));function Vw(t,e,i){var n=t.type||"unknown-event";t.currentTarget=i,o_(n,e,void 0,t),t.currentTarget=null}function Qk(t,e){e=(e&4)!==0;for(var i=0;i<t.length;i++){var n=t[i],r=n.event;n=n.listeners;e:{var o=void 0;if(e)for(var s=n.length-1;0<=s;s--){var l=n[s],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==o&&r.isPropagationStopped())break e;Vw(r,l,d),o=c}else for(s=0;s<n.length;s++){if(l=n[s],c=l.instance,d=l.currentTarget,l=l.listener,c!==o&&r.isPropagationStopped())break e;Vw(r,l,d),o=c}}}if(bh)throw t=gm,bh=!1,gm=null,t}function Ie(t,e){var i=e[_m];i===void 0&&(i=e[_m]=new Set);var n=t+"__bubble";i.has(n)||(Kk(e,t,2,!1),i.add(n))}function bf(t,e,i){var n=0;e&&(n|=4),Kk(i,t,n,e)}var Nd="_reactListening"+Math.random().toString(36).slice(2);function Vc(t){if(!t[Nd]){t[Nd]=!0,ok.forEach(function(i){i!=="selectionchange"&&(aC.has(i)||bf(i,!1,t),bf(i,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Nd]||(e[Nd]=!0,bf("selectionchange",!1,e))}}function Kk(t,e,i,n){switch(Fk(e)){case 1:var r=b_;break;case 4:r=k_;break;default:r=yx}i=r.bind(null,e,i,t),r=void 0,!mm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),n?r!==void 0?t.addEventListener(e,i,{capture:!0,passive:r}):t.addEventListener(e,i,!0):r!==void 0?t.addEventListener(e,i,{passive:r}):t.addEventListener(e,i,!1)}function kf(t,e,i,n,r){var o=n;if(!(e&1)&&!(e&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;s=s.return}for(;l!==null;){if(s=Jo(l),s===null)return;if(c=s.tag,c===5||c===6){n=o=s;continue e}l=l.parentNode}}n=n.return}bk(function(){var d=o,u=gx(i),p=[];e:{var f=qk.get(t);if(f!==void 0){var g=kx,y=t;switch(t){case"keypress":if(Uu(i)===0)break e;case"keydown":case"keyup":g=L_;break;case"focusin":y="focus",g=mf;break;case"focusout":y="blur",g=mf;break;case"beforeblur":case"afterblur":g=mf;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ew;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=D_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=$_;break;case Yk:case Gk:case Xk:g=P_;break;case Zk:g=V_;break;case"scroll":g=j_;break;case"wheel":g=U_;break;case"copy":case"cut":case"paste":g=E_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Aw}var w=(e&4)!==0,D=!w&&t==="scroll",j=w?f!==null?f+"Capture":null:f;w=[];for(var b=d,v;b!==null;){v=b;var h=v.stateNode;if(v.tag===5&&h!==null&&(v=h,j!==null&&(h=Rc(b,j),h!=null&&w.push(Wc(b,h,v)))),D)break;b=b.return}0<w.length&&(f=new g(f,y,null,i,u),p.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&i!==pm&&(y=i.relatedTarget||i.fromElement)&&(Jo(y)||y[yr]))break e;if((g||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=i.relatedTarget||i.toElement,g=d,y=y?Jo(y):null,y!==null&&(D=Is(y),y!==D||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=d),g!==y)){if(w=Ew,h="onMouseLeave",j="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(w=Aw,h="onPointerLeave",j="onPointerEnter",b="pointer"),D=g==null?f:da(g),v=y==null?f:da(y),f=new w(h,b+"leave",g,i,u),f.target=D,f.relatedTarget=v,h=null,Jo(u)===d&&(w=new w(j,b+"enter",y,i,u),w.target=v,w.relatedTarget=D,h=w),D=h,g&&y)t:{for(w=g,j=y,b=0,v=w;v;v=Ws(v))b++;for(v=0,h=j;h;h=Ws(h))v++;for(;0<b-v;)w=Ws(w),b--;for(;0<v-b;)j=Ws(j),v--;for(;b--;){if(w===j||j!==null&&w===j.alternate)break t;w=Ws(w),j=Ws(j)}w=null}else w=null;g!==null&&Ww(p,f,g,w,!1),y!==null&&D!==null&&Ww(p,D,y,w,!0)}}e:{if(f=d?da(d):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var x=Q_;else if(Fw(f))if(Bk)x=tC;else{x=J_;var k=K_}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(x=eC);if(x&&(x=x(t,d))){$k(p,x,i,u);break e}k&&k(t,f,d),t==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&lm(f,"number",f.value)}switch(k=d?da(d):window,t){case"focusin":(Fw(k)||k.contentEditable==="true")&&(la=k,ym=d,ac=null);break;case"focusout":ac=ym=la=null;break;case"mousedown":bm=!0;break;case"contextmenu":case"mouseup":case"dragend":bm=!1,$w(p,i,u);break;case"selectionchange":if(rC)break;case"keydown":case"keyup":$w(p,i,u)}var S;if(Sx)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else aa?Nk(t,i)&&(_="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(_="onCompositionStart");_&&(Lk&&i.locale!=="ko"&&(aa||_!=="onCompositionStart"?_==="onCompositionEnd"&&aa&&(S=Rk()):(Hr=u,bx="value"in Hr?Hr.value:Hr.textContent,aa=!0)),k=_h(d,_),0<k.length&&(_=new Iw(_,t,null,i,u),p.push({event:_,listeners:k}),S?_.data=S:(S=Ok(i),S!==null&&(_.data=S)))),(S=Y_?G_(t,i):X_(t,i))&&(d=_h(d,"onBeforeInput"),0<d.length&&(u=new Iw("onBeforeInput","beforeinput",null,i,u),p.push({event:u,listeners:d}),u.data=S))}Qk(p,e)})}function Wc(t,e,i){return{instance:t,listener:e,currentTarget:i}}function _h(t,e){for(var i=e+"Capture",n=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Rc(t,i),o!=null&&n.unshift(Wc(t,o,r)),o=Rc(t,e),o!=null&&n.push(Wc(t,o,r))),t=t.return}return n}function Ws(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ww(t,e,i,n,r){for(var o=e._reactName,s=[];i!==null&&i!==n;){var l=i,c=l.alternate,d=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&d!==null&&(l=d,r?(c=Rc(i,o),c!=null&&s.unshift(Wc(i,c,l))):r||(c=Rc(i,o),c!=null&&s.push(Wc(i,c,l)))),i=i.return}s.length!==0&&t.push({event:e,listeners:s})}var lC=/\r\n?/g,cC=/\u0000|\uFFFD/g;function Uw(t){return(typeof t=="string"?t:""+t).replace(lC,`
`).replace(cC,"")}function Od(t,e,i){if(e=Uw(e),Uw(t)!==e&&i)throw Error(B(425))}function Ch(){}var km=null,jm=null;function Sm(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dm=typeof setTimeout=="function"?setTimeout:void 0,dC=typeof clearTimeout=="function"?clearTimeout:void 0,Hw=typeof Promise=="function"?Promise:void 0,uC=typeof queueMicrotask=="function"?queueMicrotask:typeof Hw<"u"?function(t){return Hw.resolve(null).then(t).catch(hC)}:Dm;function hC(t){setTimeout(function(){throw t})}function jf(t,e){var i=e,n=0;do{var r=i.nextSibling;if(t.removeChild(i),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(n===0){t.removeChild(r),Oc(e);return}n--}else i!=="$"&&i!=="$?"&&i!=="$!"||n++;i=r}while(i);Oc(e)}function io(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"){if(e===0)return t;e--}else i==="/$"&&e++}t=t.previousSibling}return null}var ul=Math.random().toString(36).slice(2),Nn="__reactFiber$"+ul,Uc="__reactProps$"+ul,yr="__reactContainer$"+ul,_m="__reactEvents$"+ul,pC="__reactListeners$"+ul,fC="__reactHandles$"+ul;function Jo(t){var e=t[Nn];if(e)return e;for(var i=t.parentNode;i;){if(e=i[yr]||i[Nn]){if(i=e.alternate,e.child!==null||i!==null&&i.child!==null)for(t=Yw(t);t!==null;){if(i=t[Nn])return i;t=Yw(t)}return e}t=i,i=t.parentNode}return null}function md(t){return t=t[Nn]||t[yr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function da(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function _p(t){return t[Uc]||null}var Cm=[],ua=-1;function Do(t){return{current:t}}function Me(t){0>ua||(t.current=Cm[ua],Cm[ua]=null,ua--)}function Ee(t,e){ua++,Cm[ua]=t.current,t.current=e}var wo={},Xt=Do(wo),fi=Do(!1),vs=wo;function Va(t,e){var i=t.type.contextTypes;if(!i)return wo;var n=t.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===e)return n.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in i)r[o]=e[o];return n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mi(t){return t=t.childContextTypes,t!=null}function Ph(){Me(fi),Me(Xt)}function Gw(t,e,i){if(Xt.current!==wo)throw Error(B(168));Ee(Xt,e),Ee(fi,i)}function Jk(t,e,i){var n=t.stateNode;if(e=e.childContextTypes,typeof n.getChildContext!="function")return i;n=n.getChildContext();for(var r in n)if(!(r in e))throw Error(B(108,K4(t)||"Unknown",r));return He({},i,n)}function Th(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wo,vs=Xt.current,Ee(Xt,t),Ee(fi,fi.current),!0}function Xw(t,e,i){var n=t.stateNode;if(!n)throw Error(B(169));i?(t=Jk(t,e,vs),n.__reactInternalMemoizedMergedChildContext=t,Me(fi),Me(Xt),Ee(Xt,t)):Me(fi),Ee(fi,i)}var ar=null,Cp=!1,Sf=!1;function ej(t){ar===null?ar=[t]:ar.push(t)}function mC(t){Cp=!0,ej(t)}function _o(){if(!Sf&&ar!==null){Sf=!0;var t=0,e=je;try{var i=ar;for(je=1;t<i.length;t++){var n=i[t];do n=n(!0);while(n!==null)}ar=null,Cp=!1}catch(r){throw ar!==null&&(ar=ar.slice(t+1)),Dk(xx,_o),r}finally{je=e,Sf=!1}}return null}var ha=[],pa=0,Eh=null,Ih=0,Zi=[],qi=0,ys=null,ur=1,hr="";function Uo(t,e){ha[pa++]=Ih,ha[pa++]=Eh,Eh=t,Ih=e}function tj(t,e,i){Zi[qi++]=ur,Zi[qi++]=hr,Zi[qi++]=ys,ys=t;var n=ur;t=hr;var r=32-jn(n)-1;n&=~(1<<r),i+=1;var o=32-jn(e)+r;if(30<o){var s=r-r%5;o=(n&(1<<s)-1).toString(32),n>>=s,r-=s,ur=1<<32-jn(e)+r|i<<r|n,hr=o+t}else ur=1<<o|i<<r|n,hr=t}function _x(t){t.return!==null&&(Uo(t,1),tj(t,1,0))}function Cx(t){for(;t===Eh;)Eh=ha[--pa],ha[pa]=null,Ih=ha[--pa],ha[pa]=null;for(;t===ys;)ys=Zi[--qi],Zi[qi]=null,hr=Zi[--qi],Zi[qi]=null,ur=Zi[--qi],Zi[qi]=null}var Fi=null,Mi=null,Re=!1,vn=null;function ij(t,e){var i=Ji(5,null,null,0);i.elementType="DELETED",i.stateNode=e,i.return=t,e=t.deletions,e===null?(t.deletions=[i],t.flags|=16):e.push(i)}function Zw(t,e){switch(t.tag){case 5:var i=t.type;return e=e.nodeType!==1||i.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Fi=t,Mi=io(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Fi=t,Mi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(i=ys!==null?{id:ur,overflow:hr}:null,t.memoizedState={dehydrated:e,treeContext:i,retryLane:1073741824},i=Ji(18,null,null,0),i.stateNode=e,i.return=t,t.child=i,Fi=t,Mi=null,!0):!1;default:return!1}}function Pm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Tm(t){if(Re){var e=Mi;if(e){var i=e;if(!Zw(t,e)){if(Pm(t))throw Error(B(418));e=io(i.nextSibling);var n=Fi;e&&Zw(t,e)?ij(n,i):(t.flags=t.flags&-4097|2,Re=!1,Fi=t)}}else{if(Pm(t))throw Error(B(418));t.flags=t.flags&-4097|2,Re=!1,Fi=t}}}function qw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fi=t}function $d(t){if(t!==Fi)return!1;if(!Re)return qw(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sm(t.type,t.memoizedProps)),e&&(e=Mi)){if(Pm(t))throw nj(),Error(B(418));for(;e;)ij(t,e),e=io(e.nextSibling)}if(qw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"){if(e===0){Mi=io(t.nextSibling);break e}e--}else i!=="$"&&i!=="$!"&&i!=="$?"||e++}t=t.nextSibling}Mi=null}}else Mi=Fi?io(t.stateNode.nextSibling):null;return!0}function nj(){for(var t=Mi;t;)t=io(t.nextSibling)}function Wa(){Mi=Fi=null,Re=!1}function Px(t){vn===null?vn=[t]:vn.push(t)}var gC=Dr.ReactCurrentBatchConfig;function _l(t,e,i){if(t=i.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(B(309));var n=i.stateNode}if(!n)throw Error(B(147,t));var r=n,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=r.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(B(284));if(!i._owner)throw Error(B(290,t))}return t}function Bd(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qw(t){var e=t._init;return e(t._payload)}function rj(t){function e(j,b){if(t){var v=j.deletions;v===null?(j.deletions=[b],j.flags|=16):v.push(b)}}function i(j,b){if(!t)return null;for(;b!==null;)e(j,b),b=b.sibling;return null}function n(j,b){for(j=new Map;b!==null;)b.key!==null?j.set(b.key,b):j.set(b.index,b),b=b.sibling;return j}function r(j,b){return j=so(j,b),j.index=0,j.sibling=null,j}function o(j,b,v){return j.index=v,t?(v=j.alternate,v!==null?(v=v.index,v<b?(j.flags|=2,b):v):(j.flags|=2,b)):(j.flags|=1048576,b)}function s(j){return t&&j.alternate===null&&(j.flags|=2),j}function l(j,b,v,h){return b===null||b.tag!==6?(b=If(v,j.mode,h),b.return=j,b):(b=r(b,v),b.return=j,b)}function c(j,b,v,h){var x=v.type;return x===sa?u(j,b,v.props.children,h,v.key):b!==null&&(b.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===$r&&Qw(x)===b.type)?(h=r(b,v.props),h.ref=_l(j,b,v),h.return=j,h):(h=Qu(v.type,v.key,v.props,null,j.mode,h),h.ref=_l(j,b,v),h.return=j,h)}function d(j,b,v,h){return b===null||b.tag!==4||b.stateNode.containerInfo!==v.containerInfo||b.stateNode.implementation!==v.implementation?(b=Af(v,j.mode,h),b.return=j,b):(b=r(b,v.children||[]),b.return=j,b)}function u(j,b,v,h,x){return b===null||b.tag!==7?(b=cs(v,j.mode,h,x),b.return=j,b):(b=r(b,v),b.return=j,b)}function p(j,b,v){if(typeof b=="string"&&b!==""||typeof b=="number")return b=If(""+b,j.mode,v),b.return=j,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ed:return v=Qu(b.type,b.key,b.props,null,j.mode,v),v.ref=_l(j,null,b),v.return=j,v;case oa:return b=Af(b,j.mode,v),b.return=j,b;case $r:var h=b._init;return p(j,h(b._payload),v)}if(Ul(b)||bl(b))return b=cs(b,j.mode,v,null),b.return=j,b;Bd(j,b)}return null}function f(j,b,v,h){var x=b!==null?b.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return x!==null?null:l(j,b,""+v,h);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ed:return v.key===x?c(j,b,v,h):null;case oa:return v.key===x?d(j,b,v,h):null;case $r:return x=v._init,f(j,b,x(v._payload),h)}if(Ul(v)||bl(v))return x!==null?null:u(j,b,v,h,null);Bd(j,v)}return null}function g(j,b,v,h,x){if(typeof h=="string"&&h!==""||typeof h=="number")return j=j.get(v)||null,l(b,j,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ed:return j=j.get(h.key===null?v:h.key)||null,c(b,j,h,x);case oa:return j=j.get(h.key===null?v:h.key)||null,d(b,j,h,x);case $r:var k=h._init;return g(j,b,v,k(h._payload),x)}if(Ul(h)||bl(h))return j=j.get(v)||null,u(b,j,h,x,null);Bd(b,h)}return null}function y(j,b,v,h){for(var x=null,k=null,S=b,_=b=0,C=null;S!==null&&_<v.length;_++){S.index>_?(C=S,S=null):C=S.sibling;var E=f(j,S,v[_],h);if(E===null){S===null&&(S=C);break}t&&S&&E.alternate===null&&e(j,S),b=o(E,b,_),k===null?x=E:k.sibling=E,k=E,S=C}if(_===v.length)return i(j,S),Re&&Uo(j,_),x;if(S===null){for(;_<v.length;_++)S=p(j,v[_],h),S!==null&&(b=o(S,b,_),k===null?x=S:k.sibling=S,k=S);return Re&&Uo(j,_),x}for(S=n(j,S);_<v.length;_++)C=g(S,j,_,v[_],h),C!==null&&(t&&C.alternate!==null&&S.delete(C.key===null?_:C.key),b=o(C,b,_),k===null?x=C:k.sibling=C,k=C);return t&&S.forEach(function(z){return e(j,z)}),Re&&Uo(j,_),x}function w(j,b,v,h){var x=bl(v);if(typeof x!="function")throw Error(B(150));if(v=x.call(v),v==null)throw Error(B(151));for(var k=x=null,S=b,_=b=0,C=null,E=v.next();S!==null&&!E.done;_++,E=v.next()){S.index>_?(C=S,S=null):C=S.sibling;var z=f(j,S,E.value,h);if(z===null){S===null&&(S=C);break}t&&S&&z.alternate===null&&e(j,S),b=o(z,b,_),k===null?x=z:k.sibling=z,k=z,S=C}if(E.done)return i(j,S),Re&&Uo(j,_),x;if(S===null){for(;!E.done;_++,E=v.next())E=p(j,E.value,h),E!==null&&(b=o(E,b,_),k===null?x=E:k.sibling=E,k=E);return Re&&Uo(j,_),x}for(S=n(j,S);!E.done;_++,E=v.next())E=g(S,j,_,E.value,h),E!==null&&(t&&E.alternate!==null&&S.delete(E.key===null?_:E.key),b=o(E,b,_),k===null?x=E:k.sibling=E,k=E);return t&&S.forEach(function(A){return e(j,A)}),Re&&Uo(j,_),x}function D(j,b,v,h){if(typeof v=="object"&&v!==null&&v.type===sa&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ed:e:{for(var x=v.key,k=b;k!==null;){if(k.key===x){if(x=v.type,x===sa){if(k.tag===7){i(j,k.sibling),b=r(k,v.props.children),b.return=j,j=b;break e}}else if(k.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===$r&&Qw(x)===k.type){i(j,k.sibling),b=r(k,v.props),b.ref=_l(j,k,v),b.return=j,j=b;break e}i(j,k);break}else e(j,k);k=k.sibling}v.type===sa?(b=cs(v.props.children,j.mode,h,v.key),b.return=j,j=b):(h=Qu(v.type,v.key,v.props,null,j.mode,h),h.ref=_l(j,b,v),h.return=j,j=h)}return s(j);case oa:e:{for(k=v.key;b!==null;){if(b.key===k)if(b.tag===4&&b.stateNode.containerInfo===v.containerInfo&&b.stateNode.implementation===v.implementation){i(j,b.sibling),b=r(b,v.children||[]),b.return=j,j=b;break e}else{i(j,b);break}else e(j,b);b=b.sibling}b=Af(v,j.mode,h),b.return=j,j=b}return s(j);case $r:return k=v._init,D(j,b,k(v._payload),h)}if(Ul(v))return y(j,b,v,h);if(bl(v))return w(j,b,v,h);Bd(j,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,b!==null&&b.tag===6?(i(j,b.sibling),b=r(b,v),b.return=j,j=b):(i(j,b),b=If(v,j.mode,h),b.return=j,j=b),s(j)):i(j,b)}return D}var Ua=rj(!0),oj=rj(!1),Ah=Do(null),Mh=null,fa=null,Tx=null;function Ex(){Tx=fa=Mh=null}function Ix(t){var e=Ah.current;Me(Ah),t._currentValue=e}function Em(t,e,i){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,n!==null&&(n.childLanes|=e)):n!==null&&(n.childLanes&e)!==e&&(n.childLanes|=e),t===i)break;t=t.return}}function Ea(t,e){Mh=t,Tx=fa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pi=!0),t.firstContext=null)}function sn(t){var e=t._currentValue;if(Tx!==t)if(t={context:t,memoizedValue:e,next:null},fa===null){if(Mh===null)throw Error(B(308));fa=t,Mh.dependencies={lanes:0,firstContext:t}}else fa=fa.next=t;return e}var es=null;function Ax(t){es===null?es=[t]:es.push(t)}function sj(t,e,i,n){var r=e.interleaved;return r===null?(i.next=i,Ax(e)):(i.next=r.next,r.next=i),e.interleaved=i,br(t,n)}function br(t,e){t.lanes|=e;var i=t.alternate;for(i!==null&&(i.lanes|=e),i=t,t=t.return;t!==null;)t.childLanes|=e,i=t.alternate,i!==null&&(i.childLanes|=e),i=t,t=t.return;return i.tag===3?i.stateNode:null}var Br=!1;function Mx(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function aj(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function no(t,e,i){var n=t.updateQueue;if(n===null)return null;if(n=n.shared,xe&2){var r=n.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),n.pending=e,br(t,i)}return r=n.interleaved,r===null?(e.next=e,Ax(n)):(e.next=r.next,r.next=e),n.interleaved=e,br(t,i)}function Hu(t,e,i){if(e=e.updateQueue,e!==null&&(e=e.shared,(i&4194240)!==0)){var n=e.lanes;n&=t.pendingLanes,i|=n,e.lanes=i,wx(t,i)}}function Kw(t,e){var i=t.updateQueue,n=t.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var r=null,o=null;if(i=i.firstBaseUpdate,i!==null){do{var s={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};o===null?r=o=s:o=o.next=s,i=i.next}while(i!==null);o===null?r=o=e:o=o.next=e}else r=o=e;i={baseState:n.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:n.shared,effects:n.effects},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=e:t.next=e,i.lastBaseUpdate=e}function zh(t,e,i,n){var r=t.updateQueue;Br=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,d=c.next;c.next=null,s===null?o=d:s.next=d,s=c;var u=t.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==s&&(l===null?u.firstBaseUpdate=d:l.next=d,u.lastBaseUpdate=c))}if(o!==null){var p=r.baseState;s=0,u=d=c=null,l=o;do{var f=l.lane,g=l.eventTime;if((n&f)===f){u!==null&&(u=u.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,w=l;switch(f=e,g=i,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(g,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,f=typeof y=="function"?y.call(g,p,f):y,f==null)break e;p=He({},p,f);break e;case 2:Br=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(d=u=g,c=p):u=u.next=g,s|=f;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;f=l,l=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(1);if(u===null&&(c=p),r.baseState=c,r.firstBaseUpdate=d,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);ks|=s,t.lanes=s,t.memoizedState=p}}function Jw(t,e,i){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var n=t[e],r=n.callback;if(r!==null){if(n.callback=null,n=i,typeof r!="function")throw Error(B(191,r));r.call(n)}}}var gd={},Wn=Do(gd),Hc=Do(gd),Yc=Do(gd);function ts(t){if(t===gd)throw Error(B(174));return t}function zx(t,e){switch(Ee(Yc,e),Ee(Hc,t),Ee(Wn,gd),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=dm(e,t)}Me(Wn),Ee(Wn,e)}function Ha(){Me(Wn),Me(Hc),Me(Yc)}function lj(t){ts(Yc.current);var e=ts(Wn.current),i=dm(e,t.type);e!==i&&(Ee(Hc,t),Ee(Wn,i))}function Fx(t){Hc.current===t&&(Me(Wn),Me(Hc))}var $e=Do(0);function Fh(t){for(var e=t;e!==null;){if(e.tag===13){var i=e.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Df=[];function Rx(){for(var t=0;t<Df.length;t++)Df[t]._workInProgressVersionPrimary=null;Df.length=0}var Yu=Dr.ReactCurrentDispatcher,_f=Dr.ReactCurrentBatchConfig,bs=0,Ue=null,gt=null,jt=null,Rh=!1,lc=!1,Gc=0,xC=0;function $t(){throw Error(B(321))}function Lx(t,e){if(e===null)return!1;for(var i=0;i<e.length&&i<t.length;i++)if(!_n(t[i],e[i]))return!1;return!0}function Nx(t,e,i,n,r,o){if(bs=o,Ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yu.current=t===null||t.memoizedState===null?bC:kC,t=i(n,r),lc){o=0;do{if(lc=!1,Gc=0,25<=o)throw Error(B(301));o+=1,jt=gt=null,e.updateQueue=null,Yu.current=jC,t=i(n,r)}while(lc)}if(Yu.current=Lh,e=gt!==null&&gt.next!==null,bs=0,jt=gt=Ue=null,Rh=!1,e)throw Error(B(300));return t}function Ox(){var t=Gc!==0;return Gc=0,t}function An(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Ue.memoizedState=jt=t:jt=jt.next=t,jt}function an(){if(gt===null){var t=Ue.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=jt===null?Ue.memoizedState:jt.next;if(e!==null)jt=e,gt=t;else{if(t===null)throw Error(B(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},jt===null?Ue.memoizedState=jt=t:jt=jt.next=t}return jt}function Xc(t,e){return typeof e=="function"?e(t):e}function Cf(t){var e=an(),i=e.queue;if(i===null)throw Error(B(311));i.lastRenderedReducer=t;var n=gt,r=n.baseQueue,o=i.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}n.baseQueue=r=o,i.pending=null}if(r!==null){o=r.next,n=n.baseState;var l=s=null,c=null,d=o;do{var u=d.lane;if((bs&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:t(n,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=p,s=n):c=c.next=p,Ue.lanes|=u,ks|=u}d=d.next}while(d!==null&&d!==o);c===null?s=n:c.next=l,_n(n,e.memoizedState)||(pi=!0),e.memoizedState=n,e.baseState=s,e.baseQueue=c,i.lastRenderedState=n}if(t=i.interleaved,t!==null){r=t;do o=r.lane,Ue.lanes|=o,ks|=o,r=r.next;while(r!==t)}else r===null&&(i.lanes=0);return[e.memoizedState,i.dispatch]}function Pf(t){var e=an(),i=e.queue;if(i===null)throw Error(B(311));i.lastRenderedReducer=t;var n=i.dispatch,r=i.pending,o=e.memoizedState;if(r!==null){i.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);_n(o,e.memoizedState)||(pi=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),i.lastRenderedState=o}return[o,n]}function cj(){}function dj(t,e){var i=Ue,n=an(),r=e(),o=!_n(n.memoizedState,r);if(o&&(n.memoizedState=r,pi=!0),n=n.queue,$x(pj.bind(null,i,n,t),[t]),n.getSnapshot!==e||o||jt!==null&&jt.memoizedState.tag&1){if(i.flags|=2048,Zc(9,hj.bind(null,i,n,r,e),void 0,null),_t===null)throw Error(B(349));bs&30||uj(i,e,r)}return r}function uj(t,e,i){t.flags|=16384,t={getSnapshot:e,value:i},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.stores=[t]):(i=e.stores,i===null?e.stores=[t]:i.push(t))}function hj(t,e,i,n){e.value=i,e.getSnapshot=n,fj(e)&&mj(t)}function pj(t,e,i){return i(function(){fj(e)&&mj(t)})}function fj(t){var e=t.getSnapshot;t=t.value;try{var i=e();return!_n(t,i)}catch{return!0}}function mj(t){var e=br(t,1);e!==null&&Sn(e,t,1,-1)}function ev(t){var e=An();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xc,lastRenderedState:t},e.queue=t,t=t.dispatch=yC.bind(null,Ue,t),[e.memoizedState,t]}function Zc(t,e,i,n){return t={tag:t,create:e,destroy:i,deps:n,next:null},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.lastEffect=t.next=t):(i=e.lastEffect,i===null?e.lastEffect=t.next=t:(n=i.next,i.next=t,t.next=n,e.lastEffect=t)),t}function gj(){return an().memoizedState}function Gu(t,e,i,n){var r=An();Ue.flags|=t,r.memoizedState=Zc(1|e,i,void 0,n===void 0?null:n)}function Pp(t,e,i,n){var r=an();n=n===void 0?null:n;var o=void 0;if(gt!==null){var s=gt.memoizedState;if(o=s.destroy,n!==null&&Lx(n,s.deps)){r.memoizedState=Zc(e,i,o,n);return}}Ue.flags|=t,r.memoizedState=Zc(1|e,i,o,n)}function tv(t,e){return Gu(8390656,8,t,e)}function $x(t,e){return Pp(2048,8,t,e)}function xj(t,e){return Pp(4,2,t,e)}function wj(t,e){return Pp(4,4,t,e)}function vj(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yj(t,e,i){return i=i!=null?i.concat([t]):null,Pp(4,4,vj.bind(null,e,t),i)}function Bx(){}function bj(t,e){var i=an();e=e===void 0?null:e;var n=i.memoizedState;return n!==null&&e!==null&&Lx(e,n[1])?n[0]:(i.memoizedState=[t,e],t)}function kj(t,e){var i=an();e=e===void 0?null:e;var n=i.memoizedState;return n!==null&&e!==null&&Lx(e,n[1])?n[0]:(t=t(),i.memoizedState=[t,e],t)}function jj(t,e,i){return bs&21?(_n(i,e)||(i=Pk(),Ue.lanes|=i,ks|=i,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pi=!0),t.memoizedState=i)}function wC(t,e){var i=je;je=i!==0&&4>i?i:4,t(!0);var n=_f.transition;_f.transition={};try{t(!1),e()}finally{je=i,_f.transition=n}}function Sj(){return an().memoizedState}function vC(t,e,i){var n=oo(t);if(i={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null},Dj(t))_j(e,i);else if(i=sj(t,e,i,n),i!==null){var r=si();Sn(i,t,n,r),Cj(i,e,n)}}function yC(t,e,i){var n=oo(t),r={lane:n,action:i,hasEagerState:!1,eagerState:null,next:null};if(Dj(t))_j(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,i);if(r.hasEagerState=!0,r.eagerState=l,_n(l,s)){var c=e.interleaved;c===null?(r.next=r,Ax(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}i=sj(t,e,r,n),i!==null&&(r=si(),Sn(i,t,n,r),Cj(i,e,n))}}function Dj(t){var e=t.alternate;return t===Ue||e!==null&&e===Ue}function _j(t,e){lc=Rh=!0;var i=t.pending;i===null?e.next=e:(e.next=i.next,i.next=e),t.pending=e}function Cj(t,e,i){if(i&4194240){var n=e.lanes;n&=t.pendingLanes,i|=n,e.lanes=i,wx(t,i)}}var Lh={readContext:sn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},bC={readContext:sn,useCallback:function(t,e){return An().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:tv,useImperativeHandle:function(t,e,i){return i=i!=null?i.concat([t]):null,Gu(4194308,4,vj.bind(null,e,t),i)},useLayoutEffect:function(t,e){return Gu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gu(4,2,t,e)},useMemo:function(t,e){var i=An();return e=e===void 0?null:e,t=t(),i.memoizedState=[t,e],t},useReducer:function(t,e,i){var n=An();return e=i!==void 0?i(e):e,n.memoizedState=n.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},n.queue=t,t=t.dispatch=vC.bind(null,Ue,t),[n.memoizedState,t]},useRef:function(t){var e=An();return t={current:t},e.memoizedState=t},useState:ev,useDebugValue:Bx,useDeferredValue:function(t){return An().memoizedState=t},useTransition:function(){var t=ev(!1),e=t[0];return t=wC.bind(null,t[1]),An().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,i){var n=Ue,r=An();if(Re){if(i===void 0)throw Error(B(407));i=i()}else{if(i=e(),_t===null)throw Error(B(349));bs&30||uj(n,e,i)}r.memoizedState=i;var o={value:i,getSnapshot:e};return r.queue=o,tv(pj.bind(null,n,o,t),[t]),n.flags|=2048,Zc(9,hj.bind(null,n,o,i,e),void 0,null),i},useId:function(){var t=An(),e=_t.identifierPrefix;if(Re){var i=hr,n=ur;i=(n&~(1<<32-jn(n)-1)).toString(32)+i,e=":"+e+"R"+i,i=Gc++,0<i&&(e+="H"+i.toString(32)),e+=":"}else i=xC++,e=":"+e+"r"+i.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kC={readContext:sn,useCallback:bj,useContext:sn,useEffect:$x,useImperativeHandle:yj,useInsertionEffect:xj,useLayoutEffect:wj,useMemo:kj,useReducer:Cf,useRef:gj,useState:function(){return Cf(Xc)},useDebugValue:Bx,useDeferredValue:function(t){var e=an();return jj(e,gt.memoizedState,t)},useTransition:function(){var t=Cf(Xc)[0],e=an().memoizedState;return[t,e]},useMutableSource:cj,useSyncExternalStore:dj,useId:Sj,unstable_isNewReconciler:!1},jC={readContext:sn,useCallback:bj,useContext:sn,useEffect:$x,useImperativeHandle:yj,useInsertionEffect:xj,useLayoutEffect:wj,useMemo:kj,useReducer:Pf,useRef:gj,useState:function(){return Pf(Xc)},useDebugValue:Bx,useDeferredValue:function(t){var e=an();return gt===null?e.memoizedState=t:jj(e,gt.memoizedState,t)},useTransition:function(){var t=Pf(Xc)[0],e=an().memoizedState;return[t,e]},useMutableSource:cj,useSyncExternalStore:dj,useId:Sj,unstable_isNewReconciler:!1};function xn(t,e){if(t&&t.defaultProps){e=He({},e),t=t.defaultProps;for(var i in t)e[i]===void 0&&(e[i]=t[i]);return e}return e}function Im(t,e,i,n){e=t.memoizedState,i=i(n,e),i=i==null?e:He({},e,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var Tp={isMounted:function(t){return(t=t._reactInternals)?Is(t)===t:!1},enqueueSetState:function(t,e,i){t=t._reactInternals;var n=si(),r=oo(t),o=mr(n,r);o.payload=e,i!=null&&(o.callback=i),e=no(t,o,r),e!==null&&(Sn(e,t,r,n),Hu(e,t,r))},enqueueReplaceState:function(t,e,i){t=t._reactInternals;var n=si(),r=oo(t),o=mr(n,r);o.tag=1,o.payload=e,i!=null&&(o.callback=i),e=no(t,o,r),e!==null&&(Sn(e,t,r,n),Hu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var i=si(),n=oo(t),r=mr(i,n);r.tag=2,e!=null&&(r.callback=e),e=no(t,r,n),e!==null&&(Sn(e,t,n,i),Hu(e,t,n))}};function iv(t,e,i,n,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(n,o,s):e.prototype&&e.prototype.isPureReactComponent?!Bc(i,n)||!Bc(r,o):!0}function Pj(t,e,i){var n=!1,r=wo,o=e.contextType;return typeof o=="object"&&o!==null?o=sn(o):(r=mi(e)?vs:Xt.current,n=e.contextTypes,o=(n=n!=null)?Va(t,r):wo),e=new e(i,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tp,t.stateNode=e,e._reactInternals=t,n&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function nv(t,e,i,n){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(i,n),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(i,n),e.state!==t&&Tp.enqueueReplaceState(e,e.state,null)}function Am(t,e,i,n){var r=t.stateNode;r.props=i,r.state=t.memoizedState,r.refs={},Mx(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=sn(o):(o=mi(e)?vs:Xt.current,r.context=Va(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Im(t,e,o,i),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Tp.enqueueReplaceState(r,r.state,null),zh(t,i,r,n),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ya(t,e){try{var i="",n=e;do i+=Q4(n),n=n.return;while(n);var r=i}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Tf(t,e,i){return{value:t,source:null,stack:i??null,digest:e??null}}function Mm(t,e){try{console.error(e.value)}catch(i){setTimeout(function(){throw i})}}var SC=typeof WeakMap=="function"?WeakMap:Map;function Tj(t,e,i){i=mr(-1,i),i.tag=3,i.payload={element:null};var n=e.value;return i.callback=function(){Oh||(Oh=!0,Wm=n),Mm(t,e)},i}function Ej(t,e,i){i=mr(-1,i),i.tag=3;var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var r=e.value;i.payload=function(){return n(r)},i.callback=function(){Mm(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(i.callback=function(){Mm(t,e),typeof n!="function"&&(ro===null?ro=new Set([this]):ro.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),i}function rv(t,e,i){var n=t.pingCache;if(n===null){n=t.pingCache=new SC;var r=new Set;n.set(e,r)}else r=n.get(e),r===void 0&&(r=new Set,n.set(e,r));r.has(i)||(r.add(i),t=NC.bind(null,t,e,i),e.then(t,t))}function ov(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sv(t,e,i,n,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(e=mr(-1,1),e.tag=2,no(i,e,1))),i.lanes|=1),t)}var DC=Dr.ReactCurrentOwner,pi=!1;function ti(t,e,i,n){e.child=t===null?oj(e,null,i,n):Ua(e,t.child,i,n)}function av(t,e,i,n,r){i=i.render;var o=e.ref;return Ea(e,r),n=Nx(t,e,i,n,o,r),i=Ox(),t!==null&&!pi?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,kr(t,e,r)):(Re&&i&&_x(e),e.flags|=1,ti(t,e,n,r),e.child)}function lv(t,e,i,n,r){if(t===null){var o=i.type;return typeof o=="function"&&!Zx(o)&&o.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(e.tag=15,e.type=o,Ij(t,e,o,n,r)):(t=Qu(i.type,null,n,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(i=i.compare,i=i!==null?i:Bc,i(s,n)&&t.ref===e.ref)return kr(t,e,r)}return e.flags|=1,t=so(o,n),t.ref=e.ref,t.return=e,e.child=t}function Ij(t,e,i,n,r){if(t!==null){var o=t.memoizedProps;if(Bc(o,n)&&t.ref===e.ref)if(pi=!1,e.pendingProps=n=o,(t.lanes&r)!==0)t.flags&131072&&(pi=!0);else return e.lanes=t.lanes,kr(t,e,r)}return zm(t,e,i,n,r)}function Aj(t,e,i){var n=e.pendingProps,r=n.children,o=t!==null?t.memoizedState:null;if(n.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ee(ga,Ci),Ci|=i;else{if(!(i&1073741824))return t=o!==null?o.baseLanes|i:i,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ee(ga,Ci),Ci|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:i,Ee(ga,Ci),Ci|=n}else o!==null?(n=o.baseLanes|i,e.memoizedState=null):n=i,Ee(ga,Ci),Ci|=n;return ti(t,e,r,i),e.child}function Mj(t,e){var i=e.ref;(t===null&&i!==null||t!==null&&t.ref!==i)&&(e.flags|=512,e.flags|=2097152)}function zm(t,e,i,n,r){var o=mi(i)?vs:Xt.current;return o=Va(e,o),Ea(e,r),i=Nx(t,e,i,n,o,r),n=Ox(),t!==null&&!pi?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,kr(t,e,r)):(Re&&n&&_x(e),e.flags|=1,ti(t,e,i,r),e.child)}function cv(t,e,i,n,r){if(mi(i)){var o=!0;Th(e)}else o=!1;if(Ea(e,r),e.stateNode===null)Xu(t,e),Pj(e,i,n),Am(e,i,n,r),n=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var c=s.context,d=i.contextType;typeof d=="object"&&d!==null?d=sn(d):(d=mi(i)?vs:Xt.current,d=Va(e,d));var u=i.getDerivedStateFromProps,p=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==n||c!==d)&&nv(e,s,n,d),Br=!1;var f=e.memoizedState;s.state=f,zh(e,n,s,r),c=e.memoizedState,l!==n||f!==c||fi.current||Br?(typeof u=="function"&&(Im(e,i,u,n),c=e.memoizedState),(l=Br||iv(e,i,l,n,f,c,d))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=n,e.memoizedState=c),s.props=n,s.state=c,s.context=d,n=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),n=!1)}else{s=e.stateNode,aj(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:xn(e.type,l),s.props=d,p=e.pendingProps,f=s.context,c=i.contextType,typeof c=="object"&&c!==null?c=sn(c):(c=mi(i)?vs:Xt.current,c=Va(e,c));var g=i.getDerivedStateFromProps;(u=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||f!==c)&&nv(e,s,n,c),Br=!1,f=e.memoizedState,s.state=f,zh(e,n,s,r);var y=e.memoizedState;l!==p||f!==y||fi.current||Br?(typeof g=="function"&&(Im(e,i,g,n),y=e.memoizedState),(d=Br||iv(e,i,d,n,f,y,c)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,y,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,y,c)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=n,e.memoizedState=y),s.props=n,s.state=y,s.context=c,n=d):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),n=!1)}return Fm(t,e,i,n,o,r)}function Fm(t,e,i,n,r,o){Mj(t,e);var s=(e.flags&128)!==0;if(!n&&!s)return r&&Xw(e,i,!1),kr(t,e,o);n=e.stateNode,DC.current=e;var l=s&&typeof i.getDerivedStateFromError!="function"?null:n.render();return e.flags|=1,t!==null&&s?(e.child=Ua(e,t.child,null,o),e.child=Ua(e,null,l,o)):ti(t,e,l,o),e.memoizedState=n.state,r&&Xw(e,i,!0),e.child}function zj(t){var e=t.stateNode;e.pendingContext?Gw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Gw(t,e.context,!1),zx(t,e.containerInfo)}function dv(t,e,i,n,r){return Wa(),Px(r),e.flags|=256,ti(t,e,i,n),e.child}var Rm={dehydrated:null,treeContext:null,retryLane:0};function Lm(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fj(t,e,i){var n=e.pendingProps,r=$e.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ee($e,r&1),t===null)return Tm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=n.children,t=n.fallback,o?(n=e.mode,o=e.child,s={mode:"hidden",children:s},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ap(s,n,0,null),t=cs(t,n,i,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Lm(i),e.memoizedState=Rm,t):Vx(e,s));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return _C(t,e,s,n,l,r,i);if(o){o=n.fallback,s=e.mode,r=t.child,l=r.sibling;var c={mode:"hidden",children:n.children};return!(s&1)&&e.child!==r?(n=e.child,n.childLanes=0,n.pendingProps=c,e.deletions=null):(n=so(r,c),n.subtreeFlags=r.subtreeFlags&14680064),l!==null?o=so(l,o):(o=cs(o,s,i,null),o.flags|=2),o.return=e,n.return=e,n.sibling=o,e.child=n,n=o,o=e.child,s=t.child.memoizedState,s=s===null?Lm(i):{baseLanes:s.baseLanes|i,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~i,e.memoizedState=Rm,n}return o=t.child,t=o.sibling,n=so(o,{mode:"visible",children:n.children}),!(e.mode&1)&&(n.lanes=i),n.return=e,n.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=n,e.memoizedState=null,n}function Vx(t,e){return e=Ap({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Vd(t,e,i,n){return n!==null&&Px(n),Ua(e,t.child,null,i),t=Vx(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _C(t,e,i,n,r,o,s){if(i)return e.flags&256?(e.flags&=-257,n=Tf(Error(B(422))),Vd(t,e,s,n)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=n.fallback,r=e.mode,n=Ap({mode:"visible",children:n.children},r,0,null),o=cs(o,r,s,null),o.flags|=2,n.return=e,o.return=e,n.sibling=o,e.child=n,e.mode&1&&Ua(e,t.child,null,s),e.child.memoizedState=Lm(s),e.memoizedState=Rm,o);if(!(e.mode&1))return Vd(t,e,s,null);if(r.data==="$!"){if(n=r.nextSibling&&r.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(B(419)),n=Tf(o,n,void 0),Vd(t,e,s,n)}if(l=(s&t.childLanes)!==0,pi||l){if(n=_t,n!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(n.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,br(t,r),Sn(n,t,r,-1))}return Xx(),n=Tf(Error(B(421))),Vd(t,e,s,n)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=OC.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Mi=io(r.nextSibling),Fi=e,Re=!0,vn=null,t!==null&&(Zi[qi++]=ur,Zi[qi++]=hr,Zi[qi++]=ys,ur=t.id,hr=t.overflow,ys=e),e=Vx(e,n.children),e.flags|=4096,e)}function uv(t,e,i){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Em(t.return,e,i)}function Ef(t,e,i,n,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=i,o.tailMode=r)}function Rj(t,e,i){var n=e.pendingProps,r=n.revealOrder,o=n.tail;if(ti(t,e,n.children,i),n=$e.current,n&2)n=n&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&uv(t,i,e);else if(t.tag===19)uv(t,i,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}n&=1}if(Ee($e,n),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(i=e.child,r=null;i!==null;)t=i.alternate,t!==null&&Fh(t)===null&&(r=i),i=i.sibling;i=r,i===null?(r=e.child,e.child=null):(r=i.sibling,i.sibling=null),Ef(e,!1,r,i,o);break;case"backwards":for(i=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Fh(t)===null){e.child=r;break}t=r.sibling,r.sibling=i,i=r,r=t}Ef(e,!0,i,null,o);break;case"together":Ef(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kr(t,e,i){if(t!==null&&(e.dependencies=t.dependencies),ks|=e.lanes,!(i&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,i=so(t,t.pendingProps),e.child=i,i.return=e;t.sibling!==null;)t=t.sibling,i=i.sibling=so(t,t.pendingProps),i.return=e;i.sibling=null}return e.child}function CC(t,e,i){switch(e.tag){case 3:zj(e),Wa();break;case 5:lj(e);break;case 1:mi(e.type)&&Th(e);break;case 4:zx(e,e.stateNode.containerInfo);break;case 10:var n=e.type._context,r=e.memoizedProps.value;Ee(Ah,n._currentValue),n._currentValue=r;break;case 13:if(n=e.memoizedState,n!==null)return n.dehydrated!==null?(Ee($e,$e.current&1),e.flags|=128,null):i&e.child.childLanes?Fj(t,e,i):(Ee($e,$e.current&1),t=kr(t,e,i),t!==null?t.sibling:null);Ee($e,$e.current&1);break;case 19:if(n=(i&e.childLanes)!==0,t.flags&128){if(n)return Rj(t,e,i);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ee($e,$e.current),n)break;return null;case 22:case 23:return e.lanes=0,Aj(t,e,i)}return kr(t,e,i)}var Lj,Nm,Nj,Oj;Lj=function(t,e){for(var i=e.child;i!==null;){if(i.tag===5||i.tag===6)t.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};Nm=function(){};Nj=function(t,e,i,n){var r=t.memoizedProps;if(r!==n){t=e.stateNode,ts(Wn.current);var o=null;switch(i){case"input":r=sm(t,r),n=sm(t,n),o=[];break;case"select":r=He({},r,{value:void 0}),n=He({},n,{value:void 0}),o=[];break;case"textarea":r=cm(t,r),n=cm(t,n),o=[];break;default:typeof r.onClick!="function"&&typeof n.onClick=="function"&&(t.onclick=Ch)}um(i,n);var s;i=null;for(d in r)if(!n.hasOwnProperty(d)&&r.hasOwnProperty(d)&&r[d]!=null)if(d==="style"){var l=r[d];for(s in l)l.hasOwnProperty(s)&&(i||(i={}),i[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(zc.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in n){var c=n[d];if(l=r!=null?r[d]:void 0,n.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(i||(i={}),i[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(i||(i={}),i[s]=c[s])}else i||(o||(o=[]),o.push(d,i)),i=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(zc.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Ie("scroll",t),o||l===c||(o=[])):(o=o||[]).push(d,c))}i&&(o=o||[]).push("style",i);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};Oj=function(t,e,i,n){i!==n&&(e.flags|=4)};function Cl(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var i=null;e!==null;)e.alternate!==null&&(i=e),e=e.sibling;i===null?t.tail=null:i.sibling=null;break;case"collapsed":i=t.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:n.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,i=0,n=0;if(e)for(var r=t.child;r!==null;)i|=r.lanes|r.childLanes,n|=r.subtreeFlags&14680064,n|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)i|=r.lanes|r.childLanes,n|=r.subtreeFlags,n|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=n,t.childLanes=i,e}function PC(t,e,i){var n=e.pendingProps;switch(Cx(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return mi(e.type)&&Ph(),Bt(e),null;case 3:return n=e.stateNode,Ha(),Me(fi),Me(Xt),Rx(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&($d(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vn!==null&&(Ym(vn),vn=null))),Nm(t,e),Bt(e),null;case 5:Fx(e);var r=ts(Yc.current);if(i=e.type,t!==null&&e.stateNode!=null)Nj(t,e,i,n,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!n){if(e.stateNode===null)throw Error(B(166));return Bt(e),null}if(t=ts(Wn.current),$d(e)){n=e.stateNode,i=e.type;var o=e.memoizedProps;switch(n[Nn]=e,n[Uc]=o,t=(e.mode&1)!==0,i){case"dialog":Ie("cancel",n),Ie("close",n);break;case"iframe":case"object":case"embed":Ie("load",n);break;case"video":case"audio":for(r=0;r<Yl.length;r++)Ie(Yl[r],n);break;case"source":Ie("error",n);break;case"img":case"image":case"link":Ie("error",n),Ie("load",n);break;case"details":Ie("toggle",n);break;case"input":yw(n,o),Ie("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Ie("invalid",n);break;case"textarea":kw(n,o),Ie("invalid",n)}um(i,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&Od(n.textContent,l,t),r=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Od(n.textContent,l,t),r=["children",""+l]):zc.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Ie("scroll",n)}switch(i){case"input":Id(n),bw(n,o,!0);break;case"textarea":Id(n),jw(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=Ch)}n=r,e.updateQueue=n,n!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pk(i)),t==="http://www.w3.org/1999/xhtml"?i==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof n.is=="string"?t=s.createElement(i,{is:n.is}):(t=s.createElement(i),i==="select"&&(s=t,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):t=s.createElementNS(t,i),t[Nn]=e,t[Uc]=n,Lj(t,e,!1,!1),e.stateNode=t;e:{switch(s=hm(i,n),i){case"dialog":Ie("cancel",t),Ie("close",t),r=n;break;case"iframe":case"object":case"embed":Ie("load",t),r=n;break;case"video":case"audio":for(r=0;r<Yl.length;r++)Ie(Yl[r],t);r=n;break;case"source":Ie("error",t),r=n;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),r=n;break;case"details":Ie("toggle",t),r=n;break;case"input":yw(t,n),r=sm(t,n),Ie("invalid",t);break;case"option":r=n;break;case"select":t._wrapperState={wasMultiple:!!n.multiple},r=He({},n,{value:void 0}),Ie("invalid",t);break;case"textarea":kw(t,n),r=cm(t,n),Ie("invalid",t);break;default:r=n}um(i,r),l=r;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?gk(t,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&fk(t,c)):o==="children"?typeof c=="string"?(i!=="textarea"||c!=="")&&Fc(t,c):typeof c=="number"&&Fc(t,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zc.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Ie("scroll",t):c!=null&&hx(t,o,c,s))}switch(i){case"input":Id(t),bw(t,n,!1);break;case"textarea":Id(t),jw(t);break;case"option":n.value!=null&&t.setAttribute("value",""+xo(n.value));break;case"select":t.multiple=!!n.multiple,o=n.value,o!=null?_a(t,!!n.multiple,o,!1):n.defaultValue!=null&&_a(t,!!n.multiple,n.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ch)}switch(i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)Oj(t,e,t.memoizedProps,n);else{if(typeof n!="string"&&e.stateNode===null)throw Error(B(166));if(i=ts(Yc.current),ts(Wn.current),$d(e)){if(n=e.stateNode,i=e.memoizedProps,n[Nn]=e,(o=n.nodeValue!==i)&&(t=Fi,t!==null))switch(t.tag){case 3:Od(n.nodeValue,i,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Od(n.nodeValue,i,(t.mode&1)!==0)}o&&(e.flags|=4)}else n=(i.nodeType===9?i:i.ownerDocument).createTextNode(n),n[Nn]=e,e.stateNode=n}return Bt(e),null;case 13:if(Me($e),n=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Mi!==null&&e.mode&1&&!(e.flags&128))nj(),Wa(),e.flags|=98560,o=!1;else if(o=$d(e),n!==null&&n.dehydrated!==null){if(t===null){if(!o)throw Error(B(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(B(317));o[Nn]=e}else Wa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),o=!1}else vn!==null&&(Ym(vn),vn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=i,e):(n=n!==null,n!==(t!==null&&t.memoizedState!==null)&&n&&(e.child.flags|=8192,e.mode&1&&(t===null||$e.current&1?wt===0&&(wt=3):Xx())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Ha(),Nm(t,e),t===null&&Vc(e.stateNode.containerInfo),Bt(e),null;case 10:return Ix(e.type._context),Bt(e),null;case 17:return mi(e.type)&&Ph(),Bt(e),null;case 19:if(Me($e),o=e.memoizedState,o===null)return Bt(e),null;if(n=(e.flags&128)!==0,s=o.rendering,s===null)if(n)Cl(o,!1);else{if(wt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Fh(t),s!==null){for(e.flags|=128,Cl(o,!1),n=s.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),e.subtreeFlags=0,n=i,i=e.child;i!==null;)o=i,t=n,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i=i.sibling;return Ee($e,$e.current&1|2),e.child}t=t.sibling}o.tail!==null&&it()>Ga&&(e.flags|=128,n=!0,Cl(o,!1),e.lanes=4194304)}else{if(!n)if(t=Fh(s),t!==null){if(e.flags|=128,n=!0,i=t.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),Cl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Re)return Bt(e),null}else 2*it()-o.renderingStartTime>Ga&&i!==1073741824&&(e.flags|=128,n=!0,Cl(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(i=o.last,i!==null?i.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=it(),e.sibling=null,i=$e.current,Ee($e,n?i&1|2:i&1),e):(Bt(e),null);case 22:case 23:return Gx(),n=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==n&&(e.flags|=8192),n&&e.mode&1?Ci&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function TC(t,e){switch(Cx(e),e.tag){case 1:return mi(e.type)&&Ph(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ha(),Me(fi),Me(Xt),Rx(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Fx(e),null;case 13:if(Me($e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Wa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Me($e),null;case 4:return Ha(),null;case 10:return Ix(e.type._context),null;case 22:case 23:return Gx(),null;case 24:return null;default:return null}}var Wd=!1,Ut=!1,EC=typeof WeakSet=="function"?WeakSet:Set,Y=null;function ma(t,e){var i=t.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(n){Ze(t,e,n)}else i.current=null}function Om(t,e,i){try{i()}catch(n){Ze(t,e,n)}}var hv=!1;function IC(t,e){if(km=Sh,t=Uk(),Dx(t)){if("selectionStart"in t)var i={start:t.selectionStart,end:t.selectionEnd};else e:{i=(i=t.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var r=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{i.nodeType,o.nodeType}catch{i=null;break e}var s=0,l=-1,c=-1,d=0,u=0,p=t,f=null;t:for(;;){for(var g;p!==i||r!==0&&p.nodeType!==3||(l=s+r),p!==o||n!==0&&p.nodeType!==3||(c=s+n),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)f=p,p=g;for(;;){if(p===t)break t;if(f===i&&++d===r&&(l=s),f===o&&++u===n&&(c=s),(g=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=g}i=l===-1||c===-1?null:{start:l,end:c}}else i=null}i=i||{start:0,end:0}}else i=null;for(jm={focusedElem:t,selectionRange:i},Sh=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,D=y.memoizedState,j=e.stateNode,b=j.getSnapshotBeforeUpdate(e.elementType===e.type?w:xn(e.type,w),D);j.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(h){Ze(e,e.return,h)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return y=hv,hv=!1,y}function cc(t,e,i){var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Om(e,i,o)}r=r.next}while(r!==n)}}function Ep(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var i=e=e.next;do{if((i.tag&t)===t){var n=i.create;i.destroy=n()}i=i.next}while(i!==e)}}function $m(t){var e=t.ref;if(e!==null){var i=t.stateNode;switch(t.tag){case 5:t=i;break;default:t=i}typeof e=="function"?e(t):e.current=t}}function $j(t){var e=t.alternate;e!==null&&(t.alternate=null,$j(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Nn],delete e[Uc],delete e[_m],delete e[pC],delete e[fC])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Bj(t){return t.tag===5||t.tag===3||t.tag===4}function pv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Bj(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bm(t,e,i){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?i.nodeType===8?i.parentNode.insertBefore(t,e):i.insertBefore(t,e):(i.nodeType===8?(e=i.parentNode,e.insertBefore(t,i)):(e=i,e.appendChild(t)),i=i._reactRootContainer,i!=null||e.onclick!==null||(e.onclick=Ch));else if(n!==4&&(t=t.child,t!==null))for(Bm(t,e,i),t=t.sibling;t!==null;)Bm(t,e,i),t=t.sibling}function Vm(t,e,i){var n=t.tag;if(n===5||n===6)t=t.stateNode,e?i.insertBefore(t,e):i.appendChild(t);else if(n!==4&&(t=t.child,t!==null))for(Vm(t,e,i),t=t.sibling;t!==null;)Vm(t,e,i),t=t.sibling}var It=null,wn=!1;function Ar(t,e,i){for(i=i.child;i!==null;)Vj(t,e,i),i=i.sibling}function Vj(t,e,i){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(kp,i)}catch{}switch(i.tag){case 5:Ut||ma(i,e);case 6:var n=It,r=wn;It=null,Ar(t,e,i),It=n,wn=r,It!==null&&(wn?(t=It,i=i.stateNode,t.nodeType===8?t.parentNode.removeChild(i):t.removeChild(i)):It.removeChild(i.stateNode));break;case 18:It!==null&&(wn?(t=It,i=i.stateNode,t.nodeType===8?jf(t.parentNode,i):t.nodeType===1&&jf(t,i),Oc(t)):jf(It,i.stateNode));break;case 4:n=It,r=wn,It=i.stateNode.containerInfo,wn=!0,Ar(t,e,i),It=n,wn=r;break;case 0:case 11:case 14:case 15:if(!Ut&&(n=i.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){r=n=n.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Om(i,e,s),r=r.next}while(r!==n)}Ar(t,e,i);break;case 1:if(!Ut&&(ma(i,e),n=i.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=i.memoizedProps,n.state=i.memoizedState,n.componentWillUnmount()}catch(l){Ze(i,e,l)}Ar(t,e,i);break;case 21:Ar(t,e,i);break;case 22:i.mode&1?(Ut=(n=Ut)||i.memoizedState!==null,Ar(t,e,i),Ut=n):Ar(t,e,i);break;default:Ar(t,e,i)}}function fv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var i=t.stateNode;i===null&&(i=t.stateNode=new EC),e.forEach(function(n){var r=$C.bind(null,t,n);i.has(n)||(i.add(n),n.then(r,r))})}}function fn(t,e){var i=e.deletions;if(i!==null)for(var n=0;n<i.length;n++){var r=i[n];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:It=l.stateNode,wn=!1;break e;case 3:It=l.stateNode.containerInfo,wn=!0;break e;case 4:It=l.stateNode.containerInfo,wn=!0;break e}l=l.return}if(It===null)throw Error(B(160));Vj(o,s,r),It=null,wn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(d){Ze(r,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Wj(e,t),e=e.sibling}function Wj(t,e){var i=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(fn(e,t),In(t),n&4){try{cc(3,t,t.return),Ep(3,t)}catch(w){Ze(t,t.return,w)}try{cc(5,t,t.return)}catch(w){Ze(t,t.return,w)}}break;case 1:fn(e,t),In(t),n&512&&i!==null&&ma(i,i.return);break;case 5:if(fn(e,t),In(t),n&512&&i!==null&&ma(i,i.return),t.flags&32){var r=t.stateNode;try{Fc(r,"")}catch(w){Ze(t,t.return,w)}}if(n&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=i!==null?i.memoizedProps:o,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&uk(r,o),hm(l,s);var d=hm(l,o);for(s=0;s<c.length;s+=2){var u=c[s],p=c[s+1];u==="style"?gk(r,p):u==="dangerouslySetInnerHTML"?fk(r,p):u==="children"?Fc(r,p):hx(r,u,p,d)}switch(l){case"input":am(r,o);break;case"textarea":hk(r,o);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?_a(r,!!o.multiple,g,!1):f!==!!o.multiple&&(o.defaultValue!=null?_a(r,!!o.multiple,o.defaultValue,!0):_a(r,!!o.multiple,o.multiple?[]:"",!1))}r[Uc]=o}catch(w){Ze(t,t.return,w)}}break;case 6:if(fn(e,t),In(t),n&4){if(t.stateNode===null)throw Error(B(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(w){Ze(t,t.return,w)}}break;case 3:if(fn(e,t),In(t),n&4&&i!==null&&i.memoizedState.isDehydrated)try{Oc(e.containerInfo)}catch(w){Ze(t,t.return,w)}break;case 4:fn(e,t),In(t);break;case 13:fn(e,t),In(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Hx=it())),n&4&&fv(t);break;case 22:if(u=i!==null&&i.memoizedState!==null,t.mode&1?(Ut=(d=Ut)||u,fn(e,t),Ut=d):fn(e,t),In(t),n&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!u&&t.mode&1)for(Y=t,u=t.child;u!==null;){for(p=Y=u;Y!==null;){switch(f=Y,g=f.child,f.tag){case 0:case 11:case 14:case 15:cc(4,f,f.return);break;case 1:ma(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){n=f,i=f.return;try{e=n,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){Ze(n,i,w)}}break;case 5:ma(f,f.return);break;case 22:if(f.memoizedState!==null){gv(p);continue}}g!==null?(g.return=f,Y=g):gv(p)}u=u.sibling}e:for(u=null,p=t;;){if(p.tag===5){if(u===null){u=p;try{r=p.stateNode,d?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=mk("display",s))}catch(w){Ze(t,t.return,w)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(w){Ze(t,t.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:fn(e,t),In(t),n&4&&fv(t);break;case 21:break;default:fn(e,t),In(t)}}function In(t){var e=t.flags;if(e&2){try{e:{for(var i=t.return;i!==null;){if(Bj(i)){var n=i;break e}i=i.return}throw Error(B(160))}switch(n.tag){case 5:var r=n.stateNode;n.flags&32&&(Fc(r,""),n.flags&=-33);var o=pv(t);Vm(t,o,r);break;case 3:case 4:var s=n.stateNode.containerInfo,l=pv(t);Bm(t,l,s);break;default:throw Error(B(161))}}catch(c){Ze(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function AC(t,e,i){Y=t,Uj(t)}function Uj(t,e,i){for(var n=(t.mode&1)!==0;Y!==null;){var r=Y,o=r.child;if(r.tag===22&&n){var s=r.memoizedState!==null||Wd;if(!s){var l=r.alternate,c=l!==null&&l.memoizedState!==null||Ut;l=Wd;var d=Ut;if(Wd=s,(Ut=c)&&!d)for(Y=r;Y!==null;)s=Y,c=s.child,s.tag===22&&s.memoizedState!==null?xv(r):c!==null?(c.return=s,Y=c):xv(r);for(;o!==null;)Y=o,Uj(o),o=o.sibling;Y=r,Wd=l,Ut=d}mv(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,Y=o):mv(t)}}function mv(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var i=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ut||Ep(5,e);break;case 1:var n=e.stateNode;if(e.flags&4&&!Ut)if(i===null)n.componentDidMount();else{var r=e.elementType===e.type?i.memoizedProps:xn(e.type,i.memoizedProps);n.componentDidUpdate(r,i.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Jw(e,o,n);break;case 3:var s=e.updateQueue;if(s!==null){if(i=null,e.child!==null)switch(e.child.tag){case 5:i=e.child.stateNode;break;case 1:i=e.child.stateNode}Jw(e,s,i)}break;case 5:var l=e.stateNode;if(i===null&&e.flags&4){i=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&i.focus();break;case"img":c.src&&(i.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&Oc(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Ut||e.flags&512&&$m(e)}catch(f){Ze(e,e.return,f)}}if(e===t){Y=null;break}if(i=e.sibling,i!==null){i.return=e.return,Y=i;break}Y=e.return}}function gv(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var i=e.sibling;if(i!==null){i.return=e.return,Y=i;break}Y=e.return}}function xv(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var i=e.return;try{Ep(4,e)}catch(c){Ze(e,i,c)}break;case 1:var n=e.stateNode;if(typeof n.componentDidMount=="function"){var r=e.return;try{n.componentDidMount()}catch(c){Ze(e,r,c)}}var o=e.return;try{$m(e)}catch(c){Ze(e,o,c)}break;case 5:var s=e.return;try{$m(e)}catch(c){Ze(e,s,c)}}}catch(c){Ze(e,e.return,c)}if(e===t){Y=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Y=l;break}Y=e.return}}var MC=Math.ceil,Nh=Dr.ReactCurrentDispatcher,Wx=Dr.ReactCurrentOwner,rn=Dr.ReactCurrentBatchConfig,xe=0,_t=null,ut=null,zt=0,Ci=0,ga=Do(0),wt=0,qc=null,ks=0,Ip=0,Ux=0,dc=null,hi=null,Hx=0,Ga=1/0,rr=null,Oh=!1,Wm=null,ro=null,Ud=!1,Yr=null,$h=0,uc=0,Um=null,Zu=-1,qu=0;function si(){return xe&6?it():Zu!==-1?Zu:Zu=it()}function oo(t){return t.mode&1?xe&2&&zt!==0?zt&-zt:gC.transition!==null?(qu===0&&(qu=Pk()),qu):(t=je,t!==0||(t=window.event,t=t===void 0?16:Fk(t.type)),t):1}function Sn(t,e,i,n){if(50<uc)throw uc=0,Um=null,Error(B(185));pd(t,i,n),(!(xe&2)||t!==_t)&&(t===_t&&(!(xe&2)&&(Ip|=i),wt===4&&Ur(t,zt)),gi(t,n),i===1&&xe===0&&!(e.mode&1)&&(Ga=it()+500,Cp&&_o()))}function gi(t,e){var i=t.callbackNode;g_(t,e);var n=jh(t,t===_t?zt:0);if(n===0)i!==null&&_w(i),t.callbackNode=null,t.callbackPriority=0;else if(e=n&-n,t.callbackPriority!==e){if(i!=null&&_w(i),e===1)t.tag===0?mC(wv.bind(null,t)):ej(wv.bind(null,t)),uC(function(){!(xe&6)&&_o()}),i=null;else{switch(Tk(n)){case 1:i=xx;break;case 4:i=_k;break;case 16:i=kh;break;case 536870912:i=Ck;break;default:i=kh}i=Kj(i,Hj.bind(null,t))}t.callbackPriority=e,t.callbackNode=i}}function Hj(t,e){if(Zu=-1,qu=0,xe&6)throw Error(B(327));var i=t.callbackNode;if(Ia()&&t.callbackNode!==i)return null;var n=jh(t,t===_t?zt:0);if(n===0)return null;if(n&30||n&t.expiredLanes||e)e=Bh(t,n);else{e=n;var r=xe;xe|=2;var o=Gj();(_t!==t||zt!==e)&&(rr=null,Ga=it()+500,ls(t,e));do try{RC();break}catch(l){Yj(t,l)}while(1);Ex(),Nh.current=o,xe=r,ut!==null?e=0:(_t=null,zt=0,e=wt)}if(e!==0){if(e===2&&(r=xm(t),r!==0&&(n=r,e=Hm(t,r))),e===1)throw i=qc,ls(t,0),Ur(t,n),gi(t,it()),i;if(e===6)Ur(t,n);else{if(r=t.current.alternate,!(n&30)&&!zC(r)&&(e=Bh(t,n),e===2&&(o=xm(t),o!==0&&(n=o,e=Hm(t,o))),e===1))throw i=qc,ls(t,0),Ur(t,n),gi(t,it()),i;switch(t.finishedWork=r,t.finishedLanes=n,e){case 0:case 1:throw Error(B(345));case 2:Ho(t,hi,rr);break;case 3:if(Ur(t,n),(n&130023424)===n&&(e=Hx+500-it(),10<e)){if(jh(t,0)!==0)break;if(r=t.suspendedLanes,(r&n)!==n){si(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Dm(Ho.bind(null,t,hi,rr),e);break}Ho(t,hi,rr);break;case 4:if(Ur(t,n),(n&4194240)===n)break;for(e=t.eventTimes,r=-1;0<n;){var s=31-jn(n);o=1<<s,s=e[s],s>r&&(r=s),n&=~o}if(n=r,n=it()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*MC(n/1960))-n,10<n){t.timeoutHandle=Dm(Ho.bind(null,t,hi,rr),n);break}Ho(t,hi,rr);break;case 5:Ho(t,hi,rr);break;default:throw Error(B(329))}}}return gi(t,it()),t.callbackNode===i?Hj.bind(null,t):null}function Hm(t,e){var i=dc;return t.current.memoizedState.isDehydrated&&(ls(t,e).flags|=256),t=Bh(t,e),t!==2&&(e=hi,hi=i,e!==null&&Ym(e)),t}function Ym(t){hi===null?hi=t:hi.push.apply(hi,t)}function zC(t){for(var e=t;;){if(e.flags&16384){var i=e.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var n=0;n<i.length;n++){var r=i[n],o=r.getSnapshot;r=r.value;try{if(!_n(o(),r))return!1}catch{return!1}}}if(i=e.child,e.subtreeFlags&16384&&i!==null)i.return=e,e=i;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ur(t,e){for(e&=~Ux,e&=~Ip,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var i=31-jn(e),n=1<<i;t[i]=-1,e&=~n}}function wv(t){if(xe&6)throw Error(B(327));Ia();var e=jh(t,0);if(!(e&1))return gi(t,it()),null;var i=Bh(t,e);if(t.tag!==0&&i===2){var n=xm(t);n!==0&&(e=n,i=Hm(t,n))}if(i===1)throw i=qc,ls(t,0),Ur(t,e),gi(t,it()),i;if(i===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ho(t,hi,rr),gi(t,it()),null}function Yx(t,e){var i=xe;xe|=1;try{return t(e)}finally{xe=i,xe===0&&(Ga=it()+500,Cp&&_o())}}function js(t){Yr!==null&&Yr.tag===0&&!(xe&6)&&Ia();var e=xe;xe|=1;var i=rn.transition,n=je;try{if(rn.transition=null,je=1,t)return t()}finally{je=n,rn.transition=i,xe=e,!(xe&6)&&_o()}}function Gx(){Ci=ga.current,Me(ga)}function ls(t,e){t.finishedWork=null,t.finishedLanes=0;var i=t.timeoutHandle;if(i!==-1&&(t.timeoutHandle=-1,dC(i)),ut!==null)for(i=ut.return;i!==null;){var n=i;switch(Cx(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ph();break;case 3:Ha(),Me(fi),Me(Xt),Rx();break;case 5:Fx(n);break;case 4:Ha();break;case 13:Me($e);break;case 19:Me($e);break;case 10:Ix(n.type._context);break;case 22:case 23:Gx()}i=i.return}if(_t=t,ut=t=so(t.current,null),zt=Ci=e,wt=0,qc=null,Ux=Ip=ks=0,hi=dc=null,es!==null){for(e=0;e<es.length;e++)if(i=es[e],n=i.interleaved,n!==null){i.interleaved=null;var r=n.next,o=i.pending;if(o!==null){var s=o.next;o.next=r,n.next=s}i.pending=n}es=null}return t}function Yj(t,e){do{var i=ut;try{if(Ex(),Yu.current=Lh,Rh){for(var n=Ue.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Rh=!1}if(bs=0,jt=gt=Ue=null,lc=!1,Gc=0,Wx.current=null,i===null||i.return===null){wt=1,qc=e,ut=null;break}e:{var o=t,s=i.return,l=i,c=e;if(e=zt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=l,p=u.tag;if(!(u.mode&1)&&(p===0||p===11||p===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var g=ov(s);if(g!==null){g.flags&=-257,sv(g,s,l,o,e),g.mode&1&&rv(o,d,e),e=g,c=d;var y=e.updateQueue;if(y===null){var w=new Set;w.add(c),e.updateQueue=w}else y.add(c);break e}else{if(!(e&1)){rv(o,d,e),Xx();break e}c=Error(B(426))}}else if(Re&&l.mode&1){var D=ov(s);if(D!==null){!(D.flags&65536)&&(D.flags|=256),sv(D,s,l,o,e),Px(Ya(c,l));break e}}o=c=Ya(c,l),wt!==4&&(wt=2),dc===null?dc=[o]:dc.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var j=Tj(o,c,e);Kw(o,j);break e;case 1:l=c;var b=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof b.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ro===null||!ro.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var h=Ej(o,l,e);Kw(o,h);break e}}o=o.return}while(o!==null)}Zj(i)}catch(x){e=x,ut===i&&i!==null&&(ut=i=i.return);continue}break}while(1)}function Gj(){var t=Nh.current;return Nh.current=Lh,t===null?Lh:t}function Xx(){(wt===0||wt===3||wt===2)&&(wt=4),_t===null||!(ks&268435455)&&!(Ip&268435455)||Ur(_t,zt)}function Bh(t,e){var i=xe;xe|=2;var n=Gj();(_t!==t||zt!==e)&&(rr=null,ls(t,e));do try{FC();break}catch(r){Yj(t,r)}while(1);if(Ex(),xe=i,Nh.current=n,ut!==null)throw Error(B(261));return _t=null,zt=0,wt}function FC(){for(;ut!==null;)Xj(ut)}function RC(){for(;ut!==null&&!a_();)Xj(ut)}function Xj(t){var e=Qj(t.alternate,t,Ci);t.memoizedProps=t.pendingProps,e===null?Zj(t):ut=e,Wx.current=null}function Zj(t){var e=t;do{var i=e.alternate;if(t=e.return,e.flags&32768){if(i=TC(i,e),i!==null){i.flags&=32767,ut=i;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{wt=6,ut=null;return}}else if(i=PC(i,e,Ci),i!==null){ut=i;return}if(e=e.sibling,e!==null){ut=e;return}ut=e=t}while(e!==null);wt===0&&(wt=5)}function Ho(t,e,i){var n=je,r=rn.transition;try{rn.transition=null,je=1,LC(t,e,i,n)}finally{rn.transition=r,je=n}return null}function LC(t,e,i,n){do Ia();while(Yr!==null);if(xe&6)throw Error(B(327));i=t.finishedWork;var r=t.finishedLanes;if(i===null)return null;if(t.finishedWork=null,t.finishedLanes=0,i===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var o=i.lanes|i.childLanes;if(x_(t,o),t===_t&&(ut=_t=null,zt=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||Ud||(Ud=!0,Kj(kh,function(){return Ia(),null})),o=(i.flags&15990)!==0,i.subtreeFlags&15990||o){o=rn.transition,rn.transition=null;var s=je;je=1;var l=xe;xe|=4,Wx.current=null,IC(t,i),Wj(i,t),nC(jm),Sh=!!km,jm=km=null,t.current=i,AC(i),l_(),xe=l,je=s,rn.transition=o}else t.current=i;if(Ud&&(Ud=!1,Yr=t,$h=r),o=t.pendingLanes,o===0&&(ro=null),u_(i.stateNode),gi(t,it()),e!==null)for(n=t.onRecoverableError,i=0;i<e.length;i++)r=e[i],n(r.value,{componentStack:r.stack,digest:r.digest});if(Oh)throw Oh=!1,t=Wm,Wm=null,t;return $h&1&&t.tag!==0&&Ia(),o=t.pendingLanes,o&1?t===Um?uc++:(uc=0,Um=t):uc=0,_o(),null}function Ia(){if(Yr!==null){var t=Tk($h),e=rn.transition,i=je;try{if(rn.transition=null,je=16>t?16:t,Yr===null)var n=!1;else{if(t=Yr,Yr=null,$h=0,xe&6)throw Error(B(331));var r=xe;for(xe|=4,Y=t.current;Y!==null;){var o=Y,s=o.child;if(Y.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(Y=d;Y!==null;){var u=Y;switch(u.tag){case 0:case 11:case 15:cc(8,u,o)}var p=u.child;if(p!==null)p.return=u,Y=p;else for(;Y!==null;){u=Y;var f=u.sibling,g=u.return;if($j(u),u===d){Y=null;break}if(f!==null){f.return=g,Y=f;break}Y=g}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var D=w.sibling;w.sibling=null,w=D}while(w!==null)}}Y=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Y=s;else e:for(;Y!==null;){if(o=Y,o.flags&2048)switch(o.tag){case 0:case 11:case 15:cc(9,o,o.return)}var j=o.sibling;if(j!==null){j.return=o.return,Y=j;break e}Y=o.return}}var b=t.current;for(Y=b;Y!==null;){s=Y;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,Y=v;else e:for(s=b;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ep(9,l)}}catch(x){Ze(l,l.return,x)}if(l===s){Y=null;break e}var h=l.sibling;if(h!==null){h.return=l.return,Y=h;break e}Y=l.return}}if(xe=r,_o(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(kp,t)}catch{}n=!0}return n}finally{je=i,rn.transition=e}}return!1}function vv(t,e,i){e=Ya(i,e),e=Tj(t,e,1),t=no(t,e,1),e=si(),t!==null&&(pd(t,1,e),gi(t,e))}function Ze(t,e,i){if(t.tag===3)vv(t,t,i);else for(;e!==null;){if(e.tag===3){vv(e,t,i);break}else if(e.tag===1){var n=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ro===null||!ro.has(n))){t=Ya(i,t),t=Ej(e,t,1),e=no(e,t,1),t=si(),e!==null&&(pd(e,1,t),gi(e,t));break}}e=e.return}}function NC(t,e,i){var n=t.pingCache;n!==null&&n.delete(e),e=si(),t.pingedLanes|=t.suspendedLanes&i,_t===t&&(zt&i)===i&&(wt===4||wt===3&&(zt&130023424)===zt&&500>it()-Hx?ls(t,0):Ux|=i),gi(t,e)}function qj(t,e){e===0&&(t.mode&1?(e=zd,zd<<=1,!(zd&130023424)&&(zd=4194304)):e=1);var i=si();t=br(t,e),t!==null&&(pd(t,e,i),gi(t,i))}function OC(t){var e=t.memoizedState,i=0;e!==null&&(i=e.retryLane),qj(t,i)}function $C(t,e){var i=0;switch(t.tag){case 13:var n=t.stateNode,r=t.memoizedState;r!==null&&(i=r.retryLane);break;case 19:n=t.stateNode;break;default:throw Error(B(314))}n!==null&&n.delete(e),qj(t,i)}var Qj;Qj=function(t,e,i){if(t!==null)if(t.memoizedProps!==e.pendingProps||fi.current)pi=!0;else{if(!(t.lanes&i)&&!(e.flags&128))return pi=!1,CC(t,e,i);pi=!!(t.flags&131072)}else pi=!1,Re&&e.flags&1048576&&tj(e,Ih,e.index);switch(e.lanes=0,e.tag){case 2:var n=e.type;Xu(t,e),t=e.pendingProps;var r=Va(e,Xt.current);Ea(e,i),r=Nx(null,e,n,t,r,i);var o=Ox();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mi(n)?(o=!0,Th(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mx(e),r.updater=Tp,e.stateNode=r,r._reactInternals=e,Am(e,n,t,i),e=Fm(null,e,n,!0,o,i)):(e.tag=0,Re&&o&&_x(e),ti(null,e,r,i),e=e.child),e;case 16:n=e.elementType;e:{switch(Xu(t,e),t=e.pendingProps,r=n._init,n=r(n._payload),e.type=n,r=e.tag=VC(n),t=xn(n,t),r){case 0:e=zm(null,e,n,t,i);break e;case 1:e=cv(null,e,n,t,i);break e;case 11:e=av(null,e,n,t,i);break e;case 14:e=lv(null,e,n,xn(n.type,t),i);break e}throw Error(B(306,n,""))}return e;case 0:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:xn(n,r),zm(t,e,n,r,i);case 1:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:xn(n,r),cv(t,e,n,r,i);case 3:e:{if(zj(e),t===null)throw Error(B(387));n=e.pendingProps,o=e.memoizedState,r=o.element,aj(t,e),zh(e,n,null,i);var s=e.memoizedState;if(n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Ya(Error(B(423)),e),e=dv(t,e,n,i,r);break e}else if(n!==r){r=Ya(Error(B(424)),e),e=dv(t,e,n,i,r);break e}else for(Mi=io(e.stateNode.containerInfo.firstChild),Fi=e,Re=!0,vn=null,i=oj(e,null,n,i),e.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Wa(),n===r){e=kr(t,e,i);break e}ti(t,e,n,i)}e=e.child}return e;case 5:return lj(e),t===null&&Tm(e),n=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Sm(n,r)?s=null:o!==null&&Sm(n,o)&&(e.flags|=32),Mj(t,e),ti(t,e,s,i),e.child;case 6:return t===null&&Tm(e),null;case 13:return Fj(t,e,i);case 4:return zx(e,e.stateNode.containerInfo),n=e.pendingProps,t===null?e.child=Ua(e,null,n,i):ti(t,e,n,i),e.child;case 11:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:xn(n,r),av(t,e,n,r,i);case 7:return ti(t,e,e.pendingProps,i),e.child;case 8:return ti(t,e,e.pendingProps.children,i),e.child;case 12:return ti(t,e,e.pendingProps.children,i),e.child;case 10:e:{if(n=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,Ee(Ah,n._currentValue),n._currentValue=s,o!==null)if(_n(o.value,s)){if(o.children===r.children&&!fi.current){e=kr(t,e,i);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=mr(-1,i&-i),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}o.lanes|=i,c=o.alternate,c!==null&&(c.lanes|=i),Em(o.return,i,e),l.lanes|=i;break}c=c.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(B(341));s.lanes|=i,l=s.alternate,l!==null&&(l.lanes|=i),Em(s,i,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ti(t,e,r.children,i),e=e.child}return e;case 9:return r=e.type,n=e.pendingProps.children,Ea(e,i),r=sn(r),n=n(r),e.flags|=1,ti(t,e,n,i),e.child;case 14:return n=e.type,r=xn(n,e.pendingProps),r=xn(n.type,r),lv(t,e,n,r,i);case 15:return Ij(t,e,e.type,e.pendingProps,i);case 17:return n=e.type,r=e.pendingProps,r=e.elementType===n?r:xn(n,r),Xu(t,e),e.tag=1,mi(n)?(t=!0,Th(e)):t=!1,Ea(e,i),Pj(e,n,r),Am(e,n,r,i),Fm(null,e,n,!0,t,i);case 19:return Rj(t,e,i);case 22:return Aj(t,e,i)}throw Error(B(156,e.tag))};function Kj(t,e){return Dk(t,e)}function BC(t,e,i,n){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ji(t,e,i,n){return new BC(t,e,i,n)}function Zx(t){return t=t.prototype,!(!t||!t.isReactComponent)}function VC(t){if(typeof t=="function")return Zx(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fx)return 11;if(t===mx)return 14}return 2}function so(t,e){var i=t.alternate;return i===null?(i=Ji(t.tag,e,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=e,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&14680064,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,e=t.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i}function Qu(t,e,i,n,r,o){var s=2;if(n=t,typeof t=="function")Zx(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case sa:return cs(i.children,r,o,e);case px:s=8,r|=8;break;case im:return t=Ji(12,i,e,r|2),t.elementType=im,t.lanes=o,t;case nm:return t=Ji(13,i,e,r),t.elementType=nm,t.lanes=o,t;case rm:return t=Ji(19,i,e,r),t.elementType=rm,t.lanes=o,t;case lk:return Ap(i,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case sk:s=10;break e;case ak:s=9;break e;case fx:s=11;break e;case mx:s=14;break e;case $r:s=16,n=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Ji(s,i,e,r),e.elementType=t,e.type=n,e.lanes=o,e}function cs(t,e,i,n){return t=Ji(7,t,n,e),t.lanes=i,t}function Ap(t,e,i,n){return t=Ji(22,t,n,e),t.elementType=lk,t.lanes=i,t.stateNode={isHidden:!1},t}function If(t,e,i){return t=Ji(6,t,null,e),t.lanes=i,t}function Af(t,e,i){return e=Ji(4,t.children!==null?t.children:[],t.key,e),e.lanes=i,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WC(t,e,i,n,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hf(0),this.expirationTimes=hf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hf(0),this.identifierPrefix=n,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function qx(t,e,i,n,r,o,s,l,c){return t=new WC(t,e,i,l,c),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Ji(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:n,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mx(o),t}function UC(t,e,i){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oa,key:n==null?null:""+n,children:t,containerInfo:e,implementation:i}}function Jj(t){if(!t)return wo;t=t._reactInternals;e:{if(Is(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mi(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var i=t.type;if(mi(i))return Jk(t,i,e)}return e}function eS(t,e,i,n,r,o,s,l,c){return t=qx(i,n,!0,t,r,o,s,l,c),t.context=Jj(null),i=t.current,n=si(),r=oo(i),o=mr(n,r),o.callback=e??null,no(i,o,r),t.current.lanes=r,pd(t,r,n),gi(t,n),t}function Mp(t,e,i,n){var r=e.current,o=si(),s=oo(r);return i=Jj(i),e.context===null?e.context=i:e.pendingContext=i,e=mr(o,s),e.payload={element:t},n=n===void 0?null:n,n!==null&&(e.callback=n),t=no(r,e,s),t!==null&&(Sn(t,r,s,o),Hu(t,r,s)),s}function Vh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<e?i:e}}function Qx(t,e){yv(t,e),(t=t.alternate)&&yv(t,e)}function HC(){return null}var tS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kx(t){this._internalRoot=t}zp.prototype.render=Kx.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));Mp(t,e,null,null)};zp.prototype.unmount=Kx.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;js(function(){Mp(null,t,null,null)}),e[yr]=null}};function zp(t){this._internalRoot=t}zp.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ak();t={blockedOn:null,target:t,priority:e};for(var i=0;i<Wr.length&&e!==0&&e<Wr[i].priority;i++);Wr.splice(i,0,t),i===0&&zk(t)}};function Jx(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bv(){}function YC(t,e,i,n,r){if(r){if(typeof n=="function"){var o=n;n=function(){var d=Vh(s);o.call(d)}}var s=eS(e,n,t,0,null,!1,!1,"",bv);return t._reactRootContainer=s,t[yr]=s.current,Vc(t.nodeType===8?t.parentNode:t),js(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof n=="function"){var l=n;n=function(){var d=Vh(c);l.call(d)}}var c=qx(t,0,!1,null,null,!1,!1,"",bv);return t._reactRootContainer=c,t[yr]=c.current,Vc(t.nodeType===8?t.parentNode:t),js(function(){Mp(e,c,i,n)}),c}function Rp(t,e,i,n,r){var o=i._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var l=r;r=function(){var c=Vh(s);l.call(c)}}Mp(e,s,t,r)}else s=YC(i,e,t,r,n);return Vh(s)}Ek=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var i=Hl(e.pendingLanes);i!==0&&(wx(e,i|1),gi(e,it()),!(xe&6)&&(Ga=it()+500,_o()))}break;case 13:js(function(){var n=br(t,1);if(n!==null){var r=si();Sn(n,t,1,r)}}),Qx(t,1)}};vx=function(t){if(t.tag===13){var e=br(t,134217728);if(e!==null){var i=si();Sn(e,t,134217728,i)}Qx(t,134217728)}};Ik=function(t){if(t.tag===13){var e=oo(t),i=br(t,e);if(i!==null){var n=si();Sn(i,t,e,n)}Qx(t,e)}};Ak=function(){return je};Mk=function(t,e){var i=je;try{return je=t,e()}finally{je=i}};fm=function(t,e,i){switch(e){case"input":if(am(t,i),e=i.name,i.type==="radio"&&e!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<i.length;e++){var n=i[e];if(n!==t&&n.form===t.form){var r=_p(n);if(!r)throw Error(B(90));dk(n),am(n,r)}}}break;case"textarea":hk(t,i);break;case"select":e=i.value,e!=null&&_a(t,!!i.multiple,e,!1)}};vk=Yx;yk=js;var GC={usingClientEntryPoint:!1,Events:[md,da,_p,xk,wk,Yx]},Pl={findFiberByHostInstance:Jo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},XC={bundleType:Pl.bundleType,version:Pl.version,rendererPackageName:Pl.rendererPackageName,rendererConfig:Pl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jk(t),t===null?null:t.stateNode},findFiberByHostInstance:Pl.findFiberByHostInstance||HC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hd.isDisabled&&Hd.supportsFiber)try{kp=Hd.inject(XC),Vn=Hd}catch{}}Bi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GC;Bi.createPortal=function(t,e){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jx(e))throw Error(B(200));return UC(t,e,null,i)};Bi.createRoot=function(t,e){if(!Jx(t))throw Error(B(299));var i=!1,n="",r=tS;return e!=null&&(e.unstable_strictMode===!0&&(i=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=qx(t,1,!1,null,null,i,!1,n,r),t[yr]=e.current,Vc(t.nodeType===8?t.parentNode:t),new Kx(e)};Bi.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=jk(e),t=t===null?null:t.stateNode,t};Bi.flushSync=function(t){return js(t)};Bi.hydrate=function(t,e,i){if(!Fp(e))throw Error(B(200));return Rp(null,t,e,!0,i)};Bi.hydrateRoot=function(t,e,i){if(!Jx(t))throw Error(B(405));var n=i!=null&&i.hydratedSources||null,r=!1,o="",s=tS;if(i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onRecoverableError!==void 0&&(s=i.onRecoverableError)),e=eS(e,null,t,1,i??null,r,!1,o,s),t[yr]=e.current,Vc(t),n)for(t=0;t<n.length;t++)i=n[t],r=i._getVersion,r=r(i._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[i,r]:e.mutableSourceEagerHydrationData.push(i,r);return new zp(e)};Bi.render=function(t,e,i){if(!Fp(e))throw Error(B(200));return Rp(null,t,e,!1,i)};Bi.unmountComponentAtNode=function(t){if(!Fp(t))throw Error(B(40));return t._reactRootContainer?(js(function(){Rp(null,null,t,!1,function(){t._reactRootContainer=null,t[yr]=null})}),!0):!1};Bi.unstable_batchedUpdates=Yx;Bi.unstable_renderSubtreeIntoContainer=function(t,e,i,n){if(!Fp(i))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Rp(t,e,i,!1,n)};Bi.version="18.3.1-next-f1338f8080-20240426";function iS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iS)}catch(t){console.error(t)}}iS(),ik.exports=Bi;var ZC=ik.exports,kv=ZC;em.createRoot=kv.createRoot,em.hydrateRoot=kv.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qc(){return Qc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Qc.apply(this,arguments)}var Gr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gr||(Gr={}));const jv="popstate";function qC(t){t===void 0&&(t={});function e(n,r){let{pathname:o,search:s,hash:l}=n.location;return Gm("",{pathname:o,search:s,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function i(n,r){return typeof r=="string"?r:Wh(r)}return KC(e,i,null,t)}function ht(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function nS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function QC(){return Math.random().toString(36).substr(2,8)}function Sv(t,e){return{usr:t.state,key:t.key,idx:e}}function Gm(t,e,i,n){return i===void 0&&(i=null),Qc({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?hl(e):e,{state:i,key:e&&e.key||n||QC()})}function Wh(t){let{pathname:e="/",search:i="",hash:n=""}=t;return i&&i!=="?"&&(e+=i.charAt(0)==="?"?i:"?"+i),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function hl(t){let e={};if(t){let i=t.indexOf("#");i>=0&&(e.hash=t.substr(i),t=t.substr(0,i));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function KC(t,e,i,n){n===void 0&&(n={});let{window:r=document.defaultView,v5Compat:o=!1}=n,s=r.history,l=Gr.Pop,c=null,d=u();d==null&&(d=0,s.replaceState(Qc({},s.state,{idx:d}),""));function u(){return(s.state||{idx:null}).idx}function p(){l=Gr.Pop;let D=u(),j=D==null?null:D-d;d=D,c&&c({action:l,location:w.location,delta:j})}function f(D,j){l=Gr.Push;let b=Gm(w.location,D,j);i&&i(b,D),d=u()+1;let v=Sv(b,d),h=w.createHref(b);try{s.pushState(v,"",h)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;r.location.assign(h)}o&&c&&c({action:l,location:w.location,delta:1})}function g(D,j){l=Gr.Replace;let b=Gm(w.location,D,j);i&&i(b,D),d=u();let v=Sv(b,d),h=w.createHref(b);s.replaceState(v,"",h),o&&c&&c({action:l,location:w.location,delta:0})}function y(D){let j=r.location.origin!=="null"?r.location.origin:r.location.href,b=typeof D=="string"?D:Wh(D);return b=b.replace(/ $/,"%20"),ht(j,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,j)}let w={get action(){return l},get location(){return t(r,s)},listen(D){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(jv,p),c=D,()=>{r.removeEventListener(jv,p),c=null}},createHref(D){return e(r,D)},createURL:y,encodeLocation(D){let j=y(D);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:f,replace:g,go(D){return s.go(D)}};return w}var Dv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Dv||(Dv={}));function JC(t,e,i){return i===void 0&&(i="/"),e8(t,e,i,!1)}function e8(t,e,i,n){let r=typeof e=="string"?hl(e):e,o=e1(r.pathname||"/",i);if(o==null)return null;let s=rS(t);t8(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let d=h8(o);l=d8(s[c],d,n)}return l}function rS(t,e,i,n){e===void 0&&(e=[]),i===void 0&&(i=[]),n===void 0&&(n="");let r=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(ht(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let d=ao([n,c.relativePath]),u=i.concat(c);o.children&&o.children.length>0&&(ht(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),rS(o.children,e,u,d)),!(o.path==null&&!o.index)&&e.push({path:d,score:l8(d,o.index),routesMeta:u})};return t.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))r(o,s);else for(let c of oS(o.path))r(o,s,c)}),e}function oS(t){let e=t.split("/");if(e.length===0)return[];let[i,...n]=e,r=i.endsWith("?"),o=i.replace(/\?$/,"");if(n.length===0)return r?[o,""]:[o];let s=oS(n.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),r&&l.push(...s),l.map(c=>t.startsWith("/")&&c===""?"/":c)}function t8(t){t.sort((e,i)=>e.score!==i.score?i.score-e.score:c8(e.routesMeta.map(n=>n.childrenIndex),i.routesMeta.map(n=>n.childrenIndex)))}const i8=/^:[\w-]+$/,n8=3,r8=2,o8=1,s8=10,a8=-2,_v=t=>t==="*";function l8(t,e){let i=t.split("/"),n=i.length;return i.some(_v)&&(n+=a8),e&&(n+=r8),i.filter(r=>!_v(r)).reduce((r,o)=>r+(i8.test(o)?n8:o===""?o8:s8),n)}function c8(t,e){return t.length===e.length&&t.slice(0,-1).every((n,r)=>n===e[r])?t[t.length-1]-e[e.length-1]:0}function d8(t,e,i){i===void 0&&(i=!1);let{routesMeta:n}=t,r={},o="/",s=[];for(let l=0;l<n.length;++l){let c=n[l],d=l===n.length-1,u=o==="/"?e:e.slice(o.length)||"/",p=Cv({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},u),f=c.route;if(!p&&d&&i&&!n[n.length-1].route.index&&(p=Cv({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},u)),!p)return null;Object.assign(r,p.params),s.push({params:r,pathname:ao([o,p.pathname]),pathnameBase:g8(ao([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=ao([o,p.pathnameBase]))}return s}function Cv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,n]=u8(t.path,t.caseSensitive,t.end),r=e.match(i);if(!r)return null;let o=r[0],s=o.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:n.reduce((d,u,p)=>{let{paramName:f,isOptional:g}=u;if(f==="*"){let w=l[p]||"";s=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=l[p];return g&&!y?d[f]=void 0:d[f]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:o,pathnameBase:s,pattern:t}}function u8(t,e,i){e===void 0&&(e=!1),i===void 0&&(i=!0),nS(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let n=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(n.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(n.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),n]}function h8(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return nS(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function e1(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,n=t.charAt(i);return n&&n!=="/"?null:t.slice(i)||"/"}function p8(t,e){e===void 0&&(e="/");let{pathname:i,search:n="",hash:r=""}=typeof t=="string"?hl(t):t;return{pathname:i?i.startsWith("/")?i:f8(i,e):e,search:x8(n),hash:w8(r)}}function f8(t,e){let i=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?i.length>1&&i.pop():r!=="."&&i.push(r)}),i.length>1?i.join("/"):"/"}function Mf(t,e,i,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function m8(t){return t.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function sS(t,e){let i=m8(t);return e?i.map((n,r)=>r===i.length-1?n.pathname:n.pathnameBase):i.map(n=>n.pathnameBase)}function aS(t,e,i,n){n===void 0&&(n=!1);let r;typeof t=="string"?r=hl(t):(r=Qc({},t),ht(!r.pathname||!r.pathname.includes("?"),Mf("?","pathname","search",r)),ht(!r.pathname||!r.pathname.includes("#"),Mf("#","pathname","hash",r)),ht(!r.search||!r.search.includes("#"),Mf("#","search","hash",r)));let o=t===""||r.pathname==="",s=o?"/":r.pathname,l;if(s==null)l=i;else{let p=e.length-1;if(!n&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),p-=1;r.pathname=f.join("/")}l=p>=0?e[p]:"/"}let c=p8(r,l),d=s&&s!=="/"&&s.endsWith("/"),u=(o||s===".")&&i.endsWith("/");return!c.pathname.endsWith("/")&&(d||u)&&(c.pathname+="/"),c}const ao=t=>t.join("/").replace(/\/\/+/g,"/"),g8=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),x8=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,w8=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function v8(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const lS=["post","put","patch","delete"];new Set(lS);const y8=["get",...lS];new Set(y8);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Kc(){return Kc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Kc.apply(this,arguments)}const t1=T.createContext(null),b8=T.createContext(null),As=T.createContext(null),Lp=T.createContext(null),Ms=T.createContext({outlet:null,matches:[],isDataRoute:!1}),cS=T.createContext(null);function k8(t,e){let{relative:i}=e===void 0?{}:e;xd()||ht(!1);let{basename:n,navigator:r}=T.useContext(As),{hash:o,pathname:s,search:l}=hS(t,{relative:i}),c=s;return n!=="/"&&(c=s==="/"?n:ao([n,s])),r.createHref({pathname:c,search:l,hash:o})}function xd(){return T.useContext(Lp)!=null}function wd(){return xd()||ht(!1),T.useContext(Lp).location}function dS(t){T.useContext(As).static||T.useLayoutEffect(t)}function uS(){let{isDataRoute:t}=T.useContext(Ms);return t?F8():j8()}function j8(){xd()||ht(!1);let t=T.useContext(t1),{basename:e,future:i,navigator:n}=T.useContext(As),{matches:r}=T.useContext(Ms),{pathname:o}=wd(),s=JSON.stringify(sS(r,i.v7_relativeSplatPath)),l=T.useRef(!1);return dS(()=>{l.current=!0}),T.useCallback(function(d,u){if(u===void 0&&(u={}),!l.current)return;if(typeof d=="number"){n.go(d);return}let p=aS(d,JSON.parse(s),o,u.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:ao([e,p.pathname])),(u.replace?n.replace:n.push)(p,u.state,u)},[e,n,s,o,t])}function hS(t,e){let{relative:i}=e===void 0?{}:e,{future:n}=T.useContext(As),{matches:r}=T.useContext(Ms),{pathname:o}=wd(),s=JSON.stringify(sS(r,n.v7_relativeSplatPath));return T.useMemo(()=>aS(t,JSON.parse(s),o,i==="path"),[t,s,o,i])}function S8(t,e){return D8(t,e)}function D8(t,e,i,n){xd()||ht(!1);let{navigator:r}=T.useContext(As),{matches:o}=T.useContext(Ms),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=wd(),u;if(e){var p;let D=typeof e=="string"?hl(e):e;c==="/"||(p=D.pathname)!=null&&p.startsWith(c)||ht(!1),u=D}else u=d;let f=u.pathname||"/",g=f;if(c!=="/"){let D=c.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(D.length).join("/")}let y=JC(t,{pathname:g}),w=E8(y&&y.map(D=>Object.assign({},D,{params:Object.assign({},l,D.params),pathname:ao([c,r.encodeLocation?r.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?c:ao([c,r.encodeLocation?r.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),o,i,n);return e&&w?T.createElement(Lp.Provider,{value:{location:Kc({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Gr.Pop}},w):w}function _8(){let t=z8(),e=v8(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},e),i?T.createElement("pre",{style:r},i):null,o)}const C8=T.createElement(_8,null);class P8 extends T.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,i){return i.location!==e.location||i.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:i.error,location:i.location,revalidation:e.revalidation||i.revalidation}}componentDidCatch(e,i){console.error("React Router caught the following error during render",e,i)}render(){return this.state.error!==void 0?T.createElement(Ms.Provider,{value:this.props.routeContext},T.createElement(cS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function T8(t){let{routeContext:e,match:i,children:n}=t,r=T.useContext(t1);return r&&r.static&&r.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=i.route.id),T.createElement(Ms.Provider,{value:e},n)}function E8(t,e,i,n){var r;if(e===void 0&&(e=[]),i===void 0&&(i=null),n===void 0&&(n=null),t==null){var o;if(!i)return null;if(i.errors)t=i.matches;else if((o=n)!=null&&o.v7_partialHydration&&e.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let s=t,l=(r=i)==null?void 0:r.errors;if(l!=null){let u=s.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);u>=0||ht(!1),s=s.slice(0,Math.min(s.length,u+1))}let c=!1,d=-1;if(i&&n&&n.v7_partialHydration)for(let u=0;u<s.length;u++){let p=s[u];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(d=u),p.route.id){let{loaderData:f,errors:g}=i,y=p.route.loader&&f[p.route.id]===void 0&&(!g||g[p.route.id]===void 0);if(p.route.lazy||y){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((u,p,f)=>{let g,y=!1,w=null,D=null;i&&(g=l&&p.route.id?l[p.route.id]:void 0,w=p.route.errorElement||C8,c&&(d<0&&f===0?(R8("route-fallback",!1),y=!0,D=null):d===f&&(y=!0,D=p.route.hydrateFallbackElement||null)));let j=e.concat(s.slice(0,f+1)),b=()=>{let v;return g?v=w:y?v=D:p.route.Component?v=T.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=u,T.createElement(T8,{match:p,routeContext:{outlet:u,matches:j,isDataRoute:i!=null},children:v})};return i&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?T.createElement(P8,{location:i.location,revalidation:i.revalidation,component:w,error:g,children:b(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):b()},null)}var pS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(pS||{}),Uh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Uh||{});function I8(t){let e=T.useContext(t1);return e||ht(!1),e}function A8(t){let e=T.useContext(b8);return e||ht(!1),e}function M8(t){let e=T.useContext(Ms);return e||ht(!1),e}function fS(t){let e=M8(),i=e.matches[e.matches.length-1];return i.route.id||ht(!1),i.route.id}function z8(){var t;let e=T.useContext(cS),i=A8(Uh.UseRouteError),n=fS(Uh.UseRouteError);return e!==void 0?e:(t=i.errors)==null?void 0:t[n]}function F8(){let{router:t}=I8(pS.UseNavigateStable),e=fS(Uh.UseNavigateStable),i=T.useRef(!1);return dS(()=>{i.current=!0}),T.useCallback(function(r,o){o===void 0&&(o={}),i.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Kc({fromRouteId:e},o)))},[t,e])}const Pv={};function R8(t,e,i){!e&&!Pv[t]&&(Pv[t]=!0)}function L8(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function Hi(t){ht(!1)}function N8(t){let{basename:e="/",children:i=null,location:n,navigationType:r=Gr.Pop,navigator:o,static:s=!1,future:l}=t;xd()&&ht(!1);let c=e.replace(/^\/*/,"/"),d=T.useMemo(()=>({basename:c,navigator:o,static:s,future:Kc({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof n=="string"&&(n=hl(n));let{pathname:u="/",search:p="",hash:f="",state:g=null,key:y="default"}=n,w=T.useMemo(()=>{let D=e1(u,c);return D==null?null:{location:{pathname:D,search:p,hash:f,state:g,key:y},navigationType:r}},[c,u,p,f,g,y,r]);return w==null?null:T.createElement(As.Provider,{value:d},T.createElement(Lp.Provider,{children:i,value:w}))}function O8(t){let{children:e,location:i}=t;return S8(Xm(e),i)}new Promise(()=>{});function Xm(t,e){e===void 0&&(e=[]);let i=[];return T.Children.forEach(t,(n,r)=>{if(!T.isValidElement(n))return;let o=[...e,r];if(n.type===T.Fragment){i.push.apply(i,Xm(n.props.children,o));return}n.type!==Hi&&ht(!1),!n.props.index||!n.props.children||ht(!1);let s={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=Xm(n.props.children,o)),i.push(s)}),i}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zm(){return Zm=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},Zm.apply(this,arguments)}function $8(t,e){if(t==null)return{};var i={},n=Object.keys(t),r,o;for(o=0;o<n.length;o++)r=n[o],!(e.indexOf(r)>=0)&&(i[r]=t[r]);return i}function B8(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function V8(t,e){return t.button===0&&(!e||e==="_self")&&!B8(t)}const W8=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],U8="6";try{window.__reactRouterVersion=U8}catch{}const H8="startTransition",Tv=N4[H8];function Y8(t){let{basename:e,children:i,future:n,window:r}=t,o=T.useRef();o.current==null&&(o.current=qC({window:r,v5Compat:!0}));let s=o.current,[l,c]=T.useState({action:s.action,location:s.location}),{v7_startTransition:d}=n||{},u=T.useCallback(p=>{d&&Tv?Tv(()=>c(p)):c(p)},[c,d]);return T.useLayoutEffect(()=>s.listen(u),[s,u]),T.useEffect(()=>L8(n),[n]),T.createElement(N8,{basename:e,children:i,location:l.location,navigationType:l.action,navigator:s,future:n})}const G8=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",X8=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yn=T.forwardRef(function(e,i){let{onClick:n,relative:r,reloadDocument:o,replace:s,state:l,target:c,to:d,preventScrollReset:u,viewTransition:p}=e,f=$8(e,W8),{basename:g}=T.useContext(As),y,w=!1;if(typeof d=="string"&&X8.test(d)&&(y=d,G8))try{let v=new URL(window.location.href),h=d.startsWith("//")?new URL(v.protocol+d):new URL(d),x=e1(h.pathname,g);h.origin===v.origin&&x!=null?d=x+h.search+h.hash:w=!0}catch{}let D=k8(d,{relative:r}),j=Z8(d,{replace:s,state:l,target:c,preventScrollReset:u,relative:r,viewTransition:p});function b(v){n&&n(v),v.defaultPrevented||j(v)}return T.createElement("a",Zm({},f,{href:y||D,onClick:w||o?n:b,ref:i,target:c}))});var Ev;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ev||(Ev={}));var Iv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Iv||(Iv={}));function Z8(t,e){let{target:i,replace:n,state:r,preventScrollReset:o,relative:s,viewTransition:l}=e===void 0?{}:e,c=uS(),d=wd(),u=hS(t,{relative:s});return T.useCallback(p=>{if(V8(p,i)){p.preventDefault();let f=n!==void 0?n:Wh(d)===Wh(u);c(t,{replace:f,state:r,preventScrollReset:o,relative:s,viewTransition:l})}},[d,c,u,n,r,i,t,o,s,l])}var q8=typeof Element<"u",Q8=typeof Map=="function",K8=typeof Set=="function",J8=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ku(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var i,n,r;if(Array.isArray(t)){if(i=t.length,i!=e.length)return!1;for(n=i;n--!==0;)if(!Ku(t[n],e[n]))return!1;return!0}var o;if(Q8&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(o=t.entries();!(n=o.next()).done;)if(!e.has(n.value[0]))return!1;for(o=t.entries();!(n=o.next()).done;)if(!Ku(n.value[1],e.get(n.value[0])))return!1;return!0}if(K8&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(o=t.entries();!(n=o.next()).done;)if(!e.has(n.value[0]))return!1;return!0}if(J8&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(i=t.length,i!=e.length)return!1;for(n=i;n--!==0;)if(t[n]!==e[n])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf&&typeof t.valueOf=="function"&&typeof e.valueOf=="function")return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString&&typeof t.toString=="function"&&typeof e.toString=="function")return t.toString()===e.toString();if(r=Object.keys(t),i=r.length,i!==Object.keys(e).length)return!1;for(n=i;n--!==0;)if(!Object.prototype.hasOwnProperty.call(e,r[n]))return!1;if(q8&&t instanceof Element)return!1;for(n=i;n--!==0;)if(!((r[n]==="_owner"||r[n]==="__v"||r[n]==="__o")&&t.$$typeof)&&!Ku(t[r[n]],e[r[n]]))return!1;return!0}return t!==t&&e!==e}var e6=function(e,i){try{return Ku(e,i)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}};const t6=yp(e6);var i6=function(t,e,i,n,r,o,s,l){if(!t){var c;if(e===void 0)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[i,n,r,o,s,l],u=0;c=new Error(e.replace(/%s/g,function(){return d[u++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}},n6=i6;const Av=yp(n6);var r6=function(e,i,n,r){var o=n?n.call(r,e,i):void 0;if(o!==void 0)return!!o;if(e===i)return!0;if(typeof e!="object"||!e||typeof i!="object"||!i)return!1;var s=Object.keys(e),l=Object.keys(i);if(s.length!==l.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(i),d=0;d<s.length;d++){var u=s[d];if(!c(u))return!1;var p=e[u],f=i[u];if(o=n?n.call(r,p,f,u):void 0,o===!1||o===void 0&&p!==f)return!1}return!0};const o6=yp(r6);var mS=(t=>(t.BASE="base",t.BODY="body",t.HEAD="head",t.HTML="html",t.LINK="link",t.META="meta",t.NOSCRIPT="noscript",t.SCRIPT="script",t.STYLE="style",t.TITLE="title",t.FRAGMENT="Symbol(react.fragment)",t))(mS||{}),zf={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Mv=Object.values(mS),i1={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},s6=Object.entries(i1).reduce((t,[e,i])=>(t[i]=e,t),{}),bn="data-rh",Aa={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},Ma=(t,e)=>{for(let i=t.length-1;i>=0;i-=1){const n=t[i];if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}return null},a6=t=>{let e=Ma(t,"title");const i=Ma(t,Aa.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),i&&e)return i.replace(/%s/g,()=>e);const n=Ma(t,Aa.DEFAULT_TITLE);return e||n||void 0},l6=t=>Ma(t,Aa.ON_CHANGE_CLIENT_STATE)||(()=>{}),Ff=(t,e)=>e.filter(i=>typeof i[t]<"u").map(i=>i[t]).reduce((i,n)=>({...i,...n}),{}),c6=(t,e)=>e.filter(i=>typeof i.base<"u").map(i=>i.base).reverse().reduce((i,n)=>{if(!i.length){const r=Object.keys(n);for(let o=0;o<r.length;o+=1){const l=r[o].toLowerCase();if(t.indexOf(l)!==-1&&n[l])return i.concat(n)}}return i},[]),d6=t=>console&&typeof console.warn=="function"&&console.warn(t),Tl=(t,e,i)=>{const n={};return i.filter(r=>Array.isArray(r[t])?!0:(typeof r[t]<"u"&&d6(`Helmet: ${t} should be of type "Array". Instead found type "${typeof r[t]}"`),!1)).map(r=>r[t]).reverse().reduce((r,o)=>{const s={};o.filter(c=>{let d;const u=Object.keys(c);for(let f=0;f<u.length;f+=1){const g=u[f],y=g.toLowerCase();e.indexOf(y)!==-1&&!(d==="rel"&&c[d].toLowerCase()==="canonical")&&!(y==="rel"&&c[y].toLowerCase()==="stylesheet")&&(d=y),e.indexOf(g)!==-1&&(g==="innerHTML"||g==="cssText"||g==="itemprop")&&(d=g)}if(!d||!c[d])return!1;const p=c[d].toLowerCase();return n[d]||(n[d]={}),s[d]||(s[d]={}),n[d][p]?!1:(s[d][p]=!0,!0)}).reverse().forEach(c=>r.push(c));const l=Object.keys(s);for(let c=0;c<l.length;c+=1){const d=l[c],u={...n[d],...s[d]};n[d]=u}return r},[]).reverse()},u6=(t,e)=>{if(Array.isArray(t)&&t.length){for(let i=0;i<t.length;i+=1)if(t[i][e])return!0}return!1},h6=t=>({baseTag:c6(["href"],t),bodyAttributes:Ff("bodyAttributes",t),defer:Ma(t,Aa.DEFER),encode:Ma(t,Aa.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Ff("htmlAttributes",t),linkTags:Tl("link",["rel","href"],t),metaTags:Tl("meta",["name","charset","http-equiv","property","itemprop"],t),noscriptTags:Tl("noscript",["innerHTML"],t),onChangeClientState:l6(t),scriptTags:Tl("script",["src","innerHTML"],t),styleTags:Tl("style",["cssText"],t),title:a6(t),titleAttributes:Ff("titleAttributes",t),prioritizeSeoTags:u6(t,Aa.PRIORITIZE_SEO_TAGS)}),gS=t=>Array.isArray(t)?t.join(""):t,p6=(t,e)=>{const i=Object.keys(t);for(let n=0;n<i.length;n+=1)if(e[i[n]]&&e[i[n]].includes(t[i[n]]))return!0;return!1},Rf=(t,e)=>Array.isArray(t)?t.reduce((i,n)=>(p6(n,e)?i.priority.push(n):i.default.push(n),i),{priority:[],default:[]}):{default:t,priority:[]},zv=(t,e)=>({...t,[e]:void 0}),f6=["noscript","script","style"],qm=(t,e=!0)=>e===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),xS=t=>Object.keys(t).reduce((e,i)=>{const n=typeof t[i]<"u"?`${i}="${t[i]}"`:`${i}`;return e?`${e} ${n}`:n},""),m6=(t,e,i,n)=>{const r=xS(i),o=gS(e);return r?`<${t} ${bn}="true" ${r}>${qm(o,n)}</${t}>`:`<${t} ${bn}="true">${qm(o,n)}</${t}>`},g6=(t,e,i=!0)=>e.reduce((n,r)=>{const o=r,s=Object.keys(o).filter(d=>!(d==="innerHTML"||d==="cssText")).reduce((d,u)=>{const p=typeof o[u]>"u"?u:`${u}="${qm(o[u],i)}"`;return d?`${d} ${p}`:p},""),l=o.innerHTML||o.cssText||"",c=f6.indexOf(t)===-1;return`${n}<${t} ${bn}="true" ${s}${c?"/>":`>${l}</${t}>`}`},""),wS=(t,e={})=>Object.keys(t).reduce((i,n)=>{const r=i1[n];return i[r||n]=t[n],i},e),x6=(t,e,i)=>{const n={key:e,[bn]:!0},r=wS(i,n);return[q.createElement("title",r,e)]},Ju=(t,e)=>e.map((i,n)=>{const r={key:n,[bn]:!0};return Object.keys(i).forEach(o=>{const l=i1[o]||o;if(l==="innerHTML"||l==="cssText"){const c=i.innerHTML||i.cssText;r.dangerouslySetInnerHTML={__html:c}}else r[l]=i[o]}),q.createElement(t,r)}),Xi=(t,e,i=!0)=>{switch(t){case"title":return{toComponent:()=>x6(t,e.title,e.titleAttributes),toString:()=>m6(t,e.title,e.titleAttributes,i)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>wS(e),toString:()=>xS(e)};default:return{toComponent:()=>Ju(t,e),toString:()=>g6(t,e,i)}}},w6=({metaTags:t,linkTags:e,scriptTags:i,encode:n})=>{const r=Rf(t,zf.meta),o=Rf(e,zf.link),s=Rf(i,zf.script);return{priorityMethods:{toComponent:()=>[...Ju("meta",r.priority),...Ju("link",o.priority),...Ju("script",s.priority)],toString:()=>`${Xi("meta",r.priority,n)} ${Xi("link",o.priority,n)} ${Xi("script",s.priority,n)}`},metaTags:r.default,linkTags:o.default,scriptTags:s.default}},v6=t=>{const{baseTag:e,bodyAttributes:i,encode:n=!0,htmlAttributes:r,noscriptTags:o,styleTags:s,title:l="",titleAttributes:c,prioritizeSeoTags:d}=t;let{linkTags:u,metaTags:p,scriptTags:f}=t,g={toComponent:()=>{},toString:()=>""};return d&&({priorityMethods:g,linkTags:u,metaTags:p,scriptTags:f}=w6(t)),{priority:g,base:Xi("base",e,n),bodyAttributes:Xi("bodyAttributes",i,n),htmlAttributes:Xi("htmlAttributes",r,n),link:Xi("link",u,n),meta:Xi("meta",p,n),noscript:Xi("noscript",o,n),script:Xi("script",f,n),style:Xi("style",s,n),title:Xi("title",{title:l,titleAttributes:c},n)}},Qm=v6,Yd=[],vS=!!(typeof window<"u"&&window.document&&window.document.createElement),Km=class{constructor(t,e){Kn(this,"instances",[]);Kn(this,"canUseDOM",vS);Kn(this,"context");Kn(this,"value",{setHelmet:t=>{this.context.helmet=t},helmetInstances:{get:()=>this.canUseDOM?Yd:this.instances,add:t=>{(this.canUseDOM?Yd:this.instances).push(t)},remove:t=>{const e=(this.canUseDOM?Yd:this.instances).indexOf(t);(this.canUseDOM?Yd:this.instances).splice(e,1)}}});this.context=t,this.canUseDOM=e||!1,e||(t.helmet=Qm({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},y6={},yS=q.createContext(y6),$a,bS=($a=class extends T.Component{constructor(i){super(i);Kn(this,"helmetData");this.helmetData=new Km(this.props.context||{},$a.canUseDOM)}render(){return q.createElement(yS.Provider,{value:this.helmetData.value},this.props.children)}},Kn($a,"canUseDOM",vS),$a),Us=(t,e)=>{const i=document.head||document.querySelector("head"),n=i.querySelectorAll(`${t}[${bn}]`),r=[].slice.call(n),o=[];let s;return e&&e.length&&e.forEach(l=>{const c=document.createElement(t);for(const d in l)if(Object.prototype.hasOwnProperty.call(l,d))if(d==="innerHTML")c.innerHTML=l.innerHTML;else if(d==="cssText")c.styleSheet?c.styleSheet.cssText=l.cssText:c.appendChild(document.createTextNode(l.cssText));else{const u=d,p=typeof l[u]>"u"?"":l[u];c.setAttribute(d,p)}c.setAttribute(bn,"true"),r.some((d,u)=>(s=u,c.isEqualNode(d)))?r.splice(s,1):o.push(c)}),r.forEach(l=>{var c;return(c=l.parentNode)==null?void 0:c.removeChild(l)}),o.forEach(l=>i.appendChild(l)),{oldTags:r,newTags:o}},Jm=(t,e)=>{const i=document.getElementsByTagName(t)[0];if(!i)return;const n=i.getAttribute(bn),r=n?n.split(","):[],o=[...r],s=Object.keys(e);for(const l of s){const c=e[l]||"";i.getAttribute(l)!==c&&i.setAttribute(l,c),r.indexOf(l)===-1&&r.push(l);const d=o.indexOf(l);d!==-1&&o.splice(d,1)}for(let l=o.length-1;l>=0;l-=1)i.removeAttribute(o[l]);r.length===o.length?i.removeAttribute(bn):i.getAttribute(bn)!==s.join(",")&&i.setAttribute(bn,s.join(","))},b6=(t,e)=>{typeof t<"u"&&document.title!==t&&(document.title=gS(t)),Jm("title",e)},Fv=(t,e)=>{const{baseTag:i,bodyAttributes:n,htmlAttributes:r,linkTags:o,metaTags:s,noscriptTags:l,onChangeClientState:c,scriptTags:d,styleTags:u,title:p,titleAttributes:f}=t;Jm("body",n),Jm("html",r),b6(p,f);const g={baseTag:Us("base",i),linkTags:Us("link",o),metaTags:Us("meta",s),noscriptTags:Us("noscript",l),scriptTags:Us("script",d),styleTags:Us("style",u)},y={},w={};Object.keys(g).forEach(D=>{const{newTags:j,oldTags:b}=g[D];j.length&&(y[D]=j),b.length&&(w[D]=g[D].oldTags)}),e&&e(),c(t,y,w)},El=null,k6=t=>{El&&cancelAnimationFrame(El),t.defer?El=requestAnimationFrame(()=>{Fv(t,()=>{El=null})}):(Fv(t),El=null)},j6=k6,Rv=class extends T.Component{constructor(){super(...arguments);Kn(this,"rendered",!1)}shouldComponentUpdate(e){return!o6(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:i}=this.props.context;let n=null;const r=h6(e.get().map(o=>{const s={...o.props};return delete s.context,s}));bS.canUseDOM?j6(r):Qm&&(n=Qm(r)),i(n)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},J0,kS=(J0=class extends T.Component{shouldComponentUpdate(t){return!t6(zv(this.props,"helmetData"),zv(t,"helmetData"))}mapNestedChildrenToProps(t,e){if(!e)return null;switch(t.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${t.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(t,e,i,n){return{...e,[t.type]:[...e[t.type]||[],{...i,...this.mapNestedChildrenToProps(t,n)}]}}mapObjectTypeChildren(t,e,i,n){switch(t.type){case"title":return{...e,[t.type]:n,titleAttributes:{...i}};case"body":return{...e,bodyAttributes:{...i}};case"html":return{...e,htmlAttributes:{...i}};default:return{...e,[t.type]:{...i}}}}mapArrayTypeChildrenToProps(t,e){let i={...e};return Object.keys(t).forEach(n=>{i={...i,[n]:t[n]}}),i}warnOnInvalidChildren(t,e){return Av(Mv.some(i=>t.type===i),typeof t.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Mv.join(", ")} are allowed. Helmet does not support rendering <${t.type}> elements. Refer to our API for more information.`),Av(!e||typeof e=="string"||Array.isArray(e)&&!e.some(i=>typeof i!="string"),`Helmet expects a string as a child of <${t.type}>. Did you forget to wrap your children in braces? ( <${t.type}>{\`\`}</${t.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(t,e){let i={};return q.Children.forEach(t,n=>{if(!n||!n.props)return;const{children:r,...o}=n.props,s=Object.keys(o).reduce((c,d)=>(c[s6[d]||d]=o[d],c),{});let{type:l}=n;switch(typeof l=="symbol"?l=l.toString():this.warnOnInvalidChildren(n,r),l){case"Symbol(react.fragment)":e=this.mapChildrenToProps(r,e);break;case"link":case"meta":case"noscript":case"script":case"style":i=this.flattenArrayTypeChildren(n,i,s,r);break;default:e=this.mapObjectTypeChildren(n,e,s,r);break}}),this.mapArrayTypeChildrenToProps(i,e)}render(){const{children:t,...e}=this.props;let i={...e},{helmetData:n}=e;if(t&&(i=this.mapChildrenToProps(t,i)),n&&!(n instanceof Km)){const r=n;n=new Km(r.context,!0),delete i.helmetData}return n?q.createElement(Rv,{...i,context:n.value}):q.createElement(yS.Consumer,null,r=>q.createElement(Rv,{...i,context:r}))}},Kn(J0,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),J0),Dt=function(){return Dt=Object.assign||function(e){for(var i,n=1,r=arguments.length;n<r;n++){i=arguments[n];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},Dt.apply(this,arguments)};function Xa(t,e,i){if(i||arguments.length===2)for(var n=0,r=e.length,o;n<r;n++)(o||!(n in e))&&(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))}var Ae="-ms-",hc="-moz-",be="-webkit-",jS="comm",Np="rule",n1="decl",S6="@import",SS="@keyframes",D6="@layer",DS=Math.abs,r1=String.fromCharCode,eg=Object.assign;function _6(t,e){return St(t,0)^45?(((e<<2^St(t,0))<<2^St(t,1))<<2^St(t,2))<<2^St(t,3):0}function _S(t){return t.trim()}function or(t,e){return(t=e.exec(t))?t[0]:t}function re(t,e,i){return t.replace(e,i)}function eh(t,e,i){return t.indexOf(e,i)}function St(t,e){return t.charCodeAt(e)|0}function Za(t,e,i){return t.slice(e,i)}function Rn(t){return t.length}function CS(t){return t.length}function Gl(t,e){return e.push(t),t}function C6(t,e){return t.map(e).join("")}function Lv(t,e){return t.filter(function(i){return!or(i,e)})}var Op=1,qa=1,PS=0,ln=0,dt=0,pl="";function $p(t,e,i,n,r,o,s,l){return{value:t,root:e,parent:i,type:n,props:r,children:o,line:Op,column:qa,length:s,return:"",siblings:l}}function Rr(t,e){return eg($p("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Hs(t){for(;t.root;)t=Rr(t.root,{children:[t]});Gl(t,t.siblings)}function P6(){return dt}function T6(){return dt=ln>0?St(pl,--ln):0,qa--,dt===10&&(qa=1,Op--),dt}function Dn(){return dt=ln<PS?St(pl,ln++):0,qa++,dt===10&&(qa=1,Op++),dt}function ds(){return St(pl,ln)}function th(){return ln}function Bp(t,e){return Za(pl,t,e)}function tg(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function E6(t){return Op=qa=1,PS=Rn(pl=t),ln=0,[]}function I6(t){return pl="",t}function Lf(t){return _S(Bp(ln-1,ig(t===91?t+2:t===40?t+1:t)))}function A6(t){for(;(dt=ds())&&dt<33;)Dn();return tg(t)>2||tg(dt)>3?"":" "}function M6(t,e){for(;--e&&Dn()&&!(dt<48||dt>102||dt>57&&dt<65||dt>70&&dt<97););return Bp(t,th()+(e<6&&ds()==32&&Dn()==32))}function ig(t){for(;Dn();)switch(dt){case t:return ln;case 34:case 39:t!==34&&t!==39&&ig(dt);break;case 40:t===41&&ig(t);break;case 92:Dn();break}return ln}function z6(t,e){for(;Dn()&&t+dt!==47+10;)if(t+dt===42+42&&ds()===47)break;return"/*"+Bp(e,ln-1)+"*"+r1(t===47?t:Dn())}function F6(t){for(;!tg(ds());)Dn();return Bp(t,ln)}function R6(t){return I6(ih("",null,null,null,[""],t=E6(t),0,[0],t))}function ih(t,e,i,n,r,o,s,l,c){for(var d=0,u=0,p=s,f=0,g=0,y=0,w=1,D=1,j=1,b=0,v="",h=r,x=o,k=n,S=v;D;)switch(y=b,b=Dn()){case 40:if(y!=108&&St(S,p-1)==58){eh(S+=re(Lf(b),"&","&\f"),"&\f",DS(d?l[d-1]:0))!=-1&&(j=-1);break}case 34:case 39:case 91:S+=Lf(b);break;case 9:case 10:case 13:case 32:S+=A6(y);break;case 92:S+=M6(th()-1,7);continue;case 47:switch(ds()){case 42:case 47:Gl(L6(z6(Dn(),th()),e,i,c),c);break;default:S+="/"}break;case 123*w:l[d++]=Rn(S)*j;case 125*w:case 59:case 0:switch(b){case 0:case 125:D=0;case 59+u:j==-1&&(S=re(S,/\f/g,"")),g>0&&Rn(S)-p&&Gl(g>32?Ov(S+";",n,i,p-1,c):Ov(re(S," ","")+";",n,i,p-2,c),c);break;case 59:S+=";";default:if(Gl(k=Nv(S,e,i,d,u,r,l,v,h=[],x=[],p,o),o),b===123)if(u===0)ih(S,e,k,k,h,o,p,l,x);else switch(f===99&&St(S,3)===110?100:f){case 100:case 108:case 109:case 115:ih(t,k,k,n&&Gl(Nv(t,k,k,0,0,r,l,v,r,h=[],p,x),x),r,x,p,l,n?h:x);break;default:ih(S,k,k,k,[""],x,0,l,x)}}d=u=g=0,w=j=1,v=S="",p=s;break;case 58:p=1+Rn(S),g=y;default:if(w<1){if(b==123)--w;else if(b==125&&w++==0&&T6()==125)continue}switch(S+=r1(b),b*w){case 38:j=u>0?1:(S+="\f",-1);break;case 44:l[d++]=(Rn(S)-1)*j,j=1;break;case 64:ds()===45&&(S+=Lf(Dn())),f=ds(),u=p=Rn(v=S+=F6(th())),b++;break;case 45:y===45&&Rn(S)==2&&(w=0)}}return o}function Nv(t,e,i,n,r,o,s,l,c,d,u,p){for(var f=r-1,g=r===0?o:[""],y=CS(g),w=0,D=0,j=0;w<n;++w)for(var b=0,v=Za(t,f+1,f=DS(D=s[w])),h=t;b<y;++b)(h=_S(D>0?g[b]+" "+v:re(v,/&\f/g,g[b])))&&(c[j++]=h);return $p(t,e,i,r===0?Np:l,c,d,u,p)}function L6(t,e,i,n){return $p(t,e,i,jS,r1(P6()),Za(t,2,-2),0,n)}function Ov(t,e,i,n,r){return $p(t,e,i,n1,Za(t,0,n),Za(t,n+1,-1),n,r)}function TS(t,e,i){switch(_6(t,e)){case 5103:return be+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return be+t+t;case 4789:return hc+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return be+t+hc+t+Ae+t+t;case 5936:switch(St(t,e+11)){case 114:return be+t+Ae+re(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return be+t+Ae+re(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return be+t+Ae+re(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return be+t+Ae+t+t;case 6165:return be+t+Ae+"flex-"+t+t;case 5187:return be+t+re(t,/(\w+).+(:[^]+)/,be+"box-$1$2"+Ae+"flex-$1$2")+t;case 5443:return be+t+Ae+"flex-item-"+re(t,/flex-|-self/g,"")+(or(t,/flex-|baseline/)?"":Ae+"grid-row-"+re(t,/flex-|-self/g,""))+t;case 4675:return be+t+Ae+"flex-line-pack"+re(t,/align-content|flex-|-self/g,"")+t;case 5548:return be+t+Ae+re(t,"shrink","negative")+t;case 5292:return be+t+Ae+re(t,"basis","preferred-size")+t;case 6060:return be+"box-"+re(t,"-grow","")+be+t+Ae+re(t,"grow","positive")+t;case 4554:return be+re(t,/([^-])(transform)/g,"$1"+be+"$2")+t;case 6187:return re(re(re(t,/(zoom-|grab)/,be+"$1"),/(image-set)/,be+"$1"),t,"")+t;case 5495:case 3959:return re(t,/(image-set\([^]*)/,be+"$1$`$1");case 4968:return re(re(t,/(.+:)(flex-)?(.*)/,be+"box-pack:$3"+Ae+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+be+t+t;case 4200:if(!or(t,/flex-|baseline/))return Ae+"grid-column-align"+Za(t,e)+t;break;case 2592:case 3360:return Ae+re(t,"template-","")+t;case 4384:case 3616:return i&&i.some(function(n,r){return e=r,or(n.props,/grid-\w+-end/)})?~eh(t+(i=i[e].value),"span",0)?t:Ae+re(t,"-start","")+t+Ae+"grid-row-span:"+(~eh(i,"span",0)?or(i,/\d+/):+or(i,/\d+/)-+or(t,/\d+/))+";":Ae+re(t,"-start","")+t;case 4896:case 4128:return i&&i.some(function(n){return or(n.props,/grid-\w+-start/)})?t:Ae+re(re(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return re(t,/(.+)-inline(.+)/,be+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rn(t)-1-e>6)switch(St(t,e+1)){case 109:if(St(t,e+4)!==45)break;case 102:return re(t,/(.+:)(.+)-([^]+)/,"$1"+be+"$2-$3$1"+hc+(St(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~eh(t,"stretch",0)?TS(re(t,"stretch","fill-available"),e,i)+t:t}break;case 5152:case 5920:return re(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,r,o,s,l,c,d){return Ae+r+":"+o+d+(s?Ae+r+"-span:"+(l?c:+c-+o)+d:"")+t});case 4949:if(St(t,e+6)===121)return re(t,":",":"+be)+t;break;case 6444:switch(St(t,St(t,14)===45?18:11)){case 120:return re(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+be+(St(t,14)===45?"inline-":"")+"box$3$1"+be+"$2$3$1"+Ae+"$2box$3")+t;case 100:return re(t,":",":"+Ae)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return re(t,"scroll-","scroll-snap-")+t}return t}function Hh(t,e){for(var i="",n=0;n<t.length;n++)i+=e(t[n],n,t,e)||"";return i}function N6(t,e,i,n){switch(t.type){case D6:if(t.children.length)break;case S6:case n1:return t.return=t.return||t.value;case jS:return"";case SS:return t.return=t.value+"{"+Hh(t.children,n)+"}";case Np:if(!Rn(t.value=t.props.join(",")))return""}return Rn(i=Hh(t.children,n))?t.return=t.value+"{"+i+"}":""}function O6(t){var e=CS(t);return function(i,n,r,o){for(var s="",l=0;l<e;l++)s+=t[l](i,n,r,o)||"";return s}}function $6(t){return function(e){e.root||(e=e.return)&&t(e)}}function B6(t,e,i,n){if(t.length>-1&&!t.return)switch(t.type){case n1:t.return=TS(t.value,t.length,i);return;case SS:return Hh([Rr(t,{value:re(t.value,"@","@"+be)})],n);case Np:if(t.length)return C6(i=t.props,function(r){switch(or(r,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Hs(Rr(t,{props:[re(r,/:(read-\w+)/,":"+hc+"$1")]})),Hs(Rr(t,{props:[r]})),eg(t,{props:Lv(i,n)});break;case"::placeholder":Hs(Rr(t,{props:[re(r,/:(plac\w+)/,":"+be+"input-$1")]})),Hs(Rr(t,{props:[re(r,/:(plac\w+)/,":"+hc+"$1")]})),Hs(Rr(t,{props:[re(r,/:(plac\w+)/,Ae+"input-$1")]})),Hs(Rr(t,{props:[r]})),eg(t,{props:Lv(i,n)});break}return""})}}var V6={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Qa=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ES="active",IS="data-styled-version",Vp="6.1.19",o1=`/*!sc*/
`,Yh=typeof window<"u"&&typeof document<"u",W6=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),U6={},Wp=Object.freeze([]),Ka=Object.freeze({});function AS(t,e,i){return i===void 0&&(i=Ka),t.theme!==i.theme&&t.theme||e||i.theme}var MS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),H6=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Y6=/(^-|-$)/g;function $v(t){return t.replace(H6,"-").replace(Y6,"")}var G6=/(a)(d)/gi,Gd=52,Bv=function(t){return String.fromCharCode(t+(t>25?39:97))};function ng(t){var e,i="";for(e=Math.abs(t);e>Gd;e=e/Gd|0)i=Bv(e%Gd)+i;return(Bv(e%Gd)+i).replace(G6,"$1-$2")}var Nf,zS=5381,xa=function(t,e){for(var i=e.length;i;)t=33*t^e.charCodeAt(--i);return t},FS=function(t){return xa(zS,t)};function s1(t){return ng(FS(t)>>>0)}function X6(t){return t.displayName||t.name||"Component"}function Of(t){return typeof t=="string"&&!0}var RS=typeof Symbol=="function"&&Symbol.for,LS=RS?Symbol.for("react.memo"):60115,Z6=RS?Symbol.for("react.forward_ref"):60112,q6={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Q6={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},NS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},K6=((Nf={})[Z6]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Nf[LS]=NS,Nf);function Vv(t){return("type"in(e=t)&&e.type.$$typeof)===LS?NS:"$$typeof"in t?K6[t.$$typeof]:q6;var e}var J6=Object.defineProperty,eP=Object.getOwnPropertyNames,Wv=Object.getOwnPropertySymbols,tP=Object.getOwnPropertyDescriptor,iP=Object.getPrototypeOf,Uv=Object.prototype;function OS(t,e,i){if(typeof e!="string"){if(Uv){var n=iP(e);n&&n!==Uv&&OS(t,n,i)}var r=eP(e);Wv&&(r=r.concat(Wv(e)));for(var o=Vv(t),s=Vv(e),l=0;l<r.length;++l){var c=r[l];if(!(c in Q6||i&&i[c]||s&&c in s||o&&c in o)){var d=tP(e,c);try{J6(t,c,d)}catch{}}}}return t}function Ss(t){return typeof t=="function"}function a1(t){return typeof t=="object"&&"styledComponentId"in t}function is(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Gh(t,e){if(t.length===0)return"";for(var i=t[0],n=1;n<t.length;n++)i+=e?e+t[n]:t[n];return i}function Jc(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function rg(t,e,i){if(i===void 0&&(i=!1),!i&&!Jc(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=rg(t[n],e[n]);else if(Jc(e))for(var n in e)t[n]=rg(t[n],e[n]);return t}function l1(t,e){Object.defineProperty(t,"toString",{value:e})}function Ds(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var nP=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var i=0,n=0;n<e;n++)i+=this.groupSizes[n];return i},t.prototype.insertRules=function(e,i){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw Ds(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(e+1),c=(s=0,i.length);s<c;s++)this.tag.insertRule(l,i[s])&&(this.groupSizes[e]++,l++)},t.prototype.clearGroup=function(e){if(e<this.length){var i=this.groupSizes[e],n=this.indexOfGroup(e),r=n+i;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var i="";if(e>=this.length||this.groupSizes[e]===0)return i;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)i+="".concat(this.tag.getRule(s)).concat(o1);return i},t}(),nh=new Map,Xh=new Map,rh=1,Xd=function(t){if(nh.has(t))return nh.get(t);for(;Xh.has(rh);)rh++;var e=rh++;return nh.set(t,e),Xh.set(e,t),e},rP=function(t,e){rh=e+1,nh.set(t,e),Xh.set(e,t)},oP="style[".concat(Qa,"][").concat(IS,'="').concat(Vp,'"]'),sP=new RegExp("^".concat(Qa,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),aP=function(t,e,i){for(var n,r=i.split(","),o=0,s=r.length;o<s;o++)(n=r[o])&&t.registerName(e,n)},lP=function(t,e){for(var i,n=((i=e.textContent)!==null&&i!==void 0?i:"").split(o1),r=[],o=0,s=n.length;o<s;o++){var l=n[o].trim();if(l){var c=l.match(sP);if(c){var d=0|parseInt(c[1],10),u=c[2];d!==0&&(rP(u,d),aP(t,u,c[3]),t.getTag().insertRules(d,r)),r.length=0}else r.push(l)}}},Hv=function(t){for(var e=document.querySelectorAll(oP),i=0,n=e.length;i<n;i++){var r=e[i];r&&r.getAttribute(Qa)!==ES&&(lP(t,r),r.parentNode&&r.parentNode.removeChild(r))}};function cP(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $S=function(t){var e=document.head,i=t||e,n=document.createElement("style"),r=function(l){var c=Array.from(l.querySelectorAll("style[".concat(Qa,"]")));return c[c.length-1]}(i),o=r!==void 0?r.nextSibling:null;n.setAttribute(Qa,ES),n.setAttribute(IS,Vp);var s=cP();return s&&n.setAttribute("nonce",s),i.insertBefore(n,o),n},dP=function(){function t(e){this.element=$S(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var n=document.styleSheets,r=0,o=n.length;r<o;r++){var s=n[r];if(s.ownerNode===i)return s}throw Ds(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,i){try{return this.sheet.insertRule(i,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var i=this.sheet.cssRules[e];return i&&i.cssText?i.cssText:""},t}(),uP=function(){function t(e){this.element=$S(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,i){if(e<=this.length&&e>=0){var n=document.createTextNode(i);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),hP=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,i){return e<=this.length&&(this.rules.splice(e,0,i),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Yv=Yh,pP={isServer:!Yh,useCSSOMInjection:!W6},Zh=function(){function t(e,i,n){e===void 0&&(e=Ka),i===void 0&&(i={});var r=this;this.options=Dt(Dt({},pP),e),this.gs=i,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Yh&&Yv&&(Yv=!1,Hv(this)),l1(this,function(){return function(o){for(var s=o.getTag(),l=s.length,c="",d=function(p){var f=function(j){return Xh.get(j)}(p);if(f===void 0)return"continue";var g=o.names.get(f),y=s.getGroup(p);if(g===void 0||!g.size||y.length===0)return"continue";var w="".concat(Qa,".g").concat(p,'[id="').concat(f,'"]'),D="";g!==void 0&&g.forEach(function(j){j.length>0&&(D+="".concat(j,","))}),c+="".concat(y).concat(w,'{content:"').concat(D,'"}').concat(o1)},u=0;u<l;u++)d(u);return c}(r)})}return t.registerId=function(e){return Xd(e)},t.prototype.rehydrate=function(){!this.server&&Yh&&Hv(this)},t.prototype.reconstructWithOptions=function(e,i){return i===void 0&&(i=!0),new t(Dt(Dt({},this.options),e),this.gs,i&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(i){var n=i.useCSSOMInjection,r=i.target;return i.isServer?new hP(r):n?new dP(r):new uP(r)}(this.options),new nP(e)));var e},t.prototype.hasNameForId=function(e,i){return this.names.has(e)&&this.names.get(e).has(i)},t.prototype.registerName=function(e,i){if(Xd(e),this.names.has(e))this.names.get(e).add(i);else{var n=new Set;n.add(i),this.names.set(e,n)}},t.prototype.insertRules=function(e,i,n){this.registerName(e,i),this.getTag().insertRules(Xd(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Xd(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),fP=/&/g,mP=/^\s*\/\/.*$/gm;function BS(t,e){return t.map(function(i){return i.type==="rule"&&(i.value="".concat(e," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(e," ")),i.props=i.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=BS(i.children,e)),i})}function gP(t){var e,i,n,r=t===void 0?Ka:t,o=r.options,s=o===void 0?Ka:o,l=r.plugins,c=l===void 0?Wp:l,d=function(f,g,y){return y.startsWith(i)&&y.endsWith(i)&&y.replaceAll(i,"").length>0?".".concat(e):f},u=c.slice();u.push(function(f){f.type===Np&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(fP,i).replace(n,d))}),s.prefix&&u.push(B6),u.push(N6);var p=function(f,g,y,w){g===void 0&&(g=""),y===void 0&&(y=""),w===void 0&&(w="&"),e=w,i=g,n=new RegExp("\\".concat(i,"\\b"),"g");var D=f.replace(mP,""),j=R6(y||g?"".concat(y," ").concat(g," { ").concat(D," }"):D);s.namespace&&(j=BS(j,s.namespace));var b=[];return Hh(j,O6(u.concat($6(function(v){return b.push(v)})))),b};return p.hash=c.length?c.reduce(function(f,g){return g.name||Ds(15),xa(f,g.name)},zS).toString():"",p}var xP=new Zh,og=gP(),VS=q.createContext({shouldForwardProp:void 0,styleSheet:xP,stylis:og});VS.Consumer;q.createContext(void 0);function sg(){return T.useContext(VS)}var WS=function(){function t(e,i){var n=this;this.inject=function(r,o){o===void 0&&(o=og);var s=n.name+o.hash;r.hasNameForId(n.id,s)||r.insertRules(n.id,s,o(n.rules,s,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=i,l1(this,function(){throw Ds(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=og),this.name+e.hash},t}(),wP=function(t){return t>="A"&&t<="Z"};function Gv(t){for(var e="",i=0;i<t.length;i++){var n=t[i];if(i===1&&n==="-"&&t[0]==="-")return t;wP(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var US=function(t){return t==null||t===!1||t===""},HS=function(t){var e,i,n=[];for(var r in t){var o=t[r];t.hasOwnProperty(r)&&!US(o)&&(Array.isArray(o)&&o.isCss||Ss(o)?n.push("".concat(Gv(r),":"),o,";"):Jc(o)?n.push.apply(n,Xa(Xa(["".concat(r," {")],HS(o),!1),["}"],!1)):n.push("".concat(Gv(r),": ").concat((e=r,(i=o)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||e in V6||e.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return n};function lo(t,e,i,n){if(US(t))return[];if(a1(t))return[".".concat(t.styledComponentId)];if(Ss(t)){if(!Ss(o=t)||o.prototype&&o.prototype.isReactComponent||!e)return[t];var r=t(e);return lo(r,e,i,n)}var o;return t instanceof WS?i?(t.inject(i,n),[t.getName(n)]):[t]:Jc(t)?HS(t):Array.isArray(t)?Array.prototype.concat.apply(Wp,t.map(function(s){return lo(s,e,i,n)})):[t.toString()]}function YS(t){for(var e=0;e<t.length;e+=1){var i=t[e];if(Ss(i)&&!a1(i))return!1}return!0}var vP=FS(Vp),yP=function(){function t(e,i,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&YS(e),this.componentId=i,this.baseHash=xa(vP,i),this.baseStyle=n,Zh.registerId(i)}return t.prototype.generateAndInjectStyles=function(e,i,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,i,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))r=is(r,this.staticRulesId);else{var o=Gh(lo(this.rules,e,i,n)),s=ng(xa(this.baseHash,o)>>>0);if(!i.hasNameForId(this.componentId,s)){var l=n(o,".".concat(s),void 0,this.componentId);i.insertRules(this.componentId,s,l)}r=is(r,s),this.staticRulesId=s}else{for(var c=xa(this.baseHash,n.hash),d="",u=0;u<this.rules.length;u++){var p=this.rules[u];if(typeof p=="string")d+=p;else if(p){var f=Gh(lo(p,e,i,n));c=xa(c,f+u),d+=f}}if(d){var g=ng(c>>>0);i.hasNameForId(this.componentId,g)||i.insertRules(this.componentId,g,n(d,".".concat(g),void 0,this.componentId)),r=is(r,g)}}return r},t}(),Ja=q.createContext(void 0);Ja.Consumer;function bP(t){var e=q.useContext(Ja),i=T.useMemo(function(){return function(n,r){if(!n)throw Ds(14);if(Ss(n)){var o=n(r);return o}if(Array.isArray(n)||typeof n!="object")throw Ds(8);return r?Dt(Dt({},r),n):n}(t.theme,e)},[t.theme,e]);return t.children?q.createElement(Ja.Provider,{value:i},t.children):null}var $f={};function kP(t,e,i){var n=a1(t),r=t,o=!Of(t),s=e.attrs,l=s===void 0?Wp:s,c=e.componentId,d=c===void 0?function(h,x){var k=typeof h!="string"?"sc":$v(h);$f[k]=($f[k]||0)+1;var S="".concat(k,"-").concat(s1(Vp+k+$f[k]));return x?"".concat(x,"-").concat(S):S}(e.displayName,e.parentComponentId):c,u=e.displayName,p=u===void 0?function(h){return Of(h)?"styled.".concat(h):"Styled(".concat(X6(h),")")}(t):u,f=e.displayName&&e.componentId?"".concat($v(e.displayName),"-").concat(e.componentId):e.componentId||d,g=n&&r.attrs?r.attrs.concat(l).filter(Boolean):l,y=e.shouldForwardProp;if(n&&r.shouldForwardProp){var w=r.shouldForwardProp;if(e.shouldForwardProp){var D=e.shouldForwardProp;y=function(h,x){return w(h,x)&&D(h,x)}}else y=w}var j=new yP(i,f,n?r.componentStyle:void 0);function b(h,x){return function(k,S,_){var C=k.attrs,E=k.componentStyle,z=k.defaultProps,A=k.foldedComponentIds,N=k.styledComponentId,O=k.target,W=q.useContext(Ja),V=sg(),$=k.shouldForwardProp||V.shouldForwardProp,I=AS(S,W,z)||Ka,M=function(fe,ue,me){for(var Ne,Se=Dt(Dt({},ue),{className:void 0,theme:me}),Pt=0;Pt<fe.length;Pt+=1){var De=Ss(Ne=fe[Pt])?Ne(Se):Ne;for(var ze in De)Se[ze]=ze==="className"?is(Se[ze],De[ze]):ze==="style"?Dt(Dt({},Se[ze]),De[ze]):De[ze]}return ue.className&&(Se.className=is(Se.className,ue.className)),Se}(C,S,I),P=M.as||O,R={};for(var U in M)M[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&M.theme===I||(U==="forwardedAs"?R.as=M.forwardedAs:$&&!$(U,P)||(R[U]=M[U]));var ne=function(fe,ue){var me=sg(),Ne=fe.generateAndInjectStyles(ue,me.styleSheet,me.stylis);return Ne}(E,M),Z=is(A,N);return ne&&(Z+=" "+ne),M.className&&(Z+=" "+M.className),R[Of(P)&&!MS.has(P)?"class":"className"]=Z,_&&(R.ref=_),T.createElement(P,R)}(v,h,x)}b.displayName=p;var v=q.forwardRef(b);return v.attrs=g,v.componentStyle=j,v.displayName=p,v.shouldForwardProp=y,v.foldedComponentIds=n?is(r.foldedComponentIds,r.styledComponentId):"",v.styledComponentId=f,v.target=n?r.target:t,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=n?function(x){for(var k=[],S=1;S<arguments.length;S++)k[S-1]=arguments[S];for(var _=0,C=k;_<C.length;_++)rg(x,C[_],!0);return x}({},r.defaultProps,h):h}}),l1(v,function(){return".".concat(v.styledComponentId)}),o&&OS(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Xv(t,e){for(var i=[t[0]],n=0,r=e.length;n<r;n+=1)i.push(e[n],t[n+1]);return i}var Zv=function(t){return Object.assign(t,{isCss:!0})};function c1(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(Ss(t)||Jc(t))return Zv(lo(Xv(Wp,Xa([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?lo(n):Zv(lo(Xv(n,e)))}function ag(t,e,i){if(i===void 0&&(i=Ka),!e)throw Ds(1,e);var n=function(r){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return t(e,i,c1.apply(void 0,Xa([r],o,!1)))};return n.attrs=function(r){return ag(t,e,Dt(Dt({},i),{attrs:Array.prototype.concat(i.attrs,r).filter(Boolean)}))},n.withConfig=function(r){return ag(t,e,Dt(Dt({},i),r))},n}var GS=function(t){return ag(kP,t)},m=GS;MS.forEach(function(t){m[t]=GS(t)});var jP=function(){function t(e,i){this.rules=e,this.componentId=i,this.isStatic=YS(e),Zh.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,i,n,r){var o=r(Gh(lo(this.rules,i,n,r)),""),s=this.componentId+e;n.insertRules(s,s,o)},t.prototype.removeStyles=function(e,i){i.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,i,n,r){e>2&&Zh.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,i,n,r)},t}();function _r(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];var n=c1.apply(void 0,Xa([t],e,!1)),r="sc-global-".concat(s1(JSON.stringify(n))),o=new jP(n,r),s=function(c){var d=sg(),u=q.useContext(Ja),p=q.useRef(d.styleSheet.allocateGSInstance(r)).current;return d.styleSheet.server&&l(p,c,d.styleSheet,u,d.stylis),q.useLayoutEffect(function(){if(!d.styleSheet.server)return l(p,c,d.styleSheet,u,d.stylis),function(){return o.removeStyles(p,d.styleSheet)}},[p,c,d.styleSheet,u,d.stylis]),null};function l(c,d,u,p,f){if(o.isStatic)o.renderStyles(c,U6,u,f);else{var g=Dt(Dt({},d),{theme:AS(d,p,s.defaultProps)});o.renderStyles(c,g,u,f)}}return q.memo(s)}function fl(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];var n=Gh(c1.apply(void 0,Xa([t],e,!1))),r=s1(n);return new WS(r,n)}const SP={background:"#191c24",backgroundRgb:"25, 28, 36",text:"#ffffff",textRgb:"255, 255, 255",accent1:"#4CAF50",accent1Rgb:"76, 175, 80",accent2:"#2196F3",accent2Rgb:"33, 150, 243",cardBackground:"#2a2f3a",cardBackgroundRgb:"42, 47, 58",headerBackground:"rgba(25, 28, 36, 0.9)",transition:"all 0.3s ease",border:"#3a3f4a"},DP=T.createContext(void 0),_P=({children:t})=>a.jsx(DP.Provider,{value:{},children:a.jsx(bP,{theme:SP,children:t})}),CP="/Nooshin-Shahsavan-portfolio/assets/logoweb.29eb1c09.png",PP=m.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #fff;
  padding: 1rem 0;
  box-shadow: none;
`,TP=m.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`,EP=m(yn)`
  font-size: 1.7rem;
  font-weight: 700;
  color: #181818;
  text-decoration: none;
`,IP=m.img`
  height: 40px;
  width: auto;
  display: block;
`,AP=m.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`,Zd=m(yn)`
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
`,MP=m.button`
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
`,Bf=m.span`
  width: 28px;
  height: 3px;
  background: #000;
  margin: 3px 0;
  border-radius: 2px;
  transition: 0.4s;
`,zP=m.div`
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
`,qd=m(yn)`
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
`,FP=m.button`
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
`,RP=m.div`
  display: ${({open:t})=>t?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.35);
  z-index: 1199;
`,XS=()=>{const[t,e]=T.useState(!1),i=()=>e(r=>!r),n=()=>e(!1);return a.jsx(PP,{children:a.jsxs(TP,{children:[a.jsx(EP,{to:"/",children:a.jsx(IP,{src:CP,alt:"Logo"})}),a.jsxs(AP,{children:[a.jsx(Zd,{to:"/",children:"Home"}),a.jsx(Zd,{to:"/about",children:"About"}),a.jsx(Zd,{to:"/work",children:"Work"}),a.jsx(Zd,{to:"/resume",children:"Resume"})]}),a.jsxs(MP,{"aria-label":"Open menu",onClick:i,children:[a.jsx(Bf,{style:{transform:t?"rotate(45deg) translate(5px, 6px)":"none"}}),a.jsx(Bf,{style:{opacity:t?0:1}}),a.jsx(Bf,{style:{transform:t?"rotate(-45deg) translate(7px, -7px)":"none"}})]}),a.jsx(RP,{open:t,onClick:n}),a.jsxs(zP,{open:t,children:[a.jsx(FP,{"aria-label":"Close menu",onClick:n,children:"×"}),a.jsx(qd,{to:"/",onClick:n,style:{"--delay":"0.1s"},children:"Home"}),a.jsx(qd,{to:"/about",onClick:n,style:{"--delay":"0.25s"},children:"About"}),a.jsx(qd,{to:"/work",onClick:n,style:{"--delay":"0.4s"},children:"Work"}),a.jsx(qd,{to:"/resume",onClick:n,style:{"--delay":"0.55s"},children:"Resume"})]})]})})},LP=_r`
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
`,NP=m.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--background);
`,OP=m.main`
  flex: 1;
  width: 100%;
  padding-top: 80px; // Account for fixed header
  background-color: var(--background);
`,$P=({children:t})=>a.jsxs(NP,{children:[a.jsxs(kS,{children:[a.jsx("link",{rel:"icon",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDQtMTBUMTU6NTY6NDcrMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDQtMTBUMTU6NTY6NDcrMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTA0LTEwVDE1OjU2OjQ3KzA0OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgc3RFdnQ6d2hlbj0iMjAyNC0wNC0xMFQxNTo1Njo0NyswNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FAZTgBw54cr/upn/vCptEQA0xCMxM4ZGxI9cmQcA5sJgCsBJTjiletnMD6MqAFmyI04+Hbo7cQ8A0GYMpgDM2cxJ1cvi+Fuql4X3VAFYmP0xPYL+KKZHUSdDAYAkDKYANMzMadXL4vgTAIZVgPw5NoS+8cOboQBAlhlMAUjulBOrJ46sAGTXjojYHcffCn3SiVAAoB0YTAFoKSeMq8d+rArvrALUyyMxPYLuDiMoAJBTBlMA2trMswAXx/Tp1SVxfGj1NADQ7k68Cv96TA+gL/hIEgDA2RlMAeAUJ4ysl0XEQEy/vzoQngkA0nlh5ofxEwCgwQymAFAnJzwXcGxwXXXCf784YRqQDcdGz2NX3o/9d9feAQAyxGAKABlxwuAaMf2EQMz88ZIwukJqx8bO12P6lGfE9CnPCIMnAEBbMZgCQBs6ZXw99rRAxPTzAhGeGKD97YiIYyPmj2b+czSOj52uswMAcFoGUwBgzsql6okj7JI4eXw9dir2xD/2kS0ijn+E6JjXT/njY1fUIyJiaHjw4QAAgCYzmAIALa9cqq4/y18+21875tSRd66uWsA/e6JHFvDPnjo+nskZR0gDJQAARPz/FWHRF6/F5pIAAAAASUVORK5CYII="}),a.jsx("link",{rel:"icon",href:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OWI0LCAyMDIyLzA2LzEzLTIyOjAxOjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjQuMCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMDQtMTBUMTU6NTY6NDcrMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMDQtMTBUMTU6NTY6NDcrMDQ6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTA0LTEwVDE1OjU2OjQ3KzA0OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjY5ZDM4YmM1LTM4ZTAtNDI0Ny1hMzBkLTNmYjQ5NzM3NzM0YyIgc3RFdnQ6d2hlbj0iMjAyNC0wNC0xMFQxNTo1Njo0NyswNDowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjAgKE1hY2ludG9zaCkiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FAZTgBw54cr/upn/vCptEQA0xCMxM4ZGxI9cmQcA5sJgCsBJTjiletnMD6MqAFmyI04+Hbo7cQ8A0GYMpgDM2cxJ1cvi+Fuql4X3VAFYmP0xPYL+KKZHUSdDAYAkDKYANMzMadXL4vgTAIZVgPw5NoS+8cOboQBAlhlMAUjulBOrJ46sAGTXjojYHcffCn3SiVAAoB0YTAFoKSeMq8d+rArvrALUyyMxPYLuDiMoAJBTBlMA2trMswAXx/Tp1SVxfGj1NADQ7k68Cv96TA+gL/hIEgDA2RlMAeAUJ4ysl0XEQEy/vzoQngkA0nlh5ofxEwCgwQymAFAnJzwXcGxwXXXCf784YRqQDcdGz2NX3o/9d9feAQAyxGAKABlxwuAaMf2EQMz88ZIwukJqx8bO12P6lGfE9CnPCIMnAEBbMZgCQBs6ZXw99rRAxPTzAhGeGKD97YiIYyPmj2b+czSOj52uswMAcFoGUwBgzsql6okj7JI4eXw9dir2xD/2kS0ijn+E6JjXT/njY1fUIyJiaHjw4QAAgCYzmAIALa9cqq4/y18+21875tSRd66uWsA/e6JHFvDPnjo+nskZR0gDJQAARPz/FWHRF6/F5pIAAAAASUVORK5CYII="}),a.jsx("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"}),a.jsx("link",{rel:"shortcut icon",href:"/favicon.ico"})]}),a.jsx(LP,{}),a.jsx(XS,{}),a.jsx(OP,{children:t})]}),d1=T.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Up=T.createContext({}),Hp=T.createContext(null),Yp=typeof document<"u",ml=Yp?T.useLayoutEffect:T.useEffect,ZS=T.createContext({strict:!1}),u1=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),BP="framerAppearId",qS="data-"+u1(BP);function VP(t,e,i,n){const{visualElement:r}=T.useContext(Up),o=T.useContext(ZS),s=T.useContext(Hp),l=T.useContext(d1).reducedMotion,c=T.useRef();n=n||o.renderer,!c.current&&n&&(c.current=n(t,{visualState:e,parent:r,props:i,presenceContext:s,blockInitialAnimation:s?s.initial===!1:!1,reducedMotionConfig:l}));const d=c.current;T.useInsertionEffect(()=>{d&&d.update(i,s)});const u=T.useRef(!!(i[qS]&&!window.HandoffComplete));return ml(()=>{d&&(d.render(),u.current&&d.animationState&&d.animationState.animateChanges())}),T.useEffect(()=>{d&&(d.updateFeatures(),!u.current&&d.animationState&&d.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),d}function wa(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function WP(t,e,i){return T.useCallback(n=>{n&&t.mount&&t.mount(n),e&&(n?e.mount(n):e.unmount()),i&&(typeof i=="function"?i(n):wa(i)&&(i.current=n))},[e])}function ed(t){return typeof t=="string"||Array.isArray(t)}function Gp(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const h1=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],p1=["initial",...h1];function Xp(t){return Gp(t.animate)||p1.some(e=>ed(t[e]))}function QS(t){return!!(Xp(t)||t.variants)}function UP(t,e){if(Xp(t)){const{initial:i,animate:n}=t;return{initial:i===!1||ed(i)?i:void 0,animate:ed(n)?n:void 0}}return t.inherit!==!1?e:{}}function HP(t){const{initial:e,animate:i}=UP(t,T.useContext(Up));return T.useMemo(()=>({initial:e,animate:i}),[qv(e),qv(i)])}function qv(t){return Array.isArray(t)?t.join(" "):t}const Qv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},td={};for(const t in Qv)td[t]={isEnabled:e=>Qv[t].some(i=>!!e[i])};function YP(t){for(const e in t)td[e]={...td[e],...t[e]}}const f1=T.createContext({}),KS=T.createContext({}),GP=Symbol.for("motionComponentSymbol");function XP({preloadedFeatures:t,createVisualElement:e,useRender:i,useVisualState:n,Component:r}){t&&YP(t);function o(l,c){let d;const u={...T.useContext(d1),...l,layoutId:ZP(l)},{isStatic:p}=u,f=HP(l),g=n(l,p);if(!p&&Yp){f.visualElement=VP(r,g,u,e);const y=T.useContext(KS),w=T.useContext(ZS).strict;f.visualElement&&(d=f.visualElement.loadFeatures(u,w,t,y))}return T.createElement(Up.Provider,{value:f},d&&f.visualElement?T.createElement(d,{visualElement:f.visualElement,...u}):null,i(r,l,WP(g,f.visualElement,c),g,p,f.visualElement))}const s=T.forwardRef(o);return s[GP]=r,s}function ZP({layoutId:t}){const e=T.useContext(f1).id;return e&&t!==void 0?e+"-"+t:t}function qP(t){function e(n,r={}){return XP(t(n,r))}if(typeof Proxy>"u")return e;const i=new Map;return new Proxy(e,{get:(n,r)=>(i.has(r)||i.set(r,e(r)),i.get(r))})}const QP=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function m1(t){return typeof t!="string"||t.includes("-")?!1:!!(QP.indexOf(t)>-1||/[A-Z]/.test(t))}const qh={};function KP(t){Object.assign(qh,t)}const vd=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],zs=new Set(vd);function JS(t,{layout:e,layoutId:i}){return zs.has(t)||t.startsWith("origin")||(e||i!==void 0)&&(!!qh[t]||t==="opacity")}const bi=t=>!!(t&&t.getVelocity),JP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},eT=vd.length;function tT(t,{enableHardwareAcceleration:e=!0,allowTransformNone:i=!0},n,r){let o="";for(let s=0;s<eT;s++){const l=vd[s];if(t[l]!==void 0){const c=JP[l]||l;o+=`${c}(${t[l]}) `}}return e&&!t.z&&(o+="translateZ(0)"),o=o.trim(),r?o=r(t,n?"":o):i&&n&&(o="none"),o}const eD=t=>e=>typeof e=="string"&&e.startsWith(t),tD=eD("--"),lg=eD("var(--"),iT=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,nT=(t,e)=>e&&typeof t=="number"?e.transform(t):t,vo=(t,e,i)=>Math.min(Math.max(i,t),e),Fs={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},pc={...Fs,transform:t=>vo(0,1,t)},Qd={...Fs,default:1},fc=t=>Math.round(t*1e5)/1e5,Zp=/(-)?([\d]*\.?[\d])+/g,iD=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,rT=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function yd(t){return typeof t=="string"}const bd=t=>({test:e=>yd(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Lr=bd("deg"),Un=bd("%"),K=bd("px"),oT=bd("vh"),sT=bd("vw"),Kv={...Un,parse:t=>Un.parse(t)/100,transform:t=>Un.transform(t*100)},Jv={...Fs,transform:Math.round},nD={borderWidth:K,borderTopWidth:K,borderRightWidth:K,borderBottomWidth:K,borderLeftWidth:K,borderRadius:K,radius:K,borderTopLeftRadius:K,borderTopRightRadius:K,borderBottomRightRadius:K,borderBottomLeftRadius:K,width:K,maxWidth:K,height:K,maxHeight:K,size:K,top:K,right:K,bottom:K,left:K,padding:K,paddingTop:K,paddingRight:K,paddingBottom:K,paddingLeft:K,margin:K,marginTop:K,marginRight:K,marginBottom:K,marginLeft:K,rotate:Lr,rotateX:Lr,rotateY:Lr,rotateZ:Lr,scale:Qd,scaleX:Qd,scaleY:Qd,scaleZ:Qd,skew:Lr,skewX:Lr,skewY:Lr,distance:K,translateX:K,translateY:K,translateZ:K,x:K,y:K,z:K,perspective:K,transformPerspective:K,opacity:pc,originX:Kv,originY:Kv,originZ:K,zIndex:Jv,fillOpacity:pc,strokeOpacity:pc,numOctaves:Jv};function g1(t,e,i,n){const{style:r,vars:o,transform:s,transformOrigin:l}=t;let c=!1,d=!1,u=!0;for(const p in e){const f=e[p];if(tD(p)){o[p]=f;continue}const g=nD[p],y=nT(f,g);if(zs.has(p)){if(c=!0,s[p]=y,!u)continue;f!==(g.default||0)&&(u=!1)}else p.startsWith("origin")?(d=!0,l[p]=y):r[p]=y}if(e.transform||(c||n?r.transform=tT(t.transform,i,u,n):r.transform&&(r.transform="none")),d){const{originX:p="50%",originY:f="50%",originZ:g=0}=l;r.transformOrigin=`${p} ${f} ${g}`}}const x1=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function rD(t,e,i){for(const n in e)!bi(e[n])&&!JS(n,i)&&(t[n]=e[n])}function aT({transformTemplate:t},e,i){return T.useMemo(()=>{const n=x1();return g1(n,e,{enableHardwareAcceleration:!i},t),Object.assign({},n.vars,n.style)},[e])}function lT(t,e,i){const n=t.style||{},r={};return rD(r,n,t),Object.assign(r,aT(t,e,i)),t.transformValues?t.transformValues(r):r}function cT(t,e,i){const n={},r=lT(t,e,i);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n}const dT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Qh(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||dT.has(t)}let oD=t=>!Qh(t);function uT(t){t&&(oD=e=>e.startsWith("on")?!Qh(e):t(e))}try{uT(require("@emotion/is-prop-valid").default)}catch{}function hT(t,e,i){const n={};for(const r in t)r==="values"&&typeof t.values=="object"||(oD(r)||i===!0&&Qh(r)||!e&&!Qh(r)||t.draggable&&r.startsWith("onDrag"))&&(n[r]=t[r]);return n}function ey(t,e,i){return typeof t=="string"?t:K.transform(e+i*t)}function pT(t,e,i){const n=ey(e,t.x,t.width),r=ey(i,t.y,t.height);return`${n} ${r}`}const fT={offset:"stroke-dashoffset",array:"stroke-dasharray"},mT={offset:"strokeDashoffset",array:"strokeDasharray"};function gT(t,e,i=1,n=0,r=!0){t.pathLength=1;const o=r?fT:mT;t[o.offset]=K.transform(-n);const s=K.transform(e),l=K.transform(i);t[o.array]=`${s} ${l}`}function w1(t,{attrX:e,attrY:i,attrScale:n,originX:r,originY:o,pathLength:s,pathSpacing:l=1,pathOffset:c=0,...d},u,p,f){if(g1(t,d,u,f),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:g,style:y,dimensions:w}=t;g.transform&&(w&&(y.transform=g.transform),delete g.transform),w&&(r!==void 0||o!==void 0||y.transform)&&(y.transformOrigin=pT(w,r!==void 0?r:.5,o!==void 0?o:.5)),e!==void 0&&(g.x=e),i!==void 0&&(g.y=i),n!==void 0&&(g.scale=n),s!==void 0&&gT(g,s,l,c,!1)}const sD=()=>({...x1(),attrs:{}}),v1=t=>typeof t=="string"&&t.toLowerCase()==="svg";function xT(t,e,i,n){const r=T.useMemo(()=>{const o=sD();return w1(o,e,{enableHardwareAcceleration:!1},v1(n),t.transformTemplate),{...o.attrs,style:{...o.style}}},[e]);if(t.style){const o={};rD(o,t.style,t),r.style={...o,...r.style}}return r}function wT(t=!1){return(i,n,r,{latestValues:o},s)=>{const c=(m1(i)?xT:cT)(n,o,s,i),u={...hT(n,typeof i=="string",t),...c,ref:r},{children:p}=n,f=T.useMemo(()=>bi(p)?p.get():p,[p]);return T.createElement(i,{...u,children:f})}}function aD(t,{style:e,vars:i},n,r){Object.assign(t.style,e,r&&r.getProjectionStyles(n));for(const o in i)t.style.setProperty(o,i[o])}const lD=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function cD(t,e,i,n){aD(t,e,void 0,n);for(const r in e.attrs)t.setAttribute(lD.has(r)?r:u1(r),e.attrs[r])}function y1(t,e){const{style:i}=t,n={};for(const r in i)(bi(i[r])||e.style&&bi(e.style[r])||JS(r,t))&&(n[r]=i[r]);return n}function dD(t,e){const i=y1(t,e);for(const n in t)if(bi(t[n])||bi(e[n])){const r=vd.indexOf(n)!==-1?"attr"+n.charAt(0).toUpperCase()+n.substring(1):n;i[r]=t[n]}return i}function b1(t,e,i,n={},r={}){return typeof e=="function"&&(e=e(i!==void 0?i:t.custom,n,r)),typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"&&(e=e(i!==void 0?i:t.custom,n,r)),e}function gl(t){const e=T.useRef(null);return e.current===null&&(e.current=t()),e.current}const Kh=t=>Array.isArray(t),vT=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),yT=t=>Kh(t)?t[t.length-1]||0:t;function oh(t){const e=bi(t)?t.get():t;return vT(e)?e.toValue():e}function bT({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:i},n,r,o){const s={latestValues:kT(n,r,o,t),renderState:e()};return i&&(s.mount=l=>i(n,l,s)),s}const uD=t=>(e,i)=>{const n=T.useContext(Up),r=T.useContext(Hp),o=()=>bT(t,e,n,r);return i?o():gl(o)};function kT(t,e,i,n){const r={},o=n(t,{});for(const f in o)r[f]=oh(o[f]);let{initial:s,animate:l}=t;const c=Xp(t),d=QS(t);e&&d&&!c&&t.inherit!==!1&&(s===void 0&&(s=e.initial),l===void 0&&(l=e.animate));let u=i?i.initial===!1:!1;u=u||s===!1;const p=u?l:s;return p&&typeof p!="boolean"&&!Gp(p)&&(Array.isArray(p)?p:[p]).forEach(g=>{const y=b1(t,g);if(!y)return;const{transitionEnd:w,transition:D,...j}=y;for(const b in j){let v=j[b];if(Array.isArray(v)){const h=u?v.length-1:0;v=v[h]}v!==null&&(r[b]=v)}for(const b in w)r[b]=w[b]}),r}const qe=t=>t;class ty{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const i=this.order.indexOf(e);i!==-1&&(this.order.splice(i,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}function jT(t){let e=new ty,i=new ty,n=0,r=!1,o=!1;const s=new WeakSet,l={schedule:(c,d=!1,u=!1)=>{const p=u&&r,f=p?e:i;return d&&s.add(c),f.add(c)&&p&&r&&(n=e.order.length),c},cancel:c=>{i.remove(c),s.delete(c)},process:c=>{if(r){o=!0;return}if(r=!0,[e,i]=[i,e],i.clear(),n=e.order.length,n)for(let d=0;d<n;d++){const u=e.order[d];u(c),s.has(u)&&(l.schedule(u),t())}r=!1,o&&(o=!1,l.process(c))}};return l}const Kd=["prepare","read","update","preRender","render","postRender"],ST=40;function DT(t,e){let i=!1,n=!0;const r={delta:0,timestamp:0,isProcessing:!1},o=Kd.reduce((p,f)=>(p[f]=jT(()=>i=!0),p),{}),s=p=>o[p].process(r),l=()=>{const p=performance.now();i=!1,r.delta=n?1e3/60:Math.max(Math.min(p-r.timestamp,ST),1),r.timestamp=p,r.isProcessing=!0,Kd.forEach(s),r.isProcessing=!1,i&&e&&(n=!1,t(l))},c=()=>{i=!0,n=!0,r.isProcessing||t(l)};return{schedule:Kd.reduce((p,f)=>{const g=o[f];return p[f]=(y,w=!1,D=!1)=>(i||c(),g.schedule(y,w,D)),p},{}),cancel:p=>Kd.forEach(f=>o[f].cancel(p)),state:r,steps:o}}const{schedule:ve,cancel:Cn,state:At,steps:Vf}=DT(typeof requestAnimationFrame<"u"?requestAnimationFrame:qe,!0),_T={useVisualState:uD({scrapeMotionValuesFromProps:dD,createRenderState:sD,onMount:(t,e,{renderState:i,latestValues:n})=>{ve.read(()=>{try{i.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{i.dimensions={x:0,y:0,width:0,height:0}}}),ve.render(()=>{w1(i,n,{enableHardwareAcceleration:!1},v1(e.tagName),t.transformTemplate),cD(e,i)})}})},CT={useVisualState:uD({scrapeMotionValuesFromProps:y1,createRenderState:x1})};function PT(t,{forwardMotionProps:e=!1},i,n){return{...m1(t)?_T:CT,preloadedFeatures:i,useRender:wT(e),createVisualElement:n,Component:t}}function pr(t,e,i,n={passive:!0}){return t.addEventListener(e,i,n),()=>t.removeEventListener(e,i)}const hD=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function qp(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const TT=t=>e=>hD(e)&&t(e,qp(e));function gr(t,e,i,n){return pr(t,e,TT(i),n)}const ET=(t,e)=>i=>e(t(i)),co=(...t)=>t.reduce(ET);function pD(t){let e=null;return()=>{const i=()=>{e=null};return e===null?(e=t,i):!1}}const iy=pD("dragHorizontal"),ny=pD("dragVertical");function fD(t){let e=!1;if(t==="y")e=ny();else if(t==="x")e=iy();else{const i=iy(),n=ny();i&&n?e=()=>{i(),n()}:(i&&i(),n&&n())}return e}function mD(){const t=fD(!0);return t?(t(),!1):!0}class Co{constructor(e){this.isMounted=!1,this.node=e}update(){}}function ry(t,e){const i="pointer"+(e?"enter":"leave"),n="onHover"+(e?"Start":"End"),r=(o,s)=>{if(o.pointerType==="touch"||mD())return;const l=t.getProps();t.animationState&&l.whileHover&&t.animationState.setActive("whileHover",e),l[n]&&ve.update(()=>l[n](o,s))};return gr(t.current,i,r,{passive:!t.getProps()[n]})}class IT extends Co{mount(){this.unmount=co(ry(this.node,!0),ry(this.node,!1))}unmount(){}}class AT extends Co{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=co(pr(this.node.current,"focus",()=>this.onFocus()),pr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const gD=(t,e)=>e?t===e?!0:gD(t,e.parentElement):!1;function Wf(t,e){if(!e)return;const i=new PointerEvent("pointer"+t);e(i,qp(i))}class MT extends Co{constructor(){super(...arguments),this.removeStartListeners=qe,this.removeEndListeners=qe,this.removeAccessibleListeners=qe,this.startPointerPress=(e,i)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),o=gr(window,"pointerup",(l,c)=>{if(!this.checkPressEnd())return;const{onTap:d,onTapCancel:u,globalTapTarget:p}=this.node.getProps();ve.update(()=>{!p&&!gD(this.node.current,l.target)?u&&u(l,c):d&&d(l,c)})},{passive:!(n.onTap||n.onPointerUp)}),s=gr(window,"pointercancel",(l,c)=>this.cancelPress(l,c),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=co(o,s),this.startPress(e,i)},this.startAccessiblePress=()=>{const e=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=l=>{l.key!=="Enter"||!this.checkPressEnd()||Wf("up",(c,d)=>{const{onTap:u}=this.node.getProps();u&&ve.update(()=>u(c,d))})};this.removeEndListeners(),this.removeEndListeners=pr(this.node.current,"keyup",s),Wf("down",(l,c)=>{this.startPress(l,c)})},i=pr(this.node.current,"keydown",e),n=()=>{this.isPressing&&Wf("cancel",(o,s)=>this.cancelPress(o,s))},r=pr(this.node.current,"blur",n);this.removeAccessibleListeners=co(i,r)}}startPress(e,i){this.isPressing=!0;const{onTapStart:n,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&ve.update(()=>n(e,i))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!mD()}cancelPress(e,i){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&ve.update(()=>n(e,i))}mount(){const e=this.node.getProps(),i=gr(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=pr(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=co(i,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const cg=new WeakMap,Uf=new WeakMap,zT=t=>{const e=cg.get(t.target);e&&e(t)},FT=t=>{t.forEach(zT)};function RT({root:t,...e}){const i=t||document;Uf.has(i)||Uf.set(i,{});const n=Uf.get(i),r=JSON.stringify(e);return n[r]||(n[r]=new IntersectionObserver(FT,{root:t,...e})),n[r]}function LT(t,e,i){const n=RT(e);return cg.set(t,i),n.observe(t),()=>{cg.delete(t),n.unobserve(t)}}const NT={some:0,all:1};class OT extends Co{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:i,margin:n,amount:r="some",once:o}=e,s={root:i?i.current:void 0,rootMargin:n,threshold:typeof r=="number"?r:NT[r]},l=c=>{const{isIntersecting:d}=c;if(this.isInView===d||(this.isInView=d,o&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:u,onViewportLeave:p}=this.node.getProps(),f=d?u:p;f&&f(c)};return LT(this.node.current,s,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:i}=this.node;["amount","margin","root"].some($T(e,i))&&this.startObserver()}unmount(){}}function $T({viewport:t={}},{viewport:e={}}={}){return i=>t[i]!==e[i]}const BT={inView:{Feature:OT},tap:{Feature:MT},focus:{Feature:AT},hover:{Feature:IT}};function xD(t,e){if(!Array.isArray(e))return!1;const i=e.length;if(i!==t.length)return!1;for(let n=0;n<i;n++)if(e[n]!==t[n])return!1;return!0}function VT(t){const e={};return t.values.forEach((i,n)=>e[n]=i.get()),e}function WT(t){const e={};return t.values.forEach((i,n)=>e[n]=i.getVelocity()),e}function Qp(t,e,i){const n=t.getProps();return b1(n,e,i!==void 0?i:n.custom,VT(t),WT(t))}let wD=qe,Kp=qe;const uo=t=>t*1e3,xr=t=>t/1e3,UT={current:!1},vD=t=>Array.isArray(t)&&typeof t[0]=="number";function yD(t){return!!(!t||typeof t=="string"&&bD[t]||vD(t)||Array.isArray(t)&&t.every(yD))}const Xl=([t,e,i,n])=>`cubic-bezier(${t}, ${e}, ${i}, ${n})`,bD={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Xl([0,.65,.55,1]),circOut:Xl([.55,0,1,.45]),backIn:Xl([.31,.01,.66,-.59]),backOut:Xl([.33,1.53,.69,.99])};function kD(t){if(t)return vD(t)?Xl(t):Array.isArray(t)?t.map(kD):bD[t]}function HT(t,e,i,{delay:n=0,duration:r,repeat:o=0,repeatType:s="loop",ease:l,times:c}={}){const d={[e]:i};c&&(d.offset=c);const u=kD(l);return Array.isArray(u)&&(d.easing=u),t.animate(d,{delay:n,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function YT(t,{repeat:e,repeatType:i="loop"}){const n=e&&i!=="loop"&&e%2===1?0:t.length-1;return t[n]}const jD=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t,GT=1e-7,XT=12;function ZT(t,e,i,n,r){let o,s,l=0;do s=e+(i-e)/2,o=jD(s,n,r)-t,o>0?i=s:e=s;while(Math.abs(o)>GT&&++l<XT);return s}function kd(t,e,i,n){if(t===e&&i===n)return qe;const r=o=>ZT(o,0,1,t,i);return o=>o===0||o===1?o:jD(r(o),e,n)}const qT=kd(.42,0,1,1),QT=kd(0,0,.58,1),SD=kd(.42,0,.58,1),KT=t=>Array.isArray(t)&&typeof t[0]!="number",DD=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,_D=t=>e=>1-t(1-e),k1=t=>1-Math.sin(Math.acos(t)),CD=_D(k1),JT=DD(k1),PD=kd(.33,1.53,.69,.99),j1=_D(PD),eE=DD(j1),tE=t=>(t*=2)<1?.5*j1(t):.5*(2-Math.pow(2,-10*(t-1))),iE={linear:qe,easeIn:qT,easeInOut:SD,easeOut:QT,circIn:k1,circInOut:JT,circOut:CD,backIn:j1,backInOut:eE,backOut:PD,anticipate:tE},oy=t=>{if(Array.isArray(t)){Kp(t.length===4);const[e,i,n,r]=t;return kd(e,i,n,r)}else if(typeof t=="string")return iE[t];return t},S1=(t,e)=>i=>!!(yd(i)&&rT.test(i)&&i.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(i,e)),TD=(t,e,i)=>n=>{if(!yd(n))return n;const[r,o,s,l]=n.match(Zp);return{[t]:parseFloat(r),[e]:parseFloat(o),[i]:parseFloat(s),alpha:l!==void 0?parseFloat(l):1}},nE=t=>vo(0,255,t),Hf={...Fs,transform:t=>Math.round(nE(t))},ns={test:S1("rgb","red"),parse:TD("red","green","blue"),transform:({red:t,green:e,blue:i,alpha:n=1})=>"rgba("+Hf.transform(t)+", "+Hf.transform(e)+", "+Hf.transform(i)+", "+fc(pc.transform(n))+")"};function rE(t){let e="",i="",n="",r="";return t.length>5?(e=t.substring(1,3),i=t.substring(3,5),n=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),i=t.substring(2,3),n=t.substring(3,4),r=t.substring(4,5),e+=e,i+=i,n+=n,r+=r),{red:parseInt(e,16),green:parseInt(i,16),blue:parseInt(n,16),alpha:r?parseInt(r,16)/255:1}}const dg={test:S1("#"),parse:rE,transform:ns.transform},va={test:S1("hsl","hue"),parse:TD("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:i,alpha:n=1})=>"hsla("+Math.round(t)+", "+Un.transform(fc(e))+", "+Un.transform(fc(i))+", "+fc(pc.transform(n))+")"},Jt={test:t=>ns.test(t)||dg.test(t)||va.test(t),parse:t=>ns.test(t)?ns.parse(t):va.test(t)?va.parse(t):dg.parse(t),transform:t=>yd(t)?t:t.hasOwnProperty("red")?ns.transform(t):va.transform(t)},Ve=(t,e,i)=>-i*t+i*e+t;function Yf(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function oE({hue:t,saturation:e,lightness:i,alpha:n}){t/=360,e/=100,i/=100;let r=0,o=0,s=0;if(!e)r=o=s=i;else{const l=i<.5?i*(1+e):i+e-i*e,c=2*i-l;r=Yf(c,l,t+1/3),o=Yf(c,l,t),s=Yf(c,l,t-1/3)}return{red:Math.round(r*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:n}}const Gf=(t,e,i)=>{const n=t*t;return Math.sqrt(Math.max(0,i*(e*e-n)+n))},sE=[dg,ns,va],aE=t=>sE.find(e=>e.test(t));function sy(t){const e=aE(t);let i=e.parse(t);return e===va&&(i=oE(i)),i}const ED=(t,e)=>{const i=sy(t),n=sy(e),r={...i};return o=>(r.red=Gf(i.red,n.red,o),r.green=Gf(i.green,n.green,o),r.blue=Gf(i.blue,n.blue,o),r.alpha=Ve(i.alpha,n.alpha,o),ns.transform(r))};function lE(t){var e,i;return isNaN(t)&&yd(t)&&(((e=t.match(Zp))===null||e===void 0?void 0:e.length)||0)+(((i=t.match(iD))===null||i===void 0?void 0:i.length)||0)>0}const ID={regex:iT,countKey:"Vars",token:"${v}",parse:qe},AD={regex:iD,countKey:"Colors",token:"${c}",parse:Jt.parse},MD={regex:Zp,countKey:"Numbers",token:"${n}",parse:Fs.parse};function Xf(t,{regex:e,countKey:i,token:n,parse:r}){const o=t.tokenised.match(e);o&&(t["num"+i]=o.length,t.tokenised=t.tokenised.replace(e,n),t.values.push(...o.map(r)))}function Jh(t){const e=t.toString(),i={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return i.value.includes("var(--")&&Xf(i,ID),Xf(i,AD),Xf(i,MD),i}function zD(t){return Jh(t).values}function FD(t){const{values:e,numColors:i,numVars:n,tokenised:r}=Jh(t),o=e.length;return s=>{let l=r;for(let c=0;c<o;c++)c<n?l=l.replace(ID.token,s[c]):c<n+i?l=l.replace(AD.token,Jt.transform(s[c])):l=l.replace(MD.token,fc(s[c]));return l}}const cE=t=>typeof t=="number"?0:t;function dE(t){const e=zD(t);return FD(t)(e.map(cE))}const yo={test:lE,parse:zD,createTransformer:FD,getAnimatableNone:dE},RD=(t,e)=>i=>`${i>0?e:t}`;function LD(t,e){return typeof t=="number"?i=>Ve(t,e,i):Jt.test(t)?ED(t,e):t.startsWith("var(")?RD(t,e):OD(t,e)}const ND=(t,e)=>{const i=[...t],n=i.length,r=t.map((o,s)=>LD(o,e[s]));return o=>{for(let s=0;s<n;s++)i[s]=r[s](o);return i}},uE=(t,e)=>{const i={...t,...e},n={};for(const r in i)t[r]!==void 0&&e[r]!==void 0&&(n[r]=LD(t[r],e[r]));return r=>{for(const o in n)i[o]=n[o](r);return i}},OD=(t,e)=>{const i=yo.createTransformer(e),n=Jh(t),r=Jh(e);return n.numVars===r.numVars&&n.numColors===r.numColors&&n.numNumbers>=r.numNumbers?co(ND(n.values,r.values),i):RD(t,e)},el=(t,e,i)=>{const n=e-t;return n===0?1:(i-t)/n},ay=(t,e)=>i=>Ve(t,e,i);function hE(t){return typeof t=="number"?ay:typeof t=="string"?Jt.test(t)?ED:OD:Array.isArray(t)?ND:typeof t=="object"?uE:ay}function pE(t,e,i){const n=[],r=i||hE(t[0]),o=t.length-1;for(let s=0;s<o;s++){let l=r(t[s],t[s+1]);if(e){const c=Array.isArray(e)?e[s]||qe:e;l=co(c,l)}n.push(l)}return n}function Jp(t,e,{clamp:i=!0,ease:n,mixer:r}={}){const o=t.length;if(Kp(o===e.length),o===1)return()=>e[0];t[0]>t[o-1]&&(t=[...t].reverse(),e=[...e].reverse());const s=pE(e,n,r),l=s.length,c=d=>{let u=0;if(l>1)for(;u<t.length-2&&!(d<t[u+1]);u++);const p=el(t[u],t[u+1],d);return s[u](p)};return i?d=>c(vo(t[0],t[o-1],d)):c}function fE(t,e){const i=t[t.length-1];for(let n=1;n<=e;n++){const r=el(0,e,n);t.push(Ve(i,1,r))}}function $D(t){const e=[0];return fE(e,t.length-1),e}function mE(t,e){return t.map(i=>i*e)}function gE(t,e){return t.map(()=>e||SD).splice(0,t.length-1)}function ep({duration:t=300,keyframes:e,times:i,ease:n="easeInOut"}){const r=KT(n)?n.map(oy):oy(n),o={done:!1,value:e[0]},s=mE(i&&i.length===e.length?i:$D(e),t),l=Jp(s,e,{ease:Array.isArray(r)?r:gE(e,r)});return{calculatedDuration:t,next:c=>(o.value=l(c),o.done=c>=t,o)}}function D1(t,e){return e?t*(1e3/e):0}const xE=5;function BD(t,e,i){const n=Math.max(e-xE,0);return D1(i-t(n),e-n)}const Zf=.001,wE=.01,ly=10,vE=.05,yE=1;function bE({duration:t=800,bounce:e=.25,velocity:i=0,mass:n=1}){let r,o;wD(t<=uo(ly));let s=1-e;s=vo(vE,yE,s),t=vo(wE,ly,xr(t)),s<1?(r=d=>{const u=d*s,p=u*t,f=u-i,g=ug(d,s),y=Math.exp(-p);return Zf-f/g*y},o=d=>{const p=d*s*t,f=p*i+i,g=Math.pow(s,2)*Math.pow(d,2)*t,y=Math.exp(-p),w=ug(Math.pow(d,2),s);return(-r(d)+Zf>0?-1:1)*((f-g)*y)/w}):(r=d=>{const u=Math.exp(-d*t),p=(d-i)*t+1;return-Zf+u*p},o=d=>{const u=Math.exp(-d*t),p=(i-d)*(t*t);return u*p});const l=5/t,c=jE(r,o,l);if(t=uo(t),isNaN(c))return{stiffness:100,damping:10,duration:t};{const d=Math.pow(c,2)*n;return{stiffness:d,damping:s*2*Math.sqrt(n*d),duration:t}}}const kE=12;function jE(t,e,i){let n=i;for(let r=1;r<kE;r++)n=n-t(n)/e(n);return n}function ug(t,e){return t*Math.sqrt(1-e*e)}const SE=["duration","bounce"],DE=["stiffness","damping","mass"];function cy(t,e){return e.some(i=>t[i]!==void 0)}function _E(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!cy(t,DE)&&cy(t,SE)){const i=bE(t);e={...e,...i,mass:1},e.isResolvedFromDuration=!0}return e}function VD({keyframes:t,restDelta:e,restSpeed:i,...n}){const r=t[0],o=t[t.length-1],s={done:!1,value:r},{stiffness:l,damping:c,mass:d,duration:u,velocity:p,isResolvedFromDuration:f}=_E({...n,velocity:-xr(n.velocity||0)}),g=p||0,y=c/(2*Math.sqrt(l*d)),w=o-r,D=xr(Math.sqrt(l/d)),j=Math.abs(w)<5;i||(i=j?.01:2),e||(e=j?.005:.5);let b;if(y<1){const v=ug(D,y);b=h=>{const x=Math.exp(-y*D*h);return o-x*((g+y*D*w)/v*Math.sin(v*h)+w*Math.cos(v*h))}}else if(y===1)b=v=>o-Math.exp(-D*v)*(w+(g+D*w)*v);else{const v=D*Math.sqrt(y*y-1);b=h=>{const x=Math.exp(-y*D*h),k=Math.min(v*h,300);return o-x*((g+y*D*w)*Math.sinh(k)+v*w*Math.cosh(k))/v}}return{calculatedDuration:f&&u||null,next:v=>{const h=b(v);if(f)s.done=v>=u;else{let x=g;v!==0&&(y<1?x=BD(b,v,h):x=0);const k=Math.abs(x)<=i,S=Math.abs(o-h)<=e;s.done=k&&S}return s.value=s.done?o:h,s}}}function dy({keyframes:t,velocity:e=0,power:i=.8,timeConstant:n=325,bounceDamping:r=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:d=.5,restSpeed:u}){const p=t[0],f={done:!1,value:p},g=_=>l!==void 0&&_<l||c!==void 0&&_>c,y=_=>l===void 0?c:c===void 0||Math.abs(l-_)<Math.abs(c-_)?l:c;let w=i*e;const D=p+w,j=s===void 0?D:s(D);j!==D&&(w=j-p);const b=_=>-w*Math.exp(-_/n),v=_=>j+b(_),h=_=>{const C=b(_),E=v(_);f.done=Math.abs(C)<=d,f.value=f.done?j:E};let x,k;const S=_=>{g(f.value)&&(x=_,k=VD({keyframes:[f.value,y(f.value)],velocity:BD(v,_,f.value),damping:r,stiffness:o,restDelta:d,restSpeed:u}))};return S(0),{calculatedDuration:null,next:_=>{let C=!1;return!k&&x===void 0&&(C=!0,h(_),S(_)),x!==void 0&&_>x?k.next(_-x):(!C&&h(_),f)}}}const CE=t=>{const e=({timestamp:i})=>t(i);return{start:()=>ve.update(e,!0),stop:()=>Cn(e),now:()=>At.isProcessing?At.timestamp:performance.now()}},uy=2e4;function hy(t){let e=0;const i=50;let n=t.next(e);for(;!n.done&&e<uy;)e+=i,n=t.next(e);return e>=uy?1/0:e}const PE={decay:dy,inertia:dy,tween:ep,keyframes:ep,spring:VD};function tp({autoplay:t=!0,delay:e=0,driver:i=CE,keyframes:n,type:r="keyframes",repeat:o=0,repeatDelay:s=0,repeatType:l="loop",onPlay:c,onStop:d,onComplete:u,onUpdate:p,...f}){let g=1,y=!1,w,D;const j=()=>{D=new Promise(R=>{w=R})};j();let b;const v=PE[r]||ep;let h;v!==ep&&typeof n[0]!="number"&&(h=Jp([0,100],n,{clamp:!1}),n=[0,100]);const x=v({...f,keyframes:n});let k;l==="mirror"&&(k=v({...f,keyframes:[...n].reverse(),velocity:-(f.velocity||0)}));let S="idle",_=null,C=null,E=null;x.calculatedDuration===null&&o&&(x.calculatedDuration=hy(x));const{calculatedDuration:z}=x;let A=1/0,N=1/0;z!==null&&(A=z+s,N=A*(o+1)-s);let O=0;const W=R=>{if(C===null)return;g>0&&(C=Math.min(C,R)),g<0&&(C=Math.min(R-N/g,C)),_!==null?O=_:O=Math.round(R-C)*g;const U=O-e*(g>=0?1:-1),ne=g>=0?U<0:U>N;O=Math.max(U,0),S==="finished"&&_===null&&(O=N);let Z=O,fe=x;if(o){const Se=Math.min(O,N)/A;let Pt=Math.floor(Se),De=Se%1;!De&&Se>=1&&(De=1),De===1&&Pt--,Pt=Math.min(Pt,o+1),!!(Pt%2)&&(l==="reverse"?(De=1-De,s&&(De-=s/A)):l==="mirror"&&(fe=k)),Z=vo(0,1,De)*A}const ue=ne?{done:!1,value:n[0]}:fe.next(Z);h&&(ue.value=h(ue.value));let{done:me}=ue;!ne&&z!==null&&(me=g>=0?O>=N:O<=0);const Ne=_===null&&(S==="finished"||S==="running"&&me);return p&&p(ue.value),Ne&&I(),ue},V=()=>{b&&b.stop(),b=void 0},$=()=>{S="idle",V(),w(),j(),C=E=null},I=()=>{S="finished",u&&u(),V(),w()},M=()=>{if(y)return;b||(b=i(W));const R=b.now();c&&c(),_!==null?C=R-_:(!C||S==="finished")&&(C=R),S==="finished"&&j(),E=C,_=null,S="running",b.start()};t&&M();const P={then(R,U){return D.then(R,U)},get time(){return xr(O)},set time(R){R=uo(R),O=R,_!==null||!b||g===0?_=R:C=b.now()-R/g},get duration(){const R=x.calculatedDuration===null?hy(x):x.calculatedDuration;return xr(R)},get speed(){return g},set speed(R){R===g||!b||(g=R,P.time=xr(O))},get state(){return S},play:M,pause:()=>{S="paused",_=O},stop:()=>{y=!0,S!=="idle"&&(S="idle",d&&d(),$())},cancel:()=>{E!==null&&W(E),$()},complete:()=>{S="finished"},sample:R=>(C=0,W(R))};return P}function TE(t){let e;return()=>(e===void 0&&(e=t()),e)}const EE=TE(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),IE=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Jd=10,AE=2e4,ME=(t,e)=>e.type==="spring"||t==="backgroundColor"||!yD(e.ease);function zE(t,e,{onUpdate:i,onComplete:n,...r}){if(!(EE()&&IE.has(e)&&!r.repeatDelay&&r.repeatType!=="mirror"&&r.damping!==0&&r.type!=="inertia"))return!1;let s=!1,l,c,d=!1;const u=()=>{c=new Promise(v=>{l=v})};u();let{keyframes:p,duration:f=300,ease:g,times:y}=r;if(ME(e,r)){const v=tp({...r,repeat:0,delay:0});let h={done:!1,value:p[0]};const x=[];let k=0;for(;!h.done&&k<AE;)h=v.sample(k),x.push(h.value),k+=Jd;y=void 0,p=x,f=k-Jd,g="linear"}const w=HT(t.owner.current,e,p,{...r,duration:f,ease:g,times:y}),D=()=>{d=!1,w.cancel()},j=()=>{d=!0,ve.update(D),l(),u()};return w.onfinish=()=>{d||(t.set(YT(p,r)),n&&n(),j())},{then(v,h){return c.then(v,h)},attachTimeline(v){return w.timeline=v,w.onfinish=null,qe},get time(){return xr(w.currentTime||0)},set time(v){w.currentTime=uo(v)},get speed(){return w.playbackRate},set speed(v){w.playbackRate=v},get duration(){return xr(f)},play:()=>{s||(w.play(),Cn(D))},pause:()=>w.pause(),stop:()=>{if(s=!0,w.playState==="idle")return;const{currentTime:v}=w;if(v){const h=tp({...r,autoplay:!1});t.setWithVelocity(h.sample(v-Jd).value,h.sample(v).value,Jd)}j()},complete:()=>{d||w.finish()},cancel:j}}function FE({keyframes:t,delay:e,onUpdate:i,onComplete:n}){const r=()=>(i&&i(t[t.length-1]),n&&n(),{time:0,speed:1,duration:0,play:qe,pause:qe,stop:qe,then:o=>(o(),Promise.resolve()),cancel:qe,complete:qe});return e?tp({keyframes:[0,1],duration:0,delay:e,onComplete:r}):r()}const RE={type:"spring",stiffness:500,damping:25,restSpeed:10},LE=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),NE={type:"keyframes",duration:.8},OE={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},$E=(t,{keyframes:e})=>e.length>2?NE:zs.has(t)?t.startsWith("scale")?LE(e[1]):RE:OE,hg=(t,e)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(yo.test(e)||e==="0")&&!e.startsWith("url(")),BE=new Set(["brightness","contrast","saturate","opacity"]);function VE(t){const[e,i]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[n]=i.match(Zp)||[];if(!n)return t;const r=i.replace(n,"");let o=BE.has(e)?1:0;return n!==i&&(o*=100),e+"("+o+r+")"}const WE=/([a-z-]*)\(.*?\)/g,pg={...yo,getAnimatableNone:t=>{const e=t.match(WE);return e?e.map(VE).join(" "):t}},UE={...nD,color:Jt,backgroundColor:Jt,outlineColor:Jt,fill:Jt,stroke:Jt,borderColor:Jt,borderTopColor:Jt,borderRightColor:Jt,borderBottomColor:Jt,borderLeftColor:Jt,filter:pg,WebkitFilter:pg},_1=t=>UE[t];function WD(t,e){let i=_1(t);return i!==pg&&(i=yo),i.getAnimatableNone?i.getAnimatableNone(e):void 0}const UD=t=>/^0[^.\s]+$/.test(t);function HE(t){if(typeof t=="number")return t===0;if(t!==null)return t==="none"||t==="0"||UD(t)}function YE(t,e,i,n){const r=hg(e,i);let o;Array.isArray(i)?o=[...i]:o=[null,i];const s=n.from!==void 0?n.from:t.get();let l;const c=[];for(let d=0;d<o.length;d++)o[d]===null&&(o[d]=d===0?s:o[d-1]),HE(o[d])&&c.push(d),typeof o[d]=="string"&&o[d]!=="none"&&o[d]!=="0"&&(l=o[d]);if(r&&c.length&&l)for(let d=0;d<c.length;d++){const u=c[d];o[u]=WD(e,l)}return o}function GE({when:t,delay:e,delayChildren:i,staggerChildren:n,staggerDirection:r,repeat:o,repeatType:s,repeatDelay:l,from:c,elapsed:d,...u}){return!!Object.keys(u).length}function C1(t,e){return t[e]||t.default||t}const XE={skipAnimations:!1},P1=(t,e,i,n={})=>r=>{const o=C1(n,t)||{},s=o.delay||n.delay||0;let{elapsed:l=0}=n;l=l-uo(s);const c=YE(e,t,i,o),d=c[0],u=c[c.length-1],p=hg(t,d),f=hg(t,u);let g={keyframes:c,velocity:e.getVelocity(),ease:"easeOut",...o,delay:-l,onUpdate:y=>{e.set(y),o.onUpdate&&o.onUpdate(y)},onComplete:()=>{r(),o.onComplete&&o.onComplete()}};if(GE(o)||(g={...g,...$E(t,g)}),g.duration&&(g.duration=uo(g.duration)),g.repeatDelay&&(g.repeatDelay=uo(g.repeatDelay)),!p||!f||UT.current||o.type===!1||XE.skipAnimations)return FE(g);if(!n.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const y=zE(e,t,g);if(y)return y}return tp(g)};function ip(t){return!!(bi(t)&&t.add)}const HD=t=>/^\-?\d*\.?\d+$/.test(t);function T1(t,e){t.indexOf(e)===-1&&t.push(e)}function E1(t,e){const i=t.indexOf(e);i>-1&&t.splice(i,1)}class I1{constructor(){this.subscriptions=[]}add(e){return T1(this.subscriptions,e),()=>E1(this.subscriptions,e)}notify(e,i,n){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,i,n);else for(let o=0;o<r;o++){const s=this.subscriptions[o];s&&s(e,i,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ZE=t=>!isNaN(parseFloat(t)),mc={current:void 0};class qE{constructor(e,i={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(n,r=!0)=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:s}=At;this.lastUpdated!==s&&(this.timeDelta=o,this.lastUpdated=s,ve.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ve.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{n!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=ZE(this.current),this.owner=i.owner}onChange(e){return this.on("change",e)}on(e,i){this.events[e]||(this.events[e]=new I1);const n=this.events[e].add(i);return e==="change"?()=>{n(),ve.read(()=>{this.events.change.getSize()||this.stop()})}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,i){this.passiveEffect=e,this.stopPassiveEffect=i}set(e,i=!0){!i||!this.passiveEffect?this.updateAndNotify(e,i):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,i,n){this.set(i),this.prev=e,this.timeDelta=n}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return mc.current&&mc.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?D1(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=e(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function kn(t,e){return new qE(t,e)}const YD=t=>e=>e.test(t),QE={test:t=>t==="auto",parse:t=>t},GD=[Fs,K,Un,Lr,sT,oT,QE],Il=t=>GD.find(YD(t)),KE=[...GD,Jt,yo],JE=t=>KE.find(YD(t));function eI(t,e,i){t.hasValue(e)?t.getValue(e).set(i):t.addValue(e,kn(i))}function A1(t,e){const i=Qp(t,e);let{transitionEnd:n={},transition:r={},...o}=i?t.makeTargetAnimatable(i,!1):{};o={...o,...n};for(const s in o){const l=yT(o[s]);eI(t,s,l)}}function fg(t,e){[...e].reverse().forEach(n=>{const r=t.getVariant(n);r&&A1(t,r),t.variantChildren&&t.variantChildren.forEach(o=>{fg(o,e)})})}function tI(t,e){if(Array.isArray(e))return fg(t,e);if(typeof e=="string")return fg(t,[e]);A1(t,e)}function iI(t,e,i){var n,r;const o=Object.keys(e).filter(l=>!t.hasValue(l)),s=o.length;if(s)for(let l=0;l<s;l++){const c=o[l],d=e[c];let u=null;Array.isArray(d)&&(u=d[0]),u===null&&(u=(r=(n=i[c])!==null&&n!==void 0?n:t.readValue(c))!==null&&r!==void 0?r:e[c]),u!=null&&(typeof u=="string"&&(HD(u)||UD(u))?u=parseFloat(u):!JE(u)&&yo.test(d)&&(u=WD(c,d)),t.addValue(c,kn(u,{owner:t})),i[c]===void 0&&(i[c]=u),u!==null&&t.setBaseTarget(c,u))}}function nI(t,e){return e?(e[t]||e.default||e).from:void 0}function rI(t,e,i){const n={};for(const r in t){const o=nI(r,e);if(o!==void 0)n[r]=o;else{const s=i.getValue(r);s&&(n[r]=s.get())}}return n}function oI({protectedKeys:t,needsAnimating:e},i){const n=t.hasOwnProperty(i)&&e[i]!==!0;return e[i]=!1,n}function sI(t,e){const i=t.get();if(Array.isArray(e)){for(let n=0;n<e.length;n++)if(e[n]!==i)return!0}else return i!==e}function XD(t,e,{delay:i=0,transitionOverride:n,type:r}={}){let{transition:o=t.getDefaultTransition(),transitionEnd:s,...l}=t.makeTargetAnimatable(e);const c=t.getValue("willChange");n&&(o=n);const d=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const p in l){const f=t.getValue(p),g=l[p];if(!f||g===void 0||u&&oI(u,p))continue;const y={delay:i,elapsed:0,...C1(o||{},p)};if(window.HandoffAppearAnimations){const j=t.getProps()[qS];if(j){const b=window.HandoffAppearAnimations(j,p,f,ve);b!==null&&(y.elapsed=b,y.isHandoff=!0)}}let w=!y.isHandoff&&!sI(f,g);if(y.type==="spring"&&(f.getVelocity()||y.velocity)&&(w=!1),f.animation&&(w=!1),w)continue;f.start(P1(p,f,g,t.shouldReduceMotion&&zs.has(p)?{type:!1}:y));const D=f.animation;ip(c)&&(c.add(p),D.then(()=>c.remove(p))),d.push(D)}return s&&Promise.all(d).then(()=>{s&&A1(t,s)}),d}function mg(t,e,i={}){const n=Qp(t,e,i.custom);let{transition:r=t.getDefaultTransition()||{}}=n||{};i.transitionOverride&&(r=i.transitionOverride);const o=n?()=>Promise.all(XD(t,n,i)):()=>Promise.resolve(),s=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:u,staggerDirection:p}=r;return aI(t,e,d+c,u,p,i)}:()=>Promise.resolve(),{when:l}=r;if(l){const[c,d]=l==="beforeChildren"?[o,s]:[s,o];return c().then(()=>d())}else return Promise.all([o(),s(i.delay)])}function aI(t,e,i=0,n=0,r=1,o){const s=[],l=(t.variantChildren.size-1)*n,c=r===1?(d=0)=>d*n:(d=0)=>l-d*n;return Array.from(t.variantChildren).sort(lI).forEach((d,u)=>{d.notify("AnimationStart",e),s.push(mg(d,e,{...o,delay:i+c(u)}).then(()=>d.notify("AnimationComplete",e)))}),Promise.all(s)}function lI(t,e){return t.sortNodePosition(e)}function ZD(t,e,i={}){t.notify("AnimationStart",e);let n;if(Array.isArray(e)){const r=e.map(o=>mg(t,o,i));n=Promise.all(r)}else if(typeof e=="string")n=mg(t,e,i);else{const r=typeof e=="function"?Qp(t,e,i.custom):e;n=Promise.all(XD(t,r,i))}return n.then(()=>t.notify("AnimationComplete",e))}const cI=[...h1].reverse(),dI=h1.length;function uI(t){return e=>Promise.all(e.map(({animation:i,options:n})=>ZD(t,i,n)))}function hI(t){let e=uI(t);const i=fI();let n=!0;const r=(c,d)=>{const u=Qp(t,d);if(u){const{transition:p,transitionEnd:f,...g}=u;c={...c,...g,...f}}return c};function o(c){e=c(t)}function s(c,d){const u=t.getProps(),p=t.getVariantContext(!0)||{},f=[],g=new Set;let y={},w=1/0;for(let j=0;j<dI;j++){const b=cI[j],v=i[b],h=u[b]!==void 0?u[b]:p[b],x=ed(h),k=b===d?v.isActive:null;k===!1&&(w=j);let S=h===p[b]&&h!==u[b]&&x;if(S&&n&&t.manuallyAnimateOnMount&&(S=!1),v.protectedKeys={...y},!v.isActive&&k===null||!h&&!v.prevProp||Gp(h)||typeof h=="boolean")continue;let C=pI(v.prevProp,h)||b===d&&v.isActive&&!S&&x||j>w&&x,E=!1;const z=Array.isArray(h)?h:[h];let A=z.reduce(r,{});k===!1&&(A={});const{prevResolvedValues:N={}}=v,O={...N,...A},W=V=>{C=!0,g.has(V)&&(E=!0,g.delete(V)),v.needsAnimating[V]=!0};for(const V in O){const $=A[V],I=N[V];if(y.hasOwnProperty(V))continue;let M=!1;Kh($)&&Kh(I)?M=!xD($,I):M=$!==I,M?$!==void 0?W(V):g.add(V):$!==void 0&&g.has(V)?W(V):v.protectedKeys[V]=!0}v.prevProp=h,v.prevResolvedValues=A,v.isActive&&(y={...y,...A}),n&&t.blockInitialAnimation&&(C=!1),C&&(!S||E)&&f.push(...z.map(V=>({animation:V,options:{type:b,...c}})))}if(g.size){const j={};g.forEach(b=>{const v=t.getBaseTarget(b);v!==void 0&&(j[b]=v)}),f.push({animation:j})}let D=!!f.length;return n&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(D=!1),n=!1,D?e(f):Promise.resolve()}function l(c,d,u){var p;if(i[c].isActive===d)return Promise.resolve();(p=t.variantChildren)===null||p===void 0||p.forEach(g=>{var y;return(y=g.animationState)===null||y===void 0?void 0:y.setActive(c,d)}),i[c].isActive=d;const f=s(u,c);for(const g in i)i[g].protectedKeys={};return f}return{animateChanges:s,setActive:l,setAnimateFunction:o,getState:()=>i}}function pI(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!xD(e,t):!1}function Ro(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function fI(){return{animate:Ro(!0),whileInView:Ro(),whileHover:Ro(),whileTap:Ro(),whileDrag:Ro(),whileFocus:Ro(),exit:Ro()}}class mI extends Co{constructor(e){super(e),e.animationState||(e.animationState=hI(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),Gp(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:i}=this.node.prevProps||{};e!==i&&this.updateAnimationControlsSubscription()}unmount(){}}let gI=0;class xI extends Co{constructor(){super(...arguments),this.id=gI++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:i,custom:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e,{custom:n??this.node.getProps().custom});i&&!e&&o.then(()=>i(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const wI={animation:{Feature:mI},exit:{Feature:xI}},py=(t,e)=>Math.abs(t-e);function vI(t,e){const i=py(t.x,e.x),n=py(t.y,e.y);return Math.sqrt(i**2+n**2)}class qD{constructor(e,i,{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=Qf(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,g=vI(p.offset,{x:0,y:0})>=3;if(!f&&!g)return;const{point:y}=p,{timestamp:w}=At;this.history.push({...y,timestamp:w});const{onStart:D,onMove:j}=this.handlers;f||(D&&D(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),j&&j(this.lastMoveEvent,p)},this.handlePointerMove=(p,f)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=qf(f,this.transformPagePoint),ve.update(this.updatePoint,!0)},this.handlePointerUp=(p,f)=>{this.end();const{onEnd:g,onSessionEnd:y,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const D=Qf(p.type==="pointercancel"?this.lastMoveEventInfo:qf(f,this.transformPagePoint),this.history);this.startEvent&&g&&g(p,D),y&&y(p,D)},!hD(e))return;this.dragSnapToOrigin=o,this.handlers=i,this.transformPagePoint=n,this.contextWindow=r||window;const s=qp(e),l=qf(s,this.transformPagePoint),{point:c}=l,{timestamp:d}=At;this.history=[{...c,timestamp:d}];const{onSessionStart:u}=i;u&&u(e,Qf(l,this.history)),this.removeListeners=co(gr(this.contextWindow,"pointermove",this.handlePointerMove),gr(this.contextWindow,"pointerup",this.handlePointerUp),gr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Cn(this.updatePoint)}}function qf(t,e){return e?{point:e(t.point)}:t}function fy(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Qf({point:t},e){return{point:t,delta:fy(t,QD(e)),offset:fy(t,yI(e)),velocity:bI(e,.1)}}function yI(t){return t[0]}function QD(t){return t[t.length-1]}function bI(t,e){if(t.length<2)return{x:0,y:0};let i=t.length-1,n=null;const r=QD(t);for(;i>=0&&(n=t[i],!(r.timestamp-n.timestamp>uo(e)));)i--;if(!n)return{x:0,y:0};const o=xr(r.timestamp-n.timestamp);if(o===0)return{x:0,y:0};const s={x:(r.x-n.x)/o,y:(r.y-n.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function Ni(t){return t.max-t.min}function gg(t,e=0,i=.01){return Math.abs(t-e)<=i}function my(t,e,i,n=.5){t.origin=n,t.originPoint=Ve(e.min,e.max,t.origin),t.scale=Ni(i)/Ni(e),(gg(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=Ve(i.min,i.max,t.origin)-t.originPoint,(gg(t.translate)||isNaN(t.translate))&&(t.translate=0)}function gc(t,e,i,n){my(t.x,e.x,i.x,n?n.originX:void 0),my(t.y,e.y,i.y,n?n.originY:void 0)}function gy(t,e,i){t.min=i.min+e.min,t.max=t.min+Ni(e)}function kI(t,e,i){gy(t.x,e.x,i.x),gy(t.y,e.y,i.y)}function xy(t,e,i){t.min=e.min-i.min,t.max=t.min+Ni(e)}function xc(t,e,i){xy(t.x,e.x,i.x),xy(t.y,e.y,i.y)}function jI(t,{min:e,max:i},n){return e!==void 0&&t<e?t=n?Ve(e,t,n.min):Math.max(t,e):i!==void 0&&t>i&&(t=n?Ve(i,t,n.max):Math.min(t,i)),t}function wy(t,e,i){return{min:e!==void 0?t.min+e:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function SI(t,{top:e,left:i,bottom:n,right:r}){return{x:wy(t.x,i,r),y:wy(t.y,e,n)}}function vy(t,e){let i=e.min-t.min,n=e.max-t.max;return e.max-e.min<t.max-t.min&&([i,n]=[n,i]),{min:i,max:n}}function DI(t,e){return{x:vy(t.x,e.x),y:vy(t.y,e.y)}}function _I(t,e){let i=.5;const n=Ni(t),r=Ni(e);return r>n?i=el(e.min,e.max-n,t.min):n>r&&(i=el(t.min,t.max-r,e.min)),vo(0,1,i)}function CI(t,e){const i={};return e.min!==void 0&&(i.min=e.min-t.min),e.max!==void 0&&(i.max=e.max-t.min),i}const xg=.35;function PI(t=xg){return t===!1?t=0:t===!0&&(t=xg),{x:yy(t,"left","right"),y:yy(t,"top","bottom")}}function yy(t,e,i){return{min:by(t,e),max:by(t,i)}}function by(t,e){return typeof t=="number"?t:t[e]||0}const ky=()=>({translate:0,scale:1,origin:0,originPoint:0}),ya=()=>({x:ky(),y:ky()}),jy=()=>({min:0,max:0}),st=()=>({x:jy(),y:jy()});function Yi(t){return[t("x"),t("y")]}function KD({top:t,left:e,right:i,bottom:n}){return{x:{min:e,max:i},y:{min:t,max:n}}}function TI({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function EI(t,e){if(!e)return t;const i=e({x:t.left,y:t.top}),n=e({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:n.y,right:n.x}}function Kf(t){return t===void 0||t===1}function wg({scale:t,scaleX:e,scaleY:i}){return!Kf(t)||!Kf(e)||!Kf(i)}function Yo(t){return wg(t)||JD(t)||t.z||t.rotate||t.rotateX||t.rotateY}function JD(t){return Sy(t.x)||Sy(t.y)}function Sy(t){return t&&t!=="0%"}function np(t,e,i){const n=t-i,r=e*n;return i+r}function Dy(t,e,i,n,r){return r!==void 0&&(t=np(t,r,n)),np(t,i,n)+e}function vg(t,e=0,i=1,n,r){t.min=Dy(t.min,e,i,n,r),t.max=Dy(t.max,e,i,n,r)}function e5(t,{x:e,y:i}){vg(t.x,e.translate,e.scale,e.originPoint),vg(t.y,i.translate,i.scale,i.originPoint)}function II(t,e,i,n=!1){const r=i.length;if(!r)return;e.x=e.y=1;let o,s;for(let l=0;l<r;l++){o=i[l],s=o.projectionDelta;const c=o.instance;c&&c.style&&c.style.display==="contents"||(n&&o.options.layoutScroll&&o.scroll&&o!==o.root&&ba(t,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(e.x*=s.x.scale,e.y*=s.y.scale,e5(t,s)),n&&Yo(o.latestValues)&&ba(t,o.latestValues))}e.x=_y(e.x),e.y=_y(e.y)}function _y(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function Vr(t,e){t.min=t.min+e,t.max=t.max+e}function Cy(t,e,[i,n,r]){const o=e[r]!==void 0?e[r]:.5,s=Ve(t.min,t.max,o);vg(t,e[i],e[n],s,e.scale)}const AI=["x","scaleX","originX"],MI=["y","scaleY","originY"];function ba(t,e){Cy(t.x,e,AI),Cy(t.y,e,MI)}function t5(t,e){return KD(EI(t.getBoundingClientRect(),e))}function zI(t,e,i){const n=t5(t,i),{scroll:r}=e;return r&&(Vr(n.x,r.offset.x),Vr(n.y,r.offset.y)),n}const i5=({current:t})=>t?t.ownerDocument.defaultView:null,FI=new WeakMap;class RI{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=st(),this.visualElement=e}start(e,{snapToCursor:i=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:p}=this.getProps();p?this.pauseAnimation():this.stopAnimation(),i&&this.snapToCursor(qp(u,"page").point)},o=(u,p)=>{const{drag:f,dragPropagation:g,onDragStart:y}=this.getProps();if(f&&!g&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=fD(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Yi(D=>{let j=this.getAxisMotionValue(D).get()||0;if(Un.test(j)){const{projection:b}=this.visualElement;if(b&&b.layout){const v=b.layout.layoutBox[D];v&&(j=Ni(v)*(parseFloat(j)/100))}}this.originPoint[D]=j}),y&&ve.update(()=>y(u,p),!1,!0);const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},s=(u,p)=>{const{dragPropagation:f,dragDirectionLock:g,onDirectionLock:y,onDrag:w}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:D}=p;if(g&&this.currentDirection===null){this.currentDirection=LI(D),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",p.point,D),this.updateAxis("y",p.point,D),this.visualElement.render(),w&&w(u,p)},l=(u,p)=>this.stop(u,p),c=()=>Yi(u=>{var p;return this.getAnimationState(u)==="paused"&&((p=this.getAxisMotionValue(u).animation)===null||p===void 0?void 0:p.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new qD(e,{onSessionStart:r,onStart:o,onMove:s,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,contextWindow:i5(this.visualElement)})}stop(e,i){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=i;this.startAnimation(r);const{onDragEnd:o}=this.getProps();o&&ve.update(()=>o(e,i))}cancel(){this.isDragging=!1;const{projection:e,animationState:i}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),i&&i.setActive("whileDrag",!1)}updateAxis(e,i,n){const{drag:r}=this.getProps();if(!n||!eu(e,r,this.currentDirection))return;const o=this.getAxisMotionValue(e);let s=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(s=jI(s,this.constraints[e],this.elastic[e])),o.set(s)}resolveConstraints(){var e;const{dragConstraints:i,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,o=this.constraints;i&&wa(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&r?this.constraints=SI(r.layoutBox,i):this.constraints=!1,this.elastic=PI(n),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Yi(s=>{this.getAxisMotionValue(s)&&(this.constraints[s]=CI(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:i}=this.getProps();if(!e||!wa(e))return!1;const n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const o=zI(n,r.root,this.visualElement.getTransformPagePoint());let s=DI(r.layout.layoutBox,o);if(i){const l=i(TI(s));this.hasMutatedConstraints=!!l,l&&(s=KD(l))}return s}startAnimation(e){const{drag:i,dragMomentum:n,dragElastic:r,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},d=Yi(u=>{if(!eu(u,i,this.currentDirection))return;let p=c&&c[u]||{};s&&(p={min:0,max:0});const f=r?200:1e6,g=r?40:1e7,y={type:"inertia",velocity:n?e[u]:0,bounceStiffness:f,bounceDamping:g,timeConstant:750,restDelta:1,restSpeed:10,...o,...p};return this.startAxisValueAnimation(u,y)});return Promise.all(d).then(l)}startAxisValueAnimation(e,i){const n=this.getAxisMotionValue(e);return n.start(P1(e,n,0,i))}stopAnimation(){Yi(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Yi(e=>{var i;return(i=this.getAxisMotionValue(e).animation)===null||i===void 0?void 0:i.pause()})}getAnimationState(e){var i;return(i=this.getAxisMotionValue(e).animation)===null||i===void 0?void 0:i.state}getAxisMotionValue(e){const i="_drag"+e.toUpperCase(),n=this.visualElement.getProps(),r=n[i];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Yi(i=>{const{drag:n}=this.getProps();if(!eu(i,n,this.currentDirection))return;const{projection:r}=this.visualElement,o=this.getAxisMotionValue(i);if(r&&r.layout){const{min:s,max:l}=r.layout.layoutBox[i];o.set(e[i]-Ve(s,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:i}=this.getProps(),{projection:n}=this.visualElement;if(!wa(i)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Yi(s=>{const l=this.getAxisMotionValue(s);if(l){const c=l.get();r[s]=_I({min:c,max:c},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Yi(s=>{if(!eu(s,e,null))return;const l=this.getAxisMotionValue(s),{min:c,max:d}=this.constraints[s];l.set(Ve(c,d,r[s]))})}addListeners(){if(!this.visualElement.current)return;FI.set(this.visualElement,this);const e=this.visualElement.current,i=gr(e,"pointerdown",c=>{const{drag:d,dragListener:u=!0}=this.getProps();d&&u&&this.start(c)}),n=()=>{const{dragConstraints:c}=this.getProps();wa(c)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,o=r.addEventListener("measure",n);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),n();const s=pr(window,"resize",()=>this.scalePositionWithinConstraints()),l=r.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d})=>{this.isDragging&&d&&(Yi(u=>{const p=this.getAxisMotionValue(u);p&&(this.originPoint[u]+=c[u].translate,p.set(p.get()+c[u].translate))}),this.visualElement.render())});return()=>{s(),i(),o(),l&&l()}}getProps(){const e=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:o=!1,dragElastic:s=xg,dragMomentum:l=!0}=e;return{...e,drag:i,dragDirectionLock:n,dragPropagation:r,dragConstraints:o,dragElastic:s,dragMomentum:l}}}function eu(t,e,i){return(e===!0||e===t)&&(i===null||i===t)}function LI(t,e=10){let i=null;return Math.abs(t.y)>e?i="y":Math.abs(t.x)>e&&(i="x"),i}class NI extends Co{constructor(e){super(e),this.removeGroupControls=qe,this.removeListeners=qe,this.controls=new RI(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||qe}unmount(){this.removeGroupControls(),this.removeListeners()}}const Py=t=>(e,i)=>{t&&ve.update(()=>t(e,i))};class OI extends Co{constructor(){super(...arguments),this.removePointerDownListener=qe}onPointerDown(e){this.session=new qD(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:i5(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:i,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:Py(e),onStart:Py(i),onMove:n,onEnd:(o,s)=>{delete this.session,r&&ve.update(()=>r(o,s))}}}mount(){this.removePointerDownListener=gr(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function $I(){const t=T.useContext(Hp);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:i,register:n}=t,r=T.useId();return T.useEffect(()=>n(r),[]),!e&&i?[!1,()=>i&&i(r)]:[!0]}const sh={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Ty(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Al={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(K.test(t))t=parseFloat(t);else return t;const i=Ty(t,e.target.x),n=Ty(t,e.target.y);return`${i}% ${n}%`}},BI={correct:(t,{treeScale:e,projectionDelta:i})=>{const n=t,r=yo.parse(t);if(r.length>5)return n;const o=yo.createTransformer(t),s=typeof r[0]!="number"?1:0,l=i.x.scale*e.x,c=i.y.scale*e.y;r[0+s]/=l,r[1+s]/=c;const d=Ve(l,c,.5);return typeof r[2+s]=="number"&&(r[2+s]/=d),typeof r[3+s]=="number"&&(r[3+s]/=d),o(r)}};class VI extends q.Component{componentDidMount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:n,layoutId:r}=this.props,{projection:o}=e;KP(WI),o&&(i.group&&i.group.add(o),n&&n.register&&r&&n.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),sh.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:i,visualElement:n,drag:r,isPresent:o}=this.props,s=n.projection;return s&&(s.isPresent=o,r||e.layoutDependency!==i||i===void 0?s.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?s.promote():s.relegate()||ve.postRender(()=>{const l=s.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function n5(t){const[e,i]=$I(),n=T.useContext(f1);return q.createElement(VI,{...t,layoutGroup:n,switchLayoutGroup:T.useContext(KS),isPresent:e,safeToRemove:i})}const WI={borderRadius:{...Al,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Al,borderTopRightRadius:Al,borderBottomLeftRadius:Al,borderBottomRightRadius:Al,boxShadow:BI},r5=["TopLeft","TopRight","BottomLeft","BottomRight"],UI=r5.length,Ey=t=>typeof t=="string"?parseFloat(t):t,Iy=t=>typeof t=="number"||K.test(t);function HI(t,e,i,n,r,o){r?(t.opacity=Ve(0,i.opacity!==void 0?i.opacity:1,YI(n)),t.opacityExit=Ve(e.opacity!==void 0?e.opacity:1,0,GI(n))):o&&(t.opacity=Ve(e.opacity!==void 0?e.opacity:1,i.opacity!==void 0?i.opacity:1,n));for(let s=0;s<UI;s++){const l=`border${r5[s]}Radius`;let c=Ay(e,l),d=Ay(i,l);if(c===void 0&&d===void 0)continue;c||(c=0),d||(d=0),c===0||d===0||Iy(c)===Iy(d)?(t[l]=Math.max(Ve(Ey(c),Ey(d),n),0),(Un.test(d)||Un.test(c))&&(t[l]+="%")):t[l]=d}(e.rotate||i.rotate)&&(t.rotate=Ve(e.rotate||0,i.rotate||0,n))}function Ay(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const YI=o5(0,.5,CD),GI=o5(.5,.95,qe);function o5(t,e,i){return n=>n<t?0:n>e?1:i(el(t,e,n))}function My(t,e){t.min=e.min,t.max=e.max}function Ui(t,e){My(t.x,e.x),My(t.y,e.y)}function zy(t,e,i,n,r){return t-=e,t=np(t,1/i,n),r!==void 0&&(t=np(t,1/r,n)),t}function XI(t,e=0,i=1,n=.5,r,o=t,s=t){if(Un.test(e)&&(e=parseFloat(e),e=Ve(s.min,s.max,e/100)-s.min),typeof e!="number")return;let l=Ve(o.min,o.max,n);t===o&&(l-=e),t.min=zy(t.min,e,i,l,r),t.max=zy(t.max,e,i,l,r)}function Fy(t,e,[i,n,r],o,s){XI(t,e[i],e[n],e[r],e.scale,o,s)}const ZI=["x","scaleX","originX"],qI=["y","scaleY","originY"];function Ry(t,e,i,n){Fy(t.x,e,ZI,i?i.x:void 0,n?n.x:void 0),Fy(t.y,e,qI,i?i.y:void 0,n?n.y:void 0)}function Ly(t){return t.translate===0&&t.scale===1}function s5(t){return Ly(t.x)&&Ly(t.y)}function QI(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}function a5(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function Ny(t){return Ni(t.x)/Ni(t.y)}class KI{constructor(){this.members=[]}add(e){T1(this.members,e),e.scheduleRender()}remove(e){if(E1(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(e){const i=this.members.findIndex(r=>e===r);if(i===0)return!1;let n;for(let r=i;r>=0;r--){const o=this.members[r];if(o.isPresent!==!1){n=o;break}}return n?(this.promote(n),!0):!1}promote(e,i){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,i&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&n.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:i,resumingFrom:n}=e;i.onExitComplete&&i.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Oy(t,e,i){let n="";const r=t.x.translate/e.x,o=t.y.translate/e.y;if((r||o)&&(n=`translate3d(${r}px, ${o}px, 0) `),(e.x!==1||e.y!==1)&&(n+=`scale(${1/e.x}, ${1/e.y}) `),i){const{rotate:c,rotateX:d,rotateY:u}=i;c&&(n+=`rotate(${c}deg) `),d&&(n+=`rotateX(${d}deg) `),u&&(n+=`rotateY(${u}deg) `)}const s=t.x.scale*e.x,l=t.y.scale*e.y;return(s!==1||l!==1)&&(n+=`scale(${s}, ${l})`),n||"none"}const JI=(t,e)=>t.depth-e.depth;class e9{constructor(){this.children=[],this.isDirty=!1}add(e){T1(this.children,e),this.isDirty=!0}remove(e){E1(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(JI),this.isDirty=!1,this.children.forEach(e)}}function t9(t,e){const i=performance.now(),n=({timestamp:r})=>{const o=r-i;o>=e&&(Cn(n),t(o-e))};return ve.read(n,!0),()=>Cn(n)}function i9(t){window.MotionDebug&&window.MotionDebug.record(t)}function n9(t){return t instanceof SVGElement&&t.tagName!=="svg"}function r9(t,e,i){const n=bi(t)?t:kn(t);return n.start(P1("",n,e,i)),n.animation}const $y=["","X","Y","Z"],o9={visibility:"hidden"},By=1e3;let s9=0;const Go={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function l5({attachResizeListener:t,defaultParent:e,measureScroll:i,checkIsScrollRoot:n,resetTransform:r}){return class{constructor(s={},l=e==null?void 0:e()){this.id=s9++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Go.totalNodes=Go.resolvedTargetDeltas=Go.recalculatedProjection=0,this.nodes.forEach(c9),this.nodes.forEach(f9),this.nodes.forEach(m9),this.nodes.forEach(d9),i9(Go)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new e9)}addEventListener(s,l){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new I1),this.eventHandlers.get(s).add(l)}notifyListeners(s,...l){const c=this.eventHandlers.get(s);c&&c.notify(...l)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=n9(s),this.instance=s;const{layoutId:c,layout:d,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(d||c)&&(this.isLayoutDirty=!0),t){let p;const f=()=>this.root.updateBlockedByResize=!1;t(s,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=t9(f,250),sh.hasAnimatedSinceResize&&(sh.hasAnimatedSinceResize=!1,this.nodes.forEach(Wy))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&u&&(c||d)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:f,hasRelativeTargetChanged:g,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||u.getDefaultTransition()||y9,{onLayoutAnimationStart:D,onLayoutAnimationComplete:j}=u.getProps(),b=!this.targetLayout||!a5(this.targetLayout,y)||g,v=!f&&g;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||f&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(p,v);const h={...C1(w,"layout"),onPlay:D,onComplete:j};(u.shouldReduceMotion||this.options.layoutRoot)&&(h.delay=0,h.type=!1),this.startAnimation(h)}else f||Wy(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Cn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(g9),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const p=this.path[u];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Vy);return}this.isUpdating||this.nodes.forEach(h9),this.isUpdating=!1,this.nodes.forEach(p9),this.nodes.forEach(a9),this.nodes.forEach(l9),this.clearAllSnapshots();const l=performance.now();At.delta=vo(0,1e3/60,l-At.timestamp),At.timestamp=l,At.isProcessing=!0,Vf.update.process(At),Vf.preRender.process(At),Vf.render.process(At),At.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(u9),this.sharedNodes.forEach(x9)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ve.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ve.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=st(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let l=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(l=!1),l&&(this.scroll={animationId:this.root.animationId,phase:s,isRoot:n(this.instance),offset:i(this.instance)})}resetTransform(){if(!r)return;const s=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!s5(this.projectionDelta),c=this.getTransformTemplate(),d=c?c(this.latestValues,""):void 0,u=d!==this.prevTransformTemplateValue;s&&(l||Yo(this.latestValues)||u)&&(r(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return s&&(c=this.removeTransform(c)),b9(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:s}=this.options;if(!s)return st();const l=s.measureViewportBox(),{scroll:c}=this.root;return c&&(Vr(l.x,c.offset.x),Vr(l.y,c.offset.y)),l}removeElementScroll(s){const l=st();Ui(l,s);for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:u,options:p}=d;if(d!==this.root&&u&&p.layoutScroll){if(u.isRoot){Ui(l,s);const{scroll:f}=this.root;f&&(Vr(l.x,-f.offset.x),Vr(l.y,-f.offset.y))}Vr(l.x,u.offset.x),Vr(l.y,u.offset.y)}}return l}applyTransform(s,l=!1){const c=st();Ui(c,s);for(let d=0;d<this.path.length;d++){const u=this.path[d];!l&&u.options.layoutScroll&&u.scroll&&u!==u.root&&ba(c,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Yo(u.latestValues)&&ba(c,u.latestValues)}return Yo(this.latestValues)&&ba(c,this.latestValues),c}removeTransform(s){const l=st();Ui(l,s);for(let c=0;c<this.path.length;c++){const d=this.path[c];if(!d.instance||!Yo(d.latestValues))continue;wg(d.latestValues)&&d.updateSnapshot();const u=st(),p=d.measurePageBox();Ui(u,p),Ry(l,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,u)}return Yo(this.latestValues)&&Ry(l,this.latestValues),l}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==At.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==c;if(!(s||d&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:p,layoutId:f}=this.options;if(!(!this.layout||!(p||f))){if(this.resolvedRelativeTargetAt=At.timestamp,!this.targetDelta&&!this.relativeTarget){const g=this.getClosestProjectingParent();g&&g.layout&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=st(),this.relativeTargetOrigin=st(),xc(this.relativeTargetOrigin,this.layout.layoutBox,g.layout.layoutBox),Ui(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=st(),this.targetWithTransforms=st()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),kI(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ui(this.target,this.layout.layoutBox),e5(this.target,this.targetDelta)):Ui(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const g=this.getClosestProjectingParent();g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?(this.relativeParent=g,this.forceRelativeParentToResolveTarget(),this.relativeTarget=st(),this.relativeTargetOrigin=st(),xc(this.relativeTargetOrigin,this.target,g.target),Ui(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Go.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||wg(this.parent.latestValues)||JD(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let d=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(d=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===At.timestamp&&(d=!1),d)return;const{layout:u,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||p))return;Ui(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,g=this.treeScale.y;II(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox);const{target:y}=l;if(!y){this.projectionTransform&&(this.projectionDelta=ya(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=ya(),this.projectionDeltaWithTransform=ya());const w=this.projectionTransform;gc(this.projectionDelta,this.layoutCorrected,y,this.latestValues),this.projectionTransform=Oy(this.projectionDelta,this.treeScale),(this.projectionTransform!==w||this.treeScale.x!==f||this.treeScale.y!==g)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),Go.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(s,l=!1){const c=this.snapshot,d=c?c.latestValues:{},u={...this.latestValues},p=ya();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const f=st(),g=c?c.source:void 0,y=this.layout?this.layout.source:void 0,w=g!==y,D=this.getStack(),j=!D||D.members.length<=1,b=!!(w&&!j&&this.options.crossfade===!0&&!this.path.some(v9));this.animationProgress=0;let v;this.mixTargetDelta=h=>{const x=h/1e3;Uy(p.x,s.x,x),Uy(p.y,s.y,x),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(xc(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),w9(this.relativeTarget,this.relativeTargetOrigin,f,x),v&&QI(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=st()),Ui(v,this.relativeTarget)),w&&(this.animationValues=u,HI(u,d,this.latestValues,x,b,j)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=x},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Cn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ve.update(()=>{sh.hasAnimatedSinceResize=!0,this.currentAnimation=r9(0,By,{...s,onUpdate:l=>{this.mixTargetDelta(l),s.onUpdate&&s.onUpdate(l)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(By),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:l,target:c,layout:d,latestValues:u}=s;if(!(!l||!c||!d)){if(this!==s&&this.layout&&d&&c5(this.options.animationType,this.layout.layoutBox,d.layoutBox)){c=this.target||st();const p=Ni(this.layout.layoutBox.x);c.x.min=s.target.x.min,c.x.max=c.x.min+p;const f=Ni(this.layout.layoutBox.y);c.y.min=s.target.y.min,c.y.max=c.y.min+f}Ui(l,c),ba(l,u),gc(this.projectionDeltaWithTransform,this.layoutCorrected,l,u)}}registerSharedNode(s,l){this.sharedNodes.has(s)||this.sharedNodes.set(s,new KI),this.sharedNodes.get(s).add(l);const d=l.options.initialPromotionConfig;l.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(l):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:l}=this.options;return l?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:l}=this.options;return l?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:l,preserveFollowOpacity:c}={}){const d=this.getStack();d&&d.promote(this,c),s&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetRotation(){const{visualElement:s}=this.options;if(!s)return;let l=!1;const{latestValues:c}=s;if((c.rotate||c.rotateX||c.rotateY||c.rotateZ)&&(l=!0),!l)return;const d={};for(let u=0;u<$y.length;u++){const p="rotate"+$y[u];c[p]&&(d[p]=c[p],s.setStaticValue(p,0))}s.render();for(const u in d)s.setStaticValue(u,d[u]);s.scheduleRender()}getProjectionStyles(s){var l,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return o9;const d={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,d.opacity="",d.pointerEvents=oh(s==null?void 0:s.pointerEvents)||"",d.transform=u?u(this.latestValues,""):"none",d;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=oh(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Yo(this.latestValues)&&(w.transform=u?u({},""):"none",this.hasProjected=!1),w}const f=p.animationValues||p.latestValues;this.applyTransformsToTarget(),d.transform=Oy(this.projectionDeltaWithTransform,this.treeScale,f),u&&(d.transform=u(f,d.transform));const{x:g,y}=this.projectionDelta;d.transformOrigin=`${g.origin*100}% ${y.origin*100}% 0`,p.animationValues?d.opacity=p===this?(c=(l=f.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:d.opacity=p===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const w in qh){if(f[w]===void 0)continue;const{correct:D,applyTo:j}=qh[w],b=d.transform==="none"?f[w]:D(f[w],p);if(j){const v=j.length;for(let h=0;h<v;h++)d[j[h]]=b}else d[w]=b}return this.options.layoutId&&(d.pointerEvents=p===this?oh(s==null?void 0:s.pointerEvents)||"":"none"),d}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var l;return(l=s.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(Vy),this.root.sharedNodes.clear()}}}function a9(t){t.updateLayout()}function l9(t){var e;const i=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&i&&t.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:r}=t.layout,{animationType:o}=t.options,s=i.source!==t.layout.source;o==="size"?Yi(p=>{const f=s?i.measuredBox[p]:i.layoutBox[p],g=Ni(f);f.min=n[p].min,f.max=f.min+g}):c5(o,i.layoutBox,n)&&Yi(p=>{const f=s?i.measuredBox[p]:i.layoutBox[p],g=Ni(n[p]);f.max=f.min+g,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[p].max=t.relativeTarget[p].min+g)});const l=ya();gc(l,n,i.layoutBox);const c=ya();s?gc(c,t.applyTransform(r,!0),i.measuredBox):gc(c,n,i.layoutBox);const d=!s5(l);let u=!1;if(!t.resumeFrom){const p=t.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:f,layout:g}=p;if(f&&g){const y=st();xc(y,i.layoutBox,f.layoutBox);const w=st();xc(w,n,g.layoutBox),a5(y,w)||(u=!0),p.options.layoutRoot&&(t.relativeTarget=w,t.relativeTargetOrigin=y,t.relativeParent=p)}}}t.notifyListeners("didUpdate",{layout:n,snapshot:i,delta:c,layoutDelta:l,hasLayoutChanged:d,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:n}=t.options;n&&n()}t.options.transition=void 0}function c9(t){Go.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function d9(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function u9(t){t.clearSnapshot()}function Vy(t){t.clearMeasurements()}function h9(t){t.isLayoutDirty=!1}function p9(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Wy(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function f9(t){t.resolveTargetDelta()}function m9(t){t.calcProjection()}function g9(t){t.resetRotation()}function x9(t){t.removeLeadSnapshot()}function Uy(t,e,i){t.translate=Ve(e.translate,0,i),t.scale=Ve(e.scale,1,i),t.origin=e.origin,t.originPoint=e.originPoint}function Hy(t,e,i,n){t.min=Ve(e.min,i.min,n),t.max=Ve(e.max,i.max,n)}function w9(t,e,i,n){Hy(t.x,e.x,i.x,n),Hy(t.y,e.y,i.y,n)}function v9(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const y9={duration:.45,ease:[.4,0,.1,1]},Yy=t=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(t),Gy=Yy("applewebkit/")&&!Yy("chrome/")?Math.round:qe;function Xy(t){t.min=Gy(t.min),t.max=Gy(t.max)}function b9(t){Xy(t.x),Xy(t.y)}function c5(t,e,i){return t==="position"||t==="preserve-aspect"&&!gg(Ny(e),Ny(i),.2)}const k9=l5({attachResizeListener:(t,e)=>pr(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Jf={current:void 0},d5=l5({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Jf.current){const t=new k9({});t.mount(window),t.setOptions({layoutScroll:!0}),Jf.current=t}return Jf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),j9={pan:{Feature:OI},drag:{Feature:NI,ProjectionNode:d5,MeasureLayout:n5}},S9=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function D9(t){const e=S9.exec(t);if(!e)return[,];const[,i,n]=e;return[i,n]}function yg(t,e,i=1){const[n,r]=D9(t);if(!n)return;const o=window.getComputedStyle(e).getPropertyValue(n);if(o){const s=o.trim();return HD(s)?parseFloat(s):s}else return lg(r)?yg(r,e,i+1):r}function _9(t,{...e},i){const n=t.current;if(!(n instanceof Element))return{target:e,transitionEnd:i};i&&(i={...i}),t.values.forEach(r=>{const o=r.get();if(!lg(o))return;const s=yg(o,n);s&&r.set(s)});for(const r in e){const o=e[r];if(!lg(o))continue;const s=yg(o,n);s&&(e[r]=s,i||(i={}),i[r]===void 0&&(i[r]=o))}return{target:e,transitionEnd:i}}const C9=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),u5=t=>C9.has(t),P9=t=>Object.keys(t).some(u5),Zy=t=>t===Fs||t===K,qy=(t,e)=>parseFloat(t.split(", ")[e]),Qy=(t,e)=>(i,{transform:n})=>{if(n==="none"||!n)return 0;const r=n.match(/^matrix3d\((.+)\)$/);if(r)return qy(r[1],e);{const o=n.match(/^matrix\((.+)\)$/);return o?qy(o[1],t):0}},T9=new Set(["x","y","z"]),E9=vd.filter(t=>!T9.has(t));function I9(t){const e=[];return E9.forEach(i=>{const n=t.getValue(i);n!==void 0&&(e.push([i,n.get()]),n.set(i.startsWith("scale")?1:0))}),e.length&&t.render(),e}const tl={width:({x:t},{paddingLeft:e="0",paddingRight:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),height:({y:t},{paddingTop:e="0",paddingBottom:i="0"})=>t.max-t.min-parseFloat(e)-parseFloat(i),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Qy(4,13),y:Qy(5,14)};tl.translateX=tl.x;tl.translateY=tl.y;const A9=(t,e,i)=>{const n=e.measureViewportBox(),r=e.current,o=getComputedStyle(r),{display:s}=o,l={};s==="none"&&e.setStaticValue("display",t.display||"block"),i.forEach(d=>{l[d]=tl[d](n,o)}),e.render();const c=e.measureViewportBox();return i.forEach(d=>{const u=e.getValue(d);u&&u.jump(l[d]),t[d]=tl[d](c,o)}),t},M9=(t,e,i={},n={})=>{e={...e},n={...n};const r=Object.keys(e).filter(u5);let o=[],s=!1;const l=[];if(r.forEach(c=>{const d=t.getValue(c);if(!t.hasValue(c))return;let u=i[c],p=Il(u);const f=e[c];let g;if(Kh(f)){const y=f.length,w=f[0]===null?1:0;u=f[w],p=Il(u);for(let D=w;D<y&&f[D]!==null;D++)g?Kp(Il(f[D])===g):g=Il(f[D])}else g=Il(f);if(p!==g)if(Zy(p)&&Zy(g)){const y=d.get();typeof y=="string"&&d.set(parseFloat(y)),typeof f=="string"?e[c]=parseFloat(f):Array.isArray(f)&&g===K&&(e[c]=f.map(parseFloat))}else p!=null&&p.transform&&(g!=null&&g.transform)&&(u===0||f===0)?u===0?d.set(g.transform(u)):e[c]=p.transform(f):(s||(o=I9(t),s=!0),l.push(c),n[c]=n[c]!==void 0?n[c]:e[c],d.jump(f))}),l.length){const c=l.indexOf("height")>=0?window.pageYOffset:null,d=A9(e,t,l);return o.length&&o.forEach(([u,p])=>{t.getValue(u).set(p)}),t.render(),Yp&&c!==null&&window.scrollTo({top:c}),{target:d,transitionEnd:n}}else return{target:e,transitionEnd:n}};function z9(t,e,i,n){return P9(e)?M9(t,e,i,n):{target:e,transitionEnd:n}}const F9=(t,e,i,n)=>{const r=_9(t,e,n);return e=r.target,n=r.transitionEnd,z9(t,e,i,n)},bg={current:null},h5={current:!1};function R9(){if(h5.current=!0,!!Yp)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>bg.current=t.matches;t.addListener(e),e()}else bg.current=!1}function L9(t,e,i){const{willChange:n}=e;for(const r in e){const o=e[r],s=i[r];if(bi(o))t.addValue(r,o),ip(n)&&n.add(r);else if(bi(s))t.addValue(r,kn(o,{owner:t})),ip(n)&&n.remove(r);else if(s!==o)if(t.hasValue(r)){const l=t.getValue(r);!l.hasAnimated&&l.set(o)}else{const l=t.getStaticValue(r);t.addValue(r,kn(l!==void 0?l:o,{owner:t}))}}for(const r in i)e[r]===void 0&&t.removeValue(r);return e}const Ky=new WeakMap,p5=Object.keys(td),N9=p5.length,Jy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],O9=p1.length;class $9{constructor({parent:e,props:i,presenceContext:n,reducedMotionConfig:r,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ve.render(this.render,!1,!0);const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=i.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=i,this.presenceContext=n,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=s,this.isControllingVariants=Xp(i),this.isVariantNode=QS(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...u}=this.scrapeMotionValuesFromProps(i,{});for(const p in u){const f=u[p];l[p]!==void 0&&bi(f)&&(f.set(l[p],!1),ip(d)&&d.add(p))}}scrapeMotionValuesFromProps(e,i){return{}}mount(e){this.current=e,Ky.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,n)=>this.bindToMotionValue(n,i)),h5.current||R9(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:bg.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Ky.delete(this.current),this.projection&&this.projection.unmount(),Cn(this.notifyUpdate),Cn(this.render),this.valueSubscriptions.forEach(e=>e()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,i){const n=zs.has(e),r=i.on("change",s=>{this.latestValues[e]=s,this.props.onUpdate&&ve.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)}),o=i.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,()=>{r(),o()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}loadFeatures({children:e,...i},n,r,o){let s,l;for(let c=0;c<N9;c++){const d=p5[c],{isEnabled:u,Feature:p,ProjectionNode:f,MeasureLayout:g}=td[d];f&&(s=f),u(i)&&(!this.features[d]&&p&&(this.features[d]=new p(this)),g&&(l=g))}if((this.type==="html"||this.type==="svg")&&!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:c,layout:d,drag:u,dragConstraints:p,layoutScroll:f,layoutRoot:g}=i;this.projection.setOptions({layoutId:c,layout:d,alwaysMeasureLayout:!!u||p&&wa(p),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof d=="string"?d:"both",initialPromotionConfig:o,layoutScroll:f,layoutRoot:g})}return l}updateFeatures(){for(const e in this.features){const i=this.features[e];i.isMounted?i.update():(i.mount(),i.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):st()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,i){this.latestValues[e]=i}makeTargetAnimatable(e,i=!0){return this.makeTargetAnimatableFromInstance(e,this.props,i)}update(e,i){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let n=0;n<Jy.length;n++){const r=Jy[n];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const o=e["on"+r];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=L9(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const n=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(n.initial=this.props.initial),n}const i={};for(let n=0;n<O9;n++){const r=p1[n],o=this.props[r];(ed(o)||o===!1)&&(i[r]=o)}return i}addVariantChild(e){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(e),()=>i.variantChildren.delete(e)}addValue(e,i){i!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,i)),this.values.set(e,i),this.latestValues[e]=i.get()}removeValue(e){this.values.delete(e);const i=this.valueSubscriptions.get(e);i&&(i(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,i){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return n===void 0&&i!==void 0&&(n=kn(i,{owner:this}),this.addValue(e,n)),n}readValue(e){var i;return this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options)}setBaseTarget(e,i){this.baseTarget[e]=i}getBaseTarget(e){var i;const{initial:n}=this.props,r=typeof n=="string"||typeof n=="object"?(i=b1(this.props,n))===null||i===void 0?void 0:i[e]:void 0;if(n&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!bi(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,i){return this.events[e]||(this.events[e]=new I1),this.events[e].add(i)}notify(e,...i){this.events[e]&&this.events[e].notify(...i)}}class f5 extends $9{sortInstanceNodePosition(e,i){return e.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(e,i){return e.style?e.style[i]:void 0}removeValueFromRenderState(e,{vars:i,style:n}){delete i[e],delete n[e]}makeTargetAnimatableFromInstance({transition:e,transitionEnd:i,...n},{transformValues:r},o){let s=rI(n,e||{},this);if(r&&(i&&(i=r(i)),n&&(n=r(n)),s&&(s=r(s))),o){iI(this,n,s);const l=F9(this,n,s,i);i=l.transitionEnd,n=l.target}return{transition:e,transitionEnd:i,...n}}}function B9(t){return window.getComputedStyle(t)}class V9 extends f5{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,i){if(zs.has(i)){const n=_1(i);return n&&n.default||0}else{const n=B9(e),r=(tD(i)?n.getPropertyValue(i):n[i])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:i}){return t5(e,i)}build(e,i,n,r){g1(e,i,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,i){return y1(e,i)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;bi(e)&&(this.childSubscription=e.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}renderInstance(e,i,n,r){aD(e,i,n,r)}}class W9 extends f5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,i){return e[i]}readValueFromInstance(e,i){if(zs.has(i)){const n=_1(i);return n&&n.default||0}return i=lD.has(i)?i:u1(i),e.getAttribute(i)}measureInstanceViewportBox(){return st()}scrapeMotionValuesFromProps(e,i){return dD(e,i)}build(e,i,n,r){w1(e,i,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,i,n,r){cD(e,i,n,r)}mount(e){this.isSVGTag=v1(e.tagName),super.mount(e)}}const U9=(t,e)=>m1(t)?new W9(e,{enableHardwareAcceleration:!1}):new V9(e,{enableHardwareAcceleration:!0}),H9={layout:{ProjectionNode:d5,MeasureLayout:n5}},Y9={...wI,...BT,...j9,...H9},L=qP((t,e)=>PT(t,e,Y9,U9));function m5(){const t=T.useRef(!1);return ml(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function G9(){const t=m5(),[e,i]=T.useState(0),n=T.useCallback(()=>{t.current&&i(e+1)},[e]);return[T.useCallback(()=>ve.postRender(n),[n]),e]}class X9 extends T.Component{getSnapshotBeforeUpdate(e){const i=this.props.childRef.current;if(i&&e.isPresent&&!this.props.isPresent){const n=this.props.sizeRef.current;n.height=i.offsetHeight||0,n.width=i.offsetWidth||0,n.top=i.offsetTop,n.left=i.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Z9({children:t,isPresent:e}){const i=T.useId(),n=T.useRef(null),r=T.useRef({width:0,height:0,top:0,left:0});return T.useInsertionEffect(()=>{const{width:o,height:s,top:l,left:c}=r.current;if(e||!n.current||!o||!s)return;n.current.dataset.motionPopId=i;const d=document.createElement("style");return document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[e]),T.createElement(X9,{isPresent:e,childRef:n,sizeRef:r},T.cloneElement(t,{ref:n}))}const e0=({children:t,initial:e,isPresent:i,onExitComplete:n,custom:r,presenceAffectsLayout:o,mode:s})=>{const l=gl(q9),c=T.useId(),d=T.useMemo(()=>({id:c,initial:e,isPresent:i,custom:r,onExitComplete:u=>{l.set(u,!0);for(const p of l.values())if(!p)return;n&&n()},register:u=>(l.set(u,!1),()=>l.delete(u))}),o?void 0:[i]);return T.useMemo(()=>{l.forEach((u,p)=>l.set(p,!1))},[i]),T.useEffect(()=>{!i&&!l.size&&n&&n()},[i]),s==="popLayout"&&(t=T.createElement(Z9,{isPresent:i},t)),T.createElement(Hp.Provider,{value:d},t)};function q9(){return new Map}function Q9(t){return T.useEffect(()=>()=>t(),[])}const Xo=t=>t.key||"";function K9(t,e){t.forEach(i=>{const n=Xo(i);e.set(n,i)})}function J9(t){const e=[];return T.Children.forEach(t,i=>{T.isValidElement(i)&&e.push(i)}),e}const eA=({children:t,custom:e,initial:i=!0,onExitComplete:n,exitBeforeEnter:r,presenceAffectsLayout:o=!0,mode:s="sync"})=>{const l=T.useContext(f1).forceRender||G9()[0],c=m5(),d=J9(t);let u=d;const p=T.useRef(new Map).current,f=T.useRef(u),g=T.useRef(new Map).current,y=T.useRef(!0);if(ml(()=>{y.current=!1,K9(d,g),f.current=u}),Q9(()=>{y.current=!0,g.clear(),p.clear()}),y.current)return T.createElement(T.Fragment,null,u.map(b=>T.createElement(e0,{key:Xo(b),isPresent:!0,initial:i?void 0:!1,presenceAffectsLayout:o,mode:s},b)));u=[...u];const w=f.current.map(Xo),D=d.map(Xo),j=w.length;for(let b=0;b<j;b++){const v=w[b];D.indexOf(v)===-1&&!p.has(v)&&p.set(v,void 0)}return s==="wait"&&p.size&&(u=[]),p.forEach((b,v)=>{if(D.indexOf(v)!==-1)return;const h=g.get(v);if(!h)return;const x=w.indexOf(v);let k=b;if(!k){const S=()=>{p.delete(v);const _=Array.from(g.keys()).filter(C=>!D.includes(C));if(_.forEach(C=>g.delete(C)),f.current=d.filter(C=>{const E=Xo(C);return E===v||_.includes(E)}),!p.size){if(c.current===!1)return;l(),n&&n()}};k=T.createElement(e0,{key:Xo(h),isPresent:!1,onExitComplete:S,custom:e,presenceAffectsLayout:o,mode:s},h),p.set(v,k)}u.splice(x,0,k)}),u=u.map(b=>{const v=b.key;return p.has(v)?b:T.createElement(e0,{key:Xo(b),isPresent:!0,presenceAffectsLayout:o,mode:s},b)}),T.createElement(T.Fragment,null,p.size?u:u.map(b=>T.cloneElement(b)))};function g5(t){const e=gl(()=>kn(t)),{isStatic:i}=T.useContext(d1);if(i){const[,n]=T.useState(t);T.useEffect(()=>e.on("change",n),[])}return e}const tA=t=>t&&typeof t=="object"&&t.mix,iA=t=>tA(t)?t.mix:void 0;function nA(...t){const e=!Array.isArray(t[0]),i=e?0:-1,n=t[0+i],r=t[1+i],o=t[2+i],s=t[3+i],l=Jp(r,o,{mixer:iA(o[0]),...s});return e?l(n):l}function x5(t,e){const i=g5(e()),n=()=>i.set(e());return n(),ml(()=>{const r=()=>ve.update(n,!1,!0),o=t.map(s=>s.on("change",r));return()=>{o.forEach(s=>s()),Cn(n)}}),i}function rA(t){mc.current=[],t();const e=x5(mc.current,t);return mc.current=void 0,e}function Ml(t,e,i,n){if(typeof t=="function")return rA(t);const r=typeof e=="function"?e:nA(e,i,n);return Array.isArray(t)?e2(t,r):e2([t],([o])=>r(o))}function e2(t,e){const i=gl(()=>[]);return x5(t,()=>{i.length=0;const n=t.length;for(let r=0;r<n;r++)i[r]=t[r].get();return e(i)})}function oA(t,e,i){var n;if(typeof t=="string"){let r=document;e&&(Kp(!!e.current),r=e.current),i?((n=i[t])!==null&&n!==void 0||(i[t]=r.querySelectorAll(t)),t=i[t]):t=r.querySelectorAll(t)}else t instanceof Element&&(t=[t]);return Array.from(t||[])}const ah=new WeakMap;let Nr;function sA(t,e){if(e){const{inlineSize:i,blockSize:n}=e[0];return{width:i,height:n}}else return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}function aA({target:t,contentRect:e,borderBoxSize:i}){var n;(n=ah.get(t))===null||n===void 0||n.forEach(r=>{r({target:t,contentSize:e,get size(){return sA(t,i)}})})}function lA(t){t.forEach(aA)}function cA(){typeof ResizeObserver>"u"||(Nr=new ResizeObserver(lA))}function dA(t,e){Nr||cA();const i=oA(t);return i.forEach(n=>{let r=ah.get(n);r||(r=new Set,ah.set(n,r)),r.add(e),Nr==null||Nr.observe(n)}),()=>{i.forEach(n=>{const r=ah.get(n);r==null||r.delete(e),r!=null&&r.size||Nr==null||Nr.unobserve(n)})}}const lh=new Set;let wc;function uA(){wc=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};lh.forEach(i=>i(e))},window.addEventListener("resize",wc)}function hA(t){return lh.add(t),wc||uA(),()=>{lh.delete(t),!lh.size&&wc&&(wc=void 0)}}function pA(t,e){return typeof t=="function"?hA(t):dA(t,e)}const fA=50,t2=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),mA=()=>({time:0,x:t2(),y:t2()}),gA={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function i2(t,e,i,n){const r=i[e],{length:o,position:s}=gA[e],l=r.current,c=i.time;r.current=t["scroll"+s],r.scrollLength=t["scroll"+o]-t["client"+o],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=el(0,r.scrollLength,r.current);const d=n-c;r.velocity=d>fA?0:D1(r.current-l,d)}function xA(t,e,i){i2(t,"x",e,i),i2(t,"y",e,i),e.time=i}function wA(t,e){const i={x:0,y:0};let n=t;for(;n&&n!==e;)if(n instanceof HTMLElement)i.x+=n.offsetLeft,i.y+=n.offsetTop,n=n.offsetParent;else if(n.tagName==="svg"){const r=n.getBoundingClientRect();n=n.parentElement;const o=n.getBoundingClientRect();i.x+=r.left-o.left,i.y+=r.top-o.top}else if(n instanceof SVGGraphicsElement){const{x:r,y:o}=n.getBBox();i.x+=r,i.y+=o;let s=null,l=n.parentNode;for(;!s;)l.tagName==="svg"&&(s=l),l=n.parentNode;n=s}else break;return i}const vA={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},kg={start:0,center:.5,end:1};function n2(t,e,i=0){let n=0;if(kg[t]!==void 0&&(t=kg[t]),typeof t=="string"){const r=parseFloat(t);t.endsWith("px")?n=r:t.endsWith("%")?t=r/100:t.endsWith("vw")?n=r/100*document.documentElement.clientWidth:t.endsWith("vh")?n=r/100*document.documentElement.clientHeight:t=r}return typeof t=="number"&&(n=e*t),i+n}const yA=[0,0];function bA(t,e,i,n){let r=Array.isArray(t)?t:yA,o=0,s=0;return typeof t=="number"?r=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?r=t.split(" "):r=[t,kg[t]?t:"0"]),o=n2(r[0],i,n),s=n2(r[1],e),o-s}const kA={x:0,y:0};function jA(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function SA(t,e,i){let{offset:n=vA.All}=i;const{target:r=t,axis:o="y"}=i,s=o==="y"?"height":"width",l=r!==t?wA(r,t):kA,c=r===t?{width:t.scrollWidth,height:t.scrollHeight}:jA(r),d={width:t.clientWidth,height:t.clientHeight};e[o].offset.length=0;let u=!e[o].interpolate;const p=n.length;for(let f=0;f<p;f++){const g=bA(n[f],d[s],c[s],l[o]);!u&&g!==e[o].interpolatorOffsets[f]&&(u=!0),e[o].offset[f]=g}u&&(e[o].interpolate=Jp(e[o].offset,$D(n)),e[o].interpolatorOffsets=[...e[o].offset]),e[o].progress=e[o].interpolate(e[o].current)}function DA(t,e=t,i){if(i.x.targetOffset=0,i.y.targetOffset=0,e!==t){let n=e;for(;n&&n!==t;)i.x.targetOffset+=n.offsetLeft,i.y.targetOffset+=n.offsetTop,n=n.offsetParent}i.x.targetLength=e===t?e.scrollWidth:e.clientWidth,i.y.targetLength=e===t?e.scrollHeight:e.clientHeight,i.x.containerLength=t.clientWidth,i.y.containerLength=t.clientHeight}function _A(t,e,i,n={}){return{measure:()=>DA(t,n.target,i),update:r=>{xA(t,i,r),(n.offset||n.target)&&SA(t,i,n)},notify:()=>e(i)}}const zl=new WeakMap,r2=new WeakMap,t0=new WeakMap,o2=t=>t===document.documentElement?window:t;function CA(t,{container:e=document.documentElement,...i}={}){let n=t0.get(e);n||(n=new Set,t0.set(e,n));const r=mA(),o=_A(e,t,r,i);if(n.add(o),!zl.has(e)){const l=()=>{for(const f of n)f.measure()},c=()=>{for(const f of n)f.update(At.timestamp)},d=()=>{for(const f of n)f.notify()},u=()=>{ve.read(l,!1,!0),ve.read(c,!1,!0),ve.update(d,!1,!0)};zl.set(e,u);const p=o2(e);window.addEventListener("resize",u,{passive:!0}),e!==document.documentElement&&r2.set(e,pA(e,u)),p.addEventListener("scroll",u,{passive:!0})}const s=zl.get(e);return ve.read(s,!1,!0),()=>{var l;Cn(s);const c=t0.get(e);if(!c||(c.delete(o),c.size))return;const d=zl.get(e);zl.delete(e),d&&(o2(e).removeEventListener("scroll",d),(l=r2.get(e))===null||l===void 0||l(),window.removeEventListener("resize",d))}}function s2(t,e){wD(!!(!e||e.current))}const PA=()=>({scrollX:kn(0),scrollY:kn(0),scrollXProgress:kn(0),scrollYProgress:kn(0)});function TA({container:t,target:e,layoutEffect:i=!0,...n}={}){const r=gl(PA);return(i?ml:T.useEffect)(()=>(s2("target",e),s2("container",t),CA(({x:s,y:l})=>{r.scrollX.set(s.current),r.scrollXProgress.set(s.progress),r.scrollY.set(l.current),r.scrollYProgress.set(l.progress)},{...n,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0})),[t,e,JSON.stringify(n.offset)]),r}function EA(t){t.values.forEach(e=>e.stop())}function IA(){const t=new Set,e={subscribe(i){return t.add(i),()=>void t.delete(i)},start(i,n){const r=[];return t.forEach(o=>{r.push(ZD(o,i,{transitionOverride:n}))}),Promise.all(r)},set(i){return t.forEach(n=>{tI(n,i)})},stop(){t.forEach(i=>{EA(i)})},mount(){return()=>{e.stop()}}};return e}function AA(){const t=gl(IA);return ml(t.mount,[]),t}const MA=AA,rt=({title:t,description:e,keywords:i="graphic design, brand design, UX/UI design, portfolio, Nooshin Shahsavan",image:n="/src/assets/logoweb.png",url:r=window.location.href,type:o="website"})=>a.jsxs(kS,{children:[a.jsx("title",{children:t}),a.jsx("meta",{name:"description",content:e}),a.jsx("meta",{name:"keywords",content:i}),a.jsx("meta",{property:"og:title",content:t}),a.jsx("meta",{property:"og:description",content:e}),a.jsx("meta",{property:"og:image",content:n}),a.jsx("meta",{property:"og:url",content:r}),a.jsx("meta",{property:"og:type",content:o}),a.jsx("meta",{property:"og:site_name",content:"Nooshin Shahsavan Portfolio"}),a.jsx("meta",{name:"twitter:card",content:"summary_large_image"}),a.jsx("meta",{name:"twitter:title",content:t}),a.jsx("meta",{name:"twitter:description",content:e}),a.jsx("meta",{name:"twitter:image",content:n}),a.jsx("meta",{name:"author",content:"Nooshin Shahsavan"}),a.jsx("meta",{name:"robots",content:"index, follow"}),a.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),a.jsx("link",{rel:"canonical",href:r})]});function sr(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function w5(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},il={duration:.5,overwrite:!1,delay:0},M1,Ft,Le,en=1e8,Pe=1/en,jg=Math.PI*2,zA=jg/4,FA=0,v5=Math.sqrt,RA=Math.cos,LA=Math.sin,Ct=function(e){return typeof e=="string"},Qe=function(e){return typeof e=="function"},jr=function(e){return typeof e=="number"},z1=function(e){return typeof e>"u"},Yn=function(e){return typeof e=="object"},xi=function(e){return e!==!1},F1=function(){return typeof window<"u"},tu=function(e){return Qe(e)||Ct(e)},y5=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Gt=Array.isArray,Sg=/(?:-?\.?\d|\.)+/gi,b5=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ka=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,i0=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,k5=/[+-]=-?[.\d]+/,j5=/[^,'"\[\]\s]+/gi,NA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Be,zn,Dg,R1,Oi={},rp={},S5,D5=function(e){return(rp=nl(e,Oi))&&ki},L1=function(e,i){return console.warn("Invalid property",e,"set to",i,"Missing plugin? gsap.registerPlugin()")},id=function(e,i){return!i&&console.warn(e)},_5=function(e,i){return e&&(Oi[e]=i)&&rp&&(rp[e]=i)||Oi},nd=function(){return 0},OA={suppressEvents:!0,isStart:!0,kill:!1},ch={suppressEvents:!0,kill:!1},$A={suppressEvents:!0},N1={},ho=[],_g={},C5,Ti={},n0={},a2=30,dh=[],O1="",$1=function(e){var i=e[0],n,r;if(Yn(i)||Qe(i)||(e=[e]),!(n=(i._gsap||{}).harness)){for(r=dh.length;r--&&!dh[r].targetTest(i););n=dh[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Q5(e[r],n)))||e.splice(r,1);return e},us=function(e){return e._gsap||$1(tn(e))[0]._gsap},P5=function(e,i,n){return(n=e[i])&&Qe(n)?e[i]():z1(n)&&e.getAttribute&&e.getAttribute(i)||n},wi=function(e,i){return(e=e.split(",")).forEach(i)||e},tt=function(e){return Math.round(e*1e5)/1e5||0},ct=function(e){return Math.round(e*1e7)/1e7||0},za=function(e,i){var n=i.charAt(0),r=parseFloat(i.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},BA=function(e,i){for(var n=i.length,r=0;e.indexOf(i[r])<0&&++r<n;);return r<n},op=function(){var e=ho.length,i=ho.slice(0),n,r;for(_g={},ho.length=0,n=0;n<e;n++)r=i[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},B1=function(e){return!!(e._initted||e._startAt||e.add)},T5=function(e,i,n,r){ho.length&&!Ft&&op(),e.render(i,n,r||!!(Ft&&i<0&&B1(e))),ho.length&&!Ft&&op()},E5=function(e){var i=parseFloat(e);return(i||i===0)&&(e+"").match(j5).length<2?i:Ct(e)?e.trim():e},I5=function(e){return e},$i=function(e,i){for(var n in i)n in e||(e[n]=i[n]);return e},VA=function(e){return function(i,n){for(var r in n)r in i||r==="duration"&&e||r==="ease"||(i[r]=n[r])}},nl=function(e,i){for(var n in i)e[n]=i[n];return e},l2=function t(e,i){for(var n in i)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Yn(i[n])?t(e[n]||(e[n]={}),i[n]):i[n]);return e},sp=function(e,i){var n={},r;for(r in e)r in i||(n[r]=e[r]);return n},vc=function(e){var i=e.parent||Be,n=e.keyframes?VA(Gt(e.keyframes)):$i;if(xi(e.inherit))for(;i;)n(e,i.vars.defaults),i=i.parent||i._dp;return e},WA=function(e,i){for(var n=e.length,r=n===i.length;r&&n--&&e[n]===i[n];);return n<0},A5=function(e,i,n,r,o){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e[r],l;if(o)for(l=i[o];s&&s[o]>l;)s=s._prev;return s?(i._next=s._next,s._next=i):(i._next=e[n],e[n]=i),i._next?i._next._prev=i:e[r]=i,i._prev=s,i.parent=i._dp=e,i},ef=function(e,i,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=i._prev,s=i._next;o?o._next=s:e[n]===i&&(e[n]=s),s?s._prev=o:e[r]===i&&(e[r]=o),i._next=i._prev=i.parent=null},bo=function(e,i){e.parent&&(!i||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},hs=function(e,i){if(e&&(!i||i._end>e._dur||i._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},UA=function(e){for(var i=e.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return e},Cg=function(e,i,n,r){return e._startAt&&(Ft?e._startAt.revert(ch):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(i,!0,r))},HA=function t(e){return!e||e._ts&&t(e.parent)},c2=function(e){return e._repeat?rl(e._tTime,e=e.duration()+e._rDelay)*e:0},rl=function(e,i){var n=Math.floor(e=ct(e/i));return e&&n===e?n-1:n},ap=function(e,i){return(e-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},tf=function(e){return e._end=ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pe)||0))},nf=function(e,i){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ct(n._time-(e._ts>0?i/e._ts:((e._dirty?e.totalDuration():e._tDur)-i)/-e._ts)),tf(e),n._dirty||hs(n,e)),e},M5=function(e,i){var n;if((i._time||!i._dur&&i._initted||i._start<e._time&&(i._dur||!i.add))&&(n=ap(e.rawTime(),i),(!i._dur||jd(0,i.totalDuration(),n)-i._tTime>Pe)&&i.render(n,!0)),hs(e,i)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Pe}},On=function(e,i,n,r){return i.parent&&bo(i),i._start=ct((jr(n)?n:n||e!==Be?Gi(e,n,i):e._time)+i._delay),i._end=ct(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),A5(e,i,"_first","_last",e._sort?"_start":0),Pg(i)||(e._recent=i),r||M5(e,i),e._ts<0&&nf(e,e._tTime),e},z5=function(e,i){return(Oi.ScrollTrigger||L1("scrollTrigger",i))&&Oi.ScrollTrigger.create(i,e)},F5=function(e,i,n,r,o){if(W1(e,i,o),!e._initted)return 1;if(!n&&e._pt&&!Ft&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&C5!==Ii.frame)return ho.push(e),e._lazy=[o,r],1},YA=function t(e){var i=e.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||t(i))},Pg=function(e){var i=e.data;return i==="isFromStart"||i==="isStart"},GA=function(e,i,n,r){var o=e.ratio,s=i<0||!i&&(!e._start&&YA(e)&&!(!e._initted&&Pg(e))||(e._ts<0||e._dp._ts<0)&&!Pg(e))?0:1,l=e._rDelay,c=0,d,u,p;if(l&&e._repeat&&(c=jd(0,e._tDur,i),u=rl(c,l),e._yoyo&&u&1&&(s=1-s),u!==rl(e._tTime,l)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||Ft||r||e._zTime===Pe||!i&&e._zTime){if(!e._initted&&F5(e,i,r,n,c))return;for(p=e._zTime,e._zTime=i||(n?Pe:0),n||(n=i&&!p),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=c,d=e._pt;d;)d.r(s,d.d),d=d._next;i<0&&Cg(e,i,n,!0),e._onUpdate&&!n&&zi(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&zi(e,"onRepeat"),(i>=e._tDur||i<0)&&e.ratio===s&&(s&&bo(e,1),!n&&!Ft&&(zi(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=i)},XA=function(e,i,n){var r;if(n>i)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>i)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<i)return r;r=r._prev}},ol=function(e,i,n,r){var o=e._repeat,s=ct(i)||0,l=e._tTime/e._tDur;return l&&!r&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:ct(s*(o+1)+e._rDelay*o):s,l>0&&!r&&nf(e,e._tTime=e._tDur*l),e.parent&&tf(e),n||hs(e.parent,e),e},d2=function(e){return e instanceof ri?hs(e):ol(e,e._dur)},ZA={_start:0,endTime:nd,totalDuration:nd},Gi=function t(e,i,n){var r=e.labels,o=e._recent||ZA,s=e.duration()>=en?o.endTime(!1):e._dur,l,c,d;return Ct(i)&&(isNaN(i)||i in r)?(c=i.charAt(0),d=i.substr(-1)==="%",l=i.indexOf("="),c==="<"||c===">"?(l>=0&&(i=i.replace(/=/,"")),(c==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(i.substr(1))||0)*(d?(l<0?o:n).totalDuration()/100:1)):l<0?(i in r||(r[i]=s),r[i]):(c=parseFloat(i.charAt(l-1)+i.substr(l+1)),d&&n&&(c=c/100*(Gt(n)?n[0]:n).totalDuration()),l>1?t(e,i.substr(0,l-1),n)+c:s+c)):i==null?s:+i},yc=function(e,i,n){var r=jr(i[1]),o=(r?2:1)+(e<2?0:1),s=i[o],l,c;if(r&&(s.duration=i[1]),s.parent=n,e){for(l=s,c=n;c&&!("immediateRender"in l);)l=c.vars.defaults||{},c=xi(c.vars.inherit)&&c.parent;s.immediateRender=xi(l.immediateRender),e<2?s.runBackwards=1:s.startAt=i[o-1]}return new lt(i[0],s,i[o+1])},Po=function(e,i){return e||e===0?i(e):i},jd=function(e,i,n){return n<e?e:n>i?i:n},Ht=function(e,i){return!Ct(e)||!(i=NA.exec(e))?"":i[1]},qA=function(e,i,n){return Po(n,function(r){return jd(e,i,r)})},Tg=[].slice,R5=function(e,i){return e&&Yn(e)&&"length"in e&&(!i&&!e.length||e.length-1 in e&&Yn(e[0]))&&!e.nodeType&&e!==zn},QA=function(e,i,n){return n===void 0&&(n=[]),e.forEach(function(r){var o;return Ct(r)&&!i||R5(r,1)?(o=n).push.apply(o,tn(r)):n.push(r)})||n},tn=function(e,i,n){return Le&&!i&&Le.selector?Le.selector(e):Ct(e)&&!n&&(Dg||!sl())?Tg.call((i||R1).querySelectorAll(e),0):Gt(e)?QA(e,n):R5(e)?Tg.call(e,0):e?[e]:[]},Eg=function(e){return e=tn(e)[0]||id("Invalid scope")||{},function(i){var n=e.current||e.nativeElement||e;return tn(i,n.querySelectorAll?n:n===e?id("Invalid scope")||R1.createElement("div"):e)}},L5=function(e){return e.sort(function(){return .5-Math.random()})},N5=function(e){if(Qe(e))return e;var i=Yn(e)?e:{each:e},n=ps(i.ease),r=i.from||0,o=parseFloat(i.base)||0,s={},l=r>0&&r<1,c=isNaN(r)||l,d=i.axis,u=r,p=r;return Ct(r)?u=p={center:.5,edges:.5,end:1}[r]||0:!l&&c&&(u=r[0],p=r[1]),function(f,g,y){var w=(y||i).length,D=s[w],j,b,v,h,x,k,S,_,C;if(!D){if(C=i.grid==="auto"?0:(i.grid||[1,en])[1],!C){for(S=-en;S<(S=y[C++].getBoundingClientRect().left)&&C<w;);C<w&&C--}for(D=s[w]=[],j=c?Math.min(C,w)*u-.5:r%C,b=C===en?0:c?w*p/C-.5:r/C|0,S=0,_=en,k=0;k<w;k++)v=k%C-j,h=b-(k/C|0),D[k]=x=d?Math.abs(d==="y"?h:v):v5(v*v+h*h),x>S&&(S=x),x<_&&(_=x);r==="random"&&L5(D),D.max=S-_,D.min=_,D.v=w=(parseFloat(i.amount)||parseFloat(i.each)*(C>w?w-1:d?d==="y"?w/C:C:Math.max(C,w/C))||0)*(r==="edges"?-1:1),D.b=w<0?o-w:o,D.u=Ht(i.amount||i.each)||0,n=n&&w<0?X5(n):n}return w=(D[f]-D.min)/D.max||0,ct(D.b+(n?n(w):w)*D.v)+D.u}},Ig=function(e){var i=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=ct(Math.round(parseFloat(n)/e)*e*i);return(r-r%1)/i+(jr(n)?0:Ht(n))}},O5=function(e,i){var n=Gt(e),r,o;return!n&&Yn(e)&&(r=n=e.radius||en,e.values?(e=tn(e.values),(o=!jr(e[0]))&&(r*=r)):e=Ig(e.increment)),Po(i,n?Qe(e)?function(s){return o=e(s),Math.abs(o-s)<=r?o:s}:function(s){for(var l=parseFloat(o?s.x:s),c=parseFloat(o?s.y:0),d=en,u=0,p=e.length,f,g;p--;)o?(f=e[p].x-l,g=e[p].y-c,f=f*f+g*g):f=Math.abs(e[p]-l),f<d&&(d=f,u=p);return u=!r||d<=r?e[u]:s,o||u===s||jr(s)?u:u+Ht(s)}:Ig(e))},$5=function(e,i,n,r){return Po(Gt(e)?!i:n===!0?!!(n=0):!r,function(){return Gt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(i-e+n*.99))/n)*n*r)/r})},KA=function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return function(r){return i.reduce(function(o,s){return s(o)},r)}},JA=function(e,i){return function(n){return e(parseFloat(n))+(i||Ht(n))}},eM=function(e,i,n){return V5(e,i,0,1,n)},B5=function(e,i,n){return Po(n,function(r){return e[~~i(r)]})},tM=function t(e,i,n){var r=i-e;return Gt(e)?B5(e,t(0,e.length),i):Po(n,function(o){return(r+(o-e)%r)%r+e})},iM=function t(e,i,n){var r=i-e,o=r*2;return Gt(e)?B5(e,t(0,e.length-1),i):Po(n,function(s){return s=(o+(s-e)%o)%o||0,e+(s>r?o-s:s)})},rd=function(e){for(var i=0,n="",r,o,s,l;~(r=e.indexOf("random(",i));)s=e.indexOf(")",r),l=e.charAt(r+7)==="[",o=e.substr(r+7,s-r-7).match(l?j5:Sg),n+=e.substr(i,r-i)+$5(l?o:+o[0],l?0:+o[1],+o[2]||1e-5),i=s+1;return n+e.substr(i,e.length-i)},V5=function(e,i,n,r,o){var s=i-e,l=r-n;return Po(o,function(c){return n+((c-e)/s*l||0)})},nM=function t(e,i,n,r){var o=isNaN(e+i)?0:function(g){return(1-g)*e+g*i};if(!o){var s=Ct(e),l={},c,d,u,p,f;if(n===!0&&(r=1)&&(n=null),s)e={p:e},i={p:i};else if(Gt(e)&&!Gt(i)){for(u=[],p=e.length,f=p-2,d=1;d<p;d++)u.push(t(e[d-1],e[d]));p--,o=function(y){y*=p;var w=Math.min(f,~~y);return u[w](y-w)},n=i}else r||(e=nl(Gt(e)?[]:{},e));if(!u){for(c in i)V1.call(l,e,c,"get",i[c]);o=function(y){return Y1(y,l)||(s?e.p:e)}}}return Po(n,o)},u2=function(e,i,n){var r=e.labels,o=en,s,l,c;for(s in r)l=r[s]-i,l<0==!!n&&l&&o>(l=Math.abs(l))&&(c=s,o=l);return c},zi=function(e,i,n){var r=e.vars,o=r[i],s=Le,l=e._ctx,c,d,u;if(o)return c=r[i+"Params"],d=r.callbackScope||e,n&&ho.length&&op(),l&&(Le=l),u=c?o.apply(d,c):o.call(d),Le=s,u},Zl=function(e){return bo(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ft),e.progress()<1&&zi(e,"onInterrupt"),e},ja,W5=[],U5=function(e){if(e)if(e=!e.name&&e.default||e,F1()||e.headless){var i=e.name,n=Qe(e),r=i&&!n&&e.init?function(){this._props=[]}:e,o={init:nd,render:Y1,add:V1,kill:vM,modifier:wM,rawVars:0},s={targetTest:0,get:0,getSetter:H1,aliases:{},register:0};if(sl(),e!==r){if(Ti[i])return;$i(r,$i(sp(e,o),s)),nl(r.prototype,nl(o,sp(e,s))),Ti[r.prop=i]=r,e.targetTest&&(dh.push(r),N1[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}_5(i,r),e.register&&e.register(ki,r,vi)}else W5.push(e)},Ce=255,ql={aqua:[0,Ce,Ce],lime:[0,Ce,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ce],navy:[0,0,128],white:[Ce,Ce,Ce],olive:[128,128,0],yellow:[Ce,Ce,0],orange:[Ce,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ce,0,0],pink:[Ce,192,203],cyan:[0,Ce,Ce],transparent:[Ce,Ce,Ce,0]},r0=function(e,i,n){return e+=e<0?1:e>1?-1:0,(e*6<1?i+(n-i)*e*6:e<.5?n:e*3<2?i+(n-i)*(2/3-e)*6:i)*Ce+.5|0},H5=function(e,i,n){var r=e?jr(e)?[e>>16,e>>8&Ce,e&Ce]:0:ql.black,o,s,l,c,d,u,p,f,g,y;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ql[e])r=ql[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),l=e.charAt(3),e="#"+o+o+s+s+l+l+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ce,r&Ce,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ce,e&Ce]}else if(e.substr(0,3)==="hsl"){if(r=y=e.match(Sg),!i)c=+r[0]%360/360,d=+r[1]/100,u=+r[2]/100,s=u<=.5?u*(d+1):u+d-u*d,o=u*2-s,r.length>3&&(r[3]*=1),r[0]=r0(c+1/3,o,s),r[1]=r0(c,o,s),r[2]=r0(c-1/3,o,s);else if(~e.indexOf("="))return r=e.match(b5),n&&r.length<4&&(r[3]=1),r}else r=e.match(Sg)||ql.transparent;r=r.map(Number)}return i&&!y&&(o=r[0]/Ce,s=r[1]/Ce,l=r[2]/Ce,p=Math.max(o,s,l),f=Math.min(o,s,l),u=(p+f)/2,p===f?c=d=0:(g=p-f,d=u>.5?g/(2-p-f):g/(p+f),c=p===o?(s-l)/g+(s<l?6:0):p===s?(l-o)/g+2:(o-s)/g+4,c*=60),r[0]=~~(c+.5),r[1]=~~(d*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Y5=function(e){var i=[],n=[],r=-1;return e.split(po).forEach(function(o){var s=o.match(ka)||[];i.push.apply(i,s),n.push(r+=s.length+1)}),i.c=n,i},h2=function(e,i,n){var r="",o=(e+r).match(po),s=i?"hsla(":"rgba(",l=0,c,d,u,p;if(!o)return e;if(o=o.map(function(f){return(f=H5(f,i,1))&&s+(i?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Y5(e),c=n.c,c.join(r)!==u.c.join(r)))for(d=e.replace(po,"1").split(ka),p=d.length-1;l<p;l++)r+=d[l]+(~c.indexOf(l)?o.shift()||s+"0,0,0,0)":(u.length?u:o.length?o:n).shift());if(!d)for(d=e.split(po),p=d.length-1;l<p;l++)r+=d[l]+o[l];return r+d[p]},po=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ql)t+="|"+e+"\\b";return new RegExp(t+")","gi")}(),rM=/hsl[a]?\(/,G5=function(e){var i=e.join(" "),n;if(po.lastIndex=0,po.test(i))return n=rM.test(i),e[1]=h2(e[1],n),e[0]=h2(e[0],n,Y5(e[1])),!0},od,Ii=function(){var t=Date.now,e=500,i=33,n=t(),r=n,o=1e3/240,s=o,l=[],c,d,u,p,f,g,y=function w(D){var j=t()-r,b=D===!0,v,h,x,k;if((j>e||j<0)&&(n+=j-i),r+=j,x=r-n,v=x-s,(v>0||b)&&(k=++p.frame,f=x-p.time*1e3,p.time=x=x/1e3,s+=v+(v>=o?4:o-v),h=1),b||(c=d(w)),h)for(g=0;g<l.length;g++)l[g](x,f,k,D)};return p={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(D){return f/(1e3/(D||60))},wake:function(){S5&&(!Dg&&F1()&&(zn=Dg=window,R1=zn.document||{},Oi.gsap=ki,(zn.gsapVersions||(zn.gsapVersions=[])).push(ki.version),D5(rp||zn.GreenSockGlobals||!zn.gsap&&zn||{}),W5.forEach(U5)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&p.sleep(),d=u||function(D){return setTimeout(D,s-p.time*1e3+1|0)},od=1,y(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),od=0,d=nd},lagSmoothing:function(D,j){e=D||1/0,i=Math.min(j||33,e)},fps:function(D){o=1e3/(D||240),s=p.time*1e3+o},add:function(D,j,b){var v=j?function(h,x,k,S){D(h,x,k,S),p.remove(v)}:D;return p.remove(D),l[b?"unshift":"push"](v),sl(),v},remove:function(D,j){~(j=l.indexOf(D))&&l.splice(j,1)&&g>=j&&g--},_listeners:l},p}(),sl=function(){return!od&&Ii.wake()},pe={},oM=/^[\d.\-M][\d.\-,\s]/,sM=/["']/g,aM=function(e){for(var i={},n=e.substr(1,e.length-3).split(":"),r=n[0],o=1,s=n.length,l,c,d;o<s;o++)c=n[o],l=o!==s-1?c.lastIndexOf(","):c.length,d=c.substr(0,l),i[r]=isNaN(d)?d.replace(sM,"").trim():+d,r=c.substr(l+1).trim();return i},lM=function(e){var i=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",i);return e.substring(i,~r&&r<n?e.indexOf(")",n+1):n)},cM=function(e){var i=(e+"").split("("),n=pe[i[0]];return n&&i.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[aM(i[1])]:lM(e).split(",").map(E5)):pe._CE&&oM.test(e)?pe._CE("",e):n},X5=function(e){return function(i){return 1-e(1-i)}},Z5=function t(e,i){for(var n=e._first,r;n;)n instanceof ri?t(n,i):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==i&&(n.timeline?t(n.timeline,i):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=i)),n=n._next},ps=function(e,i){return e&&(Qe(e)?e:pe[e]||cM(e))||i},Rs=function(e,i,n,r){n===void 0&&(n=function(c){return 1-i(1-c)}),r===void 0&&(r=function(c){return c<.5?i(c*2)/2:1-i((1-c)*2)/2});var o={easeIn:i,easeOut:n,easeInOut:r},s;return wi(e,function(l){pe[l]=Oi[l]=o,pe[s=l.toLowerCase()]=n;for(var c in o)pe[s+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=pe[l+"."+c]=o[c]}),o},q5=function(e){return function(i){return i<.5?(1-e(1-i*2))/2:.5+e((i-.5)*2)/2}},o0=function t(e,i,n){var r=i>=1?i:1,o=(n||(e?.3:.45))/(i<1?i:1),s=o/jg*(Math.asin(1/r)||0),l=function(u){return u===1?1:r*Math.pow(2,-10*u)*LA((u-s)*o)+1},c=e==="out"?l:e==="in"?function(d){return 1-l(1-d)}:q5(l);return o=jg/o,c.config=function(d,u){return t(e,d,u)},c},s0=function t(e,i){i===void 0&&(i=1.70158);var n=function(s){return s?--s*s*((i+1)*s+i)+1:0},r=e==="out"?n:e==="in"?function(o){return 1-n(1-o)}:q5(n);return r.config=function(o){return t(e,o)},r};wi("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var i=e<5?e+1:e;Rs(t+",Power"+(i-1),e?function(n){return Math.pow(n,i)}:function(n){return n},function(n){return 1-Math.pow(1-n,i)},function(n){return n<.5?Math.pow(n*2,i)/2:1-Math.pow((1-n)*2,i)/2})});pe.Linear.easeNone=pe.none=pe.Linear.easeIn;Rs("Elastic",o0("in"),o0("out"),o0());(function(t,e){var i=1/e,n=2*i,r=2.5*i,o=function(l){return l<i?t*l*l:l<n?t*Math.pow(l-1.5/e,2)+.75:l<r?t*(l-=2.25/e)*l+.9375:t*Math.pow(l-2.625/e,2)+.984375};Rs("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);Rs("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});Rs("Circ",function(t){return-(v5(1-t*t)-1)});Rs("Sine",function(t){return t===1?1:-RA(t*zA)+1});Rs("Back",s0("in"),s0("out"),s0());pe.SteppedEase=pe.steps=Oi.SteppedEase={config:function(e,i){e===void 0&&(e=1);var n=1/e,r=e+(i?0:1),o=i?1:0,s=1-Pe;return function(l){return((r*jd(0,s,l)|0)+o)*n}}};il.ease=pe["quad.out"];wi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return O1+=t+","+t+"Params,"});var Q5=function(e,i){this.id=FA++,e._gsap=this,this.target=e,this.harness=i,this.get=i?i.get:P5,this.set=i?i.getSetter:H1},sd=function(){function t(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,ol(this,+i.duration,1,1),this.data=i.data,Le&&(this._ctx=Le,Le.data.push(this)),od||Ii.wake()}var e=t.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ol(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(sl(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(nf(this,n),!o._dp||o.parent||M5(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&On(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Pe||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),T5(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+c2(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+c2(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*o,r):this._repeat?rl(this._tTime,o)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Pe?0:this._rts;if(this._rts===n)return this;var o=this.parent&&this._ts?ap(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Pe?0:this._rts,this.totalTime(jd(-Math.abs(this._delay),this.totalDuration(),o),r!==!1),tf(this),UA(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(sl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pe&&(this._tTime-=Pe)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&On(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(xi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ap(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=$A);var r=Ft;return Ft=n,B1(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ft=r,this},e.globalTime=function(n){for(var r=this,o=arguments.length?n:r.rawTime();r;)o=r._start+o/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):o},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,d2(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,d2(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Gi(this,n),xi(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,xi(r)),this._dur||(this._zTime=-Pe),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Pe:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pe,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,o;return!!(!n||this._ts&&this._initted&&n.isActive()&&(o=n.rawTime(!0))>=r&&o<this.endTime(!0)-Pe)},e.eventCallback=function(n,r,o){var s=this.vars;return arguments.length>1?(r?(s[n]=r,o&&(s[n+"Params"]=o),n==="onUpdate"&&(this._onUpdate=r)):delete s[n],this):s[n]},e.then=function(n){var r=this;return new Promise(function(o){var s=Qe(n)?n:I5,l=function(){var d=r.then;r.then=null,Qe(s)&&(s=s(r))&&(s.then||s===r)&&(r.then=d),o(s),r.then=d};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Zl(this)},t}();$i(sd.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pe,_prom:0,_ps:!1,_rts:1});var ri=function(t){w5(e,t);function e(n,r){var o;return n===void 0&&(n={}),o=t.call(this,n)||this,o.labels={},o.smoothChildTiming=!!n.smoothChildTiming,o.autoRemoveChildren=!!n.autoRemoveChildren,o._sort=xi(n.sortChildren),Be&&On(n.parent||Be,sr(o),r),n.reversed&&o.reverse(),n.paused&&o.paused(!0),n.scrollTrigger&&z5(sr(o),n.scrollTrigger),o}var i=e.prototype;return i.to=function(r,o,s){return yc(0,arguments,this),this},i.from=function(r,o,s){return yc(1,arguments,this),this},i.fromTo=function(r,o,s,l){return yc(2,arguments,this),this},i.set=function(r,o,s){return o.duration=0,o.parent=this,vc(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new lt(r,o,Gi(this,s),1),this},i.call=function(r,o,s){return On(this,lt.delayedCall(0,r,o),s)},i.staggerTo=function(r,o,s,l,c,d,u){return s.duration=o,s.stagger=s.stagger||l,s.onComplete=d,s.onCompleteParams=u,s.parent=this,new lt(r,s,Gi(this,c)),this},i.staggerFrom=function(r,o,s,l,c,d,u){return s.runBackwards=1,vc(s).immediateRender=xi(s.immediateRender),this.staggerTo(r,o,s,l,c,d,u)},i.staggerFromTo=function(r,o,s,l,c,d,u,p){return l.startAt=s,vc(l).immediateRender=xi(l.immediateRender),this.staggerTo(r,o,l,c,d,u,p)},i.render=function(r,o,s){var l=this._time,c=this._dirty?this.totalDuration():this._tDur,d=this._dur,u=r<=0?0:ct(r),p=this._zTime<0!=r<0&&(this._initted||!d),f,g,y,w,D,j,b,v,h,x,k,S;if(this!==Be&&u>c&&r>=0&&(u=c),u!==this._tTime||s||p){if(l!==this._time&&d&&(u+=this._time-l,r+=this._time-l),f=u,h=this._start,v=this._ts,j=!v,p&&(d||(l=this._zTime),(r||!o)&&(this._zTime=r)),this._repeat){if(k=this._yoyo,D=d+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(D*100+r,o,s);if(f=ct(u%D),u===c?(w=this._repeat,f=d):(x=ct(u/D),w=~~x,w&&w===x&&(f=d,w--),f>d&&(f=d)),x=rl(this._tTime,D),!l&&this._tTime&&x!==w&&this._tTime-x*D-this._dur<=0&&(x=w),k&&w&1&&(f=d-f,S=1),w!==x&&!this._lock){var _=k&&x&1,C=_===(k&&w&1);if(w<x&&(_=!_),l=_?0:u%d?d:u,this._lock=1,this.render(l||(S?0:ct(w*D)),o,!d)._lock=0,this._tTime=u,!o&&this.parent&&zi(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),l&&l!==this._time||j!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,c=this._tDur,C&&(this._lock=2,l=_?d:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!j)return this;Z5(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=XA(this,ct(l),ct(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,l=0),!l&&u&&!o&&!x&&(zi(this,"onStart"),this._tTime!==u))return this;if(f>=l&&r>=0)for(g=this._first;g;){if(y=g._next,(g._act||f>=g._start)&&g._ts&&b!==g){if(g.parent!==this)return this.render(r,o,s);if(g.render(g._ts>0?(f-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(f-g._start)*g._ts,o,s),f!==this._time||!this._ts&&!j){b=0,y&&(u+=this._zTime=-Pe);break}}g=y}else{g=this._last;for(var E=r<0?r:f;g;){if(y=g._prev,(g._act||E<=g._end)&&g._ts&&b!==g){if(g.parent!==this)return this.render(r,o,s);if(g.render(g._ts>0?(E-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(E-g._start)*g._ts,o,s||Ft&&B1(g)),f!==this._time||!this._ts&&!j){b=0,y&&(u+=this._zTime=E?-Pe:Pe);break}}g=y}}if(b&&!o&&(this.pause(),b.render(f>=l?0:-Pe)._zTime=f>=l?1:-1,this._ts))return this._start=h,tf(this),this.render(r,o,s);this._onUpdate&&!o&&zi(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&l)&&(h===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!d)&&(u===c&&this._ts>0||!u&&this._ts<0)&&bo(this,1),!o&&!(r<0&&!l)&&(u||l||!c)&&(zi(this,u===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(r,o){var s=this;if(jr(o)||(o=Gi(this,o,r)),!(r instanceof sd)){if(Gt(r))return r.forEach(function(l){return s.add(l,o)}),this;if(Ct(r))return this.addLabel(r,o);if(Qe(r))r=lt.delayedCall(0,r);else return this}return this!==r?On(this,r,o):this},i.getChildren=function(r,o,s,l){r===void 0&&(r=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),l===void 0&&(l=-en);for(var c=[],d=this._first;d;)d._start>=l&&(d instanceof lt?o&&c.push(d):(s&&c.push(d),r&&c.push.apply(c,d.getChildren(!0,o,s)))),d=d._next;return c},i.getById=function(r){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===r)return o[s]},i.remove=function(r){return Ct(r)?this.removeLabel(r):Qe(r)?this.killTweensOf(r):(r.parent===this&&ef(this,r),r===this._recent&&(this._recent=this._last),hs(this))},i.totalTime=function(r,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ct(Ii.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),t.prototype.totalTime.call(this,r,o),this._forcing=0,this):this._tTime},i.addLabel=function(r,o){return this.labels[r]=Gi(this,o),this},i.removeLabel=function(r){return delete this.labels[r],this},i.addPause=function(r,o,s){var l=lt.delayedCall(0,o||nd,s);return l.data="isPause",this._hasPause=1,On(this,l,Gi(this,r))},i.removePause=function(r){var o=this._first;for(r=Gi(this,r);o;)o._start===r&&o.data==="isPause"&&bo(o),o=o._next},i.killTweensOf=function(r,o,s){for(var l=this.getTweensOf(r,s),c=l.length;c--;)Xr!==l[c]&&l[c].kill(r,o);return this},i.getTweensOf=function(r,o){for(var s=[],l=tn(r),c=this._first,d=jr(o),u;c;)c instanceof lt?BA(c._targets,l)&&(d?(!Xr||c._initted&&c._ts)&&c.globalTime(0)<=o&&c.globalTime(c.totalDuration())>o:!o||c.isActive())&&s.push(c):(u=c.getTweensOf(l,o)).length&&s.push.apply(s,u),c=c._next;return s},i.tweenTo=function(r,o){o=o||{};var s=this,l=Gi(s,r),c=o,d=c.startAt,u=c.onStart,p=c.onStartParams,f=c.immediateRender,g,y=lt.to(s,$i({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:o.duration||Math.abs((l-(d&&"time"in d?d.time:s._time))/s.timeScale())||Pe,onStart:function(){if(s.pause(),!g){var D=o.duration||Math.abs((l-(d&&"time"in d?d.time:s._time))/s.timeScale());y._dur!==D&&ol(y,D,0,1).render(y._time,!0,!0),g=1}u&&u.apply(y,p||[])}},o));return f?y.render(0):y},i.tweenFromTo=function(r,o,s){return this.tweenTo(o,$i({startAt:{time:Gi(this,r)}},s))},i.recent=function(){return this._recent},i.nextLabel=function(r){return r===void 0&&(r=this._time),u2(this,Gi(this,r))},i.previousLabel=function(r){return r===void 0&&(r=this._time),u2(this,Gi(this,r),1)},i.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Pe)},i.shiftChildren=function(r,o,s){s===void 0&&(s=0);for(var l=this._first,c=this.labels,d;l;)l._start>=s&&(l._start+=r,l._end+=r),l=l._next;if(o)for(d in c)c[d]>=s&&(c[d]+=r);return hs(this)},i.invalidate=function(r){var o=this._first;for(this._lock=0;o;)o.invalidate(r),o=o._next;return t.prototype.invalidate.call(this,r)},i.clear=function(r){r===void 0&&(r=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),hs(this)},i.totalDuration=function(r){var o=0,s=this,l=s._last,c=en,d,u,p;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(p=s.parent;l;)d=l._prev,l._dirty&&l.totalDuration(),u=l._start,u>c&&s._sort&&l._ts&&!s._lock?(s._lock=1,On(s,l,u-l._delay,1)._lock=0):c=u,u<0&&l._ts&&(o-=u,(!p&&!s._dp||p&&p.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),c=0),l._end>o&&l._ts&&(o=l._end),l=d;ol(s,s===Be&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(r){if(Be._ts&&(T5(Be,ap(r,Be)),C5=Ii.frame),Ii.frame>=a2){a2+=Ri.autoSleep||120;var o=Be._first;if((!o||!o._ts)&&Ri.autoSleep&&Ii._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||Ii.sleep()}}},e}(sd);$i(ri.prototype,{_lock:0,_hasPause:0,_forcing:0});var dM=function(e,i,n,r,o,s,l){var c=new vi(this._pt,e,i,0,1,n3,null,o),d=0,u=0,p,f,g,y,w,D,j,b;for(c.b=n,c.e=r,n+="",r+="",(j=~r.indexOf("random("))&&(r=rd(r)),s&&(b=[n,r],s(b,e,i),n=b[0],r=b[1]),f=n.match(i0)||[];p=i0.exec(r);)y=p[0],w=r.substring(d,p.index),g?g=(g+1)%5:w.substr(-5)==="rgba("&&(g=1),y!==f[u++]&&(D=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:w||u===1?w:",",s:D,c:y.charAt(1)==="="?za(D,y)-D:parseFloat(y)-D,m:g&&g<4?Math.round:0},d=i0.lastIndex);return c.c=d<r.length?r.substring(d,r.length):"",c.fp=l,(k5.test(r)||j)&&(c.e=0),this._pt=c,c},V1=function(e,i,n,r,o,s,l,c,d,u){Qe(r)&&(r=r(o||0,e,s));var p=e[i],f=n!=="get"?n:Qe(p)?d?e[i.indexOf("set")||!Qe(e["get"+i.substr(3)])?i:"get"+i.substr(3)](d):e[i]():p,g=Qe(p)?d?mM:t3:U1,y;if(Ct(r)&&(~r.indexOf("random(")&&(r=rd(r)),r.charAt(1)==="="&&(y=za(f,r)+(Ht(f)||0),(y||y===0)&&(r=y))),!u||f!==r||Ag)return!isNaN(f*r)&&r!==""?(y=new vi(this._pt,e,i,+f||0,r-(f||0),typeof p=="boolean"?xM:i3,0,g),d&&(y.fp=d),l&&y.modifier(l,this,e),this._pt=y):(!p&&!(i in e)&&L1(i,r),dM.call(this,e,i,f,r,g,c||Ri.stringFilter,d))},uM=function(e,i,n,r,o){if(Qe(e)&&(e=bc(e,o,i,n,r)),!Yn(e)||e.style&&e.nodeType||Gt(e)||y5(e))return Ct(e)?bc(e,o,i,n,r):e;var s={},l;for(l in e)s[l]=bc(e[l],o,i,n,r);return s},K5=function(e,i,n,r,o,s){var l,c,d,u;if(Ti[e]&&(l=new Ti[e]).init(o,l.rawVars?i[e]:uM(i[e],r,o,s,n),n,r,s)!==!1&&(n._pt=c=new vi(n._pt,o,e,0,1,l.render,l,0,l.priority),n!==ja))for(d=n._ptLookup[n._targets.indexOf(o)],u=l._props.length;u--;)d[l._props[u]]=c;return l},Xr,Ag,W1=function t(e,i,n){var r=e.vars,o=r.ease,s=r.startAt,l=r.immediateRender,c=r.lazy,d=r.onUpdate,u=r.runBackwards,p=r.yoyoEase,f=r.keyframes,g=r.autoRevert,y=e._dur,w=e._startAt,D=e._targets,j=e.parent,b=j&&j.data==="nested"?j.vars.targets:D,v=e._overwrite==="auto"&&!M1,h=e.timeline,x,k,S,_,C,E,z,A,N,O,W,V,$;if(h&&(!f||!o)&&(o="none"),e._ease=ps(o,il.ease),e._yEase=p?X5(ps(p===!0?o:p,il.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!h&&!!r.runBackwards,!h||f&&!r.stagger){if(A=D[0]?us(D[0]).harness:0,V=A&&r[A.prop],x=sp(r,N1),w&&(w._zTime<0&&w.progress(1),i<0&&u&&l&&!g?w.render(-1,!0):w.revert(u&&y?ch:OA),w._lazy=0),s){if(bo(e._startAt=lt.set(D,$i({data:"isStart",overwrite:!1,parent:j,immediateRender:!0,lazy:!w&&xi(c),startAt:null,delay:0,onUpdate:d&&function(){return zi(e,"onUpdate")},stagger:0},s))),e._startAt._dp=0,e._startAt._sat=e,i<0&&(Ft||!l&&!g)&&e._startAt.revert(ch),l&&y&&i<=0&&n<=0){i&&(e._zTime=i);return}}else if(u&&y&&!w){if(i&&(l=!1),S=$i({overwrite:!1,data:"isFromStart",lazy:l&&!w&&xi(c),immediateRender:l,stagger:0,parent:j},x),V&&(S[A.prop]=V),bo(e._startAt=lt.set(D,S)),e._startAt._dp=0,e._startAt._sat=e,i<0&&(Ft?e._startAt.revert(ch):e._startAt.render(-1,!0)),e._zTime=i,!l)t(e._startAt,Pe,Pe);else if(!i)return}for(e._pt=e._ptCache=0,c=y&&xi(c)||c&&!y,k=0;k<D.length;k++){if(C=D[k],z=C._gsap||$1(D)[k]._gsap,e._ptLookup[k]=O={},_g[z.id]&&ho.length&&op(),W=b===D?k:b.indexOf(C),A&&(N=new A).init(C,V||x,e,W,b)!==!1&&(e._pt=_=new vi(e._pt,C,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(I){O[I]=_}),N.priority&&(E=1)),!A||V)for(S in x)Ti[S]&&(N=K5(S,x,e,W,C,b))?N.priority&&(E=1):O[S]=_=V1.call(e,C,S,"get",x[S],W,b,0,r.stringFilter);e._op&&e._op[k]&&e.kill(C,e._op[k]),v&&e._pt&&(Xr=e,Be.killTweensOf(C,O,e.globalTime(i)),$=!e.parent,Xr=0),e._pt&&c&&(_g[z.id]=1)}E&&r3(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!$,f&&i<=0&&h.render(en,!0,!0)},hM=function(e,i,n,r,o,s,l,c){var d=(e._pt&&e._ptCache||(e._ptCache={}))[i],u,p,f,g;if(!d)for(d=e._ptCache[i]=[],f=e._ptLookup,g=e._targets.length;g--;){if(u=f[g][i],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==i&&u.fp!==i;)u=u._next;if(!u)return Ag=1,e.vars[i]="+=0",W1(e,l),Ag=0,c?id(i+" not eligible for reset"):1;d.push(u)}for(g=d.length;g--;)p=d[g],u=p._pt||p,u.s=(r||r===0)&&!o?r:u.s+(r||0)+s*u.c,u.c=n-u.s,p.e&&(p.e=tt(n)+Ht(p.e)),p.b&&(p.b=u.s+Ht(p.b))},pM=function(e,i){var n=e[0]?us(e[0]).harness:0,r=n&&n.aliases,o,s,l,c;if(!r)return i;o=nl({},i);for(s in r)if(s in o)for(c=r[s].split(","),l=c.length;l--;)o[c[l]]=o[s];return o},fM=function(e,i,n,r){var o=i.ease||r||"power1.inOut",s,l;if(Gt(i))l=n[e]||(n[e]=[]),i.forEach(function(c,d){return l.push({t:d/(i.length-1)*100,v:c,e:o})});else for(s in i)l=n[s]||(n[s]=[]),s==="ease"||l.push({t:parseFloat(e),v:i[s],e:o})},bc=function(e,i,n,r,o){return Qe(e)?e.call(i,n,r,o):Ct(e)&&~e.indexOf("random(")?rd(e):e},J5=O1+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",e3={};wi(J5+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return e3[t]=1});var lt=function(t){w5(e,t);function e(n,r,o,s){var l;typeof r=="number"&&(o.duration=r,r=o,o=null),l=t.call(this,s?r:vc(r))||this;var c=l.vars,d=c.duration,u=c.delay,p=c.immediateRender,f=c.stagger,g=c.overwrite,y=c.keyframes,w=c.defaults,D=c.scrollTrigger,j=c.yoyoEase,b=r.parent||Be,v=(Gt(n)||y5(n)?jr(n[0]):"length"in r)?[n]:tn(n),h,x,k,S,_,C,E,z;if(l._targets=v.length?$1(v):id("GSAP target "+n+" not found. https://gsap.com",!Ri.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=g,y||f||tu(d)||tu(u)){if(r=l.vars,h=l.timeline=new ri({data:"nested",defaults:w||{},targets:b&&b.data==="nested"?b.vars.targets:v}),h.kill(),h.parent=h._dp=sr(l),h._start=0,f||tu(d)||tu(u)){if(S=v.length,E=f&&N5(f),Yn(f))for(_ in f)~J5.indexOf(_)&&(z||(z={}),z[_]=f[_]);for(x=0;x<S;x++)k=sp(r,e3),k.stagger=0,j&&(k.yoyoEase=j),z&&nl(k,z),C=v[x],k.duration=+bc(d,sr(l),x,C,v),k.delay=(+bc(u,sr(l),x,C,v)||0)-l._delay,!f&&S===1&&k.delay&&(l._delay=u=k.delay,l._start+=u,k.delay=0),h.to(C,k,E?E(x,C,v):0),h._ease=pe.none;h.duration()?d=u=0:l.timeline=0}else if(y){vc($i(h.vars.defaults,{ease:"none"})),h._ease=ps(y.ease||r.ease||"none");var A=0,N,O,W;if(Gt(y))y.forEach(function(V){return h.to(v,V,">")}),h.duration();else{k={};for(_ in y)_==="ease"||_==="easeEach"||fM(_,y[_],k,y.easeEach);for(_ in k)for(N=k[_].sort(function(V,$){return V.t-$.t}),A=0,x=0;x<N.length;x++)O=N[x],W={ease:O.e,duration:(O.t-(x?N[x-1].t:0))/100*d},W[_]=O.v,h.to(v,W,A),A+=W.duration;h.duration()<d&&h.to({},{duration:d-h.duration()})}}d||l.duration(d=h.duration())}else l.timeline=0;return g===!0&&!M1&&(Xr=sr(l),Be.killTweensOf(v),Xr=0),On(b,sr(l),o),r.reversed&&l.reverse(),r.paused&&l.paused(!0),(p||!d&&!y&&l._start===ct(b._time)&&xi(p)&&HA(sr(l))&&b.data!=="nested")&&(l._tTime=-Pe,l.render(Math.max(0,-u)||0)),D&&z5(sr(l),D),l}var i=e.prototype;return i.render=function(r,o,s){var l=this._time,c=this._tDur,d=this._dur,u=r<0,p=r>c-Pe&&!u?c:r<Pe?0:r,f,g,y,w,D,j,b,v,h;if(!d)GA(this,r,o,s);else if(p!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=p,v=this.timeline,this._repeat){if(w=d+this._rDelay,this._repeat<-1&&u)return this.totalTime(w*100+r,o,s);if(f=ct(p%w),p===c?(y=this._repeat,f=d):(D=ct(p/w),y=~~D,y&&y===D?(f=d,y--):f>d&&(f=d)),j=this._yoyo&&y&1,j&&(h=this._yEase,f=d-f),D=rl(this._tTime,w),f===l&&!s&&this._initted&&y===D)return this._tTime=p,this;y!==D&&(v&&this._yEase&&Z5(v,j),this.vars.repeatRefresh&&!j&&!this._lock&&f!==w&&this._initted&&(this._lock=s=1,this.render(ct(w*y),!0).invalidate()._lock=0))}if(!this._initted){if(F5(this,u?r:f,s,o,p))return this._tTime=0,this;if(l!==this._time&&!(s&&this.vars.repeatRefresh&&y!==D))return this;if(d!==this._dur)return this.render(r,o,s)}if(this._tTime=p,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(h||this._ease)(f/d),this._from&&(this.ratio=b=1-b),!l&&p&&!o&&!D&&(zi(this,"onStart"),this._tTime!==p))return this;for(g=this._pt;g;)g.r(b,g.d),g=g._next;v&&v.render(r<0?r:v._dur*v._ease(f/this._dur),o,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!o&&(u&&Cg(this,r,o,s),zi(this,"onUpdate")),this._repeat&&y!==D&&this.vars.onRepeat&&!o&&this.parent&&zi(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(u&&!this._onUpdate&&Cg(this,r,!0,!0),(r||!d)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&bo(this,1),!o&&!(u&&!l)&&(p||l||j)&&(zi(this,p===c?"onComplete":"onReverseComplete",!0),this._prom&&!(p<c&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),t.prototype.invalidate.call(this,r)},i.resetTo=function(r,o,s,l,c){od||Ii.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||W1(this,d),u=this._ease(d/this._dur),hM(this,r,o,s,l,u,d,c)?this.resetTo(r,o,s,l,1):(nf(this,0),this.parent||A5(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(r,o){if(o===void 0&&(o="all"),!r&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?Zl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ft),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,o,Xr&&Xr.vars.overwrite!==!0)._first||Zl(this),this.parent&&s!==this.timeline.totalDuration()&&ol(this,this._dur*this.timeline._tDur/s,0,1),this}var l=this._targets,c=r?tn(r):l,d=this._ptLookup,u=this._pt,p,f,g,y,w,D,j;if((!o||o==="all")&&WA(l,c))return o==="all"&&(this._pt=0),Zl(this);for(p=this._op=this._op||[],o!=="all"&&(Ct(o)&&(w={},wi(o,function(b){return w[b]=1}),o=w),o=pM(l,o)),j=l.length;j--;)if(~c.indexOf(l[j])){f=d[j],o==="all"?(p[j]=o,y=f,g={}):(g=p[j]=p[j]||{},y=o);for(w in y)D=f&&f[w],D&&((!("kill"in D.d)||D.d.kill(w)===!0)&&ef(this,D,"_pt"),delete f[w]),g!=="all"&&(g[w]=1)}return this._initted&&!this._pt&&u&&Zl(this),this},e.to=function(r,o){return new e(r,o,arguments[2])},e.from=function(r,o){return yc(1,arguments)},e.delayedCall=function(r,o,s,l){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:l})},e.fromTo=function(r,o,s){return yc(2,arguments)},e.set=function(r,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(r,o)},e.killTweensOf=function(r,o,s){return Be.killTweensOf(r,o,s)},e}(sd);$i(lt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wi("staggerTo,staggerFrom,staggerFromTo",function(t){lt[t]=function(){var e=new ri,i=Tg.call(arguments,0);return i.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,i)}});var U1=function(e,i,n){return e[i]=n},t3=function(e,i,n){return e[i](n)},mM=function(e,i,n,r){return e[i](r.fp,n)},gM=function(e,i,n){return e.setAttribute(i,n)},H1=function(e,i){return Qe(e[i])?t3:z1(e[i])&&e.setAttribute?gM:U1},i3=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e6)/1e6,i)},xM=function(e,i){return i.set(i.t,i.p,!!(i.s+i.c*e),i)},n3=function(e,i){var n=i._pt,r="";if(!e&&i.b)r=i.b;else if(e===1&&i.e)r=i.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=i.c}i.set(i.t,i.p,r,i)},Y1=function(e,i){for(var n=i._pt;n;)n.r(e,n.d),n=n._next},wM=function(e,i,n,r){for(var o=this._pt,s;o;)s=o._next,o.p===r&&o.modifier(e,i,n),o=s},vM=function(e){for(var i=this._pt,n,r;i;)r=i._next,i.p===e&&!i.op||i.op===e?ef(this,i,"_pt"):i.dep||(n=1),i=r;return!n},yM=function(e,i,n,r){r.mSet(e,i,r.m.call(r.tween,n,r.mt),r)},r3=function(e){for(var i=e._pt,n,r,o,s;i;){for(n=i._next,r=o;r&&r.pr>i.pr;)r=r._next;(i._prev=r?r._prev:s)?i._prev._next=i:o=i,(i._next=r)?r._prev=i:s=i,i=n}e._pt=o},vi=function(){function t(i,n,r,o,s,l,c,d,u){this.t=n,this.s=o,this.c=s,this.p=r,this.r=l||i3,this.d=c||this,this.set=d||U1,this.pr=u||0,this._next=i,i&&(i._prev=this)}var e=t.prototype;return e.modifier=function(n,r,o){this.mSet=this.mSet||this.set,this.set=yM,this.m=n,this.mt=o,this.tween=r},t}();wi(O1+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return N1[t]=1});Oi.TweenMax=Oi.TweenLite=lt;Oi.TimelineLite=Oi.TimelineMax=ri;Be=new ri({sortChildren:!1,defaults:il,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ri.stringFilter=G5;var fs=[],uh={},bM=[],p2=0,kM=0,a0=function(e){return(uh[e]||bM).map(function(i){return i()})},Mg=function(){var e=Date.now(),i=[];e-p2>2&&(a0("matchMediaInit"),fs.forEach(function(n){var r=n.queries,o=n.conditions,s,l,c,d;for(l in r)s=zn.matchMedia(r[l]).matches,s&&(c=1),s!==o[l]&&(o[l]=s,d=1);d&&(n.revert(),c&&i.push(n))}),a0("matchMediaRevert"),i.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),p2=e,a0("matchMedia"))},o3=function(){function t(i,n){this.selector=n&&Eg(n),this.data=[],this._r=[],this.isReverted=!1,this.id=kM++,i&&this.add(i)}var e=t.prototype;return e.add=function(n,r,o){Qe(n)&&(o=r,r=n,n=Qe);var s=this,l=function(){var d=Le,u=s.selector,p;return d&&d!==s&&d.data.push(s),o&&(s.selector=Eg(o)),Le=s,p=r.apply(s,arguments),Qe(p)&&s._r.push(p),Le=d,s.selector=u,s.isReverted=!1,p};return s.last=l,n===Qe?l(s,function(c){return s.add(null,c)}):n?s[n]=l:l},e.ignore=function(n){var r=Le;Le=null,n(this),Le=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof t?n.push.apply(n,r.getTweens()):r instanceof lt&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var o=this;if(n?function(){for(var l=o.getTweens(),c=o.data.length,d;c--;)d=o.data[c],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(u){return l.splice(l.indexOf(u),1)}));for(l.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,p){return p.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=o.data.length;c--;)d=o.data[c],d instanceof ri?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof lt)&&d.revert&&d.revert(n);o._r.forEach(function(u){return u(n,o)}),o.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),r)for(var s=fs.length;s--;)fs[s].id===this.id&&fs.splice(s,1)},e.revert=function(n){this.kill(n||{})},t}(),jM=function(){function t(i){this.contexts=[],this.scope=i,Le&&Le.data.push(this)}var e=t.prototype;return e.add=function(n,r,o){Yn(n)||(n={matches:n});var s=new o3(0,o||this.scope),l=s.conditions={},c,d,u;Le&&!s.selector&&(s.selector=Le.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=n;for(d in n)d==="all"?u=1:(c=zn.matchMedia(n[d]),c&&(fs.indexOf(s)<0&&fs.push(s),(l[d]=c.matches)&&(u=1),c.addListener?c.addListener(Mg):c.addEventListener("change",Mg)));return u&&r(s,function(p){return s.add(null,p)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},t}(),lp={registerPlugin:function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];i.forEach(function(r){return U5(r)})},timeline:function(e){return new ri(e)},getTweensOf:function(e,i){return Be.getTweensOf(e,i)},getProperty:function(e,i,n,r){Ct(e)&&(e=tn(e)[0]);var o=us(e||{}).get,s=n?I5:E5;return n==="native"&&(n=""),e&&(i?s((Ti[i]&&Ti[i].get||o)(e,i,n,r)):function(l,c,d){return s((Ti[l]&&Ti[l].get||o)(e,l,c,d))})},quickSetter:function(e,i,n){if(e=tn(e),e.length>1){var r=e.map(function(u){return ki.quickSetter(u,i,n)}),o=r.length;return function(u){for(var p=o;p--;)r[p](u)}}e=e[0]||{};var s=Ti[i],l=us(e),c=l.harness&&(l.harness.aliases||{})[i]||i,d=s?function(u){var p=new s;ja._pt=0,p.init(e,n?u+n:u,ja,0,[e]),p.render(1,p),ja._pt&&Y1(1,ja)}:l.set(e,c);return s?d:function(u){return d(e,c,n?u+n:u,l,1)}},quickTo:function(e,i,n){var r,o=ki.to(e,$i((r={},r[i]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),s=function(c,d,u){return o.resetTo(i,c,d,u)};return s.tween=o,s},isTweening:function(e){return Be.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ps(e.ease,il.ease)),l2(il,e||{})},config:function(e){return l2(Ri,e||{})},registerEffect:function(e){var i=e.name,n=e.effect,r=e.plugins,o=e.defaults,s=e.extendTimeline;(r||"").split(",").forEach(function(l){return l&&!Ti[l]&&!Oi[l]&&id(i+" effect requires "+l+" plugin.")}),n0[i]=function(l,c,d){return n(tn(l),$i(c||{},o),d)},s&&(ri.prototype[i]=function(l,c,d){return this.add(n0[i](l,Yn(c)?c:(d=c)&&{},this),d)})},registerEase:function(e,i){pe[e]=ps(i)},parseEase:function(e,i){return arguments.length?ps(e,i):pe},getById:function(e){return Be.getById(e)},exportRoot:function(e,i){e===void 0&&(e={});var n=new ri(e),r,o;for(n.smoothChildTiming=xi(e.smoothChildTiming),Be.remove(n),n._dp=0,n._time=n._tTime=Be._time,r=Be._first;r;)o=r._next,(i||!(!r._dur&&r instanceof lt&&r.vars.onComplete===r._targets[0]))&&On(n,r,r._start-r._delay),r=o;return On(Be,n,0),n},context:function(e,i){return e?new o3(e,i):Le},matchMedia:function(e){return new jM(e)},matchMediaRefresh:function(){return fs.forEach(function(e){var i=e.conditions,n,r;for(r in i)i[r]&&(i[r]=!1,n=1);n&&e.revert()})||Mg()},addEventListener:function(e,i){var n=uh[e]||(uh[e]=[]);~n.indexOf(i)||n.push(i)},removeEventListener:function(e,i){var n=uh[e],r=n&&n.indexOf(i);r>=0&&n.splice(r,1)},utils:{wrap:tM,wrapYoyo:iM,distribute:N5,random:$5,snap:O5,normalize:eM,getUnit:Ht,clamp:qA,splitColor:H5,toArray:tn,selector:Eg,mapRange:V5,pipe:KA,unitize:JA,interpolate:nM,shuffle:L5},install:D5,effects:n0,ticker:Ii,updateRoot:ri.updateRoot,plugins:Ti,globalTimeline:Be,core:{PropTween:vi,globals:_5,Tween:lt,Timeline:ri,Animation:sd,getCache:us,_removeLinkedListItem:ef,reverting:function(){return Ft},context:function(e){return e&&Le&&(Le.data.push(e),e._ctx=Le),Le},suppressOverwrites:function(e){return M1=e}}};wi("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return lp[t]=lt[t]});Ii.add(ri.updateRoot);ja=lp.to({},{duration:0});var SM=function(e,i){for(var n=e._pt;n&&n.p!==i&&n.op!==i&&n.fp!==i;)n=n._next;return n},DM=function(e,i){var n=e._targets,r,o,s;for(r in i)for(o=n.length;o--;)s=e._ptLookup[o][r],s&&(s=s.d)&&(s._pt&&(s=SM(s,r)),s&&s.modifier&&s.modifier(i[r],e,n[o],r))},l0=function(e,i){return{name:e,headless:1,rawVars:1,init:function(r,o,s){s._onInit=function(l){var c,d;if(Ct(o)&&(c={},wi(o,function(u){return c[u]=1}),o=c),i){c={};for(d in o)c[d]=i(o[d]);o=c}DM(l,o)}}}},ki=lp.registerPlugin({name:"attr",init:function(e,i,n,r,o){var s,l,c;this.tween=n;for(s in i)c=e.getAttribute(s)||"",l=this.add(e,"setAttribute",(c||0)+"",i[s],r,o,0,0,s),l.op=s,l.b=c,this._props.push(s)},render:function(e,i){for(var n=i._pt;n;)Ft?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,i){for(var n=i.length;n--;)this.add(e,n,e[n]||0,i[n],0,0,0,0,0,1)}},l0("roundProps",Ig),l0("modifiers"),l0("snap",O5))||lp;lt.version=ri.version=ki.version="3.13.0";S5=1;F1()&&sl();pe.Power0;pe.Power1;pe.Power2;pe.Power3;pe.Power4;pe.Linear;pe.Quad;pe.Cubic;pe.Quart;pe.Quint;pe.Strong;pe.Elastic;pe.Back;pe.SteppedEase;pe.Bounce;pe.Sine;pe.Expo;pe.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var f2,Zr,Fa,G1,rs,m2,X1,_M=function(){return typeof window<"u"},Sr={},Zo=180/Math.PI,Ra=Math.PI/180,Ys=Math.atan2,g2=1e8,Z1=/([A-Z])/g,CM=/(left|right|width|margin|padding|x)/i,PM=/[\s,\(]\S/,$n={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zg=function(e,i){return i.set(i.t,i.p,Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},TM=function(e,i){return i.set(i.t,i.p,e===1?i.e:Math.round((i.s+i.c*e)*1e4)/1e4+i.u,i)},EM=function(e,i){return i.set(i.t,i.p,e?Math.round((i.s+i.c*e)*1e4)/1e4+i.u:i.b,i)},IM=function(e,i){var n=i.s+i.c*e;i.set(i.t,i.p,~~(n+(n<0?-.5:.5))+i.u,i)},s3=function(e,i){return i.set(i.t,i.p,e?i.e:i.b,i)},a3=function(e,i){return i.set(i.t,i.p,e!==1?i.b:i.e,i)},AM=function(e,i,n){return e.style[i]=n},MM=function(e,i,n){return e.style.setProperty(i,n)},zM=function(e,i,n){return e._gsap[i]=n},FM=function(e,i,n){return e._gsap.scaleX=e._gsap.scaleY=n},RM=function(e,i,n,r,o){var s=e._gsap;s.scaleX=s.scaleY=n,s.renderTransform(o,s)},LM=function(e,i,n,r,o){var s=e._gsap;s[i]=n,s.renderTransform(o,s)},We="transform",yi=We+"Origin",NM=function t(e,i){var n=this,r=this.target,o=r.style,s=r._gsap;if(e in Sr&&o){if(this.tfm=this.tfm||{},e!=="transform")e=$n[e]||e,~e.indexOf(",")?e.split(",").forEach(function(l){return n.tfm[l]=lr(r,l)}):this.tfm[e]=s.x?s[e]:lr(r,e),e===yi&&(this.tfm.zOrigin=s.zOrigin);else return $n.transform.split(",").forEach(function(l){return t.call(n,l,i)});if(this.props.indexOf(We)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(yi,i,"")),e=We}(o||i)&&this.props.push(e,i,o[e])},l3=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},OM=function(){var e=this.props,i=this.target,n=i.style,r=i._gsap,o,s;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?i[e[o]](e[o+2]):i[e[o]]=e[o+2]:e[o+2]?n[e[o]]=e[o+2]:n.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Z1,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),o=X1(),(!o||!o.isStart)&&!n[We]&&(l3(n),r.zOrigin&&n[yi]&&(n[yi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},c3=function(e,i){var n={target:e,props:[],revert:OM,save:NM};return e._gsap||ki.core.getCache(e),i&&e.style&&e.nodeType&&i.split(",").forEach(function(r){return n.save(r)}),n},d3,Fg=function(e,i){var n=Zr.createElementNS?Zr.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Zr.createElement(e);return n&&n.style?n:Zr.createElement(e)},nn=function t(e,i,n){var r=getComputedStyle(e);return r[i]||r.getPropertyValue(i.replace(Z1,"-$1").toLowerCase())||r.getPropertyValue(i)||!n&&t(e,al(i)||i,1)||""},x2="O,Moz,ms,Ms,Webkit".split(","),al=function(e,i,n){var r=i||rs,o=r.style,s=5;if(e in o&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(x2[s]+e in o););return s<0?null:(s===3?"ms":s>=0?x2[s]:"")+e},Rg=function(){_M()&&window.document&&(f2=window,Zr=f2.document,Fa=Zr.documentElement,rs=Fg("div")||{style:{}},Fg("div"),We=al(We),yi=We+"Origin",rs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",d3=!!al("perspective"),X1=ki.core.reverting,G1=1)},w2=function(e){var i=e.ownerSVGElement,n=Fg("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),o;r.style.display="block",n.appendChild(r),Fa.appendChild(n);try{o=r.getBBox()}catch{}return n.removeChild(r),Fa.removeChild(n),o},v2=function(e,i){for(var n=i.length;n--;)if(e.hasAttribute(i[n]))return e.getAttribute(i[n])},u3=function(e){var i,n;try{i=e.getBBox()}catch{i=w2(e),n=1}return i&&(i.width||i.height)||n||(i=w2(e)),i&&!i.width&&!i.x&&!i.y?{x:+v2(e,["x","cx","x1"])||0,y:+v2(e,["y","cy","y1"])||0,width:0,height:0}:i},h3=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&u3(e))},_s=function(e,i){if(i){var n=e.style,r;i in Sr&&i!==yi&&(i=We),n.removeProperty?(r=i.substr(0,2),(r==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),n.removeProperty(r==="--"?i:i.replace(Z1,"-$1").toLowerCase())):n.removeAttribute(i)}},qr=function(e,i,n,r,o,s){var l=new vi(e._pt,i,n,0,1,s?a3:s3);return e._pt=l,l.b=r,l.e=o,e._props.push(n),l},y2={deg:1,rad:1,turn:1},$M={grid:1,flex:1},ko=function t(e,i,n,r){var o=parseFloat(n)||0,s=(n+"").trim().substr((o+"").length)||"px",l=rs.style,c=CM.test(i),d=e.tagName.toLowerCase()==="svg",u=(d?"client":"offset")+(c?"Width":"Height"),p=100,f=r==="px",g=r==="%",y,w,D,j;if(r===s||!o||y2[r]||y2[s])return o;if(s!=="px"&&!f&&(o=t(e,i,n,"px")),j=e.getCTM&&h3(e),(g||s==="%")&&(Sr[i]||~i.indexOf("adius")))return y=j?e.getBBox()[c?"width":"height"]:e[u],tt(g?o/y*p:o/100*y);if(l[c?"width":"height"]=p+(f?s:r),w=r!=="rem"&&~i.indexOf("adius")||r==="em"&&e.appendChild&&!d?e:e.parentNode,j&&(w=(e.ownerSVGElement||{}).parentNode),(!w||w===Zr||!w.appendChild)&&(w=Zr.body),D=w._gsap,D&&g&&D.width&&c&&D.time===Ii.time&&!D.uncache)return tt(o/D.width*p);if(g&&(i==="height"||i==="width")){var b=e.style[i];e.style[i]=p+r,y=e[u],b?e.style[i]=b:_s(e,i)}else(g||s==="%")&&!$M[nn(w,"display")]&&(l.position=nn(e,"position")),w===e&&(l.position="static"),w.appendChild(rs),y=rs[u],w.removeChild(rs),l.position="absolute";return c&&g&&(D=us(w),D.time=Ii.time,D.width=w[u]),tt(f?y*o/p:y&&o?p/y*o:0)},lr=function(e,i,n,r){var o;return G1||Rg(),i in $n&&i!=="transform"&&(i=$n[i],~i.indexOf(",")&&(i=i.split(",")[0])),Sr[i]&&i!=="transform"?(o=ld(e,r),o=i!=="transformOrigin"?o[i]:o.svg?o.origin:dp(nn(e,yi))+" "+o.zOrigin+"px"):(o=e.style[i],(!o||o==="auto"||r||~(o+"").indexOf("calc("))&&(o=cp[i]&&cp[i](e,i,n)||nn(e,i)||P5(e,i)||(i==="opacity"?1:0))),n&&!~(o+"").trim().indexOf(" ")?ko(e,i,o,n)+n:o},BM=function(e,i,n,r){if(!n||n==="none"){var o=al(i,e,1),s=o&&nn(e,o,1);s&&s!==n?(i=o,n=s):i==="borderColor"&&(n=nn(e,"borderTopColor"))}var l=new vi(this._pt,e.style,i,0,1,n3),c=0,d=0,u,p,f,g,y,w,D,j,b,v,h,x;if(l.b=n,l.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=nn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(w=e.style[i],e.style[i]=r,r=nn(e,i)||r,w?e.style[i]=w:_s(e,i)),u=[n,r],G5(u),n=u[0],r=u[1],f=n.match(ka)||[],x=r.match(ka)||[],x.length){for(;p=ka.exec(r);)D=p[0],b=r.substring(c,p.index),y?y=(y+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(y=1),D!==(w=f[d++]||"")&&(g=parseFloat(w)||0,h=w.substr((g+"").length),D.charAt(1)==="="&&(D=za(g,D)+h),j=parseFloat(D),v=D.substr((j+"").length),c=ka.lastIndex-v.length,v||(v=v||Ri.units[i]||h,c===r.length&&(r+=v,l.e+=v)),h!==v&&(g=ko(e,i,w,v)||0),l._pt={_next:l._pt,p:b||d===1?b:",",s:g,c:j-g,m:y&&y<4||i==="zIndex"?Math.round:0});l.c=c<r.length?r.substring(c,r.length):""}else l.r=i==="display"&&r==="none"?a3:s3;return k5.test(r)&&(l.e=0),this._pt=l,l},b2={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},VM=function(e){var i=e.split(" "),n=i[0],r=i[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),i[0]=b2[n]||n,i[1]=b2[r]||r,i.join(" ")},WM=function(e,i){if(i.tween&&i.tween._time===i.tween._dur){var n=i.t,r=n.style,o=i.u,s=n._gsap,l,c,d;if(o==="all"||o===!0)r.cssText="",c=1;else for(o=o.split(","),d=o.length;--d>-1;)l=o[d],Sr[l]&&(c=1,l=l==="transformOrigin"?yi:We),_s(n,l);c&&(_s(n,We),s&&(s.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",ld(n,1),s.uncache=1,l3(r)))}},cp={clearProps:function(e,i,n,r,o){if(o.data!=="isFromStart"){var s=e._pt=new vi(e._pt,i,n,0,0,WM);return s.u=r,s.pr=-10,s.tween=o,e._props.push(n),1}}},ad=[1,0,0,1,0,0],p3={},f3=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},k2=function(e){var i=nn(e,We);return f3(i)?ad:i.substr(7).match(b5).map(tt)},q1=function(e,i){var n=e._gsap||us(e),r=e.style,o=k2(e),s,l,c,d;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,o=[c.a,c.b,c.c,c.d,c.e,c.f],o.join(",")==="1,0,0,1,0,0"?ad:o):(o===ad&&!e.offsetParent&&e!==Fa&&!n.svg&&(c=r.display,r.display="block",s=e.parentNode,(!s||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,l=e.nextElementSibling,Fa.appendChild(e)),o=k2(e),c?r.display=c:_s(e,"display"),d&&(l?s.insertBefore(e,l):s?s.appendChild(e):Fa.removeChild(e))),i&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},Lg=function(e,i,n,r,o,s){var l=e._gsap,c=o||q1(e,!0),d=l.xOrigin||0,u=l.yOrigin||0,p=l.xOffset||0,f=l.yOffset||0,g=c[0],y=c[1],w=c[2],D=c[3],j=c[4],b=c[5],v=i.split(" "),h=parseFloat(v[0])||0,x=parseFloat(v[1])||0,k,S,_,C;n?c!==ad&&(S=g*D-y*w)&&(_=h*(D/S)+x*(-w/S)+(w*b-D*j)/S,C=h*(-y/S)+x*(g/S)-(g*b-y*j)/S,h=_,x=C):(k=u3(e),h=k.x+(~v[0].indexOf("%")?h/100*k.width:h),x=k.y+(~(v[1]||v[0]).indexOf("%")?x/100*k.height:x)),r||r!==!1&&l.smooth?(j=h-d,b=x-u,l.xOffset=p+(j*g+b*w)-j,l.yOffset=f+(j*y+b*D)-b):l.xOffset=l.yOffset=0,l.xOrigin=h,l.yOrigin=x,l.smooth=!!r,l.origin=i,l.originIsAbsolute=!!n,e.style[yi]="0px 0px",s&&(qr(s,l,"xOrigin",d,h),qr(s,l,"yOrigin",u,x),qr(s,l,"xOffset",p,l.xOffset),qr(s,l,"yOffset",f,l.yOffset)),e.setAttribute("data-svg-origin",h+" "+x)},ld=function(e,i){var n=e._gsap||new Q5(e);if("x"in n&&!i&&!n.uncache)return n;var r=e.style,o=n.scaleX<0,s="px",l="deg",c=getComputedStyle(e),d=nn(e,yi)||"0",u,p,f,g,y,w,D,j,b,v,h,x,k,S,_,C,E,z,A,N,O,W,V,$,I,M,P,R,U,ne,Z,fe;return u=p=f=w=D=j=b=v=h=0,g=y=1,n.svg=!!(e.getCTM&&h3(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[We]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[We]!=="none"?c[We]:"")),r.scale=r.rotate=r.translate="none"),S=q1(e,n.svg),n.svg&&(n.uncache?(I=e.getBBox(),d=n.xOrigin-I.x+"px "+(n.yOrigin-I.y)+"px",$=""):$=!i&&e.getAttribute("data-svg-origin"),Lg(e,$||d,!!$||n.originIsAbsolute,n.smooth!==!1,S)),x=n.xOrigin||0,k=n.yOrigin||0,S!==ad&&(z=S[0],A=S[1],N=S[2],O=S[3],u=W=S[4],p=V=S[5],S.length===6?(g=Math.sqrt(z*z+A*A),y=Math.sqrt(O*O+N*N),w=z||A?Ys(A,z)*Zo:0,b=N||O?Ys(N,O)*Zo+w:0,b&&(y*=Math.abs(Math.cos(b*Ra))),n.svg&&(u-=x-(x*z+k*N),p-=k-(x*A+k*O))):(fe=S[6],ne=S[7],P=S[8],R=S[9],U=S[10],Z=S[11],u=S[12],p=S[13],f=S[14],_=Ys(fe,U),D=_*Zo,_&&(C=Math.cos(-_),E=Math.sin(-_),$=W*C+P*E,I=V*C+R*E,M=fe*C+U*E,P=W*-E+P*C,R=V*-E+R*C,U=fe*-E+U*C,Z=ne*-E+Z*C,W=$,V=I,fe=M),_=Ys(-N,U),j=_*Zo,_&&(C=Math.cos(-_),E=Math.sin(-_),$=z*C-P*E,I=A*C-R*E,M=N*C-U*E,Z=O*E+Z*C,z=$,A=I,N=M),_=Ys(A,z),w=_*Zo,_&&(C=Math.cos(_),E=Math.sin(_),$=z*C+A*E,I=W*C+V*E,A=A*C-z*E,V=V*C-W*E,z=$,W=I),D&&Math.abs(D)+Math.abs(w)>359.9&&(D=w=0,j=180-j),g=tt(Math.sqrt(z*z+A*A+N*N)),y=tt(Math.sqrt(V*V+fe*fe)),_=Ys(W,V),b=Math.abs(_)>2e-4?_*Zo:0,h=Z?1/(Z<0?-Z:Z):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!f3(nn(e,We)),$&&e.setAttribute("transform",$))),Math.abs(b)>90&&Math.abs(b)<270&&(o?(g*=-1,b+=w<=0?180:-180,w+=w<=0?180:-180):(y*=-1,b+=b<=0?180:-180)),i=i||n.uncache,n.x=u-((n.xPercent=u&&(!i&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+s,n.y=p-((n.yPercent=p&&(!i&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=tt(g),n.scaleY=tt(y),n.rotation=tt(w)+l,n.rotationX=tt(D)+l,n.rotationY=tt(j)+l,n.skewX=b+l,n.skewY=v+l,n.transformPerspective=h+s,(n.zOrigin=parseFloat(d.split(" ")[2])||!i&&n.zOrigin||0)&&(r[yi]=dp(d)),n.xOffset=n.yOffset=0,n.force3D=Ri.force3D,n.renderTransform=n.svg?HM:d3?m3:UM,n.uncache=0,n},dp=function(e){return(e=e.split(" "))[0]+" "+e[1]},c0=function(e,i,n){var r=Ht(i);return tt(parseFloat(i)+parseFloat(ko(e,"x",n+"px",r)))+r},UM=function(e,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,m3(e,i)},Lo="0deg",Fl="0px",No=") ",m3=function(e,i){var n=i||this,r=n.xPercent,o=n.yPercent,s=n.x,l=n.y,c=n.z,d=n.rotation,u=n.rotationY,p=n.rotationX,f=n.skewX,g=n.skewY,y=n.scaleX,w=n.scaleY,D=n.transformPerspective,j=n.force3D,b=n.target,v=n.zOrigin,h="",x=j==="auto"&&e&&e!==1||j===!0;if(v&&(p!==Lo||u!==Lo)){var k=parseFloat(u)*Ra,S=Math.sin(k),_=Math.cos(k),C;k=parseFloat(p)*Ra,C=Math.cos(k),s=c0(b,s,S*C*-v),l=c0(b,l,-Math.sin(k)*-v),c=c0(b,c,_*C*-v+v)}D!==Fl&&(h+="perspective("+D+No),(r||o)&&(h+="translate("+r+"%, "+o+"%) "),(x||s!==Fl||l!==Fl||c!==Fl)&&(h+=c!==Fl||x?"translate3d("+s+", "+l+", "+c+") ":"translate("+s+", "+l+No),d!==Lo&&(h+="rotate("+d+No),u!==Lo&&(h+="rotateY("+u+No),p!==Lo&&(h+="rotateX("+p+No),(f!==Lo||g!==Lo)&&(h+="skew("+f+", "+g+No),(y!==1||w!==1)&&(h+="scale("+y+", "+w+No),b.style[We]=h||"translate(0, 0)"},HM=function(e,i){var n=i||this,r=n.xPercent,o=n.yPercent,s=n.x,l=n.y,c=n.rotation,d=n.skewX,u=n.skewY,p=n.scaleX,f=n.scaleY,g=n.target,y=n.xOrigin,w=n.yOrigin,D=n.xOffset,j=n.yOffset,b=n.forceCSS,v=parseFloat(s),h=parseFloat(l),x,k,S,_,C;c=parseFloat(c),d=parseFloat(d),u=parseFloat(u),u&&(u=parseFloat(u),d+=u,c+=u),c||d?(c*=Ra,d*=Ra,x=Math.cos(c)*p,k=Math.sin(c)*p,S=Math.sin(c-d)*-f,_=Math.cos(c-d)*f,d&&(u*=Ra,C=Math.tan(d-u),C=Math.sqrt(1+C*C),S*=C,_*=C,u&&(C=Math.tan(u),C=Math.sqrt(1+C*C),x*=C,k*=C)),x=tt(x),k=tt(k),S=tt(S),_=tt(_)):(x=p,_=f,k=S=0),(v&&!~(s+"").indexOf("px")||h&&!~(l+"").indexOf("px"))&&(v=ko(g,"x",s,"px"),h=ko(g,"y",l,"px")),(y||w||D||j)&&(v=tt(v+y-(y*x+w*S)+D),h=tt(h+w-(y*k+w*_)+j)),(r||o)&&(C=g.getBBox(),v=tt(v+r/100*C.width),h=tt(h+o/100*C.height)),C="matrix("+x+","+k+","+S+","+_+","+v+","+h+")",g.setAttribute("transform",C),b&&(g.style[We]=C)},YM=function(e,i,n,r,o){var s=360,l=Ct(o),c=parseFloat(o)*(l&&~o.indexOf("rad")?Zo:1),d=c-r,u=r+d+"deg",p,f;return l&&(p=o.split("_")[1],p==="short"&&(d%=s,d!==d%(s/2)&&(d+=d<0?s:-s)),p==="cw"&&d<0?d=(d+s*g2)%s-~~(d/s)*s:p==="ccw"&&d>0&&(d=(d-s*g2)%s-~~(d/s)*s)),e._pt=f=new vi(e._pt,i,n,r,d,TM),f.e=u,f.u="deg",e._props.push(n),f},j2=function(e,i){for(var n in i)e[n]=i[n];return e},GM=function(e,i,n){var r=j2({},n._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=n.style,l,c,d,u,p,f,g,y;r.svg?(d=n.getAttribute("transform"),n.setAttribute("transform",""),s[We]=i,l=ld(n,1),_s(n,We),n.setAttribute("transform",d)):(d=getComputedStyle(n)[We],s[We]=i,l=ld(n,1),s[We]=d);for(c in Sr)d=r[c],u=l[c],d!==u&&o.indexOf(c)<0&&(g=Ht(d),y=Ht(u),p=g!==y?ko(n,c,d,y):parseFloat(d),f=parseFloat(u),e._pt=new vi(e._pt,l,c,p,f-p,zg),e._pt.u=y||0,e._props.push(c));j2(l,r)};wi("padding,margin,Width,Radius",function(t,e){var i="Top",n="Right",r="Bottom",o="Left",s=(e<3?[i,n,r,o]:[i+o,i+n,r+n,r+o]).map(function(l){return e<2?t+l:"border"+l+t});cp[e>1?"border"+t:t]=function(l,c,d,u,p){var f,g;if(arguments.length<4)return f=s.map(function(y){return lr(l,y,d)}),g=f.join(" "),g.split(f[0]).length===5?f[0]:g;f=(u+"").split(" "),g={},s.forEach(function(y,w){return g[y]=f[w]=f[w]||f[(w-1)/2|0]}),l.init(c,g,p)}});var g3={name:"css",register:Rg,targetTest:function(e){return e.style&&e.nodeType},init:function(e,i,n,r,o){var s=this._props,l=e.style,c=n.vars.startAt,d,u,p,f,g,y,w,D,j,b,v,h,x,k,S,_;G1||Rg(),this.styles=this.styles||c3(e),_=this.styles.props,this.tween=n;for(w in i)if(w!=="autoRound"&&(u=i[w],!(Ti[w]&&K5(w,i,n,r,e,o)))){if(g=typeof u,y=cp[w],g==="function"&&(u=u.call(n,r,e,o),g=typeof u),g==="string"&&~u.indexOf("random(")&&(u=rd(u)),y)y(this,e,w,u,n)&&(S=1);else if(w.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(w)+"").trim(),u+="",po.lastIndex=0,po.test(d)||(D=Ht(d),j=Ht(u)),j?D!==j&&(d=ko(e,w,d,j)+j):D&&(u+=D),this.add(l,"setProperty",d,u,r,o,0,0,w),s.push(w),_.push(w,0,l[w]);else if(g!=="undefined"){if(c&&w in c?(d=typeof c[w]=="function"?c[w].call(n,r,e,o):c[w],Ct(d)&&~d.indexOf("random(")&&(d=rd(d)),Ht(d+"")||d==="auto"||(d+=Ri.units[w]||Ht(lr(e,w))||""),(d+"").charAt(1)==="="&&(d=lr(e,w))):d=lr(e,w),f=parseFloat(d),b=g==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),p=parseFloat(u),w in $n&&(w==="autoAlpha"&&(f===1&&lr(e,"visibility")==="hidden"&&p&&(f=0),_.push("visibility",0,l.visibility),qr(this,l,"visibility",f?"inherit":"hidden",p?"inherit":"hidden",!p)),w!=="scale"&&w!=="transform"&&(w=$n[w],~w.indexOf(",")&&(w=w.split(",")[0]))),v=w in Sr,v){if(this.styles.save(w),g==="string"&&u.substring(0,6)==="var(--"&&(u=nn(e,u.substring(4,u.indexOf(")"))),p=parseFloat(u)),h||(x=e._gsap,x.renderTransform&&!i.parseTransform||ld(e,i.parseTransform),k=i.smoothOrigin!==!1&&x.smooth,h=this._pt=new vi(this._pt,l,We,0,1,x.renderTransform,x,0,-1),h.dep=1),w==="scale")this._pt=new vi(this._pt,x,"scaleY",x.scaleY,(b?za(x.scaleY,b+p):p)-x.scaleY||0,zg),this._pt.u=0,s.push("scaleY",w),w+="X";else if(w==="transformOrigin"){_.push(yi,0,l[yi]),u=VM(u),x.svg?Lg(e,u,0,k,0,this):(j=parseFloat(u.split(" ")[2])||0,j!==x.zOrigin&&qr(this,x,"zOrigin",x.zOrigin,j),qr(this,l,w,dp(d),dp(u)));continue}else if(w==="svgOrigin"){Lg(e,u,1,k,0,this);continue}else if(w in p3){YM(this,x,w,f,b?za(f,b+u):u);continue}else if(w==="smoothOrigin"){qr(this,x,"smooth",x.smooth,u);continue}else if(w==="force3D"){x[w]=u;continue}else if(w==="transform"){GM(this,u,e);continue}}else w in l||(w=al(w)||w);if(v||(p||p===0)&&(f||f===0)&&!PM.test(u)&&w in l)D=(d+"").substr((f+"").length),p||(p=0),j=Ht(u)||(w in Ri.units?Ri.units[w]:D),D!==j&&(f=ko(e,w,d,j)),this._pt=new vi(this._pt,v?x:l,w,f,(b?za(f,b+p):p)-f,!v&&(j==="px"||w==="zIndex")&&i.autoRound!==!1?IM:zg),this._pt.u=j||0,D!==j&&j!=="%"&&(this._pt.b=d,this._pt.r=EM);else if(w in l)BM.call(this,e,w,d,b?b+u:u);else if(w in e)this.add(e,w,d||e[w],b?b+u:u,r,o);else if(w!=="parseTransform"){L1(w,u);continue}v||(w in l?_.push(w,0,l[w]):typeof e[w]=="function"?_.push(w,2,e[w]()):_.push(w,1,d||e[w])),s.push(w)}}S&&r3(this)},render:function(e,i){if(i.tween._time||!X1())for(var n=i._pt;n;)n.r(e,n.d),n=n._next;else i.styles.revert()},get:lr,aliases:$n,getSetter:function(e,i,n){var r=$n[i];return r&&r.indexOf(",")<0&&(i=r),i in Sr&&i!==yi&&(e._gsap.x||lr(e,"x"))?n&&m2===n?i==="scale"?FM:zM:(m2=n||{})&&(i==="scale"?RM:LM):e.style&&!z1(e.style[i])?AM:~i.indexOf("-")?MM:H1(e,i)},core:{_removeProperty:_s,_getMatrix:q1}};ki.utils.checkPrefix=al;ki.core.getStyleSaver=c3;(function(t,e,i,n){var r=wi(t+","+e+","+i,function(o){Sr[o]=1});wi(e,function(o){Ri.units[o]="deg",p3[o]=1}),$n[r[13]]=t+","+e,wi(n,function(o){var s=o.split(":");$n[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Ri.units[t]="px"});ki.registerPlugin(g3);var J=ki.registerPlugin(g3)||ki;J.core.Tween;/*!
 * VelocityTracker: 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ln,Ng,kc,x3,ia,Sa,Og,w3,v3=function(){return Ln||typeof window<"u"&&(Ln=window.gsap)},$g={},XM=function(e){return Math.round(e*1e4)/1e4},Bg=function(e){return w3(e).id},Ql=function(e){return $g[Bg(typeof e=="string"?kc(e)[0]:e)]},S2=function(e){var i=ia,n;if(e-Og>=.05)for(Og=e;i;)n=i.g(i.t,i.p),(n!==i.v1||e-i.t1>.2)&&(i.v2=i.v1,i.v1=n,i.t2=i.t1,i.t1=e),i=i._next},ZM={deg:360,rad:Math.PI*2},d0=function(){Ln=v3(),Ln&&(kc=Ln.utils.toArray,x3=Ln.utils.getUnit,w3=Ln.core.getCache,Sa=Ln.ticker,Ng=1)},qM=function(e,i,n,r){this.t=e,this.p=i,this.g=e._gsap.get,this.rCap=ZM[n||x3(this.g(e,i))],this.v1=this.v2=0,this.t1=this.t2=Sa.time,r&&(this._next=r,r._prev=this)},Sd=function(){function t(i,n){Ng||d0(),this.target=kc(i)[0],$g[Bg(this.target)]=this,this._props={},n&&this.add(n)}t.register=function(n){Ln=n,d0()};var e=t.prototype;return e.get=function(n,r){var o=this._props[n]||console.warn("Not tracking "+n+" velocity."),s,l,c;return s=parseFloat(r?o.v1:o.g(o.t,o.p)),l=s-parseFloat(o.v2),c=o.rCap,c&&(l=l%c,l!==l%(c/2)&&(l=l<0?l+c:l-c)),XM(l/((r?o.t1:Sa.time)-o.t2))},e.getAll=function(){var n={},r=this._props,o;for(o in r)n[o]=this.get(o);return n},e.isTracking=function(n){return n in this._props},e.add=function(n,r){n in this._props||(ia||(Sa.add(S2),Og=Sa.time),ia=this._props[n]=new qM(this.target,n,r,ia))},e.remove=function(n){var r=this._props[n],o,s;r&&(o=r._prev,s=r._next,o&&(o._next=s),s?s._prev=o:ia===r&&(Sa.remove(S2),ia=0),delete this._props[n])},e.kill=function(n){for(var r in this._props)this.remove(r);n||delete $g[Bg(this.target)]},t.track=function(n,r,o){Ng||d0();for(var s=[],l=kc(n),c=r.split(","),d=(o||"").split(","),u=l.length,p,f;u--;){for(p=Ql(l[u])||new t(l[u]),f=c.length;f--;)p.add(c[f],d[f]||d[0]);s.push(p)}return s},t.untrack=function(n,r){var o=(r||"").split(",");kc(n).forEach(function(s){var l=Ql(s);l&&(o.length?o.forEach(function(c){return l.remove(c)}):l.kill(1))})},t.isTracking=function(n,r){var o=Ql(n);return o&&o.isTracking(r)},t.getVelocity=function(n,r){var o=Ql(n);return!o||!o.isTracking(r)?console.warn("Not tracking velocity of "+r):o.get(r)},t}();Sd.getByTarget=Ql;v3()&&Ln.registerPlugin(Sd);/*!
 * InertiaPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mt,y3,D2,b3,Vg,jc,k3,j3,S3,Q1,D3,Sc,Wg,_3,up=Sd.getByTarget,C3=function(){return mt||typeof window<"u"&&(mt=window.gsap)&&mt.registerPlugin&&mt},QM=function(e){return typeof e=="string"},cd=function(e){return typeof e=="number"},fo=function(e){return typeof e=="object"},Ug=function(e){return typeof e=="function"},KM=1,P3=Array.isArray,JM=function(e){return e},ms=1e10,_2=1/ms,T3=.05,ez=function(e){return Math.round(e*1e4)/1e4},tz=function(e,i,n){for(var r in i)!(r in e)&&r!==n&&(e[r]=i[r]);return e},iz=function t(e){var i={},n,r;for(n in e)i[n]=fo(r=e[n])&&!P3(r)?t(r):r;return i},C2=function(e,i,n,r,o){var s=i.length,l=0,c=ms,d,u,p,f;if(fo(e)){for(;s--;){d=i[s],u=0;for(p in e)f=d[p]-e[p],u+=f*f;u<c&&(l=s,c=u)}if((o||ms)<ms&&o<Math.sqrt(c))return e}else for(;s--;)d=i[s],u=d-e,u<0&&(u=-u),u<c&&d>=r&&d<=n&&(l=s,c=u);return i[l]},E3=function(e,i,n,r,o,s,l){if(e.end==="auto")return e;var c=e.end,d,u;if(n=isNaN(n)?ms:n,r=isNaN(r)?-ms:r,fo(i)){if(d=i.calculated?i:(Ug(c)?c(i,l):C2(i,c,n,r,s))||i,!i.calculated){for(u in d)i[u]=d[u];i.calculated=!0}d=d[o]}else d=Ug(c)?c(i,l):P3(c)?C2(i,c,n,r,s):parseFloat(c);return d>n?d=n:d<r&&(d=r),{max:d,min:d,unitFactor:e.unitFactor}},hp=function(e,i,n){return isNaN(e[i])?n:+e[i]},K1=function(e,i){return i*T3*e/Q1},P2=function(e,i,n){return Math.abs((i-e)*Q1/n/T3)},I3={resistance:1,checkpoint:1,preventOvershoot:1,linkedProps:1,radius:1,duration:1},A3=function(e,i,n,r){if(i.linkedProps){var o=i.linkedProps.split(","),s={},l,c,d,u,p,f;for(l=0;l<o.length;l++)c=o[l],d=i[c],d&&(cd(d.velocity)?u=d.velocity:(p=p||up(e),u=p&&p.isTracking(c)?p.get(c):0),f=Math.abs(u/hp(d,"resistance",r)),s[c]=parseFloat(n(e,c))+K1(u,f));return s}},nz=function(e,i,n,r,o,s){if(n===void 0&&(n=10),r===void 0&&(r=.2),o===void 0&&(o=1),s===void 0&&(s=0),QM(e)&&(e=b3(e)[0]),!e)return 0;var l=0,c=ms,d=i.inertia||i,u=S3(e).get,p=hp(d,"resistance",jc.resistance),f,g,y,w,D,j,b,v,h,x;x=A3(e,d,u,p);for(f in d)I3[f]||(g=d[f],fo(g)||(v=v||up(e),v&&v.isTracking(f)?g=cd(g)?{velocity:g}:{velocity:v.get(f)}:(w=+g||0,y=Math.abs(w/p))),fo(g)&&(cd(g.velocity)?w=g.velocity:(v=v||up(e),w=v&&v.isTracking(f)?v.get(f):0),y=D3(r,n,Math.abs(w/hp(g,"resistance",p))),D=parseFloat(u(e,f))||0,j=D+K1(w,y),"end"in g&&(g=E3(g,x&&f in x?x:j,g.max,g.min,f,d.radius,w),s&&(Sc===i&&(Sc=d=iz(i)),d[f]=tz(g,d[f],"end"))),"max"in g&&j>+g.max+_2?(h=g.unitFactor||jc.unitFactors[f]||1,b=D>g.max&&g.min!==g.max||w*h>-15&&w*h<45?r+(n-r)*.1:P2(D,g.max,w),b+o<c&&(c=b+o)):"min"in g&&j<+g.min-_2&&(h=g.unitFactor||jc.unitFactors[f]||1,b=D<g.min&&g.min!==g.max||w*h>-45&&w*h<15?r+(n-r)*.1:P2(D,g.min,w),b+o<c&&(c=b+o)),b>l&&(l=b)),y>l&&(l=y));return l>c&&(l=c),l>n?n:l<r?r:l},T2=function(){mt=C3(),mt&&(D2=mt.parseEase,b3=mt.utils.toArray,k3=mt.utils.getUnit,S3=mt.core.getCache,D3=mt.utils.clamp,Wg=mt.core.getStyleSaver,_3=mt.core.reverting||function(){},Vg=D2("power3"),Q1=Vg(.05),j3=mt.core.PropTween,mt.config({resistance:100,unitFactors:{time:1e3,totalTime:1e3,progress:1e3,totalProgress:1e3}}),jc=mt.config(),mt.registerPlugin(Sd),y3=1)},J1={version:"3.13.0",name:"inertia",register:function(e){mt=e,T2()},init:function(e,i,n,r,o){y3||T2();var s=up(e);if(i==="auto"){if(!s){console.warn("No inertia tracking on "+e+". InertiaPlugin.track(target) first.");return}i=s.getAll()}this.styles=Wg&&typeof e.style=="object"&&Wg(e),this.target=e,this.tween=n,Sc=i;var l=e._gsap,c=l.get,d=i.duration,u=fo(d),p=i.preventOvershoot||u&&d.overshoot===0,f=hp(i,"resistance",jc.resistance),g=cd(d)?d:nz(e,i,u&&d.max||10,u&&d.min||.2,u&&"overshoot"in d?+d.overshoot:p?0:1,!0),y,w,D,j,b,v,h,x,k;i=Sc,Sc=0,k=A3(e,i,c,f);for(y in i)I3[y]||(w=i[y],Ug(w)&&(w=w(r,e,o)),cd(w)?b=w:fo(w)&&!isNaN(w.velocity)?b=+w.velocity:s&&s.isTracking(y)?b=s.get(y):console.warn("ERROR: No velocity was defined for "+e+" property: "+y),v=K1(b,g),x=0,D=c(e,y),j=k3(D),D=parseFloat(D),fo(w)&&(h=D+v,"end"in w&&(w=E3(w,k&&y in k?k:h,w.max,w.min,y,i.radius,b)),"max"in w&&+w.max<h?p||w.preventOvershoot?v=w.max-D:x=w.max-D-v:"min"in w&&+w.min>h&&(p||w.preventOvershoot?v=w.min-D:x=w.min-D-v)),this._props.push(y),this.styles&&this.styles.save(y),this._pt=new j3(this._pt,e,y,D,0,JM,0,l.set(e,y,this)),this._pt.u=j||0,this._pt.c1=v,this._pt.c2=x);return n.duration(g),KM},render:function(e,i){var n=i._pt;if(e=Vg(i.tween._time/i.tween._dur),e||!_3())for(;n;)n.set(n.t,n.p,ez(n.s+n.c1*e+n.c2*e*e)+n.u,n.d,e),n=n._next;else i.styles.revert()}};"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(t){return J1[t]=Sd[t]});C3()&&mt.registerPlugin(J1);J.registerPlugin(J1);function rz(t,e){let i;return(...n)=>{clearTimeout(i),i=setTimeout(()=>t(...n),e)}}const oz=T.forwardRef(({dotSize:t=16,gap:e=32,baseColor:i="#00d8ff",activeColor:n="#00ff00",proximity:r=150,speedTrigger:o=100,shockRadius:s=250,shockStrength:l=8,maxSpeed:c=5e3,resistance:d=750,returnDuration:u=1.5,className:p="",style:f},g)=>{const y=T.useRef(null),w=T.useRef([]),D=T.useRef([]),j=T.useCallback(()=>{const v=y.current;if(!v)return;v.innerHTML="",w.current=[],D.current=[];const{clientWidth:h,clientHeight:x}=v,k=h/2,S=x/2,_=Math.min(h,x)*.5*.95,C=e,E=t,z=Math.floor(_/C),A=[];for(let V=0;V<z;V++){const $=V/z*_,I=C+$/_*C*1.5,M=2*Math.PI*($||1),P=Math.max(6,Math.floor(M/I));for(let R=0;R<P;R++){const U=R/P*2*Math.PI,ne=k+$*Math.cos(U),Z=S+$*Math.sin(U);ne<0||ne>h||Z<0||Z>x||A.push({x:ne,y:Z})}}const N=40;let O=0;function W(){if(!v)return;const V=Math.min(O+N,A.length);for(;O<V;O++){const{x:$,y:I}=A[O],M=document.createElement("div");M.classList.add("dot-grid__dot"),M._inertiaApplied=!1,J.set(M,{x:0,y:0,backgroundColor:i,width:E,height:E,left:$-E/2,top:I-E/2,position:"absolute"}),v.appendChild(M),w.current.push({x:$,y:I,element:M,originalX:$,originalY:I,currentX:$,currentY:I,velocityX:0,velocityY:0})}O<A.length?requestAnimationFrame(W):requestAnimationFrame(()=>{D.current=w.current.map(({element:$,x:I,y:M})=>({el:$,x:I,y:M}))})}W()},[t,e,i]);T.useEffect(()=>{const v=rz(j,250);j();const h=new ResizeObserver(v);return y.current&&h.observe(y.current),()=>h.disconnect()},[j]);const b=(v,h)=>{D.current.forEach(({el:x,x:k,y:S})=>{const _=Math.hypot(k-v,S-h);if(w.current.find(E=>E.element===x)&&_<s&&!x._inertiaApplied){x._inertiaApplied=!0;const E=Math.max(0,1-_/s),z=(k-v)*l*E,A=(S-h)*l*E;J.to(x,{backgroundColor:n,duration:.2,onComplete:()=>{J.to(x,{backgroundColor:i,duration:.5,delay:.3})}}),J.to(x,{inertia:{x:z,y:A,resistance:d},onComplete:()=>{J.to(x,{x:0,y:0,duration:u,ease:"elastic.out(1,0.75)"}),x._inertiaApplied=!1}})}})};return T.useEffect(()=>{let v=0,h=0,x=0,k=null;const S=E=>{const z=performance.now(),A=z-(v||z),N=E.pageX-h,O=E.pageY-x;let W=N/A*1e3,V=O/A*1e3,$=Math.hypot(W,V);if($>c){const I=c/$;W*=I,V*=I,$=c}v=z,h=E.pageX,x=E.pageY,requestAnimationFrame(()=>{D.current.forEach(({el:I,x:M,y:P})=>{const R=Math.hypot(M-E.pageX,P-E.pageY),U=Math.max(0,1-R/r);if(J.set(I,{backgroundColor:J.utils.interpolate(i,n,U)}),w.current.find(Z=>Z.element===I)&&$>o&&R<r&&!I._inertiaApplied){I._inertiaApplied=!0;const Z=M-E.pageX+W*.005,fe=P-E.pageY+V*.005;J.to(I,{inertia:{x:Z,y:fe,resistance:d},onComplete:()=>{J.to(I,{x:0,y:0,duration:u,ease:"elastic.out(1,0.75)"}),I._inertiaApplied=!1}})}})})},_=E=>{k||(k=setTimeout(()=>{S(E),k=null},60))},C=E=>{b(E.pageX,E.pageY)};return window.addEventListener("mousemove",_),window.addEventListener("click",C),()=>{window.removeEventListener("mousemove",_),window.removeEventListener("click",C),k&&clearTimeout(k)}},[i,n,r,o,s,l,c,d,u]),T.useImperativeHandle(g,()=>({triggerShockwave:(v,h)=>{b(v,h)}}),[i,n,s,l,d,u]),a.jsx("section",{className:`dot-grid ${p}`,style:{...f,"--dot-size":`${t}px`,"--dot-gap":`${e}px`},children:a.jsx("div",{className:"dot-grid__wrap",children:a.jsx("div",{ref:y,className:"dot-grid__container"})})})}),E2=(t,e,i,n)=>{t.style.transition=`${e} ${i}ms ${n}`},cr=(t,e,i)=>Math.min(Math.max(t,e),i);class sz{constructor(e,i){this.glareAngle=0,this.glareOpacity=0,this.calculateGlareSize=s=>{const{width:l,height:c}=s,d=Math.sqrt(l**2+c**2);return{width:d,height:d}},this.setSize=s=>{const l=this.calculateGlareSize(s);this.glareEl.style.width=`${l.width}px`,this.glareEl.style.height=`${l.height}px`},this.update=(s,l,c,d)=>{this.updateAngle(s,l.glareReverse),this.updateOpacity(s,l,c,d)},this.updateAngle=(s,l)=>{const{xPercentage:c,yPercentage:d}=s,u=180/Math.PI,p=c?Math.atan2(d,-c)*u:0;this.glareAngle=p-(l?180:0)},this.updateOpacity=(s,l,c,d)=>{const{xPercentage:u,yPercentage:p}=s,{glarePosition:f,glareReverse:g,glareMaxOpacity:y}=l,w=c?-1:1,D=d?-1:1,j=g?-1:1;let b=0;switch(f){case"top":b=-u*w*j;break;case"right":b=p*D*j;break;case"bottom":case void 0:b=u*w*j;break;case"left":b=-p*D*j;break;case"all":b=Math.hypot(u,p)}const v=cr(b,0,100);this.glareOpacity=v*y/100},this.render=s=>{const{glareColor:l}=s;this.glareEl.style.transform=`rotate(${this.glareAngle}deg) translate(-50%, -50%)`,this.glareEl.style.opacity=this.glareOpacity.toString(),this.glareEl.style.background=`linear-gradient(0deg, rgba(255,255,255,0) 0%, ${l} 100%)`},this.glareWrapperEl=document.createElement("div"),this.glareEl=document.createElement("div"),this.glareWrapperEl.appendChild(this.glareEl),this.glareWrapperEl.className="glare-wrapper",this.glareEl.className="glare";const n={position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden",borderRadius:i,WebkitMaskImage:"-webkit-radial-gradient(white, black)",pointerEvents:"none"},r=this.calculateGlareSize(e),o={position:"absolute",top:"50%",left:"50%",transformOrigin:"0% 0%",pointerEvents:"none",width:`${r.width}px`,height:`${r.height}px`};Object.assign(this.glareWrapperEl.style,n),Object.assign(this.glareEl.style,o)}}class az{constructor(){this.glareAngle=0,this.glareOpacity=0,this.tiltAngleX=0,this.tiltAngleY=0,this.tiltAngleXPercentage=0,this.tiltAngleYPercentage=0,this.update=(e,i)=>{this.updateTilt(e,i),this.updateTiltManualInput(e,i),this.updateTiltReverse(i),this.updateTiltLimits(i)},this.updateTilt=(e,i)=>{const{xPercentage:n,yPercentage:r}=e,{tiltMaxAngleX:o,tiltMaxAngleY:s}=i;this.tiltAngleX=n*o/100,this.tiltAngleY=r*s/100*-1},this.updateTiltManualInput=(e,i)=>{const{tiltAngleXManual:n,tiltAngleYManual:r,tiltMaxAngleX:o,tiltMaxAngleY:s}=i;(n!==null||r!==null)&&(this.tiltAngleX=n!==null?n:0,this.tiltAngleY=r!==null?r:0,e.xPercentage=100*this.tiltAngleX/o,e.yPercentage=100*this.tiltAngleY/s)},this.updateTiltReverse=e=>{const i=e.tiltReverse?-1:1;this.tiltAngleX=i*this.tiltAngleX,this.tiltAngleY=i*this.tiltAngleY},this.updateTiltLimits=e=>{const{tiltAxis:i}=e;this.tiltAngleX=cr(this.tiltAngleX,-90,90),this.tiltAngleY=cr(this.tiltAngleY,-90,90),i&&(this.tiltAngleX=i==="x"?this.tiltAngleX:0,this.tiltAngleY=i==="y"?this.tiltAngleY:0)},this.updateTiltAnglesPercentage=e=>{const{tiltMaxAngleX:i,tiltMaxAngleY:n}=e;this.tiltAngleXPercentage=this.tiltAngleX/i*100,this.tiltAngleYPercentage=this.tiltAngleY/n*100},this.render=e=>{e.style.transform+=`rotateX(${this.tiltAngleX}deg) rotateY(${this.tiltAngleY}deg) `}}}const lz={scale:1,perspective:1e3,flipVertically:!1,flipHorizontally:!1,reset:!0,transitionEasing:"cubic-bezier(.03,.98,.52,.99)",transitionSpeed:400,trackOnWindow:!1,gyroscope:!1,tiltEnable:!0,tiltReverse:!1,tiltAngleXInitial:0,tiltAngleYInitial:0,tiltMaxAngleX:20,tiltMaxAngleY:20,tiltAxis:void 0,tiltAngleXManual:null,tiltAngleYManual:null,glareEnable:!1,glareMaxOpacity:.7,glareColor:"#ffffff",glarePosition:"bottom",glareReverse:!1,glareBorderRadius:"0"};class os extends T.PureComponent{constructor(){super(...arguments),this.wrapperEl={node:null,size:{width:0,height:0,left:0,top:0},clientPosition:{x:null,y:null,xPercentage:0,yPercentage:0},updateAnimationId:null,scale:1},this.tilt=null,this.glare=null,this.addDeviceOrientationEventListener=async()=>{if(!window.DeviceOrientationEvent)return;const e=DeviceOrientationEvent.requestPermission;typeof e=="function"?await e()==="granted"&&window.addEventListener("deviceorientation",this.onMove):window.addEventListener("deviceorientation",this.onMove)},this.setSize=()=>{this.setWrapperElSize(),this.glare&&this.glare.setSize(this.wrapperEl.size)},this.mainLoop=e=>{this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.processInput(e),this.update(e.type),this.wrapperEl.updateAnimationId=requestAnimationFrame(this.renderFrame)},this.onEnter=e=>{const{onEnter:i}=this.props;this.setSize(),this.wrapperEl.node.style.willChange="transform",this.setTransitions(),i&&i({event:e})},this.onMove=e=>{this.mainLoop(e),this.emitOnMove(e)},this.onLeave=e=>{const{onLeave:i}=this.props;if(this.setTransitions(),i&&i({event:e}),this.props.reset){const n=new CustomEvent("autoreset");this.onMove(n)}},this.processInput=e=>{const{scale:i}=this.props;switch(e.type){case"mousemove":this.wrapperEl.clientPosition.x=e.pageX,this.wrapperEl.clientPosition.y=e.pageY,this.wrapperEl.scale=i;break;case"touchmove":this.wrapperEl.clientPosition.x=e.touches[0].pageX,this.wrapperEl.clientPosition.y=e.touches[0].pageY,this.wrapperEl.scale=i;break;case"deviceorientation":this.processInputDeviceOrientation(e),this.wrapperEl.scale=i;break;case"autoreset":{const{tiltAngleXInitial:n,tiltAngleYInitial:r,tiltMaxAngleX:o,tiltMaxAngleY:s}=this.props,l=r/s*100;this.wrapperEl.clientPosition.xPercentage=cr(n/o*100,-100,100),this.wrapperEl.clientPosition.yPercentage=cr(l,-100,100),this.wrapperEl.scale=1;break}}},this.processInputDeviceOrientation=e=>{if(!e.gamma||!e.beta||!this.props.gyroscope)return;const{tiltMaxAngleX:i,tiltMaxAngleY:n}=this.props,r=e.gamma;this.wrapperEl.clientPosition.xPercentage=e.beta/i*100,this.wrapperEl.clientPosition.yPercentage=r/n*100,this.wrapperEl.clientPosition.xPercentage=cr(this.wrapperEl.clientPosition.xPercentage,-100,100),this.wrapperEl.clientPosition.yPercentage=cr(this.wrapperEl.clientPosition.yPercentage,-100,100)},this.update=e=>{const{tiltEnable:i,flipVertically:n,flipHorizontally:r}=this.props;e!=="autoreset"&&e!=="deviceorientation"&&e!=="propChange"&&this.updateClientInput(),i&&this.tilt.update(this.wrapperEl.clientPosition,this.props),this.updateFlip(),this.tilt.updateTiltAnglesPercentage(this.props),this.glare&&this.glare.update(this.wrapperEl.clientPosition,this.props,n,r)},this.updateClientInput=()=>{const{trackOnWindow:e}=this.props;let i,n;if(e){const{x:r,y:o}=this.wrapperEl.clientPosition;i=o/window.innerHeight*200-100,n=r/window.innerWidth*200-100}else{const{size:{width:r,height:o,left:s,top:l},clientPosition:{x:c,y:d}}=this.wrapperEl;i=(d-l)/o*200-100,n=(c-s)/r*200-100}this.wrapperEl.clientPosition.xPercentage=cr(i,-100,100),this.wrapperEl.clientPosition.yPercentage=cr(n,-100,100)},this.updateFlip=()=>{const{flipVertically:e,flipHorizontally:i}=this.props;e&&(this.tilt.tiltAngleX+=180,this.tilt.tiltAngleY*=-1),i&&(this.tilt.tiltAngleY+=180)},this.renderFrame=()=>{this.resetWrapperElTransform(),this.renderPerspective(),this.tilt.render(this.wrapperEl.node),this.renderScale(),this.glare&&this.glare.render(this.props)}}componentDidMount(){if(this.tilt=new az,this.initGlare(),this.setSize(),this.addEventListeners(),typeof CustomEvent>"u")return;const e=new CustomEvent("autoreset");this.mainLoop(e);const i=new CustomEvent("initial");this.emitOnMove(i)}componentWillUnmount(){this.wrapperEl.updateAnimationId!==null&&cancelAnimationFrame(this.wrapperEl.updateAnimationId),this.removeEventListeners()}componentDidUpdate(){const e=new CustomEvent("propChange");this.mainLoop(e),this.emitOnMove(e)}addEventListeners(){const{trackOnWindow:e,gyroscope:i}=this.props;window.addEventListener("resize",this.setSize),e&&(window.addEventListener("mouseenter",this.onEnter),window.addEventListener("mousemove",this.onMove),window.addEventListener("mouseout",this.onLeave),window.addEventListener("touchstart",this.onEnter),window.addEventListener("touchmove",this.onMove),window.addEventListener("touchend",this.onLeave)),i&&this.addDeviceOrientationEventListener()}removeEventListeners(){const{trackOnWindow:e,gyroscope:i}=this.props;window.removeEventListener("resize",this.setSize),e&&(window.removeEventListener("mouseenter",this.onEnter),window.removeEventListener("mousemove",this.onMove),window.removeEventListener("mouseout",this.onLeave),window.removeEventListener("touchstart",this.onEnter),window.removeEventListener("touchmove",this.onMove),window.removeEventListener("touchend",this.onLeave)),i&&window.DeviceOrientationEvent&&window.removeEventListener("deviceorientation",this.onMove)}setWrapperElSize(){const e=this.wrapperEl.node.getBoundingClientRect();this.wrapperEl.size.width=this.wrapperEl.node.offsetWidth,this.wrapperEl.size.height=this.wrapperEl.node.offsetHeight,this.wrapperEl.size.left=e.left+window.scrollX,this.wrapperEl.size.top=e.top+window.scrollY}initGlare(){const{glareEnable:e,glareBorderRadius:i}=this.props;e&&(this.glare=new sz(this.wrapperEl.size,i),this.wrapperEl.node.appendChild(this.glare.glareWrapperEl))}emitOnMove(e){const{onMove:i}=this.props;if(!i)return;let n=0,r=0;this.glare&&(n=this.glare.glareAngle,r=this.glare.glareOpacity),i({tiltAngleX:this.tilt.tiltAngleX,tiltAngleY:this.tilt.tiltAngleY,tiltAngleXPercentage:this.tilt.tiltAngleXPercentage,tiltAngleYPercentage:this.tilt.tiltAngleYPercentage,glareAngle:n,glareOpacity:r,event:e})}resetWrapperElTransform(){this.wrapperEl.node.style.transform=""}renderPerspective(){const{perspective:e}=this.props;this.wrapperEl.node.style.transform+=`perspective(${e}px) `}renderScale(){const{scale:e}=this.wrapperEl;this.wrapperEl.node.style.transform+=`scale3d(${e},${e},${e})`}setTransitions(){const{transitionSpeed:e,transitionEasing:i}=this.props;E2(this.wrapperEl.node,"all",e,i),this.glare&&E2(this.glare.glareEl,"opacity",e,i)}render(){const{children:e,className:i,style:n}=this.props;return a.jsx("div",{ref:r=>{this.wrapperEl.node=r},onMouseEnter:this.onEnter,onMouseMove:this.onMove,onMouseLeave:this.onLeave,onTouchStart:this.onEnter,onTouchMove:this.onMove,onTouchEnd:this.onLeave,className:i,style:n,children:e})}}os.defaultProps=lz;const cz="/Nooshin-Shahsavan-portfolio/assets/sbs-home.5deffb37.mp4",dz="/Nooshin-Shahsavan-portfolio/assets/deli12.2549fd93.jpg",uz="/Nooshin-Shahsavan-portfolio/assets/veen-home.4b7d7433.mp4",ew="/Nooshin-Shahsavan-portfolio/assets/box-2.09b2c2b0.jpg",Xe=[{type:"video",src:cz,label:"Branding/Print",details:[{label:"Project Title:",value:"S.B.S"},{label:"Description:",value:" S.B.S is a clothing brand based in Vancouver. Their goal is to design affordable fashion for partygoers. I designed their logo, print materials, and social media visuals. "},{label:"Timeline",value:"3 weeks"},{label:"Year",value:"2023"}]},{type:"image",src:dz,label:"Branding",details:[{label:"Project Title:",value:"Delicato"},{label:"Description:",value:"Delicato is a small interior design company from Italy that relies on classical architecture in its designs. "},{label:"Timeline",value:"2 weeks"},{label:"Year",value:"2024"}]},{type:"image",src:ew,label:"Branding",details:[{label:"Project Title:",value:"Zar"},{label:"Description:",value:"Zar is an Iranian saffron product that started its activity in 1988. I worked on their branding and packaging design."},{label:"Timeline",value:"2 weeks"},{label:"Year",value:"2024"}]},{type:"video",src:uz,label:"Branding",details:[{label:"Project Title",value:"Veen "},{label:"Description:",value:"Veen is a photography studio based in Vancouver, targeting families and children. I handled their social media and branding."},{label:"Timeline",value:"2 weeks"},{label:"Year",value:"2024"}]}],hz=`
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
`,pz=()=>{const t={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},e={hidden:{opacity:0,y:50,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:hz}),a.jsxs(L.div,{className:"recent-works-grid",variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx(L.div,{variants:e,children:a.jsx(os,{tiltMaxAngleX:20,tiltMaxAngleY:20,scale:1.08,glareEnable:!0,glareMaxOpacity:.4,glareColor:"#ffffff",glarePosition:"all",glareBorderRadius:"8px",children:a.jsxs(yn,{to:"/work/sbs",className:"work-item",tabIndex:0,children:[a.jsx("div",{className:"work-label",children:Xe[0].label}),a.jsx("div",{className:"work-media-container",children:a.jsx("video",{src:Xe[0].src,className:"work-media",controls:!1,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),a.jsxs("div",{className:"work-info-box",children:[a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Project:"})," ",Xe[0].details[0].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Timeline:"})," ",Xe[0].details[2].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Year:"})," ",Xe[0].details[3].value]})]})]})})}),a.jsx(L.div,{variants:e,children:a.jsx(os,{tiltMaxAngleX:20,tiltMaxAngleY:20,scale:1.08,glareEnable:!0,glareMaxOpacity:.4,glareColor:"#ffffff",glarePosition:"all",glareBorderRadius:"8px",children:a.jsxs(yn,{to:"/work/delicato",className:"work-item",tabIndex:0,children:[a.jsx("div",{className:"work-label",children:Xe[1].label}),a.jsx("div",{className:"work-media-container",children:a.jsx("img",{src:Xe[1].src,alt:Xe[1].label,className:"work-media"})}),a.jsxs("div",{className:"work-info-box",children:[a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Project :"})," ",Xe[1].details[0].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Timeline:"})," ",Xe[1].details[2].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Year:"})," ",Xe[1].details[3].value]})]})]})})}),a.jsx(L.div,{variants:e,children:a.jsx(os,{tiltMaxAngleX:20,tiltMaxAngleY:20,scale:1.08,glareEnable:!0,glareMaxOpacity:.4,glareColor:"#ffffff",glarePosition:"all",glareBorderRadius:"8px",children:a.jsxs(yn,{to:"/work/zar",className:"work-item",tabIndex:0,children:[a.jsx("div",{className:"work-label",children:Xe[2].label}),a.jsx("div",{className:"work-media-container",children:a.jsx("img",{src:Xe[2].src,alt:Xe[2].label,className:"work-media cover-fit"})}),a.jsxs("div",{className:"work-info-box",children:[a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Project:"})," ",Xe[2].details[0].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Timeline:"})," ",Xe[2].details[2].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Year:"})," ",Xe[2].details[3].value]})]})]})})}),a.jsx(L.div,{variants:e,children:a.jsx(os,{tiltMaxAngleX:20,tiltMaxAngleY:20,scale:1.08,glareEnable:!0,glareMaxOpacity:.4,glareColor:"#ffffff",glarePosition:"all",glareBorderRadius:"8px",children:a.jsxs(yn,{to:"/work/veen",className:"work-item",tabIndex:0,children:[a.jsx("div",{className:"work-label",children:Xe[3].label}),a.jsx("div",{className:"work-media-container",children:a.jsx("video",{src:Xe[3].src,className:"work-media",controls:!1,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),a.jsxs("div",{className:"work-info-box",children:[a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Project :"})," ",Xe[3].details[0].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Timeline:"})," ",Xe[3].details[2].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Year:"})," ",Xe[3].details[3].value]})]})]})})})]})]})};var M3={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},I2=q.createContext&&q.createContext(M3),mo=globalThis&&globalThis.__assign||function(){return mo=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++){e=arguments[i];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},mo.apply(this,arguments)},fz=globalThis&&globalThis.__rest||function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(i[n[r]]=t[n[r]]);return i};function z3(t){return t&&t.map(function(e,i){return q.createElement(e.tag,mo({key:i},e.attr),z3(e.child))})}function tw(t){return function(e){return q.createElement(mz,mo({attr:mo({},t.attr)},e),z3(t.child))}}function mz(t){var e=function(i){var n=t.attr,r=t.size,o=t.title,s=fz(t,["attr","size","title"]),l=r||i.size||"1em",c;return i.className&&(c=i.className),t.className&&(c=(c?c+" ":"")+t.className),q.createElement("svg",mo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,n,s,{className:c,style:mo(mo({color:t.color||i.color},i.style),t.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),o&&q.createElement("title",null,o),t.children)};return I2!==void 0?q.createElement(I2.Consumer,null,function(i){return e(i)}):e(M3)}function gz(t){return tw({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M1023.46 232a31.629 31.629 0 0 0-2.48-18.271C1012.917 178.288 987.3 160 944.005 160h-832c-38.08 0-79.105 14-99.28 41.472-1.745 1.328-3.409 2.832-4.912 4.576-6.449 7.44-8.705 17.009-7.264 26.033-.288 2.592-.544 5.2-.544 7.92v512c0 53.024 58.992 112 112 112h832c53.024 0 80-58.976 80-112v-512c0-2.832-.368-5.313-.544-8.001zm-911.459-8l832.001-.001h.432L512.002 568.655 81.314 225.407C91.106 223.599 103.154 224 112 224zm832.001 575.999H112.003c-17.648 0-48-30.336-48-48V293.551l427.04 341.648c6.016 5.2 13.487 7.792 20.959 7.792a32.046 32.046 0 0 0 20.976-7.792l427.024-341.632v458.432c0 17.664 1.664 48-16 48z"}}]})(t)}function xz(t){return tw({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511 4c138 0 155 1 209 3 53 2 90 11 123 24 34 13 62 30 90 58s45 56 58 90c13 33 22 70 24 123 2 54 3 71 3 209s-1 155-3 209c-2 53-11 90-24 123-13 34-30 62-58 90s-56 45-90 58c-33 13-70 22-123 24-54 2-71 3-209 3s-155-1-209-3c-53-2-90-11-123-24-34-13-62-30-90-58s-45-56-58-90C18 810 9 773 7 720c-2-54-3-71-3-209s1-155 3-209c2-53 11-90 24-123 13-34 30-62 58-90s56-45 90-58c33-13 70-22 123-24 54-2 71-3 209-3zm0 66c-144 0-161 1-217 3-52 2-81 12-100 19-49 20-82 53-102 102-7 19-17 48-19 100-2 56-3 73-3 217s1 161 3 217c2 52 12 81 19 100 20 49 53 82 102 102 19 7 48 17 100 19 56 2 73 3 217 3s161-1 217-3c52-2 81-12 100-19 49-20 82-53 102-102 7-19 17-48 19-100 2-56 3-73 3-217s-1-161-3-217c-2-52-12-81-19-100-20-49-53-82-102-102-19-7-48-17-100-19-56-2-73-3-217-3zm0 644c112 0 203-91 203-203s-91-203-203-203-203 91-203 203 91 203 203 203zm0-463c144 0 260 116 260 260S655 771 511 771 251 655 251 511s116-260 260-260zm332-10c0 34-28 60-62 60s-60-26-60-60 26-62 60-62 62 28 62 62z"}}]})(t)}function wz(t){return tw({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M997.795 1002.43H789.769c-14.715 0-26.607-11.892-26.607-26.607V640.806c0-114.898-59.263-114.898-78.816-114.898-52.611 0-74.986 41.525-82.243 59.466-3.427 8.064-5.04 21.77-5.04 40.921v349.732c0 14.715-11.892 26.607-26.606 26.607H362.23c-7.055 0-13.909-2.822-18.948-7.86s-7.861-11.895-7.66-18.95c0-5.643 2.822-567.432 0-624.881-.403-7.257 2.217-14.312 7.257-19.553s11.893-8.265 19.35-8.265h208.228c14.714 0 26.607 11.892 26.607 26.607v15.723c35.074-31.244 85.669-57.046 161.058-57.046 166.702 0 266.28 115.3 266.28 308.409v359.005c0 14.715-11.893 26.607-26.607 26.607zm-181.418-53.214l155.012-.004V616.815c0-162.268-77.606-255.193-213.065-255.193-90.507 0-134.45 45.153-162.066 86.476-3.225 10.885-13.506 18.949-25.6 18.949h-1.41c-9.677 0-18.546-5.242-23.181-13.707-3.628-6.653-4.435-14.313-2.016-21.368v-55.835H389.443c1.411 111.068 0 470.477-.403 572.877h154.809V626.09c0-26.809 2.822-46.16 8.869-60.875 23.383-57.852 72.566-92.724 131.427-92.724 83.855 0 132.03 61.28 132.03 168.113v308.611h.204zm-569.246 53.21H38.904c-14.715 0-26.607-11.892-26.607-26.607V349.73c0-14.715 11.892-26.608 26.607-26.608h208.227c14.715 0 26.607 11.893 26.607 26.607V975.82c0 14.715-11.892 26.608-26.607 26.608zM65.513 949.213h155.01V376.336H65.514v572.876zm77.605-658.344l-1.412-.001c-82.041 0-141.707-56.844-141.707-135.055 0-78.009 60.674-134.854 144.529-134.854 82.444 0 141.305 55.231 142.918 134.249 0 78.816-60.674 135.66-144.328 135.66zm1.41-216.492c-54.627 0-91.313 32.857-91.313 81.639 0 47.974 36.284 81.637 88.492 81.637h1.41c54.426 0 91.112-32.857 91.112-81.638-1.008-49.386-36.283-81.638-89.701-81.638z"}}]})(t)}const vz=m.div`
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
`,yz=m.div`
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
`,bz=m.a`
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
`,kz=m.div`
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
`,jz=[{icon:a.jsx(gz,{}),label:"Email Contact",link:"https://mail.google.com/mail/?view=cm&to=nooshin.shahsavan.ca@gmail.com&su=Contact%20from%20my%20website",title:"Email Contact"},{icon:a.jsx(wz,{}),label:"LinkedIn",link:"https://linkedin.com/in/nooshin-shahsavan",title:"LinkedIn"},{icon:a.jsx(xz,{}),label:"Instagram",link:"https://instagram.com/its.nooshin_/",title:"Instagram"}],F3=()=>{const[t,e]=T.useState(null);return a.jsx(vz,{children:a.jsx(yz,{children:jz.map((i,n)=>a.jsxs(bz,{href:i.link,title:i.title,target:"_blank",rel:"noopener noreferrer",$hovered:t===n,onMouseEnter:()=>e(n),onMouseLeave:()=>e(null),children:[i.icon,a.jsx(kz,{$visible:t===n,children:i.label})]},i.label))})})};const Sz=()=>{const t=T.useRef(null),e=T.useRef(null);T.useState(!1);const i=()=>{if(console.log("Starting Say Hi animation..."),!e.current){console.error("Say Hi text element not found");return}J.set(e.current,{opacity:1,scale:.5,x:535,y:250}),J.timeline({repeat:-1,repeatDelay:2}).to(e.current,{opacity:1,scale:1.2,y:230,duration:.5,ease:"back.out(1.7)"}).to(e.current,{opacity:0,scale:.8,y:210,duration:.5,delay:.5}),console.log("Say Hi animation timeline created")};T.useEffect(()=>{const r=setTimeout(()=>{i()},1e3);return()=>clearTimeout(r)},[]),T.useEffect(()=>{const r=async()=>{if(window.spirit)o();else{const s=document.createElement("script");s.src="https://unpkg.com/spiritjs/dist/spirit.min.js",s.onload=()=>{o()},document.head.appendChild(s)}},o=()=>{const s=()=>{window.spirit&&window.spirit.loadAnimation?window.spirit.loadAnimation({loop:!0,path:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/cactus.json"}).then(()=>{console.log("Spirit animation loaded successfully")}).catch(l=>{console.error("Failed to load Spirit animation:",l)}):setTimeout(s,100)};s()};return r(),()=>{t.current&&J.killTweensOf(t.current),e.current&&J.killTweensOf(e.current)}},[]);const n=()=>{navigator.clipboard.writeText("nooshin-shahsavan.ca@gmail.com").then(()=>{const r=document.querySelector(".cactus2-email");r&&(r.classList.add("email-copied"),setTimeout(()=>{r.classList.remove("email-copied")},2e3))})};return a.jsxs("div",{className:"cactus2-container",children:[a.jsx("h2",{className:"cactus2-title",children:"Say Hi!"}),a.jsx("p",{className:"cactus2-email",onClick:n,title:"Click to copy email",children:"nooshin-shahsavan.ca@gmail.com"}),a.jsxs("svg",{ref:t,width:"833px",height:"637px",viewBox:"0 0 833 637",className:"cactus2-svg",children:[a.jsxs("g",{"data-spirit-id":"right-cactus",children:[a.jsxs("g",{"data-spirit-id":"right-body",children:[a.jsx("path",{fill:"#29EA90",d:"M565.5,459.5c0,0,13-112,13-136s-27-37-44-37s-44,13-44,37s13,136,13,136H565.5z"}),a.jsx("path",{fill:"#22B562",d:"M546,288c0,0,14,14,19,29s-11,142-11,142h11c0,0,19-126.3,12-145S546,288,546,288z"}),a.jsx("path",{fill:"none",stroke:"#000000",strokeWidth:"6",strokeMiterlimit:"10",d:`M565.5,459.5c0,0,13-112,13-136s-27-37-44-37
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
              s27.8,62,62,62s62-27.8,62-62S232.2,173,198,173L198,173z`})})]}),a.jsxs("g",{"data-spirit-id":"burst",children:[a.jsxs("g",{"data-spirit-id":"burst-strokes",children:[a.jsx("line",{"data-spirit-id":"bust-stroke-4",fill:"none",stroke:"#000000",strokeWidth:"5",strokeLinecap:"round",strokeMiterlimit:"10",x1:"437",y1:"192",x2:"437",y2:"110"}),a.jsx("line",{"data-spirit-id":"bust-stroke-3",fill:"none",stroke:"#000000",strokeWidth:"5",strokeLinecap:"round",strokeMiterlimit:"10",x1:"437.5",y1:"360",x2:"437.5",y2:"278"}),a.jsx("line",{"data-spirit-id":"bust-stroke-2",fill:"none",stroke:"#000000",strokeWidth:"5",strokeLinecap:"round",strokeMiterlimit:"10",x1:"480.2",y1:"234.8",x2:"562.2",y2:"234.8"}),a.jsx("line",{"data-spirit-id":"bust-stroke-1",fill:"none",stroke:"#000000",strokeWidth:"5",strokeLinecap:"round",strokeMiterlimit:"10",x1:"312.2",y1:"235.2",x2:"394.2",y2:"235.2"})]}),a.jsxs("g",{"data-spirit-id":"burst-bubbles",children:[a.jsx("circle",{"data-spirit-id":"burst-bubble-3",fill:"#36EA96",cx:"455.5",cy:"215.5",r:"9"}),a.jsx("circle",{"data-spirit-id":"burst-bubble-2",fill:"#5BD0FB",cx:"394.5",cy:"206.5",r:"6"}),a.jsx("circle",{"data-spirit-id":"burst-bubble-1",fill:"#5BD0FB",cx:"394.5",cy:"266.5",r:"6"})]})]}),a.jsx("text",{ref:e,x:"535",y:"250",fontSize:"24",fontWeight:"bold",fill:"white",textAnchor:"middle",style:{pointerEvents:"none",userSelect:"none",filter:"drop-shadow(2px 2px 4px rgba(0,0,0,0.8))"},children:"Say Hi!"})]})]})};function A2(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Dz(t,e,i){return e&&A2(t.prototype,e),i&&A2(t,i),t}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mt,hh,Ai,Qr,Kr,La,R3,qo,Dc,L3,fr,gn,N3,O3=function(){return Mt||typeof window<"u"&&(Mt=window.gsap)&&Mt.registerPlugin&&Mt},$3=1,Da=[],ae=[],Hn=[],_c=Date.now,Hg=function(e,i){return i},_z=function(){var e=Dc.core,i=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,ae),r.push.apply(r,Hn),ae=n,Hn=r,Hg=function(s,l){return i[s](l)}},go=function(e,i){return~Hn.indexOf(e)&&Hn[Hn.indexOf(e)+1][i]},Cc=function(e){return!!~L3.indexOf(e)},Kt=function(e,i,n,r,o){return e.addEventListener(i,n,{passive:r!==!1,capture:!!o})},Qt=function(e,i,n,r){return e.removeEventListener(i,n,!!r)},iu="scrollLeft",nu="scrollTop",Yg=function(){return fr&&fr.isPressed||ae.cache++},pp=function(e,i){var n=function r(o){if(o||o===0){$3&&(Ai.history.scrollRestoration="manual");var s=fr&&fr.isPressed;o=r.v=Math.round(o)||(fr&&fr.iOS?1:0),e(o),r.cacheID=ae.cache,s&&Hg("ss",o)}else(i||ae.cache!==r.cacheID||Hg("ref"))&&(r.cacheID=ae.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},oi={s:iu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:pp(function(t){return arguments.length?Ai.scrollTo(t,xt.sc()):Ai.pageXOffset||Qr[iu]||Kr[iu]||La[iu]||0})},xt={s:nu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:oi,sc:pp(function(t){return arguments.length?Ai.scrollTo(oi.sc(),t):Ai.pageYOffset||Qr[nu]||Kr[nu]||La[nu]||0})},ui=function(e,i){return(i&&i._ctx&&i._ctx.selector||Mt.utils.toArray)(e)[0]||(typeof e=="string"&&Mt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Cz=function(e,i){for(var n=i.length;n--;)if(i[n]===e||i[n].contains(e))return!0;return!1},jo=function(e,i){var n=i.s,r=i.sc;Cc(e)&&(e=Qr.scrollingElement||Kr);var o=ae.indexOf(e),s=r===xt.sc?1:2;!~o&&(o=ae.push(e)-1),ae[o+s]||Kt(e,"scroll",Yg);var l=ae[o+s],c=l||(ae[o+s]=pp(go(e,n),!0)||(Cc(e)?r:pp(function(d){return arguments.length?e[n]=d:e[n]})));return c.target=e,l||(c.smooth=Mt.getProperty(e,"scrollBehavior")==="smooth"),c},Gg=function(e,i,n){var r=e,o=e,s=_c(),l=s,c=i||50,d=Math.max(500,c*3),u=function(y,w){var D=_c();w||D-s>c?(o=r,r=y,l=s,s=D):n?r+=y:r=o+(y-o)/(D-l)*(s-l)},p=function(){o=r=n?0:r,l=s=0},f=function(y){var w=l,D=o,j=_c();return(y||y===0)&&y!==r&&u(y),s===l||j-l>d?0:(r+(n?D:-D))/((n?j:s)-w)*1e3};return{update:u,reset:p,getVelocity:f}},Rl=function(e,i){return i&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},M2=function(e){var i=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(i)>=Math.abs(n)?i:n},B3=function(){Dc=Mt.core.globals().ScrollTrigger,Dc&&Dc.core&&_z()},V3=function(e){return Mt=e||O3(),!hh&&Mt&&typeof document<"u"&&document.body&&(Ai=window,Qr=document,Kr=Qr.documentElement,La=Qr.body,L3=[Ai,Qr,Kr,La],Mt.utils.clamp,N3=Mt.core.context||function(){},qo="onpointerenter"in La?"pointer":"mouse",R3=nt.isTouch=Ai.matchMedia&&Ai.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ai||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,gn=nt.eventTypes=("ontouchstart"in Kr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Kr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return $3=0},500),B3(),hh=1),hh};oi.op=xt;ae.cache=0;var nt=function(){function t(i){this.init(i)}var e=t.prototype;return e.init=function(n){hh||V3(Mt)||console.warn("Please gsap.registerPlugin(Observer)"),Dc||B3();var r=n.tolerance,o=n.dragMinimum,s=n.type,l=n.target,c=n.lineHeight,d=n.debounce,u=n.preventDefault,p=n.onStop,f=n.onStopDelay,g=n.ignore,y=n.wheelSpeed,w=n.event,D=n.onDragStart,j=n.onDragEnd,b=n.onDrag,v=n.onPress,h=n.onRelease,x=n.onRight,k=n.onLeft,S=n.onUp,_=n.onDown,C=n.onChangeX,E=n.onChangeY,z=n.onChange,A=n.onToggleX,N=n.onToggleY,O=n.onHover,W=n.onHoverEnd,V=n.onMove,$=n.ignoreCheck,I=n.isNormalizer,M=n.onGestureStart,P=n.onGestureEnd,R=n.onWheel,U=n.onEnable,ne=n.onDisable,Z=n.onClick,fe=n.scrollSpeed,ue=n.capture,me=n.allowClicks,Ne=n.lockAxis,Se=n.onLockAxis;this.target=l=ui(l)||Kr,this.vars=n,g&&(g=Mt.utils.toArray(g)),r=r||1e-9,o=o||0,y=y||1,fe=fe||1,s=s||"wheel,touch,pointer",d=d!==!1,c||(c=parseFloat(Ai.getComputedStyle(La).lineHeight)||22);var Pt,De,ze,ge,Ke,ci,ji,F=this,Si=0,Gn=0,Cr=n.passive||!u&&n.passive!==!1,Ye=jo(l,oi),Xn=jo(l,xt),Pr=Ye(),Io=Xn(),vt=~s.indexOf("touch")&&!~s.indexOf("pointer")&&gn[0]==="pointerdown",Tr=Cc(l),Je=l.ownerDocument||Qr,cn=[0,0,0],Wi=[0,0,0],Zn=0,xl=function(){return Zn=_c()},ot=function(Q,we){return(F.event=Q)&&g&&Cz(Q.target,g)||we&&vt&&Q.pointerType!=="touch"||$&&$(Q,we)},_d=function(){F._vx.reset(),F._vy.reset(),De.pause(),p&&p(F)},qn=function(){var Q=F.deltaX=M2(cn),we=F.deltaY=M2(Wi),H=Math.abs(Q)>=r,ee=Math.abs(we)>=r;z&&(H||ee)&&z(F,Q,we,cn,Wi),H&&(x&&F.deltaX>0&&x(F),k&&F.deltaX<0&&k(F),C&&C(F),A&&F.deltaX<0!=Si<0&&A(F),Si=F.deltaX,cn[0]=cn[1]=cn[2]=0),ee&&(_&&F.deltaY>0&&_(F),S&&F.deltaY<0&&S(F),E&&E(F),N&&F.deltaY<0!=Gn<0&&N(F),Gn=F.deltaY,Wi[0]=Wi[1]=Wi[2]=0),(ge||ze)&&(V&&V(F),ze&&(D&&ze===1&&D(F),b&&b(F),ze=0),ge=!1),ci&&!(ci=!1)&&Se&&Se(F),Ke&&(R(F),Ke=!1),Pt=0},$s=function(Q,we,H){cn[H]+=Q,Wi[H]+=we,F._vx.update(Q),F._vy.update(we),d?Pt||(Pt=requestAnimationFrame(qn)):qn()},Bs=function(Q,we){Ne&&!ji&&(F.axis=ji=Math.abs(Q)>Math.abs(we)?"x":"y",ci=!0),ji!=="y"&&(cn[2]+=Q,F._vx.update(Q,!0)),ji!=="x"&&(Wi[2]+=we,F._vy.update(we,!0)),d?Pt||(Pt=requestAnimationFrame(qn)):qn()},Er=function(Q){if(!ot(Q,1)){Q=Rl(Q,u);var we=Q.clientX,H=Q.clientY,ee=we-F.x,X=H-F.y,te=F.isDragging;F.x=we,F.y=H,(te||(ee||X)&&(Math.abs(F.startX-we)>=o||Math.abs(F.startY-H)>=o))&&(ze=te?2:1,te||(F.isDragging=!0),Bs(ee,X))}},Ao=F.onPress=function(ie){ot(ie,1)||ie&&ie.button||(F.axis=ji=null,De.pause(),F.isPressed=!0,ie=Rl(ie),Si=Gn=0,F.startX=F.x=ie.clientX,F.startY=F.y=ie.clientY,F._vx.reset(),F._vy.reset(),Kt(I?l:Je,gn[1],Er,Cr,!0),F.deltaX=F.deltaY=0,v&&v(F))},ce=F.onRelease=function(ie){if(!ot(ie,1)){Qt(I?l:Je,gn[1],Er,!0);var Q=!isNaN(F.y-F.startY),we=F.isDragging,H=we&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),ee=Rl(ie);!H&&Q&&(F._vx.reset(),F._vy.reset(),u&&me&&Mt.delayedCall(.08,function(){if(_c()-Zn>300&&!ie.defaultPrevented){if(ie.target.click)ie.target.click();else if(Je.createEvent){var X=Je.createEvent("MouseEvents");X.initMouseEvent("click",!0,!0,Ai,1,ee.screenX,ee.screenY,ee.clientX,ee.clientY,!1,!1,!1,!1,0,null),ie.target.dispatchEvent(X)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,p&&we&&!I&&De.restart(!0),ze&&qn(),j&&we&&j(F),h&&h(F,H)}},Mo=function(Q){return Q.touches&&Q.touches.length>1&&(F.isGesturing=!0)&&M(Q,F.isDragging)},dn=function(){return(F.isGesturing=!1)||P(F)},un=function(Q){if(!ot(Q)){var we=Ye(),H=Xn();$s((we-Pr)*fe,(H-Io)*fe,1),Pr=we,Io=H,p&&De.restart(!0)}},hn=function(Q){if(!ot(Q)){Q=Rl(Q,u),R&&(Ke=!0);var we=(Q.deltaMode===1?c:Q.deltaMode===2?Ai.innerHeight:1)*y;$s(Q.deltaX*we,Q.deltaY*we,0),p&&!I&&De.restart(!0)}},zo=function(Q){if(!ot(Q)){var we=Q.clientX,H=Q.clientY,ee=we-F.x,X=H-F.y;F.x=we,F.y=H,ge=!0,p&&De.restart(!0),(ee||X)&&Bs(ee,X)}},Vs=function(Q){F.event=Q,O(F)},Qn=function(Q){F.event=Q,W(F)},wl=function(Q){return ot(Q)||Rl(Q,u)&&Z(F)};De=F._dc=Mt.delayedCall(f||.25,_d).pause(),F.deltaX=F.deltaY=0,F._vx=Gg(0,50,!0),F._vy=Gg(0,50,!0),F.scrollX=Ye,F.scrollY=Xn,F.isDragging=F.isGesturing=F.isPressed=!1,N3(this),F.enable=function(ie){return F.isEnabled||(Kt(Tr?Je:l,"scroll",Yg),s.indexOf("scroll")>=0&&Kt(Tr?Je:l,"scroll",un,Cr,ue),s.indexOf("wheel")>=0&&Kt(l,"wheel",hn,Cr,ue),(s.indexOf("touch")>=0&&R3||s.indexOf("pointer")>=0)&&(Kt(l,gn[0],Ao,Cr,ue),Kt(Je,gn[2],ce),Kt(Je,gn[3],ce),me&&Kt(l,"click",xl,!0,!0),Z&&Kt(l,"click",wl),M&&Kt(Je,"gesturestart",Mo),P&&Kt(Je,"gestureend",dn),O&&Kt(l,qo+"enter",Vs),W&&Kt(l,qo+"leave",Qn),V&&Kt(l,qo+"move",zo)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=ge=ze=!1,F._vx.reset(),F._vy.reset(),Pr=Ye(),Io=Xn(),ie&&ie.type&&Ao(ie),U&&U(F)),F},F.disable=function(){F.isEnabled&&(Da.filter(function(ie){return ie!==F&&Cc(ie.target)}).length||Qt(Tr?Je:l,"scroll",Yg),F.isPressed&&(F._vx.reset(),F._vy.reset(),Qt(I?l:Je,gn[1],Er,!0)),Qt(Tr?Je:l,"scroll",un,ue),Qt(l,"wheel",hn,ue),Qt(l,gn[0],Ao,ue),Qt(Je,gn[2],ce),Qt(Je,gn[3],ce),Qt(l,"click",xl,!0),Qt(l,"click",wl),Qt(Je,"gesturestart",Mo),Qt(Je,"gestureend",dn),Qt(l,qo+"enter",Vs),Qt(l,qo+"leave",Qn),Qt(l,qo+"move",zo),F.isEnabled=F.isPressed=F.isDragging=!1,ne&&ne(F))},F.kill=F.revert=function(){F.disable();var ie=Da.indexOf(F);ie>=0&&Da.splice(ie,1),fr===F&&(fr=0)},Da.push(F),I&&Cc(l)&&(fr=F),F.enable(w)},Dz(t,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),t}();nt.version="3.13.0";nt.create=function(t){return new nt(t)};nt.register=V3;nt.getAll=function(){return Da.slice()};nt.getById=function(t){return Da.filter(function(e){return e.vars.id===t})[0]};O3()&&Mt.registerPlugin(nt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var G,na,se,Te,Ei,ke,iw,fp,dd,Pc,Kl,ru,Vt,rf,Xg,ii,z2,F2,ra,W3,u0,U3,ei,Zg,H3,Y3,Or,qg,nw,Na,rw,mp,Qg,h0,ou=1,Wt=Date.now,p0=Wt(),on=0,Jl=0,R2=function(e,i,n){var r=Pi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+i+"Clamp"]=r,r?e.substr(6,e.length-7):e},L2=function(e,i){return i&&(!Pi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Pz=function t(){return Jl&&requestAnimationFrame(t)},N2=function(){return rf=1},O2=function(){return rf=0},Fn=function(e){return e},ec=function(e){return Math.round(e*1e5)/1e5||0},G3=function(){return typeof window<"u"},X3=function(){return G||G3()&&(G=window.gsap)&&G.registerPlugin&&G},Cs=function(e){return!!~iw.indexOf(e)},Z3=function(e){return(e==="Height"?rw:se["inner"+e])||Ei["client"+e]||ke["client"+e]},q3=function(e){return go(e,"getBoundingClientRect")||(Cs(e)?function(){return xh.width=se.innerWidth,xh.height=rw,xh}:function(){return dr(e)})},Tz=function(e,i,n){var r=n.d,o=n.d2,s=n.a;return(s=go(e,"getBoundingClientRect"))?function(){return s()[r]}:function(){return(i?Z3(o):e["client"+o])||0}},Ez=function(e,i){return!i||~Hn.indexOf(e)?q3(e):function(){return xh}},Bn=function(e,i){var n=i.s,r=i.d2,o=i.d,s=i.a;return Math.max(0,(n="scroll"+r)&&(s=go(e,n))?s()-q3(e)()[o]:Cs(e)?(Ei[n]||ke[n])-Z3(r):e[n]-e["offset"+r])},su=function(e,i){for(var n=0;n<ra.length;n+=3)(!i||~i.indexOf(ra[n+1]))&&e(ra[n],ra[n+1],ra[n+2])},Pi=function(e){return typeof e=="string"},Yt=function(e){return typeof e=="function"},tc=function(e){return typeof e=="number"},Qo=function(e){return typeof e=="object"},Ll=function(e,i,n){return e&&e.progress(i?0:1)&&n&&e.pause()},f0=function(e,i){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return i(e)}):i(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Gs=Math.abs,Q3="left",K3="top",ow="right",sw="bottom",gs="width",xs="height",Tc="Right",Ec="Left",Ic="Top",Ac="Bottom",at="padding",Qi="margin",ll="Width",aw="Height",ft="px",Ki=function(e){return se.getComputedStyle(e)},Iz=function(e){var i=Ki(e).position;e.style.position=i==="absolute"||i==="fixed"?i:"relative"},$2=function(e,i){for(var n in i)n in e||(e[n]=i[n]);return e},dr=function(e,i){var n=i&&Ki(e)[Xg]!=="matrix(1, 0, 0, 1, 0, 0)"&&G.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},gp=function(e,i){var n=i.d2;return e["offset"+n]||e["client"+n]||0},J3=function(e){var i=[],n=e.labels,r=e.duration(),o;for(o in n)i.push(n[o]/r);return i},Az=function(e){return function(i){return G.utils.snap(J3(e),i)}},lw=function(e){var i=G.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,o){return r-o});return n?function(r,o,s){s===void 0&&(s=.001);var l;if(!o)return i(r);if(o>0){for(r-=s,l=0;l<n.length;l++)if(n[l]>=r)return n[l];return n[l-1]}else for(l=n.length,r+=s;l--;)if(n[l]<=r)return n[l];return n[0]}:function(r,o,s){s===void 0&&(s=.001);var l=i(r);return!o||Math.abs(l-r)<s||l-r<0==o<0?l:i(o<0?r-e:r+e)}},Mz=function(e){return function(i,n){return lw(J3(e))(i,n.direction)}},au=function(e,i,n,r){return n.split(",").forEach(function(o){return e(i,o,r)})},kt=function(e,i,n,r,o){return e.addEventListener(i,n,{passive:!r,capture:!!o})},bt=function(e,i,n,r){return e.removeEventListener(i,n,!!r)},lu=function(e,i,n){n=n&&n.wheelHandler,n&&(e(i,"wheel",n),e(i,"touchmove",n))},B2={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},cu={toggleActions:"play",anticipatePin:0},xp={top:0,left:0,center:.5,bottom:1,right:1},ph=function(e,i){if(Pi(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=i/100),e=e.substr(0,n-1)),e=r+(e in xp?xp[e]*i:~e.indexOf("%")?parseFloat(e)*i/100:parseFloat(e)||0)}return e},du=function(e,i,n,r,o,s,l,c){var d=o.startColor,u=o.endColor,p=o.fontSize,f=o.indent,g=o.fontWeight,y=Te.createElement("div"),w=Cs(n)||go(n,"pinType")==="fixed",D=e.indexOf("scroller")!==-1,j=w?ke:n,b=e.indexOf("start")!==-1,v=b?d:u,h="border-color:"+v+";font-size:"+p+";color:"+v+";font-weight:"+g+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return h+="position:"+((D||c)&&w?"fixed;":"absolute;"),(D||c||!w)&&(h+=(r===xt?ow:sw)+":"+(s+parseFloat(f))+"px;"),l&&(h+="box-sizing:border-box;text-align:left;width:"+l.offsetWidth+"px;"),y._isStart=b,y.setAttribute("class","gsap-marker-"+e+(i?" marker-"+i:"")),y.style.cssText=h,y.innerText=i||i===0?e+"-"+i:e,j.children[0]?j.insertBefore(y,j.children[0]):j.appendChild(y),y._offset=y["offset"+r.op.d2],fh(y,0,r,b),y},fh=function(e,i,n,r){var o={display:"block"},s=n[r?"os2":"p2"],l=n[r?"p2":"os2"];e._isFlipped=r,o[n.a+"Percent"]=r?-100:0,o[n.a]=r?"1px":0,o["border"+s+ll]=1,o["border"+l+ll]=0,o[n.p]=i+"px",G.set(e,o)},oe=[],Kg={},ud,V2=function(){return Wt()-on>34&&(ud||(ud=requestAnimationFrame(wr)))},Xs=function(){(!ei||!ei.isPressed||ei.startX>ke.clientWidth)&&(ae.cache++,ei?ud||(ud=requestAnimationFrame(wr)):wr(),on||Ts("scrollStart"),on=Wt())},m0=function(){Y3=se.innerWidth,H3=se.innerHeight},ic=function(e){ae.cache++,(e===!0||!Vt&&!U3&&!Te.fullscreenElement&&!Te.webkitFullscreenElement&&(!Zg||Y3!==se.innerWidth||Math.abs(se.innerHeight-H3)>se.innerHeight*.25))&&fp.restart(!0)},Ps={},zz=[],e4=function t(){return bt(le,"scrollEnd",t)||ss(!0)},Ts=function(e){return Ps[e]&&Ps[e].map(function(i){return i()})||zz},_i=[],t4=function(e){for(var i=0;i<_i.length;i+=5)(!e||_i[i+4]&&_i[i+4].query===e)&&(_i[i].style.cssText=_i[i+1],_i[i].getBBox&&_i[i].setAttribute("transform",_i[i+2]||""),_i[i+3].uncache=1)},cw=function(e,i){var n;for(ii=0;ii<oe.length;ii++)n=oe[ii],n&&(!i||n._ctx===i)&&(e?n.kill(1):n.revert(!0,!0));mp=!0,i&&t4(i),i||Ts("revert")},i4=function(e,i){ae.cache++,(i||!ni)&&ae.forEach(function(n){return Yt(n)&&n.cacheID++&&(n.rec=0)}),Pi(e)&&(se.history.scrollRestoration=nw=e)},ni,ws=0,W2,Fz=function(){if(W2!==ws){var e=W2=ws;requestAnimationFrame(function(){return e===ws&&ss(!0)})}},n4=function(){ke.appendChild(Na),rw=!ei&&Na.offsetHeight||se.innerHeight,ke.removeChild(Na)},U2=function(e){return dd(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i){return i.style.display=e?"none":"block"})},ss=function(e,i){if(Ei=Te.documentElement,ke=Te.body,iw=[se,Te,Ei,ke],on&&!e&&!mp){kt(le,"scrollEnd",e4);return}n4(),ni=le.isRefreshing=!0,ae.forEach(function(r){return Yt(r)&&++r.cacheID&&(r.rec=r())});var n=Ts("refreshInit");W3&&le.sort(),i||cw(),ae.forEach(function(r){Yt(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),oe.slice(0).forEach(function(r){return r.refresh()}),mp=!1,oe.forEach(function(r){if(r._subPinOffset&&r.pin){var o=r.vars.horizontal?"offsetWidth":"offsetHeight",s=r.pin[o];r.revert(!0,1),r.adjustPinSpacing(r.pin[o]-s),r.refresh()}}),Qg=1,U2(!0),oe.forEach(function(r){var o=Bn(r.scroller,r._dir),s=r.vars.end==="max"||r._endClamp&&r.end>o,l=r._startClamp&&r.start>=o;(s||l)&&r.setPositions(l?o-1:r.start,s?Math.max(l?o:r.start+1,o):r.end,!0)}),U2(!1),Qg=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),ae.forEach(function(r){Yt(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),i4(nw,1),fp.pause(),ws++,ni=2,wr(2),oe.forEach(function(r){return Yt(r.vars.onRefresh)&&r.vars.onRefresh(r)}),ni=le.isRefreshing=!1,Ts("refresh")},Jg=0,mh=1,Mc,wr=function(e){if(e===2||!ni&&!mp){le.isUpdating=!0,Mc&&Mc.update(0);var i=oe.length,n=Wt(),r=n-p0>=50,o=i&&oe[0].scroll();if(mh=Jg>o?-1:1,ni||(Jg=o),r&&(on&&!rf&&n-on>200&&(on=0,Ts("scrollEnd")),Kl=p0,p0=n),mh<0){for(ii=i;ii-- >0;)oe[ii]&&oe[ii].update(0,r);mh=1}else for(ii=0;ii<i;ii++)oe[ii]&&oe[ii].update(0,r);le.isUpdating=!1}ud=0},ex=[Q3,K3,sw,ow,Qi+Ac,Qi+Tc,Qi+Ic,Qi+Ec,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],gh=ex.concat([gs,xs,"boxSizing","max"+ll,"max"+aw,"position",Qi,at,at+Ic,at+Tc,at+Ac,at+Ec]),Rz=function(e,i,n){Oa(n);var r=e._gsap;if(r.spacerIsNative)Oa(r.spacerState);else if(e._gsap.swappedIn){var o=i.parentNode;o&&(o.insertBefore(e,i),o.removeChild(i))}e._gsap.swappedIn=!1},g0=function(e,i,n,r){if(!e._gsap.swappedIn){for(var o=ex.length,s=i.style,l=e.style,c;o--;)c=ex[o],s[c]=n[c];s.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(s.display="inline-block"),l[sw]=l[ow]="auto",s.flexBasis=n.flexBasis||"auto",s.overflow="visible",s.boxSizing="border-box",s[gs]=gp(e,oi)+ft,s[xs]=gp(e,xt)+ft,s[at]=l[Qi]=l[K3]=l[Q3]="0",Oa(r),l[gs]=l["max"+ll]=n[gs],l[xs]=l["max"+aw]=n[xs],l[at]=n[at],e.parentNode!==i&&(e.parentNode.insertBefore(i,e),i.appendChild(e)),e._gsap.swappedIn=!0}},Lz=/([A-Z])/g,Oa=function(e){if(e){var i=e.t.style,n=e.length,r=0,o,s;for((e.t._gsap||G.core.getCache(e.t)).uncache=1;r<n;r+=2)s=e[r+1],o=e[r],s?i[o]=s:i[o]&&i.removeProperty(o.replace(Lz,"-$1").toLowerCase())}},uu=function(e){for(var i=gh.length,n=e.style,r=[],o=0;o<i;o++)r.push(gh[o],n[gh[o]]);return r.t=e,r},Nz=function(e,i,n){for(var r=[],o=e.length,s=n?8:0,l;s<o;s+=2)l=e[s],r.push(l,l in i?i[l]:e[s+1]);return r.t=e.t,r},xh={left:0,top:0},H2=function(e,i,n,r,o,s,l,c,d,u,p,f,g,y){Yt(e)&&(e=e(c)),Pi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?ph("0"+e.substr(3),n):0));var w=g?g.time():0,D,j,b;if(g&&g.seek(0),isNaN(e)||(e=+e),tc(e))g&&(e=G.utils.mapRange(g.scrollTrigger.start,g.scrollTrigger.end,0,f,e)),l&&fh(l,n,r,!0);else{Yt(i)&&(i=i(c));var v=(e||"0").split(" "),h,x,k,S;b=ui(i,c)||ke,h=dr(b)||{},(!h||!h.left&&!h.top)&&Ki(b).display==="none"&&(S=b.style.display,b.style.display="block",h=dr(b),S?b.style.display=S:b.style.removeProperty("display")),x=ph(v[0],h[r.d]),k=ph(v[1]||"0",n),e=h[r.p]-d[r.p]-u+x+o-k,l&&fh(l,k,r,n-k<20||l._isStart&&k>20),n-=n-k}if(y&&(c[y]=e||-.001,e<0&&(e=0)),s){var _=e+n,C=s._isStart;D="scroll"+r.d2,fh(s,_,r,C&&_>20||!C&&(p?Math.max(ke[D],Ei[D]):s.parentNode[D])<=_+1),p&&(d=dr(l),p&&(s.style[r.op.p]=d[r.op.p]-r.op.m-s._offset+ft))}return g&&b&&(D=dr(b),g.seek(f),j=dr(b),g._caScrollDist=D[r.p]-j[r.p],e=e/g._caScrollDist*f),g&&g.seek(w),g?e:Math.round(e)},Oz=/(webkit|moz|length|cssText|inset)/i,Y2=function(e,i,n,r){if(e.parentNode!==i){var o=e.style,s,l;if(i===ke){e._stOrig=o.cssText,l=Ki(e);for(s in l)!+s&&!Oz.test(s)&&l[s]&&typeof o[s]=="string"&&s!=="0"&&(o[s]=l[s]);o.top=n,o.left=r}else o.cssText=e._stOrig;G.core.getCache(e).uncache=1,i.appendChild(e)}},r4=function(e,i,n){var r=i,o=r;return function(s){var l=Math.round(e());return l!==r&&l!==o&&Math.abs(l-r)>3&&Math.abs(l-o)>3&&(s=l,n&&n()),o=r,r=Math.round(s),r}},hu=function(e,i,n){var r={};r[i.p]="+="+n,G.set(e,r)},G2=function(e,i){var n=jo(e,i),r="_scroll"+i.p2,o=function s(l,c,d,u,p){var f=s.tween,g=c.onComplete,y={};d=d||n();var w=r4(n,d,function(){f.kill(),s.tween=0});return p=u&&p||0,u=u||l-d,f&&f.kill(),c[r]=l,c.inherit=!1,c.modifiers=y,y[r]=function(){return w(d+u*f.ratio+p*f.ratio*f.ratio)},c.onUpdate=function(){ae.cache++,s.tween&&wr()},c.onComplete=function(){s.tween=0,g&&g.call(f)},f=s.tween=G.to(e,c),f};return e[r]=n,n.wheelHandler=function(){return o.tween&&o.tween.kill()&&(o.tween=0)},kt(e,"wheel",n.wheelHandler),le.isTouch&&kt(e,"touchmove",n.wheelHandler),o},le=function(){function t(i,n){na||t.register(G)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),qg(this),this.init(i,n)}var e=t.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Jl){this.update=this.refresh=this.kill=Fn;return}n=$2(Pi(n)||tc(n)||n.nodeType?{trigger:n}:n,cu);var o=n,s=o.onUpdate,l=o.toggleClass,c=o.id,d=o.onToggle,u=o.onRefresh,p=o.scrub,f=o.trigger,g=o.pin,y=o.pinSpacing,w=o.invalidateOnRefresh,D=o.anticipatePin,j=o.onScrubComplete,b=o.onSnapComplete,v=o.once,h=o.snap,x=o.pinReparent,k=o.pinSpacer,S=o.containerAnimation,_=o.fastScrollEnd,C=o.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?oi:xt,z=!p&&p!==0,A=ui(n.scroller||se),N=G.core.getCache(A),O=Cs(A),W=("pinType"in n?n.pinType:go(A,"pinType")||O&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=z&&n.toggleActions.split(" "),I="markers"in n?n.markers:cu.markers,M=O?0:parseFloat(Ki(A)["border"+E.p2+ll])||0,P=this,R=n.onRefreshInit&&function(){return n.onRefreshInit(P)},U=Tz(A,O,E),ne=Ez(A,O),Z=0,fe=0,ue=0,me=jo(A,E),Ne,Se,Pt,De,ze,ge,Ke,ci,ji,F,Si,Gn,Cr,Ye,Xn,Pr,Io,vt,Tr,Je,cn,Wi,Zn,xl,ot,_d,qn,$s,Bs,Er,Ao,ce,Mo,dn,un,hn,zo,Vs,Qn;if(P._startClamp=P._endClamp=!1,P._dir=E,D*=45,P.scroller=A,P.scroll=S?S.time.bind(S):me,De=me(),P.vars=n,r=r||n.animation,"refreshPriority"in n&&(W3=1,n.refreshPriority===-9999&&(Mc=P)),N.tweenScroll=N.tweenScroll||{top:G2(A,xt),left:G2(A,oi)},P.tweenTo=Ne=N.tweenScroll[E.p],P.scrubDuration=function(H){Mo=tc(H)&&H,Mo?ce?ce.duration(H):ce=G.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Mo,paused:!0,onComplete:function(){return j&&j(P)}}):(ce&&ce.progress(1).kill(),ce=0)},r&&(r.vars.lazy=!1,r._initted&&!P.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),P.animation=r.pause(),r.scrollTrigger=P,P.scrubDuration(p),Er=0,c||(c=r.vars.id)),h&&((!Qo(h)||h.push)&&(h={snapTo:h}),"scrollBehavior"in ke.style&&G.set(O?[ke,Ei]:A,{scrollBehavior:"auto"}),ae.forEach(function(H){return Yt(H)&&H.target===(O?Te.scrollingElement||Ei:A)&&(H.smooth=!1)}),Pt=Yt(h.snapTo)?h.snapTo:h.snapTo==="labels"?Az(r):h.snapTo==="labelsDirectional"?Mz(r):h.directional!==!1?function(H,ee){return lw(h.snapTo)(H,Wt()-fe<500?0:ee.direction)}:G.utils.snap(h.snapTo),dn=h.duration||{min:.1,max:2},dn=Qo(dn)?Pc(dn.min,dn.max):Pc(dn,dn),un=G.delayedCall(h.delay||Mo/2||.1,function(){var H=me(),ee=Wt()-fe<500,X=Ne.tween;if((ee||Math.abs(P.getVelocity())<10)&&!X&&!rf&&Z!==H){var te=(H-ge)/Ye,yt=r&&!z?r.totalProgress():te,he=ee?0:(yt-Ao)/(Wt()-Kl)*1e3||0,et=G.utils.clamp(-te,1-te,Gs(he/2)*he/.185),Lt=te+(h.inertia===!1?0:et),Ge,Fe,_e=h,pn=_e.onStart,Oe=_e.onInterrupt,Di=_e.onComplete;if(Ge=Pt(Lt,P),tc(Ge)||(Ge=Lt),Fe=Math.max(0,Math.round(ge+Ge*Ye)),H<=Ke&&H>=ge&&Fe!==H){if(X&&!X._initted&&X.data<=Gs(Fe-H))return;h.inertia===!1&&(et=Ge-te),Ne(Fe,{duration:dn(Gs(Math.max(Gs(Lt-yt),Gs(Ge-yt))*.185/he/.05||0)),ease:h.ease||"power3",data:Gs(Fe-H),onInterrupt:function(){return un.restart(!0)&&Oe&&Oe(P)},onComplete:function(){P.update(),Z=me(),r&&!z&&(ce?ce.resetTo("totalProgress",Ge,r._tTime/r._tDur):r.progress(Ge)),Er=Ao=r&&!z?r.totalProgress():P.progress,b&&b(P),Di&&Di(P)}},H,et*Ye,Fe-H-et*Ye),pn&&pn(P,Ne.tween)}}else P.isActive&&Z!==H&&un.restart(!0)}).pause()),c&&(Kg[c]=P),f=P.trigger=ui(f||g!==!0&&g),Qn=f&&f._gsap&&f._gsap.stRevert,Qn&&(Qn=Qn(P)),g=g===!0?f:ui(g),Pi(l)&&(l={targets:f,className:l}),g&&(y===!1||y===Qi||(y=!y&&g.parentNode&&g.parentNode.style&&Ki(g.parentNode).display==="flex"?!1:at),P.pin=g,Se=G.core.getCache(g),Se.spacer?Xn=Se.pinState:(k&&(k=ui(k),k&&!k.nodeType&&(k=k.current||k.nativeElement),Se.spacerIsNative=!!k,k&&(Se.spacerState=uu(k))),Se.spacer=vt=k||Te.createElement("div"),vt.classList.add("pin-spacer"),c&&vt.classList.add("pin-spacer-"+c),Se.pinState=Xn=uu(g)),n.force3D!==!1&&G.set(g,{force3D:!0}),P.spacer=vt=Se.spacer,Bs=Ki(g),xl=Bs[y+E.os2],Je=G.getProperty(g),cn=G.quickSetter(g,E.a,ft),g0(g,vt,Bs),Io=uu(g)),I){Gn=Qo(I)?$2(I,B2):B2,F=du("scroller-start",c,A,E,Gn,0),Si=du("scroller-end",c,A,E,Gn,0,F),Tr=F["offset"+E.op.d2];var wl=ui(go(A,"content")||A);ci=this.markerStart=du("start",c,wl,E,Gn,Tr,0,S),ji=this.markerEnd=du("end",c,wl,E,Gn,Tr,0,S),S&&(Vs=G.quickSetter([ci,ji],E.a,ft)),!W&&!(Hn.length&&go(A,"fixedMarkers")===!0)&&(Iz(O?ke:A),G.set([F,Si],{force3D:!0}),_d=G.quickSetter(F,E.a,ft),$s=G.quickSetter(Si,E.a,ft))}if(S){var ie=S.vars.onUpdate,Q=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){P.update(0,0,1),ie&&ie.apply(S,Q||[])})}if(P.previous=function(){return oe[oe.indexOf(P)-1]},P.next=function(){return oe[oe.indexOf(P)+1]},P.revert=function(H,ee){if(!ee)return P.kill(!0);var X=H!==!1||!P.enabled,te=Vt;X!==P.isReverted&&(X&&(hn=Math.max(me(),P.scroll.rec||0),ue=P.progress,zo=r&&r.progress()),ci&&[ci,ji,F,Si].forEach(function(yt){return yt.style.display=X?"none":"block"}),X&&(Vt=P,P.update(X)),g&&(!x||!P.isActive)&&(X?Rz(g,vt,Xn):g0(g,vt,Ki(g),ot)),X||P.update(X),Vt=te,P.isReverted=X)},P.refresh=function(H,ee,X,te){if(!((Vt||!P.enabled)&&!ee)){if(g&&H&&on){kt(t,"scrollEnd",e4);return}!ni&&R&&R(P),Vt=P,Ne.tween&&!X&&(Ne.tween.kill(),Ne.tween=0),ce&&ce.pause(),w&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren&&r.getChildren(!0,!0,!1).forEach(function(Ir){return Ir.vars.immediateRender&&Ir.render(0,!0,!0)})),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var yt=U(),he=ne(),et=S?S.duration():Bn(A,E),Lt=Ye<=.01||!Ye,Ge=0,Fe=te||0,_e=Qo(X)?X.end:n.end,pn=n.endTrigger||f,Oe=Qo(X)?X.start:n.start||(n.start===0||!f?0:g?"0 0":"0 100%"),Di=P.pinnedContainer=n.pinnedContainer&&ui(n.pinnedContainer,P),Pn=f&&Math.max(0,oe.indexOf(P))||0,Tt=Pn,Et,Nt,Fo,Cd,Ot,pt,Tn,sf,pw,vl,En,yl,Pd;for(I&&Qo(X)&&(yl=G.getProperty(F,E.p),Pd=G.getProperty(Si,E.p));Tt-- >0;)pt=oe[Tt],pt.end||pt.refresh(0,1)||(Vt=P),Tn=pt.pin,Tn&&(Tn===f||Tn===g||Tn===Di)&&!pt.isReverted&&(vl||(vl=[]),vl.unshift(pt),pt.revert(!0,!0)),pt!==oe[Tt]&&(Pn--,Tt--);for(Yt(Oe)&&(Oe=Oe(P)),Oe=R2(Oe,"start",P),ge=H2(Oe,f,yt,E,me(),ci,F,P,he,M,W,et,S,P._startClamp&&"_startClamp")||(g?-.001:0),Yt(_e)&&(_e=_e(P)),Pi(_e)&&!_e.indexOf("+=")&&(~_e.indexOf(" ")?_e=(Pi(Oe)?Oe.split(" ")[0]:"")+_e:(Ge=ph(_e.substr(2),yt),_e=Pi(Oe)?Oe:(S?G.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,ge):ge)+Ge,pn=f)),_e=R2(_e,"end",P),Ke=Math.max(ge,H2(_e||(pn?"100% 0":et),pn,yt,E,me()+Ge,ji,Si,P,he,M,W,et,S,P._endClamp&&"_endClamp"))||-.001,Ge=0,Tt=Pn;Tt--;)pt=oe[Tt],Tn=pt.pin,Tn&&pt.start-pt._pinPush<=ge&&!S&&pt.end>0&&(Et=pt.end-(P._startClamp?Math.max(0,pt.start):pt.start),(Tn===f&&pt.start-pt._pinPush<ge||Tn===Di)&&isNaN(Oe)&&(Ge+=Et*(1-pt.progress)),Tn===g&&(Fe+=Et));if(ge+=Ge,Ke+=Ge,P._startClamp&&(P._startClamp+=Ge),P._endClamp&&!ni&&(P._endClamp=Ke||-.001,Ke=Math.min(Ke,Bn(A,E))),Ye=Ke-ge||(ge-=.01)&&.001,Lt&&(ue=G.utils.clamp(0,1,G.utils.normalize(ge,Ke,hn))),P._pinPush=Fe,ci&&Ge&&(Et={},Et[E.a]="+="+Ge,Di&&(Et[E.p]="-="+me()),G.set([ci,ji],Et)),g&&!(Qg&&P.end>=Bn(A,E)))Et=Ki(g),Cd=E===xt,Fo=me(),Wi=parseFloat(Je(E.a))+Fe,!et&&Ke>1&&(En=(O?Te.scrollingElement||Ei:A).style,En={style:En,value:En["overflow"+E.a.toUpperCase()]},O&&Ki(ke)["overflow"+E.a.toUpperCase()]!=="scroll"&&(En.style["overflow"+E.a.toUpperCase()]="scroll")),g0(g,vt,Et),Io=uu(g),Nt=dr(g,!0),sf=W&&jo(A,Cd?oi:xt)(),y?(ot=[y+E.os2,Ye+Fe+ft],ot.t=vt,Tt=y===at?gp(g,E)+Ye+Fe:0,Tt&&(ot.push(E.d,Tt+ft),vt.style.flexBasis!=="auto"&&(vt.style.flexBasis=Tt+ft)),Oa(ot),Di&&oe.forEach(function(Ir){Ir.pin===Di&&Ir.vars.pinSpacing!==!1&&(Ir._subPinOffset=!0)}),W&&me(hn)):(Tt=gp(g,E),Tt&&vt.style.flexBasis!=="auto"&&(vt.style.flexBasis=Tt+ft)),W&&(Ot={top:Nt.top+(Cd?Fo-ge:sf)+ft,left:Nt.left+(Cd?sf:Fo-ge)+ft,boxSizing:"border-box",position:"fixed"},Ot[gs]=Ot["max"+ll]=Math.ceil(Nt.width)+ft,Ot[xs]=Ot["max"+aw]=Math.ceil(Nt.height)+ft,Ot[Qi]=Ot[Qi+Ic]=Ot[Qi+Tc]=Ot[Qi+Ac]=Ot[Qi+Ec]="0",Ot[at]=Et[at],Ot[at+Ic]=Et[at+Ic],Ot[at+Tc]=Et[at+Tc],Ot[at+Ac]=Et[at+Ac],Ot[at+Ec]=Et[at+Ec],Pr=Nz(Xn,Ot,x),ni&&me(0)),r?(pw=r._initted,u0(1),r.render(r.duration(),!0,!0),Zn=Je(E.a)-Wi+Ye+Fe,qn=Math.abs(Ye-Zn)>1,W&&qn&&Pr.splice(Pr.length-2,2),r.render(0,!0,!0),pw||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),u0(0)):Zn=Ye,En&&(En.value?En.style["overflow"+E.a.toUpperCase()]=En.value:En.style.removeProperty("overflow-"+E.a));else if(f&&me()&&!S)for(Nt=f.parentNode;Nt&&Nt!==ke;)Nt._pinOffset&&(ge-=Nt._pinOffset,Ke-=Nt._pinOffset),Nt=Nt.parentNode;vl&&vl.forEach(function(Ir){return Ir.revert(!1,!0)}),P.start=ge,P.end=Ke,De=ze=ni?hn:me(),!S&&!ni&&(De<hn&&me(hn),P.scroll.rec=0),P.revert(!1,!0),fe=Wt(),un&&(Z=-1,un.restart(!0)),Vt=0,r&&z&&(r._initted||zo)&&r.progress()!==zo&&r.progress(zo||0,!0).render(r.time(),!0,!0),(Lt||ue!==P.progress||S||w||r&&!r._initted)&&(r&&!z&&(r._initted||ue||r.vars.immediateRender!==!1)&&r.totalProgress(S&&ge<-.001&&!ue?G.utils.normalize(ge,Ke,0):ue,!0),P.progress=Lt||(De-ge)/Ye===ue?0:ue),g&&y&&(vt._pinOffset=Math.round(P.progress*Zn)),ce&&ce.invalidate(),isNaN(yl)||(yl-=G.getProperty(F,E.p),Pd-=G.getProperty(Si,E.p),hu(F,E,yl),hu(ci,E,yl-(te||0)),hu(Si,E,Pd),hu(ji,E,Pd-(te||0))),Lt&&!ni&&P.update(),u&&!ni&&!Cr&&(Cr=!0,u(P),Cr=!1)}},P.getVelocity=function(){return(me()-ze)/(Wt()-Kl)*1e3||0},P.endAnimation=function(){Ll(P.callbackAnimation),r&&(ce?ce.progress(1):r.paused()?z||Ll(r,P.direction<0,1):Ll(r,r.reversed()))},P.labelToScroll=function(H){return r&&r.labels&&(ge||P.refresh()||ge)+r.labels[H]/r.duration()*Ye||0},P.getTrailing=function(H){var ee=oe.indexOf(P),X=P.direction>0?oe.slice(0,ee).reverse():oe.slice(ee+1);return(Pi(H)?X.filter(function(te){return te.vars.preventOverlaps===H}):X).filter(function(te){return P.direction>0?te.end<=ge:te.start>=Ke})},P.update=function(H,ee,X){if(!(S&&!X&&!H)){var te=ni===!0?hn:P.scroll(),yt=H?0:(te-ge)/Ye,he=yt<0?0:yt>1?1:yt||0,et=P.progress,Lt,Ge,Fe,_e,pn,Oe,Di,Pn;if(ee&&(ze=De,De=S?me():te,h&&(Ao=Er,Er=r&&!z?r.totalProgress():he)),D&&g&&!Vt&&!ou&&on&&(!he&&ge<te+(te-ze)/(Wt()-Kl)*D?he=1e-4:he===1&&Ke>te+(te-ze)/(Wt()-Kl)*D&&(he=.9999)),he!==et&&P.enabled){if(Lt=P.isActive=!!he&&he<1,Ge=!!et&&et<1,Oe=Lt!==Ge,pn=Oe||!!he!=!!et,P.direction=he>et?1:-1,P.progress=he,pn&&!Vt&&(Fe=he&&!et?0:he===1?1:et===1?2:3,z&&(_e=!Oe&&$[Fe+1]!=="none"&&$[Fe+1]||$[Fe],Pn=r&&(_e==="complete"||_e==="reset"||_e in r))),C&&(Oe||Pn)&&(Pn||p||!r)&&(Yt(C)?C(P):P.getTrailing(C).forEach(function(Fo){return Fo.endAnimation()})),z||(ce&&!Vt&&!ou?(ce._dp._time-ce._start!==ce._time&&ce.render(ce._dp._time-ce._start),ce.resetTo?ce.resetTo("totalProgress",he,r._tTime/r._tDur):(ce.vars.totalProgress=he,ce.invalidate().restart())):r&&r.totalProgress(he,!!(Vt&&(fe||H)))),g){if(H&&y&&(vt.style[y+E.os2]=xl),!W)cn(ec(Wi+Zn*he));else if(pn){if(Di=!H&&he>et&&Ke+1>te&&te+1>=Bn(A,E),x)if(!H&&(Lt||Di)){var Tt=dr(g,!0),Et=te-ge;Y2(g,ke,Tt.top+(E===xt?Et:0)+ft,Tt.left+(E===xt?0:Et)+ft)}else Y2(g,vt);Oa(Lt||Di?Pr:Io),qn&&he<1&&Lt||cn(Wi+(he===1&&!Di?Zn:0))}}h&&!Ne.tween&&!Vt&&!ou&&un.restart(!0),l&&(Oe||v&&he&&(he<1||!h0))&&dd(l.targets).forEach(function(Fo){return Fo.classList[Lt||v?"add":"remove"](l.className)}),s&&!z&&!H&&s(P),pn&&!Vt?(z&&(Pn&&(_e==="complete"?r.pause().totalProgress(1):_e==="reset"?r.restart(!0).pause():_e==="restart"?r.restart(!0):r[_e]()),s&&s(P)),(Oe||!h0)&&(d&&Oe&&f0(P,d),V[Fe]&&f0(P,V[Fe]),v&&(he===1?P.kill(!1,1):V[Fe]=0),Oe||(Fe=he===1?1:3,V[Fe]&&f0(P,V[Fe]))),_&&!Lt&&Math.abs(P.getVelocity())>(tc(_)?_:2500)&&(Ll(P.callbackAnimation),ce?ce.progress(1):Ll(r,_e==="reverse"?1:!he,1))):z&&s&&!Vt&&s(P)}if($s){var Nt=S?te/S.duration()*(S._caScrollDist||0):te;_d(Nt+(F._isFlipped?1:0)),$s(Nt)}Vs&&Vs(-te/S.duration()*(S._caScrollDist||0))}},P.enable=function(H,ee){P.enabled||(P.enabled=!0,kt(A,"resize",ic),O||kt(A,"scroll",Xs),R&&kt(t,"refreshInit",R),H!==!1&&(P.progress=ue=0,De=ze=Z=me()),ee!==!1&&P.refresh())},P.getTween=function(H){return H&&Ne?Ne.tween:ce},P.setPositions=function(H,ee,X,te){if(S){var yt=S.scrollTrigger,he=S.duration(),et=yt.end-yt.start;H=yt.start+et*H/he,ee=yt.start+et*ee/he}P.refresh(!1,!1,{start:L2(H,X&&!!P._startClamp),end:L2(ee,X&&!!P._endClamp)},te),P.update()},P.adjustPinSpacing=function(H){if(ot&&H){var ee=ot.indexOf(E.d)+1;ot[ee]=parseFloat(ot[ee])+H+ft,ot[1]=parseFloat(ot[1])+H+ft,Oa(ot)}},P.disable=function(H,ee){if(P.enabled&&(H!==!1&&P.revert(!0,!0),P.enabled=P.isActive=!1,ee||ce&&ce.pause(),hn=0,Se&&(Se.uncache=1),R&&bt(t,"refreshInit",R),un&&(un.pause(),Ne.tween&&Ne.tween.kill()&&(Ne.tween=0)),!O)){for(var X=oe.length;X--;)if(oe[X].scroller===A&&oe[X]!==P)return;bt(A,"resize",ic),O||bt(A,"scroll",Xs)}},P.kill=function(H,ee){P.disable(H,ee),ce&&!ee&&ce.kill(),c&&delete Kg[c];var X=oe.indexOf(P);X>=0&&oe.splice(X,1),X===ii&&mh>0&&ii--,X=0,oe.forEach(function(te){return te.scroller===P.scroller&&(X=1)}),X||ni||(P.scroll.rec=0),r&&(r.scrollTrigger=null,H&&r.revert({kill:!1}),ee||r.kill()),ci&&[ci,ji,F,Si].forEach(function(te){return te.parentNode&&te.parentNode.removeChild(te)}),Mc===P&&(Mc=0),g&&(Se&&(Se.uncache=1),X=0,oe.forEach(function(te){return te.pin===g&&X++}),X||(Se.spacer=0)),n.onKill&&n.onKill(P)},oe.push(P),P.enable(!1,!1),Qn&&Qn(P),r&&r.add&&!Ye){var we=P.update;P.update=function(){P.update=we,ae.cache++,ge||Ke||P.refresh()},G.delayedCall(.01,P.update),Ye=.01,ge=Ke=0}else P.refresh();g&&Fz()},t.register=function(n){return na||(G=n||X3(),G3()&&window.document&&t.enable(),na=Jl),na},t.defaults=function(n){if(n)for(var r in n)cu[r]=n[r];return cu},t.disable=function(n,r){Jl=0,oe.forEach(function(s){return s[r?"kill":"disable"](n)}),bt(se,"wheel",Xs),bt(Te,"scroll",Xs),clearInterval(ru),bt(Te,"touchcancel",Fn),bt(ke,"touchstart",Fn),au(bt,Te,"pointerdown,touchstart,mousedown",N2),au(bt,Te,"pointerup,touchend,mouseup",O2),fp.kill(),su(bt);for(var o=0;o<ae.length;o+=3)lu(bt,ae[o],ae[o+1]),lu(bt,ae[o],ae[o+2])},t.enable=function(){if(se=window,Te=document,Ei=Te.documentElement,ke=Te.body,G&&(dd=G.utils.toArray,Pc=G.utils.clamp,qg=G.core.context||Fn,u0=G.core.suppressOverwrites||Fn,nw=se.history.scrollRestoration||"auto",Jg=se.pageYOffset||0,G.core.globals("ScrollTrigger",t),ke)){Jl=1,Na=document.createElement("div"),Na.style.height="100vh",Na.style.position="absolute",n4(),Pz(),nt.register(G),t.isTouch=nt.isTouch,Or=nt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Zg=nt.isTouch===1,kt(se,"wheel",Xs),iw=[se,Te,Ei,ke],G.matchMedia?(t.matchMedia=function(d){var u=G.matchMedia(),p;for(p in d)u.add(p,d[p]);return u},G.addEventListener("matchMediaInit",function(){return cw()}),G.addEventListener("matchMediaRevert",function(){return t4()}),G.addEventListener("matchMedia",function(){ss(0,1),Ts("matchMedia")}),G.matchMedia().add("(orientation: portrait)",function(){return m0(),m0})):console.warn("Requires GSAP 3.11.0 or later"),m0(),kt(Te,"scroll",Xs);var n=ke.hasAttribute("style"),r=ke.style,o=r.borderTopStyle,s=G.core.Animation.prototype,l,c;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",l=dr(ke),xt.m=Math.round(l.top+xt.sc())||0,oi.m=Math.round(l.left+oi.sc())||0,o?r.borderTopStyle=o:r.removeProperty("border-top-style"),n||(ke.setAttribute("style",""),ke.removeAttribute("style")),ru=setInterval(V2,250),G.delayedCall(.5,function(){return ou=0}),kt(Te,"touchcancel",Fn),kt(ke,"touchstart",Fn),au(kt,Te,"pointerdown,touchstart,mousedown",N2),au(kt,Te,"pointerup,touchend,mouseup",O2),Xg=G.utils.checkPrefix("transform"),gh.push(Xg),na=Wt(),fp=G.delayedCall(.2,ss).pause(),ra=[Te,"visibilitychange",function(){var d=se.innerWidth,u=se.innerHeight;Te.hidden?(z2=d,F2=u):(z2!==d||F2!==u)&&ic()},Te,"DOMContentLoaded",ss,se,"load",ss,se,"resize",ic],su(kt),oe.forEach(function(d){return d.enable(0,1)}),c=0;c<ae.length;c+=3)lu(bt,ae[c],ae[c+1]),lu(bt,ae[c],ae[c+2])}},t.config=function(n){"limitCallbacks"in n&&(h0=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(ru)||(ru=r)&&setInterval(V2,r),"ignoreMobileResize"in n&&(Zg=t.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(su(bt)||su(kt,n.autoRefreshEvents||"none"),U3=(n.autoRefreshEvents+"").indexOf("resize")===-1)},t.scrollerProxy=function(n,r){var o=ui(n),s=ae.indexOf(o),l=Cs(o);~s&&ae.splice(s,l?6:2),r&&(l?Hn.unshift(se,r,ke,r,Ei,r):Hn.unshift(o,r))},t.clearMatchMedia=function(n){oe.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},t.isInViewport=function(n,r,o){var s=(Pi(n)?ui(n):n).getBoundingClientRect(),l=s[o?gs:xs]*r||0;return o?s.right-l>0&&s.left+l<se.innerWidth:s.bottom-l>0&&s.top+l<se.innerHeight},t.positionInViewport=function(n,r,o){Pi(n)&&(n=ui(n));var s=n.getBoundingClientRect(),l=s[o?gs:xs],c=r==null?l/2:r in xp?xp[r]*l:~r.indexOf("%")?parseFloat(r)*l/100:parseFloat(r)||0;return o?(s.left+c)/se.innerWidth:(s.top+c)/se.innerHeight},t.killAll=function(n){if(oe.slice(0).forEach(function(o){return o.vars.id!=="ScrollSmoother"&&o.kill()}),n!==!0){var r=Ps.killAll||[];Ps={},r.forEach(function(o){return o()})}},t}();le.version="3.13.0";le.saveStyles=function(t){return t?dd(t).forEach(function(e){if(e&&e.style){var i=_i.indexOf(e);i>=0&&_i.splice(i,5),_i.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),G.core.getCache(e),qg())}}):_i};le.revert=function(t,e){return cw(!t,e)};le.create=function(t,e){return new le(t,e)};le.refresh=function(t){return t?ic(!0):(na||le.register())&&ss(!0)};le.update=function(t){return++ae.cache&&wr(t===!0?2:0)};le.clearScrollMemory=i4;le.maxScroll=function(t,e){return Bn(t,e?oi:xt)};le.getScrollFunc=function(t,e){return jo(ui(t),e?oi:xt)};le.getById=function(t){return Kg[t]};le.getAll=function(){return oe.filter(function(t){return t.vars.id!=="ScrollSmoother"})};le.isScrolling=function(){return!!on};le.snapDirectional=lw;le.addEventListener=function(t,e){var i=Ps[t]||(Ps[t]=[]);~i.indexOf(e)||i.push(e)};le.removeEventListener=function(t,e){var i=Ps[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)};le.batch=function(t,e){var i=[],n={},r=e.interval||.016,o=e.batchMax||1e9,s=function(d,u){var p=[],f=[],g=G.delayedCall(r,function(){u(p,f),p=[],f=[]}).pause();return function(y){p.length||g.restart(!0),p.push(y.trigger),f.push(y),o<=p.length&&g.progress(1)}},l;for(l in e)n[l]=l.substr(0,2)==="on"&&Yt(e[l])&&l!=="onRefreshInit"?s(l,e[l]):e[l];return Yt(o)&&(o=o(),kt(le,"refresh",function(){return o=e.batchMax()})),dd(t).forEach(function(c){var d={};for(l in n)d[l]=n[l];d.trigger=c,i.push(le.create(d))}),i};var X2=function(e,i,n,r){return i>r?e(r):i<0&&e(0),n>r?(r-i)/(n-i):n<0?i/(i-n):1},x0=function t(e,i){i===!0?e.style.removeProperty("touch-action"):e.style.touchAction=i===!0?"auto":i?"pan-"+i+(nt.isTouch?" pinch-zoom":""):"none",e===Ei&&t(ke,i)},pu={auto:1,scroll:1},$z=function(e){var i=e.event,n=e.target,r=e.axis,o=(i.changedTouches?i.changedTouches[0]:i).target,s=o._gsap||G.core.getCache(o),l=Wt(),c;if(!s._isScrollT||l-s._isScrollT>2e3){for(;o&&o!==ke&&(o.scrollHeight<=o.clientHeight&&o.scrollWidth<=o.clientWidth||!(pu[(c=Ki(o)).overflowY]||pu[c.overflowX]));)o=o.parentNode;s._isScroll=o&&o!==n&&!Cs(o)&&(pu[(c=Ki(o)).overflowY]||pu[c.overflowX]),s._isScrollT=l}(s._isScroll||r==="x")&&(i.stopPropagation(),i._gsapAllow=!0)},o4=function(e,i,n,r){return nt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:i,onWheel:r=r&&$z,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&kt(Te,nt.eventTypes[0],q2,!1,!0)},onDisable:function(){return bt(Te,nt.eventTypes[0],q2,!0)}})},Bz=/(input|label|select|textarea)/i,Z2,q2=function(e){var i=Bz.test(e.target.tagName);(i||Z2)&&(e._gsapAllow=!0,Z2=i)},Vz=function(e){Qo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var i=e,n=i.normalizeScrollX,r=i.momentum,o=i.allowNestedScroll,s=i.onRelease,l,c,d=ui(e.target)||Ei,u=G.core.globals().ScrollSmoother,p=u&&u.get(),f=Or&&(e.content&&ui(e.content)||p&&e.content!==!1&&!p.smooth()&&p.content()),g=jo(d,xt),y=jo(d,oi),w=1,D=(nt.isTouch&&se.visualViewport?se.visualViewport.scale*se.visualViewport.width:se.outerWidth)/se.innerWidth,j=0,b=Yt(r)?function(){return r(l)}:function(){return r||2.8},v,h,x=o4(d,e.type,!0,o),k=function(){return h=!1},S=Fn,_=Fn,C=function(){c=Bn(d,xt),_=Pc(Or?1:0,c),n&&(S=Pc(0,Bn(d,oi))),v=ws},E=function(){f._gsap.y=ec(parseFloat(f._gsap.y)+g.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",g.offset=g.cacheID=0},z=function(){if(h){requestAnimationFrame(k);var I=ec(l.deltaY/2),M=_(g.v-I);if(f&&M!==g.v+g.offset){g.offset=M-g.v;var P=ec((parseFloat(f&&f._gsap.y)||0)-g.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",g.cacheID=ae.cache,wr()}return!0}g.offset&&E(),h=!0},A,N,O,W,V=function(){C(),A.isActive()&&A.vars.scrollY>c&&(g()>c?A.progress(1)&&g(c):A.resetTo("scrollY",c))};return f&&G.set(f,{y:"+=0"}),e.ignoreCheck=function($){return Or&&$.type==="touchmove"&&z()||w>1.05&&$.type!=="touchstart"||l.isGesturing||$.touches&&$.touches.length>1},e.onPress=function(){h=!1;var $=w;w=ec((se.visualViewport&&se.visualViewport.scale||1)/D),A.pause(),$!==w&&x0(d,w>1.01?!0:n?!1:"x"),N=y(),O=g(),C(),v=ws},e.onRelease=e.onGestureStart=function($,I){if(g.offset&&E(),!I)W.restart(!0);else{ae.cache++;var M=b(),P,R;n&&(P=y(),R=P+M*.05*-$.velocityX/.227,M*=X2(y,P,R,Bn(d,oi)),A.vars.scrollX=S(R)),P=g(),R=P+M*.05*-$.velocityY/.227,M*=X2(g,P,R,Bn(d,xt)),A.vars.scrollY=_(R),A.invalidate().duration(M).play(.01),(Or&&A.vars.scrollY>=c||P>=c-1)&&G.to({},{onUpdate:V,duration:M})}s&&s($)},e.onWheel=function(){A._ts&&A.pause(),Wt()-j>1e3&&(v=0,j=Wt())},e.onChange=function($,I,M,P,R){if(ws!==v&&C(),I&&n&&y(S(P[2]===I?N+($.startX-$.x):y()+I-P[1])),M){g.offset&&E();var U=R[2]===M,ne=U?O+$.startY-$.y:g()+M-R[1],Z=_(ne);U&&ne!==Z&&(O+=Z-ne),g(Z)}(M||I)&&wr()},e.onEnable=function(){x0(d,n?!1:"x"),le.addEventListener("refresh",V),kt(se,"resize",V),g.smooth&&(g.target.style.scrollBehavior="auto",g.smooth=y.smooth=!1),x.enable()},e.onDisable=function(){x0(d,!0),bt(se,"resize",V),le.removeEventListener("refresh",V),x.kill()},e.lockAxis=e.lockAxis!==!1,l=new nt(e),l.iOS=Or,Or&&!g()&&g(1),Or&&G.ticker.add(Fn),W=l._dc,A=G.to(l,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:r4(g,g(),function(){return A.pause()})},onUpdate:wr,onComplete:W.vars.onComplete}),l};le.sort=function(t){if(Yt(t))return oe.sort(t);var e=se.pageYOffset||0;return le.getAll().forEach(function(i){return i._sortY=i.trigger?e+i.trigger.getBoundingClientRect().top:i.start+se.innerHeight}),oe.sort(t||function(i,n){return(i.vars.refreshPriority||0)*-1e6+(i.vars.containerAnimation?1e6:i._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};le.observe=function(t){return new nt(t)};le.normalizeScroll=function(t){if(typeof t>"u")return ei;if(t===!0&&ei)return ei.enable();if(t===!1){ei&&ei.kill(),ei=t;return}var e=t instanceof nt?t:Vz(t);return ei&&ei.target===e.target&&ei.kill(),Cs(e.target)&&(ei=e),e};le.core={_getVelocityProp:Gg,_inputObserver:o4,_scrollers:ae,_proxies:Hn,bridge:{ss:function(){on||Ts("scrollStart"),on=Wt()},ref:function(){return Vt}}};X3()&&G.registerPlugin(le);/*!
 * SplitText 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */let Nl,Zs,tx,Wz=()=>tx||Dd.register(window.gsap),Q2=typeof Intl<"u"?new Intl.Segmenter:0,wp=t=>typeof t=="string"?wp(document.querySelectorAll(t)):"length"in t?Array.from(t):[t],K2=t=>wp(t).filter(e=>e instanceof HTMLElement),ix=[],w0=function(){},Uz=/\s+/g,J2=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),eb={left:0,top:0,width:0,height:0},tb=(t,e)=>{if(e){let i=new Set(t.join("").match(e)||ix),n=t.length,r,o,s,l;if(i.size)for(;--n>-1;){o=t[n];for(s of i)if(s.startsWith(o)&&s.length>o.length){for(r=0,l=o;s.startsWith(l+=t[n+ ++r])&&l.length<s.length;);if(r&&l.length===s.length){t[n]=s,t.splice(n+1,r);break}}}}return t},ib=t=>window.getComputedStyle(t).display==="inline"&&(t.style.display="inline-block"),qs=(t,e,i)=>e.insertBefore(typeof t=="string"?document.createTextNode(t):t,i),nx=(t,e,i)=>{let n=e[t+"sClass"]||"",{tag:r="div",aria:o="auto",propIndex:s=!1}=e,l=t==="line"?"block":"inline-block",c=n.indexOf("++")>-1,d=u=>{let p=document.createElement(r),f=i.length+1;return n&&(p.className=n+(c?" "+n+f:"")),s&&p.style.setProperty("--"+t,f+""),o!=="none"&&p.setAttribute("aria-hidden","true"),r!=="span"&&(p.style.position="relative",p.style.display=l),p.textContent=u,i.push(p),p};return c&&(n=n.replace("++","")),d.collection=i,d},Hz=(t,e,i,n)=>{let r=nx("line",i,n),o=window.getComputedStyle(t).textAlign||"left";return(s,l)=>{let c=r("");for(c.style.textAlign=o,t.insertBefore(c,e[s]);s<l;s++)c.appendChild(e[s]);c.normalize()}},s4=(t,e,i,n,r,o,s,l,c,d)=>{var u;let p=Array.from(t.childNodes),f=0,{wordDelimiter:g,reduceWhiteSpace:y=!0,prepareText:w}=e,D=t.getBoundingClientRect(),j=D,b=!y&&window.getComputedStyle(t).whiteSpace.substring(0,3)==="pre",v=0,h=i.collection,x,k,S,_,C,E,z,A,N,O,W,V,$,I,M,P,R,U;for(typeof g=="object"?(S=g.delimiter||g,k=g.replaceWith||""):k=g===""?"":g||" ",x=k!==" ";f<p.length;f++)if(_=p[f],_.nodeType===3){for(M=_.textContent||"",y?M=M.replace(Uz," "):b&&(M=M.replace(/\n/g,k+`
`)),w&&(M=w(M,t)),_.textContent=M,C=k||S?M.split(S||k):M.match(l)||ix,R=C[C.length-1],A=x?R.slice(-1)===" ":!R,R||C.pop(),j=D,z=x?C[0].charAt(0)===" ":!C[0],z&&qs(" ",t,_),C[0]||C.shift(),tb(C,c),o&&d||(_.textContent=""),N=1;N<=C.length;N++)if(P=C[N-1],!y&&b&&P.charAt(0)===`
`&&((u=_.previousSibling)==null||u.remove(),qs(document.createElement("br"),t,_),P=P.slice(1)),!y&&P==="")qs(k,t,_);else if(P===" ")t.insertBefore(document.createTextNode(" "),_);else{if(x&&P.charAt(0)===" "&&qs(" ",t,_),v&&N===1&&!z&&h.indexOf(v.parentNode)>-1?(E=h[h.length-1],E.appendChild(document.createTextNode(n?"":P))):(E=i(n?"":P),qs(E,t,_),v&&N===1&&!z&&E.insertBefore(v,E.firstChild)),n)for(W=Q2?tb([...Q2.segment(P)].map(ne=>ne.segment),c):P.match(l)||ix,U=0;U<W.length;U++)E.appendChild(W[U]===" "?document.createTextNode(" "):n(W[U]));if(o&&d){if(M=_.textContent=M.substring(P.length+1,M.length),O=E.getBoundingClientRect(),O.top>j.top&&O.left<=j.left){for(V=t.cloneNode(),$=t.childNodes[0];$&&$!==E;)I=$,$=$.nextSibling,V.appendChild(I);t.parentNode.insertBefore(V,t),r&&ib(V)}j=O}(N<C.length||A)&&qs(N>=C.length?" ":x&&P.slice(-1)===" "?" "+k:k,t,_)}t.removeChild(_),v=0}else _.nodeType===1&&(s&&s.indexOf(_)>-1?(h.indexOf(_.previousSibling)>-1&&h[h.length-1].appendChild(_),v=_):(s4(_,e,i,n,r,o,s,l,c,!0),v=0),r&&ib(_))};const a4=class l4{constructor(e,i){this.isSplit=!1,Wz(),this.elements=K2(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=i,this._split=()=>this.isSplit&&this.split(this.vars);let n=[],r,o=()=>{let s=n.length,l;for(;s--;){l=n[s];let c=l.element.offsetWidth;if(c!==l.width){l.width=c,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(r),r=setTimeout(o,200)})},w0(this),this.split(i)}split(e){this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:i="chars,words,lines",aria:n="auto",deepSlice:r=!0,smartWrap:o,onSplit:s,autoSplit:l=!1,specialChars:c,mask:d}=this.vars,u=i.indexOf("lines")>-1,p=i.indexOf("chars")>-1,f=i.indexOf("words")>-1,g=p&&!f&&!u,y=c&&("push"in c?new RegExp("(?:"+c.join("|")+")","gu"):c),w=y?new RegExp(y.source+"|"+J2.source,"gu"):J2,D=!!e.ignore&&K2(e.ignore),{orig:j,animTime:b,obs:v}=this._data,h;return(p||f||u)&&(this.elements.forEach((x,k)=>{j[k]={element:x,html:x.innerHTML,ariaL:x.getAttribute("aria-label"),ariaH:x.getAttribute("aria-hidden")},n==="auto"?x.setAttribute("aria-label",(x.textContent||"").trim()):n==="hidden"&&x.setAttribute("aria-hidden","true");let S=[],_=[],C=[],E=p?nx("char",e,S):null,z=nx("word",e,_),A,N,O,W;if(s4(x,e,z,E,g,r&&(u||g),D,w,y,!1),u){let V=wp(x.childNodes),$=Hz(x,V,e,C),I,M=[],P=0,R=V.map(ne=>ne.nodeType===1?ne.getBoundingClientRect():eb),U=eb;for(A=0;A<V.length;A++)I=V[A],I.nodeType===1&&(I.nodeName==="BR"?(M.push(I),$(P,A+1),P=A+1,U=R[P]):(A&&R[A].top>U.top&&R[A].left<=U.left&&($(P,A),P=A),U=R[A]));P<A&&$(P,A),M.forEach(ne=>{var Z;return(Z=ne.parentNode)==null?void 0:Z.removeChild(ne)})}if(!f){for(A=0;A<_.length;A++)if(N=_[A],p||!N.nextSibling||N.nextSibling.nodeType!==3)if(o&&!u){for(O=document.createElement("span"),O.style.whiteSpace="nowrap";N.firstChild;)O.appendChild(N.firstChild);N.replaceWith(O)}else N.replaceWith(...N.childNodes);else W=N.nextSibling,W&&W.nodeType===3&&(W.textContent=(N.textContent||"")+(W.textContent||""),N.remove());_.length=0,x.normalize()}this.lines.push(...C),this.words.push(..._),this.chars.push(...S)}),d&&this[d]&&this.masks.push(...this[d].map(x=>{let k=x.cloneNode();return x.replaceWith(k),k.appendChild(x),x.className&&(k.className=x.className.replace(/(\b\w+\b)/g,"$1-mask")),k.style.overflow="clip",k}))),this.isSplit=!0,Zs&&(l?Zs.addEventListener("loadingdone",this._split):Zs.status==="loading"&&console.warn("SplitText called before fonts loaded")),(h=s&&s(this))&&h.totalTime&&(this._data.anim=b?h.totalTime(b):h),u&&l&&this.elements.forEach((x,k)=>{j[k].width=x.offsetWidth,v&&v.observe(x)}),this}revert(){var e,i;let{orig:n,anim:r,obs:o}=this._data;return o&&o.disconnect(),n.forEach(({element:s,html:l,ariaL:c,ariaH:d})=>{s.innerHTML=l,c?s.setAttribute("aria-label",c):s.removeAttribute("aria-label"),d?s.setAttribute("aria-hidden",d):s.removeAttribute("aria-hidden")}),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,Zs==null||Zs.removeEventListener("loadingdone",this._split),r&&(this._data.animTime=r.totalTime(),r.revert()),(i=(e=this.vars).onRevert)==null||i.call(e,this),this}static create(e,i){return new l4(e,i)}static register(e){Nl=Nl||e||window.gsap,Nl&&(wp=Nl.utils.toArray,w0=Nl.core.context||w0),!tx&&window.innerWidth>0&&(Zs=document.fonts,tx=!0)}};a4.version="3.13.0";let Dd=a4;J.registerPlugin(le,Dd);const Yz=({text:t="",className:e="",delay:i=100,duration:n=.6,ease:r="power3.out",splitType:o="chars",from:s={opacity:0,y:40},to:l={opacity:1,y:0},threshold:c=.1,rootMargin:d="-100px",textAlign:u="center",onLetterAnimationComplete:p})=>{const f=T.useRef(null),g=T.useRef(!1);return T.useEffect(()=>{const y=f.current;!y||g.current||document.fonts.ready.then(()=>{const w=o==="lines";w&&(y.style.position="relative");const D=new Dd(y,{type:o,absolute:w,linesClass:"split-line"});let j=[];switch(o){case"lines":j=D.lines;break;case"words":j=D.words;break;case"words, chars":j=[...D.words,...D.chars];break;default:j=D.chars}j.forEach(_=>{_.style.willChange="transform, opacity"});const b=(1-c)*100,v=/^(-?\d+)px$/.exec(d),h=v?parseInt(v[1],10):0,x=h<0?`-=${Math.abs(h)}px`:`+=${h}px`,k=`top ${b}%${x}`,S=J.timeline({scrollTrigger:{trigger:y,start:k,toggleActions:"play none none none",once:!0},smoothChildTiming:!0,onComplete:()=>{g.current=!0,J.set(j,{...l,clearProps:"willChange",immediateRender:!0}),p==null||p()}});return S.set(j,{...s,immediateRender:!1,force3D:!0}),S.to(j,{...l,duration:n,ease:r,stagger:i/1e3,force3D:!0}),()=>{S.kill(),le.getAll().forEach(_=>_.kill()),J.killTweensOf(j),D.revert()}})},[t,i,n,r,o,s,l,c,d,p]),a.jsx("p",{ref:f,className:`split-parent ${e}`,style:{textAlign:u,overflow:"hidden",display:"inline-block",whiteSpace:"normal",wordWrap:"break-word"},children:t})},Gz=m.div`
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
`,v0=m.button`
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
`,Xz=m.h2`
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
`,Zz=({onSelect:t,selected:e})=>{const i=document.querySelector("main");return i&&i.scrollTo({top:0,behavior:"smooth"}),a.jsxs("div",{children:[a.jsx(Xz,{children:"Recent Works"}),a.jsxs(Gz,{children:[a.jsx(v0,{$selected:e==="branding",onClick:()=>t("branding"),children:"Branding"}),a.jsx(v0,{$selected:e==="uxui",onClick:()=>t("uxui"),children:"UX-UI"}),a.jsx(v0,{$selected:e==="funproj",onClick:()=>t("funproj"),children:"School Proj"})]})]})},c4="/Nooshin-Shahsavan-portfolio/assets/foodhome.8a385cf5.png",d4="/Nooshin-Shahsavan-portfolio/assets/workhome.04db0779.png",qz=[{type:"image",src:c4,label:"UX-UI",link:"/work/savefood",details:[{label:"Project:",value:"SaveFood App"},{label:"Description:",value:"SaveFood App a mobile app that helps users track food expiration dates, find recipes for their ingredients... "},{label:"Timeline",value:"Coming soon!"},{label:"Year",value:"2025"}]},{type:"image",src:d4,label:"UX-UI",link:"/work/workday",details:[{label:"Project :",value:"Workday App"},{label:"Description:",value:"Workday is a self - service portal , and Workday mobile app , designed to make it easy for employees to ac..."},{label:"Timeline",value:"4 weeks"},{label:"Year",value:"2024"}]}],Qz=`
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
`,Kz=({setSelectedProject:t})=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},i={hidden:{opacity:0,y:50,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:Qz}),a.jsx(L.div,{className:"recent-works-grid",variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:qz.map((n,r)=>a.jsx(L.div,{variants:i,children:a.jsx(os,{tiltMaxAngleX:20,tiltMaxAngleY:20,scale:1.08,glareEnable:!0,glareMaxOpacity:.4,glareColor:"#ffffff",glarePosition:"all",glareBorderRadius:"8px",children:a.jsxs(yn,{to:n.link,className:"work-item",tabIndex:0,children:[a.jsx("div",{className:"work-label",children:n.label}),a.jsx("div",{className:"work-media-container",children:n.type==="image"?a.jsx("img",{src:n.src,alt:n.label,className:"work-media"}):a.jsx("video",{src:n.src,className:"work-media",controls:!1,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),a.jsxs("div",{className:"work-info-box",children:[a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Project:"})," ",n.details[0].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Timeline:"})," ",n.details[2].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Year:"})," ",n.details[3].value]})]})]})})},r))})]})},vp="/Nooshin-Shahsavan-portfolio/assets/funhome.36e209bb.jpg",Jz=[{type:"image",src:vp,label:"Fun Projects",details:[{label:"Project :",value:"Fun Projects"},{label:"Timeline",value:"No Idea"},{label:"Year",value:"..."}]}],eF=`
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
`,tF=({setSelectedProject:t=()=>{}})=>{const e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.1}}},i={hidden:{opacity:0,y:50,scale:.9},visible:{opacity:1,y:0,scale:1,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:eF}),a.jsx(L.div,{className:"recent-works-grid",variants:e,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:Jz.map((n,r)=>a.jsx(L.div,{variants:i,children:a.jsx(os,{tiltMaxAngleX:20,tiltMaxAngleY:20,scale:1.08,glareEnable:!0,glareMaxOpacity:.4,glareColor:"#ffffff",glarePosition:"all",glareBorderRadius:"8px",children:a.jsxs(yn,{to:"/work/fun",className:"work-item",tabIndex:0,children:[a.jsx("div",{className:"work-label",children:n.label}),a.jsx("div",{className:"work-media-container",children:n.type==="image"?a.jsx("img",{src:n.src,alt:n.label,className:"work-media"}):a.jsx("video",{src:new URL("/Nooshin-Shahsavan-portfolio/assets/straw1.d023f398.MP4",self.location).href,className:"work-media",controls:!1,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),a.jsxs("div",{className:"work-info-box",children:[a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Project :"})," ",n.details[0].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Timeline:"})," ",n.details[1].value]}),a.jsxs("div",{className:"work-info-line",children:[a.jsx("b",{children:"Year:"})," ",n.details[2].value]})]})]})})},r))})]})},iF=m.footer`
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
`,nF=m.a`
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
`,rF=m.footer`
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
`,u4=()=>a.jsx(rF,{children:a.jsx(oF,{children:"© 2025 NOOSHIN SHAHSAVN | Designed & developed by me using React 🤍"})}),Ls=()=>a.jsx(iF,{children:a.jsx(nF,{href:"mailto:nooshin-shahsavan.ca@gmail.com",children:"nooshin-shahsavan.ca@gmail.com"})});function fu(...t){return t.filter(Boolean).join(" ")}const sF=m(L.div)`
  display: inline-block;
  position: relative;
`,aF=m(L.span)`
  display: inline-block;
  white-space: nowrap;
`,dw=T.forwardRef(({texts:t,transition:e={type:"spring",damping:25,stiffness:300},initial:i={y:"100%",opacity:0},animate:n={y:0,opacity:1},exit:r={y:"-120%",opacity:0},animatePresenceMode:o="wait",animatePresenceInitial:s=!1,rotationInterval:l=2e3,staggerDuration:c=0,staggerFrom:d="first",loop:u=!0,auto:p=!0,splitBy:f="characters",onTextChange:g,mainClassName:y,splitLevelClassName:w,elementLevelClassName:D,...j},b)=>{const[v,h]=T.useState(0),[x,k]=T.useState(!1),S=I=>{if(typeof Intl<"u"&&Intl.Segmenter){const M=new Intl.Segmenter("en",{granularity:"grapheme"});return Array.from(M.segment(I),P=>P.segment)}return Array.from(I)},_=T.useMemo(()=>{const I=t[v];if(f==="characters"){const M=I.split(" ");return M.map((P,R)=>({characters:S(P),needsSpace:R!==M.length-1}))}return f==="words"?I.split(" ").map((M,P,R)=>({characters:[M],needsSpace:P!==R.length-1})):f==="lines"?I.split(`
`).map((M,P,R)=>({characters:[M],needsSpace:P!==R.length-1})):I.split(f).map((M,P,R)=>({characters:[M],needsSpace:P!==R.length-1}))},[t,v,f]),C=T.useCallback((I,M)=>{const P=M;if(d==="first")return I*c;if(d==="last")return(P-1-I)*c;if(d==="center"){const R=Math.floor(P/2);return Math.abs(R-I)*c}if(d==="random"){const R=Math.floor(Math.random()*P);return Math.abs(R-I)*c}return Math.abs(d-I)*c},[d,c]),E=T.useCallback(I=>{h(I),g&&g(t[I])},[g,t]),z=T.useCallback(()=>{const I=v===t.length-1?u?0:v:v+1;I!==v&&E(I)},[v,t.length,u,E]),A=T.useCallback(()=>{const I=v===0?u?t.length-1:v:v-1;I!==v&&E(I)},[v,t.length,u,E]),N=T.useCallback(I=>{const M=Math.max(0,Math.min(I,t.length-1));M!==v&&E(M)},[t.length,v,E]),O=T.useCallback(()=>{v!==0&&E(0)},[v,E]);T.useImperativeHandle(b,()=>({next:z,previous:A,jumpTo:N,reset:O}),[z,A,N,O]),T.useEffect(()=>{if(!p)return;const I=setInterval(z,l);return()=>clearInterval(I)},[z,l,p]);const W=()=>{k(!0)},V=()=>{k(!1)},$=()=>{switch(d){case"first":return 1;case"last":return-1;case"center":return 0;default:return 0}};return a.jsx(sF,{children:a.jsxs(aF,{className:fu("text-rotate",y),...j,layout:!0,transition:e,onAnimationStart:W,onAnimationComplete:V,children:[a.jsx("span",{className:"text-rotate-sr-only",children:t[v]}),a.jsx(eA,{mode:o,initial:s,children:a.jsx(L.div,{className:fu(f==="lines"?"text-rotate-lines":"text-rotate-word"),layout:!0,"aria-hidden":"true",transition:{duration:.5,ease:[.4,0,.2,1],staggerChildren:c,staggerDirection:$()},children:_.map((I,M,P)=>{const R=P.slice(0,M).reduce((U,ne)=>U+ne.characters.length,0);return a.jsxs("span",{className:fu("text-rotate-word",w),children:[I.characters.map((U,ne)=>a.jsx(L.span,{initial:i,animate:n,exit:r,transition:{...e,delay:C(R+ne,P.reduce((Z,fe)=>Z+fe.characters.length,0))},className:fu("text-rotate-element",D),children:U},ne)),I.needsSpace&&a.jsx("span",{className:"text-rotate-space",children:" "})]},M)})},v)})]})})});dw.displayName="RotatingText";const lF=m.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background: #191c24;
  position: relative;
`,cF=m.div`
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
`,dF=m.section`
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
`,hF=m(L.div)`
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
`;m(L.div)`
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
`,wF=m(dw)`
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
`,vF=m(L.div)`
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
`;const yF=m.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #191c24;
  position: relative;
  z-index: 5;
  padding: 4rem 0;
`,bF=()=>{T.useContext(Ja);const t=T.useRef(null),e=T.useRef(null),[i,n]=T.useState(!1),[r,o]=T.useState(!1),[s,l]=T.useState({x:0,y:0}),[c,d]=T.useState({x:0,y:0}),[u,p]=T.useState("branding"),f=T.useRef(null),g=["Graphic designer","Brand designer","UX/UI designer"],y=["NOOSHIN SHAHSAVAN!"],w=h=>{l({x:h.clientX,y:h.clientY})},D=h=>{r&&d({x:h.clientX,y:h.clientY})},j=h=>{f.current&&clearTimeout(f.current),o(!0),d({x:h.clientX,y:h.clientY})},b=()=>{f.current=window.setTimeout(()=>o(!1),100)},v=T.useCallback(()=>{if(t.current&&e.current){const h=e.current.getBoundingClientRect(),x=h.left+h.width/2+window.scrollX,k=h.top+h.height/2+window.scrollY;t.current.triggerShockwave(x,k)}},[]);return a.jsxs(lF,{children:[a.jsx(rt,{title:"Nooshin Shahsavan | Graphic Designer & UX/UI Designer Portfolio",description:"Professional portfolio of Nooshin Shahsavan, a talented graphic designer, brand designer, and UX/UI designer. Explore creative projects and innovative design solutions.",keywords:"graphic design, brand design, UX/UI design, portfolio, Nooshin Shahsavan, creative designer, visual design",image:"/src/assets/logoweb.png"}),a.jsx(cF,{children:a.jsx(F3,{})}),a.jsxs(dF,{onMouseMove:w,children:[a.jsx(oz,{ref:t,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:0},dotSize:5,gap:15,baseColor:"#ffffff",activeColor:"#4CAF50",proximity:120,shockRadius:250,shockStrength:5,resistance:750,returnDuration:1.5,maxSpeed:5e3,speedTrigger:100}),a.jsx(uF,{$isBlurred:i}),a.jsxs(hF,{children:[a.jsx(pF,{children:a.jsxs(mF,{children:[a.jsxs(gF,{onMouseEnter:j,onMouseLeave:b,onMouseMove:D,children:[a.jsx(xF,{children:"My name is"}),a.jsx(wF,{texts:y,onTextChange:v})]}),a.jsx(vF,{ref:e,children:a.jsx(dw,{texts:g,onTextChange:v,auto:!0,rotationInterval:3e3,staggerDuration:.1,staggerFrom:"center"})})]})}),a.jsx(fF,{})]})]}),a.jsx(Zz,{selected:u,onSelect:p}),a.jsx(Yz,{text:"Recent Projects"}),u==="branding"&&a.jsx(pz,{}),u==="uxui"&&a.jsx(Kz,{setSelectedProject:p}),u==="funproj"&&a.jsx(tF,{setSelectedProject:p}),a.jsx(yF,{children:a.jsx(Sz,{})}),a.jsx(u4,{})]})};/*!
 * strings: 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var kF=/(?:^\s+|\s+$)/g,jF=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function uw(t){var e=t.nodeType,i="";if(e===1||e===9||e===11){if(typeof t.textContent=="string")return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=uw(t)}else if(e===3||e===4)return t.nodeValue;return i}function Mn(t,e,i,n,r){if(t+="",i&&(t=t.trim?t.trim():t.replace(kF,"")),e&&e!=="")return t.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(e);for(var o=[],s=t.length,l=0,c,d;l<s;l++)d=t.charAt(l),(d.charCodeAt(0)>=55296&&d.charCodeAt(0)<=56319||t.charCodeAt(l+1)>=65024&&t.charCodeAt(l+1)<=65039)&&(c=((t.substr(l,12).split(jF)||[])[1]||"").length||2,d=t.substr(l,c),o.emoji=1,l+=c-1),o.push(r?d:d===">"?"&gt;":d==="<"?"&lt;":n&&d===" "&&(t.charAt(l-1)===" "||t.charAt(l+1)===" ")?"&nbsp;":d);return o}/*!
 * ScrambleTextPlugin 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wh=function(){function t(i){this.chars=Mn(i),this.sets=[],this.length=50;for(var n=0;n<20;n++)this.sets[n]=rb(80,this.chars)}var e=t.prototype;return e.grow=function(n){for(var r=0;r<20;r++)this.sets[r]+=rb(n-this.length,this.chars);this.length=n},t}(),as,h4,p4=function(){return as||typeof window<"u"&&(as=window.gsap)&&as.registerPlugin&&as},SF=1,nb=/\s+/g,rb=function(e,i){for(var n=i.length,r="";--e>-1;)r+=i[~~(Math.random()*n)];return r},rx="ABCDEFGHIJKLMNOPQRSTUVWXYZ",ob=rx.toLowerCase(),DF={upperCase:new wh(rx),lowerCase:new wh(ob),upperAndLowerCase:new wh(rx+ob)},sb=function(){h4=as=p4()},of={version:"3.13.0",name:"scrambleText",register:function(e,i,n){as=e,sb()},init:function(e,i,n,r,o){if(h4||sb(),this.prop="innerHTML"in e?"innerHTML":"textContent"in e?"textContent":0,!!this.prop){this.target=e,typeof i!="object"&&(i={text:i});var s=i.text||i.value||"",l=i.trim!==!1,c=this,d,u,p,f;return c.delimiter=d=i.delimiter||"",c.original=Mn(uw(e).replace(nb," ").split("&nbsp;").join(""),d,l),(s==="{original}"||s===!0||s==null)&&(s=c.original.join(d)),c.text=Mn((s||"").replace(nb," "),d,l),c.hasClass=!!(i.newClass||i.oldClass),c.newClass=i.newClass,c.oldClass=i.oldClass,f=d==="",c.textHasEmoji=f&&!!c.text.emoji,c.charsHaveEmoji=!!i.chars&&!!Mn(i.chars).emoji,c.length=f?c.original.length:c.original.join(d).length,c.lengthDif=(f?c.text.length:c.text.join(d).length)-c.length,c.fillChar=i.fillChar||i.chars&&~i.chars.indexOf(" ")?"&nbsp;":"",c.charSet=p=DF[i.chars||"upperCase"]||new wh(i.chars),c.speed=.05/(i.speed||1),c.prevScrambleTime=0,c.setIndex=Math.random()*20|0,u=c.length+Math.max(c.lengthDif,0),u>p.length&&p.grow(u),c.chars=p.sets[c.setIndex],c.revealDelay=i.revealDelay||0,c.tweenLength=i.tweenLength!==!1,c.tween=n,c.rightToLeft=!!i.rightToLeft,c._props.push("scrambleText","text"),SF}},render:function(e,i){var n=i.target,r=i.prop,o=i.text,s=i.delimiter,l=i.tween,c=i.prevScrambleTime,d=i.revealDelay,u=i.setIndex,p=i.chars,f=i.charSet,g=i.length,y=i.textHasEmoji,w=i.charsHaveEmoji,D=i.lengthDif,j=i.tweenLength,b=i.oldClass,v=i.newClass,h=i.rightToLeft,x=i.fillChar,k=i.speed,S=i.original,_=i.hasClass,C=o.length,E=l._time,z=E-c,A,N,O,W,V,$,I,M,P,R,U;d&&(l._from&&(E=l._dur-E),e=E===0?0:E<d?1e-6:E===l._dur?1:l._ease((E-d)/(l._dur-d))),e<0?e=0:e>1&&(e=1),h&&(e=1-e),A=~~(e*C+.5),e?((z>k||z<-k)&&(i.setIndex=u=(u+(Math.random()*19|0))%20,i.chars=f.sets[u],i.prevScrambleTime+=z),W=p):W=S.join(s),U=l._from?e:1-e,R=g+(j?l._from?U*U*U:1-U*U*U:1)*D,h?e===1&&(l._from||l.data==="isFromStart")?(O="",W=S.join(s)):(I=o.slice(A).join(s),w?O=Mn(W).slice(0,R-(y?Mn(I):I).length+.5|0).join(""):O=W.substr(0,R-(y?Mn(I):I).length+.5|0),W=I):(O=o.slice(0,A).join(s),N=(y?Mn(O):O).length,w?W=Mn(W).slice(N,R+.5|0).join(""):W=W.substr(N,R-N+.5|0)),_?(M=h?b:v,P=h?v:b,V=M&&A!==0,$=P&&A!==C,I=(V?"<span class='"+M+"'>":"")+O+(V?"</span>":"")+($?"<span class='"+P+"'>":"")+s+W+($?"</span>":"")):I=O+s+W,n[r]=x==="&nbsp;"&&~I.indexOf("  ")?I.split("  ").join("&nbsp;&nbsp;"):I}};of.emojiSafeSplit=Mn;of.getText=uw;p4()&&as.registerPlugin(of);J.registerPlugin(Dd,of);const _F=({radius:t=100,duration:e=1.2,speed:i=.5,scrambleChars:n=".:",className:r="",style:o={},children:s})=>{const l=T.useRef(null),c=T.useRef([]);return T.useEffect(()=>{var d,u;l.current&&((u=(d=document.fonts)==null?void 0:d.ready)==null||u.then(()=>{if(!l.current)return;const p=Dd.create(l.current.querySelector("p"),{type:"chars",charsClass:"char"});c.current=p.chars,c.current.forEach(y=>{J.set(y,{display:"inline-block",attr:{"data-content":y.innerHTML}})});const f=y=>{c.current.forEach(w=>{const{left:D,top:j,width:b,height:v}=w.getBoundingClientRect(),h=y.clientX-(D+b/2),x=y.clientY-(j+v/2),k=Math.hypot(h,x);k<t&&J.to(w,{overwrite:!0,duration:e*(1-k/t),scrambleText:{text:w.dataset.content||"",chars:n,speed:i},ease:"none"})})},g=l.current;if(g)return g.addEventListener("pointermove",f),()=>{g&&(g.removeEventListener("pointermove",f),p.revert())}}))},[t,e,i,n]),a.jsx("div",{ref:l,className:`text-block ${r}`,style:o,children:a.jsx("p",{children:s})})};function Zt(t,e,i){return(1-i)*t+i*e}function qt(t,e){let i=0,n=0;return"touches"in t&&t.touches.length>0?(i=t.touches[0].clientX,n=t.touches[0].clientY):"clientX"in t&&(i=t.clientX,n=t.clientY),{x:i-e.left,y:n-e.top}}function To(t,e){const i=t.x-e.x,n=t.y-e.y;return Math.hypot(i,n)}class Eo{constructor(e){this.DOM={el:null,inner:null},this.defaultStyle={scale:1,x:0,y:0,opacity:0},this.rect=null,this.DOM.el=e,this.DOM.inner=this.DOM.el.querySelector(".content__img-inner"),this.getRect(),this.initEvents()}initEvents(){this.resize=()=>{J.set(this.DOM.el,this.defaultStyle),this.getRect()},window.addEventListener("resize",this.resize)}getRect(){this.rect=this.DOM.el.getBoundingClientRect()}}class CF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new Eo(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0};const i=r=>{const o=this.container.getBoundingClientRect();this.mousePos=qt(r,o)};this.container.addEventListener("mousemove",i),this.container.addEventListener("touchmove",i);const n=r=>{const o=this.container.getBoundingClientRect();this.mousePos=qt(r,o),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),this.container.removeEventListener("mousemove",n),this.container.removeEventListener("touchmove",n)};this.container.addEventListener("mousemove",n),this.container.addEventListener("touchmove",n)}render(){const e=To(this.mousePos,this.lastMousePos);this.cacheMousePos.x=Zt(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=Zt(this.cacheMousePos.y,this.mousePos.y,.1),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var i,n,r,o;++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const e=this.images[this.imgPosition];J.killTweensOf(e.DOM.el),J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(e.DOM.el,{opacity:1,scale:1,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((i=e.rect)==null?void 0:i.width)??0)/2,y:this.cacheMousePos.y-(((n=e.rect)==null?void 0:n.height)??0)/2},{duration:.4,ease:"power1",x:this.mousePos.x-(((r=e.rect)==null?void 0:r.width)??0)/2,y:this.mousePos.y-(((o=e.rect)==null?void 0:o.height)??0)/2},0).to(e.DOM.el,{duration:.4,ease:"power3",opacity:0,scale:.2},.4)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}class PF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new Eo(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0};const i=r=>{const o=e.getBoundingClientRect();this.mousePos=qt(r,o)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const o=e.getBoundingClientRect();this.mousePos=qt(r,o),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){const e=To(this.mousePos,this.lastMousePos);this.cacheMousePos.x=Zt(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=Zt(this.cacheMousePos.y,this.mousePos.y,.1),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var i,n,r,o;++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const e=this.images[this.imgPosition];J.killTweensOf(e.DOM.el),J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(e.DOM.el,{opacity:1,scale:0,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((i=e.rect)==null?void 0:i.width)??0)/2,y:this.cacheMousePos.y-(((n=e.rect)==null?void 0:n.height)??0)/2},{duration:.4,ease:"power1",scale:1,x:this.mousePos.x-(((r=e.rect)==null?void 0:r.width)??0)/2,y:this.mousePos.y-(((o=e.rect)==null?void 0:o.height)??0)/2},0).to(e.DOM.el,{duration:.4,ease:"power2",opacity:0,scale:.2},.45)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}class TF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new Eo(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0};const i=r=>{const o=e.getBoundingClientRect();this.mousePos=qt(r,o)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const o=e.getBoundingClientRect();this.mousePos=qt(r,o),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){const e=To(this.mousePos,this.lastMousePos);this.cacheMousePos.x=Zt(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=Zt(this.cacheMousePos.y,this.mousePos.y,.1),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var i,n,r,o;++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const e=this.images[this.imgPosition];J.killTweensOf(e.DOM.el),J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(e.DOM.el,{opacity:1,scale:0,zIndex:this.zIndexVal,xPercent:0,yPercent:0,x:this.cacheMousePos.x-(((i=e.rect)==null?void 0:i.width)??0)/2,y:this.cacheMousePos.y-(((n=e.rect)==null?void 0:n.height)??0)/2},{duration:.4,ease:"power1",scale:1,x:this.mousePos.x-(((r=e.rect)==null?void 0:r.width)??0)/2,y:this.mousePos.y-(((o=e.rect)==null?void 0:o.height)??0)/2},0).to(e.DOM.el,{duration:.6,ease:"power2",opacity:0,scale:.2,xPercent:()=>J.utils.random(-30,30),yPercent:-200},.6)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}class EF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new Eo(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0};const i=r=>{const o=e.getBoundingClientRect();this.mousePos=qt(r,o)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const o=e.getBoundingClientRect();this.mousePos=qt(r,o),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){To(this.mousePos,this.lastMousePos)>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.cacheMousePos.x=Zt(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=Zt(this.cacheMousePos.y,this.mousePos.y,.1),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var o,s,l,c;++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const e=this.images[this.imgPosition];J.killTweensOf(e.DOM.el);let i=this.mousePos.x-this.cacheMousePos.x,n=this.mousePos.y-this.cacheMousePos.y,r=Math.sqrt(i*i+n*n);r!==0&&(i/=r,n/=r),i*=r/100,n*=r/100,J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(e.DOM.el,{opacity:1,scale:0,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((o=e.rect)==null?void 0:o.width)??0)/2,y:this.cacheMousePos.y-(((s=e.rect)==null?void 0:s.height)??0)/2},{duration:.4,ease:"power1",scale:1,x:this.mousePos.x-(((l=e.rect)==null?void 0:l.width)??0)/2,y:this.mousePos.y-(((c=e.rect)==null?void 0:c.height)??0)/2},0).fromTo(e.DOM.inner,{scale:2,filter:`brightness(${Math.max(400*r/100,100)}%) contrast(${Math.max(400*r/100,100)}%)`},{duration:.4,ease:"power1",scale:1,filter:"brightness(100%) contrast(100%)"},0).to(e.DOM.el,{duration:.4,ease:"power3",opacity:0},.4).to(e.DOM.el,{duration:1.5,ease:"power4",x:`+=${i*110}`,y:`+=${n*110}`},.05)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}class IF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new Eo(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0},this.lastAngle=0;const i=r=>{const o=e.getBoundingClientRect();this.mousePos=qt(r,o)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const o=e.getBoundingClientRect();this.mousePos=qt(r,o),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){To(this.mousePos,this.lastMousePos)>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.cacheMousePos.x=Zt(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=Zt(this.cacheMousePos.y,this.mousePos.y,.1),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var c,d,u,p;let e=this.mousePos.x-this.cacheMousePos.x,i=this.mousePos.y-this.cacheMousePos.y,n=Math.atan2(i,e)*(180/Math.PI);n<0&&(n+=360),n>90&&n<=270&&(n+=180);const r=n>=this.lastAngle;this.lastAngle=n;let o=r?n-10:n+10;const s=Math.sqrt(e*e+i*i);s!==0&&(e/=s,i/=s),e*=s/150,i*=s/150,++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const l=this.images[this.imgPosition];J.killTweensOf(l.DOM.el),J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(l.DOM.el,{opacity:1,filter:"brightness(80%)",scale:.1,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((c=l.rect)==null?void 0:c.width)??0)/2,y:this.cacheMousePos.y-(((d=l.rect)==null?void 0:d.height)??0)/2,rotation:o},{duration:1,ease:"power2",scale:1,filter:"brightness(100%)",x:this.mousePos.x-(((u=l.rect)==null?void 0:u.width)??0)/2+e*70,y:this.mousePos.y-(((p=l.rect)==null?void 0:p.height)??0)/2+i*70,rotation:this.lastAngle},0).to(l.DOM.el,{duration:.4,ease:"expo",opacity:0},.5).to(l.DOM.el,{duration:1.5,ease:"power4",x:`+=${e*120}`,y:`+=${i*120}`},.05)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}class AF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new Eo(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0};const i=r=>{const o=e.getBoundingClientRect();this.mousePos=qt(r,o)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const o=e.getBoundingClientRect();this.mousePos=qt(r,o),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){const e=To(this.mousePos,this.lastMousePos);this.cacheMousePos.x=Zt(this.cacheMousePos.x,this.mousePos.x,.3),this.cacheMousePos.y=Zt(this.cacheMousePos.y,this.mousePos.y,.3),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}mapSpeedToSize(e,i,n){return i+(n-i)*Math.min(e/200,1)}mapSpeedToBrightness(e,i,n){return i+(n-i)*Math.min(e/70,1)}mapSpeedToBlur(e,i,n){return i+(n-i)*Math.min(e/90,1)}mapSpeedToGrayscale(e,i,n){return i+(n-i)*Math.min(e/90,1)}showNextImage(){var d,u,p,f;const e=this.mousePos.x-this.cacheMousePos.x,i=this.mousePos.y-this.cacheMousePos.y,n=Math.sqrt(e*e+i*i);++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const r=this.images[this.imgPosition],o=this.mapSpeedToSize(n,.3,2),s=this.mapSpeedToBrightness(n,0,1.3),l=this.mapSpeedToBlur(n,20,0),c=this.mapSpeedToGrayscale(n,600,0);J.killTweensOf(r.DOM.el),J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(r.DOM.el,{opacity:1,scale:0,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((d=r.rect)==null?void 0:d.width)??0)/2,y:this.cacheMousePos.y-(((u=r.rect)==null?void 0:u.height)??0)/2},{duration:.8,ease:"power3",scale:o,filter:`grayscale(${c*100}%) brightness(${s*100}%) blur(${l}px)`,x:this.mousePos.x-(((p=r.rect)==null?void 0:p.width)??0)/2,y:this.mousePos.y-(((f=r.rect)==null?void 0:f.height)??0)/2},0).fromTo(r.DOM.inner,{scale:2},{duration:.8,ease:"power3",scale:1},0).to(r.DOM.el,{duration:.4,ease:"power3.in",opacity:0,scale:.2},.45)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}function MF(t,e,i){const n=Math.abs(e)%i.length;return t-n>=0?t-n:i.length-(n-t)}class zF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new Eo(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0},this.visibleImagesCount=0,this.visibleImagesTotal=9,this.visibleImagesTotal=Math.min(this.visibleImagesTotal,this.imagesTotal-1);const i=r=>{const o=e.getBoundingClientRect();this.mousePos=qt(r,o)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const o=e.getBoundingClientRect();this.mousePos=qt(r,o),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){const e=To(this.mousePos,this.lastMousePos);this.cacheMousePos.x=Zt(this.cacheMousePos.x,this.mousePos.x,.3),this.cacheMousePos.y=Zt(this.cacheMousePos.y,this.mousePos.y,.3),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var n,r,o,s;++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const e=this.images[this.imgPosition];++this.visibleImagesCount,J.killTweensOf(e.DOM.el);const i=J.utils.random(.5,1.6);if(J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).fromTo(e.DOM.el,{scale:i-Math.max(J.utils.random(.2,.6),0),rotationZ:J.utils.random(-3,3),opacity:1,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((n=e.rect)==null?void 0:n.width)??0)/2,y:this.cacheMousePos.y-(((r=e.rect)==null?void 0:r.height)??0)/2},{duration:.4,ease:"power3",scale:i,rotationZ:J.utils.random(-3,3),x:this.mousePos.x-(((o=e.rect)==null?void 0:o.width)??0)/2,y:this.mousePos.y-(((s=e.rect)==null?void 0:s.height)??0)/2},0),this.visibleImagesCount>=this.visibleImagesTotal){const l=MF(this.imgPosition,this.visibleImagesTotal,this.images),c=this.images[l];J.to(c.DOM.el,{duration:.4,ease:"power4",opacity:0,scale:1.3,onComplete:()=>{this.activeImagesCount===0&&(this.isIdle=!0)}})}}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--}}class FF{constructor(e){this.container=e,this.DOM={el:e},this.images=[...e.querySelectorAll(".content__img")].map(r=>new Eo(r)),this.imagesTotal=this.images.length,this.imgPosition=0,this.zIndexVal=1,this.activeImagesCount=0,this.isIdle=!0,this.threshold=80,this.mousePos={x:0,y:0},this.lastMousePos={x:0,y:0},this.cacheMousePos={x:0,y:0},this.rotation={x:0,y:0},this.cachedRotation={x:0,y:0},this.zValue=0,this.cachedZValue=0;const i=r=>{const o=e.getBoundingClientRect();this.mousePos=qt(r,o)};e.addEventListener("mousemove",i),e.addEventListener("touchmove",i);const n=r=>{const o=e.getBoundingClientRect();this.mousePos=qt(r,o),this.cacheMousePos={...this.mousePos},requestAnimationFrame(()=>this.render()),e.removeEventListener("mousemove",n),e.removeEventListener("touchmove",n)};e.addEventListener("mousemove",n),e.addEventListener("touchmove",n)}render(){const e=To(this.mousePos,this.lastMousePos);this.cacheMousePos.x=Zt(this.cacheMousePos.x,this.mousePos.x,.1),this.cacheMousePos.y=Zt(this.cacheMousePos.y,this.mousePos.y,.1),e>this.threshold&&(this.showNextImage(),this.lastMousePos={...this.mousePos}),this.isIdle&&this.zIndexVal!==1&&(this.zIndexVal=1),requestAnimationFrame(()=>this.render())}showNextImage(){var f,g,y,w;const e=this.container.getBoundingClientRect(),i=e.width/2,n=e.height/2,r=this.mousePos.x-i,o=this.mousePos.y-n;this.rotation.x=-(o/n)*30,this.rotation.y=r/i*30,this.cachedRotation={...this.rotation};const s=Math.sqrt(r*r+o*o),l=Math.sqrt(i*i+n*n),c=s/l;this.zValue=c*1200-600,this.cachedZValue=this.zValue;const u=.2+(this.zValue+600)/1200*2.3;++this.zIndexVal,this.imgPosition=this.imgPosition<this.imagesTotal-1?this.imgPosition+1:0;const p=this.images[this.imgPosition];J.killTweensOf(p.DOM.el),J.timeline({onStart:()=>this.onImageActivated(),onComplete:()=>this.onImageDeactivated()}).set(this.DOM.el,{perspective:1e3},0).fromTo(p.DOM.el,{opacity:1,z:0,scale:1+this.cachedZValue/1e3,zIndex:this.zIndexVal,x:this.cacheMousePos.x-(((f=p.rect)==null?void 0:f.width)??0)/2,y:this.cacheMousePos.y-(((g=p.rect)==null?void 0:g.height)??0)/2,rotationX:this.cachedRotation.x,rotationY:this.cachedRotation.y,filter:`brightness(${u})`},{duration:1,ease:"expo",scale:1+this.zValue/1e3,x:this.mousePos.x-(((y=p.rect)==null?void 0:y.width)??0)/2,y:this.mousePos.y-(((w=p.rect)==null?void 0:w.height)??0)/2,rotationX:this.rotation.x,rotationY:this.rotation.y},0).to(p.DOM.el,{duration:.4,ease:"power2",opacity:0,z:-800},.3)}onImageActivated(){this.activeImagesCount++,this.isIdle=!1}onImageDeactivated(){this.activeImagesCount--,this.activeImagesCount===0&&(this.isIdle=!0)}}const ab={1:CF,2:PF,3:TF,4:EF,5:IF,6:AF,7:zF,8:FF};function RF({items:t=[],variant:e=1}){const i=q.useRef(null);return q.useEffect(()=>{if(!i.current)return;const n=ab[e]||ab[1];new n(i.current)},[e,t]),a.jsx("div",{className:"content",ref:i,children:t.map((n,r)=>a.jsx("div",{className:"content__img",children:a.jsx("div",{className:"content__img-inner",style:{backgroundImage:`url(${n})`}})},r))})}const LF="/Nooshin-Shahsavan-portfolio/assets/man-8.dfac0a8a.JPG",NF="/Nooshin-Shahsavan-portfolio/assets/after.17bba519.png",OF="/Nooshin-Shahsavan-portfolio/assets/indesign.b58223e6.png",$F="/Nooshin-Shahsavan-portfolio/assets/illustrator.ba50f230.png",BF="/Nooshin-Shahsavan-portfolio/assets/photoshop.d6232244.png",VF="/Nooshin-Shahsavan-portfolio/assets/pre.272b49ca.png",WF="/Nooshin-Shahsavan-portfolio/assets/figma.0a1384c5.png",UF="/Nooshin-Shahsavan-portfolio/assets/react.63bbbe78.png",HF="/Nooshin-Shahsavan-portfolio/assets/html.f61f5ecc.png",YF="/Nooshin-Shahsavan-portfolio/assets/css.fd98993d.png",GF="/Nooshin-Shahsavan-portfolio/assets/excel.0cfcc5e8.png",XF="/Nooshin-Shahsavan-portfolio/assets/word.ff1a3fc2.png",ZF="/Nooshin-Shahsavan-portfolio/assets/power.6e31dae5.png",Jn=[{src:NF,alt:"After Effects"},{src:OF,alt:"InDesign"},{src:$F,alt:"Illustrator"},{src:BF,alt:"Photoshop"},{src:VF,alt:"Premiere"},{src:WF,alt:"Figma"},{src:UF,alt:"React"},{src:HF,alt:"HTML"},{src:YF,alt:"CSS"},{src:GF,alt:"Excel"},{src:XF,alt:"Word"},{src:ZF,alt:"PowerPoint"}],lb=[0,1,2,3,4,5],cb=[10,9,11],db=[7,8,6],qF=240,QF=160,KF=80;function y0(t,e=0){return Array(t).fill(0).map((i,n)=>360/t*n+e)}const JF=()=>{const t=y0(lb.length,-90),e=y0(cb.length,0),i=y0(db.length,0);return a.jsxs("div",{className:"skill-bubbles-outer",children:[a.jsx("h2",{className:"skills-title",children:"My Skills"}),a.jsx("div",{className:"orbit orbit-outer"}),a.jsx("div",{className:"orbit orbit-middle"}),a.jsx("div",{className:"orbit orbit-inner"}),lb.map((n,r)=>a.jsx("div",{className:"orbit-parent orbit-parent-outer",style:{"--orbit-radius":`${qF}px`,"--orbit-rotate":`${t[r]}deg`,"--orbit-dur":"38s",zIndex:3},children:a.jsx("div",{className:"bubble",children:a.jsx("img",{src:Jn[n].src,alt:Jn[n].alt,className:"bubble-img",draggable:!1})})},Jn[n].src)),cb.map((n,r)=>a.jsx("div",{className:"orbit-parent orbit-parent-middle",style:{"--orbit-radius":`${QF}px`,"--orbit-rotate":`${e[r]}deg`,"--orbit-dur":"48s",zIndex:3},children:a.jsx("div",{className:"bubble",children:a.jsx("img",{src:Jn[n].src,alt:Jn[n].alt,className:"bubble-img",draggable:!1})})},Jn[n].src)),db.map((n,r)=>a.jsx("div",{className:"orbit-parent orbit-parent-inner",style:{"--orbit-radius":`${KF}px`,"--orbit-rotate":`${i[r]}deg`,"--orbit-dur":"60s",zIndex:3},children:a.jsx("div",{className:"bubble",children:a.jsx("img",{src:Jn[n].src,alt:Jn[n].alt,className:"bubble-img",draggable:!1})})},Jn[n].src)),a.jsx("style",{children:`
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
      `})]})},eR=fl`
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
                C326,495.3,324.3,497,322.3,497z`})]})]})]})})}),oR=m.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  background: #191c24;
  color: #ffffff;
  position: relative;
  z-index: 1;
`,sR=m.div`
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
`,aR=m(L.div)`
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
`,Ol=m.p`
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
`,cR=m(L.div)`
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
`,uR=()=>a.jsx(oR,{children:a.jsxs(sR,{children:[a.jsxs(aR,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:[a.jsx(lR,{children:"Why a Cactus? 🌵"}),a.jsx(Ol,{children:"You might be wondering why my logo is a cactus!"}),a.jsx(Ol,{children:"Well, I'm not a cactus 😄 — but I chose the shape of a cactus for my logo because I truly see parts of myself in it."}),a.jsx(Ol,{children:"I'm someone who keeps going and stays strong no matter the circumstances. I'm patient and resilient."}),a.jsx(Ol,{children:'I always try to adapt to my surroundings and stay "green" — full of life and growth.'}),a.jsx(Ol,{children:"That's exactly why I chose the cactus as my personal symbol 🌵✨"})]}),a.jsx(cR,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut",delay:.2},children:a.jsx(dR,{children:a.jsx(rR,{})})})]})}),hR=m(L.button)`
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
`,pR=m.div`
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
`,fR=({text:t,title:e="About Me"})=>{const[i,n]=T.useState(!1),[r,o]=T.useState(!1),[s,l]=T.useState(null),c=T.useRef(null);T.useEffect(()=>{if("speechSynthesis"in window){o(!0);const u=()=>{const p=window.speechSynthesis.getVoices(),f=p.find(w=>w.name.includes("Microsoft Zira - English (United States)")),g=p.find(w=>w.name.includes("Zira")),y=p.find(w=>w.name.includes("female")||w.name.includes("Female")||w.name.includes("Samantha")||w.name.includes("Victoria")||w.name.includes("Karen")||w.name.includes("Tessa")||w.name.includes("Alice"));f?l(f):g?l(g):y?l(y):p.length>0&&l(p[0])};u(),window.speechSynthesis.onvoiceschanged=u}},[]),T.useEffect(()=>()=>{c.current&&window.speechSynthesis.cancel()},[]);const d=()=>{if(r)if(i)window.speechSynthesis.cancel(),n(!1);else{const u=new SpeechSynthesisUtterance(t);u.rate=1,u.pitch=1,u.volume=1,s&&(u.voice=s),u.onstart=()=>{n(!0)},u.onend=()=>{n(!1)},u.onerror=()=>{n(!1)},c.current=u,window.speechSynthesis.speak(u)}};return a.jsx(hR,{$isPlaying:i,onClick:d,disabled:!r,whileHover:{scale:1.05},whileTap:{scale:.95},title:i?"Stop audio":"Play audio",children:a.jsx(pR,{$isPlaying:i,children:i?"❚❚":"▶"})})},mR="/Nooshin-Shahsavan-portfolio/assets/man-1.7e49cf66.jpg",gR="/Nooshin-Shahsavan-portfolio/assets/man-2.b67702f5.jpg",xR="/Nooshin-Shahsavan-portfolio/assets/man-3.c8b0d5a8.jpg",wR="/Nooshin-Shahsavan-portfolio/assets/man-5.2ad51805.jpg",vR="/Nooshin-Shahsavan-portfolio/assets/man-6.6d44b2d6.jpg",yR="/Nooshin-Shahsavan-portfolio/assets/man-7.8e334f50.jpg",bR=_r`
  html, body {
    overflow-x: hidden !important;
    margin: 0;
    padding: 0;
    background: #191c24;
  }
`,kR=m.div`
  width: 100%;
  min-height: 100vh;
  background: #191c24;
  position: relative;
  z-index: 0;
  box-sizing: border-box;
  overflow-x: hidden;
`,ub=m.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  background: #191c24;
  z-index: 1;
`,jR=m.div`
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
`,SR=m.h2`
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
`,DR=m.div`
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
`,_R=m.div`
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
`,CR=m.div`
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
`,PR=m.div`
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
`,TR=m(L.div)`
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
`,ER=m.div`
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
`,IR=m(L.div)`
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
`,AR=()=>{const{scrollYProgress:t}=TA();Ml(t,[.1,.2],[0,1]),Ml(t,[.1,.2],[50,0]),Ml(t,[.15,.25],[0,1]),Ml(t,[.15,.25],[50,0]),Ml(t,[.15,.25],[5,0]);const e=[{title:"Who I am",content:"Hey! my name is Nooshin. I'm a Graphic and UI/UX Designer with a strong background in visual communication and branding. My journey began with studying graphic design in high school, followed by a degree in Visual Communication and Art Research in my home country. After moving to Canada, I continued to expand my skills by training at BCIT, with a focus on usability and front-end development tools. I strive to combine creativity with functionality—designing user-centered experiences that are not only visually engaging but also fast-paced, organized, and intuitive."},{title:"What I've Done",content:"I've worked with trade companies like G_Art Brand and freelanced for small businesses such as S.B.S and VEEN. My projects have covered everything from brand identity and packaging to social campaigns and digital content. I also taught graphic design software for 10 years. These experiences taught me how to adapt designs to real world constraints, communicate clearly across different formats, and balance creativity with purpose."},{title:"How I Work",content:"My design process starts with understanding the client's mission, values, target audience, and any visual preferences. I then organize tasks in Trello to plan the project efficiently. Using research and insights, I develop a mind map in Miro or FigJam to shape the creative direction. I build a consistent visual identity by choosing colors based on color psychology, selecting typography, and designing a logo that reflects the brand's personality. Finally, I create mockups using Photoshop, Illustrator, InDesign, and After Effects, present design options to the client, and refine them based on feedback for the final delivery."},{title:"Why I Design",content:"I design to solve problems and tell stories—visually and meaningfully. Design lets me combine creativity with strategy to create experiences that not only look good but also connect with people and serve a purpose. Whether it's building a brand, improving a user's journey, or crafting visual content, I enjoy turning ideas into organized, impactful visuals that make communication clearer and more engaging."}],i=e.map(r=>`${r.title}. ${r.content}`).join(" "),n=[mR,gR,xR,wR,vR,yR];return a.jsxs(kR,{children:[a.jsx(rt,{title:"About Nooshin Shahsavan | Creative Designer & Developer",description:"Learn more about Nooshin Shahsavan, a passionate graphic designer and UX/UI designer with expertise in brand design, creative solutions, and innovative design thinking.",keywords:"about Nooshin Shahsavan, graphic designer, UX/UI designer, brand designer, creative portfolio, design skills",image:"/src/assets/about/man-8.jpg"}),a.jsx(bR,{}),a.jsx(F3,{}),a.jsx(ub,{style:{background:"#191c24",display:"flex",justifyContent:"center",alignItems:"center"},children:a.jsxs(_R,{children:[a.jsx(CR,{children:a.jsx(PR,{children:a.jsx(TR,{initial:{opacity:0,scale:.95},whileInView:{opacity:1,scale:1},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:a.jsx("img",{src:LF,alt:"About me image"})})})}),a.jsx(ER,{children:a.jsxs(IR,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut",delay:.2},children:[a.jsx(fR,{text:i,title:"About Me"}),e.map((r,o)=>a.jsxs("div",{children:[o===0?a.jsx("h2",{children:r.title}):a.jsx("h3",{children:r.title}),a.jsx(_F,{radius:100,duration:1.2,speed:.5,scrambleChars:".:",children:a.jsx("p",{children:r.content})})]},o))]})})]})}),a.jsx(JF,{}),a.jsx(uR,{}),a.jsx(ub,{children:a.jsxs(jR,{children:[a.jsx(SR,{children:"My interests and I"}),a.jsx(DR,{children:"Drag the mouse to see me 🥰"}),a.jsx(RF,{items:n,variant:1})]})}),a.jsx(u4,{})]})},MR=fl`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`,zR=m.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`,FR=m.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
`,RR=m.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 -1px #fff;
`,f4=m(yn)`
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
`,LR=m.div`
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

  ${f4}:hover + & {
    transform: translate3d(0, 0%, 0);
  }
`,NR=m.div`
  height: 100%;
  width: 200%;
  display: flex;
  transform: translateX(0);
`,OR=m.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  width: 200%;
  will-change: transform;
  animation: ${MR} 15s linear infinite;
`,$R=m.span`
  color: #060606;
  white-space: nowrap;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 4vh;
  line-height: 1.2;
  padding: 1vh 1vw 0;
`,BR=m.div`
  width: 200px;
  height: 7vh;
  margin: 2em 2vw;
  padding: 1em 0;
  border-radius: 50px;
  background-image: url(${t=>t.imageUrl});
  background-size: cover;
  background-position: 50% 50%;
`;function VR({link:t,text:e,image:i}){const n=q.useRef(null),r=q.useRef(null),o=q.useRef(null),s={duration:.6,ease:"expo"},l=(f,g,y,w)=>{const D=c(f,g,y/2,0),j=c(f,g,y/2,w);return D<j?"top":"bottom"},c=(f,g,y,w)=>{const D=f-y,j=g-w;return D*D+j*j},d=f=>{if(!n.current||!r.current||!o.current)return;const g=n.current.getBoundingClientRect(),y=f.clientX-g.left,w=f.clientY-g.top,D=l(y,w,g.width,g.height);J.timeline({defaults:s}).set(r.current,{y:D==="top"?"-101%":"101%"},0).set(o.current,{y:D==="top"?"101%":"-101%"},0).to([r.current,o.current],{y:"0%"},0)},u=f=>{if(!n.current||!r.current||!o.current)return;const g=n.current.getBoundingClientRect(),y=f.clientX-g.left,w=f.clientY-g.top,D=l(y,w,g.width,g.height);J.timeline({defaults:s}).to(r.current,{y:D==="top"?"-101%":"101%"},0).to(o.current,{y:D==="top"?"101%":"-101%"},0)},p=Array.from({length:4}).map((f,g)=>a.jsxs(q.Fragment,{children:[a.jsx($R,{children:e}),a.jsx(BR,{imageUrl:i})]},g));return a.jsxs(RR,{ref:n,children:[a.jsx(f4,{to:t,onMouseEnter:d,onMouseLeave:u,children:e}),a.jsx(LR,{ref:r,children:a.jsx(NR,{ref:o,children:a.jsx(OR,{"aria-hidden":"true",children:p})})})]})}function WR({items:t=[]}){return a.jsx(zR,{children:a.jsx(FR,{children:t.map((e,i)=>a.jsx(VR,{...e},i))})})}const Ns=()=>{const t=()=>{const e=document.querySelector("#sbs-overview, #overview, #veen-first, #deli-first, #zar-first");e?e.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0,behavior:"smooth"})};return a.jsx("button",{onClick:t,style:{position:"fixed",bottom:"24px",right:"24px",width:"48px",height:"48px",backgroundColor:"rgba(255, 255, 255, 0.9)",borderRadius:"50%",cursor:"pointer",zIndex:9999,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",color:"#333",backdropFilter:"blur(10px)",boxShadow:"0 2px 8px rgba(0,0,0,0.1)",transition:"all 0.2s ease",border:"1px solid rgba(0, 0, 0, 0.1)"},"aria-label":"Scroll to top",onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-2px)",e.currentTarget.style.boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.1)"},children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M12 4L12 20M12 4L6 10M12 4L18 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})},UR="/Nooshin-Shahsavan-portfolio/assets/work1.f00d3214.png",HR="/Nooshin-Shahsavan-portfolio/assets/work3.4049715c.png",YR="/Nooshin-Shahsavan-portfolio/assets/work6.bb17f127.png",GR="/Nooshin-Shahsavan-portfolio/assets/work4.64f58ae6.png",XR=m.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #060606;
  position: relative;
  padding: 0;
`,ZR=m.div`
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
`;m(L.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;m(L(yn))`
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
`;m(L.div)`
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
`;const qR=()=>{const t=[{link:"/work/sbs",text:"SBS Project",image:UR},{link:"/work/veen",text:"Veen Project",image:HR},{link:"/work/delicato",text:"Delicato Project",image:YR},{link:"/work/zar",text:"Zar Project",image:GR},{link:"/work/workday",text:"workday-UX/UI",image:d4},{link:"/work/project6",text:"UX-UI-2",image:"https://picsum.photos/600/400?random=6"},{link:"/work/fun",text:"School Projects",image:"funproject"}];return a.jsxs(a.Fragment,{children:[a.jsx(rt,{title:"Work Portfolio | Nooshin Shahsavan - Creative Projects",description:"Explore Nooshin Shahsavan's creative work portfolio featuring graphic design, brand design, UX/UI projects, and innovative design solutions.",keywords:"work portfolio, graphic design projects, brand design, UX/UI design, creative projects, Nooshin Shahsavan",image:"/src/assets/home/workhome.png"}),a.jsx(XS,{}),a.jsx(XR,{children:a.jsxs(ZR,{children:[a.jsx(WR,{items:t}),a.jsx(Ns,{})]})})]})},QR=m.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`,KR=m(L.div)`
  background: ${({theme:t})=>t.cardBackground};
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,JR=m(L.a)`
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
`,e7=m.div`
  color: var(--text);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`,t7=()=>a.jsxs(QR,{children:[a.jsx(rt,{title:"Resume | Nooshin Shahsavan - Professional Experience",description:"View Nooshin Shahsavan's professional resume and experience in graphic design, brand design, and UX/UI design. Download CV and view qualifications.",keywords:"resume, CV, Nooshin Shahsavan, graphic designer, professional experience, qualifications, skills",image:"/src/assets/logoweb.png"}),a.jsxs(KR,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:[a.jsx(L.h2,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},style:{color:"var(--accent1)",fontSize:"2.5rem",marginBottom:"2rem"},children:"Resume"}),a.jsx(e7,{children:a.jsxs(L.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[a.jsx("h3",{style:{color:"var(--accent1)",marginBottom:"0.5rem",fontSize:"2rem"},children:"Nooshin Shahsavan"}),a.jsxs("p",{style:{marginBottom:"1rem",color:"var(--text)",fontSize:"1rem"},children:[a.jsx("strong",{children:"Graphic Designer – Creative | Detail Oriented | Marketing-social media"}),a.jsx("br",{}),"Vancouver, BC | 604.500.5515 | Nooshin.shahsavan.ca@.com"]}),a.jsx("h4",{style:{color:"var(--accent1)",marginBottom:"0.5rem",marginTop:"2rem"},children:"PROFILE SUMMARY"}),a.jsx("p",{style:{marginBottom:"1.5rem",lineHeight:"1.6"},children:"Creative and detail-oriented Graphic Designer with over 3 years of experience producing high-quality print and digital assets. Skilled in layout production, file preparation, proofing, and managing multi-version (zoning) marketing materials to ensure accuracy and brand consistency. Proficient in Adobe Creative Suite (InDesign, Illustrator, Photoshop, Acrobat) and Figma, with a strong eye for typography and visual consistency. Experienced collaborating with cross-functional teams—including marketing, photography, merchandising, and external vendors—to deliver final print- and digital-ready files on time."}),a.jsx("h4",{style:{color:"var(--accent1)",marginBottom:"0.5rem"},children:"SKILLS"}),a.jsxs("ul",{style:{marginBottom:"1.5rem",lineHeight:"1.6"},children:[a.jsx("li",{children:"Adobe InDesign, Illustrator, Photoshop, Acrobat"}),a.jsx("li",{children:"Print Production & File Preparation"}),a.jsx("li",{children:"Layout Design & Typography"}),a.jsx("li",{children:"Proofing & Versioning (Zoning)"}),a.jsx("li",{children:"Digital Media & Branding"}),a.jsx("li",{children:"Motion Graphics (Adobe After Effects)"}),a.jsx("li",{children:"Time Management & Multitasking"}),a.jsx("li",{children:"Collaboration & Communication"}),a.jsx("li",{children:"Attention to Detail & Accuracy"})]}),a.jsx("h4",{style:{color:"var(--accent1)",marginBottom:"0.5rem"},children:"RELEVANT WORK EXPERIENCE"}),a.jsxs("div",{style:{marginBottom:"1.5rem"},children:[a.jsxs("p",{style:{marginBottom:"0.5rem"},children:[a.jsx("strong",{children:"Freelance Graphic Designer"})," | Self-employed | Apr 2023 - Present"]}),a.jsxs("ul",{style:{marginLeft:"1rem",lineHeight:"1.6"},children:[a.jsx("li",{children:"Produced digital and print-ready layouts for marketing materials, including social media ads, banners, and branded assets."}),a.jsx("li",{children:"Designed infographics, motion graphics (Adobe After Effects), and promotional visuals, contributing to a 50% increase in engagement for clients."}),a.jsx("li",{children:"Ensured accuracy and visual consistency across multiple versions and formats of deliverables."})]})]}),a.jsxs("div",{style:{marginBottom:"1.5rem"},children:[a.jsxs("p",{style:{marginBottom:"0.5rem"},children:[a.jsx("strong",{children:"Graphic Designer"})," | GART brand | Apr 2018 – Jun 2022"]}),a.jsxs("ul",{style:{marginLeft:"1rem",lineHeight:"1.6"},children:[a.jsx("li",{children:"Designed brochures, catalogs, and promotional print materials aligned with brand guidelines using Adobe InDesign, Illustrator, and Photoshop."}),a.jsx("li",{children:"Managed layout production and final file preparation for international exhibitions and digital marketing campaigns."}),a.jsx("li",{children:"Served as a final checkpoint for creative outputs, proofing marketing materials and verifying accuracy of zoning (multi-version) documents."}),a.jsx("li",{children:"Liaised closely with marketing, photography, merchandising teams, and external vendors to produce print- and digital-ready files on time."})]})]}),a.jsxs("div",{style:{marginBottom:"1.5rem"},children:[a.jsxs("p",{style:{marginBottom:"0.5rem"},children:[a.jsx("strong",{children:"Computer Graphic Teacher"})," | Parvin Etesami Art School | Sep 2012 – Jun 2022"]}),a.jsxs("ul",{style:{marginLeft:"1rem",lineHeight:"1.6"},children:[a.jsx("li",{children:"Instructed students on Adobe Photoshop, Illustrator, After Effects, and Figma with emphasis on practical design and production skills."}),a.jsx("li",{children:"Developed lesson plans, provided individual mentorship, and assessed student projects to support creative growth."})]})]}),a.jsx("h4",{style:{color:"var(--accent1)",marginBottom:"0.5rem"},children:"EDUCATION"}),a.jsxs("ul",{style:{marginBottom:"1.5rem",lineHeight:"1.6"},children:[a.jsxs("li",{children:[a.jsx("strong",{children:"New Media Design Diploma"})," | BCIT, Downtown, BC | May 2025"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Master's degree in art research"})," | Azad University, Tehran, Iran | Feb 2014"]}),a.jsxs("li",{children:[a.jsx("strong",{children:"Bachelor's degree in visual communication"})," | Kamalolmolk, Noshahr, Iran | Feb 2011"]})]})]})}),a.jsx(JR,{href:"/resume.pdf",download:!0,whileHover:{scale:1.05},whileTap:{scale:.95},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:"Download Full Resume (PDF)"})]})]}),i7="/Nooshin-Shahsavan-portfolio/assets/pinki.89ab7c2e.mp4",n7=m.section`
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
`,r7=m.h1`
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
`,o7=m.p`
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
`,s7=m.div`
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
`,a7=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,l7=m.div`
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
`,mu=m.div`
  min-width: 120px;
  text-align: center;
`,gu=m.div`
  font-size: 0.92rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 0.2em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,xu=m.div`
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
`,c7=()=>a.jsxs(n7,{children:[a.jsx(r7,{children:"S.B.S —  Overview"}),a.jsx(o7,{children:"For this project, I developed a complete visual identity system for S.B.S (Set by Sei) a carefree clothing brand based in Vancouver. The brand aims to provide affordable fashion that reflects Gen Z values: expressive, relaxed, fun, and effortlessly wearable."}),a.jsx(s7,{children:a.jsx(a7,{src:i7,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"S.B.S project video"})}),a.jsxs(l7,{children:[a.jsxs(mu,{children:[a.jsx(gu,{children:"Role"}),a.jsx(xu,{children:"Brand Designer"})]}),a.jsxs(mu,{children:[a.jsx(gu,{children:"Tools"}),a.jsx(xu,{children:"Illustrator, After Effects, Photoshop"})]}),a.jsxs(mu,{children:[a.jsx(gu,{children:"Timeline"}),a.jsx(xu,{children:"3 weeks"})]}),a.jsxs(mu,{children:[a.jsx(gu,{children:"Year"}),a.jsx(xu,{children:"2023"})]})]})]}),d7=m.section`
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
`,u7=m.p`
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
`,h7=m.div`
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
`,p7=()=>a.jsxs(d7,{children:[a.jsx(u7,{children:"My role involved designing the brand identity (logo, color palette, typeface), crafting a cohesive set of custom illustrations for print and Black Friday social media campaigns. The result is a bold, playful, and youthful brand identity that captures the vibrant energy of its audience."}),a.jsx(h7,{children:"Aim → Create a bold identity → Capture Gen Z spirit → Make fashion fun and affordable"})]}),Oo=m.span`
  color: #fabfb7;
  font-weight: 400;
`,f7=[{title:"Logo",description:a.jsxs(a.Fragment,{children:["Design a flexible logo that reflects ",a.jsx(Oo,{children:"freedom"}),", ",a.jsx(Oo,{children:"dance"}),", and ",a.jsx(Oo,{children:"carefreeness"}),", and can be used in every graphic."]})},{title:"Color Palette",description:a.jsxs(a.Fragment,{children:["Choose ",a.jsx(Oo,{children:"soft"}),", ",a.jsx(Oo,{children:"transparent"})," colors to support line-based graphics and reflect party lights."]})},{title:"Typography",description:"Find a typeface that matches the logo's form and works well on digital and print."},{title:"Illustration",description:a.jsxs(a.Fragment,{children:["Create graphics that show ",a.jsx(Oo,{children:"movement"})," and ",a.jsx(Oo,{children:"Gen Z mood"}),", blending with the logo's curves."]})}],m7=m.section`
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
`,g7=m.h2`
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
`,x7=m.p`
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
`,w7=m.div`
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
`,v7=m.div`
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
`,y7=m.div`  font-size: 1.01rem;
  font-weight: 600;
  color: #888;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-align: center;
`,b7=m.div`
  font-weight: 400;
  font-size: 1.08rem;
  color: #222;
  line-height: 1.5;
  letter-spacing: -0.1px;
  text-align: center;
`;function k7(){return a.jsxs(m7,{children:[a.jsx(g7,{children:"Key Challenges"}),a.jsx(x7,{children:"The project required solving four main creative challenges to build a cohesive, expressive brand identity."}),a.jsx(w7,{children:f7.map(t=>a.jsxs(v7,{children:[a.jsx(y7,{children:t.title}),a.jsx(b7,{children:t.description})]},t.title))})]})}const j7="/Nooshin-Shahsavan-portfolio/assets/s-logo1.3846184d.png",S7="/Nooshin-Shahsavan-portfolio/assets/s-logo2.d5ba2dd5.mp4",D7="/Nooshin-Shahsavan-portfolio/assets/s-logo3.0b24d28b.png",_7=m.section`
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
`,C7=m.h2`
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
`,P7=m.div`
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
`,hb=m.div`
    font-size: 0.98rem;
  color: #888;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 1.2em;
  margin-bottom: 0.3em;
`,T7=m.div`
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
`,E7=m.video`
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
`,I7=m.div`
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
`,pb=m.img`
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
`,b0=m.div`
  font-size: 0.95rem;
  color: #888;
  text-align: center;
  margin-top: 0.5em;
`,$o=m.span`
  color: #e4572e;
  font-weight: 400;
`,A7=()=>a.jsxs(_7,{children:[a.jsx(C7,{children:"Logo Design"}),a.jsxs(P7,{children:[a.jsx(hb,{children:"I should"}),"Design a logo that reflects the values of ",a.jsx($o,{children:"freedom"}),", ",a.jsx($o,{children:"movement"}),", and ",a.jsx($o,{children:"carefreeness"}),", and also functions as part of every clothing graphic.",a.jsx(hb,{children:"So"}),"To design a logo that reflects the brand's core values of ",a.jsx($o,{children:"freedom"}),", ",a.jsx($o,{children:"movement"}),", and ",a.jsx($o,{children:"carefreeness"}),", I began with an image of a carefree person jumping  a moment that perfectly captures the brand's vibe. ",a.jsx($o,{children:"Inspired by this expressive pose"}),", I first sketched the figure and then simplified it into flowing line work."]}),a.jsxs(T7,{children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(E7,{src:S7,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"S.B.S Main Logo Animation"}),a.jsx(b0,{children:"Main Logo (Animated)"})]}),a.jsxs(I7,{children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(pb,{src:j7,alt:"S.B.S Logo Static"}),a.jsx(b0,{children:"Static Logo"})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(pb,{src:D7,alt:"S.B.S Logo Variation"}),a.jsx(b0,{children:"Logo Variation"})]})]})]})]}),M7="/Nooshin-Shahsavan-portfolio/assets/sbs-type.f385c001.mp4",z7=m.section`
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
`,F7=m.h2`
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
`,R7=m.p`
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
`,L7=m.div`
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
`,N7=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,O7=()=>a.jsxs(z7,{children:[a.jsx(F7,{children:"Typography"}),a.jsx(R7,{children:"The primary typeface, Gyst Variable, visually connects with the logo's curves and is used for headers and expressive brand moments. Noto Sans is used for body text, ensuring clarity and legibility across all platforms."}),a.jsx(L7,{children:a.jsx(N7,{src:M7,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Typography video"})})]}),$7="/Nooshin-Shahsavan-portfolio/assets/color-sbs.03773038.mp4",B7=m.section`
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
`,V7=m.h2`
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
`,W7=m.div`
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
`;const U7=m.div`
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
`,H7=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,Y7=()=>{const t=T.useRef(null),[e,i]=T.useState(!1);return T.useEffect(()=>{const n=()=>{if(!e&&t.current){const r=t.current.getBoundingClientRect();r.top<window.innerHeight&&r.bottom>0&&(t.current.play(),i(!0))}};return window.addEventListener("scroll",n),n(),()=>window.removeEventListener("scroll",n)},[e]),a.jsxs(B7,{children:[a.jsx(V7,{children:"Color Palette"}),a.jsx(W7,{children:"The graphics are based on lines to show movement and flow, so I selected nude and soft colors that are not too bold. This allows the lines to stay visually dominant and visible. The palette also includes transparent tones, symbolizing party lights and ambiance, supporting the illustrations without distraction."}),a.jsx(U7,{children:a.jsx(H7,{ref:t,src:$7,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Color palette video"})})]})},G7="/Nooshin-Shahsavan-portfolio/assets/cap-intro2.1af16ea2.mp4",X7="/Nooshin-Shahsavan-portfolio/assets/print2.17cf24de.mp4",Z7=m.section`
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
`,q7=m.div`
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
`,fb=m.div`
  flex: 1 1 0;
  display: flex;
  justify-content: center;
`,mb=m.video`
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
`;const Q7=()=>a.jsx(Z7,{children:a.jsxs(q7,{children:[a.jsx(fb,{children:a.jsx(mb,{src:G7,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Cap Intro2 Video"})}),a.jsx(fb,{children:a.jsx(mb,{src:X7,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Print2 Video"})})]})}),K7="/Nooshin-Shahsavan-portfolio/assets/sbs-bag1.13c78bde.jpg",J7=m.section`
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
`,eL=m.h2`
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
`,tL=m.img`
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
`,iL=()=>a.jsxs(J7,{children:[a.jsx(eL,{children:"Mockups"}),a.jsx(tL,{src:K7,alt:"SBS Tote Bag Mockup"})]}),nL="/Nooshin-Shahsavan-portfolio/assets/sbs-tag.68232c39.jpg",rL="/Nooshin-Shahsavan-portfolio/assets/sbs-box.e26aaf9d.jpg",oL=m.section`
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
`,sL=m.div`
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
`,gb=m.img`
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
`,aL=()=>a.jsx(oL,{children:a.jsxs(sL,{children:[a.jsx(gb,{src:nL,alt:"SBS Tote Bag Mockup 2"}),a.jsx(gb,{src:rL,alt:"SBS Box Mockup"})]})}),lL="/Nooshin-Shahsavan-portfolio/assets/allin1.fa7d6a25.mp4",cL=m.section`
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
`;const dL=m.div`
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
`,uL=m.video`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
`,hL=()=>a.jsx(cL,{children:a.jsx(dL,{children:a.jsx(uL,{src:lL,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,"aria-label":"SBS All-in-One Video",preload:"metadata"})})}),pL="/Nooshin-Shahsavan-portfolio/assets/storyAll.989950ea.mp4",fL=m.section`
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
`,mL=m.video`
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
`,gL=()=>a.jsx(fL,{children:a.jsx(mL,{src:pL,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Story Video",preload:"metadata"})}),xL="/Nooshin-Shahsavan-portfolio/assets/story5.e9f81e75.mp4",wL=m.section`
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
`,yL=()=>a.jsx(wL,{children:a.jsx(vL,{src:xL,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Story Video",preload:"metadata"})}),bL="/Nooshin-Shahsavan-portfolio/assets/s1.2fe16319.png",kL="/Nooshin-Shahsavan-portfolio/assets/s2.606ae332.png",jL="/Nooshin-Shahsavan-portfolio/assets/s3.2e5423d9.png",SL="/Nooshin-Shahsavan-portfolio/assets/s4.691552ab.png",DL="/Nooshin-Shahsavan-portfolio/assets/8s.efb2d643.png",_L=[bL,kL,jL,SL,DL],CL=m.section`
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
`,PL=m.h2`
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
`,k0=m.p`
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
`,TL=m.div`
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
`,EL=m.div`
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
`,IL=m.img`  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`,Qs=m.span`
  color: #e4572e;
  font-weight: 400;
`;function AL(){return a.jsxs(CL,{children:[a.jsx(PL,{children:"Logo Design Process"}),a.jsx(k0,{children:"Exploring logo concepts and refinements."}),a.jsxs(k0,{children:["I noticed a natural ",a.jsx(Qs,{children:"connection"})," between the shape of the body and the ",a.jsx(Qs,{children:"curves"})," of the letter ",a.jsx(Qs,{children:'"S"'}),", which led me to explore how movement could be integrated into the typography. Using the motion and energy from the image, I stylized the letters ",a.jsx(Qs,{children:"S.B.S"})," into a unified, dynamic form. The final logo features curved lines that suggest motion and emotional freedom, making the mark feel alive and expressive."]}),a.jsxs(k0,{children:["The result is a logo that combines all three ",a.jsx(Qs,{children:"brand initials"})," (",a.jsx(Qs,{children:"S.B.S"}),") into a single, fluid design that works seamlessly across clothing graphics and brand applications."]}),a.jsx(TL,{children:_L.map((t,e)=>a.jsx(EL,{children:a.jsx(IL,{src:t,alt:`logo-process-${e}`,loading:"lazy"})},t+e))})]})}const ML="/Nooshin-Shahsavan-portfolio/assets/s-88.0805e3b5.png",m4="/Nooshin-Shahsavan-portfolio/assets/deli9.875dc27d.jpg",zL="/Nooshin-Shahsavan-portfolio/assets/mveen5.edb6dd91.png",g4="/Nooshin-Shahsavan-portfolio/assets/workday-phone.bd948a42.png",wu=[{image:ML,link:"/work/sbs",description:"SBS",alt:"SBS Work"},{image:m4,link:"/work/delicato",description:"Delicato",alt:"Deli Project"},{image:zL,link:"/work/veen",description:"Veen",alt:"Veen Shop"},{image:ew,link:"/work/zar",description:"Zar",alt:"Zar Gallery"},{image:g4,link:"/work/workday",description:"Workday App",alt:"Workday App"},{image:c4,link:"/work/UX-UI-2",description:"SaveFood App",alt:"saveFood App"},{image:vp,link:"/work/fun",description:"School Projects",alt:"School Projects"}],Os=({titleColor:t="#000000"})=>{const e=wd(),i=uS(),[n,r]=T.useState(!1),o=wu.findIndex(c=>e.pathname.startsWith(c.link)),s=o>-1?[wu[o],...wu.filter((c,d)=>d!==o)]:wu,l=c=>{i(c),r(!1),window.scrollTo(0,0)};return a.jsxs("div",{className:"menu-work-container",children:[a.jsx("h2",{className:"menu-work-title",style:{color:t},children:"Next Project"}),a.jsx("div",{className:"menu-work-grid",children:s.map((c,d)=>a.jsx("div",{className:`menu-work-cube${d===0?" active":""}`,onClick:()=>l(c.link),tabIndex:0,role:"button","aria-label":`Go to ${c.alt}`,children:a.jsxs("div",{className:"menu-work-img-wrapper",children:[a.jsx("img",{src:c.image,alt:c.alt,className:"menu-work-img"}),a.jsx("div",{className:"menu-work-desc",children:a.jsx("span",{children:c.description})})]})},c.link))})]})},FL="/Nooshin-Shahsavan-portfolio/assets/sbsintro.d8bee55b.mp4",RL=m.section`
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
`,LL=m.video`
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
`,NL=()=>a.jsx(RL,{children:a.jsx(LL,{src:FL,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Intro Video",preload:"metadata"})}),OL="/Nooshin-Shahsavan-portfolio/assets/story3.bd853697.mp4",$L=m.section`
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
`,VL=()=>a.jsx($L,{children:a.jsx(BL,{src:OL,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Social Media Story 3",preload:"metadata"})}),WL="/Nooshin-Shahsavan-portfolio/assets/story-1.e26e9252.mp4",UL=m.section`
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
`,YL=()=>a.jsx(UL,{children:a.jsx(HL,{src:WL,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"SBS Social Media Story 1",preload:"metadata"})}),GL=m.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  @media (max-width: 900px) {
    padding: 1.5rem;
  }
`,XL=m(L.div)`
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
`,ZL=m.span`
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
`,qL=(t,e,i=!0)=>({from:e,to:e+360,ease:"linear",duration:t,type:"tween",repeat:i?1/0:0}),Ks=(t,e)=>({rotate:qL(t,e),scale:{type:"spring",damping:20,stiffness:300}}),QL=({text:t,spinDuration:e=20,onHover:i="speedUp",className:n=""})=>{const r=Array.from(t),o=MA(),s=g5(0);T.useEffect(()=>{const d=s.get();o.start({rotate:d+360,scale:1,transition:Ks(e,d)})},[e,t,i,o]);const l=()=>{const d=s.get();if(!i)return;let u,p=1;switch(i){case"slowDown":u=Ks(e*2,d);break;case"speedUp":u=Ks(e/4,d);break;case"pause":u={rotate:{type:"spring",damping:20,stiffness:300},scale:{type:"spring",damping:20,stiffness:300}};break;case"goBonkers":u=Ks(e/20,d),p=.8;break;default:u=Ks(e,d)}o.start({rotate:d+360,scale:p,transition:u})},c=()=>{const d=s.get();o.start({rotate:d+360,scale:1,transition:Ks(e,d)})};return a.jsx(GL,{children:a.jsx(XL,{className:n,style:{rotate:s},initial:{rotate:0},animate:o,onMouseEnter:l,onMouseLeave:c,children:r.map((d,u)=>{const p=360/r.length*u,f=Math.PI/r.length,g=f*u,y=f*u,w=`rotateZ(${p}deg) translate3d(${g}px, ${y}px, 0)`;return a.jsx(ZL,{style:{transform:w,WebkitTransform:w},children:d},u)})})})},KL=m.div`
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
`,JL=m.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: left;
`,eN=m.button`
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
`,j0=[{id:"overview",label:"Overview",targetId:"sbs-overview"},{id:"challenges",label:"Key Challenges",targetId:"sbs-challenges"},{id:"logo",label:"Logo Design",targetId:"sbs-logo"},{id:"color",label:"Color Palette",targetId:"sbs-color"},{id:"typography",label:"Typography",targetId:"sbs-typography"},{id:"illustration",label:"Illustration",targetId:"sbs-illustration"},{id:"mockups",label:"Mockups",targetId:"sbs-mockups"},{id:"social-media",label:"Social Media",targetId:"sbs-social-media"}],tN=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("overview");q.useEffect(()=>{const o={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},s=new IntersectionObserver(l=>{l.forEach(c=>{if(c.isIntersecting){const d=c.target.id,u=j0.find(p=>p.targetId===d);u&&n(u.id)}})},o);return j0.forEach(l=>{const c=document.getElementById(l.targetId);c&&s.observe(c)}),()=>{s.disconnect()}},[]);const r=(o,s)=>{const l=document.getElementById(o);l&&(l.scrollIntoView({behavior:"smooth",block:"center"}),e(s))};return a.jsxs(KL,{children:[a.jsx(JL,{children:"Menu"}),j0.map(o=>a.jsx(eN,{isActive:i===o.id,isClicked:t===o.id,onClick:()=>r(o.targetId,o.id),children:o.label},o.id))]})},iN=m.div`
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
`,nN=_r`
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
`,xb=m.h2`
  width: 100vw;
  text-align: center;
  font-size: 2.1rem;
  font-weight: 700;
  color: #181818;
  margin: 2.5rem 0 1.5rem 0;
  letter-spacing: -1px;
`,rN=()=>a.jsxs(a.Fragment,{children:[a.jsxs(iN,{children:[a.jsx(rt,{title:"SBS Project | Nooshin Shahsavan - Brand Design & Identity",description:"Explore the SBS project - a comprehensive branding and design project by Nooshin Shahsavan featuring modern visual identity, logo design, and brand strategy.",keywords:"SBS project, brand design, logo design, visual identity, branding, Nooshin Shahsavan, design portfolio",image:"/src/assets/sbsimg/banner.png"}),a.jsx(nN,{}),a.jsx(tN,{}),a.jsxs("div",{id:"sbs-overview",children:[a.jsx(c7,{}),a.jsx(NL,{}),a.jsx(p7,{})]}),a.jsx("div",{id:"sbs-challenges",children:a.jsx(k7,{})}),a.jsx("div",{id:"sbs-logo",children:a.jsx(A7,{})}),a.jsx("div",{id:"sbs-logo-process",children:a.jsx(AL,{})}),a.jsx("div",{id:"sbs-color",children:a.jsx(Y7,{})}),a.jsx("div",{id:"sbs-typography",children:a.jsx(O7,{})}),a.jsxs("div",{id:"sbs-illustration",children:[a.jsx(xb,{children:"Illustration"}),a.jsx("p",{style:{fontSize:"1.08rem",color:"#444",fontWeight:"400",lineHeight:"1.5",maxWidth:"480px",margin:"0 auto 2.2rem auto",textAlign:"center"},children:"The illustration style uses curved lines and neutral, emotionless characters to reflect Gen Z's mood and the brand's sense of movement and freedom. The logo's form is echoed in every graphic, creating a cohesive and culturally relevant visual identity."}),a.jsx(Q7,{})]}),a.jsx("div",{id:"sbs-video",children:a.jsx(hL,{})}),a.jsx("div",{id:"sbs-brand-identity",children:a.jsx(QL,{text:"Set by Setti Brand Identity",spinDuration:18})}),a.jsxs("div",{id:"sbs-mockups",children:[a.jsx(iL,{}),a.jsx(aL,{})]}),a.jsxs("div",{id:"sbs-social-media",children:[a.jsx(xb,{children:"Social Media/Black Friday"}),a.jsx(VL,{}),a.jsx(YL,{})]}),a.jsxs("div",{id:"sbs-additional-mockups",children:[a.jsx(gL,{}),a.jsx(yL,{})]}),a.jsx(Os,{}),a.jsx(Ls,{})]}),a.jsx(Ns,{})]}),oN="/Nooshin-Shahsavan-portfolio/assets/story.ab3b6178.mp4",sN=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`,aN=m.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`,lN=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`,cN=m.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
`,dN=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,uN=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.2rem;
`,vu=m.div`
  min-width: 120px;
  text-align: center;
`,yu=m.div`
  font-size: 0.92rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 0.2em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,bu=m.div`
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
`,hN=()=>a.jsxs(sN,{id:"veen-overview",children:[a.jsx(aN,{children:"VEEN — Overview"}),a.jsx(lN,{children:"VEEN Studio is a newly established photography brand based in Vancouver, specializing in family and child photography. The goal of this project was to create a professional, heartfelt brand identity that reflects warmth, trust, creativity, and joy."}),a.jsx(cN,{children:a.jsx(dN,{src:oN,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Veen project video"})}),a.jsxs(uN,{children:[a.jsxs(vu,{children:[a.jsx(yu,{children:"Role"}),a.jsx(bu,{children:"Brand Designer"})]}),a.jsxs(vu,{children:[a.jsx(yu,{children:"Tools"}),a.jsx(bu,{children:"Illustrator, After Effects, Photoshop"})]}),a.jsxs(vu,{children:[a.jsx(yu,{children:"Timeline"}),a.jsx(bu,{children:"2 weeks"})]}),a.jsxs(vu,{children:[a.jsx(yu,{children:"Year"}),a.jsx(bu,{children:"2024"})]})]})]}),pN="/Nooshin-Shahsavan-portfolio/assets/brand-strategy.42b2bd80.png",fN=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`,mN=m.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`,gN=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`,xN=m.div`
  width: 340px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
`,wN=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,vN=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
  font-size: 1.13rem;
  font-weight: 600;
`,$l=m.span`
  color: #9ed4d1;
`,ku=m.span`
  color: #bdbdbd;
`;m.span`
  color: #f7b267;
`;m.span`
  color: #e07a5f;
`;m.span`
  color: #3d405b;
`;m.span`
  color: #81b29a;
`;const yN=()=>a.jsxs(fN,{children:[a.jsx(mN,{children:"What I did ..."}),a.jsx(gN,{children:"I was responsible for designing a logo system, selecting a color palette, choosing typography, and creating social media content to establish a strong and cohesive brand presence."}),a.jsx(xN,{children:a.jsx(wN,{src:pN,alt:"Brand Strategy Visual"})}),a.jsxs(vN,{children:[a.jsx($l,{children:"Aim"}),a.jsx(ku,{children:"➝"}),a.jsx($l,{children:"Create warm brand identity"}),a.jsx(ku,{children:"➝"}),a.jsx($l,{children:"Reflect Family + joy and trust"}),a.jsx(ku,{children:"➝"}),a.jsx($l,{children:"Design visuals"}),a.jsx(ku,{children:"➝"}),a.jsx($l,{children:"Build strong online presence"})]})]}),bN="/Nooshin-Shahsavan-portfolio/assets/scatch.016cf010.jpg",kN=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`,jN=m.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`,SN=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`,DN=m.div`
  width: 340px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
`,_N=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,wb=m.span`
  display: block;
  font-size: 1rem;
  color:rgb(160, 160, 160);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.35em;
  text-align: center;
`,vb=m.p`
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`,di=m.span`
  color: #9ed4d1;
  font-weight: 600;
`,CN=()=>a.jsxs(kN,{id:"veen-logo",children:[a.jsx(jN,{children:"Logo Design"}),a.jsxs(SN,{children:["Based on the brand’s values and target audience families and children, with an emphasis on conveying warm and comforting vibes I considered several key points. The client preferred a ",a.jsx(di,{children:"wordmark"})," combined with a ",a.jsx(di,{children:"photography-related symbol"}),". On the other hand, I also needed to visually reflect the brand’s core values: ",a.jsx(di,{children:"family"})," and ",a.jsx(di,{children:"warmth"}),"."]}),a.jsx(DN,{children:a.jsx(_N,{src:bN,alt:"Logo Sketch"})}),a.jsx(wb,{children:"To achieve this..."}),a.jsxs(vb,{children:["I simplified the shape of a camera into a clean, graphic form and placed it at the center of the word “VEEN,” replacing the two ",a.jsx(di,{children:"“E”"}),"s with the camera shape. This created a strong visual connection between the brand name and photography."]}),a.jsx(wb,{children:"To reinforce the concept of family,"}),a.jsxs(vb,{children:["I used a ",a.jsx(di,{children:"square"})," shape(",a.jsx(di,{children:"camera body"}),") to represent ",a.jsx(di,{children:"home"})," and security , and added a ",a.jsx(di,{children:"circle"})," inside the square, symbolizing ",a.jsx(di,{children:"family"}),", ",a.jsx(di,{children:"love"})," , and ",a.jsx(di,{children:"the flow of life"})," also resembling the camera ",a.jsx(di,{children:"lens"})," .",a.jsx("br",{}),a.jsx("br",{}),"Secondary Logo: A minimal ",a.jsx(di,{children:"V+N"})," monogram, derived from the main logo, designed for versatile use in stickers, watermarks, and small-scale branding."]})]}),PN="/Nooshin-Shahsavan-portfolio/assets/veenlogo1.d6c63d8c.jpg",TN="/Nooshin-Shahsavan-portfolio/assets/veenlogo-2.5fe5cb90.jpg",EN="/Nooshin-Shahsavan-portfolio/assets/veenlogo-3.fa1007ca.jpg",IN=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`,AN=m.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 48px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 24px;
  }
`,S0=m.img`
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
`,MN=()=>a.jsx(IN,{id:"veen-color",children:a.jsxs(AN,{children:[a.jsx(S0,{src:PN,alt:"Veen Logo 1"}),a.jsx(S0,{src:TN,alt:"Veen Logo 2"}),a.jsx(S0,{src:EN,alt:"Veen Logo 3"})]})}),zN="/Nooshin-Shahsavan-portfolio/assets/final.0e6cb83e.mp4",FN=m.section`
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
`,RN=m.div`
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
`,LN=m.video`
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
`,NN=()=>a.jsx(FN,{children:a.jsx(RN,{children:a.jsx(LN,{src:zN,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Final video"})})}),ON="/Nooshin-Shahsavan-portfolio/assets/socialveen1.9b39d379.jpg",$N=m.section`
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
`,BN=m.div`
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
`,VN=m.img`
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
`,WN=()=>a.jsx($N,{children:a.jsx(BN,{children:a.jsx(VN,{src:ON,alt:"Veen social media design"})})}),UN="/Nooshin-Shahsavan-portfolio/assets/veencolor.c62c0ec6.mp4",HN=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`,YN=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`,GN=m.div`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`,XN=m.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
`,ZN=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,qN=()=>{const t=T.useRef(null),[e,i]=T.useState(!1);return T.useEffect(()=>{const n=()=>{if(!e&&t.current){const r=t.current.getBoundingClientRect();r.top<window.innerHeight&&r.bottom>0&&(t.current.play(),i(!0))}};return window.addEventListener("scroll",n),n(),()=>window.removeEventListener("scroll",n)},[e]),a.jsxs(HN,{children:[a.jsx(YN,{children:"Color Palette"}),a.jsx(GN,{children:"A soft, modern color system designed to evoke warmth, trust, and joy perfect for family photography. Calming teals symbolize connection, balanced with peach, cream, and coral for a gentle yet vibrant emotional tone."}),a.jsx(XN,{children:a.jsx(ZN,{ref:t,src:UN,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Color palette video"})})]})},QN="/Nooshin-Shahsavan-portfolio/assets/vv.596f8411.mp4",KN=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`,JN=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`,eO=m.div`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`,tO=m.div`
  width: 500px;
  max-width: 90vw;
  margin: 0 auto 2.2rem auto;
  border-radius: 16px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
`,iO=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,nO=()=>{const t=T.useRef(null),[e,i]=T.useState(!1);return T.useEffect(()=>{const n=()=>{if(!e&&t.current){const r=t.current.getBoundingClientRect();r.top<window.innerHeight&&r.bottom>0&&(t.current.play(),i(!0))}};return window.addEventListener("scroll",n),n(),()=>window.removeEventListener("scroll",n)},[e]),a.jsxs(KN,{children:[a.jsx(JN,{children:"Typography"}),a.jsx(eO,{children:"The typography system was carefully chosen to reflect warmth and professionalism, ensuring excellent readability across all applications."}),a.jsx(tO,{children:a.jsx(iO,{ref:t,src:QN,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Typography video"})})]})},rO="/Nooshin-Shahsavan-portfolio/assets/mveen1.0759dcdb.jpg",oO=m.section`
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
`,sO=m.div`
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
`,aO=m.img`
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
`,lO=()=>a.jsx(oO,{children:a.jsx(sO,{children:a.jsx(aO,{src:rO,alt:"Veen design mockup"})})}),cO="/Nooshin-Shahsavan-portfolio/assets/envelop.58d96898.png",dO=m.div`
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
`,uO=m.div`
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
`,hO=m.img`
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
`,pO=()=>a.jsx(dO,{children:a.jsx(uO,{children:a.jsx(hO,{src:cO,alt:"Veen Envelope Design"})})}),fO="/Nooshin-Shahsavan-portfolio/assets/v1.7dc01232.png",mO="/Nooshin-Shahsavan-portfolio/assets/v2.afacf3bc.jpeg",gO="/Nooshin-Shahsavan-portfolio/assets/v3.5034fa44.png",xO="/Nooshin-Shahsavan-portfolio/assets/v4.c9d7c2c6.jpg",wO=[fO,mO,gO,xO],vO=m.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  box-sizing: border-box;
`,yO=m.h2`
  width: 100%;
  text-align: center;
  color: #181818;
  font-size: 2.2rem;
  font-weight: 700;
  margin: 2.5rem 0 2rem 0;
  letter-spacing: 0.04em;
`,bO=m.div`
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
`,kO=m.div`
  display: flex;
  gap: 2.2vw;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    gap: 10px;
  }
`,jO=m.div`
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
`,SO=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`,DO=m.p`
  font-size: 1rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 2.2rem auto 0 auto;
  text-align: center;
`;function _O(){return a.jsxs(vO,{id:"veen-logo-explorations",children:[a.jsx(yO,{children:"Logo Explorations"}),a.jsx(bO,{children:a.jsx(kO,{children:wO.map((t,e)=>a.jsx(jO,{children:a.jsx(SO,{src:t,alt:`logo-${e+1}`,loading:"lazy"})},t+e))})}),a.jsx(DO,{children:"Through this approach, I successfully addressed both sides of the design: incorporating a recognizable camera shape and embedding symbolic elements that reflect the concept of family. None of these choices were accidental; they are all grounded in semiotics."})]})}var ox={exports:{}};(function(t,e){(function(i,n){n(e)})(k4,function(i){class n{constructor(h,x){this.state={angle:0,area:[],position:{x:0,y:0},hardAngle:0,hardDrawingAngle:0},this.createdDensity=x,this.nowDrawingDensity=this.createdDensity,this.render=h}setDensity(h){this.createdDensity=h,this.nowDrawingDensity=h}setDrawingDensity(h){this.nowDrawingDensity=h}setPosition(h){this.state.position=h}setAngle(h){this.state.angle=h}setArea(h){this.state.area=h}setHardDrawingAngle(h){this.state.hardDrawingAngle=h}setHardAngle(h){this.state.hardAngle=h,this.state.hardDrawingAngle=h}setOrientation(h){this.orientation=h}getDrawingDensity(){return this.nowDrawingDensity}getDensity(){return this.createdDensity}getHardAngle(){return this.state.hardAngle}}class r extends n{constructor(h,x,k){super(h,k),this.image=null,this.isLoad=!1,this.loadingAngle=0,this.image=new Image,this.image.src=x}draw(h){const x=this.render.getContext(),k=this.render.convertToGlobal(this.state.position),S=this.render.getRect().pageWidth,_=this.render.getRect().height;x.save(),x.translate(k.x,k.y),x.beginPath();for(let C of this.state.area)C!==null&&(C=this.render.convertToGlobal(C),x.lineTo(C.x-k.x,C.y-k.y));x.rotate(this.state.angle),x.clip(),this.isLoad?x.drawImage(this.image,0,0,S,_):this.drawLoader(x,{x:0,y:0},S,_),x.restore()}simpleDraw(h){const x=this.render.getRect(),k=this.render.getContext(),S=x.pageWidth,_=x.height,C=h===1?x.left+x.pageWidth:x.left,E=x.top;this.isLoad?k.drawImage(this.image,C,E,S,_):this.drawLoader(k,{x:C,y:E},S,_)}drawLoader(h,x,k,S){h.beginPath(),h.strokeStyle="rgb(200, 200, 200)",h.fillStyle="rgb(255, 255, 255)",h.lineWidth=1,h.rect(x.x+1,x.y+1,k-1,S-1),h.stroke(),h.fill();const _={x:x.x+k/2,y:x.y+S/2};h.beginPath(),h.lineWidth=10,h.arc(_.x,_.y,20,this.loadingAngle,3*Math.PI/2+this.loadingAngle),h.stroke(),h.closePath(),this.loadingAngle+=.07,this.loadingAngle>=2*Math.PI&&(this.loadingAngle=0)}load(){this.isLoad||(this.image.onload=()=>{this.isLoad=!0})}newTemporaryCopy(){return this}getTemporaryCopy(){return this}hideTemporaryCopy(){}}class o{constructor(h,x){this.pages=[],this.currentPageIndex=0,this.currentSpreadIndex=0,this.landscapeSpread=[],this.portraitSpread=[],this.render=x,this.app=h,this.currentPageIndex=0,this.isShowCover=this.app.getSettings().showCover}destroy(){this.pages=[]}createSpread(){this.landscapeSpread=[],this.portraitSpread=[];for(let x=0;x<this.pages.length;x++)this.portraitSpread.push([x]);let h=0;this.isShowCover&&(this.pages[0].setDensity("hard"),this.landscapeSpread.push([h]),h++);for(let x=h;x<this.pages.length;x+=2)x<this.pages.length-1?this.landscapeSpread.push([x,x+1]):(this.landscapeSpread.push([x]),this.pages[x].setDensity("hard"))}getSpread(){return this.render.getOrientation()==="landscape"?this.landscapeSpread:this.portraitSpread}getSpreadIndexByPage(h){const x=this.getSpread();for(let k=0;k<x.length;k++)if(h===x[k][0]||h===x[k][1])return k;return null}getPageCount(){return this.pages.length}getPages(){return this.pages}getPage(h){if(h>=0&&h<this.pages.length)return this.pages[h];throw new Error("Invalid page number")}nextBy(h){const x=this.pages.indexOf(h);return x<this.pages.length-1?this.pages[x+1]:null}prevBy(h){const x=this.pages.indexOf(h);return x>0?this.pages[x-1]:null}getFlippingPage(h){const x=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return h===0?this.pages[x].newTemporaryCopy():this.pages[x-1];{const k=h===0?this.getSpread()[x+1]:this.getSpread()[x-1];return k.length===1||h===0?this.pages[k[0]]:this.pages[k[1]]}}getBottomPage(h){const x=this.currentSpreadIndex;if(this.render.getOrientation()==="portrait")return h===0?this.pages[x+1]:this.pages[x-1];{const k=h===0?this.getSpread()[x+1]:this.getSpread()[x-1];return k.length===1?this.pages[k[0]]:h===0?this.pages[k[1]]:this.pages[k[0]]}}showNext(){this.currentSpreadIndex<this.getSpread().length&&(this.currentSpreadIndex++,this.showSpread())}showPrev(){this.currentSpreadIndex>0&&(this.currentSpreadIndex--,this.showSpread())}getCurrentPageIndex(){return this.currentPageIndex}show(h=null){if(h===null&&(h=this.currentPageIndex),h<0||h>=this.pages.length)return;const x=this.getSpreadIndexByPage(h);x!==null&&(this.currentSpreadIndex=x,this.showSpread())}getCurrentSpreadIndex(){return this.currentSpreadIndex}setCurrentSpreadIndex(h){if(!(h>=0&&h<this.getSpread().length))throw new Error("Invalid page");this.currentSpreadIndex=h}showSpread(){const h=this.getSpread()[this.currentSpreadIndex];h.length===2?(this.render.setLeftPage(this.pages[h[0]]),this.render.setRightPage(this.pages[h[1]])):this.render.getOrientation()==="landscape"&&h[0]===this.pages.length-1?(this.render.setLeftPage(this.pages[h[0]]),this.render.setRightPage(null)):(this.render.setLeftPage(null),this.render.setRightPage(this.pages[h[0]])),this.currentPageIndex=h[0],this.app.updatePageIndex(this.currentPageIndex)}}class s extends o{constructor(h,x,k){super(h,x),this.imagesHref=k}load(){for(const h of this.imagesHref){const x=new r(this.render,h,"soft");x.load(),this.pages.push(x)}this.createSpread()}}class l{static GetDistanceBetweenTwoPoint(h,x){return h===null||x===null?1/0:Math.sqrt(Math.pow(x.x-h.x,2)+Math.pow(x.y-h.y,2))}static GetSegmentLength(h){return l.GetDistanceBetweenTwoPoint(h[0],h[1])}static GetAngleBetweenTwoLine(h,x){const k=h[0].y-h[1].y,S=x[0].y-x[1].y,_=h[1].x-h[0].x,C=x[1].x-x[0].x;return Math.acos((k*S+_*C)/(Math.sqrt(k*k+_*_)*Math.sqrt(S*S+C*C)))}static PointInRect(h,x){return x===null?null:x.x>=h.left&&x.x<=h.width+h.left&&x.y>=h.top&&x.y<=h.top+h.height?x:null}static GetRotatedPoint(h,x,k){return{x:h.x*Math.cos(k)+h.y*Math.sin(k)+x.x,y:h.y*Math.cos(k)-h.x*Math.sin(k)+x.y}}static LimitPointToCircle(h,x,k){if(l.GetDistanceBetweenTwoPoint(h,k)<=x)return k;const S=h.x,_=h.y,C=k.x,E=k.y;let z=Math.sqrt(Math.pow(x,2)*Math.pow(S-C,2)/(Math.pow(S-C,2)+Math.pow(_-E,2)))+S;k.x<0&&(z*=-1);let A=(z-S)*(_-E)/(S-C)+_;return S-C+_===0&&(A=x),{x:z,y:A}}static GetIntersectBetweenTwoSegment(h,x,k){return l.PointInRect(h,l.GetIntersectBeetwenTwoLine(x,k))}static GetIntersectBeetwenTwoLine(h,x){const k=h[0].y-h[1].y,S=x[0].y-x[1].y,_=h[1].x-h[0].x,C=x[1].x-x[0].x,E=h[0].x*h[1].y-h[1].x*h[0].y,z=x[0].x*x[1].y-x[1].x*x[0].y,A=k*z-S*E,N=_*z-C*E,O=-(E*C-z*_)/(k*C-S*_),W=-(k*z-S*E)/(k*C-S*_);if(isFinite(O)&&isFinite(W))return{x:O,y:W};if(Math.abs(A-N)<.1)throw new Error("Segment included");return null}static GetCordsFromTwoPoint(h,x){const k=Math.abs(h.x-x.x),S=Math.abs(h.y-x.y),_=Math.max(k,S),C=[h];function E(z,A,N,O,W){return A>z?z+W*(N/O):A<z?z-W*(N/O):z}for(let z=1;z<=_;z+=1)C.push({x:E(h.x,x.x,k,_,z),y:E(h.y,x.y,S,_,z)});return C}}class c extends n{constructor(h,x,k){super(h,k),this.copiedElement=null,this.temporaryCopy=null,this.isLoad=!1,this.element=x,this.element.classList.add("stf__item"),this.element.classList.add("--"+k)}newTemporaryCopy(){return this.nowDrawingDensity==="hard"?this:(this.temporaryCopy===null&&(this.copiedElement=this.element.cloneNode(!0),this.element.parentElement.appendChild(this.copiedElement),this.temporaryCopy=new c(this.render,this.copiedElement,this.nowDrawingDensity)),this.getTemporaryCopy())}getTemporaryCopy(){return this.temporaryCopy}hideTemporaryCopy(){this.temporaryCopy!==null&&(this.copiedElement.remove(),this.copiedElement=null,this.temporaryCopy=null)}draw(h){const x=h||this.nowDrawingDensity,k=this.render.convertToGlobal(this.state.position),S=this.render.getRect().pageWidth,_=this.render.getRect().height;this.element.classList.remove("--simple");const C=`
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
            z-index: ${this.render.getSettings().startZIndex+1};`}getElement(){return this.element}load(){this.isLoad=!0}setOrientation(h){super.setOrientation(h),this.element.classList.remove("--left","--right"),this.element.classList.add(h===1?"--right":"--left")}setDrawingDensity(h){this.element.classList.remove("--soft","--hard"),this.element.classList.add("--"+h),super.setDrawingDensity(h)}}class d extends o{constructor(h,x,k,S){super(h,x),this.element=k,this.pagesElement=S}load(){for(const h of this.pagesElement){const x=new c(this.render,h,h.dataset.density==="hard"?"hard":"soft");x.load(),this.pages.push(x)}this.createSpread()}}class u{constructor(h,x,k,S){this.direction=h,this.corner=x,this.topIntersectPoint=null,this.sideIntersectPoint=null,this.bottomIntersectPoint=null,this.pageWidth=parseInt(k,10),this.pageHeight=parseInt(S,10)}calc(h){try{return this.position=this.calcAngleAndPosition(h),this.calculateIntersectPoint(this.position),!0}catch{return!1}}getFlippingClipArea(){const h=[];let x=!1;return h.push(this.rect.topLeft),h.push(this.topIntersectPoint),this.sideIntersectPoint===null?x=!0:(h.push(this.sideIntersectPoint),this.bottomIntersectPoint===null&&(x=!1)),h.push(this.bottomIntersectPoint),(x||this.corner==="bottom")&&h.push(this.rect.bottomLeft),h}getBottomClipArea(){const h=[];return h.push(this.topIntersectPoint),this.corner==="top"?h.push({x:this.pageWidth,y:0}):(this.topIntersectPoint!==null&&h.push({x:this.pageWidth,y:0}),h.push({x:this.pageWidth,y:this.pageHeight})),this.sideIntersectPoint!==null?l.GetDistanceBetweenTwoPoint(this.sideIntersectPoint,this.topIntersectPoint)>=10&&h.push(this.sideIntersectPoint):this.corner==="top"&&h.push({x:this.pageWidth,y:this.pageHeight}),h.push(this.bottomIntersectPoint),h.push(this.topIntersectPoint),h}getAngle(){return this.direction===0?-this.angle:this.angle}getRect(){return this.rect}getPosition(){return this.position}getActiveCorner(){return this.direction===0?this.rect.topLeft:this.rect.topRight}getDirection(){return this.direction}getFlippingProgress(){return Math.abs((this.position.x-this.pageWidth)/(2*this.pageWidth)*100)}getCorner(){return this.corner}getBottomPagePosition(){return this.direction===1?{x:this.pageWidth,y:0}:{x:0,y:0}}getShadowStartPoint(){return this.corner==="top"?this.topIntersectPoint:this.sideIntersectPoint!==null?this.sideIntersectPoint:this.topIntersectPoint}getShadowAngle(){const h=l.GetAngleBetweenTwoLine(this.getSegmentToShadowLine(),[{x:0,y:0},{x:this.pageWidth,y:0}]);return this.direction===0?h:Math.PI-h}calcAngleAndPosition(h){let x=h;if(this.updateAngleAndGeometry(x),x=this.corner==="top"?this.checkPositionAtCenterLine(x,{x:0,y:0},{x:0,y:this.pageHeight}):this.checkPositionAtCenterLine(x,{x:0,y:this.pageHeight},{x:0,y:0}),Math.abs(x.x-this.pageWidth)<1&&Math.abs(x.y)<1)throw new Error("Point is too small");return x}updateAngleAndGeometry(h){this.angle=this.calculateAngle(h),this.rect=this.getPageRect(h)}calculateAngle(h){const x=this.pageWidth-h.x+1,k=this.corner==="bottom"?this.pageHeight-h.y:h.y;let S=2*Math.acos(x/Math.sqrt(k*k+x*x));k<0&&(S=-S);const _=Math.PI-S;if(!isFinite(S)||_>=0&&_<.003)throw new Error("The G point is too small");return this.corner==="bottom"&&(S=-S),S}getPageRect(h){return this.corner==="top"?this.getRectFromBasePoint([{x:0,y:0},{x:this.pageWidth,y:0},{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}],h):this.getRectFromBasePoint([{x:0,y:-this.pageHeight},{x:this.pageWidth,y:-this.pageHeight},{x:0,y:0},{x:this.pageWidth,y:0}],h)}getRectFromBasePoint(h,x){return{topLeft:this.getRotatedPoint(h[0],x),topRight:this.getRotatedPoint(h[1],x),bottomLeft:this.getRotatedPoint(h[2],x),bottomRight:this.getRotatedPoint(h[3],x)}}getRotatedPoint(h,x){return{x:h.x*Math.cos(this.angle)+h.y*Math.sin(this.angle)+x.x,y:h.y*Math.cos(this.angle)-h.x*Math.sin(this.angle)+x.y}}calculateIntersectPoint(h){const x={left:-1,top:-1,width:this.pageWidth+2,height:this.pageHeight+2};this.corner==="top"?(this.topIntersectPoint=l.GetIntersectBetweenTwoSegment(x,[h,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=l.GetIntersectBetweenTwoSegment(x,[h,this.rect.bottomLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=l.GetIntersectBetweenTwoSegment(x,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}])):(this.topIntersectPoint=l.GetIntersectBetweenTwoSegment(x,[this.rect.topLeft,this.rect.topRight],[{x:0,y:0},{x:this.pageWidth,y:0}]),this.sideIntersectPoint=l.GetIntersectBetweenTwoSegment(x,[h,this.rect.topLeft],[{x:this.pageWidth,y:0},{x:this.pageWidth,y:this.pageHeight}]),this.bottomIntersectPoint=l.GetIntersectBetweenTwoSegment(x,[this.rect.bottomLeft,this.rect.bottomRight],[{x:0,y:this.pageHeight},{x:this.pageWidth,y:this.pageHeight}]))}checkPositionAtCenterLine(h,x,k){let S=h;const _=l.LimitPointToCircle(x,this.pageWidth,S);S!==_&&(S=_,this.updateAngleAndGeometry(S));const C=Math.sqrt(Math.pow(this.pageWidth,2)+Math.pow(this.pageHeight,2));let E=this.rect.bottomRight,z=this.rect.topLeft;if(this.corner==="bottom"&&(E=this.rect.topRight,z=this.rect.bottomLeft),E.x<=0){const A=l.LimitPointToCircle(k,C,z);A!==S&&(S=A,this.updateAngleAndGeometry(S))}return S}getSegmentToShadowLine(){const h=this.getShadowStartPoint();return[h,h!==this.sideIntersectPoint&&this.sideIntersectPoint!==null?this.sideIntersectPoint:this.bottomIntersectPoint]}}class p{constructor(h,x){this.flippingPage=null,this.bottomPage=null,this.calc=null,this.state="read",this.render=h,this.app=x}fold(h){this.setState("user_fold"),this.calc===null&&this.start(h),this.do(this.render.convertToPage(h))}flip(h){if(this.app.getSettings().disableFlipByClick&&!this.isPointOnCorners(h)||(this.calc!==null&&this.render.finishAnimation(),!this.start(h)))return;const x=this.getBoundsRect();this.setState("flipping");const k=x.height/10,S=this.calc.getCorner()==="bottom"?x.height-k:k,_=this.calc.getCorner()==="bottom"?x.height:0;this.calc.calc({x:x.pageWidth-k,y:S}),this.animateFlippingTo({x:x.pageWidth-k,y:S},{x:-x.pageWidth,y:_},!0)}start(h){this.reset();const x=this.render.convertToBook(h),k=this.getBoundsRect(),S=this.getDirectionByPoint(x),_=x.y>=k.height/2?"bottom":"top";if(!this.checkDirection(S))return!1;try{if(this.flippingPage=this.app.getPageCollection().getFlippingPage(S),this.bottomPage=this.app.getPageCollection().getBottomPage(S),this.render.getOrientation()==="landscape")if(S===1){const C=this.app.getPageCollection().nextBy(this.flippingPage);C!==null&&this.flippingPage.getDensity()!==C.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),C.setDrawingDensity("hard"))}else{const C=this.app.getPageCollection().prevBy(this.flippingPage);C!==null&&this.flippingPage.getDensity()!==C.getDensity()&&(this.flippingPage.setDrawingDensity("hard"),C.setDrawingDensity("hard"))}return this.render.setDirection(S),this.calc=new u(S,_,k.pageWidth.toString(10),k.height.toString(10)),!0}catch{return!1}}do(h){if(this.calc!==null&&this.calc.calc(h)){const x=this.calc.getFlippingProgress();this.bottomPage.setArea(this.calc.getBottomClipArea()),this.bottomPage.setPosition(this.calc.getBottomPagePosition()),this.bottomPage.setAngle(0),this.bottomPage.setHardAngle(0),this.flippingPage.setArea(this.calc.getFlippingClipArea()),this.flippingPage.setPosition(this.calc.getActiveCorner()),this.flippingPage.setAngle(this.calc.getAngle()),this.calc.getDirection()===0?this.flippingPage.setHardAngle(90*(200-2*x)/100):this.flippingPage.setHardAngle(-90*(200-2*x)/100),this.render.setPageRect(this.calc.getRect()),this.render.setBottomPage(this.bottomPage),this.render.setFlippingPage(this.flippingPage),this.render.setShadowData(this.calc.getShadowStartPoint(),this.calc.getShadowAngle(),x,this.calc.getDirection())}}flipToPage(h,x){const k=this.app.getPageCollection().getCurrentSpreadIndex(),S=this.app.getPageCollection().getSpreadIndexByPage(h);try{S>k&&(this.app.getPageCollection().setCurrentSpreadIndex(S-1),this.flipNext(x)),S<k&&(this.app.getPageCollection().setCurrentSpreadIndex(S+1),this.flipPrev(x))}catch{}}flipNext(h){this.flip({x:this.render.getRect().left+2*this.render.getRect().pageWidth-10,y:h==="top"?1:this.render.getRect().height-2})}flipPrev(h){this.flip({x:10,y:h==="top"?1:this.render.getRect().height-2})}stopMove(){if(this.calc===null)return;const h=this.calc.getPosition(),x=this.getBoundsRect(),k=this.calc.getCorner()==="bottom"?x.height:0;h.x<=0?this.animateFlippingTo(h,{x:-x.pageWidth,y:k},!0):this.animateFlippingTo(h,{x:x.pageWidth,y:k},!1)}showCorner(h){if(!this.checkState("read","fold_corner"))return;const x=this.getBoundsRect(),k=x.pageWidth;if(this.isPointOnCorners(h))if(this.calc===null){if(!this.start(h))return;this.setState("fold_corner"),this.calc.calc({x:k-1,y:1});const S=50,_=this.calc.getCorner()==="bottom"?x.height-1:1,C=this.calc.getCorner()==="bottom"?x.height-S:S;this.animateFlippingTo({x:k-1,y:_},{x:k-S,y:C},!1,!1)}else this.do(this.render.convertToPage(h));else this.setState("read"),this.render.finishAnimation(),this.stopMove()}animateFlippingTo(h,x,k,S=!0){const _=l.GetCordsFromTwoPoint(h,x),C=[];for(const z of _)C.push(()=>this.do(z));const E=this.getAnimationDuration(_.length);this.render.startAnimation(C,E,()=>{this.calc&&(k&&(this.calc.getDirection()===1?this.app.turnToPrevPage():this.app.turnToNextPage()),S&&(this.render.setBottomPage(null),this.render.setFlippingPage(null),this.render.clearShadow(),this.setState("read"),this.reset()))})}getCalculation(){return this.calc}getState(){return this.state}setState(h){this.state!==h&&(this.app.updateState(h),this.state=h)}getDirectionByPoint(h){const x=this.getBoundsRect();if(this.render.getOrientation()==="portrait"){if(h.x-x.pageWidth<=x.width/5)return 1}else if(h.x<x.width/2)return 1;return 0}getAnimationDuration(h){const x=this.app.getSettings().flippingTime;return h>=1e3?x:h/1e3*x}checkDirection(h){return h===0?this.app.getCurrentPageIndex()<this.app.getPageCount()-1:this.app.getCurrentPageIndex()>=1}reset(){this.calc=null,this.flippingPage=null,this.bottomPage=null}getBoundsRect(){return this.render.getRect()}checkState(...h){for(const x of h)if(this.state===x)return!0;return!1}isPointOnCorners(h){const x=this.getBoundsRect(),k=x.pageWidth,S=Math.sqrt(Math.pow(k,2)+Math.pow(x.height,2))/5,_=this.render.convertToBook(h);return _.x>0&&_.y>0&&_.x<x.width&&_.y<x.height&&(_.x<S||_.x>x.width-S)&&(_.y<S||_.y>x.height-S)}}class f{constructor(h,x){this.leftPage=null,this.rightPage=null,this.flippingPage=null,this.bottomPage=null,this.direction=null,this.orientation=null,this.shadow=null,this.animation=null,this.pageRect=null,this.boundsRect=null,this.timer=0,this.safari=!1,this.setting=x,this.app=h;const k=new RegExp("Version\\/[\\d\\.]+.*Safari/");this.safari=k.exec(window.navigator.userAgent)!==null}render(h){if(this.animation!==null){const x=Math.round((h-this.animation.startedAt)/this.animation.durationFrame);x<this.animation.frames.length?this.animation.frames[x]():(this.animation.onAnimateEnd(),this.animation=null)}this.timer=h,this.drawFrame()}start(){this.update();const h=x=>{this.render(x),requestAnimationFrame(h)};requestAnimationFrame(h)}startAnimation(h,x,k){this.finishAnimation(),this.animation={frames:h,duration:x,durationFrame:x/h.length,onAnimateEnd:k,startedAt:this.timer}}finishAnimation(){this.animation!==null&&(this.animation.frames[this.animation.frames.length-1](),this.animation.onAnimateEnd!==null&&this.animation.onAnimateEnd()),this.animation=null}update(){this.boundsRect=null;const h=this.calculateBoundsRect();this.orientation!==h&&(this.orientation=h,this.app.updateOrientation(h))}calculateBoundsRect(){let h="landscape";const x=this.getBlockWidth(),k=x/2,S=this.getBlockHeight()/2,_=this.setting.width/this.setting.height;let C=this.setting.width,E=this.setting.height,z=k-C;return this.setting.size==="stretch"?(x<2*this.setting.minWidth&&this.app.getSettings().usePortrait&&(h="portrait"),C=h==="portrait"?this.getBlockWidth():this.getBlockWidth()/2,C>this.setting.maxWidth&&(C=this.setting.maxWidth),E=C/_,E>this.getBlockHeight()&&(E=this.getBlockHeight(),C=E*_),z=h==="portrait"?k-C/2-C:k-C):x<2*C&&this.app.getSettings().usePortrait&&(h="portrait",z=k-C/2-C),this.boundsRect={left:z,top:S-E/2,width:2*C,height:E,pageWidth:C},h}setShadowData(h,x,k,S){if(!this.app.getSettings().drawShadow)return;const _=100*this.getSettings().maxShadowOpacity;this.shadow={pos:h,angle:x,width:3*this.getRect().pageWidth/4*k/100,opacity:(100-k)*_/100/100,direction:S,progress:2*k}}clearShadow(){this.shadow=null}getBlockWidth(){return this.app.getUI().getDistElement().offsetWidth}getBlockHeight(){return this.app.getUI().getDistElement().offsetHeight}getDirection(){return this.direction}getRect(){return this.boundsRect===null&&this.calculateBoundsRect(),this.boundsRect}getSettings(){return this.app.getSettings()}getOrientation(){return this.orientation}setPageRect(h){this.pageRect=h}setDirection(h){this.direction=h}setRightPage(h){h!==null&&h.setOrientation(1),this.rightPage=h}setLeftPage(h){h!==null&&h.setOrientation(0),this.leftPage=h}setBottomPage(h){h!==null&&h.setOrientation(this.direction===1?0:1),this.bottomPage=h}setFlippingPage(h){h!==null&&h.setOrientation(this.direction===0&&this.orientation!=="portrait"?0:1),this.flippingPage=h}convertToBook(h){const x=this.getRect();return{x:h.x-x.left,y:h.y-x.top}}isSafari(){return this.safari}convertToPage(h,x){x||(x=this.direction);const k=this.getRect();return{x:x===0?h.x-k.left-k.width/2:k.width/2-h.x+k.left,y:h.y-k.top}}convertToGlobal(h,x){if(x||(x=this.direction),h==null)return null;const k=this.getRect();return{x:x===0?h.x+k.left+k.width/2:k.width/2-h.x+k.left,y:h.y+k.top}}convertRectToGlobal(h,x){return x||(x=this.direction),{topLeft:this.convertToGlobal(h.topLeft,x),topRight:this.convertToGlobal(h.topRight,x),bottomLeft:this.convertToGlobal(h.bottomLeft,x),bottomRight:this.convertToGlobal(h.bottomRight,x)}}}class g extends f{constructor(h,x,k){super(h,x),this.canvas=k,this.ctx=k.getContext("2d")}getContext(){return this.ctx}reload(){}drawFrame(){this.clear(),this.orientation!=="portrait"&&this.leftPage!=null&&this.leftPage.simpleDraw(0),this.rightPage!=null&&this.rightPage.simpleDraw(1),this.bottomPage!=null&&this.bottomPage.draw(),this.drawBookShadow(),this.flippingPage!=null&&this.flippingPage.draw(),this.shadow!=null&&(this.drawOuterShadow(),this.drawInnerShadow());const h=this.getRect();this.orientation==="portrait"&&(this.ctx.beginPath(),this.ctx.rect(h.left+h.pageWidth,h.top,h.width,h.height),this.ctx.clip())}drawBookShadow(){const h=this.getRect();this.ctx.save(),this.ctx.beginPath();const x=h.width/20;this.ctx.rect(h.left,h.top,h.width,h.height);const k={x:h.left+h.width/2-x/2,y:0};this.ctx.translate(k.x,k.y);const S=this.ctx.createLinearGradient(0,0,x,0);S.addColorStop(0,"rgba(0, 0, 0, 0)"),S.addColorStop(.4,"rgba(0, 0, 0, 0.2)"),S.addColorStop(.49,"rgba(0, 0, 0, 0.1)"),S.addColorStop(.5,"rgba(0, 0, 0, 0.5)"),S.addColorStop(.51,"rgba(0, 0, 0, 0.4)"),S.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.clip(),this.ctx.fillStyle=S,this.ctx.fillRect(0,0,x,2*h.height),this.ctx.restore()}drawOuterShadow(){const h=this.getRect();this.ctx.save(),this.ctx.beginPath(),this.ctx.rect(h.left,h.top,h.width,h.height);const x=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y});this.ctx.translate(x.x,x.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const k=this.ctx.createLinearGradient(0,0,this.shadow.width,0);this.shadow.direction===0?(this.ctx.translate(0,-100),k.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),k.addColorStop(1,"rgba(0, 0, 0, 0)")):(this.ctx.translate(-this.shadow.width,-100),k.addColorStop(0,"rgba(0, 0, 0, 0)"),k.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")")),this.ctx.clip(),this.ctx.fillStyle=k,this.ctx.fillRect(0,0,this.shadow.width,2*h.height),this.ctx.restore()}drawInnerShadow(){const h=this.getRect();this.ctx.save(),this.ctx.beginPath();const x=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),k=this.convertRectToGlobal(this.pageRect);this.ctx.moveTo(k.topLeft.x,k.topLeft.y),this.ctx.lineTo(k.topRight.x,k.topRight.y),this.ctx.lineTo(k.bottomRight.x,k.bottomRight.y),this.ctx.lineTo(k.bottomLeft.x,k.bottomLeft.y),this.ctx.translate(x.x,x.y),this.ctx.rotate(Math.PI+this.shadow.angle+Math.PI/2);const S=3*this.shadow.width/4,_=this.ctx.createLinearGradient(0,0,S,0);this.shadow.direction===0?(this.ctx.translate(-S,-100),_.addColorStop(1,"rgba(0, 0, 0, "+this.shadow.opacity+")"),_.addColorStop(.9,"rgba(0, 0, 0, 0.05)"),_.addColorStop(.7,"rgba(0, 0, 0, "+this.shadow.opacity+")"),_.addColorStop(0,"rgba(0, 0, 0, 0)")):(this.ctx.translate(0,-100),_.addColorStop(0,"rgba(0, 0, 0, "+this.shadow.opacity+")"),_.addColorStop(.1,"rgba(0, 0, 0, 0.05)"),_.addColorStop(.3,"rgba(0, 0, 0, "+this.shadow.opacity+")"),_.addColorStop(1,"rgba(0, 0, 0, 0)")),this.ctx.clip(),this.ctx.fillStyle=_,this.ctx.fillRect(0,0,S,2*h.height),this.ctx.restore()}clear(){this.ctx.fillStyle="white",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}}class y{constructor(h,x,k){this.touchPoint=null,this.swipeTimeout=250,this.onResize=()=>{this.update()},this.onMouseDown=_=>{if(this.checkTarget(_.target)){const C=this.getMousePos(_.clientX,_.clientY);this.app.startUserTouch(C),_.preventDefault()}},this.onTouchStart=_=>{if(this.checkTarget(_.target)&&_.changedTouches.length>0){const C=_.changedTouches[0],E=this.getMousePos(C.clientX,C.clientY);this.touchPoint={point:E,time:Date.now()},setTimeout(()=>{this.touchPoint!==null&&this.app.startUserTouch(E)},this.swipeTimeout),this.app.getSettings().mobileScrollSupport||_.preventDefault()}},this.onMouseUp=_=>{const C=this.getMousePos(_.clientX,_.clientY);this.app.userStop(C)},this.onMouseMove=_=>{const C=this.getMousePos(_.clientX,_.clientY);this.app.userMove(C,!1)},this.onTouchMove=_=>{if(_.changedTouches.length>0){const C=_.changedTouches[0],E=this.getMousePos(C.clientX,C.clientY);this.app.getSettings().mobileScrollSupport?(this.touchPoint!==null&&(Math.abs(this.touchPoint.point.x-E.x)>10||this.app.getState()!=="read")&&_.cancelable&&this.app.userMove(E,!0),this.app.getState()!=="read"&&_.preventDefault()):this.app.userMove(E,!0)}},this.onTouchEnd=_=>{if(_.changedTouches.length>0){const C=_.changedTouches[0],E=this.getMousePos(C.clientX,C.clientY);let z=!1;if(this.touchPoint!==null){const A=E.x-this.touchPoint.point.x,N=Math.abs(E.y-this.touchPoint.point.y);Math.abs(A)>this.swipeDistance&&N<2*this.swipeDistance&&Date.now()-this.touchPoint.time<this.swipeTimeout&&(A>0?this.app.flipPrev(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"):this.app.flipNext(this.touchPoint.point.y<this.app.getRender().getRect().height/2?"top":"bottom"),z=!0),this.touchPoint=null}this.app.userStop(E,z)}},this.parentElement=h,h.classList.add("stf__parent"),h.insertAdjacentHTML("afterbegin",'<div class="stf__wrapper"></div>'),this.wrapper=h.querySelector(".stf__wrapper"),this.app=x;const S=this.app.getSettings().usePortrait?1:2;h.style.minWidth=k.minWidth*S+"px",h.style.minHeight=k.minHeight+"px",k.size==="fixed"&&(h.style.minWidth=k.width*S+"px",h.style.minHeight=k.height+"px"),k.autoSize&&(h.style.width="100%",h.style.maxWidth=2*k.maxWidth+"px"),h.style.display="block",window.addEventListener("resize",this.onResize,!1),this.swipeDistance=k.swipeDistance}destroy(){this.app.getSettings().useMouseEvents&&this.removeHandlers(),this.distElement.remove(),this.wrapper.remove()}getDistElement(){return this.distElement}getWrapper(){return this.wrapper}setOrientationStyle(h){this.wrapper.classList.remove("--portrait","--landscape"),h==="portrait"?(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/this.app.getSettings().width*100+"%"),this.wrapper.classList.add("--portrait")):(this.app.getSettings().autoSize&&(this.wrapper.style.paddingBottom=this.app.getSettings().height/(2*this.app.getSettings().width)*100+"%"),this.wrapper.classList.add("--landscape")),this.update()}removeHandlers(){window.removeEventListener("resize",this.onResize),this.distElement.removeEventListener("mousedown",this.onMouseDown),this.distElement.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("touchend",this.onTouchEnd)}setHandlers(){window.addEventListener("resize",this.onResize,!1),this.app.getSettings().useMouseEvents&&(this.distElement.addEventListener("mousedown",this.onMouseDown),this.distElement.addEventListener("touchstart",this.onTouchStart),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove,{passive:!this.app.getSettings().mobileScrollSupport}),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("touchend",this.onTouchEnd))}getMousePos(h,x){const k=this.distElement.getBoundingClientRect();return{x:h-k.left,y:x-k.top}}checkTarget(h){return!this.app.getSettings().clickEventForward||!["a","button"].includes(h.tagName.toLowerCase())}}class w extends y{constructor(h,x,k,S){super(h,x,k),this.wrapper.insertAdjacentHTML("afterbegin",'<div class="stf__block"></div>'),this.distElement=h.querySelector(".stf__block"),this.items=S;for(const _ of S)this.distElement.appendChild(_);this.setHandlers()}clear(){for(const h of this.items)this.parentElement.appendChild(h)}updateItems(h){this.removeHandlers(),this.distElement.innerHTML="";for(const x of h)this.distElement.appendChild(x);this.items=h,this.setHandlers()}update(){this.app.getRender().update()}}class D extends y{constructor(h,x,k){super(h,x,k),this.wrapper.innerHTML='<canvas class="stf__canvas"></canvas>',this.canvas=h.querySelectorAll("canvas")[0],this.distElement=this.canvas,this.resizeCanvas(),this.setHandlers()}resizeCanvas(){const h=getComputedStyle(this.canvas),x=parseInt(h.getPropertyValue("width"),10),k=parseInt(h.getPropertyValue("height"),10);this.canvas.width=x,this.canvas.height=k}getCanvas(){return this.canvas}update(){this.resizeCanvas(),this.app.getRender().update()}}class j extends f{constructor(h,x,k){super(h,x),this.outerShadow=null,this.innerShadow=null,this.hardShadow=null,this.hardInnerShadow=null,this.element=k,this.createShadows()}createShadows(){this.element.insertAdjacentHTML("beforeend",`<div class="stf__outerShadow"></div>
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
        `;k+=this.getDirection()===0&&this.shadow.progress>100||this.getDirection()===1&&this.shadow.progress<=100?"transform: translate3d(0, 0, 0) rotateY(180deg);":"transform: translate3d(0, 0, 0);",this.hardShadow.style.cssText=k}drawInnerShadow(){const h=this.getRect(),x=3*this.shadow.width/4,k=this.getDirection()===0?x:0,S=this.getDirection()===0?"to left":"to right",_=this.convertToGlobal(this.shadow.pos),C=this.shadow.angle+3*Math.PI/2,E=[this.pageRect.topLeft,this.pageRect.topRight,this.pageRect.bottomRight,this.pageRect.bottomLeft];let z="polygon( ";for(const N of E){let O=this.getDirection()===1?{x:-N.x+this.shadow.pos.x,y:N.y-this.shadow.pos.y}:{x:N.x-this.shadow.pos.x,y:N.y-this.shadow.pos.y};O=l.GetRotatedPoint(O,{x:k,y:100},C),z+=O.x+"px "+O.y+"px, "}z=z.slice(0,-2),z+=")";const A=`
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
        `;this.innerShadow.style.cssText=A}drawOuterShadow(){const h=this.getRect(),x=this.convertToGlobal({x:this.shadow.pos.x,y:this.shadow.pos.y}),k=this.shadow.angle+3*Math.PI/2,S=this.getDirection()===1?this.shadow.width:0,_=this.getDirection()===0?"to right":"to left",C=[{x:0,y:0},{x:h.pageWidth,y:0},{x:h.pageWidth,y:h.height},{x:0,y:h.height}];let E="polygon( ";for(const A of C)if(A!==null){let N=this.getDirection()===1?{x:-A.x+this.shadow.pos.x,y:A.y-this.shadow.pos.y}:{x:A.x-this.shadow.pos.x,y:A.y-this.shadow.pos.y};N=l.GetRotatedPoint(N,{x:S,y:100},k),E+=N.x+"px "+N.y+"px, "}E=E.slice(0,-2),E+=")";const z=`
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
}`),i.PageFlip=class extends class{constructor(){this.events=new Map}on(v,h){return this.events.has(v)?this.events.get(v).push(h):this.events.set(v,[h]),this}off(v){this.events.delete(v)}trigger(v,h,x=null){if(this.events.has(v))for(const k of this.events.get(v))k({data:x,object:h})}}{constructor(v,h){super(),this.isUserTouch=!1,this.isUserMove=!1,this.setting=null,this.pages=null,this.setting=new b().getSettings(h),this.block=v}destroy(){this.ui.destroy(),this.block.remove()}update(){this.render.update(),this.pages.show()}loadFromImages(v){this.ui=new D(this.block,this,this.setting);const h=this.ui.getCanvas();this.render=new g(this,this.setting,h),this.flipController=new p(this.render,this),this.pages=new s(this,this.render,v),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}loadFromHTML(v){this.ui=new w(this.block,this,this.setting,v),this.render=new j(this,this.setting,this.ui.getDistElement()),this.flipController=new p(this.render,this),this.pages=new d(this,this.render,this.ui.getDistElement(),v),this.pages.load(),this.render.start(),this.pages.show(this.setting.startPage),setTimeout(()=>{this.ui.update(),this.trigger("init",this,{page:this.setting.startPage,mode:this.render.getOrientation()})},1)}updateFromImages(v){const h=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new s(this,this.render,v),this.pages.load(),this.pages.show(h),this.trigger("update",this,{page:h,mode:this.render.getOrientation()})}updateFromHtml(v){const h=this.pages.getCurrentPageIndex();this.pages.destroy(),this.pages=new d(this,this.render,this.ui.getDistElement(),v),this.pages.load(),this.ui.updateItems(v),this.render.reload(),this.pages.show(h),this.trigger("update",this,{page:h,mode:this.render.getOrientation()})}clear(){this.pages.destroy(),this.ui.clear()}turnToPrevPage(){this.pages.showPrev()}turnToNextPage(){this.pages.showNext()}turnToPage(v){this.pages.show(v)}flipNext(v="top"){this.flipController.flipNext(v)}flipPrev(v="top"){this.flipController.flipPrev(v)}flip(v,h="top"){this.flipController.flipToPage(v,h)}updateState(v){this.trigger("changeState",this,v)}updatePageIndex(v){this.trigger("flip",this,v)}updateOrientation(v){this.ui.setOrientationStyle(v),this.update(),this.trigger("changeOrientation",this,v)}getPageCount(){return this.pages.getPageCount()}getCurrentPageIndex(){return this.pages.getCurrentPageIndex()}getPage(v){return this.pages.getPage(v)}getRender(){return this.render}getFlipController(){return this.flipController}getOrientation(){return this.render.getOrientation()}getBoundsRect(){return this.render.getRect()}getSettings(){return this.setting}getUI(){return this.ui}getState(){return this.flipController.getState()}getPageCollection(){return this.pages}startUserTouch(v){this.mousePosition=v,this.isUserTouch=!0,this.isUserMove=!1}userMove(v,h){this.isUserTouch||h||!this.setting.showPageCorners?this.isUserTouch&&l.GetDistanceBetweenTwoPoint(this.mousePosition,v)>5&&(this.isUserMove=!0,this.flipController.fold(v)):this.flipController.showCorner(v)}userStop(v,h=!1){this.isUserTouch&&(this.isUserTouch=!1,h||(this.isUserMove?this.flipController.stopMove():this.flipController.flip(v)))}},Object.defineProperty(i,"__esModule",{value:!0})})})(ox,ox.exports);var CO=ox.exports;const PO=q.forwardRef((t,e)=>{const i=T.useRef(null),n=T.useRef([]),r=T.useRef(),[o,s]=T.useState([]);T.useImperativeHandle(e,()=>({pageFlip:()=>r.current}));const l=T.useCallback(()=>{r.current&&r.current.clear()},[]),c=T.useCallback(()=>{const d=r.current;d&&(d.off("flip"),d.off("changeOrientation"),d.off("changeState"),d.off("init"),d.off("update"))},[]);return T.useEffect(()=>{if(n.current=[],t.children){const d=q.Children.map(t.children,u=>q.cloneElement(u,{ref:p=>{p&&n.current.push(p)}}));(!t.renderOnlyPageLengthChange||o.length!==d.length)&&(d.length<o.length&&l(),s(d))}},[t.children]),T.useEffect(()=>{const d=()=>{const u=r.current;u&&(t.onFlip&&u.on("flip",p=>t.onFlip(p)),t.onChangeOrientation&&u.on("changeOrientation",p=>t.onChangeOrientation(p)),t.onChangeState&&u.on("changeState",p=>t.onChangeState(p)),t.onInit&&u.on("init",p=>t.onInit(p)),t.onUpdate&&u.on("update",p=>t.onUpdate(p)))};o.length>0&&n.current.length>0&&(c(),i.current&&!r.current&&(r.current=new CO.PageFlip(i.current,t)),r.current.getFlipController()?r.current.updateFromHtml(n.current):r.current.loadFromHTML(n.current),d())},[o]),q.createElement("div",{ref:i,className:t.className,style:t.style},o)}),TO=q.memo(PO),EO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-1.aed8b9cd.png",IO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-2.7731f876.png",AO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-3.38331a08.png",MO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-4.61d5cc73.png",zO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-5.da16f760.png",FO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-6.1768ad61.png",RO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-7.f9b41058.png",LO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-8.3ec2252f.png",NO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-9.245203a3.png",OO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-10.c644188d.png",$O="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-11.fe776231.png",BO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-12.c5ba26ce.png",VO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-13.2d4ec13b.png",WO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-14.b7fe6d1a.png",UO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-15.4a94aa2b.png",HO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-16.16bdb77b.png",YO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-17.d47c2494.png",GO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-18.005ef503.png",XO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-19.2b0aceb0.png",ZO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-20.03ab72dc.png",qO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-21.72d8daf3.png",QO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-22.e37eb36d.png",KO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-23.5a5dcf39.png",JO="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-24.2d6a2bac.png",e$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-25.a612f85b.png",t$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-26.69a075d6.png",i$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-27.a9cc178b.png",n$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-28.d4b813b5.png",r$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-29.3a458449.png",o$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-30.9ed29b6f.png",s$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-31.0082231b.png",a$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-32.b86f8071.png",l$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-33.114f0b9b.png",c$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-34.59db362b.png",d$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-35.4190176b.png",u$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-36.cb7ba05f.png",h$="/Nooshin-Shahsavan-portfolio/assets/Brand-Book-37.e76ac7b7.png",p$=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: #fff;
  /* border: 2px solid red; */
`,f$=m.div`
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
`,m$=m.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 1rem;
`,yb=m.button`
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
`,g$=m.span`
  font-size: 1rem;
  color: #333;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,x$=m.div`
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
`;const w$=()=>{const t=T.useRef(null),[e,i]=T.useState(2);console.log("FlipBook component rendering");const n=[EO,IO,AO,MO,zO,FO,RO,LO,NO,OO,$O,BO,VO,WO,UO,HO,YO,GO,XO,ZO,qO,QO,KO,JO,e$,t$,i$,n$,r$,o$,s$,a$,l$,c$,d$,u$,h$];console.log("Pages array length:",n.length);const r=()=>{t.current&&t.current.pageFlip().flipNext()},o=()=>{t.current&&t.current.pageFlip().flipPrev()},s=l=>{i(l.data+1)};return a.jsxs(p$,{id:"veen-brand-book",children:[a.jsx("h2",{style:{marginBottom:"1rem",fontWeight:700,fontSize:"2.2rem",color:"#222",letterSpacing:"-1px"},children:"Brand Book"}),a.jsxs(f$,{children:[a.jsxs("p",{style:{display:"none"},children:["Total pages: ",n.length]}),a.jsxs("p",{style:{display:"none"},children:["Current page: ",e]}),a.jsx(TO,{ref:t,width:window.innerWidth<600?320:window.innerWidth<900?400:580,height:window.innerWidth<600?320:window.innerWidth<900?400:580,size:"stretch",minWidth:200,maxWidth:700,minHeight:200,maxHeight:700,showCover:!0,flippingTime:1e3,usePortrait:!1,startPage:1,drawShadow:!0,className:"demo-book",style:{margin:"0 auto",display:"block",width:"100%",maxWidth:"100vw",boxSizing:"border-box",overflowX:"hidden"},onFlip:s,onInit:()=>{i(2)},children:n.map((l,c)=>a.jsx(x$,{className:"demoPage",children:a.jsx("img",{src:l,alt:`Page ${c+1}`})},c))})]}),a.jsxs(m$,{children:[a.jsx(yb,{onClick:o,disabled:e<=1,children:"Previous"}),a.jsxs(g$,{children:["Page ",e," of ",n.length]}),a.jsx(yb,{onClick:r,disabled:e>=n.length,children:"Next"})]})]})},er=m.span`
  color: #9ed4d1;
  font-weight: 600;
`,v$=[{title:"Logo",description:a.jsxs(a.Fragment,{children:["Create a logo that is personal, soft, and ",a.jsx(er,{children:"memorable"})," with a ",a.jsx(er,{children:"hidden meaning"})," that connects to ",a.jsx(er,{children:"photography"})," and ",a.jsx(er,{children:"family"}),"."]})},{title:"Color Palette",description:a.jsxs(a.Fragment,{children:["Find colors that express ",a.jsx(er,{children:"warmth"}),", ",a.jsx(er,{children:"trust"}),", and ",a.jsx(er,{children:"joy"}),", while keeping the tone modern and soft not too bold or cold."]})},{title:"Typography",description:a.jsxs(a.Fragment,{children:["Choose fonts that feel ",a.jsx(er,{children:"friendly"}),", ",a.jsx(er,{children:"clean"}),", and professional readable for both digital and print use."]})},{title:"Social Media",description:a.jsx(a.Fragment,{children:"Design social visuals that align with the brand values and look cohesive, warm, and creative across platforms."})}],y$=m.section`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 0 32px 0;
`,b$=m.h2`
  font-size: 2.1rem;
  font-weight: 600;
  color: #181818;
  margin-bottom: 1.2rem;
  letter-spacing: -1px;
  text-align: center;
`,k$=m.p`
  font-size: 1.08rem;
  color: #444;
  font-weight: 400;
  line-height: 1.5;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  text-align: center;
`,j$=m.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1.2rem;
`,S$=m.div`
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
`,D$=m.div`
  font-size: 1.01rem;
  font-weight: 600;
  color: #888;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-align: center;
`,_$=m.div`
  font-weight: 400;
  font-size: 1.08rem;
  color: #222;
  line-height: 1.5;
  letter-spacing: -0.1px;
  text-align: center;
`;function C$(){return a.jsxs(y$,{id:"veen-challenges",children:[a.jsx(b$,{children:"Key Challenges"}),a.jsx(k$,{children:"The project required solving four main creative challenges to build a cohesive, expressive brand identity for Veen."}),a.jsx(j$,{children:v$.map(t=>a.jsxs(S$,{children:[a.jsx(D$,{children:t.title}),a.jsx(_$,{children:t.description})]},t.title))})]})}const P$=m.div`
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
`,T$=m.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: left;
`,E$=m.button`
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
`,D0=[{id:"overview",label:"Overview",targetId:"veen-first"},{id:"challenges",label:"Key Challenges",targetId:"veen-problem"},{id:"logo",label:"Logo Design",targetId:"veen-logo"},{id:"color",label:"Color Palette",targetId:"veen-color"},{id:"typography",label:"Typography",targetId:"veen-typography"},{id:"brand-book",label:"Brand Book",targetId:"veen-brand-book"},{id:"mockups",label:"Mockups",targetId:"veen-mockups"}],I$=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("overview");q.useEffect(()=>{const o={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},s=new IntersectionObserver(l=>{l.forEach(c=>{if(c.isIntersecting){const d=c.target.id,u=D0.find(p=>p.targetId===d);u&&n(u.id)}})},o);return D0.forEach(l=>{const c=document.getElementById(l.targetId);c&&s.observe(c)}),()=>{s.disconnect()}},[]);const r=(o,s)=>{const l=document.getElementById(o);l&&(l.scrollIntoView({behavior:"smooth",block:"center"}),e(s))};return a.jsxs(P$,{children:[a.jsx(T$,{children:"Menu"}),D0.map(o=>a.jsx(E$,{isActive:i===o.id,isClicked:t===o.id,onClick:()=>r(o.targetId,o.id),children:o.label},o.id))]})},A$=()=>{const t=()=>{const e=document.querySelector("#veen-first");e&&e.scrollIntoView({behavior:"smooth",block:"start"})};return a.jsx("div",{style:{position:"fixed",bottom:"24px",right:"24px",zIndex:9999,pointerEvents:"auto"},children:a.jsx("button",{onClick:t,style:{width:"48px",height:"48px",backgroundColor:"rgba(255, 255, 255, 0.9)",borderRadius:"50%",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",color:"#333",backdropFilter:"blur(10px)",boxShadow:"0 2px 8px rgba(0,0,0,0.1)",transition:"all 0.2s ease",border:"none"},"aria-label":"Scroll to top",onMouseEnter:e=>{e.currentTarget.style.transform="translateY(-2px)",e.currentTarget.style.boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)"},onMouseLeave:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.1)"},children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M12 4L12 20M12 4L6 10M12 4L18 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})},M$=m.div`
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
`;_r`
  body {
    background: #fff;
    margin: 0;
    padding: 0;
    overflow-y: auto;
  }
  html {
    overflow-x: hidden;
  }
`;const z$=()=>a.jsxs(a.Fragment,{children:[a.jsxs(M$,{children:[a.jsx(rt,{title:"Veen Project | Nooshin Shahsavan - Brand Identity & Design",description:"Explore the Veen project - a sophisticated branding project by Nooshin Shahsavan creating an elegant and timeless visual identity with premium aesthetics.",keywords:"Veen project, brand identity, logo design, visual design, branding, Nooshin Shahsavan, design portfolio",image:"/src/assets/veen/brand-strategy.png"}),a.jsx(I$,{}),a.jsx("div",{id:"veen-first",children:a.jsx(hN,{})}),a.jsx("div",{id:"veen-second",children:a.jsx(yN,{})}),a.jsx("div",{id:"veen-problem",children:a.jsx(C$,{})}),a.jsxs("div",{id:"veen-logo",children:[a.jsx(CN,{}),a.jsx(_O,{})]}),a.jsx("div",{id:"veen-color",children:a.jsx(MN,{})}),a.jsx("div",{id:"veen-typography",children:a.jsx(qN,{})}),a.jsxs("div",{id:"veen-brand-book",children:[a.jsx(nO,{}),a.jsx(w$,{})]}),a.jsxs("div",{id:"veen-mockups",children:[a.jsx("h2",{style:{width:"70vw",margin:"2.5rem auto 1.5rem auto",textAlign:"center",fontSize:"2.5rem",fontWeight:700,letterSpacing:"0.04em",color:"#222",background:"transparent",border:"none"},children:"Mockups"}),a.jsx(NN,{}),a.jsx(WN,{}),a.jsx(lO,{}),a.jsx(pO,{})]}),a.jsx(Os,{}),a.jsx(Ls,{})]}),a.jsx(A$,{})]}),F$="/Nooshin-Shahsavan-portfolio/assets/deli1.87111f97.mp4",R$=m.section`
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
`,L$=m.h1`
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
`,N$=m.p`
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
`,O$=m.div`
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
`,$$=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,B$=m.div`
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
`,ju=m.div`
  min-width: 120px;
  text-align: center;
`,Su=m.div`
  font-size: 0.92rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 0.2em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,Du=m.div`
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
`,V$=()=>a.jsxs(R$,{id:"deli-overview",children:[a.jsx(L$,{children:"Delicato — Overview"}),a.jsx(N$,{children:"Delicato is a small interior design company from Italy, inspired by the classical architecture of ancient Rome. The brand’s core value is to create spaces that blend the richness of historical elements with modern aesthetics, bringing timeless elegance into contemporary living."}),a.jsx(O$,{children:a.jsx($$,{src:F$,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Delicato project video"})}),a.jsxs(B$,{children:[a.jsxs(ju,{children:[a.jsx(Su,{children:"Role"}),a.jsx(Du,{children:"Brand Designer"})]}),a.jsxs(ju,{children:[a.jsx(Su,{children:"Tools"}),a.jsx(Du,{children:"Illustrator, Photoshop, After Effects"})]}),a.jsxs(ju,{children:[a.jsx(Su,{children:"Timeline"}),a.jsx(Du,{children:"4 weeks"})]}),a.jsxs(ju,{children:[a.jsx(Su,{children:"Year"}),a.jsx(Du,{children:"2024"})]})]})]}),W$="/Nooshin-Shahsavan-portfolio/assets/deli2.41d6e489.mp4",U$=m.section`
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
`,H$=m.div`
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
`,Y$=m.video`
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
`,G$=m.div`
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
`,X$=m.p`
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
`,Z$=m.div`
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
`,q$=()=>a.jsx(U$,{children:a.jsxs(G$,{children:[a.jsx(H$,{children:a.jsx(Y$,{src:W$,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Delicato video"})}),a.jsx(X$,{children:"This project was a rewarding opportunity to combine my passion for art history with design. It allowed me to revisit favorite references like Art Through the Ages by Helen Gardner and The Story of Art by Ernst Gombrich.For this project, I was responsible for developing the entire brand identity from logo, color palette, and typography to final mockups."}),a.jsx(Z$,{children:"Aim➝ Inspiration from classical Roman architecture ➝ Timeless brand identity ➝ Blend of historical elegance and modern design"})]})}),Q$=m.section`
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
`,K$=m.h2`
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
`,J$=m.div`
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
`,bb=m.div`
  font-size: 0.98rem;
  color: #888;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 1.2em;
  margin-bottom: 0.3em;
`,Bo=m.span`
  color: #b48a3b;
  font-weight: 400;
`,eB=()=>a.jsxs(Q$,{children:[a.jsx(K$,{children:"Logo Design"}),a.jsxs(J$,{children:[a.jsx(bb,{children:"I drew inspiration"}),"From the ",a.jsx(Bo,{children:"iconic classical columns"}),", which are widely recognized ",a.jsx(Bo,{children:"symbols"})," of that era. I developed a ",a.jsx(Bo,{children:"minimal"}),", ",a.jsx(Bo,{children:"elegant"}),' symbol that merges with the letter "D" in "Delicato".',a.jsx(bb,{children:"The column is"}),"Abstracted into a balance of ",a.jsx(Bo,{children:"positive and negative"})," space, evoking both strength and delicacy. A subtle ",a.jsx(Bo,{children:"break"})," in the lower curved line represents the passage of time, the ",a.jsx(Bo,{children:"separation and connection"})," between classical and modern eras. The overall form is clean and memorable, encapsulating the brand's concept of timeless elegance."]})]}),tB="/Nooshin-Shahsavan-portfolio/assets/deli4.497079d2.mp4",iB="/Nooshin-Shahsavan-portfolio/assets/deli5.60fb829b.mp4",nB=m.section`
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
`,rB=m.div`
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
`,kb=m.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`,jb=m.div`
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
`,Sb=m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 16px;
  box-sizing: border-box;
`,oB=()=>a.jsx(nB,{children:a.jsxs(rB,{children:[a.jsx(kb,{children:a.jsx(jb,{children:a.jsx(Sb,{src:tB,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Deli video 4"})})}),a.jsx(kb,{children:a.jsx(jb,{children:a.jsx(Sb,{src:iB,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Deli video 5"})})})]})}),sB="/Nooshin-Shahsavan-portfolio/assets/deli6.d0af3bb2.mp4",aB=m.section`
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
`,lB=m.h2`
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
`,cB=m.div`
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
`,dB=m.div`
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
`,uB=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,hB=()=>{const t=T.useRef(null),[e,i]=T.useState(!1);return T.useEffect(()=>{const n=()=>{if(!e&&t.current){const r=t.current.getBoundingClientRect();r.top<window.innerHeight&&r.bottom>0&&(t.current.play(),i(!0))}};return window.addEventListener("scroll",n),n(),()=>window.removeEventListener("scroll",n)},[e]),a.jsxs(aB,{children:[a.jsx(lB,{children:"Color Palette"}),a.jsx(cB,{children:"I chose colors that, in every era, evoke memories of architecture, interior design, and architectural materials, such as the colors of brick, stone, and earth."}),a.jsx(dB,{children:a.jsx(uB,{ref:t,src:sB,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Color palette video"})})]})},pB="/Nooshin-Shahsavan-portfolio/assets/deli7.5c1f49b2.mp4",fB=m.section`
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
`,mB=m.h2`
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
`,gB=m.p`
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
`,xB=m.div`
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
`,wB=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,vB=()=>a.jsxs(fB,{id:"deli-typography",children:[a.jsx(mB,{children:"Typography"}),a.jsx(gB,{children:"I chose Gyst Variable for its contemporary yet classic feel, and paired it with Roc Grotesk a clean, highly legible sans-serif ideal for web use."}),a.jsx(xB,{children:a.jsx(wB,{src:pB,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Typography video"})})]}),yB=m.section`
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
`,bB=m.h2`
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
`,kB=m.img`
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
`,jB=()=>{const[t,e]=q.useState(!1);return a.jsxs(yB,{children:[a.jsx(bB,{children:"Mockups"}),t?a.jsx("div",{style:{color:"white",fontSize:24},children:"Image failed to load"}):a.jsx(kB,{src:m4,alt:"Deli 8",onError:()=>e(!0)})]})},SB="/Nooshin-Shahsavan-portfolio/assets/deli12.00fb3c37.jpg",DB=m.section`
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
`,_B=m.div`
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
`,CB=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,PB=()=>a.jsx(DB,{children:a.jsx(_B,{children:a.jsx(CB,{src:SB,alt:"Deli 12"})})}),TB="/Nooshin-Shahsavan-portfolio/assets/delistory.8abf3468.mp4",EB=m.section`
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
`,IB=m.div`
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
`,AB=m.video`
  width: 40%;
  height: auto;
  display: block;
  background: transparent;
`,MB=()=>a.jsx(EB,{children:a.jsx(IB,{children:a.jsx(AB,{src:TB,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!0})})}),zB="/Nooshin-Shahsavan-portfolio/assets/delistory2.6f7abd8c.png",FB=m.section`
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
`,RB=m.div`
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
`,LB=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,NB=()=>a.jsx(FB,{children:a.jsx(RB,{children:a.jsx(LB,{src:zB,alt:"Deli Story 2"})})}),OB="/Nooshin-Shahsavan-portfolio/assets/deliweb.60e10190.mp4",$B=m.section`
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
`,BB=m.div`
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
`,VB=m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,WB=()=>a.jsx($B,{children:a.jsx(BB,{children:a.jsx(VB,{src:OB,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1})})}),UB="/Nooshin-Shahsavan-portfolio/assets/deli11.8ce54a26.png",HB=m.section`
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
`,YB=m.div`
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
`,GB=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,XB=()=>a.jsx(HB,{children:a.jsx(YB,{children:a.jsx(GB,{src:UB,alt:"Deli 11"})})}),ZB="/Nooshin-Shahsavan-portfolio/assets/deli13.83ec81c5.jpg",qB=m.section`
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
`,QB=m.div`
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
`,KB=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,JB=()=>a.jsx(qB,{children:a.jsx(QB,{children:a.jsx(KB,{src:ZB,alt:"Deli 13"})})}),eV="/Nooshin-Shahsavan-portfolio/assets/carrd.238e693c.png",tV=m.section`
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
`,iV=m.div`
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
`,nV=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,rV=()=>a.jsx(tV,{children:a.jsx(iV,{children:a.jsx(nV,{src:eV,alt:"Card Mockup"})})}),oV=[new URL("/Nooshin-Shahsavan-portfolio/assets/d1.7971c3a9.png",self.location).href,new URL("/Nooshin-Shahsavan-portfolio/assets/d2.094353a7.jpg",self.location).href,new URL("/Nooshin-Shahsavan-portfolio/assets/d3.54dad30d.png",self.location).href,new URL("/Nooshin-Shahsavan-portfolio/assets/d4.db60ea51.png",self.location).href],sV=m.section`
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
`,aV=m.h2`
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
`,lV=m.div`
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
`,cV=m.div`
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
`,dV=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;function uV(){return a.jsxs(sV,{id:"deli-logo",children:[a.jsx(aV,{children:"Logo Explorations"}),a.jsx(lV,{children:oV.map((t,e)=>a.jsx(cV,{children:a.jsx(dV,{src:t,alt:`logo-exploration-${e}`,loading:"lazy"})},t+e))})]})}const Js=m.span`
  color: #b48a3b;
  font-weight: 400;
`,hV=[{title:"Logo",description:a.jsxs(a.Fragment,{children:["Design a logo that blends ",a.jsx(Js,{children:"classical Roman"})," inspiration with a ",a.jsx(Js,{children:"modern minimalist"})," identity."]})},{title:"Color Palette",description:a.jsxs(a.Fragment,{children:["Choose colors that reflect ",a.jsx(Js,{children:"historical elegance"}),", while also feeling warm, safe, and approachable for ",a.jsx(Js,{children:"modern"})," families."]})},{title:"Typography",description:a.jsxs(a.Fragment,{children:["Use typography that combines a sense of ",a.jsx(Js,{children:"classical luxury"})," with ",a.jsx(Js,{children:"modern readability"})," for both print and digital platforms."]})},{title:"Visual Tone",description:a.jsx(a.Fragment,{children:"Design social visuals that align with the brand values and look cohesive, warm, and creative across platforms."})}],pV=m.section`
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
`,mV=m.p`
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
`,gV=m.div`
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
`,xV=m.div`
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
`,wV=m.div`
  font-size: 1.01rem;
  font-weight: 600;
  color: #888;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-align: center;
`,vV=m.div`
  font-weight: 400;
  font-size: 1.08rem;
  color: #222;
  line-height: 1.5;
  letter-spacing: -0.1px;
  text-align: center;
`;function yV(){return a.jsxs(pV,{id:"deli-challenges",children:[a.jsx(fV,{children:"Key Challenges"}),a.jsx(mV,{children:"The project required solving four main creative challenges to build a cohesive, expressive brand identity for Delicato."}),a.jsx(gV,{children:hV.map(t=>a.jsxs(xV,{children:[a.jsx(wV,{children:t.title}),a.jsx(vV,{children:t.description})]},t.title))})]})}const bV="/Nooshin-Shahsavan-portfolio/assets/story-1-deli.21d47079.mp4",kV=m.section`
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
`,jV=m.div`
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
`,SV=m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`;m.div`
  width: 100%;
  height: 100vh;
  // ... existing styles ...
`;const DV=()=>a.jsx(kV,{children:a.jsx(jV,{children:a.jsx(SV,{src:bV,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Delicato video"})})}),_V="/Nooshin-Shahsavan-portfolio/assets/delin.6105b982.jpg",CV=m.section`
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
`,PV=m.div`
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
`,TV=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
`,EV=()=>a.jsx(CV,{children:a.jsx(PV,{children:a.jsx(TV,{src:_V,alt:"Deli 14"})})}),IV=m.div`
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
`,AV=m.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: left;
`,MV=m.button`
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
`,_0=[{id:"overview",label:"Overview",targetId:"deli-first"},{id:"challenges",label:"Key Challenges",targetId:"deli-problem"},{id:"logo",label:"Logo Design",targetId:"deli-logo"},{id:"typography",label:"Typography",targetId:"deli-typography"},{id:"mockups",label:"Mockups",targetId:"deli-mockups"}],zV=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("overview");q.useEffect(()=>{const o={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},s=new IntersectionObserver(l=>{l.forEach(c=>{if(c.isIntersecting){const d=c.target.id,u=_0.find(p=>p.targetId===d);u&&n(u.id)}})},o);return _0.forEach(l=>{const c=document.getElementById(l.targetId);c&&s.observe(c)}),()=>{s.disconnect()}},[]);const r=(o,s)=>{const l=document.getElementById(o);l&&(l.scrollIntoView({behavior:"smooth",block:"center"}),e(s))};return a.jsxs(IV,{children:[a.jsx(AV,{children:"Menu"}),_0.map(o=>a.jsx(MV,{isActive:i===o.id,isClicked:t===o.id,onClick:()=>r(o.targetId,o.id),children:o.label},o.id))]})},FV=m.div`
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
`;_r`
  body {
    background: #fff;
    overflow-x: hidden;
  }
`;const RV=m.h2`
  width: 100vw;
  text-align: center;
  color: #111;
  font-size: 2.4rem;
  font-weight: 700;
  margin: 4rem 0 2rem 0;
  letter-spacing: 0.04em;
`,LV=()=>a.jsxs(a.Fragment,{children:[a.jsxs(FV,{children:[a.jsx(rt,{title:"Delicato Project | Nooshin Shahsavan - Brand Design & Packaging",description:"Explore the Delicato project - a creative branding and packaging design project by Nooshin Shahsavan emphasizing artisanal craftsmanship and premium quality.",keywords:"Delicato project, brand design, packaging design, logo design, visual identity, Nooshin Shahsavan, design portfolio",image:"/src/assets/deli/deli-home.png"}),a.jsx(zV,{}),a.jsx("div",{id:"deli-first",children:a.jsx(V$,{})}),a.jsx("div",{id:"deli-second",children:a.jsx(q$,{})}),a.jsx("div",{id:"deli-problem",children:a.jsx(yV,{})}),a.jsxs("div",{id:"deli-logo",children:[a.jsx(eB,{}),a.jsx(uV,{})]}),a.jsxs("div",{id:"deli-typography",children:[a.jsx(oB,{}),a.jsx(hB,{}),a.jsx(vB,{})]}),a.jsxs("div",{id:"deli-mockups",children:[a.jsx(RV,{children:"Mockups"}),a.jsx(jB,{}),a.jsx(EV,{}),a.jsx(rV,{}),a.jsx(PB,{}),a.jsx(XB,{}),a.jsx(JB,{}),a.jsx(DV,{}),a.jsx(MB,{}),a.jsx(NB,{}),a.jsx(WB,{})]}),a.jsx(Os,{}),a.jsx(Ls,{})]}),a.jsx(Ns,{})]}),NV="/Nooshin-Shahsavan-portfolio/assets/zar-logoline.159d8655.mp4",OV=m.section`
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
`,$V=m.h1`
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
`,BV=m.p`
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
`,VV=m.div`
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
`,WV=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,UV=m.div`
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
`,_u=m.div`
  min-width: 120px;
  text-align: center;
`,Cu=m.div`
  font-size: 0.92rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 0.2em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,Pu=m.div`
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
`,HV=()=>a.jsxs(OV,{children:[a.jsx($V,{children:"Zar — Overview"}),a.jsx(BV,{children:"I was responsible for designing the brand identity and packaging system for ZAR, a premium saffron brand. The project focused on merging Persian cultural elements with a modern, minimalist aesthetic. My work included developing the logo, typography, color palette, and packaging design to reflect the brand's aim of positioning saffron as a luxury product rooted in heritage."}),a.jsx(VV,{children:a.jsx(WV,{src:NV,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Zar project video"})}),a.jsxs(UV,{children:[a.jsxs(_u,{children:[a.jsx(Cu,{children:"Role"}),a.jsx(Pu,{children:"Brand Designer"})]}),a.jsxs(_u,{children:[a.jsx(Cu,{children:"Tools"}),a.jsx(Pu,{children:"Illustrator, After Effects, Photoshop"})]}),a.jsxs(_u,{children:[a.jsx(Cu,{children:"Timeline"}),a.jsx(Pu,{children:"4 weeks"})]}),a.jsxs(_u,{children:[a.jsx(Cu,{children:"Year"}),a.jsx(Pu,{children:"2023"})]})]})]}),YV="/Nooshin-Shahsavan-portfolio/assets/moodboard-zar.486cf3b1.png",GV=m.section`
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
`,XV=m.h1`
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
`,ZV=m.p`
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
`,qV=m.div`
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
`,QV=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,KV=m.div`
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
`,JV=()=>a.jsxs(GV,{children:[a.jsx(XV,{children:"About Zar"}),a.jsx(ZV,{children:'ZAR is a premium saffron brand rooted in Persian culture. The name means "gold" in Persian, reflecting the value and heritage of saffron. The brand combines traditional elements with modern design to present saffron as a high-end, culturally rich product for a global audience.'}),a.jsx(qV,{children:a.jsx(QV,{src:YV,alt:"Brand Strategy Visual"})}),a.jsx(KV,{children:"Aim → Persian Heritage → Cultural Authenticity → Modern Design → Unforgettable Experience"})]}),eW="/Nooshin-Shahsavan-portfolio/assets/logo-zar-1.7784827d.png",tW="/Nooshin-Shahsavan-portfolio/assets/zar-logo.e384c156.mp4",iW="/Nooshin-Shahsavan-portfolio/assets/logo-zar-2.a449b6ed.png",nW=m.section`
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
`,rW=m.h1`
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
`,Db=m.p`
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
`,C0=m.span`
  color: rgb(163, 73, 198);
  font-weight: 400;
`,oW=m.div`
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
`,sW=m.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`,aW=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  border-radius: 8px;
`,_b=m.img`
  width: 50%;
  height: auto;
  display: block;
  background: transparent;
  border-radius: 8px;
  @media (max-width: 600px) {
    width: 100%;
  }
`,lW=()=>a.jsxs(nW,{children:[a.jsx(rW,{children:"Logo Design"}),a.jsxs(Db,{children:["For the pictorial logo, my goal was to ",a.jsx(C0,{children:"represent a symbol of the saffron flower"}),". Therefore, based on the images provided below, you can see the steps of analyzing a real saffron flower, simplifying its form, and finally creating the resulting logo design."]}),a.jsxs(oW,{children:[a.jsx(aW,{src:tW,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"ZAR logo animation"}),a.jsxs(sW,{children:[a.jsx(_b,{src:eW,alt:"ZAR logo design"}),a.jsx(_b,{src:iW,alt:"ZAR logo variations"})]})]}),a.jsxs(Db,{children:["In the wordmark logo, I tried to design something that reflects the ",a.jsx(C0,{children:"delicacy"})," and ",a.jsx(C0,{children:"fragility of saffron"}),". That's why I chose a fine and elegant typeface."]})]}),cW="/Nooshin-Shahsavan-portfolio/assets/zar-color.c2162f1e.mp4",dW=m.section`
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
`,hW=m.p`
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
`,pW=m.div`
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
`,fW=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,mW=m.div`
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
`,P0=m.div`
  min-width: 120px;
  text-align: center;
`,T0=m.div`
  font-size: 0.92rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 0.2em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,E0=m.div`
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
`,gW=()=>a.jsxs(dW,{children:[a.jsx(uW,{children:"Color Palette"}),a.jsx(hW,{children:`I chose these colors based on several goals: The brand name Zar means "gold" in Persian, symbolizing both the value of the product and its preciousness. Purple represents the color of the saffron flower and is also associated with loyalty. Red reflects the color of the flower's stamen.`}),a.jsx(pW,{children:a.jsx(fW,{src:cW,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!1,"aria-label":"Color palette video"})}),a.jsxs(mW,{children:[a.jsxs(P0,{children:[a.jsx(T0,{children:"Primary"}),a.jsx(E0,{children:"Royal Purple"})]}),a.jsxs(P0,{children:[a.jsx(T0,{children:"Secondary"}),a.jsx(E0,{children:"Metallic Gold"})]}),a.jsxs(P0,{children:[a.jsx(T0,{children:"Accent"}),a.jsx(E0,{children:"Deep Black"})]})]})]}),xW="/Nooshin-Shahsavan-portfolio/assets/zar-type.3a8d8e25.mp4",wW=m.section`
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
`,vW=m.h1`
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
`,bW=m.div`
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
`,kW=m.video`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,jW=m.div`
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
`,I0=m.div`
  min-width: 120px;
  text-align: center;
`,A0=m.div`
  font-size: 0.92rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 0.2em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,M0=m.div`
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
`,SW=()=>a.jsxs(wW,{children:[a.jsx(vW,{children:"Typography"}),a.jsx(yW,{children:"Primary Typeface: Amandine Elegant and finely curved, perfect for headlines and packaging. Secondary Typeface: Housechks A handwritten script that brings warmth and human feeling to the brand."}),a.jsx(bW,{children:a.jsx(kW,{src:xW,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Typography video"})}),a.jsxs(jW,{children:[a.jsxs(I0,{children:[a.jsx(A0,{children:"Primary"}),a.jsx(M0,{children:"Amandine"})]}),a.jsxs(I0,{children:[a.jsx(A0,{children:"Secondary"}),a.jsx(M0,{children:"Housechks"})]}),a.jsxs(I0,{children:[a.jsx(A0,{children:"Style"}),a.jsx(M0,{children:"Elegant & Warm"})]})]})]}),DW="/Nooshin-Shahsavan-portfolio/assets/box-1.2cee20a2.jpg",_W=m.section`
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
`,CW=m.h1`
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
`,PW=m.p`
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
`,TW=m.div`
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
`,EW=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,IW=m.div`
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
`,z0=m.div`
  min-width: 120px;
  text-align: center;
`,F0=m.div`
  font-size: 0.92rem;
  color: #888;
  font-weight: 500;
  margin-bottom: 0.2em;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`,R0=m.div`
  font-size: 1.08rem;
  color: #222;
  font-weight: 400;
`,AW=()=>a.jsxs(_W,{children:[a.jsx(CW,{children:"Packaging"}),a.jsx(PW,{children:"Design packaging that is luxurious, functional, and deeply rooted in Persian culture, while appealing to global consumers. I designed a sliding drawer box with an inner wrapping layer to both protect the saffron and enhance the unboxing experience. The graphics feature an abstract saffron flower illustration, blending organic lines with Eastern motifs to reflect ZAR's Persian origin."}),a.jsx(TW,{children:a.jsx(EW,{src:DW,alt:"Zar Packaging Design"})}),a.jsxs(IW,{children:[a.jsxs(z0,{children:[a.jsx(F0,{children:"Style"}),a.jsx(R0,{children:"Luxurious & Cultural"})]}),a.jsxs(z0,{children:[a.jsx(F0,{children:"Material"}),a.jsx(R0,{children:"Premium Cardboard"})]}),a.jsxs(z0,{children:[a.jsx(F0,{children:"Colors"}),a.jsx(R0,{children:"Gold, Purple, Black"})]})]})]}),MW="/Nooshin-Shahsavan-portfolio/assets/zarbscard.18ade34e.jpg",zW=m.section`
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
`,FW=m.div`
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
`,RW=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
`,LW=()=>a.jsx(zW,{children:a.jsx(FW,{children:a.jsx(RW,{src:MW,alt:"Zar Mockup 1"})})}),NW=m.section`
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
`,$W=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  object-fit: contain;
`,BW=()=>a.jsx(NW,{children:a.jsx(OW,{children:a.jsx($W,{src:ew,alt:"Zar Mockup 2"})})}),VW="/Nooshin-Shahsavan-portfolio/assets/buttle.45644225.jpg",WW=m.section`
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
`,UW=m.div`
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
`,HW=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  object-fit: contain;
`,YW=()=>a.jsx(WW,{children:a.jsx(UW,{children:a.jsx(HW,{src:VW,alt:"Zar Mockup 3"})})}),GW="/Nooshin-Shahsavan-portfolio/assets/webzar.8382f801.png",XW=m.section`
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
`,ZW=m.div`
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
`,qW=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  object-fit: contain;
`,QW=()=>a.jsx(XW,{children:a.jsx(ZW,{children:a.jsx(qW,{src:GW,alt:"Zar Mockup 5"})})}),KW="/Nooshin-Shahsavan-portfolio/assets/story-zar-1.66d234e7.mp4",JW=m.section`
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
`,eU=m.div`
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
`,tU=m.video`
  width: 30%;
  height: auto;
  display: block;
  background: transparent;
  @media (max-width: 600px) {
    width: 100%;
  }
`,iU=()=>a.jsx(JW,{children:a.jsx(eU,{children:a.jsx(tU,{src:KW,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,controls:!0,"aria-label":"Zar Story Video",preload:"metadata"})})}),nU="/Nooshin-Shahsavan-portfolio/assets/zarbrushor.d4748513.jpg",rU=m.section`
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
`,oU=m.div`
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
`,sU=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  object-fit: contain;
`,aU=()=>a.jsx(rU,{children:a.jsx(oU,{children:a.jsx(sU,{src:nU,alt:"Zar Mockup 6"})})}),lU="/Nooshin-Shahsavan-portfolio/assets/work4.64f58ae6.png",cU=m.section`
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
`,dU=m.div`
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
`,uU=m.img`
  width: 100%;
  height: auto;
  display: block;
  background: transparent;
  object-fit: contain;
`,hU=()=>a.jsx(cU,{children:a.jsx(dU,{children:a.jsx(uU,{src:lU,alt:"Zar Mockup 8"})})}),pU="/Nooshin-Shahsavan-portfolio/assets/logo1.a7815c6d.jpeg",fU="/Nooshin-Shahsavan-portfolio/assets/logo2.d758f483.jpg",mU="/Nooshin-Shahsavan-portfolio/assets/logo3.8042f420.jpg",gU="/Nooshin-Shahsavan-portfolio/assets/logo4.681124c6.png",xU="/Nooshin-Shahsavan-portfolio/assets/logo5.00fd6488.png",wU=[pU,fU,mU,gU,xU],vU=m.section`
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
`,yU=m.h2`
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
`,bU=m.div`
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
`,kU=m.div`
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
`,jU=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: transparent;
`,SU=()=>a.jsxs(vU,{children:[a.jsx(yU,{children:"Logo Process"}),a.jsx(bU,{children:wU.map((t,e)=>a.jsx(kU,{children:a.jsx(jU,{src:t,alt:`Zar logo process ${e+1}`})},e))})]}),Mr=m.span`
  color: rgb(163, 73, 198);
  font-weight: 400;
`,DU=[{title:"Logo",description:a.jsxs(a.Fragment,{children:["Design a logo that reflects ",a.jsx(Mr,{children:"Persian luxury"})," and ",a.jsx(Mr,{children:"modern sophistication"}),", blending cultural heritage with contemporary appeal."]})},{title:"Color Palette",description:a.jsxs(a.Fragment,{children:["Choose colors that express ",a.jsx(Mr,{children:"premium quality"})," and ",a.jsx(Mr,{children:"cultural richness"})," while feeling modern and visually striking."]})},{title:"Typography",description:a.jsxs(a.Fragment,{children:["Use typography that balances ",a.jsx(Mr,{children:"luxury"})," and ",a.jsx(Mr,{children:"approachability"}),", expressing both refinement and human warmth."]})},{title:"Visual Tone",description:a.jsxs(a.Fragment,{children:["Design packaging that feels ",a.jsx(Mr,{children:"elevated"})," and ",a.jsx(Mr,{children:"culturally rooted"}),", while being functional and experience-driven."]})}],_U=m.section`
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
`,PU=m.p`
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
`,TU=m.div`
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
`,EU=m.div`
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
`,IU=m.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #a349c6;
  margin-bottom: 0.7rem;
  text-align: center;
`,AU=m.div`
  color: #444;
  font-size: 0.9rem;
  line-height: 1.4;
  text-align: center;
`,MU=()=>a.jsxs(_U,{children:[a.jsx(CU,{children:"Branding Challenges"}),a.jsx(PU,{children:"The main design challenges for the ZAR brand were:"}),a.jsx(TU,{children:DU.map((t,e)=>a.jsxs(EU,{children:[a.jsx(IU,{children:t.title}),a.jsx(AU,{children:t.description})]},t.title))})]}),zU="/Nooshin-Shahsavan-portfolio/assets/pzar1.66695dc5.jpeg",FU="/Nooshin-Shahsavan-portfolio/assets/pzar2.45f48d83.png",RU="/Nooshin-Shahsavan-portfolio/assets/pzar3.e9055e0a.png",LU="/Nooshin-Shahsavan-portfolio/assets/pzar4.b47681e2.jpg",NU=m.section`
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
`,OU=m.h1`
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
`,$U=m.p`
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
`,BU=m.div`
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
`,x4=m.div`
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
`,VU=m.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  background: #f3f3f3;
`,WU=m.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  ${x4}:hover & {
    transform: scale(1.02);
  }
`,UU=m.div`
  padding: 1.5rem;
  background: none;
`,HU=m.h3`
  font-size: 0.95rem;
  font-weight: 500;
  color: #444;
  margin-bottom: 0.5rem;
  line-height: 1.4;
`,YU=m.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(76, 16, 129, 0.9);
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`,GU=()=>{const t=[{src:zU,alt:"Pack Zar 1",title:"Selecting a traditional Iranian motif"},{src:FU,alt:"Pack Zar 2",title:"Getting inspiration from a detail of it"},{src:RU,alt:"Pack Zar 3",title:"Designed a saffron flower inspired by traditional motifs, using purple and gold to reflect its value and cultural roots."},{src:LU,alt:"Pack Zar 4",title:"Applying the design to the package"}];return a.jsxs(NU,{children:[a.jsx(OU,{children:"Packaging Design Process"}),a.jsx($U,{children:"The packaging design process involved researching traditional Iranian motifs, extracting key elements, and creating a modern saffron flower illustration that reflects ZAR's Persian heritage while appealing to contemporary consumers."}),a.jsx(BU,{children:t.map((e,i)=>a.jsxs(x4,{children:[a.jsxs(VU,{children:[a.jsx(WU,{src:e.src,alt:e.alt}),a.jsx(YU,{children:"ZAR"})]}),a.jsx(UU,{children:a.jsx(HU,{children:e.title})})]},e.alt))})]})},XU=m.div`
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
`,ZU=m.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: left;
`,qU=m.button`
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
`,L0=[{id:"overview",label:"Overview",targetId:"zar-first"},{id:"challenges",label:"Key Challenges",targetId:"zar-problem"},{id:"logo",label:"Logo Design",targetId:"zar-logo"},{id:"color",label:"Color Palette",targetId:"zar-color"},{id:"typography",label:"Typography",targetId:"zar-typography"},{id:"packaging",label:"Packaging",targetId:"zar-packaging"},{id:"mockups",label:"Mockups",targetId:"zar-mockups"}],QU=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("overview");q.useEffect(()=>{const o={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},s=new IntersectionObserver(l=>{l.forEach(c=>{if(c.isIntersecting){const d=c.target.id,u=L0.find(p=>p.targetId===d);u&&n(u.id)}})},o);return L0.forEach(l=>{const c=document.getElementById(l.targetId);c&&s.observe(c)}),()=>{s.disconnect()}},[]);const r=(o,s)=>{const l=document.getElementById(o);l&&(l.scrollIntoView({behavior:"smooth",block:"center"}),e(s))};return a.jsxs(XU,{children:[a.jsx(ZU,{children:"Menu"}),L0.map(o=>a.jsx(qU,{isActive:i===o.id,isClicked:t===o.id,onClick:()=>r(o.targetId,o.id),children:o.label},o.id))]})},KU=m.div`
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
`,JU=_r`
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
`,Cb=m.h2`
  width: 100vw;
  text-align: center;
  font-size: 2.1rem;
  font-weight: 700;
  color: #181818;
  margin: 2.5rem 0 1.5rem 0;
  letter-spacing: -1px;
`,eH=()=>a.jsxs(a.Fragment,{children:[a.jsxs(KU,{children:[a.jsx(rt,{title:"Zar Project | Nooshin Shahsavan - Creative Design & Branding",description:"Explore the Zar project - an innovative branding and digital design project by Nooshin Shahsavan combining contemporary aesthetics with cultural elements.",keywords:"Zar project, creative design, brand design, digital design, visual identity, Nooshin Shahsavan, design portfolio",image:"/src/assets/zar/banner-zar.png"}),a.jsx(JU,{}),a.jsx(QU,{}),a.jsx("div",{id:"zar-overview",children:a.jsx(HV,{})}),a.jsx("div",{id:"zar-second",children:a.jsx(JV,{})}),a.jsx("div",{id:"zar-problem",children:a.jsx(MU,{})}),a.jsx("div",{id:"zar-logo",children:a.jsx(lW,{})}),a.jsx("div",{id:"zar-logo-process",children:a.jsx(SU,{})}),a.jsx("div",{id:"zar-color",children:a.jsx(gW,{})}),a.jsx("div",{id:"zar-typography",children:a.jsx(SW,{})}),a.jsxs("div",{id:"zar-packaging",children:[a.jsx(Cb,{children:"Packaging"}),a.jsx(AW,{}),a.jsx(GU,{})]}),a.jsxs("div",{id:"zar-mockups",children:[a.jsx(Cb,{children:"Mockups"}),a.jsx(iU,{}),a.jsx(hU,{}),a.jsx(BW,{}),a.jsx(YW,{}),a.jsx(LW,{}),a.jsx(aU,{}),a.jsx(QW,{})]}),a.jsx(Os,{}),a.jsx(Ls,{})]}),a.jsx(Ns,{})]}),tH="/Nooshin-Shahsavan-portfolio/assets/schedule.eab9ba48.png",iH="/Nooshin-Shahsavan-portfolio/assets/time-out.1cb75783.png",nH="/Nooshin-Shahsavan-portfolio/assets/notification.e385d5e5.png",rH="/Nooshin-Shahsavan-portfolio/assets/pro1.69a05912.mp4",oH=m.section`
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
`,sH=m(L.section)`
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
`,aH=m.div`
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
`,lH=m.div`
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
`,cH=m(L.div)`
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
`,dH=m(L.h2)`
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
`,uH=m(L.p)`
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
`,hH=m.div`
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
`,pH=m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;

  @media (max-width: 600px) {
    border-radius: 12px;
  }
`,fH=()=>a.jsxs(oH,{children:[a.jsx(rt,{title:"Workday Problem 1 - Schedule View Issues | Nooshin Shahsavan",description:"Explore the first problem identified in the Workday UX/UI project - schedule view cluttering and readability issues.",keywords:"Workday problem, schedule view, UX issues, mobile app design, Nooshin Shahsavan",image:"/src/assets/work/workday-phone.png"}),a.jsxs(sH,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:[a.jsxs(aH,{children:[a.jsx(cH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.2},children:"Problem 01"}),a.jsx(dH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.4},children:"Schedule View is Cluttered and Hard to Read"}),a.jsx(uH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.6},children:"The current schedule interface presents information in a dense, overwhelming format. Users struggle to quickly identify their upcoming shifts, making it difficult to plan their week effectively. The lack of visual hierarchy and poor information organization creates unnecessary cognitive load."})]}),a.jsx(lH,{children:a.jsx(hH,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut",delay:.8},children:a.jsx(pH,{src:rH,controls:!0,controlsList:"nodownload",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})})})]})]}),mH="/Nooshin-Shahsavan-portfolio/assets/pro-2.1d80f820.mp4",gH=m.section`
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
`,xH=m(L.section)`
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
`,wH=m.div`
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
`,vH=m.div`
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
`,yH=m(L.div)`
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
`,bH=m(L.h2)`
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
`,kH=m(L.p)`
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
`,jH=m(L.div)`
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
`,SH=m.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 18px;

  @media (max-width: 600px) {
    border-radius: 12px;
  }
`,DH=()=>a.jsxs(gH,{children:[a.jsx(rt,{title:"Workday Problem 2 - Time Off Request Process | Nooshin Shahsavan",description:"Explore the second problem identified in the Workday UX/UI project - complex time off request process.",keywords:"Workday problem, time off request, UX issues, mobile app design, Nooshin Shahsavan",image:"/src/assets/work/workday-phone.png"}),a.jsxs(xH,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:[a.jsxs(wH,{children:[a.jsx(yH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.2},children:"Problem 02"}),a.jsx(bH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.4},children:"Complex Time Off Request Process"}),a.jsx(kH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.6},children:"Requesting time off requires navigating through multiple screens and forms. The process is not intuitive and lacks clear guidance, making it frustrating for users who need to quickly submit requests. The multi-step workflow creates unnecessary friction."})]}),a.jsx(vH,{children:a.jsx(jH,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut",delay:.8},children:a.jsx(SH,{src:mH,controls:!0,controlsList:"nodownload",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})})})]})]}),_H="/Nooshin-Shahsavan-portfolio/assets/error.d6ceb0da.png",CH=m.section`
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
`,PH=m(L.section)`
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
`,TH=m.div`
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
`,EH=m.div`
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
`,IH=m(L.div)`
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
`,AH=m(L.h2)`
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
`,MH=m(L.p)`
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
`,zH=m(L.div)`
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
`,FH=m.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 18px;
  display: block;

  @media (max-width: 600px) {
    border-radius: 12px;
  }
`,RH=()=>a.jsxs(CH,{children:[a.jsx(rt,{title:"Workday Problem 3 - Lack of Feedback | Nooshin Shahsavan",description:"Explore the third problem identified in the Workday UX/UI project - lack of feedback after time off requests.",keywords:"Workday problem, feedback, UX issues, mobile app design, Nooshin Shahsavan",image:"/src/assets/work/workday-phone.png"}),a.jsxs(PH,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:[a.jsxs(TH,{children:[a.jsx(IH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.2},children:"Problem 03"}),a.jsx(AH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.4},children:"No Feedback After Time Off Requests"}),a.jsx(MH,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.6,ease:"easeOut",delay:.6},children:"After submitting a time off request, users receive no confirmation or status updates. This creates uncertainty and anxiety about whether their request was received and approved. The lack of transparency in the process leaves users feeling disconnected from their requests."})]}),a.jsx(EH,{children:a.jsx(zH,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut",delay:.8},children:a.jsx(FH,{src:_H,alt:"No Feedback After Time Off Requests",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})})})]})]}),LH="/Nooshin-Shahsavan-portfolio/assets/persona.52dcd889.jpeg",NH="/Nooshin-Shahsavan-portfolio/assets/user-journey map.a58c2a96.png",OH="/Nooshin-Shahsavan-portfolio/assets/persona-workday.d5695c79.png",$H="/Nooshin-Shahsavan-portfolio/assets/empathy-map.46c045ff.png",BH=m.section`
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
`,VH=m(L.section)`
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
`,WH=m.div`
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
`,UH=m.img`
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
`,HH=m.div`
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
`,YH=m(L.div)`
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
`,GH=m(L.h2)`
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
`,XH=m(L.p)`
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
`,ZH=m(L.div)`
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
`,qH=m.div`
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
`,N0=m(L.button)`
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
`,QH=m.div`
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
`,KH=m.div`
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
`,JH=m.img`
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
`,Pb=m.button`
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
`,eY={journey:NH,persona:OH,empathy:$H},tY=()=>{const[t,e]=T.useState(null);q.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]);const i={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},n={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx(rt,{title:"User Persona & Research | Workday UX Project",description:"Meet Sara, our user persona for the Workday app redesign. Explore her journey, pain points, and the research insights that guided our design decisions.",keywords:"user persona, UX research, user journey, empathy map, Workday app, user experience",image:"/src/assets/work/persona.jpg"}),a.jsxs(BH,{children:[a.jsxs(VH,{variants:i,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsxs(WH,{children:[a.jsx(UH,{src:LH,alt:"User Persona"}),a.jsxs(HH,{children:[a.jsx(YH,{variants:n,children:"Sara 18 years old"}),a.jsx(GH,{variants:n,children:"User Scenario"}),a.jsx(XH,{variants:n,children:`Sara, a first-year psychology student and part-time cashier, struggles to check her weekly schedule in the Workday app. She needs to see all her shifts at once to plan her schoolwork but can only view one day at a time. Requesting time off is also frustrating — the tiny fonts make it hard to use, and she has to constantly check the app for approval updates. She often thinks, "I just want to see my week at a glance" and "Why can't I get a simple notification?"`}),a.jsx(ZH,{variants:n,children:`She often thinks, "I just want to see my week at a glance" and "Why can't I get a simple notification?"`})]})]}),a.jsxs(qH,{children:[a.jsx(N0,{onClick:()=>e("journey"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"Journey Map"}),a.jsx(N0,{onClick:()=>e("persona"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"User Persona"}),a.jsx(N0,{onClick:()=>e("empathy"),whileHover:{scale:1.05},whileTap:{scale:.95},children:"Empathy Map"})]})]}),t&&a.jsxs(a.Fragment,{children:[a.jsx(QH,{onClick:()=>e(null)}),a.jsxs(KH,{children:[a.jsx(Pb,{title:"Close",onClick:()=>e(null),children:"×"}),a.jsx(JH,{src:eY[t],alt:`${t} image`}),a.jsx(Pb,{title:"Close",onClick:()=>e(null),children:"×"})]})]})]})]})},iY=m.section`
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
`,nY=m(L.section)`
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
`,rY=m(L.h1)`
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
`,oY=m(L.p)`
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
`,sY=m(L.hr)`
  border: none;
  border-top: 2px solid var(--border);
  margin: 2.1rem 0 2.1rem 0;
  width: 100%;
  opacity: 0.6;
`,aY=m.div`
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
`,Tu=m.div`
  flex: 1;
  min-width: 160px;
`,Eu=m.div`
  font-size: 1rem;
  font-weight: 700;
  color: #3e2ffc;
  margin-bottom: 0.3rem;
  letter-spacing: 0.01em;
  text-transform: uppercase;
`,Iu=m.ul`
  padding-left: 1.1em;
  margin: 0.1em 0 0.7em 0;
  font-size: 1rem;
  color: #444;
  line-height: 1.5;
  opacity: 0.9;

  li {
    margin-bottom: 2px;
  }
`,lY=m(L.h2)`
  color: #181818;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 1.1rem 0 1rem 0;
  letter-spacing: 0.02em;
  opacity: 0.8;
`,cY=m.div`
  display: flex;
  gap: 0.7rem;
  margin: 0.5rem 0 0 0;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`,O0=m(L.div)`
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
`,$0=m.div`
  font-size: 1.7rem;
  font-weight: 900;
  margin-bottom: 0.15rem;
  line-height: 1;
`,B0=m.span`
  font-size: 0.98rem;
  font-weight: 700;
  margin-left: 0.3rem;
`,V0=m.div`
  margin-top: 0.2rem;
  font-size: 0.98rem;
  font-weight: 400;
  color: #fff;
  line-height: 1.35;
`,dY=()=>{const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},e={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx(rt,{title:"User Insight & Research Findings | Workday UX Project",description:"Discover the key insights from user research and usability testing that revealed critical pain points in the Workday app experience.",keywords:"user insight, UX research, usability testing, user feedback, Workday app, design research",image:"/src/assets/work/user-insight.jpg"}),a.jsx(iY,{children:a.jsxs(nY,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx(rY,{variants:e,children:"User Insight"}),a.jsxs(oY,{variants:e,children:["To gain a better understanding of real user frustrations, I started with an ",a.jsx("a",{href:"#",children:"open-ended Google Form survey"}),". From the responses, I intentionally selected five ",a.jsx("strong",{children:"part-time workers"}),", as their lifestyle closely matched the app's target audience. During the usability sessions, participants frequently expressed ",a.jsx("span",{className:"em",children:"frustration"})," due to the long and ",a.jsx("span",{className:"em",children:"confusing steps, lack of clear guidance, and unclear instructions"}),". These issues caused confusion and made the overall experience feel frustrating and mentally exhausting for them."]}),a.jsx(sY,{variants:e}),a.jsxs(aY,{children:[a.jsxs(Tu,{children:[a.jsx(Eu,{children:"METHOD"}),a.jsxs(Iu,{children:[a.jsx("li",{children:"In-person moderated usability testing"}),a.jsx("li",{children:"Mostly observation with occasional guidance"})]})]}),a.jsxs(Tu,{children:[a.jsx(Eu,{children:"PARTICIPANTS"}),a.jsx(Iu,{children:a.jsx("li",{children:"5 part-time workers aligned with target audience"})})]}),a.jsxs(Tu,{children:[a.jsx(Eu,{children:"TASKS"}),a.jsxs(Iu,{children:[a.jsx("li",{children:"Find the current week's schedule"}),a.jsx("li",{children:'Locate the "Day Off" option'}),a.jsx("li",{children:"Request and track a day off for two days in the upcoming week via mobile app"})]})]}),a.jsxs(Tu,{children:[a.jsx(Eu,{children:"DATA COLLECTION"}),a.jsx(Iu,{children:a.jsx("li",{children:"Varied per participant, depending on their pace and task complexity"})})]})]}),a.jsx(lY,{variants:e,children:"What I found!"}),a.jsxs(cY,{children:[a.jsxs(O0,{bg:"#ff7c1d",variants:e,whileHover:{scale:1.02},transition:{duration:.2},children:[a.jsxs($0,{children:["60% ",a.jsx(B0,{children:"3/5"})]}),a.jsxs(V0,{children:["Viewing weekly schedule was tiring",a.jsx("br",{}),"3 users had to check days one by one",a.jsx("br",{}),"and write them down on paper"]})]}),a.jsxs(O0,{bg:"#ff9528",variants:e,whileHover:{scale:1.02},transition:{duration:.2},children:[a.jsxs($0,{children:["80% ",a.jsx(B0,{children:"4/5"})]}),a.jsxs(V0,{children:['Hard to find "Day Off" option',a.jsx("br",{}),"Most users struggled to locate it"]})]}),a.jsxs(O0,{bg:"#ffb531",variants:e,whileHover:{scale:1.02},transition:{duration:.2},children:[a.jsxs($0,{children:["50% ",a.jsx(B0,{children:"2.5/5"})]}),a.jsxs(V0,{children:["Unclear how to track time-off request",a.jsx("br",{}),"Users didn't know what happens after submitting"]})]})]})]})})]})},uY=m.section`
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
`,hY=m(L.section)`
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
`,pY=m(L.h1)`
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
`,fY=m(L.p)`
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
`,mY=m(L.hr)`
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
`,gY=m(L.h2)`
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
`,xY=m(L.ol)`
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
`,wY=m(L.div)`
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
`,vY=m.span`
  color: #3e2ffc;
  font-weight: 700;
  font-size: 1rem;
  margin-right: 0.5rem;
`,yY=m.span`
  color: #444;
  font-size: 14px;
  font-weight: 400;
  opacity: 0.9;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`,bY=()=>{const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},e={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},i=["Make the weekly schedule easily viewable at a glance on a single screen.","Simplify the time-off request process with fewer, clearer steps.","Provide clear, immediate feedback after submitting a time-off request."];return a.jsxs(a.Fragment,{children:[a.jsx(rt,{title:"Challenge & Goals | UX Design Process",description:"Explore the design challenges and UX goals for creating intuitive user experiences that prioritize simplicity and efficiency.",keywords:"UX challenges, design goals, user experience, design process, UX objectives",image:"/src/assets/work/challenge-goals.jpg"}),a.jsx(uY,{children:a.jsxs(hY,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx(pY,{variants:e,children:"Challenge"}),a.jsxs(fY,{variants:e,children:[a.jsx("b",{children:"How might I"})," make it easier for users to access their full weekly schedule at a glance, all on one screen?",a.jsx("br",{}),"And how can I simplify the time-off request process so it's clear, fast, and takes only a few clicks?"]}),a.jsx(mY,{variants:e}),a.jsx(gY,{variants:e,children:"UX Goals"}),a.jsx(xY,{variants:e,children:i.map((n,r)=>a.jsxs(wY,{variants:e,whileHover:{scale:1.02},transition:{duration:.2},children:[a.jsxs(vY,{children:[r+1,"."]}),a.jsx(yY,{children:n})]},r))})]})})]})},kY=m.section`
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
`,jY=m(L.section)`
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
`,SY=m(L.div)`
  color: #3e2ffc;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`,DY=m(L.h1)`
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
`,_Y=m(L.p)`
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
`,CY=m(L.h2)`
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
`,PY=m.div`
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
`,TY=m.iframe`
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
`,EY=()=>{const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},e={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx(rt,{title:"Solution 1: Making a Schedule | Workday UX Project",description:"Explore the first solution for the Workday app - an improved schedule viewing experience that allows users to see their entire week at a glance.",keywords:"schedule solution, UX design, mobile app, user experience, Workday app, design solution",image:"/src/assets/work/solution1-schedule.jpg"}),a.jsx(kY,{children:a.jsxs(jY,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx(SY,{variants:e,children:"Solution1"}),a.jsx(DY,{variants:e,children:"Making a Schedule"}),a.jsx(_Y,{variants:e,children:`It's super easy to view your schedule—just tap the "Schedule" button right on the home page. By default, it shows the current week with all the daily details. You can scroll down to see your whole month or even the entire year, all on the same page. And if you're looking for a specific date, there's a quick option to type it in and jump right to it.`}),a.jsx(CY,{variants:e,children:"Flow 1"}),a.jsx(PY,{children:a.jsx(TY,{src:"https://embed.figma.com/design/PItVAtjB7EYlwC1YSejOQD/WORKday-App?node-id=138-103&embed-host=share",allowFullScreen:!0})})]})})]})},IY=m.section`
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
`,AY=m(L.section)`
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
`,MY=m(L.div)`
  color: #3e2ffc;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`,zY=m(L.h1)`
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
`,FY=m(L.p)`
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
`,RY=m(L.h2)`
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
`,LY=m.div`
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
`,NY=m.iframe`
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
`,OY=()=>{const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},e={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx(rt,{title:"Solution 2: Taking a Day Off & Getting Notified | Workday UX Project",description:"Explore the second solution for the Workday app - a streamlined time-off request process with instant notifications and clear feedback.",keywords:"time off solution, notifications, UX design, mobile app, user experience, Workday app, design solution",image:"/src/assets/work/solution2-timeoff.jpg"}),a.jsx(IY,{children:a.jsxs(AY,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx(MY,{variants:e,children:"Solution 2"}),a.jsx(zY,{variants:e,children:"Taking a Day Off & Getting Notified"}),a.jsx(FY,{variants:e,children:`Since taking time off and receiving updates are closely connected, they're combined into one simple flow. Users just tap the "Time Off" button on the home page, select their start and end dates, and quickly double-check everything on the calendar. After hitting submit, they'll instantly get a confirmation message. Once the manager reviews the request, users receive a notification with the result—either approved or declined—so they're always kept in the loop.`}),a.jsx(RY,{variants:e,children:"Flow 2"}),a.jsx(LY,{children:a.jsx(NY,{src:"https://embed.figma.com/design/PItVAtjB7EYlwC1YSejOQD/WORKday-App?node-id=165-670&embed-host=share",allowFullScreen:!0})})]})})]})},$Y="/Nooshin-Shahsavan-portfolio/assets/1sol.74afc9a9.mp4",BY="/Nooshin-Shahsavan-portfolio/assets/2sol.5120d106.mp4",VY=m.section`
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
`,WY=m(L.section)`
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
`,UY=m(L.div)`
  color: #3e2ffc;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`,HY=m(L.h1)`
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
`,YY=m.div`
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
`,Tb=m.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,Eb=m(L.h2)`
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
`,Ib=m.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`,Ab=m.video`
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
`,Mb=m.div`
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
`,zb=m.button`
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
`,Fb=m.input.attrs({type:"range"})`
  flex: 1 1 0;
  width: 100%;
  margin: 0 8px;
  accent-color: #3e2ffc;
  height: 4px;

  @media (max-width: 600px) {
    margin: 0 4px;
  }
`,Rb=m.span`
  font-size: 0.85rem;
  color: #444;
  min-width: 40px;
  text-align: right;
  opacity: 0.8;

  @media (max-width: 600px) {
    font-size: 0.8rem;
    min-width: 32px;
  }
`;function Au(t){const e=Math.floor(t/60).toString().padStart(2,"0"),i=Math.floor(t%60).toString().padStart(2,"0");return`${e}:${i}`}const GY=()=>{const t=T.useRef(null),e=T.useRef(null),[i,n]=T.useState(!1),[r,o]=T.useState(!1),[s,l]=T.useState(0),[c,d]=T.useState(0),[u,p]=T.useState(0),[f,g]=T.useState(0),y=()=>{t.current&&(t.current.paused?(t.current.play(),n(!0)):(t.current.pause(),n(!1)))},w=()=>{t.current&&l(t.current.currentTime)},D=()=>{t.current&&p(t.current.duration)},j=E=>{const z=parseFloat(E.target.value);t.current&&(t.current.currentTime=z,l(z))},b=()=>{n(!1),l(u)},v=()=>{e.current&&(e.current.paused?(e.current.play(),o(!0)):(e.current.pause(),o(!1)))},h=()=>{e.current&&d(e.current.currentTime)},x=()=>{e.current&&g(e.current.duration)},k=E=>{const z=parseFloat(E.target.value);e.current&&(e.current.currentTime=z,d(z))},S=()=>{o(!1),d(f)},_={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},C={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return a.jsxs(a.Fragment,{children:[a.jsx(rt,{title:"Final Look: Making a Schedule | Workday UX Project",description:"See the final implementation of the improved schedule viewing experience in the Workday app with interactive video demonstration.",keywords:"final UI, schedule design, UX implementation, mobile app, Workday app, design showcase",image:"/src/assets/work/final-schedule.jpg"}),a.jsx(VY,{children:a.jsxs(WY,{variants:_,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx(UY,{variants:C,children:"Final look of Making a Schedule"}),a.jsx(HY,{variants:C,children:"Flow 1"}),a.jsxs(YY,{children:[a.jsxs(Tb,{children:[a.jsx(Eb,{variants:C,children:"Schedule Flow"}),a.jsxs(Ib,{children:[a.jsx(Ab,{ref:t,src:$Y,onTimeUpdate:w,onLoadedMetadata:D,onEnded:b,playsInline:!0}),a.jsxs(Mb,{children:[a.jsx(zb,{onClick:y,"aria-label":i?"Pause":"Play",children:i?"❚❚":"►"}),a.jsx(Fb,{min:0,max:u,step:.1,value:s,onChange:j,"aria-label":"Video 1 progress"}),a.jsxs(Rb,{children:[Au(s)," / ",Au(u)]})]})]})]}),a.jsxs(Tb,{children:[a.jsx(Eb,{variants:C,children:"Time Off Flow"}),a.jsxs(Ib,{children:[a.jsx(Ab,{ref:e,src:BY,onTimeUpdate:h,onLoadedMetadata:x,onEnded:S,playsInline:!0}),a.jsxs(Mb,{children:[a.jsx(zb,{onClick:v,"aria-label":r?"Pause":"Play",children:r?"❚❚":"►"}),a.jsx(Fb,{min:0,max:f,step:.1,value:c,onChange:k,"aria-label":"Video 2 progress"}),a.jsxs(Rb,{children:[Au(c)," / ",Au(f)]})]})]})]})]})]})})]})},XY=m.section`
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
`,ZY=m(L.section)`
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
`,qY=m(L.div)`
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
`,QY=m(L.h1)`
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
`,KY=m.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`,Lb=m(L.p)`
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
`,JY=m.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
  }
`,eG=m(L.div)`
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
`,tG=m.h3`
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
`,iG=m.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`,nG=()=>{const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.8,ease:"easeOut",staggerChildren:.2}}},e={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},i=[{title:"User-Centered Design",text:"Focus on user needs and behaviors rather than just aesthetics. Speed and simplicity are paramount for busy users."},{title:"Clear Structure",text:"Use intuitive navigation, proper button placement, and readable typography to guide users efficiently."},{title:"Visual Balance",text:"A well-designed app should look good while feeling effortless to use - this balance is key to success."}];return a.jsxs(a.Fragment,{children:[a.jsx(rt,{title:"Key Takeaways | Design Insights & Learnings",description:"Discover the key insights and learnings from our design projects, focusing on user-centered design principles and effective UX strategies.",keywords:"key takeaways, design insights, UX learnings, user-centered design, design principles",image:"/src/assets/work/key-takeaways.jpg"}),a.jsx(XY,{children:a.jsxs(ZY,{variants:t,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-100px"},children:[a.jsx(qY,{variants:e,children:"Finally"}),a.jsx(QY,{variants:e,children:"Key Takeaways"}),a.jsxs(KY,{children:[a.jsx(Lb,{variants:e,children:"Redesigning this app taught me that today's users — especially busy people like part-time workers — value speed and simplicity above all. As a designer, it's easy to get caught up in visuals and aesthetics (which do matter!), but what matters more is how easily someone can use the product."}),a.jsx(Lb,{variants:e,children:"I learned the importance of using clear structure, proper button placement, readable fonts, and intuitive color choices to guide users quickly and confidently through their tasks. A well-designed app should not only look good, but feel effortless to use — and that balance is what I aim for in every project."})]}),a.jsx(JY,{children:i.map((n,r)=>a.jsxs(eG,{variants:e,whileHover:{scale:1.02},transition:{duration:.2},children:[a.jsx(tG,{children:n.title}),a.jsx(iG,{children:n.text})]},r))})]})})]})},rG=m.div`
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
`,oG=m.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #181818;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: left;
`,sG=m.button`
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
`,W0=[{id:"overview",label:"Overview",targetId:"overview"},{id:"problems",label:"Problems",targetId:"problems"},{id:"user-insight",label:"User Insight",targetId:"user-insight"},{id:"challenge",label:"Challenge",targetId:"challenge"},{id:"solutions",label:"Solutions",targetId:"solutions"},{id:"final-ui",label:"Final UI",targetId:"final-ui"},{id:"takeaway",label:"Takeaway",targetId:"takeaway"}],aG=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("overview");q.useEffect(()=>{const o={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},s=new IntersectionObserver(l=>{l.forEach(c=>{if(c.isIntersecting){const d=c.target.id,u=W0.find(p=>p.targetId===d);u&&n(u.id)}})},o);return W0.forEach(l=>{const c=document.getElementById(l.targetId);c&&s.observe(c)}),()=>{s.disconnect()}},[]);const r=(o,s)=>{const l=document.getElementById(o);l&&(l.scrollIntoView({behavior:"smooth",block:"center"}),e(s))};return a.jsxs(rG,{children:[a.jsx(oG,{children:"Menu"}),W0.map(o=>a.jsx(sG,{isActive:i===o.id,isClicked:t===o.id,onClick:()=>r(o.targetId,o.id),children:o.label},o.id))]})},lG=_r`
  body {
    font-family: 'Inter', sans-serif;
    font-size: 10px;
    font-weight: 400;
    background: #ffffff;
    transition: background 0.6s;
  }
`,cG=m.div`
  min-height: 100vh;
  width: 100vw;
  background: #ffffff;
  transition: background 0.2s;
  overflow-x: hidden;
  overflow-y: auto;
`,hw=m(L.section)`
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
`,dG=m(hw)`
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
`,uG=m.img`
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
`,hG=m.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 280px;

  @media (max-width: 900px) {
    min-width: 0;
    width: 100%;
  }
`,pG=m.h1`
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
`,fG=m.h2`
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
`,mG=m.div`
  max-width: 520px;
  width: 100%;

  @media (max-width: 900px) {
    max-width: 100%;
  }
`,gG=m.p`
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
`,xG=m.hr`
  border: none;
  border-top: 2px solid #e0e0e0;
  margin-bottom: 1.3rem;
  margin-top: 0;
  width: 100%;
  opacity: 0.6;
`,wG=m.div`
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
`,U0=m.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;

  @media (max-width: 900px) {
    text-align: center;
  }
`,H0=m.span`
  font-size: 1rem;
  font-weight: 700;
  color: #3e2ffc;
  letter-spacing: 0.5px;
  margin-bottom: 0.16rem;

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`,Y0=m.span`
  color: #444;
  font-size: 14px;
  font-weight: 400;
  white-space: pre-line;
  opacity: 0.9;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`,vG=m(hw)`
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
`,yG=m.h2`
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
`,bG=m.h3`
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
`,kG=m.hr`
  border: none;
  border-top: 2px solid #3e2ffc;
  width: 60%;
  margin: 0 auto 2rem auto;
  opacity: 0.6;

  @media (max-width: 600px) {
    width: 80%;
    margin-bottom: 1.5rem;
  }
`,jG=m.div`
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
`,G0=m.div`
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
`,X0=m.img`
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
`,Z0=m.div`
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
`;m(hw)`
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
`;const SG=m.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  position: relative;
`,DG=m.div`
  position: sticky;
  top: 0;
  align-self: flex-start;
  z-index: 101;

  @media (max-width: 900px) {
    display: none;
  }
`,_G=m.div`
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
`,CG=()=>a.jsxs(a.Fragment,{children:[a.jsxs(cG,{children:[a.jsx(rt,{title:"Workday UX/UI Project | Nooshin Shahsavan - Mobile App Design",description:"Explore the Workday UX/UI project - a comprehensive mobile app design by Nooshin Shahsavan focusing on employee scheduling, time-off management, and workplace communication.",keywords:"Workday project, UX/UI design, mobile app design, user experience, interface design, Nooshin Shahsavan, design portfolio",image:"/src/assets/work/workday-phone.png"}),a.jsx(lG,{}),a.jsxs(SG,{children:[a.jsx(DG,{children:a.jsx(aG,{})}),a.jsxs(_G,{id:"content-wrapper",children:[a.jsx("div",{id:"overview",children:a.jsxs(dG,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:[a.jsx(uG,{src:g4,alt:"Workday App Mockup"}),a.jsxs(hG,{children:[a.jsx(pG,{children:"WORKDAY APP"}),a.jsx(fG,{children:"Overview"}),a.jsxs(mG,{children:[a.jsx(gG,{children:"Workday is a self - service portal , and Workday mobile app , designed to make it easy for employees to access essential information about their work and manage various tasks . employees check the schedule for the upcoming week , view their recent paycheck , ensuring all hours worked are accounted for . If they need time off , they can quickly submit a request and track its status ."}),a.jsx(xG,{}),a.jsxs(wG,{children:[a.jsxs(U0,{children:[a.jsx(H0,{children:"MY ROLE"}),a.jsx(Y0,{children:"UX-UI designer"})]}),a.jsxs(U0,{children:[a.jsx(H0,{children:"DURATION"}),a.jsx(Y0,{children:"4 weeks"})]}),a.jsxs(U0,{children:[a.jsx(H0,{children:"TOOLS"}),a.jsxs(Y0,{children:["Figma",`
`,"FigJam",`
`,"Photoshop"]})]})]})]})]})]})}),a.jsxs("div",{id:"problems",children:[a.jsxs(vG,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8,ease:"easeOut"},children:[a.jsx(yG,{children:"Problem at a Glance"}),a.jsx(bG,{children:"Key Issues Identified"}),a.jsx(kG,{}),a.jsxs(jG,{children:[a.jsxs(G0,{children:[a.jsx(X0,{src:tH,alt:"Schedule Icon"}),a.jsx(Z0,{children:"The schedule view is cluttered and hard to read, making it difficult for users to quickly understand their upcoming shifts."})]}),a.jsxs(G0,{children:[a.jsx(X0,{src:iH,alt:"Time Off Icon"}),a.jsx(Z0,{children:"Requesting time off is a multi-step process that requires navigating through multiple screens."})]}),a.jsxs(G0,{children:[a.jsx(X0,{src:nH,alt:"Notification Icon"}),a.jsx(Z0,{children:"Users receive no feedback after submitting time off requests, leaving them uncertain about the status."})]})]})]}),a.jsx(fH,{}),a.jsx(DH,{}),a.jsx(RH,{})]}),a.jsxs("div",{id:"user-insight",children:[a.jsx(tY,{}),a.jsx(dY,{})]}),a.jsx("div",{id:"challenge",children:a.jsx(bY,{})}),a.jsxs("div",{id:"solutions",children:[a.jsx(EY,{}),a.jsx(OY,{})]}),a.jsx("div",{id:"final-ui",children:a.jsx(GY,{})}),a.jsx("div",{id:"takeaway",children:a.jsx(nG,{})})]})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"center",width:"100%",background:"#ffffff"},children:[a.jsx("style",{children:`
            .menu-work-container {
              background: #ffffff !important;
            }
            .menu-work-title {
              color: #181818 !important;
            }
          `}),a.jsx(Os,{})]}),a.jsx(Ls,{})]}),a.jsx(Ns,{})]}),PG=m.div`
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
`,TG=m.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #000000;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  text-align: left;
`,EG=m.button`
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
`,q0=[{id:"photography",label:"Photography",targetId:"fun-photography"},{id:"illustrations",label:"Illustrations & Graphics",targetId:"fun-illustrations"},{id:"ar-vr",label:"AR/VR Experience",targetId:"fun-ar-vr"},{id:"animation",label:"2D Animation",targetId:"fun-animation"}],IG=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("photography");q.useEffect(()=>{const o={root:null,rootMargin:"-20% 0px -70% 0px",threshold:0},s=new IntersectionObserver(l=>{l.forEach(c=>{if(c.isIntersecting){const d=c.target.id,u=q0.find(p=>p.targetId===d);u&&n(u.id)}})},o);return q0.forEach(l=>{const c=document.getElementById(l.targetId);c&&s.observe(c)}),()=>{s.disconnect()}},[]);const r=(o,s)=>{const l=document.getElementById(o);l&&(l.scrollIntoView({behavior:"smooth",block:"center"}),e(s))};return a.jsxs(PG,{children:[a.jsx(TG,{children:"Menu"}),q0.map(o=>a.jsx(EG,{isActive:i===o.id,isClicked:t===o.id,onClick:()=>r(o.targetId,o.id),children:o.label},o.id))]})},AG="/Nooshin-Shahsavan-portfolio/assets/straw1.d023f398.MP4",MG="/Nooshin-Shahsavan-portfolio/assets/straw3.a8624565.png",zG="/Nooshin-Shahsavan-portfolio/assets/straw4.8dc90d25.jpg",FG="/Nooshin-Shahsavan-portfolio/assets/straw5.00eb7c35.png",RG="/Nooshin-Shahsavan-portfolio/assets/g4.30fc4dab.jpg",LG="/Nooshin-Shahsavan-portfolio/assets/g2.55ac7e77.jpg",NG="/Nooshin-Shahsavan-portfolio/assets/g1.12d671ca.png",OG="/Nooshin-Shahsavan-portfolio/assets/p1.7b415a4d.png",$G="/Nooshin-Shahsavan-portfolio/assets/p2.bd8d0138.jpg",BG="/Nooshin-Shahsavan-portfolio/assets/g3.b54ed427.png",VG="/Nooshin-Shahsavan-portfolio/assets/vr.8bf5a7e9.mp4",WG="/Nooshin-Shahsavan-portfolio/assets/2D.bd827e54.mp4",UG=({src:t,className:e,style:i})=>{const n=T.useRef(null),[r,o]=T.useState(!1),[s,l]=T.useState(0),[c,d]=T.useState(0);T.useEffect(()=>{const y=n.current;if(!y)return;const w=()=>l(y.currentTime),D=()=>d(y.duration),j=()=>o(!0),b=()=>o(!1);return y.addEventListener("timeupdate",w),y.addEventListener("loadedmetadata",D),y.addEventListener("play",j),y.addEventListener("pause",b),()=>{y.removeEventListener("timeupdate",w),y.removeEventListener("loadedmetadata",D),y.removeEventListener("play",j),y.removeEventListener("pause",b)}},[]);const u=()=>{n.current&&(r?n.current.pause():n.current.play())},p=y=>{if(n.current){const w=parseFloat(y.target.value)/100*c;n.current.currentTime=w}},f=y=>{const w=Math.floor(y/60),D=Math.floor(y%60);return`${w}:${D.toString().padStart(2,"0")}`},g=c>0?s/c*100:0;return a.jsxs("div",{className:`custom-video-player ${e||""}`,style:i,children:[a.jsx("video",{ref:n,src:t,playsInline:!0,muted:!0,style:{width:"100%",height:"100%",objectFit:"cover"}}),a.jsxs("div",{className:"video-controls",children:[a.jsx("button",{className:"play-pause-btn",onClick:u,"aria-label":r?"Pause":"Play",children:r?"⏸️":"▶️"}),a.jsx("div",{className:"progress-container",children:a.jsx("input",{type:"range",min:"0",max:"100",value:g,onChange:p,className:"progress-bar"})}),a.jsxs("div",{className:"time-display",children:[f(s)," / ",f(c)]})]}),a.jsx("style",{children:`
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
      `})]})},w4=fl`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`,HG=fl`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,YG=fl`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`,GG=m.div`
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
`,XG=_r`
  body {
    background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
    margin: 0;
    padding: 0;
    overflow-y: auto;
  }
  html {
    overflow-x: hidden;
  }
`,Mu=m.h2`
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
`,Bl=m.section`
  width: 100vw;
  min-height: auto;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0 40px 0;
  animation: ${HG} 0.8s ease-out;
  
  @media (max-width: 900px) {
    padding: 40px 0 30px 0;
  }
  @media (max-width: 600px) {
    padding: 30px 0 20px 0;
  }
`,ZG=m.h1`
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(135deg, #181818 0%, #374151 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 2rem;
  letter-spacing: -2px;
  text-align: center;
  animation: ${YG} 1s ease-out;
  
  @media (max-width: 900px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2.5rem;
  }
`,qG=m.p`
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
`,zu=m.p`
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
`,QG=m.div`
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
`,Ko=m.div`
  grid-area: ${t=>t.gridArea};
  aspect-ratio: ${t=>t.aspectRatio||"1/1"};
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  animation: ${w4} 6s ease-in-out infinite;
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
`,KG=m(Ko)`
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
`,JG=m.div`
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
`,ea=m(Ko)`
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
`,Nb=m.div`
  width: 100%;
  max-width: 1200px;
  aspect-ratio: 16/9;
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  animation: ${w4} 6s ease-in-out infinite;
  
  @media (max-width: 900px) {
    max-width: 98vw;
    border-radius: 20px;
  }
  @media (max-width: 600px) {
    border-radius: 16px;
  }
`,eX=()=>a.jsxs(a.Fragment,{children:[a.jsxs(GG,{children:[a.jsx(rt,{title:"School Projects | Nooshin Shahsavan - Creative Portfolio",description:"Explore Nooshin Shahsavan's school projects featuring photography, illustrations, AR/VR experiences, and 2D animations showcasing creative skills and innovative design thinking.",keywords:"school projects, photography, illustrations, AR/VR, 2D animation, creative portfolio, Nooshin Shahsavan, design projects",image:"/src/assets/fun/funhome.jpg"}),a.jsx(XG,{}),a.jsx(IG,{}),a.jsxs(Bl,{children:[a.jsx(ZG,{children:"School Projects"}),a.jsx(qG,{children:"These are all school projects that showcase my interests and creative work. I'm excited to share some of my favorite pieces with you."})]}),a.jsxs(Bl,{id:"fun-photography",children:[a.jsx(Mu,{children:"Photography"}),a.jsx(zu,{children:"Exploring the art of visual storytelling through photography, capturing moments and creating compelling narratives."}),a.jsxs(QG,{children:[a.jsx(KG,{gridArea:"1 / 2 / 3 / 5",aspectRatio:"1/1.4",category:"photography",children:a.jsx("video",{src:AG,controls:!0,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"},controlsList:"nodownload"})}),a.jsx(Ko,{gridArea:"1 / 5 / 3 / 8",aspectRatio:"1/1.4",category:"photography",children:a.jsx("img",{src:vp,alt:"Photography 1"})}),a.jsx(Ko,{gridArea:"3 / 1 / 4 / 3",aspectRatio:"2/1",category:"photography",children:a.jsx("img",{src:vp,alt:"Photography 2"})}),a.jsx(Ko,{gridArea:"3 / 3 / 4 / 5",aspectRatio:"2/1",category:"photography",children:a.jsx("img",{src:MG,alt:"Photography 3"})}),a.jsx(Ko,{gridArea:"3 / 5 / 4 / 7",aspectRatio:"2/1",category:"photography",children:a.jsx("img",{src:zG,alt:"Photography 4"})}),a.jsx(Ko,{gridArea:"3 / 7 / 4 / 9",aspectRatio:"2/1",category:"photography",children:a.jsx("img",{src:FG,alt:"Photography 5"})})]})]}),a.jsxs(Bl,{id:"fun-illustrations",children:[a.jsx(Mu,{children:"Illustrations & Graphics"}),a.jsx(zu,{children:"Creative illustrations and graphic design work showcasing artistic skills and visual communication."}),a.jsxs(JG,{children:[a.jsx(ea,{gridArea:"1 / 1 / 2 / 2",category:"illustrations",children:a.jsx("img",{src:RG,alt:"Illustration 1"})}),a.jsx(ea,{gridArea:"1 / 2 / 2 / 3",category:"illustrations",children:a.jsx("img",{src:BG,alt:"Illustration 2"})}),a.jsx(ea,{gridArea:"1 / 3 / 2 / 4",category:"illustrations",children:a.jsx("img",{src:NG,alt:"Illustration 3"})}),a.jsx(ea,{gridArea:"1 / 4 / 2 / 5",category:"illustrations",children:a.jsx("img",{src:LG,alt:"Illustration 4"})}),a.jsx(ea,{gridArea:"2 / 2 / 3 / 3",category:"before",children:a.jsx("img",{src:$G,alt:"Before"})}),a.jsx(ea,{gridArea:"2 / 3 / 3 / 4",category:"after",children:a.jsx("img",{src:OG,alt:"After"})})]})]}),a.jsxs(Bl,{id:"fun-ar-vr",children:[a.jsx(Mu,{children:"AR/VR Experience"}),a.jsx(zu,{children:"Immersive technology projects exploring augmented and virtual reality experiences."}),a.jsx(Nb,{children:a.jsx(UG,{src:VG})})]}),a.jsxs(Bl,{id:"fun-animation",children:[a.jsx(Mu,{children:"2D Animation"}),a.jsx(zu,{children:"Creative animation work demonstrating motion design and storytelling through animated graphics."}),a.jsx(Nb,{children:a.jsx("video",{src:WG,controls:!0,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"},controlsList:"nodownload"})})]}),a.jsx(Os,{}),a.jsx(Ls,{})]}),a.jsx(Ns,{})]}),tX=m.div`
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
`,iX=m.div`
  font-size: 0.75rem;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1.2rem;
`,nX=m.button`
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
`,Q0=[{id:"overview",label:"Overview",targetId:"bcit-overview"},{id:"challenge",label:"Challenge",targetId:"bcit-challenge"},{id:"moodboard",label:"Visual Direction",targetId:"bcit-moodboard"},{id:"wordmark",label:"Wordmark",targetId:"bcit-wordmark"},{id:"banners",label:"Banners",targetId:"bcit-banners"},{id:"stickers",label:"Stickers",targetId:"bcit-stickers"},{id:"poster",label:"Poster",targetId:"bcit-poster"},{id:"motion",label:"Motion Graphics",targetId:"bcit-motion"},{id:"reflection",label:"Reflection",targetId:"bcit-reflection"}],rX=()=>{const[t,e]=T.useState(null),[i,n]=T.useState("overview");q.useEffect(()=>{const o=new IntersectionObserver(s=>{s.forEach(l=>{if(l.isIntersecting){const c=Q0.find(d=>d.targetId===l.target.id);c&&n(c.id)}})},{root:null,rootMargin:"-20% 0px -70% 0px",threshold:0});return Q0.forEach(s=>{const l=document.getElementById(s.targetId);l&&o.observe(l)}),()=>o.disconnect()},[]);const r=(o,s)=>{const l=document.getElementById(o);l&&(l.scrollIntoView({behavior:"smooth",block:"start"}),e(s))};return a.jsxs(tX,{children:[a.jsx(iX,{children:"Contents"}),Q0.map(o=>a.jsx(nX,{isActive:i===o.id,isClicked:t===o.id,onClick:()=>r(o.targetId,o.id),children:o.label},o.id))]})},Ob=new URL("/Nooshin-Shahsavan-portfolio/assets/wordmark-bcit.02fea1d6.png",self.location).href,oX=new URL("/Nooshin-Shahsavan-portfolio/assets/moodboard-bcit.8c5ded4b.png",self.location).href,sX=new URL("/Nooshin-Shahsavan-portfolio/assets/banner-bcit1.ea0f6725.png",self.location).href,aX=new URL("/Nooshin-Shahsavan-portfolio/assets/banner-bcit2.17c3c7e7.png",self.location).href,lX=new URL("/Nooshin-Shahsavan-portfolio/assets/stickers-bcit.08cb2bef.jpg",self.location).href,cX=new URL("/Nooshin-Shahsavan-portfolio/assets/sticker-bcit1.ce2a218c.png",self.location).href,dX=new URL("/Nooshin-Shahsavan-portfolio/assets/sticker-bcit2.d189dbfc.png",self.location).href,uX=new URL("/Nooshin-Shahsavan-portfolio/assets/sticker-bcit3.0a323983.png",self.location).href,hX=new URL("/Nooshin-Shahsavan-portfolio/assets/poster-bcit.f3cbc3cd.png",self.location).href,pX=new URL("/Nooshin-Shahsavan-portfolio/assets/ig-bcit1.556e562b.mp4",self.location).href,fX=new URL("/Nooshin-Shahsavan-portfolio/assets/ig-bcit2.6b529386.mp4",self.location).href;fl`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;const ye={hidden:{opacity:0,y:40},visible:{opacity:1,y:0,transition:{duration:.75,ease:[.22,1,.36,1]}}},Vl={hidden:{opacity:0,scale:.96},visible:{opacity:1,scale:1,transition:{duration:.8,ease:[.22,1,.36,1]}}},mX={hidden:{},visible:{transition:{staggerChildren:.12}}},gX=_r`
  body { background: #fff; margin: 0; padding: 0; overflow-y: auto; }
  html { overflow-x: hidden; }
`,xX=m.div`
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
`,tr=m.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 2.5rem;
  @media (max-width: 768px) { padding: 0 1.5rem; }
  @media (max-width: 480px) { padding: 0 1.2rem; }
`,ir=m.section`
  width: 100%;
  padding: 100px 0;
  background: ${t=>t.bg||"#fff"};
  @media (max-width: 768px) { padding: 70px 0; }
  @media (max-width: 480px) { padding: 50px 0; }
`,mn=m.span`
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #5a8a3c;
  margin-bottom: 1rem;
`;m.h1`
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 900;
  color: #0d0d0d;
  letter-spacing: -0.03em;
  line-height: 1.08;
  margin: 0 0 1.4rem;
`;const zr=m.h2`
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: #0d0d0d;
  letter-spacing: -0.025em;
  line-height: 1.15;
  margin: 0 0 1.2rem;
`,ta=m.p`
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  color: #555;
  line-height: 1.82;
  max-width: 680px;
  margin: 0 0 1.5rem;
`,Fr=m.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.82;
  margin: 0 0 1.2rem;
`,Vo=m.div`
  width: 48px;
  height: 3px;
  background: #5a8a3c;
  border-radius: 2px;
  margin-bottom: 2rem;
`,wX=m.section`
  width: 100%;
  padding: 80px 0 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #fff;
`,vX=m(L.img)`
  width: min(420px, 80vw);
  height: auto;
  display: block;
  margin: 0 auto 3rem;
  object-fit: contain;
`,yX=m(L.h1)`
  font-size: clamp(2rem, 4.5vw, 3.6rem);
  font-weight: 900;
  color: #0d0d0d;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 0 0 1rem;
  max-width: 800px;
`,bX=m(L.p)`
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  color: #666;
  line-height: 1.75;
  max-width: 580px;
  margin: 0 auto 3.5rem;
`,kX=m(L.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border: 1px solid #e8e8e8;
  border-radius: 16px;
  overflow: hidden;
  width: min(860px, 92vw);
  @media (max-width: 640px) { grid-template-columns: repeat(2, 1fr); }
`,Fu=m.div`
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
`,Ru=m.p`
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #aaa;
  margin: 0 0 0.4rem;
`,Lu=m.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.4;
`,Wo=m.div`
  margin-bottom: 3.5rem;
`,jX=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 2.5rem; }
`,SX=m(L.div)`
  background: #0d0d0d;
  border-radius: 24px;
  padding: 3.5rem 4rem;
  color: #fff;
  @media (max-width: 768px) { padding: 2.5rem 2rem; }
`,DX=m.p`
  font-size: clamp(1.3rem, 2.5vw, 1.75rem);
  font-weight: 700;
  line-height: 1.5;
  color: #fff;
  margin: 0 0 2rem;
`,_X=m.p`
  font-size: 1rem;
  color: rgba(255,255,255,0.72);
  line-height: 1.82;
  margin: 0;
`,CX=m(L.div)`
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 24px 64px rgba(0,0,0,0.1);
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.6s ease;
  }
  &:hover img { transform: scale(1.015); }
`,PX=m(L.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`,K0=m(L.div)`
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #eee;

  .swatch {
    height: 80px;
    background: ${t=>t.accent};
  }
  .body {
    padding: 1.2rem 1.4rem;
  }
  h4 {
    font-size: 0.85rem;
    font-weight: 700;
    color: #111;
    margin: 0 0 0.4rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  p {
    font-size: 0.85rem;
    color: #666;
    margin: 0;
    line-height: 1.5;
  }
`,TX=m(L.div)`
  background: #f5f5f5;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 3rem;
  margin-bottom: 4rem;
  img {
    width: min(380px, 70%);
    height: auto;
    display: block;
  }
`,EX=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`,Nu=m(L.div)`
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 14px;
  padding: 1.6rem 1.8rem;
  h4 {
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #5a8a3c;
    margin: 0 0 0.6rem;
  }
  p {
    font-size: 0.92rem;
    color: #555;
    line-height: 1.65;
    margin: 0;
  }
`,IX=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`,$b=m(L.div)`
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0,0,0,0.1);
  position: relative;
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.55s ease;
  }
  &:hover img { transform: scale(1.03); }
`,Bb=m.div`
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
  backdrop-filter: blur(6px);
`,AX=m.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 1.5rem;
  @media (max-width: 900px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 500px) { grid-template-columns: 1fr; }
`,Ou=m(L.div)`
  grid-column: ${t=>t.span||"auto"};
  border-radius: 18px;
  overflow: hidden;
  background: #f8f8f8;
  box-shadow: 0 8px 28px rgba(0,0,0,0.07);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }
  &:hover img { transform: scale(1.04); }
  @media (max-width: 900px) { grid-column: auto; }
`,MX=m(L.div)`
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 32px 80px rgba(0,0,0,0.13);
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.6s ease;
  }
  &:hover img { transform: scale(1.01); }
`,zX=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media (max-width: 640px) { grid-template-columns: 1fr; }
`,Vb=m(L.div)`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 56px rgba(0,0,0,0.12);
  background: #000;
  video {
    width: 100%;
    height: auto;
    display: block;
  }
`,Wb=m.p`
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #aaa;
  text-align: center;
  margin: 0.9rem 0 0;
`,FX=m.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 3rem; }
`,RX=m(L.blockquote)`
  font-size: clamp(1.2rem, 2.2vw, 1.6rem);
  font-weight: 700;
  color: #0d0d0d;
  line-height: 1.5;
  margin: 0 0 2.5rem;
  padding-left: 1.5rem;
  border-left: 4px solid #5a8a3c;
`,LX=m.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,NX=m(L.span)`
  display: inline-block;
  padding: 0.5rem 1.1rem;
  border-radius: 100px;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  background: ${t=>t.accent?"#5a8a3c":"#f2f2f2"};
  color: ${t=>t.accent?"#fff":"#333"};
  transition: background 0.2s, color 0.2s;
  cursor: default;
  &:hover {
    background: ${t=>t.accent?"#4a7530":"#e8e8e8"};
  }
`,OX=[{label:"Graphic Design",accent:!0},{label:"Brand Identity",accent:!0},{label:"Campaign Design",accent:!0},{label:"Environmental Graphics",accent:!1},{label:"Motion Graphics",accent:!0},{label:"Social Media Design",accent:!1},{label:"Adobe Illustrator",accent:!1},{label:"Adobe Photoshop",accent:!1},{label:"Adobe After Effects",accent:!1},{label:"Visual Communication",accent:!1}],nr=m.div`
  width: 100%;
  height: 1px;
  background: #ebebeb;
`,$X=()=>a.jsxs(a.Fragment,{children:[a.jsxs(xX,{children:[a.jsx(rt,{title:"BCIT Energy Awareness Campaign | Nooshin Shahsavan",description:"A full-scope awareness campaign developed for the BCIT Green Team — branding, posters, banners, stickers, and social media motion graphics by Nooshin Shahsavan.",keywords:"BCIT, energy awareness, green team, campaign design, brand identity, poster design, motion graphics, Nooshin Shahsavan",image:"/src/assets/bcitenergy/wordmark-bcit.png"}),a.jsx(gX,{}),a.jsx(rX,{}),a.jsxs(wX,{children:[a.jsx(vX,{src:Ob,alt:"BCIT Energy Campaign Wordmark",variants:Vl,initial:"hidden",animate:"visible"}),a.jsx(L.div,{variants:ye,initial:"hidden",animate:"visible",style:{textAlign:"center"},children:a.jsx(mn,{children:"BCIT Green Team — 2024"})}),a.jsxs(yX,{variants:ye,initial:"hidden",animate:"visible",transition:{delay:.1},children:["BCIT Energy",a.jsx("br",{}),"Awareness Campaign"]}),a.jsx(bX,{variants:ye,initial:"hidden",animate:"visible",transition:{delay:.2},children:"Encouraging sustainable energy habits through a friendly and engaging visual campaign."}),a.jsxs(kX,{variants:ye,initial:"hidden",animate:"visible",transition:{delay:.3},children:[a.jsxs(Fu,{children:[a.jsx(Ru,{children:"Client"}),a.jsx(Lu,{children:"BCIT Green Team"})]}),a.jsxs(Fu,{children:[a.jsx(Ru,{children:"Role"}),a.jsx(Lu,{children:"Graphic Designer"})]}),a.jsxs(Fu,{children:[a.jsx(Ru,{children:"Scope"}),a.jsx(Lu,{children:"Brand Identity, Posters, Stickers, Banners, Motion"})]}),a.jsxs(Fu,{children:[a.jsx(Ru,{children:"Goal"}),a.jsx(Lu,{children:"Reduce energy & heating consumption on campus"})]})]})]}),a.jsx(nr,{}),a.jsx("div",{id:"bcit-overview",children:a.jsx(ir,{children:a.jsx(tr,{children:a.jsxs(jX,{children:[a.jsx(L.div,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:a.jsxs(Wo,{children:[a.jsx(mn,{children:"Project Overview"}),a.jsxs(zr,{children:["A campaign built from",a.jsx("br",{}),"concept to production."]}),a.jsx(Vo,{})]})}),a.jsxs(L.div,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-60px"},children:[a.jsx(ta,{children:"The BCIT Energy Awareness Campaign was created to encourage students, faculty, and staff to adopt energy-saving habits during the colder months."}),a.jsx(Fr,{children:"Working independently from concept to final execution, I developed a cohesive visual system that communicated environmental responsibility in a way that felt friendly, positive, and accessible."}),a.jsx(Fr,{children:"The campaign was deployed across multiple touchpoints including banners, posters, stickers, and social media content, ensuring a consistent message across both physical and digital environments."})]})]})})})}),a.jsx(nr,{}),a.jsx("div",{id:"bcit-challenge",children:a.jsx(ir,{children:a.jsxs(tr,{children:[a.jsx(L.div,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:a.jsx(mn,{children:"The Challenge"})}),a.jsxs(SX,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[a.jsx(DX,{children:'"Environmental campaigns often feel technical, dry, and overly serious — how do you make sustainability feel approachable?"'}),a.jsx(_X,{children:"Environmental messaging can easily fall flat when it leans too heavily on obligation and severity. The challenge here was to create a visual identity that felt welcoming and engaging while clearly communicating the importance of reducing energy consumption. The visual language needed to appeal to a broad campus audience — from students to faculty — while maintaining a strong connection to sustainability and energy efficiency."})]})]})})}),a.jsx(nr,{}),a.jsx("div",{id:"bcit-moodboard",children:a.jsx(ir,{children:a.jsxs(tr,{children:[a.jsx(L.div,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:a.jsxs(Wo,{children:[a.jsx(mn,{children:"Moodboard & Visual Direction"}),a.jsxs(zr,{children:["A visual language rooted",a.jsx("br",{}),"in nature and efficiency."]}),a.jsx(Vo,{}),a.jsx(ta,{children:"The visual direction was inspired by the relationship between sustainability and energy efficiency. A leaf was chosen as a primary visual element — a simple, universally recognised symbol of nature and environmental responsibility."}),a.jsxs(Fr,{children:["The letter ",a.jsx("strong",{children:'"A"'})," was integrated into the concept because it represents the highest rating within energy efficiency labelling systems. Combining the leaf with the letter A established a direct visual relationship between smart energy use and environmental stewardship."]})]})}),a.jsx(CX,{variants:Vl,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:a.jsx("img",{src:oX,alt:"BCIT Energy Campaign Moodboard"})}),a.jsxs(PX,{variants:mX,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[a.jsxs(K0,{accent:"#5a8a3c",variants:ye,children:[a.jsx("div",{className:"swatch"}),a.jsxs("div",{className:"body",children:[a.jsx("h4",{children:"Green"}),a.jsx("p",{children:"Represents nature, sustainability, and growth — the core identity colour of the campaign."})]})]}),a.jsxs(K0,{accent:"#2e6fa3",variants:ye,children:[a.jsx("div",{className:"swatch"}),a.jsxs("div",{className:"body",children:[a.jsx("h4",{children:"Blue"}),a.jsx("p",{children:"Represents winter, cold weather, and the seasonal context of heating consumption."})]})]}),a.jsxs(K0,{accent:"#f0b429",variants:ye,children:[a.jsx("div",{className:"swatch"}),a.jsxs("div",{className:"body",children:[a.jsx("h4",{children:"Yellow"}),a.jsx("p",{children:"Represents warmth, energy, and the positive action the campaign encourages."})]})]})]})]})})}),a.jsx(nr,{}),a.jsx("div",{id:"bcit-wordmark",children:a.jsx(ir,{bg:"#fafafa",children:a.jsxs(tr,{children:[a.jsx(L.div,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:a.jsxs(Wo,{children:[a.jsx(mn,{children:"Wordmark Design"}),a.jsxs(zr,{children:["Where nature meets",a.jsx("br",{}),"energy efficiency."]}),a.jsx(Vo,{})]})}),a.jsx(TX,{variants:Vl,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:a.jsx("img",{src:Ob,alt:"BCIT Energy Awareness Campaign Wordmark"})}),a.jsxs(EX,{children:[a.jsxs(Nu,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[a.jsx("h4",{children:"Concept"}),a.jsx("p",{children:"The wordmark combines a leaf motif with the letter A, creating an immediate visual connection between environmental awareness and energy efficiency ratings."})]}),a.jsxs(Nu,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[a.jsx("h4",{children:"Symbolism"}),a.jsx("p",{children:"The letter A references the top tier of energy efficiency labelling systems, linking responsible energy use to the campaign identity through a single recognisable mark."})]}),a.jsxs(Nu,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[a.jsx("h4",{children:"Application"}),a.jsx("p",{children:"The wordmark was applied consistently across all campaign materials — from large-format banners and posters to stickers and digital social media assets."})]}),a.jsxs(Nu,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[a.jsx("h4",{children:"Foundation"}),a.jsx("p",{children:"As the anchor of the visual system, the wordmark established the tone and personality of the entire campaign — approachable, modern, and purposeful."})]})]})]})})}),a.jsx(nr,{}),a.jsx("div",{id:"bcit-banners",children:a.jsx(ir,{children:a.jsxs(tr,{children:[a.jsx(L.div,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:a.jsxs(Wo,{children:[a.jsx(mn,{children:"Campus Banner System"}),a.jsxs(zr,{children:["Bold, visible, and",a.jsx("br",{}),"impossible to ignore."]}),a.jsx(Vo,{}),a.jsx(ta,{children:"Large-format banners were designed to maximise visibility in campus environments and reinforce the campaign's key message. Both images represent the same banner design displayed in different mockup environments."}),a.jsx(Fr,{children:"The banner system uses bold typography, recognisable campaign branding, and clear visual hierarchy to quickly communicate energy-saving behaviours — meeting people where they already are in their daily campus routines."})]})}),a.jsxs(IX,{children:[a.jsxs($b,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[a.jsx("img",{src:sX,alt:"BCIT Energy Campaign Banner – Mockup 1"}),a.jsx(Bb,{children:"Environment 01"})]}),a.jsxs($b,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-40px"},children:[a.jsx("img",{src:aX,alt:"BCIT Energy Campaign Banner – Mockup 2"}),a.jsx(Bb,{children:"Environment 02"})]})]})]})})}),a.jsx(nr,{}),a.jsx("div",{id:"bcit-stickers",children:a.jsx(ir,{bg:"#fafafa",children:a.jsxs(tr,{children:[a.jsx(L.div,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:a.jsxs(Wo,{children:[a.jsx(mn,{children:"Sticker Design"}),a.jsxs(zr,{children:["Small reminders,",a.jsx("br",{}),"big impact."]}),a.jsx(Vo,{}),a.jsx(ta,{children:"Stickers were developed as a playful extension of the campaign identity — transforming key campaign messages into small, memorable visual reminders placed throughout campus environments."}),a.jsx(Fr,{children:"Using friendly illustrations and recognisable branding helped increase campaign visibility while making sustainability feel approachable and engaging rather than instructional or demanding."})]})}),a.jsxs(AX,{children:[a.jsx(Ou,{span:"1 / 2",variants:Vl,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:a.jsx("img",{src:lX,alt:"BCIT Energy Sticker Collection"})}),a.jsx(Ou,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:a.jsx("img",{src:cX,alt:"BCIT Energy Sticker 1"})}),a.jsx(Ou,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-30px"},children:a.jsx("img",{src:dX,alt:"BCIT Energy Sticker 2"})}),a.jsx(Ou,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-30px"},children:a.jsx("img",{src:uX,alt:"BCIT Energy Sticker 3"})})]})]})})}),a.jsx(nr,{}),a.jsx("div",{id:"bcit-poster",children:a.jsx(ir,{children:a.jsxs(tr,{children:[a.jsx(L.div,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:a.jsxs(Wo,{children:[a.jsx(mn,{children:"Poster Campaign"}),a.jsxs(zr,{children:["Strong typography.",a.jsx("br",{}),"Clear message."]}),a.jsx(Vo,{}),a.jsx(ta,{children:"The poster system was designed to capture attention quickly while delivering clear and actionable energy-saving messages across campus."}),a.jsx(Fr,{children:"Strong typography, bold visuals, and consistent branding helped communicate the campaign message effectively. The posters served as a key awareness tool, reinforcing the campaign identity and encouraging energy-conscious behaviours through a direct and confident visual approach."})]})}),a.jsx(MX,{variants:Vl,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:a.jsx("img",{src:hX,alt:"BCIT Energy Awareness Campaign Poster"})})]})})}),a.jsx(nr,{}),a.jsx("div",{id:"bcit-motion",children:a.jsx(ir,{bg:"#0d0d0d",children:a.jsxs(tr,{children:[a.jsx(L.div,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:a.jsxs(Wo,{children:[a.jsx(mn,{style:{color:"#8bc34a"},children:"Social Media Motion Graphics"}),a.jsxs(zr,{style:{color:"#fff"},children:["Bringing the campaign",a.jsx("br",{}),"to life digitally."]}),a.jsx(Vo,{style:{background:"#8bc34a"}}),a.jsx(ta,{style:{color:"rgba(255,255,255,0.65)",maxWidth:"620px"},children:"To extend the campaign beyond physical spaces, short-form social media videos were created for Instagram. The motion graphics translated the campaign's visual identity into engaging digital content, helping increase reach and reinforce energy-saving behaviours through dynamic storytelling."})]})}),a.jsxs(zX,{children:[a.jsxs(L.div,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[a.jsx(Vb,{children:a.jsx("video",{src:pX,controls:!0,playsInline:!0,loop:!0,preload:"metadata",controlsList:"nodownload"})}),a.jsx(Wb,{style:{color:"rgba(255,255,255,0.45)"},children:"Motion Graphic — 01"})]}),a.jsxs(L.div,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-40px"},children:[a.jsx(Vb,{children:a.jsx("video",{src:fX,controls:!0,playsInline:!0,loop:!0,preload:"metadata",controlsList:"nodownload"})}),a.jsx(Wb,{style:{color:"rgba(255,255,255,0.45)"},children:"Motion Graphic — 02"})]})]})]})})}),a.jsx(nr,{}),a.jsx("div",{id:"bcit-reflection",children:a.jsx(ir,{children:a.jsx(tr,{children:a.jsxs(FX,{children:[a.jsxs(L.div,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0},children:[a.jsx(mn,{children:"Reflection"}),a.jsx(RX,{children:'"A unified visual identity, applied with consistency across every touchpoint, is what turns a campaign into a movement."'}),a.jsx(Fr,{children:"This project provided an opportunity to develop and execute a complete awareness campaign from concept through production. By creating a unified visual identity and applying it consistently across print, environmental graphics, and digital media, the campaign successfully communicated energy-saving messages in a way that felt approachable, positive, and memorable."}),a.jsx(Fr,{children:"The project strengthened skills in branding, campaign design, visual storytelling, and multi-channel communication — and reinforced the value of a strong, flexible visual system that can scale across formats without losing coherence."})]}),a.jsxs(L.div,{variants:ye,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-60px"},children:[a.jsx(mn,{children:"Skills & Tools"}),a.jsx(zr,{style:{marginBottom:"2rem"},children:"Disciplines applied."}),a.jsx(LX,{children:OX.map((t,e)=>a.jsx(NX,{accent:t.accent,initial:{opacity:0,y:10},whileInView:{opacity:1,y:0},transition:{delay:e*.05,duration:.4},viewport:{once:!0},children:t.label},t.label))})]})]})})})}),a.jsx(Os,{}),a.jsx(Ls,{})]}),a.jsx(Ns,{})]}),BX=()=>a.jsx(bS,{children:a.jsx(_P,{children:a.jsx(Y8,{children:a.jsx($P,{children:a.jsxs(O8,{children:[a.jsx(Hi,{path:"/",element:a.jsx(bF,{})}),a.jsx(Hi,{path:"/about",element:a.jsx(AR,{})}),a.jsx(Hi,{path:"/work",element:a.jsx(qR,{})}),a.jsx(Hi,{path:"/resume",element:a.jsx(t7,{})}),a.jsx(Hi,{path:"/work/sbs",element:a.jsx(rN,{})}),a.jsx(Hi,{path:"/work/veen",element:a.jsx(z$,{})}),a.jsx(Hi,{path:"/work/workday",element:a.jsx(CG,{})}),a.jsx(Hi,{path:"/work/delicato",element:a.jsx(LV,{})}),a.jsx(Hi,{path:"/work/zar",element:a.jsx(eH,{})}),a.jsx(Hi,{path:"/work/fun",element:a.jsx(eX,{})}),a.jsx(Hi,{path:"/work/bcit",element:a.jsx($X,{})})]})})})})}),Ub=document.getElementById("root");Ub&&(Ub.innerHTML="");const VX=em.createRoot(document.getElementById("root"));VX.render(a.jsx(q.StrictMode,{children:a.jsx(BX,{})}));
