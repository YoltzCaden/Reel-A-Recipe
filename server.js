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
app.use(express.json());

// const recipes = ["Egg Fried Rice", "Mince on Bread", "Chicken Stir Fry"];
// const pantry = ["Onions", "Rice", "Eggs", "Bread", "Mince", "Chicken"];

app.get("/recipes", async function (request, response) {
    const result = await pool.query("SELECT * FROM recipes;");
    response.json(result.rows);
});


app.post("/recipes", async function (request, response) {
    let name = request.body.name;
    const result = await pool.query("INSERT INTO recipes (name) VALUES ($1);", [name]);
    response.sendStatus(201);
});

app.delete("/recipes/:id", async function (request, response) {
    const id = request.params.id;
    const result = await pool.query("DELETE FROM recipes WHERE id = $1", [id]);
    response.sendStatus(200);
});

app.get("/pantry", async function(request, response) {
    const result = await pool.query("SELECT * FROM pantry;");
    response.json(result.rows);

});

app.post("/pantry", async function (request, response) {
    let name = request.body.name;
    const result = await pool.query("INSERT INTO pantry (name) VALUES ($1);", [name]);
    response.sendStatus(201);
});

app.listen(3000, function () {
    console.log("Server is running! http://localhost:3000")
});
