const { Client } = require('discord.js');
require('dotenv').config()

const token = process.env.DISCORDJS_BOT_TOKEN;
const bot = new Client();

// Make sure the below arrays are equal length!
const questions = ['Are we there yet?', 'I\'m hungry', 'Whats for dinner?']
const answers = ['Nearly!', 'Hi Hungry \', I\'m dad!', 'Dirt!']

bot.login(token);
bot.on('ready', () => {
    console.info('Logged in as ${bot.user.tag}!');
});

bot.on('message', msg => {

    for (let i = 0; i < questions.length; i++) {
        if (msg.content === questions[i]) {
            msg.reply(answers[i])
        }
    }

});