module.exports= {
    name: 'help',
    description: "shows all commands that are useable toi the public",
    execute(beepBop, message, args) {
        message.channel.send("```md\nAVAILABLE COMMANDS\
        \n----------------------------\
        \nCOMMANDS THAT PRINT TEXT\
        \n----------------------------\
        \n!alpha\
        \n!furry\
        \n\
        \nCOMMANDS BASED ON PEOPLE\
        \n----------------------------\
        \n!xeno\
        \n!winston\
        \n!corn\
        \n!leena\
        \n!john\
        \n!johnny\
        \n!dill\
        \n\
        \nCOMMANDS FOR PICTURES/VIDEOS\
        \n----------------------------\
        \n!cringe\
        \n!pogchamp\
        \n!crop\
        \n!sus\
        \n!bog\
        \n!drip\
        \n\
        \nCOMMANDS THAT DO COOL THINGS\
        \n----------------------------\
        \n!cointoss\
        \n!archivepins\
        \n```");
    }
}

/**************************
List of secret commands {

    !secretfetishstash
    !mydarling
    !nukepins

}
**************************/

// module.exports={
//     name:'',
//     description: "",
//     execute(beepBop, message, args) {
//     }
// }