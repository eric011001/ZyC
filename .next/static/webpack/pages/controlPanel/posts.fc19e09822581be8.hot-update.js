"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/controlPanel/posts",{

/***/ "./Components/controlPanel/TablaUsuarios.js":
/*!**************************************************!*\
  !*** ./Components/controlPanel/TablaUsuarios.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Usuario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Usuario */ \"./Components/controlPanel/Usuario.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase */ \"./firebase/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst TablaUsuarios = ()=>{\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { firebase  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_firebase__WEBPACK_IMPORTED_MODULE_3__.FirebaseContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        firebase.firestore.collection(\"usuarios\").get().then(async (querySnapshot)=>{\n            const arrayTemp = [];\n            await querySnapshot.forEach((doc)=>{\n                arrayTemp.push({\n                    id: doc.id,\n                    name: \"\".concat(doc.data().name, \" \").concat(doc.data().lastName),\n                    email: doc.data().email\n                });\n            // doc.data() is never undefined for query doc snapshots\n            });\n            setUsers(arrayTemp);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: \"table-auto w-full overflow-y-auto my-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    className: \"border-b-2 border-black\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \" px-4 py-2\",\n                            children: \"Nombre\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ericaguilarmarcial/Desktop/ZyC/Components/controlPanel/TablaUsuarios.js\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \" px-4 py-2\",\n                            children: \"Email\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ericaguilarmarcial/Desktop/ZyC/Components/controlPanel/TablaUsuarios.js\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \" px-4 py-2\",\n                            children: \"Acciones\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ericaguilarmarcial/Desktop/ZyC/Components/controlPanel/TablaUsuarios.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ericaguilarmarcial/Desktop/ZyC/Components/controlPanel/TablaUsuarios.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ericaguilarmarcial/Desktop/ZyC/Components/controlPanel/TablaUsuarios.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                className: \"\",\n                children: users.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Usuario__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        id: item.id,\n                        usuario: item\n                    }, void 0, false, {\n                        fileName: \"/Users/ericaguilarmarcial/Desktop/ZyC/Components/controlPanel/TablaUsuarios.js\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/ericaguilarmarcial/Desktop/ZyC/Components/controlPanel/TablaUsuarios.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ericaguilarmarcial/Desktop/ZyC/Components/controlPanel/TablaUsuarios.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(TablaUsuarios, \"TbaJ5l08EXJqFTLETZVKhg2jV6M=\");\n_c = TablaUsuarios;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TablaUsuarios);\nvar _c;\n$RefreshReg$(_c, \"TablaUsuarios\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2NvbnRyb2xQYW5lbC9UYWJsYVVzdWFyaW9zLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBOEQ7QUFDOUI7QUFDaUI7QUFFakQsTUFBTU0sZ0JBQWdCLElBQU07O0lBQ3hCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sRUFBQ1EsU0FBUSxFQUFDLEdBQUdQLGlEQUFVQSxDQUFDRyxzREFBZUE7SUFFN0NGLGdEQUFTQSxDQUFDLElBQU07UUFDWk0sU0FBU0MsU0FBUyxDQUFDQyxVQUFVLENBQUMsWUFBWUMsR0FBRyxHQUFHQyxJQUFJLENBQUMsT0FBT0MsZ0JBQWtCO1lBQzFFLE1BQU1DLFlBQVksRUFBRTtZQUNwQixNQUFNRCxjQUFjRSxPQUFPLENBQUMsQ0FBQ0MsTUFBUTtnQkFDakNGLFVBQVVHLElBQUksQ0FBQztvQkFBQ0MsSUFBR0YsSUFBSUUsRUFBRTtvQkFBRUMsTUFBTSxHQUFzQkgsT0FBbkJBLElBQUlJLElBQUksR0FBR0QsSUFBSSxFQUFDLEtBQXVCLE9BQXBCSCxJQUFJSSxJQUFJLEdBQUdDLFFBQVE7b0JBQUlDLE9BQU9OLElBQUlJLElBQUksR0FBR0UsS0FBSztnQkFBQTtZQUNyRyx3REFBd0Q7WUFFNUQ7WUFDQWYsU0FBU087UUFDYjtJQUNKLEdBQUcsRUFBRTtJQUlMLHFCQUNJLDhEQUFDUztRQUFNQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQ0csNEVBQUNDO29CQUFHRixXQUFVOztzQ0FDViw4REFBQ0c7NEJBQUdILFdBQVU7c0NBQWE7Ozs7OztzQ0FDM0IsOERBQUNHOzRCQUFHSCxXQUFVO3NDQUFhOzs7Ozs7c0NBQzNCLDhEQUFDRzs0QkFBR0gsV0FBVTtzQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR25DLDhEQUFDSTtnQkFBTUosV0FBVTswQkFDWmxCLE1BQU11QixHQUFHLENBQUNDLENBQUFBLHFCQUNQLDhEQUFDM0IsZ0RBQU9BO3dCQUFDZSxJQUFJWSxLQUFLWixFQUFFO3dCQUFFYSxTQUFTRDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbkQ7R0FsQ016QjtLQUFBQTtBQW9DTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL2NvbnRyb2xQYW5lbC9UYWJsYVVzdWFyaW9zLmpzPzE4MjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBVc3VhcmlvIGZyb20gJy4vVXN1YXJpbyc7XG5pbXBvcnQgeyBGaXJlYmFzZUNvbnRleHQgfSBmcm9tICcuLi8uLi9maXJlYmFzZSc7XG5cbmNvbnN0IFRhYmxhVXN1YXJpb3MgPSAoKSA9PiB7XG4gICAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3Qge2ZpcmViYXNlfSA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZpcmViYXNlLmZpcmVzdG9yZS5jb2xsZWN0aW9uKFwidXN1YXJpb3NcIikuZ2V0KCkudGhlbihhc3luYyAocXVlcnlTbmFwc2hvdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXJyYXlUZW1wID0gW107XG4gICAgICAgICAgICBhd2FpdCBxdWVyeVNuYXBzaG90LmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgICAgICAgIGFycmF5VGVtcC5wdXNoKHtpZDpkb2MuaWQsIG5hbWU6IGAke2RvYy5kYXRhKCkubmFtZX0gJHtkb2MuZGF0YSgpLmxhc3ROYW1lfWAsIGVtYWlsOiBkb2MuZGF0YSgpLmVtYWlsfSlcbiAgICAgICAgICAgICAgICAvLyBkb2MuZGF0YSgpIGlzIG5ldmVyIHVuZGVmaW5lZCBmb3IgcXVlcnkgZG9jIHNuYXBzaG90c1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZXRVc2VycyhhcnJheVRlbXApXG4gICAgICAgIH0pO1xuICAgIH0sIFtdKVxuICAgIFxuICAgIFxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUtYXV0byB3LWZ1bGwgb3ZlcmZsb3cteS1hdXRvIG15LTVcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYm9yZGVyLWItMiBib3JkZXItYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cIiBweC00IHB5LTJcIj5Ob21icmU8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiIHB4LTQgcHktMlwiPkVtYWlsPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cIiBweC00IHB5LTJcIj5BY2Npb25lczwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgICAgIHt1c2Vycy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxVc3VhcmlvIGlkPXtpdGVtLmlkfSB1c3VhcmlvPXtpdGVtfS8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGFVc3VhcmlvczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJVc3VhcmlvIiwiRmlyZWJhc2VDb250ZXh0IiwiVGFibGFVc3VhcmlvcyIsInVzZXJzIiwic2V0VXNlcnMiLCJmaXJlYmFzZSIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImFycmF5VGVtcCIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwiaWQiLCJuYW1lIiwiZGF0YSIsImxhc3ROYW1lIiwiZW1haWwiLCJ0YWJsZSIsImNsYXNzTmFtZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwiaXRlbSIsInVzdWFyaW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/controlPanel/TablaUsuarios.js\n"));

/***/ })

});