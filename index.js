var express = require("express");
var app = express();
const port = process.env.PORT || 3001;
const api = require("./api");
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use("/", api);

process.on("uncaughtException", handleFatalError);
process.on("unhandledRejection", handleFatalError);


function handleFatalError(err) {
  console.error(`${chalk.red("[fatal error]")} ${err.message}`);
  console.error(err.stack);
  process.exit(1);
}

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
