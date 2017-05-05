//vers 1.0

const format = require('./format.js');

module.exports = function ExitCommand(dispatch) {
			
    dispatch.hook('C_CHAT', 1, function(event) {
		let command = format.stripTags(event.message).split(' ');
		
		if (['!quit', '!exit'].includes(command[0].toLowerCase())) {
			exitGame();
			return false;
		}
	});	
	
	function exitGame() {
		dispatch.toServer('C_EXIT', 1, {});
	}
	
	// slash support, thanks to wuaw for snippet
	try {
		const Slash = require('slash')
		const slash = new Slash(dispatch)
		slash.on('quit', args => exitGame())
		slash.on('exit', args => exitGame())
	} catch (e) {
		// do nothing because slash is optional
	}

}