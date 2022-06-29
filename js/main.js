"use strict";

import { getNewAdvice } from "../api/api.js";

const url = "https://api.adviceslip.com/advice";
let button = document.querySelector(".card__button");
button.addEventListener("click", printAdvice);

let adviceNum = document.querySelector(".card__title");
let adviceText = document.querySelector(".card__advice");

window.onload = printAdvice();

/**
 * update all card data - title and advice
 */
async function printAdvice() {
  let advice = await getNewAdvice(url);
  adviceText.innerHTML = advice.slip.advice;
  adviceNum.innerHTML = `advice #${advice.slip.id}`;
}
