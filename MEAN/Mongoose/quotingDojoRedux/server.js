var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quoting_dojo');

var QuoteSchema = new mongoose.Schema({
 name: String,
 quote: String
});

mongoose.model('Quote', QuoteSchema);

mongoose.Promise = global.Promise;

var Quote = mongoose.model('quotes', QuoteSchema);
// Point server to views
app.set('views', path.join(__dirname, './views'));
// We're using ejs as our view engine
app.set('view engine', 'ejs');
//Here are our routes!
app.get('/', function(req, res) {
   
    res.render('index');
});

app.get('/quotes', function(req,res){
    // This is the logic to grab and pass into the rendered view
    Quote.find({}, function(err,results){
        if(err) { console.log(err); }
        res.render('quotes', { quotes: results });
    });
});

app.post('/process', function(req, res) {
   Quote.create(req.body, function(err){
       if(err) { console.log(err); }
       res.redirect('/quotes');
   });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});

