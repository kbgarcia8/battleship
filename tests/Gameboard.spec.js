const Gameboard = require("../factories/Gameboard.js");
const Ships = require("../factories/Ships.js");

beforeEach(() => {
  gameboard = new Gameboard()
});
//receiveAttack
//missedAttack
//If all ship is sunk = gameover
//creation of blank gameboard
test("test creation of gameboard", () => {
  const expectedObject = [
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
  expect(gameboard.gameboardArray).toMatchObject(expectedObject);
});
//initiliaze/create 5 ships for the game
test("test initialization of ship", () => {
  const expectedObject = {
    gameboardArray: [
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
    ],
    shipsArray: [
      {
        name: "carrier",
        length: 5,
        numHit: 0,
        sunk: false,
        orientation: "vertical",
        position: [
          [null, null],
          [null, null],
          [null, null],
          [null, null],
          [null, null],
        ],
      },
      {
        name: "battleship",
        length: 4,
        numHit: 0,
        sunk: false,
        orientation: "vertical",
        position: [
          [null, null],
          [null, null],
          [null, null],
          [null, null]
        ],
      },
      {
        name: "destroyer",
        length: 3,
        numHit: 0,
        sunk: false,
        orientation: "vertical",
        position: [
          [null, null],
          [null, null],
          [null, null]
        ],
      },
      {
        name: "submarine",
        length: 3,
        numHit: 0,
        sunk: false,
        orientation: "vertical",
        position: [
          [null, null],
          [null, null],
          [null, null]
        ],
      },
      {
        name: "patrol boat",
        length: 2,
        numHit: 0,
        sunk: false,
        orientation: "vertical",
        position: [
          [null, null],
          [null, null]
        ],
      }
    ]
  }
  expect(gameboard).toMatchObject(expectedObject);
});
//placing of created ship && checking if placement is valid
test("test placement of ship on the gameboard", () => {
  const expectedObject = [
    ["carrier", "carrier", "carrier", "carrier", "carrier", null, null, null, null, null],
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
  expect(gameboard.placeShip("carrier", [0, 0], 'horizontal')).toMatchObject(expectedObject);
});

test("test placement of ship on the gameboard if valid", () => {
  const expectedOut = ""
  expect(gameboard.isPlacementValid([0, 0], 'horizontal')).toMatchObject(expectedObject);
}); 