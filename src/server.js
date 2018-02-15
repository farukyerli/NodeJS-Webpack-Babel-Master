import express from 'express';
import Routes from './routes';
//const express = require("express");
const app = express(); 



app.get("/", (req, res) => {
    var time = Date.now();
    console.warn(time);
    res.send({ Mesage: "NodeJS Server is up and running ... Import" }); 
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log("Listening port ...", PORT);