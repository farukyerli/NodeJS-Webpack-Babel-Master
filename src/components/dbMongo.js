//import mongoose from "mongoose";
var mongoose = require('mongoose');
//mongoose.connect('monhodb://172.25.15.25:19999/_auth');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/test");

const userSchema = mongoose.model("login", {
  username: {
    type: String
  },
  password: {
    type: String
  },
  lastlogin: {
    type: String
  }
});

const newUser = new userSchema({
    username : 'test1'
});

newUser.save().then((response)=>{
    console.log('Saved User', response);
    
}, (err)=>{
    console.log('>>> Cant Save', err);
    
})



