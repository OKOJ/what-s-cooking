// var axios = require("axios");
// var cheerio = require("cheerio");
// var db = require("../models")

// var scrape = function () {

//   axios.get("https://www.foodandwine.com/recipes").then(function (response) {

//         var $ = cheerio.load(response.data);

//         $("article").each(function (i, element) {

//             var result = [];

//             result.title = $(this)
//                 .find("h3.headline").text().trim();
//             result.link = $(this)
//                 .find("a").attr("href");
//             result.imgUrl = $(this)
//                 .find("img").attr("src");

//             db.Article.create(result)
//                 .then(function (dbArticle) {
//                     // View the added result in the console
//                     console.log(dbArticle);
                   
//                 })
//                 .catch(function (err) {
//                     // If an error occurred, log it
//                     console.log(err);
//                 });

//         })
      
//     })
// }

// module.exports = scrape;