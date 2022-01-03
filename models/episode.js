const mongoose = require("mongoose");

// Character Schema
const episodeSchema = mongoose.Schema({
  title: {
    type: String,
  },
  season: {
    type: Number,
  },
  episode: {
    type: Number,
  },
  air_date: {
    type: String,
  },
  characters: {
    type: Array,
  },
  series: {
    type: String,
  },
  synopsis: {
    type: String,
  },
});

const Episode = (module.exports = mongoose.model("Episode", episodeSchema));

// get Episodes
module.exports.getEpisodes = (cb, limit) => {
  Episode.find(cb).limit(limit);
};

// get single Episode
module.exports.getEpisodeById = (id, cb) => {
  Episode.findById(id, cb);
};

// add a Episode
module.exports.addEpisode = (episode, cb) => {
  Episode.create(episode, cb);
};

// update a Character
module.exports.updateEpisode = (id, episode, options, cb) => {
  const query = { _id: id };
  const update = {
    title: episode.title,
    genre: episode.genre,
    description: episode.description,
    author: episode.author,
    publisher: episode.publisher,
    pages: episode.pages,
    image_url: episode.image_url,
    buy_url: episode.buy_url,
  };

  Episode.findOneAndUpdate(query, update, options, cb);
};

// delete Character
module.exports.removeEpisode = (id, cb) => {
  const query = { _id: id };
  Episode.remove(query, cb);
};
