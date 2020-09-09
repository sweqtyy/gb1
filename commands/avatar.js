const Discord = require('discord.js');
 
module.exports = {
    name: 'avatar',
    description: 'returns a users avatar',
    execute(message, args){
        const embed = new Discord.MessageEmbed()
 
        if(!message.mentions.users.first()){
            embed.setTitle(`Your Avatar:`)
            embed.setColor("RANDOM")
            embed.setImage(message.author.displayAvatarURL({dynamic: true, size: 2048}))
            embed.setFooter(text = "made by sweqtyy#0001.", iconURL = 'https://media.giphy.com/media/JogsJZQiuEg5NvfRNL/giphy.gif')

            return message.channel.send(embed)
        }else{
            const user = message.mentions.users.first()
            embed.setTitle(`${user.tag}'s Avatar:`)
            embed.setColor('RANDOM')
            embed.setFooter(text = "made by sweqtyy#0001.", iconURL = 'https://media.giphy.com/media/JogsJZQiuEg5NvfRNL/giphy.gif')
            embed.setImage(user.displayAvatarURL({dynamic: true, size: 2048}))
            return message.channel.send(embed)
        }
    }
}
