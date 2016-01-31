var mongoose = require('mongoose'); 
var jwt = require('jsonwebtoken');

function PeopleDAO(app) {
    
    this.model = mongoose.model('People');
    
}


PeopleDAO.prototype.create = function(register,callback) {
    
    
    var people = {
        name: register.name,
        mail: register.mail,
        login: register.login
        
    };
    
    this.model.create(people)
    .then(
            function(p) {
                callback(true);
            },
            function(error) {
                
                callback(false);
            }
        );
        
}




module.exports = function(app) {
    
    return PeopleDAO;
}