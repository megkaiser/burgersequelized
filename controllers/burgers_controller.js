//import express and burger.js
//create the router for the app, and export the router at the end


//CONVERT TO SEQUELIZE

var express = require("express");

var router = express.Router();

var db = require("../models/");

router.get("/", function(req, res) {
    db.Burger.findAll()
    .then(function(dbBurger) {
            var hbsObject = 
            {
            burgers: dbBurger
            };     
            console.log(dbBurger);
            return res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name
    })
    .then(function(dbBurger) {
        console.log(dbBurger);
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    db.Burger.update({
        devoured: true
    },
        {
            where: {
                id: req.body.burger_id
            }
        }
    ).then(function(dbBurger) {
        res.redirect("/");
    });
});

// router.delete("/:id", function(req, res) {
//     var condition = "id = " + req.params.id;

//     burger.delete(condition, function() {
//         res.redirect("/");
//     });
// });

module.exports = router;