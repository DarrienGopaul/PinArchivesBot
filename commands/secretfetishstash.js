// const Discord = require("discord.js");

module.exports= {
    name: 'secretfetishstash',
    description: "SECRET COMMAND FOR LEENAS ADDICTION",
    execute(beepBop, message, args, Discord) {
        const leenaStash = ["https://cdn.discordapp.com/attachments/800889105532977172/828469195360174100/unknown.png", 
                        "https://cdn.discordapp.com/attachments/800889105532977172/828469306747519036/image0.png",
                        "https://cdn.discordapp.com/attachments/800889105532977172/828469357121896509/unknown.png",
                        "https://cdn.discordapp.com/attachments/800889105532977172/828469415593902080/unknown.png",
                        "https://cdn.discordapp.com/attachments/493141612491177987/815459606619750430/unknown.png",
                        "https://cdn.discordapp.com/attachments/800889105532977172/828482760200552448/unknown.png",
                        "https://cdn.discordapp.com/attachments/800889105532977172/828482798033305610/image0.png",
                        "https://cdn.discordapp.com/attachments/800889105532977172/828482826529013790/image0.png",
                        "https://cdn.discordapp.com/attachments/800889105532977172/828482859911348274/unknown.png",
                        "https://cdn.discordapp.com/attachments/800889105532977172/828482895131443240/image2.png",
                        "https://cdn.discordapp.com/attachments/800889105532977172/828482921013968927/image1.png",
                        "https://cdn.discordapp.com/attachments/493141612491177987/814624852027375676/image0.jpg",
                        "https://cdn.discordapp.com/attachments/800889105532977172/828483137956872212/IMG_3354.png",
                        "https://cdn.discordapp.com/attachments/800889105532977172/828483181438697483/image3.png",
                        "https://cdn.discordapp.com/attachments/800889105532977172/828483283025133568/unknown.png",
                        "https://cdn.discordapp.com/attachments/278310274463694848/578043421239803914/20190219_112403.jpg",
                        "https://cdn.discordapp.com/attachments/800889105532977172/828483636478607360/20190518_001339.png",
                        "https://cdn.discordapp.com/attachments/553811788353896458/579160675839115284/20190518_001728.jpg",
                        "https://cdn.discordapp.com/attachments/809551338911563786/809551506910740480/image2.jpg",
                        "https://cdn.discordapp.com/attachments/809551338911563786/820478400346325032/image0.jpg",
                        "https://cdn.discordapp.com/attachments/809551338911563786/816222405038964756/image0.jpg",
                        "https://cdn.discordapp.com/attachments/800889105532977172/828548473925533716/image0.png"];
        
        let embed = new Discord.MessageEmbed();

        for (var i = 0; i < leenaStash.length; i++) {
            message.channel.send(embed.setColor("#97e0ff").setDescription(leenaStash[i]).setImage(leenaStash[i]));
        }
        
    }
}