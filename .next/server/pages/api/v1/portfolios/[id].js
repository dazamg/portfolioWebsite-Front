(function() {
var exports = {};
exports.id = 412;
exports.ids = [412];
exports.modules = {

/***/ 6331:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handlePortfolio; }
/* harmony export */ });
/* harmony import */ var _serv_api_portfolios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3461);
/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1051);


async function handlePortfolio(req, res) {
  if (req.method === 'GET') {
    const json = await new _serv_api_portfolios__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z().getById(req.query.id);
    return res.json(json.data);
  }

  if (req.method === 'PATCH') {
    try {
      const {
        accessToken
      } = await _utils_auth0__WEBPACK_IMPORTED_MODULE_1__/* .default.getSession */ .ZP.getSession(req);
      const json = await new _serv_api_portfolios__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z(accessToken).update(req.query.id, req.body);
      return res.json(json.data);
    } catch (e) {
      return res.status(e.status || 422).json(e.response.data);
    }
  }

  if (req.method === 'DELETE') {
    const {
      accessToken
    } = await _utils_auth0__WEBPACK_IMPORTED_MODULE_1__/* .default.getSession */ .ZP.getSession(req);
    const json = await new _serv_api_portfolios__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z(accessToken).delete(req.query.id);
    return res.json(json.data);
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
var __webpack_exports__ = __webpack_require__.X(0, [51,461], function() { return __webpack_exec__(6331); });
module.exports = __webpack_exports__;

})();