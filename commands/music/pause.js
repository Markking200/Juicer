module.exports = {
    name: 'pause',
    execute(message, args) {
        if(!message.member.voice.channel){
            return message.reply('You have to be in a voice channel to be able to pause a song.');
        }
        if(!message.client.musicQueue.length){
            return message.reply('There is no music to pause!')
        }
        message.client.musicQueue[0].connection.dispatcher.pause();
    }
}