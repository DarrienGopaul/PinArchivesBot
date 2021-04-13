// const Discord = require("discord.js");

module.exports= {
    name: 'mydarling',
    description: "SECRET COMMAND FOR CORNS ADDICTION",
    execute(beepBop, message, args, Discord) {

        const myStash = ["https://cdn.discordapp.com/attachments/828657881032556561/828661015079813130/IMG_2936.jpg",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828661026458304582/IMG_2926.PNG",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828662228382777364/unknown.PNG",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828662981977702410/RPReplay_Final1613521492.MP4",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828663053544325130/IMG_3144.PNG",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828663059852820521/IMG_3121.PNG",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828663249188552754/IMG_3168.PNG",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828663250966937640/IMG_3166.PNG",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828664490265804830/IMG_3190.PNG",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828664615272710164/IMG_3213.PNG",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828664616623931453/IMG_3214.PNG",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828664728158601226/IMG_3234.jpg",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828664728024776784/IMG_3362.jpg",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828664732818473020/IMG_3278.PNG",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828664825055412244/IMG_3367.jpg",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828664825247957042/IMG_3364.PNG",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828664825172721684/IMG_3365.PNG",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828664825893617664/IMG_3366.PNG",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828665501197533194/IMG_3401.jpg",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828665501957619752/IMG_3405.jpg",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828665501882122280/IMG_3399.jpg",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828665509884198942/IMG_3406.PNG",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828665642903011338/unknown.PNG",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828665644534726657/IMG_3411.jpg",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828665822107926538/unknown.PNG",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828665822167695400/unknown.PNG",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828665822191943720/unknown.PNG",
                        "https://cdn.discordapp.com/attachments/828657881032556561/828900674745270313/unknown.png",
                        "https://cdn.discordapp.com/attachments/825294188773638164/826032646042812416/image0.JPG",
                        "https://cdn.discordapp.com/attachments/825294188773638164/826032646051201054/image0.JPG",
                        "https://cdn.discordapp.com/attachments/825294188773638164/826032647058489394/image0.PNG",
                        "https://cdn.discordapp.com/attachments/825294188773638164/826032648312324156/image0.JPG",
                        "https://cdn.discordapp.com/attachments/825294188773638164/826032649491447848/IMG_3219.PNG",
                        "https://cdn.discordapp.com/attachments/825294188773638164/826032649394192394/IMG_3218.PNG",
                        "https://cdn.discordapp.com/attachments/825294188773638164/826032651197480980/IMG_3076.PNG",
                        "https://cdn.discordapp.com/attachments/825294188773638164/826032651043471370/IMG_3072.PNG"];

        let embed = new Discord.MessageEmbed();

        for (var i = 0; i < myStash.length; i++) {
            message.channel.send(embed.setColor("#e87c24").setDescription(myStash[i]).setImage(myStash[i]));
        }
        message.channel.send("https://cdn.discordapp.com/attachments/800889105532977172/828466359449026631/video0.mov");
    }
}