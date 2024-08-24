const Gameboard = require("../factories/Gameboard.js");

beforeEach(() => {
  gameboard = new Gameboard()
});

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
        orientation: "",
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
        orientation: "",
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
        orientation: "",
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
        orientation: "",
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
        orientation: "",
        position: [
          [null, null],
          [null, null]
        ],
      }
    ]
  }
  expect(gameboard).toMatchObject(expectedObject);
});
//placing of created ship
test("test placement of ship on the gameboard", () => {
  const expectedObject = [
  [
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
  ],
  [
    {
      name: "carrier",
      length: 5,
      numHit: 0,
      sunk: false,
      orientation: "",
      position: [
        [0,0],
        [0,1],
        [0,2],
        [0,3],
        [0,4],
      ],
    },
    {
      name: "battleship",
      length: 4,
      numHit: 0,
      sunk: false,
      orientation: "",
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
      orientation: "",
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
      orientation: "",
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
      orientation: "",
      position: [
        [null, null],
        [null, null]
      ],
    }
  ]
]
  expect(gameboard.placeShip("carrier", [0, 0], 'horizontal')).toMatchObject(expectedObject);
});
//test placement of ship if valid
test("test ", () => {
  const expectedOut = false
  expect(gameboard.isPlacementValid("battleship", [0, 0], 'horizontal')).toMatchObject(expectedOut);
});
//receiveAttack
//missedAttack
//If all ship is sunk = gameover