(function() {
var exports = {};
exports.id = 411;
exports.ids = [411];
exports.modules = {

/***/ 594:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _id_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/layouts/BaseLayout.js + 2 modules
var BaseLayout = __webpack_require__(3299);
// EXTERNAL MODULE: ./components/BasePage.js
var BasePage = __webpack_require__(4301);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2470);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
;// CONCATENATED MODULE: ./helpers/function.js

const formatDate = (date, dateFormat = 'LL') => date && external_moment_default()(date).format(dateFormat);
// EXTERNAL MODULE: ./functions/user.js
var user = __webpack_require__(3205);
// EXTERNAL MODULE: ./serv/api/portfolios.js
var api_portfolios = __webpack_require__(3461);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./pages/portfolios/[id]/index.js










const Portfolio = ({
  portfolio
}) => {
  const router = (0,router_.useRouter)();
  const {
    data: dataU,
    loading: loadingU
  } = (0,user/* useGetUser */.p)();

  if (router.isFallback) {
    return 'Loading...';
  }

  return /*#__PURE__*/jsx_runtime_.jsx(BaseLayout/* default */.Z, {
    navClass: "transparent",
    user: dataU,
    loading: loadingU,
    children: /*#__PURE__*/jsx_runtime_.jsx(BasePage/* default */.Z, {
      noWrapper: true,
      className: "portfolio-detail",
      title: `${portfolio.title} - Kishon St Clair`,
      metaDescription: portfolio.description,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
        className: "mt-5",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
          md: "6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "cover-container d-flex h-100 p-3 mx-auto flex-column",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
              role: "main",
              className: "inner page-cover ",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
                className: "cover-heading",
                children: [portfolio.title, " "]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                className: "lead dates",
                children: [formatDate(portfolio.startDate), " - ", formatDate(portfolio.endDate) || 'Present']
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                className: "lead info mb-0 color",
                children: [portfolio.jobTitle, " | ", portfolio.company, " | ", portfolio.location]
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "lead",
                children: portfolio.description
              }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "lead",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: portfolio.companyWebsite,
                  target: "_",
                  className: "btn btn-lg btn-secondary",
                  children: "Visit Company"
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("divider", {})]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "left-side",
              src: portfolio.images[0]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: "lead-1",
            children: ["Tech Stack: ", portfolio.techStack]
          })]
        })]
      })
    })
  }); // return (
  //   <BaseLayout
  //     navClass="transparent"
  //     user={dataU} loading={loadingU}>
  //     <BasePage
  //       noWrapper
  //       indexPage
  //       title={`${portfolio.title} - Kishon StClair`}
  //       metaDescription={portfolio.description}>
  //       <div className="portfolio-detail">
  //         <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
  //           <main role="main" class="inner page-cover">
  //             <h1 className="cover-heading">{portfolio.title}</h1>
  //             <p className="lead dates">{formatDate(portfolio.startDate)} - {formatDate(portfolio.endDate) || 'Present'}</p>
  //             <p className="lead info mb-0">{portfolio.jobTitle} | {portfolio.company} | {portfolio.location}</p>
  //             <p className="lead">{portfolio.description}</p>
  //             <p className="lead">
  //               <a href={portfolio.companyWebsite} target="_" className="btn btn-lg btn-secondary">Visit Company</a>
  //             </p>
  //           </main>
  //         </div>
  //       </div>
  //     </BasePage>
  //   </BaseLayout>
  // )
};

async function getStaticPaths() {
  console.log('reexecuting getStaticPaths');
  const json = await new api_portfolios/* default */.Z().getAll();
  const portfolios = json.data;
  const paths = portfolios.map(portfolio => {
    return {
      params: {
        id: portfolio._id
      }
    };
  });
  return {
    paths,
    fallback: true
  };
}
async function getStaticProps({
  params
}) {
  console.log('reexecuting getStaticProps');
  const json = await new api_portfolios/* default */.Z().getById(params.id);
  const portfolio = json.data;
  return {
    props: {
      portfolio
    },
    revalidate: 1
  };
}
/* harmony default export */ var _id_ = (Portfolio);

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,51,92,205,461], function() { return __webpack_exec__(594); });
module.exports = __webpack_exports__;

})();