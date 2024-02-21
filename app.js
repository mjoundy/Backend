const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
require("dotenv").config();

app.get("/", (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});

mongoose
  .connect(
    `mongodb+srv://joundymariem:${process.env.MONGODB_PASSWORD}@cluster0.4m7n9cs.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
