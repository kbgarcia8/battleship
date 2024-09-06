import {Gameboard} from "../factories/Gameboard.js";

export class Player {
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

/*
manual test
  player1 = new Player("Admiral")
  player1.gameboard.placeShip("carrier", [0, 0], 'horizontal')
  player1.gameboard.placeShip("battleship", [1, 0], 'horizontal')
  player1.gameboard.placeShip("destroyer", [4, 5], 'vertical')
  player1.gameboard.placeShip("submarine", [7, 9], 'vertical')
  player1.gameboard.placeShip("patrol boat", [5, 7], 'horizontal')

  player2 = new Player("Enemy")
  player2.gameboard.placeShip("carrier", [0, 0], 'horizontal')
  player2.gameboard.placeShip("battleship", [1, 0], 'horizontal')
  player2.gameboard.placeShip("destroyer", [4, 5], 'vertical')
  player2.gameboard.placeShip("submarine", [7, 9], 'vertical')
  player2.gameboard.placeShip("patrol boat", [5, 7], 'horizontal')

  player1.startTurn()
  player1.playerAttack([0, 0], player2)
  player2.playerAttack([0, 1], player1)
*/