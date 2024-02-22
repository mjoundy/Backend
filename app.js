const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
require("dotenv").config();
const Username = require("./models/usernameSchema");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});

mongoose
  .connect(
    `mongodb+srv://joundymariem:${process.env.MONGODB_PASSWORD}@cluster0.4m7n9cs.mongodb.net/mydata?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/", (req, res) => {
  const username = new Username(req.body);

  username
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});
