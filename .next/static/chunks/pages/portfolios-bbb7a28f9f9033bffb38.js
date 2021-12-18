(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[270],{2309:function(e,r,t){"use strict";t.d(r,{H4:function(){return p},Rn:function(){return m},k$:function(){return g},dy:function(){return b}});var o=t(6156),n=t(2949),s=t(9669),a=t.n(s),c=t(9593),i=t(5723);function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}var u=function(e){return a().post("/api/v1/portfolios",e)},d=function(e,r){return a().patch("/api/v1/portfolios/".concat(e),r)},f=function(e){return a().delete("/api/v1/portfolios/".concat(e))},p=function(){return(0,c.k)(u)},m=function(){return(0,c.k)(d)},g=function(){return(0,c.k)(f)},b=function(e){var r=(0,i.ZP)(e?"/api/v1/portfolios/".concat(e):null,c._),t=r.data,s=r.error;return function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({data:t,error:s,loading:!t&&!s},(0,n.Z)(r,["data","error"]))}},9563:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return H},default:function(){return K}});var o=t(5893),n=t(7757),s=t.n(n),a=t(2137),c=t(3391),i=t(7294),l=t(3299),u=t(4301),d=t(3205),f=t(2309),p=t(267),m=t(1252),g=t(7975),b=t(2122),v=t(9756),h=t(5697),j=t.n(h),N=t(4184),y=t.n(N),x=t(3663),O={tag:x.iC,inverse:j().bool,color:j().string,body:j().bool,outline:j().bool,className:j().string,cssModule:j().object,innerRef:j().oneOfType([j().object,j().string,j().func])},Z=function(e){var r=e.className,t=e.cssModule,o=e.color,n=e.body,s=e.inverse,a=e.outline,c=e.tag,l=e.innerRef,u=(0,v.Z)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),d=(0,x.mx)(y()(r,"card",!!s&&"text-white",!!n&&"card-body",!!o&&(a?"border":"bg")+"-"+o),t);return i.createElement(c,(0,b.Z)({},u,{className:d,ref:l}))};Z.propTypes=O,Z.defaultProps={tag:"div"};var _=Z,P={tag:x.iC,className:j().string,cssModule:j().object},w=function(e){var r=e.className,t=e.cssModule,o=e.tag,n=(0,v.Z)(e,["className","cssModule","tag"]),s=(0,x.mx)(y()(r,"card-header"),t);return i.createElement(o,(0,b.Z)({},n,{className:s}))};w.propTypes=P,w.defaultProps={tag:"div"};var k=w,M={tag:x.iC,className:j().string,cssModule:j().object,innerRef:j().oneOfType([j().object,j().string,j().func])},E=function(e){var r=e.className,t=e.cssModule,o=e.innerRef,n=e.tag,s=(0,v.Z)(e,["className","cssModule","innerRef","tag"]),a=(0,x.mx)(y()(r,"card-body"),t);return i.createElement(n,(0,b.Z)({},s,{className:a,ref:o}))};E.propTypes=M,E.defaultProps={tag:"div"};var C=E,T={tag:x.iC,className:j().string,cssModule:j().object},R=function(e){var r=e.className,t=e.cssModule,o=e.tag,n=(0,v.Z)(e,["className","cssModule","tag"]),s=(0,x.mx)(y()(r,"card-title"),t);return i.createElement(o,(0,b.Z)({},n,{className:s}))};R.propTypes=T,R.defaultProps={tag:"div"};var S=R,D={tag:x.iC,className:j().string,cssModule:j().object},X=function(e){var r=e.className,t=e.cssModule,o=e.tag,n=(0,v.Z)(e,["className","cssModule","tag"]),s=(0,x.mx)(y()(r,"card-text"),t);return i.createElement(o,(0,b.Z)({},n,{className:s}))};X.propTypes=D,X.defaultProps={tag:"p"};var $=X,A=function(e){var r=e.portfolio,t=e.children;return(0,o.jsxs)(_,{className:"portfolio-card",children:[(0,o.jsxs)(k,{className:"portfolio-card-header",children:[r.company," "]}),(0,o.jsxs)(C,{children:[(0,o.jsxs)("p",{className:"portfolio-card-city",children:[r.location," "]}),(0,o.jsx)(S,{className:"portfolio-card-title",children:r.jobTitle}),(0,o.jsx)($,{className:"portfolio-card-text",children:r.description.split("\n")[0]}),t]})]})},F=t(1163),G=t(1051),H=!0,K=function(e){var r=e.portfolios,t=(0,F.useRouter)(),n=(0,f.k$)(),b=(0,c.Z)(n,2),v=b[0],h=b[1],j=(h.data,h.error,(0,d.p)()),N=j.data,y=j.loading,x=(0,i.useState)(r),O=x[0],Z=x[1],_=function(){var e=(0,a.Z)(s().mark((function e(r,t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.stopPropagation(),!confirm("Are you sure you want to delete this portfolio?")){e.next=6;break}return e.next=5,v(t);case 5:Z(O.filter((function(e){return e._id!==t})));case 6:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}();return(0,o.jsx)(l.Z,{user:N,loading:y,children:(0,o.jsx)(u.Z,{title:"Portfolios list - Kishon StClair",header:"Portfolios",className:"portfolio-page",children:(0,o.jsx)(p.Z,{children:O.map((function(e){return(0,o.jsx)(m.Z,{onClick:function(){t.push("/portfolios/[id]","/portfolios/".concat(e._id))},md:"4",children:(0,o.jsx)(A,{portfolio:e,children:N&&(0,G.QO)(N,"admin")&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g.Z,{onClick:function(r){r.stopPropagation(),t.push("/portfolios/[id]/edit","/portfolios/".concat(e._id,"/edit"))},className:"mr-2",color:"warning",children:"Edit"}),(0,o.jsx)(g.Z,{onClick:function(r){return _(r,e._id)},color:"danger",children:"Delete"})]})})},e._id)}))})})})}},8184:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolios",function(){return t(9563)}])}},function(e){e.O(0,[774,471,93,572,545,888,179],(function(){return r=8184,e(e.s=r);var r}));var r=e.O();_N_E=r}]);