(function() {
var exports = {};
exports.id = 270;
exports.ids = [270];
exports.modules = {

/***/ 5820:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ portfolios; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/layouts/BaseLayout.js + 2 modules
var BaseLayout = __webpack_require__(3299);
// EXTERNAL MODULE: ./components/BasePage.js
var BasePage = __webpack_require__(4301);
// EXTERNAL MODULE: ./functions/user.js
var user = __webpack_require__(3205);
// EXTERNAL MODULE: ./functions/portfolios.js
var functions_portfolios = __webpack_require__(2309);
// EXTERNAL MODULE: ./serv/api/portfolios.js
var api_portfolios = __webpack_require__(3461);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
;// CONCATENATED MODULE: ./components/PortfolioCard.js




const PortfolioCard = ({
  portfolio,
  children
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Card, {
  className: "portfolio-card",
  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.CardHeader, {
    className: "portfolio-card-header",
    children: [portfolio.company, " "]
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.CardBody, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      className: "portfolio-card-city",
      children: [portfolio.location, " "]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.CardTitle, {
      className: "portfolio-card-title",
      children: portfolio.jobTitle
    }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.CardText, {
      className: "portfolio-card-text",
      children: portfolio.description.split('\n')[0]
    }), children]
  })]
});

/* harmony default export */ var components_PortfolioCard = (PortfolioCard);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./utils/auth0.js
var auth0 = __webpack_require__(1051);
;// CONCATENATED MODULE: ./pages/portfolios/index.js














const Portfolios = ({
  portfolios: initialPortfolio
}) => {
  const router = (0,router_.useRouter)();
  const [deletePortfolio, {
    data,
    error
  }] = (0,functions_portfolios/* useDeletePortfolio */.k$)();
  const {
    data: dataU,
    loading: loadingU
  } = (0,user/* useGetUser */.p)();
  const {
    0: portfolios,
    1: setPortfolios
  } = (0,external_react_.useState)(initialPortfolio);

  const _deletePortfolio = async (e, portfolioId) => {
    e.stopPropagation();
    const isConfirm = confirm('Are you sure you want to delete this portfolio?');

    if (isConfirm) {
      await deletePortfolio(portfolioId);
      setPortfolios(portfolios.filter(p => p._id !== portfolioId));
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(BaseLayout/* default */.Z, {
    user: dataU,
    loading: loadingU,
    children: /*#__PURE__*/jsx_runtime_.jsx(BasePage/* default */.Z, {
      title: "Portfolios list - Kishon StClair",
      header: "Portfolios",
      className: "portfolio-page",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Row, {
        children: portfolios.map(portfolio => /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
          onClick: () => {
            router.push('/portfolios/[id]', `/portfolios/${portfolio._id}`);
          },
          md: "4",
          children: /*#__PURE__*/jsx_runtime_.jsx(components_PortfolioCard, {
            portfolio: portfolio,
            children: dataU && (0,auth0/* isAuthorized */.QO)(dataU, 'admin') && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Button, {
                onClick: e => {
                  e.stopPropagation();
                  router.push('/portfolios/[id]/edit', `/portfolios/${portfolio._id}/edit`);
                },
                className: "mr-2",
                color: "warning",
                children: "Edit"
              }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Button, {
                onClick: e => _deletePortfolio(e, portfolio._id),
                color: "danger",
                children: "Delete"
              })]
            })
          })
        }, portfolio._id))
      })
    })
  });
};

async function getStaticProps() {
  const json = await new api_portfolios/* default */.Z().getAll();
  const portfolios = json.data;
  return {
    props: {
      portfolios
    },
    revalidate: 1
  };
}
/* harmony default export */ var portfolios = (Portfolios);

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
var __webpack_exports__ = __webpack_require__.X(0, [664,51,92,205,461,468], function() { return __webpack_exec__(5820); });
module.exports = __webpack_exports__;

})();