!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=a||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,b=function(){return s.Date.now()};function y(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var a=u.test(e);return a||f.test(e)?c(e.slice(2),a?2:8):r.test(e)?NaN:+e}e=function(t,e,n){var o,i,r,u,f,c,a=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,r=i;return o=i=void 0,a=e,u=t.apply(r,n)}function h(t){return a=t,f=setTimeout(w,e),l?g(t):u}function j(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-a>=r}function w(){var t=b();if(j(t))return O(t);f=setTimeout(w,function(t){var n=e-(t-c);return s?p(n,r-(t-a)):n}(t))}function O(t){return f=void 0,d&&o?g(t):(o=i=void 0,u)}function T(){var t=b(),n=j(t);if(o=arguments,i=this,c=t,n){if(void 0===f)return h(c);if(s)return f=setTimeout(w,e),g(c)}return void 0===f&&(f=setTimeout(w,e)),u}return e=m(e)||0,y(n)&&(l=!!n.leading,r=(s="maxWait"in n)?v(m(n.maxWait)||0,e):r,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=i=f=void 0},T.flush=function(){return void 0===f?u:O(b())},T};document.querySelector("#search-box").addEventListener("input",t(e)((function(t){t.preventDefault();var e,n=t.target.value.trim();(e=n,fetch("https://restcountries.com/v3.1/name/".concat(e,"?fields=name.official,capital,population,flags,languages")).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}),300))}();
//# sourceMappingURL=index.4591ed23.js.map
