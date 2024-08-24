const Ships = require("../factories/Ships");

beforeAll(() => {
  return (ship = new Ships("carrier", 5));
});
test("test creation of ship", () => {
  const expectedObject = {
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
  };
  expect(ship).toMatchObject(expectedObject);
});

test("test hit a ship position", () => {
  const expectedObject = {
    name: "carrier",
    length: 5,
    numHit: 1,
    sunk: false,
    orientation: "",
    position: [
      [null, null],
      [null, null],
      [null, null],
      [null, null],
      [null, null],
    ],
  };
  expect(ship.hit()).toEqual(expectedObject["numHit"]);
});

test("test if ship is sunk", () => {
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  ship.hit(3);
  expect(ship.isSunk()).toBe(true);
});

test("test if ship is position is initialized", () => {
  const expectedObject = [
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null]
  ];
  expect(ship.initializePosition(ship.length)).toEqual(expectedObject);
});
