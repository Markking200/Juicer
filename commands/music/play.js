const ytdl = require('ytdl-core');

module.exports = {
  name: "play",
  aliases: ["p"],
  category: "music",
  async execute(message, args) {
    const { musicQueue } = message.client;
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) {
      return message.reply("You need to be in a voice channel.");
    }
    const songInfo = await ytdl.getInfo(args[0]);
    const song = {
      title: songInfo.videoDetails.title,
      url: songInfo.videoDetails.video_url,
    };
    if (!musicQueue.length) {
      const queueContruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 5,
        playing: true,
      };
      // Setting the queue using our contract
      musicQueue.push(queueContruct);
      // Pushing the song to our songs array
      musicQueue[0].songs.push(song);

      try {
        // Here we try to join the voicechat and save our connection into our object.
        var connection = await voiceChannel.join();
        queueContruct.connection = connection;
        // Calling the play function to start a song
        play(queueContruct.songs[0],message,musicQueue);
      } catch (err) {
        // Printing the error message if the bot fails to join the voicechat
        console.log(err);
        return message.channel.send(err);
      }
    } else {
      musicQueue[0].songs.push(song);
      console.log(musicQueue[0].songs.length)
      return message.reply(
        `${song.title} has been added to the queue successfully!`
      );
    }
  },
};

function play(song,message,musicQueue){
  if(!musicQueue[0].songs.length){
    musicQueue[0].voiceChannel.leave();
    musicQueue=[];
    return;
  }
  const dispatcher = musicQueue[0].connection
  .play(ytdl(song.url,{filter: 'audioonly'}))
  .on('finish',()=>{
    musicQueue[0].songs.shift();
    play(musicQueue[0].songs[0],message,musicQueue)
  })
  .on('error',error=>console.error(error));
  // dispatcher.setVolumeLogarithmic(musicQueue.volume/5);
  message.channel.send(`Started playing: **${song.title}**`)
}