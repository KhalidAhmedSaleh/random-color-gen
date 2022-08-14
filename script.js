"use strict";

const color = document.querySelector(".color");
const colorBtn = document.querySelector(".color-btn");

function randomColorGen(random) {
  if (random === 1) {
    document.body.style.background = `linear-gradient(to right, #6ab6d0, #406d7d)`;
    color.textContent = "linear-gradient(to right, #6ab6d0, #406d7d)";
  } else if (random === 2) {
    document.body.style.background = `linear-gradient(to right, #820219, #c30425)`;
    color.textContent = "linear-gradient(to right, #820219, #c30425)";
  } else if (random === 3) {
    document.body.style.background = `linear-gradient(to right, #d6e2e9, #769fb6)`;
    color.textContent = `linear-gradient(to right, #d6e2e9, #769fb6)`;
  } else if (random === 4) {
    document.body.style.background = `linear-gradient(to right, #2a4953, #15242a)`;
    color.textContent = "linear-gradient(to right, #2a4953, #15242a)";
  } else if (random === 5) {
    document.body.style.background = `linear-gradient(to right, #272838, #525360)`;
    color.textContent = "linear-gradient(to right, #272838, #525360)";
  } else if (random === 6) {
    document.body.style.background = `linear-gradient(to right, #347fc4, #1f4c76)`;
    color.textContent = "linear-gradient(to right, #347fc4, #1f4c76)";
  }
}

colorBtn.addEventListener("click", function () {
  let random = Math.trunc(Math.random() * 6) + 1;
  randomColorGen(random);
});
