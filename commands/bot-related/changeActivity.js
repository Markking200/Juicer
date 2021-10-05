const fetch = require("node-fetch-polyfill");

module.exports = {
  name: "ac",
  guildOnly: true,
  args: true,
  permissions: "ADMINISTRATOR",
  usage: "<activity>",
   async execute(message, args) {
    var act =
      options.find(
        (opt) => opt.name === args[0] || opt.aliases.includes(args[0])
      ) || args.join(" ");
    if (act !== args.join(" ")) {
      console.log( await message.client.user.setActivity(act.run(message)))
      return await message.client.user.setActivity(act.run(message));
    }
    
  },
};

const options = [
  {
    name: "showMembers",
    aliases: ["sm"],
    run(message) {
      return message.client.guilds.cache.forEach((guild) => {
        message.client.user.setActivity(`${guild.memberCount} members`);
      });
    },
  },
  {
    name: "showOnlineCount",
    aliases: ["soc"],
    run(message) {
        let count =message.guild.members.cache.filter(m => m.user.presence.status === 'online').size
      return `${count} Members are Online`;
    },
  },
];
