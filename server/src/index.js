const http = require('http');
const express = require('express');
const router = require('./router');
const cors = require('cors');
const controller = require('./socketInit');
const handlerError = require('./handlerError/handler');
const scheduler = require('./logErrors/scheduler');

const PORT = process.env.PORT || 9632;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use(router);
app.use(handlerError);

scheduler.start();

const server = http.createServer(app);
server.listen(PORT/*,
  () => console.log(`Example app listening on port ${ PORT }!`)*/);
controller.createConnection(server);
