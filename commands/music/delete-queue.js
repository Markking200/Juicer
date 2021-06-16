const embed= require("../../embeds/embeds")

module.exports = {
    name: 'delq',
    aliases:['delete-queue',"dq"],
    async execute(message, args) {
        if(!message.member.voice.channel){
            return message.reply('You have not the Permission to delete a queue')
        }
        if(!message.client.musicQueue.length){
            return message.reply('There is nothing to delete');
        }
        message.client.musicQueue[0].songs=[];  
        message.reply('Deleted Queue')
        console.log(message.client.musicQueue[0].songs)
        console.log(message.client.musicQueue)
    }
}