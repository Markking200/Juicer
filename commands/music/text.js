const yts  = require("yt-search");

module.exports = {
    name: 'test',
    category: 'music',
    async execute(message, args) {
        const videos= await yts(args[0])
        console.log(videos.all[0].title)
        console.log(videos.shift())
    }
}