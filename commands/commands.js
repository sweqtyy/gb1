module.exports = {
    name: "commands",
    description: "Shows every avaliable command.",
    execute(message, args){
        const Discord = require('discord.js');
        const bot = new Discord.Client();

        const embed = new Discord.MessageEmbed()

    .setTitle('Command Help')
    .setColor('#fff2f2')
    .setDescription("Current commands available for this bot:\n**!!ping** - Pings the bot, checking its response time.\n**!!help** - Shows this menu.\n**!!avatar** - Shows users avatar. (To see another users avatar, simply mention them.)\n\nMore commands to use coming soon!")
     .setFooter(text = "made by sweqtyy#0001.", iconURL = 'https://media.giphy.com/media/JogsJZQiuEg5NvfRNL/giphy.gif')
        

    message.channel.send(embed)  
 }
}
