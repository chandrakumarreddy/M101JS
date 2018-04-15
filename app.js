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
let movies = [];
app.get('/', function(req, res) {
    res.render('home', {
        "movies": movies
    });
});
app.get('/addMovie', function(req, res) {
    res.render('addmovie');
});
app.post('/addMovie', function(req, res) {
    let movie = {
        "title": req.body.title,
        "src": req.body.src,
        "description": req.body.description
    };
    movies.push(movie);
    res.redirect('/');
});
/////////
///listening to connection
///////////
app.listen(3000);