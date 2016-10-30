import botkit from 'botkit';
// const os = require('os');
import config from './config';
const { SLACK_API_TOKEN } = config;

const controller = botkit.slackbot({
  debug: true,
});

const bot = controller.spawn({
  token: SLACK_API_TOKEN,
}).startRTM();

const bothandler = () => {
  console.log('got token', SLACK_API_TOKEN);
  controller.hears(['hi'], 'direct_message,direct_mention', (bot, message) => {
    console.log('heard hi');
    console.log('bot', bot);
    console.log('message', message);
    bot.reply(message, 'WUDDUP SLUT');
  })
};

export default bothandler;
