const embed= require("../../embeds/embeds")

module.exports = {
  name: "roles",
  description: "Information about the roles provided",
  args: true,
  usage: '<username>',
  execute(message, args) {
      embed.execute(message, args[0]);
  },
};
