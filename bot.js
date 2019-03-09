var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';


// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

function getMember(userID){
	var member = server.members[userID]; return member;
}


bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
			case 'game':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hello, ' + user + '. You are playing ' +  + '.'
                });
				
			//Call tournament	
			case 'tournament':
			var commander = getMember(userID);
			logger.info('Tournament command registered by ' + String(commander.roles[0]));
			
			//Check to see if the person starting the tournament has proper permissions
              
			;

			
            break;
            // Just add any case commands if you want to..
         }
     }
});

//Basic Tournament Organizer
