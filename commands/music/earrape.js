const embed = require("../../embeds/embeds");

module.exports = {
  name: "earrape",
  aliases: ["er"],
  guildOnly: true,
  permissions: "ADMINISTRATOR",
  async execute(message, args) {
    if (!message.member.voice.channel) {
      return embed.execute(
        message,
        "You have to be in a voice channel to be able to skip a song."
      );
    }

    if (!message.client.musicQueue.length) {
      return embed.execute(message, "Sorry no Music is playing! :");
    }

    const disp = message.client.musicQueue[0].connection.dispatcher;

    try {
      if (disp.volume!=45.810391150405835) {
          console.log(disp.volume)
        await disp.setVolumeLogarithmic(
          10
        );
        console.log(disp.volume)
      } else {
        await disp.setVolumeLogarithmic(
          1
        );
      }
    } catch (e) {
      console.log(e);
    }
  },
};
