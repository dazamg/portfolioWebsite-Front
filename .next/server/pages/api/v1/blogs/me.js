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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ getUserBlogs; }\n/* harmony export */ });\n/* harmony import */ var utils_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/auth0 */ \"./utils/auth0.js\");\n/* harmony import */ var serv_api_blogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! serv/api/blogs */ \"./serv/api/blogs.js\");\n\n\nasync function getUserBlogs(req, res) {\n  try {\n    const {\n      accessToken\n    } = await utils_auth0__WEBPACK_IMPORTED_MODULE_0__.default.getSession(req);\n    const json = await new serv_api_blogs__WEBPACK_IMPORTED_MODULE_1__.default(accessToken).getByUser();\n    return res.json(json.data);\n  } catch (e) {\n    return res.status(e.status || 422).json(e.response.data);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raXNob24tcG9ydGZvbGlvLXdlYnNpdGUvLi9wYWdlcy9hcGkvdjEvYmxvZ3MvbWUuanM/YjA5YSJdLCJuYW1lcyI6WyJnZXRVc2VyQmxvZ3MiLCJyZXEiLCJyZXMiLCJhY2Nlc3NUb2tlbiIsImF1dGgwIiwianNvbiIsIkJsb2dBcGkiLCJnZXRCeVVzZXIiLCJkYXRhIiwiZSIsInN0YXR1cyIsInJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBR2UsZUFBZUEsWUFBZixDQUE0QkMsR0FBNUIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQ2pELE1BQUk7QUFDRixVQUFNO0FBQUVDO0FBQUYsUUFBa0IsTUFBTUMsMkRBQUEsQ0FBaUJILEdBQWpCLENBQTlCO0FBQ0EsVUFBTUksSUFBSSxHQUFHLE1BQU0sSUFBSUMsbURBQUosQ0FBWUgsV0FBWixFQUF5QkksU0FBekIsRUFBbkI7QUFDQSxXQUFPTCxHQUFHLENBQUNHLElBQUosQ0FBU0EsSUFBSSxDQUFDRyxJQUFkLENBQVA7QUFDRCxHQUpELENBSUUsT0FBTUMsQ0FBTixFQUFTO0FBQ1QsV0FBT1AsR0FBRyxDQUFDUSxNQUFKLENBQVdELENBQUMsQ0FBQ0MsTUFBRixJQUFZLEdBQXZCLEVBQTRCTCxJQUE1QixDQUFpQ0ksQ0FBQyxDQUFDRSxRQUFGLENBQVdILElBQTVDLENBQVA7QUFDRDtBQUNGIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3YxL2Jsb2dzL21lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGgwIGZyb20gJ3V0aWxzL2F1dGgwJztcbmltcG9ydCBCbG9nQXBpIGZyb20gJ3NlcnYvYXBpL2Jsb2dzJztcblxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyQmxvZ3MocmVxLCByZXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBhY2Nlc3NUb2tlbiB9ID0gYXdhaXQgYXV0aDAuZ2V0U2Vzc2lvbihyZXEpO1xuICAgICAgY29uc3QganNvbiA9IGF3YWl0IG5ldyBCbG9nQXBpKGFjY2Vzc1Rva2VuKS5nZXRCeVVzZXIoKTtcbiAgICAgIHJldHVybiByZXMuanNvbihqc29uLmRhdGEpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoZS5zdGF0dXMgfHwgNDIyKS5qc29uKGUucmVzcG9uc2UuZGF0YSk7XG4gICAgfVxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/v1/blogs/me.js\n");

/***/ }),

