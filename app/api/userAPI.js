
module.exports = function(app) {

    var userAPI = {};
    var userDAO = new app.dao.userDAO;
    
    
    userAPI.authenticate = function(req, res) {
        
        userDAO.authenticate(req.body.login, req.body.password, function(token) {
            
            if (token != 'error') {       
                
                res.set('x-access-token',token);
                res.end();
            }
            else {
                
                res.sendStatus(401);
            }
        });
        
    }
    
    userAPI.verifyToken = function(req,res) {
        var token = req.headers['x-access-token'];
        userDAO.verifyToken(token, function (error,decoded) {
            if (error) {
                console.log('invalid token');
                res.sendStatus(401);
            }
            res.user = decoded;
            next();
        })
    }
    
    
    userAPI.createUser = function(req,res) {
        
        userDAO.createUser(req.body,function(status) {
           if (status) {
               res.sendStatus(201);
           }
           else {
               res.sendStatus(500);
           }
        });
           
    }
    
    
    
    return userAPI;
}