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
    ],
    missedAttacks: []
  }
  expect(gameboard).toMatchObject(expectedObject);
});
test("pass test placement of ship on the gameboard", () => {
  const expectedObject = {
    "gameboardArray": [
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
  expect(gameboard.placeShip("carrier", [0, 0], 'horizontal')).toMatchObject(expectedObject);
});
test("false (fail) expected test for placement has obstruction", () => {
  gameboard.placeShip("carrier", [0, 0], 'horizontal')
  const expectedOut = false
  expect(gameboard.isPlacementValid("battleship", [0, 0], 'horizontal')).toBe(expectedOut);
});
test("false (fail) expected test for placement exceeding gameboard", () => {
  const expectedOut = false
  expect(gameboard.isPlacementValid("battleship", [1, 7], 'horizontal')).toBe(expectedOut);
});
test("pass test for placement has obstruction", () => {
  const expectedOut = true
  expect(gameboard.isPlacementValid("battleship", [1, 1], 'horizontal')).toBe(expectedOut);
});
test("pass test for placement has no obstruction object return", () => {
  gameboard.placeShip("carrier", [0, 0], 'horizontal')
  gameboard.placeShip("battleship", [1, 0], 'horizontal')
  const expectedObject = {
    "gameboardArray": [
      ["carrier", "carrier", "carrier", "carrier", "carrier", null, null, null, null, null],
      ["battleship", "battleship", "battleship", "battleship", null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
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
    ],
    "missedAttacks": []
  }
  expect(gameboard).toMatchObject(expectedObject);
});
test("miss test receive attack on a ship", () => {
  gameboard.placeShip("carrier", [0, 0], 'horizontal')
  gameboard.placeShip("battleship", [1, 0], 'horizontal')
  const expectedObject = {
    "gameboardArray": [
      ["carrier", "carrier", "carrier", "carrier", "carrier", null, null, null, null, null],
      ["battleship", "battleship", "battleship", "battleship", null, null, null, null, null, null],
      ["miss", null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
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
    ],
    "missedAttacks": [[2, 0]]
  }
  expect(gameboard.receiveAttack([2, 0])).toMatchObject(expectedObject);
});
test("second miss test receive attack on a ship", () => {
  gameboard.placeShip("carrier", [0, 0], 'horizontal')
  gameboard.placeShip("battleship", [1, 0], 'horizontal')
  gameboard.receiveAttack([2, 0])
  const expectedObject = {
    "gameboardArray": [
      ["carrier", "carrier", "carrier", "carrier", "carrier", null, null, null, null, null],
      ["battleship", "battleship", "battleship", "battleship", null, null, null, null, null, null],
      ["miss", null, null, null, null, null, null, null, null, null],
      [null, "miss", null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
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
    ],
    "missedAttacks": [[2, 0],[3, 1]]
  }
  expect(gameboard.receiveAttack([3, 1])).toMatchObject(expectedObject);
});
test("test object return if all ship is hit", () => {
  gameboard.placeShip("carrier", [0, 0], 'horizontal')
  gameboard.placeShip("battleship", [1, 0], 'horizontal')
  gameboard.placeShip("destroyer", [4, 5], 'vertical')
  gameboard.placeShip("submarine", [7, 9], 'vertical')
  gameboard.placeShip("patrol boat", [5, 7], 'horizontal')
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
  gameboard.shipsArray[0].isSunk()
  gameboard.shipsArray[1].isSunk()
  gameboard.shipsArray[2].isSunk()
  gameboard.shipsArray[3].isSunk()
  gameboard.shipsArray[4].isSunk()
  const expectedObject = {
    "gameboardArray": [
      ["X", "X", "X", "X", "X", null, null, null, null, null],
      ["X", "X", "X", "X", null, null, null, null, null, null],
      ["miss", null, null, null, null, null, null, null, null, null],
      [null, "miss", null, null, null, null, null, null, null, null],
      [null, null, null, null, null, "X", null, null, null, null],
      [null, null, null, null, null, "X", null, "X", "X", null],
      [null, null, null, null, null, "X", null, null, null, null],
      [null, null, null, null, null, null, null, null, null, "X"],
      [null, null, null, null, null, null, null, null, null, "X"],
      [null, null, null, null, null, null, null, null, null, "X"],
    ],
    "shipsArray": [
      {
        name: "carrier",
        length: 5,
        numHit: 5,
        sunk: true,
        orientation: "horizontal",
        position: [
          ["X"],
          ["X"],
          ["X"],
          ["X"],
          ["X"],
        ],
      },
      {
        name: "battleship",
        length: 4,
        numHit: 4,
        sunk: true,
        orientation: "horizontal",
        position: [
          ["X"],
          ["X"],
          ["X"],
          ["X"]
        ],
      },
      {
        name: "destroyer",
        length: 3,
        numHit: 3,
        sunk: true,
        orientation: "vertical",
        position: [
          ["X"],
          ["X"],
          ["X"]
        ],
      },
      {
        name: "submarine",
        length: 3,
        numHit: 3,
        sunk: true,
        orientation: "vertical",
        position: [
          ["X"],
          ["X"],
          ["X"]
        ],
      },
      {
        name: "patrol boat",
        length: 2,
        numHit: 2,
        sunk: true,
        orientation: "horizontal",
        position: [
          ["X"],
          ["X"]
        ],
      }
    ],
    "missedAttacks": [[2, 0],[3, 1]]
  }
  expect(gameboard).toMatchObject(expectedObject);
});
test("true test return if all ship is sunk", () => {
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
  const expectedOut = true
  expect(gameboard.isGameOver()).toBe(expectedOut);
});