exports.id = 717;
exports.ids = [717];
exports.modules = {

/***/ 2549:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


class BaseApi {
  constructor(accessToken, subPath) {
    this.config = {};

    if (accessToken) {
      this.config.headers = {
        authorization: `Bearer ${accessToken}`
      };
    }

    this.apiUrl = process.env.PORTFOLIO_API_URL + subPath;
  }

  getAll() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(this.apiUrl);
  }

  getByUser() {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${this.apiUrl}/me`, this.config);
  }

  getById(id) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${this.apiUrl}/${id}`);
  }

  getBySlug(slug) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${this.apiUrl}/s/${slug}`);
  }

  create(data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().post(this.apiUrl, data, this.config);
  }

  update(id, data) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default().patch(`${this.apiUrl}/${id}`, data, this.config);
  }

}

/* harmony default export */ __webpack_exports__["Z"] = (BaseApi); //   getAll() {
//     return axios.get(this.apiUrl)
//   }
//   delete(id) {
//     return axios.delete(`${this.apiUrl}/${id}`, this.config);
//   }

/***/ }),

/***/ 3717:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _BaseApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2549);


class BlogApi extends _BaseApi__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z {
  constructor(accessToken) {
    super(accessToken, '/blogs');
  }

}

/* harmony default export */ __webpack_exports__["Z"] = (BlogApi);

/***/ })

};
;