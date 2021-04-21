const { Client } = require('discord.js');
require('dotenv').config()

const token = process.env.DISCORDJS_BOT_TOKEN;
const bot = new Client();

bot.login(token);
bot.on('ready', () => {
    console.info('Logged in as ${bot.user.tag}!');
});

bot.on('message', msg => {

    if (msg.content === 'ping') {
        msg.reply('pong');
        msg.channel.send('pong');
    }
});