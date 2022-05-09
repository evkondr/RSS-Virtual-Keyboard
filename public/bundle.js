/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://RSS-Virtual-Keyboard/./src/index.html?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://RSS-Virtual-Keyboard/./src/style.scss?");

/***/ }),

/***/ "./src/components/backspace.js":
/*!*************************************!*\
  !*** ./src/components/backspace.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ backspace)\n/* harmony export */ });\nfunction backspace(text) {\n  return text.value.slice(0, text.value.length - 1);\n}\n\n\n//# sourceURL=webpack://RSS-Virtual-Keyboard/./src/components/backspace.js?");

/***/ }),

/***/ "./src/components/eventHandler.js":
/*!****************************************!*\
  !*** ./src/components/eventHandler.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ eventHandler)\n/* harmony export */ });\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variables */ \"./src/components/variables.js\");\n/* harmony import */ var _backspace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backspace */ \"./src/components/backspace.js\");\n\n\n\nfunction eventHandler(target, keyboard, textField) {\n  const textFieldNode = textField;\n  switch (target) {\n    case 'CapsLock':\n      _variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].upperCase = !_variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].upperCase;\n      keyboard.render(_variables__WEBPACK_IMPORTED_MODULE_0__[\"default\"].upperCase);\n      break;\n    case 'Backspace':\n      textFieldNode.value = (0,_backspace__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(textField);\n      break;\n    case 'Tab':\n    case 'Control':\n    case 'Shift':\n    case 'Alt':\n      break;\n    default:\n      textFieldNode.value += target;\n      break;\n  }\n}\n\n\n//# sourceURL=webpack://RSS-Virtual-Keyboard/./src/components/eventHandler.js?");

/***/ }),

/***/ "./src/components/keybord.js":
/*!***********************************!*\
  !*** ./src/components/keybord.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Keyboard)\n/* harmony export */ });\nclass Keyboard {\n  constructor(element, keyboardLayout, container) {\n    this.element = element;\n    this.keyboardLayout = keyboardLayout;\n    this.container = container;\n  }\n\n  render(upperCase) {\n    this.element.innerHTML = '';\n    let char = 'alt';\n    if (upperCase) {\n      char = 'char';\n    }\n    Object.keys(this.keyboardLayout).forEach((line) => {\n      const raw = document.createElement('div');\n      raw.className = 'raw';\n      this.keyboardLayout[line].forEach((key) => {\n        const button = document.createElement('div');\n        button.className = `button ${key.color}`;\n        button.innerHTML = key[key[char] ? char : 'char'];\n        button.setAttribute('data-char', key[key[char] ? char : 'char']);\n        if (key.char) {\n          switch (key.char) {\n            case 'arrow':\n              button.style.flexGrow = 0;\n              break;\n            case 'Space':\n              button.innerText = '';\n              button.style.width = '50%';\n              break;\n            case 'RightShift':\n              button.innerText = 'Shift';\n              button.style.flexGrow = 0;\n              button.style.padding = 0;\n              break;\n            case 'CapsLock':\n              if (upperCase) {\n                button.classList.add('active');\n              }\n              button.innerText = 'Caps Lock';\n              break;\n            case 'Control':\n              button.innerText = 'Ctrl';\n              break;\n            default:\n              break;\n          }\n        }\n        raw.append(button);\n      });\n      this.element.append(raw);\n    });\n    this.container.append(this.element);\n  }\n}\n\n\n//# sourceURL=webpack://RSS-Virtual-Keyboard/./src/components/keybord.js?");

/***/ }),

