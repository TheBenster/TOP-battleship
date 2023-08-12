const createGameboard = require("./Gameboard");

test("placeShip should correctly place a ship on the gameboard", () => {
  const gameboard = createGameboard();
  const shipLength = 1;
  const row = 0;
  const col = 0;
  const direction = "horizontal";

  gameboard.placeShip(shipLength, row, col, direction);

  expect(gameboard.board[row][col]).toBe("ship");
});
