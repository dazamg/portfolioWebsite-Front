exports.id = 378;
exports.ids = [378];
exports.modules = {

/***/ 7378:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sS": function() { return /* binding */ useCreateBlog; },
/* harmony export */   "XP": function() { return /* binding */ useUpdateBlog; },
/* harmony export */   "B4": function() { return /* binding */ useGetBlog; },
/* harmony export */   "JN": function() { return /* binding */ useGetUserBlogs; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9593);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7749);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const createBlog = data => axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/v1/blogs', data);

const updateBlog = (id, data) => axios__WEBPACK_IMPORTED_MODULE_0___default().patch(`/api/v1/blogs/${id}`, data); // const deleteBlog = (id) => axios.delete(`/api/v1/portfolios/${id}`);


const useCreateBlog = () => (0,functions__WEBPACK_IMPORTED_MODULE_1__/* .useApiHandler */ .k)(createBlog);
const useUpdateBlog = () => (0,functions__WEBPACK_IMPORTED_MODULE_1__/* .useApiHandler */ .k)(updateBlog); // export const useDeleteBlog = () => useApiHandler(deleteBlog);

const useGetBlog = id => {
  const _useSWR = swr__WEBPACK_IMPORTED_MODULE_2___default()(id ? `/api/v1/blogs/${id}` : null, functions__WEBPACK_IMPORTED_MODULE_1__/* .fetcher */ ._),
        {
    data,
    error
  } = _useSWR,
        rest = _objectWithoutProperties(_useSWR, ["data", "error"]);

  return _objectSpread({
    data,
    error,
    loading: !data && !error
  }, rest);
};
const useGetUserBlogs = () => {
  const _useSWR2 = swr__WEBPACK_IMPORTED_MODULE_2___default()(`/api/v1/blogs/me`, functions__WEBPACK_IMPORTED_MODULE_1__/* .fetcher */ ._),
        {
    data,
    error
  } = _useSWR2,
        rest = _objectWithoutProperties(_useSWR2, ["data", "error"]);

  return _objectSpread({
    data,
    error,
    loading: !data && !error
  }, rest);
};

/***/ })

};
;