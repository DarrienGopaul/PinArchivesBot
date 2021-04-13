// const Discord = require("discord.js");

module.exports= {
    name: 'archivepins',
    description: "Takes pins from a channel and archives them to elsewhere",
    execute(beepBop, message, args, Discord) {
        message.channel.send("Archiving pins to #pins...");
        
        message.channel.messages.fetchPinned()
        .then(messages => {
            const pins = messages.array();
            console.log(pins.length);
            const destination = beepBop.channels.cache.find(channel => channel.name == "pinarchive");
            for (var i = 0; i < pins.length; i++) {
                let pin = pins[i];
                if (pin.attachments.size > 0) {
                    pin.attachments.forEach(attachment =>{
                        let embed = new Discord.MessageEmbed()
                        let imageURL = attachment.proxyURL;
                        destination.send(embed.setColor("#97e0ff").setDescription("Message link: " + pin.url + "\n\n Content: " + imageURL).setImage(imageURL).setAuthor(pin.author.tag, pin.author.displayAvatarURL())); 
                    })
                } else {
                    let embed = new Discord.MessageEmbed()
                    destination.send(embed.setColor("#97e0ff").setDescription("Message link: " + pin.url + "\n\n Content: " + pin.content).setAuthor(pin.author.tag, pin.author.displayAvatarURL()));
                }
            }
        })
        .catch(console.error);
    }
}