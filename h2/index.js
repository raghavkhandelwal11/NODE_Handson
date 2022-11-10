const express = require('express');


const app = express();

// Create a server using express and create route /api/main and send the response explaining what is express

app.get("/main", (req, res) => {
    console.log("welcome to the main page");
    res.send("Welcome to the main page")
})

app.get("/api", (req, res) => {
    console.log("feel free to use api");
    res.send("feel free to use api");
})


app.listen(4000, () => {
    console.log("New Server Started");
})