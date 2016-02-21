var mongoose = require('mongoose');

var schema = mongoose.Schema({
    login : {
        type: String,
        required : true
    },
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    wallet_in: {
        type: Number
    },
    wallet_out: {
        type: Number
    },
    date: {
        type: Date,
        required: true
    }
    
});

mongoose.model('Transaction', schema);