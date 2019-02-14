"use strict";

window.addEventListener("DOMContentLoaded", init);

const container = document.querySelector("#container");

let counter = 0;
let arr = [];

function init() {
  cloneLoop();
}

function createBar() {
  const clone = document.querySelector("#barTemplate").content.cloneNode(true);
  const bar = clone.querySelector("#bar");

  bar.style.height = randomNumber();

  container.appendChild(clone);

}

function cloneLoop() {

  createBar();

  arr.unshift(counter);

  counter++;

  console.log(counter);
  console.log(arr);

  const maxLength = 40;

  if (arr.length > maxLength) {

    document.querySelector("#bar").remove();
    arr.shift(counter);
    setTimeout(cloneLoop, 1000);


  } else {

    setTimeout(cloneLoop, 1000);
  }
}

function randomNumber() {
  const num = Math.random() * 100;
  return num + "px";
}

