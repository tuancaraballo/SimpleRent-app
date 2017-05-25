var express = require('express');
var handlebars = require('express-handlebars');
//-> path used to work with filestytem: files and directories
var path = require('path');
var router = express.Router();
var PORT = process.env.PORT || 3000;
var app = express();
/* ->configures a new view engine to handlebars since the default is jade
       * extname is the extension of the file
	   * defaultLayout is the base.html
	   * layoutDir: the directory of your layouts
*/     
app.engine('hbs', handlebars({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
// -> sets the file
app.set('views', path.join(__dirname, 'views'));
// -> sets the view engine to the one you configured. 
app.set('view engine', 'hbs');

app.get('/', function (req, res, next) {
	console.log('Got here !!'); 
	res.render('index');
});


app.listen(PORT, function() {
	console.log('Server listering on port ' + PORT + ' ...');
});