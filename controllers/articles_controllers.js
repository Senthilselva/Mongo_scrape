var express = require('express');
var path = require('path');

var Article = require("../models/Article.js");

var router  = express.Router();



router.get('/',function(req,res){
	 // Grab every doc in the Articles array
  Article.find({}, function(error, doc) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    // Or send the doc to the browser as a json object
    else {
      res.json(doc);
    }
  });
});

module.exports = router;