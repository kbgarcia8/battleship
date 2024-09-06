/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const carrier = document.querySelector(\"#carrier\");\r\n\r\nfunction dragStarter(element) {\r\n  element.addEventListener(\"dragstart\", (e) => {\r\n    //set the target id as data for transfer\r\n    e.dataTransfer.setData(\"text/plain\", e.target.id);\r\n  });\r\n}\r\n\r\nconst cells = document.querySelectorAll(\".player-cell\");\r\n\r\ncells.forEach((cell) => {\r\n  cell.addEventListener(\"dragover\", (e) => {\r\n    e.preventDefault();\r\n  });\r\n  cell.addEventListener(\"drop\", (e) => {\r\n    e.preventDefault();\r\n    console.log(\"dropped\")\r\n    var data = e.dataTransfer.getData(\"text\")\r\n    //e.target.appendSibling(document.getElementById(data));\r\n    //e.target.insertAdjacentElement(\"afterend\", document.getElementById(data))\r\n    //console.log(e.target.dataset.y)\r\n  });\r\n});\r\ndragStarter(carrier);\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;