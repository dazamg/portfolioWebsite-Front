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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layouts/BaseLayout */ \"./components/layouts/BaseLayout.js\");\n/* harmony import */ var _components_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/BasePage */ \"./components/BasePage.js\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-typed */ \"react-typed\");\n/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _functions_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/functions/user */ \"./functions/user.js\");\n\nvar _jsxFileName = \"/Users/kishonst.clair/Desktop/PortfolioWebsite/kishon-portfolio-website/pages/index.js\";\n\n\n\n\n\n\nconst ROLES = ['Developer', 'Tech Lover', 'Team Player', 'React.js', 'Python'];\n\nconst Index = () => {\n  const {\n    0: isFlipping,\n    1: setIsFlipping\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    data,\n    loading\n  } = (0,_functions_user__WEBPACK_IMPORTED_MODULE_6__.useGetUser)();\n  const flipInterval = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    startAnimation();\n    return () => flipInterval.current && clearInterval(flipInterval.current);\n  }, []);\n\n  const startAnimation = () => {\n    flipInterval.current = setInterval(() => {\n      setIsFlipping(prevFlipping => !prevFlipping);\n    }, 6000);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    user: data,\n    loading: loading,\n    navClass: \"transparent\",\n    className: `cover ${isFlipping ? 'cover-orange' : 'cover-blue'}`,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BasePage__WEBPACK_IMPORTED_MODULE_3__.default, {\n      indexPage: true,\n      title: \"Portfolio - Kishon StClair\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main-section\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"background-image\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n              md: \"6\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hero-section\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                  className: `flipper ${isFlipping ? 'isFlipping' : ''}`,\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"front\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                      className: \"image image-1\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hero-section-content\",\n                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                          children: \" Full Stack Web Developer \"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 42,\n                          columnNumber: 29\n                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                          className: \"hero-section-content-intro\",\n                          children: \"Have a look at my portfolio and job history.\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 43,\n                          columnNumber: 29\n                        }, undefined)]\n                      }, void 0, true, {\n                        fileName: _jsxFileName,\n                        lineNumber: 41,\n                        columnNumber: 25\n                      }, undefined)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 40,\n                      columnNumber: 23\n                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                      className: \"shadow-custom\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"shadow-inner\",\n                        children: \" \"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 49,\n                        columnNumber: 25\n                      }, undefined)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 48,\n                      columnNumber: 23\n                    }, undefined)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 39,\n                    columnNumber: 21\n                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"back\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                      className: \"image image-2\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"hero-section-content\",\n                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                          children: \"React and Next is Amazing! \"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 55,\n                          columnNumber: 27\n                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                          className: \"hero-section-content-intro\",\n                          children: \"You got a interesting project, I'm ready!\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 56,\n                          columnNumber: 29\n                        }, undefined)]\n                      }, void 0, true, {\n                        fileName: _jsxFileName,\n                        lineNumber: 54,\n                        columnNumber: 25\n                      }, undefined)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 53,\n                      columnNumber: 23\n                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                      className: \"shadow-custom shadow-custom-orange\",\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"shadow-inner\",\n                        children: \" \"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 62,\n                        columnNumber: 25\n                      }, undefined)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 61,\n                      columnNumber: 23\n                    }, undefined)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 52,\n                    columnNumber: 21\n                  }, undefined)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 38,\n                  columnNumber: 19\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 17\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n              md: \"6\",\n              className: \"hero-welcome-wrapper\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hero-welcome-text\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                  children: \"Welcome to the portfolio website of Kishon St. Clair. Get informed, collaborate and discover projects I was working on through the years!\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 70,\n                  columnNumber: 19\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_typed__WEBPACK_IMPORTED_MODULE_5___default()), {\n                loop: true,\n                typeSpeed: 70,\n                backSpeed: 70,\n                strings: ROLES,\n                backDelay: 1000,\n                loopCount: 0,\n                showCursor: true,\n                className: \"self-typed\",\n                cursorChar: \"|\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 75,\n                columnNumber: 17\n              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hero-welcome-bio\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                  children: \"Let's take a look on my work.\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 87,\n                  columnNumber: 19\n                }, undefined)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 17\n              }, undefined)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9raXNob24tcG9ydGZvbGlvLXdlYnNpdGUvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIlJPTEVTIiwiSW5kZXgiLCJpc0ZsaXBwaW5nIiwic2V0SXNGbGlwcGluZyIsInVzZVN0YXRlIiwiZGF0YSIsImxvYWRpbmciLCJ1c2VHZXRVc2VyIiwiZmxpcEludGVydmFsIiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic3RhcnRBbmltYXRpb24iLCJjdXJyZW50IiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldkZsaXBwaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDLFdBQUQsRUFBYyxZQUFkLEVBQTRCLGFBQTVCLEVBQTRDLFVBQTVDLEVBQXdELFFBQXhELENBQWQ7O0FBQ0EsTUFBTUMsS0FBSyxHQUFHLE1BQU07QUFDbEIsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCQywrQ0FBUSxDQUFDLEtBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUVDLFFBQUY7QUFBUUM7QUFBUixNQUFvQkMsMkRBQVUsRUFBcEM7QUFDQSxRQUFNQyxZQUFZLEdBQUdDLDZDQUFNLEVBQTNCO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkQyxrQkFBYztBQUNkLFdBQU8sTUFBTUgsWUFBWSxDQUFDSSxPQUFiLElBQXdCQyxhQUFhLENBQUNMLFlBQVksQ0FBQ0ksT0FBZCxDQUFsRDtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7O0FBS0EsUUFBTUQsY0FBYyxHQUFHLE1BQU07QUFDM0JILGdCQUFZLENBQUNJLE9BQWIsR0FBdUJFLFdBQVcsQ0FBQyxNQUFNO0FBQ3ZDWCxtQkFBYSxDQUFDWSxZQUFZLElBQUksQ0FBQ0EsWUFBbEIsQ0FBYjtBQUNELEtBRmlDLEVBRS9CLElBRitCLENBQWxDO0FBR0QsR0FKRDs7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RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFqQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBeUVELENBekZEOztBQTJGQSwrREFBZUMsS0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL2xheW91dHMvQmFzZUxheW91dCc7XG5pbXBvcnQgQmFzZVBhZ2UgZnJvbSBcIkAvY29tcG9uZW50cy9CYXNlUGFnZVwiXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgVHlwZWQgZnJvbSAncmVhY3QtdHlwZWQnO1xuaW1wb3J0IHsgdXNlR2V0VXNlciB9IGZyb20gJ0AvZnVuY3Rpb25zL3VzZXInO1xuXG5jb25zdCBST0xFUyA9IFsnRGV2ZWxvcGVyJywgJ1RlY2ggTG92ZXInLCAnVGVhbSBQbGF5ZXInLCAgJ1JlYWN0LmpzJywgJ1B5dGhvbiddO1xuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0ZsaXBwaW5nLCBzZXRJc0ZsaXBwaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nIH0gPSB1c2VHZXRVc2VyKCk7XG4gIGNvbnN0IGZsaXBJbnRlcnZhbCA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc3RhcnRBbmltYXRpb24oKTtcbiAgICByZXR1cm4gKCkgPT4gZmxpcEludGVydmFsLmN1cnJlbnQgJiYgY2xlYXJJbnRlcnZhbChmbGlwSW50ZXJ2YWwuY3VycmVudClcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHN0YXJ0QW5pbWF0aW9uID0gKCkgPT4ge1xuICAgIGZsaXBJbnRlcnZhbC5jdXJyZW50ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0SXNGbGlwcGluZyhwcmV2RmxpcHBpbmcgPT4gIXByZXZGbGlwcGluZyk7XG4gICAgfSwgNjAwMCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCYXNlTGF5b3V0XG4gICAgICB1c2VyPXtkYXRhfVxuICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgIG5hdkNsYXNzPVwidHJhbnNwYXJlbnRcIlxuICAgICAgY2xhc3NOYW1lPXtgY292ZXIgJHtpc0ZsaXBwaW5nID8gJ2NvdmVyLW9yYW5nZScgOiAnY292ZXItYmx1ZSd9YH0+XG4gICAgICA8QmFzZVBhZ2UgaW5kZXhQYWdlIHRpdGxlPVwiUG9ydGZvbGlvIC0gS2lzaG9uIFN0Q2xhaXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtaW1hZ2VcIj48L2Rpdj5cbiAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbCBtZD1cIjZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGlwcGVyICR7aXNGbGlwcGluZyA/ICdpc0ZsaXBwaW5nJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyb250XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZSBpbWFnZS0xXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNlY3Rpb24tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4gRnVsbCBTdGFjayBXZWIgRGV2ZWxvcGVyIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNlY3Rpb24tY29udGVudC1pbnRyb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGF2ZSBhIGxvb2sgYXQgbXkgcG9ydGZvbGlvIGFuZCBqb2IgaGlzdG9yeS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LWN1c3RvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctaW5uZXJcIj4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlIGltYWdlLTJcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tc2VjdGlvbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5SZWFjdCBhbmQgTmV4dCBpcyBBbWF6aW5nISA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zZWN0aW9uLWNvbnRlbnQtaW50cm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBnb3QgYSBpbnRlcmVzdGluZyBwcm9qZWN0LCBJJ20gcmVhZHkhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFkb3ctY3VzdG9tIHNoYWRvdy1jdXN0b20tb3JhbmdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1pbm5lclwiPiA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgIDxDb2wgbWQ9XCI2XCIgY2xhc3NOYW1lPVwiaGVyby13ZWxjb21lLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8td2VsY29tZS10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgIFdlbGNvbWUgdG8gdGhlIHBvcnRmb2xpbyB3ZWJzaXRlIG9mIEtpc2hvbiBTdC4gQ2xhaXIuXG4gICAgICAgICAgICAgICAgICAgIEdldCBpbmZvcm1lZCwgY29sbGFib3JhdGUgYW5kIGRpc2NvdmVyIHByb2plY3RzIEkgd2FzIHdvcmtpbmcgb24gdGhyb3VnaCB0aGUgeWVhcnMhXG4gICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxUeXBlZFxuICAgICAgICAgICAgICAgICAgbG9vcFxuICAgICAgICAgICAgICAgICAgdHlwZVNwZWVkPXs3MH1cbiAgICAgICAgICAgICAgICAgIGJhY2tTcGVlZD17NzB9XG4gICAgICAgICAgICAgICAgICBzdHJpbmdzPXtST0xFU31cbiAgICAgICAgICAgICAgICAgIGJhY2tEZWxheT17MTAwMH1cbiAgICAgICAgICAgICAgICAgIGxvb3BDb3VudD17MH1cbiAgICAgICAgICAgICAgICAgIHNob3dDdXJzb3JcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGYtdHlwZWRcIlxuICAgICAgICAgICAgICAgICAgY3Vyc29yQ2hhcj1cInxcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXdlbGNvbWUtYmlvXCI+XG4gICAgICAgICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgICAgIExldCdzIHRha2UgYSBsb29rIG9uIG15IHdvcmsuXG4gICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQmFzZVBhZ2U+XG4gICAgPC9CYXNlTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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