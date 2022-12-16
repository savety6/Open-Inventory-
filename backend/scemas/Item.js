const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    created_at: Date,
    perentColections: [mongoose.Schema.Types.ObjectId,]
});

module.exports = mongoose.model('Item', ItemSchema);