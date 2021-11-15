"use strict";

var response = require("./res");
var connection = require("./dbcon/dbcon");

exports.index = function (req, res) {
  response.ok("App Online", res);
};

// show all data
exports.showalldata = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", function (err, rows, fields) {
    if (err) {
      connection.log(err);
    } else {
      response.ok(rows, res);
    }
  });
};
