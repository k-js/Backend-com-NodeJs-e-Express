const express = require("express");
const app = express();

// Endpoint Read All
app.get("/", function (req, res) {
    res.send("Hello World");
});

app.get("/oi", function (req, res) {
    res.send("Olá, mundo!");
});

// Lista de heróis

const lista = ["Mulher Maravilha", "Capitã Marvel", "Homem de Ferro"];

// Endpoint Read All

app.get("/herois", function (req, res) {
    res.send(lista);
});

app.listen(3000);
