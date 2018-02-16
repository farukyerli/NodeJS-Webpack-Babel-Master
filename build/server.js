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

var _http = __webpack_require__(9);

var _http2 = _interopRequireDefault(_http);

var _bodyParser = __webpack_require__(4);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _middlewares = __webpack_require__(19);

var _middlewares2 = _interopRequireDefault(_middlewares);

var _router = __webpack_require__(17);

var _router2 = _interopRequireDefault(_router);

var _logging = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import morgan from "morgan";
var addLog = _logging.logging.addLog;

var app = (0, _express2.default)();

//app.use(morgan("combined"));
// gelen requesti adam gibi bir sekle sokalim
app.use(_bodyParser2.default.json({ type: "*/*" })); // middleware

// static sayfalar icin ugrasmaya gerek yok.
//Tek satir. abi hamalligi yapiyor.
// css, jpeg, video gibi dalgalari buraya koyarsin. isteyen indirir.
app.use("/", _express2.default.static("public"));

// derli toplu bir yerde dursunlar
(0, _middlewares2.default)(app);
(0, _router2.default)(app);

// Ula olmayan sayfayi nerenden buldun. 
app.get("*", function (req, res) {
  res.status(404).send("Sayfa YOK");
});

// Ula olmayan seyi ne gonderiyon. 
app.post("*", function (req, res) {
  res.status(404).send("Sayfa YOK");
});

var serverHTTP = _http2.default.createServer(app);
var PORT = process.env.PORT || 3000;
try {
  serverHTTP.listen(PORT, function () {
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logging = undefined;

var _fs = __webpack_require__(3);

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
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _signed = __webpack_require__(6);

Object.keys(_signed).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _signed[key];
    }
  });
});

var _signup = __webpack_require__(7);

Object.keys(_signup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _signup[key];
    }
  });
});

var _signin = __webpack_require__(8);

Object.keys(_signin).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _signin[key];
    }
  });
});

var _signout = __webpack_require__(20);

Object.keys(_signout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _signout[key];
    }
  });
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var requreAuth = exports.requreAuth = function requreAuth(data) {
    console.log('requreAuth', data);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var addUser = exports.addUser = function addUser(data) {
    console.log('addUser', data);
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var checkUser = exports.checkUser = function checkUser(data) {
    console.log('checkUser', data);
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _login = __webpack_require__(5);

module.exports = function (app) {
  app.post("/signup", function (req, res) {
    res.send(req.body);
  });

  app.post("/signin", function (req, res) {
    res.send(req.body);
  });

  app.get("/", function (req, res) {
    res.send({ Mesage: "NodeJS Server is up and running ..." });
  });

  app.get("/about", function (req, res) {
    res.send("About Page");
  });
};

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _login = __webpack_require__(5);

var _logging = __webpack_require__(2);

var addLog = _logging.logging.addLog;

module.exports = function (app) {
    // Bu bizim middleware. Middleware diye yazinca havali bir sey zannetme.
    // bu bildigin yirtik dondan cikan sey. her hackerin pembe dunyasi.
    // butun requestler buraya gelip Melahat ablanin merakini giderir.

    app.use(function (req, res, next) {
        var now = new Date().toString();
        addLog(">> Aha bir keklik daha geldi >>" + req.method + req.url);
        addLog(now);
        next(); // aman dikkat. Melahat abla tamam demezse senin tarayici bekler de bekler.
    });
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var signOut = exports.signOut = function signOut(data) {
    console.log('signOut', data);
};

/***/ })
/******/ ]);