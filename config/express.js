module.exports = function () {
    var app = require('express')();
    var consign = require('consign');
    var bodyParser = require('body-parser');
    app.use(bodyParser.json());
    app.set('secret', 'parangamicotirimirruaro');
    consign({cwd: 'app'})
    .include('models')
    .then('api')
    .then('routes')
    .into(app);

    return app;
}