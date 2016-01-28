var app = require('./config/express')(); 
require('./config/database');


app.listen(5000, function() {
  console.log('Server is running');
});