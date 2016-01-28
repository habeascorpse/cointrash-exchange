
module.exports = function(app) {
    
    var api = app.api.userAPI;
    
    app.post('/user/authenticate', api.authenticate);
    app.use('/*',api.verifyToken);
}