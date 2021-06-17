let mongoose = require('mongoose');

// create a model class
let businessModel = mongoose.Schema({
    name: String,
    aunumnuthor: String,
    published: String,
},
{
    collection: "business"
});

module.exports = mongoose.model('Business', businessModel);