const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TestSchema = new Schema({
	user_Id: {type: Schema.Types.ObjectId},
	wordGroup_Id: {type: Schema.Types.ObjectId},
	result: {type: Number},
	createdAt: {type: Date}
});

const Test = mongoose.model("Test", TestSchema);

module.exports = Test;
