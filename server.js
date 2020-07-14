/**
 * call mongo db connection so that the DB will start
 */
const restify = require('restify'),
      Logger = require('./lib/logger'),
      logger = new Logger('server')
      mongoose = require('./lib/db')

var server = restify.createServer();
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.fullResponse());
server.use(restify.plugins.dateParser());
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.requestLogger());

//console.log(os.networkInterfaces( ))
server.listen(8080,'localhost', function() {
  logger.info(`listening at ${server.name} ${server.url}`);
});
require('./lib/routes.js') (server);
