var fs = require('fs');
var express = require('express');

var text = "";

var app = express.createServer(express.logger());

app.get('/', function(request, res) {
    fs.readFile('./index.html', 'utf8', function(err, text){
        res.send(text);
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
