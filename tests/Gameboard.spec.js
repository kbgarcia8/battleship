const Gameboard = require("../factories/Gameboard.js");

beforeEach(() => {
  gameboard = new Gameboard()
});

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
      orientation: "horizontal",
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
test("fail test for placement has obstruction", () => {
  const expectedOut = false
  expect(gameboard.isPlacementValid("battleship", [0, 0], 'horizontal')).toBe(expectedOut);
});
test("pass test for placement has obstruction", () => {
  const expectedOut = true
  expect(gameboard.isPlacementValid("battleship", [1, 1], 'horizontal')).toBe(expectedOut);
});
test("fail test for placement exceeding gameboard", () => {
  const expectedOut = true
  expect(gameboard.isPlacementValid("battleship", [1, 7], 'horizontal')).toBe(expectedOut);
});
//receiveAttack
test("test receive attack on a ship", () => {
  const expectedObject = []
  expect(gameboard.receiveAttack([0, 0])).toMatchObject(expectedOut);
});
//missedAttack
//If all ship is sunk = gameover