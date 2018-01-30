const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WordGroupSchema = new Schema({
	name: {type: String},
	createdAt: {type: Date, default: new Date()},
	createdBy: {type: Schema.Types.ObjectId},
	count: {type: Number}
});

const WordGroup = mongoose.model("WordGroup", WordGroupSchema);

module.exports = WordGroup;
