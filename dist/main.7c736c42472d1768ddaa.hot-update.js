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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar topSlider = function topSlider() {\n  var slider = document.querySelector('.top-slider');\n  var slides = slider.querySelectorAll('.item');\n  console.log(slides);\n  var slideIntevalSpeed = 3000; // ms\n\n  var minIndex = 0;\n  var maxIndex = 2;\n  var index = 0;\n  slides[\"for\"];\n\n  var moveSlide = function moveSlide(slideStep) {\n    index += slideStep;\n  };\n\n  moveSlide(); // function showSlide(indexSlide) {\n  //     slides.forEach((itemSlide) => {\n  //         itemSlide.style.display = 'none';\n  //     })\n  //     for(let i = 0; i < slides.length; i++) {\n  //         slides[indexSlide].style.display = 'block';\n  //         indexSlide++;\n  //     }\n  //     // indexSlide.style.display = 'block'\n  // }\n  // showSlide(0)\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://electrowatt/./src/modules/slider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("45fa0bf2426017f13d1b")
/******/ })();
/******/ 
/******/ }
);