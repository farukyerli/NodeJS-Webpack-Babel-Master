/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _logging = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import db from './components/dbMongo';
//import Routes from "./routes";
var app = (0, _express2.default)();

var addLog = _logging.logging.addLog;

// static sayfalar icin ugrasmaya gerek yok.
//Tek satir. abi hamalligi yapiyor.
// css, jpeg, video gibi dalgalari buraya koyarsin. isteyen indirir.
app.use("/", _express2.default.static("public"));

// Bu bizim middleware. Middleware diye yazinca havali bir sey zannetme.
// bu bildigin yirtik dondan cikan sey. her hackerin pembe dunyasi.
// butun requestler buraya gelip Melahat ablanin merakini giderir.

app.use(function (req, res, next) {
  var now = new Date().toString();
  addLog(">> Aha bir keklik daha geldi >>" + req.method + req.url);
  addLog(now);
  next(); // aman dikkat. Melahat abla tamam demezse senin tarayici bekler de bekler.
});

app.get("/", function (req, res) {
  res.send({ Mesage: "NodeJS Server is up and running ..." });
});

app.get("/about", function (req, res) {
  res.send("About Page");
});

var PORT = process.env.PORT || 3000;
try {
  app.listen(PORT, function () {
    addLog("Listening port ..." + PORT);
  });
} catch (e) {
  addLog("Error Listen : ", e);
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logging = undefined;

var _fs = __webpack_require__(5);

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logName = "server.log";
var putConsole = "_logging_putConsole";
var putDB = "_logging_putDB";
var putDisc = "_logging_putDisc";
var maxDebugLevel = 12;
var debugLevel = 7; //addLog icinde Level gonderilirse bu sayiyi dikkate alarak isle
var now = new Date().toString();

var logging = exports.logging = {
  addLog: function addLog(text, level) {
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

var addLogtoDisc = function addLogtoDisc(text) {
  _fs2.default.appendFile(logName, text + " \n", function (err) {
    err ? console.log(">>> appendFile  ERROR >>>", err) : null;
  });
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })
/******/ ]);