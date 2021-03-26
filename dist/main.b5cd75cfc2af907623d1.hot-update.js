/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateelectrowatt"]("main",{

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar topSlider = function topSlider() {\n  var slider = document.querySelector('.top-slider');\n  var slides = slider.querySelectorAll('.item');\n  var index = 0;\n\n  var moveSlide = function moveSlide(slideStep) {\n    if (index >= slides.length) {\n      index = 0;\n    }\n\n    slides.forEach(function (item, i) {\n      item.style.transition = '1s ease-in-out';\n\n      if (index === i) {\n        item.style.display = 'block';\n      } else {\n        item.style.display = 'none';\n      }\n    });\n    index += slideStep;\n  };\n\n  var timerId = function timerId() {\n    setInterval(function () {\n      moveSlide(1);\n    }, 2000);\n  };\n\n  timerId();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://electrowatt/./src/modules/slider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("57ff5b10491f9a3d5666")
/******/ })();
/******/ 
/******/ }
);