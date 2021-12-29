let expression = true;
const Character = require("../models/character");

module.exports = function (app) {
  app.get("/api/characters", (req, res) => {
    // get all results from the characters database
    Character.find({}, (err, characters) => {
      if (err) {
        res.send(err);
      } else {
        res.json(characters);
      }
    });
  });
  app.get("/api/characters/random", (req, res) => {
    console.log("get a random character route hit");
    // get all results from the characters database then pick a random one
    Character.find({}, (err, characters) => {
      if (err) {
        res.send(err);
      } else {
        const randomCharacter =
          characters[Math.floor(Math.random() * characters.length)];
        res.json(randomCharacter);
      }
    });
  });

  app.get("/api/characters/category/:category", (req, res) => {
    console.log("get a character by category route hit");
  });

  app.get("/api/characters/:limit&:offset", (req, res) => {
    console.log("get a character by limit and offset route hit");
  });

  app.get("/api/characters/name/:name", (req, res) => {
    console.log("get a character by name route hit");

    console.log(req.params.name);

    // search database for keyword in name
    Character.find({ name: { $regex: req.params.name } }, (err, characters) => {
      if (err) {
        res.send(err);
      } else {
        res.json(characters);
      }
    });
  });

  app.get("/api/characters/:id", (req, res) => {
    console.log("api character id route hit");
    Character.findById(req.params.id, (err, character) => {
      if (err) {
        res.send(err);
      } else {
        res.json(character);
      }
    });
  });
};
