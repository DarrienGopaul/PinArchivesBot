const Discord = require('discord.js');

// creating our own bot now
const beepBop = new Discord.Client();

const fs = require('fs');

//command containr
beepBop.commands = new Discord.Collection();
beepBop.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(beepBop, Discord);
})

// logging into discord bot KEEP AT END OF FILE
beepBop.login('***bottokenhere***');
