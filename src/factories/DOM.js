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