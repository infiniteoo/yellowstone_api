const mongoose = require("mongoose");

// Death Schema
const deathSchema = mongoose.Schema({
  // name of dead character
  death: {
    type: String,
  },
  // how the character met their demise
  cause: {
    type: String,
  },
  // the person(s) responsible for the death
  responsible: {
    type: String,
  },
  // season number of the episode in which the death occurred
  season: {
    type: Number,
  },
  // the famous last words
  last_words: {
    type: String,
  },
  // the episode of the season
  episode: {
    type: Number,
  },
  // number of deaths that occured for this instance
  number_of_deaths: {
    type: Number,
  },
});

const Death = (module.exports = mongoose.model("Death", deathSchema));

// get Deaths
module.exports.getDeaths = (cb, limit) => {
  Death.find(cb).limit(limit);
};

// get single Death
module.exports.getDeathById = (id, cb) => {
  Death.findById(id, cb);
};

// add a Death
module.exports.addDeath = (death, cb) => {
  Death.create(death, cb);
};

// update a Death
module.exports.updateDeath = (id, death, options, cb) => {
  const query = { _id: id };
  const update = {
    title: death.title,
    genre: death.genre,
    description: death.description,
    author: death.author,
    publisher: death.publisher,
    pages: death.pages,
    image_url: death.image_url,
    buy_url: death.buy_url,
  };

  Death.findOneAndUpdate(query, update, options, cb);
};

// delete Death
module.exports.removeDeath = (id, cb) => {
  const query = { _id: id };
  Death.remove(query, cb);
};
