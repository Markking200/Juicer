module.exports = {
  name: "status",
  guildOnly: true,
  args: true,
  permissions: "ADMINISTRATOR",
  usage: "<status>",
  async execute(message, args) {
    const statuses = ["online", "idle", "dnd", "invisible"];
    console.log(args);
    const status= args.toString();
    await message.client.user.setStatus(status);
    if(statuses.includes(status))
      message.client.user.setStatus(status);
      console.log(message.client.user.status);
  },
};
