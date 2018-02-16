import fs from "fs";

const logName = "server.log";
const putConsole = "_logging_putConsole";
const putDB = "_logging_putDB";
const putDisc = "_logging_putDisc";
const maxDebugLevel = 12;
const debugLevel = 7; //addLog icinde Level gonderilirse bu sayiyi dikkate alarak isle
const now = new Date().toString();


export const logging = {
  addLog: (text, level) => {
    if (level) {
      if (level <= debugLevel) {
        console.log("No log", debugLevel, maxDebugLevel);
        return;
      }
    }
    console.log(text);
    addLogtoDisc(text);
  }
};

const addLogtoDisc = text => {
  fs.appendFile(logName, `${text} \n`, err => {
    err ? console.log(">>> appendFile  ERROR >>>", err) : null;
  });
};
