// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
var session = require('express-session');
// create the express app
var app = express();

var bodyParser = require('body-parser');
// use it!
app.use(session({secret: 'codingdojorocks'}));
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
    res.render("index");
});

// post route for adding a user
app.post('/process', function(req, res) {
   req.session.name = req.body.name;
   req.session.location = req.body.location;
   req.session.language = req.body.language;
   req.session.comment = req.body.comment;
 // This is where we would add the user to the database
 // Then redirect to the root route
    res.redirect('/result');
});
app.get('/result', function(req,res){
    var user_info = {
        name: req.session.name,
        location: req.session.location,
        language: req.session.language,
        comment: req.session.comment

    };
    res.render("result", {user_info: user_info});
});
// tell the express app to listen on port 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});