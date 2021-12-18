(function() {
var exports = {};
exports.id = 196;
exports.ids = [196];
exports.modules = {

/***/ 6769:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
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
// EXTERNAL MODULE: ./serv/api/blogs.js
var blogs = __webpack_require__(3717);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
// EXTERNAL MODULE: external "slate-simple-editor"
var external_slate_simple_editor_ = __webpack_require__(8300);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2470);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: ./components/shared/Avatar.js




const Avatar = ({
  image,
  title,
  date
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "media avator-box mb-2",
  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
    className: "mr-2",
    src: image
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "media-body align-self-center",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
      className: "mt-0 mb-0",
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "mt-0 subtitle",
      children: external_moment_default()(date).format('LLL')
    })]
  })]
});

/* harmony default export */ var shared_Avatar = (Avatar);
;// CONCATENATED MODULE: ./pages/blogs/[slug].js










const BlogDetail = ({
  blog,
  author
}) => {
  const {
    data,
    loading
  } = (0,user/* useGetUser */.p)();
  return /*#__PURE__*/jsx_runtime_.jsx(BaseLayout/* default */.Z, {
    user: data,
    loading: loading,
    children: /*#__PURE__*/jsx_runtime_.jsx(BasePage/* default */.Z, {
      title: `${blog.title} - Kishon StClair`,
      metaDescription: blog.subTitle,
      className: "slate-container",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Row, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
          md: {
            size: 8,
            offset: 2
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(shared_Avatar, {
            title: author.name,
            image: author.picture,
            date: blog.createdAt
          }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx(external_slate_simple_editor_.SlateView, {
            initialContent: blog.content
          })]
        })
      })
    })
  });
};

async function getStaticPaths() {
  const {
    data
  } = await new blogs/* default */.Z().getAll();
  const paths = data.map(({
    blog
  }) => ({
    params: {
      slug: blog.slug
    }
  }));
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const {
    data: {
      blog,
      author
    }
  } = await new blogs/* default */.Z().getBySlug(params.slug);
  return {
    props: {
      blog,
      author
    },
    revalidate: 60
  };
}
/* harmony default export */ var _slug_ = (BlogDetail);

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

/***/ 8300:
/***/ (function(module) {

"use strict";
module.exports = require("slate-simple-editor");;

/***/ }),

/***/ 7749:
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,51,92,205,717], function() { return __webpack_exec__(6769); });
module.exports = __webpack_exports__;

})();