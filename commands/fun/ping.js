module.exports = {
    name: 'ping',
    description: '§ping',
    cooldown:20,
    guildOnly: true,
    execute(message,args) {
        message.channel.send('Du Hurensohn')
    }
}