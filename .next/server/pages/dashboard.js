/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./components/shared/Dropdown.js":
/*!***************************************!*\
  !*** ./components/shared/Dropdown.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PortButtonDropdown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/kishonst.clair/Desktop/PortfolioWebsite/kishon-portfolio-website/components/shared/Dropdown.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nclass PortButtonDropdown extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n  constructor(props) {\n    super(props);\n    this.toggle = this.toggle.bind(this);\n    this.state = {\n      dropdownOpen: false\n    };\n  }\n\n  toggle() {\n    this.setState({\n      dropdownOpen: !this.state.dropdownOpen\n    });\n  }\n\n  renderMenu(items) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu, {\n      children: items.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.DropdownItem, _objectSpread(_objectSpread({}, item.handlers), {}, {\n        children: item.text\n      }), item.key, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 15\n      }, this))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, this);\n  }\n\n  render() {\n    const {\n      items\n    } = this.props;\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.ButtonDropdown, {\n      className: \"port-dropdown\",\n      isOpen: this.state.dropdownOpen,\n      toggle: this.toggle,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_2__.DropdownToggle, {\n        caret: true,\n        size: \"sm\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), this.renderMenu(items)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raXNob24tcG9ydGZvbGlvLXdlYnNpdGUvLi9jb21wb25lbnRzL3NoYXJlZC9Ecm9wZG93bi5qcz83ODRhIl0sIm5hbWVzIjpbIlBvcnRCdXR0b25Ecm9wZG93biIsIlJlYWN0IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInRvZ2dsZSIsImJpbmQiLCJzdGF0ZSIsImRyb3Bkb3duT3BlbiIsInNldFN0YXRlIiwicmVuZGVyTWVudSIsIml0ZW1zIiwibWFwIiwiaXRlbSIsImhhbmRsZXJzIiwidGV4dCIsImtleSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxNQUFNQSxrQkFBTixTQUFpQ0Msd0RBQWpDLENBQWlEO0FBQzlEQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBRUEsU0FBS0MsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWUMsSUFBWixDQUFpQixJQUFqQixDQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGtCQUFZLEVBQUU7QUFESCxLQUFiO0FBR0Q7O0FBRURILFFBQU0sR0FBRztBQUNQLFNBQUtJLFFBQUwsQ0FBYztBQUNaRCxrQkFBWSxFQUFFLENBQUMsS0FBS0QsS0FBTCxDQUFXQztBQURkLEtBQWQ7QUFHRDs7QUFJREUsWUFBVSxDQUFDQyxLQUFELEVBQVE7QUFDaEIsd0JBQ0UsOERBQUMsb0RBQUQ7QUFBQSxnQkFFSUEsS0FBSyxDQUFDQyxHQUFOLENBQVdDLElBQUQsaUJBQ04sOERBQUMsb0RBQUQsa0NBQWlDQSxJQUFJLENBQUNDLFFBQXRDO0FBQUEsa0JBQWlERCxJQUFJLENBQUNFO0FBQXRELFVBQW1CRixJQUFJLENBQUNHLEdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQVVEOztBQUVEQyxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQUVOO0FBQUYsUUFBWSxLQUFLUCxLQUF2QjtBQUVBLHdCQUNFLDhEQUFDLHNEQUFEO0FBQWdCLGVBQVMsRUFBQyxlQUExQjtBQUEwQyxZQUFNLEVBQUUsS0FBS0csS0FBTCxDQUFXQyxZQUE3RDtBQUEyRSxZQUFNLEVBQUUsS0FBS0gsTUFBeEY7QUFBQSw4QkFDRSw4REFBQyxzREFBRDtBQUFnQixhQUFLLE1BQXJCO0FBQXNCLFlBQUksRUFBQztBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFHRyxLQUFLSyxVQUFMLENBQWdCQyxLQUFoQixDQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBT0Q7O0FBekM2RCIsImZpbGUiOiIuL2NvbXBvbmVudHMvc2hhcmVkL0Ryb3Bkb3duLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbkRyb3Bkb3duLCBEcm9wZG93blRvZ2dsZSwgRHJvcGRvd25NZW51LCBEcm9wZG93bkl0ZW0gfSBmcm9tICdyZWFjdHN0cmFwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9ydEJ1dHRvbkRyb3Bkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRyb3Bkb3duT3BlbjogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZHJvcGRvd25PcGVuOiAhdGhpcy5zdGF0ZS5kcm9wZG93bk9wZW5cbiAgICB9KTtcbiAgfVxuICBcblxuICBcbiAgcmVuZGVyTWVudShpdGVtcykge1xuICAgIHJldHVybiAoXG4gICAgICA8RHJvcGRvd25NZW51PlxuICAgICAgICB7XG4gICAgICAgICAgaXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0ga2V5PXtpdGVtLmtleX0gey4uLml0ZW0uaGFuZGxlcnN9PntpdGVtLnRleHR9PC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L0Ryb3Bkb3duTWVudT5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpdGVtcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8QnV0dG9uRHJvcGRvd24gY2xhc3NOYW1lPVwicG9ydC1kcm9wZG93blwiIGlzT3Blbj17dGhpcy5zdGF0ZS5kcm9wZG93bk9wZW59IHRvZ2dsZT17dGhpcy50b2dnbGV9PlxuICAgICAgICA8RHJvcGRvd25Ub2dnbGUgY2FyZXQgc2l6ZT1cInNtXCI+XG4gICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XG4gICAgICAgIHt0aGlzLnJlbmRlck1lbnUoaXRlbXMpfVxuICAgICAgPC9CdXR0b25Ecm9wZG93bj5cbiAgICApO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/shared/Dropdown.js\n");

/***/ }),

