// var scrape = require("./scrape");

// var db = require("../models");


// module.exports = {
//     // Find all articles sorted by date
//     findAll: function (req, res) {
//         db.Article
//             .find(req.query)
//             .sort({
//                 date: -1
//             })
//             .then(function (dbArticle) {
//                 res.json(dbArticle);
//             })
//     },
//     //Delete  specified article
//     delete: function (req, res) {
//         db.Article
//             .remove({
//                 _id: req.params.id
//             })
//             .then(function (dbArticle) {
//                 res.json(dbArticle);
//             })
//     },
//     //Update specified article
//     update: function (req, res) {
//         db.Article
//             .findOneAndUpdate({
//                 _id: req.params.id
//             }, {
//                 $set: req.boby
//             }, {
//                 new: true
//             })
//             .then(function (dbArticle) {
//                 res.json(dbArticle);
//             });
//     },
//     //Clear database
//     clearDB: function (req, res) {
//         db.Article
//             .remove({})
//             .then(function () {
//                 return db.Note.remove({});
//             })
//             .then(function () {
//                 res.json({
//                     ok: true
//                 });
//             });
//     }

// }