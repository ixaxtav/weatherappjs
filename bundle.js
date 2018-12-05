!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t,r){"use strict";var n=r(3),o=r(11),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function a(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===i.call(e)}function c(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),s(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:o,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function e(){var t={};function r(r,n){"object"==typeof t[n]&&"object"==typeof r?t[n]=e(t[n],r):t[n]=r}for(var n=0,o=arguments.length;n<o;n++)c(arguments[n],r);return t},extend:function(e,t,r){return c(t,function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,r){"use strict";(function(t){var n=r(0),o=r(14),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=r(4):void 0!==t&&(e=r(4)),e}(),transformRequest:[function(e,t){return o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],function(e){a.headers[e]={}}),n.forEach(["post","put","patch"],function(e){a.headers[e]=n.merge(i)}),e.exports=a}).call(this,r(13))},function(e,t,r){e.exports=r(10)},function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";var n=r(0),o=r(15),i=r(17),s=r(18),a=r(19),u=r(5),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(20);e.exports=function(e){return new Promise(function(t,l){var d=e.data,f=e.headers;n.isFormData(d)&&delete f["Content-Type"];var p=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in p||a(e.url)||(p=new window.XDomainRequest,h="onload",m=!0,p.onprogress=function(){},p.ontimeout=function(){}),e.auth){var y=e.auth.username||"",g=e.auth.password||"";f.Authorization="Basic "+c(y+":"+g)}if(p.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p[h]=function(){if(p&&(4===p.readyState||m)&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,n={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:1223===p.status?204:p.status,statusText:1223===p.status?"No Content":p.statusText,headers:r,config:e,request:p};o(t,l,n),p=null}},p.onerror=function(){l(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){l(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",p)),p=null},n.isStandardBrowserEnv()){var v=r(21),w=(e.withCredentials||a(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;w&&(f[e.xsrfHeaderName]=w)}if("setRequestHeader"in p&&n.forEach(f,function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete f[t]:p.setRequestHeader(t,e)}),e.withCredentials&&(p.withCredentials=!0),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){p&&(p.abort(),l(e),p=null)}),void 0===d&&(d=null),p.send(d)})}},function(e,t,r){"use strict";var n=r(16);e.exports=function(e,t,r,o,i){var s=new Error(e);return n(s,t,r,o,i)}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,r){e.exports=r(9)},function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n);const i=function(){let e=document.querySelector("#menu-container");return document.querySelector("#open-menu-btn").addEventListener("click",()=>e.style.right=0),document.querySelector("#close-menu-btn").addEventListener("click",()=>e.style.right="-"+Math.round(e.offsetWidth/window.innerWidth*100)+"%"),document.querySelector("#toggle-hourly-weather").addEventListener("click",()=>{let e=document.querySelector("#hourly-weather-wrapper"),t=document.querySelector("#toggle-hourly-weather").children[0],r=e.getAttribute("visible"),n=document.querySelector("#daily-weather-wrapper");"false"==r?(e.setAttribute("visible","true"),e.style.bottom=0,t.style.transform="rotate(180deg)",n.style.opacity=0):"true"==r?(e.setAttribute("visible","false"),e.style.bottom="-100%",t.style.transform="rotate(0deg)",n.style.opacity=1):console.error("Unknown state of the hourly weather panel and visible attribute")}),{showApp:()=>{document.querySelector("#app-loader").classList.add("display-none"),document.querySelector("main").removeAttribute("hidden")},loadApp:()=>{document.querySelector("#app-loader").classList.remove("display-none"),document.querySelector("main").setAttribute("hidden","true")},drawWeatherData:(e,t)=>{let r,n,o,s,a,u,c=e.currently,l=e.daily.data,d=e.hourly.data,f=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],p=document.querySelector("#daily-weather-wrapper"),h=document.querySelector("#hourly-weather-wrapper");for(document.querySelectorAll(".location-label").forEach(e=>{e.innerHTML=t}),document.querySelector("main").style.backgroundImage=`url("./assets/images/bg-images/${c.icon}.jpg")`,document.querySelector("#currentlyIcon").setAttribute("src",`./assets/images/summary-icons/${c.icon}-white.png`),document.querySelector("#summary-label").innerHTML=c.summary,document.querySelector("#degrees-label").innerHTML=Math.round(5*(c.temperature-32)/9)+"&#176;",document.querySelector("#humidity-label").innerHTML=Math.round(100*c.humidity)+"%",document.querySelector("#wind-speed-label").innerHTML=(1.6093*c.windSpeed).toFixed(1)+" kph";p.children[1];)p.removeChild(p.children[1]);for(let e=0;e<=6;e++)(r=p.children[0].cloneNode(!0)).classList.remove("display-none"),n=f[new Date(1e3*l[e].time).getDay()],r.children[0].children[0].innerHTML=n,o=Math.round(5*(l[e].temperatureMax-32)/9)+"&#176;/"+Math.round(5*(l[e].temperatureMin-32)/9)+"&#176;",r.children[1].children[0].innerHTML=o,s=l[e].icon,r.children[1].children[1].children[0].setAttribute("src",`./assets/images/summary-icons/${s}-white.png`),p.appendChild(r);for(p.children[1].classList.add("current-day-of-the-week");h.children[1];)h.removeChild(h.children[1]);for(let e=0;e<=24;e++)(a=h.children[0].cloneNode(!0)).classList.remove("display-none"),a.children[0].children[0].innerHTML=new Date(1e3*d[e].time).getHours()+":00",a.children[1].children[0].innerHTML=Math.round(5*(d[e].temperature-32)/9)+"&#176;",u=d[e].icon,a.children[1].children[1].children[0].setAttribute("src",`./assets/images/summary-icons/${u}-grey.png`),h.appendChild(a);i.showApp()},noCityFoundAlert:()=>{let e=document.querySelector("#alert-city-not-foud");e.style.bottom="20px",setTimeout(()=>{e.style.bottom="-50px"},2e3)}}}(),s=function(){let e=[];return{save:t=>{e.push(t),localStorage.setItem("savedCities",JSON.stringify(e))},get:()=>{null!=localStorage.getItem("savedCities")&&(e=JSON.parse(localStorage.getItem("savedCities")))},remove:t=>{t<e.length&&(e.splice(t,1),localStorage.setItem("savedCities",JSON.stringify(e)))},getSavedCities:()=>e}}(),a=function(){let e=document.querySelector("#saved-cities-wrapper");return document.addEventListener("click",function(t){t.target.classList.contains("remove-saved-city")&&(t=>{let r=Array.prototype.slice.call(e.children),n=t.closest(".saved-city-box"),o=r.indexOf(n);s.remove(o),n.remove()})(t.target)}),document.addEventListener("click",function(t){if(t.target.classList.contains("set-city")){let r=Array.prototype.slice.call(e.children),n=t.target.closest(".saved-city-box"),o=r.indexOf(n),i=s.getSavedCities();u.getWeather(i[o],!1)}}),{drawCity:t=>{let r=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),i=document.createElement("h1"),s=document.createElement("button");r.classList.add("saved-city-box","flex-container"),i.innerHTML=t,i.classList.add("set-city"),n.classList.add("ripple","set-city"),n.append(i),r.append(n),s.classList.add("ripple","remove-saved-city"),s.innerHTML="-",o.append(s),r.append(o),e.append(r)}}}(),u=(function(){let e;const t=document.querySelector("#location-input"),r=document.querySelector("#add-city-btn");t.addEventListener("input",function(){""!=this.value.trim()?(r.removeAttribute("disabled"),r.classList.remove("disabled")):(r.setAttribute("disabled","true"),r.classList.add("disabled"))}),r.addEventListener("click",()=>{e=t.value,t.value="",r.setAttribute("disabled","true"),r.classList.add("disabled"),u.getWeather(e,!0)})}(),{getWeather:(e,t)=>{i.loadApp();let r=(e=>`https://api.opencagedata.com/geocode/v1/json?q=${e}&key=a73007ade8834599b607f2d044b3006a`)(e);o.a.get(r).then(r=>{if(0==r.data.results.length)return i.showApp(),void i.noCityFoundAlert();t&&(s.save(e),a.drawCity(e)),((e,t)=>{o.a.get(e).then(e=>{i.drawWeatherData(e.data,t)}).catch(e=>{console.error(e)})})(((e,t)=>`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/5316e38e0e7585a469d63096fea53517/${e},${t}`)(r.data.results[0].geometry.lat,r.data.results[0].geometry.lng),e)}).catch(e=>{console.log(e)})}});window.onload=function(){s.get();let e=s.getSavedCities();0!=e.length?(e.forEach(e=>a.drawCity(e)),u.getWeather(e[e.length-1],!1)):i.showApp()}},function(e,t,r){"use strict";var n=r(0),o=r(3),i=r(12),s=r(1);function a(e){var t=new i(e),r=o(i.prototype.request,t);return n.extend(r,i.prototype,t),n.extend(r,t),r}var u=a(s);u.Axios=i,u.create=function(e){return a(n.merge(s,e))},u.Cancel=r(7),u.CancelToken=r(27),u.isCancel=r(6),u.all=function(e){return Promise.all(e)},u.spread=r(28),e.exports=u,e.exports.default=u},function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,t,r){"use strict";var n=r(1),o=r(0),i=r(22),s=r(23);function a(e){this.defaults=e,this.interceptors={request:new i,response:new i}}a.prototype.request=function(e){"string"==typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),(e=o.merge(n,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[s,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},o.forEach(["delete","get","head","options"],function(e){a.prototype[e]=function(t,r){return this.request(o.merge(r||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){a.prototype[e]=function(t,r,n){return this.request(o.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=a},function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,c=[],l=!1,d=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):d=-1,c.length&&p())}function p(){if(!l){var e=a(f);l=!0;for(var t=c.length;t;){for(u=c,c=[];++d<t;)u&&u[d].run();d=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new h(e,t)),1!==c.length||l||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},function(e,t,r){"use strict";var n=r(5);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e}},function(e,t,r){"use strict";var n=r(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var s=[];n.forEach(t,function(e,t){null!==e&&void 0!==e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))}))}),i=s.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},function(e,t,r){"use strict";var n=r(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,s={};return e?(n.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}}),s):s}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},function(e,t,r){"use strict";var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,r,i=String(e),s="",a=0,u=n;i.charAt(0|a)||(u="=",a%1);s+=u.charAt(63&t>>8-a%1*8)){if((r=i.charCodeAt(a+=.75))>255)throw new o;t=t<<8|r}return s}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,r){"use strict";var n=r(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},function(e,t,r){"use strict";var n=r(0),o=r(24),i=r(6),s=r(1),a=r(25),u=r(26);function c(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return c(e),e.baseURL&&!a(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),n.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return c(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(c(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";var n=r(7);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new n(e),t(r.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o(function(t){e=t}),cancel:e}},e.exports=o},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}]);
//# sourceMappingURL=bundle.js.map