var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

console.log('server is running', express.static);
app.use(express.static('public'));
app.listen(port);
