const { Client } = require('discord.js');

const bot = new Client();

bot.login("ODI3ODU4MDM3ODAwMTczNTk4.YGhI4Q.JDDQnvHo8jCRRGZg3hPIgjDg73U");
bot.on('ready', () => {
    console.info('Logged in as ${bot.user.tag}!');
});

bot.on('message', msg => {

    if (msg.content === 'ping') {
        msg.reply('pong');
        msg.channel.send('pong');
    }
});