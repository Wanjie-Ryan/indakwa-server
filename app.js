const express = require("express");
const app = express();
const port = process.env.PORT || 3005;
const cors = require("cors");
const helmet = require("helmet");
const xss = require("xss-clean");
require("dotenv").config();
const { StatusCodes } = require("http-status-codes");
const connectionDB = require("./connection/connection");

app.use(helmet());
app.use(xss());
app.use(express.json());
app.set("trust proxy", 1);
app.use(cors());

app.get("/wake-up", (req, res) => {
  res.json({
    responseType: "success",
    message: "Server is awake",
  });
});

const DBConnection = async () => {
  try {
    await connectionDB(process.env.mongo_url);

    app.listen(port, () => {
      console.log(`server is running on port, ${port}`);
    });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

DBConnection();
