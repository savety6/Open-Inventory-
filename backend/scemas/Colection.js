const mongoose = require('mongoose');

const ColectionSchema = new mongoose.Schema({
    name: String,
    img: String,
    created_at: Date,
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }],
    perentColections: [mongoose.Schema.Types.ObjectId,]
});

module.exports = mongoose.model('Colection', ColectionSchema)