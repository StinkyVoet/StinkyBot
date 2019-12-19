const Discord = require("discord.js");

module.exports = (client, message) => {
    if (message.guild === null) return;
    if (message.author.bot) return;

    if (!message.content.startsWith(client.config.prefix)) return;

    let args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let cmd;
  
    if (client.commands.has(command)) {
      cmd = client.commands.get(command);
    } else if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    }
    
    if (cmd) {
      cmd.run(client, message, args);
    }
};