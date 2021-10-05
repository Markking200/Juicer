const { Collection } = require("discord.js");
const voiceCollection = new Collection();
const fetch = require("node-fetch-polyfill");
const TempChannels = require("discord-temp-channels");

module.exports = {
  name: "voiceStateUpdate",
  async execute(oldState, newState, message) {
    var user = await client.users.fetch(newState.id);

    const member = newState.guild.member(user);

    if (!oldState.channel && newState.channel.id === "789204449372930068") {
      const channel = await newState.guild.channels.create(user.tag, {
        type: "voice",
        parent: newState.channel.parent,
      });
      member.voice.setChannel(channel);
      voiceCollection.set(user.id, channel.id);
    } else if (!newState.channel) {
      if (oldState.channelID === voiceCollection.get(newState.id))
        return oldState.channel.delete();
    }
  },
};
