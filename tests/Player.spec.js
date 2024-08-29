const Player = require("../factories/Player.js");

beforeEach(() => {
  player1 = new Player("Captain")
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
});
test("test creation of player1 gameboard and ship placement", () => {
  const expectedObject = {
    "name": "Captain",
    "gameboard": {
      "gameboardArray": [
        ["carrier", "carrier", "carrier", "carrier", "carrier", null, null, null, null, null],
        ["battleship", "battleship", "battleship", "battleship", null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, "destroyer", null, null, null, null],
        [null, null, null, null, null, "destroyer", null, "patrol boat", "patrol boat", null],
        [null, null, null, null, null, "destroyer", null, null, null, null],
        [null, null, null, null, null, null, null, null, null, "submarine"],
        [null, null, null, null, null, null, null, null, null, "submarine"],
        [null, null, null, null, null, null, null, null, null, "submarine"],
      ],
      "shipsArray": [
        {
          name: "carrier",
          length: 5,
          numHit: 0,
          sunk: false,
          orientation: "horizontal",
          position: [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
          ],
        },
        {
          name: "battleship",
          length: 4,
          numHit: 0,
          sunk: false,
          orientation: "horizontal",
          position: [
            [1, 0],
            [1, 1],
            [1, 2],
            [1, 3]
          ],
        },
        {
          name: "destroyer",
          length: 3,
          numHit: 0,
          sunk: false,
          orientation: "vertical",
          position: [
            [4, 5],
            [5, 5],
            [6, 5]
          ],
        },
        {
          name: "submarine",
          length: 3,
          numHit: 0,
          sunk: false,
          orientation: "vertical",
          position: [
            [7, 9],
            [8, 9],
            [9, 9]
          ],
        },
        {
          name: "patrol boat",
          length: 2,
          numHit: 0,
          sunk: false,
          orientation: "horizontal",
          position: [
            [5, 7],
            [5, 8]
          ],
        }
      ],
      "missedAttacks": []
    },
    "turn": false
  }
  expect(player1).toMatchObject(expectedObject);
});
test("test creation of player1 gameboard and ship placement", () => {
  const expectedObject = {
    "name": "Enemy",
    "gameboard": {
      "gameboardArray": [
        ["carrier", "carrier", "carrier", "carrier", "carrier", null, null, null, null, null],
        ["battleship", "battleship", "battleship", "battleship", null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, "destroyer", null, null, null, null],
        [null, null, null, null, null, "destroyer", null, "patrol boat", "patrol boat", null],
        [null, null, null, null, null, "destroyer", null, null, null, null],
        [null, null, null, null, null, null, null, null, null, "submarine"],
        [null, null, null, null, null, null, null, null, null, "submarine"],
        [null, null, null, null, null, null, null, null, null, "submarine"],
      ],
      "shipsArray": [
        {
          name: "carrier",
          length: 5,
          numHit: 0,
          sunk: false,
          orientation: "horizontal",
          position: [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
          ],
        },
        {
          name: "battleship",
          length: 4,
          numHit: 0,
          sunk: false,
          orientation: "horizontal",
          position: [
            [1, 0],
            [1, 1],
            [1, 2],
            [1, 3]
          ],
        },
        {
          name: "destroyer",
          length: 3,
          numHit: 0,
          sunk: false,
          orientation: "vertical",
          position: [
            [4, 5],
            [5, 5],
            [6, 5]
          ],
        },
        {
          name: "submarine",
          length: 3,
          numHit: 0,
          sunk: false,
          orientation: "vertical",
          position: [
            [7, 9],
            [8, 9],
            [9, 9]
          ],
        },
        {
          name: "patrol boat",
          length: 2,
          numHit: 0,
          sunk: false,
          orientation: "horizontal",
          position: [
            [5, 7],
            [5, 8]
          ],
        }
      ],
      "missedAttacks": []
    },
    "turn": false
  }
  expect(player2).toMatchObject(expectedObject);
});
test("test start turn of player1", () => {
  const expectedOut = true
  expect(player1.startTurn()).toBe(expectedOut);
});
test("test start turn of player2 and end turn of player1", () => {
  const expectedOut1 = false
  const expectedOut2 = true
  expect(player1.endTurn(player2)).toBe(expectedOut1);
  expect(player2.startTurn()).toBe(expectedOut2);
});
//attack
test("test receive attack of both player 1 and 2", () => {
  const expectedObject1 = [
      ["carrier", "X", "carrier", "carrier", "carrier", null, null, null, null, null],
      ["battleship", "battleship", "battleship", "battleship", null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, "destroyer", null, null, null, null],
      [null, null, null, null, null, "destroyer", null, "patrol boat", "patrol boat", null],
      [null, null, null, null, null, "destroyer", null, null, null, null],
      [null, null, null, null, null, null, null, null, null, "submarine"],
      [null, null, null, null, null, null, null, null, null, "submarine"],
      [null, null, null, null, null, null, null, null, null, "submarine"],
    ]
  const expectedObject2 = [
    ["X", "carrier", "carrier", "carrier", "carrier", null, null, null, null, null],
    ["battleship", "battleship", "battleship", "battleship", null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, "destroyer", null, null, null, null],
    [null, null, null, null, null, "destroyer", null, "patrol boat", "patrol boat", null],
    [null, null, null, null, null, "destroyer", null, null, null, null],
    [null, null, null, null, null, null, null, null, null, "submarine"],
    [null, null, null, null, null, null, null, null, null, "submarine"],
    [null, null, null, null, null, null, null, null, null, "submarine"],
  ]
  player1.startTurn()
  player1.playerAttack([0, 0], player2)
  player2.playerAttack([0, 1], player1)
  expect(player1.gameboard.gameboardArray).toMatchObject(expectedObject1);
  expect(player2.gameboard.gameboardArray).toMatchObject(expectedObject2);
});