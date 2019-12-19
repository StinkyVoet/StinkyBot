const fs = require("fs");
const Enmap = require("enmap");

exports.LoadCommands = (client)  => {
  client.commands = new Enmap();
  client.aliases = new Enmap();
    
  fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      if (!file.endsWith(".js")) return;
      
      let props = require(`../commands/${file}`);
      let commandName = file.split(".")[0];
      console.log(`Attempting to load command ${commandName}`);
      client.commands.set(commandName, props);
    });
  });
};