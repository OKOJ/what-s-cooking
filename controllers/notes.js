// var scrape = require("./scrape");

// var db = require("../models");


// module.exports = {
//     //Find one note
//     find: function (req, res) {
//         db.Note
//             .find({
//                 _titleId: req.params.id
//             })
//             .then(function (dbNote) {
//                 res.json(dbNote);
//             })
//     },
//     //Create a new note
//     create: function (req, res) {
//         db.Note
//             .create(req.body)
//             .then(function (dbNote) {
//                 res.json(dbNote);
//             })
//     },
//     //Delete note
//     delete: function (req, res) {
//         db.Note
//             .remove({
//                 _id: req.params.id
//             })
//             .then(function (dbNote) {
//                 res.json(dbNote);
//             });
//     }

// };