const yts  = require("yt-search");
const embed= require("../../embeds/embeds")

module.exports = {
    name: 'test',
    category: 'music',
    async execute(message, args) {
        const videos= await yts(args[0])
        console.log(videos.all[0].title)
        console.log(videos.shift())
    }
}