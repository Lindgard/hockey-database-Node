const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8080;

data = [
  {
    team: "Boston Bruins",
    position: 1,
    id: 1,
  },
  {
    team: "Edmonton Oilers",
    position: 2,
    id: 2,
  },
  {
    team: "New York Rangers",
    position: 3,
    id: 3,
  },
];

app.get("/", (req, res) => {
  res.json(data);
});

app.get("/team", (req, res) => {
  res.status(204).send("Anaheim Ducks");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
