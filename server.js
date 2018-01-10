
var express = require('express');
const multer = require('multer');
const path = require('path');

var app = express();
const storage = multer.diskStorage({
  destination: './public/',
  filename: (req, file, cb) => {
    cb(null,file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage
}).single('myFile');
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

//app.get("/", function (request, response) {
 // response.send(dreams);
//});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/size", function (request, response) {
  
  response.send('test');
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
