/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/blogs/editor";
exports.ids = ["pages/blogs/editor"];
exports.modules = {

/***/ "./pages/blogs/editor/index.js":
/*!*************************************!*\
  !*** ./pages/blogs/editor/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layouts/BaseLayout */ \"./components/layouts/BaseLayout.js\");\n/* harmony import */ var _components_BasePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/BasePage */ \"./components/BasePage.js\");\n/* harmony import */ var _hoc_withAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hoc/withAuth */ \"./hoc/withAuth.js\");\n/* harmony import */ var slate_simple_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slate-simple-editor */ \"slate-simple-editor\");\n/* harmony import */ var slate_simple_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slate_simple_editor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var functions_blogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! functions/blogs */ \"./functions/blogs.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _jsxFileName = \"/Users/kishonst.clair/Desktop/PortfolioWebsite/kishon-portfolio-website/pages/blogs/editor/index.js\";\n\n\n\n\n\n\n\n\nconst BlogEditor = ({\n  user,\n  loading\n}) => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n  const [createBlog, {\n    data: createdBlog,\n    error,\n    loading: blogLoading\n  }] = (0,functions_blogs__WEBPACK_IMPORTED_MODULE_5__.useCreateBlog)();\n\n  const saveBlog = async data => {\n    const createdBlog = await createBlog(data);\n    router.push('/blogs/editor/[id]', `/blogs/editor/${createdBlog._id}`);\n  };\n\n  if (error) {\n    react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(error);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_1__.default, {\n    user: user,\n    loading: loading,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BasePage__WEBPACK_IMPORTED_MODULE_2__.default, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(slate_simple_editor__WEBPACK_IMPORTED_MODULE_4__.Editor, {\n        onSave: saveBlog,\n        loading: blogLoading\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 7\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_hoc_withAuth__WEBPACK_IMPORTED_MODULE_3__.default)(BlogEditor)('admin'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raXNob24tcG9ydGZvbGlvLXdlYnNpdGUvLi9wYWdlcy9ibG9ncy9lZGl0b3IvaW5kZXguanM/OGJlZSJdLCJuYW1lcyI6WyJCbG9nRWRpdG9yIiwidXNlciIsImxvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjcmVhdGVCbG9nIiwiZGF0YSIsImNyZWF0ZWRCbG9nIiwiZXJyb3IiLCJibG9nTG9hZGluZyIsInVzZUNyZWF0ZUJsb2ciLCJzYXZlQmxvZyIsInB1c2giLCJfaWQiLCJ0b2FzdCIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsQ0FBQztBQUFDQyxNQUFEO0FBQU9DO0FBQVAsQ0FBRCxLQUFxQjtBQUNwQyxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTSxDQUFDQyxVQUFELEVBQWE7QUFBQ0MsUUFBSSxFQUFFQyxXQUFQO0FBQW9CQyxTQUFwQjtBQUEyQk4sV0FBTyxFQUFFTztBQUFwQyxHQUFiLElBQWlFQyw4REFBYSxFQUFwRjs7QUFFQSxRQUFNQyxRQUFRLEdBQUcsTUFBTUwsSUFBTixJQUFjO0FBQzdCLFVBQU1DLFdBQVcsR0FBRyxNQUFNRixVQUFVLENBQUNDLElBQUQsQ0FBcEM7QUFDQUgsVUFBTSxDQUFDUyxJQUFQLENBQVksb0JBQVosRUFBbUMsaUJBQWdCTCxXQUFXLENBQUNNLEdBQUksRUFBbkU7QUFDRCxHQUhEOztBQUtBLE1BQUlMLEtBQUosRUFBVztBQUFFTSwyREFBQSxDQUFZTixLQUFaO0FBQXFCOztBQUVsQyxzQkFDRSw4REFBQyxtRUFBRDtBQUFZLFFBQUksRUFBRVAsSUFBbEI7QUFBd0IsV0FBTyxFQUFFQyxPQUFqQztBQUFBLDJCQUNFLDhEQUFDLHlEQUFEO0FBQUEsNkJBQ0UsOERBQUMsdURBQUQ7QUFDRSxjQUFNLEVBQUVTLFFBRFY7QUFFRSxlQUFPLEVBQUVGO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFTRCxDQXBCSDs7QUFzQkUsK0RBQWVNLHNEQUFRLENBQUNmLFVBQUQsQ0FBUixDQUFxQixPQUFyQixDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZ3MvZWRpdG9yL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXRzL0Jhc2VMYXlvdXRcIlxuaW1wb3J0IEJhc2VQYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvQmFzZVBhZ2VcIlxuaW1wb3J0IHdpdGhBdXRoIGZyb20gJ0AvaG9jL3dpdGhBdXRoJztcbmltcG9ydCB7IEVkaXRvciB9IGZyb20gJ3NsYXRlLXNpbXBsZS1lZGl0b3InO1xuaW1wb3J0IHsgdXNlQ3JlYXRlQmxvZyB9IGZyb20gJ2Z1bmN0aW9ucy9ibG9ncydcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgdXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IEJsb2dFZGl0b3IgPSAoe3VzZXIsIGxvYWRpbmd9KSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2NyZWF0ZUJsb2csIHtkYXRhOiBjcmVhdGVkQmxvZywgZXJyb3IsIGxvYWRpbmc6IGJsb2dMb2FkaW5nfV0gPSB1c2VDcmVhdGVCbG9nKCk7XG4gIFxuICAgIGNvbnN0IHNhdmVCbG9nID0gYXN5bmMgZGF0YSA9PiB7XG4gICAgICBjb25zdCBjcmVhdGVkQmxvZyA9IGF3YWl0IGNyZWF0ZUJsb2coZGF0YSlcbiAgICAgIHJvdXRlci5wdXNoKCcvYmxvZ3MvZWRpdG9yL1tpZF0nLCBgL2Jsb2dzL2VkaXRvci8ke2NyZWF0ZWRCbG9nLl9pZH1gKVxuICAgIH1cbiAgXG4gICAgaWYgKGVycm9yKSB7IHRvYXN0LmVycm9yKGVycm9yKTsgfVxuICBcbiAgICByZXR1cm4gKFxuICAgICAgPEJhc2VMYXlvdXQgdXNlcj17dXNlcn0gbG9hZGluZz17bG9hZGluZ30+XG4gICAgICAgIDxCYXNlUGFnZT5cbiAgICAgICAgICA8RWRpdG9yIFxuICAgICAgICAgICAgb25TYXZlPXtzYXZlQmxvZ31cbiAgICAgICAgICAgIGxvYWRpbmc9e2Jsb2dMb2FkaW5nfS8+XG4gICAgICAgIDwvQmFzZVBhZ2U+XG4gICAgICA8L0Jhc2VMYXlvdXQ+XG4gICAgKVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCB3aXRoQXV0aChCbG9nRWRpdG9yKSgnYWRtaW4nKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blogs/editor/index.js\n");

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@auth0/nextjs-auth0");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-resize-detector":
/*!****************************************!*\
  !*** external "react-resize-detector" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-resize-detector");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("reactstrap");;

/***/ }),

/***/ "slate-simple-editor":
/*!**************************************!*\
  !*** external "slate-simple-editor" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("slate-simple-editor");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_auth0_js","components_BasePage_js-components_layouts_BaseLayout_js-hoc_withAuth_js","functions_blogs_js"], function() { return __webpack_exec__("./pages/blogs/editor/index.js"); });
module.exports = __webpack_exports__;

})();