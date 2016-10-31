import botkit from 'botkit';
import config from '../config';
const { HANNIBAL_API_TOKEN } = config;
const token = process.env.HANNIBAL || HANNIBAL_API_TOKEN;

const controller = botkit.slackbot({});

const bot = controller.spawn({
  token,
}).startRTM();

const bothandler = () => {
  controller.hears(['hi'], 'direct_message,direct_mention', (bot, message) => {
    bot.reply(message, '/giphy crew');
  });
};

export default bothandler;
