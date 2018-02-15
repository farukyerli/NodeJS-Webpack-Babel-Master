//import express from 'express';
const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send({ Mesage: "NodeJS Server is up and running ..." }); 
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log("Listening port ...", PORT);