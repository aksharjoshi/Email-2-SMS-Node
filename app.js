
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , index = require('./routes/index')
  , functions = require('./routes/functions')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/home', index.home);
app.get('/services', index.services);
app.get('/getservices/:clientunkid', functions.getservices);
app.get('/settings', index.settings);
app.get('/contact', index.contact);

app.post('/login', functions.login);
app.post('/register', functions.register);
app.post('/service', functions.services);
app.post('/updateservice', functions.updateservice);
app.post('/settings', functions.settings);
app.post('/savekeywords', functions.savekeywords);
app.post('/saveblockedemail', functions.saveblockedemail);
app.post('/saverequiredemail', functions.saverequiredemail);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
