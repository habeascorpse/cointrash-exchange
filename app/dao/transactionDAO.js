var mongoose = require('mongoose'); 

function TransactionDAO(app) {
    
    this.tmodel = mongoose.model('Transaction');
    this.wmodel = mongoose.model('Wallet');
    
}


TransactionDAO.prototype.swap = function(origin, target, amount,callback) {
    var t = {};

    
    t.wallet_in = target.number;
    t.wallet_out = origin.number;
    t.amount = amount;
    t.type = 'swap';
    t.date = new Date();
    t.login = origin.login;
    
    
    if (origin.balance >= amount) {

        this.tmodel.create(t).then(
        function(tr) {
            callback(tr,null);
        },
        function(err) {
            console.log(err);
            callback(null,err);
        });

    }
    else {
        callback(null,"no enough founds");
    }
}




module.exports = function(app) {
    
    return TransactionDAO;
}