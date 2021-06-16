const ytdl = require("ytdl-core");
const yts  = require("yt-search");
const resume = require("./resume")
const embed= require("../../embeds/embeds")

module.exports = {
  name: "play",
  aliases: ["p", "play"],
  description: "Playes a song after entering a songname",
  async execute(message, args) {
    const { musicQueue } = message.client;
    const voiceChannel = message.member.voice.channel;

    console.log(args)
    if(!args.length){
      return resume.execute(message, args);
    }

    if (!voiceChannel) {
      return message.reply("You need to be in a voice channel.");
    }else if (!musicQueue[0]){}else if(musicQueue[0].voiceChannel!==voiceChannel){
      return message.reply("The bot is already playing")
    }
    
    const song = await getSong(args[0]);

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
        play(queueContruct.songs[0], message, musicQueue);
      } catch (err) {
        // Printing the error message if the bot fails to join the voicechat
        console.log(err);
        return message.channel.send(err);
      }
    } else {
      if (!message.client.voice.channel) {
        await voiceChannel.join();
      }
      musicQueue[0].songs.push(song);
      console.log(musicQueue[0].songs.length);
      return message.reply(
        `${song.title} has been added to the queue successfully!`
      );
    }
  },
};

async function play(song, message, musicQueue) {
  if (!musicQueue[0].songs.length) {
    musicQueue[0].voiceChannel.leave();
    message.client.musicQueue=[];
    console.log(message.client.musicQueue)
    return;
  }
  const dispatcher = musicQueue[0].connection
    .play(ytdl(song.url, { filter: "audioonly" }))
    .on("finish", () => {
      musicQueue[0].songs.shift();
      play(musicQueue[0].songs[0], message, musicQueue);
    })
    .on("error", (error) => console.error(error));
  dispatcher.setVolumeLogarithmic(musicQueue[0].volume / 5);
  message.channel.send(`Started playing: **${song.title}**`);
}

function getSong(args) {
  if(validURL(args)){
    return songByURL(args)
  }else{
    return songByName(args);
  }
}

async function songByURL(args) {
  const songInfo = await ytdl.getInfo(args);
  return song1 = {
        title: songInfo.videoDetails.title,
        url: songInfo.videoDetails.video_url,
    };
}

async function songByName(args) {
  const videos= await yts(args);
  return song= 
      {
        title: videos.all[0].title,
        url: videos.all[0].url,
      };
}


function validURL(str){
  var regex =
    /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  if (!regex.test(str)) {
    return false;
  } else {
    return true;
  }
};
