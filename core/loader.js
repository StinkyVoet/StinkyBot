const Discord = require("discord.js");
const configloader = require("./configurator.js");
const commandloader = require("./commandloader.js");
const eventloader = require("./eventloader.js");
const client = new Discord.Client();

exports.start = ()  => {
    configloader.LoadConfig(client);
    commandloader.LoadCommands(client);
    eventloader.LoadEvents(client);

    client.login("NjQ2MjYyOTgwNjg5Nzg4OTI4.XeTCVQ.9AKkcI5JIbvg68KHWeLOTO_jMcI");
}