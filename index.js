const path = require('path');
const port = process.env.PORT || 5000;
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

