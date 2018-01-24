const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WordGroupSchema = new Schema({
    // -------------------------------
})

const WordGroup = mongoose.model('WordGroup', WordGroupSchema);

module.exports = WordGroup;