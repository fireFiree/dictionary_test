const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WordGroupSchema = new Schema({
	name: {type: String},
	created_at: {type: Date, default: new Date()},
	created_by: {type: Schema.Types.ObjectId},
	words: [{type: Schema.Types.ObjectId, ref: "Word"}]
});

WordGroupSchema
	.virtual("count")
	.set(() => this.words.length)
	.get(() => this.words.length);

module.exports = mongoose.model("WordGroup", WordGroupSchema);
