exports.run = async (client, message, args) => {
    //message.channel.send("uhoh......\nhttps://www.youtube.com/watch?v=FveF-we6lcE");
    if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play("../audio/uhoh.mp3");
    } else {
        message.reply("You need to be in a voice channel to use this command!");
    }
}