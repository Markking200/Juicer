const embed= require("../../embeds/embeds")

module.exports = {
    name: 'ping',
    description: '§ping',
    guildOnly: true,
    async execute(message,args) {
        embed.execute(message,args,`🏓 Your, Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(message.client.ws.ping)}ms`)
    }
}