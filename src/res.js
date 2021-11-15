"use strict";

exports.ok = function (value, res) {
  const data = {
    status: 200,
    value: value,
  };

  res.json(data);
  res.end();
};
