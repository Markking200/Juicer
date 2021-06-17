module.exports = {
  name: "status",
  guildOnly: true,
  args: true,
  permissions: "ADMINISTRATOR",
  usage: "<status>",
  execute(message, args) {
    const statuses = ["online", "idle", "dnd", "invisible"];
    message.client.user.setStatus(args[0]);
  },
};
