const Discord = require('discord.js')
const embed= require("../../embeds/embeds")

module.exports = {
  name: "avatar",
  description: "Get the avatar URL of the tagged user(s), or your own avatar.",
  aliases: ["avatar","icon","pfp"],
  guildOnly: true,
  execute(message, args) {
    if (!message.mentions.users.size) {
      const embed = new Discord.MessageEmbed()
        .setColor('#00fff7')
        .setAuthor(message.author.username)
        .setImage(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=256`);
      return message.channel.send(embed)
    }
    const avatar = message.mentions.users.map((user) => {
      return new Discord.MessageEmbed()
      .setColor('#00fff7')
      .setAuthor(`${user.username}´s avatar`)
      .setImage(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256`);
    });
    message.channel.send(avatar);
  }
};
