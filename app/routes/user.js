
module.exports = function(app) {
    
    var api = app.api.userAPI;
    
    app.post('/user/authenticate', api.authenticate);
    app.post('/user/create', api.createUser);
    app.use('/*',api.verifyToken);
}