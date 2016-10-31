import botkit from 'botkit';
import config from '../config';
const { HANNIBAL_API_TOKEN } = config;

const controller = botkit.slackbot({
  debug: true,
});

const bot = controller.spawn({
  token: HANNIBAL_API_TOKEN,
}).startRTM();

const bothandler = () => {
  controller.hears(['hi'], 'direct_message,direct_mention', (bot, message) => {
    bot.reply(message, '/giphy crew');
  });
};

export default bothandler;
