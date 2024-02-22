const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the article)
const usernameSchema = new Schema({
  username: String,
  age: Number,
  email: String
});

// Create a model based on that schema
const Username = mongoose.model("username", usernameSchema);

// export the model
module.exports = Username;
