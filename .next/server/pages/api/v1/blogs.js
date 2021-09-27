(function() {
var exports = {};
exports.id = 831;
exports.ids = [831];
exports.modules = {

/***/ 8115:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ createBlog; }
/* harmony export */ });
/* harmony import */ var _serv_api_blogs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3717);
/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1051);


async function createBlog(req, res) {
  try {
    const {
      accessToken
    } = await _utils_auth0__WEBPACK_IMPORTED_MODULE_1__/* .default.getSession */ .ZP.getSession(req);
    const json = await new _serv_api_blogs__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z(accessToken).create(req.body);
    return res.json(json.data);
  } catch (e) {
    return res.status(e.status || 422).json(e.response.data);
  }
}

/***/ }),

/***/ 4084:
/***/ (function(module) {

"use strict";
module.exports = require("@auth0/nextjs-auth0");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [51,717], function() { return __webpack_exec__(8115); });
module.exports = __webpack_exports__;

})();