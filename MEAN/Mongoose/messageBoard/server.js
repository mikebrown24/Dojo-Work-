var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 3000;

// Create express app
var app = express();

// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));

// Tell server where views are and what templating engine I'm using
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
    name: String,
    message: String,
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});
mongoose.model("Message", MessageSchema);
var Message = mongoose.model("Message");

var CommentSchema = new mongoose.Schema({
    name: String,
    text: String,
    _message: [{type:Schema.Types.ObjectId, ref: 'Message'}]
});
mongoose.model("Comment", CommentSchema);
var Comment = mongoose.model("Comment");



app.get('/', function(req,res){
    res.render('index');
});

app.post('/message', function(req,res){
    var newMessage = new Message({name: req.body.name, message: req.body.message});
    newMessage.save(function(err){
        if (err){
            console.log(err);
            res.render('index.ejs', {errors: newMessage.errors});
        } else {
            console.log("success");
            res.redirect('/');
        }
    })
})

app.post('/comment/:id', function(req,res){
    Message.findOne({_id: req.params.id}, function(err, message){
        var newComment = new Comment({name: req.body.name, text: req.body.comment});

        newComment._message = message._id;
    newComment.save(function(err){
          if (err){
            console.log(err);
            res.render('index.ejs', {errors: newComment.errors});
        } else {
            console.log("Comment has been added");
            res.redirect('/');
        }
    })
    })
})



app.listen(port, function(){
  console.log("Running on ", port);
})

