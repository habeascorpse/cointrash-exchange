var app = require('./config/express')(); 
require('./config/database');


app.listen(3000, function() {
  console.log('Server is running');
});