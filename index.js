const Discord = require("discord.js");
const fs = require("fs");
require("dotenv").config();
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.musicQueue = new Discord.Collection().array();

const eventFiles = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args, client));
  } else {
    client.on(event.name, (...args) => event.execute(...args, client));
  }
}

client.login(process.env.CLIENT_TOKEN);
//git message :cold_face: :ice_cube:  JUICER :beverage_box::blue_heart:
// source ~/.nvm/nvm.sh
