//set up express
var express = require('express');
var path = require("path");
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');


//npm install body-parser --save
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(express.static(path.join(__dirname, './node_modules')));

mongoose.connect('mongodb://localhost/usersDB', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to Mongoose");
    }
});
mongoose.Promise = global.Promise;

var userSchema = mongoose.Schema({
    first_name: { type: String, required: true, minlength: 3 },
    last_name: { type: String, required: true, minlength: 3 },
    email: {
        type: String, unique: true, required: true, trim: true,
        validate: {
            validator: function (value) {

                return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value);

            },
            message: "Email verification failed, it must be in the proper format."

        }
    },

    password: {
        type: String, required: true,
        validate: {
            validator: function (value) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test(value);
            },
            message: "Password verification failed, you must have at least 1 number, uppercase, and special character."
        }
    },

    birthday: { type: Date, required: true },

}, { timestamps: true });



mongoose.model('User', userSchema);



var users = {
    index: function (req, res) {
        var promise = Users.find({}).sort({ createdAt: -1 }).exec();
        promise.then(function (users) {
            console.log("find all users: success!");
            res.json({ users: users, errors: [] });
        })
            .catch(function (err) {
                console.log('find all users: error!', err);
                res.json({ users: [], errors: err });
            });
    },
    register: function (req, res) {
        var newUser = new Users({
            first_name: req.body.first_name,
            last_name: req.body.last_name, email: req.body.email, password: req.body.password,
            birthday: req.body.birthday
        });
        var promise = newUser.save();
        promise.then(function () {
            console.log("new User: success!");
            res.json({ message: "success!" });
        })
            .catch(function (err) {
                console.log("new User: error!", err);
                res.json({ errors: err });
            });
    },
    login: function (req, res) {
        var promise = Users.findOne({
            email: req.body.email,
        });
        promise.then(function (user) {
            if (user && userSchema.methods.validPassword(req.body.password)) {
                console.log("LOGIN SUCCESS", user.email);
                res.json({ user: { id: user._id, username: user.username } });//firstname,lastname,email,birthday
            }
            else if (user && !userSchema.methods.validPassword(req.body.password)) {
                console.log("INCORRECT PASSWORD", user.email);
                res.json({ error: { message: "Incorrect password" } });
            }
            else {
                console.log("EMAIL NOT FOUND", user.email);
                res.json({ error: { message: "Email not found, please to register" } });
            }
        }).catch(function (err) {
            console.log("LOGIN ERROR", err);//if the server fails then log the error in the console but do not propagate it to the browser
            res.json({});//empty object
        });
    }}

//hash the user's password
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
}
// checking if password is correct with what is entered in login.
userSchema.methods.validPassword = function(password) { //compares what user has entered vs what the db has
  return bcrypt.compareSync(password, this.password);
}

userSchema.pre('hashSync', function(done) {
  this.password = this.generateHash(this.password);
  done();
})


app.get('/api', users.index);
app.post('/api/register', users.register);
app.post('/api/login', users.login);

app.listen(8000, function () { });
console.log("We are live on 8000!");

