"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./Components/projects/Projects.js":
/*!*****************************************!*\
  !*** ./Components/projects/Projects.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../firebase */ \"./firebase/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Projects = (param)=>{\n    let { lenguage  } = param;\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { firebase  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_firebase__WEBPACK_IMPORTED_MODULE_2__.FirebaseContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        firebase.firestore.collection(\"posts\").get().then(async (querySnapshot)=>{\n            const arrayTemp = [];\n            await querySnapshot.forEach((doc)=>{\n                arrayTemp.push({\n                    id: doc.id,\n                    title: doc.data().title,\n                    comment: doc.data().comment,\n                    type: doc.data().type,\n                    img: doc.data().img\n                });\n                // doc.data() is never undefined for query doc snapshots\n                console.log(doc.id, \" => \", doc.data().title);\n            });\n            setPosts(arrayTemp);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        class: \"projects section-padding\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"row\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"col-md-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"section-subtitle\",\n                                children: lenguage == \"EN\" ? \"Latest Works\" : \"Nuestros \\xfaltimos trabajos\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ericaguilarmarcial/Desktop/ZyC/Components/projects/Projects.js\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"section-title\",\n                                children: lenguage == \"EN\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        \"Nuestros \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Proyectos\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ericaguilarmarcial/Desktop/ZyC/Components/projects/Projects.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    ]\n                                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        \"Our \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Projects\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ericaguilarmarcial/Desktop/ZyC/Components/projects/Projects.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 36\n                                        }, undefined)\n                                    ]\n                                }, void 0, true)\n                            }, void 0, false, {\n                                fileName: \"/Users/ericaguilarmarcial/Desktop/ZyC/Components/projects/Projects.js\",\n                                lineNumber: 35,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ericaguilarmarcial/Desktop/ZyC/Components/projects/Projects.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ericaguilarmarcial/Desktop/ZyC/Components/projects/Projects.js\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"row\",\n                    children: posts.forEach((item, index)=>{\n                        index % 2 == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                \" \",\n                                index % 2 == 0,\n                                \" \",\n                                item.title\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                \" \",\n                                index % 2 == 0,\n                                \" \",\n                                item.title\n                            ]\n                        }, void 0, true);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/ericaguilarmarcial/Desktop/ZyC/Components/projects/Projects.js\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ericaguilarmarcial/Desktop/ZyC/Components/projects/Projects.js\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ericaguilarmarcial/Desktop/ZyC/Components/projects/Projects.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Projects, \"IjCC4eUGlaZmtvc9ggOdmryJkRA=\");\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUE4RDtBQUNiO0FBRWpELE1BQU1LLFdBQVcsU0FBZ0I7UUFBZixFQUFDQyxTQUFRLEVBQUM7O0lBRXhCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sRUFBQ1EsU0FBUSxFQUFDLEdBQUdQLGlEQUFVQSxDQUFDRSxzREFBZUE7SUFFN0NELGdEQUFTQSxDQUFDLElBQU07UUFDWk0sU0FBU0MsU0FBUyxDQUFDQyxVQUFVLENBQUMsU0FBU0MsR0FBRyxHQUFHQyxJQUFJLENBQUMsT0FBT0MsZ0JBQWtCO1lBQ3ZFLE1BQU1DLFlBQVksRUFBRTtZQUNwQixNQUFNRCxjQUFjRSxPQUFPLENBQUMsQ0FBQ0MsTUFBUTtnQkFDakNGLFVBQVVHLElBQUksQ0FBQztvQkFBQ0MsSUFBR0YsSUFBSUUsRUFBRTtvQkFBRUMsT0FBT0gsSUFBSUksSUFBSSxHQUFHRCxLQUFLO29CQUFFRSxTQUFTTCxJQUFJSSxJQUFJLEdBQUdDLE9BQU87b0JBQUNDLE1BQU1OLElBQUlJLElBQUksR0FBR0UsSUFBSTtvQkFBRUMsS0FBS1AsSUFBSUksSUFBSSxHQUFHRyxHQUFHO2dCQUFBO2dCQUMxSCx3REFBd0Q7Z0JBQ3hEQyxRQUFRQyxHQUFHLENBQUNULElBQUlFLEVBQUUsRUFBRSxRQUFRRixJQUFJSSxJQUFJLEdBQUdELEtBQUs7WUFDaEQ7WUFDQVosU0FBU087UUFDYjtJQUNKLEdBQUcsRUFBRTtJQUdMLHFCQUNJLDhEQUFDWTtRQUFRQyxPQUFNO2tCQUNmLDRFQUFDQztZQUFJRCxPQUFNOzs4QkFDUCw4REFBQ0M7b0JBQUlELE9BQU07OEJBQ1AsNEVBQUNDO3dCQUFJRCxPQUFNOzswQ0FDUCw4REFBQ0M7Z0NBQUlELE9BQU07MENBRUh0QixZQUFZLE9BQ1osaUJBRUEsOEJBQTJCOzs7Ozs7MENBR25DLDhEQUFDdUI7Z0NBQUlELE9BQU07MENBRUh0QixZQUFZLHFCQUNYOzt3Q0FBRTtzREFBUyw4REFBQ3dCO3NEQUFLOzs7Ozs7O2lFQUVqQjs7d0NBQUU7c0RBQUksOERBQUNBO3NEQUFLOzs7Ozs7O2dEQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTWhELDhEQUFDRDtvQkFBSUQsT0FBTTs4QkFFSHJCLE1BQU1TLE9BQU8sQ0FBQyxDQUFDZSxNQUFLQyxRQUFVO3dCQUV0QkEsUUFBUSxLQUFLLGtCQUNaOztnQ0FBRTtnQ0FBRUEsUUFBUSxLQUFLO2dDQUFFO2dDQUFFRCxLQUFLWCxLQUFLOzt5REFDL0I7O2dDQUFFO2dDQUFFWSxRQUFRLEtBQUs7Z0NBQUU7Z0NBQUVELEtBQUtYLEtBQUs7O3dDQUFLO29CQUU3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVcEI7R0E1RE1mO0tBQUFBO0FBOEROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdHMuanM/NGRhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmlyZWJhc2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UnO1xuXG5jb25zdCBQcm9qZWN0cyA9ICh7bGVuZ3VhZ2V9KSA9PiB7XG5cbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCB7ZmlyZWJhc2V9ID0gdXNlQ29udGV4dChGaXJlYmFzZUNvbnRleHQpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJwb3N0c1wiKS5nZXQoKS50aGVuKGFzeW5jIChxdWVyeVNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhcnJheVRlbXAgPSBbXTtcbiAgICAgICAgICAgIGF3YWl0IHF1ZXJ5U25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XG4gICAgICAgICAgICAgICAgYXJyYXlUZW1wLnB1c2goe2lkOmRvYy5pZCwgdGl0bGU6IGRvYy5kYXRhKCkudGl0bGUsIGNvbW1lbnQ6IGRvYy5kYXRhKCkuY29tbWVudCx0eXBlOiBkb2MuZGF0YSgpLnR5cGUsIGltZzogZG9jLmRhdGEoKS5pbWd9KVxuICAgICAgICAgICAgICAgIC8vIGRvYy5kYXRhKCkgaXMgbmV2ZXIgdW5kZWZpbmVkIGZvciBxdWVyeSBkb2Mgc25hcHNob3RzXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZG9jLmlkLCBcIiA9PiBcIiwgZG9jLmRhdGEoKS50aXRsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFBvc3RzKGFycmF5VGVtcClcbiAgICAgICAgfSk7XG4gICAgfSwgW10pXG4gICAgXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwicHJvamVjdHMgc2VjdGlvbi1wYWRkaW5nXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3VhZ2UgPT0gJ0VOJz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTGF0ZXN0IFdvcmtzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnTnVlc3Ryb3Mgw7psdGltb3MgdHJhYmFqb3MnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd1YWdlID09ICdFTic/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDw+TnVlc3Ryb3MgPHNwYW4+UHJveWVjdG9zPC9zcGFuPjwvPilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDw+T3VyIDxzcGFuPlByb2plY3RzPC9zcGFuPjwvPilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdHMuZm9yRWFjaCgoaXRlbSxpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggJSAyID09IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8PiB7aW5kZXggJSAyID09IDB9IHtpdGVtLnRpdGxlfTwvPik6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKDw+IHtpbmRleCAlIDIgPT0gMH0ge2l0ZW0udGl0bGV9PC8+KVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsIkZpcmViYXNlQ29udGV4dCIsIlByb2plY3RzIiwibGVuZ3VhZ2UiLCJwb3N0cyIsInNldFBvc3RzIiwiZmlyZWJhc2UiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJhcnJheVRlbXAiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsImlkIiwidGl0bGUiLCJkYXRhIiwiY29tbWVudCIsInR5cGUiLCJpbWciLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImNsYXNzIiwiZGl2Iiwic3BhbiIsIml0ZW0iLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/projects/Projects.js\n"));

/***/ })

});