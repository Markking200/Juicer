module.exports = {
    name: 'pause',
    category: 'music',
    execute(message, args) {
        message.client.musicQueue=[];
        console.log(message.client.musicQueue)
        if(!message.client.musicQueue.length)console.log('true');
    }
}