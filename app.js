const express = require('express'),
    app = express(),
    cons = require('consolidate'),
    assert = require('assert'),
    bodyParser = require('body-parser'),
    MongoClient = require('mongodb').MongoClient;
///////
///middleware 
///////
app.engine('html', cons.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({
    extended: false
}));
///////////
///routes
//////////
app.get('/', function(req, res) {
    let fruits = ['apple', 'orange', 'mango', 'straberry'];
    res.render('home', {
        'fruits': fruits
    });
});
app.post('/fav_fruit', function(req, res) {
    let fruit = req.body.fruit;
    if (typeof fruit == 'undefined') {
        res.send("please select one fruit");
    } else {
        res.render('favFruit', {
            'fruit': fruit
        });
    }
});
/////////
///listening to connection
///////////
app.listen(3000);