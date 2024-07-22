import { GrammyError, HttpError  } from "grammy"


export const roll_dice = (n, mute) => {
    if(mute) return Math.floor(Math.random() * n) + 1
    return `You throw ${n}-side dice. The die came up as a ${Math.floor(Math.random() * n) + 1}`
}

export const menu_handler = (bot) => {    
        bot.command('d4', (ctx)=>{
            ctx.reply(roll(4))
        })
        bot.command('d6', (ctx)=>{
            ctx.reply(roll(6))
        })
        bot.command('d8', (ctx)=>{
            ctx.reply(roll(8))
        })
        bot.command('d10',(ctx)=>{
            ctx.reply(roll(10))
        })
        bot.command('d12', (ctx)=>{
            ctx.reply(roll(12))
        })
        bot.command('d20', (ctx)=>{
            ctx.reply(roll(20))
        })
        bot.catch((err)=>{
            const ctx = err.ctx;
            console.error(`Error while handling update ${ctx.update.update_id}:`);
            ctx.reply('Error request. Try again')

            if (e instanceof GrammyError) {
                console.error("Error in request:", e.description);
              } else if (e instanceof HttpError) {
                console.error("Could not contact Telegram:", e);
              } else {
                console.error("Unknown error:", e);
              }
        })
} 
        


