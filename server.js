const express = require("express");

const app = express();

app.use(express.static(__dirname));

const recipes = ["Egg Fried Rice", "Mince on Bread", "Chicken Stir Fry"];
const pantry = ["Onions", "Rice", "Eggs", "Bread", "Mince", "Chicken"];

app.get("/recipes", function (request, response) {
    response.json(recipes);
});

app.get("/pantry", function(request, response) {
    response.json(pantry);

});

app.listen(3000, function () {
    console.log("Server is running! http://localhost:3000")
});
