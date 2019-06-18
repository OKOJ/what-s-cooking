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
mongoose.connect("mongodb://localhost/article", {useNewUrlParser:true});



app.listen(PORT, function () {

    console.log(`lisening on port ${PORT}`)

})

 module.exports = app;

// "_id": "heroku_fqll14g3.heroku_fqll14g3",
// "user": "heroku_fqll14g3",
// "db": "heroku_fqll14g3",
// "roles": [
//     {
//         "role": "dbOwner",
//         "db": "heroku_fqll14g3"
//     }
// ],