/***/ "./components/shared/Masthead.js":
/*!***************************************!*\
  !*** ./components/shared/Masthead.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/kishonst.clair/Desktop/PortfolioWebsite/kishon-portfolio-website/components/shared/Masthead.js\";\n\n\nconst Masthead = ({\n  children,\n  imagePath\n}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n  className: \"masthead\",\n  style: {\n    \"backgroundImage\": `url(${imagePath})`\n  },\n  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"overlay\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"col-lg-8 col-md-10 mx-auto\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"site-heading\",\n          children: children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 4,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Masthead);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raXNob24tcG9ydGZvbGlvLXdlYnNpdGUvLi9jb21wb25lbnRzL3NoYXJlZC9NYXN0aGVhZC5qcz83YWNjIl0sIm5hbWVzIjpbIk1hc3RoZWFkIiwiY2hpbGRyZW4iLCJpbWFnZVBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFDQyxVQUFEO0FBQVdDO0FBQVgsQ0FBRCxrQkFDZjtBQUFLLFdBQVMsRUFBQyxVQUFmO0FBQTBCLE9BQUssRUFBRTtBQUFDLHVCQUFvQixPQUFNQSxTQUFVO0FBQXJDLEdBQWpDO0FBQUEsMEJBQ0U7QUFBSyxhQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyxpREFBRDtBQUFBLDJCQUNFLDhEQUFDLDJDQUFEO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLDRCQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLGNBQWY7QUFBQSxvQkFDR0Q7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBY0EsK0RBQWVELFFBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NoYXJlZC9NYXN0aGVhZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgUm93LCBCdXR0b24gfSBmcm9tICdyZWFjdHN0cmFwJztcblxuY29uc3QgTWFzdGhlYWQgPSAoe2NoaWxkcmVuLCBpbWFnZVBhdGh9KSA9PlxuICA8ZGl2IGNsYXNzTmFtZT1cIm1hc3RoZWFkXCIgc3R5bGU9e3tcImJhY2tncm91bmRJbWFnZVwiOiBgdXJsKCR7aW1hZ2VQYXRofSlgfX0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PC9kaXY+XG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggY29sLW1kLTEwIG14LWF1dG9cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdGUtaGVhZGluZ1wiPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICA8L2Rpdj5cblxuZXhwb3J0IGRlZmF1bHQgTWFzdGhlYWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/shared/Masthead.js\n");

/***/ }),

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layouts/BaseLayout */ \"./components/layouts/BaseLayout.js\");\n/* harmony import */ var _components_BasePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/BasePage */ \"./components/BasePage.js\");\n/* harmony import */ var hoc_withAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoc/withAuth */ \"./hoc/withAuth.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var components_shared_Masthead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/shared/Masthead */ \"./components/shared/Masthead.js\");\n/* harmony import */ var components_shared_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/shared/Dropdown */ \"./components/shared/Dropdown.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var functions_blogs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! functions/blogs */ \"./functions/blogs.js\");\n\nvar _jsxFileName = \"/Users/kishonst.clair/Desktop/PortfolioWebsite/kishon-portfolio-website/pages/dashboard.js\";\n\n\n\n\n\n\n\n\n\n\nconst Dashboard = ({\n  user,\n  loading\n}) => {\n  const [updateBlog] = (0,functions_blogs__WEBPACK_IMPORTED_MODULE_9__.useUpdateBlog)();\n  const {\n    data: blogs,\n    mutate\n  } = (0,functions_blogs__WEBPACK_IMPORTED_MODULE_9__.useGetUserBlogs)();\n\n  const changeBlogStatus = async (blogId, status) => {\n    await updateBlog(blogId, {\n      status\n    }).then(() => mutate()).catch(() => react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast.error('Something went wrong'));\n  };\n\n  const createOption = blogStatus => {\n    return blogStatus === 'draft' ? {\n      view: 'Publish Story',\n      value: 'published'\n    } : {\n      view: 'Make a Draft',\n      value: 'draft'\n    };\n  };\n\n  const createOptions = blog => {\n    const option = createOption(blog.status);\n    return [{\n      key: `${blog._id}-published`,\n      text: option.view,\n      handlers: {\n        onClick: () => changeBlogStatus(blog._id, option.value)\n      }\n    }, {\n      key: `${blog._id}-delete`,\n      text: 'Delete',\n      handlers: {\n        onClick: () => changeBlogStatus(blog._id, 'deleted')\n      }\n    }];\n  };\n\n  const renderBlogs = (blogs, status) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n    className: \"user-blogs-list\",\n    children: blogs && blogs.filter(blog => blog.status === status).map(blog => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n        href: \"/blogs/editor/[id]\",\n        as: `/blogs/editor/${blog._id}`,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: blog.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_shared_Dropdown__WEBPACK_IMPORTED_MODULE_6__.default, {\n        items: createOptions(blog)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 11\n      }, undefined)]\n    }, blog._id, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }, undefined))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, undefined);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_1__.default, {\n    navClass: \"transparent\",\n    user: user,\n    loading: loading,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_shared_Masthead__WEBPACK_IMPORTED_MODULE_5__.default, {\n      imagePath: \"/images/blog-img.jpeg\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: \"subheading\",\n        children: [\"Let's write some nice blog today\", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {\n          href: \"/blogs/editor\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Button, {\n            color: \"primary\",\n            children: \"Create a new Blog\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BasePage__WEBPACK_IMPORTED_MODULE_2__.default, {\n      className: \"blog-user-page\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n          md: \"6\",\n          className: \"mx-auto text-center\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            className: \"blog-status-title\",\n            children: \" Published Blogs \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, undefined), renderBlogs(blogs, 'published')]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n          md: \"6\",\n          className: \"mx-auto text-center\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            className: \"blog-status-title\",\n            children: \" Draft Blogs \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, undefined), renderBlogs(blogs, 'draft')]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,hoc_withAuth__WEBPACK_IMPORTED_MODULE_3__.default)(Dashboard)('admin'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raXNob24tcG9ydGZvbGlvLXdlYnNpdGUvLi9wYWdlcy9kYXNoYm9hcmQuanM/YmJkOCJdLCJuYW1lcyI6WyJEYXNoYm9hcmQiLCJ1c2VyIiwibG9hZGluZyIsInVwZGF0ZUJsb2ciLCJ1c2VVcGRhdGVCbG9nIiwiZGF0YSIsImJsb2dzIiwibXV0YXRlIiwidXNlR2V0VXNlckJsb2dzIiwiY2hhbmdlQmxvZ1N0YXR1cyIsImJsb2dJZCIsInN0YXR1cyIsInRoZW4iLCJjYXRjaCIsInRvYXN0IiwiY3JlYXRlT3B0aW9uIiwiYmxvZ1N0YXR1cyIsInZpZXciLCJ2YWx1ZSIsImNyZWF0ZU9wdGlvbnMiLCJibG9nIiwib3B0aW9uIiwia2V5IiwiX2lkIiwidGV4dCIsImhhbmRsZXJzIiwib25DbGljayIsInJlbmRlckJsb2dzIiwiZmlsdGVyIiwibWFwIiwidGl0bGUiLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsU0FBUyxHQUFHLENBQUM7QUFBQ0MsTUFBRDtBQUFPQztBQUFQLENBQUQsS0FBcUI7QUFDckMsUUFBTSxDQUFDQyxVQUFELElBQWVDLDhEQUFhLEVBQWxDO0FBQ0EsUUFBTTtBQUFDQyxRQUFJLEVBQUVDLEtBQVA7QUFBY0M7QUFBZCxNQUF3QkMsZ0VBQWUsRUFBN0M7O0FBRUEsUUFBTUMsZ0JBQWdCLEdBQUcsT0FBT0MsTUFBUCxFQUFlQyxNQUFmLEtBQTBCO0FBQ2pELFVBQU1SLFVBQVUsQ0FBQ08sTUFBRCxFQUFTO0FBQUNDO0FBQUQsS0FBVCxDQUFWLENBQ0xDLElBREssQ0FDQSxNQUFNTCxNQUFNLEVBRFosRUFFTE0sS0FGSyxDQUVDLE1BQU1DLHVEQUFBLENBQVksc0JBQVosQ0FGUCxDQUFOO0FBR0QsR0FKRDs7QUFNQSxRQUFNQyxZQUFZLEdBQUlDLFVBQUQsSUFBZ0I7QUFDbkMsV0FBT0Es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REFBQywyQ0FBRDtBQUFLLFlBQUUsRUFBQyxHQUFSO0FBQVksbUJBQVMsRUFBQyxxQkFBdEI7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFFR3FCLFdBQVcsQ0FBQ3JCLEtBQUQsRUFBUSxPQUFSLENBRmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF3QkQsQ0F0RUQ7O0FBd0VBLCtEQUFleUIscURBQVEsQ0FBQy9CLFNBQUQsQ0FBUixDQUFvQixPQUFwQixDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZGFzaGJvYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL2xheW91dHMvQmFzZUxheW91dCc7XG5pbXBvcnQgQmFzZVBhZ2UgZnJvbSAnQC9jb21wb25lbnRzL0Jhc2VQYWdlJztcbmltcG9ydCB3aXRoQXV0aCBmcm9tICdob2Mvd2l0aEF1dGgnO1xuaW1wb3J0IHsgUm93LCBDb2wsIEJ1dHRvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IE1hc3RoZWFkIGZyb20gJ2NvbXBvbmVudHMvc2hhcmVkL01hc3RoZWFkJztcbmltcG9ydCBQb3J0QnV0dG9uRHJvcGRvd24gZnJvbSAnY29tcG9uZW50cy9zaGFyZWQvRHJvcGRvd24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7dG9hc3R9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5J1xuXG5pbXBvcnQge3VzZVVwZGF0ZUJsb2csIHVzZUdldFVzZXJCbG9nc30gZnJvbSAnZnVuY3Rpb25zL2Jsb2dzJztcblxuY29uc3QgRGFzaGJvYXJkID0gKHt1c2VyLCBsb2FkaW5nfSkgPT4ge1xuICBjb25zdCBbdXBkYXRlQmxvZ10gPSB1c2VVcGRhdGVCbG9nKCk7XG4gIGNvbnN0IHtkYXRhOiBibG9ncywgbXV0YXRlfSA9IHVzZUdldFVzZXJCbG9ncygpXG5cbiAgY29uc3QgY2hhbmdlQmxvZ1N0YXR1cyA9IGFzeW5jIChibG9nSWQsIHN0YXR1cykgPT4ge1xuICAgIGF3YWl0IHVwZGF0ZUJsb2coYmxvZ0lkLCB7c3RhdHVzfSlcbiAgICAudGhlbigoKSA9PiBtdXRhdGUoKSlcbiAgICAuY2F0Y2goKCkgPT4gdG9hc3QuZXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nJykpO1xuICB9XG5cbiAgY29uc3QgY3JlYXRlT3B0aW9uID0gKGJsb2dTdGF0dXMpID0+IHtcbiAgICByZXR1cm4gYmxvZ1N0YXR1cyA9PT0gJ2RyYWZ0JyA/IHt2aWV3OiAnUHVibGlzaCBTdG9yeScsIHZhbHVlOiAncHVibGlzaGVkJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB7dmlldzogJ01ha2UgYSBEcmFmdCcsIHZhbHVlOiAnZHJhZnQnfVxuICB9XG5cbiAgY29uc3QgY3JlYXRlT3B0aW9ucyA9IChibG9nKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gY3JlYXRlT3B0aW9uKGJsb2cuc3RhdHVzKVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIHsga2V5OiBgJHtibG9nLl9pZH0tcHVibGlzaGVkYCxcbiAgICAgICAgdGV4dDogb3B0aW9uLnZpZXcsXG4gICAgICAgIGhhbmRsZXJzOiB7XG4gICAgICAgICAgb25DbGljazogKCkgPT4gY2hhbmdlQmxvZ1N0YXR1cyhibG9nLl9pZCwgb3B0aW9uLnZhbHVlKX1cbiAgICAgIH0sXG4gICAgICB7IGtleTogYCR7YmxvZy5faWR9LWRlbGV0ZWAsXG4gICAgICAgIHRleHQ6ICdEZWxldGUnLCBcbiAgICAgICAgaGFuZGxlcnM6IHsgXG4gICAgICAgICAgb25DbGljazogKCkgPT4gY2hhbmdlQmxvZ1N0YXR1cyhibG9nLl9pZCwgJ2RlbGV0ZWQnKX1cbiAgICAgIH1cbiAgICBdXG4gIH1cblxuICBjb25zdCByZW5kZXJCbG9ncyA9IChibG9ncywgc3RhdHVzKSA9PiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cInVzZXItYmxvZ3MtbGlzdFwiPlxuICAgICAgeyBibG9ncyAmJiBibG9ncy5maWx0ZXIoYmxvZyA9PiBibG9nLnN0YXR1cyA9PT0gc3RhdHVzKS5tYXAoYmxvZyA9PlxuICAgICAgICA8bGkga2V5PXtibG9nLl9pZH0+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9ncy9lZGl0b3IvW2lkXVwiIGFzPXtgL2Jsb2dzL2VkaXRvci8ke2Jsb2cuX2lkfWB9PlxuICAgICAgICAgICAgPGE+e2Jsb2cudGl0bGV9PC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8UG9ydEJ1dHRvbkRyb3Bkb3duIGl0ZW1zPXtjcmVhdGVPcHRpb25zKGJsb2cpfSAvPlxuICAgICAgICA8L2xpPlxuICAgICAgICApXG4gICAgICB9XG4gICAgPC91bD5cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPEJhc2VMYXlvdXQgbmF2Q2xhc3M9XCJ0cmFuc3BhcmVudFwiIHVzZXI9e3VzZXJ9IGxvYWRpbmc9e2xvYWRpbmd9PlxuICAgICAgPE1hc3RoZWFkIGltYWdlUGF0aD1cIi9pbWFnZXMvYmxvZy1pbWcuanBlZ1wiID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3ViaGVhZGluZ1wiPlxuICAgICAgICAgIExldCdzIHdyaXRlIHNvbWUgbmljZSBibG9nIHRvZGF5eycgJ31cbiAgICAgICAgICA8TGluayBocmVmPScvYmxvZ3MvZWRpdG9yJz5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCI+Q3JlYXRlIGEgbmV3IEJsb2c8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvTWFzdGhlYWQ+XG4gICAgICA8QmFzZVBhZ2UgY2xhc3NOYW1lPVwiYmxvZy11c2VyLXBhZ2VcIj5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIG1kPVwiNlwiIGNsYXNzTmFtZT1cIm14LWF1dG8gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJibG9nLXN0YXR1cy10aXRsZVwiPiBQdWJsaXNoZWQgQmxvZ3MgPC9oMj5cbiAgICAgICAgICAgIHtyZW5kZXJCbG9ncyhibG9ncywgJ3B1Ymxpc2hlZCcpfVxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgbWQ9XCI2XCIgY2xhc3NOYW1lPVwibXgtYXV0byB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJsb2ctc3RhdHVzLXRpdGxlXCI+IERyYWZ0IEJsb2dzIDwvaDI+XG4gICAgICAgICAgICB7cmVuZGVyQmxvZ3MoYmxvZ3MsICdkcmFmdCcpfVxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQmFzZVBhZ2U+XG4gICAgPC9CYXNlTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKERhc2hib2FyZCkoJ2FkbWluJyk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@auth0/nextjs-auth0");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react-resize-detector":
/*!****************************************!*\
  !*** external "react-resize-detector" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-resize-detector");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("reactstrap");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_auth0_js","components_BasePage_js-components_layouts_BaseLayout_js-hoc_withAuth_js","functions_blogs_js"], function() { return __webpack_exec__("./pages/dashboard.js"); });
module.exports = __webpack_exports__;

})();