exports.id = 92;
exports.ids = [92];
exports.modules = {

/***/ 4301:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6099);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);








const PageHeader = ({
  header
}) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
  className: "page-header",
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
    className: "page-header-title",
    children: header
  })
});

const BasePage = props => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    noWrapper,
    indexPage,
    className = '',
    header,
    title = "Portfolio - Kishon ",
    metaDescription = "My name is Kishon StClair and I am an software engineer and freelance developer.",
    canonicalPath,
    children
  } = props;
  const pageType = indexPage ? 'index-page' : 'base-page';
  const Wrapper = noWrapper ? (react__WEBPACK_IMPORTED_MODULE_1___default().Fragment) : reactstrap__WEBPACK_IMPORTED_MODULE_2__.Container;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "description",
        content: metaDescription
      }, "description"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "title",
        content: title
      }, "title"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:title",
        content: title
      }, "og:title"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:locale",
        content: "en_US"
      }, "og:locale"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:url",
        content: `${process.env.BASE_URL}${router.asPath}`
      }, "og:url"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:type",
        content: "website"
      }, "og:type"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:description",
        content: metaDescription
      }, "og:description"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:image",
        content: `${process.env.BASE_URL}/images/section-1.jpg`
      }, "og:image"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap",
        rel: "stylesheet"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "/images/favicon.ico"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
        rel: "canonical",
        href: `${process.env.BASE_URL}${canonicalPath ? canonicalPath : router.asPath}`
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: `${pageType} ${className}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Wrapper, {
        children: [header && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageHeader, {
          header: header
        }), children]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (BasePage);

/***/ }),

/***/ 3299:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ layouts_BaseLayout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./utils/auth0.js
var auth0 = __webpack_require__(1051);
// EXTERNAL MODULE: external "react-resize-detector"
var external_react_resize_detector_ = __webpack_require__(4300);
var external_react_resize_detector_default = /*#__PURE__*/__webpack_require__.n(external_react_resize_detector_);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./components/shared/ActiveLink.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  const router = (0,router_.useRouter)();
  const child = external_react_.Children.only(children);
  let className = child.props.className || '';

  if (router.asPath === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`;
  }

  delete props.activeClassName;
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/external_react_default().cloneElement(child, {
      className
    })
  }));
};

/* harmony default export */ var shared_ActiveLink = (ActiveLink);
;// CONCATENATED MODULE: ./components/shared/Header.js










const BsNavLink = props => {
  const {
    href,
    title,
    className = ''
  } = props;
  return /*#__PURE__*/jsx_runtime_.jsx(shared_ActiveLink, {
    activeClassName: "active",
    href: href,
    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
      className: `nav-link port-navbar-link ${className}`,
      children: title
    })
  });
};

const BsNavBrand = () => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
  href: "/",
  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
    className: "navbar-brand port-navbar-brand",
    children: "Kishon St Clair"
  })
});

const LoginLink = () => /*#__PURE__*/jsx_runtime_.jsx("a", {
  className: "nav-link port-navbar-link",
  href: "/api/v1/login",
  children: "Login"
});

const LogoutLink = () => /*#__PURE__*/jsx_runtime_.jsx("a", {
  className: "nav-link port-navbar-link",
  href: "/api/v1/logout",
  children: "Logout"
});

const AdminMenu = () => {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Dropdown, {
    className: "port-navbar-link port-dropdown-menu",
    nav: true,
    isOpen: isOpen,
    toggle: () => setIsOpen(!isOpen),
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.DropdownToggle, {
      className: "port-dropdown-toggle",
      nav: true,
      caret: true,
      children: "Admin"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.DropdownMenu, {
      right: true,
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.DropdownItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx(BsNavLink, {
          className: "port-dropdown-item",
          href: "/portfolios/new",
          title: "Create Portfolio"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.DropdownItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx(BsNavLink, {
          className: "port-dropdown-item",
          href: "/blogs/editor",
          title: "Blog Editor"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.DropdownItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx(BsNavLink, {
          className: "port-dropdown-item",
          href: "/dashboard",
          title: "Dashboard"
        })
      })]
    })]
  });
};

const Header = ({
  user,
  loading,
  className
}) => {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);

  const toggle = () => setIsOpen(!isOpen);

  return /*#__PURE__*/jsx_runtime_.jsx((external_react_resize_detector_default()), {
    handleWidth: true,
    children: ({
      width
    }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Navbar, {
      className: `port-navbar port-default absolute ${className} ${width < 768 && isOpen ? 'is-open' : 'is-close'}`,
      dark: true,
      expand: "md",
      children: [/*#__PURE__*/jsx_runtime_.jsx(BsNavBrand, {}), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.NavbarToggler, {
        onClick: toggle
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Collapse, {
        isOpen: isOpen,
        navbar: true,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Nav, {
          className: "mr-auto",
          navbar: true,
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.NavItem, {
            className: "port-navbar-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(BsNavLink, {
              href: "/",
              title: "Home"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.NavItem, {
            className: "port-navbar-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(BsNavLink, {
              href: "/about",
              title: "About"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.NavItem, {
            className: "port-navbar-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(BsNavLink, {
              href: "/portfolios",
              title: "Portfolios"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.NavItem, {
            className: "port-navbar-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(BsNavLink, {
              href: "/blogs",
              title: "Blogs"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.NavItem, {
            className: "port-navbar-item",
            children: /*#__PURE__*/jsx_runtime_.jsx(BsNavLink, {
              href: "/cv",
              title: "Cv"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Nav, {
          navbar: true,
          children: !loading && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [user && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [(0,auth0/* isAuthorized */.QO)(user, 'admin') && /*#__PURE__*/jsx_runtime_.jsx(AdminMenu, {}), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                className: "port-navbar-item",
                children: /*#__PURE__*/jsx_runtime_.jsx(LogoutLink, {})
              })]
            }), !user && /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.NavItem, {
              className: "port-navbar-item",
              children: /*#__PURE__*/jsx_runtime_.jsx(LoginLink, {})
            })]
          })
        })]
      })]
    })
  });
};

/* harmony default export */ var shared_Header = (Header);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
;// CONCATENATED MODULE: ./components/layouts/BaseLayout.js





const BaseLayout = props => {
  const {
    className,
    user,
    layoutClass = "with-bg",
    loading,
    children
  } = props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "layout-container",
    children: [/*#__PURE__*/jsx_runtime_.jsx(shared_Header, {
      className: layoutClass,
      user: user,
      loading: loading
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: `cover ${className}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "wrapper",
        children: children
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {})]
  });
};

/* harmony default export */ var layouts_BaseLayout = (BaseLayout);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;