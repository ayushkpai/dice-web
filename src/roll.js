function get_random_int(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rollButton = document.getElementById("roll-btn");
const dice1 = document.getElementById("dice1-result");
const dice2 = document.getElementById("dice2-result");

rollButton.addEventListener("click", () => {
  dice1.textContent = get_random_int(1, 6);
  dice2.textContent = get_random_int(1, 6);
});
