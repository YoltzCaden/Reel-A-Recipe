// This file runs in the browser every time index.html is opened.

console.log("Hello");

// Find the page's main heading and hold onto it under the name `heading`.
const heading = document.querySelector("h1");

heading.textContent = "Reel-A-Recipe";

// Hold onto the form and the text box inside it.
const form = document.querySelector("#recipe-form");
const input = document.querySelector("#recipe-input");

const list = document.querySelector("#recipe-list");

function addRecipe(name) {
    const item = document.createElement("li");
    item.textContent = name;
    list.appendChild(item);
}


// When the form is submitted, run this function.
form.addEventListener("submit", function (event) {
  event.preventDefault();
  addRecipe(input.value);
  input.value = "";
});