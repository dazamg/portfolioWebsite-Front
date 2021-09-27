(function() {
var exports = {};
exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 8591:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3299);
/* harmony import */ var _components_BasePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4301);
/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1051);






const OnlyAdminSSR = ({
  user,
  title
}) => {
  debugger;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
    user: user,
    loading: false,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_BasePage__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
        children: ["I am Secret Page - Hello ", user && user.name]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        children: title
      })]
    })
  });
};

const getTitle = () => {
  return new Promise(res => {
    setTimeout(() => {
      res({
        title: 'My new title!'
      });
    }, 500);
  });
};

const getServerSideProps = (0,_utils_auth0__WEBPACK_IMPORTED_MODULE_3__/* .withAuth */ .Jc)(async ({
  req,
  res
}, user) => {
  const title = await getTitle();
  return title;
})('admin');
/* harmony default export */ __webpack_exports__["default"] = (OnlyAdminSSR);

/***/ }),

/***/ 4084:
/***/ (function(module) {

"use strict";
module.exports = require("@auth0/nextjs-auth0");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 4300:
/***/ (function(module) {

"use strict";
module.exports = require("react-resize-detector");;

/***/ }),

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 6099:
/***/ (function(module) {

"use strict";
module.exports = require("reactstrap");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,51,92], function() { return __webpack_exec__(8591); });
module.exports = __webpack_exports__;

})();