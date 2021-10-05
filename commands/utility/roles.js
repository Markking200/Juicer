const embed= require("../../embeds/embeds")

module.exports = {
  name: "roles",
  description: "Information about the roles provided",
  args: true,
  usage: '<username>',
  async execute(message, args) {
      embed.execute(message, args[0]);
      console.log("Here is message ");
      console.log(message);
      console.log("Here is client "+ message.client);
      console.log(message.client);
  },
};
