const express = require('express'),
    app = express(),
    cons = require('consolidate'),
    assert = require('assert'),
    MongoClient = require('mongodb').MongoClient;
///////
///middleware 
///////
app.engine('html', cons.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
///////////
///routes
//////////
app.get('/:name', function(req, res) {
    res.render('home', {
        'name': req.params.name,
        'getval1': req.query.getval1
    });
});
/////////
///listening to connection
///////////
app.listen(3000);