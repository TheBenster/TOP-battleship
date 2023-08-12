const Ship = (shipLen) => {
  let numOfHits = 0;
  const hit = () => {
    numOfHits += 1;
    return numOfHits;
  };
  const isSunk = () => {
    return numOfHits === shipLen;
  };

  return {
    numOfHits,
    hit,
    isSunk,
  };
};

module.exports = Ship;
