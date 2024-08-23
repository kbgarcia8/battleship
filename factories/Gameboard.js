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

  placeShip(name, coord, orientation) {
    const re = new RegExp(name, "g");
    let currShipName = "";
    let currShipLength = 0;
    for (let i = 0; i < this.shipsArray.length; i++) {
      if (this.shipsArray[i].name.match(re)) {
        currShipName = this.shipsArray[i].name
        currShipLength = this.shipsArray[i].length
      }
    }
    const [x, y] = coord;
    if (orientation == 'horizontal') {
      for (let i = 0; i < currShipLength; i++) {
        this.gameboardArray[x][y + i] = currShipName
      }
    } else if (orientation == 'vertical') {
      for (let i = 0; i < currShipLength; i++) {
        this.gameboardArray[x + i][y] = currShipName
      }
    }
    return this.gameboardArray
  }
  //if (this.gameboardArray[x][y] == null) -> add this in check if placement is valid
  isPlacementValid() {
    
  }
}

module.exports = Gameboard;