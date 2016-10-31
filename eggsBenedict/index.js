import botkit from 'botkit';
import config from '../config';
const { CUMBERBITCH_API_TOKEN } = config;
const token = process.env.cumberbitch || CUMBERBITCH_API_TOKEN;
import makeName from './makeName';

const controller = botkit.slackbot({});

const bot = controller.spawn({
  token,
}).startRTM();

const bothandler = () => {
  controller.hears(['benedict cumberbatch'], 'direct_message,direct_mention,mention,ambient', (bot, message) => {
    console.log('I HEARD THAT');
    const funnyname = makeName();
    bot.reply(message, funnyname);
  });
};

export default bothandler;
