const { joinVoiceChannel, VoiceReceiver } = require('@discordjs/voice');

// 1. Establish a connection to a voice channel
const connection = joinVoiceChannel({
    channelId: channel.id,
    guildId: channel.guild.id,
    adapterCreator: channel.guild.voiceAdapterCreator,
});

// 2. Access the receiver from the connection
const receiver = connection.receiver;

// 3. Listen for the 'start' event on the speaking map
receiver.speaking.on('start', (userId) => {
    console.log(`User with ID ${userId} has started speaking.`);
});

// 4. Listen for the 'end' event
receiver.speaking.on('end', (userId) => {
    console.log(`User with ID ${userId} has stopped speaking.`);
});

