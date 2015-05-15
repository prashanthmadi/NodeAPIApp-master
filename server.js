
var port = process.env.PORT || 1337;
var http = require('http');
var express = require('express');
var swaggerize = require('swaggerize-express');

var app = express();

var server = http.createServer(app);

app.use(swaggerize({
    api: require('./api.json'),
    docspath: '/api-docs',
    handlers: './handlers/pets'
}));

app.get('/', function (req, res) {
  res.send('Hello World!')
});
server.listen(port, 'localhost', function () {
    app.setHost(server.address().address + ':' + port);
});