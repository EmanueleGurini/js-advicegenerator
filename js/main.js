"use strict";

let button = document.querySelector(".card__button");
button.addEventListener("click", printAdvice);

let adviceNum = document.querySelector(".card__title");
let adviceText = document.querySelector(".card__advice");

window.onload = printAdvice();

/**
 * update all card data - title and advice
 */
async function printAdvice() {
  let advice = await getNewAdvice(getRandomNum()).then((res) => res);
  adviceText.innerHTML = advice.slip.advice;
  adviceNum.innerHTML = advice.slip.id;
}

/**
 * Get new advice
 * @param randomId is a random id generated from function getRandomNum()
 * @returns {Promise} Promise object represents new advice
 */
async function getNewAdvice(randomId) {
  let advice = await fetch(`https://api.adviceslip.com/advice/${randomId}`);
  advice = await advice.json();
  return advice;
}

/**
 * Generates new random number between 1 and 224
 * @returns {numberl} random number
 */
function getRandomNum() {
  return Math.floor(Math.random() * (224 - 1) + 1);
}
