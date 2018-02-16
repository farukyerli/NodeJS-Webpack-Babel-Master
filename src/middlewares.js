
import {requreAuth} from './components/login';
import { logging as Log } from "./components/logging";
const addLog = Log.addLog;

module.exports = app  =>{
    // Bu bizim middleware. Middleware diye yazinca havali bir sey zannetme.
// bu bildigin yirtik dondan cikan sey. her hackerin pembe dunyasi.
// butun requestler buraya gelip Melahat ablanin merakini giderir.

app.use((req, res, next) => {
    const now = new Date().toString();
    addLog(">> Aha bir keklik daha geldi >>" + req.method + req.url);
    addLog(now);
    next();// aman dikkat. Melahat abla tamam demezse senin tarayici bekler de bekler.
  });

}