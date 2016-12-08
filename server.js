// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");


// Requiring our Note and Article models
var Note = require("./models/Note.js");
var Article = require("./models/Article.js");

// Mongoose mpromise deprecated - use bluebird promises
var Promise = require("bluebird");



// Our model controllers (rather than routes)
var application_controller = require('./controllers/application_controllers');
//var jobs_controller = require('./controllers/articles_controllers');
//var users_controller = require('./controllers/notes_controllers');


mongoose.Promise = Promise;


// Initialize Express
var app = express();

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("public"));

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/articleScrape");
var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.use('/', application_controller);


// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});