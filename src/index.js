import { Player } from "./factories/Player.js"
import { DOM } from "./factories/DOM.js"
import { Helper } from "./factories/Helper.js"

const player1 = new Player("player")
const helper = new Helper()
const playerSpace = document.querySelector(".player-board")
const playerAddShipContainer = document.querySelector(".ships-container")
const playerAddShipSpace = document.querySelector(".ships-for-add")

const playerDOM = new DOM(player1,helper)
playerDOM.DOMGameboard(playerSpace)
playerDOM.DOMAddShips(playerAddShipContainer)

const playerCells = document.querySelectorAll(".player-cell")
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

playerDOM.DOMDropShips(playerCells)

const AIPlayer = new Player("ai")
const AISpaceParent = document.querySelector(".ai-side")
const AISpace = document.querySelector(".ai-board")
const AIDOM = new DOM(AIPlayer,helper)

const startGameBtn = document.querySelector(".start-game-btn")

const gameWinnerModal = document.querySelector("#gamewinner")
const winnerText = document.querySelector(".winnertext")
const playAgainBtn = document.querySelector(".play-again-btn")

function startGame(button,container,containerParent,AIContainer){
  button.addEventListener("click", (e) => {
    if(helper.IsAllShipsPlaced(container)) {
      containerParent.setAttribute("style", 'display: none;')
      AIContainer.setAttribute("style", 'display: flex;')
      AIDOM.DOMGameboard(AISpace)
      const AICells = document.querySelectorAll(".ai-cell")
      const ships = AIPlayer.gameboard.shipsArray;
      ships.forEach((ship) => {
        AIDOM.DOMRandomDropShips(ship,AICells)
      })
      button.setAttribute('style', 'display: none;')
      playGame(player1,AIPlayer,playerCells,AICells)
    } else {alert("All of player's ship must be placed first")}
  })
}

function playGame(player1,player2,player1Cells,player2Cells){
  player1.startTurn()
  player2Cells.forEach((player2Cell) => {
    player2Cell.addEventListener("click",function clicked (e) {
      let x = e.target.dataset.x
      let y = e.target.dataset.y
      let randomX = 0
      let randomY = 0 
      if(player2.gameboard.missedAttacks.findIndex(coor => coor[0] == x && coor[1] == y) < 0) {
        player1.playerAttack([x,y],player2)
        while (true) {
          randomX = Math.floor(Math.random()*10)
          randomY = Math.floor(Math.random()*10)
          if (player1.gameboard.missedAttacks.findIndex(coor => coor[0] == randomX && coor[1] == randomY) < 0 && player1.gameboard.gameboardArray[randomX][randomY] != "X") {   
            player2.playerAttack([randomX,randomY],player1)
            break;
          } else {console.log("already hit")}
        }
      } else {console.log("already hit")}
      playerDOM.DOMUpdateGameboard(player1,player1Cells)
      AIDOM.DOMUpdateGameboard(player2,player2Cells)
      if(player1.gameboard.isGameOver()) {
        winnerText.textContent = `${[player2.name]} wins!`
        playAgain(gameWinnerModal,playAgainBtn)
      } else if (player2.gameboard.isGameOver()) {
        winnerText.textContent = `${[player1.name]} wins!`
        playAgain(gameWinnerModal,playAgainBtn)
      } else {
        console.log("No winner please continue attacking")
      }
      
      player2Cell.removeEventListener("click", clicked,false)
    },false)
  })
}

function playAgain(dialog,button) {
  dialog.showModal()
  dialog.addEventListener("keydown", (e) => {
    if (e.keyCode == 27) e.preventDefault();
  })
  button.addEventListener("click", (e) => {
    location.reload()
  })
}

startGame(startGameBtn,playerAddShipContainer,playerAddShipSpace,AISpaceParent)