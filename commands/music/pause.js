const embed = require("../../embeds/embeds");

module.exports = {
  name: "pause",
  aliases: ["pa"],
  async execute(message, args) {
    if (!message.member.voice.channel) {
      return embed.execute(
        "You have to be in a voice channel to be able to pause a song."
      );
    }
    if (!message.client.musicQueue.length) {
      return embed.execute("There is no music to pause!");
    }
    message.client.musicQueue[0].connection.dispatcher.pause();
    embed.execute(message, "⏸ **PAUSED** 🔴");
  },
};
