module.exports = {
    name: 'ping',
    description: '§ping',
    cooldown:5,
    guildOnly: true,
    execute(message,args) {
        message.channel.send('Du Hurensohn')
    }
}