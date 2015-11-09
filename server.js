var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5050));
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.contentType('text/html');
  res.status(200);
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.listen(app.get('port'), function(){
  console.log("Node web service is running on port ", app.get('port'));
});
