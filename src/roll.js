function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rollButton = document.getElementById("roll-btn");
const dice1 = document.getElementById("dice1-result");
const dice2 = document.getElementById("dice2-result");

rollButton.addEventListener("click", () => {
  dice1.textContent = getRandomInt(1, 6);
  dice2.textContent = getRandomInt(1, 6);
});
