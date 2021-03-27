/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateelectrowatt"]("main",{

/***/ "./src/modules/menuScroll.js":
/*!***********************************!*\
  !*** ./src/modules/menuScroll.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar menuScroll = function menuScroll() {\n  var topMenu = document.querySelector('.top-menu');\n  var servicePriceLink = topMenu.querySelectorAll('a')[0];\n  var faqLink = topMenu.querySelectorAll('a')[1];\n  var contactsLink = topMenu.querySelectorAll('a')[2];\n  var serviceSection = document.getElementById('services');\n  var faqSection = document.getElementById('faq');\n  var contactsSection = document.getElementById('contacts');\n\n  function scrollToSection(element) {\n    window.scroll({\n      left: 0,\n      top: element.offsetTop,\n      behavior: 'smooth'\n    });\n    window.document.s;\n  }\n\n  topMenu.addEventListener('click', function (e) {\n    e.preventDefault();\n  });\n  servicePriceLink.addEventListener('click', function (e) {\n    e.preventDefault();\n    scrollToSection(serviceSection);\n  });\n  faqLink.addEventListener('click', function (e) {\n    e.preventDefault();\n    scrollToSection(faqSection);\n  });\n  contactsLink.addEventListener('click', function (e) {\n    e.preventDefault();\n    scrollToSection(contactsSection);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuScroll);\n\n//# sourceURL=webpack://electrowatt/./src/modules/menuScroll.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a8dd79a022a8f2f42cd9")
/******/ })();
/******/ 
/******/ }
);