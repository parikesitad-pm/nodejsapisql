const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// parsing app/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// call router
var routes = require("./routes");
routes(app);

app.listen(3306, () => {
  console.log(`Server Online`);
});
