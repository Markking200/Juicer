module.exports = {
    name: 'ping',
    description: '§ping',
    cooldown:20,
    guildOnly: true,
    execute(message,args) {
        message.reply(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(message.client.ws.ping)}ms`)
    }
}