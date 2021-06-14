const Discord = require("discord.js");
const fs = require("fs");
const { prefix } = require("./config.json");
require("dotenv").config();
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.musicQueue = new Discord.Collection().array();

const commandFolders = fs.readdirSync("./commands");

for (let folder of commandFolders) {
  const commandFiles = fs
    .readdirSync(`./commands/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (let file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
  }
}

client.once("ready", () => {
  console.log(`"Ready! Logged in as ${client.user.tag}"`);
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command) return;

  //checking if the command is a server only command and
  if (command.guildOnly && message.channel.type === "dm") {
    return message.reply("I can't execute that command inside DMs!");
  }
  //////////////////////////////////////////////////////////////

  //checking if the author of the message has the right permissions
  if (command.permissions) {
    const authorPerms = message.channel.permissionsFor(message.author);
    if (!authorPerms || !authorPerms.has(command.permissions)) {
      return message.reply(
        "You don't have the right permissions to execute that command! Sorry :>"
      );
    }
  }
  //////////////////////////////////////////////////////////////

  //if the full argument was provided
  if (command.args && !args.length) {
    let reply = `You didn't provide any arguments, ${message.author}!`;

    if (command.usage) {
      reply += `\nThe proper Usage would be:\`${prefix}${command.name} ${command.usage}\``;
    }

    return message.channel.send(reply);
  }
  //////////////////////////////////////////////////////////////

  //checking for cooldown
  if (command.cooldown) {
    const { cooldowns } = client;

    if (!cooldowns.has(command.name)) {
      cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        return message.reply(
          `please wait ${timeLeft.toFixed(
            1
          )} more second(s) before reusing the \`${command.name}\` command.`
        );
      }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  }
  //////////////////////////////////////////////////////////////

  //executing the command and error handling
  try {
    command.execute(message, args);
  } catch (error) {
    console.log(error);
    console.log(`Cannot execute ${args[0]} ${commandName}`);
    message.reply(`Cannot execute ${commandName} ${args[0]}`);
  }
  //////////////////////////////////////////////////////////////
});

client.login(process.env.CLIENT_TOKEN);