const mongoose = require("mongoose");

// Character Schema
const quoteSchema = mongoose.Schema({
  quote: {
    type: String,
  },
  author: {
    type: String,
  },
  series: {
    type: String,
  },
});

const Quote = (module.exports = mongoose.model("Quote", quoteSchema));

// get Quotes
module.exports.getQuotes = (cb, limit) => {
  Quote.find(cb).limit(limit);
};

// get single Quote
module.exports.getQuoteById = (id, cb) => {
  Quote.findById(id, cb);
};

// add a Quote
module.exports.addQuote = (quote, cb) => {
  Quote.create(quote, cb);
};

// update a Quote
module.exports.updateQuote = (id, quote, options, cb) => {
  const query = { _id: id };
  const update = {
    title: quote.title,
    genre: quote.genre,
    description: quote.description,
    author: quote.author,
    publisher: quote.publisher,
    pages: quote.pages,
    image_url: quote.image_url,
    buy_url: quote.buy_url,
  };

  Quote.findOneAndUpdate(query, update, options, cb);
};

// delete Character
module.exports.removeQuote = (id, cb) => {
  const query = { _id: id };
  Quote.remove(query, cb);
};
