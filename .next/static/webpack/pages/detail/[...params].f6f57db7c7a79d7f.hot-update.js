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

/***/ "./src/components/Detail/DetailTiltle/DetailContents.js":
/*!**************************************************************!*\
  !*** ./src/components/Detail/DetailTiltle/DetailContents.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _DetailTap_DetailInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DetailTap/DetailInfo */ \"./src/components/Detail/DetailTap/DetailInfo.js\");\n/* harmony import */ var _DetailTap_DrugAttribute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DetailTap/DrugAttribute */ \"./src/components/Detail/DetailTap/DrugAttribute.js\");\n/* harmony import */ var _DetailTap_PrescriptionDisease__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DetailTap/PrescriptionDisease */ \"./src/components/Detail/DetailTap/PrescriptionDisease.js\");\n/* harmony import */ var _DetailTap_QnA__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DetailTap/QnA */ \"./src/components/Detail/DetailTap/QnA.js\");\n/* harmony import */ var _DetailTap_SummaryDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DetailTap/SummaryDetail */ \"./src/components/Detail/DetailTap/SummaryDetail.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/Users/kimsunjoo/Bitbucket/pcare-webapp/src/components/Detail/DetailTiltle/DetailContents.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n// import axios from 'axios';\n\n\n\n\n\n\n\n\n\nvar DetailContents = function DetailContents() {\n  _s();\n\n  var _Object$keys;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"요약설명\"),\n      openTab = _useState[0],\n      setOpenTab = _useState[1];\n\n  var MAPPING_OBJ = {\n    요약설명: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_DetailTap_DetailInfo__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }, _this),\n    약제특성: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_DetailTap_DrugAttribute__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }, _this),\n    처방질병: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_DetailTap_PrescriptionDisease__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }, _this),\n    상세정보: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_DetailTap_SummaryDetail__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }, _this),\n    QnA: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_DetailTap_QnA__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 8\n    }, _this)\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TapButtonContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(MenuTab, {\n      children: Object === null || Object === void 0 ? void 0 : (_Object$keys = Object.keys(MAPPING_OBJ)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.map(function (tab, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(DrugDetailUl, {\n          onClick: function onClick() {\n            return setOpenTab(tab);\n          },\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(DrugDetailLi, {\n            children: tab\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 15\n          }, _this)\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(ContentsWrapper, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Contents, {\n        children: MAPPING_OBJ[openTab]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 3\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 3\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 2\n  }, _this);\n};\n\n_s(DetailContents, \"5UGqjPlf3YIWMDgeIVjfTujsFVM=\");\n\n_c = DetailContents;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailContents);\nvar TapButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  componentId: \"sc-ukqw89-0\"\n})([\"\"]);\n_c2 = TapButtonContainer;\nvar MenuTab = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  componentId: \"sc-ukqw89-1\"\n})([\"display:flex;width:80%;height:100px;\"]);\n_c3 = MenuTab;\nvar DrugDetailUl = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  componentId: \"sc-ukqw89-2\"\n})([\"display:flex;align-items:center;justify-items:center;font-size:15px;font-weight:600;background-color:white;margin:0.8rem;border:1px solid #E6E8ED;width:6rem;height:2.8rem;border-radius:18px;&:hover{color:white;background-color:black;}\"]);\n_c4 = DrugDetailUl;\nvar DrugDetailLi = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  componentId: \"sc-ukqw89-3\"\n})([\"width:6rem;padding :1.3rem;list-style:none;\"]);\n_c5 = DrugDetailLi;\nvar ContentsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  componentId: \"sc-ukqw89-4\"\n})([\"\"]);\n_c6 = ContentsWrapper;\nvar Contents = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n  componentId: \"sc-ukqw89-5\"\n})([\"background-color:white;width:80%;border:1px solid black;\"]);\n_c7 = Contents;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"DetailContents\");\n$RefreshReg$(_c2, \"TapButtonContainer\");\n$RefreshReg$(_c3, \"MenuTab\");\n$RefreshReg$(_c4, \"DrugDetailUl\");\n$RefreshReg$(_c5, \"DrugDetailLi\");\n$RefreshReg$(_c6, \"ContentsWrapper\");\n$RefreshReg$(_c7, \"Contents\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZXRhaWwvRGV0YWlsVGlsdGxlL0RldGFpbENvbnRlbnRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLElBQU1RLGNBQWMsR0FBRSxTQUFoQkEsY0FBZ0IsR0FBUTtFQUFBOztFQUFBOztFQUM3QixnQkFBOEJQLCtDQUFRLENBQUcsTUFBSCxDQUF0QztFQUFBLElBQU9RLE9BQVA7RUFBQSxJQUFnQkMsVUFBaEI7O0VBR0EsSUFBTUMsV0FBVyxHQUFHO0lBQ25CQyxJQUFJLGVBQUUsOERBQUMsNkRBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURhO0lBRW5CQyxJQUFJLGVBQUUsOERBQUMsZ0VBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUZhO0lBR25CQyxJQUFJLGVBQUUsOERBQUMsc0VBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUhhO0lBSW5CQyxJQUFJLGVBQUUsOERBQUMsZ0VBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQSxTQUphO0lBS25CVCxHQUFHLGVBQUUsOERBQUMsc0RBQUQ7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUxjLENBQXBCO0VBUUMsb0JBQ0QsOERBQUMsa0JBQUQ7SUFBQSx3QkFDRyw4REFBQyxPQUFEO01BQUEsVUFDT1UsTUFEUCxhQUNPQSxNQURQLHVDQUNPQSxNQUFNLENBQUVDLElBQVIsQ0FBYU4sV0FBYixDQURQLGlEQUNPLGFBQTJCTyxHQUEzQixDQUErQixVQUFDQyxHQUFELEVBQU1DLEtBQU47UUFBQSxvQkFDOUIsOERBQUMsWUFBRDtVQUEwQixPQUFPLEVBQUU7WUFBQSxPQUFNVixVQUFVLENBQUNTLEdBQUQsQ0FBaEI7VUFBQSxDQUFuQztVQUFBLHVCQUNFLDhEQUFDLFlBQUQ7WUFBQSxVQUFlQTtVQUFmO1lBQUE7WUFBQTtZQUFBO1VBQUE7UUFERixHQUFtQkMsS0FBbkI7VUFBQTtVQUFBO1VBQUE7UUFBQSxTQUQ4QjtNQUFBLENBQS9CO0lBRFA7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURILGVBUUMsOERBQUMsZUFBRDtNQUFBLHVCQUNBLDhEQUFDLFFBQUQ7UUFBQSxVQUNHVCxXQUFXLENBQUNGLE9BQUQ7TUFEZDtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBREE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQVJEO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxTQURDO0FBY0EsQ0ExQkY7O0dBQU1EOztLQUFBQTtBQTRCTiwrREFBZUEsY0FBZjtBQUdBLElBQU1hLGtCQUFrQixHQUFHbkIsd0VBQUg7RUFBQTtBQUFBLFFBQXhCO01BQU1tQjtBQUtOLElBQU1FLE9BQU8sR0FBR3JCLHdFQUFIO0VBQUE7QUFBQSw0Q0FBYjtNQUFNcUI7QUFNTixJQUFNQyxZQUFZLEdBQUV0Qix3RUFBRjtFQUFBO0FBQUEsa1BBQWxCO01BQU1zQjtBQWtCTixJQUFNQyxZQUFZLEdBQUd2Qix3RUFBSDtFQUFBO0FBQUEsbURBQWxCO01BQU11QjtBQU9OLElBQU1DLGVBQWUsR0FBRXhCLHdFQUFGO0VBQUE7QUFBQSxRQUFyQjtNQUFNd0I7QUFJTixJQUFNQyxRQUFRLEdBQUd6Qix3RUFBSDtFQUFBO0FBQUEsZ0VBQWQ7TUFBTXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RldGFpbC9EZXRhaWxUaWx0bGUvRGV0YWlsQ29udGVudHMuanM/ODdmMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgRGV0YWlsSW5mbyBmcm9tICcuLi9EZXRhaWxUYXAvRGV0YWlsSW5mbyc7XG5pbXBvcnQgRHJ1Z0F0dHJpYnV0ZSBmcm9tICcuLi9EZXRhaWxUYXAvRHJ1Z0F0dHJpYnV0ZSc7XG5pbXBvcnQgUHJlc2NyaXB0aW9uRGlzZWFzZSBmcm9tJy4uL0RldGFpbFRhcC9QcmVzY3JpcHRpb25EaXNlYXNlJztcbmltcG9ydCBRbkEgZnJvbSAnLi4vRGV0YWlsVGFwL1FuQSc7XG5pbXBvcnQgU3VtbWFyeURldGFpbCBmcm9tJy4uL0RldGFpbFRhcC9TdW1tYXJ5RGV0YWlsJztcblxuXG5jb25zdCBEZXRhaWxDb250ZW50cz0gKCAgKSA9PiB7XG4gY29uc3QgW29wZW5UYWIsIHNldE9wZW5UYWJdID0gdXNlU3RhdGUgKCBcIuyalOyVveyEpOuqhVwiKTtcblxuXG4gY29uc3QgTUFQUElOR19PQkogPSB7XG4gIOyalOyVveyEpOuqhTogPERldGFpbEluZm8gIC8+LFxuICDslb3soJztirnshLE6IDxEcnVnQXR0cmlidXRlIC8+LFxuICDsspjrsKnsp4jrs5E6IDxQcmVzY3JpcHRpb25EaXNlYXNlIC8+LFxuICDsg4HshLjsoJXrs7Q6IDxTdW1tYXJ5RGV0YWlsIC8+LFxuICBRbkE6IDxRbkEvPlxuIH07XG5cbiAgcmV0dXJuIChcbiA8VGFwQnV0dG9uQ29udGFpbmVyPiAgXG4gICAgPE1lbnVUYWI+XG4gICAgICAgICAge09iamVjdD8ua2V5cyhNQVBQSU5HX09CSik/Lm1hcCgodGFiLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPERydWdEZXRhaWxVbCBrZXk9e2luZGV4fSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuVGFiKHRhYil9PlxuICAgICAgICAgICAgICA8RHJ1Z0RldGFpbExpPnt0YWJ9PC9EcnVnRGV0YWlsTGk+XG4gICAgICAgICAgICA8L0RydWdEZXRhaWxVbD5cbiAgICAgICAgICApKX1cbiAgICA8L01lbnVUYWI+XG4gIDxDb250ZW50c1dyYXBwZXI+XG4gIDxDb250ZW50cz5cbiAgICB7TUFQUElOR19PQkpbb3BlblRhYl19PC9Db250ZW50cz5cbiAgPC9Db250ZW50c1dyYXBwZXI+XG4gPC9UYXBCdXR0b25Db250YWluZXI+XG4pfTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsQ29udGVudHM7XG5cblxuY29uc3QgVGFwQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblxuYFxuXG5cbmNvbnN0IE1lbnVUYWIgPSBzdHlsZWQuZGl2YFxuZGlzcGxheTogZmxleDtcbndpZHRoOiA4MCU7XG5oZWlnaHQ6IDEwMHB4O1xuYFxuXG5jb25zdCBEcnVnRGV0YWlsVWw9IHN0eWxlZC5kaXZgXG5kaXNwbGF5OiBmbGV4O1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmp1c3RpZnktaXRlbXM6Y2VudGVyO1xuZm9udC1zaXplOiAxNXB4O1xuZm9udC13ZWlnaHQ6IDYwMDtcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xubWFyZ2luOiAwLjhyZW07XG5ib3JkZXI6IDFweCBzb2xpZCAjRTZFOEVEO1xud2lkdGg6IDZyZW07XG5oZWlnaHQ6IDIuOHJlbTtcbmJvcmRlci1yYWRpdXM6IDE4cHg7XG4mOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xufVxuYFxuXG5jb25zdCBEcnVnRGV0YWlsTGkgPSBzdHlsZWQuZGl2YFxud2lkdGg6IDZyZW07XG5wYWRkaW5nIDogMS4zcmVtO1xubGlzdC1zdHlsZTogbm9uZTtcbmBcblxuXG5jb25zdCBDb250ZW50c1dyYXBwZXI9IHN0eWxlZC5kaXZgXG5cbmBcblxuY29uc3QgQ29udGVudHMgPSBzdHlsZWQuZGl2YFxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG53aWR0aDogODAlO1xuYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5gIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJEZXRhaWxJbmZvIiwiRHJ1Z0F0dHJpYnV0ZSIsIlByZXNjcmlwdGlvbkRpc2Vhc2UiLCJRbkEiLCJTdW1tYXJ5RGV0YWlsIiwiRGV0YWlsQ29udGVudHMiLCJvcGVuVGFiIiwic2V0T3BlblRhYiIsIk1BUFBJTkdfT0JKIiwi7JqU7JW97ISk66qFIiwi7JW97KCc7Yq57ISxIiwi7LKY67Cp7KeI67ORIiwi7IOB7IS47KCV67O0IiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInRhYiIsImluZGV4IiwiVGFwQnV0dG9uQ29udGFpbmVyIiwiZGl2IiwiTWVudVRhYiIsIkRydWdEZXRhaWxVbCIsIkRydWdEZXRhaWxMaSIsIkNvbnRlbnRzV3JhcHBlciIsIkNvbnRlbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Detail/DetailTiltle/DetailContents.js\n"));

/***/ })

});