//control data--> 
var express = require("express");
var burger = require("../models/games");

var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hdbrsObj = {
      games: data
    };
    console.log(hdbrsObj);
    res.render("index", hdbrsObj);
  });

  router.post("/api/games", function(req, res) {
    burger.insertOne(
      ["game_name", "gameplayed"],
      [req.body.game_name, req.body.gameplayed],
      function(result) {
        // Send back the ID of new game
        res.json({ id: result.insertId });
      }
    );
  });
  router.put("/api/games/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    burger.updateOne({ gameplayed: req.body.gameplayed }, condition, function(
      result
    ) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  router.delete("/api/games/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    game.deleteOne(condition, function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
});
module.exports = router;