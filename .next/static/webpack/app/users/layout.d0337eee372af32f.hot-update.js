"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/users/layout",{

/***/ "(app-pages-browser)/./app/components/sidebar/DesktopItem.tsx":
/*!************************************************!*\
  !*** ./app/components/sidebar/DesktopItem.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst DesktopItem = (param)=>{\n    let { label, icon: Icon, href, onClick, active } = param;\n    const handleClick = ()=>{\n        if (onClick) {\n            return onClick();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        onClick: handleClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: href,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\игорь\\\\Documents\\\\GitHub\\\\Messanger-Clone\\\\app\\\\components\\\\sidebar\\\\DesktopItem.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: label\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\игорь\\\\Documents\\\\GitHub\\\\Messanger-Clone\\\\app\\\\components\\\\sidebar\\\\DesktopItem.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\игорь\\\\Documents\\\\GitHub\\\\Messanger-Clone\\\\app\\\\components\\\\sidebar\\\\DesktopItem.tsx\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\игорь\\\\Documents\\\\GitHub\\\\Messanger-Clone\\\\app\\\\components\\\\sidebar\\\\DesktopItem.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_c = DesktopItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DesktopItem);\nvar _c;\n$RefreshReg$(_c, \"DesktopItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3NpZGViYXIvRGVza3RvcEl0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBRzZCO0FBVTdCLE1BQU1DLGNBQTBDO1FBQUMsRUFDL0NDLEtBQUssRUFDTEMsTUFBTUMsSUFBSSxFQUNWQyxJQUFJLEVBQ0pDLE9BQU8sRUFDUEMsTUFBTSxFQUNQO0lBQ0MsTUFBTUMsY0FBYztRQUNsQixJQUFJRixTQUFTO1lBQ1gsT0FBT0E7UUFDVDtJQUNGO0lBR0EscUJBQ0UsOERBQUNHO1FBQUdILFNBQVNFO2tCQUNULDRFQUFDUixrREFBSUE7WUFBQ0ssTUFBTUE7OzhCQUNaLDhEQUFDRDs7Ozs7OEJBQ0QsOERBQUNNOzhCQUFNUjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZjtLQXZCTUQ7QUF5Qk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvc2lkZWJhci9EZXNrdG9wSXRlbS50c3g/ZmQwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmludGVyZmFjZSBEZXNrdG9wSXRlbVByb3BzIHtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGljb246IGFueTtcclxuICBocmVmOiBzdHJpbmc7XHJcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XHJcbiAgYWN0aXZlPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgRGVza3RvcEl0ZW06IFJlYWN0LkZDPERlc2t0b3BJdGVtUHJvcHM+ID0gKHtcclxuICBsYWJlbCxcclxuICBpY29uOiBJY29uLFxyXG4gIGhyZWYsXHJcbiAgb25DbGljayxcclxuICBhY3RpdmUsXHJcbn0pID0+IHtcclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIGlmIChvbkNsaWNrKSB7XHJcbiAgICAgIHJldHVybiBvbkNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgIDxJY29uPjwvSWNvbj5cclxuICAgICAgICA8c3Bhbj57bGFiZWx9PC9zcGFuPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgIDwvbGk+XHJcbiAgKVxyXG4gIDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlc2t0b3BJdGVtO1xyXG4iXSwibmFtZXMiOlsiTGluayIsIkRlc2t0b3BJdGVtIiwibGFiZWwiLCJpY29uIiwiSWNvbiIsImhyZWYiLCJvbkNsaWNrIiwiYWN0aXZlIiwiaGFuZGxlQ2xpY2siLCJsaSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/sidebar/DesktopItem.tsx\n"));

/***/ })

});