(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6156:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:function(){return r}})},1522:function(t,e,n){"use strict";n.r(e);var r=n(6156),o=n(5893),i=(n(7294),n(3235),n(2954),n(1885),n(6406),n(1109),n(4155));function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}e.default=function(t){var e=t.Component,n=t.pageProps;return console.log(i.env.AUTH0_DOMAIN),(0,o.jsx)(e,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){(0,r.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},n))}},1780:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(1522)}])},3235:function(){},1885:function(){},6406:function(){},1109:function(){},2954:function(){},4155:function(t){var e,n,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:o}catch(t){e=o}try{n="function"===typeof clearTimeout?clearTimeout:i}catch(t){n=i}}();var c,f=[],s=!1,a=-1;function l(){s&&c&&(s=!1,c.length?f=c.concat(f):a=-1,f.length&&p())}function p(){if(!s){var t=u(l);s=!0;for(var e=f.length;e;){for(c=f,f=[];++a<e;)c&&c[a].run();a=-1,e=f.length}c=null,s=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function b(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new h(t,e)),1!==f.length||s||u(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=b,r.addListener=b,r.once=b,r.off=b,r.removeListener=b,r.removeAllListeners=b,r.emit=b,r.prependListener=b,r.prependOnceListener=b,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],(function(){return e(1780),e(2441)}));var n=t.O();_N_E=n}]);