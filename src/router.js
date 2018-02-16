import { addUser, checkUser, requreAuth } from "./components/login";

module.exports = app => {
  app.post("/signup", (req, res) => {
    res.send(req.body);
  });

  app.post("/signin", (req, res) => {
    res.send(req.body);
  });

  app.get("/", (req, res) => {
    res.send({ Mesage: "NodeJS Server is up and running ..." });
  });

  app.get("/about", (req, res) => {
    res.send("About Page");
  });


  
};
