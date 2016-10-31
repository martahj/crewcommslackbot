require('babel-register');
var http = require('http')

const bothandlers = [
  require('./hannibal/index').default,
  // require('./eggsBenedict/index').default,
];

bothandlers.forEach((bothandler) => {
  bothandler();
});

var server = http.createServer();
var port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log('Server listening on', port);
});
