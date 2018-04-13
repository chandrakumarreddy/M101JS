const express = require('express'),
    app = express();
app.get('', function(req, res) {
    res.send('Hello world');
});
app.use(function(req, res) {
    res.sendStatus(404);
});
app.listen(3000);