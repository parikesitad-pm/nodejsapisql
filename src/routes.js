"use strict";

module.exports = function (app) {
  const myjson = require("./controller");

  app.route("/").get(myjson.index);

  app.route("/show").get(myjson.showalldata);
};
