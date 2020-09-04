// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  // GET route for getting all of the games played
  app.get("/api/games", function (req, res) {
    db.games.findAll({}).then(function (dbgames) {
      res.json(dbgames);
    });
  });

  // POST route for saving a new game played
  app.post("/api/games", function (req, res) {
    console.log(req.body);
    db.games
      .create({
        name: req.body.name,
      })
      .then(function (dbgames) {
        res.json(dbgames);
      });
    // number of times game clicked
  });
  app.put("/api/games/:game", function (req, res) {
    // grab the game that was played from the database
    db.games
      .findOne({
        where: {
          name: req.params.game,
        },
      })
      .then((gamePlayed) => {
        // up the amount of times the game was played by 1
        gamePlayed.played++;

        // update the database to reflect new data
        db.games
          .update(gamePlayed, {
            where: {
              name: req.params.game,
            },
          })
          .then((dbgames) => {
            res.json(dbgames);
          });
      });
  });
};
