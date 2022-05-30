/* 

  Advices

  1. Remember that spiders are more afraid of you, than you are of them.
  2. Smile and the world smiles with you. Frown and you're on your own.
  3. Don't eat non-snow-coloured snow.
  4. Cars are bad investments.
  5. If you have the chance, take it!

*/

const advice = [
  "Remember that spiders are more afraid of you, than you are of them.",
  "Smile and the world smiles with you. Frown and you're on your own.",
  "Don't eat non-snow-coloured snow.",
  "Cars are bad investments.",
  "If you have the chance, take it!",
];

let button = document.querySelector(".card__button");
button.addEventListener("click", updateAdviceData);

let adviceNum = document.querySelector(".card__title");
let adviceText = document.querySelector(".card__advice");

updateAdviceData();

/**
 * update all card data - title and advice
 */
function updateAdviceData() {
  let randomNum = getRandomNum();
  updateAdvice(randomNum);
  updateAdviceNum(randomNum);
}

/**
 * Change text inside card__title element.
 */
function updateAdviceNum(num) {
  adviceNum.innerHTML = `advice #${num}`;
}

/**
 * Change text inside card__advice element.
 */
function updateAdvice(num) {
  adviceText.innerHTML = advice[num];
}

/**
 * Generate a random number from 0 to advice array lenght.
 */
function getRandomNum() {
  let randomNum = Math.floor(Math.random() * advice.length);
  return randomNum;
}
