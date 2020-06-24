const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("724730495245484078")
setInterval(function() {
channel.send(`سبام سبام سبام سبام سبام `);
}, 30)
})

client.login(process.env.BOT_TOKEN);