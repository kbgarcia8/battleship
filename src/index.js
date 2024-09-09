import { Ships } from "../factories/Ships.js"
import { Gameboard } from "../factories/Gameboard.js"
import { Player } from "../factories/Player.js"
import { Helper } from "../factories/Helper.js"


const player1 = new Player("player")
const helper = new Helper()
const playerSpace = document.querySelector(".player-board")
const playerAddShipSpace = document.querySelector(".ships-container")

const createDOM = new DOM()
createDOM.DOMGameboard(player1, playerSpace)
createDOM.DOMAddShips(player1, playerAddShipSpace)

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

createDOM.DOMDropShips(cells)