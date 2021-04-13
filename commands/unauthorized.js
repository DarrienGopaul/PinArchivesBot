module.exports={
    name:'unauthorized',
    description: "WHEN PEOPLE TRYNA ACCESS THE SECRET STUFF",
    execute(beepBop, message, args) {
        message.channel.send("**UNATHORIZED ACCESS**");
    }
}