/***/ "./src/components/variables.js":
/*!*************************************!*\
  !*** ./src/components/variables.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"keyboard\": () => (/* binding */ keyboard)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  title: 'RSS Virtual Keyboard',\n  upperCase: false,\n});\nconst keyboard = {\n  line_1: [\n    { char: '`', alt: '~', color: 'dark' },\n    { char: '1', alt: '!', color: 'light' },\n    { char: '2', alt: '@', color: 'light' },\n    { char: '3', alt: '#', color: 'light' },\n    { char: '4', alt: '$', color: 'light' },\n    { char: '5', alt: '%', color: 'light' },\n    { char: '6', alt: ':', color: 'light' },\n    { char: '7', alt: '?', color: 'light' },\n    { char: '8', alt: '*', color: 'light' },\n    { char: '9', alt: '(', color: 'light' },\n    { char: '0', alt: ')', color: 'light' },\n    { char: '-', alt: '_', color: 'light' },\n    { char: '=', alt: '+', color: 'light' },\n    { char: 'Backspace', color: 'dark' },\n  ],\n  line_2: [\n    { char: 'Tab', color: 'dark' },\n    { char: 'Q', color: 'light', alt: 'q' },\n    { char: 'W', color: 'light', alt: 'w' },\n    { char: 'E', color: 'light', alt: 'e' },\n    { char: 'R', color: 'light', alt: 'r' },\n    { char: 'T', color: 'light', alt: 't' },\n    { char: 'Y', color: 'light', alt: 'y' },\n    { char: 'U', color: 'light', alt: 'u' },\n    { char: 'I', color: 'light', alt: 'i' },\n    { char: 'O', color: 'light', alt: 'o' },\n    { char: 'P', color: 'light', alt: 'p' },\n    { char: '[', color: 'light', alt: '{' },\n    { char: ']', color: 'light', alt: '}' },\n    {\n      char: '\\\\', alr: '/', color: 'light', alt: '/',\n    },\n    { char: 'DEL', color: 'dark' },\n  ],\n  line_3: [\n    { char: 'CapsLock', color: 'dark', type: 'CapsLock' },\n    { char: 'A', color: 'light', alt: 'a' },\n    { char: 'S', color: 'light', alt: 's' },\n    { char: 'D', color: 'light', alt: 'd' },\n    { char: 'F', color: 'light', alt: 'f' },\n    { char: 'G', color: 'light', alt: 'g' },\n    { char: 'H', color: 'light', alt: 'h' },\n    { char: 'J', color: 'light', alt: 'j' },\n    { char: 'K', color: 'light', alt: 'k' },\n    { char: 'L', color: 'light', alt: 'l' },\n    { char: ';', color: 'light', alt: ':' },\n    { char: '\\'', color: 'light', alt: '\\'' },\n    { char: 'Enter', color: 'dark' },\n  ],\n  line_4: [\n    { char: 'Shift', color: 'dark' },\n    { char: '\\\\', color: 'light', alt: '|' },\n    { char: 'Z', color: 'light', alt: 'z' },\n    { char: 'X', color: 'light', alt: 'x' },\n    { char: 'C', color: 'light', alt: 'c' },\n    { char: 'V', color: 'light', alt: 'v' },\n    { char: 'B', color: 'light', alt: 'b' },\n    { char: 'N', color: 'light', alt: 'n' },\n    { char: 'M', color: 'light', alt: 'm' },\n    { char: ',', color: 'light', alt: '<' },\n    { char: '.', color: 'light', alt: '>' },\n    { char: '/', color: 'light', alt: '?' },\n    { char: '&uarr;', color: 'dark', type: 'arrow' },\n    { char: 'RightShift', color: 'dark', type: 'right_shift' },\n  ],\n  line_5: [\n    { char: 'Control', color: 'dark', type: 'Control' },\n    { char: 'Win', color: 'dark' },\n    { char: 'Alt', color: 'dark' },\n    { char: 'Space', color: 'light' },\n    { char: 'Alt', color: 'dark' },\n    { char: 'Control', color: 'dark', type: 'Control' },\n    { char: '&larr;', color: 'dark', type: 'arrow' },\n    { char: '&darr;', color: 'dark', type: 'arrow' },\n    { char: '&rarr;', color: 'dark', type: 'arrow' },\n  ],\n};\n\n\n//# sourceURL=webpack://RSS-Virtual-Keyboard/./src/components/variables.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _components_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/variables */ \"./src/components/variables.js\");\n/* harmony import */ var _components_keybord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/keybord */ \"./src/components/keybord.js\");\n/* harmony import */ var _components_eventHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/eventHandler */ \"./src/components/eventHandler.js\");\n\n\n\n\n\n\nconst wrap = document.createElement('div');\nconst textField = document.createElement('textarea');\nconst keyboardWrap = document.createElement('div');\n\ntextField.className = 'text-field';\nwrap.className = 'wrap';\nkeyboardWrap.className = 'keyboard';\n\nconst keyboard = new _components_keybord__WEBPACK_IMPORTED_MODULE_3__[\"default\"](keyboardWrap, _components_variables__WEBPACK_IMPORTED_MODULE_2__.keyboard, wrap);\ndocument.title = _components_variables__WEBPACK_IMPORTED_MODULE_2__[\"default\"].title;\nwrap.append(textField);\n\nkeyboard.render(_components_variables__WEBPACK_IMPORTED_MODULE_2__[\"default\"].upperCase);\n\ndocument.body.append(wrap);\n//  On button click\nkeyboardWrap.addEventListener('click', (e) => {\n  if (e.target.classList.contains('button')) {\n    const { char } = e.target.dataset;\n    (0,_components_eventHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(char, keyboard, textField);\n  }\n});\n\n// On key press\ndocument.addEventListener('keydown', (e) => {\n  const key = document.querySelector(`div[data-char=\"${e.key === ' ' ? 'Space' : e.key}\"]`);\n  key.classList.add('active');\n  (0,_components_eventHandler__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e.key, keyboard, textField);\n  document.addEventListener('keyup', () => {\n    key.classList.remove('active');\n  });\n});\n\n\n//# sourceURL=webpack://RSS-Virtual-Keyboard/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;