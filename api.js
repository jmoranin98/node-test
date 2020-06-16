const express = require("express");
const app = express();
let data = [];
const api = express.Router();

api.post("/item", function (req, res) {
  let item = req.body.item || false;
  if (item) {
    data.push(item);
    res.send({ succes: true, message: "Saved successfully!!" });
    return;
  }
  res.send({ succes: false, message: "An item was not sent!!" });
});

api.get("/item", function (req, res) {
  res.send({ items: data });
});

api.post("/compute", function (req, res) {
  let word1 = req.body.word1 || "";
  let word2 = req.body.word2 || "";
  let coincidences = [];

  word1 = word1.split(" ").shift();
  word2 = word2.split(" ").shift();

  for (let index = 0; index <= word1.length; index++) {
    let sstr = word1.substring(0, index);
    if (word2.indexOf(sstr) !== -1) {
      coincidences.push(sstr);
    }
  }

  res.send({ result: coincidences.pop() });
});


module.exports = api;