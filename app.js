var express = require('express');
var app = express();
var modRewrite = require('connect-modrewrite');
var compression = require('compression');
var redis = require('redis');
var prerender = require('prerender-node');

//app.use(require('prerender-node').set('prerenderServiceUrl', 'http://localhost:3000'));
app.use(prerender);

app.use(compression());

app.use(express.static(__dirname + '/'));

app.use(modRewrite([
  '!/api|/assets|\\.html|\\.js|\\.css|\\woff|\\ttf|\\swf$ /index.html'
]));

// app.get('/', function(req, res){
//   res.redirect('index.html');
// });

// This route deals enables HTML5Mode by forwarding missing files to the index.html
app.all('/*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(8081);
