const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WordSchema = new Schema({
	// -------------------------------
});

const Word = mongoose.model("Word", WordSchema);

module.exports = Word;
