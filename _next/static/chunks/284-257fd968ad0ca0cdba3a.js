(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[284],{506:function(e,t,n){"use strict";n.d(t,{Kq:function(){return $},AK:function(){return ye},eh:function(){return X},xf:function(){return oe},LK:function(){return ue},zK:function(){return q},nR:function(){return ce}});var r=n(178),a=n.n(r),o=n(7294),i=n.t(o,2);Math.round(1e10*Math.random());Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);var u=n(3935);"undefined"!==typeof window&&o.useLayoutEffect;new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);let c=new Map,d=new Set;function l(){if("undefined"===typeof window)return;let e=t=>{let n=c.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),c.delete(t.target)),0===c.size)){for(let e of d)e();d.clear()}};document.body.addEventListener("transitionrun",(t=>{let n=c.get(t.target);n||(n=new Set,c.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}"undefined"!==typeof document&&("loading"!==document.readyState?l():document.addEventListener("DOMContentLoaded",l));"undefined"!==typeof window&&window.visualViewport;new Map;function f(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function s(){return f(/^Mac/)}function p(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const y=o.createContext(null);y.displayName="PressResponderContext";let v=null,h=new Set,m=!1,b=!1,w=!1;function g(e,t){for(let n of h)n(e,t)}function E(e){b=!0,function(e){return!(e.metaKey||!s()&&e.altKey||e.ctrlKey||"keyup"===e.type&&("Control"===e.key||"Shift"===e.key))}(e)&&(v="keyboard",g("keyboard",e))}function O(e){v="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(b=!0,g("pointer",e))}function A(e){p(e)&&(b=!0,v="virtual")}function j(e){e.target!==window&&e.target!==document&&(b||w||(v="virtual",g("virtual",e)),b=!1,w=!1)}function S(){b=!1,w=!0}function M(){if("undefined"===typeof window||m)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){b=!0,e.apply(this,arguments)},document.addEventListener("keydown",E,!0),document.addEventListener("keyup",E,!0),document.addEventListener("click",A,!0),window.addEventListener("focus",j,!0),window.addEventListener("blur",S,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",O,!0),document.addEventListener("pointermove",O,!0),document.addEventListener("pointerup",O,!0)):(document.addEventListener("mousedown",O,!0),document.addEventListener("mousemove",O,!0),document.addEventListener("mouseup",O,!0)),m=!0}"undefined"!==typeof document&&("loading"!==document.readyState?M():document.addEventListener("DOMContentLoaded",M));new Set;const _=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];_.join(":not([hidden]),");_.push('[tabindex]:not([tabindex="-1"]):not([disabled])');_.join(':not([hidden]):not([tabindex="-1"]),');function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function L(e){return null!=e}function I(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];for(var o=0,i=r;o<i.length;o++){var u=i[o];u in e&&(t[u]=e[u])}return t}function N(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];for(var o=0,i=Object.keys(e);o<i.length;o++){var u=i[o];r.includes(u)||(t[u]=e[u])}return t}function D(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0!==t.length)return function(e){for(var n,r=e,a=P(t);!(n=a()).done;){r=(0,n.value)(r)}return r}}var R="undefined"!==typeof window,T=Symbol("NONE");R?o.useLayoutEffect:o.useEffect;function Z(e,t,n){return Array.isArray(n)?o.createElement.apply(o,[e,t].concat(n)):n||"children"in t?o.createElement(e,t,n):o.createElement(e,t)}function H(e){for(var t=k({},e),n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];for(var o=0,i=r;o<i.length;o++)for(var u=i[o],c=0,d=Object.keys(u);c<d.length;c++){var l=d[c];t[l]=U(l,t[l],u[l])}return t}function z(e,t){e&&("function"===typeof e?e(t):Object.isFrozen(e)||(e.current=t))}function K(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n,r=P(t);!(n=r()).done;){z(n.value,e)}}}function U(e,t,n){return t===T||n===T?null:null==t?n:null==n?t:"className"===e?a()(t,n):"style"===e?k({},t,n):"ref"===e?K(t,n):typeof t!==typeof n?n:e.startsWith("on")&&"function"===typeof t?function(){var e;return"function"===typeof t&&(e=t.apply(void 0,arguments)),"function"===typeof n&&(e=n.apply(void 0,arguments)),e}:n}function F(e,t,n,r){var a=t.children,o=C(t,["children"]),i=B(a,null!=n&&n);return Z(e,k({ref:r},o),i)}function W(e,t){var n=e.as,r=e.hasGap;return F(null!=n?n:"div",C(e,["as","hasGap"]),r,t)}var V=(0,o.forwardRef)(W),G=function(e){return(0,o.forwardRef)((function(t,n){var r=t.hasGap,a=C(t,["hasGap"]);return F(e,a,r,n)}))},$=Object.assign(V,{div:G("div"),a:G("a"),button:G("button"),h1:G("h1"),h2:G("h2"),h3:G("h3"),h4:G("h4"),h5:G("h5"),h6:G("h6"),label:G("label"),form:G("form"),section:G("section"),head:G("head"),main:G("main"),nav:G("nav")});function q(e,t,n){if(null==e)return!1;var r=e[t];return null!=r&&(!0===r?n===t:!1!==r&&(Array.isArray(r)?r.includes(n):"string"===typeof r?r===n:void 0!==r[n]&&!1!==r[n]))}function B(e,t){var n=t?"__wab_flex-container":"__wab_passthrough";return e?Array.isArray(e)?o.createElement.apply(i,["div",{className:n}].concat(e)):(0,o.createElement)("div",{className:n},e):null}function Q(e,t,n,r){var a=ne(e),i=te(n,a.props);if("render"===a.type)return a.render(i,t);var u=t;"as"===a.type&&a.as&&(t===$?i.as=a.as:u=a.as);var c=i.children;a.wrapChildren&&(c=a.wrapChildren(function(e){return Array.isArray(e)?1===e.length?e[0]:o.createElement.apply(o,[o.Fragment,{}].concat(e)):e}(c))),r&&(c=B(c,!0));var d=Z(u,i,c);return a.wrap&&(d=a.wrap(d)),d}var J=new Map;function X(e,t){null==t&&(t={});var n=t["data-plasmic-name"],r=t["data-plasmic-root"],a=t["data-plasmic-for-node"];delete t["data-plasmic-name"],delete t["data-plasmic-root"],delete t["data-plasmic-for-node"];for(var o=arguments.length,i=new Array(o>2?o-2:0),u=2;u<o;u++)i[u-2]=arguments[u];var c=Y.apply(void 0,[e,t].concat(i));if(n&&J.set(n,c),r){var d,l=a?null!=(d=J.get(a))?d:null:c;return J.clear(),l}return c}function Y(e,t){var n,r=t["data-plasmic-override"],a=t["data-plasmic-wrap-flex-child"],o=null!=(n=t["data-plasmic-trigger-props"])?n:[];delete t["data-plasmic-override"],delete t["data-plasmic-wrap-flex-child"],delete t["data-plasmic-trigger-props"];for(var i=arguments.length,u=new Array(i>2?i-2:0),c=2;c<i;c++)u[c-2]=arguments[c];return Q(r,e,H.apply(void 0,[t,0===u.length?{}:{children:1===u.length?u[0]:u}].concat(o)),a)}var ee=Symbol("UNSET");function te(e,t){if(!t)return e;for(var n=k({},e),r=0,a=Object.keys(t);r<a.length;r++){var o=a[r],i=e[o],u=t[o];u===ee?delete n[o]:(null!=u||"className"===o||"style"===o||o.startsWith("on")&&"function"===typeof i||(u=T),n[o]=U(o,i,u))}return n}function ne(e){if(!e)return{type:"default",props:{}};if(function(e){return"string"===typeof e||"number"===typeof e||o.isValidElement(e)}(e))return{type:"default",props:{children:e}};if("object"===typeof e)return"as"in e?k({},e,{props:e.props||{},type:"as"}):"render"in e?k({},e,{type:"render"}):"props"in e?k({},e,{props:e.props||{},type:"default"}):(t=Object.keys(e),n=["wrap","wrapChildren"],t.every((function(e){return n.includes(e)}))?k({},e,{props:{},type:"default"}):{type:"default",props:e});if("function"===typeof e)return{type:"render",render:e};var t,n;throw new Error("Unexpected override: "+e)}function re(e,t){for(var n={},r=0,a=Array.from(new Set([].concat(Object.keys(e),Object.keys(t))));r<a.length;r++){var o=a[r];n[o]=ae(e[o],t[o])}return n}function ae(e,t){var n,r;if(!e)return t;if(!t)return e;var a=ne(e),o=ne(t),i=D.apply(void 0,[a.wrap,o.wrap].filter(L)),u=D.apply(void 0,[a.wrapChildren,o.wrapChildren].filter(L)),c=te(null!=(n=a.props)?n:{},o.props);if("render"===o.type)return{render:o.render,props:c,wrap:i,wrapChildren:u};if("render"===a.type)return{render:a.render,props:c,wrap:i,wrapChildren:u};var d=null!=(r="as"===o.type?o.as:void 0)?r:"as"===a.type?a.as:void 0;return k({props:c,wrap:i,wrapChildren:u},d?{as:d}:{})}function oe(e,t){var n,r,a,o,i,u,c,d,l=t.name,f=t.descendantNames,s=t.internalVariantPropNames,p=t.internalArgPropNames,y=["variants","args","overrides"],v=(o=N.apply(void 0,[I.apply(void 0,[e].concat(s))].concat(y)),i=null!=(n=e.variants)?n:{},k({},o,i)),h=(u=N.apply(void 0,[I.apply(void 0,[e].concat(p))].concat(y)),c=null!=(r=e.args)?r:{},k({},u,c)),m=re(N.apply(void 0,[I.apply(void 0,[e].concat(f))].concat(p,s,y)),null!=(a=e.overrides)?a:{}),b=N.apply(void 0,[e,"variants","args","overrides"].concat(f,s,p));Object.keys(b).length>0&&(m=re(m,((d={})[l]={props:b},d)));return{variants:v,args:h,overrides:m}}var ie={};function ue(e){return Object.entries(e).filter((function(e){var t=e[1];return"PLEASE_RENDER_INSIDE_PROVIDER"===t})).forEach((function(t){var n=t[0];e[n]=void 0,ie[n]})),e}function ce(e){var t=e.as,n=e.defaultContents,r=e.value,a=C(e,["as","defaultContents","value"]),i=void 0===r?n:r;if(!i||Array.isArray(i)&&0===i.length)return null;var u=de(i);return u&&(i=(0,o.createElement)("div",{className:"__wab_slot-string-wrapper"},u)),0===Object.keys(a).filter((function(e){return!!a[e]})).length?(0,o.createElement)(o.Fragment,null,i):(0,o.createElement)(t||"div",H({className:"__wab_slot"},a),i)}function de(e){return(0,o.isValidElement)(e)&&e.type===o.Fragment?de(e.props.children):"string"===typeof e?e:Array.isArray(e)&&1===e.length&&"string"===typeof e[0]?e[0]:void 0}var le=[],fe={};function se(){return R?Object.entries(fe).filter((function(e){var t=e[1];return window.matchMedia(t).matches})).map((function(e){return e[0]})):[]}var pe=void 0;R&&window.addEventListener("resize",(function(){var e=se();pe&&e.join("")===pe.join("")||(pe=e,u.unstable_batchedUpdates((function(){return le.forEach((function(e){return e()}))})))}));var ye=a()},178:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===o)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},110:function(e,t,n){"use strict";n.d(t,{ZP:function(){return r.ZP}});var r=n(1565)},3398:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},6393:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},o=n(3398);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},2775:function(e,t,n){"use strict";var r=n(1682);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=s,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),u=(o=n(3244))&&o.__esModule?o:{default:o},c=n(3398),d=n(1165),l=n(6393);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var y=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,d=y.length;c<d;c++){var l=y[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var f=a.props[l],s=r[l]||new Set;"name"===l&&i||!s.has(f)?(s.add(f),r[l]=s):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,i.default.cloneElement(e,u)}return i.default.cloneElement(e,{key:o})}))}var h=function(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(d.HeadManagerContext);return i.default.createElement(u.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)};t.default=h},3244:function(e,t,n){"use strict";var r=n(3115),a=n(2553),o=n(2012),i=(n(450),n(9807)),u=n(7690),c=n(9828);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),f=function(e){i(n,e);var t=d(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},3179:function(){},9008:function(e,t,n){e.exports=n(2775)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},5093:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},4121:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(355);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},9999:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(5093);var a=n(355);function o(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},355:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5093);function a(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),a=n(7381),o=n(3585),i=n(5725);e.exports=function(e){return r(e)||a(e)||o(e)||i()}}}]);