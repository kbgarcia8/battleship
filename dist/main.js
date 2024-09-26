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

/***/ "./src/factories/DOM.js":
/*!******************************!*\
  !*** ./src/factories/DOM.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOM: () => (/* binding */ DOM)\n/* harmony export */ });\nclass DOM {\r\n  constructor(player, helper) {\r\n    this.player = player,\r\n    this.helper = helper\r\n  }  \r\n  DOMGameboard(parent) {\r\n    for (let x = 0; x < this.player.gameboard.gameboardArray.length; x++) {\r\n      for (let y = 0; y < this.player.gameboard.gameboardArray[x].length; y++) {\r\n        var board_node = document.createElement(\"DIV\")\r\n        board_node.setAttribute(\"class\", `${this.player.name}-cell`)\r\n        board_node.setAttribute(\"data-x\", `${x}`)\r\n        board_node.setAttribute(\"data-y\", `${y}`)\r\n        board_node.setAttribute(\"data-in\",`${this.player.gameboard.gameboardArray[x][y]}`)\r\n        parent.appendChild(board_node)\r\n      }\r\n    }\r\n  }\r\n  DOMAddShips(parent) {\r\n    for (let i = 0; i < this.player.gameboard.shipsArray.length; i++) {\r\n      let currShipName = this.player.gameboard.shipsArray[i].name;\r\n      const ship_container_node = document.createElement(\"DIV\")\r\n      ship_container_node.setAttribute(\"class\",`${currShipName}-container horizontal`)\r\n      ship_container_node.setAttribute(\"id\", `${currShipName}`)\r\n      ship_container_node.setAttribute(\"draggable\", \"true\")\r\n      parent.appendChild(ship_container_node)\r\n      for (let j = 0; j < this.player.gameboard.shipsArray[i].length; j++) {\r\n        const ship_part_node = document.createElement(\"DIV\")\r\n        ship_part_node.setAttribute(\"class\", `${currShipName}`)\r\n        ship_container_node.appendChild(ship_part_node)\r\n      }\r\n    }\r\n  }\r\n  DOMDropShips(cells) {\r\n    cells.forEach((cell) => {\r\n      cell.addEventListener(\"dragover\", (e) => {\r\n        e.preventDefault()\r\n      })\r\n      cell.addEventListener(\"drop\", (e) => {\r\n        e.preventDefault()        \r\n        let acquiredID = e.dataTransfer.getData(\"textID\")\r\n        let acquiredLength = e.dataTransfer.getData(\"textLength\")\r\n        let currentElement = document.querySelector(`#${acquiredID}`)\r\n        let acquiredOrientation = this.helper.checkOrientation(currentElement)\r\n        let x = Number(cell.dataset.x)\r\n        let y = Number(cell.dataset.y)\r\n        //console.log([x, y])\r\n        //console.log(cell.dataset, acquiredID, acquiredLength, acquiredOrientation)\r\n        const checkPlacement = this.player.gameboard.placeShip(acquiredID, [x,y], acquiredOrientation)\r\n        if(checkPlacement && acquiredOrientation == \"horizontal\") {\r\n            console.log(\"Horizontal placement is possible\")\r\n            cell.setAttribute(\"data-in\", acquiredID)\r\n            cell.classList.add(acquiredID)\r\n            let i = 0;\r\n            while (i < acquiredLength - 1) {\r\n              cell = cell.nextSibling;\r\n              cell.setAttribute(\"data-in\", acquiredID)\r\n              cell.classList.add(acquiredID)\r\n              i++;\r\n            }\r\n            let element = document.querySelector(`.${acquiredID}-container`)\r\n            element.remove()\r\n        } else if (checkPlacement && acquiredOrientation == \"vertical\") {//resolve else if why placeShip is being executed twice\r\n          console.log(\"Vertical placement is possible\")\r\n          cell.setAttribute(\"data-in\", acquiredID)\r\n          cell.classList.add(acquiredID)\r\n          let i = 0;\r\n          while (i < acquiredLength - 1) {\r\n            cell = cell.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling; //try the next 10 sibling\r\n            cell.setAttribute(\"data-in\", acquiredID)\r\n            cell.classList.add(acquiredID)\r\n            i++;\r\n          }\r\n          let element = document.querySelector(`.${acquiredID}-container`)\r\n          element.remove()\r\n        } else {\r\n            console.log(\"Invalid placement\")\r\n        }\r\n      })\r\n    })\r\n  }\r\n  DOMRandomDropShips(ship,cells){\r\n    while(true) {\r\n      let x = Math.floor(Math.random()*10)\r\n      let y = Math.floor(Math.random()*10)\r\n      let coords = [x,y]\r\n      let orientaions = ['horizontal', 'vertical']\r\n      let randomOrientation = orientaions[Math.floor(Math.random() * orientaions.length)]\r\n      \r\n      if(this.player.gameboard.placeShip(ship.name,coords,randomOrientation)) {\r\n        cells.forEach((cell) => {\r\n          if((cell.dataset.x == x)&&(cell.dataset.y == y)&&(randomOrientation == \"horizontal\")) {\r\n            cell.setAttribute(\"data-in\", ship.name)\r\n            cell.setAttribute('style', 'border: white 1px solid; background-color: transparent;')\r\n            cell.classList.add(ship.name)\r\n            let i = 0;\r\n            while (i < ship.length - 1) {\r\n              cell = cell.nextSibling;\r\n              cell.setAttribute(\"data-in\", ship.name)\r\n              cell.setAttribute('style', 'border: white 1px solid; background-color: transparent;')\r\n              cell.classList.add(ship.name)\r\n              i++;\r\n            }\r\n          } else if((cell.dataset.x == x)&&(cell.dataset.y == y)&&(randomOrientation == \"vertical\")) {\r\n            cell.setAttribute(\"data-in\", ship.name)\r\n            cell.setAttribute('style', 'border: white 1px solid; background-color: transparent;')\r\n            cell.classList.add(ship.name)\r\n            let i = 0;\r\n            while (i < ship.length - 1) {\r\n              cell = cell.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling; //try the next 10 sibling\r\n              cell.setAttribute(\"data-in\", ship.name)\r\n              cell.setAttribute('style', 'border: white 1px solid; background-color: transparent;')\r\n              cell.classList.add(ship.name)\r\n              i++;\r\n            }\r\n          }\r\n        })\r\n        break\r\n      }\r\n    }    \r\n  }\r\n  DOMUpdateGameboard(player,playerCells) {\r\n    playerCells.forEach((playerCell) => {\r\n      let x = playerCell.dataset.x\r\n      let y = playerCell.dataset.y\r\n      playerCell.setAttribute('data-in', `${player.gameboard.gameboardArray[x][y]}`)\r\n      if(player.gameboard.gameboardArray[x][y] == \"miss\") {\r\n        playerCell.textContent = \"X\"\r\n        playerCell.setAttribute('style','background-color: #87aeed;')\r\n      } else if(player.gameboard.gameboardArray[x][y] == \"X\") {\r\n        playerCell.textContent = \"X\"\r\n        playerCell.setAttribute('style','background-color: #f55858; border:white 1px solid')\r\n      }\r\n    })\r\n    console.log(\"Gameboard updated\")\r\n  }\r\n}\n\n//# sourceURL=webpack://battleship/./src/factories/DOM.js?");

/***/ }),

/***/ "./src/factories/Gameboard.js":
/*!************************************!*\
  !*** ./src/factories/Gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Gameboard: () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _factories_Ships_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/Ships.js */ \"./src/factories/Ships.js\");\n\n\nclass Gameboard {\n  constructor() {\n    this.gameboardArray = this.createGameboard()\n    this.shipsArray = this.initializeShipsArray()\n    this.missedAttacks = []\n  }\n  createGameboard() {\n    let gameArray = [\n      [null, null, null, null, null, null, null, null, null, null],\n      [null, null, null, null, null, null, null, null, null, null],\n      [null, null, null, null, null, null, null, null, null, null],\n      [null, null, null, null, null, null, null, null, null, null],\n      [null, null, null, null, null, null, null, null, null, null],\n      [null, null, null, null, null, null, null, null, null, null],\n      [null, null, null, null, null, null, null, null, null, null],\n      [null, null, null, null, null, null, null, null, null, null],\n      [null, null, null, null, null, null, null, null, null, null],\n      [null, null, null, null, null, null, null, null, null, null],\n    ]\n    return gameArray\n  }\n  \n  initializeShipsArray() {\n    const shipsArr = []\n    shipsArr.push(new _factories_Ships_js__WEBPACK_IMPORTED_MODULE_0__.Ships(\"carrier\", 5))\n    shipsArr.push(new _factories_Ships_js__WEBPACK_IMPORTED_MODULE_0__.Ships(\"battleship\", 4))\n    shipsArr.push(new _factories_Ships_js__WEBPACK_IMPORTED_MODULE_0__.Ships(\"destroyer\", 3))\n    shipsArr.push(new _factories_Ships_js__WEBPACK_IMPORTED_MODULE_0__.Ships(\"submarine\", 3))\n    shipsArr.push(new _factories_Ships_js__WEBPACK_IMPORTED_MODULE_0__.Ships(\"patrol-boat\", 2))\n    return shipsArr\n  }\n  \n  placeShip(name, coords, orientation) {\n    if (this.isPlacementValid(name, coords, orientation) === true) {\n      const re = new RegExp(name, \"g\");\n      let currShipName = \"\";\n      let currShipLength = 0;\n      for (let i = 0; i < this.shipsArray.length; i++) {\n        if (this.shipsArray[i].name.match(re)) {\n          currShipName = this.shipsArray[i].name\n          currShipLength = this.shipsArray[i].length\n          this.shipsArray[i].orientation = orientation\n          const [x, y] = coords;\n          if (orientation == 'horizontal') {\n            for (let j = 0; j < currShipLength; j++) {\n              this.gameboardArray[x][y + j] = currShipName\n              this.shipsArray[i].position[j][0] = x\n              this.shipsArray[i].position[j][1] = y + j\n            }\n          } else if (orientation == 'vertical') {\n            for (let k = 0; k < currShipLength; k++) {\n              this.gameboardArray[x + k][y] = currShipName\n              this.shipsArray[i].position[k][0] = x + k\n              this.shipsArray[i].position[k][1] = y\n            }\n          }\n          return {\n            \"gameboardArray\": this.gameboardArray,\n            \"shipsArray\": this.shipsArray,\n            \"missedAttacks\": this.missedAttacks\n          }\n        }\n      }\n    } else {\n      return false\n    }\n  }\n  \n  isPlacementValid(name, coords, orientation) {\n    const re = new RegExp(name, \"g\");\n    let currShipLength = 0;\n    for (let i = 0; i < this.shipsArray.length; i++) {\n      if (this.shipsArray[i].name.match(re)) {\n        currShipLength = this.shipsArray[i].length\n      }\n    }\n    const [x, y] = coords;\n    \n    if (x > 10 || x < 0 || y > 10 || y < 0) return false\n    if (orientation == 'horizontal' && y + (currShipLength-1) < 10) {\n      let pathContent = []\n      for (let j = 0; j < currShipLength; j++) {\n        pathContent.push(this.gameboardArray[x][y + j])          \n      }\n      const filtered = pathContent.filter((content) => {return content == null})\n      if (filtered.length == pathContent.length) return true\n      return false\n    } else if (orientation == 'vertical' && x + (currShipLength-1) < 10) {\n      let pathContent = []\n      for (let k = 0; k < currShipLength; k++) {\n        pathContent.push(this.gameboardArray[x + k][y])\n      }\n      const filtered = pathContent.filter((content) => {return content == null})\n      if (filtered.length == pathContent.length) return true\n      return false\n    } else {\n      return false\n    }\n  }\n  \n  receiveAttack(coords) {\n    let currShipPosIndexHit = 0;\n    const [x, y] = coords;\n    if (this.gameboardArray[x][y] === null) {\n      this.gameboardArray[x][y] = \"miss\"\n      this.missedAttacks.push([x, y])\n    } else if (this.gameboardArray[x][y] !== null && this.gameboardArray[x][y] !== \"X\" ) {\n      let currentShipHit = this.gameboardArray[x][y]  \n      let re = new RegExp(currentShipHit, \"g\");\n      for (let i = 0; i < this.shipsArray.length; i++) {\n        if (this.shipsArray[i].name.match(re)) {\n          currShipPosIndexHit = this.shipsArray[i]['position'].findIndex(pos => pos[0] === x && pos[1] === y)\n          this.shipsArray[i].hit(currShipPosIndexHit)\n        }\n      }\n      this.gameboardArray[x][y] = \"X\"\n    } else {\n      return false\n    }\n    return {\n      \"gameboardArray\": this.gameboardArray,\n      \"shipsArray\": this.shipsArray,\n      \"missedAttacks\": this.missedAttacks\n    }\n  }\n  \n  isGameOver() {\n    for (let i = 0; i < this.shipsArray.length; i++) {\n      if (this.shipsArray[i].isSunk() === false) return false\n    }\n    return true\n  }\n}\n/*\nmanual test\n  gameboard = new Gameboard()\n  gameboard.placeShip(\"carrier\", [0, 0], 'horizontal')\n  gameboard.placeShip(\"battleship\", [1, 0], 'horizontal')\n  gameboard.placeShip(\"destroyer\", [4, 5], 'vertical')\n  gameboard.placeShip(\"submarine\", [7, 9], 'vertical')\n  gameboard.placeShip(\"patrol-boat\", [5, 7], 'horizontal')\n  gameboard.receiveAttack([2, 0]) //missed\n  gameboard.receiveAttack([3, 1]) //missed\n  gameboard.receiveAttack([2, 0]) //missed\n  gameboard.receiveAttack([3, 1]) //missed\n  gameboard.receiveAttack([0, 0]) //hit carrier\n  gameboard.receiveAttack([0, 1]) //hit carrier\n  gameboard.receiveAttack([0, 2]) //hit carrier\n  gameboard.receiveAttack([0, 3]) //hit carrier\n  gameboard.receiveAttack([0, 4]) //hit carrier\n  gameboard.receiveAttack([1, 0]) //hit battleship\n  gameboard.receiveAttack([1, 1]) //hit battleship\n  gameboard.receiveAttack([1, 2]) //hit battleship\n  gameboard.receiveAttack([1, 3]) //hit battleship\n  gameboard.receiveAttack([4, 5]) //hit destroyer\n  gameboard.receiveAttack([5, 5]) //hit destroyer\n  gameboard.receiveAttack([6, 5]) //hit destroyer\n  gameboard.receiveAttack([7, 9]) //hit submarine\n  gameboard.receiveAttack([8, 9]) //hit submarine\n  gameboard.receiveAttack([9, 9]) //hit submarine\n  gameboard.receiveAttack([5, 7]) //hit patrol-boat\n  gameboard.receiveAttack([5, 8]) //hit patrol-boat\n*/\n\n\n//# sourceURL=webpack://battleship/./src/factories/Gameboard.js?");

/***/ }),

