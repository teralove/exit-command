const Command = require('command');

module.exports = function ExitCommand(dispatch) {
    const command = Command(dispatch);
    
    command.add('exit', () => {
        exitGame();
    });

    command.add('quit', () => {
        exitGame();
    });
    
    function exitGame() {
        dispatch.toServer('C_EXIT', 1, {});
    }
}
