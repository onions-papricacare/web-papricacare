"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/detail/[...params]",{

/***/ "./src/pages/detail/[...params].js":
/*!*****************************************!*\
  !*** ./src/pages/detail/[...params].js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var components_Detail_DetailTiltle_DetailContents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Detail/DetailTiltle/DetailContents */ \"./src/components/Detail/DetailTiltle/DetailContents.js\");\n/* harmony import */ var components_Detail_DetailTiltle_DetailTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Detail/DetailTiltle/DetailTitle */ \"./src/components/Detail/DetailTiltle/DetailTitle.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/kimsunjoo/Bitbucket/pcare-webapp/src/pages/detail/[...params].js\";\n\n\n\n\nfunction Detail(_ref) {\n  var data = _ref.data;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(components_Detail_DetailTiltle_DetailTitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(components_Detail_DetailTiltle_DetailContents__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h4\", {\n      children: [\"\\uD558\\uC774\", data.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n      children: \"\\uD558\\uC774\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\n_c = Detail;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\n\nvar _c;\n\n$RefreshReg$(_c, \"Detail\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGV0YWlsL1suLi5wYXJhbXNdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBO0FBQ0E7OztBQUVDLFNBQVNFLE1BQVQsT0FBd0I7RUFBQSxJQUFQQyxJQUFPLFFBQVBBLElBQU87RUFFdkIsb0JBQ0U7SUFBQSx3QkFDRSw4REFBQyxrRkFBRDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBREYsZUFFRSw4REFBQyxxRkFBRDtNQUFBO01BQUE7TUFBQTtJQUFBLFFBRkYsZUFHRTtNQUFBLDJCQUFPQSxJQUFJLENBQUNDLElBQVo7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFFBSEYsZUFJRTtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxRQUpGO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBU0Q7O0tBWFNGOztBQWFWLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kZXRhaWwvWy4uLnBhcmFtc10uanM/MzRiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IERldGFpbENvbnRlbnRzIGZyb20gJ2NvbXBvbmVudHMvRGV0YWlsL0RldGFpbFRpbHRsZS9EZXRhaWxDb250ZW50cyc7XG5pbXBvcnQgRGV0YWlsVGl0bGUgZnJvbSAnY29tcG9uZW50cy9EZXRhaWwvRGV0YWlsVGlsdGxlL0RldGFpbFRpdGxlJztcblxuIGZ1bmN0aW9uIERldGFpbCh7ZGF0YX0pIHtcbiAgXG4gIHJldHVybihcbiAgICA8ZGl2PlxuICAgICAgPERldGFpbFRpdGxlIC8+XG4gICAgICA8RGV0YWlsQ29udGVudHMvPlxuICAgICAgPGg0Pu2VmOydtHtkYXRhLm5hbWV9PC9oND5cbiAgICAgIDxoMj7tlZjsnbRcbiAgICAgIDwvaDI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbDsgXG5cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jKHtxdWVyeX0pID0+IHtcbiAgY29uc3Qge3BhcmFtc30gPSBxdWVyeTtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2Rldi5wYXByaWNhY2FyZS5jb20vdjQvYXBpLXd3dy9kcnVncy9tZWRpLyR7cGFyYW1zfWAse1xuICAgIGhlYWRlcnM6IHtcbiAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgfX0pXG4gIGNvbnN0IGRhdGE9IHJlcy5kYXRhO1xuIFxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IGRhdGEgfVxuICB9XG59O1xuXG4iXSwibmFtZXMiOlsiRGV0YWlsQ29udGVudHMiLCJEZXRhaWxUaXRsZSIsIkRldGFpbCIsImRhdGEiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/detail/[...params].js\n"));

/***/ })

});