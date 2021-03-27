/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateelectrowatt"]("main",{

/***/ "./src/modules/upScroll.js":
/*!*********************************!*\
  !*** ./src/modules/upScroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n // скролл вверх\n\nvar upScroll = function upScroll() {\n  var upScrollBtn = document.querySelector('.up'); // console.log(upScrollBtn);\n\n  var serveiceSection = document.querySelector('.services-section');\n  upScrollBtn.style.display = 'none';\n  var heightDocument = document.documentElement.clientHeight;\n  var serveiceSectionHeight = document.documentElement.clientHeight; // console.log('offset', serveiceSection.offsetHeight);\n  // console.log('top', serveiceSection.clientTop);\n  // console.log('clientHeight', serveiceSection.clientHeight);\n  // console.log('scrollHeight', serveiceSection.scrollHeight);\n  // scrollHeight\n  // console.log(document.documentElement.clientHeight);\n\n  if (serveiceSectionHeight >= heightDocument) {\n    upScrollBtn.style.display = 'block';\n  } // console.dir(serveiceSection.clientHeight);\n  // console.dir(serveiceSection);\n\n\n  var upScrollFunc = function upScrollFunc() {};\n\n  upScrollBtn.addEventListener('click', function () {\n    upScrollFunc();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (upScroll);\n\n//# sourceURL=webpack://electrowatt/./src/modules/upScroll.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("701f69244a016176e5e2")
/******/ })();
/******/ 
/******/ }
);