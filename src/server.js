import express from "express";
import { logging as Log } from "./components/logging";
//import db from './components/dbMongo';
//import Routes from "./routes";
const app = express();

const addLog = Log.addLog;

// static sayfalar icin ugrasmaya gerek yok.
//Tek satir. abi hamalligi yapiyor.
// css, jpeg, video gibi dalgalari buraya koyarsin. isteyen indirir.
app.use("/", express.static("public"));

// Bu bizim middleware. Middleware diye yazinca havali bir sey zannetme.
// bu bildigin yirtik dondan cikan sey. her hackerin pembe dunyasi.
// butun requestler buraya gelip Melahat ablanin merakini giderir.

app.use((req, res, next) => {
  const now = new Date().toString();
  addLog(">> Aha bir keklik daha geldi >>" + req.method + req.url);
  addLog(now);
  next();// aman dikkat. Melahat abla tamam demezse senin tarayici bekler de bekler.
});

app.get("/", (req, res) => {
  res.send({ Mesage: "NodeJS Server is up and running ..." });
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

const PORT = process.env.PORT || 3000;
try {
  app.listen(PORT, () => {
    addLog("Listening port ..." + PORT);
  });
} catch (e) { 
  addLog("Error Listen : ", e);
}
