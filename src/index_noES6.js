class Ships {
  constructor(name, length) {
    this.name = name,
      this.length = length,
      this.numHit = 0,
      this.sunk = false,
      this.orientation = "",
      this.position = this.initializePosition(this.length)
  }
  hit(index) {
    if (this.position[index] !== "X") {
      this.position[index] = ["X"];
      let targetHit = this.numHit + 1;
      return (this.numHit = targetHit);
    }
    return;
  }
  isSunk() {
    if (this.length == this.numHit) {
      this.sunk = true
      return true;
    }

    return false;
  }
  initializePosition(length) {
    const initialPosArr = []
    for (let i = 0; i < length; i++) {
      initialPosArr.push([null, null])
    }
    return initialPosArr
  }
}

class Gameboard {
  constructor() {
    this.gameboardArray = this.createGameboard()
    this.shipsArray = this.initializeShipsArray()
    this.missedAttacks = []
  }
  createGameboard() {
    let gameArray = [
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]
    return gameArray
  }
  
  initializeShipsArray() {
    const shipsArr = []
    shipsArr.push(new Ships("carrier", 5))
    shipsArr.push(new Ships("battleship", 4))
    shipsArr.push(new Ships("destroyer", 3))
    shipsArr.push(new Ships("submarine", 3))
    shipsArr.push(new Ships("patrol-boat", 2))
    return shipsArr
  }
  
  placeShip(name, coords, orientation) {
    if (this.isPlacementValid(name, coords, orientation) === true) {
      const re = new RegExp(name, "g");
      let currShipName = "";
      let currShipLength = 0;
      for (let i = 0; i < this.shipsArray.length; i++) {
        if (this.shipsArray[i].name.match(re)) {
          currShipName = this.shipsArray[i].name
          currShipLength = this.shipsArray[i].length
          this.shipsArray[i].orientation = orientation
          const [x, y] = coords;
          if (orientation == 'horizontal') {
            for (let j = 0; j < currShipLength; j++) {
              this.gameboardArray[x][y + j] = currShipName
              this.shipsArray[i].position[j][0] = x
              this.shipsArray[i].position[j][1] = y + j
            }
          } else if (orientation == 'vertical') {
            for (let k = 0; k < currShipLength; k++) {
              this.gameboardArray[x + k][y] = currShipName
              this.shipsArray[i].position[k][0] = x + k
              this.shipsArray[i].position[k][1] = y
            }
          }
          return {
            "gameboardArray": this.gameboardArray,
            "shipsArray": this.shipsArray,
            "missedAttacks": this.missedAttacks
          }
        }
      }
    } else {
      return false
    }
  }
  
  isPlacementValid(name, coords, orientation) {
    const re = new RegExp(name, "g");
    let currShipLength = 0;
    for (let i = 0; i < this.shipsArray.length; i++) {
      if (this.shipsArray[i].name.match(re)) {
        currShipLength = this.shipsArray[i].length
      }
    }
    const [x, y] = coords;
    
    if (x > 10 || x < 0 || y > 10 || y < 0) return false
    if (orientation == 'horizontal' && y + (currShipLength-1) < 10) {
      let pathContent = []
      for (let j = 0; j < currShipLength; j++) {
        pathContent.push(this.gameboardArray[x][y + j])          
      }
      const filtered = pathContent.filter((content) => {return content == null})
      if (filtered.length == pathContent.length) return true
      return false
    } else if (orientation == 'vertical' && x + (currShipLength-1) < 10) {
      let pathContent = []
      for (let k = 0; k < currShipLength; k++) {
        pathContent.push(this.gameboardArray[x + k][y])
      }
      const filtered = pathContent.filter((content) => {return content == null})
      if (filtered.length == pathContent.length) return true
      return false
    } else {
      return false
    }
  }
  
  receiveAttack(coords) {
    let currShipPosIndexHit = 0;
    const [x, y] = coords;
    if (this.gameboardArray[x][y] === null) {
      this.gameboardArray[x][y] = "miss"
      this.missedAttacks.push([x, y])
    } else if (this.gameboardArray[x][y] !== null && this.gameboardArray[x][y] !== "X" ) {
      let currentShipHit = this.gameboardArray[x][y]  
      let re = new RegExp(currentShipHit, "g");
      for (let i = 0; i < this.shipsArray.length; i++) {
        if (this.shipsArray[i].name.match(re)) {
          currShipPosIndexHit = this.shipsArray[i]['position'].findIndex(pos => pos[0] === x && pos[1] === y)
          this.shipsArray[i].hit(currShipPosIndexHit)
        }
      }
      this.gameboardArray[x][y] = "X"
    } else {
      return false
    }
    return {
      "gameboardArray": this.gameboardArray,
      "shipsArray": this.shipsArray,
      "missedAttacks": this.missedAttacks
    }
  }
  
