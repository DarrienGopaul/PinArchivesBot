module.exports={
    name:'cointoss',
    description: "flips a coin for head or tails and has a chance to land on its side",
    execute(beepBop, message, args) {
        var coin = Math.floor(Math.random() * 6000);
        if (coin < 2999) message.channel.send("Heads!");
        else if (coin > 2999) message.channel.send("Tails!");
        else message.channel.send("Coin landed on its side!");
    }
}