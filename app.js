// This file runs in the browser every time index.html is opened.

console.log("Hello");

// Find the page's main heading and hold onto it under the name `heading`.
const heading = document.querySelector("h1");

heading.textContent = "Reel-A-Recipe";

// Hold onto the form and the text box inside it.
const recipeForm = document.querySelector("#recipe-form");
const pantryForm = document.querySelector("#pantry-form");

const recipeInput = document.querySelector("#recipe-input");
const pantryInput = document.querySelector("#pantry-input");

const recipeList = document.querySelector("#recipe-list");
const pantryList = document.querySelector("#pantry-list");

const recipes = ["Egg Fried Rice", "Mince on Bread", "Chicken Stir Fry"];

const pantry = ["Onions", "Rice", "Eggs", "Bread", "Mince", "Chicken"];

function addItem(name, list) {
    const item = document.createElement("li");
    item.textContent = name;
    list.appendChild(item);
}

for (const recipe of recipes) {
    addItem(recipe, recipeList);
}

for (const item of pantry) {
    addItem(item, pantryList);
}

// When the form is submitted, run this function.
recipeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  recipes.push(recipeInput.value);
  addItem(recipeInput.value, recipeList);

  recipeInput.value = "";

});

pantryForm.addEventListener("submit", function(event) {
    event.preventDefault();
    pantry.push(pantryInput.value);
    addItem(pantryInput.value, pantryList);
    pantryInput.value = "";
});