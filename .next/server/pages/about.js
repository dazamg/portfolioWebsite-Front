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
exports.id = "pages/about";
exports.ids = ["pages/about"];
exports.modules = {

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/BaseLayout */ \"./components/layouts/BaseLayout.js\");\n/* harmony import */ var _components_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BasePage */ \"./components/BasePage.js\");\n/* harmony import */ var _functions_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../functions/user */ \"./functions/user.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n\nvar _jsxFileName = \"/Users/kishonst.clair/Desktop/PortfolioWebsite/kishon-portfolio-website/pages/about.js\";\n\n\n\n\n\n\n\n\nreact_icons_md__WEBPACK_IMPORTED_MODULE_7__.MdEmail;\n\nconst About = () => {\n  // let history = useHistory()\n  const {\n    data,\n    loading\n  } = (0,_functions_user__WEBPACK_IMPORTED_MODULE_4__.useGetUser)();\n  console.log(data);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    return () => {\n      window.__isAboutLoaded = true;\n    };\n  }, []);\n\n  const createFadeInClass = () => {\n    if (false) {}\n\n    return 'fadein';\n  };\n\n  const loop = () => {\n    /*#__PURE__*/\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      href: \"https://github.com/dazamg\",\n      target: \"_\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, undefined);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    user: data,\n    loading: loading,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BasePage__WEBPACK_IMPORTED_MODULE_3__.default, {\n      title: \"About me - Kishon StClair\",\n      className: \"about-page\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n        className: \"mt-5\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n          md: \"6\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"left-side\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n              className: `title ${createFadeInClass()}`,\n              children: \"Hello, \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 21\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n              className: `subtitle ${createFadeInClass()}`,\n              children: \"Welcome to my About Page\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 47,\n              columnNumber: 21\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: `subsubTitle ${createFadeInClass()}`,\n              children: \"Feel free to read short description about me.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 21\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 19\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n          md: \"6\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: `${createFadeInClass()}`,\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: \"My name is Kishon St. Clair and I am an software engineer and freelance developer. \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 53,\n              columnNumber: 21\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: \"I am a bootcamper who loves the outdoors and treasure family. I have experience working on a wide range of technologies and projects from Javascript development for frontend designs for SheSailed to modern mobile and web applications in React and Python.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 54,\n              columnNumber: 21\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: \"Detail-oriented developer who over-delivers on organizational goals. My approach blends a background in sales, organizing and design to solve problems and drive innovation. I am a quick learner with an eye for detail and a passion for design. I am thrilled to work collaboratively to develop innovative solutions and best practices for all stakeholders involved. While I am most excited about using my front end skills, I do have the back end skills to dive deep into the code\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 21\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n              href: \"https://github.com/dazamg\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"icons\",\n                target: \"_\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaGithub, {\n                  size: 50\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 68,\n                  columnNumber: 55\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 68,\n                columnNumber: 23\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 21\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n              href: \"https://www.linkedin.com/in/kishon-stclair-95b5561aa/\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"icons-1\",\n                target: \"_\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaLinkedin, {\n                  size: 50\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 71,\n                  columnNumber: 57\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 23\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 21\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n              href: \"mailto:kishon@clairvisual.com?Connecting\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"icons-2\",\n                target: \"_\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_7__.MdEmail, {\n                  size: 50\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 74,\n                  columnNumber: 57\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 74,\n                columnNumber: 23\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 73,\n              columnNumber: 21\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 19\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 17\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 15\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 7\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raXNob24tcG9ydGZvbGlvLXdlYnNpdGUvLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbIk1kRW1haWwiLCJBYm91dCIsImRhdGEiLCJsb2FkaW5nIiwidXNlR2V0VXNlciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJfX2lzQWJvdXRMb2FkZWQiLCJjcmVhdGVGYWRlSW5DbGFzcyIsImxvb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FBLG1EQUFPOztBQUVQLE1BQU1DLEtBQUssR0FBRyxNQUFNO0FBQ2hCO0FBQ0EsUUFBTTtBQUFFQyxRQUFGO0FBQVFDO0FBQVIsTUFBb0JDLDJEQUFVLEVBQXBDO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0FBRUFLLGtEQUFTLENBQUMsTUFBTTtBQUNkLFdBQU8sTUFBTTtBQUNYQyxZQUFNLENBQUNDLGVBQVAsR0FBeUIsSUFBekI7QUFDRCxLQUZEO0FBR0QsR0FKUSxFQUlQLEVBSk8sQ0FBVDs7QUFNQSxRQUFNQyxpQkFBaUIsR0FBRyxNQUFNO0FBQzlCLGVBQWtDLEVBR2pDOztBQUNELFdBQU8sUUFBUDtBQUNELEdBTkQ7O0FBUUEsUUFBTUMsSUFBSSxHQUFHLE1BQU07QUFFakI7QUFBQTtBQUFHLFVBQUksRUFBQywyQkFBUjtBQUFvQyxZQUFNLEVBQUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNELEdBSEQ7O0FBS0Esc0JBQ0UsOERBQUMsbUVBQUQ7QUFDRSxRQUFJLEVBQUVULElBRFI7QUFFRSxXQUFPLEVBQUVDLE9BRlg7QUFBQSwyQkFJTSw4REFBQyx5REFBRDtBQUNFLFdBQUssRUFBQywyQkFEUjtBQUVFLGVBQVMsRUFBQyxZQUZaO0FBQUEsNkJBR0UsOERBQUMsMkNBQUQ7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxnQ0FDRSw4REFBQywyQ0FBRDtBQUFLLFlBQUUsRUFBQyxHQUFSO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBQSxvQ0FDRTtBQUFJLHVCQUFTLEVBQUcsU0FBUU8saUJBQWlCLEVBQUcsRUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFFRTtBQUFJLHVCQUFTLEVBQUcsWUFBV0EsaUJBQWlCLEVBQUcsRUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsZUFHRTtBQUFHLHVCQUFTLEVBQUcsZUFBY0EsaUJBQWlCLEVBQUcsRUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQVFFLDhEQUFDLDJDQUFEO0FBQUssWUFBRSxFQUFDLEdBQVI7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUcsR0FBRUEsaUJBQWlCLEVBQUcsRUFBdkM7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGLGVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUEYsZUFlRSw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUMsMkJBQVg7QUFBQSxxQ0FDRTtBQUFHLHlCQUFTLEVBQUMsT0FBYjtBQUFxQixzQkFBTSxFQUFDLEdBQTVCO0FBQUEsdUNBQWdDLDhEQUFDLG9EQUFEO0FBQVUsc0JBQUksRUFBRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWZGLGVBa0JFLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyx1REFBWDtBQUFBLHFDQUNFO0FBQUcseUJBQVMsRUFBQyxTQUFiO0FBQXVCLHNCQUFNLEVBQUMsR0FBOUI7QUFBQSx1Q0FBa0MsOERBQUMsc0RBQUQ7QUFBWSxzQkFBSSxFQUFFO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBbEJGLGVBcUJFLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQywwQ0FBWDtBQUFBLHFDQUNFO0FBQUcseUJBQVMsRUFBQyxTQUFiO0FBQXVCLHNCQUFNLEVBQUMsR0FBOUI7QUFBQSx1Q0FBa0MsOERBQUMsbURBQUQ7QUFBUyxzQkFBSSxFQUFFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZ0RELENBeEVIOztBQTBFRSwrREFBZVQsS0FBZiIsImZpbGUiOiIuL3BhZ2VzL2Fib3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9CYXNlTGF5b3V0XCJcbmltcG9ydCBCYXNlUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9CYXNlUGFnZVwiXG5pbXBvcnQgeyB1c2VHZXRVc2VyIH0gZnJvbSAnLi4vZnVuY3Rpb25zL3VzZXInXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgRmFHaXRodWIsIEZhTGlua2VkaW4sIEZhSW5ib3ggfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgTWRFbWFpbH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XG5NZEVtYWlsXG5cbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xuICAgIC8vIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG4gICAgY29uc3QgeyBkYXRhLCBsb2FkaW5nIH0gPSB1c2VHZXRVc2VyKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB3aW5kb3cuX19pc0Fib3V0TG9hZGVkID0gdHJ1ZVxuICAgICAgfVxuICAgIH0sW10pXG5cbiAgICBjb25zdCBjcmVhdGVGYWRlSW5DbGFzcyA9ICgpID0+IHtcbiAgICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuX19pc0Fib3V0TG9hZGVkID8gJycgOiAnZmFkZWluJztcbiAgICAgICAgLy8gcmV0dXJuICdmYWRlaW4nO1xuICAgICAgfVxuICAgICAgcmV0dXJuICdmYWRlaW4nO1xuICAgIH1cblxuICAgIGNvbnN0IGxvb3AgPSAoKSA9PiB7XG4gICAgICBcbiAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGF6YW1nXCIgdGFyZ2V0PVwiX1wiID48L2E+XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxCYXNlTGF5b3V0IFxuICAgICAgICB1c2VyPXtkYXRhfVxuICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICA+XG4gICAgICAgICAgICA8QmFzZVBhZ2UgXG4gICAgICAgICAgICAgIHRpdGxlPVwiQWJvdXQgbWUgLSBLaXNob24gU3RDbGFpclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFib3V0LXBhZ2VcIj5cbiAgICAgICAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtdC01XCI+XG4gICAgICAgICAgICAgICAgPENvbCBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1zaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2B0aXRsZSAke2NyZWF0ZUZhZGVJbkNsYXNzKCl9YH0+SGVsbG8sIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e2BzdWJ0aXRsZSAke2NyZWF0ZUZhZGVJbkNsYXNzKCl9YH0+V2VsY29tZSB0byBteSBBYm91dCBQYWdlPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgc3Vic3ViVGl0bGUgJHtjcmVhdGVGYWRlSW5DbGFzcygpfWB9PkZlZWwgZnJlZSB0byByZWFkIHNob3J0IGRlc2NyaXB0aW9uIGFib3V0IG1lLjwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y3JlYXRlRmFkZUluQ2xhc3MoKX1gfT5cbiAgICAgICAgICAgICAgICAgICAgPHA+TXkgbmFtZSBpcyBLaXNob24gU3QuIENsYWlyIGFuZCBJIGFtIGFuIHNvZnR3YXJlIGVuZ2luZWVyIGFuZCBmcmVlbGFuY2UgZGV2ZWxvcGVyLiA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgIEkgYW0gYSBib290Y2FtcGVyIHdobyBsb3ZlcyB0aGUgb3V0ZG9vcnMgYW5kIHRyZWFzdXJlIGZhbWlseS4gSSBoYXZlXG4gICAgICAgICAgICAgICAgICAgICAgZXhwZXJpZW5jZSB3b3JraW5nIG9uIGEgd2lkZSByYW5nZSBvZiB0ZWNobm9sb2dpZXMgYW5kIHByb2plY3RzIGZyb20gSmF2YXNjcmlwdCBkZXZlbG9wbWVudCBmb3IgZnJvbnRlbmQgZGVzaWducyBmb3IgU2hlU2FpbGVkIHRvXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZXJuIG1vYmlsZSBhbmQgd2ViIGFwcGxpY2F0aW9ucyBpbiBSZWFjdCBhbmQgUHl0aG9uLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgIERldGFpbC1vcmllbnRlZCBkZXZlbG9wZXIgd2hvIG92ZXItZGVsaXZlcnMgb24gb3JnYW5pemF0aW9uYWwgZ29hbHMuIFxuICAgICAgICAgICAgICAgICAgICAgIE15IGFwcHJvYWNoIGJsZW5kcyBhIGJhY2tncm91bmQgaW4gc2FsZXMsIG9yZ2FuaXppbmcgYW5kIGRlc2lnbiB0byBzb2x2ZSBwcm9ibGVtcyBcbiAgICAgICAgICAgICAgICAgICAgICBhbmQgZHJpdmUgaW5ub3ZhdGlvbi4gSSBhbSBhIHF1aWNrIGxlYXJuZXIgd2l0aCBhbiBleWUgZm9yIGRldGFpbCBhbmQgYSBwYXNzaW9uIGZvciBkZXNpZ24uIFxuICAgICAgICAgICAgICAgICAgICAgIEkgYW0gdGhyaWxsZWQgdG8gd29yayBjb2xsYWJvcmF0aXZlbHkgdG8gZGV2ZWxvcCBpbm5vdmF0aXZlIHNvbHV0aW9ucyBhbmQgYmVzdCBwcmFjdGljZXMgZm9yIGFsbCBzdGFrZWhvbGRlcnMgaW52b2x2ZWQuIFxuICAgICAgICAgICAgICAgICAgICAgIFdoaWxlIEkgYW0gbW9zdCBleGNpdGVkIGFib3V0IHVzaW5nIG15IGZyb250IGVuZCBza2lsbHMsIEkgZG8gaGF2ZSB0aGUgYmFjayBlbmQgc2tpbGxzIHRvIGRpdmUgZGVlcCBpbnRvIHRoZSBjb2RlXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kYXphbWdcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaWNvbnNcIiB0YXJnZXQ9XCJfXCI+PEZhR2l0aHViIHNpemU9ezUwfS8+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4va2lzaG9uLXN0Y2xhaXItOTViNTU2MWFhL1wiID5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpY29ucy0xXCIgdGFyZ2V0PVwiX1wiPjxGYUxpbmtlZGluIHNpemU9ezUwfS8+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJtYWlsdG86a2lzaG9uQGNsYWlydmlzdWFsLmNvbT9Db25uZWN0aW5nXCIgPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb25zLTJcIiB0YXJnZXQ9XCJfXCI+PE1kRW1haWwgc2l6ZT17NTB9Lz48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgICAgPC9CYXNlUGFnZT5cbiAgICAgICAgPC9CYXNlTGF5b3V0PlxuICAgIClcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgQWJvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/about.js\n");

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@auth0/nextjs-auth0");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_react-icons_fa_index_esm_js-node_modules_react-icons_md_index_esm_js","utils_auth0_js","components_BasePage_js-components_layouts_BaseLayout_js-functions_user_js"], function() { return __webpack_exec__("./pages/about.js"); });
module.exports = __webpack_exports__;

})();