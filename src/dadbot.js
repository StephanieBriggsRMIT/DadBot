// Import environment variables we don't directly in the code
require('dotenv').config()

// Define the discord.js server connection
const { Client } = require('discord.js');
const token = process.env.DISCORDJS_BOT_TOKEN;
const bot = new Client();

// Question and Answer definitions
// Make sure the below arrays are equal length!
const questions = 
    ['Are we there yet?', 
    'Whats for dinner?',
    'Dad, I\'m hungry',
    'Can I play Nintendo?',
    'Can we go to the skatepark?',
    'Can we watch a Scary Movie',
    'When are we going camping?']
const answers = 
    ['Nearly!',
    'Food!',
    'Hi Hungry \', I\'m dad!',
    'Only for an hour',
    'Sure, just let me finish what I am doing',
    'How about a normal one?',
    'As soon as we can!']


// Login to Discord
bot.login(token);
bot.on('ready', () => {
    console.info('Logged in as ${bot.user.tag}!');
});

// Monitor the messages in the channel
bot.on('message', msg => {

    // Loop through the question and answes list
    for (let i = 0; i < questions.length; i++) {
        if (msg.content.toLowerCase() === questions[i].toLowerCase()) {
            msg.reply(answers[i])
        }
    }

});