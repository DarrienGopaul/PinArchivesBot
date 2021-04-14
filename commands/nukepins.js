// const Discord = require("discord.js");

module.exports= {
    name: 'nukepins',
    description: "deletes pins in a channel",
    execute(beepBop, message, args, Discord) {
        message.channel.send("deleting pins...");
        
        message.channel.messages.fetchPinned()
        .then(messages => {
            const pins = messages.array();
            for (var i = 0; i < pins.length; i++) {
                pins[i].unpin()
                .then(console.log)
                .catch(console.error)
            }
        })
        .catch(console.error);
    }
}