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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar topSlider = function topSlider() {\n  var slider = document.querySelector('.top-slider');\n  var slides = slider.querySelectorAll('.item');\n  var slide = slider.querySelector('.item');\n  var currentSlide = 0;\n  var interval;\n\n  function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  }\n\n  var nextSlide = function nextSlide(element, index, strClass) {\n    element[index].style.disp;\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slides, currentSlide, '.item');\n\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slides, currentSlide, '.item');\n  };\n\n  var startSlide = function startSlide(time) {\n    setInterval(function () {\n      autoPlaySlide();\n    }, time);\n  };\n\n  startSlide(2000); // const moveSlide = (slideStep) => {\n  //     index += slideStep;\n  //     slides[index].style.display = 'block';\n  //     // slides\n  // };\n  // // moveSlide(1);\n  // // moveSlide(1);\n  // const timerId = () => {\n  //     setInterval(() => {\n  //         moveSlide(1);\n  //     }, slideIntevalSpeed);\n  // };\n  // timerId();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://electrowatt/./src/modules/slider.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eed9e151b66792dc1551")
/******/ })();
/******/ 
/******/ }
);