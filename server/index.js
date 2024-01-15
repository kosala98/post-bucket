require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./src/db/db");
const cors = require("cors");
const router = require("./src/routes/_index.routes");

const SERVER_PORT = process.env.SERVER_PORT || 5000;

const app = express();
app.use(cors({ origin: "*" }));
// middleware
app.use(bodyParser.json());
connectDB();

app.use(cors());

app.get("/test", (req, res) => {
  res.json({ msg: "Test Ok!" });
});

app.use("/api/v1/", router);

app.listen(SERVER_PORT, () => {
  console.log("Server listening on port " + SERVER_PORT);
});
