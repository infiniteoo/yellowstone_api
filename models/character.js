const mongoose = require("mongoose");

// Character Schema
const characterSchema = mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  birthday: {
    type: String,
  },
  occupation: {
    type: String,
  },
  img: {
    type: String,
  },
  status: {
    type: String,
  },
  nickname: {
    type: String,
  },
  portrayed: {
    type: String,
  },

  appearance: {
    type: Array,
  },

  category: {
    type: Array,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
});

const Character = (module.exports = mongoose.model(
  "Character",
  characterSchema
));

// get Characters
module.exports.getCharacters = (cb, limit) => {
  Character.find(cb).limit(limit);
};

// get single Character
module.exports.getCharacterById = (id, cb) => {
  Character.findById(id, cb);
};

// add a Character
module.exports.addCharacter = (character, cb) => {
  Character.create(character, cb);
};

// update a Character
module.exports.updateCharacter = (id, character, options, cb) => {
  const query = { _id: id };
  const update = {
    title: character.title,
    genre: character.genre,
    description: character.description,
    author: character.author,
    publisher: character.publisher,
    pages: character.pages,
    image_url: character.image_url,
    buy_url: character.buy_url,
  };

  Character.findOneAndUpdate(query, update, options, cb);
};

// delete Character
module.exports.removeCharacter = (id, cb) => {
  const query = { _id: id };
  Character.remove(query, cb);
};
