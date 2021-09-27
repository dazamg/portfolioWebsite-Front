exports.id = 874;
exports.ids = [874];
exports.modules = {

/***/ 5748:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);



const Redirect = ({
  to,
  ssr
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (ssr) {
      window.location.pathname = to;
    } else {
      router.push(to);
    }
  }, []);
  return null;
};

/* harmony default export */ __webpack_exports__["Z"] = (Redirect);

/***/ }),

/***/ 5874:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3205);
/* harmony import */ var _components_shared_Redirect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5748);
/* harmony import */ var _utils_auth0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1051);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const withAuth = Component => role => {
  return props => {
    const {
      data,
      loading
    } = (0,_functions_user__WEBPACK_IMPORTED_MODULE_1__/* .useGetUser */ .p)();

    if (loading) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        children: "Loading..."
      });
    }

    if (!data) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_Redirect__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        ssr: true,
        to: "/api/v1/login"
      });
    } else {
      if (role && !(0,_utils_auth0__WEBPACK_IMPORTED_MODULE_3__/* .isAuthorized */ .QO)(data, role)) {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_Redirect__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
          ssr: true,
          to: "/api/v1/login"
        });
      }

      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, _objectSpread({
        user: data,
        loading: loading
      }, props));
    }
  };
};

/* harmony default export */ __webpack_exports__["Z"] = (withAuth);

/***/ })

};
;