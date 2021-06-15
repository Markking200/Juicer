module.exports = {
    name: 'ac',
    guildOnly: true,
    args:true,
    permissions:'ADMINISTRATOR',
    usage: '<status>',
    execute(message,args) {
        message.client.user.setActivity(args[0])
    }
}