  isGameOver() {
    for (let i = 0; i < this.shipsArray.length; i++) {
      if (this.shipsArray[i].isSunk() === false) return false
    }
    return true
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.gameboard = new Gameboard();
    this.turn = false
  }

  startTurn() {
    if(this.turn == false) this.turn = true;
    
    return this.turn
  }

  endTurn(nextPlayer) {
    if(this.turn == true) {
    this.turn = false;
    nextPlayer.startTurn()
    }
    return this.turn
  }

  checkIfTurn () {
    return this.turn
  }

  playerAttack(coords, enemyPlayer) {
    if (this.checkIfTurn()) {
      enemyPlayer.gameboard.receiveAttack(coords)
      this.endTurn(enemyPlayer)
    }
  }
}

class DOM {
  constructor(player, helper) {
    this.player = player,
    this.helper = helper
  }  
  DOMGameboard(parent) {
    for (let x = 0; x < this.player.gameboard.gameboardArray.length; x++) {
      for (let y = 0; y < this.player.gameboard.gameboardArray[x].length; y++) {
        var board_node = document.createElement("DIV")
        board_node.setAttribute("class", `${this.player.name}-cell`)
        board_node.setAttribute("data-x", `${x}`)
        board_node.setAttribute("data-y", `${y}`)
        board_node.setAttribute("data-in",`${this.player.gameboard.gameboardArray[x][y]}`)
        parent.appendChild(board_node)
      }
    }
  }
  DOMAddShips(parent) {
    for (let i = 0; i < this.player.gameboard.shipsArray.length; i++) {
      let currShipName = this.player.gameboard.shipsArray[i].name;
      const ship_container_node = document.createElement("DIV")
      ship_container_node.setAttribute("class",`${currShipName}-container horizontal`)
      ship_container_node.setAttribute("id", `${currShipName}`)
      ship_container_node.setAttribute("draggable", "true")
      parent.appendChild(ship_container_node)
      for (let j = 0; j < this.player.gameboard.shipsArray[i].length; j++) {
        const ship_part_node = document.createElement("DIV")
        ship_part_node.setAttribute("class", `${currShipName}`)
        ship_container_node.appendChild(ship_part_node)
      }
    }
  }
  DOMDropShips(cells) {
    cells.forEach((cell) => {
      cell.addEventListener("dragover", (e) => {
        e.preventDefault()
      })
      cell.addEventListener("drop", (e) => {
        e.preventDefault()        
        let acquiredID = e.dataTransfer.getData("textID")
        let acquiredLength = e.dataTransfer.getData("textLength")
        let currentElement = document.querySelector(`#${acquiredID}`)
        let acquiredOrientation = this.helper.checkOrientation(currentElement)
        let x = Number(cell.dataset.x)
        let y = Number(cell.dataset.y)
        //console.log([x, y])
        //console.log(cell.dataset, acquiredID, acquiredLength, acquiredOrientation)
        const checkPlacement = this.player.gameboard.placeShip(acquiredID, [x,y], acquiredOrientation)
        if(checkPlacement && acquiredOrientation == "horizontal") {
            console.log("Horizontal placement is possible")
            cell.setAttribute("data-in", acquiredID)
            cell.classList.add(acquiredID)
            let i = 0;
            while (i < acquiredLength - 1) {
              cell = cell.nextSibling;
              cell.setAttribute("data-in", acquiredID)
              cell.classList.add(acquiredID)
              i++;
            }
            let element = document.querySelector(`.${acquiredID}-container`)
            element.remove()
        } else if (checkPlacement && acquiredOrientation == "vertical") {//resolve else if why placeShip is being executed twice
          console.log("Vertical placement is possible")
          cell.setAttribute("data-in", acquiredID)
          cell.classList.add(acquiredID)
          let i = 0;
          while (i < acquiredLength - 1) {
            cell = cell.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling; //try the next 10 sibling
            cell.setAttribute("data-in", acquiredID)
            cell.classList.add(acquiredID)
            i++;
          }
          let element = document.querySelector(`.${acquiredID}-container`)
          element.remove()
        } else {
            console.log("Invalid placement")
        }
      })
    })
  }
  DOMRandomDropShips(ship,cells){
    while(true) {
      let x = Math.floor(Math.random()*10)
      let y = Math.floor(Math.random()*10)
      let coords = [x,y]
      let orientaions = ['horizontal', 'vertical']
      let randomOrientation = orientaions[Math.floor(Math.random() * orientaions.length)]
      
      if(this.player.gameboard.placeShip(ship.name,coords,randomOrientation)) {
        //put here process on how to reflect ships in game board (do it per ship)
        console.log(`Initial position at [${x},${y}] ${randomOrientation}ly`)
        cells.forEach((cell) => {
          if((cell.dataset.x == x)&&(cell.dataset.y == y)&&(randomOrientation == "horizontal")) {
            cell.setAttribute("data-in", ship.name)
            cell.setAttribute('style', 'border: white 1px solid; background-color: transparent;')
            cell.classList.add(ship.name)
            let i = 0;
            while (i < ship.length - 1) {
              cell = cell.nextSibling;
              cell.setAttribute("data-in", ship.name)
              cell.setAttribute('style', 'border: white 1px solid; background-color: transparent;')
              cell.classList.add(ship.name)
              i++;
            }
          } else if((cell.dataset.x == x)&&(cell.dataset.y == y)&&(randomOrientation == "vertical")) {
            cell.setAttribute("data-in", ship.name)
            cell.setAttribute('style', 'border: white 1px solid; background-color: transparent;')
            cell.classList.add(ship.name)
            let i = 0;
            while (i < ship.length - 1) {
              cell = cell.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling; //try the next 10 sibling
              cell.setAttribute("data-in", ship.name)
              cell.setAttribute('style', 'border: white 1px solid; background-color: transparent;')
              cell.classList.add(ship.name)
              i++;
            }
          }
        })
        break
      }
    }    
  }
  DOMUpdateGameboard(player,playerCells) {
    playerCells.forEach((playerCell) => {
      let x = playerCell.dataset.x
      let y = playerCell.dataset.y
      playerCell.setAttribute('data-in', `${player.gameboard.gameboardArray[x][y]}`)
      if(player.gameboard.gameboardArray[x][y] == "miss") {
        playerCell.textContent = "X"
        playerCell.setAttribute('style','background-color: #87aeed;')
      } else if(player.gameboard.gameboardArray[x][y] == "X") {
        playerCell.textContent = "X"
        playerCell.setAttribute('style','background-color: #f55858; border:white 1px solid')
      }
    })
    console.log("Gameboard updated")
  }
}

