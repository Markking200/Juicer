const embed = require("../../embeds/embeds");
const play = require("./play");

module.exports = {
  name: "loop",
  aliases: ["l"],
  async execute(message, args) {
    if (!message.member.voice.channel) {
      return embed.execute(
        message,
        "You have to be in a voice channel to be able to loop a song."
      );
    }
    if (!message.client.musicQueue.length) {
      return embed.execute(message, "There is no music to loop!");
    }
    const mes = ["loop"]
    if(message.client.musicQueue[0].loop){
      message.client.musicQueue[0].loop=false;
    }else{
      message.client.musicQueue[0].loop=true;
      play.execute(message, mes);
    }
    console.log(message.client.musicQueue[0].loop);
  },
};
