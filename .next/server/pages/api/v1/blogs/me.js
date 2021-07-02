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
exports.id = "pages/api/v1/blogs/me";
exports.ids = ["pages/api/v1/blogs/me"];
exports.modules = {

/***/ "./pages/api/v1/blogs/me.js":
/*!**********************************!*\
  !*** ./pages/api/v1/blogs/me.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getUserBlogs; }\n/* harmony export */ });\n/* harmony import */ var _serv_api_blogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../serv/api/blogs */ \"./serv/api/blogs.js\");\n/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/auth0 */ \"./utils/auth0.js\");\n\n\nasync function getUserBlogs(req, res) {\n  try {\n    const {\n      accessToken\n    } = await _utils_auth0__WEBPACK_IMPORTED_MODULE_1__.default.getSession(req);\n    const json = await new _serv_api_blogs__WEBPACK_IMPORTED_MODULE_0__.default(accessToken).getByUser();\n    return res.json(json.data);\n  } catch (e) {\n    return res.status(e.status || 422).json(e.response.data);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raXNob24tcG9ydGZvbGlvLXdlYnNpdGUvLi9wYWdlcy9hcGkvdjEvYmxvZ3MvbWUuanM/YjA5YSJdLCJuYW1lcyI6WyJnZXRVc2VyQmxvZ3MiLCJyZXEiLCJyZXMiLCJhY2Nlc3NUb2tlbiIsImF1dGgwIiwianNvbiIsIkJsb2dBcGkiLCJnZXRCeVVzZXIiLCJkYXRhIiwiZSIsInN0YXR1cyIsInJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBR2UsZUFBZUEsWUFBZixDQUE0QkMsR0FBNUIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQ2pELE1BQUk7QUFDRixVQUFNO0FBQUVDO0FBQUYsUUFBa0IsTUFBTUMsNERBQUEsQ0FBaUJILEdBQWpCLENBQTlCO0FBQ0EsVUFBTUksSUFBSSxHQUFHLE1BQU0sSUFBSUMsb0RBQUosQ0FBWUgsV0FBWixFQUF5QkksU0FBekIsRUFBbkI7QUFDQSxXQUFPTCxHQUFHLENBQUNHLElBQUosQ0FBU0EsSUFBSSxDQUFDRyxJQUFkLENBQVA7QUFDRCxHQUpELENBSUUsT0FBTUMsQ0FBTixFQUFTO0FBQ1QsV0FBT1AsR0FBRyxDQUFDUSxNQUFKLENBQVdELENBQUMsQ0FBQ0MsTUFBRixJQUFZLEdBQXZCLEVBQTRCTCxJQUE1QixDQUFpQ0ksQ0FBQyxDQUFDRSxRQUFGLENBQVdILElBQTVDLENBQVA7QUFDRDtBQUNGIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3YxL2Jsb2dzL21lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJsb2dBcGkgZnJvbSAnLi4vLi4vLi4vLi4vc2Vydi9hcGkvYmxvZ3MnO1xuaW1wb3J0IGF1dGgwIGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2F1dGgwJztcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyQmxvZ3MocmVxLCByZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBhY2Nlc3NUb2tlbiB9ID0gYXdhaXQgYXV0aDAuZ2V0U2Vzc2lvbihyZXEpO1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IG5ldyBCbG9nQXBpKGFjY2Vzc1Rva2VuKS5nZXRCeVVzZXIoKTtcbiAgICAgIHJldHVybiByZXMuanNvbihqc29uLmRhdGEpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMgfHwgNDIyKS5qc29uKGUucmVzcG9uc2UuZGF0YSk7XG4gICAgfVxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/v1/blogs/me.js\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["utils_auth0_js","serv_api_blogs_js"], function() { return __webpack_exec__("./pages/api/v1/blogs/me.js"); });
module.exports = __webpack_exports__;

})();