/***/ "./src/factories/Helper.js":
/*!*********************************!*\
  !*** ./src/factories/Helper.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Helper: () => (/* binding */ Helper)\n/* harmony export */ });\nclass Helper {\r\n  constructor(){}\r\n  checkOrientation(element) {\r\n      let shipOrientation = null;\r\n      if (element.classList.contains(\"horizontal\")) {\r\n        shipOrientation = \"horizontal\";\r\n      } else {\r\n        shipOrientation = \"vertical\";\r\n      }\r\n      return shipOrientation;\r\n    }\r\n  dragShip(element) {\r\n      const children = element.childNodes;\r\n      element.addEventListener(\"dragstart\", (e) => {\r\n          e.dataTransfer.setData(\"textID\", e.target.id)\r\n          e.dataTransfer.setData(\"textLength\", children.length)\r\n    })\r\n  }\r\n  IsAllShipsPlaced(container) {\r\n    const containerChildren = container.childNodes\r\n    if(containerChildren.length == 0) {\r\n      return true\r\n    } else {\r\n      return false\r\n    }\r\n  }    \r\n  changeOrientation(element) {\r\n    element.addEventListener(\"dblclick\", (e) => {\r\n      e.preventDefault()\r\n      if(element.classList.contains(\"horizontal\")) {\r\n        element.classList.remove(\"horizontal\")\r\n        element.classList.add(\"vertical\")\r\n      } else if (element.classList.contains(\"vertical\")) {\r\n        element.classList.remove(\"vertical\")\r\n        element.classList.add(\"horizontal\")\r\n      }\r\n    })\r\n  }\r\n}\n\n//# sourceURL=webpack://battleship/./src/factories/Helper.js?");

/***/ }),

/***/ "./src/factories/Player.js":
/*!*********************************!*\
  !*** ./src/factories/Player.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Player: () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _factories_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/Gameboard.js */ \"./src/factories/Gameboard.js\");\n\r\n\r\nclass Player {\r\n  constructor(name) {\r\n    this.name = name,\r\n    this.gameboard = new _factories_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__.Gameboard(),\r\n    this.turn = false\r\n  }\r\n\r\n  startTurn() {\r\n    if(this.turn == false) this.turn = true;\r\n    \r\n    return this.turn\r\n  }\r\n\r\n  endTurn(nextPlayer) {\r\n    if(this.turn == true) {\r\n    this.turn = false;\r\n    nextPlayer.startTurn()\r\n    }\r\n    return this.turn\r\n  }\r\n\r\n  checkIfTurn () {\r\n    return this.turn\r\n  }\r\n\r\n  playerAttack(coords, enemyPlayer) {\r\n    if (this.checkIfTurn()) {\r\n      enemyPlayer.gameboard.receiveAttack(coords)\r\n      this.endTurn(enemyPlayer)\r\n    }\r\n  }\r\n}\r\n\r\n/*\r\nmanual test\r\n  player1 = new Player(\"Admiral\")\r\n  player1.gameboard.placeShip(\"carrier\", [0, 0], 'horizontal')\r\n  player1.gameboard.placeShip(\"battleship\", [1, 0], 'horizontal')\r\n  player1.gameboard.placeShip(\"destroyer\", [4, 5], 'vertical')\r\n  player1.gameboard.placeShip(\"submarine\", [7, 9], 'vertical')\r\n  player1.gameboard.placeShip(\"patrol boat\", [5, 7], 'horizontal')\r\n\r\n  player2 = new Player(\"Enemy\")\r\n  player2.gameboard.placeShip(\"carrier\", [0, 0], 'horizontal')\r\n  player2.gameboard.placeShip(\"battleship\", [1, 0], 'horizontal')\r\n  player2.gameboard.placeShip(\"destroyer\", [4, 5], 'vertical')\r\n  player2.gameboard.placeShip(\"submarine\", [7, 9], 'vertical')\r\n  player2.gameboard.placeShip(\"patrol boat\", [5, 7], 'horizontal')\r\n\r\n  player1.startTurn()\r\n  player1.playerAttack([0, 0], player2)\r\n  player2.playerAttack([0, 1], player1)\r\n*/\n\n//# sourceURL=webpack://battleship/./src/factories/Player.js?");

