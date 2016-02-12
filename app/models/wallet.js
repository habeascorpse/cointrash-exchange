var mongoose = require('mongoose');

var schema = mongoose.Schema({
    login : {
        type: String,
        required : true
    },
    balance: {
        type: Number,
        required: true,
        default: 0
    },
    number: {
        type: Number,
        required: true
    }
    
});

mongoose.model('Wallet', schema);