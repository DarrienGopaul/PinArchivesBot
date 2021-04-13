module.exports = (Discord, beepBop, message) => {
    const prefix = '!';

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = beepBop.commands.get(cmd);

    if(command) command.execute(beepBop, message, args, Discord);
}