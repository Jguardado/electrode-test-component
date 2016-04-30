var app = require('express');

app.use(express.static('index.html'));
app.listen(process.env.PORT);
