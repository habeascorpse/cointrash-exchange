
module.exports = function(app) {
    
    var api = app.api.peopleAPI;
    
    
    app.get('/people/get/:login', api.getPeople);
    
}