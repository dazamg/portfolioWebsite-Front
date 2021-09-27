exports.id = 51;
exports.ids = [51];
exports.modules = {

/***/ 1051:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QO": function() { return /* binding */ isAuthorized; },
/* harmony export */   "Jc": function() { return /* binding */ withAuth; }
/* harmony export */ });
/* unused harmony export authorizeUser */
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4084);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const auth0 = (0,_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__.initAuth0)({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENTID,
  clientSecret: process.env.AUTH0_CLIENTSECRET,
  scope: 'openid profile',
  audience: process.env.AUTH0_AUDIENCE,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_POSTLOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.AUTH0_COOKIE_SECRET,
    storeAccessToken: true
  }
});
/* harmony default export */ __webpack_exports__["ZP"] = (auth0);
const isAuthorized = (user, role) => {
  return user && user["https://kishonstclair.com" + '/roles'].includes(role);
};
const authorizeUser = async (req, res) => {
  const session = await auth0.getSession(req);

  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/api/v1/login'
    });
    res.end();
    return null;
  }

  return session.user;
};
const withAuth = getData => role => async ({
  req,
  res
}) => {
  const session = await auth0.getSession(req);

  if (!session || !session.user || role && !isAuthorized(session.user, role)) {
    res.writeHead(302, {
      Location: '/api/v1/login'
    });
    res.end();
    return {
      props: {}
    };
  }

  const data = getData ? await getData({
    req,
    res
  }, session.user) : {};
  return {
    props: _objectSpread({
      user: session.user
    }, data)
  };
};

/***/ })

};
;