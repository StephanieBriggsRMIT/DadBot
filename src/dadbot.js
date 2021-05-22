// Import environment variables we don't directly in the code
require('dotenv').config()

// Define the discord.js server connection
const { Client } = require('discord.js');
const token = process.env.DISCORDJS_BOT_TOKEN;
const bot = new Client();
const prefix = '/mode';

let mode = 1;

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
const answers1 =
    ['Nearly!',
        'Food!',
        'Hi Hungry \', I\'m dad!',
        'Only for an hour',
        'Sure, just let me finish what I am doing',
        'How about a normal one?',
        'As soon as we can!']
const answers2 =
    ['No!',
        'Whatever your given!',
        'Again!? have you got hollow legs?',
        'Haven\'t you played enough today?',
        'Does it look like I\'m in a position to take you to the skate park?',
        'What do YOU reckon?',
        'Didn\'t we just get back from camping?']
const modename =
    ['Normal',
        'Annoyed']


// Login to Discord
bot.login(token);
bot.on('ready', () => {
    console.info('Logged in as ${bot.user.tag}!');
});

// Monitor the messages in the channel
bot.on('message', msg => {

    if (msg.content.startsWith(prefix)) {

        const args = msg.content.split(" ");
        const command = args[1]

        if (command === "add") {
            // Send the Message Content to the addQuestion function and post its response
            msg.reply(addQuestion(msg.content));
        }
        else {
            mode = parseInt(command);
            if (mode <= modename.length) {
                msg.reply('Changed to mode: ' + modename[mode - 1])
            }
            else {
                let messagereply = 'Invalid mode, please enter from options: \n';

                for (let i = 0; i < modename.length; i++) {
                    messagereply = messagereply + (i + 1) + ' - ' + modename[i] + '\n';
                }
                messagereply = messagereply + 'add - Add a new Question and Answer';
                msg.reply(messagereply)
            }
        }
    }

    if (mode === 1) {
        for (let i = 0; i < questions.length; i++) {
            if (msg.content.toLowerCase() === questions[i].toLowerCase()) {
                msg.reply(answers1[i])
            }
        }
    }

    else if (mode === 2) {
        for (let i = 0; i < questions.length; i++) {
            if (msg.content.toLowerCase() === questions[i].toLowerCase()) {
                msg.reply(answers2[i])
            }
        }
    }


});

// Function to Add new questions to the Arrays

function addQuestion(message) {
    let response = '';

    // First break the original message up to get the Question and answer after the /mode add
    let str = message.slice(10, message.length);
    let strArgs = str.split("\" \"");

    // Check for 2 arguments only add the question if two exist
    if (strArgs.length != 2) {
        response = 'To add a new Question, enter the following\n /mode add \"new question\" \'new answer\' ';
    } else {
        let newQuestion = strArgs[0].slice(1, strArgs[0].length);
        let newAnswer = strArgs[1].slice(0, strArgs[1].length - 1);

        questions.push(newQuestion);
        answers1.push(newAnswer);
        answers2.push(newAnswer);

        response = 'The following has been added: \n Question: ' + newQuestion + '\nAnswer: ' + newAnswer;
    }

    return response;


}