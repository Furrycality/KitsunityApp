const Util = require('../../util/MitUtil.js');

module.exports = {
  name: 'claptext',
  description: "AΓ±ade π en medio de cada palabra uwu",
  aliases: ['clapmsg'],
  usage: ' <Mensaje>',
  cooldown: 2,
  args: -1,
  catergory: 'Entretenimiento',
  async execute(client, message, args) {
    message.react('π')
      let claptxt = args.join(" π ");
      return message.channel.send(claptxt);
  }
};