/***/ "./serv/api/BaseApi.js":
/*!*****************************!*\
  !*** ./serv/api/BaseApi.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass BaseApi {\n  constructor(accessToken, subPath) {\n    this.config = {};\n\n    if (accessToken) {\n      this.config.headers = {\n        authorization: `Bearer ${accessToken}`\n      };\n    }\n\n    this.apiUrl = process.env.PORTFOLIO_API_URL + subPath;\n  }\n\n  getAll() {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(this.apiUrl);\n  }\n\n  getByUser() {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${this.apiUrl}/me`, this.config);\n  }\n\n  getById(id) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${this.apiUrl}/${id}`);\n  }\n\n  getBySlug(slug) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${this.apiUrl}/s/${slug}`);\n  }\n\n  create(data) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().post(this.apiUrl, data, this.config);\n  }\n\n  update(id, data) {\n    return axios__WEBPACK_IMPORTED_MODULE_0___default().patch(`${this.apiUrl}/${id}`, data, this.config);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseApi); //   getAll() {\n//     return axios.get(this.apiUrl)\n//   }\n//   delete(id) {\n//     return axios.delete(`${this.apiUrl}/${id}`, this.config);\n//   }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raXNob24tcG9ydGZvbGlvLXdlYnNpdGUvLi9zZXJ2L2FwaS9CYXNlQXBpLmpzPzQ1NDYiXSwibmFtZXMiOlsiQmFzZUFwaSIsImNvbnN0cnVjdG9yIiwiYWNjZXNzVG9rZW4iLCJzdWJQYXRoIiwiY29uZmlnIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJhcGlVcmwiLCJwcm9jZXNzIiwiZW52IiwiUE9SVEZPTElPX0FQSV9VUkwiLCJnZXRBbGwiLCJheGlvcyIsImdldEJ5VXNlciIsImdldEJ5SWQiLCJpZCIsImdldEJ5U2x1ZyIsInNsdWciLCJjcmVhdGUiLCJkYXRhIiwidXBkYXRlIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTs7QUFFQSxNQUFNQSxPQUFOLENBQWM7QUFFWkMsYUFBVyxDQUFDQyxXQUFELEVBQWNDLE9BQWQsRUFBdUI7QUFDaEMsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7O0FBRUEsUUFBSUYsV0FBSixFQUFpQjtBQUNmLFdBQUtFLE1BQUwsQ0FBWUMsT0FBWixHQUFzQjtBQUNwQkMscUJBQWEsRUFBRyxVQUFTSixXQUFZO0FBRGpCLE9BQXRCO0FBR0Q7O0FBRUQsU0FBS0ssTUFBTCxHQUFjQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsaUJBQVosR0FBZ0NQLE9BQTlDO0FBQ0Q7O0FBRURRLFFBQU0sR0FBRztBQUNQLFdBQU9DLGdEQUFBLENBQVUsS0FBS0wsTUFBZixDQUFQO0FBQ0Q7O0FBRURNLFdBQVMsR0FBRTtBQUNULFdBQU9ELGdEQUFBLENBQVcsR0FBRSxLQUFLTCxNQUFPLEtBQXpCLEVBQStCLEtBQUtILE1BQXBDLENBQVA7QUFDRDs7QUFFRFUsU0FBTyxDQUFDQyxFQUFELEVBQUs7QUFDVixXQUFPSCxnREFBQSxDQUFXLEdBQUUsS0FBS0wsTUFBTyxJQUFHUSxFQUFHLEVBQS9CLENBQVA7QUFDRDs7QUFFREMsV0FBUyxDQUFDQyxJQUFELEVBQU87QUFDZCxXQUFPTCxnREFBQSxDQUFXLEdBQUUsS0FBS0wsTUFBTyxNQUFLVSxJQUFLLEVBQW5DLENBQVA7QUFDRDs7QUFFREMsUUFBTSxDQUFDQyxJQUFELEVBQU87QUFDWCxXQUFPUCxpREFBQSxDQUFXLEtBQUtMLE1BQWhCLEVBQXdCWSxJQUF4QixFQUE4QixLQUFLZixNQUFuQyxDQUFQO0FBQ0Q7O0FBRURnQixRQUFNLENBQUNMLEVBQUQsRUFBS0ksSUFBTCxFQUFXO0FBQ2YsV0FBT1Asa0RBQUEsQ0FBYSxHQUFFLEtBQUtMLE1BQU8sSUFBR1EsRUFBRyxFQUFqQyxFQUFvQ0ksSUFBcEMsRUFBMEMsS0FBS2YsTUFBL0MsQ0FBUDtBQUNEOztBQXBDVzs7QUF5Q2QsK0RBQWVKLE9BQWYsRSxDQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NlcnYvYXBpL0Jhc2VBcGkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jbGFzcyBCYXNlQXBpIHtcblxuICBjb25zdHJ1Y3RvcihhY2Nlc3NUb2tlbiwgc3ViUGF0aCkge1xuICAgIHRoaXMuY29uZmlnID0ge31cblxuICAgIGlmIChhY2Nlc3NUb2tlbikge1xuICAgICAgdGhpcy5jb25maWcuaGVhZGVycyA9IHtcbiAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWBcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFwaVVybCA9IHByb2Nlc3MuZW52LlBPUlRGT0xJT19BUElfVVJMICsgc3ViUGF0aDtcbiAgfVxuXG4gIGdldEFsbCgpIHtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KHRoaXMuYXBpVXJsKVxuICB9XG5cbiAgZ2V0QnlVc2VyKCl7XG4gICAgcmV0dXJuIGF4aW9zLmdldChgJHt0aGlzLmFwaVVybH0vbWVgLCB0aGlzLmNvbmZpZyk7XG4gIH1cblxuICBnZXRCeUlkKGlkKSB7XG4gICAgcmV0dXJuIGF4aW9zLmdldChgJHt0aGlzLmFwaVVybH0vJHtpZH1gKTtcbiAgfVxuXG4gIGdldEJ5U2x1ZyhzbHVnKSB7XG4gICAgcmV0dXJuIGF4aW9zLmdldChgJHt0aGlzLmFwaVVybH0vcy8ke3NsdWd9YCk7XG4gIH1cblxuICBjcmVhdGUoZGF0YSkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KHRoaXMuYXBpVXJsLCBkYXRhLCB0aGlzLmNvbmZpZyk7XG4gIH1cbiAgXG4gIHVwZGF0ZShpZCwgZGF0YSkge1xuICAgIHJldHVybiBheGlvcy5wYXRjaChgJHt0aGlzLmFwaVVybH0vJHtpZH1gLCBkYXRhLCB0aGlzLmNvbmZpZyk7XG4gIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VBcGk7XG5cblxuLy8gICBnZXRBbGwoKSB7XG4vLyAgICAgcmV0dXJuIGF4aW9zLmdldCh0aGlzLmFwaVVybClcbi8vICAgfVxuXG5cbi8vICAgZGVsZXRlKGlkKSB7XG4vLyAgICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHt0aGlzLmFwaVVybH0vJHtpZH1gLCB0aGlzLmNvbmZpZyk7XG4vLyAgIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./serv/api/BaseApi.js\n");

/***/ }),

