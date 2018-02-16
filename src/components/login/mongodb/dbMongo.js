//import mongoose from "mongoose";
var mongoose = require("mongoose");
const urlDB = "localhost";
const portDB = 27017;
const authDB = "auth";
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${urlDB}:${portDB}/${authDB}`);

//http://mongoosejs.com/docs/schematypes.html
const userSchema = mongoose.model("login", {
  username: {
    type: String,
    required: true,
    trim: true,
    minlenght: 3,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlenght: 4
  },
  lastlogin: {
    type: Date
  }
});

const newUser = new userSchema({
  username: "test1",
  password: "1234",
  lastlogin: Date().toString()
});

newUser
  .save()
  .then(response => {
    console.log("Saved User", response);
  })
  .catch(err => {
    console.log(">>> Cant Save", err);
  });
