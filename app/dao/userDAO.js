var mongoose = require('mongoose'); 
var jwt = require('jsonwebtoken');
function UserDAO(app) {
    
    this.model = mongoose.model('User');
    
}


UserDAO.prototype.authenticate = function(login, password, callback) {
    
    var token = 'error';
    this.model.findOne({login: login, password: password })
        .then(
            function(user) {
                if (!user) {
                    console.log('user or password invalid');
                    
                }
                else {
                    
                    token = jwt.sign(user,'secret',{
                        expiresIn: "24h"
                    });
                    
                    console.log('token created and send to client');
                    return callback(token);
                    
                }
            },
            function (error) {
                return callback(token);
                
            }
    );
        
        
}

UserDAO.prototype.verifyToken = function(token, callback) {
    
    jwt.verify(token, function (error,decoded) {
        callback(error,decoded);
        
    })
    
}

UserDAO.prototype.createUser = function(register,callback) {
    
    var user = {
        login : register.login,
        password: register.password,
        status: - 1
    };
    
    var people = {
        name: register.name,
        mail: register.mail,
        login: register.login
        
    };
    
    
    var modelPeople = mongoose.model('People');
    this.model.create(user)
    .then(
            function(u) {
                
            },
            function(error) {
                callback(false);
            }
        );
        
    modelPeople.create(people)
    .then(
            function(p) {
                callback(true)
            },
            function(error) {
                callback(false);
            }
    );
        
}




module.exports = function(app) {
    
    return UserDAO;
}