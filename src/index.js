const Ship = (shipLen) => {
  let numOfHits = 0;
  const hit = () => {
    return (numOfHits += 1);
    // beenHit = true;
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

console.log(1);

const root = document.getElementById("root");
const button = document.createElement("button");
button.innerHTML = "Increment";
button.addEventListener("click", () => {
  let shipInstance = Ship(1);
  shipInstance.hit();
  alert(shipInstance.hit());
});

root.innerHTML = " FASfsa";

root.appendChild(button);
