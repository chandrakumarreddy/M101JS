const express = require('express'),
    app = express(),
    cons = require('consolidate');
///////
///middleware 
///////
app.engine('html', cons.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
///////////
///routes
//////////
app.get('', function(req, res) {
    res.render('home', {
        'name': 'Chandra'
    });
});
app.use(function(req, res) {
    res.sendStatus(404);
});
/////////
///listening to connection
///////////
app.listen(3000);