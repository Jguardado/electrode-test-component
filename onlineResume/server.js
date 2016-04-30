var express = require('express');
var app = express();

app.use(express.static('index.html'));
app.listen(process.env.PORT);
