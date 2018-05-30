const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TestSchema = new Schema({
	user_Id: {type: Schema.Types.ObjectId},
	wordGroup_Id: {type: Schema.Types.ObjectId},
	result: {type: Number},
	created_at: {type: Date}
});

module.exports = mongoose.model("Test", TestSchema);
