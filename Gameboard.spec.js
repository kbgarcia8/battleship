const Gameboard = require("./Gameboard.js");
const Ships = require("./Ships.js");

/*beforeAll(() => {
  return (ship = Ships("carrier", 5));
});*/
//receiveAttack
//missedAttack
//If all ship is sunk = gameover
//creation of blank gameboard
test("test creation of gameboard", () => {
  const gameboard = Gameboard();
  const expectedObject = {
    gameboardArray =[
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
  }
  expect(gameboard.gameboardArray).toMatchObject(expectedObject);
});
//placing of created  ship && checking if placement is valid
