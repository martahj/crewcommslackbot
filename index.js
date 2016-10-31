require('babel-register');

const bothandlers = [
  require('./hannibal/index').default,
  // require('./eggsBenedict/index').default,
];

bothandlers.forEach((bothandler) => {
  bothandler();
});
