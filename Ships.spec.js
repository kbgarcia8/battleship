const Ships = require("./Ships.js");

beforeAll(() => {
  return (ship = Ships("carrier", 5));
});
test("test creation of ship", () => {
  const expectedObject = {
    name: "carrier",
    length: 5,
    numHit: 0,
    sunk: false,
    orientation: 'vertical',
    position: [
      [2,1],
      [2,2],
      [2,3],
      [2,4],
      [2,5],
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
    orientation: 'vertical',    
    position: [
      [2,1],
      [2,2],
      [2,3],
      [2,4],
      [2,5],
    ],
  };
  expect(ship.hit()).toEqual(expectedObject['numHit']);
});

test("test if ship is sunk", () => {
  ship.hit(0)
  ship.hit(1)
  ship.hit(2)
  ship.hit(3)
  expect(ship.isSunk()).toBe(true);
});
