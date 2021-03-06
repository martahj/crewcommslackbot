import botkit from 'botkit';

let token;
if (process.env.NODE_ENV === 'production') {
  console.log('in production');
  token = process.env.HANNIBAL;
} else {
  const config = require('../config').default;
  console.log('got config', config);
  const { HANNIBAL_API_TOKEN } = config;
  token = HANNIBAL_API_TOKEN;
}
console.log('token', token);

const controller = botkit.slackbot({});

const bot = controller.spawn({
  token,
}).startRTM();

const bothandler = () => {
  controller.hears(['hi'], 'direct_message,direct_mention', (bot, message) => {
    console.log('in bothandler');
    bot.reply(message, '/giphy crew');
  });
};

export default bothandler;
