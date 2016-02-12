
module.exports = function(app) {
    
    var api = app.api.transactionAPI;
    
    
    app.post('/transaction/swap', api.swap);
}