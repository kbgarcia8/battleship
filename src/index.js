import { Ships } from "./factories/Ships.js"
import { Gameboard } from "./factories/Gameboard.js"
import { Player } from "./factories/Player.js"
import { DOM } from "./factories/DOM.js"
import { Helper } from "./factories/Helper.js"


const player1 = new Player("player")
const helper = new Helper()
const playerSpace = document.querySelector(".player-board")
const playerAddShipContainer = document.querySelector(".ships-container")
const playerAddShipSpace = document.querySelector(".ships-for-add")

const AISpaceParent = document.querySelector(".ai-side")

const createDOM = new DOM(player1,helper)
createDOM.DOMGameboard(playerSpace)
createDOM.DOMAddShips(playerAddShipContainer)

const cells = document.querySelectorAll(".player-cell")
const carrier = document.querySelector("#carrier")
const battleship = document.querySelector("#battleship")
const destroyer = document.querySelector("#destroyer")
const submarine = document.querySelector("#submarine")
const patrol_boat = document.querySelector("#patrol-boat")


helper.dragShip(carrier)
helper.dragShip(battleship)
helper.dragShip(destroyer)
helper.dragShip(submarine)
helper.dragShip(patrol_boat)
helper.changeOrientation(carrier)
helper.changeOrientation(battleship)
helper.changeOrientation(destroyer)
helper.changeOrientation(submarine)
helper.changeOrientation(patrol_boat)

createDOM.DOMDropShips(cells)

const startGameBtn = document.querySelector(".start-game-btn")

helper.startGame(startGameBtn,playerAddShipContainer,playerAddShipSpace,AISpaceParent)
const cells = document.querySelectorAll(".player-cell")
const carrier = document.querySelector("#carrier")
const battleship = document.querySelector("#battleship")
const destroyer = document.querySelector("#destroyer")
const submarine = document.querySelector("#submarine")
const patrol_boat = document.querySelector("#patrol-boat")


helper.dragShip(carrier)
helper.dragShip(battleship)
helper.dragShip(destroyer)
helper.dragShip(submarine)
helper.dragShip(patrol_boat)
helper.changeOrientation(carrier)
helper.changeOrientation(battleship)
helper.changeOrientation(destroyer)
helper.changeOrientation(submarine)
helper.changeOrientation(patrol_boat)

createDOM.DOMDropShips(cells)

const startGameBtn = document.querySelector(".start-game-btn")

helper.startGame(startGameBtn,playerAddShipContainer,playerAddShipSpace,AISpaceParent)