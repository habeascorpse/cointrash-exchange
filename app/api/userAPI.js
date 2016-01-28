var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

module.exports = function(app) {

    var userAPI = {};
    var model = mongoose.model('User');
    userAPI.authenticate = function(req, res) {
        console.log(req.body.login + "  " + req.body.password);
        model.findOne({login:req.body.login, password: req.body.password })
        .then(
            function(user) {
                if (!user) {
                    console.log('user or password invalid');
                    res.sendStatus(401);
                }
                else {
                    var token = jwt.sign(user,app.get('secret'),{
                        expiresIn: "24h"
                    });
                    
                    console.log('token created and send to client');
                    res.set('x-access-token',token);
                    res.end();
                }
            },
            function (error) {
                console.log('user or password invalid, trá');
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
    
    
    userAPI.createUser = function(req,res) {
        
        
        var user = {
            login : req.body.login,
            password: req.body.password,
            status: - 1
        };
        
        var people = {
            name: req.body.name,
            mail: req.body.mail,
            login: req.body.login
            
        };
        
        
        var modelPeople = mongoose.model('People');
        model.create(user)
            .then(
                function(u) {
                    
                },
                function(error) {
                    
                }
            );
            
        modelPeople.create(people)
            .then(
                function(p) {
                    
                },
                function(error) {
                    res.sendStatus(500);
                }
            );
        
        res.sendStatus(201);
        
    }
    
    
    
    return userAPI;
}