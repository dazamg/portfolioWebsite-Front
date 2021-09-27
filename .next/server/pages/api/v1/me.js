(function() {
var exports = {};
exports.id = 555;
exports.ids = [555];
exports.modules = {

/***/ 2424:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ me; }
/* harmony export */ });
/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1051);

async function me(req, res) {
  try {
    await _utils_auth0__WEBPACK_IMPORTED_MODULE_0__/* .default.handleProfile */ .ZP.handleProfile(req, res);
  } catch (error) {
    res.status(error.status || 400).end(error.message);
  }
}

/***/ }),

/***/ 4084:
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
var __webpack_exports__ = __webpack_require__.X(0, [51], function() { return __webpack_exec__(2424); });
module.exports = __webpack_exports__;

})();