const app = require('../app');
const http = require('http');
const appConfig = require('../config/app');

const server = http.createServer(app);
server.listen(appConfig.server_listen_port);