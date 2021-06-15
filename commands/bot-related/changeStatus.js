module.exports = {
    name: 'status',
    guildOnly: true,
    args:true,
    permissions:'ADMINISTRATOR',
    usage: '<status>',
    execute(message,args) {
        const statuses=["dnd","online", "offline"]
        message.client.user.setStatus(args[0]);
    }
}