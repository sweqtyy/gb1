

module.exports = {
    name: "slowmode",
    description: "puts current channel in slowmode",
    execute(message, args){
        const Discord = require('discord.js');
    const bot = new Discord.Client();
        if (!message.member.hasPermission(["MANAGE_CHANNELS"])) return message.channel.send("You can\'t use this command! (Insufficient permissions)")
        var time = message.content.split(' ').slice(1).join('')
        if (isNaN(time)) {
            const embed = new Discord.MessageEmbed()
            .setDescription('Invalid duration given. Please make sure duration is in seconds and is ONLY numbers.')
            .setColor('RANDOM')
            .setFooter(text = "made by sweqtyy#0001.", iconURL = 'https://media.giphy.com/media/JogsJZQiuEg5NvfRNL/giphy.gif')
            return message.reply(embed)
                }
                if(time === ''){
                     const embed = new Discord.MessageEmbed()
                    .setDescription('Invalid duration given. Please make sure duration is in seconds and is ONLY numbers.')
                    .setColor('RANDOM')
                    .setFooter(text = "made by sweqtyy#0001.", iconURL = 'https://media.giphy.com/media/JogsJZQiuEg5NvfRNL/giphy.gif')
                    return message.reply(embed)               
                 }
               
         message.channel.setRateLimitPerUser(time)
         
        const embed = new Discord.MessageEmbed()
        
        .setTitle("Slowmode Set!")
        .setDescription(`Set slowmode to: ${time} seconds.`)
        .setColor('RANDOM')
        .setFooter(text = "made by sweqtyy#0001.", iconURL = 'https://media.giphy.com/media/JogsJZQiuEg5NvfRNL/giphy.gif')

        message.channel.send(embed)
    }
}