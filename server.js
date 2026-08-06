const express = require("express");

const app = express();


app.get("/", function (request, response) {
    response.send("Welcome to my Express server!");
});

app.listen(3000, function () {
    console.log("Server is running! http://localhost:3000")
});
