const buttonEl = document.getElementById("roll-dice");

const diceEl = document.getElementById("dice");
const rollH = document.getElementById("roll-history");

let historyList = [];

function rollDice() {
  const rollResult = Math.trunc(Math.random() * 6) + 1;
  console.log(rollResult);
  const diceFace = getDiceFace(rollResult);
  diceEl.innerHTML = diceFace;
  historyList.push(rollResult);
  updateRollHistory();
}

function updateRollHistory() {
  rollH.innerHTML = "";
  for (let i = 0; i < historyList.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
      historyList[i]
    )}</span>`;
    rollH.appendChild(listItem);
  }
}

function getDiceFace(result) {
  switch (result) {
    case 1:
      return "&#9856";
    case 2:
      return "&#9857";
    case 3:
      return "&#9858";
    case 4:
      return "&#9859";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";

    default:
      return "";
  }
}

buttonEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
