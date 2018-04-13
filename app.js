const MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
// Use connect method to connect to the server
MongoClient.connect('mongodb://localhost:27017/video', function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    db.collection('movies').find({}).toArray(function(err, docs) {
        if (err) {
            console.log(err);
        } else {
            docs.forEach(function(doc) {
                console.log(doc.title);
            });
        }
        db.close();
    });
    console.log("entire data from database is displayed using official mongodb driver");
});