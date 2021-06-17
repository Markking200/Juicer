const embed = require("../../embeds/embeds");

module.exports = {
  name: "loop",
  aliases: ["l"],
  async execute(message, args) {
    if (!message.member.voice.channel) {
      return embed.execute(
        message,
        "You have to be in a voice channel to be able to pause a song."
      );
    }
    if (!message.client.musicQueue.length) {
      return embed.execute(message, "There is no music to pause!");
    }
    //to do...
  },
};
