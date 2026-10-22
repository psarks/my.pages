/*! For license information please see main.67ec12a0.js.LICENSE.txt */
(()=>{var e={983(e,t){"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,y=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case d:case i:case l:case o:case p:return e;default:switch(e=e&&e.$$typeof){case c:case f:case g:case m:case s:return e;default:return t}}case a:return t}}}function k(e){return w(e)===d}t.AsyncMode=u,t.ConcurrentMode=d,t.ContextConsumer=c,t.ContextProvider=s,t.Element=r,t.ForwardRef=f,t.Fragment=i,t.Lazy=g,t.Memo=m,t.Portal=a,t.Profiler=l,t.StrictMode=o,t.Suspense=p,t.isAsyncMode=function(e){return k(e)||w(e)===u},t.isConcurrentMode=k,t.isContextConsumer=function(e){return w(e)===c},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===f},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===g},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===a},t.isProfiler=function(e){return w(e)===l},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===d||e===l||e===o||e===p||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===s||e.$$typeof===c||e.$$typeof===f||e.$$typeof===y||e.$$typeof===b||e.$$typeof===x||e.$$typeof===v)},t.typeOf=w},763(e,t,n){"use strict";e.exports=n(983)},497(e,t,n){"use strict";var r=n(218);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,i,o){if(o!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return n.PropTypes=n,n}},173(e,t,n){e.exports=n(497)()},218(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},292(e){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},340(e,t,n){var r=n(292);e.exports=h,e.exports.parse=i,e.exports.compile=function(e,t){return s(i(e,t),t)},e.exports.tokensToFunction=s,e.exports.tokensToRegExp=p;var a=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(e,t){for(var n,r=[],i=0,o=0,l="",s=t&&t.delimiter||"/";null!=(n=a.exec(e));){var d=n[0],f=n[1],p=n.index;if(l+=e.slice(o,p),o=p+d.length,f)l+=f[1];else{var h=e[o],m=n[2],g=n[3],v=n[4],y=n[5],b=n[6],x=n[7];l&&(r.push(l),l="");var w=null!=m&&null!=h&&h!==m,k="+"===b||"*"===b,S="?"===b||"*"===b,C=n[2]||s,j=v||y;r.push({name:g||i++,prefix:m||"",delimiter:C,optional:S,repeat:k,partial:w,asterisk:!!x,pattern:j?u(j):x?".*":"[^"+c(C)+"]+?"})}}return o<e.length&&(l+=e.substr(o)),l&&r.push(l),r}function o(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function l(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e,t){for(var n=new Array(e.length),a=0;a<e.length;a++)"object"===typeof e[a]&&(n[a]=new RegExp("^(?:"+e[a].pattern+")$",f(t)));return function(t,a){for(var i="",s=t||{},c=(a||{}).pretty?o:encodeURIComponent,u=0;u<e.length;u++){var d=e[u];if("string"!==typeof d){var f,p=s[d.name];if(null==p){if(d.optional){d.partial&&(i+=d.prefix);continue}throw new TypeError('Expected "'+d.name+'" to be defined')}if(r(p)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(f=c(p[h]),!n[u].test(f))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'", but received `'+JSON.stringify(f)+"`");i+=(0===h?d.prefix:d.delimiter)+f}}else{if(f=d.asterisk?l(p):c(p),!n[u].test(f))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but received "'+f+'"');i+=d.prefix+f}}else i+=d}return i}}function c(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function d(e,t){return e.keys=t,e}function f(e){return e&&e.sensitive?"":"i"}function p(e,t,n){r(t)||(n=t||n,t=[]);for(var a=(n=n||{}).strict,i=!1!==n.end,o="",l=0;l<e.length;l++){var s=e[l];if("string"===typeof s)o+=c(s);else{var u=c(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),o+=p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")"}}var h=c(n.delimiter||"/"),m=o.slice(-h.length)===h;return a||(o=(m?o.slice(0,-h.length):o)+"(?:"+h+"(?=$))?"),o+=i?"$":a&&m?"":"(?="+h+"|$)",d(new RegExp("^"+o,f(n)),t)}function h(e,t,n){return r(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return d(e,t)}(e,t):r(e)?function(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(h(e[a],t,n).source);return d(new RegExp("(?:"+r.join("|")+")",f(n)),t)}(e,t,n):function(e,t,n){return p(i(e,n),t,n)}(e,t,n)}},324(e){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var c=i[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(a=n?n.call(r,u,d,c):void 0)||void 0===a&&u!==d)return!1}return!0}}};const t={};function n(r){const a=t[r];if(void 0!==a)return a.exports;const i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{const t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.cw=e=>{var t;return()=>{if(e){var n=e;e=0,t={exports:{}},n.call(t.exports,t,t.exports)}return t.exports}},n.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var a=t[r++],i=t[r++],o=0===i?{enumerable:!0,value:t[r++]}:{enumerable:!0,get:i};n.o(e,a)||Object.defineProperty(e,a,o)}else for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="/my.pages/",n.nc=void 0,(()=>{"use strict";var e=n.cw(function(e,t){p();const r=n.p+"static/media/me.d91f685347365a22e4346870d6a90bcf.svg";n.d(t,["A",0,r])}),t=n.cw(function(e,t){var n=r(),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function s(e){return n.isMemo(e)?o:l[e.$$typeof]||a}l[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[n.Memo]=o;var c=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(h){var a=p(n);a&&a!==h&&e(t,a,r)}var o=u(n);d&&(o=o.concat(d(n)));for(var l=s(t),m=s(n),g=0;g<o.length;++g){var v=o[g];if(!i[v]&&(!r||!r[v])&&(!m||!m[v])&&(!l||!l[v])){var y=f(n,v);try{c(t,v,y)}catch(b){}}}}return t}}),r=()=>n(763),a=n.cw(function(e,t){var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var i,o,l=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var c in i=Object(arguments[s]))r.call(i,c)&&(l[c]=i[c]);if(n){o=n(i);for(var u=0;u<o.length;u++)a.call(i,o[u])&&(l[o[u]]=i[o[u]])}}return l}}),i=n.cw(function(e,t){var n=p(),r=a(),i=g();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!n)throw Error(o(227));var l=new Set,s={};function c(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(s[e]=t,e=0;e<t.length;e++)l.add(t[e])}var d=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h=Object.prototype.hasOwnProperty,m={},v={};function y(e,t,n,r,a,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){b[e]=new y(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];b[t]=new y(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){b[e]=new y(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){b[e]=new y(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){b[e]=new y(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){b[e]=new y(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){b[e]=new y(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){b[e]=new y(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){b[e]=new y(e,5,!1,e.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function w(e){return e[1].toUpperCase()}function k(e,t,n,r){var a=b.hasOwnProperty(t)?b[t]:null;(null!==a?0===a.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!h.call(v,e)||!h.call(m,e)&&(f.test(e)?v[e]=!0:(m[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(x,w);b[t]=new y(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(x,w);b[t]=new y(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(x,w);b[t]=new y(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){b[e]=new y(e,1,!1,e.toLowerCase(),null,!1,!1)}),b.xlinkHref=new y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){b[e]=new y(e,1,!1,e.toLowerCase(),null,!0,!0)});var S=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C=60103,j=60106,E=60107,z=60108,P=60114,_=60109,L=60110,T=60112,A=60113,O=60120,M=60115,N=60116,I=60121,R=60128,$=60129,D=60130,F=60131;if("function"===typeof Symbol&&Symbol.for){var U=Symbol.for;C=U("react.element"),j=U("react.portal"),E=U("react.fragment"),z=U("react.strict_mode"),P=U("react.profiler"),_=U("react.provider"),L=U("react.context"),T=U("react.forward_ref"),A=U("react.suspense"),O=U("react.suspense_list"),M=U("react.memo"),N=U("react.lazy"),I=U("react.block"),U("react.scope"),R=U("react.opaque.id"),$=U("react.debug_trace_mode"),D=U("react.offscreen"),F=U("react.legacy_hidden")}var B,V="function"===typeof Symbol&&Symbol.iterator;function H(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=V&&e[V]||e["@@iterator"])?e:null}function W(e){if(void 0===B)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);B=t&&t[1]||""}return"\n"+B+e}var q=!1;function Q(e,t){if(!e||q)return"";q=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&"string"===typeof s.stack){for(var a=s.stack.split("\n"),i=r.stack.split("\n"),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(1!==o||1!==l)do{if(o--,0>--l||a[o]!==i[l])return"\n"+a[o].replace(" at new "," at ")}while(1<=o&&0<=l);break}}}finally{q=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?W(e):""}function Y(e){switch(e.tag){case 5:return W(e.type);case 16:return W("Lazy");case 13:return W("Suspense");case 19:return W("SuspenseList");case 0:case 2:case 15:return e=Q(e.type,!1);case 11:return e=Q(e.type.render,!1);case 22:return e=Q(e.type._render,!1);case 1:return e=Q(e.type,!0);default:return""}}function G(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case E:return"Fragment";case j:return"Portal";case P:return"Profiler";case z:return"StrictMode";case A:return"Suspense";case O:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case L:return(e.displayName||"Context")+".Consumer";case _:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case M:return G(e.type);case I:return G(e._render);case N:t=e._payload,e=e._init;try{return G(e(t))}catch(n){}}return null}function K(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function X(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Z(e){e._valueTracker||(e._valueTracker=function(e){var t=X(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function J(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=X(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ee(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function te(e,t){var n=t.checked;return r({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ne(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=K(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function re(e,t){null!=(t=t.checked)&&k(e,"checked",t,!1)}function ae(e,t){re(e,t);var n=K(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?oe(e,t.type,n):t.hasOwnProperty("defaultValue")&&oe(e,t.type,K(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function ie(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function oe(e,t,n){"number"===t&&ee(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function le(e,t){return e=r({children:void 0},t),(t=function(e){var t="";return n.Children.forEach(e,function(e){null!=e&&(t+=e)}),t}(t.children))&&(e.children=t),e}function se(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+K(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function ce(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return r({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ue(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:K(n)}}function de(e,t){var n=K(t.value),r=K(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function fe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var pe="http://www.w3.org/1999/xhtml",he="http://www.w3.org/2000/svg";function me(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?me(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ve,ye,be=(ye=function(e,t){if(e.namespaceURI!==he||"innerHTML"in e)e.innerHTML=t;else{for((ve=ve||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ve.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return ye(e,t)})}:ye);function xe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var we={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];function Se(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||we.hasOwnProperty(e)&&we[e]?(""+t).trim():t+"px"}function Ce(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=Se(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(we).forEach(function(e){ke.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),we[t]=we[e]})});var je=r({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ee(e,t){if(t){if(je[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function ze(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Pe(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var _e=null,Le=null,Te=null;function Ae(e){if(e=ia(e)){if("function"!==typeof _e)throw Error(o(280));var t=e.stateNode;t&&(t=la(t),_e(e.stateNode,e.type,t))}}function Oe(e){Le?Te?Te.push(e):Te=[e]:Le=e}function Me(){if(Le){var e=Le,t=Te;if(Te=Le=null,Ae(e),t)for(e=0;e<t.length;e++)Ae(t[e])}}function Ne(e,t){return e(t)}function Ie(e,t,n,r,a){return e(t,n,r,a)}function Re(){}var $e=Ne,De=!1,Fe=!1;function Ue(){null===Le&&null===Te||(Re(),Me())}function Be(e,t){var n=e.stateNode;if(null===n)return null;var r=la(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Ve=!1;if(d)try{var He={};Object.defineProperty(He,"passive",{get:function(){Ve=!0}}),window.addEventListener("test",He,He),window.removeEventListener("test",He,He)}catch(ye){Ve=!1}function We(e,t,n,r,a,i,o,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var qe=!1,Qe=null,Ye=!1,Ge=null,Ke={onError:function(e){qe=!0,Qe=e}};function Xe(e,t,n,r,a,i,o,l,s){qe=!1,Qe=null,We.apply(Ke,arguments)}function Ze(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(1026&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Je(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function et(e){if(Ze(e)!==e)throw Error(o(188))}function tt(e){if(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ze(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return et(a),e;if(i===r)return et(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e),!e)return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function nt(e,t){for(var n=e.alternate;null!==t;){if(t===e||t===n)return!0;t=t.return}return!1}var rt,at,it,ot,lt=!1,st=[],ct=null,ut=null,dt=null,ft=new Map,pt=new Map,ht=[],mt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gt(e,t,n,r,a){return{blockedOn:e,domEventName:t,eventSystemFlags:16|n,nativeEvent:a,targetContainers:[r]}}function vt(e,t){switch(e){case"focusin":case"focusout":ct=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":dt=null;break;case"pointerover":case"pointerout":ft.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":pt.delete(t.pointerId)}}function yt(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e=gt(t,n,r,a,i),null!==t&&(null!==(t=ia(t))&&at(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function bt(e){var t=aa(e.target);if(null!==t){var n=Ze(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Je(n)))return e.blockedOn=t,void ot(e.lanePriority,function(){i.unstable_runWithPriority(e.priority,function(){it(n)})})}else if(3===t&&n.stateNode.hydrate)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function xt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=tn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ia(n))&&at(t),e.blockedOn=n,!1;t.shift()}return!0}function wt(e,t,n){xt(e)&&n.delete(t)}function kt(){for(lt=!1;0<st.length;){var e=st[0];if(null!==e.blockedOn){null!==(e=ia(e.blockedOn))&&rt(e);break}for(var t=e.targetContainers;0<t.length;){var n=tn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n){e.blockedOn=n;break}t.shift()}null===e.blockedOn&&st.shift()}null!==ct&&xt(ct)&&(ct=null),null!==ut&&xt(ut)&&(ut=null),null!==dt&&xt(dt)&&(dt=null),ft.forEach(wt),pt.forEach(wt)}function St(e,t){e.blockedOn===t&&(e.blockedOn=null,lt||(lt=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,kt)))}function Ct(e){function t(t){return St(t,e)}if(0<st.length){St(st[0],e);for(var n=1;n<st.length;n++){var r=st[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==ct&&St(ct,e),null!==ut&&St(ut,e),null!==dt&&St(dt,e),ft.forEach(t),pt.forEach(t),n=0;n<ht.length;n++)(r=ht[n]).blockedOn===e&&(r.blockedOn=null);for(;0<ht.length&&null===(n=ht[0]).blockedOn;)bt(n),null===n.blockedOn&&ht.shift()}function jt(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Et={animationend:jt("Animation","AnimationEnd"),animationiteration:jt("Animation","AnimationIteration"),animationstart:jt("Animation","AnimationStart"),transitionend:jt("Transition","TransitionEnd")},zt={},Pt={};function _t(e){if(zt[e])return zt[e];if(!Et[e])return e;var t,n=Et[e];for(t in n)if(n.hasOwnProperty(t)&&t in Pt)return zt[e]=n[t];return e}d&&(Pt=document.createElement("div").style,"AnimationEvent"in window||(delete Et.animationend.animation,delete Et.animationiteration.animation,delete Et.animationstart.animation),"TransitionEvent"in window||delete Et.transitionend.transition);var Lt=_t("animationend"),Tt=_t("animationiteration"),At=_t("animationstart"),Ot=_t("transitionend"),Mt=new Map,Nt=new Map,It=["abort","abort",Lt,"animationEnd",Tt,"animationIteration",At,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Ot,"transitionEnd","waiting","waiting"];function Rt(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],a=e[n+1];a="on"+(a[0].toUpperCase()+a.slice(1)),Nt.set(r,t),Mt.set(r,a),c(a,[r])}}(0,i.unstable_now)();var $t=8;function Dt(e){if(0!==(1&e))return $t=15,1;if(0!==(2&e))return $t=14,2;if(0!==(4&e))return $t=13,4;var t=24&e;return 0!==t?($t=12,t):0!==(32&e)?($t=11,32):0!==(t=192&e)?($t=10,t):0!==(256&e)?($t=9,256):0!==(t=3584&e)?($t=8,t):0!==(4096&e)?($t=7,4096):0!==(t=4186112&e)?($t=6,t):0!==(t=62914560&e)?($t=5,t):67108864&e?($t=4,67108864):0!==(134217728&e)?($t=3,134217728):0!==(t=805306368&e)?($t=2,t):0!==(1073741824&e)?($t=1,1073741824):($t=8,e)}function Ft(e,t){var n=e.pendingLanes;if(0===n)return $t=0;var r=0,a=0,i=e.expiredLanes,o=e.suspendedLanes,l=e.pingedLanes;if(0!==i)r=i,a=$t=15;else if(0!==(i=134217727&n)){var s=i&~o;0!==s?(r=Dt(s),a=$t):0!==(l&=i)&&(r=Dt(l),a=$t)}else 0!==(i=n&~o)?(r=Dt(i),a=$t):0!==l&&(r=Dt(l),a=$t);if(0===r)return 0;if(r=n&((0>(r=31-qt(r))?0:1<<r)<<1)-1,0!==t&&t!==r&&0===(t&o)){if(Dt(t),a<=$t)return t;$t=a}if(0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-qt(t)),r|=e[n],t&=~a;return r}function Ut(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function Bt(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return 0===(e=Vt(24&~t))?Bt(10,t):e;case 10:return 0===(e=Vt(192&~t))?Bt(8,t):e;case 8:return 0===(e=Vt(3584&~t))&&(0===(e=Vt(4186112&~t))&&(e=512)),e;case 2:return 0===(t=Vt(805306368&~t))&&(t=268435456),t}throw Error(o(358,e))}function Vt(e){return e&-e}function Ht(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wt(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,(e=e.eventTimes)[t=31-qt(t)]=n}var qt=Math.clz32?Math.clz32:function(e){return 0===e?32:31-(Qt(e)/Yt|0)|0},Qt=Math.log,Yt=Math.LN2;var Gt=i.unstable_UserBlockingPriority,Kt=i.unstable_runWithPriority,Xt=!0;function Zt(e,t,n,r){De||Re();var a=en,i=De;De=!0;try{Ie(a,e,t,n,r)}finally{(De=i)||Ue()}}function Jt(e,t,n,r){Kt(Gt,en.bind(null,e,t,n,r))}function en(e,t,n,r){var a;if(Xt)if((a=0===(4&t))&&0<st.length&&-1<mt.indexOf(e))e=gt(null,e,t,n,r),st.push(e);else{var i=tn(e,t,n,r);if(null===i)a&&vt(e,r);else{if(a){if(-1<mt.indexOf(e))return e=gt(i,e,t,n,r),void st.push(e);if(function(e,t,n,r,a){switch(t){case"focusin":return ct=yt(ct,e,t,n,r,a),!0;case"dragenter":return ut=yt(ut,e,t,n,r,a),!0;case"mouseover":return dt=yt(dt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return ft.set(i,yt(ft.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,pt.set(i,yt(pt.get(i)||null,e,t,n,r,a)),!0}return!1}(i,e,t,n,r))return;vt(e,r)}Rr(e,t,r,null,n)}}}function tn(e,t,n,r){var a=Pe(r);if(null!==(a=aa(a))){var i=Ze(a);if(null===i)a=null;else{var o=i.tag;if(13===o){if(null!==(a=Je(i)))return a;a=null}else if(3===o){if(i.stateNode.hydrate)return 3===i.tag?i.stateNode.containerInfo:null;a=null}else i!==a&&(a=null)}}return Rr(e,t,r,a,n),null}var nn=null,rn=null,an=null;function on(){if(an)return an;var e,t,n=rn,r=n.length,a="value"in nn?nn.value:nn.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return an=a.slice(e,1<t?1-t:void 0)}function ln(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function sn(){return!0}function cn(){return!1}function un(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?sn:cn,this.isPropagationStopped=cn,this}return r(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=sn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=sn)},persist:function(){},isPersistent:sn}),t}var dn,fn,pn,hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mn=un(hn),gn=r({},hn,{view:0,detail:0}),vn=un(gn),yn=r({},gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ln,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pn&&(pn&&"mousemove"===e.type?(dn=e.screenX-pn.screenX,fn=e.screenY-pn.screenY):fn=dn=0,pn=e),dn)},movementY:function(e){return"movementY"in e?e.movementY:fn}}),bn=un(yn),xn=un(r({},yn,{dataTransfer:0})),wn=un(r({},gn,{relatedTarget:0})),kn=un(r({},hn,{animationName:0,elapsedTime:0,pseudoElement:0})),Sn=r({},hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cn=un(Sn),jn=un(r({},hn,{data:0})),En={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _n(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Pn[e])&&!!t[e]}function Ln(){return _n}var Tn=r({},gn,{key:function(e){if(e.key){var t=En[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=ln(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?zn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ln,charCode:function(e){return"keypress"===e.type?ln(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?ln(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),An=un(Tn),On=un(r({},yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Mn=un(r({},gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ln})),Nn=un(r({},hn,{propertyName:0,elapsedTime:0,pseudoElement:0})),In=r({},yn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rn=un(In),$n=[9,13,27,32],Dn=d&&"CompositionEvent"in window,Fn=null;d&&"documentMode"in document&&(Fn=document.documentMode);var Un=d&&"TextEvent"in window&&!Fn,Bn=d&&(!Dn||Fn&&8<Fn&&11>=Fn),Vn=String.fromCharCode(32),Hn=!1;function Wn(e,t){switch(e){case"keyup":return-1!==$n.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Qn=!1;var Yn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Yn[e.type]:"textarea"===t}function Kn(e,t,n,r){Oe(r),0<(t=Dr(t,"onChange")).length&&(n=new mn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xn=null,Zn=null;function Jn(e){Tr(e,0)}function er(e){if(J(oa(e)))return e}function tr(e,t){if("change"===e)return t}var nr=!1;if(d){var rr;if(d){var ar="oninput"in document;if(!ar){var ir=document.createElement("div");ir.setAttribute("oninput","return;"),ar="function"===typeof ir.oninput}rr=ar}else rr=!1;nr=rr&&(!document.documentMode||9<document.documentMode)}function or(){Xn&&(Xn.detachEvent("onpropertychange",lr),Zn=Xn=null)}function lr(e){if("value"===e.propertyName&&er(Zn)){var t=[];if(Kn(t,Zn,e,Pe(e)),e=Jn,De)e(t);else{De=!0;try{Ne(e,t)}finally{De=!1,Ue()}}}}function sr(e,t,n){"focusin"===e?(or(),Zn=n,(Xn=t).attachEvent("onpropertychange",lr)):"focusout"===e&&or()}function cr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return er(Zn)}function ur(e,t){if("click"===e)return er(t)}function dr(e,t){if("input"===e||"change"===e)return er(t)}var fr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},pr=Object.prototype.hasOwnProperty;function hr(e,t){if(fr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!pr.call(t,n[r])||!fr(e[n[r]],t[n[r]]))return!1;return!0}function mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gr(e,t){var n,r=mr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=mr(r)}}function vr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?vr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function yr(){for(var e=window,t=ee();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=ee((e=t.contentWindow).document)}return t}function br(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var xr=d&&"documentMode"in document&&11>=document.documentMode,wr=null,kr=null,Sr=null,Cr=!1;function jr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;Cr||null==wr||wr!==ee(r)||("selectionStart"in(r=wr)&&br(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},Sr&&hr(Sr,r)||(Sr=r,0<(r=Dr(kr,"onSelect")).length&&(t=new mn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wr)))}Rt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),Rt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),Rt(It,2);for(var Er="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),zr=0;zr<Er.length;zr++)Nt.set(Er[zr],0);u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_r=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));function Lr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,i,l,s,c){if(Xe.apply(this,arguments),qe){if(!qe)throw Error(o(198));var u=Qe;qe=!1,Qe=null,Ye||(Ye=!0,Ge=u)}}(r,t,void 0,e),e.currentTarget=null}function Tr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;Lr(a,l,c),i=s}else for(o=0;o<r.length;o++){if(s=(l=r[o]).instance,c=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;Lr(a,l,c),i=s}}}if(Ye)throw e=Ge,Ye=!1,Ge=null,e}function Ar(e,t){var n=sa(t),r=e+"__bubble";n.has(r)||(Ir(t,e,2,!1),n.add(r))}var Or="_reactListening"+Math.random().toString(36).slice(2);function Mr(e){e[Or]||(e[Or]=!0,l.forEach(function(t){_r.has(t)||Nr(t,!1,e,null),Nr(t,!0,e,null)}))}function Nr(e,t,n,r){var a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,i=n;if("selectionchange"===e&&9!==n.nodeType&&(i=n.ownerDocument),null!==r&&!t&&_r.has(e)){if("scroll"!==e)return;a|=2,i=r}var o=sa(i),l=e+"__"+(t?"capture":"bubble");o.has(l)||(t&&(a|=4),Ir(i,e,a,t),o.add(l))}function Ir(e,t,n,r){var a=Nt.get(t);switch(void 0===a?2:a){case 0:a=Zt;break;case 1:a=Jt;break;default:a=en}n=a.bind(null,t,n,e),a=void 0,!Ve||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Rr(e,t,n,r,a){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;o=o.return}for(;null!==l;){if(null===(o=aa(l)))return;if(5===(s=o.tag)||6===s){r=i=o;continue e}l=l.parentNode}}r=r.return}!function(e,t,n){if(Fe)return e(t,n);Fe=!0;try{return $e(e,t,n)}finally{Fe=!1,Ue()}}(function(){var r=i,a=Pe(n),o=[];e:{var l=Mt.get(e);if(void 0!==l){var s=mn,c=e;switch(e){case"keypress":if(0===ln(n))break e;case"keydown":case"keyup":s=An;break;case"focusin":c="focus",s=wn;break;case"focusout":c="blur",s=wn;break;case"beforeblur":case"afterblur":s=wn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=bn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=xn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Mn;break;case Lt:case Tt:case At:s=kn;break;case Ot:s=Nn;break;case"scroll":s=vn;break;case"wheel":s=Rn;break;case"copy":case"cut":case"paste":s=Cn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=On}var u=0!==(4&t),d=!u&&"scroll"===e,f=u?null!==l?l+"Capture":null:l;u=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=Be(h,f))&&u.push($r(h,m,p)))),d)break;h=h.return}0<u.length&&(l=new s(l,c,null,n,a),o.push({event:l,listeners:u}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||0!==(16&t)||!(c=n.relatedTarget||n.fromElement)||!aa(c)&&!c[na])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(c=(c=n.relatedTarget||n.toElement)?aa(c):null)&&(c!==(d=Ze(c))||5!==c.tag&&6!==c.tag)&&(c=null)):(s=null,c=r),s!==c)){if(u=bn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(u=On,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:oa(s),p=null==c?l:oa(c),(l=new u(m,h+"leave",s,n,a)).target=d,l.relatedTarget=p,m=null,aa(a)===r&&((u=new u(f,h+"enter",c,n,a)).target=p,u.relatedTarget=d,m=u),d=m,s&&c)e:{for(f=c,h=0,p=u=s;p;p=Fr(p))h++;for(p=0,m=f;m;m=Fr(m))p++;for(;0<h-p;)u=Fr(u),h--;for(;0<p-h;)f=Fr(f),p--;for(;h--;){if(u===f||null!==f&&u===f.alternate)break e;u=Fr(u),f=Fr(f)}u=null}else u=null;null!==s&&Ur(o,l,s,u,!1),null!==c&&null!==d&&Ur(o,d,c,u,!0)}if("select"===(s=(l=r?oa(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=tr;else if(Gn(l))if(nr)g=dr;else{g=cr;var v=sr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=ur);switch(g&&(g=g(e,r))?Kn(o,g,n,a):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&oe(l,"number",l.value)),v=r?oa(r):window,e){case"focusin":(Gn(v)||"true"===v.contentEditable)&&(wr=v,kr=r,Sr=null);break;case"focusout":Sr=kr=wr=null;break;case"mousedown":Cr=!0;break;case"contextmenu":case"mouseup":case"dragend":Cr=!1,jr(o,n,a);break;case"selectionchange":if(xr)break;case"keydown":case"keyup":jr(o,n,a)}var y;if(Dn)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Qn?Wn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Bn&&"ko"!==n.locale&&(Qn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Qn&&(y=on()):(rn="value"in(nn=a)?nn.value:nn.textContent,Qn=!0)),0<(v=Dr(r,b)).length&&(b=new jn(b,e,null,n,a),o.push({event:b,listeners:v}),y?b.data=y:null!==(y=qn(n))&&(b.data=y))),(y=Un?function(e,t){switch(e){case"compositionend":return qn(t);case"keypress":return 32!==t.which?null:(Hn=!0,Vn);case"textInput":return(e=t.data)===Vn&&Hn?null:e;default:return null}}(e,n):function(e,t){if(Qn)return"compositionend"===e||!Dn&&Wn(e,t)?(e=on(),an=rn=nn=null,Qn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Dr(r,"onBeforeInput")).length&&(a=new jn("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=y))}Tr(o,t)})}function $r(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;5===a.tag&&null!==i&&(a=i,null!=(i=Be(e,n))&&r.unshift($r(e,i,a)),null!=(i=Be(e,t))&&r.push($r(e,i,a))),e=e.return}return r}function Fr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Ur(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==c&&(l=c,a?null!=(s=Be(n,i))&&o.unshift($r(n,s,l)):a||null!=(s=Be(n,i))&&o.push($r(n,s,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}function Br(){}var Vr=null,Hr=null;function Wr(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function qr(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Qr="function"===typeof setTimeout?setTimeout:void 0,Yr="function"===typeof clearTimeout?clearTimeout:void 0;function Gr(e){1===e.nodeType?e.textContent="":9===e.nodeType&&(null!=(e=e.body)&&(e.textContent=""))}function Kr(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function Xr(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var Zr=0;var Jr=Math.random().toString(36).slice(2),ea="__reactFiber$"+Jr,ta="__reactProps$"+Jr,na="__reactContainer$"+Jr,ra="__reactEvents$"+Jr;function aa(e){var t=e[ea];if(t)return t;for(var n=e.parentNode;n;){if(t=n[na]||n[ea]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Xr(e);null!==e;){if(n=e[ea])return n;e=Xr(e)}return t}n=(e=n).parentNode}return null}function ia(e){return!(e=e[ea]||e[na])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function oa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function la(e){return e[ta]||null}function sa(e){var t=e[ra];return void 0===t&&(t=e[ra]=new Set),t}var ca=[],ua=-1;function da(e){return{current:e}}function fa(e){0>ua||(e.current=ca[ua],ca[ua]=null,ua--)}function pa(e,t){ua++,ca[ua]=e.current,e.current=t}var ha={},ma=da(ha),ga=da(!1),va=ha;function ya(e,t){var n=e.type.contextTypes;if(!n)return ha;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,i={};for(a in n)i[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ba(e){return null!==(e=e.childContextTypes)&&void 0!==e}function xa(){fa(ga),fa(ma)}function wa(e,t,n){if(ma.current!==ha)throw Error(o(168));pa(ma,t),pa(ga,n)}function ka(e,t,n){var a=e.stateNode;if(e=t.childContextTypes,"function"!==typeof a.getChildContext)return n;for(var i in a=a.getChildContext())if(!(i in e))throw Error(o(108,G(t)||"Unknown",i));return r({},n,a)}function Sa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ha,va=ma.current,pa(ma,e),pa(ga,ga.current),!0}function Ca(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=ka(e,t,va),r.__reactInternalMemoizedMergedChildContext=e,fa(ga),fa(ma),pa(ma,e)):fa(ga),pa(ga,n)}var ja=null,Ea=null,za=i.unstable_runWithPriority,Pa=i.unstable_scheduleCallback,_a=i.unstable_cancelCallback,La=i.unstable_shouldYield,Ta=i.unstable_requestPaint,Aa=i.unstable_now,Oa=i.unstable_getCurrentPriorityLevel,Ma=i.unstable_ImmediatePriority,Na=i.unstable_UserBlockingPriority,Ia=i.unstable_NormalPriority,Ra=i.unstable_LowPriority,$a=i.unstable_IdlePriority,Da={},Fa=void 0!==Ta?Ta:function(){},Ua=null,Ba=null,Va=!1,Ha=Aa(),Wa=1e4>Ha?Aa:function(){return Aa()-Ha};function qa(){switch(Oa()){case Ma:return 99;case Na:return 98;case Ia:return 97;case Ra:return 96;case $a:return 95;default:throw Error(o(332))}}function Qa(e){switch(e){case 99:return Ma;case 98:return Na;case 97:return Ia;case 96:return Ra;case 95:return $a;default:throw Error(o(332))}}function Ya(e,t){return e=Qa(e),za(e,t)}function Ga(e,t,n){return e=Qa(e),Pa(e,t,n)}function Ka(){if(null!==Ba){var e=Ba;Ba=null,_a(e)}Xa()}function Xa(){if(!Va&&null!==Ua){Va=!0;var e=0;try{var t=Ua;Ya(99,function(){for(;e<t.length;e++){var n=t[e];do{n=n(!0)}while(null!==n)}}),Ua=null}catch(n){throw null!==Ua&&(Ua=Ua.slice(e+1)),Pa(Ma,Ka),n}finally{Va=!1}}}var Za=S.ReactCurrentBatchConfig;function Ja(e,t){if(e&&e.defaultProps){for(var n in t=r({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var ei=da(null),ti=null,ni=null,ri=null;function ai(){ri=ni=ti=null}function ii(e){var t=ei.current;fa(ei),e.type._context._currentValue=t}function oi(e,t){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)===t){if(null===n||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,null!==n&&(n.childLanes|=t);e=e.return}}function li(e,t){ti=e,ri=ni=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(Do=!0),e.firstContext=null)}function si(e,t){if(ri!==e&&!1!==t&&0!==t)if("number"===typeof t&&1073741823!==t||(ri=e,t=1073741823),t={context:e,observedBits:t,next:null},null===ni){if(null===ti)throw Error(o(308));ni=t,ti.dependencies={lanes:0,firstContext:t,responders:null}}else ni=ni.next=t;return e._currentValue}var ci=!1;function ui(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function di(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function fi(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pi(e,t){if(null!==(e=e.updateQueue)){var n=(e=e.shared).pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function hi(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function mi(e,t,n,a){var i=e.updateQueue;ci=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var c=s,u=c.next;c.next=null,null===l?o=u:l.next=u,l=c;var d=e.alternate;if(null!==d){var f=(d=d.updateQueue).lastBaseUpdate;f!==l&&(null===f?d.firstBaseUpdate=u:f.next=u,d.lastBaseUpdate=c)}}if(null!==o){for(f=i.baseState,l=0,d=u=c=null;;){s=o.lane;var p=o.eventTime;if((a&s)===s){null!==d&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var h=e,m=o;switch(s=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){f=h.call(p,f,s);break e}f=h;break e;case 3:h.flags=-4097&h.flags|64;case 0:if(null===(s="function"===typeof(h=m.payload)?h.call(p,f,s):h)||void 0===s)break e;f=r({},f,s);break e;case 2:ci=!0}}null!==o.callback&&(e.flags|=32,null===(s=i.effects)?i.effects=[o]:s.push(o))}else p={eventTime:p,lane:s,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===d?(u=d=p,c=f):d=d.next=p,l|=s;if(null===(o=o.next)){if(null===(s=i.shared.pending))break;o=s.next,s.next=null,i.lastBaseUpdate=s,i.shared.pending=null}}null===d&&(c=f),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,Hl|=l,e.lanes=l,e.memoizedState=f}}function gi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(o(191,a));a.call(r)}}}var vi=(new n.Component).refs;function yi(e,t,n,a){n=null===(n=n(a,t=e.memoizedState))||void 0===n?t:r({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var bi={isMounted:function(e){return!!(e=e._reactInternals)&&Ze(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ms(),a=gs(e),i=fi(r,a);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),pi(e,i),vs(e,a,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ms(),a=gs(e),i=fi(r,a);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),pi(e,i),vs(e,a,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ms(),r=gs(e),a=fi(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),pi(e,a),vs(e,r,n)}};function xi(e,t,n,r,a,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!hr(n,r)||!hr(a,i))}function wi(e,t,n){var r=!1,a=ha,i=t.contextType;return"object"===typeof i&&null!==i?i=si(i):(a=ba(t)?va:ma.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?ya(e,a):ha),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=bi,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ki(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&bi.enqueueReplaceState(t,t.state,null)}function Si(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=vi,ui(e);var i=t.contextType;"object"===typeof i&&null!==i?a.context=si(i):(i=ba(t)?va:ma.current,a.context=ya(e,i)),mi(e,n,a,r),a.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(yi(e,t,i,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&bi.enqueueReplaceState(a,a.state,null),mi(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4)}var Ci=Array.isArray;function ji(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=r.refs;t===vi&&(t=r.refs={}),null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function Ei(e,t){if("textarea"!==e.type)throw Error(o(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function zi(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.flags=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Gs(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags=2,n):r:(t.flags=2,n):n}function l(t){return e&&null===t.alternate&&(t.flags=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Js(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function c(e,t,n,r){return null!==t&&t.elementType===n.type?((r=a(t,n.props)).ref=ji(e,t,n),r.return=e,r):((r=Ks(n.type,n.key,n.props,null,e.mode,r)).ref=ji(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=ec(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Xs(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t||"number"===typeof t)return(t=Js(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case C:return(n=Ks(t.type,t.key,t.props,null,e.mode,n)).ref=ji(e,null,t),n.return=e,n;case j:return(t=ec(t,e.mode,n)).return=e,t}if(Ci(t)||H(t))return(t=Xs(t,e.mode,n,null)).return=e,t;Ei(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case C:return n.key===a?n.type===E?d(e,t,n.props.children,r,a):c(e,t,n,r):null;case j:return n.key===a?u(e,t,n,r):null}if(Ci(n)||H(n))return null!==a?null:d(e,t,n,r,null);Ei(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case C:return e=e.get(null===r.key?n:r.key)||null,r.type===E?d(t,e,r.props.children,a,r.key):c(t,e,r,a);case j:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a)}if(Ci(r)||H(r))return d(t,e=e.get(n)||null,r,a,null);Ei(t,r)}return null}function m(a,o,l,s){for(var c=null,u=null,d=o,m=o=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=p(a,d,l[m],s);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(a,d),o=i(v,o,m),null===u?c=v:u.sibling=v,u=v,d=g}if(m===l.length)return n(a,d),c;if(null===d){for(;m<l.length;m++)null!==(d=f(a,l[m],s))&&(o=i(d,o,m),null===u?c=d:u.sibling=d,u=d);return c}for(d=r(a,d);m<l.length;m++)null!==(g=h(d,a,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=i(g,o,m),null===u?c=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(a,e)}),c}function g(a,l,s,c){var u=H(s);if("function"!==typeof u)throw Error(o(150));if(null==(s=u.call(s)))throw Error(o(151));for(var d=u=null,m=l,g=l=0,v=null,y=s.next();null!==m&&!y.done;g++,y=s.next()){m.index>g?(v=m,m=null):v=m.sibling;var b=p(a,m,y.value,c);if(null===b){null===m&&(m=v);break}e&&m&&null===b.alternate&&t(a,m),l=i(b,l,g),null===d?u=b:d.sibling=b,d=b,m=v}if(y.done)return n(a,m),u;if(null===m){for(;!y.done;g++,y=s.next())null!==(y=f(a,y.value,c))&&(l=i(y,l,g),null===d?u=y:d.sibling=y,d=y);return u}for(m=r(a,m);!y.done;g++,y=s.next())null!==(y=h(m,a,g,y.value,c))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),l=i(y,l,g),null===d?u=y:d.sibling=y,d=y);return e&&m.forEach(function(e){return t(a,e)}),u}return function(e,r,i,s){var c="object"===typeof i&&null!==i&&i.type===E&&null===i.key;c&&(i=i.props.children);var u="object"===typeof i&&null!==i;if(u)switch(i.$$typeof){case C:e:{for(u=i.key,c=r;null!==c;){if(c.key===u){if(7===c.tag){if(i.type===E){n(e,c.sibling),(r=a(c,i.props.children)).return=e,e=r;break e}}else if(c.elementType===i.type){n(e,c.sibling),(r=a(c,i.props)).ref=ji(e,c,i),r.return=e,e=r;break e}n(e,c);break}t(e,c),c=c.sibling}i.type===E?((r=Xs(i.props.children,e.mode,s,i.key)).return=e,e=r):((s=Ks(i.type,i.key,i.props,null,e.mode,s)).ref=ji(e,r,i),s.return=e,e=s)}return l(e);case j:e:{for(c=i.key;null!==r;){if(r.key===c){if(4===r.tag&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),(r=a(r,i.children||[])).return=e,e=r;break e}n(e,r);break}t(e,r),r=r.sibling}(r=ec(i,e.mode,s)).return=e,e=r}return l(e)}if("string"===typeof i||"number"===typeof i)return i=""+i,null!==r&&6===r.tag?(n(e,r.sibling),(r=a(r,i)).return=e,e=r):(n(e,r),(r=Js(i,e.mode,s)).return=e,e=r),l(e);if(Ci(i))return m(e,r,i,s);if(H(i))return g(e,r,i,s);if(u&&Ei(e,i),"undefined"===typeof i&&!c)switch(e.tag){case 1:case 22:case 0:case 11:case 15:throw Error(o(152,G(e.type)||"Component"))}return n(e,r)}}var Pi=zi(!0),_i=zi(!1),Li={},Ti=da(Li),Ai=da(Li),Oi=da(Li);function Mi(e){if(e===Li)throw Error(o(174));return e}function Ni(e,t){switch(pa(Oi,t),pa(Ai,e),pa(Ti,Li),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ge(null,"");break;default:t=ge(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}fa(Ti),pa(Ti,t)}function Ii(){fa(Ti),fa(Ai),fa(Oi)}function Ri(e){Mi(Oi.current);var t=Mi(Ti.current),n=ge(t,e.type);t!==n&&(pa(Ai,e),pa(Ti,n))}function $i(e){Ai.current===e&&(fa(Ti),fa(Ai))}var Di=da(0);function Fi(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(64&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ui=null,Bi=null,Vi=!1;function Hi(e,t){var n=Qs(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Wi(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);default:return!1}}function qi(e){if(Vi){var t=Bi;if(t){var n=t;if(!Wi(e,t)){if(!(t=Kr(n.nextSibling))||!Wi(e,t))return e.flags=-1025&e.flags|2,Vi=!1,void(Ui=e);Hi(Ui,n)}Ui=e,Bi=Kr(t.firstChild)}else e.flags=-1025&e.flags|2,Vi=!1,Ui=e}}function Qi(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;Ui=e}function Yi(e){if(e!==Ui)return!1;if(!Vi)return Qi(e),Vi=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!qr(t,e.memoizedProps))for(t=Bi;t;)Hi(e,t),t=Kr(t.nextSibling);if(Qi(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){Bi=Kr(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}Bi=null}}else Bi=Ui?Kr(e.stateNode.nextSibling):null;return!0}function Gi(){Bi=Ui=null,Vi=!1}var Ki=[];function Xi(){for(var e=0;e<Ki.length;e++)Ki[e]._workInProgressVersionPrimary=null;Ki.length=0}var Zi=S.ReactCurrentDispatcher,Ji=S.ReactCurrentBatchConfig,eo=0,to=null,no=null,ro=null,ao=!1,io=!1;function oo(){throw Error(o(321))}function lo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!fr(e[n],t[n]))return!1;return!0}function so(e,t,n,r,a,i){if(eo=i,to=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zi.current=null===e||null===e.memoizedState?No:Io,e=n(r,a),io){i=0;do{if(io=!1,!(25>i))throw Error(o(301));i+=1,ro=no=null,t.updateQueue=null,Zi.current=Ro,e=n(r,a)}while(io)}if(Zi.current=Mo,t=null!==no&&null!==no.next,eo=0,ro=no=to=null,ao=!1,t)throw Error(o(300));return e}function co(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ro?to.memoizedState=ro=e:ro=ro.next=e,ro}function uo(){if(null===no){var e=to.alternate;e=null!==e?e.memoizedState:null}else e=no.next;var t=null===ro?to.memoizedState:ro.next;if(null!==t)ro=t,no=e;else{if(null===e)throw Error(o(310));e={memoizedState:(no=e).memoizedState,baseState:no.baseState,baseQueue:no.baseQueue,queue:no.queue,next:null},null===ro?to.memoizedState=ro=e:ro=ro.next=e}return ro}function fo(e,t){return"function"===typeof t?t(e):t}function po(e){var t=uo(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=no,a=r.baseQueue,i=n.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(null!==a){a=a.next,r=r.baseState;var s=l=i=null,c=a;do{var u=c.lane;if((eo&u)===u)null!==s&&(s=s.next={lane:0,action:c.action,eagerReducer:c.eagerReducer,eagerState:c.eagerState,next:null}),r=c.eagerReducer===e?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,eagerReducer:c.eagerReducer,eagerState:c.eagerState,next:null};null===s?(l=s=d,i=r):s=s.next=d,to.lanes|=u,Hl|=u}c=c.next}while(null!==c&&c!==a);null===s?i=r:s.next=l,fr(r,t.memoizedState)||(Do=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function ho(e){var t=uo(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);fr(i,t.memoizedState)||(Do=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function mo(e,t,n){var r=t._getVersion;r=r(t._source);var a=t._workInProgressVersionPrimary;if(null!==a?e=a===r:(e=e.mutableReadLanes,(e=(eo&e)===e)&&(t._workInProgressVersionPrimary=r,Ki.push(t))),e)return n(t._source);throw Ki.push(t),Error(o(350))}function go(e,t,n,r){var a=Il;if(null===a)throw Error(o(349));var i=t._getVersion,l=i(t._source),s=Zi.current,c=s.useState(function(){return mo(a,t,n)}),u=c[1],d=c[0];c=ro;var f=e.memoizedState,p=f.refs,h=p.getSnapshot,m=f.source;f=f.subscribe;var g=to;return e.memoizedState={refs:p,source:t,subscribe:r},s.useEffect(function(){p.getSnapshot=n,p.setSnapshot=u;var e=i(t._source);if(!fr(l,e)){e=n(t._source),fr(d,e)||(u(e),e=gs(g),a.mutableReadLanes|=e&a.pendingLanes),e=a.mutableReadLanes,a.entangledLanes|=e;for(var r=a.entanglements,o=e;0<o;){var s=31-qt(o),c=1<<s;r[s]|=e,o&=~c}}},[n,t,r]),s.useEffect(function(){return r(t._source,function(){var e=p.getSnapshot,n=p.setSnapshot;try{n(e(t._source));var r=gs(g);a.mutableReadLanes|=r&a.pendingLanes}catch(i){n(function(){throw i})}})},[t,r]),fr(h,n)&&fr(m,t)&&fr(f,r)||((e={pending:null,dispatch:null,lastRenderedReducer:fo,lastRenderedState:d}).dispatch=u=Oo.bind(null,to,e),c.queue=e,c.baseQueue=null,d=mo(a,t,n),c.memoizedState=c.baseState=d),d}function vo(e,t,n){return go(uo(),e,t,n)}function yo(e){var t=co();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={pending:null,dispatch:null,lastRenderedReducer:fo,lastRenderedState:e}).dispatch=Oo.bind(null,to,e),[t.memoizedState,e]}function bo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=to.updateQueue)?(t={lastEffect:null},to.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function xo(e){return e={current:e},co().memoizedState=e}function wo(){return uo().memoizedState}function ko(e,t,n,r){var a=co();to.flags|=e,a.memoizedState=bo(1|t,n,void 0,void 0===r?null:r)}function So(e,t,n,r){var a=uo();r=void 0===r?null:r;var i=void 0;if(null!==no){var o=no.memoizedState;if(i=o.destroy,null!==r&&lo(r,o.deps))return void bo(t,n,i,r)}to.flags|=e,a.memoizedState=bo(1|t,n,i,r)}function Co(e,t){return ko(516,4,e,t)}function jo(e,t){return So(516,4,e,t)}function Eo(e,t){return So(4,2,e,t)}function zo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Po(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,So(4,2,zo.bind(null,t,e),n)}function _o(){}function Lo(e,t){var n=uo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&lo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function To(e,t){var n=uo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&lo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ao(e,t){var n=qa();Ya(98>n?98:n,function(){e(!0)}),Ya(97<n?97:n,function(){var n=Ji.transition;Ji.transition=1;try{e(!1),t()}finally{Ji.transition=n}})}function Oo(e,t,n){var r=ms(),a=gs(e),i={lane:a,action:n,eagerReducer:null,eagerState:null,next:null},o=t.pending;if(null===o?i.next=i:(i.next=o.next,o.next=i),t.pending=i,o=e.alternate,e===to||null!==o&&o===to)io=ao=!0;else{if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var l=t.lastRenderedState,s=o(l,n);if(i.eagerReducer=o,i.eagerState=s,fr(s,l))return}catch(c){}vs(e,a,r)}}var Mo={readContext:si,useCallback:oo,useContext:oo,useEffect:oo,useImperativeHandle:oo,useLayoutEffect:oo,useMemo:oo,useReducer:oo,useRef:oo,useState:oo,useDebugValue:oo,useDeferredValue:oo,useTransition:oo,useMutableSource:oo,useOpaqueIdentifier:oo,unstable_isNewReconciler:!1},No={readContext:si,useCallback:function(e,t){return co().memoizedState=[e,void 0===t?null:t],e},useContext:si,useEffect:Co,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,ko(4,2,zo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ko(4,2,e,t)},useMemo:function(e,t){var n=co();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=co();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=(e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=Oo.bind(null,to,e),[r.memoizedState,e]},useRef:xo,useState:yo,useDebugValue:_o,useDeferredValue:function(e){var t=yo(e),n=t[0],r=t[1];return Co(function(){var t=Ji.transition;Ji.transition=1;try{r(e)}finally{Ji.transition=t}},[e]),n},useTransition:function(){var e=yo(!1),t=e[0];return xo(e=Ao.bind(null,e[1])),[e,t]},useMutableSource:function(e,t,n){var r=co();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},go(r,e,t,n)},useOpaqueIdentifier:function(){if(Vi){var e=!1,t=function(e){return{$$typeof:R,toString:e,valueOf:e}}(function(){throw e||(e=!0,n("r:"+(Zr++).toString(36))),Error(o(355))}),n=yo(t)[1];return 0===(2&to.mode)&&(to.flags|=516,bo(5,function(){n("r:"+(Zr++).toString(36))},void 0,null)),t}return yo(t="r:"+(Zr++).toString(36)),t},unstable_isNewReconciler:!1},Io={readContext:si,useCallback:Lo,useContext:si,useEffect:jo,useImperativeHandle:Po,useLayoutEffect:Eo,useMemo:To,useReducer:po,useRef:wo,useState:function(){return po(fo)},useDebugValue:_o,useDeferredValue:function(e){var t=po(fo),n=t[0],r=t[1];return jo(function(){var t=Ji.transition;Ji.transition=1;try{r(e)}finally{Ji.transition=t}},[e]),n},useTransition:function(){var e=po(fo)[0];return[wo().current,e]},useMutableSource:vo,useOpaqueIdentifier:function(){return po(fo)[0]},unstable_isNewReconciler:!1},Ro={readContext:si,useCallback:Lo,useContext:si,useEffect:jo,useImperativeHandle:Po,useLayoutEffect:Eo,useMemo:To,useReducer:ho,useRef:wo,useState:function(){return ho(fo)},useDebugValue:_o,useDeferredValue:function(e){var t=ho(fo),n=t[0],r=t[1];return jo(function(){var t=Ji.transition;Ji.transition=1;try{r(e)}finally{Ji.transition=t}},[e]),n},useTransition:function(){var e=ho(fo)[0];return[wo().current,e]},useMutableSource:vo,useOpaqueIdentifier:function(){return ho(fo)[0]},unstable_isNewReconciler:!1},$o=S.ReactCurrentOwner,Do=!1;function Fo(e,t,n,r){t.child=null===e?_i(t,null,n,r):Pi(t,e.child,n,r)}function Uo(e,t,n,r,a){n=n.render;var i=t.ref;return li(t,a),r=so(e,t,n,r,i,a),null===e||Do?(t.flags|=1,Fo(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~a,sl(e,t,a))}function Bo(e,t,n,r,a,i){if(null===e){var o=n.type;return"function"!==typeof o||Ys(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ks(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Vo(e,t,o,r,a,i))}return o=e.child,0===(a&i)&&(a=o.memoizedProps,(n=null!==(n=n.compare)?n:hr)(a,r)&&e.ref===t.ref)?sl(e,t,i):(t.flags|=1,(e=Gs(o,r)).ref=t.ref,e.return=t,t.child=e)}function Vo(e,t,n,r,a,i){if(null!==e&&hr(e.memoizedProps,r)&&e.ref===t.ref){if(Do=!1,0===(i&a))return t.lanes=e.lanes,sl(e,t,i);0!==(16384&e.flags)&&(Do=!0)}return qo(e,t,n,r,i)}function Ho(e,t,n){var r=t.pendingProps,a=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode||"unstable-defer-without-hiding"===r.mode)if(0===(4&t.mode))t.memoizedState={baseLanes:0},js(t,n);else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},js(t,e),null;t.memoizedState={baseLanes:0},js(t,null!==i?i.baseLanes:n)}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,js(t,r);return Fo(e,t,a,n),t.child}function Wo(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=128)}function qo(e,t,n,r,a){var i=ba(n)?va:ma.current;return i=ya(t,i),li(t,a),n=so(e,t,n,r,i,a),null===e||Do?(t.flags|=1,Fo(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~a,sl(e,t,a))}function Qo(e,t,n,r,a){if(ba(n)){var i=!0;Sa(t)}else i=!1;if(li(t,a),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),wi(t,n,r),Si(t,n,r,a),r=!0;else if(null===e){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,c=n.contextType;"object"===typeof c&&null!==c?c=si(c):c=ya(t,c=ba(n)?va:ma.current);var u=n.getDerivedStateFromProps,d="function"===typeof u||"function"===typeof o.getSnapshotBeforeUpdate;d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==r||s!==c)&&ki(t,o,r,c),ci=!1;var f=t.memoizedState;o.state=f,mi(t,r,o,a),s=t.memoizedState,l!==r||f!==s||ga.current||ci?("function"===typeof u&&(yi(t,n,u,r),s=t.memoizedState),(l=ci||xi(t,n,l,r,f,s,c))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4)):("function"===typeof o.componentDidMount&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=c,r=l):("function"===typeof o.componentDidMount&&(t.flags|=4),r=!1)}else{o=t.stateNode,di(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ja(t.type,l),o.props=c,d=t.pendingProps,f=o.context,"object"===typeof(s=n.contextType)&&null!==s?s=si(s):s=ya(t,s=ba(n)?va:ma.current);var p=n.getDerivedStateFromProps;(u="function"===typeof p||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==d||f!==s)&&ki(t,o,r,s),ci=!1,f=t.memoizedState,o.state=f,mi(t,r,o,a);var h=t.memoizedState;l!==d||f!==h||ga.current||ci?("function"===typeof p&&(yi(t,n,p,r),h=t.memoizedState),(c=ci||xi(t,n,c,r,f,h,s))?(u||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,h,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=256)):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=s,r=c):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=256),r=!1)}return Yo(e,t,n,r,i,a)}function Yo(e,t,n,r,a,i){Wo(e,t);var o=0!==(64&t.flags);if(!r&&!o)return a&&Ca(t,n,!1),sl(e,t,i);r=t.stateNode,$o.current=t;var l=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=Pi(t,e.child,null,i),t.child=Pi(t,null,l,i)):Fo(e,t,l,i),t.memoizedState=r.state,a&&Ca(t,n,!0),t.child}function Go(e){var t=e.stateNode;t.pendingContext?wa(0,t.pendingContext,t.pendingContext!==t.context):t.context&&wa(0,t.context,!1),Ni(e,t.containerInfo)}var Ko,Xo,Zo,Jo,el={dehydrated:null,retryLane:0};function tl(e,t,n){var r,a=t.pendingProps,i=Di.current,o=!1;return(r=0!==(64&t.flags))||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(o=!0,t.flags&=-65):null!==e&&null===e.memoizedState||void 0===a.fallback||!0===a.unstable_avoidThisFallback||(i|=1),pa(Di,1&i),null===e?(void 0!==a.fallback&&qi(t),e=a.children,i=a.fallback,o?(e=nl(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=el,e):"number"===typeof a.unstable_expectedLoadTime?(e=nl(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=el,t.lanes=33554432,e):((n=Zs({mode:"visible",children:e},t.mode,n,null)).return=t,t.child=n)):(e.memoizedState,o?(a=al(e,t,a.children,a.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=null===i?{baseLanes:n}:{baseLanes:i.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=el,a):(n=rl(e,t,a.children,n),t.memoizedState=null,n))}function nl(e,t,n,r){var a=e.mode,i=e.child;return t={mode:"hidden",children:t},0===(2&a)&&null!==i?(i.childLanes=0,i.pendingProps=t):i=Zs(t,a,0,null),n=Xs(n,a,r,null),i.return=e,n.return=e,i.sibling=n,e.child=i,n}function rl(e,t,n,r){var a=e.child;return e=a.sibling,n=Gs(a,{mode:"visible",children:n}),0===(2&t.mode)&&(n.lanes=r),n.return=t,n.sibling=null,null!==e&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function al(e,t,n,r,a){var i=t.mode,o=e.child;e=o.sibling;var l={mode:"hidden",children:n};return 0===(2&i)&&t.child!==o?((n=t.child).childLanes=0,n.pendingProps=l,null!==(o=n.lastEffect)?(t.firstEffect=n.firstEffect,t.lastEffect=o,o.nextEffect=null):t.firstEffect=t.lastEffect=null):n=Gs(o,l),null!==e?r=Gs(e,r):(r=Xs(r,i,a,null)).flags|=2,r.return=t,n.return=t,n.sibling=r,t.child=n,r}function il(e,t){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),oi(e.return,t)}function ol(e,t,n,r,a,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a,lastEffect:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a,o.lastEffect=i)}function ll(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(Fo(e,t,r.children,n),0!==(2&(r=Di.current)))r=1&r|2,t.flags|=64;else{if(null!==e&&0!==(64&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&il(e,n);else if(19===e.tag)il(e,n);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(pa(Di,r),0===(2&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===Fi(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ol(t,!1,a,n,i,t.lastEffect);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===Fi(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ol(t,!0,n,null,i,t.lastEffect);break;case"together":ol(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function sl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Hl|=t.lanes,0!==(n&t.childLanes)){if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Gs(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Gs(e,e.pendingProps)).return=t;n.sibling=null}return t.child}return null}function cl(e,t){if(!Vi)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ul(e,t,n){var a=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:case 17:return ba(t.type)&&xa(),null;case 3:return Ii(),fa(ga),fa(ma),Xi(),(a=t.stateNode).pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),null!==e&&null!==e.child||(Yi(t)?t.flags|=4:a.hydrate||(t.flags|=256)),Xo(t),null;case 5:$i(t);var i=Mi(Oi.current);if(n=t.type,null!==e&&null!=t.stateNode)Zo(e,t,n,a,i),e.ref!==t.ref&&(t.flags|=128);else{if(!a){if(null===t.stateNode)throw Error(o(166));return null}if(e=Mi(Ti.current),Yi(t)){a=t.stateNode,n=t.type;var l=t.memoizedProps;switch(a[ea]=t,a[ta]=l,n){case"dialog":Ar("cancel",a),Ar("close",a);break;case"iframe":case"object":case"embed":Ar("load",a);break;case"video":case"audio":for(e=0;e<Pr.length;e++)Ar(Pr[e],a);break;case"source":Ar("error",a);break;case"img":case"image":case"link":Ar("error",a),Ar("load",a);break;case"details":Ar("toggle",a);break;case"input":ne(a,l),Ar("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!l.multiple},Ar("invalid",a);break;case"textarea":ue(a,l),Ar("invalid",a)}for(var c in Ee(n,l),e=null,l)l.hasOwnProperty(c)&&(i=l[c],"children"===c?"string"===typeof i?a.textContent!==i&&(e=["children",i]):"number"===typeof i&&a.textContent!==""+i&&(e=["children",""+i]):s.hasOwnProperty(c)&&null!=i&&"onScroll"===c&&Ar("scroll",a));switch(n){case"input":Z(a),ie(a,l,!0);break;case"textarea":Z(a),fe(a);break;case"select":case"option":break;default:"function"===typeof l.onClick&&(a.onclick=Br)}a=e,t.updateQueue=a,null!==a&&(t.flags|=4)}else{switch(c=9===i.nodeType?i:i.ownerDocument,e===pe&&(e=me(n)),e===pe?"script"===n?((e=c.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof a.is?e=c.createElement(n,{is:a.is}):(e=c.createElement(n),"select"===n&&(c=e,a.multiple?c.multiple=!0:a.size&&(c.size=a.size))):e=c.createElementNS(e,n),e[ea]=t,e[ta]=a,Ko(e,t,!1,!1),t.stateNode=e,c=ze(n,a),n){case"dialog":Ar("cancel",e),Ar("close",e),i=a;break;case"iframe":case"object":case"embed":Ar("load",e),i=a;break;case"video":case"audio":for(i=0;i<Pr.length;i++)Ar(Pr[i],e);i=a;break;case"source":Ar("error",e),i=a;break;case"img":case"image":case"link":Ar("error",e),Ar("load",e),i=a;break;case"details":Ar("toggle",e),i=a;break;case"input":ne(e,a),i=te(e,a),Ar("invalid",e);break;case"option":i=le(e,a);break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=r({},a,{value:void 0}),Ar("invalid",e);break;case"textarea":ue(e,a),i=ce(e,a),Ar("invalid",e);break;default:i=a}Ee(n,i);var u=i;for(l in u)if(u.hasOwnProperty(l)){var d=u[l];"style"===l?Ce(e,d):"dangerouslySetInnerHTML"===l?null!=(d=d?d.__html:void 0)&&be(e,d):"children"===l?"string"===typeof d?("textarea"!==n||""!==d)&&xe(e,d):"number"===typeof d&&xe(e,""+d):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(s.hasOwnProperty(l)?null!=d&&"onScroll"===l&&Ar("scroll",e):null!=d&&k(e,l,d,c))}switch(n){case"input":Z(e),ie(e,a,!1);break;case"textarea":Z(e),fe(e);break;case"option":null!=a.value&&e.setAttribute("value",""+K(a.value));break;case"select":e.multiple=!!a.multiple,null!=(l=a.value)?se(e,!!a.multiple,l,!1):null!=a.defaultValue&&se(e,!!a.multiple,a.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Br)}Wr(n,a)&&(t.flags|=4)}null!==t.ref&&(t.flags|=128)}return null;case 6:if(e&&null!=t.stateNode)Jo(e,t,e.memoizedProps,a);else{if("string"!==typeof a&&null===t.stateNode)throw Error(o(166));n=Mi(Oi.current),Mi(Ti.current),Yi(t)?(a=t.stateNode,n=t.memoizedProps,a[ea]=t,a.nodeValue!==n&&(t.flags|=4)):((a=(9===n.nodeType?n:n.ownerDocument).createTextNode(a))[ea]=t,t.stateNode=a)}return null;case 13:return fa(Di),a=t.memoizedState,0!==(64&t.flags)?(t.lanes=n,t):(a=null!==a,n=!1,null===e?void 0!==t.memoizedProps.fallback&&Yi(t):n=null!==e.memoizedState,a&&!n&&0!==(2&t.mode)&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!==(1&Di.current)?0===Ul&&(Ul=3):(0!==Ul&&3!==Ul||(Ul=4),null===Il||0===(134217727&Hl)&&0===(134217727&Wl)||ws(Il,$l))),(a||n)&&(t.flags|=4),null);case 4:return Ii(),Xo(t),null===e&&Mr(t.stateNode.containerInfo),null;case 10:return ii(t),null;case 19:if(fa(Di),null===(a=t.memoizedState))return null;if(l=0!==(64&t.flags),null===(c=a.rendering))if(l)cl(a,!1);else{if(0!==Ul||null!==e&&0!==(64&e.flags))for(e=t.child;null!==e;){if(null!==(c=Fi(e))){for(t.flags|=64,cl(a,!1),null!==(l=c.updateQueue)&&(t.updateQueue=l,t.flags|=4),null===a.lastEffect&&(t.firstEffect=null),t.lastEffect=a.lastEffect,a=n,n=t.child;null!==n;)e=a,(l=n).flags&=2,l.nextEffect=null,l.firstEffect=null,l.lastEffect=null,null===(c=l.alternate)?(l.childLanes=0,l.lanes=e,l.child=null,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return pa(Di,1&Di.current|2),t.child}e=e.sibling}null!==a.tail&&Wa()>Gl&&(t.flags|=64,l=!0,cl(a,!1),t.lanes=33554432)}else{if(!l)if(null!==(e=Fi(c))){if(t.flags|=64,l=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),cl(a,!0),null===a.tail&&"hidden"===a.tailMode&&!c.alternate&&!Vi)return null!==(t=t.lastEffect=a.lastEffect)&&(t.nextEffect=null),null}else 2*Wa()-a.renderingStartTime>Gl&&1073741824!==n&&(t.flags|=64,l=!0,cl(a,!1),t.lanes=33554432);a.isBackwards?(c.sibling=t.child,t.child=c):(null!==(n=a.last)?n.sibling=c:t.child=c,a.last=c)}return null!==a.tail?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.lastEffect=t.lastEffect,a.renderingStartTime=Wa(),n.sibling=null,t=Di.current,pa(Di,l?1&t|2:1&t),n):null;case 23:case 24:return Es(),null!==e&&null!==e.memoizedState!==(null!==t.memoizedState)&&"unstable-defer-without-hiding"!==a.mode&&(t.flags|=4),null}throw Error(o(156,t.tag))}function dl(e){switch(e.tag){case 1:ba(e.type)&&xa();var t=e.flags;return 4096&t?(e.flags=-4097&t|64,e):null;case 3:if(Ii(),fa(ga),fa(ma),Xi(),0!==(64&(t=e.flags)))throw Error(o(285));return e.flags=-4097&t|64,e;case 5:return $i(e),null;case 13:return fa(Di),4096&(t=e.flags)?(e.flags=-4097&t|64,e):null;case 19:return fa(Di),null;case 4:return Ii(),null;case 10:return ii(e),null;case 23:case 24:return Es(),null;default:return null}}function fl(e,t){try{var n="",r=t;do{n+=Y(r),r=r.return}while(r);var a=n}catch(i){a="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:a}}function pl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}Ko=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Xo=function(){},Zo=function(e,t,n,a){var i=e.memoizedProps;if(i!==a){e=t.stateNode,Mi(Ti.current);var o,l=null;switch(n){case"input":i=te(e,i),a=te(e,a),l=[];break;case"option":i=le(e,i),a=le(e,a),l=[];break;case"select":i=r({},i,{value:void 0}),a=r({},a,{value:void 0}),l=[];break;case"textarea":i=ce(e,i),a=ce(e,a),l=[];break;default:"function"!==typeof i.onClick&&"function"===typeof a.onClick&&(e.onclick=Br)}for(d in Ee(n,a),n=null,i)if(!a.hasOwnProperty(d)&&i.hasOwnProperty(d)&&null!=i[d])if("style"===d){var c=i[d];for(o in c)c.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==d&&"children"!==d&&"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&"autoFocus"!==d&&(s.hasOwnProperty(d)?l||(l=[]):(l=l||[]).push(d,null));for(d in a){var u=a[d];if(c=null!=i?i[d]:void 0,a.hasOwnProperty(d)&&u!==c&&(null!=u||null!=c))if("style"===d)if(c){for(o in c)!c.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&c[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(l||(l=[]),l.push(d,n)),n=u;else"dangerouslySetInnerHTML"===d?(u=u?u.__html:void 0,c=c?c.__html:void 0,null!=u&&c!==u&&(l=l||[]).push(d,u)):"children"===d?"string"!==typeof u&&"number"!==typeof u||(l=l||[]).push(d,""+u):"suppressContentEditableWarning"!==d&&"suppressHydrationWarning"!==d&&(s.hasOwnProperty(d)?(null!=u&&"onScroll"===d&&Ar("scroll",e),l||c===u||(l=[])):"object"===typeof u&&null!==u&&u.$$typeof===R?u.toString():(l=l||[]).push(d,u))}n&&(l=l||[]).push("style",n);var d=l;(t.updateQueue=d)&&(t.flags|=4)}},Jo=function(e,t,n,r){n!==r&&(t.flags|=4)};var hl="function"===typeof WeakMap?WeakMap:Map;function ml(e,t,n){(n=fi(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Jl||(Jl=!0,es=r),pl(0,t)},n}function gl(e,t,n){(n=fi(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return pl(0,t),r(a)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){"function"!==typeof r&&(null===ts?ts=new Set([this]):ts.add(this),pl(0,t));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}var vl="function"===typeof WeakSet?WeakSet:Set;function yl(e){var t=e.ref;if(null!==t)if("function"===typeof t)try{t(null)}catch(n){Vs(e,n)}else t.current=null}function bl(e,t){switch(t.tag){case 0:case 11:case 15:case 22:case 5:case 6:case 4:case 17:return;case 1:if(256&t.flags&&null!==e){var n=e.memoizedProps,r=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:Ja(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:return void(256&t.flags&&Gr(t.stateNode.containerInfo))}throw Error(o(163))}function xl(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(null!==(t=null!==(t=n.updateQueue)?t.lastEffect:null)){e=t=t.next;do{if(3===(3&e.tag)){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(null!==(t=null!==(t=n.updateQueue)?t.lastEffect:null)){e=t=t.next;do{var a=e;r=a.next,0!==(4&(a=a.tag))&&0!==(1&a)&&(Fs(n,e),Ds(n,e)),e=r}while(e!==t)}return;case 1:return e=n.stateNode,4&n.flags&&(null===t?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:Ja(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),void(null!==(t=n.updateQueue)&&gi(n,t,e));case 3:if(null!==(t=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 5:case 1:e=n.child.stateNode}gi(n,t,e)}return;case 5:return e=n.stateNode,void(null===t&&4&n.flags&&Wr(n.type,n.memoizedProps)&&e.focus());case 6:case 4:case 12:case 19:case 17:case 20:case 21:case 23:case 24:return;case 13:return void(null===n.memoizedState&&(n=n.alternate,null!==n&&(n=n.memoizedState,null!==n&&(n=n.dehydrated,null!==n&&Ct(n)))))}throw Error(o(163))}function wl(e,t){for(var n=e;;){if(5===n.tag){var r=n.stateNode;if(t)"function"===typeof(r=r.style).setProperty?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var a=n.memoizedProps.style;a=void 0!==a&&null!==a&&a.hasOwnProperty("display")?a.display:null,r.style.display=Se("display",a)}}else if(6===n.tag)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((23!==n.tag&&24!==n.tag||null===n.memoizedState||n===e)&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function kl(e,t){if(Ea&&"function"===typeof Ea.onCommitFiberUnmount)try{Ea.onCommitFiberUnmount(ja,t)}catch(i){}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var n=e=e.next;do{var r=n,a=r.destroy;if(r=r.tag,void 0!==a)if(0!==(4&r))Fs(t,n);else{r=t;try{a()}catch(i){Vs(r,i)}}n=n.next}while(n!==e)}break;case 1:if(yl(t),"function"===typeof(e=t.stateNode).componentWillUnmount)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(i){Vs(t,i)}break;case 5:yl(t);break;case 4:Pl(e,t)}}function Sl(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function Cl(e){return 5===e.tag||3===e.tag||4===e.tag}function jl(e){e:{for(var t=e.return;null!==t;){if(Cl(t))break e;t=t.return}throw Error(o(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:case 4:t=t.containerInfo,r=!0;break;default:throw Error(o(161))}16&n.flags&&(xe(t,""),n.flags&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||Cl(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.flags)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.flags)){n=n.stateNode;break e}}r?El(e,n,t):zl(e,n,t)}function El(e,t,n){var r=e.tag,a=5===r||6===r;if(a)e=a?e.stateNode:e.stateNode.instance,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Br));else if(4!==r&&null!==(e=e.child))for(El(e,t,n),e=e.sibling;null!==e;)El(e,t,n),e=e.sibling}function zl(e,t,n){var r=e.tag,a=5===r||6===r;if(a)e=a?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(zl(e,t,n),e=e.sibling;null!==e;)zl(e,t,n),e=e.sibling}function Pl(e,t){for(var n,r,a=t,i=!1;;){if(!i){i=a.return;e:for(;;){if(null===i)throw Error(o(160));switch(n=i.stateNode,i.tag){case 5:r=!1;break e;case 3:case 4:n=n.containerInfo,r=!0;break e}i=i.return}i=!0}if(5===a.tag||6===a.tag){e:for(var l=e,s=a,c=s;;)if(kl(l,c),null!==c.child&&4!==c.tag)c.child.return=c,c=c.child;else{if(c===s)break e;for(;null===c.sibling;){if(null===c.return||c.return===s)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}r?(l=n,s=a.stateNode,8===l.nodeType?l.parentNode.removeChild(s):l.removeChild(s)):n.removeChild(a.stateNode)}else if(4===a.tag){if(null!==a.child){n=a.stateNode.containerInfo,r=!0,a.child.return=a,a=a.child;continue}}else if(kl(e,a),null!==a.child){a.child.return=a,a=a.child;continue}if(a===t)break;for(;null===a.sibling;){if(null===a.return||a.return===t)return;4===(a=a.return).tag&&(i=!1)}a.sibling.return=a.return,a=a.sibling}}function _l(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var r=n=n.next;do{3===(3&r.tag)&&(e=r.destroy,r.destroy=void 0,void 0!==e&&e()),r=r.next}while(r!==n)}return;case 1:case 12:case 17:return;case 5:if(null!=(n=t.stateNode)){r=t.memoizedProps;var a=null!==e?e.memoizedProps:r;e=t.type;var i=t.updateQueue;if(t.updateQueue=null,null!==i){for(n[ta]=r,"input"===e&&"radio"===r.type&&null!=r.name&&re(n,r),ze(e,a),t=ze(e,r),a=0;a<i.length;a+=2){var l=i[a],s=i[a+1];"style"===l?Ce(n,s):"dangerouslySetInnerHTML"===l?be(n,s):"children"===l?xe(n,s):k(n,l,s,t)}switch(e){case"input":ae(n,r);break;case"textarea":de(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,null!=(i=r.value)?se(n,!!r.multiple,i,!1):e!==!!r.multiple&&(null!=r.defaultValue?se(n,!!r.multiple,r.defaultValue,!0):se(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error(o(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return void((n=t.stateNode).hydrate&&(n.hydrate=!1,Ct(n.containerInfo)));case 13:return null!==t.memoizedState&&(Yl=Wa(),wl(t.child,!0)),void Ll(t);case 19:return void Ll(t);case 23:case 24:return void wl(t,null!==t.memoizedState)}throw Error(o(163))}function Ll(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new vl),t.forEach(function(t){var r=Ws.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Tl(e,t){return null!==e&&(null===(e=e.memoizedState)||null!==e.dehydrated)&&(null!==(t=t.memoizedState)&&null===t.dehydrated)}var Al=Math.ceil,Ol=S.ReactCurrentDispatcher,Ml=S.ReactCurrentOwner,Nl=0,Il=null,Rl=null,$l=0,Dl=0,Fl=da(0),Ul=0,Bl=null,Vl=0,Hl=0,Wl=0,ql=0,Ql=null,Yl=0,Gl=1/0;function Kl(){Gl=Wa()+500}var Xl,Zl=null,Jl=!1,es=null,ts=null,ns=!1,rs=null,as=90,is=[],os=[],ls=null,ss=0,cs=null,us=-1,ds=0,fs=0,ps=null,hs=!1;function ms(){return 0!==(48&Nl)?Wa():-1!==us?us:us=Wa()}function gs(e){if(0===(2&(e=e.mode)))return 1;if(0===(4&e))return 99===qa()?1:2;if(0===ds&&(ds=Vl),0!==Za.transition){0!==fs&&(fs=null!==Ql?Ql.pendingLanes:0),e=ds;var t=4186112&~fs;return 0===(t&=-t)&&(0===(t=(e=4186112&~e)&-e)&&(t=8192)),t}return e=qa(),0!==(4&Nl)&&98===e?e=Bt(12,ds):e=Bt(e=function(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}(e),ds),e}function vs(e,t,n){if(50<ss)throw ss=0,cs=null,Error(o(185));if(null===(e=ys(e,t)))return null;Wt(e,t,n),e===Il&&(Wl|=t,4===Ul&&ws(e,$l));var r=qa();1===t?0!==(8&Nl)&&0===(48&Nl)?ks(e):(bs(e,n),0===Nl&&(Kl(),Ka())):(0===(4&Nl)||98!==r&&99!==r||(null===ls?ls=new Set([e]):ls.add(e)),bs(e,n)),Ql=e}function ys(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}function bs(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var s=31-qt(l),c=1<<s,u=i[s];if(-1===u){if(0===(c&r)||0!==(c&a)){u=t,Dt(c);var d=$t;i[s]=10<=d?u+250:6<=d?u+5e3:-1}}else u<=t&&(e.expiredLanes|=c);l&=~c}if(r=Ft(e,e===Il?$l:0),t=$t,0===r)null!==n&&(n!==Da&&_a(n),e.callbackNode=null,e.callbackPriority=0);else{if(null!==n){if(e.callbackPriority===t)return;n!==Da&&_a(n)}15===t?(n=ks.bind(null,e),null===Ua?(Ua=[n],Ba=Pa(Ma,Xa)):Ua.push(n),n=Da):14===t?n=Ga(99,ks.bind(null,e)):(n=function(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(o(358,e))}}(t),n=Ga(n,xs.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function xs(e){if(us=-1,fs=ds=0,0!==(48&Nl))throw Error(o(327));var t=e.callbackNode;if($s()&&e.callbackNode!==t)return null;var n=Ft(e,e===Il?$l:0);if(0===n)return null;var r=n,a=Nl;Nl|=16;var i=_s();for(Il===e&&$l===r||(Kl(),zs(e,r));;)try{As();break}catch(s){Ps(e,s)}if(ai(),Ol.current=i,Nl=a,null!==Rl?r=0:(Il=null,$l=0,r=Ul),0!==(Vl&Wl))zs(e,0);else if(0!==r){if(2===r&&(Nl|=64,e.hydrate&&(e.hydrate=!1,Gr(e.containerInfo)),0!==(n=Ut(e))&&(r=Ls(e,n))),1===r)throw t=Bl,zs(e,0),ws(e,n),bs(e,Wa()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(o(345));case 2:case 5:Ns(e);break;case 3:if(ws(e,n),(62914560&n)===n&&10<(r=Yl+500-Wa())){if(0!==Ft(e,0))break;if(((a=e.suspendedLanes)&n)!==n){ms(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Qr(Ns.bind(null,e),r);break}Ns(e);break;case 4:if(ws(e,n),(4186112&n)===n)break;for(r=e.eventTimes,a=-1;0<n;){var l=31-qt(n);i=1<<l,(l=r[l])>a&&(a=l),n&=~i}if(n=a,10<(n=(120>(n=Wa()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Al(n/1960))-n)){e.timeoutHandle=Qr(Ns.bind(null,e),n);break}Ns(e);break;default:throw Error(o(329))}}return bs(e,Wa()),e.callbackNode===t?xs.bind(null,e):null}function ws(e,t){for(t&=~ql,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qt(t),r=1<<n;e[n]=-1,t&=~r}}function ks(e){if(0!==(48&Nl))throw Error(o(327));if($s(),e===Il&&0!==(e.expiredLanes&$l)){var t=$l,n=Ls(e,t);0!==(Vl&Wl)&&(n=Ls(e,t=Ft(e,t)))}else n=Ls(e,t=Ft(e,0));if(0!==e.tag&&2===n&&(Nl|=64,e.hydrate&&(e.hydrate=!1,Gr(e.containerInfo)),0!==(t=Ut(e))&&(n=Ls(e,t))),1===n)throw n=Bl,zs(e,0),ws(e,t),bs(e,Wa()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ns(e),bs(e,Wa()),null}function Ss(e,t){var n=Nl;Nl|=1;try{return e(t)}finally{0===(Nl=n)&&(Kl(),Ka())}}function Cs(e,t){var n=Nl;Nl&=-2,Nl|=8;try{return e(t)}finally{0===(Nl=n)&&(Kl(),Ka())}}function js(e,t){pa(Fl,Dl),Dl|=t,Vl|=t}function Es(){Dl=Fl.current,fa(Fl)}function zs(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,Yr(n)),null!==Rl)for(n=Rl.return;null!==n;){var r=n;switch(r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&xa();break;case 3:Ii(),fa(ga),fa(ma),Xi();break;case 5:$i(r);break;case 4:Ii();break;case 13:case 19:fa(Di);break;case 10:ii(r);break;case 23:case 24:Es()}n=n.return}Il=e,Rl=Gs(e.current,null),$l=Dl=Vl=t,Ul=0,Bl=null,ql=Wl=Hl=0}function Ps(e,t){for(;;){var n=Rl;try{if(ai(),Zi.current=Mo,ao){for(var r=to.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}ao=!1}if(eo=0,ro=no=to=null,io=!1,Ml.current=null,null===n||null===n.return){Ul=1,Bl=t,Rl=null;break}e:{var i=e,o=n.return,l=n,s=t;if(t=$l,l.flags|=2048,l.firstEffect=l.lastEffect=null,null!==s&&"object"===typeof s&&"function"===typeof s.then){var c=s;if(0===(2&l.mode)){var u=l.alternate;u?(l.updateQueue=u.updateQueue,l.memoizedState=u.memoizedState,l.lanes=u.lanes):(l.updateQueue=null,l.memoizedState=null)}var d=0!==(1&Di.current),f=o;do{var p;if(p=13===f.tag){var h=f.memoizedState;if(null!==h)p=null!==h.dehydrated;else{var m=f.memoizedProps;p=void 0!==m.fallback&&(!0!==m.unstable_avoidThisFallback||!d)}}if(p){var g=f.updateQueue;if(null===g){var v=new Set;v.add(c),f.updateQueue=v}else g.add(c);if(0===(2&f.mode)){if(f.flags|=64,l.flags|=16384,l.flags&=-2981,1===l.tag)if(null===l.alternate)l.tag=17;else{var y=fi(-1,1);y.tag=2,pi(l,y)}l.lanes|=1;break e}s=void 0,l=t;var b=i.pingCache;if(null===b?(b=i.pingCache=new hl,s=new Set,b.set(c,s)):void 0===(s=b.get(c))&&(s=new Set,b.set(c,s)),!s.has(l)){s.add(l);var x=Hs.bind(null,i,c,l);c.then(x,x)}f.flags|=4096,f.lanes=t;break e}f=f.return}while(null!==f);s=Error((G(l.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==Ul&&(Ul=2),s=fl(s,l),f=o;do{switch(f.tag){case 3:i=s,f.flags|=4096,t&=-t,f.lanes|=t,hi(f,ml(0,i,t));break e;case 1:i=s;var w=f.type,k=f.stateNode;if(0===(64&f.flags)&&("function"===typeof w.getDerivedStateFromError||null!==k&&"function"===typeof k.componentDidCatch&&(null===ts||!ts.has(k)))){f.flags|=4096,t&=-t,f.lanes|=t,hi(f,gl(f,i,t));break e}}f=f.return}while(null!==f)}Ms(n)}catch(S){t=S,Rl===n&&null!==n&&(Rl=n=n.return);continue}break}}function _s(){var e=Ol.current;return Ol.current=Mo,null===e?Mo:e}function Ls(e,t){var n=Nl;Nl|=16;var r=_s();for(Il===e&&$l===t||zs(e,t);;)try{Ts();break}catch(a){Ps(e,a)}if(ai(),Nl=n,Ol.current=r,null!==Rl)throw Error(o(261));return Il=null,$l=0,Ul}function Ts(){for(;null!==Rl;)Os(Rl)}function As(){for(;null!==Rl&&!La();)Os(Rl)}function Os(e){var t=Xl(e.alternate,e,Dl);e.memoizedProps=e.pendingProps,null===t?Ms(e):Rl=t,Ml.current=null}function Ms(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(2048&t.flags)){if(null!==(n=ul(n,t,Dl)))return void(Rl=n);if(24!==(n=t).tag&&23!==n.tag||null===n.memoizedState||0!==(1073741824&Dl)||0===(4&n.mode)){for(var r=0,a=n.child;null!==a;)r|=a.lanes|a.childLanes,a=a.sibling;n.childLanes=r}null!==e&&0===(2048&e.flags)&&(null===e.firstEffect&&(e.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(null!==e.lastEffect?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(null!==(n=dl(t)))return n.flags&=2047,void(Rl=n);null!==e&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(null!==(t=t.sibling))return void(Rl=t);Rl=t=e}while(null!==t);0===Ul&&(Ul=5)}function Ns(e){var t=qa();return Ya(99,Is.bind(null,e,t)),null}function Is(e,t){do{$s()}while(null!==rs);if(0!==(48&Nl))throw Error(o(327));var n=e.finishedWork;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null;var r=n.lanes|n.childLanes,a=r,i=e.pendingLanes&~a;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=a,e.mutableReadLanes&=a,e.entangledLanes&=a,a=e.entanglements;for(var l=e.eventTimes,s=e.expirationTimes;0<i;){var c=31-qt(i),u=1<<c;a[c]=0,l[c]=-1,s[c]=-1,i&=~u}if(null!==ls&&0===(24&r)&&ls.has(e)&&ls.delete(e),e===Il&&(Rl=Il=null,$l=0),1<n.flags?null!==n.lastEffect?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,null!==r){if(a=Nl,Nl|=32,Ml.current=null,Vr=Xt,br(l=yr())){if("selectionStart"in l)s={start:l.selectionStart,end:l.selectionEnd};else e:if(s=(s=l.ownerDocument)&&s.defaultView||window,(u=s.getSelection&&s.getSelection())&&0!==u.rangeCount){s=u.anchorNode,i=u.anchorOffset,c=u.focusNode,u=u.focusOffset;try{s.nodeType,c.nodeType}catch(E){s=null;break e}var d=0,f=-1,p=-1,h=0,m=0,g=l,v=null;t:for(;;){for(var y;g!==s||0!==i&&3!==g.nodeType||(f=d+i),g!==c||0!==u&&3!==g.nodeType||(p=d+u),3===g.nodeType&&(d+=g.nodeValue.length),null!==(y=g.firstChild);)v=g,g=y;for(;;){if(g===l)break t;if(v===s&&++h===i&&(f=d),v===c&&++m===u&&(p=d),null!==(y=g.nextSibling))break;v=(g=v).parentNode}g=y}s=-1===f||-1===p?null:{start:f,end:p}}else s=null;s=s||{start:0,end:0}}else s=null;Hr={focusedElem:l,selectionRange:s},Xt=!1,ps=null,hs=!1,Zl=r;do{try{Rs()}catch(E){if(null===Zl)throw Error(o(330));Vs(Zl,E),Zl=Zl.nextEffect}}while(null!==Zl);ps=null,Zl=r;do{try{for(l=e;null!==Zl;){var b=Zl.flags;if(16&b&&xe(Zl.stateNode,""),128&b){var x=Zl.alternate;if(null!==x){var w=x.ref;null!==w&&("function"===typeof w?w(null):w.current=null)}}switch(1038&b){case 2:jl(Zl),Zl.flags&=-3;break;case 6:jl(Zl),Zl.flags&=-3,_l(Zl.alternate,Zl);break;case 1024:Zl.flags&=-1025;break;case 1028:Zl.flags&=-1025,_l(Zl.alternate,Zl);break;case 4:_l(Zl.alternate,Zl);break;case 8:Pl(l,s=Zl);var k=s.alternate;Sl(s),null!==k&&Sl(k)}Zl=Zl.nextEffect}}catch(E){if(null===Zl)throw Error(o(330));Vs(Zl,E),Zl=Zl.nextEffect}}while(null!==Zl);if(w=Hr,x=yr(),b=w.focusedElem,l=w.selectionRange,x!==b&&b&&b.ownerDocument&&vr(b.ownerDocument.documentElement,b)){null!==l&&br(b)&&(x=l.start,void 0===(w=l.end)&&(w=x),"selectionStart"in b?(b.selectionStart=x,b.selectionEnd=Math.min(w,b.value.length)):(w=(x=b.ownerDocument||document)&&x.defaultView||window).getSelection&&(w=w.getSelection(),s=b.textContent.length,k=Math.min(l.start,s),l=void 0===l.end?k:Math.min(l.end,s),!w.extend&&k>l&&(s=l,l=k,k=s),s=gr(b,k),i=gr(b,l),s&&i&&(1!==w.rangeCount||w.anchorNode!==s.node||w.anchorOffset!==s.offset||w.focusNode!==i.node||w.focusOffset!==i.offset)&&((x=x.createRange()).setStart(s.node,s.offset),w.removeAllRanges(),k>l?(w.addRange(x),w.extend(i.node,i.offset)):(x.setEnd(i.node,i.offset),w.addRange(x))))),x=[];for(w=b;w=w.parentNode;)1===w.nodeType&&x.push({element:w,left:w.scrollLeft,top:w.scrollTop});for("function"===typeof b.focus&&b.focus(),b=0;b<x.length;b++)(w=x[b]).element.scrollLeft=w.left,w.element.scrollTop=w.top}Xt=!!Vr,Hr=Vr=null,e.current=n,Zl=r;do{try{for(b=e;null!==Zl;){var S=Zl.flags;if(36&S&&xl(b,Zl.alternate,Zl),128&S){x=void 0;var C=Zl.ref;if(null!==C){var j=Zl.stateNode;Zl.tag,x=j,"function"===typeof C?C(x):C.current=x}}Zl=Zl.nextEffect}}catch(E){if(null===Zl)throw Error(o(330));Vs(Zl,E),Zl=Zl.nextEffect}}while(null!==Zl);Zl=null,Fa(),Nl=a}else e.current=n;if(ns)ns=!1,rs=e,as=t;else for(Zl=r;null!==Zl;)t=Zl.nextEffect,Zl.nextEffect=null,8&Zl.flags&&((S=Zl).sibling=null,S.stateNode=null),Zl=t;if(0===(r=e.pendingLanes)&&(ts=null),1===r?e===cs?ss++:(ss=0,cs=e):ss=0,n=n.stateNode,Ea&&"function"===typeof Ea.onCommitFiberRoot)try{Ea.onCommitFiberRoot(ja,n,void 0,64===(64&n.current.flags))}catch(E){}if(bs(e,Wa()),Jl)throw Jl=!1,e=es,es=null,e;return 0!==(8&Nl)||Ka(),null}function Rs(){for(;null!==Zl;){var e=Zl.alternate;hs||null===ps||(0!==(8&Zl.flags)?nt(Zl,ps)&&(hs=!0):13===Zl.tag&&Tl(e,Zl)&&nt(Zl,ps)&&(hs=!0));var t=Zl.flags;0!==(256&t)&&bl(e,Zl),0===(512&t)||ns||(ns=!0,Ga(97,function(){return $s(),null})),Zl=Zl.nextEffect}}function $s(){if(90!==as){var e=97<as?97:as;return as=90,Ya(e,Us)}return!1}function Ds(e,t){is.push(t,e),ns||(ns=!0,Ga(97,function(){return $s(),null}))}function Fs(e,t){os.push(t,e),ns||(ns=!0,Ga(97,function(){return $s(),null}))}function Us(){if(null===rs)return!1;var e=rs;if(rs=null,0!==(48&Nl))throw Error(o(331));var t=Nl;Nl|=32;var n=os;os=[];for(var r=0;r<n.length;r+=2){var a=n[r],i=n[r+1],l=a.destroy;if(a.destroy=void 0,"function"===typeof l)try{l()}catch(c){if(null===i)throw Error(o(330));Vs(i,c)}}for(n=is,is=[],r=0;r<n.length;r+=2){a=n[r],i=n[r+1];try{var s=a.create;a.destroy=s()}catch(c){if(null===i)throw Error(o(330));Vs(i,c)}}for(s=e.current.firstEffect;null!==s;)e=s.nextEffect,s.nextEffect=null,8&s.flags&&(s.sibling=null,s.stateNode=null),s=e;return Nl=t,Ka(),!0}function Bs(e,t,n){pi(e,t=ml(0,t=fl(n,t),1)),t=ms(),null!==(e=ys(e,1))&&(Wt(e,1,t),bs(e,t))}function Vs(e,t){if(3===e.tag)Bs(e,e,t);else for(var n=e.return;null!==n;){if(3===n.tag){Bs(n,e,t);break}if(1===n.tag){var r=n.stateNode;if("function"===typeof n.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===ts||!ts.has(r))){var a=gl(n,e=fl(t,e),1);if(pi(n,a),a=ms(),null!==(n=ys(n,1)))Wt(n,1,a),bs(n,a);else if("function"===typeof r.componentDidCatch&&(null===ts||!ts.has(r)))try{r.componentDidCatch(t,e)}catch(i){}break}}n=n.return}}function Hs(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=ms(),e.pingedLanes|=e.suspendedLanes&n,Il===e&&($l&n)===n&&(4===Ul||3===Ul&&(62914560&$l)===$l&&500>Wa()-Yl?zs(e,0):ql|=n),bs(e,t)}function Ws(e,t){var n=e.stateNode;null!==n&&n.delete(t),0===(t=0)&&(0===(2&(t=e.mode))?t=1:0===(4&t)?t=99===qa()?1:2:(0===ds&&(ds=Vl),0===(t=Vt(62914560&~ds))&&(t=4194304))),n=ms(),null!==(e=ys(e,t))&&(Wt(e,t,n),bs(e,n))}function qs(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Qs(e,t,n,r){return new qs(e,t,n,r)}function Ys(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Gs(e,t){var n=e.alternate;return null===n?((n=Qs(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ks(e,t,n,r,a,i){var l=2;if(r=e,"function"===typeof e)Ys(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case E:return Xs(n.children,a,i,t);case $:l=8,a|=16;break;case z:l=8,a|=1;break;case P:return(e=Qs(12,n,t,8|a)).elementType=P,e.type=P,e.lanes=i,e;case A:return(e=Qs(13,n,t,a)).type=A,e.elementType=A,e.lanes=i,e;case O:return(e=Qs(19,n,t,a)).elementType=O,e.lanes=i,e;case D:return Zs(n,a,i,t);case F:return(e=Qs(24,n,t,a)).elementType=F,e.lanes=i,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case _:l=10;break e;case L:l=9;break e;case T:l=11;break e;case M:l=14;break e;case N:l=16,r=null;break e;case I:l=22;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Qs(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Xs(e,t,n,r){return(e=Qs(7,e,r,t)).lanes=n,e}function Zs(e,t,n,r){return(e=Qs(23,e,r,t)).elementType=D,e.lanes=n,e}function Js(e,t,n){return(e=Qs(6,e,null,t)).lanes=n,e}function ec(e,t,n){return(t=Qs(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tc(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Ht(0),this.expirationTimes=Ht(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ht(0),this.mutableSourceEagerHydrationData=null}function nc(e,t,n,r){var a=t.current,i=ms(),l=gs(a);e:if(n){t:{if(Ze(n=n._reactInternals)!==n||1!==n.tag)throw Error(o(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break t;case 1:if(ba(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break t}}s=s.return}while(null!==s);throw Error(o(171))}if(1===n.tag){var c=n.type;if(ba(c)){n=ka(n,c,s);break e}}n=s}else n=ha;return null===t.context?t.context=n:t.pendingContext=n,(t=fi(i,l)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),pi(a,t),vs(a,l,i),l}function rc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function ac(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ic(e,t){ac(e,t),(e=e.alternate)&&ac(e,t)}function oc(e,t,n){var r=null!=n&&null!=n.hydrationOptions&&n.hydrationOptions.mutableSources||null;if(n=new tc(e,t,null!=n&&!0===n.hydrate),t=Qs(3,null,null,2===t?7:1===t?3:0),n.current=t,t.stateNode=n,ui(t),e[na]=n.current,Mr(8===e.nodeType?e.parentNode:e),r)for(e=0;e<r.length;e++){var a=(t=r[e])._getVersion;a=a(t._source),null==n.mutableSourceEagerHydrationData?n.mutableSourceEagerHydrationData=[t,a]:n.mutableSourceEagerHydrationData.push(t,a)}this._internalRoot=n}function lc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function sc(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i._internalRoot;if("function"===typeof a){var l=a;a=function(){var e=rc(o);l.call(e)}}nc(t,o,e,a)}else{if(i=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new oc(e,0,t?{hydrate:!0}:void 0)}(n,r),o=i._internalRoot,"function"===typeof a){var s=a;a=function(){var e=rc(o);s.call(e)}}Cs(function(){nc(t,o,e,a)})}return rc(o)}function cc(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!lc(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:j,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)}Xl=function(e,t,n){var r=t.lanes;if(null!==e)if(e.memoizedProps!==t.pendingProps||ga.current)Do=!0;else{if(0===(n&r)){switch(Do=!1,t.tag){case 3:Go(t),Gi();break;case 5:Ri(t);break;case 1:ba(t.type)&&Sa(t);break;case 4:Ni(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var a=t.type._context;pa(ei,a._currentValue),a._currentValue=r;break;case 13:if(null!==t.memoizedState)return 0!==(n&t.child.childLanes)?tl(e,t,n):(pa(Di,1&Di.current),null!==(t=sl(e,t,n))?t.sibling:null);pa(Di,1&Di.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(64&e.flags)){if(r)return ll(e,t,n);t.flags|=64}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),pa(Di,Di.current),r)break;return null;case 23:case 24:return t.lanes=0,Ho(e,t,n)}return sl(e,t,n)}Do=0!==(16384&e.flags)}else Do=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,a=ya(t,ma.current),li(t,n),a=so(null,t,r,e,a,n),t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,ba(r)){var i=!0;Sa(t)}else i=!1;t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,ui(t);var l=r.getDerivedStateFromProps;"function"===typeof l&&yi(t,r,l,e),a.updater=bi,t.stateNode=a,a._reactInternals=t,Si(t,r,e,n),t=Yo(null,t,r,!0,i,n)}else t.tag=0,Fo(null,t,a,n),t=t.child;return t;case 16:a=t.elementType;e:{switch(null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,a=(i=a._init)(a._payload),t.type=a,i=t.tag=function(e){if("function"===typeof e)return Ys(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===T)return 11;if(e===M)return 14}return 2}(a),e=Ja(a,e),i){case 0:t=qo(null,t,a,e,n);break e;case 1:t=Qo(null,t,a,e,n);break e;case 11:t=Uo(null,t,a,e,n);break e;case 14:t=Bo(null,t,a,Ja(a.type,e),r,n);break e}throw Error(o(306,a,""))}return t;case 0:return r=t.type,a=t.pendingProps,qo(e,t,r,a=t.elementType===r?a:Ja(r,a),n);case 1:return r=t.type,a=t.pendingProps,Qo(e,t,r,a=t.elementType===r?a:Ja(r,a),n);case 3:if(Go(t),r=t.updateQueue,null===e||null===r)throw Error(o(282));if(r=t.pendingProps,a=null!==(a=t.memoizedState)?a.element:null,di(e,t),mi(t,r,null,n),(r=t.memoizedState.element)===a)Gi(),t=sl(e,t,n);else{if((i=(a=t.stateNode).hydrate)&&(Bi=Kr(t.stateNode.containerInfo.firstChild),Ui=t,i=Vi=!0),i){if(null!=(e=a.mutableSourceEagerHydrationData))for(a=0;a<e.length;a+=2)(i=e[a])._workInProgressVersionPrimary=e[a+1],Ki.push(i);for(n=_i(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|1024,n=n.sibling}else Fo(e,t,r,n),Gi();t=t.child}return t;case 5:return Ri(t),null===e&&qi(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,l=a.children,qr(r,a)?l=null:null!==i&&qr(r,i)&&(t.flags|=16),Wo(e,t),Fo(e,t,l,n),t.child;case 6:return null===e&&qi(t),null;case 13:return tl(e,t,n);case 4:return Ni(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Pi(t,null,r,n):Fo(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,Uo(e,t,r,a=t.elementType===r?a:Ja(r,a),n);case 7:return Fo(e,t,t.pendingProps,n),t.child;case 8:case 12:return Fo(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,a=t.pendingProps,l=t.memoizedProps,i=a.value;var s=t.type._context;if(pa(ei,s._currentValue),s._currentValue=i,null!==l)if(s=l.value,0===(i=fr(s,i)?0:0|("function"===typeof r._calculateChangedBits?r._calculateChangedBits(s,i):1073741823))){if(l.children===a.children&&!ga.current){t=sl(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var c=s.dependencies;if(null!==c){l=s.child;for(var u=c.firstContext;null!==u;){if(u.context===r&&0!==(u.observedBits&i)){1===s.tag&&((u=fi(-1,n&-n)).tag=2,pi(s,u)),s.lanes|=n,null!==(u=s.alternate)&&(u.lanes|=n),oi(s.return,n),c.lanes|=n;break}u=u.next}}else l=10===s.tag&&s.type===t.type?null:s.child;if(null!==l)l.return=s;else for(l=s;null!==l;){if(l===t){l=null;break}if(null!==(s=l.sibling)){s.return=l.return,l=s;break}l=l.return}s=l}Fo(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=(i=t.pendingProps).children,li(t,n),r=r(a=si(a,i.unstable_observedBits)),t.flags|=1,Fo(e,t,r,n),t.child;case 14:return i=Ja(a=t.type,t.pendingProps),Bo(e,t,a,i=Ja(a.type,i),r,n);case 15:return Vo(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Ja(r,a),null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,ba(r)?(e=!0,Sa(t)):e=!1,li(t,n),wi(t,r,a),Si(t,r,a,n),Yo(null,t,r,!0,e,n);case 19:return ll(e,t,n);case 23:case 24:return Ho(e,t,n)}throw Error(o(156,t.tag))},oc.prototype.render=function(e){nc(e,this._internalRoot,null,null)},oc.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;nc(null,e,null,function(){t[na]=null})},rt=function(e){13===e.tag&&(vs(e,4,ms()),ic(e,4))},at=function(e){13===e.tag&&(vs(e,67108864,ms()),ic(e,67108864))},it=function(e){if(13===e.tag){var t=ms(),n=gs(e);vs(e,n,t),ic(e,n)}},ot=function(e,t){return t()},_e=function(e,t,n){switch(t){case"input":if(ae(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=la(r);if(!a)throw Error(o(90));J(r),ae(r,a)}}}break;case"textarea":de(e,n);break;case"select":null!=(t=n.value)&&se(e,!!n.multiple,t,!1)}},Ne=Ss,Ie=function(e,t,n,r,a){var i=Nl;Nl|=4;try{return Ya(98,e.bind(null,t,n,r,a))}finally{0===(Nl=i)&&(Kl(),Ka())}},Re=function(){0===(49&Nl)&&(function(){if(null!==ls){var e=ls;ls=null,e.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,bs(e,Wa())})}Ka()}(),$s())},$e=function(e,t){var n=Nl;Nl|=2;try{return e(t)}finally{0===(Nl=n)&&(Kl(),Ka())}};var uc={Events:[ia,oa,la,Oe,Me,$s,{current:!1}]},dc={findFiberByHostInstance:aa,bundleType:0,version:"17.0.1",rendererPackageName:"react-dom"},fc={bundleType:dc.bundleType,version:dc.version,rendererPackageName:dc.rendererPackageName,rendererConfig:dc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:S.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=tt(e))?null:e.stateNode},findFiberByHostInstance:dc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{ja=pc.inject(fc),Ea=pc}catch(ye){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uc,t.createPortal=cc,t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw Error(o(268,Object.keys(e)))}return e=null===(e=tt(t))?null:e.stateNode},t.flushSync=function(e,t){var n=Nl;if(0!==(48&n))return e(t);Nl|=1;try{if(e)return Ya(99,e.bind(null,t))}finally{Nl=n,Ka()}},t.hydrate=function(e,t,n){if(!lc(t))throw Error(o(200));return sc(null,e,t,!0,n)},t.render=function(e,t,n){if(!lc(t))throw Error(o(200));return sc(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!lc(e))throw Error(o(40));return!!e._reactRootContainer&&(Cs(function(){sc(null,null,e,!1,function(){e._reactRootContainer=null,e[na]=null})}),!0)},t.unstable_batchedUpdates=Ss,t.unstable_createPortal=function(e,t){return cc(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!lc(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return sc(e,t,n,!1,r)},t.version="17.0.1"}),o=n.cw(function(e,t){!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=i()}),l=n.cw(function(e,t){var n=60103,r=60106,a=60107,i=60108,o=60114,l=60109,s=60110,c=60112,u=60113,d=60120,f=60115,p=60116,h=60121,m=60122,g=60117,v=60129,y=60131;if("function"===typeof Symbol&&Symbol.for){var b=Symbol.for;n=b("react.element"),r=b("react.portal"),a=b("react.fragment"),i=b("react.strict_mode"),o=b("react.profiler"),l=b("react.provider"),s=b("react.context"),c=b("react.forward_ref"),u=b("react.suspense"),d=b("react.suspense_list"),f=b("react.memo"),p=b("react.lazy"),h=b("react.block"),m=b("react.server.block"),g=b("react.fundamental"),v=b("react.debug_trace_mode"),y=b("react.legacy_hidden")}function x(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case a:case o:case i:case u:case d:return e;default:switch(e=e&&e.$$typeof){case s:case c:case p:case f:case l:return e;default:return t}}case r:return t}}}t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===o||e===v||e===i||e===u||e===d||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===f||e.$$typeof===l||e.$$typeof===s||e.$$typeof===c||e.$$typeof===g||e.$$typeof===h||e[0]===m)},t.typeOf=x}),s=n.cw(function(e,t){e.exports=l()}),c=n.cw(function(e,t){var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,y=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e.type){case u:case d:case i:case l:case o:case p:return e;default:switch(e&&e.$$typeof){case c:case f:case g:case m:case s:return e;default:return t}}case a:return t}}}function k(e){return w(e)===d}}),u=n.cw(function(e,t){c()}),d=n.cw(function(e,t){a();var n=p(),r=60103;if(t.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var i=Symbol.for;r=i("react.element"),t.Fragment=i("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,i={},c=null,u=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,a)&&!s.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===i[a]&&(i[a]=t[a]);return{$$typeof:r,type:e,key:c,ref:u,props:i,_owner:o.current}}t.jsx=c,t.jsxs=c}),f=n.cw(function(e,t){var n=a(),r=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,l=60110,s=60112;t.Suspense=60113;var c=60115,u=60116;if("function"===typeof Symbol&&Symbol.for){var d=Symbol.for;r=d("react.element"),i=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),o=d("react.provider"),l=d("react.context"),s=d("react.forward_ref"),t.Suspense=d("react.suspense"),c=d("react.memo"),u=d("react.lazy")}var f="function"===typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var b=y.prototype=new v;b.constructor=y,n(b,g.prototype),b.isPureReactComponent=!0;var x={current:null},w=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var a,i={},o=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,a)&&!k.hasOwnProperty(a)&&(i[a]=t[a]);var s=arguments.length-2;if(1===s)i.children=n;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===i[a]&&(i[a]=s[a]);return{$$typeof:r,type:e,key:o,ref:l,props:i,_owner:x.current}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===r}var j=/\/+/g;function E(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function z(e,t,n,a,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case r:case i:s=!0}}if(s)return o=o(s=e),e=""===a?"."+E(s,0):a,Array.isArray(o)?(n="",null!=e&&(n=e.replace(j,"$&/")+"/"),z(o,t,n,"",function(e){return e})):null!=o&&(C(o)&&(o=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(j,"$&/")+"/")+e)),t.push(o)),1;if(s=0,a=""===a?".":a+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=a+E(l=e[c],c);s+=z(l,t,n,u,o)}else if(u=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof u)for(e=u.call(e),c=0;!(l=e.next()).done;)s+=z(l=l.value,t,n,u=a+E(l,c++),o);else if("object"===l)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function P(e,t,n){if(null==e)return e;var r=[],a=0;return z(e,r,"","",function(e){return t.call(n,e,a++)}),r}function _(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)},function(t){0===e._status&&(e._status=2,e._result=t)})}if(1===e._status)return e._result;throw e._result}var L={current:null};function T(){var e=L.current;if(null===e)throw Error(p(321));return e}var A={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:P,forEach:function(e,t,n){P(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error(p(143));return e}},t.Component=g,t.PureComponent=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,a){if(null===e||void 0===e)throw Error(p(267,e));var i=n({},e.props),o=e.key,l=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,s=x.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)w.call(t,u)&&!k.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=a;else if(1<u){c=Array(u);for(var d=0;d<u;d++)c[d]=arguments[d+2];i.children=c}return{$$typeof:r,type:e.type,key:o,ref:l,props:i,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:_}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return T().useCallback(e,t)},t.useContext=function(e,t){return T().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return T().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return T().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return T().useLayoutEffect(e,t)},t.useMemo=function(e,t){return T().useMemo(e,t)},t.useReducer=function(e,t,n){return T().useReducer(e,t,n)},t.useRef=function(e){return T().useRef(e)},t.useState=function(e){return T().useState(e)},t.version="17.0.1"}),p=n.cw(function(e,t){e.exports=f()}),h=n.cw(function(e,t){e.exports=d()}),m=n.cw(function(e,t){var n,r,a,i;if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}if("undefined"===typeof window||"function"!==typeof MessageChannel){var c=null,u=null,d=function(){if(null!==c)try{var e=t.unstable_now();c(!0,e),c=null}catch(n){throw setTimeout(d,0),n}};n=function(e){null!==c?setTimeout(n,0,e):(c=e,setTimeout(d,0))},r=function(e,t){u=setTimeout(e,t)},a=function(){clearTimeout(u)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var f=window.setTimeout,p=window.clearTimeout;if("undefined"!==typeof console){var h=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!==typeof h&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var m=!1,g=null,v=-1,y=5,b=0;t.unstable_shouldYield=function(){return t.unstable_now()>=b},i=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<e?Math.floor(1e3/e):5};var x=new MessageChannel,w=x.port2;x.port1.onmessage=function(){if(null!==g){var e=t.unstable_now();b=e+y;try{g(!0,e)?w.postMessage(null):(m=!1,g=null)}catch(n){throw w.postMessage(null),n}}else m=!1},n=function(e){g=e,m||(m=!0,w.postMessage(null))},r=function(e,n){v=f(function(){e(t.unstable_now())},n)},a=function(){p(v),v=-1}}function k(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,a=e[r];if(!(void 0!==a&&0<j(a,t)))break e;e[r]=t,e[n]=a,n=r}}function S(e){return void 0===(e=e[0])?null:e}function C(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length;r<a;){var i=2*(r+1)-1,o=e[i],l=i+1,s=e[l];if(void 0!==o&&0>j(o,n))void 0!==s&&0>j(s,o)?(e[r]=s,e[l]=n,r=l):(e[r]=o,e[i]=n,r=i);else{if(!(void 0!==s&&0>j(s,n)))break e;e[r]=s,e[l]=n,r=l}}}return t}return null}function j(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var E=[],z=[],P=1,_=null,L=3,T=!1,A=!1,O=!1;function M(e){for(var t=S(z);null!==t;){if(null===t.callback)C(z);else{if(!(t.startTime<=e))break;C(z),t.sortIndex=t.expirationTime,k(E,t)}t=S(z)}}function N(e){if(O=!1,M(e),!A)if(null!==S(E))A=!0,n(I);else{var t=S(z);null!==t&&r(N,t.startTime-e)}}function I(e,n){A=!1,O&&(O=!1,a()),T=!0;var i=L;try{for(M(n),_=S(E);null!==_&&(!(_.expirationTime>n)||e&&!t.unstable_shouldYield());){var o=_.callback;if("function"===typeof o){_.callback=null,L=_.priorityLevel;var l=o(_.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?_.callback=l:_===S(E)&&C(E),M(n)}else C(E);_=S(E)}if(null!==_)var s=!0;else{var c=S(z);null!==c&&r(N,c.startTime-n),s=!1}return s}finally{_=null,L=i,T=!1}}var R=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){A||T||(A=!0,n(I))},t.unstable_getCurrentPriorityLevel=function(){return L},t.unstable_getFirstCallbackNode=function(){return S(E)},t.unstable_next=function(e){switch(L){case 1:case 2:case 3:var t=3;break;default:t=L}var n=L;L=t;try{return e()}finally{L=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=R,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=L;L=e;try{return t()}finally{L=n}},t.unstable_scheduleCallback=function(e,i,o){var l=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?l+o:l:o=l,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:P++,callback:i,priorityLevel:e,startTime:o,expirationTime:s=o+s,sortIndex:-1},o>l?(e.sortIndex=o,k(z,e),null===S(E)&&e===S(z)&&(O?a():O=!0,r(N,o-l))):(e.sortIndex=s,k(E,e),A||T||(A=!0,n(I))),e},t.unstable_wrapCallback=function(e){var t=L;return function(){var n=L;L=t;try{return e.apply(this,arguments)}finally{L=n}}}}),g=n.cw(function(e,t){e.exports=m()}),v=n.cw(function(e,t){const r=n.p+"static/media/life.e863cd1284440629a324.png";e.exports=r});p(),o();s();var y=n(324),b=n.n(y);const x=function(e){function t(e,r,s,c,f){for(var p,h,m,g,x,k=0,S=0,C=0,j=0,E=0,A=0,M=m=p=0,I=0,R=0,$=0,D=0,F=s.length,U=F-1,B="",V="",H="",W="";I<F;){if(h=s.charCodeAt(I),I===U&&0!==S+j+C+k&&(0!==S&&(h=47===S?10:47),j=C=k=0,F++,U++),0===S+j+C+k){if(I===U&&(0<R&&(B=B.replace(d,"")),0<B.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:B+=s.charAt(I)}h=59}switch(h){case 123:for(p=(B=B.trim()).charCodeAt(0),m=1,D=++I;I<F;){switch(h=s.charCodeAt(I)){case 123:m++;break;case 125:m--;break;case 47:switch(h=s.charCodeAt(I+1)){case 42:case 47:e:{for(M=I+1;M<U;++M)switch(s.charCodeAt(M)){case 47:if(42===h&&42===s.charCodeAt(M-1)&&I+2!==M){I=M+1;break e}break;case 10:if(47===h){I=M+1;break e}}I=M}}break;case 91:h++;case 40:h++;case 34:case 39:for(;I++<U&&s.charCodeAt(I)!==h;);}if(0===m)break;I++}if(m=s.substring(D,I),0===p&&(p=(B=B.replace(u,"").trim()).charCodeAt(0)),64===p){switch(0<R&&(B=B.replace(d,"")),h=B.charCodeAt(1)){case 100:case 109:case 115:case 45:R=r;break;default:R=T}if(D=(m=t(r,R,m,h,f+1)).length,0<O&&(x=l(3,m,R=n(T,B,$),r,P,z,D,h,f,c),B=R.join(""),void 0!==x&&0===(D=(m=x.trim()).length)&&(h=0,m="")),0<D)switch(h){case 115:B=B.replace(w,o);case 100:case 109:case 45:m=B+"{"+m+"}";break;case 107:m=(B=B.replace(v,"$1 $2"))+"{"+m+"}",m=1===L||2===L&&i("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=B+m,112===c&&(V+=m,m="")}else m=""}else m=t(r,n(r,B,$),m,c,f+1);H+=m,m=$=R=M=p=0,B="",h=s.charCodeAt(++I);break;case 125:case 59:if(1<(D=(B=(0<R?B.replace(d,""):B).trim()).length))switch(0===M&&(p=B.charCodeAt(0),45===p||96<p&&123>p)&&(D=(B=B.replace(" ",":")).length),0<O&&void 0!==(x=l(1,B,r,e,P,z,V.length,c,f,c))&&0===(D=(B=x.trim()).length)&&(B="\0\0"),p=B.charCodeAt(0),h=B.charCodeAt(1),p){case 0:break;case 64:if(105===h||99===h){W+=B+s.charAt(I);break}default:58!==B.charCodeAt(D-1)&&(V+=a(B,p,h,B.charCodeAt(2)))}$=R=M=p=0,B="",h=s.charCodeAt(++I)}}switch(h){case 13:case 10:47===S?S=0:0===1+p&&107!==c&&0<B.length&&(R=1,B+="\0"),0<O*N&&l(0,B,r,e,P,z,V.length,c,f,c),z=1,P++;break;case 59:case 125:if(0===S+j+C+k){z++;break}default:switch(z++,g=s.charAt(I),h){case 9:case 32:if(0===j+k+S)switch(E){case 44:case 58:case 9:case 32:g="";break;default:32!==h&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===j+S+k&&(R=$=1,g="\f"+g);break;case 108:if(0===j+S+k+_&&0<M)switch(I-M){case 2:112===E&&58===s.charCodeAt(I-3)&&(_=E);case 8:111===A&&(_=A)}break;case 58:0===j+S+k&&(M=I);break;case 44:0===S+C+j+k&&(R=1,g+="\r");break;case 34:case 39:0===S&&(j=j===h?0:0===j?h:j);break;case 91:0===j+S+C&&k++;break;case 93:0===j+S+C&&k--;break;case 41:0===j+S+k&&C--;break;case 40:if(0===j+S+k){if(0===p)if(2*E+3*A===533);else p=1;C++}break;case 64:0===S+C+j+k+M+m&&(m=1);break;case 42:case 47:if(!(0<j+k+C))switch(S){case 0:switch(2*h+3*s.charCodeAt(I+1)){case 235:S=47;break;case 220:D=I,S=42}break;case 42:47===h&&42===E&&D+2!==I&&(33===s.charCodeAt(D+2)&&(V+=s.substring(D,I+1)),g="",S=0)}}0===S&&(B+=g)}A=E,E=h,I++}if(0<(D=V.length)){if(R=r,0<O&&(void 0!==(x=l(2,V,R,e,P,z,D,c,f,c))&&0===(V=x).length))return W+V+H;if(V=R.join(",")+"{"+V+"}",0!==L*_){switch(2!==L||i(V,2)||(_=0),_){case 111:V=V.replace(b,":-moz-$1")+V;break;case 112:V=V.replace(y,"::-webkit-input-$1")+V.replace(y,"::-moz-$1")+V.replace(y,":-ms-input-$1")+V}_=0}}return W+V+H}function n(e,t,n){var a=t.trim().split(m);t=a;var i=a.length,o=e.length;switch(o){case 0:case 1:var l=0;for(e=0===o?"":e[0]+" ";l<i;++l)t[l]=r(e,t[l],n).trim();break;default:var s=l=0;for(t=[];l<i;++l)for(var c=0;c<o;++c)t[s++]=r(e[c]+" ",a[l],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function a(e,t,n,r){var o=e+";",l=2*t+3*n+4*r;if(944===l){e=o.indexOf(":",9)+1;var s=o.substring(e,o.length-1).trim();return s=o.substring(0,e).trim()+s+";",1===L||2===L&&i(s,1)?"-webkit-"+s+s:s}if(0===L||2===L&&!i(o,1))return o;switch(l){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(E,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(s=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+s+o;case 1005:return p.test(o)?o.replace(f,":-webkit-")+o.replace(f,":-moz-")+o:o;case 1e3:switch(t=(s=o.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(t)){case 226:s=o.replace(x,"tb");break;case 232:s=o.replace(x,"tb-rl");break;case 220:s=o.replace(x,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+s+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,l=(s=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(111>s.charCodeAt(8))break;case 115:o=o.replace(s,"-webkit-"+s)+";"+o;break;case 207:case 102:o=o.replace(s,"-webkit-"+(102<l?"inline-":"")+"box")+";"+o.replace(s,"-webkit-"+s)+";"+o.replace(s,"-ms-"+s+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return s=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+s+"-ms-flex-"+s+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(S,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(S,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===j.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?a(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):o.replace(s,"-webkit-"+s)+o.replace(s,"-moz-"+s.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===n+r&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+o}return o}function i(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),M(2!==t?r:r.replace(C,"$1"),n,t)}function o(e,t){var n=a(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(k," or ($1)").substring(4):"("+t+")"}function l(e,t,n,r,a,i,o,l,s,u){for(var d,f=0,p=t;f<O;++f)switch(d=A[f].call(c,e,p,n,r,a,i,o,l,s,u)){case void 0:case!1:case!0:case null:break;default:p=d}if(p!==t)return p}function s(e){return void 0!==(e=e.prefix)&&(M=null,e?"function"!==typeof e?L=1:(L=2,M=e):L=0),s}function c(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),r=[r],0<O){var a=l(-1,n,r,r,P,z,0,0,0,0);void 0!==a&&"string"===typeof a&&(n=a)}var i=t(T,r,n,0,0);return 0<O&&(void 0!==(a=l(-2,i,r,r,P,z,i.length,0,0,0))&&(i=a)),_=0,z=P=1,i}var u=/^\0+/g,d=/[\0\r\f]/g,f=/: */g,p=/zoo|gra/,h=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,b=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,S=/-self|flex-/g,C=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,E=/([^-])(image-set\()/,z=1,P=1,_=0,L=1,T=[],A=[],O=0,M=null,N=0;return c.use=function e(t){switch(t){case void 0:case null:O=A.length=0;break;default:if("function"===typeof t)A[O++]=t;else if("object"===typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else N=0|!!t}return e},c.set=s,void 0!==e&&s(e),c};const w={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};const k=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}};var S=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;const C=k(function(e){return S.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91});function j(){return j.c||(j.c=n.n(t()))}function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}t();var z=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},P=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,l().typeOf)(e)},_=Object.freeze([]),L=Object.freeze({});function T(e){return"function"==typeof e}function A(e){return e.displayName||e.name||"Component"}function O(e){return e&&"string"==typeof e.styledComponentId}var M="data-styled",N="undefined"!=typeof window&&"HTMLElement"in window,I=Boolean("boolean"==typeof SC_DISABLE_SPEEDY&&SC_DISABLE_SPEEDY),R={};function $(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var D=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)(a<<=1)<0&&$(16,""+e);this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),l=0,s=t.length;l<s;l++)this.tag.insertRule(o,t[l])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),F=new Map,U=new Map,B=1,V=function(e){if(F.has(e))return F.get(e);for(;U.has(B);)B++;var t=B++;return F.set(e,t),U.set(t,e),t},H=function(e){return U.get(e)},W=function(e,t){F.set(e,t),U.set(t,e)},q="style["+M+'][data-styled-version="5.2.1"]',Q=new RegExp("^"+M+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Y=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},G=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],a=0,i=n.length;a<i;a++){var o=n[a].trim();if(o){var l=o.match(Q);if(l){var s=0|parseInt(l[1],10),c=l[2];0!==s&&(W(c,s),Y(e,c,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(o)}}},K=function(){return n.nc},X=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(M))return r}}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(M,"active"),r.setAttribute("data-styled-version","5.2.1");var o=K();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},Z=function(){function e(e){var t=this.element=X(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}$(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),J=function(){function e(e){var t=this.element=X(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),ee=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),te=N,ne={isServer:!N,useCSSOMInjection:!I},re=function(){function e(e,t,n){void 0===e&&(e=L),void 0===t&&(t={}),this.options=E({},ne,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&N&&te&&(te=!1,function(e){for(var t=document.querySelectorAll(q),n=0,r=t.length;n<r;n++){var a=t[n];a&&"active"!==a.getAttribute(M)&&(G(e,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}e.registerId=function(e){return V(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(E({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,a=t.target,e=n?new ee(a):r?new Z(a):new J(a),new D(e)));var e,t,n,r,a},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(V(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(V(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(V(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=0;a<n;a++){var i=H(a);if(void 0!==i){var o=e.names.get(i),l=t.getGroup(a);if(void 0!==o&&0!==l.length){var s=M+".g"+a+'[id="'+i+'"]',c="";void 0!==o&&o.forEach(function(e){e.length>0&&(c+=e+",")}),r+=""+l+s+'{content:"'+c+'"}/*!sc*/\n'}}}return r}(this)},e}(),ae=/(a)(d)/gi,ie=function(e){return String.fromCharCode(e+(e>25?39:97))};function oe(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=ie(t%52)+n;return(ie(t%52)+n).replace(ae,"$1-$2")}var le=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},se=function(e){return le(5381,e)};function ce(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(T(n)&&!O(n))return!1}return!0}var ue=se("5.2.1"),de=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&ce(e),this.componentId=t,this.baseHash=le(ue,t),this.baseStyle=n,re.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))a.push(this.staticRulesId);else{var i=_e(this.rules,e,t,n).join(""),o=oe(le(this.baseHash,i.length)>>>0);if(!t.hasNameForId(r,o)){var l=n(i,"."+o,void 0,r);t.insertRules(r,o,l)}a.push(o),this.staticRulesId=o}else{for(var s=this.rules.length,c=le(this.baseHash,n.hash),u="",d=0;d<s;d++){var f=this.rules[d];if("string"==typeof f)u+=f;else if(f){var p=_e(f,e,t,n),h=Array.isArray(p)?p.join(""):p;c=le(c,h+d),u+=h}}if(u){var m=oe(c>>>0);if(!t.hasNameForId(r,m)){var g=n(u,"."+m,void 0,r);t.insertRules(r,m,g)}a.push(m)}}return a.join(" ")},e}(),fe=/^\s*\/\/.*$/gm,pe=[":","[",".","#"];function he(e){var t,n,r,a,i=void 0===e?L:e,o=i.options,l=void 0===o?L:o,s=i.plugins,c=void 0===s?_:s,u=new x(l),d=[],f=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,a,i,o,l,s,c,u,d){switch(n){case 1:if(0===u&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===c)return r+"/*|*/";break;case 3:switch(c){case 102:case 112:return e(a[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}(function(e){d.push(e)}),p=function(e,r,i){return 0===r&&pe.includes(i[n.length])||i.match(a)?e:"."+t};function h(e,i,o,l){void 0===l&&(l="&");var s=e.replace(fe,""),c=i&&o?o+" "+i+" { "+s+" }":s;return t=l,n=i,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),u(o||!i?"":i,c)}return u.use([].concat(c,[function(e,t,a){2===e&&a.length&&a[0].lastIndexOf(n)>0&&(a[0]=a[0].replace(r,p))},f,function(e){if(-2===e){var t=d;return d=[],t}}])),h.hash=c.length?c.reduce(function(e,t){return t.name||$(15),le(e,t.name)},5381).toString():"",h}var me=f().createContext(),ge=(me.Consumer,f().createContext()),ve=(ge.Consumer,new re),ye=he();function be(){return(0,f().useContext)(me)||ve}function xe(){return(0,f().useContext)(ge)||ye}function we(e){var t=(0,f().useState)(e.stylisPlugins),n=t[0],r=t[1],a=be(),i=(0,f().useMemo)(function(){var t=a;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target]),o=(0,f().useMemo)(function(){return he({options:{prefix:!e.disableVendorPrefixes},plugins:n})},[e.disableVendorPrefixes,n]);return(0,f().useEffect)(function(){b()(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]),f().createElement(me.Provider,{value:i},f().createElement(ge.Provider,{value:o},e.children))}var ke=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=ye);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return $(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=ye),this.name+e.hash},e}(),Se=/([A-Z])/,Ce=/([A-Z])/g,je=/^ms-/,Ee=function(e){return"-"+e.toLowerCase()};function ze(e){return Se.test(e)?e.replace(Ce,Ee).replace(je,"-ms-"):e}var Pe=function(e){return null==e||!1===e||""===e};function _e(e,t,n,r){if(Array.isArray(e)){for(var a,i=[],o=0,l=e.length;o<l;o+=1)""!==(a=_e(e[o],t,n,r))&&(Array.isArray(a)?i.push.apply(i,a):i.push(a));return i}return Pe(e)?"":O(e)?"."+e.styledComponentId:T(e)?"function"!=typeof(s=e)||s.prototype&&s.prototype.isReactComponent||!t?e:_e(e(t),t,n,r):e instanceof ke?n?(e.inject(n,r),e.getName(r)):e:P(e)?function e(t,n){var r,a,i=[];for(var o in t)t.hasOwnProperty(o)&&!Pe(t[o])&&(P(t[o])?i.push.apply(i,e(t[o],o)):T(t[o])?i.push(ze(o)+":",t[o],";"):i.push(ze(o)+": "+(r=o,(null==(a=t[o])||"boolean"==typeof a||""===a?"":"number"!=typeof a||0===a||r in w?String(a).trim():a+"px")+";")));return n?[n+" {"].concat(i,["}"]):i}(e):e.toString();var s}function Le(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return T(e)||P(e)?_e(z(_,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:_e(z(e,n))}new Set;var Te=function(e,t,n){return void 0===n&&(n=L),e.theme!==n.theme&&e.theme||t||n.theme},Ae=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Oe=/(^-|-$)/g;function Me(e){return e.replace(Ae,"-").replace(Oe,"")}var Ne=function(e){return oe(se(e)>>>0)};function Ie(e){return"string"==typeof e&&!0}var Re=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},$e=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function De(e,t,n){var r=e[n];Re(t)&&Re(r)?Fe(r,t):e[n]=t}function Fe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,i=n;a<i.length;a++){var o=i[a];if(Re(o))for(var l in o)$e(l)&&De(e,o[l],l)}return e}var Ue=f().createContext();Ue.Consumer;var Be={};function Ve(e,t,n){var r=O(e),a=!Ie(e),i=t.attrs,o=void 0===i?_:i,l=t.componentId,s=void 0===l?function(e,t){var n="string"!=typeof e?"sc":Me(e);Be[n]=(Be[n]||0)+1;var r=n+"-"+Ne("5.2.1"+n+Be[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):l,c=t.displayName,u=void 0===c?function(e){return Ie(e)?"styled."+e:"Styled("+A(e)+")"}(e):c,d=t.displayName&&t.componentId?Me(t.displayName)+"-"+t.componentId:t.componentId||s,p=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,h=t.shouldForwardProp;r&&e.shouldForwardProp&&(h=t.shouldForwardProp?function(n,r){return e.shouldForwardProp(n,r)&&t.shouldForwardProp(n,r)}:e.shouldForwardProp);var m,g=new de(n,d,r?e.componentStyle:void 0),v=g.isStatic&&0===o.length,y=function(e,t){return function(e,t,n,r){var a=e.attrs,i=e.componentStyle,o=e.defaultProps,l=e.foldedComponentIds,s=e.shouldForwardProp,c=e.styledComponentId,u=e.target,d=function(e,t,n){void 0===e&&(e=L);var r=E({},t,{theme:e}),a={};return n.forEach(function(e){var t,n,i,o=e;for(t in T(o)&&(o=o(r)),o)r[t]=a[t]="className"===t?(n=a[t],i=o[t],n&&i?n+" "+i:n||i):o[t]}),[r,a]}(Te(t,(0,f().useContext)(Ue),o)||L,t,a),p=d[0],h=d[1],m=function(e,t,n){var r=be(),a=xe();return t?e.generateAndInjectStyles(L,r,a):e.generateAndInjectStyles(n,r,a)}(i,r,p),g=n,v=h.$as||t.$as||h.as||t.as||u,y=Ie(v),b=h!==t?E({},t,{},h):t,x={};for(var w in b)"$"!==w[0]&&"as"!==w&&("forwardedAs"===w?x.as=b[w]:(s?s(w,C):!y||C(w))&&(x[w]=b[w]));return t.style&&h.style!==t.style&&(x.style=E({},t.style,{},h.style)),x.className=Array.prototype.concat(l,c,m!==c?m:null,t.className,h.className).filter(Boolean).join(" "),x.ref=g,(0,f().createElement)(v,x)}(m,e,t,v)};return y.displayName=u,(m=f().forwardRef(y)).attrs=p,m.componentStyle=g,m.displayName=u,m.shouldForwardProp=h,m.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):_,m.styledComponentId=d,m.target=r?e.target:e,m.withComponent=function(e){var r=t.componentId,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["componentId"]),i=r&&r+"-"+(Ie(e)?e:Me(A(e)));return Ve(e,E({},a,{attrs:p,componentId:i}),n)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=r?Fe({},e.defaultProps,t):t}}),m.toString=function(){return"."+m.styledComponentId},a&&j()()(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var He=function(e){return function e(t,n,r){if(void 0===r&&(r=L),!(0,l().isValidElementType)(n))return $(1,String(n));var a=function(){return t(n,r,Le.apply(void 0,arguments))};return a.withConfig=function(a){return e(t,n,E({},r,{},a))},a.attrs=function(a){return e(t,n,E({},r,{attrs:Array.prototype.concat(r.attrs,a).filter(Boolean)}))},a}(Ve,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach(function(e){He[e]=He(e)});var We=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ce(e),re.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var a=r(_e(this.rules,t,n,r).join(""),""),i=this.componentId+e;n.insertRules(i,i,a)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&re.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function qe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Le.apply(void 0,[e].concat(n)).join(""),i=Ne(a);return new ke(i,a)}!function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=K();return"<style "+[n&&'nonce="'+n+'"',M+'="true"','data-styled-version="5.2.1"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?$(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return $(2);var n=((t={})[M]="",t["data-styled-version"]="5.2.1",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),r=K();return r&&(n.nonce=r),[f().createElement("style",E({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new re({isServer:!0}),this.sealed=!1}var t=e.prototype;t.collectStyles=function(e){return this.sealed?$(2):f().createElement(we,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){return $(3)}}();const Qe=He,Ye=(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Le.apply(void 0,[e].concat(n)),i="sc-global-"+Ne(JSON.stringify(a)),o=new We(a,i);function l(e){var t=be(),n=xe(),r=(0,f().useContext)(Ue),a=(0,f().useRef)(t.allocateGSInstance(i)).current;return(0,f().useLayoutEffect)(function(){return s(a,e,t,r,n),function(){return o.removeStyles(a,t)}},[a,e,t,r,n]),null}function s(e,t,n,r,a){if(o.isStatic)o.renderStyles(e,R,n,a);else{var i=E({},t,{theme:Te(t,r,l.defaultProps)});o.renderStyles(e,i,n,a)}}return f().memo(l)})`
      *{
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Source Sans Pro', sans-serif;
        }
        html, body {
            background: #101522;
        }
    `,Ge=Qe.div`
        z-index: 1;
        width: 100%;
        max-width: 1300px;
        margin-right: auto;
        margin-left: auto;
        padding-right: 50px;
        padding-left: 50px;
        
        @media screen and (max-width: 991px) {
            padding-right: 30px;
            padding-left: 30px;
        }
        `,Ke=(Qe.button`
        border-radius: 4px;
        background: ${e=>{let{primary:t}=e;return t?"#4B59F7":"#0467FB"}};
        white-space: nowrap;
        padding: ${e=>{let{big:t}=e;return t?"12px 64px":"10px 20px"}};
        color: #fff;
        font-size: ${e=>{let{fontBig:t}=e;return t?"20px":"16px"}};
        outline: none;
        border: none;
        cursor: pointer;
        
        &:hover{
            transition: all 0.3s ease-out;
            background: #fff;
            background: ${e=>{let{primary:t}=e;return t?"#0467FB":"#4B58F7"}};
        }
        @media screen and (max-width: 960px){
            width: 100%;
        }
        `,Ye);function Xe(e,t){return Xe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Xe(e,t)}function Ze(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Xe(e,t)}function Je(){return Je=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Je.apply(null,arguments)}function et(e){return"/"===e.charAt(0)}function tt(e,t){for(var n=t,r=n+1,a=e.length;r<a;n+=1,r+=1)e[n]=e[r];e.pop()}const nt=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],a=t&&t.split("/")||[],i=e&&et(e),o=t&&et(t),l=i||o;if(e&&et(e)?a=r:r.length&&(a.pop(),a=a.concat(r)),!a.length)return"/";if(a.length){var s=a[a.length-1];n="."===s||".."===s||""===s}else n=!1;for(var c=0,u=a.length;u>=0;u--){var d=a[u];"."===d?tt(a,u):".."===d?(tt(a,u),c++):c&&(tt(a,u),c--)}if(!l)for(;c--;c)a.unshift("..");!l||""===a[0]||a[0]&&et(a[0])||a.unshift("");var f=a.join("/");return n&&"/"!==f.substr(-1)&&(f+="/"),f};var rt="Invariant failed";const at=function(e,t){if(!e)throw new Error(rt)};function it(e){return"/"===e.charAt(0)?e:"/"+e}function ot(e){return"/"===e.charAt(0)?e.substr(1):e}function lt(e,t){return function(e,t){return 0===e.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(e.charAt(t.length))}(e,t)?e.substr(t.length):e}function st(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function ct(e){var t=e.pathname,n=e.search,r=e.hash,a=t||"/";return n&&"?"!==n&&(a+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(a+="#"===r.charAt(0)?r:"#"+r),a}function ut(e,t,n,r){var a;"string"===typeof e?(a=function(e){var t=e||"/",n="",r="",a=t.indexOf("#");-1!==a&&(r=t.substr(a),t=t.substr(0,a));var i=t.indexOf("?");return-1!==i&&(n=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e),a.state=t):(void 0===(a=Je({},e)).pathname&&(a.pathname=""),a.search?"?"!==a.search.charAt(0)&&(a.search="?"+a.search):a.search="",a.hash?"#"!==a.hash.charAt(0)&&(a.hash="#"+a.hash):a.hash="",void 0!==t&&void 0===a.state&&(a.state=t));try{a.pathname=decodeURI(a.pathname)}catch(i){throw i instanceof URIError?new URIError('Pathname "'+a.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):i}return n&&(a.key=n),r?a.pathname?"/"!==a.pathname.charAt(0)&&(a.pathname=nt(a.pathname,r.pathname)):a.pathname=r.pathname:a.pathname||(a.pathname="/"),a}function dt(){var e=null;var t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,a){if(null!=e){var i="function"===typeof e?e(t,n):e;"string"===typeof i?"function"===typeof r?r(i,a):a(!0):a(!1!==i)}else a(!0)},appendListener:function(e){var n=!0;function r(){n&&e.apply(void 0,arguments)}return t.push(r),function(){n=!1,t=t.filter(function(e){return e!==r})}},notifyListeners:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach(function(e){return e.apply(void 0,n)})}}}var ft=!("undefined"===typeof window||!window.document||!window.document.createElement);function pt(e,t){t(window.confirm(e))}var ht="popstate",mt="hashchange";function gt(){try{return window.history.state||{}}catch(e){return{}}}function vt(e){void 0===e&&{},ft||at(!1);var t=window.history,n=function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history}(),r=!(-1===window.navigator.userAgent.indexOf("Trident")),a=e,i=a.forceRefresh,o=void 0!==i&&i,l=a.getUserConfirmation,s=void 0===l?pt:l,c=a.keyLength,u=void 0===c?6:c,d=e.basename?st(it(e.basename)):"";function f(e){var t=e||{},n=t.key,r=t.state,a=window.location,i=a.pathname+a.search+a.hash;return d&&lt(i,d),ut(i,r,n)}function p(){return Math.random().toString(36).substr(2,u)}var h=dt();function m(e){Je(z,e),z.length=t.length,h.notifyListeners(z.location,z.action)}function g(e){(function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")})(e)||b(f(e.state))}function v(){b(f(gt()))}var y=!1;function b(e){if(y)m();else{h.confirmTransitionTo(e,"POP",s,function(t){t?m({action:"POP",location:e}):function(e){var t=z.location,n=w.indexOf(t.key);-1===n&&0;var r=w.indexOf(e.key);-1===r&&0;var a=n-r;a&&S(a)}(e)})}}var x=f(gt()),w=[x.key];function k(e){return d+ct(e)}function S(e){t.go(e)}var C=0;function j(e){1===(C+=e)&&1===e?(window.addEventListener(ht,g),r&&window.addEventListener(mt,v)):0===C&&(window.removeEventListener(ht,g),r&&window.removeEventListener(mt,v))}var E=!1;var z={length:t.length,action:"POP",location:x,createHref:k,push:function(e,r){var a="PUSH",i=ut(e,r,p(),z.location);h.confirmTransitionTo(i,a,s,function(e){if(e){var r=k(i),l=i.key,s=i.state;if(n)if(t.pushState({key:l,state:s},null,r),o)window.location.href=r;else{var c=w.indexOf(z.location.key),u=w.slice(0,c+1);u.push(i.key),m({action:a,location:i})}else window.location.href=r}})},replace:function(e,r){var a="REPLACE",i=ut(e,r,p(),z.location);h.confirmTransitionTo(i,a,s,function(e){if(e){var r=k(i),l=i.key,s=i.state;if(n)if(t.replaceState({key:l,state:s},null,r),o)window.location.replace(r);else{var c=w.indexOf(z.location.key);-1!==c&&(w[c]=i.key),m({action:a,location:i})}else window.location.replace(r)}})},go:S,goBack:function(){S(-1)},goForward:function(){S(1)},block:function(e){void 0===e&&!1;var t=h.setPrompt(e);return E||(j(1),!0),function(){return E&&j(-1),t()}},listen:function(e){var t=h.appendListener(e);return j(1),function(){j(-1),t()}}};return z}var yt="hashchange",bt={hashbang:{encodePath:function(e){return"!"===e.charAt(0)?e:"!/"+ot(e)},decodePath:function(e){return"!"===e.charAt(0)?e.substr(1):e}},noslash:{encodePath:ot,decodePath:it},slash:{encodePath:it,decodePath:it}};function xt(e){var t=e.indexOf("#");return-1===t?e:e.slice(0,t)}function wt(){var e=window.location.href,t=e.indexOf("#");return-1===t?"":e.substring(t+1)}function kt(e){window.location.replace(xt(window.location.href)+"#"+e)}function St(e){void 0===e&&(e={}),ft||at(!1);var t=window.history,n=(window.navigator.userAgent.indexOf("Firefox"),e),r=n.getUserConfirmation,a=void 0===r?pt:r,i=n.hashType,o=void 0===i?"slash":i,l=e.basename?st(it(e.basename)):"",s=bt[o],c=s.encodePath,u=s.decodePath;function d(){var e=u(wt());return l&&(e=lt(e,l)),ut(e)}var f=dt();function p(e){Je(j,e),j.length=t.length,f.notifyListeners(j.location,j.action)}var h=!1,m=null;function g(){var e,t,n=wt(),r=c(n);if(n!==r)kt(r);else{var i=d(),o=j.location;if(!h&&(t=i,(e=o).pathname===t.pathname&&e.search===t.search&&e.hash===t.hash))return;if(m===ct(i))return;m=null,function(e){if(h)h=!1,p();else{var t="POP";f.confirmTransitionTo(e,t,a,function(n){n?p({action:t,location:e}):function(e){var t=j.location,n=x.lastIndexOf(ct(t));-1===n&&(n=0);var r=x.lastIndexOf(ct(e));-1===r&&(r=0);var a=n-r;a&&(h=!0,w(a))}(e)})}}(i)}}var v=wt(),y=c(v);v!==y&&kt(y);var b=d(),x=[ct(b)];function w(e){t.go(e)}var k=0;function S(e){1===(k+=e)&&1===e?window.addEventListener(yt,g):0===k&&window.removeEventListener(yt,g)}var C=!1;var j={length:t.length,action:"POP",location:b,createHref:function(e){var t=document.querySelector("base"),n="";return t&&t.getAttribute("href")&&(n=xt(window.location.href)),n+"#"+c(l+ct(e))},push:function(e,t){var n="PUSH",r=ut(e,void 0,void 0,j.location);f.confirmTransitionTo(r,n,a,function(e){if(e){var t=ct(r),a=c(l+t);if(wt()!==a){m=t,function(e){window.location.hash=e}(a);var i=x.lastIndexOf(ct(j.location)),o=x.slice(0,i+1);o.push(t),x=o,p({action:n,location:r})}else p()}})},replace:function(e,t){var n="REPLACE",r=ut(e,void 0,void 0,j.location);f.confirmTransitionTo(r,n,a,function(e){if(e){var t=ct(r),a=c(l+t);wt()!==a&&(m=t,kt(a));var i=x.indexOf(ct(j.location));-1!==i&&(x[i]=t),p({action:n,location:r})}})},go:w,goBack:function(){w(-1)},goForward:function(){w(1)},block:function(e){void 0===e&&(e=!1);var t=f.setPrompt(e);return C||(S(1),C=!0),function(){return C&&(C=!1,S(-1)),t()}},listen:function(e){var t=f.appendListener(e);return S(1),function(){S(-1),t()}}};return j}function Ct(e,t,n){return Math.min(Math.max(e,t),n)}var jt=n(173),Et=n.n(jt),zt=1073741823,Pt="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof globalThis?globalThis:{};const _t=f().createContext||function(e,t){var n,r,a="__create-react-context-"+function(){var e="__global_unique_id__";return Pt[e]=(Pt[e]||0)+1}()+"__",i=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).emitter=function(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter(function(t){return t!==e})},get:function(){return e},set:function(n,r){e=n,t.forEach(function(t){return t(e,r)})}}}(t.props.value),t}Ze(n,e);var r=n.prototype;return r.getChildContext=function(){var e;return(e={})[a]=this.emitter,e},r.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n,r=this.props.value,a=e.value;((i=r)===(o=a)?0!==i||1/i===1/o:i!==i&&o!==o)?n=0:(n="function"===typeof t?t(r,a):zt,0!==(n|=0)&&this.emitter.set(e.value,n))}var i,o},r.render=function(){return this.props.children},n}(f().Component);i.childContextTypes=((n={})[a]=Et().object.isRequired,n);var o=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).state={value:e.getValue()},e.onUpdate=function(t,n){0!==((0|e.observedBits)&n)&&e.setState({value:e.getValue()})},e}Ze(n,t);var r=n.prototype;return r.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?zt:t},r.componentDidMount=function(){this.context[a]&&this.context[a].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?zt:e},r.componentWillUnmount=function(){this.context[a]&&this.context[a].off(this.onUpdate)},r.getValue=function(){return this.context[a]?this.context[a].get():e},r.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(f().Component);return o.contextTypes=((r={})[a]=Et().object,r),{Provider:i,Consumer:o}};var Lt=n(340),Tt=n.n(Lt);function At(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}u();var Ot=function(e){var t=_t();return t.displayName=e,t}("Router-History"),Mt=function(e){var t=_t();return t.displayName=e,t}("Router"),Nt=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={location:t.history.location},n._isMounted=!1,n._pendingLocation=null,t.staticContext||(n.unlisten=t.history.listen(function(e){n._isMounted?n.setState({location:e}):n._pendingLocation=e})),n}Ze(t,e),t.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&this.unlisten()},n.render=function(){return f().createElement(Mt.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},f().createElement(Ot.Provider,{children:this.props.children||null,value:this.props.history}))},t}(f().Component);f().Component;f().Component;var It={},Rt=0;function $t(e,t){void 0===t&&(t={}),("string"===typeof t||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,a=n.exact,i=void 0!==a&&a,o=n.strict,l=void 0!==o&&o,s=n.sensitive,c=void 0!==s&&s;return[].concat(r).reduce(function(t,n){if(!n&&""!==n)return null;if(t)return t;var r=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=It[n]||(It[n]={});if(r[e])return r[e];var a=[],i={regexp:Tt()(e,a,t),keys:a};return Rt<1e4&&(r[e]=i,Rt++),i}(n,{end:i,strict:l,sensitive:c}),a=r.regexp,o=r.keys,s=a.exec(e);if(!s)return null;var u=s[0],d=s.slice(1),f=e===u;return i&&!f?null:{path:n,url:"/"===n&&""===u?"/":u,isExact:f,params:o.reduce(function(e,t,n){return e[t.name]=d[n],e},{})}},null)}var Dt=function(e){function t(){return e.apply(this,arguments)||this}return Ze(t,e),t.prototype.render=function(){var e=this;return f().createElement(Mt.Consumer,null,function(t){t||at(!1);var n=e.props.location||t.location,r=Je({},t,{location:n,match:e.props.computedMatch?e.props.computedMatch:e.props.path?$t(n.pathname,e.props):t.match}),a=e.props,i=a.children,o=a.component,l=a.render;return Array.isArray(i)&&0===i.length&&(i=null),f().createElement(Mt.Provider,{value:r},r.match?i?"function"===typeof i?i(r):i:o?f().createElement(o,r):l?l(r):null:"function"===typeof i?i(r):null)})},t}(f().Component);function Ft(e){return"/"===e.charAt(0)?e:"/"+e}function Ut(e,t){if(!e)return t;var n=Ft(e);return 0!==t.pathname.indexOf(n)?t:Je({},t,{pathname:t.pathname.substr(n.length)})}function Bt(e){return"string"===typeof e?e:ct(e)}function Vt(e){return function(){at(!1)}}function Ht(){}f().Component;var Wt=function(e){function t(){return e.apply(this,arguments)||this}return Ze(t,e),t.prototype.render=function(){var e=this;return f().createElement(Mt.Consumer,null,function(t){t||at(!1);var n,r,a=e.props.location||t.location;return f().Children.forEach(e.props.children,function(e){if(null==r&&f().isValidElement(e)){n=e;var i=e.props.path||e.props.from;r=i?$t(a.pathname,Je({},e.props,{path:i})):t.match}}),r?f().cloneElement(n,{location:a,computedMatch:r}):null})},t}(f().Component);var qt=f().useContext;function Qt(){return qt(Mt).location}f().Component;var Yt=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).history=St(t.props),t}return Ze(t,e),t.prototype.render=function(){return f().createElement(Nt,{history:this.history,children:this.props.children})},t}(f().Component);var Gt=function(e,t){return"function"===typeof e?e(t):e},Kt=function(e,t){return"string"===typeof e?ut(e,null,null,t):e},Xt=function(e){return e},Zt=f().forwardRef;"undefined"===typeof Zt&&(Zt=Xt);var Jt=Zt(function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,i=At(e,["innerRef","navigate","onClick"]),o=i.target,l=Je({},i,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||o&&"_self"!==o||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return l.ref=Xt!==Zt&&t||n,f().createElement("a",l)});var en=Zt(function(e,t){var n=e.component,r=void 0===n?Jt:n,a=e.replace,i=e.to,o=e.innerRef,l=At(e,["component","replace","to","innerRef"]);return f().createElement(Mt.Consumer,null,function(e){e||at(!1);var n=e.history,s=Kt(Gt(i,e.location),e.location),c=s?n.createHref(s):"",u=Je({},l,{href:c,navigate:function(){var t=Gt(i,e.location);(a?n.replace:n.push)(t)}});return Xt!==Zt?u.ref=t||o:u.innerRef=o,f().createElement(r,u)})}),tn=function(e){return e},nn=f().forwardRef;"undefined"===typeof nn&&(nn=tn);var rn=nn(function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,a=e.activeClassName,i=void 0===a?"active":a,o=e.activeStyle,l=e.className,s=e.exact,c=e.isActive,u=e.location,d=e.sensitive,p=e.strict,h=e.style,m=e.to,g=e.innerRef,v=At(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return f().createElement(Mt.Consumer,null,function(e){e||at(!1);var n=u||e.location,a=Kt(Gt(m,n),n),y=a.pathname,b=y&&y.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),x=b?$t(n.pathname,{path:b,exact:s,sensitive:d,strict:p}):null,w=!!(c?c(x,n):x),k=w?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(function(e){return e}).join(" ")}(l,i):l,S=w?Je({},h,{},o):h,C=Je({"aria-current":w&&r||null,className:k,style:S,to:a},v);return tn!==nn?C.ref=t||g:C.innerRef=g,f().createElement(en,C)})}),an={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},on=f().createContext&&f().createContext(an),ln=function(){return ln=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},ln.apply(this,arguments)},sn=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};function cn(e){return e&&e.map(function(e,t){return f().createElement(e.tag,ln({key:t},e.attr),cn(e.child))})}function un(e){return function(t){return f().createElement(dn,ln({attr:ln({},e.attr)},t),cn(e.child))}}function dn(e){var t=function(t){var n,r=e.attr,a=e.size,i=e.title,o=sn(e,["attr","size","title"]),l=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),f().createElement("svg",ln({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,o,{className:n,style:ln(ln({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&f().createElement("title",null,i),e.children)};return void 0!==on?f().createElement(on.Consumer,null,function(e){return t(e)}):t(an)}function fn(e){return un({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm2 8H4v6h16v-6h-5v3H9v-3zm11-6H4v4h5V9h6v2h5V7zm-9 4v3h2v-3h-2zM9 3v2h6V3H9z"}}]}]})(e)}function pn(e){return un({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"}}]}]})(e)}function hn(e){return un({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{fillRule:"nonzero",d:"M12 7a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 1.5l1.323 2.68 2.957.43-2.14 2.085.505 2.946L12 17.25l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L12 10.5zM18 2v3l-1.363 1.138A9.935 9.935 0 0 0 13 5.049L13 2 18 2zm-7-.001v3.05a9.935 9.935 0 0 0-3.636 1.088L6 5V2l5-.001z"}}]}]})(e)}function mn(e){return un({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M5.33 3.271a3.5 3.5 0 0 1 4.254 4.963l10.709 10.71-1.414 1.414-10.71-10.71a3.502 3.502 0 0 1-4.962-4.255L5.444 7.63a1.5 1.5 0 1 0 2.121-2.121L5.329 3.27zm10.367 1.884l3.182-1.768 1.414 1.414-1.768 3.182-1.768.354-2.12 2.121-1.415-1.414 2.121-2.121.354-1.768zm-6.718 8.132l1.414 1.414-5.303 5.303a1 1 0 0 1-1.492-1.327l.078-.087 5.303-5.303z"}}]}]})(e)}function gn(e){return un({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M21 18H6a1 1 0 0 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16zM5 16.05c.162-.033.329-.05.5-.05H19V4H5v12.05zM16 9H8V7h8v2z"}}]}]})(e)}function vn(e){return un({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8zm-2 1h-5V4H5v16h14V9zM8 7h3v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"}}]}]})(e)}function yn(e){return un({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"}}]}]})(e)}const bn={lightBg:!1,primary:!0,imgStart:"",lightTopLine:!0,lightTextDesc:!0,buttonLabel:"Get Started",description:"I keep school networks, devices, and classroom tech running for students and staff at San Diego Unified. With a UCSD degree in Interaction Design and four years of front-end development, I bring a user-first mindset to IT: I fix the problem, then make sure people can actually use the fix. Now growing into systems administration and ed-tech implementation.",headline:"Fearless\nStrong \n Ready",lightText:!0,topLine:"IT & Network Support  |  UX + Front-End {}",img:e().A,alt:"Image",start:""},xn=(v().default,e().A,e().A,e().A,e().A,v().default,e().A,e().A,e().A,{title:"Keeping a middle school connected",lede:"Since 2020 I have been the on-site technology lead at DePortola Middle School (San Diego Unified). When a projector dies five minutes before class or a printer drops off the network, I am the person who gets it working again, and who makes sure it stays that way.",facts:[{label:"Role",value:"Network Support Media Technician"},{label:"Since",value:"August 2020"},{label:"Users",value:"Students, teachers & staff"},{label:"Scope",value:"Network, devices, AV/TV"}],sections:[{heading:"The challenge",text:"A school runs on technology that has to work every period of every day. Teachers need their microphones, projectors, printers, and computers ready the moment class starts, and the local area network behind them has to keep up with constant changes and additions."},{heading:"My approach",points:["Triage first: isolate whether a problem is hardware, software, or connection before touching anything, so fixes are fast and targeted.","Own the follow-up: track maintenance and service requests for network changes and additions through to completion.","Support the LAN: help coordinate the implementation and maintenance of the school site's local area network.","Keep AV/TV running: provide audiovisual and television support for classrooms and school events.","Know what we have: maintain the technology inventory so equipment is accounted for and ready to deploy."]},{heading:"Teaching, not just fixing",text:"The best fix is the one people do not need to call me for again. I provide training and technical assistance to staff so they can handle common issues confidently. My background in interaction design (UCSD) shapes how I explain technology: start from what the user is trying to do, not from the technical details."},{heading:"What I took from it",text:"Supporting a live school environment taught me to stay calm under time pressure, communicate clearly with non-technical users, and document what I do. These are the same skills I bring to systems administration and ed-tech implementation work."}]});function wn(e){return un({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function kn(e){return un({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function Sn(e){return un({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"title",attr:{},child:[]},{tag:"path",attr:{d:"M21.354 18.708c1.46 0 2.646 1.185 2.646 2.646C24 22.814 22.814 24 21.354 24s-2.646-1.186-2.646-2.646c0-1.458 1.185-2.646 2.646-2.646zM12 9.354c1.46 0 2.646 1.186 2.646 2.646S13.46 14.646 12 14.646 9.354 13.46 9.354 12 10.54 9.354 12 9.354zm9.354 0C22.814 9.354 24 10.54 24 12s-1.186 2.646-2.646 2.646S18.708 13.46 18.708 12s1.185-2.646 2.646-2.646zM12 0c1.46 0 2.646 1.185 2.646 2.646 0 1.46-1.186 2.646-2.646 2.646S9.354 4.106 9.354 2.646 10.54 0 12 0zM2.646 0c1.46 0 2.646 1.185 2.646 2.646 0 1.46-1.186 2.646-2.646 2.646S0 4.106 0 2.646 1.186 0 2.646 0zm18.708 0C22.814 0 24 1.185 24 2.646c0 1.46-1.186 2.646-2.646 2.646s-2.646-1.186-2.646-2.646S19.893 0 21.354 0z"}}]})(e)}const Cn=Qe.nav`
    background: rgba(16, 21, 34, 0.82);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid #2c3554;
    height: 80px;
    display: flex;
    justify-content: center;
    font-size: 1.1rem;
    position: sticky;
    top: 0;
    z-index: 999;
`,jn=Qe(Ge)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Ge}
`,En=Qe(en)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display:flex;
    align-items: center;
`,zn=Qe(Sn)`
 margin-right: 0.5rem;
 `,Pn=Qe.div`
    display: none;


    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`,_n=Qe.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        width: 100%;
        /* fill the space under the 80px bar; dvh tracks the mobile URL bar, vh is the fallback */
        height: calc(100vh - 80px);
        height: calc(100dvh - 80px);
        position: absolute;
        top: 80px;
        /*if clicked I want it to show = 0 if not clicked keep hidden = -100*/
        /* $open is a transient prop so it is not forwarded to the DOM */
        left: ${e=>{let{$open:t}=e;return t?0:"-100%"}};
        /* lets the open menu scroll on short phones so "View CV" is not clipped */
        overflow-y: auto;
        opacity: 1;
        transition: all 0.5s ease;
        background: rgba(16, 21, 34, 0.97);
    }
    `,Ln=Qe.li`
    height: 80px;

    @media screen and (max-width: 960px){
        width: 100%;
        height: auto;
    }
`,Tn=Qe(rn)`
    color: #b8c0cf;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 0.9rem;
    height: 100%;
    border-bottom: 3px solid transparent;
    transition: color 0.25s ease, border-color 0.25s ease;

    &:hover {
        color: #fff;
        border-bottom-color: #2c3554;
    }

    /* active-link indicator */
    &.active {
        color: #fff;
        font-weight: 700;
        border-bottom-color: #4b59f7;
    }

    @media screen and (max-width: 960px){
        justify-content: center;
        padding: 1.4rem;
        width: 100%;
        border-bottom: none;
        border-left: 3px solid transparent;

        &:hover {
            color: #fff;
            border-bottom: none;
        }
        &.active {
            border-bottom: none;
            border-left-color: #4b59f7;
            color: #8fa0ff;
        }
    }
    `,An=Qe.li`
    margin-left: 0.6rem;

    @media screen and (max-width: 960px) {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
        margin-left: 0;
    }
    `,On=Qe(en)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 10px 24px;
    border-radius: 999px;
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    background: #4b59f7;
    transition: background 0.25s ease, transform 0.25s ease;

    &:hover {
        background: #0467fb;
        transform: translateY(-2px);
    }
    `;h();const Mn=[{to:"/",label:"Home",exact:!0},{to:"/about",label:"About"},{to:"/photography",label:"Photography"},{to:"/projects",label:"Projects"},{to:"/casestudy",label:"Case Study"},{to:"/bucketlist",label:"Bucket List"}],Nn=()=>{const[e,t]=(0,f().useState)(!1),n=()=>t(!1);return(0,d().jsx)(d().Fragment,{children:(0,d().jsx)(on.Provider,{value:{color:"#fff"},children:(0,d().jsx)(Cn,{children:(0,d().jsxs)(jn,{children:[(0,d().jsxs)(En,{to:"/",onClick:n,children:[(0,d().jsx)(zn,{}),"PS"]}),(0,d().jsx)(Pn,{onClick:()=>t(!e),children:e?(0,d().jsx)(kn,{}):(0,d().jsx)(wn,{})}),(0,d().jsxs)(_n,{onClick:n,$open:e,children:[Mn.map(e=>{let{to:t,label:n,exact:r}=e;return(0,d().jsx)(Ln,{children:(0,d().jsx)(Tn,{to:t,exact:r,children:n})},t)}),(0,d().jsx)(An,{children:(0,d().jsx)(On,{to:"/cv",children:"View CV"})})]})]})})})})},In=Qe.div`
    color: #fff;
    padding: 170px 0 110px;
    /* keeps the photo's glow from causing sideways scroll on narrow screens */
    overflow: hidden;

    @media screen and (max-width: 1200px) {
        padding: 60px 0 80px;
    }
    background: ${e=>{let{lightBg:t}=e;return t?"#fff":"#101522"}};
    `,Rn=Qe.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 48px;
    flex-direction: ${e=>{let{imgStart:t}=e;return t?"row-reverse":"row"}};

    @media screen and (max-width: 1200px) {
        flex-direction: column-reverse;
        flex-wrap: nowrap;
    }
`,$n=Qe.div`
    padding-right: 15px;
    padding-left: 15px;
    /* text column gets the larger share so it stays the visual focus */
    flex: 0 1 600px;
    max-width: 600px;

    /* the photo column (second child) is narrower than the text */
    &:last-child {
        flex: 0 1 380px;
        max-width: 380px;
    }

    @media screen and (max-width: 1200px) {
        flex: none;
        width: 100%;
        max-width: 600px;
        display: flex;
        justify-content: center;

        &:last-child {
            flex: none;
            max-width: 600px;
        }
    }
    `,Dn=Qe.div`
    max-width: 600px;
    padding: 0;

    `,Fn=Qe.div`
    color: ${e=>{let{lightTopLine:t}=e;return t?"#c9d1ff":"#4b59F7"}};
    font-size: 14px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    margin-bottom: 16px;
    `,Un=Qe.h1`
    margin-bottom: 24px;
    font-size: 56px;
    line-height: 1.1;

    @media screen and (max-width: 768px) {
        font-size: 42px;
    }
    color: ${e=>{let{lightText:t}=e;return t?"#f7f8fa":"#1c2237"}};
    `,Bn=Qe.p`
    max-width: 540px;
    margin-bottom: 0;
    font-size: 19px;
    line-height: 1.6;
    color: ${e=>{let{lightTextDesc:t}=e;return t?"#a9b3c1":"#1c2237"}};
    `,Vn=qe`
    from { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
    50%  { transform: translate(-50%, -50%) rotate(180deg) scale(1.08); }
    to   { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
`,Hn=Qe.div`
    position: relative;
    isolation: isolate;
    /* shrink to the photo so the glow is sized and centred on the photo itself */
    width: fit-content;
    max-width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    /* slowly flowing light behind the photo */
    &::before {
        content: '';
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        width: 120%;
        aspect-ratio: 1;
        border-radius: 50%;
        background: conic-gradient(from 0deg, #4b59f7, #4ade80, #0467fb, #8fa0ff, #4b59f7);
        /* soft edges come from a radial mask instead of filter: blur, which is costly to repaint every frame */
        -webkit-mask-image: radial-gradient(circle, #000 25%, transparent 68%);
        mask-image: radial-gradient(circle, #000 25%, transparent 68%);
        opacity: 0.6;
        will-change: transform;
        transform: translate(-50%, -50%);
        animation: ${Vn} 16s linear infinite;
        pointer-events: none;
    }

    @media (prefers-reduced-motion: reduce) {
        &::before {
            animation: none;
        }
    }
    `,Wn=Qe.img`
    padding-right: 0;
    border: 0;
    vertical-align: middle;
    display: inline-block;
    border-radius: 32px;
    /* the SVG's own size is small, so set the height explicitly: 400px max on desktop, 300px on phones */
    height: min(400px, 60vh);
    max-width: 100%;
    aspect-ratio: 260 / 321;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        height: min(300px, 50vh);
    }
    `,qn=e=>{let{lightBg:t,imgStart:n,lightTopLine:r,lightTextDesc:a,description:i,headline:o,lightText:l,topLine:s,img:c,alt:u,start:f,children:p}=e;return(0,d().jsx)(d().Fragment,{children:(0,d().jsx)(In,{lightBg:t,children:(0,d().jsx)(Ge,{children:(0,d().jsxs)(Rn,{imgStart:n,children:[(0,d().jsx)($n,{children:(0,d().jsxs)(Dn,{children:[(0,d().jsx)(Fn,{lightTopLine:r,children:s}),(0,d().jsx)(Un,{lightText:l,children:o}),(0,d().jsx)(Bn,{lightTextDesc:a,children:i}),p]})}),(0,d().jsx)($n,{children:(0,d().jsx)(Hn,{start:f,children:(0,d().jsx)(Wn,{src:c,alt:u})})})]})})})})},Qn=[{image:n.p+"static/media/backtofutureside.ac9606296398ba1de6af.jpg"},{image:n.p+"static/media/backtothefutureback.843378bfc51e4822cf76.jpg"},{image:n.p+"static/media/laloire.73e8f12744279a08e903.jpg"},{image:n.p+"static/media/wtc.331b7ad29827170fed8b.jpg"},{image:n.p+"static/media/vessel.60e9a4154aef350a3602.jpg"},{image:n.p+"static/media/sandiego.8cd50da9ad4fafdc7699.jpg"},{image:n.p+"static/media/firework.f8b7af45ca6c342f4987.jpg"},{image:n.p+"static/media/ccentrance.b387d347123449022a46.jpg"},{image:n.p+"static/media/stormtroopers.3deb79cd919987b2581c.jpg"},{image:n.p+"static/media/spongebob.cb0932ee65a1aa955b20.jpg"},{image:n.p+"static/media/kanapalisurf.d87104f0f14659a771c5.jpg"},{image:n.p+"static/media/mauigreen.a2527a195fd753ccdc66.jpg"},{image:n.p+"static/media/mauifog.cab21354de14abfb5141.jpg"},{image:n.p+"static/media/mauiwaves.30827ed375d9e5799133.jpg"},{image:n.p+"static/media/mauigold.eaa9e493dfbf681955e9.jpg"},{image:n.p+"static/media/mauiworkers.328cad1e1595d4ded2c0.jpg"},{image:n.p+"static/media/babypine.2dddb307971c17b069a1.jpg"},{image:n.p+"static/media/mauipineapple.276af429f17e8c863f0a.jpg"}],Yn=Qe.div`
    color: #fff;
    padding: 170px 0 96px;
    /* keeps the photo's glow from causing sideways scroll on narrow screens */
    overflow: hidden;

    @media screen and (max-width: 1200px) {
        padding: 60px 0 80px;
    }
    background: ${e=>{let{lightBg:t}=e;return t?"#fff":"#101522"}};
    `,Gn=Qe.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 48px;
    flex-direction: ${e=>{let{imgStart:t}=e;return t?"row-reverse":"row"}};

    @media screen and (max-width: 1200px) {
        flex-direction: column-reverse;
        flex-wrap: nowrap;
    }
`,Kn=Qe.div`
   
    padding-right: 15px;
    padding-left: 15px;
    /* text column gets the larger share, as on the Home page */
    flex: 0 1 560px;
    max-width: 560px;

    /* the photo column (second child) sits beside it */
    &:last-child {
        flex: 0 1 480px;
        max-width: 480px;
    }

    @media screen and (max-width: 1200px) {
        flex: none;
        width: 100%;

        &:last-child {
            flex: none;
        }
    }

    @media screen and (max-width: 768px){
        max-width: 100%;
        flex-basis: auto;
        display: flex;
        justify-content: center;
    }
    `,Xn=Qe.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 5px;
    
    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
    }

    `,Zn=Qe.div`
    /* eyebrow label, same style as the Home page and Bucket List */
    color: ${e=>{let{lightTopLine:t}=e;return t?"#c9d1ff":"#4b59F7"}};
    font-size: 14px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    margin-bottom: 16px;
    `,Jn=Qe.h1`
    margin-bottom: 24px;
    font-size: 56px;
    line-height: 1.1;

    @media screen and (max-width: 768px) {
        font-size: 42px;
    }
    color: ${e=>{let{lightText:t}=e;return t?"#f7f8fa":"#1c2237"}};
    `,er=Qe.p`
    max-width: 540px;
    margin-bottom: 35px;
    font-size: 19px;
    line-height: 1.6;
    color: ${e=>{let{lightTextDesc:t}=e;return t?"#a9b3c1":"#1c2237"}};
    `,tr=qe`
    from { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
    50%  { transform: translate(-50%, -50%) rotate(180deg) scale(1.08); }
    to   { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
`,nr=Qe.div`
    position: relative;
    isolation: isolate;
    max-width: 555px;
    width: 100%;
    display: flex;
    flex:1;
    justify-content: center;

    /* flowing light behind the slider, matching the Home and About pages */
    &::before {
        content: '';
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        width: 100%;
        aspect-ratio: 1;
        border-radius: 50%;
        background: conic-gradient(from 0deg, #4b59f7, #4ade80, #0467fb, #8fa0ff, #4b59f7);
        /* radial mask gives soft edges without a costly blur filter */
        -webkit-mask-image: radial-gradient(circle, #000 25%, transparent 68%);
        mask-image: radial-gradient(circle, #000 25%, transparent 68%);
        opacity: 0.55;
        will-change: transform;
        transform: translate(-50%, -50%);
        animation: ${tr} 16s linear infinite;
        pointer-events: none;
    }

    @media (prefers-reduced-motion: reduce) {
        &::before {
            animation: none;
        }
    }
    `,rr=e=>{let{primary:t,lightBg:n,imgStart:r,lightTopLine:a,lightTextDesc:i,buttonLabel:o,description:l,headline:s,lightText:c,topLine:u,img:f,alt:p,start:h,current:m,onChange:g}=e;return(0,d().jsx)(d().Fragment,{children:(0,d().jsx)(Yn,{lightBg:n,children:(0,d().jsx)(Ge,{children:(0,d().jsxs)(Gn,{imgStart:r,children:[(0,d().jsx)(Kn,{children:(0,d().jsxs)(Xn,{children:[(0,d().jsx)(Zn,{lightTopLine:a,children:u}),(0,d().jsx)(Jn,{lightText:c,children:s}),(0,d().jsx)(er,{lightTextDesc:i,children:l})]})}),(0,d().jsx)(Kn,{children:(0,d().jsx)(nr,{start:h,children:(0,d().jsx)(Rr,{slides:Qn,current:m,onChange:g})})})]})})})})},ar=Qe.p`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #c9d1ff;
  margin-bottom: 14px;
`,ir=Qe.span`
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px 11px;
  border-radius: 999px;
  color: ${e=>{let{tone:t}=e;return"done"===t?"#0f2a1d":"wip"===t?"#2a1f05":"#c9d1ff"}};
  background: ${e=>{let{tone:t}=e;return"done"===t?"#4ade80":"wip"===t?"#fbbf24":"rgba(75, 89, 247, 0.18)"}};
`,or=Le`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 26px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
  &:hover {
    transform: translateY(-2px);
  }
  &:focus-visible {
    outline: 3px solid #c9d1ff;
    outline-offset: 3px;
  }
`,lr=Le`
  ${or}
  color: #fff;
  background: #4b59f7;
  border: 1px solid #4b59f7;
  &:hover {
    background: #0467fb;
    border-color: #0467fb;
  }
`,sr=Qe(en)`
  ${lr}
`,cr=Qe.a`
  ${lr}
`,ur=Qe(en)`
  ${or}
  color: #c9d1ff;
  background: transparent;
  border: 1px solid #2c3554;
  &:hover {
    border-color: #4b59f7;
    color: #fff;
  }
`,dr=Qe.div`
    background-color: #101522;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `,fr=Qe.section`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;
    `,pr=Qe.p`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-bottom: 24px;
    font-size: 24px;
    `,hr=Qe.p`
    margin-bottom: 24px;
    font-size: 20px;
    `,mr=Qe.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`,gr=Qe.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
    `,vr=Qe.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px ){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`,yr=Qe.h2`
    margin-bottom: 16px;

`,br=Qe.a`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    
    &:hover {
        color: #0467fb;
        transition: 0.3s ease-out;
    }`,xr=Qe.section`
    max-width: 1000px;
    width: 100%;
`,wr=Qe.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto; 

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`,kr=Qe(en)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;  
`,Sr=Qe(Sn)`
    margin-right: 10px;
`,Cr=Qe.small`
    color: #fff;
    margin-bottom: 16px;
`,jr=Qe.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`,Er=Qe.a`
    color: #fff;
    font-size: 24px;
`,zr=[{label:"Facebook",href:"https://www.facebook.com/pausarquis",Icon:function(e){return un({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(e)}},{label:"Instagram",href:"https://www.instagram.com/sarkispau",Icon:function(e){return un({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}},{label:"Twitter",href:"https://twitter.com/pausers13",Icon:function(e){return un({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}}],Pr={label:"Github",href:"https://github.com/psarks",Icon:function(e){return un({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}},_r=()=>(0,d().jsx)(d().Fragment,{children:(0,d().jsxs)(dr,{children:[(0,d().jsxs)(fr,{children:[(0,d().jsx)(pr,{children:"Let's chat!"}),(0,d().jsx)(hr,{children:"Questions, ideas, or just want to say hi?"}),(0,d().jsx)(cr,{href:"mailto:paulinaalesarquis@gmail.com",children:"Get in touch"})]}),(0,d().jsxs)(mr,{children:[(0,d().jsx)(gr,{children:(0,d().jsxs)(vr,{children:[(0,d().jsx)(yr,{children:"Social Media"}),zr.map(e=>{let{label:t,href:n}=e;return(0,d().jsx)(br,{href:n,target:"_blank",rel:"noopener noreferrer",children:t},t)})]})}),(0,d().jsx)(gr,{children:(0,d().jsxs)(vr,{children:[(0,d().jsx)(yr,{children:"Open Source"}),(0,d().jsx)(br,{href:Pr.href,target:"_blank",rel:"noopener noreferrer",children:Pr.label})]})})]}),(0,d().jsx)(xr,{children:(0,d().jsxs)(wr,{children:[(0,d().jsxs)(kr,{to:"/",children:[(0,d().jsx)(Sr,{}),"PS"]}),(0,d().jsxs)(Cr,{children:["PS \xa9 ",(new Date).getFullYear()," "]}),(0,d().jsx)(jr,{children:[...zr,Pr].map(e=>{let{label:t,href:n,Icon:r}=e;return(0,d().jsx)(Er,{href:n,target:"_blank",rel:"noopener noreferrer","aria-label":t,children:(0,d().jsx)(r,{})},t)})})]})})]})});function Lr(e){return un({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"}}]})(e)}function Tr(e){return un({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"}}]})(e)}const Ar=qe`
    from { opacity: 0; }
    to   { opacity: 1; }
`,Or=Qe.div`
    position: relative;
    width: 100%;
    max-width: 480px;
    display: flex;
    justify-content: center;
    align-items: center;
`,Mr=Qe.img`
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 22px;
    border: 1px solid #2c3554;
    box-shadow: 0 24px 50px rgba(0, 0, 0, 0.45);
    animation: ${Ar} 0.6s ease;

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
`,Nr=Qe.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${e=>{let{$side:t}=e;return"left"===t?"left: 12px;":"right: 12px;"}}
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: #fff;
    background: rgba(16, 21, 34, 0.65);
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    border: 1px solid #2c3554;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;
    transition: background 0.25s ease, border-color 0.25s ease;

    &:hover {
        background: #4b59f7;
        border-color: #4b59f7;
    }
    &:focus-visible {
        outline: 3px solid #c9d1ff;
        outline-offset: 2px;
    }
`,Ir=Qe.span`
    position: absolute;
    bottom: 14px;
    right: 14px;
    z-index: 10;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 5px 11px;
    border-radius: 999px;
    color: #c9d1ff;
    background: rgba(16, 21, 34, 0.7);
    border: 1px solid #2c3554;
`,Rr=e=>{let{slides:t,current:n,onChange:r}=e;if(!Array.isArray(t)||t.length<=0)return null;const a=t.length;return(0,d().jsxs)(Or,{children:[(0,d().jsx)(Nr,{$side:"left",onClick:()=>r(0===n?a-1:n-1),"aria-label":"Previous photo",children:(0,d().jsx)(Lr,{})}),(0,d().jsx)(Nr,{$side:"right",onClick:()=>r(n===a-1?0:n+1),"aria-label":"Next photo",children:(0,d().jsx)(Tr,{})}),(0,d().jsx)(Mr,{src:t[n].image,alt:`Photograph ${n+1} of ${a}`},n),(0,d().jsxs)(Ir,{children:[n+1," / ",a]})]})},$r=n.p+"static/media/beach.cfdae57f82dc25a50972.mp4";async function Dr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(const a of n)switch(typeof a){case"string":await Fr(e,a);break;case"number":await Ur(a);break;case"function":await a(e,...n);break;default:await a}}async function Fr(e,t){const n=function(e,t){let[...n]=t;return[...e,NaN].findIndex((e,t)=>n[t]!==e)}(e.textContent,t);await async function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:60;for(const r of function*(e){for(const t of e)yield e=>requestAnimationFrame(()=>e.textContent=t)}(t))r(e),await Ur(n+n*(Math.random()-.5))}(e,[...Vr(e.textContent,n),...Br(t,n)])}async function Ur(e){await new Promise(t=>setTimeout(t,e))}function Br(e){let[...t]=e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.length;return function*(){for(;n<r;)yield t.slice(0,++n).join("")}()}function Vr(e){let[...t]=e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.length;return function*(){for(;r>n;)yield t.slice(0,--r).join("")}()}var Hr="styles_typicalWrapper__1_Uvh";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!==typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}('.styles_typicalWrapper__1_Uvh::after {\n  content: "|";\n  animation: styles_blink__2CKyC 1s infinite step-start;\n}\n\n@keyframes styles_blink__2CKyC {\n  50% { opacity: 0; }\n}');var Wr=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)};(0,f().memo)(function(e){var t=e.steps,n=e.loop,r=e.className,a=e.wrapper,i=void 0===a?"p":a,o=(0,f().useRef)(null),l=i,s=[Hr];return r&&s.unshift(r),(0,f().useEffect)(function(){n===1/0?Dr.apply(void 0,[o.current].concat(Wr(t),[Dr])):"number"===typeof n?Dr.apply(void 0,[o.current].concat(Wr(Array(n).fill(t).flat()))):Dr.apply(void 0,[o.current].concat(Wr(t)))}),f().createElement(l,{ref:o,className:s.join(" ")})});const qr="Network Support Media Technician",Qr="San Diego Unified School District, DePortola Middle School",Yr="Keeping the school network, devices, and AV/TV running for students and staff.",Gr="Aug 2020 \u2013 Present",Kr={title:"Certifications & training",items:["Cybersecurity Architecture","Cyber Incident Response","Threat and Vulnerability","Linux Essentials"]},Xr=Qe.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 32px;
`,Zr=Qe.section`
  background: #101522;
  color: #fff;
  padding: 0 0 110px;
`,Jr=Qe.h2`
  font-size: 32px;
  margin-bottom: 28px;
  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
`,ea=Qe.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 22px;
`,ta=Qe.article`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #1c2237;
  border: 1px solid #2c3554;
  border-radius: 14px;
  padding: 28px 26px;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  &:hover {
    transform: translateY(-6px);
    border-color: #4b59f7;
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.35);
  }
`,na=Qe.div`
  position: absolute;
  top: 22px;
  right: 22px;
`,ra=Qe.div`
  width: 58px;
  height: 58px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  font-size: 30px;
  color: #8fa0ff;
  background: rgba(75, 89, 247, 0.16);
`,aa=Qe.h3`
  font-size: 21px;
  margin-bottom: 8px;
`,ia=Qe.p`
  font-size: 14px;
  font-weight: 700;
  color: #8fa0ff;
  margin-bottom: 10px;
`,oa=Qe.p`
  font-size: 15px;
  line-height: 1.55;
  color: #b8c0cf;
`,la=Qe(oa)`
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,sa=Qe.p`
  margin-top: 14px;
  font-size: 13px;
  font-weight: 700;
  color: #4ade80;
`,ca=Qe.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
  li {
    font-size: 13px;
    color: #c9d1ff;
    padding: 5px 12px;
    border-radius: 999px;
    border: 1px solid #2c3554;
  }
`,ua=Qe(ur)`
  margin-top: auto;
  align-self: flex-start;
  padding: 8px 18px;
  font-size: 14px;
`,da=Qe.div`
  flex: 1;
  min-height: 18px;
`,fa=()=>(0,d().jsxs)(d().Fragment,{children:[(0,d().jsx)(qn,{...bn,children:(0,d().jsxs)(Xr,{children:[(0,d().jsx)(sr,{to:"/projects",children:"See my projects"}),(0,d().jsx)(ur,{to:"/casestudy",children:"Read the case study"})]})}),(0,d().jsx)(Zr,{children:(0,d().jsxs)(Ge,{children:[(0,d().jsx)(ar,{children:"At a glance"}),(0,d().jsx)(Jr,{children:"What I'm up to"}),(0,d().jsxs)(ea,{children:[(0,d().jsxs)(ta,{children:[(0,d().jsx)(na,{children:(0,d().jsx)(ir,{tone:"done",children:"Current"})}),(0,d().jsx)(ra,{"aria-hidden":"true",children:(0,d().jsx)(mn,{})}),(0,d().jsx)(aa,{children:qr}),(0,d().jsx)(ia,{children:Qr}),(0,d().jsx)(oa,{children:Yr}),(0,d().jsx)(sa,{children:Gr})]}),(0,d().jsxs)(ta,{children:[(0,d().jsx)(na,{children:(0,d().jsx)(ir,{children:"Case study"})}),(0,d().jsx)(ra,{"aria-hidden":"true",children:(0,d().jsx)(vn,{})}),(0,d().jsx)(aa,{children:xn.title}),(0,d().jsx)(la,{children:xn.lede}),(0,d().jsx)(da,{}),(0,d().jsx)(ua,{to:"/casestudy",children:"Read the case study \u2192"})]}),(0,d().jsxs)(ta,{children:[(0,d().jsx)(na,{children:(0,d().jsx)(ir,{tone:"wip",children:"Learning"})}),(0,d().jsx)(ra,{"aria-hidden":"true",children:(0,d().jsx)(hn,{})}),(0,d().jsx)(aa,{children:Kr.title}),(0,d().jsx)(ca,{children:Kr.items.map(e=>(0,d().jsx)("li",{children:e},e))}),(0,d().jsx)(da,{}),(0,d().jsx)(ua,{to:"/cv",children:"See full CV \u2192"})]})]})]})})]}),pa=[{label:"Based in",value:"San Diego, CA"},{label:"Currently",value:"Network Support Media Technician, San Diego Unified"},{label:"Education",value:"B.S. Cognitive Science, Interaction Design, UC San Diego"},{label:"Languages",value:"English, Spanish, French"},{label:"Building",value:"Dash, an e-bike safety app for kids & parents"}],ha=[{heading:"My story",text:"I was born in Tijuana, Mexico, and moved to San Diego as a baby. I am half Lebanese and half Mexican, and a DACA recipient. Before DACA, I was not sure what my future would hold. I am grateful for the opportunity to finish school at UC San Diego and build a career in technology."},{heading:"How I got into tech",text:"As a kid, I learned how to upgrade my own computer, and I never stopped taking things apart to see how they work. That curiosity led me to study interaction design at UCSD, build websites as a front-end developer, and eventually keep a whole school connected."},{heading:"What I do now",text:"I support the network, devices, and AV systems at DePortola Middle School and train staff on new technology. On my own time I am growing my skills in systems administration and cybersecurity, and building Dash, an app that helps families ride e-bikes more safely."}],ma=Qe.section`
  background: #101522;
  color: #fff;
  /* tighter top padding so the intro starts closer to the navbar */
  padding: 72px 0 96px;
  /* keeps the portrait glow from causing sideways scroll */
  overflow: hidden;
  @media screen and (max-width: 900px) {
    padding: 40px 0 72px;
  }
`,ga=Qe.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  align-items: center;
  /* was 72px: less empty space between "Live. Learn. Lead." and "My story" */
  margin-bottom: 36px;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 28px;
  }
`,va=Qe.p`
  color: #a9b3c1;
  font-size: 18px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`,ya=Qe.h1`
  font-size: 48px;
  line-height: 1.1;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 38px;
  }
`,ba=Qe.p`
  font-size: 19px;
  line-height: 1.6;
  color: #c9d1dd;
  max-width: 560px;
`,xa=qe`
  from { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
  50%  { transform: translate(-50%, -50%) rotate(180deg) scale(1.08); }
  to   { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
`,wa=Qe.figure`
  position: relative;
  isolation: isolate;
  width: 100%;
  /* smaller portrait (was 340px) shortens the intro row */
  max-width: 280px;
  justify-self: center;
  margin: 0 18px 18px 0;
  aspect-ratio: 560 / 756;
  @media screen and (max-width: 900px) {
    max-width: 200px;
    order: -1;
  }

  /* flowing light behind the picture (replaces the old offset outline frame) */
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    width: 130%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: conic-gradient(from 0deg, #4b59f7, #4ade80, #0467fb, #8fa0ff, #4b59f7);
    /* radial mask gives soft edges without a costly blur filter */
    -webkit-mask-image: radial-gradient(circle, #000 25%, transparent 68%);
    mask-image: radial-gradient(circle, #000 25%, transparent 68%);
    opacity: 0.6;
    will-change: transform;
    transform: translate(-50%, -50%);
    animation: ${xa} 16s linear infinite;
    pointer-events: none;
  }
  @media (prefers-reduced-motion: reduce) {
    &::before {
      animation: none;
    }
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 22px;
    box-shadow: 0 24px 50px rgba(0, 0, 0, 0.45);
    transition: opacity 0.6s ease;
  }
`,ka=Qe.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 56px;
  align-items: start;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`,Sa=Qe.div`
  h2 {
    font-size: 22px;
    margin-bottom: 10px;
  }
  p {
    font-size: 17px;
    line-height: 1.7;
    color: #c9d1dd;
    /* was 32px: tighter spacing between story sections */
    margin-bottom: 22px;
  }
`,Ca=Qe.aside`
  background: #1c2237;
  border: 1px solid #2c3554;
  border-radius: 14px;
  padding: 28px;
  dl div {
    padding: 12px 0;
    border-bottom: 1px solid #2c3554;
  }
  dl div:last-child {
    border-bottom: none;
  }
  dt {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    color: #8fa0ff;
    margin-bottom: 4px;
  }
  dd {
    font-size: 16px;
    line-height: 1.45;
    color: #e6e9f2;
  }
`,ja=Qe(en)`
  display: block;
  margin-top: 22px;
  text-align: center;
  background: #4b59f7;
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  border-radius: 8px;
  padding: 12px 18px;
  &:hover {
    background: #0467fb;
  }
`,Ea=()=>(0,d().jsx)(ma,{children:(0,d().jsxs)(Ge,{children:[(0,d().jsxs)(ga,{children:[(0,d().jsxs)("div",{children:[(0,d().jsx)(va,{children:"About Me"}),(0,d().jsx)(ya,{children:"Live Learn Lead"}),(0,d().jsx)(ba,{children:"I'm Paulina Alejandra Sarquis Mu\xf1oz, an IT and network support specialist with a background in UX and front-end development. I like technology that works for the people using it."})]}),(0,d().jsx)(wa,{children:(0,d().jsx)("img",{src:"/my.pages/paulina-portrait.jpg",alt:"Portrait of Paulina Sarquis Mu\xf1oz, smiling"})})]}),(0,d().jsxs)(ka,{children:[(0,d().jsx)(Sa,{children:ha.map(e=>(0,d().jsxs)("div",{children:[(0,d().jsx)("h2",{children:e.heading}),(0,d().jsx)("p",{children:e.text})]},e.heading))}),(0,d().jsxs)(Ca,{children:[(0,d().jsx)("dl",{children:pa.map(e=>(0,d().jsxs)("div",{children:[(0,d().jsx)("dt",{children:e.label}),(0,d().jsx)("dd",{children:e.value})]},e.label))}),(0,d().jsx)(ja,{to:"/cv",children:"View my resume"})]})]})]})}),za={lightBg:!1,primary:!0,imgStart:"start",lightTopLine:!0,lightTextDesc:!0,buttonLabel:"Get Started",description:"My photography is my way to be everywhere, without being seen. I love being behind the camera not in front of it. I do believe we all can see the same photograph in many different ways.",headline:"Focus Grow Inspire",lightText:!0,topLine:"Photography",start:""},Pa=(e().A,e().A,450),_a=Qe.div`
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(8, 11, 20, 0.85);
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  opacity: ${e=>{let{$show:t}=e;return t?1:0}};
  transition: opacity ${350}ms ease;
  cursor: zoom-out;
`,La=Qe.figure`
  position: fixed;
  z-index: 2001;
  margin: 0;
  overflow: hidden;
  cursor: zoom-out;
  border: 1px solid #2c3554;
  border-radius: ${e=>{let{$show:t}=e;return t?"22px":"14px"}};
  box-shadow: ${e=>{let{$show:t}=e;return t?"0 40px 90px rgba(0, 0, 0, 0.65), 0 0 0 3px rgba(75, 89, 247, 0.35)":"0 0 0 rgba(0, 0, 0, 0)"}};
  transition: top ${Pa}ms cubic-bezier(0.34, 1.25, 0.5, 1),
    left ${Pa}ms cubic-bezier(0.34, 1.25, 0.5, 1),
    width ${Pa}ms cubic-bezier(0.34, 1.25, 0.5, 1),
    height ${Pa}ms cubic-bezier(0.34, 1.25, 0.5, 1),
    border-radius ${Pa}ms ease, box-shadow ${Pa}ms ease;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,Ta=Qe.button`
  position: fixed;
  top: 18px;
  right: 18px;
  z-index: 2002;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 8px 16px;
  border-radius: 999px;
  color: #c9d1ff;
  background: rgba(16, 21, 34, 0.8);
  border: 1px solid #2c3554;
  cursor: pointer;
  opacity: ${e=>{let{$show:t}=e;return t?1:0}};
  transition: opacity ${350}ms ease, background 0.25s ease;
  &:hover {
    background: #4b59f7;
  }
  &:focus-visible {
    outline: 3px solid #c9d1ff;
    outline-offset: 2px;
  }
`,Aa=e=>{let{photos:t,index:n,getThumb:r,onChangeIndex:a,onClose:i}=e;const[o,l]=(0,f().useState)(!1);(0,f().useEffect)(()=>{let e;const t=requestAnimationFrame(()=>{e=requestAnimationFrame(()=>l(!0))});return()=>{cancelAnimationFrame(t),cancelAnimationFrame(e)}},[]);const s=()=>{l(!1),setTimeout(i,Pa)};(0,f().useEffect)(()=>{const e=e=>{"Escape"===e.key&&s(),"ArrowRight"===e.key&&a((n+1)%t.length),"ArrowLeft"===e.key&&a((n-1+t.length)%t.length)};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),(0,f().useEffect)(()=>{const e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}},[]);const c=r(n);if(!c)return null;const u=o?(e=>{const t=e.querySelector("img"),n=t&&t.naturalWidth||4,r=t&&t.naturalHeight||3,a=Math.min(.9*window.innerWidth/n,.85*window.innerHeight/r),i=n*a,o=r*a;return{top:(window.innerHeight-o)/2,left:(window.innerWidth-i)/2,width:i,height:o}})(c):(e=>{const t=e.getBoundingClientRect();return{top:t.top,left:t.left,width:t.width,height:t.height}})(c);return(0,d().jsxs)(d().Fragment,{children:[(0,d().jsx)(_a,{$show:o,onClick:s}),(0,d().jsx)(La,{$show:o,role:"dialog","aria-modal":"true","aria-label":`Photograph ${n+1} of ${t.length}`,style:u,onClick:s,children:(0,d().jsx)("img",{src:t[n].image,alt:`Photograph ${n+1} of ${t.length}`})}),(0,d().jsx)(Ta,{$show:o,onClick:s,autoFocus:!0,children:"Close \u2715"})]})},Oa=Qe.section`
  background: #101522;
  color: #fff;
  padding: 0 0 110px;
`,Ma=Qe.h2`
  font-size: 32px;
  margin-bottom: 28px;
  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
`,Na=Qe.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 14px;
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,Ia=Qe.button`
  padding: 0;
  cursor: pointer;
  background: #1c2237;
  border: 2px solid #2c3554;
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 1;
  visibility: ${e=>{let{$lifted:t}=e;return t?"hidden":"visible"}};
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: #4b59f7;
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
  }
  &:focus-visible {
    outline: 3px solid #c9d1ff;
    outline-offset: 2px;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Ra=()=>{const[e,t]=(0,f().useState)(0),[n,r]=(0,f().useState)(null),a=(0,f().useRef)([]);return(0,d().jsxs)(d().Fragment,{children:[(0,d().jsx)(rr,{...za,current:e,onChange:t}),(0,d().jsx)(Oa,{children:(0,d().jsxs)(Ge,{children:[(0,d().jsx)(ar,{children:"Gallery"}),(0,d().jsx)(Ma,{children:"All photos"}),(0,d().jsx)(Na,{children:Qn.map((e,t)=>(0,d().jsx)(Ia,{ref:e=>{a.current[t]=e},$lifted:t===n,onClick:()=>r(t),"aria-label":`Open photograph ${t+1}`,children:(0,d().jsx)("img",{src:e.image,alt:"",loading:"lazy"})},t))})]})}),null!==n&&(0,d().jsx)(Aa,{photos:Qn,index:n,getThumb:e=>a.current[e],onChangeIndex:r,onClose:()=>r(null)})]})},$a=(e().A,v().default,e().A,e().A,e().A,[{featured:!0,tag:"In progress",title:"Dash: e-bike safety for kids & parents",summary:"A mobile app that lets parents see how their kids ride e-bikes on real roads. It flags safety moments like rolling through a stop sign, skipping a yield, or running a red light, so families can talk through what happened and build safer habits together.",features:["Live ride map for parents, with alerts as they happen","Flags missed stop signs and speeding, with time and location","Parent-set speed limit and safety zones","One family account: a kid view and a PIN-protected parent view","Next up: camera-based sign detection"],skills:["Mobile app","UX design","Location & maps","Real-time alerts","Road safety"],images:[{src:"/projects/dash-ride-v2.jpg",alt:"Dash kid view: ready to ride screen with a 15 mph limit"},{src:"/projects/dash-parent-v2.jpg",alt:"Dash parent dashboard: live ride map with a missed sign alert"},{src:"/projects/dash-alerts-v2.jpg",alt:"Dash alerts list: missed stop sign and speeding alerts"}],inProgress:!0},{tag:"IT Case Study",title:"Keeping a middle school connected",summary:"How I support the network, devices, and classroom AV at DePortola Middle School: triaging requests, isolating hardware vs. software vs. connection issues, and training staff so problems do not come back.",skills:["LAN support","Troubleshooting","AV/TV","Staff training","Inventory"],internalLink:"/casestudy",inProgress:!1},{tag:"Front-End",title:"This portfolio site",summary:"Designed and built from scratch in React with styled-components and React Router, deployed on GitHub Pages.",skills:["React","JavaScript","CSS","GitHub Pages"],externalLink:"https://github.com/psarks/my.pages",inProgress:!1},{tag:"In progress",title:"Home lab: Windows Server + Active Directory",summary:"Building a small virtual network with a domain controller, user accounts, group policy, and backups, documented step by step.",skills:["Windows Server","Active Directory","Group Policy","Virtualization"],inProgress:!0},{tag:"In progress",title:"Redesigning a tech help request form",summary:"A UX redesign of a clunky school tech request form: user interviews, Figma wireframes, and a working prototype.",skills:["UX research","Figma","Prototyping"],inProgress:!0}]),Da=Qe.section`
  background: #101522;
  color: #fff;
  padding: 120px 0 100px;
  min-height: 80vh;
`,Fa=Qe.p`
  color: #a9b3c1;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 12px;
`,Ua=Qe.h1`
  font-size: 44px;
  line-height: 1.15;
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    font-size: 34px;
  }
`,Ba=Qe.p`
  max-width: 680px;
  font-size: 18px;
  line-height: 1.6;
  color: #d5dbe3;
  margin-bottom: 48px;
`,Va=Qe.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
`,Ha=Qe.article`
  background: #1c2237;
  border: 1px solid #2c3554;
  border-radius: 10px;
  padding: 28px;
  display: flex;
  flex-direction: column;
`,Wa=Qe.span`
  align-self: flex-start;
  background: ${e=>{let{muted:t}=e;return t?"#2c3554":"#4b59f7"}};
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  border-radius: 999px;
  padding: 4px 12px;
  margin-bottom: 16px;
`,qa=Qe.h2`
  font-size: 22px;
  margin-bottom: 12px;
`,Qa=Qe.p`
  font-size: 16px;
  line-height: 1.6;
  color: #d5dbe3;
  margin-bottom: 16px;
`,Ya=Qe.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
  margin-bottom: 16px;
  li {
    font-size: 13px;
    color: #a9b3c1;
    border: 1px solid #2c3554;
    border-radius: 6px;
    padding: 3px 8px;
  }
`,Ga="\n  color: #8fa0ff;\n  font-weight: 700;\n  text-decoration: none;\n  &:hover { text-decoration: underline; }\n",Ka=Qe(en)`${Ga}`,Xa=Qe.a`${Ga}`,Za=Qe.article`
  grid-column: 1 / -1;
  position: relative;
  margin-top: 70px;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #1c2237 0%, #18213f 60%, #1b2a3f 100%);
  border: 1px solid #2c3554;
  border-radius: 16px;
  padding: 0 40px 40px;
  display: grid;
  grid-template-columns: minmax(300px, 1fr) 1fr;
  gap: 40px;
  align-items: start;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 0 22px 30px;
    gap: 24px;
  }
`,Ja=Qe.div`
  position: relative;
  height: 380px;
  margin-top: -70px;
  @media screen and (max-width: 480px) {
    height: 300px;
  }
`,ei=Qe.img`
  position: absolute;
  bottom: 0;
  width: 37%;
  aspect-ratio: 460 / 850;
  object-fit: cover;
  object-position: top;
  border-radius: 20px;
  border: 3px solid #39425f;
  background: #15171d;
  box-shadow: 0 22px 45px rgba(0, 0, 0, 0.55);
  transition: transform 0.35s ease;
  &.left {
    left: 2%;
    transform: rotate(-7deg) translateY(10px);
    z-index: 1;
  }
  &.center {
    left: 31.5%;
    z-index: 3;
    transform: translateY(-14px);
  }
  &.right {
    right: 2%;
    transform: rotate(7deg) translateY(10px);
    z-index: 2;
  }
  ${Za}:hover &.left {
    transform: rotate(-10deg) translate(-10px, 4px);
  }
  ${Za}:hover &.center {
    transform: translateY(-26px);
  }
  ${Za}:hover &.right {
    transform: rotate(10deg) translate(10px, 4px);
  }
`,ti=Qe.div`
  padding-top: 36px;
  @media screen and (max-width: 900px) {
    padding-top: 0;
  }
`,ni=Qe.ul`
  list-style: none;
  margin-bottom: 20px;
  li {
    position: relative;
    padding-left: 22px;
    font-size: 15px;
    line-height: 1.55;
    color: #d5dbe3;
    margin-bottom: 6px;
  }
  li::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 9px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #4b59f7;
  }
`,ri=["left","center","right"],ai=e=>{let{p:t}=e;return(0,d().jsxs)(Za,{children:[(0,d().jsx)(Ja,{children:t.images.map((e,t)=>(0,d().jsx)(ei,{className:ri[t]||"center",src:"/my.pages"+e.src,alt:e.alt},e.src))}),(0,d().jsxs)(ti,{children:[(0,d().jsx)(Wa,{muted:t.inProgress,children:t.tag}),(0,d().jsx)(qa,{style:{fontSize:26},children:t.title}),(0,d().jsx)(Qa,{children:t.summary}),t.features&&(0,d().jsx)(ni,{children:t.features.map(e=>(0,d().jsx)("li",{children:e},e))}),(0,d().jsx)(Ya,{style:{marginTop:0,marginBottom:0},children:t.skills.map(e=>(0,d().jsx)("li",{children:e},e))})]})]})},ii=()=>(0,d().jsx)(Da,{children:(0,d().jsxs)(Ge,{children:[(0,d().jsx)(Fa,{children:"Projects"}),(0,d().jsx)(Ua,{children:"Solving real problems for real users"}),(0,d().jsx)(Ba,{children:"A mix of IT, systems, and design work. Each project shows how I approach a problem: understand the people affected, fix the root cause, and document it so it stays fixed."}),(0,d().jsx)(Va,{children:$a.map(e=>e.featured&&e.images?(0,d().jsx)(ai,{p:e},e.title):(0,d().jsxs)(Ha,{children:[(0,d().jsx)(Wa,{muted:e.inProgress,children:e.tag}),(0,d().jsx)(qa,{children:e.title}),(0,d().jsx)(Qa,{children:e.summary}),(0,d().jsx)(Ya,{children:e.skills.map(e=>(0,d().jsx)("li",{children:e},e))}),e.internalLink&&(0,d().jsx)(Ka,{to:e.internalLink,children:"Read the case study \u2192"}),e.externalLink&&(0,d().jsx)(Xa,{href:e.externalLink,target:"_blank",rel:"noreferrer",children:"View the code \u2192"})]},e.title))})]})}),oi=[{role:"Network Support Media Technician",org:"San Diego Unified School District, DePortola Middle School",dates:"Aug 2020 \u2013 Present",points:["Help coordinate the implementation and maintenance of a complex local area network (LAN) at a school site.","Troubleshoot and isolate issues with computers, printers, and microphones, determining whether the cause is hardware, software, or connection.","Provide training and technical assistance to staff.","Provide audiovisual and television (AV/TV) support services.","Follow up on maintenance and service requests for network changes and additions.","Maintain the site's technology inventory."]},{role:"Front-End Developer",org:"Paohaus, San Diego",dates:"Jan 2018 \u2013 Sep 2022",points:["Turned Figma design mockups into working web pages.","Built styled, clickable, functional user interfaces with a focus on UX.","Worked primarily in JavaScript, HTML, and CSS."]}],li={Technical:["LAN support","Hardware & software troubleshooting","AV/TV systems","Windows","Linux","JavaScript","HTML & CSS","Python","C / C++","Figma"],Professional:["Communication","Customer service","Staff training","Problem-solving","Adaptability"]},si=["Windows Operating System","Basic Network Configuration","Linux Essentials","Programming with Python I & II","Cybersecurity Architecture","Cyber Incident Response","Threat and Vulnerability"],ci=Qe.section`
  background: #101522;
  color: #fff;
  padding: 96px 0 110px;
  min-height: calc(100vh - 80px);
  @media screen and (max-width: 900px) {
    padding: 48px 0 80px;
  }
`,ui=Qe.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 48px;
`,di=Qe.h1`
  font-size: 56px;
  line-height: 1.1;
  margin-bottom: 12px;
  @media screen and (max-width: 768px) {
    font-size: 38px;
  }
`,fi=Qe.p`
  font-size: 19px;
  color: #c9d1dd;
`,pi=Qe.p`
  font-size: 15px;
  color: #8a94a8;
  margin-top: 8px;
`,hi=Qe.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`,mi=Qe.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 22px;
  align-items: start;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,gi=Qe.div`
  display: grid;
  gap: 22px;
`,vi=Qe.section`
  position: relative;
  background: #1c2237;
  border: 1px solid #2c3554;
  border-radius: 14px;
  padding: 28px 26px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
  &:hover {
    border-color: #4b59f7;
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.35);
  }
`,yi=Qe.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 20px;
`,bi=Qe.div`
  width: 46px;
  height: 46px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #8fa0ff;
  background: rgba(75, 89, 247, 0.16);
`,xi=Qe.h2`
  font-size: 22px;
`,wi=Qe.div`
  padding-top: 22px;
  margin-top: 22px;
  border-top: 1px solid #2c3554;
  &:first-of-type {
    padding-top: 0;
    margin-top: 0;
    border-top: none;
  }
`,ki=Qe.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  flex-wrap: wrap;
`,Si=Qe.h3`
  font-size: 19px;
`,Ci=Qe.p`
  font-size: 15px;
  font-weight: 700;
  color: #8fa0ff;
  margin: 4px 0 12px;
`,ji=Qe.ul`
  list-style: none;
  li {
    position: relative;
    padding-left: 22px;
    font-size: 16px;
    line-height: 1.6;
    color: #b8c0cf;
    margin-bottom: 8px;
  }
  /* small blue dot in place of the default bullet */
  li::before {
    content: '';
    position: absolute;
    left: 4px;
    top: 0.65em;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #4b59f7;
  }
`,Ei=Qe.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
  li {
    font-size: 13px;
    color: #c9d1ff;
    padding: 5px 12px;
    border-radius: 999px;
    border: 1px solid #2c3554;
  }
`,zi=Qe.p`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #c9d1ff;
  margin-bottom: 10px;
`,Pi=Qe.ul`
  list-style: none;
  li {
    font-size: 15px;
    line-height: 1.5;
    color: #b8c0cf;
    margin-bottom: 8px;
  }
`,_i=Qe.p`
  font-size: 15px;
  line-height: 1.65;
  color: #b8c0cf;
`,Li=()=>(0,d().jsx)(ci,{children:(0,d().jsxs)(Ge,{children:[(0,d().jsxs)(ui,{children:[(0,d().jsxs)("div",{children:[(0,d().jsx)(ar,{children:"Curriculum vitae"}),(0,d().jsx)(di,{children:"Paulina Alejandra Sarquis Mu\xf1oz"}),(0,d().jsx)(fi,{children:"IT & Network Support \xb7 UX / Front-End"}),(0,d().jsx)(pi,{children:"San Diego, CA \xb7 English, Spanish, French"})]}),(0,d().jsxs)(hi,{children:[(0,d().jsx)(cr,{href:"/my.pages/Paulina-Sarquis-Resume.pdf",target:"_blank",rel:"noreferrer",children:"Download PDF"}),(0,d().jsx)(ur,{to:"/casestudy",children:"Read the case study"})]})]}),(0,d().jsxs)(mi,{children:[(0,d().jsxs)(gi,{children:[(0,d().jsxs)(vi,{children:[(0,d().jsxs)(yi,{children:[(0,d().jsx)(bi,{"aria-hidden":"true",children:(0,d().jsx)(fn,{})}),(0,d().jsx)(xi,{children:"Experience"})]}),oi.map((e,t)=>(0,d().jsxs)(wi,{children:[(0,d().jsxs)(ki,{children:[(0,d().jsx)(Si,{children:e.role}),(0,d().jsx)(ir,{tone:0===t?"done":void 0,children:e.dates})]}),(0,d().jsx)(Ci,{children:e.org}),(0,d().jsx)(ji,{children:e.points.map(e=>(0,d().jsx)("li",{children:e},e))})]},e.role))]}),(0,d().jsxs)(vi,{children:[(0,d().jsxs)(yi,{children:[(0,d().jsx)(bi,{"aria-hidden":"true",children:(0,d().jsx)(hn,{})}),(0,d().jsx)(xi,{children:"Education"})]}),(0,d().jsxs)(ki,{children:[(0,d().jsx)(Si,{children:"B.S. Cognitive Science, Interaction Design"}),(0,d().jsx)(ir,{children:"Sep 2016 \u2013 Dec 2018"})]}),(0,d().jsx)(Ci,{children:"University of California San Diego"}),(0,d().jsx)(_i,{children:"Focused on human-computer interaction, web design, mobile app development, UX design, product design, and usability research."})]})]}),(0,d().jsxs)(gi,{children:[(0,d().jsxs)(vi,{children:[(0,d().jsxs)(yi,{children:[(0,d().jsx)(bi,{"aria-hidden":"true",children:(0,d().jsx)(mn,{})}),(0,d().jsx)(xi,{children:"Skills"})]}),Object.entries(li).map(e=>{let[t,n]=e;return(0,d().jsxs)("div",{children:[(0,d().jsx)(zi,{children:t}),(0,d().jsx)(Ei,{children:n.map(e=>(0,d().jsx)("li",{children:e},e))})]},t)})]}),(0,d().jsxs)(vi,{children:[(0,d().jsxs)(yi,{children:[(0,d().jsx)(bi,{"aria-hidden":"true",children:(0,d().jsx)(gn,{})}),(0,d().jsx)(xi,{children:"Coursework"})]}),(0,d().jsx)(Pi,{children:si.map(e=>(0,d().jsx)("li",{children:e},e))})]}),(0,d().jsxs)(vi,{children:[(0,d().jsxs)(yi,{children:[(0,d().jsx)(bi,{"aria-hidden":"true",children:(0,d().jsx)(pn,{})}),(0,d().jsx)(xi,{children:"Languages"})]}),(0,d().jsxs)(Pi,{children:[(0,d().jsx)("li",{children:"English"}),(0,d().jsx)("li",{children:"Spanish"}),(0,d().jsx)("li",{children:"French"})]})]})]})]})]})}),Ti=[function(e){return un({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"}}]}]})(e)},mn,function(e){return un({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M2 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm8.284 3.703A8.002 8.002 0 0 1 23 22h-2a6.001 6.001 0 0 0-3.537-5.473l.82-1.824zm-.688-11.29A5.5 5.5 0 0 1 21 8.5a5.499 5.499 0 0 1-5 5.478v-2.013a3.5 3.5 0 0 0 1.041-6.609l.555-1.943z"}}]}]})(e)},function(e){return un({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M9.973 18H11v-5h2v5h1.027c.132-1.202.745-2.194 1.74-3.277.113-.122.832-.867.917-.973a6 6 0 1 0-9.37-.002c.086.107.807.853.918.974.996 1.084 1.609 2.076 1.741 3.278zM10 20v1h4v-1h-4zm-4.246-5a8 8 0 1 1 12.49.002C17.624 15.774 16 17 16 18.5V21a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.5C8 17 6.375 15.774 5.754 15z"}}]}]})(e)}],Ai=Qe.section`
  background: #101522;
  color: #fff;
  padding: 96px 0 110px;
  @media screen and (max-width: 900px) {
    padding: 48px 0 80px;
  }
`,Oi=Qe.header`
  max-width: 780px;
  margin-bottom: 48px;
`,Mi=Qe.h1`
  font-size: 56px;
  line-height: 1.1;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`,Ni=Qe.p`
  font-size: 19px;
  line-height: 1.6;
  color: #c9d1dd;
`,Ii=Qe.dl`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 18px;
  margin-bottom: 56px;
`,Ri=Qe.div`
  background: #1c2237;
  border: 1px solid #2c3554;
  border-radius: 14px;
  padding: 20px 22px;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  &:hover {
    transform: translateY(-4px);
    border-color: #4b59f7;
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.35);
  }
  dt {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #8fa0ff;
    margin-bottom: 6px;
  }
  dd {
    font-size: 17px;
    line-height: 1.4;
    color: #fff;
  }
`,$i=Qe.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 22px;
`,Di=Qe.article`
  position: relative;
  background: #1c2237;
  border: 1px solid #2c3554;
  border-radius: 14px;
  padding: 28px 26px;
  /* the approach card has a list, so it spans the full row */
  grid-column: ${e=>{let{$wide:t}=e;return t?"1 / -1":"auto"}};
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  &:hover {
    transform: translateY(-6px);
    border-color: #4b59f7;
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.35);
  }
`,Fi=Qe.div`
  position: absolute;
  top: 22px;
  right: 22px;
`,Ui=Qe.div`
  width: 58px;
  height: 58px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  font-size: 30px;
  color: #8fa0ff;
  background: rgba(75, 89, 247, 0.16);
`,Bi=Qe.h2`
  font-size: 22px;
  margin-bottom: 10px;
`,Vi=Qe.p`
  font-size: 16px;
  line-height: 1.65;
  color: #b8c0cf;
`,Hi=Qe.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 14px 28px;
  margin-top: 6px;
  li {
    display: flex;
    gap: 12px;
    font-size: 16px;
    line-height: 1.6;
    color: #b8c0cf;
  }
  svg {
    flex: none;
    margin-top: 4px;
    font-size: 20px;
    color: #4ade80;
  }
`,Wi=Qe.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 56px;
`,qi=()=>{const e=xn;return(0,d().jsx)(Ai,{children:(0,d().jsxs)(Ge,{children:[(0,d().jsxs)(Oi,{children:[(0,d().jsx)(ar,{children:"Case Study"}),(0,d().jsx)(Mi,{children:e.title}),(0,d().jsx)(Ni,{children:e.lede})]}),(0,d().jsx)(Ii,{children:e.facts.map(e=>(0,d().jsxs)(Ri,{children:[(0,d().jsx)("dt",{children:e.label}),(0,d().jsx)("dd",{children:e.value})]},e.label))}),(0,d().jsx)($i,{children:e.sections.map((e,t)=>{const n=Ti[t%Ti.length];return(0,d().jsxs)(Di,{$wide:!!e.points,children:[(0,d().jsx)(Fi,{children:(0,d().jsxs)(ir,{children:["Step ",t+1]})}),(0,d().jsx)(Ui,{"aria-hidden":"true",children:(0,d().jsx)(n,{})}),(0,d().jsx)(Bi,{children:e.heading}),e.text&&(0,d().jsx)(Vi,{children:e.text}),e.points&&(0,d().jsx)(Hi,{children:e.points.map(e=>(0,d().jsxs)("li",{children:[(0,d().jsx)(yn,{"aria-hidden":"true"}),(0,d().jsx)("span",{children:e})]},e))})]},e.heading)})}),(0,d().jsxs)(Wi,{children:[(0,d().jsx)(sr,{to:"/cv",children:"View CV"}),(0,d().jsx)(ur,{to:"/projects",children:"\u2190 Back to projects"})]})]})})};const Qi=[{icon:function(e){return un({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{fillRule:"nonzero",d:"M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm1.67 14h-3.34l-1.38 1.897.554 1.706A7.993 7.993 0 0 0 12 20c.871 0 1.71-.14 2.496-.397l.553-1.706L13.669 16zm-8.376-5.128l-1.292.937L4 12c0 1.73.549 3.331 1.482 4.64h1.91l1.323-1.82-1.028-3.17-2.393-.778zm13.412 0l-2.393.778-1.028 3.17 1.322 1.82h1.91A7.964 7.964 0 0 0 20 12l-.003-.19-1.291-.938zM12 9.536l-2.344 1.702.896 2.762h2.895l.896-2.762L12 9.536zm2.291-5.203L13 5.273V7.79l2.694 1.957 2.239-.727.554-1.703a8.014 8.014 0 0 0-4.196-2.984zm-4.583 0a8.014 8.014 0 0 0-4.195 2.985l.554 1.702 2.239.727L11 7.79V5.273l-1.292-.94z"}}]}]})(e)},title:"World Cup games",note:"Saw matches live in North America during the 2026 World Cup.",done:!0,when:"Summer 2026"},{icon:function(e){return un({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{fillRule:"nonzero",d:"M16,1 C16.5522847,1 17,1.44771525 17,2 L17,3 L22,3 L22,9 L19.9813388,9 L22.7270773,16.5438545 C22.9032836,16.9948332 23,17.4856276 23,17.9990113 C23,20.2081503 21.209139,21.9990113 19,21.9990113 C17.1365166,21.9990113 15.5706587,20.7247255 15.1262721,19 L10.8739825,19 C10.4299397,20.7252272 8.86383943,22 7,22 C5.05550552,22 3.43507622,20.612512 3.0747418,18.7735658 C2.43596423,18.4396361 2,17.7707305 2,17 L2,7 C2,6.44771525 2.44771525,6 3,6 L10,6 C10.5522847,6 11,6.44771525 11,7 L11,12 C11,12.5522847 11.4477153,13 12,13 L14,13 C14.5522847,13 15,12.5522847 15,12 L15,3 L12,3 L12,1 L16,1 Z M7,16 C5.8954305,16 5,16.8954305 5,18 C5,19.1045695 5.8954305,20 7,20 C8.1045695,20 9,19.1045695 9,18 C9,16.8954305 8.1045695,16 7,16 Z M19,15.9990113 C17.8954305,15.9990113 17,16.8944418 17,17.9990113 C17,19.1035808 17.8954305,19.9990113 19,19.9990113 C20.1045695,19.9990113 21,19.1035808 21,17.9990113 C21,17.7586785 20.9576092,17.5282466 20.8798967,17.3147849 L20.8635387,17.2714329 C20.5725256,16.5266202 19.8478776,15.9990113 19,15.9990113 Z M17.8529833,9 L16.9999998,9 L16.9999998,12 C16.9999998,13.6568542 15.6568542,15 13.9999998,15 L11.9999998,15 C10.3431458,15 8.99999976,13.6568542 8.99999976,12 L3.99999976,12 L3.99999976,15.3541759 C4.73294422,14.523755 5.80530734,14 6.99999976,14 C8.86383943,14 10.4299397,15.2747728 10.8739825,17 L15.1257631,17 C15.569462,15.2742711 17.1358045,13.9990113 18.9999998,13.9990113 C19.2368134,13.9990113 19.4688203,14.0195905 19.6943299,14.0590581 L17.8529833,9 Z M8.99999976,8 L3.99999976,8 L3.99999976,10 L8.99999976,10 L8.99999976,8 Z M20,5 L17,5 L17,7 L20,7 L20,5 Z"}}]}]})(e)},title:"Build an e-bike safety app",note:"An app that helps kids and their parents learn to ride e-bikes safely, together.",inProgress:!0},{icon:function(e){return un({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M13 16.938V19h5v2H6v-2h5v-2.062A8.001 8.001 0 0 1 4 9V3h16v6a8.001 8.001 0 0 1-7 7.938zM6 5v4a6 6 0 1 0 12 0V5H6zM1 5h2v4H1V5zm20 0h2v4h-2V5z"}}]}]})(e)},title:"A Champions League night",note:"Watch a Champions League match live in a European stadium."},{icon:function(e){return un({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M123.885 20.447c-10.348.467-21.337 3.146-32.194 5.366l62.492 65.628-21.645.188c-29.376.187-75.695 6.154-103.555 22.303l31.756 51.576-40.625 21.098v56.577l46.54 26.32-46.54 40.076v32.268c28.217-1.233 60.63.636 89.135-8.907l31.902-10.658-21.828 25.586c-18.76 22-29.782 55.133-50.736 87.713 31.91-2.394 63.352-7.65 96.8-25.81l16.026-8.683-9.746 77.124c26.333-12.19 52.103-28.923 71.178-49.055 22.683-23.94 35.713-50.49 33.36-72.71l-.074-.75c-18.488-12.687-32.26-31.173-39.236-54.18-8.414-27.753-5.867-62.33 6.643-101.145-26.406-4.04-46.536-14.637-57.307-30.11-12.33-17.716-14.222-39.26-7.738-57.018 6.483-17.758 22.29-32.165 43.437-33.4 20.558-1.195 44.48 10.033 69.972 36.102 11.368 4.11 21.73 8.034 31.14 11.94 2.434-21.395-1.46-38.033-10.408-52.9-8.41-13.975-23.217-26.43-41.1-38.582l4.27 42.888-16.425-10.985C222.37 43.57 168.973 18.49 123.885 20.597l.002-.225zm100.387 77.997c-.436.008-.866 0-1.29 0h-.002c-13.54.785-22.545 9.105-26.937 21.135-4.393 12.03-3.243 27.353 5.51 39.93 8.755 12.576 25.128 23.158 53.548 24.784l12.595.69-4.344 11.827c-14.837 40.46-16.242 73.928-8.577 99.212 7.66 25.267 24.04 42.795 47.305 52.56h.037l108.59 38.474c5.65-11.9 11.672-23.813 17.988-35.71-4.997 2.188-10.513 3.41-16.32 3.41-22.52 0-40.78-18.262-40.78-40.782 0-22.518 18.26-40.78 40.78-40.78 20.66 0 37.697 15.373 40.373 35.3 10.666-18.062 21.885-36 33.48-53.683l-103.224-52.377-4.746-5.732c-3.93-13.556-11.515-23.32-26.39-33.324-14.876-10.002-37.034-19.57-67.784-30.623l-2.08-.767-1.53-1.607c-23.283-24.532-42.7-32.278-56.202-32.024zm119.04 89.93c8.272 0 14.657 6.387 14.657 14.657 0 8.274-6.387 14.688-14.658 14.688-8.27 0-14.687-6.414-14.687-14.687 0-8.27 6.416-14.655 14.687-14.655z"}}]})(e)},title:"Go on a safari",note:"See the animals in their own world, camera in hand."},{icon:function(e){return un({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M258.406 25.03c-13.73 0-44.75 28.13-44.75 62.814 0 31.578 6.432 55.835 16.5 70.937-23.144 3.766-44.237 12.52-61.03 27.314-2.99 2.633-5.824 5.462-8.5 8.47-38.335-36.232-115.217 13.032-137 39.28-19.604 23.618 58.395 26.618 110.718 16.75-1.837 9.754-2.813 20.262-2.813 31.53 0 39.603 11.68 76.216 31.157 104.282-42.685 4.89-61.916 64.204-61.093 90.438.912 29.105 77-17.718 105.5-49.375 8.82 4.862 18.197 8.497 28 10.75 4.822 14.255 10.526 28.394 23.312 41.655 13.732-13.89 18.762-27.77 23.28-41.656 9.815-2.253 19.203-5.883 28.033-10.75 28.498 31.656 104.587 78.48 105.5 49.374.822-26.234-18.41-85.55-61.095-90.438 19.477-28.066 31.156-64.68 31.156-104.28 0-11.27-.974-21.778-2.81-31.532 52.322 9.868 130.32 6.868 110.717-16.75-21.784-26.248-98.666-75.512-137-39.28-2.677-3.008-5.51-5.837-8.5-8.47-16.86-14.855-38.058-23.604-61.312-27.344 10.232-15.31 16.78-39.817 16.78-70.906 0-34.683-31.018-62.813-44.75-62.813zm0 150.25c20.22 0 38.787 3.424 54.563 10.532l-26.345 31.97h-56.438l-26.343-31.97c15.775-7.108 34.34-10.53 54.562-10.53zm-70.937 20.032l25.75 31.25-29.97 44.032-4.28 6.28 5.31 5.47 36.532 37.625-23.312 28.436-5.28 6.438 5.78 6 27.125 28 13.438-13-21.344-22.03 21.53-26.22h39.313l21.53 26.22-21.343 22.03 13.438 13 27.125-28 5.78-6-5.28-6.438L296 319.97l36.563-37.626 5.25-5.438-4.22-6.28-29.718-44.376 25.5-30.938c2.06 1.506 4.06 3.1 5.97 4.782 19.106 16.832 31.25 42.762 31.25 82.03 0 78.538-49.7 140.063-108.19 140.063-58.486 0-108.186-61.525-108.186-140.062 0-39.27 12.14-65.2 31.25-82.03 1.913-1.688 3.93-3.273 6-4.782zm41.593 41.157h59.156l25.655 38.25-33.188 34.186h-44.562L203 274.78l26.063-38.31z"}}]})(e)},title:"Swim with sea turtles",note:"Snorkel alongside them in open water."},{icon:function(e){return un({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M4 6.143v12.824l5.065-2.17 6 3L20 17.68V4.857l1.303-.558a.5.5 0 0 1 .697.46V19l-7 3-6-3-6.303 2.701a.5.5 0 0 1-.697-.46V7l2-.857zm12.243 5.1L12 15.485l-4.243-4.242a6 6 0 1 1 8.486 0zM12 12.657l2.828-2.829a4 4 0 1 0-5.656 0L12 12.657z"}}]}]})(e)},title:"Cross the country",note:"Coast to coast by car or by train, taking the long way."},{icon:function(e){return un({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6.94 14.036c-.233.624-.43 1.2-.606 1.783.96-.697 2.101-1.139 3.418-1.304 2.513-.314 4.746-1.973 5.876-4.058l-1.456-1.455 1.413-1.415 1-1.001c.43-.43.915-1.224 1.428-2.368-5.593.867-9.018 4.292-11.074 9.818zM17 9.001L18 10c-1 3-4 6-8 6.5-2.669.334-4.336 2.167-5.002 5.5H3C4 16 6 2 21 2c-1 2.997-1.998 4.996-2.997 5.997L17 9.001z"}}]}]})(e)},title:"Write a book",note:"Working on it, one chapter at a time.",inProgress:!0}],Yi=Qi.filter(e=>!e.done),Gi=Qi.length-Yi.length,Ki=Qi.filter(e=>e.inProgress).length,Xi=Qe.header`
  position: relative;
  height: 46vh;
  min-height: 320px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
`,Zi=Qe.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`,Ji=Qe.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(180deg, rgba(16, 21, 34, 0.35) 0%, rgba(16, 21, 34, 0.55) 55%, #101522 100%);
`,eo=Qe.div`
  position: relative;
  z-index: 2;
  padding: 0 20px;
`,to=Qe.p`
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #c9d1ff;
  margin-bottom: 14px;
`,no=Qe.h1`
  font-size: 64px;
  line-height: 1.05;
  margin-bottom: 0;
  @media screen and (max-width: 768px) {
    font-size: 42px;
  }
`,ro=Qe.section`
  background: #101522;
  color: #fff;
  padding: 0 0 110px;
`,ao=Qe.div`
  max-width: 520px;
  margin: 0 auto 40px;
  text-align: center;
  p {
    color: #a9b3c1;
    margin-bottom: 10px;
    font-size: 16px;
  }
`,io=Qe.div`
  height: 10px;
  background: #1c2237;
  border-radius: 999px;
  overflow: hidden;
  span {
    display: block;
    height: 100%;
    width: ${e=>{let{pct:t}=e;return t}}%;
    background: linear-gradient(90deg, #4b59f7, #4ade80);
    border-radius: 999px;
  }
`,oo=Qe.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
`,lo=qe`
  0% { transform: scale(1); }
  50% { transform: scale(1.18) rotate(-6deg); }
  100% { transform: scale(1); }
`,so=Qe.article`
  position: relative;
  background: ${e=>{let{done:t}=e;return t?"linear-gradient(160deg, #1d2b3a, #18302a)":"#1c2237"}};
  border: 1px solid ${e=>{let{done:t,wip:n}=e;return t?"#2f6b4f":n?"#7a5d1c":"#2c3554"}};
  border-radius: 14px;
  padding: 28px 26px;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  &:hover {
    transform: translateY(-6px);
    border-color: ${e=>{let{done:t,wip:n}=e;return t?"#4ade80":n?"#fbbf24":"#4b59f7"}};
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.35);
  }
  &:hover .icon {
    animation: ${lo} 0.5s ease;
  }
`,co=Qe.div`
  width: 58px;
  height: 58px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  font-size: 30px;
  color: ${e=>{let{done:t,wip:n}=e;return t?"#4ade80":n?"#fbbf24":"#8fa0ff"}};
  background: ${e=>{let{done:t,wip:n}=e;return t?"rgba(74, 222, 128, 0.14)":n?"rgba(251, 191, 36, 0.14)":"rgba(75, 89, 247, 0.16)"}};
`,uo=Qe.span`
  position: absolute;
  top: 22px;
  right: 22px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px 11px;
  border-radius: 999px;
  color: ${e=>{let{done:t,wip:n}=e;return t?"#0f2a1d":n?"#2a1f05":"#c9d1ff"}};
  background: ${e=>{let{done:t,wip:n}=e;return t?"#4ade80":n?"#fbbf24":"rgba(75, 89, 247, 0.18)"}};
`,fo=Qe.h2`
  font-size: 21px;
  margin-bottom: 8px;
`,po=Qe.p`
  font-size: 15px;
  line-height: 1.55;
  color: #b8c0cf;
`,ho=Qe.p`
  margin-top: 14px;
  font-size: 13px;
  font-weight: 700;
  color: #4ade80;
`,mo=Qe.p`
  margin-top: 64px;
  text-align: center;
  color: #6b7489;
  font-size: 15px;
  letter-spacing: 1px;
`,go=()=>{const e=Math.round(Gi/Qi.length*100),t=[...Qi.filter(e=>e.done),...Qi.filter(e=>e.inProgress),...Yi.filter(e=>!e.inProgress)];return(0,d().jsxs)(d().Fragment,{children:[(0,d().jsxs)(Xi,{children:[(0,d().jsx)(Zi,{src:$r,autoPlay:!0,loop:!0,muted:!0,playsInline:!0}),(0,d().jsx)(Ji,{}),(0,d().jsxs)(eo,{children:[(0,d().jsx)(to,{children:"Life outside the server room"}),(0,d().jsx)(no,{children:"Bucket List"})]})]}),(0,d().jsx)(ro,{children:(0,d().jsxs)(Ge,{children:[(0,d().jsxs)(ao,{children:[(0,d().jsxs)("p",{children:[Gi," of ",Qi.length," checked off",Ki>0&&`, ${Ki} in progress`]}),(0,d().jsx)(io,{pct:e,children:(0,d().jsx)("span",{})})]}),(0,d().jsx)(oo,{children:t.map(e=>(0,d().jsxs)(so,{done:e.done,wip:e.inProgress,children:[(0,d().jsx)(uo,{done:e.done,wip:e.inProgress,children:e.done?"\u2713 Done":e.inProgress?"\u270e In progress":"Someday"}),(0,d().jsx)(co,{className:"icon",done:e.done,wip:e.inProgress,children:(0,d().jsx)(e.icon,{"aria-hidden":"true"})}),(0,d().jsx)(fo,{children:e.title}),(0,d().jsx)(po,{children:e.note}),e.when&&(0,d().jsx)(ho,{children:e.when})]},e.title))}),(0,d().jsx)(mo,{children:"May the force be with me \u2726"})]})})]})};function vo(){const{pathname:e}=Qt();return(0,f().useEffect)(()=>{window.scrollTo(0,0)},[e]),null}const yo=function(){return(0,d().jsxs)(Yt,{children:[(0,d().jsx)(Ke,{}),(0,d().jsx)(vo,{}),(0,d().jsx)(Nn,{}),(0,d().jsxs)(Wt,{children:[(0,d().jsx)(Dt,{path:"/",exact:!0,component:fa}),(0,d().jsx)(Dt,{path:"/about",component:Ea}),(0,d().jsx)(Dt,{path:"/photography",component:Ra}),(0,d().jsx)(Dt,{path:"/projects",component:ii}),(0,d().jsx)(Dt,{path:"/cv",component:Li}),(0,d().jsx)(Dt,{path:"/casestudy",component:qi}),(0,d().jsx)(Dt,{path:"/bucketlist",component:go})]}),(0,d().jsx)(_r,{})]})};i().render((0,d().jsx)(f().StrictMode,{children:(0,d().jsx)(yo,{})}),document.getElementById("root"))})()})();
//# sourceMappingURL=main.67ec12a0.js.map