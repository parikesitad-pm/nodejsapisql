"use strict";

var response = require("./res");
var connection = require("./dbcon/dbcon");

exports.index = function (req, res) {
  response.ok("App Online", res);
};
