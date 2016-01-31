var mongoose = require('mongoose');

var schema = mongoose.Schema({
    login : {
        type: String,
        required : true
    },
    name: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    }
    
});

mongoose.model('People', schema);