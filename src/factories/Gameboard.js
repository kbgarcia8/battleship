import {Ships} from "../factories/Ships.js";

export class Gameboard {
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
    shipsArr.push(new Ships("patrol boat", 2))
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
      for (let j = 0; j < currShipLength; j++) {
        if (this.gameboardArray[x][y + j] !== null) return false
        return true
      }
    } else if (orientation == 'vertical' && x + (currShipLength-1) < 10) {
      for (let k = 0; k < currShipLength; k++) {
        if (this.gameboardArray[x + k][y] !== null) return false
        return true
      }
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
    } else if (this.gameboardArray[x][y] !== null) {
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
/*
manual test
  gameboard = new Gameboard()
  gameboard.placeShip("carrier", [0, 0], 'horizontal')
  gameboard.placeShip("battleship", [1, 0], 'horizontal')
  gameboard.placeShip("destroyer", [4, 5], 'vertical')
  gameboard.placeShip("submarine", [7, 9], 'vertical')
  gameboard.placeShip("patrol boat", [5, 7], 'horizontal')
  gameboard.receiveAttack([2, 0]) //missed
  gameboard.receiveAttack([3, 1]) //missed
  gameboard.receiveAttack([2, 0]) //missed
  gameboard.receiveAttack([3, 1]) //missed
  gameboard.receiveAttack([0, 0]) //hit carrier
  gameboard.receiveAttack([0, 1]) //hit carrier
  gameboard.receiveAttack([0, 2]) //hit carrier
  gameboard.receiveAttack([0, 3]) //hit carrier
  gameboard.receiveAttack([0, 4]) //hit carrier
  gameboard.receiveAttack([1, 0]) //hit battleship
  gameboard.receiveAttack([1, 1]) //hit battleship
  gameboard.receiveAttack([1, 2]) //hit battleship
  gameboard.receiveAttack([1, 3]) //hit battleship
  gameboard.receiveAttack([4, 5]) //hit destroyer
  gameboard.receiveAttack([5, 5]) //hit destroyer
  gameboard.receiveAttack([6, 5]) //hit destroyer
  gameboard.receiveAttack([7, 9]) //hit submarine
  gameboard.receiveAttack([8, 9]) //hit submarine
  gameboard.receiveAttack([9, 9]) //hit submarine
  gameboard.receiveAttack([5, 7]) //hit patrol boat
  gameboard.receiveAttack([5, 8]) //hit patrol boat
*/
