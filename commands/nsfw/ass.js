const Util = require('../../util/MitUtil.js');
const request = require("request");

let subreddit = ['ass', 'TheUnderbun', 'booty', 'SpreadEm', 'HighResASS'];

module.exports = {
    name: 'ass',
    description: "Sends a random ass images",
    aliases: ['asses', 'butt'],
    usage: '',
    cooldown: 2,
    args: 0,
    catergory: 'NSFW',
    async execute(client, message, args) {
        try {
            if (message.channel.nsfw == true) {
                Util.subredditimage(subreddit, message);
            } else {
                message.reply("This isn't NSFW channel!")
            }
        } catch (err) {
            console.log(err);
            return message.reply(`Oh no, an error occurred. Try again later!`);
        }
    }
};
