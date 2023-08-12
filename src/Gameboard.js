function createGameboard() {
  const board = new Array(10).fill(null).map(() => new Array(10).fill(null));
  const currentLocation = [0, 0];

  function placeShip(shipLength, row, col, direction) {
    const ship = shipFactory(shipLength);
    if (direction === "horizontal") {
      for (let i = 0; i < shipLength; i++) {
        board[row][col + i] = ship;
      }
    } else if (direction === "vertical") {
      for (let i = 0; i < shipLength; i++) {
        board[row + i][col] = ship;
      }
    }
  }

  return {
    board,
    currentLocation,
    placeShip,
  };
}

module.exports = createGameboard;
