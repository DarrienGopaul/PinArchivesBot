const fs = require('fs');

module.exports = (beepBop, Discord) => {
    const load_dir = (dirs) => {
        const event_files = fs.readdirSync(`./events/${dirs}`).filter(file => file.endsWith('.js'));
        for (const file of event_files) {
            const event = require(`../events/${dirs}/${file}`);
            const event_name = file.split('.')[0];
            beepBop.on(event_name, event.bind(null, Discord, beepBop));
        }
    }
    ['client', 'group'].forEach(e => load_dir(e));
}