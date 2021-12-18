(function() {
var exports = {};
exports.id = 920;
exports.ids = [920];
exports.modules = {

/***/ 9265:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getUserBlogs; }
/* harmony export */ });
/* harmony import */ var utils_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1051);
/* harmony import */ var serv_api_blogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3717);


async function getUserBlogs(req, res) {
  try {
    const {
      accessToken
    } = await utils_auth0__WEBPACK_IMPORTED_MODULE_0__/* .default.getSession */ .ZP.getSession(req);
    const json = await new serv_api_blogs__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z(accessToken).getByUser();
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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [51,717], function() { return __webpack_exec__(9265); });
module.exports = __webpack_exports__;

})();