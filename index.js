const Discord = require('discord.js');
const bot = new Discord.Client();
const botversion = "v1.1";
const cguild = '759506065162371122';
const ownerID = '271387672986124289';
const PREFIX = '!!';
const fs = require('fs');
local token = 'NzUxMTk1ODM0NDY4NTMyMjk2.X1Fjow.Fx4nxsVxtgi7YAFolPZzxEMRj1s';
bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}

bot.on('ready', () =>{

    console.log(`Discord bot is now online, current version is: ` + botversion); 
    bot.guilds.cache.forEach(server => {
        var memberCount = server.members.cache.filter(member => !member.user.bot).size;  
        console.log("This bot is in " + server.name + " , and the server has " + server.memberCount + " people in this guild.");
    });
    
    
})

bot.on("guildMemberAdd", (member) => {

    const guild = bot.guilds.cache.get(cguild);
    var memberCount = guild.members.cache.filter(member => !member.user.bot).size;  

    const embed = new Discord.MessageEmbed()

    .setTitle('Welcome to the server!')
    .setColor('#5cff00')
    .setDescription(`:wave: Welcome ${member.user}!
     Welcome to the server! Enjoy your time here.
     Current member count: ${memberCount}`)
     .setFooter(text = "made by sweqtyy#0001.", iconURL = 'https://media.giphy.com/media/JogsJZQiuEg5NvfRNL/giphy.gif')
        let channel = bot.channels.cache.get('759507514391003147');

    channel.send(embed); 
});

bot.on("guildMemberRemove", (member) => {
    const guild = bot.guilds.cache.get(cguild);
    var memberCount = guild.members.cache.filter(member => !member.user.bot).size;  

    const embed = new Discord.MessageEmbed()

    .setTitle('Goodbye.')
    .setColor('#ff0000')
    .setDescription(`:wave: Goodbye, ${member.user}.
    Current member count: ${memberCount}`)
    .setFooter(text = "made by sweqtyy#0001.", iconURL = 'https://media.giphy.com/media/JogsJZQiuEg5NvfRNL/giphy.gif')
    let channel = bot.channels.cache.get('759507514391003147');
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
bot.on('message', message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        bot.commands.get('commands').execute(message, args);
    } else if(command === 'avatar'){
        bot.commands.get('avatar').execute(message, args);
    } else if(command === 'slowmode'){
        bot.commands.get('slowmode').execute(message, args);
    }
})

bot.on('ready', () =>{
    
    bot.user.setActivity('People join Avas Server! | https://discord.gg/36DrmYj ', {type: 'WATCHING' } );
   
    
})

bot.login(process.env.TOKEN) //using Heroku for getting our token.  
