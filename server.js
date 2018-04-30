var port =process.env.PORT || 6789;
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.set('view engine', 'ejs');

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
  });

  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/assets", express.static(__dirname + "/assets"));

  require('./app/routes/routes')(app);


  app.listen(port);

  console.log("Server listening on port " + port);