/***/ }),

/***/ "./src/factories/Ships.js":
/*!********************************!*\
  !*** ./src/factories/Ships.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Ships: () => (/* binding */ Ships)\n/* harmony export */ });\nclass Ships {\r\n  constructor(name, length) {\r\n    this.name = name,\r\n      this.length = length,\r\n      this.numHit = 0,\r\n      this.sunk = false,\r\n      this.orientation = \"\",\r\n      this.position = this.initializePosition(this.length)\r\n  }\r\n  hit(index) {\r\n    if (this.position[index] !== \"X\") {\r\n      this.position[index] = [\"X\"];\r\n      let targetHit = this.numHit + 1;\r\n      return (this.numHit = targetHit);\r\n    }\r\n    return;\r\n  }\r\n  isSunk() {\r\n    if (this.length == this.numHit) {\r\n      this.sunk = true\r\n      return true;\r\n    }\r\n\r\n    return false;\r\n  }\r\n  initializePosition(length) {\r\n    const initialPosArr = []\r\n    for (let i = 0; i < length; i++) {\r\n      initialPosArr.push([null, null])\r\n    }\r\n    return initialPosArr\r\n  }\r\n}\n\n//# sourceURL=webpack://battleship/./src/factories/Ships.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factories_Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/Player.js */ \"./src/factories/Player.js\");\n/* harmony import */ var _factories_DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/DOM.js */ \"./src/factories/DOM.js\");\n/* harmony import */ var _factories_Helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/Helper.js */ \"./src/factories/Helper.js\");\n\r\n\r\n\r\n\r\nconst player1 = new _factories_Player_js__WEBPACK_IMPORTED_MODULE_0__.Player(\"player\")\r\nconst helper = new _factories_Helper_js__WEBPACK_IMPORTED_MODULE_2__.Helper()\r\nconst playerSpace = document.querySelector(\".player-board\")\r\nconst playerAddShipContainer = document.querySelector(\".ships-container\")\r\nconst playerAddShipSpace = document.querySelector(\".ships-for-add\")\r\n\r\nconst playerDOM = new _factories_DOM_js__WEBPACK_IMPORTED_MODULE_1__.DOM(player1,helper)\r\nplayerDOM.DOMGameboard(playerSpace)\r\nplayerDOM.DOMAddShips(playerAddShipContainer)\r\n\r\nconst playerCells = document.querySelectorAll(\".player-cell\")\r\nconst carrier = document.querySelector(\"#carrier\")\r\nconst battleship = document.querySelector(\"#battleship\")\r\nconst destroyer = document.querySelector(\"#destroyer\")\r\nconst submarine = document.querySelector(\"#submarine\")\r\nconst patrol_boat = document.querySelector(\"#patrol-boat\")\r\n\r\n\r\nhelper.dragShip(carrier)\r\nhelper.dragShip(battleship)\r\nhelper.dragShip(destroyer)\r\nhelper.dragShip(submarine)\r\nhelper.dragShip(patrol_boat)\r\nhelper.changeOrientation(carrier)\r\nhelper.changeOrientation(battleship)\r\nhelper.changeOrientation(destroyer)\r\nhelper.changeOrientation(submarine)\r\nhelper.changeOrientation(patrol_boat)\r\n\r\nplayerDOM.DOMDropShips(playerCells)\r\n\r\nconst AIPlayer = new _factories_Player_js__WEBPACK_IMPORTED_MODULE_0__.Player(\"ai\")\r\nconst AISpaceParent = document.querySelector(\".ai-side\")\r\nconst AISpace = document.querySelector(\".ai-board\")\r\nconst AIDOM = new _factories_DOM_js__WEBPACK_IMPORTED_MODULE_1__.DOM(AIPlayer,helper)\r\n\r\nconst startGameBtn = document.querySelector(\".start-game-btn\")\r\n\r\nconst gameWinnerModal = document.querySelector(\"#gamewinner\")\r\nconst winnerText = document.querySelector(\".winnertext\")\r\nconst playAgainBtn = document.querySelector(\".play-again-btn\")\r\n\r\nfunction startGame(button,container,containerParent,AIContainer){\r\n  button.addEventListener(\"click\", (e) => {\r\n    if(helper.IsAllShipsPlaced(container)) {\r\n      containerParent.setAttribute(\"style\", 'display: none;')\r\n      AIContainer.setAttribute(\"style\", 'display: flex;')\r\n      AIDOM.DOMGameboard(AISpace)\r\n      const AICells = document.querySelectorAll(\".ai-cell\")\r\n      const ships = AIPlayer.gameboard.shipsArray;\r\n      ships.forEach((ship) => {\r\n        AIDOM.DOMRandomDropShips(ship,AICells)\r\n      })\r\n      button.setAttribute('style', 'display: none;')\r\n      playGame(player1,AIPlayer,playerCells,AICells)\r\n    } else {alert(\"All of player's ship must be placed first\")}\r\n  })\r\n}\r\n\r\nfunction playGame(player1,player2,player1Cells,player2Cells){\r\n  player1.startTurn()\r\n  player2Cells.forEach((player2Cell) => {\r\n    player2Cell.addEventListener(\"click\",function clicked (e) {\r\n      let x = e.target.dataset.x\r\n      let y = e.target.dataset.y\r\n      let randomX = 0\r\n      let randomY = 0 \r\n      if(player2.gameboard.missedAttacks.findIndex(coor => coor[0] == x && coor[1] == y) < 0) {\r\n        player1.playerAttack([x,y],player2)\r\n        while (true) {\r\n          randomX = Math.floor(Math.random()*10)\r\n          randomY = Math.floor(Math.random()*10)\r\n          if (player1.gameboard.missedAttacks.findIndex(coor => coor[0] == randomX && coor[1] == randomY) < 0 && player1.gameboard.gameboardArray[randomX][randomY] != \"X\") {   \r\n            player2.playerAttack([randomX,randomY],player1)\r\n            break;\r\n          } else {console.log(\"already hit\")}\r\n        }\r\n      } else {console.log(\"already hit\")}\r\n      playerDOM.DOMUpdateGameboard(player1,player1Cells)\r\n      AIDOM.DOMUpdateGameboard(player2,player2Cells)\r\n      if(player1.gameboard.isGameOver()) {\r\n        winnerText.textContent = `${[player2.name]} wins!`\r\n        playAgain(gameWinnerModal,playAgainBtn)\r\n      } else if (player2.gameboard.isGameOver()) {\r\n        winnerText.textContent = `${[player1.name]} wins!`\r\n        playAgain(gameWinnerModal,playAgainBtn)\r\n      } else {\r\n        console.log(\"No winner please continue attacking\")\r\n      }\r\n      \r\n      player2Cell.removeEventListener(\"click\", clicked,false)\r\n    },false)\r\n  })\r\n}\r\n\r\nfunction playAgain(dialog,button) {\r\n  dialog.showModal()\r\n  dialog.addEventListener(\"keydown\", (e) => {\r\n    if (e.keyCode == 27) e.preventDefault();\r\n  })\r\n  button.addEventListener(\"click\", (e) => {\r\n    location.reload()\r\n  })\r\n}\r\n\r\nstartGame(startGameBtn,playerAddShipContainer,playerAddShipSpace,AISpaceParent)\n\n//# sourceURL=webpack://battleship/./src/index.js?");

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