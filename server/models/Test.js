const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TestSchema = new Schema({
    user_Id:        { type: ObjectID},
    wordGroup_Id:   { type: ObjectID},
    result:         { type: Number},
    createdAt:      { type: Date}
})

const Test = mongoose.model('Test', TestSchema);

module.exports = Test;