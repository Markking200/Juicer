const embed = require("../../embeds/embeds");

module.exports = {
  name: "resume",
  aliases: ["res"],
  async execute(message, args) {
    if (!message.member.voice.channel) {
      return embed.execute(
        message,
        "You have to be in a voice channel to be able to skip a song."
      );
    }
    if (!message.client.musicQueue.length) {
      return embed.execute(message, "There is no music to skip!");
    }
    try {
      await message.client.musicQueue[0].connection.dispatcher.resume();
    } catch (e) {
      console.log(e);
    }
  },
};
