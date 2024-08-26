const Ships = require("../factories/Ships.js");

class Gameboard {
  constructor() {
    this.gameboardArray = this.createGameboard()
    this.shipsArray = this.initializeShipsArray()
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
            this.shipsArray[i].position[j][1] = y+j
          }
        } else if (orientation == 'vertical') {
          for (let k = 0; k < currShipLength; k++) {
            this.gameboardArray[x + i][y] = currShipName
            this.shipsArray[i].position[k][0] = x+k
            this.shipsArray[i].position[k][1] = y
          }
        }
        return [this.gameboardArray, this.shipsArray]
      }
    }
  }
  isPlacementValid(name, coords, orientation) {    
    const re = new RegExp(name, "g");
    let currShipName = "";
    let currShipLength = 0;
    for (let i = 0; i < this.shipsArray.length; i++) {
      if (this.shipsArray[i].name.match(re)) {
        currShipName = this.shipsArray[i].name
        currShipLength = this.shipsArray[i].length
      }
    }
    const [x, y] = coords;
    if(x>10||x<0||y>10||y<0) return false
      if (orientation == 'horizontal' && y+currShipLength<10) {
        for (let j = 0; j < currShipLength; j++) {
          if(this.gameboardArray[x][y + j] !== null) return false
          return true
        }
      } else if (orientation == 'vertical' && x+currShipLength<10) {
        for (let k = 0; k < currShipLength; k++) {
          if(this.gameboardArray[x + i][y] !== null) return false
          return true
        }
      }
  }
  receiveAttack(coords) {
    
  }
}

/*gameboard = new Gameboard()
gameboard.placeShip("carrier", [0, 0], 'horizontal')
console.log(gameboard.shipsArray[0])*/
module.exports = Gameboard;