class Helper {
  checkOrientation(element) {
      let shipOrientation = null;
      if (element.classList.contains("horizontal")) {
        shipOrientation = "horizontal";
      } else {
        shipOrientation = "vertical";
      }
      return shipOrientation;
    }
  dragShip(element) {
      const children = element.childNodes;
      element.addEventListener("dragstart", (e) => {
          e.dataTransfer.setData("textID", e.target.id)
          e.dataTransfer.setData("textLength", children.length)
    })
  }
  IsAllShipsPlaced(container) {
    const containerChildren = container.childNodes
    if(containerChildren.length == 0) {
      return true
    } else {
      return false
    }
  }    
  changeOrientation(element) {
    element.addEventListener("dblclick", (e) => {
      e.preventDefault()
      if(element.classList.contains("horizontal")) {
        element.classList.remove("horizontal")
        element.classList.add("vertical")
      } else if (element.classList.contains("vertical")) {
        element.classList.remove("vertical")
        element.classList.add("horizontal")
      }
    })
  }
}

/*INDEX.JS starts here*/
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

//PLAY GAME functions
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
          console.log(`input ${randomX},${randomY}`)
          if (player1.gameboard.missedAttacks.findIndex(coor => coor[0] == randomX && coor[1] == randomY) < 0 && player1.gameboard.gameboardArray[randomX][randomY] != "X") {
            console.log(player1.gameboard.missedAttacks)         
            player2.playerAttack([randomX,randomY],player1)
            console.log(`success ${randomX},${randomY}`)
            break;
          } else {console.log("already hit")}
        }
      } else {console.log("already hit")}
      playerDOM.DOMUpdateGameboard(player1,player1Cells)
      AIDOM.DOMUpdateGameboard(player2,player2Cells)
      if(player1.gameboard.isGameOver()) {
        console.log(`${[player2.name]} wins!`)
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
    console.log(e.keyCode)
    if (e.keyCode == 27) e.preventDefault();
  })
  button.addEventListener("click", (e) => {
    location.reload()
  })
}

startGame(startGameBtn,playerAddShipContainer,playerAddShipSpace,AISpaceParent)