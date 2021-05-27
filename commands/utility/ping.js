const Util = require('../../util/MitUtil.js');

module.exports = {
    name: 'ping',
    description: 'Mide la latencia del bot .w.',
    aliases: ['pong', 'latency'],
    usage: '',
    cooldown: 2,
    args: 0,
    catergory: 'Utilidad',
    async execute(client, message, args) {
        try {
            let botMsg = await message.channel.send("🏓 Pingeando")
            botMsg.edit({
                embed: {
                    title: "📶 Ping",
                    description: [
                        "**📡 API**: `" + (botMsg.createdAt - message.createdAt) + "ms`",
                        "**💻 WebSocket**: `" + client.ws.ping + "ms`",
                        "**🕹 Tiempo online**: `" + Util.msToTime(client.uptime) + "`"
                    ].join("\n"),
                    color: "#8B0000",
                    footer: {
                        text: "Requested by " + message.author.tag,
                        icon_url: message.author.displayAvatarURL()
                    },
                    timestamp: new Date()
                }
            }).catch(() => botMsg.edit("🆘 An unknown error occurred. Do I have permission? (Embed Links)"));
        } catch (err) {
            console.log(err);
            return message.reply(`Oh no, an error occurred. Try again later!`);
        }
    }
};
