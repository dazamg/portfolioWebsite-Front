(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{2025:function(e,t,n){"use strict";n.r(t);var r=n(5893),o=n(7294),s=n(3299),a=n(4301),i=n(3205),l=n(267),c=n(1252),d=n(9583),u=n(1664),m=n(5434);m.ixJ;t.default=function(){var e=(0,i.p)(),t=e.data,n=e.loading;console.log(t),(0,o.useEffect)((function(){return function(){window.__isAboutLoaded=!0}}),[]);var f=function(){return window.__isAboutLoaded?"":"fadein"};return(0,r.jsx)(s.Z,{user:t,loading:n,children:(0,r.jsx)(a.Z,{title:"About me - Kishon StClair",className:"about-page",children:(0,r.jsxs)(l.Z,{className:"mt-5",children:[(0,r.jsx)(c.Z,{md:"6",children:(0,r.jsxs)("div",{className:"left-side",children:[(0,r.jsx)("h1",{className:"title ".concat(f()),children:"Hello, "}),(0,r.jsx)("h4",{className:"subtitle ".concat(f()),children:"Welcome to my About Page"}),(0,r.jsx)("p",{className:"subsubTitle ".concat(f()),children:"Feel free to read short description about me."})]})}),(0,r.jsx)(c.Z,{md:"6",children:(0,r.jsxs)("div",{className:"".concat(f()),children:[(0,r.jsx)("p",{children:"My name is Kishon St Clair and I am a Software Engineer and freelance developer. "}),(0,r.jsx)("p",{children:"I am a boot camper who loves the outdoors and treasures family. I have experience working on a wide range of technologies and projects from, Javascript development for frontend designs for SheSailed to modern mobile and web applications in React and Python."}),(0,r.jsx)("p",{children:"My programming approach comes from a background in sales, organizing, and design to solve problems and drive innovation. I am a quick learner with a growth mindset and a passion for design. I enjoy working collaboratively with cross-functional teams to develop innovative solutions that drive impact for customers and businesses. While I am most adept at front-end, I\u2019m expanding my capability on the backend and can write small features."}),(0,r.jsx)(u.default,{href:"https://github.com/dazamg",children:(0,r.jsx)("a",{className:"icons",target:"_",children:(0,r.jsx)(d.hJX,{size:50})})}),(0,r.jsx)(u.default,{href:"https://www.linkedin.com/in/kishon-stclair-95b5561aa/",children:(0,r.jsx)("a",{className:"icons-1",target:"_",children:(0,r.jsx)(d.ltd,{size:50})})}),(0,r.jsx)(u.default,{href:"mailto:kishon@clairvisual.com?Connecting",children:(0,r.jsx)("a",{className:"icons-2",target:"_",children:(0,r.jsx)(m.ixJ,{size:50})})})]})})]})})})}},8961:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(2025)}])},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),l(e.child))}))}function c(e){return function(t){return r.createElement(d,a({attr:a({},e.attr)},t),l(e.child))}}function d(e){var t=function(t){var n,o=e.attr,s=e.size,l=e.title,c=i(e,["attr","size","title"]),d=s||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,c,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==s?r.createElement(s.Consumer,null,(function(e){return t(e)})):t(o)}},1252:function(e,t,n){"use strict";var r=n(2122),o=n(9756),s=n(7294),a=n(5697),i=n.n(a),l=n(4184),c=n.n(l),d=n(3663),u=i().oneOfType([i().number,i().string]),m=i().oneOfType([i().bool,i().number,i().string,i().shape({size:i().oneOfType([i().bool,i().number,i().string]),order:u,offset:u})]),f={tag:d.iC,xs:m,sm:m,md:m,lg:m,xl:m,className:i().string,cssModule:i().object,widths:i().array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},g=function(e){var t=e.className,n=e.cssModule,a=e.widths,i=e.tag,l=(0,o.Z)(e,["className","cssModule","widths","tag"]),u=[];a.forEach((function(t,r){var o=e[t];if(delete l[t],o||""===o){var s=!r;if((0,d.Kn)(o)){var a,i=s?"-":"-"+t+"-",m=p(s,t,o.size);u.push((0,d.mx)(c()(((a={})[m]=o.size||""===o.size,a["order"+i+o.order]=o.order||0===o.order,a["offset"+i+o.offset]=o.offset||0===o.offset,a)),n))}else{var f=p(s,t,o);u.push(f)}}})),u.length||u.push("col");var m=(0,d.mx)(c()(t,u),n);return s.createElement(i,(0,r.Z)({},l,{className:m}))};g.propTypes=f,g.defaultProps=h,t.Z=g},267:function(e,t,n){"use strict";var r=n(2122),o=n(9756),s=n(7294),a=n(5697),i=n.n(a),l=n(4184),c=n.n(l),d=n(3663),u=i().oneOfType([i().number,i().string]),m={tag:d.iC,noGutters:i().bool,className:i().string,cssModule:i().object,form:i().bool,xs:u,sm:u,md:u,lg:u,xl:u},f={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,i=e.tag,l=e.form,u=e.widths,m=(0,o.Z)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];u.forEach((function(t,n){var r=e[t];if(delete m[t],r){var o=!n;f.push(o?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var h=(0,d.mx)(c()(t,a?"no-gutters":null,l?"form-row":"row",f),n);return s.createElement(i,(0,r.Z)({},m,{className:h}))};h.propTypes=m,h.defaultProps=f,t.Z=h}},function(e){e.O(0,[774,445,228,471,93,545,888,179],(function(){return t=8961,e(e.s=t);var t}));var t=e.O();_N_E=t}]);