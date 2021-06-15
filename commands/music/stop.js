module.exports = {
    name: 'stop',
    category: 'music',
    execute(message, args) {
        message.client.musicQueue[0].connection.dispatcher.end();
        message.client.musicQueue=[];
        if(!message.client.musicQueue.length)console.log(message.client.musicQueue);
    }
}