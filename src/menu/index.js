export const init_menu = (bot) => {
    try {
        bot.api.setMyCommands([
            { command: "start", description: "Start bot" },
            { command: "help", description: "Get instuctions" },
            { command: "d4", description: "Roll a D4 dice" },
            { command: "d6", description: "Roll a D6 dice" },
            { command: "d8", description: "Roll a D8 dice" },
            { command: "d10", description: "Roll a D10 dice" },
            { command: "d12", description: "Roll a D12 dice" },
            { command: "d20", description: "Roll a D20 dice" },
            ])
    }
    catch (error) {
        console.log('Menu init error',error)
    }
};