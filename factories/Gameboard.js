const Ships = require("../factories/Ships.js");

class Gameboard {
    constructor() {
      this.gameboardArray = this.createGameboard()
      this.shipsArray = this.initializeShipsArray()
    }

    createGameboard() {
    let gameArray = new Array(10).fill([null, null, null, null, null, null, null, null, null, null])
    return gameArray
    }

    initializeShipsArray() {
      const shipsArr = []
      shipsArr.push(new Ships("carrier",5))
      shipsArr.push(new Ships("battleship",4))
      shipsArr.push(new Ships("destroyer",3))
      shipsArr.push(new Ships("submarine",3))
      shipsArr.push(new Ships("patrol boat",2))
      return shipsArr
    }
    
    placeShip(name,coord,orientation) {
      const re = new RegExp(name, "g");
      let currShipName = "";
      let currShipLength = 0;
      for (let i=0; i<this.shipsArray.length;i++){
        if(this.shipsArray[i].name.match(re)) {
          currShipName = this.shipsArray[i].name
          currShipLength = this.shipsArray[i].length
        }
      }

      const [x,y] = coord;
      if(orientation = 'vertical'){

      } else if (orientation = 'horizontal') {

      }
      //if (this.gameboardArray[x][y] == null)
      //or consider using while null then break if
      //x or y is equal to ship length
        //check if null then depend in orientation
        //if x or y will be incremented 
    }
  }
  
  module.exports = Gameboard;