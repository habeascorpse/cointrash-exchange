var database_path = 'localhost/coin';

var mongoose = require('mongoose');

mongoose.connect('mongodb://' + database_path);

mongoose.connection.on('connected',function() {
    console.log('MongoDB connected');
})

mongoose.connection.on('error',function(error) {
    console.log('Connection error: ' + error);
})

mongoose.connection.on('disconnected',function() {
    console.log('MongoDB disconnected');
})

process.on('SIGINT', function() {
    mongoose.connection.close( function() {
        console.log('Application closed, MongoDB disconnected!');
        process.exit(0);
    })
});