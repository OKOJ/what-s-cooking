const db = require("../models");
module.exports = app => {
  //Load main page
  app.get("/", (req, res) => {
    db.Article
      .find({saved: false})
      .sort({date: -1})
      .then(function (dbArticles) {
        res.render("index", {articles: dbArticles});
      });
  });
  //Load page with saved articles
  app.get("/saved", (req, res) => {  
    db.Article
    .find({saved: true})
    .sort({date: -1})
    .then(function (dbArticles) {
      res.render("saved", {articles: dbArticles});
    });
  });

  app.get("/scrape", (req, res) => res.render("index") )

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => res.render("404"));

}