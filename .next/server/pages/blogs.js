(function() {
var exports = {};
exports.id = 55;
exports.ids = [55];
exports.modules = {

/***/ 6193:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6099);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);




const Masthead = ({
  children,
  imagePath
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
  className: "masthead",
  style: {
    "backgroundImage": `url(${imagePath})`
  },
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "overlay"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-lg-8 col-md-10 mx-auto",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "site-heading",
          children: children
        })
      })
    })
  })]
});

/* harmony default export */ __webpack_exports__["Z"] = (Masthead);

/***/ }),

/***/ 9837:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ blogs; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/layouts/BaseLayout.js + 2 modules
var BaseLayout = __webpack_require__(3299);
// EXTERNAL MODULE: ./components/BasePage.js
var BasePage = __webpack_require__(4301);
// EXTERNAL MODULE: ./functions/user.js
var user = __webpack_require__(3205);
// EXTERNAL MODULE: ./components/shared/Masthead.js
var Masthead = __webpack_require__(6193);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
// EXTERNAL MODULE: ./serv/api/blogs.js
var api_blogs = __webpack_require__(3717);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2470);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: ./components/BlogCard.js






const BlogCard = ({
  blog
}) => /*#__PURE__*/jsx_runtime_.jsx("div", {
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "post-preview clickable",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/blogs/[slug]",
      as: `/blogs/${blog.slug}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: "post-title",
          children: blog.title
        }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: "post-subtitle",
          children: blog.subTitle
        })]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      className: "post-meta",
      children: ["Posted by", /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        href: "#",
        children: [" ", blog.author.name, " "]
      }), "- ", external_moment_default()(blog.createdAt).format('LLLL')]
    })]
  })
});

/* harmony default export */ var components_BlogCard = (BlogCard);
;// CONCATENATED MODULE: ./pages/blogs/index.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Blogs = ({
  blogs
}) => {
  const {
    data,
    loading
  } = (0,user/* useGetUser */.p)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(BaseLayout/* default */.Z, {
    navClass: "transparent",
    className: "blog-listing-page",
    user: data,
    loading: loading,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Masthead/* default */.Z, {
      imagePath: "/images/blog-img.jpeg",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        children: "Fresh Blogs"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "subheading",
        children: "Programming, travelling..."
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(BasePage/* default */.Z, {
      title: "Blogs - Kishon StClair",
      className: "blog-body",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Row, {
        children: blogs.map(blog => /*#__PURE__*/jsx_runtime_.jsx(components_BlogCard, {
          blog: blog
        }))
      })
    })]
  });
};

async function getStaticProps() {
  const {
    data
  } = await new api_blogs/* default */.Z().getAll();
  const blogs = data.map(item => _objectSpread(_objectSpread({}, item.blog), {}, {
    author: item.author
  }));
  return {
    props: {
      blogs
    },
    revalidate: 60
  };
}
/* harmony default export */ var blogs = (Blogs);

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

/***/ }),

/***/ 2470:
/***/ (function(module) {

"use strict";
module.exports = require("moment");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 4300:
/***/ (function(module) {

"use strict";
module.exports = require("react-resize-detector");;

/***/ }),

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 6099:
/***/ (function(module) {

"use strict";
module.exports = require("reactstrap");;

/***/ }),

/***/ 7749:
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,51,92,205,717], function() { return __webpack_exec__(9837); });
module.exports = __webpack_exports__;

})();