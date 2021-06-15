module.exports = {
    name: 'ac',
    guildOnly: true,
    args:true,
    permissions:'ADMINISTRATOR',
    usage: '<activity>',
    execute(message,args) {
        const act = options.find(opt=>opt.name ===args[0])||args[0];
        if(act!==args[0]){
            return act.run(message);
        }
        message.client.user.setActivity(act)
    }
}

const options = [
{
    name: 'showMembers',
    aliases: ["sm"],
    run(message){
        message.client.guilds.cache.forEach(guild =>{
            message.client.user.setActivity(guild.memberCount+` members`)
        });
    }
},
{
    name: 'showOnlineCount',
    aliases: ["soc"],
    run(message){
        const onlineMembers=message.client.guilds.cache.forEach(guild =>{
            //
        });
    }
},
]