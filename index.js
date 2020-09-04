const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.TOKEN;

const PREFIX = '!!';

bot.on('ready', () =>{
    console.log('Ninja bot dude is online');

})

bot.on("guildMemberAdd", (member) => {

    const guild = bot.guilds.cache.get("750178747403206706");
    var memberCount = guild.members.cache.filter(member => !member.user.bot).size;  

    const embed = new Discord.MessageEmbed()

    .setTitle('Welcome to Your Average Chat Server')
    .setColor('#5cff00')
    .setDescription(`:wave: Welcome ${member.user}!
     Welcome to Your Average Chat Server! Enjoy your time here.
     Current member count: ${memberCount}`)
     .setFooter(text = "made by sweqtyy#0001.", iconURL = 'https://media.giphy.com/media/JogsJZQiuEg5NvfRNL/giphy.gif')
        let channel = bot.channels.cache.get('750179461068226740');

    channel.send(embed); 
});

bot.on("guildMemberRemove", (member) => {
    const guild = bot.guilds.cache.get("750178747403206706");
    var memberCount = guild.members.cache.filter(member => !member.user.bot).size;  

    const embed = new Discord.MessageEmbed()

    .setTitle('Goodbye.')
    .setColor('#ff0000')
    .setDescription(`:wave: Goodbye, ${member.user}.
    Current member count: ${memberCount}`)
    .setFooter(text = "made by sweqtyy#0001.", iconURL = 'https://media.giphy.com/media/JogsJZQiuEg5NvfRNL/giphy.gif')
    let channel = bot.channels.cache.get('750179461068226740');
    channel.send(embed); 
});
bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':

            const embed = new Discord.MessageEmbed()

            .setTitle(':ping_pong: Pong!')
            .setColor('#fafafa')
            .setDescription("`My Ping: `" + Math.round(bot.ws.ping) + "ms" )
            message.channel.send(embed)
            break;
    }
});
bot.on('ready', () =>{
    bot.user.setActivity('Greeting everyone in Your Average Chat Server! | https://discord.gg/8eHTCVD ', {type: );
})

bot.login(token)
