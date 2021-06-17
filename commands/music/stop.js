const embed= require("../../embeds/embeds")

module.exports = {
    name: 'stop',
    category: 'music',
    async execute(message, args) {
        message.client.musicQueue=[];
        if(!message.client.musicQueue.length)console.log(message.client.musicQueue);
    }
}