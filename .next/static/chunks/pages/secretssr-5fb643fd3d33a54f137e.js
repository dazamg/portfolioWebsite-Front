(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{4301:function(e,t,n){"use strict";var r=n(5893),a=n(7294),s=n(8595),i=n(9008),o=n(1163),c=function(e){var t=e.header;return(0,r.jsx)("div",{className:"page-header",children:(0,r.jsx)("h1",{className:"page-header-title",children:t})})};t.Z=function(e){var t=(0,o.useRouter)(),n=e.noWrapper,l=e.indexPage,d=e.className,h=void 0===d?"":d,p=e.header,u=e.title,m=void 0===u?"Portfolio - Kishon ":u,j=e.metaDescription,x=void 0===j?"My name is Kishon StClair and I am an software engineer and freelance developer.":j,f=e.canonicalPath,v=e.children,g=l?"index-page":"base-page",b=n?a.Fragment:s.Z;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:m}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,r.jsx)("meta",{name:"description",content:x},"description"),(0,r.jsx)("meta",{name:"title",content:m},"title"),(0,r.jsx)("meta",{property:"og:title",content:m},"og:title"),(0,r.jsx)("meta",{property:"og:locale",content:"en_US"},"og:locale"),(0,r.jsx)("meta",{property:"og:url",content:"".concat("http://localhost:3000").concat(t.asPath)},"og:url"),(0,r.jsx)("meta",{property:"og:type",content:"website"},"og:type"),(0,r.jsx)("meta",{property:"og:description",content:x},"og:description"),(0,r.jsx)("meta",{property:"og:image",content:"".concat("http://localhost:3000","/images/section-1.jpg")},"og:image"),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap",rel:"stylesheet"}),(0,r.jsx)("link",{rel:"icon",type:"image/x-icon",href:"/images/favicon.ico"}),(0,r.jsx)("link",{rel:"canonical",href:"".concat("http://localhost:3000").concat(f||t.asPath)})]}),(0,r.jsx)("div",{className:"".concat(g," ").concat(h),children:(0,r.jsxs)(b,{children:[p&&(0,r.jsx)(c,{header:p}),v]})})]})}},3299:function(e,t,n){"use strict";n.d(t,{Z:function(){return k}});var r=n(5893),a=n(7294),s=n(1664),i=n(1051),o=n(9612),c=n(6704),l=n(2842),d=n(2866),h=n(8227),p=n(9544),u=n(5614),m=n(627),j=n(7243),x=n(3999),f=n(6156),v=n(2949),g=n(1163);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,f.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t=e.children,n=(0,v.Z)(e,["children"]),i=(0,g.useRouter)(),o=a.Children.only(t),c=o.props.className||"";return i.asPath===n.href&&n.activeClassName&&(c="".concat(c," ").concat(n.activeClassName)),delete n.activeClassName,(0,r.jsx)(s.default,N(N({},n),{},{children:a.cloneElement(o,{className:c})}))},w=function(e){var t=e.href,n=e.title,a=e.className,s=void 0===a?"":a;return(0,r.jsx)(O,{activeClassName:"active",href:t,children:(0,r.jsx)("a",{className:"nav-link port-navbar-link ".concat(s),children:n})})},y=function(){return(0,r.jsx)(s.default,{href:"/",children:(0,r.jsx)("a",{className:"navbar-brand port-navbar-brand",children:"Kishon St Clair"})})},_=function(){return(0,r.jsx)("a",{className:"nav-link port-navbar-link",href:"/api/v1/login",children:"Login"})},Z=function(){return(0,r.jsx)("a",{className:"nav-link port-navbar-link",href:"/api/v1/logout",children:"Logout"})},E=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return(0,r.jsxs)(c.Z,{className:"port-navbar-link port-dropdown-menu",nav:!0,isOpen:t,toggle:function(){return n(!t)},children:[(0,r.jsx)(l.Z,{className:"port-dropdown-toggle",nav:!0,caret:!0,children:"Admin"}),(0,r.jsxs)(d.Z,{right:!0,children:[(0,r.jsx)(h.Z,{children:(0,r.jsx)(w,{className:"port-dropdown-item",href:"/portfolios/new",title:"Create Portfolio"})}),(0,r.jsx)(h.Z,{children:(0,r.jsx)(w,{className:"port-dropdown-item",href:"/blogs/editor",title:"Blog Editor"})}),(0,r.jsx)(h.Z,{children:(0,r.jsx)(w,{className:"port-dropdown-item",href:"/dashboard",title:"Dashboard"})})]})]})},P=function(e){var t=e.user,n=e.loading,s=e.className,c=(0,a.useState)(!1),l=c[0],d=c[1],h=function(){return d(!l)};return(0,r.jsx)(o.ZP,{handleWidth:!0,children:function(e){var a=e.width;return(0,r.jsxs)(p.Z,{className:"port-navbar port-default absolute ".concat(s," ").concat(a<768&&l?"is-open":"is-close"),dark:!0,expand:"md",children:[(0,r.jsx)(y,{}),(0,r.jsx)(u.Z,{onClick:h}),(0,r.jsxs)(m.Z,{isOpen:l,navbar:!0,children:[(0,r.jsxs)(j.Z,{className:"mr-auto",navbar:!0,children:[(0,r.jsx)(x.Z,{className:"port-navbar-item",children:(0,r.jsx)(w,{href:"/",title:"Home"})}),(0,r.jsx)(x.Z,{className:"port-navbar-item",children:(0,r.jsx)(w,{href:"/about",title:"About"})}),(0,r.jsx)(x.Z,{className:"port-navbar-item",children:(0,r.jsx)(w,{href:"/portfolios",title:"Portfolios"})}),(0,r.jsx)(x.Z,{className:"port-navbar-item",children:(0,r.jsx)(w,{href:"/blogs",title:"Blogs"})}),(0,r.jsx)(x.Z,{className:"port-navbar-item",children:(0,r.jsx)(w,{href:"/cv",title:"Cv"})})]}),(0,r.jsx)(j.Z,{navbar:!0,children:!n&&(0,r.jsxs)(r.Fragment,{children:[t&&(0,r.jsxs)(r.Fragment,{children:[(0,i.QO)(t,"admin")&&(0,r.jsx)(E,{}),(0,r.jsx)(x.Z,{className:"port-navbar-item",children:(0,r.jsx)(Z,{})})]}),!t&&(0,r.jsx)(x.Z,{className:"port-navbar-item",children:(0,r.jsx)(_,{})})]})})]})]})}})},C=n(9249),k=function(e){var t=e.className,n=e.user,a=e.layoutClass,s=void 0===a?"with-bg":a,i=e.loading,o=e.children;return(0,r.jsxs)("div",{className:"layout-container",children:[(0,r.jsx)(P,{className:s,user:n,loading:i}),(0,r.jsx)("main",{className:"cover ".concat(t),children:(0,r.jsx)("div",{className:"wrapper",children:o})}),(0,r.jsx)(C.Ix,{})]})}},6014:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return i}});var r=n(5893),a=n(3299),s=n(4301),i=!0;t.default=function(e){var t=e.user,n=e.title;return(0,r.jsx)(a.Z,{user:t,loading:!1,children:(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)("h1",{children:["I am Secret Page - Hello ",t&&t.name]}),(0,r.jsx)("h2",{children:n})]})})}},1051:function(e,t,n){"use strict";n.d(t,{QO:function(){return s}});n(7757);var r=n(4713),a=n(4155);(0,r.T)({domain:a.env.AUTH0_DOMAIN,clientId:a.env.AUTH0_CLIENTID,clientSecret:a.env.AUTH0_CLIENTSECRET,scope:"openid profile",audience:a.env.AUTH0_AUDIENCE,redirectUri:a.env.AUTH0_REDIRECT_URI,postLogoutRedirectUri:a.env.AUTH0_POSTLOGOUT_REDIRECT_URI,session:{cookieSecret:a.env.AUTH0_COOKIE_SECRET,storeAccessToken:!0}});var s=function(e,t){return e&&e["https://kishonstclair.com/roles"].includes(t)}},4029:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/secretssr",function(){return n(6014)}])}},function(e){e.O(0,[774,471,888,179],(function(){return t=4029,e(e.s=t);var t}));var t=e.O();_N_E=t}]);