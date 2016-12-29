const Discord = require("discord.js");
const bot = new Discord.Client();
const answers = ['dont.wav', 'maybe.wav', 'neither.wav', 'no.mp3', 'nothing.wav', 'tryagain.mp3', 'yes.wav'];

bot.login('MjU1MTA4OTM3MzgzMTQ5NTY4.CyY0_w.7r7w741DqEvyAJPHpBXfCJNhIio');

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.username}#${bot.user.discriminator}`);
});

bot.on('message', msg => {

	if (msg.content.includes('@255108937383149568')){
		playClip(msg);
	}
	else if (msg.content === "!help"){
		msg.reply("The Magic Conch knows all. Tag me with a question to get started.");
	}
});

function playClip(msg){

	var clip = 'assets/' + answers[Math.floor((Math.random() * 7) + 0)];
	console.log(clip);

	console.log(msg.author.username + " used " + msg.content);
	var channel = msg.member.voiceChannel;

	if (msg.member.voiceChannel == undefined){
		msg.reply("You must be in a voice channel to use this command.");
	}
	else{
	msg.member.voiceChannel.join()
	 .then(connection => {
   const dispatcher = connection.playFile(clip, {volume: .5});
   setTimeout(function(){channel.leave();}, 2000);

 })
 .catch(console.error);
}
}



