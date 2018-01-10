
var express = require('express');
const multer = require('multer');
//const path = require('path');

var app = express();
const storage = multer.diskStorage({
  destination: 'public/upload'
});

const upload = multer({
  storage: storage
}).single('myFile');
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.post("/size", upload, function (request, response) {
  console.log(request.file);
  response.send({size: request.file.size});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
