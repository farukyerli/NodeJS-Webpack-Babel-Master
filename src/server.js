import express from "express";
import http from 'http';
//import morgan from "morgan";
import bodyParser from 'body-parser';
import MiddleWares from './middlewares';
import router from './router';
import { logging as Log } from "./components/logging";
const addLog = Log.addLog;

const app = express();

//app.use(morgan("combined"));
// gelen requesti adam gibi bir sekle sokalim
app.use(bodyParser.json({ type: "*/*" })); // middleware

// static sayfalar icin ugrasmaya gerek yok.
//Tek satir. abi hamalligi yapiyor.
// css, jpeg, video gibi dalgalari buraya koyarsin. isteyen indirir.
app.use("/", express.static("public"));

// derli toplu bir yerde dursunlar
MiddleWares(app);
router(app);

// Ula olmayan sayfayi nerenden buldun. 
app.get("*", (req, res) => {
  res.status(404).send("Sayfa YOK");
});

// Ula olmayan seyi ne gonderiyon. 
app.post("*", (req, res) => {
  res.status(404).send("Sayfa YOK");
});

const serverHTTP = http.createServer(app);
const PORT = process.env.PORT || 3000;
try {
  serverHTTP.listen(PORT, () => {
    addLog("Listening port ..." + PORT);
  });
} catch (e) { 
  addLog("Error Listen : ", e);
}
