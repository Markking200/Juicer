const embed = require("../../embeds/embeds");

module.exports = {
    name: "song",
    async execute(message, args) {
      if (!message.client.musicQueue.length) {
        return embed.execute("There is no music playing!");
      }
      const song=message.client.musicQueue[0].songs[0];
      embed.execute(message, `Currently playing ${song.title}`);
    },
  };