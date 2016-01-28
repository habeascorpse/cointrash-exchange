var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

module.exports = function(app) {

    var userAPI = {};
    var model = mongoose.model('User');
    userAPI.authenticate = function(req, res) {
        
        model.findOne({login:req.body.login, password: req.body.password })
        .then(
            function(user) {
                if (!user) {
                    console.log('user or password invalid');
                    res.sendStatus(401);
                }
                else {
                    var token = jwt.sign(user,'asfoasfoiuoiu',{
                        expiresIn: "24m"
                    });
                    
                    console.log('token created and send to client');
                    res.set('x-access-token',token);
                    res.end();
                }
            },
            function (error) {
                console.log('user or password invalid');
                res.sendStatus(401);
            }
            
        );
        
    };
    
    userAPI.verifyToken = function(req,res) {
        var token = req.headers['x-access-token'];
        jwt.verify(token, function (error,decoded) {
            if (error) {
                console.log('invalid token');
                res.sendStatus(401);
            }
            res.user = decoded;
            next();
        })
    }
    return userAPI;
}