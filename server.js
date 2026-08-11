require("dotenv").config();

const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
});

app.use(express.static(__dirname));

// const recipes = ["Egg Fried Rice", "Mince on Bread", "Chicken Stir Fry"];
// const pantry = ["Onions", "Rice", "Eggs", "Bread", "Mince", "Chicken"];

app.get("/recipes", async function (request, response) {
    const result = await pool.query("SELECT * FROM recipes;");
    response.json(result.rows);
});

app.get("/pantry", async function(request, response) {
    const result = await pool.query("SELECT * FROM pantry;");
    response.json(result.rows);

});

app.listen(3000, function () {
    console.log("Server is running! http://localhost:3000")
});
