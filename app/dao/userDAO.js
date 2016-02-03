var mongoose = require('mongoose'); 
var jwt = require('jsonwebtoken');
var peopleDAO = {};
function UserDAO() {
    
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
                    
                    token = jwt.sign(login,'secret',{
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
    
    jwt.verify(token,"secret", function (error,decoded) {
        callback(error,decoded);
        
    })
    
}

UserDAO.prototype.createUser = function(register,callback) {
    
    var user = {
        login : register.login,
        password: register.password,
        status: - 1
    };
    
    this.model.create(user)
    .then(
        function(u) {
            
            
            peopleDAO.create(register, function(status) {
               return callback(status);
            });
            
        },
        function(error) {
            callback(false);
        }
    );
        
    
        
}

module.exports = function(app) {
    peopleDAO = new app.dao.peopleDAO;
    return UserDAO;
}