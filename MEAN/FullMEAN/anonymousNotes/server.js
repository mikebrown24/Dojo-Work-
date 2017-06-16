var express = require('express');
var path = require("path");
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client")));
app.use(express.static(path.join(__dirname, "./bower_components")));

mongoose.connect('mongodb://localhost/notesdb', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to Mongoose");
    }
});

var Schema = mongoose.Schema;

//db.createCollection("notes")
var notesSchema = new Schema({
  text: { type: String, required: true, minlength: 3 }, //Validator is minlength: 3
}, { timestamps: true });

//show collections
mongoose.model('Notes', notesSchema);
var Notes = mongoose.model('Notes');

mongoose.Promise = global.Promise;

var notes = {
    index: function(req, res){
        var promise = Notes.find({}).sort({createdAt: -1}).exec();
        promise.then(function(notes) {
                console.log("find all notes: success!");
                res.json({notes: notes, errors: [] });
        })
        .catch(function(err){
          console.log('find all notes: error!', err);
          res.json({notes: [], errors: err });
        });
    },
    new_note: function(req, res){
        var newNote = new Notes({ text: req.body.text});
        var promise = newNote.save();
        promise.then(function(usnoteser) {
            console.log("new note: success!");
            res.json({message:"success!"});
        })
        .catch(function(err){
            console.log("new note: error!",err);
            res.json({errors: err});
        });
    },
}

app.get('/api', notes.index);
app.post("/api/note",notes.new_note);

app.listen(3000, function () {
  console.log("listening on port 3000");
});