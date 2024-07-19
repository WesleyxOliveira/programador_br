const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    title: { type: String, require: true },
    url: String,
    description: String,
    clicks: { type: Number, default: 0 }
});

module.exports = mongoose.model('Link', linkSchema);