
module.exports = function(app) {

    var transactionAPI = {};
    var transactionDAO = new app.dao.transactionDAO;
    var walletDAO = new app.dao.walletDAO;
    
    transactionAPI.swap = function(req, res) {
        
        walletDAO.findByNumber(req.body.origin,
        function(wallet_origin) {
            
            walletDAO.findByNumber(req.body.target,
            function(wallet_target) {

                transactionDAO.swap(wallet_origin, wallet_target, req.body.amount, function(t, err) {
                    if (!err) {
                        console.log(t);
                        res.json(t);
                    } else {
                        console.log(err);
                        res.sendStatus(503);
                    }
                    
                });
                
                
            },
            function (error) {
                console.log(error);
                res.sendStatus(404);
            });
            
        },
        function(error) {
            console.log(error);
            res.sendStatus(404);
        });
        
        
        
        
    }
    
    
    return transactionAPI;
}