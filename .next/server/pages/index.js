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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/BaseLayout */ \"./components/layouts/BaseLayout.js\");\n/* harmony import */ var _components_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BasePage */ \"./components/BasePage.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-typed */ \"react-typed\");\n/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _functions_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/user */ \"./functions/user.js\");\n\nvar _jsxFileName = \"/Users/kishonst.clair/Desktop/PortfolioWebsite/kishon-portfolio-website/pages/index.js\";\n\n\n\n\n\n\nconst ROLES = ['Developer', 'Tech Lover', 'Team Player', 'React.js', 'Python'];\n\nconst Index = () => {\n  const {\n    0: isFlipping,\n    1: setIsFlipping\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    data,\n    loading\n  } = (0,_functions_user__WEBPACK_IMPORTED_MODULE_6__.useGetUser)();\n  const flipInterval = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    startAnimation();\n    return () => flipInterval.current && clearInterval(flipInterval.current);\n  }, []);\n\n  const startAnimation = () => {\n    flipInterval.current = setInterval(() => {\n      setIsFlipping(prevFlipping => !prevFlipping);\n    }, 6000);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    user: data,\n    loading: loading,\n    navClass: \"transparent\",\n    className: `cover ${isFlipping ? 'cover-orange' : 'cover-blue'}`,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BasePage__WEBPACK_IMPORTED_MODULE_3__.default, {\n      indexPage: true,\n      title: \"Portfolio - Kishon StClair\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main-section\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"background-image\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n              md: \"6\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hero-section\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: `flipper ${isFlipping ? 'isFlipping' : ''}`,\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"front\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                      className: \"image image-1\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hero-section-content\",\n                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                          children: \" Full Stack Web Developer \"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 42,\n                          columnNumber: 29\n                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                          className: \"hero-section-content-intro\",\n                          children: \"Have a look at my portfolio and job history.\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 43,\n                          columnNumber: 29\n                        }, undefined)]\n                      }, void 0, true, {\n                        fileName: _jsxFileName,\n                        lineNumber: 41,\n                        columnNumber: 25\n                      }, undefined)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 40,\n                      columnNumber: 23\n                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                      className: \"shadow-custom\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"shadow-inner\",\n                        children: \" \"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 49,\n                        columnNumber: 25\n                      }, undefined)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 48,\n                      columnNumber: 23\n                    }, undefined)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 39,\n                    columnNumber: 21\n                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"back\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                      className: \"image image-2\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hero-section-content\",\n                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                          children: \"React and Next is Amazing! \"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 55,\n                          columnNumber: 27\n                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                          className: \"hero-section-content-intro\",\n                          children: \"You got a interesting project, I'm ready!\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 56,\n                          columnNumber: 29\n                        }, undefined)]\n                      }, void 0, true, {\n                        fileName: _jsxFileName,\n                        lineNumber: 54,\n                        columnNumber: 25\n                      }, undefined)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 53,\n                      columnNumber: 23\n                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                      className: \"shadow-custom shadow-custom-orange\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"shadow-inner\",\n                        children: \" \"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 62,\n                        columnNumber: 25\n                      }, undefined)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 61,\n                      columnNumber: 23\n                    }, undefined)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 52,\n                    columnNumber: 21\n                  }, undefined)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 38,\n                  columnNumber: 19\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n              md: \"6\",\n              className: \"hero-welcome-wrapper\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hero-welcome-text\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                  children: \"Welcome to the portfolio website of Kishon St. Clair. Get informed, collaborate and discover projects I was working on through the years!\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 19\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_typed__WEBPACK_IMPORTED_MODULE_5___default()), {\n                loop: true,\n                typeSpeed: 70,\n                backSpeed: 70,\n                strings: ROLES,\n                backDelay: 1000,\n                loopCount: 0,\n                showCursor: true,\n                className: \"self-typed\",\n                cursorChar: \"|\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 75,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hero-welcome-bio\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                  children: \"Let's take a look on my work.\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 87,\n                  columnNumber: 19\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 17\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raXNob24tcG9ydGZvbGlvLXdlYnNpdGUvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIlJPTEVTIiwiSW5kZXgiLCJpc0ZsaXBwaW5nIiwic2V0SXNGbGlwcGluZyIsInVzZVN0YXRlIiwiZGF0YSIsImxvYWRpbmciLCJ1c2VHZXRVc2VyIiwiZmxpcEludGVydmFsIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic3RhcnRBbmltYXRpb24iLCJjdXJyZW50IiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldkZsaXBwaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDLFdBQUQsRUFBYyxZQUFkLEVBQTRCLGFBQTVCLEVBQTRDLFVBQTVDLEVBQXdELFFBQXhELENBQWQ7O0FBQ0EsTUFBTUMsS0FBSyxHQUFHLE1BQU07QUFDbEIsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCQywrQ0FBUSxDQUFDLEtBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUVDLFFBQUY7QUFBUUM7QUFBUixNQUFvQkMsMkRBQVUsRUFBcEM7QUFDQSxRQUFNQyxZQUFZLEdBQUdDLDZDQUFNLEVBQTNCO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkQyxrQkFBYztBQUNkLFdBQU8sTUFBTUgsWUFBWSxDQUFDSSxPQUFiLElBQXdCQyxhQUFhLENBQUNMLFlBQVksQ0FBQ0ksT0FBZCxDQUFsRDtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7O0FBS0EsUUFBTUQsY0FBYyxHQUFHLE1BQU07QUFDM0JILGdCQUFZLENBQUNJLE9BQWIsR0FBdUJFLFdBQVcsQ0FBQyxNQUFNO0FBQ3ZDWCxtQkFBYSxDQUFDWSxZQUFZLElBQUksQ0FBQ0EsWUFBbEIsQ0FBYjtBQUNELEtBRmlDLEVBRS9CLElBRitCLENBQWxDO0FBR0QsR0FKRDs7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RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBeUVELENBekZEOztBQTJGQSwrREFBZUMsS0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9CYXNlTGF5b3V0XCJcbmltcG9ydCBCYXNlUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9CYXNlUGFnZVwiXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgVHlwZWQgZnJvbSAncmVhY3QtdHlwZWQnO1xuaW1wb3J0IHsgdXNlR2V0VXNlciB9IGZyb20gJy4uL2Z1bmN0aW9ucy91c2VyJztcblxuY29uc3QgUk9MRVMgPSBbJ0RldmVsb3BlcicsICdUZWNoIExvdmVyJywgJ1RlYW0gUGxheWVyJywgICdSZWFjdC5qcycsICdQeXRob24nXTtcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbaXNGbGlwcGluZywgc2V0SXNGbGlwcGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZyB9ID0gdXNlR2V0VXNlcigpO1xuICBjb25zdCBmbGlwSW50ZXJ2YWwgPSB1c2VSZWYoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHN0YXJ0QW5pbWF0aW9uKCk7XG4gICAgcmV0dXJuICgpID0+IGZsaXBJbnRlcnZhbC5jdXJyZW50ICYmIGNsZWFySW50ZXJ2YWwoZmxpcEludGVydmFsLmN1cnJlbnQpXG4gIH0sIFtdKTtcblxuICBjb25zdCBzdGFydEFuaW1hdGlvbiA9ICgpID0+IHtcbiAgICBmbGlwSW50ZXJ2YWwuY3VycmVudCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldElzRmxpcHBpbmcocHJldkZsaXBwaW5nID0+ICFwcmV2RmxpcHBpbmcpO1xuICAgIH0sIDYwMDApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8QmFzZUxheW91dFxuICAgICAgdXNlcj17ZGF0YX1cbiAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICBuYXZDbGFzcz1cInRyYW5zcGFyZW50XCJcbiAgICAgIGNsYXNzTmFtZT17YGNvdmVyICR7aXNGbGlwcGluZyA/ICdjb3Zlci1vcmFuZ2UnIDogJ2NvdmVyLWJsdWUnfWB9PlxuICAgICAgPEJhc2VQYWdlIGluZGV4UGFnZSB0aXRsZT1cIlBvcnRmb2xpbyAtIEtpc2hvbiBTdENsYWlyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1zZWN0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLWltYWdlXCI+PC9kaXY+XG4gICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxDb2wgbWQ9XCI2XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxpcHBlciAke2lzRmxpcHBpbmcgPyAnaXNGbGlwcGluZycgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcm9udFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UgaW1hZ2UtMVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zZWN0aW9uLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+IEZ1bGwgU3RhY2sgV2ViIERldmVsb3BlciA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zZWN0aW9uLWNvbnRlbnQtaW50cm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhhdmUgYSBsb29rIGF0IG15IHBvcnRmb2xpbyBhbmQgam9iIGhpc3RvcnkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1jdXN0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWlubmVyXCI+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZSBpbWFnZS0yXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNlY3Rpb24tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+UmVhY3QgYW5kIE5leHQgaXMgQW1hemluZyEgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tc2VjdGlvbi1jb250ZW50LWludHJvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgZ290IGEgaW50ZXJlc3RpbmcgcHJvamVjdCwgSSdtIHJlYWR5IVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWN1c3RvbSBzaGFkb3ctY3VzdG9tLW9yYW5nZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctaW5uZXJcIj4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIG1kPVwiNlwiIGNsYXNzTmFtZT1cImhlcm8td2VsY29tZS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXdlbGNvbWUtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIHRoZSBwb3J0Zm9saW8gd2Vic2l0ZSBvZiBLaXNob24gU3QuIENsYWlyLlxuICAgICAgICAgICAgICAgICAgICBHZXQgaW5mb3JtZWQsIGNvbGxhYm9yYXRlIGFuZCBkaXNjb3ZlciBwcm9qZWN0cyBJIHdhcyB3b3JraW5nIG9uIHRocm91Z2ggdGhlIHllYXJzIVxuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8VHlwZWRcbiAgICAgICAgICAgICAgICAgIGxvb3BcbiAgICAgICAgICAgICAgICAgIHR5cGVTcGVlZD17NzB9XG4gICAgICAgICAgICAgICAgICBiYWNrU3BlZWQ9ezcwfVxuICAgICAgICAgICAgICAgICAgc3RyaW5ncz17Uk9MRVN9XG4gICAgICAgICAgICAgICAgICBiYWNrRGVsYXk9ezEwMDB9XG4gICAgICAgICAgICAgICAgICBsb29wQ291bnQ9ezB9XG4gICAgICAgICAgICAgICAgICBzaG93Q3Vyc29yXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxmLXR5cGVkXCJcbiAgICAgICAgICAgICAgICAgIGN1cnNvckNoYXI9XCJ8XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby13ZWxjb21lLWJpb1wiPlxuICAgICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICBMZXQncyB0YWtlIGEgbG9vayBvbiBteSB3b3JrLlxuICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Jhc2VQYWdlPlxuICAgIDwvQmFzZUxheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ "react-typed":
/*!******************************!*\
  !*** external "react-typed" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-typed");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","utils_auth0_js","components_BasePage_js-components_layouts_BaseLayout_js-functions_user_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();