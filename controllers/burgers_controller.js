const express = require("express");
const Burger = require("../types/burger");
const BurgerModule = require("../models/burger");

const router = express.Router();

router.get("/", async function(request, response) {
    const burgers = BurgerModule.getAll();

    response.send(burgers);
});