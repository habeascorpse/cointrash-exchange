var mongoose = require('mongoose');

var schema = mongoose.Schema({
    login : {
        type: String,
        required : true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    maps_location: {
        type: String
    }
    
});

mongoose.model('People', schema);