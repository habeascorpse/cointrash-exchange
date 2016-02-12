var mongoose = require('mongoose'); 

function TransactionDAO(app) {
    
    this.tmodel = mongoose.model('Transaction');
    this.wmodel = mongoose.model('Wallet');
    
}


TransactionDAO.prototype.swap = function(origin, target, amount,callback) {
    var t = {};
    
    console.log(origin);
    
    t.wallet_in = target.number;
    t.wallet_out = origin.number;
    t.amount = amount;
    t.type = 'swap';
    t.date = new Date();
    
    
    if (origin.balance >= amount) {
        
    }
    else {
        callback(null,"no enough founds");
    }
}




module.exports = function(app) {
    
    return TransactionDAO;
}