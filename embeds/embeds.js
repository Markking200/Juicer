const Discord = require("discord.js");

module.exports = {
  name: "embeds",
  async execute(message, text) {
    var authorsMessage = text;
    console.log(message.content);
    const replyEmbed = new Discord.MessageEmbed()
      .setTitle(authorsMessage)
      .setColor("#00fff7")
      .setAuthor(message.author.username);
    message.reply(replyEmbed);
  },
};
