(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[909],{3391:function(r,t,n){"use strict";function e(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function o(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(r)){var n=[],e=!0,o=!1,i=void 0;try{for(var u,c=r[Symbol.iterator]();!(e=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);e=!0);}catch(a){o=!0,i=a}finally{try{e||null==c.return||c.return()}finally{if(o)throw i}}return n}}(r,t)||function(r,t){if(r){if("string"===typeof r)return e(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(r,t):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})},5748:function(r,t,n){"use strict";var e=n(7294),o=n(1163);t.Z=function(r){var t=r.to,n=r.ssr,i=(0,o.useRouter)();return(0,e.useEffect)((function(){n?window.location.pathname=t:i.push(t)}),[]),null}},7378:function(){},5874:function(r,t,n){"use strict";var e=n(6156),o=n(5893),i=n(3205),u=n(5748),c=n(1051);function a(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.push.apply(n,e)}return n}t.Z=function(r){return function(t){return function(n){var s=(0,i.p)(),f=s.data,l=s.loading;return l?(0,o.jsx)("p",{children:"Loading..."}):f?t&&!(0,c.QO)(f,t)?(0,o.jsx)(u.Z,{ssr:!0,to:"/api/v1/login"}):(0,o.jsx)(r,function(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,e.Z)(r,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(n,t))}))}return r}({user:f,loading:l},n)):(0,o.jsx)(u.Z,{ssr:!0,to:"/api/v1/login"})}}}},8524:function(r,t,n){"use strict";n.r(t);var e=n(5893),o=n(7757),i=n.n(o),u=n(2137),c=n(3391),a=n(3299),s=n(4301),f=n(5874),l=n(5730),p=n(7378),d=n(9249),b=n(1163);t.default=(0,f.Z)((function(r){var t=r.user,n=r.loading,o=(0,b.useRouter)(),f=(0,p.useCreateBlog)(),y=(0,c.Z)(f,2),v=y[0],g=y[1],h=(g.data,g.error),O=g.loading,j=function(){var r=(0,u.Z)(i().mark((function r(t){var n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v(t);case 2:n=r.sent,o.push("/blogs/editor/[id]","/blogs/editor/".concat(n._id));case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}();return h&&d.Am.error(h),(0,e.jsx)(a.Z,{user:t,loading:n,children:(0,e.jsx)(s.Z,{children:(0,e.jsx)(l.M,{onSave:j,loading:O})})})}))("admin")},5148:function(r,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs/editor",function(){return n(8524)}])}},function(r){r.O(0,[774,471,93,730,545,888,179],(function(){return t=5148,r(r.s=t);var t}));var t=r.O();_N_E=t}]);