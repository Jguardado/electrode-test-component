var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

console.log('server is running');
app.use(express.static('index.html'));
app.listen(port);
