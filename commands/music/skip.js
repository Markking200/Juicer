module.exports = {
    name: 'skip',
    execute(message, args) {
        if(!message.member.voice.channel){
            return message.reply('You have to be in a voice channel to be able to skip a song.');
        }
        if(!message.client.musicQueue.length){
            return message.reply('There is no music to skip!')
        }
        message.client.musicQueue[0].connection.dispatcher.end();
        message.client.musicQueue=[];
        console.log(message.client.musicQueue)
    }
}