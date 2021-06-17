const embed= require("../../embeds/embeds")
module.exports = {
  name: "args-info",
  description: "Information about the arguments provided",
  args: true,
  async execute(message, args) {
    if (args[0] === "foo") {
        return message.reply(` du Hurensohn`);
    }
    message.reply(`Arguments: ${args}\nArguments length: ${args.length}`);
  },
};
