var bodyParser = require('body-parser');
var compression = require('compression');
var cookieParser = require('cookie-parser');
var express = require('express');
var engines = require('consolidate');
var errorHandler = require('errorhandler');

exports.startServer = function(config, callback) {
  var app = express();

  // setup views and ports
  var extension = config.server.views.extension;
  app.engine(extension, engines[config.server.views.compileWith]);

  app.set('views', config.server.views.path);
  app.set('view engine', extension);
  app.set('port', process.env.PORT || config.server.port || 3000);

  // middleware
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(express.static(config.watch.compiledDir));

  if (app.get('env') === 'development') {
    app.use(errorHandler());
  }

  // routes
  var cachebust = '';
  if (process.env.NODE_ENV !== 'production') {
    cachebust = '?b=' + (new Date()).getTime();
  }

  var routeOptions = {
    reload: config.liveReload.enabled,
    optimize: config.isOptimize != null ? config.isOptimize : false,
    cachebust: cachebust
  };

  var router = express.Router();
  router.get('/', function(req, res) {
    res.render('index', routeOptions);
  });

  app.use('/', router);

  // start it up
  var port = app.get('port');
  var server = app.listen(port, function() {
    console.log('Express server listening on port ' + port);
  });

  callback(server);
};
