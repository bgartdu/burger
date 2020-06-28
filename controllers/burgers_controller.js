const express = require("express");
const Burger = require("../types/burger");
const BurgerModule = require("../models/burger");

const router = express.Router();

router.get("/", async function(request, response) {
    const burgers = BurgerModule.getAll();

    response.send(burgers);
});

router.post("/create", async function (request, response) {
    const data = request.body;
    const burger = new Burger(-1, data.name, false);

    BurgerModule.insert(burger);
});

router.post("/devour/:id", async function(request, response){


    BurgerModule.devour(request.params.id);
})



module.exports = router;