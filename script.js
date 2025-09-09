/* ========= FUNCTION DEMOS ========= */

// Function with parameters & return value
function getRandomNumber(min, max) {
  let randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomValue; // returns a number between min & max
}

/* ========= DOM INTERACTIONS ========= */
const card = document.getElementById("magicCard");
const flipBtn = document.getElementById("flipBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const resultArea = document.getElementById("resultArea");

// Flip card on button click
flipBtn.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

// Shuffle animation & number generation
shuffleBtn.addEventListener("click", () => {
  // Trigger CSS keyframe animation
  card.classList.add("animate");

  // After animation ends, remove the class (so it can repeat)
  setTimeout(() => {
    card.classList.remove("animate");
  }, 1000);

  // Generate 2 random numbers and display their sum
  let num1 = getRandomNumber(1, 50);
  let num2 = getRandomNumber(1, 50);
  let sum = num1 + num2;

  resultArea.textContent = `You drew ${num1} + ${num2} =  ${sum}`;
});
