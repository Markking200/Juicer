module.exports = {
  name: "ac",
  guildOnly: true,
  args: true,
  permissions: "ADMINISTRATOR",
  usage: "<activity>",
  execute(message, args) {
    var act =
      options.find(
        (opt) => opt.name === args[0] || opt.aliases.includes(args[0])
      ) || args.join(" ");
    if (act !== args.join(" ")) {
      return act.run(message);
    }
    message.client.user.setActivity(act);
  },
};

const options = [
  {
    name: "showMembers",
    aliases: ["sm"],
    run(message) {
      message.client.guilds.cache.forEach((guild) => {
        message.client.user.setActivity(guild.memberCount + ` members`);
      });
    },
  },
  {
    name: "showOnlineCount",
    aliases: ["soc"],//
    async run(message) {
      return (mes = String(
        message.client.guilds.cache.members.cache.filter(
          (m) => m.presence.status === "online"
        ).size
      ));
    },
  },
];
