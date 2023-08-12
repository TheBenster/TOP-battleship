const Ship = require("./Ship.js");

// const Ship = (shipLen) => {
//   let numOfHits = 0;
//   let beenHit = false;
//   const hit = () => {
//     numOfHits + 1;
//     beenHit = true;
//     return numOfHits;
//   };
//   const isSunk = (numOfHits) => {
//     if (numOfHits === shipLen) {
//       return true;
//     }
//   };

//   return {
//     shipLen,
//     numOfHits,
//     hit,
//     beenHit,
//     isSunk,
//   };
// };

test("ship increments hits", () => {
  let shipInstance1 = Ship(1);
  let beenHit = shipInstance1.hit();
  expect(beenHit).toBe(1);
});

test("is sunk", () => {
  let shipInstance2 = Ship(1);
  shipInstance2.hit();
  expect(shipInstance2.isSunk()).toBe(true);
});