/***/ "./serv/api/blogs.js":
/*!***************************!*\
  !*** ./serv/api/blogs.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BaseApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseApi */ \"./serv/api/BaseApi.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nclass BlogApi extends _BaseApi__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(accessToken) {\n    super(accessToken, '/blogs');\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogApi);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raXNob24tcG9ydGZvbGlvLXdlYnNpdGUvLi9zZXJ2L2FwaS9ibG9ncy5qcz9lYWZkIl0sIm5hbWVzIjpbIkJsb2dBcGkiLCJCYXNlQXBpIiwiY29uc3RydWN0b3IiLCJhY2Nlc3NUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTixTQUFzQkMsNkNBQXRCLENBQTZCO0FBRTNCQyxhQUFXLENBQUNDLFdBQUQsRUFBYztBQUN2QixVQUFNQSxXQUFOLEVBQW1CLFFBQW5CO0FBQ0Q7O0FBSjBCOztBQVU3QiwrREFBZUgsT0FBZiIsImZpbGUiOiIuL3NlcnYvYXBpL2Jsb2dzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VBcGkgZnJvbSBcIi4vQmFzZUFwaVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY2xhc3MgQmxvZ0FwaSBleHRlbmRzIEJhc2VBcGl7XG5cbiAgY29uc3RydWN0b3IoYWNjZXNzVG9rZW4pIHtcbiAgICBzdXBlcihhY2Nlc3NUb2tlbiwgJy9ibG9ncycpO1xuICB9XG4gIFxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgQmxvZ0FwaTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./serv/api/blogs.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["utils_auth0_js"], function() { return __webpack_exec__("./pages/api/v1/blogs/me.js"); });
module.exports = __webpack_exports__;

})();