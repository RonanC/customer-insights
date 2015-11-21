var express = require('express');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5050));
app.set('view engine', 'jade');

//  sets paths and path names for other folders
app.use(express.static(path.join(__dirname, 'public')));
app.use("/styles",  express.static(__dirname + '/public/styles'));
app.use("/scripts", express.static(__dirname + '/public/js'));
app.use("/images",  express.static(__dirname + '/public/images'));
app.use("/",  express.static(__dirname + '/public'));



app.get('/', function(req, res){
  res.contentType('text/html');
  res.status(200);
  res.sendFile(__dirname + "/public/index.html");
  //console.log(__dirname);
});

app.listen(app.get('port'), function(){
  console.log("Node web service is running on port ", app.get('port'));
});
