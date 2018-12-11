module.exports = function ExitCommand(mod) {
    
    mod.command.add(['exit', 'quit'], () => {
        mod.send('C_EXIT', 1, {});
    });
}
