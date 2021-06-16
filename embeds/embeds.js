const Discord = require("discord.js");

module.exports = {
    name: 'embeds',
    execute(message,args,text) {
        const prefix='§'
        var authorsMessage= new Object();
        if(!args[0]){
            authorsMessage=text;
        }else{
            authorsMessage=message.content.slice(prefix.length).trim().split(/ +/);
            authorsMessage.shift();
            authorsMessage.join(" ")
        }
        console.log(message.content);
        const replyEmbed = new Discord.MessageEmbed()
        .setTitle(authorsMessage)
        .setColor('#00fff7')
        .setAuthor(message.author.username);
        message.reply(replyEmbed);
    }
}