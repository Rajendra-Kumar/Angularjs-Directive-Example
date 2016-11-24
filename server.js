var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 5050;

app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

//app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public'));

app.use(bodyParser);
app.listen(port, function (err,res) {
	console.log('Server running on port, ', port);
})