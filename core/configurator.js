const config = require("../config/config.json");

exports.LoadConfig = (client) => {
    client.config = config;
}