/*! For license information please see 387.713a0095.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{458:function(t,e,r){r.d(e,{v:function(){return i}});var n=r(243);n.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="46dcc13616dce866cfadaff5cd9f6a02",i={getTrendingMovies:function(){return n.Z.get("trending/movie/day?api_key=".concat(o))},getMovieDetails:function(t){return n.Z.get("movie/".concat(t,"?api_key=").concat(o))},getCredits:function(t){return n.Z.get("movie/".concat(t,"/credits?api_key=").concat(o))},getReviews:function(t){return n.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o))},searchMovie:function(t){return n.Z.get("search/movie?query=".concat(t,"&api_key=").concat(o))}}},387:function(t,e,r){r.r(e),r.d(e,{default:function(){return x}});var n,o,i,a,c=r(433),u=r(861),s=r(439),f=r(791),h=r(689),l=r(458),p=r(168),v=r(867),d=v.zo.img(n||(n=(0,p.Z)(["\n    width: 15%\n"]))),y=v.zo.p(o||(o=(0,p.Z)(["\n    font-size: 18px;\n    font-weight: 500;\n"]))),g=v.zo.p(i||(i=(0,p.Z)(["\n    font-size: 18px;\n"]))),m=(v.zo.ul(a||(a=(0,p.Z)(["\n    display: flex;\n    gap: 20px;\n"]))),r(184));function w(){w=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(Z){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof l?e:l,a=Object.create(i.prototype),c=new j(o||[]);return n(a,"_invoke",{value:b(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(Z){return{type:"throw",arg:Z}}}t.wrap=s;var h={};function l(){}function p(){}function v(){}var d={};u(d,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(O([])));g&&g!==e&&r.call(g,i)&&(d=g);var m=v.prototype=l.prototype=Object.create(d);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function o(n,i,a,c){var u=f(t[n],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function b(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t||""===t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return p.prototype=v,n(m,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},x(_.prototype),u(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new _(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var x=function(){var t=(0,h.UO)().movieId,e=(0,f.useState)([]),r=(0,s.Z)(e,2),n=r[0],o=r[1];(0,f.useEffect)((function(){function e(){return(e=(0,u.Z)(w().mark((function e(){var r,n;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.v.getCredits(t);case 3:r=e.sent,n=r.data.cast,o((0,c.Z)(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(new Error);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,t]);return(0,m.jsxs)(m.Fragment,{children:[!(null!==n&&void 0!==n&&n.length)&&(0,m.jsx)("p",{children:"We don't have cast inormation for this movie"}),(0,m.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((function(t){var e,r=t.credit_id,n=t.name,o=t.character,i=t.profile_path;return(0,m.jsxs)("li",{children:[(0,m.jsx)(d,{src:(e=i,e?"https://image.tmdb.org/t/p/w500/"+e:"https://upload.wikimedia.org/wikipedia/commons/c/cf/Movie_star_-_actor.svg"),alt:""}),(0,m.jsx)(y,{children:n}),(0,m.jsxs)(g,{children:["Character: ",o]})]},r)}))})]})}}}]);
//# sourceMappingURL=387.713a0095.chunk.js.map