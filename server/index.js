require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const port = 3000;

app.listen(3000, () => {
  console.log("Server listening on port " + port);
});
