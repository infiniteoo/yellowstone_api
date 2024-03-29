let expression = true;
const Character = require("../models/character");
const Episode = require("../models/episode");
const Quote = require("../models/quote");
const Death = require("../models/death");

module.exports = function (app) {
  // get all deaths
  app.get("/api/deaths", (req, res) => {
    Death.find({}, (err, deaths) => {
      if (err) {
        res.send(err);
      } else {
        res.json(deaths);
      }
    });
  });

  // create death-count route to get total number of deaths
  app.get("/api/death-count", (req, res) => {
    Death.count({}, (err, count) => {
      if (err) {
        res.send(err);
      } else {
        res.json(count);
      }
    });
  });

  // get a random death
  app.get("/api/random-death", (req, res) => {
    Death.find({}, (err, deaths) => {
      if (err) {
        res.send(err);
      } else {
        const randomDeath = deaths[Math.floor(Math.random() * deaths.length)];
        res.json(randomDeath);
      }
    });
  });

  // get death count by name
  app.get("/api/death-count/:name", (req, res) => {
    Death.count({ death: req.params.name }, (err, count) => {
      if (err) {
        res.send(err);
      } else {
        res.json(count);
      }
    });
  });

  


  // get all quotes
  app.get("/api/quotes", (req, res) => {
    Quote.find({}, (err, quotes) => {
      if (err) {
        res.send(err);
      }
      res.json(quotes);
    });
  });

  // get quote by id
  app.get("/api/quotes/:id", (req, res) => {
    Quote.findById(req.params.id, (err, quote) => {
      if (err) {
        res.send(err);
      }
      res.json(quote);
    });
  });

  // get quotes by series
  app.get("/api/quotes/series/:series", (req, res) => {
    Quote.find({ series: req.params.series }, (err, quotes) => {
      if (err) {
        res.send(err);
      }
      res.json(quotes);
    });
  });

  // get a random quote from the database
  app.get("/api/quotes/random", (req, res) => {
    Quote.find({}, (err, quotes) => {
      if (err) {
        res.send(err);
      } else {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        res.json(randomQuote);
      }
    });
  });

  // get quote by author
  app.get("/api/quotes/author/:author", (req, res) => {
    Quote.find({ author: req.params.author }, (err, quotes) => {
      if (err) {
        res.send(err);
      }
      res.json(quotes);
    });
  });

  // get random quote by author
  app.get("/api/quotes/author/:author/random", (req, res) => {
    Quote.find({ author: req.params.author }, (err, quotes) => {
      if (err) {
        res.send(err);
      } else {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        res.json(randomQuote);
      }
    });
  });

  // get all episodes
  app.get("/api/episodes", (req, res) => {
    console.log("api/episodes route hit");
    Episode.find({}, (err, episodes) => {
      if (err) {
        res.send(err);
      } else {
        res.json(episodes);
      }
    });
  });

  // get all episodes by series
  app.get("/api/episodes/:series", (req, res) => {
    console.log("api/episodes/:series route hit");
    Episode.find({ series: req.params.series }, (err, episodes) => {
      if (err) {
        res.send(err);
      } else {
        res.json(episodes);
      }
    });
  });

  // get episode by id (:id)
  app.get("/api/episodes/:id", (req, res) => {
    console.log("api/episodes/:id route hit");
    Episode.findById(req.params.id, (err, episode) => {
      if (err) {
        res.send(err);
      } else {
        res.json(episode);
      }
    });
  });

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
