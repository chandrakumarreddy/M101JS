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
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'video';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
    app.get('/', function(req, res) {
        db.collection('movies').find().toArray(function(err, movies) {
            assert.equal(null, err);
            res.render("home", {
                'movies': movies
            });
        });
    });
});
/////////
///listening to connection
///////////
app.listen(3000);