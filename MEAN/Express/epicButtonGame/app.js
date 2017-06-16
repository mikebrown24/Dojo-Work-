var express = require("express");

var path = require("path");

var session = require("express-session");

var app = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({secret: 'codingdojorocks'}));

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
});

var counter = 0;

app.get('/process', function(req,res) {

    var count = {
        counter: req.session.counter,
    }
    counter = count + 1;
    res.render("index", {count: count});

});
app.get('/reset', function(req,res) {
    var counter = 0;
    res.render("index");
});
app.listen(8000, function() {
    console.log("listening on port 8000");
});
