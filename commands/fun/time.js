const embed= require("../../embeds/embeds")

module.exports = {
    name: 'time',
    description: '§ping',
    // cooldown:20,
    guildOnly: true,
    async execute(message,args) {
        var date = new Date();
        const output =date.getTime();
        
        console.log(output);
        embed.execute(message,args,`${output}`)
    }
}