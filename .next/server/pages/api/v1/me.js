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
exports.id = "pages/api/v1/me";
exports.ids = ["pages/api/v1/me"];
exports.modules = {

/***/ "./pages/api/v1/me.js":
/*!****************************!*\
  !*** ./pages/api/v1/me.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ me; }\n/* harmony export */ });\n/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/auth0 */ \"./utils/auth0.js\");\n\nasync function me(req, res) {\n  try {\n    await _utils_auth0__WEBPACK_IMPORTED_MODULE_0__.default.handleProfile(req, res);\n  } catch (error) {\n    res.status(error.status || 400).end(error.message);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raXNob24tcG9ydGZvbGlvLXdlYnNpdGUvLi9wYWdlcy9hcGkvdjEvbWUuanM/NTdmYiJdLCJuYW1lcyI6WyJtZSIsInJlcSIsInJlcyIsImF1dGgwIiwiZXJyb3IiLCJzdGF0dXMiLCJlbmQiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRWUsZUFBZUEsRUFBZixDQUFrQkMsR0FBbEIsRUFBdUJDLEdBQXZCLEVBQTRCO0FBQ3pDLE1BQUk7QUFDRixVQUFNQywrREFBQSxDQUFvQkYsR0FBcEIsRUFBeUJDLEdBQXpCLENBQU47QUFDRCxHQUZELENBRUUsT0FBTUUsS0FBTixFQUFhO0FBQ2JGLE9BQUcsQ0FBQ0csTUFBSixDQUFXRCxLQUFLLENBQUNDLE1BQU4sSUFBZ0IsR0FBM0IsRUFBZ0NDLEdBQWhDLENBQW9DRixLQUFLLENBQUNHLE9BQTFDO0FBQ0Q7QUFDRiIsImZpbGUiOiIuL3BhZ2VzL2FwaS92MS9tZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoMCBmcm9tICdAL3V0aWxzL2F1dGgwJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gbWUocmVxLCByZXMpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhdXRoMC5oYW5kbGVQcm9maWxlKHJlcSwgcmVzKTtcbiAgfSBjYXRjaChlcnJvcikge1xuICAgIHJlcy5zdGF0dXMoZXJyb3Iuc3RhdHVzIHx8IDQwMCkuZW5kKGVycm9yLm1lc3NhZ2UpO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/v1/me.js\n");

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@auth0/nextjs-auth0");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["utils_auth0_js"], function() { return __webpack_exec__("./pages/api/v1/me.js"); });
module.exports = __webpack_exports__;

})();