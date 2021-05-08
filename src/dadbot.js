const { Client, Message } = require('discord.js');
require('dotenv').config()

const token = process.env.DISCORDJS_BOT_TOKEN;
const bot = new Client();
const prefix = '-';

// Make sure the below arrays are equal length!
const questions = ['Are we there yet?', 'I\'m hungry', 'Whats for dinner?']
const answers1 = ['Nearly!', 'Hi Hungry \', I\'m dad!', 'Dirt!']
const answers2 = ['What a silly question', 'Not this again!', 'How would I know']

var mode;

bot.login(token);
bot.on('ready', () => {
    console.info('Logged in as ${bot.user.tag}!');
});

bot.on('message', msg => {

    if (msg.content.startswith(prefix)) {

        const args = msg.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase;

        mode = command;
    }

    if (mode === 1) {
        for (let i = 0; i < questions.length; i++) {
            if (msg.content === questions[i]) {
                msg.reply(answers1[i])
            }
        }
    }
    else if (mode === 2) {
        for (let i = 0; i < questions.length; i++) {
            if (msg.content === questions[i]) {
                msg.reply(answers2[i])
            }
        }
    }
});