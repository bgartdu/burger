const mysql = require("mysql2/promise");
const express = require("express");
const handlebars = require("express-handlebars");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({extends: true}));
app.use(express.json());

app.listen(port, () => console.log("BURGER listening on port: " + PORT));