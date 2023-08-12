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

eval("const Ship = (shipLen) => {\n  let numOfHits = 0;\n  const hit = () => {\n    return (numOfHits += 1);\n    // beenHit = true;\n  };\n  const isSunk = () => {\n    return numOfHits === shipLen;\n  };\n\n  return {\n    numOfHits,\n    hit,\n    isSunk,\n  };\n};\n\nconsole.log(1);\n\nconst root = document.getElementById(\"root\");\nconst button = document.createElement(\"button\");\nbutton.innerHTML = \"Increment\";\nbutton.addEventListener(\"click\", () => {\n  let shipInstance = Ship(1);\n\n  shipInstance.hit();\n});\n\nroot.innerHTML = \" FASfsa\";\n\nroot.appendChild(button);\n\n\n//# sourceURL=webpack://top-battleship/./src/index.js?");

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