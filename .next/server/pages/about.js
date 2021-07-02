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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layouts/BaseLayout */ \"./components/layouts/BaseLayout.js\");\n/* harmony import */ var _components_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/BasePage */ \"./components/BasePage.js\");\n/* harmony import */ var _functions_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/functions/user */ \"./functions/user.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/kishonst.clair/Desktop/PortfolioWebsite/kishon-portfolio-website/pages/about.js\";\n\n\n\n\n\n\n\n\nconst About = () => {\n  // let history = useHistory()\n  const {\n    data,\n    loading\n  } = (0,_functions_user__WEBPACK_IMPORTED_MODULE_4__.useGetUser)();\n  console.log(data);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    return () => {\n      window.__isAboutLoaded = true;\n    };\n  }, []);\n\n  const createFadeInClass = () => {\n    if (false) {}\n\n    return 'fadein';\n  };\n\n  const loop = () => {\n    /*#__PURE__*/\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      href: \"https://github.com/dazamg\",\n      target: \"_\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, undefined);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    user: data,\n    loading: loading,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BasePage__WEBPACK_IMPORTED_MODULE_3__.default, {\n      title: \"About me - Kishon StClair\",\n      className: \"about-page\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n        className: \"mt-5\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n          md: \"6\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"left-side\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n              className: `title ${createFadeInClass()}`,\n              children: \"Hello, \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 21\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n              className: `subtitle ${createFadeInClass()}`,\n              children: \"Welcome to my About Page\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 21\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: `subsubTitle ${createFadeInClass()}`,\n              children: \"Feel free to read short description about me.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 21\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 19\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 17\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n          md: \"6\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: `${createFadeInClass()}`,\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: \"My name is Kishon St. Clair and I am an software engineer and freelance developer. \"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 21\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: \"I am a bootcamper who loves the outdoors and treasure family. I have experience working on a wide range of technologies and projects from Javascript development for frontend designs for SheSailed to modern mobile and web applications in React and Python.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 21\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: \"Detail-oriented developer who over-delivers on organizational goals. My approach blends a background in sales, organizing and design to solve problems and drive innovation. I am a quick learner with an eye for detail and a passion for design. I am thrilled to work collaboratively to develop innovative solutions and best practices for all stakeholders involved. While I am most excited about using my front end skills, I do have the back end skills to dive deep into the code\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 57,\n              columnNumber: 21\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n              href: \"https://github.com/dazamg\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"icons\",\n                target: \"_\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaGithub, {\n                  size: 50\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 66,\n                  columnNumber: 55\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 66,\n                columnNumber: 23\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 21\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n              href: \"https://www.linkedin.com/in/kishon-stclair-95b5561aa/\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: \"icons-1\",\n                target: \"_\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__.FaLinkedin, {\n                  size: 50\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 69,\n                  columnNumber: 57\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 23\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 21\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 19\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 17\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 15\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 7\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raXNob24tcG9ydGZvbGlvLXdlYnNpdGUvLi9wYWdlcy9hYm91dC5qcz8yNmVjIl0sIm5hbWVzIjpbIkFib3V0IiwiZGF0YSIsImxvYWRpbmciLCJ1c2VHZXRVc2VyIiwiY29uc29sZSIsImxvZyIsInVzZUVmZmVjdCIsIndpbmRvdyIsIl9faXNBYm91dExvYWRlZCIsImNyZWF0ZUZhZGVJbkNsYXNzIiwibG9vcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFDaEI7QUFDQSxRQUFNO0FBQUVDLFFBQUY7QUFBUUM7QUFBUixNQUFvQkMsMkRBQVUsRUFBcEM7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlKLElBQVo7QUFFQUssa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsV0FBTyxNQUFNO0FBQ1hDLFlBQU0sQ0FBQ0MsZUFBUCxHQUF5QixJQUF6QjtBQUNELEtBRkQ7QUFHRCxHQUpRLEVBSVAsRUFKTyxDQUFUOztBQU1BLFFBQU1DLGlCQUFpQixHQUFHLE1BQU07QUFDOUIsZUFBa0MsRUFHakM7O0FBQ0QsV0FBTyxRQUFQO0FBQ0QsR0FORDs7QUFRQSxRQUFNQyxJQUFJLEdBQUcsTUFBTTtBQUVqQjtBQUFBO0FBQUcsVUFBSSxFQUFDLDJCQUFSO0FBQW9DLFlBQU0sRUFBQztBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0QsR0FIRDs7QUFLQSxzQkFDRSw4REFBQyxtRUFBRDtBQUNFLFFBQUksRUFBRVQsSUFEUjtBQUVFLFdBQU8sRUFBRUMsT0FGWDtBQUFBLDJCQUlNLDhEQUFDLHlEQUFEO0FBQ0UsV0FBSyxFQUFDLDJCQURSO0FBRUUsZUFBUyxFQUFDLFlBRlo7QUFBQSw2QkFHRSw4REFBQywyQ0FBRDtBQUFLLGlCQUFTLEVBQUMsTUFBZjtBQUFBLGdDQUNFLDhEQUFDLDJDQUFEO0FBQUssWUFBRSxFQUFDLEdBQVI7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsV0FBZjtBQUFBLG9DQUNFO0FBQUksdUJBQVMsRUFBRyxTQUFRTyxpQkFBaUIsRUFBRyxFQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUksdUJBQVMsRUFBRyxZQUFXQSxpQkFBaUIsRUFBRyxFQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixlQUdFO0FBQUcsdUJBQVMsRUFBRyxlQUFjQSxpQkFBaUIsRUFBRyxFQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBUUUsOERBQUMsMkNBQUQ7QUFBSyxZQUFFLEVBQUMsR0FBUjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBRyxHQUFFQSxpQkFBaUIsRUFBRyxFQUF2QztBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsZUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFQRixlQWVFLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQywyQkFBWDtBQUFBLHFDQUNFO0FBQUcseUJBQVMsRUFBQyxPQUFiO0FBQXFCLHNCQUFNLEVBQUMsR0FBNUI7QUFBQSx1Q0FBZ0MsOERBQUMsb0RBQUQ7QUFBVSxzQkFBSSxFQUFFO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBZkYsZUFrQkUsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLHVEQUFYO0FBQUEscUNBQ0U7QUFBRyx5QkFBUyxFQUFDLFNBQWI7QUFBdUIsc0JBQU0sRUFBQyxHQUE5QjtBQUFBLHVDQUFrQyw4REFBQyxzREFBRDtBQUFZLHNCQUFJLEVBQUU7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBNkNELENBckVIOztBQXVFRSwrREFBZVQsS0FBZiIsImZpbGUiOiIuL3BhZ2VzL2Fib3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXRzL0Jhc2VMYXlvdXRcIlxuaW1wb3J0IEJhc2VQYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvQmFzZVBhZ2VcIlxuaW1wb3J0IHsgdXNlR2V0VXNlciB9IGZyb20gJ0AvZnVuY3Rpb25zL3VzZXInXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgRmFHaXRodWIsIEZhTGlua2VkaW4gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBBYm91dCA9ICgpID0+IHtcbiAgICAvLyBsZXQgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuICAgIGNvbnN0IHsgZGF0YSwgbG9hZGluZyB9ID0gdXNlR2V0VXNlcigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgd2luZG93Ll9faXNBYm91dExvYWRlZCA9IHRydWVcbiAgICAgIH1cbiAgICB9LFtdKVxuXG4gICAgY29uc3QgY3JlYXRlRmFkZUluQ2xhc3MgPSAoKSA9PiB7XG4gICAgICBpZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gd2luZG93Ll9faXNBYm91dExvYWRlZCA/ICcnIDogJ2ZhZGVpbic7XG4gICAgICAgIC8vIHJldHVybiAnZmFkZWluJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnZmFkZWluJztcbiAgICB9XG5cbiAgICBjb25zdCBsb29wID0gKCkgPT4ge1xuICAgICAgXG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RhemFtZ1wiIHRhcmdldD1cIl9cIiA+PC9hPlxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8QmFzZUxheW91dCBcbiAgICAgICAgdXNlcj17ZGF0YX1cbiAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgPlxuICAgICAgICAgICAgPEJhc2VQYWdlIFxuICAgICAgICAgICAgICB0aXRsZT1cIkFib3V0IG1lIC0gS2lzaG9uIFN0Q2xhaXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYm91dC1wYWdlXCI+XG4gICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwibXQtNVwiPlxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQtc2lkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtgdGl0bGUgJHtjcmVhdGVGYWRlSW5DbGFzcygpfWB9PkhlbGxvLCA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtgc3VidGl0bGUgJHtjcmVhdGVGYWRlSW5DbGFzcygpfWB9PldlbGNvbWUgdG8gbXkgQWJvdXQgUGFnZTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17YHN1YnN1YlRpdGxlICR7Y3JlYXRlRmFkZUluQ2xhc3MoKX1gfT5GZWVsIGZyZWUgdG8gcmVhZCBzaG9ydCBkZXNjcmlwdGlvbiBhYm91dCBtZS48L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sIG1kPVwiNlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NyZWF0ZUZhZGVJbkNsYXNzKCl9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxwPk15IG5hbWUgaXMgS2lzaG9uIFN0LiBDbGFpciBhbmQgSSBhbSBhbiBzb2Z0d2FyZSBlbmdpbmVlciBhbmQgZnJlZWxhbmNlIGRldmVsb3Blci4gPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICBJIGFtIGEgYm9vdGNhbXBlciB3aG8gbG92ZXMgdGhlIG91dGRvb3JzIGFuZCB0cmVhc3VyZSBmYW1pbHkuIEkgaGF2ZVxuICAgICAgICAgICAgICAgICAgICAgIGV4cGVyaWVuY2Ugd29ya2luZyBvbiBhIHdpZGUgcmFuZ2Ugb2YgdGVjaG5vbG9naWVzIGFuZCBwcm9qZWN0cyBmcm9tIEphdmFzY3JpcHQgZGV2ZWxvcG1lbnQgZm9yIGZyb250ZW5kIGRlc2lnbnMgZm9yIFNoZVNhaWxlZCB0b1xuICAgICAgICAgICAgICAgICAgICAgIG1vZGVybiBtb2JpbGUgYW5kIHdlYiBhcHBsaWNhdGlvbnMgaW4gUmVhY3QgYW5kIFB5dGhvbi5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICBEZXRhaWwtb3JpZW50ZWQgZGV2ZWxvcGVyIHdobyBvdmVyLWRlbGl2ZXJzIG9uIG9yZ2FuaXphdGlvbmFsIGdvYWxzLiBcbiAgICAgICAgICAgICAgICAgICAgICBNeSBhcHByb2FjaCBibGVuZHMgYSBiYWNrZ3JvdW5kIGluIHNhbGVzLCBvcmdhbml6aW5nIGFuZCBkZXNpZ24gdG8gc29sdmUgcHJvYmxlbXMgXG4gICAgICAgICAgICAgICAgICAgICAgYW5kIGRyaXZlIGlubm92YXRpb24uIEkgYW0gYSBxdWljayBsZWFybmVyIHdpdGggYW4gZXllIGZvciBkZXRhaWwgYW5kIGEgcGFzc2lvbiBmb3IgZGVzaWduLiBcbiAgICAgICAgICAgICAgICAgICAgICBJIGFtIHRocmlsbGVkIHRvIHdvcmsgY29sbGFib3JhdGl2ZWx5IHRvIGRldmVsb3AgaW5ub3ZhdGl2ZSBzb2x1dGlvbnMgYW5kIGJlc3QgcHJhY3RpY2VzIGZvciBhbGwgc3Rha2Vob2xkZXJzIGludm9sdmVkLiBcbiAgICAgICAgICAgICAgICAgICAgICBXaGlsZSBJIGFtIG1vc3QgZXhjaXRlZCBhYm91dCB1c2luZyBteSBmcm9udCBlbmQgc2tpbGxzLCBJIGRvIGhhdmUgdGhlIGJhY2sgZW5kIHNraWxscyB0byBkaXZlIGRlZXAgaW50byB0aGUgY29kZVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGF6YW1nXCIgPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImljb25zXCIgdGFyZ2V0PVwiX1wiPjxGYUdpdGh1YiBzaXplPXs1MH0vPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2tpc2hvbi1zdGNsYWlyLTk1YjU1NjFhYS9cIiA+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaWNvbnMtMVwiIHRhcmdldD1cIl9cIj48RmFMaW5rZWRpbiBzaXplPXs1MH0vPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgICA8L0Jhc2VQYWdlPlxuICAgICAgICA8L0Jhc2VMYXlvdXQ+XG4gICAgKVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBBYm91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_react-icons_fa_index_esm_js","utils_auth0_js","components_BasePage_js-components_layouts_BaseLayout_js-functions_user_js"], function() { return __webpack_exec__("./pages/about.js"); });
module.exports = __webpack_exports__;

})();