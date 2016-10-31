import botkit from 'botkit';
import config from '../config';
const { CUMBERBITCH_API_TOKEN } = config;
import makeName from './makeName';

const controller = botkit.slackbot({
  // debug: true,
});

const bot = controller.spawn({
  token: CUMBERBITCH_API_TOKEN,
}).startRTM();

const bothandler = () => {
  controller.hears(['benedict cumberbatch'], 'direct_message,direct_mention,mention,ambient', (bot, message) => {
    console.log('I HEARD THAT');
    const funnyname = makeName();
    bot.reply(message, funnyname);
  });
};

export default bothandler;
