const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");
const peopleRoute = require("./src/people/routes");
const cityRoute = require("./src/cities/routes");

app.use(cors());

app.use(express.json());

app.use("/people", peopleRoute);
app.use("/cities", cityRoute);

app.get("/", (req, res) => {
  res.redirect("/cities");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
