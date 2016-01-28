var mongoose = require('mongoose');

var schema = mongoose.Schema({
    login : {
        type: String,
        required : true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    }
    
});

mongoose.model('User', schema);