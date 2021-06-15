module.exports = {
    name: 'status',
    guildOnly: true,
    args:true,
    permissions:'ADMINISTRATOR',
    usage: '<activity>',
    execute(message,args) {
        message.channel.send('Du Hurensohn')
    }
}