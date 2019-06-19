var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
// Require axios and cheerio. This makes the scraping possible
//var axios = require("axios");
//var cheerio = require("cheerio");
var PORT = process.env.PORT || 3010;

//Require all models
var db = require("./models");

// Initialize Express
var app = express();
var exphbs = require("express-handlebars");

// Use morgan logger for logging requests
app.use(logger("dev"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

// Connect Handlebars to our Express app
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}))
app.set("view engine", "handlebars");

//Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Hook mongoose configuration to the db variable
//mongoose.connect('mongodb://username:password@host:port/database?options...',{useNewUrlParser: true});
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);



app.listen(PORT, function () {

    console.log(`lisening on port ${PORT}`)

})

 module.exports = app;

