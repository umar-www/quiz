"use strict";

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const amal = document.getElementById("amal");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const btn = document.querySelectorAll(".btn");
const chance = document.getElementById("chance");
const game = document.getElementById("game");
const trueOrfalse = document.getElementById("trueOrfalse");
const container = document.querySelector(".container");
const reset = document.getElementById("reset");
let result;

//  FUNCTION RAND()
function rand() {
  let randAmal = ["*", "-", "+"].sort(() => Math.random() - 0.5).slice(2);
  let randNum1 = Math.floor(Math.random() * 20) + 1;
  let randNum2 = Math.floor(Math.random() * 20) + 1;
  num1.textContent = randNum1;
  num2.textContent = randNum2;
  amal.textContent = randAmal;
}
rand();

// function app(){
//     let a = +num1.textContent +amal.textContent +num2.textContent
//     console.log(eval(`${+num1.textContent}${amal.textContent}${+num2.textContent}`));

// }
// app()

//  FUNCTION TOTAL()
function init() {
  const expression = new String(
    +num1.textContent + amal.textContent + num2.textContent
  );
  result = eval(String(expression));
}
init();

//  FUNCTION ANSWERS()
function answers() {
  let ans = [result + 2, result + 1, result - 2].sort(
    () => Math.random() - 0.5
  );
  ans.push(result);

  let newRand = ans.sort(() => Math.random() - 0.5);
  a.textContent = newRand[0];
  b.textContent = newRand[1];
  c.textContent = newRand[2];
  d.textContent = newRand[3];
}
answers();

//  FUNCTION HOLDS
function currect() {
  btn.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.textContent == result) {
        item.style.backgroundColor = "rgb(3, 165, 3)";
        item.style.color = "#fff";
        item.textContent = "✔️";
        container.classList.add("correct");
        game.style.pointerEvents = "none";
        trueOrfalse.textContent = "CORRECT✔️";
      } else {
        item.style.backgroundColor = "rgb(255, 68, 68)";
        item.style.color = "#fff";
        item.textContent = "✖️";
        container.classList.add("wrong");
        trueOrfalse.textContent = "WRONG✖️";
        game.style.pointerEvents = "none";
        btn.forEach((elm) => {
          if (elm.textContent == result) {
            elm.style.backgroundColor = "rgb(3, 165, 3)";
            elm.style.color = "#fff";
            elm.textContent = "✔️";
          }
        });
      }
    });
  });

  reset.addEventListener("click", () => {
    rand();
    init();
    answers();
    trueOrfalse.textContent = "Result-?";
    container.style.pointerEvents = "all";
    container.classList.remove("correct");
    container.classList.remove("wrong");
    game.style.pointerEvents = "all";
    btn.forEach((item) => {
      item.style.backgroundColor = "#fff";
      item.style.color = "#000";
    });
  });
}
currect();
