var mongoose = require('mongoose'); 
function WalletDAO() {
    
    this.model = mongoose.model('Wallet');
    
}


WalletDAO.prototype.findByNumber = function(wallet_number, callback_success, callback_error) {
    

    this.model.findOne({number: wallet_number })
        .then(
            function(wallet) {
                if (!wallet) {
                    console.log('wallet not found!');
                    callback_error('wallet not found!');
                }
                else {
                    callback_success(wallet);
                }
            },
            function (error) {
                callback_error(error);
                
            }
    );
        
        
}


module.exports = function(app) {
    return WalletDAO;
}